// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

// express

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const app = express();
const port = 5000;

var spotifyAccessTokenSet = false;
var spotifyAccessToken = null;

// use bodyParser as middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const setSpotifyAccessToken = () => {
  let tokenPromise = null;

  if (!spotifyAccessTokenSet) {
    tokenPromise = getSpotifyAccessToken()
      .then(res => {
        spotifyAccessTokenSet = true;
        return res.access_token;
      })
      .catch(err => {
        spotifyAccessTokenSet = false;
        console.log(err);
      });

    spotifyAccessToken = tokenPromise
      .then(accessToken => {
        return accessToken
      });
  }

  // Optional return value for calls requiring a token back
  return spotifyAccessToken;
};

const getSpotifyAccessToken = () => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Authorization': `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
    .then((respond) => {
      console.log('got new token');
      return respond.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getRecommendations = (weather, token) => {
  let features = FeatureWeather(weather.cityTemp, weather.cityCond, weather.cityCondDescription, weather.cityWind);
  const shuffled = spotifyGenres.sort(() => .5 - Math.random());
  let genres = shuffled.slice(0, 2).join(',');

  return axios({
    url: 'https://api.spotify.com/v1/recommendations',
    method: 'GET',
    // Merge features object with query options
    params: Object.assign(features, { seed_genres: genres, limit: 12, min_popularity: 15 }),
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      return res.data.tracks;
    })
    .catch((err) => {
      console.log(err)
    });
};

const tokenRefresher = () => {
  setSpotifyAccessToken();
  setTimeout(() => {
    spotifyAccessTokenSet = false;
    tokenRefresher()
  }, 3500000);
};
// Refresh token every 1 hour
tokenRefresher();

app.post('/api/songs', (req, res) => {
  setSpotifyAccessToken()
    .then(token => {
      return getRecommendations(req.body.weather, token)
    })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
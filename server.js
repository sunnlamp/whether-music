
require('dotenv').config()
const dataToWeather = require('./helpers/dataToWeather')
const genres = require('./helpers/genres')
// dependencies
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
//env variables
const spotifyClientID = process.env.SPOTIFY_ID
const spotifyClientSecret = process.env.SPOTIFY_SECRET
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT || 3001

var spotifyAccessTokenSet = false
var spotifyAccessToken = null
var weatherData = []
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const setSpotifyAccessToken = () => {
  let tokenPromise = null;

  if (!spotifyAccessTokenSet) {
    tokenPromise = getSpotifyAccessToken()
      .then(res => {
        spotifyAccessTokenSet = true
        return res.access_token
      })
      .catch(error => {
        spotifyAccessTokenSet = false
        console.log(error)
      })

    spotifyAccessToken = tokenPromise
      .then(accessToken => {
        return accessToken
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Optional return value for calls requiring a token back
  return spotifyAccessToken
}

const getSpotifyAccessToken = () => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Authorization': `Basic ${new Buffer.from(`${spotifyClientID}:${spotifyClientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })
}

const getRecommendations = (weather, token) => {
  let recommendationSeeds = dataToWeather.weatherConverter(weather)
  const shuffled = genres.sort(() => .5 - Math.random())
  let shuffledGenres = shuffled.slice(0, 2).join(',')
  
  return axios({
    url: 'https://api.spotify.com/v1/recommendations/',
    method: 'GET',
    // Merge features object with query options
    params: Object.assign(...recommendationSeeds, { seed_genres: shuffledGenres, limit: 12, min_popularity: 15 }),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return res.data.tracks;
  })
  .catch((error) => {
    console.log(error);
  })
}

const tokenRefresher = () => {
  setSpotifyAccessToken();
  setTimeout(() => {
    spotifyAccessTokenSet = false;
    tokenRefresher().catch(err => err);
  }, 3500000)
}
// Refresh token every 1 hour
tokenRefresher()

app.post('/api/songs', (req, res) => {
  setSpotifyAccessToken()
  .then(token => {
    let weather = req.body.params.weatherData
    return getRecommendations(weather, token)
  })
  .then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error + ": error in /api/songs")
  })
})

app.get('/api/weather', (req, res) => {
  let city = req.query.city
    
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial` + `&APPID=` + API_KEY)
    .then(response => {
      weatherData = response.data
      res.json(response.data)
    })
    .catch(error => {
      console.log(error + ': error occured')
    })
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
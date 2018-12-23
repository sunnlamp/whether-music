// dependencies
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
require('dotenv').config()

// express
const CLIENT_ID = process.env.ID
const CLIENT_SECRET = process.env.SECRET
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT || 3001

var spotifyAccessTokenSet = false
var spotifyAccessToken = null
var weatherData = []
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const setSpotifyAccessToken = () => {
//   let tokenPromise = null;

//   if (!spotifyAccessTokenSet) {
//     tokenPromise = getSpotifyAccessToken()
//       .then(res => {
//         spotifyAccessTokenSet = true
//         return res.access_token
//       })
//       .catch(err => {
//         spotifyAccessTokenSet = false
//         console.log(err)
//       })

//     spotifyAccessToken = tokenPromise
//       .then(accessToken => {
//         return accessToken
//       })
//   }

//   // Optional return value for calls requiring a token back
//   return spotifyAccessToken
// }

// const getSpotifyAccessToken = () => {
//   return axios({
//     url: 'https://accounts.spotify.com/api/token',
//     method: 'POST',
//     params: {
//       grant_type: 'client_credentials'
//     },
//     headers: {
//       'Authorization': `Basic ${new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//   })
//     .then((respond) => {
//       console.log('got new token')
//       return respond.data
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

// const getRecommendations = (weather, token) => {
//   let features = FeatureWeather(weather.cityTemp, weather.cityCond, weather.cityCondDescription, weather.cityWind)
//   const shuffled = spotifyGenres.sort(() => .5 - Math.random())
//   let genres = shuffled.slice(0, 2).join(',')

//   return axios({
//     url: 'https://api.spotify.com/v1/recommendations',
//     method: 'GET',
//     // Merge features object with query options
//     params: Object.assign(features, { seed_genres: genres, limit: 12, min_popularity: 15 }),
//     headers: {
//       'Authorization': `Bearer ${token}`
//     },
//   })
//     .then((res) => {
//       return res.data.tracks;
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// const tokenRefresher = () => {
//   setSpotifyAccessToken()
//   setTimeout(() => {
//     spotifyAccessTokenSet = false;
//     tokenRefresher()
//   }, 3500000)
// }
// // Refresh token every 1 hour
// tokenRefresher()

app.post('/api/songs', (req, res) => {
  setSpotifyAccessToken()
    .then(token => {
      return getRecommendations(req.body.weather, token)
    })
    .then(resp => {
      res.send(resp)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/api/weather', (req, res) => {
  let city = req.query.city
    
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}` + `&APPID=` + API_KEY)
    .then(response => {
      weatherData = response.data
      res.json(response.data)
    })
    .catch(error => {
      console.log('error occured')
    })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
const weatherConverter = (data) => {
  let weatherId = data.weather[0].id
  let weatherMain = data.weather.main
  let temperature = data.main.temp
  let humidity = data.main.humidity
  let windSpeed = data.wind.speed
  let clouds = data.clouds.all
  let recommendationSeeds = {}
  // energy float 0.0 - 1.0
  // min_energy max_energy
  // tempo float 0.0 - 1.0
  // min_tempo max_tempo
  // valence float  0.0 - 1.0
  // min_valence max_valence
  // popularity int 0 - 100
  // min_popularity max_popularity
  // mode major is 1 minor is 0
  // taret_mode
  switch (weatherId) {
    // thunderstorm light rain
    case 200:
      recommendationSeeds.mode 
      break
    // thunderstorm with rain
    case 201:

      break
    // thunderstorm with heavy rain
    case 202:

      break
    // light thunderstorm
    case 210:

      break
    // thunderstorm
    case 211:

      break
    // heavy thunderstorm
    case 212:

      break
    // ragged thunderstorm
    case 221:

      break
    // thunderstorm with light drizzle
    case 230:

      break
    // thunderstorm with drizzle
    case 231:

      break
    // thunderstorm with heavy drizzle
    case 232:

      break
    // light intensity drizzle
    case 300:

      break
    // drizzle
    case 301:

      break
    // heavy intensity drizzle
    case 302:

      break
    // light intensity drizzle rain
    case 310:

      break
    // drizzle rain
    case 311:

      break
    // heavy intensity drizzle rain
    case 312:

      break
    // shower rain and drizzle
    case 313:

      break
    // heavy shower rain and drizzle
    case 314:

      break
    // shower drizzle
    case 321:

      break
    // light rain
    case 500:

      break
    // moderate rain
    case 501:

      break
    // heavy intensity rain
    case 502:

      break
    // very heavy rain
    case 503:

      break
    // extreme rain
    case 504:

      break
    // freezing rain
    case 511:

      break
    // light intensity shower rain
    case 520:

      break
    // shower rain
    case 521:

      break
    // heavy intensity shower rain
    case 522:

      break
    // ragged shower rain
    case 231:

      break
    // light snow
    case 600:

      break
    // snow
    case 601:

      break
    // heavy snow
    case 602:

      break
    // sleet
    case 611:

      break
    // shower sleet
    case 612:

      break
    // light rain and snow
    case 615:

      break
    // rain and snow
    case 616:

      break
    // light shower snow
    case 620:

      break
    // shower snow
    case 621:
    
      break
    // heavy shower snow
    case 622:

      break
    // mist
    case 701:

      break
    // smoke
    case 711:

      break
    // haze
    case 721:

      break
    // sand, dust whirls
    case 731:

      break
    // fog
    case 741:

      break
    // sand
    case 751:

      break
    // dust
    case 761:

      break
    // volcanic ash
    case 762:
    
      break
    // squalls
    case 771:

      break
    // tornado
    case 781:

      break
    // clear
    case 800:

      break
    // few clouds
    case 801:

      break
    // scattered clouds
    case 802:

      break
    // broken clouds
    case 803:

      break
    // overcast clouds
    case 804:

      break
  }
}

// from available Spotify music genres
const genres = [
  "acoustic",
  "afrobeat",
  "alt-rock",
  "alternative",
  "ambient",
  "anime",
  "black-metal",
  "bluegrass",
  "blues",
  "bossanova",
  "brazil",
  "breakbeat",
  "british",
  "cantopop",
  "chicago-house",
  "children",
  "chill",
  "classical",
  "club",
  "comedy",
  "country",
  "dance",
  "dancehall",
  "death-metal",
  "deep-house",
  "detroit-techno",
  "disco",
  "disney",
  "drum-and-bass",
  "dub",
  "dubstep",
  "edm",
  "electro",
  "electronic",
  "emo",
  "folk",
  "forro",
  "french",
  "funk",
  "garage",
  "german",
  "gospel",
  "goth",
  "grindcore",
  "groove",
  "grunge",
  "guitar",
  "happy",
  "hard-rock",
  "hardcore",
  "hardstyle",
  "heavy-metal",
  "hip-hop",
  "holidays",
  "honky-tonk",
  "house",
  "idm",
  "indian",
  "indie",
  "indie-pop",
  "industrial",
  "iranian",
  "j-dance",
  "j-idol",
  "j-pop",
  "j-rock",
  "jazz",
  "k-pop",
  "kids",
  "latin",
  "latino",
  "malay",
  "mandopop",
  "metal",
  "metal-misc",
  "metalcore",
  "minimal-techno",
  "movies",
  "mpb",
  "new-age",
  "new-release",
  "opera",
  "pagode",
  "party",
  "philippines-opm",
  "piano",
  "pop",
  "pop-film",
  "post-dubstep",
  "power-pop",
  "progressive-house",
  "psych-rock",
  "punk",
  "punk-rock",
  "r-n-b",
  "rainy-day",
  "reggae",
  "reggaeton",
  "road-trip",
  "rock",
  "rock-n-roll",
  "rockabilly",
  "romance",
  "sad",
  "salsa",
  "samba",
  "sertanejo",
  "show-tunes",
  "singer-songwriter",
  "ska",
  "sleep",
  "songwriter",
  "soul",
  "soundtracks",
  "spanish",
  "study",
  "summer",
  "swedish",
  "synth-pop",
  "tango",
  "techno",
  "trance",
  "trip-hop",
  "turkish",
  "work-out",
  "world-music"
]

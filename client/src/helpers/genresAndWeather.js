const weatherConverter = (data) => {
  let weatherId = data.weather[0].id
  let temperature = data.main.temp
  let recommendationSeeds = {}
  // energy float 0.0 - 1.0
  // min_energy max_energy
  // tempo float 0.0 - 1.0
  // min_tempo max_tempo
  // valence (positiveness) float  0.0 - 1.0
  // min_valence max_valence
  // popularity int 0 - 100
  // min_popularity max_popularity
  // mode major is 1 minor is 0
  // taret_mode

  if (weatherId >= 200 && weatherId <= 203) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 210 && weatherId <= 212) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == 221) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 230 && weatherId <= 232) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  }

  if (weatherId >= 300 && weatherId <= 302) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 310 && weatherId <= 312) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId <= 313 && weatherId <= 321) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } 

  if (weatherId >= 500 && weatherId <= 501) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 502 && weatherId <= 504) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == 511) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 520 && weatherId <= 521) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= 522 && weatherId <= 531) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  }

  if (weatherId >= 600 && weatherId <= 601) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == 602) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == (611 || 612)) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == (615 || 616)) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == (620 || 621)) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == 622) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } 

  if (weatherId >= 701 && weatherId <= 762) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId >= (771 || 781)) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  }

  if (weatherId == 800) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == (802 || 803)) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  } else if (weatherId == 804) {
    recommendationSeeds.target_mode = 0
    recommendationSeeds.min_tempo = 0.3
    recommendationSeeds.max_tempo = 0.6
    recommendationSeeds.min_valence = 0.3
    recommendationSeeds.min_valence = 0.6
  }
}
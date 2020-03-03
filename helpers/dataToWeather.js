module.exports = {
  weatherConverter: function(data) {
    
    let weatherId = data.weather[0].id
    let temperature = data.main.temp
    let recommendationSeeds = []

    if (weatherId == (200 || 201)) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == 202) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.5
      recommendationSeeds.min_valence = 0.1
      recommendationSeeds.max_valence = 0.5
    } else if (weatherId == (210 || 212)) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == (212 || 221)) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.5
      recommendationSeeds.min_valence = 0.1
      recommendationSeeds.max_valence = 0.5
    } else if (weatherId >= 230 && weatherId <= 232) {
      recommendationSeeds.target_mode = 1
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    }

    if (weatherId >= 300 && weatherId <= 302) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId >= 310 && weatherId <= 312) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.5
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.5
    } else if (weatherId <= 313 && weatherId <= 321) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.4
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.5
    }

    if (weatherId == (500 || 501)) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.4
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId >= 502 && weatherId <= 504) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.5
      recommendationSeeds.min_valence = 0.4
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId == 511) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.4
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == (520 == 521)) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId >= 522 && weatherId <= 531) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.4
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.5
    }

    if (weatherId == (600 || 601)) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.4
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId == 602) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.4
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId == (611 || 612)) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == (615 || 616)) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == (620 || 621)) {
      recommendationSeeds.target_mode = 1
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId == 622) {
      recommendationSeeds.target_mode = 1
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.7
    }

    if (weatherId >= 701 && weatherId <= 762) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId >= (771 || 781)) {
      recommendationSeeds.min_tempo = 0.2
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.7
    }

    if (weatherId == 800) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.7
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.7
    } else if (weatherId == (802 || 803)) {
      recommendationSeeds.min_tempo = 0.3
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.3
      recommendationSeeds.max_valence = 0.6
    } else if (weatherId == 804) {
      recommendationSeeds.target_mode = 0
      recommendationSeeds.min_tempo = 0.1
      recommendationSeeds.max_tempo = 0.6
      recommendationSeeds.min_valence = 0.2
      recommendationSeeds.max_valence = 0.7
    }

    switch (temperature) {
      case (temperature <= 32):
        recommendationSeeds.target_energy = 0.3
        break
      case (temperature <= 64):
        recommendationSeeds.target_energy = 0.6
        break
      case (temperature <= 96):
        recommendationSeeds.target_energy = 0.9
      case (temperature > 96):
        recommendationSeeds.target_energy = 1.0
      default:
        break
    }

    recommendationSeeds.target_popularity = 25
    
    return recommendationSeeds
  }
}

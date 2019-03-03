import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/horoscopes/'
export default {

  getTodaysHoroscopes () {
    return axios.get(API_URL)
  },

  postHoroscopeToList (horoscope) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        horoscope: horoscope
      })
    })
  }
}

<template>
  <div>
    <h1>Horoskop {{ getFormat() }}</h1>
    <div class="horoscopes-container">
      <v-zodiac
        v-for="(value, key) in horoscopes"
        v-bind:text="value"
        v-bind:zodiacSign="key"
        v-bind:key="key">
      </v-zodiac>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import Zodiac from './Zodiac.vue'
const API_URL = 'http://84.216.179.175:8080/horoscopes/'

export default {
  name: 'Horoscopes',
  data () {
    return {
      horoscopes: null,
      loading: true,
      format
    }
  },
  components: {
    'v-zodiac': Zodiac
  },
  methods: {
    getFormat () {
      return this.format(new Date(), 'Do MMMM[,] YYYY')
    }
  },
  created () {
    fetch(API_URL)
      .then(res => res.json())
      .then((result) => {
        this.horoscopes = result
      }, (error) => {
        console.log(error)
      }, () => {
        this.loading = false
      })
  }
}
</script>

<style scoped>
.horoscopes-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 20rem;
    margin-right: 20rem;
}

h1 {
    text-align: center;
    color: var(--blue);
}

</style>

<template>
  <div class="zodiac-container">
   <h3>{{ sign }}</h3>
    <blockquote>
      <p>{{ horoscope }} </p>
    </blockquote>
    <div class="buttons">
      <v-button
        class="button"
        :onClick='refreshClick'>
        <i
          class="fas fa-lg fa-redo-alt"
          :class="{spin: refreshed, }"></i>
      </v-button>
      <v-button
        class="button"
        :onClick='likeClick'
        >
        <i
          class="fas fa-lg fa-heart"
          :class="{heartBeat: liked}"></i>
      </v-button>
    </div>
  </div>
</template>

<script>
import Button from './Button'
const API_URL = 'http://84.216.179.175:8080/horoscope/'

export default {
  name: 'Zodiac',
  props: ['text', 'zodiacSign'],
  components: {
    'v-button': Button
  },
  data () {
    return {
      sign: this.zodiacSign,
      horoscope: this.text,
      liked: false,
      refreshed: false
    }
  },
  methods: {
    likeClick (event) {
      event.target.disabled = true
      if (this.liked === false) {
        this.liked = true
        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            horoscope: this.horoscope
          })
        })
      }
    },
    refreshClick (event) {
      event.target.disabled = true
      if (this.refreshed === false) {
        this.refreshed = true
        fetch(API_URL)
          .then(res => res.json())
          .then((result) => {
            this.horoscope = result
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
.zodiac-container {
    width: 20rem;
    padding: 1rem;
    background-color: var(--blue);
    margin: 1rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
}

blockquote {
  flex-grow: 2;
  position: relative;
}

/* blockquote p:before {
    content: '\201C';
    font-family: 'Abril Fatface', cursive;
    color: var(--blue);
    filter: brightness(70%);
    font-size: 12.5em;
    font-weight: 700;
    opacity: 1;
    position: absolute;
    top: -.4em;
    left: -.17em;
    text-shadow: none;
    z-index: 1;
} */

blockquote p {
    color: var(--white);
    padding: .5rem 1rem .5rem 1rem;
    z-index: 10;
}

h3 {
    text-align: center;
    color: var(--white);
    flex-grow: 1;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.button:hover:enabled .fa-redo-alt {
  animation: spinHover 1s ease infinite;
  -webkit-animation: spinHover 1s ease infinite;
}

.spin {
  animation: spin 1s ease-out 1;
  -webkit-animation: spin 1s ease-out 1;
}

.button:hover:enabled .fa-heart {
  animation: beatHeartHover 2s ease infinite;
  -webkit-animation: beatHeartHover 2s ease infinite;
}

.heartBeat {
  animation: beatHeart 2s ease 1;
  -webkit-animation: beatHeart 2s ease 1;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinHover {
  0% {
    transform: rotate(20deg)
  }
  50% {
    transform: rotate(60deg)
  }
  100% {
    transform: rotate(20deg);
  }
}

@-webkit-keyframes spinHover {
  0% {
    transform: rotate(20deg)
  }
  50% {
    transform: rotate(60deg)
  }
  100% {
    transform: rotate(20deg);
  }
}

@-webkit-keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes beatHeartHover {
  0% {
    transform: scale(.9);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(.9);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(.9);
  }
}

@-webkit-keyframes beatHeartHover {
  0% {
    transform: scale(.9);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(.9);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(.9);
  }
}

@keyframes beatHeart {
  0% {
    transform: scale(.8);
  }
  25% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(.8);
  }
  60% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes beatHeart {
  0% {
    transform: scale(.8);
  }
  25% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(.8);
  }
  60% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
}

</style>

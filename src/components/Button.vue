<template>
<button @click="onClick" class="button">
  <div id="icon">
    <slot>Knapp</slot>
  </div>
</button>

</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }

}
</script>

<style scoped>
.button {
  padding: .8rem;
  margin: .5rem 1rem .5rem 1rem;
  height: 3rem;
  border-radius: 20px;
  background-color: transparent;
  color: var(--lightGreen);
  border: 3px solid var(--lightGreen);
  cursor: pointer;
  transition: all .3s ease-out;
  position: relative;
  bottom: 0;
}

.button:disabled {
  filter: brightness(50%);
  cursor:default;
}

.button:hover:enabled {
  background-color: var(--lightGreen);
  color: var(--blue);
  transform: scale(1.05);
}

.spin {
  animation: spin 1s ease-out 1;
  -webkit-animation: spin 1s ease-out 1;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

</style>

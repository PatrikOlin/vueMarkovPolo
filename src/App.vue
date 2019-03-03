<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --blue: #05386b;
  --darkGreen: #379683;
  --green: #5CDB95;
  --lightGreen: #8EE4AF;
  --white: #EDF5E1;
}

body {
  background-color: var(--green);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Abril Fatface', sans-serif;
}

h1 {
  font-size: 5rem;
  word-spacing: 15px;
}

h2 {
  font-size: 3rem;
  word-spacing: 15px;
}

h3 {
  font-size: 2rem;
  word-spacing: 15px;
}

* {
  font-family: 'Open Sans', sans-serif;
}

</style>

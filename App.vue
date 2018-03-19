<template>
    <div id="app">
      <Slider></Slider>
    </div>
</template>

<script>
import Slider from './slider.vue'
export default {
    name: 'app',
    components:{
      Slider
    }
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
  font-style: normal;
  font-size: 12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
</style>

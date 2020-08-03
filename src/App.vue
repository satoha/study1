<template>
  <div id="app">
    <Header></Header>
    <div class="fix"></div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #B4C498;
}
Header{
  z-index: 100;
}
.fix{
  height: 6rem;
}
</style>

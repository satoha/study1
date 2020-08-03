<template>
  <div id="app">
    <Header></Header>
    <b-container class="cont">
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
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
}

.cont{
  height: 2000px;
}
Header{
  z-index: 100;
}
</style>

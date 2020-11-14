<template>
  <div id="app">
    <Nav/>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
// import $ from 'jquery'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  .router-view {
    /* margin-top: 30px; */
    
  }
  html {
    font-size:100px;
    width: 100%;
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>

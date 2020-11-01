<template>
  <div id="app">
    <Nav/>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  .router-view {
    margin-top: 30px;

  }
  html {
    font-size:100px;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>

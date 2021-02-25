<template>
  <div id="app">
    <main-tabbar class="main-tabbar"></main-tabbar>
    <router-view></router-view>
  </div>
</template>


<script>
import mainTabbar from 'components/content/tabbar/mainTabbar'
export default {
  name: 'app',
  components:{
    mainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  .main-tabbar {
    z-index: 100;
  }
</style>



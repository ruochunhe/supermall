<template>
  <div id="app">
    <main-tabbar class="main-tabbar" v-if="$route.path !== '/detail'"></main-tabbar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import mainTabbar from 'components/content/tabbar/mainTabbar'
export default {
  name: 'app',
  components:{
    mainTabbar
  },
}

</script>

<style>
  @import 'assets/css/base.css';
  .main-tabbar {
    z-index: 100;
  }
</style>



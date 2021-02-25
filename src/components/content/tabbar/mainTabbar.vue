<template>
  
  <tabbar>
    <tabbar-item path="/home" activeColor="deepPink">
      <img slot="itemIcon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="itemActiveIcon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="itemText">首页</div>
    </tabbar-item>
    <tabbar-item path="/category"> activeColor="deepPink"
      <img slot="itemIcon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="itemActiveIcon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="itemText">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="deepPink">
      <img slot="itemIcon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="itemActiveIcon" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="itemText">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="deepPink">
      <img slot="itemIcon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="itemActiveIcon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="itemText">我的</div>
    </tabbar-item>
  </tabbar>
  
  
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbarItem from 'components/common/tabbar/tabbarItem'
export default {
  name:'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="homeNavBar">
    <nav-bar>
      <div slot="middle">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
export default {
  name: 'homenavbar',
  components: {
    navBar
  }
}
</script>

<style scoped>
  .homeNavBar{
    background: var(--color-tint);
    color:aliceblue
  }
</style>
<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style scoped>
  .navBar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left, .right {
    width:60px
  }
  .middle{
    flex: 1
  }
</style>
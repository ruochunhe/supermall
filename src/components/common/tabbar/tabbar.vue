<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar'

}
</script>

<style scoped>
  #tabbar {
    height: 49px;
    width: 100%;
    background: #f6f6f6;
    box-shadow: 0 -2px 2px rgba(88, 88, 88,.1);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    text-align: center;
  }

</style>
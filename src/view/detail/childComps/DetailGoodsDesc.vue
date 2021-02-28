<template>
  <div class="goodsDesc">
    <div class="line lineTop"></div>
    <div>{{this.detailInfoDesc}}</div>
    <div class="line lineButton"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsDesc',
  props: {
    detailInfoDesc: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
  .goodsDesc {
    padding: 15px 0;
    margin: 15px 15px 0 15px;
    position: relative;
    font-size: 14px;
  }
  .line {
    position: absolute;
    width: 90px;
    height: 1px;
    background: #a3a3a5;
  }
  .lineTop {
    top: 0px;
    left: 0;
  }
  .lineTop::before{
    content: '';
    width: 5px;
    height: 5px;
    background: #333;
    display: block;
    position: relative;
    top: -5px
  }
  .lineButton {
    /* top: 0; */
    right: 0px;
    bottom: 10px;
  }
  .lineButton::after{
    content: '';
    width: 5px;
    height: 5px;
    background: #333;
    display: block;
    position: relative;
    bottom: 5px;
    left: 100%;
    transform: translateX(-100%);
  }
</style>
<template>
  <div class="carBottmBar">
    <div class="bar-left">
      <div >
        <div class="icon service"></div>
        <div>客服</div>
      </div>
      <div>
        <div class="icon shop"></div>
        <div>店铺</div>
      </div>
      <div>
        <div class="icon select"></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="bar-add">
      <p>加入购物车</p>
    
    </div>
    <div class="bar-buy">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarBottmBar'
}
</script>

<style scoped>
  .carBottmBar {
    width: 100vw;
    position: fixed;
    bottom: 0;
    height: 49px;
    display: flex;
    text-align: center;
  }
  .icon {
    text-align: center;
    margin-bottom: 6px;
    width: 22px;
    height: 22px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .service {
    background-position: 0 -54px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .icon~div{
    font-size: 13px;
  }
  .bar-left{
    width: 50%;
    display: flex;
    padding-top: 4px
    /* padding: 0 18px; */
  }
  .bar-left>div{
    flex:1
  }
  .bar-add{
    width: 30%;
    line-height: 49px;
    background:  #ffe817;
    color: #333;
    
    
  }
  .bar-buy{
    width: 20%;
    line-height: 49px;
    background-color: #f69;

  }
  
</style>
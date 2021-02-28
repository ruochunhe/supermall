<template>
  <div class="detailBaseInfo" v-if="isGetGood">
    <p class="goodsTitle">{{goods.title}}</p>
    <div class="goodsPrice">
      <span class="goodsPriceNow">{{goods.priceInfo.price}}</span>
      <span class="goodsPriceOld">{{goods.priceInfo.oldPrice}}</span>
      <span class="goodsDiscountDesc" :style="{background: goods.discountBgColor}" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="goodsColumns">
      <div class="goodsColumns1">{{goods.columns[0]}}</div>
      <div class="goodsColumns2">{{goods.columns[1]}}</div>
      <div class="goodsColumns3">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="goodsServices">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
        </div>
    </div>
  </div>
  <!-- 你都没有这个属性  priceInfo ， 后面的 就是 undefinde
  我传进来的
  你看这里 我的页面里面显示的数据
  是数据 没渲染吗？
  啥意思 没渲染？但是他页面也加载出来了  但控制台却报错
  woxiangyiha1 我想一哈 我遇到过 忘了怎么决绝的了 
  -->
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods:{
      type: Object,
      default() {
        return {
          priceInfo: {},
          columns: []
        }
      }
    }
  },
  data(){
    return {
      isGetGood: false
    }
  },
  watch: {
    goods: {
      //防止数据加载慢 页面不渲染
      handler(n) {
        this.goods = n
        if(!this.isGetGood) {
          this.isGetGood = true
        }
      }
    }
  },
  mounted(){
    //防止数据加载慢 页面不渲染
    if(this.goods.length > 0) {
      this.isGetGood = true
    }
  },
  updated(){
  }

}
</script>

<style scoped>
  .detailBaseInfo {
    margin-top: 15px;
    width: 100vw;
    padding: 0 8px;
    /* line-height: 20px;; */
  }
  .goodsPrice {
    margin-top: 10px;
    font-size: 24px;
    line-height: 30px;
   } 
   .goodsPrice span {
     margin-right: 4px;
   }
  .goodsPriceNow {
    color: var(--color-high-text)
  } 
  .goodsPriceOld {
    font-size: 12px;
    color: #999999;
    text-decoration: line-through;
  } 
  .goodsDiscountDesc {
    font-size: 12px;
    color: white;
    border-radius: 2.13333vw;
    padding: 3px;
    position: relative;
    top: -10px;

  }
  .goodsColumns, .goodsServices{
    display: flex;
    justify-content: space-between;

   

  }
  .goodsColumns {
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f2f5f8;
  }
  .goodsColumns div {
    font-size: 13px;
    color: #999999;
  }

  .goodsServices {
    color: #333333;
    font-size: 13px;
    justify-content: space-between;
    padding: 15px 0;
  }
  .goodsServices img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 1.5px;
    left: -2px
  }


</style>
<template>
  <div class="shopInfo">
    <div class="shopName">
      <img :src="shopInfo.shopLogo" alt="">
      <p class="shopNameDetail">{{shopInfo.name}}</p>
    </div>
    <div class="shopMessage">
      <div class="shopMessageLeft">
        <div>
          <div class="cNum">{{cSells}}</div>
          <div class="cText">总销量</div>
        </div>
        <div class="cGoods">
          <div class="cNum">{{shopInfo.cGoods}}</div>
          <div class="cText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMessageRight">
        <div v-for=" (item,index) in shopInfo.score" :key="index" class="shopScore">
          <div class="shopScoreName">{{item.name}}</div>
          <div class="shopScoreNum" :style="{color: item.isBetter ? '#f13e3a' : '#5ea732' }">{{item.score}}</div>
          <div class="shopScoreType" :style="{background: item.isBetter ? '#f13e3a' : '#5ea732' }">{{ item.isBetter ? '高' : '低' }}</div>
        </div>
      </div>
    </div>
    <div class="enterShop">
      进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data(){
    return {
      
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    cSells() {
      if(this.shopInfo.cSells > 10000) {
        return ( this.shopInfo.cSells / 10000 ).toFixed(1) + '万'
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped> 
  .shopInfo {
    padding: 25px 8px;
    border-top: 4px solid #f2f5f8;
    border-bottom: 4px solid #f2f5f8;
    text-align: center
  }
  .shopName {
    display: flex;
  }
  .shopName img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 50%;
  }
  .shopName .shopNameDetail {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    margin-left: 10px;
  }
  .shopMessage {
    margin-top: 15px;
    display: flex;
  }
  .shopMessageLeft, .shopMessageRight {
    /* width: 48%; */
    flex: 1
  }  
  .shopMessageLeft {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding-top: 16px;
    border-right: 1px solid rgba(0,0,0,.1)
  }
  .shopMessageLeft>div {
    /* margin-top:  */

  }
  .cGoods {
    
  }
  .cNum {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .cText {
    font-size: 12px;
  }
  .shopMessageRight {
    font-size: 13px;

  }
  .shopScore{
    margin-left: 30px;
    padding: 5px 0;
    display: flex;

  }
  .shopScoreName{
    text-align: center;
    margin-right: 10px
  }
  .shopScoreNum{
    width: 32px;
    margin-right: 10px

  }
  .shopScoreType{
    color: white
  }
  .enterShop {
    font-size: 14px;
    width: 140px;
    height: 30px;
    line-height: 30px;
    background-color: #f2f5f8;
    border-radius: 10%;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 14px;
  }

</style>
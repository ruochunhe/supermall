<template>
  <div class="detail">
    <detail-nav-bar @detailNavBarClick="detailNavBarClick" :currentIndex="currentIndex"></detail-nav-bar>
    <scroll ref="scroll" class="wrapperDetail" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topmages="topImages" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-desc :detailInfoDesc="detailInfoDesc"></detail-goods-desc>
      <detail-info :detailImage="detailImage" @detailImgLoad="detailImgLoad"></detail-info>
      <detail-params :itemParams="itemParams" ref="params"></detail-params>
      <detail-comment :rate="rate" ref="comment"></detail-comment>
      <goods-list :goods="goodsList" class="goodsList" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <car-bottm-bar></car-bottm-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import GoodsList from 'components/content/goods/GoodsList'
import CarBottmBar from 'components/content/carbottmbar/CarBottmBar'


import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsDesc from './childComps/DetailGoodsDesc'
import DetailInfo from './childComps/DetailInfo'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'


import {getDetail, Goods, TopImages, ShopInfo, getRecommend} from 'network/detail.js'
import {backTopMixin} from 'common/mixin.js'
import {debounce} from 'common/utils.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsDesc,
    DetailInfo,
    DetailParams,
    DetailComment,
    DetailRecommend,
    GoodsList,
    Scroll,
    BackTop,
    CarBottmBar
  },
  data(){
    return {
      goods: {},
      topImages: [],
      shopInfo: {},
      detailInfoDesc: null,
      detailImage: [],
      itemParams: {},
      rate: {},
      goodsList: [],
      currentIndex: 0,
      themTops: []
    }
  },
  mixins: [backTopMixin],
  created() {
    //获取除推荐外数据
    this.getDetail()
    //获取推荐数据
    this.getRecommend()
    },
  methods: {
    //获取除推荐外数据的函数
    getDetail(){
      let iid = this.$route.query.iid
      console.log(iid);
      getDetail(iid).then( res => {
        const data = res.result
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.topImages = new TopImages(data.itemInfo.topImages).topImages
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.detailInfoDesc = data.detailInfo.desc
        this.detailImage = data.detailInfo.detailImage
        this.itemParams = data.itemParams
        this.rate = data.rate
      })
    },
    //获取推荐数据的函数
    getRecommend(){
      getRecommend().then(res => {
        this.goodsList = res.data.list
      })
    },
    //监听滚动的函数
    contentScroll(position){
      //滚动大于3000显示backTop
      let Y = -position.y
      this.isShowBackTop = Y > 3000
      //滚动到具体区域显示对应的nav-bar
      if(this.themTops.length !==0){
        for(let i =0; i < this.themTops.length-1; i++){
          if( this.currentIndex != i && (Y >=this.themTops[i] && Y < this.themTops[i+1]) ){
            this.currentIndex = i
          }
        }
      }
    },
    //监听NavBar Click函数
    detailNavBarClick(index){
      this.currentIndex = index
      const y = -this.themTops[this.currentIndex]
      console.log(this.themTops[this.currentIndex]);
      this.$refs.scroll.scrollTo(0,y)
      console.log(this.currentIndex,index);
    },
    //详情图片加载完毕
//swiper params comment recommend

    detailImgLoad() {
      this.themTops = []
      this.themTops.push(this.$refs.swiper.$el.offsetTop)
      this.themTops.push(this.$refs.params.$el.offsetTop)
      this.themTops.push(this.$refs.comment.$el.offsetTop)
      this.themTops.push(this.$refs.recommend.$el.offsetTop)
      this.themTops.push(Number.MAX_VALUE)
    }
    
  }
}
</script>

<style scoped>
  .goodsList {
    margin-top: 6px;
  }
  .wrapperDetail {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  }
  .detail {
    /* position: relative; */
  }
</style>
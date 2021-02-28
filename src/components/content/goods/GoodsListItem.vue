<template>
  <div class="goods-item" @click="goodsItemClick">
    <div class="goods-item-pic">
      <img :src="item.show&&item.show.img?item.show.img:item.image" alt="" @load="imageLoad">
    </div>
    <div class="goods-info">
      <p>{{item.title}}</p>
      <div class="goods-detail">
        <span class="price">{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    item: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    goodsItemClick() {
      const iid = this.item.iid
      this.$router.push({
        path: '/detail',
        query: {iid}
        })
    }
  },
  computed: {
    	showImage() {
    		return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    width: 48%;
  }
  .goods-item-pic {
    width: 100%;
    height: 270px;
    margin-bottom: 10px;
  }
  .goods-item img{
    width: 100%;
    border-radius: 2%;
  }
  .goods-item .goods-info {
    font-size: 12px;
  }
  .goods-item .goods-info p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
  }
  .goods-item .goods-info .goods-detail{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .goods-item .goods-info .goods-detail span {
    padding: 0 20px 0 0px;
  }
  .goods-item .goods-info .goods-detail .price{
    color:  var(--color-high-text);
    margin-left: 10px;

  }
  .goods-item .goods-info .goods-detail .collect{
    position: relative;

  }
  .goods-item .goods-info .goods-detail .collect::before{
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    position: absolute;
    left: -15px;
    top: -2px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
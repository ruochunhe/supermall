<template>
   <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="middle" class="middle">
        <div v-for="(item, index) in titles" :key="item" class="middleItem" :class="{active: currentIndex === index ,}" @click="detailNavBarClick(index)">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      }
  },
  props: {
    titles: {
      type: Array,
      default(){
        return ['商品', '参数', '评论', '推荐']
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    },
    detailNavBarClick(index) {
      this.$emit('detailNavBarClick',index)
    }

  }
}
</script>

<style scoped>
  .middle {
    display: flex;
    padding: 0 15px;
    font-size: 15px;
  }
  .middleItem{
    flex: 1
  }
  .back img{
    margin-top: 10px;
  }
  .active {
    color: red;
  }
</style>
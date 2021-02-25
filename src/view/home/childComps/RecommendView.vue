<template>
  <div class="recommendView">
    <div v-for="item in recommend" :key="item.sort" class="recommendItem">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props: {
    recommend:{
      type: Array,
      default: [],
      require: true
    }
  }
}
</script>

<style scoped>
  .recommendView {
    display: flex;
    font-size: 14px;
    text-align: center;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;

  }
  .recommendItem {
    flex:1;
  }
  .recommendItem img{
    
    width: 66px;
    margin-bottom: 6px;
    /* display: block; */
  }

</style>
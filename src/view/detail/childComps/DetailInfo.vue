<template>
  <div class="detailInfo">
    <div v-for="(item, index) in detailImage" :key="index">
      <div class="imgType">{{item.key}}</div>
      <img v-for="(iten, indey) in item.list" :key="indey" :src="iten" alt="" @load="detailImgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailImage: {
      type: Array
    }
  },
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    detailImgLoad(){
      this.counter++
      // console.log(this.counter,this.detailImage[0].list.length);
      if(this.counter === this.detailImage[0].list.length){

        this.$emit('detailImgLoad')
      }
    }
    
  }
}
</script>

<style scoped>
  .detailInfo {
    width: 100vw;
    padding: 10px 0;
  }
  .detailInfo img{
    width: 100%;
  }
  .imgType {
    margin-bottom: 10px;
    padding-left: 10px;
  }
</style>
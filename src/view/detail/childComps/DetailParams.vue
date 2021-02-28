<template>
  <div v-if="isDetailParams " class="detailParams">
    <table v-for="(item, index) in itemParams.rule.tables" :key="index" class="tableGoodsRule">
      <tr v-for="(iten, indey) in item" :key="indey">
        <td v-for="(iteo, indez) in iten" :key="indez"> {{iteo}}</td>
      </tr>
    </table>
    <table class="tableGoodsInfo">
      <tr v-for="(itep, indew) in itemParams.info.set" :key="indew">
        <td class="tableGoodsInfoKey">{{itep.key}}</td>
        <td class="tableGoodsInfoValue">{{itep.value}}</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {
          rule: {
            tables: []
          }
        }
      }
    }
  },
  data(){
    return {
      isDetailParams: false
    }
  },
  watch: {
    itemParams:{
      handler(n) {
        this.itemParams = n
        if(!this.isDetailParams) {
          this.isDetailParams = true
        }
      }
    }
  },
  // updated(){
  //   if( !isDetailParams) {
  //     isShow()
  //   }
  // },

  methods: {
    isShow(){
      if(this.itemParams.length !== 0) {
        return this.isDetailParams = true
      }else {
        return this.isDetailParams = false
      }
    }
  }
}
</script>

<style scoped>
  .detailParams {
    padding: 20px 15px;
    font-size: 14px;
    color: #666666;
    width: 100vw
    
  }
  .tableGoodsRule{
    text-align: left;
    width: 100%;

  }
  .tableGoodsRule tr{
    height: 42px;
    line-height: 42px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(134, 132, 132,0.1);
  }
  .tableGoodsRule tr td{
    flex: 1,

  }
  .tableGoodsInfo {
    text-align: left;
    width: 100%;
    border-top: 1px solid rgba(134, 132, 132,0.5);
    margin-top: -2px
  }
  .tableGoodsInfo tr{
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgba(134, 132, 132,0.1);
  }
  .tableGoodsInfo tr .tableGoodsInfoKey{
    width: 94px; 
    line-height: 42px;


  }
  .tableGoodsInfo tr .tableGoodsInfoValue{
    flex: 1;
    color: #eb4868
  }
</style>
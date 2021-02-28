<template>
    <div v-if="Object.keys(rate).length !== 0" class="detailComment">
      <div class="commentHead">
        <span class="headInfo">用户评论</span>
        <span class="headMore">更多</span>
      </div>
      <div v-for="(item,index) in rate.list" :key="index">
        <div class="commentUser">
          <img :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="contentText">{{item.content}}</div>
        <div class="contentTime">
          <span>{{item.created | showDate}}</span>
          <span class="contentStyle">{{item.style}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils.js' 
export default {
  name: 'DetailComment',
  props: {
    rate: {
      type: Object,
      default() {
        return 
      }
    }
  },
  // computed: {
    // }
  filters: {
    showDate(value){
      let date = new Date(value*1000)
      return formatDate(date,'yyyy-mm-dd')
    }
  }
}
</script>

<style scoped>
  .detailComment {
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
    border-top: 5px solid #f2f5f8;
    color: #333333;
  }
  .commentHead {
    /* height: 49px; */
    border-bottom: 1px solid rgba(0,0,0,.1);
    line-height: 49px;
    width: 100%;
  }
  .commentHead .headInfo {
    position: relative;
    font-size: 15px;
    
  }
  .commentHead .headMore {
    position: relative;
    font-size: 13px;
    right: -75%;
  }
  .commentUser{
    padding: 10px 0;
  }
  .commentUser img{
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }
  .commentUser span{
    position: relative;
    font-size: 15px;
    /* line-height: 42px; */
    bottom: 12px;
    margin-left: 10px;
    
  }
  .contentText {
    font-size: 13px;
    line-height: 1.5;
    color: #777777
  }
  .contentTime {
    color: #999999;
    font-size: 12px;
    margin-top: 6px
  }
  .contentStyle {
    margin-left: 8px;
  }

</style>
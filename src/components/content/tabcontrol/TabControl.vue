<template>
  <div class="TabControl">
    <div v-for="(item,index) in titles"
      :key="index" class="TabControlItem"
      :class="{active: currentIndex === index}"
      @click="TabControlItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex : 0
    }
  },
  methods: {
    TabControlItemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .TabControl {
    height: 40px;
    line-height: 40px;
    display: flex;
    text-align: center;
  }
  .TabControlItem {
    flex: 1
  }
  .TabControlItem span {
    padding: 0 8px
  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    padding-bottom: 4px;
    border-bottom : 3px solid var(--color-high-text);
  }
</style>
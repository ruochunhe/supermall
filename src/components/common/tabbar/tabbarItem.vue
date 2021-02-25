<template>
  <div id="tabbarItem" @click="tabbarItemClick">
    <div class="itemIcon" v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div class="itemActiveIcon" v-else>
      <slot name="itemActiveIcon"></slot>
    </div>
    <div class="itemText" :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: {
      type: String,
      require: true
    },
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  methods: {
    tabbarItemClick(){
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive(){
      return this.path ===  this.$route.path
    },
    activeStyle(){
      return this.path ===  this.$route.path ? {color: this.activeColor} : {}
    }

  }
}
</script>

<style scoped>
  #tabbarItem {
    flex: 1;
    font-size: 14px;
  }
  .itemIcon img, .itemActiveIcon img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
</style>
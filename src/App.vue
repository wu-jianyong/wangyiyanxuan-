<template>
  <div id="app">
    <router-view/> <!--在此显示当前路由组件-->

    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/footerGuide/footerGuide.vue'

export default {
    mounted () {

    },
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  html,body
    height 100%
    width 100%
    #app
      height 100%
      width 100%
      position relative


</style>

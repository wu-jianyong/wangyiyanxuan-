<template>
  <div class="mainPage">
    <MsiteHeader/>
    <router-view/> <!--在此显示当前路由组件-->
  </div>
</template>

<script>
  import MsiteHeader from '../../components/msite_header/msite_header.vue'
  export default{
    components:{
      MsiteHeader
    },
    mounted(){

    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .mainPage
    /*padding-bottom 300px*/
    width 100%
    height 100%
    /*padding-top 148px*/
    /*background paleturquoise*/


</style>

<template>
    <div id="root">
      <a href="javascript:;" @click="goTo('/msite')" :class="{on: $route.path.includes('/msite')}">
        <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" @click="goTo('/category')" :class="{on: $route.path==='/category'}">
        <span class="item_icon">
          <i class="iconfont icon-wechat"></i>
        </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" @click="goTo('/knowThings')" :class="{on: $route.path==='/knowThings'}">
        <span class="item_icon">
          <i class="iconfont icon-shiwu"></i>
        </span>
        <span>识物</span>
      </a>
      <a href="javascript:;" @click="goTo('/cart')" :class="{on: $route.path==='/cart'}">
        <span class="item_icon">
          <i class="iconfont icon-cart"></i>
        </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" @click="goTo('/personal')" :class="{on: $route.path==='/personal'}">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>个人</span>
      </a>
    </div>
</template>

<script>
  export default {
    components: {

    },
    data(){
      return {}
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #root
    width 750px
    height 98px
    background white
    position fixed
    left 0px
    bottom 0px
    display flex
    justify-content space-around
    z-index 100
    a
      display flex
      flex-direction column
      text-align center
      .item_icon
        margin 15px 0
      &.on
        color red
</style>

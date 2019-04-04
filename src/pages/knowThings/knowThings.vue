<template>
    <div id="knowThings">
      <div class="thingsHeader">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
        <div class="center">
          <span class="discover">发现</span>
          <span class="choose">甄选家</span>
        </div>
        <div class="cart_search">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-cart"></i>


        </div>
      </div>
      <div class="scroll">
        <ul>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
          <li>推荐啦</li>
        </ul>

      </div>
      <div class="article">
        <div class="firstType">
          <div class="title">
            <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png?imageView&quality=65&thumbnail=56y56" alt="">
            <span>嫣儿</span>
          </div>
          <div class="content">
            之哈哈哈检查加超级好吃好吃阿卡好像看出那开车难吃哈哈哈哈哈卡辛苦您看下可能开除你
          </div>
          <img src="https://yanxuan.nosdn.127.net/fa8eac98570fb6baeeb5823ee097a366.jpg?imageView&quality=65&thumbnail=690y376" alt="">
          <div class="counter">
            <span>11.9K人看过</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll  from 'better-scroll'
    export default {
      components: {

      },
      data(){
          return {}
      },
      mounted(){
        new BScroll ('.scroll',{
          click: true,
          scrollX:true
        })

      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #knowThings
    width 100%
    position relative
    .thingsHeader
      position fixed
      left 0
      top 0
      width 750px
      height 100px
      position relative
      background #f4f4f4
      border-bottom  1px solid dimgray
      .home
        float left
        width 46px
        margin-left 10px
        height 100%
        line-height 100px
        i
          font-size 50px
          color lightgray
      .center
        width 240px
        height 100%
        line-height 100px
        margin 0 auto
        font-size 35px
      .cart_search
        float right
        width 140px
        height 100%
        line-height 100px
        position absolute
        right 10px
        bottom 0
        display flex
        justify-content space-between
        align-items center
        i
          font-size 50px



    .scroll
      width 750px
      height 125px
      background white
      position fixed
      left 0
      top 100px
      ul
        width 1900px
        height 100px
        overflow hidden
        background white
        li
          float left
          height 100px
          line-height 100px
          margin-right 35px
          font-size 30px


    .article
      width 750px
      padding-top 126px
      box-sizing border-box
      background #f4f4f4
      .firstType
        width 750px
        height 700px
        background white
        padding 15px
        box-sizing border-box
        .title
          height 60px
          width 700px
          box-sizing border-box
          line-height 60px
          font-size 32px
          img
            width 60px
            height 60px
            border-radius 50%
            vertical-align middle
          span
            vertical-align middle
            font-size 26px
        .content
          height 110px
          margin-top 20px
          margin-bottom 20px
          line-height 50px
          font-size 35px
        img
          width 690px
          height 376px
        .counter
          width 690px
          margin-top 25px
          font-size 26px
</style>

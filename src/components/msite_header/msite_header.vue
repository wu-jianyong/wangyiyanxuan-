<template>
  <div id="msite">
    <div class="togglePage" v-show="isDown===false">
      <div class="allLists">全部频道</div>
      <div class="headerLists">
        <ul>
          <li @click="Goto('/msite/recommend')">推荐1</li>
          <li @click="Goto('/msite/homeLife')">居家生活</li>
          <li @click="Goto('/msite/clothsShoes')">服饰鞋包</li>
          <li @click="Goto('/msite/fooddrink')">美食酒水</li>
          <li @click="Goto('/msite/personclear')">个护清洁</li>
          <li @click="Goto('/msite/motherson')">母婴亲子</li>
          <li @click="Goto('/msite/sporttravel')">运动旅行</li>
          <li @click="Goto('/msite/machinephoto')">数码家电</li>
          <li @click="Goto('/msite/globalcharacter')">全部特色</li>
        </ul>
      </div>

    </div>
    <div class="mask" v-show="isDown===false"></div>
    <div class="header-logo">
      <div class="logo">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
      </div>
      <div class="search" @click="$router.push('/searchpage')">
        <i class="iconfont icon-dingdan"></i>
        <span>搜索商品, 共22110款好物</span>
      </div>
      <div class="login" @click="$router.replace('/personal')">登录</div>

    </div>
    <div class="scroll_header">
      <div class="scroll_content">
        <ul ref="scrollUrl">

          <li @click="Goto('/msite/recommend')" :class="{active: $route.path==='/msite/recommend'}">
            <a href="javascript:;">推荐</a>
          </li>
          <li @click="Goto('/msite/homeLife')" :class="{active: $route.path==='/msite/homeLife'}">
            <a href="javascript:;">居家生活</a>
          </li>
          <li @click="Goto('/msite/clothsShoes')" :class="{active: $route.path==='/msite/clothsShoes'}">
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li @click="Goto('/msite/fooddrink')" :class="{active: $route.path==='/msite/fooddrink'}">
            <a href="javascript:;">美食酒水</a>
          </li>
          <li @click="Goto('/msite/personclear')" :class="{active: $route.path==='/msite/personclear'}">
            <a href="javascript:;">个护清洁</a>
          </li>
          <li @click="Goto('/msite/motherson')" :class="{active: $route.path==='/msite/motherson'}">
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li @click="Goto('/msite/sporttravel')" :class="{active: $route.path==='/msite/sporttravel'}">
            <a href="javascript:;">运动旅行</a>
          </li>
          <li @click="Goto('/msite/machinephoto')" :class="{active: $route.path==='/msite/machinephoto'}">
            <a href="javascript:;">数码家电</a>
          </li>
          <li @click="Goto('/msite/globalcharacter')" :class="{active: $route.path==='/msite/globalcharacter'}">
            <a href="javascript:;">全球</a>
          </li>
        </ul>
      </div>
      <transition name="arrow">
        <div class="toggleDown" @click="toggleDirection" ref="arrow">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  import BScroll  from 'better-scroll'
    export default {
      components: {

      },
      data(){
          return {
            isDown:true
          }
      },
      mounted(){
        this.$nextTick(() => {
          this.BScroll = new BScroll ('.scroll_content',{
            click: true,
            scrollX:true
          })
        })

      },
      updated(){
          console.log('xxx')
        if(this.BScroll){
            this.BScroll.refresh()
        }else {
          this.BScroll = new BScroll('.scroll_content',{
            click: true,
            scrollX:true
          })
        }
      },
      methods:{

        toggleDirection(){
//            console.log(this.isDown);
          this.isDown = !this.isDown
          if(this.isDown ===true){
            this.$refs.arrow.style.transform = 'rotate(180deg)'
            this.$refs.arrow.style.transition =' all 0.5s'
          }else {
            this.$refs.arrow.style.transform = 'rotate(360deg)'
          }

        },
        Goto(path){
            console.log(this.$router)
          this.$router.push(path)
          this.isDown = true
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #msite
    position fixed
    top 0
    left 0
    font-size 24px
    z-index 2
    background white
    .togglePage
      width 100%
      height 370px
      background white
      position absolute
      left 0
      top 89px
      z-index 2
      padding 30px
      .allLists
        font-size 35px

      .headerLists
        ul
          width 750px
          overflow hidden
          li
            width 150px
            height 56px
            line-height 56px
            text-align center
            border 1px solid lightgray
            margin-right 20px
            float left
            margin-top 20px
            margin-bottom 20px

    .header-logo
      width 750px
      height 88px
      /*background pink*/
      display flex
      box-sizing border-box
      padding 15px 30px
      .logo
        display flex
        img
          width 138px
          height 40px
          justify-content center
          align-items center
          display block
          margin-top 10px
      .search
        width 442px
        height 56px
        background #ededed
        font-size 27px
        margin 0 13px
        line-height 56px
        border-radius 5px
        text-align center
        color #666
      .login
        font-size 17px
        width 74px
        height 40px
        border-radius 5px
        border 1px solid red
        color #b4282d
        text-align center
        line-height 40px
        margin-top 10px
        margin-left 15px

    .scroll_header
      width 750px
      height 60px
      /*background paleturquoise*/
      position relative
      .scroll_content
        width 750px
        height 60px
        /*background purple*/
        overflow hidden
        ul
          overflow hidden
          width 1560px
          height 100%
          display flex
          align-items center
          justify-content space-around
          padding-right 100px
          position relative

          li
            float: left
            font-size 20px
            padding 13px
            &.active
              border-bottom 1px solid red
              color red



      .toggleDown
        width 60px
        height 60px
        border-radius 100px
        position absolute
        background white
        /*background palegreen*/
        top 0
        right 0
        li-height 60px
        text-align center
        z-index 2
        &.arrow-enter-active, &.arrow-leave-active
          transition: all 0.5s
        &.arrow-enter, &.arrow-leave-to
          opacity: 0
        img
          width 30px
          height 30px
          margin-top 15px
</style>

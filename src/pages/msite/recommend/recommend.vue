<template>
  <div class="mainPage">
    <div class="mainContent">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
        </div>

      </div>
    </div>
    <div class="threeItems" >
      <div v-for="(item,index) in policyDescList">
        <span>
          <img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
        </span>
        <span>{{item.desc}}</span>
      </div>

    </div>
    <div class="goodsList">
      <ul>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">  <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png" alt="">  <span>服饰鞋包</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">  <span>美食酒水</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">  <span>个护清洁</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png" alt="">  <span>限时购</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">  <span>母婴亲子</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">  <span>运动旅行</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">  <span>数码家电</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">  <span>全球特色</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif" alt="">  <span>超级会员</span>
        </li>
      </ul>
    </div>
    <div class="title">
      <div class="personGift">
        <span>—</span>
        <div class="content">新人专享</div>
        <span>—</span>
      </div>
    </div>
    <div class="personUseGift">
      <div class="leftImage">
        <div class="name">新人专享礼包</div>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="rightImage">
        <div class="top">
          <div class="fulishe">福利社</div>
          <div class="bigSell">今日特价</div>
        </div>
        <div class="bottom">
          <div class="fulishe">新人拼团</div>
          <div class="bigSell">1元起包邮</div>
        </div>
      </div>
    </div>
    <div class="branchProduct">
      <div class="splitLine"></div>
      <div class="Product">
        <div class="firstLine">
          <span>品牌制造商直供</span>
          <span>更多></span>
        </div>
        <div class="picture">
          <div>
            <span>海外制造商</span>
            <span>9.9元起</span>
            <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
          <div>
            <span>海外制造商</span>
            <span>9.9元起</span>
            <img src="http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
          <div>
            <span>海外制造商</span>
            <span>9.9元起</span>
            <img src="http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
          <div>
            <span>海外制造商</span>
            <span>9.9元起</span>
            <img src="http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
        </div>
        <div class="recommendFooter">
          <div class="version">
            <div>下载APP</div>
            <div>电脑版</div>
          </div>
          <div class="copyRight">网易公司版权所有 © 1997-2019<br><br>食品经营许可证：JY13301080111719</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll  from 'better-scroll'
//  import {reqSearchLists} from '../../../API/index'
  import {mapState} from 'vuex'
  export default {

    data(){
      return {
        policyDescList:[]
      }
    },
     mounted(){
      this.$store.dispatch('getHomeData')
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type:'bullets'
        },

      })
    },
    computed:{
      ...mapState({
        homedata:state => state.msite.homedata,

      })
    },
    watch:{
      homedata (newValue) {
        this.policyDescList = newValue.policyDescList
      }
    },

  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .mainPage
    /*padding-bottom 300px*/
    width 100%
    height 100%
    padding-top 74px
    /*padding-bottom 200px*/
    .mainContent
      .swiper-wrapper
        width 750px
        height 400px
        img
          width 750px
          height 400px
      .swiper-pagination
        .swiper-pagination-bullet
          display inline-block
          width 40px
          height 4px


    .threeItems
      display flex
      width 750px
      height 72px
      line-height 72px
      /*background palegreen*/
      justify-content space-around
      div
        vertical-align middle
      img
        width 32px
        height 32px
        vertical-align middle
      span
        color #B4282D
        vertical-align middle


    .goodsList
      width 750px
      height 340px
      background #F4F4F4
      ul
        width 100%
        height 340px
        li
          width 110px
          height 156px
          text-align center
          float left
          padding 0 20px
          img
            width 110px
            height 110px
            margin-bottom 10px

    .title
      width 750px
      height 90px
      /*background paleturquoise*/
      font-size 35px
      display flex
      align-items center
      .personGift
        margin 0 auto
        width 200px
        font-size 30px
        height 90px
        /*background yellow*/
        line-height 90px
        text-align center
        display flex
        .content
          margin 0 5px

    .personUseGift
      width 700px
      height 430px
      display flex
      padding-left 25px
      padding-right 25px
      overflow hidden
      /*background paleturquoise*/
      .leftImage
        width 340px
        height 100%
        background #F9E9CF
        font-size 30px
        text-align center
        margin-right 15px
        .name
          margin 45px 0
        img
          width 258px
          height 257px

      .rightImage
        width 340px
        height 100%
        /*background palevioletred*/
        .top
          height 194px
          background #FBE2D3
          margin-bottom 6px
          background-image url("http://yanxuan.nosdn.127.net/a1e0d26680c493dedead73808232d346.png?imageView&thumbnail=200x200&quality=75")
          background-size 170px
          background-repeat no-repeat
          background-position 170px center
          padding-left 25px
          padding-top 20px
          .fulishe
            font-size 30px
            margin 25px 0
          .bigSell
            font-size 30px
        .bottom
          height 194px
          background papayawhip
          background-image url("http://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&thumbnail=200x200&quality=75")
          background-size 170px
          background-repeat no-repeat
          background-position 170px center
          padding-left 25px
          padding-top 20px
          .fulishe
            font-size 30px
            margin 25px 0
          .bigSell
            font-size 30px
    .branchProduct
      width 100%
      height 690px
      background white
      .splitLine
        width 100%
        height 15px
        background #f4f4f4
      .Product
        .firstLine
          width 100%
          height 100px
          display flex
          justify-content space-between
          font-size 35px
          align-items center
          padding 0 25px
          box-sizing border-box

        .picture
          padding-left 25px
          height 540px
          div
            float left
            position relative
            img
              width 342px
              height 260px
              margin-bottom 5px
              margin-right 10px
            span
              position absolute
              left 90px
              top 80px
              color grey
              &:first-of-type
                top 30px
                color black

        .recommendFooter
          height 340px
          width 100%
          background #414141
          display flex
          flex-direction column
          /*justify-content center*/
          align-items center
          .version
            display flex
            margin 0 auto
            margin-top 35px
            div
              color white
              padding 15px
              width 170px
              height 55px
              line-height 55px
              text-align center
              border 1px solid white
              margin-right 25px

          .copyRight
            margin 0 auto
            text-align center
            margin-top 25px
            color gray
</style>

<template>
  <div class="rightContent" ref="rightContent">
    <div class="wrap" ref="wrap">
      <div class="topPicture">
        <img src="http://yanxuan.nosdn.127.net/e4a75d48fb1f3508df7615d1ada24b48.jpg?imageView&thumbnail=0x196&quality=75" alt="">
      </div>
      <div class="goodsLists" v-if="categoryL1List">
        <ul v-if="categoryL1List[currentIndex]">
          <li v-for="(item,index) in categoryL1List[currentIndex].subCateList">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      categoryL1List:Array,
      currentIndex:Number
    },
    components: {

    },
    data(){
        return {}
    },
    mounted(){
      new BScroll('.rightContent',{
        click:true
      })
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .rightContent
    width 528px
    float right
    height 1060px
    .wrap
      padding-bottom 200px
      .topPicture
        img
          width 528px
          height 192px
          margin-bottom 25px
      .goodsLists

        ul
          overflow hidden
          li
            width 144px
            height 216px
            font-size 25px
            float left
            text-align center
            margin-right 32px
            img
              width 144px
              height 144px


</style>

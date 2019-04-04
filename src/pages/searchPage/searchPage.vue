<template>
    <div class="searchMain">
      <div class="searchheader">
        <div class="search">
          <span>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        </span>
          <input type="text" placeholder="网易严选" v-model="searchContent" @keyup.enter="beginSearch">
        </div>
        <div class="cancle" @click="$router.back()">
          取消
        </div>
      </div>
      <div class="mohuSearch">
        <ul>
          <li v-for="(item,index) in mohuSearch" v-show="detailData.length===0">{{item}}</li>
        </ul>
      </div>
      <div class="hotSearch" v-show="mohuSearch.length===0&&detailData.length===0">
        <div class="fontSearch">热门搜索</div>
        <div class="searchList">
          <ul >
            <li :class="{highlight:item.highlight}" v-for="(item,index) in hotKeywordVOList">{{item.keyword}}</li>

          </ul>
        </div>
      </div>
      <div class="filter" style="margin-top: 25px" v-show="detailData.length!==0">
        <div>综合</div>
        <div>价格</div>
        <div>分类</div>
      </div>
      <div class="goodsLists">
        <ul>
          <li v-for="(item,index) in detailData">
            <img class="leftTop" src="https://yanxuan.nosdn.127.net/8d04e0c951f754d27296a3e45883505d.png" alt="">
            <img :src="item.listPicUrl" alt="">
            <div class="message">
              <div class="price">
                <span>{{item.listPromBanner.promoTitle}}</span>
                <span class="specialPrice">￥{{item.listPromBanner.promoSubTitle}}</span>
              </div>
              <span>{{item.listPromBanner.content}}</span>
            </div>
            <div class="detailMessage">
              {{item.name}}
            </div>
            <div class="realPrice">
              <span>￥{{item.retailPrice}}</span>
              <span class="deletePrice">￥{{item.counterPrice}}</span>
            </div>
            <div class="buyTime">666</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSearchMessage,reqSearchproperty} from '../../API/'
    export default {
      components: {

      },
      data(){
        return {
          hotKeywordVOList:[],
          searchContent:'',
          detailData:[],
          mohuSearch:[]
        }
      },
      async mounted(){
        this.$store.dispatch('getSearchList')

      },
      computed:{
        ...mapState({
          searchList:state => state.searchPage.searchList,
        })
      },
      methods:{
        //请求商品列表
        async beginSearch(){
          console.log(this.searchContent);
          const result = await reqSearchMessage(this.searchContent)
          console.log(result);
          console.log(result.data);
          this.detailData = result.data.directlyList
          console.log(result,'商品列表');
        }
      },
      watch:{
        //模糊搜索
        async searchContent (newValue) {
          const result = await reqSearchproperty(newValue)
          this.mohuSearch = result.data
          console.log(result,'模糊搜索');
        },
        searchList (newValue) {
          this.hotKeywordVOList = newValue.hotKeywordVOList
        }
      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .searchMain
    width 100%
    height 100%
    background #f4f4f4
    dia
    .searchheader
      width 100%
      height 80px
      line-height 80px
      background white
      border-radius 5px
      display flex
      .search
        width 600px
        height 70px
        margin-bottom 15px
        background #f4f4f4
        margin 0 auto
        text-align center
        margin-top 10px
        padding-bottom 0px
        span
          img
            width 30px
            height 30px
        input
          width 500px
          height 50px
          outline 0 none
          background #f4f4f4
          margin-top -30px
          font-size 30px
          &::-webkit-input-placeholder
            font-size 40px


      .cancle
        font-size 30px
        margin-right 20px
    .mohuSearch
      width 100%
      padding-top 25px
      background white
      ul
        width 100%
        li
          width 100%
          height 87px
          line-height 87px
          /*background deeppink*/
          font-size 30px
          margin 0 25px
          margin-bottom 1px solid #f4f4f4
    .hotSearch
      width 100%
      box-sizing border-box
      /*height 400px*/
      background white
      padding 25px
      font-size 25px
      .fontSearch
        margin 25px
      .searchList
        width 100%
        ul
          width 100%
          overflow hidden
          li
            float left
            border 0.5px solid #999
            margin 10px
            padding 10px
            &.highlight
              color #b4282d
              border 0.5px solid #b4282d
    .filter
      width 100%
      height 80px
      background pink
      display flex
      font-size 30px
      justify-content space-around
      line-height 80px
    .goodsLists
      width 100%
      /*height 600px*/
      background white
      ul
        width 100%
        overflow hidden
        li
          width 345px
          height 562px
          /*background paleturquoise*/
          float left
          margin-left 18px
          margin-right 5px
          margin-top 15px
          position relative
          .leftTop
            left 0
            top 0
            position absolute
            width 72px
            height 72px
          img
            width 345px
            height 345px
            background #f4f4f4
          .message
            width 345px
            height 48px
            background red
            position relative
            line-height 48px
            .price
              width 80px
              height 70px
              border-radius 15px
              background red
              position absolute
              left 0
              bottom 0
              display flex
              flex-direction column
              font-size 10px
              span
                font-size 10px
                display flex
                white-space nowrap
                &.specialPrice
                  font-weight 700
                  color white
                  margin-top -15px
                  font-size 10px

            span
              float right
              font-size 10px
              color white


          .detailMessage
            width 100%
            height 37px
            line-height 37px
            /*background purple*/
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            background white
          .realPrice
            width 100%
            height 48px
            /*background purple*/
            line-height 48px
            span
              color red
              font-size 30px
              &.deletePrice
                color dimgray
                font-size 23px
                text-decoration line-through
          .buyTime
            width 86px
            height 32px
            border-radius 6px
            border 1px solid red
            margin-left 10px
            margin-top 5px
            font-size 16px
            line-height 32px
            text-align center
            color red
</style>

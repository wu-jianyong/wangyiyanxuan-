<template>
  <div class="wrap">
    <div id="category">
      <div class="search" @click="$router.push('/searchpage')">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品, 共22110款好物</span>
      </div>
    </div>
    <div class="bottomContent">
      <div class="leftLists" ref="leftLists">
        <ul>
          <li @click="getIndex(index)" :class="{active:currentIndex===index}" v-for="(item,index) in categoryL1List">{{item.name}}</li>

        </ul>
      </div>
      <RightLists :categoryL1List="categoryL1List" :currentIndex="currentIndex"/>


    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import RightLists from './rightLists/rightLists.vue'
  import {mapState} from 'vuex'
    export default {
      components: {
        RightLists
      },
      data(){
        return {
          categoryL1List:[],
          categoryL2List:[],
          currentIndex:0

        }
      },
      methods:{
        getIndex(index){
          this.currentIndex=index
          console.log(this.currentIndex);
        }
      },
      mounted() {
        this.$store.dispatch('getCategory')
        this.$store.dispatch('getCategoryList')



        this.$nextTick(() => {
          //$refs绑定元素
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.leftLists, {
              //开启点击事件 默认为false
              click:true
            })
            // console.log(this.scroll)
          }else if(!this.$refs.leftLists){
            return
          }
          else{
            this.scroll.refresh()
          }
        })
      },

      computed:{
        ...mapState({
          category:state => state.category.category,
          categoryList:state => state.category.categoryList
        })
      },
      watch:{
        category (newValue) {
        let number = this.currentIndex
          const pog=newValue.category
        if(newValue.category){
//            console.log(pog.categoryL1List,'+++++++++++++');
          this.categoryL1List = pog.categoryL1List

        }
//        console.log(this.categoryL1List,'cccccccccccccc')
//        const pla= this.categoryL1List[number]
//          console.log(pla)
        if(this.categoryL1List){
            this.categoryL2List = pla.subCateList
          }
//        console.log(number);
//        console.log(newValue,'000');
//        console.log(newValue.categoryL1List,'1111');
//        console.log(this.categoryL2List,'2222');
//        console.log(this.categoryL2List[number],'3333');
//          this.categoryL2List = newValue.categoryL2List
//          console.log(newValue.categoryL2List,'*****');

      }
    },

    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import   '../../../static/stylus/mixins.styl'
  #category
    padding-bottom 8px
    bottom-border-1px(#f5f5)
    .search
      width 700px
      height 56px
      background #ededed
      font-size 27px
      margin 10px auto
      line-height 56px
      border-radius 5px
      text-align center
      color #666

      img
        width 28px
        height 28px
        vertical-align middle

  .bottomContent
    overflow hidden
    padding-right 30px
    padding-top 20px
    .leftLists
      width 160px
      height 920px
      float left
      /*background pink*/
      ul
        padding-left 5px
        li
          width 162px
          height 50px
          margin-top 30px
          line-height 50px
          text-align center
          font-size 30px
          &.active
            color red
            border-left 4px solid red

</style>

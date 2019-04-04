<template>
    <div id="loginHeader">
        <personalHeader/>
      <div class="logoPicture">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phoneNumber">
        <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phoneNumber">
      </div>
      <div class="phoneNumber messageCode">
        <input type="text" placeholder="请输入验证码" v-model="messageCode">
        <button @click.prevent="sendCode" class="getCode" :disabled="!isRightNumber||currentTime>0" :class="{allowClick:isRightNumber}">{{currentTime>0?`发送验证码${currentTime}`:'获取验证码'}}</button>
      </div>
      <div class="problem">
        <span style="float: left">遇到问题</span>
        <span style="float: right">使用密码验证登录</span>
      </div>

      <div class="LoginWays" @click="NowLogin">
        <div class="icon"></div>
        <span>登录</span>
      </div>
      <div class="LoginWays emailBackground" @click="$router.back()">
        <div class="icon emailLogin" ></div>
        <span class="emailFont">其他登录方式</span>
      </div>
      <div class="register">
        注册账号>
      </div>
    </div>
</template>

<script>
  import personalHeader from '../personal/personalHeader/personalheader.vue'
  import { Toast ,MessageBox} from 'mint-ui';
  export default {
    components: {
      personalHeader
    },
    data(){
      return {
        phoneNumber:'',
        messageCode:'',
        currentTime:0
      }
    },
    computed:{
      isRightNumber(){
        return /^1\d{10}$/.test(this.phoneNumber)
      }
    },
    methods:{

      NowLogin(){
        if(!this.isRightNumber){
          return Toast('请输入正确手机号');

        }else if(!(/^[0-9]{6}$/.test(this.messageCode))){
          return Toast('请输入正确验证码');
        }else{
          this.$router.replace('/msite')
        }
      },
      sendCode(){
        this.currentTime = 30
        Toast('验证码发送成功')
        const intervalId = setInterval(()=>{
          this.currentTime--
          if(this.currentTime<=0){
            this.currentTime=0
            clearInterval(intervalId)
          }
        },1000)
      }
    },

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../../static/stylus/mixins.styl'
  #loginHeader
    width 100%
    .logoPicture
      text-align center
      margin-top 60px
      img
        width 192px
        height 64px
    .phoneNumber
      width 670px
      height 100px
      background pink
      margin 0 auto
      margin-top 150px
      margin-bottom 25px
      position relative
      .getCode
        position absolute
        right 0
        bottom 15px
        padding 10px
        /*height 50px*/
        line-height 50px
        border 0.5px solid gray
        text-align center
        font-size 26px
        color gray
        &.allowClick
          color black
          border 0.5px solid black
      &.messageCode
        margin-top 0px
        margin-bottom 30px
      bottom-border-1px(gray)
      input
        width 100%
        height 100%
        /*background pink*/
        font-size 30px
        color black
        outline 0 none
        bottom-border-1px(red)

    .problem
      width 670px
      height 100px
      /*background pink*/
      margin 0 auto
      font-size 30px
      line-height 100px

    .LoginWays
      width 670px
      height 100px
      line-height 100px
      background #b4282d
      margin 0 auto
      position relative
      display flex
      text-align center
      margin-bottom 25px
      &.emailBackground
        background white
        border 1px solid #b4282d
      .icon
        width 60px
        height 60px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png")
        background-repeat no-repeat
        background-size 45px
        background-position 0 -60px
        margin-left 210px
        margin-top 30px
        &.emailLogin
          background-position 0 0px
      span
        font-size 30px
        color white
        &.emailFont
          color #b4282d


    .register
      width 100%
      text-align center
      font-size 30px
</style>

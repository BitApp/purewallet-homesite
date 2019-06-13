<template lang="pug">
  #app
    .header-view(:class="navBarFixed == true ? 'navBarWrap' :''")
      .top-view
        .left-view
          img(src="./assets/pcimg/Logo.png" @click="routeTo('/')")
        .right-view
          el-button.dapp-btn(type="text" @click="routeTo('/dapps')") {{$t('DApp上架申请')}}
          el-dropdown.language(trigger="click" @command="handleCommand" @visible-change="dropShow")
            el-button.language-text(type="text") {{language}}
              i.icon(:class="dropshow?'el-icon-caret-bottom':'el-icon-caret-top'")
            el-dropdown-menu(slot="dropdown")
              el-dropdown-item(command="zh" ) 中文
              el-dropdown-item(command="en" divided) English
          img.voice-control(id="voice" v-if="!isMobile" src="./assets/pcimg/voice.svg" style="" width=14 @click="mute")
          img.voice-control(id="mute"  v-if="!isMobile" src="./assets/pcimg/mute.svg" style="display:none" width=14 @click="voice")
    router-view
    .footer 
      .foot-content
        .contact-view
          .support
            p {{$t('技术支持')}}
            p support@purewallet.org
          .cooperation
            p {{$t('商务合作')}}
            p support@purewallet.org
          .contact
            p {{$t('联系我们')}}
            .contact-way
              el-popover.contact-item(placement="top" v-model="visible")
                img.qrcode(src="./assets/pcimg/wechat_qrcode.png")
                .contact-item.wechat( slot="reference")
              .contact-item.weibo(@click="toLink('https://www.weibo.com/bitapp')")
              .contact-item.twitter(@click="toLink('https://twitter.com/PureWallet')")
              .contact-item.reddit(@click="toLink('https://www.reddit.com/user/BitApp')")
              .contact-item.github(@click="toLink('https://github.com/BitApp')")
        .line
        .filing-view  
          .name {{$t('深圳市毕应科技有限公司')}}
      .mask-view(v-show="dialogVisible" @click="close")
        img(src="./assets/pcimg/wechat_qrcode.png")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      isMobile: false,
      dropshow: false,
      dappshow: false,
      dialogVisible: false,
      language: /zh/i.test(sessionStorage.getItem('language'))? '中文':'English',
      navBarFixed:false
    }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
    if (window.innerWidth < 769){
      this.isMobile = true
    } else{
      this.isMobile = false
    }
  },
  methods:{
    watchScroll (){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 10) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },
    routeTo(route){
      this.$router.push(route)
    },
    dropShow (show) {
      this.dropshow = show
    },
    handleCommand(command){
      if (sessionStorage.getItem('language') == command) {
        return
      }
      sessionStorage.setItem('language',command)
      window.location.reload()
    },
    mute(){
      document.getElementById('mute').style.display = ''
      document.getElementById('voice').style.display = 'none'
      document.getElementById('video').muted = true
    },
    voice(){
      document.getElementById('voice').style.display = ''
      document.getElementById('mute').style.display = 'none'
      document.getElementById('video').muted = false
    },
    close(){
      this.dialogVisible = false
    },
  }
}
</script>

<style lang="stylus">
#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  .header-view
    width 100%
    background #FFF
    justify-content center
    display flex
    position fixed
    z-index 2
    .top-view
      display flex
      justify-content space-between
      max-width 1200px
      width 100%
      height 60px
      padding 0 20px
      .left-view
        height 60px
        display flex
        justify-content center
        align-items center
        >img 
          height 40px
          cursor pointer
      .right-view
        display flex
        justify-content space-between
        font-size 14px
        .dapp-btn
          color #6066C0
          margin-right 20px
        .voice-control
          margin-left 20px
          cursor pointer
        .develop
          height 60px
          color #52525C
        .develop:hover
          color #6066C0
        .language
          color #6066C0
          .language-text
            height 60px
            color #6066C0
            .icon
              margin-left 20px

  .footer
    background-color #52525C
    .foot-content
      display flex
      justify-content center
      align-items center
      flex-direction column
      .contact-view
        display flex
        padding 20px
        flex-wrap wrap
        text-align left 
        font-size 14px
        color #FFFFFF
        .support
          margin-right 80px
        .cooperation
          margin-right 80px
        .contact
          .contact-way
            .contact-item
              height 30px
              width 30px
              display inline-block
              background-size 30px 30px
              margin-right 16px
              cursor pointer
            .wechat
              background-image url('./assets/pcimg/wechat.png')
            .weibo
              background-image url('./assets/pcimg/weibo.png')
            .twitter
              background-image url('./assets/pcimg/Twitter.png')
            .reddit
              background-image url('./assets/pcimg/Reddit.png')
            .github
              background-image url('./assets/pcimg/github.png')
            .email
              background-image url('./assets/pcimg/mail.png')
            .wechat:hover
              background-image url('./assets/pcimg/wechat_hover.png')
            .weibo:hover
              background-image url('./assets/pcimg/weibo_hover.png')
            .twitter:hover
              background-image url('./assets/pcimg/Twitter_hover.png')
            .reddit:hover
              background-image url('./assets/pcimg/Reddit_hover.png')
            .github:hover
              background-image url('./assets/pcimg/github_hover.png')
            .email:hover
              background-image url('./assets/pcimg/mail_hover.png')
            .contact-item:last-child
              margin-right 0px
      .line
        height 1px
        background-color #ffffff
        opacity 0.3
        max-width 1200px
        width 100%
      .filing-view
        font-size 12px
        color #FFFFFF
        .filing
          display inline-block
          line-height 50px
          margin-right 30px
        .name
          display inline-block
          line-height 50px
  .mask-view
    height 100%
    top 0
    position fixed
    z-index 999
    width 100%
    display flex
    align-items center
    justify-content center
    background-color rgba(0,0,0,0.5)      

</style>

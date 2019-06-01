<template lang="pug">
  .home
    .header-view(:class="navBarFixed == true ? 'navBarWrap' :''")
      .left-view
        img(src="../assets/pcimg/Logo.png")
      .right-view
        el-dropdown.language(trigger="click" @command="handleCommand" @visible-change="dropShow")
          el-button.language-text(type="text") {{language}}
            i.icon(:class="dropshow?'el-icon-caret-bottom':'el-icon-caret-top'")
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(command="zh" ) 中文
            el-dropdown-item(command="en" divided) English
    .center-view
      .content-info
        .mian-bg
          .main-content
            .title PureWallet-
              .tips {{$t('纯粹、极致的多链钱包')}}
            .info {{$t('PureWallet Info')}}
            img.info-img(src="../assets/mimg/3picture.png")
            div(style="text-align:center")
              video.video(width=240,controls,loop)
                  source(src="https://www.purewallet.org/static/howto.mp4?1" type="video/mp4")
                  Your browser does not support the video tag.
            .product-info
              .product-item(@click="toLink('https://play.google.com/store/apps/details?id=pro.bitapp.android&hl=en')")
                img.img(src="../assets/mimg/google_play_hover.png") 
                .name Google Play
              .product-item(@click="toLink('https://fir.im/pureWallet')")
                img.img(src="../assets/mimg/Android_hover.png")
                .name Android APK
            .product-info
              .product-item(@click="toLink('https://itunes.apple.com/ng/app/pure-wallet-eth-bch-iost/id1465052180')")
                img.img(src="../assets/mimg/apple_hover.png") 
                .name Apple Store
        .link-info
          .link
            .title {{$t('合作伙伴')}}
            .link-view
              .info-view(@click="toLink('https://wormhole.cash/')")
                img.img.wormhole-img(src="../assets/mimg/wormhole.png")
              .info-view(@click="toLink('https://dex.top/')")
                img.img(src="../assets/mimg/DEx.top.png")
            .link-view
              .info-view(@click="toLink('https://www.viabtc.com/')")
                img.img(src="../assets/mimg/viabtc.png")
              .info-view(@click="toLink('https://bch.club/')")
                img.img(src="../assets/mimg/BCH_Club.png")
            .link-view
              .info-view(@click="toLink('https://iost.io/')")
                img.img(src="../assets/mimg/logo_iost.svg")
              .info-view(@click="toLink('https://iostabc.com/')")
                img.img(src="../assets/mimg/iostabc.png")
    .footer-view
      .footer-info
        .email-view
          .support
            .text {{$t('技术支持')}}
            .text-email support@purewallet.org
          .cooperation
            .text {{$t('商务合作')}}
            .text-email support@purewallet.org
        .contact-way
          .text {{$t('联系我们')}}
          .way-view
            .contact-item(v-for="(item,index) in contactInfo" :key="index" @click="toLink(item.link)")
              img.img(:src="item.img")
        .line-view
        .filing-view
          .name {{$t('深圳市毕应科技有限公司')}}
    .mask-view(v-show="dialogVisible" @click="close")
      img(src="../assets/pcimg/wechat_qrcode.png")
</template>
<script>
export default {
  name: 'HomeM',
  data () {
    return {
      dialogVisible:false,
      dropshow: false,
      language: /zh/i.test(sessionStorage.getItem('language'))? '中文':'English',
      contactInfo:[
        {
          img: require('../assets/mimg/wechat_hover.png'),
          link:'wechat_qrcode'
        },
        {
          img: require('../assets/mimg/weibo_hover.png'),
          link:'https://www.weibo.com/bitapp'
        },
        {
          img: require('../assets/mimg/Twitter_hover.png'),
          link:'https://twitter.com/PureWallet'
        },
        {
          img: require('../assets/mimg/Reddit_hover.png'),
          link:'https://www.reddit.com/user/BitApp'
        },
        {
          img: require('../assets/mimg/github_hover.png'),
          link:'https://github.com/BitApp'
        }
      ],
      navBarFixed: false
    }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
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
    toLink(url){
      if (/wechat_qrcode/i.test(url)) {
        this.dialogVisible = true
        return
      }
      window.open(url,"_blank")
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
    close(){
      this.dialogVisible = false
    },
  }
}
</script>
<style lang="stylus" scoped>
.navBarWrap 
  box-shadow 0 1px 4px 0 rgba(96,102,192,0.10)
.home
  width 100%
  height 100%
  background-color #ffffff
  .header-view
    height 44px
    width 100%
    display flex
    top 0px
    position fixed
    justify-content space-between
    align-items center
    background-color #FFF
    .left-view
      height 24px
      margin-left 15px
      >img 
        height 100%
    .right-view
      margin-right 15px
      .develop
        margin-right 60px
  .center-view
    padding 85px 0px 0px
    text-align left 
    .content-info
      .mian-bg
        background-image url('../assets/mimg/bg.png')
        background-size 100% 400px
        background-repeat no-repeat
        background-position bottom
        .main-content
          padding 0 35px 80px
          .title
            font-size 23px
            text-align center
            color #6066C0
            .tips
              display inline
              font-size 15px
              color #52525C
          .info
            margin-top 20px
            font-size 14px
            line-height 22px
          .info-img
            width 420px
            margin-top 45px
            margin-left -60px
          .video
            width 240px
          .product-info
            width 100%
            margin-top 40px
            display flex
            justify-content space-between
            .product-item
              margin-right 20px
              height 40px
              flex 1
              display flex
              justify-content center
              align-items center
              background-color #FFF
              border-radius 6px
              font-size 14px
              color #52525C
              .img
                height 12px
                margin-right 15px
                display inline-block
              .name
                display inline-block
            .product-item:last-child
              margin-right 0
      .link-info
        margin-top 50px
        text-align center
        .link
          padding 0 35px 50px
          .title
            font-size 17px
            color #52525C
          .link-view
            margin-top 30px
            display flex
            .info-view
              display flex
              align-items center
              justify-content center
              flex 1
              height 50px
              margin-right 20px
              background #FFFFFF
              box-shadow 0 0 14px 0 rgba(96,102,192,0.10)
              .img
                height 25px
              .wormhole-img
                height 20px
            .info-view:last-child
              margin-right 0
  .footer-view          
    background #52525C
    font-size 12px
    color #FFFFFF
    .footer-info
      padding 30px 30px 0px
      .email-view
        display flex
        justify-content space-between
        text-align left 
        .text-email
          margin-top 15px
      .contact-way
        text-align left 
        margin-top 25px
        .way-view
          display flex
          margin-top 15px
          .contact-item
            margin-right 20px
            .img
              height 36px
          .contact-item:last-child
            margin-right 0
      .line-view
        opacity 0.15
        height 1px
        background-color #FFFFFF
        margin-top 25px
      .filing-view
        .name
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
    .img
      width 80%

</style>


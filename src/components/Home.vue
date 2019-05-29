<template lang="pug">
  .home
    .header-view(:class="navBarFixed == true ? 'navBarWrap' :''")
      .top-view
        .left-view
          img(src="../assets/pcimg/Logo.png")
        .right-view
          el-dropdown.language(trigger="click" @command="handleCommand" @visible-change="dropShow")
            el-button.language-text(type="text") {{language}}
              i.icon(:class="dropshow?'el-icon-caret-bottom':'el-icon-caret-top'")
            el-dropdown-menu(slot="dropdown")
              el-dropdown-item(command="zh" ) 中文
              el-dropdown-item(command="en" divided) English
    .center-content
      .center-info
        .mainbg
          .maincontent
            .left
              .title PureWallet-
                .tips {{$t('纯粹、极致的多链钱包')}}
              .info {{$t('PureWallet Info')}}
              .product-info
                .product-item(v-for="(item,index) in productInfo" :key="index" @click="toLink(item.link)")
                  .img(:class=`"product-img" + item.index `)
                  .name {{item.name}}
            .right
              img.info-img(src="../assets/pcimg/3picture.png")
        .linkbg
          .link
            .title {{$t('合作伙伴')}}
            .link-view
              .info-view(v-for="(item,index) in linkInfo" :key="index" @click="toLink(item.link)")
                img.img(:src="item.img")
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
              el-popover.contact-item(placement="top" width="100" v-model="visible")
                img.qrcode(src="../assets/pcimg/wechat_qrcode.png")
                .contact-item.wechat( slot="reference")
              .contact-item.weibo(@click="toLink('https://www.weibo.com/bitapp')")
              .contact-item.twitter(@click="toLink('https://twitter.com/PureWallet')")
              .contact-item.reddit(@click="toLink('https://www.reddit.com/user/BitApp')")
              .contact-item.github(@click="toLink('https://github.com/BitApp')")
        .line
        .filing-view  
          .name {{$t('深圳市毕应科技有限公司')}}
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      visible: false,
      dropshow: false,
      language: /zh/i.test(sessionStorage.getItem('language'))? '中文':'English',
      productInfo:[
        {
          img:require('../assets/pcimg/google_play.png'),
          name:'Google Play',
          index:2,
          link:'https://play.google.com/store/apps/details?id=pro.bitapp.android&hl=en'
        },
        {
          img: require('../assets/pcimg/Android.png'),
          name:'Android APK',
          index:1,
          link:'https://fir.im/pureWallet'
        },
        {
          img: require('../assets/pcimg/apple.png'),
          name:'Apple Store',
          index:0,
          link:'https://itunes.apple.com/ng/app/pure-wallet-eth-bch-iost/id1465052180'
        }
      ],
      linkInfo: [
        {
          img: require('../assets/pcimg/wormhole.png'),
          link: 'https://wormhole.cash/'
        },
        {
          img: require('../assets/pcimg/DEx.top.png'),
          link: 'https://dex.top/'
        },
        {
          img: require('../assets/pcimg/viabtc.png'),
          link: 'https://www.viabtc.com/'
        },
        {
          img: require('../assets/pcimg/BCH_Club.png'),
          link: 'https://bch.club/'
        },
        {
          img: require('../assets/pcimg/logo_iost.svg'),
          link: 'https://iost.io/'
        },
        {
          img: require('../assets/pcimg/iostabc.png'),
          link: 'https://iostabc.com/'
        }
      ],
      navBarFixed:false
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-dropdown-menu__item
  width 100px
  text-align left 
.navBarWrap 
  box-shadow 0 1px 8px 0 rgba(96,102,192,0.10)
.qrcode
  width 150px
.el-dropdown-menu__item:not(.is-disabled):hover 
  background-color #F5F7FA
  color #6066C0


.home
  width 100%
  min-width 1200px
  height 100%
  display flex
  flex-direction column
  .header-view
    width 100%
    min-width 1200px
    background #FFF
    justify-content center
    display flex
    position fixed
    .top-view
      display flex
      justify-content space-between
      width 1200px
      height 70px
      .left-view
        height 70px
        display flex
        justify-content center
        align-items center
        >img 
          height 48px
      .right-view
        display flex
        width 254px
        justify-content space-between
        font-size 14px
        .develop
          height 70px
          color #52525C
        .develop:hover
          color #6066C0
        .language
          color #6066C0
          .language-text
            height 70px
            color #6066C0
            .icon
              margin-left 20px
  .center-content
    width 100%
    flex 1
    display flex
    justify-content center
    align-items center
    min-height 850px
    .center-info
      width 100%
      .mainbg
        height 570px
        padding-top 70px
        display flex
        justify-content center 
        background-image url('../assets/pcimg/bg.png')
        background-size 100% 300px
        background-repeat no-repeat
        background-position bottom
        .maincontent
          width 1200px
          display flex
          justify-content space-between
          padding-top 80px
          .left
            width 440px
            text-align left 
            color #52525C
            .title
              font-size 40px
              .tips
                display inline
                font-size 22px
            .info
              margin-top 25px
              font-size 14px
              line-height 36px
            .product-info
              margin-top 70px
              display flex
              flex-wrap wrap
              .product-item
                width 200px
                height 50px
                display flex
                align-items center
                margin-right 30px
                background #FFFFFF
                box-shadow none
                border-radius 12px
                margin-top 30px
                color #52525C
                font-size 14px
                cursor pointer
                .img
                  height 30px
                  width 20px
                  display inline-block
                  margin-right 20px
                  margin-left 30px
                  background-size 20px
                  background-repeat no-repeat
                  background-position center
                .product-img0
                  background-image url('../assets/pcimg/apple.png')
                .product-img1
                  background-image url('../assets/pcimg/Android.png')
                .product-img2
                  background-image url('../assets/pcimg/google_play.png')
                .product-img3
                  background-image url('../assets/pcimg/chrome.png')
                .name
                  display inline-block
              .product-item:nth-child(2n)
                margin-right 0px
              .product-item:hover
                background rgba(255,255,255,0.95)
                box-shadow 0 0 8px 0 rgba(96,102,192,0.60)
                color #6066C0
                .product-img0
                  background-image url('../assets/pcimg/apple_hover.png')
                .product-img1
                  background-image url('../assets/pcimg/Android_hover.png')
                .product-img2
                  background-image url('../assets/pcimg/google_play_hover.png')
                .product-img3
                  background-image url('../assets/pcimg/chrome_hover.png')
          .right
            width 640px
            .info-img
              width 640px
              padding-left 80px
      .linkbg
        height 280px
        width 100%
        margin 0 auto
        background #FFFFFF 
        .link
          .title
            padding-top 65px
            font-size 24px
            color #52525C
          .link-view
            display flex
            margin-top 25px
            justify-content center
            .info-view
              display flex
              align-items center
              justify-content center
              margin-right 40px
              width 200px
              height 60px
              .img
                height 40px
            .info-view:first-child
              .img
                height 29px
            .info-view:last-child
              margin-right 0
            .info-view:hover
              background rgba(255,255,255,0.95)
              box-shadow 0 0 8px 0 rgba(96,102,192,0.20)
              border-radius 12px
              cursor pointer
  .footer
    background-color #52525C
    .foot-content
      display flex
      justify-content center
      align-items center
      flex-direction column
      .contact-view
        display flex
        height 110px
        justify-content center
        align-items center
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
              background-image url('../assets/pcimg/wechat.png')
            .weibo
              background-image url('../assets/pcimg/weibo.png')
            .twitter
              background-image url('../assets/pcimg/Twitter.png')
            .reddit
              background-image url('../assets/pcimg/Reddit.png')
            .github
              background-image url('../assets/pcimg/github.png')
            .email
              background-image url('../assets/pcimg/mail.png')
            .wechat:hover
              background-image url('../assets/pcimg/wechat_hover.png')
            .weibo:hover
              background-image url('../assets/pcimg/weibo_hover.png')
            .twitter:hover
              background-image url('../assets/pcimg/Twitter_hover.png')
            .reddit:hover
              background-image url('../assets/pcimg/Reddit_hover.png')
            .github:hover
              background-image url('../assets/pcimg/github_hover.png')
            .email:hover
              background-image url('../assets/pcimg/mail_hover.png')
            .contact-item:last-child
              margin-right 0px
      .line
        height 1px
        background-color #ffffff
        opacity 0.3
        width 1200px
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
          
</style>


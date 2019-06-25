<template lang="pug">
  .home
    .center-view
      .content-info
        .mian-bg
          .main-content
            .title PureWallet-
              .tips {{$t('纯粹、极致的多链钱包')}}
            .info {{$t('PureWallet Info')}}
            div(style="text-align:center")
              img.info-img(src="../assets/mimg/3picture.png")
              video.video(width=240,controls,loop)
                source(src="https://www.purewallet.org/static/howto.mp4?1" type="video/mp4")
                Your browser does not support the video tag.
              img.place-img(src="../assets/mimg/howto.png")
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
              a.product-item(target="_blank" href="https://help.purewallet.org/zh/getstarted/#ios-purewallet%E5%AE%89%E8%A3%85%E6%8C%87%E5%BC%95") 
                    .img(class="product-img0")
                    .name {{$t('国内iOS安装指引')}}
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
            .link-view
              .info-view(@click="toLink('https://www.coinex.org/')")
                img.img(src="../assets/mimg/coinex.svg")
      
</template>
<script>
export default {
  name: 'HomeM',
  data () {
    return {
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
    }
  },
  methods:{
    toLink(url){
      window.open(url,"_blank")
    },
    
  }
}
</script>
<style lang="stylus" scoped>
.home
  width 100%
  background-color #ffffff
  
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
            width 400px
            margin-top 45px
            margin-left -50px
          .video
            position absolute
            width 240px
          .place-img
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

</style>


<template lang="pug">
  .home
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
                a.product-item(target="_blank" href="https://help.purewallet.org/zh/getstarted/#ios-purewallet%E5%AE%89%E8%A3%85%E6%8C%87%E5%BC%95") 
                  .img(class="product-img0")
                  .name {{$t('国内iOS安装指引')}}
            .right
              video.video(width=240,autoplay,loop id="video")
                source(src="https://www.purewallet.org/static/howto.mp4" type="video/mp4")
                Your browser does not support the video tag.
              img.info-img(src="../assets/pcimg/3picture.png")
        .linkbg
          .link
            .title {{$t('合作伙伴')}}
            .link-view
              .info-view(v-for="(item,index) in linkInfo" :key="index" @click="toLink(item.link)")
                img.img(:src="item.img")
    
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
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
    }
  },
  methods:{
    
    toLink(url){
      window.open(url,"_blank")
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-dropdown-menu__item
  width 100px
  text-align left 
.el-dropdown-menu__item:not(.is-disabled):hover 
  background-color #F5F7FA
  color #6066C0

.home
  width 100%
  min-width 1200px
  height 100%
  display flex
  flex-direction column
  margin-bottom -150px
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
              width 660px
              padding-left 80px
              margin-top -50px
              z-index 5
              position relative
            .video
              position absolute
              margin-left 389px
              margin-top 38px
              width 240px
              border-radius 30px
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
</style>


<template lang="pug">
  .dapp-content-info
    .dapp-bg
      .dapp-title {{$t('DApp上架申请')}}
      .dapp-download
        a.download-a(href="./static/iostabc-dapp-request.xlsx" download="iostabc-dapp-request.xlsx") {{$t('下载申请模板')}}
      .dapp-tips 
        div {{$t('如果您希望在PureWallet展示您的 DApp')}}
        div
          span {{$t('下载并填写申请模板，发邮件到')}}
          a.emailto(href="mailto:support@iostabc.com") support@iostabc.com
          span {{$t('联系我们_1')}}

</template>
<style lang="stylus" scoped>
.dapp-content-info 
  width 100%
  height 100%
  height 600px
  .dapp-bg
    height 100%
    display flex
    justify-content center 
    align-items center
    flex-direction column
    background-image url('../../assets/mimg/download_bg.png')
    background-size 100% 100%
    background-repeat no-repeat
    background-position bottom  
    color #FFF  
    .dapp-title
      margin-bottom 30px
      font-size 36px  
    .dapp-download
      .download-a
        color #52525C
        text-decoration none 
        background-color #FFF
        line-height 40px
        padding 10px 40px
        border-radius 20px
    .dapp-tips
      margin-top 20px
      font-size 14px
      padding 0 20px
      text-align center
      line-height 25px
      .emailto
        color #409EFF
        text-decoration none 
</style>


<template>
  <div>
    <div class="header">
      <div class="min-header">
        更新历史
      </div>
    </div>
    <div class="content">
      <div class="content-title"><img src="/static/images/monitor/android.png"/></div>
      <div class="content-bt">
        <div class="content-btn">Android SDK 下载</div>
        2016-10-21 V2.1.5(2016-06-03)
      </div>
      <ol type="1">
        <li>1、优化Native异常合并；</li>
        <li>2、优化上报流量控制</li>
        <li>3、优化运营数据逻辑</li>
        <li>4、修复小概率数据重复上报问题</li>
      </ol>
      <a href="">
        Android SDK包 更新历史
      </a>
      <div class="content-title"><img src="/images/ios.png"/></div>
      <div class="content-bt">
        <div class="content-btn">IOS SDK 下载</div>
        2016-10-21 V2.1.5(2016-06-03)
      </div>
      <ol type="1">
        <li>1、优化Native异常合并；</li>
        <li>2、优化上报流量控制</li>
        <li>3、优化运营数据逻辑</li>
        <li>4、修复小概率数据重复上报问题</li>
      </ol>
      <a href="">
        IOS SDK包 更新历史
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  head: {
    title: '帮助中心-API监控-SDK下载',
    meta: [
      {
        hid: '帮助中心-API监控-SDK下载',
        name: '帮助中心-API监控-SDK下载',
        content: '帮助中心-API监控-SDK下载'
      }
    ]
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.content
  width 960px
  height 100%
  display block
  margin 0 auto

  a
    display block
    margin-top 20px
    font-size 13px
    text-decoration none

    color #57bfd3
    margin-bottom 40px

  a:after
    height 1px
    border-bottom 1px solid #57bfd3

  .content-title
    font-size 18px
    margin-top 10px
    margin-bottom 50px
    height 60px

    image
      height 100%
      width 100%

  .content-bt
    font-size 16px
    margin-bottom 20px
    display flex
    align-items center
    justify-content flex-start
    height 50px
    line-height 50px

    .content-btn
      display flex
      align-items center
      justify-content center
      height 50px
      line-height 50px
      width 200px
      color #fff
      background-color #55bdd2
      margin-bottom 10px
      margin-right 20px
      border-radius 3px

  ol
    li
      font-size 14px
      margin-bottom 10px

.header
  width 100%
  height 50px
  background-color #fafafb

  .min-header
    width 960px
    height 100%
    display flex
    margin 0 auto
    align-items center
    justify-content flex-start
    font-size 16px

</style>

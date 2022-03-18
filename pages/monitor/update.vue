<template>
  <div>
    <div class="header">
      <div class="min-header">
        更新历史
      </div>
    </div>
    <div class="content">
      <div class="content-title">Android SDK包 更新历史</div>
      <p>2016-10-21 V2.1.5(2016-06-03)</p>
      <ol type="1">
        <li>1、优化Native异常合并；</li>
        <li>2、优化上报流量控制</li>
        <li>3、优化运营数据逻辑</li>
        <li>4、修复小概率数据重复上报问题</li>
      </ol>
      <a href="">点击下载</a>
      <p>2016-10-21 V2.1.5(2016-06-03)</p>
      <ol type="1">
        <li>1、优化Native异常合并；</li>
        <li>2、优化上报流量控制</li>
        <li>3、优化运营数据逻辑</li>
        <li>4、修复小概率数据重复上报问题</li>
      </ol>
      <a href="">点击下载</a>
      <p>2016-10-21 V2.1.5(2016-06-03)</p>
      <ol type="1">
        <li>1、优化Native异常合并；</li>
        <li>2、优化上报流量控制</li>
        <li>3、优化运营数据逻辑</li>
        <li>4、修复小概率数据重复上报问题</li>
      </ol>
      <a href="">点击下载</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  head: {
    title: '帮助中心-API监控-更新历史',
    meta: [
      {
        hid: '帮助中心-API监控-更新历史',
        name: '帮助中心-API监控-更新历史',
        content: '帮助中心-API监控-更新历史'
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
    text-decoration: underline
    color #57bfd3
    margin-bottom 40px

  .content-title
    font-size 18px
    margin-top 10px
    margin-bottom 50px

  p
    font-size 16px
    margin-bottom 20px

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

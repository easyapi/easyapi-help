<template>
  <div class="footer flex-c items-center">
    <div class="content">
      <div class="footer-item flex justify-between mg-15-auto">
        <div class="w-3/12">
          <img class="w-24" src="https://qiniu.easyapi.com/market/logo.svg">
          <p class="w-4/5 mt-6 text-xs">
            新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台
          </p>
          <p class="text-xs">联系电话：<span class="color-00AEC5">136-5617-1020</span></p>
          <div class="flex">
            <el-popover
              placement="top"
              width="100"
              trigger="hover">
              <img src="https://qiniu.easyapi.com/weixin-easyapi.jpg" alt="">
              <a slot="reference"><img class="w-12 mr-4" src="../../assets/images/wechat.svg" alt=""></a>
            </el-popover>
            <a href="https://github.com/easyapi" target="_blank">
              <img class="w-12" src="../../assets/images/github.svg" alt="">
            </a>
          </div>
        </div>
        <div class="w-6/12 flex justify-around">
          <div class="flex flex-col">
            <h2>产品介绍</h2>
            <a class="text-xs" href="https://www.easyapi.com/product/doc">API协作</a>
            <a class="text-xs" href="https://www.easyapi.com/product/lowcode">API低代码</a>
            <a class="text-xs" href="https://www.easyapi.com/product/test">API测试</a>
            <a class="text-xs" href="https://www.easyapi.com/product/interface">API服务</a>
            <a class="text-xs" href="https://www.easyapi.com/product/monitor">API监控</a>
            <a class="text-xs" href="https://www.easyapi.com/product/scene">API场景化服务</a>
          </div>
          <div class="flex flex-col">
            <h2>私有化方案</h2>
            <a class="text-xs" href="https://www.easyapi.com/solution/portal">API管理门户</a>
            <a class="text-xs" href="https://www.easyapi.com/solution/market">API服务市场</a>
            <a class="text-xs" href="https://www.easyapi.com/solution/open">API开放平台</a>
          </div>
          <div class="flex flex-col">
            <h2>使用文档</h2>
            <a class="text-xs" href="https://help.easyapi.com" target="_blank">帮助中心</a>
            <a class="text-xs" href="https://support.qq.com/products/352231" target="_blank">BUG反馈</a>
            <a class="text-xs" href="https://www.easyapi.com/info/extension">浏览器插件</a>
            <a class="text-xs" href="https://www.easyapi.com/info/github">前端开源计划</a>
          </div>
          <div class="flex flex-col">
            <h2>关于</h2>
            <a class="text-xs" href="https://www.easyapi.com/info/about">关于我们</a>
            <a class="text-xs" href="https://www.easyapi.com/info/together">合作伙伴</a>
            <a class="text-xs" href="https://www.easyapi.com/info/contact">联系我们</a>
            <a class="text-xs" href="https://www.easyapi.com/info/support">支持我们</a>
            <a class="text-xs" href="https://www.easyapi.com/post/">平台动态</a>
          </div>
        </div>
        <div class="w-2/12 flex justify-end text-center">
          <div class="mr-12">
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/leida.png" alt="EasyAPI技术咨询">
            <p class="mt-5 text-xs">技术咨询</p>
          </div>
          <div>
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/suri.png" alt="EasyAPI商务咨询">
            <p class="mt-5 text-xs">商务咨询</p>
          </div>
        </div>
      </div>
      <el-divider class="mg-15-auto"></el-divider>
      <div class="mg-15-auto text-center">
        <a class="text-xs" href="https://beian.miit.gov.cn/" target="_blank">Copyright © 2015～2022 无锡帮趣数据服务有限公司</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>

<style scoped>
  .el-divider {
    background-color: #606266
  }
</style>

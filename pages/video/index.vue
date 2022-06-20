<template>
  <div>
    <el-breadcrumb class="ml-4 mg-t-24" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">帮助中心</el-breadcrumb-item>
      <el-breadcrumb-item>产品介绍</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div class="block mx-auto content">
      <div class="flex">
        <div class="product block mx-auto content">
          <ul class="product-ul w-full">
            <li class="cursor-pointer inline-block" v-for="(item, index) in videoList" :data-id="index"
                @click="openVideo(item.title,item.video)">
              <p class="ul-img w-full">
                <img class="w-full h-full" :src="item.img" alt=""/>
              </p>
              <p class="text-center">{{ item.title }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Video ref="child"></Video>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>

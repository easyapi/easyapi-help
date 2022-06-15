<template>
  <div>
    <Search/>
    <main class="main content block mx-auto">
      <div class="question w-full py-24">
        <div class="question-title text-center w-full mb-16">常见问题</div>
        <ul class="flex justify-between flex-wrap question-list">
          <li v-for="item in question" class="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
            <a :href="'/article?id='+item.articleId+'&detail='+item.articleCategory.articleCategoryId">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <!--<div v-for="item in question"-->
        <!--class="question-link inline-block text-center mx-4 ">-->

        <!--</div>-->
      </div>
    </main>
    <div class="questionType w-full py-24">
      <div class="questionType-title w-full text-center mb-24">问题分类</div>
      <div class="questionType-all block mx-auto content">
        <div class="questionType-item text-center inline-block" v-for="item in questionType">
          <a :href="'/article?id='+item.articleCategoryId+'&detail=0'">
            <img class="float-left" :src="item.img">
            <div class="questionType-right float-left">
              <p class="questionType-right-title text-left">{{ item.name }}</p>
              <p class="questionType-right-content text-left">{{ item.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="introduce-video block mx-auto content py-24">
      <div class="how-title text-center mb-24">视频介绍</div>
      <div class="flex">
        <div class="product block mx-auto content">
          <ul class="product-ul w-full">
            <li class="cursor-pointer inline-block" v-for="(item, index) in videoList" :data-id="index"
                @click="openVideo(item.title,item.video)">
              <p class="ul-img w-full">
                <img class="w-full h-full" :src="item.img"/>
              </p>
              <p class="text-center">{{ item.title }}</p>
            </li>
          </ul>
          <nuxt-link to="/video/" class="product-more block text-center mx-auto">更多视频</nuxt-link>
        </div>
      </div>
    </div>
    <div class="how-answer w-full py-20 block mx-full text-center">
      <p class="how-answer-title">没有找到想要到答案？</p>
      <p>加入QQ群：113415272</p>
    </div>

    <div class="pro-alert fixed w-full h-full top-0 left-0" v-if="showVideo">
      <div class="relative w-full h-full">
        <div class="pro-content absolute top-1/2 left-1/2">
          <div class="pro-title relative">
            2分钟
            <div class="pro-delete absolute cursor-pointer top-1/2" @click="deletePro">X</div>
          </div>
          <div class="pro-video p-4">
            <video class="w-full h-full" controls :src="video"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>






















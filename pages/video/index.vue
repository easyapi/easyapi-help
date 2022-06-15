<template>
  <div class="py-24">
    <div class="block mx-auto content">
      <p class="text-4xl mb-8">产品介绍</p>
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
        </div>
      </div>
    </div>
    <videoDialog ref="child"></videoDialog>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>

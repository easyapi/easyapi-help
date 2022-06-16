<template>
  <div>
    <!--<Search background="1"/>-->
    <main class="main-all mx-auto content py-12">
      <div class="cursor-pointer" @click="historyBack">
        <span class="text-xl"> 帮助中心 </span> > {{ name }}
      </div>
      <el-divider></el-divider>
      <div class="flex">
        <div class="main-content  w-full">
          <div class="w-full text-3xl">{{ name }}</div>
          <a :href="'/article/' + item.articleId" class="main-content-a py-8" v-for="item in articles"
             v-if="articles.length>0">{{ item.title }}
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import Index from '.'

  export default Index
</script>


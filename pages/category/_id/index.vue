<template>
  <div>
    <!--<Search background="1"/>-->
    <main class="main-all mx-auto content py-12 px-12">
      <div class="main-content  w-full">
        <div class="w-full text-3xl">{{ categoryName }}</div>
        <nuxt-link :to="'/article/' + item.articleId" class="main-content-a py-8" v-for="item in articles"
                   v-if="articles.length>0">{{ item.title }}
        </nuxt-link>
      </div>
    </main>
  </div>
</template>
<script>
  import Index from './index'

  export default Index
</script>


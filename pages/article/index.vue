<template>
  <div>
    <Search background="1"/>
    <main class="main-all mx-auto content py-12">
      <div class="cursor-pointer" @click="historyBack">
        <span class="text-xl"> 帮助中心 </span> > {{ name }}
      </div>
      <el-divider></el-divider>
      <div class="flex">
        <div class="pl-8 w-1/6">
          <ul class="w-full">
            <li class="h-12" v-for="item in menuList" :data-name="item.name"
                :data-id="item.articleCategoryId"
                v-bind:class="name === item.name?'orange':''"
                @click="openNews">
              <span class="menu-name cursor-pointer">{{ item.name }}</span>
            </li>
          </ul>
        </div>
        <div class="main-content  w-5/6">
          <div class="w-full text-3xl">{{ name }}</div>
          <a :href="'/article?id=6&detail='+item.articleId" class="main-content-a py-8" v-for="item in articles"
             v-if="articles.length>0">{{ item.title }}
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import Index from './index'

  export default Index
</script>


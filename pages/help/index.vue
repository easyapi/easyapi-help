<template>
  <div>
    <!--<Search background="1"/>-->
    <main class="main-all mx-auto content py-12">
      <div class="cursor-pointer" @click="historyBack">
        <span class="text-xl"> 帮助中心 </span> > {{ name }}
      </div>
      <el-divider></el-divider>
      <div class="flex">
        <div class="w-1/6">
          <el-col :span="24">
            <el-menu
              @open="open"
              @close="close"
              @select="select"
              :default-active="$route.path"
              class="el-menu-vertical-demo">
              <el-submenu v-for="item in menuList" :index="'/help/category/'+item.articleCategoryId">
                <template slot="title">
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="overflow-hidden whitespace-nowrap overflow-ellipsis" v-for="url in item.article"
                                :index="'/help/category/'+item.articleCategoryId+'/article/'+url.articleId"
                  >
                    <span slot="title">{{url.title}}</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </div>
        <div class="w-5/6">
          <client-only>
            <nuxt/>
          </client-only>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import Index from '.'

  export default Index
</script>


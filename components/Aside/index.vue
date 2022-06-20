<template>
  <div>
    <el-breadcrumb class="ml-12 mg-t-24" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item @click.native="goBack" :to="{ path: '/' }">帮助中心</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="goCategory"><a :href='"/category/"+articleCategoryId'>{{ categoryName }}</a></el-breadcrumb-item>
      <el-breadcrumb-item v-if="articleName">{{articleName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <main class="main-all mx-auto content py-12">
      <div class="flex">
        <div class="w-1/6">
          <el-col :span="24">
            <el-menu
              @open="open"
              @close="close"
              @select="select"
              :default-active="defaultActive"
              class="el-menu-vertical-demo">
              <el-submenu v-for="item in menuList" :index="'/category/'+item.articleCategoryId">
                <template slot="title">
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="overflow-hidden whitespace-nowrap overflow-ellipsis" v-for="url in item.article"
                                :index="'/article/'+url.articleId"
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


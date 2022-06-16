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
          <!--<ul class="w-full">-->
          <!--<li class="h-12" v-for="item in menuList" :data-name="item.name"-->
          <!--:data-id="item.articleCategoryId"-->
          <!--v-bind:class="name === item.name?'orange':''"-->
          <!--@click="openNews">-->
          <!--<span class="menu-name cursor-pointer">{{ item.name }}</span>-->
          <!--</li>-->
          <!--</ul>-->
          <el-col :span="24">
            <el-menu
              @open="open"
              @select="select"
              :default-active="$route.path"
              class="el-menu-vertical-demo">
              <el-submenu v-for="item in menuList">
                <template slot="title">
                  <nuxt-link :to="'/help/category/'+item.articleCategoryId">
                    <span>{{item.name}}</span>
                  </nuxt-link>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="overflow-hidden whitespace-nowrap overflow-ellipsis" v-for="url in item.article">
                    <span slot="title">{{url.title}}</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </div>
        <div>
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


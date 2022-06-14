<template>
  <div>
    <div class="header">
      <router-link to="/" class="header-logo">
        <img src="https://qiniu.easyapi.com/market/logo.svg"/>
      </router-link>
      <div class="header-user">
        <a v-if='!authenticationToken' href="https://account.easyapi.com/login">登陆</a>
        <a class="login" v-if='!authenticationToken' href="https://account.easyapi.com/signup">注册</a>
      </div>
      <div class='team-head-left' v-if='authenticationToken'>
        <el-dropdown trigger='hover' @command='handleCommand'>
              <span id='showTeamInfo' style='cursor: pointer'>
                <img v-if='photo' class='team-icon' :src='photo' alt/>
              </span>
          <el-dropdown-menu slot='dropdown'>
            <el-dropdown-item command='notice' icon='el-icon-edit'>我的通知</el-dropdown-item>
            <el-dropdown-item command='edit' icon='el-icon-sort'>个人设置</el-dropdown-item>
            <el-dropdown-item command='quitLogin' icon='el-icon-switch-button'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  import Index from './index'

  export default Index
</script>

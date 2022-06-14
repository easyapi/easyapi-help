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
    <nuxt/>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  import {mapGetters} from 'vuex'

  export default {
    components: {},
    data() {
      return {
        authenticationToken: Cookies.get('authenticationToken'),
      }
    },
    mounted() {
      if (this.authenticationToken) {
        this.$store.dispatch('getUser')
      }
    },
    methods: {
      handleCommand(command) {
        if (command === 'notice') {
          window.open(`https://team.easyapi.com/notification`)
        } else if (command === 'edit') {
          window.open(`https://team.easyapi.com/user/edit`)
        } else if (command === 'quitLogin') {
          this.quitLogin()
        }
      },
      quitLogin() {
        this.$store.dispatch('logout')
        window.location.href = 'https://account.easyapi.com/login'
      },
    },
    computed: {
      ...mapGetters([
        'photo',
        'team'
      ])
    },
  }
</script>
<style scoped lang="scss">

  .header {
    width: 100%;
    height: 72px;
    background-color: #18c1d6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    .header-logo {
      cursor: pointer;
      margin-left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        width: 170px
      }

      span {
        color: #fff;
        width: 6em;
      }
    }

    .header-user {
      cursor: pointer;
      min-width: 10em;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: #fff
      }

      .header-l {
        margin: 0 1em
      }
    }
  }

  .login {
    margin-left: 20px;
  }

  .team-head-left {
    margin-right: 20px;
    display: flex;
    position: relative;
  }

  .team-icon {
    margin-top: 6px;
    width: 30px;
    height: 30px;
    border-radius: 20px
  }
</style>

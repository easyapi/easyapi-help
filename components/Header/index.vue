<template>
  <el-row class="header">
    <el-col :span="24" class="header-wp">
      <a href="https://www.easyapi.com/">
        <img class="logo" src="https://qiniu.easyapi.com/market/logo.svg" alt=""/>
      </a>
      <a href="https://help.easyapi.com/">
        <span>帮助中心</span>
      </a>
      <div class="buttons">
        <a href="https://account.easyapi.com/login">登录</a>
        <a href="https://account.easyapi.com/signup">注册</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #18c1d6;

  .header-wp {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #fff;
      width: 6em
    }

    a {
      color: #ffffff;
    }
  }
}

@media screen and (min-width: 450px) {
  .header {
    height: 72px;

    .header-wp {
      height: 72px;

      .logo {
        width: 160px;
      }
    }
  }
}


@media screen and (max-width: 450px) {
  .header {
    height: 36px;

    .header-wp {
      height: 36px;

      .logo {
        width: 60px;
      }
    }
  }
}
</style>


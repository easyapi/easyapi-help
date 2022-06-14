<template>
  <section class="relative pt-24 pb-12 bg-contain bg-center bg-no-repeat">
    <img v-if="back" src='/static/images/search/downPage.jpg' class="absolute z-10 left-0 top-0 w-full h-full"/>
    <div class="search-logo relative z-50 mx-auto text-4xl text-center mb-8">EasyAPI 帮助中心</div>
    <div class="search-box mx-auto mb-12">
      <el-input placeholder="搜索您的问题关键词，如「测试」" v-model="searchText" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
  </section>
</template>

<script>
  export default {
    props: [
      'background',
      'message'
    ],
    data() {
      return {
        back: '',
        searchText: ''
      }
    },
    mounted() {
      this.$nextTick(function () {
        // DOM 更新了
        this.searchText = this.message
        if (parseInt(this.background) === 1) {
          // 存在背景
          this.back = '~assets/image/downPage.jpg'
        }
      })
    },
    methods: {
      search() {
        let searchText = this.searchText
        this.$router.push(
          {
            name: "search",
            query: {
              id: searchText
            }
          }
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-logo {
    color: #1AB7CB;
    max-width: 600px;
  }

  .search-box {
    max-width: 600px;
  }
</style>

<template>
  <section>
    <img v-if="back" src='/static/images/search/downPage.jpg' class="sec-img"/>
    <div class="search-logo">EasyAPI 帮助中心</div>
    <div class="search-box">
      <span class="box-logo"><img src="/static/images/search/search_logo.png"/></span>
      <span class="box-input"><input placeholder="搜索您的问题关键词,例如测试" v-model="searchText"/></span>
      <a class="box-btn" :href="'/search?id='+searchText">搜索</a>
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
      this.$router.push({path: `/search/${searchText}`})
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
section
  position relative

.sec-img
  z-index 1
  position absolute
  left 0
  top 0
  height 100%
  width 100%

::-webkit-input-placeholder
  color #c1c1c1

section
  background-size 100%
  background-position center
  background-repeat no-repeat
  padding 6rem 0 3rem 0

  .search-logo
    position relative
    z-index 111
    display block
    margin 0 auto
    color #1AB7CB
    font-size 26px
    max-width 600px
    text-align center
    margin-bottom 2rem

  .search-box
    position relative
    z-index 111
    display flex
    margin 0 auto
    max-width 600px
    border 1px solid #1AB7CB
    align-items center
    height 40px
    margin-bottom 3rem

    .box-logo
      flex 1
      height 100%
      width 100%
      display flex
      align-items center
      justify-content center
      background-color #fff

      img
        height 80%
        width 80%

    .box-input
      flex 12
      height 100%
      display flex
      align-items center

      input
        width 100%
        color #000
        height 100%
        outline none

    .box-btn
      cursor pointer
      flex 2.5
      text-align center
      background-color #1AB7CB
      color #fff
      height 100%
      display flex
      align-items center
      justify-content center


</style>

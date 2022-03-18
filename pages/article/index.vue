<template>
  <div class="acticle">
    <Search background="1"/>
    <main class="main-all">
      <div class="main-title" @click="historyBack">
        <span style="color: grey"> 帮助中心 </span> > {{ name }}
      </div>
      <div class="main-con">
        <div class="main-menu">
          <ul>
            <li v-for="item in menuList" :data-name="item.name" :data-id="item.articleCategoryId"
                v-bind:class="name === item.name?'orange':''"
                @click="openNews">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="main-content">
          <div class="main-content-title">{{ name }}</div>
          <a :href="'/article?id=6&detail='+item.articleId" class="main-content-a" v-for="item in articles"
             v-if="articles.length>0">{{ item.title }}</a>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Search from '~/components/Search/index'
import Footer from '~/components/Footer/index'
import {getArticleList, getArticleCategoryList, getArticle} from '../../api/article'

export default {
  data() {
    return {
      menuList: [],
      articles: [],
    }
  },

  async asyncData(content) {
    let [res1, res2] = await Promise.all([
      getArticleList({}, content),
      getArticleCategoryList({}, content)
    ])
    return {
      articles: res1.data.content,
      menuList: res2.data.content
    }
  },

  layout: 'header',
  head() {
    return {
      title: "",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ""},
        {hid: 'keyswords', name: 'keyswords', content: ""}
      ]
    }
  },

  components: {
    Search,
    Footer
  },
  methods: {
    historyBack: function () {
      this.$router.push({path: '/'})
    },
    openNews: function (e) {
      let id = e.target.dataset.id
      window.location.href = `/article/${id}`
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.orange
  color #ff7603

.main-all
  width 960px
  display block
  margin 0 auto
  padding 30px 0
  font-size 14px

  .main-title
    cursor pointer
    padding 1rem 0
    border-bottom 1px solid #c1c1c1

  .main-con
    padding-top 30px
    display flex

    .main-menu
      display inline-block
      width 150px
      text-align left
      padding-left 10px

      ul
        width 100%

        li
          cursor pointer
          width 100%
          height 40px
          font-weight 700

    .main-content
      width 810px
      display inline-block
      height 100%

      .main-content-title
        width 100%
        font-size 18px
        padding-bottom 20px

      .main-content-a
        color grey
        display block
        padding 20px 0
        width 100%
        border-bottom 1px solid #c1c1c1


</style>


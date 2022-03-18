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
              <!--<a style="color: #ff7603" v-if="name === item.name">-->
              <!--{{item.name}}-->
              <!--</a>-->
              <!--<a v-else>-->
              {{ item.name }}
              <!--</a>-->
            </li>
            <!--<li>团队管理</li>-->
            <!--<li>创建项目</li>-->
            <!--<li>项目设置</li>-->
            <!--<li>监控系统</li>-->
            <!--<li>网管系统</li>-->
            <!--<li>常见问题</li>-->
          </ul>
        </div>

        <div v-if="detail===0">
          <!--显示列表-->
          <div class="main-content">
            <div class="main-content-title">{{ name }}</div>
            <a :href="'/article?id=6&detail='+item.articleId" class="main-content-a"
               v-for="item in aList" v-if="aList.length>0">{{ item.title }}</a>
            <!--<a  v-else>暂时没有数据</a>-->
          </div>
        </div>
        <!--显示详情-->
        <div v-else>
          <div class="main-content">
            <div class="main-content-title">{{ title }}</div>
            <div v-html="content"></div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Search from '~/components/Search/index'
import Footer from '~/components/Footer/index'
import axios from 'axios'

export default {
  async asyncData({query, app}, callback) {
    let id = query.id
    let detail = parseInt(query.detail)
    let content = ''
    let aList = []
    let title = ''
    let description = ''
    let name = ''
    let menuList = []
    let resList = []


//
//            let [con, menu] = await Promise.all([
//                axios.get(`http://api2.easyapi.com/api/articles.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8&articleCategoryId=${id}`),
//                axios.get('http://api2.easyapi.com/api/article/categories.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8'),
//            ])


    if (detail === 0) {
      let [con, menu] = await Promise.all([
        axios.get(`http://api2.easyapi.com/api/articles.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8&articleCategoryId=${id}`),
        axios.get('http://api2.easyapi.com/api/article/categories.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8'),
      ])
      console.log(menu.data)


      menuList = menu.data
      resList = con.data
      // 不在详细页
      if (!resList.code) {
        content = resList.content[0].content
        aList = resList.content
        description = resList.content[0].articleCategory.description
        title = resList.content[0].articleCategory.name
        name = resList.content[0].articleCategory.name
      } else {
        content = ''
        aList = []
        description = ''
        title = name
      }
    } else {
      let [con, menu] = await Promise.all([
        axios.get(`http://api2.easyapi.com/api/article/${detail}.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8`),
        axios.get('http://api2.easyapi.com/api/article/categories.json?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8'),
      ])
      menuList = menu.data
      resList = con.data
      content = resList.content.content
      name = resList.content.articleCategory.name
      title = resList.content.title
      description = resList.content.articleCategory.description
    }


    callback(null, {
        menuList: menuList,
        content: content,
        aList: aList,
        title: title,
        description: description,
        name: name,
        detail: detail
      }
    )
  },
  created() {

  },
  mounted() {
  },
  data() {
    return {
      menuList: [],
      content: '',
      aList: [],
      title: '',
      description: '',
      name: '',
      detail: 0
    }
  },
  layout: 'header',
  head() {
    return {
      title: this.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: this.description},
        {hid: 'keyswords', name: 'keyswords', content: this.title}
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
      window.location.href = `/article?id=${id}&detail=0`
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


<template>
  <div>
    <Search/>
    <main class="main">
      <!--<div class="how-useing">-->
      <!--<div class="how-title">如何使用 EasyAPI </div>-->
      <!--<div class="how-con">-->
      <!--<div class="con-title">团队和项目</div>-->
      <!--<div class="con-line"></div>-->
      <!--<ul type="circle">-->
      <!--<li>登陆/注册</li>-->
      <!--<li>怎么新建团队</li>-->
      <!--<li>镜像拉取图片资源出现404页面的情况解答</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--<nuxt-link to="/article" class="how-more">浏览文档</nuxt-link>-->
      <!--</div>-->


      <div class="question">
        <div class="question-title">常见问题</div>
        <div v-for="item in question" class="question-link">
          <a :href="'/article?id='+item.articleId+'&detail='+item.articleCategory.articleCategoryId">
            {{ item.title }}
          </a>
        </div>
      </div>
    </main>
    <div class="questionType">
      <div class="questionType-title">问题分类</div>
      <div class="questionType-all">
        <div class="questionType-item" v-for="item in questionType">
          <a :href="'/article?id='+item.articleCategoryId+'&detail=0'">
            <img :src="item.img">
            <div class="questionType-right">
              <p class="questionType-right-title">{{ item.name }}</p>
              <p class="questionType-right-content">{{ item.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="introduce-video">
      <div class="how-title">视频介绍</div>

      <div class="video-all">

        <!--<div class="video">-->
        <!--<video src="videofile.ogg" autoplay poster="posterimage.jpg">-->
        <!--抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href="videofile.ogg">下载</a>-->
        <!--并用你喜欢的播放器观看!-->
        <!--</video>-->
        <!--<div class="video-title">2分钟认识EasyAPI</div>-->
        <!--</div>-->


        <!--<div class="video">-->

        <!--<video src="~assets/video/wechat.mp4" ref="video">-->
        <!--抱歉，您的浏览器不支持内嵌视频，不过 不用担心，你可以 <a href="videofile.ogg">下载</a>-->
        <!--并用你喜欢的播放器观看!-->
        <!--</video>-->
        <!--<div class="video-title">2分钟认识EasyAPI</div>-->
        <!--<div class="video-back" @click="start"></div>-->
        <!---->
        <!---->
        <!---->
        <!---->
        <!--</div>-->

        <div class="product">
          <ul class="product-ul">
            <li v-for="(item, index) in videoList" :data-id="index"
                @click="openVideo(item.title,item.video)">
              <p class="ul-img">
                <img :src="item.img"/>
              </p>
              <p class="ul-text">{{ item.title }}</p>
            </li>
          </ul>
          <nuxt-link to="/video/" class="product-more">更多视频</nuxt-link>
        </div>
      </div>
    </div>
    <div class="how-answer">
      <p class="how-answer-title">没有找到想要到答案？</p>
      <p>加入QQ群：113415272</p>
    </div>

    <div class="pro-alert" v-if="showVideo">
      <div class="" style="position: relative;height: 100%;width: 100%;">
        <div class="pro-content">
          <div class="pro-title">
            2分钟
            <div class="pro-delete" @click="deletePro">X</div>
          </div>
          <div class="pro-video">
            <video controls :src="video"></video>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from '~/components/Search/index'
import Footer from '~/components/Footer/index.vue'
import {getArticleList, getArticleCategoryList} from '../api/article'

export default {
//        async asyncData ({req, error, params, query}, callback) {
//            let videoList = []
//            let title = ''
//            let video = ''
//            let showVideo = false
//            let question = []
//            let questionType = []
//
//            let [res1, res2, res3] = await Promise.all([
//                axios.get(`https://api2.easyapi.com/api/articles?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8&type=视频`),
//                axios.get(`https://api2.easyapi.com/api/articles?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8&type=文章`),
//                axios.get('https://api2.easyapi.com/api//article/categories?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8')
//            ])
//            videoList = res1.content
//            title = res1.content[0].title
//            video = res1.content[0].video
//            question = res2.content
//            questionType = res3.data
//
//
//            callback(null, {
//                  videoList: videoList,
//                  title: title,
//                  video: video,
//                  showVideo: showVideo,
//                  question: question,
//                  questionType: questionType
//              }
//            )
//        },
  layout: 'header',
  head() {
    return {
      title: '帮助中心',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: '帮助中心'},
        {hid: 'keyswords', name: 'keyswords', content: '帮助中心'}
      ]
    }
  },
  components: {
    Search,
    Footer
  },

  data() {
    return {
      videoList: [],
      title: '',
      video: '',
      showVideo: false,
      question: [],
      questionType: []
    }
  },
  created() {
    let _this = this
    getArticleList({type: "视频"},this).then((res) => {
      _this.videoList = res.data.content
      _this.title = res.data.content[0].title
      _this.video = res.data.content[0].video
    })
    getArticleList({type: "文章"},this).then((res) => {
      _this.question = res.data.content
    })
    getArticleCategoryList({},this).then((res) => {
      _this.questionType = res.data
    })
  },
  methods: {
    start() {
    },
    openVideo: function (title, video) {
      this.title = title
      this.video = video
      this.showVideo = true
    },
    deletePro: function () {
      this.showVideo = false
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.questionType
  width 100%
  min-height 100px
  margin-bottom 30px
  background-color #ecf1f4
  padding 30px 0

  .questionType-title
    width 100%
    height 20px
    font-size 20px
    text-align center
    margin-bottom 30px

  .questionType-all
    max-width 960px
    min-height 10px
    display block
    margin 0 auto

    .questionType-item
      width 32%
      display inline-block
      color #18c1d6
      text-align center
      min-height 20px
      background-color #f9f9f9
      font-size 12px
      margin-bottom 10px
      padding 20px 30px
      margin-right 10px

      img
        width 60px
        height 60px
        margin-right 10px
        border-radius 50%
        float left

      .questionType-right
        margin-top 5px
        float left
        min-width 60px
        height 60px

        .questionType-right-title
          text-align left
          font-size 16px
          color #000
          margin-bottom 10px

        .questionType-right-content
          text-align left
          font-size 12px
          color grey

.question
  width 100%
  min-height 100px
  margin-bottom 30px

  .question-title
    width 100%
    height 20px
    font-size 20px
    text-align center
    margin-bottom 30px

  .question-link
    width 33.3%
    display inline-block
    color #18c1d6
    text-align center
    height 20px
    font-size 12px
    margin-bottom 10px

    a
      color #18c1d6

.pro-alert
  position fixed
  height 100%
  width 100%
  background-color rgba(0, 0, 0, .3)
  left 0
  top 0

  .pro-content
    position absolute
    height 365px
    width 425px
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background-color #ffffff
    box-shadow 0 0 0

    .pro-video
      padding 1rem
      height 310px

      video
        background-color #000000
        height 100%
        width 100%

    .pro-title
      position relative
      border-bottom 1px solid grey
      padding 15px 15px
      font-size 14px

      .pro-delete
        cursor pointer
        position absolute
        right 20px
        top 50%
        transform translate(0, -50%)

.how-answer
  padding 5rem 0
  width 100%
  display block
  margin 0 auto
  margin-bottom 80px
  color #000
  background-color #ecf1f4

  .how-answer-title
    color #000
    font-size 25px
    margin-bottom 2rem

  p
    display flex
    margin 0 auto
    justify-content center
    margin-bottom 1rem

.main
  max-width 960px
  display block
  margin 0 auto

  .how-useing
    .how-title
      color #000
      text-align left
      font-size 22px
      padding-bottom 1rem
      border-bottom 1px solid #c1c1c1

    .how-con
      display inline-block
      width 33.3%
      margin-top 3rem

      .con-title
        font-weight 800
        font-size 14px

      .con-line
        border 1px solid #eee
        margin 1rem 0
        width 2rem

      ul
        width 100%

        li:before
          content ""

        li
          margin-left 1.5rem
          list-style circle
          margin-bottom 1rem

    .how-more
      margin 0 auto
      margin-top 3rem
      max-width 8em
      padding 1rem
      background-color #1AB7CB
      color #fff
      display flex
      align-items center
      justify-content center
      border-radius 5px

.introduce-video
  display block
  width 960px
  min-height 10px
  margin 0 auto
  margin-top 30px

  .how-title
    color #000
    text-align center
    font-size 20px
    padding-bottom 1rem

  .video-all
    display flex

.product
  display block
  width 960px
  min-height 10px
  margin 0 auto
  margin-top 30px
  margin-bottom 50px

  .product-title
    width 100%
    font-size 18px
    padding-bottom 10px

  .product-more
    display block
    text-align center
    border-radius 3px
    margin 0 auto
    color #fff
    width 60px
    padding 10px 30px
    background-color #18c1d6

  .product-ul
    width 100%
    min-height 10px

    li
      cursor pointer
      display inline-block
      width 210px
      height 180px
      margin-right 30px
      margin-bottom 20px

      .ul-img
        width 100%
        height 150px
        margin-bottom 10px

        img
          height 100%
          width 100%

      .ul-text
        text-align center


</style>






















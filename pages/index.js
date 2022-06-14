import './index.scss'
import Search from '~/components/Search/index'
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
    Search
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
    getArticleList({type: "视频"}, this).then((res) => {
      _this.videoList = res.data.content
      _this.title = res.data.content[0].title
      _this.video = res.data.content[0].video
    })
    getArticleList({type: "文章"}, this).then((res) => {
      _this.question = res.data.content
    })
    getArticleCategoryList({}, this).then((res) => {
      _this.questionType = res.data.content
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

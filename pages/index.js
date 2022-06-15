import './index.scss'
import Search from '~/components/Search/index'
import videoDialog from '~/components/videoDialog/index'
import {getArticleList, getArticleCategoryList} from '../api/article'

export default {
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
    videoDialog
  },

  data() {
    return {
      videoList: [],
      title: '',
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
      this.$refs.child.title = title
      this.$refs.child.video = video
      this.$refs.child.showVideo = true
    }
  }
}

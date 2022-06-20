import './index.scss'
import Search from '~/components/Search/index'
import Video from '@/components/Video'
import {getArticleList, getArticleCategoryList} from '@/api/article'

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
    Video
  },

  data() {
    return {
      videoList: [],
      title: '',
      questionList: [],
      categoryList: []
    }
  },
  created() {
    getArticleList({type: "视频"}, this).then((res) => {
      this.videoList = res.data.content
    })
    getArticleList({type: "文章"}, this).then((res) => {
      this.questionList = res.data.content
    })
    getArticleCategoryList({}, this).then((res) => {
      this.categoryList = res.data.content
    })
  },
  methods: {
    openVideo: function (title, video) {
      this.$refs.child.title = title
      this.$refs.child.video = video
      this.$refs.child.showVideo = true
    },
    jumpCategory(item) {
      window.location.href = '/category/' + item.articleCategoryId
      localStorage.setItem('categoryName', item.name)
      localStorage.setItem('articleName', "")
    },
    jumpArticle(item) {
      localStorage.setItem("categoryName", item.articleCategory.name)
      localStorage.setItem("articleCategoryId", item.articleCategory.articleCategoryId)
      localStorage.setItem("articleName", item.title)
    }
  }
}

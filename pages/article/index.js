import './index.scss'
import Search from '~/components/Search/index'
import {getArticleList, getArticleCategoryList, getArticle} from '../../api/article'

export default {
  data() {
    return {
      menuList: [],
      articles: [],
      name: "列表"
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
    Search
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

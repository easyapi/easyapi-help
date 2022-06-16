import './index.scss'

import {getArticle, getArticleList, getArticleCategoryList} from '../../../api/article'

export default {
  name: 'ArticleDetail',
  head() {
    return {
      title: this.article.title + ' - EasyAPI帮助中心',
      meta: [
        {hid: 'description', name: 'description', content: this.article.title},
        {hid: 'keyword', name: 'keyword', content: '文章详情'}
      ]
    }
  },
  data() {
    return {
      article: null,
      menuList: [],
      articles: [],
    }
  },
  async asyncData(context) {
    let [res1, res2, res3] = await Promise.all([
      getArticle(context.route.params.id, context),
      getArticleCategoryList({}, context),
      getArticleList({}, context)
    ])
    return {
      article: res1.data.content,
      menuList: res2.data.content,
      articles: res3.data.content
    }
  },
  methods: {
    open(val) {
      console.log(val)
      this.$router.push("/category/")
    },
    select(val) {
      this.$router.push(val)
    }
  }
}

import './index.scss'

import {getArticle} from '@/api/article'

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
      articleObj: {},
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      let params = {}
      getArticle(this.$route.params.id, this).then(res => {
        if (res.data.code === 1) {
          this.articleObj = res.data.content
          localStorage.setItem("articleName", res.data.content.title)
          this.$root.$emit('setdata', res.data.content.title)
        }
      })
    }
  },
  async asyncData(context) {
    let [res] = await Promise.all([
      getArticle(context.route.params.id, context)
    ])
    return {
      article: res.data.content
    }
  },
}

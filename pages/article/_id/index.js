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
      article: null
    }
  },
  async asyncData(context) {
    console.log(context)
    let [res] = await Promise.all([
      getArticle(context.route.params.id, context)
    ])
    return {
      article: res.data.content
    }
  }
}

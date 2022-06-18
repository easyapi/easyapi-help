import './index.scss'
import Search from '~/components/Search/index'
import getUrlParam from '../../utils/getParamer'
import {getArticleList} from '@/api/article'

export default {
  layout: 'header',
  name: "search",
  mounted() {
    let id = getUrlParam('id')
    this.message = id

    let that = this
    getArticleList({q: id}, this).then(function (res) {
      let result = []
      res.data.content.forEach((v, k, value) => {
        result[k] = v
      })
      that.content = result
      that.size = result.length
    })
  },
  data() {
    return {
      content: [],
      size: 0,
      message: ''
    }
  },
  components: {
    Search
  }
}

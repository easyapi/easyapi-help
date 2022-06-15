import './index.scss'
import Search from '~/components/Search/index'
import getUrlParam from '../../utils/getParamer'
import {getArticleList} from '../../api/article'

export default {
  layout: 'header',
  name: "search",
  mounted() {
    //            let id = this.$route.params.search_id
    let id = getUrlParam('id')
    this.message = id

    let _this = this
    getArticleList({q: id}, this).then(function (res) {
      let result = []
      res.data.content.forEach((v, k, value) => {
//                    if(!v.aaaa){
        result[k] = v
//                    }
      })
      _this.content = result
      _this.size = result.length
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

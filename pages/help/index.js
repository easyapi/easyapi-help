import './index.scss'
import Search from '@/components/Search'
import {getArticleList, getArticleCategoryList} from '../../api/article'

export default {
  name: "category",
  data() {
    return {
      menuList: [],
      articles: [],
      name: "列表",
      path: ""
    }
  },

  // async asyncData(content) {
  //   let [res1, res2] = await Promise.all([
  //     getArticleList({}, content),
  //     getArticleCategoryList({}, content)
  //   ])
  //   return {
  //     articles: res1.data.content,
  //     menuList: res2.data.content
  //   }
  // },

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
  mounted() {
    this.getArticleCategoryList()
  },
  methods: {
    async getArticleCategoryList() {
      let params = {}
      let list = []
      await getArticleCategoryList(params, this).then(res => {
        if (res.data.code === 1) {
          this.menuList = res.data.content
          for (let a of this.menuList) {
            let params1 = {}
            let obj = {
              name: a.name,
              articleCategoryId: a.articleCategoryId,
              article: []
            }
            getArticleList(params1, this).then(res => {
              obj.article = res.data.content
            })
            list.push(obj)
          }
        }
      })
      this.menuList = list
      console.log(this.menuList)
    },
    historyBack: function () {
      this.$router.push({path: '/'})
    },
    openNews: function (e) {
      let id = e.target.dataset.id
      window.location.href = `/category/${id}`
    },
    open(val) {
      this.$router.push(val)
    },
    close(val) {
      this.$router.push(val)
    },
    select(val) {
      this.$router.push(val)
    }
  }
}

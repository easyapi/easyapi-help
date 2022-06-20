import './index.scss'
import Search from '@/components/Search'
import {getArticleList, getArticleCategoryList, getArticle} from '@/api/article'

export default {
  name: "category",
  data() {
    return {
      menuList: [],
      articles: [],
      categoryName: localStorage.getItem("categoryName"),
      articleName: localStorage.getItem("articleName"),
      articleCategoryId: localStorage.getItem("articleCategoryId"),
      path: "",
      article: null
    }
  },

  watch: {
    $route(route) {
      if (route) {
        if (route.path.indexOf("category") > 0) {
          console.log(1)
          let id = Number(route.params.id)
          for (let item of this.menuList) {
            if (id === item.articleCategoryId) {
              this.categoryName = item.name
            }
          }
        }
      }
    },
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
    this.$root.$on('setdata', (data) => {
      this.articleName = data
    })

  },
  computed: {
    defaultActive() {
      return '/' + this.$route.path.split('/').reverse()[0];
    }
  },
  async asyncData(context) {
    let [res] = await Promise.all([
      getArticle(context.route.params.id, context)
    ])
    console.log(res.data.content, 111)
    return {
      article: res.data.content
    }
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
    },
    historyBack: function () {
      window.location.href = '/'
    },
    openNews: function (e) {
      let id = e.target.dataset.id
      window.location.href = `/category/${id}`
    },
    open(val) {
      this.$router.push(val)
      localStorage.setItem('articleName', "")
      this.articleName = ""
      let id = Number(val.replace(/[^0-9]/ig, ""))
      for (let item of this.menuList) {
        if (id === item.articleCategoryId) {
          localStorage.setItem('categoryName', item.name)
        }
      }
    },
    goBack() {
      window.location.href = `/`
    },
    goCategory() {
      // this.$root.$emit('setdata', "")
      this.articleName = ""
    },
    close(val) {
      // this.$router.push(val)
    },
    select(val) {
      this.$router.push(val)
    },
  }
}

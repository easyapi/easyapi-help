<template>
  <div>
    <Search background="1" :message="message"/>
    <div class="content">
      <div class="title">共找到 {{ size }} 条 「任务」的搜索结果</div>

      <div class="con " v-for="item in content" v-if="!item.video">
        <div class="con-title">{{ item.title }}</div>
        <div class="con-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from '~/components/Search/index'
import getUrlParam from '../../utils/getParamer'
import {getArticleList} from '../../api/article'

export default {
  layout: 'header',
  mounted() {
    //            let id = this.$route.params.search_id
    let id = getUrlParam('id')
    this.message = id

    let _this = this
    getArticleList({q: id}, this).then(function (res) {
      let result = []
      res.data.content.forEach((v, k, value) => {
//                    if(!v.video){
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
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.content
  padding 20px 0
  width 600px
  min-height 10px
  display block
  margin 0 auto
  margin-bottom 30px

  .title
    margin-bottom 30px

  .con
    border-bottom 1px solid #c1c1c1
    padding-bottom 10px
    padding-top 10px

    .con-title
      font-size 16px
      font-weight 800px

    .con-content
      font-size 12px
      margin 15px 0

</style>

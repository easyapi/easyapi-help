/**
 * 获取文章列表
 */
export const getArticleList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/articles`, {
    params: {
      ...params,
      appKey: 'ja4fkcz35kfqywi7',
      appSecret: 'k1v8c637vr4swgr8'
    }
  })
}

/**
 * 获取文章详情
 *
 * @see http://www.easyapi.com/market/get/article
 */
export const getArticle = (id, context) => {
  return context.$axios.get(`${process.env.baseUrl}/article/${id}`, {
    params: {
      appKey: 'ja4fkcz35kfqywi7',
      appSecret: 'k1v8c637vr4swgr8'
    }
  })
}


/**
 * 获取分类列表
 */
export const getArticleCategoryList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/article/categories`, {
    params: {
      ...params,
      appKey: 'ja4fkcz35kfqywi7',
      appSecret: 'k1v8c637vr4swgr8'
    }
  })
}

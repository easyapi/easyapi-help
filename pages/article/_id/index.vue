<template>
  <div>
    <div class='content py-12'>
      <div class='detail-wrapper'>
        <div class='detail-title'>
          <span>{{ article.title }}</span>
          <label class='time'>{{ article.updateTime.split(' ')[0] }}</label>
        </div>
        <div class='detail-content' v-html='article.content'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>

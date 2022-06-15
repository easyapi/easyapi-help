<template>
  <div>
    <Search background="1" :message="message"/>
    <div class="content mx-auto block mb-12 py-8">
      <div class="mb-12">共找到 {{ size }} 条 「任务」的搜索结果</div>
      <div class="con py-4" v-for="item in content" v-if="!item.video">
        <div class="text-2xl mb-8">{{ item.title }}</div>
        <div class="text-lg">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Index from './index'

export default Index
</script>

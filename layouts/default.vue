<template>
  <div>
    <Header v-if="!ifHide"/>
    <Aside v-if="ifShow"/>
    <nuxt v-if="!ifHide&&!ifShow"/>
    <Footer v-if="!ifHide"/>
  </div>
</template>
<script>
  import Header from '~/components/Header/index.vue'
  import Footer from '~/components/Footer/index.vue'
  import Aside from '~/components/Aside/index.vue'

  export default {
    components: {
      Header,
      Footer,
      Aside
    },
    data() {
      return {
        ifShow: false,
        ifHide: true
      }
    },
    mounted() {
      this.ifShow = this.$route.path.includes('category') || this.$route.path.includes('article')
      this.ifHide = !this.$route.path
    },
  };
</script>
<style>
</style>

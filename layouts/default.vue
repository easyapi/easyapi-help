<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer/index.vue'

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
</style>

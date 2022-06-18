<template>
  <el-dialog :title="title" :visible.sync="showVideo">
    <video class="w-full h-400" controls :src="video"></video>
  </el-dialog>
</template>

<script>
  export default {
    name: "Video",
    data() {
      return {
        showVideo: false,
        title: "",
        video: '',
      }
    },
    methods: {
      deletePro: function () {
        this.showVideo = false
      }
    }
  }
</script>

<style scoped>

</style>

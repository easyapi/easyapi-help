<template>
  <div class="pro-alert fixed w-full h-full top-0 left-0" v-if="showVideo">
    <div class="relative w-full h-full">
      <div class="pro-content absolute top-1/2 left-1/2">
        <div class="pro-title relative">
          2分钟
          <div class="pro-delete absolute cursor-pointer top-1/2" @click="deletePro">X</div>
        </div>
        <div class="pro-video p-4">
          <video class="w-full h-full" controls :src="video"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        showVideo: false
      }
    }
  }
</script>

<style scoped>

</style>

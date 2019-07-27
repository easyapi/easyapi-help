<template>
    <div>
        <div class="header" >
            <router-link to="/" class="header-logo">
                <img src="~assets/image/logo.png" />
                <span>帮助中心</span>
            </router-link >
            <div class="header-user">



                <a href="https://account.easyapi.com/login">登陆</a>



                <span class="header-l">|</span>



                <a href="https://account.easyapi.com/signup">注册</a>





            </div>
        </div>




        <nuxt/>
    </div>
</template>
<script>
    import NuxtLink from "../.nuxt/components/nuxt-link";

    export default {
        components: {NuxtLink}
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">




    .header
        width 100%
        height 72px
        background-color #18c1d6
        box-shadow 0 1px 2px rgba(0, 0, 0, 0.1)
        color #fff
        display flex
        align-items center
        justify-content space-between
        font-size 14px
        .header-logo
            cursor pointer
            margin-left 50px
            display flex
            justify-content center
            align-items center
            height 100%
            img
                width 170px
            span
                color #fff
                width 6em
        .header-user
            cursor pointer
            min-width 10em
            display flex
            justify-content center
            align-items center
            a
                color: #fff
            .header-l
                margin 0 1em



</style>

<template>
    <div>


        <div class="mon-content">
            <div class="mon-title">监控方式</div>
            <div class="mon-img">
                <div class="mon-img-li">
                    <img src="~assets/image/31.png" />
                    <p>自定义监控</p>
                </div>
                <div class="mon-img-li">
                    <img src="~assets/image/32.png" />
                    <p>代码监控</p>
                </div>
                <div class="mon-img-li">
                    <img src="~assets/image/33.png" />
                    <p>SDK监控</p>
                </div>
            </div>



            <div class="mon-con-title">1、SDK方式</div>
            <div class="mon-con-content">
                如果您觉得SDK监控集成比较复杂，那么我们提供了一套轻量级的代码监控方式，您只需要在您的Android与IOS代码中嵌入一端简单的代码即可。
            </div>




            <div class="mon-con-title">2、代码监控</div>
            <div class="mon-con-content">
                如果您觉得SDK监控集成比较复杂，那么我们提供了一套轻量级的代码监控方式，您只需要在您的Android与IOS代码中嵌入一端简单的代码即可。
                <p>
                    如图：
                </p>
            </div>



            <div class="mon-con-title">1、自定义监控</div>
            <div class="mon-con-content">
                如果您觉得SDK监控集成比较复杂，那么我们提供了一套轻量级的代码监控方式，您只需要在您的Android与IOS代码中嵌入一端简单的代码即可。
                <p>
                    如图：
                </p>
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        layout: 'header',
        head: {
            title: '帮助中心-API监控-监控方式',
            meta: [
                {
                    hid: '帮助中心-API监控-监控方式',
                    name: '帮助中心-API监控-监控方式',
                    content: '帮助中心-API监控-监控方式'
                }
            ]
        },
        data(){
            return {

            }
        }
    }

</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
    .mon-con-title
        font-size 16px
        font-weight 800px
        color #000
        width 600px
        min-height 10px
        margin-top 30px

    .mon-con-content
        margin-left 20px
        margin-top 15px
        width 600px
        min-height 10px
        line-height 25px


    .mon-content
        width 960px
        height 100%
        display block
        margin 0 auto
        padding 30px 0
        .mon-title
            width 100%
            font-size 16px
            padding-bottom 20px
            border-bottom 1px solid #c1c1c1
        .mon-img
            width 100%
            min-width 10px
            display flex
            margin-top 10px
            .mon-img-li
                flex 1
                display flex
                flex-direction column
                align-items center
                text-align center
                p
                    margin-top 10px
                img
                    width 250px
                    height 130px

</style>
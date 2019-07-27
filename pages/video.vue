<template>
    <div>

        <div class="product">
            <p class="product-title">产品介绍</p>
            <ul class="product-ul">
                <li v-for="(item, index) in videoList" :data-id="index" @click="openVideo(item.title,item.video)">
                    <p class="ul-img" >
                        <img :src="item.img"/>
                    </p>
                    <p class="ul-text">{{item.title}}</p>
                </li>
            </ul>
        </div>



        <div class="pro-alert" v-if="showVideo">
            <div class="" style="position: relative;height: 100%;width: 100%;">
                <div class="pro-content">
                    <div class="pro-title">
                        2分钟
                        <div class="pro-delete" @click="deletePro">X</div>
                    </div>
                    <div class="pro-video"><video controls :src="video"></video></div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Footer from '~/components/footer/footer'
    import axios from 'axios'

    export default {
        layout: 'header',
        head: {
            meta: [
                {
                    hid: '视频详情',
                    name: '视频详情',
                    content:  '视频详情',
                }
            ]
        },
        data () {
            return {
                videoList: [],
                title: '',
                video: '',
                showVideo: false
            }
        },
        created () {
            let _this = this
            axios.get(`https://api2.easyapi.com/api/articles?appKey=ja4fkcz35kfqywi7&appSecret=k1v8c637vr4swgr8&type=视频`).then((res) => {
                _this.videoList = res.data.content
                _this.title = res.data.content[0].title
                _this.video = res.data.content[0].video
            })
        },
        methods: {
            openVideo: function(title,video){
                this.title = title
                this.video = video
                this.showVideo = true
            },
            deletePro: function(){
                this.showVideo = false
            }
        },
        components: {
            Footer
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .pro-alert
        position fixed
        height 100%
        width 100%
        background-color  rgba(0,0,0,.3)
        left 0
        top 0
        .pro-content
            position absolute
            height 365px
            width  425px
            left 50%
            top 50%
            transform translate(-50%,-50%)
            background-color #ffffff
            box-shadow 0 0 0
            .pro-video
                padding 1rem
                height 310px
                video
                    background-color #000000
                    height 100%
                    width 100%
            .pro-title
                position relative
                border-bottom 1px solid grey
                padding  15px 15px
                font-size 14px
                .pro-delete
                    cursor pointer
                    position absolute
                    right 20px
                    top 50%
                    transform translate(0,-50%)

    .product
        display block
        width 960px
        min-height 10px
        margin 0 auto
        margin-top 30px
        margin-bottom 50px
        .product-title
            width 100%
            font-size 18px
            padding-bottom 10px
        .product-ul
            width 100%
            min-height 10px
            li
                cursor pointer
                display inline-block
                width 210px
                height 180px
                margin-right 30px
                margin-bottom 20px
                .ul-img
                    width 100%
                    height 150px
                    margin-bottom 10px
                    img
                        height 100%
                        width 100%
                .ul-text
                    text-align center

    .function
        display block
        width 960px
        min-height 10px
        margin 0 auto
        margin-top 30px
        margin-bottom 50px
        .function-title
            width 100%
            font-size 18px
            padding-bottom 10px
        .function-ul
            width 100%
            min-height 10px
            li
                display inline-block
                width 210px
                height 180px
                margin-right 30px
                margin-bottom 20px
                .ul-img
                    width 100%
                    height 150px
                    margin-bottom 10px
                    img
                        height 100%
                        width 100%
                .ul-text
                    text-align center
</style>
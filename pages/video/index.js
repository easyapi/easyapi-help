import './index.scss'
import {getArticleList} from '../../api/article'
import videoDialog from '@/components/Video'

export default {
  layout: 'header',
  components: {videoDialog},
  head: {
    meta: [
      {
        hid: '视频详情',
        name: '视频详情',
        content: '视频详情',
      }
    ]
  },
  data() {
    return {
      videoList: [],
      title: '',
      video: '',
      showVideo: false
    }
  },
  created() {
    let _this = this
    getArticleList({type: "视频"}, this).then((res) => {
      _this.videoList = res.data.content
      _this.title = res.data.content[0].title
      _this.video = res.data.content[0].video
    })
  },
  methods: {
    openVideo: function (title, video) {
      this.$refs.child.title = title
      this.$refs.child.video = video
      this.$refs.child.showVideo = true
    }
  }
}

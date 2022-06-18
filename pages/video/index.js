import './index.scss'
import {getArticleList} from '@/api/article'
import Video from '@/components/Video'

export default {
  layout: 'header',
  components: {Video},
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
    getArticleList({type: "视频"}, this).then((res) => {
      this.videoList = res.data.content
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

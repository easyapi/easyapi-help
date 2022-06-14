import './index.scss'
import Cookies from 'js-cookie'
import {mapGetters} from 'vuex'

export default {
  components: {},
  data() {
    return {
      authenticationToken: Cookies.get('authenticationToken'),
    }
  },
  mounted() {
    if (this.authenticationToken) {
      this.$store.dispatch('getUser')
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'notice') {
        window.open(`https://team.easyapi.com/notification`)
      } else if (command === 'edit') {
        window.open(`https://team.easyapi.com/user/edit`)
      } else if (command === 'quitLogin') {
        this.quitLogin()
      }
    },
    quitLogin() {
      this.$store.dispatch('logout')
      window.location.href = 'https://account.easyapi.com/login'
    },
  },
  computed: {
    ...mapGetters([
      'photo',
      'team'
    ])
  },
}

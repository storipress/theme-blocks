export default {
  data() {
    return {
      isMenuOpen: false,
      menuOpenHash: '#menu-open',
      menuCloseHash: '#menu-close',
    }
  },
  methods: {
    clearHash() {
      if (history.pushState) {
        history.pushState(null, null, '#')
      } else {
        location.hash = '#'
      }
    },
    handleMenuHash() {
      if (location.hash === this.menuOpenHash) {
        this.isMenuOpen = true
        this.clearHash()
      } else if (location.hash === this.menuCloseHash) {
        this.isMenuOpen = false
        this.clearHash()
      }
    },
  },
  mounted() {
    window.addEventListener('hashchange', this.handleMenuHash, false)
  },
  beforeDestroy() {
    window.addEventListener('hashchange', this.handleMenuHash, false)
    document.body.classList.remove('stop-scroll')
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue === true) {
        document.body.classList.add('stop-scroll')
      } else {
        document.body.classList.remove('stop-scroll')
      }
    },
  },
}

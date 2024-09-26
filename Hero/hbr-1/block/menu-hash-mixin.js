export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  beforeDestroy() {
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

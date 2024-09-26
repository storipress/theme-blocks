export default {
  data() {
    return {
      scrollPosition: 0, // initial value set in beforeMount
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    getScroll() {
      return Math.round(window.scrollY)
    },
  },
  beforeMount() {
    this.updateScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
  },
}

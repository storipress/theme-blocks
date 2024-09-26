module.exports = {
  postcssPlugin: 'remove-transition',
  Declaration: {
    transition(decl) {
      decl.remove()
    },
  },
}

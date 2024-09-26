const path = require('path')

module.exports = function () {}

module.exports.pitch = function (remainingRequest) {
  const [, filename] = remainingRequest.split('!')

  const name = path.basename(path.dirname(path.dirname(filename)))

  return `
  import Vue from 'vue'
  import block from ${JSON.stringify('-!' + remainingRequest)}
  import { inject } from 'data'
  import data from '../data'
  export default Vue.extend(block).extend({
    created() {
      inject(data)
    },

    mounted() {
      document.title = ${JSON.stringify(name)}
    },
  })
  `
}

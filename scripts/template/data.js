let data = {
  desks: [],
  articles: [],
  article: { authors: [], time: new Date() },
  logo: '',
  site: {},
  getData() {
    return data
  },
  onReset(cb) {
    if (cbs.some((f) => f === cb)) {
      return
    }
    cbs.push(cb)
  },
}
const cbs = []

export function inject(d) {
  for (const cb of cbs) {
    cb()
  }
  data = d
}

export default data

import {
  defineComponent as e,
  computed as t,
  onBeforeUnmount as n,
  getCurrentInstance as r,
  ref as i,
  onMounted as s,
} from 'vue-demi'
import a from 'vue'
import o from 'data'
import {
  noop as l,
  isObject as u,
  isEqual as c,
  last as d,
  omitBy as p,
  isNil as h,
  omit as f,
  stubObject as m,
  debounce as g,
} from 'lodash'
import { existsSync as y, readFileSync as v } from 'fs'
import { resolve as b, dirname as w, extname as k } from 'path'
import P from 'postcss'
import x from 'postcss-nested'
import { Portal as _, PortalTarget as S } from 'portal-vue'
import { Evt as E } from 'evt'
import C, { sticky as $ } from 'tippy.js'
const A = (e) => {
    if (!(e.target instanceof HTMLImageElement)) return !1
    const t = e.target
    t.style.removeProperty('opacity'),
      setTimeout(() => {
        t.style.removeProperty('will-change'),
          t.style.removeProperty('transition-duration'),
          t.classList.remove('transition-opacity')
      }, 500)
  },
  O = {
    bind: (e) => {
      if (!(e instanceof HTMLImageElement)) return !1
      ;(e.style.willChange = 'opacity'),
        (e.style.opacity = '0'),
        (e.style.transitionDuration = '0.3s'),
        e.classList.add('transition-opacity'),
        e.addEventListener('load', A, { once: !0 })
    },
  },
  j = ['180', '375', '750', '1200', '1600', '1920'],
  R = /^https:\/\/assets\.stori\.press\/.*/i,
  F = /^https:\/\/images\.unsplash\.com\/.*/i,
  T = /^(data:)([\w+/-]*)(;charset=[\w-]+|;base64){0,1},(.*)/gi,
  I = (e) => ('number' == typeof e ? `${e}` : 'string' == typeof e ? e.replace(/\D.*/g, '') : '')
var q = a.extend({
  directives: { imageFadeIn: O },
  props: {
    src: { type: String, required: !0 },
    alt: { type: String, default: '' },
    width: { type: [String, Number, Array], default: '' },
    height: { type: [String, Number], default: '' },
    sizes: { type: String, default: '95vw' },
    ratio: { type: String, default: '' },
    crop: { type: String, default: '' },
    cropPosition: { type: String, default: '' },
  },
  computed: {
    base() {
      return this.src.split('?')[0]
    },
    defaultQuery() {
      return this.src.split('?')[1] || ''
    },
    type() {
      const { src: e } = this
      return (
        (t = e), R.test(t) ? 'storipress' : ((e) => F.test(e))(e) ? 'unsplash' : ((e) => T.test(e))(e) ? 'data-uri' : ''
      )
      var t
    },
    computedWidthArray() {
      const { width: e = '' } = this
      if (e) {
        if ('number' == typeof e && e > 0) return [`${e}`]
        if ('string' == typeof e) {
          if (e.includes(',')) return e.split(',').map((e) => I(e))
          const t = I(e)
          if (t) return [t]
        }
        if (Array.isArray(e) && e.length > 0) return e.map((e) => I(`${e}`))
      }
      return j
    },
    computedHeight() {
      const { height: e = '' } = this
      if (e) {
        if ('number' == typeof e && e > 0) return `${e}`
        if ('string' == typeof e) return e.includes(',') ? I(e.split(',')[0]) : I(e)
      }
      return ''
    },
    imgRatio() {
      const { width: e, height: t, ratio: n, computedWidthArray: r = [], computedHeight: i = '' } = this
      if (n && `${n}`.includes(':')) return `${n}`
      const s = r?.[0] || ''
      return e && t && s && i ? `${s}:${i}` : ''
    },
    computedRatio() {
      const { imgRatio: e } = this
      if ('' === e) return null
      if (e.includes(':')) {
        const [t, n] = e.split(':'),
          r = Number.parseInt(t, 10)
        return Number.parseInt(n, 10) / r
      }
      const t = Number.parseInt(e, 10)
      return Number.isNaN(t) ? null : t
    },
    srcset() {
      const { src: e, type: t, computedWidthArray: n, arrangeUrlQueryStoripress: r, arrangeUrlQueryUnsplash: i } = this
      if (!e || !t || 'data-uri' === t) return ''
      const s = n.reduce((n, s) => {
        if (s)
          switch (t) {
            case 'storipress':
              return [...n, `${r(s)} ${s}w`]
            case 'unsplash':
              return [...n, `${i(s)} ${s}w`]
            default:
              return [...n, `${e} ${s}w`]
          }
        return n
      }, [])
      return s.join(',')
    },
    style() {
      const { width: e, height: t, computedRatio: n, computedWidthArray: r = [], computedHeight: i = '' } = this,
        s = r[0] || ''
      return null == n || t
        ? { ...(e ? { width: `${s}px` } : null), ...(t ? { height: `${i}px` } : null) }
        : { ...(e ? { width: `${s}px` } : null), aspectRatio: `1 / ${n}` }
    },
  },
  methods: {
    arrangeUrlQueryStoripress(e) {
      const { base: t, defaultQuery: n, crop: r, cropPosition: i, computedHeight: s, imgRatio: a } = this,
        o = new URLSearchParams(n)
      return (
        o.set('width', e),
        s ? o.set('height', s) : a && o.set('aspect_ratio', a),
        r && (o.set('crop', r), i && o.set('crop_gravity', i)),
        `${t}?${o.toString()}`
      )
    },
    arrangeUrlQueryUnsplash(e) {
      const { base: t, defaultQuery: n, cropPosition: r, computedHeight: i, imgRatio: s } = this,
        a = new URLSearchParams(n)
      return (
        a.set('w', e),
        i ? a.set('h', i) : s && (a.set('ar', s), a.set('fit', 'crop')),
        r && a.set('crop', r),
        `${t}?${a.toString()}`
      )
    },
  },
})
function D(e, t, n, r, i, s, a, o, l, u) {
  'boolean' != typeof a && ((l = o), (o = a), (a = !1))
  const c = 'function' == typeof n ? n.options : n
  let d
  if (
    (e &&
      e.render &&
      ((c.render = e.render), (c.staticRenderFns = e.staticRenderFns), (c._compiled = !0), i && (c.functional = !0)),
    r && (c._scopeId = r),
    s
      ? ((d = function (e) {
          ;(e =
            e ||
            (this.$vnode && this.$vnode.ssrContext) ||
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
            'undefined' == typeof __VUE_SSR_CONTEXT__ ||
            (e = __VUE_SSR_CONTEXT__),
            t && t.call(this, l(e)),
            e && e._registeredComponents && e._registeredComponents.add(s)
        }),
        (c._ssrRegister = d))
      : t &&
        (d = a
          ? function (e) {
              t.call(this, u(e, this.$root.$options.shadowRoot))
            }
          : function (e) {
              t.call(this, o(e))
            }),
    d)
  )
    if (c.functional) {
      const e = c.render
      c.render = function (t, n) {
        return d.call(n), e(t, n)
      }
    } else {
      const e = c.beforeCreate
      c.beforeCreate = e ? [].concat(e, d) : [d]
    }
  return n
}
const N = 'undefined' != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())
function L(e) {
  return (e, t) =>
    (function (e, t) {
      const n = N ? t.media || 'default' : e,
        r = M[n] || (M[n] = { ids: new Set(), styles: [] })
      if (!r.ids.has(e)) {
        r.ids.add(e)
        let n = t.source
        if (
          (t.map &&
            ((n += '\n/*# sourceURL=' + t.map.sources[0] + ' */'),
            (n +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) +
              ' */')),
          r.element ||
            ((r.element = document.createElement('style')),
            (r.element.type = 'text/css'),
            t.media && r.element.setAttribute('media', t.media),
            void 0 === H && (H = document.head || document.getElementsByTagName('head')[0]),
            H.appendChild(r.element)),
          'styleSheet' in r.element)
        )
          r.styles.push(n), (r.element.styleSheet.cssText = r.styles.filter(Boolean).join('\n'))
        else {
          const e = r.ids.size - 1,
            t = document.createTextNode(n),
            i = r.element.childNodes
          i[e] && r.element.removeChild(i[e]), i.length ? r.element.insertBefore(t, i[e]) : r.element.appendChild(t)
        }
      }
    })(e, t)
}
let H
const M = {}
var z = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)(
        'img',
        e._g(
          e._b(
            {
              directives: [{ name: 'image-fade-in', rawName: 'v-image-fade-in' }],
              staticClass: 'responsive-image',
              style: e.style,
              attrs: { src: e.src, srcset: e.srcset, sizes: e.sizes, alt: e.alt, loading: 'lazy' },
            },
            'img',
            e.$attrs,
            !1
          ),
          e.$listeners
        )
      )
    },
    staticRenderFns: [],
  },
  function (e) {
    e &&
      e('data-v-1a05aa0c_0', { source: '.responsive-image[data-v-1a05aa0c]{width:100%}', map: void 0, media: void 0 })
  },
  q,
  'data-v-1a05aa0c',
  false,
  undefined,
  !1,
  L,
  void 0,
  void 0
)
var V = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n(
        'div',
        { staticClass: 'relative' },
        [
          n('ResponsiveImage', {
            ref: 'image',
            staticClass: 'max-w-none transition-position inset-0 object-cover w-auto h-auto min-w-full min-h-full',
            attrs: { src: e.src, sizes: e.sizes, alt: e.alt },
          }),
        ],
        1
      )
    },
    staticRenderFns: [],
  },
  undefined,
  e({
    components: { ResponsiveImage: z },
    props: { article: { type: Object, required: !0 }, sizes: { type: String } },
    setup: (e) => ({ src: t(() => e.article.headline), alt: t(() => e.article.headlineAlt) }),
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var B = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('input', e._g({ attrs: { type: 'email', name: 'EMAIL' } }, e.$listeners))
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({}),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var W = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)(
        'form',
        {
          on: {
            submit: function (e) {
              e.preventDefault()
            },
          },
        },
        [e._t('default', null, { result: e.result, message: e.message, raw: e.raw, clear: e.clear })],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ data: () => ({ result: '', message: '', raw: '', clear: l }), methods: { submit: l } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
function U(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function G() {
  return (
    (G =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }),
    G.apply(this, arguments)
  )
}
var Y = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
  K = '[\\s|\\(]+(' + Y + ')[,|\\s]+(' + Y + ')[,|\\s]+(' + Y + ')\\s*\\)?',
  J = '[\\s|\\(]+(' + Y + ')[,|\\s]+(' + Y + ')[,|\\s]+(' + Y + ')[,|\\s]+(' + Y + ')\\s*\\)?',
  Q = new RegExp('rgb' + K),
  X = new RegExp('rgba' + J),
  Z = new RegExp('hsl' + K),
  ee = new RegExp('hsla' + J),
  te = new RegExp('^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$'),
  ne = new RegExp('^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$'),
  re = new RegExp('^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$'),
  ie = new RegExp('^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$'),
  se = Math.log,
  ae = Math.round,
  oe = Math.floor
function le(e, t, n) {
  return Math.min(Math.max(e, t), n)
}
function ue(e, t) {
  var n = e.indexOf('%') > -1,
    r = parseFloat(e)
  return n ? (t / 100) * r : r
}
function ce(e) {
  return parseInt(e, 16)
}
function de(e) {
  return e.toString(16).padStart(2, '0')
}
var pe = (function () {
  function e(e, t) {
    ;(this.$ = { h: 0, s: 0, v: 0, a: 1 }), e && this.set(e), (this.onChange = t), (this.initialValue = G({}, this.$))
  }
  var t,
    n,
    r,
    i = e.prototype
  return (
    (i.set = function (t) {
      if ('string' == typeof t)
        /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)
          ? (this.hexString = t)
          : /^rgba?/.test(t)
            ? (this.rgbString = t)
            : /^hsla?/.test(t) && (this.hslString = t)
      else {
        if ('object' != typeof t) throw new Error('Invalid color value')
        t instanceof e
          ? (this.hsva = t.hsva)
          : 'r' in t && 'g' in t && 'b' in t
            ? (this.rgb = t)
            : 'h' in t && 's' in t && 'v' in t
              ? (this.hsv = t)
              : 'h' in t && 's' in t && 'l' in t
                ? (this.hsl = t)
                : 'kelvin' in t && (this.kelvin = t.kelvin)
      }
    }),
    (i.setChannel = function (e, t, n) {
      var r
      this[e] = G({}, this[e], (((r = {})[t] = n), r))
    }),
    (i.reset = function () {
      this.hsva = this.initialValue
    }),
    (i.clone = function () {
      return new e(this)
    }),
    (i.unbind = function () {
      this.onChange = void 0
    }),
    (e.hsvToRgb = function (e) {
      var t = e.h / 60,
        n = e.s / 100,
        r = e.v / 100,
        i = oe(t),
        s = t - i,
        a = r * (1 - n),
        o = r * (1 - s * n),
        l = r * (1 - (1 - s) * n),
        u = i % 6,
        c = [l, r, r, o, a, a][u],
        d = [a, a, l, r, r, o][u]
      return { r: le(255 * [r, o, a, a, l, r][u], 0, 255), g: le(255 * c, 0, 255), b: le(255 * d, 0, 255) }
    }),
    (e.rgbToHsv = function (e) {
      var t = e.r / 255,
        n = e.g / 255,
        r = e.b / 255,
        i = Math.max(t, n, r),
        s = Math.min(t, n, r),
        a = i - s,
        o = 0,
        l = i,
        u = 0 === i ? 0 : a / i
      switch (i) {
        case s:
          o = 0
          break
        case t:
          o = (n - r) / a + (n < r ? 6 : 0)
          break
        case n:
          o = (r - t) / a + 2
          break
        case r:
          o = (t - n) / a + 4
      }
      return { h: (60 * o) % 360, s: le(100 * u, 0, 100), v: le(100 * l, 0, 100) }
    }),
    (e.hsvToHsl = function (e) {
      var t = e.s / 100,
        n = e.v / 100,
        r = (2 - t) * n,
        i = r <= 1 ? r : 2 - r,
        s = i < 1e-9 ? 0 : (t * n) / i
      return { h: e.h, s: le(100 * s, 0, 100), l: le(50 * r, 0, 100) }
    }),
    (e.hslToHsv = function (e) {
      var t = 2 * e.l,
        n = (e.s * (t <= 100 ? t : 200 - t)) / 100,
        r = t + n < 1e-9 ? 0 : (2 * n) / (t + n)
      return { h: e.h, s: le(100 * r, 0, 100), v: le((t + n) / 2, 0, 100) }
    }),
    (e.kelvinToRgb = function (e) {
      var t,
        n,
        r,
        i = e / 100
      return (
        i < 66
          ? ((t = 255),
            (n = -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * se(n)),
            (r = i < 20 ? 0 : 0.8274096064007395 * (r = i - 10) - 254.76935184120902 + 115.67994401066147 * se(r)))
          : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * se(t)),
            (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * se(n)),
            (r = 255)),
        { r: le(oe(t), 0, 255), g: le(oe(n), 0, 255), b: le(oe(r), 0, 255) }
      )
    }),
    (e.rgbToKelvin = function (t) {
      for (var n, r = t.r, i = t.b, s = 2e3, a = 4e4; a - s > 0.4; ) {
        n = 0.5 * (a + s)
        var o = e.kelvinToRgb(n)
        o.b / o.r >= i / r ? (a = n) : (s = n)
      }
      return n
    }),
    (t = e),
    (n = [
      {
        key: 'hsv',
        get: function () {
          var e = this.$
          return { h: e.h, s: e.s, v: e.v }
        },
        set: function (e) {
          var t = this.$
          if (((e = G({}, t, e)), this.onChange)) {
            var n = { h: !1, v: !1, s: !1, a: !1 }
            for (var r in t) n[r] = e[r] != t[r]
            ;(this.$ = e), (n.h || n.s || n.v || n.a) && this.onChange(this, n)
          } else this.$ = e
        },
      },
      {
        key: 'hsva',
        get: function () {
          return G({}, this.$)
        },
        set: function (e) {
          this.hsv = e
        },
      },
      {
        key: 'hue',
        get: function () {
          return this.$.h
        },
        set: function (e) {
          this.hsv = { h: e }
        },
      },
      {
        key: 'saturation',
        get: function () {
          return this.$.s
        },
        set: function (e) {
          this.hsv = { s: e }
        },
      },
      {
        key: 'value',
        get: function () {
          return this.$.v
        },
        set: function (e) {
          this.hsv = { v: e }
        },
      },
      {
        key: 'alpha',
        get: function () {
          return this.$.a
        },
        set: function (e) {
          this.hsv = G({}, this.hsv, { a: e })
        },
      },
      {
        key: 'kelvin',
        get: function () {
          return e.rgbToKelvin(this.rgb)
        },
        set: function (t) {
          this.rgb = e.kelvinToRgb(t)
        },
      },
      {
        key: 'red',
        get: function () {
          return this.rgb.r
        },
        set: function (e) {
          this.rgb = G({}, this.rgb, { r: e })
        },
      },
      {
        key: 'green',
        get: function () {
          return this.rgb.g
        },
        set: function (e) {
          this.rgb = G({}, this.rgb, { g: e })
        },
      },
      {
        key: 'blue',
        get: function () {
          return this.rgb.b
        },
        set: function (e) {
          this.rgb = G({}, this.rgb, { b: e })
        },
      },
      {
        key: 'rgb',
        get: function () {
          var t = e.hsvToRgb(this.$),
            n = t.r,
            r = t.g,
            i = t.b
          return { r: ae(n), g: ae(r), b: ae(i) }
        },
        set: function (t) {
          this.hsv = G({}, e.rgbToHsv(t), { a: void 0 === t.a ? 1 : t.a })
        },
      },
      {
        key: 'rgba',
        get: function () {
          return G({}, this.rgb, { a: this.alpha })
        },
        set: function (e) {
          this.rgb = e
        },
      },
      {
        key: 'hsl',
        get: function () {
          var t = e.hsvToHsl(this.$),
            n = t.h,
            r = t.s,
            i = t.l
          return { h: ae(n), s: ae(r), l: ae(i) }
        },
        set: function (t) {
          this.hsv = G({}, e.hslToHsv(t), { a: void 0 === t.a ? 1 : t.a })
        },
      },
      {
        key: 'hsla',
        get: function () {
          return G({}, this.hsl, { a: this.alpha })
        },
        set: function (e) {
          this.hsl = e
        },
      },
      {
        key: 'rgbString',
        get: function () {
          var e = this.rgb
          return 'rgb(' + e.r + ', ' + e.g + ', ' + e.b + ')'
        },
        set: function (e) {
          var t,
            n,
            r,
            i,
            s = 1
          if (
            ((t = Q.exec(e))
              ? ((n = ue(t[1], 255)), (r = ue(t[2], 255)), (i = ue(t[3], 255)))
              : (t = X.exec(e)) && ((n = ue(t[1], 255)), (r = ue(t[2], 255)), (i = ue(t[3], 255)), (s = ue(t[4], 1))),
            !t)
          )
            throw new Error('Invalid rgb string')
          this.rgb = { r: n, g: r, b: i, a: s }
        },
      },
      {
        key: 'rgbaString',
        get: function () {
          var e = this.rgba
          return 'rgba(' + e.r + ', ' + e.g + ', ' + e.b + ', ' + e.a + ')'
        },
        set: function (e) {
          this.rgbString = e
        },
      },
      {
        key: 'hexString',
        get: function () {
          var e = this.rgb
          return '#' + de(e.r) + de(e.g) + de(e.b)
        },
        set: function (e) {
          var t,
            n,
            r,
            i,
            s = 255
          if (
            ((t = te.exec(e))
              ? ((n = 17 * ce(t[1])), (r = 17 * ce(t[2])), (i = 17 * ce(t[3])))
              : (t = ne.exec(e))
                ? ((n = 17 * ce(t[1])), (r = 17 * ce(t[2])), (i = 17 * ce(t[3])), (s = 17 * ce(t[4])))
                : (t = re.exec(e))
                  ? ((n = ce(t[1])), (r = ce(t[2])), (i = ce(t[3])))
                  : (t = ie.exec(e)) && ((n = ce(t[1])), (r = ce(t[2])), (i = ce(t[3])), (s = ce(t[4]))),
            !t)
          )
            throw new Error('Invalid hex string')
          this.rgb = { r: n, g: r, b: i, a: s / 255 }
        },
      },
      {
        key: 'hex8String',
        get: function () {
          var e = this.rgba
          return '#' + de(e.r) + de(e.g) + de(e.b) + de(oe(255 * e.a))
        },
        set: function (e) {
          this.hexString = e
        },
      },
      {
        key: 'hslString',
        get: function () {
          var e = this.hsl
          return 'hsl(' + e.h + ', ' + e.s + '%, ' + e.l + '%)'
        },
        set: function (e) {
          var t,
            n,
            r,
            i,
            s = 1
          if (
            ((t = Z.exec(e))
              ? ((n = ue(t[1], 360)), (r = ue(t[2], 100)), (i = ue(t[3], 100)))
              : (t = ee.exec(e)) && ((n = ue(t[1], 360)), (r = ue(t[2], 100)), (i = ue(t[3], 100)), (s = ue(t[4], 1))),
            !t)
          )
            throw new Error('Invalid hsl string')
          this.hsl = { h: n, s: r, l: i, a: s }
        },
      },
      {
        key: 'hslaString',
        get: function () {
          var e = this.hsla
          return 'hsla(' + e.h + ', ' + e.s + '%, ' + e.l + '%, ' + e.a + ')'
        },
        set: function (e) {
          this.hslString = e
        },
      },
    ]),
    n && U(t.prototype, n),
    r && U(t, r),
    e
  )
})()
var he = e({
  props: {
    type: { type: String, default: 'input' },
    inputClass: { type: String, default: '' },
    placeholder: { type: String },
    value: { type: String },
  },
  setup(e, a) {
    let { emit: o } = a
    const l = r(),
      u = i(),
      c = i(),
      d = i('caret-black'),
      p = i('placeholder-black/25'),
      h = t(() => {
        const { value: t } = e
        return t && '' !== t ? (t.endsWith('\n') ? t + ' ' : t) : ' '
      })
    return (
      s(() => {
        !(function (e) {
          const t = window.matchMedia('(min-width: 375px)'),
            r = window.matchMedia('(min-width: 768px)'),
            i = window.matchMedia('(min-width: 1070px)')
          t.addEventListener('change', e),
            r.addEventListener('change', e),
            i.addEventListener('change', e),
            e(),
            n(() => {
              t.removeEventListener('change', e), r.removeEventListener('change', e), i.removeEventListener('change', e)
            })
        })(() => {
          const e = (function (e) {
            const { r: t, g: n, b: r, a: i = 1 } = new pe(e).rgba
            return 0 === i ? 'light' : Math.round((299 * t + 587 * n + 114 * r) / 1e3) <= 100 ? 'dark' : 'light'
          })(
            window.getComputedStyle(
              (function (e) {
                for (; e.parentElement; ) {
                  const t = window.getComputedStyle(e),
                    { alpha: n } = new pe(t.backgroundColor)
                  if (n > 0.2) return e
                  e = e.parentElement
                }
                return e
              })(c.value)
            ).backgroundColor
          )
          ;(d.value = 'dark' === e ? 'caret-white' : 'caret-black'),
            (p.value = 'dark' === e ? 'placeholder-white/45' : 'placeholder-black/25')
        })
      }),
      {
        input: u,
        resizer: c,
        placeholderStyle: t(() => (e.value ? {} : { minWidth: `${e.placeholder?.length ?? 8}ch` })),
        caretClass: d,
        displayValue: h,
        placeholderClass: t(() => (e.inputClass ? e.inputClass : p.value)),
        listeners: t(() => {
          const { input: e, ...t } = l.proxy.$listeners
          return t
        }),
        focus() {
          u.value.focus()
        },
        handleInput(e) {
          const t = 'string' == typeof e ? e : e.target.value
          o('input', t)
        },
      }
    )
  },
})
var fe = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('div', { staticClass: 'relative', class: e.$style.inherit }, [
        n('div', {
          ref: 'resizer',
          class: [e.$style.resizer, 'textarea' === e.type && 'whitespace-pre-wrap'],
          style: e.placeholderStyle,
          domProps: { textContent: e._s(e.displayValue) },
        }),
        e._v(' '),
        'textarea' === e.type
          ? n(
              'textarea',
              e._g(
                {
                  ref: 'input',
                  class: [e.$style.input, e.caretClass, e.placeholderClass],
                  attrs: { placeholder: e.placeholder },
                  domProps: { value: e.value },
                  on: { input: e.handleInput },
                },
                e.listeners
              )
            )
          : n(
              'input',
              e._g(
                {
                  ref: 'input',
                  class: [e.$style.input, e.caretClass, e.placeholderClass],
                  attrs: { placeholder: e.placeholder },
                  domProps: { value: e.value },
                  on: { input: e.handleInput },
                },
                e.listeners
              )
            ),
      ])
    },
    staticRenderFns: [],
  },
  function (e) {
    e &&
      (e('data-v-453bbbb7_0', {
        source:
          '.common-inherit-C__Z,.common-input-2YJ2,.common-resizer-29f0{font-family:inherit;font-style:inherit;font-weight:inherit;text-align:inherit;text-transform:inherit;letter-spacing:inherit;line-height:inherit}.common-resizer-29f0{min-width:1em;min-height:1em;line-height:inherit;padding-bottom:3px;height:max-content}.common-input-2YJ2{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;resize:none;overflow-y:hidden;overflow-wrap:break-word;background-color:transparent;color:transparent}.common-input-2YJ2:focus{outline:2px solid transparent;outline-offset:2px}',
        map: void 0,
        media: void 0,
      }),
      Object.defineProperty(this, '$style', {
        value: { input: 'common-input-2YJ2', resizer: 'common-resizer-29f0', inherit: 'common-inherit-C__Z' },
      }))
  },
  he,
  undefined,
  false,
  undefined,
  !1,
  L,
  void 0,
  void 0
)
var me = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)(
        'a',
        {
          on: {
            click: function (e) {
              e.preventDefault()
            },
          },
        },
        [e._t('default')],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ props: { href: { type: String } } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
const ge = '[@storipress/block]'
function ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  console.error(`[@storipress/block] ${e}`, ...n)
}
function ve(e) {
  console.warn(`[@storipress/block] ${e}`)
}
function be(e, t) {
  if (!e) throw new Error(`[@storipress/block] Invariant Violation: ${t}`)
}
function we(e, t) {
  return e.getData?.()[t] ?? e[t]
}
function ke() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
  return e.map((e, t) => ('string' == typeof e ? { id: `${t}`, name: e, url: '#' } : { id: `${t}`, ...e }))
}
var Pe = { exports: {} }
;(Pe.exports = $e), (Pe.exports.default = $e)
const xe = {
    authors: { items: { $ref: '#/definitions/Author' }, type: 'array' },
    blurb: { type: 'string' },
    desk: { type: 'string' },
    headline: { type: 'string' },
    headlineAlt: { type: 'string' },
    headlineCaption: { type: 'string' },
    time: {},
    title: { type: 'string' },
    url: { type: 'string' },
  },
  _e = Object.prototype.hasOwnProperty
function Se(e, { instancePath: t = '', parentData: n, parentDataProperty: r, rootData: i = e } = {}) {
  let s = null,
    a = 0
  if (e && 'object' == typeof e && !Array.isArray(e)) {
    if (void 0 === e.authors) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'authors' },
        message: "must have required property 'authors'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.blurb) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'blurb' },
        message: "must have required property 'blurb'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.desk) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'desk' },
        message: "must have required property 'desk'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.headline) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'headline' },
        message: "must have required property 'headline'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.time) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'time' },
        message: "must have required property 'time'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.title) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'title' },
        message: "must have required property 'title'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.url) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'url' },
        message: "must have required property 'url'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    for (const n in e)
      if (!_e.call(xe, n)) {
        const e = {
          instancePath: t,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: n },
          message: 'must NOT have additional properties',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    if (void 0 !== e.authors) {
      let n = e.authors
      if (Array.isArray(n)) {
        const e = n.length
        for (let r = 0; r < e; r++) {
          let e = n[r]
          if (e && 'object' == typeof e && !Array.isArray(e)) {
            if (void 0 === e.name) {
              const e = {
                instancePath: t + '/authors/' + r,
                schemaPath: '#/definitions/Author/required',
                keyword: 'required',
                params: { missingProperty: 'name' },
                message: "must have required property 'name'",
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            if (void 0 === e.url) {
              const e = {
                instancePath: t + '/authors/' + r,
                schemaPath: '#/definitions/Author/required',
                keyword: 'required',
                params: { missingProperty: 'url' },
                message: "must have required property 'url'",
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            for (const n in e)
              if ('name' !== n && 'url' !== n) {
                const e = {
                  instancePath: t + '/authors/' + r,
                  schemaPath: '#/definitions/Author/additionalProperties',
                  keyword: 'additionalProperties',
                  params: { additionalProperty: n },
                  message: 'must NOT have additional properties',
                }
                null === s ? (s = [e]) : s.push(e), a++
              }
            if (void 0 !== e.name && 'string' != typeof e.name) {
              const e = {
                instancePath: t + '/authors/' + r + '/name',
                schemaPath: '#/definitions/Author/properties/name/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            if (void 0 !== e.url && 'string' != typeof e.url) {
              const e = {
                instancePath: t + '/authors/' + r + '/url',
                schemaPath: '#/definitions/Author/properties/url/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
          } else {
            const e = {
              instancePath: t + '/authors/' + r,
              schemaPath: '#/definitions/Author/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            }
            null === s ? (s = [e]) : s.push(e), a++
          }
        }
      } else {
        const e = {
          instancePath: t + '/authors',
          schemaPath: '#/properties/authors/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.blurb && 'string' != typeof e.blurb) {
      const e = {
        instancePath: t + '/blurb',
        schemaPath: '#/properties/blurb/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.desk && 'string' != typeof e.desk) {
      const e = {
        instancePath: t + '/desk',
        schemaPath: '#/properties/desk/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headline && 'string' != typeof e.headline) {
      const e = {
        instancePath: t + '/headline',
        schemaPath: '#/properties/headline/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headlineAlt && 'string' != typeof e.headlineAlt) {
      const e = {
        instancePath: t + '/headlineAlt',
        schemaPath: '#/properties/headlineAlt/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headlineCaption && 'string' != typeof e.headlineCaption) {
      const e = {
        instancePath: t + '/headlineCaption',
        schemaPath: '#/properties/headlineCaption/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.title && 'string' != typeof e.title) {
      const e = {
        instancePath: t + '/title',
        schemaPath: '#/properties/title/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.url && 'string' != typeof e.url) {
      const e = {
        instancePath: t + '/url',
        schemaPath: '#/properties/url/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
  } else {
    const e = {
      instancePath: t,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    null === s ? (s = [e]) : s.push(e), a++
  }
  return (Se.errors = s), 0 === a
}
function Ee(e, { instancePath: t = '', parentData: n, parentDataProperty: r, rootData: i = e } = {}) {
  let s = null,
    a = 0
  if (e && 'object' == typeof e && !Array.isArray(e)) {
    if (void 0 === e.authors) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'authors' },
        message: "must have required property 'authors'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.blurb) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'blurb' },
        message: "must have required property 'blurb'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.headline) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'headline' },
        message: "must have required property 'headline'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.time) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'time' },
        message: "must have required property 'time'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.title) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'title' },
        message: "must have required property 'title'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.url) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'url' },
        message: "must have required property 'url'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    for (const n in e)
      if (
        'authors' !== n &&
        'blurb' !== n &&
        'headline' !== n &&
        'headlineAlt' !== n &&
        'headlineCaption' !== n &&
        'time' !== n &&
        'title' !== n &&
        'url' !== n
      ) {
        const e = {
          instancePath: t,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: n },
          message: 'must NOT have additional properties',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    if (void 0 !== e.authors) {
      let n = e.authors
      if (Array.isArray(n)) {
        const e = n.length
        for (let r = 0; r < e; r++) {
          let e = n[r]
          if (e && 'object' == typeof e && !Array.isArray(e)) {
            if (void 0 === e.name) {
              const e = {
                instancePath: t + '/authors/' + r,
                schemaPath: '#/definitions/Author/required',
                keyword: 'required',
                params: { missingProperty: 'name' },
                message: "must have required property 'name'",
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            if (void 0 === e.url) {
              const e = {
                instancePath: t + '/authors/' + r,
                schemaPath: '#/definitions/Author/required',
                keyword: 'required',
                params: { missingProperty: 'url' },
                message: "must have required property 'url'",
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            for (const n in e)
              if ('name' !== n && 'url' !== n) {
                const e = {
                  instancePath: t + '/authors/' + r,
                  schemaPath: '#/definitions/Author/additionalProperties',
                  keyword: 'additionalProperties',
                  params: { additionalProperty: n },
                  message: 'must NOT have additional properties',
                }
                null === s ? (s = [e]) : s.push(e), a++
              }
            if (void 0 !== e.name && 'string' != typeof e.name) {
              const e = {
                instancePath: t + '/authors/' + r + '/name',
                schemaPath: '#/definitions/Author/properties/name/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
            if (void 0 !== e.url && 'string' != typeof e.url) {
              const e = {
                instancePath: t + '/authors/' + r + '/url',
                schemaPath: '#/definitions/Author/properties/url/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              }
              null === s ? (s = [e]) : s.push(e), a++
            }
          } else {
            const e = {
              instancePath: t + '/authors/' + r,
              schemaPath: '#/definitions/Author/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            }
            null === s ? (s = [e]) : s.push(e), a++
          }
        }
      } else {
        const e = {
          instancePath: t + '/authors',
          schemaPath: '#/properties/authors/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.blurb && 'string' != typeof e.blurb) {
      const e = {
        instancePath: t + '/blurb',
        schemaPath: '#/properties/blurb/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headline && 'string' != typeof e.headline) {
      const e = {
        instancePath: t + '/headline',
        schemaPath: '#/properties/headline/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headlineAlt && 'string' != typeof e.headlineAlt) {
      const e = {
        instancePath: t + '/headlineAlt',
        schemaPath: '#/properties/headlineAlt/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.headlineCaption && 'string' != typeof e.headlineCaption) {
      const e = {
        instancePath: t + '/headlineCaption',
        schemaPath: '#/properties/headlineCaption/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.title && 'string' != typeof e.title) {
      const e = {
        instancePath: t + '/title',
        schemaPath: '#/properties/title/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.url && 'string' != typeof e.url) {
      const e = {
        instancePath: t + '/url',
        schemaPath: '#/properties/url/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
  } else {
    const e = {
      instancePath: t,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    null === s ? (s = [e]) : s.push(e), a++
  }
  return (Ee.errors = s), 0 === a
}
function Ce(e, { instancePath: t = '', parentData: n, parentDataProperty: r, rootData: i = e } = {}) {
  let s = null,
    a = 0
  if (e && 'object' == typeof e && !Array.isArray(e))
    for (const n in e) {
      let r = e[n]
      if (Array.isArray(r)) {
        const e = r.length
        for (let o = 0; o < e; o++)
          Ee(r[o], {
            instancePath: t + '/' + n.replace(/~/g, '~0').replace(/\//g, '~1') + '/' + o,
            parentData: r,
            parentDataProperty: o,
            rootData: i,
          }) || ((s = null === s ? Ee.errors : s.concat(Ee.errors)), (a = s.length))
      } else {
        const e = {
          instancePath: t + '/' + n.replace(/~/g, '~0').replace(/\//g, '~1'),
          schemaPath: '#/additionalProperties/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
  else {
    const e = {
      instancePath: t,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    null === s ? (s = [e]) : s.push(e), a++
  }
  return (Ce.errors = s), 0 === a
}
function $e(e, { instancePath: t = '', parentData: n, parentDataProperty: r, rootData: i = e } = {}) {
  let s = null,
    a = 0
  if (e && 'object' == typeof e && !Array.isArray(e)) {
    if (void 0 === e.articles) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'articles' },
        message: "must have required property 'articles'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 === e.desks) {
      const e = {
        instancePath: t,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'desks' },
        message: "must have required property 'desks'",
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    for (const n in e)
      if (
        'article' !== n &&
        'articles' !== n &&
        'desks' !== n &&
        'logo' !== n &&
        'pages' !== n &&
        'site' !== n &&
        'spacing' !== n
      ) {
        const e = {
          instancePath: t,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: n },
          message: 'must NOT have additional properties',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    if (
      (void 0 !== e.article &&
        (Se(e.article, { instancePath: t + '/article', parentData: e, parentDataProperty: 'article', rootData: i }) ||
          ((s = null === s ? Se.errors : s.concat(Se.errors)), (a = s.length))),
      void 0 !== e.articles)
    ) {
      let n = e.articles
      const r = a
      let l = !1
      const u = a
      Ce(n, { instancePath: t + '/articles', parentData: e, parentDataProperty: 'articles', rootData: i }) ||
        ((s = null === s ? Ce.errors : s.concat(Ce.errors)), (a = s.length))
      var o = u === a
      if (((l = l || o), !l)) {
        const e = a
        if (Array.isArray(n)) {
          const e = n.length
          for (let r = 0; r < e; r++)
            Ee(n[r], { instancePath: t + '/articles/' + r, parentData: n, parentDataProperty: r, rootData: i }) ||
              ((s = null === s ? Ee.errors : s.concat(Ee.errors)), (a = s.length))
        } else {
          const e = {
            instancePath: t + '/articles',
            schemaPath: '#/properties/articles/anyOf/1/type',
            keyword: 'type',
            params: { type: 'array' },
            message: 'must be array',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        o = e === a
        l = l || o
      }
      if (l) (a = r), null !== s && (r ? (s.length = r) : (s = null))
      else {
        const e = {
          instancePath: t + '/articles',
          schemaPath: '#/properties/articles/anyOf',
          keyword: 'anyOf',
          params: {},
          message: 'must match a schema in anyOf',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.desks) {
      let n = e.desks
      if (Array.isArray(n)) {
        const e = n.length
        for (let r = 0; r < e; r++)
          if ('string' != typeof n[r]) {
            const e = {
              instancePath: t + '/desks/' + r,
              schemaPath: '#/properties/desks/items/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            null === s ? (s = [e]) : s.push(e), a++
          }
      } else {
        const e = {
          instancePath: t + '/desks',
          schemaPath: '#/properties/desks/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.logo && 'string' != typeof e.logo) {
      const e = {
        instancePath: t + '/logo',
        schemaPath: '#/properties/logo/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      }
      null === s ? (s = [e]) : s.push(e), a++
    }
    if (void 0 !== e.pages) {
      let n = e.pages
      if (Array.isArray(n)) {
        const e = n.length
        for (let r = 0; r < e; r++)
          if ('string' != typeof n[r]) {
            const e = {
              instancePath: t + '/pages/' + r,
              schemaPath: '#/properties/pages/items/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            null === s ? (s = [e]) : s.push(e), a++
          }
      } else {
        const e = {
          instancePath: t + '/pages',
          schemaPath: '#/properties/pages/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.site) {
      let n = e.site
      if (n && 'object' == typeof n && !Array.isArray(n)) {
        if (void 0 === n.name) {
          const e = {
            instancePath: t + '/site',
            schemaPath: '#/definitions/Site/required',
            keyword: 'required',
            params: { missingProperty: 'name' },
            message: "must have required property 'name'",
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        for (const e in n)
          if ('description' !== e && 'facebook' !== e && 'name' !== e && 'twitter' !== e) {
            const n = {
              instancePath: t + '/site',
              schemaPath: '#/definitions/Site/additionalProperties',
              keyword: 'additionalProperties',
              params: { additionalProperty: e },
              message: 'must NOT have additional properties',
            }
            null === s ? (s = [n]) : s.push(n), a++
          }
        if (void 0 !== n.description && 'string' != typeof n.description) {
          const e = {
            instancePath: t + '/site/description',
            schemaPath: '#/definitions/Site/properties/description/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        if (void 0 !== n.facebook && 'string' != typeof n.facebook) {
          const e = {
            instancePath: t + '/site/facebook',
            schemaPath: '#/definitions/Site/properties/facebook/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        if (void 0 !== n.name && 'string' != typeof n.name) {
          const e = {
            instancePath: t + '/site/name',
            schemaPath: '#/definitions/Site/properties/name/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        if (void 0 !== n.twitter && 'string' != typeof n.twitter) {
          const e = {
            instancePath: t + '/site/twitter',
            schemaPath: '#/definitions/Site/properties/twitter/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
      } else {
        const e = {
          instancePath: t + '/site',
          schemaPath: '#/definitions/Site/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
    if (void 0 !== e.spacing) {
      let n = e.spacing
      const r = a
      let i = !1
      const o = a
      if (n && 'object' == typeof n && !Array.isArray(n)) {
        for (const e in n)
          if ('lg' !== e && 'md' !== e && 'xs' !== e) {
            const n = {
              instancePath: t + '/spacing',
              schemaPath: '#/properties/spacing/anyOf/0/additionalProperties',
              keyword: 'additionalProperties',
              params: { additionalProperty: e },
              message: 'must NOT have additional properties',
            }
            null === s ? (s = [n]) : s.push(n), a++
          }
        if (void 0 !== n.lg && 'string' != typeof n.lg) {
          const e = {
            instancePath: t + '/spacing/lg',
            schemaPath: '#/properties/spacing/anyOf/0/properties/lg/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        if (void 0 !== n.md && 'string' != typeof n.md) {
          const e = {
            instancePath: t + '/spacing/md',
            schemaPath: '#/properties/spacing/anyOf/0/properties/md/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        if (void 0 !== n.xs && 'string' != typeof n.xs) {
          const e = {
            instancePath: t + '/spacing/xs',
            schemaPath: '#/properties/spacing/anyOf/0/properties/xs/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
      } else {
        const e = {
          instancePath: t + '/spacing',
          schemaPath: '#/properties/spacing/anyOf/0/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
      var l = o === a
      if (((i = i || l), !i)) {
        const e = a
        if ('string' != typeof n) {
          const e = {
            instancePath: t + '/spacing',
            schemaPath: '#/properties/spacing/anyOf/1/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          }
          null === s ? (s = [e]) : s.push(e), a++
        }
        l = e === a
        i = i || l
      }
      if (i) (a = r), null !== s && (r ? (s.length = r) : (s = null))
      else {
        const e = {
          instancePath: t + '/spacing',
          schemaPath: '#/properties/spacing/anyOf',
          keyword: 'anyOf',
          params: {},
          message: 'must match a schema in anyOf',
        }
        null === s ? (s = [e]) : s.push(e), a++
      }
    }
  } else {
    const e = {
      instancePath: t,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    null === s ? (s = [e]) : s.push(e), a++
  }
  return ($e.errors = s), 0 === a
}
var Ae = Pe.exports
function Oe() {
  Ae(o) || ye('data validation fail', Ae.errors)
}
o.getData || Oe()
var je = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('div', [e._t('default', null, { site: e.site })], 2)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ computed: { site: () => we(o, 'site') } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Re = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('svg', { attrs: { viewBox: '0 0 24 24' } }, [n('path', { attrs: { fill: e.color, d: e.icon } })])
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    props: { color: { default: 'currentColor', type: String } },
    computed: {
      icon() {
        return this.$slots.default?.[0].text ?? ''
      },
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
let Fe = {}
function Te(e, t) {
  const n = (t) => ({ ...t, desk: e, authors: ke(t.authors) })
  Array.isArray(t) ? (Fe[e] = t.map((e) => n(e))) : t[e] && 'object' == typeof t[e] && (Fe[e] = t[e].map((e) => n(e)))
}
function Ie(e) {
  return (
    (Fe[e] && 0 !== Fe[e].length) ||
      (function (e) {
        o.getData ? Te(e, o.getData().articles) : Te(e, o.articles)
      })(e),
    {
      ...((Fe[e] || []).shift() ?? {
        title: `No Article for '${e}'`,
        blurb: `Could not get article mocking data for '${e}' desk`,
        desk: e,
        url: 'https://example.com',
        headline: '',
        time: new Date(),
        authors: [{ name: 'No Article', url: '#' }],
      }),
      deskUrl: '#',
    }
  )
}
o.onReset &&
  o.onReset(() => {
    Fe = {}
  })
var qe = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('div', [e._t('default', null, { article: e.article })], 2)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    data: () => ({
      article: { title: '', headline: '', desk: '', deskUrl: '#', authors: [], blurb: '', url: '', time: new Date() },
    }),
    inject: ['desk'],
    async created() {
      if (!this.desk) throw new Error('please make sure you use `Article` inside a `DeskSection`')
      this.article = Ie(this.desk)
    },
    beforeDestroy() {
      var e, t
      this.article.title && ((e = this.desk), (t = Object.assign({}, this.article)), (Fe[e] ??= []), Fe[e].push(t))
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
const De = { xs: !0, md: !0, lg: !0 },
  Ne = new Set(['left', 'center', 'right'])
function Le(e) {
  return 'object' == typeof e
}
const He = () => !0
function Me(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : He
  return (r) => {
    if (null == r) return !0
    if (Le(r)) {
      const i = Object.keys(r)
        .filter((e) => !De[e])
        .join(', ')
      i.length > 0 && ve(`You have passed [${i}] for ${e} as style config, expected keys are only 'xs', 'md', 'lg'`)
      for (const i of Object.keys(De))
        if (null != r[i]) {
          if (typeof r[i] !== t) return ye(`${e} expect type ${t}, but got '${typeof r[i]}'`), !1
          if (!n(e, r[i])) return !1
        }
      return !0
    }
    return typeof r !== t ? (ye(`${e} expect type ${t}, but got '${typeof r}'`), !1) : !!n(e, r)
  }
}
function ze(e, t) {
  return (n, r) => !(r < e || r > t) || (ye(`valid range for ${n} is ${e}~${t}, but got ${r}`), !1)
}
const Ve = {
  fontSize: { types: [Number, Object], validator: Me('fontSize', 'number', ze(8, 280)) },
  fontFamily: { types: [Number, Object], validator: Me('fontFamily', 'string') },
  bold: { type: [Boolean, Object], default: void 0, validator: Me('bold', 'boolean') },
  italic: { type: [Boolean, Object], default: void 0, validator: Me('italic', 'boolean') },
  underline: { type: [Boolean, Object], default: void 0, validator: Me('underline', 'boolean') },
  uppercase: { type: [Boolean, Object], default: void 0, validator: Me('uppercase', 'boolean') },
  lowercase: { type: [Boolean, Object], default: void 0, validator: Me('lowercase', 'boolean') },
  align: {
    types: [String, Object],
    validator: Me(
      'align',
      'string',
      (e, t) => !!Ne.has(t) || (ye('valid value for align are: `left`, `center`, `right`'), !1)
    ),
  },
  color: { types: [String, Object], validator: Me('color', 'string') },
  lineHeight: { types: [Number, Object], validator: Me('lineHeight', 'number', ze(1, 2)) },
  hoverColor: { types: [String, Object], validator: Me('hoverColor', 'string') },
}
function Be(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (e) {
              return "'" + e + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function We(e) {
  return !!e && !!e[Ot]
}
function Ue(e) {
  return (
    !!e &&
    ((function (e) {
      if (!e || 'object' != typeof e) return !1
      var t = Object.getPrototypeOf(e)
      if (null === t) return !0
      var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
      return n === Object || ('function' == typeof n && Function.toString.call(n) === jt)
    })(e) ||
      Array.isArray(e) ||
      !!e[At] ||
      !!e.constructor[At] ||
      Qe(e) ||
      Xe(e))
  )
}
function Ge(e, t, n) {
  void 0 === n && (n = !1),
    0 === Ye(e)
      ? (n ? Object.keys : Rt)(e).forEach(function (r) {
          ;(n && 'symbol' == typeof r) || t(r, e[r], e)
        })
      : e.forEach(function (n, r) {
          return t(r, n, e)
        })
}
function Ye(e) {
  var t = e[Ot]
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Qe(e) ? 2 : Xe(e) ? 3 : 0
}
function Ke(e, t) {
  return 2 === Ye(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function Je(e, t, n) {
  var r = Ye(e)
  2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n)
}
function Qe(e) {
  return St && e instanceof Map
}
function Xe(e) {
  return Et && e instanceof Set
}
function Ze(e) {
  return e.o || e.t
}
function et(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = Ft(e)
  delete t[Ot]
  for (var n = Rt(t), r = 0; r < n.length; r++) {
    var i = n[r],
      s = t[i]
    !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) && (t[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function tt(e, t) {
  return (
    void 0 === t && (t = !1),
    rt(e) ||
      We(e) ||
      !Ue(e) ||
      (Ye(e) > 1 && (e.set = e.add = e.clear = e.delete = nt),
      Object.freeze(e),
      t &&
        Ge(
          e,
          function (e, t) {
            return tt(t, !0)
          },
          !0
        )),
    e
  )
}
function nt() {
  Be(2)
}
function rt(e) {
  return null == e || 'object' != typeof e || Object.isFrozen(e)
}
function it(e) {
  var t = Tt[e]
  return t || Be(18, e), t
}
function st() {
  return xt
}
function at(e, t) {
  t && (it('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function ot(e) {
  lt(e), e.p.forEach(ct), (e.p = null)
}
function lt(e) {
  e === xt && (xt = e.l)
}
function ut(e) {
  return (xt = { p: [], l: xt, h: e, m: !0, _: 0 })
}
function ct(e) {
  var t = e[Ot]
  0 === t.i || 1 === t.i ? t.j() : (t.O = !0)
}
function dt(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    r = void 0 !== e && e !== n
  return (
    t.h.g || it('ES5').S(t, e, r),
    r
      ? (n[Ot].P && (ot(t), Be(4)),
        Ue(e) && ((e = pt(t, e)), t.l || ft(t, e)),
        t.u && it('Patches').M(n[Ot], e, t.u, t.s))
      : (e = pt(t, n, [])),
    ot(t),
    t.u && t.v(t.u, t.s),
    e !== $t ? e : void 0
  )
}
function pt(e, t, n) {
  if (rt(t)) return t
  var r = t[Ot]
  if (!r)
    return (
      Ge(
        t,
        function (i, s) {
          return ht(e, r, t, i, s, n)
        },
        !0
      ),
      t
    )
  if (r.A !== e) return t
  if (!r.P) return ft(e, r.t, !0), r.t
  if (!r.I) {
    ;(r.I = !0), r.A._--
    var i = 4 === r.i || 5 === r.i ? (r.o = et(r.k)) : r.o
    Ge(3 === r.i ? new Set(i) : i, function (t, s) {
      return ht(e, r, i, t, s, n)
    }),
      ft(e, i, !1),
      n && e.u && it('Patches').R(r, n, e.u, e.s)
  }
  return r.o
}
function ht(e, t, n, r, i, s) {
  if (We(i)) {
    var a = pt(e, i, s && t && 3 !== t.i && !Ke(t.D, r) ? s.concat(r) : void 0)
    if ((Je(n, r, a), !We(a))) return
    e.m = !1
  }
  if (Ue(i) && !rt(i)) {
    if (!e.h.F && e._ < 1) return
    pt(e, i), (t && t.A.l) || ft(e, i)
  }
}
function ft(e, t, n) {
  void 0 === n && (n = !1), e.h.F && e.m && tt(t, n)
}
function mt(e, t) {
  var n = e[Ot]
  return (n ? Ze(n) : e)[t]
}
function gt(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) return r
      n = Object.getPrototypeOf(n)
    }
}
function yt(e) {
  e.P || ((e.P = !0), e.l && yt(e.l))
}
function vt(e) {
  e.o || (e.o = et(e.t))
}
function bt(e, t, n) {
  var r = Qe(t)
    ? it('MapSet').N(t, n)
    : Xe(t)
      ? it('MapSet').T(t, n)
      : e.g
        ? (function (e, t) {
            var n = Array.isArray(e),
              r = {
                i: n ? 1 : 0,
                A: t ? t.A : st(),
                P: !1,
                I: !1,
                D: {},
                l: t,
                t: e,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              i = r,
              s = It
            n && ((i = [r]), (s = qt))
            var a = Proxy.revocable(i, s),
              o = a.revoke,
              l = a.proxy
            return (r.k = l), (r.j = o), l
          })(t, n)
        : it('ES5').J(t, n)
  return (n ? n.A : st()).p.push(r), r
}
function wt(e) {
  return (
    We(e) || Be(22, e),
    (function e(t) {
      if (!Ue(t)) return t
      var n,
        r = t[Ot],
        i = Ye(t)
      if (r) {
        if (!r.P && (r.i < 4 || !it('ES5').K(r))) return r.t
        ;(r.I = !0), (n = kt(t, i)), (r.I = !1)
      } else n = kt(t, i)
      return (
        Ge(n, function (t, i) {
          ;(r &&
            (function (e, t) {
              return 2 === Ye(e) ? e.get(t) : e[t]
            })(r.t, t) === i) ||
            Je(n, t, e(i))
        }),
        3 === i ? new Set(n) : n
      )
    })(e)
  )
}
function kt(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return et(e)
}
var Pt,
  xt,
  _t = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
  St = 'undefined' != typeof Map,
  Et = 'undefined' != typeof Set,
  Ct = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
  $t = _t ? Symbol.for('immer-nothing') : (((Pt = {})['immer-nothing'] = !0), Pt),
  At = _t ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Ot = _t ? Symbol.for('immer-state') : '__$immer_state',
  jt = '' + Object.prototype.constructor,
  Rt =
    'undefined' != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : void 0 !== Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
          }
        : Object.getOwnPropertyNames,
  Ft =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Rt(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  Tt = {},
  It = {
    get: function (e, t) {
      if (t === Ot) return e
      var n = Ze(e)
      if (!Ke(n, t))
        return (function (e, t, n) {
          var r,
            i = gt(t, n)
          return i ? ('value' in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(e.k)) : void 0
        })(e, n, t)
      var r = n[t]
      return e.I || !Ue(r) ? r : r === mt(e.t, t) ? (vt(e), (e.o[t] = bt(e.A.h, r, e))) : r
    },
    has: function (e, t) {
      return t in Ze(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Ze(e))
    },
    set: function (e, t, n) {
      var r = gt(Ze(e), t)
      if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0
      if (!e.P) {
        var i = mt(Ze(e), t),
          s = null == i ? void 0 : i[Ot]
        if (s && s.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
        if (
          (function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
          })(n, i) &&
          (void 0 !== n || Ke(e.t, t))
        )
          return !0
        vt(e), yt(e)
      }
      return (e.o[t] === n && 'number' != typeof n && (void 0 !== n || t in e.o)) || ((e.o[t] = n), (e.D[t] = !0), !0)
    },
    deleteProperty: function (e, t) {
      return void 0 !== mt(e.t, t) || t in e.t ? ((e.D[t] = !1), vt(e), yt(e)) : delete e.D[t], e.o && delete e.o[t], !0
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Ze(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return r ? { writable: !0, configurable: 1 !== e.i || 'length' !== t, enumerable: r.enumerable, value: n[t] } : r
    },
    defineProperty: function () {
      Be(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      Be(12)
    },
  },
  qt = {}
Ge(It, function (e, t) {
  qt[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (qt.deleteProperty = function (e, t) {
    return It.deleteProperty.call(this, e[0], t)
  }),
  (qt.set = function (e, t, n) {
    return It.set.call(this, e[0], t, n, e[0])
  })
var Dt = (function () {
    function e(e) {
      var t = this
      ;(this.g = Ct),
        (this.F = !0),
        (this.produce = function (e, n, r) {
          if ('function' == typeof e && 'function' != typeof n) {
            var i = n
            n = e
            var s = t
            return function (e) {
              var t = this
              void 0 === e && (e = i)
              for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o]
              return s.produce(e, function (e) {
                var r
                return (r = n).call.apply(r, [t, e].concat(a))
              })
            }
          }
          var a
          if (('function' != typeof n && Be(6), void 0 !== r && 'function' != typeof r && Be(7), Ue(e))) {
            var o = ut(t),
              l = bt(t, e, void 0),
              u = !0
            try {
              ;(a = n(l)), (u = !1)
            } finally {
              u ? ot(o) : lt(o)
            }
            return 'undefined' != typeof Promise && a instanceof Promise
              ? a.then(
                  function (e) {
                    return at(o, r), dt(e, o)
                  },
                  function (e) {
                    throw (ot(o), e)
                  }
                )
              : (at(o, r), dt(a, o))
          }
          if (!e || 'object' != typeof e) {
            if ((a = n(e)) === $t) return
            return void 0 === a && (a = e), t.F && tt(a, !0), a
          }
          Be(21, e)
        }),
        (this.produceWithPatches = function (e, n) {
          return 'function' == typeof e
            ? function (n) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s]
                return t.produceWithPatches(n, function (t) {
                  return e.apply(void 0, [t].concat(i))
                })
              }
            : [
                t.produce(e, n, function (e, t) {
                  ;(r = e), (i = t)
                }),
                r,
                i,
              ]
          var r, i
        }),
        'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
        'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (e) {
        Ue(e) || Be(8), We(e) && (e = wt(e))
        var t = ut(this),
          n = bt(this, e, void 0)
        return (n[Ot].C = !0), lt(t), n
      }),
      (t.finishDraft = function (e, t) {
        var n = (e && e[Ot]).A
        return at(n, t), dt(void 0, n)
      }),
      (t.setAutoFreeze = function (e) {
        this.F = e
      }),
      (t.setUseProxies = function (e) {
        e && !Ct && Be(20), (this.g = e)
      }),
      (t.applyPatches = function (e, t) {
        var n
        for (n = t.length - 1; n >= 0; n--) {
          var r = t[n]
          if (0 === r.path.length && 'replace' === r.op) {
            e = r.value
            break
          }
        }
        n > -1 && (t = t.slice(n + 1))
        var i = it('Patches').$
        return We(e)
          ? i(e, t)
          : this.produce(e, function (e) {
              return i(e, t)
            })
      }),
      e
    )
  })(),
  Nt = new Dt(),
  Lt = Nt.produce
Nt.produceWithPatches.bind(Nt),
  Nt.setAutoFreeze.bind(Nt),
  Nt.setUseProxies.bind(Nt),
  Nt.applyPatches.bind(Nt),
  Nt.createDraft.bind(Nt),
  Nt.finishDraft.bind(Nt)
var Ht = 'Invariant failed'
function Mt(e, t) {
  if (!e) throw new Error(Ht)
}
const zt = '@@jraft/STYLE_TREE_FRAGMENT',
  Vt = ['xs', 'md', 'lg']
function Bt(e, t) {
  if (0 === t.length) return Mt(e), e
  if ((e || (e = { name: t[0], styles: {}, children: {} }), '@@jraft/STYLE_TREE_FRAGMENT' !== e.name)) {
    Mt(t[0] === e.name)
    const [, ...n] = t
    return n.length > 0 && (e.children[n[0]] = Bt(e.children[n[0]], n)), e
  }
  return (e.children[t[0]] = Bt(e.children[t[0]], t)), e
}
function Wt(e, t) {
  Bt(e, t)
  const n = (function (e, t) {
    const n = (function (e, t) {
      let n = e
      const r = [...t]
      if (0 === r.length) return e
      if (!e) return
      e.name === zt && (n = n.children[r[0]])
      if (!n) return
      for (; r.length > 0 && (Mt(r[0] === n.name), r.shift(), 0 !== r.length); )
        if (((n = n.children[r[0]]), !n)) return n
      return n
    })(e, t)
    return Mt(n), n
  })(e, t)
  return n.styles
}
const Ut = {
  STYLE_TREE_FRAGMENT: zt,
  useDeepSelector: !1,
  ensureSelector(e) {
    return this.hasElementSelector(e) ? this.renderElementSelector(e) : `.${e}`
  },
  hasElementSelector: (e) => e.startsWith('&'),
  renderElementSelector(e) {
    return this.useDeepSelector ? e.replace('&', '&::v-deep') : e
  },
}
function Gt(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'xs',
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
  const s = Wt(e, t),
    a = Kt(n, r)
  return Yt(s, a, i), e
}
function Yt(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
  for (const [r, i] of Object.entries(t))
    for (const t of Vt)
      null !== e[r]?.[t] &&
        void 0 !== i[t] &&
        ((e[r] ??= {}), (null != e[r][t] && null === i[t]) || (null != e[r][t] && n) || (e[r][t] = i[t]))
  return e
}
function Kt(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'xs'
  const n = {}
  for (const r of Object.keys(e)) n[r] = Jt(e[r], t)
  return n
}
function Jt(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'xs'
  return e && 'object' == typeof e ? e : { [t]: e }
}
const Qt = ['spacing']
function Xt(e) {
  return u(e) ? { xs: 'auto', ...e } : { xs: e }
}
const Zt =
  window.__STORE__ ||
  a.observable({
    styles: tt(
      Gt(
        (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '@@jraft/STYLE_TREE_FRAGMENT'
          return { name: e, styles: {}, children: {} }
        })(),
        Qt,
        { width: Xt(we(o, 'spacing') ?? 100) }
      )
    ),
    selected: null,
    hasErrors: [],
    colors: [],
    requestSelect: null,
    shouldStop: !1,
  })
function en(e) {
  let { path: t, data: n } = e
  Zt.styles = Lt(Zt.styles, (e) => {
    Gt(e, t, n)
  })
}
function tn(e) {
  Zt.selected = e
}
Reflect.set(window, '__STORE__', Zt)
const nn = a.extend({}),
  rn = nn.extend({ inject: ['blockId'] })
var sn = nn.extend({
  components: { AutoSizeInput: fe },
  props: {
    component: String,
    display: String,
    path: Array,
    editable: { type: Boolean, default: void 0 },
    defaultValue: String,
    ...Ve,
  },
  data: () => ({ text: null }),
  computed: {
    computedValue() {
      const e = this.text
      return null != e ? e : 'string' == typeof this.defaultValue ? this.defaultValue : ''
    },
    isSelected() {
      return c(Zt.selected?.path, this.path)
    },
    computedClass() {
      return {
        [this.kind]: !0,
        'element-selected': this.isSelected,
        'element-has-error': Zt.hasErrors.some((e) => c(e, this.path)),
      }
    },
    shouldSelected() {
      return !this.isSelected && !!Zt.requestSelect && c(Zt.requestSelect, this.path)
    },
    kind() {
      const e = d(this.path)
      if (!e) throw new Error('seem you forget to pass the `kind`')
      return e
    },
  },
  methods: {
    handleInput(e) {
      this.text = e
    },
    setSelected(e) {
      Zt.shouldStop && e && e.stopPropagation()
      const { path: t, display: n } = this
      tn({ path: t, display: n })
    },
  },
  watch: {
    shouldSelected(e) {
      e && (this.setSelected(), (Zt.requestSelect = null))
    },
  },
  mounted() {
    const {
      path: e,
      align: t,
      bold: n,
      color: r,
      fontFamily: i,
      fontSize: s,
      italic: a,
      lineHeight: o,
      lowercase: l,
      underline: u,
      uppercase: c,
      hoverColor: d,
    } = this
    en({
      path: e,
      data: p(
        {
          align: t,
          bold: n,
          color: r,
          fontFamily: i,
          fontSize: s,
          italic: a,
          lineHeight: o,
          lowercase: l,
          underline: u,
          uppercase: c,
          hoverColor: d,
        },
        h
      ),
    })
  },
})
var an = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return e.editable
        ? n('AutoSizeInput', {
            staticClass: 'element',
            class: e.computedClass,
            attrs: { type: 'textarea', value: e.computedValue },
            on: { input: e.handleInput },
          })
        : n(
            e.component,
            { tag: 'component', staticClass: 'element', class: e.computedClass, on: { click: e.setSelected } },
            [e._t('default')],
            2
          )
    },
    staticRenderFns: [],
  },
  function (e) {
    e &&
      e('data-v-864eb124_0', {
        source:
          '.element-outline .element[data-v-864eb124]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}.element-outline .element.element-selected[data-v-864eb124]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246 / var(--tw-ring-opacity))}.element-outline .element.element-selected.element-has-error[data-v-864eb124]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(239 68 68 / var(--tw-ring-opacity))}.element-outline .element.element-has-error[data-v-864eb124]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(248 113 113 / var(--tw-ring-opacity))}',
        map: void 0,
        media: void 0,
      })
  },
  sn,
  'data-v-864eb124',
  false,
  undefined,
  !1,
  L,
  void 0,
  void 0
)
var on = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)(
        'GenericElement',
        e._b({}, 'GenericElement', e.genericElementProps, !1),
        [e._t('default')],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    components: { GenericElement: an },
    props: {
      component: { type: String, required: !0 },
      kind: { type: String, required: !0 },
      blockType: { type: String },
      ...Ve,
    },
    inject: ['blockId'],
    computed: {
      genericElementProps() {
        const e = `b-${this.blockId}`
        return { ...f(this.$props, ['kind', 'blockType']), display: 'Display Text', path: [e, this.kind] }
      },
    },
    created() {
      this.blockType && a.util.warn('blockType is depercated', this)
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
const ln = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n(
        'TextElement',
        e._b({}, 'TextElement', e.textProps, !1),
        [
          e._l(e.authors, function (t, r) {
            return [
              e._t(
                'separator',
                function () {
                  return [
                    0 === r
                      ? void 0
                      : r === e.authors.length - 1
                        ? n('span', { key: r + '-sep', class: e.separatorClass }, [e._v('\n        and ')])
                        : n('span', { key: r + '-sep', class: e.separatorClass }, [e._v(e._s(e.separator))]),
                  ]
                },
                { index: r, author: t }
              ),
              e._v(' '),
              n(
                'LinkElement',
                { key: r, class: e.authorClass, attrs: { href: t.url } },
                [
                  e._t(
                    'author',
                    function () {
                      return [e._v('\n        ' + e._s(t.name) + '\n      ')]
                    },
                    { author: t, index: r }
                  ),
                ],
                2
              ),
            ]
          }),
        ],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    components: { LinkElement: me, TextElement: on },
    props: {
      kind: { type: String, required: !0 },
      blockType: { type: String },
      component: { type: String, default: 'p' },
      authorComponent: { type: String, default: 'span' },
      authors: { type: Array, required: !0 },
      separator: { type: String, default: ', ' },
      authorClass: { type: String },
      separatorClass: { type: String },
      ...Ve,
    },
    computed: {
      textProps() {
        const {
          component: e,
          authorComponent: t,
          authors: n,
          authorClass: r,
          separator: i,
          separatorClass: s,
          ...a
        } = this.$props
        return { component: t, ...a }
      },
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var un = ln
function cn(e) {
  var t,
    n,
    r = new Error(e)
  return (t = r), (n = cn.prototype), Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : (t.__proto__ = n), r
}
function dn(e, t, n) {
  var r = t.slice(0, n).split(/\n/),
    i = r.length,
    s = r[i - 1].length + 1
  throw cn((e += ' at line ' + i + ' col ' + s + ':\n\n  ' + t.split(/\n/)[i - 1] + '\n  ' + Array(s).join(' ') + '^'))
}
cn.prototype = Object.create(Error.prototype, { name: { value: 'Eta Error', enumerable: !1 } })
var pn = new Function('return this')().Promise
function hn(e, t) {
  for (var n in t) (r = t), (i = n), Object.prototype.hasOwnProperty.call(r, i) && (e[n] = t[n])
  var r, i
  return e
}
function fn(e, t, n, r) {
  var i, s
  return (
    Array.isArray(t.autoTrim) ? ((i = t.autoTrim[1]), (s = t.autoTrim[0])) : (i = s = t.autoTrim),
    (n || !1 === n) && (i = n),
    (r || !1 === r) && (s = r),
    s || i
      ? 'slurp' === i && 'slurp' === s
        ? e.trim()
        : ('_' === i || 'slurp' === i
            ? (e = (function (e) {
                return String.prototype.trimLeft ? e.trimLeft() : e.replace(/^\s+/, '')
              })(e))
            : ('-' !== i && 'nl' !== i) || (e = e.replace(/^(?:\r\n|\n|\r)/, '')),
          '_' === s || 'slurp' === s
            ? (e = (function (e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/\s+$/, '')
              })(e))
            : ('-' !== s && 'nl' !== s) || (e = e.replace(/(?:\r\n|\n|\r)$/, '')),
          e)
      : e
  )
}
var mn = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
function gn(e) {
  return mn[e]
}
var yn = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,
  vn = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,
  bn = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g
function wn(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
}
function kn(e, t) {
  var n = (function (e, t) {
      var n = [],
        r = !1,
        i = 0,
        s = t.parse
      if (t.plugins)
        for (var a = 0; a < t.plugins.length; a++) (w = t.plugins[a]).processTemplate && (e = w.processTemplate(e, t))
      function o(e, i) {
        e && (e = fn(e, t, r, i)) && ((e = e.replace(/\\|'/g, '\\$&').replace(/\r\n|\n|\r/g, '\\n')), n.push(e))
      }
      t.rmWhitespace && (e = e.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '')),
        (yn.lastIndex = 0),
        (vn.lastIndex = 0),
        (bn.lastIndex = 0)
      for (
        var l,
          u = [s.exec, s.interpolate, s.raw].reduce(function (e, t) {
            return e && t ? e + '|' + wn(t) : t ? wn(t) : e
          }, ''),
          c = new RegExp('([^]*?)' + wn(t.tags[0]) + '(-|_)?\\s*(' + u + ')?\\s*', 'g'),
          d = new RegExp('\'|"|`|\\/\\*|(\\s*(-|_)?' + wn(t.tags[1]) + ')', 'g');
        (l = c.exec(e));

      ) {
        i = l[0].length + l.index
        var p = l[1],
          h = l[2],
          f = l[3] || ''
        o(p, h), (d.lastIndex = i)
        for (var m = void 0, g = !1; (m = d.exec(e)); ) {
          if (m[1]) {
            var y = e.slice(i, m.index)
            ;(c.lastIndex = i = d.lastIndex),
              (r = m[2]),
              (g = { t: f === s.exec ? 'e' : f === s.raw ? 'r' : f === s.interpolate ? 'i' : '', val: y })
            break
          }
          var v = m[0]
          if ('/*' === v) {
            var b = e.indexOf('*/', d.lastIndex)
            ;-1 === b && dn('unclosed comment', e, m.index), (d.lastIndex = b)
          } else
            "'" === v
              ? ((vn.lastIndex = m.index),
                vn.exec(e) ? (d.lastIndex = vn.lastIndex) : dn('unclosed string', e, m.index))
              : '"' === v
                ? ((bn.lastIndex = m.index),
                  bn.exec(e) ? (d.lastIndex = bn.lastIndex) : dn('unclosed string', e, m.index))
                : '`' === v &&
                  ((yn.lastIndex = m.index),
                  yn.exec(e) ? (d.lastIndex = yn.lastIndex) : dn('unclosed string', e, m.index))
        }
        g ? n.push(g) : dn('unclosed tag', e, l.index + p.length)
      }
      if ((o(e.slice(i, e.length), !1), t.plugins))
        for (a = 0; a < t.plugins.length; a++) {
          var w
          ;(w = t.plugins[a]).processAST && (n = w.processAST(n, t))
        }
      return n
    })(e, t),
    r =
      "var tR='',__l,__lP" +
      (t.include ? ',include=E.include.bind(E)' : '') +
      (t.includeFile ? ',includeFile=E.includeFile.bind(E)' : '') +
      '\nfunction layout(p,d){__l=p;__lP=d}\n' +
      (t.useWith ? 'with(' + t.varName + '||{}){' : '') +
      (function (e, t) {
        var n = 0,
          r = e.length,
          i = ''
        for (; n < r; n++) {
          var s = e[n]
          if ('string' == typeof s) {
            i += "tR+='" + s + "'\n"
          } else {
            var a = s.t,
              o = s.val || ''
            'r' === a
              ? (t.filter && (o = 'E.filter(' + o + ')'), (i += 'tR+=' + o + '\n'))
              : 'i' === a
                ? (t.filter && (o = 'E.filter(' + o + ')'),
                  t.autoEscape && (o = 'E.e(' + o + ')'),
                  (i += 'tR+=' + o + '\n'))
                : 'e' === a && (i += o + '\n')
          }
        }
        return i
      })(n, t) +
      (t.includeFile
        ? 'if(__l)tR=' +
          (t.async ? 'await ' : '') +
          'includeFile(__l,Object.assign(' +
          t.varName +
          ',{body:tR},__lP))\n'
        : t.include
          ? 'if(__l)tR=' + (t.async ? 'await ' : '') + 'include(__l,Object.assign(' + t.varName + ',{body:tR},__lP))\n'
          : '') +
      'if(cb){cb(null,tR)} return tR' +
      (t.useWith ? '}' : '')
  if (t.plugins)
    for (var i = 0; i < t.plugins.length; i++) {
      var s = t.plugins[i]
      s.processFnString && (r = s.processFnString(r, t))
    }
  return r
}
var Pn = new ((function () {
  function e(e) {
    this.cache = e
  }
  return (
    (e.prototype.define = function (e, t) {
      this.cache[e] = t
    }),
    (e.prototype.get = function (e) {
      return this.cache[e]
    }),
    (e.prototype.remove = function (e) {
      delete this.cache[e]
    }),
    (e.prototype.reset = function () {
      this.cache = {}
    }),
    (e.prototype.load = function (e) {
      hn(this.cache, e)
    }),
    e
  )
})())({})
var xn = {
  async: !1,
  autoEscape: !0,
  autoTrim: [!1, 'nl'],
  cache: !1,
  e: function (e) {
    var t = String(e)
    return /[&<>"']/.test(t) ? t.replace(/[&<>"']/g, gn) : t
  },
  include: function (e, t) {
    var n = this.templates.get(e)
    if (!n) throw cn('Could not fetch template "' + e + '"')
    return n(t, this)
  },
  parse: { exec: '', interpolate: '=', raw: '~' },
  plugins: [],
  rmWhitespace: !1,
  tags: ['<%', '%>'],
  templates: Pn,
  useWith: !1,
  varName: 'it',
}
function _n(e, t) {
  var n = {}
  return hn(n, xn), t && hn(n, t), e && hn(n, e), n
}
function Sn(e, t) {
  var n = _n(t || {}),
    r = n.async
      ? (function () {
          try {
            return new Function('return (async function(){}).constructor')()
          } catch (e) {
            throw e instanceof SyntaxError ? cn("This environment doesn't support async/await") : e
          }
        })()
      : Function
  try {
    return new r(n.varName, 'E', 'cb', kn(e, n))
  } catch (t) {
    throw t instanceof SyntaxError
      ? cn(
          'Bad template syntax\n\n' + t.message + '\n' + Array(t.message.length + 1).join('=') + '\n' + kn(e, n) + '\n'
        )
      : t
  }
}
var En = /^\uFEFF/
function Cn(e, t, n) {
  return b(n ? t : w(t), e) + (k(e) ? '' : '.eta')
}
function $n(e, t) {
  var n = !1,
    r = t.views,
    i = [],
    s = JSON.stringify({ filename: t.filename, path: e, root: t.root, views: t.views })
  if (t.cache && t.filepathCache && t.filepathCache[s]) return t.filepathCache[s]
  function a(e) {
    i.includes(e) || i.push(e)
  }
  function o(e, t) {
    var n
    return (
      ((Array.isArray(e) &&
        e.some(function (e) {
          return a((n = Cn(t, e, !0))), y(n)
        })) ||
        !('string' != typeof e || (a((n = Cn(t, e, !0))), !y(n)))) &&
      n
    )
  }
  var l = /^[A-Za-z]+:\\|^\//.exec(e)
  if (l && l.length) {
    var u = e.replace(/^\/*/, '')
    if (!(n = o(r, u))) {
      var c = Cn(u, t.root || '/', !0)
      a(c), (n = c)
    }
  } else {
    if (t.filename) {
      var d = Cn(e, t.filename)
      a(d), y(d) && (n = d)
    }
    if ((n || (n = o(r, e)), !n)) throw cn('Could not find the template "' + e + '". Paths tried: ' + i)
  }
  return t.cache && t.filepathCache && (t.filepathCache[s] = n), n
}
function An(e, t, n) {
  var r = _n(t),
    i = (function (e) {
      try {
        return v(e).toString().replace(En, '')
      } catch (t) {
        throw cn("Failed to read template at '" + e + "'")
      }
    })(e)
  try {
    var s = Sn(i, r)
    return n || r.templates.define(r.filename, s), s
  } catch (t) {
    throw cn('Loading file: ' + e + ' failed:\n\n' + t.message)
  }
}
function On(e) {
  var t = e.filename
  if (e.cache) {
    var n = e.templates.get(t)
    return n || An(t, e)
  }
  return An(t, e, !0)
}
function jn(e, t) {
  if (t.cache && t.name && t.templates.get(t.name)) return t.templates.get(t.name)
  var n = 'function' == typeof e ? e : Sn(e, t)
  return t.cache && t.name && t.templates.define(t.name, n), n
}
function Rn(e, t, n, r) {
  var i = _n(n || {})
  if (!i.async) return jn(e, i)(t, i)
  if (!r) {
    if ('function' == typeof pn)
      return new pn(function (n, r) {
        try {
          n(jn(e, i)(t, i))
        } catch (e) {
          r(e)
        }
      })
    throw cn("Please provide a callback function, this env doesn't support Promises")
  }
  try {
    jn(e, i)(t, i, r)
  } catch (e) {
    return r(e)
  }
}
;(xn.includeFile = function (e, t) {
  var n = (function (e, t) {
    var n = _n({ filename: $n(e, t) }, t)
    return [On(n), n]
  })(e, this)
  return n[0](t, n[1])
}),
  (xn.filepathCache = {})
const Fn = function (e, t) {
    let { result: n } = t
    e.each(function e(t) {
      const { type: r, nodes: i, params: s, value: a, selector: o } = t
      i && t.each(e),
        (('decl' === r && !a) ||
          ('rule' === r && !o) ||
          (i && 0 === i.length) ||
          ('atrule' === r && ((!i && !s) || (!s && 0 === i.length)))) &&
          (t.remove(), n.messages.push({ type: 'removal', postcssPlugin: 'postcss-discard-empty', node: t }))
    })
  },
  Tn = () => ({ postcssPlugin: 'postcss-discard-empty', Once: Fn })
Tn.postcss = !0
var In = Tn
function qn(e, t, n) {
  t.includeFile || (t.includeFile = () => {})
  var r = ''
  t.include.bind(t), t.includeFile.bind(t)
  const { root: i } = e
  i.name !== t.STYLE_TREE_FRAGMENT &&
    ((r += t.ensureSelector(i.name)), (r += '{'), (r += t.include('breakpoints', i.styles)))
  for (const e of Object.values(i.children)) r += t.include('tree', { root: e })
  return i.name !== t.STYLE_TREE_FRAGMENT && (r += '}'), n && n(null, r), r
}
Pn.define('styles', function (e, t, n) {
  t.includeFile || (t.includeFile = () => {})
  var r = ''
  t.include.bind(t), t.includeFile.bind(t)
  const { styles: i, breakpoint: s } = e
  return (
    i.bold && i.bold[s] ? (r += 'font-weight: 700;') : i.bold && !1 === i.bold[s] && (r += 'font-weight: 400;'),
    i.italic && i.italic[s]
      ? (r += 'font-style: italic;')
      : i.italic && !1 === i.italic[s] && (r += 'font-style: normal;'),
    i.underline && i.underline[s]
      ? (r += 'text-decoration: underline;')
      : i.underline && !1 === i.underline[s] && (r += 'font-decoration: none;'),
    i.fontSize && i.fontSize[s] && ((r += 'font-size:'), (r += `${i.fontSize[s]}px`), (r += ';')),
    i.fontFamily && i.fontFamily[s] && ((r += 'font-family: "'), (r += i.fontFamily[s]), (r += '";')),
    i.align && i.align[s] && ((r += 'text-align:'), (r += i.align[s]), (r += ';')),
    i.lineHeight && i.lineHeight[s] && ((r += 'line-height:'), (r += `${i.lineHeight[s]}`), (r += ';')),
    i.color && i.color[s] && ((r += 'color:'), (r += `#${i.color[s]}`), (r += ';')),
    i.uppercase && i.uppercase[s]
      ? (r += 'text-transform: uppercase;')
      : i.lowercase && i.lowercase[s]
        ? (r += 'text-transform: lowercase;')
        : ((i.uppercase && !1 === i.uppercase[s]) || (i.lowercase && !1 === i.lowercase[s])) &&
          (r += 'text-transform: none;'),
    i.backgroundColor?.[s] && ((r += 'background-color:'), (r += `#${i.backgroundColor[s]}`), (r += ';')),
    i.width?.[s] && ((r += 'width:'), (r += i.width[s]), (r += ';')),
    i.maxWidth?.[s] && ((r += 'max-width:'), (r += i.maxWidth[s]), (r += ';')),
    i.minWidth?.[s] && ((r += 'min-width:'), (r += i.minWidth[s]), (r += ';')),
    i.hoverColor?.[s] && ((r += '&:hover {\ncolor:'), (r += `#${i.hoverColor[s]}`), (r += ';\n}')),
    n && n(null, r),
    r
  )
}),
  Pn.define('breakpoints', function (e, t, n) {
    t.includeFile || (t.includeFile = () => {})
    var r = ''
    return (
      t.include.bind(t),
      t.includeFile.bind(t),
      (r += t.include('styles', { styles: e, breakpoint: 'xs' })),
      (r += '@media (min-width: 768px) {'),
      (r += t.include('styles', { styles: e, breakpoint: 'md' })),
      (r += '}\n@media (min-width: 1070px) {'),
      (r += t.include('styles', { styles: e, breakpoint: 'lg' })),
      (r += '}'),
      n && n(null, r),
      r
    )
  }),
  Pn.define('tree', qn)
const Dn = P([x(), In()])
function Nn(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
  const n = Rn(qn, { root: e }, { ...Ut, useDeepSelector: t }),
    { css: r } = Dn.process(n)
  return r
}
var Ln = nn.extend({
  props: {
    kind: { type: String },
    component: { type: String, default: 'div' },
    backgroundColor: { type: [String, Object] },
  },
  inject: ['blockId'],
  mounted() {
    const { kind: e, blockId: t, backgroundColor: n } = this,
      r = `b-${t}`
    !(function (e) {
      let { path: t, data: n } = e
      en({ path: t, data: n }), Zt.colors.push([...t])
    })({ path: e ? [r, e] : [r], data: p({ backgroundColor: n }, h) })
  },
})
var Hn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)(
        e.component,
        e._g({ tag: 'component', class: e.kind }, e.$listeners),
        [e._t('default')],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  Ln,
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Mn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('div', { class: e.full ? null : 'spacing', style: e.styles }, [e._t('default')], 2)
    },
    staticRenderFns: [],
  },
  function (e) {
    e &&
      e('data-v-34d1876c_0', {
        source: '.spacing[data-v-34d1876c]{margin-left:auto;margin-right:auto}',
        map: void 0,
        media: void 0,
      })
  },
  nn.extend({ props: { full: { type: Boolean, default: !1 } } }),
  'data-v-34d1876c',
  false,
  undefined,
  !1,
  L,
  void 0,
  void 0
)
var zn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n(
        'ColorArea',
        {
          staticClass: 'm-2px storipress-block relative',
          class: e.blockClasses,
          attrs: { component: 'section', backgroundColor: e.backgroundColor },
        },
        [
          n('Spacing', { attrs: { full: e.full } }, [e._t('default')], 2),
          e._v(' '),
          n('style', { tag: 'component', attrs: { type: 'text/css' } }, [e._v('\n    ' + e._s(e.css) + '\n  ')]),
        ],
        1
      )
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({
    components: { ColorArea: Hn, Spacing: Mn },
    props: {
      block: { type: Object, required: !0 },
      backgroundColor: { type: [String, Object] },
      full: { type: Boolean, default: !1 },
    },
    provide: { blockId: 'my-block' },
    computed: {
      blockClasses: () => ({ 'b-my-block': !0 }),
      styles: () => Zt.styles,
      css() {
        return Nn(this.styles)
      },
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
let Vn = []
function Bn() {
  return (
    0 === Vn.length &&
      (Vn = Wn().map((e) => {
        let { name: t } = e
        return t
      })),
    Vn.shift() ?? 'No Desk'
  )
}
function Wn() {
  return ke(we(o, 'desks'))
}
o.onReset &&
  o.onReset(() => {
    Vn = []
  })
const Un = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('Site', {
        scopedSlots: e._u(
          [
            {
              key: 'default',
              fn: function (t) {
                var n = t.site
                return [e._t('default', null, { site: n, desks: e.desks, pages: e.pages })]
              },
            },
          ],
          null,
          !0
        ),
      })
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({ components: { Site: je }, computed: { desks: () => Wn(), pages: () => ke(we(o, 'pages') ?? []) } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Gn = Un
const Yn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('SiteInfo', {
        scopedSlots: e._u(
          [
            {
              key: 'default',
              fn: function (t) {
                var n = t.desks
                return [e._t('default', null, { desks: n })]
              },
            },
          ],
          null,
          !0
        ),
      })
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({ components: { SiteInfo: Gn } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Kn = Yn
var Jn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('div', [e._t('default', null, { desk: e.desk, url: '#' })], 2)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    props: { order: { type: Number, required: !0 } },
    data: () => ({ desk: Bn() }),
    provide() {
      return { desk: this.desk }
    },
    beforeDestroy() {
      var e
      ;(e = this.desk), Vn.push(e)
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Qn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n(
        'ColorArea',
        {
          staticClass: 'm-2px storipress-block relative',
          class: e.blockClasses,
          attrs: { component: 'section', backgroundColor: e.backgroundColor },
        },
        [
          e._t('default'),
          e._v(' '),
          n('style', { tag: 'component', attrs: { type: 'text/css' } }, [e._v('\n    ' + e._s(e.css) + '\n  ')]),
        ],
        2
      )
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({
    components: { ColorArea: Hn },
    props: { block: { type: Object, required: !0 }, backgroundColor: { type: [String, Object] } },
    provide: { blockId: 'my-block' },
    computed: {
      blockClasses: () => ({ 'b-my-block': !0 }),
      styles: () => Zt.styles,
      css() {
        return Nn(this.styles)
      },
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Xn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('div', { staticClass: 'relative' }, [
        n('img', { staticClass: 'h-full', attrs: { src: e.src, alt: e.alt } }),
      ])
    },
    staticRenderFns: [],
  },
  undefined,
  rn.extend({
    props: {
      kind: { type: String, required: !0 },
      alt: { type: String },
      defaultValue: { type: String, required: !0 },
    },
    computed: {
      src() {
        return this.defaultValue
      },
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var Zn = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('SwappableImage', { attrs: { kind: e.kind, defaultValue: e.logo } })
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    components: { SwappableImage: Xn },
    props: { kind: { type: String, default: 'logo' } },
    computed: { logo: () => we(o, 'logo') },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var er = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('nav', { staticClass: 'nav' }, [e._t('default')], 2)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ props: { height: { type: [Number, String, Object], default: m } } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
const tr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('SiteInfo', {
        scopedSlots: e._u(
          [
            {
              key: 'default',
              fn: function (t) {
                var n = t.pages
                return [e._t('default', null, { pages: n })]
              },
            },
          ],
          null,
          !0
        ),
      })
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({ components: { SiteInfo: Gn } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var nr = tr
var rr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('VPortal', { attrs: { to: 'menu' } }, [
        n('div', { staticClass: 'w-full h-full', class: e.open ? e.openClass : 'hidden' }, [e._t('default')], 2),
      ])
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    components: { VPortal: _ },
    props: { open: { type: Boolean }, openClass: { type: String, default: 'block' } },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var ir = D(
  {
    render: function () {
      var e = this.$createElement,
        t = this._self._c || e
      return t('div', { staticClass: 'b-menu' }, [t('VPortalTarget', { attrs: { name: 'menu', slim: '' } })], 1)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ components: { VPortalTarget: S }, provide: () => ({ blockId: 'menu' }) }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var sr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('div', [e._v('This element is not for public use')])
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({}),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var ar = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('div', [
        n(
          'div',
          { attrs: { role: 'button' } },
          [
            e._t('default', function () {
              return [
                n(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      'stroke-width': '1.5',
                      stroke: '#2c3e50',
                      fill: 'none',
                      'stroke-linecap': 'round',
                      'stroke-linejoin': 'round',
                    },
                  },
                  [
                    n('path', { attrs: { d: 'M0 0h24v24H0z', stroke: 'none' } }),
                    e._v(' '),
                    n('circle', { attrs: { cx: '10', cy: '10', r: '7' } }),
                    e._v(' '),
                    n('path', { attrs: { d: 'm21 21-6-6' } }),
                  ]
                ),
              ]
            }),
          ],
          2
        ),
      ])
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({}),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var or = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n('div', [n('SearchButton', [e._t('default')], 2)], 1)
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({ name: 'search', components: { SearchButton: ar } }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
var lr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('Spacing', [e._t('default')], 2)
    },
    staticRenderFns: [],
  },
  undefined,
  nn.extend({
    components: { Spacing: Mn },
    props: {
      width: { type: [String, Object], default: 'auto' },
      max: { type: [String, Object] },
      min: { type: [String, Object] },
    },
    created() {
      !(function (e) {
        let { width: t, max: n, min: r } = e
        Zt.styles = Lt(Zt.styles, (e) => {
          Gt(e, Qt, { width: Xt(t), ...(n && { maxWidth: Xt(n) }), ...(r && { minWidth: Xt(r) }) })
        })
      })({ width: this.width, max: this.max, min: this.min })
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
let ur = E.create(),
  cr = E.create()
'undefined' != typeof document &&
  ((ur = E.from(document.body, 'click', { capture: !0, passive: !0 })), (cr = E.from(window, 'blur', { passive: !0 }))),
  ur.setMaxHandlers(100),
  cr.setMaxHandlers(100)
const dr = new WeakMap(),
  pr = /^https?:\/\//
var hr = e({
  directives: {
    clickOutside: {
      bind: (e, t, n) => {
        if (!t.expression) return
        const r = E.newCtx()
        ur.attach(r, (r) => {
          if (r && (e === r.target || e.contains(r.target))) return
          const i = n.context?.[t.expression]
          i(r)
        }),
          cr.attach(r, () => {
            setTimeout(() => {
              if ('IFRAME' === document.activeElement?.tagName) {
                const e = n.context?.[t.expression]
                e()
              }
            }, 0)
          }),
          dr.set(e, r)
      },
      unbind(e) {
        const t = dr.get(e)
        dr.delete(e), t && t.done()
      },
    },
  },
  props: {
    component: String,
    display: String,
    path: { type: Array, required: !0 },
    editable: { type: Boolean, default: void 0 },
    defaultValue: String,
    ...Ve,
  },
  setup(e) {
    const { path: r, display: a = '', defaultValue: o } = e,
      l = t(() => {
        const e = d(r)
        if (!e) throw new Error('seem you forget to pass the `kind`')
        return e
      }),
      u = () => c(Zt.selected?.path, r),
      f = t(() => ({ [l.value]: !0, 'element-selected': u, 'element-has-error': Zt.hasErrors.some((e) => c(e, r)) })),
      m = i(o ?? ''),
      y = i([]),
      v = i([
        { id: '1', name: 'About Us', url: '/about-us' },
        { id: '2', name: 'Privacy Policy', url: '/privacy-policy' },
      ]),
      b = t(() =>
        y.value.every((e) => -1 === e.start || -1 === e.end || (!e.href && !e.pageId))
          ? m.value
          : y.value.reduceRight((e, t) => {
              const { start: n, end: r, href: i, pageId: s } = t
              if (-1 === n || -1 === r || (!i && !s)) return e
              const a = v.value.find((e) => e.id === s),
                o = `<a href="${a ? a.url : ((e) => (pr.test(e) ? e : `https://${e}`))(i || '')}">${m.value.slice(n, r)}</a>`
              return e.slice(0, n) + o + e.slice(r)
            }, m.value)
      ),
      w = i(null),
      k = i(null),
      P = i(null),
      x = { top: '0px', left: '0px', width: '0px', height: '0px' },
      _ = i({ ...x })
    let S = null
    const E = () => {
        S && H(x), (L.value = 0)
      },
      A = { start: -1, end: -1, range: null },
      O = i(-1),
      j = i(-1),
      R = t(() => {
        const e = O.value,
          t = j.value
        return -1 === e || -1 === t
          ? []
          : y.value.reduce(
              (n, r, i) =>
                r.start && -1 !== r.start && r.end && -1 !== r.end
                  ? (((e >= r.start && e <= r.end) || (t >= r.start && t <= r.end) || (e <= r.start && t >= r.end)) &&
                      n.push(i),
                    n)
                  : n,
              []
            )
      }),
      F = t(() => R.value[0] ?? -1),
      T = t(() => {
        const e = y.value[F.value]
        if (!e || R.value.length > 1) return ''
        if (e.pageId) {
          const t = v.value.find((t) => t.id === e.pageId)
          return t ? t.name : ''
        }
        return e.href ? e.href : ''
      }),
      I = i(''),
      q = /<a href="(.*?)">(.*?)<\/a>/gm,
      D = () => {
        if (!w.value) return
        const e = w.value.textContent || '',
          t = [...w.value.innerHTML.matchAll(q)]
        t &&
          (y.value = t
            .map((t) => {
              const [, n, r] = t || [],
                i = e.indexOf(r),
                s = i + r.length,
                a = v.value.find((e) => e.url === n),
                o = a ? a.id : ''
              return { start: i, end: s, href: n, pageId: o }
            })
            .sort((e, t) => e.start - t.start)),
          (m.value = e)
      },
      N = t(() => 0 === T.value.length),
      L = i(0),
      H = (e) => {
        S && S.hide(), e && (_.value = e)
        const t = (() => {
          if (!w.value) return A
          const e = w.value.ownerDocument.defaultView
          if (!e || !e.getSelection) return A
          const t = e.getSelection()
          if (!t || t.rangeCount <= 0) return A
          const n = t.getRangeAt(0),
            r = n.cloneRange()
          r.selectNodeContents(w.value), r.setEnd(n.startContainer, n.startOffset)
          const i = r.toString().length
          return r.setEnd(n.endContainer, n.endOffset), { start: i, end: r.toString().length, range: n }
        })()
        if (t.start === t.end || !t.range || !P.value) return
        ;(O.value = t.start), (j.value = t.end)
        const { left: n, top: r, width: i, height: s } = t.range.getBoundingClientRect()
        _.value = { top: `${r}px`, left: `${n}px`, width: `${i}px`, height: `${s}px` }
      },
      M = g(D, 5e3),
      z = () => {
        E()
      }
    return (
      s(() => {
        const {
          align: t,
          bold: n,
          color: i,
          fontFamily: s,
          fontSize: a,
          italic: o,
          lineHeight: l,
          lowercase: u,
          underline: c,
          uppercase: d,
          hoverColor: f,
        } = e
        en({
          path: r,
          data: p(
            {
              align: t,
              bold: n,
              color: i,
              fontFamily: s,
              fontSize: a,
              italic: o,
              lineHeight: l,
              lowercase: u,
              underline: c,
              uppercase: d,
              hoverColor: f,
            },
            h
          ),
        }),
          (S = C(k.value, {
            content: P.value,
            interactive: !0,
            sticky: !0,
            arrow: !1,
            hideOnClick: !1,
            delay: [150, 0],
            plugins: [$],
          })),
          window.addEventListener('scroll', z)
      }),
      n(() => {
        S && S.destroy(), window.removeEventListener('scroll', z)
      }),
      {
        computedClass: f,
        contentHTML: b,
        linkMenuStep: L,
        tippyPosition: _,
        currentLink: T,
        pages: v,
        inputValue: I,
        isShowNewLink: N,
        linkHandler: (e) => {
          let { pageId: t = '', href: n = '' } = e
          const r = O.value,
            i = j.value
          if (r === i) return !1
          const s = { start: r, end: i, href: n, pageId: t }
          F.value > -1
            ? y.value.splice(F.value, R.value.length, s)
            : (y.value.push(s), (y.value = y.value.sort((e, t) => e.start - t.start))),
            (I.value = ''),
            E()
        },
        blurHandler: () => {
          D()
        },
        inputHandler: () => {
          M(), E()
        },
        mouseupHandler: () => {
          H(), (L.value = 1), S && S.show()
        },
        setSelected: tn,
        handleClickOutside: (e) => {
          if (!e || !e.target) return
          const t = e.target
          t.closest('.element') || t.closest('.tippy-box') || E()
        },
        selectHandler: (e) => {
          Zt.shouldStop && e && e.stopPropagation(), tn({ path: r, display: a })
        },
        removeLink: () => {
          y.value.splice(F.value, 1), E()
        },
        root: w,
        tippy: k,
        template: P,
      }
    )
  },
})
var fr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t
      return n(
        'div',
        { staticClass: 'generic-link-element-wrapper', class: e.computedClass },
        [
          n(e.component, {
            directives: [
              {
                name: 'click-outside',
                rawName: 'v-click-outside',
                value: e.handleClickOutside,
                expression: 'handleClickOutside',
              },
            ],
            ref: 'root',
            tag: 'component',
            staticClass: 'element focus:outline-none',
            attrs: { contenteditable: e.editable },
            domProps: { innerHTML: e._s(e.contentHTML) },
            on: { blur: e.blurHandler, input: e.inputHandler, mouseup: e.mouseupHandler, click: e.selectHandler },
          }),
          e._v(' '),
          n('div', {
            ref: 'tippy',
            staticClass: 'fixed bg-gray-500 opacity-50 pointer-events-none',
            style: e.tippyPosition,
          }),
          e._v(' '),
          n(
            'div',
            {
              ref: 'template',
              staticClass: 'tippy-menu-wrapper shadow-1 flex text-black bg-white rounded',
              class: [!e.linkMenuStep && 'hidden'],
            },
            [
              1 === e.linkMenuStep
                ? [
                    n(
                      'div',
                      {
                        staticClass:
                          'link-btn hover:bg-gray-100 flex items-center gap-1 px-3 py-2 rounded cursor-pointer',
                        on: {
                          click: function (t) {
                            e.linkMenuStep = 2
                          },
                        },
                      },
                      [
                        e.isShowNewLink
                          ? [n('i', { staticClass: 'icon-link' }), e._v(' '), n('span', [e._v(' Link ')])]
                          : [
                              n('i', { staticClass: 'icon-file_replace_outline' }),
                              e._v(' '),
                              n('span', { staticClass: 'w-40 uppercase truncate' }, [
                                e._v(' ' + e._s(e.currentLink) + ' '),
                              ]),
                            ],
                      ],
                      2
                    ),
                    e._v(' '),
                    e.isShowNewLink
                      ? e._e()
                      : n('div', { staticClass: 'px-3 py-2 text-base cursor-pointer', on: { click: e.removeLink } }, [
                          n('i', { staticClass: 'icon-delete' }),
                        ]),
                  ]
                : e._e(),
              e._v(' '),
              2 === e.linkMenuStep
                ? n(
                    'div',
                    { staticClass: 'link-list overflow-hidden rounded cursor-pointer' },
                    [
                      e._l(e.pages, function (t) {
                        return n(
                          'div',
                          {
                            key: t.id,
                            staticClass: 'hover:bg-gray-100 w-40 px-3 py-2 uppercase',
                            on: {
                              click: function (n) {
                                return e.linkHandler({ pageId: t.id })
                              },
                            },
                          },
                          [n('span', { staticClass: 'truncate' }, [e._v(' ' + e._s(t.name) + ' ')])]
                        )
                      }),
                      e._v(' '),
                      n('div', [
                        n('input', {
                          directives: [
                            { name: 'model', rawName: 'v-model', value: e.inputValue, expression: 'inputValue' },
                          ],
                          staticClass: 'w-40 px-3 py-2',
                          attrs: { placeholder: 'https://...' },
                          domProps: { value: e.inputValue },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                                ? null
                                : e.linkHandler({ href: e.inputValue })
                            },
                            input: function (t) {
                              t.target.composing || (e.inputValue = t.target.value)
                            },
                          },
                        }),
                      ]),
                    ],
                    2
                  )
                : e._e(),
            ],
            2
          ),
        ],
        1
      )
    },
    staticRenderFns: [],
  },
  function (e) {
    e &&
      e('data-v-2b53586e_0', {
        source:
          '.generic-link-element-wrapper>.element>a{font-weight:700;text-decoration-line:underline;opacity:.75}.generic-link-element-wrapper>div[data-tippy-root]>.tippy-box{font-family:Lato,sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400}',
        map: void 0,
        media: void 0,
      })
  },
  hr,
  undefined,
  false,
  undefined,
  !1,
  L,
  void 0,
  void 0
)
var mr = D(
  {
    render: function () {
      var e = this,
        t = e.$createElement
      return (e._self._c || t)('GenericLinkElement', e._b({}, 'GenericLinkElement', e.genericElementProps, !1))
    },
    staticRenderFns: [],
  },
  undefined,
  a.extend({
    components: { GenericLinkElement: fr },
    props: {
      component: { type: String, required: !0 },
      kind: { type: String, required: !0 },
      blockType: { type: String },
      defaultValue: String,
      dataId: String,
      ...Ve,
    },
    inject: ['blockId'],
    computed: {
      genericElementProps() {
        const e = [`b-${this.blockId}`, this.kind]
        return {
          ...f(this.$props, ['kind', 'blockType']),
          editable: !0,
          display: 'Input Text',
          path: this.dataId ? [...e, this.dataId] : e,
        }
      },
    },
    created() {
      this.blockType && a.util.warn('blockType is deprecated', this)
    },
  }),
  undefined,
  false,
  undefined,
  !1,
  void 0,
  void 0,
  void 0
)
export {
  qe as Article,
  qe as ArticleBlock,
  un as Authors,
  zn as Block,
  ge as CONSOLE_PREFIX,
  Hn as ColorArea,
  Kn as DeskList,
  Jn as DeskSection,
  Qn as FooterBlock,
  V as HeadlineImage,
  Qn as HeroBlock,
  Re as Icon,
  me as LinkElement,
  Zn as Logo,
  er as Nav,
  er as Navigation,
  nr as PageList,
  rr as Portal,
  ir as PortalTarget,
  sr as RawHtml,
  z as ResponsiveImage,
  or as SearchElement,
  je as Site,
  Gn as SiteInfo,
  Mn as Spacing,
  lr as SpacingProvider,
  B as SubscribeEmail,
  W as SubscribeForm,
  Xn as SwappableImage,
  on as TextElement,
  mr as TextInput,
  Oe as _validateData,
  ye as error,
  we as getFromData,
  be as invariant,
  ke as normalizeLinkableResource,
  ve as warning,
}

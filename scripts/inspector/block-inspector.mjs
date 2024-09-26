import Ot, { defineComponent as qt, computed as At, ref as rn, onMounted as lh, onBeforeUnmount as Hb, provide as Io, h as No, reactive as Cc, watch as Ks, onBeforeMount as jb, nextTick as qb } from "vue";
import Gb from "data";
import { LinkElement as Kr, TextElement as Vr, Logo as Yb, DeskList as Xb, PageList as Kb, Site as Vb, SearchElement as Zb, TextInput as ch, ColorArea as fh, Article as dh, DeskSection as hh, HeroBlock as Jb, SpacingProvider as Qb, Block as e2 } from "@storipress/block";
import { Article as t2, Block as n2, DeskSection as r2, TextElement as i2, LinkElement as a2 } from "@jraft/block";
Ot.util.warn;
var ph = typeof global == "object" && global && global.Object === Object && global, s2 = typeof self == "object" && self && self.Object === Object && self, on = ph || s2 || Function("return this")(), cr = on.Symbol, gh = Object.prototype, o2 = gh.hasOwnProperty, u2 = gh.toString, Fr = cr ? cr.toStringTag : void 0;
function l2(n) {
  var e = o2.call(n, Fr), r = n[Fr];
  try {
    n[Fr] = void 0;
    var a = !0;
  } catch {
  }
  var o = u2.call(n);
  return a && (e ? n[Fr] = r : delete n[Fr]), o;
}
var c2 = Object.prototype, f2 = c2.toString;
function d2(n) {
  return f2.call(n);
}
var h2 = "[object Null]", p2 = "[object Undefined]", Sc = cr ? cr.toStringTag : void 0;
function Zr(n) {
  return n == null ? n === void 0 ? p2 : h2 : Sc && Sc in Object(n) ? l2(n) : d2(n);
}
function vh(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var g2 = "[object AsyncFunction]", v2 = "[object Function]", _2 = "[object GeneratorFunction]", m2 = "[object Proxy]";
function _h(n) {
  if (!vh(n))
    return !1;
  var e = Zr(n);
  return e == v2 || e == _2 || e == g2 || e == m2;
}
var Vs = on["__core-js_shared__"], Tc = function() {
  var n = /[^.]+$/.exec(Vs && Vs.keys && Vs.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function b2(n) {
  return !!Tc && Tc in n;
}
var y2 = Function.prototype, w2 = y2.toString;
function Un(n) {
  if (n != null) {
    try {
      return w2.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var x2 = /[\\^$.*+?()[\]{}|]/g, C2 = /^\[object .+?Constructor\]$/, S2 = Function.prototype, T2 = Object.prototype, k2 = S2.toString, A2 = T2.hasOwnProperty, E2 = RegExp(
  "^" + k2.call(A2).replace(x2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function O2(n) {
  if (!vh(n) || b2(n))
    return !1;
  var e = _h(n) ? E2 : C2;
  return e.test(Un(n));
}
function $2(n, e) {
  return n == null ? void 0 : n[e];
}
function pr(n, e) {
  var r = $2(n, e);
  return O2(r) ? r : void 0;
}
var Wr = pr(Object, "create");
function P2() {
  this.__data__ = Wr ? Wr(null) : {}, this.size = 0;
}
function R2(n) {
  var e = this.has(n) && delete this.__data__[n];
  return this.size -= e ? 1 : 0, e;
}
var F2 = "__lodash_hash_undefined__", L2 = Object.prototype, D2 = L2.hasOwnProperty;
function M2(n) {
  var e = this.__data__;
  if (Wr) {
    var r = e[n];
    return r === F2 ? void 0 : r;
  }
  return D2.call(e, n) ? e[n] : void 0;
}
var I2 = Object.prototype, N2 = I2.hasOwnProperty;
function B2(n) {
  var e = this.__data__;
  return Wr ? e[n] !== void 0 : N2.call(e, n);
}
var W2 = "__lodash_hash_undefined__";
function z2(n, e) {
  var r = this.__data__;
  return this.size += this.has(n) ? 0 : 1, r[n] = Wr && e === void 0 ? W2 : e, this;
}
function Bn(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.clear(); ++e < r; ) {
    var a = n[e];
    this.set(a[0], a[1]);
  }
}
Bn.prototype.clear = P2;
Bn.prototype.delete = R2;
Bn.prototype.get = M2;
Bn.prototype.has = B2;
Bn.prototype.set = z2;
function U2() {
  this.__data__ = [], this.size = 0;
}
function mh(n, e) {
  return n === e || n !== n && e !== e;
}
function fa(n, e) {
  for (var r = n.length; r--; )
    if (mh(n[r][0], e))
      return r;
  return -1;
}
var H2 = Array.prototype, j2 = H2.splice;
function q2(n) {
  var e = this.__data__, r = fa(e, n);
  if (r < 0)
    return !1;
  var a = e.length - 1;
  return r == a ? e.pop() : j2.call(e, r, 1), --this.size, !0;
}
function G2(n) {
  var e = this.__data__, r = fa(e, n);
  return r < 0 ? void 0 : e[r][1];
}
function Y2(n) {
  return fa(this.__data__, n) > -1;
}
function X2(n, e) {
  var r = this.__data__, a = fa(r, n);
  return a < 0 ? (++this.size, r.push([n, e])) : r[a][1] = e, this;
}
function un(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.clear(); ++e < r; ) {
    var a = n[e];
    this.set(a[0], a[1]);
  }
}
un.prototype.clear = U2;
un.prototype.delete = q2;
un.prototype.get = G2;
un.prototype.has = Y2;
un.prototype.set = X2;
var zr = pr(on, "Map");
function K2() {
  this.size = 0, this.__data__ = {
    hash: new Bn(),
    map: new (zr || un)(),
    string: new Bn()
  };
}
function V2(n) {
  var e = typeof n;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function da(n, e) {
  var r = n.__data__;
  return V2(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Z2(n) {
  var e = da(this, n).delete(n);
  return this.size -= e ? 1 : 0, e;
}
function J2(n) {
  return da(this, n).get(n);
}
function Q2(n) {
  return da(this, n).has(n);
}
function ey(n, e) {
  var r = da(this, n), a = r.size;
  return r.set(n, e), this.size += r.size == a ? 0 : 1, this;
}
function Hn(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.clear(); ++e < r; ) {
    var a = n[e];
    this.set(a[0], a[1]);
  }
}
Hn.prototype.clear = K2;
Hn.prototype.delete = Z2;
Hn.prototype.get = J2;
Hn.prototype.has = Q2;
Hn.prototype.set = ey;
var ty = "__lodash_hash_undefined__";
function ny(n) {
  return this.__data__.set(n, ty), this;
}
function ry(n) {
  return this.__data__.has(n);
}
function Ur(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.__data__ = new Hn(); ++e < r; )
    this.add(n[e]);
}
Ur.prototype.add = Ur.prototype.push = ny;
Ur.prototype.has = ry;
function iy(n, e, r, a) {
  for (var o = n.length, u = r + (a ? 1 : -1); a ? u-- : ++u < o; )
    if (e(n[u], u, n))
      return u;
  return -1;
}
function ay(n) {
  return n !== n;
}
function sy(n, e, r) {
  for (var a = r - 1, o = n.length; ++a < o; )
    if (n[a] === e)
      return a;
  return -1;
}
function oy(n, e, r) {
  return e === e ? sy(n, e, r) : iy(n, ay, r);
}
function uy(n, e) {
  var r = n == null ? 0 : n.length;
  return !!r && oy(n, e, 0) > -1;
}
function ly(n, e, r) {
  for (var a = -1, o = n == null ? 0 : n.length; ++a < o; )
    if (r(e, n[a]))
      return !0;
  return !1;
}
function bh(n, e) {
  return n.has(e);
}
var lr = pr(on, "Set");
function cy() {
}
function Bo(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(a) {
    r[++e] = a;
  }), r;
}
var fy = 1 / 0, dy = lr && 1 / Bo(new lr([, -0]))[1] == fy ? function(n) {
  return new lr(n);
} : cy, hy = 200;
function py(n, e, r) {
  var a = -1, o = uy, u = n.length, c = !0, h = [], m = h;
  if (r)
    c = !1, o = ly;
  else if (u >= hy) {
    var b = e ? null : dy(n);
    if (b)
      return Bo(b);
    c = !1, o = bh, m = new Ur();
  } else
    m = e ? [] : h;
  e:
    for (; ++a < u; ) {
      var T = n[a], O = e ? e(T) : T;
      if (T = r || T !== 0 ? T : 0, c && O === O) {
        for (var R = m.length; R--; )
          if (m[R] === O)
            continue e;
        e && m.push(O), h.push(T);
      } else
        o(m, O, r) || (m !== h && m.push(O), h.push(T));
    }
  return h;
}
function gy(n, e) {
  return e = typeof e == "function" ? e : void 0, n && n.length ? py(n, void 0, e) : [];
}
const vy = Ot.extend({
  props: {
    width: Number,
    height: Number,
    title: String,
    interactive: Boolean
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    }
  }
});
function Be(n, e, r, a, o, u, c, h) {
  var m = typeof n == "function" ? n.options : n;
  e && (m.render = e, m.staticRenderFns = r, m._compiled = !0), a && (m.functional = !0), u && (m._scopeId = "data-v-" + u);
  var b;
  if (c ? (b = function(R) {
    R = R || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !R && typeof __VUE_SSR_CONTEXT__ < "u" && (R = __VUE_SSR_CONTEXT__), o && o.call(this, R), R && R._registeredComponents && R._registeredComponents.add(c);
  }, m._ssrRegister = b) : o && (b = h ? function() {
    o.call(
      this,
      (m.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), b)
    if (m.functional) {
      m._injectStyles = b;
      var T = m.render;
      m.render = function(L, $) {
        return b.call($), T(L, $);
      };
    } else {
      var O = m.beforeCreate;
      m.beforeCreate = O ? [].concat(O, b) : [b];
    }
  return {
    exports: n,
    options: m
  };
}
var _y = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("svg", { attrs: { viewBox: e.viewBox, xmlns: "http://www.w3.org/2000/svg" } }, [e.title ? r("title", [e._v(e._s(e.title))]) : e._e(), r("foreignObject", { attrs: { x: "0", y: "0", width: `${e.width}`, height: `${e.height}` } }, [r("div", { staticClass: "relative h-full", class: !e.interactive && "select-none", attrs: { xmlns: "http://www.w3.org/1999/xhtml" } }, [e._t("default"), e.interactive ? e._e() : r("div", e._g({ staticClass: "absolute inset-0 w-full h-full" }, e.$listeners))], 2)])]);
}, my = [], by = /* @__PURE__ */ Be(
  vy,
  _y,
  my,
  !1,
  null,
  null,
  null,
  null
);
const yy = by.exports, wy = Ot.extend({
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    type: {
      type: String,
      default: "block"
    }
  },
  data() {
    return {
      loading: !0
    };
  },
  computed: {
    previewPath() {
      const n = new URL(location.href);
      return n.searchParams.set("inspector-preview", "true"), n.searchParams.set("inspector-type", this.type), n.toString();
    }
  },
  methods: {
    handleLoad() {
      this.loading = !1, this.$emit("load");
    }
  }
});
var xy = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "preview-paper" }, [e.loading ? r("div", { staticClass: "loading" }, [e._v("Loading Preview")]) : e._e(), r("iframe", { key: e.previewPath, attrs: { width: e.width, height: e.height, src: e.previewPath }, on: { load: e.handleLoad } })]);
}, Cy = [], Sy = /* @__PURE__ */ Be(
  wy,
  xy,
  Cy,
  !1,
  null,
  "f33b857c",
  null,
  null
);
const Ty = Sy.exports, ky = Ot.extend({
  components: { Imageify: yy, PreviewFrame: Ty },
  props: {
    path: Object,
    width: Number,
    height: Number,
    interactive: Boolean,
    type: String
  }
});
var Ay = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("Imageify", { attrs: { interactive: e.interactive, width: e.width, height: e.height } }, [r("PreviewFrame", { attrs: { path: e.path, width: `${e.width}px`, height: `${e.height}px`, type: e.type } })], 1);
}, Ey = [], Oy = /* @__PURE__ */ Be(
  ky,
  Ay,
  Ey,
  !1,
  null,
  null,
  null,
  null
);
const $y = Oy.exports;
function Py() {
  this.__data__ = new un(), this.size = 0;
}
function Ry(n) {
  var e = this.__data__, r = e.delete(n);
  return this.size = e.size, r;
}
function Fy(n) {
  return this.__data__.get(n);
}
function Ly(n) {
  return this.__data__.has(n);
}
var Dy = 200;
function My(n, e) {
  var r = this.__data__;
  if (r instanceof un) {
    var a = r.__data__;
    if (!zr || a.length < Dy - 1)
      return a.push([n, e]), this.size = ++r.size, this;
    r = this.__data__ = new Hn(a);
  }
  return r.set(n, e), this.size = r.size, this;
}
function xn(n) {
  var e = this.__data__ = new un(n);
  this.size = e.size;
}
xn.prototype.clear = Py;
xn.prototype.delete = Ry;
xn.prototype.get = Fy;
xn.prototype.has = Ly;
xn.prototype.set = My;
function Iy(n, e) {
  for (var r = -1, a = n == null ? 0 : n.length; ++r < a; )
    if (e(n[r], r, n))
      return !0;
  return !1;
}
var Ny = 1, By = 2;
function yh(n, e, r, a, o, u) {
  var c = r & Ny, h = n.length, m = e.length;
  if (h != m && !(c && m > h))
    return !1;
  var b = u.get(n), T = u.get(e);
  if (b && T)
    return b == e && T == n;
  var O = -1, R = !0, L = r & By ? new Ur() : void 0;
  for (u.set(n, e), u.set(e, n); ++O < h; ) {
    var $ = n[O], q = e[O];
    if (a)
      var G = c ? a(q, $, O, e, n, u) : a($, q, O, n, e, u);
    if (G !== void 0) {
      if (G)
        continue;
      R = !1;
      break;
    }
    if (L) {
      if (!Iy(e, function(j, ne) {
        if (!bh(L, ne) && ($ === j || o($, j, r, a, u)))
          return L.push(ne);
      })) {
        R = !1;
        break;
      }
    } else if (!($ === q || o($, q, r, a, u))) {
      R = !1;
      break;
    }
  }
  return u.delete(n), u.delete(e), R;
}
var Wy = on.Uint8Array;
const kc = Wy;
function zy(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(a, o) {
    r[++e] = [o, a];
  }), r;
}
var Uy = 1, Hy = 2, jy = "[object Boolean]", qy = "[object Date]", Gy = "[object Error]", Yy = "[object Map]", Xy = "[object Number]", Ky = "[object RegExp]", Vy = "[object Set]", Zy = "[object String]", Jy = "[object Symbol]", Qy = "[object ArrayBuffer]", ew = "[object DataView]", Ac = cr ? cr.prototype : void 0, Zs = Ac ? Ac.valueOf : void 0;
function tw(n, e, r, a, o, u, c) {
  switch (r) {
    case ew:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case Qy:
      return !(n.byteLength != e.byteLength || !u(new kc(n), new kc(e)));
    case jy:
    case qy:
    case Xy:
      return mh(+n, +e);
    case Gy:
      return n.name == e.name && n.message == e.message;
    case Ky:
    case Zy:
      return n == e + "";
    case Yy:
      var h = zy;
    case Vy:
      var m = a & Uy;
      if (h || (h = Bo), n.size != e.size && !m)
        return !1;
      var b = c.get(n);
      if (b)
        return b == e;
      a |= Hy, c.set(n, e);
      var T = yh(h(n), h(e), a, o, u, c);
      return c.delete(n), T;
    case Jy:
      if (Zs)
        return Zs.call(n) == Zs.call(e);
  }
  return !1;
}
function nw(n, e) {
  for (var r = -1, a = e.length, o = n.length; ++r < a; )
    n[o + r] = e[r];
  return n;
}
var Qi = Array.isArray;
function rw(n, e, r) {
  var a = e(n);
  return Qi(n) ? a : nw(a, r(n));
}
function iw(n, e) {
  for (var r = -1, a = n == null ? 0 : n.length, o = 0, u = []; ++r < a; ) {
    var c = n[r];
    e(c, r, n) && (u[o++] = c);
  }
  return u;
}
function aw() {
  return [];
}
var sw = Object.prototype, ow = sw.propertyIsEnumerable, Ec = Object.getOwnPropertySymbols, uw = Ec ? function(n) {
  return n == null ? [] : (n = Object(n), iw(Ec(n), function(e) {
    return ow.call(n, e);
  }));
} : aw;
const lw = uw;
function cw(n, e) {
  for (var r = -1, a = Array(n); ++r < n; )
    a[r] = e(r);
  return a;
}
function Hr(n) {
  return n != null && typeof n == "object";
}
var fw = "[object Arguments]";
function Oc(n) {
  return Hr(n) && Zr(n) == fw;
}
var wh = Object.prototype, dw = wh.hasOwnProperty, hw = wh.propertyIsEnumerable, pw = Oc(/* @__PURE__ */ function() {
  return arguments;
}()) ? Oc : function(n) {
  return Hr(n) && dw.call(n, "callee") && !hw.call(n, "callee");
};
function gw() {
  return !1;
}
var xh = typeof exports == "object" && exports && !exports.nodeType && exports, $c = xh && typeof module == "object" && module && !module.nodeType && module, vw = $c && $c.exports === xh, Pc = vw ? on.Buffer : void 0, _w = Pc ? Pc.isBuffer : void 0, yo = _w || gw, mw = 9007199254740991, bw = /^(?:0|[1-9]\d*)$/;
function yw(n, e) {
  var r = typeof n;
  return e = e ?? mw, !!e && (r == "number" || r != "symbol" && bw.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
var ww = 9007199254740991;
function Ch(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ww;
}
var xw = "[object Arguments]", Cw = "[object Array]", Sw = "[object Boolean]", Tw = "[object Date]", kw = "[object Error]", Aw = "[object Function]", Ew = "[object Map]", Ow = "[object Number]", $w = "[object Object]", Pw = "[object RegExp]", Rw = "[object Set]", Fw = "[object String]", Lw = "[object WeakMap]", Dw = "[object ArrayBuffer]", Mw = "[object DataView]", Iw = "[object Float32Array]", Nw = "[object Float64Array]", Bw = "[object Int8Array]", Ww = "[object Int16Array]", zw = "[object Int32Array]", Uw = "[object Uint8Array]", Hw = "[object Uint8ClampedArray]", jw = "[object Uint16Array]", qw = "[object Uint32Array]", ye = {};
ye[Iw] = ye[Nw] = ye[Bw] = ye[Ww] = ye[zw] = ye[Uw] = ye[Hw] = ye[jw] = ye[qw] = !0;
ye[xw] = ye[Cw] = ye[Dw] = ye[Sw] = ye[Mw] = ye[Tw] = ye[kw] = ye[Aw] = ye[Ew] = ye[Ow] = ye[$w] = ye[Pw] = ye[Rw] = ye[Fw] = ye[Lw] = !1;
function Gw(n) {
  return Hr(n) && Ch(n.length) && !!ye[Zr(n)];
}
function Yw(n) {
  return function(e) {
    return n(e);
  };
}
var Sh = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Sh && typeof module == "object" && module && !module.nodeType && module, Xw = Br && Br.exports === Sh, Js = Xw && ph.process, Rc = function() {
  try {
    var n = Br && Br.require && Br.require("util").types;
    return n || Js && Js.binding && Js.binding("util");
  } catch {
  }
}(), Fc = Rc && Rc.isTypedArray, Th = Fc ? Yw(Fc) : Gw, Kw = Object.prototype, Vw = Kw.hasOwnProperty;
function Zw(n, e) {
  var r = Qi(n), a = !r && pw(n), o = !r && !a && yo(n), u = !r && !a && !o && Th(n), c = r || a || o || u, h = c ? cw(n.length, String) : [], m = h.length;
  for (var b in n)
    (e || Vw.call(n, b)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
    yw(b, m))) && h.push(b);
  return h;
}
var Jw = Object.prototype;
function Qw(n) {
  var e = n && n.constructor, r = typeof e == "function" && e.prototype || Jw;
  return n === r;
}
function ex(n, e) {
  return function(r) {
    return n(e(r));
  };
}
var tx = ex(Object.keys, Object), nx = Object.prototype, rx = nx.hasOwnProperty;
function ix(n) {
  if (!Qw(n))
    return tx(n);
  var e = [];
  for (var r in Object(n))
    rx.call(n, r) && r != "constructor" && e.push(r);
  return e;
}
function ax(n) {
  return n != null && Ch(n.length) && !_h(n);
}
function sx(n) {
  return ax(n) ? Zw(n) : ix(n);
}
function Lc(n) {
  return rw(n, sx, lw);
}
var ox = 1, ux = Object.prototype, lx = ux.hasOwnProperty;
function cx(n, e, r, a, o, u) {
  var c = r & ox, h = Lc(n), m = h.length, b = Lc(e), T = b.length;
  if (m != T && !c)
    return !1;
  for (var O = m; O--; ) {
    var R = h[O];
    if (!(c ? R in e : lx.call(e, R)))
      return !1;
  }
  var L = u.get(n), $ = u.get(e);
  if (L && $)
    return L == e && $ == n;
  var q = !0;
  u.set(n, e), u.set(e, n);
  for (var G = c; ++O < m; ) {
    R = h[O];
    var j = n[R], ne = e[R];
    if (a)
      var le = c ? a(ne, j, R, e, n, u) : a(j, ne, R, n, e, u);
    if (!(le === void 0 ? j === ne || o(j, ne, r, a, u) : le)) {
      q = !1;
      break;
    }
    G || (G = R == "constructor");
  }
  if (q && !G) {
    var Te = n.constructor, J = e.constructor;
    Te != J && "constructor" in n && "constructor" in e && !(typeof Te == "function" && Te instanceof Te && typeof J == "function" && J instanceof J) && (q = !1);
  }
  return u.delete(n), u.delete(e), q;
}
var wo = pr(on, "DataView"), xo = pr(on, "Promise"), Co = pr(on, "WeakMap"), Dc = "[object Map]", fx = "[object Object]", Mc = "[object Promise]", Ic = "[object Set]", Nc = "[object WeakMap]", Bc = "[object DataView]", dx = Un(wo), hx = Un(zr), px = Un(xo), gx = Un(lr), vx = Un(Co), Dn = Zr;
(wo && Dn(new wo(new ArrayBuffer(1))) != Bc || zr && Dn(new zr()) != Dc || xo && Dn(xo.resolve()) != Mc || lr && Dn(new lr()) != Ic || Co && Dn(new Co()) != Nc) && (Dn = function(n) {
  var e = Zr(n), r = e == fx ? n.constructor : void 0, a = r ? Un(r) : "";
  if (a)
    switch (a) {
      case dx:
        return Bc;
      case hx:
        return Dc;
      case px:
        return Mc;
      case gx:
        return Ic;
      case vx:
        return Nc;
    }
  return e;
});
const Wc = Dn;
var _x = 1, zc = "[object Arguments]", Uc = "[object Array]", ji = "[object Object]", mx = Object.prototype, Hc = mx.hasOwnProperty;
function bx(n, e, r, a, o, u) {
  var c = Qi(n), h = Qi(e), m = c ? Uc : Wc(n), b = h ? Uc : Wc(e);
  m = m == zc ? ji : m, b = b == zc ? ji : b;
  var T = m == ji, O = b == ji, R = m == b;
  if (R && yo(n)) {
    if (!yo(e))
      return !1;
    c = !0, T = !1;
  }
  if (R && !T)
    return u || (u = new xn()), c || Th(n) ? yh(n, e, r, a, o, u) : tw(n, e, m, r, a, o, u);
  if (!(r & _x)) {
    var L = T && Hc.call(n, "__wrapped__"), $ = O && Hc.call(e, "__wrapped__");
    if (L || $) {
      var q = L ? n.value() : n, G = $ ? e.value() : e;
      return u || (u = new xn()), o(q, G, r, a, u);
    }
  }
  return R ? (u || (u = new xn()), cx(n, e, r, a, o, u)) : !1;
}
function kh(n, e, r, a, o) {
  return n === e ? !0 : n == null || e == null || !Hr(n) && !Hr(e) ? n !== n && e !== e : bx(n, e, r, a, kh, o);
}
function yx(n, e) {
  return kh(n, e);
}
function wx(n, e) {
  if (n.match(/^[a-z]+:\/\//i))
    return n;
  if (n.match(/^\/\//))
    return window.location.protocol + n;
  if (n.match(/^[a-z]+:/i))
    return n;
  const r = document.implementation.createHTMLDocument(), a = r.createElement("base"), o = r.createElement("a");
  return r.head.appendChild(a), r.body.appendChild(o), e && (a.href = e), o.href = n, o.href;
}
const xx = /* @__PURE__ */ (() => {
  let n = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (n += 1, `u${e()}${n}`);
})();
function sn(n) {
  const e = [];
  for (let r = 0, a = n.length; r < a; r++)
    e.push(n[r]);
  return e;
}
function ea(n, e) {
  const a = (n.ownerDocument.defaultView || window).getComputedStyle(n).getPropertyValue(e);
  return a ? parseFloat(a.replace("px", "")) : 0;
}
function Cx(n) {
  const e = ea(n, "border-left-width"), r = ea(n, "border-right-width");
  return n.clientWidth + e + r;
}
function Sx(n) {
  const e = ea(n, "border-top-width"), r = ea(n, "border-bottom-width");
  return n.clientHeight + e + r;
}
function Ah(n, e = {}) {
  const r = e.width || Cx(n), a = e.height || Sx(n);
  return { width: r, height: a };
}
function Tx() {
  let n, e;
  try {
    e = process;
  } catch {
  }
  const r = e && e.env ? e.env.devicePixelRatio : null;
  return r && (n = parseInt(r, 10), Number.isNaN(n) && (n = 1)), n || window.devicePixelRatio || 1;
}
const dt = 16384;
function kx(n) {
  (n.width > dt || n.height > dt) && (n.width > dt && n.height > dt ? n.width > n.height ? (n.height *= dt / n.width, n.width = dt) : (n.width *= dt / n.height, n.height = dt) : n.width > dt ? (n.height *= dt / n.width, n.width = dt) : (n.width *= dt / n.height, n.height = dt));
}
function Ax(n, e = {}) {
  return n.toBlob ? new Promise((r) => {
    n.toBlob(r, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
  }) : new Promise((r) => {
    const a = window.atob(n.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), o = a.length, u = new Uint8Array(o);
    for (let c = 0; c < o; c += 1)
      u[c] = a.charCodeAt(c);
    r(new Blob([u], {
      type: e.type ? e.type : "image/png"
    }));
  });
}
function ta(n) {
  return new Promise((e, r) => {
    const a = new Image();
    a.decode = () => e(a), a.onload = () => e(a), a.onerror = r, a.crossOrigin = "anonymous", a.decoding = "async", a.src = n;
  });
}
async function Ex(n) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(n)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Ox(n, e, r) {
  const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), u = document.createElementNS(a, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${e} ${r}`), u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("externalResourcesRequired", "true"), o.appendChild(u), u.appendChild(n), Ex(o);
}
const tt = (n, e) => {
  if (n instanceof e)
    return !0;
  const r = Object.getPrototypeOf(n);
  return r === null ? !1 : r.constructor.name === e.name || tt(r, e);
};
function $x(n) {
  const e = n.getPropertyValue("content");
  return `${n.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Px(n) {
  return sn(n).map((e) => {
    const r = n.getPropertyValue(e), a = n.getPropertyPriority(e);
    return `${e}: ${r}${a ? " !important" : ""};`;
  }).join(" ");
}
function Rx(n, e, r) {
  const a = `.${n}:${e}`, o = r.cssText ? $x(r) : Px(r);
  return document.createTextNode(`${a}{${o}}`);
}
function jc(n, e, r) {
  const a = window.getComputedStyle(n, r), o = a.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const u = xx();
  try {
    e.className = `${e.className} ${u}`;
  } catch {
    return;
  }
  const c = document.createElement("style");
  c.appendChild(Rx(u, r, a)), e.appendChild(c);
}
function Fx(n, e) {
  jc(n, e, ":before"), jc(n, e, ":after");
}
const qc = "application/font-woff", Gc = "image/jpeg", Lx = {
  woff: qc,
  woff2: qc,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Gc,
  jpeg: Gc,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Dx(n) {
  const e = /\.([^./]*?)$/g.exec(n);
  return e ? e[1] : "";
}
function Wo(n) {
  const e = Dx(n).toLowerCase();
  return Lx[e] || "";
}
function Mx(n) {
  return n.split(/,/)[1];
}
function So(n) {
  return n.search(/^(data:)/) !== -1;
}
function Eh(n, e) {
  return `data:${e};base64,${n}`;
}
async function Oh(n, e, r) {
  const a = await fetch(n, e);
  if (a.status === 404)
    throw new Error(`Resource "${a.url}" not found`);
  const o = await a.blob();
  return new Promise((u, c) => {
    const h = new FileReader();
    h.onerror = c, h.onloadend = () => {
      try {
        u(r({ res: a, result: h.result }));
      } catch (m) {
        c(m);
      }
    }, h.readAsDataURL(o);
  });
}
const Qs = {};
function Ix(n, e, r) {
  let a = n.replace(/\?.*/, "");
  return r && (a = n), /ttf|otf|eot|woff2?/i.test(a) && (a = a.replace(/.*\//, "")), e ? `[${e}]${a}` : a;
}
async function zo(n, e, r) {
  const a = Ix(n, e, r.includeQueryParams);
  if (Qs[a] != null)
    return Qs[a];
  r.cacheBust && (n += (/\?/.test(n) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const u = await Oh(n, r.fetchRequestInit, ({ res: c, result: h }) => (e || (e = c.headers.get("Content-Type") || ""), Mx(h)));
    o = Eh(u, e);
  } catch (u) {
    o = r.imagePlaceholder || "";
    let c = `Failed to fetch resource: ${n}`;
    u && (c = typeof u == "string" ? u : u.message), c && console.warn(c);
  }
  return Qs[a] = o, o;
}
async function Nx(n) {
  const e = n.toDataURL();
  return e === "data:," ? n.cloneNode(!1) : ta(e);
}
async function Bx(n, e) {
  if (n.currentSrc) {
    const u = document.createElement("canvas"), c = u.getContext("2d");
    u.width = n.clientWidth, u.height = n.clientHeight, c == null || c.drawImage(n, 0, 0, u.width, u.height);
    const h = u.toDataURL();
    return ta(h);
  }
  const r = n.poster, a = Wo(r), o = await zo(r, a, e);
  return ta(o);
}
async function Wx(n) {
  var e;
  try {
    if (!((e = n == null ? void 0 : n.contentDocument) === null || e === void 0) && e.body)
      return await ha(n.contentDocument.body, {}, !0);
  } catch {
  }
  return n.cloneNode(!1);
}
async function zx(n, e) {
  return tt(n, HTMLCanvasElement) ? Nx(n) : tt(n, HTMLVideoElement) ? Bx(n, e) : tt(n, HTMLIFrameElement) ? Wx(n) : n.cloneNode(!1);
}
const Ux = (n) => n.tagName != null && n.tagName.toUpperCase() === "SLOT";
async function Hx(n, e, r) {
  var a, o;
  let u = [];
  return Ux(n) && n.assignedNodes ? u = sn(n.assignedNodes()) : tt(n, HTMLIFrameElement) && (!((a = n.contentDocument) === null || a === void 0) && a.body) ? u = sn(n.contentDocument.body.childNodes) : u = sn(((o = n.shadowRoot) !== null && o !== void 0 ? o : n).childNodes), u.length === 0 || tt(n, HTMLVideoElement) || await u.reduce((c, h) => c.then(() => ha(h, r)).then((m) => {
    m && e.appendChild(m);
  }), Promise.resolve()), e;
}
function jx(n, e) {
  const r = e.style;
  if (!r)
    return;
  const a = window.getComputedStyle(n);
  a.cssText ? (r.cssText = a.cssText, r.transformOrigin = a.transformOrigin) : sn(a).forEach((o) => {
    let u = a.getPropertyValue(o);
    o === "font-size" && u.endsWith("px") && (u = `${Math.floor(parseFloat(u.substring(0, u.length - 2))) - 0.1}px`), tt(n, HTMLIFrameElement) && o === "display" && u === "inline" && (u = "block"), o === "d" && e.getAttribute("d") && (u = `path(${e.getAttribute("d")})`), r.setProperty(o, u, a.getPropertyPriority(o));
  });
}
function qx(n, e) {
  tt(n, HTMLTextAreaElement) && (e.innerHTML = n.value), tt(n, HTMLInputElement) && e.setAttribute("value", n.value);
}
function Gx(n, e) {
  if (tt(n, HTMLSelectElement)) {
    const r = e, a = Array.from(r.children).find((o) => n.value === o.getAttribute("value"));
    a && a.setAttribute("selected", "");
  }
}
function Yx(n, e) {
  return tt(e, Element) && (jx(n, e), Fx(n, e), qx(n, e), Gx(n, e)), e;
}
async function Xx(n, e) {
  const r = n.querySelectorAll ? n.querySelectorAll("use") : [];
  if (r.length === 0)
    return n;
  const a = {};
  for (let u = 0; u < r.length; u++) {
    const h = r[u].getAttribute("xlink:href");
    if (h) {
      const m = n.querySelector(h), b = document.querySelector(h);
      !m && b && !a[h] && (a[h] = await ha(b, e, !0));
    }
  }
  const o = Object.values(a);
  if (o.length) {
    const u = "http://www.w3.org/1999/xhtml", c = document.createElementNS(u, "svg");
    c.setAttribute("xmlns", u), c.style.position = "absolute", c.style.width = "0", c.style.height = "0", c.style.overflow = "hidden", c.style.display = "none";
    const h = document.createElementNS(u, "defs");
    c.appendChild(h);
    for (let m = 0; m < o.length; m++)
      h.appendChild(o[m]);
    n.appendChild(c);
  }
  return n;
}
async function ha(n, e, r) {
  return !r && e.filter && !e.filter(n) ? null : Promise.resolve(n).then((a) => zx(a, e)).then((a) => Hx(n, a, e)).then((a) => Yx(n, a)).then((a) => Xx(a, e));
}
const $h = /url\((['"]?)([^'"]+?)\1\)/g, Kx = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Vx = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Zx(n) {
  const e = n.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function Jx(n) {
  const e = [];
  return n.replace($h, (r, a, o) => (e.push(o), r)), e.filter((r) => !So(r));
}
async function Qx(n, e, r, a, o) {
  try {
    const u = r ? wx(e, r) : e, c = Wo(e);
    let h;
    if (o) {
      const m = await o(u);
      h = Eh(m, c);
    } else
      h = await zo(u, c, a);
    return n.replace(Zx(e), `$1${h}$3`);
  } catch {
  }
  return n;
}
function eC(n, { preferredFontFormat: e }) {
  return e ? n.replace(Vx, (r) => {
    for (; ; ) {
      const [a, , o] = Kx.exec(r) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${a};`;
    }
  }) : n;
}
function Ph(n) {
  return n.search($h) !== -1;
}
async function Rh(n, e, r) {
  if (!Ph(n))
    return n;
  const a = eC(n, r);
  return Jx(a).reduce((u, c) => u.then((h) => Qx(h, c, e, r)), Promise.resolve(a));
}
async function qi(n, e, r) {
  var a;
  const o = (a = e.style) === null || a === void 0 ? void 0 : a.getPropertyValue(n);
  if (o) {
    const u = await Rh(o, null, r);
    return e.style.setProperty(n, u, e.style.getPropertyPriority(n)), !0;
  }
  return !1;
}
async function tC(n, e) {
  await qi("background", n, e) || await qi("background-image", n, e), await qi("mask", n, e) || await qi("mask-image", n, e);
}
async function nC(n, e) {
  const r = tt(n, HTMLImageElement);
  if (!(r && !So(n.src)) && !(tt(n, SVGImageElement) && !So(n.href.baseVal)))
    return;
  const a = r ? n.src : n.href.baseVal, o = await zo(a, Wo(a), e);
  await new Promise((u, c) => {
    n.onload = u, n.onerror = c;
    const h = n;
    h.decode && (h.decode = u), h.loading === "lazy" && (h.loading = "eager"), r ? (n.srcset = "", n.src = o) : n.href.baseVal = o;
  });
}
async function rC(n, e) {
  const a = sn(n.childNodes).map((o) => Fh(o, e));
  await Promise.all(a).then(() => n);
}
async function Fh(n, e) {
  tt(n, Element) && (await tC(n, e), await nC(n, e), await rC(n, e));
}
function iC(n, e) {
  const { style: r } = n;
  e.backgroundColor && (r.backgroundColor = e.backgroundColor), e.width && (r.width = `${e.width}px`), e.height && (r.height = `${e.height}px`);
  const a = e.style;
  return a != null && Object.keys(a).forEach((o) => {
    r[o] = a[o];
  }), n;
}
const Yc = {};
async function Xc(n) {
  let e = Yc[n];
  if (e != null)
    return e;
  const a = await (await fetch(n)).text();
  return e = { url: n, cssText: a }, Yc[n] = e, e;
}
async function Kc(n, e) {
  let r = n.cssText;
  const a = /url\(["']?([^"')]+)["']?\)/g, u = (r.match(/url\([^)]+\)/g) || []).map(async (c) => {
    let h = c.replace(a, "$1");
    return h.startsWith("https://") || (h = new URL(h, n.url).href), Oh(h, e.fetchRequestInit, ({ result: m }) => (r = r.replace(c, `url(${m})`), [c, m]));
  });
  return Promise.all(u).then(() => r);
}
function Vc(n) {
  if (n == null)
    return [];
  const e = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let a = n.replace(r, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const m = o.exec(a);
    if (m === null)
      break;
    e.push(m[0]);
  }
  a = a.replace(o, "");
  const u = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, c = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", h = new RegExp(c, "gi");
  for (; ; ) {
    let m = u.exec(a);
    if (m === null) {
      if (m = h.exec(a), m === null)
        break;
      u.lastIndex = h.lastIndex;
    } else
      h.lastIndex = u.lastIndex;
    e.push(m[0]);
  }
  return e;
}
async function aC(n, e) {
  const r = [], a = [];
  return n.forEach((o) => {
    if ("cssRules" in o)
      try {
        sn(o.cssRules || []).forEach((u, c) => {
          if (u.type === CSSRule.IMPORT_RULE) {
            let h = c + 1;
            const m = u.href, b = Xc(m).then((T) => Kc(T, e)).then((T) => Vc(T).forEach((O) => {
              try {
                o.insertRule(O, O.startsWith("@import") ? h += 1 : o.cssRules.length);
              } catch (R) {
                console.error("Error inserting rule from remote css", {
                  rule: O,
                  error: R
                });
              }
            })).catch((T) => {
              console.error("Error loading remote css", T.toString());
            });
            a.push(b);
          }
        });
      } catch (u) {
        const c = n.find((h) => h.href == null) || document.styleSheets[0];
        o.href != null && a.push(Xc(o.href).then((h) => Kc(h, e)).then((h) => Vc(h).forEach((m) => {
          c.insertRule(m, o.cssRules.length);
        })).catch((h) => {
          console.error("Error loading remote stylesheet", h);
        })), console.error("Error inlining remote css file", u);
      }
  }), Promise.all(a).then(() => (n.forEach((o) => {
    if ("cssRules" in o)
      try {
        sn(o.cssRules || []).forEach((u) => {
          r.push(u);
        });
      } catch (u) {
        console.error(`Error while reading CSS rules from ${o.href}`, u);
      }
  }), r));
}
function sC(n) {
  return n.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Ph(e.style.getPropertyValue("src")));
}
async function oC(n, e) {
  if (n.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = sn(n.ownerDocument.styleSheets), a = await aC(r, e);
  return sC(a);
}
async function uC(n, e) {
  const r = await oC(n, e);
  return (await Promise.all(r.map((o) => {
    const u = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return Rh(o.cssText, u, e);
  }))).join(`
`);
}
async function lC(n, e) {
  const r = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await uC(n, e);
  if (r) {
    const a = document.createElement("style"), o = document.createTextNode(r);
    a.appendChild(o), n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a);
  }
}
async function cC(n, e = {}) {
  const { width: r, height: a } = Ah(n, e), o = await ha(n, e, !0);
  return await lC(o, e), await Fh(o, e), iC(o, e), await Ox(o, r, a);
}
async function fC(n, e = {}) {
  const { width: r, height: a } = Ah(n, e), o = await cC(n, e), u = await ta(o), c = document.createElement("canvas"), h = c.getContext("2d"), m = e.pixelRatio || Tx(), b = e.canvasWidth || r, T = e.canvasHeight || a;
  return c.width = b * m, c.height = T * m, e.skipAutoScale || kx(c), c.style.width = `${b}`, c.style.height = `${T}`, e.backgroundColor && (h.fillStyle = e.backgroundColor, h.fillRect(0, 0, c.width, c.height)), h.drawImage(u, 0, 0, c.width, c.height), c;
}
async function dC(n, e = {}) {
  const r = await fC(n, e);
  return await Ax(r);
}
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Lh = { exports: {} };
(function(n, e) {
  (function(r, a) {
    n.exports = a();
  })(typeof self < "u" ? self : Qe, function() {
    return function(r) {
      var a = {};
      function o(u) {
        if (a[u])
          return a[u].exports;
        var c = a[u] = { i: u, l: !1, exports: {} };
        return r[u].call(c.exports, c, c.exports, o), c.l = !0, c.exports;
      }
      return o.m = r, o.c = a, o.d = function(u, c, h) {
        o.o(u, c) || Object.defineProperty(u, c, { enumerable: !0, get: h });
      }, o.r = function(u) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
      }, o.t = function(u, c) {
        if (1 & c && (u = o(u)), 8 & c || 4 & c && typeof u == "object" && u && u.__esModule)
          return u;
        var h = /* @__PURE__ */ Object.create(null);
        if (o.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: u }), 2 & c && typeof u != "string")
          for (var m in u)
            o.d(h, m, (function(b) {
              return u[b];
            }).bind(null, m));
        return h;
      }, o.n = function(u) {
        var c = u && u.__esModule ? function() {
          return u.default;
        } : function() {
          return u;
        };
        return o.d(c, "a", c), c;
      }, o.o = function(u, c) {
        return Object.prototype.hasOwnProperty.call(u, c);
      }, o.p = "", o(o.s = 1);
    }([function(r, a, o) {
    }, function(r, a, o) {
      o.r(a);
      var u = typeof window < "u" ? window.HTMLElement : Object, c = { mounted: function() {
        this.enforceFocus && document.addEventListener("focusin", this.focusIn);
      }, methods: { focusIn: function(L) {
        if (this.isActive && L.target !== this.$el && !this.$el.contains(L.target)) {
          var $ = this.container ? this.container : this.isFullPage ? null : this.$el.parentElement;
          (this.isFullPage || $ && $.contains(L.target)) && (L.preventDefault(), this.$el.focus());
        }
      } }, beforeDestroy: function() {
        document.removeEventListener("focusin", this.focusIn);
      } };
      function h(L, $, q, G, j, ne, le, Te) {
        var J, B = typeof L == "function" ? L.options : L;
        if ($ && (B.render = $, B.staticRenderFns = q, B._compiled = !0), G && (B.functional = !0), ne && (B._scopeId = "data-v-" + ne), le ? (J = function(Ee) {
          (Ee = Ee || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (Ee = __VUE_SSR_CONTEXT__), j && j.call(this, Ee), Ee && Ee._registeredComponents && Ee._registeredComponents.add(le);
        }, B._ssrRegister = J) : j && (J = Te ? function() {
          j.call(this, (B.functional ? this.parent : this).$root.$options.shadowRoot);
        } : j), J)
          if (B.functional) {
            B._injectStyles = J;
            var ae = B.render;
            B.render = function(Ee, jn) {
              return J.call(jn), ae(Ee, jn);
            };
          } else {
            var ke = B.beforeCreate;
            B.beforeCreate = ke ? [].concat(ke, J) : [J];
          }
        return { exports: L, options: B };
      }
      var m = h({ name: "spinner", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 64 }, width: { type: Number, default: 64 } } }, function() {
        var L = this.$createElement, $ = this._self._c || L;
        return $("svg", { attrs: { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, stroke: this.color } }, [$("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [$("g", { attrs: { transform: "translate(1 1)", "stroke-width": "2" } }, [$("circle", { attrs: { "stroke-opacity": ".25", cx: "18", cy: "18", r: "18" } }), $("path", { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } }, [$("animateTransform", { attrs: { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.8s", repeatCount: "indefinite" } })], 1)])])]);
      }, [], !1, null, null, null).exports, b = h({ name: "dots", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 240 }, width: { type: Number, default: 60 } } }, function() {
        var L = this.$createElement, $ = this._self._c || L;
        return $("svg", { attrs: { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: this.color, width: this.width, height: this.height } }, [$("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [$("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })]), $("circle", { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" } }, [$("animate", { attrs: { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" } })]), $("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [$("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })])]);
      }, [], !1, null, null, null).exports, T = h({ name: "bars", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 40 }, width: { type: Number, default: 40 } } }, function() {
        var L = this.$createElement, $ = this._self._c || L;
        return $("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", height: this.height, width: this.width, fill: this.color } }, [$("rect", { attrs: { x: "0", y: "13", width: "4", height: "5" } }, [$("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } })]), $("rect", { attrs: { x: "10", y: "13", width: "4", height: "5" } }, [$("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } })]), $("rect", { attrs: { x: "20", y: "13", width: "4", height: "5" } }, [$("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } }), $("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } })])]);
      }, [], !1, null, null, null).exports, O = h({ name: "vue-loading", mixins: [c], props: { active: Boolean, programmatic: Boolean, container: [Object, Function, u], isFullPage: { type: Boolean, default: !0 }, enforceFocus: { type: Boolean, default: !0 }, lockScroll: { type: Boolean, default: !1 }, transition: { type: String, default: "fade" }, canCancel: Boolean, onCancel: { type: Function, default: function() {
      } }, color: String, backgroundColor: String, blur: { type: String, default: "2px" }, opacity: Number, width: Number, height: Number, zIndex: Number, loader: { type: String, default: "spinner" } }, data: function() {
        return { isActive: this.active };
      }, components: { Spinner: m, Dots: b, Bars: T }, beforeMount: function() {
        this.programmatic && (this.container ? (this.isFullPage = !1, this.container.appendChild(this.$el)) : document.body.appendChild(this.$el));
      }, mounted: function() {
        this.programmatic && (this.isActive = !0), document.addEventListener("keyup", this.keyPress);
      }, methods: { cancel: function() {
        this.canCancel && this.isActive && (this.hide(), this.onCancel.apply(null, arguments));
      }, hide: function() {
        var L = this;
        this.$emit("hide"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function() {
          var $;
          L.$destroy(), ($ = L.$el).remove !== void 0 ? $.remove() : $.parentNode.removeChild($);
        }, 150));
      }, disableScroll: function() {
        this.isFullPage && this.lockScroll && document.body.classList.add("vld-shown");
      }, enableScroll: function() {
        this.isFullPage && this.lockScroll && document.body.classList.remove("vld-shown");
      }, keyPress: function(L) {
        L.keyCode === 27 && this.cancel();
      } }, watch: { active: function(L) {
        this.isActive = L;
      }, isActive: function(L) {
        L ? this.disableScroll() : this.enableScroll();
      } }, computed: { bgStyle: function() {
        return { background: this.backgroundColor, opacity: this.opacity, backdropFilter: "blur(".concat(this.blur, ")") };
      } }, beforeDestroy: function() {
        document.removeEventListener("keyup", this.keyPress);
      } }, function() {
        var L = this, $ = L.$createElement, q = L._self._c || $;
        return q("transition", { attrs: { name: L.transition } }, [q("div", { directives: [{ name: "show", rawName: "v-show", value: L.isActive, expression: "isActive" }], staticClass: "vld-overlay is-active", class: { "is-full-page": L.isFullPage }, style: { zIndex: L.zIndex }, attrs: { tabindex: "0", "aria-busy": L.isActive, "aria-label": "Loading" } }, [q("div", { staticClass: "vld-background", style: L.bgStyle, on: { click: function(G) {
          return G.preventDefault(), L.cancel(G);
        } } }), q("div", { staticClass: "vld-icon" }, [L._t("before"), L._t("default", [q(L.loader, { tag: "component", attrs: { color: L.color, width: L.width, height: L.height } })]), L._t("after")], 2)])]);
      }, [], !1, null, null, null).exports, R = function(L) {
        var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return { show: function() {
          var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q, ne = { programmatic: !0 }, le = Object.assign({}, $, G, ne), Te = new (L.extend(O))({ el: document.createElement("div"), propsData: le }), J = Object.assign({}, q, j);
          return Object.keys(J).map(function(B) {
            Te.$slots[B] = J[B];
          }), Te;
        } };
      };
      o(0), O.install = function(L) {
        var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, G = R(L, $, q);
        L.$loading = G, L.prototype.$loading = G;
      }, a.default = O;
    }]).default;
  });
})(Lh);
var hC = Lh.exports;
const pC = /* @__PURE__ */ Jr(hC);
var na = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
na.exports;
(function(n, e) {
  (function() {
    var r, a = "4.17.21", o = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", h = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", b = 500, T = "__lodash_placeholder__", O = 1, R = 2, L = 4, $ = 1, q = 2, G = 1, j = 2, ne = 4, le = 8, Te = 16, J = 32, B = 64, ae = 128, ke = 256, Ee = 512, jn = 30, xa = "...", Ca = 800, Sa = 16, Qr = 1, Ta = 2, gr = 3, Yt = 1 / 0, Bt = 9007199254740991, ei = 17976931348623157e292, ce = NaN, Ue = 4294967295, He = Ue - 1, ka = Ue >>> 1, Aa = [
      ["ary", ae],
      ["bind", G],
      ["bindKey", j],
      ["curry", le],
      ["curryRight", Te],
      ["flip", Ee],
      ["partial", J],
      ["partialRight", B],
      ["rearg", ke]
    ], Fe = "[object Arguments]", Wt = "[object Array]", ti = "[object AsyncFunction]", ln = "[object Boolean]", Me = "[object Date]", $t = "[object DOMException]", qn = "[object Error]", Gn = "[object Function]", g = "[object GeneratorFunction]", w = "[object Map]", _ = "[object Number]", F = "[object Null]", D = "[object Object]", I = "[object Promise]", re = "[object Proxy]", fe = "[object RegExp]", ie = "[object Set]", Le = "[object String]", zt = "[object Symbol]", at = "[object Undefined]", vr = "[object WeakMap]", lp = "[object WeakSet]", _r = "[object ArrayBuffer]", Yn = "[object DataView]", Ea = "[object Float32Array]", Oa = "[object Float64Array]", $a = "[object Int8Array]", Pa = "[object Int16Array]", Ra = "[object Int32Array]", Fa = "[object Uint8Array]", La = "[object Uint8ClampedArray]", Da = "[object Uint16Array]", Ma = "[object Uint32Array]", cp = /\b__p \+= '';/g, fp = /\b(__p \+=) '' \+/g, dp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Xo = /&(?:amp|lt|gt|quot|#39);/g, Ko = /[&<>"']/g, hp = RegExp(Xo.source), pp = RegExp(Ko.source), gp = /<%-([\s\S]+?)%>/g, vp = /<%([\s\S]+?)%>/g, Vo = /<%=([\s\S]+?)%>/g, _p = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mp = /^\w*$/, bp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ia = /[\\^$.*+?()[\]{}|]/g, yp = RegExp(Ia.source), Na = /^\s+/, wp = /\s/, xp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Cp = /\{\n\/\* \[wrapped with (.+)\] \*/, Sp = /,? & /, Tp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, kp = /[()=,{}\[\]\/\s]/, Ap = /\\(\\)?/g, Ep = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zo = /\w*$/, Op = /^[-+]0x[0-9a-f]+$/i, $p = /^0b[01]+$/i, Pp = /^\[object .+?Constructor\]$/, Rp = /^0o[0-7]+$/i, Fp = /^(?:0|[1-9]\d*)$/, Lp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ni = /($^)/, Dp = /['\n\r\u2028\u2029\\]/g, ri = "\\ud800-\\udfff", Mp = "\\u0300-\\u036f", Ip = "\\ufe20-\\ufe2f", Np = "\\u20d0-\\u20ff", Jo = Mp + Ip + Np, Qo = "\\u2700-\\u27bf", eu = "a-z\\xdf-\\xf6\\xf8-\\xff", Bp = "\\xac\\xb1\\xd7\\xf7", Wp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", zp = "\\u2000-\\u206f", Up = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", nu = "\\ufe0e\\ufe0f", ru = Bp + Wp + zp + Up, Ba = "['’]", Hp = "[" + ri + "]", iu = "[" + ru + "]", ii = "[" + Jo + "]", au = "\\d+", jp = "[" + Qo + "]", su = "[" + eu + "]", ou = "[^" + ri + ru + au + Qo + eu + tu + "]", Wa = "\\ud83c[\\udffb-\\udfff]", qp = "(?:" + ii + "|" + Wa + ")", uu = "[^" + ri + "]", za = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ua = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xn = "[" + tu + "]", lu = "\\u200d", cu = "(?:" + su + "|" + ou + ")", Gp = "(?:" + Xn + "|" + ou + ")", fu = "(?:" + Ba + "(?:d|ll|m|re|s|t|ve))?", du = "(?:" + Ba + "(?:D|LL|M|RE|S|T|VE))?", hu = qp + "?", pu = "[" + nu + "]?", Yp = "(?:" + lu + "(?:" + [uu, za, Ua].join("|") + ")" + pu + hu + ")*", Xp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Kp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", gu = pu + hu + Yp, Vp = "(?:" + [jp, za, Ua].join("|") + ")" + gu, Zp = "(?:" + [uu + ii + "?", ii, za, Ua, Hp].join("|") + ")", Jp = RegExp(Ba, "g"), Qp = RegExp(ii, "g"), Ha = RegExp(Wa + "(?=" + Wa + ")|" + Zp + gu, "g"), e0 = RegExp([
      Xn + "?" + su + "+" + fu + "(?=" + [iu, Xn, "$"].join("|") + ")",
      Gp + "+" + du + "(?=" + [iu, Xn + cu, "$"].join("|") + ")",
      Xn + "?" + cu + "+" + fu,
      Xn + "+" + du,
      Kp,
      Xp,
      au,
      Vp
    ].join("|"), "g"), t0 = RegExp("[" + lu + ri + Jo + nu + "]"), n0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, r0 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], i0 = -1, be = {};
    be[Ea] = be[Oa] = be[$a] = be[Pa] = be[Ra] = be[Fa] = be[La] = be[Da] = be[Ma] = !0, be[Fe] = be[Wt] = be[_r] = be[ln] = be[Yn] = be[Me] = be[qn] = be[Gn] = be[w] = be[_] = be[D] = be[fe] = be[ie] = be[Le] = be[vr] = !1;
    var me = {};
    me[Fe] = me[Wt] = me[_r] = me[Yn] = me[ln] = me[Me] = me[Ea] = me[Oa] = me[$a] = me[Pa] = me[Ra] = me[w] = me[_] = me[D] = me[fe] = me[ie] = me[Le] = me[zt] = me[Fa] = me[La] = me[Da] = me[Ma] = !0, me[qn] = me[Gn] = me[vr] = !1;
    var a0 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, s0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, o0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, u0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, l0 = parseFloat, c0 = parseInt, vu = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, f0 = typeof self == "object" && self && self.Object === Object && self, Ie = vu || f0 || Function("return this")(), ja = e && !e.nodeType && e, Sn = ja && !0 && n && !n.nodeType && n, _u = Sn && Sn.exports === ja, qa = _u && vu.process, bt = function() {
      try {
        var x = Sn && Sn.require && Sn.require("util").types;
        return x || qa && qa.binding && qa.binding("util");
      } catch {
      }
    }(), mu = bt && bt.isArrayBuffer, bu = bt && bt.isDate, yu = bt && bt.isMap, wu = bt && bt.isRegExp, xu = bt && bt.isSet, Cu = bt && bt.isTypedArray;
    function st(x, k, S) {
      switch (S.length) {
        case 0:
          return x.call(k);
        case 1:
          return x.call(k, S[0]);
        case 2:
          return x.call(k, S[0], S[1]);
        case 3:
          return x.call(k, S[0], S[1], S[2]);
      }
      return x.apply(k, S);
    }
    function d0(x, k, S, N) {
      for (var Y = -1, se = x == null ? 0 : x.length; ++Y < se; ) {
        var Pe = x[Y];
        k(N, Pe, S(Pe), x);
      }
      return N;
    }
    function yt(x, k) {
      for (var S = -1, N = x == null ? 0 : x.length; ++S < N && k(x[S], S, x) !== !1; )
        ;
      return x;
    }
    function h0(x, k) {
      for (var S = x == null ? 0 : x.length; S-- && k(x[S], S, x) !== !1; )
        ;
      return x;
    }
    function Su(x, k) {
      for (var S = -1, N = x == null ? 0 : x.length; ++S < N; )
        if (!k(x[S], S, x))
          return !1;
      return !0;
    }
    function cn(x, k) {
      for (var S = -1, N = x == null ? 0 : x.length, Y = 0, se = []; ++S < N; ) {
        var Pe = x[S];
        k(Pe, S, x) && (se[Y++] = Pe);
      }
      return se;
    }
    function ai(x, k) {
      var S = x == null ? 0 : x.length;
      return !!S && Kn(x, k, 0) > -1;
    }
    function Ga(x, k, S) {
      for (var N = -1, Y = x == null ? 0 : x.length; ++N < Y; )
        if (S(k, x[N]))
          return !0;
      return !1;
    }
    function we(x, k) {
      for (var S = -1, N = x == null ? 0 : x.length, Y = Array(N); ++S < N; )
        Y[S] = k(x[S], S, x);
      return Y;
    }
    function fn(x, k) {
      for (var S = -1, N = k.length, Y = x.length; ++S < N; )
        x[Y + S] = k[S];
      return x;
    }
    function Ya(x, k, S, N) {
      var Y = -1, se = x == null ? 0 : x.length;
      for (N && se && (S = x[++Y]); ++Y < se; )
        S = k(S, x[Y], Y, x);
      return S;
    }
    function p0(x, k, S, N) {
      var Y = x == null ? 0 : x.length;
      for (N && Y && (S = x[--Y]); Y--; )
        S = k(S, x[Y], Y, x);
      return S;
    }
    function Xa(x, k) {
      for (var S = -1, N = x == null ? 0 : x.length; ++S < N; )
        if (k(x[S], S, x))
          return !0;
      return !1;
    }
    var g0 = Ka("length");
    function v0(x) {
      return x.split("");
    }
    function _0(x) {
      return x.match(Tp) || [];
    }
    function Tu(x, k, S) {
      var N;
      return S(x, function(Y, se, Pe) {
        if (k(Y, se, Pe))
          return N = se, !1;
      }), N;
    }
    function si(x, k, S, N) {
      for (var Y = x.length, se = S + (N ? 1 : -1); N ? se-- : ++se < Y; )
        if (k(x[se], se, x))
          return se;
      return -1;
    }
    function Kn(x, k, S) {
      return k === k ? O0(x, k, S) : si(x, ku, S);
    }
    function m0(x, k, S, N) {
      for (var Y = S - 1, se = x.length; ++Y < se; )
        if (N(x[Y], k))
          return Y;
      return -1;
    }
    function ku(x) {
      return x !== x;
    }
    function Au(x, k) {
      var S = x == null ? 0 : x.length;
      return S ? Za(x, k) / S : ce;
    }
    function Ka(x) {
      return function(k) {
        return k == null ? r : k[x];
      };
    }
    function Va(x) {
      return function(k) {
        return x == null ? r : x[k];
      };
    }
    function Eu(x, k, S, N, Y) {
      return Y(x, function(se, Pe, ve) {
        S = N ? (N = !1, se) : k(S, se, Pe, ve);
      }), S;
    }
    function b0(x, k) {
      var S = x.length;
      for (x.sort(k); S--; )
        x[S] = x[S].value;
      return x;
    }
    function Za(x, k) {
      for (var S, N = -1, Y = x.length; ++N < Y; ) {
        var se = k(x[N]);
        se !== r && (S = S === r ? se : S + se);
      }
      return S;
    }
    function Ja(x, k) {
      for (var S = -1, N = Array(x); ++S < x; )
        N[S] = k(S);
      return N;
    }
    function y0(x, k) {
      return we(k, function(S) {
        return [S, x[S]];
      });
    }
    function Ou(x) {
      return x && x.slice(0, Fu(x) + 1).replace(Na, "");
    }
    function ot(x) {
      return function(k) {
        return x(k);
      };
    }
    function Qa(x, k) {
      return we(k, function(S) {
        return x[S];
      });
    }
    function mr(x, k) {
      return x.has(k);
    }
    function $u(x, k) {
      for (var S = -1, N = x.length; ++S < N && Kn(k, x[S], 0) > -1; )
        ;
      return S;
    }
    function Pu(x, k) {
      for (var S = x.length; S-- && Kn(k, x[S], 0) > -1; )
        ;
      return S;
    }
    function w0(x, k) {
      for (var S = x.length, N = 0; S--; )
        x[S] === k && ++N;
      return N;
    }
    var x0 = Va(a0), C0 = Va(s0);
    function S0(x) {
      return "\\" + u0[x];
    }
    function T0(x, k) {
      return x == null ? r : x[k];
    }
    function Vn(x) {
      return t0.test(x);
    }
    function k0(x) {
      return n0.test(x);
    }
    function A0(x) {
      for (var k, S = []; !(k = x.next()).done; )
        S.push(k.value);
      return S;
    }
    function es(x) {
      var k = -1, S = Array(x.size);
      return x.forEach(function(N, Y) {
        S[++k] = [Y, N];
      }), S;
    }
    function Ru(x, k) {
      return function(S) {
        return x(k(S));
      };
    }
    function dn(x, k) {
      for (var S = -1, N = x.length, Y = 0, se = []; ++S < N; ) {
        var Pe = x[S];
        (Pe === k || Pe === T) && (x[S] = T, se[Y++] = S);
      }
      return se;
    }
    function oi(x) {
      var k = -1, S = Array(x.size);
      return x.forEach(function(N) {
        S[++k] = N;
      }), S;
    }
    function E0(x) {
      var k = -1, S = Array(x.size);
      return x.forEach(function(N) {
        S[++k] = [N, N];
      }), S;
    }
    function O0(x, k, S) {
      for (var N = S - 1, Y = x.length; ++N < Y; )
        if (x[N] === k)
          return N;
      return -1;
    }
    function $0(x, k, S) {
      for (var N = S + 1; N--; )
        if (x[N] === k)
          return N;
      return N;
    }
    function Zn(x) {
      return Vn(x) ? R0(x) : g0(x);
    }
    function Pt(x) {
      return Vn(x) ? F0(x) : v0(x);
    }
    function Fu(x) {
      for (var k = x.length; k-- && wp.test(x.charAt(k)); )
        ;
      return k;
    }
    var P0 = Va(o0);
    function R0(x) {
      for (var k = Ha.lastIndex = 0; Ha.test(x); )
        ++k;
      return k;
    }
    function F0(x) {
      return x.match(Ha) || [];
    }
    function L0(x) {
      return x.match(e0) || [];
    }
    var D0 = function x(k) {
      k = k == null ? Ie : Jn.defaults(Ie.Object(), k, Jn.pick(Ie, r0));
      var S = k.Array, N = k.Date, Y = k.Error, se = k.Function, Pe = k.Math, ve = k.Object, ts = k.RegExp, M0 = k.String, wt = k.TypeError, ui = S.prototype, I0 = se.prototype, Qn = ve.prototype, li = k["__core-js_shared__"], ci = I0.toString, de = Qn.hasOwnProperty, N0 = 0, Lu = function() {
        var t = /[^.]+$/.exec(li && li.keys && li.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), fi = Qn.toString, B0 = ci.call(ve), W0 = Ie._, z0 = ts(
        "^" + ci.call(de).replace(Ia, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), di = _u ? k.Buffer : r, hn = k.Symbol, hi = k.Uint8Array, Du = di ? di.allocUnsafe : r, pi = Ru(ve.getPrototypeOf, ve), Mu = ve.create, Iu = Qn.propertyIsEnumerable, gi = ui.splice, Nu = hn ? hn.isConcatSpreadable : r, br = hn ? hn.iterator : r, Tn = hn ? hn.toStringTag : r, vi = function() {
        try {
          var t = $n(ve, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), U0 = k.clearTimeout !== Ie.clearTimeout && k.clearTimeout, H0 = N && N.now !== Ie.Date.now && N.now, j0 = k.setTimeout !== Ie.setTimeout && k.setTimeout, _i = Pe.ceil, mi = Pe.floor, ns = ve.getOwnPropertySymbols, q0 = di ? di.isBuffer : r, Bu = k.isFinite, G0 = ui.join, Y0 = Ru(ve.keys, ve), Re = Pe.max, We = Pe.min, X0 = N.now, K0 = k.parseInt, Wu = Pe.random, V0 = ui.reverse, rs = $n(k, "DataView"), yr = $n(k, "Map"), is = $n(k, "Promise"), er = $n(k, "Set"), wr = $n(k, "WeakMap"), xr = $n(ve, "create"), bi = wr && new wr(), tr = {}, Z0 = Pn(rs), J0 = Pn(yr), Q0 = Pn(is), eg = Pn(er), tg = Pn(wr), yi = hn ? hn.prototype : r, Cr = yi ? yi.valueOf : r, zu = yi ? yi.toString : r;
      function d(t) {
        if (Ae(t) && !X(t) && !(t instanceof ee)) {
          if (t instanceof xt)
            return t;
          if (de.call(t, "__wrapped__"))
            return Ul(t);
        }
        return new xt(t);
      }
      var nr = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!Ce(i))
            return {};
          if (Mu)
            return Mu(i);
          t.prototype = i;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function wi() {
      }
      function xt(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: gp,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: vp,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Vo,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = wi.prototype, d.prototype.constructor = d, xt.prototype = nr(wi.prototype), xt.prototype.constructor = xt;
      function ee(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ue, this.__views__ = [];
      }
      function ng() {
        var t = new ee(this.__wrapped__);
        return t.__actions__ = Ke(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ke(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ke(this.__views__), t;
      }
      function rg() {
        if (this.__filtered__) {
          var t = new ee(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function ig() {
        var t = this.__wrapped__.value(), i = this.__dir__, s = X(t), l = i < 0, f = s ? t.length : 0, p = vv(0, f, this.__views__), v = p.start, y = p.end, C = y - v, A = l ? y : v - 1, E = this.__iteratees__, P = E.length, M = 0, W = We(C, this.__takeCount__);
        if (!s || !l && f == C && W == C)
          return fl(t, this.__actions__);
        var U = [];
        e:
          for (; C-- && M < W; ) {
            A += i;
            for (var V = -1, H = t[A]; ++V < P; ) {
              var Q = E[V], te = Q.iteratee, ct = Q.type, Ge = te(H);
              if (ct == Ta)
                H = Ge;
              else if (!Ge) {
                if (ct == Qr)
                  continue e;
                break e;
              }
            }
            U[M++] = H;
          }
        return U;
      }
      ee.prototype = nr(wi.prototype), ee.prototype.constructor = ee;
      function kn(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function ag() {
        this.__data__ = xr ? xr(null) : {}, this.size = 0;
      }
      function sg(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function og(t) {
        var i = this.__data__;
        if (xr) {
          var s = i[t];
          return s === m ? r : s;
        }
        return de.call(i, t) ? i[t] : r;
      }
      function ug(t) {
        var i = this.__data__;
        return xr ? i[t] !== r : de.call(i, t);
      }
      function lg(t, i) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = xr && i === r ? m : i, this;
      }
      kn.prototype.clear = ag, kn.prototype.delete = sg, kn.prototype.get = og, kn.prototype.has = ug, kn.prototype.set = lg;
      function Xt(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function cg() {
        this.__data__ = [], this.size = 0;
      }
      function fg(t) {
        var i = this.__data__, s = xi(i, t);
        if (s < 0)
          return !1;
        var l = i.length - 1;
        return s == l ? i.pop() : gi.call(i, s, 1), --this.size, !0;
      }
      function dg(t) {
        var i = this.__data__, s = xi(i, t);
        return s < 0 ? r : i[s][1];
      }
      function hg(t) {
        return xi(this.__data__, t) > -1;
      }
      function pg(t, i) {
        var s = this.__data__, l = xi(s, t);
        return l < 0 ? (++this.size, s.push([t, i])) : s[l][1] = i, this;
      }
      Xt.prototype.clear = cg, Xt.prototype.delete = fg, Xt.prototype.get = dg, Xt.prototype.has = hg, Xt.prototype.set = pg;
      function Kt(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function gg() {
        this.size = 0, this.__data__ = {
          hash: new kn(),
          map: new (yr || Xt)(),
          string: new kn()
        };
      }
      function vg(t) {
        var i = Li(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function _g(t) {
        return Li(this, t).get(t);
      }
      function mg(t) {
        return Li(this, t).has(t);
      }
      function bg(t, i) {
        var s = Li(this, t), l = s.size;
        return s.set(t, i), this.size += s.size == l ? 0 : 1, this;
      }
      Kt.prototype.clear = gg, Kt.prototype.delete = vg, Kt.prototype.get = _g, Kt.prototype.has = mg, Kt.prototype.set = bg;
      function An(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new Kt(); ++i < s; )
          this.add(t[i]);
      }
      function yg(t) {
        return this.__data__.set(t, m), this;
      }
      function wg(t) {
        return this.__data__.has(t);
      }
      An.prototype.add = An.prototype.push = yg, An.prototype.has = wg;
      function Rt(t) {
        var i = this.__data__ = new Xt(t);
        this.size = i.size;
      }
      function xg() {
        this.__data__ = new Xt(), this.size = 0;
      }
      function Cg(t) {
        var i = this.__data__, s = i.delete(t);
        return this.size = i.size, s;
      }
      function Sg(t) {
        return this.__data__.get(t);
      }
      function Tg(t) {
        return this.__data__.has(t);
      }
      function kg(t, i) {
        var s = this.__data__;
        if (s instanceof Xt) {
          var l = s.__data__;
          if (!yr || l.length < o - 1)
            return l.push([t, i]), this.size = ++s.size, this;
          s = this.__data__ = new Kt(l);
        }
        return s.set(t, i), this.size = s.size, this;
      }
      Rt.prototype.clear = xg, Rt.prototype.delete = Cg, Rt.prototype.get = Sg, Rt.prototype.has = Tg, Rt.prototype.set = kg;
      function Uu(t, i) {
        var s = X(t), l = !s && Rn(t), f = !s && !l && mn(t), p = !s && !l && !f && sr(t), v = s || l || f || p, y = v ? Ja(t.length, M0) : [], C = y.length;
        for (var A in t)
          (i || de.call(t, A)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          Qt(A, C))) && y.push(A);
        return y;
      }
      function Hu(t) {
        var i = t.length;
        return i ? t[gs(0, i - 1)] : r;
      }
      function Ag(t, i) {
        return Di(Ke(t), En(i, 0, t.length));
      }
      function Eg(t) {
        return Di(Ke(t));
      }
      function as(t, i, s) {
        (s !== r && !Ft(t[i], s) || s === r && !(i in t)) && Vt(t, i, s);
      }
      function Sr(t, i, s) {
        var l = t[i];
        (!(de.call(t, i) && Ft(l, s)) || s === r && !(i in t)) && Vt(t, i, s);
      }
      function xi(t, i) {
        for (var s = t.length; s--; )
          if (Ft(t[s][0], i))
            return s;
        return -1;
      }
      function Og(t, i, s, l) {
        return pn(t, function(f, p, v) {
          i(l, f, s(f), v);
        }), l;
      }
      function ju(t, i) {
        return t && Ht(i, De(i), t);
      }
      function $g(t, i) {
        return t && Ht(i, Ze(i), t);
      }
      function Vt(t, i, s) {
        i == "__proto__" && vi ? vi(t, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[i] = s;
      }
      function ss(t, i) {
        for (var s = -1, l = i.length, f = S(l), p = t == null; ++s < l; )
          f[s] = p ? r : Ws(t, i[s]);
        return f;
      }
      function En(t, i, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), i !== r && (t = t >= i ? t : i)), t;
      }
      function Ct(t, i, s, l, f, p) {
        var v, y = i & O, C = i & R, A = i & L;
        if (s && (v = f ? s(t, l, f, p) : s(t)), v !== r)
          return v;
        if (!Ce(t))
          return t;
        var E = X(t);
        if (E) {
          if (v = mv(t), !y)
            return Ke(t, v);
        } else {
          var P = ze(t), M = P == Gn || P == g;
          if (mn(t))
            return pl(t, y);
          if (P == D || P == Fe || M && !f) {
            if (v = C || M ? {} : Fl(t), !y)
              return C ? ov(t, $g(v, t)) : sv(t, ju(v, t));
          } else {
            if (!me[P])
              return f ? t : {};
            v = bv(t, P, y);
          }
        }
        p || (p = new Rt());
        var W = p.get(t);
        if (W)
          return W;
        p.set(t, v), uc(t) ? t.forEach(function(H) {
          v.add(Ct(H, i, s, H, t, p));
        }) : sc(t) && t.forEach(function(H, Q) {
          v.set(Q, Ct(H, i, s, Q, t, p));
        });
        var U = A ? C ? ks : Ts : C ? Ze : De, V = E ? r : U(t);
        return yt(V || t, function(H, Q) {
          V && (Q = H, H = t[Q]), Sr(v, Q, Ct(H, i, s, Q, t, p));
        }), v;
      }
      function Pg(t) {
        var i = De(t);
        return function(s) {
          return qu(s, t, i);
        };
      }
      function qu(t, i, s) {
        var l = s.length;
        if (t == null)
          return !l;
        for (t = ve(t); l--; ) {
          var f = s[l], p = i[f], v = t[f];
          if (v === r && !(f in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function Gu(t, i, s) {
        if (typeof t != "function")
          throw new wt(c);
        return Pr(function() {
          t.apply(r, s);
        }, i);
      }
      function Tr(t, i, s, l) {
        var f = -1, p = ai, v = !0, y = t.length, C = [], A = i.length;
        if (!y)
          return C;
        s && (i = we(i, ot(s))), l ? (p = Ga, v = !1) : i.length >= o && (p = mr, v = !1, i = new An(i));
        e:
          for (; ++f < y; ) {
            var E = t[f], P = s == null ? E : s(E);
            if (E = l || E !== 0 ? E : 0, v && P === P) {
              for (var M = A; M--; )
                if (i[M] === P)
                  continue e;
              C.push(E);
            } else
              p(i, P, l) || C.push(E);
          }
        return C;
      }
      var pn = bl(Ut), Yu = bl(us, !0);
      function Rg(t, i) {
        var s = !0;
        return pn(t, function(l, f, p) {
          return s = !!i(l, f, p), s;
        }), s;
      }
      function Ci(t, i, s) {
        for (var l = -1, f = t.length; ++l < f; ) {
          var p = t[l], v = i(p);
          if (v != null && (y === r ? v === v && !lt(v) : s(v, y)))
            var y = v, C = p;
        }
        return C;
      }
      function Fg(t, i, s, l) {
        var f = t.length;
        for (s = K(s), s < 0 && (s = -s > f ? 0 : f + s), l = l === r || l > f ? f : K(l), l < 0 && (l += f), l = s > l ? 0 : cc(l); s < l; )
          t[s++] = i;
        return t;
      }
      function Xu(t, i) {
        var s = [];
        return pn(t, function(l, f, p) {
          i(l, f, p) && s.push(l);
        }), s;
      }
      function Ne(t, i, s, l, f) {
        var p = -1, v = t.length;
        for (s || (s = wv), f || (f = []); ++p < v; ) {
          var y = t[p];
          i > 0 && s(y) ? i > 1 ? Ne(y, i - 1, s, l, f) : fn(f, y) : l || (f[f.length] = y);
        }
        return f;
      }
      var os = yl(), Ku = yl(!0);
      function Ut(t, i) {
        return t && os(t, i, De);
      }
      function us(t, i) {
        return t && Ku(t, i, De);
      }
      function Si(t, i) {
        return cn(i, function(s) {
          return en(t[s]);
        });
      }
      function On(t, i) {
        i = vn(i, t);
        for (var s = 0, l = i.length; t != null && s < l; )
          t = t[jt(i[s++])];
        return s && s == l ? t : r;
      }
      function Vu(t, i, s) {
        var l = i(t);
        return X(t) ? l : fn(l, s(t));
      }
      function je(t) {
        return t == null ? t === r ? at : F : Tn && Tn in ve(t) ? gv(t) : Ev(t);
      }
      function ls(t, i) {
        return t > i;
      }
      function Lg(t, i) {
        return t != null && de.call(t, i);
      }
      function Dg(t, i) {
        return t != null && i in ve(t);
      }
      function Mg(t, i, s) {
        return t >= We(i, s) && t < Re(i, s);
      }
      function cs(t, i, s) {
        for (var l = s ? Ga : ai, f = t[0].length, p = t.length, v = p, y = S(p), C = 1 / 0, A = []; v--; ) {
          var E = t[v];
          v && i && (E = we(E, ot(i))), C = We(E.length, C), y[v] = !s && (i || f >= 120 && E.length >= 120) ? new An(v && E) : r;
        }
        E = t[0];
        var P = -1, M = y[0];
        e:
          for (; ++P < f && A.length < C; ) {
            var W = E[P], U = i ? i(W) : W;
            if (W = s || W !== 0 ? W : 0, !(M ? mr(M, U) : l(A, U, s))) {
              for (v = p; --v; ) {
                var V = y[v];
                if (!(V ? mr(V, U) : l(t[v], U, s)))
                  continue e;
              }
              M && M.push(U), A.push(W);
            }
          }
        return A;
      }
      function Ig(t, i, s, l) {
        return Ut(t, function(f, p, v) {
          i(l, s(f), p, v);
        }), l;
      }
      function kr(t, i, s) {
        i = vn(i, t), t = Il(t, i);
        var l = t == null ? t : t[jt(Tt(i))];
        return l == null ? r : st(l, t, s);
      }
      function Zu(t) {
        return Ae(t) && je(t) == Fe;
      }
      function Ng(t) {
        return Ae(t) && je(t) == _r;
      }
      function Bg(t) {
        return Ae(t) && je(t) == Me;
      }
      function Ar(t, i, s, l, f) {
        return t === i ? !0 : t == null || i == null || !Ae(t) && !Ae(i) ? t !== t && i !== i : Wg(t, i, s, l, Ar, f);
      }
      function Wg(t, i, s, l, f, p) {
        var v = X(t), y = X(i), C = v ? Wt : ze(t), A = y ? Wt : ze(i);
        C = C == Fe ? D : C, A = A == Fe ? D : A;
        var E = C == D, P = A == D, M = C == A;
        if (M && mn(t)) {
          if (!mn(i))
            return !1;
          v = !0, E = !1;
        }
        if (M && !E)
          return p || (p = new Rt()), v || sr(t) ? $l(t, i, s, l, f, p) : hv(t, i, C, s, l, f, p);
        if (!(s & $)) {
          var W = E && de.call(t, "__wrapped__"), U = P && de.call(i, "__wrapped__");
          if (W || U) {
            var V = W ? t.value() : t, H = U ? i.value() : i;
            return p || (p = new Rt()), f(V, H, s, l, p);
          }
        }
        return M ? (p || (p = new Rt()), pv(t, i, s, l, f, p)) : !1;
      }
      function zg(t) {
        return Ae(t) && ze(t) == w;
      }
      function fs(t, i, s, l) {
        var f = s.length, p = f, v = !l;
        if (t == null)
          return !p;
        for (t = ve(t); f--; ) {
          var y = s[f];
          if (v && y[2] ? y[1] !== t[y[0]] : !(y[0] in t))
            return !1;
        }
        for (; ++f < p; ) {
          y = s[f];
          var C = y[0], A = t[C], E = y[1];
          if (v && y[2]) {
            if (A === r && !(C in t))
              return !1;
          } else {
            var P = new Rt();
            if (l)
              var M = l(A, E, C, t, i, P);
            if (!(M === r ? Ar(E, A, $ | q, l, P) : M))
              return !1;
          }
        }
        return !0;
      }
      function Ju(t) {
        if (!Ce(t) || Cv(t))
          return !1;
        var i = en(t) ? z0 : Pp;
        return i.test(Pn(t));
      }
      function Ug(t) {
        return Ae(t) && je(t) == fe;
      }
      function Hg(t) {
        return Ae(t) && ze(t) == ie;
      }
      function jg(t) {
        return Ae(t) && zi(t.length) && !!be[je(t)];
      }
      function Qu(t) {
        return typeof t == "function" ? t : t == null ? Je : typeof t == "object" ? X(t) ? nl(t[0], t[1]) : tl(t) : wc(t);
      }
      function ds(t) {
        if (!$r(t))
          return Y0(t);
        var i = [];
        for (var s in ve(t))
          de.call(t, s) && s != "constructor" && i.push(s);
        return i;
      }
      function qg(t) {
        if (!Ce(t))
          return Av(t);
        var i = $r(t), s = [];
        for (var l in t)
          l == "constructor" && (i || !de.call(t, l)) || s.push(l);
        return s;
      }
      function hs(t, i) {
        return t < i;
      }
      function el(t, i) {
        var s = -1, l = Ve(t) ? S(t.length) : [];
        return pn(t, function(f, p, v) {
          l[++s] = i(f, p, v);
        }), l;
      }
      function tl(t) {
        var i = Es(t);
        return i.length == 1 && i[0][2] ? Dl(i[0][0], i[0][1]) : function(s) {
          return s === t || fs(s, t, i);
        };
      }
      function nl(t, i) {
        return $s(t) && Ll(i) ? Dl(jt(t), i) : function(s) {
          var l = Ws(s, t);
          return l === r && l === i ? zs(s, t) : Ar(i, l, $ | q);
        };
      }
      function Ti(t, i, s, l, f) {
        t !== i && os(i, function(p, v) {
          if (f || (f = new Rt()), Ce(p))
            Gg(t, i, v, s, Ti, l, f);
          else {
            var y = l ? l(Rs(t, v), p, v + "", t, i, f) : r;
            y === r && (y = p), as(t, v, y);
          }
        }, Ze);
      }
      function Gg(t, i, s, l, f, p, v) {
        var y = Rs(t, s), C = Rs(i, s), A = v.get(C);
        if (A) {
          as(t, s, A);
          return;
        }
        var E = p ? p(y, C, s + "", t, i, v) : r, P = E === r;
        if (P) {
          var M = X(C), W = !M && mn(C), U = !M && !W && sr(C);
          E = C, M || W || U ? X(y) ? E = y : Oe(y) ? E = Ke(y) : W ? (P = !1, E = pl(C, !0)) : U ? (P = !1, E = gl(C, !0)) : E = [] : Rr(C) || Rn(C) ? (E = y, Rn(y) ? E = fc(y) : (!Ce(y) || en(y)) && (E = Fl(C))) : P = !1;
        }
        P && (v.set(C, E), f(E, C, l, p, v), v.delete(C)), as(t, s, E);
      }
      function rl(t, i) {
        var s = t.length;
        if (s)
          return i += i < 0 ? s : 0, Qt(i, s) ? t[i] : r;
      }
      function il(t, i, s) {
        i.length ? i = we(i, function(p) {
          return X(p) ? function(v) {
            return On(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : i = [Je];
        var l = -1;
        i = we(i, ot(z()));
        var f = el(t, function(p, v, y) {
          var C = we(i, function(A) {
            return A(p);
          });
          return { criteria: C, index: ++l, value: p };
        });
        return b0(f, function(p, v) {
          return av(p, v, s);
        });
      }
      function Yg(t, i) {
        return al(t, i, function(s, l) {
          return zs(t, l);
        });
      }
      function al(t, i, s) {
        for (var l = -1, f = i.length, p = {}; ++l < f; ) {
          var v = i[l], y = On(t, v);
          s(y, v) && Er(p, vn(v, t), y);
        }
        return p;
      }
      function Xg(t) {
        return function(i) {
          return On(i, t);
        };
      }
      function ps(t, i, s, l) {
        var f = l ? m0 : Kn, p = -1, v = i.length, y = t;
        for (t === i && (i = Ke(i)), s && (y = we(t, ot(s))); ++p < v; )
          for (var C = 0, A = i[p], E = s ? s(A) : A; (C = f(y, E, C, l)) > -1; )
            y !== t && gi.call(y, C, 1), gi.call(t, C, 1);
        return t;
      }
      function sl(t, i) {
        for (var s = t ? i.length : 0, l = s - 1; s--; ) {
          var f = i[s];
          if (s == l || f !== p) {
            var p = f;
            Qt(f) ? gi.call(t, f, 1) : ms(t, f);
          }
        }
        return t;
      }
      function gs(t, i) {
        return t + mi(Wu() * (i - t + 1));
      }
      function Kg(t, i, s, l) {
        for (var f = -1, p = Re(_i((i - t) / (s || 1)), 0), v = S(p); p--; )
          v[l ? p : ++f] = t, t += s;
        return v;
      }
      function vs(t, i) {
        var s = "";
        if (!t || i < 1 || i > Bt)
          return s;
        do
          i % 2 && (s += t), i = mi(i / 2), i && (t += t);
        while (i);
        return s;
      }
      function Z(t, i) {
        return Fs(Ml(t, i, Je), t + "");
      }
      function Vg(t) {
        return Hu(or(t));
      }
      function Zg(t, i) {
        var s = or(t);
        return Di(s, En(i, 0, s.length));
      }
      function Er(t, i, s, l) {
        if (!Ce(t))
          return t;
        i = vn(i, t);
        for (var f = -1, p = i.length, v = p - 1, y = t; y != null && ++f < p; ) {
          var C = jt(i[f]), A = s;
          if (C === "__proto__" || C === "constructor" || C === "prototype")
            return t;
          if (f != v) {
            var E = y[C];
            A = l ? l(E, C, y) : r, A === r && (A = Ce(E) ? E : Qt(i[f + 1]) ? [] : {});
          }
          Sr(y, C, A), y = y[C];
        }
        return t;
      }
      var ol = bi ? function(t, i) {
        return bi.set(t, i), t;
      } : Je, Jg = vi ? function(t, i) {
        return vi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Hs(i),
          writable: !0
        });
      } : Je;
      function Qg(t) {
        return Di(or(t));
      }
      function St(t, i, s) {
        var l = -1, f = t.length;
        i < 0 && (i = -i > f ? 0 : f + i), s = s > f ? f : s, s < 0 && (s += f), f = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var p = S(f); ++l < f; )
          p[l] = t[l + i];
        return p;
      }
      function ev(t, i) {
        var s;
        return pn(t, function(l, f, p) {
          return s = i(l, f, p), !s;
        }), !!s;
      }
      function ki(t, i, s) {
        var l = 0, f = t == null ? l : t.length;
        if (typeof i == "number" && i === i && f <= ka) {
          for (; l < f; ) {
            var p = l + f >>> 1, v = t[p];
            v !== null && !lt(v) && (s ? v <= i : v < i) ? l = p + 1 : f = p;
          }
          return f;
        }
        return _s(t, i, Je, s);
      }
      function _s(t, i, s, l) {
        var f = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        i = s(i);
        for (var v = i !== i, y = i === null, C = lt(i), A = i === r; f < p; ) {
          var E = mi((f + p) / 2), P = s(t[E]), M = P !== r, W = P === null, U = P === P, V = lt(P);
          if (v)
            var H = l || U;
          else
            A ? H = U && (l || M) : y ? H = U && M && (l || !W) : C ? H = U && M && !W && (l || !V) : W || V ? H = !1 : H = l ? P <= i : P < i;
          H ? f = E + 1 : p = E;
        }
        return We(p, He);
      }
      function ul(t, i) {
        for (var s = -1, l = t.length, f = 0, p = []; ++s < l; ) {
          var v = t[s], y = i ? i(v) : v;
          if (!s || !Ft(y, C)) {
            var C = y;
            p[f++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function ll(t) {
        return typeof t == "number" ? t : lt(t) ? ce : +t;
      }
      function ut(t) {
        if (typeof t == "string")
          return t;
        if (X(t))
          return we(t, ut) + "";
        if (lt(t))
          return zu ? zu.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -Yt ? "-0" : i;
      }
      function gn(t, i, s) {
        var l = -1, f = ai, p = t.length, v = !0, y = [], C = y;
        if (s)
          v = !1, f = Ga;
        else if (p >= o) {
          var A = i ? null : fv(t);
          if (A)
            return oi(A);
          v = !1, f = mr, C = new An();
        } else
          C = i ? [] : y;
        e:
          for (; ++l < p; ) {
            var E = t[l], P = i ? i(E) : E;
            if (E = s || E !== 0 ? E : 0, v && P === P) {
              for (var M = C.length; M--; )
                if (C[M] === P)
                  continue e;
              i && C.push(P), y.push(E);
            } else
              f(C, P, s) || (C !== y && C.push(P), y.push(E));
          }
        return y;
      }
      function ms(t, i) {
        return i = vn(i, t), t = Il(t, i), t == null || delete t[jt(Tt(i))];
      }
      function cl(t, i, s, l) {
        return Er(t, i, s(On(t, i)), l);
      }
      function Ai(t, i, s, l) {
        for (var f = t.length, p = l ? f : -1; (l ? p-- : ++p < f) && i(t[p], p, t); )
          ;
        return s ? St(t, l ? 0 : p, l ? p + 1 : f) : St(t, l ? p + 1 : 0, l ? f : p);
      }
      function fl(t, i) {
        var s = t;
        return s instanceof ee && (s = s.value()), Ya(i, function(l, f) {
          return f.func.apply(f.thisArg, fn([l], f.args));
        }, s);
      }
      function bs(t, i, s) {
        var l = t.length;
        if (l < 2)
          return l ? gn(t[0]) : [];
        for (var f = -1, p = S(l); ++f < l; )
          for (var v = t[f], y = -1; ++y < l; )
            y != f && (p[f] = Tr(p[f] || v, t[y], i, s));
        return gn(Ne(p, 1), i, s);
      }
      function dl(t, i, s) {
        for (var l = -1, f = t.length, p = i.length, v = {}; ++l < f; ) {
          var y = l < p ? i[l] : r;
          s(v, t[l], y);
        }
        return v;
      }
      function ys(t) {
        return Oe(t) ? t : [];
      }
      function ws(t) {
        return typeof t == "function" ? t : Je;
      }
      function vn(t, i) {
        return X(t) ? t : $s(t, i) ? [t] : zl(oe(t));
      }
      var tv = Z;
      function _n(t, i, s) {
        var l = t.length;
        return s = s === r ? l : s, !i && s >= l ? t : St(t, i, s);
      }
      var hl = U0 || function(t) {
        return Ie.clearTimeout(t);
      };
      function pl(t, i) {
        if (i)
          return t.slice();
        var s = t.length, l = Du ? Du(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function xs(t) {
        var i = new t.constructor(t.byteLength);
        return new hi(i).set(new hi(t)), i;
      }
      function nv(t, i) {
        var s = i ? xs(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function rv(t) {
        var i = new t.constructor(t.source, Zo.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function iv(t) {
        return Cr ? ve(Cr.call(t)) : {};
      }
      function gl(t, i) {
        var s = i ? xs(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function vl(t, i) {
        if (t !== i) {
          var s = t !== r, l = t === null, f = t === t, p = lt(t), v = i !== r, y = i === null, C = i === i, A = lt(i);
          if (!y && !A && !p && t > i || p && v && C && !y && !A || l && v && C || !s && C || !f)
            return 1;
          if (!l && !p && !A && t < i || A && s && f && !l && !p || y && s && f || !v && f || !C)
            return -1;
        }
        return 0;
      }
      function av(t, i, s) {
        for (var l = -1, f = t.criteria, p = i.criteria, v = f.length, y = s.length; ++l < v; ) {
          var C = vl(f[l], p[l]);
          if (C) {
            if (l >= y)
              return C;
            var A = s[l];
            return C * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function _l(t, i, s, l) {
        for (var f = -1, p = t.length, v = s.length, y = -1, C = i.length, A = Re(p - v, 0), E = S(C + A), P = !l; ++y < C; )
          E[y] = i[y];
        for (; ++f < v; )
          (P || f < p) && (E[s[f]] = t[f]);
        for (; A--; )
          E[y++] = t[f++];
        return E;
      }
      function ml(t, i, s, l) {
        for (var f = -1, p = t.length, v = -1, y = s.length, C = -1, A = i.length, E = Re(p - y, 0), P = S(E + A), M = !l; ++f < E; )
          P[f] = t[f];
        for (var W = f; ++C < A; )
          P[W + C] = i[C];
        for (; ++v < y; )
          (M || f < p) && (P[W + s[v]] = t[f++]);
        return P;
      }
      function Ke(t, i) {
        var s = -1, l = t.length;
        for (i || (i = S(l)); ++s < l; )
          i[s] = t[s];
        return i;
      }
      function Ht(t, i, s, l) {
        var f = !s;
        s || (s = {});
        for (var p = -1, v = i.length; ++p < v; ) {
          var y = i[p], C = l ? l(s[y], t[y], y, s, t) : r;
          C === r && (C = t[y]), f ? Vt(s, y, C) : Sr(s, y, C);
        }
        return s;
      }
      function sv(t, i) {
        return Ht(t, Os(t), i);
      }
      function ov(t, i) {
        return Ht(t, Pl(t), i);
      }
      function Ei(t, i) {
        return function(s, l) {
          var f = X(s) ? d0 : Og, p = i ? i() : {};
          return f(s, t, z(l, 2), p);
        };
      }
      function rr(t) {
        return Z(function(i, s) {
          var l = -1, f = s.length, p = f > 1 ? s[f - 1] : r, v = f > 2 ? s[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (f--, p) : r, v && qe(s[0], s[1], v) && (p = f < 3 ? r : p, f = 1), i = ve(i); ++l < f; ) {
            var y = s[l];
            y && t(i, y, l, p);
          }
          return i;
        });
      }
      function bl(t, i) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!Ve(s))
            return t(s, l);
          for (var f = s.length, p = i ? f : -1, v = ve(s); (i ? p-- : ++p < f) && l(v[p], p, v) !== !1; )
            ;
          return s;
        };
      }
      function yl(t) {
        return function(i, s, l) {
          for (var f = -1, p = ve(i), v = l(i), y = v.length; y--; ) {
            var C = v[t ? y : ++f];
            if (s(p[C], C, p) === !1)
              break;
          }
          return i;
        };
      }
      function uv(t, i, s) {
        var l = i & G, f = Or(t);
        function p() {
          var v = this && this !== Ie && this instanceof p ? f : t;
          return v.apply(l ? s : this, arguments);
        }
        return p;
      }
      function wl(t) {
        return function(i) {
          i = oe(i);
          var s = Vn(i) ? Pt(i) : r, l = s ? s[0] : i.charAt(0), f = s ? _n(s, 1).join("") : i.slice(1);
          return l[t]() + f;
        };
      }
      function ir(t) {
        return function(i) {
          return Ya(bc(mc(i).replace(Jp, "")), t, "");
        };
      }
      function Or(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var s = nr(t.prototype), l = t.apply(s, i);
          return Ce(l) ? l : s;
        };
      }
      function lv(t, i, s) {
        var l = Or(t);
        function f() {
          for (var p = arguments.length, v = S(p), y = p, C = ar(f); y--; )
            v[y] = arguments[y];
          var A = p < 3 && v[0] !== C && v[p - 1] !== C ? [] : dn(v, C);
          if (p -= A.length, p < s)
            return kl(
              t,
              i,
              Oi,
              f.placeholder,
              r,
              v,
              A,
              r,
              r,
              s - p
            );
          var E = this && this !== Ie && this instanceof f ? l : t;
          return st(E, this, v);
        }
        return f;
      }
      function xl(t) {
        return function(i, s, l) {
          var f = ve(i);
          if (!Ve(i)) {
            var p = z(s, 3);
            i = De(i), s = function(y) {
              return p(f[y], y, f);
            };
          }
          var v = t(i, s, l);
          return v > -1 ? f[p ? i[v] : v] : r;
        };
      }
      function Cl(t) {
        return Jt(function(i) {
          var s = i.length, l = s, f = xt.prototype.thru;
          for (t && i.reverse(); l--; ) {
            var p = i[l];
            if (typeof p != "function")
              throw new wt(c);
            if (f && !v && Fi(p) == "wrapper")
              var v = new xt([], !0);
          }
          for (l = v ? l : s; ++l < s; ) {
            p = i[l];
            var y = Fi(p), C = y == "wrapper" ? As(p) : r;
            C && Ps(C[0]) && C[1] == (ae | le | J | ke) && !C[4].length && C[9] == 1 ? v = v[Fi(C[0])].apply(v, C[3]) : v = p.length == 1 && Ps(p) ? v[y]() : v.thru(p);
          }
          return function() {
            var A = arguments, E = A[0];
            if (v && A.length == 1 && X(E))
              return v.plant(E).value();
            for (var P = 0, M = s ? i[P].apply(this, A) : E; ++P < s; )
              M = i[P].call(this, M);
            return M;
          };
        });
      }
      function Oi(t, i, s, l, f, p, v, y, C, A) {
        var E = i & ae, P = i & G, M = i & j, W = i & (le | Te), U = i & Ee, V = M ? r : Or(t);
        function H() {
          for (var Q = arguments.length, te = S(Q), ct = Q; ct--; )
            te[ct] = arguments[ct];
          if (W)
            var Ge = ar(H), ft = w0(te, Ge);
          if (l && (te = _l(te, l, f, W)), p && (te = ml(te, p, v, W)), Q -= ft, W && Q < A) {
            var $e = dn(te, Ge);
            return kl(
              t,
              i,
              Oi,
              H.placeholder,
              s,
              te,
              $e,
              y,
              C,
              A - Q
            );
          }
          var Lt = P ? s : this, nn = M ? Lt[t] : t;
          return Q = te.length, y ? te = Ov(te, y) : U && Q > 1 && te.reverse(), E && C < Q && (te.length = C), this && this !== Ie && this instanceof H && (nn = V || Or(nn)), nn.apply(Lt, te);
        }
        return H;
      }
      function Sl(t, i) {
        return function(s, l) {
          return Ig(s, t, i(l), {});
        };
      }
      function $i(t, i) {
        return function(s, l) {
          var f;
          if (s === r && l === r)
            return i;
          if (s !== r && (f = s), l !== r) {
            if (f === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = ut(s), l = ut(l)) : (s = ll(s), l = ll(l)), f = t(s, l);
          }
          return f;
        };
      }
      function Cs(t) {
        return Jt(function(i) {
          return i = we(i, ot(z())), Z(function(s) {
            var l = this;
            return t(i, function(f) {
              return st(f, l, s);
            });
          });
        });
      }
      function Pi(t, i) {
        i = i === r ? " " : ut(i);
        var s = i.length;
        if (s < 2)
          return s ? vs(i, t) : i;
        var l = vs(i, _i(t / Zn(i)));
        return Vn(i) ? _n(Pt(l), 0, t).join("") : l.slice(0, t);
      }
      function cv(t, i, s, l) {
        var f = i & G, p = Or(t);
        function v() {
          for (var y = -1, C = arguments.length, A = -1, E = l.length, P = S(E + C), M = this && this !== Ie && this instanceof v ? p : t; ++A < E; )
            P[A] = l[A];
          for (; C--; )
            P[A++] = arguments[++y];
          return st(M, f ? s : this, P);
        }
        return v;
      }
      function Tl(t) {
        return function(i, s, l) {
          return l && typeof l != "number" && qe(i, s, l) && (s = l = r), i = tn(i), s === r ? (s = i, i = 0) : s = tn(s), l = l === r ? i < s ? 1 : -1 : tn(l), Kg(i, s, l, t);
        };
      }
      function Ri(t) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = kt(i), s = kt(s)), t(i, s);
        };
      }
      function kl(t, i, s, l, f, p, v, y, C, A) {
        var E = i & le, P = E ? v : r, M = E ? r : v, W = E ? p : r, U = E ? r : p;
        i |= E ? J : B, i &= ~(E ? B : J), i & ne || (i &= ~(G | j));
        var V = [
          t,
          i,
          f,
          W,
          P,
          U,
          M,
          y,
          C,
          A
        ], H = s.apply(r, V);
        return Ps(t) && Nl(H, V), H.placeholder = l, Bl(H, t, i);
      }
      function Ss(t) {
        var i = Pe[t];
        return function(s, l) {
          if (s = kt(s), l = l == null ? 0 : We(K(l), 292), l && Bu(s)) {
            var f = (oe(s) + "e").split("e"), p = i(f[0] + "e" + (+f[1] + l));
            return f = (oe(p) + "e").split("e"), +(f[0] + "e" + (+f[1] - l));
          }
          return i(s);
        };
      }
      var fv = er && 1 / oi(new er([, -0]))[1] == Yt ? function(t) {
        return new er(t);
      } : Gs;
      function Al(t) {
        return function(i) {
          var s = ze(i);
          return s == w ? es(i) : s == ie ? E0(i) : y0(i, t(i));
        };
      }
      function Zt(t, i, s, l, f, p, v, y) {
        var C = i & j;
        if (!C && typeof t != "function")
          throw new wt(c);
        var A = l ? l.length : 0;
        if (A || (i &= ~(J | B), l = f = r), v = v === r ? v : Re(K(v), 0), y = y === r ? y : K(y), A -= f ? f.length : 0, i & B) {
          var E = l, P = f;
          l = f = r;
        }
        var M = C ? r : As(t), W = [
          t,
          i,
          s,
          l,
          f,
          E,
          P,
          p,
          v,
          y
        ];
        if (M && kv(W, M), t = W[0], i = W[1], s = W[2], l = W[3], f = W[4], y = W[9] = W[9] === r ? C ? 0 : t.length : Re(W[9] - A, 0), !y && i & (le | Te) && (i &= ~(le | Te)), !i || i == G)
          var U = uv(t, i, s);
        else
          i == le || i == Te ? U = lv(t, i, y) : (i == J || i == (G | J)) && !f.length ? U = cv(t, i, s, l) : U = Oi.apply(r, W);
        var V = M ? ol : Nl;
        return Bl(V(U, W), t, i);
      }
      function El(t, i, s, l) {
        return t === r || Ft(t, Qn[s]) && !de.call(l, s) ? i : t;
      }
      function Ol(t, i, s, l, f, p) {
        return Ce(t) && Ce(i) && (p.set(i, t), Ti(t, i, r, Ol, p), p.delete(i)), t;
      }
      function dv(t) {
        return Rr(t) ? r : t;
      }
      function $l(t, i, s, l, f, p) {
        var v = s & $, y = t.length, C = i.length;
        if (y != C && !(v && C > y))
          return !1;
        var A = p.get(t), E = p.get(i);
        if (A && E)
          return A == i && E == t;
        var P = -1, M = !0, W = s & q ? new An() : r;
        for (p.set(t, i), p.set(i, t); ++P < y; ) {
          var U = t[P], V = i[P];
          if (l)
            var H = v ? l(V, U, P, i, t, p) : l(U, V, P, t, i, p);
          if (H !== r) {
            if (H)
              continue;
            M = !1;
            break;
          }
          if (W) {
            if (!Xa(i, function(Q, te) {
              if (!mr(W, te) && (U === Q || f(U, Q, s, l, p)))
                return W.push(te);
            })) {
              M = !1;
              break;
            }
          } else if (!(U === V || f(U, V, s, l, p))) {
            M = !1;
            break;
          }
        }
        return p.delete(t), p.delete(i), M;
      }
      function hv(t, i, s, l, f, p, v) {
        switch (s) {
          case Yn:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case _r:
            return !(t.byteLength != i.byteLength || !p(new hi(t), new hi(i)));
          case ln:
          case Me:
          case _:
            return Ft(+t, +i);
          case qn:
            return t.name == i.name && t.message == i.message;
          case fe:
          case Le:
            return t == i + "";
          case w:
            var y = es;
          case ie:
            var C = l & $;
            if (y || (y = oi), t.size != i.size && !C)
              return !1;
            var A = v.get(t);
            if (A)
              return A == i;
            l |= q, v.set(t, i);
            var E = $l(y(t), y(i), l, f, p, v);
            return v.delete(t), E;
          case zt:
            if (Cr)
              return Cr.call(t) == Cr.call(i);
        }
        return !1;
      }
      function pv(t, i, s, l, f, p) {
        var v = s & $, y = Ts(t), C = y.length, A = Ts(i), E = A.length;
        if (C != E && !v)
          return !1;
        for (var P = C; P--; ) {
          var M = y[P];
          if (!(v ? M in i : de.call(i, M)))
            return !1;
        }
        var W = p.get(t), U = p.get(i);
        if (W && U)
          return W == i && U == t;
        var V = !0;
        p.set(t, i), p.set(i, t);
        for (var H = v; ++P < C; ) {
          M = y[P];
          var Q = t[M], te = i[M];
          if (l)
            var ct = v ? l(te, Q, M, i, t, p) : l(Q, te, M, t, i, p);
          if (!(ct === r ? Q === te || f(Q, te, s, l, p) : ct)) {
            V = !1;
            break;
          }
          H || (H = M == "constructor");
        }
        if (V && !H) {
          var Ge = t.constructor, ft = i.constructor;
          Ge != ft && "constructor" in t && "constructor" in i && !(typeof Ge == "function" && Ge instanceof Ge && typeof ft == "function" && ft instanceof ft) && (V = !1);
        }
        return p.delete(t), p.delete(i), V;
      }
      function Jt(t) {
        return Fs(Ml(t, r, ql), t + "");
      }
      function Ts(t) {
        return Vu(t, De, Os);
      }
      function ks(t) {
        return Vu(t, Ze, Pl);
      }
      var As = bi ? function(t) {
        return bi.get(t);
      } : Gs;
      function Fi(t) {
        for (var i = t.name + "", s = tr[i], l = de.call(tr, i) ? s.length : 0; l--; ) {
          var f = s[l], p = f.func;
          if (p == null || p == t)
            return f.name;
        }
        return i;
      }
      function ar(t) {
        var i = de.call(d, "placeholder") ? d : t;
        return i.placeholder;
      }
      function z() {
        var t = d.iteratee || js;
        return t = t === js ? Qu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Li(t, i) {
        var s = t.__data__;
        return xv(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function Es(t) {
        for (var i = De(t), s = i.length; s--; ) {
          var l = i[s], f = t[l];
          i[s] = [l, f, Ll(f)];
        }
        return i;
      }
      function $n(t, i) {
        var s = T0(t, i);
        return Ju(s) ? s : r;
      }
      function gv(t) {
        var i = de.call(t, Tn), s = t[Tn];
        try {
          t[Tn] = r;
          var l = !0;
        } catch {
        }
        var f = fi.call(t);
        return l && (i ? t[Tn] = s : delete t[Tn]), f;
      }
      var Os = ns ? function(t) {
        return t == null ? [] : (t = ve(t), cn(ns(t), function(i) {
          return Iu.call(t, i);
        }));
      } : Ys, Pl = ns ? function(t) {
        for (var i = []; t; )
          fn(i, Os(t)), t = pi(t);
        return i;
      } : Ys, ze = je;
      (rs && ze(new rs(new ArrayBuffer(1))) != Yn || yr && ze(new yr()) != w || is && ze(is.resolve()) != I || er && ze(new er()) != ie || wr && ze(new wr()) != vr) && (ze = function(t) {
        var i = je(t), s = i == D ? t.constructor : r, l = s ? Pn(s) : "";
        if (l)
          switch (l) {
            case Z0:
              return Yn;
            case J0:
              return w;
            case Q0:
              return I;
            case eg:
              return ie;
            case tg:
              return vr;
          }
        return i;
      });
      function vv(t, i, s) {
        for (var l = -1, f = s.length; ++l < f; ) {
          var p = s[l], v = p.size;
          switch (p.type) {
            case "drop":
              t += v;
              break;
            case "dropRight":
              i -= v;
              break;
            case "take":
              i = We(i, t + v);
              break;
            case "takeRight":
              t = Re(t, i - v);
              break;
          }
        }
        return { start: t, end: i };
      }
      function _v(t) {
        var i = t.match(Cp);
        return i ? i[1].split(Sp) : [];
      }
      function Rl(t, i, s) {
        i = vn(i, t);
        for (var l = -1, f = i.length, p = !1; ++l < f; ) {
          var v = jt(i[l]);
          if (!(p = t != null && s(t, v)))
            break;
          t = t[v];
        }
        return p || ++l != f ? p : (f = t == null ? 0 : t.length, !!f && zi(f) && Qt(v, f) && (X(t) || Rn(t)));
      }
      function mv(t) {
        var i = t.length, s = new t.constructor(i);
        return i && typeof t[0] == "string" && de.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function Fl(t) {
        return typeof t.constructor == "function" && !$r(t) ? nr(pi(t)) : {};
      }
      function bv(t, i, s) {
        var l = t.constructor;
        switch (i) {
          case _r:
            return xs(t);
          case ln:
          case Me:
            return new l(+t);
          case Yn:
            return nv(t, s);
          case Ea:
          case Oa:
          case $a:
          case Pa:
          case Ra:
          case Fa:
          case La:
          case Da:
          case Ma:
            return gl(t, s);
          case w:
            return new l();
          case _:
          case Le:
            return new l(t);
          case fe:
            return rv(t);
          case ie:
            return new l();
          case zt:
            return iv(t);
        }
      }
      function yv(t, i) {
        var s = i.length;
        if (!s)
          return t;
        var l = s - 1;
        return i[l] = (s > 1 ? "& " : "") + i[l], i = i.join(s > 2 ? ", " : " "), t.replace(xp, `{
/* [wrapped with ` + i + `] */
`);
      }
      function wv(t) {
        return X(t) || Rn(t) || !!(Nu && t && t[Nu]);
      }
      function Qt(t, i) {
        var s = typeof t;
        return i = i ?? Bt, !!i && (s == "number" || s != "symbol" && Fp.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function qe(t, i, s) {
        if (!Ce(s))
          return !1;
        var l = typeof i;
        return (l == "number" ? Ve(s) && Qt(i, s.length) : l == "string" && i in s) ? Ft(s[i], t) : !1;
      }
      function $s(t, i) {
        if (X(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || lt(t) ? !0 : mp.test(t) || !_p.test(t) || i != null && t in ve(i);
      }
      function xv(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ps(t) {
        var i = Fi(t), s = d[i];
        if (typeof s != "function" || !(i in ee.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = As(s);
        return !!l && t === l[0];
      }
      function Cv(t) {
        return !!Lu && Lu in t;
      }
      var Sv = li ? en : Xs;
      function $r(t) {
        var i = t && t.constructor, s = typeof i == "function" && i.prototype || Qn;
        return t === s;
      }
      function Ll(t) {
        return t === t && !Ce(t);
      }
      function Dl(t, i) {
        return function(s) {
          return s == null ? !1 : s[t] === i && (i !== r || t in ve(s));
        };
      }
      function Tv(t) {
        var i = Bi(t, function(l) {
          return s.size === b && s.clear(), l;
        }), s = i.cache;
        return i;
      }
      function kv(t, i) {
        var s = t[1], l = i[1], f = s | l, p = f < (G | j | ae), v = l == ae && s == le || l == ae && s == ke && t[7].length <= i[8] || l == (ae | ke) && i[7].length <= i[8] && s == le;
        if (!(p || v))
          return t;
        l & G && (t[2] = i[2], f |= s & G ? 0 : ne);
        var y = i[3];
        if (y) {
          var C = t[3];
          t[3] = C ? _l(C, y, i[4]) : y, t[4] = C ? dn(t[3], T) : i[4];
        }
        return y = i[5], y && (C = t[5], t[5] = C ? ml(C, y, i[6]) : y, t[6] = C ? dn(t[5], T) : i[6]), y = i[7], y && (t[7] = y), l & ae && (t[8] = t[8] == null ? i[8] : We(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = f, t;
      }
      function Av(t) {
        var i = [];
        if (t != null)
          for (var s in ve(t))
            i.push(s);
        return i;
      }
      function Ev(t) {
        return fi.call(t);
      }
      function Ml(t, i, s) {
        return i = Re(i === r ? t.length - 1 : i, 0), function() {
          for (var l = arguments, f = -1, p = Re(l.length - i, 0), v = S(p); ++f < p; )
            v[f] = l[i + f];
          f = -1;
          for (var y = S(i + 1); ++f < i; )
            y[f] = l[f];
          return y[i] = s(v), st(t, this, y);
        };
      }
      function Il(t, i) {
        return i.length < 2 ? t : On(t, St(i, 0, -1));
      }
      function Ov(t, i) {
        for (var s = t.length, l = We(i.length, s), f = Ke(t); l--; ) {
          var p = i[l];
          t[l] = Qt(p, s) ? f[p] : r;
        }
        return t;
      }
      function Rs(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var Nl = Wl(ol), Pr = j0 || function(t, i) {
        return Ie.setTimeout(t, i);
      }, Fs = Wl(Jg);
      function Bl(t, i, s) {
        var l = i + "";
        return Fs(t, yv(l, $v(_v(l), s)));
      }
      function Wl(t) {
        var i = 0, s = 0;
        return function() {
          var l = X0(), f = Sa - (l - s);
          if (s = l, f > 0) {
            if (++i >= Ca)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function Di(t, i) {
        var s = -1, l = t.length, f = l - 1;
        for (i = i === r ? l : i; ++s < i; ) {
          var p = gs(s, f), v = t[p];
          t[p] = t[s], t[s] = v;
        }
        return t.length = i, t;
      }
      var zl = Tv(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(bp, function(s, l, f, p) {
          i.push(f ? p.replace(Ap, "$1") : l || s);
        }), i;
      });
      function jt(t) {
        if (typeof t == "string" || lt(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -Yt ? "-0" : i;
      }
      function Pn(t) {
        if (t != null) {
          try {
            return ci.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function $v(t, i) {
        return yt(Aa, function(s) {
          var l = "_." + s[0];
          i & s[1] && !ai(t, l) && t.push(l);
        }), t.sort();
      }
      function Ul(t) {
        if (t instanceof ee)
          return t.clone();
        var i = new xt(t.__wrapped__, t.__chain__);
        return i.__actions__ = Ke(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function Pv(t, i, s) {
        (s ? qe(t, i, s) : i === r) ? i = 1 : i = Re(K(i), 0);
        var l = t == null ? 0 : t.length;
        if (!l || i < 1)
          return [];
        for (var f = 0, p = 0, v = S(_i(l / i)); f < l; )
          v[p++] = St(t, f, f += i);
        return v;
      }
      function Rv(t) {
        for (var i = -1, s = t == null ? 0 : t.length, l = 0, f = []; ++i < s; ) {
          var p = t[i];
          p && (f[l++] = p);
        }
        return f;
      }
      function Fv() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = S(t - 1), s = arguments[0], l = t; l--; )
          i[l - 1] = arguments[l];
        return fn(X(s) ? Ke(s) : [s], Ne(i, 1));
      }
      var Lv = Z(function(t, i) {
        return Oe(t) ? Tr(t, Ne(i, 1, Oe, !0)) : [];
      }), Dv = Z(function(t, i) {
        var s = Tt(i);
        return Oe(s) && (s = r), Oe(t) ? Tr(t, Ne(i, 1, Oe, !0), z(s, 2)) : [];
      }), Mv = Z(function(t, i) {
        var s = Tt(i);
        return Oe(s) && (s = r), Oe(t) ? Tr(t, Ne(i, 1, Oe, !0), r, s) : [];
      });
      function Iv(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === r ? 1 : K(i), St(t, i < 0 ? 0 : i, l)) : [];
      }
      function Nv(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === r ? 1 : K(i), i = l - i, St(t, 0, i < 0 ? 0 : i)) : [];
      }
      function Bv(t, i) {
        return t && t.length ? Ai(t, z(i, 3), !0, !0) : [];
      }
      function Wv(t, i) {
        return t && t.length ? Ai(t, z(i, 3), !0) : [];
      }
      function zv(t, i, s, l) {
        var f = t == null ? 0 : t.length;
        return f ? (s && typeof s != "number" && qe(t, i, s) && (s = 0, l = f), Fg(t, i, s, l)) : [];
      }
      function Hl(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = s == null ? 0 : K(s);
        return f < 0 && (f = Re(l + f, 0)), si(t, z(i, 3), f);
      }
      function jl(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = l - 1;
        return s !== r && (f = K(s), f = s < 0 ? Re(l + f, 0) : We(f, l - 1)), si(t, z(i, 3), f, !0);
      }
      function ql(t) {
        var i = t == null ? 0 : t.length;
        return i ? Ne(t, 1) : [];
      }
      function Uv(t) {
        var i = t == null ? 0 : t.length;
        return i ? Ne(t, Yt) : [];
      }
      function Hv(t, i) {
        var s = t == null ? 0 : t.length;
        return s ? (i = i === r ? 1 : K(i), Ne(t, i)) : [];
      }
      function jv(t) {
        for (var i = -1, s = t == null ? 0 : t.length, l = {}; ++i < s; ) {
          var f = t[i];
          l[f[0]] = f[1];
        }
        return l;
      }
      function Gl(t) {
        return t && t.length ? t[0] : r;
      }
      function qv(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = s == null ? 0 : K(s);
        return f < 0 && (f = Re(l + f, 0)), Kn(t, i, f);
      }
      function Gv(t) {
        var i = t == null ? 0 : t.length;
        return i ? St(t, 0, -1) : [];
      }
      var Yv = Z(function(t) {
        var i = we(t, ys);
        return i.length && i[0] === t[0] ? cs(i) : [];
      }), Xv = Z(function(t) {
        var i = Tt(t), s = we(t, ys);
        return i === Tt(s) ? i = r : s.pop(), s.length && s[0] === t[0] ? cs(s, z(i, 2)) : [];
      }), Kv = Z(function(t) {
        var i = Tt(t), s = we(t, ys);
        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === t[0] ? cs(s, r, i) : [];
      });
      function Vv(t, i) {
        return t == null ? "" : G0.call(t, i);
      }
      function Tt(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function Zv(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = l;
        return s !== r && (f = K(s), f = f < 0 ? Re(l + f, 0) : We(f, l - 1)), i === i ? $0(t, i, f) : si(t, ku, f, !0);
      }
      function Jv(t, i) {
        return t && t.length ? rl(t, K(i)) : r;
      }
      var Qv = Z(Yl);
      function Yl(t, i) {
        return t && t.length && i && i.length ? ps(t, i) : t;
      }
      function e1(t, i, s) {
        return t && t.length && i && i.length ? ps(t, i, z(s, 2)) : t;
      }
      function t1(t, i, s) {
        return t && t.length && i && i.length ? ps(t, i, r, s) : t;
      }
      var n1 = Jt(function(t, i) {
        var s = t == null ? 0 : t.length, l = ss(t, i);
        return sl(t, we(i, function(f) {
          return Qt(f, s) ? +f : f;
        }).sort(vl)), l;
      });
      function r1(t, i) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, f = [], p = t.length;
        for (i = z(i, 3); ++l < p; ) {
          var v = t[l];
          i(v, l, t) && (s.push(v), f.push(l));
        }
        return sl(t, f), s;
      }
      function Ls(t) {
        return t == null ? t : V0.call(t);
      }
      function i1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && qe(t, i, s) ? (i = 0, s = l) : (i = i == null ? 0 : K(i), s = s === r ? l : K(s)), St(t, i, s)) : [];
      }
      function a1(t, i) {
        return ki(t, i);
      }
      function s1(t, i, s) {
        return _s(t, i, z(s, 2));
      }
      function o1(t, i) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = ki(t, i);
          if (l < s && Ft(t[l], i))
            return l;
        }
        return -1;
      }
      function u1(t, i) {
        return ki(t, i, !0);
      }
      function l1(t, i, s) {
        return _s(t, i, z(s, 2), !0);
      }
      function c1(t, i) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = ki(t, i, !0) - 1;
          if (Ft(t[l], i))
            return l;
        }
        return -1;
      }
      function f1(t) {
        return t && t.length ? ul(t) : [];
      }
      function d1(t, i) {
        return t && t.length ? ul(t, z(i, 2)) : [];
      }
      function h1(t) {
        var i = t == null ? 0 : t.length;
        return i ? St(t, 1, i) : [];
      }
      function p1(t, i, s) {
        return t && t.length ? (i = s || i === r ? 1 : K(i), St(t, 0, i < 0 ? 0 : i)) : [];
      }
      function g1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === r ? 1 : K(i), i = l - i, St(t, i < 0 ? 0 : i, l)) : [];
      }
      function v1(t, i) {
        return t && t.length ? Ai(t, z(i, 3), !1, !0) : [];
      }
      function _1(t, i) {
        return t && t.length ? Ai(t, z(i, 3)) : [];
      }
      var m1 = Z(function(t) {
        return gn(Ne(t, 1, Oe, !0));
      }), b1 = Z(function(t) {
        var i = Tt(t);
        return Oe(i) && (i = r), gn(Ne(t, 1, Oe, !0), z(i, 2));
      }), y1 = Z(function(t) {
        var i = Tt(t);
        return i = typeof i == "function" ? i : r, gn(Ne(t, 1, Oe, !0), r, i);
      });
      function w1(t) {
        return t && t.length ? gn(t) : [];
      }
      function x1(t, i) {
        return t && t.length ? gn(t, z(i, 2)) : [];
      }
      function C1(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? gn(t, r, i) : [];
      }
      function Ds(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = cn(t, function(s) {
          if (Oe(s))
            return i = Re(s.length, i), !0;
        }), Ja(i, function(s) {
          return we(t, Ka(s));
        });
      }
      function Xl(t, i) {
        if (!(t && t.length))
          return [];
        var s = Ds(t);
        return i == null ? s : we(s, function(l) {
          return st(i, r, l);
        });
      }
      var S1 = Z(function(t, i) {
        return Oe(t) ? Tr(t, i) : [];
      }), T1 = Z(function(t) {
        return bs(cn(t, Oe));
      }), k1 = Z(function(t) {
        var i = Tt(t);
        return Oe(i) && (i = r), bs(cn(t, Oe), z(i, 2));
      }), A1 = Z(function(t) {
        var i = Tt(t);
        return i = typeof i == "function" ? i : r, bs(cn(t, Oe), r, i);
      }), E1 = Z(Ds);
      function O1(t, i) {
        return dl(t || [], i || [], Sr);
      }
      function $1(t, i) {
        return dl(t || [], i || [], Er);
      }
      var P1 = Z(function(t) {
        var i = t.length, s = i > 1 ? t[i - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, Xl(t, s);
      });
      function Kl(t) {
        var i = d(t);
        return i.__chain__ = !0, i;
      }
      function R1(t, i) {
        return i(t), t;
      }
      function Mi(t, i) {
        return i(t);
      }
      var F1 = Jt(function(t) {
        var i = t.length, s = i ? t[0] : 0, l = this.__wrapped__, f = function(p) {
          return ss(p, t);
        };
        return i > 1 || this.__actions__.length || !(l instanceof ee) || !Qt(s) ? this.thru(f) : (l = l.slice(s, +s + (i ? 1 : 0)), l.__actions__.push({
          func: Mi,
          args: [f],
          thisArg: r
        }), new xt(l, this.__chain__).thru(function(p) {
          return i && !p.length && p.push(r), p;
        }));
      });
      function L1() {
        return Kl(this);
      }
      function D1() {
        return new xt(this.value(), this.__chain__);
      }
      function M1() {
        this.__values__ === r && (this.__values__ = lc(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function I1() {
        return this;
      }
      function N1(t) {
        for (var i, s = this; s instanceof wi; ) {
          var l = Ul(s);
          l.__index__ = 0, l.__values__ = r, i ? f.__wrapped__ = l : i = l;
          var f = l;
          s = s.__wrapped__;
        }
        return f.__wrapped__ = t, i;
      }
      function B1() {
        var t = this.__wrapped__;
        if (t instanceof ee) {
          var i = t;
          return this.__actions__.length && (i = new ee(this)), i = i.reverse(), i.__actions__.push({
            func: Mi,
            args: [Ls],
            thisArg: r
          }), new xt(i, this.__chain__);
        }
        return this.thru(Ls);
      }
      function W1() {
        return fl(this.__wrapped__, this.__actions__);
      }
      var z1 = Ei(function(t, i, s) {
        de.call(t, s) ? ++t[s] : Vt(t, s, 1);
      });
      function U1(t, i, s) {
        var l = X(t) ? Su : Rg;
        return s && qe(t, i, s) && (i = r), l(t, z(i, 3));
      }
      function H1(t, i) {
        var s = X(t) ? cn : Xu;
        return s(t, z(i, 3));
      }
      var j1 = xl(Hl), q1 = xl(jl);
      function G1(t, i) {
        return Ne(Ii(t, i), 1);
      }
      function Y1(t, i) {
        return Ne(Ii(t, i), Yt);
      }
      function X1(t, i, s) {
        return s = s === r ? 1 : K(s), Ne(Ii(t, i), s);
      }
      function Vl(t, i) {
        var s = X(t) ? yt : pn;
        return s(t, z(i, 3));
      }
      function Zl(t, i) {
        var s = X(t) ? h0 : Yu;
        return s(t, z(i, 3));
      }
      var K1 = Ei(function(t, i, s) {
        de.call(t, s) ? t[s].push(i) : Vt(t, s, [i]);
      });
      function V1(t, i, s, l) {
        t = Ve(t) ? t : or(t), s = s && !l ? K(s) : 0;
        var f = t.length;
        return s < 0 && (s = Re(f + s, 0)), Ui(t) ? s <= f && t.indexOf(i, s) > -1 : !!f && Kn(t, i, s) > -1;
      }
      var Z1 = Z(function(t, i, s) {
        var l = -1, f = typeof i == "function", p = Ve(t) ? S(t.length) : [];
        return pn(t, function(v) {
          p[++l] = f ? st(i, v, s) : kr(v, i, s);
        }), p;
      }), J1 = Ei(function(t, i, s) {
        Vt(t, s, i);
      });
      function Ii(t, i) {
        var s = X(t) ? we : el;
        return s(t, z(i, 3));
      }
      function Q1(t, i, s, l) {
        return t == null ? [] : (X(i) || (i = i == null ? [] : [i]), s = l ? r : s, X(s) || (s = s == null ? [] : [s]), il(t, i, s));
      }
      var e_ = Ei(function(t, i, s) {
        t[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function t_(t, i, s) {
        var l = X(t) ? Ya : Eu, f = arguments.length < 3;
        return l(t, z(i, 4), s, f, pn);
      }
      function n_(t, i, s) {
        var l = X(t) ? p0 : Eu, f = arguments.length < 3;
        return l(t, z(i, 4), s, f, Yu);
      }
      function r_(t, i) {
        var s = X(t) ? cn : Xu;
        return s(t, Wi(z(i, 3)));
      }
      function i_(t) {
        var i = X(t) ? Hu : Vg;
        return i(t);
      }
      function a_(t, i, s) {
        (s ? qe(t, i, s) : i === r) ? i = 1 : i = K(i);
        var l = X(t) ? Ag : Zg;
        return l(t, i);
      }
      function s_(t) {
        var i = X(t) ? Eg : Qg;
        return i(t);
      }
      function o_(t) {
        if (t == null)
          return 0;
        if (Ve(t))
          return Ui(t) ? Zn(t) : t.length;
        var i = ze(t);
        return i == w || i == ie ? t.size : ds(t).length;
      }
      function u_(t, i, s) {
        var l = X(t) ? Xa : ev;
        return s && qe(t, i, s) && (i = r), l(t, z(i, 3));
      }
      var l_ = Z(function(t, i) {
        if (t == null)
          return [];
        var s = i.length;
        return s > 1 && qe(t, i[0], i[1]) ? i = [] : s > 2 && qe(i[0], i[1], i[2]) && (i = [i[0]]), il(t, Ne(i, 1), []);
      }), Ni = H0 || function() {
        return Ie.Date.now();
      };
      function c_(t, i) {
        if (typeof i != "function")
          throw new wt(c);
        return t = K(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function Jl(t, i, s) {
        return i = s ? r : i, i = t && i == null ? t.length : i, Zt(t, ae, r, r, r, r, i);
      }
      function Ql(t, i) {
        var s;
        if (typeof i != "function")
          throw new wt(c);
        return t = K(t), function() {
          return --t > 0 && (s = i.apply(this, arguments)), t <= 1 && (i = r), s;
        };
      }
      var Ms = Z(function(t, i, s) {
        var l = G;
        if (s.length) {
          var f = dn(s, ar(Ms));
          l |= J;
        }
        return Zt(t, l, i, s, f);
      }), ec = Z(function(t, i, s) {
        var l = G | j;
        if (s.length) {
          var f = dn(s, ar(ec));
          l |= J;
        }
        return Zt(i, l, t, s, f);
      });
      function tc(t, i, s) {
        i = s ? r : i;
        var l = Zt(t, le, r, r, r, r, r, i);
        return l.placeholder = tc.placeholder, l;
      }
      function nc(t, i, s) {
        i = s ? r : i;
        var l = Zt(t, Te, r, r, r, r, r, i);
        return l.placeholder = nc.placeholder, l;
      }
      function rc(t, i, s) {
        var l, f, p, v, y, C, A = 0, E = !1, P = !1, M = !0;
        if (typeof t != "function")
          throw new wt(c);
        i = kt(i) || 0, Ce(s) && (E = !!s.leading, P = "maxWait" in s, p = P ? Re(kt(s.maxWait) || 0, i) : p, M = "trailing" in s ? !!s.trailing : M);
        function W($e) {
          var Lt = l, nn = f;
          return l = f = r, A = $e, v = t.apply(nn, Lt), v;
        }
        function U($e) {
          return A = $e, y = Pr(Q, i), E ? W($e) : v;
        }
        function V($e) {
          var Lt = $e - C, nn = $e - A, xc = i - Lt;
          return P ? We(xc, p - nn) : xc;
        }
        function H($e) {
          var Lt = $e - C, nn = $e - A;
          return C === r || Lt >= i || Lt < 0 || P && nn >= p;
        }
        function Q() {
          var $e = Ni();
          if (H($e))
            return te($e);
          y = Pr(Q, V($e));
        }
        function te($e) {
          return y = r, M && l ? W($e) : (l = f = r, v);
        }
        function ct() {
          y !== r && hl(y), A = 0, l = C = f = y = r;
        }
        function Ge() {
          return y === r ? v : te(Ni());
        }
        function ft() {
          var $e = Ni(), Lt = H($e);
          if (l = arguments, f = this, C = $e, Lt) {
            if (y === r)
              return U(C);
            if (P)
              return hl(y), y = Pr(Q, i), W(C);
          }
          return y === r && (y = Pr(Q, i)), v;
        }
        return ft.cancel = ct, ft.flush = Ge, ft;
      }
      var f_ = Z(function(t, i) {
        return Gu(t, 1, i);
      }), d_ = Z(function(t, i, s) {
        return Gu(t, kt(i) || 0, s);
      });
      function h_(t) {
        return Zt(t, Ee);
      }
      function Bi(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new wt(c);
        var s = function() {
          var l = arguments, f = i ? i.apply(this, l) : l[0], p = s.cache;
          if (p.has(f))
            return p.get(f);
          var v = t.apply(this, l);
          return s.cache = p.set(f, v) || p, v;
        };
        return s.cache = new (Bi.Cache || Kt)(), s;
      }
      Bi.Cache = Kt;
      function Wi(t) {
        if (typeof t != "function")
          throw new wt(c);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function p_(t) {
        return Ql(2, t);
      }
      var g_ = tv(function(t, i) {
        i = i.length == 1 && X(i[0]) ? we(i[0], ot(z())) : we(Ne(i, 1), ot(z()));
        var s = i.length;
        return Z(function(l) {
          for (var f = -1, p = We(l.length, s); ++f < p; )
            l[f] = i[f].call(this, l[f]);
          return st(t, this, l);
        });
      }), Is = Z(function(t, i) {
        var s = dn(i, ar(Is));
        return Zt(t, J, r, i, s);
      }), ic = Z(function(t, i) {
        var s = dn(i, ar(ic));
        return Zt(t, B, r, i, s);
      }), v_ = Jt(function(t, i) {
        return Zt(t, ke, r, r, r, i);
      });
      function __(t, i) {
        if (typeof t != "function")
          throw new wt(c);
        return i = i === r ? i : K(i), Z(t, i);
      }
      function m_(t, i) {
        if (typeof t != "function")
          throw new wt(c);
        return i = i == null ? 0 : Re(K(i), 0), Z(function(s) {
          var l = s[i], f = _n(s, 0, i);
          return l && fn(f, l), st(t, this, f);
        });
      }
      function b_(t, i, s) {
        var l = !0, f = !0;
        if (typeof t != "function")
          throw new wt(c);
        return Ce(s) && (l = "leading" in s ? !!s.leading : l, f = "trailing" in s ? !!s.trailing : f), rc(t, i, {
          leading: l,
          maxWait: i,
          trailing: f
        });
      }
      function y_(t) {
        return Jl(t, 1);
      }
      function w_(t, i) {
        return Is(ws(i), t);
      }
      function x_() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return X(t) ? t : [t];
      }
      function C_(t) {
        return Ct(t, L);
      }
      function S_(t, i) {
        return i = typeof i == "function" ? i : r, Ct(t, L, i);
      }
      function T_(t) {
        return Ct(t, O | L);
      }
      function k_(t, i) {
        return i = typeof i == "function" ? i : r, Ct(t, O | L, i);
      }
      function A_(t, i) {
        return i == null || qu(t, i, De(i));
      }
      function Ft(t, i) {
        return t === i || t !== t && i !== i;
      }
      var E_ = Ri(ls), O_ = Ri(function(t, i) {
        return t >= i;
      }), Rn = Zu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Zu : function(t) {
        return Ae(t) && de.call(t, "callee") && !Iu.call(t, "callee");
      }, X = S.isArray, $_ = mu ? ot(mu) : Ng;
      function Ve(t) {
        return t != null && zi(t.length) && !en(t);
      }
      function Oe(t) {
        return Ae(t) && Ve(t);
      }
      function P_(t) {
        return t === !0 || t === !1 || Ae(t) && je(t) == ln;
      }
      var mn = q0 || Xs, R_ = bu ? ot(bu) : Bg;
      function F_(t) {
        return Ae(t) && t.nodeType === 1 && !Rr(t);
      }
      function L_(t) {
        if (t == null)
          return !0;
        if (Ve(t) && (X(t) || typeof t == "string" || typeof t.splice == "function" || mn(t) || sr(t) || Rn(t)))
          return !t.length;
        var i = ze(t);
        if (i == w || i == ie)
          return !t.size;
        if ($r(t))
          return !ds(t).length;
        for (var s in t)
          if (de.call(t, s))
            return !1;
        return !0;
      }
      function D_(t, i) {
        return Ar(t, i);
      }
      function M_(t, i, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, i) : r;
        return l === r ? Ar(t, i, r, s) : !!l;
      }
      function Ns(t) {
        if (!Ae(t))
          return !1;
        var i = je(t);
        return i == qn || i == $t || typeof t.message == "string" && typeof t.name == "string" && !Rr(t);
      }
      function I_(t) {
        return typeof t == "number" && Bu(t);
      }
      function en(t) {
        if (!Ce(t))
          return !1;
        var i = je(t);
        return i == Gn || i == g || i == ti || i == re;
      }
      function ac(t) {
        return typeof t == "number" && t == K(t);
      }
      function zi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Bt;
      }
      function Ce(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function Ae(t) {
        return t != null && typeof t == "object";
      }
      var sc = yu ? ot(yu) : zg;
      function N_(t, i) {
        return t === i || fs(t, i, Es(i));
      }
      function B_(t, i, s) {
        return s = typeof s == "function" ? s : r, fs(t, i, Es(i), s);
      }
      function W_(t) {
        return oc(t) && t != +t;
      }
      function z_(t) {
        if (Sv(t))
          throw new Y(u);
        return Ju(t);
      }
      function U_(t) {
        return t === null;
      }
      function H_(t) {
        return t == null;
      }
      function oc(t) {
        return typeof t == "number" || Ae(t) && je(t) == _;
      }
      function Rr(t) {
        if (!Ae(t) || je(t) != D)
          return !1;
        var i = pi(t);
        if (i === null)
          return !0;
        var s = de.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && ci.call(s) == B0;
      }
      var Bs = wu ? ot(wu) : Ug;
      function j_(t) {
        return ac(t) && t >= -Bt && t <= Bt;
      }
      var uc = xu ? ot(xu) : Hg;
      function Ui(t) {
        return typeof t == "string" || !X(t) && Ae(t) && je(t) == Le;
      }
      function lt(t) {
        return typeof t == "symbol" || Ae(t) && je(t) == zt;
      }
      var sr = Cu ? ot(Cu) : jg;
      function q_(t) {
        return t === r;
      }
      function G_(t) {
        return Ae(t) && ze(t) == vr;
      }
      function Y_(t) {
        return Ae(t) && je(t) == lp;
      }
      var X_ = Ri(hs), K_ = Ri(function(t, i) {
        return t <= i;
      });
      function lc(t) {
        if (!t)
          return [];
        if (Ve(t))
          return Ui(t) ? Pt(t) : Ke(t);
        if (br && t[br])
          return A0(t[br]());
        var i = ze(t), s = i == w ? es : i == ie ? oi : or;
        return s(t);
      }
      function tn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = kt(t), t === Yt || t === -Yt) {
          var i = t < 0 ? -1 : 1;
          return i * ei;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var i = tn(t), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function cc(t) {
        return t ? En(K(t), 0, Ue) : 0;
      }
      function kt(t) {
        if (typeof t == "number")
          return t;
        if (lt(t))
          return ce;
        if (Ce(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ce(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Ou(t);
        var s = $p.test(t);
        return s || Rp.test(t) ? c0(t.slice(2), s ? 2 : 8) : Op.test(t) ? ce : +t;
      }
      function fc(t) {
        return Ht(t, Ze(t));
      }
      function V_(t) {
        return t ? En(K(t), -Bt, Bt) : t === 0 ? t : 0;
      }
      function oe(t) {
        return t == null ? "" : ut(t);
      }
      var Z_ = rr(function(t, i) {
        if ($r(i) || Ve(i)) {
          Ht(i, De(i), t);
          return;
        }
        for (var s in i)
          de.call(i, s) && Sr(t, s, i[s]);
      }), dc = rr(function(t, i) {
        Ht(i, Ze(i), t);
      }), Hi = rr(function(t, i, s, l) {
        Ht(i, Ze(i), t, l);
      }), J_ = rr(function(t, i, s, l) {
        Ht(i, De(i), t, l);
      }), Q_ = Jt(ss);
      function em(t, i) {
        var s = nr(t);
        return i == null ? s : ju(s, i);
      }
      var tm = Z(function(t, i) {
        t = ve(t);
        var s = -1, l = i.length, f = l > 2 ? i[2] : r;
        for (f && qe(i[0], i[1], f) && (l = 1); ++s < l; )
          for (var p = i[s], v = Ze(p), y = -1, C = v.length; ++y < C; ) {
            var A = v[y], E = t[A];
            (E === r || Ft(E, Qn[A]) && !de.call(t, A)) && (t[A] = p[A]);
          }
        return t;
      }), nm = Z(function(t) {
        return t.push(r, Ol), st(hc, r, t);
      });
      function rm(t, i) {
        return Tu(t, z(i, 3), Ut);
      }
      function im(t, i) {
        return Tu(t, z(i, 3), us);
      }
      function am(t, i) {
        return t == null ? t : os(t, z(i, 3), Ze);
      }
      function sm(t, i) {
        return t == null ? t : Ku(t, z(i, 3), Ze);
      }
      function om(t, i) {
        return t && Ut(t, z(i, 3));
      }
      function um(t, i) {
        return t && us(t, z(i, 3));
      }
      function lm(t) {
        return t == null ? [] : Si(t, De(t));
      }
      function cm(t) {
        return t == null ? [] : Si(t, Ze(t));
      }
      function Ws(t, i, s) {
        var l = t == null ? r : On(t, i);
        return l === r ? s : l;
      }
      function fm(t, i) {
        return t != null && Rl(t, i, Lg);
      }
      function zs(t, i) {
        return t != null && Rl(t, i, Dg);
      }
      var dm = Sl(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = fi.call(i)), t[i] = s;
      }, Hs(Je)), hm = Sl(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = fi.call(i)), de.call(t, i) ? t[i].push(s) : t[i] = [s];
      }, z), pm = Z(kr);
      function De(t) {
        return Ve(t) ? Uu(t) : ds(t);
      }
      function Ze(t) {
        return Ve(t) ? Uu(t, !0) : qg(t);
      }
      function gm(t, i) {
        var s = {};
        return i = z(i, 3), Ut(t, function(l, f, p) {
          Vt(s, i(l, f, p), l);
        }), s;
      }
      function vm(t, i) {
        var s = {};
        return i = z(i, 3), Ut(t, function(l, f, p) {
          Vt(s, f, i(l, f, p));
        }), s;
      }
      var _m = rr(function(t, i, s) {
        Ti(t, i, s);
      }), hc = rr(function(t, i, s, l) {
        Ti(t, i, s, l);
      }), mm = Jt(function(t, i) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        i = we(i, function(p) {
          return p = vn(p, t), l || (l = p.length > 1), p;
        }), Ht(t, ks(t), s), l && (s = Ct(s, O | R | L, dv));
        for (var f = i.length; f--; )
          ms(s, i[f]);
        return s;
      });
      function bm(t, i) {
        return pc(t, Wi(z(i)));
      }
      var ym = Jt(function(t, i) {
        return t == null ? {} : Yg(t, i);
      });
      function pc(t, i) {
        if (t == null)
          return {};
        var s = we(ks(t), function(l) {
          return [l];
        });
        return i = z(i), al(t, s, function(l, f) {
          return i(l, f[0]);
        });
      }
      function wm(t, i, s) {
        i = vn(i, t);
        var l = -1, f = i.length;
        for (f || (f = 1, t = r); ++l < f; ) {
          var p = t == null ? r : t[jt(i[l])];
          p === r && (l = f, p = s), t = en(p) ? p.call(t) : p;
        }
        return t;
      }
      function xm(t, i, s) {
        return t == null ? t : Er(t, i, s);
      }
      function Cm(t, i, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Er(t, i, s, l);
      }
      var gc = Al(De), vc = Al(Ze);
      function Sm(t, i, s) {
        var l = X(t), f = l || mn(t) || sr(t);
        if (i = z(i, 4), s == null) {
          var p = t && t.constructor;
          f ? s = l ? new p() : [] : Ce(t) ? s = en(p) ? nr(pi(t)) : {} : s = {};
        }
        return (f ? yt : Ut)(t, function(v, y, C) {
          return i(s, v, y, C);
        }), s;
      }
      function Tm(t, i) {
        return t == null ? !0 : ms(t, i);
      }
      function km(t, i, s) {
        return t == null ? t : cl(t, i, ws(s));
      }
      function Am(t, i, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : cl(t, i, ws(s), l);
      }
      function or(t) {
        return t == null ? [] : Qa(t, De(t));
      }
      function Em(t) {
        return t == null ? [] : Qa(t, Ze(t));
      }
      function Om(t, i, s) {
        return s === r && (s = i, i = r), s !== r && (s = kt(s), s = s === s ? s : 0), i !== r && (i = kt(i), i = i === i ? i : 0), En(kt(t), i, s);
      }
      function $m(t, i, s) {
        return i = tn(i), s === r ? (s = i, i = 0) : s = tn(s), t = kt(t), Mg(t, i, s);
      }
      function Pm(t, i, s) {
        if (s && typeof s != "boolean" && qe(t, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof t == "boolean" && (s = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = tn(t), i === r ? (i = t, t = 0) : i = tn(i)), t > i) {
          var l = t;
          t = i, i = l;
        }
        if (s || t % 1 || i % 1) {
          var f = Wu();
          return We(t + f * (i - t + l0("1e-" + ((f + "").length - 1))), i);
        }
        return gs(t, i);
      }
      var Rm = ir(function(t, i, s) {
        return i = i.toLowerCase(), t + (s ? _c(i) : i);
      });
      function _c(t) {
        return Us(oe(t).toLowerCase());
      }
      function mc(t) {
        return t = oe(t), t && t.replace(Lp, x0).replace(Qp, "");
      }
      function Fm(t, i, s) {
        t = oe(t), i = ut(i);
        var l = t.length;
        s = s === r ? l : En(K(s), 0, l);
        var f = s;
        return s -= i.length, s >= 0 && t.slice(s, f) == i;
      }
      function Lm(t) {
        return t = oe(t), t && pp.test(t) ? t.replace(Ko, C0) : t;
      }
      function Dm(t) {
        return t = oe(t), t && yp.test(t) ? t.replace(Ia, "\\$&") : t;
      }
      var Mm = ir(function(t, i, s) {
        return t + (s ? "-" : "") + i.toLowerCase();
      }), Im = ir(function(t, i, s) {
        return t + (s ? " " : "") + i.toLowerCase();
      }), Nm = wl("toLowerCase");
      function Bm(t, i, s) {
        t = oe(t), i = K(i);
        var l = i ? Zn(t) : 0;
        if (!i || l >= i)
          return t;
        var f = (i - l) / 2;
        return Pi(mi(f), s) + t + Pi(_i(f), s);
      }
      function Wm(t, i, s) {
        t = oe(t), i = K(i);
        var l = i ? Zn(t) : 0;
        return i && l < i ? t + Pi(i - l, s) : t;
      }
      function zm(t, i, s) {
        t = oe(t), i = K(i);
        var l = i ? Zn(t) : 0;
        return i && l < i ? Pi(i - l, s) + t : t;
      }
      function Um(t, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), K0(oe(t).replace(Na, ""), i || 0);
      }
      function Hm(t, i, s) {
        return (s ? qe(t, i, s) : i === r) ? i = 1 : i = K(i), vs(oe(t), i);
      }
      function jm() {
        var t = arguments, i = oe(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var qm = ir(function(t, i, s) {
        return t + (s ? "_" : "") + i.toLowerCase();
      });
      function Gm(t, i, s) {
        return s && typeof s != "number" && qe(t, i, s) && (i = s = r), s = s === r ? Ue : s >>> 0, s ? (t = oe(t), t && (typeof i == "string" || i != null && !Bs(i)) && (i = ut(i), !i && Vn(t)) ? _n(Pt(t), 0, s) : t.split(i, s)) : [];
      }
      var Ym = ir(function(t, i, s) {
        return t + (s ? " " : "") + Us(i);
      });
      function Xm(t, i, s) {
        return t = oe(t), s = s == null ? 0 : En(K(s), 0, t.length), i = ut(i), t.slice(s, s + i.length) == i;
      }
      function Km(t, i, s) {
        var l = d.templateSettings;
        s && qe(t, i, s) && (i = r), t = oe(t), i = Hi({}, i, l, El);
        var f = Hi({}, i.imports, l.imports, El), p = De(f), v = Qa(f, p), y, C, A = 0, E = i.interpolate || ni, P = "__p += '", M = ts(
          (i.escape || ni).source + "|" + E.source + "|" + (E === Vo ? Ep : ni).source + "|" + (i.evaluate || ni).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (de.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++i0 + "]") + `
`;
        t.replace(M, function(H, Q, te, ct, Ge, ft) {
          return te || (te = ct), P += t.slice(A, ft).replace(Dp, S0), Q && (y = !0, P += `' +
__e(` + Q + `) +
'`), Ge && (C = !0, P += `';
` + Ge + `;
__p += '`), te && (P += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), A = ft + H.length, H;
        }), P += `';
`;
        var U = de.call(i, "variable") && i.variable;
        if (!U)
          P = `with (obj) {
` + P + `
}
`;
        else if (kp.test(U))
          throw new Y(h);
        P = (C ? P.replace(cp, "") : P).replace(fp, "$1").replace(dp, "$1;"), P = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var V = yc(function() {
          return se(p, W + "return " + P).apply(r, v);
        });
        if (V.source = P, Ns(V))
          throw V;
        return V;
      }
      function Vm(t) {
        return oe(t).toLowerCase();
      }
      function Zm(t) {
        return oe(t).toUpperCase();
      }
      function Jm(t, i, s) {
        if (t = oe(t), t && (s || i === r))
          return Ou(t);
        if (!t || !(i = ut(i)))
          return t;
        var l = Pt(t), f = Pt(i), p = $u(l, f), v = Pu(l, f) + 1;
        return _n(l, p, v).join("");
      }
      function Qm(t, i, s) {
        if (t = oe(t), t && (s || i === r))
          return t.slice(0, Fu(t) + 1);
        if (!t || !(i = ut(i)))
          return t;
        var l = Pt(t), f = Pu(l, Pt(i)) + 1;
        return _n(l, 0, f).join("");
      }
      function eb(t, i, s) {
        if (t = oe(t), t && (s || i === r))
          return t.replace(Na, "");
        if (!t || !(i = ut(i)))
          return t;
        var l = Pt(t), f = $u(l, Pt(i));
        return _n(l, f).join("");
      }
      function tb(t, i) {
        var s = jn, l = xa;
        if (Ce(i)) {
          var f = "separator" in i ? i.separator : f;
          s = "length" in i ? K(i.length) : s, l = "omission" in i ? ut(i.omission) : l;
        }
        t = oe(t);
        var p = t.length;
        if (Vn(t)) {
          var v = Pt(t);
          p = v.length;
        }
        if (s >= p)
          return t;
        var y = s - Zn(l);
        if (y < 1)
          return l;
        var C = v ? _n(v, 0, y).join("") : t.slice(0, y);
        if (f === r)
          return C + l;
        if (v && (y += C.length - y), Bs(f)) {
          if (t.slice(y).search(f)) {
            var A, E = C;
            for (f.global || (f = ts(f.source, oe(Zo.exec(f)) + "g")), f.lastIndex = 0; A = f.exec(E); )
              var P = A.index;
            C = C.slice(0, P === r ? y : P);
          }
        } else if (t.indexOf(ut(f), y) != y) {
          var M = C.lastIndexOf(f);
          M > -1 && (C = C.slice(0, M));
        }
        return C + l;
      }
      function nb(t) {
        return t = oe(t), t && hp.test(t) ? t.replace(Xo, P0) : t;
      }
      var rb = ir(function(t, i, s) {
        return t + (s ? " " : "") + i.toUpperCase();
      }), Us = wl("toUpperCase");
      function bc(t, i, s) {
        return t = oe(t), i = s ? r : i, i === r ? k0(t) ? L0(t) : _0(t) : t.match(i) || [];
      }
      var yc = Z(function(t, i) {
        try {
          return st(t, r, i);
        } catch (s) {
          return Ns(s) ? s : new Y(s);
        }
      }), ib = Jt(function(t, i) {
        return yt(i, function(s) {
          s = jt(s), Vt(t, s, Ms(t[s], t));
        }), t;
      });
      function ab(t) {
        var i = t == null ? 0 : t.length, s = z();
        return t = i ? we(t, function(l) {
          if (typeof l[1] != "function")
            throw new wt(c);
          return [s(l[0]), l[1]];
        }) : [], Z(function(l) {
          for (var f = -1; ++f < i; ) {
            var p = t[f];
            if (st(p[0], this, l))
              return st(p[1], this, l);
          }
        });
      }
      function sb(t) {
        return Pg(Ct(t, O));
      }
      function Hs(t) {
        return function() {
          return t;
        };
      }
      function ob(t, i) {
        return t == null || t !== t ? i : t;
      }
      var ub = Cl(), lb = Cl(!0);
      function Je(t) {
        return t;
      }
      function js(t) {
        return Qu(typeof t == "function" ? t : Ct(t, O));
      }
      function cb(t) {
        return tl(Ct(t, O));
      }
      function fb(t, i) {
        return nl(t, Ct(i, O));
      }
      var db = Z(function(t, i) {
        return function(s) {
          return kr(s, t, i);
        };
      }), hb = Z(function(t, i) {
        return function(s) {
          return kr(t, s, i);
        };
      });
      function qs(t, i, s) {
        var l = De(i), f = Si(i, l);
        s == null && !(Ce(i) && (f.length || !l.length)) && (s = i, i = t, t = this, f = Si(i, De(i)));
        var p = !(Ce(s) && "chain" in s) || !!s.chain, v = en(t);
        return yt(f, function(y) {
          var C = i[y];
          t[y] = C, v && (t.prototype[y] = function() {
            var A = this.__chain__;
            if (p || A) {
              var E = t(this.__wrapped__), P = E.__actions__ = Ke(this.__actions__);
              return P.push({ func: C, args: arguments, thisArg: t }), E.__chain__ = A, E;
            }
            return C.apply(t, fn([this.value()], arguments));
          });
        }), t;
      }
      function pb() {
        return Ie._ === this && (Ie._ = W0), this;
      }
      function Gs() {
      }
      function gb(t) {
        return t = K(t), Z(function(i) {
          return rl(i, t);
        });
      }
      var vb = Cs(we), _b = Cs(Su), mb = Cs(Xa);
      function wc(t) {
        return $s(t) ? Ka(jt(t)) : Xg(t);
      }
      function bb(t) {
        return function(i) {
          return t == null ? r : On(t, i);
        };
      }
      var yb = Tl(), wb = Tl(!0);
      function Ys() {
        return [];
      }
      function Xs() {
        return !1;
      }
      function xb() {
        return {};
      }
      function Cb() {
        return "";
      }
      function Sb() {
        return !0;
      }
      function Tb(t, i) {
        if (t = K(t), t < 1 || t > Bt)
          return [];
        var s = Ue, l = We(t, Ue);
        i = z(i), t -= Ue;
        for (var f = Ja(l, i); ++s < t; )
          i(s);
        return f;
      }
      function kb(t) {
        return X(t) ? we(t, jt) : lt(t) ? [t] : Ke(zl(oe(t)));
      }
      function Ab(t) {
        var i = ++N0;
        return oe(t) + i;
      }
      var Eb = $i(function(t, i) {
        return t + i;
      }, 0), Ob = Ss("ceil"), $b = $i(function(t, i) {
        return t / i;
      }, 1), Pb = Ss("floor");
      function Rb(t) {
        return t && t.length ? Ci(t, Je, ls) : r;
      }
      function Fb(t, i) {
        return t && t.length ? Ci(t, z(i, 2), ls) : r;
      }
      function Lb(t) {
        return Au(t, Je);
      }
      function Db(t, i) {
        return Au(t, z(i, 2));
      }
      function Mb(t) {
        return t && t.length ? Ci(t, Je, hs) : r;
      }
      function Ib(t, i) {
        return t && t.length ? Ci(t, z(i, 2), hs) : r;
      }
      var Nb = $i(function(t, i) {
        return t * i;
      }, 1), Bb = Ss("round"), Wb = $i(function(t, i) {
        return t - i;
      }, 0);
      function zb(t) {
        return t && t.length ? Za(t, Je) : 0;
      }
      function Ub(t, i) {
        return t && t.length ? Za(t, z(i, 2)) : 0;
      }
      return d.after = c_, d.ary = Jl, d.assign = Z_, d.assignIn = dc, d.assignInWith = Hi, d.assignWith = J_, d.at = Q_, d.before = Ql, d.bind = Ms, d.bindAll = ib, d.bindKey = ec, d.castArray = x_, d.chain = Kl, d.chunk = Pv, d.compact = Rv, d.concat = Fv, d.cond = ab, d.conforms = sb, d.constant = Hs, d.countBy = z1, d.create = em, d.curry = tc, d.curryRight = nc, d.debounce = rc, d.defaults = tm, d.defaultsDeep = nm, d.defer = f_, d.delay = d_, d.difference = Lv, d.differenceBy = Dv, d.differenceWith = Mv, d.drop = Iv, d.dropRight = Nv, d.dropRightWhile = Bv, d.dropWhile = Wv, d.fill = zv, d.filter = H1, d.flatMap = G1, d.flatMapDeep = Y1, d.flatMapDepth = X1, d.flatten = ql, d.flattenDeep = Uv, d.flattenDepth = Hv, d.flip = h_, d.flow = ub, d.flowRight = lb, d.fromPairs = jv, d.functions = lm, d.functionsIn = cm, d.groupBy = K1, d.initial = Gv, d.intersection = Yv, d.intersectionBy = Xv, d.intersectionWith = Kv, d.invert = dm, d.invertBy = hm, d.invokeMap = Z1, d.iteratee = js, d.keyBy = J1, d.keys = De, d.keysIn = Ze, d.map = Ii, d.mapKeys = gm, d.mapValues = vm, d.matches = cb, d.matchesProperty = fb, d.memoize = Bi, d.merge = _m, d.mergeWith = hc, d.method = db, d.methodOf = hb, d.mixin = qs, d.negate = Wi, d.nthArg = gb, d.omit = mm, d.omitBy = bm, d.once = p_, d.orderBy = Q1, d.over = vb, d.overArgs = g_, d.overEvery = _b, d.overSome = mb, d.partial = Is, d.partialRight = ic, d.partition = e_, d.pick = ym, d.pickBy = pc, d.property = wc, d.propertyOf = bb, d.pull = Qv, d.pullAll = Yl, d.pullAllBy = e1, d.pullAllWith = t1, d.pullAt = n1, d.range = yb, d.rangeRight = wb, d.rearg = v_, d.reject = r_, d.remove = r1, d.rest = __, d.reverse = Ls, d.sampleSize = a_, d.set = xm, d.setWith = Cm, d.shuffle = s_, d.slice = i1, d.sortBy = l_, d.sortedUniq = f1, d.sortedUniqBy = d1, d.split = Gm, d.spread = m_, d.tail = h1, d.take = p1, d.takeRight = g1, d.takeRightWhile = v1, d.takeWhile = _1, d.tap = R1, d.throttle = b_, d.thru = Mi, d.toArray = lc, d.toPairs = gc, d.toPairsIn = vc, d.toPath = kb, d.toPlainObject = fc, d.transform = Sm, d.unary = y_, d.union = m1, d.unionBy = b1, d.unionWith = y1, d.uniq = w1, d.uniqBy = x1, d.uniqWith = C1, d.unset = Tm, d.unzip = Ds, d.unzipWith = Xl, d.update = km, d.updateWith = Am, d.values = or, d.valuesIn = Em, d.without = S1, d.words = bc, d.wrap = w_, d.xor = T1, d.xorBy = k1, d.xorWith = A1, d.zip = E1, d.zipObject = O1, d.zipObjectDeep = $1, d.zipWith = P1, d.entries = gc, d.entriesIn = vc, d.extend = dc, d.extendWith = Hi, qs(d, d), d.add = Eb, d.attempt = yc, d.camelCase = Rm, d.capitalize = _c, d.ceil = Ob, d.clamp = Om, d.clone = C_, d.cloneDeep = T_, d.cloneDeepWith = k_, d.cloneWith = S_, d.conformsTo = A_, d.deburr = mc, d.defaultTo = ob, d.divide = $b, d.endsWith = Fm, d.eq = Ft, d.escape = Lm, d.escapeRegExp = Dm, d.every = U1, d.find = j1, d.findIndex = Hl, d.findKey = rm, d.findLast = q1, d.findLastIndex = jl, d.findLastKey = im, d.floor = Pb, d.forEach = Vl, d.forEachRight = Zl, d.forIn = am, d.forInRight = sm, d.forOwn = om, d.forOwnRight = um, d.get = Ws, d.gt = E_, d.gte = O_, d.has = fm, d.hasIn = zs, d.head = Gl, d.identity = Je, d.includes = V1, d.indexOf = qv, d.inRange = $m, d.invoke = pm, d.isArguments = Rn, d.isArray = X, d.isArrayBuffer = $_, d.isArrayLike = Ve, d.isArrayLikeObject = Oe, d.isBoolean = P_, d.isBuffer = mn, d.isDate = R_, d.isElement = F_, d.isEmpty = L_, d.isEqual = D_, d.isEqualWith = M_, d.isError = Ns, d.isFinite = I_, d.isFunction = en, d.isInteger = ac, d.isLength = zi, d.isMap = sc, d.isMatch = N_, d.isMatchWith = B_, d.isNaN = W_, d.isNative = z_, d.isNil = H_, d.isNull = U_, d.isNumber = oc, d.isObject = Ce, d.isObjectLike = Ae, d.isPlainObject = Rr, d.isRegExp = Bs, d.isSafeInteger = j_, d.isSet = uc, d.isString = Ui, d.isSymbol = lt, d.isTypedArray = sr, d.isUndefined = q_, d.isWeakMap = G_, d.isWeakSet = Y_, d.join = Vv, d.kebabCase = Mm, d.last = Tt, d.lastIndexOf = Zv, d.lowerCase = Im, d.lowerFirst = Nm, d.lt = X_, d.lte = K_, d.max = Rb, d.maxBy = Fb, d.mean = Lb, d.meanBy = Db, d.min = Mb, d.minBy = Ib, d.stubArray = Ys, d.stubFalse = Xs, d.stubObject = xb, d.stubString = Cb, d.stubTrue = Sb, d.multiply = Nb, d.nth = Jv, d.noConflict = pb, d.noop = Gs, d.now = Ni, d.pad = Bm, d.padEnd = Wm, d.padStart = zm, d.parseInt = Um, d.random = Pm, d.reduce = t_, d.reduceRight = n_, d.repeat = Hm, d.replace = jm, d.result = wm, d.round = Bb, d.runInContext = x, d.sample = i_, d.size = o_, d.snakeCase = qm, d.some = u_, d.sortedIndex = a1, d.sortedIndexBy = s1, d.sortedIndexOf = o1, d.sortedLastIndex = u1, d.sortedLastIndexBy = l1, d.sortedLastIndexOf = c1, d.startCase = Ym, d.startsWith = Xm, d.subtract = Wb, d.sum = zb, d.sumBy = Ub, d.template = Km, d.times = Tb, d.toFinite = tn, d.toInteger = K, d.toLength = cc, d.toLower = Vm, d.toNumber = kt, d.toSafeInteger = V_, d.toString = oe, d.toUpper = Zm, d.trim = Jm, d.trimEnd = Qm, d.trimStart = eb, d.truncate = tb, d.unescape = nb, d.uniqueId = Ab, d.upperCase = rb, d.upperFirst = Us, d.each = Vl, d.eachRight = Zl, d.first = Gl, qs(d, function() {
        var t = {};
        return Ut(d, function(i, s) {
          de.call(d.prototype, s) || (t[s] = i);
        }), t;
      }(), { chain: !1 }), d.VERSION = a, yt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        d[t].placeholder = d;
      }), yt(["drop", "take"], function(t, i) {
        ee.prototype[t] = function(s) {
          s = s === r ? 1 : Re(K(s), 0);
          var l = this.__filtered__ && !i ? new ee(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = We(s, l.__takeCount__) : l.__views__.push({
            size: We(s, Ue),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ee.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), yt(["filter", "map", "takeWhile"], function(t, i) {
        var s = i + 1, l = s == Qr || s == gr;
        ee.prototype[t] = function(f) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: z(f, 3),
            type: s
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), yt(["head", "last"], function(t, i) {
        var s = "take" + (i ? "Right" : "");
        ee.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), yt(["initial", "tail"], function(t, i) {
        var s = "drop" + (i ? "" : "Right");
        ee.prototype[t] = function() {
          return this.__filtered__ ? new ee(this) : this[s](1);
        };
      }), ee.prototype.compact = function() {
        return this.filter(Je);
      }, ee.prototype.find = function(t) {
        return this.filter(t).head();
      }, ee.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ee.prototype.invokeMap = Z(function(t, i) {
        return typeof t == "function" ? new ee(this) : this.map(function(s) {
          return kr(s, t, i);
        });
      }), ee.prototype.reject = function(t) {
        return this.filter(Wi(z(t)));
      }, ee.prototype.slice = function(t, i) {
        t = K(t);
        var s = this;
        return s.__filtered__ && (t > 0 || i < 0) ? new ee(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), i !== r && (i = K(i), s = i < 0 ? s.dropRight(-i) : s.take(i - t)), s);
      }, ee.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ee.prototype.toArray = function() {
        return this.take(Ue);
      }, Ut(ee.prototype, function(t, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), f = d[l ? "take" + (i == "last" ? "Right" : "") : i], p = l || /^find/.test(i);
        f && (d.prototype[i] = function() {
          var v = this.__wrapped__, y = l ? [1] : arguments, C = v instanceof ee, A = y[0], E = C || X(v), P = function(Q) {
            var te = f.apply(d, fn([Q], y));
            return l && M ? te[0] : te;
          };
          E && s && typeof A == "function" && A.length != 1 && (C = E = !1);
          var M = this.__chain__, W = !!this.__actions__.length, U = p && !M, V = C && !W;
          if (!p && E) {
            v = V ? v : new ee(this);
            var H = t.apply(v, y);
            return H.__actions__.push({ func: Mi, args: [P], thisArg: r }), new xt(H, M);
          }
          return U && V ? t.apply(this, y) : (H = this.thru(P), U ? l ? H.value()[0] : H.value() : H);
        });
      }), yt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = ui[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        d.prototype[t] = function() {
          var f = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return i.apply(X(p) ? p : [], f);
          }
          return this[s](function(v) {
            return i.apply(X(v) ? v : [], f);
          });
        };
      }), Ut(ee.prototype, function(t, i) {
        var s = d[i];
        if (s) {
          var l = s.name + "";
          de.call(tr, l) || (tr[l] = []), tr[l].push({ name: i, func: s });
        }
      }), tr[Oi(r, j).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = ng, ee.prototype.reverse = rg, ee.prototype.value = ig, d.prototype.at = F1, d.prototype.chain = L1, d.prototype.commit = D1, d.prototype.next = M1, d.prototype.plant = N1, d.prototype.reverse = B1, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = W1, d.prototype.first = d.prototype.head, br && (d.prototype[br] = I1), d;
    }, Jn = D0();
    Sn ? ((Sn.exports = Jn)._ = Jn, ja._ = Jn) : Ie._ = Jn;
  }).call(Qe);
})(na, na.exports);
var Nn = na.exports, Dh = Symbol.for("immer-nothing"), Zc = Symbol.for("immer-draftable"), ht = Symbol.for("immer-state"), gC = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(n) {
    return `The plugin for '${n}' has not been loaded into Immer. To enable the plugin, import and call \`enable${n}()\` when initializing your application.`;
  },
  function(n) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${n}'`;
  },
  "This object has been frozen and should not be mutated",
  function(n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(n) {
    return `'current' expects a draft, got: ${n}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(n) {
    return `'original' expects a draft, got: ${n}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function et(n, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = gC[n], a = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${a}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var fr = Object.getPrototypeOf;
function dr(n) {
  return !!n && !!n[ht];
}
function Wn(n) {
  var e;
  return n ? Mh(n) || Array.isArray(n) || !!n[Zc] || !!((e = n.constructor) != null && e[Zc]) || ga(n) || va(n) : !1;
}
var vC = Object.prototype.constructor.toString();
function Mh(n) {
  if (!n || typeof n != "object")
    return !1;
  const e = fr(n);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === vC;
}
function ra(n, e) {
  pa(n) === 0 ? Reflect.ownKeys(n).forEach((r) => {
    e(r, n[r], n);
  }) : n.forEach((r, a) => e(a, r, n));
}
function pa(n) {
  const e = n[ht];
  return e ? e.type_ : Array.isArray(n) ? 1 : ga(n) ? 2 : va(n) ? 3 : 0;
}
function To(n, e) {
  return pa(n) === 2 ? n.has(e) : Object.prototype.hasOwnProperty.call(n, e);
}
function Ih(n, e, r) {
  const a = pa(n);
  a === 2 ? n.set(e, r) : a === 3 ? n.add(r) : n[e] = r;
}
function _C(n, e) {
  return n === e ? n !== 0 || 1 / n === 1 / e : n !== n && e !== e;
}
function ga(n) {
  return n instanceof Map;
}
function va(n) {
  return n instanceof Set;
}
function Mn(n) {
  return n.copy_ || n.base_;
}
function ko(n, e) {
  if (ga(n))
    return new Map(n);
  if (va(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  if (!e && Mh(n))
    return fr(n) ? { ...n } : Object.assign(/* @__PURE__ */ Object.create(null), n);
  const r = Object.getOwnPropertyDescriptors(n);
  delete r[ht];
  let a = Reflect.ownKeys(r);
  for (let o = 0; o < a.length; o++) {
    const u = a[o], c = r[u];
    c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (r[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: c.enumerable,
      value: n[u]
    });
  }
  return Object.create(fr(n), r);
}
function _a(n, e = !1) {
  return ma(n) || dr(n) || !Wn(n) || (pa(n) > 1 && (n.set = n.add = n.clear = n.delete = mC), Object.freeze(n), e && Object.entries(n).forEach(([r, a]) => _a(a, !0))), n;
}
function mC() {
  et(2);
}
function ma(n) {
  return Object.isFrozen(n);
}
var bC = {};
function zn(n) {
  const e = bC[n];
  return e || et(0, n), e;
}
var jr;
function Nh() {
  return jr;
}
function yC(n, e) {
  return {
    drafts_: [],
    parent_: n,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Jc(n, e) {
  e && (zn("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = e);
}
function Ao(n) {
  Eo(n), n.drafts_.forEach(wC), n.drafts_ = null;
}
function Eo(n) {
  n === jr && (jr = n.parent_);
}
function Qc(n) {
  return jr = yC(jr, n);
}
function wC(n) {
  const e = n[ht];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ef(n, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return n !== void 0 && n !== r ? (r[ht].modified_ && (Ao(e), et(4)), Wn(n) && (n = ia(e, n), e.parent_ || aa(e, n)), e.patches_ && zn("Patches").generateReplacementPatches_(
    r[ht].base_,
    n,
    e.patches_,
    e.inversePatches_
  )) : n = ia(e, r, []), Ao(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), n !== Dh ? n : void 0;
}
function ia(n, e, r) {
  if (ma(e))
    return e;
  const a = e[ht];
  if (!a)
    return ra(
      e,
      (o, u) => tf(n, a, e, o, u, r)
    ), e;
  if (a.scope_ !== n)
    return e;
  if (!a.modified_)
    return aa(n, a.base_, !0), a.base_;
  if (!a.finalized_) {
    a.finalized_ = !0, a.scope_.unfinalizedDrafts_--;
    const o = a.copy_;
    let u = o, c = !1;
    a.type_ === 3 && (u = new Set(o), o.clear(), c = !0), ra(
      u,
      (h, m) => tf(n, a, o, h, m, r, c)
    ), aa(n, o, !1), r && n.patches_ && zn("Patches").generatePatches_(
      a,
      r,
      n.patches_,
      n.inversePatches_
    );
  }
  return a.copy_;
}
function tf(n, e, r, a, o, u, c) {
  if (process.env.NODE_ENV !== "production" && o === r && et(5), dr(o)) {
    const h = u && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !To(e.assigned_, a) ? u.concat(a) : void 0, m = ia(n, o, h);
    if (Ih(r, a, m), dr(m))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else
    c && r.add(o);
  if (Wn(o) && !ma(o)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    ia(n, o), (!e || !e.scope_.parent_) && typeof a != "symbol" && Object.prototype.propertyIsEnumerable.call(r, a) && aa(n, o);
  }
}
function aa(n, e, r = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && _a(e, r);
}
function xC(n, e) {
  const r = Array.isArray(n), a = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Nh(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: n,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = a, u = Uo;
  r && (o = [a], u = qr);
  const { revoke: c, proxy: h } = Proxy.revocable(o, u);
  return a.draft_ = h, a.revoke_ = c, h;
}
var Uo = {
  get(n, e) {
    if (e === ht)
      return n;
    const r = Mn(n);
    if (!To(r, e))
      return CC(n, r, e);
    const a = r[e];
    return n.finalized_ || !Wn(a) ? a : a === eo(n.base_, e) ? (to(n), n.copy_[e] = $o(a, n)) : a;
  },
  has(n, e) {
    return e in Mn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(Mn(n));
  },
  set(n, e, r) {
    const a = Bh(Mn(n), e);
    if (a != null && a.set)
      return a.set.call(n.draft_, r), !0;
    if (!n.modified_) {
      const o = eo(Mn(n), e), u = o == null ? void 0 : o[ht];
      if (u && u.base_ === r)
        return n.copy_[e] = r, n.assigned_[e] = !1, !0;
      if (_C(r, o) && (r !== void 0 || To(n.base_, e)))
        return !0;
      to(n), Oo(n);
    }
    return n.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in n.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(n.copy_[e]) || (n.copy_[e] = r, n.assigned_[e] = !0), !0;
  },
  deleteProperty(n, e) {
    return eo(n.base_, e) !== void 0 || e in n.base_ ? (n.assigned_[e] = !1, to(n), Oo(n)) : delete n.assigned_[e], n.copy_ && delete n.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, e) {
    const r = Mn(n), a = Reflect.getOwnPropertyDescriptor(r, e);
    return a && {
      writable: !0,
      configurable: n.type_ !== 1 || e !== "length",
      enumerable: a.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    et(11);
  },
  getPrototypeOf(n) {
    return fr(n.base_);
  },
  setPrototypeOf() {
    et(12);
  }
}, qr = {};
ra(Uo, (n, e) => {
  qr[n] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
qr.deleteProperty = function(n, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && et(13), qr.set.call(this, n, e, void 0);
};
qr.set = function(n, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && et(14), Uo.set.call(this, n[0], e, r, n[0]);
};
function eo(n, e) {
  const r = n[ht];
  return (r ? Mn(r) : n)[e];
}
function CC(n, e, r) {
  var o;
  const a = Bh(e, r);
  return a ? "value" in a ? a.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = a.get) == null ? void 0 : o.call(n.draft_)
  ) : void 0;
}
function Bh(n, e) {
  if (!(e in n))
    return;
  let r = fr(n);
  for (; r; ) {
    const a = Object.getOwnPropertyDescriptor(r, e);
    if (a)
      return a;
    r = fr(r);
  }
}
function Oo(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && Oo(n.parent_));
}
function to(n) {
  n.copy_ || (n.copy_ = ko(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var SC = class {
  constructor(n) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, a) => {
      if (typeof e == "function" && typeof r != "function") {
        const u = r;
        r = e;
        const c = this;
        return function(m = u, ...b) {
          return c.produce(m, (T) => r.call(this, T, ...b));
        };
      }
      typeof r != "function" && et(6), a !== void 0 && typeof a != "function" && et(7);
      let o;
      if (Wn(e)) {
        const u = Qc(this), c = $o(e, void 0);
        let h = !0;
        try {
          o = r(c), h = !1;
        } finally {
          h ? Ao(u) : Eo(u);
        }
        return Jc(u, a), ef(o, u);
      } else if (!e || typeof e != "object") {
        if (o = r(e), o === void 0 && (o = e), o === Dh && (o = void 0), this.autoFreeze_ && _a(o, !0), a) {
          const u = [], c = [];
          zn("Patches").generateReplacementPatches_(e, o, u, c), a(u, c);
        }
        return o;
      } else
        et(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (c, ...h) => this.produceWithPatches(c, (m) => e(m, ...h));
      let a, o;
      return [this.produce(e, r, (c, h) => {
        a = c, o = h;
      }), a, o];
    }, typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze), typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Wn(n) || et(8), dr(n) && (n = TC(n));
    const e = Qc(this), r = $o(n, void 0);
    return r[ht].isManual_ = !0, Eo(e), r;
  }
  finishDraft(n, e) {
    const r = n && n[ht];
    (!r || !r.isManual_) && et(9);
    const { scope_: a } = r;
    return Jc(a, e), ef(void 0, a);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, e) {
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const o = e[r];
      if (o.path.length === 0 && o.op === "replace") {
        n = o.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const a = zn("Patches").applyPatches_;
    return dr(n) ? a(n, e) : this.produce(
      n,
      (o) => a(o, e)
    );
  }
};
function $o(n, e) {
  const r = ga(n) ? zn("MapSet").proxyMap_(n, e) : va(n) ? zn("MapSet").proxySet_(n, e) : xC(n, e);
  return (e ? e.scope_ : Nh()).drafts_.push(r), r;
}
function TC(n) {
  return dr(n) || et(10, n), Wh(n);
}
function Wh(n) {
  if (!Wn(n) || ma(n))
    return n;
  const e = n[ht];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = ko(n, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ko(n, !0);
  return ra(r, (a, o) => {
    Ih(r, a, Wh(o));
  }), e && (e.finalized_ = !1), r;
}
var pt = new SC(), Xi = pt.produce;
pt.produceWithPatches.bind(
  pt
);
pt.setAutoFreeze.bind(pt);
pt.setUseStrictShallowCopy.bind(pt);
pt.applyPatches.bind(pt);
pt.createDraft.bind(pt);
pt.finishDraft.bind(pt);
var kC = process.env.NODE_ENV === "production", no = "Invariant failed";
function hr(n, e) {
  if (!n) {
    if (kC)
      throw new Error(no);
    var r = typeof e == "function" ? e() : e, a = r ? "".concat(no, ": ").concat(r) : no;
    throw new Error(a);
  }
}
const Gr = "@@jraft/STYLE_TREE_FRAGMENT";
function zh(n = Gr) {
  return {
    name: n,
    styles: {},
    children: {}
  };
}
function Po(n, e) {
  if (e.length === 0)
    return hr(n), n;
  if (n || (n = {
    name: e[0],
    styles: {},
    children: {}
  }), n.name !== Gr) {
    hr(e[0] === n.name, "unmatch path name");
    const [, ...r] = e;
    return r.length > 0 && (n.children[r[0]] = Po(n.children[r[0]], r)), n;
  }
  return n.children[e[0]] = Po(n.children[e[0]], e), n;
}
function AC(n, e) {
  return Po(n, e), Ki(n, e).styles;
}
function Ki(n, e) {
  const r = wn(n, e);
  return hr(r, "node not found"), r;
}
function wn(n, e) {
  let r = n;
  const a = [...e];
  if (a.length === 0)
    return n;
  for (n.name === Gr && (r = r.children[a[0]]); a.length > 0 && (hr(a[0] === r.name, "unmatch path name"), a.shift(), a.length !== 0); )
    if (r = r.children[a[0]], !r)
      return r;
  return r;
}
function Uh(n, e, r, a = "xs") {
  const o = AC(n, e);
  for (const [u, c] of Object.entries(r))
    o[u] = EC(c, a);
  return n;
}
function EC(n, e = "xs") {
  return n && typeof n == "object" ? n : { [e]: n };
}
const Vi = ["spacing"];
function OC(n) {
  return Nn.isObject(n) ? { xs: "auto", ...n } : {
    xs: typeof n == "number" ? `${n}%` : n
  };
}
function $C(n, e) {
  var r;
  return ((r = n.getData) == null ? void 0 : r.call(n)[e]) ?? n[e];
}
const xe = window.__STORE__ || Ot.observable({
  styles: _a(
    Uh(zh(), Vi, { width: OC($C(Gb, "spacing") ?? 100) })
  ),
  selected: null,
  hasErrors: [],
  colors: [],
  requestSelect: null
});
Reflect.set(window, "__STORE__", xe);
function Ro({ path: n, data: e }) {
  xe.styles = Xi(xe.styles, (r) => {
    Uh(r, n, e);
  });
}
function PC(n) {
  xe.selected = n;
}
const RC = qt({
  props: {
    reports: {
      type: Array
    }
  },
  setup(n) {
    const e = At(() => n.reports.filter(({ style: a }) => !a)), r = At(() => {
      const a = Nn.groupBy(
        n.reports.filter(({ style: u }) => u),
        ({ kind: u }) => u
      );
      return Object.keys(a).map(
        (u) => a[u].reduce(
          (c, { path: h, style: m, message: b }) => (c.path || (c.path = h), m && c.report.push({ style: m, message: b }), c),
          { kind: u, report: [] }
        )
      ).map(({ kind: u, path: c, report: h }) => ({
        kind: u,
        path: c,
        report: Nn.uniqBy(h, ({ style: m }) => m)
      }));
    });
    return {
      general: e,
      report: r,
      selectedKind: At(() => Nn.last((xe.selected || { path: [] }).path)),
      requestSelect(a) {
        xe.requestSelect = a;
      }
    };
  }
});
var FC = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, e.reports.length > 0 ? r("div", [e._l(e.general, function(a) {
    return r("div", { key: a.message, staticClass: "gap-x-2 gap-y-1 flex bg-red-200 cursor-pointer" }, [r("div", { staticClass: "underline" }, [e._v(" " + e._s(a.kind || a.selector) + " ")]), r("div", [r("div", [e._v(e._s(a.message))])])]);
  }), e._l(e.report, function(a) {
    return r("div", { key: a.kind, staticClass: "gap-x-2 gap-y-1 flex cursor-pointer", class: a.kind === e.selectedKind && "bg-yellow-200", attrs: { role: "button" }, on: { click: function(o) {
      return e.requestSelect(a.path);
    } } }, [r("div", { staticClass: "underline", class: a.kind === e.selectedKind ? "text-blue-900" : "text-blue-600", attrs: { role: "button" } }, [e._v(" " + e._s(a.kind) + " ")]), r("div", e._l(a.report, function({ style: o, message: u }) {
      return r("div", { key: o, staticClass: "gap-x-2 flex" }, [r("div", [e._v(e._s(o))]), r("div", [e._v(e._s(u))])]);
    }), 0)]);
  })], 2) : r("div", [e._v("No errors found")]);
}, LC = [], DC = /* @__PURE__ */ Be(
  RC,
  FC,
  LC,
  !1,
  null,
  null,
  null,
  null
);
const MC = DC.exports;
var Cn;
(function(n) {
  n[n.All = 0] = "All", n[n.Two = 1] = "Two", n[n.One = 2] = "One";
})(Cn || (Cn = {}));
let Mt, Ho;
function sa(n, e) {
  if (n.nodeType !== Node.ELEMENT_NODE)
    throw new Error("Can't generate CSS selector for non-element node type.");
  if (n.tagName.toLowerCase() === "html")
    return "html";
  const r = {
    root: document.body,
    idName: (o) => !0,
    className: (o) => !0,
    tagName: (o) => !0,
    attr: (o, u) => !1,
    seedMinLength: 1,
    optimizedMinLength: 2,
    threshold: 1e3,
    maxNumberOfTries: 1e4
  };
  Mt = Object.assign(Object.assign({}, r), e), Ho = IC(Mt.root, r);
  let a = ro(n, Cn.All, () => ro(n, Cn.Two, () => ro(n, Cn.One)));
  if (a) {
    const o = qh(Gh(a, n));
    return o.length > 0 && (a = o[0]), Yr(a);
  } else
    throw new Error("Selector was not found.");
}
function IC(n, e) {
  return n.nodeType === Node.DOCUMENT_NODE ? n : n === e.root ? n.ownerDocument : n;
}
function ro(n, e, r) {
  let a = null, o = [], u = n, c = 0;
  for (; u && u !== Mt.root.parentElement; ) {
    let h = Gi(NC(u)) || Gi(...BC(u)) || Gi(...WC(u)) || Gi(zC(u)) || [UC()];
    const m = HC(u);
    if (e === Cn.All)
      m && (h = h.concat(h.filter(ao).map((b) => io(b, m))));
    else if (e === Cn.Two)
      h = h.slice(0, 1), m && (h = h.concat(h.filter(ao).map((b) => io(b, m))));
    else if (e === Cn.One) {
      const [b] = h = h.slice(0, 1);
      m && ao(b) && (h = [io(b, m)]);
    }
    for (let b of h)
      b.level = c;
    if (o.push(h), o.length >= Mt.seedMinLength && (a = nf(o, r), a))
      break;
    u = u.parentElement, c++;
  }
  return a || (a = nf(o, r)), a;
}
function nf(n, e) {
  const r = qh(jh(n));
  if (r.length > Mt.threshold)
    return e ? e() : null;
  for (let a of r)
    if (Hh(a))
      return a;
  return null;
}
function Yr(n) {
  let e = n[0], r = e.name;
  for (let a = 1; a < n.length; a++) {
    const o = n[a].level || 0;
    e.level === o - 1 ? r = `${n[a].name} > ${r}` : r = `${n[a].name} ${r}`, e = n[a];
  }
  return r;
}
function rf(n) {
  return n.map((e) => e.penalty).reduce((e, r) => e + r, 0);
}
function Hh(n) {
  switch (Ho.querySelectorAll(Yr(n)).length) {
    case 0:
      throw new Error(`Can't select any node with this selector: ${Yr(n)}`);
    case 1:
      return !0;
    default:
      return !1;
  }
}
function NC(n) {
  const e = n.getAttribute("id");
  return e && Mt.idName(e) ? {
    name: "#" + oa(e, { isIdentifier: !0 }),
    penalty: 0
  } : null;
}
function BC(n) {
  return Array.from(n.attributes).filter((r) => Mt.attr(r.name, r.value)).map((r) => ({
    name: "[" + oa(r.name, { isIdentifier: !0 }) + '="' + oa(r.value) + '"]',
    penalty: 0.5
  }));
}
function WC(n) {
  return Array.from(n.classList).filter(Mt.className).map((r) => ({
    name: "." + oa(r, { isIdentifier: !0 }),
    penalty: 1
  }));
}
function zC(n) {
  const e = n.tagName.toLowerCase();
  return Mt.tagName(e) ? {
    name: e,
    penalty: 2
  } : null;
}
function UC() {
  return {
    name: "*",
    penalty: 3
  };
}
function HC(n) {
  const e = n.parentNode;
  if (!e)
    return null;
  let r = e.firstChild;
  if (!r)
    return null;
  let a = 0;
  for (; r && (r.nodeType === Node.ELEMENT_NODE && a++, r !== n); )
    r = r.nextSibling;
  return a;
}
function io(n, e) {
  return {
    name: n.name + `:nth-child(${e})`,
    penalty: n.penalty + 1
  };
}
function ao(n) {
  return n.name !== "html" && !n.name.startsWith("#");
}
function Gi(...n) {
  const e = n.filter(jC);
  return e.length > 0 ? e : null;
}
function jC(n) {
  return n != null;
}
function* jh(n, e = []) {
  if (n.length > 0)
    for (let r of n[0])
      yield* jh(n.slice(1, n.length), e.concat(r));
  else
    yield e;
}
function qh(n) {
  return Array.from(n).sort((e, r) => rf(e) - rf(r));
}
function* Gh(n, e, r = {
  counter: 0,
  visited: /* @__PURE__ */ new Map()
}) {
  if (n.length > 2 && n.length > Mt.optimizedMinLength)
    for (let a = 1; a < n.length - 1; a++) {
      if (r.counter > Mt.maxNumberOfTries)
        return;
      r.counter += 1;
      const o = [...n];
      o.splice(a, 1);
      const u = Yr(o);
      if (r.visited.has(u))
        return;
      Hh(o) && qC(o, e) && (yield o, r.visited.set(u, !0), yield* Gh(o, e, r));
    }
}
function qC(n, e) {
  return Ho.querySelector(Yr(n)) === e;
}
const GC = /[ -,\.\/:-@\[-\^`\{-~]/, YC = /[ -,\.\/:-@\[\]\^`\{-~]/, XC = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, KC = {
  escapeEverything: !1,
  isIdentifier: !1,
  quotes: "single",
  wrap: !1
};
function oa(n, e = {}) {
  const r = Object.assign(Object.assign({}, KC), e);
  r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
  const a = r.quotes == "double" ? '"' : "'", o = r.isIdentifier, u = n.charAt(0);
  let c = "", h = 0;
  const m = n.length;
  for (; h < m; ) {
    const b = n.charAt(h++);
    let T = b.charCodeAt(0), O;
    if (T < 32 || T > 126) {
      if (T >= 55296 && T <= 56319 && h < m) {
        const R = n.charCodeAt(h++);
        (R & 64512) == 56320 ? T = ((T & 1023) << 10) + (R & 1023) + 65536 : h--;
      }
      O = "\\" + T.toString(16).toUpperCase() + " ";
    } else
      r.escapeEverything ? GC.test(b) ? O = "\\" + b : O = "\\" + T.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(b) ? O = "\\" + T.toString(16).toUpperCase() + " " : b == "\\" || !o && (b == '"' && a == b || b == "'" && a == b) || o && YC.test(b) ? O = "\\" + b : O = b;
    c += O;
  }
  return o && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(XC, function(b, T, O) {
    return T && T.length % 2 ? b : (T || "") + O;
  }), !o && r.wrap ? a + c + a : c;
}
function Yh(n) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var a = Array.from(typeof n == "string" ? [n] : n);
  a[a.length - 1] = a[a.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = a.reduce(function(h, m) {
    var b = m.match(/\n([\t ]+|(?!\s).)/g);
    return b ? h.concat(b.map(function(T) {
      var O, R;
      return (R = (O = T.match(/[\t ]/g)) === null || O === void 0 ? void 0 : O.length) !== null && R !== void 0 ? R : 0;
    })) : h;
  }, []);
  if (o.length) {
    var u = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    a = a.map(function(h) {
      return h.replace(u, `
`);
    });
  }
  a[0] = a[0].replace(/^\r?\n/, "");
  var c = a[0];
  return e.forEach(function(h, m) {
    var b = c.match(/(?:^|\n)( *)$/), T = b ? b[1] : "", O = h;
    typeof h == "string" && h.includes(`
`) && (O = String(h).split(`
`).map(function(R, L) {
      return L === 0 ? R : "" + T + R;
    }).join(`
`)), c += O + a[m + 1];
  }), c;
}
function Xh(n) {
  hr(n.length > 0, "expect a least one selector");
  const e = n[n.length - 1];
  return e.startsWith("&") ? (hr(n.length > 1, "expect has parent"), `${Xh(n.slice(0, -1))} ${e.replace("& ", "")}`) : `.${e}`;
}
function VC({ getStore: n, key: e = "styles" }) {
  return {
    resolveSelector: Xh,
    nextTick: af,
    async update({ path: r, property: a, value: o }) {
      const u = n();
      let c;
      return u[e] = Xi(u[e], (h) => {
        const m = Ki(h, r);
        c = m.styles[a], m.styles[a] = typeof o != "object" ? { xs: o } : o;
      }), () => {
        u[e] = Xi(u[e], (h) => {
          const m = Ki(h, r);
          m.styles[a] = c;
        });
      };
    },
    async traverse(r) {
      const a = n(), o = a[e], u = [[o, []]], c = /* @__PURE__ */ new Set();
      for (; u.length > 0; ) {
        const [h, m] = u.shift();
        if (h === o && h.name === Gr) {
          for (const b of Object.values(h.children))
            c.add(b), u.push([b, [...m, b.name]]);
          continue;
        }
        for (const b of Object.values(h.children))
          u.push([b, [...m, b.name]]);
        if (c.has(h)) {
          c.delete(h);
          continue;
        }
        if (h.name !== Gr)
          try {
            await r({
              node: h,
              name: h.name,
              path: m,
              apply: async (b) => {
                a[e] = Xi(o, (T) => {
                  const O = Ki(T, m);
                  O.styles = b;
                }), await af();
              }
            });
          } catch (b) {
            console.error(b);
          }
      }
      a[e] = o;
    }
  };
}
function af() {
  return new Promise((n) => {
    setTimeout(n, 0);
  });
}
const ZC = [8, 280], JC = [1, 2], Xr = VC({ getStore: () => Reflect.get(window, "__STORE__") }), sf = (n) => n, QC = {
  ff0000: "rgb(255, 0, 0)",
  "00ff00": "rgb(0, 255, 0)",
  "0000ff": "rgb(0, 0, 255)"
}, Kh = {
  fontSize: {
    // because Chrome has minimal font-size limit for accessibility, so here use 14 as font size lower bound
    values: of(14, ZC[1]),
    toStyle: (n) => `${n}px`,
    possible: ["text-xs", "text-sm", "..."]
  },
  fontFamily: {
    values: () => ["Roboto"],
    toStyle: sf
  },
  bold: {
    name: "font-weight",
    values: () => [!0, !1],
    toStyle: (n) => n ? "700" : "400",
    possible: ["font-bold", "font-semibold", "..."]
  },
  italic: {
    name: "font-style",
    values: () => [!0, !1],
    toStyle: (n) => n ? "italic" : "normal",
    possible: ["italic"]
  },
  // underline: { type: [Boolean, Object], default: undefined } as StyleOptions<boolean>,
  uppercase: {
    name: "text-transform",
    values: () => [!0, !1],
    toStyle: (n) => n ? "uppercase" : "none",
    possible: ["uppercase", "lowercase", "..."]
  },
  lowercase: {
    name: "text-transform",
    values: () => [!0, !1],
    toStyle: (n) => n ? "lowercase" : "none",
    possible: ["uppercase", "lowercase", "..."]
  },
  align: {
    name: "text-align",
    values: () => ["left", "center", "right"],
    toStyle: sf,
    possible: ["text-center", "text-right", "..."]
  },
  color: {
    values: () => ["ff0000", "00ff00", "0000ff"],
    toStyle: (n) => QC[n],
    possible: ["text-*"]
  },
  lineHeight: {
    values: of(...JC),
    toStyle: (n, e) => {
      const r = window.getComputedStyle(e), a = Number.parseFloat(r.fontSize) || 16;
      return `${n * a}px`;
    },
    possible: ["leading-*"]
  }
}, Vh = Xr.update, e5 = Xr.nextTick;
async function t5(n, e) {
  const r = [], a = n[n.length - 1], o = document.querySelector(Xr.resolveSelector(n));
  if (!o) {
    r.push({ type: "usage", kind: a, message: `could not found .${a}` });
    return;
  }
  const u = getComputedStyle(o), c = Kh[e], h = c.name ?? e;
  for (const m of c.values()) {
    const b = await Vh({ path: n, property: h, value: { xs: m } }), T = c.toStyle(m, o), O = u[h];
    (c.compare ?? Object.is)(T, O) || (console.log(`Expect ${a} has \`${h}: ${T}\` but got \`${O}\``), r.push({
      type: "usage",
      kind: a,
      style: h,
      message: Yh`Found ${a} seem not respect to ${h} config${Jh(
        h,
        c.possible
      )}`,
      path: n,
      values: [T, O]
    }), b());
  }
  return r;
}
async function Zh() {
  const n = await r5(), e = [i5, a5, s5];
  for (const r of e) {
    const a = r();
    a && n.push(a);
  }
  return n;
}
const n5 = /* @__PURE__ */ new Set(["flex", "grid"]);
async function r5() {
  const n = [];
  return await Xr.traverse(async ({ name: e, path: r, apply: a }) => {
    let o;
    try {
      o = document.querySelector(Xr.resolveSelector(r));
    } catch {
    }
    if (!o) {
      n.push({ type: "usage", kind: e, message: `could not found .${e}` });
      return;
    }
    const u = getComputedStyle(o);
    for (const [c, h] of Object.entries(Kh)) {
      const m = h.name ?? c;
      for (const b of h.values()) {
        await a({ [c]: { xs: b } });
        const T = h.toStyle(b, o), O = u[m];
        (h.compare ?? Object.is)(T, O) || (console.log(`Expect ${e} has \`${m}: ${T}\` but got \`${O}\``), n.push({
          type: "usage",
          kind: e,
          style: c,
          path: r,
          message: Yh`Found ${e} seem not respect to ${c} config${Jh(c, h.possible)}`,
          values: [T, O]
        }));
      }
    }
  }), n;
}
const jo = "#block-container";
function i5() {
  const n = document.querySelector(jo);
  let e = n;
  if (e)
    for (; e.firstElementChild; ) {
      e = e.firstElementChild;
      const r = window.getComputedStyle(e), { marginTop: a, display: o } = r;
      if (n5.has(o))
        break;
      if (!Nr(a))
        return {
          type: "general",
          message: "found element has marin-top, please use padding or consider wrap in flex or grid container",
          selector: sa(e, { root: n })
        };
    }
}
function a5() {
  const n = document.querySelector(jo);
  for (const e of Qh(n)) {
    const r = window.getComputedStyle(e);
    if (!Nr(r.marginLeft) || !Nr(r.marginRight))
      return {
        type: "general",
        message: "found an outer container has x axis margin, please check is it follow the guides",
        selector: sa(e, { root: n })
      };
    if (!Nr(r.paddingLeft) || !Nr(r.paddingRight))
      return {
        type: "general",
        message: "found an outer container has x axis padding, please check is it follow the guides",
        selector: sa(e, { root: n })
      };
  }
}
function s5() {
  const n = document.querySelector(jo);
  for (const e of Qh(n))
    if (window.getComputedStyle(e).maxWidth !== "none")
      return {
        type: "general",
        message: "found an outer container has max-width, please check is it follow the guides",
        selector: sa(e, { root: n })
      };
}
function Jh(n, e) {
  if (!e)
    return "";
  const r = e[e.length - 1], a = e.slice(0, -1);
  return `, you are possibly using the follow class ${r === "..." ? `[${a.map((u) => `\`${u}\``).join(", ")}, ...]` : `[${e.map((u) => `\`${u}\``).join(", ")}]`}, please use ${n} instead`;
}
const o5 = 10;
function* Qh(n) {
  const e = n.getBoundingClientRect(), r = [{ el: n, depth: 0 }];
  for (; r.length > 0; ) {
    const { el: a, depth: o } = r.shift(), c = a.getBoundingClientRect().height / e.height;
    if (o < o5)
      for (const h of a.children)
        r.push({ el: h, depth: o + 1 });
    c <= 0.8 || a.className !== "spacing" && (yield a);
  }
}
function Nr(n) {
  return n === "0" || n === "" || Number.parseInt(n) === 0;
}
function of(n, e) {
  return function* () {
    yield n, yield e, yield (n + e) / 2;
  };
}
const u5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateReport: Zh,
  nextTick: e5,
  testSpecificItem: t5,
  update: Vh
}, Symbol.toStringTag, { value: "Module" })), l5 = qt({});
var c5 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "70", height: "70" } }, [r("defs", [r("filter", { attrs: { id: "a", width: "127.6%", height: "127.6%", x: "-13.8%", y: "-13.8%", filterUnits: "objectBoundingBox" } }, [r("feOffset", { attrs: { dy: "1", in: "SourceAlpha", result: "shadowOffsetOuter1" } }), r("feGaussianBlur", { attrs: { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "1.5" } }), r("feColorMatrix", { attrs: { in: "shadowBlurOuter1", result: "shadowMatrixOuter1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" } }), r("feMerge", [r("feMergeNode", { attrs: { in: "shadowMatrixOuter1" } }), r("feMergeNode", { attrs: { in: "SourceGraphic" } })], 1)], 1), r("path", { attrs: { id: "b", d: "M29 0c16.016 0 29 12.984 29 29S45.016 58 29 58 0 45.016 0 29 12.984 0 29 0zm8.33 45.235-1.908.694 1.182 3.25.059.173c.369 1.197-.082 2.04-1.087 2.406l-.71.258.694 1.908.553-.201.165-.069a2.192 2.192 0 0 0 1.214-1.67l.131-.048.335.921 1.895-.69-2.524-6.932zm-14.396.738c-1.342-.488-2.894-.398-3.959.973l1.567 1.017.113-.104c.467-.382 1.105-.391 1.688-.179.908.33 1.378 1.127 1.06 2.04l-5.025-1.83-.177.487-.068.199c-.63 1.985.144 3.941 2.206 4.692 1.934.704 4.075-.186 4.865-2.356.762-2.092-.152-4.168-2.27-4.939zm-3.087 3.898 3.079 1.12-.061.101c-.35.531-1.105.89-1.947.584-.815-.297-1.232-1.075-1.07-1.805zM44.57 35.882l-1.022 1.77 3.443 1.988-.077.134-.11.012c-.531.077-1.223.42-1.752 1.337-.952 1.65-.187 3.74 1.68 4.818 1.916 1.106 4.129.605 5.08-1.044.512-.885.461-1.61.243-2.155l.077-.134.594.343 1.022-1.77-9.178-5.299zm2.407 5.77c.483-.836 1.508-1.182 2.575-.566.897.518 1.31 1.565.779 2.487-.49.848-1.556 1.154-2.55.58-1.007-.58-1.3-1.64-.804-2.5zm-33.002-3.26c-.959-1.661-2.425-2.156-3.71-1.414-2.45 1.414.328 4.32-.666 4.894-.279.161-.629-.025-.874-.449-.273-.473-.23-1.015.142-1.407l-1.295-1.29-.129.131c-.866.93-.894 2.157-.159 3.43.82 1.419 2.293 1.926 3.396 1.29 2.546-1.47-.271-4.306.784-4.915.303-.175.663-.027.97.506.35.606.392 1.294-.16 1.71l1.175 1.39.151-.122c1.161-1 1.128-2.45.375-3.754zM6.832 22.935c-1.366.087-2.242 1.027-2.51 2.543-.284 1.613.518 2.949 1.773 3.17 2.895.51 2.56-3.472 3.759-3.26.345.06.526.405.419 1.011-.122.69-.532 1.243-1.222 1.207l.005 1.82.195.004c1.532-.02 2.439-1.153 2.7-2.635.333-1.889-.471-3.21-1.933-3.468-2.785-.491-2.525 3.52-3.656 3.321-.317-.056-.466-.423-.38-.906.094-.537.475-.925 1.012-.987zm44.691-.563-1.778.314.211 1.2-5.487.967.353 2 7.265-1.282-.564-3.199zm3.69 1.653c-.122-.69-.722-1.11-1.37-.996-.662.117-1.082.717-.96 1.407.119.675.719 1.095 1.38.979.648-.115 1.069-.715.95-1.39zM12.89 8.545 11.432 9.77l1.296 1.544-1.04.873 1.16 1.384.933-.783 2.115 2.52.125.142c.995 1.089 2.02 1.037 3.112.121l1.233-1.034-1.179-1.405-1.083.908-.083.064c-.216.144-.384.099-.568-.12l-2.106-2.51 1.502-1.26-1.161-1.383-1.502 1.26-1.295-1.545zm30.417.702-4.743 5.652 1.555 1.305 2.223-2.65.12-.137c.853-.918 1.808-.949 2.627-.262l.58.486 1.304-1.555-.45-.378-.142-.108a2.193 2.193 0 0 0-2.053-.217l-.107-.09.63-.75-1.544-1.296zM28.893 4.753c-2.296 0-3.934 1.68-3.934 3.878 0 2.184 1.624 3.864 3.934 3.864 2.296 0 3.92-1.68 3.92-3.864s-1.61-3.878-3.92-3.878zm0 1.946.153.006.149.016c.927.138 1.546.91 1.546 1.91 0 1.092-.756 1.918-1.848 1.918s-1.862-.826-1.862-1.918c0-1.106.77-1.932 1.862-1.932z" } })]), r("g", { attrs: { filter: "url(#a)", transform: "translate(6 6)", fill: "none", "fill-rule": "evenodd" } }, [r("mask", { attrs: { id: "c", fill: "#fff" } }, [r("use", { attrs: { "xlink:href": "#b" } })]), r("use", { attrs: { fill: "#F5F5F5", "xlink:href": "#b" } }), r("g", { attrs: { mask: "url(#c)" } }, [r("path", { attrs: { fill: "#FFB500", "fill-rule": "nonzero", d: "M47.349 19.933v14.233H33.116V19.933z" } }), r("path", { attrs: { fill: "#FF4C4C", d: "M12.348 20.544h11.784c-.738 3.757-.118 7.212 1.86 10.364 4.88 7.778 13.133 7.135 17.987 14.484 2.53 3.818 3.427 8.235 2.694 13.252H34.921c.184-2.97-.117-4.883-.902-5.736-4.63-5.03-9.642-4.534-15.23-11.16-5.5-6.526-7.647-13.594-6.441-21.204z" } }), r("path", { attrs: { fill: "#2E53C2", d: "M14.263 22.697h7.37c-.075 3.822.808 7.016 2.648 9.582 3.47 4.837 7.102 5.965 8.341 8.944.129 3.776-.49 5.911-2.2 5.44-.405 0-5.298-1.402-10.04-6.49-4.825-5.174-6.865-11-6.119-17.476z" } })])])]);
}, f5 = [], d5 = /* @__PURE__ */ Be(
  l5,
  c5,
  f5,
  !1,
  null,
  null,
  null,
  null
);
const h5 = d5.exports;
function _e(n, e, r, a) {
  r && Object.defineProperty(n, e, {
    enumerable: r.enumerable,
    configurable: r.configurable,
    writable: r.writable,
    value: r.initializer ? r.initializer.call(a) : void 0
  });
}
function nt(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pe(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Zi(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zi = function(r) {
    return typeof r;
  } : Zi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Zi(n);
}
function rt(n, e) {
  return e && (Zi(e) === "object" || typeof e == "function") ? e : pe(n);
}
function ue(n) {
  return ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ue(n);
}
function Fo(n, e) {
  return Fo = Object.setPrototypeOf || function(a, o) {
    return a.__proto__ = o, a;
  }, Fo(n, e);
}
function it(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), e && Fo(n, e);
}
function ge(n, e, r, a, o) {
  var u = {};
  return Object.keys(a).forEach(function(c) {
    u[c] = a[c];
  }), u.enumerable = !!u.enumerable, u.configurable = !!u.configurable, ("value" in u || u.initializer) && (u.writable = !0), u = r.slice().reverse().reduce(function(c, h) {
    return h(n, e, c) || c;
  }, u), o && u.initializer !== void 0 && (u.value = u.initializer ? u.initializer.call(o) : void 0, u.initializer = void 0), u.initializer === void 0 && (Object.defineProperty(n, e, u), u = null), u;
}
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function Ji(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ji = function(e) {
    return typeof e;
  } : Ji = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ji(n);
}
function p5(n, e, r) {
  return e in n ? Object.defineProperty(n, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = r, n;
}
function g5(n) {
  return v5(n) || _5(n) || m5();
}
function v5(n) {
  if (Array.isArray(n)) {
    for (var e = 0, r = new Array(n.length); e < n.length; e++)
      r[e] = n[e];
    return r;
  }
}
function _5(n) {
  if (Symbol.iterator in Object(n) || Object.prototype.toString.call(n) === "[object Arguments]")
    return Array.from(n);
}
function m5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function b5() {
  return typeof Reflect < "u" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function y5(n, e) {
  so(n, e), Object.getOwnPropertyNames(e.prototype).forEach(function(r) {
    so(n.prototype, e.prototype, r);
  }), Object.getOwnPropertyNames(e).forEach(function(r) {
    so(n, e, r);
  });
}
function so(n, e, r) {
  var a = r ? Reflect.getOwnMetadataKeys(e, r) : Reflect.getOwnMetadataKeys(e);
  a.forEach(function(o) {
    var u = r ? Reflect.getOwnMetadata(o, e, r) : Reflect.getOwnMetadata(o, e);
    r ? Reflect.defineMetadata(o, u, n, r) : Reflect.defineMetadata(o, u, n);
  });
}
var w5 = {
  __proto__: []
}, x5 = w5 instanceof Array;
function qo(n) {
  return function(e, r, a) {
    var o = typeof e == "function" ? e : e.constructor;
    o.__decorators__ || (o.__decorators__ = []), typeof a != "number" && (a = void 0), o.__decorators__.push(function(u) {
      return n(u, r, a);
    });
  };
}
function It() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  return Ot.extend({
    mixins: e
  });
}
function C5(n) {
  var e = Ji(n);
  return n == null || e !== "object" && e !== "function";
}
function ep(n) {
  typeof console < "u" && console.warn("[vue-class-component] " + n);
}
function S5(n, e) {
  var r = e.prototype._init;
  e.prototype._init = function() {
    var u = this, c = Object.getOwnPropertyNames(n);
    if (n.$options.props)
      for (var h in n.$options.props)
        n.hasOwnProperty(h) || c.push(h);
    c.forEach(function(m) {
      Object.defineProperty(u, m, {
        get: function() {
          return n[m];
        },
        set: function(T) {
          n[m] = T;
        },
        configurable: !0
      });
    });
  };
  var a = new e();
  e.prototype._init = r;
  var o = {};
  return Object.keys(a).forEach(function(u) {
    a[u] !== void 0 && (o[u] = a[u]);
  }), process.env.NODE_ENV !== "production" && !(e.prototype instanceof Ot) && Object.keys(o).length > 0 && ep("Component class must inherit Vue or its descendant class when class property is used."), o;
}
var Lo = [
  "data",
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeDestroy",
  "destroyed",
  "beforeUpdate",
  "updated",
  "activated",
  "deactivated",
  "render",
  "errorCaptured",
  "serverPrefetch"
  // 2.6
];
function uf(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  e.name = e.name || n._componentTag || n.name;
  var r = n.prototype;
  Object.getOwnPropertyNames(r).forEach(function(h) {
    if (h !== "constructor") {
      if (Lo.indexOf(h) > -1) {
        e[h] = r[h];
        return;
      }
      var m = Object.getOwnPropertyDescriptor(r, h);
      m.value !== void 0 ? typeof m.value == "function" ? (e.methods || (e.methods = {}))[h] = m.value : (e.mixins || (e.mixins = [])).push({
        data: function() {
          return p5({}, h, m.value);
        }
      }) : (m.get || m.set) && ((e.computed || (e.computed = {}))[h] = {
        get: m.get,
        set: m.set
      });
    }
  }), (e.mixins || (e.mixins = [])).push({
    data: function() {
      return S5(this, n);
    }
  });
  var a = n.__decorators__;
  a && (a.forEach(function(h) {
    return h(e);
  }), delete n.__decorators__);
  var o = Object.getPrototypeOf(n.prototype), u = o instanceof Ot ? o.constructor : Ot, c = u.extend(e);
  return A5(c, n, u), b5() && y5(c, n), c;
}
var T5 = [
  // Unique id
  "cid",
  // Super Vue constructor
  "super",
  // Component options that will be used by the component
  "options",
  "superOptions",
  "extendOptions",
  "sealedOptions",
  // Private assets
  "component",
  "directive",
  "filter"
], k5 = {
  prototype: !0,
  arguments: !0,
  callee: !0,
  caller: !0
};
function A5(n, e, r) {
  Object.getOwnPropertyNames(e).forEach(function(a) {
    if (!k5[a]) {
      var o = Object.getOwnPropertyDescriptor(n, a);
      if (!(o && !o.configurable)) {
        var u = Object.getOwnPropertyDescriptor(e, a);
        if (!x5) {
          if (a === "cid")
            return;
          var c = Object.getOwnPropertyDescriptor(r, a);
          if (!C5(u.value) && c && c.value === u.value)
            return;
        }
        process.env.NODE_ENV !== "production" && T5.indexOf(a) >= 0 && ep("Static property name '".concat(a, "' declared on class '").concat(e.name, "' ") + "conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."), Object.defineProperty(n, a, u);
      }
    }
  });
}
function Ye(n) {
  return typeof n == "function" ? uf(n) : function(e) {
    return uf(e, n);
  };
}
Ye.registerHooks = function(e) {
  Lo.push.apply(Lo, g5(e));
};
var E5 = typeof Reflect < "u" && typeof Reflect.getMetadata < "u";
function O5(n, e, r) {
  if (E5 && !Array.isArray(n) && typeof n != "function" && typeof n.type > "u") {
    var a = Reflect.getMetadata("design:type", e, r);
    a !== Object && (n.type = a);
  }
}
function Se(n) {
  return n === void 0 && (n = {}), function(e, r) {
    O5(n, e, r), qo(function(a, o) {
      (a.props || (a.props = {}))[o] = n;
    })(e, r);
  };
}
function $5(n, e) {
  e === void 0 && (e = {});
  var r = e.deep, a = r === void 0 ? !1 : r, o = e.immediate, u = o === void 0 ? !1 : o;
  return qo(function(c, h) {
    typeof c.watch != "object" && (c.watch = /* @__PURE__ */ Object.create(null));
    var m = c.watch;
    typeof m[n] == "object" && !Array.isArray(m[n]) ? m[n] = [m[n]] : typeof m[n] > "u" && (m[n] = []), m[n].push({ handler: h, deep: a, immediate: u });
  });
}
function ba(n) {
  return qo(function(e, r) {
    e.computed = e.computed || {}, e.computed[r] = {
      cache: !1,
      get: function() {
        return this.$refs[n || r];
      }
    };
  });
}
function lf(n, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function vt(n, e, r) {
  return e && lf(n.prototype, e), r && lf(n, r), n;
}
var tp = { exports: {} };
(function(n) {
  (function(e) {
    var r = /^\s+/, a = /\s+$/, o = 0, u = e.round, c = e.min, h = e.max, m = e.random;
    function b(g, w) {
      if (g = g || "", w = w || {}, g instanceof b)
        return g;
      if (!(this instanceof b))
        return new b(g, w);
      var _ = T(g);
      this._originalInput = g, this._r = _.r, this._g = _.g, this._b = _.b, this._a = _.a, this._roundA = u(100 * this._a) / 100, this._format = w.format || _.format, this._gradientType = w.gradientType, this._r < 1 && (this._r = u(this._r)), this._g < 1 && (this._g = u(this._g)), this._b < 1 && (this._b = u(this._b)), this._ok = _.ok, this._tc_id = o++;
    }
    b.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var g = this.toRgb();
        return (g.r * 299 + g.g * 587 + g.b * 114) / 1e3;
      },
      getLuminance: function() {
        var g = this.toRgb(), w, _, F, D, I, re;
        return w = g.r / 255, _ = g.g / 255, F = g.b / 255, w <= 0.03928 ? D = w / 12.92 : D = e.pow((w + 0.055) / 1.055, 2.4), _ <= 0.03928 ? I = _ / 12.92 : I = e.pow((_ + 0.055) / 1.055, 2.4), F <= 0.03928 ? re = F / 12.92 : re = e.pow((F + 0.055) / 1.055, 2.4), 0.2126 * D + 0.7152 * I + 0.0722 * re;
      },
      setAlpha: function(g) {
        return this._a = ei(g), this._roundA = u(100 * this._a) / 100, this;
      },
      toHsv: function() {
        var g = $(this._r, this._g, this._b);
        return { h: g.h * 360, s: g.s, v: g.v, a: this._a };
      },
      toHsvString: function() {
        var g = $(this._r, this._g, this._b), w = u(g.h * 360), _ = u(g.s * 100), F = u(g.v * 100);
        return this._a == 1 ? "hsv(" + w + ", " + _ + "%, " + F + "%)" : "hsva(" + w + ", " + _ + "%, " + F + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var g = R(this._r, this._g, this._b);
        return { h: g.h * 360, s: g.s, l: g.l, a: this._a };
      },
      toHslString: function() {
        var g = R(this._r, this._g, this._b), w = u(g.h * 360), _ = u(g.s * 100), F = u(g.l * 100);
        return this._a == 1 ? "hsl(" + w + ", " + _ + "%, " + F + "%)" : "hsla(" + w + ", " + _ + "%, " + F + "%, " + this._roundA + ")";
      },
      toHex: function(g) {
        return G(this._r, this._g, this._b, g);
      },
      toHexString: function(g) {
        return "#" + this.toHex(g);
      },
      toHex8: function(g) {
        return j(this._r, this._g, this._b, this._a, g);
      },
      toHex8String: function(g) {
        return "#" + this.toHex8(g);
      },
      toRgb: function() {
        return { r: u(this._r), g: u(this._g), b: u(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: u(ce(this._r, 255) * 100) + "%", g: u(ce(this._g, 255) * 100) + "%", b: u(ce(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + u(ce(this._r, 255) * 100) + "%, " + u(ce(this._g, 255) * 100) + "%, " + u(ce(this._b, 255) * 100) + "%)" : "rgba(" + u(ce(this._r, 255) * 100) + "%, " + u(ce(this._g, 255) * 100) + "%, " + u(ce(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Yt[G(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function(g) {
        var w = "#" + ne(this._r, this._g, this._b, this._a), _ = w, F = this._gradientType ? "GradientType = 1, " : "";
        if (g) {
          var D = b(g);
          _ = "#" + ne(D._r, D._g, D._b, D._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + F + "startColorstr=" + w + ",endColorstr=" + _ + ")";
      },
      toString: function(g) {
        var w = !!g;
        g = g || this._format;
        var _ = !1, F = this._a < 1 && this._a >= 0, D = !w && F && (g === "hex" || g === "hex6" || g === "hex3" || g === "hex4" || g === "hex8" || g === "name");
        return D ? g === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (g === "rgb" && (_ = this.toRgbString()), g === "prgb" && (_ = this.toPercentageRgbString()), (g === "hex" || g === "hex6") && (_ = this.toHexString()), g === "hex3" && (_ = this.toHexString(!0)), g === "hex4" && (_ = this.toHex8String(!0)), g === "hex8" && (_ = this.toHex8String()), g === "name" && (_ = this.toName()), g === "hsl" && (_ = this.toHslString()), g === "hsv" && (_ = this.toHsvString()), _ || this.toHexString());
      },
      clone: function() {
        return b(this.toString());
      },
      _applyModification: function(g, w) {
        var _ = g.apply(null, [this].concat([].slice.call(w)));
        return this._r = _._r, this._g = _._g, this._b = _._b, this.setAlpha(_._a), this;
      },
      lighten: function() {
        return this._applyModification(B, arguments);
      },
      brighten: function() {
        return this._applyModification(ae, arguments);
      },
      darken: function() {
        return this._applyModification(ke, arguments);
      },
      desaturate: function() {
        return this._applyModification(le, arguments);
      },
      saturate: function() {
        return this._applyModification(Te, arguments);
      },
      greyscale: function() {
        return this._applyModification(J, arguments);
      },
      spin: function() {
        return this._applyModification(Ee, arguments);
      },
      _applyCombination: function(g, w) {
        return g.apply(null, [this].concat([].slice.call(w)));
      },
      analogous: function() {
        return this._applyCombination(Qr, arguments);
      },
      complement: function() {
        return this._applyCombination(jn, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(Ta, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(Sa, arguments);
      },
      triad: function() {
        return this._applyCombination(xa, arguments);
      },
      tetrad: function() {
        return this._applyCombination(Ca, arguments);
      }
    }, b.fromRatio = function(g, w) {
      if (typeof g == "object") {
        var _ = {};
        for (var F in g)
          g.hasOwnProperty(F) && (F === "a" ? _[F] = g[F] : _[F] = Wt(g[F]));
        g = _;
      }
      return b(g, w);
    };
    function T(g) {
      var w = { r: 0, g: 0, b: 0 }, _ = 1, F = null, D = null, I = null, re = !1, fe = !1;
      return typeof g == "string" && (g = qn(g)), typeof g == "object" && ($t(g.r) && $t(g.g) && $t(g.b) ? (w = O(g.r, g.g, g.b), re = !0, fe = String(g.r).substr(-1) === "%" ? "prgb" : "rgb") : $t(g.h) && $t(g.s) && $t(g.v) ? (F = Wt(g.s), D = Wt(g.v), w = q(g.h, F, D), re = !0, fe = "hsv") : $t(g.h) && $t(g.s) && $t(g.l) && (F = Wt(g.s), I = Wt(g.l), w = L(g.h, F, I), re = !0, fe = "hsl"), g.hasOwnProperty("a") && (_ = g.a)), _ = ei(_), {
        ok: re,
        format: g.format || fe,
        r: c(255, h(w.r, 0)),
        g: c(255, h(w.g, 0)),
        b: c(255, h(w.b, 0)),
        a: _
      };
    }
    function O(g, w, _) {
      return {
        r: ce(g, 255) * 255,
        g: ce(w, 255) * 255,
        b: ce(_, 255) * 255
      };
    }
    function R(g, w, _) {
      g = ce(g, 255), w = ce(w, 255), _ = ce(_, 255);
      var F = h(g, w, _), D = c(g, w, _), I, re, fe = (F + D) / 2;
      if (F == D)
        I = re = 0;
      else {
        var ie = F - D;
        switch (re = fe > 0.5 ? ie / (2 - F - D) : ie / (F + D), F) {
          case g:
            I = (w - _) / ie + (w < _ ? 6 : 0);
            break;
          case w:
            I = (_ - g) / ie + 2;
            break;
          case _:
            I = (g - w) / ie + 4;
            break;
        }
        I /= 6;
      }
      return { h: I, s: re, l: fe };
    }
    function L(g, w, _) {
      var F, D, I;
      g = ce(g, 360), w = ce(w, 100), _ = ce(_, 100);
      function re(Le, zt, at) {
        return at < 0 && (at += 1), at > 1 && (at -= 1), at < 1 / 6 ? Le + (zt - Le) * 6 * at : at < 1 / 2 ? zt : at < 2 / 3 ? Le + (zt - Le) * (2 / 3 - at) * 6 : Le;
      }
      if (w === 0)
        F = D = I = _;
      else {
        var fe = _ < 0.5 ? _ * (1 + w) : _ + w - _ * w, ie = 2 * _ - fe;
        F = re(ie, fe, g + 1 / 3), D = re(ie, fe, g), I = re(ie, fe, g - 1 / 3);
      }
      return { r: F * 255, g: D * 255, b: I * 255 };
    }
    function $(g, w, _) {
      g = ce(g, 255), w = ce(w, 255), _ = ce(_, 255);
      var F = h(g, w, _), D = c(g, w, _), I, re, fe = F, ie = F - D;
      if (re = F === 0 ? 0 : ie / F, F == D)
        I = 0;
      else {
        switch (F) {
          case g:
            I = (w - _) / ie + (w < _ ? 6 : 0);
            break;
          case w:
            I = (_ - g) / ie + 2;
            break;
          case _:
            I = (g - w) / ie + 4;
            break;
        }
        I /= 6;
      }
      return { h: I, s: re, v: fe };
    }
    function q(g, w, _) {
      g = ce(g, 360) * 6, w = ce(w, 100), _ = ce(_, 100);
      var F = e.floor(g), D = g - F, I = _ * (1 - w), re = _ * (1 - D * w), fe = _ * (1 - (1 - D) * w), ie = F % 6, Le = [_, re, I, I, fe, _][ie], zt = [fe, _, _, re, I, I][ie], at = [I, I, fe, _, _, re][ie];
      return { r: Le * 255, g: zt * 255, b: at * 255 };
    }
    function G(g, w, _, F) {
      var D = [
        Fe(u(g).toString(16)),
        Fe(u(w).toString(16)),
        Fe(u(_).toString(16))
      ];
      return F && D[0].charAt(0) == D[0].charAt(1) && D[1].charAt(0) == D[1].charAt(1) && D[2].charAt(0) == D[2].charAt(1) ? D[0].charAt(0) + D[1].charAt(0) + D[2].charAt(0) : D.join("");
    }
    function j(g, w, _, F, D) {
      var I = [
        Fe(u(g).toString(16)),
        Fe(u(w).toString(16)),
        Fe(u(_).toString(16)),
        Fe(ti(F))
      ];
      return D && I[0].charAt(0) == I[0].charAt(1) && I[1].charAt(0) == I[1].charAt(1) && I[2].charAt(0) == I[2].charAt(1) && I[3].charAt(0) == I[3].charAt(1) ? I[0].charAt(0) + I[1].charAt(0) + I[2].charAt(0) + I[3].charAt(0) : I.join("");
    }
    function ne(g, w, _, F) {
      var D = [
        Fe(ti(F)),
        Fe(u(g).toString(16)),
        Fe(u(w).toString(16)),
        Fe(u(_).toString(16))
      ];
      return D.join("");
    }
    b.equals = function(g, w) {
      return !g || !w ? !1 : b(g).toRgbString() == b(w).toRgbString();
    }, b.random = function() {
      return b.fromRatio({
        r: m(),
        g: m(),
        b: m()
      });
    };
    function le(g, w) {
      w = w === 0 ? 0 : w || 10;
      var _ = b(g).toHsl();
      return _.s -= w / 100, _.s = Ue(_.s), b(_);
    }
    function Te(g, w) {
      w = w === 0 ? 0 : w || 10;
      var _ = b(g).toHsl();
      return _.s += w / 100, _.s = Ue(_.s), b(_);
    }
    function J(g) {
      return b(g).desaturate(100);
    }
    function B(g, w) {
      w = w === 0 ? 0 : w || 10;
      var _ = b(g).toHsl();
      return _.l += w / 100, _.l = Ue(_.l), b(_);
    }
    function ae(g, w) {
      w = w === 0 ? 0 : w || 10;
      var _ = b(g).toRgb();
      return _.r = h(0, c(255, _.r - u(255 * -(w / 100)))), _.g = h(0, c(255, _.g - u(255 * -(w / 100)))), _.b = h(0, c(255, _.b - u(255 * -(w / 100)))), b(_);
    }
    function ke(g, w) {
      w = w === 0 ? 0 : w || 10;
      var _ = b(g).toHsl();
      return _.l -= w / 100, _.l = Ue(_.l), b(_);
    }
    function Ee(g, w) {
      var _ = b(g).toHsl(), F = (_.h + w) % 360;
      return _.h = F < 0 ? 360 + F : F, b(_);
    }
    function jn(g) {
      var w = b(g).toHsl();
      return w.h = (w.h + 180) % 360, b(w);
    }
    function xa(g) {
      var w = b(g).toHsl(), _ = w.h;
      return [
        b(g),
        b({ h: (_ + 120) % 360, s: w.s, l: w.l }),
        b({ h: (_ + 240) % 360, s: w.s, l: w.l })
      ];
    }
    function Ca(g) {
      var w = b(g).toHsl(), _ = w.h;
      return [
        b(g),
        b({ h: (_ + 90) % 360, s: w.s, l: w.l }),
        b({ h: (_ + 180) % 360, s: w.s, l: w.l }),
        b({ h: (_ + 270) % 360, s: w.s, l: w.l })
      ];
    }
    function Sa(g) {
      var w = b(g).toHsl(), _ = w.h;
      return [
        b(g),
        b({ h: (_ + 72) % 360, s: w.s, l: w.l }),
        b({ h: (_ + 216) % 360, s: w.s, l: w.l })
      ];
    }
    function Qr(g, w, _) {
      w = w || 6, _ = _ || 30;
      var F = b(g).toHsl(), D = 360 / _, I = [b(g)];
      for (F.h = (F.h - (D * w >> 1) + 720) % 360; --w; )
        F.h = (F.h + D) % 360, I.push(b(F));
      return I;
    }
    function Ta(g, w) {
      w = w || 6;
      for (var _ = b(g).toHsv(), F = _.h, D = _.s, I = _.v, re = [], fe = 1 / w; w--; )
        re.push(b({ h: F, s: D, v: I })), I = (I + fe) % 1;
      return re;
    }
    b.mix = function(g, w, _) {
      _ = _ === 0 ? 0 : _ || 50;
      var F = b(g).toRgb(), D = b(w).toRgb(), I = _ / 100, re = {
        r: (D.r - F.r) * I + F.r,
        g: (D.g - F.g) * I + F.g,
        b: (D.b - F.b) * I + F.b,
        a: (D.a - F.a) * I + F.a
      };
      return b(re);
    }, b.readability = function(g, w) {
      var _ = b(g), F = b(w);
      return (e.max(_.getLuminance(), F.getLuminance()) + 0.05) / (e.min(_.getLuminance(), F.getLuminance()) + 0.05);
    }, b.isReadable = function(g, w, _) {
      var F = b.readability(g, w), D, I;
      switch (I = !1, D = Gn(_), D.level + D.size) {
        case "AAsmall":
        case "AAAlarge":
          I = F >= 4.5;
          break;
        case "AAlarge":
          I = F >= 3;
          break;
        case "AAAsmall":
          I = F >= 7;
          break;
      }
      return I;
    }, b.mostReadable = function(g, w, _) {
      var F = null, D = 0, I, re, fe, ie;
      _ = _ || {}, re = _.includeFallbackColors, fe = _.level, ie = _.size;
      for (var Le = 0; Le < w.length; Le++)
        I = b.readability(g, w[Le]), I > D && (D = I, F = b(w[Le]));
      return b.isReadable(g, F, { level: fe, size: ie }) || !re ? F : (_.includeFallbackColors = !1, b.mostReadable(g, ["#fff", "#000"], _));
    };
    var gr = b.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    }, Yt = b.hexNames = Bt(gr);
    function Bt(g) {
      var w = {};
      for (var _ in g)
        g.hasOwnProperty(_) && (w[g[_]] = _);
      return w;
    }
    function ei(g) {
      return g = parseFloat(g), (isNaN(g) || g < 0 || g > 1) && (g = 1), g;
    }
    function ce(g, w) {
      ka(g) && (g = "100%");
      var _ = Aa(g);
      return g = c(w, h(0, parseFloat(g))), _ && (g = parseInt(g * w, 10) / 100), e.abs(g - w) < 1e-6 ? 1 : g % w / parseFloat(w);
    }
    function Ue(g) {
      return c(1, h(0, g));
    }
    function He(g) {
      return parseInt(g, 16);
    }
    function ka(g) {
      return typeof g == "string" && g.indexOf(".") != -1 && parseFloat(g) === 1;
    }
    function Aa(g) {
      return typeof g == "string" && g.indexOf("%") != -1;
    }
    function Fe(g) {
      return g.length == 1 ? "0" + g : "" + g;
    }
    function Wt(g) {
      return g <= 1 && (g = g * 100 + "%"), g;
    }
    function ti(g) {
      return e.round(parseFloat(g) * 255).toString(16);
    }
    function ln(g) {
      return He(g) / 255;
    }
    var Me = function() {
      var g = "[-\\+]?\\d+%?", w = "[-\\+]?\\d*\\.\\d+%?", _ = "(?:" + w + ")|(?:" + g + ")", F = "[\\s|\\(]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")\\s*\\)?", D = "[\\s|\\(]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(_),
        rgb: new RegExp("rgb" + F),
        rgba: new RegExp("rgba" + D),
        hsl: new RegExp("hsl" + F),
        hsla: new RegExp("hsla" + D),
        hsv: new RegExp("hsv" + F),
        hsva: new RegExp("hsva" + D),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function $t(g) {
      return !!Me.CSS_UNIT.exec(g);
    }
    function qn(g) {
      g = g.replace(r, "").replace(a, "").toLowerCase();
      var w = !1;
      if (gr[g])
        g = gr[g], w = !0;
      else if (g == "transparent")
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var _;
      return (_ = Me.rgb.exec(g)) ? { r: _[1], g: _[2], b: _[3] } : (_ = Me.rgba.exec(g)) ? { r: _[1], g: _[2], b: _[3], a: _[4] } : (_ = Me.hsl.exec(g)) ? { h: _[1], s: _[2], l: _[3] } : (_ = Me.hsla.exec(g)) ? { h: _[1], s: _[2], l: _[3], a: _[4] } : (_ = Me.hsv.exec(g)) ? { h: _[1], s: _[2], v: _[3] } : (_ = Me.hsva.exec(g)) ? { h: _[1], s: _[2], v: _[3], a: _[4] } : (_ = Me.hex8.exec(g)) ? {
        r: He(_[1]),
        g: He(_[2]),
        b: He(_[3]),
        a: ln(_[4]),
        format: w ? "name" : "hex8"
      } : (_ = Me.hex6.exec(g)) ? {
        r: He(_[1]),
        g: He(_[2]),
        b: He(_[3]),
        format: w ? "name" : "hex"
      } : (_ = Me.hex4.exec(g)) ? {
        r: He(_[1] + "" + _[1]),
        g: He(_[2] + "" + _[2]),
        b: He(_[3] + "" + _[3]),
        a: ln(_[4] + "" + _[4]),
        format: w ? "name" : "hex8"
      } : (_ = Me.hex3.exec(g)) ? {
        r: He(_[1] + "" + _[1]),
        g: He(_[2] + "" + _[2]),
        b: He(_[3] + "" + _[3]),
        format: w ? "name" : "hex"
      } : !1;
    }
    function Gn(g) {
      var w, _;
      return g = g || { level: "AA", size: "small" }, w = (g.level || "AA").toUpperCase(), _ = (g.size || "small").toLowerCase(), w !== "AA" && w !== "AAA" && (w = "AA"), _ !== "small" && _ !== "large" && (_ = "small"), { level: w, size: _ };
    }
    n.exports ? n.exports = b : window.tinycolor = b;
  })(Math);
})(tp);
var P5 = tp.exports;
const an = /* @__PURE__ */ Jr(P5);
var R5 = "Expected a function", cf = NaN, F5 = "[object Symbol]", L5 = /^\s+|\s+$/g, D5 = /^[-+]0x[0-9a-f]+$/i, M5 = /^0b[01]+$/i, I5 = /^0o[0-7]+$/i, N5 = parseInt, B5 = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, W5 = typeof self == "object" && self && self.Object === Object && self, z5 = B5 || W5 || Function("return this")(), U5 = Object.prototype, H5 = U5.toString, j5 = Math.max, q5 = Math.min, oo = function() {
  return z5.Date.now();
};
function G5(n, e, r) {
  var a, o, u, c, h, m, b = 0, T = !1, O = !1, R = !0;
  if (typeof n != "function")
    throw new TypeError(R5);
  e = ff(e) || 0, Do(r) && (T = !!r.leading, O = "maxWait" in r, u = O ? j5(ff(r.maxWait) || 0, e) : u, R = "trailing" in r ? !!r.trailing : R);
  function L(B) {
    var ae = a, ke = o;
    return a = o = void 0, b = B, c = n.apply(ke, ae), c;
  }
  function $(B) {
    return b = B, h = setTimeout(j, e), T ? L(B) : c;
  }
  function q(B) {
    var ae = B - m, ke = B - b, Ee = e - ae;
    return O ? q5(Ee, u - ke) : Ee;
  }
  function G(B) {
    var ae = B - m, ke = B - b;
    return m === void 0 || ae >= e || ae < 0 || O && ke >= u;
  }
  function j() {
    var B = oo();
    if (G(B))
      return ne(B);
    h = setTimeout(j, q(B));
  }
  function ne(B) {
    return h = void 0, R && a ? L(B) : (a = o = void 0, c);
  }
  function le() {
    h !== void 0 && clearTimeout(h), b = 0, a = m = o = h = void 0;
  }
  function Te() {
    return h === void 0 ? c : ne(oo());
  }
  function J() {
    var B = oo(), ae = G(B);
    if (a = arguments, o = this, m = B, ae) {
      if (h === void 0)
        return $(m);
      if (O)
        return h = setTimeout(j, e), L(m);
    }
    return h === void 0 && (h = setTimeout(j, e)), c;
  }
  return J.cancel = le, J.flush = Te, J;
}
function Do(n) {
  var e = typeof n;
  return !!n && (e == "object" || e == "function");
}
function Y5(n) {
  return !!n && typeof n == "object";
}
function X5(n) {
  return typeof n == "symbol" || Y5(n) && H5.call(n) == F5;
}
function ff(n) {
  if (typeof n == "number")
    return n;
  if (X5(n))
    return cf;
  if (Do(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Do(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(L5, "");
  var r = M5.test(n);
  return r || I5.test(n) ? N5(n.slice(2), r ? 2 : 8) : D5.test(n) ? cf : +n;
}
var K5 = G5;
const V5 = /* @__PURE__ */ Jr(K5);
function gt(n, e, r) {
  return e in n ? Object.defineProperty(n, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = r, n;
}
var Z5 = J5;
function J5(n, e, r) {
  return e < r ? n < e ? e : n > r ? r : n : n < r ? r : n > e ? e : n;
}
const Dt = /* @__PURE__ */ Jr(Z5);
var Q5 = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, e3 = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, t3 = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, n3 = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, r3 = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, i3 = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, a3 = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, s3 = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, o3 = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, u3 = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, l3 = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, c3 = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, f3 = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, d3 = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, h3 = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, p3 = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, g3 = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, v3 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" }, _3 = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" }, m3 = { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)", dividers: "rgba(0, 0, 0, 0.12)" }, b3 = { primary: "rgba(255, 255, 255, 1)", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", dividers: "rgba(255, 255, 255, 0.12)" }, y3 = { active: "rgba(0, 0, 0, 0.54)", inactive: "rgba(0, 0, 0, 0.38)" }, w3 = { active: "rgba(255, 255, 255, 1)", inactive: "rgba(255, 255, 255, 0.5)" }, x3 = "#ffffff", C3 = "#000000";
const S3 = {
  red: Q5,
  pink: e3,
  purple: t3,
  deepPurple: n3,
  indigo: r3,
  blue: i3,
  lightBlue: a3,
  cyan: s3,
  teal: o3,
  green: u3,
  lightGreen: l3,
  lime: c3,
  yellow: f3,
  amber: d3,
  orange: h3,
  deepOrange: p3,
  brown: g3,
  grey: v3,
  blueGrey: _3,
  darkText: m3,
  lightText: b3,
  darkIcons: y3,
  lightIcons: w3,
  white: x3,
  black: C3
};
var np = "Expected a function", df = NaN, T3 = "[object Symbol]", k3 = /^\s+|\s+$/g, A3 = /^[-+]0x[0-9a-f]+$/i, E3 = /^0b[01]+$/i, O3 = /^0o[0-7]+$/i, $3 = parseInt, P3 = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, R3 = typeof self == "object" && self && self.Object === Object && self, F3 = P3 || R3 || Function("return this")(), L3 = Object.prototype, D3 = L3.toString, M3 = Math.max, I3 = Math.min, uo = function() {
  return F3.Date.now();
};
function N3(n, e, r) {
  var a, o, u, c, h, m, b = 0, T = !1, O = !1, R = !0;
  if (typeof n != "function")
    throw new TypeError(np);
  e = hf(e) || 0, ua(r) && (T = !!r.leading, O = "maxWait" in r, u = O ? M3(hf(r.maxWait) || 0, e) : u, R = "trailing" in r ? !!r.trailing : R);
  function L(B) {
    var ae = a, ke = o;
    return a = o = void 0, b = B, c = n.apply(ke, ae), c;
  }
  function $(B) {
    return b = B, h = setTimeout(j, e), T ? L(B) : c;
  }
  function q(B) {
    var ae = B - m, ke = B - b, Ee = e - ae;
    return O ? I3(Ee, u - ke) : Ee;
  }
  function G(B) {
    var ae = B - m, ke = B - b;
    return m === void 0 || ae >= e || ae < 0 || O && ke >= u;
  }
  function j() {
    var B = uo();
    if (G(B))
      return ne(B);
    h = setTimeout(j, q(B));
  }
  function ne(B) {
    return h = void 0, R && a ? L(B) : (a = o = void 0, c);
  }
  function le() {
    h !== void 0 && clearTimeout(h), b = 0, a = m = o = h = void 0;
  }
  function Te() {
    return h === void 0 ? c : ne(uo());
  }
  function J() {
    var B = uo(), ae = G(B);
    if (a = arguments, o = this, m = B, ae) {
      if (h === void 0)
        return $(m);
      if (O)
        return h = setTimeout(j, e), L(m);
    }
    return h === void 0 && (h = setTimeout(j, e)), c;
  }
  return J.cancel = le, J.flush = Te, J;
}
function B3(n, e, r) {
  var a = !0, o = !0;
  if (typeof n != "function")
    throw new TypeError(np);
  return ua(r) && (a = "leading" in r ? !!r.leading : a, o = "trailing" in r ? !!r.trailing : o), N3(n, e, {
    leading: a,
    maxWait: e,
    trailing: o
  });
}
function ua(n) {
  var e = typeof n;
  return !!n && (e == "object" || e == "function");
}
function W3(n) {
  return !!n && typeof n == "object";
}
function z3(n) {
  return typeof n == "symbol" || W3(n) && D3.call(n) == T3;
}
function hf(n) {
  if (typeof n == "number")
    return n;
  if (z3(n))
    return df;
  if (ua(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = ua(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(k3, "");
  var r = E3.test(n);
  return r || O3.test(n) ? $3(n.slice(2), r ? 2 : 8) : A3.test(n) ? df : +n;
}
var U3 = B3;
const H3 = /* @__PURE__ */ Jr(U3);
var j3 = "#000", pf, gf;
function q3(n) {
  return function() {
    var e = ue(n), r;
    if (G3()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function G3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Y3 = ["hex", "hex8"], X3 = Ot.extend({
  props: {
    value: {
      // default: '#fff',
      // required: true,
      validator: function(e) {
        return an(e).isValid();
      }
    },
    outputFormat: {
      type: String,
      validator: function(e) {
        return Y3.indexOf(e) >= 0;
      }
    },
    consistent: {
      type: Boolean,
      default: !0
    }
  }
}), K3 = {
  hex: "toHexString",
  hex8: "toHex8String"
}, Nt = Ye(pf = (gf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = q3(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), a.debounced = V5(function(h) {
      h();
    }, 100), a._outputFormat = "hex", a;
  }
  return vt(r, [{
    key: "created",
    value: function() {
      this.value === null && (this._outputFormat = this.outputFormat), this._outputFormat = new an(this.value).getFormat();
    }
  }, {
    key: "getOutputFormat",
    value: function() {
      return this._outputFormat;
    }
  }, {
    key: "setOutputFormat",
    value: function(o) {
      this._outputFormat = o;
    }
  }, {
    key: "onColorChange",
    value: function(o) {
      var u = this, c = new an(o);
      this.$emit("input", c), this.$emit("change", c), this.debounced(function() {
        u.$emit("change-complete", c);
      });
      var h = K3[this._outputFormat];
      if (h) {
        var m = c[h]();
        this.$emit("consistent-change", m), this.debounced(function() {
          return u.$emit("consistent-change-complete", m);
        });
      }
    }
  }, {
    key: "equals",
    value: function(o) {
      return this.isInputEmpty ? !1 : an.equals(this.tc, o);
    }
  }, {
    key: "isInputEmpty",
    get: function() {
      return this.value === null;
    }
    // `tc` stands for tinycolor
  }, {
    key: "tc",
    get: function() {
      if (this.value === null)
        return new an(j3);
      var o = new an(this.value);
      return o;
    }
  }]), r;
}(X3), gf)) || pf, vf, _f, lo, mf, bf;
function V3(n) {
  return function() {
    var e = ue(n), r;
    if (Z3()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function Z3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var J3 = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"], Q3 = (vf = Se({
  default: function() {
    return J3;
  }
}), Ye(_f = (lo = (bf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = V3(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "palette", mf, pe(a)), a;
  }
  return r;
}(It(Nt)), bf), mf = ge(lo.prototype, "palette", [vf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), lo)) || _f);
function _t(n, e, r, a, o, u, c, h, m, b) {
  typeof c != "boolean" && (m = h, h = c, c = !1);
  const T = typeof r == "function" ? r.options : r;
  n && n.render && (T.render = n.render, T.staticRenderFns = n.staticRenderFns, T._compiled = !0, o && (T.functional = !0)), a && (T._scopeId = a);
  let O;
  if (u ? (O = function(R) {
    R = R || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !R && typeof __VUE_SSR_CONTEXT__ < "u" && (R = __VUE_SSR_CONTEXT__), e && e.call(this, m(R)), R && R._registeredComponents && R._registeredComponents.add(u);
  }, T._ssrRegister = O) : e && (O = c ? function(R) {
    e.call(this, b(R, this.$root.$options.shadowRoot));
  } : function(R) {
    e.call(this, h(R));
  }), O)
    if (T.functional) {
      const R = T.render;
      T.render = function($, q) {
        return O.call(q), R($, q);
      };
    } else {
      const R = T.beforeCreate;
      T.beforeCreate = R ? [].concat(R, O) : [O];
    }
  return r;
}
const e4 = typeof navigator < "u" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function mt(n) {
  return (e, r) => t4(e, r);
}
let co;
const yf = {};
function t4(n, e) {
  const r = e4 ? e.media || "default" : n, a = yf[r] || (yf[r] = { ids: /* @__PURE__ */ new Set(), styles: [] });
  if (!a.ids.has(n)) {
    a.ids.add(n);
    let o = e.source;
    if (e.map && (o += `
/*# sourceURL=` + e.map.sources[0] + " */", o += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) + " */"), a.element || (a.element = document.createElement("style"), a.element.type = "text/css", e.media && a.element.setAttribute("media", e.media), co === void 0 && (co = document.head || document.getElementsByTagName("head")[0]), co.appendChild(a.element)), "styleSheet" in a.element)
      a.styles.push(o), a.element.styleSheet.cssText = a.styles.filter(Boolean).join(`
`);
    else {
      const u = a.ids.size - 1, c = document.createTextNode(o), h = a.element.childNodes;
      h[u] && a.element.removeChild(h[u]), h.length ? a.element.insertBefore(c, h[u]) : a.element.appendChild(c);
    }
  }
}
var n4 = Q3, r4 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-compact",
    attrs: {
      role: "CompactColorPicker"
    }
  }, [a("ul", {
    staticClass: "vc-compact-colors",
    attrs: {
      role: "option"
    }
  }, e._l(e.palette, function(o) {
    return a("li", {
      key: o,
      staticClass: "vc-compact-color-item",
      class: {
        "vc-compact-color-item--white": o === "#FFFFFF"
      },
      style: {
        background: o
      },
      attrs: {
        "aria-label": "Color:" + o
      },
      on: {
        click: function(c) {
          return e.onColorChange(o);
        }
      }
    }, [a("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.equals(o),
        expression: "equals(c)"
      }],
      staticClass: "vc-compact-dot"
    })]);
  }), 0)]);
}, i4 = [], a4 = function(e) {
  e && e("data-v-219e7b26_0", {
    source: ".vc-compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-compact-colors{overflow:hidden;padding:0;margin:0}.vc-compact-color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vc-compact-color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vc-compact-color-item--white .vc-compact-dot{background:#000}.vc-compact-dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}",
    map: void 0,
    media: void 0
  });
}, s4 = void 0, o4 = void 0, u4 = !1;
_t({
  render: r4,
  staticRenderFns: i4
}, a4, n4, s4, u4, o4, !1, mt, void 0, void 0);
var wf, xf, fo, Cf, Sf;
function l4(n) {
  return function() {
    var e = ue(n), r;
    if (c4()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function c4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var f4 = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4D4D4D", "#404040", "#333333", "#262626", "#0D0D0D", "#000000"], d4 = (wf = Se({
  default: function() {
    return f4;
  }
}), Ye(xf = (fo = (Sf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = l4(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "palette", Cf, pe(a)), a;
  }
  return vt(r, [{
    key: "handlerClick",
    value: function(o) {
      this.onColorChange(o);
    }
  }, {
    key: "pick",
    get: function() {
      return this.tc.toHexString();
    }
  }]), r;
}(It(Nt)), Sf), Cf = ge(fo.prototype, "palette", [wf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), fo)) || xf), h4 = d4, p4 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-grayscale",
    attrs: {
      role: "GrayscaleColorPicker"
    }
  }, [a("ul", {
    staticClass: "vc-grayscale-colors",
    attrs: {
      role: "option"
    }
  }, e._l(e.palette, function(o) {
    return a("li", {
      key: o,
      staticClass: "vc-grayscale-color-item",
      class: {
        "vc-grayscale-color-item--white": o == "#FFFFFF"
      },
      style: {
        background: o
      },
      attrs: {
        "aria-label": "Color:" + o
      },
      on: {
        click: function(c) {
          return e.handlerClick(o);
        }
      }
    }, [a("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.equals(o),
        expression: "equals(c)"
      }],
      staticClass: "vc-grayscale-dot"
    })]);
  }), 0)]);
}, g4 = [], v4 = function(e) {
  e && e("data-v-ea26c37c_0", {
    source: ".vc-grayscale{width:125px;border-radius:2px;box-shadow:0 2px 15px rgba(0,0,0,.12),0 2px 10px rgba(0,0,0,.16);background-color:#fff}.vc-grayscale-colors{border-radius:2px;overflow:hidden;padding:0;margin:0}.vc-grayscale-color-item{list-style:none;width:25px;height:25px;float:left;position:relative;cursor:pointer}.vc-grayscale-color-item--white .vc-grayscale-dot{background:#000}.vc-grayscale-dot{position:absolute;top:50%;left:50%;width:6px;height:6px;margin:-3px 0 0 -2px;border-radius:50%;opacity:1;background:#fff}",
    map: void 0,
    media: void 0
  });
}, _4 = void 0, m4 = void 0, b4 = !1;
_t({
  render: p4,
  staticRenderFns: g4
}, v4, h4, _4, b4, m4, !1, mt, void 0, void 0);
var Tf, kf, Af, Ef, Of, $f, Fn, Pf, Rf, Ff, Lf, Df, Mf;
function y4(n) {
  return function() {
    var e = ue(n), r;
    if (w4()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function w4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var x4 = {
  r: function(e) {
    return Dt(e, 255, 0);
  },
  g: function(e) {
    return Dt(e, 255, 0);
  },
  b: function(e) {
    return Dt(e, 255, 0);
  },
  a: function(e) {
    return Dt(e, 1, 0);
  },
  h: function(e) {
    return Dt(e, 360, 0);
  },
  s: function(e) {
    return Dt(e, 100, 0);
  },
  l: function(e) {
    return Dt(e, 100, 0);
  },
  v: function(e) {
    return Dt(e, 100, 0);
  }
}, C4 = (Tf = Se(), kf = Se(), Af = Se(), Ef = Se({
  default: 1
}), Of = ba(), Ye($f = (Fn = (Mf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = y4(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "value", Pf, pe(a)), _e(a, "label", Rf, pe(a)), _e(a, "desc", Ff, pe(a)), _e(a, "step", Lf, pe(a)), _e(a, "input", Df, pe(a)), a;
  }
  return vt(r, [{
    key: "handleChange",
    value: function(o) {
      var u = this.label, c = o, h = +o;
      if (!isNaN(h) && (u === "r" || u === "g" || u === "b" || u === "a" || u === "h" || u === "s" || u === "l" || u === "v")) {
        var m = x4[u];
        c = m(h);
      }
      this.$emit("change", c), this.$emit("input", c);
      var b = this.$refs.input;
      b.value = c.toString();
    }
  }, {
    key: "handleInput",
    value: function(o) {
      var u = o.target;
      o.target && this.handleChange(u.value);
    }
  }, {
    key: "handleKeyDown",
    value: function(o) {
      var u = o.target, c = u.value, h = Number(c);
      if (!isNaN(h)) {
        var m = this.step || 1;
        o.keyCode === 38 && (this.handleChange(h + m), o.preventDefault()), o.keyCode === 40 && (this.handleChange(h - m), o.preventDefault());
      }
    }
  }]), r;
}(Ot), Mf), Pf = ge(Fn.prototype, "value", [Tf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Rf = ge(Fn.prototype, "label", [kf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Ff = ge(Fn.prototype, "desc", [Af], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Lf = ge(Fn.prototype, "step", [Ef], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Df = ge(Fn.prototype, "input", [Of], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Fn)) || $f), S4 = C4, T4 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-editable-input"
  }, [a("input", {
    ref: "input",
    staticClass: "vc-input__input",
    attrs: {
      "aria-label": e.desc ? e.label + "(" + e.desc + ")" : e.label
    },
    domProps: {
      value: e.value
    },
    on: {
      keydown: e.handleKeyDown,
      input: e.handleInput
    }
  }), e._v(" "), a("span", {
    staticClass: "vc-input__label",
    attrs: {
      for: e.label
    }
  }, [e._v(e._s(e.label))]), e._v(" "), a("span", {
    staticClass: "vc-input__desc"
  }, [e._v(e._s(e.desc))])]);
}, k4 = [], A4 = function(e) {
  e && e("data-v-1d9ea8fa_0", {
    source: ".vc-editable-input{position:relative}.vc-input__input{padding:0;border:0;outline:0}.vc-input__label{text-transform:capitalize}",
    map: void 0,
    media: void 0
  });
}, E4 = void 0, O4 = void 0, $4 = !1, ya = _t({
  render: T4,
  staticRenderFns: k4
}, A4, S4, E4, $4, O4, !1, mt, void 0, void 0);
function rp(n) {
  return an(n).isValid();
}
function P4(n) {
  return an(n).getAlpha() === 0;
}
function Mo(n) {
  return an(n).getAlpha() < 1;
}
var If, Nf;
function Bf(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function R4(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bf(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Bf(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function F4(n) {
  return function() {
    var e = ue(n), r;
    if (L4()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function L4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var D4 = (If = Ye({
  components: {
    EditableInput: ya
  }
}), If(Nf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = F4(r);
  function r() {
    return nt(this, r), e.apply(this, arguments);
  }
  return vt(r, [{
    key: "onChangeHex",
    value: function(o) {
      rp(o) && o.length === 7 && this.onColorChange(o);
    }
  }, {
    key: "onChange",
    value: function(o, u) {
      this.rgba !== null && this.onColorChange(R4({}, this.rgba, {}, gt({}, o, u)));
    }
  }, {
    key: "hex",
    get: function() {
      return this.isInputEmpty ? null : this.tc.toHexString();
    }
  }, {
    key: "rgba",
    get: function() {
      return this.isInputEmpty ? null : this.tc.toRgb();
    }
  }]), r;
}(It(Nt))) || Nf), M4 = D4, I4 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-material",
    attrs: {
      role: "MaterialColorPicker"
    }
  }, [a("EditableInput", {
    staticClass: "vc-material-hex",
    style: {
      borderColor: e.hex
    },
    attrs: {
      label: "hex",
      value: e.hex
    },
    on: {
      change: e.onChangeHex
    }
  }), e._v(" "), a("div", {
    staticClass: "vc-material-split"
  }, [a("div", {
    staticClass: "vc-material-third"
  }, [a("EditableInput", {
    attrs: {
      label: "r",
      value: e.rgba && e.rgba.r
    },
    on: {
      change: function(u) {
        return e.onChange("r", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-material-third"
  }, [a("EditableInput", {
    attrs: {
      label: "g",
      value: e.rgba && e.rgba.g
    },
    on: {
      change: function(u) {
        return e.onChange("g", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-material-third"
  }, [a("EditableInput", {
    attrs: {
      label: "b",
      value: e.rgba && e.rgba.b
    },
    on: {
      change: function(u) {
        return e.onChange("b", u);
      }
    }
  })], 1)])], 1);
}, N4 = [], B4 = function(e) {
  e && e("data-v-37c532a3_0", {
    source: ".vc-material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-material .vc-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vc-material .vc-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vc-material-hex{border-bottom-width:2px;border-bottom-style:solid}.vc-material-split{display:flex;margin-right:-10px;padding-top:11px}.vc-material-third{flex:1;padding-right:10px}",
    map: void 0,
    media: void 0
  });
}, W4 = void 0, z4 = void 0, U4 = !1;
_t({
  render: I4,
  staticRenderFns: N4
}, B4, M4, W4, U4, z4, !1, mt, void 0, void 0);
var Wf, zf, Uf, Hf, Ln, jf, qf, Gf;
function Yf(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function H4(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yf(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function j4(n) {
  return function() {
    var e = ue(n), r;
    if (q4()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function q4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var G4 = (Wf = Se({
  default: "horizontal"
}), zf = ba("container"), Uf = $5("hsl"), Ye(Hf = (Ln = (Gf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = j4(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "direction", jf, pe(a)), _e(a, "container", qf, pe(a)), a.oldHue = 0, a.pullDirection = "", a.containerWidth = 0, a.containerHeight = 0, a.xOffset = 0, a.yOffset = 0, a;
  }
  return vt(r, [{
    key: "onHSLChanged",
    value: function(o) {
      var u = o.h;
      u !== 0 && u - this.oldHue > 0 && (this.pullDirection = "right"), u !== 0 && u - this.oldHue < 0 && (this.pullDirection = "left"), this.oldHue = u;
    }
  }, {
    key: "mounted",
    value: function() {
      var o = this.container;
      this.containerWidth = o.clientWidth, this.containerHeight = o.clientHeight, this.xOffset = o.getBoundingClientRect().left + window.pageXOffset, this.yOffset = o.getBoundingClientRect().top + window.pageYOffset;
    }
  }, {
    key: "handleChange",
    value: function(o, u) {
      var c, h, m = this.containerWidth, b = this.containerHeight, T = this.xOffset, O = this.yOffset, R = o - T, L = u - O;
      this.direction === "vertical" ? L < 0 ? c = 360 : L > b ? c = 0 : (h = -(L * 100 / b) + 100, c = 360 * h / 100) : R < 0 ? c = 0 : R > m ? c = 360 : (h = R * 100 / m, c = 360 * h / 100), this.hsl.h !== c && this.onColorChange(H4({}, this.hsl, {}, {
        h: c
      }));
    }
  }, {
    key: "handleTouchEvnet",
    value: function(o) {
      o.preventDefault(), this.handleChange(o.touches ? o.touches[0].pageX : 0, o.touches ? o.touches[0].pageY : 0);
    }
  }, {
    key: "handleMouseDown",
    value: function(o) {
      this.handleChange(o.pageX, o.pageY), window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "handleMouseMove",
    value: function(o) {
      this.handleChange(o.pageX, o.pageY);
    }
  }, {
    key: "handleMouseUp",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "hsl",
    get: function() {
      return this.tc.toHsl();
    }
  }, {
    key: "directionClass",
    get: function() {
      return {
        "vc-hue--horizontal": this.direction === "horizontal",
        "vc-hue--vertical": this.direction === "vertical"
      };
    }
  }, {
    key: "pointerTop",
    get: function() {
      var o = 0;
      return this.direction === "vertical" && (this.hsl.h === 0 && this.pullDirection === "right" ? o = 0 : o = -(this.hsl.h * 100 / 360) + 100), "".concat(o, "%");
    }
  }, {
    key: "pointerLeft",
    get: function() {
      var o = 0;
      return this.direction === "horizontal" && (this.hsl.h === 0 && this.pullDirection === "right" ? o = 100 : o = this.hsl.h * 100 / 360), "".concat(o, "%");
    }
  }]), r;
}(It(Nt)), Gf), jf = ge(Ln.prototype, "direction", [Wf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), qf = ge(Ln.prototype, "container", [zf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), ge(Ln.prototype, "onHSLChanged", [Uf], Object.getOwnPropertyDescriptor(Ln.prototype, "onHSLChanged"), Ln.prototype), Ln)) || Hf), Y4 = G4, X4 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    class: ["vc-hue", e.directionClass],
    attrs: {
      role: "HuePanel"
    }
  }, [a("div", {
    ref: "container",
    staticClass: "vc-hue-container",
    on: {
      mousedown: e.handleMouseDown,
      touchmove: e.handleTouchEvnet,
      touchstart: e.handleTouchEvnet
    }
  }, [a("div", {
    staticClass: "vc-hue-pointer",
    style: {
      top: e.pointerTop,
      left: e.pointerLeft
    },
    attrs: {
      role: "CurrentHuePointer"
    }
  }, [a("div", {
    staticClass: "vc-hue-picker"
  })])])]);
}, K4 = [], V4 = function(e) {
  e && e("data-v-579123e4_0", {
    source: ".vc-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vc-hue--horizontal{background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.vc-hue--vertical{background:linear-gradient(to top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.vc-hue-container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vc-hue-pointer{z-index:2;position:absolute}.vc-hue-picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}.vc-hue--vertical .vc-hue-picker{transform:translateX(-2px) translateY(-50%)}",
    map: void 0,
    media: void 0
  });
}, Z4 = void 0, J4 = void 0, Q4 = !1, wa = _t({
  render: X4,
  staticRenderFns: K4
}, V4, Y4, Z4, Q4, J4, !1, mt, void 0, void 0), Xf, Kf, Vf, ho, Zf, Jf;
function Qf(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function e6(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qf(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function t6(n) {
  return function() {
    var e = ue(n), r;
    if (n6()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function n6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var r6 = (Xf = Ye({
  components: {
    Hue: wa
  }
}), Kf = Se({
  default: function() {
    return [".80", ".65", ".50", ".35", ".20"];
  }
}), Xf(Vf = (ho = (Jf = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = t6(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "swatches", Zf, pe(a)), a;
  }
  return vt(r, [{
    key: "handleSwClick",
    value: function(o) {
      this.onColorChange(e6({}, this.hsl, {
        s: 0.5,
        l: o
      }));
    }
  }, {
    key: "hsl",
    get: function() {
      return this.tc.toHsl();
    }
  }, {
    key: "activeOffset",
    get: function() {
      var o = this.swatches.includes("0"), u = this.swatches.includes("1"), c = this.hsl;
      return Math.round(c.s * 100) / 100 === 0.5 ? Math.round(c.l * 100) / 100 : o && c.l === 0 ? 0 : u && c.l === 1 ? 1 : -1;
    }
  }]), r;
}(It(Nt)), Jf), Zf = ge(ho.prototype, "swatches", [Kf], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), ho)) || Vf), i6 = r6, a6 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-slider",
    attrs: {
      role: "SliderColorPicker"
    }
  }, [a("div", {
    staticClass: "vc-slider-hue-warp"
  }, [a("Hue", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-slider-swatches",
    attrs: {
      role: "group"
    }
  }, e._l(e.swatches, function(o, u) {
    return a("div", {
      key: u,
      staticClass: "vc-slider-swatch",
      attrs: {
        "data-index": u
      },
      on: {
        click: function(h) {
          return e.handleSwClick(o);
        }
      }
    }, [a("div", {
      staticClass: "vc-slider-swatch-picker",
      class: {
        "vc-slider-swatch-picker--active": o == e.activeOffset,
        "vc-slider-swatch-picker--white": o === "1"
      },
      style: {
        background: "hsl(" + e.hsl.h + ", 50%, " + o * 100 + "%)"
      },
      attrs: {
        "aria-label": "color:hsl(" + e.hsl.h + ", 50%, " + o * 100 + "%)"
      }
    })]);
  }), 0)]);
}, s6 = [], o6 = function(e) {
  e && e("data-v-7d76e88d_0", {
    source: ".vc-slider{position:relative;width:410px}.vc-slider-hue-warp{height:12px;position:relative}.vc-slider-hue-warp .vc-hue-picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-slider-swatches{display:flex;margin-top:20px}.vc-slider-swatch{margin-right:1px;flex:1;width:20%}.vc-slider-swatch:first-child{margin-right:1px}.vc-slider-swatch:first-child .vc-slider-swatch-picker{border-radius:2px 0 0 2px}.vc-slider-swatch:last-child{margin-right:0}.vc-slider-swatch:last-child .vc-slider-swatch-picker{border-radius:0 2px 2px 0}.vc-slider-swatch-picker{cursor:pointer;height:12px}.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 1px #ddd}.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 .6px #ddd}",
    map: void 0,
    media: void 0
  });
}, u6 = void 0, l6 = void 0, c6 = !1;
_t({
  render: a6,
  staticRenderFns: s6
}, o6, i6, u6, c6, l6, !1, mt, void 0, void 0);
var ed, td, po, nd, rd;
function f6(n) {
  return function() {
    var e = ue(n), r;
    if (d6()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function d6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var h6 = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "blueGrey", "black"], p6 = ["900", "700", "500", "300", "100"], g6 = function() {
  var e = [];
  return h6.forEach(function(r) {
    var a = [];
    r.toLowerCase() === "black" || r.toLowerCase() === "white" ? a = a.concat(["#000000", "#FFFFFF"]) : p6.forEach(function(o) {
      var u = S3[r][o];
      a.push(u.toUpperCase());
    }), e.push(a);
  }), e;
}, v6 = (ed = Se({
  default: g6
}), Ye(td = (po = (rd = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = f6(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "palette", nd, pe(a)), a;
  }
  return vt(r, [{
    key: "handlerClick",
    value: function(o) {
      this.onColorChange(o);
    }
  }, {
    key: "pick",
    get: function() {
      return this.tc === null ? "" : this.tc.toHexString();
    }
  }]), r;
}(It(Nt)), rd), nd = ge(po.prototype, "palette", [ed], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), po)) || td), _6 = v6, m6 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-swatches",
    attrs: {
      role: "SwatchesColorPicker",
      "data-pick": e.pick
    }
  }, [a("div", {
    staticClass: "vc-swatches-box",
    attrs: {
      role: "group"
    }
  }, e._l(e.palette, function(o, u) {
    return a("div", {
      key: u,
      staticClass: "vc-swatches-color-group"
    }, e._l(o, function(c) {
      return a("div", {
        key: c,
        class: ["vc-swatches-color-it", {
          "vc-swatches-color--white": c === "#FFFFFF"
        }],
        style: {
          background: c
        },
        attrs: {
          "aria-label": "Color:" + c,
          "data-color": c
        },
        on: {
          click: function(m) {
            return e.handlerClick(c);
          }
        }
      }, [a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.equals(c),
          expression: "equals(c)"
        }],
        staticClass: "vc-swatches-pick"
      }, [a("svg", {
        staticStyle: {
          width: "24px",
          height: "24px"
        },
        attrs: {
          viewBox: "0 0 24 24"
        }
      }, [a("path", {
        attrs: {
          d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        }
      })])])]);
    }), 0);
  }), 0)]);
}, b6 = [], y6 = function(e) {
  e && e("data-v-2b663370_0", {
    source: ".vc-swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vc-swatches-box{padding:16px 0 6px 16px;overflow:hidden}.vc-swatches-color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vc-swatches-color-it{box-sizing:border-box;width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;-ms-border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-o-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;border-radius:2px 2px 0 0}.vc-swatches-color--white{border:1px solid #ddd}.vc-swatches-pick{fill:#fff;margin-left:8px;display:block}.vc-swatches-color--white .vc-swatches-pick{fill:#333}",
    map: void 0,
    media: void 0
  });
}, w6 = void 0, x6 = void 0, C6 = !1;
_t({
  render: m6,
  staticRenderFns: b6
}, y6, _6, w6, C6, x6, !1, mt, void 0, void 0);
var id, ad, go, sd, od;
function ud(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function S6(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ud(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function T6(n) {
  return function() {
    var e = ue(n), r;
    if (k6()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function k6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var A6 = (id = ba("container"), Ye(ad = (go = (od = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = T6(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), a.containerWidth = 0, a.containerHeight = 0, a.xOffset = 0, a.yOffset = 0, a.lastMouseEvent = "", a.throttle = H3(function(h, m) {
      h(m);
    }, 20, {
      leading: !0,
      trailing: !1
    }), _e(a, "container", sd, pe(a)), a;
  }
  return vt(r, [{
    key: "mounted",
    value: function() {
      var o = this.$refs.container;
      this.containerWidth = o.clientWidth, this.containerHeight = o.clientHeight, this.xOffset = o.getBoundingClientRect().left + window.pageXOffset, this.yOffset = o.getBoundingClientRect().top + window.pageYOffset;
    }
  }, {
    key: "handleChange",
    value: function(o, u) {
      var c = this.containerWidth, h = this.containerHeight, m = this.xOffset, b = this.yOffset, T = Dt(o - m, 0, c), O = Dt(u - b, 0, h), R = T / c, L = Dt(-(O / h) + 1, 0, 1);
      this.throttle(this.onColorChange, S6({}, this.hsv, {}, {
        s: R,
        v: L
      }));
    }
  }, {
    key: "handleMouseDown",
    value: function() {
      window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "handleMouseMove",
    value: function(o) {
      this.lastMouseEvent = o.type, this.handleChange(o.pageX, o.pageY);
    }
  }, {
    key: "handleMouseUp",
    value: function(o) {
      this.lastMouseEvent !== "mousemove" && this.handleChange(o.pageX, o.pageY), this.lastMouseEvent = "", this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "handleTouchEvents",
    value: function(o) {
      console.log(o.type);
      var u = o.touches ? o.touches[0].pageX : 0, c = o.touches ? o.touches[0].pageY : 0;
      this.handleChange(u, c);
    }
  }, {
    key: "hsv",
    get: function() {
      return this.tc.toHsv();
    }
  }, {
    key: "bgColor",
    get: function() {
      return "hsl(".concat(this.hsv.h, ", 100%, 50%)");
    }
  }, {
    key: "pointerTop",
    get: function() {
      return -(this.hsv.v * 100) + 1 + 100 + "%";
    }
  }, {
    key: "pointerLeft",
    get: function() {
      return this.hsv.s * 100 + "%";
    }
  }]), r;
}(It(Nt)), od), sd = ge(go.prototype, "container", [id], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), go)) || ad), E6 = A6, O6 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    ref: "container",
    staticClass: "vc-saturation",
    style: {
      background: e.bgColor
    },
    attrs: {
      role: "SaturationPanel"
    },
    on: {
      mousedown: e.handleMouseDown,
      touchmove: e.handleTouchEvents,
      touchstart: e.handleTouchEvents
    }
  }, [a("div", {
    staticClass: "vc-saturation--white"
  }), e._v(" "), a("div", {
    staticClass: "vc-saturation--black"
  }), e._v(" "), a("div", {
    staticClass: "vc-saturation-pointer",
    style: {
      top: e.pointerTop,
      left: e.pointerLeft
    },
    attrs: {
      role: "CurrentSaturationPointer"
    }
  }, [a("div", {
    staticClass: "vc-saturation-circle"
  })])]);
}, $6 = [], P6 = function(e) {
  e && e("data-v-7500df3c_0", {
    source: ".vc-saturation,.vc-saturation--black,.vc-saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-tap-highlight-color:transparent}.vc-saturation--white{background:linear-gradient(to right,#fff,rgba(255,255,255,0))}.vc-saturation--black{background:linear-gradient(to top,#000,rgba(0,0,0,0))}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",
    map: void 0,
    media: void 0
  });
}, R6 = void 0, F6 = void 0, L6 = !1, Go = _t({
  render: O6,
  staticRenderFns: $6
}, P6, E6, R6, L6, F6, !1, mt, void 0, void 0), ld, cd, fd, dd, hd, pd, gd, vd, bn, _d, md, bd, yd, wd, xd, Cd;
function Sd(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Td(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sd(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function D6(n) {
  return function() {
    var e = ue(n), r;
    if (M6()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function M6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var I6 = (ld = Ye({
  components: {
    Saturation: Go,
    Hue: wa,
    EditableInput: ya
  }
}), cd = Se({
  default: "Color Picker"
}), fd = Se({
  default: !1
}), dd = Se({
  default: !1
}), hd = Se({
  default: "OK"
}), pd = Se({
  default: "Cancel"
}), gd = Se({
  default: "Reset"
}), ld(vd = (bn = (Cd = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = D6(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "head", _d, pe(a)), _e(a, "disableFields", md, pe(a)), _e(a, "hasResetButton", bd, pe(a)), _e(a, "acceptLabel", yd, pe(a)), _e(a, "cancelLabel", wd, pe(a)), _e(a, "resetLabel", xd, pe(a)), a.currentColor = null, a;
  }
  return vt(r, [{
    key: "mounted",
    value: function() {
      this.currentColor = this.tc.toHexString();
    }
  }, {
    key: "inputChange",
    value: function(o, u) {
      if (o === "hex" && rp(u)) {
        this.onColorChange(u);
        return;
      }
      if (o === "r" || o === "g" || o === "b") {
        this.onColorChange(Td({}, this.rgba, gt({}, o, u)));
        return;
      }
      if (o === "h" || o === "s" || o === "v") {
        this.onColorChange(Td({}, this.tc.toHsv(), gt({}, o, u)));
        return;
      }
    }
  }, {
    key: "clickCurrentColor",
    value: function() {
      this.currentColor && this.onColorChange(this.currentColor);
    }
  }, {
    key: "handleAccept",
    value: function() {
      this.$emit("ok");
    }
  }, {
    key: "handleCancel",
    value: function() {
      this.$emit("cancel");
    }
  }, {
    key: "handleReset",
    value: function() {
      this.$emit("reset");
    }
  }, {
    key: "hex",
    get: function() {
      return this.tc.toHexString();
    }
  }, {
    key: "rgba",
    get: function() {
      return this.tc.toRgb();
    }
  }, {
    key: "hsv",
    get: function() {
      var o = this.tc.toHsv();
      return {
        h: o.h.toFixed(),
        s: (o.s * 100).toFixed(),
        v: (o.v * 100).toFixed()
      };
    }
  }]), r;
}(It(Nt)), Cd), _d = ge(bn.prototype, "head", [cd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), md = ge(bn.prototype, "disableFields", [fd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), bd = ge(bn.prototype, "hasResetButton", [dd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), yd = ge(bn.prototype, "acceptLabel", [hd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), wd = ge(bn.prototype, "cancelLabel", [pd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), xd = ge(bn.prototype, "resetLabel", [gd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), bn)) || vd), N6 = I6, B6 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    class: ["vc-photoshop", e.disableFields ? "vc-photoshop__disable-fields" : ""],
    attrs: {
      role: "PhotoShopColorPicker"
    }
  }, [a("div", {
    staticClass: "vc-ps-head"
  }, [e._v(e._s(e.head))]), e._v(" "), a("div", {
    staticClass: "vc-ps-body"
  }, [a("div", {
    staticClass: "vc-ps-saturation-wrap"
  }, [a("Saturation", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-ps-hue-wrap"
  }, [a("hue", {
    attrs: {
      value: e.tc,
      direction: "vertical"
    },
    on: {
      change: e.onColorChange
    }
  }, [a("div", {
    staticClass: "vc-ps-hue-pointer"
  }, [a("i", {
    staticClass: "vc-ps-hue-pointer--left"
  }), e._v(" "), a("i", {
    staticClass: "vc-ps-hue-pointer--right"
  })])])], 1), e._v(" "), a("div", {
    class: ["vc-ps-controls", e.disableFields ? "vc-ps-controls__disable-fields" : ""]
  }, [a("div", {
    staticClass: "vc-ps-previews"
  }, [a("div", {
    staticClass: "vc-ps-previews__label"
  }, [e._v("new")]), e._v(" "), a("div", {
    staticClass: "vc-ps-previews__swatches"
  }, [a("div", {
    staticClass: "vc-ps-previews__pr-color",
    style: {
      background: e.hex
    },
    attrs: {
      "aria-label": "NewColor:" + e.hex
    }
  }), e._v(" "), a("div", {
    staticClass: "vc-ps-previews__pr-color",
    style: {
      background: e.currentColor
    },
    attrs: {
      "aria-label": "CurrentColor:" + e.currentColor
    },
    on: {
      click: e.clickCurrentColor
    }
  })]), e._v(" "), a("div", {
    staticClass: "vc-ps-previews__label"
  }, [e._v("current")])]), e._v(" "), e.disableFields ? e._e() : a("div", {
    staticClass: "vc-ps-actions"
  }, [a("div", {
    staticClass: "vc-ps-ac-btn",
    attrs: {
      role: "button",
      "aria-label": "Confirm"
    },
    on: {
      click: e.handleAccept
    }
  }, [e._v(`
          ` + e._s(e.acceptLabel) + `
        `)]), e._v(" "), a("div", {
    staticClass: "vc-ps-ac-btn",
    attrs: {
      role: "button",
      "aria-label": "Cancel"
    },
    on: {
      click: e.handleCancel
    }
  }, [e._v(`
          ` + e._s(e.cancelLabel) + `
        `)]), e._v(" "), a("div", {
    staticClass: "vc-ps-fields"
  }, [a("EditableInput", {
    attrs: {
      label: "h",
      desc: "°",
      value: e.hsv.h
    },
    on: {
      change: function(u) {
        return e.inputChange("h", u);
      }
    }
  }), e._v(" "), a("EditableInput", {
    attrs: {
      label: "s",
      desc: "%",
      value: e.hsv.s,
      max: 100
    },
    on: {
      change: function(u) {
        return e.inputChange("s", u);
      }
    }
  }), e._v(" "), a("EditableInput", {
    attrs: {
      label: "v",
      desc: "%",
      value: e.hsv.v,
      max: 100
    },
    on: {
      change: function(u) {
        return e.inputChange("v", u);
      }
    }
  }), e._v(" "), a("div", {
    staticClass: "vc-ps-fields__divider"
  }), e._v(" "), a("EditableInput", {
    attrs: {
      label: "r",
      value: e.rgba.r
    },
    on: {
      change: function(u) {
        return e.inputChange("r", u);
      }
    }
  }), e._v(" "), a("EditableInput", {
    attrs: {
      label: "g",
      value: e.rgba.g
    },
    on: {
      change: function(u) {
        return e.inputChange("g", u);
      }
    }
  }), e._v(" "), a("EditableInput", {
    attrs: {
      label: "b",
      value: e.rgba.b
    },
    on: {
      change: function(u) {
        return e.inputChange("b", u);
      }
    }
  }), e._v(" "), a("div", {
    staticClass: "vc-ps-fields__divider"
  }), e._v(" "), a("EditableInput", {
    staticClass: "vc-ps-fields__hex",
    attrs: {
      label: "#",
      value: e.tc.toHex()
    },
    on: {
      change: function(u) {
        return e.inputChange("hex", u);
      }
    }
  })], 1), e._v(" "), e.hasResetButton ? a("div", {
    staticClass: "vc-ps-ac-btn",
    attrs: {
      "aria-label": "reset"
    },
    on: {
      click: e.handleReset
    }
  }, [e._v(`
          ` + e._s(e.resetLabel) + `
        `)]) : e._e()])])])]);
}, W6 = [], z6 = function(e) {
  e && e("data-v-55f2423a_0", {
    source: '.vc-photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vc-photoshop__disable-fields{width:390px}.vc-ps-head{background-image:linear-gradient(-180deg,#f0f0f0 0,#d4d4d4 100%);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 rgba(255,255,255,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vc-ps-body{padding:15px;display:flex}.vc-ps-saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vc-ps-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-ps-hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vc-ps-hue-pointer{position:relative}.vc-ps-hue-pointer--left,.vc-ps-hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vc-ps-hue-pointer--left:after,.vc-ps-hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vc-ps-hue-pointer--left{transform:translate(-13px,-4px)}.vc-ps-hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vc-ps-controls{width:180px;margin-left:10px;display:flex}.vc-ps-controls__disable-fields{width:auto}.vc-ps-actions{margin-left:20px;flex:1}.vc-ps-ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff 0,#e6e6e6 100%);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vc-ps-previews{width:60px}.vc-ps-previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vc-ps-previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vc-ps-previews__label{font-size:14px;color:#000;text-align:center}.vc-ps-fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vc-ps-fields .vc-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vc-ps-fields .vc-input__desc,.vc-ps-fields .vc-input__label{top:0;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vc-ps-fields .vc-input__label{left:0;width:34px}.vc-ps-fields .vc-input__desc{right:0;width:0}.vc-ps-fields__divider{height:5px}.vc-ps-fields__hex .vc-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vc-ps-fields__hex .vc-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',
    map: void 0,
    media: void 0
  });
}, U6 = void 0, H6 = void 0, j6 = !1;
_t({
  render: B6,
  staticRenderFns: W6
}, z6, N6, U6, j6, H6, !1, mt, void 0, void 0);
var kd, Ad, Ed, Od, Lr, $d, Pd, Rd, Fd;
function q6(n) {
  return function() {
    var e = ue(n), r;
    if (G6()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function G6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var vo = {}, Y6 = (kd = Se({
  default: 8
}), Ad = Se({
  default: "#fff"
}), Ed = Se({
  default: "#e6e6e6"
}), Ye(Od = (Lr = (Fd = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = q6(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "size", $d, pe(a)), _e(a, "white", Pd, pe(a)), _e(a, "grey", Rd, pe(a)), a;
  }
  return vt(r, [{
    key: "bgStyle",
    get: function() {
      var o = X6(this.white, this.grey, this.size);
      return o === null ? {} : {
        "background-image": "url(".concat(o, ")")
      };
    }
  }]), r;
}(Ot), Fd), $d = ge(Lr.prototype, "size", [kd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Pd = ge(Lr.prototype, "white", [Ad], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Rd = ge(Lr.prototype, "grey", [Ed], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Lr)) || Od);
function X6(n, e, r) {
  var a = n + "," + e + "," + r;
  if (vo[a])
    return vo[a];
  var o = K6(n, e, r);
  return o === null ? null : (vo[a] = o, o);
}
function K6(n, e, r) {
  if (typeof document > "u")
    return null;
  var a = document.createElement("canvas");
  a.width = a.height = r * 2;
  var o = a.getContext("2d");
  return o ? (o.fillStyle = n, o.fillRect(0, 0, a.width, a.height), o.fillStyle = e, o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null;
}
var V6 = Y6, Z6 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-checkerboard",
    style: e.bgStyle
  });
}, J6 = [], Q6 = function(e) {
  e && e("data-v-0130206a_0", {
    source: ".vc-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0;background-size:contain}",
    map: void 0,
    media: void 0
  });
}, e8 = void 0, t8 = void 0, n8 = !1, Yo = _t({
  render: Z6,
  staticRenderFns: J6
}, Q6, V6, e8, n8, t8, !1, mt, void 0, void 0), Ld, Dd, Md, _o, Id, Nd;
function r8(n) {
  return function() {
    var e = ue(n), r;
    if (i8()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function i8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var a8 = (Ld = Ye({
  components: {
    Checkboard: Yo
  }
}), Dd = ba(), Ld(Md = (_o = (Nd = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = r8(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "container", Id, pe(a)), a.containerWidth = 0, a.xOffset = 0, a;
  }
  return vt(r, [{
    key: "gradientColor",
    value: function() {
      var o = this.tc.toRgb(), u = [o.r, o.g, o.b].join(",");
      return "linear-gradient(to right, rgba(".concat(u, ", 0) 0%, rgba(").concat(u, ", 1) 100%)");
    }
  }, {
    key: "mounted",
    value: function() {
      var o = this.$refs.container;
      this.containerWidth = o.clientWidth, this.xOffset = o.getBoundingClientRect().left + window.pageXOffset;
    }
  }, {
    key: "handleChange",
    value: function(o) {
      var u = this.containerWidth, c = this.xOffset, h = o - c, m;
      h < 0 ? m = 0 : h > u ? m = 1 : m = Math.round(h * 100 / u) / 100, this.a !== m && (this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(this.tc.setAlpha(m)));
    }
  }, {
    key: "handleMouseDown",
    value: function(o) {
      o.preventDefault(), this.handleChange(o.pageX), window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "handleMouseMove",
    value: function(o) {
      this.handleChange(o.pageX);
    }
  }, {
    key: "handleMouseUp",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "handlTouchEvents",
    value: function(o) {
      var u = o.touches ? o.touches[0].pageX : 0;
      this.handleChange(u);
    }
  }, {
    key: "a",
    get: function() {
      return this.tc.getAlpha();
    }
  }, {
    key: "pointerLeft",
    get: function() {
      return "".concat(this.a * 100, "%");
    }
  }]), r;
}(It(Nt)), Nd), Id = ge(_o.prototype, "container", [Dd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), _o)) || Md), s8 = a8, o8 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-alpha",
    attrs: {
      role: "HuePanel"
    }
  }, [a("div", {
    staticClass: "vc-alpha-checkboard-wrap"
  }, [a("Checkboard")], 1), e._v(" "), a("div", {
    staticClass: "vc-alpha-gradient",
    style: {
      background: e.gradientColor
    }
  }), e._v(" "), a("div", {
    ref: "container",
    staticClass: "vc-alpha-container",
    on: {
      mousedown: e.handleMouseDown,
      touchmove: e.handlTouchEvents,
      touchstart: e.handlTouchEvents
    }
  }, [a("div", {
    staticClass: "vc-alpha-pointer",
    style: {
      left: e.pointerLeft
    },
    attrs: {
      role: "CurrentAlphaPointer"
    }
  }, [a("div", {
    staticClass: "vc-alpha-picker"
  })])])]);
}, u8 = [], l8 = function(e) {
  e && e("data-v-fd896072_0", {
    source: ".vc-alpha{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.vc-alpha-gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px;-webkit-tap-highlight-color:transparent}.vc-alpha-pointer{z-index:2;position:absolute}.vc-alpha-picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",
    map: void 0,
    media: void 0
  });
}, c8 = void 0, f8 = void 0, d8 = !1, ip = _t({
  render: o8,
  staticRenderFns: u8
}, l8, s8, c8, d8, f8, !1, mt, void 0, void 0), Bd, Wd, zd, Ud, Hd, Dr, jd, qd, Gd, Yd;
function Xd(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function h8(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xd(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Xd(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function p8(n) {
  return function() {
    var e = ue(n), r;
    if (g8()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function g8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var v8 = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF", "rgba(0,0,0,0)"], _8 = (Bd = Ye({
  components: {
    EditableInput: ya,
    Saturation: Go,
    Hue: wa,
    Alpha: ip,
    Checkboard: Yo
  }
}), Wd = Se({
  default: function() {
    return v8;
  }
}), zd = Se({
  default: !1
}), Ud = Se({
  default: !1
}), Bd(Hd = (Dr = (Yd = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = p8(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "presetColors", jd, pe(a)), _e(a, "disableAlpha", qd, pe(a)), _e(a, "disableFields", Gd, pe(a)), a.isTransparent = P4, a;
  }
  return vt(r, [{
    key: "onAlphaChange",
    value: function(o) {
      Mo(o) && this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(o);
    }
  }, {
    key: "onInputChange",
    value: function(o, u) {
      this.onColorChange(h8({}, this.rgba, gt({}, o, u)));
    }
  }, {
    key: "hex",
    get: function() {
      return Mo(this.tc) ? this.tc.toHex8() : this.tc.toHex();
    }
  }, {
    key: "rgba",
    get: function() {
      return this.tc.toRgb();
    }
  }]), r;
}(It(Nt)), Yd), jd = ge(Dr.prototype, "presetColors", [Wd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), qd = ge(Dr.prototype, "disableAlpha", [zd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Gd = ge(Dr.prototype, "disableFields", [Ud], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Dr)) || Hd), m8 = _8, b8 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    class: ["vc-sketch", e.disableAlpha ? "vc-sketch__disable-alpha" : ""],
    attrs: {
      role: "SketchColorPicker"
    }
  }, [a("div", {
    staticClass: "vc-sketch-saturation-wrap"
  }, [a("Saturation", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-sketch-controls"
  }, [a("div", {
    staticClass: "vc-sketch-sliders"
  }, [a("div", {
    staticClass: "vc-sketch-hue-wrap"
  }, [a("Hue", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), e.disableAlpha ? e._e() : a("div", {
    staticClass: "vc-sketch-alpha-wrap"
  }, [a("Alpha", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onAlphaChange
    }
  })], 1)]), e._v(" "), a("div", {
    staticClass: "vc-sketch-color-wrap"
  }, [a("div", {
    staticClass: "vc-sketch-active-color",
    style: {
      background: e.tc.toRgbString()
    },
    attrs: {
      "aria-label": "Currentcolor: " + e.tc.toRgbString()
    }
  }), e._v(" "), a("Checkboard")], 1)]), e._v(" "), e.disableFields ? e._e() : a("div", {
    staticClass: "vc-sketch-field"
  }, [a("div", {
    staticClass: "vc-sketch-field--double"
  }, [a("EditableInput", {
    attrs: {
      label: "hex",
      value: e.hex
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-sketch-field--single"
  }, [a("EditableInput", {
    attrs: {
      label: "r",
      value: e.rgba.r
    },
    on: {
      change: function(u) {
        return e.onInputChange("r", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-sketch-field--single"
  }, [a("EditableInput", {
    attrs: {
      label: "g",
      value: e.rgba.g
    },
    on: {
      change: function(u) {
        return e.onInputChange("r", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-sketch-field--single"
  }, [a("EditableInput", {
    attrs: {
      label: "b",
      value: e.rgba.b
    },
    on: {
      change: function(u) {
        return e.onInputChange("r", u);
      }
    }
  })], 1), e._v(" "), e.disableAlpha ? e._e() : a("div", {
    staticClass: "vc-sketch-field--single"
  }, [a("EditableInput", {
    attrs: {
      label: "a",
      value: e.rgba.a,
      step: 0.01
    },
    on: {
      change: function(u) {
        return e.onInputChange("r", u);
      }
    }
  })], 1)]), e._v(" "), a("div", {
    staticClass: "vc-sketch-presets",
    attrs: {
      role: "group"
    }
  }, [e._l(e.presetColors, function(o) {
    return [e.isTransparent(o) ? a("div", {
      key: o,
      staticClass: "vc-sketch-presets-color",
      attrs: {
        "aria-label": "Color:" + o
      },
      on: {
        click: function(c) {
          return e.onColorChange(o);
        }
      }
    }, [a("checkboard")], 1) : a("div", {
      key: o,
      staticClass: "vc-sketch-presets-color",
      style: {
        background: o
      },
      attrs: {
        "aria-label": "Color:" + o
      },
      on: {
        click: function(c) {
          return e.onColorChange(o);
        }
      }
    })];
  })], 2)]);
}, y8 = [], w8 = function(e) {
  e && e("data-v-4b47afcd_0", {
    source: ".vc-sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vc-sketch-saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vc-sketch-controls{display:flex}.vc-sketch-sliders{padding:4px 0;flex:1}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-hue-wrap{position:relative;height:10px}.vc-sketch-alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vc-sketch-active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{width:90%;padding:4px 0 3px 10%;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px}.vc-sketch-field .vc-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vc-sketch-presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch-presets-color .vc-checkerboard{box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);border-radius:3px}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}",
    map: void 0,
    media: void 0
  });
}, x8 = void 0, C8 = void 0, S8 = !1;
_t({
  render: b8,
  staticRenderFns: y8
}, w8, m8, x8, S8, C8, !1, mt, void 0, void 0);
var Kd, Vd, Zd, Jd, Yi, Qd, eh, th;
function nh(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function rh(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nh(Object(r), !0).forEach(function(a) {
      gt(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : nh(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function T8(n) {
  return function() {
    var e = ue(n), r;
    if (k8()) {
      var a = ue(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return rt(this, r);
  };
}
function k8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var A8 = (Kd = Ye({
  components: {
    EditableInput: ya,
    Saturation: Go,
    Hue: wa,
    Alpha: ip,
    Checkboard: Yo
  }
}), Vd = Se({
  default: !1
}), Zd = Se({
  default: !1
}), Kd(Jd = (Yi = (th = /* @__PURE__ */ function(n) {
  it(r, n);
  var e = T8(r);
  function r() {
    var a;
    nt(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), _e(a, "disableAlpha", Qd, pe(a)), _e(a, "disableFields", eh, pe(a)), a.fieldsIndex = 0, a.highlight = !1, a;
  }
  return vt(r, [{
    key: "toggleViews",
    value: function() {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0;
        return;
      }
      this.fieldsIndex++;
    }
    // TODO: use css instead ?
  }, {
    key: "showHighlight",
    value: function() {
      this.highlight = !0;
    }
  }, {
    key: "hideHighlight",
    value: function() {
      this.highlight = !1;
    }
  }, {
    key: "onAlphaChange",
    value: function(o) {
      Mo(o) && this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(o);
    }
  }, {
    key: "inputChange",
    value: function(o, u) {
      (o === "r" || o === "g" || o === "b") && this.onColorChange(rh({}, this.rgba, gt({}, o, u))), (o === "h" || o === "s" || o === "l") && this.onColorChange(rh({}, this.hsl, gt({}, o, u))), (o = "a") && this.onColorChange(this.tc.setAlpha(+u));
    }
  }, {
    key: "rgba",
    get: function() {
      return this.tc.toRgb();
    }
  }, {
    key: "hsl",
    get: function() {
      return this.tc.toHsl();
    }
  }, {
    key: "hasAlpha",
    get: function() {
      return this.tc.getAlpha() < 1;
    }
  }]), r;
}(It(Nt)), th), Qd = ge(Yi.prototype, "disableAlpha", [Vd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), eh = ge(Yi.prototype, "disableFields", [Zd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Yi)) || Jd), E8 = A8, O8 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    class: ["vc-chrome", e.disableAlpha ? "vc-chrome__disable-alpha" : ""],
    attrs: {
      role: "ChromeColorPicker"
    }
  }, [a("div", {
    staticClass: "vc-chrome-saturation-wrap"
  }, [a("Saturation", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-body"
  }, [a("div", {
    staticClass: "vc-chrome-controls"
  }, [a("div", {
    staticClass: "vc-chrome-color-wrap"
  }, [a("div", {
    staticClass: "vc-chrome-active-color",
    style: {
      background: e.tc.toRgbString()
    }
  }), e._v(" "), e.disableAlpha ? e._e() : a("Checkboard")], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-sliders"
  }, [a("div", {
    staticClass: "vc-chrome-hue-wrap"
  }, [a("Hue", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onColorChange
    }
  })], 1), e._v(" "), e.disableAlpha ? e._e() : a("div", {
    staticClass: "vc-chrome-alpha-wrap"
  }, [a("Alpha", {
    attrs: {
      value: e.tc
    },
    on: {
      change: e.onAlphaChange
    }
  })], 1)])]), e._v(" "), e.disableFields ? e._e() : a("div", {
    staticClass: "vc-chrome-fields-wrap"
  }, [a("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.fieldsIndex === 0,
      expression: "fieldsIndex === 0"
    }],
    staticClass: "vc-chrome-fields"
  }, [a("div", {
    staticClass: "vc-chrome-field"
  }, [e.hasAlpha ? e._e() : a("EditableInput", {
    attrs: {
      label: "hex",
      value: e.tc.toHexString()
    },
    on: {
      change: e.onColorChange
    }
  }), e._v(" "), e.hasAlpha ? a("EditableInput", {
    attrs: {
      label: "hex",
      value: e.tc.toHex8String()
    },
    on: {
      change: e.onColorChange
    }
  }) : e._e()], 1)]), e._v(" "), a("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.fieldsIndex === 1,
      expression: "fieldsIndex === 1"
    }],
    staticClass: "vc-chrome-fields"
  }, [a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "r",
      value: e.rgba.r
    },
    on: {
      change: function(u) {
        return e.inputChange("r", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "g",
      value: e.rgba.g
    },
    on: {
      change: function(u) {
        return e.inputChange("g", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "b",
      value: e.rgba.b
    },
    on: {
      change: function(u) {
        return e.inputChange("b", u);
      }
    }
  })], 1), e._v(" "), e.disableAlpha ? e._e() : a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "a",
      value: e.rgba.a,
      step: 0.01
    },
    on: {
      change: function(u) {
        return e.inputChange("a", u);
      }
    }
  })], 1)]), e._v(" "), a("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.fieldsIndex === 2,
      expression: "fieldsIndex === 2"
    }],
    staticClass: "vc-chrome-fields"
  }, [a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "h",
      value: e.hsl.h
    },
    on: {
      change: function(u) {
        return e.inputChange("h", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "s",
      value: (e.hsl.s * 100).toFixed() + "%"
    },
    on: {
      change: function(u) {
        return e.inputChange("s", u);
      }
    }
  })], 1), e._v(" "), a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "l",
      value: (e.hsl.l * 100).toFixed() + "%"
    },
    on: {
      change: function(u) {
        return e.inputChange("l", u);
      }
    }
  })], 1), e._v(" "), e.disableAlpha ? e._e() : a("div", {
    staticClass: "vc-chrome-field"
  }, [a("EditableInput", {
    attrs: {
      label: "a",
      value: e.hsl.a,
      step: 0.01
    },
    on: {
      change: function(u) {
        return e.inputChange("a", u);
      }
    }
  })], 1)]), e._v(" "), a("div", {
    staticClass: "vc-chrome-toggle-btn",
    attrs: {
      role: "button",
      "aria-label": "Change another color definition"
    },
    on: {
      click: e.toggleViews
    }
  }, [a("div", {
    staticClass: "vc-chrome-toggle-icon"
  }, [a("svg", {
    staticStyle: {
      width: "24px",
      height: "24px"
    },
    attrs: {
      viewBox: "0 0 24 24"
    },
    on: {
      mouseover: e.showHighlight,
      mouseenter: e.showHighlight,
      mouseout: e.hideHighlight
    }
  }, [a("path", {
    attrs: {
      fill: "#333",
      d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
    }
  })])]), e._v(" "), a("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.highlight,
      expression: "highlight"
    }],
    staticClass: "vc-chrome-toggle-icon-highlight"
  })])])])]);
}, $8 = [], P8 = function(e) {
  e && e("data-v-d9a37274_0", {
    source: ".vc-chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{position:relative;width:30px;height:30px;border-radius:15px;overflow:hidden;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{width:30px;height:30px;border-radius:15px;background-size:auto}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;margin-left:-6px;flex:1}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{width:32px;text-align:right;position:relative}.vc-chrome-toggle-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vc-chrome-hue-wrap{position:relative;height:10px;margin-bottom:8px}.vc-chrome-alpha-wrap{position:relative;height:10px}.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-gradient{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-chrome-body{padding:16px 16px 12px;background-color:#fff}.vc-chrome-saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vc-chrome-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-chrome-fields .vc-input__input{font-size:11px;color:#333;width:100%;border-radius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vc-chrome-fields .vc-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}.vc-chrome__disable-alpha .vc-chrome-active-color{width:18px;height:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-top:4px;margin-bottom:4px}",
    map: void 0,
    media: void 0
  });
}, R8 = void 0, F8 = void 0, L8 = !1, D8 = _t({
  render: O8,
  staticRenderFns: $8
}, P8, E8, R8, L8, F8, !1, mt, void 0, void 0);
const M8 = qt({
  components: { Chrome: D8 },
  props: {
    value: {
      type: String,
      default: "ffffff"
    }
  },
  setup() {
    return {
      showMenu: rn(!1)
    };
  }
});
var I8 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "relative flex justify-center" }, [r("button", { staticClass: "p-1 border-2 border-gray-600", on: { click: function(a) {
    e.showMenu = !e.showMenu;
  } } }, [r("span", { staticClass: "block w-4 h-4", style: `background-color: #${e.value}` })]), e.showMenu ? r("Chrome", { staticClass: "absolute bottom-0 transform translate-y-full", attrs: { value: e.value }, on: { input: function(a) {
    e.$emit("input", a.toHex());
  } } }) : e._e()], 1);
}, N8 = [], B8 = /* @__PURE__ */ Be(
  M8,
  I8,
  N8,
  !1,
  null,
  null,
  null,
  null
);
const W8 = B8.exports, z8 = qt({
  components: { ColorPicker: W8 },
  props: {
    path: { type: Array },
    property: { type: String, default: "backgroundColor" },
    bp: { type: String, default: "xs" }
  },
  setup(n) {
    return {
      value: At({
        get() {
          var c, h;
          const { path: r, property: a, bp: o } = n;
          return ((h = (c = (wn(xe.styles, r) ?? { styles: {} }).styles) == null ? void 0 : c[a]) == null ? void 0 : h[o]) ?? "ffffff";
        },
        set(r) {
          const { path: a, property: o, bp: u } = n, { styles: c } = wn(xe.styles, a) ?? { styles: {} };
          Ro({
            path: a,
            data: {
              [o]: {
                ...c[o],
                [u]: r
              }
            }
          });
        }
      })
    };
  }
});
var U8 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("ColorPicker", { model: { value: e.value, callback: function(a) {
    e.value = a;
  }, expression: "value" } });
}, H8 = [], j8 = /* @__PURE__ */ Be(
  z8,
  U8,
  H8,
  !1,
  null,
  null,
  null,
  null
);
const q8 = j8.exports, ih = {
  fontSize: {
    type: "number",
    step: "1"
  },
  fontFamily: {
    type: "string"
  },
  bold: {
    type: "boolean"
  },
  italic: {
    type: "boolean"
  },
  underline: {
    type: "boolean"
  },
  uppercase: {
    type: "boolean"
  },
  lowercase: {
    type: "boolean"
  },
  align: {
    type: "string"
  },
  color: {
    type: "color"
  },
  lineHeight: {
    type: "number",
    step: "0.1"
  }
}, G8 = qt({
  components: { ColorUpdater: q8 },
  props: {
    reports: {
      type: Array
    }
  },
  setup(n) {
    const e = At(() => {
      const o = Nn.groupBy(n.reports, ({ kind: u }) => u);
      return Object.fromEntries(
        Object.keys(o).map((u) => [
          u,
          o[u].reduce((c, { style: h }) => (h && c.add(h), c), /* @__PURE__ */ new Set())
        ])
      );
    }), r = At(() => {
      if (!xe.selected)
        return [];
      const o = Nn.last(xe.selected.path);
      return [...e.value[o] ?? []];
    });
    return {
      info: At(() => {
        if (!xe.selected)
          return null;
        const o = wn(xe.styles, xe.selected.path) ?? { styles: {} };
        return {
          name: Nn.last(xe.selected.path),
          ...xe.selected,
          styles: Object.keys(o.styles).map((u) => ({ prop: u, value: JSON.stringify(o.styles[u]) }))
        };
      }),
      styleInfo: ih,
      errorProps: r,
      path: At(() => {
        var o;
        return (o = xe.selected) == null ? void 0 : o.path;
      }),
      colors: At(() => xe.colors),
      getValue(o, u) {
        var h;
        return (h = (wn(xe.styles, xe.selected.path) ?? { styles: {} }).styles[o]) == null ? void 0 : h[u];
      },
      setValue(o, u, c) {
        c = ih[o].type === "number" ? Number.parseFloat(c) : c;
        const { styles: h } = wn(xe.styles, xe.selected.path) ?? { styles: {} };
        Ro({
          path: xe.selected.path,
          data: {
            [o]: {
              ...h[o],
              [u]: c
            }
          }
        });
      },
      getSpacing(o) {
        var c, h;
        return (h = (c = (wn(xe.styles, Vi) ?? { styles: {} }).styles) == null ? void 0 : c.width) == null ? void 0 : h[o];
      },
      setSpacing(o, u) {
        const { styles: c } = wn(xe.styles, Vi) ?? { styles: {} };
        Ro({
          path: Vi,
          data: {
            width: {
              ...c.width,
              [o]: u
            }
          }
        });
      }
    };
  }
});
var Y8 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", [r("div", { staticClass: "flex flex-col gap-1" }, [r("h3", { staticClass: "block font-bold" }, [e._v("BG Colors:")]), e._l(e.colors, function(a, o) {
    return r("div", { key: o, staticClass: "flex gap-1" }, [r("span", [e._v(e._s(a[a.length - 1] || "(block)"))]), r("ColorUpdater", { attrs: { path: a, property: "backgroundColor", bp: "xs" } }), r("ColorUpdater", { attrs: { path: a, property: "backgroundColor", bp: "md" } }), r("ColorUpdater", { attrs: { path: a, property: "backgroundColor", bp: "lg" } })], 1);
  })], 2), r("div", [r("table", [r("tbody", [r("tr", [r("td", [e._v("spacing")]), e._l(["xs", "md", "lg"], function(a) {
    return r("td", { key: a }, [r("input", { staticClass: "ring ring-blue-200 focus:ring-2 focus:ring-blue-400 w-24", attrs: { type: "text" }, domProps: { value: e.getSpacing(a) }, on: { input: function(o) {
      return e.setSpacing(a, o.target.value);
    } } })]);
  })], 2)])])]), r("h2", { staticClass: "text-lg font-bold" }, [e._v("Selected Element:")]), e.info ? r("div", [r("div", [e._v('name: "' + e._s(e.info.name) + '"')]), r("div", [e._v('blockType: "' + e._s(e.info.display) + '"')]), r("details", [e._m(0), r("ul", { staticClass: "list-disc list-inside" }, e._l(e.info.styles, function({ prop: a, value: o }) {
    return r("li", { key: a }, [e._v(e._s(a) + ": " + e._s(o))]);
  }), 0)]), r("table", [e._m(1), r("tbody", e._l(e.styleInfo, function({ type: a, step: o }, u) {
    return r("tr", { key: u }, [r("td", { class: e.errorProps.includes(u) && "bg-red-400" }, [e._v(e._s(u))]), e._l(["xs", "md", "lg"], function(c) {
      return r("td", { key: c }, [a === "boolean" ? r("input", { attrs: { type: "checkbox" }, domProps: { value: e.getValue(u, c) }, on: { input: function(h) {
        return e.setValue(u, c, h.target.checked);
      } } }) : a === "number" ? r("input", { staticClass: "ring ring-blue-200 focus:ring-2 focus:ring-blue-400 w-24", attrs: { type: "number", step: o }, domProps: { value: e.getValue(u, c) }, on: { input: function(h) {
        return e.setValue(u, c, h.target.value);
      } } }) : a === "color" ? r("ColorUpdater", { attrs: { path: e.path, property: "color", bp: c } }) : r("input", { staticClass: "ring ring-blue-200 focus:ring-2 focus:ring-blue-400 w-24", attrs: { type: "text" }, domProps: { value: e.getValue(u, c) }, on: { input: function(h) {
        return e.setValue(u, c, h.target.value);
      } } })], 1);
    })], 2);
  }), 0)])]) : r("div", [e._v("N/A")])]);
}, X8 = [function() {
  var n = this, e = n._self._c;
  return n._self._setupProxy, e("summary", [e("h3", { staticClass: "inline-block font-bold" }, [n._v("Styles:")])]);
}, function() {
  var n = this, e = n._self._c;
  return n._self._setupProxy, e("thead", [e("tr", [e("td", [n._v("prop")]), e("td", [n._v("xs")]), e("td", [n._v("md")]), e("td", [n._v("lg")])])]);
}], K8 = /* @__PURE__ */ Be(
  G8,
  Y8,
  X8,
  !1,
  null,
  null,
  null,
  null
);
const V8 = K8.exports;
function Z8() {
  return new Promise((n) => {
    typeof setImmediate == "function" ? setImmediate(n) : setTimeout(n);
  });
}
const J8 = qt({
  props: {
    value: Number
  },
  setup(n, { emit: e }) {
    const r = rn();
    return lh(() => {
      const a = r.value;
      e("input", a.scrollHeight);
      const o = new ResizeObserver(() => {
        e("input", a.scrollHeight);
      });
      o.observe(a), Hb(() => {
        o.unobserve(a);
      });
    }), {
      root: r
    };
  }
});
var Q8 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { ref: "root" }, [e._t("default")], 2);
}, e7 = [], t7 = /* @__PURE__ */ Be(
  J8,
  Q8,
  e7,
  !1,
  null,
  null,
  null,
  null
);
const n7 = t7.exports;
function r7() {
  const n = new URLSearchParams(location.search);
  return {
    preview: n.has("inspector-preview"),
    type: n.get("inspector-type") || "block"
  };
}
const i7 = {
  components: {
    LinkElement: Kr,
    TextElement: Vr
  },
  props: {
    url: {
      type: String,
      required: !0
    },
    text: {
      type: String,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    }
  }
};
var a7 = function() {
  var e = this, r = e._self._c;
  return r("li", { staticClass: "mr-4 flex", class: { "md:py-2.5 pb-2.5": e.index === 0, "py-2.5": e.index != 0 } }, [r("LinkElement", { staticClass: "flex", attrs: { href: e.url } }, [r("TextElement", { staticClass: "w-max", attrs: { component: "span", kind: "menu-footer-link", blockType: "Menu Footer Link", color: "fff", hoverColor: "ffffffa3", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono", lineHeight: 1.3, underline: "" } }, [e._v(e._s(e.text))])], 1)], 1);
}, s7 = [], o7 = /* @__PURE__ */ Be(
  i7,
  a7,
  s7,
  !1,
  null,
  null,
  null,
  null
);
const u7 = o7.exports, l7 = {
  props: {
    url: {
      type: String,
      required: !0
    },
    svgPath: {
      type: String,
      required: !0
    }
  }
};
var c7 = function() {
  var e = this, r = e._self._c;
  return e.url ? r("li", { staticClass: "flex h-full w-10" }, [r("a", { staticClass: "hover:opacity-75 w-full h-full flex items-center justify-center", attrs: { target: "_blank", rel: "noopener", href: e.url } }, [r("svg", { staticClass: "text-white", staticStyle: { width: "16px", height: "16px" }, attrs: { viewBox: "0 0 24 24" } }, [r("path", { attrs: { fill: "currentColor", d: e.svgPath } })])])]) : e._e();
}, f7 = [], d7 = /* @__PURE__ */ Be(
  l7,
  c7,
  f7,
  !1,
  null,
  null,
  null,
  null
);
const h7 = d7.exports, p7 = {
  components: {
    Logo: Yb,
    DeskList: Xb,
    PageList: Kb,
    Site: Vb,
    LinkElement: Kr,
    LiSocialIcon: h7,
    LiMenuFooter: u7,
    SearchElement: Zb,
    TextElement: Vr,
    TextInput: ch,
    ColorArea: fh
  },
  data() {
    return {
      isMenuVisible: !1
    };
  },
  methods: {
    getCopyrightCaption(n) {
      return `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${n}`;
    }
  }
};
var g7 = function() {
  var e = this, r = e._self._c;
  return r("Nav", { staticClass: "fixed top-0 w-full inset-x-0 mx-auto border-t border-b border-white border-opacity-20 border-solid" }, [r("ColorArea", { staticClass: "flex flex-row justify-between content-center w-full inset-x-0 mx-auto md:px-10 px-5 md:h-20 h-12 duration-300", attrs: { backgroundColor: "000", kind: "navbar-box-kind" } }, [r("div", { staticClass: "flex flex-row content-center" }, [r("div", { staticClass: "flex flex-col place-content-center" }, [r("div", { staticClass: "w-4 h-4 hover:opacity-75 cursor-pointer", on: { click: function(a) {
    e.isMenuVisible = !e.isMenuVisible;
  } } }, [e.isMenuVisible ? r("svg", { staticClass: "text-white", staticStyle: { width: "16px", height: "16px" }, attrs: { viewBox: "0 0 24 24" } }, [r("path", { attrs: { fill: "currentColor", d: " M 24 2.417 L 21.583 0 L 12 9.583 L 2.417 0 L 0 2.417 L 9.583 12 L 0 21.583 L 2.417 24 L 12 14.417 L 21.583 24 L 24 21.583 L 14.417 12 L 24 2.417 Z " } })]) : e._e(), e.isMenuVisible ? e._e() : [r("ColorArea", { staticClass: "menu-bar", attrs: { kind: "menu-bar-kind", backgroundColor: "fff" } }), r("ColorArea", { staticClass: "menu-bar", attrs: { kind: "menu-bar-kind", backgroundColor: "fff" } }), r("ColorArea", { staticClass: "menu-bar", attrs: { kind: "menu-bar-kind", backgroundColor: "fff" } })]], 2)]), r("div", { staticClass: "md:flex hidden pl-5 hover:opacity-75" }, [r("LinkElement", { staticClass: "logo-wrapper", attrs: { href: "/" } }, [r("Logo")], 1)], 1), e.isMenuVisible ? e._e() : r("DeskList", { staticClass: "md:flex hidden pl-5", scopedSlots: e._u([{ key: "default", fn: function({ desks: a }) {
    return [r("ul", { staticClass: "flex flex-row items-center overflow-hidden" }, e._l(a, function(o, u) {
      return r("li", { key: u, staticClass: "h-full items-center", class: { flex: u < 5, "lg:flex hidden": u >= 5 && u < 7, hidden: u >= 7 } }, [r("LinkElement", { staticClass: "flex px-2.5", attrs: { href: o.url } }, [r("TextElement", { staticClass: "whitespace-nowrap", attrs: { component: "div", kind: "nav-link-header", blockType: "Nav Link Header", "font-size": 16, color: "FFFFFF", "font-family": "Standard", bold: "", hoverColor: "ffffffa3" } }, [e._v(e._s(o.name))])], 1)], 1);
    }), 0)];
  } }], null, !1, 3690383489) })], 1), r("div", { staticClass: "md:hidden hover:opacity-75" }, [r("LinkElement", { staticClass: "logo-wrapper", attrs: { href: "/" } }, [r("Logo")], 1)], 1), r("div", { staticClass: "flex" }, [e.isMenuVisible ? e._e() : r("Site", { staticClass: "hidden md:flex", scopedSlots: e._u([{ key: "default", fn: function({ site: a }) {
    return [r("ul", { staticClass: "hidden md:-mr-2.5 md:w-32 md:flex md:flex-row md:flex-wrap md:items-center md:justify-end" }, [a.facebook ? r("LiSocialIcon", { attrs: { url: a.facebook, svgPath: " M 12 0.048 C 5.4 0.048 0 5.436 0 12.072 C 0 18.072 4.392 23.052 10.128 23.952 L 10.128 15.552 L 7.08 15.552 L 7.08 12.072 L 10.128 12.072 L 10.128 9.42 C 10.128 6.408 11.916 4.752 14.664 4.752 C 15.972 4.752 17.34 4.98 17.34 4.98 L 17.34 7.944 L 15.828 7.944 C 14.34 7.944 13.872 8.868 13.872 9.816 L 13.872 12.072 L 17.208 12.072 L 16.668 15.552 L 13.872 15.552 L 13.872 23.952 C 19.714 23.029 24.013 17.987 24 12.072 C 24 5.436 18.6 0.048 12 0.048 Z " } }) : e._e(), a.twitter ? r("LiSocialIcon", { attrs: { url: a.twitter, svgPath: " M 24 5.043 C 23.117 5.445 22.164 5.708 21.178 5.835 C 22.187 5.227 22.967 4.263 23.335 3.104 C 22.382 3.678 21.327 4.079 20.214 4.309 C 19.308 3.322 18.034 2.749 16.589 2.749 C 13.893 2.749 11.69 4.951 11.69 7.67 C 11.69 8.06 11.736 8.439 11.816 8.794 C 7.732 8.588 4.096 6.626 1.675 3.655 C 1.25 4.378 1.01 5.227 1.01 6.121 C 1.01 7.831 1.87 9.345 3.201 10.206 C 2.386 10.206 1.629 9.976 0.964 9.632 C 0.964 9.632 0.964 9.632 0.964 9.666 C 0.964 12.053 2.662 14.049 4.91 14.496 C 4.497 14.611 4.061 14.668 3.614 14.668 C 3.304 14.668 2.994 14.634 2.696 14.576 C 3.315 16.515 5.117 17.961 7.285 17.995 C 5.61 19.326 3.488 20.106 1.17 20.106 C 0.78 20.106 0.39 20.083 0 20.037 C 2.18 21.437 4.772 22.251 7.549 22.251 C 16.589 22.251 21.556 14.749 21.556 8.244 C 21.556 8.026 21.556 7.819 21.545 7.601 C 22.509 6.913 23.335 6.041 24 5.043 Z " } }) : e._e()], 1)];
  } }], null, !1, 81021347) })], 1)]), r("ColorArea", { staticClass: "md:top-20 top-12 bottom-0 w-full inset-x-0 mx-auto overflow-y-scroll overscroll-contain z-50", class: { fixed: e.isMenuVisible, hidden: !e.isMenuVisible }, attrs: { backgroundColor: "000", kind: "dropdown-menu-content-kind" } }, [r("div", { staticClass: "flex md:flex-row flex-col md:px-10 px-5 md:pb-10 pb-5" }, [r("div", { staticClass: "menu-column-left" }, [r("SearchElement", { staticClass: "my-8 w-full grid justify-items-stretch" }, [r("ColorArea", { staticClass: "flex flex-row w-full justify-between items-center hover:opacity-75 rounded-sm py-4 pl-5 pr-5", attrs: { backgroundColor: "ffffff66", kind: "search-box-kind" } }, [r("div", { staticClass: "text-white text-sm" }, [e._v("Search")]), r("div", { staticClass: "h-full w-4 ml-4 flex items-center justify-center" }, [r("svg", { staticClass: "text-white", staticStyle: { width: "24px", height: "24px" }, attrs: { viewBox: "0 0 24 24" } }, [r("path", { attrs: { d: "M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z", fill: "currentColor" } })])])])], 1), r("Site", { staticClass: "-ml-2.5 flex", scopedSlots: e._u([{ key: "default", fn: function({ site: a }) {
    return [r("ul", { staticClass: "flex flex-row flex-wrap my-4" }, [a.facebook ? r("LiSocialIcon", { staticClass: "h-10", attrs: { url: a.facebook, svgPath: " M 12 0.048 C 5.4 0.048 0 5.436 0 12.072 C 0 18.072 4.392 23.052 10.128 23.952 L 10.128 15.552 L 7.08 15.552 L 7.08 12.072 L 10.128 12.072 L 10.128 9.42 C 10.128 6.408 11.916 4.752 14.664 4.752 C 15.972 4.752 17.34 4.98 17.34 4.98 L 17.34 7.944 L 15.828 7.944 C 14.34 7.944 13.872 8.868 13.872 9.816 L 13.872 12.072 L 17.208 12.072 L 16.668 15.552 L 13.872 15.552 L 13.872 23.952 C 19.714 23.029 24.013 17.987 24 12.072 C 24 5.436 18.6 0.048 12 0.048 Z " } }) : e._e(), a.twitter ? r("LiSocialIcon", { staticClass: "h-10", attrs: { url: a.twitter, svgPath: " M 24 5.043 C 23.117 5.445 22.164 5.708 21.178 5.835 C 22.187 5.227 22.967 4.263 23.335 3.104 C 22.382 3.678 21.327 4.079 20.214 4.309 C 19.308 3.322 18.034 2.749 16.589 2.749 C 13.893 2.749 11.69 4.951 11.69 7.67 C 11.69 8.06 11.736 8.439 11.816 8.794 C 7.732 8.588 4.096 6.626 1.675 3.655 C 1.25 4.378 1.01 5.227 1.01 6.121 C 1.01 7.831 1.87 9.345 3.201 10.206 C 2.386 10.206 1.629 9.976 0.964 9.632 C 0.964 9.632 0.964 9.632 0.964 9.666 C 0.964 12.053 2.662 14.049 4.91 14.496 C 4.497 14.611 4.061 14.668 3.614 14.668 C 3.304 14.668 2.994 14.634 2.696 14.576 C 3.315 16.515 5.117 17.961 7.285 17.995 C 5.61 19.326 3.488 20.106 1.17 20.106 C 0.78 20.106 0.39 20.083 0 20.037 C 2.18 21.437 4.772 22.251 7.549 22.251 C 16.589 22.251 21.556 14.749 21.556 8.244 C 21.556 8.026 21.556 7.819 21.545 7.601 C 22.509 6.913 23.335 6.041 24 5.043 Z " } }) : e._e()], 1)];
  } }]) })], 1), r("div", [r("DeskList", { scopedSlots: e._u([{ key: "default", fn: function({ desks: a }) {
    return [r("ul", { staticClass: "flex w-full flex-wrap my-4 p-0 divide-y divide-white divide-opacity-20" }, e._l(a, function(o, u) {
      return r("li", { key: u, staticClass: "flex menu-secondary-desk-links-custom flex-grow" }, [r("LinkElement", { staticClass: "inline-block h-full w-full", staticStyle: { padding: "15px 0" }, attrs: { href: o.url } }, [r("TextElement", { attrs: { component: "div", kind: "nav-link-menu", blockType: "Nav Link Menu", "font-size": { xs: 16, md: 20 }, color: "FFFFFF", "font-family": "Standard", bold: "", hoverColor: "ffffffa3" } }, [e._v(e._s(o.name))])], 1)], 1);
    }), 0)];
  } }]) })], 1)]), r("footer", { staticClass: "my-0 inset-x-0 mx-auto w-full md:py-20 md:px-10 py-10 px-5 border-t border-white border-opacity-20 border-solid" }, [r("LinkElement", { staticClass: "md:my-0 md:mx-auto flex items-center h-full w-56 hover:opacity-75", attrs: { href: "/" } }, [r("Logo")], 1), r("PageList", { scopedSlots: e._u([{ key: "default", fn: function({ pages: a }) {
    return [r("nav", { staticClass: "mt-10" }, [r("ul", { staticClass: "flex md:flex-row md:justify-center md:items-center flex-col flex-wrap justify-start" }, e._l(a, function(o, u) {
      return r("LiMenuFooter", { key: u, attrs: { index: u, text: o.name, url: o.url } });
    }), 1)])];
  } }]) }), r("div", { staticClass: "mt-10" }, [r("Site", { scopedSlots: e._u([{ key: "default", fn: function({ site: a }) {
    return [r("TextInput", { staticClass: "w-full", attrs: { component: "p", kind: "menu-footer-copyright", blockType: "Menu Footer Copyright", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono", lineHeight: 1.3, align: { xs: "left", md: "center" }, defaultValue: e.getCopyrightCaption(a.name) } })];
  } }]) })], 1)], 1)])], 1);
}, v7 = [], _7 = /* @__PURE__ */ Be(
  p7,
  g7,
  v7,
  !1,
  null,
  null,
  null,
  null
);
const m7 = _7.exports, b7 = {
  components: {
    Article: dh,
    DeskSection: hh,
    TextElement: Vr,
    LinkElement: Kr,
    HeroBlock: Jb,
    NavBar: m7,
    SpacingProvider: Qb,
    ColorArea: fh
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  methods: {
    getFormattedDate(n) {
      const e = n.getFullYear().toString().slice(2);
      return `${n.getDate()}.${n.getMonth()}.${e}`;
    }
  }
};
var y7 = function() {
  var e = this, r = e._self._c;
  return r("HeroBlock", { attrs: { block: e.block, backgroundColor: "000" } }, [r("NavBar", { staticClass: "z-20" }), r("div", { staticClass: "md:h-20 h-12" }), r("DeskSection", { attrs: { order: 0 }, scopedSlots: e._u([{ key: "default", fn: function({ desk: a }) {
    return [r("Article", { staticClass: "mb-14 lg:flex-row inset-x-0 flex flex-col w-full mx-auto my-0", scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("div", { staticClass: "lg:order-2 border-opacity-20 lg:flex-1 md:px-10 flex flex-col justify-center px-5 py-10 border-t border-white border-solid" }, [r("TextElement", { attrs: { component: "p", kind: "desk-title", blockType: "Desk Title", color: "fff", "font-size": { xs: 13, md: 16 }, underline: "", "font-family": "Standard" } }, [e._v(e._s(a))]), r("LinkElement", { attrs: { href: o.url } }, [r("TextElement", { staticClass: "pt-1.5", attrs: { component: "h2", kind: "article-title", blockType: "Article Title", color: "fff", hoverColor: "ffffffa3", lineHeight: 1.3, "font-family": "Standard", bold: "", "font-size": { xs: 32 } } }, [e._v(e._s(o.title))])], 1), r("TextElement", { staticClass: "pt-2.5", attrs: { component: "p", kind: "article-blurb", blockType: "Article Blurb", color: "fff", "font-size": { xs: 16 }, "font-family": "Standard", lineHeight: 1.7 } }, [e._v(e._s(o.blurb))]), r("ul", { staticClass: "flex flex-row items-center justify-start pt-3" }, e._l(o.authors, function(u, c) {
        return r("li", { key: c, staticClass: "flex" }, [r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author", blockType: "Article Author", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(e._s(u.name))]), c < o.authors.length - 1 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-seperator", blockType: "Article Author Seperator", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(", ")]) : e._e()], 1);
      }), 0), r("TextElement", { staticClass: "pt-2.5", attrs: { component: "p", kind: "article-time", blockType: "Article Time", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(e._s(e.getFormattedDate(o.time)))])], 1), r("ColorArea", { staticClass: "lg:order-1 lg:w-2/3 lg:m-0 md:mx-10 md:-mt-10 lg:top-0 md:top-10 top-5 lg:static relative z-10 mx-5 -mt-5", attrs: { backgroundColor: "1F2937", kind: "main-article-image-sizer-kind" } }, [r("LinkElement", { staticClass: "relative block w-full h-full", attrs: { href: o.url } }, [r("div", { staticClass: "image-placeholder" }, [r("div", { staticClass: "absolute inset-0 flex justify-center w-full h-full" }, [r("img", { staticClass: "object-cover w-auto h-full", attrs: { src: o.headline } })])])])], 1)];
    } }], null, !0) })];
  } }]) }), r("SpacingProvider", { attrs: { width: { xs: "100%", md: "calc(100% - 80px)" } } })], 1);
}, w7 = [], x7 = /* @__PURE__ */ Be(
  b7,
  y7,
  w7,
  !1,
  null,
  null,
  null,
  null
);
const C7 = x7.exports, S7 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20595%20106'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill-rule='nonzero'%20fill='none'%3e%3cpath%20d='M27.458%205.802c-2.827%2017.336%205.494%2030.64%2024.964%2039.912C71.46%2054.78%2079.85%2069.176%2077.592%2088.902l-.17%201.353h-26.05c.85-6.508-.11-11.112-2.882-13.813C38.208%2066.424%2028.072%2066.2%2017.707%2055.096%204.454%2040.897-1.08%2025.016%201.108%207.453l.228-1.651h26.122z'%20fill='%23FF4C4C'%20/%3e%3cpath%20d='M23.256%209.302c-.438%206.068.537%2011.695%202.887%2016.888%202.819%206.227%207.642%2011.853%2014.561%2016.808l.904.703.474.39.92.801.388.356c.263.246.531.507.791.77l.408.423c1.476%201.57%202.924%203.468%203%205.266.162%203.858-.068%206.99-.77%209.385-.481%201.636-1.135%202.9-2.239%203.552-1.102.651-2.522.612-4.182.241-2.431-.543-5.279-1.858-8.57-3.867-5.174-3.042-9.079-5.942-11.724-8.776C8.124%2039.407%202.853%2025.106%204.417%209.302z'%20stroke='%23FF4C4C'%20stroke-width='2'%20fill='%232E53C2'%20/%3e%3cpath%20fill='%23FFB500'%20d='M79.193%204.445v31.55h-31.55V4.445z'%20/%3e%3cpath%20d='M370.979%2021.815c16.28%200%2027.94%2012.43%2027.94%2029.92%200%2017.71-11.11%2030.14-27.28%2030.14-11.826%200-17.552-6.955-19.501-10.523l-.08-.147h-.66v34.54h-8.69v-82.5h8.36v9.02h.66c1.43-2.09%206.82-10.45%2019.25-10.45zm-234.067%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-16.06-34.21-3.85-34.21-26.51%200-9.68%208.69-15.95%2020.68-15.95zm99.149%200c17.27%200%2029.81%2012.87%2029.81%2030.03%200%2017.16-12.76%2030.03-29.92%2030.03-17.16%200-29.81-12.65-29.81-30.03%200-17.27%2012.87-30.03%2029.92-30.03zm229.337%200c17.097%200%2026.97%2011.86%2027.167%2028.747l.003.513v3.19h-45.98c.11%2012.76%207.59%2019.91%2019.47%2019.91%207.908%200%2015.176-4.481%2017.18-12.182l.09-.358%208.47%201.98c-3.19%2010.67-12.65%2018.26-25.85%2018.26-17.38%200-28.27-12.21-28.27-29.81%200-18.26%2012.54-30.25%2027.72-30.25zm55.24%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-7.182-6.843-8.71-14.408-10.232l-.65-.13-1.022-.207-.29-.059-.58-.12-.58-.121c-.29-.062-.58-.125-.869-.189l-.578-.13c-7.885-1.808-15.234-4.82-15.234-15.322%200-9.68%208.69-15.95%2020.68-15.95zm51.718%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-16.06-34.21-3.85-34.21-26.51%200-9.68%208.69-15.95%2020.68-15.95zM183.461%206.635v16.61h17.6v7.37h-17.6v33.44c0%206.16%202.53%208.8%208.58%208.8h8.25v7.59h-8.14c-10.45%200-17.38-4.73-17.38-16.28v-33.55h-10.78v-7.37h11.33V6.635h8.14zM303.4%2021.815v8.69h-5.17c-10.45%200-14.74%208.47-14.74%2019.36v30.58h-8.69v-57.2h8.58v9.57h.66c1.65-4.84%207.26-11%2015.62-11h3.74zm24%201.43v57.2h-8.69v-49.83h-10.78v-7.37h19.47zm109.048-1.43v8.69h-5.17c-10.45%200-14.74%208.47-14.74%2019.36v30.58h-8.69v-57.2h8.58v9.57h.66c1.65-4.84%207.26-11%2015.62-11h3.74zM215.765%2046.421c-3.331%2012.432%202.671%2023.606%2014.465%2026.766%2011.9%203.189%2022.714-3.593%2026.017-15.918%203.274-12.22-2.672-23.606-14.572-26.795-11.9-3.189-22.665%203.835-25.91%2015.947zm136.393%201.935c-2.445%2013.866%204.808%2023.41%2015.424%2025.282%2011.05%201.949%2020.651-5.63%2022.924-18.52%202.33-13.217-4.63-23.156-15.462-25.066-11.7-2.063-20.804%206.496-22.886%2018.304zm96.143-3.137-.058.367%2036.71%203.211c.487-11.882-7.233-18.3-16.657-19.124-9.208-.806-18.246%205.093-19.995%2015.546zM322.999.255c3.74%200%206.38%202.75%206.38%206.27%200%203.63-2.64%206.38-6.38%206.38-3.63%200-6.27-2.75-6.27-6.38%200-3.52%202.64-6.27%206.27-6.27z'%20fill='%23000'%20/%3e%3c/g%3e%3c/svg%3e", T7 = {
  desks: [
    "Positive News",
    "Latest",
    "Trending",
    "World",
    "Local",
    "Environment",
    "Mental Health",
    "Spiritual",
    "Peace"
  ],
  logo: S7,
  articles: {
    "Positive News": [
      {
        title: "Man Found Having Tea Party With Monkey Again.",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus.",
        desk: "Positive News",
        headline: "https://picsum.photos/1226/688",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        deskUrl: "#",
        authors: [
          { name: "John Doe", url: "https://example.com" },
          { name: "Mitchell Senior", url: "https://example.com" }
        ]
      }
    ]
  },
  article: {
    title: "Lorem ipsum dolor sit amet",
    blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
    headline: "https://via.placeholder.com/800x600",
    headlineCaption: "This is caption",
    url: "https://example.com",
    desk: "Positive News",
    time: /* @__PURE__ */ new Date(),
    authors: [
      { name: "Mitchell Senior", url: "https://example.com" },
      { name: "Mitchell Senior 2", url: "https://example.com" }
    ]
  },
  pages: ["About", "Careers", "Partner", "Privacy Policy", "Terms of Use"],
  site: {
    name: "SiteName",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com"
  }
}, k7 = qt({
  setup() {
    return Io("providedData", T7), () => No(C7, { props: { block: { id: "hero" } } });
  }
}), A7 = {
  components: {
    Article: t2,
    Block: n2,
    DeskSection: r2,
    TextElement: i2,
    LinkElement: a2
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  methods: {
    getDate(n) {
      const e = (n.time.getMonth() + 1).toString().padStart(2, "0"), r = n.time.getDate().toString().padStart(2, "0");
      return e + "." + r;
    }
  }
};
var E7 = function() {
  var e = this, r = e._self._c;
  return r("Block", { staticClass: "test border-t border-black", attrs: { block: e.block } }, [r("DeskSection", { staticClass: "md:w-11/12 mx-auto mt-16", attrs: { order: 0 } }, [r("Article", { staticClass: "lg:flex-row md:flex-row-reverse flex flex-col-reverse justify-between", scopedSlots: e._u([{ key: "default", fn: function({ article: a }) {
    return [r("div", { staticClass: "md:border-solid md:border-t md:border-b lg:py-20 md:pt-16 lg:items-center md:items-end lg:ml-0 md:ml-4 featuredContainer flex ml-8" }, [r("div", { staticClass: "lg:w-8/12 flex flex-col w-11/12" }, [r("TextElement", { staticClass: "md:mt-0 hover:text-red-500 transition-color mt-8 duration-200", attrs: { component: "h2", kind: "featured-article-title", blockType: "Featured Article Title", fontSize: { lg: 42, md: 31, xs: 31 }, fontFamily: "Charis SIL", color: "191919", hoverColor: "FF0000", lineHeight: 1.2 } }, [r("LinkElement", { staticClass: "title", attrs: { href: a.url } }, [e._v(e._s(a.title))])], 1), r("div", { staticClass: "lg:mt-12 md:mx-0 flex items-center mx-16 mt-8" }, [r("TextElement", { staticClass: "mr-8", attrs: { component: "p", kind: "featured-article-date", blockType: "Featured Article Date", fontSize: { lg: 22, md: 17, xs: 17 }, fontFamily: "Poppins", color: "b3b3b3" } }, [e._v(" " + e._s(e.getDate(a)) + " ")]), r("ul", { staticClass: "block" }, e._l(a.authors, function(o, u) {
      return r("TextElement", { key: u, staticClass: "inline", attrs: { component: "li", kind: "featured-article-auther", blockType: "Featured Article Auther", fontSize: { lg: 22, md: 17, xs: 17 }, fontFamily: "Poppins", color: "191919" } }, [r("LinkElement", { staticClass: "hover:no-underline mr-1 underline transition-all duration-200 cursor-pointer", attrs: { href: o.url } }, [e._v(" " + e._s(o.name) + " ")]), u != a.authors.length - 1 ? r("span", [e._v("/")]) : e._e()], 1);
    }), 1)], 1), r("TextElement", { staticClass: "lg:mt-12 mt-8", attrs: { component: "p", kind: "featured-article-blurb", blockType: "Featured Article Blurb", fontSize: { lg: 22, md: 17, xs: 17 }, fontFamily: "Poppins", color: "191919" } }, [e._v(" " + e._s(a.blurb) + " ")])], 1)]), r("div", { staticClass: "featuredImage featuredContainer", style: "background: url(" + a.headline + ") no-repeat; background-size: cover; background-position: center center;" })];
  } }]) })], 1), r("DeskSection", { staticClass: "w-11/12 mx-auto my-16", attrs: { order: 1 } }, [r("div", { staticClass: "lg:flex-row flex flex-col w-full" }, [r("div", { staticClass: "md:flex-row lg:w-1/2 lg:mb-0 md:mb-16 flex flex-col" }, [r("Article", { staticClass: "md:flex-col md:w-1/2 md:border-solid md:border-r flex flex-col-reverse justify-between px-4", scopedSlots: e._u([{ key: "default", fn: function({ article: a }) {
    return [r("div", { staticClass: "md:my-0 mt-8 mb-16" }, [r("TextElement", { staticClass: "transition-color w-11/12 duration-200", attrs: { component: "h3", kind: "latest-article-title", blockType: "Latest Article Title", fontSize: 23, fontFamily: "Charis SIL", color: "191919", hoverColor: "FF0000", lineHeight: 1.2 } }, [r("LinkElement", { staticClass: "title", attrs: { href: a.url } }, [e._v(e._s(a.title))])], 1), r("div", { staticClass: "md:ml-0 flex mt-8 ml-16" }, [r("TextElement", { staticClass: "mr-8", attrs: { component: "p", kind: "latest-article-time", blockType: "Latest Article Time", fontSize: 17, fontFamily: "Poppins", color: "b3b3b3" } }, [e._v(" " + e._s(e.getDate(a)) + " ")]), r("ul", { staticClass: "block" }, e._l(a.authors, function(o, u) {
      return r("TextElement", { key: u, staticClass: "inline", attrs: { component: "li", kind: "latest-article-auther", blockType: "Latest Article Auther", fontSize: 17, fontFamily: "Poppins" } }, [r("LinkElement", { staticClass: "hover:no-underline mr-1 underline transition-all duration-200 cursor-pointer", attrs: { href: o.url } }, [e._v(" " + e._s(o.name) + " ")]), u != a.authors.length - 1 ? r("span", [e._v("/")]) : e._e()], 1);
    }), 1)], 1), r("TextElement", { staticClass: "mt-8", attrs: { component: "p", kind: "latest-article-blurb", blockType: "Latest Article Blurb", fontSize: 17, fontFamily: "Poppins", color: "191919" } }, [e._v(" " + e._s(a.blurb) + " ")])], 1), r("img", { staticClass: "md:mt-8 md:w-full w-10/12 mx-auto", attrs: { src: a.headline } })];
  } }]) }), r("Article", { staticClass: "md:flex-col md:w-1/2 lg:border-solid lg:border-r flex flex-col-reverse justify-between px-4", scopedSlots: e._u([{ key: "default", fn: function({ article: a }) {
    return [r("div", { staticClass: "md:my-0 mt-8 mb-16" }, [r("TextElement", { staticClass: "transition-color w-11/12 leading-tight duration-200", attrs: { component: "h3", kind: "latest-article-title", blockType: "Latest Article Title" } }, [r("LinkElement", { staticClass: "title", attrs: { href: a.url } }, [e._v(e._s(a.title))])], 1), r("div", { staticClass: "md:ml-0 flex mt-8 ml-16" }, [r("TextElement", { staticClass: "mr-8", attrs: { component: "p", kind: "latest-article-time", blockType: "Latest Article Time" } }, [e._v(" " + e._s(e.getDate(a)) + " ")]), r("ul", { staticClass: "block" }, e._l(a.authors, function(o, u) {
      return r("TextElement", { key: u, staticClass: "inline", attrs: { component: "li", kind: "latest-article-auther", blockType: "Latest Article Auther" } }, [r("LinkElement", { staticClass: "hover:no-underline mr-1 underline transition-all duration-200 cursor-pointer", attrs: { href: o.url } }, [e._v(" " + e._s(o.name) + " ")]), u != a.authors.length - 1 ? r("span", [e._v("/")]) : e._e()], 1);
    }), 1)], 1), r("TextElement", { staticClass: "mt-8", attrs: { component: "p", kind: "latest-article-blurb", blockType: "Latest Article Blurb" } }, [e._v(" " + e._s(a.blurb) + " ")])], 1), r("img", { staticClass: "md:mt-8 md:w-full w-10/12 mx-auto", attrs: { src: a.headline } })];
  } }]) })], 1), r("div", { staticClass: "md:flex-row lg:w-1/2 lg:mb-0 md:mb-16 flex flex-col" }, [r("Article", { staticClass: "md:flex-col md:w-1/2 md:border-solid md:border-r flex flex-col-reverse justify-between px-4", scopedSlots: e._u([{ key: "default", fn: function({ article: a }) {
    return [r("div", { staticClass: "md:my-0 mt-8 mb-16" }, [r("TextElement", { staticClass: "transition-color w-11/12 leading-tight duration-200", attrs: { component: "h3", kind: "latest-article-title", blockType: "Latest Article Title" } }, [r("a", { staticClass: "title", attrs: { href: a.url } }, [e._v(e._s(a.title))])]), r("div", { staticClass: "md:ml-0 flex mt-8 ml-16" }, [r("TextElement", { staticClass: "mr-8", attrs: { component: "p", kind: "latest-article-time", blockType: "Latest Article Time" } }, [e._v(" " + e._s(e.getDate(a)) + " ")]), r("ul", { staticClass: "block" }, e._l(a.authors, function(o, u) {
      return r("TextElement", { key: u, staticClass: "inline", attrs: { component: "li", kind: "latest-article-auther", blockType: "Latest Article Auther" } }, [r("LinkElement", { staticClass: "hover:no-underline mr-1 underline transition-all duration-200 cursor-pointer", attrs: { href: o.url } }, [e._v(" " + e._s(o.name) + " ")]), u != a.authors.length - 1 ? r("span", [e._v("/")]) : e._e()], 1);
    }), 1)], 1), r("TextElement", { staticClass: "mt-8", attrs: { component: "p", kind: "latest-article-blurb", blockType: "Latest Article Blurb" } }, [e._v(" " + e._s(a.blurb) + " ")])], 1), r("img", { staticClass: "md:mt-8 md:w-full w-10/12 mx-auto", attrs: { src: a.headline } })];
  } }]) }), r("Article", { staticClass: "md:flex-col md:w-1/2 lg:border-solid lg:border-r flex flex-col-reverse justify-between px-4", scopedSlots: e._u([{ key: "default", fn: function({ article: a }) {
    return [r("div", { staticClass: "md:my-0 mt-8 mb-16" }, [r("TextElement", { staticClass: "transition-color w-11/12 leading-tight duration-200", attrs: { component: "h3", kind: "latest-article-title", blockType: "Latest Article Title" } }, [r("a", { staticClass: "title", attrs: { href: a.url } }, [e._v(e._s(a.title))])]), r("div", { staticClass: "md:ml-0 flex mt-8 ml-16" }, [r("TextElement", { staticClass: "mr-8", attrs: { component: "p", kind: "latest-article-time", blockType: "Latest Article Time" } }, [e._v(" " + e._s(e.getDate(a)) + " ")]), r("ul", { staticClass: "block" }, e._l(a.authors, function(o, u) {
      return r("TextElement", { key: u, staticClass: "inline", attrs: { component: "li", kind: "latest-article-auther", blockType: "Latest Article Auther" } }, [r("LinkElement", { staticClass: "hover:no-underline mr-1 underline transition-all duration-200 cursor-pointer", attrs: { href: o.url } }, [e._v(" " + e._s(o.name) + " ")]), u != a.authors.length - 1 ? r("span", [e._v("/")]) : e._e()], 1);
    }), 1)], 1), r("TextElement", { staticClass: "mt-8", attrs: { component: "p", kind: "latest-article-blurb", blockType: "Latest Article Blurb" } }, [e._v(" " + e._s(a.blurb) + " ")])], 1), r("img", { staticClass: "md:mt-8 md:w-full w-10/12 mx-auto", attrs: { src: a.headline } })];
  } }]) })], 1)])])], 1);
}, O7 = [], $7 = /* @__PURE__ */ Be(
  A7,
  E7,
  O7,
  !1,
  null,
  "a7263717",
  null,
  null
);
const P7 = $7.exports, R7 = {
  desks: ["Featured", "Latest"],
  articles: {
    Featured: [
      {
        title: "Man Found Having Tea Party With Koala Again.",
        blurb: "Lorem ipsum dolor sit amet, consectetur",
        headline: "https://picsum.photos/id/1/700/500",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date("October 13, 2014 11:13:00"),
        authors: [
          { name: "Rakshit Arora", url: "#" },
          { name: "Sam Smith", url: "#" }
        ]
      }
    ],
    Latest: [
      {
        title: "Local Man Wins Sprout Growing Contest For the Third Time",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. ",
        headline: "https://picsum.photos/id/2/700/500",
        url: "#",
        time: /* @__PURE__ */ new Date("December 25, 2014 02:15:00"),
        authors: [{ name: "John Doe", url: "#" }]
      },
      {
        title: "Australia Voted Nicest Place to Live in the World",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis, finibus venenatis erat imperdiet. Praesent fringilla sit amet nulla et facilisis.",
        headline: "https://picsum.photos/id/912/700/500",
        url: "#",
        time: /* @__PURE__ */ new Date("January 28, 2014 08:13:00"),
        authors: [
          { name: "Ankit Yadav", url: "#" },
          { name: "Harsh Vardhan", url: "#" },
          { name: "Jane Doe", url: "#" }
        ]
      },
      {
        title: "Local man Set to Fly Out and Help With Earthquake Relief Effort",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam",
        headline: "https://picsum.photos/id/432/700/500",
        url: "#",
        time: /* @__PURE__ */ new Date("April 14, 2014 12:02:00"),
        authors: [{ name: "Arthur Jones", url: "#" }]
      },
      {
        title: "Viral Photo of Koala Had Been Photoshopped",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis",
        headline: "https://picsum.photos/id/131/700/500",
        url: "#",
        time: /* @__PURE__ */ new Date("October 13, 2014 01:13:00"),
        authors: [
          { name: "Steve Brown", url: "#" },
          { name: "Sam Smith", url: "#" }
        ]
      }
    ]
  }
}, F7 = qt({
  setup() {
    return Io("providedData", R7), () => No(P7, { props: { block: { id: "block1" } } });
  }
});
function Et(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var e = Number(n);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function Xe(n, e) {
  if (e.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function Gt(n) {
  Xe(1, arguments);
  var e = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && e === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || e === "[object Number]" ? new Date(n) : ((typeof n == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function L7(n, e) {
  Xe(2, arguments);
  var r = Gt(n).getTime(), a = Et(e);
  return new Date(r + a);
}
function D7(n) {
  var e = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return e.setUTCFullYear(n.getFullYear()), n.getTime() - e.getTime();
}
function M7(n) {
  return Xe(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function I7(n) {
  if (Xe(1, arguments), !M7(n) && typeof n != "number")
    return !1;
  var e = Gt(n);
  return !isNaN(Number(e));
}
var N7 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, B7 = function(n, e, r) {
  var a, o = N7[n];
  return typeof o == "string" ? a = o : e === 1 ? a = o.one : a = o.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const W7 = B7;
function mo(n) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.width ? String(e.width) : n.defaultWidth, a = n.formats[r] || n.formats[n.defaultWidth];
    return a;
  };
}
var z7 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, U7 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, H7 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, j7 = {
  date: mo({
    formats: z7,
    defaultWidth: "full"
  }),
  time: mo({
    formats: U7,
    defaultWidth: "full"
  }),
  dateTime: mo({
    formats: H7,
    defaultWidth: "full"
  })
};
const q7 = j7;
var G7 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Y7 = function(n, e, r, a) {
  return G7[n];
};
const X7 = Y7;
function Mr(n) {
  return function(e, r) {
    var a = r || {}, o = a.context ? String(a.context) : "standalone", u;
    if (o === "formatting" && n.formattingValues) {
      var c = n.defaultFormattingWidth || n.defaultWidth, h = a.width ? String(a.width) : c;
      u = n.formattingValues[h] || n.formattingValues[c];
    } else {
      var m = n.defaultWidth, b = a.width ? String(a.width) : n.defaultWidth;
      u = n.values[b] || n.values[m];
    }
    var T = n.argumentCallback ? n.argumentCallback(e) : e;
    return u[T];
  };
}
var K7 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, V7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Z7 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, J7 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Q7 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, eS = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, tS = function(n, e) {
  var r = Number(n), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, nS = {
  ordinalNumber: tS,
  era: Mr({
    values: K7,
    defaultWidth: "wide"
  }),
  quarter: Mr({
    values: V7,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Mr({
    values: Z7,
    defaultWidth: "wide"
  }),
  day: Mr({
    values: J7,
    defaultWidth: "wide"
  }),
  dayPeriod: Mr({
    values: Q7,
    defaultWidth: "wide",
    formattingValues: eS,
    defaultFormattingWidth: "wide"
  })
};
const rS = nS;
function Ir(n) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, o = a && n.matchPatterns[a] || n.matchPatterns[n.defaultMatchWidth], u = e.match(o);
    if (!u)
      return null;
    var c = u[0], h = a && n.parsePatterns[a] || n.parsePatterns[n.defaultParseWidth], m = Array.isArray(h) ? aS(h, function(O) {
      return O.test(c);
    }) : iS(h, function(O) {
      return O.test(c);
    }), b;
    b = n.valueCallback ? n.valueCallback(m) : m, b = r.valueCallback ? r.valueCallback(b) : b;
    var T = e.slice(c.length);
    return {
      value: b,
      rest: T
    };
  };
}
function iS(n, e) {
  for (var r in n)
    if (n.hasOwnProperty(r) && e(n[r]))
      return r;
}
function aS(n, e) {
  for (var r = 0; r < n.length; r++)
    if (e(n[r]))
      return r;
}
function sS(n) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.match(n.matchPattern);
    if (!a)
      return null;
    var o = a[0], u = e.match(n.parsePattern);
    if (!u)
      return null;
    var c = n.valueCallback ? n.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var h = e.slice(o.length);
    return {
      value: c,
      rest: h
    };
  };
}
var oS = /^(\d+)(th|st|nd|rd)?/i, uS = /\d+/i, lS = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, cS = {
  any: [/^b/i, /^(a|c)/i]
}, fS = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hS = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pS = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, gS = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, vS = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _S = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mS = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, bS = {
  ordinalNumber: sS({
    matchPattern: oS,
    parsePattern: uS,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: Ir({
    matchPatterns: lS,
    defaultMatchWidth: "wide",
    parsePatterns: cS,
    defaultParseWidth: "any"
  }),
  quarter: Ir({
    matchPatterns: fS,
    defaultMatchWidth: "wide",
    parsePatterns: dS,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: Ir({
    matchPatterns: hS,
    defaultMatchWidth: "wide",
    parsePatterns: pS,
    defaultParseWidth: "any"
  }),
  day: Ir({
    matchPatterns: gS,
    defaultMatchWidth: "wide",
    parsePatterns: vS,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ir({
    matchPatterns: _S,
    defaultMatchWidth: "any",
    parsePatterns: mS,
    defaultParseWidth: "any"
  })
};
const yS = bS;
var wS = {
  code: "en-US",
  formatDistance: W7,
  formatLong: q7,
  formatRelative: X7,
  localize: rS,
  match: yS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const xS = wS;
function CS(n, e) {
  Xe(2, arguments);
  var r = Et(e);
  return L7(n, -r);
}
function he(n, e) {
  for (var r = n < 0 ? "-" : "", a = Math.abs(n).toString(); a.length < e; )
    a = "0" + a;
  return r + a;
}
var SS = {
  // Year
  y: function(n, e) {
    var r = n.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return he(e === "yy" ? a % 100 : a, e.length);
  },
  // Month
  M: function(n, e) {
    var r = n.getUTCMonth();
    return e === "M" ? String(r + 1) : he(r + 1, 2);
  },
  // Day of the month
  d: function(n, e) {
    return he(n.getUTCDate(), e.length);
  },
  // AM or PM
  a: function(n, e) {
    var r = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(n, e) {
    return he(n.getUTCHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H: function(n, e) {
    return he(n.getUTCHours(), e.length);
  },
  // Minute
  m: function(n, e) {
    return he(n.getUTCMinutes(), e.length);
  },
  // Second
  s: function(n, e) {
    return he(n.getUTCSeconds(), e.length);
  },
  // Fraction of second
  S: function(n, e) {
    var r = e.length, a = n.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return he(o, e.length);
  }
};
const yn = SS;
var TS = 864e5;
function kS(n) {
  Xe(1, arguments);
  var e = Gt(n), r = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var a = e.getTime(), o = r - a;
  return Math.floor(o / TS) + 1;
}
function la(n) {
  Xe(1, arguments);
  var e = 1, r = Gt(n), a = r.getUTCDay(), o = (a < e ? 7 : 0) + a - e;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function ap(n) {
  Xe(1, arguments);
  var e = Gt(n), r = e.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var o = la(a), u = /* @__PURE__ */ new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = la(u);
  return e.getTime() >= o.getTime() ? r + 1 : e.getTime() >= c.getTime() ? r : r - 1;
}
function AS(n) {
  Xe(1, arguments);
  var e = ap(n), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = la(r);
  return a;
}
var ES = 6048e5;
function OS(n) {
  Xe(1, arguments);
  var e = Gt(n), r = la(e).getTime() - AS(e).getTime();
  return Math.round(r / ES) + 1;
}
function ca(n, e) {
  Xe(1, arguments);
  var r = e || {}, a = r.locale, o = a && a.options && a.options.weekStartsOn, u = o == null ? 0 : Et(o), c = r.weekStartsOn == null ? u : Et(r.weekStartsOn);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = Gt(n), m = h.getUTCDay(), b = (m < c ? 7 : 0) + m - c;
  return h.setUTCDate(h.getUTCDate() - b), h.setUTCHours(0, 0, 0, 0), h;
}
function sp(n, e) {
  Xe(1, arguments);
  var r = Gt(n, e), a = r.getUTCFullYear(), o = e || {}, u = o.locale, c = u && u.options && u.options.firstWeekContainsDate, h = c == null ? 1 : Et(c), m = o.firstWeekContainsDate == null ? h : Et(o.firstWeekContainsDate);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(a + 1, 0, m), b.setUTCHours(0, 0, 0, 0);
  var T = ca(b, e), O = /* @__PURE__ */ new Date(0);
  O.setUTCFullYear(a, 0, m), O.setUTCHours(0, 0, 0, 0);
  var R = ca(O, e);
  return r.getTime() >= T.getTime() ? a + 1 : r.getTime() >= R.getTime() ? a : a - 1;
}
function $S(n, e) {
  Xe(1, arguments);
  var r = e || {}, a = r.locale, o = a && a.options && a.options.firstWeekContainsDate, u = o == null ? 1 : Et(o), c = r.firstWeekContainsDate == null ? u : Et(r.firstWeekContainsDate), h = sp(n, e), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(h, 0, c), m.setUTCHours(0, 0, 0, 0);
  var b = ca(m, e);
  return b;
}
var PS = 6048e5;
function RS(n, e) {
  Xe(1, arguments);
  var r = Gt(n), a = ca(r, e).getTime() - $S(r, e).getTime();
  return Math.round(a / PS) + 1;
}
var ur = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, FS = {
  // Era
  G: function(n, e, r) {
    var a = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(n, e, r) {
    if (e === "yo") {
      var a = n.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return yn.y(n, e);
  },
  // Local week-numbering year
  Y: function(n, e, r, a) {
    var o = sp(n, a), u = o > 0 ? o : 1 - o;
    if (e === "YY") {
      var c = u % 100;
      return he(c, 2);
    }
    return e === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : he(u, e.length);
  },
  // ISO week-numbering year
  R: function(n, e) {
    var r = ap(n);
    return he(r, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, e) {
    var r = n.getUTCFullYear();
    return he(r, e.length);
  },
  // Quarter
  Q: function(n, e, r) {
    var a = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(a);
      case "QQ":
        return he(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, e, r) {
    var a = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(a);
      case "qq":
        return he(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, e, r) {
    var a = n.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return yn.M(n, e);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(n, e, r) {
    var a = n.getUTCMonth();
    switch (e) {
      case "L":
        return String(a + 1);
      case "LL":
        return he(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(n, e, r, a) {
    var o = RS(n, a);
    return e === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : he(o, e.length);
  },
  // ISO week of year
  I: function(n, e, r) {
    var a = OS(n);
    return e === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : he(a, e.length);
  },
  // Day of the month
  d: function(n, e, r) {
    return e === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : yn.d(n, e);
  },
  // Day of year
  D: function(n, e, r) {
    var a = kS(n);
    return e === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : he(a, e.length);
  },
  // Day of week
  E: function(n, e, r) {
    var a = n.getUTCDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, e, r, a) {
    var o = n.getUTCDay(), u = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(u);
      case "ee":
        return he(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, e, r, a) {
    var o = n.getUTCDay(), u = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(u);
      case "cc":
        return he(u, e.length);
      case "co":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, e, r) {
    var a = n.getUTCDay(), o = a === 0 ? 7 : a;
    switch (e) {
      case "i":
        return String(o);
      case "ii":
        return he(o, e.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, e, r) {
    var a = n.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, e, r) {
    var a = n.getUTCHours(), o;
    switch (a === 12 ? o = ur.noon : a === 0 ? o = ur.midnight : o = a / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, e, r) {
    var a = n.getUTCHours(), o;
    switch (a >= 17 ? o = ur.evening : a >= 12 ? o = ur.afternoon : a >= 4 ? o = ur.morning : o = ur.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, e, r) {
    if (e === "ho") {
      var a = n.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return yn.h(n, e);
  },
  // Hour [0-23]
  H: function(n, e, r) {
    return e === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : yn.H(n, e);
  },
  // Hour [0-11]
  K: function(n, e, r) {
    var a = n.getUTCHours() % 12;
    return e === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : he(a, e.length);
  },
  // Hour [1-24]
  k: function(n, e, r) {
    var a = n.getUTCHours();
    return a === 0 && (a = 24), e === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : he(a, e.length);
  },
  // Minute
  m: function(n, e, r) {
    return e === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : yn.m(n, e);
  },
  // Second
  s: function(n, e, r) {
    return e === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : yn.s(n, e);
  },
  // Fraction of second
  S: function(n, e) {
    return yn.S(n, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, e, r, a) {
    var o = a._originalDate || n, u = o.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (e) {
      case "X":
        return sh(u);
      case "XXXX":
      case "XX":
        return In(u);
      case "XXXXX":
      case "XXX":
      default:
        return In(u, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, e, r, a) {
    var o = a._originalDate || n, u = o.getTimezoneOffset();
    switch (e) {
      case "x":
        return sh(u);
      case "xxxx":
      case "xx":
        return In(u);
      case "xxxxx":
      case "xxx":
      default:
        return In(u, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, e, r, a) {
    var o = a._originalDate || n, u = o.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ah(u, ":");
      case "OOOO":
      default:
        return "GMT" + In(u, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, e, r, a) {
    var o = a._originalDate || n, u = o.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ah(u, ":");
      case "zzzz":
      default:
        return "GMT" + In(u, ":");
    }
  },
  // Seconds timestamp
  t: function(n, e, r, a) {
    var o = a._originalDate || n, u = Math.floor(o.getTime() / 1e3);
    return he(u, e.length);
  },
  // Milliseconds timestamp
  T: function(n, e, r, a) {
    var o = a._originalDate || n, u = o.getTime();
    return he(u, e.length);
  }
};
function ah(n, e) {
  var r = n > 0 ? "-" : "+", a = Math.abs(n), o = Math.floor(a / 60), u = a % 60;
  if (u === 0)
    return r + String(o);
  var c = e || "";
  return r + String(o) + c + he(u, 2);
}
function sh(n, e) {
  if (n % 60 === 0) {
    var r = n > 0 ? "-" : "+";
    return r + he(Math.abs(n) / 60, 2);
  }
  return In(n, e);
}
function In(n, e) {
  var r = e || "", a = n > 0 ? "-" : "+", o = Math.abs(n), u = he(Math.floor(o / 60), 2), c = he(o % 60, 2);
  return a + u + r + c;
}
function oh(n, e) {
  switch (n) {
    case "P":
      return e.date({
        width: "short"
      });
    case "PP":
      return e.date({
        width: "medium"
      });
    case "PPP":
      return e.date({
        width: "long"
      });
    case "PPPP":
    default:
      return e.date({
        width: "full"
      });
  }
}
function op(n, e) {
  switch (n) {
    case "p":
      return e.time({
        width: "short"
      });
    case "pp":
      return e.time({
        width: "medium"
      });
    case "ppp":
      return e.time({
        width: "long"
      });
    case "pppp":
    default:
      return e.time({
        width: "full"
      });
  }
}
function LS(n, e) {
  var r = n.match(/(P+)(p+)?/), a = r[1], o = r[2];
  if (!o)
    return oh(n, e);
  var u;
  switch (a) {
    case "P":
      u = e.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = e.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = e.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = e.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", oh(a, e)).replace("{{time}}", op(o, e));
}
var DS = {
  p: op,
  P: LS
}, MS = ["D", "DD"], IS = ["YY", "YYYY"];
function NS(n) {
  return MS.indexOf(n) !== -1;
}
function BS(n) {
  return IS.indexOf(n) !== -1;
}
function uh(n, e, r) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
}
var WS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, US = /^'([^]*?)'?$/, HS = /''/g, jS = /[a-zA-Z]/;
function up(n, e, r) {
  Xe(2, arguments);
  var a = String(e), o = r || {}, u = o.locale || xS, c = u.options && u.options.firstWeekContainsDate, h = c == null ? 1 : Et(c), m = o.firstWeekContainsDate == null ? h : Et(o.firstWeekContainsDate);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = u.options && u.options.weekStartsOn, T = b == null ? 0 : Et(b), O = o.weekStartsOn == null ? T : Et(o.weekStartsOn);
  if (!(O >= 0 && O <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!u.localize)
    throw new RangeError("locale must contain localize property");
  if (!u.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var R = Gt(n);
  if (!I7(R))
    throw new RangeError("Invalid time value");
  var L = D7(R), $ = CS(R, L), q = {
    firstWeekContainsDate: m,
    weekStartsOn: O,
    locale: u,
    _originalDate: R
  }, G = a.match(zS).map(function(j) {
    var ne = j[0];
    if (ne === "p" || ne === "P") {
      var le = DS[ne];
      return le(j, u.formatLong, q);
    }
    return j;
  }).join("").match(WS).map(function(j) {
    if (j === "''")
      return "'";
    var ne = j[0];
    if (ne === "'")
      return qS(j);
    var le = FS[ne];
    if (le)
      return !o.useAdditionalWeekYearTokens && BS(j) && uh(j, e, n), !o.useAdditionalDayOfYearTokens && NS(j) && uh(j, e, n), le($, j, u.localize, q);
    if (ne.match(jS))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ne + "`");
    return j;
  }).join("");
  return G;
}
function qS(n) {
  return n.match(US)[1].replace(HS, "'");
}
const GS = {
  components: {
    TextElement: Vr,
    LinkElement: Kr
  },
  props: {
    article: {
      type: Object,
      required: !0
    },
    imageExpanded: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  data() {
    return {
      format: up
    };
  }
};
var YS = function() {
  var e = this, r = e._self._c;
  return r("LinkElement", { attrs: { href: e.article.url } }, [r("div", { staticClass: "md:flex md:flex-col md:items-stretch grid grid-cols-3 md:gap-0 gap-4 items-start md:mx-0 mx-6 lg:pb-0 pb-4 mb-4 lg:border-0 border-b border-solid border-gray-300" }, [r("div", { class: { "article-image-wrapper-150": e.imageExpanded, "article-image-wrapper": !e.imageExpanded } }, [r("img", { staticClass: "absolute w-full h-full object-cover object-center top-0 left-0", attrs: { src: e.article.headline } })]), r("div", { staticClass: "lg:pb-10 md:pt-4 col-span-2 flex flex-col" }, [r("TextElement", { staticClass: "tracking-wider mb-2", attrs: { kind: "article-desk-title", blockType: "Article Desk Title", component: "h4", color: "000", fontSize: 11, fontFamily: "Aileron", uppercase: "" } }, [e._v(" " + e._s(e.article.desk) + " ")]), r("LinkElement", { staticClass: "lg:mb-4 mb-2", attrs: { href: e.article.url } }, [r("TextElement", { staticClass: "hover:underline", attrs: { component: "h3", kind: "article-title", blockType: "Article Title", color: "000", fontSize: { xs: 18, md: 22 }, lineHeight: 1.2, fontFamily: "Aileron", bold: "" } }, [e._v(" " + e._s(e.article.title) + " ")])], 1), r("ul", { staticClass: "mb-0.5 flex flex-row flex-wrap justify-start items-center list-none" }, e._l(e.article.authors, function(a, o) {
    return r("li", { key: o, staticClass: "flex" }, [o === 0 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author By", color: "757776", "font-family": "Aileron", "font-size": { xs: 11 }, lineHeight: 1.2 } }, [e._v("By ")]) : e._e(), r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author" } }, [e._v(e._s(a.name))]), o < e.article.authors.length - 2 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author Seperator", color: "fff" } }, [e._v(", ")]) : o < e.article.authors.length - 1 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author Seperator", color: "fff" } }, [e._v(" and ")]) : e._e()], 1);
  }), 0), e.article.time ? r("TextElement", { staticClass: "flex w-full", attrs: { component: "time", kind: "article-time", blockType: "Article Time", color: "757776", "font-family": "Aileron", "font-size": { xs: 11 } } }, [e._v(e._s(e.format(e.article.time, "d MMMM yyyy")))]) : e._e()], 1)])]);
}, XS = [], KS = /* @__PURE__ */ Be(
  GS,
  YS,
  XS,
  !1,
  null,
  "4683db93",
  null,
  null
);
const VS = KS.exports, ZS = {
  components: {
    Article: dh,
    Block: e2,
    DeskSection: hh,
    TextElement: Vr,
    TextInput: ch,
    LinkElement: Kr,
    ArticleTile: VS
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      format: up
    };
  }
};
var JS = function() {
  var e = this, r = e._self._c;
  return r("Block", { staticClass: "mb-14", attrs: { block: e.block } }, [r("DeskSection", { attrs: { order: 0 }, scopedSlots: e._u([{ key: "default", fn: function({ desk: a }) {
    return [r("div", { staticClass: "lg:mb-12 md:mb-10 md:mx-12 flex py-4 mx-6 mb-8 border-b border-gray-300 border-solid" }, [r("TextInput", { staticClass: "flex max-w-full", attrs: { component: "h4", lineHeight: 1, kind: "desk-title", blockType: "Desk Title", fontSize: { xs: 40, md: 72 }, bold: "", uppercase: "", color: "000", defaultValue: a, fontFamily: "Aileron Black" } })], 1), r("div", { staticClass: "lg:px-12 lg:grid lg:grid-cols-2 lg:gap-x-8" }, [r("div", { staticClass: "lg:sticky lg:top-0 lg:max-h-screen lg:mb-auto" }, [r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("LinkElement", { attrs: { href: o.url } }, [r("div", { staticClass: "main-article-image-wrapper" }, [r("img", { staticClass: "absolute top-0 left-0 object-cover object-center w-full h-full", attrs: { src: o.headline } }), r("div", { staticClass: "image-overlay-custom" }), r("div", { staticClass: "absolute bottom-0 w-full h-auto px-4 pb-6 pointer-events-none" }, [r("TextElement", { staticClass: "tracking-wider py-2.5", attrs: { component: "h4", kind: "main-article-desk-title", blockType: "Main Article Desk Title", color: "fff", fontSize: 11, fontFamily: "Aileron", uppercase: "", align: "center" } }, [e._v(" " + e._s(o.desk) + " ")]), r("TextElement", { staticClass: "md:max-w-lg md:mx-auto md:mt-4 md:mb-6 mt-6 mb-4", attrs: { component: "h3", kind: "main-article-title", blockType: "Main Article Title", color: "fff", fontSize: 22, lineHeight: 1.3, fontFamily: "Aileron", align: "center", bold: "" } }, [e._v(" " + e._s(o.title) + " ")]), r("ul", { staticClass: "flex flex-row flex-wrap items-center justify-center my-4 list-none" }, e._l(o.authors, function(u, c) {
        return r("li", { key: c, staticClass: "flex" }, [c === 0 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "main-article-author-by-line", blockType: "Main Article Author By", color: "fff", "font-family": "Aileron", "font-size": { xs: 11 } } }, [e._v("By ")]) : e._e(), r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "main-article-author-by-line", blockType: "Main Article Author" } }, [e._v(e._s(u.name))]), c < o.authors.length - 2 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "main-article-author-by-line", blockType: "Main Article Author Seperator", color: "fff" } }, [e._v(", ")]) : c < o.authors.length - 1 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "main-article-author-by-line", blockType: "Main Article Author Seperator", color: "fff" } }, [e._v(" and ")]) : e._e()], 1);
      }), 0), o.time ? r("TextElement", { staticClass: "block w-full mt-4", attrs: { component: "time", kind: "main-article-time", blockType: "Main Article Time", color: "fff", "font-family": "Aileron", align: "center", "font-size": { xs: 11 } } }, [e._v(e._s(e.format(o.time, "d MMMM yyyy")))]) : e._e()], 1)])])];
    } }], null, !0) })], 1), r("div", { staticClass: "md:grid md:grid-cols-2 md:gap-x-6 lg:p-0 md:px-12 md:py-6 grid grid-cols-1 py-4" }, [r("div", [r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("ArticleTile", { attrs: { article: o, imageExpanded: !1 } })];
    } }], null, !0) }), r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("ArticleTile", { attrs: { article: o, imageExpanded: !0 } })];
    } }], null, !0) })], 1), r("div", [r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("ArticleTile", { attrs: { article: o, imageExpanded: !0 } })];
    } }], null, !0) }), r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("ArticleTile", { attrs: { article: o, imageExpanded: !1 } })];
    } }], null, !0) })], 1), r("div", [r("Article", { scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("ArticleTile", { attrs: { article: o, imageExpanded: !0 } })];
    } }], null, !0) })], 1)])])];
  } }]) })], 1);
}, QS = [], e9 = /* @__PURE__ */ Be(
  ZS,
  JS,
  QS,
  !1,
  null,
  "866ed27b",
  null,
  null
);
const t9 = e9.exports, n9 = {
  desks: ["Positive", "Global News", "Spiritual", "Attitude", "Health"],
  articles: {
    Positive: [
      {
        title: "Green Kitten Escapes From Florida Zoo",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=1",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Global News",
        authors: [
          { name: "Steven Graves", url: "https://example.com" },
          { name: "Robert Foley", url: "https://example.com" }
        ]
      },
      {
        title: "Australia Voted Nicest Place to Live in the World",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=2",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Positive",
        authors: [{ name: "Robert Foley", url: "https://example.com" }]
      },
      {
        title: "The World's Biggest Courgette Measuring Over 1m",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=3",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Spiritual",
        authors: [
          { name: "Thomas Vargas", url: "https://example.com" },
          { name: "Charles Barnett", url: "https://example.com" }
        ]
      },
      {
        title: "Facial Tattoos Banned in North Korea",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=4",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Attitude",
        authors: [{ name: "Richard French", url: "https://example.com" }]
      },
      {
        title: "Hurricane Causes Devastation",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=5",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Health",
        authors: [
          { name: "Michael Douglas", url: "https://example.com" },
          { name: "Richard French", url: "https://example.com" },
          { name: "William Kaufman", url: "https://example.com" }
        ]
      },
      {
        title: "Skirts Linked to Global Health Scare",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=6",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Positive",
        authors: [{ name: "William Kaufman", url: "https://example.com" }]
      },
      {
        title: "Man Jailed For Threatening Wife With Warped Newspaper",
        blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
        headline: "https://picsum.photos/800/600?random=7",
        headlineCaption: "This is caption",
        url: "https://example.com",
        time: /* @__PURE__ */ new Date(),
        desk: "Positive",
        authors: [
          { name: "Charles Barnett", url: "https://example.com" },
          { name: "William Kaufman", url: "https://example.com" }
        ]
      }
    ]
  },
  article: {
    title: "Green Kitten Escapes From Florida Zoo",
    blurb: "Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus",
    headline: "https://picsum.photos/800/600?random=8",
    headlineCaption: "This is caption",
    url: "https://example.com",
    desk: "Positive",
    time: /* @__PURE__ */ new Date(),
    authors: [
      { name: "Mitchell Senior", url: "https://example.com" },
      { name: "Mitchell Senior 2", url: "https://example.com" }
    ]
  }
}, r9 = qt({
  setup() {
    return Io("providedData", n9), () => No(t9, { props: { block: { id: "block2" } } });
  }
});
window.TestUtils = u5;
function bo() {
  return window.__STORE__;
}
async function i9() {
  const n = await Zh();
  return {
    paths: gy(
      n.filter(({ path: e }) => e),
      yx
    ).map(({ path: e }) => e),
    results: n
  };
}
const a9 = qt({
  name: "Inspector",
  components: { Overlay: pC, Report: MC, Watermark: h5, ElementInfo: V8, Viewport: $y, SizeObserver: n7, Hero: k7, Block1: F7, Block2: r9 },
  props: {
    enable: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: String
    },
    showOpenNew: {
      type: Boolean,
      default: !1
    },
    blockVersion: {
      type: Number,
      default: 0
    }
  },
  emits: ["open-new", "refresh"],
  setup(n, { emit: e }) {
    const r = rn(), a = rn(), o = rn([]), u = rn(""), c = rn(1250), h = rn(800), m = rn("block"), b = Cc({
      preview: !1,
      type: "block"
    }), T = Cc({
      control: !1,
      report: !1,
      testing: !1,
      screenshot: !1,
      preview: !1,
      outline: !1,
      loading: ""
    }), O = At(() => n.enable && !b.preview);
    async function R() {
      if (b.preview)
        return;
      T.loading = "Testing...", T.testing = !0, await qb();
      const $ = bo(), { paths: q, results: G } = await i9();
      $.hasErrors = q, console.log(G), o.value = G, T.report = G.length > 0, T.testing = !1, T.outline = !0, T.loading = "";
    }
    function L() {
      const $ = bo();
      $.styles = Object.freeze(zh()), $.hasErrors = [], $.selected = null, $.requestSelect = null, Object.assign(T, {
        control: !1,
        report: !1,
        testing: !1,
        screenshot: !1,
        preview: !1,
        outline: !1,
        loading: ""
      });
    }
    return Ks(O, ($) => T.control = $), Ks(
      () => T.preview,
      ($) => {
        $ ? (T.outline = !1, T.report = !1) : (bo().colors = [], e("refresh"));
      }
    ), jb(() => {
      Object.assign(b, r7());
    }), lh(() => {
      window.__BLOCK_INSPECTOR__ = {
        setTestMode($) {
          T.testing = $;
        },
        setOutline($) {
          T.outline = $;
        },
        reset: L
      }, window.addEventListener("message", ($) => {
        if (!$.data || typeof $.data != "object")
          return;
        const { data: q } = $;
        switch (q.$$type) {
          case "inspector-height":
            h.value = q.height;
            break;
        }
      }), window.parent !== window && Ks(h, ($) => {
        window.parent.postMessage({ $$type: "inspector-height", height: $ });
      });
    }), {
      container: r,
      viewport: a,
      status: T,
      mode: b,
      type: m,
      height: h,
      width: At({
        get() {
          return c.value;
        },
        set($) {
          c.value = Number.parseInt($);
        }
      }),
      computedEnable: O,
      message: At(() => n.overlay || T.loading),
      reports: o,
      img: u,
      openNew() {
        L(), e("open-new");
      },
      clearSelect() {
        PC(null);
      },
      async screenshot() {
        const $ = {
          testing: T.testing,
          outline: T.outline
        };
        T.screenshot = !0, T.testing = !0, T.outline = !1, await Z8();
        const q = await dC(r.value, { width: 1250 });
        u.value = URL.createObjectURL(q), T.testing = $.testing, T.outline = $.outline;
      },
      close() {
        URL.revokeObjectURL(u.value), T.screenshot = !1, u.value = "";
      },
      autoTest: R
    };
  }
});
var s9 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "relative" }, [e.status.preview ? r("Viewport", { ref: "viewport", staticClass: "ml-8 transition-all shadow-2xl", style: `max-width: ${e.width}px`, attrs: { width: e.width, height: e.height, type: e.type, interactive: "" } }) : r("SizeObserver", { staticClass: "flex", model: { value: e.height, callback: function(a) {
    e.height = a;
  }, expression: "height" } }, [r("div", { key: e.blockVersion, ref: "container", staticClass: "flex-grow", class: [e.status.screenshot && "screenshot-mode", e.status.testing && "testing-mode"], attrs: { id: "block-container" }, on: { click: function(a) {
    return a.stopPropagation(), e.clearSelect.apply(null, arguments);
  } } }, [r("div", { staticClass: "bg-white", class: e.status.outline && "element-outline" }, [e.mode.preview && e.mode.type === "block" ? r("Hero") : e._e(), e._t("default"), e.mode.preview && (e.mode.type === "block" || e.mode.type === "hero") ? r("Block1") : e._e(), e.mode.preview && e.mode.type === "hero" ? r("Block2") : e._e()], 2)])]), r("div", { staticClass: "w-96 top-0 right-0 z-50 flex flex-col h-screen bg-white shadow-xl", class: e.status.control ? "fixed" : "hidden" }, [r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.preview, expression: "status.preview" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.preview) ? e._i(e.status.preview, null) > -1 : e.status.preview }, on: { change: function(a) {
    var o = e.status.preview, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var h = null, m = e._i(o, h);
      u.checked ? m < 0 && e.$set(e.status, "preview", o.concat([h])) : m > -1 && e.$set(e.status, "preview", o.slice(0, m).concat(o.slice(m + 1)));
    } else
      e.$set(e.status, "preview", c);
  } } }), e._v(" RWD preview ")]), e.status.preview ? r("label", { staticClass: "p-2" }, [e._v(" viewport width: "), r("select", { directives: [{ name: "model", rawName: "v-model", value: e.width, expression: "width" }], on: { change: function(a) {
    var o = Array.prototype.filter.call(a.target.options, function(u) {
      return u.selected;
    }).map(function(u) {
      var c = "_value" in u ? u._value : u.value;
      return c;
    });
    e.width = a.target.multiple ? o : o[0];
  } } }, [r("option", { attrs: { value: "1250" } }, [e._v("1250 (lg)")]), r("option", { attrs: { value: "768" } }, [e._v("768 (md)")]), r("option", { attrs: { value: "375" } }, [e._v("375 (xs)")])])]) : e._e(), e.status.preview ? r("label", { staticClass: "p-2" }, [e._v(" preview as: "), r("select", { directives: [{ name: "model", rawName: "v-model", value: e.type, expression: "type" }], on: { change: function(a) {
    var o = Array.prototype.filter.call(a.target.options, function(u) {
      return u.selected;
    }).map(function(u) {
      var c = "_value" in u ? u._value : u.value;
      return c;
    });
    e.type = a.target.multiple ? o : o[0];
  } } }, [r("option", { attrs: { value: "none" } }, [e._v("None")]), r("option", { attrs: { value: "block" } }, [e._v("Block")]), r("option", { attrs: { value: "hero" } }, [e._v("Hero Block")]), r("option", { attrs: { value: "article" } }, [e._v("Article")])])]) : e._e(), e.status.preview ? e._e() : r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.report, expression: "status.report" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.report) ? e._i(e.status.report, null) > -1 : e.status.report }, on: { change: function(a) {
    var o = e.status.report, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var h = null, m = e._i(o, h);
      u.checked ? m < 0 && e.$set(e.status, "report", o.concat([h])) : m > -1 && e.$set(e.status, "report", o.slice(0, m).concat(o.slice(m + 1)));
    } else
      e.$set(e.status, "report", c);
  } } }), e._v(" show report ")]), e.status.preview ? e._e() : r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.outline, expression: "status.outline" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.outline) ? e._i(e.status.outline, null) > -1 : e.status.outline }, on: { change: function(a) {
    var o = e.status.outline, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var h = null, m = e._i(o, h);
      u.checked ? m < 0 && e.$set(e.status, "outline", o.concat([h])) : m > -1 && e.$set(e.status, "outline", o.slice(0, m).concat(o.slice(m + 1)));
    } else
      e.$set(e.status, "outline", c);
  } } }), e._v(" show outline ")]), e.status.preview ? e._e() : r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.testing, expression: "status.testing" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.testing) ? e._i(e.status.testing, null) > -1 : e.status.testing }, on: { change: function(a) {
    var o = e.status.testing, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var h = null, m = e._i(o, h);
      u.checked ? m < 0 && e.$set(e.status, "testing", o.concat([h])) : m > -1 && e.$set(e.status, "testing", o.slice(0, m).concat(o.slice(m + 1)));
    } else
      e.$set(e.status, "testing", c);
  } } }), e._v(" disable transition ")]), e.showOpenNew ? r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.openNew } }, [e._v("Open another block")]) : e._e(), e.status.preview ? e._e() : r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.screenshot } }, [e._v("screenshot")]), e.status.preview ? e._e() : r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.autoTest } }, [e._v("auto test")]), e.status.preview ? e._e() : r("ElementInfo", { attrs: { reports: e.reports } })], 1), r("Report", { staticClass: "bottom-0 left-0 z-50 w-full h-64 bg-white border-t-2 border-blue-500", class: e.status.control && e.status.report ? "fixed" : "hidden", attrs: { reports: e.reports } }), e.computedEnable ? r("button", { staticClass: "fixed bottom-0 right-0 z-50 mb-4 mr-4", on: { click: function(a) {
    e.status.control = !e.status.control;
  } } }, [r("Watermark")], 1) : e._e(), e.img ? r("div", { staticClass: "absolute inset-0 flex items-center justify-center bg-white" }, [r("img", { attrs: { src: e.img } }), r("button", { staticClass: "absolute top-0 right-0 p-2 mt-4 mr-4 border", on: { click: e.close } }, [e._v("close")])]) : e._e(), r("Overlay", { attrs: { canCancel: !1, isFullPage: "", height: 128, width: 128, opacity: 100, active: !!e.message }, scopedSlots: e._u([{ key: "after", fn: function() {
    return [r("h3", { staticClass: "text-4xl" }, [e._v(e._s(e.message))])];
  }, proxy: !0 }]) })], 1);
}, o9 = [], u9 = /* @__PURE__ */ Be(
  a9,
  s9,
  o9,
  !1,
  null,
  "b6cb4815",
  null,
  null
);
const h9 = u9.exports;
export {
  h9 as Inspector
};

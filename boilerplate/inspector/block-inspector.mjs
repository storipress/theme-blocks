import Bt from "vue";
import ny from "data";
import { LinkElement as _i, TextElement as mi, Logo as ry, DeskList as iy, PageList as ay, Site as oy, SearchElement as sy, TextInput as lp, ColorArea as cp, Article as fp, DeskSection as dp, HeroBlock as uy, SpacingProvider as ly, Block as cy } from "@storipress/block";
import { Article as fy, Block as dy, DeskSection as hy, TextElement as py, LinkElement as vy } from "@jraft/block";
var eu = function(t, e) {
  return eu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
    r.__proto__ = a;
  } || function(r, a) {
    for (var o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
  }, eu(t, e);
};
function gy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  eu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var tu = function() {
  return tu = Object.assign || function(e) {
    for (var r, a = 1, o = arguments.length; a < o; a++) {
      r = arguments[a];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, tu.apply(this, arguments);
};
function hp(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], a = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && a >= t.length && (t = void 0), { value: t && t[a++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pp(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var a = r.call(t), o, u = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = a.next()).done; )
      u.push(o.value);
  } catch (d) {
    c = { error: d };
  } finally {
    try {
      o && !o.done && (r = a.return) && r.call(a);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return u;
}
function vp(t, e, r) {
  if (r || arguments.length === 2)
    for (var a = 0, o = e.length, u; a < o; a++)
      (u || !(a in e)) && (u || (u = Array.prototype.slice.call(e, 0, a)), u[a] = e[a]);
  return t.concat(u || Array.prototype.slice.call(e));
}
function _y(t) {
  var e;
  ke(t, (e = er()) === null || e === void 0 ? void 0 : e.proxy);
}
var Ta, ha = [], gp = (
  /** @class */
  function() {
    function t(e) {
      this.active = !0, this.effects = [], this.cleanups = [], this.vm = e;
    }
    return t.prototype.run = function(e) {
      if (this.active)
        try {
          return this.on(), e();
        } finally {
          this.off();
        }
      else
        process.env.NODE_ENV !== "production" && _y("cannot run an inactive effect scope.");
    }, t.prototype.on = function() {
      this.active && (ha.push(this), Ta = this);
    }, t.prototype.off = function() {
      this.active && (ha.pop(), Ta = ha[ha.length - 1]);
    }, t.prototype.stop = function() {
      this.active && (this.vm.$destroy(), this.effects.forEach(function(e) {
        return e.stop();
      }), this.cleanups.forEach(function(e) {
        return e();
      }), this.active = !1);
    }, t;
  }()
);
(function(t) {
  gy(e, t);
  function e(r) {
    r === void 0 && (r = !1);
    var a = this, o = void 0;
    return Cy(function() {
      o = $r(Qt());
    }), a = t.call(this, o) || this, r || my(a), a;
  }
  return e;
})(gp);
function my(t, e) {
  var r;
  if (e = e || Ta, e && e.active) {
    e.effects.push(t);
    return;
  }
  var a = (r = er()) === null || r === void 0 ? void 0 : r.proxy;
  a && a.$on("hook:destroyed", function() {
    return t.stop();
  });
}
function by() {
  return Ta;
}
function _p() {
  var t, e;
  return ((t = by()) === null || t === void 0 ? void 0 : t.vm) || ((e = er()) === null || e === void 0 ? void 0 : e.proxy);
}
function yy(t) {
  if (!t.scope) {
    var e = new gp(t.proxy);
    t.scope = e, t.proxy.$on("hook:destroyed", function() {
      return e.stop();
    });
  }
  return t.scope;
}
var nu = void 0;
try {
  var zn = require("vue");
  zn && vf(zn) ? nu = zn : zn && "default" in zn && vf(zn.default) && (nu = zn.default);
} catch {
}
var Xn = null, wr = null, ma = !0, mp = "__composition_api_installed__";
function vf(t) {
  return t && Nt(t) && t.name === "Vue";
}
function wy(t) {
  return Xn && Zt(t, mp);
}
function Qt() {
  return process.env.NODE_ENV !== "production" && qa(Xn, "must call Vue.use(VueCompositionAPI) before using any function."), Xn;
}
function bp() {
  var t = Xn || nu;
  return process.env.NODE_ENV !== "production" && qa(t, "No vue dependency found."), t;
}
function xy(t) {
  process.env.NODE_ENV !== "production" && Xn && t.__proto__ !== Xn.__proto__ && ke("[vue-composition-api] another instance of Vue installed"), Xn = t, Object.defineProperty(t, mp, {
    configurable: !0,
    writable: !0,
    value: !0
  });
}
function Cy(t) {
  var e = ma;
  ma = !1;
  try {
    t();
  } finally {
    ma = e;
  }
}
function ka(t) {
  if (ma) {
    var e = wr;
    e == null || e.scope.off(), wr = t, wr == null || wr.scope.on();
  }
}
function er() {
  return wr;
}
var Es = /* @__PURE__ */ new WeakMap();
function Aa(t) {
  if (Es.has(t))
    return Es.get(t);
  var e = {
    proxy: t,
    update: t.$forceUpdate,
    type: t.$options,
    uid: t._uid,
    // $emit is defined on prototype and it expected to be bound
    emit: t.$emit.bind(t),
    parent: null,
    root: null
    // to be immediately set
  };
  yy(e);
  var r = [
    "data",
    "props",
    "attrs",
    "refs",
    "vnode",
    "slots"
  ];
  return r.forEach(function(a) {
    Ge(e, a, {
      get: function() {
        return t["$".concat(a)];
      }
    });
  }), Ge(e, "isMounted", {
    get: function() {
      return t._isMounted;
    }
  }), Ge(e, "isUnmounted", {
    get: function() {
      return t._isDestroyed;
    }
  }), Ge(e, "isDeactivated", {
    get: function() {
      return t._inactive;
    }
  }), Ge(e, "emitted", {
    get: function() {
      return t._events;
    }
  }), Es.set(t, e), t.$parent && (e.parent = Aa(t.$parent)), t.$root && (e.root = Aa(t.$root)), e;
}
var Sy = function(t) {
  return Object.prototype.toString.call(t);
};
function gf(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var yp = typeof Symbol < "u" && gf(Symbol) && typeof Reflect < "u" && gf(Reflect.ownKeys), Xt = function(t) {
  return t;
};
function Ge(t, e, r) {
  var a = r.get, o = r.set;
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: a || Xt,
    set: o || Xt
  });
}
function wp(t, e, r, a) {
  Object.defineProperty(t, e, {
    value: r,
    enumerable: !!a,
    writable: !0,
    configurable: !0
  });
}
function Zt(t, e) {
  return Object.hasOwnProperty.call(t, e);
}
function qa(t, e) {
  if (!t)
    throw new Error("[vue-composition-api] ".concat(e));
}
function Ey(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function pn(t) {
  return Array.isArray(t);
}
var Oy = Object.prototype.toString, xp = function(t) {
  return Oy.call(t);
}, Ty = function(t) {
  return xp(t) === "[object Map]";
}, ky = function(t) {
  return xp(t) === "[object Set]";
}, Ay = 4294967295;
function $y(t) {
  var e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t) && e <= Ay;
}
function ui(t) {
  return t !== null && typeof t == "object";
}
function vn(t) {
  return Sy(t) === "[object Object]";
}
function Nt(t) {
  return typeof t == "function";
}
function Py(t) {
  return t == null;
}
function ke(t, e) {
  var r = bp();
  !r || !r.util ? console.warn("[vue-composition-api] ".concat(t)) : r.util.warn(t, e);
}
function Ry(t, e, r) {
  if (process.env.NODE_ENV !== "production" && ke("Error in ".concat(r, ': "').concat(t.toString(), '"'), e), typeof window < "u" && typeof console < "u")
    console.error(t);
  else
    throw t;
}
function Fy(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function Cp(t, e) {
  return e = e || er(), process.env.NODE_ENV !== "production" && !e && ke("".concat(t, " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup()."), e;
}
function $r(t, e) {
  e === void 0 && (e = {});
  var r = t.config.silent;
  t.config.silent = !0;
  var a = new t(e);
  return t.config.silent = r, a;
}
function Dy(t) {
  var e = Qt();
  return e && t instanceof e;
}
function My(t, e) {
  return function() {
    for (var r = [], a = 0; a < arguments.length; a++)
      r[a] = arguments[a];
    return t.$scopedSlots[e] ? t.$scopedSlots[e].apply(t, r) : process.env.NODE_ENV !== "production" ? ke("slots.".concat(e, '() got called outside of the "render()" scope'), t) : void 0;
  };
}
function Ly(t, e) {
  var r;
  if (!t)
    r = {};
  else {
    if (t._normalized)
      return t._normalized;
    r = {};
    for (var a in t)
      t[a] && a[0] !== "$" && (r[a] = !0);
  }
  for (var a in e)
    a in r || (r[a] = !0);
  return r;
}
var Os, Iy = function() {
  if (!Os) {
    var t = $r(Qt(), {
      computed: {
        value: function() {
          return 0;
        }
      }
    }), e = t._computedWatchers.value.constructor, r = t._data.__ob__.dep.constructor;
    Os = {
      Watcher: e,
      Dep: r
    }, t.$destroy();
  }
  return Os;
};
function Sp(t) {
  return yp ? Symbol.for(t) : t;
}
var Cr = Sp("composition-api.preFlushQueue"), ai = Sp("composition-api.postFlushQueue"), oi = "composition-api.refKey", _f = /* @__PURE__ */ new WeakMap(), Ny = /* @__PURE__ */ new WeakMap(), By = /* @__PURE__ */ new WeakMap();
function Wy(t, e, r) {
  var a = Qt(), o = a.util, u = o.warn, c = o.defineReactive;
  process.env.NODE_ENV !== "production" && (Py(t) || Ey(t)) && u("Cannot set reactive property on undefined, null, or primitive value: ".concat(t));
  var d = t.__ob__;
  function g() {
    d && ui(r) && !Zt(r, "__ob__") && yu(r);
  }
  if (pn(t)) {
    if ($y(e))
      return t.length = Math.max(t.length, e), t.splice(e, 1, r), g(), r;
    if (e === "length" && r !== t.length)
      return t.length = r, d == null || d.dep.notify(), r;
  }
  return e in t && !(e in Object.prototype) ? (t[e] = r, g(), r) : t._isVue || d && d.vmCount ? (process.env.NODE_ENV !== "production" && u("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), r) : d ? (c(d.value, e, r), Tp(t, e, r), g(), d.dep.notify(), r) : (t[e] = r, r);
}
var Ep = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      var r = e.get, a = e.set;
      Ge(this, "value", {
        get: r,
        set: a
      });
    }
    return t;
  }()
);
function bu(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var a = new Ep(t);
  r && (a.effect = !0);
  var o = Object.seal(a);
  return e && By.set(o, !0), o;
}
function It(t) {
  var e;
  if (Ne(t))
    return t;
  var r = $a((e = {}, e[oi] = t, e));
  return bu({
    get: function() {
      return r[oi];
    },
    set: function(a) {
      return r[oi] = a;
    }
  });
}
function Ne(t) {
  return t instanceof Ep;
}
function Uy(t) {
  if (process.env.NODE_ENV !== "production" && !dn(t) && ke("toRefs() expects a reactive object but received a plain one."), !vn(t))
    return t;
  var e = {};
  for (var r in t)
    e[r] = jy(t, r);
  return e;
}
function jy(t, e) {
  e in t || Wy(t, e, void 0);
  var r = t[e];
  return Ne(r) ? r : bu({
    get: function() {
      return t[e];
    },
    set: function(a) {
      return t[e] = a;
    }
  });
}
var Op = "__v_skip";
function Er(t) {
  var e;
  return !!(t && Zt(t, "__ob__") && typeof t.__ob__ == "object" && (!((e = t.__ob__) === null || e === void 0) && e[Op]));
}
function dn(t) {
  var e;
  return !!(t && Zt(t, "__ob__") && typeof t.__ob__ == "object" && !(!((e = t.__ob__) === null || e === void 0) && e[Op]));
}
function ru(t) {
  if (!(!vn(t) || Er(t) || pn(t) || Ne(t) || Dy(t) || _f.has(t))) {
    _f.set(t, !0);
    for (var e = Object.keys(t), r = 0; r < e.length; r++)
      Tp(t, e[r]);
  }
}
function Tp(t, e, r) {
  if (e !== "__ob__" && !Er(t[e])) {
    var a, o, u = Object.getOwnPropertyDescriptor(t, e);
    if (u) {
      if (u.configurable === !1)
        return;
      a = u.get, o = u.set, (!a || o) && arguments.length === 2 && (r = t[e]);
    }
    ru(r), Ge(t, e, {
      get: function() {
        var d = a ? a.call(t) : r;
        return e !== oi && Ne(d) ? d.value : d;
      },
      set: function(d) {
        a && !o || (e !== oi && Ne(r) && !Ne(d) ? r.value = d : (o && o.call(t, d), r = d), ru(d));
      }
    });
  }
}
function kp(t) {
  var e = bp(), r;
  if (e.observable)
    r = e.observable(t);
  else {
    var a = $r(e, {
      data: {
        $$state: t
      }
    });
    r = a._data.$$state;
  }
  return Zt(r, "__ob__") || yu(r), r;
}
function yu(t, e) {
  var r, a;
  if (e === void 0 && (e = /* @__PURE__ */ new Set()), !(e.has(t) || Zt(t, "__ob__") || !Object.isExtensible(t))) {
    wp(t, "__ob__", Hy(t)), e.add(t);
    try {
      for (var o = hp(Object.keys(t)), u = o.next(); !u.done; u = o.next()) {
        var c = u.value, d = t[c];
        !(vn(d) || pn(d)) || Er(d) || !Object.isExtensible(d) || yu(d, e);
      }
    } catch (g) {
      r = { error: g };
    } finally {
      try {
        u && !u.done && (a = o.return) && a.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
  }
}
function Hy(t) {
  return t === void 0 && (t = {}), {
    value: t,
    dep: {
      notify: Xt,
      depend: Xt,
      addSub: Xt,
      removeSub: Xt
    }
  };
}
function zy() {
  return kp({}).__ob__;
}
function $a(t) {
  if (!ui(t))
    return process.env.NODE_ENV !== "production" && ke('"reactive()" must be called on an object.'), t;
  if (!(vn(t) || pn(t)) || Er(t) || !Object.isExtensible(t))
    return t;
  var e = kp(t);
  return ru(e), e;
}
var qy = function(t) {
  return "on".concat(t[0].toUpperCase() + t.slice(1));
};
function wu(t) {
  return function(e, r) {
    var a = Cp(qy(t), r);
    return a && Gy(Qt(), a, t, e);
  };
}
function Gy(t, e, r, a) {
  var o = e.proxy.$options, u = t.config.optionMergeStrategies[r], c = Yy(e, a);
  return o[r] = u(o[r], c), c;
}
function Yy(t, e) {
  return function() {
    for (var r = [], a = 0; a < arguments.length; a++)
      r[a] = arguments[a];
    var o = er();
    ka(t);
    try {
      return e.apply(void 0, vp([], pp(r), !1));
    } finally {
      ka(o);
    }
  };
}
var Vy = wu("beforeMount"), iu = wu("mounted"), Ky = wu("beforeDestroy"), ba;
function Xy() {
  Pa(this, Cr);
}
function Zy() {
  Pa(this, ai);
}
function Qy(t) {
  return t[Cr] !== void 0;
}
function Jy(t) {
  t[Cr] = [], t[ai] = [], t.$on("hook:beforeUpdate", Xy), t.$on("hook:updated", Zy);
}
function ew(t) {
  return tu({
    immediate: !1,
    deep: !1,
    flush: "pre"
  }, t);
}
function tw() {
  var t = _p();
  return t ? Qy(t) || Jy(t) : (ba || (ba = $r(Qt())), t = ba), t;
}
function Pa(t, e) {
  for (var r = t[e], a = 0; a < r.length; a++)
    r[a]();
  r.length = 0;
}
function nw(t, e, r) {
  var a = function() {
    t.$nextTick(function() {
      t[Cr].length && Pa(t, Cr), t[ai].length && Pa(t, ai);
    });
  };
  switch (r) {
    case "pre":
      a(), t[Cr].push(e);
      break;
    case "post":
      a(), t[ai].push(e);
      break;
    default:
      qa(!1, 'flush must be one of ["post", "pre", "sync"], but got '.concat(r));
      break;
  }
}
function rw(t, e, r, a) {
  var o = t._watchers.length;
  return t.$watch(e, r, {
    immediate: a.immediateInvokeCallback,
    deep: a.deep,
    lazy: a.noRun,
    sync: a.sync,
    before: a.before
  }), t._watchers[o];
}
function mf(t, e) {
  var r = t.teardown;
  t.teardown = function() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    r.apply(t, a), e();
  };
}
function iw(t, e, r, a) {
  var o;
  process.env.NODE_ENV !== "production" && !r && (a.immediate !== void 0 && ke('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), a.deep !== void 0 && ke('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  var u = a.flush, c = u === "sync", d, g = function(K) {
    d = function() {
      try {
        K();
      } catch (De) {
        Ry(De, t, "onCleanup()");
      }
    };
  }, v = function() {
    d && (d(), d = null);
  }, y = function(K) {
    return c || /* without a current active instance, ignore pre|post mode */
    t === ba ? K : function() {
      for (var De = [], Ht = 0; Ht < arguments.length; Ht++)
        De[Ht] = arguments[Ht];
      return nw(t, function() {
        K.apply(void 0, vp([], pp(De), !1));
      }, u);
    };
  };
  if (r === null) {
    var S = !1, R = function() {
      if (!S)
        try {
          S = !0, e(g);
        } finally {
          S = !1;
        }
    }, k = rw(t, R, Xt, {
      deep: a.deep || !1,
      sync: c,
      before: v
    });
    mf(k, v), k.lazy = !1;
    var A = k.get.bind(k);
    return k.get = y(A), function() {
      k.teardown();
    };
  }
  var M = a.deep, H = !1, U;
  if (Ne(e) ? U = function() {
    return e.value;
  } : dn(e) ? (U = function() {
    return e;
  }, M = !0) : pn(e) ? (H = !0, U = function() {
    return e.map(function(K) {
      return Ne(K) ? K.value : dn(K) ? xr(K) : Nt(K) ? K() : (process.env.NODE_ENV !== "production" && ke("Invalid watch source: ".concat(JSON.stringify(K), `.
          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`), t), Xt);
    });
  }) : Nt(e) ? U = e : (U = Xt, process.env.NODE_ENV !== "production" && ke("Invalid watch source: ".concat(JSON.stringify(e), `.
      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`), t)), M) {
    var ee = U;
    U = function() {
      return xr(ee());
    };
  }
  var re = function(K, De) {
    if (!(!M && H && K.every(function(Ht, Dr) {
      return Fy(Ht, De[Dr]);
    })))
      return v(), r(K, De, g);
  }, ye = y(re);
  if (a.immediate) {
    var Q = ye, B = function(K, De) {
      return B = Q, re(K, pn(K) ? [] : De);
    };
    ye = function(K, De) {
      return B(K, De);
    };
  }
  var ae = t.$watch(U, ye, {
    immediate: a.immediate,
    deep: M,
    sync: c
  }), ve = t._watchers[t._watchers.length - 1];
  return dn(ve.value) && (!((o = ve.value.__ob__) === null || o === void 0) && o.dep) && M && ve.value.__ob__.dep.addSub({
    update: function() {
      ve.run();
    }
  }), mf(ve, v), function() {
    ae();
  };
}
function Ts(t, e, r) {
  var a = null;
  Nt(e) ? a = e : (process.env.NODE_ENV !== "production" && ke("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), r = e, a = null);
  var o = ew(r), u = tw();
  return iw(u, t, a, o);
}
function xr(t, e) {
  if (e === void 0 && (e = /* @__PURE__ */ new Set()), !ui(t) || e.has(t) || Ny.has(t))
    return t;
  if (e.add(t), Ne(t))
    xr(t.value, e);
  else if (pn(t))
    for (var r = 0; r < t.length; r++)
      xr(t[r], e);
  else if (ky(t) || Ty(t))
    t.forEach(function(o) {
      xr(o, e);
    });
  else if (vn(t))
    for (var a in t)
      xr(t[a], e);
  return t;
}
function At(t) {
  var e = _p(), r, a;
  Nt(t) ? r = t : (r = t.get, a = t.set);
  var o, u;
  if (e && !e.$isServer) {
    var c = Iy(), d = c.Watcher, g = c.Dep, v;
    u = function() {
      return v || (v = new d(e, r, Xt, { lazy: !0 })), v.dirty && v.evaluate(), g.target && v.depend(), v.value;
    }, o = function(S) {
      if (process.env.NODE_ENV !== "production" && !a) {
        ke("Write operation failed: computed value is readonly.", e);
        return;
      }
      a && a(S);
    };
  } else {
    var y = $r(Qt(), {
      computed: {
        $$state: {
          get: r,
          set: a
        }
      }
    });
    e && e.$on("hook:destroyed", function() {
      return y.$destroy();
    }), u = function() {
      return y.$$state;
    }, o = function(S) {
      if (process.env.NODE_ENV !== "production" && !a) {
        ke("Write operation failed: computed value is readonly.", e);
        return;
      }
      y.$$state = S;
    };
  }
  return bu({
    get: u,
    set: o
  }, !a, !0);
}
function xu(t, e) {
  var r, a = (r = Cp("provide")) === null || r === void 0 ? void 0 : r.proxy;
  if (a) {
    if (!a._provided) {
      var o = {};
      Ge(a, "_provided", {
        get: function() {
          return o;
        },
        set: function(u) {
          return Object.assign(o, u);
        }
      });
    }
    a._provided[t] = e;
  }
}
process.env.NODE_ENV !== "production" && Object.freeze({});
var aw = function() {
  for (var e, r = [], a = 0; a < arguments.length; a++)
    r[a] = arguments[a];
  return (e = Qt()) === null || e === void 0 ? void 0 : e.nextTick.apply(this, r);
}, pa, Cu = function() {
  for (var e, r = [], a = 0; a < arguments.length; a++)
    r[a] = arguments[a];
  var o = (this === null || this === void 0 ? void 0 : this.proxy) || ((e = er()) === null || e === void 0 ? void 0 : e.proxy);
  return o ? o.$createElement.apply(o, r) : (process.env.NODE_ENV !== "production" && ke("`createElement()` has been called outside of render function."), pa || (pa = $r(Qt()).$createElement), pa.apply(pa, r));
};
function ow(t, e, r) {
  var a = t.__composition_api_state__ = t.__composition_api_state__ || {};
  a[e] = r;
}
function sw(t, e) {
  return (t.__composition_api_state__ || {})[e];
}
var Pn = {
  set: ow,
  get: sw
};
function uw(t, e, r) {
  var a = t.$options.props;
  !(e in t) && !(a && Zt(a, e)) ? (Ne(r) ? Ge(t, e, {
    get: function() {
      return r.value;
    },
    set: function(o) {
      r.value = o;
    }
  }) : Ge(t, e, {
    get: function() {
      return dn(r) && r.__ob__.dep.depend(), r;
    },
    set: function(o) {
      r = o;
    }
  }), process.env.NODE_ENV !== "production" && t.$nextTick(function() {
    Object.keys(t._data).indexOf(e) === -1 && (Ne(r) ? Ge(t._data, e, {
      get: function() {
        return r.value;
      },
      set: function(o) {
        r.value = o;
      }
    }) : Ge(t._data, e, {
      get: function() {
        return r;
      },
      set: function(o) {
        r = o;
      }
    }));
  })) : process.env.NODE_ENV !== "production" && (a && Zt(a, e) ? ke('The setup binding property "'.concat(e, '" is already declared as a prop.'), t) : ke('The setup binding property "'.concat(e, '" is already declared.'), t));
}
function lw(t) {
  var e = Pn.get(t, "rawBindings") || {};
  if (!(!e || !Object.keys(e).length)) {
    for (var r = t.$refs, a = Pn.get(t, "refs") || [], o = 0; o < a.length; o++) {
      var u = a[o], c = e[u];
      !r[u] && c && Ne(c) && (c.value = null);
    }
    for (var d = Object.keys(r), g = [], o = 0; o < d.length; o++) {
      var u = d[o], c = e[u];
      r[u] && c && Ne(c) && (c.value = r[u], g.push(u));
    }
    Pn.set(t, "refs", g);
  }
}
function bf(t) {
  for (var e = [t._vnode]; e.length; ) {
    var r = e.pop();
    if (r && (r.context && lw(r.context), r.children))
      for (var a = 0; a < r.children.length; ++a)
        e.push(r.children[a]);
  }
}
function yf(t, e) {
  var r, a;
  if (t) {
    var o = Pn.get(t, "attrBindings");
    if (!(!o && !e)) {
      if (!o) {
        var u = $a({});
        o = { ctx: e, data: u }, Pn.set(t, "attrBindings", o), Ge(e, "attrs", {
          get: function() {
            return o == null ? void 0 : o.data;
          },
          set: function() {
            process.env.NODE_ENV !== "production" && ke("Cannot assign to '$attrs' because it is a read-only property", t);
          }
        });
      }
      var c = t.$attrs, d = function(S) {
        Zt(o.data, S) || Ge(o.data, S, {
          get: function() {
            return t.$attrs[S];
          }
        });
      };
      try {
        for (var g = hp(Object.keys(c)), v = g.next(); !v.done; v = g.next()) {
          var y = v.value;
          d(y);
        }
      } catch (S) {
        r = { error: S };
      } finally {
        try {
          v && !v.done && (a = g.return) && a.call(g);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }
  }
}
function wf(t, e) {
  var r = t.$options._parentVnode;
  if (r) {
    for (var a = Pn.get(t, "slots") || [], o = Ly(r.data.scopedSlots, t.$slots), u = 0; u < a.length; u++) {
      var c = a[u];
      o[c] || delete e[c];
    }
    for (var d = Object.keys(o), u = 0; u < d.length; u++) {
      var c = d[u];
      e[c] || (e[c] = My(t, c));
    }
    Pn.set(t, "slots", d);
  }
}
function ks(t, e, r) {
  var a = er();
  ka(t);
  try {
    return e(t);
  } catch (o) {
    if (r)
      r(o);
    else
      throw o;
  } finally {
    ka(a);
  }
}
function cw(t) {
  t.mixin({
    beforeCreate: e,
    mounted: function() {
      bf(this);
    },
    beforeUpdate: function() {
      yf(this);
    },
    updated: function() {
      bf(this);
    }
  });
  function e() {
    var c = this, d = c.$options, g = d.setup, v = d.render;
    if (v && (d.render = function() {
      for (var S = this, R = [], k = 0; k < arguments.length; k++)
        R[k] = arguments[k];
      return ks(Aa(c), function() {
        return v.apply(S, R);
      });
    }), !!g) {
      if (!Nt(g)) {
        process.env.NODE_ENV !== "production" && ke('The "setup" option should be a function that returns a object in component definitions.', c);
        return;
      }
      var y = d.data;
      d.data = function() {
        return r(c, c.$props), Nt(y) ? y.call(c, c) : y || {};
      };
    }
  }
  function r(c, d) {
    d === void 0 && (d = {});
    var g = c.$options.setup, v = u(c), y = Aa(c);
    y.setupContext = v, wp(d, "__ob__", zy()), wf(c, v.slots);
    var S;
    if (ks(y, function() {
      S = g(d, v);
    }), !!S) {
      if (Nt(S)) {
        var R = S;
        c.$options.render = function() {
          return wf(c, v.slots), ks(y, function() {
            return R();
          });
        };
        return;
      } else if (ui(S)) {
        dn(S) && (S = Uy(S)), Pn.set(c, "rawBindings", S);
        var k = S;
        Object.keys(k).forEach(function(A) {
          var M = k[A];
          if (!Ne(M))
            if (dn(M))
              pn(M) && (M = It(M));
            else if (Nt(M)) {
              var H = M;
              M = M.bind(c), Object.keys(H).forEach(function(U) {
                M[U] = H[U];
              });
            } else
              ui(M) ? o(M) && a(M) : M = It(M);
          uw(c, A, M);
        });
        return;
      }
      process.env.NODE_ENV !== "production" && qa(!1, '"setup" must return a "Object" or a "Function", got "'.concat(Object.prototype.toString.call(S).slice(8, -1), '"'));
    }
  }
  function a(c, d) {
    if (d === void 0 && (d = /* @__PURE__ */ new Set()), !d.has(c) && !(!vn(c) || Ne(c) || dn(c) || Er(c))) {
      var g = Qt(), v = g.util.defineReactive;
      Object.keys(c).forEach(function(y) {
        var S = c[y];
        v(c, y, S), S && (d.add(S), a(S, d));
      });
    }
  }
  function o(c, d) {
    return d === void 0 && (d = /* @__PURE__ */ new Map()), d.has(c) ? d.get(c) : (d.set(c, !1), pn(c) && dn(c) ? (d.set(c, !0), !0) : !vn(c) || Er(c) || Ne(c) ? !1 : Object.keys(c).some(function(g) {
      return o(c[g], d);
    }));
  }
  function u(c) {
    var d = { slots: {} }, g = [
      "root",
      "parent",
      "refs",
      "listeners",
      "isServer",
      "ssrContext"
    ], v = ["emit"];
    return g.forEach(function(y) {
      var S = "$".concat(y);
      Ge(d, y, {
        get: function() {
          return c[S];
        },
        set: function() {
          process.env.NODE_ENV !== "production" && ke("Cannot assign to '".concat(y, "' because it is a read-only property"), c);
        }
      });
    }), yf(c, d), v.forEach(function(y) {
      var S = "$".concat(y);
      Ge(d, y, {
        get: function() {
          return function() {
            for (var R = [], k = 0; k < arguments.length; k++)
              R[k] = arguments[k];
            var A = c[S];
            A.apply(c, R);
          };
        }
      });
    }), process.env.NODE_ENV === "test" && (d._vm = c), d;
  }
}
function Ap(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  for (var r, a, o, u = yp ? Reflect.ownKeys(t) : Object.keys(t), c = 0; c < u.length; c++)
    r = u[c], r !== "__ob__" && (a = e[r], o = t[r], Zt(e, r) ? a !== o && vn(a) && !Ne(a) && vn(o) && !Ne(o) && Ap(o, a) : e[r] = o);
  return e;
}
function fw(t) {
  if (wy(t)) {
    process.env.NODE_ENV !== "production" && ke("[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.");
    return;
  }
  process.env.NODE_ENV !== "production" && (t.version ? (t.version[0] !== "2" || t.version[1] !== ".") && ke("[vue-composition-api] only works with Vue 2, v".concat(t.version, " found.")) : ke("[vue-composition-api] no Vue version found")), t.config.optionMergeStrategies.setup = function(e, r) {
    return function(o, u) {
      return Ap(Nt(e) ? e(o, u) || {} : void 0, Nt(r) ? r(o, u) || {} : void 0);
    };
  }, xy(t), cw(t);
}
var dw = {
  install: function(t) {
    return fw(t);
  }
};
typeof window < "u" && window.Vue && window.Vue.use(dw);
var $p = typeof global == "object" && global && global.Object === Object && global, hw = typeof self == "object" && self && self.Object === Object && self, gn = $p || hw || Function("return this")(), Or = gn.Symbol, Pp = Object.prototype, pw = Pp.hasOwnProperty, vw = Pp.toString, Jr = Or ? Or.toStringTag : void 0;
function gw(t) {
  var e = pw.call(t, Jr), r = t[Jr];
  try {
    t[Jr] = void 0;
    var a = !0;
  } catch {
  }
  var o = vw.call(t);
  return a && (e ? t[Jr] = r : delete t[Jr]), o;
}
var _w = Object.prototype, mw = _w.toString;
function bw(t) {
  return mw.call(t);
}
var yw = "[object Null]", ww = "[object Undefined]", xf = Or ? Or.toStringTag : void 0;
function bi(t) {
  return t == null ? t === void 0 ? ww : yw : xf && xf in Object(t) ? gw(t) : bw(t);
}
function Rp(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var xw = "[object AsyncFunction]", Cw = "[object Function]", Sw = "[object GeneratorFunction]", Ew = "[object Proxy]";
function Fp(t) {
  if (!Rp(t))
    return !1;
  var e = bi(t);
  return e == Cw || e == Sw || e == xw || e == Ew;
}
var As = gn["__core-js_shared__"], Cf = function() {
  var t = /[^.]+$/.exec(As && As.keys && As.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ow(t) {
  return !!Cf && Cf in t;
}
var Tw = Function.prototype, kw = Tw.toString;
function tr(t) {
  if (t != null) {
    try {
      return kw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Aw = /[\\^$.*+?()[\]{}|]/g, $w = /^\[object .+?Constructor\]$/, Pw = Function.prototype, Rw = Object.prototype, Fw = Pw.toString, Dw = Rw.hasOwnProperty, Mw = RegExp(
  "^" + Fw.call(Dw).replace(Aw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lw(t) {
  if (!Rp(t) || Ow(t))
    return !1;
  var e = Fp(t) ? Mw : $w;
  return e.test(tr(t));
}
function Iw(t, e) {
  return t == null ? void 0 : t[e];
}
function Pr(t, e) {
  var r = Iw(t, e);
  return Lw(r) ? r : void 0;
}
var li = Pr(Object, "create");
function Nw() {
  this.__data__ = li ? li(null) : {}, this.size = 0;
}
function Bw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ww = "__lodash_hash_undefined__", Uw = Object.prototype, jw = Uw.hasOwnProperty;
function Hw(t) {
  var e = this.__data__;
  if (li) {
    var r = e[t];
    return r === Ww ? void 0 : r;
  }
  return jw.call(e, t) ? e[t] : void 0;
}
var zw = Object.prototype, qw = zw.hasOwnProperty;
function Gw(t) {
  var e = this.__data__;
  return li ? e[t] !== void 0 : qw.call(e, t);
}
var Yw = "__lodash_hash_undefined__";
function Vw(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = li && e === void 0 ? Yw : e, this;
}
function Qn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Qn.prototype.clear = Nw;
Qn.prototype.delete = Bw;
Qn.prototype.get = Hw;
Qn.prototype.has = Gw;
Qn.prototype.set = Vw;
function Kw() {
  this.__data__ = [], this.size = 0;
}
function Dp(t, e) {
  return t === e || t !== t && e !== e;
}
function Ga(t, e) {
  for (var r = t.length; r--; )
    if (Dp(t[r][0], e))
      return r;
  return -1;
}
var Xw = Array.prototype, Zw = Xw.splice;
function Qw(t) {
  var e = this.__data__, r = Ga(e, t);
  if (r < 0)
    return !1;
  var a = e.length - 1;
  return r == a ? e.pop() : Zw.call(e, r, 1), --this.size, !0;
}
function Jw(t) {
  var e = this.__data__, r = Ga(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function ex(t) {
  return Ga(this.__data__, t) > -1;
}
function tx(t, e) {
  var r = this.__data__, a = Ga(r, t);
  return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
}
function _n(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
_n.prototype.clear = Kw;
_n.prototype.delete = Qw;
_n.prototype.get = Jw;
_n.prototype.has = ex;
_n.prototype.set = tx;
var ci = Pr(gn, "Map");
function nx() {
  this.size = 0, this.__data__ = {
    hash: new Qn(),
    map: new (ci || _n)(),
    string: new Qn()
  };
}
function rx(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ya(t, e) {
  var r = t.__data__;
  return rx(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function ix(t) {
  var e = Ya(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function ax(t) {
  return Ya(this, t).get(t);
}
function ox(t) {
  return Ya(this, t).has(t);
}
function sx(t, e) {
  var r = Ya(this, t), a = r.size;
  return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
}
function nr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
nr.prototype.clear = nx;
nr.prototype.delete = ix;
nr.prototype.get = ax;
nr.prototype.has = ox;
nr.prototype.set = sx;
var ux = "__lodash_hash_undefined__";
function lx(t) {
  return this.__data__.set(t, ux), this;
}
function cx(t) {
  return this.__data__.has(t);
}
function fi(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new nr(); ++e < r; )
    this.add(t[e]);
}
fi.prototype.add = fi.prototype.push = lx;
fi.prototype.has = cx;
function fx(t, e, r, a) {
  for (var o = t.length, u = r + (a ? 1 : -1); a ? u-- : ++u < o; )
    if (e(t[u], u, t))
      return u;
  return -1;
}
function dx(t) {
  return t !== t;
}
function hx(t, e, r) {
  for (var a = r - 1, o = t.length; ++a < o; )
    if (t[a] === e)
      return a;
  return -1;
}
function px(t, e, r) {
  return e === e ? hx(t, e, r) : fx(t, dx, r);
}
function vx(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && px(t, e, 0) > -1;
}
function gx(t, e, r) {
  for (var a = -1, o = t == null ? 0 : t.length; ++a < o; )
    if (r(e, t[a]))
      return !0;
  return !1;
}
function Mp(t, e) {
  return t.has(e);
}
var Sr = Pr(gn, "Set");
function _x() {
}
function Su(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(a) {
    r[++e] = a;
  }), r;
}
var mx = 1 / 0, bx = Sr && 1 / Su(new Sr([, -0]))[1] == mx ? function(t) {
  return new Sr(t);
} : _x, yx = 200;
function wx(t, e, r) {
  var a = -1, o = vx, u = t.length, c = !0, d = [], g = d;
  if (r)
    c = !1, o = gx;
  else if (u >= yx) {
    var v = e ? null : bx(t);
    if (v)
      return Su(v);
    c = !1, o = Mp, g = new fi();
  } else
    g = e ? [] : d;
  e:
    for (; ++a < u; ) {
      var y = t[a], S = e ? e(y) : y;
      if (y = r || y !== 0 ? y : 0, c && S === S) {
        for (var R = g.length; R--; )
          if (g[R] === S)
            continue e;
        e && g.push(S), d.push(y);
      } else
        o(g, S, r) || (g !== d && g.push(S), d.push(y));
    }
  return d;
}
function xx(t, e) {
  return e = typeof e == "function" ? e : void 0, t && t.length ? wx(t, void 0, e) : [];
}
const Cx = Bt.extend({
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
function He(t, e, r, a, o, u, c, d) {
  var g = typeof t == "function" ? t.options : t;
  e && (g.render = e, g.staticRenderFns = r, g._compiled = !0), a && (g.functional = !0), u && (g._scopeId = "data-v-" + u);
  var v;
  if (c ? (v = function(R) {
    R = R || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !R && typeof __VUE_SSR_CONTEXT__ < "u" && (R = __VUE_SSR_CONTEXT__), o && o.call(this, R), R && R._registeredComponents && R._registeredComponents.add(c);
  }, g._ssrRegister = v) : o && (v = d ? function() {
    o.call(
      this,
      (g.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), v)
    if (g.functional) {
      g._injectStyles = v;
      var y = g.render;
      g.render = function(k, A) {
        return v.call(A), y(k, A);
      };
    } else {
      var S = g.beforeCreate;
      g.beforeCreate = S ? [].concat(S, v) : [v];
    }
  return {
    exports: t,
    options: g
  };
}
var Sx = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("svg", { attrs: { viewBox: e.viewBox, xmlns: "http://www.w3.org/2000/svg" } }, [e.title ? r("title", [e._v(e._s(e.title))]) : e._e(), r("foreignObject", { attrs: { x: "0", y: "0", width: `${e.width}`, height: `${e.height}` } }, [r("div", { staticClass: "relative h-full", class: !e.interactive && "select-none", attrs: { xmlns: "http://www.w3.org/1999/xhtml" } }, [e._t("default"), e.interactive ? e._e() : r("div", e._g({ staticClass: "absolute inset-0 w-full h-full" }, e.$listeners))], 2)])]);
}, Ex = [], Ox = /* @__PURE__ */ He(
  Cx,
  Sx,
  Ex,
  !1,
  null,
  null,
  null,
  null
);
const Tx = Ox.exports, kx = Bt.extend({
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
      const t = new URL(location.href);
      return t.searchParams.set("inspector-preview", "true"), t.searchParams.set("inspector-type", this.type), t.toString();
    }
  },
  methods: {
    handleLoad() {
      this.loading = !1, this.$emit("load");
    }
  }
});
var Ax = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "preview-paper" }, [e.loading ? r("div", { staticClass: "loading" }, [e._v("Loading Preview")]) : e._e(), r("iframe", { key: e.previewPath, attrs: { width: e.width, height: e.height, src: e.previewPath }, on: { load: e.handleLoad } })]);
}, $x = [], Px = /* @__PURE__ */ He(
  kx,
  Ax,
  $x,
  !1,
  null,
  "f33b857c",
  null,
  null
);
const Rx = Px.exports, Fx = Bt.extend({
  components: { Imageify: Tx, PreviewFrame: Rx },
  props: {
    path: Object,
    width: Number,
    height: Number,
    interactive: Boolean,
    type: String
  }
});
var Dx = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("Imageify", { attrs: { interactive: e.interactive, width: e.width, height: e.height } }, [r("PreviewFrame", { attrs: { path: e.path, width: `${e.width}px`, height: `${e.height}px`, type: e.type } })], 1);
}, Mx = [], Lx = /* @__PURE__ */ He(
  Fx,
  Dx,
  Mx,
  !1,
  null,
  null,
  null,
  null
);
const Ix = Lx.exports;
function Nx() {
  this.__data__ = new _n(), this.size = 0;
}
function Bx(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Wx(t) {
  return this.__data__.get(t);
}
function Ux(t) {
  return this.__data__.has(t);
}
var jx = 200;
function Hx(t, e) {
  var r = this.__data__;
  if (r instanceof _n) {
    var a = r.__data__;
    if (!ci || a.length < jx - 1)
      return a.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new nr(a);
  }
  return r.set(t, e), this.size = r.size, this;
}
function Rn(t) {
  var e = this.__data__ = new _n(t);
  this.size = e.size;
}
Rn.prototype.clear = Nx;
Rn.prototype.delete = Bx;
Rn.prototype.get = Wx;
Rn.prototype.has = Ux;
Rn.prototype.set = Hx;
function zx(t, e) {
  for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var qx = 1, Gx = 2;
function Lp(t, e, r, a, o, u) {
  var c = r & qx, d = t.length, g = e.length;
  if (d != g && !(c && g > d))
    return !1;
  var v = u.get(t), y = u.get(e);
  if (v && y)
    return v == e && y == t;
  var S = -1, R = !0, k = r & Gx ? new fi() : void 0;
  for (u.set(t, e), u.set(e, t); ++S < d; ) {
    var A = t[S], M = e[S];
    if (a)
      var H = c ? a(M, A, S, e, t, u) : a(A, M, S, t, e, u);
    if (H !== void 0) {
      if (H)
        continue;
      R = !1;
      break;
    }
    if (k) {
      if (!zx(e, function(U, ee) {
        if (!Mp(k, ee) && (A === U || o(A, U, r, a, u)))
          return k.push(ee);
      })) {
        R = !1;
        break;
      }
    } else if (!(A === M || o(A, M, r, a, u))) {
      R = !1;
      break;
    }
  }
  return u.delete(t), u.delete(e), R;
}
var Yx = gn.Uint8Array;
const Sf = Yx;
function Vx(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(a, o) {
    r[++e] = [o, a];
  }), r;
}
var Kx = 1, Xx = 2, Zx = "[object Boolean]", Qx = "[object Date]", Jx = "[object Error]", eC = "[object Map]", tC = "[object Number]", nC = "[object RegExp]", rC = "[object Set]", iC = "[object String]", aC = "[object Symbol]", oC = "[object ArrayBuffer]", sC = "[object DataView]", Ef = Or ? Or.prototype : void 0, $s = Ef ? Ef.valueOf : void 0;
function uC(t, e, r, a, o, u, c) {
  switch (r) {
    case sC:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case oC:
      return !(t.byteLength != e.byteLength || !u(new Sf(t), new Sf(e)));
    case Zx:
    case Qx:
    case tC:
      return Dp(+t, +e);
    case Jx:
      return t.name == e.name && t.message == e.message;
    case nC:
    case iC:
      return t == e + "";
    case eC:
      var d = Vx;
    case rC:
      var g = a & Kx;
      if (d || (d = Su), t.size != e.size && !g)
        return !1;
      var v = c.get(t);
      if (v)
        return v == e;
      a |= Xx, c.set(t, e);
      var y = Lp(d(t), d(e), a, o, u, c);
      return c.delete(t), y;
    case aC:
      if ($s)
        return $s.call(t) == $s.call(e);
  }
  return !1;
}
function lC(t, e) {
  for (var r = -1, a = e.length, o = t.length; ++r < a; )
    t[o + r] = e[r];
  return t;
}
var Ra = Array.isArray;
function cC(t, e, r) {
  var a = e(t);
  return Ra(t) ? a : lC(a, r(t));
}
function fC(t, e) {
  for (var r = -1, a = t == null ? 0 : t.length, o = 0, u = []; ++r < a; ) {
    var c = t[r];
    e(c, r, t) && (u[o++] = c);
  }
  return u;
}
function dC() {
  return [];
}
var hC = Object.prototype, pC = hC.propertyIsEnumerable, Of = Object.getOwnPropertySymbols, vC = Of ? function(t) {
  return t == null ? [] : (t = Object(t), fC(Of(t), function(e) {
    return pC.call(t, e);
  }));
} : dC;
const gC = vC;
function _C(t, e) {
  for (var r = -1, a = Array(t); ++r < t; )
    a[r] = e(r);
  return a;
}
function di(t) {
  return t != null && typeof t == "object";
}
var mC = "[object Arguments]";
function Tf(t) {
  return di(t) && bi(t) == mC;
}
var Ip = Object.prototype, bC = Ip.hasOwnProperty, yC = Ip.propertyIsEnumerable, wC = Tf(/* @__PURE__ */ function() {
  return arguments;
}()) ? Tf : function(t) {
  return di(t) && bC.call(t, "callee") && !yC.call(t, "callee");
};
function xC() {
  return !1;
}
var Np = typeof exports == "object" && exports && !exports.nodeType && exports, kf = Np && typeof module == "object" && module && !module.nodeType && module, CC = kf && kf.exports === Np, Af = CC ? gn.Buffer : void 0, SC = Af ? Af.isBuffer : void 0, au = SC || xC, EC = 9007199254740991, OC = /^(?:0|[1-9]\d*)$/;
function TC(t, e) {
  var r = typeof t;
  return e = e ?? EC, !!e && (r == "number" || r != "symbol" && OC.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var kC = 9007199254740991;
function Bp(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= kC;
}
var AC = "[object Arguments]", $C = "[object Array]", PC = "[object Boolean]", RC = "[object Date]", FC = "[object Error]", DC = "[object Function]", MC = "[object Map]", LC = "[object Number]", IC = "[object Object]", NC = "[object RegExp]", BC = "[object Set]", WC = "[object String]", UC = "[object WeakMap]", jC = "[object ArrayBuffer]", HC = "[object DataView]", zC = "[object Float32Array]", qC = "[object Float64Array]", GC = "[object Int8Array]", YC = "[object Int16Array]", VC = "[object Int32Array]", KC = "[object Uint8Array]", XC = "[object Uint8ClampedArray]", ZC = "[object Uint16Array]", QC = "[object Uint32Array]", Ce = {};
Ce[zC] = Ce[qC] = Ce[GC] = Ce[YC] = Ce[VC] = Ce[KC] = Ce[XC] = Ce[ZC] = Ce[QC] = !0;
Ce[AC] = Ce[$C] = Ce[jC] = Ce[PC] = Ce[HC] = Ce[RC] = Ce[FC] = Ce[DC] = Ce[MC] = Ce[LC] = Ce[IC] = Ce[NC] = Ce[BC] = Ce[WC] = Ce[UC] = !1;
function JC(t) {
  return di(t) && Bp(t.length) && !!Ce[bi(t)];
}
function e5(t) {
  return function(e) {
    return t(e);
  };
}
var Wp = typeof exports == "object" && exports && !exports.nodeType && exports, si = Wp && typeof module == "object" && module && !module.nodeType && module, t5 = si && si.exports === Wp, Ps = t5 && $p.process, $f = function() {
  try {
    var t = si && si.require && si.require("util").types;
    return t || Ps && Ps.binding && Ps.binding("util");
  } catch {
  }
}(), Pf = $f && $f.isTypedArray, Up = Pf ? e5(Pf) : JC, n5 = Object.prototype, r5 = n5.hasOwnProperty;
function i5(t, e) {
  var r = Ra(t), a = !r && wC(t), o = !r && !a && au(t), u = !r && !a && !o && Up(t), c = r || a || o || u, d = c ? _C(t.length, String) : [], g = d.length;
  for (var v in t)
    (e || r5.call(t, v)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    TC(v, g))) && d.push(v);
  return d;
}
var a5 = Object.prototype;
function o5(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || a5;
  return t === r;
}
function s5(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var u5 = s5(Object.keys, Object), l5 = Object.prototype, c5 = l5.hasOwnProperty;
function f5(t) {
  if (!o5(t))
    return u5(t);
  var e = [];
  for (var r in Object(t))
    c5.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function d5(t) {
  return t != null && Bp(t.length) && !Fp(t);
}
function h5(t) {
  return d5(t) ? i5(t) : f5(t);
}
function Rf(t) {
  return cC(t, h5, gC);
}
var p5 = 1, v5 = Object.prototype, g5 = v5.hasOwnProperty;
function _5(t, e, r, a, o, u) {
  var c = r & p5, d = Rf(t), g = d.length, v = Rf(e), y = v.length;
  if (g != y && !c)
    return !1;
  for (var S = g; S--; ) {
    var R = d[S];
    if (!(c ? R in e : g5.call(e, R)))
      return !1;
  }
  var k = u.get(t), A = u.get(e);
  if (k && A)
    return k == e && A == t;
  var M = !0;
  u.set(t, e), u.set(e, t);
  for (var H = c; ++S < g; ) {
    R = d[S];
    var U = t[R], ee = e[R];
    if (a)
      var re = c ? a(ee, U, R, e, t, u) : a(U, ee, R, t, e, u);
    if (!(re === void 0 ? U === ee || o(U, ee, r, a, u) : re)) {
      M = !1;
      break;
    }
    H || (H = R == "constructor");
  }
  if (M && !H) {
    var ye = t.constructor, Q = e.constructor;
    ye != Q && "constructor" in t && "constructor" in e && !(typeof ye == "function" && ye instanceof ye && typeof Q == "function" && Q instanceof Q) && (M = !1);
  }
  return u.delete(t), u.delete(e), M;
}
var ou = Pr(gn, "DataView"), su = Pr(gn, "Promise"), uu = Pr(gn, "WeakMap"), Ff = "[object Map]", m5 = "[object Object]", Df = "[object Promise]", Mf = "[object Set]", Lf = "[object WeakMap]", If = "[object DataView]", b5 = tr(ou), y5 = tr(ci), w5 = tr(su), x5 = tr(Sr), C5 = tr(uu), Yn = bi;
(ou && Yn(new ou(new ArrayBuffer(1))) != If || ci && Yn(new ci()) != Ff || su && Yn(su.resolve()) != Df || Sr && Yn(new Sr()) != Mf || uu && Yn(new uu()) != Lf) && (Yn = function(t) {
  var e = bi(t), r = e == m5 ? t.constructor : void 0, a = r ? tr(r) : "";
  if (a)
    switch (a) {
      case b5:
        return If;
      case y5:
        return Ff;
      case w5:
        return Df;
      case x5:
        return Mf;
      case C5:
        return Lf;
    }
  return e;
});
const Nf = Yn;
var S5 = 1, Bf = "[object Arguments]", Wf = "[object Array]", va = "[object Object]", E5 = Object.prototype, Uf = E5.hasOwnProperty;
function O5(t, e, r, a, o, u) {
  var c = Ra(t), d = Ra(e), g = c ? Wf : Nf(t), v = d ? Wf : Nf(e);
  g = g == Bf ? va : g, v = v == Bf ? va : v;
  var y = g == va, S = v == va, R = g == v;
  if (R && au(t)) {
    if (!au(e))
      return !1;
    c = !0, y = !1;
  }
  if (R && !y)
    return u || (u = new Rn()), c || Up(t) ? Lp(t, e, r, a, o, u) : uC(t, e, g, r, a, o, u);
  if (!(r & S5)) {
    var k = y && Uf.call(t, "__wrapped__"), A = S && Uf.call(e, "__wrapped__");
    if (k || A) {
      var M = k ? t.value() : t, H = A ? e.value() : e;
      return u || (u = new Rn()), o(M, H, r, a, u);
    }
  }
  return R ? (u || (u = new Rn()), _5(t, e, r, a, o, u)) : !1;
}
function jp(t, e, r, a, o) {
  return t === e ? !0 : t == null || e == null || !di(t) && !di(e) ? t !== t && e !== e : O5(t, e, r, a, jp, o);
}
function T5(t, e) {
  return jp(t, e);
}
var Hp = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
const jf = "application/font-woff", Hf = "image/jpeg", k5 = {
  woff: jf,
  woff2: jf,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Hf,
  jpeg: Hf,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml"
};
function A5(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function Fa(t) {
  const e = A5(t).toLowerCase();
  return k5[e] || "";
}
function $5(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), a = r.createElement("base"), o = r.createElement("a");
  return r.head.appendChild(a), r.body.appendChild(o), e && (a.href = e), o.href = t, o.href;
}
function zp(t) {
  return t.search(/^(data:)/) !== -1;
}
function Da(t, e) {
  return `data:${e};base64,${t}`;
}
function P5(t) {
  return t.split(/,/)[1];
}
const R5 = /* @__PURE__ */ function() {
  let e = 0;
  const r = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * Math.pow(36, 4) << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${r()}${e}`);
}(), F5 = (t) => (e) => new Promise((r) => setTimeout(() => r(e), t));
function Dn(t) {
  const e = [];
  for (let r = 0, a = t.length; r < a; r += 1)
    e.push(t[r]);
  return e;
}
function Ma(t, e) {
  const r = window.getComputedStyle(t).getPropertyValue(e);
  return parseFloat(r.replace("px", ""));
}
function D5(t) {
  const e = Ma(t, "border-left-width"), r = Ma(t, "border-right-width");
  return t.clientWidth + e + r;
}
function M5(t) {
  const e = Ma(t, "border-top-width"), r = Ma(t, "border-bottom-width");
  return t.clientHeight + e + r;
}
function L5() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const r = e && e.env ? e.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
function I5(t) {
  return t.toBlob ? new Promise((e) => t.toBlob(e)) : new Promise((e) => {
    const r = window.atob(t.toDataURL().split(",")[1]), a = r.length, o = new Uint8Array(a);
    for (let u = 0; u < a; u += 1)
      o[u] = r.charCodeAt(u);
    e(new Blob([o], { type: "image/png" }));
  });
}
function Eu(t) {
  return new Promise((e, r) => {
    const a = new Image();
    a.onload = () => e(a), a.onerror = r, a.crossOrigin = "anonymous", a.src = t;
  });
}
function N5(t) {
  return Hp(this, void 0, void 0, function* () {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
  });
}
function B5(t, e, r) {
  return Hp(this, void 0, void 0, function* () {
    const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), u = document.createElementNS(a, "foreignObject");
    return o.setAttribute("width", `${e}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${e} ${r}`), u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("externalResourcesRequired", "true"), o.appendChild(u), u.appendChild(t), N5(o);
  });
}
const Rs = {};
function W5(t) {
  let e = t.replace(/\?.*/, "");
  return /ttf|otf|eot|woff2?/i.test(e) && (e = e.replace(/.*\//, "")), e;
}
function Ou(t, e) {
  const r = W5(t);
  if (Rs[r] != null)
    return Rs[r];
  e.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  const a = (u) => {
    let c = "";
    if (e.imagePlaceholder) {
      const g = e.imagePlaceholder.split(/,/);
      g && g[1] && (c = g[1]);
    }
    let d = `Failed to fetch resource: ${t}`;
    return u && (d = typeof u == "string" ? u : u.message), d && console.error(d), {
      blob: c,
      contentType: ""
    };
  }, o = window.fetch(t).then((u) => (
    // eslint-disable-next-line promise/no-nesting
    u.blob().then((c) => ({
      blob: c,
      contentType: u.headers.get("Content-Type") || ""
    }))
  )).then(({ blob: u, contentType: c }) => new Promise((d, g) => {
    const v = new FileReader();
    v.onloadend = () => d({
      contentType: c,
      blob: v.result
    }), v.onerror = g, v.readAsDataURL(u);
  })).then(({ blob: u, contentType: c }) => ({
    contentType: c,
    blob: P5(u)
  })).catch(a);
  return Rs[r] = o, o;
}
function U5(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function j5(t) {
  return Dn(t).map((e) => {
    const r = t.getPropertyValue(e), a = t.getPropertyPriority(e);
    return `${e}: ${r}${a ? " !important" : ""};`;
  }).join(" ");
}
function H5(t, e, r) {
  const a = `.${t}:${e}`, o = r.cssText ? U5(r) : j5(r);
  return document.createTextNode(`${a}{${o}}`);
}
function zf(t, e, r) {
  const a = window.getComputedStyle(t, r), o = a.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const u = R5();
  try {
    e.className = `${e.className} ${u}`;
  } catch {
    return;
  }
  const c = document.createElement("style");
  c.appendChild(H5(u, r, a)), e.appendChild(c);
}
function z5(t, e) {
  zf(t, e, ":before"), zf(t, e, ":after");
}
var Rr = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
function q5(t) {
  return Rr(this, void 0, void 0, function* () {
    const e = t.toDataURL();
    return e === "data:," ? Promise.resolve(t.cloneNode(!1)) : Eu(e);
  });
}
function G5(t, e) {
  return Rr(this, void 0, void 0, function* () {
    return Promise.resolve(t.poster).then((r) => Ou(r, e)).then((r) => Da(r.blob, Fa(t.poster) || r.contentType)).then((r) => Eu(r));
  });
}
function Y5(t, e) {
  return Rr(this, void 0, void 0, function* () {
    return t instanceof HTMLCanvasElement ? q5(t) : t instanceof HTMLVideoElement && t.poster ? G5(t, e) : Promise.resolve(t.cloneNode(!1));
  });
}
const V5 = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
function K5(t, e, r) {
  var a;
  return Rr(this, void 0, void 0, function* () {
    const o = V5(t) && t.assignedNodes ? Dn(t.assignedNodes()) : Dn(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes);
    return o.length === 0 ? Promise.resolve(e) : o.reduce((u, c) => u.then(() => qp(c, r)).then((d) => {
      d && e.appendChild(d);
    }), Promise.resolve()).then(() => e);
  });
}
function X5(t, e) {
  const r = window.getComputedStyle(t), a = e.style;
  a && (r.cssText ? a.cssText = r.cssText : Dn(r).forEach((o) => {
    a.setProperty(o, r.getPropertyValue(o), r.getPropertyPriority(o));
  }));
}
function Z5(t, e) {
  t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value);
}
function Q5(t, e) {
  return Rr(this, void 0, void 0, function* () {
    return e instanceof Element ? Promise.resolve().then(() => X5(t, e)).then(() => z5(t, e)).then(() => Z5(t, e)).then(() => e) : Promise.resolve(e);
  });
}
function qp(t, e, r) {
  return Rr(this, void 0, void 0, function* () {
    return !r && e.filter && !e.filter(t) ? Promise.resolve(null) : Promise.resolve(t).then((a) => Y5(a, e)).then((a) => K5(t, a, e)).then((a) => Q5(t, a));
  });
}
var J5 = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
const Gp = /url\((['"]?)([^'"]+?)\1\)/g, e3 = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g, t3 = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function n3(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function r3(t) {
  const e = [];
  return t.replace(Gp, (r, a, o) => (e.push(o), r)), e.filter((r) => !zp(r));
}
function i3(t, e, r, a, o) {
  const u = r ? $5(e, r) : e;
  return Promise.resolve(u).then((c) => o ? o(c) : Ou(c, a)).then((c) => typeof c == "string" ? Da(c, Fa(e)) : Da(c.blob, Fa(e) || c.contentType)).then((c) => t.replace(n3(e), `$1${c}$3`)).then((c) => c, () => u);
}
function a3(t, { preferredFontFormat: e }) {
  return e ? t.replace(t3, (r) => {
    for (; ; ) {
      const [a, , o] = e3.exec(r) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${a};`;
    }
  }) : t;
}
function Yp(t) {
  return t.search(Gp) !== -1;
}
function Vp(t, e, r) {
  return J5(this, void 0, void 0, function* () {
    if (!Yp(t))
      return Promise.resolve(t);
    const a = a3(t, r);
    return Promise.resolve(a).then(r3).then((o) => o.reduce((u, c) => (
      // eslint-disable-next-line promise/no-nesting
      u.then((d) => i3(d, c, e, r))
    ), Promise.resolve(a)));
  });
}
var Va = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
function o3(t, e) {
  var r;
  return Va(this, void 0, void 0, function* () {
    const a = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue("background");
    return a ? Promise.resolve(a).then((o) => Vp(o, null, e)).then((o) => (t.style.setProperty("background", o, t.style.getPropertyPriority("background")), t)) : Promise.resolve(t);
  });
}
function s3(t, e) {
  return Va(this, void 0, void 0, function* () {
    if (!(t instanceof HTMLImageElement) || zp(t.src))
      return Promise.resolve(t);
    const { src: r } = t;
    return Promise.resolve(r).then((a) => Ou(a, e)).then((a) => Da(a.blob, Fa(r) || a.contentType)).then((a) => new Promise((o, u) => {
      t.onload = o, t.onerror = u, t.srcset = "", t.src = a;
    })).then(() => t, () => t);
  });
}
function u3(t, e) {
  return Va(this, void 0, void 0, function* () {
    const a = Dn(t.childNodes).map((o) => Kp(o, e));
    return Promise.all(a).then(() => t);
  });
}
function Kp(t, e) {
  return Va(this, void 0, void 0, function* () {
    return t instanceof Element ? Promise.resolve(t).then((r) => o3(r, e)).then((r) => s3(r, e)).then((r) => u3(r, e)) : Promise.resolve(t);
  });
}
function l3(t, e) {
  const { style: r } = t;
  e.backgroundColor && (r.backgroundColor = e.backgroundColor), e.width && (r.width = `${e.width}px`), e.height && (r.height = `${e.height}px`);
  const a = e.style;
  return a != null && Object.keys(a).forEach((o) => {
    r[o] = a[o];
  }), t;
}
var yi = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
const qf = {};
function Gf(t) {
  const e = qf[t];
  if (e != null)
    return e;
  const r = window.fetch(t).then((a) => ({
    url: t,
    cssText: a.text()
  }));
  return qf[t] = r, r;
}
function Yf(t) {
  return yi(this, void 0, void 0, function* () {
    return t.cssText.then((e) => {
      let r = e;
      const a = /url\(["']?([^"')]+)["']?\)/g, u = (r.match(/url\([^)]+\)/g) || []).map((c) => {
        let d = c.replace(a, "$1");
        return d.startsWith("https://") || (d = new URL(d, t.url).href), window.fetch(d).then((g) => g.blob()).then((g) => new Promise((v, y) => {
          const S = new FileReader();
          S.onloadend = () => {
            r = r.replace(c, `url(${S.result})`), v([c, S.result]);
          }, S.onerror = y, S.readAsDataURL(g);
        }));
      });
      return Promise.all(u).then(() => r);
    });
  });
}
function Vf(t) {
  if (t == null)
    return [];
  const e = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let a = t.replace(r, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const g = o.exec(a);
    if (g === null)
      break;
    e.push(g[0]);
  }
  a = a.replace(o, "");
  const u = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, c = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", d = new RegExp(c, "gi");
  for (; ; ) {
    let g = u.exec(a);
    if (g === null) {
      if (g = d.exec(a), g === null)
        break;
      u.lastIndex = d.lastIndex;
    } else
      d.lastIndex = u.lastIndex;
    e.push(g[0]);
  }
  return e;
}
function c3(t) {
  return yi(this, void 0, void 0, function* () {
    const e = [], r = [];
    return t.forEach((a) => {
      if ("cssRules" in a)
        try {
          Dn(a.cssRules).forEach((o, u) => {
            if (o.type === CSSRule.IMPORT_RULE) {
              let c = u + 1;
              const d = o.href, g = Gf(d).then((v) => v ? Yf(v) : "").then((v) => Vf(v).forEach((y) => {
                try {
                  a.insertRule(y, y.startsWith("@import") ? c += 1 : a.cssRules.length);
                } catch (S) {
                  console.error("Error inserting rule from remote css", {
                    rule: y,
                    error: S
                  });
                }
              })).catch((v) => {
                console.error("Error loading remote css", v.toString());
              });
              r.push(g);
            }
          });
        } catch (o) {
          const u = t.find((c) => c.href == null) || document.styleSheets[0];
          a.href != null && r.push(Gf(a.href).then((c) => c ? Yf(c) : "").then((c) => Vf(c).forEach((d) => {
            u.insertRule(d, a.cssRules.length);
          })).catch((c) => {
            console.error("Error loading remote stylesheet", c.toString());
          })), console.error("Error inlining remote css file", o.toString());
        }
    }), Promise.all(r).then(() => (t.forEach((a) => {
      if ("cssRules" in a)
        try {
          Dn(a.cssRules).forEach((o) => {
            e.push(o);
          });
        } catch (o) {
          console.error(`Error while reading CSS rules from ${a.href}`, o.toString());
        }
    }), e));
  });
}
function f3(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Yp(e.style.getPropertyValue("src")));
}
function d3(t) {
  return yi(this, void 0, void 0, function* () {
    return new Promise((e, r) => {
      t.ownerDocument == null && r(new Error("Provided element is not within a Document")), e(Dn(t.ownerDocument.styleSheets));
    }).then((e) => c3(e)).then(f3);
  });
}
function h3(t, e) {
  return yi(this, void 0, void 0, function* () {
    return d3(t).then((r) => Promise.all(r.map((a) => {
      const o = a.parentStyleSheet ? a.parentStyleSheet.href : null;
      return Vp(a.cssText, o, e);
    }))).then((r) => r.join(`
`));
  });
}
function p3(t, e) {
  return yi(this, void 0, void 0, function* () {
    return (e.fontEmbedCSS != null ? Promise.resolve(e.fontEmbedCSS) : h3(t, e)).then((r) => {
      const a = document.createElement("style"), o = document.createTextNode(r);
      return a.appendChild(o), t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), t;
    });
  });
}
var Tu = function(t, e, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(y) {
      try {
        v(a.next(y));
      } catch (S) {
        c(S);
      }
    }
    function g(y) {
      try {
        v(a.throw(y));
      } catch (S) {
        c(S);
      }
    }
    function v(y) {
      y.done ? u(y.value) : o(y.value).then(d, g);
    }
    v((a = a.apply(t, e || [])).next());
  });
};
function Xp(t, e = {}) {
  const r = e.width || D5(t), a = e.height || M5(t);
  return { width: r, height: a };
}
function v3(t, e = {}) {
  return Tu(this, void 0, void 0, function* () {
    const { width: r, height: a } = Xp(t, e);
    return Promise.resolve(t).then((o) => qp(o, e, !0)).then((o) => p3(o, e)).then((o) => Kp(o, e)).then((o) => l3(o, e)).then((o) => B5(o, r, a));
  });
}
function g3(t, e = {}) {
  return Tu(this, void 0, void 0, function* () {
    return v3(t, e).then(Eu).then(F5(100)).then((r) => {
      const a = document.createElement("canvas"), o = a.getContext("2d"), u = e.pixelRatio || L5(), { width: c, height: d } = Xp(t, e), g = e.canvasWidth || c, v = e.canvasHeight || d;
      return a.width = g * u, a.height = v * u, a.style.width = `${g}`, a.style.height = `${v}`, e.backgroundColor && (o.fillStyle = e.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(r, 0, 0, a.width, a.height), a;
    });
  });
}
function _3(t, e = {}) {
  return Tu(this, void 0, void 0, function* () {
    return g3(t, e).then(I5);
  });
}
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Zp = { exports: {} };
(function(t, e) {
  (function(r, a) {
    t.exports = a();
  })(typeof self < "u" ? self : it, function() {
    return function(r) {
      var a = {};
      function o(u) {
        if (a[u])
          return a[u].exports;
        var c = a[u] = { i: u, l: !1, exports: {} };
        return r[u].call(c.exports, c, c.exports, o), c.l = !0, c.exports;
      }
      return o.m = r, o.c = a, o.d = function(u, c, d) {
        o.o(u, c) || Object.defineProperty(u, c, { enumerable: !0, get: d });
      }, o.r = function(u) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
      }, o.t = function(u, c) {
        if (1 & c && (u = o(u)), 8 & c || 4 & c && typeof u == "object" && u && u.__esModule)
          return u;
        var d = /* @__PURE__ */ Object.create(null);
        if (o.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: u }), 2 & c && typeof u != "string")
          for (var g in u)
            o.d(d, g, (function(v) {
              return u[v];
            }).bind(null, g));
        return d;
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
      }, methods: { focusIn: function(k) {
        if (this.isActive && k.target !== this.$el && !this.$el.contains(k.target)) {
          var A = this.container ? this.container : this.isFullPage ? null : this.$el.parentElement;
          (this.isFullPage || A && A.contains(k.target)) && (k.preventDefault(), this.$el.focus());
        }
      } }, beforeDestroy: function() {
        document.removeEventListener("focusin", this.focusIn);
      } };
      function d(k, A, M, H, U, ee, re, ye) {
        var Q, B = typeof k == "function" ? k.options : k;
        if (A && (B.render = A, B.staticRenderFns = M, B._compiled = !0), H && (B.functional = !0), ee && (B._scopeId = "data-v-" + ee), re ? (Q = function(K) {
          (K = K || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (K = __VUE_SSR_CONTEXT__), U && U.call(this, K), K && K._registeredComponents && K._registeredComponents.add(re);
        }, B._ssrRegister = Q) : U && (Q = ye ? function() {
          U.call(this, (B.functional ? this.parent : this).$root.$options.shadowRoot);
        } : U), Q)
          if (B.functional) {
            B._injectStyles = Q;
            var ae = B.render;
            B.render = function(K, De) {
              return Q.call(De), ae(K, De);
            };
          } else {
            var ve = B.beforeCreate;
            B.beforeCreate = ve ? [].concat(ve, Q) : [Q];
          }
        return { exports: k, options: B };
      }
      var g = d({ name: "spinner", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 64 }, width: { type: Number, default: 64 } } }, function() {
        var k = this.$createElement, A = this._self._c || k;
        return A("svg", { attrs: { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, stroke: this.color } }, [A("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [A("g", { attrs: { transform: "translate(1 1)", "stroke-width": "2" } }, [A("circle", { attrs: { "stroke-opacity": ".25", cx: "18", cy: "18", r: "18" } }), A("path", { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } }, [A("animateTransform", { attrs: { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.8s", repeatCount: "indefinite" } })], 1)])])]);
      }, [], !1, null, null, null).exports, v = d({ name: "dots", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 240 }, width: { type: Number, default: 60 } } }, function() {
        var k = this.$createElement, A = this._self._c || k;
        return A("svg", { attrs: { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: this.color, width: this.width, height: this.height } }, [A("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [A("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })]), A("circle", { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" } }, [A("animate", { attrs: { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" } })]), A("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [A("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })])]);
      }, [], !1, null, null, null).exports, y = d({ name: "bars", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 40 }, width: { type: Number, default: 40 } } }, function() {
        var k = this.$createElement, A = this._self._c || k;
        return A("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", height: this.height, width: this.width, fill: this.color } }, [A("rect", { attrs: { x: "0", y: "13", width: "4", height: "5" } }, [A("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } })]), A("rect", { attrs: { x: "10", y: "13", width: "4", height: "5" } }, [A("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } })]), A("rect", { attrs: { x: "20", y: "13", width: "4", height: "5" } }, [A("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } }), A("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } })])]);
      }, [], !1, null, null, null).exports, S = d({ name: "vue-loading", mixins: [c], props: { active: Boolean, programmatic: Boolean, container: [Object, Function, u], isFullPage: { type: Boolean, default: !0 }, enforceFocus: { type: Boolean, default: !0 }, lockScroll: { type: Boolean, default: !1 }, transition: { type: String, default: "fade" }, canCancel: Boolean, onCancel: { type: Function, default: function() {
      } }, color: String, backgroundColor: String, blur: { type: String, default: "2px" }, opacity: Number, width: Number, height: Number, zIndex: Number, loader: { type: String, default: "spinner" } }, data: function() {
        return { isActive: this.active };
      }, components: { Spinner: g, Dots: v, Bars: y }, beforeMount: function() {
        this.programmatic && (this.container ? (this.isFullPage = !1, this.container.appendChild(this.$el)) : document.body.appendChild(this.$el));
      }, mounted: function() {
        this.programmatic && (this.isActive = !0), document.addEventListener("keyup", this.keyPress);
      }, methods: { cancel: function() {
        this.canCancel && this.isActive && (this.hide(), this.onCancel.apply(null, arguments));
      }, hide: function() {
        var k = this;
        this.$emit("hide"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function() {
          var A;
          k.$destroy(), (A = k.$el).remove !== void 0 ? A.remove() : A.parentNode.removeChild(A);
        }, 150));
      }, disableScroll: function() {
        this.isFullPage && this.lockScroll && document.body.classList.add("vld-shown");
      }, enableScroll: function() {
        this.isFullPage && this.lockScroll && document.body.classList.remove("vld-shown");
      }, keyPress: function(k) {
        k.keyCode === 27 && this.cancel();
      } }, watch: { active: function(k) {
        this.isActive = k;
      }, isActive: function(k) {
        k ? this.disableScroll() : this.enableScroll();
      } }, computed: { bgStyle: function() {
        return { background: this.backgroundColor, opacity: this.opacity, backdropFilter: "blur(".concat(this.blur, ")") };
      } }, beforeDestroy: function() {
        document.removeEventListener("keyup", this.keyPress);
      } }, function() {
        var k = this, A = k.$createElement, M = k._self._c || A;
        return M("transition", { attrs: { name: k.transition } }, [M("div", { directives: [{ name: "show", rawName: "v-show", value: k.isActive, expression: "isActive" }], staticClass: "vld-overlay is-active", class: { "is-full-page": k.isFullPage }, style: { zIndex: k.zIndex }, attrs: { tabindex: "0", "aria-busy": k.isActive, "aria-label": "Loading" } }, [M("div", { staticClass: "vld-background", style: k.bgStyle, on: { click: function(H) {
          return H.preventDefault(), k.cancel(H);
        } } }), M("div", { staticClass: "vld-icon" }, [k._t("before"), k._t("default", [M(k.loader, { tag: "component", attrs: { color: k.color, width: k.width, height: k.height } })]), k._t("after")], 2)])]);
      }, [], !1, null, null, null).exports, R = function(k) {
        var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return { show: function() {
          var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : A, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M, ee = { programmatic: !0 }, re = Object.assign({}, A, H, ee), ye = new (k.extend(S))({ el: document.createElement("div"), propsData: re }), Q = Object.assign({}, M, U);
          return Object.keys(Q).map(function(B) {
            ye.$slots[B] = Q[B];
          }), ye;
        } };
      };
      o(0), S.install = function(k) {
        var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, H = R(k, A, M);
        k.$loading = H, k.prototype.$loading = H;
      }, a.default = S;
    }]).default;
  });
})(Zp);
var m3 = Zp.exports;
const b3 = /* @__PURE__ */ wi(m3);
var La = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
La.exports;
(function(t, e) {
  (function() {
    var r, a = "4.17.21", o = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", v = 500, y = "__lodash_placeholder__", S = 1, R = 2, k = 4, A = 1, M = 2, H = 1, U = 2, ee = 4, re = 8, ye = 16, Q = 32, B = 64, ae = 128, ve = 256, K = 512, De = 30, Ht = "...", Dr = 800, Ja = 16, xi = 1, eo = 2, Mr = 3, en = 1 / 0, zt = 9007199254740991, Ci = 17976931348623157e292, fe = NaN, Ye = 4294967295, Ve = Ye - 1, to = Ye >>> 1, no = [
      ["ary", ae],
      ["bind", H],
      ["bindKey", U],
      ["curry", re],
      ["curryRight", ye],
      ["flip", K],
      ["partial", Q],
      ["partialRight", B],
      ["rearg", ve]
    ], Me = "[object Arguments]", qt = "[object Array]", Si = "[object AsyncFunction]", mn = "[object Boolean]", Be = "[object Date]", Pt = "[object DOMException]", rr = "[object Error]", ir = "[object Function]", _ = "[object GeneratorFunction]", x = "[object Map]", b = "[object Number]", D = "[object Null]", L = "[object Object]", N = "[object Promise]", oe = "[object Proxy]", de = "[object RegExp]", se = "[object Set]", Le = "[object String]", Gt = "[object Symbol]", ut = "[object Undefined]", Lr = "[object WeakMap]", x0 = "[object WeakSet]", Ir = "[object ArrayBuffer]", ar = "[object DataView]", ro = "[object Float32Array]", io = "[object Float64Array]", ao = "[object Int8Array]", oo = "[object Int16Array]", so = "[object Int32Array]", uo = "[object Uint8Array]", lo = "[object Uint8ClampedArray]", co = "[object Uint16Array]", fo = "[object Uint32Array]", C0 = /\b__p \+= '';/g, S0 = /\b(__p \+=) '' \+/g, E0 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Bu = /&(?:amp|lt|gt|quot|#39);/g, Wu = /[&<>"']/g, O0 = RegExp(Bu.source), T0 = RegExp(Wu.source), k0 = /<%-([\s\S]+?)%>/g, A0 = /<%([\s\S]+?)%>/g, Uu = /<%=([\s\S]+?)%>/g, $0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, P0 = /^\w*$/, R0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ho = /[\\^$.*+?()[\]{}|]/g, F0 = RegExp(ho.source), po = /^\s+/, D0 = /\s/, M0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, L0 = /\{\n\/\* \[wrapped with (.+)\] \*/, I0 = /,? & /, N0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, B0 = /[()=,{}\[\]\/\s]/, W0 = /\\(\\)?/g, U0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ju = /\w*$/, j0 = /^[-+]0x[0-9a-f]+$/i, H0 = /^0b[01]+$/i, z0 = /^\[object .+?Constructor\]$/, q0 = /^0o[0-7]+$/i, G0 = /^(?:0|[1-9]\d*)$/, Y0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ei = /($^)/, V0 = /['\n\r\u2028\u2029\\]/g, Oi = "\\ud800-\\udfff", K0 = "\\u0300-\\u036f", X0 = "\\ufe20-\\ufe2f", Z0 = "\\u20d0-\\u20ff", Hu = K0 + X0 + Z0, zu = "\\u2700-\\u27bf", qu = "a-z\\xdf-\\xf6\\xf8-\\xff", Q0 = "\\xac\\xb1\\xd7\\xf7", J0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ev = "\\u2000-\\u206f", tv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Gu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Yu = "\\ufe0e\\ufe0f", Vu = Q0 + J0 + ev + tv, vo = "['’]", nv = "[" + Oi + "]", Ku = "[" + Vu + "]", Ti = "[" + Hu + "]", Xu = "\\d+", rv = "[" + zu + "]", Zu = "[" + qu + "]", Qu = "[^" + Oi + Vu + Xu + zu + qu + Gu + "]", go = "\\ud83c[\\udffb-\\udfff]", iv = "(?:" + Ti + "|" + go + ")", Ju = "[^" + Oi + "]", _o = "(?:\\ud83c[\\udde6-\\uddff]){2}", mo = "[\\ud800-\\udbff][\\udc00-\\udfff]", or = "[" + Gu + "]", el = "\\u200d", tl = "(?:" + Zu + "|" + Qu + ")", av = "(?:" + or + "|" + Qu + ")", nl = "(?:" + vo + "(?:d|ll|m|re|s|t|ve))?", rl = "(?:" + vo + "(?:D|LL|M|RE|S|T|VE))?", il = iv + "?", al = "[" + Yu + "]?", ov = "(?:" + el + "(?:" + [Ju, _o, mo].join("|") + ")" + al + il + ")*", sv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", uv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ol = al + il + ov, lv = "(?:" + [rv, _o, mo].join("|") + ")" + ol, cv = "(?:" + [Ju + Ti + "?", Ti, _o, mo, nv].join("|") + ")", fv = RegExp(vo, "g"), dv = RegExp(Ti, "g"), bo = RegExp(go + "(?=" + go + ")|" + cv + ol, "g"), hv = RegExp([
      or + "?" + Zu + "+" + nl + "(?=" + [Ku, or, "$"].join("|") + ")",
      av + "+" + rl + "(?=" + [Ku, or + tl, "$"].join("|") + ")",
      or + "?" + tl + "+" + nl,
      or + "+" + rl,
      uv,
      sv,
      Xu,
      lv
    ].join("|"), "g"), pv = RegExp("[" + el + Oi + Hu + Yu + "]"), vv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gv = [
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
    ], _v = -1, xe = {};
    xe[ro] = xe[io] = xe[ao] = xe[oo] = xe[so] = xe[uo] = xe[lo] = xe[co] = xe[fo] = !0, xe[Me] = xe[qt] = xe[Ir] = xe[mn] = xe[ar] = xe[Be] = xe[rr] = xe[ir] = xe[x] = xe[b] = xe[L] = xe[de] = xe[se] = xe[Le] = xe[Lr] = !1;
    var we = {};
    we[Me] = we[qt] = we[Ir] = we[ar] = we[mn] = we[Be] = we[ro] = we[io] = we[ao] = we[oo] = we[so] = we[x] = we[b] = we[L] = we[de] = we[se] = we[Le] = we[Gt] = we[uo] = we[lo] = we[co] = we[fo] = !0, we[rr] = we[ir] = we[Lr] = !1;
    var mv = {
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
    }, bv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, yv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, wv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, xv = parseFloat, Cv = parseInt, sl = typeof it == "object" && it && it.Object === Object && it, Sv = typeof self == "object" && self && self.Object === Object && self, We = sl || Sv || Function("return this")(), yo = e && !e.nodeType && e, Mn = yo && !0 && t && !t.nodeType && t, ul = Mn && Mn.exports === yo, wo = ul && sl.process, wt = function() {
      try {
        var C = Mn && Mn.require && Mn.require("util").types;
        return C || wo && wo.binding && wo.binding("util");
      } catch {
      }
    }(), ll = wt && wt.isArrayBuffer, cl = wt && wt.isDate, fl = wt && wt.isMap, dl = wt && wt.isRegExp, hl = wt && wt.isSet, pl = wt && wt.isTypedArray;
    function lt(C, T, O) {
      switch (O.length) {
        case 0:
          return C.call(T);
        case 1:
          return C.call(T, O[0]);
        case 2:
          return C.call(T, O[0], O[1]);
        case 3:
          return C.call(T, O[0], O[1], O[2]);
      }
      return C.apply(T, O);
    }
    function Ev(C, T, O, W) {
      for (var Y = -1, ue = C == null ? 0 : C.length; ++Y < ue; ) {
        var Re = C[Y];
        T(W, Re, O(Re), C);
      }
      return W;
    }
    function xt(C, T) {
      for (var O = -1, W = C == null ? 0 : C.length; ++O < W && T(C[O], O, C) !== !1; )
        ;
      return C;
    }
    function Ov(C, T) {
      for (var O = C == null ? 0 : C.length; O-- && T(C[O], O, C) !== !1; )
        ;
      return C;
    }
    function vl(C, T) {
      for (var O = -1, W = C == null ? 0 : C.length; ++O < W; )
        if (!T(C[O], O, C))
          return !1;
      return !0;
    }
    function bn(C, T) {
      for (var O = -1, W = C == null ? 0 : C.length, Y = 0, ue = []; ++O < W; ) {
        var Re = C[O];
        T(Re, O, C) && (ue[Y++] = Re);
      }
      return ue;
    }
    function ki(C, T) {
      var O = C == null ? 0 : C.length;
      return !!O && sr(C, T, 0) > -1;
    }
    function xo(C, T, O) {
      for (var W = -1, Y = C == null ? 0 : C.length; ++W < Y; )
        if (O(T, C[W]))
          return !0;
      return !1;
    }
    function Se(C, T) {
      for (var O = -1, W = C == null ? 0 : C.length, Y = Array(W); ++O < W; )
        Y[O] = T(C[O], O, C);
      return Y;
    }
    function yn(C, T) {
      for (var O = -1, W = T.length, Y = C.length; ++O < W; )
        C[Y + O] = T[O];
      return C;
    }
    function Co(C, T, O, W) {
      var Y = -1, ue = C == null ? 0 : C.length;
      for (W && ue && (O = C[++Y]); ++Y < ue; )
        O = T(O, C[Y], Y, C);
      return O;
    }
    function Tv(C, T, O, W) {
      var Y = C == null ? 0 : C.length;
      for (W && Y && (O = C[--Y]); Y--; )
        O = T(O, C[Y], Y, C);
      return O;
    }
    function So(C, T) {
      for (var O = -1, W = C == null ? 0 : C.length; ++O < W; )
        if (T(C[O], O, C))
          return !0;
      return !1;
    }
    var kv = Eo("length");
    function Av(C) {
      return C.split("");
    }
    function $v(C) {
      return C.match(N0) || [];
    }
    function gl(C, T, O) {
      var W;
      return O(C, function(Y, ue, Re) {
        if (T(Y, ue, Re))
          return W = ue, !1;
      }), W;
    }
    function Ai(C, T, O, W) {
      for (var Y = C.length, ue = O + (W ? 1 : -1); W ? ue-- : ++ue < Y; )
        if (T(C[ue], ue, C))
          return ue;
      return -1;
    }
    function sr(C, T, O) {
      return T === T ? jv(C, T, O) : Ai(C, _l, O);
    }
    function Pv(C, T, O, W) {
      for (var Y = O - 1, ue = C.length; ++Y < ue; )
        if (W(C[Y], T))
          return Y;
      return -1;
    }
    function _l(C) {
      return C !== C;
    }
    function ml(C, T) {
      var O = C == null ? 0 : C.length;
      return O ? To(C, T) / O : fe;
    }
    function Eo(C) {
      return function(T) {
        return T == null ? r : T[C];
      };
    }
    function Oo(C) {
      return function(T) {
        return C == null ? r : C[T];
      };
    }
    function bl(C, T, O, W, Y) {
      return Y(C, function(ue, Re, me) {
        O = W ? (W = !1, ue) : T(O, ue, Re, me);
      }), O;
    }
    function Rv(C, T) {
      var O = C.length;
      for (C.sort(T); O--; )
        C[O] = C[O].value;
      return C;
    }
    function To(C, T) {
      for (var O, W = -1, Y = C.length; ++W < Y; ) {
        var ue = T(C[W]);
        ue !== r && (O = O === r ? ue : O + ue);
      }
      return O;
    }
    function ko(C, T) {
      for (var O = -1, W = Array(C); ++O < C; )
        W[O] = T(O);
      return W;
    }
    function Fv(C, T) {
      return Se(T, function(O) {
        return [O, C[O]];
      });
    }
    function yl(C) {
      return C && C.slice(0, Sl(C) + 1).replace(po, "");
    }
    function ct(C) {
      return function(T) {
        return C(T);
      };
    }
    function Ao(C, T) {
      return Se(T, function(O) {
        return C[O];
      });
    }
    function Nr(C, T) {
      return C.has(T);
    }
    function wl(C, T) {
      for (var O = -1, W = C.length; ++O < W && sr(T, C[O], 0) > -1; )
        ;
      return O;
    }
    function xl(C, T) {
      for (var O = C.length; O-- && sr(T, C[O], 0) > -1; )
        ;
      return O;
    }
    function Dv(C, T) {
      for (var O = C.length, W = 0; O--; )
        C[O] === T && ++W;
      return W;
    }
    var Mv = Oo(mv), Lv = Oo(bv);
    function Iv(C) {
      return "\\" + wv[C];
    }
    function Nv(C, T) {
      return C == null ? r : C[T];
    }
    function ur(C) {
      return pv.test(C);
    }
    function Bv(C) {
      return vv.test(C);
    }
    function Wv(C) {
      for (var T, O = []; !(T = C.next()).done; )
        O.push(T.value);
      return O;
    }
    function $o(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(W, Y) {
        O[++T] = [Y, W];
      }), O;
    }
    function Cl(C, T) {
      return function(O) {
        return C(T(O));
      };
    }
    function wn(C, T) {
      for (var O = -1, W = C.length, Y = 0, ue = []; ++O < W; ) {
        var Re = C[O];
        (Re === T || Re === y) && (C[O] = y, ue[Y++] = O);
      }
      return ue;
    }
    function $i(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(W) {
        O[++T] = W;
      }), O;
    }
    function Uv(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(W) {
        O[++T] = [W, W];
      }), O;
    }
    function jv(C, T, O) {
      for (var W = O - 1, Y = C.length; ++W < Y; )
        if (C[W] === T)
          return W;
      return -1;
    }
    function Hv(C, T, O) {
      for (var W = O + 1; W--; )
        if (C[W] === T)
          return W;
      return W;
    }
    function lr(C) {
      return ur(C) ? qv(C) : kv(C);
    }
    function Rt(C) {
      return ur(C) ? Gv(C) : Av(C);
    }
    function Sl(C) {
      for (var T = C.length; T-- && D0.test(C.charAt(T)); )
        ;
      return T;
    }
    var zv = Oo(yv);
    function qv(C) {
      for (var T = bo.lastIndex = 0; bo.test(C); )
        ++T;
      return T;
    }
    function Gv(C) {
      return C.match(bo) || [];
    }
    function Yv(C) {
      return C.match(hv) || [];
    }
    var Vv = function C(T) {
      T = T == null ? We : cr.defaults(We.Object(), T, cr.pick(We, gv));
      var O = T.Array, W = T.Date, Y = T.Error, ue = T.Function, Re = T.Math, me = T.Object, Po = T.RegExp, Kv = T.String, Ct = T.TypeError, Pi = O.prototype, Xv = ue.prototype, fr = me.prototype, Ri = T["__core-js_shared__"], Fi = Xv.toString, he = fr.hasOwnProperty, Zv = 0, El = function() {
        var n = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Di = fr.toString, Qv = Fi.call(me), Jv = We._, eg = Po(
        "^" + Fi.call(he).replace(ho, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Mi = ul ? T.Buffer : r, xn = T.Symbol, Li = T.Uint8Array, Ol = Mi ? Mi.allocUnsafe : r, Ii = Cl(me.getPrototypeOf, me), Tl = me.create, kl = fr.propertyIsEnumerable, Ni = Pi.splice, Al = xn ? xn.isConcatSpreadable : r, Br = xn ? xn.iterator : r, Ln = xn ? xn.toStringTag : r, Bi = function() {
        try {
          var n = Un(me, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), tg = T.clearTimeout !== We.clearTimeout && T.clearTimeout, ng = W && W.now !== We.Date.now && W.now, rg = T.setTimeout !== We.setTimeout && T.setTimeout, Wi = Re.ceil, Ui = Re.floor, Ro = me.getOwnPropertySymbols, ig = Mi ? Mi.isBuffer : r, $l = T.isFinite, ag = Pi.join, og = Cl(me.keys, me), Fe = Re.max, ze = Re.min, sg = W.now, ug = T.parseInt, Pl = Re.random, lg = Pi.reverse, Fo = Un(T, "DataView"), Wr = Un(T, "Map"), Do = Un(T, "Promise"), dr = Un(T, "Set"), Ur = Un(T, "WeakMap"), jr = Un(me, "create"), ji = Ur && new Ur(), hr = {}, cg = jn(Fo), fg = jn(Wr), dg = jn(Do), hg = jn(dr), pg = jn(Ur), Hi = xn ? xn.prototype : r, Hr = Hi ? Hi.valueOf : r, Rl = Hi ? Hi.toString : r;
      function h(n) {
        if (Ae(n) && !V(n) && !(n instanceof ne)) {
          if (n instanceof St)
            return n;
          if (he.call(n, "__wrapped__"))
            return Fc(n);
        }
        return new St(n);
      }
      var pr = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!Oe(i))
            return {};
          if (Tl)
            return Tl(i);
          n.prototype = i;
          var s = new n();
          return n.prototype = r, s;
        };
      }();
      function zi() {
      }
      function St(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: k0,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: A0,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Uu,
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
          _: h
        }
      }, h.prototype = zi.prototype, h.prototype.constructor = h, St.prototype = pr(zi.prototype), St.prototype.constructor = St;
      function ne(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ye, this.__views__ = [];
      }
      function vg() {
        var n = new ne(this.__wrapped__);
        return n.__actions__ = et(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = et(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = et(this.__views__), n;
      }
      function gg() {
        if (this.__filtered__) {
          var n = new ne(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function _g() {
        var n = this.__wrapped__.value(), i = this.__dir__, s = V(n), l = i < 0, f = s ? n.length : 0, p = A_(0, f, this.__views__), m = p.start, w = p.end, E = w - m, $ = l ? w : m - 1, P = this.__iteratees__, F = P.length, I = 0, j = ze(E, this.__takeCount__);
        if (!s || !l && f == E && j == E)
          return nc(n, this.__actions__);
        var q = [];
        e:
          for (; E-- && I < j; ) {
            $ += i;
            for (var Z = -1, G = n[$]; ++Z < F; ) {
              var te = P[Z], ie = te.iteratee, ht = te.type, Ze = ie(G);
              if (ht == eo)
                G = Ze;
              else if (!Ze) {
                if (ht == xi)
                  continue e;
                break e;
              }
            }
            q[I++] = G;
          }
        return q;
      }
      ne.prototype = pr(zi.prototype), ne.prototype.constructor = ne;
      function In(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function mg() {
        this.__data__ = jr ? jr(null) : {}, this.size = 0;
      }
      function bg(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function yg(n) {
        var i = this.__data__;
        if (jr) {
          var s = i[n];
          return s === g ? r : s;
        }
        return he.call(i, n) ? i[n] : r;
      }
      function wg(n) {
        var i = this.__data__;
        return jr ? i[n] !== r : he.call(i, n);
      }
      function xg(n, i) {
        var s = this.__data__;
        return this.size += this.has(n) ? 0 : 1, s[n] = jr && i === r ? g : i, this;
      }
      In.prototype.clear = mg, In.prototype.delete = bg, In.prototype.get = yg, In.prototype.has = wg, In.prototype.set = xg;
      function tn(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function Cg() {
        this.__data__ = [], this.size = 0;
      }
      function Sg(n) {
        var i = this.__data__, s = qi(i, n);
        if (s < 0)
          return !1;
        var l = i.length - 1;
        return s == l ? i.pop() : Ni.call(i, s, 1), --this.size, !0;
      }
      function Eg(n) {
        var i = this.__data__, s = qi(i, n);
        return s < 0 ? r : i[s][1];
      }
      function Og(n) {
        return qi(this.__data__, n) > -1;
      }
      function Tg(n, i) {
        var s = this.__data__, l = qi(s, n);
        return l < 0 ? (++this.size, s.push([n, i])) : s[l][1] = i, this;
      }
      tn.prototype.clear = Cg, tn.prototype.delete = Sg, tn.prototype.get = Eg, tn.prototype.has = Og, tn.prototype.set = Tg;
      function nn(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function kg() {
        this.size = 0, this.__data__ = {
          hash: new In(),
          map: new (Wr || tn)(),
          string: new In()
        };
      }
      function Ag(n) {
        var i = ra(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function $g(n) {
        return ra(this, n).get(n);
      }
      function Pg(n) {
        return ra(this, n).has(n);
      }
      function Rg(n, i) {
        var s = ra(this, n), l = s.size;
        return s.set(n, i), this.size += s.size == l ? 0 : 1, this;
      }
      nn.prototype.clear = kg, nn.prototype.delete = Ag, nn.prototype.get = $g, nn.prototype.has = Pg, nn.prototype.set = Rg;
      function Nn(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.__data__ = new nn(); ++i < s; )
          this.add(n[i]);
      }
      function Fg(n) {
        return this.__data__.set(n, g), this;
      }
      function Dg(n) {
        return this.__data__.has(n);
      }
      Nn.prototype.add = Nn.prototype.push = Fg, Nn.prototype.has = Dg;
      function Ft(n) {
        var i = this.__data__ = new tn(n);
        this.size = i.size;
      }
      function Mg() {
        this.__data__ = new tn(), this.size = 0;
      }
      function Lg(n) {
        var i = this.__data__, s = i.delete(n);
        return this.size = i.size, s;
      }
      function Ig(n) {
        return this.__data__.get(n);
      }
      function Ng(n) {
        return this.__data__.has(n);
      }
      function Bg(n, i) {
        var s = this.__data__;
        if (s instanceof tn) {
          var l = s.__data__;
          if (!Wr || l.length < o - 1)
            return l.push([n, i]), this.size = ++s.size, this;
          s = this.__data__ = new nn(l);
        }
        return s.set(n, i), this.size = s.size, this;
      }
      Ft.prototype.clear = Mg, Ft.prototype.delete = Lg, Ft.prototype.get = Ig, Ft.prototype.has = Ng, Ft.prototype.set = Bg;
      function Fl(n, i) {
        var s = V(n), l = !s && Hn(n), f = !s && !l && Tn(n), p = !s && !l && !f && mr(n), m = s || l || f || p, w = m ? ko(n.length, Kv) : [], E = w.length;
        for (var $ in n)
          (i || he.call(n, $)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
          ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
          sn($, E))) && w.push($);
        return w;
      }
      function Dl(n) {
        var i = n.length;
        return i ? n[qo(0, i - 1)] : r;
      }
      function Wg(n, i) {
        return ia(et(n), Bn(i, 0, n.length));
      }
      function Ug(n) {
        return ia(et(n));
      }
      function Mo(n, i, s) {
        (s !== r && !Dt(n[i], s) || s === r && !(i in n)) && rn(n, i, s);
      }
      function zr(n, i, s) {
        var l = n[i];
        (!(he.call(n, i) && Dt(l, s)) || s === r && !(i in n)) && rn(n, i, s);
      }
      function qi(n, i) {
        for (var s = n.length; s--; )
          if (Dt(n[s][0], i))
            return s;
        return -1;
      }
      function jg(n, i, s, l) {
        return Cn(n, function(f, p, m) {
          i(l, f, s(f), m);
        }), l;
      }
      function Ml(n, i) {
        return n && Vt(i, Ie(i), n);
      }
      function Hg(n, i) {
        return n && Vt(i, nt(i), n);
      }
      function rn(n, i, s) {
        i == "__proto__" && Bi ? Bi(n, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : n[i] = s;
      }
      function Lo(n, i) {
        for (var s = -1, l = i.length, f = O(l), p = n == null; ++s < l; )
          f[s] = p ? r : gs(n, i[s]);
        return f;
      }
      function Bn(n, i, s) {
        return n === n && (s !== r && (n = n <= s ? n : s), i !== r && (n = n >= i ? n : i)), n;
      }
      function Et(n, i, s, l, f, p) {
        var m, w = i & S, E = i & R, $ = i & k;
        if (s && (m = f ? s(n, l, f, p) : s(n)), m !== r)
          return m;
        if (!Oe(n))
          return n;
        var P = V(n);
        if (P) {
          if (m = P_(n), !w)
            return et(n, m);
        } else {
          var F = qe(n), I = F == ir || F == _;
          if (Tn(n))
            return ac(n, w);
          if (F == L || F == Me || I && !f) {
            if (m = E || I ? {} : Sc(n), !w)
              return E ? y_(n, Hg(m, n)) : b_(n, Ml(m, n));
          } else {
            if (!we[F])
              return f ? n : {};
            m = R_(n, F, w);
          }
        }
        p || (p = new Ft());
        var j = p.get(n);
        if (j)
          return j;
        p.set(n, m), Jc(n) ? n.forEach(function(G) {
          m.add(Et(G, i, s, G, n, p));
        }) : Zc(n) && n.forEach(function(G, te) {
          m.set(te, Et(G, i, s, te, n, p));
        });
        var q = $ ? E ? ns : ts : E ? nt : Ie, Z = P ? r : q(n);
        return xt(Z || n, function(G, te) {
          Z && (te = G, G = n[te]), zr(m, te, Et(G, i, s, te, n, p));
        }), m;
      }
      function zg(n) {
        var i = Ie(n);
        return function(s) {
          return Ll(s, n, i);
        };
      }
      function Ll(n, i, s) {
        var l = s.length;
        if (n == null)
          return !l;
        for (n = me(n); l--; ) {
          var f = s[l], p = i[f], m = n[f];
          if (m === r && !(f in n) || !p(m))
            return !1;
        }
        return !0;
      }
      function Il(n, i, s) {
        if (typeof n != "function")
          throw new Ct(c);
        return Zr(function() {
          n.apply(r, s);
        }, i);
      }
      function qr(n, i, s, l) {
        var f = -1, p = ki, m = !0, w = n.length, E = [], $ = i.length;
        if (!w)
          return E;
        s && (i = Se(i, ct(s))), l ? (p = xo, m = !1) : i.length >= o && (p = Nr, m = !1, i = new Nn(i));
        e:
          for (; ++f < w; ) {
            var P = n[f], F = s == null ? P : s(P);
            if (P = l || P !== 0 ? P : 0, m && F === F) {
              for (var I = $; I--; )
                if (i[I] === F)
                  continue e;
              E.push(P);
            } else
              p(i, F, l) || E.push(P);
          }
        return E;
      }
      var Cn = cc(Yt), Nl = cc(No, !0);
      function qg(n, i) {
        var s = !0;
        return Cn(n, function(l, f, p) {
          return s = !!i(l, f, p), s;
        }), s;
      }
      function Gi(n, i, s) {
        for (var l = -1, f = n.length; ++l < f; ) {
          var p = n[l], m = i(p);
          if (m != null && (w === r ? m === m && !dt(m) : s(m, w)))
            var w = m, E = p;
        }
        return E;
      }
      function Gg(n, i, s, l) {
        var f = n.length;
        for (s = X(s), s < 0 && (s = -s > f ? 0 : f + s), l = l === r || l > f ? f : X(l), l < 0 && (l += f), l = s > l ? 0 : tf(l); s < l; )
          n[s++] = i;
        return n;
      }
      function Bl(n, i) {
        var s = [];
        return Cn(n, function(l, f, p) {
          i(l, f, p) && s.push(l);
        }), s;
      }
      function Ue(n, i, s, l, f) {
        var p = -1, m = n.length;
        for (s || (s = D_), f || (f = []); ++p < m; ) {
          var w = n[p];
          i > 0 && s(w) ? i > 1 ? Ue(w, i - 1, s, l, f) : yn(f, w) : l || (f[f.length] = w);
        }
        return f;
      }
      var Io = fc(), Wl = fc(!0);
      function Yt(n, i) {
        return n && Io(n, i, Ie);
      }
      function No(n, i) {
        return n && Wl(n, i, Ie);
      }
      function Yi(n, i) {
        return bn(i, function(s) {
          return un(n[s]);
        });
      }
      function Wn(n, i) {
        i = En(i, n);
        for (var s = 0, l = i.length; n != null && s < l; )
          n = n[Kt(i[s++])];
        return s && s == l ? n : r;
      }
      function Ul(n, i, s) {
        var l = i(n);
        return V(n) ? l : yn(l, s(n));
      }
      function Ke(n) {
        return n == null ? n === r ? ut : D : Ln && Ln in me(n) ? k_(n) : U_(n);
      }
      function Bo(n, i) {
        return n > i;
      }
      function Yg(n, i) {
        return n != null && he.call(n, i);
      }
      function Vg(n, i) {
        return n != null && i in me(n);
      }
      function Kg(n, i, s) {
        return n >= ze(i, s) && n < Fe(i, s);
      }
      function Wo(n, i, s) {
        for (var l = s ? xo : ki, f = n[0].length, p = n.length, m = p, w = O(p), E = 1 / 0, $ = []; m--; ) {
          var P = n[m];
          m && i && (P = Se(P, ct(i))), E = ze(P.length, E), w[m] = !s && (i || f >= 120 && P.length >= 120) ? new Nn(m && P) : r;
        }
        P = n[0];
        var F = -1, I = w[0];
        e:
          for (; ++F < f && $.length < E; ) {
            var j = P[F], q = i ? i(j) : j;
            if (j = s || j !== 0 ? j : 0, !(I ? Nr(I, q) : l($, q, s))) {
              for (m = p; --m; ) {
                var Z = w[m];
                if (!(Z ? Nr(Z, q) : l(n[m], q, s)))
                  continue e;
              }
              I && I.push(q), $.push(j);
            }
          }
        return $;
      }
      function Xg(n, i, s, l) {
        return Yt(n, function(f, p, m) {
          i(l, s(f), p, m);
        }), l;
      }
      function Gr(n, i, s) {
        i = En(i, n), n = kc(n, i);
        var l = n == null ? n : n[Kt(Tt(i))];
        return l == null ? r : lt(l, n, s);
      }
      function jl(n) {
        return Ae(n) && Ke(n) == Me;
      }
      function Zg(n) {
        return Ae(n) && Ke(n) == Ir;
      }
      function Qg(n) {
        return Ae(n) && Ke(n) == Be;
      }
      function Yr(n, i, s, l, f) {
        return n === i ? !0 : n == null || i == null || !Ae(n) && !Ae(i) ? n !== n && i !== i : Jg(n, i, s, l, Yr, f);
      }
      function Jg(n, i, s, l, f, p) {
        var m = V(n), w = V(i), E = m ? qt : qe(n), $ = w ? qt : qe(i);
        E = E == Me ? L : E, $ = $ == Me ? L : $;
        var P = E == L, F = $ == L, I = E == $;
        if (I && Tn(n)) {
          if (!Tn(i))
            return !1;
          m = !0, P = !1;
        }
        if (I && !P)
          return p || (p = new Ft()), m || mr(n) ? wc(n, i, s, l, f, p) : O_(n, i, E, s, l, f, p);
        if (!(s & A)) {
          var j = P && he.call(n, "__wrapped__"), q = F && he.call(i, "__wrapped__");
          if (j || q) {
            var Z = j ? n.value() : n, G = q ? i.value() : i;
            return p || (p = new Ft()), f(Z, G, s, l, p);
          }
        }
        return I ? (p || (p = new Ft()), T_(n, i, s, l, f, p)) : !1;
      }
      function e_(n) {
        return Ae(n) && qe(n) == x;
      }
      function Uo(n, i, s, l) {
        var f = s.length, p = f, m = !l;
        if (n == null)
          return !p;
        for (n = me(n); f--; ) {
          var w = s[f];
          if (m && w[2] ? w[1] !== n[w[0]] : !(w[0] in n))
            return !1;
        }
        for (; ++f < p; ) {
          w = s[f];
          var E = w[0], $ = n[E], P = w[1];
          if (m && w[2]) {
            if ($ === r && !(E in n))
              return !1;
          } else {
            var F = new Ft();
            if (l)
              var I = l($, P, E, n, i, F);
            if (!(I === r ? Yr(P, $, A | M, l, F) : I))
              return !1;
          }
        }
        return !0;
      }
      function Hl(n) {
        if (!Oe(n) || L_(n))
          return !1;
        var i = un(n) ? eg : z0;
        return i.test(jn(n));
      }
      function t_(n) {
        return Ae(n) && Ke(n) == de;
      }
      function n_(n) {
        return Ae(n) && qe(n) == se;
      }
      function r_(n) {
        return Ae(n) && ca(n.length) && !!xe[Ke(n)];
      }
      function zl(n) {
        return typeof n == "function" ? n : n == null ? rt : typeof n == "object" ? V(n) ? Yl(n[0], n[1]) : Gl(n) : hf(n);
      }
      function jo(n) {
        if (!Xr(n))
          return og(n);
        var i = [];
        for (var s in me(n))
          he.call(n, s) && s != "constructor" && i.push(s);
        return i;
      }
      function i_(n) {
        if (!Oe(n))
          return W_(n);
        var i = Xr(n), s = [];
        for (var l in n)
          l == "constructor" && (i || !he.call(n, l)) || s.push(l);
        return s;
      }
      function Ho(n, i) {
        return n < i;
      }
      function ql(n, i) {
        var s = -1, l = tt(n) ? O(n.length) : [];
        return Cn(n, function(f, p, m) {
          l[++s] = i(f, p, m);
        }), l;
      }
      function Gl(n) {
        var i = is(n);
        return i.length == 1 && i[0][2] ? Oc(i[0][0], i[0][1]) : function(s) {
          return s === n || Uo(s, n, i);
        };
      }
      function Yl(n, i) {
        return os(n) && Ec(i) ? Oc(Kt(n), i) : function(s) {
          var l = gs(s, n);
          return l === r && l === i ? _s(s, n) : Yr(i, l, A | M);
        };
      }
      function Vi(n, i, s, l, f) {
        n !== i && Io(i, function(p, m) {
          if (f || (f = new Ft()), Oe(p))
            a_(n, i, m, s, Vi, l, f);
          else {
            var w = l ? l(us(n, m), p, m + "", n, i, f) : r;
            w === r && (w = p), Mo(n, m, w);
          }
        }, nt);
      }
      function a_(n, i, s, l, f, p, m) {
        var w = us(n, s), E = us(i, s), $ = m.get(E);
        if ($) {
          Mo(n, s, $);
          return;
        }
        var P = p ? p(w, E, s + "", n, i, m) : r, F = P === r;
        if (F) {
          var I = V(E), j = !I && Tn(E), q = !I && !j && mr(E);
          P = E, I || j || q ? V(w) ? P = w : $e(w) ? P = et(w) : j ? (F = !1, P = ac(E, !0)) : q ? (F = !1, P = oc(E, !0)) : P = [] : Qr(E) || Hn(E) ? (P = w, Hn(w) ? P = nf(w) : (!Oe(w) || un(w)) && (P = Sc(E))) : F = !1;
        }
        F && (m.set(E, P), f(P, E, l, p, m), m.delete(E)), Mo(n, s, P);
      }
      function Vl(n, i) {
        var s = n.length;
        if (s)
          return i += i < 0 ? s : 0, sn(i, s) ? n[i] : r;
      }
      function Kl(n, i, s) {
        i.length ? i = Se(i, function(p) {
          return V(p) ? function(m) {
            return Wn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : i = [rt];
        var l = -1;
        i = Se(i, ct(z()));
        var f = ql(n, function(p, m, w) {
          var E = Se(i, function($) {
            return $(p);
          });
          return { criteria: E, index: ++l, value: p };
        });
        return Rv(f, function(p, m) {
          return m_(p, m, s);
        });
      }
      function o_(n, i) {
        return Xl(n, i, function(s, l) {
          return _s(n, l);
        });
      }
      function Xl(n, i, s) {
        for (var l = -1, f = i.length, p = {}; ++l < f; ) {
          var m = i[l], w = Wn(n, m);
          s(w, m) && Vr(p, En(m, n), w);
        }
        return p;
      }
      function s_(n) {
        return function(i) {
          return Wn(i, n);
        };
      }
      function zo(n, i, s, l) {
        var f = l ? Pv : sr, p = -1, m = i.length, w = n;
        for (n === i && (i = et(i)), s && (w = Se(n, ct(s))); ++p < m; )
          for (var E = 0, $ = i[p], P = s ? s($) : $; (E = f(w, P, E, l)) > -1; )
            w !== n && Ni.call(w, E, 1), Ni.call(n, E, 1);
        return n;
      }
      function Zl(n, i) {
        for (var s = n ? i.length : 0, l = s - 1; s--; ) {
          var f = i[s];
          if (s == l || f !== p) {
            var p = f;
            sn(f) ? Ni.call(n, f, 1) : Vo(n, f);
          }
        }
        return n;
      }
      function qo(n, i) {
        return n + Ui(Pl() * (i - n + 1));
      }
      function u_(n, i, s, l) {
        for (var f = -1, p = Fe(Wi((i - n) / (s || 1)), 0), m = O(p); p--; )
          m[l ? p : ++f] = n, n += s;
        return m;
      }
      function Go(n, i) {
        var s = "";
        if (!n || i < 1 || i > zt)
          return s;
        do
          i % 2 && (s += n), i = Ui(i / 2), i && (n += n);
        while (i);
        return s;
      }
      function J(n, i) {
        return ls(Tc(n, i, rt), n + "");
      }
      function l_(n) {
        return Dl(br(n));
      }
      function c_(n, i) {
        var s = br(n);
        return ia(s, Bn(i, 0, s.length));
      }
      function Vr(n, i, s, l) {
        if (!Oe(n))
          return n;
        i = En(i, n);
        for (var f = -1, p = i.length, m = p - 1, w = n; w != null && ++f < p; ) {
          var E = Kt(i[f]), $ = s;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return n;
          if (f != m) {
            var P = w[E];
            $ = l ? l(P, E, w) : r, $ === r && ($ = Oe(P) ? P : sn(i[f + 1]) ? [] : {});
          }
          zr(w, E, $), w = w[E];
        }
        return n;
      }
      var Ql = ji ? function(n, i) {
        return ji.set(n, i), n;
      } : rt, f_ = Bi ? function(n, i) {
        return Bi(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: bs(i),
          writable: !0
        });
      } : rt;
      function d_(n) {
        return ia(br(n));
      }
      function Ot(n, i, s) {
        var l = -1, f = n.length;
        i < 0 && (i = -i > f ? 0 : f + i), s = s > f ? f : s, s < 0 && (s += f), f = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var p = O(f); ++l < f; )
          p[l] = n[l + i];
        return p;
      }
      function h_(n, i) {
        var s;
        return Cn(n, function(l, f, p) {
          return s = i(l, f, p), !s;
        }), !!s;
      }
      function Ki(n, i, s) {
        var l = 0, f = n == null ? l : n.length;
        if (typeof i == "number" && i === i && f <= to) {
          for (; l < f; ) {
            var p = l + f >>> 1, m = n[p];
            m !== null && !dt(m) && (s ? m <= i : m < i) ? l = p + 1 : f = p;
          }
          return f;
        }
        return Yo(n, i, rt, s);
      }
      function Yo(n, i, s, l) {
        var f = 0, p = n == null ? 0 : n.length;
        if (p === 0)
          return 0;
        i = s(i);
        for (var m = i !== i, w = i === null, E = dt(i), $ = i === r; f < p; ) {
          var P = Ui((f + p) / 2), F = s(n[P]), I = F !== r, j = F === null, q = F === F, Z = dt(F);
          if (m)
            var G = l || q;
          else
            $ ? G = q && (l || I) : w ? G = q && I && (l || !j) : E ? G = q && I && !j && (l || !Z) : j || Z ? G = !1 : G = l ? F <= i : F < i;
          G ? f = P + 1 : p = P;
        }
        return ze(p, Ve);
      }
      function Jl(n, i) {
        for (var s = -1, l = n.length, f = 0, p = []; ++s < l; ) {
          var m = n[s], w = i ? i(m) : m;
          if (!s || !Dt(w, E)) {
            var E = w;
            p[f++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function ec(n) {
        return typeof n == "number" ? n : dt(n) ? fe : +n;
      }
      function ft(n) {
        if (typeof n == "string")
          return n;
        if (V(n))
          return Se(n, ft) + "";
        if (dt(n))
          return Rl ? Rl.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -en ? "-0" : i;
      }
      function Sn(n, i, s) {
        var l = -1, f = ki, p = n.length, m = !0, w = [], E = w;
        if (s)
          m = !1, f = xo;
        else if (p >= o) {
          var $ = i ? null : S_(n);
          if ($)
            return $i($);
          m = !1, f = Nr, E = new Nn();
        } else
          E = i ? [] : w;
        e:
          for (; ++l < p; ) {
            var P = n[l], F = i ? i(P) : P;
            if (P = s || P !== 0 ? P : 0, m && F === F) {
              for (var I = E.length; I--; )
                if (E[I] === F)
                  continue e;
              i && E.push(F), w.push(P);
            } else
              f(E, F, s) || (E !== w && E.push(F), w.push(P));
          }
        return w;
      }
      function Vo(n, i) {
        return i = En(i, n), n = kc(n, i), n == null || delete n[Kt(Tt(i))];
      }
      function tc(n, i, s, l) {
        return Vr(n, i, s(Wn(n, i)), l);
      }
      function Xi(n, i, s, l) {
        for (var f = n.length, p = l ? f : -1; (l ? p-- : ++p < f) && i(n[p], p, n); )
          ;
        return s ? Ot(n, l ? 0 : p, l ? p + 1 : f) : Ot(n, l ? p + 1 : 0, l ? f : p);
      }
      function nc(n, i) {
        var s = n;
        return s instanceof ne && (s = s.value()), Co(i, function(l, f) {
          return f.func.apply(f.thisArg, yn([l], f.args));
        }, s);
      }
      function Ko(n, i, s) {
        var l = n.length;
        if (l < 2)
          return l ? Sn(n[0]) : [];
        for (var f = -1, p = O(l); ++f < l; )
          for (var m = n[f], w = -1; ++w < l; )
            w != f && (p[f] = qr(p[f] || m, n[w], i, s));
        return Sn(Ue(p, 1), i, s);
      }
      function rc(n, i, s) {
        for (var l = -1, f = n.length, p = i.length, m = {}; ++l < f; ) {
          var w = l < p ? i[l] : r;
          s(m, n[l], w);
        }
        return m;
      }
      function Xo(n) {
        return $e(n) ? n : [];
      }
      function Zo(n) {
        return typeof n == "function" ? n : rt;
      }
      function En(n, i) {
        return V(n) ? n : os(n, i) ? [n] : Rc(le(n));
      }
      var p_ = J;
      function On(n, i, s) {
        var l = n.length;
        return s = s === r ? l : s, !i && s >= l ? n : Ot(n, i, s);
      }
      var ic = tg || function(n) {
        return We.clearTimeout(n);
      };
      function ac(n, i) {
        if (i)
          return n.slice();
        var s = n.length, l = Ol ? Ol(s) : new n.constructor(s);
        return n.copy(l), l;
      }
      function Qo(n) {
        var i = new n.constructor(n.byteLength);
        return new Li(i).set(new Li(n)), i;
      }
      function v_(n, i) {
        var s = i ? Qo(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.byteLength);
      }
      function g_(n) {
        var i = new n.constructor(n.source, ju.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function __(n) {
        return Hr ? me(Hr.call(n)) : {};
      }
      function oc(n, i) {
        var s = i ? Qo(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.length);
      }
      function sc(n, i) {
        if (n !== i) {
          var s = n !== r, l = n === null, f = n === n, p = dt(n), m = i !== r, w = i === null, E = i === i, $ = dt(i);
          if (!w && !$ && !p && n > i || p && m && E && !w && !$ || l && m && E || !s && E || !f)
            return 1;
          if (!l && !p && !$ && n < i || $ && s && f && !l && !p || w && s && f || !m && f || !E)
            return -1;
        }
        return 0;
      }
      function m_(n, i, s) {
        for (var l = -1, f = n.criteria, p = i.criteria, m = f.length, w = s.length; ++l < m; ) {
          var E = sc(f[l], p[l]);
          if (E) {
            if (l >= w)
              return E;
            var $ = s[l];
            return E * ($ == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function uc(n, i, s, l) {
        for (var f = -1, p = n.length, m = s.length, w = -1, E = i.length, $ = Fe(p - m, 0), P = O(E + $), F = !l; ++w < E; )
          P[w] = i[w];
        for (; ++f < m; )
          (F || f < p) && (P[s[f]] = n[f]);
        for (; $--; )
          P[w++] = n[f++];
        return P;
      }
      function lc(n, i, s, l) {
        for (var f = -1, p = n.length, m = -1, w = s.length, E = -1, $ = i.length, P = Fe(p - w, 0), F = O(P + $), I = !l; ++f < P; )
          F[f] = n[f];
        for (var j = f; ++E < $; )
          F[j + E] = i[E];
        for (; ++m < w; )
          (I || f < p) && (F[j + s[m]] = n[f++]);
        return F;
      }
      function et(n, i) {
        var s = -1, l = n.length;
        for (i || (i = O(l)); ++s < l; )
          i[s] = n[s];
        return i;
      }
      function Vt(n, i, s, l) {
        var f = !s;
        s || (s = {});
        for (var p = -1, m = i.length; ++p < m; ) {
          var w = i[p], E = l ? l(s[w], n[w], w, s, n) : r;
          E === r && (E = n[w]), f ? rn(s, w, E) : zr(s, w, E);
        }
        return s;
      }
      function b_(n, i) {
        return Vt(n, as(n), i);
      }
      function y_(n, i) {
        return Vt(n, xc(n), i);
      }
      function Zi(n, i) {
        return function(s, l) {
          var f = V(s) ? Ev : jg, p = i ? i() : {};
          return f(s, n, z(l, 2), p);
        };
      }
      function vr(n) {
        return J(function(i, s) {
          var l = -1, f = s.length, p = f > 1 ? s[f - 1] : r, m = f > 2 ? s[2] : r;
          for (p = n.length > 3 && typeof p == "function" ? (f--, p) : r, m && Xe(s[0], s[1], m) && (p = f < 3 ? r : p, f = 1), i = me(i); ++l < f; ) {
            var w = s[l];
            w && n(i, w, l, p);
          }
          return i;
        });
      }
      function cc(n, i) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!tt(s))
            return n(s, l);
          for (var f = s.length, p = i ? f : -1, m = me(s); (i ? p-- : ++p < f) && l(m[p], p, m) !== !1; )
            ;
          return s;
        };
      }
      function fc(n) {
        return function(i, s, l) {
          for (var f = -1, p = me(i), m = l(i), w = m.length; w--; ) {
            var E = m[n ? w : ++f];
            if (s(p[E], E, p) === !1)
              break;
          }
          return i;
        };
      }
      function w_(n, i, s) {
        var l = i & H, f = Kr(n);
        function p() {
          var m = this && this !== We && this instanceof p ? f : n;
          return m.apply(l ? s : this, arguments);
        }
        return p;
      }
      function dc(n) {
        return function(i) {
          i = le(i);
          var s = ur(i) ? Rt(i) : r, l = s ? s[0] : i.charAt(0), f = s ? On(s, 1).join("") : i.slice(1);
          return l[n]() + f;
        };
      }
      function gr(n) {
        return function(i) {
          return Co(ff(cf(i).replace(fv, "")), n, "");
        };
      }
      function Kr(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var s = pr(n.prototype), l = n.apply(s, i);
          return Oe(l) ? l : s;
        };
      }
      function x_(n, i, s) {
        var l = Kr(n);
        function f() {
          for (var p = arguments.length, m = O(p), w = p, E = _r(f); w--; )
            m[w] = arguments[w];
          var $ = p < 3 && m[0] !== E && m[p - 1] !== E ? [] : wn(m, E);
          if (p -= $.length, p < s)
            return _c(
              n,
              i,
              Qi,
              f.placeholder,
              r,
              m,
              $,
              r,
              r,
              s - p
            );
          var P = this && this !== We && this instanceof f ? l : n;
          return lt(P, this, m);
        }
        return f;
      }
      function hc(n) {
        return function(i, s, l) {
          var f = me(i);
          if (!tt(i)) {
            var p = z(s, 3);
            i = Ie(i), s = function(w) {
              return p(f[w], w, f);
            };
          }
          var m = n(i, s, l);
          return m > -1 ? f[p ? i[m] : m] : r;
        };
      }
      function pc(n) {
        return on(function(i) {
          var s = i.length, l = s, f = St.prototype.thru;
          for (n && i.reverse(); l--; ) {
            var p = i[l];
            if (typeof p != "function")
              throw new Ct(c);
            if (f && !m && na(p) == "wrapper")
              var m = new St([], !0);
          }
          for (l = m ? l : s; ++l < s; ) {
            p = i[l];
            var w = na(p), E = w == "wrapper" ? rs(p) : r;
            E && ss(E[0]) && E[1] == (ae | re | Q | ve) && !E[4].length && E[9] == 1 ? m = m[na(E[0])].apply(m, E[3]) : m = p.length == 1 && ss(p) ? m[w]() : m.thru(p);
          }
          return function() {
            var $ = arguments, P = $[0];
            if (m && $.length == 1 && V(P))
              return m.plant(P).value();
            for (var F = 0, I = s ? i[F].apply(this, $) : P; ++F < s; )
              I = i[F].call(this, I);
            return I;
          };
        });
      }
      function Qi(n, i, s, l, f, p, m, w, E, $) {
        var P = i & ae, F = i & H, I = i & U, j = i & (re | ye), q = i & K, Z = I ? r : Kr(n);
        function G() {
          for (var te = arguments.length, ie = O(te), ht = te; ht--; )
            ie[ht] = arguments[ht];
          if (j)
            var Ze = _r(G), pt = Dv(ie, Ze);
          if (l && (ie = uc(ie, l, f, j)), p && (ie = lc(ie, p, m, j)), te -= pt, j && te < $) {
            var Pe = wn(ie, Ze);
            return _c(
              n,
              i,
              Qi,
              G.placeholder,
              s,
              ie,
              Pe,
              w,
              E,
              $ - te
            );
          }
          var Mt = F ? s : this, cn = I ? Mt[n] : n;
          return te = ie.length, w ? ie = j_(ie, w) : q && te > 1 && ie.reverse(), P && E < te && (ie.length = E), this && this !== We && this instanceof G && (cn = Z || Kr(cn)), cn.apply(Mt, ie);
        }
        return G;
      }
      function vc(n, i) {
        return function(s, l) {
          return Xg(s, n, i(l), {});
        };
      }
      function Ji(n, i) {
        return function(s, l) {
          var f;
          if (s === r && l === r)
            return i;
          if (s !== r && (f = s), l !== r) {
            if (f === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = ft(s), l = ft(l)) : (s = ec(s), l = ec(l)), f = n(s, l);
          }
          return f;
        };
      }
      function Jo(n) {
        return on(function(i) {
          return i = Se(i, ct(z())), J(function(s) {
            var l = this;
            return n(i, function(f) {
              return lt(f, l, s);
            });
          });
        });
      }
      function ea(n, i) {
        i = i === r ? " " : ft(i);
        var s = i.length;
        if (s < 2)
          return s ? Go(i, n) : i;
        var l = Go(i, Wi(n / lr(i)));
        return ur(i) ? On(Rt(l), 0, n).join("") : l.slice(0, n);
      }
      function C_(n, i, s, l) {
        var f = i & H, p = Kr(n);
        function m() {
          for (var w = -1, E = arguments.length, $ = -1, P = l.length, F = O(P + E), I = this && this !== We && this instanceof m ? p : n; ++$ < P; )
            F[$] = l[$];
          for (; E--; )
            F[$++] = arguments[++w];
          return lt(I, f ? s : this, F);
        }
        return m;
      }
      function gc(n) {
        return function(i, s, l) {
          return l && typeof l != "number" && Xe(i, s, l) && (s = l = r), i = ln(i), s === r ? (s = i, i = 0) : s = ln(s), l = l === r ? i < s ? 1 : -1 : ln(l), u_(i, s, l, n);
        };
      }
      function ta(n) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = kt(i), s = kt(s)), n(i, s);
        };
      }
      function _c(n, i, s, l, f, p, m, w, E, $) {
        var P = i & re, F = P ? m : r, I = P ? r : m, j = P ? p : r, q = P ? r : p;
        i |= P ? Q : B, i &= ~(P ? B : Q), i & ee || (i &= ~(H | U));
        var Z = [
          n,
          i,
          f,
          j,
          F,
          q,
          I,
          w,
          E,
          $
        ], G = s.apply(r, Z);
        return ss(n) && Ac(G, Z), G.placeholder = l, $c(G, n, i);
      }
      function es(n) {
        var i = Re[n];
        return function(s, l) {
          if (s = kt(s), l = l == null ? 0 : ze(X(l), 292), l && $l(s)) {
            var f = (le(s) + "e").split("e"), p = i(f[0] + "e" + (+f[1] + l));
            return f = (le(p) + "e").split("e"), +(f[0] + "e" + (+f[1] - l));
          }
          return i(s);
        };
      }
      var S_ = dr && 1 / $i(new dr([, -0]))[1] == en ? function(n) {
        return new dr(n);
      } : xs;
      function mc(n) {
        return function(i) {
          var s = qe(i);
          return s == x ? $o(i) : s == se ? Uv(i) : Fv(i, n(i));
        };
      }
      function an(n, i, s, l, f, p, m, w) {
        var E = i & U;
        if (!E && typeof n != "function")
          throw new Ct(c);
        var $ = l ? l.length : 0;
        if ($ || (i &= ~(Q | B), l = f = r), m = m === r ? m : Fe(X(m), 0), w = w === r ? w : X(w), $ -= f ? f.length : 0, i & B) {
          var P = l, F = f;
          l = f = r;
        }
        var I = E ? r : rs(n), j = [
          n,
          i,
          s,
          l,
          f,
          P,
          F,
          p,
          m,
          w
        ];
        if (I && B_(j, I), n = j[0], i = j[1], s = j[2], l = j[3], f = j[4], w = j[9] = j[9] === r ? E ? 0 : n.length : Fe(j[9] - $, 0), !w && i & (re | ye) && (i &= ~(re | ye)), !i || i == H)
          var q = w_(n, i, s);
        else
          i == re || i == ye ? q = x_(n, i, w) : (i == Q || i == (H | Q)) && !f.length ? q = C_(n, i, s, l) : q = Qi.apply(r, j);
        var Z = I ? Ql : Ac;
        return $c(Z(q, j), n, i);
      }
      function bc(n, i, s, l) {
        return n === r || Dt(n, fr[s]) && !he.call(l, s) ? i : n;
      }
      function yc(n, i, s, l, f, p) {
        return Oe(n) && Oe(i) && (p.set(i, n), Vi(n, i, r, yc, p), p.delete(i)), n;
      }
      function E_(n) {
        return Qr(n) ? r : n;
      }
      function wc(n, i, s, l, f, p) {
        var m = s & A, w = n.length, E = i.length;
        if (w != E && !(m && E > w))
          return !1;
        var $ = p.get(n), P = p.get(i);
        if ($ && P)
          return $ == i && P == n;
        var F = -1, I = !0, j = s & M ? new Nn() : r;
        for (p.set(n, i), p.set(i, n); ++F < w; ) {
          var q = n[F], Z = i[F];
          if (l)
            var G = m ? l(Z, q, F, i, n, p) : l(q, Z, F, n, i, p);
          if (G !== r) {
            if (G)
              continue;
            I = !1;
            break;
          }
          if (j) {
            if (!So(i, function(te, ie) {
              if (!Nr(j, ie) && (q === te || f(q, te, s, l, p)))
                return j.push(ie);
            })) {
              I = !1;
              break;
            }
          } else if (!(q === Z || f(q, Z, s, l, p))) {
            I = !1;
            break;
          }
        }
        return p.delete(n), p.delete(i), I;
      }
      function O_(n, i, s, l, f, p, m) {
        switch (s) {
          case ar:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Ir:
            return !(n.byteLength != i.byteLength || !p(new Li(n), new Li(i)));
          case mn:
          case Be:
          case b:
            return Dt(+n, +i);
          case rr:
            return n.name == i.name && n.message == i.message;
          case de:
          case Le:
            return n == i + "";
          case x:
            var w = $o;
          case se:
            var E = l & A;
            if (w || (w = $i), n.size != i.size && !E)
              return !1;
            var $ = m.get(n);
            if ($)
              return $ == i;
            l |= M, m.set(n, i);
            var P = wc(w(n), w(i), l, f, p, m);
            return m.delete(n), P;
          case Gt:
            if (Hr)
              return Hr.call(n) == Hr.call(i);
        }
        return !1;
      }
      function T_(n, i, s, l, f, p) {
        var m = s & A, w = ts(n), E = w.length, $ = ts(i), P = $.length;
        if (E != P && !m)
          return !1;
        for (var F = E; F--; ) {
          var I = w[F];
          if (!(m ? I in i : he.call(i, I)))
            return !1;
        }
        var j = p.get(n), q = p.get(i);
        if (j && q)
          return j == i && q == n;
        var Z = !0;
        p.set(n, i), p.set(i, n);
        for (var G = m; ++F < E; ) {
          I = w[F];
          var te = n[I], ie = i[I];
          if (l)
            var ht = m ? l(ie, te, I, i, n, p) : l(te, ie, I, n, i, p);
          if (!(ht === r ? te === ie || f(te, ie, s, l, p) : ht)) {
            Z = !1;
            break;
          }
          G || (G = I == "constructor");
        }
        if (Z && !G) {
          var Ze = n.constructor, pt = i.constructor;
          Ze != pt && "constructor" in n && "constructor" in i && !(typeof Ze == "function" && Ze instanceof Ze && typeof pt == "function" && pt instanceof pt) && (Z = !1);
        }
        return p.delete(n), p.delete(i), Z;
      }
      function on(n) {
        return ls(Tc(n, r, Lc), n + "");
      }
      function ts(n) {
        return Ul(n, Ie, as);
      }
      function ns(n) {
        return Ul(n, nt, xc);
      }
      var rs = ji ? function(n) {
        return ji.get(n);
      } : xs;
      function na(n) {
        for (var i = n.name + "", s = hr[i], l = he.call(hr, i) ? s.length : 0; l--; ) {
          var f = s[l], p = f.func;
          if (p == null || p == n)
            return f.name;
        }
        return i;
      }
      function _r(n) {
        var i = he.call(h, "placeholder") ? h : n;
        return i.placeholder;
      }
      function z() {
        var n = h.iteratee || ys;
        return n = n === ys ? zl : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function ra(n, i) {
        var s = n.__data__;
        return M_(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function is(n) {
        for (var i = Ie(n), s = i.length; s--; ) {
          var l = i[s], f = n[l];
          i[s] = [l, f, Ec(f)];
        }
        return i;
      }
      function Un(n, i) {
        var s = Nv(n, i);
        return Hl(s) ? s : r;
      }
      function k_(n) {
        var i = he.call(n, Ln), s = n[Ln];
        try {
          n[Ln] = r;
          var l = !0;
        } catch {
        }
        var f = Di.call(n);
        return l && (i ? n[Ln] = s : delete n[Ln]), f;
      }
      var as = Ro ? function(n) {
        return n == null ? [] : (n = me(n), bn(Ro(n), function(i) {
          return kl.call(n, i);
        }));
      } : Cs, xc = Ro ? function(n) {
        for (var i = []; n; )
          yn(i, as(n)), n = Ii(n);
        return i;
      } : Cs, qe = Ke;
      (Fo && qe(new Fo(new ArrayBuffer(1))) != ar || Wr && qe(new Wr()) != x || Do && qe(Do.resolve()) != N || dr && qe(new dr()) != se || Ur && qe(new Ur()) != Lr) && (qe = function(n) {
        var i = Ke(n), s = i == L ? n.constructor : r, l = s ? jn(s) : "";
        if (l)
          switch (l) {
            case cg:
              return ar;
            case fg:
              return x;
            case dg:
              return N;
            case hg:
              return se;
            case pg:
              return Lr;
          }
        return i;
      });
      function A_(n, i, s) {
        for (var l = -1, f = s.length; ++l < f; ) {
          var p = s[l], m = p.size;
          switch (p.type) {
            case "drop":
              n += m;
              break;
            case "dropRight":
              i -= m;
              break;
            case "take":
              i = ze(i, n + m);
              break;
            case "takeRight":
              n = Fe(n, i - m);
              break;
          }
        }
        return { start: n, end: i };
      }
      function $_(n) {
        var i = n.match(L0);
        return i ? i[1].split(I0) : [];
      }
      function Cc(n, i, s) {
        i = En(i, n);
        for (var l = -1, f = i.length, p = !1; ++l < f; ) {
          var m = Kt(i[l]);
          if (!(p = n != null && s(n, m)))
            break;
          n = n[m];
        }
        return p || ++l != f ? p : (f = n == null ? 0 : n.length, !!f && ca(f) && sn(m, f) && (V(n) || Hn(n)));
      }
      function P_(n) {
        var i = n.length, s = new n.constructor(i);
        return i && typeof n[0] == "string" && he.call(n, "index") && (s.index = n.index, s.input = n.input), s;
      }
      function Sc(n) {
        return typeof n.constructor == "function" && !Xr(n) ? pr(Ii(n)) : {};
      }
      function R_(n, i, s) {
        var l = n.constructor;
        switch (i) {
          case Ir:
            return Qo(n);
          case mn:
          case Be:
            return new l(+n);
          case ar:
            return v_(n, s);
          case ro:
          case io:
          case ao:
          case oo:
          case so:
          case uo:
          case lo:
          case co:
          case fo:
            return oc(n, s);
          case x:
            return new l();
          case b:
          case Le:
            return new l(n);
          case de:
            return g_(n);
          case se:
            return new l();
          case Gt:
            return __(n);
        }
      }
      function F_(n, i) {
        var s = i.length;
        if (!s)
          return n;
        var l = s - 1;
        return i[l] = (s > 1 ? "& " : "") + i[l], i = i.join(s > 2 ? ", " : " "), n.replace(M0, `{
/* [wrapped with ` + i + `] */
`);
      }
      function D_(n) {
        return V(n) || Hn(n) || !!(Al && n && n[Al]);
      }
      function sn(n, i) {
        var s = typeof n;
        return i = i ?? zt, !!i && (s == "number" || s != "symbol" && G0.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function Xe(n, i, s) {
        if (!Oe(s))
          return !1;
        var l = typeof i;
        return (l == "number" ? tt(s) && sn(i, s.length) : l == "string" && i in s) ? Dt(s[i], n) : !1;
      }
      function os(n, i) {
        if (V(n))
          return !1;
        var s = typeof n;
        return s == "number" || s == "symbol" || s == "boolean" || n == null || dt(n) ? !0 : P0.test(n) || !$0.test(n) || i != null && n in me(i);
      }
      function M_(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function ss(n) {
        var i = na(n), s = h[i];
        if (typeof s != "function" || !(i in ne.prototype))
          return !1;
        if (n === s)
          return !0;
        var l = rs(s);
        return !!l && n === l[0];
      }
      function L_(n) {
        return !!El && El in n;
      }
      var I_ = Ri ? un : Ss;
      function Xr(n) {
        var i = n && n.constructor, s = typeof i == "function" && i.prototype || fr;
        return n === s;
      }
      function Ec(n) {
        return n === n && !Oe(n);
      }
      function Oc(n, i) {
        return function(s) {
          return s == null ? !1 : s[n] === i && (i !== r || n in me(s));
        };
      }
      function N_(n) {
        var i = ua(n, function(l) {
          return s.size === v && s.clear(), l;
        }), s = i.cache;
        return i;
      }
      function B_(n, i) {
        var s = n[1], l = i[1], f = s | l, p = f < (H | U | ae), m = l == ae && s == re || l == ae && s == ve && n[7].length <= i[8] || l == (ae | ve) && i[7].length <= i[8] && s == re;
        if (!(p || m))
          return n;
        l & H && (n[2] = i[2], f |= s & H ? 0 : ee);
        var w = i[3];
        if (w) {
          var E = n[3];
          n[3] = E ? uc(E, w, i[4]) : w, n[4] = E ? wn(n[3], y) : i[4];
        }
        return w = i[5], w && (E = n[5], n[5] = E ? lc(E, w, i[6]) : w, n[6] = E ? wn(n[5], y) : i[6]), w = i[7], w && (n[7] = w), l & ae && (n[8] = n[8] == null ? i[8] : ze(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = f, n;
      }
      function W_(n) {
        var i = [];
        if (n != null)
          for (var s in me(n))
            i.push(s);
        return i;
      }
      function U_(n) {
        return Di.call(n);
      }
      function Tc(n, i, s) {
        return i = Fe(i === r ? n.length - 1 : i, 0), function() {
          for (var l = arguments, f = -1, p = Fe(l.length - i, 0), m = O(p); ++f < p; )
            m[f] = l[i + f];
          f = -1;
          for (var w = O(i + 1); ++f < i; )
            w[f] = l[f];
          return w[i] = s(m), lt(n, this, w);
        };
      }
      function kc(n, i) {
        return i.length < 2 ? n : Wn(n, Ot(i, 0, -1));
      }
      function j_(n, i) {
        for (var s = n.length, l = ze(i.length, s), f = et(n); l--; ) {
          var p = i[l];
          n[l] = sn(p, s) ? f[p] : r;
        }
        return n;
      }
      function us(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var Ac = Pc(Ql), Zr = rg || function(n, i) {
        return We.setTimeout(n, i);
      }, ls = Pc(f_);
      function $c(n, i, s) {
        var l = i + "";
        return ls(n, F_(l, H_($_(l), s)));
      }
      function Pc(n) {
        var i = 0, s = 0;
        return function() {
          var l = sg(), f = Ja - (l - s);
          if (s = l, f > 0) {
            if (++i >= Dr)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function ia(n, i) {
        var s = -1, l = n.length, f = l - 1;
        for (i = i === r ? l : i; ++s < i; ) {
          var p = qo(s, f), m = n[p];
          n[p] = n[s], n[s] = m;
        }
        return n.length = i, n;
      }
      var Rc = N_(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(R0, function(s, l, f, p) {
          i.push(f ? p.replace(W0, "$1") : l || s);
        }), i;
      });
      function Kt(n) {
        if (typeof n == "string" || dt(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -en ? "-0" : i;
      }
      function jn(n) {
        if (n != null) {
          try {
            return Fi.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function H_(n, i) {
        return xt(no, function(s) {
          var l = "_." + s[0];
          i & s[1] && !ki(n, l) && n.push(l);
        }), n.sort();
      }
      function Fc(n) {
        if (n instanceof ne)
          return n.clone();
        var i = new St(n.__wrapped__, n.__chain__);
        return i.__actions__ = et(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function z_(n, i, s) {
        (s ? Xe(n, i, s) : i === r) ? i = 1 : i = Fe(X(i), 0);
        var l = n == null ? 0 : n.length;
        if (!l || i < 1)
          return [];
        for (var f = 0, p = 0, m = O(Wi(l / i)); f < l; )
          m[p++] = Ot(n, f, f += i);
        return m;
      }
      function q_(n) {
        for (var i = -1, s = n == null ? 0 : n.length, l = 0, f = []; ++i < s; ) {
          var p = n[i];
          p && (f[l++] = p);
        }
        return f;
      }
      function G_() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = O(n - 1), s = arguments[0], l = n; l--; )
          i[l - 1] = arguments[l];
        return yn(V(s) ? et(s) : [s], Ue(i, 1));
      }
      var Y_ = J(function(n, i) {
        return $e(n) ? qr(n, Ue(i, 1, $e, !0)) : [];
      }), V_ = J(function(n, i) {
        var s = Tt(i);
        return $e(s) && (s = r), $e(n) ? qr(n, Ue(i, 1, $e, !0), z(s, 2)) : [];
      }), K_ = J(function(n, i) {
        var s = Tt(i);
        return $e(s) && (s = r), $e(n) ? qr(n, Ue(i, 1, $e, !0), r, s) : [];
      });
      function X_(n, i, s) {
        var l = n == null ? 0 : n.length;
        return l ? (i = s || i === r ? 1 : X(i), Ot(n, i < 0 ? 0 : i, l)) : [];
      }
      function Z_(n, i, s) {
        var l = n == null ? 0 : n.length;
        return l ? (i = s || i === r ? 1 : X(i), i = l - i, Ot(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Q_(n, i) {
        return n && n.length ? Xi(n, z(i, 3), !0, !0) : [];
      }
      function J_(n, i) {
        return n && n.length ? Xi(n, z(i, 3), !0) : [];
      }
      function e1(n, i, s, l) {
        var f = n == null ? 0 : n.length;
        return f ? (s && typeof s != "number" && Xe(n, i, s) && (s = 0, l = f), Gg(n, i, s, l)) : [];
      }
      function Dc(n, i, s) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var f = s == null ? 0 : X(s);
        return f < 0 && (f = Fe(l + f, 0)), Ai(n, z(i, 3), f);
      }
      function Mc(n, i, s) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var f = l - 1;
        return s !== r && (f = X(s), f = s < 0 ? Fe(l + f, 0) : ze(f, l - 1)), Ai(n, z(i, 3), f, !0);
      }
      function Lc(n) {
        var i = n == null ? 0 : n.length;
        return i ? Ue(n, 1) : [];
      }
      function t1(n) {
        var i = n == null ? 0 : n.length;
        return i ? Ue(n, en) : [];
      }
      function n1(n, i) {
        var s = n == null ? 0 : n.length;
        return s ? (i = i === r ? 1 : X(i), Ue(n, i)) : [];
      }
      function r1(n) {
        for (var i = -1, s = n == null ? 0 : n.length, l = {}; ++i < s; ) {
          var f = n[i];
          l[f[0]] = f[1];
        }
        return l;
      }
      function Ic(n) {
        return n && n.length ? n[0] : r;
      }
      function i1(n, i, s) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var f = s == null ? 0 : X(s);
        return f < 0 && (f = Fe(l + f, 0)), sr(n, i, f);
      }
      function a1(n) {
        var i = n == null ? 0 : n.length;
        return i ? Ot(n, 0, -1) : [];
      }
      var o1 = J(function(n) {
        var i = Se(n, Xo);
        return i.length && i[0] === n[0] ? Wo(i) : [];
      }), s1 = J(function(n) {
        var i = Tt(n), s = Se(n, Xo);
        return i === Tt(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? Wo(s, z(i, 2)) : [];
      }), u1 = J(function(n) {
        var i = Tt(n), s = Se(n, Xo);
        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? Wo(s, r, i) : [];
      });
      function l1(n, i) {
        return n == null ? "" : ag.call(n, i);
      }
      function Tt(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function c1(n, i, s) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var f = l;
        return s !== r && (f = X(s), f = f < 0 ? Fe(l + f, 0) : ze(f, l - 1)), i === i ? Hv(n, i, f) : Ai(n, _l, f, !0);
      }
      function f1(n, i) {
        return n && n.length ? Vl(n, X(i)) : r;
      }
      var d1 = J(Nc);
      function Nc(n, i) {
        return n && n.length && i && i.length ? zo(n, i) : n;
      }
      function h1(n, i, s) {
        return n && n.length && i && i.length ? zo(n, i, z(s, 2)) : n;
      }
      function p1(n, i, s) {
        return n && n.length && i && i.length ? zo(n, i, r, s) : n;
      }
      var v1 = on(function(n, i) {
        var s = n == null ? 0 : n.length, l = Lo(n, i);
        return Zl(n, Se(i, function(f) {
          return sn(f, s) ? +f : f;
        }).sort(sc)), l;
      });
      function g1(n, i) {
        var s = [];
        if (!(n && n.length))
          return s;
        var l = -1, f = [], p = n.length;
        for (i = z(i, 3); ++l < p; ) {
          var m = n[l];
          i(m, l, n) && (s.push(m), f.push(l));
        }
        return Zl(n, f), s;
      }
      function cs(n) {
        return n == null ? n : lg.call(n);
      }
      function _1(n, i, s) {
        var l = n == null ? 0 : n.length;
        return l ? (s && typeof s != "number" && Xe(n, i, s) ? (i = 0, s = l) : (i = i == null ? 0 : X(i), s = s === r ? l : X(s)), Ot(n, i, s)) : [];
      }
      function m1(n, i) {
        return Ki(n, i);
      }
      function b1(n, i, s) {
        return Yo(n, i, z(s, 2));
      }
      function y1(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var l = Ki(n, i);
          if (l < s && Dt(n[l], i))
            return l;
        }
        return -1;
      }
      function w1(n, i) {
        return Ki(n, i, !0);
      }
      function x1(n, i, s) {
        return Yo(n, i, z(s, 2), !0);
      }
      function C1(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var l = Ki(n, i, !0) - 1;
          if (Dt(n[l], i))
            return l;
        }
        return -1;
      }
      function S1(n) {
        return n && n.length ? Jl(n) : [];
      }
      function E1(n, i) {
        return n && n.length ? Jl(n, z(i, 2)) : [];
      }
      function O1(n) {
        var i = n == null ? 0 : n.length;
        return i ? Ot(n, 1, i) : [];
      }
      function T1(n, i, s) {
        return n && n.length ? (i = s || i === r ? 1 : X(i), Ot(n, 0, i < 0 ? 0 : i)) : [];
      }
      function k1(n, i, s) {
        var l = n == null ? 0 : n.length;
        return l ? (i = s || i === r ? 1 : X(i), i = l - i, Ot(n, i < 0 ? 0 : i, l)) : [];
      }
      function A1(n, i) {
        return n && n.length ? Xi(n, z(i, 3), !1, !0) : [];
      }
      function $1(n, i) {
        return n && n.length ? Xi(n, z(i, 3)) : [];
      }
      var P1 = J(function(n) {
        return Sn(Ue(n, 1, $e, !0));
      }), R1 = J(function(n) {
        var i = Tt(n);
        return $e(i) && (i = r), Sn(Ue(n, 1, $e, !0), z(i, 2));
      }), F1 = J(function(n) {
        var i = Tt(n);
        return i = typeof i == "function" ? i : r, Sn(Ue(n, 1, $e, !0), r, i);
      });
      function D1(n) {
        return n && n.length ? Sn(n) : [];
      }
      function M1(n, i) {
        return n && n.length ? Sn(n, z(i, 2)) : [];
      }
      function L1(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? Sn(n, r, i) : [];
      }
      function fs(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = bn(n, function(s) {
          if ($e(s))
            return i = Fe(s.length, i), !0;
        }), ko(i, function(s) {
          return Se(n, Eo(s));
        });
      }
      function Bc(n, i) {
        if (!(n && n.length))
          return [];
        var s = fs(n);
        return i == null ? s : Se(s, function(l) {
          return lt(i, r, l);
        });
      }
      var I1 = J(function(n, i) {
        return $e(n) ? qr(n, i) : [];
      }), N1 = J(function(n) {
        return Ko(bn(n, $e));
      }), B1 = J(function(n) {
        var i = Tt(n);
        return $e(i) && (i = r), Ko(bn(n, $e), z(i, 2));
      }), W1 = J(function(n) {
        var i = Tt(n);
        return i = typeof i == "function" ? i : r, Ko(bn(n, $e), r, i);
      }), U1 = J(fs);
      function j1(n, i) {
        return rc(n || [], i || [], zr);
      }
      function H1(n, i) {
        return rc(n || [], i || [], Vr);
      }
      var z1 = J(function(n) {
        var i = n.length, s = i > 1 ? n[i - 1] : r;
        return s = typeof s == "function" ? (n.pop(), s) : r, Bc(n, s);
      });
      function Wc(n) {
        var i = h(n);
        return i.__chain__ = !0, i;
      }
      function q1(n, i) {
        return i(n), n;
      }
      function aa(n, i) {
        return i(n);
      }
      var G1 = on(function(n) {
        var i = n.length, s = i ? n[0] : 0, l = this.__wrapped__, f = function(p) {
          return Lo(p, n);
        };
        return i > 1 || this.__actions__.length || !(l instanceof ne) || !sn(s) ? this.thru(f) : (l = l.slice(s, +s + (i ? 1 : 0)), l.__actions__.push({
          func: aa,
          args: [f],
          thisArg: r
        }), new St(l, this.__chain__).thru(function(p) {
          return i && !p.length && p.push(r), p;
        }));
      });
      function Y1() {
        return Wc(this);
      }
      function V1() {
        return new St(this.value(), this.__chain__);
      }
      function K1() {
        this.__values__ === r && (this.__values__ = ef(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function X1() {
        return this;
      }
      function Z1(n) {
        for (var i, s = this; s instanceof zi; ) {
          var l = Fc(s);
          l.__index__ = 0, l.__values__ = r, i ? f.__wrapped__ = l : i = l;
          var f = l;
          s = s.__wrapped__;
        }
        return f.__wrapped__ = n, i;
      }
      function Q1() {
        var n = this.__wrapped__;
        if (n instanceof ne) {
          var i = n;
          return this.__actions__.length && (i = new ne(this)), i = i.reverse(), i.__actions__.push({
            func: aa,
            args: [cs],
            thisArg: r
          }), new St(i, this.__chain__);
        }
        return this.thru(cs);
      }
      function J1() {
        return nc(this.__wrapped__, this.__actions__);
      }
      var em = Zi(function(n, i, s) {
        he.call(n, s) ? ++n[s] : rn(n, s, 1);
      });
      function tm(n, i, s) {
        var l = V(n) ? vl : qg;
        return s && Xe(n, i, s) && (i = r), l(n, z(i, 3));
      }
      function nm(n, i) {
        var s = V(n) ? bn : Bl;
        return s(n, z(i, 3));
      }
      var rm = hc(Dc), im = hc(Mc);
      function am(n, i) {
        return Ue(oa(n, i), 1);
      }
      function om(n, i) {
        return Ue(oa(n, i), en);
      }
      function sm(n, i, s) {
        return s = s === r ? 1 : X(s), Ue(oa(n, i), s);
      }
      function Uc(n, i) {
        var s = V(n) ? xt : Cn;
        return s(n, z(i, 3));
      }
      function jc(n, i) {
        var s = V(n) ? Ov : Nl;
        return s(n, z(i, 3));
      }
      var um = Zi(function(n, i, s) {
        he.call(n, s) ? n[s].push(i) : rn(n, s, [i]);
      });
      function lm(n, i, s, l) {
        n = tt(n) ? n : br(n), s = s && !l ? X(s) : 0;
        var f = n.length;
        return s < 0 && (s = Fe(f + s, 0)), fa(n) ? s <= f && n.indexOf(i, s) > -1 : !!f && sr(n, i, s) > -1;
      }
      var cm = J(function(n, i, s) {
        var l = -1, f = typeof i == "function", p = tt(n) ? O(n.length) : [];
        return Cn(n, function(m) {
          p[++l] = f ? lt(i, m, s) : Gr(m, i, s);
        }), p;
      }), fm = Zi(function(n, i, s) {
        rn(n, s, i);
      });
      function oa(n, i) {
        var s = V(n) ? Se : ql;
        return s(n, z(i, 3));
      }
      function dm(n, i, s, l) {
        return n == null ? [] : (V(i) || (i = i == null ? [] : [i]), s = l ? r : s, V(s) || (s = s == null ? [] : [s]), Kl(n, i, s));
      }
      var hm = Zi(function(n, i, s) {
        n[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function pm(n, i, s) {
        var l = V(n) ? Co : bl, f = arguments.length < 3;
        return l(n, z(i, 4), s, f, Cn);
      }
      function vm(n, i, s) {
        var l = V(n) ? Tv : bl, f = arguments.length < 3;
        return l(n, z(i, 4), s, f, Nl);
      }
      function gm(n, i) {
        var s = V(n) ? bn : Bl;
        return s(n, la(z(i, 3)));
      }
      function _m(n) {
        var i = V(n) ? Dl : l_;
        return i(n);
      }
      function mm(n, i, s) {
        (s ? Xe(n, i, s) : i === r) ? i = 1 : i = X(i);
        var l = V(n) ? Wg : c_;
        return l(n, i);
      }
      function bm(n) {
        var i = V(n) ? Ug : d_;
        return i(n);
      }
      function ym(n) {
        if (n == null)
          return 0;
        if (tt(n))
          return fa(n) ? lr(n) : n.length;
        var i = qe(n);
        return i == x || i == se ? n.size : jo(n).length;
      }
      function wm(n, i, s) {
        var l = V(n) ? So : h_;
        return s && Xe(n, i, s) && (i = r), l(n, z(i, 3));
      }
      var xm = J(function(n, i) {
        if (n == null)
          return [];
        var s = i.length;
        return s > 1 && Xe(n, i[0], i[1]) ? i = [] : s > 2 && Xe(i[0], i[1], i[2]) && (i = [i[0]]), Kl(n, Ue(i, 1), []);
      }), sa = ng || function() {
        return We.Date.now();
      };
      function Cm(n, i) {
        if (typeof i != "function")
          throw new Ct(c);
        return n = X(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function Hc(n, i, s) {
        return i = s ? r : i, i = n && i == null ? n.length : i, an(n, ae, r, r, r, r, i);
      }
      function zc(n, i) {
        var s;
        if (typeof i != "function")
          throw new Ct(c);
        return n = X(n), function() {
          return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s;
        };
      }
      var ds = J(function(n, i, s) {
        var l = H;
        if (s.length) {
          var f = wn(s, _r(ds));
          l |= Q;
        }
        return an(n, l, i, s, f);
      }), qc = J(function(n, i, s) {
        var l = H | U;
        if (s.length) {
          var f = wn(s, _r(qc));
          l |= Q;
        }
        return an(i, l, n, s, f);
      });
      function Gc(n, i, s) {
        i = s ? r : i;
        var l = an(n, re, r, r, r, r, r, i);
        return l.placeholder = Gc.placeholder, l;
      }
      function Yc(n, i, s) {
        i = s ? r : i;
        var l = an(n, ye, r, r, r, r, r, i);
        return l.placeholder = Yc.placeholder, l;
      }
      function Vc(n, i, s) {
        var l, f, p, m, w, E, $ = 0, P = !1, F = !1, I = !0;
        if (typeof n != "function")
          throw new Ct(c);
        i = kt(i) || 0, Oe(s) && (P = !!s.leading, F = "maxWait" in s, p = F ? Fe(kt(s.maxWait) || 0, i) : p, I = "trailing" in s ? !!s.trailing : I);
        function j(Pe) {
          var Mt = l, cn = f;
          return l = f = r, $ = Pe, m = n.apply(cn, Mt), m;
        }
        function q(Pe) {
          return $ = Pe, w = Zr(te, i), P ? j(Pe) : m;
        }
        function Z(Pe) {
          var Mt = Pe - E, cn = Pe - $, pf = i - Mt;
          return F ? ze(pf, p - cn) : pf;
        }
        function G(Pe) {
          var Mt = Pe - E, cn = Pe - $;
          return E === r || Mt >= i || Mt < 0 || F && cn >= p;
        }
        function te() {
          var Pe = sa();
          if (G(Pe))
            return ie(Pe);
          w = Zr(te, Z(Pe));
        }
        function ie(Pe) {
          return w = r, I && l ? j(Pe) : (l = f = r, m);
        }
        function ht() {
          w !== r && ic(w), $ = 0, l = E = f = w = r;
        }
        function Ze() {
          return w === r ? m : ie(sa());
        }
        function pt() {
          var Pe = sa(), Mt = G(Pe);
          if (l = arguments, f = this, E = Pe, Mt) {
            if (w === r)
              return q(E);
            if (F)
              return ic(w), w = Zr(te, i), j(E);
          }
          return w === r && (w = Zr(te, i)), m;
        }
        return pt.cancel = ht, pt.flush = Ze, pt;
      }
      var Sm = J(function(n, i) {
        return Il(n, 1, i);
      }), Em = J(function(n, i, s) {
        return Il(n, kt(i) || 0, s);
      });
      function Om(n) {
        return an(n, K);
      }
      function ua(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Ct(c);
        var s = function() {
          var l = arguments, f = i ? i.apply(this, l) : l[0], p = s.cache;
          if (p.has(f))
            return p.get(f);
          var m = n.apply(this, l);
          return s.cache = p.set(f, m) || p, m;
        };
        return s.cache = new (ua.Cache || nn)(), s;
      }
      ua.Cache = nn;
      function la(n) {
        if (typeof n != "function")
          throw new Ct(c);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function Tm(n) {
        return zc(2, n);
      }
      var km = p_(function(n, i) {
        i = i.length == 1 && V(i[0]) ? Se(i[0], ct(z())) : Se(Ue(i, 1), ct(z()));
        var s = i.length;
        return J(function(l) {
          for (var f = -1, p = ze(l.length, s); ++f < p; )
            l[f] = i[f].call(this, l[f]);
          return lt(n, this, l);
        });
      }), hs = J(function(n, i) {
        var s = wn(i, _r(hs));
        return an(n, Q, r, i, s);
      }), Kc = J(function(n, i) {
        var s = wn(i, _r(Kc));
        return an(n, B, r, i, s);
      }), Am = on(function(n, i) {
        return an(n, ve, r, r, r, i);
      });
      function $m(n, i) {
        if (typeof n != "function")
          throw new Ct(c);
        return i = i === r ? i : X(i), J(n, i);
      }
      function Pm(n, i) {
        if (typeof n != "function")
          throw new Ct(c);
        return i = i == null ? 0 : Fe(X(i), 0), J(function(s) {
          var l = s[i], f = On(s, 0, i);
          return l && yn(f, l), lt(n, this, f);
        });
      }
      function Rm(n, i, s) {
        var l = !0, f = !0;
        if (typeof n != "function")
          throw new Ct(c);
        return Oe(s) && (l = "leading" in s ? !!s.leading : l, f = "trailing" in s ? !!s.trailing : f), Vc(n, i, {
          leading: l,
          maxWait: i,
          trailing: f
        });
      }
      function Fm(n) {
        return Hc(n, 1);
      }
      function Dm(n, i) {
        return hs(Zo(i), n);
      }
      function Mm() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return V(n) ? n : [n];
      }
      function Lm(n) {
        return Et(n, k);
      }
      function Im(n, i) {
        return i = typeof i == "function" ? i : r, Et(n, k, i);
      }
      function Nm(n) {
        return Et(n, S | k);
      }
      function Bm(n, i) {
        return i = typeof i == "function" ? i : r, Et(n, S | k, i);
      }
      function Wm(n, i) {
        return i == null || Ll(n, i, Ie(i));
      }
      function Dt(n, i) {
        return n === i || n !== n && i !== i;
      }
      var Um = ta(Bo), jm = ta(function(n, i) {
        return n >= i;
      }), Hn = jl(/* @__PURE__ */ function() {
        return arguments;
      }()) ? jl : function(n) {
        return Ae(n) && he.call(n, "callee") && !kl.call(n, "callee");
      }, V = O.isArray, Hm = ll ? ct(ll) : Zg;
      function tt(n) {
        return n != null && ca(n.length) && !un(n);
      }
      function $e(n) {
        return Ae(n) && tt(n);
      }
      function zm(n) {
        return n === !0 || n === !1 || Ae(n) && Ke(n) == mn;
      }
      var Tn = ig || Ss, qm = cl ? ct(cl) : Qg;
      function Gm(n) {
        return Ae(n) && n.nodeType === 1 && !Qr(n);
      }
      function Ym(n) {
        if (n == null)
          return !0;
        if (tt(n) && (V(n) || typeof n == "string" || typeof n.splice == "function" || Tn(n) || mr(n) || Hn(n)))
          return !n.length;
        var i = qe(n);
        if (i == x || i == se)
          return !n.size;
        if (Xr(n))
          return !jo(n).length;
        for (var s in n)
          if (he.call(n, s))
            return !1;
        return !0;
      }
      function Vm(n, i) {
        return Yr(n, i);
      }
      function Km(n, i, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(n, i) : r;
        return l === r ? Yr(n, i, r, s) : !!l;
      }
      function ps(n) {
        if (!Ae(n))
          return !1;
        var i = Ke(n);
        return i == rr || i == Pt || typeof n.message == "string" && typeof n.name == "string" && !Qr(n);
      }
      function Xm(n) {
        return typeof n == "number" && $l(n);
      }
      function un(n) {
        if (!Oe(n))
          return !1;
        var i = Ke(n);
        return i == ir || i == _ || i == Si || i == oe;
      }
      function Xc(n) {
        return typeof n == "number" && n == X(n);
      }
      function ca(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= zt;
      }
      function Oe(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function Ae(n) {
        return n != null && typeof n == "object";
      }
      var Zc = fl ? ct(fl) : e_;
      function Zm(n, i) {
        return n === i || Uo(n, i, is(i));
      }
      function Qm(n, i, s) {
        return s = typeof s == "function" ? s : r, Uo(n, i, is(i), s);
      }
      function Jm(n) {
        return Qc(n) && n != +n;
      }
      function eb(n) {
        if (I_(n))
          throw new Y(u);
        return Hl(n);
      }
      function tb(n) {
        return n === null;
      }
      function nb(n) {
        return n == null;
      }
      function Qc(n) {
        return typeof n == "number" || Ae(n) && Ke(n) == b;
      }
      function Qr(n) {
        if (!Ae(n) || Ke(n) != L)
          return !1;
        var i = Ii(n);
        if (i === null)
          return !0;
        var s = he.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && Fi.call(s) == Qv;
      }
      var vs = dl ? ct(dl) : t_;
      function rb(n) {
        return Xc(n) && n >= -zt && n <= zt;
      }
      var Jc = hl ? ct(hl) : n_;
      function fa(n) {
        return typeof n == "string" || !V(n) && Ae(n) && Ke(n) == Le;
      }
      function dt(n) {
        return typeof n == "symbol" || Ae(n) && Ke(n) == Gt;
      }
      var mr = pl ? ct(pl) : r_;
      function ib(n) {
        return n === r;
      }
      function ab(n) {
        return Ae(n) && qe(n) == Lr;
      }
      function ob(n) {
        return Ae(n) && Ke(n) == x0;
      }
      var sb = ta(Ho), ub = ta(function(n, i) {
        return n <= i;
      });
      function ef(n) {
        if (!n)
          return [];
        if (tt(n))
          return fa(n) ? Rt(n) : et(n);
        if (Br && n[Br])
          return Wv(n[Br]());
        var i = qe(n), s = i == x ? $o : i == se ? $i : br;
        return s(n);
      }
      function ln(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = kt(n), n === en || n === -en) {
          var i = n < 0 ? -1 : 1;
          return i * Ci;
        }
        return n === n ? n : 0;
      }
      function X(n) {
        var i = ln(n), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function tf(n) {
        return n ? Bn(X(n), 0, Ye) : 0;
      }
      function kt(n) {
        if (typeof n == "number")
          return n;
        if (dt(n))
          return fe;
        if (Oe(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Oe(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = yl(n);
        var s = H0.test(n);
        return s || q0.test(n) ? Cv(n.slice(2), s ? 2 : 8) : j0.test(n) ? fe : +n;
      }
      function nf(n) {
        return Vt(n, nt(n));
      }
      function lb(n) {
        return n ? Bn(X(n), -zt, zt) : n === 0 ? n : 0;
      }
      function le(n) {
        return n == null ? "" : ft(n);
      }
      var cb = vr(function(n, i) {
        if (Xr(i) || tt(i)) {
          Vt(i, Ie(i), n);
          return;
        }
        for (var s in i)
          he.call(i, s) && zr(n, s, i[s]);
      }), rf = vr(function(n, i) {
        Vt(i, nt(i), n);
      }), da = vr(function(n, i, s, l) {
        Vt(i, nt(i), n, l);
      }), fb = vr(function(n, i, s, l) {
        Vt(i, Ie(i), n, l);
      }), db = on(Lo);
      function hb(n, i) {
        var s = pr(n);
        return i == null ? s : Ml(s, i);
      }
      var pb = J(function(n, i) {
        n = me(n);
        var s = -1, l = i.length, f = l > 2 ? i[2] : r;
        for (f && Xe(i[0], i[1], f) && (l = 1); ++s < l; )
          for (var p = i[s], m = nt(p), w = -1, E = m.length; ++w < E; ) {
            var $ = m[w], P = n[$];
            (P === r || Dt(P, fr[$]) && !he.call(n, $)) && (n[$] = p[$]);
          }
        return n;
      }), vb = J(function(n) {
        return n.push(r, yc), lt(af, r, n);
      });
      function gb(n, i) {
        return gl(n, z(i, 3), Yt);
      }
      function _b(n, i) {
        return gl(n, z(i, 3), No);
      }
      function mb(n, i) {
        return n == null ? n : Io(n, z(i, 3), nt);
      }
      function bb(n, i) {
        return n == null ? n : Wl(n, z(i, 3), nt);
      }
      function yb(n, i) {
        return n && Yt(n, z(i, 3));
      }
      function wb(n, i) {
        return n && No(n, z(i, 3));
      }
      function xb(n) {
        return n == null ? [] : Yi(n, Ie(n));
      }
      function Cb(n) {
        return n == null ? [] : Yi(n, nt(n));
      }
      function gs(n, i, s) {
        var l = n == null ? r : Wn(n, i);
        return l === r ? s : l;
      }
      function Sb(n, i) {
        return n != null && Cc(n, i, Yg);
      }
      function _s(n, i) {
        return n != null && Cc(n, i, Vg);
      }
      var Eb = vc(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Di.call(i)), n[i] = s;
      }, bs(rt)), Ob = vc(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Di.call(i)), he.call(n, i) ? n[i].push(s) : n[i] = [s];
      }, z), Tb = J(Gr);
      function Ie(n) {
        return tt(n) ? Fl(n) : jo(n);
      }
      function nt(n) {
        return tt(n) ? Fl(n, !0) : i_(n);
      }
      function kb(n, i) {
        var s = {};
        return i = z(i, 3), Yt(n, function(l, f, p) {
          rn(s, i(l, f, p), l);
        }), s;
      }
      function Ab(n, i) {
        var s = {};
        return i = z(i, 3), Yt(n, function(l, f, p) {
          rn(s, f, i(l, f, p));
        }), s;
      }
      var $b = vr(function(n, i, s) {
        Vi(n, i, s);
      }), af = vr(function(n, i, s, l) {
        Vi(n, i, s, l);
      }), Pb = on(function(n, i) {
        var s = {};
        if (n == null)
          return s;
        var l = !1;
        i = Se(i, function(p) {
          return p = En(p, n), l || (l = p.length > 1), p;
        }), Vt(n, ns(n), s), l && (s = Et(s, S | R | k, E_));
        for (var f = i.length; f--; )
          Vo(s, i[f]);
        return s;
      });
      function Rb(n, i) {
        return of(n, la(z(i)));
      }
      var Fb = on(function(n, i) {
        return n == null ? {} : o_(n, i);
      });
      function of(n, i) {
        if (n == null)
          return {};
        var s = Se(ns(n), function(l) {
          return [l];
        });
        return i = z(i), Xl(n, s, function(l, f) {
          return i(l, f[0]);
        });
      }
      function Db(n, i, s) {
        i = En(i, n);
        var l = -1, f = i.length;
        for (f || (f = 1, n = r); ++l < f; ) {
          var p = n == null ? r : n[Kt(i[l])];
          p === r && (l = f, p = s), n = un(p) ? p.call(n) : p;
        }
        return n;
      }
      function Mb(n, i, s) {
        return n == null ? n : Vr(n, i, s);
      }
      function Lb(n, i, s, l) {
        return l = typeof l == "function" ? l : r, n == null ? n : Vr(n, i, s, l);
      }
      var sf = mc(Ie), uf = mc(nt);
      function Ib(n, i, s) {
        var l = V(n), f = l || Tn(n) || mr(n);
        if (i = z(i, 4), s == null) {
          var p = n && n.constructor;
          f ? s = l ? new p() : [] : Oe(n) ? s = un(p) ? pr(Ii(n)) : {} : s = {};
        }
        return (f ? xt : Yt)(n, function(m, w, E) {
          return i(s, m, w, E);
        }), s;
      }
      function Nb(n, i) {
        return n == null ? !0 : Vo(n, i);
      }
      function Bb(n, i, s) {
        return n == null ? n : tc(n, i, Zo(s));
      }
      function Wb(n, i, s, l) {
        return l = typeof l == "function" ? l : r, n == null ? n : tc(n, i, Zo(s), l);
      }
      function br(n) {
        return n == null ? [] : Ao(n, Ie(n));
      }
      function Ub(n) {
        return n == null ? [] : Ao(n, nt(n));
      }
      function jb(n, i, s) {
        return s === r && (s = i, i = r), s !== r && (s = kt(s), s = s === s ? s : 0), i !== r && (i = kt(i), i = i === i ? i : 0), Bn(kt(n), i, s);
      }
      function Hb(n, i, s) {
        return i = ln(i), s === r ? (s = i, i = 0) : s = ln(s), n = kt(n), Kg(n, i, s);
      }
      function zb(n, i, s) {
        if (s && typeof s != "boolean" && Xe(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = ln(n), i === r ? (i = n, n = 0) : i = ln(i)), n > i) {
          var l = n;
          n = i, i = l;
        }
        if (s || n % 1 || i % 1) {
          var f = Pl();
          return ze(n + f * (i - n + xv("1e-" + ((f + "").length - 1))), i);
        }
        return qo(n, i);
      }
      var qb = gr(function(n, i, s) {
        return i = i.toLowerCase(), n + (s ? lf(i) : i);
      });
      function lf(n) {
        return ms(le(n).toLowerCase());
      }
      function cf(n) {
        return n = le(n), n && n.replace(Y0, Mv).replace(dv, "");
      }
      function Gb(n, i, s) {
        n = le(n), i = ft(i);
        var l = n.length;
        s = s === r ? l : Bn(X(s), 0, l);
        var f = s;
        return s -= i.length, s >= 0 && n.slice(s, f) == i;
      }
      function Yb(n) {
        return n = le(n), n && T0.test(n) ? n.replace(Wu, Lv) : n;
      }
      function Vb(n) {
        return n = le(n), n && F0.test(n) ? n.replace(ho, "\\$&") : n;
      }
      var Kb = gr(function(n, i, s) {
        return n + (s ? "-" : "") + i.toLowerCase();
      }), Xb = gr(function(n, i, s) {
        return n + (s ? " " : "") + i.toLowerCase();
      }), Zb = dc("toLowerCase");
      function Qb(n, i, s) {
        n = le(n), i = X(i);
        var l = i ? lr(n) : 0;
        if (!i || l >= i)
          return n;
        var f = (i - l) / 2;
        return ea(Ui(f), s) + n + ea(Wi(f), s);
      }
      function Jb(n, i, s) {
        n = le(n), i = X(i);
        var l = i ? lr(n) : 0;
        return i && l < i ? n + ea(i - l, s) : n;
      }
      function e2(n, i, s) {
        n = le(n), i = X(i);
        var l = i ? lr(n) : 0;
        return i && l < i ? ea(i - l, s) + n : n;
      }
      function t2(n, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), ug(le(n).replace(po, ""), i || 0);
      }
      function n2(n, i, s) {
        return (s ? Xe(n, i, s) : i === r) ? i = 1 : i = X(i), Go(le(n), i);
      }
      function r2() {
        var n = arguments, i = le(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var i2 = gr(function(n, i, s) {
        return n + (s ? "_" : "") + i.toLowerCase();
      });
      function a2(n, i, s) {
        return s && typeof s != "number" && Xe(n, i, s) && (i = s = r), s = s === r ? Ye : s >>> 0, s ? (n = le(n), n && (typeof i == "string" || i != null && !vs(i)) && (i = ft(i), !i && ur(n)) ? On(Rt(n), 0, s) : n.split(i, s)) : [];
      }
      var o2 = gr(function(n, i, s) {
        return n + (s ? " " : "") + ms(i);
      });
      function s2(n, i, s) {
        return n = le(n), s = s == null ? 0 : Bn(X(s), 0, n.length), i = ft(i), n.slice(s, s + i.length) == i;
      }
      function u2(n, i, s) {
        var l = h.templateSettings;
        s && Xe(n, i, s) && (i = r), n = le(n), i = da({}, i, l, bc);
        var f = da({}, i.imports, l.imports, bc), p = Ie(f), m = Ao(f, p), w, E, $ = 0, P = i.interpolate || Ei, F = "__p += '", I = Po(
          (i.escape || Ei).source + "|" + P.source + "|" + (P === Uu ? U0 : Ei).source + "|" + (i.evaluate || Ei).source + "|$",
          "g"
        ), j = "//# sourceURL=" + (he.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_v + "]") + `
`;
        n.replace(I, function(G, te, ie, ht, Ze, pt) {
          return ie || (ie = ht), F += n.slice($, pt).replace(V0, Iv), te && (w = !0, F += `' +
__e(` + te + `) +
'`), Ze && (E = !0, F += `';
` + Ze + `;
__p += '`), ie && (F += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), $ = pt + G.length, G;
        }), F += `';
`;
        var q = he.call(i, "variable") && i.variable;
        if (!q)
          F = `with (obj) {
` + F + `
}
`;
        else if (B0.test(q))
          throw new Y(d);
        F = (E ? F.replace(C0, "") : F).replace(S0, "$1").replace(E0, "$1;"), F = "function(" + (q || "obj") + `) {
` + (q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var Z = df(function() {
          return ue(p, j + "return " + F).apply(r, m);
        });
        if (Z.source = F, ps(Z))
          throw Z;
        return Z;
      }
      function l2(n) {
        return le(n).toLowerCase();
      }
      function c2(n) {
        return le(n).toUpperCase();
      }
      function f2(n, i, s) {
        if (n = le(n), n && (s || i === r))
          return yl(n);
        if (!n || !(i = ft(i)))
          return n;
        var l = Rt(n), f = Rt(i), p = wl(l, f), m = xl(l, f) + 1;
        return On(l, p, m).join("");
      }
      function d2(n, i, s) {
        if (n = le(n), n && (s || i === r))
          return n.slice(0, Sl(n) + 1);
        if (!n || !(i = ft(i)))
          return n;
        var l = Rt(n), f = xl(l, Rt(i)) + 1;
        return On(l, 0, f).join("");
      }
      function h2(n, i, s) {
        if (n = le(n), n && (s || i === r))
          return n.replace(po, "");
        if (!n || !(i = ft(i)))
          return n;
        var l = Rt(n), f = wl(l, Rt(i));
        return On(l, f).join("");
      }
      function p2(n, i) {
        var s = De, l = Ht;
        if (Oe(i)) {
          var f = "separator" in i ? i.separator : f;
          s = "length" in i ? X(i.length) : s, l = "omission" in i ? ft(i.omission) : l;
        }
        n = le(n);
        var p = n.length;
        if (ur(n)) {
          var m = Rt(n);
          p = m.length;
        }
        if (s >= p)
          return n;
        var w = s - lr(l);
        if (w < 1)
          return l;
        var E = m ? On(m, 0, w).join("") : n.slice(0, w);
        if (f === r)
          return E + l;
        if (m && (w += E.length - w), vs(f)) {
          if (n.slice(w).search(f)) {
            var $, P = E;
            for (f.global || (f = Po(f.source, le(ju.exec(f)) + "g")), f.lastIndex = 0; $ = f.exec(P); )
              var F = $.index;
            E = E.slice(0, F === r ? w : F);
          }
        } else if (n.indexOf(ft(f), w) != w) {
          var I = E.lastIndexOf(f);
          I > -1 && (E = E.slice(0, I));
        }
        return E + l;
      }
      function v2(n) {
        return n = le(n), n && O0.test(n) ? n.replace(Bu, zv) : n;
      }
      var g2 = gr(function(n, i, s) {
        return n + (s ? " " : "") + i.toUpperCase();
      }), ms = dc("toUpperCase");
      function ff(n, i, s) {
        return n = le(n), i = s ? r : i, i === r ? Bv(n) ? Yv(n) : $v(n) : n.match(i) || [];
      }
      var df = J(function(n, i) {
        try {
          return lt(n, r, i);
        } catch (s) {
          return ps(s) ? s : new Y(s);
        }
      }), _2 = on(function(n, i) {
        return xt(i, function(s) {
          s = Kt(s), rn(n, s, ds(n[s], n));
        }), n;
      });
      function m2(n) {
        var i = n == null ? 0 : n.length, s = z();
        return n = i ? Se(n, function(l) {
          if (typeof l[1] != "function")
            throw new Ct(c);
          return [s(l[0]), l[1]];
        }) : [], J(function(l) {
          for (var f = -1; ++f < i; ) {
            var p = n[f];
            if (lt(p[0], this, l))
              return lt(p[1], this, l);
          }
        });
      }
      function b2(n) {
        return zg(Et(n, S));
      }
      function bs(n) {
        return function() {
          return n;
        };
      }
      function y2(n, i) {
        return n == null || n !== n ? i : n;
      }
      var w2 = pc(), x2 = pc(!0);
      function rt(n) {
        return n;
      }
      function ys(n) {
        return zl(typeof n == "function" ? n : Et(n, S));
      }
      function C2(n) {
        return Gl(Et(n, S));
      }
      function S2(n, i) {
        return Yl(n, Et(i, S));
      }
      var E2 = J(function(n, i) {
        return function(s) {
          return Gr(s, n, i);
        };
      }), O2 = J(function(n, i) {
        return function(s) {
          return Gr(n, s, i);
        };
      });
      function ws(n, i, s) {
        var l = Ie(i), f = Yi(i, l);
        s == null && !(Oe(i) && (f.length || !l.length)) && (s = i, i = n, n = this, f = Yi(i, Ie(i)));
        var p = !(Oe(s) && "chain" in s) || !!s.chain, m = un(n);
        return xt(f, function(w) {
          var E = i[w];
          n[w] = E, m && (n.prototype[w] = function() {
            var $ = this.__chain__;
            if (p || $) {
              var P = n(this.__wrapped__), F = P.__actions__ = et(this.__actions__);
              return F.push({ func: E, args: arguments, thisArg: n }), P.__chain__ = $, P;
            }
            return E.apply(n, yn([this.value()], arguments));
          });
        }), n;
      }
      function T2() {
        return We._ === this && (We._ = Jv), this;
      }
      function xs() {
      }
      function k2(n) {
        return n = X(n), J(function(i) {
          return Vl(i, n);
        });
      }
      var A2 = Jo(Se), $2 = Jo(vl), P2 = Jo(So);
      function hf(n) {
        return os(n) ? Eo(Kt(n)) : s_(n);
      }
      function R2(n) {
        return function(i) {
          return n == null ? r : Wn(n, i);
        };
      }
      var F2 = gc(), D2 = gc(!0);
      function Cs() {
        return [];
      }
      function Ss() {
        return !1;
      }
      function M2() {
        return {};
      }
      function L2() {
        return "";
      }
      function I2() {
        return !0;
      }
      function N2(n, i) {
        if (n = X(n), n < 1 || n > zt)
          return [];
        var s = Ye, l = ze(n, Ye);
        i = z(i), n -= Ye;
        for (var f = ko(l, i); ++s < n; )
          i(s);
        return f;
      }
      function B2(n) {
        return V(n) ? Se(n, Kt) : dt(n) ? [n] : et(Rc(le(n)));
      }
      function W2(n) {
        var i = ++Zv;
        return le(n) + i;
      }
      var U2 = Ji(function(n, i) {
        return n + i;
      }, 0), j2 = es("ceil"), H2 = Ji(function(n, i) {
        return n / i;
      }, 1), z2 = es("floor");
      function q2(n) {
        return n && n.length ? Gi(n, rt, Bo) : r;
      }
      function G2(n, i) {
        return n && n.length ? Gi(n, z(i, 2), Bo) : r;
      }
      function Y2(n) {
        return ml(n, rt);
      }
      function V2(n, i) {
        return ml(n, z(i, 2));
      }
      function K2(n) {
        return n && n.length ? Gi(n, rt, Ho) : r;
      }
      function X2(n, i) {
        return n && n.length ? Gi(n, z(i, 2), Ho) : r;
      }
      var Z2 = Ji(function(n, i) {
        return n * i;
      }, 1), Q2 = es("round"), J2 = Ji(function(n, i) {
        return n - i;
      }, 0);
      function ey(n) {
        return n && n.length ? To(n, rt) : 0;
      }
      function ty(n, i) {
        return n && n.length ? To(n, z(i, 2)) : 0;
      }
      return h.after = Cm, h.ary = Hc, h.assign = cb, h.assignIn = rf, h.assignInWith = da, h.assignWith = fb, h.at = db, h.before = zc, h.bind = ds, h.bindAll = _2, h.bindKey = qc, h.castArray = Mm, h.chain = Wc, h.chunk = z_, h.compact = q_, h.concat = G_, h.cond = m2, h.conforms = b2, h.constant = bs, h.countBy = em, h.create = hb, h.curry = Gc, h.curryRight = Yc, h.debounce = Vc, h.defaults = pb, h.defaultsDeep = vb, h.defer = Sm, h.delay = Em, h.difference = Y_, h.differenceBy = V_, h.differenceWith = K_, h.drop = X_, h.dropRight = Z_, h.dropRightWhile = Q_, h.dropWhile = J_, h.fill = e1, h.filter = nm, h.flatMap = am, h.flatMapDeep = om, h.flatMapDepth = sm, h.flatten = Lc, h.flattenDeep = t1, h.flattenDepth = n1, h.flip = Om, h.flow = w2, h.flowRight = x2, h.fromPairs = r1, h.functions = xb, h.functionsIn = Cb, h.groupBy = um, h.initial = a1, h.intersection = o1, h.intersectionBy = s1, h.intersectionWith = u1, h.invert = Eb, h.invertBy = Ob, h.invokeMap = cm, h.iteratee = ys, h.keyBy = fm, h.keys = Ie, h.keysIn = nt, h.map = oa, h.mapKeys = kb, h.mapValues = Ab, h.matches = C2, h.matchesProperty = S2, h.memoize = ua, h.merge = $b, h.mergeWith = af, h.method = E2, h.methodOf = O2, h.mixin = ws, h.negate = la, h.nthArg = k2, h.omit = Pb, h.omitBy = Rb, h.once = Tm, h.orderBy = dm, h.over = A2, h.overArgs = km, h.overEvery = $2, h.overSome = P2, h.partial = hs, h.partialRight = Kc, h.partition = hm, h.pick = Fb, h.pickBy = of, h.property = hf, h.propertyOf = R2, h.pull = d1, h.pullAll = Nc, h.pullAllBy = h1, h.pullAllWith = p1, h.pullAt = v1, h.range = F2, h.rangeRight = D2, h.rearg = Am, h.reject = gm, h.remove = g1, h.rest = $m, h.reverse = cs, h.sampleSize = mm, h.set = Mb, h.setWith = Lb, h.shuffle = bm, h.slice = _1, h.sortBy = xm, h.sortedUniq = S1, h.sortedUniqBy = E1, h.split = a2, h.spread = Pm, h.tail = O1, h.take = T1, h.takeRight = k1, h.takeRightWhile = A1, h.takeWhile = $1, h.tap = q1, h.throttle = Rm, h.thru = aa, h.toArray = ef, h.toPairs = sf, h.toPairsIn = uf, h.toPath = B2, h.toPlainObject = nf, h.transform = Ib, h.unary = Fm, h.union = P1, h.unionBy = R1, h.unionWith = F1, h.uniq = D1, h.uniqBy = M1, h.uniqWith = L1, h.unset = Nb, h.unzip = fs, h.unzipWith = Bc, h.update = Bb, h.updateWith = Wb, h.values = br, h.valuesIn = Ub, h.without = I1, h.words = ff, h.wrap = Dm, h.xor = N1, h.xorBy = B1, h.xorWith = W1, h.zip = U1, h.zipObject = j1, h.zipObjectDeep = H1, h.zipWith = z1, h.entries = sf, h.entriesIn = uf, h.extend = rf, h.extendWith = da, ws(h, h), h.add = U2, h.attempt = df, h.camelCase = qb, h.capitalize = lf, h.ceil = j2, h.clamp = jb, h.clone = Lm, h.cloneDeep = Nm, h.cloneDeepWith = Bm, h.cloneWith = Im, h.conformsTo = Wm, h.deburr = cf, h.defaultTo = y2, h.divide = H2, h.endsWith = Gb, h.eq = Dt, h.escape = Yb, h.escapeRegExp = Vb, h.every = tm, h.find = rm, h.findIndex = Dc, h.findKey = gb, h.findLast = im, h.findLastIndex = Mc, h.findLastKey = _b, h.floor = z2, h.forEach = Uc, h.forEachRight = jc, h.forIn = mb, h.forInRight = bb, h.forOwn = yb, h.forOwnRight = wb, h.get = gs, h.gt = Um, h.gte = jm, h.has = Sb, h.hasIn = _s, h.head = Ic, h.identity = rt, h.includes = lm, h.indexOf = i1, h.inRange = Hb, h.invoke = Tb, h.isArguments = Hn, h.isArray = V, h.isArrayBuffer = Hm, h.isArrayLike = tt, h.isArrayLikeObject = $e, h.isBoolean = zm, h.isBuffer = Tn, h.isDate = qm, h.isElement = Gm, h.isEmpty = Ym, h.isEqual = Vm, h.isEqualWith = Km, h.isError = ps, h.isFinite = Xm, h.isFunction = un, h.isInteger = Xc, h.isLength = ca, h.isMap = Zc, h.isMatch = Zm, h.isMatchWith = Qm, h.isNaN = Jm, h.isNative = eb, h.isNil = nb, h.isNull = tb, h.isNumber = Qc, h.isObject = Oe, h.isObjectLike = Ae, h.isPlainObject = Qr, h.isRegExp = vs, h.isSafeInteger = rb, h.isSet = Jc, h.isString = fa, h.isSymbol = dt, h.isTypedArray = mr, h.isUndefined = ib, h.isWeakMap = ab, h.isWeakSet = ob, h.join = l1, h.kebabCase = Kb, h.last = Tt, h.lastIndexOf = c1, h.lowerCase = Xb, h.lowerFirst = Zb, h.lt = sb, h.lte = ub, h.max = q2, h.maxBy = G2, h.mean = Y2, h.meanBy = V2, h.min = K2, h.minBy = X2, h.stubArray = Cs, h.stubFalse = Ss, h.stubObject = M2, h.stubString = L2, h.stubTrue = I2, h.multiply = Z2, h.nth = f1, h.noConflict = T2, h.noop = xs, h.now = sa, h.pad = Qb, h.padEnd = Jb, h.padStart = e2, h.parseInt = t2, h.random = zb, h.reduce = pm, h.reduceRight = vm, h.repeat = n2, h.replace = r2, h.result = Db, h.round = Q2, h.runInContext = C, h.sample = _m, h.size = ym, h.snakeCase = i2, h.some = wm, h.sortedIndex = m1, h.sortedIndexBy = b1, h.sortedIndexOf = y1, h.sortedLastIndex = w1, h.sortedLastIndexBy = x1, h.sortedLastIndexOf = C1, h.startCase = o2, h.startsWith = s2, h.subtract = J2, h.sum = ey, h.sumBy = ty, h.template = u2, h.times = N2, h.toFinite = ln, h.toInteger = X, h.toLength = tf, h.toLower = l2, h.toNumber = kt, h.toSafeInteger = lb, h.toString = le, h.toUpper = c2, h.trim = f2, h.trimEnd = d2, h.trimStart = h2, h.truncate = p2, h.unescape = v2, h.uniqueId = W2, h.upperCase = g2, h.upperFirst = ms, h.each = Uc, h.eachRight = jc, h.first = Ic, ws(h, function() {
        var n = {};
        return Yt(h, function(i, s) {
          he.call(h.prototype, s) || (n[s] = i);
        }), n;
      }(), { chain: !1 }), h.VERSION = a, xt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        h[n].placeholder = h;
      }), xt(["drop", "take"], function(n, i) {
        ne.prototype[n] = function(s) {
          s = s === r ? 1 : Fe(X(s), 0);
          var l = this.__filtered__ && !i ? new ne(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ze(s, l.__takeCount__) : l.__views__.push({
            size: ze(s, Ye),
            type: n + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ne.prototype[n + "Right"] = function(s) {
          return this.reverse()[n](s).reverse();
        };
      }), xt(["filter", "map", "takeWhile"], function(n, i) {
        var s = i + 1, l = s == xi || s == Mr;
        ne.prototype[n] = function(f) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: z(f, 3),
            type: s
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), xt(["head", "last"], function(n, i) {
        var s = "take" + (i ? "Right" : "");
        ne.prototype[n] = function() {
          return this[s](1).value()[0];
        };
      }), xt(["initial", "tail"], function(n, i) {
        var s = "drop" + (i ? "" : "Right");
        ne.prototype[n] = function() {
          return this.__filtered__ ? new ne(this) : this[s](1);
        };
      }), ne.prototype.compact = function() {
        return this.filter(rt);
      }, ne.prototype.find = function(n) {
        return this.filter(n).head();
      }, ne.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, ne.prototype.invokeMap = J(function(n, i) {
        return typeof n == "function" ? new ne(this) : this.map(function(s) {
          return Gr(s, n, i);
        });
      }), ne.prototype.reject = function(n) {
        return this.filter(la(z(n)));
      }, ne.prototype.slice = function(n, i) {
        n = X(n);
        var s = this;
        return s.__filtered__ && (n > 0 || i < 0) ? new ne(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = X(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s);
      }, ne.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, ne.prototype.toArray = function() {
        return this.take(Ye);
      }, Yt(ne.prototype, function(n, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), f = h[l ? "take" + (i == "last" ? "Right" : "") : i], p = l || /^find/.test(i);
        f && (h.prototype[i] = function() {
          var m = this.__wrapped__, w = l ? [1] : arguments, E = m instanceof ne, $ = w[0], P = E || V(m), F = function(te) {
            var ie = f.apply(h, yn([te], w));
            return l && I ? ie[0] : ie;
          };
          P && s && typeof $ == "function" && $.length != 1 && (E = P = !1);
          var I = this.__chain__, j = !!this.__actions__.length, q = p && !I, Z = E && !j;
          if (!p && P) {
            m = Z ? m : new ne(this);
            var G = n.apply(m, w);
            return G.__actions__.push({ func: aa, args: [F], thisArg: r }), new St(G, I);
          }
          return q && Z ? n.apply(this, w) : (G = this.thru(F), q ? l ? G.value()[0] : G.value() : G);
        });
      }), xt(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Pi[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(n);
        h.prototype[n] = function() {
          var f = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return i.apply(V(p) ? p : [], f);
          }
          return this[s](function(m) {
            return i.apply(V(m) ? m : [], f);
          });
        };
      }), Yt(ne.prototype, function(n, i) {
        var s = h[i];
        if (s) {
          var l = s.name + "";
          he.call(hr, l) || (hr[l] = []), hr[l].push({ name: i, func: s });
        }
      }), hr[Qi(r, U).name] = [{
        name: "wrapper",
        func: r
      }], ne.prototype.clone = vg, ne.prototype.reverse = gg, ne.prototype.value = _g, h.prototype.at = G1, h.prototype.chain = Y1, h.prototype.commit = V1, h.prototype.next = K1, h.prototype.plant = Z1, h.prototype.reverse = Q1, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = J1, h.prototype.first = h.prototype.head, Br && (h.prototype[Br] = X1), h;
    }, cr = Vv();
    Mn ? ((Mn.exports = cr)._ = cr, yo._ = cr) : We._ = cr;
  }).call(it);
})(La, La.exports);
var Zn = La.exports;
function je(t) {
  for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    r[a - 1] = arguments[a];
  if (process.env.NODE_ENV !== "production") {
    var o = T3[t], u = o ? typeof o == "function" ? o.apply(null, r) : o : "unknown error nr: " + t;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(c) {
    return "'" + c + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Tr(t) {
  return !!t && !!t[vt];
}
function Jn(t) {
  return !!t && (function(e) {
    if (!e || typeof e != "object")
      return !1;
    var r = Object.getPrototypeOf(e);
    if (r === null)
      return !0;
    var a = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return a === Object || typeof a == "function" && Function.toString.call(a) === k3;
  }(t) || Array.isArray(t) || !!t[nd] || !!t.constructor[nd] || ku(t) || Au(t));
}
function hi(t, e, r) {
  r === void 0 && (r = !1), Fr(t) === 0 ? (r ? Object.keys : Fu)(t).forEach(function(a) {
    r && typeof a == "symbol" || e(a, t[a], t);
  }) : t.forEach(function(a, o) {
    return e(o, a, t);
  });
}
function Fr(t) {
  var e = t[vt];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : ku(t) ? 2 : Au(t) ? 3 : 0;
}
function lu(t, e) {
  return Fr(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function y3(t, e) {
  return Fr(t) === 2 ? t.get(e) : t[e];
}
function Qp(t, e, r) {
  var a = Fr(t);
  a === 2 ? t.set(e, r) : a === 3 ? (t.delete(e), t.add(r)) : t[e] = r;
}
function w3(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function ku(t) {
  return E3 && t instanceof Map;
}
function Au(t) {
  return O3 && t instanceof Set;
}
function Vn(t) {
  return t.o || t.t;
}
function $u(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = A3(t);
  delete e[vt];
  for (var r = Fu(e), a = 0; a < r.length; a++) {
    var o = r[a], u = e[o];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (e[o] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: t[o] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Ka(t, e) {
  return e === void 0 && (e = !1), Pu(t) || Tr(t) || !Jn(t) || (Fr(t) > 1 && (t.set = t.add = t.clear = t.delete = x3), Object.freeze(t), e && hi(t, function(r, a) {
    return Ka(a, !0);
  }, !0)), t;
}
function x3() {
  je(2);
}
function Pu(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function hn(t) {
  var e = $3[t];
  return e || je(18, t), e;
}
function Kf() {
  return process.env.NODE_ENV === "production" || kr || je(0), kr;
}
function Fs(t, e) {
  e && (hn("Patches"), t.u = [], t.s = [], t.v = e);
}
function Ia(t) {
  cu(t), t.p.forEach(C3), t.p = null;
}
function cu(t) {
  t === kr && (kr = t.l);
}
function Xf(t) {
  return kr = { p: [], l: kr, h: t, m: !0, _: 0 };
}
function C3(t) {
  var e = t[vt];
  e.i === 0 || e.i === 1 ? e.j() : e.O = !0;
}
function Ds(t, e) {
  e._ = e.p.length;
  var r = e.p[0], a = t !== void 0 && t !== r;
  return e.h.g || hn("ES5").S(e, t, a), a ? (r[vt].P && (Ia(e), je(4)), Jn(t) && (t = Na(e, t), e.l || Ba(e, t)), e.u && hn("Patches").M(r[vt], t, e.u, e.s)) : t = Na(e, r, []), Ia(e), e.u && e.v(e.u, e.s), t !== Jp ? t : void 0;
}
function Na(t, e, r) {
  if (Pu(e))
    return e;
  var a = e[vt];
  if (!a)
    return hi(e, function(u, c) {
      return Zf(t, a, e, u, c, r);
    }, !0), e;
  if (a.A !== t)
    return e;
  if (!a.P)
    return Ba(t, a.t, !0), a.t;
  if (!a.I) {
    a.I = !0, a.A._--;
    var o = a.i === 4 || a.i === 5 ? a.o = $u(a.k) : a.o;
    hi(a.i === 3 ? new Set(o) : o, function(u, c) {
      return Zf(t, a, o, u, c, r);
    }), Ba(t, o, !1), r && t.u && hn("Patches").R(a, r, t.u, t.s);
  }
  return a.o;
}
function Zf(t, e, r, a, o, u) {
  if (process.env.NODE_ENV !== "production" && o === r && je(5), Tr(o)) {
    var c = Na(t, o, u && e && e.i !== 3 && !lu(e.D, a) ? u.concat(a) : void 0);
    if (Qp(r, a, c), !Tr(c))
      return;
    t.m = !1;
  }
  if (Jn(o) && !Pu(o)) {
    if (!t.h.F && t._ < 1)
      return;
    Na(t, o), e && e.A.l || Ba(t, o);
  }
}
function Ba(t, e, r) {
  r === void 0 && (r = !1), t.h.F && t.m && Ka(e, r);
}
function Ms(t, e) {
  var r = t[vt];
  return (r ? Vn(r) : t)[e];
}
function Qf(t, e) {
  if (e in t)
    for (var r = Object.getPrototypeOf(t); r; ) {
      var a = Object.getOwnPropertyDescriptor(r, e);
      if (a)
        return a;
      r = Object.getPrototypeOf(r);
    }
}
function fu(t) {
  t.P || (t.P = !0, t.l && fu(t.l));
}
function Ls(t) {
  t.o || (t.o = $u(t.t));
}
function du(t, e, r) {
  var a = ku(e) ? hn("MapSet").N(e, r) : Au(e) ? hn("MapSet").T(e, r) : t.g ? function(o, u) {
    var c = Array.isArray(o), d = { i: c ? 1 : 0, A: u ? u.A : Kf(), P: !1, I: !1, D: {}, l: u, t: o, k: null, o: null, j: null, C: !1 }, g = d, v = ya;
    c && (g = [d], v = wa);
    var y = Proxy.revocable(g, v), S = y.revoke, R = y.proxy;
    return d.k = R, d.j = S, R;
  }(e, r) : hn("ES5").J(e, r);
  return (r ? r.A : Kf()).p.push(a), a;
}
function S3(t) {
  return Tr(t) || je(22, t), function e(r) {
    if (!Jn(r))
      return r;
    var a, o = r[vt], u = Fr(r);
    if (o) {
      if (!o.P && (o.i < 4 || !hn("ES5").K(o)))
        return o.t;
      o.I = !0, a = Jf(r, u), o.I = !1;
    } else
      a = Jf(r, u);
    return hi(a, function(c, d) {
      o && y3(o.t, c) === d || Qp(a, c, e(d));
    }), u === 3 ? new Set(a) : a;
  }(t);
}
function Jf(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return $u(t);
}
var ed, kr, Ru = typeof Symbol < "u" && typeof Symbol("x") == "symbol", E3 = typeof Map < "u", O3 = typeof Set < "u", td = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Jp = Ru ? Symbol.for("immer-nothing") : ((ed = {})["immer-nothing"] = !0, ed), nd = Ru ? Symbol.for("immer-draftable") : "__$immer_draftable", vt = Ru ? Symbol.for("immer-state") : "__$immer_state", T3 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(t) {
  return "Cannot apply patch, path doesn't resolve: " + t;
}, 16: 'Sets cannot have "replace" patches.', 17: function(t) {
  return "Unsupported patch operation: " + t;
}, 18: function(t) {
  return "The plugin for '" + t + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + t + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(t) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + t + "'";
}, 22: function(t) {
  return "'current' expects a draft, got: " + t;
}, 23: function(t) {
  return "'original' expects a draft, got: " + t;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, k3 = "" + Object.prototype.constructor, Fu = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, A3 = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return Fu(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, $3 = {}, ya = { get: function(t, e) {
  if (e === vt)
    return t;
  var r = Vn(t);
  if (!lu(r, e))
    return function(o, u, c) {
      var d, g = Qf(u, c);
      return g ? "value" in g ? g.value : (d = g.get) === null || d === void 0 ? void 0 : d.call(o.k) : void 0;
    }(t, r, e);
  var a = r[e];
  return t.I || !Jn(a) ? a : a === Ms(t.t, e) ? (Ls(t), t.o[e] = du(t.A.h, a, t)) : a;
}, has: function(t, e) {
  return e in Vn(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(Vn(t));
}, set: function(t, e, r) {
  var a = Qf(Vn(t), e);
  if (a != null && a.set)
    return a.set.call(t.k, r), !0;
  if (!t.P) {
    var o = Ms(Vn(t), e), u = o == null ? void 0 : o[vt];
    if (u && u.t === r)
      return t.o[e] = r, t.D[e] = !1, !0;
    if (w3(r, o) && (r !== void 0 || lu(t.t, e)))
      return !0;
    Ls(t), fu(t);
  }
  return t.o[e] === r && typeof r != "number" && (r !== void 0 || e in t.o) || (t.o[e] = r, t.D[e] = !0, !0);
}, deleteProperty: function(t, e) {
  return Ms(t.t, e) !== void 0 || e in t.t ? (t.D[e] = !1, Ls(t), fu(t)) : delete t.D[e], t.o && delete t.o[e], !0;
}, getOwnPropertyDescriptor: function(t, e) {
  var r = Vn(t), a = Reflect.getOwnPropertyDescriptor(r, e);
  return a && { writable: !0, configurable: t.i !== 1 || e !== "length", enumerable: a.enumerable, value: r[e] };
}, defineProperty: function() {
  je(11);
}, getPrototypeOf: function(t) {
  return Object.getPrototypeOf(t.t);
}, setPrototypeOf: function() {
  je(12);
} }, wa = {};
hi(ya, function(t, e) {
  wa[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), wa.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && je(13), ya.deleteProperty.call(this, t[0], e);
}, wa.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && je(14), ya.set.call(this, t[0], e, r, t[0]);
};
var P3 = function() {
  function t(r) {
    var a = this;
    this.g = td, this.F = !0, this.produce = function(o, u, c) {
      if (typeof o == "function" && typeof u != "function") {
        var d = u;
        u = o;
        var g = a;
        return function(k) {
          var A = this;
          k === void 0 && (k = d);
          for (var M = arguments.length, H = Array(M > 1 ? M - 1 : 0), U = 1; U < M; U++)
            H[U - 1] = arguments[U];
          return g.produce(k, function(ee) {
            var re;
            return (re = u).call.apply(re, [A, ee].concat(H));
          });
        };
      }
      var v;
      if (typeof u != "function" && je(6), c !== void 0 && typeof c != "function" && je(7), Jn(o)) {
        var y = Xf(a), S = du(a, o, void 0), R = !0;
        try {
          v = u(S), R = !1;
        } finally {
          R ? Ia(y) : cu(y);
        }
        return typeof Promise < "u" && v instanceof Promise ? v.then(function(k) {
          return Fs(y, c), Ds(k, y);
        }, function(k) {
          throw Ia(y), k;
        }) : (Fs(y, c), Ds(v, y));
      }
      if (!o || typeof o != "object")
        return (v = u(o)) === Jp ? void 0 : (v === void 0 && (v = o), a.F && Ka(v, !0), v);
      je(21, o);
    }, this.produceWithPatches = function(o, u) {
      return typeof o == "function" ? function(g) {
        for (var v = arguments.length, y = Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
          y[S - 1] = arguments[S];
        return a.produceWithPatches(g, function(R) {
          return o.apply(void 0, [R].concat(y));
        });
      } : [a.produce(o, u, function(g, v) {
        c = g, d = v;
      }), c, d];
      var c, d;
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var e = t.prototype;
  return e.createDraft = function(r) {
    Jn(r) || je(8), Tr(r) && (r = S3(r));
    var a = Xf(this), o = du(this, r, void 0);
    return o[vt].C = !0, cu(a), o;
  }, e.finishDraft = function(r, a) {
    var o = r && r[vt];
    process.env.NODE_ENV !== "production" && (o && o.C || je(9), o.I && je(10));
    var u = o.A;
    return Fs(u, a), Ds(void 0, u);
  }, e.setAutoFreeze = function(r) {
    this.F = r;
  }, e.setUseProxies = function(r) {
    r && !td && je(20), this.g = r;
  }, e.applyPatches = function(r, a) {
    var o;
    for (o = a.length - 1; o >= 0; o--) {
      var u = a[o];
      if (u.path.length === 0 && u.op === "replace") {
        r = u.value;
        break;
      }
    }
    var c = hn("Patches").$;
    return Tr(r) ? c(r, a) : this.produce(r, function(d) {
      return c(d, a.slice(o + 1));
    });
  }, t;
}(), gt = new P3(), xa = gt.produce;
gt.produceWithPatches.bind(gt);
gt.setAutoFreeze.bind(gt);
gt.setUseProxies.bind(gt);
gt.applyPatches.bind(gt);
gt.createDraft.bind(gt);
gt.finishDraft.bind(gt);
var R3 = process.env.NODE_ENV === "production", Is = "Invariant failed";
function Ar(t, e) {
  if (!t) {
    if (R3)
      throw new Error(Is);
    var r = typeof e == "function" ? e() : e, a = r ? "".concat(Is, ": ").concat(r) : Is;
    throw new Error(a);
  }
}
const pi = "@@jraft/STYLE_TREE_FRAGMENT";
function e0(t = pi) {
  return {
    name: t,
    styles: {},
    children: {}
  };
}
function hu(t, e) {
  if (e.length === 0)
    return Ar(t), t;
  if (t || (t = {
    name: e[0],
    styles: {},
    children: {}
  }), t.name !== pi) {
    Ar(e[0] === t.name, "unmatch path name");
    const [, ...r] = e;
    return r.length > 0 && (t.children[r[0]] = hu(t.children[r[0]], r)), t;
  }
  return t.children[e[0]] = hu(t.children[e[0]], e), t;
}
function F3(t, e) {
  return hu(t, e), Ca(t, e).styles;
}
function Ca(t, e) {
  const r = $n(t, e);
  return Ar(r, "node not found"), r;
}
function $n(t, e) {
  let r = t;
  const a = [...e];
  if (a.length === 0)
    return t;
  for (t.name === pi && (r = r.children[a[0]]); a.length > 0 && (Ar(a[0] === r.name, "unmatch path name"), a.shift(), a.length !== 0); )
    if (r = r.children[a[0]], !r)
      return r;
  return r;
}
function t0(t, e, r, a = "xs") {
  const o = F3(t, e);
  for (const [u, c] of Object.entries(r))
    o[u] = D3(c, a);
  return t;
}
function D3(t, e = "xs") {
  return t && typeof t == "object" ? t : { [e]: t };
}
const Sa = ["spacing"];
function M3(t) {
  return Zn.isObject(t) ? { xs: "auto", ...t } : {
    xs: typeof t == "number" ? `${t}%` : t
  };
}
function L3(t, e) {
  var r;
  return ((r = t.getData) == null ? void 0 : r.call(t)[e]) ?? t[e];
}
const Ee = window.__STORE__ || Bt.observable({
  styles: Ka(
    t0(e0(), Sa, { width: M3(L3(ny, "spacing") ?? 100) })
  ),
  selected: null,
  hasErrors: [],
  colors: [],
  requestSelect: null
});
Reflect.set(window, "__STORE__", Ee);
function pu({ path: t, data: e }) {
  Ee.styles = xa(Ee.styles, (r) => {
    t0(r, t, e);
  });
}
function I3(t) {
  Ee.selected = t;
}
const N3 = {
  props: {
    reports: {
      type: Array
    }
  },
  setup(t) {
    const e = At(() => t.reports.filter(({ style: a }) => !a)), r = At(() => {
      const a = Zn.groupBy(
        t.reports.filter(({ style: u }) => u),
        ({ kind: u }) => u
      );
      return Object.keys(a).map(
        (u) => a[u].reduce(
          (c, { path: d, style: g, message: v }) => (c.path || (c.path = d), g && c.report.push({ style: g, message: v }), c),
          { kind: u, report: [] }
        )
      ).map(({ kind: u, path: c, report: d }) => ({
        kind: u,
        path: c,
        report: Zn.uniqBy(d, ({ style: g }) => g)
      }));
    });
    return {
      general: e,
      report: r,
      selectedKind: At(() => Zn.last((Ee.selected || { path: [] }).path)),
      requestSelect(a) {
        Ee.requestSelect = a;
      }
    };
  }
};
var B3 = function() {
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
}, W3 = [], U3 = /* @__PURE__ */ He(
  N3,
  B3,
  W3,
  !1,
  null,
  null,
  null,
  null
);
const j3 = U3.exports;
var Fn;
(function(t) {
  t[t.All = 0] = "All", t[t.Two = 1] = "Two", t[t.One = 2] = "One";
})(Fn || (Fn = {}));
let Wt, Du;
function Wa(t, e) {
  if (t.nodeType !== Node.ELEMENT_NODE)
    throw new Error("Can't generate CSS selector for non-element node type.");
  if (t.tagName.toLowerCase() === "html")
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
  Wt = Object.assign(Object.assign({}, r), e), Du = H3(Wt.root, r);
  let a = Ns(t, Fn.All, () => Ns(t, Fn.Two, () => Ns(t, Fn.One)));
  if (a) {
    const o = i0(a0(a, t));
    return o.length > 0 && (a = o[0]), vi(a);
  } else
    throw new Error("Selector was not found.");
}
function H3(t, e) {
  return t.nodeType === Node.DOCUMENT_NODE ? t : t === e.root ? t.ownerDocument : t;
}
function Ns(t, e, r) {
  let a = null, o = [], u = t, c = 0;
  for (; u && u !== Wt.root.parentElement; ) {
    let d = ga(z3(u)) || ga(...q3(u)) || ga(...G3(u)) || ga(Y3(u)) || [V3()];
    const g = K3(u);
    if (e === Fn.All)
      g && (d = d.concat(d.filter(Ws).map((v) => Bs(v, g))));
    else if (e === Fn.Two)
      d = d.slice(0, 1), g && (d = d.concat(d.filter(Ws).map((v) => Bs(v, g))));
    else if (e === Fn.One) {
      const [v] = d = d.slice(0, 1);
      g && Ws(v) && (d = [Bs(v, g)]);
    }
    for (let v of d)
      v.level = c;
    if (o.push(d), o.length >= Wt.seedMinLength && (a = rd(o, r), a))
      break;
    u = u.parentElement, c++;
  }
  return a || (a = rd(o, r)), a;
}
function rd(t, e) {
  const r = i0(r0(t));
  if (r.length > Wt.threshold)
    return e ? e() : null;
  for (let a of r)
    if (n0(a))
      return a;
  return null;
}
function vi(t) {
  let e = t[0], r = e.name;
  for (let a = 1; a < t.length; a++) {
    const o = t[a].level || 0;
    e.level === o - 1 ? r = `${t[a].name} > ${r}` : r = `${t[a].name} ${r}`, e = t[a];
  }
  return r;
}
function id(t) {
  return t.map((e) => e.penalty).reduce((e, r) => e + r, 0);
}
function n0(t) {
  switch (Du.querySelectorAll(vi(t)).length) {
    case 0:
      throw new Error(`Can't select any node with this selector: ${vi(t)}`);
    case 1:
      return !0;
    default:
      return !1;
  }
}
function z3(t) {
  const e = t.getAttribute("id");
  return e && Wt.idName(e) ? {
    name: "#" + Ua(e, { isIdentifier: !0 }),
    penalty: 0
  } : null;
}
function q3(t) {
  return Array.from(t.attributes).filter((r) => Wt.attr(r.name, r.value)).map((r) => ({
    name: "[" + Ua(r.name, { isIdentifier: !0 }) + '="' + Ua(r.value) + '"]',
    penalty: 0.5
  }));
}
function G3(t) {
  return Array.from(t.classList).filter(Wt.className).map((r) => ({
    name: "." + Ua(r, { isIdentifier: !0 }),
    penalty: 1
  }));
}
function Y3(t) {
  const e = t.tagName.toLowerCase();
  return Wt.tagName(e) ? {
    name: e,
    penalty: 2
  } : null;
}
function V3() {
  return {
    name: "*",
    penalty: 3
  };
}
function K3(t) {
  const e = t.parentNode;
  if (!e)
    return null;
  let r = e.firstChild;
  if (!r)
    return null;
  let a = 0;
  for (; r && (r.nodeType === Node.ELEMENT_NODE && a++, r !== t); )
    r = r.nextSibling;
  return a;
}
function Bs(t, e) {
  return {
    name: t.name + `:nth-child(${e})`,
    penalty: t.penalty + 1
  };
}
function Ws(t) {
  return t.name !== "html" && !t.name.startsWith("#");
}
function ga(...t) {
  const e = t.filter(X3);
  return e.length > 0 ? e : null;
}
function X3(t) {
  return t != null;
}
function* r0(t, e = []) {
  if (t.length > 0)
    for (let r of t[0])
      yield* r0(t.slice(1, t.length), e.concat(r));
  else
    yield e;
}
function i0(t) {
  return Array.from(t).sort((e, r) => id(e) - id(r));
}
function* a0(t, e, r = {
  counter: 0,
  visited: /* @__PURE__ */ new Map()
}) {
  if (t.length > 2 && t.length > Wt.optimizedMinLength)
    for (let a = 1; a < t.length - 1; a++) {
      if (r.counter > Wt.maxNumberOfTries)
        return;
      r.counter += 1;
      const o = [...t];
      o.splice(a, 1);
      const u = vi(o);
      if (r.visited.has(u))
        return;
      n0(o) && Z3(o, e) && (yield o, r.visited.set(u, !0), yield* a0(o, e, r));
    }
}
function Z3(t, e) {
  return Du.querySelector(vi(t)) === e;
}
const Q3 = /[ -,\.\/:-@\[-\^`\{-~]/, J3 = /[ -,\.\/:-@\[\]\^`\{-~]/, e4 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, t4 = {
  escapeEverything: !1,
  isIdentifier: !1,
  quotes: "single",
  wrap: !1
};
function Ua(t, e = {}) {
  const r = Object.assign(Object.assign({}, t4), e);
  r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
  const a = r.quotes == "double" ? '"' : "'", o = r.isIdentifier, u = t.charAt(0);
  let c = "", d = 0;
  const g = t.length;
  for (; d < g; ) {
    const v = t.charAt(d++);
    let y = v.charCodeAt(0), S;
    if (y < 32 || y > 126) {
      if (y >= 55296 && y <= 56319 && d < g) {
        const R = t.charCodeAt(d++);
        (R & 64512) == 56320 ? y = ((y & 1023) << 10) + (R & 1023) + 65536 : d--;
      }
      S = "\\" + y.toString(16).toUpperCase() + " ";
    } else
      r.escapeEverything ? Q3.test(v) ? S = "\\" + v : S = "\\" + y.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(v) ? S = "\\" + y.toString(16).toUpperCase() + " " : v == "\\" || !o && (v == '"' && a == v || v == "'" && a == v) || o && J3.test(v) ? S = "\\" + v : S = v;
    c += S;
  }
  return o && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(e4, function(v, y, S) {
    return y && y.length % 2 ? v : (y || "") + S;
  }), !o && r.wrap ? a + c + a : c;
}
function o0(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var a = Array.from(typeof t == "string" ? [t] : t);
  a[a.length - 1] = a[a.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = a.reduce(function(d, g) {
    var v = g.match(/\n([\t ]+|(?!\s).)/g);
    return v ? d.concat(v.map(function(y) {
      var S, R;
      return (R = (S = y.match(/[\t ]/g)) === null || S === void 0 ? void 0 : S.length) !== null && R !== void 0 ? R : 0;
    })) : d;
  }, []);
  if (o.length) {
    var u = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    a = a.map(function(d) {
      return d.replace(u, `
`);
    });
  }
  a[0] = a[0].replace(/^\r?\n/, "");
  var c = a[0];
  return e.forEach(function(d, g) {
    var v = c.match(/(?:^|\n)( *)$/), y = v ? v[1] : "", S = d;
    typeof d == "string" && d.includes(`
`) && (S = String(d).split(`
`).map(function(R, k) {
      return k === 0 ? R : "" + y + R;
    }).join(`
`)), c += S + a[g + 1];
  }), c;
}
function s0(t) {
  Ar(t.length > 0, "expect a least one selector");
  const e = t[t.length - 1];
  return e.startsWith("&") ? (Ar(t.length > 1, "expect has parent"), `${s0(t.slice(0, -1))} ${e.replace("& ", "")}`) : `.${e}`;
}
function n4({ getStore: t, key: e = "styles" }) {
  return {
    resolveSelector: s0,
    nextTick: ad,
    async update({ path: r, property: a, value: o }) {
      const u = t();
      let c;
      return u[e] = xa(u[e], (d) => {
        const g = Ca(d, r);
        c = g.styles[a], g.styles[a] = typeof o != "object" ? { xs: o } : o;
      }), () => {
        u[e] = xa(u[e], (d) => {
          const g = Ca(d, r);
          g.styles[a] = c;
        });
      };
    },
    async traverse(r) {
      const a = t(), o = a[e], u = [[o, []]], c = /* @__PURE__ */ new Set();
      for (; u.length > 0; ) {
        const [d, g] = u.shift();
        if (d === o && d.name === pi) {
          for (const v of Object.values(d.children))
            c.add(v), u.push([v, [...g, v.name]]);
          continue;
        }
        for (const v of Object.values(d.children))
          u.push([v, [...g, v.name]]);
        if (c.has(d)) {
          c.delete(d);
          continue;
        }
        if (d.name !== pi)
          try {
            await r({
              node: d,
              name: d.name,
              path: g,
              apply: async (v) => {
                a[e] = xa(o, (y) => {
                  const S = Ca(y, g);
                  S.styles = v;
                }), await ad();
              }
            });
          } catch (v) {
            console.error(v);
          }
      }
      a[e] = o;
    }
  };
}
function ad() {
  return new Promise((t) => {
    setTimeout(t, 0);
  });
}
const r4 = [8, 280], i4 = [1, 2], gi = n4({ getStore: () => Reflect.get(window, "__STORE__") }), od = (t) => t, a4 = {
  ff0000: "rgb(255, 0, 0)",
  "00ff00": "rgb(0, 255, 0)",
  "0000ff": "rgb(0, 0, 255)"
}, u0 = {
  fontSize: {
    // because Chrome has minimal font-size limit for accessibility, so here use 14 as font size lower bound
    values: sd(14, r4[1]),
    toStyle: (t) => `${t}px`,
    possible: ["text-xs", "text-sm", "..."]
  },
  fontFamily: {
    values: () => ["Roboto"],
    toStyle: od
  },
  bold: {
    name: "font-weight",
    values: () => [!0, !1],
    toStyle: (t) => t ? "700" : "400",
    possible: ["font-bold", "font-semibold", "..."]
  },
  italic: {
    name: "font-style",
    values: () => [!0, !1],
    toStyle: (t) => t ? "italic" : "normal",
    possible: ["italic"]
  },
  // underline: { type: [Boolean, Object], default: undefined } as StyleOptions<boolean>,
  uppercase: {
    name: "text-transform",
    values: () => [!0, !1],
    toStyle: (t) => t ? "uppercase" : "none",
    possible: ["uppercase", "lowercase", "..."]
  },
  lowercase: {
    name: "text-transform",
    values: () => [!0, !1],
    toStyle: (t) => t ? "lowercase" : "none",
    possible: ["uppercase", "lowercase", "..."]
  },
  align: {
    name: "text-align",
    values: () => ["left", "center", "right"],
    toStyle: od,
    possible: ["text-center", "text-right", "..."]
  },
  color: {
    values: () => ["ff0000", "00ff00", "0000ff"],
    toStyle: (t) => a4[t],
    possible: ["text-*"]
  },
  lineHeight: {
    values: sd(...i4),
    toStyle: (t, e) => {
      const r = window.getComputedStyle(e), a = Number.parseFloat(r.fontSize) || 16;
      return `${t * a}px`;
    },
    possible: ["leading-*"]
  }
}, l0 = gi.update, o4 = gi.nextTick;
async function s4(t, e) {
  const r = [], a = t[t.length - 1], o = document.querySelector(gi.resolveSelector(t));
  if (!o) {
    r.push({ type: "usage", kind: a, message: `could not found .${a}` });
    return;
  }
  const u = getComputedStyle(o), c = u0[e], d = c.name ?? e;
  for (const g of c.values()) {
    const v = await l0({ path: t, property: d, value: { xs: g } }), y = c.toStyle(g, o), S = u[d];
    (c.compare ?? Object.is)(y, S) || (console.log(`Expect ${a} has \`${d}: ${y}\` but got \`${S}\``), r.push({
      type: "usage",
      kind: a,
      style: d,
      message: o0`Found ${a} seem not respect to ${d} config${f0(
        d,
        c.possible
      )}`,
      path: t,
      values: [y, S]
    }), v());
  }
  return r;
}
async function c0() {
  const t = await l4(), e = [c4, f4, d4];
  for (const r of e) {
    const a = r();
    a && t.push(a);
  }
  return t;
}
const u4 = /* @__PURE__ */ new Set(["flex", "grid"]);
async function l4() {
  const t = [];
  return await gi.traverse(async ({ name: e, path: r, apply: a }) => {
    let o;
    try {
      o = document.querySelector(gi.resolveSelector(r));
    } catch {
    }
    if (!o) {
      t.push({ type: "usage", kind: e, message: `could not found .${e}` });
      return;
    }
    const u = getComputedStyle(o);
    for (const [c, d] of Object.entries(u0)) {
      const g = d.name ?? c;
      for (const v of d.values()) {
        await a({ [c]: { xs: v } });
        const y = d.toStyle(v, o), S = u[g];
        (d.compare ?? Object.is)(y, S) || (console.log(`Expect ${e} has \`${g}: ${y}\` but got \`${S}\``), t.push({
          type: "usage",
          kind: e,
          style: c,
          path: r,
          message: o0`Found ${e} seem not respect to ${c} config${f0(c, d.possible)}`,
          values: [y, S]
        }));
      }
    }
  }), t;
}
const Mu = "#block-container";
function c4() {
  const t = document.querySelector(Mu);
  let e = t;
  if (e)
    for (; e.firstElementChild; ) {
      e = e.firstElementChild;
      const r = window.getComputedStyle(e), { marginTop: a, display: o } = r;
      if (u4.has(o))
        break;
      if (!ii(a))
        return {
          type: "general",
          message: "found element has marin-top, please use padding or consider wrap in flex or grid container",
          selector: Wa(e, { root: t })
        };
    }
}
function f4() {
  const t = document.querySelector(Mu);
  for (const e of d0(t)) {
    const r = window.getComputedStyle(e);
    if (!ii(r.marginLeft) || !ii(r.marginRight))
      return {
        type: "general",
        message: "found an outer container has x axis margin, please check is it follow the guides",
        selector: Wa(e, { root: t })
      };
    if (!ii(r.paddingLeft) || !ii(r.paddingRight))
      return {
        type: "general",
        message: "found an outer container has x axis padding, please check is it follow the guides",
        selector: Wa(e, { root: t })
      };
  }
}
function d4() {
  const t = document.querySelector(Mu);
  for (const e of d0(t))
    if (window.getComputedStyle(e).maxWidth !== "none")
      return {
        type: "general",
        message: "found an outer container has max-width, please check is it follow the guides",
        selector: Wa(e, { root: t })
      };
}
function f0(t, e) {
  if (!e)
    return "";
  const r = e[e.length - 1], a = e.slice(0, -1);
  return `, you are possibly using the follow class ${r === "..." ? `[${a.map((u) => `\`${u}\``).join(", ")}, ...]` : `[${e.map((u) => `\`${u}\``).join(", ")}]`}, please use ${t} instead`;
}
const h4 = 10;
function* d0(t) {
  const e = t.getBoundingClientRect(), r = [{ el: t, depth: 0 }];
  for (; r.length > 0; ) {
    const { el: a, depth: o } = r.shift(), c = a.getBoundingClientRect().height / e.height;
    if (o < h4)
      for (const d of a.children)
        r.push({ el: d, depth: o + 1 });
    c <= 0.8 || a.className !== "spacing" && (yield a);
  }
}
function ii(t) {
  return t === "0" || t === "" || Number.parseInt(t) === 0;
}
function sd(t, e) {
  return function* () {
    yield t, yield e, yield (t + e) / 2;
  };
}
const p4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateReport: c0,
  nextTick: o4,
  testSpecificItem: s4,
  update: l0
}, Symbol.toStringTag, { value: "Module" })), v4 = {};
var g4 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "70", height: "70" } }, [r("defs", [r("filter", { attrs: { id: "a", width: "127.6%", height: "127.6%", x: "-13.8%", y: "-13.8%", filterUnits: "objectBoundingBox" } }, [r("feOffset", { attrs: { dy: "1", in: "SourceAlpha", result: "shadowOffsetOuter1" } }), r("feGaussianBlur", { attrs: { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "1.5" } }), r("feColorMatrix", { attrs: { in: "shadowBlurOuter1", result: "shadowMatrixOuter1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" } }), r("feMerge", [r("feMergeNode", { attrs: { in: "shadowMatrixOuter1" } }), r("feMergeNode", { attrs: { in: "SourceGraphic" } })], 1)], 1), r("path", { attrs: { id: "b", d: "M29 0c16.016 0 29 12.984 29 29S45.016 58 29 58 0 45.016 0 29 12.984 0 29 0zm8.33 45.235-1.908.694 1.182 3.25.059.173c.369 1.197-.082 2.04-1.087 2.406l-.71.258.694 1.908.553-.201.165-.069a2.192 2.192 0 0 0 1.214-1.67l.131-.048.335.921 1.895-.69-2.524-6.932zm-14.396.738c-1.342-.488-2.894-.398-3.959.973l1.567 1.017.113-.104c.467-.382 1.105-.391 1.688-.179.908.33 1.378 1.127 1.06 2.04l-5.025-1.83-.177.487-.068.199c-.63 1.985.144 3.941 2.206 4.692 1.934.704 4.075-.186 4.865-2.356.762-2.092-.152-4.168-2.27-4.939zm-3.087 3.898 3.079 1.12-.061.101c-.35.531-1.105.89-1.947.584-.815-.297-1.232-1.075-1.07-1.805zM44.57 35.882l-1.022 1.77 3.443 1.988-.077.134-.11.012c-.531.077-1.223.42-1.752 1.337-.952 1.65-.187 3.74 1.68 4.818 1.916 1.106 4.129.605 5.08-1.044.512-.885.461-1.61.243-2.155l.077-.134.594.343 1.022-1.77-9.178-5.299zm2.407 5.77c.483-.836 1.508-1.182 2.575-.566.897.518 1.31 1.565.779 2.487-.49.848-1.556 1.154-2.55.58-1.007-.58-1.3-1.64-.804-2.5zm-33.002-3.26c-.959-1.661-2.425-2.156-3.71-1.414-2.45 1.414.328 4.32-.666 4.894-.279.161-.629-.025-.874-.449-.273-.473-.23-1.015.142-1.407l-1.295-1.29-.129.131c-.866.93-.894 2.157-.159 3.43.82 1.419 2.293 1.926 3.396 1.29 2.546-1.47-.271-4.306.784-4.915.303-.175.663-.027.97.506.35.606.392 1.294-.16 1.71l1.175 1.39.151-.122c1.161-1 1.128-2.45.375-3.754zM6.832 22.935c-1.366.087-2.242 1.027-2.51 2.543-.284 1.613.518 2.949 1.773 3.17 2.895.51 2.56-3.472 3.759-3.26.345.06.526.405.419 1.011-.122.69-.532 1.243-1.222 1.207l.005 1.82.195.004c1.532-.02 2.439-1.153 2.7-2.635.333-1.889-.471-3.21-1.933-3.468-2.785-.491-2.525 3.52-3.656 3.321-.317-.056-.466-.423-.38-.906.094-.537.475-.925 1.012-.987zm44.691-.563-1.778.314.211 1.2-5.487.967.353 2 7.265-1.282-.564-3.199zm3.69 1.653c-.122-.69-.722-1.11-1.37-.996-.662.117-1.082.717-.96 1.407.119.675.719 1.095 1.38.979.648-.115 1.069-.715.95-1.39zM12.89 8.545 11.432 9.77l1.296 1.544-1.04.873 1.16 1.384.933-.783 2.115 2.52.125.142c.995 1.089 2.02 1.037 3.112.121l1.233-1.034-1.179-1.405-1.083.908-.083.064c-.216.144-.384.099-.568-.12l-2.106-2.51 1.502-1.26-1.161-1.383-1.502 1.26-1.295-1.545zm30.417.702-4.743 5.652 1.555 1.305 2.223-2.65.12-.137c.853-.918 1.808-.949 2.627-.262l.58.486 1.304-1.555-.45-.378-.142-.108a2.193 2.193 0 0 0-2.053-.217l-.107-.09.63-.75-1.544-1.296zM28.893 4.753c-2.296 0-3.934 1.68-3.934 3.878 0 2.184 1.624 3.864 3.934 3.864 2.296 0 3.92-1.68 3.92-3.864s-1.61-3.878-3.92-3.878zm0 1.946.153.006.149.016c.927.138 1.546.91 1.546 1.91 0 1.092-.756 1.918-1.848 1.918s-1.862-.826-1.862-1.918c0-1.106.77-1.932 1.862-1.932z" } })]), r("g", { attrs: { filter: "url(#a)", transform: "translate(6 6)", fill: "none", "fill-rule": "evenodd" } }, [r("mask", { attrs: { id: "c", fill: "#fff" } }, [r("use", { attrs: { "xlink:href": "#b" } })]), r("use", { attrs: { fill: "#F5F5F5", "xlink:href": "#b" } }), r("g", { attrs: { mask: "url(#c)" } }, [r("path", { attrs: { fill: "#FFB500", "fill-rule": "nonzero", d: "M47.349 19.933v14.233H33.116V19.933z" } }), r("path", { attrs: { fill: "#FF4C4C", d: "M12.348 20.544h11.784c-.738 3.757-.118 7.212 1.86 10.364 4.88 7.778 13.133 7.135 17.987 14.484 2.53 3.818 3.427 8.235 2.694 13.252H34.921c.184-2.97-.117-4.883-.902-5.736-4.63-5.03-9.642-4.534-15.23-11.16-5.5-6.526-7.647-13.594-6.441-21.204z" } }), r("path", { attrs: { fill: "#2E53C2", d: "M14.263 22.697h7.37c-.075 3.822.808 7.016 2.648 9.582 3.47 4.837 7.102 5.965 8.341 8.944.129 3.776-.49 5.911-2.2 5.44-.405 0-5.298-1.402-10.04-6.49-4.825-5.174-6.865-11-6.119-17.476z" } })])])]);
}, _4 = [], m4 = /* @__PURE__ */ He(
  v4,
  g4,
  _4,
  !1,
  null,
  null,
  null,
  null
);
const b4 = m4.exports;
function be(t, e, r, a) {
  r && Object.defineProperty(t, e, {
    enumerable: r.enumerable,
    configurable: r.configurable,
    writable: r.writable,
    value: r.initializer ? r.initializer.call(a) : void 0
  });
}
function at(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ge(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ea(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ea = function(r) {
    return typeof r;
  } : Ea = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ea(t);
}
function ot(t, e) {
  return e && (Ea(e) === "object" || typeof e == "function") ? e : ge(t);
}
function ce(t) {
  return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ce(t);
}
function vu(t, e) {
  return vu = Object.setPrototypeOf || function(a, o) {
    return a.__proto__ = o, a;
  }, vu(t, e);
}
function st(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), e && vu(t, e);
}
function _e(t, e, r, a, o) {
  var u = {};
  return Object.keys(a).forEach(function(c) {
    u[c] = a[c];
  }), u.enumerable = !!u.enumerable, u.configurable = !!u.configurable, ("value" in u || u.initializer) && (u.writable = !0), u = r.slice().reverse().reduce(function(c, d) {
    return d(t, e, c) || c;
  }, u), o && u.initializer !== void 0 && (u.value = u.initializer ? u.initializer.call(o) : void 0, u.initializer = void 0), u.initializer === void 0 && (Object.defineProperty(t, e, u), u = null), u;
}
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function Oa(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Oa = function(e) {
    return typeof e;
  } : Oa = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oa(t);
}
function y4(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function w4(t) {
  return x4(t) || C4(t) || S4();
}
function x4(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function C4(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]")
    return Array.from(t);
}
function S4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function E4() {
  return typeof Reflect < "u" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function O4(t, e) {
  Us(t, e), Object.getOwnPropertyNames(e.prototype).forEach(function(r) {
    Us(t.prototype, e.prototype, r);
  }), Object.getOwnPropertyNames(e).forEach(function(r) {
    Us(t, e, r);
  });
}
function Us(t, e, r) {
  var a = r ? Reflect.getOwnMetadataKeys(e, r) : Reflect.getOwnMetadataKeys(e);
  a.forEach(function(o) {
    var u = r ? Reflect.getOwnMetadata(o, e, r) : Reflect.getOwnMetadata(o, e);
    r ? Reflect.defineMetadata(o, u, t, r) : Reflect.defineMetadata(o, u, t);
  });
}
var T4 = {
  __proto__: []
}, k4 = T4 instanceof Array;
function Lu(t) {
  return function(e, r, a) {
    var o = typeof e == "function" ? e : e.constructor;
    o.__decorators__ || (o.__decorators__ = []), typeof a != "number" && (a = void 0), o.__decorators__.push(function(u) {
      return t(u, r, a);
    });
  };
}
function Ut() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return Bt.extend({
    mixins: e
  });
}
function A4(t) {
  var e = Oa(t);
  return t == null || e !== "object" && e !== "function";
}
function h0(t) {
  typeof console < "u" && console.warn("[vue-class-component] " + t);
}
function $4(t, e) {
  var r = e.prototype._init;
  e.prototype._init = function() {
    var u = this, c = Object.getOwnPropertyNames(t);
    if (t.$options.props)
      for (var d in t.$options.props)
        t.hasOwnProperty(d) || c.push(d);
    c.forEach(function(g) {
      Object.defineProperty(u, g, {
        get: function() {
          return t[g];
        },
        set: function(y) {
          t[g] = y;
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
  }), process.env.NODE_ENV !== "production" && !(e.prototype instanceof Bt) && Object.keys(o).length > 0 && h0("Component class must inherit Vue or its descendant class when class property is used."), o;
}
var gu = [
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
function ud(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  e.name = e.name || t._componentTag || t.name;
  var r = t.prototype;
  Object.getOwnPropertyNames(r).forEach(function(d) {
    if (d !== "constructor") {
      if (gu.indexOf(d) > -1) {
        e[d] = r[d];
        return;
      }
      var g = Object.getOwnPropertyDescriptor(r, d);
      g.value !== void 0 ? typeof g.value == "function" ? (e.methods || (e.methods = {}))[d] = g.value : (e.mixins || (e.mixins = [])).push({
        data: function() {
          return y4({}, d, g.value);
        }
      }) : (g.get || g.set) && ((e.computed || (e.computed = {}))[d] = {
        get: g.get,
        set: g.set
      });
    }
  }), (e.mixins || (e.mixins = [])).push({
    data: function() {
      return $4(this, t);
    }
  });
  var a = t.__decorators__;
  a && (a.forEach(function(d) {
    return d(e);
  }), delete t.__decorators__);
  var o = Object.getPrototypeOf(t.prototype), u = o instanceof Bt ? o.constructor : Bt, c = u.extend(e);
  return F4(c, t, u), E4() && O4(c, t), c;
}
var P4 = [
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
], R4 = {
  prototype: !0,
  arguments: !0,
  callee: !0,
  caller: !0
};
function F4(t, e, r) {
  Object.getOwnPropertyNames(e).forEach(function(a) {
    if (!R4[a]) {
      var o = Object.getOwnPropertyDescriptor(t, a);
      if (!(o && !o.configurable)) {
        var u = Object.getOwnPropertyDescriptor(e, a);
        if (!k4) {
          if (a === "cid")
            return;
          var c = Object.getOwnPropertyDescriptor(r, a);
          if (!A4(u.value) && c && c.value === u.value)
            return;
        }
        process.env.NODE_ENV !== "production" && P4.indexOf(a) >= 0 && h0("Static property name '".concat(a, "' declared on class '").concat(e.name, "' ") + "conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."), Object.defineProperty(t, a, u);
      }
    }
  });
}
function Qe(t) {
  return typeof t == "function" ? ud(t) : function(e) {
    return ud(e, t);
  };
}
Qe.registerHooks = function(e) {
  gu.push.apply(gu, w4(e));
};
var D4 = typeof Reflect < "u" && typeof Reflect.getMetadata < "u";
function M4(t, e, r) {
  if (D4 && !Array.isArray(t) && typeof t != "function" && typeof t.type > "u") {
    var a = Reflect.getMetadata("design:type", e, r);
    a !== Object && (t.type = a);
  }
}
function Te(t) {
  return t === void 0 && (t = {}), function(e, r) {
    M4(t, e, r), Lu(function(a, o) {
      (a.props || (a.props = {}))[o] = t;
    })(e, r);
  };
}
function L4(t, e) {
  e === void 0 && (e = {});
  var r = e.deep, a = r === void 0 ? !1 : r, o = e.immediate, u = o === void 0 ? !1 : o;
  return Lu(function(c, d) {
    typeof c.watch != "object" && (c.watch = /* @__PURE__ */ Object.create(null));
    var g = c.watch;
    typeof g[t] == "object" && !Array.isArray(g[t]) ? g[t] = [g[t]] : typeof g[t] > "u" && (g[t] = []), g[t].push({ handler: d, deep: a, immediate: u });
  });
}
function Xa(t) {
  return Lu(function(e, r) {
    e.computed = e.computed || {}, e.computed[r] = {
      cache: !1,
      get: function() {
        return this.$refs[t || r];
      }
    };
  });
}
function ld(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function mt(t, e, r) {
  return e && ld(t.prototype, e), r && ld(t, r), t;
}
var p0 = { exports: {} };
(function(t) {
  (function(e) {
    var r = /^\s+/, a = /\s+$/, o = 0, u = e.round, c = e.min, d = e.max, g = e.random;
    function v(_, x) {
      if (_ = _ || "", x = x || {}, _ instanceof v)
        return _;
      if (!(this instanceof v))
        return new v(_, x);
      var b = y(_);
      this._originalInput = _, this._r = b.r, this._g = b.g, this._b = b.b, this._a = b.a, this._roundA = u(100 * this._a) / 100, this._format = x.format || b.format, this._gradientType = x.gradientType, this._r < 1 && (this._r = u(this._r)), this._g < 1 && (this._g = u(this._g)), this._b < 1 && (this._b = u(this._b)), this._ok = b.ok, this._tc_id = o++;
    }
    v.prototype = {
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
        var _ = this.toRgb();
        return (_.r * 299 + _.g * 587 + _.b * 114) / 1e3;
      },
      getLuminance: function() {
        var _ = this.toRgb(), x, b, D, L, N, oe;
        return x = _.r / 255, b = _.g / 255, D = _.b / 255, x <= 0.03928 ? L = x / 12.92 : L = e.pow((x + 0.055) / 1.055, 2.4), b <= 0.03928 ? N = b / 12.92 : N = e.pow((b + 0.055) / 1.055, 2.4), D <= 0.03928 ? oe = D / 12.92 : oe = e.pow((D + 0.055) / 1.055, 2.4), 0.2126 * L + 0.7152 * N + 0.0722 * oe;
      },
      setAlpha: function(_) {
        return this._a = Ci(_), this._roundA = u(100 * this._a) / 100, this;
      },
      toHsv: function() {
        var _ = A(this._r, this._g, this._b);
        return { h: _.h * 360, s: _.s, v: _.v, a: this._a };
      },
      toHsvString: function() {
        var _ = A(this._r, this._g, this._b), x = u(_.h * 360), b = u(_.s * 100), D = u(_.v * 100);
        return this._a == 1 ? "hsv(" + x + ", " + b + "%, " + D + "%)" : "hsva(" + x + ", " + b + "%, " + D + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var _ = R(this._r, this._g, this._b);
        return { h: _.h * 360, s: _.s, l: _.l, a: this._a };
      },
      toHslString: function() {
        var _ = R(this._r, this._g, this._b), x = u(_.h * 360), b = u(_.s * 100), D = u(_.l * 100);
        return this._a == 1 ? "hsl(" + x + ", " + b + "%, " + D + "%)" : "hsla(" + x + ", " + b + "%, " + D + "%, " + this._roundA + ")";
      },
      toHex: function(_) {
        return H(this._r, this._g, this._b, _);
      },
      toHexString: function(_) {
        return "#" + this.toHex(_);
      },
      toHex8: function(_) {
        return U(this._r, this._g, this._b, this._a, _);
      },
      toHex8String: function(_) {
        return "#" + this.toHex8(_);
      },
      toRgb: function() {
        return { r: u(this._r), g: u(this._g), b: u(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: u(fe(this._r, 255) * 100) + "%", g: u(fe(this._g, 255) * 100) + "%", b: u(fe(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + u(fe(this._r, 255) * 100) + "%, " + u(fe(this._g, 255) * 100) + "%, " + u(fe(this._b, 255) * 100) + "%)" : "rgba(" + u(fe(this._r, 255) * 100) + "%, " + u(fe(this._g, 255) * 100) + "%, " + u(fe(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        return this._a === 0 ? "transparent" : this._a < 1 ? !1 : en[H(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function(_) {
        var x = "#" + ee(this._r, this._g, this._b, this._a), b = x, D = this._gradientType ? "GradientType = 1, " : "";
        if (_) {
          var L = v(_);
          b = "#" + ee(L._r, L._g, L._b, L._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + D + "startColorstr=" + x + ",endColorstr=" + b + ")";
      },
      toString: function(_) {
        var x = !!_;
        _ = _ || this._format;
        var b = !1, D = this._a < 1 && this._a >= 0, L = !x && D && (_ === "hex" || _ === "hex6" || _ === "hex3" || _ === "hex4" || _ === "hex8" || _ === "name");
        return L ? _ === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (_ === "rgb" && (b = this.toRgbString()), _ === "prgb" && (b = this.toPercentageRgbString()), (_ === "hex" || _ === "hex6") && (b = this.toHexString()), _ === "hex3" && (b = this.toHexString(!0)), _ === "hex4" && (b = this.toHex8String(!0)), _ === "hex8" && (b = this.toHex8String()), _ === "name" && (b = this.toName()), _ === "hsl" && (b = this.toHslString()), _ === "hsv" && (b = this.toHsvString()), b || this.toHexString());
      },
      clone: function() {
        return v(this.toString());
      },
      _applyModification: function(_, x) {
        var b = _.apply(null, [this].concat([].slice.call(x)));
        return this._r = b._r, this._g = b._g, this._b = b._b, this.setAlpha(b._a), this;
      },
      lighten: function() {
        return this._applyModification(B, arguments);
      },
      brighten: function() {
        return this._applyModification(ae, arguments);
      },
      darken: function() {
        return this._applyModification(ve, arguments);
      },
      desaturate: function() {
        return this._applyModification(re, arguments);
      },
      saturate: function() {
        return this._applyModification(ye, arguments);
      },
      greyscale: function() {
        return this._applyModification(Q, arguments);
      },
      spin: function() {
        return this._applyModification(K, arguments);
      },
      _applyCombination: function(_, x) {
        return _.apply(null, [this].concat([].slice.call(x)));
      },
      analogous: function() {
        return this._applyCombination(xi, arguments);
      },
      complement: function() {
        return this._applyCombination(De, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(eo, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(Ja, arguments);
      },
      triad: function() {
        return this._applyCombination(Ht, arguments);
      },
      tetrad: function() {
        return this._applyCombination(Dr, arguments);
      }
    }, v.fromRatio = function(_, x) {
      if (typeof _ == "object") {
        var b = {};
        for (var D in _)
          _.hasOwnProperty(D) && (D === "a" ? b[D] = _[D] : b[D] = qt(_[D]));
        _ = b;
      }
      return v(_, x);
    };
    function y(_) {
      var x = { r: 0, g: 0, b: 0 }, b = 1, D = null, L = null, N = null, oe = !1, de = !1;
      return typeof _ == "string" && (_ = rr(_)), typeof _ == "object" && (Pt(_.r) && Pt(_.g) && Pt(_.b) ? (x = S(_.r, _.g, _.b), oe = !0, de = String(_.r).substr(-1) === "%" ? "prgb" : "rgb") : Pt(_.h) && Pt(_.s) && Pt(_.v) ? (D = qt(_.s), L = qt(_.v), x = M(_.h, D, L), oe = !0, de = "hsv") : Pt(_.h) && Pt(_.s) && Pt(_.l) && (D = qt(_.s), N = qt(_.l), x = k(_.h, D, N), oe = !0, de = "hsl"), _.hasOwnProperty("a") && (b = _.a)), b = Ci(b), {
        ok: oe,
        format: _.format || de,
        r: c(255, d(x.r, 0)),
        g: c(255, d(x.g, 0)),
        b: c(255, d(x.b, 0)),
        a: b
      };
    }
    function S(_, x, b) {
      return {
        r: fe(_, 255) * 255,
        g: fe(x, 255) * 255,
        b: fe(b, 255) * 255
      };
    }
    function R(_, x, b) {
      _ = fe(_, 255), x = fe(x, 255), b = fe(b, 255);
      var D = d(_, x, b), L = c(_, x, b), N, oe, de = (D + L) / 2;
      if (D == L)
        N = oe = 0;
      else {
        var se = D - L;
        switch (oe = de > 0.5 ? se / (2 - D - L) : se / (D + L), D) {
          case _:
            N = (x - b) / se + (x < b ? 6 : 0);
            break;
          case x:
            N = (b - _) / se + 2;
            break;
          case b:
            N = (_ - x) / se + 4;
            break;
        }
        N /= 6;
      }
      return { h: N, s: oe, l: de };
    }
    function k(_, x, b) {
      var D, L, N;
      _ = fe(_, 360), x = fe(x, 100), b = fe(b, 100);
      function oe(Le, Gt, ut) {
        return ut < 0 && (ut += 1), ut > 1 && (ut -= 1), ut < 1 / 6 ? Le + (Gt - Le) * 6 * ut : ut < 1 / 2 ? Gt : ut < 2 / 3 ? Le + (Gt - Le) * (2 / 3 - ut) * 6 : Le;
      }
      if (x === 0)
        D = L = N = b;
      else {
        var de = b < 0.5 ? b * (1 + x) : b + x - b * x, se = 2 * b - de;
        D = oe(se, de, _ + 1 / 3), L = oe(se, de, _), N = oe(se, de, _ - 1 / 3);
      }
      return { r: D * 255, g: L * 255, b: N * 255 };
    }
    function A(_, x, b) {
      _ = fe(_, 255), x = fe(x, 255), b = fe(b, 255);
      var D = d(_, x, b), L = c(_, x, b), N, oe, de = D, se = D - L;
      if (oe = D === 0 ? 0 : se / D, D == L)
        N = 0;
      else {
        switch (D) {
          case _:
            N = (x - b) / se + (x < b ? 6 : 0);
            break;
          case x:
            N = (b - _) / se + 2;
            break;
          case b:
            N = (_ - x) / se + 4;
            break;
        }
        N /= 6;
      }
      return { h: N, s: oe, v: de };
    }
    function M(_, x, b) {
      _ = fe(_, 360) * 6, x = fe(x, 100), b = fe(b, 100);
      var D = e.floor(_), L = _ - D, N = b * (1 - x), oe = b * (1 - L * x), de = b * (1 - (1 - L) * x), se = D % 6, Le = [b, oe, N, N, de, b][se], Gt = [de, b, b, oe, N, N][se], ut = [N, N, de, b, b, oe][se];
      return { r: Le * 255, g: Gt * 255, b: ut * 255 };
    }
    function H(_, x, b, D) {
      var L = [
        Me(u(_).toString(16)),
        Me(u(x).toString(16)),
        Me(u(b).toString(16))
      ];
      return D && L[0].charAt(0) == L[0].charAt(1) && L[1].charAt(0) == L[1].charAt(1) && L[2].charAt(0) == L[2].charAt(1) ? L[0].charAt(0) + L[1].charAt(0) + L[2].charAt(0) : L.join("");
    }
    function U(_, x, b, D, L) {
      var N = [
        Me(u(_).toString(16)),
        Me(u(x).toString(16)),
        Me(u(b).toString(16)),
        Me(Si(D))
      ];
      return L && N[0].charAt(0) == N[0].charAt(1) && N[1].charAt(0) == N[1].charAt(1) && N[2].charAt(0) == N[2].charAt(1) && N[3].charAt(0) == N[3].charAt(1) ? N[0].charAt(0) + N[1].charAt(0) + N[2].charAt(0) + N[3].charAt(0) : N.join("");
    }
    function ee(_, x, b, D) {
      var L = [
        Me(Si(D)),
        Me(u(_).toString(16)),
        Me(u(x).toString(16)),
        Me(u(b).toString(16))
      ];
      return L.join("");
    }
    v.equals = function(_, x) {
      return !_ || !x ? !1 : v(_).toRgbString() == v(x).toRgbString();
    }, v.random = function() {
      return v.fromRatio({
        r: g(),
        g: g(),
        b: g()
      });
    };
    function re(_, x) {
      x = x === 0 ? 0 : x || 10;
      var b = v(_).toHsl();
      return b.s -= x / 100, b.s = Ye(b.s), v(b);
    }
    function ye(_, x) {
      x = x === 0 ? 0 : x || 10;
      var b = v(_).toHsl();
      return b.s += x / 100, b.s = Ye(b.s), v(b);
    }
    function Q(_) {
      return v(_).desaturate(100);
    }
    function B(_, x) {
      x = x === 0 ? 0 : x || 10;
      var b = v(_).toHsl();
      return b.l += x / 100, b.l = Ye(b.l), v(b);
    }
    function ae(_, x) {
      x = x === 0 ? 0 : x || 10;
      var b = v(_).toRgb();
      return b.r = d(0, c(255, b.r - u(255 * -(x / 100)))), b.g = d(0, c(255, b.g - u(255 * -(x / 100)))), b.b = d(0, c(255, b.b - u(255 * -(x / 100)))), v(b);
    }
    function ve(_, x) {
      x = x === 0 ? 0 : x || 10;
      var b = v(_).toHsl();
      return b.l -= x / 100, b.l = Ye(b.l), v(b);
    }
    function K(_, x) {
      var b = v(_).toHsl(), D = (b.h + x) % 360;
      return b.h = D < 0 ? 360 + D : D, v(b);
    }
    function De(_) {
      var x = v(_).toHsl();
      return x.h = (x.h + 180) % 360, v(x);
    }
    function Ht(_) {
      var x = v(_).toHsl(), b = x.h;
      return [
        v(_),
        v({ h: (b + 120) % 360, s: x.s, l: x.l }),
        v({ h: (b + 240) % 360, s: x.s, l: x.l })
      ];
    }
    function Dr(_) {
      var x = v(_).toHsl(), b = x.h;
      return [
        v(_),
        v({ h: (b + 90) % 360, s: x.s, l: x.l }),
        v({ h: (b + 180) % 360, s: x.s, l: x.l }),
        v({ h: (b + 270) % 360, s: x.s, l: x.l })
      ];
    }
    function Ja(_) {
      var x = v(_).toHsl(), b = x.h;
      return [
        v(_),
        v({ h: (b + 72) % 360, s: x.s, l: x.l }),
        v({ h: (b + 216) % 360, s: x.s, l: x.l })
      ];
    }
    function xi(_, x, b) {
      x = x || 6, b = b || 30;
      var D = v(_).toHsl(), L = 360 / b, N = [v(_)];
      for (D.h = (D.h - (L * x >> 1) + 720) % 360; --x; )
        D.h = (D.h + L) % 360, N.push(v(D));
      return N;
    }
    function eo(_, x) {
      x = x || 6;
      for (var b = v(_).toHsv(), D = b.h, L = b.s, N = b.v, oe = [], de = 1 / x; x--; )
        oe.push(v({ h: D, s: L, v: N })), N = (N + de) % 1;
      return oe;
    }
    v.mix = function(_, x, b) {
      b = b === 0 ? 0 : b || 50;
      var D = v(_).toRgb(), L = v(x).toRgb(), N = b / 100, oe = {
        r: (L.r - D.r) * N + D.r,
        g: (L.g - D.g) * N + D.g,
        b: (L.b - D.b) * N + D.b,
        a: (L.a - D.a) * N + D.a
      };
      return v(oe);
    }, v.readability = function(_, x) {
      var b = v(_), D = v(x);
      return (e.max(b.getLuminance(), D.getLuminance()) + 0.05) / (e.min(b.getLuminance(), D.getLuminance()) + 0.05);
    }, v.isReadable = function(_, x, b) {
      var D = v.readability(_, x), L, N;
      switch (N = !1, L = ir(b), L.level + L.size) {
        case "AAsmall":
        case "AAAlarge":
          N = D >= 4.5;
          break;
        case "AAlarge":
          N = D >= 3;
          break;
        case "AAAsmall":
          N = D >= 7;
          break;
      }
      return N;
    }, v.mostReadable = function(_, x, b) {
      var D = null, L = 0, N, oe, de, se;
      b = b || {}, oe = b.includeFallbackColors, de = b.level, se = b.size;
      for (var Le = 0; Le < x.length; Le++)
        N = v.readability(_, x[Le]), N > L && (L = N, D = v(x[Le]));
      return v.isReadable(_, D, { level: de, size: se }) || !oe ? D : (b.includeFallbackColors = !1, v.mostReadable(_, ["#fff", "#000"], b));
    };
    var Mr = v.names = {
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
    }, en = v.hexNames = zt(Mr);
    function zt(_) {
      var x = {};
      for (var b in _)
        _.hasOwnProperty(b) && (x[_[b]] = b);
      return x;
    }
    function Ci(_) {
      return _ = parseFloat(_), (isNaN(_) || _ < 0 || _ > 1) && (_ = 1), _;
    }
    function fe(_, x) {
      to(_) && (_ = "100%");
      var b = no(_);
      return _ = c(x, d(0, parseFloat(_))), b && (_ = parseInt(_ * x, 10) / 100), e.abs(_ - x) < 1e-6 ? 1 : _ % x / parseFloat(x);
    }
    function Ye(_) {
      return c(1, d(0, _));
    }
    function Ve(_) {
      return parseInt(_, 16);
    }
    function to(_) {
      return typeof _ == "string" && _.indexOf(".") != -1 && parseFloat(_) === 1;
    }
    function no(_) {
      return typeof _ == "string" && _.indexOf("%") != -1;
    }
    function Me(_) {
      return _.length == 1 ? "0" + _ : "" + _;
    }
    function qt(_) {
      return _ <= 1 && (_ = _ * 100 + "%"), _;
    }
    function Si(_) {
      return e.round(parseFloat(_) * 255).toString(16);
    }
    function mn(_) {
      return Ve(_) / 255;
    }
    var Be = function() {
      var _ = "[-\\+]?\\d+%?", x = "[-\\+]?\\d*\\.\\d+%?", b = "(?:" + x + ")|(?:" + _ + ")", D = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?", L = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(b),
        rgb: new RegExp("rgb" + D),
        rgba: new RegExp("rgba" + L),
        hsl: new RegExp("hsl" + D),
        hsla: new RegExp("hsla" + L),
        hsv: new RegExp("hsv" + D),
        hsva: new RegExp("hsva" + L),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function Pt(_) {
      return !!Be.CSS_UNIT.exec(_);
    }
    function rr(_) {
      _ = _.replace(r, "").replace(a, "").toLowerCase();
      var x = !1;
      if (Mr[_])
        _ = Mr[_], x = !0;
      else if (_ == "transparent")
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var b;
      return (b = Be.rgb.exec(_)) ? { r: b[1], g: b[2], b: b[3] } : (b = Be.rgba.exec(_)) ? { r: b[1], g: b[2], b: b[3], a: b[4] } : (b = Be.hsl.exec(_)) ? { h: b[1], s: b[2], l: b[3] } : (b = Be.hsla.exec(_)) ? { h: b[1], s: b[2], l: b[3], a: b[4] } : (b = Be.hsv.exec(_)) ? { h: b[1], s: b[2], v: b[3] } : (b = Be.hsva.exec(_)) ? { h: b[1], s: b[2], v: b[3], a: b[4] } : (b = Be.hex8.exec(_)) ? {
        r: Ve(b[1]),
        g: Ve(b[2]),
        b: Ve(b[3]),
        a: mn(b[4]),
        format: x ? "name" : "hex8"
      } : (b = Be.hex6.exec(_)) ? {
        r: Ve(b[1]),
        g: Ve(b[2]),
        b: Ve(b[3]),
        format: x ? "name" : "hex"
      } : (b = Be.hex4.exec(_)) ? {
        r: Ve(b[1] + "" + b[1]),
        g: Ve(b[2] + "" + b[2]),
        b: Ve(b[3] + "" + b[3]),
        a: mn(b[4] + "" + b[4]),
        format: x ? "name" : "hex8"
      } : (b = Be.hex3.exec(_)) ? {
        r: Ve(b[1] + "" + b[1]),
        g: Ve(b[2] + "" + b[2]),
        b: Ve(b[3] + "" + b[3]),
        format: x ? "name" : "hex"
      } : !1;
    }
    function ir(_) {
      var x, b;
      return _ = _ || { level: "AA", size: "small" }, x = (_.level || "AA").toUpperCase(), b = (_.size || "small").toLowerCase(), x !== "AA" && x !== "AAA" && (x = "AA"), b !== "small" && b !== "large" && (b = "small"), { level: x, size: b };
    }
    t.exports ? t.exports = v : window.tinycolor = v;
  })(Math);
})(p0);
var I4 = p0.exports;
const fn = /* @__PURE__ */ wi(I4);
var N4 = "Expected a function", cd = NaN, B4 = "[object Symbol]", W4 = /^\s+|\s+$/g, U4 = /^[-+]0x[0-9a-f]+$/i, j4 = /^0b[01]+$/i, H4 = /^0o[0-7]+$/i, z4 = parseInt, q4 = typeof it == "object" && it && it.Object === Object && it, G4 = typeof self == "object" && self && self.Object === Object && self, Y4 = q4 || G4 || Function("return this")(), V4 = Object.prototype, K4 = V4.toString, X4 = Math.max, Z4 = Math.min, js = function() {
  return Y4.Date.now();
};
function Q4(t, e, r) {
  var a, o, u, c, d, g, v = 0, y = !1, S = !1, R = !0;
  if (typeof t != "function")
    throw new TypeError(N4);
  e = fd(e) || 0, _u(r) && (y = !!r.leading, S = "maxWait" in r, u = S ? X4(fd(r.maxWait) || 0, e) : u, R = "trailing" in r ? !!r.trailing : R);
  function k(B) {
    var ae = a, ve = o;
    return a = o = void 0, v = B, c = t.apply(ve, ae), c;
  }
  function A(B) {
    return v = B, d = setTimeout(U, e), y ? k(B) : c;
  }
  function M(B) {
    var ae = B - g, ve = B - v, K = e - ae;
    return S ? Z4(K, u - ve) : K;
  }
  function H(B) {
    var ae = B - g, ve = B - v;
    return g === void 0 || ae >= e || ae < 0 || S && ve >= u;
  }
  function U() {
    var B = js();
    if (H(B))
      return ee(B);
    d = setTimeout(U, M(B));
  }
  function ee(B) {
    return d = void 0, R && a ? k(B) : (a = o = void 0, c);
  }
  function re() {
    d !== void 0 && clearTimeout(d), v = 0, a = g = o = d = void 0;
  }
  function ye() {
    return d === void 0 ? c : ee(js());
  }
  function Q() {
    var B = js(), ae = H(B);
    if (a = arguments, o = this, g = B, ae) {
      if (d === void 0)
        return A(g);
      if (S)
        return d = setTimeout(U, e), k(g);
    }
    return d === void 0 && (d = setTimeout(U, e)), c;
  }
  return Q.cancel = re, Q.flush = ye, Q;
}
function _u(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function J4(t) {
  return !!t && typeof t == "object";
}
function e6(t) {
  return typeof t == "symbol" || J4(t) && K4.call(t) == B4;
}
function fd(t) {
  if (typeof t == "number")
    return t;
  if (e6(t))
    return cd;
  if (_u(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _u(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(W4, "");
  var r = j4.test(t);
  return r || H4.test(t) ? z4(t.slice(2), r ? 2 : 8) : U4.test(t) ? cd : +t;
}
var t6 = Q4;
const n6 = /* @__PURE__ */ wi(t6);
function _t(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
var r6 = i6;
function i6(t, e, r) {
  return e < r ? t < e ? e : t > r ? r : t : t < r ? r : t > e ? e : t;
}
const Lt = /* @__PURE__ */ wi(r6);
var a6 = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, o6 = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, s6 = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, u6 = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, l6 = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, c6 = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, f6 = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, d6 = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, h6 = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, p6 = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, v6 = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, g6 = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, _6 = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, m6 = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, b6 = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, y6 = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, w6 = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, x6 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" }, C6 = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" }, S6 = { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)", dividers: "rgba(0, 0, 0, 0.12)" }, E6 = { primary: "rgba(255, 255, 255, 1)", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", dividers: "rgba(255, 255, 255, 0.12)" }, O6 = { active: "rgba(0, 0, 0, 0.54)", inactive: "rgba(0, 0, 0, 0.38)" }, T6 = { active: "rgba(255, 255, 255, 1)", inactive: "rgba(255, 255, 255, 0.5)" }, k6 = "#ffffff", A6 = "#000000";
const $6 = {
  red: a6,
  pink: o6,
  purple: s6,
  deepPurple: u6,
  indigo: l6,
  blue: c6,
  lightBlue: f6,
  cyan: d6,
  teal: h6,
  green: p6,
  lightGreen: v6,
  lime: g6,
  yellow: _6,
  amber: m6,
  orange: b6,
  deepOrange: y6,
  brown: w6,
  grey: x6,
  blueGrey: C6,
  darkText: S6,
  lightText: E6,
  darkIcons: O6,
  lightIcons: T6,
  white: k6,
  black: A6
};
var v0 = "Expected a function", dd = NaN, P6 = "[object Symbol]", R6 = /^\s+|\s+$/g, F6 = /^[-+]0x[0-9a-f]+$/i, D6 = /^0b[01]+$/i, M6 = /^0o[0-7]+$/i, L6 = parseInt, I6 = typeof it == "object" && it && it.Object === Object && it, N6 = typeof self == "object" && self && self.Object === Object && self, B6 = I6 || N6 || Function("return this")(), W6 = Object.prototype, U6 = W6.toString, j6 = Math.max, H6 = Math.min, Hs = function() {
  return B6.Date.now();
};
function z6(t, e, r) {
  var a, o, u, c, d, g, v = 0, y = !1, S = !1, R = !0;
  if (typeof t != "function")
    throw new TypeError(v0);
  e = hd(e) || 0, ja(r) && (y = !!r.leading, S = "maxWait" in r, u = S ? j6(hd(r.maxWait) || 0, e) : u, R = "trailing" in r ? !!r.trailing : R);
  function k(B) {
    var ae = a, ve = o;
    return a = o = void 0, v = B, c = t.apply(ve, ae), c;
  }
  function A(B) {
    return v = B, d = setTimeout(U, e), y ? k(B) : c;
  }
  function M(B) {
    var ae = B - g, ve = B - v, K = e - ae;
    return S ? H6(K, u - ve) : K;
  }
  function H(B) {
    var ae = B - g, ve = B - v;
    return g === void 0 || ae >= e || ae < 0 || S && ve >= u;
  }
  function U() {
    var B = Hs();
    if (H(B))
      return ee(B);
    d = setTimeout(U, M(B));
  }
  function ee(B) {
    return d = void 0, R && a ? k(B) : (a = o = void 0, c);
  }
  function re() {
    d !== void 0 && clearTimeout(d), v = 0, a = g = o = d = void 0;
  }
  function ye() {
    return d === void 0 ? c : ee(Hs());
  }
  function Q() {
    var B = Hs(), ae = H(B);
    if (a = arguments, o = this, g = B, ae) {
      if (d === void 0)
        return A(g);
      if (S)
        return d = setTimeout(U, e), k(g);
    }
    return d === void 0 && (d = setTimeout(U, e)), c;
  }
  return Q.cancel = re, Q.flush = ye, Q;
}
function q6(t, e, r) {
  var a = !0, o = !0;
  if (typeof t != "function")
    throw new TypeError(v0);
  return ja(r) && (a = "leading" in r ? !!r.leading : a, o = "trailing" in r ? !!r.trailing : o), z6(t, e, {
    leading: a,
    maxWait: e,
    trailing: o
  });
}
function ja(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function G6(t) {
  return !!t && typeof t == "object";
}
function Y6(t) {
  return typeof t == "symbol" || G6(t) && U6.call(t) == P6;
}
function hd(t) {
  if (typeof t == "number")
    return t;
  if (Y6(t))
    return dd;
  if (ja(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ja(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(R6, "");
  var r = D6.test(t);
  return r || M6.test(t) ? L6(t.slice(2), r ? 2 : 8) : F6.test(t) ? dd : +t;
}
var V6 = q6;
const K6 = /* @__PURE__ */ wi(V6);
var X6 = "#000", pd, vd;
function Z6(t) {
  return function() {
    var e = ce(t), r;
    if (Q6()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function Q6() {
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
var J6 = ["hex", "hex8"], e8 = Bt.extend({
  props: {
    value: {
      // default: '#fff',
      // required: true,
      validator: function(e) {
        return fn(e).isValid();
      }
    },
    outputFormat: {
      type: String,
      validator: function(e) {
        return J6.indexOf(e) >= 0;
      }
    },
    consistent: {
      type: Boolean,
      default: !0
    }
  }
}), t8 = {
  hex: "toHexString",
  hex8: "toHex8String"
}, jt = Qe(pd = (vd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = Z6(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), a.debounced = n6(function(d) {
      d();
    }, 100), a._outputFormat = "hex", a;
  }
  return mt(r, [{
    key: "created",
    value: function() {
      this.value === null && (this._outputFormat = this.outputFormat), this._outputFormat = new fn(this.value).getFormat();
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
      var u = this, c = new fn(o);
      this.$emit("input", c), this.$emit("change", c), this.debounced(function() {
        u.$emit("change-complete", c);
      });
      var d = t8[this._outputFormat];
      if (d) {
        var g = c[d]();
        this.$emit("consistent-change", g), this.debounced(function() {
          return u.$emit("consistent-change-complete", g);
        });
      }
    }
  }, {
    key: "equals",
    value: function(o) {
      return this.isInputEmpty ? !1 : fn.equals(this.tc, o);
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
        return new fn(X6);
      var o = new fn(this.value);
      return o;
    }
  }]), r;
}(e8), vd)) || pd, gd, _d, zs, md, bd;
function n8(t) {
  return function() {
    var e = ce(t), r;
    if (r8()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function r8() {
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
var i8 = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"], a8 = (gd = Te({
  default: function() {
    return i8;
  }
}), Qe(_d = (zs = (bd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = n8(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "palette", md, ge(a)), a;
  }
  return r;
}(Ut(jt)), bd), md = _e(zs.prototype, "palette", [gd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), zs)) || _d);
function bt(t, e, r, a, o, u, c, d, g, v) {
  typeof c != "boolean" && (g = d, d = c, c = !1);
  const y = typeof r == "function" ? r.options : r;
  t && t.render && (y.render = t.render, y.staticRenderFns = t.staticRenderFns, y._compiled = !0, o && (y.functional = !0)), a && (y._scopeId = a);
  let S;
  if (u ? (S = function(R) {
    R = R || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !R && typeof __VUE_SSR_CONTEXT__ < "u" && (R = __VUE_SSR_CONTEXT__), e && e.call(this, g(R)), R && R._registeredComponents && R._registeredComponents.add(u);
  }, y._ssrRegister = S) : e && (S = c ? function(R) {
    e.call(this, v(R, this.$root.$options.shadowRoot));
  } : function(R) {
    e.call(this, d(R));
  }), S)
    if (y.functional) {
      const R = y.render;
      y.render = function(A, M) {
        return S.call(M), R(A, M);
      };
    } else {
      const R = y.beforeCreate;
      y.beforeCreate = R ? [].concat(R, S) : [S];
    }
  return r;
}
const o8 = typeof navigator < "u" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function yt(t) {
  return (e, r) => s8(e, r);
}
let qs;
const yd = {};
function s8(t, e) {
  const r = o8 ? e.media || "default" : t, a = yd[r] || (yd[r] = { ids: /* @__PURE__ */ new Set(), styles: [] });
  if (!a.ids.has(t)) {
    a.ids.add(t);
    let o = e.source;
    if (e.map && (o += `
/*# sourceURL=` + e.map.sources[0] + " */", o += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) + " */"), a.element || (a.element = document.createElement("style"), a.element.type = "text/css", e.media && a.element.setAttribute("media", e.media), qs === void 0 && (qs = document.head || document.getElementsByTagName("head")[0]), qs.appendChild(a.element)), "styleSheet" in a.element)
      a.styles.push(o), a.element.styleSheet.cssText = a.styles.filter(Boolean).join(`
`);
    else {
      const u = a.ids.size - 1, c = document.createTextNode(o), d = a.element.childNodes;
      d[u] && a.element.removeChild(d[u]), d.length ? a.element.insertBefore(c, d[u]) : a.element.appendChild(c);
    }
  }
}
var u8 = a8, l8 = function() {
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
}, c8 = [], f8 = function(e) {
  e && e("data-v-219e7b26_0", {
    source: ".vc-compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-compact-colors{overflow:hidden;padding:0;margin:0}.vc-compact-color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vc-compact-color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vc-compact-color-item--white .vc-compact-dot{background:#000}.vc-compact-dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}",
    map: void 0,
    media: void 0
  });
}, d8 = void 0, h8 = void 0, p8 = !1;
bt({
  render: l8,
  staticRenderFns: c8
}, f8, u8, d8, p8, h8, !1, yt, void 0, void 0);
var wd, xd, Gs, Cd, Sd;
function v8(t) {
  return function() {
    var e = ce(t), r;
    if (g8()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
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
var _8 = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4D4D4D", "#404040", "#333333", "#262626", "#0D0D0D", "#000000"], m8 = (wd = Te({
  default: function() {
    return _8;
  }
}), Qe(xd = (Gs = (Sd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = v8(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "palette", Cd, ge(a)), a;
  }
  return mt(r, [{
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
}(Ut(jt)), Sd), Cd = _e(Gs.prototype, "palette", [wd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Gs)) || xd), b8 = m8, y8 = function() {
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
}, w8 = [], x8 = function(e) {
  e && e("data-v-ea26c37c_0", {
    source: ".vc-grayscale{width:125px;border-radius:2px;box-shadow:0 2px 15px rgba(0,0,0,.12),0 2px 10px rgba(0,0,0,.16);background-color:#fff}.vc-grayscale-colors{border-radius:2px;overflow:hidden;padding:0;margin:0}.vc-grayscale-color-item{list-style:none;width:25px;height:25px;float:left;position:relative;cursor:pointer}.vc-grayscale-color-item--white .vc-grayscale-dot{background:#000}.vc-grayscale-dot{position:absolute;top:50%;left:50%;width:6px;height:6px;margin:-3px 0 0 -2px;border-radius:50%;opacity:1;background:#fff}",
    map: void 0,
    media: void 0
  });
}, C8 = void 0, S8 = void 0, E8 = !1;
bt({
  render: y8,
  staticRenderFns: w8
}, x8, b8, C8, E8, S8, !1, yt, void 0, void 0);
var Ed, Od, Td, kd, Ad, $d, qn, Pd, Rd, Fd, Dd, Md, Ld;
function O8(t) {
  return function() {
    var e = ce(t), r;
    if (T8()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function T8() {
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
var k8 = {
  r: function(e) {
    return Lt(e, 255, 0);
  },
  g: function(e) {
    return Lt(e, 255, 0);
  },
  b: function(e) {
    return Lt(e, 255, 0);
  },
  a: function(e) {
    return Lt(e, 1, 0);
  },
  h: function(e) {
    return Lt(e, 360, 0);
  },
  s: function(e) {
    return Lt(e, 100, 0);
  },
  l: function(e) {
    return Lt(e, 100, 0);
  },
  v: function(e) {
    return Lt(e, 100, 0);
  }
}, A8 = (Ed = Te(), Od = Te(), Td = Te(), kd = Te({
  default: 1
}), Ad = Xa(), Qe($d = (qn = (Ld = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = O8(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "value", Pd, ge(a)), be(a, "label", Rd, ge(a)), be(a, "desc", Fd, ge(a)), be(a, "step", Dd, ge(a)), be(a, "input", Md, ge(a)), a;
  }
  return mt(r, [{
    key: "handleChange",
    value: function(o) {
      var u = this.label, c = o, d = +o;
      if (!isNaN(d) && (u === "r" || u === "g" || u === "b" || u === "a" || u === "h" || u === "s" || u === "l" || u === "v")) {
        var g = k8[u];
        c = g(d);
      }
      this.$emit("change", c), this.$emit("input", c);
      var v = this.$refs.input;
      v.value = c.toString();
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
      var u = o.target, c = u.value, d = Number(c);
      if (!isNaN(d)) {
        var g = this.step || 1;
        o.keyCode === 38 && (this.handleChange(d + g), o.preventDefault()), o.keyCode === 40 && (this.handleChange(d - g), o.preventDefault());
      }
    }
  }]), r;
}(Bt), Ld), Pd = _e(qn.prototype, "value", [Ed], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Rd = _e(qn.prototype, "label", [Od], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Fd = _e(qn.prototype, "desc", [Td], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Dd = _e(qn.prototype, "step", [kd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Md = _e(qn.prototype, "input", [Ad], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), qn)) || $d), $8 = A8, P8 = function() {
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
}, R8 = [], F8 = function(e) {
  e && e("data-v-1d9ea8fa_0", {
    source: ".vc-editable-input{position:relative}.vc-input__input{padding:0;border:0;outline:0}.vc-input__label{text-transform:capitalize}",
    map: void 0,
    media: void 0
  });
}, D8 = void 0, M8 = void 0, L8 = !1, Za = bt({
  render: P8,
  staticRenderFns: R8
}, F8, $8, D8, L8, M8, !1, yt, void 0, void 0);
function g0(t) {
  return fn(t).isValid();
}
function I8(t) {
  return fn(t).getAlpha() === 0;
}
function mu(t) {
  return fn(t).getAlpha() < 1;
}
var Id, Nd;
function Bd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function N8(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bd(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function B8(t) {
  return function() {
    var e = ce(t), r;
    if (W8()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function W8() {
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
var U8 = (Id = Qe({
  components: {
    EditableInput: Za
  }
}), Id(Nd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = B8(r);
  function r() {
    return at(this, r), e.apply(this, arguments);
  }
  return mt(r, [{
    key: "onChangeHex",
    value: function(o) {
      g0(o) && o.length === 7 && this.onColorChange(o);
    }
  }, {
    key: "onChange",
    value: function(o, u) {
      this.rgba !== null && this.onColorChange(N8({}, this.rgba, {}, _t({}, o, u)));
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
}(Ut(jt))) || Nd), j8 = U8, H8 = function() {
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
}, z8 = [], q8 = function(e) {
  e && e("data-v-37c532a3_0", {
    source: ".vc-material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-material .vc-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vc-material .vc-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vc-material-hex{border-bottom-width:2px;border-bottom-style:solid}.vc-material-split{display:flex;margin-right:-10px;padding-top:11px}.vc-material-third{flex:1;padding-right:10px}",
    map: void 0,
    media: void 0
  });
}, G8 = void 0, Y8 = void 0, V8 = !1;
bt({
  render: H8,
  staticRenderFns: z8
}, q8, j8, G8, V8, Y8, !1, yt, void 0, void 0);
var Wd, Ud, jd, Hd, Gn, zd, qd, Gd;
function Yd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function K8(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yd(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function X8(t) {
  return function() {
    var e = ce(t), r;
    if (Z8()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function Z8() {
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
var Q8 = (Wd = Te({
  default: "horizontal"
}), Ud = Xa("container"), jd = L4("hsl"), Qe(Hd = (Gn = (Gd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = X8(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "direction", zd, ge(a)), be(a, "container", qd, ge(a)), a.oldHue = 0, a.pullDirection = "", a.containerWidth = 0, a.containerHeight = 0, a.xOffset = 0, a.yOffset = 0, a;
  }
  return mt(r, [{
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
      var c, d, g = this.containerWidth, v = this.containerHeight, y = this.xOffset, S = this.yOffset, R = o - y, k = u - S;
      this.direction === "vertical" ? k < 0 ? c = 360 : k > v ? c = 0 : (d = -(k * 100 / v) + 100, c = 360 * d / 100) : R < 0 ? c = 0 : R > g ? c = 360 : (d = R * 100 / g, c = 360 * d / 100), this.hsl.h !== c && this.onColorChange(K8({}, this.hsl, {}, {
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
}(Ut(jt)), Gd), zd = _e(Gn.prototype, "direction", [Wd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), qd = _e(Gn.prototype, "container", [Ud], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), _e(Gn.prototype, "onHSLChanged", [jd], Object.getOwnPropertyDescriptor(Gn.prototype, "onHSLChanged"), Gn.prototype), Gn)) || Hd), J8 = Q8, eS = function() {
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
}, tS = [], nS = function(e) {
  e && e("data-v-579123e4_0", {
    source: ".vc-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vc-hue--horizontal{background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.vc-hue--vertical{background:linear-gradient(to top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.vc-hue-container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vc-hue-pointer{z-index:2;position:absolute}.vc-hue-picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}.vc-hue--vertical .vc-hue-picker{transform:translateX(-2px) translateY(-50%)}",
    map: void 0,
    media: void 0
  });
}, rS = void 0, iS = void 0, aS = !1, Qa = bt({
  render: eS,
  staticRenderFns: tS
}, nS, J8, rS, aS, iS, !1, yt, void 0, void 0), Vd, Kd, Xd, Ys, Zd, Qd;
function Jd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function oS(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Jd(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Jd(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function sS(t) {
  return function() {
    var e = ce(t), r;
    if (uS()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function uS() {
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
var lS = (Vd = Qe({
  components: {
    Hue: Qa
  }
}), Kd = Te({
  default: function() {
    return [".80", ".65", ".50", ".35", ".20"];
  }
}), Vd(Xd = (Ys = (Qd = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = sS(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "swatches", Zd, ge(a)), a;
  }
  return mt(r, [{
    key: "handleSwClick",
    value: function(o) {
      this.onColorChange(oS({}, this.hsl, {
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
}(Ut(jt)), Qd), Zd = _e(Ys.prototype, "swatches", [Kd], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Ys)) || Xd), cS = lS, fS = function() {
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
        click: function(d) {
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
}, dS = [], hS = function(e) {
  e && e("data-v-7d76e88d_0", {
    source: ".vc-slider{position:relative;width:410px}.vc-slider-hue-warp{height:12px;position:relative}.vc-slider-hue-warp .vc-hue-picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-slider-swatches{display:flex;margin-top:20px}.vc-slider-swatch{margin-right:1px;flex:1;width:20%}.vc-slider-swatch:first-child{margin-right:1px}.vc-slider-swatch:first-child .vc-slider-swatch-picker{border-radius:2px 0 0 2px}.vc-slider-swatch:last-child{margin-right:0}.vc-slider-swatch:last-child .vc-slider-swatch-picker{border-radius:0 2px 2px 0}.vc-slider-swatch-picker{cursor:pointer;height:12px}.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 1px #ddd}.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 .6px #ddd}",
    map: void 0,
    media: void 0
  });
}, pS = void 0, vS = void 0, gS = !1;
bt({
  render: fS,
  staticRenderFns: dS
}, hS, cS, pS, gS, vS, !1, yt, void 0, void 0);
var eh, th, Vs, nh, rh;
function _S(t) {
  return function() {
    var e = ce(t), r;
    if (mS()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function mS() {
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
var bS = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "blueGrey", "black"], yS = ["900", "700", "500", "300", "100"], wS = function() {
  var e = [];
  return bS.forEach(function(r) {
    var a = [];
    r.toLowerCase() === "black" || r.toLowerCase() === "white" ? a = a.concat(["#000000", "#FFFFFF"]) : yS.forEach(function(o) {
      var u = $6[r][o];
      a.push(u.toUpperCase());
    }), e.push(a);
  }), e;
}, xS = (eh = Te({
  default: wS
}), Qe(th = (Vs = (rh = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = _S(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "palette", nh, ge(a)), a;
  }
  return mt(r, [{
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
}(Ut(jt)), rh), nh = _e(Vs.prototype, "palette", [eh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Vs)) || th), CS = xS, SS = function() {
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
          click: function(g) {
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
}, ES = [], OS = function(e) {
  e && e("data-v-2b663370_0", {
    source: ".vc-swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vc-swatches-box{padding:16px 0 6px 16px;overflow:hidden}.vc-swatches-color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vc-swatches-color-it{box-sizing:border-box;width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;-ms-border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-o-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;border-radius:2px 2px 0 0}.vc-swatches-color--white{border:1px solid #ddd}.vc-swatches-pick{fill:#fff;margin-left:8px;display:block}.vc-swatches-color--white .vc-swatches-pick{fill:#333}",
    map: void 0,
    media: void 0
  });
}, TS = void 0, kS = void 0, AS = !1;
bt({
  render: SS,
  staticRenderFns: ES
}, OS, CS, TS, AS, kS, !1, yt, void 0, void 0);
var ih, ah, Ks, oh, sh;
function uh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function $S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? uh(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : uh(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function PS(t) {
  return function() {
    var e = ce(t), r;
    if (RS()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function RS() {
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
var FS = (ih = Xa("container"), Qe(ah = (Ks = (sh = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = PS(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), a.containerWidth = 0, a.containerHeight = 0, a.xOffset = 0, a.yOffset = 0, a.lastMouseEvent = "", a.throttle = K6(function(d, g) {
      d(g);
    }, 20, {
      leading: !0,
      trailing: !1
    }), be(a, "container", oh, ge(a)), a;
  }
  return mt(r, [{
    key: "mounted",
    value: function() {
      var o = this.$refs.container;
      this.containerWidth = o.clientWidth, this.containerHeight = o.clientHeight, this.xOffset = o.getBoundingClientRect().left + window.pageXOffset, this.yOffset = o.getBoundingClientRect().top + window.pageYOffset;
    }
  }, {
    key: "handleChange",
    value: function(o, u) {
      var c = this.containerWidth, d = this.containerHeight, g = this.xOffset, v = this.yOffset, y = Lt(o - g, 0, c), S = Lt(u - v, 0, d), R = y / c, k = Lt(-(S / d) + 1, 0, 1);
      this.throttle(this.onColorChange, $S({}, this.hsv, {}, {
        s: R,
        v: k
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
}(Ut(jt)), sh), oh = _e(Ks.prototype, "container", [ih], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Ks)) || ah), DS = FS, MS = function() {
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
}, LS = [], IS = function(e) {
  e && e("data-v-7500df3c_0", {
    source: ".vc-saturation,.vc-saturation--black,.vc-saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-tap-highlight-color:transparent}.vc-saturation--white{background:linear-gradient(to right,#fff,rgba(255,255,255,0))}.vc-saturation--black{background:linear-gradient(to top,#000,rgba(0,0,0,0))}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",
    map: void 0,
    media: void 0
  });
}, NS = void 0, BS = void 0, WS = !1, Iu = bt({
  render: MS,
  staticRenderFns: LS
}, IS, DS, NS, WS, BS, !1, yt, void 0, void 0), lh, ch, fh, dh, hh, ph, vh, gh, kn, _h, mh, bh, yh, wh, xh, Ch;
function Sh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Eh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sh(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function US(t) {
  return function() {
    var e = ce(t), r;
    if (jS()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function jS() {
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
var HS = (lh = Qe({
  components: {
    Saturation: Iu,
    Hue: Qa,
    EditableInput: Za
  }
}), ch = Te({
  default: "Color Picker"
}), fh = Te({
  default: !1
}), dh = Te({
  default: !1
}), hh = Te({
  default: "OK"
}), ph = Te({
  default: "Cancel"
}), vh = Te({
  default: "Reset"
}), lh(gh = (kn = (Ch = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = US(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "head", _h, ge(a)), be(a, "disableFields", mh, ge(a)), be(a, "hasResetButton", bh, ge(a)), be(a, "acceptLabel", yh, ge(a)), be(a, "cancelLabel", wh, ge(a)), be(a, "resetLabel", xh, ge(a)), a.currentColor = null, a;
  }
  return mt(r, [{
    key: "mounted",
    value: function() {
      this.currentColor = this.tc.toHexString();
    }
  }, {
    key: "inputChange",
    value: function(o, u) {
      if (o === "hex" && g0(u)) {
        this.onColorChange(u);
        return;
      }
      if (o === "r" || o === "g" || o === "b") {
        this.onColorChange(Eh({}, this.rgba, _t({}, o, u)));
        return;
      }
      if (o === "h" || o === "s" || o === "v") {
        this.onColorChange(Eh({}, this.tc.toHsv(), _t({}, o, u)));
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
}(Ut(jt)), Ch), _h = _e(kn.prototype, "head", [ch], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), mh = _e(kn.prototype, "disableFields", [fh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), bh = _e(kn.prototype, "hasResetButton", [dh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), yh = _e(kn.prototype, "acceptLabel", [hh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), wh = _e(kn.prototype, "cancelLabel", [ph], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), xh = _e(kn.prototype, "resetLabel", [vh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), kn)) || gh), zS = HS, qS = function() {
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
}, GS = [], YS = function(e) {
  e && e("data-v-55f2423a_0", {
    source: '.vc-photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vc-photoshop__disable-fields{width:390px}.vc-ps-head{background-image:linear-gradient(-180deg,#f0f0f0 0,#d4d4d4 100%);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 rgba(255,255,255,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vc-ps-body{padding:15px;display:flex}.vc-ps-saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vc-ps-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-ps-hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vc-ps-hue-pointer{position:relative}.vc-ps-hue-pointer--left,.vc-ps-hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vc-ps-hue-pointer--left:after,.vc-ps-hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vc-ps-hue-pointer--left{transform:translate(-13px,-4px)}.vc-ps-hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vc-ps-controls{width:180px;margin-left:10px;display:flex}.vc-ps-controls__disable-fields{width:auto}.vc-ps-actions{margin-left:20px;flex:1}.vc-ps-ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff 0,#e6e6e6 100%);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vc-ps-previews{width:60px}.vc-ps-previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vc-ps-previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vc-ps-previews__label{font-size:14px;color:#000;text-align:center}.vc-ps-fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vc-ps-fields .vc-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vc-ps-fields .vc-input__desc,.vc-ps-fields .vc-input__label{top:0;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vc-ps-fields .vc-input__label{left:0;width:34px}.vc-ps-fields .vc-input__desc{right:0;width:0}.vc-ps-fields__divider{height:5px}.vc-ps-fields__hex .vc-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vc-ps-fields__hex .vc-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',
    map: void 0,
    media: void 0
  });
}, VS = void 0, KS = void 0, XS = !1;
bt({
  render: qS,
  staticRenderFns: GS
}, YS, zS, VS, XS, KS, !1, yt, void 0, void 0);
var Oh, Th, kh, Ah, ei, $h, Ph, Rh, Fh;
function ZS(t) {
  return function() {
    var e = ce(t), r;
    if (QS()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function QS() {
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
var Xs = {}, JS = (Oh = Te({
  default: 8
}), Th = Te({
  default: "#fff"
}), kh = Te({
  default: "#e6e6e6"
}), Qe(Ah = (ei = (Fh = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = ZS(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "size", $h, ge(a)), be(a, "white", Ph, ge(a)), be(a, "grey", Rh, ge(a)), a;
  }
  return mt(r, [{
    key: "bgStyle",
    get: function() {
      var o = e7(this.white, this.grey, this.size);
      return o === null ? {} : {
        "background-image": "url(".concat(o, ")")
      };
    }
  }]), r;
}(Bt), Fh), $h = _e(ei.prototype, "size", [Oh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Ph = _e(ei.prototype, "white", [Th], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Rh = _e(ei.prototype, "grey", [kh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), ei)) || Ah);
function e7(t, e, r) {
  var a = t + "," + e + "," + r;
  if (Xs[a])
    return Xs[a];
  var o = t7(t, e, r);
  return o === null ? null : (Xs[a] = o, o);
}
function t7(t, e, r) {
  if (typeof document > "u")
    return null;
  var a = document.createElement("canvas");
  a.width = a.height = r * 2;
  var o = a.getContext("2d");
  return o ? (o.fillStyle = t, o.fillRect(0, 0, a.width, a.height), o.fillStyle = e, o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null;
}
var n7 = JS, r7 = function() {
  var e = this, r = e.$createElement, a = e._self._c || r;
  return a("div", {
    staticClass: "vc-checkerboard",
    style: e.bgStyle
  });
}, i7 = [], a7 = function(e) {
  e && e("data-v-0130206a_0", {
    source: ".vc-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0;background-size:contain}",
    map: void 0,
    media: void 0
  });
}, o7 = void 0, s7 = void 0, u7 = !1, Nu = bt({
  render: r7,
  staticRenderFns: i7
}, a7, n7, o7, u7, s7, !1, yt, void 0, void 0), Dh, Mh, Lh, Zs, Ih, Nh;
function l7(t) {
  return function() {
    var e = ce(t), r;
    if (c7()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function c7() {
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
var f7 = (Dh = Qe({
  components: {
    Checkboard: Nu
  }
}), Mh = Xa(), Dh(Lh = (Zs = (Nh = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = l7(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "container", Ih, ge(a)), a.containerWidth = 0, a.xOffset = 0, a;
  }
  return mt(r, [{
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
      var u = this.containerWidth, c = this.xOffset, d = o - c, g;
      d < 0 ? g = 0 : d > u ? g = 1 : g = Math.round(d * 100 / u) / 100, this.a !== g && (this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(this.tc.setAlpha(g)));
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
}(Ut(jt)), Nh), Ih = _e(Zs.prototype, "container", [Mh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Zs)) || Lh), d7 = f7, h7 = function() {
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
}, p7 = [], v7 = function(e) {
  e && e("data-v-fd896072_0", {
    source: ".vc-alpha{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.vc-alpha-gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px;-webkit-tap-highlight-color:transparent}.vc-alpha-pointer{z-index:2;position:absolute}.vc-alpha-picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",
    map: void 0,
    media: void 0
  });
}, g7 = void 0, _7 = void 0, m7 = !1, _0 = bt({
  render: h7,
  staticRenderFns: p7
}, v7, d7, g7, m7, _7, !1, yt, void 0, void 0), Bh, Wh, Uh, jh, Hh, ti, zh, qh, Gh, Yh;
function Vh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function b7(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vh(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vh(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function y7(t) {
  return function() {
    var e = ce(t), r;
    if (w7()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function w7() {
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
var x7 = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF", "rgba(0,0,0,0)"], C7 = (Bh = Qe({
  components: {
    EditableInput: Za,
    Saturation: Iu,
    Hue: Qa,
    Alpha: _0,
    Checkboard: Nu
  }
}), Wh = Te({
  default: function() {
    return x7;
  }
}), Uh = Te({
  default: !1
}), jh = Te({
  default: !1
}), Bh(Hh = (ti = (Yh = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = y7(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "presetColors", zh, ge(a)), be(a, "disableAlpha", qh, ge(a)), be(a, "disableFields", Gh, ge(a)), a.isTransparent = I8, a;
  }
  return mt(r, [{
    key: "onAlphaChange",
    value: function(o) {
      mu(o) && this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(o);
    }
  }, {
    key: "onInputChange",
    value: function(o, u) {
      this.onColorChange(b7({}, this.rgba, _t({}, o, u)));
    }
  }, {
    key: "hex",
    get: function() {
      return mu(this.tc) ? this.tc.toHex8() : this.tc.toHex();
    }
  }, {
    key: "rgba",
    get: function() {
      return this.tc.toRgb();
    }
  }]), r;
}(Ut(jt)), Yh), zh = _e(ti.prototype, "presetColors", [Wh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), qh = _e(ti.prototype, "disableAlpha", [Uh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), Gh = _e(ti.prototype, "disableFields", [jh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), ti)) || Hh), S7 = C7, E7 = function() {
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
}, O7 = [], T7 = function(e) {
  e && e("data-v-4b47afcd_0", {
    source: ".vc-sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vc-sketch-saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vc-sketch-controls{display:flex}.vc-sketch-sliders{padding:4px 0;flex:1}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-hue-wrap{position:relative;height:10px}.vc-sketch-alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vc-sketch-active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{width:90%;padding:4px 0 3px 10%;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px}.vc-sketch-field .vc-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vc-sketch-presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch-presets-color .vc-checkerboard{box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);border-radius:3px}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}",
    map: void 0,
    media: void 0
  });
}, k7 = void 0, A7 = void 0, $7 = !1;
bt({
  render: E7,
  staticRenderFns: O7
}, T7, S7, k7, $7, A7, !1, yt, void 0, void 0);
var Kh, Xh, Zh, Qh, _a, Jh, ep, tp;
function np(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function rp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? np(Object(r), !0).forEach(function(a) {
      _t(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function P7(t) {
  return function() {
    var e = ce(t), r;
    if (R7()) {
      var a = ce(this).constructor;
      r = Reflect.construct(e, arguments, a);
    } else
      r = e.apply(this, arguments);
    return ot(this, r);
  };
}
function R7() {
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
var F7 = (Kh = Qe({
  components: {
    EditableInput: Za,
    Saturation: Iu,
    Hue: Qa,
    Alpha: _0,
    Checkboard: Nu
  }
}), Xh = Te({
  default: !1
}), Zh = Te({
  default: !1
}), Kh(Qh = (_a = (tp = /* @__PURE__ */ function(t) {
  st(r, t);
  var e = P7(r);
  function r() {
    var a;
    at(this, r);
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
      u[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(u)), be(a, "disableAlpha", Jh, ge(a)), be(a, "disableFields", ep, ge(a)), a.fieldsIndex = 0, a.highlight = !1, a;
  }
  return mt(r, [{
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
      mu(o) && this.getOutputFormat() === "hex" && this.setOutputFormat("hex8"), this.onColorChange(o);
    }
  }, {
    key: "inputChange",
    value: function(o, u) {
      (o === "r" || o === "g" || o === "b") && this.onColorChange(rp({}, this.rgba, _t({}, o, u))), (o === "h" || o === "s" || o === "l") && this.onColorChange(rp({}, this.hsl, _t({}, o, u))), (o = "a") && this.onColorChange(this.tc.setAlpha(+u));
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
}(Ut(jt)), tp), Jh = _e(_a.prototype, "disableAlpha", [Xh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), ep = _e(_a.prototype, "disableFields", [Zh], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), _a)) || Qh), D7 = F7, M7 = function() {
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
}, L7 = [], I7 = function(e) {
  e && e("data-v-d9a37274_0", {
    source: ".vc-chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{position:relative;width:30px;height:30px;border-radius:15px;overflow:hidden;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{width:30px;height:30px;border-radius:15px;background-size:auto}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;margin-left:-6px;flex:1}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{width:32px;text-align:right;position:relative}.vc-chrome-toggle-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vc-chrome-hue-wrap{position:relative;height:10px;margin-bottom:8px}.vc-chrome-alpha-wrap{position:relative;height:10px}.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-gradient{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-chrome-body{padding:16px 16px 12px;background-color:#fff}.vc-chrome-saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vc-chrome-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-chrome-fields .vc-input__input{font-size:11px;color:#333;width:100%;border-radius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vc-chrome-fields .vc-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}.vc-chrome__disable-alpha .vc-chrome-active-color{width:18px;height:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-top:4px;margin-bottom:4px}",
    map: void 0,
    media: void 0
  });
}, N7 = void 0, B7 = void 0, W7 = !1, U7 = bt({
  render: M7,
  staticRenderFns: L7
}, I7, D7, N7, W7, B7, !1, yt, void 0, void 0);
const j7 = {
  components: { Chrome: U7 },
  props: {
    value: {
      type: String,
      default: "ffffff"
    }
  },
  setup() {
    return {
      showMenu: It(!1)
    };
  }
};
var H7 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "relative flex justify-center" }, [r("button", { staticClass: "p-1 border-2 border-gray-600", on: { click: function(a) {
    e.showMenu = !e.showMenu;
  } } }, [r("span", { staticClass: "block w-4 h-4", style: `background-color: #${e.value}` })]), e.showMenu ? r("Chrome", { staticClass: "absolute bottom-0 transform translate-y-full", attrs: { value: e.value }, on: { input: function(a) {
    e.$emit("input", a.toHex());
  } } }) : e._e()], 1);
}, z7 = [], q7 = /* @__PURE__ */ He(
  j7,
  H7,
  z7,
  !1,
  null,
  null,
  null,
  null
);
const G7 = q7.exports, Y7 = {
  components: { ColorPicker: G7 },
  props: {
    path: { type: Array },
    property: { type: String, default: "backgroundColor" },
    bp: { type: String, default: "xs" }
  },
  setup(t) {
    return {
      value: At({
        get() {
          var c, d;
          const { path: r, property: a, bp: o } = t;
          return ((d = (c = ($n(Ee.styles, r) ?? { styles: {} }).styles) == null ? void 0 : c[a]) == null ? void 0 : d[o]) ?? "ffffff";
        },
        set(r) {
          const { path: a, property: o, bp: u } = t, { styles: c } = $n(Ee.styles, a) ?? { styles: {} };
          pu({
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
};
var V7 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("ColorPicker", { model: { value: e.value, callback: function(a) {
    e.value = a;
  }, expression: "value" } });
}, K7 = [], X7 = /* @__PURE__ */ He(
  Y7,
  V7,
  K7,
  !1,
  null,
  null,
  null,
  null
);
const Z7 = X7.exports, ip = {
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
}, Q7 = {
  components: { ColorUpdater: Z7 },
  props: {
    reports: {
      type: Array
    }
  },
  setup(t) {
    const e = At(() => {
      const o = Zn.groupBy(t.reports, ({ kind: u }) => u);
      return Object.fromEntries(
        Object.keys(o).map((u) => [
          u,
          o[u].reduce((c, { style: d }) => (d && c.add(d), c), /* @__PURE__ */ new Set())
        ])
      );
    }), r = At(() => {
      if (!Ee.selected)
        return [];
      const o = Zn.last(Ee.selected.path);
      return [...e.value[o] ?? []];
    });
    return {
      info: At(() => {
        if (!Ee.selected)
          return null;
        const o = $n(Ee.styles, Ee.selected.path) ?? { styles: {} };
        return {
          name: Zn.last(Ee.selected.path),
          ...Ee.selected,
          styles: Object.keys(o.styles).map((u) => ({ prop: u, value: JSON.stringify(o.styles[u]) }))
        };
      }),
      styleInfo: ip,
      errorProps: r,
      path: At(() => {
        var o;
        return (o = Ee.selected) == null ? void 0 : o.path;
      }),
      colors: At(() => Ee.colors),
      getValue(o, u) {
        var d;
        return (d = ($n(Ee.styles, Ee.selected.path) ?? { styles: {} }).styles[o]) == null ? void 0 : d[u];
      },
      setValue(o, u, c) {
        c = ip[o].type === "number" ? Number.parseFloat(c) : c;
        const { styles: d } = $n(Ee.styles, Ee.selected.path) ?? { styles: {} };
        pu({
          path: Ee.selected.path,
          data: {
            [o]: {
              ...d[o],
              [u]: c
            }
          }
        });
      },
      getSpacing(o) {
        var c, d;
        return (d = (c = ($n(Ee.styles, Sa) ?? { styles: {} }).styles) == null ? void 0 : c.width) == null ? void 0 : d[o];
      },
      setSpacing(o, u) {
        const { styles: c } = $n(Ee.styles, Sa) ?? { styles: {} };
        pu({
          path: Sa,
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
};
var J7 = function() {
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
      return r("td", { key: c }, [a === "boolean" ? r("input", { attrs: { type: "checkbox" }, domProps: { value: e.getValue(u, c) }, on: { input: function(d) {
        return e.setValue(u, c, d.target.checked);
      } } }) : a === "number" ? r("input", { staticClass: "ring ring-blue-200 focus:ring-2 focus:ring-blue-400 w-24", attrs: { type: "number", step: o }, domProps: { value: e.getValue(u, c) }, on: { input: function(d) {
        return e.setValue(u, c, d.target.value);
      } } }) : a === "color" ? r("ColorUpdater", { attrs: { path: e.path, property: "color", bp: c } }) : r("input", { staticClass: "ring ring-blue-200 focus:ring-2 focus:ring-blue-400 w-24", attrs: { type: "text" }, domProps: { value: e.getValue(u, c) }, on: { input: function(d) {
        return e.setValue(u, c, d.target.value);
      } } })], 1);
    })], 2);
  }), 0)])]) : r("div", [e._v("N/A")])]);
}, e9 = [function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, e("summary", [e("h3", { staticClass: "inline-block font-bold" }, [t._v("Styles:")])]);
}, function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, e("thead", [e("tr", [e("td", [t._v("prop")]), e("td", [t._v("xs")]), e("td", [t._v("md")]), e("td", [t._v("lg")])])]);
}], t9 = /* @__PURE__ */ He(
  Q7,
  J7,
  e9,
  !1,
  null,
  null,
  null,
  null
);
const n9 = t9.exports;
function r9() {
  return new Promise((t) => {
    typeof setImmediate == "function" ? setImmediate(t) : setTimeout(t);
  });
}
const i9 = {
  props: {
    value: Number
  },
  setup(t, { emit: e }) {
    const r = It();
    return iu(() => {
      const a = r.value;
      e("input", a.scrollHeight);
      const o = new ResizeObserver(() => {
        e("input", a.scrollHeight);
      });
      o.observe(a), Ky(() => {
        o.unobserve(a);
      });
    }), {
      root: r
    };
  }
};
var a9 = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { ref: "root" }, [e._t("default")], 2);
}, o9 = [], s9 = /* @__PURE__ */ He(
  i9,
  a9,
  o9,
  !1,
  null,
  null,
  null,
  null
);
const u9 = s9.exports;
function l9() {
  const t = new URLSearchParams(location.search);
  return {
    preview: t.has("inspector-preview"),
    type: t.get("inspector-type") || "block"
  };
}
const c9 = {
  components: {
    LinkElement: _i,
    TextElement: mi
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
var f9 = function() {
  var e = this, r = e._self._c;
  return r("li", { staticClass: "mr-4 flex", class: { "md:py-2.5 pb-2.5": e.index === 0, "py-2.5": e.index != 0 } }, [r("LinkElement", { staticClass: "flex", attrs: { href: e.url } }, [r("TextElement", { staticClass: "w-max", attrs: { component: "span", kind: "menu-footer-link", blockType: "Menu Footer Link", color: "fff", hoverColor: "ffffffa3", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono", lineHeight: 1.3, underline: "" } }, [e._v(e._s(e.text))])], 1)], 1);
}, d9 = [], h9 = /* @__PURE__ */ He(
  c9,
  f9,
  d9,
  !1,
  null,
  null,
  null,
  null
);
const p9 = h9.exports, v9 = {
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
var g9 = function() {
  var e = this, r = e._self._c;
  return e.url ? r("li", { staticClass: "flex h-full w-10" }, [r("a", { staticClass: "hover:opacity-75 w-full h-full flex items-center justify-center", attrs: { target: "_blank", rel: "noopener", href: e.url } }, [r("svg", { staticClass: "text-white", staticStyle: { width: "16px", height: "16px" }, attrs: { viewBox: "0 0 24 24" } }, [r("path", { attrs: { fill: "currentColor", d: e.svgPath } })])])]) : e._e();
}, _9 = [], m9 = /* @__PURE__ */ He(
  v9,
  g9,
  _9,
  !1,
  null,
  null,
  null,
  null
);
const b9 = m9.exports, y9 = {
  components: {
    Logo: ry,
    DeskList: iy,
    PageList: ay,
    Site: oy,
    LinkElement: _i,
    LiSocialIcon: b9,
    LiMenuFooter: p9,
    SearchElement: sy,
    TextElement: mi,
    TextInput: lp,
    ColorArea: cp
  },
  data() {
    return {
      isMenuVisible: !1
    };
  },
  methods: {
    getCopyrightCaption(t) {
      return `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${t}`;
    }
  }
};
var w9 = function() {
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
}, x9 = [], C9 = /* @__PURE__ */ He(
  y9,
  w9,
  x9,
  !1,
  null,
  null,
  null,
  null
);
const S9 = C9.exports, E9 = {
  components: {
    Article: fp,
    DeskSection: dp,
    TextElement: mi,
    LinkElement: _i,
    HeroBlock: uy,
    NavBar: S9,
    SpacingProvider: ly,
    ColorArea: cp
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  methods: {
    getFormattedDate(t) {
      const e = t.getFullYear().toString().slice(2);
      return `${t.getDate()}.${t.getMonth()}.${e}`;
    }
  }
};
var O9 = function() {
  var e = this, r = e._self._c;
  return r("HeroBlock", { attrs: { block: e.block, backgroundColor: "000" } }, [r("NavBar", { staticClass: "z-20" }), r("div", { staticClass: "md:h-20 h-12" }), r("DeskSection", { attrs: { order: 0 }, scopedSlots: e._u([{ key: "default", fn: function({ desk: a }) {
    return [r("Article", { staticClass: "mb-14 lg:flex-row inset-x-0 flex flex-col w-full mx-auto my-0", scopedSlots: e._u([{ key: "default", fn: function({ article: o }) {
      return [r("div", { staticClass: "lg:order-2 border-opacity-20 lg:flex-1 md:px-10 flex flex-col justify-center px-5 py-10 border-t border-white border-solid" }, [r("TextElement", { attrs: { component: "p", kind: "desk-title", blockType: "Desk Title", color: "fff", "font-size": { xs: 13, md: 16 }, underline: "", "font-family": "Standard" } }, [e._v(e._s(a))]), r("LinkElement", { attrs: { href: o.url } }, [r("TextElement", { staticClass: "pt-1.5", attrs: { component: "h2", kind: "article-title", blockType: "Article Title", color: "fff", hoverColor: "ffffffa3", lineHeight: 1.3, "font-family": "Standard", bold: "", "font-size": { xs: 32 } } }, [e._v(e._s(o.title))])], 1), r("TextElement", { staticClass: "pt-2.5", attrs: { component: "p", kind: "article-blurb", blockType: "Article Blurb", color: "fff", "font-size": { xs: 16 }, "font-family": "Standard", lineHeight: 1.7 } }, [e._v(e._s(o.blurb))]), r("ul", { staticClass: "flex flex-row items-center justify-start pt-3" }, e._l(o.authors, function(u, c) {
        return r("li", { key: c, staticClass: "flex" }, [r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author", blockType: "Article Author", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(e._s(u.name))]), c < o.authors.length - 1 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-seperator", blockType: "Article Author Seperator", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(", ")]) : e._e()], 1);
      }), 0), r("TextElement", { staticClass: "pt-2.5", attrs: { component: "p", kind: "article-time", blockType: "Article Time", color: "fff", "font-size": { xs: 11 }, uppercase: "", "font-family": "Sometype Mono" } }, [e._v(e._s(e.getFormattedDate(o.time)))])], 1), r("ColorArea", { staticClass: "lg:order-1 lg:w-2/3 lg:m-0 md:mx-10 md:-mt-10 lg:top-0 md:top-10 top-5 lg:static relative z-10 mx-5 -mt-5", attrs: { backgroundColor: "1F2937", kind: "main-article-image-sizer-kind" } }, [r("LinkElement", { staticClass: "relative block w-full h-full", attrs: { href: o.url } }, [r("div", { staticClass: "image-placeholder" }, [r("div", { staticClass: "absolute inset-0 flex justify-center w-full h-full" }, [r("img", { staticClass: "object-cover w-auto h-full", attrs: { src: o.headline } })])])])], 1)];
    } }], null, !0) })];
  } }]) }), r("SpacingProvider", { attrs: { width: { xs: "100%", md: "calc(100% - 80px)" } } })], 1);
}, T9 = [], k9 = /* @__PURE__ */ He(
  E9,
  O9,
  T9,
  !1,
  null,
  null,
  null,
  null
);
const A9 = k9.exports, $9 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20595%20106'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill-rule='nonzero'%20fill='none'%3e%3cpath%20d='M27.458%205.802c-2.827%2017.336%205.494%2030.64%2024.964%2039.912C71.46%2054.78%2079.85%2069.176%2077.592%2088.902l-.17%201.353h-26.05c.85-6.508-.11-11.112-2.882-13.813C38.208%2066.424%2028.072%2066.2%2017.707%2055.096%204.454%2040.897-1.08%2025.016%201.108%207.453l.228-1.651h26.122z'%20fill='%23FF4C4C'%20/%3e%3cpath%20d='M23.256%209.302c-.438%206.068.537%2011.695%202.887%2016.888%202.819%206.227%207.642%2011.853%2014.561%2016.808l.904.703.474.39.92.801.388.356c.263.246.531.507.791.77l.408.423c1.476%201.57%202.924%203.468%203%205.266.162%203.858-.068%206.99-.77%209.385-.481%201.636-1.135%202.9-2.239%203.552-1.102.651-2.522.612-4.182.241-2.431-.543-5.279-1.858-8.57-3.867-5.174-3.042-9.079-5.942-11.724-8.776C8.124%2039.407%202.853%2025.106%204.417%209.302z'%20stroke='%23FF4C4C'%20stroke-width='2'%20fill='%232E53C2'%20/%3e%3cpath%20fill='%23FFB500'%20d='M79.193%204.445v31.55h-31.55V4.445z'%20/%3e%3cpath%20d='M370.979%2021.815c16.28%200%2027.94%2012.43%2027.94%2029.92%200%2017.71-11.11%2030.14-27.28%2030.14-11.826%200-17.552-6.955-19.501-10.523l-.08-.147h-.66v34.54h-8.69v-82.5h8.36v9.02h.66c1.43-2.09%206.82-10.45%2019.25-10.45zm-234.067%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-16.06-34.21-3.85-34.21-26.51%200-9.68%208.69-15.95%2020.68-15.95zm99.149%200c17.27%200%2029.81%2012.87%2029.81%2030.03%200%2017.16-12.76%2030.03-29.92%2030.03-17.16%200-29.81-12.65-29.81-30.03%200-17.27%2012.87-30.03%2029.92-30.03zm229.337%200c17.097%200%2026.97%2011.86%2027.167%2028.747l.003.513v3.19h-45.98c.11%2012.76%207.59%2019.91%2019.47%2019.91%207.908%200%2015.176-4.481%2017.18-12.182l.09-.358%208.47%201.98c-3.19%2010.67-12.65%2018.26-25.85%2018.26-17.38%200-28.27-12.21-28.27-29.81%200-18.26%2012.54-30.25%2027.72-30.25zm55.24%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-7.182-6.843-8.71-14.408-10.232l-.65-.13-1.022-.207-.29-.059-.58-.12-.58-.121c-.29-.062-.58-.125-.869-.189l-.578-.13c-7.885-1.808-15.234-4.82-15.234-15.322%200-9.68%208.69-15.95%2020.68-15.95zm51.718%200c9.9%200%2019.47%205.72%2020.79%2016.06l-7.59%202.2c-.77-6.71-6.27-10.78-13.75-10.78-7.15%200-11.77%203.52-11.77%208.47%200%2014.52%2034.32%202.42%2034.32%2026.07%200%2010.78-8.91%2018.04-22.22%2018.04-12.87%200-20.9-7.04-22.22-17.27l7.92-1.98c.66%207.7%206.05%2011.66%2014.74%2011.66%208.58%200%2013.31-4.18%2013.31-10.01%200-16.06-34.21-3.85-34.21-26.51%200-9.68%208.69-15.95%2020.68-15.95zM183.461%206.635v16.61h17.6v7.37h-17.6v33.44c0%206.16%202.53%208.8%208.58%208.8h8.25v7.59h-8.14c-10.45%200-17.38-4.73-17.38-16.28v-33.55h-10.78v-7.37h11.33V6.635h8.14zM303.4%2021.815v8.69h-5.17c-10.45%200-14.74%208.47-14.74%2019.36v30.58h-8.69v-57.2h8.58v9.57h.66c1.65-4.84%207.26-11%2015.62-11h3.74zm24%201.43v57.2h-8.69v-49.83h-10.78v-7.37h19.47zm109.048-1.43v8.69h-5.17c-10.45%200-14.74%208.47-14.74%2019.36v30.58h-8.69v-57.2h8.58v9.57h.66c1.65-4.84%207.26-11%2015.62-11h3.74zM215.765%2046.421c-3.331%2012.432%202.671%2023.606%2014.465%2026.766%2011.9%203.189%2022.714-3.593%2026.017-15.918%203.274-12.22-2.672-23.606-14.572-26.795-11.9-3.189-22.665%203.835-25.91%2015.947zm136.393%201.935c-2.445%2013.866%204.808%2023.41%2015.424%2025.282%2011.05%201.949%2020.651-5.63%2022.924-18.52%202.33-13.217-4.63-23.156-15.462-25.066-11.7-2.063-20.804%206.496-22.886%2018.304zm96.143-3.137-.058.367%2036.71%203.211c.487-11.882-7.233-18.3-16.657-19.124-9.208-.806-18.246%205.093-19.995%2015.546zM322.999.255c3.74%200%206.38%202.75%206.38%206.27%200%203.63-2.64%206.38-6.38%206.38-3.63%200-6.27-2.75-6.27-6.38%200-3.52%202.64-6.27%206.27-6.27z'%20fill='%23000'%20/%3e%3c/g%3e%3c/svg%3e", P9 = {
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
  logo: $9,
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
}, R9 = {
  setup() {
    return xu("providedData", P9), () => Cu(A9, { props: { block: { id: "hero" } } });
  }
}, F9 = {
  components: {
    Article: fy,
    Block: dy,
    DeskSection: hy,
    TextElement: py,
    LinkElement: vy
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  methods: {
    getDate(t) {
      const e = (t.time.getMonth() + 1).toString().padStart(2, "0"), r = t.time.getDate().toString().padStart(2, "0");
      return e + "." + r;
    }
  }
};
var D9 = function() {
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
}, M9 = [], L9 = /* @__PURE__ */ He(
  F9,
  D9,
  M9,
  !1,
  null,
  "a7263717",
  null,
  null
);
const I9 = L9.exports, N9 = {
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
}, B9 = {
  setup() {
    return xu("providedData", N9), () => Cu(I9, { props: { block: { id: "block1" } } });
  }
};
function $t(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function Je(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function Jt(t) {
  Je(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function W9(t, e) {
  Je(2, arguments);
  var r = Jt(t).getTime(), a = $t(e);
  return new Date(r + a);
}
function U9(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function j9(t) {
  return Je(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function H9(t) {
  if (Je(1, arguments), !j9(t) && typeof t != "number")
    return !1;
  var e = Jt(t);
  return !isNaN(Number(e));
}
var z9 = {
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
}, q9 = function(t, e, r) {
  var a, o = z9[t];
  return typeof o == "string" ? a = o : e === 1 ? a = o.one : a = o.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const G9 = q9;
function Qs(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.width ? String(e.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var Y9 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, V9 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, K9 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, X9 = {
  date: Qs({
    formats: Y9,
    defaultWidth: "full"
  }),
  time: Qs({
    formats: V9,
    defaultWidth: "full"
  }),
  dateTime: Qs({
    formats: K9,
    defaultWidth: "full"
  })
};
const Z9 = X9;
var Q9 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, J9 = function(t, e, r, a) {
  return Q9[t];
};
const eE = J9;
function ni(t) {
  return function(e, r) {
    var a = r || {}, o = a.context ? String(a.context) : "standalone", u;
    if (o === "formatting" && t.formattingValues) {
      var c = t.defaultFormattingWidth || t.defaultWidth, d = a.width ? String(a.width) : c;
      u = t.formattingValues[d] || t.formattingValues[c];
    } else {
      var g = t.defaultWidth, v = a.width ? String(a.width) : t.defaultWidth;
      u = t.values[v] || t.values[g];
    }
    var y = t.argumentCallback ? t.argumentCallback(e) : e;
    return u[y];
  };
}
var tE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, iE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, aE = {
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
}, oE = {
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
}, sE = function(t, e) {
  var r = Number(t), a = r % 100;
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
}, uE = {
  ordinalNumber: sE,
  era: ni({
    values: tE,
    defaultWidth: "wide"
  }),
  quarter: ni({
    values: nE,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ni({
    values: rE,
    defaultWidth: "wide"
  }),
  day: ni({
    values: iE,
    defaultWidth: "wide"
  }),
  dayPeriod: ni({
    values: aE,
    defaultWidth: "wide",
    formattingValues: oE,
    defaultFormattingWidth: "wide"
  })
};
const lE = uE;
function ri(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, o = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], u = e.match(o);
    if (!u)
      return null;
    var c = u[0], d = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], g = Array.isArray(d) ? fE(d, function(S) {
      return S.test(c);
    }) : cE(d, function(S) {
      return S.test(c);
    }), v;
    v = t.valueCallback ? t.valueCallback(g) : g, v = r.valueCallback ? r.valueCallback(v) : v;
    var y = e.slice(c.length);
    return {
      value: v,
      rest: y
    };
  };
}
function cE(t, e) {
  for (var r in t)
    if (t.hasOwnProperty(r) && e(t[r]))
      return r;
}
function fE(t, e) {
  for (var r = 0; r < t.length; r++)
    if (e(t[r]))
      return r;
}
function dE(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.match(t.matchPattern);
    if (!a)
      return null;
    var o = a[0], u = e.match(t.parsePattern);
    if (!u)
      return null;
    var c = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var d = e.slice(o.length);
    return {
      value: c,
      rest: d
    };
  };
}
var hE = /^(\d+)(th|st|nd|rd)?/i, pE = /\d+/i, vE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gE = {
  any: [/^b/i, /^(a|c)/i]
}, _E = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, mE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yE = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, wE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, xE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, CE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, SE = {
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
}, EE = {
  ordinalNumber: dE({
    matchPattern: hE,
    parsePattern: pE,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ri({
    matchPatterns: vE,
    defaultMatchWidth: "wide",
    parsePatterns: gE,
    defaultParseWidth: "any"
  }),
  quarter: ri({
    matchPatterns: _E,
    defaultMatchWidth: "wide",
    parsePatterns: mE,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ri({
    matchPatterns: bE,
    defaultMatchWidth: "wide",
    parsePatterns: yE,
    defaultParseWidth: "any"
  }),
  day: ri({
    matchPatterns: wE,
    defaultMatchWidth: "wide",
    parsePatterns: xE,
    defaultParseWidth: "any"
  }),
  dayPeriod: ri({
    matchPatterns: CE,
    defaultMatchWidth: "any",
    parsePatterns: SE,
    defaultParseWidth: "any"
  })
};
const OE = EE;
var TE = {
  code: "en-US",
  formatDistance: G9,
  formatLong: Z9,
  formatRelative: eE,
  localize: lE,
  match: OE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const kE = TE;
function AE(t, e) {
  Je(2, arguments);
  var r = $t(e);
  return W9(t, -r);
}
function pe(t, e) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < e; )
    a = "0" + a;
  return r + a;
}
var $E = {
  // Year
  y: function(t, e) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return pe(e === "yy" ? a % 100 : a, e.length);
  },
  // Month
  M: function(t, e) {
    var r = t.getUTCMonth();
    return e === "M" ? String(r + 1) : pe(r + 1, 2);
  },
  // Day of the month
  d: function(t, e) {
    return pe(t.getUTCDate(), e.length);
  },
  // AM or PM
  a: function(t, e) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function(t, e) {
    return pe(t.getUTCHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H: function(t, e) {
    return pe(t.getUTCHours(), e.length);
  },
  // Minute
  m: function(t, e) {
    return pe(t.getUTCMinutes(), e.length);
  },
  // Second
  s: function(t, e) {
    return pe(t.getUTCSeconds(), e.length);
  },
  // Fraction of second
  S: function(t, e) {
    var r = e.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return pe(o, e.length);
  }
};
const An = $E;
var PE = 864e5;
function RE(t) {
  Je(1, arguments);
  var e = Jt(t), r = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var a = e.getTime(), o = r - a;
  return Math.floor(o / PE) + 1;
}
function Ha(t) {
  Je(1, arguments);
  var e = 1, r = Jt(t), a = r.getUTCDay(), o = (a < e ? 7 : 0) + a - e;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function m0(t) {
  Je(1, arguments);
  var e = Jt(t), r = e.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var o = Ha(a), u = /* @__PURE__ */ new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ha(u);
  return e.getTime() >= o.getTime() ? r + 1 : e.getTime() >= c.getTime() ? r : r - 1;
}
function FE(t) {
  Je(1, arguments);
  var e = m0(t), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Ha(r);
  return a;
}
var DE = 6048e5;
function ME(t) {
  Je(1, arguments);
  var e = Jt(t), r = Ha(e).getTime() - FE(e).getTime();
  return Math.round(r / DE) + 1;
}
function za(t, e) {
  Je(1, arguments);
  var r = e || {}, a = r.locale, o = a && a.options && a.options.weekStartsOn, u = o == null ? 0 : $t(o), c = r.weekStartsOn == null ? u : $t(r.weekStartsOn);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = Jt(t), g = d.getUTCDay(), v = (g < c ? 7 : 0) + g - c;
  return d.setUTCDate(d.getUTCDate() - v), d.setUTCHours(0, 0, 0, 0), d;
}
function b0(t, e) {
  Je(1, arguments);
  var r = Jt(t, e), a = r.getUTCFullYear(), o = e || {}, u = o.locale, c = u && u.options && u.options.firstWeekContainsDate, d = c == null ? 1 : $t(c), g = o.firstWeekContainsDate == null ? d : $t(o.firstWeekContainsDate);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(a + 1, 0, g), v.setUTCHours(0, 0, 0, 0);
  var y = za(v, e), S = /* @__PURE__ */ new Date(0);
  S.setUTCFullYear(a, 0, g), S.setUTCHours(0, 0, 0, 0);
  var R = za(S, e);
  return r.getTime() >= y.getTime() ? a + 1 : r.getTime() >= R.getTime() ? a : a - 1;
}
function LE(t, e) {
  Je(1, arguments);
  var r = e || {}, a = r.locale, o = a && a.options && a.options.firstWeekContainsDate, u = o == null ? 1 : $t(o), c = r.firstWeekContainsDate == null ? u : $t(r.firstWeekContainsDate), d = b0(t, e), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(d, 0, c), g.setUTCHours(0, 0, 0, 0);
  var v = za(g, e);
  return v;
}
var IE = 6048e5;
function NE(t, e) {
  Je(1, arguments);
  var r = Jt(t), a = za(r, e).getTime() - LE(r, e).getTime();
  return Math.round(a / IE) + 1;
}
var yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, BE = {
  // Era
  G: function(t, e, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
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
  y: function(t, e, r) {
    if (e === "yo") {
      var a = t.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return An.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, r, a) {
    var o = b0(t, a), u = o > 0 ? o : 1 - o;
    if (e === "YY") {
      var c = u % 100;
      return pe(c, 2);
    }
    return e === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : pe(u, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    var r = m0(t);
    return pe(r, e.length);
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
  u: function(t, e) {
    var r = t.getUTCFullYear();
    return pe(r, e.length);
  },
  // Quarter
  Q: function(t, e, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(a);
      case "QQ":
        return pe(a, 2);
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
  q: function(t, e, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(a);
      case "qq":
        return pe(a, 2);
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
  M: function(t, e, r) {
    var a = t.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return An.M(t, e);
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
  L: function(t, e, r) {
    var a = t.getUTCMonth();
    switch (e) {
      case "L":
        return String(a + 1);
      case "LL":
        return pe(a + 1, 2);
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
  w: function(t, e, r, a) {
    var o = NE(t, a);
    return e === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : pe(o, e.length);
  },
  // ISO week of year
  I: function(t, e, r) {
    var a = ME(t);
    return e === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : pe(a, e.length);
  },
  // Day of the month
  d: function(t, e, r) {
    return e === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : An.d(t, e);
  },
  // Day of year
  D: function(t, e, r) {
    var a = RE(t);
    return e === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : pe(a, e.length);
  },
  // Day of week
  E: function(t, e, r) {
    var a = t.getUTCDay();
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
  e: function(t, e, r, a) {
    var o = t.getUTCDay(), u = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(u);
      case "ee":
        return pe(u, 2);
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
  c: function(t, e, r, a) {
    var o = t.getUTCDay(), u = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(u);
      case "cc":
        return pe(u, e.length);
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
  i: function(t, e, r) {
    var a = t.getUTCDay(), o = a === 0 ? 7 : a;
    switch (e) {
      case "i":
        return String(o);
      case "ii":
        return pe(o, e.length);
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
  a: function(t, e, r) {
    var a = t.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
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
  b: function(t, e, r) {
    var a = t.getUTCHours(), o;
    switch (a === 12 ? o = yr.noon : a === 0 ? o = yr.midnight : o = a / 12 >= 1 ? "pm" : "am", e) {
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
  B: function(t, e, r) {
    var a = t.getUTCHours(), o;
    switch (a >= 17 ? o = yr.evening : a >= 12 ? o = yr.afternoon : a >= 4 ? o = yr.morning : o = yr.night, e) {
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
  h: function(t, e, r) {
    if (e === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return An.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, r) {
    return e === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : An.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, r) {
    var a = t.getUTCHours() % 12;
    return e === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : pe(a, e.length);
  },
  // Hour [1-24]
  k: function(t, e, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), e === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : pe(a, e.length);
  },
  // Minute
  m: function(t, e, r) {
    return e === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : An.m(t, e);
  },
  // Second
  s: function(t, e, r) {
    return e === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : An.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return An.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, r, a) {
    var o = a._originalDate || t, u = o.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (e) {
      case "X":
        return op(u);
      case "XXXX":
      case "XX":
        return Kn(u);
      case "XXXXX":
      case "XXX":
      default:
        return Kn(u, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, r, a) {
    var o = a._originalDate || t, u = o.getTimezoneOffset();
    switch (e) {
      case "x":
        return op(u);
      case "xxxx":
      case "xx":
        return Kn(u);
      case "xxxxx":
      case "xxx":
      default:
        return Kn(u, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, r, a) {
    var o = a._originalDate || t, u = o.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ap(u, ":");
      case "OOOO":
      default:
        return "GMT" + Kn(u, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, r, a) {
    var o = a._originalDate || t, u = o.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ap(u, ":");
      case "zzzz":
      default:
        return "GMT" + Kn(u, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, r, a) {
    var o = a._originalDate || t, u = Math.floor(o.getTime() / 1e3);
    return pe(u, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, r, a) {
    var o = a._originalDate || t, u = o.getTime();
    return pe(u, e.length);
  }
};
function ap(t, e) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), o = Math.floor(a / 60), u = a % 60;
  if (u === 0)
    return r + String(o);
  var c = e || "";
  return r + String(o) + c + pe(u, 2);
}
function op(t, e) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + pe(Math.abs(t) / 60, 2);
  }
  return Kn(t, e);
}
function Kn(t, e) {
  var r = e || "", a = t > 0 ? "-" : "+", o = Math.abs(t), u = pe(Math.floor(o / 60), 2), c = pe(o % 60, 2);
  return a + u + r + c;
}
function sp(t, e) {
  switch (t) {
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
function y0(t, e) {
  switch (t) {
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
function WE(t, e) {
  var r = t.match(/(P+)(p+)?/), a = r[1], o = r[2];
  if (!o)
    return sp(t, e);
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
  return u.replace("{{date}}", sp(a, e)).replace("{{time}}", y0(o, e));
}
var UE = {
  p: y0,
  P: WE
}, jE = ["D", "DD"], HE = ["YY", "YYYY"];
function zE(t) {
  return jE.indexOf(t) !== -1;
}
function qE(t) {
  return HE.indexOf(t) !== -1;
}
function up(t, e, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
}
var GE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, YE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, VE = /^'([^]*?)'?$/, KE = /''/g, XE = /[a-zA-Z]/;
function w0(t, e, r) {
  Je(2, arguments);
  var a = String(e), o = r || {}, u = o.locale || kE, c = u.options && u.options.firstWeekContainsDate, d = c == null ? 1 : $t(c), g = o.firstWeekContainsDate == null ? d : $t(o.firstWeekContainsDate);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = u.options && u.options.weekStartsOn, y = v == null ? 0 : $t(v), S = o.weekStartsOn == null ? y : $t(o.weekStartsOn);
  if (!(S >= 0 && S <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!u.localize)
    throw new RangeError("locale must contain localize property");
  if (!u.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var R = Jt(t);
  if (!H9(R))
    throw new RangeError("Invalid time value");
  var k = U9(R), A = AE(R, k), M = {
    firstWeekContainsDate: g,
    weekStartsOn: S,
    locale: u,
    _originalDate: R
  }, H = a.match(YE).map(function(U) {
    var ee = U[0];
    if (ee === "p" || ee === "P") {
      var re = UE[ee];
      return re(U, u.formatLong, M);
    }
    return U;
  }).join("").match(GE).map(function(U) {
    if (U === "''")
      return "'";
    var ee = U[0];
    if (ee === "'")
      return ZE(U);
    var re = BE[ee];
    if (re)
      return !o.useAdditionalWeekYearTokens && qE(U) && up(U, e, t), !o.useAdditionalDayOfYearTokens && zE(U) && up(U, e, t), re(A, U, u.localize, M);
    if (ee.match(XE))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
    return U;
  }).join("");
  return H;
}
function ZE(t) {
  return t.match(VE)[1].replace(KE, "'");
}
const QE = {
  components: {
    TextElement: mi,
    LinkElement: _i
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
      format: w0
    };
  }
};
var JE = function() {
  var e = this, r = e._self._c;
  return r("LinkElement", { attrs: { href: e.article.url } }, [r("div", { staticClass: "md:flex md:flex-col md:items-stretch grid grid-cols-3 md:gap-0 gap-4 items-start md:mx-0 mx-6 lg:pb-0 pb-4 mb-4 lg:border-0 border-b border-solid border-gray-300" }, [r("div", { class: { "article-image-wrapper-150": e.imageExpanded, "article-image-wrapper": !e.imageExpanded } }, [r("img", { staticClass: "absolute w-full h-full object-cover object-center top-0 left-0", attrs: { src: e.article.headline } })]), r("div", { staticClass: "lg:pb-10 md:pt-4 col-span-2 flex flex-col" }, [r("TextElement", { staticClass: "tracking-wider mb-2", attrs: { kind: "article-desk-title", blockType: "Article Desk Title", component: "h4", color: "000", fontSize: 11, fontFamily: "Aileron", uppercase: "" } }, [e._v(" " + e._s(e.article.desk) + " ")]), r("LinkElement", { staticClass: "lg:mb-4 mb-2", attrs: { href: e.article.url } }, [r("TextElement", { staticClass: "hover:underline", attrs: { component: "h3", kind: "article-title", blockType: "Article Title", color: "000", fontSize: { xs: 18, md: 22 }, lineHeight: 1.2, fontFamily: "Aileron", bold: "" } }, [e._v(" " + e._s(e.article.title) + " ")])], 1), r("ul", { staticClass: "mb-0.5 flex flex-row flex-wrap justify-start items-center list-none" }, e._l(e.article.authors, function(a, o) {
    return r("li", { key: o, staticClass: "flex" }, [o === 0 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author By", color: "757776", "font-family": "Aileron", "font-size": { xs: 11 }, lineHeight: 1.2 } }, [e._v("By ")]) : e._e(), r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author" } }, [e._v(e._s(a.name))]), o < e.article.authors.length - 2 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author Seperator", color: "fff" } }, [e._v(", ")]) : o < e.article.authors.length - 1 ? r("TextElement", { staticClass: "flex", attrs: { component: "div", kind: "article-author-by-line", blockType: "Article Author Seperator", color: "fff" } }, [e._v(" and ")]) : e._e()], 1);
  }), 0), e.article.time ? r("TextElement", { staticClass: "flex w-full", attrs: { component: "time", kind: "article-time", blockType: "Article Time", color: "757776", "font-family": "Aileron", "font-size": { xs: 11 } } }, [e._v(e._s(e.format(e.article.time, "d MMMM yyyy")))]) : e._e()], 1)])]);
}, eO = [], tO = /* @__PURE__ */ He(
  QE,
  JE,
  eO,
  !1,
  null,
  "4683db93",
  null,
  null
);
const nO = tO.exports, rO = {
  components: {
    Article: fp,
    Block: cy,
    DeskSection: dp,
    TextElement: mi,
    TextInput: lp,
    LinkElement: _i,
    ArticleTile: nO
  },
  props: {
    block: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      format: w0
    };
  }
};
var iO = function() {
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
}, aO = [], oO = /* @__PURE__ */ He(
  rO,
  iO,
  aO,
  !1,
  null,
  "866ed27b",
  null,
  null
);
const sO = oO.exports, uO = {
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
}, lO = {
  setup() {
    return xu("providedData", uO), () => Cu(sO, { props: { block: { id: "block2" } } });
  }
};
window.TestUtils = p4;
function Js() {
  return window.__STORE__;
}
async function cO() {
  const t = await c0();
  return {
    paths: xx(
      t.filter(({ path: e }) => e),
      T5
    ).map(({ path: e }) => e),
    results: t
  };
}
const fO = {
  name: "Inspector",
  components: { Overlay: b3, Report: j3, Watermark: b4, ElementInfo: n9, Viewport: Ix, SizeObserver: u9, Hero: R9, Block1: B9, Block2: lO },
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
  setup(t, { emit: e }) {
    const r = It(), a = It(), o = It([]), u = It(""), c = It(1250), d = It(800), g = It("block"), v = $a({
      preview: !1,
      type: "block"
    }), y = $a({
      control: !1,
      report: !1,
      testing: !1,
      screenshot: !1,
      preview: !1,
      outline: !1,
      loading: ""
    }), S = At(() => t.enable && !v.preview);
    async function R() {
      if (v.preview)
        return;
      y.loading = "Testing...", y.testing = !0, await aw();
      const A = Js(), { paths: M, results: H } = await cO();
      A.hasErrors = M, console.log(H), o.value = H, y.report = H.length > 0, y.testing = !1, y.outline = !0, y.loading = "";
    }
    function k() {
      const A = Js();
      A.styles = Object.freeze(e0()), A.hasErrors = [], A.selected = null, A.requestSelect = null, Object.assign(y, {
        control: !1,
        report: !1,
        testing: !1,
        screenshot: !1,
        preview: !1,
        outline: !1,
        loading: ""
      });
    }
    return Ts(S, (A) => y.control = A), Ts(
      () => y.preview,
      (A) => {
        A ? (y.outline = !1, y.report = !1) : (Js().colors = [], e("refresh"));
      }
    ), __TARGET__ === "app" && iu(() => {
      console.clear();
    }), Vy(() => {
      Object.assign(v, l9());
    }), iu(() => {
      window.__BLOCK_INSPECTOR__ = {
        setTestMode(A) {
          y.testing = A;
        },
        setOutline(A) {
          y.outline = A;
        },
        reset: k
      }, window.addEventListener("message", (A) => {
        if (!A.data || typeof A.data != "object")
          return;
        const { data: M } = A;
        switch (M.$$type) {
          case "inspector-height":
            d.value = M.height;
            break;
        }
      }), window.parent !== window && Ts(d, (A) => {
        window.parent.postMessage({ $$type: "inspector-height", height: A });
      });
    }), {
      container: r,
      viewport: a,
      status: y,
      mode: v,
      type: g,
      height: d,
      width: At({
        get() {
          return c.value;
        },
        set(A) {
          c.value = Number.parseInt(A);
        }
      }),
      computedEnable: S,
      message: At(() => t.overlay || y.loading),
      reports: o,
      img: u,
      process,
      openNew() {
        k(), e("open-new");
      },
      clearSelect() {
        I3(null);
      },
      async screenshot() {
        const A = {
          testing: y.testing,
          outline: y.outline
        };
        y.screenshot = !0, y.testing = !0, y.outline = !1, await r9();
        const M = await _3(r.value, { width: 1250 });
        u.value = URL.createObjectURL(M), y.testing = A.testing, y.outline = A.outline;
      },
      close() {
        URL.revokeObjectURL(u.value), y.screenshot = !1, u.value = "";
      },
      autoTest: R
    };
  }
};
var dO = function() {
  var e = this, r = e._self._c;
  return e._self._setupProxy, r("div", { staticClass: "relative" }, [e.status.preview ? r("Viewport", { ref: "viewport", staticClass: "ml-8 transition-all shadow-2xl", style: `max-width: ${e.width}px`, attrs: { width: e.width, height: e.height, type: e.type, interactive: "" } }) : r("SizeObserver", { staticClass: "flex", model: { value: e.height, callback: function(a) {
    e.height = a;
  }, expression: "height" } }, [r("div", { key: e.blockVersion, ref: "container", staticClass: "flex-grow", class: [e.status.screenshot && "screenshot-mode", e.status.testing && "testing-mode"], attrs: { id: "block-container" }, on: { click: function(a) {
    return a.stopPropagation(), e.clearSelect.apply(null, arguments);
  } } }, [r("div", { staticClass: "bg-white", class: e.status.outline && "element-outline" }, [e.mode.preview && e.mode.type === "block" ? r("Hero") : e._e(), e._t("default"), e.mode.preview && (e.mode.type === "block" || e.mode.type === "hero") ? r("Block1") : e._e(), e.mode.preview && e.mode.type === "hero" ? r("Block2") : e._e()], 2)])]), r("div", { staticClass: "w-96 top-0 right-0 z-50 flex flex-col h-screen bg-white shadow-xl", class: e.status.control ? "fixed" : "hidden" }, [r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.preview, expression: "status.preview" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.preview) ? e._i(e.status.preview, null) > -1 : e.status.preview }, on: { change: function(a) {
    var o = e.status.preview, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var d = null, g = e._i(o, d);
      u.checked ? g < 0 && e.$set(e.status, "preview", o.concat([d])) : g > -1 && e.$set(e.status, "preview", o.slice(0, g).concat(o.slice(g + 1)));
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
      var d = null, g = e._i(o, d);
      u.checked ? g < 0 && e.$set(e.status, "report", o.concat([d])) : g > -1 && e.$set(e.status, "report", o.slice(0, g).concat(o.slice(g + 1)));
    } else
      e.$set(e.status, "report", c);
  } } }), e._v(" show report ")]), e.status.preview ? e._e() : r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.outline, expression: "status.outline" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.outline) ? e._i(e.status.outline, null) > -1 : e.status.outline }, on: { change: function(a) {
    var o = e.status.outline, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var d = null, g = e._i(o, d);
      u.checked ? g < 0 && e.$set(e.status, "outline", o.concat([d])) : g > -1 && e.$set(e.status, "outline", o.slice(0, g).concat(o.slice(g + 1)));
    } else
      e.$set(e.status, "outline", c);
  } } }), e._v(" show outline ")]), e.status.preview ? e._e() : r("label", { staticClass: "p-2" }, [r("input", { directives: [{ name: "model", rawName: "v-model", value: e.status.testing, expression: "status.testing" }], staticClass: "p-2", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(e.status.testing) ? e._i(e.status.testing, null) > -1 : e.status.testing }, on: { change: function(a) {
    var o = e.status.testing, u = a.target, c = !!u.checked;
    if (Array.isArray(o)) {
      var d = null, g = e._i(o, d);
      u.checked ? g < 0 && e.$set(e.status, "testing", o.concat([d])) : g > -1 && e.$set(e.status, "testing", o.slice(0, g).concat(o.slice(g + 1)));
    } else
      e.$set(e.status, "testing", c);
  } } }), e._v(" disable transition ")]), e.showOpenNew ? r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.openNew } }, [e._v("Open another block")]) : e._e(), e.status.preview ? e._e() : r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.screenshot } }, [e._v("screenshot")]), e.status.preview ? e._e() : r("button", { staticClass: "p-2 bg-blue-300 border", on: { click: e.autoTest } }, [e._v("auto test")]), e.status.preview ? e._e() : r("ElementInfo", { attrs: { reports: e.reports } })], 1), r("Report", { staticClass: "bottom-0 left-0 z-50 w-full h-64 bg-white border-t-2 border-blue-500", class: e.status.control && e.status.report ? "fixed" : "hidden", attrs: { reports: e.reports } }), e.computedEnable ? r("button", { staticClass: "fixed bottom-0 right-0 z-50 mb-4 mr-4", on: { click: function(a) {
    e.status.control = !e.status.control;
  } } }, [r("Watermark")], 1) : e._e(), e.img ? r("div", { staticClass: "absolute inset-0 flex items-center justify-center bg-white" }, [r("img", { attrs: { src: e.img } }), r("button", { staticClass: "absolute top-0 right-0 p-2 mt-4 mr-4 border", on: { click: e.close } }, [e._v("close")])]) : e._e(), r("Overlay", { attrs: { canCancel: !1, isFullPage: "", height: 128, width: 128, opacity: 100, active: !!e.message }, scopedSlots: e._u([{ key: "after", fn: function() {
    return [r("h3", { staticClass: "text-4xl" }, [e._v(e._s(e.message))])];
  }, proxy: !0 }]) })], 1);
}, hO = [], pO = /* @__PURE__ */ He(
  fO,
  dO,
  hO,
  !1,
  null,
  "f81b2c8e",
  null,
  null
);
const bO = pO.exports;
export {
  bO as Inspector
};

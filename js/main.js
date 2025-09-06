var _o = Object.defineProperty;
var xo = (g, u, E) => u in g ? _o(g, u, { enumerable: !0, configurable: !0, writable: !0, value: E }) : g[u] = E;
var et = (g, u, E) => xo(g, typeof u != "symbol" ? u + "" : u, E);
import { ref as Te, readonly as ot, computed as se, effectScope as Do, getCurrentScope as Oo, onScopeDispose as Bo, watch as Ve, isRef as Ho, toValue as De, toRef as Ct, customRef as No, unref as Y, shallowRef as Qt, getCurrentInstance as tn, onMounted as Tt, defineComponent as ft, h as va, Teleport as Ro, useId as ya, onUnmounted as ar, inject as en, watchEffect as Po, provide as Io, useSlots as ba, createBlock as Ye, openBlock as Re, resolveDynamicComponent as nn, normalizeClass as ut, withCtx as nt, createElementBlock as gt, createCommentVNode as tt, renderSlot as Ze, createTextVNode as Rt, toDisplayString as Pt, useAttrs as jo, mergeProps as it, mergeModels as Sn, useTemplateRef as Nt, useModel as wa, Fragment as Ea, createVNode as Sa, nextTick as Et, onBeforeUnmount as Fo, Transition as Jr, withDirectives as Xr, createElementVNode as Jt, withModifiers as Ca, normalizeProps as ct, guardReactiveProps as bt, vShow as Yr, normalizeStyle as Vo, createApp as Uo } from "vue";
import { app as Wo } from "../../../scripts/app.js";
import * as Ko from "../../../scripts/utils.js";
import { app as qo } from "../../scripts/app.js";
const ka = "BootstrapVueNext__", ir = (g, u = "") => {
  const E = `${u}___`;
  return `${ka}ID__${g}__${u ? E : ""}`;
}, Ta = (g) => ir(g), jt = (g) => ir(`${g}__registry`), zo = Ta("collapse"), La = jt("showHide"), Go = Ta("navbar"), $o = jt("rtl"), Qr = `${ka}global_breadcrumb`, Zo = jt("breadcrumb"), Aa = jt("modalManager"), bn = jt("defaults"), Jo = jt("orchestrator"), Xo = {
  install(g, u) {
    var w, M;
    const A = typeof (u == null ? void 0 : u.rtl) == "boolean" ? !1 : ((w = u == null ? void 0 : u.rtl) == null ? void 0 : w.rtlInitial) ?? !1, N = typeof (u == null ? void 0 : u.rtl) == "boolean" ? void 0 : ((M = u == null ? void 0 : u.rtl) == null ? void 0 : M.localeInitial) ?? void 0, O = Te(A), p = Te(N);
    g.provide($o, { isRtl: O, locale: p });
  }
}, Yo = () => {
  const g = Te(/* @__PURE__ */ new Map());
  return {
    register: ({
      id: E,
      component: k,
      value: A,
      toggle: N,
      show: O,
      hide: p,
      registerTrigger: w,
      unregisterTrigger: M
    }) => (g.value.set(E, {
      id: E,
      component: k,
      value: ot(A),
      toggle: N,
      show: O,
      hide: p,
      registerTrigger: w,
      unregisterTrigger: M
    }), {
      unregister() {
        g.value.delete(E);
      },
      updateId(x, c) {
        const o = g.value.get(c);
        o && (g.value.set(x, { ...o, id: x }), g.value.delete(c));
      }
    }),
    values: g
  };
}, Qo = {
  install(g) {
    const { register: u, values: E } = Yo();
    g.provide(La, { register: u, values: E });
    const k = Te({
      [Qr]: []
    }), A = (d = Qr) => {
      k.value[d] = [];
    };
    g.provide(Zo, { items: k, reset: A });
    const N = Te(/* @__PURE__ */ new Map()), O = se(() => N.value.size), p = se(() => [...N.value.values()]), w = se(() => p.value[p.value.length - 1]), M = (d) => {
      N.value.set(d.uid, d);
    }, x = (d) => {
      N.value.delete(d.uid);
    }, c = Te(/* @__PURE__ */ new Map()), o = (d) => {
      c.value.set(d.uid, d);
    }, v = (d) => {
      c.value.delete(d.uid);
    };
    g.provide(Aa, {
      countStack: O,
      lastStack: w,
      registry: se(() => c.value),
      stack: p,
      pushStack: M,
      removeStack: x,
      pushRegistry: o,
      removeRegistry: v
    });
  }
}, es = () => ({
  store: Te([]),
  _isOrchestratorInstalled: Te(!1),
  _isToastAppend: Te(!1)
}), ts = {
  install(g) {
    const u = es();
    g.provide(Jo, u);
  }
}, ns = (g = {}) => ({
  install(u) {
    (g.registries ?? !0) === !0 && u.use(Qo, g), ((g.rtl ?? !0) === !0 || typeof g.rtl == "object") && u.use(Xo, g), (g.orchestrator ?? !0) === !0 && u.use(ts);
    const E = (g == null ? void 0 : g.components) ?? {};
    u.provide(bn, Te(E));
  }
}), Ma = {
  sendCurrentCheckpoint: "/mdnotes/current_ckpt",
  saveContent: "/mdnotes/save"
};
function Lt(g) {
  return Oo() ? (Bo(g), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function rs(g) {
  let u = 0, E, k;
  const A = () => {
    u -= 1, k && u <= 0 && (k.stop(), E = void 0, k = void 0);
  };
  return (...N) => (u += 1, k || (k = Do(!0), E = k.run(() => g(...N))), Lt(A), E);
}
const _a = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xa = (g) => g != null, as = Object.prototype.toString, is = (g) => as.call(g) === "[object Object]", tr = () => {
}, ea = /* @__PURE__ */ os();
function os() {
  var g, u;
  return _a && ((g = window == null ? void 0 : window.navigator) == null ? void 0 : g.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((u = window == null ? void 0 : window.navigator) == null ? void 0 : u.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function ss(...g) {
  if (g.length !== 1)
    return Ct(...g);
  const u = g[0];
  return typeof u == "function" ? ot(No(() => ({ get: u, set: tr }))) : Te(u);
}
function ls(g, u) {
  function E(...k) {
    return new Promise((A, N) => {
      Promise.resolve(g(() => u.apply(this, k), { fn: u, thisArg: this, args: k })).then(A).catch(N);
    });
  }
  return E;
}
function cs(...g) {
  let u = 0, E, k = !0, A = tr, N, O, p, w, M;
  !Ho(g[0]) && typeof g[0] == "object" ? { delay: O, trailing: p = !0, leading: w = !0, rejectOnCancel: M = !1 } = g[0] : [O, p = !0, w = !0, M = !1] = g;
  const x = () => {
    E && (clearTimeout(E), E = void 0, A(), A = tr);
  };
  return (o) => {
    const v = De(O), d = Date.now() - u, y = () => N = o();
    return x(), v <= 0 ? (u = Date.now(), y()) : (d > v && (w || !k) ? (u = Date.now(), y()) : p && (N = new Promise((f, L) => {
      A = M ? L : f, E = setTimeout(() => {
        u = Date.now(), k = !0, f(y()), x();
      }, Math.max(0, v - d));
    })), !w && !E && (E = setTimeout(() => k = !0, v)), k = !1, N);
  };
}
function Xt(g) {
  return Array.isArray(g) ? g : [g];
}
// @__NO_SIDE_EFFECTS__
function ta(g, u = 200, E = !1, k = !0, A = !1) {
  return ls(
    cs(u, E, k, A),
    g
  );
}
function us(g, u, E) {
  return Ve(
    g,
    u,
    {
      ...E,
      immediate: !0
    }
  );
}
const or = _a ? window : void 0;
function It(g) {
  var u;
  const E = De(g);
  return (u = E == null ? void 0 : E.$el) != null ? u : E;
}
function sr(...g) {
  const u = [], E = () => {
    u.forEach((p) => p()), u.length = 0;
  }, k = (p, w, M, x) => (p.addEventListener(w, M, x), () => p.removeEventListener(w, M, x)), A = se(() => {
    const p = Xt(De(g[0])).filter((w) => w != null);
    return p.every((w) => typeof w != "string") ? p : void 0;
  }), N = us(
    () => {
      var p, w;
      return [
        (w = (p = A.value) == null ? void 0 : p.map((M) => It(M))) != null ? w : [or].filter((M) => M != null),
        Xt(De(A.value ? g[1] : g[0])),
        Xt(Y(A.value ? g[2] : g[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        De(A.value ? g[3] : g[2])
      ];
    },
    ([p, w, M, x]) => {
      if (E(), !(p != null && p.length) || !(w != null && w.length) || !(M != null && M.length))
        return;
      const c = is(x) ? { ...x } : x;
      u.push(
        ...p.flatMap(
          (o) => w.flatMap(
            (v) => M.map((d) => k(o, v, d, c))
          )
        )
      );
    },
    { flush: "post" }
  ), O = () => {
    N(), E();
  };
  return Lt(E), O;
}
// @__NO_SIDE_EFFECTS__
function fs() {
  const g = Qt(!1), u = tn();
  return u && Tt(() => {
    g.value = !0;
  }, u), g;
}
// @__NO_SIDE_EFFECTS__
function ds(g) {
  const u = /* @__PURE__ */ fs();
  return se(() => (u.value, !!g()));
}
function ps(g, u, E = {}) {
  const { window: k = or, ...A } = E;
  let N;
  const O = /* @__PURE__ */ ds(() => k && "MutationObserver" in k), p = () => {
    N && (N.disconnect(), N = void 0);
  }, w = se(() => {
    const o = De(g), v = Xt(o).map(It).filter(xa);
    return new Set(v);
  }), M = Ve(
    () => w.value,
    (o) => {
      p(), O.value && o.size && (N = new MutationObserver(u), o.forEach((v) => N.observe(v, A)));
    },
    { immediate: !0, flush: "post" }
  ), x = () => N == null ? void 0 : N.takeRecords(), c = () => {
    M(), p();
  };
  return Lt(c), {
    isSupported: O,
    stop: c,
    takeRecords: x
  };
}
function hs(g) {
  return typeof g == "function" ? g : typeof g == "string" ? (u) => u.key === g : Array.isArray(g) ? (u) => g.includes(u.key) : () => !0;
}
function Da(...g) {
  let u, E, k = {};
  g.length === 3 ? (u = g[0], E = g[1], k = g[2]) : g.length === 2 ? typeof g[1] == "object" ? (u = !0, E = g[0], k = g[1]) : (u = g[0], E = g[1]) : (u = !0, E = g[0]);
  const {
    target: A = or,
    eventName: N = "keydown",
    passive: O = !1,
    dedupe: p = !1
  } = k, w = hs(u);
  return sr(A, N, (x) => {
    x.repeat && De(p) || w(x) && E(x);
  }, O);
}
const mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gn = "__vueuse_ssr_handlers__", ms = /* @__PURE__ */ gs();
function gs() {
  return gn in mn || (mn[gn] = mn[gn] || {}), mn[gn];
}
function vs(g, u) {
  return ms[g] || u;
}
function Zn(g) {
  return typeof Window < "u" && g instanceof Window ? g.document.documentElement : typeof Document < "u" && g instanceof Document ? g.documentElement : g;
}
function Oa(g) {
  const u = window.getComputedStyle(g);
  if (u.overflowX === "scroll" || u.overflowY === "scroll" || u.overflowX === "auto" && g.clientWidth < g.scrollWidth || u.overflowY === "auto" && g.clientHeight < g.scrollHeight)
    return !0;
  {
    const E = g.parentNode;
    return !E || E.tagName === "BODY" ? !1 : Oa(E);
  }
}
function ys(g) {
  const u = g || window.event, E = u.target;
  return Oa(E) ? !1 : u.touches.length > 1 ? !0 : (u.preventDefault && u.preventDefault(), !1);
}
const Jn = /* @__PURE__ */ new WeakMap();
function bs(g, u = !1) {
  const E = Qt(u);
  let k = null, A = "";
  Ve(ss(g), (p) => {
    const w = Zn(De(p));
    if (w) {
      const M = w;
      if (Jn.get(M) || Jn.set(M, M.style.overflow), M.style.overflow !== "hidden" && (A = M.style.overflow), M.style.overflow === "hidden")
        return E.value = !0;
      if (E.value)
        return M.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const N = () => {
    const p = Zn(De(g));
    !p || E.value || (ea && (k = sr(
      p,
      "touchmove",
      (w) => {
        ys(w);
      },
      { passive: !1 }
    )), p.style.overflow = "hidden", E.value = !0);
  }, O = () => {
    const p = Zn(De(g));
    !p || !E.value || (ea && (k == null || k()), p.style.overflow = A, Jn.delete(p), E.value = !1);
  };
  return Lt(O), se({
    get() {
      return E.value;
    },
    set(p) {
      p ? N() : O();
    }
  });
}
const Ba = {
  BAccordion: "/components/BAccordion",
  BAccordionItem: "/components/BAccordion",
  BAlert: "/components/BAlert",
  BApp: "/components/BApp",
  BAvatar: "/components/BAvatar",
  BAvatarGroup: "/components/BAvatar",
  BBadge: "/components/BBadge",
  BBreadcrumb: "/components/BBreadcrumb",
  BBreadcrumbItem: "/components/BBreadcrumb",
  BButton: "/components/BButton",
  BButtonGroup: "/components/BButton",
  BButtonToolbar: "/components/BButton",
  BCloseButton: "/components/BButton",
  BCard: "/components/BCard",
  BCardBody: "/components/BCard",
  BCardFooter: "/components/BCard",
  BCardGroup: "/components/BCard",
  BCardHeader: "/components/BCard",
  BCardImg: "/components/BCard",
  BCardSubtitle: "/components/BCard",
  BCardText: "/components/BCard",
  BCardTitle: "/components/BCard",
  BCarousel: "/components/BCarousel",
  BCarouselSlide: "/components/BCarousel",
  BCol: "/components/BContainer",
  BCollapse: "/components/BCollapse",
  BContainer: "/components/BContainer",
  BDropdown: "/components/BDropdown",
  BDropdownDivider: "/components/BDropdown",
  BDropdownForm: "/components/BDropdown",
  BDropdownGroup: "/components/BDropdown",
  BDropdownHeader: "/components/BDropdown",
  BDropdownItem: "/components/BDropdown",
  BDropdownItemButton: "/components/BDropdown",
  BDropdownText: "/components/BDropdown",
  BForm: "/components/BForm",
  BFormCheckbox: "/components/BFormCheckbox",
  BFormCheckboxGroup: "/components/BFormCheckbox",
  BFormDatalist: "/components/BForm",
  BFormFile: "/components/BFormFile",
  BFormFloatingLabel: "/components/BForm",
  BFormGroup: "/components/BFormGroup",
  BFormInput: "/components/BFormInput",
  BFormInvalidFeedback: "/components/BForm",
  BFormRadio: "/components/BFormRadio",
  BFormRadioGroup: "/components/BFormRadio",
  BFormRating: "/components/BFormRating",
  BFormRow: "/components/BForm",
  BFormSelect: "/components/BFormSelect",
  BFormSelectOption: "/components/BFormSelect",
  BFormSelectOptionGroup: "/components/BFormSelect",
  BFormSpinbutton: "/components/BFormSpinbutton",
  BFormTag: "/components/BFormTags",
  BFormTags: "/components/BFormTags",
  BFormText: "/components/BForm",
  BFormTextarea: "/components/BFormTextarea",
  BFormValidFeedback: "/components/BForm",
  BImg: "/components/BImg",
  BInput: "/components/BFormInput",
  BInputGroup: "/components/BInputGroup",
  BInputGroupText: "/components/BInputGroup",
  BListGroup: "/components/BListGroup",
  BListGroupItem: "/components/BListGroup",
  BModal: "/components/BModal",
  BModalOrchestrator: "/components/BModal",
  BNav: "/components/BNav",
  BNavForm: "/components/BNav",
  BNavItem: "/components/BNav",
  BNavItemDropdown: "/components/BNav",
  BNavText: "/components/BNav",
  BNavbar: "/components/BNavbar",
  BNavbarBrand: "/components/BNavbar",
  BNavbarNav: "/components/BNavbar",
  BNavbarToggle: "/components/BNavbar",
  BOffcanvas: "/components/BOffcanvas",
  BOverlay: "/components/BOverlay",
  BOrchestrator: "/components/BApp",
  BPagination: "/components/BPagination",
  BPlaceholder: "/components/BPlaceholder",
  BPlaceholderButton: "/components/BPlaceholder",
  BPlaceholderCard: "/components/BPlaceholder",
  BPlaceholderTable: "/components/BPlaceholder",
  BPlaceholderWrapper: "/components/BPlaceholder",
  BPopover: "/components/BPopover",
  BProgress: "/components/BProgress",
  BRow: "/components/BContainer",
  BSpinner: "/components/BSpinner",
  BTab: "/components/BTabs",
  BTabs: "/components/BTabs",
  BToast: "/components/BToast",
  BToastOrchestrator: "/components/BToast",
  BTooltip: "/components/BTooltip",
  BLink: "/components/BLink",
  BProgressBar: "/components/BProgress",
  BTableSimple: "/components/BTable",
  BTableLite: "/components/BTable",
  BTable: "/components/BTable",
  BTbody: "/components/BTable",
  BTd: "/components/BTable",
  BTh: "/components/BTable",
  BThead: "/components/BTable",
  BTfoot: "/components/BTable",
  BTr: "/components/BTable",
  BPopoverOrchestrator: "/components/BPopover"
}, ws = Object.freeze(
  Object.keys(Ba)
), Ha = {
  vBColorMode: "/directives/BColorMode",
  vBModal: "/directives/BModal",
  vBPopover: "/directives/BPopover",
  vBScrollspy: "/directives/BScrollspy",
  vBToggle: "/directives/BToggle",
  vBTooltip: "/directives/BTooltip"
}, Es = Object.freeze(
  Object.keys(Ha)
), Ss = {
  useBreadcrumb: "/composables/useBreadcrumb",
  useColorMode: "/composables/useColorMode",
  useModal: "/composables/useModal",
  useModalController: "/composables/useModal",
  useScrollspy: "/composables/useScrollspy",
  useToast: "/composables/useToast",
  useToastController: "/composables/useToast",
  useToggle: "/composables/useToggle",
  usePopover: "/composables/usePopover",
  usePopoverController: "/composables/usePopover",
  useRegistry: "/composables/useRegistry",
  useProvideDefaults: "/composables/useProvideDefaults",
  useOrchestratorRegistry: "/composables/orchestratorShared"
};
Object.freeze(
  Object.keys(Ss)
);
const Cs = ft({
  name: "ConditionalTeleport",
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      required: !0
    }
  },
  slots: Object,
  setup(g, { slots: u }) {
    return () => {
      var E, k;
      return g.to ? va(Ro, { to: g.to, disabled: g.disabled || !g.to }, [(k = u.default) == null ? void 0 : k.call(u, {})]) : (E = u.default) == null ? void 0 : E.call(u, {});
    };
  }
});
ft({
  name: "ConditionalWrapper",
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    skip: {
      type: Boolean,
      required: !0
    }
  },
  slots: Object,
  setup(g, { slots: u, attrs: E }) {
    return () => {
      var k, A;
      return g.skip ? (k = u.default) == null ? void 0 : k.call(u, {}) : va(g.tag, { ...E }, [(A = u.default) == null ? void 0 : A.call(u, {})]);
    };
  }
});
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Na = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Cn = /* @__PURE__ */ Na.join(","), Ra = typeof Element > "u", kt = Ra ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, kn = !Ra && Element.prototype.getRootNode ? function(g) {
  var u;
  return g == null || (u = g.getRootNode) === null || u === void 0 ? void 0 : u.call(g);
} : function(g) {
  return g == null ? void 0 : g.ownerDocument;
}, Tn = function g(u, E) {
  var k;
  E === void 0 && (E = !0);
  var A = u == null || (k = u.getAttribute) === null || k === void 0 ? void 0 : k.call(u, "inert"), N = A === "" || A === "true", O = N || E && u && g(u.parentNode);
  return O;
}, ks = function(u) {
  var E, k = u == null || (E = u.getAttribute) === null || E === void 0 ? void 0 : E.call(u, "contenteditable");
  return k === "" || k === "true";
}, Pa = function(u, E, k) {
  if (Tn(u))
    return [];
  var A = Array.prototype.slice.apply(u.querySelectorAll(Cn));
  return E && kt.call(u, Cn) && A.unshift(u), A = A.filter(k), A;
}, Ia = function g(u, E, k) {
  for (var A = [], N = Array.from(u); N.length; ) {
    var O = N.shift();
    if (!Tn(O, !1))
      if (O.tagName === "SLOT") {
        var p = O.assignedElements(), w = p.length ? p : O.children, M = g(w, !0, k);
        k.flatten ? A.push.apply(A, M) : A.push({
          scopeParent: O,
          candidates: M
        });
      } else {
        var x = kt.call(O, Cn);
        x && k.filter(O) && (E || !u.includes(O)) && A.push(O);
        var c = O.shadowRoot || // check for an undisclosed shadow
        typeof k.getShadowRoot == "function" && k.getShadowRoot(O), o = !Tn(c, !1) && (!k.shadowRootFilter || k.shadowRootFilter(O));
        if (c && o) {
          var v = g(c === !0 ? O.children : c.children, !0, k);
          k.flatten ? A.push.apply(A, v) : A.push({
            scopeParent: O,
            candidates: v
          });
        } else
          N.unshift.apply(N, O.children);
      }
  }
  return A;
}, ja = function(u) {
  return !isNaN(parseInt(u.getAttribute("tabindex"), 10));
}, St = function(u) {
  if (!u)
    throw new Error("No node provided");
  return u.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(u.tagName) || ks(u)) && !ja(u) ? 0 : u.tabIndex;
}, Ts = function(u, E) {
  var k = St(u);
  return k < 0 && E && !ja(u) ? 0 : k;
}, Ls = function(u, E) {
  return u.tabIndex === E.tabIndex ? u.documentOrder - E.documentOrder : u.tabIndex - E.tabIndex;
}, Fa = function(u) {
  return u.tagName === "INPUT";
}, As = function(u) {
  return Fa(u) && u.type === "hidden";
}, Ms = function(u) {
  var E = u.tagName === "DETAILS" && Array.prototype.slice.apply(u.children).some(function(k) {
    return k.tagName === "SUMMARY";
  });
  return E;
}, _s = function(u, E) {
  for (var k = 0; k < u.length; k++)
    if (u[k].checked && u[k].form === E)
      return u[k];
}, xs = function(u) {
  if (!u.name)
    return !0;
  var E = u.form || kn(u), k = function(p) {
    return E.querySelectorAll('input[type="radio"][name="' + p + '"]');
  }, A;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    A = k(window.CSS.escape(u.name));
  else
    try {
      A = k(u.name);
    } catch (O) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", O.message), !1;
    }
  var N = _s(A, u.form);
  return !N || N === u;
}, Ds = function(u) {
  return Fa(u) && u.type === "radio";
}, Os = function(u) {
  return Ds(u) && !xs(u);
}, Bs = function(u) {
  var E, k = u && kn(u), A = (E = k) === null || E === void 0 ? void 0 : E.host, N = !1;
  if (k && k !== u) {
    var O, p, w;
    for (N = !!((O = A) !== null && O !== void 0 && (p = O.ownerDocument) !== null && p !== void 0 && p.contains(A) || u != null && (w = u.ownerDocument) !== null && w !== void 0 && w.contains(u)); !N && A; ) {
      var M, x, c;
      k = kn(A), A = (M = k) === null || M === void 0 ? void 0 : M.host, N = !!((x = A) !== null && x !== void 0 && (c = x.ownerDocument) !== null && c !== void 0 && c.contains(A));
    }
  }
  return N;
}, na = function(u) {
  var E = u.getBoundingClientRect(), k = E.width, A = E.height;
  return k === 0 && A === 0;
}, Hs = function(u, E) {
  var k = E.displayCheck, A = E.getShadowRoot;
  if (getComputedStyle(u).visibility === "hidden")
    return !0;
  var N = kt.call(u, "details>summary:first-of-type"), O = N ? u.parentElement : u;
  if (kt.call(O, "details:not([open]) *"))
    return !0;
  if (!k || k === "full" || k === "legacy-full") {
    if (typeof A == "function") {
      for (var p = u; u; ) {
        var w = u.parentElement, M = kn(u);
        if (w && !w.shadowRoot && A(w) === !0)
          return na(u);
        u.assignedSlot ? u = u.assignedSlot : !w && M !== u.ownerDocument ? u = M.host : u = w;
      }
      u = p;
    }
    if (Bs(u))
      return !u.getClientRects().length;
    if (k !== "legacy-full")
      return !0;
  } else if (k === "non-zero-area")
    return na(u);
  return !1;
}, Ns = function(u) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(u.tagName))
    for (var E = u.parentElement; E; ) {
      if (E.tagName === "FIELDSET" && E.disabled) {
        for (var k = 0; k < E.children.length; k++) {
          var A = E.children.item(k);
          if (A.tagName === "LEGEND")
            return kt.call(E, "fieldset[disabled] *") ? !0 : !A.contains(u);
        }
        return !0;
      }
      E = E.parentElement;
    }
  return !1;
}, Ln = function(u, E) {
  return !(E.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Tn(E) || As(E) || Hs(E, u) || // For a details element with a summary, the summary element gets the focus
  Ms(E) || Ns(E));
}, nr = function(u, E) {
  return !(Os(E) || St(E) < 0 || !Ln(u, E));
}, Rs = function(u) {
  var E = parseInt(u.getAttribute("tabindex"), 10);
  return !!(isNaN(E) || E >= 0);
}, Ps = function g(u) {
  var E = [], k = [];
  return u.forEach(function(A, N) {
    var O = !!A.scopeParent, p = O ? A.scopeParent : A, w = Ts(p, O), M = O ? g(A.candidates) : p;
    w === 0 ? O ? E.push.apply(E, M) : E.push(p) : k.push({
      documentOrder: N,
      tabIndex: w,
      item: A,
      isScope: O,
      content: M
    });
  }), k.sort(Ls).reduce(function(A, N) {
    return N.isScope ? A.push.apply(A, N.content) : A.push(N.content), A;
  }, []).concat(E);
}, Is = function(u, E) {
  E = E || {};
  var k;
  return E.getShadowRoot ? k = Ia([u], E.includeContainer, {
    filter: nr.bind(null, E),
    flatten: !1,
    getShadowRoot: E.getShadowRoot,
    shadowRootFilter: Rs
  }) : k = Pa(u, E.includeContainer, nr.bind(null, E)), Ps(k);
}, js = function(u, E) {
  E = E || {};
  var k;
  return E.getShadowRoot ? k = Ia([u], E.includeContainer, {
    filter: Ln.bind(null, E),
    flatten: !0,
    getShadowRoot: E.getShadowRoot
  }) : k = Pa(u, E.includeContainer, Ln.bind(null, E)), k;
}, Ht = function(u, E) {
  if (E = E || {}, !u)
    throw new Error("No node provided");
  return kt.call(u, Cn) === !1 ? !1 : nr(E, u);
}, Fs = /* @__PURE__ */ Na.concat("iframe").join(","), Xn = function(u, E) {
  if (E = E || {}, !u)
    throw new Error("No node provided");
  return kt.call(u, Fs) === !1 ? !1 : Ln(E, u);
};
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function rr(g, u) {
  (u == null || u > g.length) && (u = g.length);
  for (var E = 0, k = Array(u); E < u; E++) k[E] = g[E];
  return k;
}
function Vs(g) {
  if (Array.isArray(g)) return rr(g);
}
function Us(g, u, E) {
  return (u = Gs(u)) in g ? Object.defineProperty(g, u, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : g[u] = E, g;
}
function Ws(g) {
  if (typeof Symbol < "u" && g[Symbol.iterator] != null || g["@@iterator"] != null) return Array.from(g);
}
function Ks() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ra(g, u) {
  var E = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var k = Object.getOwnPropertySymbols(g);
    u && (k = k.filter(function(A) {
      return Object.getOwnPropertyDescriptor(g, A).enumerable;
    })), E.push.apply(E, k);
  }
  return E;
}
function aa(g) {
  for (var u = 1; u < arguments.length; u++) {
    var E = arguments[u] != null ? arguments[u] : {};
    u % 2 ? ra(Object(E), !0).forEach(function(k) {
      Us(g, k, E[k]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E)) : ra(Object(E)).forEach(function(k) {
      Object.defineProperty(g, k, Object.getOwnPropertyDescriptor(E, k));
    });
  }
  return g;
}
function qs(g) {
  return Vs(g) || Ws(g) || $s(g) || Ks();
}
function zs(g, u) {
  if (typeof g != "object" || !g) return g;
  var E = g[Symbol.toPrimitive];
  if (E !== void 0) {
    var k = E.call(g, u);
    if (typeof k != "object") return k;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(g);
}
function Gs(g) {
  var u = zs(g, "string");
  return typeof u == "symbol" ? u : u + "";
}
function $s(g, u) {
  if (g) {
    if (typeof g == "string") return rr(g, u);
    var E = {}.toString.call(g).slice(8, -1);
    return E === "Object" && g.constructor && (E = g.constructor.name), E === "Map" || E === "Set" ? Array.from(g) : E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E) ? rr(g, u) : void 0;
  }
}
var ia = {
  activateTrap: function(u, E) {
    if (u.length > 0) {
      var k = u[u.length - 1];
      k !== E && k._setPausedState(!0);
    }
    var A = u.indexOf(E);
    A === -1 || u.splice(A, 1), u.push(E);
  },
  deactivateTrap: function(u, E) {
    var k = u.indexOf(E);
    k !== -1 && u.splice(k, 1), u.length > 0 && !u[u.length - 1]._isManuallyPaused() && u[u.length - 1]._setPausedState(!1);
  }
}, Zs = function(u) {
  return u.tagName && u.tagName.toLowerCase() === "input" && typeof u.select == "function";
}, Js = function(u) {
  return (u == null ? void 0 : u.key) === "Escape" || (u == null ? void 0 : u.key) === "Esc" || (u == null ? void 0 : u.keyCode) === 27;
}, Yt = function(u) {
  return (u == null ? void 0 : u.key) === "Tab" || (u == null ? void 0 : u.keyCode) === 9;
}, Xs = function(u) {
  return Yt(u) && !u.shiftKey;
}, Ys = function(u) {
  return Yt(u) && u.shiftKey;
}, oa = function(u) {
  return setTimeout(u, 0);
}, Zt = function(u) {
  for (var E = arguments.length, k = new Array(E > 1 ? E - 1 : 0), A = 1; A < E; A++)
    k[A - 1] = arguments[A];
  return typeof u == "function" ? u.apply(void 0, k) : u;
}, vn = function(u) {
  return u.target.shadowRoot && typeof u.composedPath == "function" ? u.composedPath()[0] : u.target;
}, Qs = [], el = function(u, E) {
  var k = (E == null ? void 0 : E.document) || document, A = (E == null ? void 0 : E.trapStack) || Qs, N = aa({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Xs,
    isKeyBackward: Ys
  }, E), O = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, p, w = function(I, F, J) {
    return I && I[F] !== void 0 ? I[F] : N[J || F];
  }, M = function(I, F) {
    var J = typeof (F == null ? void 0 : F.composedPath) == "function" ? F.composedPath() : void 0;
    return O.containerGroups.findIndex(function(ae) {
      var ce = ae.container, de = ae.tabbableNodes;
      return ce.contains(I) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (J == null ? void 0 : J.includes(ce)) || de.find(function(pe) {
        return pe === I;
      });
    });
  }, x = function(I) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, J = F.hasFallback, ae = J === void 0 ? !1 : J, ce = F.params, de = ce === void 0 ? [] : ce, pe = N[I];
    if (typeof pe == "function" && (pe = pe.apply(void 0, qs(de))), pe === !0 && (pe = void 0), !pe) {
      if (pe === void 0 || pe === !1)
        return pe;
      throw new Error("`".concat(I, "` was specified but was not a node, or did not return a node"));
    }
    var ye = pe;
    if (typeof pe == "string") {
      try {
        ye = k.querySelector(pe);
      } catch (ge) {
        throw new Error("`".concat(I, '` appears to be an invalid selector; error="').concat(ge.message, '"'));
      }
      if (!ye && !ae)
        throw new Error("`".concat(I, "` as selector refers to no known node"));
    }
    return ye;
  }, c = function() {
    var I = x("initialFocus", {
      hasFallback: !0
    });
    if (I === !1)
      return !1;
    if (I === void 0 || I && !Xn(I, N.tabbableOptions))
      if (M(k.activeElement) >= 0)
        I = k.activeElement;
      else {
        var F = O.tabbableGroups[0], J = F && F.firstTabbableNode;
        I = J || x("fallbackFocus");
      }
    else I === null && (I = x("fallbackFocus"));
    if (!I)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return I;
  }, o = function() {
    if (O.containerGroups = O.containers.map(function(I) {
      var F = Is(I, N.tabbableOptions), J = js(I, N.tabbableOptions), ae = F.length > 0 ? F[0] : void 0, ce = F.length > 0 ? F[F.length - 1] : void 0, de = J.find(function(ge) {
        return Ht(ge);
      }), pe = J.slice().reverse().find(function(ge) {
        return Ht(ge);
      }), ye = !!F.find(function(ge) {
        return St(ge) > 0;
      });
      return {
        container: I,
        tabbableNodes: F,
        focusableNodes: J,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ye,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ce,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: de,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: pe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(B) {
          var Be = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ie = F.indexOf(B);
          return Ie < 0 ? Be ? J.slice(J.indexOf(B) + 1).find(function(We) {
            return Ht(We);
          }) : J.slice(0, J.indexOf(B)).reverse().find(function(We) {
            return Ht(We);
          }) : F[Ie + (Be ? 1 : -1)];
        }
      };
    }), O.tabbableGroups = O.containerGroups.filter(function(I) {
      return I.tabbableNodes.length > 0;
    }), O.tabbableGroups.length <= 0 && !x("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (O.containerGroups.find(function(I) {
      return I.posTabIndexesFound;
    }) && O.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, v = function(I) {
    var F = I.activeElement;
    if (F)
      return F.shadowRoot && F.shadowRoot.activeElement !== null ? v(F.shadowRoot) : F;
  }, d = function(I) {
    if (I !== !1 && I !== v(document)) {
      if (!I || !I.focus) {
        d(c());
        return;
      }
      I.focus({
        preventScroll: !!N.preventScroll
      }), O.mostRecentlyFocusedNode = I, Zs(I) && I.select();
    }
  }, y = function(I) {
    var F = x("setReturnFocus", {
      params: [I]
    });
    return F || (F === !1 ? !1 : I);
  }, f = function(I) {
    var F = I.target, J = I.event, ae = I.isBackward, ce = ae === void 0 ? !1 : ae;
    F = F || vn(J), o();
    var de = null;
    if (O.tabbableGroups.length > 0) {
      var pe = M(F, J), ye = pe >= 0 ? O.containerGroups[pe] : void 0;
      if (pe < 0)
        ce ? de = O.tabbableGroups[O.tabbableGroups.length - 1].lastTabbableNode : de = O.tabbableGroups[0].firstTabbableNode;
      else if (ce) {
        var ge = O.tabbableGroups.findIndex(function(q) {
          var we = q.firstTabbableNode;
          return F === we;
        });
        if (ge < 0 && (ye.container === F || Xn(F, N.tabbableOptions) && !Ht(F, N.tabbableOptions) && !ye.nextTabbableNode(F, !1)) && (ge = pe), ge >= 0) {
          var B = ge === 0 ? O.tabbableGroups.length - 1 : ge - 1, Be = O.tabbableGroups[B];
          de = St(F) >= 0 ? Be.lastTabbableNode : Be.lastDomTabbableNode;
        } else Yt(J) || (de = ye.nextTabbableNode(F, !1));
      } else {
        var Ie = O.tabbableGroups.findIndex(function(q) {
          var we = q.lastTabbableNode;
          return F === we;
        });
        if (Ie < 0 && (ye.container === F || Xn(F, N.tabbableOptions) && !Ht(F, N.tabbableOptions) && !ye.nextTabbableNode(F)) && (Ie = pe), Ie >= 0) {
          var We = Ie === O.tabbableGroups.length - 1 ? 0 : Ie + 1, Ue = O.tabbableGroups[We];
          de = St(F) >= 0 ? Ue.firstTabbableNode : Ue.firstDomTabbableNode;
        } else Yt(J) || (de = ye.nextTabbableNode(F));
      }
    } else
      de = x("fallbackFocus");
    return de;
  }, L = function(I) {
    var F = vn(I);
    if (!(M(F, I) >= 0)) {
      if (Zt(N.clickOutsideDeactivates, I)) {
        p.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: N.returnFocusOnDeactivate
        });
        return;
      }
      Zt(N.allowOutsideClick, I) || I.preventDefault();
    }
  }, T = function(I) {
    var F = vn(I), J = M(F, I) >= 0;
    if (J || F instanceof Document)
      J && (O.mostRecentlyFocusedNode = F);
    else {
      I.stopImmediatePropagation();
      var ae, ce = !0;
      if (O.mostRecentlyFocusedNode)
        if (St(O.mostRecentlyFocusedNode) > 0) {
          var de = M(O.mostRecentlyFocusedNode), pe = O.containerGroups[de].tabbableNodes;
          if (pe.length > 0) {
            var ye = pe.findIndex(function(ge) {
              return ge === O.mostRecentlyFocusedNode;
            });
            ye >= 0 && (N.isKeyForward(O.recentNavEvent) ? ye + 1 < pe.length && (ae = pe[ye + 1], ce = !1) : ye - 1 >= 0 && (ae = pe[ye - 1], ce = !1));
          }
        } else
          O.containerGroups.some(function(ge) {
            return ge.tabbableNodes.some(function(B) {
              return St(B) > 0;
            });
          }) || (ce = !1);
      else
        ce = !1;
      ce && (ae = f({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: O.mostRecentlyFocusedNode,
        isBackward: N.isKeyBackward(O.recentNavEvent)
      })), d(ae || O.mostRecentlyFocusedNode || c());
    }
    O.recentNavEvent = void 0;
  }, C = function(I) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    O.recentNavEvent = I;
    var J = f({
      event: I,
      isBackward: F
    });
    J && (Yt(I) && I.preventDefault(), d(J));
  }, S = function(I) {
    (N.isKeyForward(I) || N.isKeyBackward(I)) && C(I, N.isKeyBackward(I));
  }, s = function(I) {
    Js(I) && Zt(N.escapeDeactivates, I) !== !1 && (I.preventDefault(), p.deactivate());
  }, _ = function(I) {
    var F = vn(I);
    M(F, I) >= 0 || Zt(N.clickOutsideDeactivates, I) || Zt(N.allowOutsideClick, I) || (I.preventDefault(), I.stopImmediatePropagation());
  }, P = function() {
    if (O.active)
      return ia.activateTrap(A, p), O.delayInitialFocusTimer = N.delayInitialFocus ? oa(function() {
        d(c());
      }) : d(c()), k.addEventListener("focusin", T, !0), k.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), k.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), k.addEventListener("click", _, {
        capture: !0,
        passive: !1
      }), k.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), k.addEventListener("keydown", s), p;
  }, j = function() {
    if (O.active)
      return k.removeEventListener("focusin", T, !0), k.removeEventListener("mousedown", L, !0), k.removeEventListener("touchstart", L, !0), k.removeEventListener("click", _, !0), k.removeEventListener("keydown", S, !0), k.removeEventListener("keydown", s), p;
  }, H = function(I) {
    var F = I.some(function(J) {
      var ae = Array.from(J.removedNodes);
      return ae.some(function(ce) {
        return ce === O.mostRecentlyFocusedNode;
      });
    });
    F && d(c());
  }, W = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(H) : void 0, Q = function() {
    W && (W.disconnect(), O.active && !O.paused && O.containers.map(function(I) {
      W.observe(I, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return p = {
    get active() {
      return O.active;
    },
    get paused() {
      return O.paused;
    },
    activate: function(I) {
      if (O.active)
        return this;
      var F = w(I, "onActivate"), J = w(I, "onPostActivate"), ae = w(I, "checkCanFocusTrap");
      ae || o(), O.active = !0, O.paused = !1, O.nodeFocusedBeforeActivation = v(k), F == null || F();
      var ce = function() {
        ae && o(), P(), Q(), J == null || J();
      };
      return ae ? (ae(O.containers.concat()).then(ce, ce), this) : (ce(), this);
    },
    deactivate: function(I) {
      if (!O.active)
        return this;
      var F = aa({
        onDeactivate: N.onDeactivate,
        onPostDeactivate: N.onPostDeactivate,
        checkCanReturnFocus: N.checkCanReturnFocus
      }, I);
      clearTimeout(O.delayInitialFocusTimer), O.delayInitialFocusTimer = void 0, j(), O.active = !1, O.paused = !1, Q(), ia.deactivateTrap(A, p);
      var J = w(F, "onDeactivate"), ae = w(F, "onPostDeactivate"), ce = w(F, "checkCanReturnFocus"), de = w(F, "returnFocus", "returnFocusOnDeactivate");
      J == null || J();
      var pe = function() {
        oa(function() {
          de && d(y(O.nodeFocusedBeforeActivation)), ae == null || ae();
        });
      };
      return de && ce ? (ce(y(O.nodeFocusedBeforeActivation)).then(pe, pe), this) : (pe(), this);
    },
    pause: function(I) {
      return O.active ? (O.manuallyPaused = !0, this._setPausedState(!0, I)) : this;
    },
    unpause: function(I) {
      return O.active ? (O.manuallyPaused = !1, A[A.length - 1] !== this ? this : this._setPausedState(!1, I)) : this;
    },
    updateContainerElements: function(I) {
      var F = [].concat(I).filter(Boolean);
      return O.containers = F.map(function(J) {
        return typeof J == "string" ? k.querySelector(J) : J;
      }), O.active && o(), Q(), this;
    }
  }, Object.defineProperties(p, {
    _isManuallyPaused: {
      value: function() {
        return O.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(I, F) {
        if (O.paused === I)
          return this;
        if (O.paused = I, I) {
          var J = w(F, "onPause"), ae = w(F, "onPostPause");
          J == null || J(), j(), Q(), ae == null || ae();
        } else {
          var ce = w(F, "onUnpause"), de = w(F, "onPostUnpause");
          ce == null || ce(), o(), P(), Q(), de == null || de();
        }
        return this;
      }
    }
  }), p.updateContainerElements(u), p;
};
function tl(g, u = {}) {
  let E;
  const { immediate: k, ...A } = u, N = Qt(!1), O = Qt(!1), p = (o) => E && E.activate(o), w = (o) => E && E.deactivate(o), M = () => {
    E && (E.pause(), O.value = !0);
  }, x = () => {
    E && (E.unpause(), O.value = !1);
  }, c = se(() => {
    const o = De(g);
    return Xt(o).map((v) => {
      const d = De(v);
      return typeof d == "string" ? d : It(d);
    }).filter(xa);
  });
  return Ve(
    c,
    (o) => {
      if (o.length)
        if (!E)
          E = el(o, {
            ...A,
            onActivate() {
              N.value = !0, u.onActivate && u.onActivate();
            },
            onDeactivate() {
              N.value = !1, u.onDeactivate && u.onDeactivate();
            }
          }), k && p();
        else {
          const v = E == null ? void 0 : E.active;
          E == null || E.updateContainerElements(o), !v && k && p();
        }
    },
    { flush: "post" }
  ), Lt(() => w()), {
    hasFocus: N,
    isPaused: O,
    activate: p,
    deactivate: w,
    pause: M,
    unpause: x
  };
}
const nl = ({
  element: g,
  isActive: u,
  noTrap: E,
  fallbackFocus: k,
  focus: A
}, N = {
  allowOutsideClick: !0,
  fallbackFocus: k.ref.value ?? void 0,
  escapeDeactivates: !1,
  clickOutsideDeactivates: !1,
  initialFocus: A
}) => {
  const O = ot(Ct(u)), p = ot(Ct(E)), w = () => {
    var o;
    const c = (o = g.value) == null ? void 0 : o.querySelectorAll(
      `a, button, input, select, textarea, [tabindex]:not([tabindex="-1"]):not(.${k.classSelector})`
    );
    return !(c != null && c.length);
  }, M = Te(!1);
  Tt(() => {
    M.value = w(), ps(
      g,
      () => {
        M.value = w();
      },
      { childList: !0, subtree: !0 }
    );
  });
  const x = tl(g, N);
  return Ve(O, async (c) => {
    c && p.value === !1 ? x.activate() : x.deactivate();
  }), Ve(p, (c) => {
    c === !0 && x.deactivate();
  }), {
    needsFallback: ot(M)
  };
}, rl = /* @__PURE__ */ rs(bs);
let yn = "";
const wt = /* @__PURE__ */ new Map(), al = (g, u) => {
  const E = ot(Ct(g)), k = ya(), A = se(() => !De(u)), N = rl(
    typeof document < "u" ? document.body : null,
    E.value && A.value
  );
  Tt(() => {
    typeof document > "u" || (wt.set(k, !1), Ve(
      [E, A],
      ([O, p]) => {
        const w = window.innerWidth - document.documentElement.clientWidth, M = Array.from(wt.values()).some((o) => o === !0), x = O && p;
        wt.set(k, x), x && !M && !N.value && (N.value = !0, w > 0 && (yn = document.body.style.paddingRight, document.body.style.paddingRight = `${w + yn}px`));
        const c = Array.from(wt.values()).some((o) => o === !0);
        M && !c && (wt.set(k, !1), N.value = !1, document.body.style.paddingRight = yn);
      },
      { immediate: !0 }
    ));
  }), ar(() => {
    wt.delete(k), Array.from(wt.values()).some((p) => p === !0) || (document.body.style.paddingRight = yn, N.value = !1);
  });
}, Va = (g) => ((g == null ? void 0 : g()) ?? []).length === 0, sa = (g) => {
  if (typeof window > "u") return 1055;
  const u = g ?? document.body, E = window.getComputedStyle(u).getPropertyValue("--bs-modal-zindex").trim(), k = Number.parseInt(E, 10);
  return Number.isFinite(k) ? k : 1055;
};
function il(g, u = Ua("injectSelf")) {
  const { provides: E } = u;
  if (E && g in E)
    return E[g];
}
function Ua(g, u) {
  const E = tn();
  if (!E)
    throw new Error(`[Bvn] ${g} must be called from inside a setup function`);
  return E;
}
const ol = (g = "") => g.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase(), la = (g) => g !== null && typeof g == "object" && !Array.isArray(g);
function Wa(g = {}, u = {}, E) {
  const k = {};
  for (const A in g)
    k[A] = g[A];
  for (const A in u) {
    const N = g[A], O = u[A];
    if (la(N) && la(O)) {
      k[A] = Wa(N, O);
      continue;
    }
    k[A] = O;
  }
  return k;
}
const sl = (g, u) => {
  var E, k;
  return typeof ((E = g.props) == null ? void 0 : E[u]) < "u" || typeof ((k = g.props) == null ? void 0 : k[ol(u)]) < "u";
};
function ll(g = {}, u) {
  const E = en(bn, Te({})), k = Ua("useDefaults");
  if (u = u ?? k.type.name ?? k.type.__name, !u)
    throw new Error("[Bvn] Could not determine component name");
  const A = se(() => {
    var w;
    return (w = E.value) == null ? void 0 : w[g._as ?? u];
  }), N = new Proxy(g, {
    get(w, M) {
      var c, o, v, d;
      const x = Reflect.get(w, M);
      return M === "class" || M === "style" ? [(c = A.value) == null ? void 0 : c[M], x].filter((y) => y != null) : typeof M == "string" && !sl(k.vnode, M) ? ((o = A.value) == null ? void 0 : o[M]) ?? ((d = (v = E.value) == null ? void 0 : v.global) == null ? void 0 : d[M]) ?? x : x;
    }
  }), O = Qt();
  Po(() => {
    if (A.value) {
      const w = Object.entries(A.value).filter(
        ([M]) => M.startsWith(M[0].toUpperCase())
      );
      O.value = w.length ? Object.fromEntries(w) : void 0;
    } else
      O.value = void 0;
  });
  function p() {
    const w = il(bn, k);
    Io(
      bn,
      se(
        () => O.value ? Wa((w == null ? void 0 : w.value) ?? {}, O.value) : w == null ? void 0 : w.value
      )
    );
  }
  return { props: N, provideSubDefaults: p };
}
function rn(g, u) {
  const { props: E, provideSubDefaults: k } = ll(g, u);
  return k(), E;
}
const wn = (g) => se(() => {
  let u = De(g);
  return u = {
    variant: u.variant ?? null,
    bgVariant: u.bgVariant ?? null,
    textVariant: u.textVariant ?? null,
    borderVariant: u.borderVariant ?? null
  }, {
    [`text-bg-${u.variant}`]: u.variant !== null,
    [`text-${u.textVariant}`]: u.textVariant !== null,
    [`bg-${u.bgVariant}`]: u.bgVariant !== null,
    [`border-${u.borderVariant}`]: u.borderVariant !== null
  };
}), cl = {
  key: 0,
  class: "visually-hidden"
}, ul = /* @__PURE__ */ ft({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: Boolean, default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(g) {
    const E = rn(g, "BSpinner"), k = ba(), A = wn(
      se(() => ({
        textVariant: E.variant
      }))
    ), N = se(() => [
      `spinner-${E.type}`,
      A.value,
      {
        [`spinner-${E.type}-sm`]: E.small
      }
    ]), O = se(() => !Va(k.label));
    return (p, w) => (Re(), Ye(nn(Y(E).tag), {
      class: ut(N.value),
      role: Y(E).label || O.value ? Y(E).role : null,
      "aria-hidden": Y(E).label || O.value ? null : !0
    }, {
      default: nt(() => [
        Y(E).label || O.value ? (Re(), gt("span", cl, [
          Ze(p.$slots, "label", {}, () => [
            Rt(Pt(Y(E).label), 1)
          ])
        ])) : tt("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), fl = (g, u) => [...u].reduce(
  (E, k) => (E[k] = g[k], E),
  {}
), dl = (g) => g.replace(/-./g, (u) => u.charAt(1).toUpperCase()).replace(/\b\w/g, (u) => u.toUpperCase()).replace(/\s+/g, ""), pl = (g) => !!(g.href || g.to), hl = (g, u) => {
  const E = ot(Ct(u)), k = ot(Ct(g)), A = se(() => pl(k.value)), N = se(
    () => A.value ? fl(
      k.value,
      E.value ?? [
        "active",
        "activeClass",
        "append",
        "exactActiveClass",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover"
      ]
    ) : {}
  );
  return { computedLink: A, computedLinkProps: N };
}, ml = ({
  to: g,
  disabled: u,
  href: E,
  replace: k,
  routerComponentName: A
}) => {
  var _, P, j, H, W, Q, $, I;
  const N = tn(), O = (H = (j = (P = (_ = N == null ? void 0 : N.appContext) == null ? void 0 : _.app) == null ? void 0 : P.config) == null ? void 0 : j.globalProperties) == null ? void 0 : H.$router, p = (I = ($ = (Q = (W = N == null ? void 0 : N.appContext) == null ? void 0 : W.app) == null ? void 0 : Q.config) == null ? void 0 : $.globalProperties) == null ? void 0 : I.$route, w = nn("RouterLink"), M = w && typeof w != "string" && "useLink" in w ? w.useLink : null, x = se(() => De(g) || ""), c = ot(Ct(k)), o = se(() => dl(De(A))), v = se(() => {
    var J, ae;
    return !(((ae = (J = N == null ? void 0 : N.appContext) == null ? void 0 : J.app) == null ? void 0 : ae.component(o.value)) !== void 0) || De(u) || !x.value ? "a" : o.value;
  }), d = se(() => v.value === "RouterLink"), y = se(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => {
      var F, J;
      return d.value && typeof ((J = (F = N == null ? void 0 : N.appContext) == null ? void 0 : F.app) == null ? void 0 : J.$nuxt) < "u";
    }
  ), f = se(
    () => v.value !== "a" && !d.value && !y.value
  ), L = se(() => d.value || y.value), T = se(() => ({
    to: x.value,
    replace: c.value
  })), C = M == null ? void 0 : M({
    to: x,
    replace: c
  }), S = se(() => L.value ? C : null), s = se(() => {
    var ce;
    if ((ce = S.value) != null && ce.href.value) return S.value.href.value;
    const F = "#", J = De(E);
    if (J) return J;
    if (typeof x.value == "string") return x.value || F;
    const ae = x.value;
    if (ae !== void 0 && "path" in ae) {
      const de = ae.path || "", pe = ae.query ? `?${Object.keys(ae.query).map((ge) => {
        var B;
        return `${ge}=${(B = ae.query) == null ? void 0 : B[ge]}`;
      }).join("=")}` : "", ye = !ae.hash || ae.hash.charAt(0) === "#" ? ae.hash || "" : `#${ae.hash}`;
      return `${de}${pe}${ye}` || F;
    }
    return F;
  });
  return {
    isNonStandardTag: f,
    tag: v,
    isRouterLink: d,
    isNuxtLink: y,
    computedHref: s,
    routerName: o,
    router: O,
    route: p,
    link: S,
    linkProps: T
  };
}, Ka = (g) => se(() => {
  const u = De(g);
  return {
    [`link-${u.variant}`]: u.variant !== null,
    [`link-opacity-${u.opacity}`]: u.opacity !== void 0,
    [`link-opacity-${u.opacityHover}-hover`]: u.opacityHover !== void 0,
    [`link-underline-${u.underlineVariant}`]: u.underlineVariant !== null,
    [`link-offset-${u.underlineOffset}`]: u.underlineOffset !== void 0,
    [`link-offset-${u.underlineOffsetHover}-hover`]: u.underlineOffsetHover !== void 0,
    "link-underline": u.underlineVariant === null && (u.underlineOpacity !== void 0 || u.underlineOpacityHover !== void 0),
    [`link-underline-opacity-${u.underlineOpacity}`]: u.underlineOpacity !== void 0,
    [`link-underline-opacity-${u.underlineOpacityHover}-hover`]: u.underlineOpacityHover !== void 0,
    "icon-link": u.icon === !0
  };
}), ca = "active", gl = /* @__PURE__ */ ft({
  __name: "BLink",
  props: {
    active: { type: Boolean, default: void 0 },
    activeClass: { default: "router-link-active" },
    disabled: { type: Boolean, default: !1 },
    exactActiveClass: { default: "router-link-exact-active" },
    href: { default: void 0 },
    icon: { type: Boolean, default: !1 },
    noRel: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    prefetch: { type: Boolean, default: void 0 },
    prefetchOn: { default: void 0 },
    noPrefetch: { type: Boolean, default: void 0 },
    prefetchedClass: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: !1 },
    routerComponentName: { default: "router-link" },
    routerTag: { default: "a" },
    stretched: { type: Boolean, default: !1 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null },
    variant: { default: null }
  },
  emits: ["click"],
  setup(g, { emit: u }) {
    const k = rn(g, "BLink"), A = u, N = jo(), { computedHref: O, tag: p, link: w, isNuxtLink: M, isRouterLink: x, linkProps: c, isNonStandardTag: o } = ml({
      routerComponentName: () => k.routerComponentName,
      disabled: () => k.disabled,
      to: () => k.to,
      replace: () => k.replace,
      href: () => k.href
    }), v = en(zo, null), d = en(Go, null), y = Ka(k), f = se(() => {
      var P, j;
      return [
        y.value,
        N.class,
        L.value,
        {
          [ca]: k.active,
          [k.activeClass]: ((P = w.value) == null ? void 0 : P.isActive.value) || !1,
          [k.exactActiveClass]: ((j = w.value) == null ? void 0 : j.isExactActive.value) || !1,
          "stretched-link": k.stretched === !0
        }
      ];
    }), L = se(() => ({
      [ca]: k.active,
      disabled: k.disabled
    })), T = (P) => {
      var j, H, W;
      if (k.disabled) {
        P.preventDefault(), P.stopImmediatePropagation();
        return;
      }
      (((j = v == null ? void 0 : v.isNav) == null ? void 0 : j.value) === !0 && d === null || d !== null && ((H = d.noAutoClose) == null ? void 0 : H.value) !== !0) && ((W = v == null ? void 0 : v.hide) == null || W.call(v)), A("click", P);
    }, C = se(
      () => k.target === "_blank" ? !k.rel && k.noRel ? "noopener" : k.rel : void 0
    ), S = se(
      () => k.disabled ? "-1" : typeof N.tabindex > "u" ? null : N.tabindex
    ), s = se(() => ({
      prefetch: k.prefetch,
      noPrefetch: k.noPrefetch,
      prefetchOn: k.prefetchOn,
      prefetchedClass: k.prefetchedClass,
      ...c.value
    })), _ = se(() => ({
      ...x.value ? c.value : void 0,
      // In addition to being Nuxt specific, we add these values if it's some non-standard tag. We don't know what it is,
      // So we just add it anyways. It will be made as an attr if it's unused so it's fine
      ...M.value || o.value ? s.value : void 0
    }));
    return (P, j) => (Re(), Ye(nn(Y(p)), it({
      class: f.value,
      target: Y(k).target,
      href: Y(O),
      rel: C.value,
      tabindex: S.value,
      "aria-disabled": Y(k).disabled ? !0 : null
    }, _.value, {
      onClick: j[0] || (j[0] = (H) => {
        var W;
        T(H), (W = Y(w)) == null || W.navigate(H);
      })
    }), {
      default: nt(() => [
        Ze(P.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "target", "href", "rel", "tabindex", "aria-disabled"]));
  }
}), Yn = /* @__PURE__ */ ft({
  __name: "BButton",
  props: /* @__PURE__ */ Sn({
    loading: { type: Boolean, default: !1 },
    loadingFill: { type: Boolean, default: !1 },
    loadingText: { default: "Loading..." },
    pill: { type: Boolean, default: !1 },
    size: { default: "md" },
    squared: { type: Boolean, default: !1 },
    tag: { default: "button" },
    type: { default: "button" },
    variant: { default: "secondary" },
    active: { type: Boolean, default: !1 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: !1 },
    noRel: { type: Boolean },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    prefetchedClass: {},
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    routerTag: { default: void 0 },
    stretched: { type: Boolean, default: !1 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null }
  }, {
    pressed: { type: Boolean, default: void 0 },
    pressedModifiers: {}
  }),
  emits: /* @__PURE__ */ Sn(["click"], ["update:pressed"]),
  setup(g, { emit: u }) {
    const k = rn(g, "BButton"), A = u, N = Nt("_element"), O = wa(g, "pressed"), { computedLink: p, computedLinkProps: w } = hl(k, [
      "active-class",
      "exact-active-class",
      "replace",
      "routerComponentName",
      "routerTag"
    ]), M = se(() => typeof O.value == "boolean"), x = se(
      () => k.tag === "button" && k.href === void 0 && k.to === void 0
    ), c = se(() => k.to !== void 0), o = se(() => k.href !== void 0 ? !1 : !x.value), v = se(() => c.value ? w.value : []), d = se(() => k.href === "#" && k.disabled ? !0 : o.value ? k.disabled : null), y = se(() => {
      var s;
      return ((s = k.variant) == null ? void 0 : s.startsWith("link")) || !1;
    }), f = se(() => {
      var s;
      return ((s = k.variant) == null ? void 0 : s.startsWith("link-")) || !1;
    }), L = Ka(
      se(() => {
        var s;
        return {
          ...y.value ? {
            icon: k.icon,
            opacity: k.opacity,
            opacityHover: k.opacityHover,
            underlineOffset: k.underlineOffset,
            underlineOffsetHover: k.underlineOffsetHover,
            underlineOpacity: k.underlineOpacity,
            underlineOpacityHover: k.underlineOpacityHover,
            underlineVariant: k.underlineVariant,
            variant: f.value === !0 ? (s = k.variant) == null ? void 0 : s.slice(5) : null
          } : void 0
        };
      })
    ), T = se(() => [
      y.value === !0 && p.value === !1 ? L.value : void 0,
      [`btn-${k.size}`],
      {
        [`btn-${k.variant}`]: k.variant !== null && f.value === !1,
        active: k.active || O.value,
        "rounded-pill": k.pill,
        "rounded-0": k.squared,
        disabled: k.disabled
      }
    ]), C = se(() => c.value ? gl : k.href ? "a" : k.tag), S = (s) => {
      if (k.disabled) {
        s.preventDefault(), s.stopPropagation();
        return;
      }
      A("click", s), M.value && (O.value = !O.value);
    };
    return Da(
      [" ", "enter"],
      (s) => {
        var _;
        k.href === "#" && (s.preventDefault(), (_ = N.value) == null || _.click());
      },
      { target: N }
    ), (s, _) => (Re(), Ye(nn(C.value), it({
      ref: "_element",
      class: "btn"
    }, v.value, {
      class: T.value,
      "aria-disabled": d.value,
      "aria-pressed": M.value ? O.value : null,
      autocomplete: M.value ? "off" : null,
      disabled: x.value ? Y(k).disabled : null,
      href: Y(k).href,
      rel: Y(p) ? Y(k).rel : null,
      role: o.value || Y(p) ? "button" : null,
      target: Y(p) ? Y(k).target : null,
      type: x.value ? Y(k).type : null,
      to: x.value ? null : Y(k).to,
      onClick: S
    }), {
      default: nt(() => [
        Y(k).loading ? Ze(s.$slots, "loading", { key: 0 }, () => [
          Y(k).loadingFill ? tt("", !0) : (Re(), gt(Ea, { key: 0 }, [
            Rt(Pt(Y(k).loadingText), 1)
          ], 64)),
          Ze(s.$slots, "loading-spinner", {}, () => [
            Sa(ul, {
              small: Y(k).size !== "lg",
              label: Y(k).loadingFill ? Y(k).loadingText : void 0
            }, null, 8, ["small", "label"])
          ])
        ]) : Ze(s.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to"]));
  }
}), vl = ["type", "disabled", "aria-label"], yl = /* @__PURE__ */ ft({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(g, { emit: u }) {
    const k = rn(g, "BCloseButton"), A = u;
    return (N, O) => (Re(), gt("button", {
      type: Y(k).type,
      class: "btn-close",
      disabled: Y(k).disabled,
      "aria-label": Y(k).ariaLabel,
      onClick: O[0] || (O[0] = (p) => A("click", p))
    }, null, 8, vl));
  }
}), bl = (g, u) => {
  const E = ya();
  return se(() => De(g) || ir(E || "", u));
};
class An {
  constructor(u, E = {}) {
    et(this, "cancelable", !0);
    et(this, "componentId", null);
    et(this, "_defaultPrevented", !1);
    et(this, "eventType", "");
    et(this, "nativeEvent", null);
    et(this, "_preventDefault");
    et(this, "relatedTarget", null);
    et(this, "target", null);
    if (!u)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, An.Defaults, E, { eventType: u }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = !0);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(u) {
    this._defaultPrevented = u;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(u) {
    this._preventDefault = u;
  }
  static get Defaults() {
    return {
      cancelable: !0,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class wl extends An {
  constructor(E, k = {}) {
    super(E, k);
    et(this, "trigger", null);
    et(this, "ok");
    Object.assign(this, An.Defaults, k, { eventType: E });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null,
      ok: void 0
    };
  }
}
const ua = {
  name: "fade",
  enterActiveClass: "",
  enterFromClass: "showing",
  enterToClass: "",
  leaveActiveClass: "",
  leaveFromClass: "",
  leaveToClass: "showing",
  css: !0
}, El = (g, u, E, k, A, N = {
  transitionProps: {},
  showFn: () => {
  },
  hideFn: () => {
  }
}) => {
  var Ce;
  let O = !1;
  const p = !!g.value && !u.initialAnimation || u.visible || !1, w = Te(p), M = Te(p), x = Te(p);
  let c = typeof g.value != "boolean";
  Ve(g, () => {
    if (c = typeof g.value != "boolean", O) {
      O = !1;
      return;
    }
    g.value ? _() : j("modelValue", !0);
  });
  const o = Te(p), v = Te(!1), d = se(
    () => u.noAnimation || u.noFade || o.value || !1
  );
  let y = !1;
  Tt(() => {
    var X;
    if (y = !0, !u.show && p) {
      const U = f("show", { cancelable: !0 });
      if (E("show", U), U.defaultPrevented) {
        E("show-prevented", f("show-prevented"));
        return;
      }
      o.value = !0, g.value || (O = !0, g.value = !0), M.value = !0, x.value = !0, B.value = !0, ve.value = !0, ie.value = !0, w.value = !0, (X = N.showFn) == null || X.call(N);
    } else (u.show || g.value && u.initialAnimation) && _();
  }), Ve(
    () => u.visible,
    (X) => {
      o.value = !0, Et(() => {
        X && (B.value = !0), X ? _() : j("visible-prop", !0);
      });
    }
  ), Ve(
    () => u.show,
    (X) => {
      X ? _() : j("show-prop", !0);
    }
  ), sr(k, "bv-toggle", () => {
    g.value = !g.value;
  });
  const f = (X, U = {}) => new wl(X, {
    cancelable: !1,
    target: (k == null ? void 0 : k.value) || null,
    relatedTarget: null,
    trigger: null,
    ...U,
    componentId: A == null ? void 0 : A.value
  });
  let L, T, C, S, s;
  const _ = (X = !1) => {
    if (w.value && !T && !S) return Promise.resolve(!0);
    if (s = X, w.value && !T && S) return S;
    S = new Promise((he) => {
      C = he;
    });
    const U = f("show", { cancelable: !0 });
    return E("show", U), U.defaultPrevented ? (E("show-prevented", f("show-prevented")), B.value && (B.value = !1), g.value && !c && (O = !0, Et(() => {
      g.value = !1;
    })), C == null || C("show-prevented"), S) : (T && (clearTimeout(T), T = void 0), M.value = !0, x.value = !0, requestAnimationFrame(() => {
      var he, fe;
      if (o.value || u.delay === void 0) {
        if (!y) return;
        L = void 0, w.value = !0, (he = N.showFn) == null || he.call(N), g.value || (O = !0, Et(() => {
          g.value = !0;
        }));
        return;
      }
      L = setTimeout(
        () => {
          var le;
          y && (L = void 0, w.value = !0, (le = N.showFn) == null || le.call(N), g.value || (O = !0, Et(() => {
            g.value = !0;
          })));
        },
        typeof u.delay == "number" ? u.delay : ((fe = u.delay) == null ? void 0 : fe.show) || 0
      );
    }), S);
  };
  let P;
  const j = (X, U) => {
    var le;
    if (!w.value && !L) return Promise.resolve("");
    S || (S = new Promise((xe) => {
      C = xe;
    })), typeof X != "string" && (X = void 0), P = X;
    const he = f("hide", { cancelable: !0, trigger: X }), fe = f(X || "ignore", { cancelable: !0, trigger: X });
    return X === "backdrop" && u.noCloseOnBackdrop || X === "esc" && u.noCloseOnEsc ? (E("hide-prevented", f("hide-prevented", { trigger: X })), C == null || C("hide-prevented"), S) : (L && (clearTimeout(L), L = void 0), X && !U && E(X, fe), E("hide", he), he.defaultPrevented || fe.defaultPrevented ? (E("hide-prevented", f("hide-prevented", { trigger: X })), g.value || Et(() => {
      O = !0, g.value = !0;
    }), C == null || C("hide-prevented"), S) : (V.value = !1, L && (clearTimeout(L), L = void 0, v.value || (M.value = !1), x.value = !1), T = setTimeout(
      () => {
        var xe;
        y && (T = void 0, ye.value = !0, w.value = !1, (xe = N.hideFn) == null || xe.call(N), g.value && (O = !0, g.value = c ? 0 : !1));
      },
      o.value ? 0 : typeof u.delay == "number" ? u.delay : ((le = u.delay) == null ? void 0 : le.hide) || 0
    ), S));
  }, H = /* @__PURE__ */ ta((X) => j(X), 500), W = /* @__PURE__ */ ta(() => _(), 500), Q = (X = !1) => {
    const U = f("toggle", { cancelable: !0 });
    return E("toggle", U), U.defaultPrevented ? (E("toggle-prevented", f("toggle-prevented")), Promise.resolve("toggle-prevented")) : w.value ? j("toggle-function", !0) : _(X);
  }, $ = () => {
    const X = f("toggle", { cancelable: !0 });
    if (E("toggle", X), X.defaultPrevented) {
      E("toggle-prevented", f("toggle-prevented"));
      return;
    }
    w.value ? j("toggle-trigger", !0) : _();
  }, I = [], F = (X, U) => {
    I.push({ trigger: X, el: U }), U.addEventListener(X, $), ce(U);
  }, J = (X, U, he = !0) => {
    const fe = I.findIndex((le) => (le == null ? void 0 : le.trigger) === X && le.el === U);
    fe > -1 && (I.splice(fe, 1), U.removeEventListener(X, $), he && (U.removeAttribute("aria-expanded"), U.classList.remove("collapsed"), U.classList.remove("not-collapsed")));
  }, ae = (Ce = en(La, void 0)) == null ? void 0 : Ce.register({
    id: A.value,
    toggle: Q,
    show: _,
    hide: j,
    value: ot(w),
    registerTrigger: F,
    unregisterTrigger: J,
    component: tn()
  }), ce = (X) => {
    X.setAttribute("aria-expanded", g.value ? "true" : "false"), X.classList.toggle("collapsed", !g.value), X.classList.toggle("not-collapsed", !!g.value);
  };
  Ve(g, () => {
    I.forEach((X) => {
      ce(X.el);
    });
  }), Ve(A, (X, U) => {
    ae == null || ae.updateId(X, U);
  }), Fo(() => {
    ae == null || ae.unregister(), I.forEach((X) => {
      X.el.removeEventListener(X.trigger, $);
    });
  }), ar(() => {
    y = !1, clearTimeout(L), clearTimeout(T), L = void 0, T = void 0;
  });
  const de = Te(!1), pe = () => {
    u.lazy === !0 && (de.value = !0);
  }, ye = Te(!1), ge = Te(p), B = Te(p), Be = (X) => {
    var U, he, fe, le;
    (he = (U = N.transitionProps) == null ? void 0 : U.onBeforeEnter) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onBeforeEnter) == null || le.call(fe, X), ge.value = !0;
  }, Ie = (X) => {
    var U, he, fe, le;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        B.value = !0;
      });
    }), (he = (U = N.transitionProps) == null ? void 0 : U.onEnter) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onEnter) == null || le.call(fe, X);
  }, We = (X) => {
    var U, he, fe, le;
    pe(), (he = (U = N.transitionProps) == null ? void 0 : U.onAfterEnter) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onAfterEnter) == null || le.call(fe, X), o.value && requestAnimationFrame(() => {
      o.value = !1;
    }), v.value && (v.value = !1), requestAnimationFrame(() => {
      V.value = !0, Et(() => {
        E("shown", f("shown", { cancelable: !1 }));
      });
    }), s || (C == null || C(!0), S = void 0, C = void 0);
  }, Ue = (X) => {
    var U, he, fe, le;
    ye.value || (ye.value = !0), (he = (U = N.transitionProps) == null ? void 0 : U.onBeforeLeave) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onBeforeLeave) == null || le.call(fe, X), V.value = !1;
  }, q = (X) => {
    var U, he, fe, le;
    B.value = !1, (he = (U = N.transitionProps) == null ? void 0 : U.onLeave) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onLeave) == null || le.call(fe, X);
  }, we = (X) => {
    var U, he, fe, le;
    E("hidden", f("hidden", { trigger: P, cancelable: !1 })), (he = (U = N.transitionProps) == null ? void 0 : U.onAfterLeave) == null || he.call(U, X), (le = (fe = u.transitionProps) == null ? void 0 : fe.onAfterLeave) == null || le.call(fe, X), ye.value = !1, ge.value = !1, o.value && requestAnimationFrame(() => {
      o.value = !1;
    }), requestAnimationFrame(() => {
      v.value || (M.value = !1);
    }), C == null || C(P || ""), S = void 0, C = void 0, P = void 0;
  }, ne = se(
    () => v.value === !0 || ge.value === !0 || u.lazy === !1 || u.lazy === !0 && de.value === !0 && u.unmountLazy === !1
  ), V = Te(!1), ve = Te(!1), ie = Te(!1), _e = {
    ...N.transitionProps,
    onBeforeEnter: Be,
    onEnter: Ie,
    onAfterEnter: We,
    onBeforeLeave: Ue,
    onLeave: q,
    onAfterLeave: we
  };
  return {
    showRef: w,
    renderRef: M,
    renderBackdropRef: x,
    isVisible: B,
    isActive: ge,
    trapActive: V,
    show: _,
    hide: j,
    toggle: Q,
    throttleHide: H,
    throttleShow: W,
    buildTriggerableEvent: f,
    computedNoAnimation: d,
    localNoAnimation: o,
    localTemporaryHide: v,
    isLeaving: ye,
    transitionProps: {
      ...ua,
      ...u.transitionProps,
      ..._e
    },
    lazyLoadCompleted: de,
    markLazyLoadCompleted: pe,
    contentShowing: ne,
    backdropReady: ie,
    backdropVisible: ve,
    backdropTransitionProps: {
      ...ua,
      onBeforeEnter: () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ve.value = !0;
          });
        }), ie.value = !1;
      },
      onAfterEnter: () => {
        ie.value = !0;
      },
      onBeforeLeave: () => {
        ve.value = !1;
      },
      onAfterLeave: () => {
        ie.value = !1, requestAnimationFrame(() => {
          x.value = !1;
        });
      }
    }
  };
}, Sl = (g, u = typeof document < "u" ? document : void 0) => {
  if (g)
    return typeof g == "string" ? typeof u > "u" || typeof document > "u" ? void 0 : document.getElementById(g) ?? u.querySelector(g) ?? void 0 : g.$el ?? g;
};
Object.freeze(
  Object.keys({
    bordered: 0,
    borderless: 0,
    borderVariant: 0,
    captionTop: 0,
    dark: 0,
    fixed: 0,
    hover: 0,
    id: 0,
    noBorderCollapse: 0,
    outlined: 0,
    responsive: 0,
    small: 0,
    stacked: 0,
    stickyHeader: 0,
    striped: 0,
    stripedColumns: 0,
    variant: 0,
    tableAttrs: 0,
    tableClass: 0
  })
);
Object.freeze(
  Object.keys({
    align: 0,
    caption: 0,
    detailsTdClass: 0,
    fieldColumnClass: 0,
    fields: 0,
    footClone: 0,
    footRowVariant: 0,
    footVariant: 0,
    headRowVariant: 0,
    headVariant: 0,
    items: 0,
    labelStacked: 0,
    modelValue: 0,
    primaryKey: 0,
    tbodyClass: 0,
    tbodyTrAttrs: 0,
    tbodyTrClass: 0,
    tfootClass: 0,
    tfootTrClass: 0,
    theadClass: 0,
    theadTrClass: 0
  })
);
const Qn = "modal-open", Cl = () => {
  const g = en(Aa), u = (k) => {
    g == null || g.removeStack(k), g == null || g.removeRegistry(k);
  }, E = vs("updateHTMLAttrs", (k, A, N) => {
    const O = typeof k == "string" ? window == null ? void 0 : window.document.querySelector(k) : It(k);
    O && (A === "class" ? O.classList.toggle(Qn, N === Qn) : O.setAttribute(A, N));
  });
  return Lt(() => {
    (g == null ? void 0 : g.countStack.value) === 0 && E("body", "class", "");
  }), Ve(
    () => g == null ? void 0 : g.countStack.value,
    (k) => {
      k !== void 0 && E("body", "class", k > 0 ? Qn : "");
    }
  ), {
    ...g,
    dispose: u
  };
}, kl = (g, u) => {
  const { pushRegistry: E, pushStack: k, removeStack: A, stack: N, dispose: O, countStack: p } = Cl(), w = tn();
  if (!w || w.type.__name !== "BModal")
    throw new Error("useModalManager must only use in BModal component");
  E == null || E(w), Lt(() => {
    O(w);
  });
  const M = (x, c) => {
    x ? k == null || k(w) : c && !x && (A == null || A(w));
  };
  return M(u, u), Ve(g, M), {
    activePosition: se(
      () => N == null ? void 0 : N.value.findIndex((x) => {
        var c, o;
        return De((c = x.exposed) == null ? void 0 : c.id) === De((o = w.exposed) == null ? void 0 : o.id);
      })
    ),
    activeModalCount: p,
    stackWithoutSelf: se(
      () => (N == null ? void 0 : N.value.filter(
        (x) => {
          var c, o;
          return De((c = x.exposed) == null ? void 0 : c.id) !== De((o = w.exposed) == null ? void 0 : o.id);
        }
      )) ?? []
    )
  };
}, Tl = ["id", "aria-labelledby", "aria-describedby"], Ll = ["id"], fa = "modal-fallback-focus", Al = /* @__PURE__ */ ft({
  inheritAttrs: !1,
  __name: "BModal",
  props: /* @__PURE__ */ Sn({
    focus: { type: [String, Boolean, Object, null], default: void 0 },
    backdropFirst: { type: Boolean, default: !1 },
    body: { default: void 0 },
    bodyAttrs: { default: void 0 },
    bodyBgVariant: { default: null },
    bodyClass: { default: null },
    bodyScrolling: { type: Boolean, default: !1 },
    bodyTextVariant: { default: null },
    bodyVariant: { default: null },
    busy: { type: Boolean, default: !1 },
    buttonSize: { default: "md" },
    cancelClass: { default: void 0 },
    cancelDisabled: { type: Boolean, default: !1 },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { type: Boolean, default: !1 },
    contentClass: { default: void 0 },
    dialogClass: { default: void 0 },
    footerBgVariant: { default: null },
    footerBorderVariant: { default: null },
    footerClass: { default: void 0 },
    footerTextVariant: { default: null },
    footerVariant: { default: null },
    fullscreen: { type: [Boolean, String], default: !1 },
    headerAttrs: { default: void 0 },
    headerBgVariant: { default: null },
    headerBorderVariant: { default: null },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    headerTextVariant: { default: null },
    headerVariant: { default: null },
    noBackdrop: { type: Boolean, default: !1 },
    noFooter: { type: Boolean, default: !1 },
    noHeader: { type: Boolean, default: !1 },
    noHeaderClose: { type: Boolean, default: !1 },
    id: { default: void 0 },
    modalClass: { default: void 0 },
    noCloseOnBackdrop: { type: Boolean, default: !1 },
    noCloseOnEsc: { type: Boolean, default: !1 },
    noTrap: { type: Boolean, default: !1 },
    noStacking: { type: Boolean },
    okClass: { default: void 0 },
    okDisabled: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    okTitle: { default: "OK" },
    okVariant: { default: "primary" },
    scrollable: { type: Boolean, default: !1 },
    size: { default: "md" },
    title: { default: void 0 },
    titleClass: { default: void 0 },
    titleVisuallyHidden: { type: Boolean, default: !1 },
    titleTag: { default: "h5" },
    teleportDisabled: { type: Boolean, default: !1 },
    teleportTo: { default: "body" },
    initialAnimation: { type: Boolean, default: !1 },
    noAnimation: { type: Boolean },
    noFade: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 },
    unmountLazy: { type: Boolean, default: !1 },
    show: { type: Boolean, default: !1 },
    transProps: { default: void 0 },
    visible: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Sn(["backdrop", "close", "esc", "hide", "hide-prevented", "hidden", "show", "show-prevented", "shown", "toggle", "toggle-prevented", "cancel", "ok"], ["update:modelValue"]),
  setup(g, { expose: u, emit: E }) {
    const A = rn(g, "BModal"), N = E, O = ba(), p = bl(() => A.id, "modal"), w = wa(g, "modelValue"), M = Nt("_element"), x = Nt("_fallbackFocusElement"), c = Nt("_okButton"), o = Nt("_cancelButton"), v = Nt("_closeButton"), d = () => A.focus && typeof A.focus != "boolean" ? A.focus === "ok" ? c : A.focus === "close" ? v : A.focus === "cancel" ? o : Sl(A.focus, M.value ?? void 0) ?? M.value : M;
    let y = null;
    const f = () => {
      if (A.noTrap && A.focus !== !1) {
        y = document.activeElement, y === M.value && (y = null);
        const le = It(d());
        if (!le) return;
        le == null || le.focus(), le.tagName && le.tagName.toLowerCase() === "input" && typeof le.select == "function" && le.select();
      }
    }, L = () => {
      A.noTrap && A.focus !== !1 && y && (y == null || y.focus(), y = null);
    }, {
      showRef: T,
      renderRef: C,
      renderBackdropRef: S,
      hide: s,
      show: _,
      toggle: P,
      computedNoAnimation: j,
      transitionProps: H,
      backdropTransitionProps: W,
      isLeaving: Q,
      isVisible: $,
      trapActive: I,
      contentShowing: F,
      backdropReady: J,
      backdropVisible: ae
    } = El(w, A, N, M, p, {
      // addShowClass: false,
      transitionProps: {
        onAfterEnter: f,
        onAfterLeave: L
      }
    }), { needsFallback: ce } = nl({
      element: M,
      isActive: I,
      noTrap: () => A.noTrap,
      fallbackFocus: {
        ref: x,
        classSelector: fa
      },
      focus: () => A.focus === !1 ? !1 : It(d()) ?? void 0
      // () => (typeof focus === 'boolean' ? focus : (unrefElement(focus) ?? undefined)),
    });
    Da(
      "Escape",
      () => {
        s("esc");
      },
      { target: M }
    ), al(T, () => A.bodyScrolling);
    const de = se(() => !Va(O["header-close"])), pe = se(() => [
      A.dialogClass,
      {
        "modal-fullscreen": A.fullscreen === !0,
        [`modal-fullscreen-${A.fullscreen}-down`]: typeof A.fullscreen == "string",
        [`modal-${A.size}`]: A.size !== "md",
        "modal-dialog-centered": A.centered,
        "modal-dialog-scrollable": A.scrollable
      }
    ]), ye = wn(() => ({
      bgVariant: A.bodyBgVariant,
      textVariant: A.bodyTextVariant,
      variant: A.bodyVariant
    })), ge = se(() => [A.bodyClass, ye.value]), B = wn(() => ({
      bgVariant: A.headerBgVariant,
      textVariant: A.headerTextVariant,
      variant: A.headerVariant,
      borderVariant: A.headerBorderVariant
    })), Be = se(() => [A.headerClass, B.value]), Ie = se(() => ({
      variant: de.value ? A.headerCloseVariant : void 0,
      class: A.headerCloseClass
    })), We = wn(() => ({
      bgVariant: A.footerBgVariant,
      textVariant: A.footerTextVariant,
      variant: A.footerVariant,
      borderVariant: A.footerBorderVariant
    })), Ue = se(() => [A.footerClass, We.value]), q = se(() => [
      A.titleClass,
      {
        "visually-hidden": A.titleVisuallyHidden
      }
    ]), we = se(() => A.cancelDisabled || A.busy), ne = se(() => A.okDisabled || A.busy), { activePosition: V, activeModalCount: ve, stackWithoutSelf: ie } = kl(
      T,
      w.value
    ), _e = se(() => ({
      [`stack-position-${(V == null ? void 0 : V.value) ?? 0}`]: !0,
      [`stack-inverse-position-${((ve == null ? void 0 : ve.value) ?? 1) - 1 - ((V == null ? void 0 : V.value) ?? 0)}`]: !0
    }));
    Ve(ie, (le, xe) => {
      le.length > xe.length && T.value === !0 && A.noStacking === !0 && s();
    });
    const Ce = Te(
      sa(M.value ?? (typeof document < "u" ? document.body : void 0))
    );
    Tt(() => {
      Ve(
        C,
        (le) => {
          le && Et(() => {
            M.value && (Ce.value = sa(M.value));
          });
        },
        { immediate: !0 }
      );
    });
    const X = se(
      () => (
        // Make sure that newly opened modals have a higher z-index than currently active ones.
        // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
        //
        // This means inactive modals will already be higher than active ones when opened.
        T.value || Q.value ? (
          // Just for reference there is a single frame in which the modal is not active but still has a higher z-index than the active ones due to _when_ it calculates its position. It's a small visual effect
          Ce.value - (((ve == null ? void 0 : ve.value) ?? 0) * 2 - ((V == null ? void 0 : V.value) ?? 0) * 2)
        ) : Ce.value
      )
    ), U = se(() => ({
      "z-index": X.value,
      "--b-position": (V == null ? void 0 : V.value) ?? 0,
      "--b-inverse-position": ((ve == null ? void 0 : ve.value) ?? 1) - 1 - ((V == null ? void 0 : V.value) ?? 0),
      "--b-count": (ve == null ? void 0 : ve.value) ?? 0
    })), he = se(() => ({
      "z-index": X.value - 1,
      "--b-position": (V == null ? void 0 : V.value) ?? 0,
      "--b-inverse-position": ((ve == null ? void 0 : ve.value) ?? 1) - 1 - ((V == null ? void 0 : V.value) ?? 0),
      "--b-count": (ve == null ? void 0 : ve.value) ?? 0
    })), fe = se(() => ({
      id: p.value,
      cancel: () => {
        s("cancel");
      },
      close: () => {
        s("close");
      },
      hide: s,
      show: _,
      toggle: P,
      ok: () => {
        s("ok");
      },
      active: T.value,
      visible: T.value
    }));
    return u({
      hide: s,
      id: p,
      show: _,
      toggle: P,
      visible: T
    }), (le, xe) => (Re(), Ye(Cs, {
      to: Y(A).teleportTo,
      disabled: Y(A).teleportDisabled
    }, {
      default: nt(() => [
        Y(C) || Y(F) ? (Re(), Ye(Jr, it({ key: 0 }, Y(H), {
          appear: w.value || Y(A).visible
        }), {
          default: nt(() => [
            Xr(Jt("div", it({
              id: Y(p),
              ref: "_element",
              class: ["modal", [
                Y(A).modalClass,
                {
                  fade: !Y(j),
                  show: Y($),
                  ..._e.value
                }
              ]],
              role: "dialog",
              "aria-labelledby": Y(A).noHeader ? void 0 : `${Y(p)}-label`,
              "aria-describedby": `${Y(p)}-body`,
              tabindex: "-1"
            }, le.$attrs, {
              style: [U.value, { display: "block" }],
              onMousedown: xe[4] || (xe[4] = Ca((dt) => Y(s)("backdrop"), ["left", "self"]))
            }), [
              Jt("div", {
                class: ut(["modal-dialog", pe.value])
              }, [
                Y(F) ? (Re(), gt("div", {
                  key: 0,
                  class: ut(["modal-content", Y(A).contentClass])
                }, [
                  Y(A).noHeader ? tt("", !0) : (Re(), gt("div", it({
                    key: 0,
                    class: ["modal-header", Be.value]
                  }, Y(A).headerAttrs), [
                    Ze(le.$slots, "header", ct(bt(fe.value)), () => [
                      (Re(), Ye(nn(Y(A).titleTag), {
                        id: `${Y(p)}-label`,
                        class: ut(["modal-title", q.value])
                      }, {
                        default: nt(() => [
                          Ze(le.$slots, "title", ct(bt(fe.value)), () => [
                            Rt(Pt(Y(A).title), 1)
                          ])
                        ]),
                        _: 3
                      }, 8, ["id", "class"])),
                      Y(A).noHeaderClose ? tt("", !0) : (Re(), gt(Ea, { key: 0 }, [
                        de.value ? (Re(), Ye(Yn, it({
                          key: 0,
                          ref: "_closeButton"
                        }, Ie.value, {
                          onClick: xe[0] || (xe[0] = (dt) => Y(s)("close"))
                        }), {
                          default: nt(() => [
                            Ze(le.$slots, "header-close", ct(bt(fe.value)))
                          ]),
                          _: 3
                        }, 16)) : (Re(), Ye(yl, it({
                          key: 1,
                          ref: "_closeButton",
                          "aria-label": Y(A).headerCloseLabel
                        }, Ie.value, {
                          onClick: xe[1] || (xe[1] = (dt) => Y(s)("close"))
                        }), null, 16, ["aria-label"]))
                      ], 64))
                    ])
                  ], 16)),
                  Jt("div", it({
                    id: `${Y(p)}-body`,
                    class: ["modal-body", ge.value]
                  }, Y(A).bodyAttrs), [
                    Ze(le.$slots, "default", ct(bt(fe.value)), () => [
                      Rt(Pt(Y(A).body), 1)
                    ])
                  ], 16, Ll),
                  Y(A).noFooter ? tt("", !0) : (Re(), gt("div", {
                    key: 1,
                    class: ut(["modal-footer", Ue.value])
                  }, [
                    Ze(le.$slots, "footer", ct(bt(fe.value)), () => [
                      Ze(le.$slots, "cancel", ct(bt(fe.value)), () => [
                        Y(A).okOnly ? tt("", !0) : (Re(), Ye(Yn, {
                          key: 0,
                          ref: "_cancelButton",
                          disabled: we.value,
                          size: Y(A).buttonSize,
                          variant: Y(A).cancelVariant,
                          class: ut(Y(A).cancelClass),
                          onClick: xe[2] || (xe[2] = (dt) => Y(s)("cancel"))
                        }, {
                          default: nt(() => [
                            Rt(Pt(Y(A).cancelTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant", "class"]))
                      ]),
                      Ze(le.$slots, "ok", ct(bt(fe.value)), () => [
                        Sa(Yn, {
                          ref: "_okButton",
                          disabled: ne.value,
                          size: Y(A).buttonSize,
                          variant: Y(A).okVariant,
                          class: ut(Y(A).okClass),
                          onClick: xe[3] || (xe[3] = (dt) => Y(s)("ok"))
                        }, {
                          default: nt(() => [
                            Rt(Pt(Y(A).okTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant", "class"])
                      ])
                    ])
                  ], 2))
                ], 2)) : tt("", !0)
              ], 2),
              Y(ce) ? (Re(), gt("div", {
                key: 0,
                ref: "_fallbackFocusElement",
                class: ut(fa),
                tabindex: "0",
                style: { width: "0", height: "0", overflow: "hidden" }
              }, null, 512)) : tt("", !0)
            ], 16, Tl), [
              [Yr, Y(T) && (Y(J) && Y(A).backdropFirst || !Y(A).backdropFirst)]
            ])
          ]),
          _: 3
        }, 16, ["appear"])) : tt("", !0),
        Y(A).noBackdrop ? tt("", !0) : Ze(le.$slots, "backdrop", ct(it({ key: 1 }, fe.value)), () => [
          Y(S) ? (Re(), Ye(Jr, ct(it({ key: 0 }, Y(W))), {
            default: nt(() => [
              Xr(Jt("div", {
                class: ut(["modal-backdrop", {
                  fade: !Y(j),
                  show: Y(ae) || Y(j),
                  ..._e.value
                }]),
                style: Vo(he.value),
                onClick: xe[5] || (xe[5] = (dt) => Y(s)("backdrop"))
              }, null, 6), [
                [Yr, Y(T) || Y(Q) && Y(A).backdropFirst && !Y(j)]
              ])
            ]),
            _: 1
          }, 16)) : tt("", !0)
        ])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
}), da = "bootstrap-vue-next", pa = (g, u) => {
  const { all: E, ...k } = g, A = {};
  E && u.forEach((O) => {
    A[O] = E;
  });
  const N = { ...A, ...k };
  return Object.entries(N).filter(([O, p]) => !!p && u.includes(O)).map(([O]) => O);
}, er = /* @__PURE__ */ new Set(), ha = /* @__PURE__ */ new Set();
Object.assign(
  ({
    aliases: g = {},
    directives: u = !0,
    components: E = !0
  } = {}) => {
    const A = pa(typeof E == "boolean" ? { all: E } : E, ws).reduce(
      (w, M) => (w.set(M, `${da}${Ba[M]}`), w),
      /* @__PURE__ */ new Map()
    ), O = pa(typeof u == "boolean" ? { all: u } : u, Es).reduce(
      (w, M) => {
        const x = M.toLowerCase().startsWith("v") ? M : `v${M}`;
        return w.set(x, `${da}${Ha[x]}`), w;
      },
      /* @__PURE__ */ new Map()
    );
    return [
      {
        type: "component",
        resolve(w) {
          const M = A.get(w), x = A.get(g[w]);
          if (x) {
            const c = g[w];
            return er.add(c), {
              name: c,
              from: x
            };
          }
          if (M)
            return er.add(w), {
              name: w,
              from: M
            };
        }
      },
      {
        type: "directive",
        resolve(w) {
          const M = `v${w}`, x = O.get(M);
          if (x)
            return ha.add(M), {
              name: M,
              from: x
            };
        }
      }
    ];
  },
  {
    __usedComponents: er,
    __usedDirectives: ha
  }
);
function Ml(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var En = { exports: {} };
/*!
 * Vditor v3.11.2 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log 开源, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
var _l = En.exports, ma;
function xl() {
  return ma || (ma = 1, function(g, u) {
    (function(k, A) {
      g.exports = A();
    })(_l, function() {
      return (
        /******/
        (() => {
          var E = {
            /***/
            173: (
              /***/
              (O) => {
                var p = function() {
                  this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
                }, w = -1, M = 1, x = 0;
                p.Diff = function(c, o) {
                  return [c, o];
                }, p.prototype.diff_main = function(c, o, v, d) {
                  typeof d > "u" && (this.Diff_Timeout <= 0 ? d = Number.MAX_VALUE : d = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
                  var y = d;
                  if (c == null || o == null)
                    throw new Error("Null input. (diff_main)");
                  if (c == o)
                    return c ? [new p.Diff(x, c)] : [];
                  typeof v > "u" && (v = !0);
                  var f = v, L = this.diff_commonPrefix(c, o), T = c.substring(0, L);
                  c = c.substring(L), o = o.substring(L), L = this.diff_commonSuffix(c, o);
                  var C = c.substring(c.length - L);
                  c = c.substring(0, c.length - L), o = o.substring(0, o.length - L);
                  var S = this.diff_compute_(c, o, f, y);
                  return T && S.unshift(new p.Diff(x, T)), C && S.push(new p.Diff(x, C)), this.diff_cleanupMerge(S), S;
                }, p.prototype.diff_compute_ = function(c, o, v, d) {
                  var y;
                  if (!c)
                    return [new p.Diff(M, o)];
                  if (!o)
                    return [new p.Diff(w, c)];
                  var f = c.length > o.length ? c : o, L = c.length > o.length ? o : c, T = f.indexOf(L);
                  if (T != -1)
                    return y = [new p.Diff(M, f.substring(0, T)), new p.Diff(x, L), new p.Diff(M, f.substring(T + L.length))], c.length > o.length && (y[0][0] = y[2][0] = w), y;
                  if (L.length == 1)
                    return [new p.Diff(w, c), new p.Diff(M, o)];
                  var C = this.diff_halfMatch_(c, o);
                  if (C) {
                    var S = C[0], s = C[1], _ = C[2], P = C[3], j = C[4], H = this.diff_main(S, _, v, d), W = this.diff_main(s, P, v, d);
                    return H.concat([new p.Diff(x, j)], W);
                  }
                  return v && c.length > 100 && o.length > 100 ? this.diff_lineMode_(c, o, d) : this.diff_bisect_(c, o, d);
                }, p.prototype.diff_lineMode_ = function(c, o, v) {
                  var d = this.diff_linesToChars_(c, o);
                  c = d.chars1, o = d.chars2;
                  var y = d.lineArray, f = this.diff_main(c, o, !1, v);
                  this.diff_charsToLines_(f, y), this.diff_cleanupSemantic(f), f.push(new p.Diff(x, ""));
                  for (var L = 0, T = 0, C = 0, S = "", s = ""; L < f.length; ) {
                    switch (f[L][0]) {
                      case M:
                        C++, s += f[L][1];
                        break;
                      case w:
                        T++, S += f[L][1];
                        break;
                      case x:
                        if (T >= 1 && C >= 1) {
                          f.splice(L - T - C, T + C), L = L - T - C;
                          for (var _ = this.diff_main(S, s, !1, v), P = _.length - 1; P >= 0; P--)
                            f.splice(L, 0, _[P]);
                          L = L + _.length;
                        }
                        C = 0, T = 0, S = "", s = "";
                        break;
                    }
                    L++;
                  }
                  return f.pop(), f;
                }, p.prototype.diff_bisect_ = function(c, o, v) {
                  for (var d = c.length, y = o.length, f = Math.ceil((d + y) / 2), L = f, T = 2 * f, C = new Array(T), S = new Array(T), s = 0; s < T; s++)
                    C[s] = -1, S[s] = -1;
                  C[L + 1] = 0, S[L + 1] = 0;
                  for (var _ = d - y, P = _ % 2 != 0, j = 0, H = 0, W = 0, Q = 0, $ = 0; $ < f && !((/* @__PURE__ */ new Date()).getTime() > v); $++) {
                    for (var I = -$ + j; I <= $ - H; I += 2) {
                      var F = L + I, J;
                      I == -$ || I != $ && C[F - 1] < C[F + 1] ? J = C[F + 1] : J = C[F - 1] + 1;
                      for (var ae = J - I; J < d && ae < y && c.charAt(J) == o.charAt(ae); )
                        J++, ae++;
                      if (C[F] = J, J > d)
                        H += 2;
                      else if (ae > y)
                        j += 2;
                      else if (P) {
                        var ce = L + _ - I;
                        if (ce >= 0 && ce < T && S[ce] != -1) {
                          var de = d - S[ce];
                          if (J >= de)
                            return this.diff_bisectSplit_(c, o, J, ae, v);
                        }
                      }
                    }
                    for (var pe = -$ + W; pe <= $ - Q; pe += 2) {
                      var ce = L + pe, de;
                      pe == -$ || pe != $ && S[ce - 1] < S[ce + 1] ? de = S[ce + 1] : de = S[ce - 1] + 1;
                      for (var ye = de - pe; de < d && ye < y && c.charAt(d - de - 1) == o.charAt(y - ye - 1); )
                        de++, ye++;
                      if (S[ce] = de, de > d)
                        Q += 2;
                      else if (ye > y)
                        W += 2;
                      else if (!P) {
                        var F = L + _ - pe;
                        if (F >= 0 && F < T && C[F] != -1) {
                          var J = C[F], ae = L + J - F;
                          if (de = d - de, J >= de)
                            return this.diff_bisectSplit_(c, o, J, ae, v);
                        }
                      }
                    }
                  }
                  return [new p.Diff(w, c), new p.Diff(M, o)];
                }, p.prototype.diff_bisectSplit_ = function(c, o, v, d, y) {
                  var f = c.substring(0, v), L = o.substring(0, d), T = c.substring(v), C = o.substring(d), S = this.diff_main(f, L, !1, y), s = this.diff_main(T, C, !1, y);
                  return S.concat(s);
                }, p.prototype.diff_linesToChars_ = function(c, o) {
                  var v = [], d = {};
                  v[0] = "";
                  function y(C) {
                    for (var S = "", s = 0, _ = -1, P = v.length; _ < C.length - 1; ) {
                      _ = C.indexOf(`
`, s), _ == -1 && (_ = C.length - 1);
                      var j = C.substring(s, _ + 1);
                      (d.hasOwnProperty ? d.hasOwnProperty(j) : d[j] !== void 0) ? S += String.fromCharCode(d[j]) : (P == f && (j = C.substring(s), _ = C.length), S += String.fromCharCode(P), d[j] = P, v[P++] = j), s = _ + 1;
                    }
                    return S;
                  }
                  var f = 4e4, L = y(c);
                  f = 65535;
                  var T = y(o);
                  return {
                    chars1: L,
                    chars2: T,
                    lineArray: v
                  };
                }, p.prototype.diff_charsToLines_ = function(c, o) {
                  for (var v = 0; v < c.length; v++) {
                    for (var d = c[v][1], y = [], f = 0; f < d.length; f++)
                      y[f] = o[d.charCodeAt(f)];
                    c[v][1] = y.join("");
                  }
                }, p.prototype.diff_commonPrefix = function(c, o) {
                  if (!c || !o || c.charAt(0) != o.charAt(0))
                    return 0;
                  for (var v = 0, d = Math.min(c.length, o.length), y = d, f = 0; v < y; )
                    c.substring(f, y) == o.substring(f, y) ? (v = y, f = v) : d = y, y = Math.floor((d - v) / 2 + v);
                  return y;
                }, p.prototype.diff_commonSuffix = function(c, o) {
                  if (!c || !o || c.charAt(c.length - 1) != o.charAt(o.length - 1))
                    return 0;
                  for (var v = 0, d = Math.min(c.length, o.length), y = d, f = 0; v < y; )
                    c.substring(c.length - y, c.length - f) == o.substring(o.length - y, o.length - f) ? (v = y, f = v) : d = y, y = Math.floor((d - v) / 2 + v);
                  return y;
                }, p.prototype.diff_commonOverlap_ = function(c, o) {
                  var v = c.length, d = o.length;
                  if (v == 0 || d == 0)
                    return 0;
                  v > d ? c = c.substring(v - d) : v < d && (o = o.substring(0, v));
                  var y = Math.min(v, d);
                  if (c == o)
                    return y;
                  for (var f = 0, L = 1; ; ) {
                    var T = c.substring(y - L), C = o.indexOf(T);
                    if (C == -1)
                      return f;
                    L += C, (C == 0 || c.substring(y - L) == o.substring(0, L)) && (f = L, L++);
                  }
                }, p.prototype.diff_halfMatch_ = function(c, o) {
                  if (this.Diff_Timeout <= 0)
                    return null;
                  var v = c.length > o.length ? c : o, d = c.length > o.length ? o : c;
                  if (v.length < 4 || d.length * 2 < v.length)
                    return null;
                  var y = this;
                  function f(H, W, Q) {
                    for (var $ = H.substring(Q, Q + Math.floor(H.length / 4)), I = -1, F = "", J, ae, ce, de; (I = W.indexOf($, I + 1)) != -1; ) {
                      var pe = y.diff_commonPrefix(H.substring(Q), W.substring(I)), ye = y.diff_commonSuffix(H.substring(0, Q), W.substring(0, I));
                      F.length < ye + pe && (F = W.substring(I - ye, I) + W.substring(I, I + pe), J = H.substring(0, Q - ye), ae = H.substring(Q + pe), ce = W.substring(0, I - ye), de = W.substring(I + pe));
                    }
                    return F.length * 2 >= H.length ? [J, ae, ce, de, F] : null;
                  }
                  var L = f(v, d, Math.ceil(v.length / 4)), T = f(v, d, Math.ceil(v.length / 2)), C;
                  if (!L && !T)
                    return null;
                  T ? L ? C = L[4].length > T[4].length ? L : T : C = T : C = L;
                  var S, s, _, P;
                  c.length > o.length ? (S = C[0], s = C[1], _ = C[2], P = C[3]) : (_ = C[0], P = C[1], S = C[2], s = C[3]);
                  var j = C[4];
                  return [S, s, _, P, j];
                }, p.prototype.diff_cleanupSemantic = function(c) {
                  for (var o = !1, v = [], d = 0, y = null, f = 0, L = 0, T = 0, C = 0, S = 0; f < c.length; )
                    c[f][0] == x ? (v[d++] = f, L = C, T = S, C = 0, S = 0, y = c[f][1]) : (c[f][0] == M ? C += c[f][1].length : S += c[f][1].length, y && y.length <= Math.max(L, T) && y.length <= Math.max(C, S) && (c.splice(v[d - 1], 0, new p.Diff(w, y)), c[v[d - 1] + 1][0] = M, d--, d--, f = d > 0 ? v[d - 1] : -1, L = 0, T = 0, C = 0, S = 0, y = null, o = !0)), f++;
                  for (o && this.diff_cleanupMerge(c), this.diff_cleanupSemanticLossless(c), f = 1; f < c.length; ) {
                    if (c[f - 1][0] == w && c[f][0] == M) {
                      var s = c[f - 1][1], _ = c[f][1], P = this.diff_commonOverlap_(s, _), j = this.diff_commonOverlap_(_, s);
                      P >= j ? (P >= s.length / 2 || P >= _.length / 2) && (c.splice(f, 0, new p.Diff(x, _.substring(0, P))), c[f - 1][1] = s.substring(0, s.length - P), c[f + 1][1] = _.substring(P), f++) : (j >= s.length / 2 || j >= _.length / 2) && (c.splice(f, 0, new p.Diff(x, s.substring(0, j))), c[f - 1][0] = M, c[f - 1][1] = _.substring(0, _.length - j), c[f + 1][0] = w, c[f + 1][1] = s.substring(j), f++), f++;
                    }
                    f++;
                  }
                }, p.prototype.diff_cleanupSemanticLossless = function(c) {
                  function o(j, H) {
                    if (!j || !H)
                      return 6;
                    var W = j.charAt(j.length - 1), Q = H.charAt(0), $ = W.match(p.nonAlphaNumericRegex_), I = Q.match(p.nonAlphaNumericRegex_), F = $ && W.match(p.whitespaceRegex_), J = I && Q.match(p.whitespaceRegex_), ae = F && W.match(p.linebreakRegex_), ce = J && Q.match(p.linebreakRegex_), de = ae && j.match(p.blanklineEndRegex_), pe = ce && H.match(p.blanklineStartRegex_);
                    return de || pe ? 5 : ae || ce ? 4 : $ && !F && J ? 3 : F || J ? 2 : $ || I ? 1 : 0;
                  }
                  for (var v = 1; v < c.length - 1; ) {
                    if (c[v - 1][0] == x && c[v + 1][0] == x) {
                      var d = c[v - 1][1], y = c[v][1], f = c[v + 1][1], L = this.diff_commonSuffix(d, y);
                      if (L) {
                        var T = y.substring(y.length - L);
                        d = d.substring(0, d.length - L), y = T + y.substring(0, y.length - L), f = T + f;
                      }
                      for (var C = d, S = y, s = f, _ = o(d, y) + o(y, f); y.charAt(0) === f.charAt(0); ) {
                        d += y.charAt(0), y = y.substring(1) + f.charAt(0), f = f.substring(1);
                        var P = o(d, y) + o(y, f);
                        P >= _ && (_ = P, C = d, S = y, s = f);
                      }
                      c[v - 1][1] != C && (C ? c[v - 1][1] = C : (c.splice(v - 1, 1), v--), c[v][1] = S, s ? c[v + 1][1] = s : (c.splice(v + 1, 1), v--));
                    }
                    v++;
                  }
                }, p.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, p.whitespaceRegex_ = /\s/, p.linebreakRegex_ = /[\r\n]/, p.blanklineEndRegex_ = /\n\r?\n$/, p.blanklineStartRegex_ = /^\r?\n\r?\n/, p.prototype.diff_cleanupEfficiency = function(c) {
                  for (var o = !1, v = [], d = 0, y = null, f = 0, L = !1, T = !1, C = !1, S = !1; f < c.length; )
                    c[f][0] == x ? (c[f][1].length < this.Diff_EditCost && (C || S) ? (v[d++] = f, L = C, T = S, y = c[f][1]) : (d = 0, y = null), C = S = !1) : (c[f][0] == w ? S = !0 : C = !0, y && (L && T && C && S || y.length < this.Diff_EditCost / 2 && L + T + C + S == 3) && (c.splice(v[d - 1], 0, new p.Diff(w, y)), c[v[d - 1] + 1][0] = M, d--, y = null, L && T ? (C = S = !0, d = 0) : (d--, f = d > 0 ? v[d - 1] : -1, C = S = !1), o = !0)), f++;
                  o && this.diff_cleanupMerge(c);
                }, p.prototype.diff_cleanupMerge = function(c) {
                  c.push(new p.Diff(x, ""));
                  for (var o = 0, v = 0, d = 0, y = "", f = "", L; o < c.length; )
                    switch (c[o][0]) {
                      case M:
                        d++, f += c[o][1], o++;
                        break;
                      case w:
                        v++, y += c[o][1], o++;
                        break;
                      case x:
                        v + d > 1 ? (v !== 0 && d !== 0 && (L = this.diff_commonPrefix(f, y), L !== 0 && (o - v - d > 0 && c[o - v - d - 1][0] == x ? c[o - v - d - 1][1] += f.substring(0, L) : (c.splice(0, 0, new p.Diff(x, f.substring(0, L))), o++), f = f.substring(L), y = y.substring(L)), L = this.diff_commonSuffix(f, y), L !== 0 && (c[o][1] = f.substring(f.length - L) + c[o][1], f = f.substring(0, f.length - L), y = y.substring(0, y.length - L))), o -= v + d, c.splice(o, v + d), y.length && (c.splice(o, 0, new p.Diff(w, y)), o++), f.length && (c.splice(o, 0, new p.Diff(M, f)), o++), o++) : o !== 0 && c[o - 1][0] == x ? (c[o - 1][1] += c[o][1], c.splice(o, 1)) : o++, d = 0, v = 0, y = "", f = "";
                        break;
                    }
                  c[c.length - 1][1] === "" && c.pop();
                  var T = !1;
                  for (o = 1; o < c.length - 1; )
                    c[o - 1][0] == x && c[o + 1][0] == x && (c[o][1].substring(c[o][1].length - c[o - 1][1].length) == c[o - 1][1] ? (c[o][1] = c[o - 1][1] + c[o][1].substring(0, c[o][1].length - c[o - 1][1].length), c[o + 1][1] = c[o - 1][1] + c[o + 1][1], c.splice(o - 1, 1), T = !0) : c[o][1].substring(0, c[o + 1][1].length) == c[o + 1][1] && (c[o - 1][1] += c[o + 1][1], c[o][1] = c[o][1].substring(c[o + 1][1].length) + c[o + 1][1], c.splice(o + 1, 1), T = !0)), o++;
                  T && this.diff_cleanupMerge(c);
                }, p.prototype.diff_xIndex = function(c, o) {
                  var v = 0, d = 0, y = 0, f = 0, L;
                  for (L = 0; L < c.length && (c[L][0] !== M && (v += c[L][1].length), c[L][0] !== w && (d += c[L][1].length), !(v > o)); L++)
                    y = v, f = d;
                  return c.length != L && c[L][0] === w ? f : f + (o - y);
                }, p.prototype.diff_prettyHtml = function(c) {
                  for (var o = [], v = /&/g, d = /</g, y = />/g, f = /\n/g, L = 0; L < c.length; L++) {
                    var T = c[L][0], C = c[L][1], S = C.replace(v, "&amp;").replace(d, "&lt;").replace(y, "&gt;").replace(f, "&para;<br>");
                    switch (T) {
                      case M:
                        o[L] = '<ins style="background:#e6ffe6;">' + S + "</ins>";
                        break;
                      case w:
                        o[L] = '<del style="background:#ffe6e6;">' + S + "</del>";
                        break;
                      case x:
                        o[L] = "<span>" + S + "</span>";
                        break;
                    }
                  }
                  return o.join("");
                }, p.prototype.diff_text1 = function(c) {
                  for (var o = [], v = 0; v < c.length; v++)
                    c[v][0] !== M && (o[v] = c[v][1]);
                  return o.join("");
                }, p.prototype.diff_text2 = function(c) {
                  for (var o = [], v = 0; v < c.length; v++)
                    c[v][0] !== w && (o[v] = c[v][1]);
                  return o.join("");
                }, p.prototype.diff_levenshtein = function(c) {
                  for (var o = 0, v = 0, d = 0, y = 0; y < c.length; y++) {
                    var f = c[y][0], L = c[y][1];
                    switch (f) {
                      case M:
                        v += L.length;
                        break;
                      case w:
                        d += L.length;
                        break;
                      case x:
                        o += Math.max(v, d), v = 0, d = 0;
                        break;
                    }
                  }
                  return o += Math.max(v, d), o;
                }, p.prototype.diff_toDelta = function(c) {
                  for (var o = [], v = 0; v < c.length; v++)
                    switch (c[v][0]) {
                      case M:
                        o[v] = "+" + encodeURI(c[v][1]);
                        break;
                      case w:
                        o[v] = "-" + c[v][1].length;
                        break;
                      case x:
                        o[v] = "=" + c[v][1].length;
                        break;
                    }
                  return o.join("	").replace(/%20/g, " ");
                }, p.prototype.diff_fromDelta = function(c, o) {
                  for (var v = [], d = 0, y = 0, f = o.split(/\t/g), L = 0; L < f.length; L++) {
                    var T = f[L].substring(1);
                    switch (f[L].charAt(0)) {
                      case "+":
                        try {
                          v[d++] = new p.Diff(M, decodeURI(T));
                        } catch {
                          throw new Error("Illegal escape in diff_fromDelta: " + T);
                        }
                        break;
                      case "-":
                      // Fall through.
                      case "=":
                        var C = parseInt(T, 10);
                        if (isNaN(C) || C < 0)
                          throw new Error("Invalid number in diff_fromDelta: " + T);
                        var S = c.substring(y, y += C);
                        f[L].charAt(0) == "=" ? v[d++] = new p.Diff(x, S) : v[d++] = new p.Diff(w, S);
                        break;
                      default:
                        if (f[L])
                          throw new Error("Invalid diff operation in diff_fromDelta: " + f[L]);
                    }
                  }
                  if (y != c.length)
                    throw new Error("Delta length (" + y + ") does not equal source text length (" + c.length + ").");
                  return v;
                }, p.prototype.match_main = function(c, o, v) {
                  if (c == null || o == null || v == null)
                    throw new Error("Null input. (match_main)");
                  return v = Math.max(0, Math.min(v, c.length)), c == o ? 0 : c.length ? c.substring(v, v + o.length) == o ? v : this.match_bitap_(c, o, v) : -1;
                }, p.prototype.match_bitap_ = function(c, o, v) {
                  if (o.length > this.Match_MaxBits)
                    throw new Error("Pattern too long for this browser.");
                  var d = this.match_alphabet_(o), y = this;
                  function f(J, ae) {
                    var ce = J / o.length, de = Math.abs(v - ae);
                    return y.Match_Distance ? ce + de / y.Match_Distance : de ? 1 : ce;
                  }
                  var L = this.Match_Threshold, T = c.indexOf(o, v);
                  T != -1 && (L = Math.min(f(0, T), L), T = c.lastIndexOf(o, v + o.length), T != -1 && (L = Math.min(f(0, T), L)));
                  var C = 1 << o.length - 1;
                  T = -1;
                  for (var S, s, _ = o.length + c.length, P, j = 0; j < o.length; j++) {
                    for (S = 0, s = _; S < s; )
                      f(j, v + s) <= L ? S = s : _ = s, s = Math.floor((_ - S) / 2 + S);
                    _ = s;
                    var H = Math.max(1, v - s + 1), W = Math.min(v + s, c.length) + o.length, Q = Array(W + 2);
                    Q[W + 1] = (1 << j) - 1;
                    for (var $ = W; $ >= H; $--) {
                      var I = d[c.charAt($ - 1)];
                      if (j === 0 ? Q[$] = (Q[$ + 1] << 1 | 1) & I : Q[$] = (Q[$ + 1] << 1 | 1) & I | ((P[$ + 1] | P[$]) << 1 | 1) | P[$ + 1], Q[$] & C) {
                        var F = f(j, $ - 1);
                        if (F <= L)
                          if (L = F, T = $ - 1, T > v)
                            H = Math.max(1, 2 * v - T);
                          else
                            break;
                      }
                    }
                    if (f(j + 1, v) > L)
                      break;
                    P = Q;
                  }
                  return T;
                }, p.prototype.match_alphabet_ = function(c) {
                  for (var o = {}, v = 0; v < c.length; v++)
                    o[c.charAt(v)] = 0;
                  for (var v = 0; v < c.length; v++)
                    o[c.charAt(v)] |= 1 << c.length - v - 1;
                  return o;
                }, p.prototype.patch_addContext_ = function(c, o) {
                  if (o.length != 0) {
                    if (c.start2 === null)
                      throw Error("patch not initialized");
                    for (var v = o.substring(c.start2, c.start2 + c.length1), d = 0; o.indexOf(v) != o.lastIndexOf(v) && v.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
                      d += this.Patch_Margin, v = o.substring(c.start2 - d, c.start2 + c.length1 + d);
                    d += this.Patch_Margin;
                    var y = o.substring(c.start2 - d, c.start2);
                    y && c.diffs.unshift(new p.Diff(x, y));
                    var f = o.substring(c.start2 + c.length1, c.start2 + c.length1 + d);
                    f && c.diffs.push(new p.Diff(x, f)), c.start1 -= y.length, c.start2 -= y.length, c.length1 += y.length + f.length, c.length2 += y.length + f.length;
                  }
                }, p.prototype.patch_make = function(c, o, v) {
                  var d, y;
                  if (typeof c == "string" && typeof o == "string" && typeof v > "u")
                    d = /** @type {string} */
                    c, y = this.diff_main(
                      d,
                      /** @type {string} */
                      o,
                      !0
                    ), y.length > 2 && (this.diff_cleanupSemantic(y), this.diff_cleanupEfficiency(y));
                  else if (c && typeof c == "object" && typeof o > "u" && typeof v > "u")
                    y = /** @type {!Array.<!diff_match_patch.Diff>} */
                    c, d = this.diff_text1(y);
                  else if (typeof c == "string" && o && typeof o == "object" && typeof v > "u")
                    d = /** @type {string} */
                    c, y = /** @type {!Array.<!diff_match_patch.Diff>} */
                    o;
                  else if (typeof c == "string" && typeof o == "string" && v && typeof v == "object")
                    d = /** @type {string} */
                    c, y = /** @type {!Array.<!diff_match_patch.Diff>} */
                    v;
                  else
                    throw new Error("Unknown call format to patch_make.");
                  if (y.length === 0)
                    return [];
                  for (var f = [], L = new p.patch_obj(), T = 0, C = 0, S = 0, s = d, _ = d, P = 0; P < y.length; P++) {
                    var j = y[P][0], H = y[P][1];
                    switch (!T && j !== x && (L.start1 = C, L.start2 = S), j) {
                      case M:
                        L.diffs[T++] = y[P], L.length2 += H.length, _ = _.substring(0, S) + H + _.substring(S);
                        break;
                      case w:
                        L.length1 += H.length, L.diffs[T++] = y[P], _ = _.substring(0, S) + _.substring(S + H.length);
                        break;
                      case x:
                        H.length <= 2 * this.Patch_Margin && T && y.length != P + 1 ? (L.diffs[T++] = y[P], L.length1 += H.length, L.length2 += H.length) : H.length >= 2 * this.Patch_Margin && T && (this.patch_addContext_(L, s), f.push(L), L = new p.patch_obj(), T = 0, s = _, C = S);
                        break;
                    }
                    j !== M && (C += H.length), j !== w && (S += H.length);
                  }
                  return T && (this.patch_addContext_(L, s), f.push(L)), f;
                }, p.prototype.patch_deepCopy = function(c) {
                  for (var o = [], v = 0; v < c.length; v++) {
                    var d = c[v], y = new p.patch_obj();
                    y.diffs = [];
                    for (var f = 0; f < d.diffs.length; f++)
                      y.diffs[f] = new p.Diff(d.diffs[f][0], d.diffs[f][1]);
                    y.start1 = d.start1, y.start2 = d.start2, y.length1 = d.length1, y.length2 = d.length2, o[v] = y;
                  }
                  return o;
                }, p.prototype.patch_apply = function(c, o) {
                  if (c.length == 0)
                    return [o, []];
                  c = this.patch_deepCopy(c);
                  var v = this.patch_addPadding(c);
                  o = v + o + v, this.patch_splitMax(c);
                  for (var d = 0, y = [], f = 0; f < c.length; f++) {
                    var L = c[f].start2 + d, T = this.diff_text1(c[f].diffs), C, S = -1;
                    if (T.length > this.Match_MaxBits ? (C = this.match_main(o, T.substring(0, this.Match_MaxBits), L), C != -1 && (S = this.match_main(o, T.substring(T.length - this.Match_MaxBits), L + T.length - this.Match_MaxBits), (S == -1 || C >= S) && (C = -1))) : C = this.match_main(o, T, L), C == -1)
                      y[f] = !1, d -= c[f].length2 - c[f].length1;
                    else {
                      y[f] = !0, d = C - L;
                      var s;
                      if (S == -1 ? s = o.substring(C, C + T.length) : s = o.substring(C, S + this.Match_MaxBits), T == s)
                        o = o.substring(0, C) + this.diff_text2(c[f].diffs) + o.substring(C + T.length);
                      else {
                        var _ = this.diff_main(T, s, !1);
                        if (T.length > this.Match_MaxBits && this.diff_levenshtein(_) / T.length > this.Patch_DeleteThreshold)
                          y[f] = !1;
                        else {
                          this.diff_cleanupSemanticLossless(_);
                          for (var P = 0, j, H = 0; H < c[f].diffs.length; H++) {
                            var W = c[f].diffs[H];
                            W[0] !== x && (j = this.diff_xIndex(_, P)), W[0] === M ? o = o.substring(0, C + j) + W[1] + o.substring(C + j) : W[0] === w && (o = o.substring(0, C + j) + o.substring(C + this.diff_xIndex(_, P + W[1].length))), W[0] !== w && (P += W[1].length);
                          }
                        }
                      }
                    }
                  }
                  return o = o.substring(v.length, o.length - v.length), [o, y];
                }, p.prototype.patch_addPadding = function(c) {
                  for (var o = this.Patch_Margin, v = "", d = 1; d <= o; d++)
                    v += String.fromCharCode(d);
                  for (var d = 0; d < c.length; d++)
                    c[d].start1 += o, c[d].start2 += o;
                  var y = c[0], f = y.diffs;
                  if (f.length == 0 || f[0][0] != x)
                    f.unshift(new p.Diff(x, v)), y.start1 -= o, y.start2 -= o, y.length1 += o, y.length2 += o;
                  else if (o > f[0][1].length) {
                    var L = o - f[0][1].length;
                    f[0][1] = v.substring(f[0][1].length) + f[0][1], y.start1 -= L, y.start2 -= L, y.length1 += L, y.length2 += L;
                  }
                  if (y = c[c.length - 1], f = y.diffs, f.length == 0 || f[f.length - 1][0] != x)
                    f.push(new p.Diff(x, v)), y.length1 += o, y.length2 += o;
                  else if (o > f[f.length - 1][1].length) {
                    var L = o - f[f.length - 1][1].length;
                    f[f.length - 1][1] += v.substring(0, L), y.length1 += L, y.length2 += L;
                  }
                  return v;
                }, p.prototype.patch_splitMax = function(c) {
                  for (var o = this.Match_MaxBits, v = 0; v < c.length; v++)
                    if (!(c[v].length1 <= o)) {
                      var d = c[v];
                      c.splice(v--, 1);
                      for (var y = d.start1, f = d.start2, L = ""; d.diffs.length !== 0; ) {
                        var T = new p.patch_obj(), C = !0;
                        for (T.start1 = y - L.length, T.start2 = f - L.length, L !== "" && (T.length1 = T.length2 = L.length, T.diffs.push(new p.Diff(x, L))); d.diffs.length !== 0 && T.length1 < o - this.Patch_Margin; ) {
                          var S = d.diffs[0][0], s = d.diffs[0][1];
                          S === M ? (T.length2 += s.length, f += s.length, T.diffs.push(d.diffs.shift()), C = !1) : S === w && T.diffs.length == 1 && T.diffs[0][0] == x && s.length > 2 * o ? (T.length1 += s.length, y += s.length, C = !1, T.diffs.push(new p.Diff(S, s)), d.diffs.shift()) : (s = s.substring(0, o - T.length1 - this.Patch_Margin), T.length1 += s.length, y += s.length, S === x ? (T.length2 += s.length, f += s.length) : C = !1, T.diffs.push(new p.Diff(S, s)), s == d.diffs[0][1] ? d.diffs.shift() : d.diffs[0][1] = d.diffs[0][1].substring(s.length));
                        }
                        L = this.diff_text2(T.diffs), L = L.substring(L.length - this.Patch_Margin);
                        var _ = this.diff_text1(d.diffs).substring(0, this.Patch_Margin);
                        _ !== "" && (T.length1 += _.length, T.length2 += _.length, T.diffs.length !== 0 && T.diffs[T.diffs.length - 1][0] === x ? T.diffs[T.diffs.length - 1][1] += _ : T.diffs.push(new p.Diff(x, _))), C || c.splice(++v, 0, T);
                      }
                    }
                }, p.prototype.patch_toText = function(c) {
                  for (var o = [], v = 0; v < c.length; v++)
                    o[v] = c[v];
                  return o.join("");
                }, p.prototype.patch_fromText = function(c) {
                  var o = [];
                  if (!c)
                    return o;
                  for (var v = c.split(`
`), d = 0, y = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; d < v.length; ) {
                    var f = v[d].match(y);
                    if (!f)
                      throw new Error("Invalid patch string: " + v[d]);
                    var L = new p.patch_obj();
                    for (o.push(L), L.start1 = parseInt(f[1], 10), f[2] === "" ? (L.start1--, L.length1 = 1) : f[2] == "0" ? L.length1 = 0 : (L.start1--, L.length1 = parseInt(f[2], 10)), L.start2 = parseInt(f[3], 10), f[4] === "" ? (L.start2--, L.length2 = 1) : f[4] == "0" ? L.length2 = 0 : (L.start2--, L.length2 = parseInt(f[4], 10)), d++; d < v.length; ) {
                      var T = v[d].charAt(0);
                      try {
                        var C = decodeURI(v[d].substring(1));
                      } catch {
                        throw new Error("Illegal escape in patch_fromText: " + C);
                      }
                      if (T == "-")
                        L.diffs.push(new p.Diff(w, C));
                      else if (T == "+")
                        L.diffs.push(new p.Diff(M, C));
                      else if (T == " ")
                        L.diffs.push(new p.Diff(x, C));
                      else {
                        if (T == "@")
                          break;
                        if (T !== "") throw new Error('Invalid patch mode "' + T + '" in: ' + C);
                      }
                      d++;
                    }
                  }
                  return o;
                }, p.patch_obj = function() {
                  this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
                }, p.patch_obj.prototype.toString = function() {
                  var c, o;
                  this.length1 === 0 ? c = this.start1 + ",0" : this.length1 == 1 ? c = this.start1 + 1 : c = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? o = this.start2 + ",0" : this.length2 == 1 ? o = this.start2 + 1 : o = this.start2 + 1 + "," + this.length2;
                  for (var v = ["@@ -" + c + " +" + o + ` @@
`], d, y = 0; y < this.diffs.length; y++) {
                    switch (this.diffs[y][0]) {
                      case M:
                        d = "+";
                        break;
                      case w:
                        d = "-";
                        break;
                      case x:
                        d = " ";
                        break;
                    }
                    v[y + 1] = d + encodeURI(this.diffs[y][1]) + `
`;
                  }
                  return v.join("").replace(/%20/g, " ");
                }, O.exports = p, O.exports.diff_match_patch = p, O.exports.DIFF_DELETE = w, O.exports.DIFF_INSERT = M, O.exports.DIFF_EQUAL = x;
              }
            ),
            /***/
            408: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  default: () => (
                    /* binding */
                    Ue
                  )
                });
                var M = w(135), x = w(840), c = w(775), o = w(428), v = w(325), d = w(483), y = w(999), f = function(q) {
                  q === void 0 && (q = document);
                  var we = function(ne) {
                    var V = document.createElement("img");
                    V.src = ne.getAttribute("data-src"), V.addEventListener("load", function() {
                      !ne.getAttribute("style") && !ne.getAttribute("class") && !ne.getAttribute("width") && !ne.getAttribute("height") && V.naturalHeight > V.naturalWidth && V.naturalWidth / V.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && V.naturalHeight > window.innerHeight - 40 && (ne.style.height = window.innerHeight - 40 + "px"), ne.src = V.src;
                    }), ne.removeAttribute("data-src");
                  };
                  if (!("IntersectionObserver" in window))
                    return q.querySelectorAll("img").forEach(function(ne) {
                      ne.getAttribute("data-src") && we(ne);
                    }), !1;
                  window.vditorImageIntersectionObserver ? (window.vditorImageIntersectionObserver.disconnect(), q.querySelectorAll("img").forEach(function(ne) {
                    window.vditorImageIntersectionObserver.observe(ne);
                  })) : (window.vditorImageIntersectionObserver = new IntersectionObserver(function(ne) {
                    ne.forEach(function(V) {
                      (typeof V.isIntersecting > "u" ? V.intersectionRatio !== 0 : V.isIntersecting) && V.target.getAttribute("data-src") && we(V.target);
                    });
                  }), q.querySelectorAll("img").forEach(function(ne) {
                    window.vditorImageIntersectionObserver.observe(ne);
                  }));
                }, L = w(472), T = w(280), C = w(637), S = w(825), s = w(11), _ = w(194), P = w(436), j = w(229), H = w(145), W = w(538), Q = w(413), $ = w(106), I = w(673), F = function(q) {
                  document.querySelectorAll(".vditor-anchor").forEach(function(we) {
                    q === 1 && we.classList.add("vditor-anchor--left"), we.onclick = function() {
                      var ne = we.getAttribute("href").substr(1), V = document.getElementById("vditorAnchor-" + ne).offsetTop;
                      document.querySelector("html").scrollTop = V;
                    };
                  }), window.onhashchange = function() {
                    var we = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
                    we && (document.querySelector("html").scrollTop = we.offsetTop);
                  };
                }, J = w(214), ae = w(810), ce = function(q, we) {
                  if (we === void 0 && (we = "zh_CN"), !(typeof speechSynthesis > "u" || typeof SpeechSynthesisUtterance > "u")) {
                    var ne = function() {
                      var X = speechSynthesis.getVoices(), U, he;
                      return X.forEach(function(fe) {
                        fe.lang === we.replace("_", "-") && (U = fe), fe.default && (he = fe);
                      }), U || (U = he), U;
                    }, V = '<svg><use xlink:href="#vditor-icon-play"></use></svg>', ve = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                    document.getElementById("vditorIconScript") || (V = '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>', ve = '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>');
                    var ie = document.querySelector(".vditor-speech");
                    ie || (ie = document.createElement("button"), ie.className = "vditor-speech", q.insertAdjacentElement("beforeend", ie), speechSynthesis.onvoiceschanged !== void 0 && (speechSynthesis.onvoiceschanged = ne));
                    var _e = ne(), Ce = new SpeechSynthesisUtterance();
                    Ce.voice = _e, Ce.onend = Ce.onerror = function() {
                      ie.style.display = "none", speechSynthesis.cancel(), ie.classList.remove("vditor-speech--current"), ie.innerHTML = V;
                    }, q.addEventListener(window.ontouchstart !== void 0 ? "touchend" : "click", function(X) {
                      var U = X.target;
                      if (U.classList.contains("vditor-speech") || U.parentElement.classList.contains("vditor-speech")) {
                        ie.classList.contains("vditor-speech--current") ? speechSynthesis.speaking && (speechSynthesis.paused ? (speechSynthesis.resume(), ie.innerHTML = ve) : (speechSynthesis.pause(), ie.innerHTML = V)) : (Ce.text = ie.getAttribute("data-text"), speechSynthesis.speak(Ce), ie.classList.add("vditor-speech--current"), ie.innerHTML = ve), (0, ae.Hc)(window.vditorSpeechRange), q.focus();
                        return;
                      }
                      if (ie.style.display = "none", speechSynthesis.cancel(), ie.classList.remove("vditor-speech--current"), ie.innerHTML = V, getSelection().rangeCount !== 0) {
                        var he = getSelection().getRangeAt(0), fe = he.toString().trim();
                        if (fe) {
                          window.vditorSpeechRange = he.cloneRange();
                          var le = he.getBoundingClientRect();
                          ie.innerHTML = V, ie.style.display = "block", ie.style.top = le.top + le.height + document.querySelector("html").scrollTop - 20 + "px", window.ontouchstart !== void 0 ? ie.style.left = X.changedTouches[X.changedTouches.length - 1].pageX + 2 + "px" : ie.style.left = X.clientX + 2 + "px", ie.setAttribute("data-text", fe);
                        }
                      }
                    });
                  }
                }, de = function(q, we, ne, V) {
                  function ve(ie) {
                    return ie instanceof ne ? ie : new ne(function(_e) {
                      _e(ie);
                    });
                  }
                  return new (ne || (ne = Promise))(function(ie, _e) {
                    function Ce(he) {
                      try {
                        U(V.next(he));
                      } catch (fe) {
                        _e(fe);
                      }
                    }
                    function X(he) {
                      try {
                        U(V.throw(he));
                      } catch (fe) {
                        _e(fe);
                      }
                    }
                    function U(he) {
                      he.done ? ie(he.value) : ve(he.value).then(Ce, X);
                    }
                    U((V = V.apply(q, we || [])).next());
                  });
                }, pe = function(q, we) {
                  var ne = { label: 0, sent: function() {
                    if (ie[0] & 1) throw ie[1];
                    return ie[1];
                  }, trys: [], ops: [] }, V, ve, ie, _e;
                  return _e = { next: Ce(0), throw: Ce(1), return: Ce(2) }, typeof Symbol == "function" && (_e[Symbol.iterator] = function() {
                    return this;
                  }), _e;
                  function Ce(U) {
                    return function(he) {
                      return X([U, he]);
                    };
                  }
                  function X(U) {
                    if (V) throw new TypeError("Generator is already executing.");
                    for (; _e && (_e = 0, U[0] && (ne = 0)), ne; ) try {
                      if (V = 1, ve && (ie = U[0] & 2 ? ve.return : U[0] ? ve.throw || ((ie = ve.return) && ie.call(ve), 0) : ve.next) && !(ie = ie.call(ve, U[1])).done) return ie;
                      switch (ve = 0, ie && (U = [U[0] & 2, ie.value]), U[0]) {
                        case 0:
                        case 1:
                          ie = U;
                          break;
                        case 4:
                          return ne.label++, { value: U[1], done: !1 };
                        case 5:
                          ne.label++, ve = U[1], U = [0];
                          continue;
                        case 7:
                          U = ne.ops.pop(), ne.trys.pop();
                          continue;
                        default:
                          if (ie = ne.trys, !(ie = ie.length > 0 && ie[ie.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                            ne = 0;
                            continue;
                          }
                          if (U[0] === 3 && (!ie || U[1] > ie[0] && U[1] < ie[3])) {
                            ne.label = U[1];
                            break;
                          }
                          if (U[0] === 6 && ne.label < ie[1]) {
                            ne.label = ie[1], ie = U;
                            break;
                          }
                          if (ie && ne.label < ie[2]) {
                            ne.label = ie[2], ne.ops.push(U);
                            break;
                          }
                          ie[2] && ne.ops.pop(), ne.trys.pop();
                          continue;
                      }
                      U = we.call(q, ne);
                    } catch (he) {
                      U = [6, he], ve = 0;
                    } finally {
                      V = ie = 0;
                    }
                    if (U[0] & 5) throw U[1];
                    return { value: U[0] ? U[1] : void 0, done: !0 };
                  }
                }, ye = function(q) {
                  var we, ne = {
                    anchor: 0,
                    cdn: H.g.CDN,
                    customEmoji: {},
                    emojiPath: "".concat(H.g.CDN, "/dist/images/emoji"),
                    hljs: H.g.HLJS_OPTIONS,
                    icon: "ant",
                    lang: "zh_CN",
                    markdown: H.g.MARKDOWN_OPTIONS,
                    math: H.g.MATH_OPTIONS,
                    mode: "light",
                    speech: {
                      enable: !1
                    },
                    render: {
                      media: {
                        enable: !0
                      }
                    },
                    theme: H.g.THEME_OPTIONS
                  };
                  return q.cdn && (!((we = q.theme) === null || we === void 0) && we.path || (ne.theme.path = "".concat(q.cdn, "/dist/css/content-theme")), q.emojiPath || (ne.emojiPath = "".concat(q.cdn, "/dist/images/emoji"))), (0, I.T)(ne, q);
                }, ge = function(q, we) {
                  var ne = ye(we);
                  return (0, Q.G)("".concat(ne.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    var V = (0, J.X)({
                      autoSpace: ne.markdown.autoSpace,
                      gfmAutoLink: ne.markdown.gfmAutoLink,
                      codeBlockPreview: ne.markdown.codeBlockPreview,
                      emojiSite: ne.emojiPath,
                      emojis: ne.customEmoji,
                      fixTermTypo: ne.markdown.fixTermTypo,
                      footnotes: ne.markdown.footnotes,
                      headingAnchor: ne.anchor !== 0,
                      inlineMathDigit: ne.math.inlineDigit,
                      lazyLoadImage: ne.lazyLoadImage,
                      linkBase: ne.markdown.linkBase,
                      linkPrefix: ne.markdown.linkPrefix,
                      listStyle: ne.markdown.listStyle,
                      mark: ne.markdown.mark,
                      mathBlockPreview: ne.markdown.mathBlockPreview,
                      paragraphBeginningSpace: ne.markdown.paragraphBeginningSpace,
                      sanitize: ne.markdown.sanitize,
                      toc: ne.markdown.toc
                    });
                    return we != null && we.renderers && V.SetJSRenderers({
                      renderers: {
                        Md2HTML: we.renderers
                      }
                    }), V.SetHeadingID(!0), V.Md2HTML(q);
                  });
                }, B = function(q, we, ne) {
                  return de(void 0, void 0, void 0, function() {
                    var V, ve, ie, _e;
                    return pe(this, function(Ce) {
                      switch (Ce.label) {
                        case 0:
                          return V = ye(ne), [4, ge(we, V)];
                        case 1:
                          if (ve = Ce.sent(), V.transform && (ve = V.transform(ve)), q.innerHTML = ve, q.classList.add("vditor-reset"), V.i18n) return [3, 5];
                          if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(V.lang)) return [3, 2];
                          throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                        case 2:
                          return ie = "vditorI18nScript", _e = ie + V.lang, document.querySelectorAll('head script[id^="'.concat(ie, '"]')).forEach(function(X) {
                            X.id !== _e && document.head.removeChild(X);
                          }), [4, (0, Q.G)("".concat(V.cdn, "/dist/js/i18n/").concat(V.lang, ".js"), _e)];
                        case 3:
                          Ce.sent(), Ce.label = 4;
                        case 4:
                          return [3, 6];
                        case 5:
                          window.VditorI18n = V.i18n, Ce.label = 6;
                        case 6:
                          return V.icon ? [4, (0, Q.G)("".concat(V.cdn, "/dist/js/icons/").concat(V.icon, ".js"), "vditorIconScript")] : [3, 8];
                        case 7:
                          Ce.sent(), Ce.label = 8;
                        case 8:
                          return (0, W.Z)(V.theme.current, V.theme.path), V.anchor === 1 && q.classList.add("vditor-reset--anchor"), (0, o.O)(q, V.hljs), (0, y.s)(V.hljs, q, V.cdn), (0, L.H)(q, {
                            cdn: V.cdn,
                            math: V.math
                          }), (0, C.i)(q, V.cdn, V.mode), (0, S.J)(q, V.cdn, V.mode), (0, s.K)(q, V.cdn), (0, v.P)(q, V.cdn), (0, d.v)(q, V.cdn), (0, c.p)(q, V.cdn, V.mode), (0, _.P)(q, V.cdn, V.mode), (0, j.B)(q, V.cdn), (0, M.Q)(q, V.cdn), V.render.media.enable && (0, T.Y)(q), V.speech.enable && ce(q), V.anchor !== 0 && F(V.anchor), V.after && V.after(), V.lazyLoadImage && f(q), q.addEventListener("click", function(X) {
                            var U = (0, $.lG)(X.target, "SPAN");
                            if (U && (0, $.fb)(U, "vditor-toc")) {
                              var he = q.querySelector("#" + U.getAttribute("data-target-id"));
                              he && window.scrollTo(window.scrollX, he.offsetTop);
                              return;
                            }
                          }), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, Be = w(190), Ie = w(580), We = (
                  /** @class */
                  function() {
                    function q() {
                    }
                    return q.adapterRender = x, q.previewImage = Be.E, q.codeRender = o.O, q.graphvizRender = d.v, q.highlightRender = y.s, q.mathRender = L.H, q.mermaidRender = C.i, q.SMILESRender = S.J, q.markmapRender = s.K, q.flowchartRender = v.P, q.chartRender = c.p, q.abcRender = M.Q, q.mindmapRender = _.P, q.plantumlRender = j.B, q.outlineRender = P.k, q.mediaRender = T.Y, q.speechRender = ce, q.lazyLoadImageRender = f, q.md2html = ge, q.preview = B, q.setCodeTheme = Ie.Y, q.setContentTheme = W.Z, q;
                  }()
                );
                const Ue = We;
              }
            ),
            /***/
            145: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  g: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var M = "3.11.2", x = (
                  /** @class */
                  function() {
                    function c() {
                    }
                    return c.ZWSP = "​", c.DROP_EDITOR = "application/editor", c.MOBILE_WIDTH = 520, c.CLASS_MENU_DISABLED = "vditor-menu--disabled", c.EDIT_TOOLBARS = [
                      "emoji",
                      "headings",
                      "bold",
                      "italic",
                      "strike",
                      "link",
                      "list",
                      "ordered-list",
                      "outdent",
                      "indent",
                      "check",
                      "line",
                      "quote",
                      "code",
                      "inline-code",
                      "insert-after",
                      "insert-before",
                      "upload",
                      "record",
                      "table"
                    ], c.CODE_THEME = [
                      "a11y-dark",
                      "agate",
                      "an-old-hope",
                      "androidstudio",
                      "arta",
                      "atom-one-dark",
                      "atom-one-dark-reasonable",
                      "base16/3024",
                      "base16/apathy",
                      "base16/apprentice",
                      "base16/ashes",
                      "base16/atelier-cave",
                      "base16/atelier-dune",
                      "base16/atelier-estuary",
                      "base16/atelier-forest",
                      "base16/atelier-heath",
                      "base16/atelier-lakeside",
                      "base16/atelier-plateau",
                      "base16/atelier-savanna",
                      "base16/atelier-seaside",
                      "base16/atelier-sulphurpool",
                      "base16/atlas",
                      "base16/bespin",
                      "base16/black-metal",
                      "base16/black-metal-bathory",
                      "base16/black-metal-burzum",
                      "base16/black-metal-dark-funeral",
                      "base16/black-metal-gorgoroth",
                      "base16/black-metal-immortal",
                      "base16/black-metal-khold",
                      "base16/black-metal-marduk",
                      "base16/black-metal-mayhem",
                      "base16/black-metal-nile",
                      "base16/black-metal-venom",
                      "base16/brewer",
                      "base16/bright",
                      "base16/brogrammer",
                      "base16/brush-trees-dark",
                      "base16/chalk",
                      "base16/circus",
                      "base16/classic-dark",
                      "base16/codeschool",
                      "base16/colors",
                      "base16/danqing",
                      "base16/darcula",
                      "base16/dark-violet",
                      "base16/darkmoss",
                      "base16/darktooth",
                      "base16/decaf",
                      "base16/default-dark",
                      "base16/dracula",
                      "base16/edge-dark",
                      "base16/eighties",
                      "base16/embers",
                      "base16/equilibrium-dark",
                      "base16/equilibrium-gray-dark",
                      "base16/espresso",
                      "base16/eva",
                      "base16/eva-dim",
                      "base16/flat",
                      "base16/framer",
                      "base16/gigavolt",
                      "base16/google-dark",
                      "base16/grayscale-dark",
                      "base16/green-screen",
                      "base16/gruvbox-dark-hard",
                      "base16/gruvbox-dark-medium",
                      "base16/gruvbox-dark-pale",
                      "base16/gruvbox-dark-soft",
                      "base16/hardcore",
                      "base16/harmonic16-dark",
                      "base16/heetch-dark",
                      "base16/helios",
                      "base16/hopscotch",
                      "base16/horizon-dark",
                      "base16/humanoid-dark",
                      "base16/ia-dark",
                      "base16/icy-dark",
                      "base16/ir-black",
                      "base16/isotope",
                      "base16/kimber",
                      "base16/london-tube",
                      "base16/macintosh",
                      "base16/marrakesh",
                      "base16/materia",
                      "base16/material",
                      "base16/material-darker",
                      "base16/material-palenight",
                      "base16/material-vivid",
                      "base16/mellow-purple",
                      "base16/mocha",
                      "base16/monokai",
                      "base16/nebula",
                      "base16/nord",
                      "base16/nova",
                      "base16/ocean",
                      "base16/oceanicnext",
                      "base16/onedark",
                      "base16/outrun-dark",
                      "base16/papercolor-dark",
                      "base16/paraiso",
                      "base16/pasque",
                      "base16/phd",
                      "base16/pico",
                      "base16/pop",
                      "base16/porple",
                      "base16/qualia",
                      "base16/railscasts",
                      "base16/rebecca",
                      "base16/ros-pine",
                      "base16/ros-pine-moon",
                      "base16/sandcastle",
                      "base16/seti-ui",
                      "base16/silk-dark",
                      "base16/snazzy",
                      "base16/solar-flare",
                      "base16/solarized-dark",
                      "base16/spacemacs",
                      "base16/summercamp",
                      "base16/summerfruit-dark",
                      "base16/synth-midnight-terminal-dark",
                      "base16/tango",
                      "base16/tender",
                      "base16/tomorrow-night",
                      "base16/twilight",
                      "base16/unikitty-dark",
                      "base16/vulcan",
                      "base16/windows-10",
                      "base16/windows-95",
                      "base16/windows-high-contrast",
                      "base16/windows-nt",
                      "base16/woodland",
                      "base16/xcode-dusk",
                      "base16/zenburn",
                      "codepen-embed",
                      "dark",
                      "devibeans",
                      "far",
                      "felipec",
                      "github-dark",
                      "github-dark-dimmed",
                      "gml",
                      "gradient-dark",
                      "hybrid",
                      "ir-black",
                      "isbl-editor-dark",
                      "kimbie-dark",
                      "lioshi",
                      "monokai",
                      "monokai-sublime",
                      "night-owl",
                      "nnfx-dark",
                      "nord",
                      "obsidian",
                      "panda-syntax-dark",
                      "paraiso-dark",
                      "pojoaque",
                      "qtcreator-dark",
                      "rainbow",
                      "shades-of-purple",
                      "srcery",
                      "stackoverflow-dark",
                      "sunburst",
                      "tomorrow-night-blue",
                      "tomorrow-night-bright",
                      "tokyo-night-dark",
                      "vs2015",
                      "xt256",
                      "ant-design",
                      "a11y-light",
                      "arduino-light",
                      "ascetic",
                      "atom-one-light",
                      "base16/atelier-cave-light",
                      "base16/atelier-dune-light",
                      "base16/atelier-estuary-light",
                      "base16/atelier-forest-light",
                      "base16/atelier-heath-light",
                      "base16/atelier-lakeside-light",
                      "base16/atelier-plateau-light",
                      "base16/atelier-savanna-light",
                      "base16/atelier-seaside-light",
                      "base16/atelier-sulphurpool-light",
                      "base16/brush-trees",
                      "base16/classic-light",
                      "base16/cupcake",
                      "base16/cupertino",
                      "base16/default-light",
                      "base16/dirtysea",
                      "base16/edge-light",
                      "base16/equilibrium-gray-light",
                      "base16/equilibrium-light",
                      "base16/fruit-soda",
                      "base16/github",
                      "base16/google-light",
                      "base16/grayscale-light",
                      "base16/gruvbox-light-hard",
                      "base16/gruvbox-light-medium",
                      "base16/gruvbox-light-soft",
                      "base16/harmonic16-light",
                      "base16/heetch-light",
                      "base16/humanoid-light",
                      "base16/horizon-light",
                      "base16/ia-light",
                      "base16/material-lighter",
                      "base16/mexico-light",
                      "base16/one-light",
                      "base16/papercolor-light",
                      "base16/ros-pine-dawn",
                      "base16/sagelight",
                      "base16/shapeshifter",
                      "base16/silk-light",
                      "base16/solar-flare-light",
                      "base16/solarized-light",
                      "base16/summerfruit-light",
                      "base16/synth-midnight-terminal-light",
                      "base16/tomorrow",
                      "base16/unikitty-light",
                      "base16/windows-10-light",
                      "base16/windows-95-light",
                      "base16/windows-high-contrast-light",
                      "brown-paper",
                      "base16/windows-nt-light",
                      "color-brewer",
                      "docco",
                      "foundation",
                      "github",
                      "googlecode",
                      "gradient-light",
                      "grayscale",
                      "idea",
                      "intellij-light",
                      "isbl-editor-light",
                      "kimbie-light",
                      "lightfair",
                      "magula",
                      "mono-blue",
                      "nnfx-light",
                      "panda-syntax-light",
                      "paraiso-light",
                      "purebasic",
                      "qtcreator-light",
                      "routeros",
                      "school-book",
                      "stackoverflow-light",
                      "tokyo-night-light",
                      "vs",
                      "xcode",
                      "default"
                    ], c.ALIAS_CODE_LANGUAGES = [
                      // 自定义
                      "abc",
                      "plantuml",
                      "mermaid",
                      "flowchart",
                      "echarts",
                      "mindmap",
                      "graphviz",
                      "math",
                      "markmap",
                      "smiles",
                      // 别名
                      "js",
                      "ts",
                      "html",
                      "toml",
                      "c#",
                      "bat"
                    ], c.CDN = "https://unpkg.com/vditor@".concat("3.11.2"), c.MARKDOWN_OPTIONS = {
                      autoSpace: !1,
                      gfmAutoLink: !0,
                      codeBlockPreview: !0,
                      fixTermTypo: !1,
                      footnotes: !0,
                      linkBase: "",
                      linkPrefix: "",
                      listStyle: !1,
                      mark: !1,
                      mathBlockPreview: !0,
                      paragraphBeginningSpace: !1,
                      sanitize: !0,
                      toc: !1
                    }, c.HLJS_OPTIONS = {
                      enable: !0,
                      lineNumber: !1,
                      defaultLang: "",
                      style: "github"
                    }, c.MATH_OPTIONS = {
                      engine: "KaTeX",
                      inlineDigit: !1,
                      macros: {}
                    }, c.THEME_OPTIONS = {
                      current: "light",
                      list: {
                        "ant-design": "Ant Design",
                        dark: "Dark",
                        light: "Light",
                        wechat: "WeChat"
                      },
                      path: "".concat(c.CDN, "/dist/css/content-theme")
                    }, c;
                  }()
                );
              }
            ),
            /***/
            825: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = w(494), v = function(d, y, f) {
                  d === void 0 && (d = document), y === void 0 && (y = M.g.CDN);
                  var L = c.SMILESRenderAdapter.getElements(d);
                  L.length > 0 && (0, x.G)("".concat(y, "/dist/js/smiles-drawer/smiles-drawer.min.js?v=2.1.7"), "vditorAbcjsScript").then(function() {
                    var T = new SmiDrawer({}, {});
                    L.forEach(function(C) {
                      var S = c.SMILESRenderAdapter.getCode(C).trim();
                      if (!(C.getAttribute("data-processed") === "true" || S.trim() === "")) {
                        var s = "smiles" + (0, o.Wb)();
                        C.innerHTML = '<svg id="'.concat(s, '"></svg>'), T.draw(S, "#" + s, f === "dark" ? "dark" : void 0), C.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            135: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  Q: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = function(v, d) {
                  v === void 0 && (v = document), d === void 0 && (d = M.g.CDN);
                  var y = c.abcRenderAdapter.getElements(v);
                  y.length > 0 && (0, x.G)("".concat(d, "/dist/js/abcjs/abcjs_basic.min.js"), "vditorAbcjsScript").then(function() {
                    y.forEach(function(f) {
                      f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre") || f.getAttribute("data-processed") !== "true" && (ABCJS.renderAbc(f, c.abcRenderAdapter.getCode(f).trim()), f.style.overflowX = "auto", f.setAttribute("data-processed", "true"));
                    });
                  });
                };
              }
            ),
            /***/
            840: (
              /***/
              (O, p, w) => {
                w.r(p), w.d(p, {
                  /* harmony export */
                  mathRenderAdapter: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  SMILESRenderAdapter: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  mermaidRenderAdapter: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  markmapRenderAdapter: () => (
                    /* binding */
                    o
                  ),
                  /* harmony export */
                  mindmapRenderAdapter: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  chartRenderAdapter: () => (
                    /* binding */
                    d
                  ),
                  /* harmony export */
                  abcRenderAdapter: () => (
                    /* binding */
                    y
                  ),
                  /* harmony export */
                  graphvizRenderAdapter: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  flowchartRenderAdapter: () => (
                    /* binding */
                    L
                  ),
                  /* harmony export */
                  plantumlRenderAdapter: () => (
                    /* binding */
                    T
                  )
                  /* harmony export */
                });
                var M = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-math");
                  }
                }, x = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-smiles");
                  }
                }, c = {
                  /** 不仅要返回code，并且需要将 code 设置为 el 的 innerHTML */
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-mermaid");
                  }
                }, o = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-markmap");
                  }
                }, v = {
                  getCode: function(C) {
                    return C.getAttribute("data-code");
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-mindmap");
                  }
                }, d = {
                  getCode: function(C) {
                    return C.innerText;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-echarts");
                  }
                }, y = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-abc");
                  }
                }, f = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-graphviz");
                  }
                }, L = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-flowchart");
                  }
                }, T = {
                  getCode: function(C) {
                    return C.textContent;
                  },
                  getElements: function(C) {
                    return C.querySelectorAll(".language-plantuml");
                  }
                };
              }
            ),
            /***/
            775: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  p: () => (
                    /* binding */
                    y
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = w(494), v = function(f, L, T, C) {
                  function S(s) {
                    return s instanceof T ? s : new T(function(_) {
                      _(s);
                    });
                  }
                  return new (T || (T = Promise))(function(s, _) {
                    function P(W) {
                      try {
                        H(C.next(W));
                      } catch (Q) {
                        _(Q);
                      }
                    }
                    function j(W) {
                      try {
                        H(C.throw(W));
                      } catch (Q) {
                        _(Q);
                      }
                    }
                    function H(W) {
                      W.done ? s(W.value) : S(W.value).then(P, j);
                    }
                    H((C = C.apply(f, L || [])).next());
                  });
                }, d = function(f, L) {
                  var T = { label: 0, sent: function() {
                    if (s[0] & 1) throw s[1];
                    return s[1];
                  }, trys: [], ops: [] }, C, S, s, _;
                  return _ = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
                    return this;
                  }), _;
                  function P(H) {
                    return function(W) {
                      return j([H, W]);
                    };
                  }
                  function j(H) {
                    if (C) throw new TypeError("Generator is already executing.");
                    for (; _ && (_ = 0, H[0] && (T = 0)), T; ) try {
                      if (C = 1, S && (s = H[0] & 2 ? S.return : H[0] ? S.throw || ((s = S.return) && s.call(S), 0) : S.next) && !(s = s.call(S, H[1])).done) return s;
                      switch (S = 0, s && (H = [H[0] & 2, s.value]), H[0]) {
                        case 0:
                        case 1:
                          s = H;
                          break;
                        case 4:
                          return T.label++, { value: H[1], done: !1 };
                        case 5:
                          T.label++, S = H[1], H = [0];
                          continue;
                        case 7:
                          H = T.ops.pop(), T.trys.pop();
                          continue;
                        default:
                          if (s = T.trys, !(s = s.length > 0 && s[s.length - 1]) && (H[0] === 6 || H[0] === 2)) {
                            T = 0;
                            continue;
                          }
                          if (H[0] === 3 && (!s || H[1] > s[0] && H[1] < s[3])) {
                            T.label = H[1];
                            break;
                          }
                          if (H[0] === 6 && T.label < s[1]) {
                            T.label = s[1], s = H;
                            break;
                          }
                          if (s && T.label < s[2]) {
                            T.label = s[2], T.ops.push(H);
                            break;
                          }
                          s[2] && T.ops.pop(), T.trys.pop();
                          continue;
                      }
                      H = L.call(f, T);
                    } catch (W) {
                      H = [6, W], S = 0;
                    } finally {
                      C = s = 0;
                    }
                    if (H[0] & 5) throw H[1];
                    return { value: H[0] ? H[1] : void 0, done: !0 };
                  }
                }, y = function(f, L, T) {
                  f === void 0 && (f = document), L === void 0 && (L = M.g.CDN);
                  var C = c.chartRenderAdapter.getElements(f);
                  C.length > 0 && (0, x.G)("".concat(L, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    C.forEach(function(S) {
                      return v(void 0, void 0, void 0, function() {
                        var s, _, P;
                        return d(this, function(j) {
                          switch (j.label) {
                            case 0:
                              if (S.parentElement.classList.contains("vditor-wysiwyg__pre") || S.parentElement.classList.contains("vditor-ir__marker--pre"))
                                return [
                                  2
                                  /*return*/
                                ];
                              if (s = c.chartRenderAdapter.getCode(S).trim(), !s)
                                return [
                                  2
                                  /*return*/
                                ];
                              j.label = 1;
                            case 1:
                              return j.trys.push([1, 3, , 4]), S.getAttribute("data-processed") === "true" ? [
                                2
                                /*return*/
                              ] : [4, (0, o.Qf)(s)];
                            case 2:
                              return _ = j.sent(), echarts.init(S, T === "dark" ? "dark" : void 0).setOption(_), S.setAttribute("data-processed", "true"), [3, 4];
                            case 3:
                              return P = j.sent(), S.className = "vditor-reset--error", S.innerHTML = "echarts render error: <br>".concat(P), [3, 4];
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    });
                  });
                };
              }
            ),
            /***/
            428: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  O: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var M = w(105), x = w(145), c = function(o, v) {
                  Array.from(o.querySelectorAll("pre > code")).filter(function(d, y) {
                    return !(d.parentElement.classList.contains("vditor-wysiwyg__pre") || d.parentElement.classList.contains("vditor-ir__marker--pre") || d.classList.contains("language-mermaid") || d.classList.contains("language-flowchart") || d.classList.contains("language-echarts") || d.classList.contains("language-mindmap") || d.classList.contains("language-plantuml") || d.classList.contains("language-markmap") || d.classList.contains("language-abc") || d.classList.contains("language-graphviz") || d.classList.contains("language-math") || d.classList.contains("language-smiles") || d.style.maxHeight.indexOf("px") > -1 || o.classList.contains("vditor-preview") && y > 5);
                  }).forEach(function(d) {
                    var y, f, L, T = d.innerText;
                    if (d.classList.contains("highlight-chroma")) {
                      var C = d.cloneNode(!0);
                      C.querySelectorAll(".highlight-ln").forEach(function(P) {
                        P.remove();
                      }), T = C.innerText;
                    } else T.endsWith(`
`) && (T = T.substr(0, T.length - 1));
                    var S = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                    document.getElementById("vditorIconScript") || (S = '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                    var s = document.createElement("div");
                    s.className = "vditor-copy", s.innerHTML = '<span aria-label="'.concat(((y = window.VditorI18n) === null || y === void 0 ? void 0 : y.copy) || "复制", `"
onmouseover="this.setAttribute('aria-label', '`).concat(((f = window.VditorI18n) === null || f === void 0 ? void 0 : f.copy) || "复制", `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="event.stopPropagation();this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '`).concat(((L = window.VditorI18n) === null || L === void 0 ? void 0 : L.copied) || "已复制", `');this.previousElementSibling.blur()">`).concat(S, "</span>");
                    var _ = document.createElement("textarea");
                    _.value = (0, M.X)(T), s.insertAdjacentElement("afterbegin", _), v && v.renderMenu && v.renderMenu(d, s), d.before(s), d.style.maxHeight = window.outerHeight - 40 + "px", d.insertAdjacentHTML("afterend", '<span style="position: absolute">'.concat(x.g.ZWSP, "</span>"));
                  });
                };
              }
            ),
            /***/
            325: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = function(v, d) {
                  d === void 0 && (d = M.g.CDN);
                  var y = c.flowchartRenderAdapter.getElements(v);
                  y.length !== 0 && (0, x.G)("".concat(d, "/dist/js/flowchart.js/flowchart.min.js"), "vditorFlowchartScript").then(function() {
                    y.forEach(function(f) {
                      if (f.getAttribute("data-processed") !== "true") {
                        var L = flowchart.parse(c.flowchartRenderAdapter.getCode(f));
                        f.innerHTML = "", L.drawSVG(f), f.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            483: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  v: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = function(v, d) {
                  d === void 0 && (d = M.g.CDN);
                  var y = c.graphvizRenderAdapter.getElements(v);
                  y.length !== 0 && (0, x.G)("".concat(d, "/dist/js/graphviz/viz.js"), "vditorGraphVizScript").then(function() {
                    y.forEach(function(f) {
                      var L = c.graphvizRenderAdapter.getCode(f);
                      if (!(f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre")) && !(f.getAttribute("data-processed") === "true" || L.trim() === "")) {
                        try {
                          var T = new Blob(["importScripts('".concat(document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js"), "');")], { type: "application/javascript" }), C = window.URL || window.webkitURL, S = C.createObjectURL(T), s = new Worker(S);
                          new Viz({ worker: s }).renderSVGElement(L).then(function(_) {
                            f.innerHTML = _.outerHTML;
                          }).catch(function(_) {
                            f.innerHTML = "graphviz render error: <br>".concat(_), f.className = "vditor-reset--error";
                          });
                        } catch (_) {
                          console.error("graphviz error", _);
                        }
                        f.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            999: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  s: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(290), o = function(v, d, y) {
                  d === void 0 && (d = document), y === void 0 && (y = M.g.CDN);
                  var f = v.style;
                  M.g.CODE_THEME.includes(f) || (f = "github");
                  var L = document.getElementById("vditorHljsStyle"), T = "".concat(y, "/dist/js/highlight.js/styles/").concat(f, ".min.css");
                  if (L && L.getAttribute("href") !== T && L.remove(), (0, c.c)("".concat(y, "/dist/js/highlight.js/styles/").concat(f, ".min.css"), "vditorHljsStyle"), v.enable !== !1) {
                    var C = d.querySelectorAll("pre > code");
                    C.length !== 0 && (0, x.G)("".concat(y, "/dist/js/highlight.js/highlight.min.js?v=11.7.0"), "vditorHljsScript").then(function() {
                      (0, x.G)("".concat(y, "/dist/js/highlight.js/third-languages.js?v=1.0.1"), "vditorHljsThirdScript").then(function() {
                        d.querySelectorAll("pre > code").forEach(function(S) {
                          if (!(S.parentElement.classList.contains("vditor-ir__marker--pre") || S.parentElement.classList.contains("vditor-wysiwyg__pre")) && !(S.classList.contains("language-mermaid") || S.classList.contains("language-flowchart") || S.classList.contains("language-echarts") || S.classList.contains("language-mindmap") || S.classList.contains("language-plantuml") || S.classList.contains("language-smiles") || S.classList.contains("language-abc") || S.classList.contains("language-graphviz") || S.classList.contains("language-math"))) {
                            v.defaultLang !== "" && S.className.indexOf("language-") === -1 && S.classList.add("language-" + v.defaultLang);
                            var s = S.className.replace("language-", "");
                            if (window.hljs.getLanguage(s) || (s = "plaintext"), S.innerHTML = window.hljs.highlight(S.textContent, {
                              language: s,
                              ignoreIllegals: !0
                            }).value, S.classList.add("hljs"), !!v.lineNumber) {
                              S.classList.add("vditor-linenumber");
                              var _ = S.querySelector(".vditor-linenumber__temp");
                              _ || (_ = document.createElement("div"), _.className = "vditor-linenumber__temp", S.insertAdjacentElement("beforeend", _));
                              var P = getComputedStyle(S).whiteSpace, j = !1;
                              (P === "pre-wrap" || P === "pre-line") && (j = !0);
                              var H = "", W = S.textContent.split(/\r\n|\r|\n/g);
                              W.pop(), W.map(function(Q) {
                                var $ = "";
                                j && (_.textContent = Q || `
`, $ = ' style="height:'.concat(_.getBoundingClientRect().height, 'px"')), H += "<span".concat($, "></span>");
                              }), _.style.display = "none", H = '<span class="vditor-linenumber__rows">'.concat(H, "</span>"), S.insertAdjacentHTML("beforeend", H);
                            }
                          }
                        });
                      });
                    });
                  }
                };
              }
            ),
            /***/
            11: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  K: () => (
                    /* binding */
                    y
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = {}, v = function(f, L) {
                  var T = f.transform(L), C = Object.keys(T.features).filter(function(j) {
                    return !o[j];
                  });
                  C.forEach(function(j) {
                    o[j] = !0;
                  });
                  var S = f.getAssets(C), s = S.styles, _ = S.scripts, P = window.markmap;
                  return s && P.loadCSS(s), _ && P.loadJS(_), T;
                }, d = function(f, L) {
                  var T = window.markmap, C = T.Transformer, S = T.Markmap, s = T.deriveOptions;
                  T.globalCSS;
                  var _ = new C();
                  f.innerHTML = '<svg style="width:100%"></svg>';
                  var P = f.firstChild, j = S.create(P, null), H = v(_, L), W = H.root, Q = H.frontmatter, $ = Q == null ? void 0 : Q.markmap, I = s($);
                  j.setData(W, I), j.fit();
                }, y = function(f, L) {
                  f === void 0 && (f = document), L === void 0 && (L = M.g.CDN);
                  var T = c.markmapRenderAdapter.getElements(f);
                  T.length !== 0 && (0, x.G)("".concat(L, "/dist/js/markmap/markmap.min.js"), "vditorMarkerScript").then(function() {
                    T.forEach(function(C) {
                      var S = c.markmapRenderAdapter.getCode(C);
                      if (!(C.getAttribute("data-processed") === "true" || S.trim() === "")) {
                        var s = document.createElement("div");
                        s.className = "language-markmap", C.parentNode.appendChild(s), d(s, S), C.parentNode.childNodes[0].nodeName == "CODE" && C.parentNode.removeChild(C.parentNode.childNodes[0]);
                      }
                    });
                  });
                };
              }
            ),
            /***/
            472: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    d
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(290), o = w(105), v = w(840), d = function(y, f) {
                  y === void 0 && (y = document);
                  var L = v.mathRenderAdapter.getElements(y);
                  if (L.length !== 0) {
                    var T = {
                      cdn: M.g.CDN,
                      math: {
                        engine: "KaTeX",
                        inlineDigit: !1,
                        macros: {}
                      }
                    };
                    if (f && f.math && (f.math = Object.assign({}, T.math, f.math)), f = Object.assign({}, T, f), f.math.engine === "KaTeX")
                      (0, c.c)("".concat(f.cdn, "/dist/js/katex/katex.min.css?v=0.16.9"), "vditorKatexStyle"), (0, x.G)("".concat(f.cdn, "/dist/js/katex/katex.min.js?v=0.16.9"), "vditorKatexScript").then(function() {
                        (0, x.G)("".concat(f.cdn, "/dist/js/katex/mhchem.min.js?v=0.16.9"), "vditorKatexChemScript").then(function() {
                          L.forEach(function(s) {
                            if (!(s.parentElement.classList.contains("vditor-wysiwyg__pre") || s.parentElement.classList.contains("vditor-ir__marker--pre")) && !s.getAttribute("data-math")) {
                              var _ = (0, o.X)(v.mathRenderAdapter.getCode(s));
                              s.setAttribute("data-math", _);
                              try {
                                s.innerHTML = katex.renderToString(_, {
                                  displayMode: s.tagName === "DIV",
                                  output: "html",
                                  macros: f.math.macros
                                });
                              } catch (P) {
                                s.innerHTML = P.message, s.className = "language-math vditor-reset--error";
                              }
                              s.addEventListener("copy", function(P) {
                                P.stopPropagation(), P.preventDefault();
                                var j = P.currentTarget.closest(".language-math");
                                P.clipboardData.setData("text/html", j.innerHTML), P.clipboardData.setData("text/plain", j.getAttribute("data-math"));
                              });
                            }
                          });
                        });
                      });
                    else if (f.math.engine === "MathJax") {
                      var C = function(s) {
                        if (s.length !== 0) {
                          var _ = 0, P = s[s.length - 1], j = function() {
                            var H = s[_++];
                            H === P ? H() : H(j);
                          };
                          j();
                        }
                      };
                      window.MathJax || (window.MathJax = {
                        loader: {
                          paths: { mathjax: "".concat(f.cdn, "/dist/js/mathjax") }
                        },
                        startup: {
                          typeset: !1
                        },
                        tex: {
                          macros: f.math.macros
                        }
                      }, Object.assign(window.MathJax, f.math.mathJaxOptions)), (0, x.J)("".concat(f.cdn, "/dist/js/mathjax/tex-svg-full.js"), "protyleMathJaxScript");
                      var S = function(s, _) {
                        var P = (0, o.X)(s.textContent).trim(), j = window.MathJax.getMetricsFor(s);
                        j.display = s.tagName === "DIV", window.MathJax.tex2svgPromise(P, j).then(function(H) {
                          s.innerHTML = "", s.setAttribute("data-math", P), s.append(H), window.MathJax.startup.document.clear(), window.MathJax.startup.document.updateDocument();
                          var W = H.querySelector('[data-mml-node="merror"]');
                          W && W.textContent.trim() !== "" && (s.innerHTML = W.textContent.trim(), s.className = "vditor-reset--error"), _ && _();
                        });
                      };
                      window.MathJax.startup.promise.then(function() {
                        for (var s = [], _ = function(j) {
                          var H = L[j];
                          !H.parentElement.classList.contains("vditor-wysiwyg__pre") && !H.parentElement.classList.contains("vditor-ir__marker--pre") && !H.getAttribute("data-math") && (0, o.X)(H.textContent).trim() && s.push(function(W) {
                            j === L.length - 1 ? S(H) : S(H, W);
                          });
                        }, P = 0; P < L.length; P++)
                          _(P);
                        C(s);
                      });
                    }
                  }
                };
              }
            ),
            /***/
            280: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var M = w(494), x = function(d, y) {
                  d.insertAdjacentHTML("afterend", '<video controls="controls" src="'.concat(y, '"></video>')), d.remove();
                }, c = function(d, y) {
                  d.insertAdjacentHTML("afterend", '<audio controls="controls" src="'.concat(y, '"></audio>')), d.remove();
                }, o = function(d, y) {
                  var f = y.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/), L = y.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), T = y.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/), C = y.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/), S = y.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/), s = y.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/), _ = y.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/), P = y.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                  if (f && f[1].length === 11)
                    d.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//www.youtube.com/embed/'.concat(f[1] + (f[2] ? "?start=" + f[2] : ""), '"></iframe>')), d.remove();
                  else if (L && L[1])
                    d.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//player.youku.com/embed/'.concat(L[1], '"></iframe>')), d.remove();
                  else if (T && T[1])
                    d.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid='.concat(T[1], '"></iframe>')), d.remove();
                  else if (C && C[1])
                    d.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="//coub.com/embed/`.concat(C[1], '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>')), d.remove();
                  else if (S && S[0])
                    d.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.facebook.com/plugins/video.php?href=`.concat(encodeURIComponent(S[0]), '"></iframe>')), d.remove();
                  else if (s && s[2])
                    d.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.dailymotion.com/embed/video/`.concat(s[2], '"></iframe>')), d.remove();
                  else if (y.indexOf("bilibili.com") > -1 && (y.indexOf("bvid=") > -1 || _ && _[1])) {
                    var j = {
                      bvid: (0, M.on)("bvid", y) || _ && _[1],
                      page: "1",
                      high_quality: "1",
                      as_wide: "1",
                      allowfullscreen: "true",
                      autoplay: "0"
                    };
                    new URL(y.startsWith("http") ? y : "https:" + y).search.split("&").forEach(function(Q, $) {
                      if (Q) {
                        $ === 0 && (Q = Q.substr(1));
                        var I = Q.split("=");
                        j[I[0]] = I[1];
                      }
                    });
                    var H = "https://player.bilibili.com/player.html?", W = Object.keys(j);
                    W.forEach(function(Q, $) {
                      H += "".concat(Q, "=").concat(j[Q]), $ < W.length - 1 && (H += "&");
                    }), d.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="'.concat(H, '"></iframe>')), d.remove();
                  } else P && P[1] && (d.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//embed.ted.com/talks/'.concat(P[1], '"></iframe>')), d.remove());
                }, v = function(d) {
                  d && d.querySelectorAll("a").forEach(function(y) {
                    var f = y.getAttribute("href");
                    f && (f.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/) ? x(y, f) : f.match(/^.+.(mp3|wav|flac)$/) ? c(y, f) : o(y, f));
                  });
                };
              }
            ),
            /***/
            637: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  i: () => (
                    /* binding */
                    y
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = w(494), v = function(f, L, T, C) {
                  function S(s) {
                    return s instanceof T ? s : new T(function(_) {
                      _(s);
                    });
                  }
                  return new (T || (T = Promise))(function(s, _) {
                    function P(W) {
                      try {
                        H(C.next(W));
                      } catch (Q) {
                        _(Q);
                      }
                    }
                    function j(W) {
                      try {
                        H(C.throw(W));
                      } catch (Q) {
                        _(Q);
                      }
                    }
                    function H(W) {
                      W.done ? s(W.value) : S(W.value).then(P, j);
                    }
                    H((C = C.apply(f, L || [])).next());
                  });
                }, d = function(f, L) {
                  var T = { label: 0, sent: function() {
                    if (s[0] & 1) throw s[1];
                    return s[1];
                  }, trys: [], ops: [] }, C, S, s, _;
                  return _ = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
                    return this;
                  }), _;
                  function P(H) {
                    return function(W) {
                      return j([H, W]);
                    };
                  }
                  function j(H) {
                    if (C) throw new TypeError("Generator is already executing.");
                    for (; _ && (_ = 0, H[0] && (T = 0)), T; ) try {
                      if (C = 1, S && (s = H[0] & 2 ? S.return : H[0] ? S.throw || ((s = S.return) && s.call(S), 0) : S.next) && !(s = s.call(S, H[1])).done) return s;
                      switch (S = 0, s && (H = [H[0] & 2, s.value]), H[0]) {
                        case 0:
                        case 1:
                          s = H;
                          break;
                        case 4:
                          return T.label++, { value: H[1], done: !1 };
                        case 5:
                          T.label++, S = H[1], H = [0];
                          continue;
                        case 7:
                          H = T.ops.pop(), T.trys.pop();
                          continue;
                        default:
                          if (s = T.trys, !(s = s.length > 0 && s[s.length - 1]) && (H[0] === 6 || H[0] === 2)) {
                            T = 0;
                            continue;
                          }
                          if (H[0] === 3 && (!s || H[1] > s[0] && H[1] < s[3])) {
                            T.label = H[1];
                            break;
                          }
                          if (H[0] === 6 && T.label < s[1]) {
                            T.label = s[1], s = H;
                            break;
                          }
                          if (s && T.label < s[2]) {
                            T.label = s[2], T.ops.push(H);
                            break;
                          }
                          s[2] && T.ops.pop(), T.trys.pop();
                          continue;
                      }
                      H = L.call(f, T);
                    } catch (W) {
                      H = [6, W], S = 0;
                    } finally {
                      C = s = 0;
                    }
                    if (H[0] & 5) throw H[1];
                    return { value: H[0] ? H[1] : void 0, done: !0 };
                  }
                }, y = function(f, L, T) {
                  f === void 0 && (f = document), L === void 0 && (L = M.g.CDN);
                  var C = c.mermaidRenderAdapter.getElements(f);
                  C.length !== 0 && (0, x.G)("".concat(L, "/dist/js/mermaid/mermaid.min.js?v=11.6.0"), "vditorMermaidScript").then(function() {
                    var S = {
                      securityLevel: "loose",
                      altFontFamily: "sans-serif",
                      fontFamily: "sans-serif",
                      startOnLoad: !1,
                      flowchart: {
                        htmlLabels: !0,
                        useMaxWidth: !0
                      },
                      sequence: {
                        useMaxWidth: !0,
                        diagramMarginX: 8,
                        diagramMarginY: 8,
                        boxMargin: 8,
                        showSequenceNumbers: !0
                        // Mermaid 时序图增加序号 https://github.com/siyuan-note/siyuan/pull/6992 https://mermaid.js.org/syntax/sequenceDiagram.html#sequencenumbers
                      },
                      gantt: {
                        leftPadding: 75,
                        rightPadding: 20
                      }
                    };
                    T === "dark" && (S.theme = "dark"), mermaid.initialize(S), C.forEach(function(s) {
                      return v(void 0, void 0, void 0, function() {
                        var _, P, j, H, W;
                        return d(this, function(Q) {
                          switch (Q.label) {
                            case 0:
                              if (_ = c.mermaidRenderAdapter.getCode(s), s.getAttribute("data-processed") === "true" || _.trim() === "")
                                return [
                                  2
                                  /*return*/
                                ];
                              P = "mermaid" + (0, o.Wb)(), Q.label = 1;
                            case 1:
                              return Q.trys.push([1, 3, , 4]), [4, mermaid.render(P, s.textContent)];
                            case 2:
                              return j = Q.sent(), s.innerHTML = j.svg, [3, 4];
                            case 3:
                              return H = Q.sent(), W = document.querySelector("#" + P), s.innerHTML = "".concat(W.outerHTML, `<br>
<div style="text-align: left"><small>`).concat(H.message.replace(/\n/, "<br>"), "</small></div>"), W.parentElement.remove(), [3, 4];
                            case 4:
                              return s.setAttribute("data-processed", "true"), [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    });
                  });
                };
              }
            ),
            /***/
            194: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = function(v, d, y) {
                  v === void 0 && (v = document), d === void 0 && (d = M.g.CDN);
                  var f = c.mindmapRenderAdapter.getElements(v);
                  f.length > 0 && (0, x.G)("".concat(d, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    f.forEach(function(L) {
                      if (!(L.parentElement.classList.contains("vditor-wysiwyg__pre") || L.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var T = c.mindmapRenderAdapter.getCode(L);
                        if (T)
                          try {
                            if (L.getAttribute("data-processed") === "true")
                              return;
                            echarts.init(L, y === "dark" ? "dark" : void 0).setOption({
                              series: [
                                {
                                  data: [JSON.parse(decodeURIComponent(T))],
                                  initialTreeDepth: -1,
                                  itemStyle: {
                                    borderWidth: 0,
                                    color: "#4285f4"
                                  },
                                  label: {
                                    backgroundColor: "#f6f8fa",
                                    borderColor: "#d1d5da",
                                    borderRadius: 5,
                                    borderWidth: 0.5,
                                    color: "#586069",
                                    lineHeight: 20,
                                    offset: [-5, 0],
                                    padding: [0, 5],
                                    position: "insideRight"
                                  },
                                  lineStyle: {
                                    color: "#d1d5da",
                                    width: 1
                                  },
                                  roam: !0,
                                  symbol: function(C, S) {
                                    var s;
                                    return !((s = S == null ? void 0 : S.data) === null || s === void 0) && s.children ? "circle" : "path://";
                                  },
                                  type: "tree"
                                }
                              ],
                              tooltip: {
                                trigger: "item",
                                triggerOn: "mousemove"
                              }
                            }), L.setAttribute("data-processed", "true");
                          } catch (C) {
                            L.className = "vditor-reset--error", L.innerHTML = "mindmap render error: <br>".concat(C);
                          }
                      }
                    });
                  });
                };
              }
            ),
            /***/
            436: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  k: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var M = w(771), x = w(472), c = function(o, v, d) {
                  var y = "", f = [];
                  if (Array.from(o.children).forEach(function(S, s) {
                    if ((0, M.W)(S)) {
                      if (d) {
                        var _ = S.id.lastIndexOf("_");
                        S.id = S.id.substring(0, _ === -1 ? void 0 : _) + "_" + s;
                      }
                      f.push(S.id), y += S.outerHTML.replace("<wbr>", "");
                    }
                  }), y === "")
                    return v.innerHTML = "", "";
                  var L = document.createElement("div");
                  if (d)
                    d.lute.SetToC(!0), d.currentMode === "wysiwyg" && !d.preview.element.contains(o) ? L.innerHTML = d.lute.SpinVditorDOM("<p>[ToC]</p>" + y) : d.currentMode === "ir" && !d.preview.element.contains(o) ? L.innerHTML = d.lute.SpinVditorIRDOM("<p>[ToC]</p>" + y) : L.innerHTML = d.lute.HTML2VditorDOM("<p>[ToC]</p>" + y), d.lute.SetToC(d.options.preview.markdown.toc);
                  else {
                    v.classList.add("vditor-outline");
                    var T = Lute.New();
                    T.SetToC(!0), L.innerHTML = T.HTML2VditorDOM("<p>[ToC]</p>" + y);
                  }
                  var C = L.firstElementChild.querySelectorAll("li > span[data-target-id]");
                  return C.forEach(function(S, s) {
                    if (S.nextElementSibling && S.nextElementSibling.tagName === "UL") {
                      var _ = "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                      document.getElementById("vditorIconScript") || (_ = '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'), S.innerHTML = "".concat(_, "<span>").concat(S.innerHTML, "</span>");
                    } else
                      S.innerHTML = "<svg></svg><span>".concat(S.innerHTML, "</span>");
                    S.setAttribute("data-target-id", f[s]);
                  }), y = L.firstElementChild.innerHTML, C.length === 0 ? (v.innerHTML = "", y) : (v.innerHTML = y, d && (0, x.H)(v, {
                    cdn: d.options.cdn,
                    math: d.options.preview.math
                  }), v.firstElementChild.addEventListener("click", function(S) {
                    for (var s = S.target; s && !s.isEqualNode(v); ) {
                      if (s.classList.contains("vditor-outline__action")) {
                        s.classList.contains("vditor-outline__action--close") ? (s.classList.remove("vditor-outline__action--close"), s.parentElement.nextElementSibling.setAttribute("style", "display:block")) : (s.classList.add("vditor-outline__action--close"), s.parentElement.nextElementSibling.setAttribute("style", "display:none")), S.preventDefault(), S.stopPropagation();
                        break;
                      } else if (s.getAttribute("data-target-id")) {
                        S.preventDefault(), S.stopPropagation();
                        var _ = document.getElementById(s.getAttribute("data-target-id"));
                        if (!_)
                          return;
                        if (d)
                          if (d.options.height === "auto") {
                            var P = _.offsetTop + d.element.offsetTop;
                            d.options.toolbarConfig.pin || (P += d.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, P);
                          } else
                            d.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, d.element.offsetTop), d.preview.element.contains(o) ? o.parentElement.scrollTop = _.offsetTop : o.scrollTop = _.offsetTop;
                        else
                          window.scrollTo(window.scrollX, _.offsetTop);
                        break;
                      }
                      s = s.parentElement;
                    }
                  }), y);
                };
              }
            ),
            /***/
            229: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  B: () => (
                    /* binding */
                    o
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(413), c = w(840), o = function(v, d) {
                  v === void 0 && (v = document), d === void 0 && (d = M.g.CDN);
                  var y = c.plantumlRenderAdapter.getElements(v);
                  y.length !== 0 && (0, x.G)("".concat(d, "/dist/js/plantuml/plantuml-encoder.min.js"), "vditorPlantumlScript").then(function() {
                    y.forEach(function(f) {
                      if (!(f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var L = c.plantumlRenderAdapter.getCode(f).trim();
                        if (L)
                          try {
                            f.innerHTML = '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1'.concat(plantumlEncoder.encode(L), '"/>');
                          } catch (T) {
                            f.className = "vditor-reset--error", f.innerHTML = "plantuml render error: <br>".concat(T);
                          }
                      }
                    });
                  });
                };
              }
            ),
            /***/
            214: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var M = function(x) {
                  var c = Lute.New();
                  return c.PutEmojis(x.emojis), c.SetEmojiSite(x.emojiSite), c.SetHeadingAnchor(x.headingAnchor), c.SetInlineMathAllowDigitAfterOpenMarker(x.inlineMathDigit), c.SetAutoSpace(x.autoSpace), c.SetToC(x.toc), c.SetFootnotes(x.footnotes), c.SetFixTermTypo(x.fixTermTypo), c.SetVditorCodeBlockPreview(x.codeBlockPreview), c.SetVditorMathBlockPreview(x.mathBlockPreview), c.SetSanitize(x.sanitize), c.SetChineseParagraphBeginningSpace(x.paragraphBeginningSpace), c.SetRenderListStyle(x.listStyle), c.SetLinkBase(x.linkBase), c.SetLinkPrefix(x.linkPrefix), c.SetMark(x.mark), c.SetGFMAutoLink(x.gfmAutoLink), x.lazyLoadImage && c.SetImageLazyLoading(x.lazyLoadImage), c;
                };
              }
            ),
            /***/
            190: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  E: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var M = function(x, c, o) {
                  o === void 0 && (o = "classic");
                  var v = x.getBoundingClientRect(), d = 36;
                  document.body.insertAdjacentHTML("beforeend", '<div class="vditor vditor-img'.concat(o === "dark" ? " vditor--dark" : "", `">
    <div class="vditor-img__bar">
      <span class="vditor-img__btn" data-deg="0">
        <svg><use xlink:href="#vditor-icon-redo"></use></svg>
        `).concat(window.VditorI18n.spin, `
      </span>
      <span class="vditor-img__btn"  onclick="this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''">
        X &nbsp;`).concat(window.VditorI18n.close, `
      </span>
    </div>
    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = '';document.body.style.overflow = ''">
      <img style="width: `).concat(x.width, "px;height:").concat(x.height, "px;transform: translate3d(").concat(v.left, "px, ").concat(v.top - d, 'px, 0)" src="').concat(x.getAttribute("src"), `">
    </div>
</div>`)), document.body.style.overflow = "hidden";
                  var y = document.querySelector(".vditor-img img"), f = "translate3d(".concat(Math.max(0, window.innerWidth - x.naturalWidth) / 2, "px, ").concat(Math.max(0, window.innerHeight - d - x.naturalHeight) / 2, "px, 0)");
                  setTimeout(function() {
                    y.setAttribute("style", "transition: transform .3s ease-in-out;transform: ".concat(f)), setTimeout(function() {
                      y.parentElement.scrollTo((y.parentElement.scrollWidth - y.parentElement.clientWidth) / 2, (y.parentElement.scrollHeight - y.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                  var L = document.querySelector(".vditor-img__btn");
                  L.addEventListener("click", function() {
                    var T = parseInt(L.getAttribute("data-deg"), 10) + 90;
                    T / 90 % 2 === 1 && x.naturalWidth > y.parentElement.clientHeight ? y.style.transform = "translate3d(".concat(Math.max(0, window.innerWidth - x.naturalWidth) / 2, "px, ").concat(x.naturalWidth / 2 - x.naturalHeight / 2, "px, 0) rotateZ(").concat(T, "deg)") : y.style.transform = "".concat(f, " rotateZ(").concat(T, "deg)"), L.setAttribute("data-deg", T.toString()), setTimeout(function() {
                      y.parentElement.scrollTo((y.parentElement.scrollWidth - y.parentElement.clientWidth) / 2, (y.parentElement.scrollHeight - y.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                };
              }
            ),
            /***/
            580: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(290), c = function(o, v) {
                  v === void 0 && (v = M.g.CDN), M.g.CODE_THEME.includes(o) || (o = "github");
                  var d = document.getElementById("vditorHljsStyle"), y = "".concat(v, "/dist/js/highlight.js/styles/").concat(o, ".min.css");
                  d ? d.getAttribute("href") !== y && (d.remove(), (0, x.c)(y, "vditorHljsStyle")) : (0, x.c)(y, "vditorHljsStyle");
                };
              }
            ),
            /***/
            538: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  Z: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var M = w(290), x = function(c, o) {
                  if (!(!c || !o)) {
                    var v = document.getElementById("vditorContentTheme"), d = "".concat(o, "/").concat(c, ".css");
                    v ? v.getAttribute("href") !== d && (v.remove(), (0, M.c)(d, "vditorContentTheme")) : (0, M.c)(d, "vditorContentTheme");
                  }
                };
              }
            ),
            /***/
            413: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  G: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var M = function(c, o) {
                  if (document.getElementById(o))
                    return !1;
                  var v = new XMLHttpRequest();
                  v.open("GET", c, !1), v.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), v.send("");
                  var d = document.createElement("script");
                  d.type = "text/javascript", d.text = v.responseText, d.id = o, document.head.appendChild(d);
                }, x = function(c, o) {
                  return new Promise(function(v, d) {
                    if (document.getElementById(o))
                      return v(!0), !1;
                    var y = document.createElement("script");
                    y.src = c, y.async = !0, document.head.appendChild(y), y.onerror = function(f) {
                      d(f);
                    }, y.onload = function() {
                      if (document.getElementById(o))
                        return y.remove(), v(!0), !1;
                      y.id = o, v(!0);
                    };
                  });
                };
              }
            ),
            /***/
            290: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  c: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var M = function(x, c) {
                  if (!document.getElementById(c)) {
                    var o = document.createElement("link");
                    o.id = c, o.rel = "stylesheet", o.type = "text/css", o.href = x, document.getElementsByTagName("head")[0].appendChild(o);
                  }
                };
              }
            ),
            /***/
            105: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var M = function(x) {
                  return x.replace(/\u00a0/g, " ");
                };
              }
            ),
            /***/
            410: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  G6: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  vU: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  pK: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  Le: () => (
                    /* binding */
                    o
                  ),
                  /* harmony export */
                  yl: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  ns: () => (
                    /* binding */
                    d
                  ),
                  /* harmony export */
                  i7: () => (
                    /* binding */
                    y
                  )
                  /* harmony export */
                });
                var M = function() {
                  return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1;
                }, x = function() {
                  return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                }, c = function() {
                  try {
                    return typeof localStorage < "u";
                  } catch {
                    return !1;
                  }
                }, o = function() {
                  return navigator.userAgent.indexOf("iPhone") > -1 ? "touchstart" : "click";
                }, v = function(f) {
                  return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? !!(f.metaKey && !f.ctrlKey) : !!(!f.metaKey && f.ctrlKey);
                }, d = function(f) {
                  return /Mac/.test(navigator.platform) || navigator.platform === "iPhone" ? f.indexOf("⇧") > -1 && x() && (f = f.replace(";", ":").replace("=", "+").replace("-", "_")) : (f.startsWith("⌘") ? f = f.replace("⌘", "⌘+") : f.startsWith("⌥") && f.substr(1, 1) !== "⌘" ? f = f.replace("⌥", "⌥+") : f = f.replace("⇧⌘", "⌘+⇧+").replace("⌥⌘", "⌥+⌘+"), f = f.replace("⌘", "Ctrl").replace("⇧", "Shift").replace("⌥", "Alt"), f.indexOf("Shift") > -1 && (f = f.replace(";", ":").replace("=", "+").replace("-", "_"))), f;
                }, y = function() {
                  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                };
              }
            ),
            /***/
            494: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  Wb: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  on: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  Qf: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var M = function() {
                  return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(o) {
                    return (parseInt(o, 10) ^ window.crypto.getRandomValues(new Uint32Array(1))[0] & 15 >> parseInt(o, 10) / 4).toString(16);
                  });
                }, x = function(o, v) {
                  v === void 0 && (v = window.location.search);
                  var d = v.substring(v.indexOf("?")), y = d.indexOf("#"), f = new URLSearchParams(d.substring(0, y >= 0 ? y : void 0));
                  return f.get(o);
                }, c = function(o) {
                  return Function('"use strict";return ('.concat(o, ")"))();
                };
              }
            ),
            /***/
            106: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  JQ: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  E2: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  O9: () => (
                    /* binding */
                    o
                  ),
                  /* harmony export */
                  a1: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  F9: () => (
                    /* binding */
                    d
                  ),
                  /* harmony export */
                  lG: () => (
                    /* binding */
                    y
                  ),
                  /* harmony export */
                  fb: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  DX: () => (
                    /* binding */
                    L
                  )
                  /* harmony export */
                });
                var M = w(771), x = function(T, C) {
                  for (var S = f(T, C), s = !1, _ = !1; S && !S.classList.contains("vditor-reset") && !_; )
                    s = f(S.parentElement, C), s ? S = s : _ = !0;
                  return S || !1;
                }, c = function(T, C) {
                  for (var S = (0, M.S)(T, C), s = !1, _ = !1; S && !S.classList.contains("vditor-reset") && !_; )
                    s = (0, M.S)(S.parentElement, C), s ? S = s : _ = !0;
                  return S || !1;
                }, o = function(T) {
                  var C = c(T, "UL"), S = c(T, "OL"), s = C;
                  return S && (!C || C && S.contains(C)) && (s = S), s;
                }, v = function(T, C, S) {
                  if (!T)
                    return !1;
                  T.nodeType === 3 && (T = T.parentElement);
                  for (var s = T, _ = !1; s && !_ && !s.classList.contains("vditor-reset"); )
                    s.getAttribute(C) === S ? _ = !0 : s = s.parentElement;
                  return _ && s;
                }, d = function(T) {
                  if (!T)
                    return !1;
                  T.nodeType === 3 && (T = T.parentElement);
                  var C = T, S = !1, s = v(T, "data-block", "0");
                  if (s)
                    return s;
                  for (; C && !S && !C.classList.contains("vditor-reset"); )
                    C.tagName === "H1" || C.tagName === "H2" || C.tagName === "H3" || C.tagName === "H4" || C.tagName === "H5" || C.tagName === "H6" || C.tagName === "P" || C.tagName === "BLOCKQUOTE" || C.tagName === "OL" || C.tagName === "UL" ? S = !0 : C = C.parentElement;
                  return S && C;
                }, y = function(T, C) {
                  if (!T)
                    return !1;
                  T.nodeType === 3 && (T = T.parentElement);
                  for (var S = T, s = !1; S && !s && !S.classList.contains("vditor-reset"); )
                    S.nodeName === C ? s = !0 : S = S.parentElement;
                  return s && S;
                }, f = function(T, C) {
                  if (!T)
                    return !1;
                  T.nodeType === 3 && (T = T.parentElement);
                  for (var S = T, s = !1; S && !s && !S.classList.contains("vditor-reset"); )
                    S.classList.contains(C) ? s = !0 : S = S.parentElement;
                  return s && S;
                }, L = function(T) {
                  for (; T && T.lastChild; )
                    T = T.lastChild;
                  return T;
                };
              }
            ),
            /***/
            771: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  S: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  W: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var M = function(c, o) {
                  if (!c)
                    return !1;
                  c.nodeType === 3 && (c = c.parentElement);
                  for (var v = c, d = !1; v && !d && !v.classList.contains("vditor-reset"); )
                    v.nodeName.indexOf(o) === 0 ? d = !0 : v = v.parentElement;
                  return d && v;
                }, x = function(c) {
                  var o = M(c, "H");
                  return o && o.tagName.length === 2 && o.tagName !== "HR" ? o : !1;
                };
              }
            ),
            /***/
            673: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  T: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var M = function() {
                  for (var x = [], c = 0; c < arguments.length; c++)
                    x[c] = arguments[c];
                  for (var o = {}, v = function(y) {
                    for (var f in y)
                      y.hasOwnProperty(f) && (Object.prototype.toString.call(y[f]) === "[object Object]" ? o[f] = M(o[f], y[f]) : o[f] = y[f]);
                  }, d = 0; d < x.length; d++)
                    v(x[d]);
                  return o;
                };
              }
            ),
            /***/
            810: (
              /***/
              (O, p, w) => {
                w.d(p, {
                  /* harmony export */
                  zh: () => (
                    /* binding */
                    o
                  ),
                  /* harmony export */
                  Ny: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  Gb: () => (
                    /* binding */
                    d
                  ),
                  /* harmony export */
                  Hc: () => (
                    /* binding */
                    y
                  ),
                  /* harmony export */
                  im: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  $j: () => (
                    /* binding */
                    L
                  ),
                  /* harmony export */
                  ib: () => (
                    /* binding */
                    T
                  ),
                  /* harmony export */
                  oC: () => (
                    /* binding */
                    C
                  )
                  /* harmony export */
                });
                var M = w(145), x = w(410), c = w(106), o = function(S) {
                  var s, _ = S[S.currentMode].element;
                  return getSelection().rangeCount > 0 && (s = getSelection().getRangeAt(0), _.isEqualNode(s.startContainer) || _.contains(s.startContainer)) ? s : S[S.currentMode].range ? S[S.currentMode].range : (_.focus(), s = _.ownerDocument.createRange(), s.setStart(_, 0), s.collapse(!0), s);
                }, v = function(S) {
                  var s = window.getSelection().getRangeAt(0);
                  if (!S.contains(s.startContainer) && !(0, c.fb)(s.startContainer, "vditor-panel--none"))
                    return {
                      left: 0,
                      top: 0
                    };
                  var _ = S.parentElement.getBoundingClientRect(), P;
                  if (s.getClientRects().length === 0)
                    if (s.startContainer.nodeType === 3) {
                      var j = s.startContainer.parentElement;
                      if (j && j.getClientRects().length > 0)
                        P = j.getClientRects()[0];
                      else
                        return {
                          left: 0,
                          top: 0
                        };
                    } else {
                      var H = s.startContainer.children;
                      if (H[s.startOffset] && H[s.startOffset].getClientRects().length > 0)
                        P = H[s.startOffset].getClientRects()[0];
                      else if (s.startContainer.childNodes.length > 0) {
                        var W = s.cloneRange();
                        s.selectNode(s.startContainer.childNodes[Math.max(0, s.startOffset - 1)]), P = s.getClientRects()[0], s.setEnd(W.endContainer, W.endOffset), s.setStart(W.startContainer, W.startOffset);
                      } else
                        P = s.startContainer.getClientRects()[0];
                      if (!P) {
                        for (var Q = s.startContainer.childNodes[s.startOffset]; !Q.getClientRects || Q.getClientRects && Q.getClientRects().length === 0; )
                          Q = Q.parentElement;
                        P = Q.getClientRects()[0];
                      }
                    }
                  else
                    P = s.getClientRects()[0];
                  return {
                    left: P.left - _.left,
                    top: P.top - _.top
                  };
                }, d = function(S, s) {
                  if (!s) {
                    if (getSelection().rangeCount === 0)
                      return !1;
                    s = getSelection().getRangeAt(0);
                  }
                  var _ = s.commonAncestorContainer;
                  return S.isEqualNode(_) || S.contains(_);
                }, y = function(S) {
                  var s = window.getSelection();
                  s.removeAllRanges(), s.addRange(S);
                }, f = function(S, s, _) {
                  var P = {
                    end: 0,
                    start: 0
                  };
                  if (!_) {
                    if (getSelection().rangeCount === 0)
                      return P;
                    _ = window.getSelection().getRangeAt(0);
                  }
                  if (d(s, _)) {
                    var j = _.cloneRange();
                    S.childNodes[0] && S.childNodes[0].childNodes[0] ? j.setStart(S.childNodes[0].childNodes[0], 0) : j.selectNodeContents(S), j.setEnd(_.startContainer, _.startOffset), P.start = j.toString().length, P.end = P.start + _.toString().length;
                  }
                  return P;
                }, L = function(S, s, _) {
                  var P = 0, j = 0, H = _.childNodes[j], W = !1, Q = !1;
                  S = Math.max(0, S), s = Math.max(0, s);
                  var $ = _.ownerDocument.createRange();
                  for ($.setStart(H || _, 0), $.collapse(!0); !Q && H; ) {
                    var I = P + H.textContent.length;
                    if (!W && S >= P && S <= I && (S === 0 ? $.setStart(H, 0) : H.childNodes[0].nodeType === 3 ? $.setStart(H.childNodes[0], S - P) : H.nextSibling ? $.setStartBefore(H.nextSibling) : $.setStartAfter(H), W = !0, S === s)) {
                      Q = !0;
                      break;
                    }
                    W && s >= P && s <= I && (s === 0 ? $.setEnd(H, 0) : H.childNodes[0].nodeType === 3 ? $.setEnd(H.childNodes[0], s - P) : H.nextSibling ? $.setEndBefore(H.nextSibling) : $.setEndAfter(H), Q = !0), P = I, H = _.childNodes[++j];
                  }
                  return !Q && _.childNodes[j - 1] && $.setStartBefore(_.childNodes[j - 1]), y($), $;
                }, T = function(S, s) {
                  var _ = S.querySelector("wbr");
                  if (_) {
                    if (!_.previousElementSibling)
                      _.previousSibling ? s.setStart(_.previousSibling, _.previousSibling.textContent.length) : _.nextSibling ? _.nextSibling.nodeType === 3 ? s.setStart(_.nextSibling, 0) : s.setStartBefore(_.nextSibling) : s.setStart(_.parentElement, 0);
                    else if (_.previousElementSibling.isSameNode(_.previousSibling))
                      if (_.previousElementSibling.lastChild) {
                        s.setStartBefore(_), s.collapse(!0), y(s), (0, x.i7)() && (_.previousElementSibling.tagName === "EM" || _.previousElementSibling.tagName === "STRONG" || _.previousElementSibling.tagName === "S") && (s.insertNode(document.createTextNode(M.g.ZWSP)), s.collapse(!1)), _.remove();
                        return;
                      } else
                        s.setStartAfter(_.previousElementSibling);
                    else
                      s.setStart(_.previousSibling, _.previousSibling.textContent.length);
                    s.collapse(!0), _.remove(), y(s);
                  }
                }, C = function(S, s) {
                  var _ = document.createElement("div");
                  _.innerHTML = S;
                  var P = _.querySelectorAll("p");
                  P.length === 1 && !P[0].previousSibling && !P[0].nextSibling && s[s.currentMode].element.children.length > 0 && _.firstElementChild.tagName === "P" && (S = P[0].innerHTML.trim());
                  var j = document.createElement("div");
                  j.innerHTML = S;
                  var H = o(s);
                  if (H.toString() !== "" && (s[s.currentMode].preventInput = !0, document.execCommand("delete", !1, "")), j.firstElementChild && j.firstElementChild.getAttribute("data-block") === "0") {
                    j.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
                    var W = (0, c.F9)(H.startContainer);
                    if (!W)
                      s[s.currentMode].element.insertAdjacentHTML("beforeend", j.innerHTML);
                    else {
                      var Q = (0, c.lG)(H.startContainer, "LI");
                      Q && j.firstElementChild.tagName === "UL" ? Q.insertAdjacentHTML("afterend", j.firstElementChild.innerHTML) : W.insertAdjacentHTML("afterend", j.innerHTML);
                    }
                    T(s[s.currentMode].element, H);
                  } else {
                    var $ = document.createElement("template");
                    $.innerHTML = S, H.insertNode($.content.cloneNode(!0)), H.collapse(!1), y(H);
                  }
                };
              }
            )
            /******/
          }, k = {};
          function A(O) {
            var p = k[O];
            if (p !== void 0)
              return p.exports;
            var w = k[O] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return E[O](w, w.exports, A), w.exports;
          }
          A.d = (O, p) => {
            for (var w in p)
              A.o(p, w) && !A.o(O, w) && Object.defineProperty(O, w, { enumerable: !0, get: p[w] });
          }, A.o = (O, p) => Object.prototype.hasOwnProperty.call(O, p), A.r = (O) => {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(O, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(O, "__esModule", { value: !0 });
          };
          var N = {};
          return (() => {
            A.d(N, {
              default: () => (
                /* binding */
                Mo
              )
            });
            var O = A(408), p = A(145), w = A(105), M = function(e) {
              return e.currentMode === "sv" ? (0, w.X)("".concat(e.sv.element.textContent, `
`).replace(/\n\n$/, `
`)) : e.currentMode === "wysiwyg" ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML) : e.currentMode === "ir" ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML) : "";
            }, x = A(413), c = (
              /** @class */
              function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-devtools", this.element.innerHTML = '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>';
                }
                return e.prototype.renderEchart = function(t) {
                  var n = this;
                  t.devtools.element.style.display === "block" && (0, x.G)("".concat(t.options.cdn, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    n.ASTChart || (n.ASTChart = echarts.init(t.devtools.element.lastElementChild));
                    try {
                      n.element.lastElementChild.style.display = "block", n.element.firstElementChild.innerHTML = "", n.ASTChart.setOption({
                        series: [
                          {
                            data: JSON.parse(t.lute.RenderEChartsJSON(M(t))),
                            initialTreeDepth: -1,
                            label: {
                              align: "left",
                              backgroundColor: "rgba(68, 77, 86, .68)",
                              borderRadius: 3,
                              color: "#d1d5da",
                              fontSize: 12,
                              lineHeight: 12,
                              offset: [9, 12],
                              padding: [2, 4, 2, 4],
                              position: "top",
                              verticalAlign: "middle"
                            },
                            lineStyle: {
                              color: "#4285f4",
                              type: "curve",
                              width: 1
                            },
                            orient: "vertical",
                            roam: !0,
                            type: "tree"
                          }
                        ],
                        toolbox: {
                          bottom: 25,
                          emphasis: {
                            iconStyle: {
                              color: "#4285f4"
                            }
                          },
                          feature: {
                            restore: {
                              show: !0
                            },
                            saveAsImage: {
                              show: !0
                            }
                          },
                          right: 15,
                          show: !0
                        }
                      }), n.ASTChart.resize();
                    } catch (r) {
                      n.element.lastElementChild.style.display = "none", n.element.firstElementChild.innerHTML = r;
                    }
                  });
                }, e;
              }()
            ), o = A(410), v = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && r.classList.contains("vditor-menu--current") && r.classList.remove("vditor-menu--current");
                }
              });
            }, d = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && !r.classList.contains("vditor-menu--current") && r.classList.add("vditor-menu--current");
                }
              });
            }, y = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && r.classList.contains(p.g.CLASS_MENU_DISABLED) && r.classList.remove(p.g.CLASS_MENU_DISABLED);
                }
              });
            }, f = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && !r.classList.contains(p.g.CLASS_MENU_DISABLED) && r.classList.add(p.g.CLASS_MENU_DISABLED);
                }
              });
            }, L = function(e, t) {
              t.forEach(function(n) {
                e[n] && e[n] && (e[n].style.display = "none");
              });
            }, T = function(e, t) {
              t.forEach(function(n) {
                e[n] && e[n] && (e[n].style.display = "block");
              });
            }, C = function(e, t, n) {
              t.includes("subToolbar") && (e.toolbar.element.querySelectorAll(".vditor-hint").forEach(function(r) {
                n && r.isEqualNode(n) || (r.style.display = "none");
              }), e.toolbar.elements.emoji && (e.toolbar.elements.emoji.lastElementChild.style.display = "none")), t.includes("hint") && (e.hint.element.style.display = "none"), e.wysiwyg.popover && t.includes("popover") && (e.wysiwyg.popover.style.display = "none");
            }, S = function(e, t, n, r) {
              n.addEventListener((0, o.Le)(), function(a) {
                a.preventDefault(), a.stopPropagation(), !n.classList.contains(p.g.CLASS_MENU_DISABLED) && (e.toolbar.element.querySelectorAll(".vditor-hint--current").forEach(function(i) {
                  i.classList.remove("vditor-hint--current");
                }), t.style.display === "block" ? t.style.display = "none" : (C(e, ["subToolbar", "hint", "popover"], n.parentElement.parentElement), n.classList.contains("vditor-tooltipped") || n.classList.add("vditor-hint--current"), t.style.display = "block", e.toolbar.element.getBoundingClientRect().right - n.getBoundingClientRect().right < 250 ? t.classList.add("vditor-panel--left") : t.classList.remove("vditor-panel--left")));
              });
            }, s = A(106), _ = A(771), P = function(e, t, n, r) {
              r && console.log("".concat(e, " - ").concat(n, ": ").concat(t));
            }, j = A(135), H = A(775), W = A(428), Q = A(325), $ = A(483), I = A(999), F = A(472), J = A(637), ae = A(11), ce = A(194), de = A(229), pe = A(825), ye = function(e, t, n) {
              n === void 0 && (n = "sv");
              var r = document.createElement("div");
              r.innerHTML = e;
              var a = !1;
              r.childElementCount === 1 && r.lastElementChild.style.fontFamily.indexOf("monospace") > -1 && (a = !0);
              var i = r.querySelectorAll("pre");
              if (r.childElementCount === 1 && i.length === 1 && i[0].className !== "vditor-wysiwyg" && i[0].className !== "vditor-sv" && (a = !0), e.indexOf(`
<p class="p1">`) === 0 && (a = !0), r.childElementCount === 1 && r.firstElementChild.tagName === "TABLE" && r.querySelector(".line-number") && r.querySelector(".line-content") && (a = !0), a) {
                var l = t || e;
                return /\n/.test(l) || i.length === 1 ? n === "wysiwyg" ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>'.concat(l.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "<wbr></code></pre></div>") : "\n```\n" + l.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "\n```" : n === "wysiwyg" ? "<code>".concat(l.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "</code><wbr>") : "`".concat(l, "`");
              }
              return !1;
            }, ge = function(e, t) {
              if (e) {
                if (e.parentElement.getAttribute("data-type") === "html-block") {
                  e.setAttribute("data-render", "1");
                  return;
                }
                var n = e.firstElementChild.className.replace("language-", "");
                if (n === "abc")
                  (0, j.Q)(e, t.options.cdn);
                else if (n === "mermaid")
                  (0, J.i)(e, t.options.cdn, t.options.theme);
                else if (n === "smiles")
                  (0, pe.J)(e, t.options.cdn, t.options.theme);
                else if (n === "markmap")
                  (0, ae.K)(e, t.options.cdn);
                else if (n === "flowchart")
                  (0, Q.P)(e, t.options.cdn);
                else if (n === "echarts")
                  (0, H.p)(e, t.options.cdn, t.options.theme);
                else if (n === "mindmap")
                  (0, ce.P)(e, t.options.cdn, t.options.theme);
                else if (n === "plantuml")
                  (0, de.B)(e, t.options.cdn);
                else if (n === "graphviz")
                  (0, $.v)(e, t.options.cdn);
                else if (n === "math")
                  (0, F.H)(e, { cdn: t.options.cdn, math: t.options.preview.math });
                else {
                  var r = t.options.customRenders.find(function(a) {
                    if (a.language === n)
                      return a.render(e, t), !0;
                  });
                  r || ((0, I.s)(Object.assign({}, t.options.preview.hljs), e, t.options.cdn), (0, W.O)(e, t.options.preview.hljs));
                }
                e.setAttribute("data-render", "1");
              }
            }, B = A(810), Be = function(e) {
              if (e.currentMode !== "sv") {
                var t = e[e.currentMode].element, n = e.outline.render(e);
                n === "" && (n = "[ToC]"), t.querySelectorAll('[data-type="toc-block"]').forEach(function(r) {
                  r.innerHTML = n, (0, F.H)(r, {
                    cdn: e.options.cdn,
                    math: e.options.preview.math
                  });
                });
              }
            }, Ie = function(e, t) {
              var n = (0, s.lG)(e.target, "SPAN");
              if (n && (0, s.fb)(n, "vditor-toc")) {
                var r = t[t.currentMode].element.querySelector("#" + n.getAttribute("data-target-id"));
                if (r)
                  if (t.options.height === "auto") {
                    var a = r.offsetTop + t.element.offsetTop;
                    t.options.toolbarConfig.pin || (a += t.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, a);
                  } else
                    t.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, t.element.offsetTop), t[t.currentMode].element.scrollTop = r.offsetTop;
                return;
              }
            }, We = function(e, t, n, r) {
              if (e.previousElementSibling && e.previousElementSibling.classList.contains("vditor-toc")) {
                if (n.key === "Backspace" && (0, B.im)(e, t[t.currentMode].element, r).start === 0)
                  return e.previousElementSibling.remove(), Ee(t), !0;
                if (xt(t, n, r, e, e.previousElementSibling))
                  return !0;
              }
              if (e.nextElementSibling && e.nextElementSibling.classList.contains("vditor-toc")) {
                if (n.key === "Delete" && (0, B.im)(e, t[t.currentMode].element, r).start >= e.textContent.trimRight().length)
                  return e.nextElementSibling.remove(), Ee(t), !0;
                if (qt(t, n, r, e, e.nextElementSibling))
                  return !0;
              }
              if (n.key === "Backspace" || n.key === "Delete") {
                var a = (0, s.fb)(r.startContainer, "vditor-toc");
                if (a)
                  return a.remove(), Ee(t), !0;
              }
            }, Ue = function(e, t, n, r) {
              n === void 0 && (n = !1);
              var a = (0, s.F9)(t.startContainer);
              if (a && !n && a.getAttribute("data-type") !== "code-block") {
                if (Vn(a.innerHTML) && a.previousElementSibling || Un(a.innerHTML))
                  return;
                for (
                  var i = (0, B.im)(a, e.ir.element, t).start, l = !0, h = i - 1;
                  // 软换行后有空格
                  h > a.textContent.substr(0, i).lastIndexOf(`
`);
                  h--
                )
                  if (a.textContent.charAt(h) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  a.textContent.charAt(h) !== "	") {
                    l = !1;
                    break;
                  }
                i === 0 && (l = !1);
                for (var b = !0, h = i - 1; h < a.textContent.length; h++)
                  if (a.textContent.charAt(h) !== " " && a.textContent.charAt(h) !== `
`) {
                    b = !1;
                    break;
                  }
                if (l) {
                  typeof e.options.input == "function" && e.options.input(M(e));
                  return;
                }
                if (b && /^#{1,6} $/.test(a.textContent) && (b = !1), b) {
                  var m = (0, s.fb)(t.startContainer, "vditor-ir__marker");
                  if (!m) {
                    var D = t.startContainer.previousSibling;
                    D && D.nodeType !== 3 && D.classList.contains("vditor-ir__node--expand") && D.classList.remove("vditor-ir__node--expand"), typeof e.options.input == "function" && e.options.input(M(e));
                    return;
                  }
                }
              }
              if (e.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(be) {
                be.classList.remove("vditor-ir__node--expand");
              }), a || (a = e.ir.element), !a.querySelector("wbr")) {
                var R = (0, s.fb)(t.startContainer, "vditor-ir__preview");
                R ? R.previousElementSibling.insertAdjacentHTML("beforeend", "<wbr>") : t.insertNode(document.createElement("wbr"));
              }
              a.querySelectorAll("[style]").forEach(function(be) {
                be.removeAttribute("style");
              }), a.getAttribute("data-type") === "link-ref-defs-block" && (a = e.ir.element);
              var G = a.isEqualNode(e.ir.element), Z = (0, s.a1)(a, "data-type", "footnotes-block"), K = "";
              if (G)
                K = a.innerHTML;
              else {
                var te = (0, _.S)(t.startContainer, "BLOCKQUOTE"), ee = (0, s.O9)(t.startContainer);
                if (ee && (a = ee), te && (!ee || ee && !te.contains(ee)) && (a = te), Z && (a = Z), K = a.outerHTML, a.tagName === "UL" || a.tagName === "OL") {
                  var z = a.previousElementSibling, ue = a.nextElementSibling;
                  z && (z.tagName === "UL" || z.tagName === "OL") && (K = z.outerHTML + K, z.remove()), ue && (ue.tagName === "UL" || ue.tagName === "OL") && (K = K + ue.outerHTML, ue.remove()), K = K.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                } else a.previousElementSibling && a.previousElementSibling.textContent.replace(p.g.ZWSP, "") !== "" && r && r.inputType === "insertParagraph" && (K = a.previousElementSibling.outerHTML + K, a.previousElementSibling.remove());
                a.innerText.startsWith("```") || (e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(be) {
                  be && !a.isEqualNode(be) && (K += be.outerHTML, be.remove());
                }), e.ir.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(be) {
                  be && !a.isEqualNode(be) && (K += be.outerHTML, be.remove());
                }));
              }
              if (P("SpinVditorIRDOM", K, "argument", e.options.debugger), K = e.lute.SpinVditorIRDOM(K), P("SpinVditorIRDOM", K, "result", e.options.debugger), G)
                a.innerHTML = K;
              else if (a.outerHTML = K, Z) {
                var re = (0, s.a1)(e.ir.element.querySelector("wbr"), "data-type", "footnotes-def");
                if (re) {
                  var me = re.textContent, Le = me.substring(1, me.indexOf("]:")), ke = e.ir.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(Le, '"]'));
                  ke && ke.setAttribute("aria-label", me.substr(Le.length + 3).trim().substr(0, 24));
                }
              }
              var Me, qe = e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']");
              qe.forEach(function(be, Ne) {
                Ne === 0 ? Me = be : (Me.insertAdjacentHTML("beforeend", be.innerHTML), be.remove());
              }), qe.length > 0 && e.ir.element.insertAdjacentElement("beforeend", qe[0]);
              var Fe, ze = e.ir.element.querySelectorAll("[data-type='footnotes-block']");
              ze.forEach(function(be, Ne) {
                Ne === 0 ? Fe = be : (Fe.insertAdjacentHTML("beforeend", be.innerHTML), be.remove());
              }), ze.length > 0 && e.ir.element.insertAdjacentElement("beforeend", ze[0]), (0, B.ib)(e.ir.element, t), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(be) {
                ge(be, e);
              }), Be(e), st(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, q = function(e, t) {
              if (e === "")
                return !1;
              if (e.indexOf("⇧") === -1 && e.indexOf("⌘") === -1 && e.indexOf("⌥") === -1)
                return !(0, o.yl)(t) && !t.altKey && !t.shiftKey && t.code === e;
              if (e === "⇧Tab")
                return !!(!(0, o.yl)(t) && !t.altKey && t.shiftKey && t.code === "Tab");
              var n = e.split("");
              if (e.startsWith("⌥")) {
                var r = n.length === 3 ? n[2] : n[1];
                return !!((n.length === 3 ? (0, o.yl)(t) : !(0, o.yl)(t)) && t.altKey && !t.shiftKey && t.code === (/^[0-9]$/.test(r) ? "Digit" : "Key") + r);
              }
              e === "⌘Enter" && (n = ["⌘", "Enter"]);
              var a = n.length > 2 && n[0] === "⇧", i = a ? n[2] : n[1];
              return a && ((0, o.vU)() || !/Mac/.test(navigator.platform)) && (i === "-" ? i = "_" : i === "=" && (i = "+")), !!((0, o.yl)(t) && t.key.toLowerCase() === i.toLowerCase() && !t.altKey && (!a && !t.shiftKey || a && t.shiftKey));
            }, we = function(e) {
              var t = e.startContainer;
              if (t.nodeType === 3 && t.nodeValue.length !== e.startOffset)
                return !1;
              for (var n = t.nextSibling; n && n.textContent === ""; )
                n = n.nextSibling;
              if (n) {
                if (n && n.nodeType !== 3 && n.classList.contains("vditor-ir__node") && !n.getAttribute("data-block"))
                  return n;
              } else {
                var r = (0, s.fb)(t, "vditor-ir__marker");
                if (r && !r.nextSibling) {
                  var a = t.parentElement.parentElement.nextSibling;
                  if (a && a.nodeType !== 3 && a.classList.contains("vditor-ir__node"))
                    return a;
                }
                return !1;
              }
              return !1;
            }, ne = function(e) {
              var t = e.startContainer, n = t.previousSibling;
              return t.nodeType === 3 && e.startOffset === 0 && n && n.nodeType !== 3 && // *em*|text
              n.classList.contains("vditor-ir__node") && !n.getAttribute("data-block") ? n : !1;
            }, V = function(e, t) {
              t.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(l) {
                l.classList.remove("vditor-ir__node--expand");
              });
              var n = (0, s.JQ)(e.startContainer, "vditor-ir__node"), r = !e.collapsed && (0, s.JQ)(e.endContainer, "vditor-ir__node");
              if (!(!e.collapsed && (!n || n !== r))) {
                n && (n.classList.add("vditor-ir__node--expand"), n.classList.remove("vditor-ir__node--hidden"), (0, B.Hc)(e));
                var a = we(e);
                if (a) {
                  a.classList.add("vditor-ir__node--expand"), a.classList.remove("vditor-ir__node--hidden");
                  return;
                }
                var i = ne(e);
                if (i) {
                  i.classList.add("vditor-ir__node--expand"), i.classList.remove("vditor-ir__node--hidden");
                  return;
                }
              }
            }, ve = function(e, t) {
              if (e.ir.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var n = (0, B.zh)(e), r = n.startContainer;
              if (!wr(t, e, r) || (Er(n, e, t), Rr(n), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, o.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var a = (0, s.a1)(r, "data-newline", "1");
              if (!(0, o.yl)(t) && !t.altKey && !t.shiftKey && t.key === "Enter" && a && n.startOffset < a.textContent.length) {
                var i = a.previousElementSibling;
                i && (n.insertNode(document.createTextNode(i.textContent)), n.collapse(!1));
                var l = a.nextSibling;
                l && (n.insertNode(document.createTextNode(l.textContent)), n.collapse(!0));
              }
              var h = (0, s.lG)(r, "P");
              if (Lr(t, e, h, n) || Tr(n, e, h, t) || Br(e, n, t, h))
                return !0;
              var b = (0, s.fb)(r, "vditor-ir__marker--pre");
              if (b && b.tagName === "PRE") {
                var m = b.firstChild;
                if (Or(e, t, b, n) || (m.getAttribute("data-type") === "math-block" || m.getAttribute("data-type") === "html-block") && xt(e, t, n, m, b.parentElement) || qt(e, t, n, m, b.parentElement))
                  return !0;
              }
              var D = (0, s.a1)(r, "data-type", "code-block-info");
              if (D) {
                if (t.key === "Enter" || t.key === "Tab")
                  return n.selectNodeContents(D.nextElementSibling.firstChild), n.collapse(!0), t.preventDefault(), C(e, ["hint"]), !0;
                if (t.key === "Backspace") {
                  var R = (0, B.im)(D, e.ir.element).start;
                  R === 1 && n.setStart(r, 0), R === 2 && (e.hint.recentLanguage = "");
                }
                if (xt(e, t, n, D, D.parentElement))
                  return C(e, ["hint"]), !0;
              }
              var G = (0, s.lG)(r, "TD") || (0, s.lG)(r, "TH");
              if (t.key.indexOf("Arrow") > -1 && G) {
                var Z = ui(G);
                if (Z && xt(e, t, n, G, Z))
                  return !0;
                var K = fi(G);
                if (K && qt(e, t, n, G, K))
                  return !0;
              }
              if (Dr(e, t, n) || Hr(e, n, t) || Wn(e, n, t))
                return !0;
              var te = (0, _.W)(r);
              if (te) {
                if (q("⌘=", t)) {
                  var ee = te.querySelector(".vditor-ir__marker--heading");
                  return ee && ee.textContent.trim().length > 1 && zt(e, ee.textContent.substr(1)), t.preventDefault(), !0;
                }
                if (q("⌘-", t)) {
                  var ee = te.querySelector(".vditor-ir__marker--heading");
                  return ee && ee.textContent.trim().length < 6 && zt(e, ee.textContent.trim() + "# "), t.preventDefault(), !0;
                }
              }
              var z = (0, s.F9)(r);
              if (t.key === "Backspace" && !(0, o.yl)(t) && !t.shiftKey && !t.altKey && n.toString() === "") {
                if (Nr(e, n, t, h))
                  return !0;
                if (z && z.previousElementSibling && z.tagName !== "UL" && z.tagName !== "OL" && (z.previousElementSibling.getAttribute("data-type") === "code-block" || z.previousElementSibling.getAttribute("data-type") === "math-block")) {
                  var ue = (0, B.im)(z, e.ir.element, n).start;
                  if (ue === 0 || ue === 1 && z.innerText.startsWith(p.g.ZWSP))
                    return n.selectNodeContents(z.previousElementSibling.querySelector(".vditor-ir__marker--pre code")), n.collapse(!1), V(n, e), z.textContent.trim().replace(p.g.ZWSP, "") === "" && (z.remove(), st(e)), t.preventDefault(), !0;
                }
                if (te) {
                  var re = te.firstElementChild.textContent.length;
                  (0, B.im)(te, e.ir.element).start === re && re !== 0 && (n.setStart(te.firstElementChild.firstChild, re - 1), n.collapse(!0), (0, B.Hc)(n));
                }
              }
              return (t.key === "ArrowUp" || t.key === "ArrowDown") && z && (z.querySelectorAll(".vditor-ir__node").forEach(function(me) {
                me.contains(r) || me.classList.add("vditor-ir__node--hidden");
              }), Pr(t, z, n)) ? !0 : (Sr(n, t.key), z && We(z, e, t, n) ? (t.preventDefault(), !0) : !1);
            }, ie = A(190), _e = function(e, t) {
              e.querySelectorAll("[data-type=footnotes-link]").forEach(function(n) {
                for (var r = n.parentElement, a = r.nextSibling; a && a.textContent.startsWith("    "); ) {
                  var i = a;
                  i.childNodes.forEach(function(l) {
                    r.append(l.cloneNode(!0));
                  }), a = a.nextSibling, i.remove();
                }
                t && t(r);
              });
            }, Ce = function(e, t) {
              var n, r = getSelection().getRangeAt(0).cloneRange(), a = r.startContainer;
              r.startContainer.nodeType !== 3 && r.startContainer.tagName === "DIV" && (a = r.startContainer.childNodes[r.startOffset - 1]);
              var i = (0, s.a1)(a, "data-block", "0");
              if (i && t && (t.inputType === "deleteContentBackward" || t.data === " ")) {
                for (
                  var l = (0, B.im)(i, e.sv.element, r).start, h = !0, b = l - 1;
                  // 软换行后有空格
                  b > i.textContent.substr(0, l).lastIndexOf(`
`);
                  b--
                )
                  if (i.textContent.charAt(b) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  i.textContent.charAt(b) !== "	") {
                    h = !1;
                    break;
                  }
                if (l === 0 && (h = !1), h) {
                  Pe(e);
                  return;
                }
                if (t.inputType === "deleteContentBackward") {
                  var m = (0, s.a1)(a, "data-type", "code-block-open-marker") || (0, s.a1)(a, "data-type", "code-block-close-marker");
                  if (m) {
                    if (m.getAttribute("data-type") === "code-block-close-marker") {
                      var D = on(a, "code-block-open-marker");
                      if (D) {
                        D.textContent = m.textContent, Pe(e);
                        return;
                      }
                    }
                    if (m.getAttribute("data-type") === "code-block-open-marker") {
                      var D = on(a, "code-block-close-marker", !1);
                      if (D) {
                        D.textContent = m.textContent, Pe(e);
                        return;
                      }
                    }
                  }
                  var R = (0, s.a1)(a, "data-type", "math-block-open-marker");
                  if (R) {
                    var G = R.nextElementSibling.nextElementSibling;
                    G && G.getAttribute("data-type") === "math-block-close-marker" && (G.remove(), Pe(e));
                    return;
                  }
                  i.querySelectorAll('[data-type="code-block-open-marker"]').forEach(function(z) {
                    z.textContent.length === 1 && z.remove();
                  }), i.querySelectorAll('[data-type="code-block-close-marker"]').forEach(function(z) {
                    z.textContent.length === 1 && z.remove();
                  });
                  var Z = (0, s.a1)(a, "data-type", "heading-marker");
                  if (Z && Z.textContent.indexOf("#") === -1) {
                    Pe(e);
                    return;
                  }
                }
                if ((t.data === " " || t.inputType === "deleteContentBackward") && ((0, s.a1)(a, "data-type", "padding") || (0, s.a1)(a, "data-type", "li-marker") || (0, s.a1)(a, "data-type", "task-marker") || (0, s.a1)(a, "data-type", "blockquote-marker"))) {
                  Pe(e);
                  return;
                }
              }
              if (i && i.textContent.trimRight() === "$$") {
                Pe(e);
                return;
              }
              i || (i = e.sv.element), ((n = i.firstElementChild) === null || n === void 0 ? void 0 : n.getAttribute("data-type")) === "link-ref-defs-block" && (i = e.sv.element), (0, s.a1)(a, "data-type", "footnotes-link") && (i = e.sv.element), i.textContent.indexOf(Lute.Caret) === -1 && r.insertNode(document.createTextNode(Lute.Caret)), i.querySelectorAll("[style]").forEach(function(z) {
                z.removeAttribute("style");
              }), i.querySelectorAll("font").forEach(function(z) {
                z.outerHTML = z.innerHTML;
              });
              var K = i.textContent, te = i.isEqualNode(e.sv.element);
              if (te)
                K = i.textContent;
              else {
                i.previousElementSibling && (K = i.previousElementSibling.textContent + K, i.previousElementSibling.remove()), i.previousElementSibling && K.indexOf(`---
`) === 0 && (K = i.previousElementSibling.textContent + K, i.previousElementSibling.remove());
                var ee = "";
                e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(z, ue) {
                  z && !i.isEqualNode(z.parentElement) && (ee += z.parentElement.textContent + `
`, z.parentElement.remove());
                }), e.sv.element.querySelectorAll("[data-type='footnotes-link']").forEach(function(z, ue) {
                  z && !i.isEqualNode(z.parentElement) && (ee += z.parentElement.textContent + `
`, z.parentElement.remove());
                }), K = ee + K;
              }
              K = hr(K, e), te ? i.innerHTML = K : i.outerHTML = K, e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(z) {
                e.sv.element.insertAdjacentElement("beforeend", z.parentElement);
              }), _e(e.sv.element, function(z) {
                e.sv.element.insertAdjacentElement("beforeend", z);
              }), (0, B.ib)(e.sv.element, r), He(e), Pe(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, X = function(e, t) {
              var n, r, a, i, l;
              if (e.sv.composingLock = t.isComposing, t.isComposing || (t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, o.yl)(t) && t.key !== "Escape"))
                return !1;
              var h = (0, B.zh)(e), b = h.startContainer;
              h.startContainer.nodeType !== 3 && h.startContainer.tagName === "DIV" && (b = h.startContainer.childNodes[h.startOffset - 1]);
              var m = (0, s.a1)(b, "data-type", "text"), D = (0, s.a1)(b, "data-type", "blockquote-marker");
              if (!D && h.startOffset === 0 && m && m.previousElementSibling && m.previousElementSibling.getAttribute("data-type") === "blockquote-marker" && (D = m.previousElementSibling), D && t.key === "Enter" && !(0, o.yl)(t) && !t.altKey && D.nextElementSibling.textContent.trim() === "" && (0, B.im)(D, e.sv.element, h).start === D.textContent.length)
                return ((n = D.previousElementSibling) === null || n === void 0 ? void 0 : n.getAttribute("data-type")) === "padding" && D.previousElementSibling.setAttribute("data-action", "enter-remove"), D.remove(), Pe(e), t.preventDefault(), !0;
              var R = (0, s.a1)(b, "data-type", "li-marker"), G = (0, s.a1)(b, "data-type", "task-marker"), Z = R;
              if (Z || G && G.nextElementSibling.getAttribute("data-type") !== "task-marker" && (Z = G), !Z && h.startOffset === 0 && m && m.previousElementSibling && (m.previousElementSibling.getAttribute("data-type") === "li-marker" || m.previousElementSibling.getAttribute("data-type") === "task-marker") && (Z = m.previousElementSibling), Z) {
                var K = (0, B.im)(Z, e.sv.element, h).start, te = Z.getAttribute("data-type") === "task-marker", ee = Z;
                if (te && (ee = Z.previousElementSibling.previousElementSibling.previousElementSibling), K === Z.textContent.length) {
                  if (t.key === "Enter" && !(0, o.yl)(t) && !t.altKey && !t.shiftKey && Z.nextElementSibling.textContent.trim() === "")
                    return ((r = ee.previousElementSibling) === null || r === void 0 ? void 0 : r.getAttribute("data-type")) === "padding" ? (ee.previousElementSibling.remove(), Ce(e)) : (te && (ee.remove(), Z.previousElementSibling.previousElementSibling.remove(), Z.previousElementSibling.remove()), Z.nextElementSibling.remove(), Z.remove(), Pe(e)), t.preventDefault(), !0;
                  if (t.key === "Tab")
                    return t.shiftKey ? ee.previousElementSibling.getAttribute("data-type") === "padding" && ee.previousElementSibling.remove() : ee.insertAdjacentHTML("beforebegin", '<span data-type="padding">'.concat(ee.textContent.replace(/\S/g, " "), "</span>")), /^\d/.test(ee.textContent) && (ee.textContent = ee.textContent.replace(/^\d{1,}/, "1"), h.selectNodeContents(Z.firstChild), h.collapse(!1)), Ce(e), t.preventDefault(), !0;
                }
              }
              if (Wn(e, h, t))
                return !0;
              var z = (0, s.a1)(b, "data-block", "0"), ue = (0, _.S)(b, "SPAN");
              if (t.key === "Enter" && !(0, o.yl)(t) && !t.altKey && !t.shiftKey && z) {
                var re = !1, me = z.textContent.match(/^\n+/);
                (0, B.im)(z, e.sv.element).start <= (me ? me[0].length : 0) && (re = !0);
                var Le = `
`;
                if (ue) {
                  if (((a = ue.previousElementSibling) === null || a === void 0 ? void 0 : a.getAttribute("data-action")) === "enter-remove")
                    return ue.previousElementSibling.remove(), Pe(e), t.preventDefault(), !0;
                  Le += ni(ue);
                }
                return h.insertNode(document.createTextNode(Le)), h.collapse(!1), z && z.textContent.trim() !== "" && !re ? Ce(e) : Pe(e), t.preventDefault(), !0;
              }
              if (t.key === "Backspace" && !(0, o.yl)(t) && !t.altKey && !t.shiftKey) {
                if (ue && ((i = ue.previousElementSibling) === null || i === void 0 ? void 0 : i.getAttribute("data-type")) === "newline" && (0, B.im)(ue, e.sv.element, h).start === 1 && // 飘号的处理需在 inputEvent 中，否则上下飘号对不齐
                ue.getAttribute("data-type").indexOf("code-block-") === -1)
                  return h.setStart(ue, 0), h.extractContents(), ue.textContent.trim() !== "" ? Ce(e) : Pe(e), t.preventDefault(), !0;
                if (z && (0, B.im)(z, e.sv.element, h).start === 0 && z.previousElementSibling) {
                  h.extractContents();
                  var ke = z.previousElementSibling.lastElementChild;
                  return ke.getAttribute("data-type") === "newline" && (ke.remove(), ke = z.previousElementSibling.lastElementChild), ke.getAttribute("data-type") !== "newline" && (ke.insertAdjacentHTML("afterend", z.innerHTML), z.remove()), z.textContent.trim() !== "" && !(!((l = z.previousElementSibling) === null || l === void 0) && l.querySelector('[data-type="code-block-open-marker"]')) ? Ce(e) : (ke.getAttribute("data-type") !== "newline" && (h.selectNodeContents(ke.lastChild), h.collapse(!1)), Pe(e)), t.preventDefault(), !0;
                }
              }
              return !1;
            }, U = A(538), he = function(e) {
              e.options.theme === "dark" ? e.element.classList.add("vditor--dark") : e.element.classList.remove("vditor--dark");
            }, fe = function(e) {
              e.element.innerHTML = "", e.element.classList.add("vditor"), e.options.rtl && e.element.setAttribute("dir", "rtl"), he(e), (0, U.Z)(e.options.preview.theme.current, e.options.preview.theme.path), typeof e.options.height == "number" ? e.element.style.height = e.options.height + "px" : e.element.style.height = e.options.height, typeof e.options.minHeight == "number" && (e.element.style.minHeight = e.options.minHeight + "px"), typeof e.options.width == "number" ? e.element.style.width = e.options.width + "px" : e.element.style.width = e.options.width, e.element.appendChild(e.toolbar.element);
              var t = document.createElement("div");
              if (t.className = "vditor-content", e.options.outline.position === "left" && t.appendChild(e.outline.element), t.appendChild(e.wysiwyg.element.parentElement), t.appendChild(e.sv.element), t.appendChild(e.ir.element.parentElement), t.appendChild(e.preview.element), e.toolbar.elements.devtools && t.appendChild(e.devtools.element), e.options.outline.position === "right" && (e.outline.element.classList.add("vditor-outline--right"), t.appendChild(e.outline.element)), e.upload && t.appendChild(e.upload.element), e.options.resize.enable && t.appendChild(e.resize.element), t.appendChild(e.hint.element), t.appendChild(e.tip.element), e.element.appendChild(t), t.addEventListener("click", function() {
                C(e, ["subToolbar"]);
              }), e.toolbar.elements.export && e.element.insertAdjacentHTML("beforeend", '<iframe id="vditorExportIframe" style="width: 100%;height: 0;border: 0"></iframe>'), yt(e, e.options.mode, qa(e)), document.execCommand("DefaultParagraphSeparator", !1, "p"), navigator.userAgent.indexOf("iPhone") > -1 && typeof window.visualViewport < "u") {
                var n = !1, r = function(a) {
                  n || (n = !0, requestAnimationFrame(function() {
                    n = !1;
                    var i = e.toolbar.element;
                    i.style.transform = "none", i.getBoundingClientRect().top < 0 && (i.style.transform = "translate(0, ".concat(-i.getBoundingClientRect().top, "px)"));
                  }));
                };
                window.visualViewport.addEventListener("scroll", r), window.visualViewport.addEventListener("resize", r);
              }
            }, le = function(e) {
              var t = window.innerWidth <= p.g.MOBILE_WIDTH ? 10 : 35;
              if (e.wysiwyg.element.parentElement.style.display !== "none") {
                var n = (e.wysiwyg.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.wysiwyg.element.style.padding = "10px ".concat(Math.max(t, n), "px");
              }
              if (e.ir.element.parentElement.style.display !== "none") {
                var n = (e.ir.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.ir.element.style.padding = "10px ".concat(Math.max(t, n), "px");
              }
              e.preview.element.style.display !== "block" ? e.toolbar.element.style.paddingLeft = Math.max(5, parseInt(e[e.currentMode].element.style.paddingLeft || "0", 10) + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0)) + "px" : e.toolbar.element.style.paddingLeft = 5 + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0) + "px";
            }, xe = function(e) {
              if (e.options.typewriterMode) {
                var t = window.innerHeight;
                typeof e.options.height == "number" ? (t = e.options.height, typeof e.options.minHeight == "number" && (t = Math.max(t, e.options.minHeight)), t = Math.min(window.innerHeight, t)) : t = e.element.clientHeight, e.element.classList.contains("vditor--fullscreen") && (t = window.innerHeight), e[e.currentMode].element.style.setProperty("--editor-bottom", (t - e.toolbar.element.offsetHeight) / 2 + "px");
              }
            }, dt;
            function lr() {
              window.removeEventListener("resize", dt);
            }
            var qa = function(e) {
              xe(e), lr(), window.addEventListener("resize", dt = function() {
                le(e), xe(e);
              });
              var t = (0, o.pK)() && localStorage.getItem(e.options.cache.id);
              return (!e.options.cache.enable || !t) && (e.options.value ? t = e.options.value : e.originalInnerHTML ? t = e.lute.HTML2Md(e.originalInnerHTML) : e.options.cache.enable || (t = "")), t || "";
            }, Ft = function(e) {
              clearTimeout(e[e.currentMode].hlToolbarTimeoutId), e[e.currentMode].hlToolbarTimeoutId = window.setTimeout(function() {
                if (e[e.currentMode].element.getAttribute("contenteditable") !== "false" && (0, B.Gb)(e[e.currentMode].element)) {
                  v(e.toolbar.elements, p.g.EDIT_TOOLBARS), y(e.toolbar.elements, p.g.EDIT_TOOLBARS);
                  var t = (0, B.zh)(e), n = t.startContainer;
                  t.startContainer.nodeType === 3 && (n = t.startContainer.parentElement), n.classList.contains("vditor-reset") && (n = n.childNodes[t.startOffset]);
                  var r = e.currentMode === "sv" ? (0, s.a1)(n, "data-type", "heading") : (0, _.W)(n);
                  r && d(e.toolbar.elements, ["headings"]);
                  var a = e.currentMode === "sv" ? (0, s.a1)(n, "data-type", "blockquote") : (0, s.lG)(n, "BLOCKQUOTE");
                  a && d(e.toolbar.elements, ["quote"]);
                  var i = (0, s.a1)(n, "data-type", "strong");
                  i && d(e.toolbar.elements, ["bold"]);
                  var l = (0, s.a1)(n, "data-type", "em");
                  l && d(e.toolbar.elements, ["italic"]);
                  var h = (0, s.a1)(n, "data-type", "s");
                  h && d(e.toolbar.elements, ["strike"]);
                  var b = (0, s.a1)(n, "data-type", "a");
                  b && d(e.toolbar.elements, ["link"]);
                  var m = (0, s.lG)(n, "LI");
                  m ? (m.classList.contains("vditor-task") ? d(e.toolbar.elements, ["check"]) : m.parentElement.tagName === "OL" ? d(e.toolbar.elements, ["ordered-list"]) : m.parentElement.tagName === "UL" && d(e.toolbar.elements, ["list"]), y(e.toolbar.elements, ["outdent", "indent"])) : f(e.toolbar.elements, ["outdent", "indent"]);
                  var D = (0, s.a1)(n, "data-type", "code-block");
                  D && (f(e.toolbar.elements, [
                    "headings",
                    "bold",
                    "italic",
                    "strike",
                    "line",
                    "quote",
                    "list",
                    "ordered-list",
                    "check",
                    "code",
                    "inline-code",
                    "upload",
                    "link",
                    "table",
                    "record"
                  ]), d(e.toolbar.elements, ["code"]));
                  var R = (0, s.a1)(n, "data-type", "code");
                  R && (f(e.toolbar.elements, [
                    "headings",
                    "bold",
                    "italic",
                    "strike",
                    "line",
                    "quote",
                    "list",
                    "ordered-list",
                    "check",
                    "code",
                    "upload",
                    "link",
                    "table",
                    "record"
                  ]), d(e.toolbar.elements, ["inline-code"]));
                  var G = (0, s.a1)(n, "data-type", "table");
                  G && f(e.toolbar.elements, [
                    "headings",
                    "list",
                    "ordered-list",
                    "check",
                    "line",
                    "quote",
                    "code",
                    "table"
                  ]);
                }
              }, 200);
            }, Ae = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), clearTimeout(e.wysiwyg.afterRenderTimeoutId), e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function() {
                if (!e.wysiwyg.composingLock) {
                  var n = M(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, o.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, za = function(e) {
              for (var t = e.previousSibling; t; ) {
                if (t.nodeType !== 3 && t.tagName === "A" && !t.previousSibling && t.innerHTML.replace(p.g.ZWSP, "") === "" && t.nextSibling)
                  return t;
                t = t.previousSibling;
              }
              return !1;
            }, Ga = function(e) {
              for (var t = e.startContainer.nextSibling; t && t.textContent === ""; )
                t = t.nextSibling;
              return !!(t && t.nodeType !== 3 && (t.tagName === "CODE" || t.getAttribute("data-type") === "math-inline" || t.getAttribute("data-type") === "html-entity" || t.getAttribute("data-type") === "html-inline"));
            }, cr = function(e) {
              for (var t = "", n = e.nextSibling; n; )
                n.nodeType === 3 ? t += n.textContent : t += n.outerHTML, n = n.nextSibling;
              return t;
            }, ur = function(e) {
              for (var t = "", n = e.previousSibling; n; )
                n.nodeType === 3 ? t = n.textContent + t : t = n.outerHTML + t, n = n.previousSibling;
              return t;
            }, $a = function(e) {
              for (var t = e; t && !t.nextSibling; )
                t = t.parentElement;
              return t.nextSibling;
            }, Za = function(e) {
              var t = ur(e.startContainer), n = cr(e.startContainer), r = e.startContainer.textContent, a = e.startOffset, i = "", l = "";
              return (r.substr(0, a) !== "" && r.substr(0, a) !== p.g.ZWSP || t) && (i = "".concat(t).concat(r.substr(0, a))), (r.substr(a) !== "" && r.substr(a) !== p.g.ZWSP || n) && (l = "".concat(r.substr(a)).concat(n)), {
                afterHTML: l,
                beforeHTML: i
              };
            }, Mn = function(e, t) {
              Array.from(e.wysiwyg.element.childNodes).find(function(n) {
                if (n.nodeType === 3) {
                  var r = document.createElement("p");
                  r.setAttribute("data-block", "0"), r.textContent = n.textContent;
                  var a = t.startContainer.nodeType === 3 ? t.startOffset : n.textContent.length;
                  return n.parentNode.insertBefore(r, n), n.remove(), t.setStart(r.firstChild, Math.min(r.firstChild.textContent.length, a)), t.collapse(!0), (0, B.Hc)(t), !0;
                } else if (!n.getAttribute("data-block"))
                  return n.tagName === "P" ? n.remove() : (n.tagName === "DIV" ? (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.innerHTML, "</p>")) : n.tagName === "BR" ? n.outerHTML = '<p data-block="0">'.concat(n.outerHTML, "<wbr></p>") : (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.outerHTML, "</p>")), (0, B.ib)(e.wysiwyg.element, t), t = getSelection().getRangeAt(0)), !0;
              });
            }, an = function(e, t) {
              var n = (0, B.zh)(e), r = (0, s.F9)(n.startContainer);
              r || (r = n.startContainer.childNodes[n.startOffset]), !r && e.wysiwyg.element.children.length === 0 && (r = e.wysiwyg.element), r && !r.classList.contains("vditor-wysiwyg__block") && (n.insertNode(document.createElement("wbr")), r.innerHTML.trim() === "<wbr>" && (r.innerHTML = "<wbr><br>"), r.tagName === "BLOCKQUOTE" || r.classList.contains("vditor-reset") ? r.innerHTML = "<".concat(t, ' data-block="0">').concat(r.innerHTML.trim(), "</").concat(t, ">") : r.outerHTML = "<".concat(t, ' data-block="0">').concat(r.innerHTML.trim(), "</").concat(t, ">"), (0, B.ib)(e.wysiwyg.element, n), Be(e));
            }, _n = function(e) {
              var t = getSelection().getRangeAt(0), n = (0, s.F9)(t.startContainer);
              n || (n = t.startContainer.childNodes[t.startOffset]), n && (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.innerHTML, "</p>"), (0, B.ib)(e.wysiwyg.element, t)), e.wysiwyg.popover.style.display = "none";
            }, Vt = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e.previousElementSibling, a = r.ownerDocument.createRange();
              r.tagName === "CODE" ? (r.style.display = "inline-block", n ? a.setStart(r.firstChild, 1) : a.selectNodeContents(r)) : (r.style.display = "block", r.firstChild.firstChild || r.firstChild.appendChild(document.createTextNode("")), a.selectNodeContents(r.firstChild)), n ? a.collapse(!0) : a.collapse(!1), (0, B.Hc)(a), !e.firstElementChild.classList.contains("language-mindmap") && He(t);
            }, Ja = function(e, t) {
              if (e.wysiwyg.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var n = (0, B.zh)(e), r = n.startContainer;
              if (!wr(t, e, r) || (Er(n, e, t), Rr(n), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, o.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var a = (0, s.F9)(r), i = (0, s.lG)(r, "P");
              if (Lr(t, e, i, n) || Tr(n, e, i, t) || Dr(e, t, n))
                return !0;
              var l = (0, s.fb)(r, "vditor-wysiwyg__block");
              if (l) {
                if (t.key === "Escape" && l.children.length === 2)
                  return e.wysiwyg.popover.style.display = "none", l.firstElementChild.style.display = "none", e.wysiwyg.element.blur(), t.preventDefault(), !0;
                if (!(0, o.yl)(t) && !t.shiftKey && t.altKey && t.key === "Enter" && l.getAttribute("data-type") === "code-block") {
                  var h = e.wysiwyg.popover.querySelector(".vditor-input");
                  return h.focus(), h.select(), t.preventDefault(), !0;
                }
                if (l.getAttribute("data-block") === "0" && (Or(e, t, l.firstElementChild, n) || qt(e, t, n, l.firstElementChild, l) || l.getAttribute("data-type") !== "yaml-front-matter" && xt(e, t, n, l.firstElementChild, l)))
                  return !0;
              }
              if (Br(e, n, t, i))
                return !0;
              var b = (0, s.E2)(r, "BLOCKQUOTE");
              if (b && !t.shiftKey && t.altKey && t.key === "Enter") {
                (0, o.yl)(t) ? n.setStartBefore(b) : n.setStartAfter(b), (0, B.Hc)(n);
                var m = document.createElement("p");
                return m.setAttribute("data-block", "0"), m.innerHTML = `
`, n.insertNode(m), n.collapse(!0), (0, B.Hc)(n), Ae(e), He(e), t.preventDefault(), !0;
              }
              var D = (0, _.W)(r);
              if (D) {
                if (D.tagName === "H6" && r.textContent.length === n.startOffset && !(0, o.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter") {
                  var R = document.createElement("p");
                  return R.textContent = `
`, R.setAttribute("data-block", "0"), r.parentElement.insertAdjacentElement("afterend", R), n.setStart(R, 0), (0, B.Hc)(n), Ae(e), He(e), t.preventDefault(), !0;
                }
                if (q("⌘=", t)) {
                  var G = parseInt(D.tagName.substr(1), 10) - 1;
                  return G > 0 && (an(e, "h".concat(G)), Ae(e)), t.preventDefault(), !0;
                }
                if (q("⌘-", t)) {
                  var G = parseInt(D.tagName.substr(1), 10) + 1;
                  return G < 7 && (an(e, "h".concat(G)), Ae(e)), t.preventDefault(), !0;
                }
                t.key === "Backspace" && !(0, o.yl)(t) && !t.shiftKey && !t.altKey && D.textContent.length === 1 && _n(e);
              }
              if (Hr(e, n, t))
                return !0;
              if (t.altKey && t.key === "Enter" && !(0, o.yl)(t) && !t.shiftKey) {
                var Z = (0, s.lG)(r, "A"), K = (0, s.a1)(r, "data-type", "link-ref"), te = (0, s.a1)(r, "data-type", "footnotes-ref");
                if (Z || K || te || D && D.tagName.length === 2) {
                  var ee = e.wysiwyg.popover.querySelector("input");
                  ee.focus(), ee.select();
                }
              }
              if (Ke(e, t))
                return !0;
              if (q("⇧⌘U", t)) {
                var z = e.wysiwyg.popover.querySelector('[data-type="up"]');
                if (z)
                  return z.click(), t.preventDefault(), !0;
              }
              if (q("⇧⌘D", t)) {
                var z = e.wysiwyg.popover.querySelector('[data-type="down"]');
                if (z)
                  return z.click(), t.preventDefault(), !0;
              }
              if (Wn(e, n, t))
                return !0;
              if (!(0, o.yl)(t) && t.shiftKey && !t.altKey && t.key === "Enter" && r.parentElement.tagName !== "LI" && r.parentElement.tagName !== "P")
                return ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r.parentElement.tagName) ? n.insertNode(document.createTextNode(`
` + p.g.ZWSP)) : n.insertNode(document.createTextNode(`
`)), n.collapse(!1), (0, B.Hc)(n), Ae(e), He(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, o.yl)(t) && !t.shiftKey && !t.altKey && n.toString() === "") {
                if (Nr(e, n, t, i))
                  return !0;
                if (a) {
                  if (a.previousElementSibling && a.previousElementSibling.classList.contains("vditor-wysiwyg__block") && a.previousElementSibling.getAttribute("data-block") === "0" && a.tagName !== "UL" && a.tagName !== "OL") {
                    var ue = (0, B.im)(a, e.wysiwyg.element, n).start;
                    if (ue === 0 && n.startOffset === 0 || // https://github.com/Vanessa219/vditor/issues/894
                    ue === 1 && a.innerText.startsWith(p.g.ZWSP))
                      return Vt(a.previousElementSibling.lastElementChild, e, !1), a.innerHTML.trim().replace(p.g.ZWSP, "") === "" && (a.remove(), Ae(e)), t.preventDefault(), !0;
                  }
                  var re = n.startOffset;
                  if (n.toString() === "" && r.nodeType === 3 && r.textContent.charAt(re - 2) === `
` && r.textContent.charAt(re - 1) !== p.g.ZWSP && ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r.parentElement.tagName))
                    return r.textContent = r.textContent.substring(0, re - 1) + p.g.ZWSP, n.setStart(r, re), n.collapse(!0), Ae(e), t.preventDefault(), !0;
                  r.textContent === p.g.ZWSP && n.startOffset === 1 && !r.previousSibling && Ga(n) && (r.textContent = ""), a.querySelectorAll("span.vditor-wysiwyg__block[data-type='math-inline']").forEach(function(Le) {
                    Le.firstElementChild.style.display = "inline", Le.lastElementChild.style.display = "none";
                  }), a.querySelectorAll("span.vditor-wysiwyg__block[data-type='html-entity']").forEach(function(Le) {
                    Le.firstElementChild.style.display = "inline", Le.lastElementChild.style.display = "none";
                  });
                }
              }
              if ((0, o.vU)() && n.startOffset === 1 && r.textContent.indexOf(p.g.ZWSP) > -1 && r.previousSibling && r.previousSibling.nodeType !== 3 && r.previousSibling.tagName === "CODE" && (t.key === "Backspace" || t.key === "ArrowLeft"))
                return n.selectNodeContents(r.previousSibling), n.collapse(!1), t.preventDefault(), !0;
              if (Pr(t, a, n))
                return t.preventDefault(), !0;
              if (Sr(n, t.key), t.key === "ArrowDown") {
                var me = r.nextSibling;
                me && me.nodeType !== 3 && me.getAttribute("data-type") === "math-inline" && n.setStartAfter(me);
              }
              return a && We(a, e, t, n) ? (t.preventDefault(), !0) : !1;
            }, Ke = function(e, t) {
              if (q("⇧⌘X", t)) {
                var n = e.wysiwyg.popover.querySelector('[data-type="remove"]');
                return n && n.click(), t.preventDefault(), !0;
              }
            }, vt = function(e) {
              clearTimeout(e.wysiwyg.hlToolbarTimeoutId), e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function() {
                if (e.wysiwyg.element.getAttribute("contenteditable") !== "false" && (0, B.Gb)(e.wysiwyg.element)) {
                  v(e.toolbar.elements, p.g.EDIT_TOOLBARS), y(e.toolbar.elements, p.g.EDIT_TOOLBARS);
                  var t = getSelection().getRangeAt(0), n = t.startContainer;
                  t.startContainer.nodeType === 3 ? n = t.startContainer.parentElement : n = n.childNodes[t.startOffset >= n.childNodes.length ? n.childNodes.length - 1 : t.startOffset];
                  var r = (0, s.a1)(n, "data-type", "footnotes-block");
                  if (r) {
                    e.wysiwyg.popover.innerHTML = "", Xe(r, e), Ge(e, "footnotes-block"), Je(e, r);
                    return;
                  }
                  var a = (0, s.lG)(n, "LI");
                  a ? (a.classList.contains("vditor-task") ? d(e.toolbar.elements, ["check"]) : a.parentElement.tagName === "OL" ? d(e.toolbar.elements, ["ordered-list"]) : a.parentElement.tagName === "UL" && d(e.toolbar.elements, ["list"]), y(e.toolbar.elements, ["outdent", "indent"])) : f(e.toolbar.elements, ["outdent", "indent"]), (0, s.lG)(n, "BLOCKQUOTE") && d(e.toolbar.elements, ["quote"]), ((0, s.lG)(n, "B") || (0, s.lG)(n, "STRONG")) && d(e.toolbar.elements, ["bold"]), ((0, s.lG)(n, "I") || (0, s.lG)(n, "EM")) && d(e.toolbar.elements, ["italic"]), ((0, s.lG)(n, "STRIKE") || (0, s.lG)(n, "S")) && d(e.toolbar.elements, ["strike"]), e.wysiwyg.element.querySelectorAll(".vditor-comment--focus").forEach(function(oe) {
                    oe.classList.remove("vditor-comment--focus");
                  });
                  var i = (0, s.fb)(n, "vditor-comment");
                  if (i) {
                    var l = i.getAttribute("data-cmtids").split(" ");
                    if (l.length > 1 && i.nextSibling.isSameNode(i.nextElementSibling)) {
                      var h = i.nextElementSibling.getAttribute("data-cmtids").split(" ");
                      l.find(function(oe) {
                        if (h.includes(oe))
                          return l = [oe], !0;
                      });
                    }
                    e.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(oe) {
                      oe.getAttribute("data-cmtids").indexOf(l[0]) > -1 && oe.classList.add("vditor-comment--focus");
                    });
                  }
                  var b = (0, s.lG)(n, "A");
                  b && d(e.toolbar.elements, ["link"]);
                  var m = (0, s.lG)(n, "TABLE"), D = (0, _.W)(n);
                  (0, s.lG)(n, "CODE") ? (0, s.lG)(n, "PRE") ? (f(e.toolbar.elements, [
                    "headings",
                    "bold",
                    "italic",
                    "strike",
                    "line",
                    "quote",
                    "list",
                    "ordered-list",
                    "check",
                    "code",
                    "inline-code",
                    "upload",
                    "link",
                    "table",
                    "record"
                  ]), d(e.toolbar.elements, ["code"])) : (f(e.toolbar.elements, [
                    "headings",
                    "bold",
                    "italic",
                    "strike",
                    "line",
                    "quote",
                    "list",
                    "ordered-list",
                    "check",
                    "code",
                    "upload",
                    "link",
                    "table",
                    "record"
                  ]), d(e.toolbar.elements, ["inline-code"])) : D ? (f(e.toolbar.elements, ["bold"]), d(e.toolbar.elements, ["headings"])) : m && f(e.toolbar.elements, ["table"]);
                  var R = (0, s.fb)(n, "vditor-toc");
                  if (R) {
                    e.wysiwyg.popover.innerHTML = "", Xe(R, e), Ge(e, "vditor-toc"), Je(e, R);
                    return;
                  }
                  var G = (0, _.S)(n, "BLOCKQUOTE");
                  if (G && (e.wysiwyg.popover.innerHTML = "", At(t, G, e), Mt(t, G, e), Xe(G, e), Ge(e, "blockquote"), Je(e, G)), a && (e.wysiwyg.popover.innerHTML = "", At(t, a, e), Mt(t, a, e), Xe(a, e), Ge(e, "li"), Je(e, a)), m) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var Z = function() {
                      var oe = m.rows.length, Se = m.rows[0].cells.length, ht = parseInt(Ne.value, 10) || oe, mt = parseInt($e.value, 10) || Se;
                      if (!(ht === oe && Se === mt)) {
                        if (Se !== mt)
                          for (var $t = mt - Se, at = 0; at < m.rows.length; at++)
                            if ($t > 0)
                              for (var Gr = 0; Gr < $t; Gr++)
                                at === 0 ? m.rows[at].lastElementChild.insertAdjacentHTML("afterend", "<th> </th>") : m.rows[at].lastElementChild.insertAdjacentHTML("afterend", "<td> </td>");
                            else
                              for (var Gn = Se - 1; Gn >= mt; Gn--)
                                m.rows[at].cells[Gn].remove();
                        if (oe !== ht) {
                          var $r = ht - oe;
                          if ($r > 0) {
                            for (var $n = "<tr>", Bt = 0; Bt < mt; Bt++)
                              $n += "<td> </td>";
                            for (var Zr = 0; Zr < $r; Zr++)
                              m.querySelector("tbody") ? m.querySelector("tbody").insertAdjacentHTML("beforeend", $n) : m.querySelector("thead").insertAdjacentHTML("afterend", $n + "</tr>");
                          } else
                            for (var Bt = oe - 1; Bt >= ht; Bt--)
                              m.rows[Bt].remove(), m.rows.length === 1 && m.querySelector("tbody").remove();
                        }
                        typeof e.options.input == "function" && e.options.input(M(e));
                      }
                    }, K = function(oe) {
                      cn(m, oe), oe === "right" ? (ue.classList.remove("vditor-icon--current"), re.classList.remove("vditor-icon--current"), me.classList.add("vditor-icon--current")) : oe === "center" ? (ue.classList.remove("vditor-icon--current"), me.classList.remove("vditor-icon--current"), re.classList.add("vditor-icon--current")) : (re.classList.remove("vditor-icon--current"), me.classList.remove("vditor-icon--current"), ue.classList.add("vditor-icon--current")), (0, B.Hc)(t), Ae(e);
                    }, te = (0, s.lG)(n, "TD"), ee = (0, s.lG)(n, "TH"), z = "left";
                    te ? z = te.getAttribute("align") || "left" : ee && (z = ee.getAttribute("align") || "center");
                    var ue = document.createElement("button");
                    ue.setAttribute("type", "button"), ue.setAttribute("aria-label", window.VditorI18n.alignLeft + "<" + (0, o.ns)("⇧⌘L") + ">"), ue.setAttribute("data-type", "left"), ue.innerHTML = '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>', ue.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (z === "left" ? " vditor-icon--current" : ""), ue.onclick = function() {
                      K("left");
                    };
                    var re = document.createElement("button");
                    re.setAttribute("type", "button"), re.setAttribute("aria-label", window.VditorI18n.alignCenter + "<" + (0, o.ns)("⇧⌘C") + ">"), re.setAttribute("data-type", "center"), re.innerHTML = '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', re.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (z === "center" ? " vditor-icon--current" : ""), re.onclick = function() {
                      K("center");
                    };
                    var me = document.createElement("button");
                    me.setAttribute("type", "button"), me.setAttribute("aria-label", window.VditorI18n.alignRight + "<" + (0, o.ns)("⇧⌘R") + ">"), me.setAttribute("data-type", "right"), me.innerHTML = '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>', me.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (z === "right" ? " vditor-icon--current" : ""), me.onclick = function() {
                      K("right");
                    };
                    var Le = document.createElement("button");
                    Le.setAttribute("type", "button"), Le.setAttribute("aria-label", window.VditorI18n.insertRowBelow + "<" + (0, o.ns)("⌘=") + ">"), Le.setAttribute("data-type", "insertRow"), Le.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>', Le.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Le.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && Ar(e, t, Se);
                    };
                    var ke = document.createElement("button");
                    ke.setAttribute("type", "button"), ke.setAttribute("aria-label", window.VditorI18n.insertRowAbove + "<" + (0, o.ns)("⇧⌘F") + ">"), ke.setAttribute("data-type", "insertRow"), ke.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>', ke.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", ke.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && Mr(e, t, Se);
                    };
                    var Me = document.createElement("button");
                    Me.setAttribute("type", "button"), Me.setAttribute("aria-label", window.VditorI18n.insertColumnRight + "<" + (0, o.ns)("⇧⌘=") + ">"), Me.setAttribute("data-type", "insertColumn"), Me.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>', Me.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Me.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && un(e, m, Se);
                    };
                    var qe = document.createElement("button");
                    qe.setAttribute("type", "button"), qe.setAttribute("aria-label", window.VditorI18n.insertColumnLeft + "<" + (0, o.ns)("⇧⌘G") + ">"), qe.setAttribute("data-type", "insertColumn"), qe.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>', qe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", qe.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && un(e, m, Se, "beforebegin");
                    };
                    var Fe = document.createElement("button");
                    Fe.setAttribute("type", "button"), Fe.setAttribute("aria-label", window.VditorI18n["delete-row"] + "<" + (0, o.ns)("⌘-") + ">"), Fe.setAttribute("data-type", "deleteRow"), Fe.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>', Fe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Fe.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && _r(e, t, Se);
                    };
                    var ze = document.createElement("button");
                    ze.setAttribute("type", "button"), ze.setAttribute("aria-label", window.VditorI18n["delete-column"] + "<" + (0, o.ns)("⇧⌘-") + ">"), ze.setAttribute("data-type", "deleteColumn"), ze.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>', ze.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", ze.onclick = function() {
                      var oe = getSelection().getRangeAt(0).startContainer, Se = (0, s.lG)(oe, "TD") || (0, s.lG)(oe, "TH");
                      Se && xr(e, t, m, Se);
                    };
                    var be = document.createElement("span");
                    be.setAttribute("aria-label", window.VditorI18n.row), be.className = "vditor-tooltipped vditor-tooltipped__n";
                    var Ne = document.createElement("input");
                    be.appendChild(Ne), Ne.type = "number", Ne.min = "1", Ne.className = "vditor-input", Ne.style.width = "42px", Ne.style.textAlign = "center", Ne.setAttribute("placeholder", window.VditorI18n.row), Ne.value = m.rows.length.toString(), Ne.oninput = function() {
                      Z();
                    }, Ne.onkeydown = function(oe) {
                      if (!oe.isComposing) {
                        if (oe.key === "Tab") {
                          $e.focus(), $e.select(), oe.preventDefault();
                          return;
                        }
                        Ke(e, oe) || rt(oe, t);
                      }
                    };
                    var pn = document.createElement("span");
                    pn.setAttribute("aria-label", window.VditorI18n.column), pn.className = "vditor-tooltipped vditor-tooltipped__n";
                    var $e = document.createElement("input");
                    pn.appendChild($e), $e.type = "number", $e.min = "1", $e.className = "vditor-input", $e.style.width = "42px", $e.style.textAlign = "center", $e.setAttribute("placeholder", window.VditorI18n.column), $e.value = m.rows[0].cells.length.toString(), $e.oninput = function() {
                      Z();
                    }, $e.onkeydown = function(oe) {
                      if (!oe.isComposing) {
                        if (oe.key === "Tab") {
                          Ne.focus(), Ne.select(), oe.preventDefault();
                          return;
                        }
                        Ke(e, oe) || rt(oe, t);
                      }
                    }, At(t, m, e), Mt(t, m, e), Xe(m, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", ue), e.wysiwyg.popover.insertAdjacentElement("beforeend", re), e.wysiwyg.popover.insertAdjacentElement("beforeend", me), e.wysiwyg.popover.insertAdjacentElement("beforeend", ke), e.wysiwyg.popover.insertAdjacentElement("beforeend", Le), e.wysiwyg.popover.insertAdjacentElement("beforeend", qe), e.wysiwyg.popover.insertAdjacentElement("beforeend", Me), e.wysiwyg.popover.insertAdjacentElement("beforeend", Fe), e.wysiwyg.popover.insertAdjacentElement("beforeend", ze), e.wysiwyg.popover.insertAdjacentElement("beforeend", be), e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "), e.wysiwyg.popover.insertAdjacentElement("beforeend", pn), Ge(e, "table"), Je(e, m);
                  }
                  var zn = (0, s.a1)(n, "data-type", "link-ref");
                  zn && fr(e, zn, t);
                  var Dt = (0, s.a1)(n, "data-type", "footnotes-ref");
                  if (Dt) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var be = document.createElement("span");
                    be.setAttribute("aria-label", window.VditorI18n.footnoteRef + "<" + (0, o.ns)("⌥Enter") + ">"), be.className = "vditor-tooltipped vditor-tooltipped__n";
                    var lt = document.createElement("input");
                    be.appendChild(lt), lt.className = "vditor-input", lt.setAttribute("placeholder", window.VditorI18n.footnoteRef + "<" + (0, o.ns)("⌥Enter") + ">"), lt.style.width = "120px", lt.value = Dt.getAttribute("data-footnotes-label"), lt.oninput = function() {
                      lt.value.trim() !== "" && Dt.setAttribute("data-footnotes-label", lt.value), typeof e.options.input == "function" && e.options.input(M(e));
                    }, lt.onkeydown = function(Se) {
                      Se.isComposing || Ke(e, Se) || rt(Se, t);
                    }, Xe(Dt, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", be), Ge(e, "footnotes-ref"), Je(e, Dt);
                  }
                  var je = (0, s.fb)(n, "vditor-wysiwyg__block"), qr = je ? je.getAttribute("data-type").indexOf("block") > -1 : !1;
                  if (e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(oe) {
                    if (!je || je && qr && !je.contains(oe)) {
                      var Se = oe.previousElementSibling;
                      Se.style.display = "none";
                    }
                  }), je && qr) {
                    if (e.wysiwyg.popover.innerHTML = "", At(t, je, e), Mt(t, je, e), Xe(je, e), je.getAttribute("data-type") === "code-block") {
                      var hn = document.createElement("span");
                      hn.setAttribute("aria-label", window.VditorI18n.language + "<" + (0, o.ns)("⌥Enter") + ">"), hn.className = "vditor-tooltipped vditor-tooltipped__n";
                      var Qe = document.createElement("input");
                      hn.appendChild(Qe);
                      var Gt = je.firstElementChild.firstElementChild;
                      Qe.className = "vditor-input", Qe.setAttribute("placeholder", window.VditorI18n.language + "<" + (0, o.ns)("⌥Enter") + ">"), Qe.value = Gt.className.indexOf("language-") > -1 ? Gt.className.split("-")[1].split(" ")[0] : "", Qe.oninput = function(oe) {
                        Qe.value.trim() !== "" ? Gt.className = "language-".concat(Qe.value) : (Gt.className = "", e.hint.recentLanguage = ""), je.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (je.lastElementChild.innerHTML = je.firstElementChild.innerHTML, ge(je.lastElementChild, e)), Ae(e), oe.detail === 1 && (t.setStart(Gt.firstChild, 0), t.collapse(!0), (0, B.Hc)(t));
                      }, Qe.onkeydown = function(oe) {
                        if (!oe.isComposing && !Ke(e, oe)) {
                          if (oe.key === "Escape" && e.hint.element.style.display === "block") {
                            e.hint.element.style.display = "none", oe.preventDefault();
                            return;
                          }
                          e.hint.select(oe, e), rt(oe, t);
                        }
                      }, Qe.onkeyup = function(oe) {
                        var Se, ht;
                        if (!(oe.isComposing || oe.key === "Enter" || oe.key === "ArrowUp" || oe.key === "Escape" || oe.key === "ArrowDown")) {
                          var mt = [], $t = Qe.value.substring(0, Qe.selectionStart);
                          (e.options.preview.hljs.langs || p.g.ALIAS_CODE_LANGUAGES.concat(((ht = (Se = window.hljs) === null || Se === void 0 ? void 0 : Se.listLanguages()) !== null && ht !== void 0 ? ht : []).sort())).forEach(function(at) {
                            at.indexOf($t.toLowerCase()) > -1 && mt.push({
                              html: at,
                              value: at
                            });
                          }), e.hint.genHTML(mt, $t, e), oe.preventDefault();
                        }
                      }, e.wysiwyg.popover.insertAdjacentElement("beforeend", hn), Ge(e, "code-block");
                    } else
                      Ge(e, "block");
                    Je(e, je);
                  } else
                    je = void 0;
                  if (D) {
                    e.wysiwyg.popover.innerHTML = "";
                    var be = document.createElement("span");
                    be.setAttribute("aria-label", "ID<" + (0, o.ns)("⌥Enter") + ">"), be.className = "vditor-tooltipped vditor-tooltipped__n";
                    var pt = document.createElement("input");
                    be.appendChild(pt), pt.className = "vditor-input", pt.setAttribute("placeholder", "ID<" + (0, o.ns)("⌥Enter") + ">"), pt.style.width = "120px", pt.value = D.getAttribute("data-id") || "", pt.oninput = function() {
                      D.setAttribute("data-id", pt.value), typeof e.options.input == "function" && e.options.input(M(e));
                    }, pt.onkeydown = function(Se) {
                      Se.isComposing || Ke(e, Se) || rt(Se, t);
                    }, At(t, D, e), Mt(t, D, e), Xe(D, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", be), Ge(e, "heading"), Je(e, D);
                  }
                  if (b && xn(e, b, t), !G && !a && !m && !je && !b && !zn && !Dt && !D && !R) {
                    var Ot = (0, s.a1)(n, "data-block", "0");
                    Ot && Ot.parentElement.isEqualNode(e.wysiwyg.element) ? (e.wysiwyg.popover.innerHTML = "", At(t, Ot, e), Mt(t, Ot, e), Xe(Ot, e), Ge(e, "block"), Je(e, Ot)) : e.wysiwyg.popover.style.display = "none";
                  }
                  e.wysiwyg.element.querySelectorAll('span[data-type="backslash"] > span').forEach(function(oe) {
                    oe.style.display = "none";
                  });
                  var zr = (0, s.a1)(t.startContainer, "data-type", "backslash");
                  zr && (zr.querySelector("span").style.display = "inline");
                }
              }, 200);
            }, Je = function(e, t) {
              var n = t, r = (0, s.lG)(t, "TABLE");
              r && (n = r), e.wysiwyg.popover.style.left = "0", e.wysiwyg.popover.style.display = "block", e.wysiwyg.popover.style.top = Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) + "px", e.wysiwyg.popover.style.left = Math.min(n.offsetLeft, e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth) + "px", e.wysiwyg.popover.setAttribute("data-top", (n.offsetTop - 21).toString());
            }, fr = function(e, t, n) {
              n === void 0 && (n = getSelection().getRangeAt(0)), e.wysiwyg.popover.innerHTML = "";
              var r = function() {
                i.value.trim() !== "" && (t.tagName === "IMG" ? t.setAttribute("alt", i.value) : t.textContent = i.value), h.value.trim() !== "" && t.setAttribute("data-link-label", h.value), typeof e.options.input == "function" && e.options.input(M(e));
              }, a = document.createElement("span");
              a.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), a.className = "vditor-tooltipped vditor-tooltipped__n";
              var i = document.createElement("input");
              a.appendChild(i), i.className = "vditor-input", i.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), i.style.width = "120px", i.value = t.getAttribute("alt") || t.textContent, i.oninput = function() {
                r();
              }, i.onkeydown = function(b) {
                Ke(e, b) || rt(b, n) || Ut(e, t, b, h);
              };
              var l = document.createElement("span");
              l.setAttribute("aria-label", window.VditorI18n.linkRef), l.className = "vditor-tooltipped vditor-tooltipped__n";
              var h = document.createElement("input");
              l.appendChild(h), h.className = "vditor-input", h.setAttribute("placeholder", window.VditorI18n.linkRef), h.value = t.getAttribute("data-link-label"), h.oninput = function() {
                r();
              }, h.onkeydown = function(b) {
                Ke(e, b) || rt(b, n) || Ut(e, t, b, i);
              }, Xe(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", a), e.wysiwyg.popover.insertAdjacentElement("beforeend", l), Ge(e, "link-ref"), Je(e, t);
            }, At = function(e, t, n) {
              var r = t.previousElementSibling;
              if (!(!r || !t.parentElement.isEqualNode(n.wysiwyg.element) && t.tagName !== "LI")) {
                var a = document.createElement("button");
                a.setAttribute("type", "button"), a.setAttribute("data-type", "up"), a.setAttribute("aria-label", window.VditorI18n.up + "<" + (0, o.ns)("⇧⌘U") + ">"), a.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>', a.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", a.onclick = function() {
                  e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("beforebegin", t), (0, B.ib)(n.wysiwyg.element, e), Ae(n), vt(n), He(n);
                }, n.wysiwyg.popover.insertAdjacentElement("beforeend", a);
              }
            }, Mt = function(e, t, n) {
              var r = t.nextElementSibling;
              if (!(!r || !t.parentElement.isEqualNode(n.wysiwyg.element) && t.tagName !== "LI")) {
                var a = document.createElement("button");
                a.setAttribute("type", "button"), a.setAttribute("data-type", "down"), a.setAttribute("aria-label", window.VditorI18n.down + "<" + (0, o.ns)("⇧⌘D") + ">"), a.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>', a.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", a.onclick = function() {
                  e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("afterend", t), (0, B.ib)(n.wysiwyg.element, e), Ae(n), vt(n), He(n);
                }, n.wysiwyg.popover.insertAdjacentElement("beforeend", a);
              }
            }, Xe = function(e, t) {
              var n = document.createElement("button");
              n.setAttribute("type", "button"), n.setAttribute("data-type", "remove"), n.setAttribute("aria-label", window.VditorI18n.remove + "<" + (0, o.ns)("⇧⌘X") + ">"), n.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>', n.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n.onclick = function() {
                var r = (0, B.zh)(t);
                r.setStartAfter(e), (0, B.Hc)(r), e.remove(), Ae(t), vt(t), ["H1", "H2", "H3", "H4", "H5", "H6"].includes(e.tagName) && Be(t);
              }, t.wysiwyg.popover.insertAdjacentElement("beforeend", n);
            }, Ut = function(e, t, n, r) {
              if (!n.isComposing) {
                if (n.key === "Tab") {
                  r.focus(), r.select(), n.preventDefault();
                  return;
                }
                if (!(0, o.yl)(n) && !n.shiftKey && n.altKey && n.key === "Enter") {
                  var a = (0, B.zh)(e);
                  t.insertAdjacentHTML("afterend", p.g.ZWSP), a.setStartAfter(t.nextSibling), a.collapse(!0), (0, B.Hc)(a), n.preventDefault();
                }
              }
            }, xn = function(e, t, n) {
              e.wysiwyg.popover.innerHTML = "";
              var r = function() {
                i.value.trim() !== "" && (t.innerHTML = i.value), t.setAttribute("href", h.value), t.setAttribute("title", m.value), Ae(e);
              };
              t.querySelectorAll("[data-marker]").forEach(function(D) {
                D.removeAttribute("data-marker");
              });
              var a = document.createElement("span");
              a.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), a.className = "vditor-tooltipped vditor-tooltipped__n";
              var i = document.createElement("input");
              a.appendChild(i), i.className = "vditor-input", i.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), i.style.width = "120px", i.value = t.innerHTML || "", i.oninput = function() {
                r();
              }, i.onkeydown = function(D) {
                Ke(e, D) || rt(D, n) || Ut(e, t, D, h);
              };
              var l = document.createElement("span");
              l.setAttribute("aria-label", window.VditorI18n.link), l.className = "vditor-tooltipped vditor-tooltipped__n";
              var h = document.createElement("input");
              l.appendChild(h), h.className = "vditor-input", h.setAttribute("placeholder", window.VditorI18n.link), h.value = t.getAttribute("href") || "", h.oninput = function() {
                r();
              }, h.onkeydown = function(D) {
                Ke(e, D) || rt(D, n) || Ut(e, t, D, m);
              };
              var b = document.createElement("span");
              b.setAttribute("aria-label", window.VditorI18n.tooltipText), b.className = "vditor-tooltipped vditor-tooltipped__n";
              var m = document.createElement("input");
              b.appendChild(m), m.className = "vditor-input", m.setAttribute("placeholder", window.VditorI18n.tooltipText), m.style.width = "60px", m.value = t.getAttribute("title") || "", m.oninput = function() {
                r();
              }, m.onkeydown = function(D) {
                Ke(e, D) || rt(D, n) || Ut(e, t, D, i);
              }, Xe(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", a), e.wysiwyg.popover.insertAdjacentElement("beforeend", l), e.wysiwyg.popover.insertAdjacentElement("beforeend", b), Ge(e, "a"), Je(e, t);
            }, Xa = function(e, t) {
              var n = e.target;
              t.wysiwyg.popover.innerHTML = "";
              var r = function() {
                n.setAttribute("src", i.value), n.setAttribute("alt", h.value), n.setAttribute("title", m.value), typeof t.options.input == "function" && t.options.input(M(t));
              }, a = document.createElement("span");
              a.setAttribute("aria-label", window.VditorI18n.imageURL), a.className = "vditor-tooltipped vditor-tooltipped__n";
              var i = document.createElement("input");
              a.appendChild(i), i.className = "vditor-input", i.setAttribute("placeholder", window.VditorI18n.imageURL), i.value = n.getAttribute("src") || "", i.oninput = function() {
                r();
              }, i.onkeydown = function(D) {
                Ke(t, D);
              };
              var l = document.createElement("span");
              l.setAttribute("aria-label", window.VditorI18n.alternateText), l.className = "vditor-tooltipped vditor-tooltipped__n";
              var h = document.createElement("input");
              l.appendChild(h), h.className = "vditor-input", h.setAttribute("placeholder", window.VditorI18n.alternateText), h.style.width = "52px", h.value = n.getAttribute("alt") || "", h.oninput = function() {
                r();
              }, h.onkeydown = function(D) {
                Ke(t, D);
              };
              var b = document.createElement("span");
              b.setAttribute("aria-label", window.VditorI18n.title), b.className = "vditor-tooltipped vditor-tooltipped__n";
              var m = document.createElement("input");
              b.appendChild(m), m.className = "vditor-input", m.setAttribute("placeholder", window.VditorI18n.title), m.value = n.getAttribute("title") || "", m.oninput = function() {
                r();
              }, m.onkeydown = function(D) {
                Ke(t, D);
              }, Xe(n, t), t.wysiwyg.popover.insertAdjacentElement("beforeend", a), t.wysiwyg.popover.insertAdjacentElement("beforeend", l), t.wysiwyg.popover.insertAdjacentElement("beforeend", b), Ge(t, "image"), Je(t, n);
            }, rt = function(e, t) {
              if (!(0, o.yl)(e) && !e.shiftKey && e.key === "Enter" || e.key === "Escape")
                return t && (0, B.Hc)(t), e.preventDefault(), e.stopPropagation(), !0;
            }, Ge = function(e, t) {
              e.options.customWysiwygToolbar(t, e.wysiwyg.popover);
            }, _t = function(e) {
              e.currentMode === "wysiwyg" ? vt(e) : e.currentMode === "ir" && Ft(e);
            }, dr = function(e, t, n) {
              n === void 0 && (n = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              });
              var r = e.wysiwyg.element;
              r.innerHTML = e.lute.Md2VditorDOM(t), r.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(a) {
                ge(a, e), a.previousElementSibling.setAttribute("style", "display:none");
              }), Ae(e, n);
            }, Ya = function(e, t, n) {
              for (var r = e.startContainer.parentElement, a = !1, i = "", l = "", h = Za(e), b = h.beforeHTML, m = h.afterHTML; r && !a; ) {
                var D = r.tagName;
                if (D === "STRIKE" && (D = "S"), D === "I" && (D = "EM"), D === "B" && (D = "STRONG"), D === "S" || D === "STRONG" || D === "EM") {
                  var R = "", G = "", Z = "";
                  r.parentElement.getAttribute("data-block") !== "0" && (G = ur(r), Z = cr(r)), (b || G) && (R = "".concat(G, "<").concat(D, ">").concat(b, "</").concat(D, ">"), b = R), (n === "bold" && D === "STRONG" || n === "italic" && D === "EM" || n === "strikeThrough" && D === "S") && (R += "".concat(i).concat(p.g.ZWSP, "<wbr>").concat(l), a = !0), (m || Z) && (m = "<".concat(D, ">").concat(m, "</").concat(D, ">").concat(Z), R += m), r.parentElement.getAttribute("data-block") !== "0" ? (r = r.parentElement, r.innerHTML = R) : (r.outerHTML = R, r = r.parentElement), i = "<".concat(D, ">") + i, l = "</".concat(D, ">") + l;
                } else
                  a = !0;
              }
              (0, B.ib)(t.wysiwyg.element, e);
            }, Qa = function(e, t, n) {
              if (!(e.wysiwyg.composingLock && n instanceof CustomEvent)) {
                var r = !0, a = !0;
                e.wysiwyg.element.querySelector("wbr") && e.wysiwyg.element.querySelector("wbr").remove();
                var i = (0, B.zh)(e), l = t.getAttribute("data-type");
                if (t.classList.contains("vditor-menu--current"))
                  if (l === "strike" && (l = "strikeThrough"), l === "quote") {
                    var h = (0, s.lG)(i.startContainer, "BLOCKQUOTE");
                    h || (h = i.startContainer.childNodes[i.startOffset]), h && (r = !1, t.classList.remove("vditor-menu--current"), i.insertNode(document.createElement("wbr")), h.outerHTML = h.innerHTML.trim() === "" ? '<p data-block="0">'.concat(h.innerHTML, "</p>") : h.innerHTML, (0, B.ib)(e.wysiwyg.element, i));
                  } else if (l === "inline-code") {
                    var b = (0, s.lG)(i.startContainer, "CODE");
                    b || (b = i.startContainer.childNodes[i.startOffset]), b && (b.outerHTML = b.innerHTML.replace(p.g.ZWSP, "") + "<wbr>", (0, B.ib)(e.wysiwyg.element, i));
                  } else l === "link" ? (i.collapsed && i.selectNode(i.startContainer.parentElement), document.execCommand("unlink", !1, "")) : l === "check" || l === "list" || l === "ordered-list" ? (ln(e, i, l), (0, B.ib)(e.wysiwyg.element, i), r = !1, t.classList.remove("vditor-menu--current")) : (r = !1, t.classList.remove("vditor-menu--current"), i.toString() === "" ? Ya(i, e, l) : document.execCommand(l, !1, ""));
                else {
                  e.wysiwyg.element.childNodes.length === 0 && (e.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>', (0, B.ib)(e.wysiwyg.element, i));
                  var m = (0, s.F9)(i.startContainer);
                  if (l === "quote") {
                    if (m || (m = i.startContainer.childNodes[i.startOffset]), m) {
                      r = !1, t.classList.add("vditor-menu--current"), i.insertNode(document.createElement("wbr"));
                      var D = (0, s.lG)(i.startContainer, "LI");
                      D && m.contains(D) ? D.innerHTML = '<blockquote data-block="0">'.concat(D.innerHTML, "</blockquote>") : m.outerHTML = '<blockquote data-block="0">'.concat(m.outerHTML, "</blockquote>"), (0, B.ib)(e.wysiwyg.element, i);
                    }
                  } else if (l === "check" || l === "list" || l === "ordered-list")
                    ln(e, i, l, !1), (0, B.ib)(e.wysiwyg.element, i), r = !1, v(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current");
                  else if (l === "inline-code") {
                    if (i.toString() === "") {
                      var R = document.createElement("code");
                      R.textContent = p.g.ZWSP, i.insertNode(R), i.setStart(R.firstChild, 1), i.collapse(!0), (0, B.Hc)(i);
                    } else if (i.startContainer.nodeType === 3) {
                      var R = document.createElement("code");
                      i.surroundContents(R), i.insertNode(R), (0, B.Hc)(i);
                    }
                    t.classList.add("vditor-menu--current");
                  } else if (l === "code") {
                    var R = document.createElement("div");
                    R.className = "vditor-wysiwyg__block", R.setAttribute("data-type", "code-block"), R.setAttribute("data-block", "0"), R.setAttribute("data-marker", "```"), i.toString() === "" ? R.innerHTML = `<pre><code><wbr>
</code></pre>` : (R.innerHTML = "<pre><code>".concat(i.toString(), "<wbr></code></pre>"), i.deleteContents()), i.insertNode(R), m && (m.outerHTML = e.lute.SpinVditorDOM(m.outerHTML)), (0, B.ib)(e.wysiwyg.element, i), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(Le) {
                      ge(Le, e);
                    }), t.classList.add("vditor-menu--disabled");
                  } else if (l === "link") {
                    if (i.toString() === "") {
                      var G = document.createElement("a");
                      G.innerText = p.g.ZWSP, i.insertNode(G), i.setStart(G.firstChild, 1), i.collapse(!0), xn(e, G, i);
                      var Z = e.wysiwyg.popover.querySelector("input");
                      Z.value = "", Z.focus(), a = !1;
                    } else {
                      var R = document.createElement("a");
                      R.setAttribute("href", ""), R.innerHTML = i.toString(), i.surroundContents(R), i.insertNode(R), (0, B.Hc)(i), xn(e, R, i);
                      var K = e.wysiwyg.popover.querySelectorAll("input");
                      K[0].value = R.innerText, K[1].focus();
                    }
                    r = !1, t.classList.add("vditor-menu--current");
                  } else if (l === "table") {
                    var te = '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                    if (i.toString().trim() === "")
                      m && m.innerHTML.trim().replace(p.g.ZWSP, "") === "" ? m.outerHTML = te : document.execCommand("insertHTML", !1, te), i.selectNode(e.wysiwyg.element.querySelector("wbr").previousSibling), e.wysiwyg.element.querySelector("wbr").remove(), (0, B.Hc)(i);
                    else {
                      te = '<table data-block="0"><thead><tr>';
                      var ee = i.toString().split(`
`), z = ee[0].split(",").length > ee[0].split("	").length ? "," : "	";
                      ee.forEach(function(me, Le) {
                        Le === 0 ? (me.split(z).forEach(function(ke, Me) {
                          Me === 0 ? te += "<th>".concat(ke, "<wbr></th>") : te += "<th>".concat(ke, "</th>");
                        }), te += "</tr></thead>") : (Le === 1 ? te += "<tbody><tr>" : te += "<tr>", me.split(z).forEach(function(ke) {
                          te += "<td>".concat(ke, "</td>");
                        }), te += "</tr>");
                      }), te += "</tbody></table>", document.execCommand("insertHTML", !1, te), (0, B.ib)(e.wysiwyg.element, i);
                    }
                    r = !1, t.classList.add("vditor-menu--disabled");
                  } else if (l === "line") {
                    if (m) {
                      var ue = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                      m.innerHTML.trim() === "" ? m.outerHTML = ue : m.insertAdjacentHTML("afterend", ue), (0, B.ib)(e.wysiwyg.element, i);
                    }
                  } else if (r = !1, t.classList.add("vditor-menu--current"), l === "strike" && (l = "strikeThrough"), i.toString() === "" && (l === "bold" || l === "italic" || l === "strikeThrough")) {
                    var re = "strong";
                    l === "italic" ? re = "em" : l === "strikeThrough" && (re = "s");
                    var R = document.createElement(re);
                    R.textContent = p.g.ZWSP, i.insertNode(R), R.previousSibling && R.previousSibling.textContent === p.g.ZWSP && (R.previousSibling.textContent = ""), i.setStart(R.firstChild, 1), i.collapse(!0), (0, B.Hc)(i);
                  } else
                    document.execCommand(l, !1, "");
                }
                r && vt(e), a && Ae(e);
              }
            }, Oe = (
              /** @class */
              /* @__PURE__ */ function() {
                function e(t, n) {
                  var r, a = this;
                  this.element = document.createElement("div"), n.className && (r = this.element.classList).add.apply(r, n.className.split(" "));
                  var i = n.hotkey ? " <".concat((0, o.ns)(n.hotkey), ">") : "";
                  n.level === 2 && (i = n.hotkey ? " &lt;".concat((0, o.ns)(n.hotkey), "&gt;") : "");
                  var l = n.tip ? n.tip + i : "".concat(window.VditorI18n[n.name]).concat(i), h = n.name === "upload" ? "div" : "button";
                  if (n.level === 2)
                    this.element.innerHTML = "<".concat(h, ' data-type="').concat(n.name, '">').concat(l, "</").concat(h, ">");
                  else {
                    this.element.classList.add("vditor-toolbar__item");
                    var b = document.createElement(h);
                    b.setAttribute("data-type", n.name), b.className = "vditor-tooltipped vditor-tooltipped__".concat(n.tipPosition), b.setAttribute("aria-label", l), b.innerHTML = n.icon, this.element.appendChild(b);
                  }
                  n.prefix && this.element.children[0].addEventListener((0, o.Le)(), function(m) {
                    m.preventDefault(), !a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) && (t.currentMode === "wysiwyg" ? Qa(t, a.element.children[0], m) : t.currentMode === "ir" ? pi(t, a.element.children[0], n.prefix || "", n.suffix || "") : ri(t, a.element.children[0], n.prefix || "", n.suffix || ""));
                  });
                }
                return e;
              }()
            ), ei = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), yt = function(e, t, n) {
              var r;
              if (typeof n != "string" ? (C(e, ["subToolbar", "hint"]), n.preventDefault(), r = M(e)) : r = n, !(e.currentMode === t && typeof n != "string")) {
                if (e.devtools && e.devtools.renderEchart(e), e.options.preview.mode === "both" && t === "sv" ? e.preview.element.style.display = "block" : e.preview.element.style.display = "none", y(e.toolbar.elements, p.g.EDIT_TOOLBARS), v(e.toolbar.elements, p.g.EDIT_TOOLBARS), f(e.toolbar.elements, ["outdent", "indent"]), t === "ir")
                  L(e.toolbar.elements, ["both"]), T(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "block", e.lute.SetVditorIR(!0), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!1), e.currentMode = "ir", e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(r), st(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), le(e), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(i) {
                    ge(i, e);
                  }), e.ir.element.querySelectorAll(".vditor-toc").forEach(function(i) {
                    (0, F.H)(i, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  });
                else if (t === "wysiwyg")
                  L(e.toolbar.elements, ["both"]), T(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "block", e.ir.element.parentElement.style.display = "none", e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!0), e.lute.SetVditorSV(!1), e.currentMode = "wysiwyg", le(e), dr(e, r, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), e.wysiwyg.element.querySelectorAll(".vditor-toc").forEach(function(i) {
                    (0, F.H)(i, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  }), e.wysiwyg.popover.style.display = "none";
                else if (t === "sv") {
                  T(e.toolbar.elements, ["both"]), L(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "none", (e.options.preview.mode === "both" || e.options.preview.mode === "editor") && (e.sv.element.style.display = "block"), e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!0), e.currentMode = "sv";
                  var a = hr(r, e);
                  a === "<div data-block='0'></div>" && (a = ""), e.sv.element.innerHTML = a, _e(e.sv.element), Pe(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), le(e);
                }
                e.undo.resetIcon(e), typeof n != "string" && (e[e.currentMode].element.focus(), _t(e)), Be(e), xe(e), e.toolbar.elements["edit-mode"] && (e.toolbar.elements["edit-mode"].querySelectorAll("button").forEach(function(i) {
                  i.classList.remove("vditor-menu--current");
                }), e.toolbar.elements["edit-mode"].querySelector('button[data-mode="'.concat(e.currentMode, '"]')).classList.add("vditor-menu--current")), e.outline.toggle(e, e.currentMode !== "sv" && e.options.outline.enable, typeof n != "string");
              }
            }, ti = (
              /** @class */
              function(e) {
                ei(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = document.createElement("div");
                  return i.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow"), i.innerHTML = '<button data-mode="wysiwyg">'.concat(window.VditorI18n.wysiwyg, " &lt;").concat((0, o.ns)("⌥⌘7"), `></button>
<button data-mode="ir">`).concat(window.VditorI18n.instantRendering, " &lt;").concat((0, o.ns)("⌥⌘8"), `></button>
<button data-mode="sv">`).concat(window.VditorI18n.splitView, " &lt;").concat((0, o.ns)("⌥⌘9"), "></button>"), a.element.appendChild(i), a._bindEvent(n, i, r), a;
                }
                return t.prototype._bindEvent = function(n, r, a) {
                  var i = this.element.children[0];
                  S(n, r, i, a.level), r.children.item(0).addEventListener((0, o.Le)(), function(l) {
                    yt(n, "wysiwyg", l), l.preventDefault(), l.stopPropagation();
                  }), r.children.item(1).addEventListener((0, o.Le)(), function(l) {
                    yt(n, "ir", l), l.preventDefault(), l.stopPropagation();
                  }), r.children.item(2).addEventListener((0, o.Le)(), function(l) {
                    yt(n, "sv", l), l.preventDefault(), l.stopPropagation();
                  });
                }, t;
              }(Oe)
            ), Wt = function(e, t) {
              return (0, B.Gb)(e, t) ? getSelection().toString() : "";
            }, Dn = function(e, t) {
              t.addEventListener("focus", function() {
                e.options.focus && e.options.focus(M(e)), C(e, ["subToolbar", "hint"]);
              });
            }, pr = function(e, t) {
              t.addEventListener("dblclick", function(n) {
                n.target.tagName === "IMG" && (e.options.image.preview ? e.options.image.preview(n.target) : e.options.image.isPreview && (0, ie.E)(n.target, e.options.lang, e.options.theme));
              });
            }, On = function(e, t) {
              t.addEventListener("blur", function(n) {
                if (e.currentMode === "ir") {
                  var r = e.ir.element.querySelector(".vditor-ir__node--expand");
                  r && r.classList.remove("vditor-ir__node--expand");
                } else e.currentMode === "wysiwyg" && !e.wysiwyg.selectPopover.contains(n.relatedTarget) && e.wysiwyg.hideComment();
                e[e.currentMode].range = (0, B.zh)(e), e.options.blur && e.options.blur(M(e));
              });
            }, Bn = function(e, t) {
              t.addEventListener("dragstart", function(n) {
                n.dataTransfer.setData(p.g.DROP_EDITOR, p.g.DROP_EDITOR);
              }), t.addEventListener("drop", function(n) {
                n.dataTransfer.getData(p.g.DROP_EDITOR) ? Ee(e) : (n.dataTransfer.types.includes("Files") || n.dataTransfer.types.includes("text/html")) && fn(e, n, {
                  pasteCode: function(r) {
                    document.execCommand("insertHTML", !1, r);
                  }
                });
              });
            }, Hn = function(e, t, n) {
              t.addEventListener("copy", function(r) {
                return n(r, e);
              });
            }, Nn = function(e, t, n) {
              t.addEventListener("cut", function(r) {
                n(r, e), e.options.comment.enable && e.currentMode === "wysiwyg" && e.wysiwyg.getComments(e), document.execCommand("delete");
              });
            }, He = function(e) {
              if (e.currentMode === "wysiwyg" && e.options.comment.enable && e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)), !!e.options.typewriterMode) {
                var t = e[e.currentMode].element, n = (0, B.Ny)(t).top;
                e.options.height === "auto" && !e.element.classList.contains("vditor--fullscreen") && window.scrollTo(window.scrollX, n + e.element.offsetTop + e.toolbar.element.offsetHeight - window.innerHeight / 2 + 10), (e.options.height !== "auto" || e.element.classList.contains("vditor--fullscreen")) && (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10);
              }
            }, Rn = function(e, t) {
              t.addEventListener("keydown", function(n) {
                if (!n.isComposing && e.options.keydown && e.options.keydown(n), !((e.options.hint.extend.length > 1 || e.toolbar.elements.emoji) && e.hint.select(n, e))) {
                  if (e.options.comment.enable && e.currentMode === "wysiwyg" && (n.key === "Backspace" || q("⌘X", n)) && e.wysiwyg.getComments(e), e.currentMode === "sv") {
                    if (X(e, n))
                      return;
                  } else if (e.currentMode === "wysiwyg") {
                    if (Ja(e, n))
                      return;
                  } else if (e.currentMode === "ir" && ve(e, n))
                    return;
                  if (e.options.ctrlEnter && q("⌘Enter", n)) {
                    e.options.ctrlEnter(M(e)), n.preventDefault();
                    return;
                  }
                  if (q("⌘Z", n) && !e.toolbar.elements.undo) {
                    e.undo.undo(e), n.preventDefault();
                    return;
                  }
                  if (q("⌘Y", n) && !e.toolbar.elements.redo) {
                    e.undo.redo(e), n.preventDefault();
                    return;
                  }
                  if (n.key === "Escape") {
                    e.hint.element.style.display === "block" ? e.hint.element.style.display = "none" : e.options.esc && !n.isComposing && e.options.esc(M(e)), n.preventDefault();
                    return;
                  }
                  if ((0, o.yl)(n) && n.altKey && !n.shiftKey && /^Digit[1-6]$/.test(n.code)) {
                    if (e.currentMode === "wysiwyg") {
                      var r = n.code.replace("Digit", "H");
                      (0, s.lG)(getSelection().getRangeAt(0).startContainer, r) ? _n(e) : an(e, r), Ae(e);
                    } else e.currentMode === "sv" ? mr(e, "#".repeat(parseInt(n.code.replace("Digit", ""), 10)) + " ") : e.currentMode === "ir" && zt(e, "#".repeat(parseInt(n.code.replace("Digit", ""), 10)) + " ");
                    return n.preventDefault(), !0;
                  }
                  if ((0, o.yl)(n) && n.altKey && !n.shiftKey && /^Digit[7-9]$/.test(n.code))
                    return n.code === "Digit7" ? yt(e, "wysiwyg", n) : n.code === "Digit8" ? yt(e, "ir", n) : n.code === "Digit9" && yt(e, "sv", n), !0;
                  e.options.toolbar.find(function(a) {
                    if (!a.hotkey || a.toolbar) {
                      if (a.toolbar) {
                        var i = a.toolbar.find(function(l) {
                          if (!l.hotkey)
                            return !1;
                          if (q(l.hotkey, n))
                            return e.toolbar.elements[l.name].children[0].dispatchEvent(new CustomEvent((0, o.Le)())), n.preventDefault(), !0;
                        });
                        return !!i;
                      }
                      return !1;
                    }
                    if (q(a.hotkey, n))
                      return e.toolbar.elements[a.name].children[0].dispatchEvent(new CustomEvent((0, o.Le)())), n.preventDefault(), !0;
                  });
                }
              });
            }, Pn = function(e, t) {
              t.addEventListener("selectstart", function(n) {
                t.onmouseup = function() {
                  setTimeout(function() {
                    var r = Wt(e[e.currentMode].element);
                    r.trim() ? (e.currentMode === "wysiwyg" && e.options.comment.enable && (!(0, s.a1)(n.target, "data-type", "footnotes-block") && !(0, s.a1)(n.target, "data-type", "link-ref-defs-block") ? e.wysiwyg.showComment() : e.wysiwyg.hideComment()), e.options.select && e.options.select(r)) : (e.currentMode === "wysiwyg" && e.options.comment.enable && e.wysiwyg.hideComment(), typeof e.options.unSelect == "function" && e.options.unSelect());
                  });
                };
              });
            }, In = function(e, t) {
              var n = (0, B.zh)(e);
              n.extractContents(), n.insertNode(document.createTextNode(Lute.Caret)), n.insertNode(document.createTextNode(t));
              var r = (0, s.a1)(n.startContainer, "data-block", "0");
              r || (r = e.sv.element);
              var a = e.lute.SpinVditorSVDOM(r.textContent);
              a = "<div data-block='0'>" + a.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", r.isEqualNode(e.sv.element) ? r.innerHTML = a : r.outerHTML = a, _e(e.sv.element), (0, B.ib)(e.sv.element, n), He(e);
            }, on = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e;
              for (r.nodeType === 3 && (r = r.parentElement); r; ) {
                if (r.getAttribute("data-type") === t)
                  return r;
                n ? r = r.previousElementSibling : r = r.nextElementSibling;
              }
              return !1;
            }, hr = function(e, t) {
              P("SpinVditorSVDOM", e, "argument", t.options.debugger);
              var n = t.lute.SpinVditorSVDOM(e);
              return e = "<div data-block='0'>" + n.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", P("SpinVditorSVDOM", e, "result", t.options.debugger), e;
            }, ni = function(e) {
              var t = e.getAttribute("data-type"), n = e.previousElementSibling, r = t && t !== "text" && t !== "table" && t !== "heading-marker" && t !== "newline" && t !== "yaml-front-matter-open-marker" && t !== "yaml-front-matter-close-marker" && t !== "code-block-info" && t !== "code-block-close-marker" && t !== "code-block-open-marker" ? e.textContent : "", a = !1;
              for (t === "newline" && (a = !0); n && !a; ) {
                var i = n.getAttribute("data-type");
                if (i === "li-marker" || i === "blockquote-marker" || i === "task-marker" || i === "padding") {
                  var l = n.textContent;
                  if (i === "li-marker" && (t === "code-block-open-marker" || t === "code-block-info"))
                    r = l.replace(/\S/g, " ") + r;
                  else if (t === "code-block-close-marker" && n.nextElementSibling.isSameNode(e)) {
                    var h = on(e, "code-block-open-marker");
                    h && h.previousElementSibling && (n = h.previousElementSibling, r = l + r);
                  } else
                    r = l + r;
                } else i === "newline" && (a = !0);
                n = n.previousElementSibling;
              }
              return r;
            }, Pe = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), e.preview.render(e);
              var n = M(e);
              typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, o.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), clearTimeout(e.sv.processTimeoutId), e.sv.processTimeoutId = window.setTimeout(function() {
                t.enableAddUndoStack && !e.sv.composingLock && e.undo.addToUndoStack(e);
              }, e.options.undoDelay);
            }, mr = function(e, t) {
              var n = (0, B.zh)(e), r = (0, _.S)(n.startContainer, "SPAN");
              r && r.textContent.trim() !== "" && (t = `
` + t), n.collapse(!0), document.execCommand("insertHTML", !1, t);
            }, ri = function(e, t, n, r) {
              var a = (0, B.zh)(e), i = t.getAttribute("data-type");
              e.sv.element.childNodes.length === 0 && (e.sv.element.innerHTML = `<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">
</span></span>`, (0, B.ib)(e.sv.element, a));
              var l = (0, s.F9)(a.startContainer), h = (0, _.S)(a.startContainer, "SPAN");
              if (l) {
                if (i === "link") {
                  var b = void 0;
                  a.toString() === "" ? b = "".concat(n).concat(Lute.Caret).concat(r) : b = "".concat(n).concat(a.toString()).concat(r.replace(")", Lute.Caret + ")")), document.execCommand("insertHTML", !1, b);
                  return;
                } else if (i === "italic" || i === "bold" || i === "strike" || i === "inline-code" || i === "code" || i === "table" || i === "line") {
                  var b = void 0;
                  a.toString() === "" ? b = "".concat(n).concat(Lute.Caret).concat(i === "code" ? "" : r) : b = "".concat(n).concat(a.toString()).concat(Lute.Caret).concat(i === "code" ? "" : r), i === "table" || i === "code" && h && h.textContent !== "" ? b = `

` + b : i === "line" && (b = `

`.concat(n, `
`).concat(Lute.Caret)), document.execCommand("insertHTML", !1, b);
                  return;
                } else if ((i === "check" || i === "list" || i === "ordered-list" || i === "quote") && h) {
                  var m = "* ";
                  i === "check" ? m = "* [ ] " : i === "ordered-list" ? m = "1. " : i === "quote" && (m = "> ");
                  var D = on(h, "newline");
                  D ? D.insertAdjacentText("afterend", m) : l.insertAdjacentText("afterbegin", m), Ce(e);
                  return;
                }
                (0, B.ib)(e.sv.element, a), Pe(e);
              }
            }, gr = function(e) {
              switch (e.currentMode) {
                case "ir":
                  return e.ir.element;
                case "wysiwyg":
                  return e.wysiwyg.element;
                case "sv":
                  return e.sv.element;
              }
            }, vr = function(e, t) {
              e.options.upload.setHeaders && (e.options.upload.headers = e.options.upload.setHeaders()), e.options.upload.headers && Object.keys(e.options.upload.headers).forEach(function(n) {
                t.setRequestHeader(n, e.options.upload.headers[n]);
              });
            }, ai = function(e, t, n, r) {
              function a(i) {
                return i instanceof n ? i : new n(function(l) {
                  l(i);
                });
              }
              return new (n || (n = Promise))(function(i, l) {
                function h(D) {
                  try {
                    m(r.next(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function b(D) {
                  try {
                    m(r.throw(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function m(D) {
                  D.done ? i(D.value) : a(D.value).then(h, b);
                }
                m((r = r.apply(e, t || [])).next());
              });
            }, ii = function(e, t) {
              var n = { label: 0, sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1];
              }, trys: [], ops: [] }, r, a, i, l;
              return l = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
                return this;
              }), l;
              function h(m) {
                return function(D) {
                  return b([m, D]);
                };
              }
              function b(m) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; l && (l = 0, m[0] && (n = 0)), n; ) try {
                  if (r = 1, a && (i = m[0] & 2 ? a.return : m[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, m[1])).done) return i;
                  switch (a = 0, i && (m = [m[0] & 2, i.value]), m[0]) {
                    case 0:
                    case 1:
                      i = m;
                      break;
                    case 4:
                      return n.label++, { value: m[1], done: !1 };
                    case 5:
                      n.label++, a = m[1], m = [0];
                      continue;
                    case 7:
                      m = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!i || m[1] > i[0] && m[1] < i[3])) {
                        n.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && n.label < i[1]) {
                        n.label = i[1], i = m;
                        break;
                      }
                      if (i && n.label < i[2]) {
                        n.label = i[2], n.ops.push(m);
                        break;
                      }
                      i[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  m = t.call(e, n);
                } catch (D) {
                  m = [6, D], a = 0;
                } finally {
                  r = i = 0;
                }
                if (m[0] & 5) throw m[1];
                return { value: m[0] ? m[1] : void 0, done: !0 };
              }
            }, oi = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.isUploading = !1, this.element = document.createElement("div"), this.element.className = "vditor-upload";
                }
                return e;
              }()
            ), si = function(e, t) {
              e.tip.hide();
              var n = [], r = "", a = "";
              e.options.lang, e.options;
              for (var i = function(m, D) {
                var R = t[D], G = !0;
                R.name || (r += "<li>".concat(window.VditorI18n.nameEmpty, "</li>"), G = !1), R.size > e.options.upload.max && (r += "<li>".concat(R.name, " ").concat(window.VditorI18n.over, " ").concat(e.options.upload.max / 1024 / 1024, "M</li>"), G = !1);
                var Z = R.name.lastIndexOf("."), K = R.name.substr(Z), te = e.options.upload.filename(R.name.substr(0, Z)) + K;
                if (e.options.upload.accept) {
                  var ee = e.options.upload.accept.split(",").some(function(z) {
                    var ue = z.trim();
                    if (ue.indexOf(".") === 0) {
                      if (K.toLowerCase() === ue.toLowerCase())
                        return !0;
                    } else if (R.type.split("/")[0] === ue.split("/")[0])
                      return !0;
                    return !1;
                  });
                  ee || (r += "<li>".concat(R.name, " ").concat(window.VditorI18n.fileTypeError, "</li>"), G = !1);
                }
                G && (n.push(R), a += "<li>".concat(te, " ").concat(window.VditorI18n.uploading, ' <a class="vditorCancelUpload" href="javascript:void(0)">').concat(window.VditorI18n.cancelUpload, "</a></li>"));
              }, l = t.length, h = 0; h < l; h++)
                i(l, h);
              if (e.tip.show("<ul>".concat(r).concat(a, "</ul>")), e.options.upload.cancel) {
                var b = e.tip.element.querySelector(".vditorCancelUpload");
                b && b.addEventListener("click", function() {
                  e.options.upload.cancel(n), e.tip.hide(), e.upload.isUploading = !1;
                });
              }
              return n;
            }, li = function(e, t) {
              var n = gr(t);
              n.focus();
              var r = JSON.parse(e), a = "";
              r.code === 1 && (a = "".concat(r.msg)), r.data.errFiles && r.data.errFiles.length > 0 && (a = "<ul><li>".concat(a, "</li>"), r.data.errFiles.forEach(function(l) {
                var h = l.lastIndexOf("."), b = t.options.upload.filename(l.substr(0, h)) + l.substr(h);
                a += "<li>".concat(b, " ").concat(window.VditorI18n.uploadError, "</li>");
              }), a += "</ul>"), a ? t.tip.show(a) : t.tip.hide();
              var i = "";
              Object.keys(r.data.succMap).forEach(function(l) {
                var h = r.data.succMap[l], b = l.lastIndexOf("."), m = l.substr(b), D = t.options.upload.filename(l.substr(0, b)) + m;
                m = m.toLowerCase(), m.indexOf(".wav") === 0 || m.indexOf(".mp3") === 0 || m.indexOf(".ogg") === 0 ? t.currentMode === "wysiwyg" ? i += `<div class="vditor-wysiwyg__block" data-type="html-block"
 data-block="0"><pre><code>&lt;audio controls="controls" src="`.concat(h, '"&gt;&lt;/audio&gt;</code></pre><pre class="vditor-wysiwyg__preview" data-render="1"><audio controls="controls" src="').concat(h, `"></audio></pre></div>
`) : t.currentMode === "ir" ? i += '<audio controls="controls" src="'.concat(h, `"></audio>
`) : i += "[".concat(D, "](").concat(h, `)
`) : m.indexOf(".apng") === 0 || m.indexOf(".bmp") === 0 || m.indexOf(".gif") === 0 || m.indexOf(".ico") === 0 || m.indexOf(".cur") === 0 || m.indexOf(".jpg") === 0 || m.indexOf(".jpeg") === 0 || m.indexOf(".jfif") === 0 || m.indexOf(".pjp") === 0 || m.indexOf(".pjpeg") === 0 || m.indexOf(".png") === 0 || m.indexOf(".svg") === 0 || m.indexOf(".webp") === 0 ? t.currentMode === "wysiwyg" ? i += '<img alt="'.concat(D, '" src="').concat(h, `">
`) : i += "![".concat(D, "](").concat(h, `)
`) : t.currentMode === "wysiwyg" ? i += '<a href="'.concat(h, '">').concat(D, `</a>
`) : i += "[".concat(D, "](").concat(h, `)
`);
              }), (0, B.Hc)(t.upload.range), document.execCommand("insertHTML", !1, i), t.upload.range = getSelection().getRangeAt(0).cloneRange();
            }, jn = function(e, t, n) {
              return ai(void 0, void 0, void 0, function() {
                var r, a, K, i, l, l, h, b, m, D, R, G, Z, K, te, ee;
                return ii(this, function(z) {
                  switch (z.label) {
                    case 0:
                      for (r = [], a = e.options.upload.multiple === !0 ? t.length : 1, K = 0; K < a; K++)
                        i = t[K], i instanceof DataTransferItem && (i = i.getAsFile()), r.push(i);
                      return e.options.upload.handler ? [4, e.options.upload.handler(r)] : [3, 2];
                    case 1:
                      return l = z.sent(), n && (n.value = ""), typeof l == "string" ? (e.tip.show(l), [
                        2
                        /*return*/
                      ]) : [
                        2
                        /*return*/
                      ];
                    case 2:
                      return !e.options.upload.url || !e.upload ? (n && (n.value = ""), e.tip.show("please config: options.upload.url"), [
                        2
                        /*return*/
                      ]) : e.options.upload.file ? [4, e.options.upload.file(r)] : [3, 4];
                    case 3:
                      r = z.sent(), z.label = 4;
                    case 4:
                      if (e.options.upload.validate && (l = e.options.upload.validate(r), typeof l == "string"))
                        return e.tip.show(l), [
                          2
                          /*return*/
                        ];
                      if (h = gr(e), e.upload.range = (0, B.zh)(e), b = si(e, r), b.length === 0)
                        return n && (n.value = ""), [
                          2
                          /*return*/
                        ];
                      for (m = new FormData(), D = e.options.upload.extraData, R = 0, G = Object.keys(D); R < G.length; R++)
                        Z = G[R], m.append(Z, D[Z]);
                      for (K = 0, te = b.length; K < te; K++)
                        m.append(e.options.upload.fieldName, b[K]);
                      return ee = new XMLHttpRequest(), e.upload.xhr = ee, ee.open("POST", e.options.upload.url), e.options.upload.token && ee.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (ee.withCredentials = !0), vr(e, ee), e.upload.isUploading = !0, h.setAttribute("contenteditable", "false"), ee.onreadystatechange = function() {
                        if (ee.readyState === XMLHttpRequest.DONE) {
                          if (e.upload.isUploading = !1, h.setAttribute("contenteditable", "true"), ee.status >= 200 && ee.status < 300)
                            if (e.options.upload.success)
                              e.options.upload.success(h, ee.responseText);
                            else {
                              var ue = ee.responseText;
                              e.options.upload.format && (ue = e.options.upload.format(t, ee.responseText)), li(ue, e);
                            }
                          else
                            e.options.upload.error ? e.options.upload.error(ee.responseText) : e.tip.show(ee.responseText);
                          n && (n.value = ""), e.upload.element.style.display = "none", e.upload.xhr = void 0;
                        }
                      }, ee.upload.onprogress = function(ue) {
                        if (ue.lengthComputable) {
                          var re = ue.loaded / ue.total * 100;
                          e.upload.element.style.display = "block";
                          var me = e.upload.element;
                          me.style.width = re + "%";
                        }
                      }, ee.send(m), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, sn = function(e, t, n) {
              var r, a = (0, s.F9)(t.startContainer);
              if (a || (a = e.wysiwyg.element), n && n.inputType !== "formatItalic" && n.inputType !== "deleteByDrag" && n.inputType !== "insertFromDrop" && n.inputType !== "formatBold" && n.inputType !== "formatRemove" && n.inputType !== "formatStrikeThrough" && n.inputType !== "insertUnorderedList" && n.inputType !== "insertOrderedList" && n.inputType !== "formatOutdent" && n.inputType !== "formatIndent" && n.inputType !== "" || !n) {
                var i = za(t.startContainer);
                i && i.remove(), e.wysiwyg.element.querySelectorAll("wbr").forEach(function(re) {
                  re.remove();
                }), t.insertNode(document.createElement("wbr")), a.querySelectorAll("[style]").forEach(function(re) {
                  re.removeAttribute("style");
                }), a.querySelectorAll(".vditor-comment").forEach(function(re) {
                  re.textContent.trim() === "" && (re.classList.remove("vditor-comment", "vditor-comment--focus"), re.removeAttribute("data-cmtids"));
                }), (r = a.previousElementSibling) === null || r === void 0 || r.querySelectorAll(".vditor-comment").forEach(function(re) {
                  re.textContent.trim() === "" && (re.classList.remove("vditor-comment", "vditor-comment--focus"), re.removeAttribute("data-cmtids"));
                });
                var l = "";
                a.getAttribute("data-type") === "link-ref-defs-block" && (a = e.wysiwyg.element);
                var h = a.isEqualNode(e.wysiwyg.element), b = (0, s.a1)(a, "data-type", "footnotes-block");
                if (h)
                  l = a.innerHTML;
                else {
                  var m = (0, s.O9)(t.startContainer);
                  if (m && !b) {
                    var D = (0, _.S)(t.startContainer, "BLOCKQUOTE");
                    D ? a = (0, s.F9)(t.startContainer) || a : a = m;
                  }
                  if (b && (a = b), l = a.outerHTML, a.tagName === "UL" || a.tagName === "OL") {
                    var R = a.previousElementSibling, G = a.nextElementSibling;
                    R && (R.tagName === "UL" || R.tagName === "OL") && (l = R.outerHTML + l, R.remove()), G && (G.tagName === "UL" || G.tagName === "OL") && (l = l + G.outerHTML, G.remove()), l = l.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                  }
                  a.innerText.startsWith("```") || (e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(re) {
                    re && !a.isEqualNode(re) && (l += re.outerHTML, re.remove());
                  }), e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(re) {
                    re && !a.isEqualNode(re) && (l += re.outerHTML, re.remove());
                  }));
                }
                if (l = l.replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "").replace(/<\/(em|i)><em data-marker="\W{1}">/g, "").replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, ""), l === '<p data-block="0">```<wbr></p>' && e.hint.recentLanguage && (l = '<p data-block="0">```<wbr></p>'.replace("```", "```" + e.hint.recentLanguage)), P("SpinVditorDOM", l, "argument", e.options.debugger), l = e.lute.SpinVditorDOM(l), P("SpinVditorDOM", l, "result", e.options.debugger), h)
                  a.innerHTML = l;
                else if (a.outerHTML = l, b) {
                  var Z = (0, s.E2)(e.wysiwyg.element.querySelector("wbr"), "LI");
                  if (Z) {
                    var K = e.wysiwyg.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(Z.getAttribute("data-marker"), '"]'));
                    K && K.setAttribute("aria-label", Z.textContent.trim().substr(0, 24));
                  }
                }
                var te, ee = e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']");
                ee.forEach(function(re, me) {
                  me === 0 ? te = re : (te.insertAdjacentHTML("beforeend", re.innerHTML), re.remove());
                }), ee.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", ee[0]);
                var z, ue = e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']");
                ue.forEach(function(re, me) {
                  me === 0 ? z = re : (z.insertAdjacentHTML("beforeend", re.innerHTML), re.remove());
                }), ue.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", ue[0]), (0, B.ib)(e.wysiwyg.element, t), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(re) {
                  ge(re, e);
                }), n && (n.inputType === "deleteContentBackward" || n.inputType === "deleteContentForward") && e.options.comment.enable && (e.wysiwyg.triggerRemoveComment(e), e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)));
              }
              Be(e), Ae(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, ci = function(e, t) {
              return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
            }, yr = function(e, t, n, r) {
              function a(i) {
                return i instanceof n ? i : new n(function(l) {
                  l(i);
                });
              }
              return new (n || (n = Promise))(function(i, l) {
                function h(D) {
                  try {
                    m(r.next(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function b(D) {
                  try {
                    m(r.throw(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function m(D) {
                  D.done ? i(D.value) : a(D.value).then(h, b);
                }
                m((r = r.apply(e, t || [])).next());
              });
            }, br = function(e, t) {
              var n = { label: 0, sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1];
              }, trys: [], ops: [] }, r, a, i, l;
              return l = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
                return this;
              }), l;
              function h(m) {
                return function(D) {
                  return b([m, D]);
                };
              }
              function b(m) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; l && (l = 0, m[0] && (n = 0)), n; ) try {
                  if (r = 1, a && (i = m[0] & 2 ? a.return : m[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, m[1])).done) return i;
                  switch (a = 0, i && (m = [m[0] & 2, i.value]), m[0]) {
                    case 0:
                    case 1:
                      i = m;
                      break;
                    case 4:
                      return n.label++, { value: m[1], done: !1 };
                    case 5:
                      n.label++, a = m[1], m = [0];
                      continue;
                    case 7:
                      m = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!i || m[1] > i[0] && m[1] < i[3])) {
                        n.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && n.label < i[1]) {
                        n.label = i[1], i = m;
                        break;
                      }
                      if (i && n.label < i[2]) {
                        n.label = i[2], n.ops.push(m);
                        break;
                      }
                      i[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  m = t.call(e, n);
                } catch (D) {
                  m = [6, D], a = 0;
                } finally {
                  r = i = 0;
                }
                if (m[0] & 5) throw m[1];
                return { value: m[0] ? m[1] : void 0, done: !0 };
              }
            }, wr = function(e, t, n) {
              if (e.keyCode === 229 && e.code === "" && e.key === "Unidentified" && t.currentMode !== "sv") {
                var r = (0, s.F9)(n);
                if (r && r.textContent.trim() === "")
                  return t[t.currentMode].composingLock = !0, !1;
              }
              return !0;
            }, Er = function(e, t, n) {
              if (!(n.key === "Enter" || n.key === "Tab" || n.key === "Backspace" || n.key.indexOf("Arrow") > -1 || (0, o.yl)(n) || n.key === "Escape" || n.shiftKey || n.altKey)) {
                var r = (0, s.lG)(e.startContainer, "P") || (0, s.lG)(e.startContainer, "LI");
                if (r && (0, B.im)(r, t[t.currentMode].element, e).start === 0) {
                  r.nodeValue && (r.nodeValue = r.nodeValue.replace(/\u2006/g, ""));
                  var a = document.createTextNode(p.g.ZWSP);
                  e.insertNode(a), e.setStartAfter(a);
                }
              }
            }, Sr = function(e, t) {
              if (t === "ArrowDown" || t === "ArrowUp") {
                var n = (0, s.a1)(e.startContainer, "data-type", "math-inline") || (0, s.a1)(e.startContainer, "data-type", "html-entity") || (0, s.a1)(e.startContainer, "data-type", "html-inline");
                n && (t === "ArrowDown" && e.setStartAfter(n.parentElement), t === "ArrowUp" && e.setStartBefore(n.parentElement));
              }
            }, Kt = function(e, t) {
              var n = (0, B.zh)(e), r = (0, s.F9)(n.startContainer);
              r && (r.insertAdjacentHTML(t, '<p data-block="0">'.concat(p.g.ZWSP, `<wbr>
</p>`)), (0, B.ib)(e[e.currentMode].element, n), _t(e), Ee(e));
            }, ui = function(e) {
              var t = (0, s.lG)(e, "TABLE");
              return t && t.rows[0].cells[0].isSameNode(e) ? t : !1;
            }, fi = function(e) {
              var t = (0, s.lG)(e, "TABLE");
              return t && t.lastElementChild.lastElementChild.lastElementChild.isSameNode(e) ? t : !1;
            }, Cr = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e.previousElementSibling;
              return r || (e.parentElement.previousElementSibling ? r = e.parentElement.previousElementSibling.lastElementChild : e.parentElement.parentElement.tagName === "TBODY" && e.parentElement.parentElement.previousElementSibling ? r = e.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild : r = null), r && (t.selectNodeContents(r), n || t.collapse(!1), (0, B.Hc)(t)), r;
            }, qt = function(e, t, n, r, a) {
              var i = (0, B.im)(r, e[e.currentMode].element, n);
              if (t.key === "ArrowDown" && r.textContent.trimRight().substr(i.start).indexOf(`
`) === -1 || t.key === "ArrowRight" && i.start >= r.textContent.trimRight().length) {
                var l = a.nextElementSibling;
                return !l || l && (l.tagName === "TABLE" || l.getAttribute("data-type")) ? (a.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(p.g.ZWSP, "<wbr></p>")), (0, B.ib)(e[e.currentMode].element, n)) : (n.selectNodeContents(l), n.collapse(!0), (0, B.Hc)(n)), t.preventDefault(), !0;
              }
              return !1;
            }, xt = function(e, t, n, r, a) {
              var i = (0, B.im)(r, e[e.currentMode].element, n);
              if (t.key === "ArrowUp" && r.textContent.substr(0, i.start).indexOf(`
`) === -1 || (t.key === "ArrowLeft" || t.key === "Backspace" && n.toString() === "") && i.start === 0) {
                var l = a.previousElementSibling;
                return !l || l && (l.tagName === "TABLE" || l.getAttribute("data-type")) ? (a.insertAdjacentHTML("beforebegin", '<p data-block="0">'.concat(p.g.ZWSP, "<wbr></p>")), (0, B.ib)(e[e.currentMode].element, n)) : (n.selectNodeContents(l), n.collapse(!1), (0, B.Hc)(n)), t.preventDefault(), !0;
              }
              return !1;
            }, ln = function(e, t, n, r) {
              r === void 0 && (r = !0);
              var a = (0, s.lG)(t.startContainer, "LI");
              if (e[e.currentMode].element.querySelectorAll("wbr").forEach(function(D) {
                D.remove();
              }), t.insertNode(document.createElement("wbr")), r && a) {
                for (var i = "", l = 0; l < a.parentElement.childElementCount; l++) {
                  var h = a.parentElement.children[l].querySelector("input");
                  h && h.remove(), i += '<p data-block="0">'.concat(a.parentElement.children[l].innerHTML.trimLeft(), "</p>");
                }
                a.parentElement.insertAdjacentHTML("beforebegin", i), a.parentElement.remove();
              } else if (a)
                if (n === "check")
                  a.parentElement.querySelectorAll("li").forEach(function(D) {
                    D.insertAdjacentHTML("afterbegin", '<input type="checkbox" />'.concat(D.textContent.indexOf(" ") === 0 ? "" : " ")), D.classList.add("vditor-task");
                  });
                else {
                  a.querySelector("input") && a.parentElement.querySelectorAll("li").forEach(function(D) {
                    D.querySelector("input").remove(), D.classList.remove("vditor-task");
                  });
                  var m = void 0;
                  n === "list" ? (m = document.createElement("ul"), m.setAttribute("data-marker", "*")) : (m = document.createElement("ol"), m.setAttribute("data-marker", "1.")), m.setAttribute("data-block", "0"), m.setAttribute("data-tight", a.parentElement.getAttribute("data-tight")), m.innerHTML = a.parentElement.innerHTML, a.parentElement.parentNode.replaceChild(m, a.parentElement);
                }
              else {
                var b = (0, s.a1)(t.startContainer, "data-block", "0");
                b || (e[e.currentMode].element.querySelector("wbr").remove(), b = e[e.currentMode].element.querySelector("p"), b.innerHTML = "<wbr>"), n === "check" ? (b.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> '.concat(b.innerHTML, "</li></ul>")), b.remove()) : n === "list" ? (b.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li>'.concat(b.innerHTML, "</li></ul>")), b.remove()) : n === "ordered-list" && (b.insertAdjacentHTML("beforebegin", '<ol data-block="0"><li>'.concat(b.innerHTML, "</li></ol>")), b.remove());
              }
            }, kr = function(e, t, n) {
              var r = t.previousElementSibling;
              if (t && r) {
                var a = [t];
                Array.from(n.cloneContents().children).forEach(function(b, m) {
                  b.nodeType !== 3 && t && b.textContent.trim() !== "" && t.getAttribute("data-node-id") === b.getAttribute("data-node-id") && (m !== 0 && a.push(t), t = t.nextElementSibling);
                }), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(b) {
                  b.remove();
                }), n.insertNode(document.createElement("wbr"));
                var i = r.parentElement, l = "";
                a.forEach(function(b) {
                  var m = b.getAttribute("data-marker");
                  m.length !== 1 && (m = "1".concat(m.slice(-1))), l += '<li data-node-id="'.concat(b.getAttribute("data-node-id"), '" data-marker="').concat(m, '">').concat(b.innerHTML, "</li>"), b.remove();
                }), r.insertAdjacentHTML("beforeend", "<".concat(i.tagName, ' data-block="0">').concat(l, "</").concat(i.tagName, ">")), e.currentMode === "wysiwyg" ? i.outerHTML = e.lute.SpinVditorDOM(i.outerHTML) : i.outerHTML = e.lute.SpinVditorIRDOM(i.outerHTML), (0, B.ib)(e[e.currentMode].element, n);
                var h = (0, s.O9)(n.startContainer);
                h && h.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(b) {
                  ge(b, e), e.currentMode === "wysiwyg" && b.previousElementSibling.setAttribute("style", "display:none");
                }), Ee(e), _t(e);
              } else
                e[e.currentMode].element.focus();
            }, Fn = function(e, t, n, r) {
              var a = (0, s.lG)(t.parentElement, "LI");
              if (a) {
                e[e.currentMode].element.querySelectorAll("wbr").forEach(function(R) {
                  R.remove();
                }), n.insertNode(document.createElement("wbr"));
                var i = t.parentElement, l = i.cloneNode(), h = [t];
                Array.from(n.cloneContents().children).forEach(function(R, G) {
                  R.nodeType !== 3 && t && R.textContent.trim() !== "" && t.getAttribute("data-node-id") === R.getAttribute("data-node-id") && (G !== 0 && h.push(t), t = t.nextElementSibling);
                });
                var b = !1, m = "";
                i.querySelectorAll("li").forEach(function(R) {
                  b && (m += R.outerHTML, !R.nextElementSibling && !R.previousElementSibling ? R.parentElement.remove() : R.remove()), R.isSameNode(h[h.length - 1]) && (b = !0);
                }), h.reverse().forEach(function(R) {
                  a.insertAdjacentElement("afterend", R);
                }), m && (l.innerHTML = m, h[0].insertAdjacentElement("beforeend", l)), e.currentMode === "wysiwyg" ? r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML) : r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML), (0, B.ib)(e[e.currentMode].element, n);
                var D = (0, s.O9)(n.startContainer);
                D && D.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(R) {
                  ge(R, e), e.currentMode === "wysiwyg" && R.previousElementSibling.setAttribute("style", "display:none");
                }), Ee(e), _t(e);
              } else
                e[e.currentMode].element.focus();
            }, cn = function(e, t) {
              for (var n = getSelection().getRangeAt(0).startContainer.parentElement, r = e.rows[0].cells.length, a = e.rows.length, i = 0, l = 0; l < a; l++)
                for (var h = 0; h < r; h++)
                  if (e.rows[l].cells[h].isSameNode(n)) {
                    i = h;
                    break;
                  }
              for (var b = 0; b < a; b++)
                e.rows[b].cells[i].setAttribute("align", t);
            }, Vn = function(e) {
              var t = e.trimRight().split(`
`).pop();
              return t === "" ? !1 : (t.replace(/ |-/g, "") === "" || t.replace(/ |_/g, "") === "" || t.replace(/ |\*/g, "") === "") && t.replace(/ /g, "").length > 2 ? !(t.indexOf("-") > -1 && t.trimLeft().indexOf(" ") === -1 && e.trimRight().split(`
`).length > 1 || t.indexOf("    ") === 0 || t.indexOf("	") === 0) : !1;
            }, Un = function(e) {
              var t = e.trimRight().split(`
`);
              return e = t.pop(), e.indexOf("    ") === 0 || e.indexOf("	") === 0 || (e = e.trimLeft(), e === "" || t.length === 0) ? !1 : e.replace(/-/g, "") === "" || e.replace(/=/g, "") === "";
            }, Ee = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), e.currentMode === "wysiwyg" ? Ae(e, t) : e.currentMode === "ir" ? st(e, t) : e.currentMode === "sv" && Pe(e, t);
            }, Tr = function(e, t, n, r) {
              var a, i = e.startContainer, l = (0, s.lG)(i, "LI");
              if (l) {
                if (!(0, o.yl)(r) && !r.altKey && r.key === "Enter" && // fix li 中有多个 P 时，在第一个 P 中换行会在下方生成新的 li
                !r.shiftKey && n && l.contains(n) && n.nextElementSibling)
                  return l && !l.textContent.endsWith(`
`) && l.insertAdjacentText("beforeend", `
`), e.insertNode(document.createTextNode(`

`)), e.collapse(!1), Ee(t), r.preventDefault(), !0;
                if (!(0, o.yl)(r) && !r.shiftKey && !r.altKey && r.key === "Backspace" && !l.previousElementSibling && e.toString() === "" && (0, B.im)(l, t[t.currentMode].element, e).start === 0)
                  return l.nextElementSibling ? (l.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(l.innerHTML, "</p>")), l.remove()) : l.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(l.innerHTML, "</p>"), (0, B.ib)(t[t.currentMode].element, e), Ee(t), r.preventDefault(), !0;
                if (!(0, o.yl)(r) && !r.shiftKey && !r.altKey && r.key === "Backspace" && l.textContent.trim().replace(p.g.ZWSP, "") === "" && e.toString() === "" && ((a = l.previousElementSibling) === null || a === void 0 ? void 0 : a.tagName) === "LI")
                  return l.previousElementSibling.insertAdjacentText("beforeend", `

`), e.selectNodeContents(l.previousElementSibling), e.collapse(!1), l.remove(), (0, B.ib)(t[t.currentMode].element, e), Ee(t), r.preventDefault(), !0;
                if (!(0, o.yl)(r) && !r.altKey && r.key === "Tab") {
                  var h = !1;
                  if ((e.startOffset === 0 && (i.nodeType === 3 && !i.previousSibling || i.nodeType !== 3 && i.nodeName === "LI") || l.classList.contains("vditor-task") && e.startOffset === 1 && i.previousSibling.nodeType !== 3 && i.previousSibling.tagName === "INPUT") && (h = !0), h || e.toString() !== "")
                    return r.shiftKey ? Fn(t, l, e, l.parentElement) : kr(t, l, e), r.preventDefault(), !0;
                }
              }
              return !1;
            }, Wn = function(e, t, n) {
              if (e.options.tab && n.key === "Tab")
                return n.shiftKey || (t.toString() === "" ? (t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1)) : (t.extractContents(), t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1))), (0, B.Hc)(t), Ee(e), n.preventDefault(), !0;
            }, Lr = function(e, t, n, r) {
              if (n) {
                if (!(0, o.yl)(e) && !e.altKey && e.key === "Enter") {
                  var a = String.raw(Ir || (Ir = ci(["", ""], ["", ""])), n.textContent).replace(/\\\|/g, "").trim(), i = a.split("|");
                  if (a.startsWith("|") && a.endsWith("|") && i.length > 3) {
                    var l = i.map(function() {
                      return "---";
                    }).join("|");
                    return l = n.textContent + `
` + l.substring(3, l.length - 3) + `
|<wbr>`, n.outerHTML = t.lute.SpinVditorDOM(l), (0, B.ib)(t[t.currentMode].element, r), Ee(t), He(t), e.preventDefault(), !0;
                  }
                  if (Vn(n.innerHTML) && n.previousElementSibling) {
                    var h = "", b = n.innerHTML.trimRight().split(`
`);
                    return b.length > 1 && (b.pop(), h = '<p data-block="0">'.concat(b.join(`
`), "</p>")), n.insertAdjacentHTML("afterend", "".concat(h, `<hr data-block="0"><p data-block="0"><wbr>
</p>`)), n.remove(), (0, B.ib)(t[t.currentMode].element, r), Ee(t), He(t), e.preventDefault(), !0;
                  }
                  if (Un(n.innerHTML))
                    return t.currentMode === "wysiwyg" ? n.outerHTML = t.lute.SpinVditorDOM(n.innerHTML + `<p data-block="0"><wbr>
</p>`) : n.outerHTML = t.lute.SpinVditorIRDOM(n.innerHTML + `<p data-block="0"><wbr>
</p>`), (0, B.ib)(t[t.currentMode].element, r), Ee(t), He(t), e.preventDefault(), !0;
                }
                if (r.collapsed && n.previousElementSibling && e.key === "Backspace" && !(0, o.yl)(e) && !e.altKey && !e.shiftKey && n.textContent.trimRight().split(`
`).length > 1 && (0, B.im)(n, t[t.currentMode].element, r).start === 0) {
                  var m = (0, s.DX)(n.previousElementSibling);
                  return m.textContent.endsWith(`
`) || (m.textContent = m.textContent + `
`), m.parentElement.insertAdjacentHTML("beforeend", "<wbr>".concat(n.innerHTML)), n.remove(), (0, B.ib)(t[t.currentMode].element, r), !1;
                }
                return !1;
              }
            }, Ar = function(e, t, n) {
              for (var r = "", a = 0; a < n.parentElement.childElementCount; a++)
                r += '<td align="'.concat(n.parentElement.children[a].getAttribute("align"), '"> </td>');
              n.tagName === "TH" ? n.parentElement.parentElement.insertAdjacentHTML("afterend", "<tbody><tr>".concat(r, "</tr></tbody>")) : n.parentElement.insertAdjacentHTML("afterend", "<tr>".concat(r, "</tr>")), Ee(e);
            }, Mr = function(e, t, n) {
              for (var r = "", a = 0; a < n.parentElement.childElementCount; a++)
                n.tagName === "TH" ? r += '<th align="'.concat(n.parentElement.children[a].getAttribute("align"), '"> </th>') : r += '<td align="'.concat(n.parentElement.children[a].getAttribute("align"), '"> </td>');
              if (n.tagName === "TH") {
                n.parentElement.parentElement.insertAdjacentHTML("beforebegin", "<thead><tr>".concat(r, "</tr></thead>")), t.insertNode(document.createElement("wbr"));
                var i = n.parentElement.innerHTML.replace(/<th>/g, "<td>").replace(/<\/th>/g, "</td>");
                n.parentElement.parentElement.nextElementSibling.insertAdjacentHTML("afterbegin", i), n.parentElement.parentElement.remove(), (0, B.ib)(e.ir.element, t);
              } else
                n.parentElement.insertAdjacentHTML("beforebegin", "<tr>".concat(r, "</tr>"));
              Ee(e);
            }, un = function(e, t, n, r) {
              r === void 0 && (r = "afterend");
              for (var a = 0, i = n.previousElementSibling; i; )
                a++, i = i.previousElementSibling;
              for (var l = 0; l < t.rows.length; l++)
                l === 0 ? t.rows[l].cells[a].insertAdjacentHTML(r, "<th> </th>") : t.rows[l].cells[a].insertAdjacentHTML(r, "<td> </td>");
              Ee(e);
            }, _r = function(e, t, n) {
              if (n.tagName === "TD") {
                var r = n.parentElement.parentElement;
                n.parentElement.previousElementSibling ? t.selectNodeContents(n.parentElement.previousElementSibling.lastElementChild) : t.selectNodeContents(r.previousElementSibling.lastElementChild.lastElementChild), r.childElementCount === 1 ? r.remove() : n.parentElement.remove(), t.collapse(!1), (0, B.Hc)(t), Ee(e);
              }
            }, xr = function(e, t, n, r) {
              for (var a = 0, i = r.previousElementSibling; i; )
                a++, i = i.previousElementSibling;
              (r.previousElementSibling || r.nextElementSibling) && (t.selectNodeContents(r.previousElementSibling || r.nextElementSibling), t.collapse(!0));
              for (var l = 0; l < n.rows.length; l++) {
                var h = n.rows[l].cells;
                if (h.length === 1) {
                  n.remove(), _t(e);
                  break;
                }
                h[a].remove();
              }
              (0, B.Hc)(t), Ee(e);
            }, Dr = function(e, t, n) {
              var r = n.startContainer, a = (0, s.lG)(r, "TD") || (0, s.lG)(r, "TH");
              if (a) {
                if (!(0, o.yl)(t) && !t.altKey && t.key === "Enter") {
                  (!a.lastElementChild || a.lastElementChild && (!a.lastElementChild.isSameNode(a.lastChild) || a.lastElementChild.tagName !== "BR")) && a.insertAdjacentHTML("beforeend", "<br>");
                  var i = document.createElement("br");
                  return n.insertNode(i), n.setStartAfter(i), Ee(e), He(e), t.preventDefault(), !0;
                }
                if (t.key === "Tab") {
                  if (t.shiftKey)
                    return Cr(a, n), t.preventDefault(), !0;
                  var l = a.nextElementSibling;
                  return l || (a.parentElement.nextElementSibling ? l = a.parentElement.nextElementSibling.firstElementChild : a.parentElement.parentElement.tagName === "THEAD" && a.parentElement.parentElement.nextElementSibling ? l = a.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild : l = null), l && (n.selectNodeContents(l), (0, B.Hc)(n)), t.preventDefault(), !0;
                }
                var h = a.parentElement.parentElement.parentElement;
                if (t.key === "ArrowUp") {
                  if (t.preventDefault(), a.tagName === "TH")
                    return h.previousElementSibling ? (n.selectNodeContents(h.previousElementSibling), n.collapse(!1), (0, B.Hc)(n)) : Kt(e, "beforebegin"), !0;
                  for (var b = 0, m = a.parentElement; b < m.cells.length && !m.cells[b].isSameNode(a); b++)
                    ;
                  var D = m.previousElementSibling;
                  return D || (D = m.parentElement.previousElementSibling.firstChild), n.selectNodeContents(D.cells[b]), n.collapse(!1), (0, B.Hc)(n), !0;
                }
                if (t.key === "ArrowDown") {
                  t.preventDefault();
                  var m = a.parentElement;
                  if (!m.nextElementSibling && a.tagName === "TD")
                    return h.nextElementSibling ? (n.selectNodeContents(h.nextElementSibling), n.collapse(!0), (0, B.Hc)(n)) : Kt(e, "afterend"), !0;
                  for (var b = 0; b < m.cells.length && !m.cells[b].isSameNode(a); b++)
                    ;
                  var l = m.nextElementSibling;
                  return l || (l = m.parentElement.nextElementSibling.firstChild), n.selectNodeContents(l.cells[b]), n.collapse(!0), (0, B.Hc)(n), !0;
                }
                if (e.currentMode === "wysiwyg" && !(0, o.yl)(t) && t.key === "Enter" && !t.shiftKey && t.altKey) {
                  var R = e.wysiwyg.popover.querySelector(".vditor-input");
                  return R.focus(), R.select(), t.preventDefault(), !0;
                }
                if (!(0, o.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Backspace" && n.startOffset === 0 && n.toString() === "") {
                  var G = Cr(a, n, !1);
                  return !G && h && (h.textContent.trim() === "" ? (h.outerHTML = `<p data-block="0"><wbr>
</p>`, (0, B.ib)(e[e.currentMode].element, n)) : (n.setStartBefore(h), n.collapse(!0)), Ee(e)), t.preventDefault(), !0;
                }
                if (q("⇧⌘F", t))
                  return Mr(e, n, a), t.preventDefault(), !0;
                if (q("⌘=", t))
                  return Ar(e, n, a), t.preventDefault(), !0;
                if (q("⇧⌘G", t))
                  return un(e, h, a, "beforebegin"), t.preventDefault(), !0;
                if (q("⇧⌘=", t))
                  return un(e, h, a), t.preventDefault(), !0;
                if (q("⌘-", t))
                  return _r(e, n, a), t.preventDefault(), !0;
                if (q("⇧⌘-", t))
                  return xr(e, n, h, a), t.preventDefault(), !0;
                if (q("⇧⌘L", t)) {
                  if (e.currentMode === "ir")
                    return cn(h, "left"), Ee(e), t.preventDefault(), !0;
                  var Z = e.wysiwyg.popover.querySelector('[data-type="left"]');
                  if (Z)
                    return Z.click(), t.preventDefault(), !0;
                }
                if (q("⇧⌘C", t)) {
                  if (e.currentMode === "ir")
                    return cn(h, "center"), Ee(e), t.preventDefault(), !0;
                  var Z = e.wysiwyg.popover.querySelector('[data-type="center"]');
                  if (Z)
                    return Z.click(), t.preventDefault(), !0;
                }
                if (q("⇧⌘R", t)) {
                  if (e.currentMode === "ir")
                    return cn(h, "right"), Ee(e), t.preventDefault(), !0;
                  var Z = e.wysiwyg.popover.querySelector('[data-type="right"]');
                  if (Z)
                    return Z.click(), t.preventDefault(), !0;
                }
              }
              return !1;
            }, Or = function(e, t, n, r) {
              if (n.tagName === "PRE" && q("⌘A", t))
                return r.selectNodeContents(n.firstElementChild), t.preventDefault(), !0;
              if (e.options.tab && t.key === "Tab" && !t.shiftKey && r.toString() === "")
                return r.insertNode(document.createTextNode(e.options.tab)), r.collapse(!1), Ee(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, o.yl)(t) && !t.shiftKey && !t.altKey) {
                var a = (0, B.im)(n, e[e.currentMode].element, r);
                if ((a.start === 0 || a.start === 1 && n.innerText === `
`) && r.toString() === "")
                  return n.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(n.firstElementChild.innerHTML, "</p>"), (0, B.ib)(e[e.currentMode].element, r), Ee(e), t.preventDefault(), !0;
              }
              return !(0, o.yl)(t) && !t.altKey && t.key === "Enter" ? (n.firstElementChild.textContent.endsWith(`
`) || n.firstElementChild.insertAdjacentText("beforeend", `
`), r.extractContents(), r.insertNode(document.createTextNode(`
`)), r.collapse(!1), (0, B.Hc)(r), (0, o.vU)() || (e.currentMode === "wysiwyg" ? sn(e, r) : Ue(e, r)), He(e), t.preventDefault(), !0) : !1;
            }, Br = function(e, t, n, r) {
              var a = t.startContainer, i = (0, s.lG)(a, "BLOCKQUOTE");
              if (i && t.toString() === "") {
                if (n.key === "Backspace" && !(0, o.yl)(n) && !n.shiftKey && !n.altKey && (0, B.im)(i, e[e.currentMode].element, t).start === 0)
                  return t.insertNode(document.createElement("wbr")), i.outerHTML = i.innerHTML, (0, B.ib)(e[e.currentMode].element, t), Ee(e), n.preventDefault(), !0;
                if (r && n.key === "Enter" && !(0, o.yl)(n) && !n.shiftKey && !n.altKey && r.parentElement.tagName === "BLOCKQUOTE") {
                  var l = !1;
                  if (r.innerHTML.replace(p.g.ZWSP, "") === `
` || r.innerHTML.replace(p.g.ZWSP, "") === "" ? (l = !0, r.remove()) : r.innerHTML.endsWith(`

`) && (0, B.im)(r, e[e.currentMode].element, t).start === r.textContent.length - 1 && (r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 2), l = !0), l)
                    return i.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(p.g.ZWSP, `<wbr>
</p>`)), (0, B.ib)(e[e.currentMode].element, t), Ee(e), n.preventDefault(), !0;
                }
                var h = (0, s.F9)(a);
                if (e.currentMode === "wysiwyg" && h && q("⇧⌘;", n))
                  return t.insertNode(document.createElement("wbr")), h.outerHTML = '<blockquote data-block="0">'.concat(h.outerHTML, "</blockquote>"), (0, B.ib)(e.wysiwyg.element, t), Ae(e), n.preventDefault(), !0;
                if (qt(e, n, t, i, i) || xt(e, n, t, i, i))
                  return !0;
              }
              return !1;
            }, Hr = function(e, t, n) {
              var r = t.startContainer, a = (0, s.lG)(r, "LI");
              if (a && a.classList.contains("vditor-task")) {
                if (q("⇧⌘J", n)) {
                  var i = a.firstElementChild;
                  return i.checked ? i.removeAttribute("checked") : i.setAttribute("checked", "checked"), Ee(e), n.preventDefault(), !0;
                }
                if (n.key === "Backspace" && !(0, o.yl)(n) && !n.shiftKey && !n.altKey && t.toString() === "" && t.startOffset === 1 && (r.nodeType === 3 && r.previousSibling && r.previousSibling.tagName === "INPUT" || r.nodeType !== 3)) {
                  var l = a.previousElementSibling;
                  if (a.querySelector("input").remove(), l) {
                    var h = (0, s.DX)(l);
                    h.parentElement.insertAdjacentHTML("beforeend", "<wbr>" + a.innerHTML.trim()), a.remove();
                  } else
                    a.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(a.innerHTML.trim() || `
`, "</p>")), a.nextElementSibling ? a.remove() : a.parentElement.remove();
                  return (0, B.ib)(e[e.currentMode].element, t), Ee(e), n.preventDefault(), !0;
                }
                if (n.key === "Enter" && !(0, o.yl)(n) && !n.shiftKey && !n.altKey) {
                  if (a.textContent.trim() === "")
                    if ((0, s.fb)(a.parentElement, "vditor-task")) {
                      var b = (0, s.O9)(r);
                      b && Fn(e, a, t, b);
                    } else if (a.nextElementSibling) {
                      var m = "", D = "", R = !1;
                      Array.from(a.parentElement.children).forEach(function(te) {
                        a.isSameNode(te) ? R = !0 : R ? m += te.outerHTML : D += te.outerHTML;
                      });
                      var G = a.parentElement.tagName, Z = a.parentElement.tagName === "OL" ? "" : ' data-marker="'.concat(a.parentElement.getAttribute("data-marker"), '"'), K = "";
                      D && (K = a.parentElement.tagName === "UL" ? "" : ' start="1"', D = "<".concat(G, ' data-tight="true"').concat(Z, ' data-block="0">').concat(D, "</").concat(G, ">")), a.parentElement.outerHTML = "".concat(D, `<p data-block="0"><wbr>
</p><`).concat(G, `
 data-tight="true"`).concat(Z, ' data-block="0"').concat(K, ">").concat(m, "</").concat(G, ">");
                    } else
                      a.parentElement.insertAdjacentHTML("afterend", `<p data-block="0"><wbr>
</p>`), a.parentElement.querySelectorAll("li").length === 1 ? a.parentElement.remove() : a.remove();
                  else r.nodeType !== 3 && t.startOffset === 0 && r.firstChild.tagName === "INPUT" ? t.setStart(r.childNodes[1], 1) : (t.setEndAfter(a.lastChild), a.insertAdjacentHTML("afterend", '<li class="vditor-task" data-marker="'.concat(a.getAttribute("data-marker"), '"><input type="checkbox"> <wbr></li>')), document.querySelector("wbr").after(t.extractContents()));
                  return (0, B.ib)(e[e.currentMode].element, t), Ee(e), He(e), n.preventDefault(), !0;
                }
              }
              return !1;
            }, Nr = function(e, t, n, r) {
              if (t.startContainer.nodeType !== 3) {
                var a = t.startContainer.children[t.startOffset];
                if (a && a.tagName === "HR")
                  return t.selectNodeContents(a.previousElementSibling), t.collapse(!1), n.preventDefault(), !0;
              }
              if (r) {
                var i = r.previousElementSibling;
                if (i && (0, B.im)(r, e[e.currentMode].element, t).start === 0 && ((0, o.vU)() && i.tagName === "HR" || i.tagName === "TABLE")) {
                  if (i.tagName === "TABLE") {
                    var l = i.lastElementChild.lastElementChild.lastElementChild;
                    l.innerHTML = l.innerHTML.trimLeft() + "<wbr>" + r.textContent.trim(), r.remove();
                  } else
                    i.remove();
                  return (0, B.ib)(e[e.currentMode].element, t), Ee(e), n.preventDefault(), !0;
                }
              }
              return !1;
            }, Rr = function(e) {
              (0, o.vU)() && e.startContainer.nodeType !== 3 && e.startContainer.tagName === "HR" && e.setStartBefore(e.startContainer);
            }, Pr = function(e, t, n) {
              var r, a;
              if (!(0, o.vU)())
                return !1;
              if (e.key === "ArrowUp" && t && ((r = t.previousElementSibling) === null || r === void 0 ? void 0 : r.tagName) === "TABLE") {
                var i = t.previousElementSibling;
                return n.selectNodeContents(i.rows[i.rows.length - 1].lastElementChild), n.collapse(!1), e.preventDefault(), !0;
              }
              return e.key === "ArrowDown" && t && ((a = t.nextElementSibling) === null || a === void 0 ? void 0 : a.tagName) === "TABLE" ? (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]), n.collapse(!0), e.preventDefault(), !0) : !1;
            }, fn = function(e, t, n) {
              return yr(void 0, void 0, void 0, function() {
                var r, a, i, l, h, b, m, D, R, G, Z, K, te, z, ee, z, ue;
                return br(this, function(re) {
                  switch (re.label) {
                    case 0:
                      return e[e.currentMode].element.getAttribute("contenteditable") !== "true" ? [
                        2
                        /*return*/
                      ] : (t.stopPropagation(), t.preventDefault(), "clipboardData" in t ? (r = t.clipboardData.getData("text/html"), a = t.clipboardData.getData("text/plain"), i = t.clipboardData.files) : (r = t.dataTransfer.getData("text/html"), a = t.dataTransfer.getData("text/plain"), t.dataTransfer.types.includes("Files") && (i = t.dataTransfer.items)), l = {}, h = function(me, Le) {
                        if (!Le)
                          return ["", Lute.WalkContinue];
                        if (e.options.upload.renderLinkDest)
                          return e.options.upload.renderLinkDest(e, me, Le);
                        var ke = me.TokensStr();
                        if (me.__internal_object__.Parent.Type === 34 && ke && ke.indexOf("file://") === -1 && e.options.upload.linkToImgUrl) {
                          var Me = new XMLHttpRequest();
                          Me.open("POST", e.options.upload.linkToImgUrl), e.options.upload.token && Me.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (Me.withCredentials = !0), vr(e, Me), Me.setRequestHeader("Content-Type", "application/json; charset=utf-8"), Me.onreadystatechange = function() {
                            if (Me.readyState === XMLHttpRequest.DONE) {
                              if (Me.status === 200) {
                                var qe = Me.responseText;
                                e.options.upload.linkToImgFormat && (qe = e.options.upload.linkToImgFormat(Me.responseText));
                                var Fe = JSON.parse(qe);
                                if (Fe.code !== 0) {
                                  e.tip.show(Fe.msg);
                                  return;
                                }
                                var ze = Fe.data.originalURL;
                                if (e.currentMode === "sv")
                                  e.sv.element.querySelectorAll(".vditor-sv__marker--link").forEach(function(Ne) {
                                    Ne.textContent === ze && (Ne.textContent = Fe.data.url);
                                  });
                                else {
                                  var be = e[e.currentMode].element.querySelector('img[src="'.concat(ze, '"]'));
                                  be.src = Fe.data.url, e.currentMode === "ir" && (be.previousElementSibling.previousElementSibling.innerHTML = Fe.data.url);
                                }
                                Ee(e);
                              } else
                                e.tip.show(Me.responseText);
                              e.options.upload.linkToImgCallback && e.options.upload.linkToImgCallback(Me.responseText);
                            }
                          }, Me.send(JSON.stringify({ url: ke }));
                        }
                        return e.currentMode === "ir" ? ['<span class="vditor-ir__marker vditor-ir__marker--link">'.concat(Lute.EscapeHTMLStr(ke), "</span>"), Lute.WalkContinue] : e.currentMode === "wysiwyg" ? ["", Lute.WalkContinue] : ['<span class="vditor-sv__marker--link">'.concat(Lute.EscapeHTMLStr(ke), "</span>"), Lute.WalkContinue];
                      }, (r.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<a href="'.concat(a, '">').concat(a, "</a>") || r.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<!--StartFragment--><a href="'.concat(a, '">').concat(a, "</a><!--EndFragment-->")) && (r = ""), b = new DOMParser().parseFromString(r, "text/html"), b.body && (r = b.body.innerHTML), r = Lute.Sanitize(r), e.wysiwyg.getComments(e), m = e[e.currentMode].element.scrollHeight, D = ye(r, a, e.currentMode), R = e.currentMode === "sv" ? (0, s.a1)(t.target, "data-type", "code-block") : (0, s.lG)(t.target, "CODE"), R ? (e.currentMode === "sv" ? document.execCommand("insertHTML", !1, a.replace(/&/g, "&amp;").replace(/</g, "&lt;")) : (G = (0, B.im)(t.target, e[e.currentMode].element), R.parentElement.tagName !== "PRE" && (a += p.g.ZWSP), R.textContent = R.textContent.substring(0, G.start) + a + R.textContent.substring(G.end), (0, B.$j)(G.start + a.length, G.start + a.length, R.parentElement), !((ue = R.parentElement) === null || ue === void 0) && ue.nextElementSibling.classList.contains("vditor-".concat(e.currentMode, "__preview")) && (R.parentElement.nextElementSibling.innerHTML = R.outerHTML, ge(R.parentElement.nextElementSibling, e))), [3, 10]) : [3, 1]);
                    case 1:
                      return D ? (n.pasteCode(D), [3, 10]) : [3, 2];
                    case 2:
                      return r.trim() === "" ? [3, 5] : (Z = document.createElement("div"), Z.innerHTML = r, e.options.upload.base64ToLink ? [3, 4] : [4, di(e, Z, ("clipboardData" in t ? t.clipboardData : t.dataTransfer).getData("text/rtf"))]);
                    case 3:
                      re.sent(), re.label = 4;
                    case 4:
                      return Z.querySelectorAll("[style]").forEach(function(me) {
                        me.removeAttribute("style");
                      }), Z.querySelectorAll(".vditor-copy").forEach(function(me) {
                        me.remove();
                      }), e.currentMode === "ir" ? (l.HTML2VditorIRDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), (0, B.oC)(e.lute.HTML2VditorIRDOM(Z.innerHTML), e)) : e.currentMode === "wysiwyg" ? (l.HTML2VditorDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), (0, B.oC)(e.lute.HTML2VditorDOM(Z.innerHTML), e)) : (l.Md2VditorSVDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), In(e, e.lute.HTML2Md(Z.innerHTML).trimRight())), e.outline.render(e), [3, 10];
                    case 5:
                      return i.length > 0 ? e.options.upload.url || e.options.upload.handler ? [4, jn(e, i)] : [3, 7] : [3, 9];
                    case 6:
                      return re.sent(), [3, 8];
                    case 7:
                      K = new FileReader(), "clipboardData" in t ? (i = t.clipboardData.files, te = i[0]) : t.dataTransfer.types.includes("Files") && (i = t.dataTransfer.items, te = i[0].getAsFile()), te && te.type.startsWith("image") && (K.readAsDataURL(te), K.onload = function() {
                        var me = "";
                        e.currentMode === "wysiwyg" ? me += '<img alt="'.concat(te.name, '" src="').concat(K.result.toString(), `">
`) : me += "![".concat(te.name, "](").concat(K.result.toString(), `)
`), document.execCommand("insertHTML", !1, me);
                      }), re.label = 8;
                    case 8:
                      return [3, 10];
                    case 9:
                      a.trim() !== "" && i.length === 0 && (z = (0, B.zh)(e), z.toString() !== "" && e.lute.IsValidLinkDest(a) && (a = "[".concat(z.toString(), "](").concat(a, ")")), e.currentMode === "ir" ? (l.Md2VditorIRDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), (0, B.oC)(Lute.Sanitize(e.lute.Md2VditorIRDOM(a)), e)) : e.currentMode === "wysiwyg" ? (l.Md2VditorDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), (0, B.oC)(Lute.Sanitize(e.lute.Md2VditorDOM(a)), e)) : (l.Md2VditorSVDOM = { renderLinkDest: h }, e.lute.SetJSRenderers({ renderers: l }), In(e, a)), e.outline.render(e)), re.label = 10;
                    case 10:
                      return e.currentMode !== "sv" && (ee = (0, s.F9)((0, B.zh)(e).startContainer), ee && (z = (0, B.zh)(e), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(me) {
                        me.remove();
                      }), z.insertNode(document.createElement("wbr")), e.currentMode === "wysiwyg" ? ee.outerHTML = e.lute.SpinVditorDOM(ee.outerHTML) : ee.outerHTML = e.lute.SpinVditorIRDOM(ee.outerHTML), (0, B.ib)(e[e.currentMode].element, z)), e[e.currentMode].element.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(me) {
                        ge(me, e);
                      })), e.wysiwyg.triggerRemoveComment(e), Ee(e), e[e.currentMode].element.scrollHeight - m > Math.min(e[e.currentMode].element.clientHeight, window.innerHeight) / 2 && He(e), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, di = function(e, t, n) {
              return yr(void 0, void 0, void 0, function() {
                var r, a, i, l, h, b, m, D, R, te, G, Z, K, te, ee, z;
                return br(this, function(ue) {
                  switch (ue.label) {
                    case 0:
                      if (!n)
                        return [
                          2
                          /*return*/
                        ];
                      if (r = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/, a = new RegExp("(?:(" + r.source + "))([\\da-fA-F\\s]+)\\}", "g"), i = n.match(a), l = [], i)
                        for (h = 0, b = i; h < b.length; h++)
                          m = b[h], D = void 0, m.includes("\\pngblip") ? D = "image/png" : m.includes("\\jpegblip") && (D = "image/jpeg"), D && l.push({
                            hex: m.replace(r, "").replace(/[^\da-fA-F]/g, ""),
                            type: D
                          });
                      for (R = [], Kn(t, function(re) {
                        if (re.tagName === "V:SHAPE")
                          return Kn(re, function(me) {
                            me.tagName === "V:IMAGEDATA" && R.push({ shape: re, img: me });
                          }), !1;
                      }), te = 0; te < R.length; te++)
                        G = document.createElement("img"), Z = "data:" + l[te].type + ";base64," + btoa((l[te].hex.match(/\w{2}/g) || []).map(function(re) {
                          return String.fromCharCode(parseInt(re, 16));
                        }).join("")), G.src = Z, G.title = R[te].img.getAttribute("title"), R[te].shape.parentNode.replaceChild(G, R[te].shape);
                      K = t.querySelectorAll("img"), te = 0, ue.label = 1;
                    case 1:
                      return te < K.length ? (ee = K[te].src || "", ee ? (z = K[te], [4, e.options.upload.base64ToLink(ee)]) : [3, 3]) : [3, 4];
                    case 2:
                      z.src = ue.sent(), ue.label = 3;
                    case 3:
                      return te++, [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, Kn = function(e, t) {
              var n = t(e);
              if (n !== !1)
                for (var r = 0; r < e.children.length; r++)
                  Kn(e.children[r], t);
            }, Ir, jr = function(e) {
              var t, n;
              e.hint.render(e);
              var r = (0, B.zh)(e).startContainer, a = (0, s.a1)(r, "data-type", "code-block-info");
              if (a)
                if (a.textContent.replace(p.g.ZWSP, "") === "" && e.hint.recentLanguage) {
                  a.textContent = p.g.ZWSP + e.hint.recentLanguage;
                  var i = (0, B.zh)(e);
                  i.selectNodeContents(a);
                } else {
                  var l = [], h = a.textContent.substring(0, (0, B.im)(a, e.ir.element).start).replace(p.g.ZWSP, "");
                  (e.options.preview.hljs.langs || p.g.ALIAS_CODE_LANGUAGES.concat(((n = (t = window.hljs) === null || t === void 0 ? void 0 : t.listLanguages()) !== null && n !== void 0 ? n : []).sort())).forEach(function(b) {
                    b.indexOf(h.toLowerCase()) > -1 && l.push({
                      html: b,
                      value: b
                    });
                  }), e.hint.genHTML(l, h, e);
                }
            }, st = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && jr(e), clearTimeout(e.ir.processTimeoutId), e.ir.processTimeoutId = window.setTimeout(function() {
                if (!e.ir.composingLock) {
                  var n = M(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, o.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, zt = function(e, t) {
              var n = (0, B.zh)(e), r = (0, s.F9)(n.startContainer) || n.startContainer;
              if (r) {
                var a = r.querySelector(".vditor-ir__marker--heading");
                a ? a.innerHTML = t : (r.insertAdjacentText("afterbegin", t), n.selectNodeContents(r), n.collapse(!1)), Ue(e, n.cloneRange()), Ft(e);
              }
            }, dn = function(e, t, n) {
              var r = (0, s.a1)(e.startContainer, "data-type", n);
              if (r) {
                r.firstElementChild.remove(), r.lastElementChild.remove(), e.insertNode(document.createElement("wbr"));
                var a = document.createElement("div");
                a.innerHTML = t.lute.SpinVditorIRDOM(r.outerHTML), r.outerHTML = a.firstElementChild.innerHTML.trim();
              }
            }, pi = function(e, t, n, r) {
              var a = (0, B.zh)(e), i = t.getAttribute("data-type"), l = a.startContainer;
              l.nodeType === 3 && (l = l.parentElement);
              var h = !0;
              if (t.classList.contains("vditor-menu--current"))
                if (i === "quote") {
                  var b = (0, s.lG)(l, "BLOCKQUOTE");
                  b && (a.insertNode(document.createElement("wbr")), b.outerHTML = b.innerHTML.trim() === "" ? '<p data-block="0">'.concat(b.innerHTML, "</p>") : b.innerHTML);
                } else if (i === "link") {
                  var m = (0, s.a1)(a.startContainer, "data-type", "a");
                  if (m) {
                    var D = (0, s.fb)(a.startContainer, "vditor-ir__link");
                    D ? (a.insertNode(document.createElement("wbr")), m.outerHTML = D.innerHTML) : m.outerHTML = m.querySelector(".vditor-ir__link").innerHTML + "<wbr>";
                  }
                } else i === "italic" ? dn(a, e, "em") : i === "bold" ? dn(a, e, "strong") : i === "strike" ? dn(a, e, "s") : i === "inline-code" ? dn(a, e, "code") : (i === "check" || i === "list" || i === "ordered-list") && (ln(e, a, i), h = !1, t.classList.remove("vditor-menu--current"));
              else {
                e.ir.element.childNodes.length === 0 && (e.ir.element.innerHTML = '<p data-block="0"><wbr></p>', (0, B.ib)(e.ir.element, a));
                var R = (0, s.F9)(a.startContainer);
                if (i === "line") {
                  if (R) {
                    var G = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                    R.innerHTML.trim() === "" ? R.outerHTML = G : R.insertAdjacentHTML("afterend", G);
                  }
                } else if (i === "quote")
                  R && (a.insertNode(document.createElement("wbr")), R.outerHTML = '<blockquote data-block="0">'.concat(R.outerHTML, "</blockquote>"), h = !1, t.classList.add("vditor-menu--current"));
                else if (i === "link") {
                  var Z = void 0;
                  a.toString() === "" ? Z = "".concat(n, "<wbr>").concat(r) : Z = "".concat(n).concat(a.toString()).concat(r.replace(")", "<wbr>)")), document.execCommand("insertHTML", !1, Z), h = !1, t.classList.add("vditor-menu--current");
                } else if (i === "italic" || i === "bold" || i === "strike" || i === "inline-code" || i === "code" || i === "table") {
                  var Z = void 0;
                  a.toString() === "" ? Z = "".concat(n, "<wbr>").concat(r) : (i === "code" ? Z = "".concat(n, `
`).concat(a.toString(), "<wbr>").concat(r) : i === "table" ? Z = "".concat(n).concat(a.toString(), "<wbr>").concat(r) : Z = "".concat(n).concat(a.toString()).concat(r, "<wbr>"), a.deleteContents()), (i === "table" || i === "code") && (Z = `
` + Z + `

`);
                  var K = document.createElement("span");
                  K.innerHTML = Z, a.insertNode(K), Ue(e, a), i === "table" && (a.selectNodeContents(getSelection().getRangeAt(0).startContainer.parentElement), (0, B.Hc)(a));
                } else (i === "check" || i === "list" || i === "ordered-list") && (ln(e, a, i, !1), h = !1, v(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current"));
              }
              (0, B.ib)(e.ir.element, a), st(e), h && Ft(e);
            }, hi = function(e, t, n, r) {
              function a(i) {
                return i instanceof n ? i : new n(function(l) {
                  l(i);
                });
              }
              return new (n || (n = Promise))(function(i, l) {
                function h(D) {
                  try {
                    m(r.next(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function b(D) {
                  try {
                    m(r.throw(D));
                  } catch (R) {
                    l(R);
                  }
                }
                function m(D) {
                  D.done ? i(D.value) : a(D.value).then(h, b);
                }
                m((r = r.apply(e, t || [])).next());
              });
            }, mi = function(e, t) {
              var n = { label: 0, sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1];
              }, trys: [], ops: [] }, r, a, i, l;
              return l = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
                return this;
              }), l;
              function h(m) {
                return function(D) {
                  return b([m, D]);
                };
              }
              function b(m) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; l && (l = 0, m[0] && (n = 0)), n; ) try {
                  if (r = 1, a && (i = m[0] & 2 ? a.return : m[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, m[1])).done) return i;
                  switch (a = 0, i && (m = [m[0] & 2, i.value]), m[0]) {
                    case 0:
                    case 1:
                      i = m;
                      break;
                    case 4:
                      return n.label++, { value: m[1], done: !1 };
                    case 5:
                      n.label++, a = m[1], m = [0];
                      continue;
                    case 7:
                      m = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!i || m[1] > i[0] && m[1] < i[3])) {
                        n.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && n.label < i[1]) {
                        n.label = i[1], i = m;
                        break;
                      }
                      if (i && n.label < i[2]) {
                        n.label = i[2], n.ops.push(m);
                        break;
                      }
                      i[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  m = t.call(e, n);
                } catch (D) {
                  m = [6, D], a = 0;
                } finally {
                  r = i = 0;
                }
                if (m[0] & 5) throw m[1];
                return { value: m[0] ? m[1] : void 0, done: !0 };
              }
            }, gi = (
              /** @class */
              function() {
                function e(t) {
                  var n = this;
                  this.splitChar = "", this.lastIndex = -1, this.fillEmoji = function(r, a) {
                    n.element.style.display = "none";
                    var i = decodeURIComponent(r.getAttribute("data-value")), l = window.getSelection().getRangeAt(0);
                    if (a.currentMode === "ir") {
                      var h = (0, s.a1)(l.startContainer, "data-type", "code-block-info");
                      if (h) {
                        h.textContent = p.g.ZWSP + i.trimRight(), l.selectNodeContents(h), l.collapse(!1), st(a), h.parentElement.querySelectorAll("code").forEach(function(R) {
                          R.className = "language-" + i.trimRight();
                        }), ge(h.parentElement.querySelector(".vditor-ir__preview"), a), n.recentLanguage = i.trimRight();
                        return;
                      }
                    }
                    if (a.currentMode === "wysiwyg" && l.startContainer.nodeType !== 3) {
                      var b = l.startContainer, m = void 0;
                      if (b.classList.contains("vditor-input") ? m = b : m = b.firstElementChild, m && m.classList.contains("vditor-input")) {
                        m.value = i.trimRight(), l.selectNodeContents(m), l.collapse(!1), m.dispatchEvent(new CustomEvent("input", { detail: 1 })), n.recentLanguage = i.trimRight();
                        return;
                      }
                    }
                    if (l.setStart(l.startContainer, n.lastIndex), l.deleteContents(), a.options.hint.parse ? a.currentMode === "sv" ? (0, B.oC)(a.lute.SpinVditorSVDOM(i), a) : a.currentMode === "wysiwyg" ? (0, B.oC)(a.lute.SpinVditorDOM(i), a) : (0, B.oC)(a.lute.SpinVditorIRDOM(i), a) : (0, B.oC)(i, a), n.splitChar === ":" && i.indexOf(":") > -1 && a.currentMode !== "sv" && l.insertNode(document.createTextNode(" ")), l.collapse(!1), (0, B.Hc)(l), a.currentMode === "wysiwyg") {
                      var D = (0, s.fb)(l.startContainer, "vditor-wysiwyg__block");
                      D && D.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (D.lastElementChild.innerHTML = D.firstElementChild.innerHTML, ge(D.lastElementChild, a));
                    } else if (a.currentMode === "ir") {
                      var D = (0, s.fb)(l.startContainer, "vditor-ir__marker--pre");
                      D && D.nextElementSibling.classList.contains("vditor-ir__preview") && (D.nextElementSibling.innerHTML = D.innerHTML, ge(D.nextElementSibling, a));
                    }
                    Ee(a);
                  }, this.timeId = -1, this.element = document.createElement("div"), this.element.className = "vditor-hint", this.recentLanguage = "", t.push({ key: ":" });
                }
                return e.prototype.render = function(t) {
                  var n = this;
                  if (window.getSelection().focusNode) {
                    var r, a = getSelection().getRangeAt(0);
                    r = a.startContainer.textContent.substring(0, a.startOffset) || "";
                    var i = this.getKey(r, t.options.hint.extend);
                    if (typeof i > "u")
                      this.element.style.display = "none", clearTimeout(this.timeId);
                    else if (this.splitChar === ":") {
                      var l = i === "" ? t.options.hint.emoji : t.lute.GetEmojis(), h = [];
                      Object.keys(l).forEach(function(b) {
                        b.indexOf(i.toLowerCase()) === 0 && (l[b].indexOf(".") > -1 ? h.push({
                          html: '<img src="'.concat(l[b], '" title=":').concat(b, ':"/> :').concat(b, ":"),
                          value: ":".concat(b, ":")
                        }) : h.push({
                          html: '<span class="vditor-hint__emoji">'.concat(l[b], "</span>").concat(b),
                          value: l[b]
                        }));
                      }), this.genHTML(h, i, t);
                    } else
                      t.options.hint.extend.forEach(function(b) {
                        b.key === n.splitChar && (clearTimeout(n.timeId), n.timeId = window.setTimeout(function() {
                          return hi(n, void 0, void 0, function() {
                            var m;
                            return mi(this, function(D) {
                              switch (D.label) {
                                case 0:
                                  return m = this.genHTML, [4, b.hint(i)];
                                case 1:
                                  return m.apply(this, [D.sent(), i, t]), [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        }, t.options.hint.delay));
                      });
                  }
                }, e.prototype.genHTML = function(t, n, r) {
                  var a = this;
                  if (t.length === 0) {
                    this.element.style.display = "none";
                    return;
                  }
                  var i = r[r.currentMode].element, l = (0, B.Ny)(i), h = l.left + (r.options.outline.position === "left" ? r.outline.element.offsetWidth : 0), b = l.top, m = "";
                  t.forEach(function(R, G) {
                    if (!(G > 7)) {
                      var Z = R.html;
                      if (n !== "") {
                        var K = Z.lastIndexOf(">") + 1, te = Z.substr(K), ee = te.toLowerCase().indexOf(n.toLowerCase());
                        ee > -1 && (te = te.substring(0, ee) + "<b>" + te.substring(ee, ee + n.length) + "</b>" + te.substring(ee + n.length), Z = Z.substr(0, K) + te);
                      }
                      m += '<button type="button" data-value="'.concat(encodeURIComponent(R.value), ` "
`).concat(G === 0 ? "class='vditor-hint--current'" : "", "> ").concat(Z, "</button>");
                    }
                  }), this.element.innerHTML = m;
                  var D = parseInt(document.defaultView.getComputedStyle(i, null).getPropertyValue("line-height"), 10);
                  this.element.style.top = "".concat(b + (D || 22), "px"), this.element.style.left = "".concat(h, "px"), this.element.style.display = "block", this.element.style.right = "auto", this.element.querySelectorAll("button").forEach(function(R) {
                    R.addEventListener("click", function(G) {
                      a.fillEmoji(R, r), G.preventDefault();
                    });
                  }), this.element.getBoundingClientRect().bottom > window.innerHeight && (this.element.style.top = "".concat(b - this.element.offsetHeight, "px")), this.element.getBoundingClientRect().right > window.innerWidth && (this.element.style.left = "auto", this.element.style.right = "0");
                }, e.prototype.select = function(t, n) {
                  if (this.element.querySelectorAll("button").length === 0 || this.element.style.display === "none")
                    return !1;
                  var r = this.element.querySelector(".vditor-hint--current");
                  if (t.key === "ArrowDown")
                    return t.preventDefault(), t.stopPropagation(), r.removeAttribute("class"), r.nextElementSibling ? r.nextElementSibling.className = "vditor-hint--current" : this.element.children[0].className = "vditor-hint--current", !0;
                  if (t.key === "ArrowUp") {
                    if (t.preventDefault(), t.stopPropagation(), r.removeAttribute("class"), r.previousElementSibling)
                      r.previousElementSibling.className = "vditor-hint--current";
                    else {
                      var a = this.element.children.length;
                      this.element.children[a - 1].className = "vditor-hint--current";
                    }
                    return !0;
                  } else if (!(0, o.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter" && !t.isComposing)
                    return t.preventDefault(), t.stopPropagation(), this.fillEmoji(r, n), !0;
                  return !1;
                }, e.prototype.getKey = function(t, n) {
                  var r = this;
                  this.lastIndex = -1, this.splitChar = "", n.forEach(function(m) {
                    var D = t.lastIndexOf(m.key);
                    r.lastIndex < D && (r.splitChar = m.key, r.lastIndex = D);
                  });
                  var a;
                  if (this.lastIndex === -1)
                    return a;
                  var i = t.split(this.splitChar), l = i[i.length - 1], h = 32;
                  if (i.length > 1 && l.trim() === l)
                    if (i.length === 2 && i[0] === "" && i[1].length < h)
                      a = i[1];
                    else {
                      var b = i[i.length - 2].slice(-1);
                      (0, w.X)(b) === " " && l.length < h && (a = l);
                    }
                  return a;
                }, e;
              }()
            ), vi = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1;
                  var n = document.createElement("div");
                  n.className = "vditor-ir", n.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(t.options.placeholder, `"
 contenteditable="true" spellcheck="false"></pre>`), this.element = n.firstElementChild, this.bindEvent(t), Dn(t, this.element), pr(t, this.element), On(t, this.element), Rn(t, this.element), Pn(t, this.element), Bn(t, this.element), Hn(t, this.element, this.copy), Nn(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, n) {
                  var r = getSelection().getRangeAt(0);
                  if (r.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var a = document.createElement("div");
                    a.appendChild(r.cloneContents()), t.clipboardData.setData("text/plain", n.lute.VditorIRDOM2Md(a.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("paste", function(r) {
                    fn(t, r, {
                      pasteCode: function(a) {
                        document.execCommand("insertHTML", !1, a);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    C(t, ["hint"]);
                  }), this.element.addEventListener("compositionstart", function(r) {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    (0, o.vU)() || Ue(t, getSelection().getRangeAt(0).cloneRange()), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop")) {
                      if (n.preventInput) {
                        n.preventInput = !1, st(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《" || Ue(t, getSelection().getRangeAt(0).cloneRange(), !1, r);
                    }
                  }), this.element.addEventListener("click", function(r) {
                    if (r.target.tagName === "INPUT") {
                      r.target.checked ? r.target.setAttribute("checked", "checked") : r.target.removeAttribute("checked"), n.preventInput = !0, st(t);
                      return;
                    }
                    var a = (0, B.zh)(t), i = (0, s.fb)(r.target, "vditor-ir__preview");
                    if (i || (i = (0, s.fb)(a.startContainer, "vditor-ir__preview")), i && (i.previousElementSibling.firstElementChild ? a.selectNodeContents(i.previousElementSibling.firstElementChild) : a.selectNodeContents(i.previousElementSibling), a.collapse(!0), (0, B.Hc)(a), He(t)), r.target.tagName === "IMG") {
                      var l = r.target.parentElement.querySelector(".vditor-ir__marker--link");
                      l && (a.selectNode(l), (0, B.Hc)(a));
                    }
                    var h = (0, s.a1)(r.target, "data-type", "a");
                    if (h && !h.classList.contains("vditor-ir__node--expand")) {
                      t.options.link.click ? t.options.link.click(h.querySelector(":scope > .vditor-ir__marker--link")) : t.options.link.isOpen && window.open(h.querySelector(":scope > .vditor-ir__marker--link").textContent);
                      return;
                    }
                    if (r.target.isEqualNode(n.element) && n.element.lastElementChild && a.collapsed) {
                      var b = n.element.lastElementChild.getBoundingClientRect();
                      r.y > b.top + b.height && (n.element.lastElementChild.tagName === "P" && n.element.lastElementChild.textContent.trim().replace(p.g.ZWSP, "") === "" ? (a.selectNodeContents(n.element.lastElementChild), a.collapse(!1)) : (n.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(p.g.ZWSP, "<wbr></p>")), (0, B.ib)(n.element, a)));
                    }
                    a.toString() === "" ? V(a, t) : setTimeout(function() {
                      V((0, B.zh)(t), t);
                    }), Ie(r, t), Ft(t);
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, o.yl)(r))) {
                      if (r.key === "Enter" && He(t), Ft(t), (r.key === "Backspace" || r.key === "Delete") && t.ir.element.innerHTML !== "" && t.ir.element.childNodes.length === 1 && t.ir.element.firstElementChild && t.ir.element.firstElementChild.tagName === "P" && t.ir.element.firstElementChild.childElementCount === 0 && (t.ir.element.textContent === "" || t.ir.element.textContent === `
`)) {
                        t.ir.element.innerHTML = "";
                        return;
                      }
                      var a = (0, B.zh)(t);
                      r.key === "Backspace" ? ((0, o.vU)() && a.startContainer.textContent === `
` && a.startOffset === 1 && (a.startContainer.textContent = "", V(a, t)), n.element.querySelectorAll(".language-math").forEach(function(l) {
                        var h = l.querySelector("br");
                        h && h.remove();
                      })) : r.key.indexOf("Arrow") > -1 ? ((r.key === "ArrowLeft" || r.key === "ArrowRight") && jr(t), V(a, t)) : r.keyCode === 229 && r.code === "" && r.key === "Unidentified" && V(a, t);
                      var i = (0, s.fb)(a.startContainer, "vditor-ir__preview");
                      if (i) {
                        if (r.key === "ArrowUp" || r.key === "ArrowLeft")
                          return i.previousElementSibling.firstElementChild ? a.selectNodeContents(i.previousElementSibling.firstElementChild) : a.selectNodeContents(i.previousElementSibling), a.collapse(!1), r.preventDefault(), !0;
                        if (i.tagName === "SPAN" && (r.key === "ArrowDown" || r.key === "ArrowRight"))
                          return i.parentElement.getAttribute("data-type") === "html-entity" ? (i.parentElement.insertAdjacentText("afterend", p.g.ZWSP), a.setStart(i.parentElement.nextSibling, 1)) : a.selectNodeContents(i.parentElement.lastElementChild), a.collapse(!1), r.preventDefault(), !0;
                      }
                    }
                  });
                }, e;
              }()
            ), Fr = function(e) {
              if (e.currentMode === "sv")
                return e.lute.Md2HTML(M(e));
              if (e.currentMode === "wysiwyg")
                return e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML);
              if (e.currentMode === "ir")
                return e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML);
            }, yi = A(214), Vr = A(436), bi = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-outline", this.element.innerHTML = '<div class="vditor-outline__title">'.concat(t, `</div>
<div class="vditor-outline__content"></div>`);
                }
                return e.prototype.render = function(t) {
                  var n = "";
                  return t.preview.element.style.display === "block" ? n = (0, Vr.k)(t.preview.previewElement, this.element.lastElementChild, t) : n = (0, Vr.k)(t[t.currentMode].element, this.element.lastElementChild, t), n;
                }, e.prototype.toggle = function(t, n, r) {
                  var a;
                  n === void 0 && (n = !0), r === void 0 && (r = !0);
                  var i = (a = t.toolbar.elements.outline) === null || a === void 0 ? void 0 : a.firstElementChild;
                  if (n && window.innerWidth >= p.g.MOBILE_WIDTH ? (this.element.style.display = "block", this.render(t), i == null || i.classList.add("vditor-menu--current")) : (this.element.style.display = "none", i == null || i.classList.remove("vditor-menu--current")), r && getSelection().rangeCount > 0) {
                    var l = getSelection().getRangeAt(0);
                    t[t.currentMode].element.contains(l.startContainer) && (0, B.Hc)(l);
                  }
                  le(t);
                }, e;
              }()
            ), wi = A(280), Ei = (
              /** @class */
              function() {
                function e(t) {
                  var n = this;
                  this.element = document.createElement("div"), this.element.className = "vditor-preview", this.previewElement = document.createElement("div"), this.previewElement.className = "vditor-reset", t.options.classes.preview && this.previewElement.classList.add(t.options.classes.preview), this.previewElement.style.maxWidth = t.options.preview.maxWidth + "px", this.previewElement.addEventListener("copy", function(b) {
                    if (b.target.tagName !== "TEXTAREA") {
                      var m = document.createElement("div");
                      m.className = "vditor-reset", m.appendChild(getSelection().getRangeAt(0).cloneContents()), n.copyToX(t, m, "default"), b.preventDefault();
                    }
                  }), this.previewElement.addEventListener("click", function(b) {
                    var m = (0, s.lG)(b.target, "SPAN");
                    if (m && (0, s.fb)(m, "vditor-toc")) {
                      var D = n.previewElement.querySelector("#" + m.getAttribute("data-target-id"));
                      D && (n.element.scrollTop = D.offsetTop);
                      return;
                    }
                    if (b.target.tagName === "A") {
                      t.options.link.click ? t.options.link.click(b.target) : t.options.link.isOpen && window.open(b.target.getAttribute("href")), b.preventDefault();
                      return;
                    }
                    b.target.tagName === "IMG" && (t.options.image.preview ? t.options.image.preview(b.target) : t.options.image.isPreview && (0, ie.E)(b.target, t.options.lang, t.options.theme));
                  }), this.element.appendChild(this.previewElement);
                  var r = t.options.preview.actions;
                  if (r.length !== 0) {
                    var a = document.createElement("div");
                    a.className = "vditor-preview__action";
                    for (var i = [], l = 0; l < r.length; l++) {
                      var h = r[l];
                      if (typeof h == "object") {
                        i.push('<button type="button" data-type="'.concat(h.key, '" class="').concat(h.className, '"').concat(h.tooltip ? ' aria-label="'.concat(h.tooltip, '"') : "", '">').concat(h.text, "</button>"));
                        continue;
                      }
                      switch (h) {
                        case "desktop":
                          i.push('<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>');
                          break;
                        case "tablet":
                          i.push('<button type="button" data-type="tablet">Tablet</button>');
                          break;
                        case "mobile":
                          i.push('<button type="button" data-type="mobile">Mobile/Wechat</button>');
                          break;
                        case "mp-wechat":
                          i.push('<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>');
                          break;
                        case "zhihu":
                          i.push('<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到知乎"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>');
                          break;
                      }
                    }
                    a.innerHTML = i.join(""), a.addEventListener((0, o.Le)(), function(b) {
                      var m = (0, _.S)(b.target, "BUTTON");
                      if (m) {
                        var D = m.getAttribute("data-type"), R = r.find(function(G) {
                          return (G == null ? void 0 : G.key) === D;
                        });
                        if (R) {
                          R.click(D);
                          return;
                        }
                        if (D === "mp-wechat" || D === "zhihu") {
                          n.copyToX(t, n.previewElement.cloneNode(!0), D);
                          return;
                        }
                        D === "desktop" ? n.previewElement.style.width = "auto" : D === "tablet" ? n.previewElement.style.width = "780px" : n.previewElement.style.width = "360px", n.previewElement.scrollWidth > n.previewElement.parentElement.clientWidth && (n.previewElement.style.width = "auto"), n.render(t), a.querySelectorAll("button").forEach(function(G) {
                          G.classList.remove("vditor-preview__action--current");
                        }), m.classList.add("vditor-preview__action--current");
                      }
                    }), this.element.insertBefore(a, this.previewElement);
                  }
                }
                return e.prototype.render = function(t, n) {
                  var r = this;
                  if (clearTimeout(this.mdTimeoutId), this.element.style.display === "none") {
                    this.element.getAttribute("data-type") === "renderPerformance" && t.tip.hide();
                    return;
                  }
                  if (n) {
                    this.previewElement.innerHTML = n;
                    return;
                  }
                  if (M(t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "") {
                    this.previewElement.innerHTML = "";
                    return;
                  }
                  var a = (/* @__PURE__ */ new Date()).getTime(), i = M(t);
                  this.mdTimeoutId = window.setTimeout(function() {
                    if (t.options.preview.url) {
                      var l = new XMLHttpRequest();
                      l.open("POST", t.options.preview.url), l.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), l.onreadystatechange = function() {
                        if (l.readyState === XMLHttpRequest.DONE)
                          if (l.status === 200) {
                            var b = JSON.parse(l.responseText);
                            if (b.code !== 0) {
                              t.tip.show(b.msg);
                              return;
                            }
                            t.options.preview.transform && (b.data = t.options.preview.transform(b.data)), r.previewElement.innerHTML = b.data, r.afterRender(t, a);
                          } else {
                            var m = t.lute.Md2HTML(i);
                            t.options.preview.transform && (m = t.options.preview.transform(m)), r.previewElement.innerHTML = m, r.afterRender(t, a);
                          }
                      }, l.send(JSON.stringify({ markdownText: i }));
                    } else {
                      var h = t.lute.Md2HTML(i);
                      t.options.preview.transform && (h = t.options.preview.transform(h)), r.previewElement.innerHTML = h, r.afterRender(t, a);
                    }
                  }, t.options.preview.delay);
                }, e.prototype.afterRender = function(t, n) {
                  t.options.preview.parse && t.options.preview.parse(this.element);
                  var r = (/* @__PURE__ */ new Date()).getTime() - n;
                  (/* @__PURE__ */ new Date()).getTime() - n > 2600 ? (t.tip.show(window.VditorI18n.performanceTip.replace("${x}", r.toString())), t.preview.element.setAttribute("data-type", "renderPerformance")) : t.preview.element.getAttribute("data-type") === "renderPerformance" && (t.tip.hide(), t.preview.element.removeAttribute("data-type"));
                  var a = t.preview.element.querySelector(".vditor-comment--focus");
                  a && a.classList.remove("vditor-comment--focus"), (0, W.O)(t.preview.previewElement, t.options.preview.hljs), (0, I.s)(t.options.preview.hljs, t.preview.previewElement, t.options.cdn), (0, J.i)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, ae.K)(t.preview.previewElement, t.options.cdn), (0, pe.J)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, Q.P)(t.preview.previewElement, t.options.cdn), (0, $.v)(t.preview.previewElement, t.options.cdn), (0, H.p)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, ce.P)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, de.B)(t.preview.previewElement, t.options.cdn), (0, j.Q)(t.preview.previewElement, t.options.cdn), t.options.preview.render.media.enable && (0, wi.Y)(t.preview.previewElement), t.options.customRenders.forEach(function(h) {
                    h.render(t.preview.previewElement, t);
                  });
                  var i = t.preview.element, l = t.outline.render(t);
                  l === "" && (l = "[ToC]"), i.querySelectorAll('[data-type="toc-block"]').forEach(function(h) {
                    h.innerHTML = l, (0, F.H)(h, {
                      cdn: t.options.cdn,
                      math: t.options.preview.math
                    });
                  }), (0, F.H)(t.preview.previewElement, {
                    cdn: t.options.cdn,
                    math: t.options.preview.math
                  });
                }, e.prototype.copyToX = function(t, n, r) {
                  r === void 0 && (r = "mp-wechat"), r !== "zhihu" ? n.querySelectorAll(".katex-html .base").forEach(function(i) {
                    i.style.display = "initial";
                  }) : n.querySelectorAll(".language-math").forEach(function(i) {
                    i.outerHTML = '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="'.concat(i.getAttribute("data-math"), '\\" style="display: block; margin: 0 auto; max-width: 100%;">');
                  }), n.style.backgroundColor = "#fff", n.querySelectorAll("code").forEach(function(i) {
                    i.style.backgroundImage = "none";
                  }), this.element.append(n);
                  var a = n.ownerDocument.createRange();
                  a.selectNode(n), (0, B.Hc)(a), document.execCommand("copy"), n.remove(), t.tip.show(["zhihu", "mp-wechat"].includes(r) ? "已复制，可到".concat(r === "zhihu" ? "知乎" : "微信公众号平台", "进行粘贴") : "已复制到剪切板");
                }, e;
              }()
            ), Si = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-resize vditor-resize--".concat(t.options.resize.position), this.element.innerHTML = '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>', this.bindEvent(t);
                }
                return e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("mousedown", function(r) {
                    var a = document, i = r.clientY, l = t.element.offsetHeight, h = 63 + t.element.querySelector(".vditor-toolbar").clientHeight;
                    a.ondragstart = function() {
                      return !1;
                    }, window.captureEvents && window.captureEvents(), n.element.classList.add("vditor-resize--selected"), a.onmousemove = function(b) {
                      t.options.resize.position === "top" ? t.element.style.height = Math.max(h, l + (i - b.clientY)) + "px" : t.element.style.height = Math.max(h, l + (b.clientY - i)) + "px", t.options.typewriterMode && (t.sv.element.style.paddingBottom = t.sv.element.parentElement.offsetHeight / 2 + "px");
                    }, a.onmouseup = function() {
                      t.options.resize.after && t.options.resize.after(t.element.offsetHeight - l), window.captureEvents && window.captureEvents(), a.onmousemove = null, a.onmouseup = null, a.ondragstart = null, a.onselectstart = null, a.onselect = null, n.element.classList.remove("vditor-resize--selected");
                    };
                  });
                }, e;
              }()
            ), Ci = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1, this.element = document.createElement("pre"), this.element.className = "vditor-sv vditor-reset", this.element.setAttribute("placeholder", t.options.placeholder), this.element.setAttribute("contenteditable", "true"), this.element.setAttribute("spellcheck", "false"), this.bindEvent(t), Dn(t, this.element), On(t, this.element), Rn(t, this.element), Pn(t, this.element), Bn(t, this.element), Hn(t, this.element, this.copy), Nn(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, n) {
                  t.stopPropagation(), t.preventDefault(), t.clipboardData.setData("text/plain", Wt(n[n.currentMode].element));
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("paste", function(r) {
                    fn(t, r, {
                      pasteCode: function(a) {
                        document.execCommand("insertHTML", !1, a);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    if (t.preview.element.style.display === "block") {
                      var r = n.element.scrollTop, a = n.element.clientHeight, i = n.element.scrollHeight - parseFloat(n.element.style.paddingBottom || "0"), l = t.preview.element;
                      r / a > 0.5 ? l.scrollTop = (r + a) * l.scrollHeight / i - a : l.scrollTop = r * l.scrollHeight / i;
                    }
                  }), this.element.addEventListener("compositionstart", function(r) {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    (0, o.vU)() || Ce(t, r), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop") && !(n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《")) {
                      if (n.preventInput) {
                        n.preventInput = !1, Pe(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      Ce(t, r);
                    }
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, o.yl)(r))) {
                      if ((r.key === "Backspace" || r.key === "Delete") && t.sv.element.innerHTML !== "" && t.sv.element.childNodes.length === 1 && t.sv.element.firstElementChild && t.sv.element.firstElementChild.tagName === "DIV" && t.sv.element.firstElementChild.childElementCount === 2 && (t.sv.element.firstElementChild.textContent === "" || t.sv.element.textContent === `
`)) {
                        t.sv.element.innerHTML = "";
                        return;
                      }
                      r.key === "Enter" && He(t);
                    }
                  });
                }, e;
              }()
            ), Ur = (
              /** @class */
              function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-tip";
                }
                return e.prototype.show = function(t, n) {
                  var r = this;
                  n === void 0 && (n = 6e3), this.element.className = "vditor-tip vditor-tip--show", n === 0 ? (this.element.innerHTML = '<div class="vditor-tip__content">'.concat(t, `
<div class="vditor-tip__close">X</div></div>`), this.element.querySelector(".vditor-tip__close").addEventListener("click", function() {
                    r.hide();
                  })) : (this.element.innerHTML = '<div class="vditor-tip__content">'.concat(t, "</div>"), setTimeout(function() {
                    r.hide();
                  }, n)), this.element.removeAttribute("style"), setTimeout(function() {
                    var a = r.element.getBoundingClientRect();
                    a.top < 46 && (r.element.style.position = "fixed", r.element.style.top = "46px");
                  }, 150);
                }, e.prototype.hide = function() {
                  this.element.className = "vditor-messageElementtip", this.element.innerHTML = "";
                }, e;
              }()
            ), qn = function(e, t) {
              if (t.options.preview.mode !== e) {
                switch (t.options.preview.mode = e, e) {
                  case "both":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "block", t.preview.render(t), d(t.toolbar.elements, ["both"]);
                    break;
                  case "editor":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "none", v(t.toolbar.elements, ["both"]);
                    break;
                }
                t.devtools && t.devtools.renderEchart(t);
              }
            }, ki = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Ti = (
              /** @class */
              function(e) {
                ki(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return n.options.preview.mode === "both" && a.element.children[0].classList.add("vditor-menu--current"), a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    var l = a.element.firstElementChild;
                    l.classList.contains(p.g.CLASS_MENU_DISABLED) || (i.preventDefault(), n.currentMode === "sv" && (n.options.preview.mode === "both" ? qn("editor", n) : qn("both", n)));
                  }), a;
                }
                return t;
              }(Oe)
            ), Li = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__br";
                }
                return e;
              }()
            ), Wr = A(580), Ai = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Mi = (
              /** @class */
              function(e) {
                Ai(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = a.element.children[0], l = document.createElement("div");
                  l.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow");
                  var h = "";
                  return p.g.CODE_THEME.forEach(function(b) {
                    h += "<button>".concat(b, "</button>");
                  }), l.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(h, "</div>"), l.addEventListener((0, o.Le)(), function(b) {
                    b.target.tagName === "BUTTON" && (C(n, ["subToolbar"]), n.options.preview.hljs.style = b.target.textContent, (0, Wr.Y)(b.target.textContent, n.options.cdn), b.preventDefault(), b.stopPropagation());
                  }), a.element.appendChild(l), S(n, l, i, r.level), a;
                }
                return t;
              }(Oe)
            ), _i = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), xi = (
              /** @class */
              function(e) {
                _i(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = a.element.children[0], l = document.createElement("div");
                  l.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow");
                  var h = "";
                  return Object.keys(n.options.preview.theme.list).forEach(function(b) {
                    h += '<button data-type="'.concat(b, '">').concat(n.options.preview.theme.list[b], "</button>");
                  }), l.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(h, "</div>"), l.addEventListener((0, o.Le)(), function(b) {
                    b.target.tagName === "BUTTON" && (C(n, ["subToolbar"]), n.options.preview.theme.current = b.target.getAttribute("data-type"), (0, U.Z)(n.options.preview.theme.current, n.options.preview.theme.path), b.preventDefault(), b.stopPropagation());
                  }), a.element.appendChild(l), S(n, l, i, r.level), a;
                }
                return t;
              }(Oe)
            ), Di = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("span"), this.element.className = "vditor-counter vditor-tooltipped vditor-tooltipped__nw", this.render(t, "");
                }
                return e.prototype.render = function(t, n) {
                  var r = n.endsWith(`
`) ? n.length - 1 : n.length;
                  if (t.options.counter.type === "text" && t[t.currentMode]) {
                    var a = t[t.currentMode].element.cloneNode(!0);
                    a.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(i) {
                      i.remove();
                    }), r = a.textContent.length;
                  }
                  typeof t.options.counter.max == "number" ? (r > t.options.counter.max ? this.element.className = "vditor-counter vditor-counter--error" : this.element.className = "vditor-counter", this.element.innerHTML = "".concat(r, "/").concat(t.options.counter.max)) : this.element.innerHTML = "".concat(r), this.element.setAttribute("aria-label", t.options.counter.type), t.options.counter.after && t.options.counter.after(r, {
                    enable: t.options.counter.enable,
                    max: t.options.counter.max,
                    type: t.options.counter.type
                  });
                }, e;
              }()
            ), Oi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Bi = (
              /** @class */
              function(e) {
                Oi(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].innerHTML = r.icon, a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), !i.currentTarget.classList.contains(p.g.CLASS_MENU_DISABLED) && r.click(i, n);
                  }), a;
                }
                return t;
              }(Oe)
            ), Hi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Ni = (
              /** @class */
              function(e) {
                Hi(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.firstElementChild.addEventListener((0, o.Le)(), function(i) {
                    var l = a.element.firstElementChild;
                    l.classList.contains(p.g.CLASS_MENU_DISABLED) || (i.preventDefault(), l.classList.contains("vditor-menu--current") ? (l.classList.remove("vditor-menu--current"), n.devtools.element.style.display = "none", le(n)) : (l.classList.add("vditor-menu--current"), n.devtools.element.style.display = "block", le(n), n.devtools.renderEchart(n)));
                  }), a;
                }
                return t;
              }(Oe)
            ), Ri = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__divider";
                }
                return e;
              }()
            ), Pi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Ii = (
              /** @class */
              function(e) {
                Pi(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = document.createElement("div");
                  i.className = "vditor-panel vditor-panel--arrow";
                  var l = "";
                  return Object.keys(n.options.hint.emoji).forEach(function(h) {
                    var b = n.options.hint.emoji[h];
                    b.indexOf(".") > -1 ? l += '<button data-value=":'.concat(h, ': " data-key=":').concat(h, `:"><img
data-value=":`).concat(h, ': " data-key=":').concat(h, ':" class="vditor-emojis__icon" src="').concat(b, '"/></button>') : l += '<button data-value="'.concat(b, ` "
 data-key="`).concat(h, '"><span class="vditor-emojis__icon">').concat(b, "</span></button>");
                  }), i.innerHTML = '<div class="vditor-emojis" style="max-height: '.concat(n.options.height === "auto" ? "auto" : n.options.height - 80, 'px">').concat(l, `</div><div class="vditor-emojis__tail">
    <span class="vditor-emojis__tip"></span><span>`).concat(n.options.hint.emojiTail || "", `</span>
</div>`), a.element.appendChild(i), S(n, i, a.element.firstElementChild, r.level), a.bindEvent(n), a;
                }
                return t.prototype.bindEvent = function(n) {
                  var r = this;
                  this.element.lastElementChild.addEventListener((0, o.Le)(), function(a) {
                    var i = (0, _.S)(a.target, "BUTTON");
                    if (i) {
                      a.preventDefault();
                      var l = i.getAttribute("data-value"), h = (0, B.zh)(n), b = l;
                      if (n.currentMode === "wysiwyg" ? b = n.lute.SpinVditorDOM(l) : n.currentMode === "ir" && (b = n.lute.SpinVditorIRDOM(l)), l.indexOf(":") > -1 && n.currentMode !== "sv") {
                        var m = document.createElement("div");
                        m.innerHTML = b, b = m.firstElementChild.firstElementChild.outerHTML + " ", (0, B.oC)(b, n);
                      } else
                        h.extractContents(), h.insertNode(document.createTextNode(l)), (0, s.F9)(h.startContainer) || Mn(n, h);
                      h.collapse(!1), (0, B.Hc)(h), r.element.lastElementChild.style.display = "none", Ee(n);
                    }
                  }), this.element.lastElementChild.addEventListener("mouseover", function(a) {
                    var i = (0, _.S)(a.target, "BUTTON");
                    i && (r.element.querySelector(".vditor-emojis__tip").innerHTML = i.getAttribute("data-key"));
                  });
                }, t;
              }(Oe)
            ), Kr = function(e, t, n) {
              var r = document.createElement("a");
              "download" in r ? (r.download = n, r.style.display = "none", r.href = URL.createObjectURL(new Blob([t])), document.body.appendChild(r), r.click(), r.remove()) : e.tip.show(window.VditorI18n.downloadTip, 0);
            }, ji = function(e) {
              var t = M(e);
              Kr(e, t, t.substr(0, 10) + ".md");
            }, Fi = function(e) {
              e.tip.show(window.VditorI18n.generate, 3800);
              var t = document.querySelector("#vditorExportIframe");
              t.contentDocument.open(), t.contentDocument.write('<link rel="stylesheet" href="'.concat(e.options.cdn, `/dist/index.css"/>
<script src="`).concat(e.options.cdn, `/dist/method.min.js"><\/script>
<div id="preview" style="width: 800px"></div>
<script>
window.addEventListener("message", (e) => {
  if(!e.data) {
    return;
  }
  Vditor.preview(document.getElementById('preview'), e.data, {
    cdn: "`).concat(e.options.cdn, `",
    markdown: {
      theme: `).concat(JSON.stringify(e.options.preview.theme), `
    },
    hljs: {
      style: "`).concat(e.options.preview.hljs.style, `"
    }
  });
  setTimeout(() => {
        window.print();
    }, 3600);
}, false);
<\/script>`)), t.contentDocument.close(), setTimeout(function() {
                t.contentWindow.postMessage(M(e), "*");
              }, 200);
            }, Vi = function(e) {
              var t = Fr(e), n = '<html><head><link rel="stylesheet" type="text/css" href="'.concat(e.options.cdn, `/dist/index.css"/>
<script src="`).concat(e.options.cdn, "/dist/js/i18n/").concat(e.options.lang, `.js"><\/script>
<script src="`).concat(e.options.cdn, `/dist/method.min.js"><\/script></head>
<body><div class="vditor-reset" id="preview">`).concat(t, `</div>
<script>
    const previewElement = document.getElementById('preview')
    Vditor.setContentTheme('`).concat(e.options.preview.theme.current, "', '").concat(e.options.preview.theme.path, `');
    Vditor.codeRender(previewElement);
    Vditor.highlightRender(`).concat(JSON.stringify(e.options.preview.hljs), ", previewElement, '").concat(e.options.cdn, `');
    Vditor.mathRender(previewElement, {
        cdn: '`).concat(e.options.cdn, `',
        math: `).concat(JSON.stringify(e.options.preview.math), `,
    });
    Vditor.mermaidRender(previewElement, '`).concat(e.options.cdn, "', '").concat(e.options.theme, `');
    Vditor.SMILESRender(previewElement, '`).concat(e.options.cdn, "', '").concat(e.options.theme, `');
    Vditor.markmapRender(previewElement, '`).concat(e.options.cdn, `');
    Vditor.flowchartRender(previewElement, '`).concat(e.options.cdn, `');
    Vditor.graphvizRender(previewElement, '`).concat(e.options.cdn, `');
    Vditor.chartRender(previewElement, '`).concat(e.options.cdn, "', '").concat(e.options.theme, `');
    Vditor.mindmapRender(previewElement, '`).concat(e.options.cdn, "', '").concat(e.options.theme, `');
    Vditor.abcRender(previewElement, '`).concat(e.options.cdn, `');
    `).concat(e.options.preview.render.media.enable ? "Vditor.mediaRender(previewElement);" : "", `
    Vditor.speechRender(previewElement);
<\/script>
<script src="`).concat(e.options.cdn, "/dist/js/icons/").concat(e.options.icon, '.js"><\/script></body></html>');
              Kr(e, n, t.substr(0, 10) + ".html");
            }, Ui = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Wi = (
              /** @class */
              function(e) {
                Ui(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = a.element.children[0], l = document.createElement("div");
                  return l.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow"), l.innerHTML = `<button data-type="markdown">Markdown</button>
<button data-type="pdf">PDF</button>
<button data-type="html">HTML</button>`, l.addEventListener((0, o.Le)(), function(h) {
                    var b = h.target;
                    if (b.tagName === "BUTTON") {
                      switch (b.getAttribute("data-type")) {
                        case "markdown":
                          ji(n);
                          break;
                        case "pdf":
                          Fi(n);
                          break;
                        case "html":
                          Vi(n);
                          break;
                      }
                      C(n, ["subToolbar"]), h.preventDefault(), h.stopPropagation();
                    }
                  }), a.element.appendChild(l), S(n, l, i, r.level), a;
                }
                return t;
              }(Oe)
            ), Ki = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), qi = (
              /** @class */
              function(e) {
                Ki(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a._bindEvent(n, r), a;
                }
                return t.prototype._bindEvent = function(n, r) {
                  this.element.children[0].addEventListener((0, o.Le)(), function(a) {
                    a.preventDefault(), n.element.className.includes("vditor--fullscreen") ? (r.level || (this.innerHTML = r.icon), n.element.style.zIndex = "", document.body.style.overflow = "", n.element.classList.remove("vditor--fullscreen"), Object.keys(n.toolbar.elements).forEach(function(i) {
                      var l = n.toolbar.elements[i].firstChild;
                      l && (l.className = l.className.replace("__s", "__n"), n.options.toolbar.forEach(function(h) {
                        typeof h != "string" && h.tipPosition && h.name === l.dataset.type && (l.className = "vditor-tooltipped vditor-tooltipped__".concat(h.tipPosition));
                      }));
                    }), n.counter && (n.counter.element.className = n.counter.element.className.replace("__s", "__n"))) : (r.level || (this.innerHTML = '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'), n.element.style.zIndex = n.options.fullscreen.index.toString(), document.body.style.overflow = "hidden", n.element.classList.add("vditor--fullscreen"), Object.keys(n.toolbar.elements).forEach(function(i) {
                      var l = n.toolbar.elements[i].firstChild;
                      l && (l.className = l.className.replace("__n", "__s"));
                    }), n.counter && (n.counter.element.className = n.counter.element.className.replace("__n", "__s"))), n.devtools && n.devtools.renderEchart(n), r.click && r.click(a, n), le(n), xe(n);
                  });
                }, t;
              }(Oe)
            ), zi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Gi = (
              /** @class */
              function(e) {
                zi(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = document.createElement("div");
                  return i.className = "vditor-hint vditor-panel--arrow", i.innerHTML = '<button data-tag="h1" data-value="# ">'.concat(window.VditorI18n.heading1, " ").concat((0, o.ns)("&lt;⌥⌘1>"), `</button>
<button data-tag="h2" data-value="## ">`).concat(window.VditorI18n.heading2, " &lt;").concat((0, o.ns)("⌥⌘2"), `></button>
<button data-tag="h3" data-value="### ">`).concat(window.VditorI18n.heading3, " &lt;").concat((0, o.ns)("⌥⌘3"), `></button>
<button data-tag="h4" data-value="#### ">`).concat(window.VditorI18n.heading4, " &lt;").concat((0, o.ns)("⌥⌘4"), `></button>
<button data-tag="h5" data-value="##### ">`).concat(window.VditorI18n.heading5, " &lt;").concat((0, o.ns)("⌥⌘5"), `></button>
<button data-tag="h6" data-value="###### ">`).concat(window.VditorI18n.heading6, " &lt;").concat((0, o.ns)("⌥⌘6"), "></button>"), a.element.appendChild(i), a._bindEvent(n, i), a;
                }
                return t.prototype._bindEvent = function(n, r) {
                  var a = this.element.children[0];
                  a.addEventListener((0, o.Le)(), function(l) {
                    l.preventDefault(), clearTimeout(n.wysiwyg.afterRenderTimeoutId), clearTimeout(n.ir.processTimeoutId), clearTimeout(n.sv.processTimeoutId), !a.classList.contains(p.g.CLASS_MENU_DISABLED) && (a.blur(), a.classList.contains("vditor-menu--current") ? (n.currentMode === "wysiwyg" ? (_n(n), Ae(n)) : n.currentMode === "ir" && zt(n, ""), a.classList.remove("vditor-menu--current")) : (C(n, ["subToolbar"]), r.style.display = "block"));
                  });
                  for (var i = 0; i < 6; i++)
                    r.children.item(i).addEventListener((0, o.Le)(), function(l) {
                      l.preventDefault(), n.currentMode === "wysiwyg" ? (an(n, l.target.getAttribute("data-tag")), Ae(n), a.classList.add("vditor-menu--current")) : n.currentMode === "ir" ? (zt(n, l.target.getAttribute("data-value")), a.classList.add("vditor-menu--current")) : mr(n, l.target.getAttribute("data-value")), r.style.display = "none";
                    });
                }, t;
              }(Oe)
            ), $i = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Zi = (
              /** @class */
              function(e) {
                $i(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), n.tip.show(`<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">
<div style="margin-top: 14px;flex: 1">
    <div>Markdown 使用指南</div>
    <ul style="list-style: none">
        <li><a href="https://ld246.com/article/1583308420519" target="_blank">语法速查手册</a></li>
        <li><a href="https://ld246.com/article/1583129520165" target="_blank">基础语法</a></li>
        <li><a href="https://ld246.com/article/1583305480675" target="_blank">扩展语法</a></li>
        <li><a href="https://ld246.com/article/1582778815353" target="_blank">键盘快捷键</a></li>
    </ul>
</div>
<div style="margin-top: 14px;flex: 1">
    <div>Vditor 支持</div>
    <ul style="list-style: none">
        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>
        <li><a href="https://ld246.com/tag/vditor" target="_blank">官方讨论区</a></li>
        <li><a href="https://ld246.com/article/1549638745630" target="_blank">开发手册</a></li>
        <li><a href="https://ld246.com/guide/markdown" target="_blank">演示地址</a></li>
    </ul>
</div></div>`, 0);
                  }), a;
                }
                return t;
              }(Oe)
            ), Ji = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Xi = (
              /** @class */
              function(e) {
                Ji(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    if (i.preventDefault(), !(a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) || n.currentMode === "sv")) {
                      var l = (0, B.zh)(n), h = (0, s.lG)(l.startContainer, "LI");
                      h && kr(n, h, l);
                    }
                  }), a;
                }
                return t;
              }(Oe)
            ), Yi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Qi = (
              /** @class */
              function(e) {
                Yi(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), n.tip.show(`<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">
<p style="text-align: center;margin: 14px 0">
    <em>下一代的 Markdown 编辑器，为未来而构建</em>
</p>
<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">
    <img src="https://unpkg.com/vditor/dist/images/logo.png" style="margin: 0 auto;height: 68px"/>
    <div>&nbsp;&nbsp;</div>
    <div style="flex: 1;min-width: 250px">
        Vditor 是一款浏览器端的 Markdown 编辑器，支持所见即所得、即时渲染（类似 Typora）和分屏预览模式。
        它使用 TypeScript 实现，支持原生 JavaScript 以及 Vue、React、Angular 和 Svelte 等框架。
    </div>
</div>
<div style="display: flex;flex-wrap: wrap;">
    <ul style="list-style: none;flex: 1;min-width:148px">
        <li>
        项目地址：<a href="https://b3log.org/vditor" target="_blank">b3log.org/vditor</a>
        </li>
        <li>
        开源协议：MIT
        </li>
    </ul>
    <ul style="list-style: none;margin-right: 18px">
        <li>
        组件版本：Vditor v`.concat(p.H, " / Lute v").concat(Lute.Version, `
        </li>
        <li>
        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>
        </li>
    </ul>
</div>
</div>`), 0);
                  }), a;
                }
                return t;
              }(Oe)
            ), eo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), to = (
              /** @class */
              function(e) {
                eo(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), !(a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) || n.currentMode === "sv") && Kt(n, "afterend");
                  }), a;
                }
                return t;
              }(Oe)
            ), no = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), ro = (
              /** @class */
              function(e) {
                no(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), !(a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) || n.currentMode === "sv") && Kt(n, "beforebegin");
                  }), a;
                }
                return t;
              }(Oe)
            ), ao = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), io = (
              /** @class */
              function(e) {
                ao(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    if (i.preventDefault(), !(a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) || n.currentMode === "sv")) {
                      var l = (0, B.zh)(n), h = (0, s.lG)(l.startContainer, "LI");
                      h && Fn(n, h, l, h.parentElement);
                    }
                  }), a;
                }
                return t;
              }(Oe)
            ), oo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), so = (
              /** @class */
              function(e) {
                oo(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return n.options.outline && a.element.firstElementChild.classList.add("vditor-menu--current"), a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault();
                    var l = n.toolbar.elements.outline.firstElementChild;
                    l.classList.contains(p.g.CLASS_MENU_DISABLED) || (n.options.outline.enable = !a.element.firstElementChild.classList.contains("vditor-menu--current"), n.outline.toggle(n, n.options.outline.enable));
                  }), a;
                }
                return t;
              }(Oe)
            ), lo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), co = (
              /** @class */
              function(e) {
                lo(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a._bindEvent(n), a;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this;
                  this.element.children[0].addEventListener((0, o.Le)(), function(a) {
                    a.preventDefault();
                    var i = r.element.firstElementChild;
                    if (!i.classList.contains(p.g.CLASS_MENU_DISABLED)) {
                      var l = p.g.EDIT_TOOLBARS.concat(["both", "edit-mode", "devtools"]);
                      i.classList.contains("vditor-menu--current") ? (i.classList.remove("vditor-menu--current"), n.currentMode === "sv" ? (n.sv.element.style.display = "block", n.options.preview.mode === "both" ? n.preview.element.style.display = "block" : n.preview.element.style.display = "none") : (n[n.currentMode].element.parentElement.style.display = "block", n.preview.element.style.display = "none"), y(n.toolbar.elements, l), n.outline.render(n)) : (f(n.toolbar.elements, l), n.preview.element.style.display = "block", n.currentMode === "sv" ? n.sv.element.style.display = "none" : n[n.currentMode].element.parentElement.style.display = "none", n.preview.render(n), i.classList.add("vditor-menu--current"), C(n, ["subToolbar", "hint", "popover"]), setTimeout(function() {
                        n.outline.render(n);
                      }, n.options.preview.delay + 10)), le(n);
                    }
                  });
                }, t;
              }(Oe)
            ), uo = (
              /** @class */
              function() {
                function e(t) {
                  this.SAMPLE_RATE = 5e3, this.isRecording = !1, this.readyFlag = !1, this.leftChannel = [], this.rightChannel = [], this.recordingLength = 0;
                  var n;
                  if (typeof AudioContext < "u")
                    n = new AudioContext();
                  else if (webkitAudioContext)
                    n = new webkitAudioContext();
                  else
                    return;
                  this.DEFAULT_SAMPLE_RATE = n.sampleRate;
                  var r = n.createGain(), a = n.createMediaStreamSource(t);
                  a.connect(r), this.recorder = n.createScriptProcessor(2048, 2, 1), this.recorder.onaudioprocess = null, r.connect(this.recorder), this.recorder.connect(n.destination), this.readyFlag = !0;
                }
                return e.prototype.cloneChannelData = function(t, n) {
                  this.leftChannel.push(new Float32Array(t)), this.rightChannel.push(new Float32Array(n)), this.recordingLength += 2048;
                }, e.prototype.startRecordingNewWavFile = function() {
                  this.readyFlag && (this.isRecording = !0, this.leftChannel.length = this.rightChannel.length = 0, this.recordingLength = 0);
                }, e.prototype.stopRecording = function() {
                  this.isRecording = !1;
                }, e.prototype.buildWavFileBlob = function() {
                  for (var t = this.mergeBuffers(this.leftChannel), n = this.mergeBuffers(this.rightChannel), r = new Float32Array(t.length), a = 0; a < t.length; ++a)
                    r[a] = 0.5 * (t[a] + n[a]);
                  this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE && (r = this.downSampleBuffer(r, this.SAMPLE_RATE));
                  var i = 44 + r.length * 2, l = new ArrayBuffer(i), h = new DataView(l);
                  this.writeUTFBytes(h, 0, "RIFF"), h.setUint32(4, i, !0), this.writeUTFBytes(h, 8, "WAVE"), this.writeUTFBytes(h, 12, "fmt "), h.setUint32(16, 16, !0), h.setUint16(20, 1, !0), h.setUint16(22, 1, !0), h.setUint32(24, this.SAMPLE_RATE, !0), h.setUint32(28, this.SAMPLE_RATE * 2, !0), h.setUint16(32, 2, !0), h.setUint16(34, 16, !0);
                  var b = r.length * 2;
                  this.writeUTFBytes(h, 36, "data"), h.setUint32(40, b, !0);
                  for (var m = r.length, D = 44, R = 1, G = 0; G < m; G++)
                    h.setInt16(D, r[G] * (32767 * R), !0), D += 2;
                  return new Blob([h], { type: "audio/wav" });
                }, e.prototype.downSampleBuffer = function(t, n) {
                  if (n === this.DEFAULT_SAMPLE_RATE || n > this.DEFAULT_SAMPLE_RATE)
                    return t;
                  for (var r = this.DEFAULT_SAMPLE_RATE / n, a = Math.round(t.length / r), i = new Float32Array(a), l = 0, h = 0; l < i.length; ) {
                    for (var b = Math.round((l + 1) * r), m = 0, D = 0, R = h; R < b && R < t.length; R++)
                      m += t[R], D++;
                    i[l] = m / D, l++, h = b;
                  }
                  return i;
                }, e.prototype.mergeBuffers = function(t) {
                  for (var n = new Float32Array(this.recordingLength), r = 0, a = t.length, i = 0; i < a; ++i) {
                    var l = t[i];
                    n.set(l, r), r += l.length;
                  }
                  return n;
                }, e.prototype.writeUTFBytes = function(t, n, r) {
                  for (var a = r.length, i = 0; i < a; i++)
                    t.setUint8(n + i, r.charCodeAt(i));
                }, e;
              }()
            ), fo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), po = (
              /** @class */
              function(e) {
                fo(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return a._bindEvent(n), a;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this, a;
                  this.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    if (i.preventDefault(), !r.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED)) {
                      var l = n[n.currentMode].element;
                      if (!a) {
                        navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function(b) {
                          a = new uo(b), a.recorder.onaudioprocess = function(m) {
                            if (a.isRecording) {
                              var D = m.inputBuffer.getChannelData(0), R = m.inputBuffer.getChannelData(1);
                              a.cloneChannelData(D, R);
                            }
                          }, a.startRecordingNewWavFile(), n.tip.show(window.VditorI18n.recording), l.setAttribute("contenteditable", "false"), r.element.children[0].classList.add("vditor-menu--current");
                        }).catch(function() {
                          n.tip.show(window.VditorI18n["record-tip"]);
                        });
                        return;
                      }
                      if (a.isRecording) {
                        a.stopRecording(), n.tip.hide();
                        var h = new File([a.buildWavFileBlob()], "record".concat((/* @__PURE__ */ new Date()).getTime(), ".wav"), { type: "video/webm" });
                        jn(n, [h]), r.element.children[0].classList.remove("vditor-menu--current");
                      } else
                        n.tip.show(window.VditorI18n.recording), l.setAttribute("contenteditable", "false"), a.startRecordingNewWavFile(), r.element.children[0].classList.add("vditor-menu--current");
                    }
                  });
                }, t;
              }(Oe)
            ), ho = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), mo = (
              /** @class */
              function(e) {
                ho(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return f({ redo: a.element }, ["redo"]), a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), !a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) && n.undo.redo(n);
                  }), a;
                }
                return t;
              }(Oe)
            ), go = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), vo = (
              /** @class */
              function(e) {
                go(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this;
                  return f({ undo: a.element }, ["undo"]), a.element.children[0].addEventListener((0, o.Le)(), function(i) {
                    i.preventDefault(), !a.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED) && n.undo.undo(n);
                  }), a;
                }
                return t;
              }(Oe)
            ), yo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), bo = (
              /** @class */
              function(e) {
                yo(t, e);
                function t(n, r) {
                  var a = e.call(this, n, r) || this, i = '<input type="file"';
                  return n.options.upload.multiple && (i += ' multiple="multiple"'), n.options.upload.accept && (i += ' accept="'.concat(n.options.upload.accept, '"')), a.element.children[0].innerHTML = "".concat(r.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>').concat(i, ">"), a._bindEvent(n), a;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this;
                  this.element.children[0].addEventListener((0, o.Le)(), function(a) {
                    if (r.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED)) {
                      a.stopPropagation(), a.preventDefault();
                      return;
                    }
                  }), this.element.querySelector("input").addEventListener("change", function(a) {
                    if (r.element.firstElementChild.classList.contains(p.g.CLASS_MENU_DISABLED)) {
                      a.stopPropagation(), a.preventDefault();
                      return;
                    }
                    a.target.files.length !== 0 && jn(n, a.target.files, a.target);
                  });
                }, t;
              }(Oe)
            ), wo = (
              /** @class */
              function() {
                function e(t) {
                  var n = this, r = t.options;
                  this.elements = {}, this.element = document.createElement("div"), this.element.className = "vditor-toolbar", r.toolbar.forEach(function(a, i) {
                    var l = n.genItem(t, a, i);
                    if (n.element.appendChild(l), a.toolbar) {
                      var h = document.createElement("div");
                      h.className = "vditor-hint vditor-panel--arrow", h.addEventListener((0, o.Le)(), function(b) {
                        h.style.display = "none";
                      }), a.toolbar.forEach(function(b, m) {
                        b.level = 2, h.appendChild(n.genItem(t, b, i + m));
                      }), l.appendChild(h), S(t, h, l.children[0]);
                    }
                  }), t.options.toolbarConfig.hide && this.element.classList.add("vditor-toolbar--hide"), t.options.toolbarConfig.pin && this.element.classList.add("vditor-toolbar--pin"), t.options.counter.enable && (t.counter = new Di(t), this.element.appendChild(t.counter.element));
                }
                return e.prototype.updateConfig = function(t, n) {
                  t.options.toolbarConfig = Object.assign({
                    hide: !1,
                    pin: !1
                  }, n), t.options.toolbarConfig.hide ? this.element.classList.add("vditor-toolbar--hide") : this.element.classList.remove("vditor-toolbar--hide"), t.options.toolbarConfig.pin ? this.element.classList.add("vditor-toolbar--pin") : this.element.classList.remove("vditor-toolbar--pin");
                }, e.prototype.genItem = function(t, n, r) {
                  var a;
                  switch (n.name) {
                    case "bold":
                    case "italic":
                    case "more":
                    case "strike":
                    case "line":
                    case "quote":
                    case "list":
                    case "ordered-list":
                    case "check":
                    case "code":
                    case "inline-code":
                    case "link":
                    case "table":
                      a = new Oe(t, n);
                      break;
                    case "emoji":
                      a = new Ii(t, n);
                      break;
                    case "headings":
                      a = new Gi(t, n);
                      break;
                    case "|":
                      a = new Ri();
                      break;
                    case "br":
                      a = new Li();
                      break;
                    case "undo":
                      a = new vo(t, n);
                      break;
                    case "redo":
                      a = new mo(t, n);
                      break;
                    case "help":
                      a = new Zi(t, n);
                      break;
                    case "both":
                      a = new Ti(t, n);
                      break;
                    case "preview":
                      a = new co(t, n);
                      break;
                    case "fullscreen":
                      a = new qi(t, n);
                      break;
                    case "upload":
                      a = new bo(t, n);
                      break;
                    case "record":
                      a = new po(t, n);
                      break;
                    case "info":
                      a = new Qi(t, n);
                      break;
                    case "edit-mode":
                      a = new ti(t, n);
                      break;
                    case "devtools":
                      a = new Ni(t, n);
                      break;
                    case "outdent":
                      a = new io(t, n);
                      break;
                    case "indent":
                      a = new Xi(t, n);
                      break;
                    case "outline":
                      a = new so(t, n);
                      break;
                    case "insert-after":
                      a = new to(t, n);
                      break;
                    case "insert-before":
                      a = new ro(t, n);
                      break;
                    case "code-theme":
                      a = new Mi(t, n);
                      break;
                    case "content-theme":
                      a = new xi(t, n);
                      break;
                    case "export":
                      a = new Wi(t, n);
                      break;
                    default:
                      a = new Bi(t, n);
                      break;
                  }
                  if (a) {
                    var i = n.name;
                    return (i === "br" || i === "|") && (i = i + r), this.elements[i] = a.element, a.element;
                  }
                }, e;
              }()
            ), Eo = A(173), So = (
              /** @class */
              function() {
                function e() {
                  this.stackSize = 50, this.resetStack(), this.dmp = new Eo();
                }
                return e.prototype.clearStack = function(t) {
                  this.resetStack(), this.resetIcon(t);
                }, e.prototype.resetIcon = function(t) {
                  t.toolbar && (this[t.currentMode].undoStack.length > 1 ? y(t.toolbar.elements, ["undo"]) : f(t.toolbar.elements, ["undo"]), this[t.currentMode].redoStack.length !== 0 ? y(t.toolbar.elements, ["redo"]) : f(t.toolbar.elements, ["redo"]));
                }, e.prototype.undo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false" && !(this[t.currentMode].undoStack.length < 2)) {
                    var n = this[t.currentMode].undoStack.pop();
                    n && (this[t.currentMode].redoStack.push(n), this.renderDiff(n, t), this[t.currentMode].hasUndo = !0, C(t, ["hint"]));
                  }
                }, e.prototype.redo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false") {
                    var n = this[t.currentMode].redoStack.pop();
                    n && (this[t.currentMode].undoStack.push(n), this.renderDiff(n, t, !0));
                  }
                }, e.prototype.recordFirstPosition = function(t, n) {
                  if (getSelection().rangeCount !== 0 && !(this[t.currentMode].undoStack.length !== 1 || this[t.currentMode].undoStack[0].length === 0 || this[t.currentMode].redoStack.length > 0) && !((0, o.vU)() && n.key === "Backspace") && !(0, o.G6)()) {
                    var r = this.addCaret(t);
                    r.replace("<wbr>", "").replace(" vditor-ir__node--expand", "") === this[t.currentMode].undoStack[0][0].diffs[0][1].replace("<wbr>", "") && (this[t.currentMode].undoStack[0][0].diffs[0][1] = r, this[t.currentMode].lastText = r);
                  }
                }, e.prototype.addToUndoStack = function(t) {
                  var n = this.addCaret(t, !0), r = this.dmp.diff_main(n, this[t.currentMode].lastText, !0), a = this.dmp.patch_make(n, this[t.currentMode].lastText, r);
                  a.length === 0 && this[t.currentMode].undoStack.length > 0 || (this[t.currentMode].lastText = n, this[t.currentMode].undoStack.push(a), this[t.currentMode].undoStack.length > this.stackSize && this[t.currentMode].undoStack.shift(), this[t.currentMode].hasUndo && (this[t.currentMode].redoStack = [], this[t.currentMode].hasUndo = !1, f(t.toolbar.elements, ["redo"])), this[t.currentMode].undoStack.length > 1 && y(t.toolbar.elements, ["undo"]));
                }, e.prototype.renderDiff = function(t, n, r) {
                  r === void 0 && (r = !1);
                  var a;
                  if (r) {
                    var i = this.dmp.patch_deepCopy(t).reverse();
                    i.forEach(function(h) {
                      h.diffs.forEach(function(b) {
                        b[0] = -b[0];
                      });
                    }), a = this.dmp.patch_apply(i, this[n.currentMode].lastText)[0];
                  } else
                    a = this.dmp.patch_apply(t, this[n.currentMode].lastText)[0];
                  if (this[n.currentMode].lastText = a, n[n.currentMode].element.innerHTML = a, n.currentMode !== "sv" && (n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview")).forEach(function(h) {
                    h.parentElement.querySelector(".language-echarts") && (n.currentMode === "ir" ? h.parentElement.outerHTML = n.lute.SpinVditorIRDOM(h.parentElement.outerHTML) : h.parentElement.outerHTML = n.lute.SpinVditorDOM(h.parentElement.outerHTML));
                  }), n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview[data-render='2']")).forEach(function(h) {
                    ge(h, n);
                  })), n[n.currentMode].element.querySelector("wbr"))
                    (0, B.ib)(n[n.currentMode].element, n[n.currentMode].element.ownerDocument.createRange()), He(n);
                  else {
                    var l = getSelection().getRangeAt(0);
                    l.setEndBefore(n[n.currentMode].element), l.collapse(!1);
                  }
                  Be(n), Ee(n, {
                    enableAddUndoStack: !1,
                    enableHint: !1,
                    enableInput: !0
                  }), _t(n), n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview[data-render='2']")).forEach(function(h) {
                    ge(h, n);
                  }), this[n.currentMode].undoStack.length > 1 ? y(n.toolbar.elements, ["undo"]) : f(n.toolbar.elements, ["undo"]), this[n.currentMode].redoStack.length !== 0 ? y(n.toolbar.elements, ["redo"]) : f(n.toolbar.elements, ["redo"]);
                }, e.prototype.resetStack = function() {
                  this.ir = {
                    hasUndo: !1,
                    lastText: "",
                    redoStack: [],
                    undoStack: []
                  }, this.sv = {
                    hasUndo: !1,
                    lastText: "",
                    redoStack: [],
                    undoStack: []
                  }, this.wysiwyg = {
                    hasUndo: !1,
                    lastText: "",
                    redoStack: [],
                    undoStack: []
                  };
                }, e.prototype.addCaret = function(t, n) {
                  n === void 0 && (n = !1);
                  var r;
                  if (getSelection().rangeCount !== 0 && !t[t.currentMode].element.querySelector("wbr")) {
                    var a = getSelection().getRangeAt(0);
                    if (t[t.currentMode].element.contains(a.startContainer)) {
                      r = a.cloneRange();
                      var i = document.createElement("span");
                      i.className = "vditor-wbr", a.insertNode(i);
                    }
                  }
                  var l = t[t.currentMode].element.cloneNode(!0);
                  l.querySelectorAll(".vditor-".concat(t.currentMode, "__preview[data-render='1']")).forEach(function(b) {
                    b.firstElementChild && (b.firstElementChild.classList.contains("language-echarts") || b.firstElementChild.classList.contains("language-plantuml") || b.firstElementChild.classList.contains("language-mindmap") ? (b.firstElementChild.removeAttribute("_echarts_instance_"), b.firstElementChild.removeAttribute("data-processed"), b.firstElementChild.innerHTML = b.previousElementSibling.firstElementChild.innerHTML, b.setAttribute("data-render", "2")) : b.firstElementChild.classList.contains("language-math") && (b.setAttribute("data-render", "2"), b.firstElementChild.textContent = b.firstElementChild.getAttribute("data-math"), b.firstElementChild.removeAttribute("data-math")));
                  });
                  var h = l.innerHTML;
                  return t[t.currentMode].element.querySelectorAll(".vditor-wbr").forEach(function(b) {
                    b.remove();
                  }), n && r && (0, B.Hc)(r), h.replace('<span class="vditor-wbr"></span>', "<wbr>");
                }, e;
              }()
            ), Co = A(673), ko = (
              /** @class */
              function() {
                function e(t) {
                  this.defaultOptions = {
                    rtl: !1,
                    after: void 0,
                    cache: {
                      enable: !0
                    },
                    cdn: p.g.CDN,
                    classes: {
                      preview: ""
                    },
                    comment: {
                      enable: !1
                    },
                    counter: {
                      enable: !1,
                      type: "markdown"
                    },
                    customRenders: [],
                    debugger: !1,
                    fullscreen: {
                      index: 90
                    },
                    height: "auto",
                    hint: {
                      delay: 200,
                      emoji: {
                        "+1": "👍",
                        "-1": "👎",
                        confused: "😕",
                        eyes: "👀️",
                        heart: "❤️",
                        rocket: "🚀️",
                        smile: "😄",
                        tada: "🎉️"
                      },
                      emojiPath: "".concat(p.g.CDN, "/dist/images/emoji"),
                      extend: [],
                      parse: !0
                    },
                    icon: "ant",
                    lang: "zh_CN",
                    mode: "ir",
                    outline: {
                      enable: !1,
                      position: "left"
                    },
                    placeholder: "",
                    preview: {
                      actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
                      delay: 1e3,
                      hljs: p.g.HLJS_OPTIONS,
                      markdown: p.g.MARKDOWN_OPTIONS,
                      math: p.g.MATH_OPTIONS,
                      maxWidth: 800,
                      mode: "both",
                      theme: p.g.THEME_OPTIONS,
                      render: {
                        media: {
                          enable: !0
                        }
                      }
                    },
                    link: {
                      isOpen: !0
                    },
                    image: {
                      isPreview: !0
                    },
                    resize: {
                      enable: !1,
                      position: "bottom"
                    },
                    theme: "classic",
                    toolbar: [
                      "emoji",
                      "headings",
                      "bold",
                      "italic",
                      "strike",
                      "link",
                      "|",
                      "list",
                      "ordered-list",
                      "check",
                      "outdent",
                      "indent",
                      "|",
                      "quote",
                      "line",
                      "code",
                      "inline-code",
                      "insert-before",
                      "insert-after",
                      "|",
                      "upload",
                      "record",
                      "table",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "fullscreen",
                      "edit-mode",
                      {
                        name: "more",
                        toolbar: [
                          "both",
                          "code-theme",
                          "content-theme",
                          "export",
                          "outline",
                          "preview",
                          "devtools",
                          "info",
                          "help"
                        ]
                      }
                    ],
                    toolbarConfig: {
                      hide: !1,
                      pin: !1
                    },
                    typewriterMode: !1,
                    undoDelay: 800,
                    upload: {
                      extraData: {},
                      fieldName: "file[]",
                      filename: function(n) {
                        return n.replace(/\W/g, "");
                      },
                      linkToImgUrl: "",
                      max: 10 * 1024 * 1024,
                      multiple: !0,
                      url: "",
                      withCredentials: !1
                    },
                    value: "",
                    width: "auto"
                  }, this.options = t;
                }
                return e.prototype.merge = function() {
                  var t, n, r, a, i, l, h, b, m;
                  this.options && (this.options.toolbar ? this.options.toolbar = this.mergeToolbar(this.options.toolbar) : this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar), !((n = (t = this.options.preview) === null || t === void 0 ? void 0 : t.theme) === null || n === void 0) && n.list && (this.defaultOptions.preview.theme.list = this.options.preview.theme.list), !((i = (a = (r = this.options.preview) === null || r === void 0 ? void 0 : r.render) === null || a === void 0 ? void 0 : a.media) === null || i === void 0) && i.enable && (this.defaultOptions.preview.render.media.enable = this.options.preview.render.media.enable), !((l = this.options.hint) === null || l === void 0) && l.emoji && (this.defaultOptions.hint.emoji = this.options.hint.emoji), this.options.comment && (this.defaultOptions.comment = this.options.comment), this.options.cdn && (!((b = (h = this.options.preview) === null || h === void 0 ? void 0 : h.theme) === null || b === void 0) && b.path || (this.defaultOptions.preview.theme.path = "".concat(this.options.cdn, "/dist/css/content-theme")), !((m = this.options.hint) === null || m === void 0) && m.emojiPath || (this.defaultOptions.hint.emojiPath = "".concat(this.options.cdn, "/dist/images/emoji"))));
                  var D = (0, Co.T)(this.defaultOptions, this.options);
                  if (D.cache.enable && !D.cache.id)
                    throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                  return D;
                }, e.prototype.mergeToolbar = function(t) {
                  var n = this, r = [
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-export"></use></svg>',
                      name: "export",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘E",
                      icon: '<svg><use xlink:href="#vditor-icon-emoji"></use></svg>',
                      name: "emoji",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘H",
                      icon: '<svg><use xlink:href="#vditor-icon-headings"></use></svg>',
                      name: "headings",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘B",
                      icon: '<svg><use xlink:href="#vditor-icon-bold"></use></svg>',
                      name: "bold",
                      prefix: "**",
                      suffix: "**",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘I",
                      icon: '<svg><use xlink:href="#vditor-icon-italic"></use></svg>',
                      name: "italic",
                      prefix: "*",
                      suffix: "*",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘D",
                      icon: '<svg><use xlink:href="#vditor-icon-strike"></use></svg>',
                      name: "strike",
                      prefix: "~~",
                      suffix: "~~",
                      tipPosition: "ne"
                    },
                    {
                      hotkey: "⌘K",
                      icon: '<svg><use xlink:href="#vditor-icon-link"></use></svg>',
                      name: "link",
                      prefix: "[",
                      suffix: "](https://)",
                      tipPosition: "n"
                    },
                    {
                      name: "|"
                    },
                    {
                      hotkey: "⌘L",
                      icon: '<svg><use xlink:href="#vditor-icon-list"></use></svg>',
                      name: "list",
                      prefix: "* ",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⌘O",
                      icon: '<svg><use xlink:href="#vditor-icon-ordered-list"></use></svg>',
                      name: "ordered-list",
                      prefix: "1. ",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⌘J",
                      icon: '<svg><use xlink:href="#vditor-icon-check"></use></svg>',
                      name: "check",
                      prefix: "* [ ] ",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⇧⌘I",
                      icon: '<svg><use xlink:href="#vditor-icon-outdent"></use></svg>',
                      name: "outdent",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⇧⌘O",
                      icon: '<svg><use xlink:href="#vditor-icon-indent"></use></svg>',
                      name: "indent",
                      tipPosition: "n"
                    },
                    {
                      name: "|"
                    },
                    {
                      hotkey: "⌘;",
                      icon: '<svg><use xlink:href="#vditor-icon-quote"></use></svg>',
                      name: "quote",
                      prefix: "> ",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⇧⌘H",
                      icon: '<svg><use xlink:href="#vditor-icon-line"></use></svg>',
                      name: "line",
                      prefix: "---",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⌘U",
                      icon: '<svg><use xlink:href="#vditor-icon-code"></use></svg>',
                      name: "code",
                      prefix: "```",
                      suffix: "\n```",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⌘G",
                      icon: '<svg><use xlink:href="#vditor-icon-inline-code"></use></svg>',
                      name: "inline-code",
                      prefix: "`",
                      suffix: "`",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⇧⌘B",
                      icon: '<svg><use xlink:href="#vditor-icon-before"></use></svg>',
                      name: "insert-before",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⇧⌘E",
                      icon: '<svg><use xlink:href="#vditor-icon-after"></use></svg>',
                      name: "insert-after",
                      tipPosition: "n"
                    },
                    {
                      name: "|"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-upload"></use></svg>',
                      name: "upload",
                      tipPosition: "n"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-record"></use></svg>',
                      name: "record",
                      tipPosition: "n"
                    },
                    {
                      hotkey: "⌘M",
                      icon: '<svg><use xlink:href="#vditor-icon-table"></use></svg>',
                      name: "table",
                      prefix: "| col1",
                      suffix: ` | col2 | col3 |
| --- | --- | --- |
|  |  |  |
|  |  |  |`,
                      tipPosition: "n"
                    },
                    {
                      name: "|"
                    },
                    {
                      hotkey: "⌘Z",
                      icon: '<svg><use xlink:href="#vditor-icon-undo"></use></svg>',
                      name: "undo",
                      tipPosition: "nw"
                    },
                    {
                      hotkey: "⌘Y",
                      icon: '<svg><use xlink:href="#vditor-icon-redo"></use></svg>',
                      name: "redo",
                      tipPosition: "nw"
                    },
                    {
                      name: "|"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-more"></use></svg>',
                      name: "more",
                      tipPosition: "e"
                    },
                    {
                      hotkey: "⌘'",
                      icon: '<svg><use xlink:href="#vditor-icon-fullscreen"></use></svg>',
                      name: "fullscreen",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-edit"></use></svg>',
                      name: "edit-mode",
                      tipPosition: "nw"
                    },
                    {
                      hotkey: "⌘P",
                      icon: '<svg><use xlink:href="#vditor-icon-both"></use></svg>',
                      name: "both",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-preview"></use></svg>',
                      name: "preview",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>',
                      name: "outline",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-theme"></use></svg>',
                      name: "content-theme",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-code-theme"></use></svg>',
                      name: "code-theme",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-bug"></use></svg>',
                      name: "devtools",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-info"></use></svg>',
                      name: "info",
                      tipPosition: "nw"
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-help"></use></svg>',
                      name: "help",
                      tipPosition: "nw"
                    },
                    {
                      name: "br"
                    }
                  ], a = [];
                  return t.forEach(function(i) {
                    var l = i;
                    r.forEach(function(h) {
                      typeof i == "string" && h.name === i && (l = h), typeof i == "object" && h.name === i.name && (l = Object.assign({}, h, i));
                    }), i.toolbar && (l.toolbar = n.mergeToolbar(i.toolbar)), a.push(l);
                  }), a;
                }, e;
              }()
            ), To = (
              /** @class */
              function() {
                function e(t) {
                  var n = this;
                  this.composingLock = !1, this.commentIds = [];
                  var r = document.createElement("div");
                  r.className = "vditor-wysiwyg", r.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(t.options.placeholder, `"
 contenteditable="true" spellcheck="false"></pre>
<div class="vditor-panel vditor-panel--none"></div>
<div class="vditor-panel vditor-panel--none">
    <button type="button" aria-label="`).concat(window.VditorI18n.comment, `" class="vditor-icon vditor-tooltipped vditor-tooltipped__n">
        <svg><use xlink:href="#vditor-icon-comment"></use></svg>
    </button>
</div>`), this.element = r.firstElementChild, this.popover = r.firstElementChild.nextElementSibling, this.selectPopover = r.lastElementChild, this.bindEvent(t), Dn(t, this.element), pr(t, this.element), On(t, this.element), Rn(t, this.element), Pn(t, this.element), Bn(t, this.element), Hn(t, this.element, this.copy), Nn(t, this.element, this.copy), t.options.comment.enable && (this.selectPopover.querySelector("button").onclick = function() {
                    var a = Lute.NewNodeID(), i = getSelection().getRangeAt(0), l = i.cloneRange(), h = i.extractContents(), b, m, D = !1, R = !1;
                    h.childNodes.forEach(function(K, te) {
                      var ee = !1;
                      if (K.nodeType === 3 ? ee = !0 : K.classList.contains("vditor-comment") ? K.classList.contains("vditor-comment") && K.setAttribute("data-cmtids", K.getAttribute("data-cmtids") + " " + a) : ee = !0, ee)
                        if (K.nodeType !== 3 && K.getAttribute("data-block") === "0" && te === 0 && l.startOffset > 0)
                          K.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(a, '">').concat(K.innerHTML, "</span>"), b = K;
                        else if (K.nodeType !== 3 && K.getAttribute("data-block") === "0" && te === h.childNodes.length - 1 && l.endOffset < l.endContainer.textContent.length)
                          K.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(a, '">').concat(K.innerHTML, "</span>"), m = K;
                        else if (K.nodeType !== 3 && K.getAttribute("data-block") === "0")
                          te === 0 ? D = !0 : te === h.childNodes.length - 1 && (R = !0), K.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(a, '">').concat(K.innerHTML, "</span>");
                        else {
                          var z = document.createElement("span");
                          z.classList.add("vditor-comment"), z.setAttribute("data-cmtids", a), K.parentNode.insertBefore(z, K), z.appendChild(K);
                        }
                    });
                    var G = (0, s.F9)(l.startContainer);
                    G && (b ? (G.insertAdjacentHTML("beforeend", b.innerHTML), b.remove()) : G.textContent.trim().replace(p.g.ZWSP, "") === "" && D && G.remove());
                    var Z = (0, s.F9)(l.endContainer);
                    Z && (m ? (Z.insertAdjacentHTML("afterbegin", m.innerHTML), m.remove()) : Z.textContent.trim().replace(p.g.ZWSP, "") === "" && R && Z.remove()), i.insertNode(h), t.options.comment.add(a, i.toString(), n.getComments(t, !0)), Ae(t, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    }), n.hideComment();
                  });
                }
                return e.prototype.getComments = function(t, n) {
                  var r = this;
                  if (n === void 0 && (n = !1), t.currentMode === "wysiwyg" && t.options.comment.enable) {
                    this.commentIds = [], this.element.querySelectorAll(".vditor-comment").forEach(function(i) {
                      r.commentIds = r.commentIds.concat(i.getAttribute("data-cmtids").split(" "));
                    }), this.commentIds = Array.from(new Set(this.commentIds));
                    var a = [];
                    if (n)
                      return this.commentIds.forEach(function(i) {
                        a.push({
                          id: i,
                          top: r.element.querySelector('.vditor-comment[data-cmtids="'.concat(i, '"]')).offsetTop
                        });
                      }), a;
                  } else
                    return [];
                }, e.prototype.triggerRemoveComment = function(t) {
                  var n = function(i, l) {
                    var h = new Set(l);
                    return i.filter(function(b) {
                      return !h.has(b);
                    });
                  };
                  if (t.currentMode === "wysiwyg" && t.options.comment.enable && t.wysiwyg.commentIds.length > 0) {
                    var r = JSON.parse(JSON.stringify(this.commentIds));
                    this.getComments(t);
                    var a = n(r, this.commentIds);
                    a.length > 0 && t.options.comment.remove(a);
                  }
                }, e.prototype.showComment = function() {
                  var t = (0, B.Ny)(this.element);
                  this.selectPopover.setAttribute("style", "left:".concat(t.left, "px;display:block;top:").concat(Math.max(-8, t.top - 21), "px"));
                }, e.prototype.hideComment = function() {
                  this.selectPopover.setAttribute("style", "display:none");
                }, e.prototype.unbindListener = function() {
                  window.removeEventListener("scroll", this.scrollListener);
                }, e.prototype.copy = function(t, n) {
                  var r = getSelection().getRangeAt(0);
                  if (r.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var a = (0, s.lG)(r.startContainer, "CODE"), i = (0, s.lG)(r.endContainer, "CODE");
                    if (a && i && i.isSameNode(a)) {
                      var l = "";
                      a.parentElement.tagName === "PRE" ? l = r.toString() : l = "`" + r.toString() + "`", t.clipboardData.setData("text/plain", l), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var h = (0, s.lG)(r.startContainer, "A"), b = (0, s.lG)(r.endContainer, "A");
                    if (h && b && b.isSameNode(h)) {
                      var m = h.getAttribute("title") || "";
                      m && (m = ' "'.concat(m, '"')), t.clipboardData.setData("text/plain", "[".concat(r.toString(), "](").concat(h.getAttribute("href")).concat(m, ")")), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var D = document.createElement("div");
                    D.appendChild(r.cloneContents()), t.clipboardData.setData("text/plain", n.lute.VditorDOM2Md(D.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.unbindListener(), window.addEventListener("scroll", this.scrollListener = function() {
                    if (C(t, ["hint"]), !(n.popover.style.display !== "block" || n.selectPopover.style.display !== "block")) {
                      var r = parseInt(n.popover.getAttribute("data-top"), 10);
                      if (t.options.height !== "auto") {
                        if (t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0) {
                          var a = Math.max(window.scrollY - t.element.offsetTop - 8, Math.min(r - t.wysiwyg.element.scrollTop, n.element.clientHeight - 21)) + "px";
                          n.popover.style.display === "block" && (n.popover.style.top = a), n.selectPopover.style.display === "block" && (n.selectPopover.style.top = a);
                        }
                        return;
                      } else if (!t.options.toolbarConfig.pin)
                        return;
                      var i = Math.max(r, window.scrollY - t.element.offsetTop - 8) + "px";
                      n.popover.style.display === "block" && (n.popover.style.top = i), n.selectPopover.style.display === "block" && (n.selectPopover.style.top = i);
                    }
                  }), this.element.addEventListener("scroll", function() {
                    if (C(t, ["hint"]), t.options.comment && t.options.comment.enable && t.options.comment.scroll && t.options.comment.scroll(t.wysiwyg.element.scrollTop), n.popover.style.display === "block") {
                      var r = parseInt(n.popover.getAttribute("data-top"), 10) - t.wysiwyg.element.scrollTop, a = -8;
                      t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0 && (a = window.scrollY - t.element.offsetTop + a);
                      var i = Math.max(a, Math.min(r, n.element.clientHeight - 21)) + "px";
                      n.popover.style.top = i, n.selectPopover.style.top = i;
                    }
                  }), this.element.addEventListener("paste", function(r) {
                    fn(t, r, {
                      pasteCode: function(a) {
                        var i = (0, B.zh)(t), l = document.createElement("template");
                        l.innerHTML = a, i.insertNode(l.content.cloneNode(!0));
                        var h = (0, s.a1)(i.startContainer, "data-block", "0");
                        h ? h.outerHTML = t.lute.SpinVditorDOM(h.outerHTML) : t.wysiwyg.element.innerHTML = t.lute.SpinVditorDOM(t.wysiwyg.element.innerHTML), (0, B.ib)(t.wysiwyg.element, i);
                      }
                    });
                  }), this.element.addEventListener("compositionstart", function() {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    var a = (0, _.W)(getSelection().getRangeAt(0).startContainer);
                    if (a && a.textContent === "") {
                      Be(t);
                      return;
                    }
                    (0, o.vU)() || sn(t, getSelection().getRangeAt(0).cloneRange(), r), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop")) {
                      if (n.preventInput) {
                        n.preventInput = !1, Ae(t);
                        return;
                      }
                      if (n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《") {
                        Ae(t);
                        return;
                      }
                      var a = getSelection().getRangeAt(0), i = (0, s.F9)(a.startContainer);
                      if (i || (Mn(t, a), i = (0, s.F9)(a.startContainer)), !!i) {
                        for (var l = (0, B.im)(i, t.wysiwyg.element, a).start, h = !0, b = l - 1; b > i.textContent.substr(0, l).lastIndexOf(`
`); b--)
                          if (i.textContent.charAt(b) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                          i.textContent.charAt(b) !== "	") {
                            h = !1;
                            break;
                          }
                        l === 0 && (h = !1);
                        for (var m = !0, b = l - 1; b < i.textContent.length; b++)
                          if (i.textContent.charAt(b) !== " " && i.textContent.charAt(b) !== `
`) {
                            m = !1;
                            break;
                          }
                        m && /^#{1,6} $/.test(i.textContent) && (m = !1);
                        var D = (0, _.W)(getSelection().getRangeAt(0).startContainer);
                        if (D && D.textContent === "" && (Be(t), D.remove()), h && i.getAttribute("data-type") !== "code-block" || m || Un(i.innerHTML) || Vn(i.innerHTML) && i.previousElementSibling) {
                          typeof t.options.input == "function" && t.options.input(M(t));
                          return;
                        }
                        r.inputType === "insertParagraph" && n.element.innerHTML === "<p><br></p><p><br></p>" && i.previousElementSibling.remove(), sn(t, a, r);
                      }
                    }
                  }), this.element.addEventListener("click", function(r) {
                    if (r.target.tagName === "INPUT") {
                      var a = r.target;
                      a.checked ? a.setAttribute("checked", "checked") : a.removeAttribute("checked"), n.preventInput = !0, getSelection().rangeCount > 0 && (0, B.Hc)(getSelection().getRangeAt(0)), Ae(t);
                      return;
                    }
                    if (r.target.tagName === "IMG" && // plantuml 图片渲染不进行提示
                    !r.target.parentElement.classList.contains("vditor-wysiwyg__preview")) {
                      r.target.getAttribute("data-type") === "link-ref" ? fr(t, r.target) : Xa(r, t);
                      return;
                    }
                    var i = (0, s.lG)(r.target, "A");
                    if (i) {
                      t.options.link.click ? t.options.link.click(i) : t.options.link.isOpen && window.open(i.getAttribute("href")), r.preventDefault();
                      return;
                    }
                    var l = (0, B.zh)(t);
                    if (r.target.isEqualNode(n.element) && n.element.lastElementChild && l.collapsed) {
                      var h = n.element.lastElementChild.getBoundingClientRect();
                      r.y > h.top + h.height && (n.element.lastElementChild.tagName === "P" && n.element.lastElementChild.textContent.trim().replace(p.g.ZWSP, "") === "" ? (l.selectNodeContents(n.element.lastElementChild), l.collapse(!1)) : (n.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(p.g.ZWSP, "<wbr></p>")), (0, B.ib)(n.element, l)));
                    }
                    vt(t);
                    var b = (0, s.fb)(r.target, "vditor-wysiwyg__preview");
                    b || (b = (0, s.fb)((0, B.zh)(t).startContainer, "vditor-wysiwyg__preview")), b && Vt(b, t), Ie(r, t);
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, o.yl)(r))) {
                      r.key === "Enter" && He(t), (r.key === "Backspace" || r.key === "Delete") && t.wysiwyg.element.innerHTML !== "" && t.wysiwyg.element.childNodes.length === 1 && t.wysiwyg.element.firstElementChild && t.wysiwyg.element.firstElementChild.tagName === "P" && t.wysiwyg.element.firstElementChild.childElementCount === 0 && (t.wysiwyg.element.textContent === "" || t.wysiwyg.element.textContent === `
`) && (t.wysiwyg.element.innerHTML = "");
                      var a = (0, B.zh)(t);
                      if (r.key === "Backspace" && (0, o.vU)() && a.startContainer.textContent === `
` && a.startOffset === 1 && (a.startContainer.textContent = ""), Mn(t, a), vt(t), !(r.key !== "ArrowDown" && r.key !== "ArrowRight" && r.key !== "Backspace" && r.key !== "ArrowLeft" && r.key !== "ArrowUp")) {
                        (r.key === "ArrowLeft" || r.key === "ArrowRight") && t.hint.render(t);
                        var i = (0, s.fb)(a.startContainer, "vditor-wysiwyg__preview");
                        if (!i && a.startContainer.nodeType !== 3 && a.startOffset > 0) {
                          var l = a.startContainer;
                          l.classList.contains("vditor-wysiwyg__block") && (i = l.lastElementChild);
                        }
                        if (i) {
                          var h = i.previousElementSibling;
                          if (h.style.display === "none") {
                            r.key === "ArrowDown" || r.key === "ArrowRight" ? Vt(i, t) : Vt(i, t, !1);
                            return;
                          }
                          var b = i.previousElementSibling;
                          if (b.tagName === "PRE" && (b = b.firstElementChild), r.key === "ArrowDown" || r.key === "ArrowRight") {
                            var l = i.parentElement, m = $a(l);
                            if (m && m.nodeType !== 3) {
                              var D = m.querySelector(".vditor-wysiwyg__preview");
                              if (D) {
                                Vt(D, t);
                                return;
                              }
                            }
                            if (m.nodeType === 3) {
                              for (; m.textContent.length === 0 && m.nextSibling; )
                                m = m.nextSibling;
                              a.setStart(m, 1);
                            } else
                              a.setStart(m.firstChild, 0);
                          } else
                            a.selectNodeContents(b), a.collapse(!1);
                        }
                      }
                    }
                  });
                }, e;
              }()
            ), Lo = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
                  r.__proto__ = a;
                } || function(r, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
                }, e(t, n);
              };
              return function(t, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);
                function r() {
                  this.constructor = t;
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
              };
            }(), Ao = (
              /** @class */
              function(e) {
                Lo(t, e);
                function t(n, r) {
                  var a = e.call(this) || this;
                  if (a.isDestroyed = !1, a.version = p.H, typeof n == "string") {
                    if (r ? r.cache ? r.cache.id || (r.cache.id = "vditor".concat(n)) : r.cache = { id: "vditor".concat(n) } : r = {
                      cache: {
                        id: "vditor".concat(n)
                      }
                    }, !document.getElementById(n))
                      return a.showErrorTip("Failed to get element by id: ".concat(n)), a;
                    n = document.getElementById(n);
                  }
                  var i = new ko(r), l = i.merge();
                  if (l.i18n)
                    window.VditorI18n = l.i18n, a.init(n, l);
                  else if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(l.lang)) {
                    var h = "vditorI18nScript", b = h + l.lang;
                    document.querySelectorAll('head script[id^="'.concat(h, '"]')).forEach(function(m) {
                      m.id !== b && document.head.removeChild(m);
                    }), (0, x.G)("".concat(l.cdn, "/dist/js/i18n/").concat(l.lang, ".js"), b).then(function() {
                      a.init(n, l);
                    }).catch(function(m) {
                      a.showErrorTip("GET ".concat(l.cdn, "/dist/js/i18n/").concat(l.lang, ".js net::ERR_ABORTED 404 (Not Found)"));
                    });
                  } else
                    throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                  return a;
                }
                return t.prototype.showErrorTip = function(n) {
                  var r = new Ur();
                  document.body.appendChild(r.element), r.show(n, 0);
                }, t.prototype.updateToolbarConfig = function(n) {
                  this.vditor.toolbar.updateConfig(this.vditor, n);
                }, t.prototype.setTheme = function(n, r, a, i) {
                  this.vditor.options.theme = n, he(this.vditor), r && (this.vditor.options.preview.theme.current = r, (0, U.Z)(r, i || this.vditor.options.preview.theme.path)), a && (this.vditor.options.preview.hljs.style = a, (0, Wr.Y)(a, this.vditor.options.cdn));
                }, t.prototype.getValue = function() {
                  return M(this.vditor);
                }, t.prototype.getCurrentMode = function() {
                  return this.vditor.currentMode;
                }, t.prototype.focus = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.focus() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.focus() : this.vditor.currentMode === "ir" && this.vditor.ir.element.focus();
                }, t.prototype.blur = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.blur() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.blur() : this.vditor.currentMode === "ir" && this.vditor.ir.element.blur();
                }, t.prototype.disabled = function() {
                  C(this.vditor, ["subToolbar", "hint", "popover"]), f(this.vditor.toolbar.elements, p.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "false");
                }, t.prototype.enable = function() {
                  y(this.vditor.toolbar.elements, p.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor.undo.resetIcon(this.vditor), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "true");
                }, t.prototype.getSelection = function() {
                  if (this.vditor.currentMode === "wysiwyg")
                    return Wt(this.vditor.wysiwyg.element);
                  if (this.vditor.currentMode === "sv")
                    return Wt(this.vditor.sv.element);
                  if (this.vditor.currentMode === "ir")
                    return Wt(this.vditor.ir.element);
                }, t.prototype.renderPreview = function(n) {
                  this.vditor.preview.render(this.vditor, n);
                }, t.prototype.getCursorPosition = function() {
                  return (0, B.Ny)(this.vditor[this.vditor.currentMode].element);
                }, t.prototype.isUploading = function() {
                  return this.vditor.upload.isUploading;
                }, t.prototype.clearCache = function() {
                  this.vditor.options.cache.enable && (0, o.pK)() && localStorage.removeItem(this.vditor.options.cache.id);
                }, t.prototype.disabledCache = function() {
                  this.vditor.options.cache.enable = !1;
                }, t.prototype.enableCache = function() {
                  if (!this.vditor.options.cache.id)
                    throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                  this.vditor.options.cache.enable = !0;
                }, t.prototype.html2md = function(n) {
                  return this.vditor.lute.HTML2Md(n);
                }, t.prototype.exportJSON = function(n) {
                  return this.vditor.lute.RenderJSON(n);
                }, t.prototype.getHTML = function() {
                  return Fr(this.vditor);
                }, t.prototype.tip = function(n, r) {
                  this.vditor.tip.show(n, r);
                }, t.prototype.setPreviewMode = function(n) {
                  qn(n, this.vditor);
                }, t.prototype.deleteValue = function() {
                  window.getSelection().isCollapsed || document.execCommand("delete", !1);
                }, t.prototype.updateValue = function(n) {
                  document.execCommand("insertHTML", !1, n);
                }, t.prototype.insertValue = function(n, r) {
                  r === void 0 && (r = !0);
                  var a = (0, B.zh)(this.vditor);
                  a.collapse(!0);
                  var i = document.createElement("template");
                  i.innerHTML = n, a.insertNode(i.content.cloneNode(!0)), a.collapse(!1), this.vditor.currentMode === "sv" ? (this.vditor.sv.preventInput = !0, r && Ce(this.vditor)) : this.vditor.currentMode === "wysiwyg" ? r && sn(this.vditor, getSelection().getRangeAt(0)) : this.vditor.currentMode === "ir" && (this.vditor.ir.preventInput = !0, r && Ue(this.vditor, getSelection().getRangeAt(0), !0));
                }, t.prototype.insertMD = function(n) {
                  this.vditor.currentMode === "ir" ? (0, B.oC)(this.vditor.lute.Md2VditorIRDOM(n), this.vditor) : this.vditor.currentMode === "wysiwyg" ? (0, B.oC)(this.vditor.lute.Md2VditorDOM(n), this.vditor) : In(this.vditor, n), this.vditor.outline.render(this.vditor), Ee(this.vditor);
                }, t.prototype.setValue = function(n, r) {
                  var a = this;
                  r === void 0 && (r = !1), this.vditor.currentMode === "sv" ? (this.vditor.sv.element.innerHTML = "<div data-block='0'>".concat(this.vditor.lute.SpinVditorSVDOM(n), "</div>"), Pe(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })) : this.vditor.currentMode === "wysiwyg" ? dr(this.vditor, n, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }) : (this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(n), this.vditor.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(i) {
                    ge(i, a.vditor);
                  }), st(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })), this.vditor.outline.render(this.vditor), n || (C(this.vditor, ["emoji", "headings", "submenu", "hint"]), this.vditor.wysiwyg.popover && (this.vditor.wysiwyg.popover.style.display = "none"), this.clearCache()), r && this.clearStack();
                }, t.prototype.insertEmptyBlock = function(n) {
                  Kt(this.vditor, n);
                }, t.prototype.clearStack = function() {
                  this.vditor.undo.clearStack(this.vditor), this.vditor.undo.addToUndoStack(this.vditor);
                }, t.prototype.destroy = function() {
                  this.vditor.element.innerHTML = this.vditor.originalInnerHTML, this.vditor.element.classList.remove("vditor"), this.vditor.element.removeAttribute("style");
                  var n = document.getElementById("vditorIconScript");
                  n && n.remove(), this.clearCache(), lr(), this.vditor.wysiwyg.unbindListener(), this.vditor.options.after = void 0, this.isDestroyed = !0;
                }, t.prototype.getCommentIds = function() {
                  return this.vditor.currentMode !== "wysiwyg" ? [] : this.vditor.wysiwyg.getComments(this.vditor, !0);
                }, t.prototype.hlCommentIds = function(n) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var r = function(a) {
                      a.classList.remove("vditor-comment--hover"), n.forEach(function(i) {
                        a.getAttribute("data-cmtids").indexOf(i) > -1 && a.classList.add("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      r(a);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      r(a);
                    });
                  }
                }, t.prototype.unHlCommentIds = function(n) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var r = function(a) {
                      n.forEach(function(i) {
                        a.getAttribute("data-cmtids").indexOf(i) > -1 && a.classList.remove("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      r(a);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      r(a);
                    });
                  }
                }, t.prototype.removeCommentIds = function(n) {
                  var r = this;
                  if (this.vditor.currentMode === "wysiwyg") {
                    var a = function(i, l) {
                      var h = i.getAttribute("data-cmtids").split(" ");
                      h.find(function(b, m) {
                        if (b === l)
                          return h.splice(m, 1), !0;
                      }), h.length === 0 ? (i.outerHTML = i.innerHTML, (0, B.zh)(r.vditor).collapse(!0)) : i.setAttribute("data-cmtids", h.join(" "));
                    };
                    n.forEach(function(i) {
                      r.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(l) {
                        a(l, i);
                      }), r.vditor.preview.element.style.display !== "none" && r.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(l) {
                        a(l, i);
                      });
                    }), Ae(this.vditor, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    });
                  }
                }, t.prototype.init = function(n, r) {
                  var a = this;
                  this.isDestroyed || (this.vditor = {
                    currentMode: r.mode,
                    element: n,
                    hint: new gi(r.hint.extend),
                    lute: void 0,
                    options: r,
                    originalInnerHTML: n.innerHTML,
                    outline: new bi(window.VditorI18n.outline),
                    tip: new Ur()
                  }, this.vditor.sv = new Ci(this.vditor), this.vditor.undo = new So(), this.vditor.wysiwyg = new To(this.vditor), this.vditor.ir = new vi(this.vditor), this.vditor.toolbar = new wo(this.vditor), r.resize.enable && (this.vditor.resize = new Si(this.vditor)), this.vditor.toolbar.elements.devtools && (this.vditor.devtools = new c()), (r.upload.url || r.upload.handler) && (this.vditor.upload = new oi()), (0, x.G)(r._lutePath || "".concat(r.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    a.vditor.lute = (0, yi.X)({
                      autoSpace: a.vditor.options.preview.markdown.autoSpace,
                      gfmAutoLink: a.vditor.options.preview.markdown.gfmAutoLink,
                      codeBlockPreview: a.vditor.options.preview.markdown.codeBlockPreview,
                      emojiSite: a.vditor.options.hint.emojiPath,
                      emojis: a.vditor.options.hint.emoji,
                      fixTermTypo: a.vditor.options.preview.markdown.fixTermTypo,
                      footnotes: a.vditor.options.preview.markdown.footnotes,
                      headingAnchor: !1,
                      inlineMathDigit: a.vditor.options.preview.math.inlineDigit,
                      linkBase: a.vditor.options.preview.markdown.linkBase,
                      linkPrefix: a.vditor.options.preview.markdown.linkPrefix,
                      listStyle: a.vditor.options.preview.markdown.listStyle,
                      mark: a.vditor.options.preview.markdown.mark,
                      mathBlockPreview: a.vditor.options.preview.markdown.mathBlockPreview,
                      paragraphBeginningSpace: a.vditor.options.preview.markdown.paragraphBeginningSpace,
                      sanitize: a.vditor.options.preview.markdown.sanitize,
                      toc: a.vditor.options.preview.markdown.toc
                    }), a.vditor.preview = new Ei(a.vditor), fe(a.vditor), r.after && r.after(), r.icon && (0, x.J)("".concat(r.cdn, "/dist/js/icons/").concat(r.icon, ".js"), "vditorIconScript");
                  }));
                }, t;
              }(O.default)
            );
            const Mo = Ao;
          })(), N = N.default, N;
        })()
      );
    });
  }(En)), En.exports;
}
var Dl = xl();
const Ol = /* @__PURE__ */ Ml(Dl), Bl = /* @__PURE__ */ ft({
  __name: "EditorModal",
  emits: ["editor-opened", "editor-closed"],
  setup(g, { emit: u }) {
    const E = Te("mdnotes-editor");
    let k = Te();
    Tt(() => {
      let M = new Ol("mde-point", {
        minHeight: 320,
        cache: { enable: !1 },
        theme: "dark",
        preview: {
          theme: {
            current: "dark"
          }
        }
      });
      k.value = M, window.addEventListener("endericedragon-set-content", N);
    });
    const A = u;
    function N(M) {
      let x = M.detail, c = x.content, o = x.filename;
      E.value = o, k.value !== void 0 && k.value.setValue(c);
    }
    function O() {
      if (console.log("Wohooo~!"), k.value !== void 0) {
        let M = k.value.getValue(), x = E.value;
        qo.api.fetchApi(Ma.saveContent, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: x,
            content: M
          })
        });
      }
    }
    function p() {
      console.error("Bruh...");
    }
    function w(M) {
      A(M ? "editor-opened" : "editor-closed");
    }
    return (M, x) => (Re(), Ye(Y(Al), {
      size: "xl",
      title: E.value,
      onOk: O,
      onCancel: p,
      "onUpdate:modelValue": w
    }, {
      default: nt(() => x[0] || (x[0] = [
        Jt("div", { id: "mde-point" }, null, -1)
      ])),
      _: 1
    }, 8, ["title"]));
  }
}), Hl = /* @__PURE__ */ ft({
  __name: "App",
  setup(g) {
    const u = Te(!1);
    Tt(() => {
      window.addEventListener("endericedragon-show-mdnotes", E);
    }), ar(() => {
      window.removeEventListener("endericedragon-show-mdnotes", E);
    });
    function E() {
      u.value = !0;
    }
    function k() {
      u.value = !1;
    }
    return (A, N) => (Re(), Ye(Bl, {
      visible: u.value,
      "onUpdate:visible": N[0] || (N[0] = (O) => u.value = O),
      onKeydown: N[1] || (N[1] = Ca(() => {
      }, ["stop"])),
      onEditorClosed: k
    }, null, 8, ["visible"]));
  }
});
Ko.addStylesheet("extensions/comfyui-mdnotes/assets/main.css");
const ga = Wo;
ga.registerExtension({
  name: "endericedragon.mdnotes",
  async beforeRegisterNodeDef(g, u, E) {
    if ((/* @__PURE__ */ new Set([
      "CheckpointLoaderSimple",
      "CheckpointLoader",
      "easy fullLoader",
      "easy a1111Loader",
      "easy comfyLoader"
    ])).has(g.comfyClass)) {
      const A = g.prototype.getExtraMenuOptions;
      g.prototype.getExtraMenuOptions = function(N, O) {
        A == null || A.apply(this, arguments), O.unshift({
          content: "Show model note",
          callback: () => {
            var w;
            const p = (w = this.widgets.find((M) => M.name === "ckpt_name")) == null ? void 0 : w.value;
            p ? ga.api.fetchApi(Ma.sendCurrentCheckpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ckpt_name: p })
            }).then((M) => M.json()).then((M) => {
              let x = M.content, c = M.filename;
              window.dispatchEvent(new CustomEvent("endericedragon-show-mdnotes")), window.dispatchEvent(new CustomEvent("endericedragon-set-content", {
                detail: {
                  content: x,
                  filename: c
                }
              }));
            }) : console.error("No model name found");
          }
        });
      }, console.log(`[mdnotes] ${g.comfyClass} registered`);
    }
  },
  async nodeCreated(g) {
  },
  async setup() {
    let g = document.createElement("div");
    g.id = "mdnotes-ui", document.body.appendChild(g), Uo(Hl).use(ns()).mount(g);
  }
});

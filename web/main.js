var Pi = Object.defineProperty;
var Ii = (p, d, w) => d in p ? Pi(p, d, { enumerable: !0, configurable: !0, writable: !0, value: w }) : p[d] = w;
var Xe = (p, d, w) => Ii(p, typeof d != "symbol" ? d + "" : d, w);
import { ref as Ee, readonly as it, computed as le, effectScope as ji, getCurrentScope as Fi, onScopeDispose as zi, watch as Fe, isRef as Bn, toValue as _e, toRef as Et, customRef as Wi, unref as Y, shallowRef as tr, getCurrentInstance as rr, onMounted as Tt, defineComponent as ft, h as An, Teleport as Vi, useId as Mn, onUnmounted as uo, inject as It, watchEffect as Ui, provide as _n, useSlots as Dn, createBlock as tt, openBlock as Ne, resolveDynamicComponent as or, normalizeClass as dt, withCtx as rt, createElementBlock as ut, createCommentVNode as et, renderSlot as Ze, createTextVNode as $t, toDisplayString as Pt, useAttrs as Ki, mergeProps as at, mergeModels as Cr, useTemplateRef as Nt, useModel as Rn, Fragment as fo, createVNode as Sr, nextTick as kt, onBeforeUnmount as qi, Transition as nn, withDirectives as an, createElementVNode as Jt, withModifiers as On, normalizeProps as ct, guardReactiveProps as yt, vShow as ln, normalizeStyle as Gi, createApp as Xi } from "vue";
import Zi from "primevue/config";
import { DynamicDialog as Yi, DialogService as Ji } from "primevue";
import { app as Qi } from "../../../scripts/app.js";
import * as el from "../../../scripts/utils.js";
import { app as tl } from "../../scripts/app.js";
const Hn = "BootstrapVueNext__", po = (p, d = "") => {
  const w = `${d}___`;
  return `${Hn}ID__${p}__${d ? w : ""}`;
}, Nn = (p) => po(p), Ft = (p) => po(`${p}__registry`), rl = Nn("collapse"), $n = Ft("showHide"), ol = Nn("navbar"), nl = Ft("rtl"), sn = `${Hn}global_breadcrumb`, al = Ft("breadcrumb"), Pn = Ft("modalManager"), yr = Ft("defaults"), il = Ft("orchestrator"), ll = {
  install(p, d) {
    var k, B;
    const L = typeof (d == null ? void 0 : d.rtl) == "boolean" ? !1 : ((k = d == null ? void 0 : d.rtl) == null ? void 0 : k.rtlInitial) ?? !1, N = typeof (d == null ? void 0 : d.rtl) == "boolean" ? void 0 : ((B = d == null ? void 0 : d.rtl) == null ? void 0 : B.localeInitial) ?? void 0, D = Ee(L), g = Ee(N);
    p.provide(nl, { isRtl: D, locale: g });
  }
}, sl = () => {
  const p = Ee(/* @__PURE__ */ new Map());
  return {
    register: ({
      id: w,
      component: C,
      value: L,
      toggle: N,
      show: D,
      hide: g,
      registerTrigger: k,
      unregisterTrigger: B
    }) => (p.value.set(w, {
      id: w,
      component: C,
      value: it(L),
      toggle: N,
      show: D,
      hide: g,
      registerTrigger: k,
      unregisterTrigger: B
    }), {
      unregister() {
        p.value.delete(w);
      },
      updateId(M, c) {
        const i = p.value.get(c);
        i && (p.value.set(M, { ...i, id: M }), p.value.delete(c));
      }
    }),
    values: p
  };
}, cl = {
  install(p) {
    const { register: d, values: w } = sl();
    p.provide($n, { register: d, values: w });
    const C = Ee({
      [sn]: []
    }), L = (f = sn) => {
      C.value[f] = [];
    };
    p.provide(al, { items: C, reset: L });
    const N = Ee(/* @__PURE__ */ new Map()), D = le(() => N.value.size), g = le(() => [...N.value.values()]), k = le(() => g.value[g.value.length - 1]), B = (f) => {
      N.value.set(f.uid, f);
    }, M = (f) => {
      N.value.delete(f.uid);
    }, c = Ee(/* @__PURE__ */ new Map()), i = (f) => {
      c.value.set(f.uid, f);
    }, b = (f) => {
      c.value.delete(f.uid);
    };
    p.provide(Pn, {
      countStack: D,
      lastStack: k,
      registry: le(() => c.value),
      stack: g,
      pushStack: B,
      removeStack: M,
      pushRegistry: i,
      removeRegistry: b
    });
  }
}, dl = () => ({
  store: Ee([]),
  _isOrchestratorInstalled: Ee(!1),
  _isToastAppend: Ee(!1)
}), ul = {
  install(p) {
    const d = dl();
    p.provide(il, d);
  }
}, fl = (p = {}) => ({
  install(d) {
    (p.registries ?? !0) === !0 && d.use(cl, p), ((p.rtl ?? !0) === !0 || typeof p.rtl == "object") && d.use(ll, p), (p.orchestrator ?? !0) === !0 && d.use(ul);
    const w = (p == null ? void 0 : p.components) ?? {};
    d.provide(yr, Ee(w));
  }
});
var pl = { transitionDuration: "{transition.duration}" }, gl = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, ml = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, hl = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, bl = { root: pl, panel: gl, header: ml, content: hl }, vl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, yl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, wl = { padding: "{list.padding}", gap: "{list.gap}" }, kl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Cl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Sl = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, El = { borderRadius: "{border.radius.sm}" }, xl = { padding: "{list.option.padding}" }, Tl = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Ll = { root: vl, overlay: yl, list: wl, option: kl, optionGroup: Cl, dropdown: Sl, chip: El, emptyMessage: xl, colorScheme: Tl }, Bl = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Al = { size: "1rem" }, Ml = { borderColor: "{content.background}", offset: "-0.75rem" }, _l = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Dl = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Rl = { root: Bl, icon: Al, group: Ml, lg: _l, xl: Dl }, Ol = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Hl = { size: "0.5rem" }, Nl = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, $l = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Pl = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Il = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, jl = { root: Ol, dot: Hl, sm: Nl, lg: $l, xl: Pl, colorScheme: Il }, Fl = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, zl = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, Wl = { primitive: Fl, semantic: zl }, Vl = { borderRadius: "{content.border.radius}" }, Ul = { root: Vl }, Kl = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ql = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gl = { color: "{navigation.item.icon.color}" }, Xl = { root: Kl, item: ql, separator: Gl }, Zl = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, Yl = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Jl = { root: Zl, colorScheme: Yl }, Ql = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, es = { padding: "1.25rem", gap: "0.5rem" }, ts = { gap: "0.5rem" }, rs = { fontSize: "1.25rem", fontWeight: "500" }, os = { color: "{text.muted.color}" }, ns = { root: Ql, body: es, caption: ts, title: rs, subtitle: os }, as = { transitionDuration: "{transition.duration}" }, is = { gap: "0.25rem" }, ls = { padding: "1rem", gap: "0.5rem" }, ss = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, cs = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, ds = { root: as, content: is, indicatorList: ls, indicator: ss, colorScheme: cs }, us = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, fs = { width: "2.5rem", color: "{form.field.icon.color}" }, ps = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, gs = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, ms = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, hs = { color: "{form.field.icon.color}" }, bs = { root: us, dropdown: fs, overlay: ps, list: gs, option: ms, clearIcon: hs }, vs = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, ys = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, ws = { root: vs, icon: ys }, ks = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Cs = { width: "2rem", height: "2rem" }, Ss = { size: "1rem" }, Es = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, xs = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Ts = { root: ks, image: Cs, icon: Ss, removeIcon: Es, colorScheme: xs }, Ls = { transitionDuration: "{transition.duration}" }, Bs = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, As = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Ms = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, _s = { root: Ls, preview: Bs, panel: As, colorScheme: Ms }, Ds = { size: "2rem", color: "{overlay.modal.color}" }, Rs = { gap: "1rem" }, Os = { icon: Ds, content: Rs }, Hs = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Ns = { padding: "{overlay.popover.padding}", gap: "1rem" }, $s = { size: "1.5rem", color: "{overlay.popover.color}" }, Ps = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Is = { root: Hs, content: Ns, icon: $s, footer: Ps }, js = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Fs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, zs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ws = { mobileIndent: "1rem" }, Vs = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Us = { borderColor: "{content.border.color}" }, Ks = { root: js, list: Fs, item: zs, submenu: Ws, submenuIcon: Vs, separator: Us }, qs = { transitionDuration: "{transition.duration}" }, Gs = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Xs = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Zs = { fontWeight: "600" }, Ys = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Js = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Qs = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ec = { fontWeight: "600" }, tc = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, rc = { color: "{primary.color}" }, oc = { width: "0.5rem" }, nc = { width: "1px", color: "{primary.color}" }, ac = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, ic = { size: "2rem" }, lc = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sc = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, cc = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, dc = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, uc = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, fc = { root: qs, header: Gs, headerCell: Xs, columnTitle: Zs, row: Ys, bodyCell: Js, footerCell: Qs, columnFooter: ec, footer: tc, dropPoint: rc, columnResizer: oc, resizeIndicator: nc, sortIcon: ac, loadingIcon: ic, rowToggleButton: lc, filter: sc, paginatorTop: cc, paginatorBottom: dc, colorScheme: uc }, pc = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, gc = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, mc = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, hc = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, bc = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, vc = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, yc = { root: pc, header: gc, content: mc, footer: hc, paginatorTop: bc, paginatorBottom: vc }, wc = { transitionDuration: "{transition.duration}" }, kc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Cc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Sc = { gap: "0.5rem", fontWeight: "500" }, Ec = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xc = { color: "{form.field.icon.color}" }, Tc = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Lc = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Bc = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ac = { margin: "0.5rem 0 0 0" }, Mc = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, _c = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dc = { margin: "0.5rem 0 0 0" }, Rc = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Oc = { margin: "0.5rem 0 0 0" }, Hc = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Nc = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, $c = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Pc = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ic = { root: wc, panel: kc, header: Cc, title: Sc, dropdown: Ec, inputIcon: xc, selectMonth: Tc, selectYear: Lc, group: Bc, dayView: Ac, weekDay: Mc, date: _c, monthView: Dc, month: Rc, yearView: Oc, year: Hc, buttonbar: Nc, timePicker: $c, colorScheme: Pc }, jc = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Fc = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, zc = { fontSize: "1.25rem", fontWeight: "600" }, Wc = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Vc = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Uc = { root: jc, header: Fc, title: zc, content: Wc, footer: Vc }, Kc = { borderColor: "{content.border.color}" }, qc = { background: "{content.background}", color: "{text.color}" }, Gc = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, Xc = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Zc = { root: Kc, content: qc, horizontal: Gc, vertical: Xc }, Yc = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, Jc = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qc = { root: Yc, item: Jc }, ed = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, td = { padding: "{overlay.modal.padding}" }, rd = { fontSize: "1.5rem", fontWeight: "600" }, od = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, nd = { padding: "{overlay.modal.padding}" }, ad = { root: ed, header: td, title: rd, content: od, footer: nd }, id = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, ld = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, sd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, cd = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, dd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ud = { toolbar: id, toolbarItem: ld, overlay: sd, overlayOption: cd, content: dd }, fd = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, pd = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gd = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, md = { padding: "0" }, hd = { root: fd, legend: pd, toggleIcon: gd, content: md }, bd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, vd = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, yd = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, wd = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, kd = { gap: "0.5rem" }, Cd = { height: "0.25rem" }, Sd = { gap: "0.5rem" }, Ed = { root: bd, header: vd, content: yd, file: wd, fileList: kd, progressbar: Cd, basic: Sd }, xd = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Td = { active: { top: "-1.25rem" } }, Ld = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Bd = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Ad = { root: xd, over: Td, in: Ld, on: Bd }, Md = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, _d = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dd = { size: "1.5rem" }, Rd = { background: "{content.background}", padding: "1rem 0.25rem" }, Od = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hd = { size: "1rem" }, Nd = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, $d = { gap: "0.5rem", padding: "1rem" }, Pd = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Id = { background: "rgba(0, 0, 0, 0.5)" }, jd = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, Fd = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, zd = { size: "1.5rem" }, Wd = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Vd = { root: Md, navButton: _d, navIcon: Dd, thumbnailsContent: Rd, thumbnailNavButton: Od, thumbnailNavButtonIcon: Hd, caption: Nd, indicatorList: $d, indicatorButton: Pd, insetIndicatorList: Id, insetIndicatorButton: jd, closeButton: Fd, closeButtonIcon: zd, colorScheme: Wd }, Ud = { color: "{form.field.icon.color}" }, Kd = { icon: Ud }, qd = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Gd = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, Xd = { root: qd, input: Gd }, Zd = { transitionDuration: "{transition.duration}" }, Yd = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, Jd = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Qd = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, eu = { root: Zd, preview: Yd, toolbar: Jd, action: Qd }, tu = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ru = { handle: tu }, ou = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, nu = { fontWeight: "500" }, au = { size: "1rem" }, iu = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, lu = { root: ou, text: nu, icon: au, colorScheme: iu }, su = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, cu = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, du = { root: su, display: cu }, uu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, fu = { borderRadius: "{border.radius.sm}" }, pu = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, gu = { root: uu, chip: fu, colorScheme: pu }, mu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, hu = { addon: mu }, bu = { transitionDuration: "{transition.duration}" }, vu = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, yu = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, wu = { root: bu, button: vu, colorScheme: yu }, ku = { gap: "0.5rem" }, Cu = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Su = { root: ku, input: Cu }, Eu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, xu = { root: Eu }, Tu = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Lu = { background: "{primary.color}" }, Bu = { background: "{content.border.color}" }, Au = { color: "{text.muted.color}" }, Mu = { root: Tu, value: Lu, range: Bu, text: Au }, _u = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Du = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ru = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ou = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Hu = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Nu = { padding: "{list.option.padding}" }, $u = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Pu = { root: _u, list: Du, option: Ru, optionGroup: Ou, checkmark: Hu, emptyMessage: Nu, colorScheme: $u }, Iu = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, ju = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Fu = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, zu = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Wu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Vu = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, Uu = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ku = { borderColor: "{content.border.color}" }, qu = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gu = { root: Iu, baseItem: ju, item: Fu, overlay: zu, submenu: Wu, submenuLabel: Vu, submenuIcon: Uu, separator: Ku, mobileButton: qu }, Xu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Zu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Yu = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ju = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Qu = { borderColor: "{content.border.color}" }, ef = { root: Xu, list: Zu, item: Yu, submenuLabel: Ju, separator: Qu }, tf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, rf = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, of = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, nf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, af = { borderColor: "{content.border.color}" }, lf = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sf = { root: tf, baseItem: rf, item: of, submenu: nf, separator: af, mobileButton: lf }, cf = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, df = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, uf = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, ff = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, pf = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, gf = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, mf = { root: { borderWidth: "1px" } }, hf = { content: { padding: "0" } }, bf = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, vf = { root: cf, content: df, text: uf, icon: ff, closeButton: pf, closeIcon: gf, outlined: mf, simple: hf, colorScheme: bf }, yf = { borderRadius: "{content.border.radius}", gap: "1rem" }, wf = { background: "{content.border.color}", size: "0.5rem" }, kf = { gap: "0.5rem" }, Cf = { size: "0.5rem" }, Sf = { size: "1rem" }, Ef = { verticalGap: "0.5rem", horizontalGap: "1rem" }, xf = { root: yf, meters: wf, label: kf, labelMarker: Cf, labelIcon: Sf, labelList: Ef }, Tf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Lf = { width: "2.5rem", color: "{form.field.icon.color}" }, Bf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Af = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Mf = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, _f = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Df = { color: "{form.field.icon.color}" }, Rf = { borderRadius: "{border.radius.sm}" }, Of = { padding: "{list.option.padding}" }, Hf = { root: Tf, dropdown: Lf, overlay: Bf, list: Af, option: Mf, optionGroup: _f, chip: Rf, clearIcon: Df, emptyMessage: Of }, Nf = { gap: "1.125rem" }, $f = { gap: "0.5rem" }, Pf = { root: Nf, controls: $f }, If = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, jf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, Ff = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, zf = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Wf = { root: If, node: jf, nodeToggleButton: Ff, connector: zf }, Vf = { outline: { width: "2px", color: "{content.background}" } }, Uf = { root: Vf }, Kf = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, qf = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gf = { color: "{text.muted.color}" }, Xf = { maxWidth: "2.5rem" }, Zf = { root: Kf, navButton: qf, currentPageReport: Gf, jumpToPageInput: Xf }, Yf = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Jf = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, Qf = { padding: "0.375rem 1.125rem" }, ep = { fontWeight: "600" }, tp = { padding: "0 1.125rem 1.125rem 1.125rem" }, rp = { padding: "0 1.125rem 1.125rem 1.125rem" }, op = { root: Yf, header: Jf, toggleableHeader: Qf, title: ep, content: tp, footer: rp }, np = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, ap = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, ip = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, lp = { indent: "1rem" }, sp = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, cp = { root: np, panel: ap, item: ip, submenu: lp, submenuIcon: sp }, dp = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, up = { color: "{form.field.icon.color}" }, fp = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, pp = { gap: "0.5rem" }, gp = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, mp = { meter: dp, icon: up, overlay: fp, content: pp, colorScheme: gp }, hp = { gap: "1.125rem" }, bp = { gap: "0.5rem" }, vp = { root: hp, controls: bp }, yp = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, wp = { padding: "{overlay.popover.padding}" }, kp = { root: yp, content: wp }, Cp = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Sp = { background: "{primary.color}" }, Ep = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, xp = { root: Cp, value: Sp, label: Ep }, Tp = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Lp = { colorScheme: Tp }, Bp = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Ap = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Mp = { root: Bp, icon: Ap }, _p = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dp = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Rp = { root: _p, icon: Dp }, Op = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Hp = { colorScheme: Op }, Np = { transitionDuration: "{transition.duration}" }, $p = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pp = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Ip = { root: Np, bar: $p, colorScheme: Pp }, jp = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Fp = { width: "2.5rem", color: "{form.field.icon.color}" }, zp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Wp = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Vp = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Up = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Kp = { color: "{form.field.icon.color}" }, qp = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Gp = { padding: "{list.option.padding}" }, Xp = { root: jp, dropdown: Fp, overlay: zp, list: Wp, option: Vp, optionGroup: Up, clearIcon: Kp, checkmark: qp, emptyMessage: Gp }, Zp = { borderRadius: "{form.field.border.radius}" }, Yp = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Jp = { root: Zp, colorScheme: Yp }, Qp = { borderRadius: "{content.border.radius}" }, eg = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, tg = { root: Qp, colorScheme: eg }, rg = { transitionDuration: "{transition.duration}" }, og = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, ng = { background: "{primary.color}" }, ag = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ig = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, lg = { root: rg, track: og, range: ng, handle: ag, colorScheme: ig }, sg = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, cg = { root: sg }, dg = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, ug = { root: dg }, fg = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, pg = { background: "{content.border.color}" }, gg = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mg = { root: fg, gutter: pg, handle: gg }, hg = { transitionDuration: "{transition.duration}" }, bg = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, vg = { padding: "0.5rem", gap: "1rem" }, yg = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, wg = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, kg = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Cg = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Sg = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Eg = { root: hg, separator: bg, step: vg, stepHeader: yg, stepTitle: wg, stepNumber: kg, steppanels: Cg, steppanel: Sg }, xg = { transitionDuration: "{transition.duration}" }, Tg = { background: "{content.border.color}" }, Lg = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Bg = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ag = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Mg = { root: xg, separator: Tg, itemLink: Lg, itemLabel: Bg, itemNumber: Ag }, _g = { transitionDuration: "{transition.duration}" }, Dg = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Rg = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Og = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Hg = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Ng = { root: _g, tablist: Dg, item: Rg, itemIcon: Og, activeBar: Hg }, $g = { transitionDuration: "{transition.duration}" }, Pg = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Ig = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, jg = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Fg = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, zg = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Wg = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Vg = { root: $g, tablist: Pg, tab: Ig, tabpanel: jg, navButton: Fg, activeBar: zg, colorScheme: Wg }, Ug = { transitionDuration: "{transition.duration}" }, Kg = { background: "{content.background}", borderColor: "{content.border.color}" }, qg = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Gg = { background: "{content.background}", color: "{content.color}" }, Xg = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, Zg = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Yg = { root: Ug, tabList: Kg, tab: qg, tabPanel: Gg, navButton: Xg, colorScheme: Zg }, Jg = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Qg = { size: "0.75rem" }, em = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, tm = { root: Jg, icon: Qg, colorScheme: em }, rm = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, om = { gap: "0.25rem" }, nm = { margin: "2px 0" }, am = { root: rm, prompt: om, commandResponse: nm }, im = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, lm = { root: im }, sm = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, cm = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, dm = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, um = { mobileIndent: "1rem" }, fm = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, pm = { borderColor: "{content.border.color}" }, gm = { root: sm, list: cm, item: dm, submenu: um, submenuIcon: fm, separator: pm }, mm = { minHeight: "5rem" }, hm = { eventContent: { padding: "1rem 0" } }, bm = { eventContent: { padding: "0 1rem" } }, vm = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, ym = { color: "{content.border.color}", size: "2px" }, wm = { event: mm, horizontal: hm, vertical: bm, eventMarker: vm, eventConnector: ym }, km = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Cm = { size: "1.125rem" }, Sm = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Em = { gap: "0.5rem" }, xm = { fontWeight: "500", fontSize: "1rem" }, Tm = { fontWeight: "500", fontSize: "0.875rem" }, Lm = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Bm = { size: "1rem" }, Am = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Mm = { root: km, icon: Cm, content: Sm, text: Em, summary: xm, detail: Tm, closeButton: Lm, closeIcon: Bm, colorScheme: Am }, _m = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Dm = { disabledColor: "{form.field.disabled.color}" }, Rm = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Om = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, Hm = { root: _m, icon: Dm, content: Rm, colorScheme: Om }, Nm = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, $m = { borderRadius: "50%", size: "1rem" }, Pm = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Im = { root: Nm, handle: $m, colorScheme: Pm }, jm = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Fm = { root: jm }, zm = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Wm = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Vm = { root: zm, colorScheme: Wm }, Um = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Km = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, qm = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Gm = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xm = { size: "2rem" }, Zm = { margin: "0 0 0.5rem 0" }, Ym = { root: Um, node: Km, nodeIcon: qm, nodeToggleButton: Gm, loadingIcon: Xm, filter: Zm }, Jm = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Qm = { width: "2.5rem", color: "{form.field.icon.color}" }, eh = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, th = { padding: "{list.padding}" }, rh = { padding: "{list.option.padding}" }, oh = { borderRadius: "{border.radius.sm}" }, nh = { color: "{form.field.icon.color}" }, ah = { root: Jm, dropdown: Qm, overlay: eh, tree: th, emptyMessage: rh, chip: oh, clearIcon: nh }, ih = { transitionDuration: "{transition.duration}" }, lh = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, sh = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ch = { fontWeight: "600" }, dh = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, uh = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, fh = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, ph = { fontWeight: "600" }, gh = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, mh = { width: "0.5rem" }, hh = { width: "1px", color: "{primary.color}" }, bh = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, vh = { size: "2rem" }, yh = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wh = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, kh = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ch = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Sh = { root: ih, header: lh, headerCell: sh, columnTitle: ch, row: dh, bodyCell: uh, footerCell: fh, columnFooter: ph, footer: gh, columnResizer: mh, resizeIndicator: hh, sortIcon: bh, loadingIcon: vh, nodeToggleButton: yh, paginatorTop: wh, paginatorBottom: kh, colorScheme: Ch }, Eh = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, xh = { loader: Eh }, Th = Object.defineProperty, Lh = Object.defineProperties, Bh = Object.getOwnPropertyDescriptors, cn = Object.getOwnPropertySymbols, Ah = Object.prototype.hasOwnProperty, Mh = Object.prototype.propertyIsEnumerable, dn = (p, d, w) => d in p ? Th(p, d, { enumerable: !0, configurable: !0, writable: !0, value: w }) : p[d] = w, un, _h = (un = ((p, d) => {
  for (var w in d || (d = {})) Ah.call(d, w) && dn(p, w, d[w]);
  if (cn) for (var w of cn(d)) Mh.call(d, w) && dn(p, w, d[w]);
  return p;
})({}, Wl), Lh(un, Bh({ components: { accordion: bl, autocomplete: Ll, avatar: Rl, badge: jl, blockui: Ul, breadcrumb: Xl, button: Jl, card: ns, carousel: ds, cascadeselect: bs, checkbox: ws, chip: Ts, colorpicker: _s, confirmdialog: Os, confirmpopup: Is, contextmenu: Ks, datatable: fc, dataview: yc, datepicker: Ic, dialog: Uc, divider: Zc, dock: Qc, drawer: ad, editor: ud, fieldset: hd, fileupload: Ed, floatlabel: Ad, galleria: Vd, iconfield: Kd, iftalabel: Xd, image: eu, imagecompare: ru, inlinemessage: lu, inplace: du, inputchips: gu, inputgroup: hu, inputnumber: wu, inputotp: Su, inputtext: xu, knob: Mu, listbox: Pu, megamenu: Gu, menu: ef, menubar: sf, message: vf, metergroup: xf, multiselect: Hf, orderlist: Pf, organizationchart: Wf, overlaybadge: Uf, paginator: Zf, panel: op, panelmenu: cp, password: mp, picklist: vp, popover: kp, progressbar: xp, progressspinner: Lp, radiobutton: Mp, rating: Rp, ripple: Hp, scrollpanel: Ip, select: Xp, selectbutton: Jp, skeleton: tg, slider: lg, speeddial: cg, splitbutton: ug, splitter: mg, stepper: Eg, steps: Mg, tabmenu: Ng, tabs: Vg, tabview: Yg, tag: tm, terminal: am, textarea: lm, tieredmenu: gm, timeline: wm, toast: Mm, togglebutton: Hm, toggleswitch: Im, toolbar: Fm, tooltip: Vm, tree: Ym, treeselect: ah, treetable: Sh, virtualscroller: xh } })));
const oo = {
  sendCurrentModel: "/mdnotes/current_model",
  saveContent: "/mdnotes/save"
}, St = {
  showEditor: "endericedragon-show-editor",
  setContent: "endericedragon-set-content"
};
var no = /* @__PURE__ */ ((p) => (p.CKPT = "ckpt", p.LORA = "lora", p.UNKNOWN = "unknown", p))(no || {});
class ao {
  constructor(d, w) {
    Xe(this, "content");
    Xe(this, "rel_file_path");
    this.content = d, this.rel_file_path = w;
  }
  toJSON() {
    return {
      content: this.content,
      rel_file_path: this.rel_file_path
    };
  }
}
async function io(p, d, w) {
  return p.api.fetchApi(d, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(w)
  }).then((C) => C.json());
}
function Lt(p) {
  return Fi() ? (zi(p), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Dh(p) {
  let d = 0, w, C;
  const L = () => {
    d -= 1, C && d <= 0 && (C.stop(), w = void 0, C = void 0);
  };
  return (...N) => (d += 1, C || (C = ji(!0), w = C.run(() => p(...N))), Lt(L), w);
}
const In = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const jn = (p) => p != null, Rh = Object.prototype.toString, Oh = (p) => Rh.call(p) === "[object Object]", lo = () => {
}, fn = /* @__PURE__ */ Hh();
function Hh() {
  var p, d;
  return In && ((p = window == null ? void 0 : window.navigator) == null ? void 0 : p.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((d = window == null ? void 0 : window.navigator) == null ? void 0 : d.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Nh(...p) {
  if (p.length !== 1)
    return Et(...p);
  const d = p[0];
  return typeof d == "function" ? it(Wi(() => ({ get: d, set: lo }))) : Ee(d);
}
function $h(p, d) {
  function w(...C) {
    return new Promise((L, N) => {
      Promise.resolve(p(() => d.apply(this, C), { fn: d, thisArg: this, args: C })).then(L).catch(N);
    });
  }
  return w;
}
function Ph(...p) {
  let d = 0, w, C = !0, L = lo, N, D, g, k, B;
  !Bn(p[0]) && typeof p[0] == "object" ? { delay: D, trailing: g = !0, leading: k = !0, rejectOnCancel: B = !1 } = p[0] : [D, g = !0, k = !0, B = !1] = p;
  const M = () => {
    w && (clearTimeout(w), w = void 0, L(), L = lo);
  };
  return (i) => {
    const b = _e(D), f = Date.now() - d, v = () => N = i();
    return M(), b <= 0 ? (d = Date.now(), v()) : (f > b && (k || !C) ? (d = Date.now(), v()) : g && (N = new Promise((u, T) => {
      L = B ? T : u, w = setTimeout(() => {
        d = Date.now(), C = !0, u(v()), M();
      }, Math.max(0, b - f));
    })), !k && !w && (w = setTimeout(() => C = !0, b)), C = !1, N);
  };
}
function Qt(p) {
  return Array.isArray(p) ? p : [p];
}
// @__NO_SIDE_EFFECTS__
function pn(p, d = 200, w = !1, C = !0, L = !1) {
  return $h(
    Ph(d, w, C, L),
    p
  );
}
function Ih(p, d, w) {
  return Fe(
    p,
    d,
    {
      ...w,
      immediate: !0
    }
  );
}
const go = In ? window : void 0;
function jt(p) {
  var d;
  const w = _e(p);
  return (d = w == null ? void 0 : w.$el) != null ? d : w;
}
function mo(...p) {
  const d = [], w = () => {
    d.forEach((g) => g()), d.length = 0;
  }, C = (g, k, B, M) => (g.addEventListener(k, B, M), () => g.removeEventListener(k, B, M)), L = le(() => {
    const g = Qt(_e(p[0])).filter((k) => k != null);
    return g.every((k) => typeof k != "string") ? g : void 0;
  }), N = Ih(
    () => {
      var g, k;
      return [
        (k = (g = L.value) == null ? void 0 : g.map((B) => jt(B))) != null ? k : [go].filter((B) => B != null),
        Qt(_e(L.value ? p[1] : p[0])),
        Qt(Y(L.value ? p[2] : p[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        _e(L.value ? p[3] : p[2])
      ];
    },
    ([g, k, B, M]) => {
      if (w(), !(g != null && g.length) || !(k != null && k.length) || !(B != null && B.length))
        return;
      const c = Oh(M) ? { ...M } : M;
      d.push(
        ...g.flatMap(
          (i) => k.flatMap(
            (b) => B.map((f) => C(i, b, f, c))
          )
        )
      );
    },
    { flush: "post" }
  ), D = () => {
    N(), w();
  };
  return Lt(w), D;
}
// @__NO_SIDE_EFFECTS__
function jh() {
  const p = tr(!1), d = rr();
  return d && Tt(() => {
    p.value = !0;
  }, d), p;
}
// @__NO_SIDE_EFFECTS__
function Fh(p) {
  const d = /* @__PURE__ */ jh();
  return le(() => (d.value, !!p()));
}
function zh(p, d, w = {}) {
  const { window: C = go, ...L } = w;
  let N;
  const D = /* @__PURE__ */ Fh(() => C && "MutationObserver" in C), g = () => {
    N && (N.disconnect(), N = void 0);
  }, k = le(() => {
    const i = _e(p), b = Qt(i).map(jt).filter(jn);
    return new Set(b);
  }), B = Fe(
    () => k.value,
    (i) => {
      g(), D.value && i.size && (N = new MutationObserver(d), i.forEach((b) => N.observe(b, L)));
    },
    { immediate: !0, flush: "post" }
  ), M = () => N == null ? void 0 : N.takeRecords(), c = () => {
    B(), g();
  };
  return Lt(c), {
    isSupported: D,
    stop: c,
    takeRecords: M
  };
}
function Wh(p) {
  return typeof p == "function" ? p : typeof p == "string" ? (d) => d.key === p : Array.isArray(p) ? (d) => p.includes(d.key) : () => !0;
}
function Fn(...p) {
  let d, w, C = {};
  p.length === 3 ? (d = p[0], w = p[1], C = p[2]) : p.length === 2 ? typeof p[1] == "object" ? (d = !0, w = p[0], C = p[1]) : (d = p[0], w = p[1]) : (d = !0, w = p[0]);
  const {
    target: L = go,
    eventName: N = "keydown",
    passive: D = !1,
    dedupe: g = !1
  } = C, k = Wh(d);
  return mo(L, N, (M) => {
    M.repeat && _e(g) || k(M) && w(M);
  }, D);
}
const mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hr = "__vueuse_ssr_handlers__", Vh = /* @__PURE__ */ Uh();
function Uh() {
  return hr in mr || (mr[hr] = mr[hr] || {}), mr[hr];
}
function Kh(p, d) {
  return Vh[p] || d;
}
function Zr(p) {
  return typeof Window < "u" && p instanceof Window ? p.document.documentElement : typeof Document < "u" && p instanceof Document ? p.documentElement : p;
}
function zn(p) {
  const d = window.getComputedStyle(p);
  if (d.overflowX === "scroll" || d.overflowY === "scroll" || d.overflowX === "auto" && p.clientWidth < p.scrollWidth || d.overflowY === "auto" && p.clientHeight < p.scrollHeight)
    return !0;
  {
    const w = p.parentNode;
    return !w || w.tagName === "BODY" ? !1 : zn(w);
  }
}
function qh(p) {
  const d = p || window.event, w = d.target;
  return zn(w) ? !1 : d.touches.length > 1 ? !0 : (d.preventDefault && d.preventDefault(), !1);
}
const Yr = /* @__PURE__ */ new WeakMap();
function Gh(p, d = !1) {
  const w = tr(d);
  let C = null, L = "";
  Fe(Nh(p), (g) => {
    const k = Zr(_e(g));
    if (k) {
      const B = k;
      if (Yr.get(B) || Yr.set(B, B.style.overflow), B.style.overflow !== "hidden" && (L = B.style.overflow), B.style.overflow === "hidden")
        return w.value = !0;
      if (w.value)
        return B.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const N = () => {
    const g = Zr(_e(p));
    !g || w.value || (fn && (C = mo(
      g,
      "touchmove",
      (k) => {
        qh(k);
      },
      { passive: !1 }
    )), g.style.overflow = "hidden", w.value = !0);
  }, D = () => {
    const g = Zr(_e(p));
    !g || !w.value || (fn && (C == null || C()), g.style.overflow = L, Yr.delete(g), w.value = !1);
  };
  return Lt(D), le({
    get() {
      return w.value;
    },
    set(g) {
      g ? N() : D();
    }
  });
}
const Wn = {
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
}, Xh = Object.freeze(
  Object.keys(Wn)
), Vn = {
  vBColorMode: "/directives/BColorMode",
  vBModal: "/directives/BModal",
  vBPopover: "/directives/BPopover",
  vBScrollspy: "/directives/BScrollspy",
  vBToggle: "/directives/BToggle",
  vBTooltip: "/directives/BTooltip"
}, Zh = Object.freeze(
  Object.keys(Vn)
), Yh = {
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
  Object.keys(Yh)
);
const Jh = ft({
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
  setup(p, { slots: d }) {
    return () => {
      var w, C;
      return p.to ? An(Vi, { to: p.to, disabled: p.disabled || !p.to }, [(C = d.default) == null ? void 0 : C.call(d, {})]) : (w = d.default) == null ? void 0 : w.call(d, {});
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
  setup(p, { slots: d, attrs: w }) {
    return () => {
      var C, L;
      return p.skip ? (C = d.default) == null ? void 0 : C.call(d, {}) : An(p.tag, { ...w }, [(L = d.default) == null ? void 0 : L.call(d, {})]);
    };
  }
});
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Un = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Er = /* @__PURE__ */ Un.join(","), Kn = typeof Element > "u", xt = Kn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, xr = !Kn && Element.prototype.getRootNode ? function(p) {
  var d;
  return p == null || (d = p.getRootNode) === null || d === void 0 ? void 0 : d.call(p);
} : function(p) {
  return p == null ? void 0 : p.ownerDocument;
}, Tr = function p(d, w) {
  var C;
  w === void 0 && (w = !0);
  var L = d == null || (C = d.getAttribute) === null || C === void 0 ? void 0 : C.call(d, "inert"), N = L === "" || L === "true", D = N || w && d && p(d.parentNode);
  return D;
}, Qh = function(d) {
  var w, C = d == null || (w = d.getAttribute) === null || w === void 0 ? void 0 : w.call(d, "contenteditable");
  return C === "" || C === "true";
}, qn = function(d, w, C) {
  if (Tr(d))
    return [];
  var L = Array.prototype.slice.apply(d.querySelectorAll(Er));
  return w && xt.call(d, Er) && L.unshift(d), L = L.filter(C), L;
}, Gn = function p(d, w, C) {
  for (var L = [], N = Array.from(d); N.length; ) {
    var D = N.shift();
    if (!Tr(D, !1))
      if (D.tagName === "SLOT") {
        var g = D.assignedElements(), k = g.length ? g : D.children, B = p(k, !0, C);
        C.flatten ? L.push.apply(L, B) : L.push({
          scopeParent: D,
          candidates: B
        });
      } else {
        var M = xt.call(D, Er);
        M && C.filter(D) && (w || !d.includes(D)) && L.push(D);
        var c = D.shadowRoot || // check for an undisclosed shadow
        typeof C.getShadowRoot == "function" && C.getShadowRoot(D), i = !Tr(c, !1) && (!C.shadowRootFilter || C.shadowRootFilter(D));
        if (c && i) {
          var b = p(c === !0 ? D.children : c.children, !0, C);
          C.flatten ? L.push.apply(L, b) : L.push({
            scopeParent: D,
            candidates: b
          });
        } else
          N.unshift.apply(N, D.children);
      }
  }
  return L;
}, Xn = function(d) {
  return !isNaN(parseInt(d.getAttribute("tabindex"), 10));
}, Ct = function(d) {
  if (!d)
    throw new Error("No node provided");
  return d.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(d.tagName) || Qh(d)) && !Xn(d) ? 0 : d.tabIndex;
}, e0 = function(d, w) {
  var C = Ct(d);
  return C < 0 && w && !Xn(d) ? 0 : C;
}, t0 = function(d, w) {
  return d.tabIndex === w.tabIndex ? d.documentOrder - w.documentOrder : d.tabIndex - w.tabIndex;
}, Zn = function(d) {
  return d.tagName === "INPUT";
}, r0 = function(d) {
  return Zn(d) && d.type === "hidden";
}, o0 = function(d) {
  var w = d.tagName === "DETAILS" && Array.prototype.slice.apply(d.children).some(function(C) {
    return C.tagName === "SUMMARY";
  });
  return w;
}, n0 = function(d, w) {
  for (var C = 0; C < d.length; C++)
    if (d[C].checked && d[C].form === w)
      return d[C];
}, a0 = function(d) {
  if (!d.name)
    return !0;
  var w = d.form || xr(d), C = function(g) {
    return w.querySelectorAll('input[type="radio"][name="' + g + '"]');
  }, L;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    L = C(window.CSS.escape(d.name));
  else
    try {
      L = C(d.name);
    } catch (D) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", D.message), !1;
    }
  var N = n0(L, d.form);
  return !N || N === d;
}, i0 = function(d) {
  return Zn(d) && d.type === "radio";
}, l0 = function(d) {
  return i0(d) && !a0(d);
}, s0 = function(d) {
  var w, C = d && xr(d), L = (w = C) === null || w === void 0 ? void 0 : w.host, N = !1;
  if (C && C !== d) {
    var D, g, k;
    for (N = !!((D = L) !== null && D !== void 0 && (g = D.ownerDocument) !== null && g !== void 0 && g.contains(L) || d != null && (k = d.ownerDocument) !== null && k !== void 0 && k.contains(d)); !N && L; ) {
      var B, M, c;
      C = xr(L), L = (B = C) === null || B === void 0 ? void 0 : B.host, N = !!((M = L) !== null && M !== void 0 && (c = M.ownerDocument) !== null && c !== void 0 && c.contains(L));
    }
  }
  return N;
}, gn = function(d) {
  var w = d.getBoundingClientRect(), C = w.width, L = w.height;
  return C === 0 && L === 0;
}, c0 = function(d, w) {
  var C = w.displayCheck, L = w.getShadowRoot;
  if (getComputedStyle(d).visibility === "hidden")
    return !0;
  var N = xt.call(d, "details>summary:first-of-type"), D = N ? d.parentElement : d;
  if (xt.call(D, "details:not([open]) *"))
    return !0;
  if (!C || C === "full" || C === "legacy-full") {
    if (typeof L == "function") {
      for (var g = d; d; ) {
        var k = d.parentElement, B = xr(d);
        if (k && !k.shadowRoot && L(k) === !0)
          return gn(d);
        d.assignedSlot ? d = d.assignedSlot : !k && B !== d.ownerDocument ? d = B.host : d = k;
      }
      d = g;
    }
    if (s0(d))
      return !d.getClientRects().length;
    if (C !== "legacy-full")
      return !0;
  } else if (C === "non-zero-area")
    return gn(d);
  return !1;
}, d0 = function(d) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(d.tagName))
    for (var w = d.parentElement; w; ) {
      if (w.tagName === "FIELDSET" && w.disabled) {
        for (var C = 0; C < w.children.length; C++) {
          var L = w.children.item(C);
          if (L.tagName === "LEGEND")
            return xt.call(w, "fieldset[disabled] *") ? !0 : !L.contains(d);
        }
        return !0;
      }
      w = w.parentElement;
    }
  return !1;
}, Lr = function(d, w) {
  return !(w.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Tr(w) || r0(w) || c0(w, d) || // For a details element with a summary, the summary element gets the focus
  o0(w) || d0(w));
}, so = function(d, w) {
  return !(l0(w) || Ct(w) < 0 || !Lr(d, w));
}, u0 = function(d) {
  var w = parseInt(d.getAttribute("tabindex"), 10);
  return !!(isNaN(w) || w >= 0);
}, f0 = function p(d) {
  var w = [], C = [];
  return d.forEach(function(L, N) {
    var D = !!L.scopeParent, g = D ? L.scopeParent : L, k = e0(g, D), B = D ? p(L.candidates) : g;
    k === 0 ? D ? w.push.apply(w, B) : w.push(g) : C.push({
      documentOrder: N,
      tabIndex: k,
      item: L,
      isScope: D,
      content: B
    });
  }), C.sort(t0).reduce(function(L, N) {
    return N.isScope ? L.push.apply(L, N.content) : L.push(N.content), L;
  }, []).concat(w);
}, p0 = function(d, w) {
  w = w || {};
  var C;
  return w.getShadowRoot ? C = Gn([d], w.includeContainer, {
    filter: so.bind(null, w),
    flatten: !1,
    getShadowRoot: w.getShadowRoot,
    shadowRootFilter: u0
  }) : C = qn(d, w.includeContainer, so.bind(null, w)), f0(C);
}, g0 = function(d, w) {
  w = w || {};
  var C;
  return w.getShadowRoot ? C = Gn([d], w.includeContainer, {
    filter: Lr.bind(null, w),
    flatten: !0,
    getShadowRoot: w.getShadowRoot
  }) : C = qn(d, w.includeContainer, Lr.bind(null, w)), C;
}, Ht = function(d, w) {
  if (w = w || {}, !d)
    throw new Error("No node provided");
  return xt.call(d, Er) === !1 ? !1 : so(w, d);
}, m0 = /* @__PURE__ */ Un.concat("iframe").join(","), Jr = function(d, w) {
  if (w = w || {}, !d)
    throw new Error("No node provided");
  return xt.call(d, m0) === !1 ? !1 : Lr(w, d);
};
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function co(p, d) {
  (d == null || d > p.length) && (d = p.length);
  for (var w = 0, C = Array(d); w < d; w++) C[w] = p[w];
  return C;
}
function h0(p) {
  if (Array.isArray(p)) return co(p);
}
function b0(p, d, w) {
  return (d = C0(d)) in p ? Object.defineProperty(p, d, {
    value: w,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : p[d] = w, p;
}
function v0(p) {
  if (typeof Symbol < "u" && p[Symbol.iterator] != null || p["@@iterator"] != null) return Array.from(p);
}
function y0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mn(p, d) {
  var w = Object.keys(p);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(p);
    d && (C = C.filter(function(L) {
      return Object.getOwnPropertyDescriptor(p, L).enumerable;
    })), w.push.apply(w, C);
  }
  return w;
}
function hn(p) {
  for (var d = 1; d < arguments.length; d++) {
    var w = arguments[d] != null ? arguments[d] : {};
    d % 2 ? mn(Object(w), !0).forEach(function(C) {
      b0(p, C, w[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(w)) : mn(Object(w)).forEach(function(C) {
      Object.defineProperty(p, C, Object.getOwnPropertyDescriptor(w, C));
    });
  }
  return p;
}
function w0(p) {
  return h0(p) || v0(p) || S0(p) || y0();
}
function k0(p, d) {
  if (typeof p != "object" || !p) return p;
  var w = p[Symbol.toPrimitive];
  if (w !== void 0) {
    var C = w.call(p, d);
    if (typeof C != "object") return C;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (d === "string" ? String : Number)(p);
}
function C0(p) {
  var d = k0(p, "string");
  return typeof d == "symbol" ? d : d + "";
}
function S0(p, d) {
  if (p) {
    if (typeof p == "string") return co(p, d);
    var w = {}.toString.call(p).slice(8, -1);
    return w === "Object" && p.constructor && (w = p.constructor.name), w === "Map" || w === "Set" ? Array.from(p) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? co(p, d) : void 0;
  }
}
var bn = {
  activateTrap: function(d, w) {
    if (d.length > 0) {
      var C = d[d.length - 1];
      C !== w && C._setPausedState(!0);
    }
    var L = d.indexOf(w);
    L === -1 || d.splice(L, 1), d.push(w);
  },
  deactivateTrap: function(d, w) {
    var C = d.indexOf(w);
    C !== -1 && d.splice(C, 1), d.length > 0 && !d[d.length - 1]._isManuallyPaused() && d[d.length - 1]._setPausedState(!1);
  }
}, E0 = function(d) {
  return d.tagName && d.tagName.toLowerCase() === "input" && typeof d.select == "function";
}, x0 = function(d) {
  return (d == null ? void 0 : d.key) === "Escape" || (d == null ? void 0 : d.key) === "Esc" || (d == null ? void 0 : d.keyCode) === 27;
}, er = function(d) {
  return (d == null ? void 0 : d.key) === "Tab" || (d == null ? void 0 : d.keyCode) === 9;
}, T0 = function(d) {
  return er(d) && !d.shiftKey;
}, L0 = function(d) {
  return er(d) && d.shiftKey;
}, vn = function(d) {
  return setTimeout(d, 0);
}, Yt = function(d) {
  for (var w = arguments.length, C = new Array(w > 1 ? w - 1 : 0), L = 1; L < w; L++)
    C[L - 1] = arguments[L];
  return typeof d == "function" ? d.apply(void 0, C) : d;
}, br = function(d) {
  return d.target.shadowRoot && typeof d.composedPath == "function" ? d.composedPath()[0] : d.target;
}, B0 = [], A0 = function(d, w) {
  var C = (w == null ? void 0 : w.document) || document, L = (w == null ? void 0 : w.trapStack) || B0, N = hn({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: T0,
    isKeyBackward: L0
  }, w), D = {
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
  }, g, k = function(P, j, Z) {
    return P && P[j] !== void 0 ? P[j] : N[Z || j];
  }, B = function(P, j) {
    var Z = typeof (j == null ? void 0 : j.composedPath) == "function" ? j.composedPath() : void 0;
    return D.containerGroups.findIndex(function(ne) {
      var ce = ne.container, fe = ne.tabbableNodes;
      return ce.contains(P) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (Z == null ? void 0 : Z.includes(ce)) || fe.find(function(pe) {
        return pe === P;
      });
    });
  }, M = function(P) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Z = j.hasFallback, ne = Z === void 0 ? !1 : Z, ce = j.params, fe = ce === void 0 ? [] : ce, pe = N[P];
    if (typeof pe == "function" && (pe = pe.apply(void 0, w0(fe))), pe === !0 && (pe = void 0), !pe) {
      if (pe === void 0 || pe === !1)
        return pe;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var ve = pe;
    if (typeof pe == "string") {
      try {
        ve = C.querySelector(pe);
      } catch (he) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(he.message, '"'));
      }
      if (!ve && !ne)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return ve;
  }, c = function() {
    var P = M("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !Jr(P, N.tabbableOptions))
      if (B(C.activeElement) >= 0)
        P = C.activeElement;
      else {
        var j = D.tabbableGroups[0], Z = j && j.firstTabbableNode;
        P = Z || M("fallbackFocus");
      }
    else P === null && (P = M("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, i = function() {
    if (D.containerGroups = D.containers.map(function(P) {
      var j = p0(P, N.tabbableOptions), Z = g0(P, N.tabbableOptions), ne = j.length > 0 ? j[0] : void 0, ce = j.length > 0 ? j[j.length - 1] : void 0, fe = Z.find(function(he) {
        return Ht(he);
      }), pe = Z.slice().reverse().find(function(he) {
        return Ht(he);
      }), ve = !!j.find(function(he) {
        return Ct(he) > 0;
      });
      return {
        container: P,
        tabbableNodes: j,
        focusableNodes: Z,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ve,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ne,
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
        firstDomTabbableNode: fe,
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
        nextTabbableNode: function(R) {
          var Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Pe = j.indexOf(R);
          return Pe < 0 ? Re ? Z.slice(Z.indexOf(R) + 1).find(function(We) {
            return Ht(We);
          }) : Z.slice(0, Z.indexOf(R)).reverse().find(function(We) {
            return Ht(We);
          }) : j[Pe + (Re ? 1 : -1)];
        }
      };
    }), D.tabbableGroups = D.containerGroups.filter(function(P) {
      return P.tabbableNodes.length > 0;
    }), D.tabbableGroups.length <= 0 && !M("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (D.containerGroups.find(function(P) {
      return P.posTabIndexesFound;
    }) && D.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, b = function(P) {
    var j = P.activeElement;
    if (j)
      return j.shadowRoot && j.shadowRoot.activeElement !== null ? b(j.shadowRoot) : j;
  }, f = function(P) {
    if (P !== !1 && P !== b(document)) {
      if (!P || !P.focus) {
        f(c());
        return;
      }
      P.focus({
        preventScroll: !!N.preventScroll
      }), D.mostRecentlyFocusedNode = P, E0(P) && P.select();
    }
  }, v = function(P) {
    var j = M("setReturnFocus", {
      params: [P]
    });
    return j || (j === !1 ? !1 : P);
  }, u = function(P) {
    var j = P.target, Z = P.event, ne = P.isBackward, ce = ne === void 0 ? !1 : ne;
    j = j || br(Z), i();
    var fe = null;
    if (D.tabbableGroups.length > 0) {
      var pe = B(j, Z), ve = pe >= 0 ? D.containerGroups[pe] : void 0;
      if (pe < 0)
        ce ? fe = D.tabbableGroups[D.tabbableGroups.length - 1].lastTabbableNode : fe = D.tabbableGroups[0].firstTabbableNode;
      else if (ce) {
        var he = D.tabbableGroups.findIndex(function(U) {
          var we = U.firstTabbableNode;
          return j === we;
        });
        if (he < 0 && (ve.container === j || Jr(j, N.tabbableOptions) && !Ht(j, N.tabbableOptions) && !ve.nextTabbableNode(j, !1)) && (he = pe), he >= 0) {
          var R = he === 0 ? D.tabbableGroups.length - 1 : he - 1, Re = D.tabbableGroups[R];
          fe = Ct(j) >= 0 ? Re.lastTabbableNode : Re.lastDomTabbableNode;
        } else er(Z) || (fe = ve.nextTabbableNode(j, !1));
      } else {
        var Pe = D.tabbableGroups.findIndex(function(U) {
          var we = U.lastTabbableNode;
          return j === we;
        });
        if (Pe < 0 && (ve.container === j || Jr(j, N.tabbableOptions) && !Ht(j, N.tabbableOptions) && !ve.nextTabbableNode(j)) && (Pe = pe), Pe >= 0) {
          var We = Pe === D.tabbableGroups.length - 1 ? 0 : Pe + 1, ze = D.tabbableGroups[We];
          fe = Ct(j) >= 0 ? ze.firstTabbableNode : ze.firstDomTabbableNode;
        } else er(Z) || (fe = ve.nextTabbableNode(j));
      }
    } else
      fe = M("fallbackFocus");
    return fe;
  }, T = function(P) {
    var j = br(P);
    if (!(B(j, P) >= 0)) {
      if (Yt(N.clickOutsideDeactivates, P)) {
        g.deactivate({
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
      Yt(N.allowOutsideClick, P) || P.preventDefault();
    }
  }, x = function(P) {
    var j = br(P), Z = B(j, P) >= 0;
    if (Z || j instanceof Document)
      Z && (D.mostRecentlyFocusedNode = j);
    else {
      P.stopImmediatePropagation();
      var ne, ce = !0;
      if (D.mostRecentlyFocusedNode)
        if (Ct(D.mostRecentlyFocusedNode) > 0) {
          var fe = B(D.mostRecentlyFocusedNode), pe = D.containerGroups[fe].tabbableNodes;
          if (pe.length > 0) {
            var ve = pe.findIndex(function(he) {
              return he === D.mostRecentlyFocusedNode;
            });
            ve >= 0 && (N.isKeyForward(D.recentNavEvent) ? ve + 1 < pe.length && (ne = pe[ve + 1], ce = !1) : ve - 1 >= 0 && (ne = pe[ve - 1], ce = !1));
          }
        } else
          D.containerGroups.some(function(he) {
            return he.tabbableNodes.some(function(R) {
              return Ct(R) > 0;
            });
          }) || (ce = !1);
      else
        ce = !1;
      ce && (ne = u({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: D.mostRecentlyFocusedNode,
        isBackward: N.isKeyBackward(D.recentNavEvent)
      })), f(ne || D.mostRecentlyFocusedNode || c());
    }
    D.recentNavEvent = void 0;
  }, E = function(P) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    D.recentNavEvent = P;
    var Z = u({
      event: P,
      isBackward: j
    });
    Z && (er(P) && P.preventDefault(), f(Z));
  }, S = function(P) {
    (N.isKeyForward(P) || N.isKeyBackward(P)) && E(P, N.isKeyBackward(P));
  }, l = function(P) {
    x0(P) && Yt(N.escapeDeactivates, P) !== !1 && (P.preventDefault(), g.deactivate());
  }, A = function(P) {
    var j = br(P);
    B(j, P) >= 0 || Yt(N.clickOutsideDeactivates, P) || Yt(N.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, $ = function() {
    if (D.active)
      return bn.activateTrap(L, g), D.delayInitialFocusTimer = N.delayInitialFocus ? vn(function() {
        f(c());
      }) : f(c()), C.addEventListener("focusin", x, !0), C.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), C.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), C.addEventListener("click", A, {
        capture: !0,
        passive: !1
      }), C.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), C.addEventListener("keydown", l), g;
  }, I = function() {
    if (D.active)
      return C.removeEventListener("focusin", x, !0), C.removeEventListener("mousedown", T, !0), C.removeEventListener("touchstart", T, !0), C.removeEventListener("click", A, !0), C.removeEventListener("keydown", S, !0), C.removeEventListener("keydown", l), g;
  }, O = function(P) {
    var j = P.some(function(Z) {
      var ne = Array.from(Z.removedNodes);
      return ne.some(function(ce) {
        return ce === D.mostRecentlyFocusedNode;
      });
    });
    j && f(c());
  }, W = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(O) : void 0, Q = function() {
    W && (W.disconnect(), D.active && !D.paused && D.containers.map(function(P) {
      W.observe(P, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return g = {
    get active() {
      return D.active;
    },
    get paused() {
      return D.paused;
    },
    activate: function(P) {
      if (D.active)
        return this;
      var j = k(P, "onActivate"), Z = k(P, "onPostActivate"), ne = k(P, "checkCanFocusTrap");
      ne || i(), D.active = !0, D.paused = !1, D.nodeFocusedBeforeActivation = b(C), j == null || j();
      var ce = function() {
        ne && i(), $(), Q(), Z == null || Z();
      };
      return ne ? (ne(D.containers.concat()).then(ce, ce), this) : (ce(), this);
    },
    deactivate: function(P) {
      if (!D.active)
        return this;
      var j = hn({
        onDeactivate: N.onDeactivate,
        onPostDeactivate: N.onPostDeactivate,
        checkCanReturnFocus: N.checkCanReturnFocus
      }, P);
      clearTimeout(D.delayInitialFocusTimer), D.delayInitialFocusTimer = void 0, I(), D.active = !1, D.paused = !1, Q(), bn.deactivateTrap(L, g);
      var Z = k(j, "onDeactivate"), ne = k(j, "onPostDeactivate"), ce = k(j, "checkCanReturnFocus"), fe = k(j, "returnFocus", "returnFocusOnDeactivate");
      Z == null || Z();
      var pe = function() {
        vn(function() {
          fe && f(v(D.nodeFocusedBeforeActivation)), ne == null || ne();
        });
      };
      return fe && ce ? (ce(v(D.nodeFocusedBeforeActivation)).then(pe, pe), this) : (pe(), this);
    },
    pause: function(P) {
      return D.active ? (D.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return D.active ? (D.manuallyPaused = !1, L[L.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var j = [].concat(P).filter(Boolean);
      return D.containers = j.map(function(Z) {
        return typeof Z == "string" ? C.querySelector(Z) : Z;
      }), D.active && i(), Q(), this;
    }
  }, Object.defineProperties(g, {
    _isManuallyPaused: {
      value: function() {
        return D.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, j) {
        if (D.paused === P)
          return this;
        if (D.paused = P, P) {
          var Z = k(j, "onPause"), ne = k(j, "onPostPause");
          Z == null || Z(), I(), Q(), ne == null || ne();
        } else {
          var ce = k(j, "onUnpause"), fe = k(j, "onPostUnpause");
          ce == null || ce(), i(), $(), Q(), fe == null || fe();
        }
        return this;
      }
    }
  }), g.updateContainerElements(d), g;
};
function M0(p, d = {}) {
  let w;
  const { immediate: C, ...L } = d, N = tr(!1), D = tr(!1), g = (i) => w && w.activate(i), k = (i) => w && w.deactivate(i), B = () => {
    w && (w.pause(), D.value = !0);
  }, M = () => {
    w && (w.unpause(), D.value = !1);
  }, c = le(() => {
    const i = _e(p);
    return Qt(i).map((b) => {
      const f = _e(b);
      return typeof f == "string" ? f : jt(f);
    }).filter(jn);
  });
  return Fe(
    c,
    (i) => {
      if (i.length)
        if (!w)
          w = A0(i, {
            ...L,
            onActivate() {
              N.value = !0, d.onActivate && d.onActivate();
            },
            onDeactivate() {
              N.value = !1, d.onDeactivate && d.onDeactivate();
            }
          }), C && g();
        else {
          const b = w == null ? void 0 : w.active;
          w == null || w.updateContainerElements(i), !b && C && g();
        }
    },
    { flush: "post" }
  ), Lt(() => k()), {
    hasFocus: N,
    isPaused: D,
    activate: g,
    deactivate: k,
    pause: B,
    unpause: M
  };
}
const _0 = ({
  element: p,
  isActive: d,
  noTrap: w,
  fallbackFocus: C,
  focus: L
}, N = {
  allowOutsideClick: !0,
  fallbackFocus: C.ref.value ?? void 0,
  escapeDeactivates: !1,
  clickOutsideDeactivates: !1,
  initialFocus: L
}) => {
  const D = it(Et(d)), g = it(Et(w)), k = () => {
    var i;
    const c = (i = p.value) == null ? void 0 : i.querySelectorAll(
      `a, button, input, select, textarea, [tabindex]:not([tabindex="-1"]):not(.${C.classSelector})`
    );
    return !(c != null && c.length);
  }, B = Ee(!1);
  Tt(() => {
    B.value = k(), zh(
      p,
      () => {
        B.value = k();
      },
      { childList: !0, subtree: !0 }
    );
  });
  const M = M0(p, N);
  return Fe(D, async (c) => {
    c && g.value === !1 ? M.activate() : M.deactivate();
  }), Fe(g, (c) => {
    c === !0 && M.deactivate();
  }), {
    needsFallback: it(B)
  };
}, D0 = /* @__PURE__ */ Dh(Gh);
let vr = "";
const wt = /* @__PURE__ */ new Map(), R0 = (p, d) => {
  const w = it(Et(p)), C = Mn(), L = le(() => !_e(d)), N = D0(
    typeof document < "u" ? document.body : null,
    w.value && L.value
  );
  Tt(() => {
    typeof document > "u" || (wt.set(C, !1), Fe(
      [w, L],
      ([D, g]) => {
        const k = window.innerWidth - document.documentElement.clientWidth, B = Array.from(wt.values()).some((i) => i === !0), M = D && g;
        wt.set(C, M), M && !B && !N.value && (N.value = !0, k > 0 && (vr = document.body.style.paddingRight, document.body.style.paddingRight = `${k + vr}px`));
        const c = Array.from(wt.values()).some((i) => i === !0);
        B && !c && (wt.set(C, !1), N.value = !1, document.body.style.paddingRight = vr);
      },
      { immediate: !0 }
    ));
  }), uo(() => {
    wt.delete(C), Array.from(wt.values()).some((g) => g === !0) || (document.body.style.paddingRight = vr, N.value = !1);
  });
}, Yn = (p) => ((p == null ? void 0 : p()) ?? []).length === 0, yn = (p) => {
  if (typeof window > "u") return 1055;
  const d = p ?? document.body, w = window.getComputedStyle(d).getPropertyValue("--bs-modal-zindex").trim(), C = Number.parseInt(w, 10);
  return Number.isFinite(C) ? C : 1055;
};
function O0(p, d = Jn("injectSelf")) {
  const { provides: w } = d;
  if (w && p in w)
    return w[p];
}
function Jn(p, d) {
  const w = rr();
  if (!w)
    throw new Error(`[Bvn] ${p} must be called from inside a setup function`);
  return w;
}
const H0 = (p = "") => p.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase(), wn = (p) => p !== null && typeof p == "object" && !Array.isArray(p);
function Qn(p = {}, d = {}, w) {
  const C = {};
  for (const L in p)
    C[L] = p[L];
  for (const L in d) {
    const N = p[L], D = d[L];
    if (wn(N) && wn(D)) {
      C[L] = Qn(N, D);
      continue;
    }
    C[L] = D;
  }
  return C;
}
const N0 = (p, d) => {
  var w, C;
  return typeof ((w = p.props) == null ? void 0 : w[d]) < "u" || typeof ((C = p.props) == null ? void 0 : C[H0(d)]) < "u";
};
function $0(p = {}, d) {
  const w = It(yr, Ee({})), C = Jn("useDefaults");
  if (d = d ?? C.type.name ?? C.type.__name, !d)
    throw new Error("[Bvn] Could not determine component name");
  const L = le(() => {
    var k;
    return (k = w.value) == null ? void 0 : k[p._as ?? d];
  }), N = new Proxy(p, {
    get(k, B) {
      var c, i, b, f;
      const M = Reflect.get(k, B);
      return B === "class" || B === "style" ? [(c = L.value) == null ? void 0 : c[B], M].filter((v) => v != null) : typeof B == "string" && !N0(C.vnode, B) ? ((i = L.value) == null ? void 0 : i[B]) ?? ((f = (b = w.value) == null ? void 0 : b.global) == null ? void 0 : f[B]) ?? M : M;
    }
  }), D = tr();
  Ui(() => {
    if (L.value) {
      const k = Object.entries(L.value).filter(
        ([B]) => B.startsWith(B[0].toUpperCase())
      );
      D.value = k.length ? Object.fromEntries(k) : void 0;
    } else
      D.value = void 0;
  });
  function g() {
    const k = O0(yr, C);
    _n(
      yr,
      le(
        () => D.value ? Qn((k == null ? void 0 : k.value) ?? {}, D.value) : k == null ? void 0 : k.value
      )
    );
  }
  return { props: N, provideSubDefaults: g };
}
function nr(p, d) {
  const { props: w, provideSubDefaults: C } = $0(p, d);
  return C(), w;
}
const wr = (p) => le(() => {
  let d = _e(p);
  return d = {
    variant: d.variant ?? null,
    bgVariant: d.bgVariant ?? null,
    textVariant: d.textVariant ?? null,
    borderVariant: d.borderVariant ?? null
  }, {
    [`text-bg-${d.variant}`]: d.variant !== null,
    [`text-${d.textVariant}`]: d.textVariant !== null,
    [`bg-${d.bgVariant}`]: d.bgVariant !== null,
    [`border-${d.borderVariant}`]: d.borderVariant !== null
  };
}), P0 = {
  key: 0,
  class: "visually-hidden"
}, I0 = /* @__PURE__ */ ft({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: Boolean, default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(p) {
    const w = nr(p, "BSpinner"), C = Dn(), L = wr(
      le(() => ({
        textVariant: w.variant
      }))
    ), N = le(() => [
      `spinner-${w.type}`,
      L.value,
      {
        [`spinner-${w.type}-sm`]: w.small
      }
    ]), D = le(() => !Yn(C.label));
    return (g, k) => (Ne(), tt(or(Y(w).tag), {
      class: dt(N.value),
      role: Y(w).label || D.value ? Y(w).role : null,
      "aria-hidden": Y(w).label || D.value ? null : !0
    }, {
      default: rt(() => [
        Y(w).label || D.value ? (Ne(), ut("span", P0, [
          Ze(g.$slots, "label", {}, () => [
            $t(Pt(Y(w).label), 1)
          ])
        ])) : et("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), j0 = (p, d) => [...d].reduce(
  (w, C) => (w[C] = p[C], w),
  {}
), F0 = (p) => p.replace(/-./g, (d) => d.charAt(1).toUpperCase()).replace(/\b\w/g, (d) => d.toUpperCase()).replace(/\s+/g, ""), z0 = (p) => !!(p.href || p.to), W0 = (p, d) => {
  const w = it(Et(d)), C = it(Et(p)), L = le(() => z0(C.value)), N = le(
    () => L.value ? j0(
      C.value,
      w.value ?? [
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
  return { computedLink: L, computedLinkProps: N };
}, V0 = ({
  to: p,
  disabled: d,
  href: w,
  replace: C,
  routerComponentName: L
}) => {
  var A, $, I, O, W, Q, G, P;
  const N = rr(), D = (O = (I = ($ = (A = N == null ? void 0 : N.appContext) == null ? void 0 : A.app) == null ? void 0 : $.config) == null ? void 0 : I.globalProperties) == null ? void 0 : O.$router, g = (P = (G = (Q = (W = N == null ? void 0 : N.appContext) == null ? void 0 : W.app) == null ? void 0 : Q.config) == null ? void 0 : G.globalProperties) == null ? void 0 : P.$route, k = or("RouterLink"), B = k && typeof k != "string" && "useLink" in k ? k.useLink : null, M = le(() => _e(p) || ""), c = it(Et(C)), i = le(() => F0(_e(L))), b = le(() => {
    var Z, ne;
    return !(((ne = (Z = N == null ? void 0 : N.appContext) == null ? void 0 : Z.app) == null ? void 0 : ne.component(i.value)) !== void 0) || _e(d) || !M.value ? "a" : i.value;
  }), f = le(() => b.value === "RouterLink"), v = le(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => {
      var j, Z;
      return f.value && typeof ((Z = (j = N == null ? void 0 : N.appContext) == null ? void 0 : j.app) == null ? void 0 : Z.$nuxt) < "u";
    }
  ), u = le(
    () => b.value !== "a" && !f.value && !v.value
  ), T = le(() => f.value || v.value), x = le(() => ({
    to: M.value,
    replace: c.value
  })), E = B == null ? void 0 : B({
    to: M,
    replace: c
  }), S = le(() => T.value ? E : null), l = le(() => {
    var ce;
    if ((ce = S.value) != null && ce.href.value) return S.value.href.value;
    const j = "#", Z = _e(w);
    if (Z) return Z;
    if (typeof M.value == "string") return M.value || j;
    const ne = M.value;
    if (ne !== void 0 && "path" in ne) {
      const fe = ne.path || "", pe = ne.query ? `?${Object.keys(ne.query).map((he) => {
        var R;
        return `${he}=${(R = ne.query) == null ? void 0 : R[he]}`;
      }).join("=")}` : "", ve = !ne.hash || ne.hash.charAt(0) === "#" ? ne.hash || "" : `#${ne.hash}`;
      return `${fe}${pe}${ve}` || j;
    }
    return j;
  });
  return {
    isNonStandardTag: u,
    tag: b,
    isRouterLink: f,
    isNuxtLink: v,
    computedHref: l,
    routerName: i,
    router: D,
    route: g,
    link: S,
    linkProps: x
  };
}, ea = (p) => le(() => {
  const d = _e(p);
  return {
    [`link-${d.variant}`]: d.variant !== null,
    [`link-opacity-${d.opacity}`]: d.opacity !== void 0,
    [`link-opacity-${d.opacityHover}-hover`]: d.opacityHover !== void 0,
    [`link-underline-${d.underlineVariant}`]: d.underlineVariant !== null,
    [`link-offset-${d.underlineOffset}`]: d.underlineOffset !== void 0,
    [`link-offset-${d.underlineOffsetHover}-hover`]: d.underlineOffsetHover !== void 0,
    "link-underline": d.underlineVariant === null && (d.underlineOpacity !== void 0 || d.underlineOpacityHover !== void 0),
    [`link-underline-opacity-${d.underlineOpacity}`]: d.underlineOpacity !== void 0,
    [`link-underline-opacity-${d.underlineOpacityHover}-hover`]: d.underlineOpacityHover !== void 0,
    "icon-link": d.icon === !0
  };
}), kn = "active", U0 = /* @__PURE__ */ ft({
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
  setup(p, { emit: d }) {
    const C = nr(p, "BLink"), L = d, N = Ki(), { computedHref: D, tag: g, link: k, isNuxtLink: B, isRouterLink: M, linkProps: c, isNonStandardTag: i } = V0({
      routerComponentName: () => C.routerComponentName,
      disabled: () => C.disabled,
      to: () => C.to,
      replace: () => C.replace,
      href: () => C.href
    }), b = It(rl, null), f = It(ol, null), v = ea(C), u = le(() => {
      var $, I;
      return [
        v.value,
        N.class,
        T.value,
        {
          [kn]: C.active,
          [C.activeClass]: (($ = k.value) == null ? void 0 : $.isActive.value) || !1,
          [C.exactActiveClass]: ((I = k.value) == null ? void 0 : I.isExactActive.value) || !1,
          "stretched-link": C.stretched === !0
        }
      ];
    }), T = le(() => ({
      [kn]: C.active,
      disabled: C.disabled
    })), x = ($) => {
      var I, O, W;
      if (C.disabled) {
        $.preventDefault(), $.stopImmediatePropagation();
        return;
      }
      (((I = b == null ? void 0 : b.isNav) == null ? void 0 : I.value) === !0 && f === null || f !== null && ((O = f.noAutoClose) == null ? void 0 : O.value) !== !0) && ((W = b == null ? void 0 : b.hide) == null || W.call(b)), L("click", $);
    }, E = le(
      () => C.target === "_blank" ? !C.rel && C.noRel ? "noopener" : C.rel : void 0
    ), S = le(
      () => C.disabled ? "-1" : typeof N.tabindex > "u" ? null : N.tabindex
    ), l = le(() => ({
      prefetch: C.prefetch,
      noPrefetch: C.noPrefetch,
      prefetchOn: C.prefetchOn,
      prefetchedClass: C.prefetchedClass,
      ...c.value
    })), A = le(() => ({
      ...M.value ? c.value : void 0,
      // In addition to being Nuxt specific, we add these values if it's some non-standard tag. We don't know what it is,
      // So we just add it anyways. It will be made as an attr if it's unused so it's fine
      ...B.value || i.value ? l.value : void 0
    }));
    return ($, I) => (Ne(), tt(or(Y(g)), at({
      class: u.value,
      target: Y(C).target,
      href: Y(D),
      rel: E.value,
      tabindex: S.value,
      "aria-disabled": Y(C).disabled ? !0 : null
    }, A.value, {
      onClick: I[0] || (I[0] = (O) => {
        var W;
        x(O), (W = Y(k)) == null || W.navigate(O);
      })
    }), {
      default: rt(() => [
        Ze($.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "target", "href", "rel", "tabindex", "aria-disabled"]));
  }
}), Qr = /* @__PURE__ */ ft({
  __name: "BButton",
  props: /* @__PURE__ */ Cr({
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
  emits: /* @__PURE__ */ Cr(["click"], ["update:pressed"]),
  setup(p, { emit: d }) {
    const C = nr(p, "BButton"), L = d, N = Nt("_element"), D = Rn(p, "pressed"), { computedLink: g, computedLinkProps: k } = W0(C, [
      "active-class",
      "exact-active-class",
      "replace",
      "routerComponentName",
      "routerTag"
    ]), B = le(() => typeof D.value == "boolean"), M = le(
      () => C.tag === "button" && C.href === void 0 && C.to === void 0
    ), c = le(() => C.to !== void 0), i = le(() => C.href !== void 0 ? !1 : !M.value), b = le(() => c.value ? k.value : []), f = le(() => C.href === "#" && C.disabled ? !0 : i.value ? C.disabled : null), v = le(() => {
      var l;
      return ((l = C.variant) == null ? void 0 : l.startsWith("link")) || !1;
    }), u = le(() => {
      var l;
      return ((l = C.variant) == null ? void 0 : l.startsWith("link-")) || !1;
    }), T = ea(
      le(() => {
        var l;
        return {
          ...v.value ? {
            icon: C.icon,
            opacity: C.opacity,
            opacityHover: C.opacityHover,
            underlineOffset: C.underlineOffset,
            underlineOffsetHover: C.underlineOffsetHover,
            underlineOpacity: C.underlineOpacity,
            underlineOpacityHover: C.underlineOpacityHover,
            underlineVariant: C.underlineVariant,
            variant: u.value === !0 ? (l = C.variant) == null ? void 0 : l.slice(5) : null
          } : void 0
        };
      })
    ), x = le(() => [
      v.value === !0 && g.value === !1 ? T.value : void 0,
      [`btn-${C.size}`],
      {
        [`btn-${C.variant}`]: C.variant !== null && u.value === !1,
        active: C.active || D.value,
        "rounded-pill": C.pill,
        "rounded-0": C.squared,
        disabled: C.disabled
      }
    ]), E = le(() => c.value ? U0 : C.href ? "a" : C.tag), S = (l) => {
      if (C.disabled) {
        l.preventDefault(), l.stopPropagation();
        return;
      }
      L("click", l), B.value && (D.value = !D.value);
    };
    return Fn(
      [" ", "enter"],
      (l) => {
        var A;
        C.href === "#" && (l.preventDefault(), (A = N.value) == null || A.click());
      },
      { target: N }
    ), (l, A) => (Ne(), tt(or(E.value), at({
      ref: "_element",
      class: "btn"
    }, b.value, {
      class: x.value,
      "aria-disabled": f.value,
      "aria-pressed": B.value ? D.value : null,
      autocomplete: B.value ? "off" : null,
      disabled: M.value ? Y(C).disabled : null,
      href: Y(C).href,
      rel: Y(g) ? Y(C).rel : null,
      role: i.value || Y(g) ? "button" : null,
      target: Y(g) ? Y(C).target : null,
      type: M.value ? Y(C).type : null,
      to: M.value ? null : Y(C).to,
      onClick: S
    }), {
      default: rt(() => [
        Y(C).loading ? Ze(l.$slots, "loading", { key: 0 }, () => [
          Y(C).loadingFill ? et("", !0) : (Ne(), ut(fo, { key: 0 }, [
            $t(Pt(Y(C).loadingText), 1)
          ], 64)),
          Ze(l.$slots, "loading-spinner", {}, () => [
            Sr(I0, {
              small: Y(C).size !== "lg",
              label: Y(C).loadingFill ? Y(C).loadingText : void 0
            }, null, 8, ["small", "label"])
          ])
        ]) : Ze(l.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to"]));
  }
}), K0 = ["type", "disabled", "aria-label"], q0 = /* @__PURE__ */ ft({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(p, { emit: d }) {
    const C = nr(p, "BCloseButton"), L = d;
    return (N, D) => (Ne(), ut("button", {
      type: Y(C).type,
      class: "btn-close",
      disabled: Y(C).disabled,
      "aria-label": Y(C).ariaLabel,
      onClick: D[0] || (D[0] = (g) => L("click", g))
    }, null, 8, K0));
  }
}), G0 = (p, d) => {
  const w = Mn();
  return le(() => _e(p) || po(w || "", d));
};
class Br {
  constructor(d, w = {}) {
    Xe(this, "cancelable", !0);
    Xe(this, "componentId", null);
    Xe(this, "_defaultPrevented", !1);
    Xe(this, "eventType", "");
    Xe(this, "nativeEvent", null);
    Xe(this, "_preventDefault");
    Xe(this, "relatedTarget", null);
    Xe(this, "target", null);
    if (!d)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, Br.Defaults, w, { eventType: d }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = !0);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(d) {
    this._defaultPrevented = d;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(d) {
    this._preventDefault = d;
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
class X0 extends Br {
  constructor(w, C = {}) {
    super(w, C);
    Xe(this, "trigger", null);
    Xe(this, "ok");
    Object.assign(this, Br.Defaults, C, { eventType: w });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null,
      ok: void 0
    };
  }
}
const Cn = {
  name: "fade",
  enterActiveClass: "",
  enterFromClass: "showing",
  enterToClass: "",
  leaveActiveClass: "",
  leaveFromClass: "",
  leaveToClass: "showing",
  css: !0
}, Z0 = (p, d, w, C, L, N = {
  transitionProps: {},
  showFn: () => {
  },
  hideFn: () => {
  }
}) => {
  var Se;
  let D = !1;
  const g = !!p.value && !d.initialAnimation || d.visible || !1, k = Ee(g), B = Ee(g), M = Ee(g);
  let c = typeof p.value != "boolean";
  Fe(p, () => {
    if (c = typeof p.value != "boolean", D) {
      D = !1;
      return;
    }
    p.value ? A() : I("modelValue", !0);
  });
  const i = Ee(g), b = Ee(!1), f = le(
    () => d.noAnimation || d.noFade || i.value || !1
  );
  let v = !1;
  Tt(() => {
    var J;
    if (v = !0, !d.show && g) {
      const z = u("show", { cancelable: !0 });
      if (w("show", z), z.defaultPrevented) {
        w("show-prevented", u("show-prevented"));
        return;
      }
      i.value = !0, p.value || (D = !0, p.value = !0), B.value = !0, M.value = !0, R.value = !0, be.value = !0, ae.value = !0, k.value = !0, (J = N.showFn) == null || J.call(N);
    } else (d.show || p.value && d.initialAnimation) && A();
  }), Fe(
    () => d.visible,
    (J) => {
      i.value = !0, kt(() => {
        J && (R.value = !0), J ? A() : I("visible-prop", !0);
      });
    }
  ), Fe(
    () => d.show,
    (J) => {
      J ? A() : I("show-prop", !0);
    }
  ), mo(C, "bv-toggle", () => {
    p.value = !p.value;
  });
  const u = (J, z = {}) => new X0(J, {
    cancelable: !1,
    target: (C == null ? void 0 : C.value) || null,
    relatedTarget: null,
    trigger: null,
    ...z,
    componentId: L == null ? void 0 : L.value
  });
  let T, x, E, S, l;
  const A = (J = !1) => {
    if (k.value && !x && !S) return Promise.resolve(!0);
    if (l = J, k.value && !x && S) return S;
    S = new Promise((ge) => {
      E = ge;
    });
    const z = u("show", { cancelable: !0 });
    return w("show", z), z.defaultPrevented ? (w("show-prevented", u("show-prevented")), R.value && (R.value = !1), p.value && !c && (D = !0, kt(() => {
      p.value = !1;
    })), E == null || E("show-prevented"), S) : (x && (clearTimeout(x), x = void 0), B.value = !0, M.value = !0, requestAnimationFrame(() => {
      var ge, ue;
      if (i.value || d.delay === void 0) {
        if (!v) return;
        T = void 0, k.value = !0, (ge = N.showFn) == null || ge.call(N), p.value || (D = !0, kt(() => {
          p.value = !0;
        }));
        return;
      }
      T = setTimeout(
        () => {
          var se;
          v && (T = void 0, k.value = !0, (se = N.showFn) == null || se.call(N), p.value || (D = !0, kt(() => {
            p.value = !0;
          })));
        },
        typeof d.delay == "number" ? d.delay : ((ue = d.delay) == null ? void 0 : ue.show) || 0
      );
    }), S);
  };
  let $;
  const I = (J, z) => {
    var se;
    if (!k.value && !T) return Promise.resolve("");
    S || (S = new Promise((Me) => {
      E = Me;
    })), typeof J != "string" && (J = void 0), $ = J;
    const ge = u("hide", { cancelable: !0, trigger: J }), ue = u(J || "ignore", { cancelable: !0, trigger: J });
    return J === "backdrop" && d.noCloseOnBackdrop || J === "esc" && d.noCloseOnEsc ? (w("hide-prevented", u("hide-prevented", { trigger: J })), E == null || E("hide-prevented"), S) : (T && (clearTimeout(T), T = void 0), J && !z && w(J, ue), w("hide", ge), ge.defaultPrevented || ue.defaultPrevented ? (w("hide-prevented", u("hide-prevented", { trigger: J })), p.value || kt(() => {
      D = !0, p.value = !0;
    }), E == null || E("hide-prevented"), S) : (F.value = !1, T && (clearTimeout(T), T = void 0, b.value || (B.value = !1), M.value = !1), x = setTimeout(
      () => {
        var Me;
        v && (x = void 0, ve.value = !0, k.value = !1, (Me = N.hideFn) == null || Me.call(N), p.value && (D = !0, p.value = c ? 0 : !1));
      },
      i.value ? 0 : typeof d.delay == "number" ? d.delay : ((se = d.delay) == null ? void 0 : se.hide) || 0
    ), S));
  }, O = /* @__PURE__ */ pn((J) => I(J), 500), W = /* @__PURE__ */ pn(() => A(), 500), Q = (J = !1) => {
    const z = u("toggle", { cancelable: !0 });
    return w("toggle", z), z.defaultPrevented ? (w("toggle-prevented", u("toggle-prevented")), Promise.resolve("toggle-prevented")) : k.value ? I("toggle-function", !0) : A(J);
  }, G = () => {
    const J = u("toggle", { cancelable: !0 });
    if (w("toggle", J), J.defaultPrevented) {
      w("toggle-prevented", u("toggle-prevented"));
      return;
    }
    k.value ? I("toggle-trigger", !0) : A();
  }, P = [], j = (J, z) => {
    P.push({ trigger: J, el: z }), z.addEventListener(J, G), ce(z);
  }, Z = (J, z, ge = !0) => {
    const ue = P.findIndex((se) => (se == null ? void 0 : se.trigger) === J && se.el === z);
    ue > -1 && (P.splice(ue, 1), z.removeEventListener(J, G), ge && (z.removeAttribute("aria-expanded"), z.classList.remove("collapsed"), z.classList.remove("not-collapsed")));
  }, ne = (Se = It($n, void 0)) == null ? void 0 : Se.register({
    id: L.value,
    toggle: Q,
    show: A,
    hide: I,
    value: it(k),
    registerTrigger: j,
    unregisterTrigger: Z,
    component: rr()
  }), ce = (J) => {
    J.setAttribute("aria-expanded", p.value ? "true" : "false"), J.classList.toggle("collapsed", !p.value), J.classList.toggle("not-collapsed", !!p.value);
  };
  Fe(p, () => {
    P.forEach((J) => {
      ce(J.el);
    });
  }), Fe(L, (J, z) => {
    ne == null || ne.updateId(J, z);
  }), qi(() => {
    ne == null || ne.unregister(), P.forEach((J) => {
      J.el.removeEventListener(J.trigger, G);
    });
  }), uo(() => {
    v = !1, clearTimeout(T), clearTimeout(x), T = void 0, x = void 0;
  });
  const fe = Ee(!1), pe = () => {
    d.lazy === !0 && (fe.value = !0);
  }, ve = Ee(!1), he = Ee(g), R = Ee(g), Re = (J) => {
    var z, ge, ue, se;
    (ge = (z = N.transitionProps) == null ? void 0 : z.onBeforeEnter) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onBeforeEnter) == null || se.call(ue, J), he.value = !0;
  }, Pe = (J) => {
    var z, ge, ue, se;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        R.value = !0;
      });
    }), (ge = (z = N.transitionProps) == null ? void 0 : z.onEnter) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onEnter) == null || se.call(ue, J);
  }, We = (J) => {
    var z, ge, ue, se;
    pe(), (ge = (z = N.transitionProps) == null ? void 0 : z.onAfterEnter) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onAfterEnter) == null || se.call(ue, J), i.value && requestAnimationFrame(() => {
      i.value = !1;
    }), b.value && (b.value = !1), requestAnimationFrame(() => {
      F.value = !0, kt(() => {
        w("shown", u("shown", { cancelable: !1 }));
      });
    }), l || (E == null || E(!0), S = void 0, E = void 0);
  }, ze = (J) => {
    var z, ge, ue, se;
    ve.value || (ve.value = !0), (ge = (z = N.transitionProps) == null ? void 0 : z.onBeforeLeave) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onBeforeLeave) == null || se.call(ue, J), F.value = !1;
  }, U = (J) => {
    var z, ge, ue, se;
    R.value = !1, (ge = (z = N.transitionProps) == null ? void 0 : z.onLeave) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onLeave) == null || se.call(ue, J);
  }, we = (J) => {
    var z, ge, ue, se;
    w("hidden", u("hidden", { trigger: $, cancelable: !1 })), (ge = (z = N.transitionProps) == null ? void 0 : z.onAfterLeave) == null || ge.call(z, J), (se = (ue = d.transitionProps) == null ? void 0 : ue.onAfterLeave) == null || se.call(ue, J), ve.value = !1, he.value = !1, i.value && requestAnimationFrame(() => {
      i.value = !1;
    }), requestAnimationFrame(() => {
      b.value || (B.value = !1);
    }), E == null || E($ || ""), S = void 0, E = void 0, $ = void 0;
  }, re = le(
    () => b.value === !0 || he.value === !0 || d.lazy === !1 || d.lazy === !0 && fe.value === !0 && d.unmountLazy === !1
  ), F = Ee(!1), be = Ee(!1), ae = Ee(!1), Ae = {
    ...N.transitionProps,
    onBeforeEnter: Re,
    onEnter: Pe,
    onAfterEnter: We,
    onBeforeLeave: ze,
    onLeave: U,
    onAfterLeave: we
  };
  return {
    showRef: k,
    renderRef: B,
    renderBackdropRef: M,
    isVisible: R,
    isActive: he,
    trapActive: F,
    show: A,
    hide: I,
    toggle: Q,
    throttleHide: O,
    throttleShow: W,
    buildTriggerableEvent: u,
    computedNoAnimation: f,
    localNoAnimation: i,
    localTemporaryHide: b,
    isLeaving: ve,
    transitionProps: {
      ...Cn,
      ...d.transitionProps,
      ...Ae
    },
    lazyLoadCompleted: fe,
    markLazyLoadCompleted: pe,
    contentShowing: re,
    backdropReady: ae,
    backdropVisible: be,
    backdropTransitionProps: {
      ...Cn,
      onBeforeEnter: () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            be.value = !0;
          });
        }), ae.value = !1;
      },
      onAfterEnter: () => {
        ae.value = !0;
      },
      onBeforeLeave: () => {
        be.value = !1;
      },
      onAfterLeave: () => {
        ae.value = !1, requestAnimationFrame(() => {
          M.value = !1;
        });
      }
    }
  };
}, Y0 = (p, d = typeof document < "u" ? document : void 0) => {
  if (p)
    return typeof p == "string" ? typeof d > "u" || typeof document > "u" ? void 0 : document.getElementById(p) ?? d.querySelector(p) ?? void 0 : p.$el ?? p;
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
const eo = "modal-open", J0 = () => {
  const p = It(Pn), d = (C) => {
    p == null || p.removeStack(C), p == null || p.removeRegistry(C);
  }, w = Kh("updateHTMLAttrs", (C, L, N) => {
    const D = typeof C == "string" ? window == null ? void 0 : window.document.querySelector(C) : jt(C);
    D && (L === "class" ? D.classList.toggle(eo, N === eo) : D.setAttribute(L, N));
  });
  return Lt(() => {
    (p == null ? void 0 : p.countStack.value) === 0 && w("body", "class", "");
  }), Fe(
    () => p == null ? void 0 : p.countStack.value,
    (C) => {
      C !== void 0 && w("body", "class", C > 0 ? eo : "");
    }
  ), {
    ...p,
    dispose: d
  };
}, Q0 = (p, d) => {
  const { pushRegistry: w, pushStack: C, removeStack: L, stack: N, dispose: D, countStack: g } = J0(), k = rr();
  if (!k || k.type.__name !== "BModal")
    throw new Error("useModalManager must only use in BModal component");
  w == null || w(k), Lt(() => {
    D(k);
  });
  const B = (M, c) => {
    M ? C == null || C(k) : c && !M && (L == null || L(k));
  };
  return B(d, d), Fe(p, B), {
    activePosition: le(
      () => N == null ? void 0 : N.value.findIndex((M) => {
        var c, i;
        return _e((c = M.exposed) == null ? void 0 : c.id) === _e((i = k.exposed) == null ? void 0 : i.id);
      })
    ),
    activeModalCount: g,
    stackWithoutSelf: le(
      () => (N == null ? void 0 : N.value.filter(
        (M) => {
          var c, i;
          return _e((c = M.exposed) == null ? void 0 : c.id) !== _e((i = k.exposed) == null ? void 0 : i.id);
        }
      )) ?? []
    )
  };
}, eb = ["id", "aria-labelledby", "aria-describedby"], tb = ["id"], Sn = "modal-fallback-focus", rb = /* @__PURE__ */ ft({
  inheritAttrs: !1,
  __name: "BModal",
  props: /* @__PURE__ */ Cr({
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
  emits: /* @__PURE__ */ Cr(["backdrop", "close", "esc", "hide", "hide-prevented", "hidden", "show", "show-prevented", "shown", "toggle", "toggle-prevented", "cancel", "ok"], ["update:modelValue"]),
  setup(p, { expose: d, emit: w }) {
    const L = nr(p, "BModal"), N = w, D = Dn(), g = G0(() => L.id, "modal"), k = Rn(p, "modelValue"), B = Nt("_element"), M = Nt("_fallbackFocusElement"), c = Nt("_okButton"), i = Nt("_cancelButton"), b = Nt("_closeButton"), f = () => L.focus && typeof L.focus != "boolean" ? L.focus === "ok" ? c : L.focus === "close" ? b : L.focus === "cancel" ? i : Y0(L.focus, B.value ?? void 0) ?? B.value : B;
    let v = null;
    const u = () => {
      if (L.noTrap && L.focus !== !1) {
        v = document.activeElement, v === B.value && (v = null);
        const se = jt(f());
        if (!se) return;
        se == null || se.focus(), se.tagName && se.tagName.toLowerCase() === "input" && typeof se.select == "function" && se.select();
      }
    }, T = () => {
      L.noTrap && L.focus !== !1 && v && (v == null || v.focus(), v = null);
    }, {
      showRef: x,
      renderRef: E,
      renderBackdropRef: S,
      hide: l,
      show: A,
      toggle: $,
      computedNoAnimation: I,
      transitionProps: O,
      backdropTransitionProps: W,
      isLeaving: Q,
      isVisible: G,
      trapActive: P,
      contentShowing: j,
      backdropReady: Z,
      backdropVisible: ne
    } = Z0(k, L, N, B, g, {
      // addShowClass: false,
      transitionProps: {
        onAfterEnter: u,
        onAfterLeave: T
      }
    }), { needsFallback: ce } = _0({
      element: B,
      isActive: P,
      noTrap: () => L.noTrap,
      fallbackFocus: {
        ref: M,
        classSelector: Sn
      },
      focus: () => L.focus === !1 ? !1 : jt(f()) ?? void 0
      // () => (typeof focus === 'boolean' ? focus : (unrefElement(focus) ?? undefined)),
    });
    Fn(
      "Escape",
      () => {
        l("esc");
      },
      { target: B }
    ), R0(x, () => L.bodyScrolling);
    const fe = le(() => !Yn(D["header-close"])), pe = le(() => [
      L.dialogClass,
      {
        "modal-fullscreen": L.fullscreen === !0,
        [`modal-fullscreen-${L.fullscreen}-down`]: typeof L.fullscreen == "string",
        [`modal-${L.size}`]: L.size !== "md",
        "modal-dialog-centered": L.centered,
        "modal-dialog-scrollable": L.scrollable
      }
    ]), ve = wr(() => ({
      bgVariant: L.bodyBgVariant,
      textVariant: L.bodyTextVariant,
      variant: L.bodyVariant
    })), he = le(() => [L.bodyClass, ve.value]), R = wr(() => ({
      bgVariant: L.headerBgVariant,
      textVariant: L.headerTextVariant,
      variant: L.headerVariant,
      borderVariant: L.headerBorderVariant
    })), Re = le(() => [L.headerClass, R.value]), Pe = le(() => ({
      variant: fe.value ? L.headerCloseVariant : void 0,
      class: L.headerCloseClass
    })), We = wr(() => ({
      bgVariant: L.footerBgVariant,
      textVariant: L.footerTextVariant,
      variant: L.footerVariant,
      borderVariant: L.footerBorderVariant
    })), ze = le(() => [L.footerClass, We.value]), U = le(() => [
      L.titleClass,
      {
        "visually-hidden": L.titleVisuallyHidden
      }
    ]), we = le(() => L.cancelDisabled || L.busy), re = le(() => L.okDisabled || L.busy), { activePosition: F, activeModalCount: be, stackWithoutSelf: ae } = Q0(
      x,
      k.value
    ), Ae = le(() => ({
      [`stack-position-${(F == null ? void 0 : F.value) ?? 0}`]: !0,
      [`stack-inverse-position-${((be == null ? void 0 : be.value) ?? 1) - 1 - ((F == null ? void 0 : F.value) ?? 0)}`]: !0
    }));
    Fe(ae, (se, Me) => {
      se.length > Me.length && x.value === !0 && L.noStacking === !0 && l();
    });
    const Se = Ee(
      yn(B.value ?? (typeof document < "u" ? document.body : void 0))
    );
    Tt(() => {
      Fe(
        E,
        (se) => {
          se && kt(() => {
            B.value && (Se.value = yn(B.value));
          });
        },
        { immediate: !0 }
      );
    });
    const J = le(
      () => (
        // Make sure that newly opened modals have a higher z-index than currently active ones.
        // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
        //
        // This means inactive modals will already be higher than active ones when opened.
        x.value || Q.value ? (
          // Just for reference there is a single frame in which the modal is not active but still has a higher z-index than the active ones due to _when_ it calculates its position. It's a small visual effect
          Se.value - (((be == null ? void 0 : be.value) ?? 0) * 2 - ((F == null ? void 0 : F.value) ?? 0) * 2)
        ) : Se.value
      )
    ), z = le(() => ({
      "z-index": J.value,
      "--b-position": (F == null ? void 0 : F.value) ?? 0,
      "--b-inverse-position": ((be == null ? void 0 : be.value) ?? 1) - 1 - ((F == null ? void 0 : F.value) ?? 0),
      "--b-count": (be == null ? void 0 : be.value) ?? 0
    })), ge = le(() => ({
      "z-index": J.value - 1,
      "--b-position": (F == null ? void 0 : F.value) ?? 0,
      "--b-inverse-position": ((be == null ? void 0 : be.value) ?? 1) - 1 - ((F == null ? void 0 : F.value) ?? 0),
      "--b-count": (be == null ? void 0 : be.value) ?? 0
    })), ue = le(() => ({
      id: g.value,
      cancel: () => {
        l("cancel");
      },
      close: () => {
        l("close");
      },
      hide: l,
      show: A,
      toggle: $,
      ok: () => {
        l("ok");
      },
      active: x.value,
      visible: x.value
    }));
    return d({
      hide: l,
      id: g,
      show: A,
      toggle: $,
      visible: x
    }), (se, Me) => (Ne(), tt(Jh, {
      to: Y(L).teleportTo,
      disabled: Y(L).teleportDisabled
    }, {
      default: rt(() => [
        Y(E) || Y(j) ? (Ne(), tt(nn, at({ key: 0 }, Y(O), {
          appear: k.value || Y(L).visible
        }), {
          default: rt(() => [
            an(Jt("div", at({
              id: Y(g),
              ref: "_element",
              class: ["modal", [
                Y(L).modalClass,
                {
                  fade: !Y(I),
                  show: Y(G),
                  ...Ae.value
                }
              ]],
              role: "dialog",
              "aria-labelledby": Y(L).noHeader ? void 0 : `${Y(g)}-label`,
              "aria-describedby": `${Y(g)}-body`,
              tabindex: "-1"
            }, se.$attrs, {
              style: [z.value, { display: "block" }],
              onMousedown: Me[4] || (Me[4] = On((pt) => Y(l)("backdrop"), ["left", "self"]))
            }), [
              Jt("div", {
                class: dt(["modal-dialog", pe.value])
              }, [
                Y(j) ? (Ne(), ut("div", {
                  key: 0,
                  class: dt(["modal-content", Y(L).contentClass])
                }, [
                  Y(L).noHeader ? et("", !0) : (Ne(), ut("div", at({
                    key: 0,
                    class: ["modal-header", Re.value]
                  }, Y(L).headerAttrs), [
                    Ze(se.$slots, "header", ct(yt(ue.value)), () => [
                      (Ne(), tt(or(Y(L).titleTag), {
                        id: `${Y(g)}-label`,
                        class: dt(["modal-title", U.value])
                      }, {
                        default: rt(() => [
                          Ze(se.$slots, "title", ct(yt(ue.value)), () => [
                            $t(Pt(Y(L).title), 1)
                          ])
                        ]),
                        _: 3
                      }, 8, ["id", "class"])),
                      Y(L).noHeaderClose ? et("", !0) : (Ne(), ut(fo, { key: 0 }, [
                        fe.value ? (Ne(), tt(Qr, at({
                          key: 0,
                          ref: "_closeButton"
                        }, Pe.value, {
                          onClick: Me[0] || (Me[0] = (pt) => Y(l)("close"))
                        }), {
                          default: rt(() => [
                            Ze(se.$slots, "header-close", ct(yt(ue.value)))
                          ]),
                          _: 3
                        }, 16)) : (Ne(), tt(q0, at({
                          key: 1,
                          ref: "_closeButton",
                          "aria-label": Y(L).headerCloseLabel
                        }, Pe.value, {
                          onClick: Me[1] || (Me[1] = (pt) => Y(l)("close"))
                        }), null, 16, ["aria-label"]))
                      ], 64))
                    ])
                  ], 16)),
                  Jt("div", at({
                    id: `${Y(g)}-body`,
                    class: ["modal-body", he.value]
                  }, Y(L).bodyAttrs), [
                    Ze(se.$slots, "default", ct(yt(ue.value)), () => [
                      $t(Pt(Y(L).body), 1)
                    ])
                  ], 16, tb),
                  Y(L).noFooter ? et("", !0) : (Ne(), ut("div", {
                    key: 1,
                    class: dt(["modal-footer", ze.value])
                  }, [
                    Ze(se.$slots, "footer", ct(yt(ue.value)), () => [
                      Ze(se.$slots, "cancel", ct(yt(ue.value)), () => [
                        Y(L).okOnly ? et("", !0) : (Ne(), tt(Qr, {
                          key: 0,
                          ref: "_cancelButton",
                          disabled: we.value,
                          size: Y(L).buttonSize,
                          variant: Y(L).cancelVariant,
                          class: dt(Y(L).cancelClass),
                          onClick: Me[2] || (Me[2] = (pt) => Y(l)("cancel"))
                        }, {
                          default: rt(() => [
                            $t(Pt(Y(L).cancelTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant", "class"]))
                      ]),
                      Ze(se.$slots, "ok", ct(yt(ue.value)), () => [
                        Sr(Qr, {
                          ref: "_okButton",
                          disabled: re.value,
                          size: Y(L).buttonSize,
                          variant: Y(L).okVariant,
                          class: dt(Y(L).okClass),
                          onClick: Me[3] || (Me[3] = (pt) => Y(l)("ok"))
                        }, {
                          default: rt(() => [
                            $t(Pt(Y(L).okTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant", "class"])
                      ])
                    ])
                  ], 2))
                ], 2)) : et("", !0)
              ], 2),
              Y(ce) ? (Ne(), ut("div", {
                key: 0,
                ref: "_fallbackFocusElement",
                class: dt(Sn),
                tabindex: "0",
                style: { width: "0", height: "0", overflow: "hidden" }
              }, null, 512)) : et("", !0)
            ], 16, eb), [
              [ln, Y(x) && (Y(Z) && Y(L).backdropFirst || !Y(L).backdropFirst)]
            ])
          ]),
          _: 3
        }, 16, ["appear"])) : et("", !0),
        Y(L).noBackdrop ? et("", !0) : Ze(se.$slots, "backdrop", ct(at({ key: 1 }, ue.value)), () => [
          Y(S) ? (Ne(), tt(nn, ct(at({ key: 0 }, Y(W))), {
            default: rt(() => [
              an(Jt("div", {
                class: dt(["modal-backdrop", {
                  fade: !Y(I),
                  show: Y(ne) || Y(I),
                  ...Ae.value
                }]),
                style: Gi(ge.value),
                onClick: Me[5] || (Me[5] = (pt) => Y(l)("backdrop"))
              }, null, 6), [
                [ln, Y(x) || Y(Q) && Y(L).backdropFirst && !Y(I)]
              ])
            ]),
            _: 1
          }, 16)) : et("", !0)
        ])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
}), En = "bootstrap-vue-next", xn = (p, d) => {
  const { all: w, ...C } = p, L = {};
  w && d.forEach((D) => {
    L[D] = w;
  });
  const N = { ...L, ...C };
  return Object.entries(N).filter(([D, g]) => !!g && d.includes(D)).map(([D]) => D);
}, to = /* @__PURE__ */ new Set(), Tn = /* @__PURE__ */ new Set();
Object.assign(
  ({
    aliases: p = {},
    directives: d = !0,
    components: w = !0
  } = {}) => {
    const L = xn(typeof w == "boolean" ? { all: w } : w, Xh).reduce(
      (k, B) => (k.set(B, `${En}${Wn[B]}`), k),
      /* @__PURE__ */ new Map()
    ), D = xn(typeof d == "boolean" ? { all: d } : d, Zh).reduce(
      (k, B) => {
        const M = B.toLowerCase().startsWith("v") ? B : `v${B}`;
        return k.set(M, `${En}${Vn[M]}`), k;
      },
      /* @__PURE__ */ new Map()
    );
    return [
      {
        type: "component",
        resolve(k) {
          const B = L.get(k), M = L.get(p[k]);
          if (M) {
            const c = p[k];
            return to.add(c), {
              name: c,
              from: M
            };
          }
          if (B)
            return to.add(k), {
              name: k,
              from: B
            };
        }
      },
      {
        type: "directive",
        resolve(k) {
          const B = `v${k}`, M = D.get(B);
          if (M)
            return Tn.add(B), {
              name: B,
              from: M
            };
        }
      }
    ];
  },
  {
    __usedComponents: to,
    __usedDirectives: Tn
  }
);
function ob(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var kr = { exports: {} };
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
var nb = kr.exports, Ln;
function ab() {
  return Ln || (Ln = 1, function(p, d) {
    (function(C, L) {
      p.exports = L();
    })(nb, function() {
      return (
        /******/
        (() => {
          var w = {
            /***/
            173: (
              /***/
              (D) => {
                var g = function() {
                  this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
                }, k = -1, B = 1, M = 0;
                g.Diff = function(c, i) {
                  return [c, i];
                }, g.prototype.diff_main = function(c, i, b, f) {
                  typeof f > "u" && (this.Diff_Timeout <= 0 ? f = Number.MAX_VALUE : f = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
                  var v = f;
                  if (c == null || i == null)
                    throw new Error("Null input. (diff_main)");
                  if (c == i)
                    return c ? [new g.Diff(M, c)] : [];
                  typeof b > "u" && (b = !0);
                  var u = b, T = this.diff_commonPrefix(c, i), x = c.substring(0, T);
                  c = c.substring(T), i = i.substring(T), T = this.diff_commonSuffix(c, i);
                  var E = c.substring(c.length - T);
                  c = c.substring(0, c.length - T), i = i.substring(0, i.length - T);
                  var S = this.diff_compute_(c, i, u, v);
                  return x && S.unshift(new g.Diff(M, x)), E && S.push(new g.Diff(M, E)), this.diff_cleanupMerge(S), S;
                }, g.prototype.diff_compute_ = function(c, i, b, f) {
                  var v;
                  if (!c)
                    return [new g.Diff(B, i)];
                  if (!i)
                    return [new g.Diff(k, c)];
                  var u = c.length > i.length ? c : i, T = c.length > i.length ? i : c, x = u.indexOf(T);
                  if (x != -1)
                    return v = [new g.Diff(B, u.substring(0, x)), new g.Diff(M, T), new g.Diff(B, u.substring(x + T.length))], c.length > i.length && (v[0][0] = v[2][0] = k), v;
                  if (T.length == 1)
                    return [new g.Diff(k, c), new g.Diff(B, i)];
                  var E = this.diff_halfMatch_(c, i);
                  if (E) {
                    var S = E[0], l = E[1], A = E[2], $ = E[3], I = E[4], O = this.diff_main(S, A, b, f), W = this.diff_main(l, $, b, f);
                    return O.concat([new g.Diff(M, I)], W);
                  }
                  return b && c.length > 100 && i.length > 100 ? this.diff_lineMode_(c, i, f) : this.diff_bisect_(c, i, f);
                }, g.prototype.diff_lineMode_ = function(c, i, b) {
                  var f = this.diff_linesToChars_(c, i);
                  c = f.chars1, i = f.chars2;
                  var v = f.lineArray, u = this.diff_main(c, i, !1, b);
                  this.diff_charsToLines_(u, v), this.diff_cleanupSemantic(u), u.push(new g.Diff(M, ""));
                  for (var T = 0, x = 0, E = 0, S = "", l = ""; T < u.length; ) {
                    switch (u[T][0]) {
                      case B:
                        E++, l += u[T][1];
                        break;
                      case k:
                        x++, S += u[T][1];
                        break;
                      case M:
                        if (x >= 1 && E >= 1) {
                          u.splice(T - x - E, x + E), T = T - x - E;
                          for (var A = this.diff_main(S, l, !1, b), $ = A.length - 1; $ >= 0; $--)
                            u.splice(T, 0, A[$]);
                          T = T + A.length;
                        }
                        E = 0, x = 0, S = "", l = "";
                        break;
                    }
                    T++;
                  }
                  return u.pop(), u;
                }, g.prototype.diff_bisect_ = function(c, i, b) {
                  for (var f = c.length, v = i.length, u = Math.ceil((f + v) / 2), T = u, x = 2 * u, E = new Array(x), S = new Array(x), l = 0; l < x; l++)
                    E[l] = -1, S[l] = -1;
                  E[T + 1] = 0, S[T + 1] = 0;
                  for (var A = f - v, $ = A % 2 != 0, I = 0, O = 0, W = 0, Q = 0, G = 0; G < u && !((/* @__PURE__ */ new Date()).getTime() > b); G++) {
                    for (var P = -G + I; P <= G - O; P += 2) {
                      var j = T + P, Z;
                      P == -G || P != G && E[j - 1] < E[j + 1] ? Z = E[j + 1] : Z = E[j - 1] + 1;
                      for (var ne = Z - P; Z < f && ne < v && c.charAt(Z) == i.charAt(ne); )
                        Z++, ne++;
                      if (E[j] = Z, Z > f)
                        O += 2;
                      else if (ne > v)
                        I += 2;
                      else if ($) {
                        var ce = T + A - P;
                        if (ce >= 0 && ce < x && S[ce] != -1) {
                          var fe = f - S[ce];
                          if (Z >= fe)
                            return this.diff_bisectSplit_(c, i, Z, ne, b);
                        }
                      }
                    }
                    for (var pe = -G + W; pe <= G - Q; pe += 2) {
                      var ce = T + pe, fe;
                      pe == -G || pe != G && S[ce - 1] < S[ce + 1] ? fe = S[ce + 1] : fe = S[ce - 1] + 1;
                      for (var ve = fe - pe; fe < f && ve < v && c.charAt(f - fe - 1) == i.charAt(v - ve - 1); )
                        fe++, ve++;
                      if (S[ce] = fe, fe > f)
                        Q += 2;
                      else if (ve > v)
                        W += 2;
                      else if (!$) {
                        var j = T + A - pe;
                        if (j >= 0 && j < x && E[j] != -1) {
                          var Z = E[j], ne = T + Z - j;
                          if (fe = f - fe, Z >= fe)
                            return this.diff_bisectSplit_(c, i, Z, ne, b);
                        }
                      }
                    }
                  }
                  return [new g.Diff(k, c), new g.Diff(B, i)];
                }, g.prototype.diff_bisectSplit_ = function(c, i, b, f, v) {
                  var u = c.substring(0, b), T = i.substring(0, f), x = c.substring(b), E = i.substring(f), S = this.diff_main(u, T, !1, v), l = this.diff_main(x, E, !1, v);
                  return S.concat(l);
                }, g.prototype.diff_linesToChars_ = function(c, i) {
                  var b = [], f = {};
                  b[0] = "";
                  function v(E) {
                    for (var S = "", l = 0, A = -1, $ = b.length; A < E.length - 1; ) {
                      A = E.indexOf(`
`, l), A == -1 && (A = E.length - 1);
                      var I = E.substring(l, A + 1);
                      (f.hasOwnProperty ? f.hasOwnProperty(I) : f[I] !== void 0) ? S += String.fromCharCode(f[I]) : ($ == u && (I = E.substring(l), A = E.length), S += String.fromCharCode($), f[I] = $, b[$++] = I), l = A + 1;
                    }
                    return S;
                  }
                  var u = 4e4, T = v(c);
                  u = 65535;
                  var x = v(i);
                  return {
                    chars1: T,
                    chars2: x,
                    lineArray: b
                  };
                }, g.prototype.diff_charsToLines_ = function(c, i) {
                  for (var b = 0; b < c.length; b++) {
                    for (var f = c[b][1], v = [], u = 0; u < f.length; u++)
                      v[u] = i[f.charCodeAt(u)];
                    c[b][1] = v.join("");
                  }
                }, g.prototype.diff_commonPrefix = function(c, i) {
                  if (!c || !i || c.charAt(0) != i.charAt(0))
                    return 0;
                  for (var b = 0, f = Math.min(c.length, i.length), v = f, u = 0; b < v; )
                    c.substring(u, v) == i.substring(u, v) ? (b = v, u = b) : f = v, v = Math.floor((f - b) / 2 + b);
                  return v;
                }, g.prototype.diff_commonSuffix = function(c, i) {
                  if (!c || !i || c.charAt(c.length - 1) != i.charAt(i.length - 1))
                    return 0;
                  for (var b = 0, f = Math.min(c.length, i.length), v = f, u = 0; b < v; )
                    c.substring(c.length - v, c.length - u) == i.substring(i.length - v, i.length - u) ? (b = v, u = b) : f = v, v = Math.floor((f - b) / 2 + b);
                  return v;
                }, g.prototype.diff_commonOverlap_ = function(c, i) {
                  var b = c.length, f = i.length;
                  if (b == 0 || f == 0)
                    return 0;
                  b > f ? c = c.substring(b - f) : b < f && (i = i.substring(0, b));
                  var v = Math.min(b, f);
                  if (c == i)
                    return v;
                  for (var u = 0, T = 1; ; ) {
                    var x = c.substring(v - T), E = i.indexOf(x);
                    if (E == -1)
                      return u;
                    T += E, (E == 0 || c.substring(v - T) == i.substring(0, T)) && (u = T, T++);
                  }
                }, g.prototype.diff_halfMatch_ = function(c, i) {
                  if (this.Diff_Timeout <= 0)
                    return null;
                  var b = c.length > i.length ? c : i, f = c.length > i.length ? i : c;
                  if (b.length < 4 || f.length * 2 < b.length)
                    return null;
                  var v = this;
                  function u(O, W, Q) {
                    for (var G = O.substring(Q, Q + Math.floor(O.length / 4)), P = -1, j = "", Z, ne, ce, fe; (P = W.indexOf(G, P + 1)) != -1; ) {
                      var pe = v.diff_commonPrefix(O.substring(Q), W.substring(P)), ve = v.diff_commonSuffix(O.substring(0, Q), W.substring(0, P));
                      j.length < ve + pe && (j = W.substring(P - ve, P) + W.substring(P, P + pe), Z = O.substring(0, Q - ve), ne = O.substring(Q + pe), ce = W.substring(0, P - ve), fe = W.substring(P + pe));
                    }
                    return j.length * 2 >= O.length ? [Z, ne, ce, fe, j] : null;
                  }
                  var T = u(b, f, Math.ceil(b.length / 4)), x = u(b, f, Math.ceil(b.length / 2)), E;
                  if (!T && !x)
                    return null;
                  x ? T ? E = T[4].length > x[4].length ? T : x : E = x : E = T;
                  var S, l, A, $;
                  c.length > i.length ? (S = E[0], l = E[1], A = E[2], $ = E[3]) : (A = E[0], $ = E[1], S = E[2], l = E[3]);
                  var I = E[4];
                  return [S, l, A, $, I];
                }, g.prototype.diff_cleanupSemantic = function(c) {
                  for (var i = !1, b = [], f = 0, v = null, u = 0, T = 0, x = 0, E = 0, S = 0; u < c.length; )
                    c[u][0] == M ? (b[f++] = u, T = E, x = S, E = 0, S = 0, v = c[u][1]) : (c[u][0] == B ? E += c[u][1].length : S += c[u][1].length, v && v.length <= Math.max(T, x) && v.length <= Math.max(E, S) && (c.splice(b[f - 1], 0, new g.Diff(k, v)), c[b[f - 1] + 1][0] = B, f--, f--, u = f > 0 ? b[f - 1] : -1, T = 0, x = 0, E = 0, S = 0, v = null, i = !0)), u++;
                  for (i && this.diff_cleanupMerge(c), this.diff_cleanupSemanticLossless(c), u = 1; u < c.length; ) {
                    if (c[u - 1][0] == k && c[u][0] == B) {
                      var l = c[u - 1][1], A = c[u][1], $ = this.diff_commonOverlap_(l, A), I = this.diff_commonOverlap_(A, l);
                      $ >= I ? ($ >= l.length / 2 || $ >= A.length / 2) && (c.splice(u, 0, new g.Diff(M, A.substring(0, $))), c[u - 1][1] = l.substring(0, l.length - $), c[u + 1][1] = A.substring($), u++) : (I >= l.length / 2 || I >= A.length / 2) && (c.splice(u, 0, new g.Diff(M, l.substring(0, I))), c[u - 1][0] = B, c[u - 1][1] = A.substring(0, A.length - I), c[u + 1][0] = k, c[u + 1][1] = l.substring(I), u++), u++;
                    }
                    u++;
                  }
                }, g.prototype.diff_cleanupSemanticLossless = function(c) {
                  function i(I, O) {
                    if (!I || !O)
                      return 6;
                    var W = I.charAt(I.length - 1), Q = O.charAt(0), G = W.match(g.nonAlphaNumericRegex_), P = Q.match(g.nonAlphaNumericRegex_), j = G && W.match(g.whitespaceRegex_), Z = P && Q.match(g.whitespaceRegex_), ne = j && W.match(g.linebreakRegex_), ce = Z && Q.match(g.linebreakRegex_), fe = ne && I.match(g.blanklineEndRegex_), pe = ce && O.match(g.blanklineStartRegex_);
                    return fe || pe ? 5 : ne || ce ? 4 : G && !j && Z ? 3 : j || Z ? 2 : G || P ? 1 : 0;
                  }
                  for (var b = 1; b < c.length - 1; ) {
                    if (c[b - 1][0] == M && c[b + 1][0] == M) {
                      var f = c[b - 1][1], v = c[b][1], u = c[b + 1][1], T = this.diff_commonSuffix(f, v);
                      if (T) {
                        var x = v.substring(v.length - T);
                        f = f.substring(0, f.length - T), v = x + v.substring(0, v.length - T), u = x + u;
                      }
                      for (var E = f, S = v, l = u, A = i(f, v) + i(v, u); v.charAt(0) === u.charAt(0); ) {
                        f += v.charAt(0), v = v.substring(1) + u.charAt(0), u = u.substring(1);
                        var $ = i(f, v) + i(v, u);
                        $ >= A && (A = $, E = f, S = v, l = u);
                      }
                      c[b - 1][1] != E && (E ? c[b - 1][1] = E : (c.splice(b - 1, 1), b--), c[b][1] = S, l ? c[b + 1][1] = l : (c.splice(b + 1, 1), b--));
                    }
                    b++;
                  }
                }, g.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, g.whitespaceRegex_ = /\s/, g.linebreakRegex_ = /[\r\n]/, g.blanklineEndRegex_ = /\n\r?\n$/, g.blanklineStartRegex_ = /^\r?\n\r?\n/, g.prototype.diff_cleanupEfficiency = function(c) {
                  for (var i = !1, b = [], f = 0, v = null, u = 0, T = !1, x = !1, E = !1, S = !1; u < c.length; )
                    c[u][0] == M ? (c[u][1].length < this.Diff_EditCost && (E || S) ? (b[f++] = u, T = E, x = S, v = c[u][1]) : (f = 0, v = null), E = S = !1) : (c[u][0] == k ? S = !0 : E = !0, v && (T && x && E && S || v.length < this.Diff_EditCost / 2 && T + x + E + S == 3) && (c.splice(b[f - 1], 0, new g.Diff(k, v)), c[b[f - 1] + 1][0] = B, f--, v = null, T && x ? (E = S = !0, f = 0) : (f--, u = f > 0 ? b[f - 1] : -1, E = S = !1), i = !0)), u++;
                  i && this.diff_cleanupMerge(c);
                }, g.prototype.diff_cleanupMerge = function(c) {
                  c.push(new g.Diff(M, ""));
                  for (var i = 0, b = 0, f = 0, v = "", u = "", T; i < c.length; )
                    switch (c[i][0]) {
                      case B:
                        f++, u += c[i][1], i++;
                        break;
                      case k:
                        b++, v += c[i][1], i++;
                        break;
                      case M:
                        b + f > 1 ? (b !== 0 && f !== 0 && (T = this.diff_commonPrefix(u, v), T !== 0 && (i - b - f > 0 && c[i - b - f - 1][0] == M ? c[i - b - f - 1][1] += u.substring(0, T) : (c.splice(0, 0, new g.Diff(M, u.substring(0, T))), i++), u = u.substring(T), v = v.substring(T)), T = this.diff_commonSuffix(u, v), T !== 0 && (c[i][1] = u.substring(u.length - T) + c[i][1], u = u.substring(0, u.length - T), v = v.substring(0, v.length - T))), i -= b + f, c.splice(i, b + f), v.length && (c.splice(i, 0, new g.Diff(k, v)), i++), u.length && (c.splice(i, 0, new g.Diff(B, u)), i++), i++) : i !== 0 && c[i - 1][0] == M ? (c[i - 1][1] += c[i][1], c.splice(i, 1)) : i++, f = 0, b = 0, v = "", u = "";
                        break;
                    }
                  c[c.length - 1][1] === "" && c.pop();
                  var x = !1;
                  for (i = 1; i < c.length - 1; )
                    c[i - 1][0] == M && c[i + 1][0] == M && (c[i][1].substring(c[i][1].length - c[i - 1][1].length) == c[i - 1][1] ? (c[i][1] = c[i - 1][1] + c[i][1].substring(0, c[i][1].length - c[i - 1][1].length), c[i + 1][1] = c[i - 1][1] + c[i + 1][1], c.splice(i - 1, 1), x = !0) : c[i][1].substring(0, c[i + 1][1].length) == c[i + 1][1] && (c[i - 1][1] += c[i + 1][1], c[i][1] = c[i][1].substring(c[i + 1][1].length) + c[i + 1][1], c.splice(i + 1, 1), x = !0)), i++;
                  x && this.diff_cleanupMerge(c);
                }, g.prototype.diff_xIndex = function(c, i) {
                  var b = 0, f = 0, v = 0, u = 0, T;
                  for (T = 0; T < c.length && (c[T][0] !== B && (b += c[T][1].length), c[T][0] !== k && (f += c[T][1].length), !(b > i)); T++)
                    v = b, u = f;
                  return c.length != T && c[T][0] === k ? u : u + (i - v);
                }, g.prototype.diff_prettyHtml = function(c) {
                  for (var i = [], b = /&/g, f = /</g, v = />/g, u = /\n/g, T = 0; T < c.length; T++) {
                    var x = c[T][0], E = c[T][1], S = E.replace(b, "&amp;").replace(f, "&lt;").replace(v, "&gt;").replace(u, "&para;<br>");
                    switch (x) {
                      case B:
                        i[T] = '<ins style="background:#e6ffe6;">' + S + "</ins>";
                        break;
                      case k:
                        i[T] = '<del style="background:#ffe6e6;">' + S + "</del>";
                        break;
                      case M:
                        i[T] = "<span>" + S + "</span>";
                        break;
                    }
                  }
                  return i.join("");
                }, g.prototype.diff_text1 = function(c) {
                  for (var i = [], b = 0; b < c.length; b++)
                    c[b][0] !== B && (i[b] = c[b][1]);
                  return i.join("");
                }, g.prototype.diff_text2 = function(c) {
                  for (var i = [], b = 0; b < c.length; b++)
                    c[b][0] !== k && (i[b] = c[b][1]);
                  return i.join("");
                }, g.prototype.diff_levenshtein = function(c) {
                  for (var i = 0, b = 0, f = 0, v = 0; v < c.length; v++) {
                    var u = c[v][0], T = c[v][1];
                    switch (u) {
                      case B:
                        b += T.length;
                        break;
                      case k:
                        f += T.length;
                        break;
                      case M:
                        i += Math.max(b, f), b = 0, f = 0;
                        break;
                    }
                  }
                  return i += Math.max(b, f), i;
                }, g.prototype.diff_toDelta = function(c) {
                  for (var i = [], b = 0; b < c.length; b++)
                    switch (c[b][0]) {
                      case B:
                        i[b] = "+" + encodeURI(c[b][1]);
                        break;
                      case k:
                        i[b] = "-" + c[b][1].length;
                        break;
                      case M:
                        i[b] = "=" + c[b][1].length;
                        break;
                    }
                  return i.join("	").replace(/%20/g, " ");
                }, g.prototype.diff_fromDelta = function(c, i) {
                  for (var b = [], f = 0, v = 0, u = i.split(/\t/g), T = 0; T < u.length; T++) {
                    var x = u[T].substring(1);
                    switch (u[T].charAt(0)) {
                      case "+":
                        try {
                          b[f++] = new g.Diff(B, decodeURI(x));
                        } catch {
                          throw new Error("Illegal escape in diff_fromDelta: " + x);
                        }
                        break;
                      case "-":
                      // Fall through.
                      case "=":
                        var E = parseInt(x, 10);
                        if (isNaN(E) || E < 0)
                          throw new Error("Invalid number in diff_fromDelta: " + x);
                        var S = c.substring(v, v += E);
                        u[T].charAt(0) == "=" ? b[f++] = new g.Diff(M, S) : b[f++] = new g.Diff(k, S);
                        break;
                      default:
                        if (u[T])
                          throw new Error("Invalid diff operation in diff_fromDelta: " + u[T]);
                    }
                  }
                  if (v != c.length)
                    throw new Error("Delta length (" + v + ") does not equal source text length (" + c.length + ").");
                  return b;
                }, g.prototype.match_main = function(c, i, b) {
                  if (c == null || i == null || b == null)
                    throw new Error("Null input. (match_main)");
                  return b = Math.max(0, Math.min(b, c.length)), c == i ? 0 : c.length ? c.substring(b, b + i.length) == i ? b : this.match_bitap_(c, i, b) : -1;
                }, g.prototype.match_bitap_ = function(c, i, b) {
                  if (i.length > this.Match_MaxBits)
                    throw new Error("Pattern too long for this browser.");
                  var f = this.match_alphabet_(i), v = this;
                  function u(Z, ne) {
                    var ce = Z / i.length, fe = Math.abs(b - ne);
                    return v.Match_Distance ? ce + fe / v.Match_Distance : fe ? 1 : ce;
                  }
                  var T = this.Match_Threshold, x = c.indexOf(i, b);
                  x != -1 && (T = Math.min(u(0, x), T), x = c.lastIndexOf(i, b + i.length), x != -1 && (T = Math.min(u(0, x), T)));
                  var E = 1 << i.length - 1;
                  x = -1;
                  for (var S, l, A = i.length + c.length, $, I = 0; I < i.length; I++) {
                    for (S = 0, l = A; S < l; )
                      u(I, b + l) <= T ? S = l : A = l, l = Math.floor((A - S) / 2 + S);
                    A = l;
                    var O = Math.max(1, b - l + 1), W = Math.min(b + l, c.length) + i.length, Q = Array(W + 2);
                    Q[W + 1] = (1 << I) - 1;
                    for (var G = W; G >= O; G--) {
                      var P = f[c.charAt(G - 1)];
                      if (I === 0 ? Q[G] = (Q[G + 1] << 1 | 1) & P : Q[G] = (Q[G + 1] << 1 | 1) & P | (($[G + 1] | $[G]) << 1 | 1) | $[G + 1], Q[G] & E) {
                        var j = u(I, G - 1);
                        if (j <= T)
                          if (T = j, x = G - 1, x > b)
                            O = Math.max(1, 2 * b - x);
                          else
                            break;
                      }
                    }
                    if (u(I + 1, b) > T)
                      break;
                    $ = Q;
                  }
                  return x;
                }, g.prototype.match_alphabet_ = function(c) {
                  for (var i = {}, b = 0; b < c.length; b++)
                    i[c.charAt(b)] = 0;
                  for (var b = 0; b < c.length; b++)
                    i[c.charAt(b)] |= 1 << c.length - b - 1;
                  return i;
                }, g.prototype.patch_addContext_ = function(c, i) {
                  if (i.length != 0) {
                    if (c.start2 === null)
                      throw Error("patch not initialized");
                    for (var b = i.substring(c.start2, c.start2 + c.length1), f = 0; i.indexOf(b) != i.lastIndexOf(b) && b.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
                      f += this.Patch_Margin, b = i.substring(c.start2 - f, c.start2 + c.length1 + f);
                    f += this.Patch_Margin;
                    var v = i.substring(c.start2 - f, c.start2);
                    v && c.diffs.unshift(new g.Diff(M, v));
                    var u = i.substring(c.start2 + c.length1, c.start2 + c.length1 + f);
                    u && c.diffs.push(new g.Diff(M, u)), c.start1 -= v.length, c.start2 -= v.length, c.length1 += v.length + u.length, c.length2 += v.length + u.length;
                  }
                }, g.prototype.patch_make = function(c, i, b) {
                  var f, v;
                  if (typeof c == "string" && typeof i == "string" && typeof b > "u")
                    f = /** @type {string} */
                    c, v = this.diff_main(
                      f,
                      /** @type {string} */
                      i,
                      !0
                    ), v.length > 2 && (this.diff_cleanupSemantic(v), this.diff_cleanupEfficiency(v));
                  else if (c && typeof c == "object" && typeof i > "u" && typeof b > "u")
                    v = /** @type {!Array.<!diff_match_patch.Diff>} */
                    c, f = this.diff_text1(v);
                  else if (typeof c == "string" && i && typeof i == "object" && typeof b > "u")
                    f = /** @type {string} */
                    c, v = /** @type {!Array.<!diff_match_patch.Diff>} */
                    i;
                  else if (typeof c == "string" && typeof i == "string" && b && typeof b == "object")
                    f = /** @type {string} */
                    c, v = /** @type {!Array.<!diff_match_patch.Diff>} */
                    b;
                  else
                    throw new Error("Unknown call format to patch_make.");
                  if (v.length === 0)
                    return [];
                  for (var u = [], T = new g.patch_obj(), x = 0, E = 0, S = 0, l = f, A = f, $ = 0; $ < v.length; $++) {
                    var I = v[$][0], O = v[$][1];
                    switch (!x && I !== M && (T.start1 = E, T.start2 = S), I) {
                      case B:
                        T.diffs[x++] = v[$], T.length2 += O.length, A = A.substring(0, S) + O + A.substring(S);
                        break;
                      case k:
                        T.length1 += O.length, T.diffs[x++] = v[$], A = A.substring(0, S) + A.substring(S + O.length);
                        break;
                      case M:
                        O.length <= 2 * this.Patch_Margin && x && v.length != $ + 1 ? (T.diffs[x++] = v[$], T.length1 += O.length, T.length2 += O.length) : O.length >= 2 * this.Patch_Margin && x && (this.patch_addContext_(T, l), u.push(T), T = new g.patch_obj(), x = 0, l = A, E = S);
                        break;
                    }
                    I !== B && (E += O.length), I !== k && (S += O.length);
                  }
                  return x && (this.patch_addContext_(T, l), u.push(T)), u;
                }, g.prototype.patch_deepCopy = function(c) {
                  for (var i = [], b = 0; b < c.length; b++) {
                    var f = c[b], v = new g.patch_obj();
                    v.diffs = [];
                    for (var u = 0; u < f.diffs.length; u++)
                      v.diffs[u] = new g.Diff(f.diffs[u][0], f.diffs[u][1]);
                    v.start1 = f.start1, v.start2 = f.start2, v.length1 = f.length1, v.length2 = f.length2, i[b] = v;
                  }
                  return i;
                }, g.prototype.patch_apply = function(c, i) {
                  if (c.length == 0)
                    return [i, []];
                  c = this.patch_deepCopy(c);
                  var b = this.patch_addPadding(c);
                  i = b + i + b, this.patch_splitMax(c);
                  for (var f = 0, v = [], u = 0; u < c.length; u++) {
                    var T = c[u].start2 + f, x = this.diff_text1(c[u].diffs), E, S = -1;
                    if (x.length > this.Match_MaxBits ? (E = this.match_main(i, x.substring(0, this.Match_MaxBits), T), E != -1 && (S = this.match_main(i, x.substring(x.length - this.Match_MaxBits), T + x.length - this.Match_MaxBits), (S == -1 || E >= S) && (E = -1))) : E = this.match_main(i, x, T), E == -1)
                      v[u] = !1, f -= c[u].length2 - c[u].length1;
                    else {
                      v[u] = !0, f = E - T;
                      var l;
                      if (S == -1 ? l = i.substring(E, E + x.length) : l = i.substring(E, S + this.Match_MaxBits), x == l)
                        i = i.substring(0, E) + this.diff_text2(c[u].diffs) + i.substring(E + x.length);
                      else {
                        var A = this.diff_main(x, l, !1);
                        if (x.length > this.Match_MaxBits && this.diff_levenshtein(A) / x.length > this.Patch_DeleteThreshold)
                          v[u] = !1;
                        else {
                          this.diff_cleanupSemanticLossless(A);
                          for (var $ = 0, I, O = 0; O < c[u].diffs.length; O++) {
                            var W = c[u].diffs[O];
                            W[0] !== M && (I = this.diff_xIndex(A, $)), W[0] === B ? i = i.substring(0, E + I) + W[1] + i.substring(E + I) : W[0] === k && (i = i.substring(0, E + I) + i.substring(E + this.diff_xIndex(A, $ + W[1].length))), W[0] !== k && ($ += W[1].length);
                          }
                        }
                      }
                    }
                  }
                  return i = i.substring(b.length, i.length - b.length), [i, v];
                }, g.prototype.patch_addPadding = function(c) {
                  for (var i = this.Patch_Margin, b = "", f = 1; f <= i; f++)
                    b += String.fromCharCode(f);
                  for (var f = 0; f < c.length; f++)
                    c[f].start1 += i, c[f].start2 += i;
                  var v = c[0], u = v.diffs;
                  if (u.length == 0 || u[0][0] != M)
                    u.unshift(new g.Diff(M, b)), v.start1 -= i, v.start2 -= i, v.length1 += i, v.length2 += i;
                  else if (i > u[0][1].length) {
                    var T = i - u[0][1].length;
                    u[0][1] = b.substring(u[0][1].length) + u[0][1], v.start1 -= T, v.start2 -= T, v.length1 += T, v.length2 += T;
                  }
                  if (v = c[c.length - 1], u = v.diffs, u.length == 0 || u[u.length - 1][0] != M)
                    u.push(new g.Diff(M, b)), v.length1 += i, v.length2 += i;
                  else if (i > u[u.length - 1][1].length) {
                    var T = i - u[u.length - 1][1].length;
                    u[u.length - 1][1] += b.substring(0, T), v.length1 += T, v.length2 += T;
                  }
                  return b;
                }, g.prototype.patch_splitMax = function(c) {
                  for (var i = this.Match_MaxBits, b = 0; b < c.length; b++)
                    if (!(c[b].length1 <= i)) {
                      var f = c[b];
                      c.splice(b--, 1);
                      for (var v = f.start1, u = f.start2, T = ""; f.diffs.length !== 0; ) {
                        var x = new g.patch_obj(), E = !0;
                        for (x.start1 = v - T.length, x.start2 = u - T.length, T !== "" && (x.length1 = x.length2 = T.length, x.diffs.push(new g.Diff(M, T))); f.diffs.length !== 0 && x.length1 < i - this.Patch_Margin; ) {
                          var S = f.diffs[0][0], l = f.diffs[0][1];
                          S === B ? (x.length2 += l.length, u += l.length, x.diffs.push(f.diffs.shift()), E = !1) : S === k && x.diffs.length == 1 && x.diffs[0][0] == M && l.length > 2 * i ? (x.length1 += l.length, v += l.length, E = !1, x.diffs.push(new g.Diff(S, l)), f.diffs.shift()) : (l = l.substring(0, i - x.length1 - this.Patch_Margin), x.length1 += l.length, v += l.length, S === M ? (x.length2 += l.length, u += l.length) : E = !1, x.diffs.push(new g.Diff(S, l)), l == f.diffs[0][1] ? f.diffs.shift() : f.diffs[0][1] = f.diffs[0][1].substring(l.length));
                        }
                        T = this.diff_text2(x.diffs), T = T.substring(T.length - this.Patch_Margin);
                        var A = this.diff_text1(f.diffs).substring(0, this.Patch_Margin);
                        A !== "" && (x.length1 += A.length, x.length2 += A.length, x.diffs.length !== 0 && x.diffs[x.diffs.length - 1][0] === M ? x.diffs[x.diffs.length - 1][1] += A : x.diffs.push(new g.Diff(M, A))), E || c.splice(++b, 0, x);
                      }
                    }
                }, g.prototype.patch_toText = function(c) {
                  for (var i = [], b = 0; b < c.length; b++)
                    i[b] = c[b];
                  return i.join("");
                }, g.prototype.patch_fromText = function(c) {
                  var i = [];
                  if (!c)
                    return i;
                  for (var b = c.split(`
`), f = 0, v = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; f < b.length; ) {
                    var u = b[f].match(v);
                    if (!u)
                      throw new Error("Invalid patch string: " + b[f]);
                    var T = new g.patch_obj();
                    for (i.push(T), T.start1 = parseInt(u[1], 10), u[2] === "" ? (T.start1--, T.length1 = 1) : u[2] == "0" ? T.length1 = 0 : (T.start1--, T.length1 = parseInt(u[2], 10)), T.start2 = parseInt(u[3], 10), u[4] === "" ? (T.start2--, T.length2 = 1) : u[4] == "0" ? T.length2 = 0 : (T.start2--, T.length2 = parseInt(u[4], 10)), f++; f < b.length; ) {
                      var x = b[f].charAt(0);
                      try {
                        var E = decodeURI(b[f].substring(1));
                      } catch {
                        throw new Error("Illegal escape in patch_fromText: " + E);
                      }
                      if (x == "-")
                        T.diffs.push(new g.Diff(k, E));
                      else if (x == "+")
                        T.diffs.push(new g.Diff(B, E));
                      else if (x == " ")
                        T.diffs.push(new g.Diff(M, E));
                      else {
                        if (x == "@")
                          break;
                        if (x !== "") throw new Error('Invalid patch mode "' + x + '" in: ' + E);
                      }
                      f++;
                    }
                  }
                  return i;
                }, g.patch_obj = function() {
                  this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
                }, g.patch_obj.prototype.toString = function() {
                  var c, i;
                  this.length1 === 0 ? c = this.start1 + ",0" : this.length1 == 1 ? c = this.start1 + 1 : c = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? i = this.start2 + ",0" : this.length2 == 1 ? i = this.start2 + 1 : i = this.start2 + 1 + "," + this.length2;
                  for (var b = ["@@ -" + c + " +" + i + ` @@
`], f, v = 0; v < this.diffs.length; v++) {
                    switch (this.diffs[v][0]) {
                      case B:
                        f = "+";
                        break;
                      case k:
                        f = "-";
                        break;
                      case M:
                        f = " ";
                        break;
                    }
                    b[v + 1] = f + encodeURI(this.diffs[v][1]) + `
`;
                  }
                  return b.join("").replace(/%20/g, " ");
                }, D.exports = g, D.exports.diff_match_patch = g, D.exports.DIFF_DELETE = k, D.exports.DIFF_INSERT = B, D.exports.DIFF_EQUAL = M;
              }
            ),
            /***/
            408: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  default: () => (
                    /* binding */
                    ze
                  )
                });
                var B = k(135), M = k(840), c = k(775), i = k(428), b = k(325), f = k(483), v = k(999), u = function(U) {
                  U === void 0 && (U = document);
                  var we = function(re) {
                    var F = document.createElement("img");
                    F.src = re.getAttribute("data-src"), F.addEventListener("load", function() {
                      !re.getAttribute("style") && !re.getAttribute("class") && !re.getAttribute("width") && !re.getAttribute("height") && F.naturalHeight > F.naturalWidth && F.naturalWidth / F.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && F.naturalHeight > window.innerHeight - 40 && (re.style.height = window.innerHeight - 40 + "px"), re.src = F.src;
                    }), re.removeAttribute("data-src");
                  };
                  if (!("IntersectionObserver" in window))
                    return U.querySelectorAll("img").forEach(function(re) {
                      re.getAttribute("data-src") && we(re);
                    }), !1;
                  window.vditorImageIntersectionObserver ? (window.vditorImageIntersectionObserver.disconnect(), U.querySelectorAll("img").forEach(function(re) {
                    window.vditorImageIntersectionObserver.observe(re);
                  })) : (window.vditorImageIntersectionObserver = new IntersectionObserver(function(re) {
                    re.forEach(function(F) {
                      (typeof F.isIntersecting > "u" ? F.intersectionRatio !== 0 : F.isIntersecting) && F.target.getAttribute("data-src") && we(F.target);
                    });
                  }), U.querySelectorAll("img").forEach(function(re) {
                    window.vditorImageIntersectionObserver.observe(re);
                  }));
                }, T = k(472), x = k(280), E = k(637), S = k(825), l = k(11), A = k(194), $ = k(436), I = k(229), O = k(145), W = k(538), Q = k(413), G = k(106), P = k(673), j = function(U) {
                  document.querySelectorAll(".vditor-anchor").forEach(function(we) {
                    U === 1 && we.classList.add("vditor-anchor--left"), we.onclick = function() {
                      var re = we.getAttribute("href").substr(1), F = document.getElementById("vditorAnchor-" + re).offsetTop;
                      document.querySelector("html").scrollTop = F;
                    };
                  }), window.onhashchange = function() {
                    var we = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
                    we && (document.querySelector("html").scrollTop = we.offsetTop);
                  };
                }, Z = k(214), ne = k(810), ce = function(U, we) {
                  if (we === void 0 && (we = "zh_CN"), !(typeof speechSynthesis > "u" || typeof SpeechSynthesisUtterance > "u")) {
                    var re = function() {
                      var J = speechSynthesis.getVoices(), z, ge;
                      return J.forEach(function(ue) {
                        ue.lang === we.replace("_", "-") && (z = ue), ue.default && (ge = ue);
                      }), z || (z = ge), z;
                    }, F = '<svg><use xlink:href="#vditor-icon-play"></use></svg>', be = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                    document.getElementById("vditorIconScript") || (F = '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>', be = '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>');
                    var ae = document.querySelector(".vditor-speech");
                    ae || (ae = document.createElement("button"), ae.className = "vditor-speech", U.insertAdjacentElement("beforeend", ae), speechSynthesis.onvoiceschanged !== void 0 && (speechSynthesis.onvoiceschanged = re));
                    var Ae = re(), Se = new SpeechSynthesisUtterance();
                    Se.voice = Ae, Se.onend = Se.onerror = function() {
                      ae.style.display = "none", speechSynthesis.cancel(), ae.classList.remove("vditor-speech--current"), ae.innerHTML = F;
                    }, U.addEventListener(window.ontouchstart !== void 0 ? "touchend" : "click", function(J) {
                      var z = J.target;
                      if (z.classList.contains("vditor-speech") || z.parentElement.classList.contains("vditor-speech")) {
                        ae.classList.contains("vditor-speech--current") ? speechSynthesis.speaking && (speechSynthesis.paused ? (speechSynthesis.resume(), ae.innerHTML = be) : (speechSynthesis.pause(), ae.innerHTML = F)) : (Se.text = ae.getAttribute("data-text"), speechSynthesis.speak(Se), ae.classList.add("vditor-speech--current"), ae.innerHTML = be), (0, ne.Hc)(window.vditorSpeechRange), U.focus();
                        return;
                      }
                      if (ae.style.display = "none", speechSynthesis.cancel(), ae.classList.remove("vditor-speech--current"), ae.innerHTML = F, getSelection().rangeCount !== 0) {
                        var ge = getSelection().getRangeAt(0), ue = ge.toString().trim();
                        if (ue) {
                          window.vditorSpeechRange = ge.cloneRange();
                          var se = ge.getBoundingClientRect();
                          ae.innerHTML = F, ae.style.display = "block", ae.style.top = se.top + se.height + document.querySelector("html").scrollTop - 20 + "px", window.ontouchstart !== void 0 ? ae.style.left = J.changedTouches[J.changedTouches.length - 1].pageX + 2 + "px" : ae.style.left = J.clientX + 2 + "px", ae.setAttribute("data-text", ue);
                        }
                      }
                    });
                  }
                }, fe = function(U, we, re, F) {
                  function be(ae) {
                    return ae instanceof re ? ae : new re(function(Ae) {
                      Ae(ae);
                    });
                  }
                  return new (re || (re = Promise))(function(ae, Ae) {
                    function Se(ge) {
                      try {
                        z(F.next(ge));
                      } catch (ue) {
                        Ae(ue);
                      }
                    }
                    function J(ge) {
                      try {
                        z(F.throw(ge));
                      } catch (ue) {
                        Ae(ue);
                      }
                    }
                    function z(ge) {
                      ge.done ? ae(ge.value) : be(ge.value).then(Se, J);
                    }
                    z((F = F.apply(U, we || [])).next());
                  });
                }, pe = function(U, we) {
                  var re = { label: 0, sent: function() {
                    if (ae[0] & 1) throw ae[1];
                    return ae[1];
                  }, trys: [], ops: [] }, F, be, ae, Ae;
                  return Ae = { next: Se(0), throw: Se(1), return: Se(2) }, typeof Symbol == "function" && (Ae[Symbol.iterator] = function() {
                    return this;
                  }), Ae;
                  function Se(z) {
                    return function(ge) {
                      return J([z, ge]);
                    };
                  }
                  function J(z) {
                    if (F) throw new TypeError("Generator is already executing.");
                    for (; Ae && (Ae = 0, z[0] && (re = 0)), re; ) try {
                      if (F = 1, be && (ae = z[0] & 2 ? be.return : z[0] ? be.throw || ((ae = be.return) && ae.call(be), 0) : be.next) && !(ae = ae.call(be, z[1])).done) return ae;
                      switch (be = 0, ae && (z = [z[0] & 2, ae.value]), z[0]) {
                        case 0:
                        case 1:
                          ae = z;
                          break;
                        case 4:
                          return re.label++, { value: z[1], done: !1 };
                        case 5:
                          re.label++, be = z[1], z = [0];
                          continue;
                        case 7:
                          z = re.ops.pop(), re.trys.pop();
                          continue;
                        default:
                          if (ae = re.trys, !(ae = ae.length > 0 && ae[ae.length - 1]) && (z[0] === 6 || z[0] === 2)) {
                            re = 0;
                            continue;
                          }
                          if (z[0] === 3 && (!ae || z[1] > ae[0] && z[1] < ae[3])) {
                            re.label = z[1];
                            break;
                          }
                          if (z[0] === 6 && re.label < ae[1]) {
                            re.label = ae[1], ae = z;
                            break;
                          }
                          if (ae && re.label < ae[2]) {
                            re.label = ae[2], re.ops.push(z);
                            break;
                          }
                          ae[2] && re.ops.pop(), re.trys.pop();
                          continue;
                      }
                      z = we.call(U, re);
                    } catch (ge) {
                      z = [6, ge], be = 0;
                    } finally {
                      F = ae = 0;
                    }
                    if (z[0] & 5) throw z[1];
                    return { value: z[0] ? z[1] : void 0, done: !0 };
                  }
                }, ve = function(U) {
                  var we, re = {
                    anchor: 0,
                    cdn: O.g.CDN,
                    customEmoji: {},
                    emojiPath: "".concat(O.g.CDN, "/dist/images/emoji"),
                    hljs: O.g.HLJS_OPTIONS,
                    icon: "ant",
                    lang: "zh_CN",
                    markdown: O.g.MARKDOWN_OPTIONS,
                    math: O.g.MATH_OPTIONS,
                    mode: "light",
                    speech: {
                      enable: !1
                    },
                    render: {
                      media: {
                        enable: !0
                      }
                    },
                    theme: O.g.THEME_OPTIONS
                  };
                  return U.cdn && (!((we = U.theme) === null || we === void 0) && we.path || (re.theme.path = "".concat(U.cdn, "/dist/css/content-theme")), U.emojiPath || (re.emojiPath = "".concat(U.cdn, "/dist/images/emoji"))), (0, P.T)(re, U);
                }, he = function(U, we) {
                  var re = ve(we);
                  return (0, Q.G)("".concat(re.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    var F = (0, Z.X)({
                      autoSpace: re.markdown.autoSpace,
                      gfmAutoLink: re.markdown.gfmAutoLink,
                      codeBlockPreview: re.markdown.codeBlockPreview,
                      emojiSite: re.emojiPath,
                      emojis: re.customEmoji,
                      fixTermTypo: re.markdown.fixTermTypo,
                      footnotes: re.markdown.footnotes,
                      headingAnchor: re.anchor !== 0,
                      inlineMathDigit: re.math.inlineDigit,
                      lazyLoadImage: re.lazyLoadImage,
                      linkBase: re.markdown.linkBase,
                      linkPrefix: re.markdown.linkPrefix,
                      listStyle: re.markdown.listStyle,
                      mark: re.markdown.mark,
                      mathBlockPreview: re.markdown.mathBlockPreview,
                      paragraphBeginningSpace: re.markdown.paragraphBeginningSpace,
                      sanitize: re.markdown.sanitize,
                      toc: re.markdown.toc
                    });
                    return we != null && we.renderers && F.SetJSRenderers({
                      renderers: {
                        Md2HTML: we.renderers
                      }
                    }), F.SetHeadingID(!0), F.Md2HTML(U);
                  });
                }, R = function(U, we, re) {
                  return fe(void 0, void 0, void 0, function() {
                    var F, be, ae, Ae;
                    return pe(this, function(Se) {
                      switch (Se.label) {
                        case 0:
                          return F = ve(re), [4, he(we, F)];
                        case 1:
                          if (be = Se.sent(), F.transform && (be = F.transform(be)), U.innerHTML = be, U.classList.add("vditor-reset"), F.i18n) return [3, 5];
                          if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(F.lang)) return [3, 2];
                          throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                        case 2:
                          return ae = "vditorI18nScript", Ae = ae + F.lang, document.querySelectorAll('head script[id^="'.concat(ae, '"]')).forEach(function(J) {
                            J.id !== Ae && document.head.removeChild(J);
                          }), [4, (0, Q.G)("".concat(F.cdn, "/dist/js/i18n/").concat(F.lang, ".js"), Ae)];
                        case 3:
                          Se.sent(), Se.label = 4;
                        case 4:
                          return [3, 6];
                        case 5:
                          window.VditorI18n = F.i18n, Se.label = 6;
                        case 6:
                          return F.icon ? [4, (0, Q.G)("".concat(F.cdn, "/dist/js/icons/").concat(F.icon, ".js"), "vditorIconScript")] : [3, 8];
                        case 7:
                          Se.sent(), Se.label = 8;
                        case 8:
                          return (0, W.Z)(F.theme.current, F.theme.path), F.anchor === 1 && U.classList.add("vditor-reset--anchor"), (0, i.O)(U, F.hljs), (0, v.s)(F.hljs, U, F.cdn), (0, T.H)(U, {
                            cdn: F.cdn,
                            math: F.math
                          }), (0, E.i)(U, F.cdn, F.mode), (0, S.J)(U, F.cdn, F.mode), (0, l.K)(U, F.cdn), (0, b.P)(U, F.cdn), (0, f.v)(U, F.cdn), (0, c.p)(U, F.cdn, F.mode), (0, A.P)(U, F.cdn, F.mode), (0, I.B)(U, F.cdn), (0, B.Q)(U, F.cdn), F.render.media.enable && (0, x.Y)(U), F.speech.enable && ce(U), F.anchor !== 0 && j(F.anchor), F.after && F.after(), F.lazyLoadImage && u(U), U.addEventListener("click", function(J) {
                            var z = (0, G.lG)(J.target, "SPAN");
                            if (z && (0, G.fb)(z, "vditor-toc")) {
                              var ge = U.querySelector("#" + z.getAttribute("data-target-id"));
                              ge && window.scrollTo(window.scrollX, ge.offsetTop);
                              return;
                            }
                          }), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, Re = k(190), Pe = k(580), We = (
                  /** @class */
                  function() {
                    function U() {
                    }
                    return U.adapterRender = M, U.previewImage = Re.E, U.codeRender = i.O, U.graphvizRender = f.v, U.highlightRender = v.s, U.mathRender = T.H, U.mermaidRender = E.i, U.SMILESRender = S.J, U.markmapRender = l.K, U.flowchartRender = b.P, U.chartRender = c.p, U.abcRender = B.Q, U.mindmapRender = A.P, U.plantumlRender = I.B, U.outlineRender = $.k, U.mediaRender = x.Y, U.speechRender = ce, U.lazyLoadImageRender = u, U.md2html = he, U.preview = R, U.setCodeTheme = Pe.Y, U.setContentTheme = W.Z, U;
                  }()
                );
                const ze = We;
              }
            ),
            /***/
            145: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  g: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var B = "3.11.2", M = (
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    b
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = k(494), b = function(f, v, u) {
                  f === void 0 && (f = document), v === void 0 && (v = B.g.CDN);
                  var T = c.SMILESRenderAdapter.getElements(f);
                  T.length > 0 && (0, M.G)("".concat(v, "/dist/js/smiles-drawer/smiles-drawer.min.js?v=2.1.7"), "vditorAbcjsScript").then(function() {
                    var x = new SmiDrawer({}, {});
                    T.forEach(function(E) {
                      var S = c.SMILESRenderAdapter.getCode(E).trim();
                      if (!(E.getAttribute("data-processed") === "true" || S.trim() === "")) {
                        var l = "smiles" + (0, i.Wb)();
                        E.innerHTML = '<svg id="'.concat(l, '"></svg>'), x.draw(S, "#" + l, u === "dark" ? "dark" : void 0), E.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            135: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  Q: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = function(b, f) {
                  b === void 0 && (b = document), f === void 0 && (f = B.g.CDN);
                  var v = c.abcRenderAdapter.getElements(b);
                  v.length > 0 && (0, M.G)("".concat(f, "/dist/js/abcjs/abcjs_basic.min.js"), "vditorAbcjsScript").then(function() {
                    v.forEach(function(u) {
                      u.parentElement.classList.contains("vditor-wysiwyg__pre") || u.parentElement.classList.contains("vditor-ir__marker--pre") || u.getAttribute("data-processed") !== "true" && (ABCJS.renderAbc(u, c.abcRenderAdapter.getCode(u).trim()), u.style.overflowX = "auto", u.setAttribute("data-processed", "true"));
                    });
                  });
                };
              }
            ),
            /***/
            840: (
              /***/
              (D, g, k) => {
                k.r(g), k.d(g, {
                  /* harmony export */
                  mathRenderAdapter: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  SMILESRenderAdapter: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  mermaidRenderAdapter: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  markmapRenderAdapter: () => (
                    /* binding */
                    i
                  ),
                  /* harmony export */
                  mindmapRenderAdapter: () => (
                    /* binding */
                    b
                  ),
                  /* harmony export */
                  chartRenderAdapter: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  abcRenderAdapter: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  graphvizRenderAdapter: () => (
                    /* binding */
                    u
                  ),
                  /* harmony export */
                  flowchartRenderAdapter: () => (
                    /* binding */
                    T
                  ),
                  /* harmony export */
                  plantumlRenderAdapter: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var B = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-math");
                  }
                }, M = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-smiles");
                  }
                }, c = {
                  /** 不仅要返回code，并且需要将 code 设置为 el 的 innerHTML */
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-mermaid");
                  }
                }, i = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-markmap");
                  }
                }, b = {
                  getCode: function(E) {
                    return E.getAttribute("data-code");
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-mindmap");
                  }
                }, f = {
                  getCode: function(E) {
                    return E.innerText;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-echarts");
                  }
                }, v = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-abc");
                  }
                }, u = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-graphviz");
                  }
                }, T = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-flowchart");
                  }
                }, x = {
                  getCode: function(E) {
                    return E.textContent;
                  },
                  getElements: function(E) {
                    return E.querySelectorAll(".language-plantuml");
                  }
                };
              }
            ),
            /***/
            775: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  p: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = k(494), b = function(u, T, x, E) {
                  function S(l) {
                    return l instanceof x ? l : new x(function(A) {
                      A(l);
                    });
                  }
                  return new (x || (x = Promise))(function(l, A) {
                    function $(W) {
                      try {
                        O(E.next(W));
                      } catch (Q) {
                        A(Q);
                      }
                    }
                    function I(W) {
                      try {
                        O(E.throw(W));
                      } catch (Q) {
                        A(Q);
                      }
                    }
                    function O(W) {
                      W.done ? l(W.value) : S(W.value).then($, I);
                    }
                    O((E = E.apply(u, T || [])).next());
                  });
                }, f = function(u, T) {
                  var x = { label: 0, sent: function() {
                    if (l[0] & 1) throw l[1];
                    return l[1];
                  }, trys: [], ops: [] }, E, S, l, A;
                  return A = { next: $(0), throw: $(1), return: $(2) }, typeof Symbol == "function" && (A[Symbol.iterator] = function() {
                    return this;
                  }), A;
                  function $(O) {
                    return function(W) {
                      return I([O, W]);
                    };
                  }
                  function I(O) {
                    if (E) throw new TypeError("Generator is already executing.");
                    for (; A && (A = 0, O[0] && (x = 0)), x; ) try {
                      if (E = 1, S && (l = O[0] & 2 ? S.return : O[0] ? S.throw || ((l = S.return) && l.call(S), 0) : S.next) && !(l = l.call(S, O[1])).done) return l;
                      switch (S = 0, l && (O = [O[0] & 2, l.value]), O[0]) {
                        case 0:
                        case 1:
                          l = O;
                          break;
                        case 4:
                          return x.label++, { value: O[1], done: !1 };
                        case 5:
                          x.label++, S = O[1], O = [0];
                          continue;
                        case 7:
                          O = x.ops.pop(), x.trys.pop();
                          continue;
                        default:
                          if (l = x.trys, !(l = l.length > 0 && l[l.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                            x = 0;
                            continue;
                          }
                          if (O[0] === 3 && (!l || O[1] > l[0] && O[1] < l[3])) {
                            x.label = O[1];
                            break;
                          }
                          if (O[0] === 6 && x.label < l[1]) {
                            x.label = l[1], l = O;
                            break;
                          }
                          if (l && x.label < l[2]) {
                            x.label = l[2], x.ops.push(O);
                            break;
                          }
                          l[2] && x.ops.pop(), x.trys.pop();
                          continue;
                      }
                      O = T.call(u, x);
                    } catch (W) {
                      O = [6, W], S = 0;
                    } finally {
                      E = l = 0;
                    }
                    if (O[0] & 5) throw O[1];
                    return { value: O[0] ? O[1] : void 0, done: !0 };
                  }
                }, v = function(u, T, x) {
                  u === void 0 && (u = document), T === void 0 && (T = B.g.CDN);
                  var E = c.chartRenderAdapter.getElements(u);
                  E.length > 0 && (0, M.G)("".concat(T, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    E.forEach(function(S) {
                      return b(void 0, void 0, void 0, function() {
                        var l, A, $;
                        return f(this, function(I) {
                          switch (I.label) {
                            case 0:
                              if (S.parentElement.classList.contains("vditor-wysiwyg__pre") || S.parentElement.classList.contains("vditor-ir__marker--pre"))
                                return [
                                  2
                                  /*return*/
                                ];
                              if (l = c.chartRenderAdapter.getCode(S).trim(), !l)
                                return [
                                  2
                                  /*return*/
                                ];
                              I.label = 1;
                            case 1:
                              return I.trys.push([1, 3, , 4]), S.getAttribute("data-processed") === "true" ? [
                                2
                                /*return*/
                              ] : [4, (0, i.Qf)(l)];
                            case 2:
                              return A = I.sent(), echarts.init(S, x === "dark" ? "dark" : void 0).setOption(A), S.setAttribute("data-processed", "true"), [3, 4];
                            case 3:
                              return $ = I.sent(), S.className = "vditor-reset--error", S.innerHTML = "echarts render error: <br>".concat($), [3, 4];
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  O: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var B = k(105), M = k(145), c = function(i, b) {
                  Array.from(i.querySelectorAll("pre > code")).filter(function(f, v) {
                    return !(f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre") || f.classList.contains("language-mermaid") || f.classList.contains("language-flowchart") || f.classList.contains("language-echarts") || f.classList.contains("language-mindmap") || f.classList.contains("language-plantuml") || f.classList.contains("language-markmap") || f.classList.contains("language-abc") || f.classList.contains("language-graphviz") || f.classList.contains("language-math") || f.classList.contains("language-smiles") || f.style.maxHeight.indexOf("px") > -1 || i.classList.contains("vditor-preview") && v > 5);
                  }).forEach(function(f) {
                    var v, u, T, x = f.innerText;
                    if (f.classList.contains("highlight-chroma")) {
                      var E = f.cloneNode(!0);
                      E.querySelectorAll(".highlight-ln").forEach(function($) {
                        $.remove();
                      }), x = E.innerText;
                    } else x.endsWith(`
`) && (x = x.substr(0, x.length - 1));
                    var S = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                    document.getElementById("vditorIconScript") || (S = '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                    var l = document.createElement("div");
                    l.className = "vditor-copy", l.innerHTML = '<span aria-label="'.concat(((v = window.VditorI18n) === null || v === void 0 ? void 0 : v.copy) || "复制", `"
onmouseover="this.setAttribute('aria-label', '`).concat(((u = window.VditorI18n) === null || u === void 0 ? void 0 : u.copy) || "复制", `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="event.stopPropagation();this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '`).concat(((T = window.VditorI18n) === null || T === void 0 ? void 0 : T.copied) || "已复制", `');this.previousElementSibling.blur()">`).concat(S, "</span>");
                    var A = document.createElement("textarea");
                    A.value = (0, B.X)(x), l.insertAdjacentElement("afterbegin", A), b && b.renderMenu && b.renderMenu(f, l), f.before(l), f.style.maxHeight = window.outerHeight - 40 + "px", f.insertAdjacentHTML("afterend", '<span style="position: absolute">'.concat(M.g.ZWSP, "</span>"));
                  });
                };
              }
            ),
            /***/
            325: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = function(b, f) {
                  f === void 0 && (f = B.g.CDN);
                  var v = c.flowchartRenderAdapter.getElements(b);
                  v.length !== 0 && (0, M.G)("".concat(f, "/dist/js/flowchart.js/flowchart.min.js"), "vditorFlowchartScript").then(function() {
                    v.forEach(function(u) {
                      if (u.getAttribute("data-processed") !== "true") {
                        var T = flowchart.parse(c.flowchartRenderAdapter.getCode(u));
                        u.innerHTML = "", T.drawSVG(u), u.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            483: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  v: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = function(b, f) {
                  f === void 0 && (f = B.g.CDN);
                  var v = c.graphvizRenderAdapter.getElements(b);
                  v.length !== 0 && (0, M.G)("".concat(f, "/dist/js/graphviz/viz.js"), "vditorGraphVizScript").then(function() {
                    v.forEach(function(u) {
                      var T = c.graphvizRenderAdapter.getCode(u);
                      if (!(u.parentElement.classList.contains("vditor-wysiwyg__pre") || u.parentElement.classList.contains("vditor-ir__marker--pre")) && !(u.getAttribute("data-processed") === "true" || T.trim() === "")) {
                        try {
                          var x = new Blob(["importScripts('".concat(document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js"), "');")], { type: "application/javascript" }), E = window.URL || window.webkitURL, S = E.createObjectURL(x), l = new Worker(S);
                          new Viz({ worker: l }).renderSVGElement(T).then(function(A) {
                            u.innerHTML = A.outerHTML;
                          }).catch(function(A) {
                            u.innerHTML = "graphviz render error: <br>".concat(A), u.className = "vditor-reset--error";
                          });
                        } catch (A) {
                          console.error("graphviz error", A);
                        }
                        u.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            999: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  s: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(290), i = function(b, f, v) {
                  f === void 0 && (f = document), v === void 0 && (v = B.g.CDN);
                  var u = b.style;
                  B.g.CODE_THEME.includes(u) || (u = "github");
                  var T = document.getElementById("vditorHljsStyle"), x = "".concat(v, "/dist/js/highlight.js/styles/").concat(u, ".min.css");
                  if (T && T.getAttribute("href") !== x && T.remove(), (0, c.c)("".concat(v, "/dist/js/highlight.js/styles/").concat(u, ".min.css"), "vditorHljsStyle"), b.enable !== !1) {
                    var E = f.querySelectorAll("pre > code");
                    E.length !== 0 && (0, M.G)("".concat(v, "/dist/js/highlight.js/highlight.min.js?v=11.7.0"), "vditorHljsScript").then(function() {
                      (0, M.G)("".concat(v, "/dist/js/highlight.js/third-languages.js?v=1.0.1"), "vditorHljsThirdScript").then(function() {
                        f.querySelectorAll("pre > code").forEach(function(S) {
                          if (!(S.parentElement.classList.contains("vditor-ir__marker--pre") || S.parentElement.classList.contains("vditor-wysiwyg__pre")) && !(S.classList.contains("language-mermaid") || S.classList.contains("language-flowchart") || S.classList.contains("language-echarts") || S.classList.contains("language-mindmap") || S.classList.contains("language-plantuml") || S.classList.contains("language-smiles") || S.classList.contains("language-abc") || S.classList.contains("language-graphviz") || S.classList.contains("language-math"))) {
                            b.defaultLang !== "" && S.className.indexOf("language-") === -1 && S.classList.add("language-" + b.defaultLang);
                            var l = S.className.replace("language-", "");
                            if (window.hljs.getLanguage(l) || (l = "plaintext"), S.innerHTML = window.hljs.highlight(S.textContent, {
                              language: l,
                              ignoreIllegals: !0
                            }).value, S.classList.add("hljs"), !!b.lineNumber) {
                              S.classList.add("vditor-linenumber");
                              var A = S.querySelector(".vditor-linenumber__temp");
                              A || (A = document.createElement("div"), A.className = "vditor-linenumber__temp", S.insertAdjacentElement("beforeend", A));
                              var $ = getComputedStyle(S).whiteSpace, I = !1;
                              ($ === "pre-wrap" || $ === "pre-line") && (I = !0);
                              var O = "", W = S.textContent.split(/\r\n|\r|\n/g);
                              W.pop(), W.map(function(Q) {
                                var G = "";
                                I && (A.textContent = Q || `
`, G = ' style="height:'.concat(A.getBoundingClientRect().height, 'px"')), O += "<span".concat(G, "></span>");
                              }), A.style.display = "none", O = '<span class="vditor-linenumber__rows">'.concat(O, "</span>"), S.insertAdjacentHTML("beforeend", O);
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  K: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = {}, b = function(u, T) {
                  var x = u.transform(T), E = Object.keys(x.features).filter(function(I) {
                    return !i[I];
                  });
                  E.forEach(function(I) {
                    i[I] = !0;
                  });
                  var S = u.getAssets(E), l = S.styles, A = S.scripts, $ = window.markmap;
                  return l && $.loadCSS(l), A && $.loadJS(A), x;
                }, f = function(u, T) {
                  var x = window.markmap, E = x.Transformer, S = x.Markmap, l = x.deriveOptions;
                  x.globalCSS;
                  var A = new E();
                  u.innerHTML = '<svg style="width:100%"></svg>';
                  var $ = u.firstChild, I = S.create($, null), O = b(A, T), W = O.root, Q = O.frontmatter, G = Q == null ? void 0 : Q.markmap, P = l(G);
                  I.setData(W, P), I.fit();
                }, v = function(u, T) {
                  u === void 0 && (u = document), T === void 0 && (T = B.g.CDN);
                  var x = c.markmapRenderAdapter.getElements(u);
                  x.length !== 0 && (0, M.G)("".concat(T, "/dist/js/markmap/markmap.min.js"), "vditorMarkerScript").then(function() {
                    x.forEach(function(E) {
                      var S = c.markmapRenderAdapter.getCode(E);
                      if (!(E.getAttribute("data-processed") === "true" || S.trim() === "")) {
                        var l = document.createElement("div");
                        l.className = "language-markmap", E.parentNode.appendChild(l), f(l, S), E.parentNode.childNodes[0].nodeName == "CODE" && E.parentNode.removeChild(E.parentNode.childNodes[0]);
                      }
                    });
                  });
                };
              }
            ),
            /***/
            472: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    f
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(290), i = k(105), b = k(840), f = function(v, u) {
                  v === void 0 && (v = document);
                  var T = b.mathRenderAdapter.getElements(v);
                  if (T.length !== 0) {
                    var x = {
                      cdn: B.g.CDN,
                      math: {
                        engine: "KaTeX",
                        inlineDigit: !1,
                        macros: {}
                      }
                    };
                    if (u && u.math && (u.math = Object.assign({}, x.math, u.math)), u = Object.assign({}, x, u), u.math.engine === "KaTeX")
                      (0, c.c)("".concat(u.cdn, "/dist/js/katex/katex.min.css?v=0.16.9"), "vditorKatexStyle"), (0, M.G)("".concat(u.cdn, "/dist/js/katex/katex.min.js?v=0.16.9"), "vditorKatexScript").then(function() {
                        (0, M.G)("".concat(u.cdn, "/dist/js/katex/mhchem.min.js?v=0.16.9"), "vditorKatexChemScript").then(function() {
                          T.forEach(function(l) {
                            if (!(l.parentElement.classList.contains("vditor-wysiwyg__pre") || l.parentElement.classList.contains("vditor-ir__marker--pre")) && !l.getAttribute("data-math")) {
                              var A = (0, i.X)(b.mathRenderAdapter.getCode(l));
                              l.setAttribute("data-math", A);
                              try {
                                l.innerHTML = katex.renderToString(A, {
                                  displayMode: l.tagName === "DIV",
                                  output: "html",
                                  macros: u.math.macros
                                });
                              } catch ($) {
                                l.innerHTML = $.message, l.className = "language-math vditor-reset--error";
                              }
                              l.addEventListener("copy", function($) {
                                $.stopPropagation(), $.preventDefault();
                                var I = $.currentTarget.closest(".language-math");
                                $.clipboardData.setData("text/html", I.innerHTML), $.clipboardData.setData("text/plain", I.getAttribute("data-math"));
                              });
                            }
                          });
                        });
                      });
                    else if (u.math.engine === "MathJax") {
                      var E = function(l) {
                        if (l.length !== 0) {
                          var A = 0, $ = l[l.length - 1], I = function() {
                            var O = l[A++];
                            O === $ ? O() : O(I);
                          };
                          I();
                        }
                      };
                      window.MathJax || (window.MathJax = {
                        loader: {
                          paths: { mathjax: "".concat(u.cdn, "/dist/js/mathjax") }
                        },
                        startup: {
                          typeset: !1
                        },
                        tex: {
                          macros: u.math.macros
                        }
                      }, Object.assign(window.MathJax, u.math.mathJaxOptions)), (0, M.J)("".concat(u.cdn, "/dist/js/mathjax/tex-svg-full.js"), "protyleMathJaxScript");
                      var S = function(l, A) {
                        var $ = (0, i.X)(l.textContent).trim(), I = window.MathJax.getMetricsFor(l);
                        I.display = l.tagName === "DIV", window.MathJax.tex2svgPromise($, I).then(function(O) {
                          l.innerHTML = "", l.setAttribute("data-math", $), l.append(O), window.MathJax.startup.document.clear(), window.MathJax.startup.document.updateDocument();
                          var W = O.querySelector('[data-mml-node="merror"]');
                          W && W.textContent.trim() !== "" && (l.innerHTML = W.textContent.trim(), l.className = "vditor-reset--error"), A && A();
                        });
                      };
                      window.MathJax.startup.promise.then(function() {
                        for (var l = [], A = function(I) {
                          var O = T[I];
                          !O.parentElement.classList.contains("vditor-wysiwyg__pre") && !O.parentElement.classList.contains("vditor-ir__marker--pre") && !O.getAttribute("data-math") && (0, i.X)(O.textContent).trim() && l.push(function(W) {
                            I === T.length - 1 ? S(O) : S(O, W);
                          });
                        }, $ = 0; $ < T.length; $++)
                          A($);
                        E(l);
                      });
                    }
                  }
                };
              }
            ),
            /***/
            280: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    b
                  )
                  /* harmony export */
                });
                var B = k(494), M = function(f, v) {
                  f.insertAdjacentHTML("afterend", '<video controls="controls" src="'.concat(v, '"></video>')), f.remove();
                }, c = function(f, v) {
                  f.insertAdjacentHTML("afterend", '<audio controls="controls" src="'.concat(v, '"></audio>')), f.remove();
                }, i = function(f, v) {
                  var u = v.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/), T = v.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), x = v.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/), E = v.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/), S = v.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/), l = v.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/), A = v.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/), $ = v.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                  if (u && u[1].length === 11)
                    f.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//www.youtube.com/embed/'.concat(u[1] + (u[2] ? "?start=" + u[2] : ""), '"></iframe>')), f.remove();
                  else if (T && T[1])
                    f.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//player.youku.com/embed/'.concat(T[1], '"></iframe>')), f.remove();
                  else if (x && x[1])
                    f.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid='.concat(x[1], '"></iframe>')), f.remove();
                  else if (E && E[1])
                    f.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="//coub.com/embed/`.concat(E[1], '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>')), f.remove();
                  else if (S && S[0])
                    f.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.facebook.com/plugins/video.php?href=`.concat(encodeURIComponent(S[0]), '"></iframe>')), f.remove();
                  else if (l && l[2])
                    f.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.dailymotion.com/embed/video/`.concat(l[2], '"></iframe>')), f.remove();
                  else if (v.indexOf("bilibili.com") > -1 && (v.indexOf("bvid=") > -1 || A && A[1])) {
                    var I = {
                      bvid: (0, B.on)("bvid", v) || A && A[1],
                      page: "1",
                      high_quality: "1",
                      as_wide: "1",
                      allowfullscreen: "true",
                      autoplay: "0"
                    };
                    new URL(v.startsWith("http") ? v : "https:" + v).search.split("&").forEach(function(Q, G) {
                      if (Q) {
                        G === 0 && (Q = Q.substr(1));
                        var P = Q.split("=");
                        I[P[0]] = P[1];
                      }
                    });
                    var O = "https://player.bilibili.com/player.html?", W = Object.keys(I);
                    W.forEach(function(Q, G) {
                      O += "".concat(Q, "=").concat(I[Q]), G < W.length - 1 && (O += "&");
                    }), f.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="'.concat(O, '"></iframe>')), f.remove();
                  } else $ && $[1] && (f.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//embed.ted.com/talks/'.concat($[1], '"></iframe>')), f.remove());
                }, b = function(f) {
                  f && f.querySelectorAll("a").forEach(function(v) {
                    var u = v.getAttribute("href");
                    u && (u.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/) ? M(v, u) : u.match(/^.+.(mp3|wav|flac)$/) ? c(v, u) : i(v, u));
                  });
                };
              }
            ),
            /***/
            637: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  i: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = k(494), b = function(u, T, x, E) {
                  function S(l) {
                    return l instanceof x ? l : new x(function(A) {
                      A(l);
                    });
                  }
                  return new (x || (x = Promise))(function(l, A) {
                    function $(W) {
                      try {
                        O(E.next(W));
                      } catch (Q) {
                        A(Q);
                      }
                    }
                    function I(W) {
                      try {
                        O(E.throw(W));
                      } catch (Q) {
                        A(Q);
                      }
                    }
                    function O(W) {
                      W.done ? l(W.value) : S(W.value).then($, I);
                    }
                    O((E = E.apply(u, T || [])).next());
                  });
                }, f = function(u, T) {
                  var x = { label: 0, sent: function() {
                    if (l[0] & 1) throw l[1];
                    return l[1];
                  }, trys: [], ops: [] }, E, S, l, A;
                  return A = { next: $(0), throw: $(1), return: $(2) }, typeof Symbol == "function" && (A[Symbol.iterator] = function() {
                    return this;
                  }), A;
                  function $(O) {
                    return function(W) {
                      return I([O, W]);
                    };
                  }
                  function I(O) {
                    if (E) throw new TypeError("Generator is already executing.");
                    for (; A && (A = 0, O[0] && (x = 0)), x; ) try {
                      if (E = 1, S && (l = O[0] & 2 ? S.return : O[0] ? S.throw || ((l = S.return) && l.call(S), 0) : S.next) && !(l = l.call(S, O[1])).done) return l;
                      switch (S = 0, l && (O = [O[0] & 2, l.value]), O[0]) {
                        case 0:
                        case 1:
                          l = O;
                          break;
                        case 4:
                          return x.label++, { value: O[1], done: !1 };
                        case 5:
                          x.label++, S = O[1], O = [0];
                          continue;
                        case 7:
                          O = x.ops.pop(), x.trys.pop();
                          continue;
                        default:
                          if (l = x.trys, !(l = l.length > 0 && l[l.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                            x = 0;
                            continue;
                          }
                          if (O[0] === 3 && (!l || O[1] > l[0] && O[1] < l[3])) {
                            x.label = O[1];
                            break;
                          }
                          if (O[0] === 6 && x.label < l[1]) {
                            x.label = l[1], l = O;
                            break;
                          }
                          if (l && x.label < l[2]) {
                            x.label = l[2], x.ops.push(O);
                            break;
                          }
                          l[2] && x.ops.pop(), x.trys.pop();
                          continue;
                      }
                      O = T.call(u, x);
                    } catch (W) {
                      O = [6, W], S = 0;
                    } finally {
                      E = l = 0;
                    }
                    if (O[0] & 5) throw O[1];
                    return { value: O[0] ? O[1] : void 0, done: !0 };
                  }
                }, v = function(u, T, x) {
                  u === void 0 && (u = document), T === void 0 && (T = B.g.CDN);
                  var E = c.mermaidRenderAdapter.getElements(u);
                  E.length !== 0 && (0, M.G)("".concat(T, "/dist/js/mermaid/mermaid.min.js?v=11.6.0"), "vditorMermaidScript").then(function() {
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
                    x === "dark" && (S.theme = "dark"), mermaid.initialize(S), E.forEach(function(l) {
                      return b(void 0, void 0, void 0, function() {
                        var A, $, I, O, W;
                        return f(this, function(Q) {
                          switch (Q.label) {
                            case 0:
                              if (A = c.mermaidRenderAdapter.getCode(l), l.getAttribute("data-processed") === "true" || A.trim() === "")
                                return [
                                  2
                                  /*return*/
                                ];
                              $ = "mermaid" + (0, i.Wb)(), Q.label = 1;
                            case 1:
                              return Q.trys.push([1, 3, , 4]), [4, mermaid.render($, l.textContent)];
                            case 2:
                              return I = Q.sent(), l.innerHTML = I.svg, [3, 4];
                            case 3:
                              return O = Q.sent(), W = document.querySelector("#" + $), l.innerHTML = "".concat(W.outerHTML, `<br>
<div style="text-align: left"><small>`).concat(O.message.replace(/\n/, "<br>"), "</small></div>"), W.parentElement.remove(), [3, 4];
                            case 4:
                              return l.setAttribute("data-processed", "true"), [
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = function(b, f, v) {
                  b === void 0 && (b = document), f === void 0 && (f = B.g.CDN);
                  var u = c.mindmapRenderAdapter.getElements(b);
                  u.length > 0 && (0, M.G)("".concat(f, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    u.forEach(function(T) {
                      if (!(T.parentElement.classList.contains("vditor-wysiwyg__pre") || T.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var x = c.mindmapRenderAdapter.getCode(T);
                        if (x)
                          try {
                            if (T.getAttribute("data-processed") === "true")
                              return;
                            echarts.init(T, v === "dark" ? "dark" : void 0).setOption({
                              series: [
                                {
                                  data: [JSON.parse(decodeURIComponent(x))],
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
                                  symbol: function(E, S) {
                                    var l;
                                    return !((l = S == null ? void 0 : S.data) === null || l === void 0) && l.children ? "circle" : "path://";
                                  },
                                  type: "tree"
                                }
                              ],
                              tooltip: {
                                trigger: "item",
                                triggerOn: "mousemove"
                              }
                            }), T.setAttribute("data-processed", "true");
                          } catch (E) {
                            T.className = "vditor-reset--error", T.innerHTML = "mindmap render error: <br>".concat(E);
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  k: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var B = k(771), M = k(472), c = function(i, b, f) {
                  var v = "", u = [];
                  if (Array.from(i.children).forEach(function(S, l) {
                    if ((0, B.W)(S)) {
                      if (f) {
                        var A = S.id.lastIndexOf("_");
                        S.id = S.id.substring(0, A === -1 ? void 0 : A) + "_" + l;
                      }
                      u.push(S.id), v += S.outerHTML.replace("<wbr>", "");
                    }
                  }), v === "")
                    return b.innerHTML = "", "";
                  var T = document.createElement("div");
                  if (f)
                    f.lute.SetToC(!0), f.currentMode === "wysiwyg" && !f.preview.element.contains(i) ? T.innerHTML = f.lute.SpinVditorDOM("<p>[ToC]</p>" + v) : f.currentMode === "ir" && !f.preview.element.contains(i) ? T.innerHTML = f.lute.SpinVditorIRDOM("<p>[ToC]</p>" + v) : T.innerHTML = f.lute.HTML2VditorDOM("<p>[ToC]</p>" + v), f.lute.SetToC(f.options.preview.markdown.toc);
                  else {
                    b.classList.add("vditor-outline");
                    var x = Lute.New();
                    x.SetToC(!0), T.innerHTML = x.HTML2VditorDOM("<p>[ToC]</p>" + v);
                  }
                  var E = T.firstElementChild.querySelectorAll("li > span[data-target-id]");
                  return E.forEach(function(S, l) {
                    if (S.nextElementSibling && S.nextElementSibling.tagName === "UL") {
                      var A = "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                      document.getElementById("vditorIconScript") || (A = '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'), S.innerHTML = "".concat(A, "<span>").concat(S.innerHTML, "</span>");
                    } else
                      S.innerHTML = "<svg></svg><span>".concat(S.innerHTML, "</span>");
                    S.setAttribute("data-target-id", u[l]);
                  }), v = T.firstElementChild.innerHTML, E.length === 0 ? (b.innerHTML = "", v) : (b.innerHTML = v, f && (0, M.H)(b, {
                    cdn: f.options.cdn,
                    math: f.options.preview.math
                  }), b.firstElementChild.addEventListener("click", function(S) {
                    for (var l = S.target; l && !l.isEqualNode(b); ) {
                      if (l.classList.contains("vditor-outline__action")) {
                        l.classList.contains("vditor-outline__action--close") ? (l.classList.remove("vditor-outline__action--close"), l.parentElement.nextElementSibling.setAttribute("style", "display:block")) : (l.classList.add("vditor-outline__action--close"), l.parentElement.nextElementSibling.setAttribute("style", "display:none")), S.preventDefault(), S.stopPropagation();
                        break;
                      } else if (l.getAttribute("data-target-id")) {
                        S.preventDefault(), S.stopPropagation();
                        var A = document.getElementById(l.getAttribute("data-target-id"));
                        if (!A)
                          return;
                        if (f)
                          if (f.options.height === "auto") {
                            var $ = A.offsetTop + f.element.offsetTop;
                            f.options.toolbarConfig.pin || ($ += f.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, $);
                          } else
                            f.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, f.element.offsetTop), f.preview.element.contains(i) ? i.parentElement.scrollTop = A.offsetTop : i.scrollTop = A.offsetTop;
                        else
                          window.scrollTo(window.scrollX, A.offsetTop);
                        break;
                      }
                      l = l.parentElement;
                    }
                  }), v);
                };
              }
            ),
            /***/
            229: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  B: () => (
                    /* binding */
                    i
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(413), c = k(840), i = function(b, f) {
                  b === void 0 && (b = document), f === void 0 && (f = B.g.CDN);
                  var v = c.plantumlRenderAdapter.getElements(b);
                  v.length !== 0 && (0, M.G)("".concat(f, "/dist/js/plantuml/plantuml-encoder.min.js"), "vditorPlantumlScript").then(function() {
                    v.forEach(function(u) {
                      if (!(u.parentElement.classList.contains("vditor-wysiwyg__pre") || u.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var T = c.plantumlRenderAdapter.getCode(u).trim();
                        if (T)
                          try {
                            u.innerHTML = '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1'.concat(plantumlEncoder.encode(T), '"/>');
                          } catch (x) {
                            u.className = "vditor-reset--error", u.innerHTML = "plantuml render error: <br>".concat(x);
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
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    B
                  )
                  /* harmony export */
                });
                var B = function(M) {
                  var c = Lute.New();
                  return c.PutEmojis(M.emojis), c.SetEmojiSite(M.emojiSite), c.SetHeadingAnchor(M.headingAnchor), c.SetInlineMathAllowDigitAfterOpenMarker(M.inlineMathDigit), c.SetAutoSpace(M.autoSpace), c.SetToC(M.toc), c.SetFootnotes(M.footnotes), c.SetFixTermTypo(M.fixTermTypo), c.SetVditorCodeBlockPreview(M.codeBlockPreview), c.SetVditorMathBlockPreview(M.mathBlockPreview), c.SetSanitize(M.sanitize), c.SetChineseParagraphBeginningSpace(M.paragraphBeginningSpace), c.SetRenderListStyle(M.listStyle), c.SetLinkBase(M.linkBase), c.SetLinkPrefix(M.linkPrefix), c.SetMark(M.mark), c.SetGFMAutoLink(M.gfmAutoLink), M.lazyLoadImage && c.SetImageLazyLoading(M.lazyLoadImage), c;
                };
              }
            ),
            /***/
            190: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  E: () => (
                    /* binding */
                    B
                  )
                  /* harmony export */
                });
                var B = function(M, c, i) {
                  i === void 0 && (i = "classic");
                  var b = M.getBoundingClientRect(), f = 36;
                  document.body.insertAdjacentHTML("beforeend", '<div class="vditor vditor-img'.concat(i === "dark" ? " vditor--dark" : "", `">
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
      <img style="width: `).concat(M.width, "px;height:").concat(M.height, "px;transform: translate3d(").concat(b.left, "px, ").concat(b.top - f, 'px, 0)" src="').concat(M.getAttribute("src"), `">
    </div>
</div>`)), document.body.style.overflow = "hidden";
                  var v = document.querySelector(".vditor-img img"), u = "translate3d(".concat(Math.max(0, window.innerWidth - M.naturalWidth) / 2, "px, ").concat(Math.max(0, window.innerHeight - f - M.naturalHeight) / 2, "px, 0)");
                  setTimeout(function() {
                    v.setAttribute("style", "transition: transform .3s ease-in-out;transform: ".concat(u)), setTimeout(function() {
                      v.parentElement.scrollTo((v.parentElement.scrollWidth - v.parentElement.clientWidth) / 2, (v.parentElement.scrollHeight - v.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                  var T = document.querySelector(".vditor-img__btn");
                  T.addEventListener("click", function() {
                    var x = parseInt(T.getAttribute("data-deg"), 10) + 90;
                    x / 90 % 2 === 1 && M.naturalWidth > v.parentElement.clientHeight ? v.style.transform = "translate3d(".concat(Math.max(0, window.innerWidth - M.naturalWidth) / 2, "px, ").concat(M.naturalWidth / 2 - M.naturalHeight / 2, "px, 0) rotateZ(").concat(x, "deg)") : v.style.transform = "".concat(u, " rotateZ(").concat(x, "deg)"), T.setAttribute("data-deg", x.toString()), setTimeout(function() {
                      v.parentElement.scrollTo((v.parentElement.scrollWidth - v.parentElement.clientWidth) / 2, (v.parentElement.scrollHeight - v.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                };
              }
            ),
            /***/
            580: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(290), c = function(i, b) {
                  b === void 0 && (b = B.g.CDN), B.g.CODE_THEME.includes(i) || (i = "github");
                  var f = document.getElementById("vditorHljsStyle"), v = "".concat(b, "/dist/js/highlight.js/styles/").concat(i, ".min.css");
                  f ? f.getAttribute("href") !== v && (f.remove(), (0, M.c)(v, "vditorHljsStyle")) : (0, M.c)(v, "vditorHljsStyle");
                };
              }
            ),
            /***/
            538: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  Z: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var B = k(290), M = function(c, i) {
                  if (!(!c || !i)) {
                    var b = document.getElementById("vditorContentTheme"), f = "".concat(i, "/").concat(c, ".css");
                    b ? b.getAttribute("href") !== f && (b.remove(), (0, B.c)(f, "vditorContentTheme")) : (0, B.c)(f, "vditorContentTheme");
                  }
                };
              }
            ),
            /***/
            413: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  G: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var B = function(c, i) {
                  if (document.getElementById(i))
                    return !1;
                  var b = new XMLHttpRequest();
                  b.open("GET", c, !1), b.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), b.send("");
                  var f = document.createElement("script");
                  f.type = "text/javascript", f.text = b.responseText, f.id = i, document.head.appendChild(f);
                }, M = function(c, i) {
                  return new Promise(function(b, f) {
                    if (document.getElementById(i))
                      return b(!0), !1;
                    var v = document.createElement("script");
                    v.src = c, v.async = !0, document.head.appendChild(v), v.onerror = function(u) {
                      f(u);
                    }, v.onload = function() {
                      if (document.getElementById(i))
                        return v.remove(), b(!0), !1;
                      v.id = i, b(!0);
                    };
                  });
                };
              }
            ),
            /***/
            290: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  c: () => (
                    /* binding */
                    B
                  )
                  /* harmony export */
                });
                var B = function(M, c) {
                  if (!document.getElementById(c)) {
                    var i = document.createElement("link");
                    i.id = c, i.rel = "stylesheet", i.type = "text/css", i.href = M, document.getElementsByTagName("head")[0].appendChild(i);
                  }
                };
              }
            ),
            /***/
            105: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    B
                  )
                  /* harmony export */
                });
                var B = function(M) {
                  return M.replace(/\u00a0/g, " ");
                };
              }
            ),
            /***/
            410: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  G6: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  vU: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  pK: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  Le: () => (
                    /* binding */
                    i
                  ),
                  /* harmony export */
                  yl: () => (
                    /* binding */
                    b
                  ),
                  /* harmony export */
                  ns: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  i7: () => (
                    /* binding */
                    v
                  )
                  /* harmony export */
                });
                var B = function() {
                  return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1;
                }, M = function() {
                  return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                }, c = function() {
                  try {
                    return typeof localStorage < "u";
                  } catch {
                    return !1;
                  }
                }, i = function() {
                  return navigator.userAgent.indexOf("iPhone") > -1 ? "touchstart" : "click";
                }, b = function(u) {
                  return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? !!(u.metaKey && !u.ctrlKey) : !!(!u.metaKey && u.ctrlKey);
                }, f = function(u) {
                  return /Mac/.test(navigator.platform) || navigator.platform === "iPhone" ? u.indexOf("⇧") > -1 && M() && (u = u.replace(";", ":").replace("=", "+").replace("-", "_")) : (u.startsWith("⌘") ? u = u.replace("⌘", "⌘+") : u.startsWith("⌥") && u.substr(1, 1) !== "⌘" ? u = u.replace("⌥", "⌥+") : u = u.replace("⇧⌘", "⌘+⇧+").replace("⌥⌘", "⌥+⌘+"), u = u.replace("⌘", "Ctrl").replace("⇧", "Shift").replace("⌥", "Alt"), u.indexOf("Shift") > -1 && (u = u.replace(";", ":").replace("=", "+").replace("-", "_"))), u;
                }, v = function() {
                  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                };
              }
            ),
            /***/
            494: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  Wb: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  on: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  Qf: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var B = function() {
                  return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(i) {
                    return (parseInt(i, 10) ^ window.crypto.getRandomValues(new Uint32Array(1))[0] & 15 >> parseInt(i, 10) / 4).toString(16);
                  });
                }, M = function(i, b) {
                  b === void 0 && (b = window.location.search);
                  var f = b.substring(b.indexOf("?")), v = f.indexOf("#"), u = new URLSearchParams(f.substring(0, v >= 0 ? v : void 0));
                  return u.get(i);
                }, c = function(i) {
                  return Function('"use strict";return ('.concat(i, ")"))();
                };
              }
            ),
            /***/
            106: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  JQ: () => (
                    /* binding */
                    M
                  ),
                  /* harmony export */
                  E2: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  O9: () => (
                    /* binding */
                    i
                  ),
                  /* harmony export */
                  a1: () => (
                    /* binding */
                    b
                  ),
                  /* harmony export */
                  F9: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  lG: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  fb: () => (
                    /* binding */
                    u
                  ),
                  /* harmony export */
                  DX: () => (
                    /* binding */
                    T
                  )
                  /* harmony export */
                });
                var B = k(771), M = function(x, E) {
                  for (var S = u(x, E), l = !1, A = !1; S && !S.classList.contains("vditor-reset") && !A; )
                    l = u(S.parentElement, E), l ? S = l : A = !0;
                  return S || !1;
                }, c = function(x, E) {
                  for (var S = (0, B.S)(x, E), l = !1, A = !1; S && !S.classList.contains("vditor-reset") && !A; )
                    l = (0, B.S)(S.parentElement, E), l ? S = l : A = !0;
                  return S || !1;
                }, i = function(x) {
                  var E = c(x, "UL"), S = c(x, "OL"), l = E;
                  return S && (!E || E && S.contains(E)) && (l = S), l;
                }, b = function(x, E, S) {
                  if (!x)
                    return !1;
                  x.nodeType === 3 && (x = x.parentElement);
                  for (var l = x, A = !1; l && !A && !l.classList.contains("vditor-reset"); )
                    l.getAttribute(E) === S ? A = !0 : l = l.parentElement;
                  return A && l;
                }, f = function(x) {
                  if (!x)
                    return !1;
                  x.nodeType === 3 && (x = x.parentElement);
                  var E = x, S = !1, l = b(x, "data-block", "0");
                  if (l)
                    return l;
                  for (; E && !S && !E.classList.contains("vditor-reset"); )
                    E.tagName === "H1" || E.tagName === "H2" || E.tagName === "H3" || E.tagName === "H4" || E.tagName === "H5" || E.tagName === "H6" || E.tagName === "P" || E.tagName === "BLOCKQUOTE" || E.tagName === "OL" || E.tagName === "UL" ? S = !0 : E = E.parentElement;
                  return S && E;
                }, v = function(x, E) {
                  if (!x)
                    return !1;
                  x.nodeType === 3 && (x = x.parentElement);
                  for (var S = x, l = !1; S && !l && !S.classList.contains("vditor-reset"); )
                    S.nodeName === E ? l = !0 : S = S.parentElement;
                  return l && S;
                }, u = function(x, E) {
                  if (!x)
                    return !1;
                  x.nodeType === 3 && (x = x.parentElement);
                  for (var S = x, l = !1; S && !l && !S.classList.contains("vditor-reset"); )
                    S.classList.contains(E) ? l = !0 : S = S.parentElement;
                  return l && S;
                }, T = function(x) {
                  for (; x && x.lastChild; )
                    x = x.lastChild;
                  return x;
                };
              }
            ),
            /***/
            771: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  S: () => (
                    /* binding */
                    B
                  ),
                  /* harmony export */
                  W: () => (
                    /* binding */
                    M
                  )
                  /* harmony export */
                });
                var B = function(c, i) {
                  if (!c)
                    return !1;
                  c.nodeType === 3 && (c = c.parentElement);
                  for (var b = c, f = !1; b && !f && !b.classList.contains("vditor-reset"); )
                    b.nodeName.indexOf(i) === 0 ? f = !0 : b = b.parentElement;
                  return f && b;
                }, M = function(c) {
                  var i = B(c, "H");
                  return i && i.tagName.length === 2 && i.tagName !== "HR" ? i : !1;
                };
              }
            ),
            /***/
            673: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  T: () => (
                    /* binding */
                    B
                  )
                  /* harmony export */
                });
                var B = function() {
                  for (var M = [], c = 0; c < arguments.length; c++)
                    M[c] = arguments[c];
                  for (var i = {}, b = function(v) {
                    for (var u in v)
                      v.hasOwnProperty(u) && (Object.prototype.toString.call(v[u]) === "[object Object]" ? i[u] = B(i[u], v[u]) : i[u] = v[u]);
                  }, f = 0; f < M.length; f++)
                    b(M[f]);
                  return i;
                };
              }
            ),
            /***/
            810: (
              /***/
              (D, g, k) => {
                k.d(g, {
                  /* harmony export */
                  zh: () => (
                    /* binding */
                    i
                  ),
                  /* harmony export */
                  Ny: () => (
                    /* binding */
                    b
                  ),
                  /* harmony export */
                  Gb: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  Hc: () => (
                    /* binding */
                    v
                  ),
                  /* harmony export */
                  im: () => (
                    /* binding */
                    u
                  ),
                  /* harmony export */
                  $j: () => (
                    /* binding */
                    T
                  ),
                  /* harmony export */
                  ib: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  oC: () => (
                    /* binding */
                    E
                  )
                  /* harmony export */
                });
                var B = k(145), M = k(410), c = k(106), i = function(S) {
                  var l, A = S[S.currentMode].element;
                  return getSelection().rangeCount > 0 && (l = getSelection().getRangeAt(0), A.isEqualNode(l.startContainer) || A.contains(l.startContainer)) ? l : S[S.currentMode].range ? S[S.currentMode].range : (A.focus(), l = A.ownerDocument.createRange(), l.setStart(A, 0), l.collapse(!0), l);
                }, b = function(S) {
                  var l = window.getSelection().getRangeAt(0);
                  if (!S.contains(l.startContainer) && !(0, c.fb)(l.startContainer, "vditor-panel--none"))
                    return {
                      left: 0,
                      top: 0
                    };
                  var A = S.parentElement.getBoundingClientRect(), $;
                  if (l.getClientRects().length === 0)
                    if (l.startContainer.nodeType === 3) {
                      var I = l.startContainer.parentElement;
                      if (I && I.getClientRects().length > 0)
                        $ = I.getClientRects()[0];
                      else
                        return {
                          left: 0,
                          top: 0
                        };
                    } else {
                      var O = l.startContainer.children;
                      if (O[l.startOffset] && O[l.startOffset].getClientRects().length > 0)
                        $ = O[l.startOffset].getClientRects()[0];
                      else if (l.startContainer.childNodes.length > 0) {
                        var W = l.cloneRange();
                        l.selectNode(l.startContainer.childNodes[Math.max(0, l.startOffset - 1)]), $ = l.getClientRects()[0], l.setEnd(W.endContainer, W.endOffset), l.setStart(W.startContainer, W.startOffset);
                      } else
                        $ = l.startContainer.getClientRects()[0];
                      if (!$) {
                        for (var Q = l.startContainer.childNodes[l.startOffset]; !Q.getClientRects || Q.getClientRects && Q.getClientRects().length === 0; )
                          Q = Q.parentElement;
                        $ = Q.getClientRects()[0];
                      }
                    }
                  else
                    $ = l.getClientRects()[0];
                  return {
                    left: $.left - A.left,
                    top: $.top - A.top
                  };
                }, f = function(S, l) {
                  if (!l) {
                    if (getSelection().rangeCount === 0)
                      return !1;
                    l = getSelection().getRangeAt(0);
                  }
                  var A = l.commonAncestorContainer;
                  return S.isEqualNode(A) || S.contains(A);
                }, v = function(S) {
                  var l = window.getSelection();
                  l.removeAllRanges(), l.addRange(S);
                }, u = function(S, l, A) {
                  var $ = {
                    end: 0,
                    start: 0
                  };
                  if (!A) {
                    if (getSelection().rangeCount === 0)
                      return $;
                    A = window.getSelection().getRangeAt(0);
                  }
                  if (f(l, A)) {
                    var I = A.cloneRange();
                    S.childNodes[0] && S.childNodes[0].childNodes[0] ? I.setStart(S.childNodes[0].childNodes[0], 0) : I.selectNodeContents(S), I.setEnd(A.startContainer, A.startOffset), $.start = I.toString().length, $.end = $.start + A.toString().length;
                  }
                  return $;
                }, T = function(S, l, A) {
                  var $ = 0, I = 0, O = A.childNodes[I], W = !1, Q = !1;
                  S = Math.max(0, S), l = Math.max(0, l);
                  var G = A.ownerDocument.createRange();
                  for (G.setStart(O || A, 0), G.collapse(!0); !Q && O; ) {
                    var P = $ + O.textContent.length;
                    if (!W && S >= $ && S <= P && (S === 0 ? G.setStart(O, 0) : O.childNodes[0].nodeType === 3 ? G.setStart(O.childNodes[0], S - $) : O.nextSibling ? G.setStartBefore(O.nextSibling) : G.setStartAfter(O), W = !0, S === l)) {
                      Q = !0;
                      break;
                    }
                    W && l >= $ && l <= P && (l === 0 ? G.setEnd(O, 0) : O.childNodes[0].nodeType === 3 ? G.setEnd(O.childNodes[0], l - $) : O.nextSibling ? G.setEndBefore(O.nextSibling) : G.setEndAfter(O), Q = !0), $ = P, O = A.childNodes[++I];
                  }
                  return !Q && A.childNodes[I - 1] && G.setStartBefore(A.childNodes[I - 1]), v(G), G;
                }, x = function(S, l) {
                  var A = S.querySelector("wbr");
                  if (A) {
                    if (!A.previousElementSibling)
                      A.previousSibling ? l.setStart(A.previousSibling, A.previousSibling.textContent.length) : A.nextSibling ? A.nextSibling.nodeType === 3 ? l.setStart(A.nextSibling, 0) : l.setStartBefore(A.nextSibling) : l.setStart(A.parentElement, 0);
                    else if (A.previousElementSibling.isSameNode(A.previousSibling))
                      if (A.previousElementSibling.lastChild) {
                        l.setStartBefore(A), l.collapse(!0), v(l), (0, M.i7)() && (A.previousElementSibling.tagName === "EM" || A.previousElementSibling.tagName === "STRONG" || A.previousElementSibling.tagName === "S") && (l.insertNode(document.createTextNode(B.g.ZWSP)), l.collapse(!1)), A.remove();
                        return;
                      } else
                        l.setStartAfter(A.previousElementSibling);
                    else
                      l.setStart(A.previousSibling, A.previousSibling.textContent.length);
                    l.collapse(!0), A.remove(), v(l);
                  }
                }, E = function(S, l) {
                  var A = document.createElement("div");
                  A.innerHTML = S;
                  var $ = A.querySelectorAll("p");
                  $.length === 1 && !$[0].previousSibling && !$[0].nextSibling && l[l.currentMode].element.children.length > 0 && A.firstElementChild.tagName === "P" && (S = $[0].innerHTML.trim());
                  var I = document.createElement("div");
                  I.innerHTML = S;
                  var O = i(l);
                  if (O.toString() !== "" && (l[l.currentMode].preventInput = !0, document.execCommand("delete", !1, "")), I.firstElementChild && I.firstElementChild.getAttribute("data-block") === "0") {
                    I.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
                    var W = (0, c.F9)(O.startContainer);
                    if (!W)
                      l[l.currentMode].element.insertAdjacentHTML("beforeend", I.innerHTML);
                    else {
                      var Q = (0, c.lG)(O.startContainer, "LI");
                      Q && I.firstElementChild.tagName === "UL" ? Q.insertAdjacentHTML("afterend", I.firstElementChild.innerHTML) : W.insertAdjacentHTML("afterend", I.innerHTML);
                    }
                    x(l[l.currentMode].element, O);
                  } else {
                    var G = document.createElement("template");
                    G.innerHTML = S, O.insertNode(G.content.cloneNode(!0)), O.collapse(!1), v(O);
                  }
                };
              }
            )
            /******/
          }, C = {};
          function L(D) {
            var g = C[D];
            if (g !== void 0)
              return g.exports;
            var k = C[D] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return w[D](k, k.exports, L), k.exports;
          }
          L.d = (D, g) => {
            for (var k in g)
              L.o(g, k) && !L.o(D, k) && Object.defineProperty(D, k, { enumerable: !0, get: g[k] });
          }, L.o = (D, g) => Object.prototype.hasOwnProperty.call(D, g), L.r = (D) => {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(D, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(D, "__esModule", { value: !0 });
          };
          var N = {};
          return (() => {
            L.d(N, {
              default: () => (
                /* binding */
                $i
              )
            });
            var D = L(408), g = L(145), k = L(105), B = function(e) {
              return e.currentMode === "sv" ? (0, k.X)("".concat(e.sv.element.textContent, `
`).replace(/\n\n$/, `
`)) : e.currentMode === "wysiwyg" ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML) : e.currentMode === "ir" ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML) : "";
            }, M = L(413), c = (
              /** @class */
              function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-devtools", this.element.innerHTML = '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>';
                }
                return e.prototype.renderEchart = function(t) {
                  var r = this;
                  t.devtools.element.style.display === "block" && (0, M.G)("".concat(t.options.cdn, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    r.ASTChart || (r.ASTChart = echarts.init(t.devtools.element.lastElementChild));
                    try {
                      r.element.lastElementChild.style.display = "block", r.element.firstElementChild.innerHTML = "", r.ASTChart.setOption({
                        series: [
                          {
                            data: JSON.parse(t.lute.RenderEChartsJSON(B(t))),
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
                      }), r.ASTChart.resize();
                    } catch (o) {
                      r.element.lastElementChild.style.display = "none", r.element.firstElementChild.innerHTML = o;
                    }
                  });
                }, e;
              }()
            ), i = L(410), b = function(e, t) {
              t.forEach(function(r) {
                if (e[r]) {
                  var o = e[r].children[0];
                  o && o.classList.contains("vditor-menu--current") && o.classList.remove("vditor-menu--current");
                }
              });
            }, f = function(e, t) {
              t.forEach(function(r) {
                if (e[r]) {
                  var o = e[r].children[0];
                  o && !o.classList.contains("vditor-menu--current") && o.classList.add("vditor-menu--current");
                }
              });
            }, v = function(e, t) {
              t.forEach(function(r) {
                if (e[r]) {
                  var o = e[r].children[0];
                  o && o.classList.contains(g.g.CLASS_MENU_DISABLED) && o.classList.remove(g.g.CLASS_MENU_DISABLED);
                }
              });
            }, u = function(e, t) {
              t.forEach(function(r) {
                if (e[r]) {
                  var o = e[r].children[0];
                  o && !o.classList.contains(g.g.CLASS_MENU_DISABLED) && o.classList.add(g.g.CLASS_MENU_DISABLED);
                }
              });
            }, T = function(e, t) {
              t.forEach(function(r) {
                e[r] && e[r] && (e[r].style.display = "none");
              });
            }, x = function(e, t) {
              t.forEach(function(r) {
                e[r] && e[r] && (e[r].style.display = "block");
              });
            }, E = function(e, t, r) {
              t.includes("subToolbar") && (e.toolbar.element.querySelectorAll(".vditor-hint").forEach(function(o) {
                r && o.isEqualNode(r) || (o.style.display = "none");
              }), e.toolbar.elements.emoji && (e.toolbar.elements.emoji.lastElementChild.style.display = "none")), t.includes("hint") && (e.hint.element.style.display = "none"), e.wysiwyg.popover && t.includes("popover") && (e.wysiwyg.popover.style.display = "none");
            }, S = function(e, t, r, o) {
              r.addEventListener((0, i.Le)(), function(n) {
                n.preventDefault(), n.stopPropagation(), !r.classList.contains(g.g.CLASS_MENU_DISABLED) && (e.toolbar.element.querySelectorAll(".vditor-hint--current").forEach(function(a) {
                  a.classList.remove("vditor-hint--current");
                }), t.style.display === "block" ? t.style.display = "none" : (E(e, ["subToolbar", "hint", "popover"], r.parentElement.parentElement), r.classList.contains("vditor-tooltipped") || r.classList.add("vditor-hint--current"), t.style.display = "block", e.toolbar.element.getBoundingClientRect().right - r.getBoundingClientRect().right < 250 ? t.classList.add("vditor-panel--left") : t.classList.remove("vditor-panel--left")));
              });
            }, l = L(106), A = L(771), $ = function(e, t, r, o) {
              o && console.log("".concat(e, " - ").concat(r, ": ").concat(t));
            }, I = L(135), O = L(775), W = L(428), Q = L(325), G = L(483), P = L(999), j = L(472), Z = L(637), ne = L(11), ce = L(194), fe = L(229), pe = L(825), ve = function(e, t, r) {
              r === void 0 && (r = "sv");
              var o = document.createElement("div");
              o.innerHTML = e;
              var n = !1;
              o.childElementCount === 1 && o.lastElementChild.style.fontFamily.indexOf("monospace") > -1 && (n = !0);
              var a = o.querySelectorAll("pre");
              if (o.childElementCount === 1 && a.length === 1 && a[0].className !== "vditor-wysiwyg" && a[0].className !== "vditor-sv" && (n = !0), e.indexOf(`
<p class="p1">`) === 0 && (n = !0), o.childElementCount === 1 && o.firstElementChild.tagName === "TABLE" && o.querySelector(".line-number") && o.querySelector(".line-content") && (n = !0), n) {
                var s = t || e;
                return /\n/.test(s) || a.length === 1 ? r === "wysiwyg" ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>'.concat(s.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "<wbr></code></pre></div>") : "\n```\n" + s.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "\n```" : r === "wysiwyg" ? "<code>".concat(s.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "</code><wbr>") : "`".concat(s, "`");
              }
              return !1;
            }, he = function(e, t) {
              if (e) {
                if (e.parentElement.getAttribute("data-type") === "html-block") {
                  e.setAttribute("data-render", "1");
                  return;
                }
                var r = e.firstElementChild.className.replace("language-", "");
                if (r === "abc")
                  (0, I.Q)(e, t.options.cdn);
                else if (r === "mermaid")
                  (0, Z.i)(e, t.options.cdn, t.options.theme);
                else if (r === "smiles")
                  (0, pe.J)(e, t.options.cdn, t.options.theme);
                else if (r === "markmap")
                  (0, ne.K)(e, t.options.cdn);
                else if (r === "flowchart")
                  (0, Q.P)(e, t.options.cdn);
                else if (r === "echarts")
                  (0, O.p)(e, t.options.cdn, t.options.theme);
                else if (r === "mindmap")
                  (0, ce.P)(e, t.options.cdn, t.options.theme);
                else if (r === "plantuml")
                  (0, fe.B)(e, t.options.cdn);
                else if (r === "graphviz")
                  (0, G.v)(e, t.options.cdn);
                else if (r === "math")
                  (0, j.H)(e, { cdn: t.options.cdn, math: t.options.preview.math });
                else {
                  var o = t.options.customRenders.find(function(n) {
                    if (n.language === r)
                      return n.render(e, t), !0;
                  });
                  o || ((0, P.s)(Object.assign({}, t.options.preview.hljs), e, t.options.cdn), (0, W.O)(e, t.options.preview.hljs));
                }
                e.setAttribute("data-render", "1");
              }
            }, R = L(810), Re = function(e) {
              if (e.currentMode !== "sv") {
                var t = e[e.currentMode].element, r = e.outline.render(e);
                r === "" && (r = "[ToC]"), t.querySelectorAll('[data-type="toc-block"]').forEach(function(o) {
                  o.innerHTML = r, (0, j.H)(o, {
                    cdn: e.options.cdn,
                    math: e.options.preview.math
                  });
                });
              }
            }, Pe = function(e, t) {
              var r = (0, l.lG)(e.target, "SPAN");
              if (r && (0, l.fb)(r, "vditor-toc")) {
                var o = t[t.currentMode].element.querySelector("#" + r.getAttribute("data-target-id"));
                if (o)
                  if (t.options.height === "auto") {
                    var n = o.offsetTop + t.element.offsetTop;
                    t.options.toolbarConfig.pin || (n += t.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, n);
                  } else
                    t.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, t.element.offsetTop), t[t.currentMode].element.scrollTop = o.offsetTop;
                return;
              }
            }, We = function(e, t, r, o) {
              if (e.previousElementSibling && e.previousElementSibling.classList.contains("vditor-toc")) {
                if (r.key === "Backspace" && (0, R.im)(e, t[t.currentMode].element, o).start === 0)
                  return e.previousElementSibling.remove(), ke(t), !0;
                if (_t(t, r, o, e, e.previousElementSibling))
                  return !0;
              }
              if (e.nextElementSibling && e.nextElementSibling.classList.contains("vditor-toc")) {
                if (r.key === "Delete" && (0, R.im)(e, t[t.currentMode].element, o).start >= e.textContent.trimRight().length)
                  return e.nextElementSibling.remove(), ke(t), !0;
                if (qt(t, r, o, e, e.nextElementSibling))
                  return !0;
              }
              if (r.key === "Backspace" || r.key === "Delete") {
                var n = (0, l.fb)(o.startContainer, "vditor-toc");
                if (n)
                  return n.remove(), ke(t), !0;
              }
            }, ze = function(e, t, r, o) {
              r === void 0 && (r = !1);
              var n = (0, l.F9)(t.startContainer);
              if (n && !r && n.getAttribute("data-type") !== "code-block") {
                if (zr(n.innerHTML) && n.previousElementSibling || Wr(n.innerHTML))
                  return;
                for (
                  var a = (0, R.im)(n, e.ir.element, t).start, s = !0, m = a - 1;
                  // 软换行后有空格
                  m > n.textContent.substr(0, a).lastIndexOf(`
`);
                  m--
                )
                  if (n.textContent.charAt(m) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  n.textContent.charAt(m) !== "	") {
                    s = !1;
                    break;
                  }
                a === 0 && (s = !1);
                for (var y = !0, m = a - 1; m < n.textContent.length; m++)
                  if (n.textContent.charAt(m) !== " " && n.textContent.charAt(m) !== `
`) {
                    y = !1;
                    break;
                  }
                if (s) {
                  typeof e.options.input == "function" && e.options.input(B(e));
                  return;
                }
                if (y && /^#{1,6} $/.test(n.textContent) && (y = !1), y) {
                  var h = (0, l.fb)(t.startContainer, "vditor-ir__marker");
                  if (!h) {
                    var _ = t.startContainer.previousSibling;
                    _ && _.nodeType !== 3 && _.classList.contains("vditor-ir__node--expand") && _.classList.remove("vditor-ir__node--expand"), typeof e.options.input == "function" && e.options.input(B(e));
                    return;
                  }
                }
              }
              if (e.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(ye) {
                ye.classList.remove("vditor-ir__node--expand");
              }), n || (n = e.ir.element), !n.querySelector("wbr")) {
                var H = (0, l.fb)(t.startContainer, "vditor-ir__preview");
                H ? H.previousElementSibling.insertAdjacentHTML("beforeend", "<wbr>") : t.insertNode(document.createElement("wbr"));
              }
              n.querySelectorAll("[style]").forEach(function(ye) {
                ye.removeAttribute("style");
              }), n.getAttribute("data-type") === "link-ref-defs-block" && (n = e.ir.element);
              var q = n.isEqualNode(e.ir.element), X = (0, l.a1)(n, "data-type", "footnotes-block"), V = "";
              if (q)
                V = n.innerHTML;
              else {
                var te = (0, A.S)(t.startContainer, "BLOCKQUOTE"), ee = (0, l.O9)(t.startContainer);
                if (ee && (n = ee), te && (!ee || ee && !te.contains(ee)) && (n = te), X && (n = X), V = n.outerHTML, n.tagName === "UL" || n.tagName === "OL") {
                  var K = n.previousElementSibling, de = n.nextElementSibling;
                  K && (K.tagName === "UL" || K.tagName === "OL") && (V = K.outerHTML + V, K.remove()), de && (de.tagName === "UL" || de.tagName === "OL") && (V = V + de.outerHTML, de.remove()), V = V.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                } else n.previousElementSibling && n.previousElementSibling.textContent.replace(g.g.ZWSP, "") !== "" && o && o.inputType === "insertParagraph" && (V = n.previousElementSibling.outerHTML + V, n.previousElementSibling.remove());
                n.innerText.startsWith("```") || (e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(ye) {
                  ye && !n.isEqualNode(ye) && (V += ye.outerHTML, ye.remove());
                }), e.ir.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(ye) {
                  ye && !n.isEqualNode(ye) && (V += ye.outerHTML, ye.remove());
                }));
              }
              if ($("SpinVditorIRDOM", V, "argument", e.options.debugger), V = e.lute.SpinVditorIRDOM(V), $("SpinVditorIRDOM", V, "result", e.options.debugger), q)
                n.innerHTML = V;
              else if (n.outerHTML = V, X) {
                var oe = (0, l.a1)(e.ir.element.querySelector("wbr"), "data-type", "footnotes-def");
                if (oe) {
                  var me = oe.textContent, Te = me.substring(1, me.indexOf("]:")), xe = e.ir.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(Te, '"]'));
                  xe && xe.setAttribute("aria-label", me.substr(Te.length + 3).trim().substr(0, 24));
                }
              }
              var Be, Ue = e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']");
              Ue.forEach(function(ye, He) {
                He === 0 ? Be = ye : (Be.insertAdjacentHTML("beforeend", ye.innerHTML), ye.remove());
              }), Ue.length > 0 && e.ir.element.insertAdjacentElement("beforeend", Ue[0]);
              var je, Ke = e.ir.element.querySelectorAll("[data-type='footnotes-block']");
              Ke.forEach(function(ye, He) {
                He === 0 ? je = ye : (je.insertAdjacentHTML("beforeend", ye.innerHTML), ye.remove());
              }), Ke.length > 0 && e.ir.element.insertAdjacentElement("beforeend", Ke[0]), (0, R.ib)(e.ir.element, t), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(ye) {
                he(ye, e);
              }), Re(e), lt(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, U = function(e, t) {
              if (e === "")
                return !1;
              if (e.indexOf("⇧") === -1 && e.indexOf("⌘") === -1 && e.indexOf("⌥") === -1)
                return !(0, i.yl)(t) && !t.altKey && !t.shiftKey && t.code === e;
              if (e === "⇧Tab")
                return !!(!(0, i.yl)(t) && !t.altKey && t.shiftKey && t.code === "Tab");
              var r = e.split("");
              if (e.startsWith("⌥")) {
                var o = r.length === 3 ? r[2] : r[1];
                return !!((r.length === 3 ? (0, i.yl)(t) : !(0, i.yl)(t)) && t.altKey && !t.shiftKey && t.code === (/^[0-9]$/.test(o) ? "Digit" : "Key") + o);
              }
              e === "⌘Enter" && (r = ["⌘", "Enter"]);
              var n = r.length > 2 && r[0] === "⇧", a = n ? r[2] : r[1];
              return n && ((0, i.vU)() || !/Mac/.test(navigator.platform)) && (a === "-" ? a = "_" : a === "=" && (a = "+")), !!((0, i.yl)(t) && t.key.toLowerCase() === a.toLowerCase() && !t.altKey && (!n && !t.shiftKey || n && t.shiftKey));
            }, we = function(e) {
              var t = e.startContainer;
              if (t.nodeType === 3 && t.nodeValue.length !== e.startOffset)
                return !1;
              for (var r = t.nextSibling; r && r.textContent === ""; )
                r = r.nextSibling;
              if (r) {
                if (r && r.nodeType !== 3 && r.classList.contains("vditor-ir__node") && !r.getAttribute("data-block"))
                  return r;
              } else {
                var o = (0, l.fb)(t, "vditor-ir__marker");
                if (o && !o.nextSibling) {
                  var n = t.parentElement.parentElement.nextSibling;
                  if (n && n.nodeType !== 3 && n.classList.contains("vditor-ir__node"))
                    return n;
                }
                return !1;
              }
              return !1;
            }, re = function(e) {
              var t = e.startContainer, r = t.previousSibling;
              return t.nodeType === 3 && e.startOffset === 0 && r && r.nodeType !== 3 && // *em*|text
              r.classList.contains("vditor-ir__node") && !r.getAttribute("data-block") ? r : !1;
            }, F = function(e, t) {
              t.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(s) {
                s.classList.remove("vditor-ir__node--expand");
              });
              var r = (0, l.JQ)(e.startContainer, "vditor-ir__node"), o = !e.collapsed && (0, l.JQ)(e.endContainer, "vditor-ir__node");
              if (!(!e.collapsed && (!r || r !== o))) {
                r && (r.classList.add("vditor-ir__node--expand"), r.classList.remove("vditor-ir__node--hidden"), (0, R.Hc)(e));
                var n = we(e);
                if (n) {
                  n.classList.add("vditor-ir__node--expand"), n.classList.remove("vditor-ir__node--hidden");
                  return;
                }
                var a = re(e);
                if (a) {
                  a.classList.add("vditor-ir__node--expand"), a.classList.remove("vditor-ir__node--hidden");
                  return;
                }
              }
            }, be = function(e, t) {
              if (e.ir.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var r = (0, R.zh)(e), o = r.startContainer;
              if (!Bo(t, e, o) || (Ao(r, e, t), Vo(r), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, i.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var n = (0, l.a1)(o, "data-newline", "1");
              if (!(0, i.yl)(t) && !t.altKey && !t.shiftKey && t.key === "Enter" && n && r.startOffset < n.textContent.length) {
                var a = n.previousElementSibling;
                a && (r.insertNode(document.createTextNode(a.textContent)), r.collapse(!1));
                var s = n.nextSibling;
                s && (r.insertNode(document.createTextNode(s.textContent)), r.collapse(!0));
              }
              var m = (0, l.lG)(o, "P");
              if (Oo(t, e, m, r) || Ro(r, e, m, t) || Fo(e, r, t, m))
                return !0;
              var y = (0, l.fb)(o, "vditor-ir__marker--pre");
              if (y && y.tagName === "PRE") {
                var h = y.firstChild;
                if (jo(e, t, y, r) || (h.getAttribute("data-type") === "math-block" || h.getAttribute("data-type") === "html-block") && _t(e, t, r, h, y.parentElement) || qt(e, t, r, h, y.parentElement))
                  return !0;
              }
              var _ = (0, l.a1)(o, "data-type", "code-block-info");
              if (_) {
                if (t.key === "Enter" || t.key === "Tab")
                  return r.selectNodeContents(_.nextElementSibling.firstChild), r.collapse(!0), t.preventDefault(), E(e, ["hint"]), !0;
                if (t.key === "Backspace") {
                  var H = (0, R.im)(_, e.ir.element).start;
                  H === 1 && r.setStart(o, 0), H === 2 && (e.hint.recentLanguage = "");
                }
                if (_t(e, t, r, _, _.parentElement))
                  return E(e, ["hint"]), !0;
              }
              var q = (0, l.lG)(o, "TD") || (0, l.lG)(o, "TH");
              if (t.key.indexOf("Arrow") > -1 && q) {
                var X = wa(q);
                if (X && _t(e, t, r, q, X))
                  return !0;
                var V = ka(q);
                if (V && qt(e, t, r, q, V))
                  return !0;
              }
              if (Io(e, t, r) || zo(e, r, t) || Vr(e, r, t))
                return !0;
              var te = (0, A.W)(o);
              if (te) {
                if (U("⌘=", t)) {
                  var ee = te.querySelector(".vditor-ir__marker--heading");
                  return ee && ee.textContent.trim().length > 1 && Gt(e, ee.textContent.substr(1)), t.preventDefault(), !0;
                }
                if (U("⌘-", t)) {
                  var ee = te.querySelector(".vditor-ir__marker--heading");
                  return ee && ee.textContent.trim().length < 6 && Gt(e, ee.textContent.trim() + "# "), t.preventDefault(), !0;
                }
              }
              var K = (0, l.F9)(o);
              if (t.key === "Backspace" && !(0, i.yl)(t) && !t.shiftKey && !t.altKey && r.toString() === "") {
                if (Wo(e, r, t, m))
                  return !0;
                if (K && K.previousElementSibling && K.tagName !== "UL" && K.tagName !== "OL" && (K.previousElementSibling.getAttribute("data-type") === "code-block" || K.previousElementSibling.getAttribute("data-type") === "math-block")) {
                  var de = (0, R.im)(K, e.ir.element, r).start;
                  if (de === 0 || de === 1 && K.innerText.startsWith(g.g.ZWSP))
                    return r.selectNodeContents(K.previousElementSibling.querySelector(".vditor-ir__marker--pre code")), r.collapse(!1), F(r, e), K.textContent.trim().replace(g.g.ZWSP, "") === "" && (K.remove(), lt(e)), t.preventDefault(), !0;
                }
                if (te) {
                  var oe = te.firstElementChild.textContent.length;
                  (0, R.im)(te, e.ir.element).start === oe && oe !== 0 && (r.setStart(te.firstElementChild.firstChild, oe - 1), r.collapse(!0), (0, R.Hc)(r));
                }
              }
              return (t.key === "ArrowUp" || t.key === "ArrowDown") && K && (K.querySelectorAll(".vditor-ir__node").forEach(function(me) {
                me.contains(o) || me.classList.add("vditor-ir__node--hidden");
              }), Uo(t, K, r)) ? !0 : (Mo(r, t.key), K && We(K, e, t, r) ? (t.preventDefault(), !0) : !1);
            }, ae = L(190), Ae = function(e, t) {
              e.querySelectorAll("[data-type=footnotes-link]").forEach(function(r) {
                for (var o = r.parentElement, n = o.nextSibling; n && n.textContent.startsWith("    "); ) {
                  var a = n;
                  a.childNodes.forEach(function(s) {
                    o.append(s.cloneNode(!0));
                  }), n = n.nextSibling, a.remove();
                }
                t && t(o);
              });
            }, Se = function(e, t) {
              var r, o = getSelection().getRangeAt(0).cloneRange(), n = o.startContainer;
              o.startContainer.nodeType !== 3 && o.startContainer.tagName === "DIV" && (n = o.startContainer.childNodes[o.startOffset - 1]);
              var a = (0, l.a1)(n, "data-block", "0");
              if (a && t && (t.inputType === "deleteContentBackward" || t.data === " ")) {
                for (
                  var s = (0, R.im)(a, e.sv.element, o).start, m = !0, y = s - 1;
                  // 软换行后有空格
                  y > a.textContent.substr(0, s).lastIndexOf(`
`);
                  y--
                )
                  if (a.textContent.charAt(y) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  a.textContent.charAt(y) !== "	") {
                    m = !1;
                    break;
                  }
                if (s === 0 && (m = !1), m) {
                  $e(e);
                  return;
                }
                if (t.inputType === "deleteContentBackward") {
                  var h = (0, l.a1)(n, "data-type", "code-block-open-marker") || (0, l.a1)(n, "data-type", "code-block-close-marker");
                  if (h) {
                    if (h.getAttribute("data-type") === "code-block-close-marker") {
                      var _ = ir(n, "code-block-open-marker");
                      if (_) {
                        _.textContent = h.textContent, $e(e);
                        return;
                      }
                    }
                    if (h.getAttribute("data-type") === "code-block-open-marker") {
                      var _ = ir(n, "code-block-close-marker", !1);
                      if (_) {
                        _.textContent = h.textContent, $e(e);
                        return;
                      }
                    }
                  }
                  var H = (0, l.a1)(n, "data-type", "math-block-open-marker");
                  if (H) {
                    var q = H.nextElementSibling.nextElementSibling;
                    q && q.getAttribute("data-type") === "math-block-close-marker" && (q.remove(), $e(e));
                    return;
                  }
                  a.querySelectorAll('[data-type="code-block-open-marker"]').forEach(function(K) {
                    K.textContent.length === 1 && K.remove();
                  }), a.querySelectorAll('[data-type="code-block-close-marker"]').forEach(function(K) {
                    K.textContent.length === 1 && K.remove();
                  });
                  var X = (0, l.a1)(n, "data-type", "heading-marker");
                  if (X && X.textContent.indexOf("#") === -1) {
                    $e(e);
                    return;
                  }
                }
                if ((t.data === " " || t.inputType === "deleteContentBackward") && ((0, l.a1)(n, "data-type", "padding") || (0, l.a1)(n, "data-type", "li-marker") || (0, l.a1)(n, "data-type", "task-marker") || (0, l.a1)(n, "data-type", "blockquote-marker"))) {
                  $e(e);
                  return;
                }
              }
              if (a && a.textContent.trimRight() === "$$") {
                $e(e);
                return;
              }
              a || (a = e.sv.element), ((r = a.firstElementChild) === null || r === void 0 ? void 0 : r.getAttribute("data-type")) === "link-ref-defs-block" && (a = e.sv.element), (0, l.a1)(n, "data-type", "footnotes-link") && (a = e.sv.element), a.textContent.indexOf(Lute.Caret) === -1 && o.insertNode(document.createTextNode(Lute.Caret)), a.querySelectorAll("[style]").forEach(function(K) {
                K.removeAttribute("style");
              }), a.querySelectorAll("font").forEach(function(K) {
                K.outerHTML = K.innerHTML;
              });
              var V = a.textContent, te = a.isEqualNode(e.sv.element);
              if (te)
                V = a.textContent;
              else {
                a.previousElementSibling && (V = a.previousElementSibling.textContent + V, a.previousElementSibling.remove()), a.previousElementSibling && V.indexOf(`---
`) === 0 && (V = a.previousElementSibling.textContent + V, a.previousElementSibling.remove());
                var ee = "";
                e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(K, de) {
                  K && !a.isEqualNode(K.parentElement) && (ee += K.parentElement.textContent + `
`, K.parentElement.remove());
                }), e.sv.element.querySelectorAll("[data-type='footnotes-link']").forEach(function(K, de) {
                  K && !a.isEqualNode(K.parentElement) && (ee += K.parentElement.textContent + `
`, K.parentElement.remove());
                }), V = ee + V;
              }
              V = Co(V, e), te ? a.innerHTML = V : a.outerHTML = V, e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(K) {
                e.sv.element.insertAdjacentElement("beforeend", K.parentElement);
              }), Ae(e.sv.element, function(K) {
                e.sv.element.insertAdjacentElement("beforeend", K);
              }), (0, R.ib)(e.sv.element, o), Oe(e), $e(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, J = function(e, t) {
              var r, o, n, a, s;
              if (e.sv.composingLock = t.isComposing, t.isComposing || (t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, i.yl)(t) && t.key !== "Escape"))
                return !1;
              var m = (0, R.zh)(e), y = m.startContainer;
              m.startContainer.nodeType !== 3 && m.startContainer.tagName === "DIV" && (y = m.startContainer.childNodes[m.startOffset - 1]);
              var h = (0, l.a1)(y, "data-type", "text"), _ = (0, l.a1)(y, "data-type", "blockquote-marker");
              if (!_ && m.startOffset === 0 && h && h.previousElementSibling && h.previousElementSibling.getAttribute("data-type") === "blockquote-marker" && (_ = h.previousElementSibling), _ && t.key === "Enter" && !(0, i.yl)(t) && !t.altKey && _.nextElementSibling.textContent.trim() === "" && (0, R.im)(_, e.sv.element, m).start === _.textContent.length)
                return ((r = _.previousElementSibling) === null || r === void 0 ? void 0 : r.getAttribute("data-type")) === "padding" && _.previousElementSibling.setAttribute("data-action", "enter-remove"), _.remove(), $e(e), t.preventDefault(), !0;
              var H = (0, l.a1)(y, "data-type", "li-marker"), q = (0, l.a1)(y, "data-type", "task-marker"), X = H;
              if (X || q && q.nextElementSibling.getAttribute("data-type") !== "task-marker" && (X = q), !X && m.startOffset === 0 && h && h.previousElementSibling && (h.previousElementSibling.getAttribute("data-type") === "li-marker" || h.previousElementSibling.getAttribute("data-type") === "task-marker") && (X = h.previousElementSibling), X) {
                var V = (0, R.im)(X, e.sv.element, m).start, te = X.getAttribute("data-type") === "task-marker", ee = X;
                if (te && (ee = X.previousElementSibling.previousElementSibling.previousElementSibling), V === X.textContent.length) {
                  if (t.key === "Enter" && !(0, i.yl)(t) && !t.altKey && !t.shiftKey && X.nextElementSibling.textContent.trim() === "")
                    return ((o = ee.previousElementSibling) === null || o === void 0 ? void 0 : o.getAttribute("data-type")) === "padding" ? (ee.previousElementSibling.remove(), Se(e)) : (te && (ee.remove(), X.previousElementSibling.previousElementSibling.remove(), X.previousElementSibling.remove()), X.nextElementSibling.remove(), X.remove(), $e(e)), t.preventDefault(), !0;
                  if (t.key === "Tab")
                    return t.shiftKey ? ee.previousElementSibling.getAttribute("data-type") === "padding" && ee.previousElementSibling.remove() : ee.insertAdjacentHTML("beforebegin", '<span data-type="padding">'.concat(ee.textContent.replace(/\S/g, " "), "</span>")), /^\d/.test(ee.textContent) && (ee.textContent = ee.textContent.replace(/^\d{1,}/, "1"), m.selectNodeContents(X.firstChild), m.collapse(!1)), Se(e), t.preventDefault(), !0;
                }
              }
              if (Vr(e, m, t))
                return !0;
              var K = (0, l.a1)(y, "data-block", "0"), de = (0, A.S)(y, "SPAN");
              if (t.key === "Enter" && !(0, i.yl)(t) && !t.altKey && !t.shiftKey && K) {
                var oe = !1, me = K.textContent.match(/^\n+/);
                (0, R.im)(K, e.sv.element).start <= (me ? me[0].length : 0) && (oe = !0);
                var Te = `
`;
                if (de) {
                  if (((n = de.previousElementSibling) === null || n === void 0 ? void 0 : n.getAttribute("data-action")) === "enter-remove")
                    return de.previousElementSibling.remove(), $e(e), t.preventDefault(), !0;
                  Te += fa(de);
                }
                return m.insertNode(document.createTextNode(Te)), m.collapse(!1), K && K.textContent.trim() !== "" && !oe ? Se(e) : $e(e), t.preventDefault(), !0;
              }
              if (t.key === "Backspace" && !(0, i.yl)(t) && !t.altKey && !t.shiftKey) {
                if (de && ((a = de.previousElementSibling) === null || a === void 0 ? void 0 : a.getAttribute("data-type")) === "newline" && (0, R.im)(de, e.sv.element, m).start === 1 && // 飘号的处理需在 inputEvent 中，否则上下飘号对不齐
                de.getAttribute("data-type").indexOf("code-block-") === -1)
                  return m.setStart(de, 0), m.extractContents(), de.textContent.trim() !== "" ? Se(e) : $e(e), t.preventDefault(), !0;
                if (K && (0, R.im)(K, e.sv.element, m).start === 0 && K.previousElementSibling) {
                  m.extractContents();
                  var xe = K.previousElementSibling.lastElementChild;
                  return xe.getAttribute("data-type") === "newline" && (xe.remove(), xe = K.previousElementSibling.lastElementChild), xe.getAttribute("data-type") !== "newline" && (xe.insertAdjacentHTML("afterend", K.innerHTML), K.remove()), K.textContent.trim() !== "" && !(!((s = K.previousElementSibling) === null || s === void 0) && s.querySelector('[data-type="code-block-open-marker"]')) ? Se(e) : (xe.getAttribute("data-type") !== "newline" && (m.selectNodeContents(xe.lastChild), m.collapse(!1)), $e(e)), t.preventDefault(), !0;
                }
              }
              return !1;
            }, z = L(538), ge = function(e) {
              e.options.theme === "dark" ? e.element.classList.add("vditor--dark") : e.element.classList.remove("vditor--dark");
            }, ue = function(e) {
              e.element.innerHTML = "", e.element.classList.add("vditor"), e.options.rtl && e.element.setAttribute("dir", "rtl"), ge(e), (0, z.Z)(e.options.preview.theme.current, e.options.preview.theme.path), typeof e.options.height == "number" ? e.element.style.height = e.options.height + "px" : e.element.style.height = e.options.height, typeof e.options.minHeight == "number" && (e.element.style.minHeight = e.options.minHeight + "px"), typeof e.options.width == "number" ? e.element.style.width = e.options.width + "px" : e.element.style.width = e.options.width, e.element.appendChild(e.toolbar.element);
              var t = document.createElement("div");
              if (t.className = "vditor-content", e.options.outline.position === "left" && t.appendChild(e.outline.element), t.appendChild(e.wysiwyg.element.parentElement), t.appendChild(e.sv.element), t.appendChild(e.ir.element.parentElement), t.appendChild(e.preview.element), e.toolbar.elements.devtools && t.appendChild(e.devtools.element), e.options.outline.position === "right" && (e.outline.element.classList.add("vditor-outline--right"), t.appendChild(e.outline.element)), e.upload && t.appendChild(e.upload.element), e.options.resize.enable && t.appendChild(e.resize.element), t.appendChild(e.hint.element), t.appendChild(e.tip.element), e.element.appendChild(t), t.addEventListener("click", function() {
                E(e, ["subToolbar"]);
              }), e.toolbar.elements.export && e.element.insertAdjacentHTML("beforeend", '<iframe id="vditorExportIframe" style="width: 100%;height: 0;border: 0"></iframe>'), vt(e, e.options.mode, ta(e)), document.execCommand("DefaultParagraphSeparator", !1, "p"), navigator.userAgent.indexOf("iPhone") > -1 && typeof window.visualViewport < "u") {
                var r = !1, o = function(n) {
                  r || (r = !0, requestAnimationFrame(function() {
                    r = !1;
                    var a = e.toolbar.element;
                    a.style.transform = "none", a.getBoundingClientRect().top < 0 && (a.style.transform = "translate(0, ".concat(-a.getBoundingClientRect().top, "px)"));
                  }));
                };
                window.visualViewport.addEventListener("scroll", o), window.visualViewport.addEventListener("resize", o);
              }
            }, se = function(e) {
              var t = window.innerWidth <= g.g.MOBILE_WIDTH ? 10 : 35;
              if (e.wysiwyg.element.parentElement.style.display !== "none") {
                var r = (e.wysiwyg.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.wysiwyg.element.style.padding = "10px ".concat(Math.max(t, r), "px");
              }
              if (e.ir.element.parentElement.style.display !== "none") {
                var r = (e.ir.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.ir.element.style.padding = "10px ".concat(Math.max(t, r), "px");
              }
              e.preview.element.style.display !== "block" ? e.toolbar.element.style.paddingLeft = Math.max(5, parseInt(e[e.currentMode].element.style.paddingLeft || "0", 10) + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0)) + "px" : e.toolbar.element.style.paddingLeft = 5 + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0) + "px";
            }, Me = function(e) {
              if (e.options.typewriterMode) {
                var t = window.innerHeight;
                typeof e.options.height == "number" ? (t = e.options.height, typeof e.options.minHeight == "number" && (t = Math.max(t, e.options.minHeight)), t = Math.min(window.innerHeight, t)) : t = e.element.clientHeight, e.element.classList.contains("vditor--fullscreen") && (t = window.innerHeight), e[e.currentMode].element.style.setProperty("--editor-bottom", (t - e.toolbar.element.offsetHeight) / 2 + "px");
              }
            }, pt;
            function ho() {
              window.removeEventListener("resize", pt);
            }
            var ta = function(e) {
              Me(e), ho(), window.addEventListener("resize", pt = function() {
                se(e), Me(e);
              });
              var t = (0, i.pK)() && localStorage.getItem(e.options.cache.id);
              return (!e.options.cache.enable || !t) && (e.options.value ? t = e.options.value : e.originalInnerHTML ? t = e.lute.HTML2Md(e.originalInnerHTML) : e.options.cache.enable || (t = "")), t || "";
            }, zt = function(e) {
              clearTimeout(e[e.currentMode].hlToolbarTimeoutId), e[e.currentMode].hlToolbarTimeoutId = window.setTimeout(function() {
                if (e[e.currentMode].element.getAttribute("contenteditable") !== "false" && (0, R.Gb)(e[e.currentMode].element)) {
                  b(e.toolbar.elements, g.g.EDIT_TOOLBARS), v(e.toolbar.elements, g.g.EDIT_TOOLBARS);
                  var t = (0, R.zh)(e), r = t.startContainer;
                  t.startContainer.nodeType === 3 && (r = t.startContainer.parentElement), r.classList.contains("vditor-reset") && (r = r.childNodes[t.startOffset]);
                  var o = e.currentMode === "sv" ? (0, l.a1)(r, "data-type", "heading") : (0, A.W)(r);
                  o && f(e.toolbar.elements, ["headings"]);
                  var n = e.currentMode === "sv" ? (0, l.a1)(r, "data-type", "blockquote") : (0, l.lG)(r, "BLOCKQUOTE");
                  n && f(e.toolbar.elements, ["quote"]);
                  var a = (0, l.a1)(r, "data-type", "strong");
                  a && f(e.toolbar.elements, ["bold"]);
                  var s = (0, l.a1)(r, "data-type", "em");
                  s && f(e.toolbar.elements, ["italic"]);
                  var m = (0, l.a1)(r, "data-type", "s");
                  m && f(e.toolbar.elements, ["strike"]);
                  var y = (0, l.a1)(r, "data-type", "a");
                  y && f(e.toolbar.elements, ["link"]);
                  var h = (0, l.lG)(r, "LI");
                  h ? (h.classList.contains("vditor-task") ? f(e.toolbar.elements, ["check"]) : h.parentElement.tagName === "OL" ? f(e.toolbar.elements, ["ordered-list"]) : h.parentElement.tagName === "UL" && f(e.toolbar.elements, ["list"]), v(e.toolbar.elements, ["outdent", "indent"])) : u(e.toolbar.elements, ["outdent", "indent"]);
                  var _ = (0, l.a1)(r, "data-type", "code-block");
                  _ && (u(e.toolbar.elements, [
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
                  ]), f(e.toolbar.elements, ["code"]));
                  var H = (0, l.a1)(r, "data-type", "code");
                  H && (u(e.toolbar.elements, [
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
                  ]), f(e.toolbar.elements, ["inline-code"]));
                  var q = (0, l.a1)(r, "data-type", "table");
                  q && u(e.toolbar.elements, [
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
            }, Le = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), clearTimeout(e.wysiwyg.afterRenderTimeoutId), e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function() {
                if (!e.wysiwyg.composingLock) {
                  var r = B(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(r), e.options.counter.enable && e.counter.render(e, r), e.options.cache.enable && (0, i.pK)() && (localStorage.setItem(e.options.cache.id, r), e.options.cache.after && e.options.cache.after(r)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, ra = function(e) {
              for (var t = e.previousSibling; t; ) {
                if (t.nodeType !== 3 && t.tagName === "A" && !t.previousSibling && t.innerHTML.replace(g.g.ZWSP, "") === "" && t.nextSibling)
                  return t;
                t = t.previousSibling;
              }
              return !1;
            }, oa = function(e) {
              for (var t = e.startContainer.nextSibling; t && t.textContent === ""; )
                t = t.nextSibling;
              return !!(t && t.nodeType !== 3 && (t.tagName === "CODE" || t.getAttribute("data-type") === "math-inline" || t.getAttribute("data-type") === "html-entity" || t.getAttribute("data-type") === "html-inline"));
            }, bo = function(e) {
              for (var t = "", r = e.nextSibling; r; )
                r.nodeType === 3 ? t += r.textContent : t += r.outerHTML, r = r.nextSibling;
              return t;
            }, vo = function(e) {
              for (var t = "", r = e.previousSibling; r; )
                r.nodeType === 3 ? t = r.textContent + t : t = r.outerHTML + t, r = r.previousSibling;
              return t;
            }, na = function(e) {
              for (var t = e; t && !t.nextSibling; )
                t = t.parentElement;
              return t.nextSibling;
            }, aa = function(e) {
              var t = vo(e.startContainer), r = bo(e.startContainer), o = e.startContainer.textContent, n = e.startOffset, a = "", s = "";
              return (o.substr(0, n) !== "" && o.substr(0, n) !== g.g.ZWSP || t) && (a = "".concat(t).concat(o.substr(0, n))), (o.substr(n) !== "" && o.substr(n) !== g.g.ZWSP || r) && (s = "".concat(o.substr(n)).concat(r)), {
                afterHTML: s,
                beforeHTML: a
              };
            }, Ar = function(e, t) {
              Array.from(e.wysiwyg.element.childNodes).find(function(r) {
                if (r.nodeType === 3) {
                  var o = document.createElement("p");
                  o.setAttribute("data-block", "0"), o.textContent = r.textContent;
                  var n = t.startContainer.nodeType === 3 ? t.startOffset : r.textContent.length;
                  return r.parentNode.insertBefore(o, r), r.remove(), t.setStart(o.firstChild, Math.min(o.firstChild.textContent.length, n)), t.collapse(!0), (0, R.Hc)(t), !0;
                } else if (!r.getAttribute("data-block"))
                  return r.tagName === "P" ? r.remove() : (r.tagName === "DIV" ? (t.insertNode(document.createElement("wbr")), r.outerHTML = '<p data-block="0">'.concat(r.innerHTML, "</p>")) : r.tagName === "BR" ? r.outerHTML = '<p data-block="0">'.concat(r.outerHTML, "<wbr></p>") : (t.insertNode(document.createElement("wbr")), r.outerHTML = '<p data-block="0">'.concat(r.outerHTML, "</p>")), (0, R.ib)(e.wysiwyg.element, t), t = getSelection().getRangeAt(0)), !0;
              });
            }, ar = function(e, t) {
              var r = (0, R.zh)(e), o = (0, l.F9)(r.startContainer);
              o || (o = r.startContainer.childNodes[r.startOffset]), !o && e.wysiwyg.element.children.length === 0 && (o = e.wysiwyg.element), o && !o.classList.contains("vditor-wysiwyg__block") && (r.insertNode(document.createElement("wbr")), o.innerHTML.trim() === "<wbr>" && (o.innerHTML = "<wbr><br>"), o.tagName === "BLOCKQUOTE" || o.classList.contains("vditor-reset") ? o.innerHTML = "<".concat(t, ' data-block="0">').concat(o.innerHTML.trim(), "</").concat(t, ">") : o.outerHTML = "<".concat(t, ' data-block="0">').concat(o.innerHTML.trim(), "</").concat(t, ">"), (0, R.ib)(e.wysiwyg.element, r), Re(e));
            }, Mr = function(e) {
              var t = getSelection().getRangeAt(0), r = (0, l.F9)(t.startContainer);
              r || (r = t.startContainer.childNodes[t.startOffset]), r && (t.insertNode(document.createElement("wbr")), r.outerHTML = '<p data-block="0">'.concat(r.innerHTML, "</p>"), (0, R.ib)(e.wysiwyg.element, t)), e.wysiwyg.popover.style.display = "none";
            }, Wt = function(e, t, r) {
              r === void 0 && (r = !0);
              var o = e.previousElementSibling, n = o.ownerDocument.createRange();
              o.tagName === "CODE" ? (o.style.display = "inline-block", r ? n.setStart(o.firstChild, 1) : n.selectNodeContents(o)) : (o.style.display = "block", o.firstChild.firstChild || o.firstChild.appendChild(document.createTextNode("")), n.selectNodeContents(o.firstChild)), r ? n.collapse(!0) : n.collapse(!1), (0, R.Hc)(n), !e.firstElementChild.classList.contains("language-mindmap") && Oe(t);
            }, ia = function(e, t) {
              if (e.wysiwyg.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var r = (0, R.zh)(e), o = r.startContainer;
              if (!Bo(t, e, o) || (Ao(r, e, t), Vo(r), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, i.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var n = (0, l.F9)(o), a = (0, l.lG)(o, "P");
              if (Oo(t, e, a, r) || Ro(r, e, a, t) || Io(e, t, r))
                return !0;
              var s = (0, l.fb)(o, "vditor-wysiwyg__block");
              if (s) {
                if (t.key === "Escape" && s.children.length === 2)
                  return e.wysiwyg.popover.style.display = "none", s.firstElementChild.style.display = "none", e.wysiwyg.element.blur(), t.preventDefault(), !0;
                if (!(0, i.yl)(t) && !t.shiftKey && t.altKey && t.key === "Enter" && s.getAttribute("data-type") === "code-block") {
                  var m = e.wysiwyg.popover.querySelector(".vditor-input");
                  return m.focus(), m.select(), t.preventDefault(), !0;
                }
                if (s.getAttribute("data-block") === "0" && (jo(e, t, s.firstElementChild, r) || qt(e, t, r, s.firstElementChild, s) || s.getAttribute("data-type") !== "yaml-front-matter" && _t(e, t, r, s.firstElementChild, s)))
                  return !0;
              }
              if (Fo(e, r, t, a))
                return !0;
              var y = (0, l.E2)(o, "BLOCKQUOTE");
              if (y && !t.shiftKey && t.altKey && t.key === "Enter") {
                (0, i.yl)(t) ? r.setStartBefore(y) : r.setStartAfter(y), (0, R.Hc)(r);
                var h = document.createElement("p");
                return h.setAttribute("data-block", "0"), h.innerHTML = `
`, r.insertNode(h), r.collapse(!0), (0, R.Hc)(r), Le(e), Oe(e), t.preventDefault(), !0;
              }
              var _ = (0, A.W)(o);
              if (_) {
                if (_.tagName === "H6" && o.textContent.length === r.startOffset && !(0, i.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter") {
                  var H = document.createElement("p");
                  return H.textContent = `
`, H.setAttribute("data-block", "0"), o.parentElement.insertAdjacentElement("afterend", H), r.setStart(H, 0), (0, R.Hc)(r), Le(e), Oe(e), t.preventDefault(), !0;
                }
                if (U("⌘=", t)) {
                  var q = parseInt(_.tagName.substr(1), 10) - 1;
                  return q > 0 && (ar(e, "h".concat(q)), Le(e)), t.preventDefault(), !0;
                }
                if (U("⌘-", t)) {
                  var q = parseInt(_.tagName.substr(1), 10) + 1;
                  return q < 7 && (ar(e, "h".concat(q)), Le(e)), t.preventDefault(), !0;
                }
                t.key === "Backspace" && !(0, i.yl)(t) && !t.shiftKey && !t.altKey && _.textContent.length === 1 && Mr(e);
              }
              if (zo(e, r, t))
                return !0;
              if (t.altKey && t.key === "Enter" && !(0, i.yl)(t) && !t.shiftKey) {
                var X = (0, l.lG)(o, "A"), V = (0, l.a1)(o, "data-type", "link-ref"), te = (0, l.a1)(o, "data-type", "footnotes-ref");
                if (X || V || te || _ && _.tagName.length === 2) {
                  var ee = e.wysiwyg.popover.querySelector("input");
                  ee.focus(), ee.select();
                }
              }
              if (Ve(e, t))
                return !0;
              if (U("⇧⌘U", t)) {
                var K = e.wysiwyg.popover.querySelector('[data-type="up"]');
                if (K)
                  return K.click(), t.preventDefault(), !0;
              }
              if (U("⇧⌘D", t)) {
                var K = e.wysiwyg.popover.querySelector('[data-type="down"]');
                if (K)
                  return K.click(), t.preventDefault(), !0;
              }
              if (Vr(e, r, t))
                return !0;
              if (!(0, i.yl)(t) && t.shiftKey && !t.altKey && t.key === "Enter" && o.parentElement.tagName !== "LI" && o.parentElement.tagName !== "P")
                return ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(o.parentElement.tagName) ? r.insertNode(document.createTextNode(`
` + g.g.ZWSP)) : r.insertNode(document.createTextNode(`
`)), r.collapse(!1), (0, R.Hc)(r), Le(e), Oe(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, i.yl)(t) && !t.shiftKey && !t.altKey && r.toString() === "") {
                if (Wo(e, r, t, a))
                  return !0;
                if (n) {
                  if (n.previousElementSibling && n.previousElementSibling.classList.contains("vditor-wysiwyg__block") && n.previousElementSibling.getAttribute("data-block") === "0" && n.tagName !== "UL" && n.tagName !== "OL") {
                    var de = (0, R.im)(n, e.wysiwyg.element, r).start;
                    if (de === 0 && r.startOffset === 0 || // https://github.com/Vanessa219/vditor/issues/894
                    de === 1 && n.innerText.startsWith(g.g.ZWSP))
                      return Wt(n.previousElementSibling.lastElementChild, e, !1), n.innerHTML.trim().replace(g.g.ZWSP, "") === "" && (n.remove(), Le(e)), t.preventDefault(), !0;
                  }
                  var oe = r.startOffset;
                  if (r.toString() === "" && o.nodeType === 3 && o.textContent.charAt(oe - 2) === `
` && o.textContent.charAt(oe - 1) !== g.g.ZWSP && ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(o.parentElement.tagName))
                    return o.textContent = o.textContent.substring(0, oe - 1) + g.g.ZWSP, r.setStart(o, oe), r.collapse(!0), Le(e), t.preventDefault(), !0;
                  o.textContent === g.g.ZWSP && r.startOffset === 1 && !o.previousSibling && oa(r) && (o.textContent = ""), n.querySelectorAll("span.vditor-wysiwyg__block[data-type='math-inline']").forEach(function(Te) {
                    Te.firstElementChild.style.display = "inline", Te.lastElementChild.style.display = "none";
                  }), n.querySelectorAll("span.vditor-wysiwyg__block[data-type='html-entity']").forEach(function(Te) {
                    Te.firstElementChild.style.display = "inline", Te.lastElementChild.style.display = "none";
                  });
                }
              }
              if ((0, i.vU)() && r.startOffset === 1 && o.textContent.indexOf(g.g.ZWSP) > -1 && o.previousSibling && o.previousSibling.nodeType !== 3 && o.previousSibling.tagName === "CODE" && (t.key === "Backspace" || t.key === "ArrowLeft"))
                return r.selectNodeContents(o.previousSibling), r.collapse(!1), t.preventDefault(), !0;
              if (Uo(t, n, r))
                return t.preventDefault(), !0;
              if (Mo(r, t.key), t.key === "ArrowDown") {
                var me = o.nextSibling;
                me && me.nodeType !== 3 && me.getAttribute("data-type") === "math-inline" && r.setStartAfter(me);
              }
              return n && We(n, e, t, r) ? (t.preventDefault(), !0) : !1;
            }, Ve = function(e, t) {
              if (U("⇧⌘X", t)) {
                var r = e.wysiwyg.popover.querySelector('[data-type="remove"]');
                return r && r.click(), t.preventDefault(), !0;
              }
            }, bt = function(e) {
              clearTimeout(e.wysiwyg.hlToolbarTimeoutId), e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function() {
                if (e.wysiwyg.element.getAttribute("contenteditable") !== "false" && (0, R.Gb)(e.wysiwyg.element)) {
                  b(e.toolbar.elements, g.g.EDIT_TOOLBARS), v(e.toolbar.elements, g.g.EDIT_TOOLBARS);
                  var t = getSelection().getRangeAt(0), r = t.startContainer;
                  t.startContainer.nodeType === 3 ? r = t.startContainer.parentElement : r = r.childNodes[t.startOffset >= r.childNodes.length ? r.childNodes.length - 1 : t.startOffset];
                  var o = (0, l.a1)(r, "data-type", "footnotes-block");
                  if (o) {
                    e.wysiwyg.popover.innerHTML = "", Je(o, e), qe(e, "footnotes-block"), Ye(e, o);
                    return;
                  }
                  var n = (0, l.lG)(r, "LI");
                  n ? (n.classList.contains("vditor-task") ? f(e.toolbar.elements, ["check"]) : n.parentElement.tagName === "OL" ? f(e.toolbar.elements, ["ordered-list"]) : n.parentElement.tagName === "UL" && f(e.toolbar.elements, ["list"]), v(e.toolbar.elements, ["outdent", "indent"])) : u(e.toolbar.elements, ["outdent", "indent"]), (0, l.lG)(r, "BLOCKQUOTE") && f(e.toolbar.elements, ["quote"]), ((0, l.lG)(r, "B") || (0, l.lG)(r, "STRONG")) && f(e.toolbar.elements, ["bold"]), ((0, l.lG)(r, "I") || (0, l.lG)(r, "EM")) && f(e.toolbar.elements, ["italic"]), ((0, l.lG)(r, "STRIKE") || (0, l.lG)(r, "S")) && f(e.toolbar.elements, ["strike"]), e.wysiwyg.element.querySelectorAll(".vditor-comment--focus").forEach(function(ie) {
                    ie.classList.remove("vditor-comment--focus");
                  });
                  var a = (0, l.fb)(r, "vditor-comment");
                  if (a) {
                    var s = a.getAttribute("data-cmtids").split(" ");
                    if (s.length > 1 && a.nextSibling.isSameNode(a.nextElementSibling)) {
                      var m = a.nextElementSibling.getAttribute("data-cmtids").split(" ");
                      s.find(function(ie) {
                        if (m.includes(ie))
                          return s = [ie], !0;
                      });
                    }
                    e.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(ie) {
                      ie.getAttribute("data-cmtids").indexOf(s[0]) > -1 && ie.classList.add("vditor-comment--focus");
                    });
                  }
                  var y = (0, l.lG)(r, "A");
                  y && f(e.toolbar.elements, ["link"]);
                  var h = (0, l.lG)(r, "TABLE"), _ = (0, A.W)(r);
                  (0, l.lG)(r, "CODE") ? (0, l.lG)(r, "PRE") ? (u(e.toolbar.elements, [
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
                  ]), f(e.toolbar.elements, ["code"])) : (u(e.toolbar.elements, [
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
                  ]), f(e.toolbar.elements, ["inline-code"])) : _ ? (u(e.toolbar.elements, ["bold"]), f(e.toolbar.elements, ["headings"])) : h && u(e.toolbar.elements, ["table"]);
                  var H = (0, l.fb)(r, "vditor-toc");
                  if (H) {
                    e.wysiwyg.popover.innerHTML = "", Je(H, e), qe(e, "vditor-toc"), Ye(e, H);
                    return;
                  }
                  var q = (0, A.S)(r, "BLOCKQUOTE");
                  if (q && (e.wysiwyg.popover.innerHTML = "", Bt(t, q, e), At(t, q, e), Je(q, e), qe(e, "blockquote"), Ye(e, q)), n && (e.wysiwyg.popover.innerHTML = "", Bt(t, n, e), At(t, n, e), Je(n, e), qe(e, "li"), Ye(e, n)), h) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var X = function() {
                      var ie = h.rows.length, Ce = h.rows[0].cells.length, mt = parseInt(He.value, 10) || ie, ht = parseInt(Ge.value, 10) || Ce;
                      if (!(mt === ie && Ce === ht)) {
                        if (Ce !== ht)
                          for (var Zt = ht - Ce, nt = 0; nt < h.rows.length; nt++)
                            if (Zt > 0)
                              for (var tn = 0; tn < Zt; tn++)
                                nt === 0 ? h.rows[nt].lastElementChild.insertAdjacentHTML("afterend", "<th> </th>") : h.rows[nt].lastElementChild.insertAdjacentHTML("afterend", "<td> </td>");
                            else
                              for (var Gr = Ce - 1; Gr >= ht; Gr--)
                                h.rows[nt].cells[Gr].remove();
                        if (ie !== mt) {
                          var rn = mt - ie;
                          if (rn > 0) {
                            for (var Xr = "<tr>", Ot = 0; Ot < ht; Ot++)
                              Xr += "<td> </td>";
                            for (var on = 0; on < rn; on++)
                              h.querySelector("tbody") ? h.querySelector("tbody").insertAdjacentHTML("beforeend", Xr) : h.querySelector("thead").insertAdjacentHTML("afterend", Xr + "</tr>");
                          } else
                            for (var Ot = ie - 1; Ot >= mt; Ot--)
                              h.rows[Ot].remove(), h.rows.length === 1 && h.querySelector("tbody").remove();
                        }
                        typeof e.options.input == "function" && e.options.input(B(e));
                      }
                    }, V = function(ie) {
                      cr(h, ie), ie === "right" ? (de.classList.remove("vditor-icon--current"), oe.classList.remove("vditor-icon--current"), me.classList.add("vditor-icon--current")) : ie === "center" ? (de.classList.remove("vditor-icon--current"), me.classList.remove("vditor-icon--current"), oe.classList.add("vditor-icon--current")) : (oe.classList.remove("vditor-icon--current"), me.classList.remove("vditor-icon--current"), de.classList.add("vditor-icon--current")), (0, R.Hc)(t), Le(e);
                    }, te = (0, l.lG)(r, "TD"), ee = (0, l.lG)(r, "TH"), K = "left";
                    te ? K = te.getAttribute("align") || "left" : ee && (K = ee.getAttribute("align") || "center");
                    var de = document.createElement("button");
                    de.setAttribute("type", "button"), de.setAttribute("aria-label", window.VditorI18n.alignLeft + "<" + (0, i.ns)("⇧⌘L") + ">"), de.setAttribute("data-type", "left"), de.innerHTML = '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>', de.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (K === "left" ? " vditor-icon--current" : ""), de.onclick = function() {
                      V("left");
                    };
                    var oe = document.createElement("button");
                    oe.setAttribute("type", "button"), oe.setAttribute("aria-label", window.VditorI18n.alignCenter + "<" + (0, i.ns)("⇧⌘C") + ">"), oe.setAttribute("data-type", "center"), oe.innerHTML = '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', oe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (K === "center" ? " vditor-icon--current" : ""), oe.onclick = function() {
                      V("center");
                    };
                    var me = document.createElement("button");
                    me.setAttribute("type", "button"), me.setAttribute("aria-label", window.VditorI18n.alignRight + "<" + (0, i.ns)("⇧⌘R") + ">"), me.setAttribute("data-type", "right"), me.innerHTML = '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>', me.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (K === "right" ? " vditor-icon--current" : ""), me.onclick = function() {
                      V("right");
                    };
                    var Te = document.createElement("button");
                    Te.setAttribute("type", "button"), Te.setAttribute("aria-label", window.VditorI18n.insertRowBelow + "<" + (0, i.ns)("⌘=") + ">"), Te.setAttribute("data-type", "insertRow"), Te.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>', Te.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Te.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && Ho(e, t, Ce);
                    };
                    var xe = document.createElement("button");
                    xe.setAttribute("type", "button"), xe.setAttribute("aria-label", window.VditorI18n.insertRowAbove + "<" + (0, i.ns)("⇧⌘F") + ">"), xe.setAttribute("data-type", "insertRow"), xe.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>', xe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", xe.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && No(e, t, Ce);
                    };
                    var Be = document.createElement("button");
                    Be.setAttribute("type", "button"), Be.setAttribute("aria-label", window.VditorI18n.insertColumnRight + "<" + (0, i.ns)("⇧⌘=") + ">"), Be.setAttribute("data-type", "insertColumn"), Be.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>', Be.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Be.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && dr(e, h, Ce);
                    };
                    var Ue = document.createElement("button");
                    Ue.setAttribute("type", "button"), Ue.setAttribute("aria-label", window.VditorI18n.insertColumnLeft + "<" + (0, i.ns)("⇧⌘G") + ">"), Ue.setAttribute("data-type", "insertColumn"), Ue.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>', Ue.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Ue.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && dr(e, h, Ce, "beforebegin");
                    };
                    var je = document.createElement("button");
                    je.setAttribute("type", "button"), je.setAttribute("aria-label", window.VditorI18n["delete-row"] + "<" + (0, i.ns)("⌘-") + ">"), je.setAttribute("data-type", "deleteRow"), je.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>', je.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", je.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && $o(e, t, Ce);
                    };
                    var Ke = document.createElement("button");
                    Ke.setAttribute("type", "button"), Ke.setAttribute("aria-label", window.VditorI18n["delete-column"] + "<" + (0, i.ns)("⇧⌘-") + ">"), Ke.setAttribute("data-type", "deleteColumn"), Ke.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>', Ke.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", Ke.onclick = function() {
                      var ie = getSelection().getRangeAt(0).startContainer, Ce = (0, l.lG)(ie, "TD") || (0, l.lG)(ie, "TH");
                      Ce && Po(e, t, h, Ce);
                    };
                    var ye = document.createElement("span");
                    ye.setAttribute("aria-label", window.VditorI18n.row), ye.className = "vditor-tooltipped vditor-tooltipped__n";
                    var He = document.createElement("input");
                    ye.appendChild(He), He.type = "number", He.min = "1", He.className = "vditor-input", He.style.width = "42px", He.style.textAlign = "center", He.setAttribute("placeholder", window.VditorI18n.row), He.value = h.rows.length.toString(), He.oninput = function() {
                      X();
                    }, He.onkeydown = function(ie) {
                      if (!ie.isComposing) {
                        if (ie.key === "Tab") {
                          Ge.focus(), Ge.select(), ie.preventDefault();
                          return;
                        }
                        Ve(e, ie) || ot(ie, t);
                      }
                    };
                    var pr = document.createElement("span");
                    pr.setAttribute("aria-label", window.VditorI18n.column), pr.className = "vditor-tooltipped vditor-tooltipped__n";
                    var Ge = document.createElement("input");
                    pr.appendChild(Ge), Ge.type = "number", Ge.min = "1", Ge.className = "vditor-input", Ge.style.width = "42px", Ge.style.textAlign = "center", Ge.setAttribute("placeholder", window.VditorI18n.column), Ge.value = h.rows[0].cells.length.toString(), Ge.oninput = function() {
                      X();
                    }, Ge.onkeydown = function(ie) {
                      if (!ie.isComposing) {
                        if (ie.key === "Tab") {
                          He.focus(), He.select(), ie.preventDefault();
                          return;
                        }
                        Ve(e, ie) || ot(ie, t);
                      }
                    }, Bt(t, h, e), At(t, h, e), Je(h, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", de), e.wysiwyg.popover.insertAdjacentElement("beforeend", oe), e.wysiwyg.popover.insertAdjacentElement("beforeend", me), e.wysiwyg.popover.insertAdjacentElement("beforeend", xe), e.wysiwyg.popover.insertAdjacentElement("beforeend", Te), e.wysiwyg.popover.insertAdjacentElement("beforeend", Ue), e.wysiwyg.popover.insertAdjacentElement("beforeend", Be), e.wysiwyg.popover.insertAdjacentElement("beforeend", je), e.wysiwyg.popover.insertAdjacentElement("beforeend", Ke), e.wysiwyg.popover.insertAdjacentElement("beforeend", ye), e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "), e.wysiwyg.popover.insertAdjacentElement("beforeend", pr), qe(e, "table"), Ye(e, h);
                  }
                  var qr = (0, l.a1)(r, "data-type", "link-ref");
                  qr && yo(e, qr, t);
                  var Dt = (0, l.a1)(r, "data-type", "footnotes-ref");
                  if (Dt) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var ye = document.createElement("span");
                    ye.setAttribute("aria-label", window.VditorI18n.footnoteRef + "<" + (0, i.ns)("⌥Enter") + ">"), ye.className = "vditor-tooltipped vditor-tooltipped__n";
                    var st = document.createElement("input");
                    ye.appendChild(st), st.className = "vditor-input", st.setAttribute("placeholder", window.VditorI18n.footnoteRef + "<" + (0, i.ns)("⌥Enter") + ">"), st.style.width = "120px", st.value = Dt.getAttribute("data-footnotes-label"), st.oninput = function() {
                      st.value.trim() !== "" && Dt.setAttribute("data-footnotes-label", st.value), typeof e.options.input == "function" && e.options.input(B(e));
                    }, st.onkeydown = function(Ce) {
                      Ce.isComposing || Ve(e, Ce) || ot(Ce, t);
                    }, Je(Dt, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", ye), qe(e, "footnotes-ref"), Ye(e, Dt);
                  }
                  var Ie = (0, l.fb)(r, "vditor-wysiwyg__block"), Qo = Ie ? Ie.getAttribute("data-type").indexOf("block") > -1 : !1;
                  if (e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(ie) {
                    if (!Ie || Ie && Qo && !Ie.contains(ie)) {
                      var Ce = ie.previousElementSibling;
                      Ce.style.display = "none";
                    }
                  }), Ie && Qo) {
                    if (e.wysiwyg.popover.innerHTML = "", Bt(t, Ie, e), At(t, Ie, e), Je(Ie, e), Ie.getAttribute("data-type") === "code-block") {
                      var gr = document.createElement("span");
                      gr.setAttribute("aria-label", window.VditorI18n.language + "<" + (0, i.ns)("⌥Enter") + ">"), gr.className = "vditor-tooltipped vditor-tooltipped__n";
                      var Qe = document.createElement("input");
                      gr.appendChild(Qe);
                      var Xt = Ie.firstElementChild.firstElementChild;
                      Qe.className = "vditor-input", Qe.setAttribute("placeholder", window.VditorI18n.language + "<" + (0, i.ns)("⌥Enter") + ">"), Qe.value = Xt.className.indexOf("language-") > -1 ? Xt.className.split("-")[1].split(" ")[0] : "", Qe.oninput = function(ie) {
                        Qe.value.trim() !== "" ? Xt.className = "language-".concat(Qe.value) : (Xt.className = "", e.hint.recentLanguage = ""), Ie.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (Ie.lastElementChild.innerHTML = Ie.firstElementChild.innerHTML, he(Ie.lastElementChild, e)), Le(e), ie.detail === 1 && (t.setStart(Xt.firstChild, 0), t.collapse(!0), (0, R.Hc)(t));
                      }, Qe.onkeydown = function(ie) {
                        if (!ie.isComposing && !Ve(e, ie)) {
                          if (ie.key === "Escape" && e.hint.element.style.display === "block") {
                            e.hint.element.style.display = "none", ie.preventDefault();
                            return;
                          }
                          e.hint.select(ie, e), ot(ie, t);
                        }
                      }, Qe.onkeyup = function(ie) {
                        var Ce, mt;
                        if (!(ie.isComposing || ie.key === "Enter" || ie.key === "ArrowUp" || ie.key === "Escape" || ie.key === "ArrowDown")) {
                          var ht = [], Zt = Qe.value.substring(0, Qe.selectionStart);
                          (e.options.preview.hljs.langs || g.g.ALIAS_CODE_LANGUAGES.concat(((mt = (Ce = window.hljs) === null || Ce === void 0 ? void 0 : Ce.listLanguages()) !== null && mt !== void 0 ? mt : []).sort())).forEach(function(nt) {
                            nt.indexOf(Zt.toLowerCase()) > -1 && ht.push({
                              html: nt,
                              value: nt
                            });
                          }), e.hint.genHTML(ht, Zt, e), ie.preventDefault();
                        }
                      }, e.wysiwyg.popover.insertAdjacentElement("beforeend", gr), qe(e, "code-block");
                    } else
                      qe(e, "block");
                    Ye(e, Ie);
                  } else
                    Ie = void 0;
                  if (_) {
                    e.wysiwyg.popover.innerHTML = "";
                    var ye = document.createElement("span");
                    ye.setAttribute("aria-label", "ID<" + (0, i.ns)("⌥Enter") + ">"), ye.className = "vditor-tooltipped vditor-tooltipped__n";
                    var gt = document.createElement("input");
                    ye.appendChild(gt), gt.className = "vditor-input", gt.setAttribute("placeholder", "ID<" + (0, i.ns)("⌥Enter") + ">"), gt.style.width = "120px", gt.value = _.getAttribute("data-id") || "", gt.oninput = function() {
                      _.setAttribute("data-id", gt.value), typeof e.options.input == "function" && e.options.input(B(e));
                    }, gt.onkeydown = function(Ce) {
                      Ce.isComposing || Ve(e, Ce) || ot(Ce, t);
                    }, Bt(t, _, e), At(t, _, e), Je(_, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", ye), qe(e, "heading"), Ye(e, _);
                  }
                  if (y && _r(e, y, t), !q && !n && !h && !Ie && !y && !qr && !Dt && !_ && !H) {
                    var Rt = (0, l.a1)(r, "data-block", "0");
                    Rt && Rt.parentElement.isEqualNode(e.wysiwyg.element) ? (e.wysiwyg.popover.innerHTML = "", Bt(t, Rt, e), At(t, Rt, e), Je(Rt, e), qe(e, "block"), Ye(e, Rt)) : e.wysiwyg.popover.style.display = "none";
                  }
                  e.wysiwyg.element.querySelectorAll('span[data-type="backslash"] > span').forEach(function(ie) {
                    ie.style.display = "none";
                  });
                  var en = (0, l.a1)(t.startContainer, "data-type", "backslash");
                  en && (en.querySelector("span").style.display = "inline");
                }
              }, 200);
            }, Ye = function(e, t) {
              var r = t, o = (0, l.lG)(t, "TABLE");
              o && (r = o), e.wysiwyg.popover.style.left = "0", e.wysiwyg.popover.style.display = "block", e.wysiwyg.popover.style.top = Math.max(-8, r.offsetTop - 21 - e.wysiwyg.element.scrollTop) + "px", e.wysiwyg.popover.style.left = Math.min(r.offsetLeft, e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth) + "px", e.wysiwyg.popover.setAttribute("data-top", (r.offsetTop - 21).toString());
            }, yo = function(e, t, r) {
              r === void 0 && (r = getSelection().getRangeAt(0)), e.wysiwyg.popover.innerHTML = "";
              var o = function() {
                a.value.trim() !== "" && (t.tagName === "IMG" ? t.setAttribute("alt", a.value) : t.textContent = a.value), m.value.trim() !== "" && t.setAttribute("data-link-label", m.value), typeof e.options.input == "function" && e.options.input(B(e));
              }, n = document.createElement("span");
              n.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), n.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              n.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), a.style.width = "120px", a.value = t.getAttribute("alt") || t.textContent, a.oninput = function() {
                o();
              }, a.onkeydown = function(y) {
                Ve(e, y) || ot(y, r) || Vt(e, t, y, m);
              };
              var s = document.createElement("span");
              s.setAttribute("aria-label", window.VditorI18n.linkRef), s.className = "vditor-tooltipped vditor-tooltipped__n";
              var m = document.createElement("input");
              s.appendChild(m), m.className = "vditor-input", m.setAttribute("placeholder", window.VditorI18n.linkRef), m.value = t.getAttribute("data-link-label"), m.oninput = function() {
                o();
              }, m.onkeydown = function(y) {
                Ve(e, y) || ot(y, r) || Vt(e, t, y, a);
              }, Je(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", n), e.wysiwyg.popover.insertAdjacentElement("beforeend", s), qe(e, "link-ref"), Ye(e, t);
            }, Bt = function(e, t, r) {
              var o = t.previousElementSibling;
              if (!(!o || !t.parentElement.isEqualNode(r.wysiwyg.element) && t.tagName !== "LI")) {
                var n = document.createElement("button");
                n.setAttribute("type", "button"), n.setAttribute("data-type", "up"), n.setAttribute("aria-label", window.VditorI18n.up + "<" + (0, i.ns)("⇧⌘U") + ">"), n.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>', n.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n.onclick = function() {
                  e.insertNode(document.createElement("wbr")), o.insertAdjacentElement("beforebegin", t), (0, R.ib)(r.wysiwyg.element, e), Le(r), bt(r), Oe(r);
                }, r.wysiwyg.popover.insertAdjacentElement("beforeend", n);
              }
            }, At = function(e, t, r) {
              var o = t.nextElementSibling;
              if (!(!o || !t.parentElement.isEqualNode(r.wysiwyg.element) && t.tagName !== "LI")) {
                var n = document.createElement("button");
                n.setAttribute("type", "button"), n.setAttribute("data-type", "down"), n.setAttribute("aria-label", window.VditorI18n.down + "<" + (0, i.ns)("⇧⌘D") + ">"), n.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>', n.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n.onclick = function() {
                  e.insertNode(document.createElement("wbr")), o.insertAdjacentElement("afterend", t), (0, R.ib)(r.wysiwyg.element, e), Le(r), bt(r), Oe(r);
                }, r.wysiwyg.popover.insertAdjacentElement("beforeend", n);
              }
            }, Je = function(e, t) {
              var r = document.createElement("button");
              r.setAttribute("type", "button"), r.setAttribute("data-type", "remove"), r.setAttribute("aria-label", window.VditorI18n.remove + "<" + (0, i.ns)("⇧⌘X") + ">"), r.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>', r.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", r.onclick = function() {
                var o = (0, R.zh)(t);
                o.setStartAfter(e), (0, R.Hc)(o), e.remove(), Le(t), bt(t), ["H1", "H2", "H3", "H4", "H5", "H6"].includes(e.tagName) && Re(t);
              }, t.wysiwyg.popover.insertAdjacentElement("beforeend", r);
            }, Vt = function(e, t, r, o) {
              if (!r.isComposing) {
                if (r.key === "Tab") {
                  o.focus(), o.select(), r.preventDefault();
                  return;
                }
                if (!(0, i.yl)(r) && !r.shiftKey && r.altKey && r.key === "Enter") {
                  var n = (0, R.zh)(e);
                  t.insertAdjacentHTML("afterend", g.g.ZWSP), n.setStartAfter(t.nextSibling), n.collapse(!0), (0, R.Hc)(n), r.preventDefault();
                }
              }
            }, _r = function(e, t, r) {
              e.wysiwyg.popover.innerHTML = "";
              var o = function() {
                a.value.trim() !== "" && (t.innerHTML = a.value), t.setAttribute("href", m.value), t.setAttribute("title", h.value), Le(e);
              };
              t.querySelectorAll("[data-marker]").forEach(function(_) {
                _.removeAttribute("data-marker");
              });
              var n = document.createElement("span");
              n.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), n.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              n.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), a.style.width = "120px", a.value = t.innerHTML || "", a.oninput = function() {
                o();
              }, a.onkeydown = function(_) {
                Ve(e, _) || ot(_, r) || Vt(e, t, _, m);
              };
              var s = document.createElement("span");
              s.setAttribute("aria-label", window.VditorI18n.link), s.className = "vditor-tooltipped vditor-tooltipped__n";
              var m = document.createElement("input");
              s.appendChild(m), m.className = "vditor-input", m.setAttribute("placeholder", window.VditorI18n.link), m.value = t.getAttribute("href") || "", m.oninput = function() {
                o();
              }, m.onkeydown = function(_) {
                Ve(e, _) || ot(_, r) || Vt(e, t, _, h);
              };
              var y = document.createElement("span");
              y.setAttribute("aria-label", window.VditorI18n.tooltipText), y.className = "vditor-tooltipped vditor-tooltipped__n";
              var h = document.createElement("input");
              y.appendChild(h), h.className = "vditor-input", h.setAttribute("placeholder", window.VditorI18n.tooltipText), h.style.width = "60px", h.value = t.getAttribute("title") || "", h.oninput = function() {
                o();
              }, h.onkeydown = function(_) {
                Ve(e, _) || ot(_, r) || Vt(e, t, _, a);
              }, Je(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", n), e.wysiwyg.popover.insertAdjacentElement("beforeend", s), e.wysiwyg.popover.insertAdjacentElement("beforeend", y), qe(e, "a"), Ye(e, t);
            }, la = function(e, t) {
              var r = e.target;
              t.wysiwyg.popover.innerHTML = "";
              var o = function() {
                r.setAttribute("src", a.value), r.setAttribute("alt", m.value), r.setAttribute("title", h.value), typeof t.options.input == "function" && t.options.input(B(t));
              }, n = document.createElement("span");
              n.setAttribute("aria-label", window.VditorI18n.imageURL), n.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              n.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.imageURL), a.value = r.getAttribute("src") || "", a.oninput = function() {
                o();
              }, a.onkeydown = function(_) {
                Ve(t, _);
              };
              var s = document.createElement("span");
              s.setAttribute("aria-label", window.VditorI18n.alternateText), s.className = "vditor-tooltipped vditor-tooltipped__n";
              var m = document.createElement("input");
              s.appendChild(m), m.className = "vditor-input", m.setAttribute("placeholder", window.VditorI18n.alternateText), m.style.width = "52px", m.value = r.getAttribute("alt") || "", m.oninput = function() {
                o();
              }, m.onkeydown = function(_) {
                Ve(t, _);
              };
              var y = document.createElement("span");
              y.setAttribute("aria-label", window.VditorI18n.title), y.className = "vditor-tooltipped vditor-tooltipped__n";
              var h = document.createElement("input");
              y.appendChild(h), h.className = "vditor-input", h.setAttribute("placeholder", window.VditorI18n.title), h.value = r.getAttribute("title") || "", h.oninput = function() {
                o();
              }, h.onkeydown = function(_) {
                Ve(t, _);
              }, Je(r, t), t.wysiwyg.popover.insertAdjacentElement("beforeend", n), t.wysiwyg.popover.insertAdjacentElement("beforeend", s), t.wysiwyg.popover.insertAdjacentElement("beforeend", y), qe(t, "image"), Ye(t, r);
            }, ot = function(e, t) {
              if (!(0, i.yl)(e) && !e.shiftKey && e.key === "Enter" || e.key === "Escape")
                return t && (0, R.Hc)(t), e.preventDefault(), e.stopPropagation(), !0;
            }, qe = function(e, t) {
              e.options.customWysiwygToolbar(t, e.wysiwyg.popover);
            }, Mt = function(e) {
              e.currentMode === "wysiwyg" ? bt(e) : e.currentMode === "ir" && zt(e);
            }, wo = function(e, t, r) {
              r === void 0 && (r = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              });
              var o = e.wysiwyg.element;
              o.innerHTML = e.lute.Md2VditorDOM(t), o.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(n) {
                he(n, e), n.previousElementSibling.setAttribute("style", "display:none");
              }), Le(e, r);
            }, sa = function(e, t, r) {
              for (var o = e.startContainer.parentElement, n = !1, a = "", s = "", m = aa(e), y = m.beforeHTML, h = m.afterHTML; o && !n; ) {
                var _ = o.tagName;
                if (_ === "STRIKE" && (_ = "S"), _ === "I" && (_ = "EM"), _ === "B" && (_ = "STRONG"), _ === "S" || _ === "STRONG" || _ === "EM") {
                  var H = "", q = "", X = "";
                  o.parentElement.getAttribute("data-block") !== "0" && (q = vo(o), X = bo(o)), (y || q) && (H = "".concat(q, "<").concat(_, ">").concat(y, "</").concat(_, ">"), y = H), (r === "bold" && _ === "STRONG" || r === "italic" && _ === "EM" || r === "strikeThrough" && _ === "S") && (H += "".concat(a).concat(g.g.ZWSP, "<wbr>").concat(s), n = !0), (h || X) && (h = "<".concat(_, ">").concat(h, "</").concat(_, ">").concat(X), H += h), o.parentElement.getAttribute("data-block") !== "0" ? (o = o.parentElement, o.innerHTML = H) : (o.outerHTML = H, o = o.parentElement), a = "<".concat(_, ">") + a, s = "</".concat(_, ">") + s;
                } else
                  n = !0;
              }
              (0, R.ib)(t.wysiwyg.element, e);
            }, ca = function(e, t, r) {
              if (!(e.wysiwyg.composingLock && r instanceof CustomEvent)) {
                var o = !0, n = !0;
                e.wysiwyg.element.querySelector("wbr") && e.wysiwyg.element.querySelector("wbr").remove();
                var a = (0, R.zh)(e), s = t.getAttribute("data-type");
                if (t.classList.contains("vditor-menu--current"))
                  if (s === "strike" && (s = "strikeThrough"), s === "quote") {
                    var m = (0, l.lG)(a.startContainer, "BLOCKQUOTE");
                    m || (m = a.startContainer.childNodes[a.startOffset]), m && (o = !1, t.classList.remove("vditor-menu--current"), a.insertNode(document.createElement("wbr")), m.outerHTML = m.innerHTML.trim() === "" ? '<p data-block="0">'.concat(m.innerHTML, "</p>") : m.innerHTML, (0, R.ib)(e.wysiwyg.element, a));
                  } else if (s === "inline-code") {
                    var y = (0, l.lG)(a.startContainer, "CODE");
                    y || (y = a.startContainer.childNodes[a.startOffset]), y && (y.outerHTML = y.innerHTML.replace(g.g.ZWSP, "") + "<wbr>", (0, R.ib)(e.wysiwyg.element, a));
                  } else s === "link" ? (a.collapsed && a.selectNode(a.startContainer.parentElement), document.execCommand("unlink", !1, "")) : s === "check" || s === "list" || s === "ordered-list" ? (sr(e, a, s), (0, R.ib)(e.wysiwyg.element, a), o = !1, t.classList.remove("vditor-menu--current")) : (o = !1, t.classList.remove("vditor-menu--current"), a.toString() === "" ? sa(a, e, s) : document.execCommand(s, !1, ""));
                else {
                  e.wysiwyg.element.childNodes.length === 0 && (e.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>', (0, R.ib)(e.wysiwyg.element, a));
                  var h = (0, l.F9)(a.startContainer);
                  if (s === "quote") {
                    if (h || (h = a.startContainer.childNodes[a.startOffset]), h) {
                      o = !1, t.classList.add("vditor-menu--current"), a.insertNode(document.createElement("wbr"));
                      var _ = (0, l.lG)(a.startContainer, "LI");
                      _ && h.contains(_) ? _.innerHTML = '<blockquote data-block="0">'.concat(_.innerHTML, "</blockquote>") : h.outerHTML = '<blockquote data-block="0">'.concat(h.outerHTML, "</blockquote>"), (0, R.ib)(e.wysiwyg.element, a);
                    }
                  } else if (s === "check" || s === "list" || s === "ordered-list")
                    sr(e, a, s, !1), (0, R.ib)(e.wysiwyg.element, a), o = !1, b(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current");
                  else if (s === "inline-code") {
                    if (a.toString() === "") {
                      var H = document.createElement("code");
                      H.textContent = g.g.ZWSP, a.insertNode(H), a.setStart(H.firstChild, 1), a.collapse(!0), (0, R.Hc)(a);
                    } else if (a.startContainer.nodeType === 3) {
                      var H = document.createElement("code");
                      a.surroundContents(H), a.insertNode(H), (0, R.Hc)(a);
                    }
                    t.classList.add("vditor-menu--current");
                  } else if (s === "code") {
                    var H = document.createElement("div");
                    H.className = "vditor-wysiwyg__block", H.setAttribute("data-type", "code-block"), H.setAttribute("data-block", "0"), H.setAttribute("data-marker", "```"), a.toString() === "" ? H.innerHTML = `<pre><code><wbr>
</code></pre>` : (H.innerHTML = "<pre><code>".concat(a.toString(), "<wbr></code></pre>"), a.deleteContents()), a.insertNode(H), h && (h.outerHTML = e.lute.SpinVditorDOM(h.outerHTML)), (0, R.ib)(e.wysiwyg.element, a), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(Te) {
                      he(Te, e);
                    }), t.classList.add("vditor-menu--disabled");
                  } else if (s === "link") {
                    if (a.toString() === "") {
                      var q = document.createElement("a");
                      q.innerText = g.g.ZWSP, a.insertNode(q), a.setStart(q.firstChild, 1), a.collapse(!0), _r(e, q, a);
                      var X = e.wysiwyg.popover.querySelector("input");
                      X.value = "", X.focus(), n = !1;
                    } else {
                      var H = document.createElement("a");
                      H.setAttribute("href", ""), H.innerHTML = a.toString(), a.surroundContents(H), a.insertNode(H), (0, R.Hc)(a), _r(e, H, a);
                      var V = e.wysiwyg.popover.querySelectorAll("input");
                      V[0].value = H.innerText, V[1].focus();
                    }
                    o = !1, t.classList.add("vditor-menu--current");
                  } else if (s === "table") {
                    var te = '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                    if (a.toString().trim() === "")
                      h && h.innerHTML.trim().replace(g.g.ZWSP, "") === "" ? h.outerHTML = te : document.execCommand("insertHTML", !1, te), a.selectNode(e.wysiwyg.element.querySelector("wbr").previousSibling), e.wysiwyg.element.querySelector("wbr").remove(), (0, R.Hc)(a);
                    else {
                      te = '<table data-block="0"><thead><tr>';
                      var ee = a.toString().split(`
`), K = ee[0].split(",").length > ee[0].split("	").length ? "," : "	";
                      ee.forEach(function(me, Te) {
                        Te === 0 ? (me.split(K).forEach(function(xe, Be) {
                          Be === 0 ? te += "<th>".concat(xe, "<wbr></th>") : te += "<th>".concat(xe, "</th>");
                        }), te += "</tr></thead>") : (Te === 1 ? te += "<tbody><tr>" : te += "<tr>", me.split(K).forEach(function(xe) {
                          te += "<td>".concat(xe, "</td>");
                        }), te += "</tr>");
                      }), te += "</tbody></table>", document.execCommand("insertHTML", !1, te), (0, R.ib)(e.wysiwyg.element, a);
                    }
                    o = !1, t.classList.add("vditor-menu--disabled");
                  } else if (s === "line") {
                    if (h) {
                      var de = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                      h.innerHTML.trim() === "" ? h.outerHTML = de : h.insertAdjacentHTML("afterend", de), (0, R.ib)(e.wysiwyg.element, a);
                    }
                  } else if (o = !1, t.classList.add("vditor-menu--current"), s === "strike" && (s = "strikeThrough"), a.toString() === "" && (s === "bold" || s === "italic" || s === "strikeThrough")) {
                    var oe = "strong";
                    s === "italic" ? oe = "em" : s === "strikeThrough" && (oe = "s");
                    var H = document.createElement(oe);
                    H.textContent = g.g.ZWSP, a.insertNode(H), H.previousSibling && H.previousSibling.textContent === g.g.ZWSP && (H.previousSibling.textContent = ""), a.setStart(H.firstChild, 1), a.collapse(!0), (0, R.Hc)(a);
                  } else
                    document.execCommand(s, !1, "");
                }
                o && bt(e), n && Le(e);
              }
            }, De = (
              /** @class */
              /* @__PURE__ */ function() {
                function e(t, r) {
                  var o, n = this;
                  this.element = document.createElement("div"), r.className && (o = this.element.classList).add.apply(o, r.className.split(" "));
                  var a = r.hotkey ? " <".concat((0, i.ns)(r.hotkey), ">") : "";
                  r.level === 2 && (a = r.hotkey ? " &lt;".concat((0, i.ns)(r.hotkey), "&gt;") : "");
                  var s = r.tip ? r.tip + a : "".concat(window.VditorI18n[r.name]).concat(a), m = r.name === "upload" ? "div" : "button";
                  if (r.level === 2)
                    this.element.innerHTML = "<".concat(m, ' data-type="').concat(r.name, '">').concat(s, "</").concat(m, ">");
                  else {
                    this.element.classList.add("vditor-toolbar__item");
                    var y = document.createElement(m);
                    y.setAttribute("data-type", r.name), y.className = "vditor-tooltipped vditor-tooltipped__".concat(r.tipPosition), y.setAttribute("aria-label", s), y.innerHTML = r.icon, this.element.appendChild(y);
                  }
                  r.prefix && this.element.children[0].addEventListener((0, i.Le)(), function(h) {
                    h.preventDefault(), !n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) && (t.currentMode === "wysiwyg" ? ca(t, n.element.children[0], h) : t.currentMode === "ir" ? Sa(t, n.element.children[0], r.prefix || "", r.suffix || "") : pa(t, n.element.children[0], r.prefix || "", r.suffix || ""));
                  });
                }
                return e;
              }()
            ), da = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), vt = function(e, t, r) {
              var o;
              if (typeof r != "string" ? (E(e, ["subToolbar", "hint"]), r.preventDefault(), o = B(e)) : o = r, !(e.currentMode === t && typeof r != "string")) {
                if (e.devtools && e.devtools.renderEchart(e), e.options.preview.mode === "both" && t === "sv" ? e.preview.element.style.display = "block" : e.preview.element.style.display = "none", v(e.toolbar.elements, g.g.EDIT_TOOLBARS), b(e.toolbar.elements, g.g.EDIT_TOOLBARS), u(e.toolbar.elements, ["outdent", "indent"]), t === "ir")
                  T(e.toolbar.elements, ["both"]), x(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "block", e.lute.SetVditorIR(!0), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!1), e.currentMode = "ir", e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(o), lt(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), se(e), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(a) {
                    he(a, e);
                  }), e.ir.element.querySelectorAll(".vditor-toc").forEach(function(a) {
                    (0, j.H)(a, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  });
                else if (t === "wysiwyg")
                  T(e.toolbar.elements, ["both"]), x(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "block", e.ir.element.parentElement.style.display = "none", e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!0), e.lute.SetVditorSV(!1), e.currentMode = "wysiwyg", se(e), wo(e, o, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), e.wysiwyg.element.querySelectorAll(".vditor-toc").forEach(function(a) {
                    (0, j.H)(a, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  }), e.wysiwyg.popover.style.display = "none";
                else if (t === "sv") {
                  x(e.toolbar.elements, ["both"]), T(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "none", (e.options.preview.mode === "both" || e.options.preview.mode === "editor") && (e.sv.element.style.display = "block"), e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!0), e.currentMode = "sv";
                  var n = Co(o, e);
                  n === "<div data-block='0'></div>" && (n = ""), e.sv.element.innerHTML = n, Ae(e.sv.element), $e(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), se(e);
                }
                e.undo.resetIcon(e), typeof r != "string" && (e[e.currentMode].element.focus(), Mt(e)), Re(e), Me(e), e.toolbar.elements["edit-mode"] && (e.toolbar.elements["edit-mode"].querySelectorAll("button").forEach(function(a) {
                  a.classList.remove("vditor-menu--current");
                }), e.toolbar.elements["edit-mode"].querySelector('button[data-mode="'.concat(e.currentMode, '"]')).classList.add("vditor-menu--current")), e.outline.toggle(e, e.currentMode !== "sv" && e.options.outline.enable, typeof r != "string");
              }
            }, ua = (
              /** @class */
              function(e) {
                da(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = document.createElement("div");
                  return a.className = "vditor-hint".concat(o.level === 2 ? "" : " vditor-panel--arrow"), a.innerHTML = '<button data-mode="wysiwyg">'.concat(window.VditorI18n.wysiwyg, " &lt;").concat((0, i.ns)("⌥⌘7"), `></button>
<button data-mode="ir">`).concat(window.VditorI18n.instantRendering, " &lt;").concat((0, i.ns)("⌥⌘8"), `></button>
<button data-mode="sv">`).concat(window.VditorI18n.splitView, " &lt;").concat((0, i.ns)("⌥⌘9"), "></button>"), n.element.appendChild(a), n._bindEvent(r, a, o), n;
                }
                return t.prototype._bindEvent = function(r, o, n) {
                  var a = this.element.children[0];
                  S(r, o, a, n.level), o.children.item(0).addEventListener((0, i.Le)(), function(s) {
                    vt(r, "wysiwyg", s), s.preventDefault(), s.stopPropagation();
                  }), o.children.item(1).addEventListener((0, i.Le)(), function(s) {
                    vt(r, "ir", s), s.preventDefault(), s.stopPropagation();
                  }), o.children.item(2).addEventListener((0, i.Le)(), function(s) {
                    vt(r, "sv", s), s.preventDefault(), s.stopPropagation();
                  });
                }, t;
              }(De)
            ), Ut = function(e, t) {
              return (0, R.Gb)(e, t) ? getSelection().toString() : "";
            }, Dr = function(e, t) {
              t.addEventListener("focus", function() {
                e.options.focus && e.options.focus(B(e)), E(e, ["subToolbar", "hint"]);
              });
            }, ko = function(e, t) {
              t.addEventListener("dblclick", function(r) {
                r.target.tagName === "IMG" && (e.options.image.preview ? e.options.image.preview(r.target) : e.options.image.isPreview && (0, ae.E)(r.target, e.options.lang, e.options.theme));
              });
            }, Rr = function(e, t) {
              t.addEventListener("blur", function(r) {
                if (e.currentMode === "ir") {
                  var o = e.ir.element.querySelector(".vditor-ir__node--expand");
                  o && o.classList.remove("vditor-ir__node--expand");
                } else e.currentMode === "wysiwyg" && !e.wysiwyg.selectPopover.contains(r.relatedTarget) && e.wysiwyg.hideComment();
                e[e.currentMode].range = (0, R.zh)(e), e.options.blur && e.options.blur(B(e));
              });
            }, Or = function(e, t) {
              t.addEventListener("dragstart", function(r) {
                r.dataTransfer.setData(g.g.DROP_EDITOR, g.g.DROP_EDITOR);
              }), t.addEventListener("drop", function(r) {
                r.dataTransfer.getData(g.g.DROP_EDITOR) ? ke(e) : (r.dataTransfer.types.includes("Files") || r.dataTransfer.types.includes("text/html")) && ur(e, r, {
                  pasteCode: function(o) {
                    document.execCommand("insertHTML", !1, o);
                  }
                });
              });
            }, Hr = function(e, t, r) {
              t.addEventListener("copy", function(o) {
                return r(o, e);
              });
            }, Nr = function(e, t, r) {
              t.addEventListener("cut", function(o) {
                r(o, e), e.options.comment.enable && e.currentMode === "wysiwyg" && e.wysiwyg.getComments(e), document.execCommand("delete");
              });
            }, Oe = function(e) {
              if (e.currentMode === "wysiwyg" && e.options.comment.enable && e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)), !!e.options.typewriterMode) {
                var t = e[e.currentMode].element, r = (0, R.Ny)(t).top;
                e.options.height === "auto" && !e.element.classList.contains("vditor--fullscreen") && window.scrollTo(window.scrollX, r + e.element.offsetTop + e.toolbar.element.offsetHeight - window.innerHeight / 2 + 10), (e.options.height !== "auto" || e.element.classList.contains("vditor--fullscreen")) && (t.scrollTop = r + t.scrollTop - t.clientHeight / 2 + 10);
              }
            }, $r = function(e, t) {
              t.addEventListener("keydown", function(r) {
                if (!r.isComposing && e.options.keydown && e.options.keydown(r), !((e.options.hint.extend.length > 1 || e.toolbar.elements.emoji) && e.hint.select(r, e))) {
                  if (e.options.comment.enable && e.currentMode === "wysiwyg" && (r.key === "Backspace" || U("⌘X", r)) && e.wysiwyg.getComments(e), e.currentMode === "sv") {
                    if (J(e, r))
                      return;
                  } else if (e.currentMode === "wysiwyg") {
                    if (ia(e, r))
                      return;
                  } else if (e.currentMode === "ir" && be(e, r))
                    return;
                  if (e.options.ctrlEnter && U("⌘Enter", r)) {
                    e.options.ctrlEnter(B(e)), r.preventDefault();
                    return;
                  }
                  if (U("⌘Z", r) && !e.toolbar.elements.undo) {
                    e.undo.undo(e), r.preventDefault();
                    return;
                  }
                  if (U("⌘Y", r) && !e.toolbar.elements.redo) {
                    e.undo.redo(e), r.preventDefault();
                    return;
                  }
                  if (r.key === "Escape") {
                    e.hint.element.style.display === "block" ? e.hint.element.style.display = "none" : e.options.esc && !r.isComposing && e.options.esc(B(e)), r.preventDefault();
                    return;
                  }
                  if ((0, i.yl)(r) && r.altKey && !r.shiftKey && /^Digit[1-6]$/.test(r.code)) {
                    if (e.currentMode === "wysiwyg") {
                      var o = r.code.replace("Digit", "H");
                      (0, l.lG)(getSelection().getRangeAt(0).startContainer, o) ? Mr(e) : ar(e, o), Le(e);
                    } else e.currentMode === "sv" ? So(e, "#".repeat(parseInt(r.code.replace("Digit", ""), 10)) + " ") : e.currentMode === "ir" && Gt(e, "#".repeat(parseInt(r.code.replace("Digit", ""), 10)) + " ");
                    return r.preventDefault(), !0;
                  }
                  if ((0, i.yl)(r) && r.altKey && !r.shiftKey && /^Digit[7-9]$/.test(r.code))
                    return r.code === "Digit7" ? vt(e, "wysiwyg", r) : r.code === "Digit8" ? vt(e, "ir", r) : r.code === "Digit9" && vt(e, "sv", r), !0;
                  e.options.toolbar.find(function(n) {
                    if (!n.hotkey || n.toolbar) {
                      if (n.toolbar) {
                        var a = n.toolbar.find(function(s) {
                          if (!s.hotkey)
                            return !1;
                          if (U(s.hotkey, r))
                            return e.toolbar.elements[s.name].children[0].dispatchEvent(new CustomEvent((0, i.Le)())), r.preventDefault(), !0;
                        });
                        return !!a;
                      }
                      return !1;
                    }
                    if (U(n.hotkey, r))
                      return e.toolbar.elements[n.name].children[0].dispatchEvent(new CustomEvent((0, i.Le)())), r.preventDefault(), !0;
                  });
                }
              });
            }, Pr = function(e, t) {
              t.addEventListener("selectstart", function(r) {
                t.onmouseup = function() {
                  setTimeout(function() {
                    var o = Ut(e[e.currentMode].element);
                    o.trim() ? (e.currentMode === "wysiwyg" && e.options.comment.enable && (!(0, l.a1)(r.target, "data-type", "footnotes-block") && !(0, l.a1)(r.target, "data-type", "link-ref-defs-block") ? e.wysiwyg.showComment() : e.wysiwyg.hideComment()), e.options.select && e.options.select(o)) : (e.currentMode === "wysiwyg" && e.options.comment.enable && e.wysiwyg.hideComment(), typeof e.options.unSelect == "function" && e.options.unSelect());
                  });
                };
              });
            }, Ir = function(e, t) {
              var r = (0, R.zh)(e);
              r.extractContents(), r.insertNode(document.createTextNode(Lute.Caret)), r.insertNode(document.createTextNode(t));
              var o = (0, l.a1)(r.startContainer, "data-block", "0");
              o || (o = e.sv.element);
              var n = e.lute.SpinVditorSVDOM(o.textContent);
              n = "<div data-block='0'>" + n.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", o.isEqualNode(e.sv.element) ? o.innerHTML = n : o.outerHTML = n, Ae(e.sv.element), (0, R.ib)(e.sv.element, r), Oe(e);
            }, ir = function(e, t, r) {
              r === void 0 && (r = !0);
              var o = e;
              for (o.nodeType === 3 && (o = o.parentElement); o; ) {
                if (o.getAttribute("data-type") === t)
                  return o;
                r ? o = o.previousElementSibling : o = o.nextElementSibling;
              }
              return !1;
            }, Co = function(e, t) {
              $("SpinVditorSVDOM", e, "argument", t.options.debugger);
              var r = t.lute.SpinVditorSVDOM(e);
              return e = "<div data-block='0'>" + r.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", $("SpinVditorSVDOM", e, "result", t.options.debugger), e;
            }, fa = function(e) {
              var t = e.getAttribute("data-type"), r = e.previousElementSibling, o = t && t !== "text" && t !== "table" && t !== "heading-marker" && t !== "newline" && t !== "yaml-front-matter-open-marker" && t !== "yaml-front-matter-close-marker" && t !== "code-block-info" && t !== "code-block-close-marker" && t !== "code-block-open-marker" ? e.textContent : "", n = !1;
              for (t === "newline" && (n = !0); r && !n; ) {
                var a = r.getAttribute("data-type");
                if (a === "li-marker" || a === "blockquote-marker" || a === "task-marker" || a === "padding") {
                  var s = r.textContent;
                  if (a === "li-marker" && (t === "code-block-open-marker" || t === "code-block-info"))
                    o = s.replace(/\S/g, " ") + o;
                  else if (t === "code-block-close-marker" && r.nextElementSibling.isSameNode(e)) {
                    var m = ir(e, "code-block-open-marker");
                    m && m.previousElementSibling && (r = m.previousElementSibling, o = s + o);
                  } else
                    o = s + o;
                } else a === "newline" && (n = !0);
                r = r.previousElementSibling;
              }
              return o;
            }, $e = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), e.preview.render(e);
              var r = B(e);
              typeof e.options.input == "function" && t.enableInput && e.options.input(r), e.options.counter.enable && e.counter.render(e, r), e.options.cache.enable && (0, i.pK)() && (localStorage.setItem(e.options.cache.id, r), e.options.cache.after && e.options.cache.after(r)), e.devtools && e.devtools.renderEchart(e), clearTimeout(e.sv.processTimeoutId), e.sv.processTimeoutId = window.setTimeout(function() {
                t.enableAddUndoStack && !e.sv.composingLock && e.undo.addToUndoStack(e);
              }, e.options.undoDelay);
            }, So = function(e, t) {
              var r = (0, R.zh)(e), o = (0, A.S)(r.startContainer, "SPAN");
              o && o.textContent.trim() !== "" && (t = `
` + t), r.collapse(!0), document.execCommand("insertHTML", !1, t);
            }, pa = function(e, t, r, o) {
              var n = (0, R.zh)(e), a = t.getAttribute("data-type");
              e.sv.element.childNodes.length === 0 && (e.sv.element.innerHTML = `<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">
</span></span>`, (0, R.ib)(e.sv.element, n));
              var s = (0, l.F9)(n.startContainer), m = (0, A.S)(n.startContainer, "SPAN");
              if (s) {
                if (a === "link") {
                  var y = void 0;
                  n.toString() === "" ? y = "".concat(r).concat(Lute.Caret).concat(o) : y = "".concat(r).concat(n.toString()).concat(o.replace(")", Lute.Caret + ")")), document.execCommand("insertHTML", !1, y);
                  return;
                } else if (a === "italic" || a === "bold" || a === "strike" || a === "inline-code" || a === "code" || a === "table" || a === "line") {
                  var y = void 0;
                  n.toString() === "" ? y = "".concat(r).concat(Lute.Caret).concat(a === "code" ? "" : o) : y = "".concat(r).concat(n.toString()).concat(Lute.Caret).concat(a === "code" ? "" : o), a === "table" || a === "code" && m && m.textContent !== "" ? y = `

` + y : a === "line" && (y = `

`.concat(r, `
`).concat(Lute.Caret)), document.execCommand("insertHTML", !1, y);
                  return;
                } else if ((a === "check" || a === "list" || a === "ordered-list" || a === "quote") && m) {
                  var h = "* ";
                  a === "check" ? h = "* [ ] " : a === "ordered-list" ? h = "1. " : a === "quote" && (h = "> ");
                  var _ = ir(m, "newline");
                  _ ? _.insertAdjacentText("afterend", h) : s.insertAdjacentText("afterbegin", h), Se(e);
                  return;
                }
                (0, R.ib)(e.sv.element, n), $e(e);
              }
            }, Eo = function(e) {
              switch (e.currentMode) {
                case "ir":
                  return e.ir.element;
                case "wysiwyg":
                  return e.wysiwyg.element;
                case "sv":
                  return e.sv.element;
              }
            }, xo = function(e, t) {
              e.options.upload.setHeaders && (e.options.upload.headers = e.options.upload.setHeaders()), e.options.upload.headers && Object.keys(e.options.upload.headers).forEach(function(r) {
                t.setRequestHeader(r, e.options.upload.headers[r]);
              });
            }, ga = function(e, t, r, o) {
              function n(a) {
                return a instanceof r ? a : new r(function(s) {
                  s(a);
                });
              }
              return new (r || (r = Promise))(function(a, s) {
                function m(_) {
                  try {
                    h(o.next(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function y(_) {
                  try {
                    h(o.throw(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function h(_) {
                  _.done ? a(_.value) : n(_.value).then(m, y);
                }
                h((o = o.apply(e, t || [])).next());
              });
            }, ma = function(e, t) {
              var r = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, o, n, a, s;
              return s = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                return this;
              }), s;
              function m(h) {
                return function(_) {
                  return y([h, _]);
                };
              }
              function y(h) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, h[0] && (r = 0)), r; ) try {
                  if (o = 1, n && (a = h[0] & 2 ? n.return : h[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, h[1])).done) return a;
                  switch (n = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
                    case 0:
                    case 1:
                      a = h;
                      break;
                    case 4:
                      return r.label++, { value: h[1], done: !1 };
                    case 5:
                      r.label++, n = h[1], h = [0];
                      continue;
                    case 7:
                      h = r.ops.pop(), r.trys.pop();
                      continue;
                    default:
                      if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        r = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
                        r.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = h;
                        break;
                      }
                      if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(h);
                        break;
                      }
                      a[2] && r.ops.pop(), r.trys.pop();
                      continue;
                  }
                  h = t.call(e, r);
                } catch (_) {
                  h = [6, _], n = 0;
                } finally {
                  o = a = 0;
                }
                if (h[0] & 5) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }
            }, ha = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.isUploading = !1, this.element = document.createElement("div"), this.element.className = "vditor-upload";
                }
                return e;
              }()
            ), ba = function(e, t) {
              e.tip.hide();
              var r = [], o = "", n = "";
              e.options.lang, e.options;
              for (var a = function(h, _) {
                var H = t[_], q = !0;
                H.name || (o += "<li>".concat(window.VditorI18n.nameEmpty, "</li>"), q = !1), H.size > e.options.upload.max && (o += "<li>".concat(H.name, " ").concat(window.VditorI18n.over, " ").concat(e.options.upload.max / 1024 / 1024, "M</li>"), q = !1);
                var X = H.name.lastIndexOf("."), V = H.name.substr(X), te = e.options.upload.filename(H.name.substr(0, X)) + V;
                if (e.options.upload.accept) {
                  var ee = e.options.upload.accept.split(",").some(function(K) {
                    var de = K.trim();
                    if (de.indexOf(".") === 0) {
                      if (V.toLowerCase() === de.toLowerCase())
                        return !0;
                    } else if (H.type.split("/")[0] === de.split("/")[0])
                      return !0;
                    return !1;
                  });
                  ee || (o += "<li>".concat(H.name, " ").concat(window.VditorI18n.fileTypeError, "</li>"), q = !1);
                }
                q && (r.push(H), n += "<li>".concat(te, " ").concat(window.VditorI18n.uploading, ' <a class="vditorCancelUpload" href="javascript:void(0)">').concat(window.VditorI18n.cancelUpload, "</a></li>"));
              }, s = t.length, m = 0; m < s; m++)
                a(s, m);
              if (e.tip.show("<ul>".concat(o).concat(n, "</ul>")), e.options.upload.cancel) {
                var y = e.tip.element.querySelector(".vditorCancelUpload");
                y && y.addEventListener("click", function() {
                  e.options.upload.cancel(r), e.tip.hide(), e.upload.isUploading = !1;
                });
              }
              return r;
            }, va = function(e, t) {
              var r = Eo(t);
              r.focus();
              var o = JSON.parse(e), n = "";
              o.code === 1 && (n = "".concat(o.msg)), o.data.errFiles && o.data.errFiles.length > 0 && (n = "<ul><li>".concat(n, "</li>"), o.data.errFiles.forEach(function(s) {
                var m = s.lastIndexOf("."), y = t.options.upload.filename(s.substr(0, m)) + s.substr(m);
                n += "<li>".concat(y, " ").concat(window.VditorI18n.uploadError, "</li>");
              }), n += "</ul>"), n ? t.tip.show(n) : t.tip.hide();
              var a = "";
              Object.keys(o.data.succMap).forEach(function(s) {
                var m = o.data.succMap[s], y = s.lastIndexOf("."), h = s.substr(y), _ = t.options.upload.filename(s.substr(0, y)) + h;
                h = h.toLowerCase(), h.indexOf(".wav") === 0 || h.indexOf(".mp3") === 0 || h.indexOf(".ogg") === 0 ? t.currentMode === "wysiwyg" ? a += `<div class="vditor-wysiwyg__block" data-type="html-block"
 data-block="0"><pre><code>&lt;audio controls="controls" src="`.concat(m, '"&gt;&lt;/audio&gt;</code></pre><pre class="vditor-wysiwyg__preview" data-render="1"><audio controls="controls" src="').concat(m, `"></audio></pre></div>
`) : t.currentMode === "ir" ? a += '<audio controls="controls" src="'.concat(m, `"></audio>
`) : a += "[".concat(_, "](").concat(m, `)
`) : h.indexOf(".apng") === 0 || h.indexOf(".bmp") === 0 || h.indexOf(".gif") === 0 || h.indexOf(".ico") === 0 || h.indexOf(".cur") === 0 || h.indexOf(".jpg") === 0 || h.indexOf(".jpeg") === 0 || h.indexOf(".jfif") === 0 || h.indexOf(".pjp") === 0 || h.indexOf(".pjpeg") === 0 || h.indexOf(".png") === 0 || h.indexOf(".svg") === 0 || h.indexOf(".webp") === 0 ? t.currentMode === "wysiwyg" ? a += '<img alt="'.concat(_, '" src="').concat(m, `">
`) : a += "![".concat(_, "](").concat(m, `)
`) : t.currentMode === "wysiwyg" ? a += '<a href="'.concat(m, '">').concat(_, `</a>
`) : a += "[".concat(_, "](").concat(m, `)
`);
              }), (0, R.Hc)(t.upload.range), document.execCommand("insertHTML", !1, a), t.upload.range = getSelection().getRangeAt(0).cloneRange();
            }, jr = function(e, t, r) {
              return ga(void 0, void 0, void 0, function() {
                var o, n, V, a, s, s, m, y, h, _, H, q, X, V, te, ee;
                return ma(this, function(K) {
                  switch (K.label) {
                    case 0:
                      for (o = [], n = e.options.upload.multiple === !0 ? t.length : 1, V = 0; V < n; V++)
                        a = t[V], a instanceof DataTransferItem && (a = a.getAsFile()), o.push(a);
                      return e.options.upload.handler ? [4, e.options.upload.handler(o)] : [3, 2];
                    case 1:
                      return s = K.sent(), r && (r.value = ""), typeof s == "string" ? (e.tip.show(s), [
                        2
                        /*return*/
                      ]) : [
                        2
                        /*return*/
                      ];
                    case 2:
                      return !e.options.upload.url || !e.upload ? (r && (r.value = ""), e.tip.show("please config: options.upload.url"), [
                        2
                        /*return*/
                      ]) : e.options.upload.file ? [4, e.options.upload.file(o)] : [3, 4];
                    case 3:
                      o = K.sent(), K.label = 4;
                    case 4:
                      if (e.options.upload.validate && (s = e.options.upload.validate(o), typeof s == "string"))
                        return e.tip.show(s), [
                          2
                          /*return*/
                        ];
                      if (m = Eo(e), e.upload.range = (0, R.zh)(e), y = ba(e, o), y.length === 0)
                        return r && (r.value = ""), [
                          2
                          /*return*/
                        ];
                      for (h = new FormData(), _ = e.options.upload.extraData, H = 0, q = Object.keys(_); H < q.length; H++)
                        X = q[H], h.append(X, _[X]);
                      for (V = 0, te = y.length; V < te; V++)
                        h.append(e.options.upload.fieldName, y[V]);
                      return ee = new XMLHttpRequest(), e.upload.xhr = ee, ee.open("POST", e.options.upload.url), e.options.upload.token && ee.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (ee.withCredentials = !0), xo(e, ee), e.upload.isUploading = !0, m.setAttribute("contenteditable", "false"), ee.onreadystatechange = function() {
                        if (ee.readyState === XMLHttpRequest.DONE) {
                          if (e.upload.isUploading = !1, m.setAttribute("contenteditable", "true"), ee.status >= 200 && ee.status < 300)
                            if (e.options.upload.success)
                              e.options.upload.success(m, ee.responseText);
                            else {
                              var de = ee.responseText;
                              e.options.upload.format && (de = e.options.upload.format(t, ee.responseText)), va(de, e);
                            }
                          else
                            e.options.upload.error ? e.options.upload.error(ee.responseText) : e.tip.show(ee.responseText);
                          r && (r.value = ""), e.upload.element.style.display = "none", e.upload.xhr = void 0;
                        }
                      }, ee.upload.onprogress = function(de) {
                        if (de.lengthComputable) {
                          var oe = de.loaded / de.total * 100;
                          e.upload.element.style.display = "block";
                          var me = e.upload.element;
                          me.style.width = oe + "%";
                        }
                      }, ee.send(h), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, lr = function(e, t, r) {
              var o, n = (0, l.F9)(t.startContainer);
              if (n || (n = e.wysiwyg.element), r && r.inputType !== "formatItalic" && r.inputType !== "deleteByDrag" && r.inputType !== "insertFromDrop" && r.inputType !== "formatBold" && r.inputType !== "formatRemove" && r.inputType !== "formatStrikeThrough" && r.inputType !== "insertUnorderedList" && r.inputType !== "insertOrderedList" && r.inputType !== "formatOutdent" && r.inputType !== "formatIndent" && r.inputType !== "" || !r) {
                var a = ra(t.startContainer);
                a && a.remove(), e.wysiwyg.element.querySelectorAll("wbr").forEach(function(oe) {
                  oe.remove();
                }), t.insertNode(document.createElement("wbr")), n.querySelectorAll("[style]").forEach(function(oe) {
                  oe.removeAttribute("style");
                }), n.querySelectorAll(".vditor-comment").forEach(function(oe) {
                  oe.textContent.trim() === "" && (oe.classList.remove("vditor-comment", "vditor-comment--focus"), oe.removeAttribute("data-cmtids"));
                }), (o = n.previousElementSibling) === null || o === void 0 || o.querySelectorAll(".vditor-comment").forEach(function(oe) {
                  oe.textContent.trim() === "" && (oe.classList.remove("vditor-comment", "vditor-comment--focus"), oe.removeAttribute("data-cmtids"));
                });
                var s = "";
                n.getAttribute("data-type") === "link-ref-defs-block" && (n = e.wysiwyg.element);
                var m = n.isEqualNode(e.wysiwyg.element), y = (0, l.a1)(n, "data-type", "footnotes-block");
                if (m)
                  s = n.innerHTML;
                else {
                  var h = (0, l.O9)(t.startContainer);
                  if (h && !y) {
                    var _ = (0, A.S)(t.startContainer, "BLOCKQUOTE");
                    _ ? n = (0, l.F9)(t.startContainer) || n : n = h;
                  }
                  if (y && (n = y), s = n.outerHTML, n.tagName === "UL" || n.tagName === "OL") {
                    var H = n.previousElementSibling, q = n.nextElementSibling;
                    H && (H.tagName === "UL" || H.tagName === "OL") && (s = H.outerHTML + s, H.remove()), q && (q.tagName === "UL" || q.tagName === "OL") && (s = s + q.outerHTML, q.remove()), s = s.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                  }
                  n.innerText.startsWith("```") || (e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(oe) {
                    oe && !n.isEqualNode(oe) && (s += oe.outerHTML, oe.remove());
                  }), e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(oe) {
                    oe && !n.isEqualNode(oe) && (s += oe.outerHTML, oe.remove());
                  }));
                }
                if (s = s.replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "").replace(/<\/(em|i)><em data-marker="\W{1}">/g, "").replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, ""), s === '<p data-block="0">```<wbr></p>' && e.hint.recentLanguage && (s = '<p data-block="0">```<wbr></p>'.replace("```", "```" + e.hint.recentLanguage)), $("SpinVditorDOM", s, "argument", e.options.debugger), s = e.lute.SpinVditorDOM(s), $("SpinVditorDOM", s, "result", e.options.debugger), m)
                  n.innerHTML = s;
                else if (n.outerHTML = s, y) {
                  var X = (0, l.E2)(e.wysiwyg.element.querySelector("wbr"), "LI");
                  if (X) {
                    var V = e.wysiwyg.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(X.getAttribute("data-marker"), '"]'));
                    V && V.setAttribute("aria-label", X.textContent.trim().substr(0, 24));
                  }
                }
                var te, ee = e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']");
                ee.forEach(function(oe, me) {
                  me === 0 ? te = oe : (te.insertAdjacentHTML("beforeend", oe.innerHTML), oe.remove());
                }), ee.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", ee[0]);
                var K, de = e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']");
                de.forEach(function(oe, me) {
                  me === 0 ? K = oe : (K.insertAdjacentHTML("beforeend", oe.innerHTML), oe.remove());
                }), de.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", de[0]), (0, R.ib)(e.wysiwyg.element, t), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(oe) {
                  he(oe, e);
                }), r && (r.inputType === "deleteContentBackward" || r.inputType === "deleteContentForward") && e.options.comment.enable && (e.wysiwyg.triggerRemoveComment(e), e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)));
              }
              Re(e), Le(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, ya = function(e, t) {
              return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
            }, To = function(e, t, r, o) {
              function n(a) {
                return a instanceof r ? a : new r(function(s) {
                  s(a);
                });
              }
              return new (r || (r = Promise))(function(a, s) {
                function m(_) {
                  try {
                    h(o.next(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function y(_) {
                  try {
                    h(o.throw(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function h(_) {
                  _.done ? a(_.value) : n(_.value).then(m, y);
                }
                h((o = o.apply(e, t || [])).next());
              });
            }, Lo = function(e, t) {
              var r = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, o, n, a, s;
              return s = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                return this;
              }), s;
              function m(h) {
                return function(_) {
                  return y([h, _]);
                };
              }
              function y(h) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, h[0] && (r = 0)), r; ) try {
                  if (o = 1, n && (a = h[0] & 2 ? n.return : h[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, h[1])).done) return a;
                  switch (n = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
                    case 0:
                    case 1:
                      a = h;
                      break;
                    case 4:
                      return r.label++, { value: h[1], done: !1 };
                    case 5:
                      r.label++, n = h[1], h = [0];
                      continue;
                    case 7:
                      h = r.ops.pop(), r.trys.pop();
                      continue;
                    default:
                      if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        r = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
                        r.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = h;
                        break;
                      }
                      if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(h);
                        break;
                      }
                      a[2] && r.ops.pop(), r.trys.pop();
                      continue;
                  }
                  h = t.call(e, r);
                } catch (_) {
                  h = [6, _], n = 0;
                } finally {
                  o = a = 0;
                }
                if (h[0] & 5) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }
            }, Bo = function(e, t, r) {
              if (e.keyCode === 229 && e.code === "" && e.key === "Unidentified" && t.currentMode !== "sv") {
                var o = (0, l.F9)(r);
                if (o && o.textContent.trim() === "")
                  return t[t.currentMode].composingLock = !0, !1;
              }
              return !0;
            }, Ao = function(e, t, r) {
              if (!(r.key === "Enter" || r.key === "Tab" || r.key === "Backspace" || r.key.indexOf("Arrow") > -1 || (0, i.yl)(r) || r.key === "Escape" || r.shiftKey || r.altKey)) {
                var o = (0, l.lG)(e.startContainer, "P") || (0, l.lG)(e.startContainer, "LI");
                if (o && (0, R.im)(o, t[t.currentMode].element, e).start === 0) {
                  o.nodeValue && (o.nodeValue = o.nodeValue.replace(/\u2006/g, ""));
                  var n = document.createTextNode(g.g.ZWSP);
                  e.insertNode(n), e.setStartAfter(n);
                }
              }
            }, Mo = function(e, t) {
              if (t === "ArrowDown" || t === "ArrowUp") {
                var r = (0, l.a1)(e.startContainer, "data-type", "math-inline") || (0, l.a1)(e.startContainer, "data-type", "html-entity") || (0, l.a1)(e.startContainer, "data-type", "html-inline");
                r && (t === "ArrowDown" && e.setStartAfter(r.parentElement), t === "ArrowUp" && e.setStartBefore(r.parentElement));
              }
            }, Kt = function(e, t) {
              var r = (0, R.zh)(e), o = (0, l.F9)(r.startContainer);
              o && (o.insertAdjacentHTML(t, '<p data-block="0">'.concat(g.g.ZWSP, `<wbr>
</p>`)), (0, R.ib)(e[e.currentMode].element, r), Mt(e), ke(e));
            }, wa = function(e) {
              var t = (0, l.lG)(e, "TABLE");
              return t && t.rows[0].cells[0].isSameNode(e) ? t : !1;
            }, ka = function(e) {
              var t = (0, l.lG)(e, "TABLE");
              return t && t.lastElementChild.lastElementChild.lastElementChild.isSameNode(e) ? t : !1;
            }, _o = function(e, t, r) {
              r === void 0 && (r = !0);
              var o = e.previousElementSibling;
              return o || (e.parentElement.previousElementSibling ? o = e.parentElement.previousElementSibling.lastElementChild : e.parentElement.parentElement.tagName === "TBODY" && e.parentElement.parentElement.previousElementSibling ? o = e.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild : o = null), o && (t.selectNodeContents(o), r || t.collapse(!1), (0, R.Hc)(t)), o;
            }, qt = function(e, t, r, o, n) {
              var a = (0, R.im)(o, e[e.currentMode].element, r);
              if (t.key === "ArrowDown" && o.textContent.trimRight().substr(a.start).indexOf(`
`) === -1 || t.key === "ArrowRight" && a.start >= o.textContent.trimRight().length) {
                var s = n.nextElementSibling;
                return !s || s && (s.tagName === "TABLE" || s.getAttribute("data-type")) ? (n.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(g.g.ZWSP, "<wbr></p>")), (0, R.ib)(e[e.currentMode].element, r)) : (r.selectNodeContents(s), r.collapse(!0), (0, R.Hc)(r)), t.preventDefault(), !0;
              }
              return !1;
            }, _t = function(e, t, r, o, n) {
              var a = (0, R.im)(o, e[e.currentMode].element, r);
              if (t.key === "ArrowUp" && o.textContent.substr(0, a.start).indexOf(`
`) === -1 || (t.key === "ArrowLeft" || t.key === "Backspace" && r.toString() === "") && a.start === 0) {
                var s = n.previousElementSibling;
                return !s || s && (s.tagName === "TABLE" || s.getAttribute("data-type")) ? (n.insertAdjacentHTML("beforebegin", '<p data-block="0">'.concat(g.g.ZWSP, "<wbr></p>")), (0, R.ib)(e[e.currentMode].element, r)) : (r.selectNodeContents(s), r.collapse(!1), (0, R.Hc)(r)), t.preventDefault(), !0;
              }
              return !1;
            }, sr = function(e, t, r, o) {
              o === void 0 && (o = !0);
              var n = (0, l.lG)(t.startContainer, "LI");
              if (e[e.currentMode].element.querySelectorAll("wbr").forEach(function(_) {
                _.remove();
              }), t.insertNode(document.createElement("wbr")), o && n) {
                for (var a = "", s = 0; s < n.parentElement.childElementCount; s++) {
                  var m = n.parentElement.children[s].querySelector("input");
                  m && m.remove(), a += '<p data-block="0">'.concat(n.parentElement.children[s].innerHTML.trimLeft(), "</p>");
                }
                n.parentElement.insertAdjacentHTML("beforebegin", a), n.parentElement.remove();
              } else if (n)
                if (r === "check")
                  n.parentElement.querySelectorAll("li").forEach(function(_) {
                    _.insertAdjacentHTML("afterbegin", '<input type="checkbox" />'.concat(_.textContent.indexOf(" ") === 0 ? "" : " ")), _.classList.add("vditor-task");
                  });
                else {
                  n.querySelector("input") && n.parentElement.querySelectorAll("li").forEach(function(_) {
                    _.querySelector("input").remove(), _.classList.remove("vditor-task");
                  });
                  var h = void 0;
                  r === "list" ? (h = document.createElement("ul"), h.setAttribute("data-marker", "*")) : (h = document.createElement("ol"), h.setAttribute("data-marker", "1.")), h.setAttribute("data-block", "0"), h.setAttribute("data-tight", n.parentElement.getAttribute("data-tight")), h.innerHTML = n.parentElement.innerHTML, n.parentElement.parentNode.replaceChild(h, n.parentElement);
                }
              else {
                var y = (0, l.a1)(t.startContainer, "data-block", "0");
                y || (e[e.currentMode].element.querySelector("wbr").remove(), y = e[e.currentMode].element.querySelector("p"), y.innerHTML = "<wbr>"), r === "check" ? (y.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> '.concat(y.innerHTML, "</li></ul>")), y.remove()) : r === "list" ? (y.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li>'.concat(y.innerHTML, "</li></ul>")), y.remove()) : r === "ordered-list" && (y.insertAdjacentHTML("beforebegin", '<ol data-block="0"><li>'.concat(y.innerHTML, "</li></ol>")), y.remove());
              }
            }, Do = function(e, t, r) {
              var o = t.previousElementSibling;
              if (t && o) {
                var n = [t];
                Array.from(r.cloneContents().children).forEach(function(y, h) {
                  y.nodeType !== 3 && t && y.textContent.trim() !== "" && t.getAttribute("data-node-id") === y.getAttribute("data-node-id") && (h !== 0 && n.push(t), t = t.nextElementSibling);
                }), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(y) {
                  y.remove();
                }), r.insertNode(document.createElement("wbr"));
                var a = o.parentElement, s = "";
                n.forEach(function(y) {
                  var h = y.getAttribute("data-marker");
                  h.length !== 1 && (h = "1".concat(h.slice(-1))), s += '<li data-node-id="'.concat(y.getAttribute("data-node-id"), '" data-marker="').concat(h, '">').concat(y.innerHTML, "</li>"), y.remove();
                }), o.insertAdjacentHTML("beforeend", "<".concat(a.tagName, ' data-block="0">').concat(s, "</").concat(a.tagName, ">")), e.currentMode === "wysiwyg" ? a.outerHTML = e.lute.SpinVditorDOM(a.outerHTML) : a.outerHTML = e.lute.SpinVditorIRDOM(a.outerHTML), (0, R.ib)(e[e.currentMode].element, r);
                var m = (0, l.O9)(r.startContainer);
                m && m.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(y) {
                  he(y, e), e.currentMode === "wysiwyg" && y.previousElementSibling.setAttribute("style", "display:none");
                }), ke(e), Mt(e);
              } else
                e[e.currentMode].element.focus();
            }, Fr = function(e, t, r, o) {
              var n = (0, l.lG)(t.parentElement, "LI");
              if (n) {
                e[e.currentMode].element.querySelectorAll("wbr").forEach(function(H) {
                  H.remove();
                }), r.insertNode(document.createElement("wbr"));
                var a = t.parentElement, s = a.cloneNode(), m = [t];
                Array.from(r.cloneContents().children).forEach(function(H, q) {
                  H.nodeType !== 3 && t && H.textContent.trim() !== "" && t.getAttribute("data-node-id") === H.getAttribute("data-node-id") && (q !== 0 && m.push(t), t = t.nextElementSibling);
                });
                var y = !1, h = "";
                a.querySelectorAll("li").forEach(function(H) {
                  y && (h += H.outerHTML, !H.nextElementSibling && !H.previousElementSibling ? H.parentElement.remove() : H.remove()), H.isSameNode(m[m.length - 1]) && (y = !0);
                }), m.reverse().forEach(function(H) {
                  n.insertAdjacentElement("afterend", H);
                }), h && (s.innerHTML = h, m[0].insertAdjacentElement("beforeend", s)), e.currentMode === "wysiwyg" ? o.outerHTML = e.lute.SpinVditorDOM(o.outerHTML) : o.outerHTML = e.lute.SpinVditorIRDOM(o.outerHTML), (0, R.ib)(e[e.currentMode].element, r);
                var _ = (0, l.O9)(r.startContainer);
                _ && _.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(H) {
                  he(H, e), e.currentMode === "wysiwyg" && H.previousElementSibling.setAttribute("style", "display:none");
                }), ke(e), Mt(e);
              } else
                e[e.currentMode].element.focus();
            }, cr = function(e, t) {
              for (var r = getSelection().getRangeAt(0).startContainer.parentElement, o = e.rows[0].cells.length, n = e.rows.length, a = 0, s = 0; s < n; s++)
                for (var m = 0; m < o; m++)
                  if (e.rows[s].cells[m].isSameNode(r)) {
                    a = m;
                    break;
                  }
              for (var y = 0; y < n; y++)
                e.rows[y].cells[a].setAttribute("align", t);
            }, zr = function(e) {
              var t = e.trimRight().split(`
`).pop();
              return t === "" ? !1 : (t.replace(/ |-/g, "") === "" || t.replace(/ |_/g, "") === "" || t.replace(/ |\*/g, "") === "") && t.replace(/ /g, "").length > 2 ? !(t.indexOf("-") > -1 && t.trimLeft().indexOf(" ") === -1 && e.trimRight().split(`
`).length > 1 || t.indexOf("    ") === 0 || t.indexOf("	") === 0) : !1;
            }, Wr = function(e) {
              var t = e.trimRight().split(`
`);
              return e = t.pop(), e.indexOf("    ") === 0 || e.indexOf("	") === 0 || (e = e.trimLeft(), e === "" || t.length === 0) ? !1 : e.replace(/-/g, "") === "" || e.replace(/=/g, "") === "";
            }, ke = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), e.currentMode === "wysiwyg" ? Le(e, t) : e.currentMode === "ir" ? lt(e, t) : e.currentMode === "sv" && $e(e, t);
            }, Ro = function(e, t, r, o) {
              var n, a = e.startContainer, s = (0, l.lG)(a, "LI");
              if (s) {
                if (!(0, i.yl)(o) && !o.altKey && o.key === "Enter" && // fix li 中有多个 P 时，在第一个 P 中换行会在下方生成新的 li
                !o.shiftKey && r && s.contains(r) && r.nextElementSibling)
                  return s && !s.textContent.endsWith(`
`) && s.insertAdjacentText("beforeend", `
`), e.insertNode(document.createTextNode(`

`)), e.collapse(!1), ke(t), o.preventDefault(), !0;
                if (!(0, i.yl)(o) && !o.shiftKey && !o.altKey && o.key === "Backspace" && !s.previousElementSibling && e.toString() === "" && (0, R.im)(s, t[t.currentMode].element, e).start === 0)
                  return s.nextElementSibling ? (s.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(s.innerHTML, "</p>")), s.remove()) : s.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(s.innerHTML, "</p>"), (0, R.ib)(t[t.currentMode].element, e), ke(t), o.preventDefault(), !0;
                if (!(0, i.yl)(o) && !o.shiftKey && !o.altKey && o.key === "Backspace" && s.textContent.trim().replace(g.g.ZWSP, "") === "" && e.toString() === "" && ((n = s.previousElementSibling) === null || n === void 0 ? void 0 : n.tagName) === "LI")
                  return s.previousElementSibling.insertAdjacentText("beforeend", `

`), e.selectNodeContents(s.previousElementSibling), e.collapse(!1), s.remove(), (0, R.ib)(t[t.currentMode].element, e), ke(t), o.preventDefault(), !0;
                if (!(0, i.yl)(o) && !o.altKey && o.key === "Tab") {
                  var m = !1;
                  if ((e.startOffset === 0 && (a.nodeType === 3 && !a.previousSibling || a.nodeType !== 3 && a.nodeName === "LI") || s.classList.contains("vditor-task") && e.startOffset === 1 && a.previousSibling.nodeType !== 3 && a.previousSibling.tagName === "INPUT") && (m = !0), m || e.toString() !== "")
                    return o.shiftKey ? Fr(t, s, e, s.parentElement) : Do(t, s, e), o.preventDefault(), !0;
                }
              }
              return !1;
            }, Vr = function(e, t, r) {
              if (e.options.tab && r.key === "Tab")
                return r.shiftKey || (t.toString() === "" ? (t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1)) : (t.extractContents(), t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1))), (0, R.Hc)(t), ke(e), r.preventDefault(), !0;
            }, Oo = function(e, t, r, o) {
              if (r) {
                if (!(0, i.yl)(e) && !e.altKey && e.key === "Enter") {
                  var n = String.raw(Ko || (Ko = ya(["", ""], ["", ""])), r.textContent).replace(/\\\|/g, "").trim(), a = n.split("|");
                  if (n.startsWith("|") && n.endsWith("|") && a.length > 3) {
                    var s = a.map(function() {
                      return "---";
                    }).join("|");
                    return s = r.textContent + `
` + s.substring(3, s.length - 3) + `
|<wbr>`, r.outerHTML = t.lute.SpinVditorDOM(s), (0, R.ib)(t[t.currentMode].element, o), ke(t), Oe(t), e.preventDefault(), !0;
                  }
                  if (zr(r.innerHTML) && r.previousElementSibling) {
                    var m = "", y = r.innerHTML.trimRight().split(`
`);
                    return y.length > 1 && (y.pop(), m = '<p data-block="0">'.concat(y.join(`
`), "</p>")), r.insertAdjacentHTML("afterend", "".concat(m, `<hr data-block="0"><p data-block="0"><wbr>
</p>`)), r.remove(), (0, R.ib)(t[t.currentMode].element, o), ke(t), Oe(t), e.preventDefault(), !0;
                  }
                  if (Wr(r.innerHTML))
                    return t.currentMode === "wysiwyg" ? r.outerHTML = t.lute.SpinVditorDOM(r.innerHTML + `<p data-block="0"><wbr>
</p>`) : r.outerHTML = t.lute.SpinVditorIRDOM(r.innerHTML + `<p data-block="0"><wbr>
</p>`), (0, R.ib)(t[t.currentMode].element, o), ke(t), Oe(t), e.preventDefault(), !0;
                }
                if (o.collapsed && r.previousElementSibling && e.key === "Backspace" && !(0, i.yl)(e) && !e.altKey && !e.shiftKey && r.textContent.trimRight().split(`
`).length > 1 && (0, R.im)(r, t[t.currentMode].element, o).start === 0) {
                  var h = (0, l.DX)(r.previousElementSibling);
                  return h.textContent.endsWith(`
`) || (h.textContent = h.textContent + `
`), h.parentElement.insertAdjacentHTML("beforeend", "<wbr>".concat(r.innerHTML)), r.remove(), (0, R.ib)(t[t.currentMode].element, o), !1;
                }
                return !1;
              }
            }, Ho = function(e, t, r) {
              for (var o = "", n = 0; n < r.parentElement.childElementCount; n++)
                o += '<td align="'.concat(r.parentElement.children[n].getAttribute("align"), '"> </td>');
              r.tagName === "TH" ? r.parentElement.parentElement.insertAdjacentHTML("afterend", "<tbody><tr>".concat(o, "</tr></tbody>")) : r.parentElement.insertAdjacentHTML("afterend", "<tr>".concat(o, "</tr>")), ke(e);
            }, No = function(e, t, r) {
              for (var o = "", n = 0; n < r.parentElement.childElementCount; n++)
                r.tagName === "TH" ? o += '<th align="'.concat(r.parentElement.children[n].getAttribute("align"), '"> </th>') : o += '<td align="'.concat(r.parentElement.children[n].getAttribute("align"), '"> </td>');
              if (r.tagName === "TH") {
                r.parentElement.parentElement.insertAdjacentHTML("beforebegin", "<thead><tr>".concat(o, "</tr></thead>")), t.insertNode(document.createElement("wbr"));
                var a = r.parentElement.innerHTML.replace(/<th>/g, "<td>").replace(/<\/th>/g, "</td>");
                r.parentElement.parentElement.nextElementSibling.insertAdjacentHTML("afterbegin", a), r.parentElement.parentElement.remove(), (0, R.ib)(e.ir.element, t);
              } else
                r.parentElement.insertAdjacentHTML("beforebegin", "<tr>".concat(o, "</tr>"));
              ke(e);
            }, dr = function(e, t, r, o) {
              o === void 0 && (o = "afterend");
              for (var n = 0, a = r.previousElementSibling; a; )
                n++, a = a.previousElementSibling;
              for (var s = 0; s < t.rows.length; s++)
                s === 0 ? t.rows[s].cells[n].insertAdjacentHTML(o, "<th> </th>") : t.rows[s].cells[n].insertAdjacentHTML(o, "<td> </td>");
              ke(e);
            }, $o = function(e, t, r) {
              if (r.tagName === "TD") {
                var o = r.parentElement.parentElement;
                r.parentElement.previousElementSibling ? t.selectNodeContents(r.parentElement.previousElementSibling.lastElementChild) : t.selectNodeContents(o.previousElementSibling.lastElementChild.lastElementChild), o.childElementCount === 1 ? o.remove() : r.parentElement.remove(), t.collapse(!1), (0, R.Hc)(t), ke(e);
              }
            }, Po = function(e, t, r, o) {
              for (var n = 0, a = o.previousElementSibling; a; )
                n++, a = a.previousElementSibling;
              (o.previousElementSibling || o.nextElementSibling) && (t.selectNodeContents(o.previousElementSibling || o.nextElementSibling), t.collapse(!0));
              for (var s = 0; s < r.rows.length; s++) {
                var m = r.rows[s].cells;
                if (m.length === 1) {
                  r.remove(), Mt(e);
                  break;
                }
                m[n].remove();
              }
              (0, R.Hc)(t), ke(e);
            }, Io = function(e, t, r) {
              var o = r.startContainer, n = (0, l.lG)(o, "TD") || (0, l.lG)(o, "TH");
              if (n) {
                if (!(0, i.yl)(t) && !t.altKey && t.key === "Enter") {
                  (!n.lastElementChild || n.lastElementChild && (!n.lastElementChild.isSameNode(n.lastChild) || n.lastElementChild.tagName !== "BR")) && n.insertAdjacentHTML("beforeend", "<br>");
                  var a = document.createElement("br");
                  return r.insertNode(a), r.setStartAfter(a), ke(e), Oe(e), t.preventDefault(), !0;
                }
                if (t.key === "Tab") {
                  if (t.shiftKey)
                    return _o(n, r), t.preventDefault(), !0;
                  var s = n.nextElementSibling;
                  return s || (n.parentElement.nextElementSibling ? s = n.parentElement.nextElementSibling.firstElementChild : n.parentElement.parentElement.tagName === "THEAD" && n.parentElement.parentElement.nextElementSibling ? s = n.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild : s = null), s && (r.selectNodeContents(s), (0, R.Hc)(r)), t.preventDefault(), !0;
                }
                var m = n.parentElement.parentElement.parentElement;
                if (t.key === "ArrowUp") {
                  if (t.preventDefault(), n.tagName === "TH")
                    return m.previousElementSibling ? (r.selectNodeContents(m.previousElementSibling), r.collapse(!1), (0, R.Hc)(r)) : Kt(e, "beforebegin"), !0;
                  for (var y = 0, h = n.parentElement; y < h.cells.length && !h.cells[y].isSameNode(n); y++)
                    ;
                  var _ = h.previousElementSibling;
                  return _ || (_ = h.parentElement.previousElementSibling.firstChild), r.selectNodeContents(_.cells[y]), r.collapse(!1), (0, R.Hc)(r), !0;
                }
                if (t.key === "ArrowDown") {
                  t.preventDefault();
                  var h = n.parentElement;
                  if (!h.nextElementSibling && n.tagName === "TD")
                    return m.nextElementSibling ? (r.selectNodeContents(m.nextElementSibling), r.collapse(!0), (0, R.Hc)(r)) : Kt(e, "afterend"), !0;
                  for (var y = 0; y < h.cells.length && !h.cells[y].isSameNode(n); y++)
                    ;
                  var s = h.nextElementSibling;
                  return s || (s = h.parentElement.nextElementSibling.firstChild), r.selectNodeContents(s.cells[y]), r.collapse(!0), (0, R.Hc)(r), !0;
                }
                if (e.currentMode === "wysiwyg" && !(0, i.yl)(t) && t.key === "Enter" && !t.shiftKey && t.altKey) {
                  var H = e.wysiwyg.popover.querySelector(".vditor-input");
                  return H.focus(), H.select(), t.preventDefault(), !0;
                }
                if (!(0, i.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Backspace" && r.startOffset === 0 && r.toString() === "") {
                  var q = _o(n, r, !1);
                  return !q && m && (m.textContent.trim() === "" ? (m.outerHTML = `<p data-block="0"><wbr>
</p>`, (0, R.ib)(e[e.currentMode].element, r)) : (r.setStartBefore(m), r.collapse(!0)), ke(e)), t.preventDefault(), !0;
                }
                if (U("⇧⌘F", t))
                  return No(e, r, n), t.preventDefault(), !0;
                if (U("⌘=", t))
                  return Ho(e, r, n), t.preventDefault(), !0;
                if (U("⇧⌘G", t))
                  return dr(e, m, n, "beforebegin"), t.preventDefault(), !0;
                if (U("⇧⌘=", t))
                  return dr(e, m, n), t.preventDefault(), !0;
                if (U("⌘-", t))
                  return $o(e, r, n), t.preventDefault(), !0;
                if (U("⇧⌘-", t))
                  return Po(e, r, m, n), t.preventDefault(), !0;
                if (U("⇧⌘L", t)) {
                  if (e.currentMode === "ir")
                    return cr(m, "left"), ke(e), t.preventDefault(), !0;
                  var X = e.wysiwyg.popover.querySelector('[data-type="left"]');
                  if (X)
                    return X.click(), t.preventDefault(), !0;
                }
                if (U("⇧⌘C", t)) {
                  if (e.currentMode === "ir")
                    return cr(m, "center"), ke(e), t.preventDefault(), !0;
                  var X = e.wysiwyg.popover.querySelector('[data-type="center"]');
                  if (X)
                    return X.click(), t.preventDefault(), !0;
                }
                if (U("⇧⌘R", t)) {
                  if (e.currentMode === "ir")
                    return cr(m, "right"), ke(e), t.preventDefault(), !0;
                  var X = e.wysiwyg.popover.querySelector('[data-type="right"]');
                  if (X)
                    return X.click(), t.preventDefault(), !0;
                }
              }
              return !1;
            }, jo = function(e, t, r, o) {
              if (r.tagName === "PRE" && U("⌘A", t))
                return o.selectNodeContents(r.firstElementChild), t.preventDefault(), !0;
              if (e.options.tab && t.key === "Tab" && !t.shiftKey && o.toString() === "")
                return o.insertNode(document.createTextNode(e.options.tab)), o.collapse(!1), ke(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, i.yl)(t) && !t.shiftKey && !t.altKey) {
                var n = (0, R.im)(r, e[e.currentMode].element, o);
                if ((n.start === 0 || n.start === 1 && r.innerText === `
`) && o.toString() === "")
                  return r.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(r.firstElementChild.innerHTML, "</p>"), (0, R.ib)(e[e.currentMode].element, o), ke(e), t.preventDefault(), !0;
              }
              return !(0, i.yl)(t) && !t.altKey && t.key === "Enter" ? (r.firstElementChild.textContent.endsWith(`
`) || r.firstElementChild.insertAdjacentText("beforeend", `
`), o.extractContents(), o.insertNode(document.createTextNode(`
`)), o.collapse(!1), (0, R.Hc)(o), (0, i.vU)() || (e.currentMode === "wysiwyg" ? lr(e, o) : ze(e, o)), Oe(e), t.preventDefault(), !0) : !1;
            }, Fo = function(e, t, r, o) {
              var n = t.startContainer, a = (0, l.lG)(n, "BLOCKQUOTE");
              if (a && t.toString() === "") {
                if (r.key === "Backspace" && !(0, i.yl)(r) && !r.shiftKey && !r.altKey && (0, R.im)(a, e[e.currentMode].element, t).start === 0)
                  return t.insertNode(document.createElement("wbr")), a.outerHTML = a.innerHTML, (0, R.ib)(e[e.currentMode].element, t), ke(e), r.preventDefault(), !0;
                if (o && r.key === "Enter" && !(0, i.yl)(r) && !r.shiftKey && !r.altKey && o.parentElement.tagName === "BLOCKQUOTE") {
                  var s = !1;
                  if (o.innerHTML.replace(g.g.ZWSP, "") === `
` || o.innerHTML.replace(g.g.ZWSP, "") === "" ? (s = !0, o.remove()) : o.innerHTML.endsWith(`

`) && (0, R.im)(o, e[e.currentMode].element, t).start === o.textContent.length - 1 && (o.innerHTML = o.innerHTML.substr(0, o.innerHTML.length - 2), s = !0), s)
                    return a.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(g.g.ZWSP, `<wbr>
</p>`)), (0, R.ib)(e[e.currentMode].element, t), ke(e), r.preventDefault(), !0;
                }
                var m = (0, l.F9)(n);
                if (e.currentMode === "wysiwyg" && m && U("⇧⌘;", r))
                  return t.insertNode(document.createElement("wbr")), m.outerHTML = '<blockquote data-block="0">'.concat(m.outerHTML, "</blockquote>"), (0, R.ib)(e.wysiwyg.element, t), Le(e), r.preventDefault(), !0;
                if (qt(e, r, t, a, a) || _t(e, r, t, a, a))
                  return !0;
              }
              return !1;
            }, zo = function(e, t, r) {
              var o = t.startContainer, n = (0, l.lG)(o, "LI");
              if (n && n.classList.contains("vditor-task")) {
                if (U("⇧⌘J", r)) {
                  var a = n.firstElementChild;
                  return a.checked ? a.removeAttribute("checked") : a.setAttribute("checked", "checked"), ke(e), r.preventDefault(), !0;
                }
                if (r.key === "Backspace" && !(0, i.yl)(r) && !r.shiftKey && !r.altKey && t.toString() === "" && t.startOffset === 1 && (o.nodeType === 3 && o.previousSibling && o.previousSibling.tagName === "INPUT" || o.nodeType !== 3)) {
                  var s = n.previousElementSibling;
                  if (n.querySelector("input").remove(), s) {
                    var m = (0, l.DX)(s);
                    m.parentElement.insertAdjacentHTML("beforeend", "<wbr>" + n.innerHTML.trim()), n.remove();
                  } else
                    n.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(n.innerHTML.trim() || `
`, "</p>")), n.nextElementSibling ? n.remove() : n.parentElement.remove();
                  return (0, R.ib)(e[e.currentMode].element, t), ke(e), r.preventDefault(), !0;
                }
                if (r.key === "Enter" && !(0, i.yl)(r) && !r.shiftKey && !r.altKey) {
                  if (n.textContent.trim() === "")
                    if ((0, l.fb)(n.parentElement, "vditor-task")) {
                      var y = (0, l.O9)(o);
                      y && Fr(e, n, t, y);
                    } else if (n.nextElementSibling) {
                      var h = "", _ = "", H = !1;
                      Array.from(n.parentElement.children).forEach(function(te) {
                        n.isSameNode(te) ? H = !0 : H ? h += te.outerHTML : _ += te.outerHTML;
                      });
                      var q = n.parentElement.tagName, X = n.parentElement.tagName === "OL" ? "" : ' data-marker="'.concat(n.parentElement.getAttribute("data-marker"), '"'), V = "";
                      _ && (V = n.parentElement.tagName === "UL" ? "" : ' start="1"', _ = "<".concat(q, ' data-tight="true"').concat(X, ' data-block="0">').concat(_, "</").concat(q, ">")), n.parentElement.outerHTML = "".concat(_, `<p data-block="0"><wbr>
</p><`).concat(q, `
 data-tight="true"`).concat(X, ' data-block="0"').concat(V, ">").concat(h, "</").concat(q, ">");
                    } else
                      n.parentElement.insertAdjacentHTML("afterend", `<p data-block="0"><wbr>
</p>`), n.parentElement.querySelectorAll("li").length === 1 ? n.parentElement.remove() : n.remove();
                  else o.nodeType !== 3 && t.startOffset === 0 && o.firstChild.tagName === "INPUT" ? t.setStart(o.childNodes[1], 1) : (t.setEndAfter(n.lastChild), n.insertAdjacentHTML("afterend", '<li class="vditor-task" data-marker="'.concat(n.getAttribute("data-marker"), '"><input type="checkbox"> <wbr></li>')), document.querySelector("wbr").after(t.extractContents()));
                  return (0, R.ib)(e[e.currentMode].element, t), ke(e), Oe(e), r.preventDefault(), !0;
                }
              }
              return !1;
            }, Wo = function(e, t, r, o) {
              if (t.startContainer.nodeType !== 3) {
                var n = t.startContainer.children[t.startOffset];
                if (n && n.tagName === "HR")
                  return t.selectNodeContents(n.previousElementSibling), t.collapse(!1), r.preventDefault(), !0;
              }
              if (o) {
                var a = o.previousElementSibling;
                if (a && (0, R.im)(o, e[e.currentMode].element, t).start === 0 && ((0, i.vU)() && a.tagName === "HR" || a.tagName === "TABLE")) {
                  if (a.tagName === "TABLE") {
                    var s = a.lastElementChild.lastElementChild.lastElementChild;
                    s.innerHTML = s.innerHTML.trimLeft() + "<wbr>" + o.textContent.trim(), o.remove();
                  } else
                    a.remove();
                  return (0, R.ib)(e[e.currentMode].element, t), ke(e), r.preventDefault(), !0;
                }
              }
              return !1;
            }, Vo = function(e) {
              (0, i.vU)() && e.startContainer.nodeType !== 3 && e.startContainer.tagName === "HR" && e.setStartBefore(e.startContainer);
            }, Uo = function(e, t, r) {
              var o, n;
              if (!(0, i.vU)())
                return !1;
              if (e.key === "ArrowUp" && t && ((o = t.previousElementSibling) === null || o === void 0 ? void 0 : o.tagName) === "TABLE") {
                var a = t.previousElementSibling;
                return r.selectNodeContents(a.rows[a.rows.length - 1].lastElementChild), r.collapse(!1), e.preventDefault(), !0;
              }
              return e.key === "ArrowDown" && t && ((n = t.nextElementSibling) === null || n === void 0 ? void 0 : n.tagName) === "TABLE" ? (r.selectNodeContents(t.nextElementSibling.rows[0].cells[0]), r.collapse(!0), e.preventDefault(), !0) : !1;
            }, ur = function(e, t, r) {
              return To(void 0, void 0, void 0, function() {
                var o, n, a, s, m, y, h, _, H, q, X, V, te, K, ee, K, de;
                return Lo(this, function(oe) {
                  switch (oe.label) {
                    case 0:
                      return e[e.currentMode].element.getAttribute("contenteditable") !== "true" ? [
                        2
                        /*return*/
                      ] : (t.stopPropagation(), t.preventDefault(), "clipboardData" in t ? (o = t.clipboardData.getData("text/html"), n = t.clipboardData.getData("text/plain"), a = t.clipboardData.files) : (o = t.dataTransfer.getData("text/html"), n = t.dataTransfer.getData("text/plain"), t.dataTransfer.types.includes("Files") && (a = t.dataTransfer.items)), s = {}, m = function(me, Te) {
                        if (!Te)
                          return ["", Lute.WalkContinue];
                        if (e.options.upload.renderLinkDest)
                          return e.options.upload.renderLinkDest(e, me, Te);
                        var xe = me.TokensStr();
                        if (me.__internal_object__.Parent.Type === 34 && xe && xe.indexOf("file://") === -1 && e.options.upload.linkToImgUrl) {
                          var Be = new XMLHttpRequest();
                          Be.open("POST", e.options.upload.linkToImgUrl), e.options.upload.token && Be.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (Be.withCredentials = !0), xo(e, Be), Be.setRequestHeader("Content-Type", "application/json; charset=utf-8"), Be.onreadystatechange = function() {
                            if (Be.readyState === XMLHttpRequest.DONE) {
                              if (Be.status === 200) {
                                var Ue = Be.responseText;
                                e.options.upload.linkToImgFormat && (Ue = e.options.upload.linkToImgFormat(Be.responseText));
                                var je = JSON.parse(Ue);
                                if (je.code !== 0) {
                                  e.tip.show(je.msg);
                                  return;
                                }
                                var Ke = je.data.originalURL;
                                if (e.currentMode === "sv")
                                  e.sv.element.querySelectorAll(".vditor-sv__marker--link").forEach(function(He) {
                                    He.textContent === Ke && (He.textContent = je.data.url);
                                  });
                                else {
                                  var ye = e[e.currentMode].element.querySelector('img[src="'.concat(Ke, '"]'));
                                  ye.src = je.data.url, e.currentMode === "ir" && (ye.previousElementSibling.previousElementSibling.innerHTML = je.data.url);
                                }
                                ke(e);
                              } else
                                e.tip.show(Be.responseText);
                              e.options.upload.linkToImgCallback && e.options.upload.linkToImgCallback(Be.responseText);
                            }
                          }, Be.send(JSON.stringify({ url: xe }));
                        }
                        return e.currentMode === "ir" ? ['<span class="vditor-ir__marker vditor-ir__marker--link">'.concat(Lute.EscapeHTMLStr(xe), "</span>"), Lute.WalkContinue] : e.currentMode === "wysiwyg" ? ["", Lute.WalkContinue] : ['<span class="vditor-sv__marker--link">'.concat(Lute.EscapeHTMLStr(xe), "</span>"), Lute.WalkContinue];
                      }, (o.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<a href="'.concat(n, '">').concat(n, "</a>") || o.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<!--StartFragment--><a href="'.concat(n, '">').concat(n, "</a><!--EndFragment-->")) && (o = ""), y = new DOMParser().parseFromString(o, "text/html"), y.body && (o = y.body.innerHTML), o = Lute.Sanitize(o), e.wysiwyg.getComments(e), h = e[e.currentMode].element.scrollHeight, _ = ve(o, n, e.currentMode), H = e.currentMode === "sv" ? (0, l.a1)(t.target, "data-type", "code-block") : (0, l.lG)(t.target, "CODE"), H ? (e.currentMode === "sv" ? document.execCommand("insertHTML", !1, n.replace(/&/g, "&amp;").replace(/</g, "&lt;")) : (q = (0, R.im)(t.target, e[e.currentMode].element), H.parentElement.tagName !== "PRE" && (n += g.g.ZWSP), H.textContent = H.textContent.substring(0, q.start) + n + H.textContent.substring(q.end), (0, R.$j)(q.start + n.length, q.start + n.length, H.parentElement), !((de = H.parentElement) === null || de === void 0) && de.nextElementSibling.classList.contains("vditor-".concat(e.currentMode, "__preview")) && (H.parentElement.nextElementSibling.innerHTML = H.outerHTML, he(H.parentElement.nextElementSibling, e))), [3, 10]) : [3, 1]);
                    case 1:
                      return _ ? (r.pasteCode(_), [3, 10]) : [3, 2];
                    case 2:
                      return o.trim() === "" ? [3, 5] : (X = document.createElement("div"), X.innerHTML = o, e.options.upload.base64ToLink ? [3, 4] : [4, Ca(e, X, ("clipboardData" in t ? t.clipboardData : t.dataTransfer).getData("text/rtf"))]);
                    case 3:
                      oe.sent(), oe.label = 4;
                    case 4:
                      return X.querySelectorAll("[style]").forEach(function(me) {
                        me.removeAttribute("style");
                      }), X.querySelectorAll(".vditor-copy").forEach(function(me) {
                        me.remove();
                      }), e.currentMode === "ir" ? (s.HTML2VditorIRDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), (0, R.oC)(e.lute.HTML2VditorIRDOM(X.innerHTML), e)) : e.currentMode === "wysiwyg" ? (s.HTML2VditorDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), (0, R.oC)(e.lute.HTML2VditorDOM(X.innerHTML), e)) : (s.Md2VditorSVDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), Ir(e, e.lute.HTML2Md(X.innerHTML).trimRight())), e.outline.render(e), [3, 10];
                    case 5:
                      return a.length > 0 ? e.options.upload.url || e.options.upload.handler ? [4, jr(e, a)] : [3, 7] : [3, 9];
                    case 6:
                      return oe.sent(), [3, 8];
                    case 7:
                      V = new FileReader(), "clipboardData" in t ? (a = t.clipboardData.files, te = a[0]) : t.dataTransfer.types.includes("Files") && (a = t.dataTransfer.items, te = a[0].getAsFile()), te && te.type.startsWith("image") && (V.readAsDataURL(te), V.onload = function() {
                        var me = "";
                        e.currentMode === "wysiwyg" ? me += '<img alt="'.concat(te.name, '" src="').concat(V.result.toString(), `">
`) : me += "![".concat(te.name, "](").concat(V.result.toString(), `)
`), document.execCommand("insertHTML", !1, me);
                      }), oe.label = 8;
                    case 8:
                      return [3, 10];
                    case 9:
                      n.trim() !== "" && a.length === 0 && (K = (0, R.zh)(e), K.toString() !== "" && e.lute.IsValidLinkDest(n) && (n = "[".concat(K.toString(), "](").concat(n, ")")), e.currentMode === "ir" ? (s.Md2VditorIRDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), (0, R.oC)(Lute.Sanitize(e.lute.Md2VditorIRDOM(n)), e)) : e.currentMode === "wysiwyg" ? (s.Md2VditorDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), (0, R.oC)(Lute.Sanitize(e.lute.Md2VditorDOM(n)), e)) : (s.Md2VditorSVDOM = { renderLinkDest: m }, e.lute.SetJSRenderers({ renderers: s }), Ir(e, n)), e.outline.render(e)), oe.label = 10;
                    case 10:
                      return e.currentMode !== "sv" && (ee = (0, l.F9)((0, R.zh)(e).startContainer), ee && (K = (0, R.zh)(e), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(me) {
                        me.remove();
                      }), K.insertNode(document.createElement("wbr")), e.currentMode === "wysiwyg" ? ee.outerHTML = e.lute.SpinVditorDOM(ee.outerHTML) : ee.outerHTML = e.lute.SpinVditorIRDOM(ee.outerHTML), (0, R.ib)(e[e.currentMode].element, K)), e[e.currentMode].element.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(me) {
                        he(me, e);
                      })), e.wysiwyg.triggerRemoveComment(e), ke(e), e[e.currentMode].element.scrollHeight - h > Math.min(e[e.currentMode].element.clientHeight, window.innerHeight) / 2 && Oe(e), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, Ca = function(e, t, r) {
              return To(void 0, void 0, void 0, function() {
                var o, n, a, s, m, y, h, _, H, te, q, X, V, te, ee, K;
                return Lo(this, function(de) {
                  switch (de.label) {
                    case 0:
                      if (!r)
                        return [
                          2
                          /*return*/
                        ];
                      if (o = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/, n = new RegExp("(?:(" + o.source + "))([\\da-fA-F\\s]+)\\}", "g"), a = r.match(n), s = [], a)
                        for (m = 0, y = a; m < y.length; m++)
                          h = y[m], _ = void 0, h.includes("\\pngblip") ? _ = "image/png" : h.includes("\\jpegblip") && (_ = "image/jpeg"), _ && s.push({
                            hex: h.replace(o, "").replace(/[^\da-fA-F]/g, ""),
                            type: _
                          });
                      for (H = [], Ur(t, function(oe) {
                        if (oe.tagName === "V:SHAPE")
                          return Ur(oe, function(me) {
                            me.tagName === "V:IMAGEDATA" && H.push({ shape: oe, img: me });
                          }), !1;
                      }), te = 0; te < H.length; te++)
                        q = document.createElement("img"), X = "data:" + s[te].type + ";base64," + btoa((s[te].hex.match(/\w{2}/g) || []).map(function(oe) {
                          return String.fromCharCode(parseInt(oe, 16));
                        }).join("")), q.src = X, q.title = H[te].img.getAttribute("title"), H[te].shape.parentNode.replaceChild(q, H[te].shape);
                      V = t.querySelectorAll("img"), te = 0, de.label = 1;
                    case 1:
                      return te < V.length ? (ee = V[te].src || "", ee ? (K = V[te], [4, e.options.upload.base64ToLink(ee)]) : [3, 3]) : [3, 4];
                    case 2:
                      K.src = de.sent(), de.label = 3;
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
            }, Ur = function(e, t) {
              var r = t(e);
              if (r !== !1)
                for (var o = 0; o < e.children.length; o++)
                  Ur(e.children[o], t);
            }, Ko, qo = function(e) {
              var t, r;
              e.hint.render(e);
              var o = (0, R.zh)(e).startContainer, n = (0, l.a1)(o, "data-type", "code-block-info");
              if (n)
                if (n.textContent.replace(g.g.ZWSP, "") === "" && e.hint.recentLanguage) {
                  n.textContent = g.g.ZWSP + e.hint.recentLanguage;
                  var a = (0, R.zh)(e);
                  a.selectNodeContents(n);
                } else {
                  var s = [], m = n.textContent.substring(0, (0, R.im)(n, e.ir.element).start).replace(g.g.ZWSP, "");
                  (e.options.preview.hljs.langs || g.g.ALIAS_CODE_LANGUAGES.concat(((r = (t = window.hljs) === null || t === void 0 ? void 0 : t.listLanguages()) !== null && r !== void 0 ? r : []).sort())).forEach(function(y) {
                    y.indexOf(m.toLowerCase()) > -1 && s.push({
                      html: y,
                      value: y
                    });
                  }), e.hint.genHTML(s, m, e);
                }
            }, lt = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && qo(e), clearTimeout(e.ir.processTimeoutId), e.ir.processTimeoutId = window.setTimeout(function() {
                if (!e.ir.composingLock) {
                  var r = B(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(r), e.options.counter.enable && e.counter.render(e, r), e.options.cache.enable && (0, i.pK)() && (localStorage.setItem(e.options.cache.id, r), e.options.cache.after && e.options.cache.after(r)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, Gt = function(e, t) {
              var r = (0, R.zh)(e), o = (0, l.F9)(r.startContainer) || r.startContainer;
              if (o) {
                var n = o.querySelector(".vditor-ir__marker--heading");
                n ? n.innerHTML = t : (o.insertAdjacentText("afterbegin", t), r.selectNodeContents(o), r.collapse(!1)), ze(e, r.cloneRange()), zt(e);
              }
            }, fr = function(e, t, r) {
              var o = (0, l.a1)(e.startContainer, "data-type", r);
              if (o) {
                o.firstElementChild.remove(), o.lastElementChild.remove(), e.insertNode(document.createElement("wbr"));
                var n = document.createElement("div");
                n.innerHTML = t.lute.SpinVditorIRDOM(o.outerHTML), o.outerHTML = n.firstElementChild.innerHTML.trim();
              }
            }, Sa = function(e, t, r, o) {
              var n = (0, R.zh)(e), a = t.getAttribute("data-type"), s = n.startContainer;
              s.nodeType === 3 && (s = s.parentElement);
              var m = !0;
              if (t.classList.contains("vditor-menu--current"))
                if (a === "quote") {
                  var y = (0, l.lG)(s, "BLOCKQUOTE");
                  y && (n.insertNode(document.createElement("wbr")), y.outerHTML = y.innerHTML.trim() === "" ? '<p data-block="0">'.concat(y.innerHTML, "</p>") : y.innerHTML);
                } else if (a === "link") {
                  var h = (0, l.a1)(n.startContainer, "data-type", "a");
                  if (h) {
                    var _ = (0, l.fb)(n.startContainer, "vditor-ir__link");
                    _ ? (n.insertNode(document.createElement("wbr")), h.outerHTML = _.innerHTML) : h.outerHTML = h.querySelector(".vditor-ir__link").innerHTML + "<wbr>";
                  }
                } else a === "italic" ? fr(n, e, "em") : a === "bold" ? fr(n, e, "strong") : a === "strike" ? fr(n, e, "s") : a === "inline-code" ? fr(n, e, "code") : (a === "check" || a === "list" || a === "ordered-list") && (sr(e, n, a), m = !1, t.classList.remove("vditor-menu--current"));
              else {
                e.ir.element.childNodes.length === 0 && (e.ir.element.innerHTML = '<p data-block="0"><wbr></p>', (0, R.ib)(e.ir.element, n));
                var H = (0, l.F9)(n.startContainer);
                if (a === "line") {
                  if (H) {
                    var q = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                    H.innerHTML.trim() === "" ? H.outerHTML = q : H.insertAdjacentHTML("afterend", q);
                  }
                } else if (a === "quote")
                  H && (n.insertNode(document.createElement("wbr")), H.outerHTML = '<blockquote data-block="0">'.concat(H.outerHTML, "</blockquote>"), m = !1, t.classList.add("vditor-menu--current"));
                else if (a === "link") {
                  var X = void 0;
                  n.toString() === "" ? X = "".concat(r, "<wbr>").concat(o) : X = "".concat(r).concat(n.toString()).concat(o.replace(")", "<wbr>)")), document.execCommand("insertHTML", !1, X), m = !1, t.classList.add("vditor-menu--current");
                } else if (a === "italic" || a === "bold" || a === "strike" || a === "inline-code" || a === "code" || a === "table") {
                  var X = void 0;
                  n.toString() === "" ? X = "".concat(r, "<wbr>").concat(o) : (a === "code" ? X = "".concat(r, `
`).concat(n.toString(), "<wbr>").concat(o) : a === "table" ? X = "".concat(r).concat(n.toString(), "<wbr>").concat(o) : X = "".concat(r).concat(n.toString()).concat(o, "<wbr>"), n.deleteContents()), (a === "table" || a === "code") && (X = `
` + X + `

`);
                  var V = document.createElement("span");
                  V.innerHTML = X, n.insertNode(V), ze(e, n), a === "table" && (n.selectNodeContents(getSelection().getRangeAt(0).startContainer.parentElement), (0, R.Hc)(n));
                } else (a === "check" || a === "list" || a === "ordered-list") && (sr(e, n, a, !1), m = !1, b(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current"));
              }
              (0, R.ib)(e.ir.element, n), lt(e), m && zt(e);
            }, Ea = function(e, t, r, o) {
              function n(a) {
                return a instanceof r ? a : new r(function(s) {
                  s(a);
                });
              }
              return new (r || (r = Promise))(function(a, s) {
                function m(_) {
                  try {
                    h(o.next(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function y(_) {
                  try {
                    h(o.throw(_));
                  } catch (H) {
                    s(H);
                  }
                }
                function h(_) {
                  _.done ? a(_.value) : n(_.value).then(m, y);
                }
                h((o = o.apply(e, t || [])).next());
              });
            }, xa = function(e, t) {
              var r = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, o, n, a, s;
              return s = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                return this;
              }), s;
              function m(h) {
                return function(_) {
                  return y([h, _]);
                };
              }
              function y(h) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, h[0] && (r = 0)), r; ) try {
                  if (o = 1, n && (a = h[0] & 2 ? n.return : h[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, h[1])).done) return a;
                  switch (n = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
                    case 0:
                    case 1:
                      a = h;
                      break;
                    case 4:
                      return r.label++, { value: h[1], done: !1 };
                    case 5:
                      r.label++, n = h[1], h = [0];
                      continue;
                    case 7:
                      h = r.ops.pop(), r.trys.pop();
                      continue;
                    default:
                      if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        r = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
                        r.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = h;
                        break;
                      }
                      if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(h);
                        break;
                      }
                      a[2] && r.ops.pop(), r.trys.pop();
                      continue;
                  }
                  h = t.call(e, r);
                } catch (_) {
                  h = [6, _], n = 0;
                } finally {
                  o = a = 0;
                }
                if (h[0] & 5) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }
            }, Ta = (
              /** @class */
              function() {
                function e(t) {
                  var r = this;
                  this.splitChar = "", this.lastIndex = -1, this.fillEmoji = function(o, n) {
                    r.element.style.display = "none";
                    var a = decodeURIComponent(o.getAttribute("data-value")), s = window.getSelection().getRangeAt(0);
                    if (n.currentMode === "ir") {
                      var m = (0, l.a1)(s.startContainer, "data-type", "code-block-info");
                      if (m) {
                        m.textContent = g.g.ZWSP + a.trimRight(), s.selectNodeContents(m), s.collapse(!1), lt(n), m.parentElement.querySelectorAll("code").forEach(function(H) {
                          H.className = "language-" + a.trimRight();
                        }), he(m.parentElement.querySelector(".vditor-ir__preview"), n), r.recentLanguage = a.trimRight();
                        return;
                      }
                    }
                    if (n.currentMode === "wysiwyg" && s.startContainer.nodeType !== 3) {
                      var y = s.startContainer, h = void 0;
                      if (y.classList.contains("vditor-input") ? h = y : h = y.firstElementChild, h && h.classList.contains("vditor-input")) {
                        h.value = a.trimRight(), s.selectNodeContents(h), s.collapse(!1), h.dispatchEvent(new CustomEvent("input", { detail: 1 })), r.recentLanguage = a.trimRight();
                        return;
                      }
                    }
                    if (s.setStart(s.startContainer, r.lastIndex), s.deleteContents(), n.options.hint.parse ? n.currentMode === "sv" ? (0, R.oC)(n.lute.SpinVditorSVDOM(a), n) : n.currentMode === "wysiwyg" ? (0, R.oC)(n.lute.SpinVditorDOM(a), n) : (0, R.oC)(n.lute.SpinVditorIRDOM(a), n) : (0, R.oC)(a, n), r.splitChar === ":" && a.indexOf(":") > -1 && n.currentMode !== "sv" && s.insertNode(document.createTextNode(" ")), s.collapse(!1), (0, R.Hc)(s), n.currentMode === "wysiwyg") {
                      var _ = (0, l.fb)(s.startContainer, "vditor-wysiwyg__block");
                      _ && _.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (_.lastElementChild.innerHTML = _.firstElementChild.innerHTML, he(_.lastElementChild, n));
                    } else if (n.currentMode === "ir") {
                      var _ = (0, l.fb)(s.startContainer, "vditor-ir__marker--pre");
                      _ && _.nextElementSibling.classList.contains("vditor-ir__preview") && (_.nextElementSibling.innerHTML = _.innerHTML, he(_.nextElementSibling, n));
                    }
                    ke(n);
                  }, this.timeId = -1, this.element = document.createElement("div"), this.element.className = "vditor-hint", this.recentLanguage = "", t.push({ key: ":" });
                }
                return e.prototype.render = function(t) {
                  var r = this;
                  if (window.getSelection().focusNode) {
                    var o, n = getSelection().getRangeAt(0);
                    o = n.startContainer.textContent.substring(0, n.startOffset) || "";
                    var a = this.getKey(o, t.options.hint.extend);
                    if (typeof a > "u")
                      this.element.style.display = "none", clearTimeout(this.timeId);
                    else if (this.splitChar === ":") {
                      var s = a === "" ? t.options.hint.emoji : t.lute.GetEmojis(), m = [];
                      Object.keys(s).forEach(function(y) {
                        y.indexOf(a.toLowerCase()) === 0 && (s[y].indexOf(".") > -1 ? m.push({
                          html: '<img src="'.concat(s[y], '" title=":').concat(y, ':"/> :').concat(y, ":"),
                          value: ":".concat(y, ":")
                        }) : m.push({
                          html: '<span class="vditor-hint__emoji">'.concat(s[y], "</span>").concat(y),
                          value: s[y]
                        }));
                      }), this.genHTML(m, a, t);
                    } else
                      t.options.hint.extend.forEach(function(y) {
                        y.key === r.splitChar && (clearTimeout(r.timeId), r.timeId = window.setTimeout(function() {
                          return Ea(r, void 0, void 0, function() {
                            var h;
                            return xa(this, function(_) {
                              switch (_.label) {
                                case 0:
                                  return h = this.genHTML, [4, y.hint(a)];
                                case 1:
                                  return h.apply(this, [_.sent(), a, t]), [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        }, t.options.hint.delay));
                      });
                  }
                }, e.prototype.genHTML = function(t, r, o) {
                  var n = this;
                  if (t.length === 0) {
                    this.element.style.display = "none";
                    return;
                  }
                  var a = o[o.currentMode].element, s = (0, R.Ny)(a), m = s.left + (o.options.outline.position === "left" ? o.outline.element.offsetWidth : 0), y = s.top, h = "";
                  t.forEach(function(H, q) {
                    if (!(q > 7)) {
                      var X = H.html;
                      if (r !== "") {
                        var V = X.lastIndexOf(">") + 1, te = X.substr(V), ee = te.toLowerCase().indexOf(r.toLowerCase());
                        ee > -1 && (te = te.substring(0, ee) + "<b>" + te.substring(ee, ee + r.length) + "</b>" + te.substring(ee + r.length), X = X.substr(0, V) + te);
                      }
                      h += '<button type="button" data-value="'.concat(encodeURIComponent(H.value), ` "
`).concat(q === 0 ? "class='vditor-hint--current'" : "", "> ").concat(X, "</button>");
                    }
                  }), this.element.innerHTML = h;
                  var _ = parseInt(document.defaultView.getComputedStyle(a, null).getPropertyValue("line-height"), 10);
                  this.element.style.top = "".concat(y + (_ || 22), "px"), this.element.style.left = "".concat(m, "px"), this.element.style.display = "block", this.element.style.right = "auto", this.element.querySelectorAll("button").forEach(function(H) {
                    H.addEventListener("click", function(q) {
                      n.fillEmoji(H, o), q.preventDefault();
                    });
                  }), this.element.getBoundingClientRect().bottom > window.innerHeight && (this.element.style.top = "".concat(y - this.element.offsetHeight, "px")), this.element.getBoundingClientRect().right > window.innerWidth && (this.element.style.left = "auto", this.element.style.right = "0");
                }, e.prototype.select = function(t, r) {
                  if (this.element.querySelectorAll("button").length === 0 || this.element.style.display === "none")
                    return !1;
                  var o = this.element.querySelector(".vditor-hint--current");
                  if (t.key === "ArrowDown")
                    return t.preventDefault(), t.stopPropagation(), o.removeAttribute("class"), o.nextElementSibling ? o.nextElementSibling.className = "vditor-hint--current" : this.element.children[0].className = "vditor-hint--current", !0;
                  if (t.key === "ArrowUp") {
                    if (t.preventDefault(), t.stopPropagation(), o.removeAttribute("class"), o.previousElementSibling)
                      o.previousElementSibling.className = "vditor-hint--current";
                    else {
                      var n = this.element.children.length;
                      this.element.children[n - 1].className = "vditor-hint--current";
                    }
                    return !0;
                  } else if (!(0, i.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter" && !t.isComposing)
                    return t.preventDefault(), t.stopPropagation(), this.fillEmoji(o, r), !0;
                  return !1;
                }, e.prototype.getKey = function(t, r) {
                  var o = this;
                  this.lastIndex = -1, this.splitChar = "", r.forEach(function(h) {
                    var _ = t.lastIndexOf(h.key);
                    o.lastIndex < _ && (o.splitChar = h.key, o.lastIndex = _);
                  });
                  var n;
                  if (this.lastIndex === -1)
                    return n;
                  var a = t.split(this.splitChar), s = a[a.length - 1], m = 32;
                  if (a.length > 1 && s.trim() === s)
                    if (a.length === 2 && a[0] === "" && a[1].length < m)
                      n = a[1];
                    else {
                      var y = a[a.length - 2].slice(-1);
                      (0, k.X)(y) === " " && s.length < m && (n = s);
                    }
                  return n;
                }, e;
              }()
            ), La = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1;
                  var r = document.createElement("div");
                  r.className = "vditor-ir", r.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(t.options.placeholder, `"
 contenteditable="true" spellcheck="false"></pre>`), this.element = r.firstElementChild, this.bindEvent(t), Dr(t, this.element), ko(t, this.element), Rr(t, this.element), $r(t, this.element), Pr(t, this.element), Or(t, this.element), Hr(t, this.element, this.copy), Nr(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, r) {
                  var o = getSelection().getRangeAt(0);
                  if (o.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var n = document.createElement("div");
                    n.appendChild(o.cloneContents()), t.clipboardData.setData("text/plain", r.lute.VditorIRDOM2Md(n.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var r = this;
                  this.element.addEventListener("paste", function(o) {
                    ur(t, o, {
                      pasteCode: function(n) {
                        document.execCommand("insertHTML", !1, n);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    E(t, ["hint"]);
                  }), this.element.addEventListener("compositionstart", function(o) {
                    r.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(o) {
                    (0, i.vU)() || ze(t, getSelection().getRangeAt(0).cloneRange()), r.composingLock = !1;
                  }), this.element.addEventListener("input", function(o) {
                    if (!(o.inputType === "deleteByDrag" || o.inputType === "insertFromDrop")) {
                      if (r.preventInput) {
                        r.preventInput = !1, lt(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      r.composingLock || o.data === "‘" || o.data === "“" || o.data === "《" || ze(t, getSelection().getRangeAt(0).cloneRange(), !1, o);
                    }
                  }), this.element.addEventListener("click", function(o) {
                    if (o.target.tagName === "INPUT") {
                      o.target.checked ? o.target.setAttribute("checked", "checked") : o.target.removeAttribute("checked"), r.preventInput = !0, lt(t);
                      return;
                    }
                    var n = (0, R.zh)(t), a = (0, l.fb)(o.target, "vditor-ir__preview");
                    if (a || (a = (0, l.fb)(n.startContainer, "vditor-ir__preview")), a && (a.previousElementSibling.firstElementChild ? n.selectNodeContents(a.previousElementSibling.firstElementChild) : n.selectNodeContents(a.previousElementSibling), n.collapse(!0), (0, R.Hc)(n), Oe(t)), o.target.tagName === "IMG") {
                      var s = o.target.parentElement.querySelector(".vditor-ir__marker--link");
                      s && (n.selectNode(s), (0, R.Hc)(n));
                    }
                    var m = (0, l.a1)(o.target, "data-type", "a");
                    if (m && !m.classList.contains("vditor-ir__node--expand")) {
                      t.options.link.click ? t.options.link.click(m.querySelector(":scope > .vditor-ir__marker--link")) : t.options.link.isOpen && window.open(m.querySelector(":scope > .vditor-ir__marker--link").textContent);
                      return;
                    }
                    if (o.target.isEqualNode(r.element) && r.element.lastElementChild && n.collapsed) {
                      var y = r.element.lastElementChild.getBoundingClientRect();
                      o.y > y.top + y.height && (r.element.lastElementChild.tagName === "P" && r.element.lastElementChild.textContent.trim().replace(g.g.ZWSP, "") === "" ? (n.selectNodeContents(r.element.lastElementChild), n.collapse(!1)) : (r.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(g.g.ZWSP, "<wbr></p>")), (0, R.ib)(r.element, n)));
                    }
                    n.toString() === "" ? F(n, t) : setTimeout(function() {
                      F((0, R.zh)(t), t);
                    }), Pe(o, t), zt(t);
                  }), this.element.addEventListener("keyup", function(o) {
                    if (!(o.isComposing || (0, i.yl)(o))) {
                      if (o.key === "Enter" && Oe(t), zt(t), (o.key === "Backspace" || o.key === "Delete") && t.ir.element.innerHTML !== "" && t.ir.element.childNodes.length === 1 && t.ir.element.firstElementChild && t.ir.element.firstElementChild.tagName === "P" && t.ir.element.firstElementChild.childElementCount === 0 && (t.ir.element.textContent === "" || t.ir.element.textContent === `
`)) {
                        t.ir.element.innerHTML = "";
                        return;
                      }
                      var n = (0, R.zh)(t);
                      o.key === "Backspace" ? ((0, i.vU)() && n.startContainer.textContent === `
` && n.startOffset === 1 && (n.startContainer.textContent = "", F(n, t)), r.element.querySelectorAll(".language-math").forEach(function(s) {
                        var m = s.querySelector("br");
                        m && m.remove();
                      })) : o.key.indexOf("Arrow") > -1 ? ((o.key === "ArrowLeft" || o.key === "ArrowRight") && qo(t), F(n, t)) : o.keyCode === 229 && o.code === "" && o.key === "Unidentified" && F(n, t);
                      var a = (0, l.fb)(n.startContainer, "vditor-ir__preview");
                      if (a) {
                        if (o.key === "ArrowUp" || o.key === "ArrowLeft")
                          return a.previousElementSibling.firstElementChild ? n.selectNodeContents(a.previousElementSibling.firstElementChild) : n.selectNodeContents(a.previousElementSibling), n.collapse(!1), o.preventDefault(), !0;
                        if (a.tagName === "SPAN" && (o.key === "ArrowDown" || o.key === "ArrowRight"))
                          return a.parentElement.getAttribute("data-type") === "html-entity" ? (a.parentElement.insertAdjacentText("afterend", g.g.ZWSP), n.setStart(a.parentElement.nextSibling, 1)) : n.selectNodeContents(a.parentElement.lastElementChild), n.collapse(!1), o.preventDefault(), !0;
                      }
                    }
                  });
                }, e;
              }()
            ), Go = function(e) {
              if (e.currentMode === "sv")
                return e.lute.Md2HTML(B(e));
              if (e.currentMode === "wysiwyg")
                return e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML);
              if (e.currentMode === "ir")
                return e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML);
            }, Ba = L(214), Xo = L(436), Aa = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-outline", this.element.innerHTML = '<div class="vditor-outline__title">'.concat(t, `</div>
<div class="vditor-outline__content"></div>`);
                }
                return e.prototype.render = function(t) {
                  var r = "";
                  return t.preview.element.style.display === "block" ? r = (0, Xo.k)(t.preview.previewElement, this.element.lastElementChild, t) : r = (0, Xo.k)(t[t.currentMode].element, this.element.lastElementChild, t), r;
                }, e.prototype.toggle = function(t, r, o) {
                  var n;
                  r === void 0 && (r = !0), o === void 0 && (o = !0);
                  var a = (n = t.toolbar.elements.outline) === null || n === void 0 ? void 0 : n.firstElementChild;
                  if (r && window.innerWidth >= g.g.MOBILE_WIDTH ? (this.element.style.display = "block", this.render(t), a == null || a.classList.add("vditor-menu--current")) : (this.element.style.display = "none", a == null || a.classList.remove("vditor-menu--current")), o && getSelection().rangeCount > 0) {
                    var s = getSelection().getRangeAt(0);
                    t[t.currentMode].element.contains(s.startContainer) && (0, R.Hc)(s);
                  }
                  se(t);
                }, e;
              }()
            ), Ma = L(280), _a = (
              /** @class */
              function() {
                function e(t) {
                  var r = this;
                  this.element = document.createElement("div"), this.element.className = "vditor-preview", this.previewElement = document.createElement("div"), this.previewElement.className = "vditor-reset", t.options.classes.preview && this.previewElement.classList.add(t.options.classes.preview), this.previewElement.style.maxWidth = t.options.preview.maxWidth + "px", this.previewElement.addEventListener("copy", function(y) {
                    if (y.target.tagName !== "TEXTAREA") {
                      var h = document.createElement("div");
                      h.className = "vditor-reset", h.appendChild(getSelection().getRangeAt(0).cloneContents()), r.copyToX(t, h, "default"), y.preventDefault();
                    }
                  }), this.previewElement.addEventListener("click", function(y) {
                    var h = (0, l.lG)(y.target, "SPAN");
                    if (h && (0, l.fb)(h, "vditor-toc")) {
                      var _ = r.previewElement.querySelector("#" + h.getAttribute("data-target-id"));
                      _ && (r.element.scrollTop = _.offsetTop);
                      return;
                    }
                    if (y.target.tagName === "A") {
                      t.options.link.click ? t.options.link.click(y.target) : t.options.link.isOpen && window.open(y.target.getAttribute("href")), y.preventDefault();
                      return;
                    }
                    y.target.tagName === "IMG" && (t.options.image.preview ? t.options.image.preview(y.target) : t.options.image.isPreview && (0, ae.E)(y.target, t.options.lang, t.options.theme));
                  }), this.element.appendChild(this.previewElement);
                  var o = t.options.preview.actions;
                  if (o.length !== 0) {
                    var n = document.createElement("div");
                    n.className = "vditor-preview__action";
                    for (var a = [], s = 0; s < o.length; s++) {
                      var m = o[s];
                      if (typeof m == "object") {
                        a.push('<button type="button" data-type="'.concat(m.key, '" class="').concat(m.className, '"').concat(m.tooltip ? ' aria-label="'.concat(m.tooltip, '"') : "", '">').concat(m.text, "</button>"));
                        continue;
                      }
                      switch (m) {
                        case "desktop":
                          a.push('<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>');
                          break;
                        case "tablet":
                          a.push('<button type="button" data-type="tablet">Tablet</button>');
                          break;
                        case "mobile":
                          a.push('<button type="button" data-type="mobile">Mobile/Wechat</button>');
                          break;
                        case "mp-wechat":
                          a.push('<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>');
                          break;
                        case "zhihu":
                          a.push('<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到知乎"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>');
                          break;
                      }
                    }
                    n.innerHTML = a.join(""), n.addEventListener((0, i.Le)(), function(y) {
                      var h = (0, A.S)(y.target, "BUTTON");
                      if (h) {
                        var _ = h.getAttribute("data-type"), H = o.find(function(q) {
                          return (q == null ? void 0 : q.key) === _;
                        });
                        if (H) {
                          H.click(_);
                          return;
                        }
                        if (_ === "mp-wechat" || _ === "zhihu") {
                          r.copyToX(t, r.previewElement.cloneNode(!0), _);
                          return;
                        }
                        _ === "desktop" ? r.previewElement.style.width = "auto" : _ === "tablet" ? r.previewElement.style.width = "780px" : r.previewElement.style.width = "360px", r.previewElement.scrollWidth > r.previewElement.parentElement.clientWidth && (r.previewElement.style.width = "auto"), r.render(t), n.querySelectorAll("button").forEach(function(q) {
                          q.classList.remove("vditor-preview__action--current");
                        }), h.classList.add("vditor-preview__action--current");
                      }
                    }), this.element.insertBefore(n, this.previewElement);
                  }
                }
                return e.prototype.render = function(t, r) {
                  var o = this;
                  if (clearTimeout(this.mdTimeoutId), this.element.style.display === "none") {
                    this.element.getAttribute("data-type") === "renderPerformance" && t.tip.hide();
                    return;
                  }
                  if (r) {
                    this.previewElement.innerHTML = r;
                    return;
                  }
                  if (B(t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "") {
                    this.previewElement.innerHTML = "";
                    return;
                  }
                  var n = (/* @__PURE__ */ new Date()).getTime(), a = B(t);
                  this.mdTimeoutId = window.setTimeout(function() {
                    if (t.options.preview.url) {
                      var s = new XMLHttpRequest();
                      s.open("POST", t.options.preview.url), s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), s.onreadystatechange = function() {
                        if (s.readyState === XMLHttpRequest.DONE)
                          if (s.status === 200) {
                            var y = JSON.parse(s.responseText);
                            if (y.code !== 0) {
                              t.tip.show(y.msg);
                              return;
                            }
                            t.options.preview.transform && (y.data = t.options.preview.transform(y.data)), o.previewElement.innerHTML = y.data, o.afterRender(t, n);
                          } else {
                            var h = t.lute.Md2HTML(a);
                            t.options.preview.transform && (h = t.options.preview.transform(h)), o.previewElement.innerHTML = h, o.afterRender(t, n);
                          }
                      }, s.send(JSON.stringify({ markdownText: a }));
                    } else {
                      var m = t.lute.Md2HTML(a);
                      t.options.preview.transform && (m = t.options.preview.transform(m)), o.previewElement.innerHTML = m, o.afterRender(t, n);
                    }
                  }, t.options.preview.delay);
                }, e.prototype.afterRender = function(t, r) {
                  t.options.preview.parse && t.options.preview.parse(this.element);
                  var o = (/* @__PURE__ */ new Date()).getTime() - r;
                  (/* @__PURE__ */ new Date()).getTime() - r > 2600 ? (t.tip.show(window.VditorI18n.performanceTip.replace("${x}", o.toString())), t.preview.element.setAttribute("data-type", "renderPerformance")) : t.preview.element.getAttribute("data-type") === "renderPerformance" && (t.tip.hide(), t.preview.element.removeAttribute("data-type"));
                  var n = t.preview.element.querySelector(".vditor-comment--focus");
                  n && n.classList.remove("vditor-comment--focus"), (0, W.O)(t.preview.previewElement, t.options.preview.hljs), (0, P.s)(t.options.preview.hljs, t.preview.previewElement, t.options.cdn), (0, Z.i)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, ne.K)(t.preview.previewElement, t.options.cdn), (0, pe.J)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, Q.P)(t.preview.previewElement, t.options.cdn), (0, G.v)(t.preview.previewElement, t.options.cdn), (0, O.p)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, ce.P)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, fe.B)(t.preview.previewElement, t.options.cdn), (0, I.Q)(t.preview.previewElement, t.options.cdn), t.options.preview.render.media.enable && (0, Ma.Y)(t.preview.previewElement), t.options.customRenders.forEach(function(m) {
                    m.render(t.preview.previewElement, t);
                  });
                  var a = t.preview.element, s = t.outline.render(t);
                  s === "" && (s = "[ToC]"), a.querySelectorAll('[data-type="toc-block"]').forEach(function(m) {
                    m.innerHTML = s, (0, j.H)(m, {
                      cdn: t.options.cdn,
                      math: t.options.preview.math
                    });
                  }), (0, j.H)(t.preview.previewElement, {
                    cdn: t.options.cdn,
                    math: t.options.preview.math
                  });
                }, e.prototype.copyToX = function(t, r, o) {
                  o === void 0 && (o = "mp-wechat"), o !== "zhihu" ? r.querySelectorAll(".katex-html .base").forEach(function(a) {
                    a.style.display = "initial";
                  }) : r.querySelectorAll(".language-math").forEach(function(a) {
                    a.outerHTML = '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="'.concat(a.getAttribute("data-math"), '\\" style="display: block; margin: 0 auto; max-width: 100%;">');
                  }), r.style.backgroundColor = "#fff", r.querySelectorAll("code").forEach(function(a) {
                    a.style.backgroundImage = "none";
                  }), this.element.append(r);
                  var n = r.ownerDocument.createRange();
                  n.selectNode(r), (0, R.Hc)(n), document.execCommand("copy"), r.remove(), t.tip.show(["zhihu", "mp-wechat"].includes(o) ? "已复制，可到".concat(o === "zhihu" ? "知乎" : "微信公众号平台", "进行粘贴") : "已复制到剪切板");
                }, e;
              }()
            ), Da = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-resize vditor-resize--".concat(t.options.resize.position), this.element.innerHTML = '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>', this.bindEvent(t);
                }
                return e.prototype.bindEvent = function(t) {
                  var r = this;
                  this.element.addEventListener("mousedown", function(o) {
                    var n = document, a = o.clientY, s = t.element.offsetHeight, m = 63 + t.element.querySelector(".vditor-toolbar").clientHeight;
                    n.ondragstart = function() {
                      return !1;
                    }, window.captureEvents && window.captureEvents(), r.element.classList.add("vditor-resize--selected"), n.onmousemove = function(y) {
                      t.options.resize.position === "top" ? t.element.style.height = Math.max(m, s + (a - y.clientY)) + "px" : t.element.style.height = Math.max(m, s + (y.clientY - a)) + "px", t.options.typewriterMode && (t.sv.element.style.paddingBottom = t.sv.element.parentElement.offsetHeight / 2 + "px");
                    }, n.onmouseup = function() {
                      t.options.resize.after && t.options.resize.after(t.element.offsetHeight - s), window.captureEvents && window.captureEvents(), n.onmousemove = null, n.onmouseup = null, n.ondragstart = null, n.onselectstart = null, n.onselect = null, r.element.classList.remove("vditor-resize--selected");
                    };
                  });
                }, e;
              }()
            ), Ra = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1, this.element = document.createElement("pre"), this.element.className = "vditor-sv vditor-reset", this.element.setAttribute("placeholder", t.options.placeholder), this.element.setAttribute("contenteditable", "true"), this.element.setAttribute("spellcheck", "false"), this.bindEvent(t), Dr(t, this.element), Rr(t, this.element), $r(t, this.element), Pr(t, this.element), Or(t, this.element), Hr(t, this.element, this.copy), Nr(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, r) {
                  t.stopPropagation(), t.preventDefault(), t.clipboardData.setData("text/plain", Ut(r[r.currentMode].element));
                }, e.prototype.bindEvent = function(t) {
                  var r = this;
                  this.element.addEventListener("paste", function(o) {
                    ur(t, o, {
                      pasteCode: function(n) {
                        document.execCommand("insertHTML", !1, n);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    if (t.preview.element.style.display === "block") {
                      var o = r.element.scrollTop, n = r.element.clientHeight, a = r.element.scrollHeight - parseFloat(r.element.style.paddingBottom || "0"), s = t.preview.element;
                      o / n > 0.5 ? s.scrollTop = (o + n) * s.scrollHeight / a - n : s.scrollTop = o * s.scrollHeight / a;
                    }
                  }), this.element.addEventListener("compositionstart", function(o) {
                    r.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(o) {
                    (0, i.vU)() || Se(t, o), r.composingLock = !1;
                  }), this.element.addEventListener("input", function(o) {
                    if (!(o.inputType === "deleteByDrag" || o.inputType === "insertFromDrop") && !(r.composingLock || o.data === "‘" || o.data === "“" || o.data === "《")) {
                      if (r.preventInput) {
                        r.preventInput = !1, $e(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      Se(t, o);
                    }
                  }), this.element.addEventListener("keyup", function(o) {
                    if (!(o.isComposing || (0, i.yl)(o))) {
                      if ((o.key === "Backspace" || o.key === "Delete") && t.sv.element.innerHTML !== "" && t.sv.element.childNodes.length === 1 && t.sv.element.firstElementChild && t.sv.element.firstElementChild.tagName === "DIV" && t.sv.element.firstElementChild.childElementCount === 2 && (t.sv.element.firstElementChild.textContent === "" || t.sv.element.textContent === `
`)) {
                        t.sv.element.innerHTML = "";
                        return;
                      }
                      o.key === "Enter" && Oe(t);
                    }
                  });
                }, e;
              }()
            ), Zo = (
              /** @class */
              function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-tip";
                }
                return e.prototype.show = function(t, r) {
                  var o = this;
                  r === void 0 && (r = 6e3), this.element.className = "vditor-tip vditor-tip--show", r === 0 ? (this.element.innerHTML = '<div class="vditor-tip__content">'.concat(t, `
<div class="vditor-tip__close">X</div></div>`), this.element.querySelector(".vditor-tip__close").addEventListener("click", function() {
                    o.hide();
                  })) : (this.element.innerHTML = '<div class="vditor-tip__content">'.concat(t, "</div>"), setTimeout(function() {
                    o.hide();
                  }, r)), this.element.removeAttribute("style"), setTimeout(function() {
                    var n = o.element.getBoundingClientRect();
                    n.top < 46 && (o.element.style.position = "fixed", o.element.style.top = "46px");
                  }, 150);
                }, e.prototype.hide = function() {
                  this.element.className = "vditor-messageElementtip", this.element.innerHTML = "";
                }, e;
              }()
            ), Kr = function(e, t) {
              if (t.options.preview.mode !== e) {
                switch (t.options.preview.mode = e, e) {
                  case "both":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "block", t.preview.render(t), f(t.toolbar.elements, ["both"]);
                    break;
                  case "editor":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "none", b(t.toolbar.elements, ["both"]);
                    break;
                }
                t.devtools && t.devtools.renderEchart(t);
              }
            }, Oa = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ha = (
              /** @class */
              function(e) {
                Oa(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return r.options.preview.mode === "both" && n.element.children[0].classList.add("vditor-menu--current"), n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    var s = n.element.firstElementChild;
                    s.classList.contains(g.g.CLASS_MENU_DISABLED) || (a.preventDefault(), r.currentMode === "sv" && (r.options.preview.mode === "both" ? Kr("editor", r) : Kr("both", r)));
                  }), n;
                }
                return t;
              }(De)
            ), Na = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__br";
                }
                return e;
              }()
            ), Yo = L(580), $a = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Pa = (
              /** @class */
              function(e) {
                $a(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = n.element.children[0], s = document.createElement("div");
                  s.className = "vditor-hint".concat(o.level === 2 ? "" : " vditor-panel--arrow");
                  var m = "";
                  return g.g.CODE_THEME.forEach(function(y) {
                    m += "<button>".concat(y, "</button>");
                  }), s.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(m, "</div>"), s.addEventListener((0, i.Le)(), function(y) {
                    y.target.tagName === "BUTTON" && (E(r, ["subToolbar"]), r.options.preview.hljs.style = y.target.textContent, (0, Yo.Y)(y.target.textContent, r.options.cdn), y.preventDefault(), y.stopPropagation());
                  }), n.element.appendChild(s), S(r, s, a, o.level), n;
                }
                return t;
              }(De)
            ), Ia = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), ja = (
              /** @class */
              function(e) {
                Ia(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = n.element.children[0], s = document.createElement("div");
                  s.className = "vditor-hint".concat(o.level === 2 ? "" : " vditor-panel--arrow");
                  var m = "";
                  return Object.keys(r.options.preview.theme.list).forEach(function(y) {
                    m += '<button data-type="'.concat(y, '">').concat(r.options.preview.theme.list[y], "</button>");
                  }), s.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(m, "</div>"), s.addEventListener((0, i.Le)(), function(y) {
                    y.target.tagName === "BUTTON" && (E(r, ["subToolbar"]), r.options.preview.theme.current = y.target.getAttribute("data-type"), (0, z.Z)(r.options.preview.theme.current, r.options.preview.theme.path), y.preventDefault(), y.stopPropagation());
                  }), n.element.appendChild(s), S(r, s, a, o.level), n;
                }
                return t;
              }(De)
            ), Fa = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("span"), this.element.className = "vditor-counter vditor-tooltipped vditor-tooltipped__nw", this.render(t, "");
                }
                return e.prototype.render = function(t, r) {
                  var o = r.endsWith(`
`) ? r.length - 1 : r.length;
                  if (t.options.counter.type === "text" && t[t.currentMode]) {
                    var n = t[t.currentMode].element.cloneNode(!0);
                    n.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(a) {
                      a.remove();
                    }), o = n.textContent.length;
                  }
                  typeof t.options.counter.max == "number" ? (o > t.options.counter.max ? this.element.className = "vditor-counter vditor-counter--error" : this.element.className = "vditor-counter", this.element.innerHTML = "".concat(o, "/").concat(t.options.counter.max)) : this.element.innerHTML = "".concat(o), this.element.setAttribute("aria-label", t.options.counter.type), t.options.counter.after && t.options.counter.after(o, {
                    enable: t.options.counter.enable,
                    max: t.options.counter.max,
                    type: t.options.counter.type
                  });
                }, e;
              }()
            ), za = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Wa = (
              /** @class */
              function(e) {
                za(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].innerHTML = o.icon, n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), !a.currentTarget.classList.contains(g.g.CLASS_MENU_DISABLED) && o.click(a, r);
                  }), n;
                }
                return t;
              }(De)
            ), Va = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ua = (
              /** @class */
              function(e) {
                Va(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.firstElementChild.addEventListener((0, i.Le)(), function(a) {
                    var s = n.element.firstElementChild;
                    s.classList.contains(g.g.CLASS_MENU_DISABLED) || (a.preventDefault(), s.classList.contains("vditor-menu--current") ? (s.classList.remove("vditor-menu--current"), r.devtools.element.style.display = "none", se(r)) : (s.classList.add("vditor-menu--current"), r.devtools.element.style.display = "block", se(r), r.devtools.renderEchart(r)));
                  }), n;
                }
                return t;
              }(De)
            ), Ka = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__divider";
                }
                return e;
              }()
            ), qa = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ga = (
              /** @class */
              function(e) {
                qa(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = document.createElement("div");
                  a.className = "vditor-panel vditor-panel--arrow";
                  var s = "";
                  return Object.keys(r.options.hint.emoji).forEach(function(m) {
                    var y = r.options.hint.emoji[m];
                    y.indexOf(".") > -1 ? s += '<button data-value=":'.concat(m, ': " data-key=":').concat(m, `:"><img
data-value=":`).concat(m, ': " data-key=":').concat(m, ':" class="vditor-emojis__icon" src="').concat(y, '"/></button>') : s += '<button data-value="'.concat(y, ` "
 data-key="`).concat(m, '"><span class="vditor-emojis__icon">').concat(y, "</span></button>");
                  }), a.innerHTML = '<div class="vditor-emojis" style="max-height: '.concat(r.options.height === "auto" ? "auto" : r.options.height - 80, 'px">').concat(s, `</div><div class="vditor-emojis__tail">
    <span class="vditor-emojis__tip"></span><span>`).concat(r.options.hint.emojiTail || "", `</span>
</div>`), n.element.appendChild(a), S(r, a, n.element.firstElementChild, o.level), n.bindEvent(r), n;
                }
                return t.prototype.bindEvent = function(r) {
                  var o = this;
                  this.element.lastElementChild.addEventListener((0, i.Le)(), function(n) {
                    var a = (0, A.S)(n.target, "BUTTON");
                    if (a) {
                      n.preventDefault();
                      var s = a.getAttribute("data-value"), m = (0, R.zh)(r), y = s;
                      if (r.currentMode === "wysiwyg" ? y = r.lute.SpinVditorDOM(s) : r.currentMode === "ir" && (y = r.lute.SpinVditorIRDOM(s)), s.indexOf(":") > -1 && r.currentMode !== "sv") {
                        var h = document.createElement("div");
                        h.innerHTML = y, y = h.firstElementChild.firstElementChild.outerHTML + " ", (0, R.oC)(y, r);
                      } else
                        m.extractContents(), m.insertNode(document.createTextNode(s)), (0, l.F9)(m.startContainer) || Ar(r, m);
                      m.collapse(!1), (0, R.Hc)(m), o.element.lastElementChild.style.display = "none", ke(r);
                    }
                  }), this.element.lastElementChild.addEventListener("mouseover", function(n) {
                    var a = (0, A.S)(n.target, "BUTTON");
                    a && (o.element.querySelector(".vditor-emojis__tip").innerHTML = a.getAttribute("data-key"));
                  });
                }, t;
              }(De)
            ), Jo = function(e, t, r) {
              var o = document.createElement("a");
              "download" in o ? (o.download = r, o.style.display = "none", o.href = URL.createObjectURL(new Blob([t])), document.body.appendChild(o), o.click(), o.remove()) : e.tip.show(window.VditorI18n.downloadTip, 0);
            }, Xa = function(e) {
              var t = B(e);
              Jo(e, t, t.substr(0, 10) + ".md");
            }, Za = function(e) {
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
                t.contentWindow.postMessage(B(e), "*");
              }, 200);
            }, Ya = function(e) {
              var t = Go(e), r = '<html><head><link rel="stylesheet" type="text/css" href="'.concat(e.options.cdn, `/dist/index.css"/>
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
              Jo(e, r, t.substr(0, 10) + ".html");
            }, Ja = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Qa = (
              /** @class */
              function(e) {
                Ja(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = n.element.children[0], s = document.createElement("div");
                  return s.className = "vditor-hint".concat(o.level === 2 ? "" : " vditor-panel--arrow"), s.innerHTML = `<button data-type="markdown">Markdown</button>
<button data-type="pdf">PDF</button>
<button data-type="html">HTML</button>`, s.addEventListener((0, i.Le)(), function(m) {
                    var y = m.target;
                    if (y.tagName === "BUTTON") {
                      switch (y.getAttribute("data-type")) {
                        case "markdown":
                          Xa(r);
                          break;
                        case "pdf":
                          Za(r);
                          break;
                        case "html":
                          Ya(r);
                          break;
                      }
                      E(r, ["subToolbar"]), m.preventDefault(), m.stopPropagation();
                    }
                  }), n.element.appendChild(s), S(r, s, a, o.level), n;
                }
                return t;
              }(De)
            ), ei = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), ti = (
              /** @class */
              function(e) {
                ei(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n._bindEvent(r, o), n;
                }
                return t.prototype._bindEvent = function(r, o) {
                  this.element.children[0].addEventListener((0, i.Le)(), function(n) {
                    n.preventDefault(), r.element.className.includes("vditor--fullscreen") ? (o.level || (this.innerHTML = o.icon), r.element.style.zIndex = "", document.body.style.overflow = "", r.element.classList.remove("vditor--fullscreen"), Object.keys(r.toolbar.elements).forEach(function(a) {
                      var s = r.toolbar.elements[a].firstChild;
                      s && (s.className = s.className.replace("__s", "__n"), r.options.toolbar.forEach(function(m) {
                        typeof m != "string" && m.tipPosition && m.name === s.dataset.type && (s.className = "vditor-tooltipped vditor-tooltipped__".concat(m.tipPosition));
                      }));
                    }), r.counter && (r.counter.element.className = r.counter.element.className.replace("__s", "__n"))) : (o.level || (this.innerHTML = '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'), r.element.style.zIndex = r.options.fullscreen.index.toString(), document.body.style.overflow = "hidden", r.element.classList.add("vditor--fullscreen"), Object.keys(r.toolbar.elements).forEach(function(a) {
                      var s = r.toolbar.elements[a].firstChild;
                      s && (s.className = s.className.replace("__n", "__s"));
                    }), r.counter && (r.counter.element.className = r.counter.element.className.replace("__n", "__s"))), r.devtools && r.devtools.renderEchart(r), o.click && o.click(n, r), se(r), Me(r);
                  });
                }, t;
              }(De)
            ), ri = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), oi = (
              /** @class */
              function(e) {
                ri(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = document.createElement("div");
                  return a.className = "vditor-hint vditor-panel--arrow", a.innerHTML = '<button data-tag="h1" data-value="# ">'.concat(window.VditorI18n.heading1, " ").concat((0, i.ns)("&lt;⌥⌘1>"), `</button>
<button data-tag="h2" data-value="## ">`).concat(window.VditorI18n.heading2, " &lt;").concat((0, i.ns)("⌥⌘2"), `></button>
<button data-tag="h3" data-value="### ">`).concat(window.VditorI18n.heading3, " &lt;").concat((0, i.ns)("⌥⌘3"), `></button>
<button data-tag="h4" data-value="#### ">`).concat(window.VditorI18n.heading4, " &lt;").concat((0, i.ns)("⌥⌘4"), `></button>
<button data-tag="h5" data-value="##### ">`).concat(window.VditorI18n.heading5, " &lt;").concat((0, i.ns)("⌥⌘5"), `></button>
<button data-tag="h6" data-value="###### ">`).concat(window.VditorI18n.heading6, " &lt;").concat((0, i.ns)("⌥⌘6"), "></button>"), n.element.appendChild(a), n._bindEvent(r, a), n;
                }
                return t.prototype._bindEvent = function(r, o) {
                  var n = this.element.children[0];
                  n.addEventListener((0, i.Le)(), function(s) {
                    s.preventDefault(), clearTimeout(r.wysiwyg.afterRenderTimeoutId), clearTimeout(r.ir.processTimeoutId), clearTimeout(r.sv.processTimeoutId), !n.classList.contains(g.g.CLASS_MENU_DISABLED) && (n.blur(), n.classList.contains("vditor-menu--current") ? (r.currentMode === "wysiwyg" ? (Mr(r), Le(r)) : r.currentMode === "ir" && Gt(r, ""), n.classList.remove("vditor-menu--current")) : (E(r, ["subToolbar"]), o.style.display = "block"));
                  });
                  for (var a = 0; a < 6; a++)
                    o.children.item(a).addEventListener((0, i.Le)(), function(s) {
                      s.preventDefault(), r.currentMode === "wysiwyg" ? (ar(r, s.target.getAttribute("data-tag")), Le(r), n.classList.add("vditor-menu--current")) : r.currentMode === "ir" ? (Gt(r, s.target.getAttribute("data-value")), n.classList.add("vditor-menu--current")) : So(r, s.target.getAttribute("data-value")), o.style.display = "none";
                    });
                }, t;
              }(De)
            ), ni = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), ai = (
              /** @class */
              function(e) {
                ni(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), r.tip.show(`<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">
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
                  }), n;
                }
                return t;
              }(De)
            ), ii = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), li = (
              /** @class */
              function(e) {
                ii(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    if (a.preventDefault(), !(n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) || r.currentMode === "sv")) {
                      var s = (0, R.zh)(r), m = (0, l.lG)(s.startContainer, "LI");
                      m && Do(r, m, s);
                    }
                  }), n;
                }
                return t;
              }(De)
            ), si = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), ci = (
              /** @class */
              function(e) {
                si(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), r.tip.show(`<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">
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
        组件版本：Vditor v`.concat(g.H, " / Lute v").concat(Lute.Version, `
        </li>
        <li>
        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>
        </li>
    </ul>
</div>
</div>`), 0);
                  }), n;
                }
                return t;
              }(De)
            ), di = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), ui = (
              /** @class */
              function(e) {
                di(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), !(n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) || r.currentMode === "sv") && Kt(r, "afterend");
                  }), n;
                }
                return t;
              }(De)
            ), fi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), pi = (
              /** @class */
              function(e) {
                fi(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), !(n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) || r.currentMode === "sv") && Kt(r, "beforebegin");
                  }), n;
                }
                return t;
              }(De)
            ), gi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), mi = (
              /** @class */
              function(e) {
                gi(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    if (a.preventDefault(), !(n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) || r.currentMode === "sv")) {
                      var s = (0, R.zh)(r), m = (0, l.lG)(s.startContainer, "LI");
                      m && Fr(r, m, s, m.parentElement);
                    }
                  }), n;
                }
                return t;
              }(De)
            ), hi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), bi = (
              /** @class */
              function(e) {
                hi(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return r.options.outline && n.element.firstElementChild.classList.add("vditor-menu--current"), n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault();
                    var s = r.toolbar.elements.outline.firstElementChild;
                    s.classList.contains(g.g.CLASS_MENU_DISABLED) || (r.options.outline.enable = !n.element.firstElementChild.classList.contains("vditor-menu--current"), r.outline.toggle(r, r.options.outline.enable));
                  }), n;
                }
                return t;
              }(De)
            ), vi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), yi = (
              /** @class */
              function(e) {
                vi(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n._bindEvent(r), n;
                }
                return t.prototype._bindEvent = function(r) {
                  var o = this;
                  this.element.children[0].addEventListener((0, i.Le)(), function(n) {
                    n.preventDefault();
                    var a = o.element.firstElementChild;
                    if (!a.classList.contains(g.g.CLASS_MENU_DISABLED)) {
                      var s = g.g.EDIT_TOOLBARS.concat(["both", "edit-mode", "devtools"]);
                      a.classList.contains("vditor-menu--current") ? (a.classList.remove("vditor-menu--current"), r.currentMode === "sv" ? (r.sv.element.style.display = "block", r.options.preview.mode === "both" ? r.preview.element.style.display = "block" : r.preview.element.style.display = "none") : (r[r.currentMode].element.parentElement.style.display = "block", r.preview.element.style.display = "none"), v(r.toolbar.elements, s), r.outline.render(r)) : (u(r.toolbar.elements, s), r.preview.element.style.display = "block", r.currentMode === "sv" ? r.sv.element.style.display = "none" : r[r.currentMode].element.parentElement.style.display = "none", r.preview.render(r), a.classList.add("vditor-menu--current"), E(r, ["subToolbar", "hint", "popover"]), setTimeout(function() {
                        r.outline.render(r);
                      }, r.options.preview.delay + 10)), se(r);
                    }
                  });
                }, t;
              }(De)
            ), wi = (
              /** @class */
              function() {
                function e(t) {
                  this.SAMPLE_RATE = 5e3, this.isRecording = !1, this.readyFlag = !1, this.leftChannel = [], this.rightChannel = [], this.recordingLength = 0;
                  var r;
                  if (typeof AudioContext < "u")
                    r = new AudioContext();
                  else if (webkitAudioContext)
                    r = new webkitAudioContext();
                  else
                    return;
                  this.DEFAULT_SAMPLE_RATE = r.sampleRate;
                  var o = r.createGain(), n = r.createMediaStreamSource(t);
                  n.connect(o), this.recorder = r.createScriptProcessor(2048, 2, 1), this.recorder.onaudioprocess = null, o.connect(this.recorder), this.recorder.connect(r.destination), this.readyFlag = !0;
                }
                return e.prototype.cloneChannelData = function(t, r) {
                  this.leftChannel.push(new Float32Array(t)), this.rightChannel.push(new Float32Array(r)), this.recordingLength += 2048;
                }, e.prototype.startRecordingNewWavFile = function() {
                  this.readyFlag && (this.isRecording = !0, this.leftChannel.length = this.rightChannel.length = 0, this.recordingLength = 0);
                }, e.prototype.stopRecording = function() {
                  this.isRecording = !1;
                }, e.prototype.buildWavFileBlob = function() {
                  for (var t = this.mergeBuffers(this.leftChannel), r = this.mergeBuffers(this.rightChannel), o = new Float32Array(t.length), n = 0; n < t.length; ++n)
                    o[n] = 0.5 * (t[n] + r[n]);
                  this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE && (o = this.downSampleBuffer(o, this.SAMPLE_RATE));
                  var a = 44 + o.length * 2, s = new ArrayBuffer(a), m = new DataView(s);
                  this.writeUTFBytes(m, 0, "RIFF"), m.setUint32(4, a, !0), this.writeUTFBytes(m, 8, "WAVE"), this.writeUTFBytes(m, 12, "fmt "), m.setUint32(16, 16, !0), m.setUint16(20, 1, !0), m.setUint16(22, 1, !0), m.setUint32(24, this.SAMPLE_RATE, !0), m.setUint32(28, this.SAMPLE_RATE * 2, !0), m.setUint16(32, 2, !0), m.setUint16(34, 16, !0);
                  var y = o.length * 2;
                  this.writeUTFBytes(m, 36, "data"), m.setUint32(40, y, !0);
                  for (var h = o.length, _ = 44, H = 1, q = 0; q < h; q++)
                    m.setInt16(_, o[q] * (32767 * H), !0), _ += 2;
                  return new Blob([m], { type: "audio/wav" });
                }, e.prototype.downSampleBuffer = function(t, r) {
                  if (r === this.DEFAULT_SAMPLE_RATE || r > this.DEFAULT_SAMPLE_RATE)
                    return t;
                  for (var o = this.DEFAULT_SAMPLE_RATE / r, n = Math.round(t.length / o), a = new Float32Array(n), s = 0, m = 0; s < a.length; ) {
                    for (var y = Math.round((s + 1) * o), h = 0, _ = 0, H = m; H < y && H < t.length; H++)
                      h += t[H], _++;
                    a[s] = h / _, s++, m = y;
                  }
                  return a;
                }, e.prototype.mergeBuffers = function(t) {
                  for (var r = new Float32Array(this.recordingLength), o = 0, n = t.length, a = 0; a < n; ++a) {
                    var s = t[a];
                    r.set(s, o), o += s.length;
                  }
                  return r;
                }, e.prototype.writeUTFBytes = function(t, r, o) {
                  for (var n = o.length, a = 0; a < n; a++)
                    t.setUint8(r + a, o.charCodeAt(a));
                }, e;
              }()
            ), ki = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ci = (
              /** @class */
              function(e) {
                ki(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return n._bindEvent(r), n;
                }
                return t.prototype._bindEvent = function(r) {
                  var o = this, n;
                  this.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    if (a.preventDefault(), !o.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED)) {
                      var s = r[r.currentMode].element;
                      if (!n) {
                        navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function(y) {
                          n = new wi(y), n.recorder.onaudioprocess = function(h) {
                            if (n.isRecording) {
                              var _ = h.inputBuffer.getChannelData(0), H = h.inputBuffer.getChannelData(1);
                              n.cloneChannelData(_, H);
                            }
                          }, n.startRecordingNewWavFile(), r.tip.show(window.VditorI18n.recording), s.setAttribute("contenteditable", "false"), o.element.children[0].classList.add("vditor-menu--current");
                        }).catch(function() {
                          r.tip.show(window.VditorI18n["record-tip"]);
                        });
                        return;
                      }
                      if (n.isRecording) {
                        n.stopRecording(), r.tip.hide();
                        var m = new File([n.buildWavFileBlob()], "record".concat((/* @__PURE__ */ new Date()).getTime(), ".wav"), { type: "video/webm" });
                        jr(r, [m]), o.element.children[0].classList.remove("vditor-menu--current");
                      } else
                        r.tip.show(window.VditorI18n.recording), s.setAttribute("contenteditable", "false"), n.startRecordingNewWavFile(), o.element.children[0].classList.add("vditor-menu--current");
                    }
                  });
                }, t;
              }(De)
            ), Si = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ei = (
              /** @class */
              function(e) {
                Si(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return u({ redo: n.element }, ["redo"]), n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), !n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) && r.undo.redo(r);
                  }), n;
                }
                return t;
              }(De)
            ), xi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ti = (
              /** @class */
              function(e) {
                xi(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this;
                  return u({ undo: n.element }, ["undo"]), n.element.children[0].addEventListener((0, i.Le)(), function(a) {
                    a.preventDefault(), !n.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED) && r.undo.undo(r);
                  }), n;
                }
                return t;
              }(De)
            ), Li = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Bi = (
              /** @class */
              function(e) {
                Li(t, e);
                function t(r, o) {
                  var n = e.call(this, r, o) || this, a = '<input type="file"';
                  return r.options.upload.multiple && (a += ' multiple="multiple"'), r.options.upload.accept && (a += ' accept="'.concat(r.options.upload.accept, '"')), n.element.children[0].innerHTML = "".concat(o.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>').concat(a, ">"), n._bindEvent(r), n;
                }
                return t.prototype._bindEvent = function(r) {
                  var o = this;
                  this.element.children[0].addEventListener((0, i.Le)(), function(n) {
                    if (o.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED)) {
                      n.stopPropagation(), n.preventDefault();
                      return;
                    }
                  }), this.element.querySelector("input").addEventListener("change", function(n) {
                    if (o.element.firstElementChild.classList.contains(g.g.CLASS_MENU_DISABLED)) {
                      n.stopPropagation(), n.preventDefault();
                      return;
                    }
                    n.target.files.length !== 0 && jr(r, n.target.files, n.target);
                  });
                }, t;
              }(De)
            ), Ai = (
              /** @class */
              function() {
                function e(t) {
                  var r = this, o = t.options;
                  this.elements = {}, this.element = document.createElement("div"), this.element.className = "vditor-toolbar", o.toolbar.forEach(function(n, a) {
                    var s = r.genItem(t, n, a);
                    if (r.element.appendChild(s), n.toolbar) {
                      var m = document.createElement("div");
                      m.className = "vditor-hint vditor-panel--arrow", m.addEventListener((0, i.Le)(), function(y) {
                        m.style.display = "none";
                      }), n.toolbar.forEach(function(y, h) {
                        y.level = 2, m.appendChild(r.genItem(t, y, a + h));
                      }), s.appendChild(m), S(t, m, s.children[0]);
                    }
                  }), t.options.toolbarConfig.hide && this.element.classList.add("vditor-toolbar--hide"), t.options.toolbarConfig.pin && this.element.classList.add("vditor-toolbar--pin"), t.options.counter.enable && (t.counter = new Fa(t), this.element.appendChild(t.counter.element));
                }
                return e.prototype.updateConfig = function(t, r) {
                  t.options.toolbarConfig = Object.assign({
                    hide: !1,
                    pin: !1
                  }, r), t.options.toolbarConfig.hide ? this.element.classList.add("vditor-toolbar--hide") : this.element.classList.remove("vditor-toolbar--hide"), t.options.toolbarConfig.pin ? this.element.classList.add("vditor-toolbar--pin") : this.element.classList.remove("vditor-toolbar--pin");
                }, e.prototype.genItem = function(t, r, o) {
                  var n;
                  switch (r.name) {
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
                      n = new De(t, r);
                      break;
                    case "emoji":
                      n = new Ga(t, r);
                      break;
                    case "headings":
                      n = new oi(t, r);
                      break;
                    case "|":
                      n = new Ka();
                      break;
                    case "br":
                      n = new Na();
                      break;
                    case "undo":
                      n = new Ti(t, r);
                      break;
                    case "redo":
                      n = new Ei(t, r);
                      break;
                    case "help":
                      n = new ai(t, r);
                      break;
                    case "both":
                      n = new Ha(t, r);
                      break;
                    case "preview":
                      n = new yi(t, r);
                      break;
                    case "fullscreen":
                      n = new ti(t, r);
                      break;
                    case "upload":
                      n = new Bi(t, r);
                      break;
                    case "record":
                      n = new Ci(t, r);
                      break;
                    case "info":
                      n = new ci(t, r);
                      break;
                    case "edit-mode":
                      n = new ua(t, r);
                      break;
                    case "devtools":
                      n = new Ua(t, r);
                      break;
                    case "outdent":
                      n = new mi(t, r);
                      break;
                    case "indent":
                      n = new li(t, r);
                      break;
                    case "outline":
                      n = new bi(t, r);
                      break;
                    case "insert-after":
                      n = new ui(t, r);
                      break;
                    case "insert-before":
                      n = new pi(t, r);
                      break;
                    case "code-theme":
                      n = new Pa(t, r);
                      break;
                    case "content-theme":
                      n = new ja(t, r);
                      break;
                    case "export":
                      n = new Qa(t, r);
                      break;
                    default:
                      n = new Wa(t, r);
                      break;
                  }
                  if (n) {
                    var a = r.name;
                    return (a === "br" || a === "|") && (a = a + o), this.elements[a] = n.element, n.element;
                  }
                }, e;
              }()
            ), Mi = L(173), _i = (
              /** @class */
              function() {
                function e() {
                  this.stackSize = 50, this.resetStack(), this.dmp = new Mi();
                }
                return e.prototype.clearStack = function(t) {
                  this.resetStack(), this.resetIcon(t);
                }, e.prototype.resetIcon = function(t) {
                  t.toolbar && (this[t.currentMode].undoStack.length > 1 ? v(t.toolbar.elements, ["undo"]) : u(t.toolbar.elements, ["undo"]), this[t.currentMode].redoStack.length !== 0 ? v(t.toolbar.elements, ["redo"]) : u(t.toolbar.elements, ["redo"]));
                }, e.prototype.undo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false" && !(this[t.currentMode].undoStack.length < 2)) {
                    var r = this[t.currentMode].undoStack.pop();
                    r && (this[t.currentMode].redoStack.push(r), this.renderDiff(r, t), this[t.currentMode].hasUndo = !0, E(t, ["hint"]));
                  }
                }, e.prototype.redo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false") {
                    var r = this[t.currentMode].redoStack.pop();
                    r && (this[t.currentMode].undoStack.push(r), this.renderDiff(r, t, !0));
                  }
                }, e.prototype.recordFirstPosition = function(t, r) {
                  if (getSelection().rangeCount !== 0 && !(this[t.currentMode].undoStack.length !== 1 || this[t.currentMode].undoStack[0].length === 0 || this[t.currentMode].redoStack.length > 0) && !((0, i.vU)() && r.key === "Backspace") && !(0, i.G6)()) {
                    var o = this.addCaret(t);
                    o.replace("<wbr>", "").replace(" vditor-ir__node--expand", "") === this[t.currentMode].undoStack[0][0].diffs[0][1].replace("<wbr>", "") && (this[t.currentMode].undoStack[0][0].diffs[0][1] = o, this[t.currentMode].lastText = o);
                  }
                }, e.prototype.addToUndoStack = function(t) {
                  var r = this.addCaret(t, !0), o = this.dmp.diff_main(r, this[t.currentMode].lastText, !0), n = this.dmp.patch_make(r, this[t.currentMode].lastText, o);
                  n.length === 0 && this[t.currentMode].undoStack.length > 0 || (this[t.currentMode].lastText = r, this[t.currentMode].undoStack.push(n), this[t.currentMode].undoStack.length > this.stackSize && this[t.currentMode].undoStack.shift(), this[t.currentMode].hasUndo && (this[t.currentMode].redoStack = [], this[t.currentMode].hasUndo = !1, u(t.toolbar.elements, ["redo"])), this[t.currentMode].undoStack.length > 1 && v(t.toolbar.elements, ["undo"]));
                }, e.prototype.renderDiff = function(t, r, o) {
                  o === void 0 && (o = !1);
                  var n;
                  if (o) {
                    var a = this.dmp.patch_deepCopy(t).reverse();
                    a.forEach(function(m) {
                      m.diffs.forEach(function(y) {
                        y[0] = -y[0];
                      });
                    }), n = this.dmp.patch_apply(a, this[r.currentMode].lastText)[0];
                  } else
                    n = this.dmp.patch_apply(t, this[r.currentMode].lastText)[0];
                  if (this[r.currentMode].lastText = n, r[r.currentMode].element.innerHTML = n, r.currentMode !== "sv" && (r[r.currentMode].element.querySelectorAll(".vditor-".concat(r.currentMode, "__preview")).forEach(function(m) {
                    m.parentElement.querySelector(".language-echarts") && (r.currentMode === "ir" ? m.parentElement.outerHTML = r.lute.SpinVditorIRDOM(m.parentElement.outerHTML) : m.parentElement.outerHTML = r.lute.SpinVditorDOM(m.parentElement.outerHTML));
                  }), r[r.currentMode].element.querySelectorAll(".vditor-".concat(r.currentMode, "__preview[data-render='2']")).forEach(function(m) {
                    he(m, r);
                  })), r[r.currentMode].element.querySelector("wbr"))
                    (0, R.ib)(r[r.currentMode].element, r[r.currentMode].element.ownerDocument.createRange()), Oe(r);
                  else {
                    var s = getSelection().getRangeAt(0);
                    s.setEndBefore(r[r.currentMode].element), s.collapse(!1);
                  }
                  Re(r), ke(r, {
                    enableAddUndoStack: !1,
                    enableHint: !1,
                    enableInput: !0
                  }), Mt(r), r[r.currentMode].element.querySelectorAll(".vditor-".concat(r.currentMode, "__preview[data-render='2']")).forEach(function(m) {
                    he(m, r);
                  }), this[r.currentMode].undoStack.length > 1 ? v(r.toolbar.elements, ["undo"]) : u(r.toolbar.elements, ["undo"]), this[r.currentMode].redoStack.length !== 0 ? v(r.toolbar.elements, ["redo"]) : u(r.toolbar.elements, ["redo"]);
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
                }, e.prototype.addCaret = function(t, r) {
                  r === void 0 && (r = !1);
                  var o;
                  if (getSelection().rangeCount !== 0 && !t[t.currentMode].element.querySelector("wbr")) {
                    var n = getSelection().getRangeAt(0);
                    if (t[t.currentMode].element.contains(n.startContainer)) {
                      o = n.cloneRange();
                      var a = document.createElement("span");
                      a.className = "vditor-wbr", n.insertNode(a);
                    }
                  }
                  var s = t[t.currentMode].element.cloneNode(!0);
                  s.querySelectorAll(".vditor-".concat(t.currentMode, "__preview[data-render='1']")).forEach(function(y) {
                    y.firstElementChild && (y.firstElementChild.classList.contains("language-echarts") || y.firstElementChild.classList.contains("language-plantuml") || y.firstElementChild.classList.contains("language-mindmap") ? (y.firstElementChild.removeAttribute("_echarts_instance_"), y.firstElementChild.removeAttribute("data-processed"), y.firstElementChild.innerHTML = y.previousElementSibling.firstElementChild.innerHTML, y.setAttribute("data-render", "2")) : y.firstElementChild.classList.contains("language-math") && (y.setAttribute("data-render", "2"), y.firstElementChild.textContent = y.firstElementChild.getAttribute("data-math"), y.firstElementChild.removeAttribute("data-math")));
                  });
                  var m = s.innerHTML;
                  return t[t.currentMode].element.querySelectorAll(".vditor-wbr").forEach(function(y) {
                    y.remove();
                  }), r && o && (0, R.Hc)(o), m.replace('<span class="vditor-wbr"></span>', "<wbr>");
                }, e;
              }()
            ), Di = L(673), Ri = (
              /** @class */
              function() {
                function e(t) {
                  this.defaultOptions = {
                    rtl: !1,
                    after: void 0,
                    cache: {
                      enable: !0
                    },
                    cdn: g.g.CDN,
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
                      emojiPath: "".concat(g.g.CDN, "/dist/images/emoji"),
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
                      hljs: g.g.HLJS_OPTIONS,
                      markdown: g.g.MARKDOWN_OPTIONS,
                      math: g.g.MATH_OPTIONS,
                      maxWidth: 800,
                      mode: "both",
                      theme: g.g.THEME_OPTIONS,
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
                      filename: function(r) {
                        return r.replace(/\W/g, "");
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
                  var t, r, o, n, a, s, m, y, h;
                  this.options && (this.options.toolbar ? this.options.toolbar = this.mergeToolbar(this.options.toolbar) : this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar), !((r = (t = this.options.preview) === null || t === void 0 ? void 0 : t.theme) === null || r === void 0) && r.list && (this.defaultOptions.preview.theme.list = this.options.preview.theme.list), !((a = (n = (o = this.options.preview) === null || o === void 0 ? void 0 : o.render) === null || n === void 0 ? void 0 : n.media) === null || a === void 0) && a.enable && (this.defaultOptions.preview.render.media.enable = this.options.preview.render.media.enable), !((s = this.options.hint) === null || s === void 0) && s.emoji && (this.defaultOptions.hint.emoji = this.options.hint.emoji), this.options.comment && (this.defaultOptions.comment = this.options.comment), this.options.cdn && (!((y = (m = this.options.preview) === null || m === void 0 ? void 0 : m.theme) === null || y === void 0) && y.path || (this.defaultOptions.preview.theme.path = "".concat(this.options.cdn, "/dist/css/content-theme")), !((h = this.options.hint) === null || h === void 0) && h.emojiPath || (this.defaultOptions.hint.emojiPath = "".concat(this.options.cdn, "/dist/images/emoji"))));
                  var _ = (0, Di.T)(this.defaultOptions, this.options);
                  if (_.cache.enable && !_.cache.id)
                    throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                  return _;
                }, e.prototype.mergeToolbar = function(t) {
                  var r = this, o = [
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
                  ], n = [];
                  return t.forEach(function(a) {
                    var s = a;
                    o.forEach(function(m) {
                      typeof a == "string" && m.name === a && (s = m), typeof a == "object" && m.name === a.name && (s = Object.assign({}, m, a));
                    }), a.toolbar && (s.toolbar = r.mergeToolbar(a.toolbar)), n.push(s);
                  }), n;
                }, e;
              }()
            ), Oi = (
              /** @class */
              function() {
                function e(t) {
                  var r = this;
                  this.composingLock = !1, this.commentIds = [];
                  var o = document.createElement("div");
                  o.className = "vditor-wysiwyg", o.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(t.options.placeholder, `"
 contenteditable="true" spellcheck="false"></pre>
<div class="vditor-panel vditor-panel--none"></div>
<div class="vditor-panel vditor-panel--none">
    <button type="button" aria-label="`).concat(window.VditorI18n.comment, `" class="vditor-icon vditor-tooltipped vditor-tooltipped__n">
        <svg><use xlink:href="#vditor-icon-comment"></use></svg>
    </button>
</div>`), this.element = o.firstElementChild, this.popover = o.firstElementChild.nextElementSibling, this.selectPopover = o.lastElementChild, this.bindEvent(t), Dr(t, this.element), ko(t, this.element), Rr(t, this.element), $r(t, this.element), Pr(t, this.element), Or(t, this.element), Hr(t, this.element, this.copy), Nr(t, this.element, this.copy), t.options.comment.enable && (this.selectPopover.querySelector("button").onclick = function() {
                    var n = Lute.NewNodeID(), a = getSelection().getRangeAt(0), s = a.cloneRange(), m = a.extractContents(), y, h, _ = !1, H = !1;
                    m.childNodes.forEach(function(V, te) {
                      var ee = !1;
                      if (V.nodeType === 3 ? ee = !0 : V.classList.contains("vditor-comment") ? V.classList.contains("vditor-comment") && V.setAttribute("data-cmtids", V.getAttribute("data-cmtids") + " " + n) : ee = !0, ee)
                        if (V.nodeType !== 3 && V.getAttribute("data-block") === "0" && te === 0 && s.startOffset > 0)
                          V.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(n, '">').concat(V.innerHTML, "</span>"), y = V;
                        else if (V.nodeType !== 3 && V.getAttribute("data-block") === "0" && te === m.childNodes.length - 1 && s.endOffset < s.endContainer.textContent.length)
                          V.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(n, '">').concat(V.innerHTML, "</span>"), h = V;
                        else if (V.nodeType !== 3 && V.getAttribute("data-block") === "0")
                          te === 0 ? _ = !0 : te === m.childNodes.length - 1 && (H = !0), V.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(n, '">').concat(V.innerHTML, "</span>");
                        else {
                          var K = document.createElement("span");
                          K.classList.add("vditor-comment"), K.setAttribute("data-cmtids", n), V.parentNode.insertBefore(K, V), K.appendChild(V);
                        }
                    });
                    var q = (0, l.F9)(s.startContainer);
                    q && (y ? (q.insertAdjacentHTML("beforeend", y.innerHTML), y.remove()) : q.textContent.trim().replace(g.g.ZWSP, "") === "" && _ && q.remove());
                    var X = (0, l.F9)(s.endContainer);
                    X && (h ? (X.insertAdjacentHTML("afterbegin", h.innerHTML), h.remove()) : X.textContent.trim().replace(g.g.ZWSP, "") === "" && H && X.remove()), a.insertNode(m), t.options.comment.add(n, a.toString(), r.getComments(t, !0)), Le(t, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    }), r.hideComment();
                  });
                }
                return e.prototype.getComments = function(t, r) {
                  var o = this;
                  if (r === void 0 && (r = !1), t.currentMode === "wysiwyg" && t.options.comment.enable) {
                    this.commentIds = [], this.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      o.commentIds = o.commentIds.concat(a.getAttribute("data-cmtids").split(" "));
                    }), this.commentIds = Array.from(new Set(this.commentIds));
                    var n = [];
                    if (r)
                      return this.commentIds.forEach(function(a) {
                        n.push({
                          id: a,
                          top: o.element.querySelector('.vditor-comment[data-cmtids="'.concat(a, '"]')).offsetTop
                        });
                      }), n;
                  } else
                    return [];
                }, e.prototype.triggerRemoveComment = function(t) {
                  var r = function(a, s) {
                    var m = new Set(s);
                    return a.filter(function(y) {
                      return !m.has(y);
                    });
                  };
                  if (t.currentMode === "wysiwyg" && t.options.comment.enable && t.wysiwyg.commentIds.length > 0) {
                    var o = JSON.parse(JSON.stringify(this.commentIds));
                    this.getComments(t);
                    var n = r(o, this.commentIds);
                    n.length > 0 && t.options.comment.remove(n);
                  }
                }, e.prototype.showComment = function() {
                  var t = (0, R.Ny)(this.element);
                  this.selectPopover.setAttribute("style", "left:".concat(t.left, "px;display:block;top:").concat(Math.max(-8, t.top - 21), "px"));
                }, e.prototype.hideComment = function() {
                  this.selectPopover.setAttribute("style", "display:none");
                }, e.prototype.unbindListener = function() {
                  window.removeEventListener("scroll", this.scrollListener);
                }, e.prototype.copy = function(t, r) {
                  var o = getSelection().getRangeAt(0);
                  if (o.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var n = (0, l.lG)(o.startContainer, "CODE"), a = (0, l.lG)(o.endContainer, "CODE");
                    if (n && a && a.isSameNode(n)) {
                      var s = "";
                      n.parentElement.tagName === "PRE" ? s = o.toString() : s = "`" + o.toString() + "`", t.clipboardData.setData("text/plain", s), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var m = (0, l.lG)(o.startContainer, "A"), y = (0, l.lG)(o.endContainer, "A");
                    if (m && y && y.isSameNode(m)) {
                      var h = m.getAttribute("title") || "";
                      h && (h = ' "'.concat(h, '"')), t.clipboardData.setData("text/plain", "[".concat(o.toString(), "](").concat(m.getAttribute("href")).concat(h, ")")), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var _ = document.createElement("div");
                    _.appendChild(o.cloneContents()), t.clipboardData.setData("text/plain", r.lute.VditorDOM2Md(_.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var r = this;
                  this.unbindListener(), window.addEventListener("scroll", this.scrollListener = function() {
                    if (E(t, ["hint"]), !(r.popover.style.display !== "block" || r.selectPopover.style.display !== "block")) {
                      var o = parseInt(r.popover.getAttribute("data-top"), 10);
                      if (t.options.height !== "auto") {
                        if (t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0) {
                          var n = Math.max(window.scrollY - t.element.offsetTop - 8, Math.min(o - t.wysiwyg.element.scrollTop, r.element.clientHeight - 21)) + "px";
                          r.popover.style.display === "block" && (r.popover.style.top = n), r.selectPopover.style.display === "block" && (r.selectPopover.style.top = n);
                        }
                        return;
                      } else if (!t.options.toolbarConfig.pin)
                        return;
                      var a = Math.max(o, window.scrollY - t.element.offsetTop - 8) + "px";
                      r.popover.style.display === "block" && (r.popover.style.top = a), r.selectPopover.style.display === "block" && (r.selectPopover.style.top = a);
                    }
                  }), this.element.addEventListener("scroll", function() {
                    if (E(t, ["hint"]), t.options.comment && t.options.comment.enable && t.options.comment.scroll && t.options.comment.scroll(t.wysiwyg.element.scrollTop), r.popover.style.display === "block") {
                      var o = parseInt(r.popover.getAttribute("data-top"), 10) - t.wysiwyg.element.scrollTop, n = -8;
                      t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0 && (n = window.scrollY - t.element.offsetTop + n);
                      var a = Math.max(n, Math.min(o, r.element.clientHeight - 21)) + "px";
                      r.popover.style.top = a, r.selectPopover.style.top = a;
                    }
                  }), this.element.addEventListener("paste", function(o) {
                    ur(t, o, {
                      pasteCode: function(n) {
                        var a = (0, R.zh)(t), s = document.createElement("template");
                        s.innerHTML = n, a.insertNode(s.content.cloneNode(!0));
                        var m = (0, l.a1)(a.startContainer, "data-block", "0");
                        m ? m.outerHTML = t.lute.SpinVditorDOM(m.outerHTML) : t.wysiwyg.element.innerHTML = t.lute.SpinVditorDOM(t.wysiwyg.element.innerHTML), (0, R.ib)(t.wysiwyg.element, a);
                      }
                    });
                  }), this.element.addEventListener("compositionstart", function() {
                    r.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(o) {
                    var n = (0, A.W)(getSelection().getRangeAt(0).startContainer);
                    if (n && n.textContent === "") {
                      Re(t);
                      return;
                    }
                    (0, i.vU)() || lr(t, getSelection().getRangeAt(0).cloneRange(), o), r.composingLock = !1;
                  }), this.element.addEventListener("input", function(o) {
                    if (!(o.inputType === "deleteByDrag" || o.inputType === "insertFromDrop")) {
                      if (r.preventInput) {
                        r.preventInput = !1, Le(t);
                        return;
                      }
                      if (r.composingLock || o.data === "‘" || o.data === "“" || o.data === "《") {
                        Le(t);
                        return;
                      }
                      var n = getSelection().getRangeAt(0), a = (0, l.F9)(n.startContainer);
                      if (a || (Ar(t, n), a = (0, l.F9)(n.startContainer)), !!a) {
                        for (var s = (0, R.im)(a, t.wysiwyg.element, n).start, m = !0, y = s - 1; y > a.textContent.substr(0, s).lastIndexOf(`
`); y--)
                          if (a.textContent.charAt(y) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                          a.textContent.charAt(y) !== "	") {
                            m = !1;
                            break;
                          }
                        s === 0 && (m = !1);
                        for (var h = !0, y = s - 1; y < a.textContent.length; y++)
                          if (a.textContent.charAt(y) !== " " && a.textContent.charAt(y) !== `
`) {
                            h = !1;
                            break;
                          }
                        h && /^#{1,6} $/.test(a.textContent) && (h = !1);
                        var _ = (0, A.W)(getSelection().getRangeAt(0).startContainer);
                        if (_ && _.textContent === "" && (Re(t), _.remove()), m && a.getAttribute("data-type") !== "code-block" || h || Wr(a.innerHTML) || zr(a.innerHTML) && a.previousElementSibling) {
                          typeof t.options.input == "function" && t.options.input(B(t));
                          return;
                        }
                        o.inputType === "insertParagraph" && r.element.innerHTML === "<p><br></p><p><br></p>" && a.previousElementSibling.remove(), lr(t, n, o);
                      }
                    }
                  }), this.element.addEventListener("click", function(o) {
                    if (o.target.tagName === "INPUT") {
                      var n = o.target;
                      n.checked ? n.setAttribute("checked", "checked") : n.removeAttribute("checked"), r.preventInput = !0, getSelection().rangeCount > 0 && (0, R.Hc)(getSelection().getRangeAt(0)), Le(t);
                      return;
                    }
                    if (o.target.tagName === "IMG" && // plantuml 图片渲染不进行提示
                    !o.target.parentElement.classList.contains("vditor-wysiwyg__preview")) {
                      o.target.getAttribute("data-type") === "link-ref" ? yo(t, o.target) : la(o, t);
                      return;
                    }
                    var a = (0, l.lG)(o.target, "A");
                    if (a) {
                      t.options.link.click ? t.options.link.click(a) : t.options.link.isOpen && window.open(a.getAttribute("href")), o.preventDefault();
                      return;
                    }
                    var s = (0, R.zh)(t);
                    if (o.target.isEqualNode(r.element) && r.element.lastElementChild && s.collapsed) {
                      var m = r.element.lastElementChild.getBoundingClientRect();
                      o.y > m.top + m.height && (r.element.lastElementChild.tagName === "P" && r.element.lastElementChild.textContent.trim().replace(g.g.ZWSP, "") === "" ? (s.selectNodeContents(r.element.lastElementChild), s.collapse(!1)) : (r.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(g.g.ZWSP, "<wbr></p>")), (0, R.ib)(r.element, s)));
                    }
                    bt(t);
                    var y = (0, l.fb)(o.target, "vditor-wysiwyg__preview");
                    y || (y = (0, l.fb)((0, R.zh)(t).startContainer, "vditor-wysiwyg__preview")), y && Wt(y, t), Pe(o, t);
                  }), this.element.addEventListener("keyup", function(o) {
                    if (!(o.isComposing || (0, i.yl)(o))) {
                      o.key === "Enter" && Oe(t), (o.key === "Backspace" || o.key === "Delete") && t.wysiwyg.element.innerHTML !== "" && t.wysiwyg.element.childNodes.length === 1 && t.wysiwyg.element.firstElementChild && t.wysiwyg.element.firstElementChild.tagName === "P" && t.wysiwyg.element.firstElementChild.childElementCount === 0 && (t.wysiwyg.element.textContent === "" || t.wysiwyg.element.textContent === `
`) && (t.wysiwyg.element.innerHTML = "");
                      var n = (0, R.zh)(t);
                      if (o.key === "Backspace" && (0, i.vU)() && n.startContainer.textContent === `
` && n.startOffset === 1 && (n.startContainer.textContent = ""), Ar(t, n), bt(t), !(o.key !== "ArrowDown" && o.key !== "ArrowRight" && o.key !== "Backspace" && o.key !== "ArrowLeft" && o.key !== "ArrowUp")) {
                        (o.key === "ArrowLeft" || o.key === "ArrowRight") && t.hint.render(t);
                        var a = (0, l.fb)(n.startContainer, "vditor-wysiwyg__preview");
                        if (!a && n.startContainer.nodeType !== 3 && n.startOffset > 0) {
                          var s = n.startContainer;
                          s.classList.contains("vditor-wysiwyg__block") && (a = s.lastElementChild);
                        }
                        if (a) {
                          var m = a.previousElementSibling;
                          if (m.style.display === "none") {
                            o.key === "ArrowDown" || o.key === "ArrowRight" ? Wt(a, t) : Wt(a, t, !1);
                            return;
                          }
                          var y = a.previousElementSibling;
                          if (y.tagName === "PRE" && (y = y.firstElementChild), o.key === "ArrowDown" || o.key === "ArrowRight") {
                            var s = a.parentElement, h = na(s);
                            if (h && h.nodeType !== 3) {
                              var _ = h.querySelector(".vditor-wysiwyg__preview");
                              if (_) {
                                Wt(_, t);
                                return;
                              }
                            }
                            if (h.nodeType === 3) {
                              for (; h.textContent.length === 0 && h.nextSibling; )
                                h = h.nextSibling;
                              n.setStart(h, 1);
                            } else
                              n.setStart(h.firstChild, 0);
                          } else
                            n.selectNodeContents(y), n.collapse(!1);
                        }
                      }
                    }
                  });
                }, e;
              }()
            ), Hi = /* @__PURE__ */ function() {
              var e = function(t, r) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
                  o.__proto__ = n;
                } || function(o, n) {
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
                }, e(t, r);
              };
              return function(t, r) {
                if (typeof r != "function" && r !== null)
                  throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);
                function o() {
                  this.constructor = t;
                }
                t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
              };
            }(), Ni = (
              /** @class */
              function(e) {
                Hi(t, e);
                function t(r, o) {
                  var n = e.call(this) || this;
                  if (n.isDestroyed = !1, n.version = g.H, typeof r == "string") {
                    if (o ? o.cache ? o.cache.id || (o.cache.id = "vditor".concat(r)) : o.cache = { id: "vditor".concat(r) } : o = {
                      cache: {
                        id: "vditor".concat(r)
                      }
                    }, !document.getElementById(r))
                      return n.showErrorTip("Failed to get element by id: ".concat(r)), n;
                    r = document.getElementById(r);
                  }
                  var a = new Ri(o), s = a.merge();
                  if (s.i18n)
                    window.VditorI18n = s.i18n, n.init(r, s);
                  else if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(s.lang)) {
                    var m = "vditorI18nScript", y = m + s.lang;
                    document.querySelectorAll('head script[id^="'.concat(m, '"]')).forEach(function(h) {
                      h.id !== y && document.head.removeChild(h);
                    }), (0, M.G)("".concat(s.cdn, "/dist/js/i18n/").concat(s.lang, ".js"), y).then(function() {
                      n.init(r, s);
                    }).catch(function(h) {
                      n.showErrorTip("GET ".concat(s.cdn, "/dist/js/i18n/").concat(s.lang, ".js net::ERR_ABORTED 404 (Not Found)"));
                    });
                  } else
                    throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                  return n;
                }
                return t.prototype.showErrorTip = function(r) {
                  var o = new Zo();
                  document.body.appendChild(o.element), o.show(r, 0);
                }, t.prototype.updateToolbarConfig = function(r) {
                  this.vditor.toolbar.updateConfig(this.vditor, r);
                }, t.prototype.setTheme = function(r, o, n, a) {
                  this.vditor.options.theme = r, ge(this.vditor), o && (this.vditor.options.preview.theme.current = o, (0, z.Z)(o, a || this.vditor.options.preview.theme.path)), n && (this.vditor.options.preview.hljs.style = n, (0, Yo.Y)(n, this.vditor.options.cdn));
                }, t.prototype.getValue = function() {
                  return B(this.vditor);
                }, t.prototype.getCurrentMode = function() {
                  return this.vditor.currentMode;
                }, t.prototype.focus = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.focus() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.focus() : this.vditor.currentMode === "ir" && this.vditor.ir.element.focus();
                }, t.prototype.blur = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.blur() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.blur() : this.vditor.currentMode === "ir" && this.vditor.ir.element.blur();
                }, t.prototype.disabled = function() {
                  E(this.vditor, ["subToolbar", "hint", "popover"]), u(this.vditor.toolbar.elements, g.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "false");
                }, t.prototype.enable = function() {
                  v(this.vditor.toolbar.elements, g.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor.undo.resetIcon(this.vditor), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "true");
                }, t.prototype.getSelection = function() {
                  if (this.vditor.currentMode === "wysiwyg")
                    return Ut(this.vditor.wysiwyg.element);
                  if (this.vditor.currentMode === "sv")
                    return Ut(this.vditor.sv.element);
                  if (this.vditor.currentMode === "ir")
                    return Ut(this.vditor.ir.element);
                }, t.prototype.renderPreview = function(r) {
                  this.vditor.preview.render(this.vditor, r);
                }, t.prototype.getCursorPosition = function() {
                  return (0, R.Ny)(this.vditor[this.vditor.currentMode].element);
                }, t.prototype.isUploading = function() {
                  return this.vditor.upload.isUploading;
                }, t.prototype.clearCache = function() {
                  this.vditor.options.cache.enable && (0, i.pK)() && localStorage.removeItem(this.vditor.options.cache.id);
                }, t.prototype.disabledCache = function() {
                  this.vditor.options.cache.enable = !1;
                }, t.prototype.enableCache = function() {
                  if (!this.vditor.options.cache.id)
                    throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                  this.vditor.options.cache.enable = !0;
                }, t.prototype.html2md = function(r) {
                  return this.vditor.lute.HTML2Md(r);
                }, t.prototype.exportJSON = function(r) {
                  return this.vditor.lute.RenderJSON(r);
                }, t.prototype.getHTML = function() {
                  return Go(this.vditor);
                }, t.prototype.tip = function(r, o) {
                  this.vditor.tip.show(r, o);
                }, t.prototype.setPreviewMode = function(r) {
                  Kr(r, this.vditor);
                }, t.prototype.deleteValue = function() {
                  window.getSelection().isCollapsed || document.execCommand("delete", !1);
                }, t.prototype.updateValue = function(r) {
                  document.execCommand("insertHTML", !1, r);
                }, t.prototype.insertValue = function(r, o) {
                  o === void 0 && (o = !0);
                  var n = (0, R.zh)(this.vditor);
                  n.collapse(!0);
                  var a = document.createElement("template");
                  a.innerHTML = r, n.insertNode(a.content.cloneNode(!0)), n.collapse(!1), this.vditor.currentMode === "sv" ? (this.vditor.sv.preventInput = !0, o && Se(this.vditor)) : this.vditor.currentMode === "wysiwyg" ? o && lr(this.vditor, getSelection().getRangeAt(0)) : this.vditor.currentMode === "ir" && (this.vditor.ir.preventInput = !0, o && ze(this.vditor, getSelection().getRangeAt(0), !0));
                }, t.prototype.insertMD = function(r) {
                  this.vditor.currentMode === "ir" ? (0, R.oC)(this.vditor.lute.Md2VditorIRDOM(r), this.vditor) : this.vditor.currentMode === "wysiwyg" ? (0, R.oC)(this.vditor.lute.Md2VditorDOM(r), this.vditor) : Ir(this.vditor, r), this.vditor.outline.render(this.vditor), ke(this.vditor);
                }, t.prototype.setValue = function(r, o) {
                  var n = this;
                  o === void 0 && (o = !1), this.vditor.currentMode === "sv" ? (this.vditor.sv.element.innerHTML = "<div data-block='0'>".concat(this.vditor.lute.SpinVditorSVDOM(r), "</div>"), $e(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })) : this.vditor.currentMode === "wysiwyg" ? wo(this.vditor, r, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }) : (this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(r), this.vditor.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(a) {
                    he(a, n.vditor);
                  }), lt(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })), this.vditor.outline.render(this.vditor), r || (E(this.vditor, ["emoji", "headings", "submenu", "hint"]), this.vditor.wysiwyg.popover && (this.vditor.wysiwyg.popover.style.display = "none"), this.clearCache()), o && this.clearStack();
                }, t.prototype.insertEmptyBlock = function(r) {
                  Kt(this.vditor, r);
                }, t.prototype.clearStack = function() {
                  this.vditor.undo.clearStack(this.vditor), this.vditor.undo.addToUndoStack(this.vditor);
                }, t.prototype.destroy = function() {
                  this.vditor.element.innerHTML = this.vditor.originalInnerHTML, this.vditor.element.classList.remove("vditor"), this.vditor.element.removeAttribute("style");
                  var r = document.getElementById("vditorIconScript");
                  r && r.remove(), this.clearCache(), ho(), this.vditor.wysiwyg.unbindListener(), this.vditor.options.after = void 0, this.isDestroyed = !0;
                }, t.prototype.getCommentIds = function() {
                  return this.vditor.currentMode !== "wysiwyg" ? [] : this.vditor.wysiwyg.getComments(this.vditor, !0);
                }, t.prototype.hlCommentIds = function(r) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var o = function(n) {
                      n.classList.remove("vditor-comment--hover"), r.forEach(function(a) {
                        n.getAttribute("data-cmtids").indexOf(a) > -1 && n.classList.add("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(n) {
                      o(n);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(n) {
                      o(n);
                    });
                  }
                }, t.prototype.unHlCommentIds = function(r) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var o = function(n) {
                      r.forEach(function(a) {
                        n.getAttribute("data-cmtids").indexOf(a) > -1 && n.classList.remove("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(n) {
                      o(n);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(n) {
                      o(n);
                    });
                  }
                }, t.prototype.removeCommentIds = function(r) {
                  var o = this;
                  if (this.vditor.currentMode === "wysiwyg") {
                    var n = function(a, s) {
                      var m = a.getAttribute("data-cmtids").split(" ");
                      m.find(function(y, h) {
                        if (y === s)
                          return m.splice(h, 1), !0;
                      }), m.length === 0 ? (a.outerHTML = a.innerHTML, (0, R.zh)(o.vditor).collapse(!0)) : a.setAttribute("data-cmtids", m.join(" "));
                    };
                    r.forEach(function(a) {
                      o.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(s) {
                        n(s, a);
                      }), o.vditor.preview.element.style.display !== "none" && o.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(s) {
                        n(s, a);
                      });
                    }), Le(this.vditor, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    });
                  }
                }, t.prototype.init = function(r, o) {
                  var n = this;
                  this.isDestroyed || (this.vditor = {
                    currentMode: o.mode,
                    element: r,
                    hint: new Ta(o.hint.extend),
                    lute: void 0,
                    options: o,
                    originalInnerHTML: r.innerHTML,
                    outline: new Aa(window.VditorI18n.outline),
                    tip: new Zo()
                  }, this.vditor.sv = new Ra(this.vditor), this.vditor.undo = new _i(), this.vditor.wysiwyg = new Oi(this.vditor), this.vditor.ir = new La(this.vditor), this.vditor.toolbar = new Ai(this.vditor), o.resize.enable && (this.vditor.resize = new Da(this.vditor)), this.vditor.toolbar.elements.devtools && (this.vditor.devtools = new c()), (o.upload.url || o.upload.handler) && (this.vditor.upload = new ha()), (0, M.G)(o._lutePath || "".concat(o.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    n.vditor.lute = (0, Ba.X)({
                      autoSpace: n.vditor.options.preview.markdown.autoSpace,
                      gfmAutoLink: n.vditor.options.preview.markdown.gfmAutoLink,
                      codeBlockPreview: n.vditor.options.preview.markdown.codeBlockPreview,
                      emojiSite: n.vditor.options.hint.emojiPath,
                      emojis: n.vditor.options.hint.emoji,
                      fixTermTypo: n.vditor.options.preview.markdown.fixTermTypo,
                      footnotes: n.vditor.options.preview.markdown.footnotes,
                      headingAnchor: !1,
                      inlineMathDigit: n.vditor.options.preview.math.inlineDigit,
                      linkBase: n.vditor.options.preview.markdown.linkBase,
                      linkPrefix: n.vditor.options.preview.markdown.linkPrefix,
                      listStyle: n.vditor.options.preview.markdown.listStyle,
                      mark: n.vditor.options.preview.markdown.mark,
                      mathBlockPreview: n.vditor.options.preview.markdown.mathBlockPreview,
                      paragraphBeginningSpace: n.vditor.options.preview.markdown.paragraphBeginningSpace,
                      sanitize: n.vditor.options.preview.markdown.sanitize,
                      toc: n.vditor.options.preview.markdown.toc
                    }), n.vditor.preview = new _a(n.vditor), ue(n.vditor), o.after && o.after(), o.icon && (0, M.J)("".concat(o.cdn, "/dist/js/icons/").concat(o.icon, ".js"), "vditorIconScript");
                  }));
                }, t;
              }(D.default)
            );
            const $i = Ni;
          })(), N = N.default, N;
        })()
      );
    });
  }(kr)), kr.exports;
}
var ib = ab();
const lb = /* @__PURE__ */ ob(ib), sb = /* @__PURE__ */ ft({
  __name: "EditorModal",
  setup(p) {
    const d = Ee(""), w = Ee("mdnotes-editor"), C = It("isModalShown");
    let L = Ee();
    Tt(() => {
      L.value = new lb("mde-point", {
        minHeight: 320,
        mode: "wysiwyg",
        toolbarConfig: {
          pin: !0
        },
        after: () => {
          L.value.setTheme("dark", "dark", "tokyo-night-dark");
        }
      }), window.addEventListener(St.setContent, N);
    });
    function N(B) {
      let M = B.detail, c = M.content, i = M.rel_file_path;
      d.value = i, w.value = i, L.value !== void 0 && L.value.setValue(c);
    }
    function D() {
      if (console.log("Wohooo~!"), L.value !== void 0) {
        let B = L.value.getValue();
        io(tl, oo.saveContent, new ao(B, d.value));
      }
    }
    function g() {
      console.error("Bruh...");
    }
    function k(B) {
      C.value = B;
    }
    return (B, M) => (Ne(), tt(Y(rb), {
      "header-variant": "secondary",
      "footer-variant": "secondary",
      "body-variant": "secondary",
      "cancel-variant": "dark",
      scrollable: "",
      size: "xl",
      title: w.value,
      onOk: D,
      onCancel: g,
      visible: Y(C),
      "onUpdate:visible": M[0] || (M[0] = (c) => Bn(C) ? C.value = c : null),
      "onUpdate:modelValue": k
    }, {
      default: rt(() => [...M[1] || (M[1] = [
        Jt("div", { id: "mde-point" }, null, -1)
      ])]),
      _: 1
    }, 8, ["title", "visible"]));
  }
}), cb = /* @__PURE__ */ ft({
  __name: "App",
  setup(p) {
    const d = Ee(!1);
    _n("isModalShown", d), Tt(() => {
      window.addEventListener(St.showEditor, w);
    }), uo(() => {
      window.removeEventListener(St.showEditor, w);
    });
    function w() {
      d.value = !0;
    }
    return (C, L) => (Ne(), ut(fo, null, [
      Sr(Y(Yi)),
      Sr(sb, {
        onKeydown: L[0] || (L[0] = On(() => {
        }, ["stop"]))
      })
    ], 64));
  }
});
el.addStylesheet("extensions/comfyui-mdnotes/assets/main.css");
const ro = Qi;
ro.registerExtension({
  name: "endericedragon.mdnotes",
  async beforeRegisterNodeDef(p, d, w) {
    let C = p.prototype.getExtraMenuOptions;
    p.prototype.getExtraMenuOptions = function(L, N) {
      C == null || C.apply(this, arguments);
      let D = this.widgets.find((B) => B.name === "ckpt_name"), g = this.widgets.filter((B) => B.name.includes("lora") && B.name.includes("name")), k = [];
      if (D) {
        let B = no.CKPT;
        k.push({
          content: "Show note of checkpoint",
          callback: () => {
            const M = D.value;
            io(ro, oo.sendCurrentModel, { model_type: B, model_name: M }).then((c) => {
              let i = c.content, b = c.rel_file_path;
              window.dispatchEvent(new CustomEvent(St.showEditor)), window.dispatchEvent(new CustomEvent(St.setContent, {
                detail: new ao(i, b)
              }));
            });
          }
        });
      }
      if (g) {
        let B = no.LORA;
        for (let [M, c] of g.entries()) {
          const i = c.value;
          i !== "None" && k.push({
            content: `Show note of lora${M + 1}`,
            callback: () => {
              io(ro, oo.sendCurrentModel, { model_type: B, model_name: i }).then((b) => {
                let f = b.content, v = b.rel_file_path;
                window.dispatchEvent(new CustomEvent(St.showEditor)), window.dispatchEvent(new CustomEvent(St.setContent, {
                  detail: new ao(f, v)
                }));
              });
            }
          });
        }
      }
      N.unshift(...k);
    };
  },
  async nodeCreated(p) {
    console.info(`[mdnotes] nodeCreated: ${p.comfyClass}`);
  },
  async setup() {
    let p = document.createElement("div");
    p.id = "mdnotes-ui", document.body.appendChild(p), Xi(cb).use(fl()).use(Zi, {
      theme: {
        preset: _h
      }
    }).use(Ji).mount(p);
  }
});

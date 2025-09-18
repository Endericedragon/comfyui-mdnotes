var Ui = Object.defineProperty;
var Vi = (ne, ye, ge) => ye in ne ? Ui(ne, ye, { enumerable: !0, configurable: !0, writable: !0, value: ge }) : ne[ye] = ge;
var $t = (ne, ye, ge) => Vi(ne, typeof ye != "symbol" ? ye + "" : ye, ge);
import { defineComponent as Yn, ref as ot, onMounted as Wi, onUnmounted as Fi, createBlock as Qn, openBlock as $n, unref as en, withCtx as tn, createElementVNode as At, createVNode as Zn, withModifiers as Ki, createApp as qi } from "vue";
import zi from "primevue/config";
import { app as Gi } from "../../../scripts/app.js";
import * as Zi from "../../../scripts/utils.js";
import { Dialog as Ji, Button as Jn } from "primevue";
const Xe = Gi, er = {
  sendCurrentModel: "/mdnotes/current_model",
  saveContent: "/mdnotes/save"
}, nn = {
  showEditor: "endericedragon-show-editor"
}, Dt = {
  autosave: "comfyui-mdnotes.autosave",
  autosaveDelay: "comfyui-mdnotes.autosaveDelay"
};
var rn = /* @__PURE__ */ ((ne) => (ne.CKPT = "ckpt", ne.LORA = "lora", ne.UNKNOWN = "unknown", ne))(rn || {});
class tr {
  constructor(ye, ge) {
    $t(this, "content");
    $t(this, "rel_file_path");
    this.content = ye, this.rel_file_path = ge;
  }
  toJSON() {
    return {
      content: this.content,
      rel_file_path: this.rel_file_path
    };
  }
}
async function nr(ne, ye, ge) {
  return ne.api.fetchApi(ye, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ge)
  }).then((be) => {
    switch (be.status) {
      case 201:
        Xe.extensionManager.toast.add({
          severity: "warn",
          summary: "MDNotes Warning",
          detail: "Note not found, ready to create one",
          life: 3e3
        });
      case 200:
        return be.json();
      default:
        return Xe.extensionManager.toast.add({
          severity: "error",
          summary: "MDNotes Error",
          detail: `Status code = ${be.status}`,
          life: 3e3
        }), Promise.reject(be.status);
    }
  });
}
function Xi(ne) {
  return ne && ne.__esModule && Object.prototype.hasOwnProperty.call(ne, "default") ? ne.default : ne;
}
var xt = { exports: {} };
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
var Yi = xt.exports, Xn;
function Qi() {
  return Xn || (Xn = 1, function(ne, ye) {
    (function(be, Y) {
      ne.exports = Y();
    })(Yi, function() {
      return (
        /******/
        (() => {
          var ge = {
            /***/
            173: (
              /***/
              (Z) => {
                var v = function() {
                  this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
                }, L = -1, x = 1, _ = 0;
                v.Diff = function(c, l) {
                  return [c, l];
                }, v.prototype.diff_main = function(c, l, g, p) {
                  typeof p > "u" && (this.Diff_Timeout <= 0 ? p = Number.MAX_VALUE : p = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
                  var m = p;
                  if (c == null || l == null)
                    throw new Error("Null input. (diff_main)");
                  if (c == l)
                    return c ? [new v.Diff(_, c)] : [];
                  typeof g > "u" && (g = !0);
                  var f = g, E = this.diff_commonPrefix(c, l), w = c.substring(0, E);
                  c = c.substring(E), l = l.substring(E), E = this.diff_commonSuffix(c, l);
                  var b = c.substring(c.length - E);
                  c = c.substring(0, c.length - E), l = l.substring(0, l.length - E);
                  var y = this.diff_compute_(c, l, f, m);
                  return w && y.unshift(new v.Diff(_, w)), b && y.push(new v.Diff(_, b)), this.diff_cleanupMerge(y), y;
                }, v.prototype.diff_compute_ = function(c, l, g, p) {
                  var m;
                  if (!c)
                    return [new v.Diff(x, l)];
                  if (!l)
                    return [new v.Diff(L, c)];
                  var f = c.length > l.length ? c : l, E = c.length > l.length ? l : c, w = f.indexOf(E);
                  if (w != -1)
                    return m = [new v.Diff(x, f.substring(0, w)), new v.Diff(_, E), new v.Diff(x, f.substring(w + E.length))], c.length > l.length && (m[0][0] = m[2][0] = L), m;
                  if (E.length == 1)
                    return [new v.Diff(L, c), new v.Diff(x, l)];
                  var b = this.diff_halfMatch_(c, l);
                  if (b) {
                    var y = b[0], s = b[1], C = b[2], A = b[3], D = b[4], k = this.diff_main(y, C, g, p), P = this.diff_main(s, A, g, p);
                    return k.concat([new v.Diff(_, D)], P);
                  }
                  return g && c.length > 100 && l.length > 100 ? this.diff_lineMode_(c, l, p) : this.diff_bisect_(c, l, p);
                }, v.prototype.diff_lineMode_ = function(c, l, g) {
                  var p = this.diff_linesToChars_(c, l);
                  c = p.chars1, l = p.chars2;
                  var m = p.lineArray, f = this.diff_main(c, l, !1, g);
                  this.diff_charsToLines_(f, m), this.diff_cleanupSemantic(f), f.push(new v.Diff(_, ""));
                  for (var E = 0, w = 0, b = 0, y = "", s = ""; E < f.length; ) {
                    switch (f[E][0]) {
                      case x:
                        b++, s += f[E][1];
                        break;
                      case L:
                        w++, y += f[E][1];
                        break;
                      case _:
                        if (w >= 1 && b >= 1) {
                          f.splice(E - w - b, w + b), E = E - w - b;
                          for (var C = this.diff_main(y, s, !1, g), A = C.length - 1; A >= 0; A--)
                            f.splice(E, 0, C[A]);
                          E = E + C.length;
                        }
                        b = 0, w = 0, y = "", s = "";
                        break;
                    }
                    E++;
                  }
                  return f.pop(), f;
                }, v.prototype.diff_bisect_ = function(c, l, g) {
                  for (var p = c.length, m = l.length, f = Math.ceil((p + m) / 2), E = f, w = 2 * f, b = new Array(w), y = new Array(w), s = 0; s < w; s++)
                    b[s] = -1, y[s] = -1;
                  b[E + 1] = 0, y[E + 1] = 0;
                  for (var C = p - m, A = C % 2 != 0, D = 0, k = 0, P = 0, F = 0, z = 0; z < f && !((/* @__PURE__ */ new Date()).getTime() > g); z++) {
                    for (var $ = -z + D; $ <= z - k; $ += 2) {
                      var re = E + $, se;
                      $ == -z || $ != z && b[re - 1] < b[re + 1] ? se = b[re + 1] : se = b[re - 1] + 1;
                      for (var we = se - $; se < p && we < m && c.charAt(se) == l.charAt(we); )
                        se++, we++;
                      if (b[re] = se, se > p)
                        k += 2;
                      else if (we > m)
                        D += 2;
                      else if (A) {
                        var de = E + C - $;
                        if (de >= 0 && de < w && y[de] != -1) {
                          var ce = p - y[de];
                          if (se >= ce)
                            return this.diff_bisectSplit_(c, l, se, we, g);
                        }
                      }
                    }
                    for (var Ce = -z + P; Ce <= z - F; Ce += 2) {
                      var de = E + Ce, ce;
                      Ce == -z || Ce != z && y[de - 1] < y[de + 1] ? ce = y[de + 1] : ce = y[de - 1] + 1;
                      for (var Ae = ce - Ce; ce < p && Ae < m && c.charAt(p - ce - 1) == l.charAt(m - Ae - 1); )
                        ce++, Ae++;
                      if (y[de] = ce, ce > p)
                        F += 2;
                      else if (Ae > m)
                        P += 2;
                      else if (!A) {
                        var re = E + C - Ce;
                        if (re >= 0 && re < w && b[re] != -1) {
                          var se = b[re], we = E + se - re;
                          if (ce = p - ce, se >= ce)
                            return this.diff_bisectSplit_(c, l, se, we, g);
                        }
                      }
                    }
                  }
                  return [new v.Diff(L, c), new v.Diff(x, l)];
                }, v.prototype.diff_bisectSplit_ = function(c, l, g, p, m) {
                  var f = c.substring(0, g), E = l.substring(0, p), w = c.substring(g), b = l.substring(p), y = this.diff_main(f, E, !1, m), s = this.diff_main(w, b, !1, m);
                  return y.concat(s);
                }, v.prototype.diff_linesToChars_ = function(c, l) {
                  var g = [], p = {};
                  g[0] = "";
                  function m(b) {
                    for (var y = "", s = 0, C = -1, A = g.length; C < b.length - 1; ) {
                      C = b.indexOf(`
`, s), C == -1 && (C = b.length - 1);
                      var D = b.substring(s, C + 1);
                      (p.hasOwnProperty ? p.hasOwnProperty(D) : p[D] !== void 0) ? y += String.fromCharCode(p[D]) : (A == f && (D = b.substring(s), C = b.length), y += String.fromCharCode(A), p[D] = A, g[A++] = D), s = C + 1;
                    }
                    return y;
                  }
                  var f = 4e4, E = m(c);
                  f = 65535;
                  var w = m(l);
                  return {
                    chars1: E,
                    chars2: w,
                    lineArray: g
                  };
                }, v.prototype.diff_charsToLines_ = function(c, l) {
                  for (var g = 0; g < c.length; g++) {
                    for (var p = c[g][1], m = [], f = 0; f < p.length; f++)
                      m[f] = l[p.charCodeAt(f)];
                    c[g][1] = m.join("");
                  }
                }, v.prototype.diff_commonPrefix = function(c, l) {
                  if (!c || !l || c.charAt(0) != l.charAt(0))
                    return 0;
                  for (var g = 0, p = Math.min(c.length, l.length), m = p, f = 0; g < m; )
                    c.substring(f, m) == l.substring(f, m) ? (g = m, f = g) : p = m, m = Math.floor((p - g) / 2 + g);
                  return m;
                }, v.prototype.diff_commonSuffix = function(c, l) {
                  if (!c || !l || c.charAt(c.length - 1) != l.charAt(l.length - 1))
                    return 0;
                  for (var g = 0, p = Math.min(c.length, l.length), m = p, f = 0; g < m; )
                    c.substring(c.length - m, c.length - f) == l.substring(l.length - m, l.length - f) ? (g = m, f = g) : p = m, m = Math.floor((p - g) / 2 + g);
                  return m;
                }, v.prototype.diff_commonOverlap_ = function(c, l) {
                  var g = c.length, p = l.length;
                  if (g == 0 || p == 0)
                    return 0;
                  g > p ? c = c.substring(g - p) : g < p && (l = l.substring(0, g));
                  var m = Math.min(g, p);
                  if (c == l)
                    return m;
                  for (var f = 0, E = 1; ; ) {
                    var w = c.substring(m - E), b = l.indexOf(w);
                    if (b == -1)
                      return f;
                    E += b, (b == 0 || c.substring(m - E) == l.substring(0, E)) && (f = E, E++);
                  }
                }, v.prototype.diff_halfMatch_ = function(c, l) {
                  if (this.Diff_Timeout <= 0)
                    return null;
                  var g = c.length > l.length ? c : l, p = c.length > l.length ? l : c;
                  if (g.length < 4 || p.length * 2 < g.length)
                    return null;
                  var m = this;
                  function f(k, P, F) {
                    for (var z = k.substring(F, F + Math.floor(k.length / 4)), $ = -1, re = "", se, we, de, ce; ($ = P.indexOf(z, $ + 1)) != -1; ) {
                      var Ce = m.diff_commonPrefix(k.substring(F), P.substring($)), Ae = m.diff_commonSuffix(k.substring(0, F), P.substring(0, $));
                      re.length < Ae + Ce && (re = P.substring($ - Ae, $) + P.substring($, $ + Ce), se = k.substring(0, F - Ae), we = k.substring(F + Ce), de = P.substring(0, $ - Ae), ce = P.substring($ + Ce));
                    }
                    return re.length * 2 >= k.length ? [se, we, de, ce, re] : null;
                  }
                  var E = f(g, p, Math.ceil(g.length / 4)), w = f(g, p, Math.ceil(g.length / 2)), b;
                  if (!E && !w)
                    return null;
                  w ? E ? b = E[4].length > w[4].length ? E : w : b = w : b = E;
                  var y, s, C, A;
                  c.length > l.length ? (y = b[0], s = b[1], C = b[2], A = b[3]) : (C = b[0], A = b[1], y = b[2], s = b[3]);
                  var D = b[4];
                  return [y, s, C, A, D];
                }, v.prototype.diff_cleanupSemantic = function(c) {
                  for (var l = !1, g = [], p = 0, m = null, f = 0, E = 0, w = 0, b = 0, y = 0; f < c.length; )
                    c[f][0] == _ ? (g[p++] = f, E = b, w = y, b = 0, y = 0, m = c[f][1]) : (c[f][0] == x ? b += c[f][1].length : y += c[f][1].length, m && m.length <= Math.max(E, w) && m.length <= Math.max(b, y) && (c.splice(g[p - 1], 0, new v.Diff(L, m)), c[g[p - 1] + 1][0] = x, p--, p--, f = p > 0 ? g[p - 1] : -1, E = 0, w = 0, b = 0, y = 0, m = null, l = !0)), f++;
                  for (l && this.diff_cleanupMerge(c), this.diff_cleanupSemanticLossless(c), f = 1; f < c.length; ) {
                    if (c[f - 1][0] == L && c[f][0] == x) {
                      var s = c[f - 1][1], C = c[f][1], A = this.diff_commonOverlap_(s, C), D = this.diff_commonOverlap_(C, s);
                      A >= D ? (A >= s.length / 2 || A >= C.length / 2) && (c.splice(f, 0, new v.Diff(_, C.substring(0, A))), c[f - 1][1] = s.substring(0, s.length - A), c[f + 1][1] = C.substring(A), f++) : (D >= s.length / 2 || D >= C.length / 2) && (c.splice(f, 0, new v.Diff(_, s.substring(0, D))), c[f - 1][0] = x, c[f - 1][1] = C.substring(0, C.length - D), c[f + 1][0] = L, c[f + 1][1] = s.substring(D), f++), f++;
                    }
                    f++;
                  }
                }, v.prototype.diff_cleanupSemanticLossless = function(c) {
                  function l(D, k) {
                    if (!D || !k)
                      return 6;
                    var P = D.charAt(D.length - 1), F = k.charAt(0), z = P.match(v.nonAlphaNumericRegex_), $ = F.match(v.nonAlphaNumericRegex_), re = z && P.match(v.whitespaceRegex_), se = $ && F.match(v.whitespaceRegex_), we = re && P.match(v.linebreakRegex_), de = se && F.match(v.linebreakRegex_), ce = we && D.match(v.blanklineEndRegex_), Ce = de && k.match(v.blanklineStartRegex_);
                    return ce || Ce ? 5 : we || de ? 4 : z && !re && se ? 3 : re || se ? 2 : z || $ ? 1 : 0;
                  }
                  for (var g = 1; g < c.length - 1; ) {
                    if (c[g - 1][0] == _ && c[g + 1][0] == _) {
                      var p = c[g - 1][1], m = c[g][1], f = c[g + 1][1], E = this.diff_commonSuffix(p, m);
                      if (E) {
                        var w = m.substring(m.length - E);
                        p = p.substring(0, p.length - E), m = w + m.substring(0, m.length - E), f = w + f;
                      }
                      for (var b = p, y = m, s = f, C = l(p, m) + l(m, f); m.charAt(0) === f.charAt(0); ) {
                        p += m.charAt(0), m = m.substring(1) + f.charAt(0), f = f.substring(1);
                        var A = l(p, m) + l(m, f);
                        A >= C && (C = A, b = p, y = m, s = f);
                      }
                      c[g - 1][1] != b && (b ? c[g - 1][1] = b : (c.splice(g - 1, 1), g--), c[g][1] = y, s ? c[g + 1][1] = s : (c.splice(g + 1, 1), g--));
                    }
                    g++;
                  }
                }, v.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, v.whitespaceRegex_ = /\s/, v.linebreakRegex_ = /[\r\n]/, v.blanklineEndRegex_ = /\n\r?\n$/, v.blanklineStartRegex_ = /^\r?\n\r?\n/, v.prototype.diff_cleanupEfficiency = function(c) {
                  for (var l = !1, g = [], p = 0, m = null, f = 0, E = !1, w = !1, b = !1, y = !1; f < c.length; )
                    c[f][0] == _ ? (c[f][1].length < this.Diff_EditCost && (b || y) ? (g[p++] = f, E = b, w = y, m = c[f][1]) : (p = 0, m = null), b = y = !1) : (c[f][0] == L ? y = !0 : b = !0, m && (E && w && b && y || m.length < this.Diff_EditCost / 2 && E + w + b + y == 3) && (c.splice(g[p - 1], 0, new v.Diff(L, m)), c[g[p - 1] + 1][0] = x, p--, m = null, E && w ? (b = y = !0, p = 0) : (p--, f = p > 0 ? g[p - 1] : -1, b = y = !1), l = !0)), f++;
                  l && this.diff_cleanupMerge(c);
                }, v.prototype.diff_cleanupMerge = function(c) {
                  c.push(new v.Diff(_, ""));
                  for (var l = 0, g = 0, p = 0, m = "", f = "", E; l < c.length; )
                    switch (c[l][0]) {
                      case x:
                        p++, f += c[l][1], l++;
                        break;
                      case L:
                        g++, m += c[l][1], l++;
                        break;
                      case _:
                        g + p > 1 ? (g !== 0 && p !== 0 && (E = this.diff_commonPrefix(f, m), E !== 0 && (l - g - p > 0 && c[l - g - p - 1][0] == _ ? c[l - g - p - 1][1] += f.substring(0, E) : (c.splice(0, 0, new v.Diff(_, f.substring(0, E))), l++), f = f.substring(E), m = m.substring(E)), E = this.diff_commonSuffix(f, m), E !== 0 && (c[l][1] = f.substring(f.length - E) + c[l][1], f = f.substring(0, f.length - E), m = m.substring(0, m.length - E))), l -= g + p, c.splice(l, g + p), m.length && (c.splice(l, 0, new v.Diff(L, m)), l++), f.length && (c.splice(l, 0, new v.Diff(x, f)), l++), l++) : l !== 0 && c[l - 1][0] == _ ? (c[l - 1][1] += c[l][1], c.splice(l, 1)) : l++, p = 0, g = 0, m = "", f = "";
                        break;
                    }
                  c[c.length - 1][1] === "" && c.pop();
                  var w = !1;
                  for (l = 1; l < c.length - 1; )
                    c[l - 1][0] == _ && c[l + 1][0] == _ && (c[l][1].substring(c[l][1].length - c[l - 1][1].length) == c[l - 1][1] ? (c[l][1] = c[l - 1][1] + c[l][1].substring(0, c[l][1].length - c[l - 1][1].length), c[l + 1][1] = c[l - 1][1] + c[l + 1][1], c.splice(l - 1, 1), w = !0) : c[l][1].substring(0, c[l + 1][1].length) == c[l + 1][1] && (c[l - 1][1] += c[l + 1][1], c[l][1] = c[l][1].substring(c[l + 1][1].length) + c[l + 1][1], c.splice(l + 1, 1), w = !0)), l++;
                  w && this.diff_cleanupMerge(c);
                }, v.prototype.diff_xIndex = function(c, l) {
                  var g = 0, p = 0, m = 0, f = 0, E;
                  for (E = 0; E < c.length && (c[E][0] !== x && (g += c[E][1].length), c[E][0] !== L && (p += c[E][1].length), !(g > l)); E++)
                    m = g, f = p;
                  return c.length != E && c[E][0] === L ? f : f + (l - m);
                }, v.prototype.diff_prettyHtml = function(c) {
                  for (var l = [], g = /&/g, p = /</g, m = />/g, f = /\n/g, E = 0; E < c.length; E++) {
                    var w = c[E][0], b = c[E][1], y = b.replace(g, "&amp;").replace(p, "&lt;").replace(m, "&gt;").replace(f, "&para;<br>");
                    switch (w) {
                      case x:
                        l[E] = '<ins style="background:#e6ffe6;">' + y + "</ins>";
                        break;
                      case L:
                        l[E] = '<del style="background:#ffe6e6;">' + y + "</del>";
                        break;
                      case _:
                        l[E] = "<span>" + y + "</span>";
                        break;
                    }
                  }
                  return l.join("");
                }, v.prototype.diff_text1 = function(c) {
                  for (var l = [], g = 0; g < c.length; g++)
                    c[g][0] !== x && (l[g] = c[g][1]);
                  return l.join("");
                }, v.prototype.diff_text2 = function(c) {
                  for (var l = [], g = 0; g < c.length; g++)
                    c[g][0] !== L && (l[g] = c[g][1]);
                  return l.join("");
                }, v.prototype.diff_levenshtein = function(c) {
                  for (var l = 0, g = 0, p = 0, m = 0; m < c.length; m++) {
                    var f = c[m][0], E = c[m][1];
                    switch (f) {
                      case x:
                        g += E.length;
                        break;
                      case L:
                        p += E.length;
                        break;
                      case _:
                        l += Math.max(g, p), g = 0, p = 0;
                        break;
                    }
                  }
                  return l += Math.max(g, p), l;
                }, v.prototype.diff_toDelta = function(c) {
                  for (var l = [], g = 0; g < c.length; g++)
                    switch (c[g][0]) {
                      case x:
                        l[g] = "+" + encodeURI(c[g][1]);
                        break;
                      case L:
                        l[g] = "-" + c[g][1].length;
                        break;
                      case _:
                        l[g] = "=" + c[g][1].length;
                        break;
                    }
                  return l.join("	").replace(/%20/g, " ");
                }, v.prototype.diff_fromDelta = function(c, l) {
                  for (var g = [], p = 0, m = 0, f = l.split(/\t/g), E = 0; E < f.length; E++) {
                    var w = f[E].substring(1);
                    switch (f[E].charAt(0)) {
                      case "+":
                        try {
                          g[p++] = new v.Diff(x, decodeURI(w));
                        } catch {
                          throw new Error("Illegal escape in diff_fromDelta: " + w);
                        }
                        break;
                      case "-":
                      // Fall through.
                      case "=":
                        var b = parseInt(w, 10);
                        if (isNaN(b) || b < 0)
                          throw new Error("Invalid number in diff_fromDelta: " + w);
                        var y = c.substring(m, m += b);
                        f[E].charAt(0) == "=" ? g[p++] = new v.Diff(_, y) : g[p++] = new v.Diff(L, y);
                        break;
                      default:
                        if (f[E])
                          throw new Error("Invalid diff operation in diff_fromDelta: " + f[E]);
                    }
                  }
                  if (m != c.length)
                    throw new Error("Delta length (" + m + ") does not equal source text length (" + c.length + ").");
                  return g;
                }, v.prototype.match_main = function(c, l, g) {
                  if (c == null || l == null || g == null)
                    throw new Error("Null input. (match_main)");
                  return g = Math.max(0, Math.min(g, c.length)), c == l ? 0 : c.length ? c.substring(g, g + l.length) == l ? g : this.match_bitap_(c, l, g) : -1;
                }, v.prototype.match_bitap_ = function(c, l, g) {
                  if (l.length > this.Match_MaxBits)
                    throw new Error("Pattern too long for this browser.");
                  var p = this.match_alphabet_(l), m = this;
                  function f(se, we) {
                    var de = se / l.length, ce = Math.abs(g - we);
                    return m.Match_Distance ? de + ce / m.Match_Distance : ce ? 1 : de;
                  }
                  var E = this.Match_Threshold, w = c.indexOf(l, g);
                  w != -1 && (E = Math.min(f(0, w), E), w = c.lastIndexOf(l, g + l.length), w != -1 && (E = Math.min(f(0, w), E)));
                  var b = 1 << l.length - 1;
                  w = -1;
                  for (var y, s, C = l.length + c.length, A, D = 0; D < l.length; D++) {
                    for (y = 0, s = C; y < s; )
                      f(D, g + s) <= E ? y = s : C = s, s = Math.floor((C - y) / 2 + y);
                    C = s;
                    var k = Math.max(1, g - s + 1), P = Math.min(g + s, c.length) + l.length, F = Array(P + 2);
                    F[P + 1] = (1 << D) - 1;
                    for (var z = P; z >= k; z--) {
                      var $ = p[c.charAt(z - 1)];
                      if (D === 0 ? F[z] = (F[z + 1] << 1 | 1) & $ : F[z] = (F[z + 1] << 1 | 1) & $ | ((A[z + 1] | A[z]) << 1 | 1) | A[z + 1], F[z] & b) {
                        var re = f(D, z - 1);
                        if (re <= E)
                          if (E = re, w = z - 1, w > g)
                            k = Math.max(1, 2 * g - w);
                          else
                            break;
                      }
                    }
                    if (f(D + 1, g) > E)
                      break;
                    A = F;
                  }
                  return w;
                }, v.prototype.match_alphabet_ = function(c) {
                  for (var l = {}, g = 0; g < c.length; g++)
                    l[c.charAt(g)] = 0;
                  for (var g = 0; g < c.length; g++)
                    l[c.charAt(g)] |= 1 << c.length - g - 1;
                  return l;
                }, v.prototype.patch_addContext_ = function(c, l) {
                  if (l.length != 0) {
                    if (c.start2 === null)
                      throw Error("patch not initialized");
                    for (var g = l.substring(c.start2, c.start2 + c.length1), p = 0; l.indexOf(g) != l.lastIndexOf(g) && g.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
                      p += this.Patch_Margin, g = l.substring(c.start2 - p, c.start2 + c.length1 + p);
                    p += this.Patch_Margin;
                    var m = l.substring(c.start2 - p, c.start2);
                    m && c.diffs.unshift(new v.Diff(_, m));
                    var f = l.substring(c.start2 + c.length1, c.start2 + c.length1 + p);
                    f && c.diffs.push(new v.Diff(_, f)), c.start1 -= m.length, c.start2 -= m.length, c.length1 += m.length + f.length, c.length2 += m.length + f.length;
                  }
                }, v.prototype.patch_make = function(c, l, g) {
                  var p, m;
                  if (typeof c == "string" && typeof l == "string" && typeof g > "u")
                    p = /** @type {string} */
                    c, m = this.diff_main(
                      p,
                      /** @type {string} */
                      l,
                      !0
                    ), m.length > 2 && (this.diff_cleanupSemantic(m), this.diff_cleanupEfficiency(m));
                  else if (c && typeof c == "object" && typeof l > "u" && typeof g > "u")
                    m = /** @type {!Array.<!diff_match_patch.Diff>} */
                    c, p = this.diff_text1(m);
                  else if (typeof c == "string" && l && typeof l == "object" && typeof g > "u")
                    p = /** @type {string} */
                    c, m = /** @type {!Array.<!diff_match_patch.Diff>} */
                    l;
                  else if (typeof c == "string" && typeof l == "string" && g && typeof g == "object")
                    p = /** @type {string} */
                    c, m = /** @type {!Array.<!diff_match_patch.Diff>} */
                    g;
                  else
                    throw new Error("Unknown call format to patch_make.");
                  if (m.length === 0)
                    return [];
                  for (var f = [], E = new v.patch_obj(), w = 0, b = 0, y = 0, s = p, C = p, A = 0; A < m.length; A++) {
                    var D = m[A][0], k = m[A][1];
                    switch (!w && D !== _ && (E.start1 = b, E.start2 = y), D) {
                      case x:
                        E.diffs[w++] = m[A], E.length2 += k.length, C = C.substring(0, y) + k + C.substring(y);
                        break;
                      case L:
                        E.length1 += k.length, E.diffs[w++] = m[A], C = C.substring(0, y) + C.substring(y + k.length);
                        break;
                      case _:
                        k.length <= 2 * this.Patch_Margin && w && m.length != A + 1 ? (E.diffs[w++] = m[A], E.length1 += k.length, E.length2 += k.length) : k.length >= 2 * this.Patch_Margin && w && (this.patch_addContext_(E, s), f.push(E), E = new v.patch_obj(), w = 0, s = C, b = y);
                        break;
                    }
                    D !== x && (b += k.length), D !== L && (y += k.length);
                  }
                  return w && (this.patch_addContext_(E, s), f.push(E)), f;
                }, v.prototype.patch_deepCopy = function(c) {
                  for (var l = [], g = 0; g < c.length; g++) {
                    var p = c[g], m = new v.patch_obj();
                    m.diffs = [];
                    for (var f = 0; f < p.diffs.length; f++)
                      m.diffs[f] = new v.Diff(p.diffs[f][0], p.diffs[f][1]);
                    m.start1 = p.start1, m.start2 = p.start2, m.length1 = p.length1, m.length2 = p.length2, l[g] = m;
                  }
                  return l;
                }, v.prototype.patch_apply = function(c, l) {
                  if (c.length == 0)
                    return [l, []];
                  c = this.patch_deepCopy(c);
                  var g = this.patch_addPadding(c);
                  l = g + l + g, this.patch_splitMax(c);
                  for (var p = 0, m = [], f = 0; f < c.length; f++) {
                    var E = c[f].start2 + p, w = this.diff_text1(c[f].diffs), b, y = -1;
                    if (w.length > this.Match_MaxBits ? (b = this.match_main(l, w.substring(0, this.Match_MaxBits), E), b != -1 && (y = this.match_main(l, w.substring(w.length - this.Match_MaxBits), E + w.length - this.Match_MaxBits), (y == -1 || b >= y) && (b = -1))) : b = this.match_main(l, w, E), b == -1)
                      m[f] = !1, p -= c[f].length2 - c[f].length1;
                    else {
                      m[f] = !0, p = b - E;
                      var s;
                      if (y == -1 ? s = l.substring(b, b + w.length) : s = l.substring(b, y + this.Match_MaxBits), w == s)
                        l = l.substring(0, b) + this.diff_text2(c[f].diffs) + l.substring(b + w.length);
                      else {
                        var C = this.diff_main(w, s, !1);
                        if (w.length > this.Match_MaxBits && this.diff_levenshtein(C) / w.length > this.Patch_DeleteThreshold)
                          m[f] = !1;
                        else {
                          this.diff_cleanupSemanticLossless(C);
                          for (var A = 0, D, k = 0; k < c[f].diffs.length; k++) {
                            var P = c[f].diffs[k];
                            P[0] !== _ && (D = this.diff_xIndex(C, A)), P[0] === x ? l = l.substring(0, b + D) + P[1] + l.substring(b + D) : P[0] === L && (l = l.substring(0, b + D) + l.substring(b + this.diff_xIndex(C, A + P[1].length))), P[0] !== L && (A += P[1].length);
                          }
                        }
                      }
                    }
                  }
                  return l = l.substring(g.length, l.length - g.length), [l, m];
                }, v.prototype.patch_addPadding = function(c) {
                  for (var l = this.Patch_Margin, g = "", p = 1; p <= l; p++)
                    g += String.fromCharCode(p);
                  for (var p = 0; p < c.length; p++)
                    c[p].start1 += l, c[p].start2 += l;
                  var m = c[0], f = m.diffs;
                  if (f.length == 0 || f[0][0] != _)
                    f.unshift(new v.Diff(_, g)), m.start1 -= l, m.start2 -= l, m.length1 += l, m.length2 += l;
                  else if (l > f[0][1].length) {
                    var E = l - f[0][1].length;
                    f[0][1] = g.substring(f[0][1].length) + f[0][1], m.start1 -= E, m.start2 -= E, m.length1 += E, m.length2 += E;
                  }
                  if (m = c[c.length - 1], f = m.diffs, f.length == 0 || f[f.length - 1][0] != _)
                    f.push(new v.Diff(_, g)), m.length1 += l, m.length2 += l;
                  else if (l > f[f.length - 1][1].length) {
                    var E = l - f[f.length - 1][1].length;
                    f[f.length - 1][1] += g.substring(0, E), m.length1 += E, m.length2 += E;
                  }
                  return g;
                }, v.prototype.patch_splitMax = function(c) {
                  for (var l = this.Match_MaxBits, g = 0; g < c.length; g++)
                    if (!(c[g].length1 <= l)) {
                      var p = c[g];
                      c.splice(g--, 1);
                      for (var m = p.start1, f = p.start2, E = ""; p.diffs.length !== 0; ) {
                        var w = new v.patch_obj(), b = !0;
                        for (w.start1 = m - E.length, w.start2 = f - E.length, E !== "" && (w.length1 = w.length2 = E.length, w.diffs.push(new v.Diff(_, E))); p.diffs.length !== 0 && w.length1 < l - this.Patch_Margin; ) {
                          var y = p.diffs[0][0], s = p.diffs[0][1];
                          y === x ? (w.length2 += s.length, f += s.length, w.diffs.push(p.diffs.shift()), b = !1) : y === L && w.diffs.length == 1 && w.diffs[0][0] == _ && s.length > 2 * l ? (w.length1 += s.length, m += s.length, b = !1, w.diffs.push(new v.Diff(y, s)), p.diffs.shift()) : (s = s.substring(0, l - w.length1 - this.Patch_Margin), w.length1 += s.length, m += s.length, y === _ ? (w.length2 += s.length, f += s.length) : b = !1, w.diffs.push(new v.Diff(y, s)), s == p.diffs[0][1] ? p.diffs.shift() : p.diffs[0][1] = p.diffs[0][1].substring(s.length));
                        }
                        E = this.diff_text2(w.diffs), E = E.substring(E.length - this.Patch_Margin);
                        var C = this.diff_text1(p.diffs).substring(0, this.Patch_Margin);
                        C !== "" && (w.length1 += C.length, w.length2 += C.length, w.diffs.length !== 0 && w.diffs[w.diffs.length - 1][0] === _ ? w.diffs[w.diffs.length - 1][1] += C : w.diffs.push(new v.Diff(_, C))), b || c.splice(++g, 0, w);
                      }
                    }
                }, v.prototype.patch_toText = function(c) {
                  for (var l = [], g = 0; g < c.length; g++)
                    l[g] = c[g];
                  return l.join("");
                }, v.prototype.patch_fromText = function(c) {
                  var l = [];
                  if (!c)
                    return l;
                  for (var g = c.split(`
`), p = 0, m = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; p < g.length; ) {
                    var f = g[p].match(m);
                    if (!f)
                      throw new Error("Invalid patch string: " + g[p]);
                    var E = new v.patch_obj();
                    for (l.push(E), E.start1 = parseInt(f[1], 10), f[2] === "" ? (E.start1--, E.length1 = 1) : f[2] == "0" ? E.length1 = 0 : (E.start1--, E.length1 = parseInt(f[2], 10)), E.start2 = parseInt(f[3], 10), f[4] === "" ? (E.start2--, E.length2 = 1) : f[4] == "0" ? E.length2 = 0 : (E.start2--, E.length2 = parseInt(f[4], 10)), p++; p < g.length; ) {
                      var w = g[p].charAt(0);
                      try {
                        var b = decodeURI(g[p].substring(1));
                      } catch {
                        throw new Error("Illegal escape in patch_fromText: " + b);
                      }
                      if (w == "-")
                        E.diffs.push(new v.Diff(L, b));
                      else if (w == "+")
                        E.diffs.push(new v.Diff(x, b));
                      else if (w == " ")
                        E.diffs.push(new v.Diff(_, b));
                      else {
                        if (w == "@")
                          break;
                        if (w !== "") throw new Error('Invalid patch mode "' + w + '" in: ' + b);
                      }
                      p++;
                    }
                  }
                  return l;
                }, v.patch_obj = function() {
                  this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
                }, v.patch_obj.prototype.toString = function() {
                  var c, l;
                  this.length1 === 0 ? c = this.start1 + ",0" : this.length1 == 1 ? c = this.start1 + 1 : c = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? l = this.start2 + ",0" : this.length2 == 1 ? l = this.start2 + 1 : l = this.start2 + 1 + "," + this.length2;
                  for (var g = ["@@ -" + c + " +" + l + ` @@
`], p, m = 0; m < this.diffs.length; m++) {
                    switch (this.diffs[m][0]) {
                      case x:
                        p = "+";
                        break;
                      case L:
                        p = "-";
                        break;
                      case _:
                        p = " ";
                        break;
                    }
                    g[m + 1] = p + encodeURI(this.diffs[m][1]) + `
`;
                  }
                  return g.join("").replace(/%20/g, " ");
                }, Z.exports = v, Z.exports.diff_match_patch = v, Z.exports.DIFF_DELETE = L, Z.exports.DIFF_INSERT = x, Z.exports.DIFF_EQUAL = _;
              }
            ),
            /***/
            408: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  default: () => (
                    /* binding */
                    ze
                  )
                });
                var x = L(135), _ = L(840), c = L(775), l = L(428), g = L(325), p = L(483), m = L(999), f = function(I) {
                  I === void 0 && (I = document);
                  var ie = function(W) {
                    var j = document.createElement("img");
                    j.src = W.getAttribute("data-src"), j.addEventListener("load", function() {
                      !W.getAttribute("style") && !W.getAttribute("class") && !W.getAttribute("width") && !W.getAttribute("height") && j.naturalHeight > j.naturalWidth && j.naturalWidth / j.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && j.naturalHeight > window.innerHeight - 40 && (W.style.height = window.innerHeight - 40 + "px"), W.src = j.src;
                    }), W.removeAttribute("data-src");
                  };
                  if (!("IntersectionObserver" in window))
                    return I.querySelectorAll("img").forEach(function(W) {
                      W.getAttribute("data-src") && ie(W);
                    }), !1;
                  window.vditorImageIntersectionObserver ? (window.vditorImageIntersectionObserver.disconnect(), I.querySelectorAll("img").forEach(function(W) {
                    window.vditorImageIntersectionObserver.observe(W);
                  })) : (window.vditorImageIntersectionObserver = new IntersectionObserver(function(W) {
                    W.forEach(function(j) {
                      (typeof j.isIntersecting > "u" ? j.intersectionRatio !== 0 : j.isIntersecting) && j.target.getAttribute("data-src") && ie(j.target);
                    });
                  }), I.querySelectorAll("img").forEach(function(W) {
                    window.vditorImageIntersectionObserver.observe(W);
                  }));
                }, E = L(472), w = L(280), b = L(637), y = L(825), s = L(11), C = L(194), A = L(436), D = L(229), k = L(145), P = L(538), F = L(413), z = L(106), $ = L(673), re = function(I) {
                  document.querySelectorAll(".vditor-anchor").forEach(function(ie) {
                    I === 1 && ie.classList.add("vditor-anchor--left"), ie.onclick = function() {
                      var W = ie.getAttribute("href").substr(1), j = document.getElementById("vditorAnchor-" + W).offsetTop;
                      document.querySelector("html").scrollTop = j;
                    };
                  }), window.onhashchange = function() {
                    var ie = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
                    ie && (document.querySelector("html").scrollTop = ie.offsetTop);
                  };
                }, se = L(214), we = L(810), de = function(I, ie) {
                  if (ie === void 0 && (ie = "zh_CN"), !(typeof speechSynthesis > "u" || typeof SpeechSynthesisUtterance > "u")) {
                    var W = function() {
                      var Te = speechSynthesis.getVoices(), X, pe;
                      return Te.forEach(function(Oe) {
                        Oe.lang === ie.replace("_", "-") && (X = Oe), Oe.default && (pe = Oe);
                      }), X || (X = pe), X;
                    }, j = '<svg><use xlink:href="#vditor-icon-play"></use></svg>', he = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                    document.getElementById("vditorIconScript") || (j = '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>', he = '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>');
                    var q = document.querySelector(".vditor-speech");
                    q || (q = document.createElement("button"), q.className = "vditor-speech", I.insertAdjacentElement("beforeend", q), speechSynthesis.onvoiceschanged !== void 0 && (speechSynthesis.onvoiceschanged = W));
                    var ve = W(), ae = new SpeechSynthesisUtterance();
                    ae.voice = ve, ae.onend = ae.onerror = function() {
                      q.style.display = "none", speechSynthesis.cancel(), q.classList.remove("vditor-speech--current"), q.innerHTML = j;
                    }, I.addEventListener(window.ontouchstart !== void 0 ? "touchend" : "click", function(Te) {
                      var X = Te.target;
                      if (X.classList.contains("vditor-speech") || X.parentElement.classList.contains("vditor-speech")) {
                        q.classList.contains("vditor-speech--current") ? speechSynthesis.speaking && (speechSynthesis.paused ? (speechSynthesis.resume(), q.innerHTML = he) : (speechSynthesis.pause(), q.innerHTML = j)) : (ae.text = q.getAttribute("data-text"), speechSynthesis.speak(ae), q.classList.add("vditor-speech--current"), q.innerHTML = he), (0, we.Hc)(window.vditorSpeechRange), I.focus();
                        return;
                      }
                      if (q.style.display = "none", speechSynthesis.cancel(), q.classList.remove("vditor-speech--current"), q.innerHTML = j, getSelection().rangeCount !== 0) {
                        var pe = getSelection().getRangeAt(0), Oe = pe.toString().trim();
                        if (Oe) {
                          window.vditorSpeechRange = pe.cloneRange();
                          var Ie = pe.getBoundingClientRect();
                          q.innerHTML = j, q.style.display = "block", q.style.top = Ie.top + Ie.height + document.querySelector("html").scrollTop - 20 + "px", window.ontouchstart !== void 0 ? q.style.left = Te.changedTouches[Te.changedTouches.length - 1].pageX + 2 + "px" : q.style.left = Te.clientX + 2 + "px", q.setAttribute("data-text", Oe);
                        }
                      }
                    });
                  }
                }, ce = function(I, ie, W, j) {
                  function he(q) {
                    return q instanceof W ? q : new W(function(ve) {
                      ve(q);
                    });
                  }
                  return new (W || (W = Promise))(function(q, ve) {
                    function ae(pe) {
                      try {
                        X(j.next(pe));
                      } catch (Oe) {
                        ve(Oe);
                      }
                    }
                    function Te(pe) {
                      try {
                        X(j.throw(pe));
                      } catch (Oe) {
                        ve(Oe);
                      }
                    }
                    function X(pe) {
                      pe.done ? q(pe.value) : he(pe.value).then(ae, Te);
                    }
                    X((j = j.apply(I, ie || [])).next());
                  });
                }, Ce = function(I, ie) {
                  var W = { label: 0, sent: function() {
                    if (q[0] & 1) throw q[1];
                    return q[1];
                  }, trys: [], ops: [] }, j, he, q, ve;
                  return ve = { next: ae(0), throw: ae(1), return: ae(2) }, typeof Symbol == "function" && (ve[Symbol.iterator] = function() {
                    return this;
                  }), ve;
                  function ae(X) {
                    return function(pe) {
                      return Te([X, pe]);
                    };
                  }
                  function Te(X) {
                    if (j) throw new TypeError("Generator is already executing.");
                    for (; ve && (ve = 0, X[0] && (W = 0)), W; ) try {
                      if (j = 1, he && (q = X[0] & 2 ? he.return : X[0] ? he.throw || ((q = he.return) && q.call(he), 0) : he.next) && !(q = q.call(he, X[1])).done) return q;
                      switch (he = 0, q && (X = [X[0] & 2, q.value]), X[0]) {
                        case 0:
                        case 1:
                          q = X;
                          break;
                        case 4:
                          return W.label++, { value: X[1], done: !1 };
                        case 5:
                          W.label++, he = X[1], X = [0];
                          continue;
                        case 7:
                          X = W.ops.pop(), W.trys.pop();
                          continue;
                        default:
                          if (q = W.trys, !(q = q.length > 0 && q[q.length - 1]) && (X[0] === 6 || X[0] === 2)) {
                            W = 0;
                            continue;
                          }
                          if (X[0] === 3 && (!q || X[1] > q[0] && X[1] < q[3])) {
                            W.label = X[1];
                            break;
                          }
                          if (X[0] === 6 && W.label < q[1]) {
                            W.label = q[1], q = X;
                            break;
                          }
                          if (q && W.label < q[2]) {
                            W.label = q[2], W.ops.push(X);
                            break;
                          }
                          q[2] && W.ops.pop(), W.trys.pop();
                          continue;
                      }
                      X = ie.call(I, W);
                    } catch (pe) {
                      X = [6, pe], he = 0;
                    } finally {
                      j = q = 0;
                    }
                    if (X[0] & 5) throw X[1];
                    return { value: X[0] ? X[1] : void 0, done: !0 };
                  }
                }, Ae = function(I) {
                  var ie, W = {
                    anchor: 0,
                    cdn: k.g.CDN,
                    customEmoji: {},
                    emojiPath: "".concat(k.g.CDN, "/dist/images/emoji"),
                    hljs: k.g.HLJS_OPTIONS,
                    icon: "ant",
                    lang: "zh_CN",
                    markdown: k.g.MARKDOWN_OPTIONS,
                    math: k.g.MATH_OPTIONS,
                    mode: "light",
                    speech: {
                      enable: !1
                    },
                    render: {
                      media: {
                        enable: !0
                      }
                    },
                    theme: k.g.THEME_OPTIONS
                  };
                  return I.cdn && (!((ie = I.theme) === null || ie === void 0) && ie.path || (W.theme.path = "".concat(I.cdn, "/dist/css/content-theme")), I.emojiPath || (W.emojiPath = "".concat(I.cdn, "/dist/images/emoji"))), (0, $.T)(W, I);
                }, Le = function(I, ie) {
                  var W = Ae(ie);
                  return (0, F.G)("".concat(W.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    var j = (0, se.X)({
                      autoSpace: W.markdown.autoSpace,
                      gfmAutoLink: W.markdown.gfmAutoLink,
                      codeBlockPreview: W.markdown.codeBlockPreview,
                      emojiSite: W.emojiPath,
                      emojis: W.customEmoji,
                      fixTermTypo: W.markdown.fixTermTypo,
                      footnotes: W.markdown.footnotes,
                      headingAnchor: W.anchor !== 0,
                      inlineMathDigit: W.math.inlineDigit,
                      lazyLoadImage: W.lazyLoadImage,
                      linkBase: W.markdown.linkBase,
                      linkPrefix: W.markdown.linkPrefix,
                      listStyle: W.markdown.listStyle,
                      mark: W.markdown.mark,
                      mathBlockPreview: W.markdown.mathBlockPreview,
                      paragraphBeginningSpace: W.markdown.paragraphBeginningSpace,
                      sanitize: W.markdown.sanitize,
                      toc: W.markdown.toc
                    });
                    return ie != null && ie.renderers && j.SetJSRenderers({
                      renderers: {
                        Md2HTML: ie.renderers
                      }
                    }), j.SetHeadingID(!0), j.Md2HTML(I);
                  });
                }, M = function(I, ie, W) {
                  return ce(void 0, void 0, void 0, function() {
                    var j, he, q, ve;
                    return Ce(this, function(ae) {
                      switch (ae.label) {
                        case 0:
                          return j = Ae(W), [4, Le(ie, j)];
                        case 1:
                          if (he = ae.sent(), j.transform && (he = j.transform(he)), I.innerHTML = he, I.classList.add("vditor-reset"), j.i18n) return [3, 5];
                          if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(j.lang)) return [3, 2];
                          throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                        case 2:
                          return q = "vditorI18nScript", ve = q + j.lang, document.querySelectorAll('head script[id^="'.concat(q, '"]')).forEach(function(Te) {
                            Te.id !== ve && document.head.removeChild(Te);
                          }), [4, (0, F.G)("".concat(j.cdn, "/dist/js/i18n/").concat(j.lang, ".js"), ve)];
                        case 3:
                          ae.sent(), ae.label = 4;
                        case 4:
                          return [3, 6];
                        case 5:
                          window.VditorI18n = j.i18n, ae.label = 6;
                        case 6:
                          return j.icon ? [4, (0, F.G)("".concat(j.cdn, "/dist/js/icons/").concat(j.icon, ".js"), "vditorIconScript")] : [3, 8];
                        case 7:
                          ae.sent(), ae.label = 8;
                        case 8:
                          return (0, P.Z)(j.theme.current, j.theme.path), j.anchor === 1 && I.classList.add("vditor-reset--anchor"), (0, l.O)(I, j.hljs), (0, m.s)(j.hljs, I, j.cdn), (0, E.H)(I, {
                            cdn: j.cdn,
                            math: j.math
                          }), (0, b.i)(I, j.cdn, j.mode), (0, y.J)(I, j.cdn, j.mode), (0, s.K)(I, j.cdn), (0, g.P)(I, j.cdn), (0, p.v)(I, j.cdn), (0, c.p)(I, j.cdn, j.mode), (0, C.P)(I, j.cdn, j.mode), (0, D.B)(I, j.cdn), (0, x.Q)(I, j.cdn), j.render.media.enable && (0, w.Y)(I), j.speech.enable && de(I), j.anchor !== 0 && re(j.anchor), j.after && j.after(), j.lazyLoadImage && f(I), I.addEventListener("click", function(Te) {
                            var X = (0, z.lG)(Te.target, "SPAN");
                            if (X && (0, z.fb)(X, "vditor-toc")) {
                              var pe = I.querySelector("#" + X.getAttribute("data-target-id"));
                              pe && window.scrollTo(window.scrollX, pe.offsetTop);
                              return;
                            }
                          }), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, Ve = L(190), gt = L(580), yt = (
                  /** @class */
                  function() {
                    function I() {
                    }
                    return I.adapterRender = _, I.previewImage = Ve.E, I.codeRender = l.O, I.graphvizRender = p.v, I.highlightRender = m.s, I.mathRender = E.H, I.mermaidRender = b.i, I.SMILESRender = y.J, I.markmapRender = s.K, I.flowchartRender = g.P, I.chartRender = c.p, I.abcRender = x.Q, I.mindmapRender = C.P, I.plantumlRender = D.B, I.outlineRender = A.k, I.mediaRender = w.Y, I.speechRender = de, I.lazyLoadImageRender = f, I.md2html = Le, I.preview = M, I.setCodeTheme = gt.Y, I.setContentTheme = P.Z, I;
                  }()
                );
                const ze = yt;
              }
            ),
            /***/
            145: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  g: () => (
                    /* binding */
                    _
                  )
                  /* harmony export */
                });
                var x = "3.11.2", _ = (
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    g
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = L(494), g = function(p, m, f) {
                  p === void 0 && (p = document), m === void 0 && (m = x.g.CDN);
                  var E = c.SMILESRenderAdapter.getElements(p);
                  E.length > 0 && (0, _.G)("".concat(m, "/dist/js/smiles-drawer/smiles-drawer.min.js?v=2.1.7"), "vditorAbcjsScript").then(function() {
                    var w = new SmiDrawer({}, {});
                    E.forEach(function(b) {
                      var y = c.SMILESRenderAdapter.getCode(b).trim();
                      if (!(b.getAttribute("data-processed") === "true" || y.trim() === "")) {
                        var s = "smiles" + (0, l.Wb)();
                        b.innerHTML = '<svg id="'.concat(s, '"></svg>'), w.draw(y, "#" + s, f === "dark" ? "dark" : void 0), b.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            135: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  Q: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = function(g, p) {
                  g === void 0 && (g = document), p === void 0 && (p = x.g.CDN);
                  var m = c.abcRenderAdapter.getElements(g);
                  m.length > 0 && (0, _.G)("".concat(p, "/dist/js/abcjs/abcjs_basic.min.js"), "vditorAbcjsScript").then(function() {
                    m.forEach(function(f) {
                      f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre") || f.getAttribute("data-processed") !== "true" && (ABCJS.renderAbc(f, c.abcRenderAdapter.getCode(f).trim()), f.style.overflowX = "auto", f.setAttribute("data-processed", "true"));
                    });
                  });
                };
              }
            ),
            /***/
            840: (
              /***/
              (Z, v, L) => {
                L.r(v), L.d(v, {
                  /* harmony export */
                  mathRenderAdapter: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  SMILESRenderAdapter: () => (
                    /* binding */
                    _
                  ),
                  /* harmony export */
                  mermaidRenderAdapter: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  markmapRenderAdapter: () => (
                    /* binding */
                    l
                  ),
                  /* harmony export */
                  mindmapRenderAdapter: () => (
                    /* binding */
                    g
                  ),
                  /* harmony export */
                  chartRenderAdapter: () => (
                    /* binding */
                    p
                  ),
                  /* harmony export */
                  abcRenderAdapter: () => (
                    /* binding */
                    m
                  ),
                  /* harmony export */
                  graphvizRenderAdapter: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  flowchartRenderAdapter: () => (
                    /* binding */
                    E
                  ),
                  /* harmony export */
                  plantumlRenderAdapter: () => (
                    /* binding */
                    w
                  )
                  /* harmony export */
                });
                var x = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-math");
                  }
                }, _ = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-smiles");
                  }
                }, c = {
                  /** 不仅要返回code，并且需要将 code 设置为 el 的 innerHTML */
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-mermaid");
                  }
                }, l = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-markmap");
                  }
                }, g = {
                  getCode: function(b) {
                    return b.getAttribute("data-code");
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-mindmap");
                  }
                }, p = {
                  getCode: function(b) {
                    return b.innerText;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-echarts");
                  }
                }, m = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-abc");
                  }
                }, f = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-graphviz");
                  }
                }, E = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-flowchart");
                  }
                }, w = {
                  getCode: function(b) {
                    return b.textContent;
                  },
                  getElements: function(b) {
                    return b.querySelectorAll(".language-plantuml");
                  }
                };
              }
            ),
            /***/
            775: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  p: () => (
                    /* binding */
                    m
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = L(494), g = function(f, E, w, b) {
                  function y(s) {
                    return s instanceof w ? s : new w(function(C) {
                      C(s);
                    });
                  }
                  return new (w || (w = Promise))(function(s, C) {
                    function A(P) {
                      try {
                        k(b.next(P));
                      } catch (F) {
                        C(F);
                      }
                    }
                    function D(P) {
                      try {
                        k(b.throw(P));
                      } catch (F) {
                        C(F);
                      }
                    }
                    function k(P) {
                      P.done ? s(P.value) : y(P.value).then(A, D);
                    }
                    k((b = b.apply(f, E || [])).next());
                  });
                }, p = function(f, E) {
                  var w = { label: 0, sent: function() {
                    if (s[0] & 1) throw s[1];
                    return s[1];
                  }, trys: [], ops: [] }, b, y, s, C;
                  return C = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
                    return this;
                  }), C;
                  function A(k) {
                    return function(P) {
                      return D([k, P]);
                    };
                  }
                  function D(k) {
                    if (b) throw new TypeError("Generator is already executing.");
                    for (; C && (C = 0, k[0] && (w = 0)), w; ) try {
                      if (b = 1, y && (s = k[0] & 2 ? y.return : k[0] ? y.throw || ((s = y.return) && s.call(y), 0) : y.next) && !(s = s.call(y, k[1])).done) return s;
                      switch (y = 0, s && (k = [k[0] & 2, s.value]), k[0]) {
                        case 0:
                        case 1:
                          s = k;
                          break;
                        case 4:
                          return w.label++, { value: k[1], done: !1 };
                        case 5:
                          w.label++, y = k[1], k = [0];
                          continue;
                        case 7:
                          k = w.ops.pop(), w.trys.pop();
                          continue;
                        default:
                          if (s = w.trys, !(s = s.length > 0 && s[s.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                            w = 0;
                            continue;
                          }
                          if (k[0] === 3 && (!s || k[1] > s[0] && k[1] < s[3])) {
                            w.label = k[1];
                            break;
                          }
                          if (k[0] === 6 && w.label < s[1]) {
                            w.label = s[1], s = k;
                            break;
                          }
                          if (s && w.label < s[2]) {
                            w.label = s[2], w.ops.push(k);
                            break;
                          }
                          s[2] && w.ops.pop(), w.trys.pop();
                          continue;
                      }
                      k = E.call(f, w);
                    } catch (P) {
                      k = [6, P], y = 0;
                    } finally {
                      b = s = 0;
                    }
                    if (k[0] & 5) throw k[1];
                    return { value: k[0] ? k[1] : void 0, done: !0 };
                  }
                }, m = function(f, E, w) {
                  f === void 0 && (f = document), E === void 0 && (E = x.g.CDN);
                  var b = c.chartRenderAdapter.getElements(f);
                  b.length > 0 && (0, _.G)("".concat(E, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    b.forEach(function(y) {
                      return g(void 0, void 0, void 0, function() {
                        var s, C, A;
                        return p(this, function(D) {
                          switch (D.label) {
                            case 0:
                              if (y.parentElement.classList.contains("vditor-wysiwyg__pre") || y.parentElement.classList.contains("vditor-ir__marker--pre"))
                                return [
                                  2
                                  /*return*/
                                ];
                              if (s = c.chartRenderAdapter.getCode(y).trim(), !s)
                                return [
                                  2
                                  /*return*/
                                ];
                              D.label = 1;
                            case 1:
                              return D.trys.push([1, 3, , 4]), y.getAttribute("data-processed") === "true" ? [
                                2
                                /*return*/
                              ] : [4, (0, l.Qf)(s)];
                            case 2:
                              return C = D.sent(), echarts.init(y, w === "dark" ? "dark" : void 0).setOption(C), y.setAttribute("data-processed", "true"), [3, 4];
                            case 3:
                              return A = D.sent(), y.className = "vditor-reset--error", y.innerHTML = "echarts render error: <br>".concat(A), [3, 4];
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  O: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var x = L(105), _ = L(145), c = function(l, g) {
                  Array.from(l.querySelectorAll("pre > code")).filter(function(p, m) {
                    return !(p.parentElement.classList.contains("vditor-wysiwyg__pre") || p.parentElement.classList.contains("vditor-ir__marker--pre") || p.classList.contains("language-mermaid") || p.classList.contains("language-flowchart") || p.classList.contains("language-echarts") || p.classList.contains("language-mindmap") || p.classList.contains("language-plantuml") || p.classList.contains("language-markmap") || p.classList.contains("language-abc") || p.classList.contains("language-graphviz") || p.classList.contains("language-math") || p.classList.contains("language-smiles") || p.style.maxHeight.indexOf("px") > -1 || l.classList.contains("vditor-preview") && m > 5);
                  }).forEach(function(p) {
                    var m, f, E, w = p.innerText;
                    if (p.classList.contains("highlight-chroma")) {
                      var b = p.cloneNode(!0);
                      b.querySelectorAll(".highlight-ln").forEach(function(A) {
                        A.remove();
                      }), w = b.innerText;
                    } else w.endsWith(`
`) && (w = w.substr(0, w.length - 1));
                    var y = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                    document.getElementById("vditorIconScript") || (y = '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                    var s = document.createElement("div");
                    s.className = "vditor-copy", s.innerHTML = '<span aria-label="'.concat(((m = window.VditorI18n) === null || m === void 0 ? void 0 : m.copy) || "复制", `"
onmouseover="this.setAttribute('aria-label', '`).concat(((f = window.VditorI18n) === null || f === void 0 ? void 0 : f.copy) || "复制", `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="event.stopPropagation();this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '`).concat(((E = window.VditorI18n) === null || E === void 0 ? void 0 : E.copied) || "已复制", `');this.previousElementSibling.blur()">`).concat(y, "</span>");
                    var C = document.createElement("textarea");
                    C.value = (0, x.X)(w), s.insertAdjacentElement("afterbegin", C), g && g.renderMenu && g.renderMenu(p, s), p.before(s), p.style.maxHeight = window.outerHeight - 40 + "px", p.insertAdjacentHTML("afterend", '<span style="position: absolute">'.concat(_.g.ZWSP, "</span>"));
                  });
                };
              }
            ),
            /***/
            325: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = function(g, p) {
                  p === void 0 && (p = x.g.CDN);
                  var m = c.flowchartRenderAdapter.getElements(g);
                  m.length !== 0 && (0, _.G)("".concat(p, "/dist/js/flowchart.js/flowchart.min.js"), "vditorFlowchartScript").then(function() {
                    m.forEach(function(f) {
                      if (f.getAttribute("data-processed") !== "true") {
                        var E = flowchart.parse(c.flowchartRenderAdapter.getCode(f));
                        f.innerHTML = "", E.drawSVG(f), f.setAttribute("data-processed", "true");
                      }
                    });
                  });
                };
              }
            ),
            /***/
            483: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  v: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = function(g, p) {
                  p === void 0 && (p = x.g.CDN);
                  var m = c.graphvizRenderAdapter.getElements(g);
                  m.length !== 0 && (0, _.G)("".concat(p, "/dist/js/graphviz/viz.js"), "vditorGraphVizScript").then(function() {
                    m.forEach(function(f) {
                      var E = c.graphvizRenderAdapter.getCode(f);
                      if (!(f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre")) && !(f.getAttribute("data-processed") === "true" || E.trim() === "")) {
                        try {
                          var w = new Blob(["importScripts('".concat(document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js"), "');")], { type: "application/javascript" }), b = window.URL || window.webkitURL, y = b.createObjectURL(w), s = new Worker(y);
                          new Viz({ worker: s }).renderSVGElement(E).then(function(C) {
                            f.innerHTML = C.outerHTML;
                          }).catch(function(C) {
                            f.innerHTML = "graphviz render error: <br>".concat(C), f.className = "vditor-reset--error";
                          });
                        } catch (C) {
                          console.error("graphviz error", C);
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  s: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(290), l = function(g, p, m) {
                  p === void 0 && (p = document), m === void 0 && (m = x.g.CDN);
                  var f = g.style;
                  x.g.CODE_THEME.includes(f) || (f = "github");
                  var E = document.getElementById("vditorHljsStyle"), w = "".concat(m, "/dist/js/highlight.js/styles/").concat(f, ".min.css");
                  if (E && E.getAttribute("href") !== w && E.remove(), (0, c.c)("".concat(m, "/dist/js/highlight.js/styles/").concat(f, ".min.css"), "vditorHljsStyle"), g.enable !== !1) {
                    var b = p.querySelectorAll("pre > code");
                    b.length !== 0 && (0, _.G)("".concat(m, "/dist/js/highlight.js/highlight.min.js?v=11.7.0"), "vditorHljsScript").then(function() {
                      (0, _.G)("".concat(m, "/dist/js/highlight.js/third-languages.js?v=1.0.1"), "vditorHljsThirdScript").then(function() {
                        p.querySelectorAll("pre > code").forEach(function(y) {
                          if (!(y.parentElement.classList.contains("vditor-ir__marker--pre") || y.parentElement.classList.contains("vditor-wysiwyg__pre")) && !(y.classList.contains("language-mermaid") || y.classList.contains("language-flowchart") || y.classList.contains("language-echarts") || y.classList.contains("language-mindmap") || y.classList.contains("language-plantuml") || y.classList.contains("language-smiles") || y.classList.contains("language-abc") || y.classList.contains("language-graphviz") || y.classList.contains("language-math"))) {
                            g.defaultLang !== "" && y.className.indexOf("language-") === -1 && y.classList.add("language-" + g.defaultLang);
                            var s = y.className.replace("language-", "");
                            if (window.hljs.getLanguage(s) || (s = "plaintext"), y.innerHTML = window.hljs.highlight(y.textContent, {
                              language: s,
                              ignoreIllegals: !0
                            }).value, y.classList.add("hljs"), !!g.lineNumber) {
                              y.classList.add("vditor-linenumber");
                              var C = y.querySelector(".vditor-linenumber__temp");
                              C || (C = document.createElement("div"), C.className = "vditor-linenumber__temp", y.insertAdjacentElement("beforeend", C));
                              var A = getComputedStyle(y).whiteSpace, D = !1;
                              (A === "pre-wrap" || A === "pre-line") && (D = !0);
                              var k = "", P = y.textContent.split(/\r\n|\r|\n/g);
                              P.pop(), P.map(function(F) {
                                var z = "";
                                D && (C.textContent = F || `
`, z = ' style="height:'.concat(C.getBoundingClientRect().height, 'px"')), k += "<span".concat(z, "></span>");
                              }), C.style.display = "none", k = '<span class="vditor-linenumber__rows">'.concat(k, "</span>"), y.insertAdjacentHTML("beforeend", k);
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  K: () => (
                    /* binding */
                    m
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = {}, g = function(f, E) {
                  var w = f.transform(E), b = Object.keys(w.features).filter(function(D) {
                    return !l[D];
                  });
                  b.forEach(function(D) {
                    l[D] = !0;
                  });
                  var y = f.getAssets(b), s = y.styles, C = y.scripts, A = window.markmap;
                  return s && A.loadCSS(s), C && A.loadJS(C), w;
                }, p = function(f, E) {
                  var w = window.markmap, b = w.Transformer, y = w.Markmap, s = w.deriveOptions;
                  w.globalCSS;
                  var C = new b();
                  f.innerHTML = '<svg style="width:100%"></svg>';
                  var A = f.firstChild, D = y.create(A, null), k = g(C, E), P = k.root, F = k.frontmatter, z = F == null ? void 0 : F.markmap, $ = s(z);
                  D.setData(P, $), D.fit();
                }, m = function(f, E) {
                  f === void 0 && (f = document), E === void 0 && (E = x.g.CDN);
                  var w = c.markmapRenderAdapter.getElements(f);
                  w.length !== 0 && (0, _.G)("".concat(E, "/dist/js/markmap/markmap.min.js"), "vditorMarkerScript").then(function() {
                    w.forEach(function(b) {
                      var y = c.markmapRenderAdapter.getCode(b);
                      if (!(b.getAttribute("data-processed") === "true" || y.trim() === "")) {
                        var s = document.createElement("div");
                        s.className = "language-markmap", b.parentNode.appendChild(s), p(s, y), b.parentNode.childNodes[0].nodeName == "CODE" && b.parentNode.removeChild(b.parentNode.childNodes[0]);
                      }
                    });
                  });
                };
              }
            ),
            /***/
            472: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  H: () => (
                    /* binding */
                    p
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(290), l = L(105), g = L(840), p = function(m, f) {
                  m === void 0 && (m = document);
                  var E = g.mathRenderAdapter.getElements(m);
                  if (E.length !== 0) {
                    var w = {
                      cdn: x.g.CDN,
                      math: {
                        engine: "KaTeX",
                        inlineDigit: !1,
                        macros: {}
                      }
                    };
                    if (f && f.math && (f.math = Object.assign({}, w.math, f.math)), f = Object.assign({}, w, f), f.math.engine === "KaTeX")
                      (0, c.c)("".concat(f.cdn, "/dist/js/katex/katex.min.css?v=0.16.9"), "vditorKatexStyle"), (0, _.G)("".concat(f.cdn, "/dist/js/katex/katex.min.js?v=0.16.9"), "vditorKatexScript").then(function() {
                        (0, _.G)("".concat(f.cdn, "/dist/js/katex/mhchem.min.js?v=0.16.9"), "vditorKatexChemScript").then(function() {
                          E.forEach(function(s) {
                            if (!(s.parentElement.classList.contains("vditor-wysiwyg__pre") || s.parentElement.classList.contains("vditor-ir__marker--pre")) && !s.getAttribute("data-math")) {
                              var C = (0, l.X)(g.mathRenderAdapter.getCode(s));
                              s.setAttribute("data-math", C);
                              try {
                                s.innerHTML = katex.renderToString(C, {
                                  displayMode: s.tagName === "DIV",
                                  output: "html",
                                  macros: f.math.macros
                                });
                              } catch (A) {
                                s.innerHTML = A.message, s.className = "language-math vditor-reset--error";
                              }
                              s.addEventListener("copy", function(A) {
                                A.stopPropagation(), A.preventDefault();
                                var D = A.currentTarget.closest(".language-math");
                                A.clipboardData.setData("text/html", D.innerHTML), A.clipboardData.setData("text/plain", D.getAttribute("data-math"));
                              });
                            }
                          });
                        });
                      });
                    else if (f.math.engine === "MathJax") {
                      var b = function(s) {
                        if (s.length !== 0) {
                          var C = 0, A = s[s.length - 1], D = function() {
                            var k = s[C++];
                            k === A ? k() : k(D);
                          };
                          D();
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
                      }, Object.assign(window.MathJax, f.math.mathJaxOptions)), (0, _.J)("".concat(f.cdn, "/dist/js/mathjax/tex-svg-full.js"), "protyleMathJaxScript");
                      var y = function(s, C) {
                        var A = (0, l.X)(s.textContent).trim(), D = window.MathJax.getMetricsFor(s);
                        D.display = s.tagName === "DIV", window.MathJax.tex2svgPromise(A, D).then(function(k) {
                          s.innerHTML = "", s.setAttribute("data-math", A), s.append(k), window.MathJax.startup.document.clear(), window.MathJax.startup.document.updateDocument();
                          var P = k.querySelector('[data-mml-node="merror"]');
                          P && P.textContent.trim() !== "" && (s.innerHTML = P.textContent.trim(), s.className = "vditor-reset--error"), C && C();
                        });
                      };
                      window.MathJax.startup.promise.then(function() {
                        for (var s = [], C = function(D) {
                          var k = E[D];
                          !k.parentElement.classList.contains("vditor-wysiwyg__pre") && !k.parentElement.classList.contains("vditor-ir__marker--pre") && !k.getAttribute("data-math") && (0, l.X)(k.textContent).trim() && s.push(function(P) {
                            D === E.length - 1 ? y(k) : y(k, P);
                          });
                        }, A = 0; A < E.length; A++)
                          C(A);
                        b(s);
                      });
                    }
                  }
                };
              }
            ),
            /***/
            280: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    g
                  )
                  /* harmony export */
                });
                var x = L(494), _ = function(p, m) {
                  p.insertAdjacentHTML("afterend", '<video controls="controls" src="'.concat(m, '"></video>')), p.remove();
                }, c = function(p, m) {
                  p.insertAdjacentHTML("afterend", '<audio controls="controls" src="'.concat(m, '"></audio>')), p.remove();
                }, l = function(p, m) {
                  var f = m.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/), E = m.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), w = m.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/), b = m.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/), y = m.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/), s = m.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/), C = m.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/), A = m.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                  if (f && f[1].length === 11)
                    p.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//www.youtube.com/embed/'.concat(f[1] + (f[2] ? "?start=" + f[2] : ""), '"></iframe>')), p.remove();
                  else if (E && E[1])
                    p.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//player.youku.com/embed/'.concat(E[1], '"></iframe>')), p.remove();
                  else if (w && w[1])
                    p.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid='.concat(w[1], '"></iframe>')), p.remove();
                  else if (b && b[1])
                    p.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="//coub.com/embed/`.concat(b[1], '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>')), p.remove();
                  else if (y && y[0])
                    p.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.facebook.com/plugins/video.php?href=`.concat(encodeURIComponent(y[0]), '"></iframe>')), p.remove();
                  else if (s && s[2])
                    p.insertAdjacentHTML("afterend", `<iframe class="iframe__video"
 src="https://www.dailymotion.com/embed/video/`.concat(s[2], '"></iframe>')), p.remove();
                  else if (m.indexOf("bilibili.com") > -1 && (m.indexOf("bvid=") > -1 || C && C[1])) {
                    var D = {
                      bvid: (0, x.on)("bvid", m) || C && C[1],
                      page: "1",
                      high_quality: "1",
                      as_wide: "1",
                      allowfullscreen: "true",
                      autoplay: "0"
                    };
                    new URL(m.startsWith("http") ? m : "https:" + m).search.split("&").forEach(function(F, z) {
                      if (F) {
                        z === 0 && (F = F.substr(1));
                        var $ = F.split("=");
                        D[$[0]] = $[1];
                      }
                    });
                    var k = "https://player.bilibili.com/player.html?", P = Object.keys(D);
                    P.forEach(function(F, z) {
                      k += "".concat(F, "=").concat(D[F]), z < P.length - 1 && (k += "&");
                    }), p.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="'.concat(k, '"></iframe>')), p.remove();
                  } else A && A[1] && (p.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//embed.ted.com/talks/'.concat(A[1], '"></iframe>')), p.remove());
                }, g = function(p) {
                  p && p.querySelectorAll("a").forEach(function(m) {
                    var f = m.getAttribute("href");
                    f && (f.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/) ? _(m, f) : f.match(/^.+.(mp3|wav|flac)$/) ? c(m, f) : l(m, f));
                  });
                };
              }
            ),
            /***/
            637: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  i: () => (
                    /* binding */
                    m
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = L(494), g = function(f, E, w, b) {
                  function y(s) {
                    return s instanceof w ? s : new w(function(C) {
                      C(s);
                    });
                  }
                  return new (w || (w = Promise))(function(s, C) {
                    function A(P) {
                      try {
                        k(b.next(P));
                      } catch (F) {
                        C(F);
                      }
                    }
                    function D(P) {
                      try {
                        k(b.throw(P));
                      } catch (F) {
                        C(F);
                      }
                    }
                    function k(P) {
                      P.done ? s(P.value) : y(P.value).then(A, D);
                    }
                    k((b = b.apply(f, E || [])).next());
                  });
                }, p = function(f, E) {
                  var w = { label: 0, sent: function() {
                    if (s[0] & 1) throw s[1];
                    return s[1];
                  }, trys: [], ops: [] }, b, y, s, C;
                  return C = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
                    return this;
                  }), C;
                  function A(k) {
                    return function(P) {
                      return D([k, P]);
                    };
                  }
                  function D(k) {
                    if (b) throw new TypeError("Generator is already executing.");
                    for (; C && (C = 0, k[0] && (w = 0)), w; ) try {
                      if (b = 1, y && (s = k[0] & 2 ? y.return : k[0] ? y.throw || ((s = y.return) && s.call(y), 0) : y.next) && !(s = s.call(y, k[1])).done) return s;
                      switch (y = 0, s && (k = [k[0] & 2, s.value]), k[0]) {
                        case 0:
                        case 1:
                          s = k;
                          break;
                        case 4:
                          return w.label++, { value: k[1], done: !1 };
                        case 5:
                          w.label++, y = k[1], k = [0];
                          continue;
                        case 7:
                          k = w.ops.pop(), w.trys.pop();
                          continue;
                        default:
                          if (s = w.trys, !(s = s.length > 0 && s[s.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                            w = 0;
                            continue;
                          }
                          if (k[0] === 3 && (!s || k[1] > s[0] && k[1] < s[3])) {
                            w.label = k[1];
                            break;
                          }
                          if (k[0] === 6 && w.label < s[1]) {
                            w.label = s[1], s = k;
                            break;
                          }
                          if (s && w.label < s[2]) {
                            w.label = s[2], w.ops.push(k);
                            break;
                          }
                          s[2] && w.ops.pop(), w.trys.pop();
                          continue;
                      }
                      k = E.call(f, w);
                    } catch (P) {
                      k = [6, P], y = 0;
                    } finally {
                      b = s = 0;
                    }
                    if (k[0] & 5) throw k[1];
                    return { value: k[0] ? k[1] : void 0, done: !0 };
                  }
                }, m = function(f, E, w) {
                  f === void 0 && (f = document), E === void 0 && (E = x.g.CDN);
                  var b = c.mermaidRenderAdapter.getElements(f);
                  b.length !== 0 && (0, _.G)("".concat(E, "/dist/js/mermaid/mermaid.min.js?v=11.6.0"), "vditorMermaidScript").then(function() {
                    var y = {
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
                    w === "dark" && (y.theme = "dark"), mermaid.initialize(y), b.forEach(function(s) {
                      return g(void 0, void 0, void 0, function() {
                        var C, A, D, k, P;
                        return p(this, function(F) {
                          switch (F.label) {
                            case 0:
                              if (C = c.mermaidRenderAdapter.getCode(s), s.getAttribute("data-processed") === "true" || C.trim() === "")
                                return [
                                  2
                                  /*return*/
                                ];
                              A = "mermaid" + (0, l.Wb)(), F.label = 1;
                            case 1:
                              return F.trys.push([1, 3, , 4]), [4, mermaid.render(A, s.textContent)];
                            case 2:
                              return D = F.sent(), s.innerHTML = D.svg, [3, 4];
                            case 3:
                              return k = F.sent(), P = document.querySelector("#" + A), s.innerHTML = "".concat(P.outerHTML, `<br>
<div style="text-align: left"><small>`).concat(k.message.replace(/\n/, "<br>"), "</small></div>"), P.parentElement.remove(), [3, 4];
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  P: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = function(g, p, m) {
                  g === void 0 && (g = document), p === void 0 && (p = x.g.CDN);
                  var f = c.mindmapRenderAdapter.getElements(g);
                  f.length > 0 && (0, _.G)("".concat(p, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    f.forEach(function(E) {
                      if (!(E.parentElement.classList.contains("vditor-wysiwyg__pre") || E.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var w = c.mindmapRenderAdapter.getCode(E);
                        if (w)
                          try {
                            if (E.getAttribute("data-processed") === "true")
                              return;
                            echarts.init(E, m === "dark" ? "dark" : void 0).setOption({
                              series: [
                                {
                                  data: [JSON.parse(decodeURIComponent(w))],
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
                                  symbol: function(b, y) {
                                    var s;
                                    return !((s = y == null ? void 0 : y.data) === null || s === void 0) && s.children ? "circle" : "path://";
                                  },
                                  type: "tree"
                                }
                              ],
                              tooltip: {
                                trigger: "item",
                                triggerOn: "mousemove"
                              }
                            }), E.setAttribute("data-processed", "true");
                          } catch (b) {
                            E.className = "vditor-reset--error", E.innerHTML = "mindmap render error: <br>".concat(b);
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  k: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var x = L(771), _ = L(472), c = function(l, g, p) {
                  var m = "", f = [];
                  if (Array.from(l.children).forEach(function(y, s) {
                    if ((0, x.W)(y)) {
                      if (p) {
                        var C = y.id.lastIndexOf("_");
                        y.id = y.id.substring(0, C === -1 ? void 0 : C) + "_" + s;
                      }
                      f.push(y.id), m += y.outerHTML.replace("<wbr>", "");
                    }
                  }), m === "")
                    return g.innerHTML = "", "";
                  var E = document.createElement("div");
                  if (p)
                    p.lute.SetToC(!0), p.currentMode === "wysiwyg" && !p.preview.element.contains(l) ? E.innerHTML = p.lute.SpinVditorDOM("<p>[ToC]</p>" + m) : p.currentMode === "ir" && !p.preview.element.contains(l) ? E.innerHTML = p.lute.SpinVditorIRDOM("<p>[ToC]</p>" + m) : E.innerHTML = p.lute.HTML2VditorDOM("<p>[ToC]</p>" + m), p.lute.SetToC(p.options.preview.markdown.toc);
                  else {
                    g.classList.add("vditor-outline");
                    var w = Lute.New();
                    w.SetToC(!0), E.innerHTML = w.HTML2VditorDOM("<p>[ToC]</p>" + m);
                  }
                  var b = E.firstElementChild.querySelectorAll("li > span[data-target-id]");
                  return b.forEach(function(y, s) {
                    if (y.nextElementSibling && y.nextElementSibling.tagName === "UL") {
                      var C = "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                      document.getElementById("vditorIconScript") || (C = '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'), y.innerHTML = "".concat(C, "<span>").concat(y.innerHTML, "</span>");
                    } else
                      y.innerHTML = "<svg></svg><span>".concat(y.innerHTML, "</span>");
                    y.setAttribute("data-target-id", f[s]);
                  }), m = E.firstElementChild.innerHTML, b.length === 0 ? (g.innerHTML = "", m) : (g.innerHTML = m, p && (0, _.H)(g, {
                    cdn: p.options.cdn,
                    math: p.options.preview.math
                  }), g.firstElementChild.addEventListener("click", function(y) {
                    for (var s = y.target; s && !s.isEqualNode(g); ) {
                      if (s.classList.contains("vditor-outline__action")) {
                        s.classList.contains("vditor-outline__action--close") ? (s.classList.remove("vditor-outline__action--close"), s.parentElement.nextElementSibling.setAttribute("style", "display:block")) : (s.classList.add("vditor-outline__action--close"), s.parentElement.nextElementSibling.setAttribute("style", "display:none")), y.preventDefault(), y.stopPropagation();
                        break;
                      } else if (s.getAttribute("data-target-id")) {
                        y.preventDefault(), y.stopPropagation();
                        var C = document.getElementById(s.getAttribute("data-target-id"));
                        if (!C)
                          return;
                        if (p)
                          if (p.options.height === "auto") {
                            var A = C.offsetTop + p.element.offsetTop;
                            p.options.toolbarConfig.pin || (A += p.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, A);
                          } else
                            p.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, p.element.offsetTop), p.preview.element.contains(l) ? l.parentElement.scrollTop = C.offsetTop : l.scrollTop = C.offsetTop;
                        else
                          window.scrollTo(window.scrollX, C.offsetTop);
                        break;
                      }
                      s = s.parentElement;
                    }
                  }), m);
                };
              }
            ),
            /***/
            229: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  B: () => (
                    /* binding */
                    l
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(413), c = L(840), l = function(g, p) {
                  g === void 0 && (g = document), p === void 0 && (p = x.g.CDN);
                  var m = c.plantumlRenderAdapter.getElements(g);
                  m.length !== 0 && (0, _.G)("".concat(p, "/dist/js/plantuml/plantuml-encoder.min.js"), "vditorPlantumlScript").then(function() {
                    m.forEach(function(f) {
                      if (!(f.parentElement.classList.contains("vditor-wysiwyg__pre") || f.parentElement.classList.contains("vditor-ir__marker--pre"))) {
                        var E = c.plantumlRenderAdapter.getCode(f).trim();
                        if (E)
                          try {
                            f.innerHTML = '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1'.concat(plantumlEncoder.encode(E), '"/>');
                          } catch (w) {
                            f.className = "vditor-reset--error", f.innerHTML = "plantuml render error: <br>".concat(w);
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
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var x = function(_) {
                  var c = Lute.New();
                  return c.PutEmojis(_.emojis), c.SetEmojiSite(_.emojiSite), c.SetHeadingAnchor(_.headingAnchor), c.SetInlineMathAllowDigitAfterOpenMarker(_.inlineMathDigit), c.SetAutoSpace(_.autoSpace), c.SetToC(_.toc), c.SetFootnotes(_.footnotes), c.SetFixTermTypo(_.fixTermTypo), c.SetVditorCodeBlockPreview(_.codeBlockPreview), c.SetVditorMathBlockPreview(_.mathBlockPreview), c.SetSanitize(_.sanitize), c.SetChineseParagraphBeginningSpace(_.paragraphBeginningSpace), c.SetRenderListStyle(_.listStyle), c.SetLinkBase(_.linkBase), c.SetLinkPrefix(_.linkPrefix), c.SetMark(_.mark), c.SetGFMAutoLink(_.gfmAutoLink), _.lazyLoadImage && c.SetImageLazyLoading(_.lazyLoadImage), c;
                };
              }
            ),
            /***/
            190: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  E: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var x = function(_, c, l) {
                  l === void 0 && (l = "classic");
                  var g = _.getBoundingClientRect(), p = 36;
                  document.body.insertAdjacentHTML("beforeend", '<div class="vditor vditor-img'.concat(l === "dark" ? " vditor--dark" : "", `">
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
      <img style="width: `).concat(_.width, "px;height:").concat(_.height, "px;transform: translate3d(").concat(g.left, "px, ").concat(g.top - p, 'px, 0)" src="').concat(_.getAttribute("src"), `">
    </div>
</div>`)), document.body.style.overflow = "hidden";
                  var m = document.querySelector(".vditor-img img"), f = "translate3d(".concat(Math.max(0, window.innerWidth - _.naturalWidth) / 2, "px, ").concat(Math.max(0, window.innerHeight - p - _.naturalHeight) / 2, "px, 0)");
                  setTimeout(function() {
                    m.setAttribute("style", "transition: transform .3s ease-in-out;transform: ".concat(f)), setTimeout(function() {
                      m.parentElement.scrollTo((m.parentElement.scrollWidth - m.parentElement.clientWidth) / 2, (m.parentElement.scrollHeight - m.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                  var E = document.querySelector(".vditor-img__btn");
                  E.addEventListener("click", function() {
                    var w = parseInt(E.getAttribute("data-deg"), 10) + 90;
                    w / 90 % 2 === 1 && _.naturalWidth > m.parentElement.clientHeight ? m.style.transform = "translate3d(".concat(Math.max(0, window.innerWidth - _.naturalWidth) / 2, "px, ").concat(_.naturalWidth / 2 - _.naturalHeight / 2, "px, 0) rotateZ(").concat(w, "deg)") : m.style.transform = "".concat(f, " rotateZ(").concat(w, "deg)"), E.setAttribute("data-deg", w.toString()), setTimeout(function() {
                      m.parentElement.scrollTo((m.parentElement.scrollWidth - m.parentElement.clientWidth) / 2, (m.parentElement.scrollHeight - m.parentElement.clientHeight) / 2);
                    }, 400);
                  });
                };
              }
            ),
            /***/
            580: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  Y: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(290), c = function(l, g) {
                  g === void 0 && (g = x.g.CDN), x.g.CODE_THEME.includes(l) || (l = "github");
                  var p = document.getElementById("vditorHljsStyle"), m = "".concat(g, "/dist/js/highlight.js/styles/").concat(l, ".min.css");
                  p ? p.getAttribute("href") !== m && (p.remove(), (0, _.c)(m, "vditorHljsStyle")) : (0, _.c)(m, "vditorHljsStyle");
                };
              }
            ),
            /***/
            538: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  Z: () => (
                    /* binding */
                    _
                  )
                  /* harmony export */
                });
                var x = L(290), _ = function(c, l) {
                  if (!(!c || !l)) {
                    var g = document.getElementById("vditorContentTheme"), p = "".concat(l, "/").concat(c, ".css");
                    g ? g.getAttribute("href") !== p && (g.remove(), (0, x.c)(p, "vditorContentTheme")) : (0, x.c)(p, "vditorContentTheme");
                  }
                };
              }
            ),
            /***/
            413: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  J: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  G: () => (
                    /* binding */
                    _
                  )
                  /* harmony export */
                });
                var x = function(c, l) {
                  if (document.getElementById(l))
                    return !1;
                  var g = new XMLHttpRequest();
                  g.open("GET", c, !1), g.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), g.send("");
                  var p = document.createElement("script");
                  p.type = "text/javascript", p.text = g.responseText, p.id = l, document.head.appendChild(p);
                }, _ = function(c, l) {
                  return new Promise(function(g, p) {
                    if (document.getElementById(l))
                      return g(!0), !1;
                    var m = document.createElement("script");
                    m.src = c, m.async = !0, document.head.appendChild(m), m.onerror = function(f) {
                      p(f);
                    }, m.onload = function() {
                      if (document.getElementById(l))
                        return m.remove(), g(!0), !1;
                      m.id = l, g(!0);
                    };
                  });
                };
              }
            ),
            /***/
            290: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  c: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var x = function(_, c) {
                  if (!document.getElementById(c)) {
                    var l = document.createElement("link");
                    l.id = c, l.rel = "stylesheet", l.type = "text/css", l.href = _, document.getElementsByTagName("head")[0].appendChild(l);
                  }
                };
              }
            ),
            /***/
            105: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  X: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var x = function(_) {
                  return _.replace(/\u00a0/g, " ");
                };
              }
            ),
            /***/
            410: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  G6: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  vU: () => (
                    /* binding */
                    _
                  ),
                  /* harmony export */
                  pK: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  Le: () => (
                    /* binding */
                    l
                  ),
                  /* harmony export */
                  yl: () => (
                    /* binding */
                    g
                  ),
                  /* harmony export */
                  ns: () => (
                    /* binding */
                    p
                  ),
                  /* harmony export */
                  i7: () => (
                    /* binding */
                    m
                  )
                  /* harmony export */
                });
                var x = function() {
                  return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1;
                }, _ = function() {
                  return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                }, c = function() {
                  try {
                    return typeof localStorage < "u";
                  } catch {
                    return !1;
                  }
                }, l = function() {
                  return navigator.userAgent.indexOf("iPhone") > -1 ? "touchstart" : "click";
                }, g = function(f) {
                  return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? !!(f.metaKey && !f.ctrlKey) : !!(!f.metaKey && f.ctrlKey);
                }, p = function(f) {
                  return /Mac/.test(navigator.platform) || navigator.platform === "iPhone" ? f.indexOf("⇧") > -1 && _() && (f = f.replace(";", ":").replace("=", "+").replace("-", "_")) : (f.startsWith("⌘") ? f = f.replace("⌘", "⌘+") : f.startsWith("⌥") && f.substr(1, 1) !== "⌘" ? f = f.replace("⌥", "⌥+") : f = f.replace("⇧⌘", "⌘+⇧+").replace("⌥⌘", "⌥+⌘+"), f = f.replace("⌘", "Ctrl").replace("⇧", "Shift").replace("⌥", "Alt"), f.indexOf("Shift") > -1 && (f = f.replace(";", ":").replace("=", "+").replace("-", "_"))), f;
                }, m = function() {
                  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                };
              }
            ),
            /***/
            494: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  Wb: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  on: () => (
                    /* binding */
                    _
                  ),
                  /* harmony export */
                  Qf: () => (
                    /* binding */
                    c
                  )
                  /* harmony export */
                });
                var x = function() {
                  return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(l) {
                    return (parseInt(l, 10) ^ window.crypto.getRandomValues(new Uint32Array(1))[0] & 15 >> parseInt(l, 10) / 4).toString(16);
                  });
                }, _ = function(l, g) {
                  g === void 0 && (g = window.location.search);
                  var p = g.substring(g.indexOf("?")), m = p.indexOf("#"), f = new URLSearchParams(p.substring(0, m >= 0 ? m : void 0));
                  return f.get(l);
                }, c = function(l) {
                  return Function('"use strict";return ('.concat(l, ")"))();
                };
              }
            ),
            /***/
            106: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  JQ: () => (
                    /* binding */
                    _
                  ),
                  /* harmony export */
                  E2: () => (
                    /* binding */
                    c
                  ),
                  /* harmony export */
                  O9: () => (
                    /* binding */
                    l
                  ),
                  /* harmony export */
                  a1: () => (
                    /* binding */
                    g
                  ),
                  /* harmony export */
                  F9: () => (
                    /* binding */
                    p
                  ),
                  /* harmony export */
                  lG: () => (
                    /* binding */
                    m
                  ),
                  /* harmony export */
                  fb: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  DX: () => (
                    /* binding */
                    E
                  )
                  /* harmony export */
                });
                var x = L(771), _ = function(w, b) {
                  for (var y = f(w, b), s = !1, C = !1; y && !y.classList.contains("vditor-reset") && !C; )
                    s = f(y.parentElement, b), s ? y = s : C = !0;
                  return y || !1;
                }, c = function(w, b) {
                  for (var y = (0, x.S)(w, b), s = !1, C = !1; y && !y.classList.contains("vditor-reset") && !C; )
                    s = (0, x.S)(y.parentElement, b), s ? y = s : C = !0;
                  return y || !1;
                }, l = function(w) {
                  var b = c(w, "UL"), y = c(w, "OL"), s = b;
                  return y && (!b || b && y.contains(b)) && (s = y), s;
                }, g = function(w, b, y) {
                  if (!w)
                    return !1;
                  w.nodeType === 3 && (w = w.parentElement);
                  for (var s = w, C = !1; s && !C && !s.classList.contains("vditor-reset"); )
                    s.getAttribute(b) === y ? C = !0 : s = s.parentElement;
                  return C && s;
                }, p = function(w) {
                  if (!w)
                    return !1;
                  w.nodeType === 3 && (w = w.parentElement);
                  var b = w, y = !1, s = g(w, "data-block", "0");
                  if (s)
                    return s;
                  for (; b && !y && !b.classList.contains("vditor-reset"); )
                    b.tagName === "H1" || b.tagName === "H2" || b.tagName === "H3" || b.tagName === "H4" || b.tagName === "H5" || b.tagName === "H6" || b.tagName === "P" || b.tagName === "BLOCKQUOTE" || b.tagName === "OL" || b.tagName === "UL" ? y = !0 : b = b.parentElement;
                  return y && b;
                }, m = function(w, b) {
                  if (!w)
                    return !1;
                  w.nodeType === 3 && (w = w.parentElement);
                  for (var y = w, s = !1; y && !s && !y.classList.contains("vditor-reset"); )
                    y.nodeName === b ? s = !0 : y = y.parentElement;
                  return s && y;
                }, f = function(w, b) {
                  if (!w)
                    return !1;
                  w.nodeType === 3 && (w = w.parentElement);
                  for (var y = w, s = !1; y && !s && !y.classList.contains("vditor-reset"); )
                    y.classList.contains(b) ? s = !0 : y = y.parentElement;
                  return s && y;
                }, E = function(w) {
                  for (; w && w.lastChild; )
                    w = w.lastChild;
                  return w;
                };
              }
            ),
            /***/
            771: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  S: () => (
                    /* binding */
                    x
                  ),
                  /* harmony export */
                  W: () => (
                    /* binding */
                    _
                  )
                  /* harmony export */
                });
                var x = function(c, l) {
                  if (!c)
                    return !1;
                  c.nodeType === 3 && (c = c.parentElement);
                  for (var g = c, p = !1; g && !p && !g.classList.contains("vditor-reset"); )
                    g.nodeName.indexOf(l) === 0 ? p = !0 : g = g.parentElement;
                  return p && g;
                }, _ = function(c) {
                  var l = x(c, "H");
                  return l && l.tagName.length === 2 && l.tagName !== "HR" ? l : !1;
                };
              }
            ),
            /***/
            673: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  T: () => (
                    /* binding */
                    x
                  )
                  /* harmony export */
                });
                var x = function() {
                  for (var _ = [], c = 0; c < arguments.length; c++)
                    _[c] = arguments[c];
                  for (var l = {}, g = function(m) {
                    for (var f in m)
                      m.hasOwnProperty(f) && (Object.prototype.toString.call(m[f]) === "[object Object]" ? l[f] = x(l[f], m[f]) : l[f] = m[f]);
                  }, p = 0; p < _.length; p++)
                    g(_[p]);
                  return l;
                };
              }
            ),
            /***/
            810: (
              /***/
              (Z, v, L) => {
                L.d(v, {
                  /* harmony export */
                  zh: () => (
                    /* binding */
                    l
                  ),
                  /* harmony export */
                  Ny: () => (
                    /* binding */
                    g
                  ),
                  /* harmony export */
                  Gb: () => (
                    /* binding */
                    p
                  ),
                  /* harmony export */
                  Hc: () => (
                    /* binding */
                    m
                  ),
                  /* harmony export */
                  im: () => (
                    /* binding */
                    f
                  ),
                  /* harmony export */
                  $j: () => (
                    /* binding */
                    E
                  ),
                  /* harmony export */
                  ib: () => (
                    /* binding */
                    w
                  ),
                  /* harmony export */
                  oC: () => (
                    /* binding */
                    b
                  )
                  /* harmony export */
                });
                var x = L(145), _ = L(410), c = L(106), l = function(y) {
                  var s, C = y[y.currentMode].element;
                  return getSelection().rangeCount > 0 && (s = getSelection().getRangeAt(0), C.isEqualNode(s.startContainer) || C.contains(s.startContainer)) ? s : y[y.currentMode].range ? y[y.currentMode].range : (C.focus(), s = C.ownerDocument.createRange(), s.setStart(C, 0), s.collapse(!0), s);
                }, g = function(y) {
                  var s = window.getSelection().getRangeAt(0);
                  if (!y.contains(s.startContainer) && !(0, c.fb)(s.startContainer, "vditor-panel--none"))
                    return {
                      left: 0,
                      top: 0
                    };
                  var C = y.parentElement.getBoundingClientRect(), A;
                  if (s.getClientRects().length === 0)
                    if (s.startContainer.nodeType === 3) {
                      var D = s.startContainer.parentElement;
                      if (D && D.getClientRects().length > 0)
                        A = D.getClientRects()[0];
                      else
                        return {
                          left: 0,
                          top: 0
                        };
                    } else {
                      var k = s.startContainer.children;
                      if (k[s.startOffset] && k[s.startOffset].getClientRects().length > 0)
                        A = k[s.startOffset].getClientRects()[0];
                      else if (s.startContainer.childNodes.length > 0) {
                        var P = s.cloneRange();
                        s.selectNode(s.startContainer.childNodes[Math.max(0, s.startOffset - 1)]), A = s.getClientRects()[0], s.setEnd(P.endContainer, P.endOffset), s.setStart(P.startContainer, P.startOffset);
                      } else
                        A = s.startContainer.getClientRects()[0];
                      if (!A) {
                        for (var F = s.startContainer.childNodes[s.startOffset]; !F.getClientRects || F.getClientRects && F.getClientRects().length === 0; )
                          F = F.parentElement;
                        A = F.getClientRects()[0];
                      }
                    }
                  else
                    A = s.getClientRects()[0];
                  return {
                    left: A.left - C.left,
                    top: A.top - C.top
                  };
                }, p = function(y, s) {
                  if (!s) {
                    if (getSelection().rangeCount === 0)
                      return !1;
                    s = getSelection().getRangeAt(0);
                  }
                  var C = s.commonAncestorContainer;
                  return y.isEqualNode(C) || y.contains(C);
                }, m = function(y) {
                  var s = window.getSelection();
                  s.removeAllRanges(), s.addRange(y);
                }, f = function(y, s, C) {
                  var A = {
                    end: 0,
                    start: 0
                  };
                  if (!C) {
                    if (getSelection().rangeCount === 0)
                      return A;
                    C = window.getSelection().getRangeAt(0);
                  }
                  if (p(s, C)) {
                    var D = C.cloneRange();
                    y.childNodes[0] && y.childNodes[0].childNodes[0] ? D.setStart(y.childNodes[0].childNodes[0], 0) : D.selectNodeContents(y), D.setEnd(C.startContainer, C.startOffset), A.start = D.toString().length, A.end = A.start + C.toString().length;
                  }
                  return A;
                }, E = function(y, s, C) {
                  var A = 0, D = 0, k = C.childNodes[D], P = !1, F = !1;
                  y = Math.max(0, y), s = Math.max(0, s);
                  var z = C.ownerDocument.createRange();
                  for (z.setStart(k || C, 0), z.collapse(!0); !F && k; ) {
                    var $ = A + k.textContent.length;
                    if (!P && y >= A && y <= $ && (y === 0 ? z.setStart(k, 0) : k.childNodes[0].nodeType === 3 ? z.setStart(k.childNodes[0], y - A) : k.nextSibling ? z.setStartBefore(k.nextSibling) : z.setStartAfter(k), P = !0, y === s)) {
                      F = !0;
                      break;
                    }
                    P && s >= A && s <= $ && (s === 0 ? z.setEnd(k, 0) : k.childNodes[0].nodeType === 3 ? z.setEnd(k.childNodes[0], s - A) : k.nextSibling ? z.setEndBefore(k.nextSibling) : z.setEndAfter(k), F = !0), A = $, k = C.childNodes[++D];
                  }
                  return !F && C.childNodes[D - 1] && z.setStartBefore(C.childNodes[D - 1]), m(z), z;
                }, w = function(y, s) {
                  var C = y.querySelector("wbr");
                  if (C) {
                    if (!C.previousElementSibling)
                      C.previousSibling ? s.setStart(C.previousSibling, C.previousSibling.textContent.length) : C.nextSibling ? C.nextSibling.nodeType === 3 ? s.setStart(C.nextSibling, 0) : s.setStartBefore(C.nextSibling) : s.setStart(C.parentElement, 0);
                    else if (C.previousElementSibling.isSameNode(C.previousSibling))
                      if (C.previousElementSibling.lastChild) {
                        s.setStartBefore(C), s.collapse(!0), m(s), (0, _.i7)() && (C.previousElementSibling.tagName === "EM" || C.previousElementSibling.tagName === "STRONG" || C.previousElementSibling.tagName === "S") && (s.insertNode(document.createTextNode(x.g.ZWSP)), s.collapse(!1)), C.remove();
                        return;
                      } else
                        s.setStartAfter(C.previousElementSibling);
                    else
                      s.setStart(C.previousSibling, C.previousSibling.textContent.length);
                    s.collapse(!0), C.remove(), m(s);
                  }
                }, b = function(y, s) {
                  var C = document.createElement("div");
                  C.innerHTML = y;
                  var A = C.querySelectorAll("p");
                  A.length === 1 && !A[0].previousSibling && !A[0].nextSibling && s[s.currentMode].element.children.length > 0 && C.firstElementChild.tagName === "P" && (y = A[0].innerHTML.trim());
                  var D = document.createElement("div");
                  D.innerHTML = y;
                  var k = l(s);
                  if (k.toString() !== "" && (s[s.currentMode].preventInput = !0, document.execCommand("delete", !1, "")), D.firstElementChild && D.firstElementChild.getAttribute("data-block") === "0") {
                    D.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
                    var P = (0, c.F9)(k.startContainer);
                    if (!P)
                      s[s.currentMode].element.insertAdjacentHTML("beforeend", D.innerHTML);
                    else {
                      var F = (0, c.lG)(k.startContainer, "LI");
                      F && D.firstElementChild.tagName === "UL" ? F.insertAdjacentHTML("afterend", D.firstElementChild.innerHTML) : P.insertAdjacentHTML("afterend", D.innerHTML);
                    }
                    w(s[s.currentMode].element, k);
                  } else {
                    var z = document.createElement("template");
                    z.innerHTML = y, k.insertNode(z.content.cloneNode(!0)), k.collapse(!1), m(k);
                  }
                };
              }
            )
            /******/
          }, be = {};
          function Y(Z) {
            var v = be[Z];
            if (v !== void 0)
              return v.exports;
            var L = be[Z] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return ge[Z](L, L.exports, Y), L.exports;
          }
          Y.d = (Z, v) => {
            for (var L in v)
              Y.o(v, L) && !Y.o(Z, L) && Object.defineProperty(Z, L, { enumerable: !0, get: v[L] });
          }, Y.o = (Z, v) => Object.prototype.hasOwnProperty.call(Z, v), Y.r = (Z) => {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(Z, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(Z, "__esModule", { value: !0 });
          };
          var Be = {};
          return (() => {
            Y.d(Be, {
              default: () => (
                /* binding */
                Bi
              )
            });
            var Z = Y(408), v = Y(145), L = Y(105), x = function(e) {
              return e.currentMode === "sv" ? (0, L.X)("".concat(e.sv.element.textContent, `
`).replace(/\n\n$/, `
`)) : e.currentMode === "wysiwyg" ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML) : e.currentMode === "ir" ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML) : "";
            }, _ = Y(413), c = (
              /** @class */
              function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-devtools", this.element.innerHTML = '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>';
                }
                return e.prototype.renderEchart = function(t) {
                  var n = this;
                  t.devtools.element.style.display === "block" && (0, _.G)("".concat(t.options.cdn, "/dist/js/echarts/echarts.min.js?v=5.5.1"), "vditorEchartsScript").then(function() {
                    n.ASTChart || (n.ASTChart = echarts.init(t.devtools.element.lastElementChild));
                    try {
                      n.element.lastElementChild.style.display = "block", n.element.firstElementChild.innerHTML = "", n.ASTChart.setOption({
                        series: [
                          {
                            data: JSON.parse(t.lute.RenderEChartsJSON(x(t))),
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
            ), l = Y(410), g = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && r.classList.contains("vditor-menu--current") && r.classList.remove("vditor-menu--current");
                }
              });
            }, p = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && !r.classList.contains("vditor-menu--current") && r.classList.add("vditor-menu--current");
                }
              });
            }, m = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && r.classList.contains(v.g.CLASS_MENU_DISABLED) && r.classList.remove(v.g.CLASS_MENU_DISABLED);
                }
              });
            }, f = function(e, t) {
              t.forEach(function(n) {
                if (e[n]) {
                  var r = e[n].children[0];
                  r && !r.classList.contains(v.g.CLASS_MENU_DISABLED) && r.classList.add(v.g.CLASS_MENU_DISABLED);
                }
              });
            }, E = function(e, t) {
              t.forEach(function(n) {
                e[n] && e[n] && (e[n].style.display = "none");
              });
            }, w = function(e, t) {
              t.forEach(function(n) {
                e[n] && e[n] && (e[n].style.display = "block");
              });
            }, b = function(e, t, n) {
              t.includes("subToolbar") && (e.toolbar.element.querySelectorAll(".vditor-hint").forEach(function(r) {
                n && r.isEqualNode(n) || (r.style.display = "none");
              }), e.toolbar.elements.emoji && (e.toolbar.elements.emoji.lastElementChild.style.display = "none")), t.includes("hint") && (e.hint.element.style.display = "none"), e.wysiwyg.popover && t.includes("popover") && (e.wysiwyg.popover.style.display = "none");
            }, y = function(e, t, n, r) {
              n.addEventListener((0, l.Le)(), function(i) {
                i.preventDefault(), i.stopPropagation(), !n.classList.contains(v.g.CLASS_MENU_DISABLED) && (e.toolbar.element.querySelectorAll(".vditor-hint--current").forEach(function(a) {
                  a.classList.remove("vditor-hint--current");
                }), t.style.display === "block" ? t.style.display = "none" : (b(e, ["subToolbar", "hint", "popover"], n.parentElement.parentElement), n.classList.contains("vditor-tooltipped") || n.classList.add("vditor-hint--current"), t.style.display = "block", e.toolbar.element.getBoundingClientRect().right - n.getBoundingClientRect().right < 250 ? t.classList.add("vditor-panel--left") : t.classList.remove("vditor-panel--left")));
              });
            }, s = Y(106), C = Y(771), A = function(e, t, n, r) {
              r && console.log("".concat(e, " - ").concat(n, ": ").concat(t));
            }, D = Y(135), k = Y(775), P = Y(428), F = Y(325), z = Y(483), $ = Y(999), re = Y(472), se = Y(637), we = Y(11), de = Y(194), ce = Y(229), Ce = Y(825), Ae = function(e, t, n) {
              n === void 0 && (n = "sv");
              var r = document.createElement("div");
              r.innerHTML = e;
              var i = !1;
              r.childElementCount === 1 && r.lastElementChild.style.fontFamily.indexOf("monospace") > -1 && (i = !0);
              var a = r.querySelectorAll("pre");
              if (r.childElementCount === 1 && a.length === 1 && a[0].className !== "vditor-wysiwyg" && a[0].className !== "vditor-sv" && (i = !0), e.indexOf(`
<p class="p1">`) === 0 && (i = !0), r.childElementCount === 1 && r.firstElementChild.tagName === "TABLE" && r.querySelector(".line-number") && r.querySelector(".line-content") && (i = !0), i) {
                var o = t || e;
                return /\n/.test(o) || a.length === 1 ? n === "wysiwyg" ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>'.concat(o.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "<wbr></code></pre></div>") : "\n```\n" + o.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "\n```" : n === "wysiwyg" ? "<code>".concat(o.replace(/&/g, "&amp;").replace(/</g, "&lt;"), "</code><wbr>") : "`".concat(o, "`");
              }
              return !1;
            }, Le = function(e, t) {
              if (e) {
                if (e.parentElement.getAttribute("data-type") === "html-block") {
                  e.setAttribute("data-render", "1");
                  return;
                }
                var n = e.firstElementChild.className.replace("language-", "");
                if (n === "abc")
                  (0, D.Q)(e, t.options.cdn);
                else if (n === "mermaid")
                  (0, se.i)(e, t.options.cdn, t.options.theme);
                else if (n === "smiles")
                  (0, Ce.J)(e, t.options.cdn, t.options.theme);
                else if (n === "markmap")
                  (0, we.K)(e, t.options.cdn);
                else if (n === "flowchart")
                  (0, F.P)(e, t.options.cdn);
                else if (n === "echarts")
                  (0, k.p)(e, t.options.cdn, t.options.theme);
                else if (n === "mindmap")
                  (0, de.P)(e, t.options.cdn, t.options.theme);
                else if (n === "plantuml")
                  (0, ce.B)(e, t.options.cdn);
                else if (n === "graphviz")
                  (0, z.v)(e, t.options.cdn);
                else if (n === "math")
                  (0, re.H)(e, { cdn: t.options.cdn, math: t.options.preview.math });
                else {
                  var r = t.options.customRenders.find(function(i) {
                    if (i.language === n)
                      return i.render(e, t), !0;
                  });
                  r || ((0, $.s)(Object.assign({}, t.options.preview.hljs), e, t.options.cdn), (0, P.O)(e, t.options.preview.hljs));
                }
                e.setAttribute("data-render", "1");
              }
            }, M = Y(810), Ve = function(e) {
              if (e.currentMode !== "sv") {
                var t = e[e.currentMode].element, n = e.outline.render(e);
                n === "" && (n = "[ToC]"), t.querySelectorAll('[data-type="toc-block"]').forEach(function(r) {
                  r.innerHTML = n, (0, re.H)(r, {
                    cdn: e.options.cdn,
                    math: e.options.preview.math
                  });
                });
              }
            }, gt = function(e, t) {
              var n = (0, s.lG)(e.target, "SPAN");
              if (n && (0, s.fb)(n, "vditor-toc")) {
                var r = t[t.currentMode].element.querySelector("#" + n.getAttribute("data-target-id"));
                if (r)
                  if (t.options.height === "auto") {
                    var i = r.offsetTop + t.element.offsetTop;
                    t.options.toolbarConfig.pin || (i += t.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, i);
                  } else
                    t.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, t.element.offsetTop), t[t.currentMode].element.scrollTop = r.offsetTop;
                return;
              }
            }, yt = function(e, t, n, r) {
              if (e.previousElementSibling && e.previousElementSibling.classList.contains("vditor-toc")) {
                if (n.key === "Backspace" && (0, M.im)(e, t[t.currentMode].element, r).start === 0)
                  return e.previousElementSibling.remove(), ee(t), !0;
                if (nt(t, n, r, e, e.previousElementSibling))
                  return !0;
              }
              if (e.nextElementSibling && e.nextElementSibling.classList.contains("vditor-toc")) {
                if (n.key === "Delete" && (0, M.im)(e, t[t.currentMode].element, r).start >= e.textContent.trimRight().length)
                  return e.nextElementSibling.remove(), ee(t), !0;
                if (dt(t, n, r, e, e.nextElementSibling))
                  return !0;
              }
              if (n.key === "Backspace" || n.key === "Delete") {
                var i = (0, s.fb)(r.startContainer, "vditor-toc");
                if (i)
                  return i.remove(), ee(t), !0;
              }
            }, ze = function(e, t, n, r) {
              n === void 0 && (n = !1);
              var i = (0, s.F9)(t.startContainer);
              if (i && !n && i.getAttribute("data-type") !== "code-block") {
                if (qt(i.innerHTML) && i.previousElementSibling || zt(i.innerHTML))
                  return;
                for (
                  var a = (0, M.im)(i, e.ir.element, t).start, o = !0, u = a - 1;
                  // 软换行后有空格
                  u > i.textContent.substr(0, a).lastIndexOf(`
`);
                  u--
                )
                  if (i.textContent.charAt(u) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  i.textContent.charAt(u) !== "	") {
                    o = !1;
                    break;
                  }
                a === 0 && (o = !1);
                for (var h = !0, u = a - 1; u < i.textContent.length; u++)
                  if (i.textContent.charAt(u) !== " " && i.textContent.charAt(u) !== `
`) {
                    h = !1;
                    break;
                  }
                if (o) {
                  typeof e.options.input == "function" && e.options.input(x(e));
                  return;
                }
                if (h && /^#{1,6} $/.test(i.textContent) && (h = !1), h) {
                  var d = (0, s.fb)(t.startContainer, "vditor-ir__marker");
                  if (!d) {
                    var S = t.startContainer.previousSibling;
                    S && S.nodeType !== 3 && S.classList.contains("vditor-ir__node--expand") && S.classList.remove("vditor-ir__node--expand"), typeof e.options.input == "function" && e.options.input(x(e));
                    return;
                  }
                }
              }
              if (e.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(Q) {
                Q.classList.remove("vditor-ir__node--expand");
              }), i || (i = e.ir.element), !i.querySelector("wbr")) {
                var T = (0, s.fb)(t.startContainer, "vditor-ir__preview");
                T ? T.previousElementSibling.insertAdjacentHTML("beforeend", "<wbr>") : t.insertNode(document.createElement("wbr"));
              }
              i.querySelectorAll("[style]").forEach(function(Q) {
                Q.removeAttribute("style");
              }), i.getAttribute("data-type") === "link-ref-defs-block" && (i = e.ir.element);
              var N = i.isEqualNode(e.ir.element), R = (0, s.a1)(i, "data-type", "footnotes-block"), H = "";
              if (N)
                H = i.innerHTML;
              else {
                var U = (0, C.S)(t.startContainer, "BLOCKQUOTE"), B = (0, s.O9)(t.startContainer);
                if (B && (i = B), U && (!B || B && !U.contains(B)) && (i = U), R && (i = R), H = i.outerHTML, i.tagName === "UL" || i.tagName === "OL") {
                  var O = i.previousElementSibling, G = i.nextElementSibling;
                  O && (O.tagName === "UL" || O.tagName === "OL") && (H = O.outerHTML + H, O.remove()), G && (G.tagName === "UL" || G.tagName === "OL") && (H = H + G.outerHTML, G.remove()), H = H.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                } else i.previousElementSibling && i.previousElementSibling.textContent.replace(v.g.ZWSP, "") !== "" && r && r.inputType === "insertParagraph" && (H = i.previousElementSibling.outerHTML + H, i.previousElementSibling.remove());
                i.innerText.startsWith("```") || (e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(Q) {
                  Q && !i.isEqualNode(Q) && (H += Q.outerHTML, Q.remove());
                }), e.ir.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(Q) {
                  Q && !i.isEqualNode(Q) && (H += Q.outerHTML, Q.remove());
                }));
              }
              if (A("SpinVditorIRDOM", H, "argument", e.options.debugger), H = e.lute.SpinVditorIRDOM(H), A("SpinVditorIRDOM", H, "result", e.options.debugger), N)
                i.innerHTML = H;
              else if (i.outerHTML = H, R) {
                var V = (0, s.a1)(e.ir.element.querySelector("wbr"), "data-type", "footnotes-def");
                if (V) {
                  var J = V.textContent, le = J.substring(1, J.indexOf("]:")), oe = e.ir.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(le, '"]'));
                  oe && oe.setAttribute("aria-label", J.substr(le.length + 3).trim().substr(0, 24));
                }
              }
              var fe, De = e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']");
              De.forEach(function(Q, Se) {
                Se === 0 ? fe = Q : (fe.insertAdjacentHTML("beforeend", Q.innerHTML), Q.remove());
              }), De.length > 0 && e.ir.element.insertAdjacentElement("beforeend", De[0]);
              var _e, He = e.ir.element.querySelectorAll("[data-type='footnotes-block']");
              He.forEach(function(Q, Se) {
                Se === 0 ? _e = Q : (_e.insertAdjacentHTML("beforeend", Q.innerHTML), Q.remove());
              }), He.length > 0 && e.ir.element.insertAdjacentElement("beforeend", He[0]), (0, M.ib)(e.ir.element, t), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(Q) {
                Le(Q, e);
              }), Ve(e), Ke(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, I = function(e, t) {
              if (e === "")
                return !1;
              if (e.indexOf("⇧") === -1 && e.indexOf("⌘") === -1 && e.indexOf("⌥") === -1)
                return !(0, l.yl)(t) && !t.altKey && !t.shiftKey && t.code === e;
              if (e === "⇧Tab")
                return !!(!(0, l.yl)(t) && !t.altKey && t.shiftKey && t.code === "Tab");
              var n = e.split("");
              if (e.startsWith("⌥")) {
                var r = n.length === 3 ? n[2] : n[1];
                return !!((n.length === 3 ? (0, l.yl)(t) : !(0, l.yl)(t)) && t.altKey && !t.shiftKey && t.code === (/^[0-9]$/.test(r) ? "Digit" : "Key") + r);
              }
              e === "⌘Enter" && (n = ["⌘", "Enter"]);
              var i = n.length > 2 && n[0] === "⇧", a = i ? n[2] : n[1];
              return i && ((0, l.vU)() || !/Mac/.test(navigator.platform)) && (a === "-" ? a = "_" : a === "=" && (a = "+")), !!((0, l.yl)(t) && t.key.toLowerCase() === a.toLowerCase() && !t.altKey && (!i && !t.shiftKey || i && t.shiftKey));
            }, ie = function(e) {
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
                  var i = t.parentElement.parentElement.nextSibling;
                  if (i && i.nodeType !== 3 && i.classList.contains("vditor-ir__node"))
                    return i;
                }
                return !1;
              }
              return !1;
            }, W = function(e) {
              var t = e.startContainer, n = t.previousSibling;
              return t.nodeType === 3 && e.startOffset === 0 && n && n.nodeType !== 3 && // *em*|text
              n.classList.contains("vditor-ir__node") && !n.getAttribute("data-block") ? n : !1;
            }, j = function(e, t) {
              t.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(o) {
                o.classList.remove("vditor-ir__node--expand");
              });
              var n = (0, s.JQ)(e.startContainer, "vditor-ir__node"), r = !e.collapsed && (0, s.JQ)(e.endContainer, "vditor-ir__node");
              if (!(!e.collapsed && (!n || n !== r))) {
                n && (n.classList.add("vditor-ir__node--expand"), n.classList.remove("vditor-ir__node--hidden"), (0, M.Hc)(e));
                var i = ie(e);
                if (i) {
                  i.classList.add("vditor-ir__node--expand"), i.classList.remove("vditor-ir__node--hidden");
                  return;
                }
                var a = W(e);
                if (a) {
                  a.classList.add("vditor-ir__node--expand"), a.classList.remove("vditor-ir__node--hidden");
                  return;
                }
              }
            }, he = function(e, t) {
              if (e.ir.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var n = (0, M.zh)(e), r = n.startContainer;
              if (!bn(t, e, r) || (wn(n, e, t), Nn(n), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, l.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var i = (0, s.a1)(r, "data-newline", "1");
              if (!(0, l.yl)(t) && !t.altKey && !t.shiftKey && t.key === "Enter" && i && n.startOffset < i.textContent.length) {
                var a = i.previousElementSibling;
                a && (n.insertNode(document.createTextNode(a.textContent)), n.collapse(!1));
                var o = i.nextSibling;
                o && (n.insertNode(document.createTextNode(o.textContent)), n.collapse(!0));
              }
              var u = (0, s.lG)(r, "P");
              if (Ln(t, e, u, n) || Cn(n, e, u, t) || Dn(e, n, t, u))
                return !0;
              var h = (0, s.fb)(r, "vditor-ir__marker--pre");
              if (h && h.tagName === "PRE") {
                var d = h.firstChild;
                if (xn(e, t, h, n) || (d.getAttribute("data-type") === "math-block" || d.getAttribute("data-type") === "html-block") && nt(e, t, n, d, h.parentElement) || dt(e, t, n, d, h.parentElement))
                  return !0;
              }
              var S = (0, s.a1)(r, "data-type", "code-block-info");
              if (S) {
                if (t.key === "Enter" || t.key === "Tab")
                  return n.selectNodeContents(S.nextElementSibling.firstChild), n.collapse(!0), t.preventDefault(), b(e, ["hint"]), !0;
                if (t.key === "Backspace") {
                  var T = (0, M.im)(S, e.ir.element).start;
                  T === 1 && n.setStart(r, 0), T === 2 && (e.hint.recentLanguage = "");
                }
                if (nt(e, t, n, S, S.parentElement))
                  return b(e, ["hint"]), !0;
              }
              var N = (0, s.lG)(r, "TD") || (0, s.lG)(r, "TH");
              if (t.key.indexOf("Arrow") > -1 && N) {
                var R = Sr(N);
                if (R && nt(e, t, n, N, R))
                  return !0;
                var H = Cr(N);
                if (H && dt(e, t, n, N, H))
                  return !0;
              }
              if (An(e, t, n) || Hn(e, n, t) || Gt(e, n, t))
                return !0;
              var U = (0, C.W)(r);
              if (U) {
                if (I("⌘=", t)) {
                  var B = U.querySelector(".vditor-ir__marker--heading");
                  return B && B.textContent.trim().length > 1 && pt(e, B.textContent.substr(1)), t.preventDefault(), !0;
                }
                if (I("⌘-", t)) {
                  var B = U.querySelector(".vditor-ir__marker--heading");
                  return B && B.textContent.trim().length < 6 && pt(e, B.textContent.trim() + "# "), t.preventDefault(), !0;
                }
              }
              var O = (0, s.F9)(r);
              if (t.key === "Backspace" && !(0, l.yl)(t) && !t.shiftKey && !t.altKey && n.toString() === "") {
                if (On(e, n, t, u))
                  return !0;
                if (O && O.previousElementSibling && O.tagName !== "UL" && O.tagName !== "OL" && (O.previousElementSibling.getAttribute("data-type") === "code-block" || O.previousElementSibling.getAttribute("data-type") === "math-block")) {
                  var G = (0, M.im)(O, e.ir.element, n).start;
                  if (G === 0 || G === 1 && O.innerText.startsWith(v.g.ZWSP))
                    return n.selectNodeContents(O.previousElementSibling.querySelector(".vditor-ir__marker--pre code")), n.collapse(!1), j(n, e), O.textContent.trim().replace(v.g.ZWSP, "") === "" && (O.remove(), Ke(e)), t.preventDefault(), !0;
                }
                if (U) {
                  var V = U.firstElementChild.textContent.length;
                  (0, M.im)(U, e.ir.element).start === V && V !== 0 && (n.setStart(U.firstElementChild.firstChild, V - 1), n.collapse(!0), (0, M.Hc)(n));
                }
              }
              return (t.key === "ArrowUp" || t.key === "ArrowDown") && O && (O.querySelectorAll(".vditor-ir__node").forEach(function(J) {
                J.contains(r) || J.classList.add("vditor-ir__node--hidden");
              }), Rn(t, O, n)) ? !0 : (vn(n, t.key), O && yt(O, e, t, n) ? (t.preventDefault(), !0) : !1);
            }, q = Y(190), ve = function(e, t) {
              e.querySelectorAll("[data-type=footnotes-link]").forEach(function(n) {
                for (var r = n.parentElement, i = r.nextSibling; i && i.textContent.startsWith("    "); ) {
                  var a = i;
                  a.childNodes.forEach(function(o) {
                    r.append(o.cloneNode(!0));
                  }), i = i.nextSibling, a.remove();
                }
                t && t(r);
              });
            }, ae = function(e, t) {
              var n, r = getSelection().getRangeAt(0).cloneRange(), i = r.startContainer;
              r.startContainer.nodeType !== 3 && r.startContainer.tagName === "DIV" && (i = r.startContainer.childNodes[r.startOffset - 1]);
              var a = (0, s.a1)(i, "data-block", "0");
              if (a && t && (t.inputType === "deleteContentBackward" || t.data === " ")) {
                for (
                  var o = (0, M.im)(a, e.sv.element, r).start, u = !0, h = o - 1;
                  // 软换行后有空格
                  h > a.textContent.substr(0, o).lastIndexOf(`
`);
                  h--
                )
                  if (a.textContent.charAt(h) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                  a.textContent.charAt(h) !== "	") {
                    u = !1;
                    break;
                  }
                if (o === 0 && (u = !1), u) {
                  ke(e);
                  return;
                }
                if (t.inputType === "deleteContentBackward") {
                  var d = (0, s.a1)(i, "data-type", "code-block-open-marker") || (0, s.a1)(i, "data-type", "code-block-close-marker");
                  if (d) {
                    if (d.getAttribute("data-type") === "code-block-close-marker") {
                      var S = vt(i, "code-block-open-marker");
                      if (S) {
                        S.textContent = d.textContent, ke(e);
                        return;
                      }
                    }
                    if (d.getAttribute("data-type") === "code-block-open-marker") {
                      var S = vt(i, "code-block-close-marker", !1);
                      if (S) {
                        S.textContent = d.textContent, ke(e);
                        return;
                      }
                    }
                  }
                  var T = (0, s.a1)(i, "data-type", "math-block-open-marker");
                  if (T) {
                    var N = T.nextElementSibling.nextElementSibling;
                    N && N.getAttribute("data-type") === "math-block-close-marker" && (N.remove(), ke(e));
                    return;
                  }
                  a.querySelectorAll('[data-type="code-block-open-marker"]').forEach(function(O) {
                    O.textContent.length === 1 && O.remove();
                  }), a.querySelectorAll('[data-type="code-block-close-marker"]').forEach(function(O) {
                    O.textContent.length === 1 && O.remove();
                  });
                  var R = (0, s.a1)(i, "data-type", "heading-marker");
                  if (R && R.textContent.indexOf("#") === -1) {
                    ke(e);
                    return;
                  }
                }
                if ((t.data === " " || t.inputType === "deleteContentBackward") && ((0, s.a1)(i, "data-type", "padding") || (0, s.a1)(i, "data-type", "li-marker") || (0, s.a1)(i, "data-type", "task-marker") || (0, s.a1)(i, "data-type", "blockquote-marker"))) {
                  ke(e);
                  return;
                }
              }
              if (a && a.textContent.trimRight() === "$$") {
                ke(e);
                return;
              }
              a || (a = e.sv.element), ((n = a.firstElementChild) === null || n === void 0 ? void 0 : n.getAttribute("data-type")) === "link-ref-defs-block" && (a = e.sv.element), (0, s.a1)(i, "data-type", "footnotes-link") && (a = e.sv.element), a.textContent.indexOf(Lute.Caret) === -1 && r.insertNode(document.createTextNode(Lute.Caret)), a.querySelectorAll("[style]").forEach(function(O) {
                O.removeAttribute("style");
              }), a.querySelectorAll("font").forEach(function(O) {
                O.outerHTML = O.innerHTML;
              });
              var H = a.textContent, U = a.isEqualNode(e.sv.element);
              if (U)
                H = a.textContent;
              else {
                a.previousElementSibling && (H = a.previousElementSibling.textContent + H, a.previousElementSibling.remove()), a.previousElementSibling && H.indexOf(`---
`) === 0 && (H = a.previousElementSibling.textContent + H, a.previousElementSibling.remove());
                var B = "";
                e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(O, G) {
                  O && !a.isEqualNode(O.parentElement) && (B += O.parentElement.textContent + `
`, O.parentElement.remove());
                }), e.sv.element.querySelectorAll("[data-type='footnotes-link']").forEach(function(O, G) {
                  O && !a.isEqualNode(O.parentElement) && (B += O.parentElement.textContent + `
`, O.parentElement.remove());
                }), H = B + H;
              }
              H = dn(H, e), U ? a.innerHTML = H : a.outerHTML = H, e.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(O) {
                e.sv.element.insertAdjacentElement("beforeend", O.parentElement);
              }), ve(e.sv.element, function(O) {
                e.sv.element.insertAdjacentElement("beforeend", O);
              }), (0, M.ib)(e.sv.element, r), Ee(e), ke(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, Te = function(e, t) {
              var n, r, i, a, o;
              if (e.sv.composingLock = t.isComposing, t.isComposing || (t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, l.yl)(t) && t.key !== "Escape"))
                return !1;
              var u = (0, M.zh)(e), h = u.startContainer;
              u.startContainer.nodeType !== 3 && u.startContainer.tagName === "DIV" && (h = u.startContainer.childNodes[u.startOffset - 1]);
              var d = (0, s.a1)(h, "data-type", "text"), S = (0, s.a1)(h, "data-type", "blockquote-marker");
              if (!S && u.startOffset === 0 && d && d.previousElementSibling && d.previousElementSibling.getAttribute("data-type") === "blockquote-marker" && (S = d.previousElementSibling), S && t.key === "Enter" && !(0, l.yl)(t) && !t.altKey && S.nextElementSibling.textContent.trim() === "" && (0, M.im)(S, e.sv.element, u).start === S.textContent.length)
                return ((n = S.previousElementSibling) === null || n === void 0 ? void 0 : n.getAttribute("data-type")) === "padding" && S.previousElementSibling.setAttribute("data-action", "enter-remove"), S.remove(), ke(e), t.preventDefault(), !0;
              var T = (0, s.a1)(h, "data-type", "li-marker"), N = (0, s.a1)(h, "data-type", "task-marker"), R = T;
              if (R || N && N.nextElementSibling.getAttribute("data-type") !== "task-marker" && (R = N), !R && u.startOffset === 0 && d && d.previousElementSibling && (d.previousElementSibling.getAttribute("data-type") === "li-marker" || d.previousElementSibling.getAttribute("data-type") === "task-marker") && (R = d.previousElementSibling), R) {
                var H = (0, M.im)(R, e.sv.element, u).start, U = R.getAttribute("data-type") === "task-marker", B = R;
                if (U && (B = R.previousElementSibling.previousElementSibling.previousElementSibling), H === R.textContent.length) {
                  if (t.key === "Enter" && !(0, l.yl)(t) && !t.altKey && !t.shiftKey && R.nextElementSibling.textContent.trim() === "")
                    return ((r = B.previousElementSibling) === null || r === void 0 ? void 0 : r.getAttribute("data-type")) === "padding" ? (B.previousElementSibling.remove(), ae(e)) : (U && (B.remove(), R.previousElementSibling.previousElementSibling.remove(), R.previousElementSibling.remove()), R.nextElementSibling.remove(), R.remove(), ke(e)), t.preventDefault(), !0;
                  if (t.key === "Tab")
                    return t.shiftKey ? B.previousElementSibling.getAttribute("data-type") === "padding" && B.previousElementSibling.remove() : B.insertAdjacentHTML("beforebegin", '<span data-type="padding">'.concat(B.textContent.replace(/\S/g, " "), "</span>")), /^\d/.test(B.textContent) && (B.textContent = B.textContent.replace(/^\d{1,}/, "1"), u.selectNodeContents(R.firstChild), u.collapse(!1)), ae(e), t.preventDefault(), !0;
                }
              }
              if (Gt(e, u, t))
                return !0;
              var O = (0, s.a1)(h, "data-block", "0"), G = (0, C.S)(h, "SPAN");
              if (t.key === "Enter" && !(0, l.yl)(t) && !t.altKey && !t.shiftKey && O) {
                var V = !1, J = O.textContent.match(/^\n+/);
                (0, M.im)(O, e.sv.element).start <= (J ? J[0].length : 0) && (V = !0);
                var le = `
`;
                if (G) {
                  if (((i = G.previousElementSibling) === null || i === void 0 ? void 0 : i.getAttribute("data-action")) === "enter-remove")
                    return G.previousElementSibling.remove(), ke(e), t.preventDefault(), !0;
                  le += hr(G);
                }
                return u.insertNode(document.createTextNode(le)), u.collapse(!1), O && O.textContent.trim() !== "" && !V ? ae(e) : ke(e), t.preventDefault(), !0;
              }
              if (t.key === "Backspace" && !(0, l.yl)(t) && !t.altKey && !t.shiftKey) {
                if (G && ((a = G.previousElementSibling) === null || a === void 0 ? void 0 : a.getAttribute("data-type")) === "newline" && (0, M.im)(G, e.sv.element, u).start === 1 && // 飘号的处理需在 inputEvent 中，否则上下飘号对不齐
                G.getAttribute("data-type").indexOf("code-block-") === -1)
                  return u.setStart(G, 0), u.extractContents(), G.textContent.trim() !== "" ? ae(e) : ke(e), t.preventDefault(), !0;
                if (O && (0, M.im)(O, e.sv.element, u).start === 0 && O.previousElementSibling) {
                  u.extractContents();
                  var oe = O.previousElementSibling.lastElementChild;
                  return oe.getAttribute("data-type") === "newline" && (oe.remove(), oe = O.previousElementSibling.lastElementChild), oe.getAttribute("data-type") !== "newline" && (oe.insertAdjacentHTML("afterend", O.innerHTML), O.remove()), O.textContent.trim() !== "" && !(!((o = O.previousElementSibling) === null || o === void 0) && o.querySelector('[data-type="code-block-open-marker"]')) ? ae(e) : (oe.getAttribute("data-type") !== "newline" && (u.selectNodeContents(oe.lastChild), u.collapse(!1)), ke(e)), t.preventDefault(), !0;
                }
              }
              return !1;
            }, X = Y(538), pe = function(e) {
              e.options.theme === "dark" ? e.element.classList.add("vditor--dark") : e.element.classList.remove("vditor--dark");
            }, Oe = function(e) {
              e.element.innerHTML = "", e.element.classList.add("vditor"), e.options.rtl && e.element.setAttribute("dir", "rtl"), pe(e), (0, X.Z)(e.options.preview.theme.current, e.options.preview.theme.path), typeof e.options.height == "number" ? e.element.style.height = e.options.height + "px" : e.element.style.height = e.options.height, typeof e.options.minHeight == "number" && (e.element.style.minHeight = e.options.minHeight + "px"), typeof e.options.width == "number" ? e.element.style.width = e.options.width + "px" : e.element.style.width = e.options.width, e.element.appendChild(e.toolbar.element);
              var t = document.createElement("div");
              if (t.className = "vditor-content", e.options.outline.position === "left" && t.appendChild(e.outline.element), t.appendChild(e.wysiwyg.element.parentElement), t.appendChild(e.sv.element), t.appendChild(e.ir.element.parentElement), t.appendChild(e.preview.element), e.toolbar.elements.devtools && t.appendChild(e.devtools.element), e.options.outline.position === "right" && (e.outline.element.classList.add("vditor-outline--right"), t.appendChild(e.outline.element)), e.upload && t.appendChild(e.upload.element), e.options.resize.enable && t.appendChild(e.resize.element), t.appendChild(e.hint.element), t.appendChild(e.tip.element), e.element.appendChild(t), t.addEventListener("click", function() {
                b(e, ["subToolbar"]);
              }), e.toolbar.elements.export && e.element.insertAdjacentHTML("beforeend", '<iframe id="vditorExportIframe" style="width: 100%;height: 0;border: 0"></iframe>'), Qe(e, e.options.mode, rr(e)), document.execCommand("DefaultParagraphSeparator", !1, "p"), navigator.userAgent.indexOf("iPhone") > -1 && typeof window.visualViewport < "u") {
                var n = !1, r = function(i) {
                  n || (n = !0, requestAnimationFrame(function() {
                    n = !1;
                    var a = e.toolbar.element;
                    a.style.transform = "none", a.getBoundingClientRect().top < 0 && (a.style.transform = "translate(0, ".concat(-a.getBoundingClientRect().top, "px)"));
                  }));
                };
                window.visualViewport.addEventListener("scroll", r), window.visualViewport.addEventListener("resize", r);
              }
            }, Ie = function(e) {
              var t = window.innerWidth <= v.g.MOBILE_WIDTH ? 10 : 35;
              if (e.wysiwyg.element.parentElement.style.display !== "none") {
                var n = (e.wysiwyg.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.wysiwyg.element.style.padding = "10px ".concat(Math.max(t, n), "px");
              }
              if (e.ir.element.parentElement.style.display !== "none") {
                var n = (e.ir.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.ir.element.style.padding = "10px ".concat(Math.max(t, n), "px");
              }
              e.preview.element.style.display !== "block" ? e.toolbar.element.style.paddingLeft = Math.max(5, parseInt(e[e.currentMode].element.style.paddingLeft || "0", 10) + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0)) + "px" : e.toolbar.element.style.paddingLeft = 5 + (e.options.outline.position === "left" ? e.outline.element.offsetWidth : 0) + "px";
            }, bt = function(e) {
              if (e.options.typewriterMode) {
                var t = window.innerHeight;
                typeof e.options.height == "number" ? (t = e.options.height, typeof e.options.minHeight == "number" && (t = Math.max(t, e.options.minHeight)), t = Math.min(window.innerHeight, t)) : t = e.element.clientHeight, e.element.classList.contains("vditor--fullscreen") && (t = window.innerHeight), e[e.currentMode].element.style.setProperty("--editor-bottom", (t - e.toolbar.element.offsetHeight) / 2 + "px");
              }
            }, an;
            function on() {
              window.removeEventListener("resize", an);
            }
            var rr = function(e) {
              bt(e), on(), window.addEventListener("resize", an = function() {
                Ie(e), bt(e);
              });
              var t = (0, l.pK)() && localStorage.getItem(e.options.cache.id);
              return (!e.options.cache.enable || !t) && (e.options.value ? t = e.options.value : e.originalInnerHTML ? t = e.lute.HTML2Md(e.originalInnerHTML) : e.options.cache.enable || (t = "")), t || "";
            }, st = function(e) {
              clearTimeout(e[e.currentMode].hlToolbarTimeoutId), e[e.currentMode].hlToolbarTimeoutId = window.setTimeout(function() {
                if (e[e.currentMode].element.getAttribute("contenteditable") !== "false" && (0, M.Gb)(e[e.currentMode].element)) {
                  g(e.toolbar.elements, v.g.EDIT_TOOLBARS), m(e.toolbar.elements, v.g.EDIT_TOOLBARS);
                  var t = (0, M.zh)(e), n = t.startContainer;
                  t.startContainer.nodeType === 3 && (n = t.startContainer.parentElement), n.classList.contains("vditor-reset") && (n = n.childNodes[t.startOffset]);
                  var r = e.currentMode === "sv" ? (0, s.a1)(n, "data-type", "heading") : (0, C.W)(n);
                  r && p(e.toolbar.elements, ["headings"]);
                  var i = e.currentMode === "sv" ? (0, s.a1)(n, "data-type", "blockquote") : (0, s.lG)(n, "BLOCKQUOTE");
                  i && p(e.toolbar.elements, ["quote"]);
                  var a = (0, s.a1)(n, "data-type", "strong");
                  a && p(e.toolbar.elements, ["bold"]);
                  var o = (0, s.a1)(n, "data-type", "em");
                  o && p(e.toolbar.elements, ["italic"]);
                  var u = (0, s.a1)(n, "data-type", "s");
                  u && p(e.toolbar.elements, ["strike"]);
                  var h = (0, s.a1)(n, "data-type", "a");
                  h && p(e.toolbar.elements, ["link"]);
                  var d = (0, s.lG)(n, "LI");
                  d ? (d.classList.contains("vditor-task") ? p(e.toolbar.elements, ["check"]) : d.parentElement.tagName === "OL" ? p(e.toolbar.elements, ["ordered-list"]) : d.parentElement.tagName === "UL" && p(e.toolbar.elements, ["list"]), m(e.toolbar.elements, ["outdent", "indent"])) : f(e.toolbar.elements, ["outdent", "indent"]);
                  var S = (0, s.a1)(n, "data-type", "code-block");
                  S && (f(e.toolbar.elements, [
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
                  ]), p(e.toolbar.elements, ["code"]));
                  var T = (0, s.a1)(n, "data-type", "code");
                  T && (f(e.toolbar.elements, [
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
                  ]), p(e.toolbar.elements, ["inline-code"]));
                  var N = (0, s.a1)(n, "data-type", "table");
                  N && f(e.toolbar.elements, [
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
            }, ue = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), clearTimeout(e.wysiwyg.afterRenderTimeoutId), e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function() {
                if (!e.wysiwyg.composingLock) {
                  var n = x(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, l.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, ir = function(e) {
              for (var t = e.previousSibling; t; ) {
                if (t.nodeType !== 3 && t.tagName === "A" && !t.previousSibling && t.innerHTML.replace(v.g.ZWSP, "") === "" && t.nextSibling)
                  return t;
                t = t.previousSibling;
              }
              return !1;
            }, ar = function(e) {
              for (var t = e.startContainer.nextSibling; t && t.textContent === ""; )
                t = t.nextSibling;
              return !!(t && t.nodeType !== 3 && (t.tagName === "CODE" || t.getAttribute("data-type") === "math-inline" || t.getAttribute("data-type") === "html-entity" || t.getAttribute("data-type") === "html-inline"));
            }, sn = function(e) {
              for (var t = "", n = e.nextSibling; n; )
                n.nodeType === 3 ? t += n.textContent : t += n.outerHTML, n = n.nextSibling;
              return t;
            }, ln = function(e) {
              for (var t = "", n = e.previousSibling; n; )
                n.nodeType === 3 ? t = n.textContent + t : t = n.outerHTML + t, n = n.previousSibling;
              return t;
            }, or = function(e) {
              for (var t = e; t && !t.nextSibling; )
                t = t.parentElement;
              return t.nextSibling;
            }, sr = function(e) {
              var t = ln(e.startContainer), n = sn(e.startContainer), r = e.startContainer.textContent, i = e.startOffset, a = "", o = "";
              return (r.substr(0, i) !== "" && r.substr(0, i) !== v.g.ZWSP || t) && (a = "".concat(t).concat(r.substr(0, i))), (r.substr(i) !== "" && r.substr(i) !== v.g.ZWSP || n) && (o = "".concat(r.substr(i)).concat(n)), {
                afterHTML: o,
                beforeHTML: a
              };
            }, Ht = function(e, t) {
              Array.from(e.wysiwyg.element.childNodes).find(function(n) {
                if (n.nodeType === 3) {
                  var r = document.createElement("p");
                  r.setAttribute("data-block", "0"), r.textContent = n.textContent;
                  var i = t.startContainer.nodeType === 3 ? t.startOffset : n.textContent.length;
                  return n.parentNode.insertBefore(r, n), n.remove(), t.setStart(r.firstChild, Math.min(r.firstChild.textContent.length, i)), t.collapse(!0), (0, M.Hc)(t), !0;
                } else if (!n.getAttribute("data-block"))
                  return n.tagName === "P" ? n.remove() : (n.tagName === "DIV" ? (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.innerHTML, "</p>")) : n.tagName === "BR" ? n.outerHTML = '<p data-block="0">'.concat(n.outerHTML, "<wbr></p>") : (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.outerHTML, "</p>")), (0, M.ib)(e.wysiwyg.element, t), t = getSelection().getRangeAt(0)), !0;
              });
            }, wt = function(e, t) {
              var n = (0, M.zh)(e), r = (0, s.F9)(n.startContainer);
              r || (r = n.startContainer.childNodes[n.startOffset]), !r && e.wysiwyg.element.children.length === 0 && (r = e.wysiwyg.element), r && !r.classList.contains("vditor-wysiwyg__block") && (n.insertNode(document.createElement("wbr")), r.innerHTML.trim() === "<wbr>" && (r.innerHTML = "<wbr><br>"), r.tagName === "BLOCKQUOTE" || r.classList.contains("vditor-reset") ? r.innerHTML = "<".concat(t, ' data-block="0">').concat(r.innerHTML.trim(), "</").concat(t, ">") : r.outerHTML = "<".concat(t, ' data-block="0">').concat(r.innerHTML.trim(), "</").concat(t, ">"), (0, M.ib)(e.wysiwyg.element, n), Ve(e));
            }, Ot = function(e) {
              var t = getSelection().getRangeAt(0), n = (0, s.F9)(t.startContainer);
              n || (n = t.startContainer.childNodes[t.startOffset]), n && (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">'.concat(n.innerHTML, "</p>"), (0, M.ib)(e.wysiwyg.element, t)), e.wysiwyg.popover.style.display = "none";
            }, lt = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e.previousElementSibling, i = r.ownerDocument.createRange();
              r.tagName === "CODE" ? (r.style.display = "inline-block", n ? i.setStart(r.firstChild, 1) : i.selectNodeContents(r)) : (r.style.display = "block", r.firstChild.firstChild || r.firstChild.appendChild(document.createTextNode("")), i.selectNodeContents(r.firstChild)), n ? i.collapse(!0) : i.collapse(!1), (0, M.Hc)(i), !e.firstElementChild.classList.contains("language-mindmap") && Ee(t);
            }, lr = function(e, t) {
              if (e.wysiwyg.composingLock = t.isComposing, t.isComposing)
                return !1;
              t.key.indexOf("Arrow") === -1 && t.key !== "Meta" && t.key !== "Control" && t.key !== "Alt" && t.key !== "Shift" && t.key !== "CapsLock" && t.key !== "Escape" && !/^F\d{1,2}$/.test(t.key) && e.undo.recordFirstPosition(e, t);
              var n = (0, M.zh)(e), r = n.startContainer;
              if (!bn(t, e, r) || (wn(n, e, t), Nn(n), t.key !== "Enter" && t.key !== "Tab" && t.key !== "Backspace" && t.key.indexOf("Arrow") === -1 && !(0, l.yl)(t) && t.key !== "Escape" && t.key !== "Delete"))
                return !1;
              var i = (0, s.F9)(r), a = (0, s.lG)(r, "P");
              if (Ln(t, e, a, n) || Cn(n, e, a, t) || An(e, t, n))
                return !0;
              var o = (0, s.fb)(r, "vditor-wysiwyg__block");
              if (o) {
                if (t.key === "Escape" && o.children.length === 2)
                  return e.wysiwyg.popover.style.display = "none", o.firstElementChild.style.display = "none", e.wysiwyg.element.blur(), t.preventDefault(), !0;
                if (!(0, l.yl)(t) && !t.shiftKey && t.altKey && t.key === "Enter" && o.getAttribute("data-type") === "code-block") {
                  var u = e.wysiwyg.popover.querySelector(".vditor-input");
                  return u.focus(), u.select(), t.preventDefault(), !0;
                }
                if (o.getAttribute("data-block") === "0" && (xn(e, t, o.firstElementChild, n) || dt(e, t, n, o.firstElementChild, o) || o.getAttribute("data-type") !== "yaml-front-matter" && nt(e, t, n, o.firstElementChild, o)))
                  return !0;
              }
              if (Dn(e, n, t, a))
                return !0;
              var h = (0, s.E2)(r, "BLOCKQUOTE");
              if (h && !t.shiftKey && t.altKey && t.key === "Enter") {
                (0, l.yl)(t) ? n.setStartBefore(h) : n.setStartAfter(h), (0, M.Hc)(n);
                var d = document.createElement("p");
                return d.setAttribute("data-block", "0"), d.innerHTML = `
`, n.insertNode(d), n.collapse(!0), (0, M.Hc)(n), ue(e), Ee(e), t.preventDefault(), !0;
              }
              var S = (0, C.W)(r);
              if (S) {
                if (S.tagName === "H6" && r.textContent.length === n.startOffset && !(0, l.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter") {
                  var T = document.createElement("p");
                  return T.textContent = `
`, T.setAttribute("data-block", "0"), r.parentElement.insertAdjacentElement("afterend", T), n.setStart(T, 0), (0, M.Hc)(n), ue(e), Ee(e), t.preventDefault(), !0;
                }
                if (I("⌘=", t)) {
                  var N = parseInt(S.tagName.substr(1), 10) - 1;
                  return N > 0 && (wt(e, "h".concat(N)), ue(e)), t.preventDefault(), !0;
                }
                if (I("⌘-", t)) {
                  var N = parseInt(S.tagName.substr(1), 10) + 1;
                  return N < 7 && (wt(e, "h".concat(N)), ue(e)), t.preventDefault(), !0;
                }
                t.key === "Backspace" && !(0, l.yl)(t) && !t.shiftKey && !t.altKey && S.textContent.length === 1 && Ot(e);
              }
              if (Hn(e, n, t))
                return !0;
              if (t.altKey && t.key === "Enter" && !(0, l.yl)(t) && !t.shiftKey) {
                var R = (0, s.lG)(r, "A"), H = (0, s.a1)(r, "data-type", "link-ref"), U = (0, s.a1)(r, "data-type", "footnotes-ref");
                if (R || H || U || S && S.tagName.length === 2) {
                  var B = e.wysiwyg.popover.querySelector("input");
                  B.focus(), B.select();
                }
              }
              if (xe(e, t))
                return !0;
              if (I("⇧⌘U", t)) {
                var O = e.wysiwyg.popover.querySelector('[data-type="up"]');
                if (O)
                  return O.click(), t.preventDefault(), !0;
              }
              if (I("⇧⌘D", t)) {
                var O = e.wysiwyg.popover.querySelector('[data-type="down"]');
                if (O)
                  return O.click(), t.preventDefault(), !0;
              }
              if (Gt(e, n, t))
                return !0;
              if (!(0, l.yl)(t) && t.shiftKey && !t.altKey && t.key === "Enter" && r.parentElement.tagName !== "LI" && r.parentElement.tagName !== "P")
                return ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r.parentElement.tagName) ? n.insertNode(document.createTextNode(`
` + v.g.ZWSP)) : n.insertNode(document.createTextNode(`
`)), n.collapse(!1), (0, M.Hc)(n), ue(e), Ee(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, l.yl)(t) && !t.shiftKey && !t.altKey && n.toString() === "") {
                if (On(e, n, t, a))
                  return !0;
                if (i) {
                  if (i.previousElementSibling && i.previousElementSibling.classList.contains("vditor-wysiwyg__block") && i.previousElementSibling.getAttribute("data-block") === "0" && i.tagName !== "UL" && i.tagName !== "OL") {
                    var G = (0, M.im)(i, e.wysiwyg.element, n).start;
                    if (G === 0 && n.startOffset === 0 || // https://github.com/Vanessa219/vditor/issues/894
                    G === 1 && i.innerText.startsWith(v.g.ZWSP))
                      return lt(i.previousElementSibling.lastElementChild, e, !1), i.innerHTML.trim().replace(v.g.ZWSP, "") === "" && (i.remove(), ue(e)), t.preventDefault(), !0;
                  }
                  var V = n.startOffset;
                  if (n.toString() === "" && r.nodeType === 3 && r.textContent.charAt(V - 2) === `
` && r.textContent.charAt(V - 1) !== v.g.ZWSP && ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r.parentElement.tagName))
                    return r.textContent = r.textContent.substring(0, V - 1) + v.g.ZWSP, n.setStart(r, V), n.collapse(!0), ue(e), t.preventDefault(), !0;
                  r.textContent === v.g.ZWSP && n.startOffset === 1 && !r.previousSibling && ar(n) && (r.textContent = ""), i.querySelectorAll("span.vditor-wysiwyg__block[data-type='math-inline']").forEach(function(le) {
                    le.firstElementChild.style.display = "inline", le.lastElementChild.style.display = "none";
                  }), i.querySelectorAll("span.vditor-wysiwyg__block[data-type='html-entity']").forEach(function(le) {
                    le.firstElementChild.style.display = "inline", le.lastElementChild.style.display = "none";
                  });
                }
              }
              if ((0, l.vU)() && n.startOffset === 1 && r.textContent.indexOf(v.g.ZWSP) > -1 && r.previousSibling && r.previousSibling.nodeType !== 3 && r.previousSibling.tagName === "CODE" && (t.key === "Backspace" || t.key === "ArrowLeft"))
                return n.selectNodeContents(r.previousSibling), n.collapse(!1), t.preventDefault(), !0;
              if (Rn(t, i, n))
                return t.preventDefault(), !0;
              if (vn(n, t.key), t.key === "ArrowDown") {
                var J = r.nextSibling;
                J && J.nodeType !== 3 && J.getAttribute("data-type") === "math-inline" && n.setStartAfter(J);
              }
              return i && yt(i, e, t, n) ? (t.preventDefault(), !0) : !1;
            }, xe = function(e, t) {
              if (I("⇧⌘X", t)) {
                var n = e.wysiwyg.popover.querySelector('[data-type="remove"]');
                return n && n.click(), t.preventDefault(), !0;
              }
            }, Ye = function(e) {
              clearTimeout(e.wysiwyg.hlToolbarTimeoutId), e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function() {
                if (e.wysiwyg.element.getAttribute("contenteditable") !== "false" && (0, M.Gb)(e.wysiwyg.element)) {
                  g(e.toolbar.elements, v.g.EDIT_TOOLBARS), m(e.toolbar.elements, v.g.EDIT_TOOLBARS);
                  var t = getSelection().getRangeAt(0), n = t.startContainer;
                  t.startContainer.nodeType === 3 ? n = t.startContainer.parentElement : n = n.childNodes[t.startOffset >= n.childNodes.length ? n.childNodes.length - 1 : t.startOffset];
                  var r = (0, s.a1)(n, "data-type", "footnotes-block");
                  if (r) {
                    e.wysiwyg.popover.innerHTML = "", je(r, e), Ne(e, "footnotes-block"), Pe(e, r);
                    return;
                  }
                  var i = (0, s.lG)(n, "LI");
                  i ? (i.classList.contains("vditor-task") ? p(e.toolbar.elements, ["check"]) : i.parentElement.tagName === "OL" ? p(e.toolbar.elements, ["ordered-list"]) : i.parentElement.tagName === "UL" && p(e.toolbar.elements, ["list"]), m(e.toolbar.elements, ["outdent", "indent"])) : f(e.toolbar.elements, ["outdent", "indent"]), (0, s.lG)(n, "BLOCKQUOTE") && p(e.toolbar.elements, ["quote"]), ((0, s.lG)(n, "B") || (0, s.lG)(n, "STRONG")) && p(e.toolbar.elements, ["bold"]), ((0, s.lG)(n, "I") || (0, s.lG)(n, "EM")) && p(e.toolbar.elements, ["italic"]), ((0, s.lG)(n, "STRIKE") || (0, s.lG)(n, "S")) && p(e.toolbar.elements, ["strike"]), e.wysiwyg.element.querySelectorAll(".vditor-comment--focus").forEach(function(K) {
                    K.classList.remove("vditor-comment--focus");
                  });
                  var a = (0, s.fb)(n, "vditor-comment");
                  if (a) {
                    var o = a.getAttribute("data-cmtids").split(" ");
                    if (o.length > 1 && a.nextSibling.isSameNode(a.nextElementSibling)) {
                      var u = a.nextElementSibling.getAttribute("data-cmtids").split(" ");
                      o.find(function(K) {
                        if (u.includes(K))
                          return o = [K], !0;
                      });
                    }
                    e.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(K) {
                      K.getAttribute("data-cmtids").indexOf(o[0]) > -1 && K.classList.add("vditor-comment--focus");
                    });
                  }
                  var h = (0, s.lG)(n, "A");
                  h && p(e.toolbar.elements, ["link"]);
                  var d = (0, s.lG)(n, "TABLE"), S = (0, C.W)(n);
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
                  ]), p(e.toolbar.elements, ["code"])) : (f(e.toolbar.elements, [
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
                  ]), p(e.toolbar.elements, ["inline-code"])) : S ? (f(e.toolbar.elements, ["bold"]), p(e.toolbar.elements, ["headings"])) : d && f(e.toolbar.elements, ["table"]);
                  var T = (0, s.fb)(n, "vditor-toc");
                  if (T) {
                    e.wysiwyg.popover.innerHTML = "", je(T, e), Ne(e, "vditor-toc"), Pe(e, T);
                    return;
                  }
                  var N = (0, C.S)(n, "BLOCKQUOTE");
                  if (N && (e.wysiwyg.popover.innerHTML = "", $e(t, N, e), et(t, N, e), je(N, e), Ne(e, "blockquote"), Pe(e, N)), i && (e.wysiwyg.popover.innerHTML = "", $e(t, i, e), et(t, i, e), je(i, e), Ne(e, "li"), Pe(e, i)), d) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var R = function() {
                      var K = d.rows.length, te = d.rows[0].cells.length, Ze = parseInt(Se.value, 10) || K, Je = parseInt(Re.value, 10) || te;
                      if (!(Ze === K && te === Je)) {
                        if (te !== Je)
                          for (var mt = Je - te, Fe = 0; Fe < d.rows.length; Fe++)
                            if (mt > 0)
                              for (var qn = 0; qn < mt; qn++)
                                Fe === 0 ? d.rows[Fe].lastElementChild.insertAdjacentHTML("afterend", "<th> </th>") : d.rows[Fe].lastElementChild.insertAdjacentHTML("afterend", "<td> </td>");
                            else
                              for (var Yt = te - 1; Yt >= Je; Yt--)
                                d.rows[Fe].cells[Yt].remove();
                        if (K !== Ze) {
                          var zn = Ze - K;
                          if (zn > 0) {
                            for (var Qt = "<tr>", at = 0; at < Je; at++)
                              Qt += "<td> </td>";
                            for (var Gn = 0; Gn < zn; Gn++)
                              d.querySelector("tbody") ? d.querySelector("tbody").insertAdjacentHTML("beforeend", Qt) : d.querySelector("thead").insertAdjacentHTML("afterend", Qt + "</tr>");
                          } else
                            for (var at = K - 1; at >= Ze; at--)
                              d.rows[at].remove(), d.rows.length === 1 && d.querySelector("tbody").remove();
                        }
                        typeof e.options.input == "function" && e.options.input(x(e));
                      }
                    }, H = function(K) {
                      Ct(d, K), K === "right" ? (G.classList.remove("vditor-icon--current"), V.classList.remove("vditor-icon--current"), J.classList.add("vditor-icon--current")) : K === "center" ? (G.classList.remove("vditor-icon--current"), J.classList.remove("vditor-icon--current"), V.classList.add("vditor-icon--current")) : (V.classList.remove("vditor-icon--current"), J.classList.remove("vditor-icon--current"), G.classList.add("vditor-icon--current")), (0, M.Hc)(t), ue(e);
                    }, U = (0, s.lG)(n, "TD"), B = (0, s.lG)(n, "TH"), O = "left";
                    U ? O = U.getAttribute("align") || "left" : B && (O = B.getAttribute("align") || "center");
                    var G = document.createElement("button");
                    G.setAttribute("type", "button"), G.setAttribute("aria-label", window.VditorI18n.alignLeft + "<" + (0, l.ns)("⇧⌘L") + ">"), G.setAttribute("data-type", "left"), G.innerHTML = '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>', G.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (O === "left" ? " vditor-icon--current" : ""), G.onclick = function() {
                      H("left");
                    };
                    var V = document.createElement("button");
                    V.setAttribute("type", "button"), V.setAttribute("aria-label", window.VditorI18n.alignCenter + "<" + (0, l.ns)("⇧⌘C") + ">"), V.setAttribute("data-type", "center"), V.innerHTML = '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', V.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (O === "center" ? " vditor-icon--current" : ""), V.onclick = function() {
                      H("center");
                    };
                    var J = document.createElement("button");
                    J.setAttribute("type", "button"), J.setAttribute("aria-label", window.VditorI18n.alignRight + "<" + (0, l.ns)("⇧⌘R") + ">"), J.setAttribute("data-type", "right"), J.innerHTML = '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>', J.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (O === "right" ? " vditor-icon--current" : ""), J.onclick = function() {
                      H("right");
                    };
                    var le = document.createElement("button");
                    le.setAttribute("type", "button"), le.setAttribute("aria-label", window.VditorI18n.insertRowBelow + "<" + (0, l.ns)("⌘=") + ">"), le.setAttribute("data-type", "insertRow"), le.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>', le.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", le.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && kn(e, t, te);
                    };
                    var oe = document.createElement("button");
                    oe.setAttribute("type", "button"), oe.setAttribute("aria-label", window.VditorI18n.insertRowAbove + "<" + (0, l.ns)("⇧⌘F") + ">"), oe.setAttribute("data-type", "insertRow"), oe.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>', oe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", oe.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && Mn(e, t, te);
                    };
                    var fe = document.createElement("button");
                    fe.setAttribute("type", "button"), fe.setAttribute("aria-label", window.VditorI18n.insertColumnRight + "<" + (0, l.ns)("⇧⌘=") + ">"), fe.setAttribute("data-type", "insertColumn"), fe.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>', fe.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", fe.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && Lt(e, d, te);
                    };
                    var De = document.createElement("button");
                    De.setAttribute("type", "button"), De.setAttribute("aria-label", window.VditorI18n.insertColumnLeft + "<" + (0, l.ns)("⇧⌘G") + ">"), De.setAttribute("data-type", "insertColumn"), De.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>', De.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", De.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && Lt(e, d, te, "beforebegin");
                    };
                    var _e = document.createElement("button");
                    _e.setAttribute("type", "button"), _e.setAttribute("aria-label", window.VditorI18n["delete-row"] + "<" + (0, l.ns)("⌘-") + ">"), _e.setAttribute("data-type", "deleteRow"), _e.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>', _e.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", _e.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && Tn(e, t, te);
                    };
                    var He = document.createElement("button");
                    He.setAttribute("type", "button"), He.setAttribute("aria-label", window.VditorI18n["delete-column"] + "<" + (0, l.ns)("⇧⌘-") + ">"), He.setAttribute("data-type", "deleteColumn"), He.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>', He.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", He.onclick = function() {
                      var K = getSelection().getRangeAt(0).startContainer, te = (0, s.lG)(K, "TD") || (0, s.lG)(K, "TH");
                      te && _n(e, t, d, te);
                    };
                    var Q = document.createElement("span");
                    Q.setAttribute("aria-label", window.VditorI18n.row), Q.className = "vditor-tooltipped vditor-tooltipped__n";
                    var Se = document.createElement("input");
                    Q.appendChild(Se), Se.type = "number", Se.min = "1", Se.className = "vditor-input", Se.style.width = "42px", Se.style.textAlign = "center", Se.setAttribute("placeholder", window.VditorI18n.row), Se.value = d.rows.length.toString(), Se.oninput = function() {
                      R();
                    }, Se.onkeydown = function(K) {
                      if (!K.isComposing) {
                        if (K.key === "Tab") {
                          Re.focus(), Re.select(), K.preventDefault();
                          return;
                        }
                        xe(e, K) || We(K, t);
                      }
                    };
                    var Tt = document.createElement("span");
                    Tt.setAttribute("aria-label", window.VditorI18n.column), Tt.className = "vditor-tooltipped vditor-tooltipped__n";
                    var Re = document.createElement("input");
                    Tt.appendChild(Re), Re.type = "number", Re.min = "1", Re.className = "vditor-input", Re.style.width = "42px", Re.style.textAlign = "center", Re.setAttribute("placeholder", window.VditorI18n.column), Re.value = d.rows[0].cells.length.toString(), Re.oninput = function() {
                      R();
                    }, Re.onkeydown = function(K) {
                      if (!K.isComposing) {
                        if (K.key === "Tab") {
                          Se.focus(), Se.select(), K.preventDefault();
                          return;
                        }
                        xe(e, K) || We(K, t);
                      }
                    }, $e(t, d, e), et(t, d, e), je(d, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", G), e.wysiwyg.popover.insertAdjacentElement("beforeend", V), e.wysiwyg.popover.insertAdjacentElement("beforeend", J), e.wysiwyg.popover.insertAdjacentElement("beforeend", oe), e.wysiwyg.popover.insertAdjacentElement("beforeend", le), e.wysiwyg.popover.insertAdjacentElement("beforeend", De), e.wysiwyg.popover.insertAdjacentElement("beforeend", fe), e.wysiwyg.popover.insertAdjacentElement("beforeend", _e), e.wysiwyg.popover.insertAdjacentElement("beforeend", He), e.wysiwyg.popover.insertAdjacentElement("beforeend", Q), e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "), e.wysiwyg.popover.insertAdjacentElement("beforeend", Tt), Ne(e, "table"), Pe(e, d);
                  }
                  var Xt = (0, s.a1)(n, "data-type", "link-ref");
                  Xt && cn(e, Xt, t);
                  var rt = (0, s.a1)(n, "data-type", "footnotes-ref");
                  if (rt) {
                    e.options.lang, e.options, e.wysiwyg.popover.innerHTML = "";
                    var Q = document.createElement("span");
                    Q.setAttribute("aria-label", window.VditorI18n.footnoteRef + "<" + (0, l.ns)("⌥Enter") + ">"), Q.className = "vditor-tooltipped vditor-tooltipped__n";
                    var qe = document.createElement("input");
                    Q.appendChild(qe), qe.className = "vditor-input", qe.setAttribute("placeholder", window.VditorI18n.footnoteRef + "<" + (0, l.ns)("⌥Enter") + ">"), qe.style.width = "120px", qe.value = rt.getAttribute("data-footnotes-label"), qe.oninput = function() {
                      qe.value.trim() !== "" && rt.setAttribute("data-footnotes-label", qe.value), typeof e.options.input == "function" && e.options.input(x(e));
                    }, qe.onkeydown = function(te) {
                      te.isComposing || xe(e, te) || We(te, t);
                    }, je(rt, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", Q), Ne(e, "footnotes-ref"), Pe(e, rt);
                  }
                  var Me = (0, s.fb)(n, "vditor-wysiwyg__block"), Fn = Me ? Me.getAttribute("data-type").indexOf("block") > -1 : !1;
                  if (e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(K) {
                    if (!Me || Me && Fn && !Me.contains(K)) {
                      var te = K.previousElementSibling;
                      te.style.display = "none";
                    }
                  }), Me && Fn) {
                    if (e.wysiwyg.popover.innerHTML = "", $e(t, Me, e), et(t, Me, e), je(Me, e), Me.getAttribute("data-type") === "code-block") {
                      var _t = document.createElement("span");
                      _t.setAttribute("aria-label", window.VditorI18n.language + "<" + (0, l.ns)("⌥Enter") + ">"), _t.className = "vditor-tooltipped vditor-tooltipped__n";
                      var Ue = document.createElement("input");
                      _t.appendChild(Ue);
                      var ht = Me.firstElementChild.firstElementChild;
                      Ue.className = "vditor-input", Ue.setAttribute("placeholder", window.VditorI18n.language + "<" + (0, l.ns)("⌥Enter") + ">"), Ue.value = ht.className.indexOf("language-") > -1 ? ht.className.split("-")[1].split(" ")[0] : "", Ue.oninput = function(K) {
                        Ue.value.trim() !== "" ? ht.className = "language-".concat(Ue.value) : (ht.className = "", e.hint.recentLanguage = ""), Me.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (Me.lastElementChild.innerHTML = Me.firstElementChild.innerHTML, Le(Me.lastElementChild, e)), ue(e), K.detail === 1 && (t.setStart(ht.firstChild, 0), t.collapse(!0), (0, M.Hc)(t));
                      }, Ue.onkeydown = function(K) {
                        if (!K.isComposing && !xe(e, K)) {
                          if (K.key === "Escape" && e.hint.element.style.display === "block") {
                            e.hint.element.style.display = "none", K.preventDefault();
                            return;
                          }
                          e.hint.select(K, e), We(K, t);
                        }
                      }, Ue.onkeyup = function(K) {
                        var te, Ze;
                        if (!(K.isComposing || K.key === "Enter" || K.key === "ArrowUp" || K.key === "Escape" || K.key === "ArrowDown")) {
                          var Je = [], mt = Ue.value.substring(0, Ue.selectionStart);
                          (e.options.preview.hljs.langs || v.g.ALIAS_CODE_LANGUAGES.concat(((Ze = (te = window.hljs) === null || te === void 0 ? void 0 : te.listLanguages()) !== null && Ze !== void 0 ? Ze : []).sort())).forEach(function(Fe) {
                            Fe.indexOf(mt.toLowerCase()) > -1 && Je.push({
                              html: Fe,
                              value: Fe
                            });
                          }), e.hint.genHTML(Je, mt, e), K.preventDefault();
                        }
                      }, e.wysiwyg.popover.insertAdjacentElement("beforeend", _t), Ne(e, "code-block");
                    } else
                      Ne(e, "block");
                    Pe(e, Me);
                  } else
                    Me = void 0;
                  if (S) {
                    e.wysiwyg.popover.innerHTML = "";
                    var Q = document.createElement("span");
                    Q.setAttribute("aria-label", "ID<" + (0, l.ns)("⌥Enter") + ">"), Q.className = "vditor-tooltipped vditor-tooltipped__n";
                    var Ge = document.createElement("input");
                    Q.appendChild(Ge), Ge.className = "vditor-input", Ge.setAttribute("placeholder", "ID<" + (0, l.ns)("⌥Enter") + ">"), Ge.style.width = "120px", Ge.value = S.getAttribute("data-id") || "", Ge.oninput = function() {
                      S.setAttribute("data-id", Ge.value), typeof e.options.input == "function" && e.options.input(x(e));
                    }, Ge.onkeydown = function(te) {
                      te.isComposing || xe(e, te) || We(te, t);
                    }, $e(t, S, e), et(t, S, e), je(S, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", Q), Ne(e, "heading"), Pe(e, S);
                  }
                  if (h && Nt(e, h, t), !N && !i && !d && !Me && !h && !Xt && !rt && !S && !T) {
                    var it = (0, s.a1)(n, "data-block", "0");
                    it && it.parentElement.isEqualNode(e.wysiwyg.element) ? (e.wysiwyg.popover.innerHTML = "", $e(t, it, e), et(t, it, e), je(it, e), Ne(e, "block"), Pe(e, it)) : e.wysiwyg.popover.style.display = "none";
                  }
                  e.wysiwyg.element.querySelectorAll('span[data-type="backslash"] > span').forEach(function(K) {
                    K.style.display = "none";
                  });
                  var Kn = (0, s.a1)(t.startContainer, "data-type", "backslash");
                  Kn && (Kn.querySelector("span").style.display = "inline");
                }
              }, 200);
            }, Pe = function(e, t) {
              var n = t, r = (0, s.lG)(t, "TABLE");
              r && (n = r), e.wysiwyg.popover.style.left = "0", e.wysiwyg.popover.style.display = "block", e.wysiwyg.popover.style.top = Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) + "px", e.wysiwyg.popover.style.left = Math.min(n.offsetLeft, e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth) + "px", e.wysiwyg.popover.setAttribute("data-top", (n.offsetTop - 21).toString());
            }, cn = function(e, t, n) {
              n === void 0 && (n = getSelection().getRangeAt(0)), e.wysiwyg.popover.innerHTML = "";
              var r = function() {
                a.value.trim() !== "" && (t.tagName === "IMG" ? t.setAttribute("alt", a.value) : t.textContent = a.value), u.value.trim() !== "" && t.setAttribute("data-link-label", u.value), typeof e.options.input == "function" && e.options.input(x(e));
              }, i = document.createElement("span");
              i.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), i.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              i.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), a.style.width = "120px", a.value = t.getAttribute("alt") || t.textContent, a.oninput = function() {
                r();
              }, a.onkeydown = function(h) {
                xe(e, h) || We(h, n) || ct(e, t, h, u);
              };
              var o = document.createElement("span");
              o.setAttribute("aria-label", window.VditorI18n.linkRef), o.className = "vditor-tooltipped vditor-tooltipped__n";
              var u = document.createElement("input");
              o.appendChild(u), u.className = "vditor-input", u.setAttribute("placeholder", window.VditorI18n.linkRef), u.value = t.getAttribute("data-link-label"), u.oninput = function() {
                r();
              }, u.onkeydown = function(h) {
                xe(e, h) || We(h, n) || ct(e, t, h, a);
              }, je(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", i), e.wysiwyg.popover.insertAdjacentElement("beforeend", o), Ne(e, "link-ref"), Pe(e, t);
            }, $e = function(e, t, n) {
              var r = t.previousElementSibling;
              if (!(!r || !t.parentElement.isEqualNode(n.wysiwyg.element) && t.tagName !== "LI")) {
                var i = document.createElement("button");
                i.setAttribute("type", "button"), i.setAttribute("data-type", "up"), i.setAttribute("aria-label", window.VditorI18n.up + "<" + (0, l.ns)("⇧⌘U") + ">"), i.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>', i.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i.onclick = function() {
                  e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("beforebegin", t), (0, M.ib)(n.wysiwyg.element, e), ue(n), Ye(n), Ee(n);
                }, n.wysiwyg.popover.insertAdjacentElement("beforeend", i);
              }
            }, et = function(e, t, n) {
              var r = t.nextElementSibling;
              if (!(!r || !t.parentElement.isEqualNode(n.wysiwyg.element) && t.tagName !== "LI")) {
                var i = document.createElement("button");
                i.setAttribute("type", "button"), i.setAttribute("data-type", "down"), i.setAttribute("aria-label", window.VditorI18n.down + "<" + (0, l.ns)("⇧⌘D") + ">"), i.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>', i.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i.onclick = function() {
                  e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("afterend", t), (0, M.ib)(n.wysiwyg.element, e), ue(n), Ye(n), Ee(n);
                }, n.wysiwyg.popover.insertAdjacentElement("beforeend", i);
              }
            }, je = function(e, t) {
              var n = document.createElement("button");
              n.setAttribute("type", "button"), n.setAttribute("data-type", "remove"), n.setAttribute("aria-label", window.VditorI18n.remove + "<" + (0, l.ns)("⇧⌘X") + ">"), n.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>', n.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n.onclick = function() {
                var r = (0, M.zh)(t);
                r.setStartAfter(e), (0, M.Hc)(r), e.remove(), ue(t), Ye(t), ["H1", "H2", "H3", "H4", "H5", "H6"].includes(e.tagName) && Ve(t);
              }, t.wysiwyg.popover.insertAdjacentElement("beforeend", n);
            }, ct = function(e, t, n, r) {
              if (!n.isComposing) {
                if (n.key === "Tab") {
                  r.focus(), r.select(), n.preventDefault();
                  return;
                }
                if (!(0, l.yl)(n) && !n.shiftKey && n.altKey && n.key === "Enter") {
                  var i = (0, M.zh)(e);
                  t.insertAdjacentHTML("afterend", v.g.ZWSP), i.setStartAfter(t.nextSibling), i.collapse(!0), (0, M.Hc)(i), n.preventDefault();
                }
              }
            }, Nt = function(e, t, n) {
              e.wysiwyg.popover.innerHTML = "";
              var r = function() {
                a.value.trim() !== "" && (t.innerHTML = a.value), t.setAttribute("href", u.value), t.setAttribute("title", d.value), ue(e);
              };
              t.querySelectorAll("[data-marker]").forEach(function(S) {
                S.removeAttribute("data-marker");
              });
              var i = document.createElement("span");
              i.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), i.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              i.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), a.style.width = "120px", a.value = t.innerHTML || "", a.oninput = function() {
                r();
              }, a.onkeydown = function(S) {
                xe(e, S) || We(S, n) || ct(e, t, S, u);
              };
              var o = document.createElement("span");
              o.setAttribute("aria-label", window.VditorI18n.link), o.className = "vditor-tooltipped vditor-tooltipped__n";
              var u = document.createElement("input");
              o.appendChild(u), u.className = "vditor-input", u.setAttribute("placeholder", window.VditorI18n.link), u.value = t.getAttribute("href") || "", u.oninput = function() {
                r();
              }, u.onkeydown = function(S) {
                xe(e, S) || We(S, n) || ct(e, t, S, d);
              };
              var h = document.createElement("span");
              h.setAttribute("aria-label", window.VditorI18n.tooltipText), h.className = "vditor-tooltipped vditor-tooltipped__n";
              var d = document.createElement("input");
              h.appendChild(d), d.className = "vditor-input", d.setAttribute("placeholder", window.VditorI18n.tooltipText), d.style.width = "60px", d.value = t.getAttribute("title") || "", d.oninput = function() {
                r();
              }, d.onkeydown = function(S) {
                xe(e, S) || We(S, n) || ct(e, t, S, a);
              }, je(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", i), e.wysiwyg.popover.insertAdjacentElement("beforeend", o), e.wysiwyg.popover.insertAdjacentElement("beforeend", h), Ne(e, "a"), Pe(e, t);
            }, cr = function(e, t) {
              var n = e.target;
              t.wysiwyg.popover.innerHTML = "";
              var r = function() {
                n.setAttribute("src", a.value), n.setAttribute("alt", u.value), n.setAttribute("title", d.value), typeof t.options.input == "function" && t.options.input(x(t));
              }, i = document.createElement("span");
              i.setAttribute("aria-label", window.VditorI18n.imageURL), i.className = "vditor-tooltipped vditor-tooltipped__n";
              var a = document.createElement("input");
              i.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", window.VditorI18n.imageURL), a.value = n.getAttribute("src") || "", a.oninput = function() {
                r();
              }, a.onkeydown = function(S) {
                xe(t, S);
              };
              var o = document.createElement("span");
              o.setAttribute("aria-label", window.VditorI18n.alternateText), o.className = "vditor-tooltipped vditor-tooltipped__n";
              var u = document.createElement("input");
              o.appendChild(u), u.className = "vditor-input", u.setAttribute("placeholder", window.VditorI18n.alternateText), u.style.width = "52px", u.value = n.getAttribute("alt") || "", u.oninput = function() {
                r();
              }, u.onkeydown = function(S) {
                xe(t, S);
              };
              var h = document.createElement("span");
              h.setAttribute("aria-label", window.VditorI18n.title), h.className = "vditor-tooltipped vditor-tooltipped__n";
              var d = document.createElement("input");
              h.appendChild(d), d.className = "vditor-input", d.setAttribute("placeholder", window.VditorI18n.title), d.value = n.getAttribute("title") || "", d.oninput = function() {
                r();
              }, d.onkeydown = function(S) {
                xe(t, S);
              }, je(n, t), t.wysiwyg.popover.insertAdjacentElement("beforeend", i), t.wysiwyg.popover.insertAdjacentElement("beforeend", o), t.wysiwyg.popover.insertAdjacentElement("beforeend", h), Ne(t, "image"), Pe(t, n);
            }, We = function(e, t) {
              if (!(0, l.yl)(e) && !e.shiftKey && e.key === "Enter" || e.key === "Escape")
                return t && (0, M.Hc)(t), e.preventDefault(), e.stopPropagation(), !0;
            }, Ne = function(e, t) {
              e.options.customWysiwygToolbar(t, e.wysiwyg.popover);
            }, tt = function(e) {
              e.currentMode === "wysiwyg" ? Ye(e) : e.currentMode === "ir" && st(e);
            }, un = function(e, t, n) {
              n === void 0 && (n = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              });
              var r = e.wysiwyg.element;
              r.innerHTML = e.lute.Md2VditorDOM(t), r.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(i) {
                Le(i, e), i.previousElementSibling.setAttribute("style", "display:none");
              }), ue(e, n);
            }, ur = function(e, t, n) {
              for (var r = e.startContainer.parentElement, i = !1, a = "", o = "", u = sr(e), h = u.beforeHTML, d = u.afterHTML; r && !i; ) {
                var S = r.tagName;
                if (S === "STRIKE" && (S = "S"), S === "I" && (S = "EM"), S === "B" && (S = "STRONG"), S === "S" || S === "STRONG" || S === "EM") {
                  var T = "", N = "", R = "";
                  r.parentElement.getAttribute("data-block") !== "0" && (N = ln(r), R = sn(r)), (h || N) && (T = "".concat(N, "<").concat(S, ">").concat(h, "</").concat(S, ">"), h = T), (n === "bold" && S === "STRONG" || n === "italic" && S === "EM" || n === "strikeThrough" && S === "S") && (T += "".concat(a).concat(v.g.ZWSP, "<wbr>").concat(o), i = !0), (d || R) && (d = "<".concat(S, ">").concat(d, "</").concat(S, ">").concat(R), T += d), r.parentElement.getAttribute("data-block") !== "0" ? (r = r.parentElement, r.innerHTML = T) : (r.outerHTML = T, r = r.parentElement), a = "<".concat(S, ">") + a, o = "</".concat(S, ">") + o;
                } else
                  i = !0;
              }
              (0, M.ib)(t.wysiwyg.element, e);
            }, fr = function(e, t, n) {
              if (!(e.wysiwyg.composingLock && n instanceof CustomEvent)) {
                var r = !0, i = !0;
                e.wysiwyg.element.querySelector("wbr") && e.wysiwyg.element.querySelector("wbr").remove();
                var a = (0, M.zh)(e), o = t.getAttribute("data-type");
                if (t.classList.contains("vditor-menu--current"))
                  if (o === "strike" && (o = "strikeThrough"), o === "quote") {
                    var u = (0, s.lG)(a.startContainer, "BLOCKQUOTE");
                    u || (u = a.startContainer.childNodes[a.startOffset]), u && (r = !1, t.classList.remove("vditor-menu--current"), a.insertNode(document.createElement("wbr")), u.outerHTML = u.innerHTML.trim() === "" ? '<p data-block="0">'.concat(u.innerHTML, "</p>") : u.innerHTML, (0, M.ib)(e.wysiwyg.element, a));
                  } else if (o === "inline-code") {
                    var h = (0, s.lG)(a.startContainer, "CODE");
                    h || (h = a.startContainer.childNodes[a.startOffset]), h && (h.outerHTML = h.innerHTML.replace(v.g.ZWSP, "") + "<wbr>", (0, M.ib)(e.wysiwyg.element, a));
                  } else o === "link" ? (a.collapsed && a.selectNode(a.startContainer.parentElement), document.execCommand("unlink", !1, "")) : o === "check" || o === "list" || o === "ordered-list" ? (St(e, a, o), (0, M.ib)(e.wysiwyg.element, a), r = !1, t.classList.remove("vditor-menu--current")) : (r = !1, t.classList.remove("vditor-menu--current"), a.toString() === "" ? ur(a, e, o) : document.execCommand(o, !1, ""));
                else {
                  e.wysiwyg.element.childNodes.length === 0 && (e.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>', (0, M.ib)(e.wysiwyg.element, a));
                  var d = (0, s.F9)(a.startContainer);
                  if (o === "quote") {
                    if (d || (d = a.startContainer.childNodes[a.startOffset]), d) {
                      r = !1, t.classList.add("vditor-menu--current"), a.insertNode(document.createElement("wbr"));
                      var S = (0, s.lG)(a.startContainer, "LI");
                      S && d.contains(S) ? S.innerHTML = '<blockquote data-block="0">'.concat(S.innerHTML, "</blockquote>") : d.outerHTML = '<blockquote data-block="0">'.concat(d.outerHTML, "</blockquote>"), (0, M.ib)(e.wysiwyg.element, a);
                    }
                  } else if (o === "check" || o === "list" || o === "ordered-list")
                    St(e, a, o, !1), (0, M.ib)(e.wysiwyg.element, a), r = !1, g(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current");
                  else if (o === "inline-code") {
                    if (a.toString() === "") {
                      var T = document.createElement("code");
                      T.textContent = v.g.ZWSP, a.insertNode(T), a.setStart(T.firstChild, 1), a.collapse(!0), (0, M.Hc)(a);
                    } else if (a.startContainer.nodeType === 3) {
                      var T = document.createElement("code");
                      a.surroundContents(T), a.insertNode(T), (0, M.Hc)(a);
                    }
                    t.classList.add("vditor-menu--current");
                  } else if (o === "code") {
                    var T = document.createElement("div");
                    T.className = "vditor-wysiwyg__block", T.setAttribute("data-type", "code-block"), T.setAttribute("data-block", "0"), T.setAttribute("data-marker", "```"), a.toString() === "" ? T.innerHTML = `<pre><code><wbr>
</code></pre>` : (T.innerHTML = "<pre><code>".concat(a.toString(), "<wbr></code></pre>"), a.deleteContents()), a.insertNode(T), d && (d.outerHTML = e.lute.SpinVditorDOM(d.outerHTML)), (0, M.ib)(e.wysiwyg.element, a), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(le) {
                      Le(le, e);
                    }), t.classList.add("vditor-menu--disabled");
                  } else if (o === "link") {
                    if (a.toString() === "") {
                      var N = document.createElement("a");
                      N.innerText = v.g.ZWSP, a.insertNode(N), a.setStart(N.firstChild, 1), a.collapse(!0), Nt(e, N, a);
                      var R = e.wysiwyg.popover.querySelector("input");
                      R.value = "", R.focus(), i = !1;
                    } else {
                      var T = document.createElement("a");
                      T.setAttribute("href", ""), T.innerHTML = a.toString(), a.surroundContents(T), a.insertNode(T), (0, M.Hc)(a), Nt(e, T, a);
                      var H = e.wysiwyg.popover.querySelectorAll("input");
                      H[0].value = T.innerText, H[1].focus();
                    }
                    r = !1, t.classList.add("vditor-menu--current");
                  } else if (o === "table") {
                    var U = '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                    if (a.toString().trim() === "")
                      d && d.innerHTML.trim().replace(v.g.ZWSP, "") === "" ? d.outerHTML = U : document.execCommand("insertHTML", !1, U), a.selectNode(e.wysiwyg.element.querySelector("wbr").previousSibling), e.wysiwyg.element.querySelector("wbr").remove(), (0, M.Hc)(a);
                    else {
                      U = '<table data-block="0"><thead><tr>';
                      var B = a.toString().split(`
`), O = B[0].split(",").length > B[0].split("	").length ? "," : "	";
                      B.forEach(function(J, le) {
                        le === 0 ? (J.split(O).forEach(function(oe, fe) {
                          fe === 0 ? U += "<th>".concat(oe, "<wbr></th>") : U += "<th>".concat(oe, "</th>");
                        }), U += "</tr></thead>") : (le === 1 ? U += "<tbody><tr>" : U += "<tr>", J.split(O).forEach(function(oe) {
                          U += "<td>".concat(oe, "</td>");
                        }), U += "</tr>");
                      }), U += "</tbody></table>", document.execCommand("insertHTML", !1, U), (0, M.ib)(e.wysiwyg.element, a);
                    }
                    r = !1, t.classList.add("vditor-menu--disabled");
                  } else if (o === "line") {
                    if (d) {
                      var G = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                      d.innerHTML.trim() === "" ? d.outerHTML = G : d.insertAdjacentHTML("afterend", G), (0, M.ib)(e.wysiwyg.element, a);
                    }
                  } else if (r = !1, t.classList.add("vditor-menu--current"), o === "strike" && (o = "strikeThrough"), a.toString() === "" && (o === "bold" || o === "italic" || o === "strikeThrough")) {
                    var V = "strong";
                    o === "italic" ? V = "em" : o === "strikeThrough" && (V = "s");
                    var T = document.createElement(V);
                    T.textContent = v.g.ZWSP, a.insertNode(T), T.previousSibling && T.previousSibling.textContent === v.g.ZWSP && (T.previousSibling.textContent = ""), a.setStart(T.firstChild, 1), a.collapse(!0), (0, M.Hc)(a);
                  } else
                    document.execCommand(o, !1, "");
                }
                r && Ye(e), i && ue(e);
              }
            }, me = (
              /** @class */
              /* @__PURE__ */ function() {
                function e(t, n) {
                  var r, i = this;
                  this.element = document.createElement("div"), n.className && (r = this.element.classList).add.apply(r, n.className.split(" "));
                  var a = n.hotkey ? " <".concat((0, l.ns)(n.hotkey), ">") : "";
                  n.level === 2 && (a = n.hotkey ? " &lt;".concat((0, l.ns)(n.hotkey), "&gt;") : "");
                  var o = n.tip ? n.tip + a : "".concat(window.VditorI18n[n.name]).concat(a), u = n.name === "upload" ? "div" : "button";
                  if (n.level === 2)
                    this.element.innerHTML = "<".concat(u, ' data-type="').concat(n.name, '">').concat(o, "</").concat(u, ">");
                  else {
                    this.element.classList.add("vditor-toolbar__item");
                    var h = document.createElement(u);
                    h.setAttribute("data-type", n.name), h.className = "vditor-tooltipped vditor-tooltipped__".concat(n.tipPosition), h.setAttribute("aria-label", o), h.innerHTML = n.icon, this.element.appendChild(h);
                  }
                  n.prefix && this.element.children[0].addEventListener((0, l.Le)(), function(d) {
                    d.preventDefault(), !i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) && (t.currentMode === "wysiwyg" ? fr(t, i.element.children[0], d) : t.currentMode === "ir" ? kr(t, i.element.children[0], n.prefix || "", n.suffix || "") : mr(t, i.element.children[0], n.prefix || "", n.suffix || ""));
                  });
                }
                return e;
              }()
            ), dr = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Qe = function(e, t, n) {
              var r;
              if (typeof n != "string" ? (b(e, ["subToolbar", "hint"]), n.preventDefault(), r = x(e)) : r = n, !(e.currentMode === t && typeof n != "string")) {
                if (e.devtools && e.devtools.renderEchart(e), e.options.preview.mode === "both" && t === "sv" ? e.preview.element.style.display = "block" : e.preview.element.style.display = "none", m(e.toolbar.elements, v.g.EDIT_TOOLBARS), g(e.toolbar.elements, v.g.EDIT_TOOLBARS), f(e.toolbar.elements, ["outdent", "indent"]), t === "ir")
                  E(e.toolbar.elements, ["both"]), w(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "block", e.lute.SetVditorIR(!0), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!1), e.currentMode = "ir", e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(r), Ke(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), Ie(e), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(a) {
                    Le(a, e);
                  }), e.ir.element.querySelectorAll(".vditor-toc").forEach(function(a) {
                    (0, re.H)(a, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  });
                else if (t === "wysiwyg")
                  E(e.toolbar.elements, ["both"]), w(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "block", e.ir.element.parentElement.style.display = "none", e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!0), e.lute.SetVditorSV(!1), e.currentMode = "wysiwyg", Ie(e), un(e, r, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), e.wysiwyg.element.querySelectorAll(".vditor-toc").forEach(function(a) {
                    (0, re.H)(a, {
                      cdn: e.options.cdn,
                      math: e.options.preview.math
                    });
                  }), e.wysiwyg.popover.style.display = "none";
                else if (t === "sv") {
                  w(e.toolbar.elements, ["both"]), E(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "none", (e.options.preview.mode === "both" || e.options.preview.mode === "editor") && (e.sv.element.style.display = "block"), e.lute.SetVditorIR(!1), e.lute.SetVditorWYSIWYG(!1), e.lute.SetVditorSV(!0), e.currentMode = "sv";
                  var i = dn(r, e);
                  i === "<div data-block='0'></div>" && (i = ""), e.sv.element.innerHTML = i, ve(e.sv.element), ke(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }), Ie(e);
                }
                e.undo.resetIcon(e), typeof n != "string" && (e[e.currentMode].element.focus(), tt(e)), Ve(e), bt(e), e.toolbar.elements["edit-mode"] && (e.toolbar.elements["edit-mode"].querySelectorAll("button").forEach(function(a) {
                  a.classList.remove("vditor-menu--current");
                }), e.toolbar.elements["edit-mode"].querySelector('button[data-mode="'.concat(e.currentMode, '"]')).classList.add("vditor-menu--current")), e.outline.toggle(e, e.currentMode !== "sv" && e.options.outline.enable, typeof n != "string");
              }
            }, pr = (
              /** @class */
              function(e) {
                dr(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = document.createElement("div");
                  return a.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow"), a.innerHTML = '<button data-mode="wysiwyg">'.concat(window.VditorI18n.wysiwyg, " &lt;").concat((0, l.ns)("⌥⌘7"), `></button>
<button data-mode="ir">`).concat(window.VditorI18n.instantRendering, " &lt;").concat((0, l.ns)("⌥⌘8"), `></button>
<button data-mode="sv">`).concat(window.VditorI18n.splitView, " &lt;").concat((0, l.ns)("⌥⌘9"), "></button>"), i.element.appendChild(a), i._bindEvent(n, a, r), i;
                }
                return t.prototype._bindEvent = function(n, r, i) {
                  var a = this.element.children[0];
                  y(n, r, a, i.level), r.children.item(0).addEventListener((0, l.Le)(), function(o) {
                    Qe(n, "wysiwyg", o), o.preventDefault(), o.stopPropagation();
                  }), r.children.item(1).addEventListener((0, l.Le)(), function(o) {
                    Qe(n, "ir", o), o.preventDefault(), o.stopPropagation();
                  }), r.children.item(2).addEventListener((0, l.Le)(), function(o) {
                    Qe(n, "sv", o), o.preventDefault(), o.stopPropagation();
                  });
                }, t;
              }(me)
            ), ut = function(e, t) {
              return (0, M.Gb)(e, t) ? getSelection().toString() : "";
            }, Rt = function(e, t) {
              t.addEventListener("focus", function() {
                e.options.focus && e.options.focus(x(e)), b(e, ["subToolbar", "hint"]);
              });
            }, fn = function(e, t) {
              t.addEventListener("dblclick", function(n) {
                n.target.tagName === "IMG" && (e.options.image.preview ? e.options.image.preview(n.target) : e.options.image.isPreview && (0, q.E)(n.target, e.options.lang, e.options.theme));
              });
            }, It = function(e, t) {
              t.addEventListener("blur", function(n) {
                if (e.currentMode === "ir") {
                  var r = e.ir.element.querySelector(".vditor-ir__node--expand");
                  r && r.classList.remove("vditor-ir__node--expand");
                } else e.currentMode === "wysiwyg" && !e.wysiwyg.selectPopover.contains(n.relatedTarget) && e.wysiwyg.hideComment();
                e[e.currentMode].range = (0, M.zh)(e), e.options.blur && e.options.blur(x(e));
              });
            }, Pt = function(e, t) {
              t.addEventListener("dragstart", function(n) {
                n.dataTransfer.setData(v.g.DROP_EDITOR, v.g.DROP_EDITOR);
              }), t.addEventListener("drop", function(n) {
                n.dataTransfer.getData(v.g.DROP_EDITOR) ? ee(e) : (n.dataTransfer.types.includes("Files") || n.dataTransfer.types.includes("text/html")) && kt(e, n, {
                  pasteCode: function(r) {
                    document.execCommand("insertHTML", !1, r);
                  }
                });
              });
            }, jt = function(e, t, n) {
              t.addEventListener("copy", function(r) {
                return n(r, e);
              });
            }, Bt = function(e, t, n) {
              t.addEventListener("cut", function(r) {
                n(r, e), e.options.comment.enable && e.currentMode === "wysiwyg" && e.wysiwyg.getComments(e), document.execCommand("delete");
              });
            }, Ee = function(e) {
              if (e.currentMode === "wysiwyg" && e.options.comment.enable && e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)), !!e.options.typewriterMode) {
                var t = e[e.currentMode].element, n = (0, M.Ny)(t).top;
                e.options.height === "auto" && !e.element.classList.contains("vditor--fullscreen") && window.scrollTo(window.scrollX, n + e.element.offsetTop + e.toolbar.element.offsetHeight - window.innerHeight / 2 + 10), (e.options.height !== "auto" || e.element.classList.contains("vditor--fullscreen")) && (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10);
              }
            }, Ut = function(e, t) {
              t.addEventListener("keydown", function(n) {
                if (!n.isComposing && e.options.keydown && e.options.keydown(n), !((e.options.hint.extend.length > 1 || e.toolbar.elements.emoji) && e.hint.select(n, e))) {
                  if (e.options.comment.enable && e.currentMode === "wysiwyg" && (n.key === "Backspace" || I("⌘X", n)) && e.wysiwyg.getComments(e), e.currentMode === "sv") {
                    if (Te(e, n))
                      return;
                  } else if (e.currentMode === "wysiwyg") {
                    if (lr(e, n))
                      return;
                  } else if (e.currentMode === "ir" && he(e, n))
                    return;
                  if (e.options.ctrlEnter && I("⌘Enter", n)) {
                    e.options.ctrlEnter(x(e)), n.preventDefault();
                    return;
                  }
                  if (I("⌘Z", n) && !e.toolbar.elements.undo) {
                    e.undo.undo(e), n.preventDefault();
                    return;
                  }
                  if (I("⌘Y", n) && !e.toolbar.elements.redo) {
                    e.undo.redo(e), n.preventDefault();
                    return;
                  }
                  if (n.key === "Escape") {
                    e.hint.element.style.display === "block" ? e.hint.element.style.display = "none" : e.options.esc && !n.isComposing && e.options.esc(x(e)), n.preventDefault();
                    return;
                  }
                  if ((0, l.yl)(n) && n.altKey && !n.shiftKey && /^Digit[1-6]$/.test(n.code)) {
                    if (e.currentMode === "wysiwyg") {
                      var r = n.code.replace("Digit", "H");
                      (0, s.lG)(getSelection().getRangeAt(0).startContainer, r) ? Ot(e) : wt(e, r), ue(e);
                    } else e.currentMode === "sv" ? pn(e, "#".repeat(parseInt(n.code.replace("Digit", ""), 10)) + " ") : e.currentMode === "ir" && pt(e, "#".repeat(parseInt(n.code.replace("Digit", ""), 10)) + " ");
                    return n.preventDefault(), !0;
                  }
                  if ((0, l.yl)(n) && n.altKey && !n.shiftKey && /^Digit[7-9]$/.test(n.code))
                    return n.code === "Digit7" ? Qe(e, "wysiwyg", n) : n.code === "Digit8" ? Qe(e, "ir", n) : n.code === "Digit9" && Qe(e, "sv", n), !0;
                  e.options.toolbar.find(function(i) {
                    if (!i.hotkey || i.toolbar) {
                      if (i.toolbar) {
                        var a = i.toolbar.find(function(o) {
                          if (!o.hotkey)
                            return !1;
                          if (I(o.hotkey, n))
                            return e.toolbar.elements[o.name].children[0].dispatchEvent(new CustomEvent((0, l.Le)())), n.preventDefault(), !0;
                        });
                        return !!a;
                      }
                      return !1;
                    }
                    if (I(i.hotkey, n))
                      return e.toolbar.elements[i.name].children[0].dispatchEvent(new CustomEvent((0, l.Le)())), n.preventDefault(), !0;
                  });
                }
              });
            }, Vt = function(e, t) {
              t.addEventListener("selectstart", function(n) {
                t.onmouseup = function() {
                  setTimeout(function() {
                    var r = ut(e[e.currentMode].element);
                    r.trim() ? (e.currentMode === "wysiwyg" && e.options.comment.enable && (!(0, s.a1)(n.target, "data-type", "footnotes-block") && !(0, s.a1)(n.target, "data-type", "link-ref-defs-block") ? e.wysiwyg.showComment() : e.wysiwyg.hideComment()), e.options.select && e.options.select(r)) : (e.currentMode === "wysiwyg" && e.options.comment.enable && e.wysiwyg.hideComment(), typeof e.options.unSelect == "function" && e.options.unSelect());
                  });
                };
              });
            }, Wt = function(e, t) {
              var n = (0, M.zh)(e);
              n.extractContents(), n.insertNode(document.createTextNode(Lute.Caret)), n.insertNode(document.createTextNode(t));
              var r = (0, s.a1)(n.startContainer, "data-block", "0");
              r || (r = e.sv.element);
              var i = e.lute.SpinVditorSVDOM(r.textContent);
              i = "<div data-block='0'>" + i.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", r.isEqualNode(e.sv.element) ? r.innerHTML = i : r.outerHTML = i, ve(e.sv.element), (0, M.ib)(e.sv.element, n), Ee(e);
            }, vt = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e;
              for (r.nodeType === 3 && (r = r.parentElement); r; ) {
                if (r.getAttribute("data-type") === t)
                  return r;
                n ? r = r.previousElementSibling : r = r.nextElementSibling;
              }
              return !1;
            }, dn = function(e, t) {
              A("SpinVditorSVDOM", e, "argument", t.options.debugger);
              var n = t.lute.SpinVditorSVDOM(e);
              return e = "<div data-block='0'>" + n.replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`) + "</div>", A("SpinVditorSVDOM", e, "result", t.options.debugger), e;
            }, hr = function(e) {
              var t = e.getAttribute("data-type"), n = e.previousElementSibling, r = t && t !== "text" && t !== "table" && t !== "heading-marker" && t !== "newline" && t !== "yaml-front-matter-open-marker" && t !== "yaml-front-matter-close-marker" && t !== "code-block-info" && t !== "code-block-close-marker" && t !== "code-block-open-marker" ? e.textContent : "", i = !1;
              for (t === "newline" && (i = !0); n && !i; ) {
                var a = n.getAttribute("data-type");
                if (a === "li-marker" || a === "blockquote-marker" || a === "task-marker" || a === "padding") {
                  var o = n.textContent;
                  if (a === "li-marker" && (t === "code-block-open-marker" || t === "code-block-info"))
                    r = o.replace(/\S/g, " ") + r;
                  else if (t === "code-block-close-marker" && n.nextElementSibling.isSameNode(e)) {
                    var u = vt(e, "code-block-open-marker");
                    u && u.previousElementSibling && (n = u.previousElementSibling, r = o + r);
                  } else
                    r = o + r;
                } else a === "newline" && (i = !0);
                n = n.previousElementSibling;
              }
              return r;
            }, ke = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && e.hint.render(e), e.preview.render(e);
              var n = x(e);
              typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, l.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), clearTimeout(e.sv.processTimeoutId), e.sv.processTimeoutId = window.setTimeout(function() {
                t.enableAddUndoStack && !e.sv.composingLock && e.undo.addToUndoStack(e);
              }, e.options.undoDelay);
            }, pn = function(e, t) {
              var n = (0, M.zh)(e), r = (0, C.S)(n.startContainer, "SPAN");
              r && r.textContent.trim() !== "" && (t = `
` + t), n.collapse(!0), document.execCommand("insertHTML", !1, t);
            }, mr = function(e, t, n, r) {
              var i = (0, M.zh)(e), a = t.getAttribute("data-type");
              e.sv.element.childNodes.length === 0 && (e.sv.element.innerHTML = `<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">
</span></span>`, (0, M.ib)(e.sv.element, i));
              var o = (0, s.F9)(i.startContainer), u = (0, C.S)(i.startContainer, "SPAN");
              if (o) {
                if (a === "link") {
                  var h = void 0;
                  i.toString() === "" ? h = "".concat(n).concat(Lute.Caret).concat(r) : h = "".concat(n).concat(i.toString()).concat(r.replace(")", Lute.Caret + ")")), document.execCommand("insertHTML", !1, h);
                  return;
                } else if (a === "italic" || a === "bold" || a === "strike" || a === "inline-code" || a === "code" || a === "table" || a === "line") {
                  var h = void 0;
                  i.toString() === "" ? h = "".concat(n).concat(Lute.Caret).concat(a === "code" ? "" : r) : h = "".concat(n).concat(i.toString()).concat(Lute.Caret).concat(a === "code" ? "" : r), a === "table" || a === "code" && u && u.textContent !== "" ? h = `

` + h : a === "line" && (h = `

`.concat(n, `
`).concat(Lute.Caret)), document.execCommand("insertHTML", !1, h);
                  return;
                } else if ((a === "check" || a === "list" || a === "ordered-list" || a === "quote") && u) {
                  var d = "* ";
                  a === "check" ? d = "* [ ] " : a === "ordered-list" ? d = "1. " : a === "quote" && (d = "> ");
                  var S = vt(u, "newline");
                  S ? S.insertAdjacentText("afterend", d) : o.insertAdjacentText("afterbegin", d), ae(e);
                  return;
                }
                (0, M.ib)(e.sv.element, i), ke(e);
              }
            }, hn = function(e) {
              switch (e.currentMode) {
                case "ir":
                  return e.ir.element;
                case "wysiwyg":
                  return e.wysiwyg.element;
                case "sv":
                  return e.sv.element;
              }
            }, mn = function(e, t) {
              e.options.upload.setHeaders && (e.options.upload.headers = e.options.upload.setHeaders()), e.options.upload.headers && Object.keys(e.options.upload.headers).forEach(function(n) {
                t.setRequestHeader(n, e.options.upload.headers[n]);
              });
            }, gr = function(e, t, n, r) {
              function i(a) {
                return a instanceof n ? a : new n(function(o) {
                  o(a);
                });
              }
              return new (n || (n = Promise))(function(a, o) {
                function u(S) {
                  try {
                    d(r.next(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function h(S) {
                  try {
                    d(r.throw(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function d(S) {
                  S.done ? a(S.value) : i(S.value).then(u, h);
                }
                d((r = r.apply(e, t || [])).next());
              });
            }, yr = function(e, t) {
              var n = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, r, i, a, o;
              return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                return this;
              }), o;
              function u(d) {
                return function(S) {
                  return h([d, S]);
                };
              }
              function h(d) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; o && (o = 0, d[0] && (n = 0)), n; ) try {
                  if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
                  switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
                    case 0:
                    case 1:
                      a = d;
                      break;
                    case 4:
                      return n.label++, { value: d[1], done: !1 };
                    case 5:
                      n.label++, i = d[1], d = [0];
                      continue;
                    case 7:
                      d = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
                        n.label = d[1];
                        break;
                      }
                      if (d[0] === 6 && n.label < a[1]) {
                        n.label = a[1], a = d;
                        break;
                      }
                      if (a && n.label < a[2]) {
                        n.label = a[2], n.ops.push(d);
                        break;
                      }
                      a[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  d = t.call(e, n);
                } catch (S) {
                  d = [6, S], i = 0;
                } finally {
                  r = a = 0;
                }
                if (d[0] & 5) throw d[1];
                return { value: d[0] ? d[1] : void 0, done: !0 };
              }
            }, br = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.isUploading = !1, this.element = document.createElement("div"), this.element.className = "vditor-upload";
                }
                return e;
              }()
            ), wr = function(e, t) {
              e.tip.hide();
              var n = [], r = "", i = "";
              e.options.lang, e.options;
              for (var a = function(d, S) {
                var T = t[S], N = !0;
                T.name || (r += "<li>".concat(window.VditorI18n.nameEmpty, "</li>"), N = !1), T.size > e.options.upload.max && (r += "<li>".concat(T.name, " ").concat(window.VditorI18n.over, " ").concat(e.options.upload.max / 1024 / 1024, "M</li>"), N = !1);
                var R = T.name.lastIndexOf("."), H = T.name.substr(R), U = e.options.upload.filename(T.name.substr(0, R)) + H;
                if (e.options.upload.accept) {
                  var B = e.options.upload.accept.split(",").some(function(O) {
                    var G = O.trim();
                    if (G.indexOf(".") === 0) {
                      if (H.toLowerCase() === G.toLowerCase())
                        return !0;
                    } else if (T.type.split("/")[0] === G.split("/")[0])
                      return !0;
                    return !1;
                  });
                  B || (r += "<li>".concat(T.name, " ").concat(window.VditorI18n.fileTypeError, "</li>"), N = !1);
                }
                N && (n.push(T), i += "<li>".concat(U, " ").concat(window.VditorI18n.uploading, ' <a class="vditorCancelUpload" href="javascript:void(0)">').concat(window.VditorI18n.cancelUpload, "</a></li>"));
              }, o = t.length, u = 0; u < o; u++)
                a(o, u);
              if (e.tip.show("<ul>".concat(r).concat(i, "</ul>")), e.options.upload.cancel) {
                var h = e.tip.element.querySelector(".vditorCancelUpload");
                h && h.addEventListener("click", function() {
                  e.options.upload.cancel(n), e.tip.hide(), e.upload.isUploading = !1;
                });
              }
              return n;
            }, vr = function(e, t) {
              var n = hn(t);
              n.focus();
              var r = JSON.parse(e), i = "";
              r.code === 1 && (i = "".concat(r.msg)), r.data.errFiles && r.data.errFiles.length > 0 && (i = "<ul><li>".concat(i, "</li>"), r.data.errFiles.forEach(function(o) {
                var u = o.lastIndexOf("."), h = t.options.upload.filename(o.substr(0, u)) + o.substr(u);
                i += "<li>".concat(h, " ").concat(window.VditorI18n.uploadError, "</li>");
              }), i += "</ul>"), i ? t.tip.show(i) : t.tip.hide();
              var a = "";
              Object.keys(r.data.succMap).forEach(function(o) {
                var u = r.data.succMap[o], h = o.lastIndexOf("."), d = o.substr(h), S = t.options.upload.filename(o.substr(0, h)) + d;
                d = d.toLowerCase(), d.indexOf(".wav") === 0 || d.indexOf(".mp3") === 0 || d.indexOf(".ogg") === 0 ? t.currentMode === "wysiwyg" ? a += `<div class="vditor-wysiwyg__block" data-type="html-block"
 data-block="0"><pre><code>&lt;audio controls="controls" src="`.concat(u, '"&gt;&lt;/audio&gt;</code></pre><pre class="vditor-wysiwyg__preview" data-render="1"><audio controls="controls" src="').concat(u, `"></audio></pre></div>
`) : t.currentMode === "ir" ? a += '<audio controls="controls" src="'.concat(u, `"></audio>
`) : a += "[".concat(S, "](").concat(u, `)
`) : d.indexOf(".apng") === 0 || d.indexOf(".bmp") === 0 || d.indexOf(".gif") === 0 || d.indexOf(".ico") === 0 || d.indexOf(".cur") === 0 || d.indexOf(".jpg") === 0 || d.indexOf(".jpeg") === 0 || d.indexOf(".jfif") === 0 || d.indexOf(".pjp") === 0 || d.indexOf(".pjpeg") === 0 || d.indexOf(".png") === 0 || d.indexOf(".svg") === 0 || d.indexOf(".webp") === 0 ? t.currentMode === "wysiwyg" ? a += '<img alt="'.concat(S, '" src="').concat(u, `">
`) : a += "![".concat(S, "](").concat(u, `)
`) : t.currentMode === "wysiwyg" ? a += '<a href="'.concat(u, '">').concat(S, `</a>
`) : a += "[".concat(S, "](").concat(u, `)
`);
              }), (0, M.Hc)(t.upload.range), document.execCommand("insertHTML", !1, a), t.upload.range = getSelection().getRangeAt(0).cloneRange();
            }, Ft = function(e, t, n) {
              return gr(void 0, void 0, void 0, function() {
                var r, i, H, a, o, o, u, h, d, S, T, N, R, H, U, B;
                return yr(this, function(O) {
                  switch (O.label) {
                    case 0:
                      for (r = [], i = e.options.upload.multiple === !0 ? t.length : 1, H = 0; H < i; H++)
                        a = t[H], a instanceof DataTransferItem && (a = a.getAsFile()), r.push(a);
                      return e.options.upload.handler ? [4, e.options.upload.handler(r)] : [3, 2];
                    case 1:
                      return o = O.sent(), n && (n.value = ""), typeof o == "string" ? (e.tip.show(o), [
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
                      r = O.sent(), O.label = 4;
                    case 4:
                      if (e.options.upload.validate && (o = e.options.upload.validate(r), typeof o == "string"))
                        return e.tip.show(o), [
                          2
                          /*return*/
                        ];
                      if (u = hn(e), e.upload.range = (0, M.zh)(e), h = wr(e, r), h.length === 0)
                        return n && (n.value = ""), [
                          2
                          /*return*/
                        ];
                      for (d = new FormData(), S = e.options.upload.extraData, T = 0, N = Object.keys(S); T < N.length; T++)
                        R = N[T], d.append(R, S[R]);
                      for (H = 0, U = h.length; H < U; H++)
                        d.append(e.options.upload.fieldName, h[H]);
                      return B = new XMLHttpRequest(), e.upload.xhr = B, B.open("POST", e.options.upload.url), e.options.upload.token && B.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (B.withCredentials = !0), mn(e, B), e.upload.isUploading = !0, u.setAttribute("contenteditable", "false"), B.onreadystatechange = function() {
                        if (B.readyState === XMLHttpRequest.DONE) {
                          if (e.upload.isUploading = !1, u.setAttribute("contenteditable", "true"), B.status >= 200 && B.status < 300)
                            if (e.options.upload.success)
                              e.options.upload.success(u, B.responseText);
                            else {
                              var G = B.responseText;
                              e.options.upload.format && (G = e.options.upload.format(t, B.responseText)), vr(G, e);
                            }
                          else
                            e.options.upload.error ? e.options.upload.error(B.responseText) : e.tip.show(B.responseText);
                          n && (n.value = ""), e.upload.element.style.display = "none", e.upload.xhr = void 0;
                        }
                      }, B.upload.onprogress = function(G) {
                        if (G.lengthComputable) {
                          var V = G.loaded / G.total * 100;
                          e.upload.element.style.display = "block";
                          var J = e.upload.element;
                          J.style.width = V + "%";
                        }
                      }, B.send(d), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, Et = function(e, t, n) {
              var r, i = (0, s.F9)(t.startContainer);
              if (i || (i = e.wysiwyg.element), n && n.inputType !== "formatItalic" && n.inputType !== "deleteByDrag" && n.inputType !== "insertFromDrop" && n.inputType !== "formatBold" && n.inputType !== "formatRemove" && n.inputType !== "formatStrikeThrough" && n.inputType !== "insertUnorderedList" && n.inputType !== "insertOrderedList" && n.inputType !== "formatOutdent" && n.inputType !== "formatIndent" && n.inputType !== "" || !n) {
                var a = ir(t.startContainer);
                a && a.remove(), e.wysiwyg.element.querySelectorAll("wbr").forEach(function(V) {
                  V.remove();
                }), t.insertNode(document.createElement("wbr")), i.querySelectorAll("[style]").forEach(function(V) {
                  V.removeAttribute("style");
                }), i.querySelectorAll(".vditor-comment").forEach(function(V) {
                  V.textContent.trim() === "" && (V.classList.remove("vditor-comment", "vditor-comment--focus"), V.removeAttribute("data-cmtids"));
                }), (r = i.previousElementSibling) === null || r === void 0 || r.querySelectorAll(".vditor-comment").forEach(function(V) {
                  V.textContent.trim() === "" && (V.classList.remove("vditor-comment", "vditor-comment--focus"), V.removeAttribute("data-cmtids"));
                });
                var o = "";
                i.getAttribute("data-type") === "link-ref-defs-block" && (i = e.wysiwyg.element);
                var u = i.isEqualNode(e.wysiwyg.element), h = (0, s.a1)(i, "data-type", "footnotes-block");
                if (u)
                  o = i.innerHTML;
                else {
                  var d = (0, s.O9)(t.startContainer);
                  if (d && !h) {
                    var S = (0, C.S)(t.startContainer, "BLOCKQUOTE");
                    S ? i = (0, s.F9)(t.startContainer) || i : i = d;
                  }
                  if (h && (i = h), o = i.outerHTML, i.tagName === "UL" || i.tagName === "OL") {
                    var T = i.previousElementSibling, N = i.nextElementSibling;
                    T && (T.tagName === "UL" || T.tagName === "OL") && (o = T.outerHTML + o, T.remove()), N && (N.tagName === "UL" || N.tagName === "OL") && (o = o + N.outerHTML, N.remove()), o = o.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
                  }
                  i.innerText.startsWith("```") || (e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(V) {
                    V && !i.isEqualNode(V) && (o += V.outerHTML, V.remove());
                  }), e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(V) {
                    V && !i.isEqualNode(V) && (o += V.outerHTML, V.remove());
                  }));
                }
                if (o = o.replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "").replace(/<\/(em|i)><em data-marker="\W{1}">/g, "").replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, ""), o === '<p data-block="0">```<wbr></p>' && e.hint.recentLanguage && (o = '<p data-block="0">```<wbr></p>'.replace("```", "```" + e.hint.recentLanguage)), A("SpinVditorDOM", o, "argument", e.options.debugger), o = e.lute.SpinVditorDOM(o), A("SpinVditorDOM", o, "result", e.options.debugger), u)
                  i.innerHTML = o;
                else if (i.outerHTML = o, h) {
                  var R = (0, s.E2)(e.wysiwyg.element.querySelector("wbr"), "LI");
                  if (R) {
                    var H = e.wysiwyg.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(R.getAttribute("data-marker"), '"]'));
                    H && H.setAttribute("aria-label", R.textContent.trim().substr(0, 24));
                  }
                }
                var U, B = e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']");
                B.forEach(function(V, J) {
                  J === 0 ? U = V : (U.insertAdjacentHTML("beforeend", V.innerHTML), V.remove());
                }), B.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", B[0]);
                var O, G = e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']");
                G.forEach(function(V, J) {
                  J === 0 ? O = V : (O.insertAdjacentHTML("beforeend", V.innerHTML), V.remove());
                }), G.length > 0 && e.wysiwyg.element.insertAdjacentElement("beforeend", G[0]), (0, M.ib)(e.wysiwyg.element, t), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(V) {
                  Le(V, e);
                }), n && (n.inputType === "deleteContentBackward" || n.inputType === "deleteContentForward") && e.options.comment.enable && (e.wysiwyg.triggerRemoveComment(e), e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)));
              }
              Ve(e), ue(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0
              });
            }, Er = function(e, t) {
              return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
            }, gn = function(e, t, n, r) {
              function i(a) {
                return a instanceof n ? a : new n(function(o) {
                  o(a);
                });
              }
              return new (n || (n = Promise))(function(a, o) {
                function u(S) {
                  try {
                    d(r.next(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function h(S) {
                  try {
                    d(r.throw(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function d(S) {
                  S.done ? a(S.value) : i(S.value).then(u, h);
                }
                d((r = r.apply(e, t || [])).next());
              });
            }, yn = function(e, t) {
              var n = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, r, i, a, o;
              return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                return this;
              }), o;
              function u(d) {
                return function(S) {
                  return h([d, S]);
                };
              }
              function h(d) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; o && (o = 0, d[0] && (n = 0)), n; ) try {
                  if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
                  switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
                    case 0:
                    case 1:
                      a = d;
                      break;
                    case 4:
                      return n.label++, { value: d[1], done: !1 };
                    case 5:
                      n.label++, i = d[1], d = [0];
                      continue;
                    case 7:
                      d = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
                        n.label = d[1];
                        break;
                      }
                      if (d[0] === 6 && n.label < a[1]) {
                        n.label = a[1], a = d;
                        break;
                      }
                      if (a && n.label < a[2]) {
                        n.label = a[2], n.ops.push(d);
                        break;
                      }
                      a[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  d = t.call(e, n);
                } catch (S) {
                  d = [6, S], i = 0;
                } finally {
                  r = a = 0;
                }
                if (d[0] & 5) throw d[1];
                return { value: d[0] ? d[1] : void 0, done: !0 };
              }
            }, bn = function(e, t, n) {
              if (e.keyCode === 229 && e.code === "" && e.key === "Unidentified" && t.currentMode !== "sv") {
                var r = (0, s.F9)(n);
                if (r && r.textContent.trim() === "")
                  return t[t.currentMode].composingLock = !0, !1;
              }
              return !0;
            }, wn = function(e, t, n) {
              if (!(n.key === "Enter" || n.key === "Tab" || n.key === "Backspace" || n.key.indexOf("Arrow") > -1 || (0, l.yl)(n) || n.key === "Escape" || n.shiftKey || n.altKey)) {
                var r = (0, s.lG)(e.startContainer, "P") || (0, s.lG)(e.startContainer, "LI");
                if (r && (0, M.im)(r, t[t.currentMode].element, e).start === 0) {
                  r.nodeValue && (r.nodeValue = r.nodeValue.replace(/\u2006/g, ""));
                  var i = document.createTextNode(v.g.ZWSP);
                  e.insertNode(i), e.setStartAfter(i);
                }
              }
            }, vn = function(e, t) {
              if (t === "ArrowDown" || t === "ArrowUp") {
                var n = (0, s.a1)(e.startContainer, "data-type", "math-inline") || (0, s.a1)(e.startContainer, "data-type", "html-entity") || (0, s.a1)(e.startContainer, "data-type", "html-inline");
                n && (t === "ArrowDown" && e.setStartAfter(n.parentElement), t === "ArrowUp" && e.setStartBefore(n.parentElement));
              }
            }, ft = function(e, t) {
              var n = (0, M.zh)(e), r = (0, s.F9)(n.startContainer);
              r && (r.insertAdjacentHTML(t, '<p data-block="0">'.concat(v.g.ZWSP, `<wbr>
</p>`)), (0, M.ib)(e[e.currentMode].element, n), tt(e), ee(e));
            }, Sr = function(e) {
              var t = (0, s.lG)(e, "TABLE");
              return t && t.rows[0].cells[0].isSameNode(e) ? t : !1;
            }, Cr = function(e) {
              var t = (0, s.lG)(e, "TABLE");
              return t && t.lastElementChild.lastElementChild.lastElementChild.isSameNode(e) ? t : !1;
            }, En = function(e, t, n) {
              n === void 0 && (n = !0);
              var r = e.previousElementSibling;
              return r || (e.parentElement.previousElementSibling ? r = e.parentElement.previousElementSibling.lastElementChild : e.parentElement.parentElement.tagName === "TBODY" && e.parentElement.parentElement.previousElementSibling ? r = e.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild : r = null), r && (t.selectNodeContents(r), n || t.collapse(!1), (0, M.Hc)(t)), r;
            }, dt = function(e, t, n, r, i) {
              var a = (0, M.im)(r, e[e.currentMode].element, n);
              if (t.key === "ArrowDown" && r.textContent.trimRight().substr(a.start).indexOf(`
`) === -1 || t.key === "ArrowRight" && a.start >= r.textContent.trimRight().length) {
                var o = i.nextElementSibling;
                return !o || o && (o.tagName === "TABLE" || o.getAttribute("data-type")) ? (i.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(v.g.ZWSP, "<wbr></p>")), (0, M.ib)(e[e.currentMode].element, n)) : (n.selectNodeContents(o), n.collapse(!0), (0, M.Hc)(n)), t.preventDefault(), !0;
              }
              return !1;
            }, nt = function(e, t, n, r, i) {
              var a = (0, M.im)(r, e[e.currentMode].element, n);
              if (t.key === "ArrowUp" && r.textContent.substr(0, a.start).indexOf(`
`) === -1 || (t.key === "ArrowLeft" || t.key === "Backspace" && n.toString() === "") && a.start === 0) {
                var o = i.previousElementSibling;
                return !o || o && (o.tagName === "TABLE" || o.getAttribute("data-type")) ? (i.insertAdjacentHTML("beforebegin", '<p data-block="0">'.concat(v.g.ZWSP, "<wbr></p>")), (0, M.ib)(e[e.currentMode].element, n)) : (n.selectNodeContents(o), n.collapse(!1), (0, M.Hc)(n)), t.preventDefault(), !0;
              }
              return !1;
            }, St = function(e, t, n, r) {
              r === void 0 && (r = !0);
              var i = (0, s.lG)(t.startContainer, "LI");
              if (e[e.currentMode].element.querySelectorAll("wbr").forEach(function(S) {
                S.remove();
              }), t.insertNode(document.createElement("wbr")), r && i) {
                for (var a = "", o = 0; o < i.parentElement.childElementCount; o++) {
                  var u = i.parentElement.children[o].querySelector("input");
                  u && u.remove(), a += '<p data-block="0">'.concat(i.parentElement.children[o].innerHTML.trimLeft(), "</p>");
                }
                i.parentElement.insertAdjacentHTML("beforebegin", a), i.parentElement.remove();
              } else if (i)
                if (n === "check")
                  i.parentElement.querySelectorAll("li").forEach(function(S) {
                    S.insertAdjacentHTML("afterbegin", '<input type="checkbox" />'.concat(S.textContent.indexOf(" ") === 0 ? "" : " ")), S.classList.add("vditor-task");
                  });
                else {
                  i.querySelector("input") && i.parentElement.querySelectorAll("li").forEach(function(S) {
                    S.querySelector("input").remove(), S.classList.remove("vditor-task");
                  });
                  var d = void 0;
                  n === "list" ? (d = document.createElement("ul"), d.setAttribute("data-marker", "*")) : (d = document.createElement("ol"), d.setAttribute("data-marker", "1.")), d.setAttribute("data-block", "0"), d.setAttribute("data-tight", i.parentElement.getAttribute("data-tight")), d.innerHTML = i.parentElement.innerHTML, i.parentElement.parentNode.replaceChild(d, i.parentElement);
                }
              else {
                var h = (0, s.a1)(t.startContainer, "data-block", "0");
                h || (e[e.currentMode].element.querySelector("wbr").remove(), h = e[e.currentMode].element.querySelector("p"), h.innerHTML = "<wbr>"), n === "check" ? (h.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> '.concat(h.innerHTML, "</li></ul>")), h.remove()) : n === "list" ? (h.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li>'.concat(h.innerHTML, "</li></ul>")), h.remove()) : n === "ordered-list" && (h.insertAdjacentHTML("beforebegin", '<ol data-block="0"><li>'.concat(h.innerHTML, "</li></ol>")), h.remove());
              }
            }, Sn = function(e, t, n) {
              var r = t.previousElementSibling;
              if (t && r) {
                var i = [t];
                Array.from(n.cloneContents().children).forEach(function(h, d) {
                  h.nodeType !== 3 && t && h.textContent.trim() !== "" && t.getAttribute("data-node-id") === h.getAttribute("data-node-id") && (d !== 0 && i.push(t), t = t.nextElementSibling);
                }), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(h) {
                  h.remove();
                }), n.insertNode(document.createElement("wbr"));
                var a = r.parentElement, o = "";
                i.forEach(function(h) {
                  var d = h.getAttribute("data-marker");
                  d.length !== 1 && (d = "1".concat(d.slice(-1))), o += '<li data-node-id="'.concat(h.getAttribute("data-node-id"), '" data-marker="').concat(d, '">').concat(h.innerHTML, "</li>"), h.remove();
                }), r.insertAdjacentHTML("beforeend", "<".concat(a.tagName, ' data-block="0">').concat(o, "</").concat(a.tagName, ">")), e.currentMode === "wysiwyg" ? a.outerHTML = e.lute.SpinVditorDOM(a.outerHTML) : a.outerHTML = e.lute.SpinVditorIRDOM(a.outerHTML), (0, M.ib)(e[e.currentMode].element, n);
                var u = (0, s.O9)(n.startContainer);
                u && u.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(h) {
                  Le(h, e), e.currentMode === "wysiwyg" && h.previousElementSibling.setAttribute("style", "display:none");
                }), ee(e), tt(e);
              } else
                e[e.currentMode].element.focus();
            }, Kt = function(e, t, n, r) {
              var i = (0, s.lG)(t.parentElement, "LI");
              if (i) {
                e[e.currentMode].element.querySelectorAll("wbr").forEach(function(T) {
                  T.remove();
                }), n.insertNode(document.createElement("wbr"));
                var a = t.parentElement, o = a.cloneNode(), u = [t];
                Array.from(n.cloneContents().children).forEach(function(T, N) {
                  T.nodeType !== 3 && t && T.textContent.trim() !== "" && t.getAttribute("data-node-id") === T.getAttribute("data-node-id") && (N !== 0 && u.push(t), t = t.nextElementSibling);
                });
                var h = !1, d = "";
                a.querySelectorAll("li").forEach(function(T) {
                  h && (d += T.outerHTML, !T.nextElementSibling && !T.previousElementSibling ? T.parentElement.remove() : T.remove()), T.isSameNode(u[u.length - 1]) && (h = !0);
                }), u.reverse().forEach(function(T) {
                  i.insertAdjacentElement("afterend", T);
                }), d && (o.innerHTML = d, u[0].insertAdjacentElement("beforeend", o)), e.currentMode === "wysiwyg" ? r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML) : r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML), (0, M.ib)(e[e.currentMode].element, n);
                var S = (0, s.O9)(n.startContainer);
                S && S.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(T) {
                  Le(T, e), e.currentMode === "wysiwyg" && T.previousElementSibling.setAttribute("style", "display:none");
                }), ee(e), tt(e);
              } else
                e[e.currentMode].element.focus();
            }, Ct = function(e, t) {
              for (var n = getSelection().getRangeAt(0).startContainer.parentElement, r = e.rows[0].cells.length, i = e.rows.length, a = 0, o = 0; o < i; o++)
                for (var u = 0; u < r; u++)
                  if (e.rows[o].cells[u].isSameNode(n)) {
                    a = u;
                    break;
                  }
              for (var h = 0; h < i; h++)
                e.rows[h].cells[a].setAttribute("align", t);
            }, qt = function(e) {
              var t = e.trimRight().split(`
`).pop();
              return t === "" ? !1 : (t.replace(/ |-/g, "") === "" || t.replace(/ |_/g, "") === "" || t.replace(/ |\*/g, "") === "") && t.replace(/ /g, "").length > 2 ? !(t.indexOf("-") > -1 && t.trimLeft().indexOf(" ") === -1 && e.trimRight().split(`
`).length > 1 || t.indexOf("    ") === 0 || t.indexOf("	") === 0) : !1;
            }, zt = function(e) {
              var t = e.trimRight().split(`
`);
              return e = t.pop(), e.indexOf("    ") === 0 || e.indexOf("	") === 0 || (e = e.trimLeft(), e === "" || t.length === 0) ? !1 : e.replace(/-/g, "") === "" || e.replace(/=/g, "") === "";
            }, ee = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), e.currentMode === "wysiwyg" ? ue(e, t) : e.currentMode === "ir" ? Ke(e, t) : e.currentMode === "sv" && ke(e, t);
            }, Cn = function(e, t, n, r) {
              var i, a = e.startContainer, o = (0, s.lG)(a, "LI");
              if (o) {
                if (!(0, l.yl)(r) && !r.altKey && r.key === "Enter" && // fix li 中有多个 P 时，在第一个 P 中换行会在下方生成新的 li
                !r.shiftKey && n && o.contains(n) && n.nextElementSibling)
                  return o && !o.textContent.endsWith(`
`) && o.insertAdjacentText("beforeend", `
`), e.insertNode(document.createTextNode(`

`)), e.collapse(!1), ee(t), r.preventDefault(), !0;
                if (!(0, l.yl)(r) && !r.shiftKey && !r.altKey && r.key === "Backspace" && !o.previousElementSibling && e.toString() === "" && (0, M.im)(o, t[t.currentMode].element, e).start === 0)
                  return o.nextElementSibling ? (o.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(o.innerHTML, "</p>")), o.remove()) : o.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(o.innerHTML, "</p>"), (0, M.ib)(t[t.currentMode].element, e), ee(t), r.preventDefault(), !0;
                if (!(0, l.yl)(r) && !r.shiftKey && !r.altKey && r.key === "Backspace" && o.textContent.trim().replace(v.g.ZWSP, "") === "" && e.toString() === "" && ((i = o.previousElementSibling) === null || i === void 0 ? void 0 : i.tagName) === "LI")
                  return o.previousElementSibling.insertAdjacentText("beforeend", `

`), e.selectNodeContents(o.previousElementSibling), e.collapse(!1), o.remove(), (0, M.ib)(t[t.currentMode].element, e), ee(t), r.preventDefault(), !0;
                if (!(0, l.yl)(r) && !r.altKey && r.key === "Tab") {
                  var u = !1;
                  if ((e.startOffset === 0 && (a.nodeType === 3 && !a.previousSibling || a.nodeType !== 3 && a.nodeName === "LI") || o.classList.contains("vditor-task") && e.startOffset === 1 && a.previousSibling.nodeType !== 3 && a.previousSibling.tagName === "INPUT") && (u = !0), u || e.toString() !== "")
                    return r.shiftKey ? Kt(t, o, e, o.parentElement) : Sn(t, o, e), r.preventDefault(), !0;
                }
              }
              return !1;
            }, Gt = function(e, t, n) {
              if (e.options.tab && n.key === "Tab")
                return n.shiftKey || (t.toString() === "" ? (t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1)) : (t.extractContents(), t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1))), (0, M.Hc)(t), ee(e), n.preventDefault(), !0;
            }, Ln = function(e, t, n, r) {
              if (n) {
                if (!(0, l.yl)(e) && !e.altKey && e.key === "Enter") {
                  var i = String.raw(In || (In = Er(["", ""], ["", ""])), n.textContent).replace(/\\\|/g, "").trim(), a = i.split("|");
                  if (i.startsWith("|") && i.endsWith("|") && a.length > 3) {
                    var o = a.map(function() {
                      return "---";
                    }).join("|");
                    return o = n.textContent + `
` + o.substring(3, o.length - 3) + `
|<wbr>`, n.outerHTML = t.lute.SpinVditorDOM(o), (0, M.ib)(t[t.currentMode].element, r), ee(t), Ee(t), e.preventDefault(), !0;
                  }
                  if (qt(n.innerHTML) && n.previousElementSibling) {
                    var u = "", h = n.innerHTML.trimRight().split(`
`);
                    return h.length > 1 && (h.pop(), u = '<p data-block="0">'.concat(h.join(`
`), "</p>")), n.insertAdjacentHTML("afterend", "".concat(u, `<hr data-block="0"><p data-block="0"><wbr>
</p>`)), n.remove(), (0, M.ib)(t[t.currentMode].element, r), ee(t), Ee(t), e.preventDefault(), !0;
                  }
                  if (zt(n.innerHTML))
                    return t.currentMode === "wysiwyg" ? n.outerHTML = t.lute.SpinVditorDOM(n.innerHTML + `<p data-block="0"><wbr>
</p>`) : n.outerHTML = t.lute.SpinVditorIRDOM(n.innerHTML + `<p data-block="0"><wbr>
</p>`), (0, M.ib)(t[t.currentMode].element, r), ee(t), Ee(t), e.preventDefault(), !0;
                }
                if (r.collapsed && n.previousElementSibling && e.key === "Backspace" && !(0, l.yl)(e) && !e.altKey && !e.shiftKey && n.textContent.trimRight().split(`
`).length > 1 && (0, M.im)(n, t[t.currentMode].element, r).start === 0) {
                  var d = (0, s.DX)(n.previousElementSibling);
                  return d.textContent.endsWith(`
`) || (d.textContent = d.textContent + `
`), d.parentElement.insertAdjacentHTML("beforeend", "<wbr>".concat(n.innerHTML)), n.remove(), (0, M.ib)(t[t.currentMode].element, r), !1;
                }
                return !1;
              }
            }, kn = function(e, t, n) {
              for (var r = "", i = 0; i < n.parentElement.childElementCount; i++)
                r += '<td align="'.concat(n.parentElement.children[i].getAttribute("align"), '"> </td>');
              n.tagName === "TH" ? n.parentElement.parentElement.insertAdjacentHTML("afterend", "<tbody><tr>".concat(r, "</tr></tbody>")) : n.parentElement.insertAdjacentHTML("afterend", "<tr>".concat(r, "</tr>")), ee(e);
            }, Mn = function(e, t, n) {
              for (var r = "", i = 0; i < n.parentElement.childElementCount; i++)
                n.tagName === "TH" ? r += '<th align="'.concat(n.parentElement.children[i].getAttribute("align"), '"> </th>') : r += '<td align="'.concat(n.parentElement.children[i].getAttribute("align"), '"> </td>');
              if (n.tagName === "TH") {
                n.parentElement.parentElement.insertAdjacentHTML("beforebegin", "<thead><tr>".concat(r, "</tr></thead>")), t.insertNode(document.createElement("wbr"));
                var a = n.parentElement.innerHTML.replace(/<th>/g, "<td>").replace(/<\/th>/g, "</td>");
                n.parentElement.parentElement.nextElementSibling.insertAdjacentHTML("afterbegin", a), n.parentElement.parentElement.remove(), (0, M.ib)(e.ir.element, t);
              } else
                n.parentElement.insertAdjacentHTML("beforebegin", "<tr>".concat(r, "</tr>"));
              ee(e);
            }, Lt = function(e, t, n, r) {
              r === void 0 && (r = "afterend");
              for (var i = 0, a = n.previousElementSibling; a; )
                i++, a = a.previousElementSibling;
              for (var o = 0; o < t.rows.length; o++)
                o === 0 ? t.rows[o].cells[i].insertAdjacentHTML(r, "<th> </th>") : t.rows[o].cells[i].insertAdjacentHTML(r, "<td> </td>");
              ee(e);
            }, Tn = function(e, t, n) {
              if (n.tagName === "TD") {
                var r = n.parentElement.parentElement;
                n.parentElement.previousElementSibling ? t.selectNodeContents(n.parentElement.previousElementSibling.lastElementChild) : t.selectNodeContents(r.previousElementSibling.lastElementChild.lastElementChild), r.childElementCount === 1 ? r.remove() : n.parentElement.remove(), t.collapse(!1), (0, M.Hc)(t), ee(e);
              }
            }, _n = function(e, t, n, r) {
              for (var i = 0, a = r.previousElementSibling; a; )
                i++, a = a.previousElementSibling;
              (r.previousElementSibling || r.nextElementSibling) && (t.selectNodeContents(r.previousElementSibling || r.nextElementSibling), t.collapse(!0));
              for (var o = 0; o < n.rows.length; o++) {
                var u = n.rows[o].cells;
                if (u.length === 1) {
                  n.remove(), tt(e);
                  break;
                }
                u[i].remove();
              }
              (0, M.Hc)(t), ee(e);
            }, An = function(e, t, n) {
              var r = n.startContainer, i = (0, s.lG)(r, "TD") || (0, s.lG)(r, "TH");
              if (i) {
                if (!(0, l.yl)(t) && !t.altKey && t.key === "Enter") {
                  (!i.lastElementChild || i.lastElementChild && (!i.lastElementChild.isSameNode(i.lastChild) || i.lastElementChild.tagName !== "BR")) && i.insertAdjacentHTML("beforeend", "<br>");
                  var a = document.createElement("br");
                  return n.insertNode(a), n.setStartAfter(a), ee(e), Ee(e), t.preventDefault(), !0;
                }
                if (t.key === "Tab") {
                  if (t.shiftKey)
                    return En(i, n), t.preventDefault(), !0;
                  var o = i.nextElementSibling;
                  return o || (i.parentElement.nextElementSibling ? o = i.parentElement.nextElementSibling.firstElementChild : i.parentElement.parentElement.tagName === "THEAD" && i.parentElement.parentElement.nextElementSibling ? o = i.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild : o = null), o && (n.selectNodeContents(o), (0, M.Hc)(n)), t.preventDefault(), !0;
                }
                var u = i.parentElement.parentElement.parentElement;
                if (t.key === "ArrowUp") {
                  if (t.preventDefault(), i.tagName === "TH")
                    return u.previousElementSibling ? (n.selectNodeContents(u.previousElementSibling), n.collapse(!1), (0, M.Hc)(n)) : ft(e, "beforebegin"), !0;
                  for (var h = 0, d = i.parentElement; h < d.cells.length && !d.cells[h].isSameNode(i); h++)
                    ;
                  var S = d.previousElementSibling;
                  return S || (S = d.parentElement.previousElementSibling.firstChild), n.selectNodeContents(S.cells[h]), n.collapse(!1), (0, M.Hc)(n), !0;
                }
                if (t.key === "ArrowDown") {
                  t.preventDefault();
                  var d = i.parentElement;
                  if (!d.nextElementSibling && i.tagName === "TD")
                    return u.nextElementSibling ? (n.selectNodeContents(u.nextElementSibling), n.collapse(!0), (0, M.Hc)(n)) : ft(e, "afterend"), !0;
                  for (var h = 0; h < d.cells.length && !d.cells[h].isSameNode(i); h++)
                    ;
                  var o = d.nextElementSibling;
                  return o || (o = d.parentElement.nextElementSibling.firstChild), n.selectNodeContents(o.cells[h]), n.collapse(!0), (0, M.Hc)(n), !0;
                }
                if (e.currentMode === "wysiwyg" && !(0, l.yl)(t) && t.key === "Enter" && !t.shiftKey && t.altKey) {
                  var T = e.wysiwyg.popover.querySelector(".vditor-input");
                  return T.focus(), T.select(), t.preventDefault(), !0;
                }
                if (!(0, l.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Backspace" && n.startOffset === 0 && n.toString() === "") {
                  var N = En(i, n, !1);
                  return !N && u && (u.textContent.trim() === "" ? (u.outerHTML = `<p data-block="0"><wbr>
</p>`, (0, M.ib)(e[e.currentMode].element, n)) : (n.setStartBefore(u), n.collapse(!0)), ee(e)), t.preventDefault(), !0;
                }
                if (I("⇧⌘F", t))
                  return Mn(e, n, i), t.preventDefault(), !0;
                if (I("⌘=", t))
                  return kn(e, n, i), t.preventDefault(), !0;
                if (I("⇧⌘G", t))
                  return Lt(e, u, i, "beforebegin"), t.preventDefault(), !0;
                if (I("⇧⌘=", t))
                  return Lt(e, u, i), t.preventDefault(), !0;
                if (I("⌘-", t))
                  return Tn(e, n, i), t.preventDefault(), !0;
                if (I("⇧⌘-", t))
                  return _n(e, n, u, i), t.preventDefault(), !0;
                if (I("⇧⌘L", t)) {
                  if (e.currentMode === "ir")
                    return Ct(u, "left"), ee(e), t.preventDefault(), !0;
                  var R = e.wysiwyg.popover.querySelector('[data-type="left"]');
                  if (R)
                    return R.click(), t.preventDefault(), !0;
                }
                if (I("⇧⌘C", t)) {
                  if (e.currentMode === "ir")
                    return Ct(u, "center"), ee(e), t.preventDefault(), !0;
                  var R = e.wysiwyg.popover.querySelector('[data-type="center"]');
                  if (R)
                    return R.click(), t.preventDefault(), !0;
                }
                if (I("⇧⌘R", t)) {
                  if (e.currentMode === "ir")
                    return Ct(u, "right"), ee(e), t.preventDefault(), !0;
                  var R = e.wysiwyg.popover.querySelector('[data-type="right"]');
                  if (R)
                    return R.click(), t.preventDefault(), !0;
                }
              }
              return !1;
            }, xn = function(e, t, n, r) {
              if (n.tagName === "PRE" && I("⌘A", t))
                return r.selectNodeContents(n.firstElementChild), t.preventDefault(), !0;
              if (e.options.tab && t.key === "Tab" && !t.shiftKey && r.toString() === "")
                return r.insertNode(document.createTextNode(e.options.tab)), r.collapse(!1), ee(e), t.preventDefault(), !0;
              if (t.key === "Backspace" && !(0, l.yl)(t) && !t.shiftKey && !t.altKey) {
                var i = (0, M.im)(n, e[e.currentMode].element, r);
                if ((i.start === 0 || i.start === 1 && n.innerText === `
`) && r.toString() === "")
                  return n.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(n.firstElementChild.innerHTML, "</p>"), (0, M.ib)(e[e.currentMode].element, r), ee(e), t.preventDefault(), !0;
              }
              return !(0, l.yl)(t) && !t.altKey && t.key === "Enter" ? (n.firstElementChild.textContent.endsWith(`
`) || n.firstElementChild.insertAdjacentText("beforeend", `
`), r.extractContents(), r.insertNode(document.createTextNode(`
`)), r.collapse(!1), (0, M.Hc)(r), (0, l.vU)() || (e.currentMode === "wysiwyg" ? Et(e, r) : ze(e, r)), Ee(e), t.preventDefault(), !0) : !1;
            }, Dn = function(e, t, n, r) {
              var i = t.startContainer, a = (0, s.lG)(i, "BLOCKQUOTE");
              if (a && t.toString() === "") {
                if (n.key === "Backspace" && !(0, l.yl)(n) && !n.shiftKey && !n.altKey && (0, M.im)(a, e[e.currentMode].element, t).start === 0)
                  return t.insertNode(document.createElement("wbr")), a.outerHTML = a.innerHTML, (0, M.ib)(e[e.currentMode].element, t), ee(e), n.preventDefault(), !0;
                if (r && n.key === "Enter" && !(0, l.yl)(n) && !n.shiftKey && !n.altKey && r.parentElement.tagName === "BLOCKQUOTE") {
                  var o = !1;
                  if (r.innerHTML.replace(v.g.ZWSP, "") === `
` || r.innerHTML.replace(v.g.ZWSP, "") === "" ? (o = !0, r.remove()) : r.innerHTML.endsWith(`

`) && (0, M.im)(r, e[e.currentMode].element, t).start === r.textContent.length - 1 && (r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 2), o = !0), o)
                    return a.insertAdjacentHTML("afterend", '<p data-block="0">'.concat(v.g.ZWSP, `<wbr>
</p>`)), (0, M.ib)(e[e.currentMode].element, t), ee(e), n.preventDefault(), !0;
                }
                var u = (0, s.F9)(i);
                if (e.currentMode === "wysiwyg" && u && I("⇧⌘;", n))
                  return t.insertNode(document.createElement("wbr")), u.outerHTML = '<blockquote data-block="0">'.concat(u.outerHTML, "</blockquote>"), (0, M.ib)(e.wysiwyg.element, t), ue(e), n.preventDefault(), !0;
                if (dt(e, n, t, a, a) || nt(e, n, t, a, a))
                  return !0;
              }
              return !1;
            }, Hn = function(e, t, n) {
              var r = t.startContainer, i = (0, s.lG)(r, "LI");
              if (i && i.classList.contains("vditor-task")) {
                if (I("⇧⌘J", n)) {
                  var a = i.firstElementChild;
                  return a.checked ? a.removeAttribute("checked") : a.setAttribute("checked", "checked"), ee(e), n.preventDefault(), !0;
                }
                if (n.key === "Backspace" && !(0, l.yl)(n) && !n.shiftKey && !n.altKey && t.toString() === "" && t.startOffset === 1 && (r.nodeType === 3 && r.previousSibling && r.previousSibling.tagName === "INPUT" || r.nodeType !== 3)) {
                  var o = i.previousElementSibling;
                  if (i.querySelector("input").remove(), o) {
                    var u = (0, s.DX)(o);
                    u.parentElement.insertAdjacentHTML("beforeend", "<wbr>" + i.innerHTML.trim()), i.remove();
                  } else
                    i.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>'.concat(i.innerHTML.trim() || `
`, "</p>")), i.nextElementSibling ? i.remove() : i.parentElement.remove();
                  return (0, M.ib)(e[e.currentMode].element, t), ee(e), n.preventDefault(), !0;
                }
                if (n.key === "Enter" && !(0, l.yl)(n) && !n.shiftKey && !n.altKey) {
                  if (i.textContent.trim() === "")
                    if ((0, s.fb)(i.parentElement, "vditor-task")) {
                      var h = (0, s.O9)(r);
                      h && Kt(e, i, t, h);
                    } else if (i.nextElementSibling) {
                      var d = "", S = "", T = !1;
                      Array.from(i.parentElement.children).forEach(function(U) {
                        i.isSameNode(U) ? T = !0 : T ? d += U.outerHTML : S += U.outerHTML;
                      });
                      var N = i.parentElement.tagName, R = i.parentElement.tagName === "OL" ? "" : ' data-marker="'.concat(i.parentElement.getAttribute("data-marker"), '"'), H = "";
                      S && (H = i.parentElement.tagName === "UL" ? "" : ' start="1"', S = "<".concat(N, ' data-tight="true"').concat(R, ' data-block="0">').concat(S, "</").concat(N, ">")), i.parentElement.outerHTML = "".concat(S, `<p data-block="0"><wbr>
</p><`).concat(N, `
 data-tight="true"`).concat(R, ' data-block="0"').concat(H, ">").concat(d, "</").concat(N, ">");
                    } else
                      i.parentElement.insertAdjacentHTML("afterend", `<p data-block="0"><wbr>
</p>`), i.parentElement.querySelectorAll("li").length === 1 ? i.parentElement.remove() : i.remove();
                  else r.nodeType !== 3 && t.startOffset === 0 && r.firstChild.tagName === "INPUT" ? t.setStart(r.childNodes[1], 1) : (t.setEndAfter(i.lastChild), i.insertAdjacentHTML("afterend", '<li class="vditor-task" data-marker="'.concat(i.getAttribute("data-marker"), '"><input type="checkbox"> <wbr></li>')), document.querySelector("wbr").after(t.extractContents()));
                  return (0, M.ib)(e[e.currentMode].element, t), ee(e), Ee(e), n.preventDefault(), !0;
                }
              }
              return !1;
            }, On = function(e, t, n, r) {
              if (t.startContainer.nodeType !== 3) {
                var i = t.startContainer.children[t.startOffset];
                if (i && i.tagName === "HR")
                  return t.selectNodeContents(i.previousElementSibling), t.collapse(!1), n.preventDefault(), !0;
              }
              if (r) {
                var a = r.previousElementSibling;
                if (a && (0, M.im)(r, e[e.currentMode].element, t).start === 0 && ((0, l.vU)() && a.tagName === "HR" || a.tagName === "TABLE")) {
                  if (a.tagName === "TABLE") {
                    var o = a.lastElementChild.lastElementChild.lastElementChild;
                    o.innerHTML = o.innerHTML.trimLeft() + "<wbr>" + r.textContent.trim(), r.remove();
                  } else
                    a.remove();
                  return (0, M.ib)(e[e.currentMode].element, t), ee(e), n.preventDefault(), !0;
                }
              }
              return !1;
            }, Nn = function(e) {
              (0, l.vU)() && e.startContainer.nodeType !== 3 && e.startContainer.tagName === "HR" && e.setStartBefore(e.startContainer);
            }, Rn = function(e, t, n) {
              var r, i;
              if (!(0, l.vU)())
                return !1;
              if (e.key === "ArrowUp" && t && ((r = t.previousElementSibling) === null || r === void 0 ? void 0 : r.tagName) === "TABLE") {
                var a = t.previousElementSibling;
                return n.selectNodeContents(a.rows[a.rows.length - 1].lastElementChild), n.collapse(!1), e.preventDefault(), !0;
              }
              return e.key === "ArrowDown" && t && ((i = t.nextElementSibling) === null || i === void 0 ? void 0 : i.tagName) === "TABLE" ? (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]), n.collapse(!0), e.preventDefault(), !0) : !1;
            }, kt = function(e, t, n) {
              return gn(void 0, void 0, void 0, function() {
                var r, i, a, o, u, h, d, S, T, N, R, H, U, O, B, O, G;
                return yn(this, function(V) {
                  switch (V.label) {
                    case 0:
                      return e[e.currentMode].element.getAttribute("contenteditable") !== "true" ? [
                        2
                        /*return*/
                      ] : (t.stopPropagation(), t.preventDefault(), "clipboardData" in t ? (r = t.clipboardData.getData("text/html"), i = t.clipboardData.getData("text/plain"), a = t.clipboardData.files) : (r = t.dataTransfer.getData("text/html"), i = t.dataTransfer.getData("text/plain"), t.dataTransfer.types.includes("Files") && (a = t.dataTransfer.items)), o = {}, u = function(J, le) {
                        if (!le)
                          return ["", Lute.WalkContinue];
                        if (e.options.upload.renderLinkDest)
                          return e.options.upload.renderLinkDest(e, J, le);
                        var oe = J.TokensStr();
                        if (J.__internal_object__.Parent.Type === 34 && oe && oe.indexOf("file://") === -1 && e.options.upload.linkToImgUrl) {
                          var fe = new XMLHttpRequest();
                          fe.open("POST", e.options.upload.linkToImgUrl), e.options.upload.token && fe.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (fe.withCredentials = !0), mn(e, fe), fe.setRequestHeader("Content-Type", "application/json; charset=utf-8"), fe.onreadystatechange = function() {
                            if (fe.readyState === XMLHttpRequest.DONE) {
                              if (fe.status === 200) {
                                var De = fe.responseText;
                                e.options.upload.linkToImgFormat && (De = e.options.upload.linkToImgFormat(fe.responseText));
                                var _e = JSON.parse(De);
                                if (_e.code !== 0) {
                                  e.tip.show(_e.msg);
                                  return;
                                }
                                var He = _e.data.originalURL;
                                if (e.currentMode === "sv")
                                  e.sv.element.querySelectorAll(".vditor-sv__marker--link").forEach(function(Se) {
                                    Se.textContent === He && (Se.textContent = _e.data.url);
                                  });
                                else {
                                  var Q = e[e.currentMode].element.querySelector('img[src="'.concat(He, '"]'));
                                  Q.src = _e.data.url, e.currentMode === "ir" && (Q.previousElementSibling.previousElementSibling.innerHTML = _e.data.url);
                                }
                                ee(e);
                              } else
                                e.tip.show(fe.responseText);
                              e.options.upload.linkToImgCallback && e.options.upload.linkToImgCallback(fe.responseText);
                            }
                          }, fe.send(JSON.stringify({ url: oe }));
                        }
                        return e.currentMode === "ir" ? ['<span class="vditor-ir__marker vditor-ir__marker--link">'.concat(Lute.EscapeHTMLStr(oe), "</span>"), Lute.WalkContinue] : e.currentMode === "wysiwyg" ? ["", Lute.WalkContinue] : ['<span class="vditor-sv__marker--link">'.concat(Lute.EscapeHTMLStr(oe), "</span>"), Lute.WalkContinue];
                      }, (r.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<a href="'.concat(i, '">').concat(i, "</a>") || r.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/ig, "").trim() === '<!--StartFragment--><a href="'.concat(i, '">').concat(i, "</a><!--EndFragment-->")) && (r = ""), h = new DOMParser().parseFromString(r, "text/html"), h.body && (r = h.body.innerHTML), r = Lute.Sanitize(r), e.wysiwyg.getComments(e), d = e[e.currentMode].element.scrollHeight, S = Ae(r, i, e.currentMode), T = e.currentMode === "sv" ? (0, s.a1)(t.target, "data-type", "code-block") : (0, s.lG)(t.target, "CODE"), T ? (e.currentMode === "sv" ? document.execCommand("insertHTML", !1, i.replace(/&/g, "&amp;").replace(/</g, "&lt;")) : (N = (0, M.im)(t.target, e[e.currentMode].element), T.parentElement.tagName !== "PRE" && (i += v.g.ZWSP), T.textContent = T.textContent.substring(0, N.start) + i + T.textContent.substring(N.end), (0, M.$j)(N.start + i.length, N.start + i.length, T.parentElement), !((G = T.parentElement) === null || G === void 0) && G.nextElementSibling.classList.contains("vditor-".concat(e.currentMode, "__preview")) && (T.parentElement.nextElementSibling.innerHTML = T.outerHTML, Le(T.parentElement.nextElementSibling, e))), [3, 10]) : [3, 1]);
                    case 1:
                      return S ? (n.pasteCode(S), [3, 10]) : [3, 2];
                    case 2:
                      return r.trim() === "" ? [3, 5] : (R = document.createElement("div"), R.innerHTML = r, e.options.upload.base64ToLink ? [3, 4] : [4, Lr(e, R, ("clipboardData" in t ? t.clipboardData : t.dataTransfer).getData("text/rtf"))]);
                    case 3:
                      V.sent(), V.label = 4;
                    case 4:
                      return R.querySelectorAll("[style]").forEach(function(J) {
                        J.removeAttribute("style");
                      }), R.querySelectorAll(".vditor-copy").forEach(function(J) {
                        J.remove();
                      }), e.currentMode === "ir" ? (o.HTML2VditorIRDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), (0, M.oC)(e.lute.HTML2VditorIRDOM(R.innerHTML), e)) : e.currentMode === "wysiwyg" ? (o.HTML2VditorDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), (0, M.oC)(e.lute.HTML2VditorDOM(R.innerHTML), e)) : (o.Md2VditorSVDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), Wt(e, e.lute.HTML2Md(R.innerHTML).trimRight())), e.outline.render(e), [3, 10];
                    case 5:
                      return a.length > 0 ? e.options.upload.url || e.options.upload.handler ? [4, Ft(e, a)] : [3, 7] : [3, 9];
                    case 6:
                      return V.sent(), [3, 8];
                    case 7:
                      H = new FileReader(), "clipboardData" in t ? (a = t.clipboardData.files, U = a[0]) : t.dataTransfer.types.includes("Files") && (a = t.dataTransfer.items, U = a[0].getAsFile()), U && U.type.startsWith("image") && (H.readAsDataURL(U), H.onload = function() {
                        var J = "";
                        e.currentMode === "wysiwyg" ? J += '<img alt="'.concat(U.name, '" src="').concat(H.result.toString(), `">
`) : J += "![".concat(U.name, "](").concat(H.result.toString(), `)
`), document.execCommand("insertHTML", !1, J);
                      }), V.label = 8;
                    case 8:
                      return [3, 10];
                    case 9:
                      i.trim() !== "" && a.length === 0 && (O = (0, M.zh)(e), O.toString() !== "" && e.lute.IsValidLinkDest(i) && (i = "[".concat(O.toString(), "](").concat(i, ")")), e.currentMode === "ir" ? (o.Md2VditorIRDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), (0, M.oC)(Lute.Sanitize(e.lute.Md2VditorIRDOM(i)), e)) : e.currentMode === "wysiwyg" ? (o.Md2VditorDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), (0, M.oC)(Lute.Sanitize(e.lute.Md2VditorDOM(i)), e)) : (o.Md2VditorSVDOM = { renderLinkDest: u }, e.lute.SetJSRenderers({ renderers: o }), Wt(e, i)), e.outline.render(e)), V.label = 10;
                    case 10:
                      return e.currentMode !== "sv" && (B = (0, s.F9)((0, M.zh)(e).startContainer), B && (O = (0, M.zh)(e), e[e.currentMode].element.querySelectorAll("wbr").forEach(function(J) {
                        J.remove();
                      }), O.insertNode(document.createElement("wbr")), e.currentMode === "wysiwyg" ? B.outerHTML = e.lute.SpinVditorDOM(B.outerHTML) : B.outerHTML = e.lute.SpinVditorIRDOM(B.outerHTML), (0, M.ib)(e[e.currentMode].element, O)), e[e.currentMode].element.querySelectorAll(".vditor-".concat(e.currentMode, "__preview[data-render='2']")).forEach(function(J) {
                        Le(J, e);
                      })), e.wysiwyg.triggerRemoveComment(e), ee(e), e[e.currentMode].element.scrollHeight - d > Math.min(e[e.currentMode].element.clientHeight, window.innerHeight) / 2 && Ee(e), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, Lr = function(e, t, n) {
              return gn(void 0, void 0, void 0, function() {
                var r, i, a, o, u, h, d, S, T, U, N, R, H, U, B, O;
                return yn(this, function(G) {
                  switch (G.label) {
                    case 0:
                      if (!n)
                        return [
                          2
                          /*return*/
                        ];
                      if (r = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/, i = new RegExp("(?:(" + r.source + "))([\\da-fA-F\\s]+)\\}", "g"), a = n.match(i), o = [], a)
                        for (u = 0, h = a; u < h.length; u++)
                          d = h[u], S = void 0, d.includes("\\pngblip") ? S = "image/png" : d.includes("\\jpegblip") && (S = "image/jpeg"), S && o.push({
                            hex: d.replace(r, "").replace(/[^\da-fA-F]/g, ""),
                            type: S
                          });
                      for (T = [], Zt(t, function(V) {
                        if (V.tagName === "V:SHAPE")
                          return Zt(V, function(J) {
                            J.tagName === "V:IMAGEDATA" && T.push({ shape: V, img: J });
                          }), !1;
                      }), U = 0; U < T.length; U++)
                        N = document.createElement("img"), R = "data:" + o[U].type + ";base64," + btoa((o[U].hex.match(/\w{2}/g) || []).map(function(V) {
                          return String.fromCharCode(parseInt(V, 16));
                        }).join("")), N.src = R, N.title = T[U].img.getAttribute("title"), T[U].shape.parentNode.replaceChild(N, T[U].shape);
                      H = t.querySelectorAll("img"), U = 0, G.label = 1;
                    case 1:
                      return U < H.length ? (B = H[U].src || "", B ? (O = H[U], [4, e.options.upload.base64ToLink(B)]) : [3, 3]) : [3, 4];
                    case 2:
                      O.src = G.sent(), G.label = 3;
                    case 3:
                      return U++, [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, Zt = function(e, t) {
              var n = t(e);
              if (n !== !1)
                for (var r = 0; r < e.children.length; r++)
                  Zt(e.children[r], t);
            }, In, Pn = function(e) {
              var t, n;
              e.hint.render(e);
              var r = (0, M.zh)(e).startContainer, i = (0, s.a1)(r, "data-type", "code-block-info");
              if (i)
                if (i.textContent.replace(v.g.ZWSP, "") === "" && e.hint.recentLanguage) {
                  i.textContent = v.g.ZWSP + e.hint.recentLanguage;
                  var a = (0, M.zh)(e);
                  a.selectNodeContents(i);
                } else {
                  var o = [], u = i.textContent.substring(0, (0, M.im)(i, e.ir.element).start).replace(v.g.ZWSP, "");
                  (e.options.preview.hljs.langs || v.g.ALIAS_CODE_LANGUAGES.concat(((n = (t = window.hljs) === null || t === void 0 ? void 0 : t.listLanguages()) !== null && n !== void 0 ? n : []).sort())).forEach(function(h) {
                    h.indexOf(u.toLowerCase()) > -1 && o.push({
                      html: h,
                      value: h
                    });
                  }), e.hint.genHTML(o, u, e);
                }
            }, Ke = function(e, t) {
              t === void 0 && (t = {
                enableAddUndoStack: !0,
                enableHint: !1,
                enableInput: !0
              }), t.enableHint && Pn(e), clearTimeout(e.ir.processTimeoutId), e.ir.processTimeoutId = window.setTimeout(function() {
                if (!e.ir.composingLock) {
                  var n = x(e);
                  typeof e.options.input == "function" && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && (0, l.pK)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay);
            }, pt = function(e, t) {
              var n = (0, M.zh)(e), r = (0, s.F9)(n.startContainer) || n.startContainer;
              if (r) {
                var i = r.querySelector(".vditor-ir__marker--heading");
                i ? i.innerHTML = t : (r.insertAdjacentText("afterbegin", t), n.selectNodeContents(r), n.collapse(!1)), ze(e, n.cloneRange()), st(e);
              }
            }, Mt = function(e, t, n) {
              var r = (0, s.a1)(e.startContainer, "data-type", n);
              if (r) {
                r.firstElementChild.remove(), r.lastElementChild.remove(), e.insertNode(document.createElement("wbr"));
                var i = document.createElement("div");
                i.innerHTML = t.lute.SpinVditorIRDOM(r.outerHTML), r.outerHTML = i.firstElementChild.innerHTML.trim();
              }
            }, kr = function(e, t, n, r) {
              var i = (0, M.zh)(e), a = t.getAttribute("data-type"), o = i.startContainer;
              o.nodeType === 3 && (o = o.parentElement);
              var u = !0;
              if (t.classList.contains("vditor-menu--current"))
                if (a === "quote") {
                  var h = (0, s.lG)(o, "BLOCKQUOTE");
                  h && (i.insertNode(document.createElement("wbr")), h.outerHTML = h.innerHTML.trim() === "" ? '<p data-block="0">'.concat(h.innerHTML, "</p>") : h.innerHTML);
                } else if (a === "link") {
                  var d = (0, s.a1)(i.startContainer, "data-type", "a");
                  if (d) {
                    var S = (0, s.fb)(i.startContainer, "vditor-ir__link");
                    S ? (i.insertNode(document.createElement("wbr")), d.outerHTML = S.innerHTML) : d.outerHTML = d.querySelector(".vditor-ir__link").innerHTML + "<wbr>";
                  }
                } else a === "italic" ? Mt(i, e, "em") : a === "bold" ? Mt(i, e, "strong") : a === "strike" ? Mt(i, e, "s") : a === "inline-code" ? Mt(i, e, "code") : (a === "check" || a === "list" || a === "ordered-list") && (St(e, i, a), u = !1, t.classList.remove("vditor-menu--current"));
              else {
                e.ir.element.childNodes.length === 0 && (e.ir.element.innerHTML = '<p data-block="0"><wbr></p>', (0, M.ib)(e.ir.element, i));
                var T = (0, s.F9)(i.startContainer);
                if (a === "line") {
                  if (T) {
                    var N = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                    T.innerHTML.trim() === "" ? T.outerHTML = N : T.insertAdjacentHTML("afterend", N);
                  }
                } else if (a === "quote")
                  T && (i.insertNode(document.createElement("wbr")), T.outerHTML = '<blockquote data-block="0">'.concat(T.outerHTML, "</blockquote>"), u = !1, t.classList.add("vditor-menu--current"));
                else if (a === "link") {
                  var R = void 0;
                  i.toString() === "" ? R = "".concat(n, "<wbr>").concat(r) : R = "".concat(n).concat(i.toString()).concat(r.replace(")", "<wbr>)")), document.execCommand("insertHTML", !1, R), u = !1, t.classList.add("vditor-menu--current");
                } else if (a === "italic" || a === "bold" || a === "strike" || a === "inline-code" || a === "code" || a === "table") {
                  var R = void 0;
                  i.toString() === "" ? R = "".concat(n, "<wbr>").concat(r) : (a === "code" ? R = "".concat(n, `
`).concat(i.toString(), "<wbr>").concat(r) : a === "table" ? R = "".concat(n).concat(i.toString(), "<wbr>").concat(r) : R = "".concat(n).concat(i.toString()).concat(r, "<wbr>"), i.deleteContents()), (a === "table" || a === "code") && (R = `
` + R + `

`);
                  var H = document.createElement("span");
                  H.innerHTML = R, i.insertNode(H), ze(e, i), a === "table" && (i.selectNodeContents(getSelection().getRangeAt(0).startContainer.parentElement), (0, M.Hc)(i));
                } else (a === "check" || a === "list" || a === "ordered-list") && (St(e, i, a, !1), u = !1, g(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current"));
              }
              (0, M.ib)(e.ir.element, i), Ke(e), u && st(e);
            }, Mr = function(e, t, n, r) {
              function i(a) {
                return a instanceof n ? a : new n(function(o) {
                  o(a);
                });
              }
              return new (n || (n = Promise))(function(a, o) {
                function u(S) {
                  try {
                    d(r.next(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function h(S) {
                  try {
                    d(r.throw(S));
                  } catch (T) {
                    o(T);
                  }
                }
                function d(S) {
                  S.done ? a(S.value) : i(S.value).then(u, h);
                }
                d((r = r.apply(e, t || [])).next());
              });
            }, Tr = function(e, t) {
              var n = { label: 0, sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
              }, trys: [], ops: [] }, r, i, a, o;
              return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                return this;
              }), o;
              function u(d) {
                return function(S) {
                  return h([d, S]);
                };
              }
              function h(d) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; o && (o = 0, d[0] && (n = 0)), n; ) try {
                  if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
                  switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
                    case 0:
                    case 1:
                      a = d;
                      break;
                    case 4:
                      return n.label++, { value: d[1], done: !1 };
                    case 5:
                      n.label++, i = d[1], d = [0];
                      continue;
                    case 7:
                      d = n.ops.pop(), n.trys.pop();
                      continue;
                    default:
                      if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        n = 0;
                        continue;
                      }
                      if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
                        n.label = d[1];
                        break;
                      }
                      if (d[0] === 6 && n.label < a[1]) {
                        n.label = a[1], a = d;
                        break;
                      }
                      if (a && n.label < a[2]) {
                        n.label = a[2], n.ops.push(d);
                        break;
                      }
                      a[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  d = t.call(e, n);
                } catch (S) {
                  d = [6, S], i = 0;
                } finally {
                  r = a = 0;
                }
                if (d[0] & 5) throw d[1];
                return { value: d[0] ? d[1] : void 0, done: !0 };
              }
            }, _r = (
              /** @class */
              function() {
                function e(t) {
                  var n = this;
                  this.splitChar = "", this.lastIndex = -1, this.fillEmoji = function(r, i) {
                    n.element.style.display = "none";
                    var a = decodeURIComponent(r.getAttribute("data-value")), o = window.getSelection().getRangeAt(0);
                    if (i.currentMode === "ir") {
                      var u = (0, s.a1)(o.startContainer, "data-type", "code-block-info");
                      if (u) {
                        u.textContent = v.g.ZWSP + a.trimRight(), o.selectNodeContents(u), o.collapse(!1), Ke(i), u.parentElement.querySelectorAll("code").forEach(function(T) {
                          T.className = "language-" + a.trimRight();
                        }), Le(u.parentElement.querySelector(".vditor-ir__preview"), i), n.recentLanguage = a.trimRight();
                        return;
                      }
                    }
                    if (i.currentMode === "wysiwyg" && o.startContainer.nodeType !== 3) {
                      var h = o.startContainer, d = void 0;
                      if (h.classList.contains("vditor-input") ? d = h : d = h.firstElementChild, d && d.classList.contains("vditor-input")) {
                        d.value = a.trimRight(), o.selectNodeContents(d), o.collapse(!1), d.dispatchEvent(new CustomEvent("input", { detail: 1 })), n.recentLanguage = a.trimRight();
                        return;
                      }
                    }
                    if (o.setStart(o.startContainer, n.lastIndex), o.deleteContents(), i.options.hint.parse ? i.currentMode === "sv" ? (0, M.oC)(i.lute.SpinVditorSVDOM(a), i) : i.currentMode === "wysiwyg" ? (0, M.oC)(i.lute.SpinVditorDOM(a), i) : (0, M.oC)(i.lute.SpinVditorIRDOM(a), i) : (0, M.oC)(a, i), n.splitChar === ":" && a.indexOf(":") > -1 && i.currentMode !== "sv" && o.insertNode(document.createTextNode(" ")), o.collapse(!1), (0, M.Hc)(o), i.currentMode === "wysiwyg") {
                      var S = (0, s.fb)(o.startContainer, "vditor-wysiwyg__block");
                      S && S.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (S.lastElementChild.innerHTML = S.firstElementChild.innerHTML, Le(S.lastElementChild, i));
                    } else if (i.currentMode === "ir") {
                      var S = (0, s.fb)(o.startContainer, "vditor-ir__marker--pre");
                      S && S.nextElementSibling.classList.contains("vditor-ir__preview") && (S.nextElementSibling.innerHTML = S.innerHTML, Le(S.nextElementSibling, i));
                    }
                    ee(i);
                  }, this.timeId = -1, this.element = document.createElement("div"), this.element.className = "vditor-hint", this.recentLanguage = "", t.push({ key: ":" });
                }
                return e.prototype.render = function(t) {
                  var n = this;
                  if (window.getSelection().focusNode) {
                    var r, i = getSelection().getRangeAt(0);
                    r = i.startContainer.textContent.substring(0, i.startOffset) || "";
                    var a = this.getKey(r, t.options.hint.extend);
                    if (typeof a > "u")
                      this.element.style.display = "none", clearTimeout(this.timeId);
                    else if (this.splitChar === ":") {
                      var o = a === "" ? t.options.hint.emoji : t.lute.GetEmojis(), u = [];
                      Object.keys(o).forEach(function(h) {
                        h.indexOf(a.toLowerCase()) === 0 && (o[h].indexOf(".") > -1 ? u.push({
                          html: '<img src="'.concat(o[h], '" title=":').concat(h, ':"/> :').concat(h, ":"),
                          value: ":".concat(h, ":")
                        }) : u.push({
                          html: '<span class="vditor-hint__emoji">'.concat(o[h], "</span>").concat(h),
                          value: o[h]
                        }));
                      }), this.genHTML(u, a, t);
                    } else
                      t.options.hint.extend.forEach(function(h) {
                        h.key === n.splitChar && (clearTimeout(n.timeId), n.timeId = window.setTimeout(function() {
                          return Mr(n, void 0, void 0, function() {
                            var d;
                            return Tr(this, function(S) {
                              switch (S.label) {
                                case 0:
                                  return d = this.genHTML, [4, h.hint(a)];
                                case 1:
                                  return d.apply(this, [S.sent(), a, t]), [
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
                  var i = this;
                  if (t.length === 0) {
                    this.element.style.display = "none";
                    return;
                  }
                  var a = r[r.currentMode].element, o = (0, M.Ny)(a), u = o.left + (r.options.outline.position === "left" ? r.outline.element.offsetWidth : 0), h = o.top, d = "";
                  t.forEach(function(T, N) {
                    if (!(N > 7)) {
                      var R = T.html;
                      if (n !== "") {
                        var H = R.lastIndexOf(">") + 1, U = R.substr(H), B = U.toLowerCase().indexOf(n.toLowerCase());
                        B > -1 && (U = U.substring(0, B) + "<b>" + U.substring(B, B + n.length) + "</b>" + U.substring(B + n.length), R = R.substr(0, H) + U);
                      }
                      d += '<button type="button" data-value="'.concat(encodeURIComponent(T.value), ` "
`).concat(N === 0 ? "class='vditor-hint--current'" : "", "> ").concat(R, "</button>");
                    }
                  }), this.element.innerHTML = d;
                  var S = parseInt(document.defaultView.getComputedStyle(a, null).getPropertyValue("line-height"), 10);
                  this.element.style.top = "".concat(h + (S || 22), "px"), this.element.style.left = "".concat(u, "px"), this.element.style.display = "block", this.element.style.right = "auto", this.element.querySelectorAll("button").forEach(function(T) {
                    T.addEventListener("click", function(N) {
                      i.fillEmoji(T, r), N.preventDefault();
                    });
                  }), this.element.getBoundingClientRect().bottom > window.innerHeight && (this.element.style.top = "".concat(h - this.element.offsetHeight, "px")), this.element.getBoundingClientRect().right > window.innerWidth && (this.element.style.left = "auto", this.element.style.right = "0");
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
                      var i = this.element.children.length;
                      this.element.children[i - 1].className = "vditor-hint--current";
                    }
                    return !0;
                  } else if (!(0, l.yl)(t) && !t.shiftKey && !t.altKey && t.key === "Enter" && !t.isComposing)
                    return t.preventDefault(), t.stopPropagation(), this.fillEmoji(r, n), !0;
                  return !1;
                }, e.prototype.getKey = function(t, n) {
                  var r = this;
                  this.lastIndex = -1, this.splitChar = "", n.forEach(function(d) {
                    var S = t.lastIndexOf(d.key);
                    r.lastIndex < S && (r.splitChar = d.key, r.lastIndex = S);
                  });
                  var i;
                  if (this.lastIndex === -1)
                    return i;
                  var a = t.split(this.splitChar), o = a[a.length - 1], u = 32;
                  if (a.length > 1 && o.trim() === o)
                    if (a.length === 2 && a[0] === "" && a[1].length < u)
                      i = a[1];
                    else {
                      var h = a[a.length - 2].slice(-1);
                      (0, L.X)(h) === " " && o.length < u && (i = o);
                    }
                  return i;
                }, e;
              }()
            ), Ar = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1;
                  var n = document.createElement("div");
                  n.className = "vditor-ir", n.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(t.options.placeholder, `"
 contenteditable="true" spellcheck="false"></pre>`), this.element = n.firstElementChild, this.bindEvent(t), Rt(t, this.element), fn(t, this.element), It(t, this.element), Ut(t, this.element), Vt(t, this.element), Pt(t, this.element), jt(t, this.element, this.copy), Bt(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, n) {
                  var r = getSelection().getRangeAt(0);
                  if (r.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var i = document.createElement("div");
                    i.appendChild(r.cloneContents()), t.clipboardData.setData("text/plain", n.lute.VditorIRDOM2Md(i.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("paste", function(r) {
                    kt(t, r, {
                      pasteCode: function(i) {
                        document.execCommand("insertHTML", !1, i);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    b(t, ["hint"]);
                  }), this.element.addEventListener("compositionstart", function(r) {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    (0, l.vU)() || ze(t, getSelection().getRangeAt(0).cloneRange()), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop")) {
                      if (n.preventInput) {
                        n.preventInput = !1, Ke(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《" || ze(t, getSelection().getRangeAt(0).cloneRange(), !1, r);
                    }
                  }), this.element.addEventListener("click", function(r) {
                    if (r.target.tagName === "INPUT") {
                      r.target.checked ? r.target.setAttribute("checked", "checked") : r.target.removeAttribute("checked"), n.preventInput = !0, Ke(t);
                      return;
                    }
                    var i = (0, M.zh)(t), a = (0, s.fb)(r.target, "vditor-ir__preview");
                    if (a || (a = (0, s.fb)(i.startContainer, "vditor-ir__preview")), a && (a.previousElementSibling.firstElementChild ? i.selectNodeContents(a.previousElementSibling.firstElementChild) : i.selectNodeContents(a.previousElementSibling), i.collapse(!0), (0, M.Hc)(i), Ee(t)), r.target.tagName === "IMG") {
                      var o = r.target.parentElement.querySelector(".vditor-ir__marker--link");
                      o && (i.selectNode(o), (0, M.Hc)(i));
                    }
                    var u = (0, s.a1)(r.target, "data-type", "a");
                    if (u && !u.classList.contains("vditor-ir__node--expand")) {
                      t.options.link.click ? t.options.link.click(u.querySelector(":scope > .vditor-ir__marker--link")) : t.options.link.isOpen && window.open(u.querySelector(":scope > .vditor-ir__marker--link").textContent);
                      return;
                    }
                    if (r.target.isEqualNode(n.element) && n.element.lastElementChild && i.collapsed) {
                      var h = n.element.lastElementChild.getBoundingClientRect();
                      r.y > h.top + h.height && (n.element.lastElementChild.tagName === "P" && n.element.lastElementChild.textContent.trim().replace(v.g.ZWSP, "") === "" ? (i.selectNodeContents(n.element.lastElementChild), i.collapse(!1)) : (n.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(v.g.ZWSP, "<wbr></p>")), (0, M.ib)(n.element, i)));
                    }
                    i.toString() === "" ? j(i, t) : setTimeout(function() {
                      j((0, M.zh)(t), t);
                    }), gt(r, t), st(t);
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, l.yl)(r))) {
                      if (r.key === "Enter" && Ee(t), st(t), (r.key === "Backspace" || r.key === "Delete") && t.ir.element.innerHTML !== "" && t.ir.element.childNodes.length === 1 && t.ir.element.firstElementChild && t.ir.element.firstElementChild.tagName === "P" && t.ir.element.firstElementChild.childElementCount === 0 && (t.ir.element.textContent === "" || t.ir.element.textContent === `
`)) {
                        t.ir.element.innerHTML = "";
                        return;
                      }
                      var i = (0, M.zh)(t);
                      r.key === "Backspace" ? ((0, l.vU)() && i.startContainer.textContent === `
` && i.startOffset === 1 && (i.startContainer.textContent = "", j(i, t)), n.element.querySelectorAll(".language-math").forEach(function(o) {
                        var u = o.querySelector("br");
                        u && u.remove();
                      })) : r.key.indexOf("Arrow") > -1 ? ((r.key === "ArrowLeft" || r.key === "ArrowRight") && Pn(t), j(i, t)) : r.keyCode === 229 && r.code === "" && r.key === "Unidentified" && j(i, t);
                      var a = (0, s.fb)(i.startContainer, "vditor-ir__preview");
                      if (a) {
                        if (r.key === "ArrowUp" || r.key === "ArrowLeft")
                          return a.previousElementSibling.firstElementChild ? i.selectNodeContents(a.previousElementSibling.firstElementChild) : i.selectNodeContents(a.previousElementSibling), i.collapse(!1), r.preventDefault(), !0;
                        if (a.tagName === "SPAN" && (r.key === "ArrowDown" || r.key === "ArrowRight"))
                          return a.parentElement.getAttribute("data-type") === "html-entity" ? (a.parentElement.insertAdjacentText("afterend", v.g.ZWSP), i.setStart(a.parentElement.nextSibling, 1)) : i.selectNodeContents(a.parentElement.lastElementChild), i.collapse(!1), r.preventDefault(), !0;
                      }
                    }
                  });
                }, e;
              }()
            ), jn = function(e) {
              if (e.currentMode === "sv")
                return e.lute.Md2HTML(x(e));
              if (e.currentMode === "wysiwyg")
                return e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML);
              if (e.currentMode === "ir")
                return e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML);
            }, xr = Y(214), Bn = Y(436), Dr = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-outline", this.element.innerHTML = '<div class="vditor-outline__title">'.concat(t, `</div>
<div class="vditor-outline__content"></div>`);
                }
                return e.prototype.render = function(t) {
                  var n = "";
                  return t.preview.element.style.display === "block" ? n = (0, Bn.k)(t.preview.previewElement, this.element.lastElementChild, t) : n = (0, Bn.k)(t[t.currentMode].element, this.element.lastElementChild, t), n;
                }, e.prototype.toggle = function(t, n, r) {
                  var i;
                  n === void 0 && (n = !0), r === void 0 && (r = !0);
                  var a = (i = t.toolbar.elements.outline) === null || i === void 0 ? void 0 : i.firstElementChild;
                  if (n && window.innerWidth >= v.g.MOBILE_WIDTH ? (this.element.style.display = "block", this.render(t), a == null || a.classList.add("vditor-menu--current")) : (this.element.style.display = "none", a == null || a.classList.remove("vditor-menu--current")), r && getSelection().rangeCount > 0) {
                    var o = getSelection().getRangeAt(0);
                    t[t.currentMode].element.contains(o.startContainer) && (0, M.Hc)(o);
                  }
                  Ie(t);
                }, e;
              }()
            ), Hr = Y(280), Or = (
              /** @class */
              function() {
                function e(t) {
                  var n = this;
                  this.element = document.createElement("div"), this.element.className = "vditor-preview", this.previewElement = document.createElement("div"), this.previewElement.className = "vditor-reset", t.options.classes.preview && this.previewElement.classList.add(t.options.classes.preview), this.previewElement.style.maxWidth = t.options.preview.maxWidth + "px", this.previewElement.addEventListener("copy", function(h) {
                    if (h.target.tagName !== "TEXTAREA") {
                      var d = document.createElement("div");
                      d.className = "vditor-reset", d.appendChild(getSelection().getRangeAt(0).cloneContents()), n.copyToX(t, d, "default"), h.preventDefault();
                    }
                  }), this.previewElement.addEventListener("click", function(h) {
                    var d = (0, s.lG)(h.target, "SPAN");
                    if (d && (0, s.fb)(d, "vditor-toc")) {
                      var S = n.previewElement.querySelector("#" + d.getAttribute("data-target-id"));
                      S && (n.element.scrollTop = S.offsetTop);
                      return;
                    }
                    if (h.target.tagName === "A") {
                      t.options.link.click ? t.options.link.click(h.target) : t.options.link.isOpen && window.open(h.target.getAttribute("href")), h.preventDefault();
                      return;
                    }
                    h.target.tagName === "IMG" && (t.options.image.preview ? t.options.image.preview(h.target) : t.options.image.isPreview && (0, q.E)(h.target, t.options.lang, t.options.theme));
                  }), this.element.appendChild(this.previewElement);
                  var r = t.options.preview.actions;
                  if (r.length !== 0) {
                    var i = document.createElement("div");
                    i.className = "vditor-preview__action";
                    for (var a = [], o = 0; o < r.length; o++) {
                      var u = r[o];
                      if (typeof u == "object") {
                        a.push('<button type="button" data-type="'.concat(u.key, '" class="').concat(u.className, '"').concat(u.tooltip ? ' aria-label="'.concat(u.tooltip, '"') : "", '">').concat(u.text, "</button>"));
                        continue;
                      }
                      switch (u) {
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
                    i.innerHTML = a.join(""), i.addEventListener((0, l.Le)(), function(h) {
                      var d = (0, C.S)(h.target, "BUTTON");
                      if (d) {
                        var S = d.getAttribute("data-type"), T = r.find(function(N) {
                          return (N == null ? void 0 : N.key) === S;
                        });
                        if (T) {
                          T.click(S);
                          return;
                        }
                        if (S === "mp-wechat" || S === "zhihu") {
                          n.copyToX(t, n.previewElement.cloneNode(!0), S);
                          return;
                        }
                        S === "desktop" ? n.previewElement.style.width = "auto" : S === "tablet" ? n.previewElement.style.width = "780px" : n.previewElement.style.width = "360px", n.previewElement.scrollWidth > n.previewElement.parentElement.clientWidth && (n.previewElement.style.width = "auto"), n.render(t), i.querySelectorAll("button").forEach(function(N) {
                          N.classList.remove("vditor-preview__action--current");
                        }), d.classList.add("vditor-preview__action--current");
                      }
                    }), this.element.insertBefore(i, this.previewElement);
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
                  if (x(t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "") {
                    this.previewElement.innerHTML = "";
                    return;
                  }
                  var i = (/* @__PURE__ */ new Date()).getTime(), a = x(t);
                  this.mdTimeoutId = window.setTimeout(function() {
                    if (t.options.preview.url) {
                      var o = new XMLHttpRequest();
                      o.open("POST", t.options.preview.url), o.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), o.onreadystatechange = function() {
                        if (o.readyState === XMLHttpRequest.DONE)
                          if (o.status === 200) {
                            var h = JSON.parse(o.responseText);
                            if (h.code !== 0) {
                              t.tip.show(h.msg);
                              return;
                            }
                            t.options.preview.transform && (h.data = t.options.preview.transform(h.data)), r.previewElement.innerHTML = h.data, r.afterRender(t, i);
                          } else {
                            var d = t.lute.Md2HTML(a);
                            t.options.preview.transform && (d = t.options.preview.transform(d)), r.previewElement.innerHTML = d, r.afterRender(t, i);
                          }
                      }, o.send(JSON.stringify({ markdownText: a }));
                    } else {
                      var u = t.lute.Md2HTML(a);
                      t.options.preview.transform && (u = t.options.preview.transform(u)), r.previewElement.innerHTML = u, r.afterRender(t, i);
                    }
                  }, t.options.preview.delay);
                }, e.prototype.afterRender = function(t, n) {
                  t.options.preview.parse && t.options.preview.parse(this.element);
                  var r = (/* @__PURE__ */ new Date()).getTime() - n;
                  (/* @__PURE__ */ new Date()).getTime() - n > 2600 ? (t.tip.show(window.VditorI18n.performanceTip.replace("${x}", r.toString())), t.preview.element.setAttribute("data-type", "renderPerformance")) : t.preview.element.getAttribute("data-type") === "renderPerformance" && (t.tip.hide(), t.preview.element.removeAttribute("data-type"));
                  var i = t.preview.element.querySelector(".vditor-comment--focus");
                  i && i.classList.remove("vditor-comment--focus"), (0, P.O)(t.preview.previewElement, t.options.preview.hljs), (0, $.s)(t.options.preview.hljs, t.preview.previewElement, t.options.cdn), (0, se.i)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, we.K)(t.preview.previewElement, t.options.cdn), (0, Ce.J)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, F.P)(t.preview.previewElement, t.options.cdn), (0, z.v)(t.preview.previewElement, t.options.cdn), (0, k.p)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, de.P)(t.preview.previewElement, t.options.cdn, t.options.theme), (0, ce.B)(t.preview.previewElement, t.options.cdn), (0, D.Q)(t.preview.previewElement, t.options.cdn), t.options.preview.render.media.enable && (0, Hr.Y)(t.preview.previewElement), t.options.customRenders.forEach(function(u) {
                    u.render(t.preview.previewElement, t);
                  });
                  var a = t.preview.element, o = t.outline.render(t);
                  o === "" && (o = "[ToC]"), a.querySelectorAll('[data-type="toc-block"]').forEach(function(u) {
                    u.innerHTML = o, (0, re.H)(u, {
                      cdn: t.options.cdn,
                      math: t.options.preview.math
                    });
                  }), (0, re.H)(t.preview.previewElement, {
                    cdn: t.options.cdn,
                    math: t.options.preview.math
                  });
                }, e.prototype.copyToX = function(t, n, r) {
                  r === void 0 && (r = "mp-wechat"), r !== "zhihu" ? n.querySelectorAll(".katex-html .base").forEach(function(a) {
                    a.style.display = "initial";
                  }) : n.querySelectorAll(".language-math").forEach(function(a) {
                    a.outerHTML = '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="'.concat(a.getAttribute("data-math"), '\\" style="display: block; margin: 0 auto; max-width: 100%;">');
                  }), n.style.backgroundColor = "#fff", n.querySelectorAll("code").forEach(function(a) {
                    a.style.backgroundImage = "none";
                  }), this.element.append(n);
                  var i = n.ownerDocument.createRange();
                  i.selectNode(n), (0, M.Hc)(i), document.execCommand("copy"), n.remove(), t.tip.show(["zhihu", "mp-wechat"].includes(r) ? "已复制，可到".concat(r === "zhihu" ? "知乎" : "微信公众号平台", "进行粘贴") : "已复制到剪切板");
                }, e;
              }()
            ), Nr = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("div"), this.element.className = "vditor-resize vditor-resize--".concat(t.options.resize.position), this.element.innerHTML = '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>', this.bindEvent(t);
                }
                return e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("mousedown", function(r) {
                    var i = document, a = r.clientY, o = t.element.offsetHeight, u = 63 + t.element.querySelector(".vditor-toolbar").clientHeight;
                    i.ondragstart = function() {
                      return !1;
                    }, window.captureEvents && window.captureEvents(), n.element.classList.add("vditor-resize--selected"), i.onmousemove = function(h) {
                      t.options.resize.position === "top" ? t.element.style.height = Math.max(u, o + (a - h.clientY)) + "px" : t.element.style.height = Math.max(u, o + (h.clientY - a)) + "px", t.options.typewriterMode && (t.sv.element.style.paddingBottom = t.sv.element.parentElement.offsetHeight / 2 + "px");
                    }, i.onmouseup = function() {
                      t.options.resize.after && t.options.resize.after(t.element.offsetHeight - o), window.captureEvents && window.captureEvents(), i.onmousemove = null, i.onmouseup = null, i.ondragstart = null, i.onselectstart = null, i.onselect = null, n.element.classList.remove("vditor-resize--selected");
                    };
                  });
                }, e;
              }()
            ), Rr = (
              /** @class */
              function() {
                function e(t) {
                  this.composingLock = !1, this.element = document.createElement("pre"), this.element.className = "vditor-sv vditor-reset", this.element.setAttribute("placeholder", t.options.placeholder), this.element.setAttribute("contenteditable", "true"), this.element.setAttribute("spellcheck", "false"), this.bindEvent(t), Rt(t, this.element), It(t, this.element), Ut(t, this.element), Vt(t, this.element), Pt(t, this.element), jt(t, this.element, this.copy), Bt(t, this.element, this.copy);
                }
                return e.prototype.copy = function(t, n) {
                  t.stopPropagation(), t.preventDefault(), t.clipboardData.setData("text/plain", ut(n[n.currentMode].element));
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.element.addEventListener("paste", function(r) {
                    kt(t, r, {
                      pasteCode: function(i) {
                        document.execCommand("insertHTML", !1, i);
                      }
                    });
                  }), this.element.addEventListener("scroll", function() {
                    if (t.preview.element.style.display === "block") {
                      var r = n.element.scrollTop, i = n.element.clientHeight, a = n.element.scrollHeight - parseFloat(n.element.style.paddingBottom || "0"), o = t.preview.element;
                      r / i > 0.5 ? o.scrollTop = (r + i) * o.scrollHeight / a - i : o.scrollTop = r * o.scrollHeight / a;
                    }
                  }), this.element.addEventListener("compositionstart", function(r) {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    (0, l.vU)() || ae(t, r), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop") && !(n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《")) {
                      if (n.preventInput) {
                        n.preventInput = !1, ke(t, {
                          enableAddUndoStack: !0,
                          enableHint: !0,
                          enableInput: !0
                        });
                        return;
                      }
                      ae(t, r);
                    }
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, l.yl)(r))) {
                      if ((r.key === "Backspace" || r.key === "Delete") && t.sv.element.innerHTML !== "" && t.sv.element.childNodes.length === 1 && t.sv.element.firstElementChild && t.sv.element.firstElementChild.tagName === "DIV" && t.sv.element.firstElementChild.childElementCount === 2 && (t.sv.element.firstElementChild.textContent === "" || t.sv.element.textContent === `
`)) {
                        t.sv.element.innerHTML = "";
                        return;
                      }
                      r.key === "Enter" && Ee(t);
                    }
                  });
                }, e;
              }()
            ), Un = (
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
                    var i = r.element.getBoundingClientRect();
                    i.top < 46 && (r.element.style.position = "fixed", r.element.style.top = "46px");
                  }, 150);
                }, e.prototype.hide = function() {
                  this.element.className = "vditor-messageElementtip", this.element.innerHTML = "";
                }, e;
              }()
            ), Jt = function(e, t) {
              if (t.options.preview.mode !== e) {
                switch (t.options.preview.mode = e, e) {
                  case "both":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "block", t.preview.render(t), p(t.toolbar.elements, ["both"]);
                    break;
                  case "editor":
                    t.sv.element.style.display = "block", t.preview.element.style.display = "none", g(t.toolbar.elements, ["both"]);
                    break;
                }
                t.devtools && t.devtools.renderEchart(t);
              }
            }, Ir = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Pr = (
              /** @class */
              function(e) {
                Ir(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return n.options.preview.mode === "both" && i.element.children[0].classList.add("vditor-menu--current"), i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    var o = i.element.firstElementChild;
                    o.classList.contains(v.g.CLASS_MENU_DISABLED) || (a.preventDefault(), n.currentMode === "sv" && (n.options.preview.mode === "both" ? Jt("editor", n) : Jt("both", n)));
                  }), i;
                }
                return t;
              }(me)
            ), jr = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__br";
                }
                return e;
              }()
            ), Vn = Y(580), Br = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Ur = (
              /** @class */
              function(e) {
                Br(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = i.element.children[0], o = document.createElement("div");
                  o.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow");
                  var u = "";
                  return v.g.CODE_THEME.forEach(function(h) {
                    u += "<button>".concat(h, "</button>");
                  }), o.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(u, "</div>"), o.addEventListener((0, l.Le)(), function(h) {
                    h.target.tagName === "BUTTON" && (b(n, ["subToolbar"]), n.options.preview.hljs.style = h.target.textContent, (0, Vn.Y)(h.target.textContent, n.options.cdn), h.preventDefault(), h.stopPropagation());
                  }), i.element.appendChild(o), y(n, o, a, r.level), i;
                }
                return t;
              }(me)
            ), Vr = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Wr = (
              /** @class */
              function(e) {
                Vr(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = i.element.children[0], o = document.createElement("div");
                  o.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow");
                  var u = "";
                  return Object.keys(n.options.preview.theme.list).forEach(function(h) {
                    u += '<button data-type="'.concat(h, '">').concat(n.options.preview.theme.list[h], "</button>");
                  }), o.innerHTML = '<div style="overflow: auto;max-height:'.concat(window.innerHeight / 2, 'px">').concat(u, "</div>"), o.addEventListener((0, l.Le)(), function(h) {
                    h.target.tagName === "BUTTON" && (b(n, ["subToolbar"]), n.options.preview.theme.current = h.target.getAttribute("data-type"), (0, X.Z)(n.options.preview.theme.current, n.options.preview.theme.path), h.preventDefault(), h.stopPropagation());
                  }), i.element.appendChild(o), y(n, o, a, r.level), i;
                }
                return t;
              }(me)
            ), Fr = (
              /** @class */
              function() {
                function e(t) {
                  this.element = document.createElement("span"), this.element.className = "vditor-counter vditor-tooltipped vditor-tooltipped__nw", this.render(t, "");
                }
                return e.prototype.render = function(t, n) {
                  var r = n.endsWith(`
`) ? n.length - 1 : n.length;
                  if (t.options.counter.type === "text" && t[t.currentMode]) {
                    var i = t[t.currentMode].element.cloneNode(!0);
                    i.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(a) {
                      a.remove();
                    }), r = i.textContent.length;
                  }
                  typeof t.options.counter.max == "number" ? (r > t.options.counter.max ? this.element.className = "vditor-counter vditor-counter--error" : this.element.className = "vditor-counter", this.element.innerHTML = "".concat(r, "/").concat(t.options.counter.max)) : this.element.innerHTML = "".concat(r), this.element.setAttribute("aria-label", t.options.counter.type), t.options.counter.after && t.options.counter.after(r, {
                    enable: t.options.counter.enable,
                    max: t.options.counter.max,
                    type: t.options.counter.type
                  });
                }, e;
              }()
            ), Kr = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), qr = (
              /** @class */
              function(e) {
                Kr(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].innerHTML = r.icon, i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), !a.currentTarget.classList.contains(v.g.CLASS_MENU_DISABLED) && r.click(a, n);
                  }), i;
                }
                return t;
              }(me)
            ), zr = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Gr = (
              /** @class */
              function(e) {
                zr(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.firstElementChild.addEventListener((0, l.Le)(), function(a) {
                    var o = i.element.firstElementChild;
                    o.classList.contains(v.g.CLASS_MENU_DISABLED) || (a.preventDefault(), o.classList.contains("vditor-menu--current") ? (o.classList.remove("vditor-menu--current"), n.devtools.element.style.display = "none", Ie(n)) : (o.classList.add("vditor-menu--current"), n.devtools.element.style.display = "block", Ie(n), n.devtools.renderEchart(n)));
                  }), i;
                }
                return t;
              }(me)
            ), Zr = (
              /** @class */
              /* @__PURE__ */ function() {
                function e() {
                  this.element = document.createElement("div"), this.element.className = "vditor-toolbar__divider";
                }
                return e;
              }()
            ), Jr = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Xr = (
              /** @class */
              function(e) {
                Jr(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = document.createElement("div");
                  a.className = "vditor-panel vditor-panel--arrow";
                  var o = "";
                  return Object.keys(n.options.hint.emoji).forEach(function(u) {
                    var h = n.options.hint.emoji[u];
                    h.indexOf(".") > -1 ? o += '<button data-value=":'.concat(u, ': " data-key=":').concat(u, `:"><img
data-value=":`).concat(u, ': " data-key=":').concat(u, ':" class="vditor-emojis__icon" src="').concat(h, '"/></button>') : o += '<button data-value="'.concat(h, ` "
 data-key="`).concat(u, '"><span class="vditor-emojis__icon">').concat(h, "</span></button>");
                  }), a.innerHTML = '<div class="vditor-emojis" style="max-height: '.concat(n.options.height === "auto" ? "auto" : n.options.height - 80, 'px">').concat(o, `</div><div class="vditor-emojis__tail">
    <span class="vditor-emojis__tip"></span><span>`).concat(n.options.hint.emojiTail || "", `</span>
</div>`), i.element.appendChild(a), y(n, a, i.element.firstElementChild, r.level), i.bindEvent(n), i;
                }
                return t.prototype.bindEvent = function(n) {
                  var r = this;
                  this.element.lastElementChild.addEventListener((0, l.Le)(), function(i) {
                    var a = (0, C.S)(i.target, "BUTTON");
                    if (a) {
                      i.preventDefault();
                      var o = a.getAttribute("data-value"), u = (0, M.zh)(n), h = o;
                      if (n.currentMode === "wysiwyg" ? h = n.lute.SpinVditorDOM(o) : n.currentMode === "ir" && (h = n.lute.SpinVditorIRDOM(o)), o.indexOf(":") > -1 && n.currentMode !== "sv") {
                        var d = document.createElement("div");
                        d.innerHTML = h, h = d.firstElementChild.firstElementChild.outerHTML + " ", (0, M.oC)(h, n);
                      } else
                        u.extractContents(), u.insertNode(document.createTextNode(o)), (0, s.F9)(u.startContainer) || Ht(n, u);
                      u.collapse(!1), (0, M.Hc)(u), r.element.lastElementChild.style.display = "none", ee(n);
                    }
                  }), this.element.lastElementChild.addEventListener("mouseover", function(i) {
                    var a = (0, C.S)(i.target, "BUTTON");
                    a && (r.element.querySelector(".vditor-emojis__tip").innerHTML = a.getAttribute("data-key"));
                  });
                }, t;
              }(me)
            ), Wn = function(e, t, n) {
              var r = document.createElement("a");
              "download" in r ? (r.download = n, r.style.display = "none", r.href = URL.createObjectURL(new Blob([t])), document.body.appendChild(r), r.click(), r.remove()) : e.tip.show(window.VditorI18n.downloadTip, 0);
            }, Yr = function(e) {
              var t = x(e);
              Wn(e, t, t.substr(0, 10) + ".md");
            }, Qr = function(e) {
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
                t.contentWindow.postMessage(x(e), "*");
              }, 200);
            }, $r = function(e) {
              var t = jn(e), n = '<html><head><link rel="stylesheet" type="text/css" href="'.concat(e.options.cdn, `/dist/index.css"/>
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
              Wn(e, n, t.substr(0, 10) + ".html");
            }, ei = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), ti = (
              /** @class */
              function(e) {
                ei(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = i.element.children[0], o = document.createElement("div");
                  return o.className = "vditor-hint".concat(r.level === 2 ? "" : " vditor-panel--arrow"), o.innerHTML = `<button data-type="markdown">Markdown</button>
<button data-type="pdf">PDF</button>
<button data-type="html">HTML</button>`, o.addEventListener((0, l.Le)(), function(u) {
                    var h = u.target;
                    if (h.tagName === "BUTTON") {
                      switch (h.getAttribute("data-type")) {
                        case "markdown":
                          Yr(n);
                          break;
                        case "pdf":
                          Qr(n);
                          break;
                        case "html":
                          $r(n);
                          break;
                      }
                      b(n, ["subToolbar"]), u.preventDefault(), u.stopPropagation();
                    }
                  }), i.element.appendChild(o), y(n, o, a, r.level), i;
                }
                return t;
              }(me)
            ), ni = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), ri = (
              /** @class */
              function(e) {
                ni(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i._bindEvent(n, r), i;
                }
                return t.prototype._bindEvent = function(n, r) {
                  this.element.children[0].addEventListener((0, l.Le)(), function(i) {
                    i.preventDefault(), n.element.className.includes("vditor--fullscreen") ? (r.level || (this.innerHTML = r.icon), n.element.style.zIndex = "", document.body.style.overflow = "", n.element.classList.remove("vditor--fullscreen"), Object.keys(n.toolbar.elements).forEach(function(a) {
                      var o = n.toolbar.elements[a].firstChild;
                      o && (o.className = o.className.replace("__s", "__n"), n.options.toolbar.forEach(function(u) {
                        typeof u != "string" && u.tipPosition && u.name === o.dataset.type && (o.className = "vditor-tooltipped vditor-tooltipped__".concat(u.tipPosition));
                      }));
                    }), n.counter && (n.counter.element.className = n.counter.element.className.replace("__s", "__n"))) : (r.level || (this.innerHTML = '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'), n.element.style.zIndex = n.options.fullscreen.index.toString(), document.body.style.overflow = "hidden", n.element.classList.add("vditor--fullscreen"), Object.keys(n.toolbar.elements).forEach(function(a) {
                      var o = n.toolbar.elements[a].firstChild;
                      o && (o.className = o.className.replace("__n", "__s"));
                    }), n.counter && (n.counter.element.className = n.counter.element.className.replace("__n", "__s"))), n.devtools && n.devtools.renderEchart(n), r.click && r.click(i, n), Ie(n), bt(n);
                  });
                }, t;
              }(me)
            ), ii = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), ai = (
              /** @class */
              function(e) {
                ii(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = document.createElement("div");
                  return a.className = "vditor-hint vditor-panel--arrow", a.innerHTML = '<button data-tag="h1" data-value="# ">'.concat(window.VditorI18n.heading1, " ").concat((0, l.ns)("&lt;⌥⌘1>"), `</button>
<button data-tag="h2" data-value="## ">`).concat(window.VditorI18n.heading2, " &lt;").concat((0, l.ns)("⌥⌘2"), `></button>
<button data-tag="h3" data-value="### ">`).concat(window.VditorI18n.heading3, " &lt;").concat((0, l.ns)("⌥⌘3"), `></button>
<button data-tag="h4" data-value="#### ">`).concat(window.VditorI18n.heading4, " &lt;").concat((0, l.ns)("⌥⌘4"), `></button>
<button data-tag="h5" data-value="##### ">`).concat(window.VditorI18n.heading5, " &lt;").concat((0, l.ns)("⌥⌘5"), `></button>
<button data-tag="h6" data-value="###### ">`).concat(window.VditorI18n.heading6, " &lt;").concat((0, l.ns)("⌥⌘6"), "></button>"), i.element.appendChild(a), i._bindEvent(n, a), i;
                }
                return t.prototype._bindEvent = function(n, r) {
                  var i = this.element.children[0];
                  i.addEventListener((0, l.Le)(), function(o) {
                    o.preventDefault(), clearTimeout(n.wysiwyg.afterRenderTimeoutId), clearTimeout(n.ir.processTimeoutId), clearTimeout(n.sv.processTimeoutId), !i.classList.contains(v.g.CLASS_MENU_DISABLED) && (i.blur(), i.classList.contains("vditor-menu--current") ? (n.currentMode === "wysiwyg" ? (Ot(n), ue(n)) : n.currentMode === "ir" && pt(n, ""), i.classList.remove("vditor-menu--current")) : (b(n, ["subToolbar"]), r.style.display = "block"));
                  });
                  for (var a = 0; a < 6; a++)
                    r.children.item(a).addEventListener((0, l.Le)(), function(o) {
                      o.preventDefault(), n.currentMode === "wysiwyg" ? (wt(n, o.target.getAttribute("data-tag")), ue(n), i.classList.add("vditor-menu--current")) : n.currentMode === "ir" ? (pt(n, o.target.getAttribute("data-value")), i.classList.add("vditor-menu--current")) : pn(n, o.target.getAttribute("data-value")), r.style.display = "none";
                    });
                }, t;
              }(me)
            ), oi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), si = (
              /** @class */
              function(e) {
                oi(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), n.tip.show(`<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">
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
                  }), i;
                }
                return t;
              }(me)
            ), li = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), ci = (
              /** @class */
              function(e) {
                li(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    if (a.preventDefault(), !(i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) || n.currentMode === "sv")) {
                      var o = (0, M.zh)(n), u = (0, s.lG)(o.startContainer, "LI");
                      u && Sn(n, u, o);
                    }
                  }), i;
                }
                return t;
              }(me)
            ), ui = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), fi = (
              /** @class */
              function(e) {
                ui(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), n.tip.show(`<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">
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
        组件版本：Vditor v`.concat(v.H, " / Lute v").concat(Lute.Version, `
        </li>
        <li>
        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>
        </li>
    </ul>
</div>
</div>`), 0);
                  }), i;
                }
                return t;
              }(me)
            ), di = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), pi = (
              /** @class */
              function(e) {
                di(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), !(i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) || n.currentMode === "sv") && ft(n, "afterend");
                  }), i;
                }
                return t;
              }(me)
            ), hi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), mi = (
              /** @class */
              function(e) {
                hi(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), !(i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) || n.currentMode === "sv") && ft(n, "beforebegin");
                  }), i;
                }
                return t;
              }(me)
            ), gi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), yi = (
              /** @class */
              function(e) {
                gi(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    if (a.preventDefault(), !(i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) || n.currentMode === "sv")) {
                      var o = (0, M.zh)(n), u = (0, s.lG)(o.startContainer, "LI");
                      u && Kt(n, u, o, u.parentElement);
                    }
                  }), i;
                }
                return t;
              }(me)
            ), bi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), wi = (
              /** @class */
              function(e) {
                bi(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return n.options.outline && i.element.firstElementChild.classList.add("vditor-menu--current"), i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault();
                    var o = n.toolbar.elements.outline.firstElementChild;
                    o.classList.contains(v.g.CLASS_MENU_DISABLED) || (n.options.outline.enable = !i.element.firstElementChild.classList.contains("vditor-menu--current"), n.outline.toggle(n, n.options.outline.enable));
                  }), i;
                }
                return t;
              }(me)
            ), vi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Ei = (
              /** @class */
              function(e) {
                vi(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i._bindEvent(n), i;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this;
                  this.element.children[0].addEventListener((0, l.Le)(), function(i) {
                    i.preventDefault();
                    var a = r.element.firstElementChild;
                    if (!a.classList.contains(v.g.CLASS_MENU_DISABLED)) {
                      var o = v.g.EDIT_TOOLBARS.concat(["both", "edit-mode", "devtools"]);
                      a.classList.contains("vditor-menu--current") ? (a.classList.remove("vditor-menu--current"), n.currentMode === "sv" ? (n.sv.element.style.display = "block", n.options.preview.mode === "both" ? n.preview.element.style.display = "block" : n.preview.element.style.display = "none") : (n[n.currentMode].element.parentElement.style.display = "block", n.preview.element.style.display = "none"), m(n.toolbar.elements, o), n.outline.render(n)) : (f(n.toolbar.elements, o), n.preview.element.style.display = "block", n.currentMode === "sv" ? n.sv.element.style.display = "none" : n[n.currentMode].element.parentElement.style.display = "none", n.preview.render(n), a.classList.add("vditor-menu--current"), b(n, ["subToolbar", "hint", "popover"]), setTimeout(function() {
                        n.outline.render(n);
                      }, n.options.preview.delay + 10)), Ie(n);
                    }
                  });
                }, t;
              }(me)
            ), Si = (
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
                  var r = n.createGain(), i = n.createMediaStreamSource(t);
                  i.connect(r), this.recorder = n.createScriptProcessor(2048, 2, 1), this.recorder.onaudioprocess = null, r.connect(this.recorder), this.recorder.connect(n.destination), this.readyFlag = !0;
                }
                return e.prototype.cloneChannelData = function(t, n) {
                  this.leftChannel.push(new Float32Array(t)), this.rightChannel.push(new Float32Array(n)), this.recordingLength += 2048;
                }, e.prototype.startRecordingNewWavFile = function() {
                  this.readyFlag && (this.isRecording = !0, this.leftChannel.length = this.rightChannel.length = 0, this.recordingLength = 0);
                }, e.prototype.stopRecording = function() {
                  this.isRecording = !1;
                }, e.prototype.buildWavFileBlob = function() {
                  for (var t = this.mergeBuffers(this.leftChannel), n = this.mergeBuffers(this.rightChannel), r = new Float32Array(t.length), i = 0; i < t.length; ++i)
                    r[i] = 0.5 * (t[i] + n[i]);
                  this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE && (r = this.downSampleBuffer(r, this.SAMPLE_RATE));
                  var a = 44 + r.length * 2, o = new ArrayBuffer(a), u = new DataView(o);
                  this.writeUTFBytes(u, 0, "RIFF"), u.setUint32(4, a, !0), this.writeUTFBytes(u, 8, "WAVE"), this.writeUTFBytes(u, 12, "fmt "), u.setUint32(16, 16, !0), u.setUint16(20, 1, !0), u.setUint16(22, 1, !0), u.setUint32(24, this.SAMPLE_RATE, !0), u.setUint32(28, this.SAMPLE_RATE * 2, !0), u.setUint16(32, 2, !0), u.setUint16(34, 16, !0);
                  var h = r.length * 2;
                  this.writeUTFBytes(u, 36, "data"), u.setUint32(40, h, !0);
                  for (var d = r.length, S = 44, T = 1, N = 0; N < d; N++)
                    u.setInt16(S, r[N] * (32767 * T), !0), S += 2;
                  return new Blob([u], { type: "audio/wav" });
                }, e.prototype.downSampleBuffer = function(t, n) {
                  if (n === this.DEFAULT_SAMPLE_RATE || n > this.DEFAULT_SAMPLE_RATE)
                    return t;
                  for (var r = this.DEFAULT_SAMPLE_RATE / n, i = Math.round(t.length / r), a = new Float32Array(i), o = 0, u = 0; o < a.length; ) {
                    for (var h = Math.round((o + 1) * r), d = 0, S = 0, T = u; T < h && T < t.length; T++)
                      d += t[T], S++;
                    a[o] = d / S, o++, u = h;
                  }
                  return a;
                }, e.prototype.mergeBuffers = function(t) {
                  for (var n = new Float32Array(this.recordingLength), r = 0, i = t.length, a = 0; a < i; ++a) {
                    var o = t[a];
                    n.set(o, r), r += o.length;
                  }
                  return n;
                }, e.prototype.writeUTFBytes = function(t, n, r) {
                  for (var i = r.length, a = 0; a < i; a++)
                    t.setUint8(n + a, r.charCodeAt(a));
                }, e;
              }()
            ), Ci = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), Li = (
              /** @class */
              function(e) {
                Ci(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return i._bindEvent(n), i;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this, i;
                  this.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    if (a.preventDefault(), !r.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED)) {
                      var o = n[n.currentMode].element;
                      if (!i) {
                        navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function(h) {
                          i = new Si(h), i.recorder.onaudioprocess = function(d) {
                            if (i.isRecording) {
                              var S = d.inputBuffer.getChannelData(0), T = d.inputBuffer.getChannelData(1);
                              i.cloneChannelData(S, T);
                            }
                          }, i.startRecordingNewWavFile(), n.tip.show(window.VditorI18n.recording), o.setAttribute("contenteditable", "false"), r.element.children[0].classList.add("vditor-menu--current");
                        }).catch(function() {
                          n.tip.show(window.VditorI18n["record-tip"]);
                        });
                        return;
                      }
                      if (i.isRecording) {
                        i.stopRecording(), n.tip.hide();
                        var u = new File([i.buildWavFileBlob()], "record".concat((/* @__PURE__ */ new Date()).getTime(), ".wav"), { type: "video/webm" });
                        Ft(n, [u]), r.element.children[0].classList.remove("vditor-menu--current");
                      } else
                        n.tip.show(window.VditorI18n.recording), o.setAttribute("contenteditable", "false"), i.startRecordingNewWavFile(), r.element.children[0].classList.add("vditor-menu--current");
                    }
                  });
                }, t;
              }(me)
            ), ki = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
                ki(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return f({ redo: i.element }, ["redo"]), i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), !i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) && n.undo.redo(n);
                  }), i;
                }
                return t;
              }(me)
            ), Ti = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), _i = (
              /** @class */
              function(e) {
                Ti(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this;
                  return f({ undo: i.element }, ["undo"]), i.element.children[0].addEventListener((0, l.Le)(), function(a) {
                    a.preventDefault(), !i.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED) && n.undo.undo(n);
                  }), i;
                }
                return t;
              }(me)
            ), Ai = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
                Ai(t, e);
                function t(n, r) {
                  var i = e.call(this, n, r) || this, a = '<input type="file"';
                  return n.options.upload.multiple && (a += ' multiple="multiple"'), n.options.upload.accept && (a += ' accept="'.concat(n.options.upload.accept, '"')), i.element.children[0].innerHTML = "".concat(r.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>').concat(a, ">"), i._bindEvent(n), i;
                }
                return t.prototype._bindEvent = function(n) {
                  var r = this;
                  this.element.children[0].addEventListener((0, l.Le)(), function(i) {
                    if (r.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED)) {
                      i.stopPropagation(), i.preventDefault();
                      return;
                    }
                  }), this.element.querySelector("input").addEventListener("change", function(i) {
                    if (r.element.firstElementChild.classList.contains(v.g.CLASS_MENU_DISABLED)) {
                      i.stopPropagation(), i.preventDefault();
                      return;
                    }
                    i.target.files.length !== 0 && Ft(n, i.target.files, i.target);
                  });
                }, t;
              }(me)
            ), Di = (
              /** @class */
              function() {
                function e(t) {
                  var n = this, r = t.options;
                  this.elements = {}, this.element = document.createElement("div"), this.element.className = "vditor-toolbar", r.toolbar.forEach(function(i, a) {
                    var o = n.genItem(t, i, a);
                    if (n.element.appendChild(o), i.toolbar) {
                      var u = document.createElement("div");
                      u.className = "vditor-hint vditor-panel--arrow", u.addEventListener((0, l.Le)(), function(h) {
                        u.style.display = "none";
                      }), i.toolbar.forEach(function(h, d) {
                        h.level = 2, u.appendChild(n.genItem(t, h, a + d));
                      }), o.appendChild(u), y(t, u, o.children[0]);
                    }
                  }), t.options.toolbarConfig.hide && this.element.classList.add("vditor-toolbar--hide"), t.options.toolbarConfig.pin && this.element.classList.add("vditor-toolbar--pin"), t.options.counter.enable && (t.counter = new Fr(t), this.element.appendChild(t.counter.element));
                }
                return e.prototype.updateConfig = function(t, n) {
                  t.options.toolbarConfig = Object.assign({
                    hide: !1,
                    pin: !1
                  }, n), t.options.toolbarConfig.hide ? this.element.classList.add("vditor-toolbar--hide") : this.element.classList.remove("vditor-toolbar--hide"), t.options.toolbarConfig.pin ? this.element.classList.add("vditor-toolbar--pin") : this.element.classList.remove("vditor-toolbar--pin");
                }, e.prototype.genItem = function(t, n, r) {
                  var i;
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
                      i = new me(t, n);
                      break;
                    case "emoji":
                      i = new Xr(t, n);
                      break;
                    case "headings":
                      i = new ai(t, n);
                      break;
                    case "|":
                      i = new Zr();
                      break;
                    case "br":
                      i = new jr();
                      break;
                    case "undo":
                      i = new _i(t, n);
                      break;
                    case "redo":
                      i = new Mi(t, n);
                      break;
                    case "help":
                      i = new si(t, n);
                      break;
                    case "both":
                      i = new Pr(t, n);
                      break;
                    case "preview":
                      i = new Ei(t, n);
                      break;
                    case "fullscreen":
                      i = new ri(t, n);
                      break;
                    case "upload":
                      i = new xi(t, n);
                      break;
                    case "record":
                      i = new Li(t, n);
                      break;
                    case "info":
                      i = new fi(t, n);
                      break;
                    case "edit-mode":
                      i = new pr(t, n);
                      break;
                    case "devtools":
                      i = new Gr(t, n);
                      break;
                    case "outdent":
                      i = new yi(t, n);
                      break;
                    case "indent":
                      i = new ci(t, n);
                      break;
                    case "outline":
                      i = new wi(t, n);
                      break;
                    case "insert-after":
                      i = new pi(t, n);
                      break;
                    case "insert-before":
                      i = new mi(t, n);
                      break;
                    case "code-theme":
                      i = new Ur(t, n);
                      break;
                    case "content-theme":
                      i = new Wr(t, n);
                      break;
                    case "export":
                      i = new ti(t, n);
                      break;
                    default:
                      i = new qr(t, n);
                      break;
                  }
                  if (i) {
                    var a = n.name;
                    return (a === "br" || a === "|") && (a = a + r), this.elements[a] = i.element, i.element;
                  }
                }, e;
              }()
            ), Hi = Y(173), Oi = (
              /** @class */
              function() {
                function e() {
                  this.stackSize = 50, this.resetStack(), this.dmp = new Hi();
                }
                return e.prototype.clearStack = function(t) {
                  this.resetStack(), this.resetIcon(t);
                }, e.prototype.resetIcon = function(t) {
                  t.toolbar && (this[t.currentMode].undoStack.length > 1 ? m(t.toolbar.elements, ["undo"]) : f(t.toolbar.elements, ["undo"]), this[t.currentMode].redoStack.length !== 0 ? m(t.toolbar.elements, ["redo"]) : f(t.toolbar.elements, ["redo"]));
                }, e.prototype.undo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false" && !(this[t.currentMode].undoStack.length < 2)) {
                    var n = this[t.currentMode].undoStack.pop();
                    n && (this[t.currentMode].redoStack.push(n), this.renderDiff(n, t), this[t.currentMode].hasUndo = !0, b(t, ["hint"]));
                  }
                }, e.prototype.redo = function(t) {
                  if (t[t.currentMode].element.getAttribute("contenteditable") !== "false") {
                    var n = this[t.currentMode].redoStack.pop();
                    n && (this[t.currentMode].undoStack.push(n), this.renderDiff(n, t, !0));
                  }
                }, e.prototype.recordFirstPosition = function(t, n) {
                  if (getSelection().rangeCount !== 0 && !(this[t.currentMode].undoStack.length !== 1 || this[t.currentMode].undoStack[0].length === 0 || this[t.currentMode].redoStack.length > 0) && !((0, l.vU)() && n.key === "Backspace") && !(0, l.G6)()) {
                    var r = this.addCaret(t);
                    r.replace("<wbr>", "").replace(" vditor-ir__node--expand", "") === this[t.currentMode].undoStack[0][0].diffs[0][1].replace("<wbr>", "") && (this[t.currentMode].undoStack[0][0].diffs[0][1] = r, this[t.currentMode].lastText = r);
                  }
                }, e.prototype.addToUndoStack = function(t) {
                  var n = this.addCaret(t, !0), r = this.dmp.diff_main(n, this[t.currentMode].lastText, !0), i = this.dmp.patch_make(n, this[t.currentMode].lastText, r);
                  i.length === 0 && this[t.currentMode].undoStack.length > 0 || (this[t.currentMode].lastText = n, this[t.currentMode].undoStack.push(i), this[t.currentMode].undoStack.length > this.stackSize && this[t.currentMode].undoStack.shift(), this[t.currentMode].hasUndo && (this[t.currentMode].redoStack = [], this[t.currentMode].hasUndo = !1, f(t.toolbar.elements, ["redo"])), this[t.currentMode].undoStack.length > 1 && m(t.toolbar.elements, ["undo"]));
                }, e.prototype.renderDiff = function(t, n, r) {
                  r === void 0 && (r = !1);
                  var i;
                  if (r) {
                    var a = this.dmp.patch_deepCopy(t).reverse();
                    a.forEach(function(u) {
                      u.diffs.forEach(function(h) {
                        h[0] = -h[0];
                      });
                    }), i = this.dmp.patch_apply(a, this[n.currentMode].lastText)[0];
                  } else
                    i = this.dmp.patch_apply(t, this[n.currentMode].lastText)[0];
                  if (this[n.currentMode].lastText = i, n[n.currentMode].element.innerHTML = i, n.currentMode !== "sv" && (n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview")).forEach(function(u) {
                    u.parentElement.querySelector(".language-echarts") && (n.currentMode === "ir" ? u.parentElement.outerHTML = n.lute.SpinVditorIRDOM(u.parentElement.outerHTML) : u.parentElement.outerHTML = n.lute.SpinVditorDOM(u.parentElement.outerHTML));
                  }), n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview[data-render='2']")).forEach(function(u) {
                    Le(u, n);
                  })), n[n.currentMode].element.querySelector("wbr"))
                    (0, M.ib)(n[n.currentMode].element, n[n.currentMode].element.ownerDocument.createRange()), Ee(n);
                  else {
                    var o = getSelection().getRangeAt(0);
                    o.setEndBefore(n[n.currentMode].element), o.collapse(!1);
                  }
                  Ve(n), ee(n, {
                    enableAddUndoStack: !1,
                    enableHint: !1,
                    enableInput: !0
                  }), tt(n), n[n.currentMode].element.querySelectorAll(".vditor-".concat(n.currentMode, "__preview[data-render='2']")).forEach(function(u) {
                    Le(u, n);
                  }), this[n.currentMode].undoStack.length > 1 ? m(n.toolbar.elements, ["undo"]) : f(n.toolbar.elements, ["undo"]), this[n.currentMode].redoStack.length !== 0 ? m(n.toolbar.elements, ["redo"]) : f(n.toolbar.elements, ["redo"]);
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
                    var i = getSelection().getRangeAt(0);
                    if (t[t.currentMode].element.contains(i.startContainer)) {
                      r = i.cloneRange();
                      var a = document.createElement("span");
                      a.className = "vditor-wbr", i.insertNode(a);
                    }
                  }
                  var o = t[t.currentMode].element.cloneNode(!0);
                  o.querySelectorAll(".vditor-".concat(t.currentMode, "__preview[data-render='1']")).forEach(function(h) {
                    h.firstElementChild && (h.firstElementChild.classList.contains("language-echarts") || h.firstElementChild.classList.contains("language-plantuml") || h.firstElementChild.classList.contains("language-mindmap") ? (h.firstElementChild.removeAttribute("_echarts_instance_"), h.firstElementChild.removeAttribute("data-processed"), h.firstElementChild.innerHTML = h.previousElementSibling.firstElementChild.innerHTML, h.setAttribute("data-render", "2")) : h.firstElementChild.classList.contains("language-math") && (h.setAttribute("data-render", "2"), h.firstElementChild.textContent = h.firstElementChild.getAttribute("data-math"), h.firstElementChild.removeAttribute("data-math")));
                  });
                  var u = o.innerHTML;
                  return t[t.currentMode].element.querySelectorAll(".vditor-wbr").forEach(function(h) {
                    h.remove();
                  }), n && r && (0, M.Hc)(r), u.replace('<span class="vditor-wbr"></span>', "<wbr>");
                }, e;
              }()
            ), Ni = Y(673), Ri = (
              /** @class */
              function() {
                function e(t) {
                  this.defaultOptions = {
                    rtl: !1,
                    after: void 0,
                    cache: {
                      enable: !0
                    },
                    cdn: v.g.CDN,
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
                      emojiPath: "".concat(v.g.CDN, "/dist/images/emoji"),
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
                      hljs: v.g.HLJS_OPTIONS,
                      markdown: v.g.MARKDOWN_OPTIONS,
                      math: v.g.MATH_OPTIONS,
                      maxWidth: 800,
                      mode: "both",
                      theme: v.g.THEME_OPTIONS,
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
                  var t, n, r, i, a, o, u, h, d;
                  this.options && (this.options.toolbar ? this.options.toolbar = this.mergeToolbar(this.options.toolbar) : this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar), !((n = (t = this.options.preview) === null || t === void 0 ? void 0 : t.theme) === null || n === void 0) && n.list && (this.defaultOptions.preview.theme.list = this.options.preview.theme.list), !((a = (i = (r = this.options.preview) === null || r === void 0 ? void 0 : r.render) === null || i === void 0 ? void 0 : i.media) === null || a === void 0) && a.enable && (this.defaultOptions.preview.render.media.enable = this.options.preview.render.media.enable), !((o = this.options.hint) === null || o === void 0) && o.emoji && (this.defaultOptions.hint.emoji = this.options.hint.emoji), this.options.comment && (this.defaultOptions.comment = this.options.comment), this.options.cdn && (!((h = (u = this.options.preview) === null || u === void 0 ? void 0 : u.theme) === null || h === void 0) && h.path || (this.defaultOptions.preview.theme.path = "".concat(this.options.cdn, "/dist/css/content-theme")), !((d = this.options.hint) === null || d === void 0) && d.emojiPath || (this.defaultOptions.hint.emojiPath = "".concat(this.options.cdn, "/dist/images/emoji"))));
                  var S = (0, Ni.T)(this.defaultOptions, this.options);
                  if (S.cache.enable && !S.cache.id)
                    throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                  return S;
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
                  ], i = [];
                  return t.forEach(function(a) {
                    var o = a;
                    r.forEach(function(u) {
                      typeof a == "string" && u.name === a && (o = u), typeof a == "object" && u.name === a.name && (o = Object.assign({}, u, a));
                    }), a.toolbar && (o.toolbar = n.mergeToolbar(a.toolbar)), i.push(o);
                  }), i;
                }, e;
              }()
            ), Ii = (
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
</div>`), this.element = r.firstElementChild, this.popover = r.firstElementChild.nextElementSibling, this.selectPopover = r.lastElementChild, this.bindEvent(t), Rt(t, this.element), fn(t, this.element), It(t, this.element), Ut(t, this.element), Vt(t, this.element), Pt(t, this.element), jt(t, this.element, this.copy), Bt(t, this.element, this.copy), t.options.comment.enable && (this.selectPopover.querySelector("button").onclick = function() {
                    var i = Lute.NewNodeID(), a = getSelection().getRangeAt(0), o = a.cloneRange(), u = a.extractContents(), h, d, S = !1, T = !1;
                    u.childNodes.forEach(function(H, U) {
                      var B = !1;
                      if (H.nodeType === 3 ? B = !0 : H.classList.contains("vditor-comment") ? H.classList.contains("vditor-comment") && H.setAttribute("data-cmtids", H.getAttribute("data-cmtids") + " " + i) : B = !0, B)
                        if (H.nodeType !== 3 && H.getAttribute("data-block") === "0" && U === 0 && o.startOffset > 0)
                          H.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(i, '">').concat(H.innerHTML, "</span>"), h = H;
                        else if (H.nodeType !== 3 && H.getAttribute("data-block") === "0" && U === u.childNodes.length - 1 && o.endOffset < o.endContainer.textContent.length)
                          H.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(i, '">').concat(H.innerHTML, "</span>"), d = H;
                        else if (H.nodeType !== 3 && H.getAttribute("data-block") === "0")
                          U === 0 ? S = !0 : U === u.childNodes.length - 1 && (T = !0), H.innerHTML = '<span class="vditor-comment" data-cmtids="'.concat(i, '">').concat(H.innerHTML, "</span>");
                        else {
                          var O = document.createElement("span");
                          O.classList.add("vditor-comment"), O.setAttribute("data-cmtids", i), H.parentNode.insertBefore(O, H), O.appendChild(H);
                        }
                    });
                    var N = (0, s.F9)(o.startContainer);
                    N && (h ? (N.insertAdjacentHTML("beforeend", h.innerHTML), h.remove()) : N.textContent.trim().replace(v.g.ZWSP, "") === "" && S && N.remove());
                    var R = (0, s.F9)(o.endContainer);
                    R && (d ? (R.insertAdjacentHTML("afterbegin", d.innerHTML), d.remove()) : R.textContent.trim().replace(v.g.ZWSP, "") === "" && T && R.remove()), a.insertNode(u), t.options.comment.add(i, a.toString(), n.getComments(t, !0)), ue(t, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    }), n.hideComment();
                  });
                }
                return e.prototype.getComments = function(t, n) {
                  var r = this;
                  if (n === void 0 && (n = !1), t.currentMode === "wysiwyg" && t.options.comment.enable) {
                    this.commentIds = [], this.element.querySelectorAll(".vditor-comment").forEach(function(a) {
                      r.commentIds = r.commentIds.concat(a.getAttribute("data-cmtids").split(" "));
                    }), this.commentIds = Array.from(new Set(this.commentIds));
                    var i = [];
                    if (n)
                      return this.commentIds.forEach(function(a) {
                        i.push({
                          id: a,
                          top: r.element.querySelector('.vditor-comment[data-cmtids="'.concat(a, '"]')).offsetTop
                        });
                      }), i;
                  } else
                    return [];
                }, e.prototype.triggerRemoveComment = function(t) {
                  var n = function(a, o) {
                    var u = new Set(o);
                    return a.filter(function(h) {
                      return !u.has(h);
                    });
                  };
                  if (t.currentMode === "wysiwyg" && t.options.comment.enable && t.wysiwyg.commentIds.length > 0) {
                    var r = JSON.parse(JSON.stringify(this.commentIds));
                    this.getComments(t);
                    var i = n(r, this.commentIds);
                    i.length > 0 && t.options.comment.remove(i);
                  }
                }, e.prototype.showComment = function() {
                  var t = (0, M.Ny)(this.element);
                  this.selectPopover.setAttribute("style", "left:".concat(t.left, "px;display:block;top:").concat(Math.max(-8, t.top - 21), "px"));
                }, e.prototype.hideComment = function() {
                  this.selectPopover.setAttribute("style", "display:none");
                }, e.prototype.unbindListener = function() {
                  window.removeEventListener("scroll", this.scrollListener);
                }, e.prototype.copy = function(t, n) {
                  var r = getSelection().getRangeAt(0);
                  if (r.toString() !== "") {
                    t.stopPropagation(), t.preventDefault();
                    var i = (0, s.lG)(r.startContainer, "CODE"), a = (0, s.lG)(r.endContainer, "CODE");
                    if (i && a && a.isSameNode(i)) {
                      var o = "";
                      i.parentElement.tagName === "PRE" ? o = r.toString() : o = "`" + r.toString() + "`", t.clipboardData.setData("text/plain", o), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var u = (0, s.lG)(r.startContainer, "A"), h = (0, s.lG)(r.endContainer, "A");
                    if (u && h && h.isSameNode(u)) {
                      var d = u.getAttribute("title") || "";
                      d && (d = ' "'.concat(d, '"')), t.clipboardData.setData("text/plain", "[".concat(r.toString(), "](").concat(u.getAttribute("href")).concat(d, ")")), t.clipboardData.setData("text/html", "");
                      return;
                    }
                    var S = document.createElement("div");
                    S.appendChild(r.cloneContents()), t.clipboardData.setData("text/plain", n.lute.VditorDOM2Md(S.innerHTML).trim()), t.clipboardData.setData("text/html", "");
                  }
                }, e.prototype.bindEvent = function(t) {
                  var n = this;
                  this.unbindListener(), window.addEventListener("scroll", this.scrollListener = function() {
                    if (b(t, ["hint"]), !(n.popover.style.display !== "block" || n.selectPopover.style.display !== "block")) {
                      var r = parseInt(n.popover.getAttribute("data-top"), 10);
                      if (t.options.height !== "auto") {
                        if (t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0) {
                          var i = Math.max(window.scrollY - t.element.offsetTop - 8, Math.min(r - t.wysiwyg.element.scrollTop, n.element.clientHeight - 21)) + "px";
                          n.popover.style.display === "block" && (n.popover.style.top = i), n.selectPopover.style.display === "block" && (n.selectPopover.style.top = i);
                        }
                        return;
                      } else if (!t.options.toolbarConfig.pin)
                        return;
                      var a = Math.max(r, window.scrollY - t.element.offsetTop - 8) + "px";
                      n.popover.style.display === "block" && (n.popover.style.top = a), n.selectPopover.style.display === "block" && (n.selectPopover.style.top = a);
                    }
                  }), this.element.addEventListener("scroll", function() {
                    if (b(t, ["hint"]), t.options.comment && t.options.comment.enable && t.options.comment.scroll && t.options.comment.scroll(t.wysiwyg.element.scrollTop), n.popover.style.display === "block") {
                      var r = parseInt(n.popover.getAttribute("data-top"), 10) - t.wysiwyg.element.scrollTop, i = -8;
                      t.options.toolbarConfig.pin && t.toolbar.element.getBoundingClientRect().top === 0 && (i = window.scrollY - t.element.offsetTop + i);
                      var a = Math.max(i, Math.min(r, n.element.clientHeight - 21)) + "px";
                      n.popover.style.top = a, n.selectPopover.style.top = a;
                    }
                  }), this.element.addEventListener("paste", function(r) {
                    kt(t, r, {
                      pasteCode: function(i) {
                        var a = (0, M.zh)(t), o = document.createElement("template");
                        o.innerHTML = i, a.insertNode(o.content.cloneNode(!0));
                        var u = (0, s.a1)(a.startContainer, "data-block", "0");
                        u ? u.outerHTML = t.lute.SpinVditorDOM(u.outerHTML) : t.wysiwyg.element.innerHTML = t.lute.SpinVditorDOM(t.wysiwyg.element.innerHTML), (0, M.ib)(t.wysiwyg.element, a);
                      }
                    });
                  }), this.element.addEventListener("compositionstart", function() {
                    n.composingLock = !0;
                  }), this.element.addEventListener("compositionend", function(r) {
                    var i = (0, C.W)(getSelection().getRangeAt(0).startContainer);
                    if (i && i.textContent === "") {
                      Ve(t);
                      return;
                    }
                    (0, l.vU)() || Et(t, getSelection().getRangeAt(0).cloneRange(), r), n.composingLock = !1;
                  }), this.element.addEventListener("input", function(r) {
                    if (!(r.inputType === "deleteByDrag" || r.inputType === "insertFromDrop")) {
                      if (n.preventInput) {
                        n.preventInput = !1, ue(t);
                        return;
                      }
                      if (n.composingLock || r.data === "‘" || r.data === "“" || r.data === "《") {
                        ue(t);
                        return;
                      }
                      var i = getSelection().getRangeAt(0), a = (0, s.F9)(i.startContainer);
                      if (a || (Ht(t, i), a = (0, s.F9)(i.startContainer)), !!a) {
                        for (var o = (0, M.im)(a, t.wysiwyg.element, i).start, u = !0, h = o - 1; h > a.textContent.substr(0, o).lastIndexOf(`
`); h--)
                          if (a.textContent.charAt(h) !== " " && // 多个 tab 前删除不形成代码块 https://github.com/Vanessa219/vditor/issues/162 1
                          a.textContent.charAt(h) !== "	") {
                            u = !1;
                            break;
                          }
                        o === 0 && (u = !1);
                        for (var d = !0, h = o - 1; h < a.textContent.length; h++)
                          if (a.textContent.charAt(h) !== " " && a.textContent.charAt(h) !== `
`) {
                            d = !1;
                            break;
                          }
                        d && /^#{1,6} $/.test(a.textContent) && (d = !1);
                        var S = (0, C.W)(getSelection().getRangeAt(0).startContainer);
                        if (S && S.textContent === "" && (Ve(t), S.remove()), u && a.getAttribute("data-type") !== "code-block" || d || zt(a.innerHTML) || qt(a.innerHTML) && a.previousElementSibling) {
                          typeof t.options.input == "function" && t.options.input(x(t));
                          return;
                        }
                        r.inputType === "insertParagraph" && n.element.innerHTML === "<p><br></p><p><br></p>" && a.previousElementSibling.remove(), Et(t, i, r);
                      }
                    }
                  }), this.element.addEventListener("click", function(r) {
                    if (r.target.tagName === "INPUT") {
                      var i = r.target;
                      i.checked ? i.setAttribute("checked", "checked") : i.removeAttribute("checked"), n.preventInput = !0, getSelection().rangeCount > 0 && (0, M.Hc)(getSelection().getRangeAt(0)), ue(t);
                      return;
                    }
                    if (r.target.tagName === "IMG" && // plantuml 图片渲染不进行提示
                    !r.target.parentElement.classList.contains("vditor-wysiwyg__preview")) {
                      r.target.getAttribute("data-type") === "link-ref" ? cn(t, r.target) : cr(r, t);
                      return;
                    }
                    var a = (0, s.lG)(r.target, "A");
                    if (a) {
                      t.options.link.click ? t.options.link.click(a) : t.options.link.isOpen && window.open(a.getAttribute("href")), r.preventDefault();
                      return;
                    }
                    var o = (0, M.zh)(t);
                    if (r.target.isEqualNode(n.element) && n.element.lastElementChild && o.collapsed) {
                      var u = n.element.lastElementChild.getBoundingClientRect();
                      r.y > u.top + u.height && (n.element.lastElementChild.tagName === "P" && n.element.lastElementChild.textContent.trim().replace(v.g.ZWSP, "") === "" ? (o.selectNodeContents(n.element.lastElementChild), o.collapse(!1)) : (n.element.insertAdjacentHTML("beforeend", '<p data-block="0">'.concat(v.g.ZWSP, "<wbr></p>")), (0, M.ib)(n.element, o)));
                    }
                    Ye(t);
                    var h = (0, s.fb)(r.target, "vditor-wysiwyg__preview");
                    h || (h = (0, s.fb)((0, M.zh)(t).startContainer, "vditor-wysiwyg__preview")), h && lt(h, t), gt(r, t);
                  }), this.element.addEventListener("keyup", function(r) {
                    if (!(r.isComposing || (0, l.yl)(r))) {
                      r.key === "Enter" && Ee(t), (r.key === "Backspace" || r.key === "Delete") && t.wysiwyg.element.innerHTML !== "" && t.wysiwyg.element.childNodes.length === 1 && t.wysiwyg.element.firstElementChild && t.wysiwyg.element.firstElementChild.tagName === "P" && t.wysiwyg.element.firstElementChild.childElementCount === 0 && (t.wysiwyg.element.textContent === "" || t.wysiwyg.element.textContent === `
`) && (t.wysiwyg.element.innerHTML = "");
                      var i = (0, M.zh)(t);
                      if (r.key === "Backspace" && (0, l.vU)() && i.startContainer.textContent === `
` && i.startOffset === 1 && (i.startContainer.textContent = ""), Ht(t, i), Ye(t), !(r.key !== "ArrowDown" && r.key !== "ArrowRight" && r.key !== "Backspace" && r.key !== "ArrowLeft" && r.key !== "ArrowUp")) {
                        (r.key === "ArrowLeft" || r.key === "ArrowRight") && t.hint.render(t);
                        var a = (0, s.fb)(i.startContainer, "vditor-wysiwyg__preview");
                        if (!a && i.startContainer.nodeType !== 3 && i.startOffset > 0) {
                          var o = i.startContainer;
                          o.classList.contains("vditor-wysiwyg__block") && (a = o.lastElementChild);
                        }
                        if (a) {
                          var u = a.previousElementSibling;
                          if (u.style.display === "none") {
                            r.key === "ArrowDown" || r.key === "ArrowRight" ? lt(a, t) : lt(a, t, !1);
                            return;
                          }
                          var h = a.previousElementSibling;
                          if (h.tagName === "PRE" && (h = h.firstElementChild), r.key === "ArrowDown" || r.key === "ArrowRight") {
                            var o = a.parentElement, d = or(o);
                            if (d && d.nodeType !== 3) {
                              var S = d.querySelector(".vditor-wysiwyg__preview");
                              if (S) {
                                lt(S, t);
                                return;
                              }
                            }
                            if (d.nodeType === 3) {
                              for (; d.textContent.length === 0 && d.nextSibling; )
                                d = d.nextSibling;
                              i.setStart(d, 1);
                            } else
                              i.setStart(d.firstChild, 0);
                          } else
                            i.selectNodeContents(h), i.collapse(!1);
                        }
                      }
                    }
                  });
                }, e;
              }()
            ), Pi = /* @__PURE__ */ function() {
              var e = function(t, n) {
                return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
                  r.__proto__ = i;
                } || function(r, i) {
                  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
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
            }(), ji = (
              /** @class */
              function(e) {
                Pi(t, e);
                function t(n, r) {
                  var i = e.call(this) || this;
                  if (i.isDestroyed = !1, i.version = v.H, typeof n == "string") {
                    if (r ? r.cache ? r.cache.id || (r.cache.id = "vditor".concat(n)) : r.cache = { id: "vditor".concat(n) } : r = {
                      cache: {
                        id: "vditor".concat(n)
                      }
                    }, !document.getElementById(n))
                      return i.showErrorTip("Failed to get element by id: ".concat(n)), i;
                    n = document.getElementById(n);
                  }
                  var a = new Ri(r), o = a.merge();
                  if (o.i18n)
                    window.VditorI18n = o.i18n, i.init(n, o);
                  else if (["de_DE", "en_US", "es_ES", "fr_FR", "ja_JP", "ko_KR", "pt_BR", "ru_RU", "sv_SE", "vi_VN", "zh_CN", "zh_TW"].includes(o.lang)) {
                    var u = "vditorI18nScript", h = u + o.lang;
                    document.querySelectorAll('head script[id^="'.concat(u, '"]')).forEach(function(d) {
                      d.id !== h && document.head.removeChild(d);
                    }), (0, _.G)("".concat(o.cdn, "/dist/js/i18n/").concat(o.lang, ".js"), h).then(function() {
                      i.init(n, o);
                    }).catch(function(d) {
                      i.showErrorTip("GET ".concat(o.cdn, "/dist/js/i18n/").concat(o.lang, ".js net::ERR_ABORTED 404 (Not Found)"));
                    });
                  } else
                    throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                  return i;
                }
                return t.prototype.showErrorTip = function(n) {
                  var r = new Un();
                  document.body.appendChild(r.element), r.show(n, 0);
                }, t.prototype.updateToolbarConfig = function(n) {
                  this.vditor.toolbar.updateConfig(this.vditor, n);
                }, t.prototype.setTheme = function(n, r, i, a) {
                  this.vditor.options.theme = n, pe(this.vditor), r && (this.vditor.options.preview.theme.current = r, (0, X.Z)(r, a || this.vditor.options.preview.theme.path)), i && (this.vditor.options.preview.hljs.style = i, (0, Vn.Y)(i, this.vditor.options.cdn));
                }, t.prototype.getValue = function() {
                  return x(this.vditor);
                }, t.prototype.getCurrentMode = function() {
                  return this.vditor.currentMode;
                }, t.prototype.focus = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.focus() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.focus() : this.vditor.currentMode === "ir" && this.vditor.ir.element.focus();
                }, t.prototype.blur = function() {
                  this.vditor.currentMode === "sv" ? this.vditor.sv.element.blur() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.blur() : this.vditor.currentMode === "ir" && this.vditor.ir.element.blur();
                }, t.prototype.disabled = function() {
                  b(this.vditor, ["subToolbar", "hint", "popover"]), f(this.vditor.toolbar.elements, v.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "false");
                }, t.prototype.enable = function() {
                  m(this.vditor.toolbar.elements, v.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor.undo.resetIcon(this.vditor), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "true");
                }, t.prototype.getSelection = function() {
                  if (this.vditor.currentMode === "wysiwyg")
                    return ut(this.vditor.wysiwyg.element);
                  if (this.vditor.currentMode === "sv")
                    return ut(this.vditor.sv.element);
                  if (this.vditor.currentMode === "ir")
                    return ut(this.vditor.ir.element);
                }, t.prototype.renderPreview = function(n) {
                  this.vditor.preview.render(this.vditor, n);
                }, t.prototype.getCursorPosition = function() {
                  return (0, M.Ny)(this.vditor[this.vditor.currentMode].element);
                }, t.prototype.isUploading = function() {
                  return this.vditor.upload.isUploading;
                }, t.prototype.clearCache = function() {
                  this.vditor.options.cache.enable && (0, l.pK)() && localStorage.removeItem(this.vditor.options.cache.id);
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
                  return jn(this.vditor);
                }, t.prototype.tip = function(n, r) {
                  this.vditor.tip.show(n, r);
                }, t.prototype.setPreviewMode = function(n) {
                  Jt(n, this.vditor);
                }, t.prototype.deleteValue = function() {
                  window.getSelection().isCollapsed || document.execCommand("delete", !1);
                }, t.prototype.updateValue = function(n) {
                  document.execCommand("insertHTML", !1, n);
                }, t.prototype.insertValue = function(n, r) {
                  r === void 0 && (r = !0);
                  var i = (0, M.zh)(this.vditor);
                  i.collapse(!0);
                  var a = document.createElement("template");
                  a.innerHTML = n, i.insertNode(a.content.cloneNode(!0)), i.collapse(!1), this.vditor.currentMode === "sv" ? (this.vditor.sv.preventInput = !0, r && ae(this.vditor)) : this.vditor.currentMode === "wysiwyg" ? r && Et(this.vditor, getSelection().getRangeAt(0)) : this.vditor.currentMode === "ir" && (this.vditor.ir.preventInput = !0, r && ze(this.vditor, getSelection().getRangeAt(0), !0));
                }, t.prototype.insertMD = function(n) {
                  this.vditor.currentMode === "ir" ? (0, M.oC)(this.vditor.lute.Md2VditorIRDOM(n), this.vditor) : this.vditor.currentMode === "wysiwyg" ? (0, M.oC)(this.vditor.lute.Md2VditorDOM(n), this.vditor) : Wt(this.vditor, n), this.vditor.outline.render(this.vditor), ee(this.vditor);
                }, t.prototype.setValue = function(n, r) {
                  var i = this;
                  r === void 0 && (r = !1), this.vditor.currentMode === "sv" ? (this.vditor.sv.element.innerHTML = "<div data-block='0'>".concat(this.vditor.lute.SpinVditorSVDOM(n), "</div>"), ke(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })) : this.vditor.currentMode === "wysiwyg" ? un(this.vditor, n, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  }) : (this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(n), this.vditor.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(a) {
                    Le(a, i.vditor);
                  }), Ke(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1
                  })), this.vditor.outline.render(this.vditor), n || (b(this.vditor, ["emoji", "headings", "submenu", "hint"]), this.vditor.wysiwyg.popover && (this.vditor.wysiwyg.popover.style.display = "none"), this.clearCache()), r && this.clearStack();
                }, t.prototype.insertEmptyBlock = function(n) {
                  ft(this.vditor, n);
                }, t.prototype.clearStack = function() {
                  this.vditor.undo.clearStack(this.vditor), this.vditor.undo.addToUndoStack(this.vditor);
                }, t.prototype.destroy = function() {
                  this.vditor.element.innerHTML = this.vditor.originalInnerHTML, this.vditor.element.classList.remove("vditor"), this.vditor.element.removeAttribute("style");
                  var n = document.getElementById("vditorIconScript");
                  n && n.remove(), this.clearCache(), on(), this.vditor.wysiwyg.unbindListener(), this.vditor.options.after = void 0, this.isDestroyed = !0;
                }, t.prototype.getCommentIds = function() {
                  return this.vditor.currentMode !== "wysiwyg" ? [] : this.vditor.wysiwyg.getComments(this.vditor, !0);
                }, t.prototype.hlCommentIds = function(n) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var r = function(i) {
                      i.classList.remove("vditor-comment--hover"), n.forEach(function(a) {
                        i.getAttribute("data-cmtids").indexOf(a) > -1 && i.classList.add("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(i) {
                      r(i);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(i) {
                      r(i);
                    });
                  }
                }, t.prototype.unHlCommentIds = function(n) {
                  if (this.vditor.currentMode === "wysiwyg") {
                    var r = function(i) {
                      n.forEach(function(a) {
                        i.getAttribute("data-cmtids").indexOf(a) > -1 && i.classList.remove("vditor-comment--hover");
                      });
                    };
                    this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(i) {
                      r(i);
                    }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(i) {
                      r(i);
                    });
                  }
                }, t.prototype.removeCommentIds = function(n) {
                  var r = this;
                  if (this.vditor.currentMode === "wysiwyg") {
                    var i = function(a, o) {
                      var u = a.getAttribute("data-cmtids").split(" ");
                      u.find(function(h, d) {
                        if (h === o)
                          return u.splice(d, 1), !0;
                      }), u.length === 0 ? (a.outerHTML = a.innerHTML, (0, M.zh)(r.vditor).collapse(!0)) : a.setAttribute("data-cmtids", u.join(" "));
                    };
                    n.forEach(function(a) {
                      r.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(o) {
                        i(o, a);
                      }), r.vditor.preview.element.style.display !== "none" && r.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(o) {
                        i(o, a);
                      });
                    }), ue(this.vditor, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1
                    });
                  }
                }, t.prototype.init = function(n, r) {
                  var i = this;
                  this.isDestroyed || (this.vditor = {
                    currentMode: r.mode,
                    element: n,
                    hint: new _r(r.hint.extend),
                    lute: void 0,
                    options: r,
                    originalInnerHTML: n.innerHTML,
                    outline: new Dr(window.VditorI18n.outline),
                    tip: new Un()
                  }, this.vditor.sv = new Rr(this.vditor), this.vditor.undo = new Oi(), this.vditor.wysiwyg = new Ii(this.vditor), this.vditor.ir = new Ar(this.vditor), this.vditor.toolbar = new Di(this.vditor), r.resize.enable && (this.vditor.resize = new Nr(this.vditor)), this.vditor.toolbar.elements.devtools && (this.vditor.devtools = new c()), (r.upload.url || r.upload.handler) && (this.vditor.upload = new br()), (0, _.G)(r._lutePath || "".concat(r.cdn, "/dist/js/lute/lute.min.js"), "vditorLuteScript").then(function() {
                    i.vditor.lute = (0, xr.X)({
                      autoSpace: i.vditor.options.preview.markdown.autoSpace,
                      gfmAutoLink: i.vditor.options.preview.markdown.gfmAutoLink,
                      codeBlockPreview: i.vditor.options.preview.markdown.codeBlockPreview,
                      emojiSite: i.vditor.options.hint.emojiPath,
                      emojis: i.vditor.options.hint.emoji,
                      fixTermTypo: i.vditor.options.preview.markdown.fixTermTypo,
                      footnotes: i.vditor.options.preview.markdown.footnotes,
                      headingAnchor: !1,
                      inlineMathDigit: i.vditor.options.preview.math.inlineDigit,
                      linkBase: i.vditor.options.preview.markdown.linkBase,
                      linkPrefix: i.vditor.options.preview.markdown.linkPrefix,
                      listStyle: i.vditor.options.preview.markdown.listStyle,
                      mark: i.vditor.options.preview.markdown.mark,
                      mathBlockPreview: i.vditor.options.preview.markdown.mathBlockPreview,
                      paragraphBeginningSpace: i.vditor.options.preview.markdown.paragraphBeginningSpace,
                      sanitize: i.vditor.options.preview.markdown.sanitize,
                      toc: i.vditor.options.preview.markdown.toc
                    }), i.vditor.preview = new Or(i.vditor), Oe(i.vditor), r.after && r.after(), r.icon && (0, _.J)("".concat(r.cdn, "/dist/js/icons/").concat(r.icon, ".js"), "vditorIconScript");
                  }));
                }, t;
              }(Z.default)
            );
            const Bi = ji;
          })(), Be = Be.default, Be;
        })()
      );
    });
  }(xt)), xt.exports;
}
var $i = Qi();
const ea = /* @__PURE__ */ Xi($i), ta = { class: "endericedragon-sticky-buttons" }, na = /* @__PURE__ */ Yn({
  __name: "EditorModal",
  setup(ne) {
    const ye = ot(""), ge = ot(""), be = ot(!1), Y = ot(0), Be = ot(null);
    let Z = ot();
    Wi(() => {
      window.addEventListener(nn.showEditor, v);
    }), Fi(() => {
      window.removeEventListener(nn.showEditor, v);
    });
    function v(g) {
      let p = g.detail, m = p.content, f = p.rel_file_path;
      ye.value !== f && (ye.value = f, Y.value = 0), ge.value = m, be.value = !0;
    }
    function L() {
      nr(
        Xe,
        er.saveContent,
        new tr(
          Z.value.getValue(),
          ye.value
        )
      ).then((g) => {
        Xe.extensionManager.toast.add({
          severity: "success",
          summary: "MDNotes",
          detail: "Note saved",
          life: 600
        });
      });
    }
    class x {
      static ok() {
        L(), be.value = !1;
      }
      static cancel() {
        be.value = !1;
      }
    }
    function _() {
      let p = document.getElementById("mde-point").parentElement;
      Z.value = new ea("mde-point", {
        minHeight: 320,
        toolbarConfig: {
          pin: !0
        },
        preview: {
          hljs: {
            lineNumber: !0
          },
          maxWidth: 2147483647
          // 具体的宽度由Dialog说了算
        },
        keydown: (m) => {
          Xe.extensionManager.setting.get(Dt.autosave) && (clearTimeout(Be.value), Be.value = setTimeout(() => {
            L();
          }, Xe.extensionManager.setting.get(Dt.autosaveDelay)));
        },
        after: () => {
          var m, f;
          (m = Z.value) == null || m.setTheme(
            "dark",
            "dark",
            "atom-one-dark"
          ), (f = Z.value) == null || f.setValue(ge.value), ge.value = "", console.log("[mdnotes] Setting scrollTop value to ", Y.value), p.scrollTo({
            top: Y.value,
            left: 0,
            behavior: "smooth"
          });
        }
      });
    }
    function c() {
      var g;
      clearTimeout(Be.value), (g = Z.value) == null || g.destroy();
    }
    function l() {
      let g = document.getElementById("mde-point").parentElement;
      console.log("[mdnotes] Scrolled to ", g.scrollTop), Y.value = g.scrollTop;
    }
    return (g, p) => ($n(), Qn(en(Ji), {
      visible: be.value,
      "onUpdate:visible": p[0] || (p[0] = (m) => be.value = m),
      onShow: _,
      onHide: l,
      onAfterHide: c,
      header: ye.value,
      "close-on-escape": ""
    }, {
      default: tn(() => [
        p[3] || (p[3] = At("div", { id: "mde-point" }, null, -1)),
        At("div", ta, [
          Zn(en(Jn), {
            severity: "danger",
            onClick: x.cancel
          }, {
            default: tn(() => [...p[1] || (p[1] = [
              At("i", { class: "bi bi-x-circle" }, null, -1)
            ])]),
            _: 1
          }, 8, ["onClick"]),
          Zn(en(Jn), {
            severity: "success",
            onClick: x.ok
          }, {
            default: tn(() => [...p[2] || (p[2] = [
              At("i", { class: "bi bi-check2-circle" }, null, -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      _: 1
    }, 8, ["visible", "header"]));
  }
}), ra = (ne, ye) => {
  const ge = ne.__vccOpts || ne;
  for (const [be, Y] of ye)
    ge[be] = Y;
  return ge;
}, ia = /* @__PURE__ */ ra(na, [["__scopeId", "data-v-16bbcd19"]]), aa = /* @__PURE__ */ Yn({
  __name: "App",
  setup(ne) {
    return (ye, ge) => ($n(), Qn(ia, {
      onKeydown: ge[0] || (ge[0] = Ki(() => {
      }, ["stop"]))
    }));
  }
}), oa = "extensions/comfyui-mdnotes/assets/main.css";
Zi.addStylesheet(oa);
Xe.registerExtension({
  name: "endericedragon.comfyui-mdnotes",
  settings: [
    {
      id: Dt.autosave,
      name: "Enable autosave?",
      type: "boolean",
      defaultValue: !0
    },
    {
      id: Dt.autosaveDelay,
      name: "Autosave delay (ms)",
      type: "number",
      defaultValue: 1e3
    }
  ],
  async beforeRegisterNodeDef(ne, ye, ge) {
    let be = ne.prototype.getExtraMenuOptions;
    ne.prototype.getExtraMenuOptions = function(Y, Be) {
      be == null || be.apply(this, arguments);
      let Z = this.widgets.find((_) => _.name === "ckpt_name"), v = this.widgets.filter((_) => _.name.includes("lora") && _.name.includes("name")), L = [];
      function x(_, c) {
        nr(Xe, er.sendCurrentModel, { model_type: c, model_path: _ }).then((l) => {
          let g = l.content, p = l.rel_file_path;
          window.dispatchEvent(new CustomEvent(nn.showEditor, {
            detail: new tr(g, p)
          }));
        });
      }
      if (Z) {
        const _ = Z.value;
        L.push({
          content: "Show note of checkpoint",
          callback: () => {
            x(_, rn.CKPT);
          }
        });
      }
      for (let [_, c] of v.entries()) {
        const l = c.value;
        l !== "None" && L.push({
          content: `Show note of lora${_ + 1}`,
          callback: () => {
            x(l, rn.LORA);
          }
        });
      }
      return Be.unshift(...L), Be;
    };
  },
  async setup() {
    let ne = document.createElement("div");
    ne.id = "mdnotes-ui", document.body.appendChild(ne), qi(aa).use(zi).mount(ne);
  }
});

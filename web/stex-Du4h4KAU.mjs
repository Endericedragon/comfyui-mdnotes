function k(b) {
  function h(t, n) {
    t.cmdState.push(n);
  }
  function g(t) {
    return t.cmdState.length > 0 ? t.cmdState[t.cmdState.length - 1] : null;
  }
  function p(t) {
    var n = t.cmdState.pop();
    n && n.closeBracket();
  }
  function s(t) {
    for (var n = t.cmdState, e = n.length - 1; e >= 0; e--) {
      var i = n[e];
      if (i.name != "DEFAULT")
        return i;
    }
    return { styleIdentifier: function() {
      return null;
    } };
  }
  function a(t, n, e) {
    return function() {
      this.name = t, this.bracketNo = 0, this.style = n, this.styles = e, this.argument = null, this.styleIdentifier = function() {
        return this.styles[this.bracketNo - 1] || null;
      }, this.openBracket = function() {
        return this.bracketNo++, "bracket";
      }, this.closeBracket = function() {
      };
    };
  }
  var r = {};
  r.importmodule = a("importmodule", "tag", ["string", "builtin"]), r.documentclass = a("documentclass", "tag", ["", "atom"]), r.usepackage = a("usepackage", "tag", ["atom"]), r.begin = a("begin", "tag", ["atom"]), r.end = a("end", "tag", ["atom"]), r.label = a("label", "tag", ["atom"]), r.ref = a("ref", "tag", ["atom"]), r.eqref = a("eqref", "tag", ["atom"]), r.cite = a("cite", "tag", ["atom"]), r.bibitem = a("bibitem", "tag", ["atom"]), r.Bibitem = a("Bibitem", "tag", ["atom"]), r.RBibitem = a("RBibitem", "tag", ["atom"]), r.DEFAULT = function() {
    this.name = "DEFAULT", this.style = "tag", this.styleIdentifier = this.openBracket = this.closeBracket = function() {
    };
  };
  function f(t, n) {
    t.f = n;
  }
  function l(t, n) {
    var e;
    if (t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
      var i = t.current().slice(1);
      return e = r.hasOwnProperty(i) ? r[i] : r.DEFAULT, e = new e(), h(n, e), f(n, d), e.style;
    }
    if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/\\]/))
      return "tag";
    if (t.match("\\["))
      return f(n, function(m, c) {
        return o(m, c, "\\]");
      }), "keyword";
    if (t.match("\\("))
      return f(n, function(m, c) {
        return o(m, c, "\\)");
      }), "keyword";
    if (t.match("$$"))
      return f(n, function(m, c) {
        return o(m, c, "$$");
      }), "keyword";
    if (t.match("$"))
      return f(n, function(m, c) {
        return o(m, c, "$");
      }), "keyword";
    var u = t.next();
    if (u == "%")
      return t.skipToEnd(), "comment";
    if (u == "}" || u == "]") {
      if (e = g(n), e)
        e.closeBracket(u), f(n, d);
      else
        return "error";
      return "bracket";
    } else return u == "{" || u == "[" ? (e = r.DEFAULT, e = new e(), h(n, e), "bracket") : /\d/.test(u) ? (t.eatWhile(/[\w.%]/), "atom") : (t.eatWhile(/[\w\-_]/), e = s(n), e.name == "begin" && (e.argument = t.current()), e.styleIdentifier());
  }
  function o(t, n, e) {
    if (t.eatSpace())
      return null;
    if (e && t.match(e))
      return f(n, l), "keyword";
    if (t.match(/^\\[a-zA-Z@]+/))
      return "tag";
    if (t.match(/^[a-zA-Z]+/))
      return "variableName.special";
    if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/]/) || t.match(/^[\^_&]/))
      return "tag";
    if (t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))
      return null;
    if (t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))
      return "number";
    var i = t.next();
    return i == "{" || i == "}" || i == "[" || i == "]" || i == "(" || i == ")" ? "bracket" : i == "%" ? (t.skipToEnd(), "comment") : "error";
  }
  function d(t, n) {
    var e = t.peek(), i;
    return e == "{" || e == "[" ? (i = g(n), i.openBracket(e), t.eat(e), f(n, l), "bracket") : /[ \t\r]/.test(e) ? (t.eat(e), null) : (f(n, l), p(n), l(t, n));
  }
  return {
    name: "stex",
    startState: function() {
      var t = b ? function(n, e) {
        return o(n, e);
      } : l;
      return {
        cmdState: [],
        f: t
      };
    },
    copyState: function(t) {
      return {
        cmdState: t.cmdState.slice(),
        f: t.f
      };
    },
    token: function(t, n) {
      return n.f(t, n);
    },
    blankLine: function(t) {
      t.f = l, t.cmdState.length = 0;
    },
    languageData: {
      commentTokens: { line: "%" }
    }
  };
}
const y = k(!1);
k(!0);
export {
  y as stex
};

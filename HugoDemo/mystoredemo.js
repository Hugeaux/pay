! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 76)
}([function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "h", function() {
        return s
    }), n.d(e, "createElement", function() {
        return s
    }), n.d(e, "cloneElement", function() {
        return p
    }), n.d(e, "createRef", function() {
        return M
    }), n.d(e, "Component", function() {
        return k
    }), n.d(e, "render", function() {
        return R
    }), n.d(e, "rerender", function() {
        return m
    }), n.d(e, "options", function() {
        return r
    });
    var o = function() {},
        r = {},
        i = [],
        a = [];

    function s(t, e) {
        var n, s, c, u, l = a;
        for (u = arguments.length; u-- > 2;) i.push(arguments[u]);
        for (e && null != e.children && (i.length || i.push(e.children), delete e.children); i.length;)
            if ((s = i.pop()) && void 0 !== s.pop)
                for (u = s.length; u--;) i.push(s[u]);
            else "boolean" === typeof s && (s = null), (c = "function" !== typeof t) && (null == s ? s = "" : "number" === typeof s ? s = String(s) : "string" !== typeof s && (c = !1)), c && n ? l[l.length - 1] += s : l === a ? l = [s] : l.push(s), n = c;
        var p = new o;
        return p.nodeName = t, p.children = l, p.attributes = null == e ? void 0 : e, p.key = null == e ? void 0 : e.key, void 0 !== r.vnode && r.vnode(p), p
    }

    function c(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }

    function u(t, e) {
        null != t && ("function" == typeof t ? t(e) : t.current = e)
    }
    var l = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

    function p(t, e) {
        return s(t.nodeName, c(c({}, t.attributes), e), arguments.length > 2 ? [].slice.call(arguments, 2) : t.children)
    }
    var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        d = [];

    function h(t) {
        !t._dirty && (t._dirty = !0) && 1 == d.push(t) && (r.debounceRendering || l)(m)
    }

    function m() {
        for (var t; t = d.pop();) t._dirty && B(t)
    }

    function y(t, e) {
        return t.normalizedNodeName === e || t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function b(t) {
        var e = c({}, t.attributes);
        e.children = t.children;
        var n = t.nodeName.defaultProps;
        if (void 0 !== n)
            for (var o in n) void 0 === e[o] && (e[o] = n[o]);
        return e
    }

    function A(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function v(t, e, n, o, r) {
        if ("className" === e && (e = "class"), "key" === e);
        else if ("ref" === e) u(n, null), u(o, t);
        else if ("class" !== e || r)
            if ("style" === e) {
                if (o && "string" !== typeof o && "string" !== typeof n || (t.style.cssText = o || ""), o && "object" === typeof o) {
                    if ("string" !== typeof n)
                        for (var i in n) i in o || (t.style[i] = "");
                    for (var i in o) t.style[i] = "number" === typeof o[i] && !1 === f.test(i) ? o[i] + "px" : o[i]
                }
            } else if ("dangerouslySetInnerHTML" === e) o && (t.innerHTML = o.__html || "");
        else if ("o" == e[0] && "n" == e[1]) {
            var a = e !== (e = e.replace(/Capture$/, ""));
            e = e.toLowerCase().substring(2), o ? n || t.addEventListener(e, g, a) : t.removeEventListener(e, g, a), (t._listeners || (t._listeners = {}))[e] = o
        } else if ("list" !== e && "type" !== e && !r && e in t) {
            try {
                t[e] = null == o ? "" : o
            } catch (t) {}
            null != o && !1 !== o || "spellcheck" == e || t.removeAttribute(e)
        } else {
            var s = r && e !== (e = e.replace(/^xlink:?/, ""));
            null == o || !1 === o ? s ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.removeAttribute(e) : "function" !== typeof o && (s ? t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), o) : t.setAttribute(e, o))
        } else t.className = o || ""
    }

    function g(t) {
        return this._listeners[t.type](r.event && r.event(t) || t)
    }
    var O = [],
        w = 0,
        _ = !1,
        j = !1;

    function N() {
        for (var t; t = O.shift();) r.afterMount && r.afterMount(t), t.componentDidMount && t.componentDidMount()
    }

    function S(t, e, n, o, r, i) {
        w++ || (_ = null != r && void 0 !== r.ownerSVGElement, j = null != t && !("__preactattr_" in t));
        var a = C(t, e, n, o, i);
        return r && a.parentNode !== r && r.appendChild(a), --w || (j = !1, i || N()), a
    }

    function C(t, e, n, o, r) {
        var i = t,
            a = _;
        if (null != e && "boolean" !== typeof e || (e = ""), "string" === typeof e || "number" === typeof e) return t && void 0 !== t.splitText && t.parentNode && (!t._component || r) ? t.nodeValue != e && (t.nodeValue = e) : (i = document.createTextNode(e), t && (t.parentNode && t.parentNode.replaceChild(i, t), P(t, !0))), i.__preactattr_ = !0, i;
        var s, c, u = e.nodeName;
        if ("function" === typeof u) return function(t, e, n, o) {
            var r = t && t._component,
                i = r,
                a = t,
                s = r && t._componentConstructor === e.nodeName,
                c = s,
                u = b(e);
            for (; r && !c && (r = r._parentComponent);) c = r.constructor === e.nodeName;
            r && c && (!o || r._component) ? (K(r, u, 3, n, o), t = r.base) : (i && !s && (I(i), t = a = null), r = E(e.nodeName, u, n), t && !r.nextBase && (r.nextBase = t, a = null), K(r, u, 1, n, o), t = r.base, a && t !== a && (a._component = null, P(a, !1)));
            return t
        }(t, e, n, o);
        if (_ = "svg" === u || "foreignObject" !== u && _, u = String(u), (!t || !y(t, u)) && (s = u, (c = _ ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s)).normalizedNodeName = s, i = c, t)) {
            for (; t.firstChild;) i.appendChild(t.firstChild);
            t.parentNode && t.parentNode.replaceChild(i, t), P(t, !0)
        }
        var l = i.firstChild,
            p = i.__preactattr_,
            f = e.children;
        if (null == p) {
            p = i.__preactattr_ = {};
            for (var d = i.attributes, h = d.length; h--;) p[d[h].name] = d[h].value
        }
        return !j && f && 1 === f.length && "string" === typeof f[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != f[0] && (l.nodeValue = f[0]) : (f && f.length || null != l) && function(t, e, n, o, r) {
                var i, a, s, c, u, l = t.childNodes,
                    p = [],
                    f = {},
                    d = 0,
                    h = 0,
                    m = l.length,
                    b = 0,
                    v = e ? e.length : 0;
                if (0 !== m)
                    for (var g = 0; g < m; g++) {
                        var O = l[g],
                            w = O.__preactattr_,
                            _ = v && w ? O._component ? O._component.__key : w.key : null;
                        null != _ ? (d++, f[_] = O) : (w || (void 0 !== O.splitText ? !r || O.nodeValue.trim() : r)) && (p[b++] = O)
                    }
                if (0 !== v)
                    for (var g = 0; g < v; g++) {
                        c = e[g], u = null;
                        var _ = c.key;
                        if (null != _) d && void 0 !== f[_] && (u = f[_], f[_] = void 0, d--);
                        else if (h < b)
                            for (i = h; i < b; i++)
                                if (void 0 !== p[i] && (j = a = p[i], S = r, "string" === typeof(N = c) || "number" === typeof N ? void 0 !== j.splitText : "string" === typeof N.nodeName ? !j._componentConstructor && y(j, N.nodeName) : S || j._componentConstructor === N.nodeName)) {
                                    u = a, p[i] = void 0, i === b - 1 && b--, i === h && h++;
                                    break
                                } u = C(u, c, n, o), s = l[g], u && u !== t && u !== s && (null == s ? t.appendChild(u) : u === s.nextSibling ? A(s) : t.insertBefore(u, s))
                    }
                var j, N, S;
                if (d)
                    for (var g in f) void 0 !== f[g] && P(f[g], !1);
                for (; h <= b;) void 0 !== (u = p[b--]) && P(u, !1)
            }(i, f, n, o, j || null != p.dangerouslySetInnerHTML),
            function(t, e, n) {
                var o;
                for (o in n) e && null != e[o] || null == n[o] || v(t, o, n[o], n[o] = void 0, _);
                for (o in e) "children" === o || "innerHTML" === o || o in n && e[o] === ("value" === o || "checked" === o ? t[o] : n[o]) || v(t, o, n[o], n[o] = e[o], _)
            }(i, e.attributes, p), _ = a, i
    }

    function P(t, e) {
        var n = t._component;
        n ? I(n) : (null != t.__preactattr_ && u(t.__preactattr_.ref, null), !1 !== e && null != t.__preactattr_ || A(t), D(t))
    }

    function D(t) {
        for (t = t.lastChild; t;) {
            var e = t.previousSibling;
            P(t, !0), t = e
        }
    }
    var T = [];

    function E(t, e, n) {
        var o, r = T.length;
        for (t.prototype && t.prototype.render ? (o = new t(e, n), k.call(o, e, n)) : ((o = new k(e, n)).constructor = t, o.render = x); r--;)
            if (T[r].constructor === t) return o.nextBase = T[r].nextBase, T.splice(r, 1), o;
        return o
    }

    function x(t, e, n) {
        return this.constructor(t, n)
    }

    function K(t, e, n, o, i) {
        t._disable || (t._disable = !0, t.__ref = e.ref, t.__key = e.key, delete e.ref, delete e.key, "undefined" === typeof t.constructor.getDerivedStateFromProps && (!t.base || i ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, o)), o && o !== t.context && (t.prevContext || (t.prevContext = t.context), t.context = o), t.prevProps || (t.prevProps = t.props), t.props = e, t._disable = !1, 0 !== n && (1 !== n && !1 === r.syncComponentUpdates && t.base ? h(t) : B(t, 1, i)), u(t.__ref, t))
    }

    function B(t, e, n, o) {
        if (!t._disable) {
            var i, a, s, u = t.props,
                l = t.state,
                p = t.context,
                f = t.prevProps || u,
                d = t.prevState || l,
                h = t.prevContext || p,
                m = t.base,
                y = t.nextBase,
                A = m || y,
                v = t._component,
                g = !1,
                _ = h;
            if (t.constructor.getDerivedStateFromProps && (l = c(c({}, l), t.constructor.getDerivedStateFromProps(u, l)), t.state = l), m && (t.props = f, t.state = d, t.context = h, 2 !== e && t.shouldComponentUpdate && !1 === t.shouldComponentUpdate(u, l, p) ? g = !0 : t.componentWillUpdate && t.componentWillUpdate(u, l, p), t.props = u, t.state = l, t.context = p), t.prevProps = t.prevState = t.prevContext = t.nextBase = null, t._dirty = !1, !g) {
                i = t.render(u, l, p), t.getChildContext && (p = c(c({}, p), t.getChildContext())), m && t.getSnapshotBeforeUpdate && (_ = t.getSnapshotBeforeUpdate(f, d));
                var j, C, D = i && i.nodeName;
                if ("function" === typeof D) {
                    var T = b(i);
                    (a = v) && a.constructor === D && T.key == a.__key ? K(a, T, 1, p, !1) : (j = a, t._component = a = E(D, T, p), a.nextBase = a.nextBase || y, a._parentComponent = t, K(a, T, 0, p, !1), B(a, 1, n, !0)), C = a.base
                } else s = A, (j = v) && (s = t._component = null), (A || 1 === e) && (s && (s._component = null), C = S(s, i, p, n || !m, A && A.parentNode, !0));
                if (A && C !== A && a !== v) {
                    var x = A.parentNode;
                    x && C !== x && (x.replaceChild(C, A), j || (A._component = null, P(A, !1)))
                }
                if (j && I(j), t.base = C, C && !o) {
                    for (var k = t, R = t; R = R._parentComponent;)(k = R).base = C;
                    C._component = k, C._componentConstructor = k.constructor
                }
            }
            for (!m || n ? O.push(t) : g || (t.componentDidUpdate && t.componentDidUpdate(f, d, _), r.afterUpdate && r.afterUpdate(t)); t._renderCallbacks.length;) t._renderCallbacks.pop().call(t);
            w || o || N()
        }
    }

    function I(t) {
        r.beforeUnmount && r.beforeUnmount(t);
        var e = t.base;
        t._disable = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
        var n = t._component;
        n ? I(n) : e && (null != e.__preactattr_ && u(e.__preactattr_.ref, null), t.nextBase = e, A(e), T.push(t), D(e)), u(t.__ref, null)
    }

    function k(t, e) {
        this._dirty = !0, this.context = e, this.props = t, this.state = this.state || {}, this._renderCallbacks = []
    }

    function R(t, e, n) {
        return S(n, t, {}, !1, e, !1)
    }

    function M() {
        return {}
    }
    c(k.prototype, {
        setState: function(t, e) {
            this.prevState || (this.prevState = this.state), this.state = c(c({}, this.state), "function" === typeof t ? t(this.state, this.props) : t), e && this._renderCallbacks.push(e), h(this)
        },
        forceUpdate: function(t) {
            t && this._renderCallbacks.push(t), B(this, 2)
        },
        render: function() {}
    });
    var U = {
        h: s,
        createElement: s,
        cloneElement: p,
        createRef: M,
        Component: k,
        render: R,
        rerender: m,
        options: r
    };
    e.default = U
}, function(t, e, n) {
    var o = n(0);

    function r(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }

    function i(t) {
        this.getChildContext = function() {
            return {
                store: t.store
            }
        }
    }
    i.prototype.render = function(t) {
        return t.children && t.children[0] || t.children
    }, e.connect = function(t, e) {
        var n;
        return "function" != typeof t && ("string" == typeof(n = t || {}) && (n = n.split(/\s*,\s*/)), t = function(t) {
                for (var e = {}, o = 0; o < n.length; o++) e[n[o]] = t[n[o]];
                return e
            }),
            function(n) {
                function i(i, a) {
                    var s = this,
                        c = a.store,
                        u = t(c ? c.getState() : {}, i),
                        l = e ? function(t, e) {
                            "function" == typeof t && (t = t(e));
                            var n = {};
                            for (var o in t) n[o] = e.action(t[o]);
                            return n
                        }(e, c) : {
                            store: c
                        },
                        p = function() {
                            var e = t(c ? c.getState() : {}, i);
                            for (var n in e)
                                if (e[n] !== u[n]) return u = e, s.setState({});
                            for (var o in u)
                                if (!(o in e)) return u = e, s.setState({})
                        };
                    this.componentWillReceiveProps = function(t) {
                        i = t, p()
                    }, this.componentDidMount = function() {
                        c.subscribe(p)
                    }, this.componentWillUnmount = function() {
                        c.unsubscribe(p)
                    }, this.render = function(t) {
                        return o.h(n, r(r(r({}, l), t), u))
                    }
                }
                return (i.prototype = new o.Component).constructor = i
            }
    }, e.Provider = i
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    t.exports = n.p + "static/success.svg"
}, function(t, e, n) {
    t.exports = n.p + "static/thank-you.svg"
}, function(t, e, n) {
    var o = {
        "./01.png": 31,
        "./02.png": 32,
        "./03.png": 33,
        "./04.png": 34,
        "./05.png": 35,
        "./06.png": 36,
        "./07.png": 37,
        "./08.png": 38,
        "./09.png": 39
    };

    function r(t) {
        var e = i(t);
        return n(e)
    }

    function i(t) {
        if (!n.o(o, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        return o[t]
    }
    r.keys = function() {
        return Object.keys(o)
    }, r.resolve = i, t.exports = r, r.id = 5
}, function(t, e, n) {
    var o = n(60),
        r = n(61);
    t.exports = n(62) ? function(t, e, n) {
        return o.setDesc(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var o = n(2),
        r = n(8),
        i = n(6),
        a = n(64),
        s = n(10),
        c = function(t, e, n) {
            var u, l, p, f, d = t & c.F,
                h = t & c.G,
                m = t & c.S,
                y = t & c.P,
                b = t & c.B,
                A = h ? o : m ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
                v = h ? r : r[e] || (r[e] = {}),
                g = v.prototype || (v.prototype = {});
            for (u in h && (n = e), n) p = ((l = !d && A && u in A) ? A : n)[u], f = b && l ? s(p, o) : y && "function" == typeof p ? s(Function.call, p) : p, A && !l && a(A, u, p), v[u] != p && i(v, u, f), y && g[u] != p && (g[u] = p)
        };
    o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, t.exports = c
}, function(t, e) {
    var n = t.exports = {
        version: "1.2.6"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    var n = 0,
        o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
    }
}, function(t, e, n) {
    var o = n(65);
    t.exports = function(t, e, n) {
        if (o(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, o) {
                    return t.call(e, n, o)
                };
            case 3:
                return function(n, o, r) {
                    return t.call(e, n, o, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var o = n(68);
    t.exports = function(t) {
        return Object(o(t))
    }
}, function(t, e, n) {
    var o = n(14),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(o(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = Math.ceil,
        o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
    }
}, function(t, e, n) {
    var o = n(72)("wks"),
        r = n(9),
        i = n(2).Symbol;
    t.exports = function(t) {
        return o[t] || (o[t] = i && i[t] || (i || r)("Symbol." + t))
    }
}, function(t, e, n) {
    var o = n(15)("unscopables"),
        r = Array.prototype;
    void 0 == r[o] && n(6)(r, o, {}), t.exports = function(t) {
        r[o][t] = !0
    }
}, function(t, e, n) {
    t.exports = n.p + "static/shopping-cart.svg"
}, function(t, e, n) {
    t.exports = n.p + "static/mystore-logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "static/star.svg"
}, function(t, e, n) {
    t.exports = n.p + "static/bin.svg"
}, function(t, e, n) {
    t.exports = n.p + "static/error.svg"
}, function(t, e, n) {
    var o;
    ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var o = arguments[e];
                if (o) {
                    var i = typeof o;
                    if ("string" === i || "number" === i) t.push(o);
                    else if (Array.isArray(o) && o.length) {
                        var a = r.apply(null, o);
                        a && t.push(a)
                    } else if ("object" === i)
                        for (var s in o) n.call(o, s) && o[s] && t.push(s)
                }
            }
            return t.join(" ")
        }
        t.exports ? (r.default = r, t.exports = r) : void 0 === (o = function() {
            return r
        }.apply(e, [])) || (t.exports = o)
    }()
}, function(t, e, n) {
    t.exports = n.p + "static/campaign.png"
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    t.exports = n.p + "static/01.png"
}, function(t, e, n) {
    t.exports = n.p + "static/02.png"
}, function(t, e, n) {
    t.exports = n.p + "static/03.png"
}, function(t, e, n) {
    t.exports = n.p + "static/04.png"
}, function(t, e, n) {
    t.exports = n.p + "static/05.png"
}, function(t, e, n) {
    t.exports = n.p + "static/06.png"
}, function(t, e, n) {
    t.exports = n.p + "static/07.png"
}, function(t, e, n) {
    t.exports = n.p + "static/08.png"
}, function(t, e, n) {
    t.exports = n.p + "static/09.png"
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t) {
    t.exports = JSON.parse("{}")
}, function(t, e, n) {}, function(t, e, n) {
    t.exports = n.p + "favicon.ico"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADSUExURQAIKAAIKP///wYYNQAIKQAIKQAIKAAIKAAIKAAIKLzByBgpQ4KKmK6zvODi5vj4+fz8/SMzTDVDWlNfc1tmeJKZpdvd4bm+xaiut6Wrte/v8YePnMzP1YuTn9jb3+/w8rO4wKCmsYCJlmhzg01abUBOYxEiPnN8iwEQLd7g5Nnc4KSqtEFPY4mRnhMkQEZTaM3Q1lBdb0xYbKastvDx8+nr7fT19r/DykpWamRugHmCkNLV2rS5wQUXNJeeqcTIzvHy8wANK2FsfY6WohcoQpCXo0KVcMIAAAAKdFJOU0z///9K5eDe4uTepDBzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAi0lEQVQY013ORRICQRBE0c6agXHBncHd3Z37X4kgqEU3f5dvlUIYkDJ0YUIpLvDXF6oNnKcdCcLhyz8OenA0huBy2j5o3q0VGDYe7fZ0ddsRw+q2vh8onIwChj698aQZmj5DnRZY0hilHEOZHNjUQj7NkC0CbkWDl2SwM79PqQSDet1StylETN6W/gE2GQqg48qa7gAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGkUExURUxpcQAIKAAKKAAIKAAIKAAIJwAIKAAMKwAIKAALKQAKKAAIKAAIKAAGJwAIKAAHKAAIKAAHKf///wAIKDFAVgAKKW14h/7+/tPW27/DysTIzmFsffz8/bzByOnr7ZeeqYWNmu/w8ggbNzhGXeTm6QALKg0gOv39/fr6++vs7/Lz9AAMKuPl6Ofp6/Hy8/b3+MPHzri9xPX294iQnfv7/I+Xoh8wSXyFk1djdkFPY1VhdDxKXyMzTBssRWt2hpyjraettqKosnJ7irq/xr7CyZuirC4+VK+0vbm+xebo6rC1vgMTMaiut8LGzbO4wKyyugocOOjq7N7g5H+IlZ6lr4ePnN/h5RorRGZxgYGJl0dUaPf4+FRgczNBWIaOm3iBj66zvB4uR01abQIRMOrr7gEOLDlHXvn5+rS5wQANK+Di5oqSnneAj+7v8KGnseHj5tDT2LW6wvT19tnc4EBOYys6UhwtRm96ie/v8c/S105bbXN8i5ifqjA/VdLV2pKZpfj4+UlVaYuTn3uEkik4UAEQLUJPZDRCWiAxSqSqtMjM0jdFXCJIn+YAAAASdFJOUwDyrvHvsK8m6ygd8O4k86ztqxz0muIAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAF1SURBVDjLldPVUgNBEAXQwSH47SxJiABBEyCQ4O7u7u7u7m4/TQ9PTBVsoF9u7c7Z2h4TIiw0nH6p8MBoISKCSaeiwkQI6VagCNAHkYL81F9BQn/+ki4wAUaOx4cbq/YjyALuSCsw+YCSH0Ee8EwlQKkHt1f8fLS5rAI38PJaCC+9A0Xc0gEcxQo4BYrfgA+yAxa62D3eM20owMVN2pBIlA/kHO6fZ1/iTAG5yLvnDoiugcwdewadYEsBOVh3wPEkJZeVu8CKAoZh++pO4/nCt0a0jUUFmOWHqUS9Mi38YhVmBVjSgL50okoJZojS0zCrgM4eoJazQgJe9AU3ChTQlARUc5bzuCebaM5WaFVAexfQLHeVgZdzPiVxSgGNmTB1cCYzGOAcc02OKKAVaJPJf0rhydCoedypgG7IdSYylhkzZCZPTGsKaAEavp+CIfugut01dfVV34FT+++h1QEx+uNB/q5evJ/LG2cQfP1/vZ5BsQbxCZKWaYTk9r9RAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e, n) {
    t.exports = n.p + "static/safari-pinned-tab.svg"
}, function(t, e) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var e = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (e.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                o = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                r = ArrayBuffer.isView || function(t) {
                    return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                };
            l.prototype.append = function(t, e) {
                t = s(t), e = c(e);
                var n = this.map[t];
                this.map[t] = n ? n + "," + e : e
            }, l.prototype.delete = function(t) {
                delete this.map[s(t)]
            }, l.prototype.get = function(t) {
                return t = s(t), this.has(t) ? this.map[t] : null
            }, l.prototype.has = function(t) {
                return this.map.hasOwnProperty(s(t))
            }, l.prototype.set = function(t, e) {
                this.map[s(t)] = c(e)
            }, l.prototype.forEach = function(t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }, l.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }), u(t)
            }, l.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), u(t)
            }, l.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }), u(t)
            }, e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            y.prototype.clone = function() {
                return new y(this, {
                    body: this._bodyInit
                })
            }, m.call(y.prototype), m.call(A.prototype), A.prototype.clone = function() {
                return new A(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new l(this.headers),
                    url: this.url
                })
            }, A.error = function() {
                var t = new A(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var a = [301, 302, 303, 307, 308];
            A.redirect = function(t, e) {
                if (-1 === a.indexOf(e)) throw new RangeError("Invalid status code");
                return new A(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = l, t.Request = y, t.Response = A, t.fetch = function(t, n) {
                return new Promise(function(o, r) {
                    var i = new y(t, n),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var t, e, n = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (t = a.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                var n = t.split(":"),
                                    o = n.shift().trim();
                                if (o) {
                                    var r = n.join(":").trim();
                                    e.append(o, r)
                                }
                            }), e)
                        };
                        n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                        var r = "response" in a ? a.response : a.responseText;
                        o(new A(r, n))
                    }, a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && e.blob && (a.responseType = "blob"), i.headers.forEach(function(t, e) {
                        a.setRequestHeader(e, t)
                    }), a.send("undefined" === typeof i._bodyInit ? null : i._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }

        function s(t) {
            if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function c(t) {
            return "string" !== typeof t && (t = String(t)), t
        }

        function u(t) {
            var n = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return e.iterable && (n[Symbol.iterator] = function() {
                return n
            }), n
        }

        function l(t) {
            this.map = {}, t instanceof l ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function p(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function f(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            })
        }

        function d(t) {
            var e = new FileReader,
                n = f(e);
            return e.readAsArrayBuffer(t), n
        }

        function h(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function m() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" === typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && o(t)) this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !r(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, e.blob && (this.blob = function() {
                var t = p(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
            }), this.text = function() {
                var t, e, n, o = p(this);
                if (o) return o;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = f(e), e.readAsText(t), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function y(t, e) {
            var n, o, r = (e = e || {}).body;
            if (t instanceof y) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = (n = e.method || this.method || "GET", o = n.toUpperCase(), i.indexOf(o) > -1 ? o : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function b(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                        o = n.shift().replace(/\+/g, " "),
                        r = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(o), decodeURIComponent(r))
                }
            }), e
        }

        function A(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
        }
    }("undefined" !== typeof self ? self : this)
}, function(t, e, n) {
    "use strict";
    var o = n(7),
        r = n(66)(5),
        i = !0;
    "find" in [] && Array(1).find(function() {
        i = !1
    }), o(o.P + o.F * i, "Array", {
        find: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(16)("find")
}, function(t, e) {
    var n = Object;
    t.exports = {
        create: n.create,
        getProto: n.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: n.getOwnPropertyDescriptor,
        setDesc: n.defineProperty,
        setDescs: n.defineProperties,
        getKeys: n.keys,
        getNames: n.getOwnPropertyNames,
        getSymbols: n.getOwnPropertySymbols,
        each: [].forEach
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    t.exports = !n(63)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var o = n(2),
        r = n(6),
        i = n(9)("src"),
        a = Function.toString,
        s = ("" + a).split("toString");
    n(8).inspectSource = function(t) {
        return a.call(t)
    }, (t.exports = function(t, e, n, a) {
        "function" == typeof n && (n.hasOwnProperty(i) || r(n, i, t[e] ? "" + t[e] : s.join(String(e))), n.hasOwnProperty("name") || r(n, "name", e)), t === o ? t[e] = n : (a || delete t[e], r(t, e, n))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[i] || a.call(this)
    })
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var o = n(10),
        r = n(67),
        i = n(12),
        a = n(13),
        s = n(69);
    t.exports = function(t) {
        var e = 1 == t,
            n = 2 == t,
            c = 3 == t,
            u = 4 == t,
            l = 6 == t,
            p = 5 == t || l;
        return function(f, d, h) {
            for (var m, y, b = i(f), A = r(b), v = o(d, h, 3), g = a(A.length), O = 0, w = e ? s(f, g) : n ? s(f, 0) : void 0; g > O; O++)
                if ((p || O in A) && (y = v(m = A[O], O, b), t))
                    if (e) w[O] = y;
                    else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return O;
                case 2:
                    w.push(m)
            } else if (u) return !1;
            return l ? -1 : c || u ? u : w
        }
    }
}, function(t, e, n) {
    var o = n(11);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == o(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var o = n(70),
        r = n(71),
        i = n(15)("species");
    t.exports = function(t, e) {
        var n;
        return r(t) && ("function" != typeof(n = t.constructor) || n !== Array && !r(n.prototype) || (n = void 0), o(n) && null === (n = n[i]) && (n = void 0)), new(void 0 === n ? Array : n)(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" === typeof t ? null !== t : "function" === typeof t
    }
}, function(t, e, n) {
    var o = n(11);
    t.exports = Array.isArray || function(t) {
        return "Array" == o(t)
    }
}, function(t, e, n) {
    var o = n(2),
        r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}, function(t, e, n) {
    var o = n(7);
    o(o.P, "Array", {
        fill: n(74)
    }), n(16)("fill")
}, function(t, e, n) {
    "use strict";
    var o = n(12),
        r = n(75),
        i = n(13);
    t.exports = [].fill || function(t) {
        for (var e = o(this), n = i(e.length), a = arguments, s = a.length, c = r(s > 1 ? a[1] : void 0, n), u = s > 2 ? a[2] : void 0, l = void 0 === u ? n : r(u, n); l > c;) e[c++] = t;
        return e
    }
}, function(t, e, n) {
    var o = n(14),
        r = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(0),
        r = n(1),
        i = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\?/g, "").split("&").reduce(function(t, e) {
                var n = e.split("="),
                    o = n[0],
                    r = n[1],
                    i = void 0 === r ? "" : r;
                return t[o] = decodeURIComponent(i), t
            }, {})
        },
        a = function(t) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).find(function(e) {
                return e.attributes.path.split("/:")[0] === t
            })
        },
        s = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(t, e) {
                return t + parseInt(e.price, 10)
            }, 0)
        },
        c = function(t) {
            switch (t.toLowerCase()) {
                case "authorised":
                case "pending":
                case "received":
                    return !0;
                case "cancelled":
                case "error":
                case "refused":
                case "unknown":
                default:
                    return !1
            }
        },
        u = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split("/").filter(function(t) {
                    return !!t
                }),
                e = t[0],
                n = void 0 === e ? "" : e,
                o = t[1];
            return n ? o ? ["/" + n, o] : ["/" + n] : ["/"]
        },
        l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        },
        p = function() {
            return {
                addProduct: function(t, e) {
                    return t.products.find(function(t) {
                        return t.id === e.id
                    }) ? {
                        products: t.products
                    } : {
                        products: [].concat(t.products, [e])
                    }
                },
                removeProduct: function(t, e) {
                    return {
                        products: t.products.filter(function(t) {
                            return t.id !== e.id
                        })
                    }
                },
                removeAllProducts: function() {
                    return {
                        products: []
                    }
                },
                setProducts: function(t, e) {
                    return {
                        products: e
                    }
                },
                setActiveSection: function(t, e) {
                    return window.location.hash = e, window.scroll(0, 0), {
                        activeSection: e
                    }
                },
                setSettings: function(t, e) {
                    return {
                        settings: l({}, t.settings, e)
                    }
                }
            }
        },
        f = [{
            id: "01",
            name: "Polo shirt",
            price: 2499,
            rating: 5,
            description: "A classic polo shirt for all occasions. Playing golf? Pair it with some khakis. Preppy party? Pop that collar! Let your polo reflect your personality, so your brain doesn\u2019t have to."
        }, {
            id: "02",
            name: "Headphones",
            price: 1999,
            rating: 5,
            description: "Audio perfection, award-winning noise cancellation, and a design as sleek as a sports car. Don\u2019t be fooled by the price, these are the best headphones on the market\u2014guaranteed! "
        }, {
            id: "03",
            name: "Sunglasses",
            price: 1599,
            rating: 5,
            description: "Surf, sand, and sunglasses: summertime perfection. These aviator sunnies protect your precious peepers from hazardous UV rays, day or night. Bonus: they make you look kinda cool."
        }, {
            id: "04",
            name: "Boots",
            price: 3599,
            rating: 4,
            description: "These boots fall above the ankle, so you don\u2019t need to buy those no-show half socks that constantly fall off your heels. We think these boots are waterproof, but please let us know."
        }, {
            id: "05",
            name: "Event ticket",
            price: 3999,
            rating: 5,
            description: "A generic ticket to an unspecified event on either May 10 or October 5 (depending on which side of the pond you hail from). One seat only, one night only. No refunds, no regrets."
        }, {
            id: "06",
            name: "Backpack",
            price: 3599,
            rating: 5,
            description: "Also called a backsack, knapsack, rucksack, or packsack, this is the preferred load-carrying method of hikers and students. We think these ones are waterproof, but please let us know."
        }, {
            id: "07",
            name: "Joypad",
            price: 2399,
            rating: 4,
            description: "Maybe you need this device for your existing gaming console. Maybe you just want to pretend you\u2019ve got a gaming console. We\u2019re not here to judge! Buy, and you shall receive joy."
        }, {
            id: "08",
            name: "Food delivery",
            price: 1899,
            rating: 4,
            description: "Just like your school cafeteria\u2019s menu in the last few days before summer break, this \u201cmanager\u2019s special\u201d mealbox is a mystery. On the plus side, we\u2019ll deliver it right to your doorstep."
        }, {
            id: "09",
            name: "Handbag",
            price: 49999,
            rating: 5,
            description: "The dorsal fin of an orca whale. An actual oil slick. The earthly manifestation of a black hole. Nighttime with pockets. Vantablack lining. The world\u2019s most elusive handbag."
        }],
        d = (new Date).getTime(),
        h = window.location.origin,
        m = {
            origin: h,
            returnUrl: h,
            reference: "MyStore Demo - " + d,
            additionalData: {
                allow3DS2: !0
            },
            shopperLocale: "en-US",
            shopperReference: "MyStore Demo - shopper " + d,
            browserInfo: {
                screenWidth: 1024,
                screenHeight: 500,
                colorDepth: 24,
                userAgent: "Chrome",
                timeZoneOffset: 0,
                language: "nl-NL",
                javaEnabled: !0,
                acceptHeader: "http"
            }
        },
        y = (new Date).getTime(),
        b = window.location.origin,
        A = {
            origin: b,
            returnUrl: b,
            reference: "MyStore Demo - Donation " + y,
            additionalData: {
                allow3DS2: !1
            },
            shopperLocale: "en-US",
            shopperReference: "shopper - " + y
        },
        v = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        },
        g = window.location.protocol,
        O = window.location.host,
        w = function(t, e) {
            return fetch(g + "//" + O + "/" + t, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            }).then(function(t) {
                return t.json()
            })
        },
        _ = function(t) {
            return w("details", t).then(function(t) {
                if (t.error || t.errorCode) throw new Error("Details call failed");
                return t
            }).catch(function(t) {
                return console.error(t)
            })
        },
        j = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        };
    var N = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    };
    var S = Object(r.connect)("activeSection", p)(function(t) {
            var e = t.activeSection,
                n = t.children,
                r = u(e),
                i = r[0],
                s = r[1],
                c = a(i, n) || n.find(function(t) {
                    return t.attributes.default
                }),
                l = N({}, c.attributes, s && {
                    selectedProduct: s
                });
            return Object(o.cloneElement)(c, l)
        }),
        C = (n(24), Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        });
    var P = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.state = {
                    loaded: !1
                }, o.handleLoad = o.handleLoad.bind(o), o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentDidMount = function() {
                this.setState({
                    loaded: this.ref.complete
                })
            }, e.prototype.handleLoad = function() {
                this.setState({
                    loaded: !0
                })
            }, e.prototype.render = function(t, e) {
                var n = this,
                    r = e.loaded,
                    i = t.className,
                    a = void 0 === i ? "" : i,
                    s = function(t, e) {
                        var n = {};
                        for (var o in t) e.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                        return n
                    }(t, ["className"]);
                return Object(o.h)("img", C({}, s, {
                    ref: function(t) {
                        n.ref = t
                    },
                    className: "lazyload-image " + (r ? "lazyload-image--loaded" : "") + " " + a,
                    onLoad: this.handleLoad,
                    onError: this.handleLoad
                }))
            }, e
        }(o.Component),
        D = (n(25), Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        });
    var T = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.onClick = o.onClick.bind(o), o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.onClick = function(t) {
                t.preventDefault();
                var e = this.props;
                (0, e.setActiveSection)(e.to.replace(/#/, "")), window.scroll(0, 0)
            }, e.prototype.render = function(t) {
                return Object(o.h)("a", D({
                    className: this.props.className,
                    href: this.props.to,
                    onClick: this.onClick
                }, t), this.props.children)
            }, e
        }(o.Component),
        E = Object(r.connect)([], p)(T),
        x = n(17),
        K = n.n(x),
        B = (n(26), Object(r.connect)("products", p)(function(t) {
            var e = t.products,
                n = void 0 === e ? [] : e;
            return Object(o.h)("div", {
                className: "shopping-cart"
            }, Object(o.h)(E, {
                to: "#/cart",
                className: "shopping-cart__link"
            }, !!n.length && Object(o.h)("span", {
                className: "shopping-cart__notifications"
            }, n.length), Object(o.h)("img", {
                className: "icon icon-shopping-cart",
                src: K.a,
                alt: "Shopping cart"
            })))
        })),
        I = n(18),
        k = n.n(I);
    n(27);

    function R() {
        return Object(o.h)("header", {
            className: "header"
        }, Object(o.h)("div", {
            className: "container"
        }, Object(o.h)(E, {
            to: "#/",
            className: "header__link"
        }, Object(o.h)("h1", {
            className: "header__title"
        }, "My Store"), Object(o.h)(P, {
            className: "header__logo",
            src: k.a,
            alt: "MyStore logo"
        })), Object(o.h)(B, null)))
    }
    var M = {
            AE: "AED",
            AU: "AUD",
            BR: "BRL",
            CA: "CAD",
            CH: "CHF",
            CN: "CNY",
            CZ: "CZK",
            DK: "DKK",
            EG: "EGP",
            GB: "GBP",
            HK: "HKD",
            HU: "HUN",
            ID: "IDR",
            IN: "INR",
            JP: "JPY",
            KE: "KES",
            MG: "MGA",
            MA: "MAD",
            MX: "MXN",
            MY: "MYR",
            NO: "NOK",
            NZ: "NZD",
            QA: "QAR",
            PH: "PHP",
            PL: "PLN",
            RO: "RON",
            RU: "RUB",
            SE: "SEK",
            SG: "SGD",
            TH: "THB",
            TW: "TWD",
            US: "USD",
            VN: "VND",
            default: "EUR"
        },
        U = function(t) {
            return M[t] || M.default
        },
        H = [{
            id: "AU",
            name: "Australia"
        }, {
            id: "AT",
            name: "Austria"
        }, {
            id: "BE",
            name: "Belgium"
        }, {
            id: "BR",
            name: "Brazil"
        }, {
            id: "CA",
            name: "Canada"
        }, {
            id: "CN",
            name: "China"
        }, {
            id: "CZ",
            name: "Czech Republic"
        }, {
            id: "DK",
            name: "Denmark"
        }, {
            id: "FI",
            name: "Finland"
        }, {
            id: "FR",
            name: "France"
        }, {
            id: "DE",
            name: "Germany"
        }, {
            id: "HK",
            name: "Hong Kong"
        }, {
            id: "IN",
            name: "India"
        }, {
            id: "ID",
            name: "Indonesia"
        }, {
            id: "IT",
            name: "Italy"
        }, {
            id: "JP",
            name: "Japan"
        }, {
            id: "KE",
            name: "Kenya"
        }, {
            id: "MY",
            name: "Malaysia"
        }, {
            id: "MX",
            name: "Mexico"
        }, {
            id: "NL",
            name: "Netherlands"
        }, {
            id: "NO",
            name: "Norway"
        }, {
            id: "NZ",
            name: "New Zealand"
        }, {
            id: "PH",
            name: "Philippines"
        }, {
            id: "PL",
            name: "Poland"
        }, {
            id: "PT",
            name: "Portugal"
        }, {
            id: "RU",
            name: "Russia"
        }, {
            id: "SG",
            name: "Singapore"
        }, {
            id: "ES",
            name: "Spain"
        }, {
            id: "SE",
            name: "Sweden"
        }, {
            id: "CH",
            name: "Switzerland"
        }, {
            id: "TH",
            name: "Thailand"
        }, {
            id: "GB",
            name: "United Kingdom"
        }, {
            id: "US",
            name: "United States"
        }, {
            id: "VN",
            name: "Vietnam"
        }];
    n(28);
    var L = "NL",
        F = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.handleCountryChange = o.handleCountryChange.bind(o), o.state = {
                    countryCode: L
                }, o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentDidMount = function() {
                var t = this.props.settings,
                    e = t && t.countryCode || this.state.countryCode,
                    n = U(e);
                this.setState({
                    countryCode: e,
                    currency: n
                })
            }, e.prototype.handleCountryChange = function(t) {
                var e = t.target,
                    n = this.props.setSettings,
                    o = e.value,
                    r = U(o);
                this.setState({
                    countryCode: o
                }), n({
                    countryCode: o,
                    currency: r
                })
            }, e.prototype.render = function(t, e) {
                var n = e.countryCode;
                return function(t) {
                    if (null == t) throw new TypeError("Cannot destructure undefined")
                }(t), Object(o.h)("div", {
                    className: "country-selector"
                }, Object(o.h)("div", {
                    className: "country-selector__flag"
                }, function(t) {
                    return t.toUpperCase().replace(/./g, function(t) {
                        return String.fromCodePoint ? String.fromCodePoint(t.charCodeAt(0) + 127397) : ""
                    })
                }(n)), Object(o.h)("select", {
                    className: "country-selector__select",
                    onChange: this.handleCountryChange,
                    "aria-label": "country"
                }, H.map(function(t) {
                    return Object(o.h)("option", {
                        value: t.id,
                        selected: t.id === n
                    }, t.name)
                })))
            }, e
        }(o.Component),
        G = Object(r.connect)("settings", p)(F);
    n(29);

    function Q() {
        return Object(o.h)("footer", {
            className: "footer"
        }, Object(o.h)(G, null), Object(o.h)("p", {
            className: "footer__copyright"
        }, "\xa9 ", (new Date).getFullYear(), " MyStore"))
    }
    n(30);
    var V = Object(r.connect)("settings", p)(function(t, e) {
            var r = t.products,
                i = void 0 === r ? [] : r,
                a = t.settings,
                s = void 0 === a ? {} : a,
                c = e.Localisation;
            return Object(o.h)("section", {
                className: "products"
            }, Object(o.h)("ul", {
                className: "products__list"
            }, i.map(function(t) {
                var e = t.id,
                    r = t.name,
                    i = t.price;
                return Object(o.h)("li", {
                    className: "products__list__list-item"
                }, Object(o.h)(E, {
                    to: "#/product/" + e,
                    className: "products__list__list-item__item"
                }, Object(o.h)(P, {
                    className: "products__list__list-item__item__image",
                    src: n(5)("./" + e + ".png"),
                    alt: r
                }), Object(o.h)("p", {
                    className: "products__list__list-item__item__title"
                }, r), Object(o.h)("p", {
                    className: "products__list__list-item__item__price"
                }, c.amount(i, s.currency))))
            })))
        }),
        J = n(19),
        Y = n.n(J),
        Z = function(t) {
            var e = t.rating;
            return Object(o.h)("div", {
                className: "product-detail__rating",
                "aria-label": "rating"
            }, new Array(e).fill().map(function() {
                return Object(o.h)(P, {
                    className: "product-detail__rating__star",
                    src: Y.a,
                    alt: "rating star"
                })
            }))
        };
    n(40);

    function z(t) {
        var e = t.products;
        return Object(o.h)("section", {
            className: "recommendations"
        }, Object(o.h)("h2", {
            className: "recommendations__title"
        }, "Recommendations"), Object(o.h)(V, {
            products: e
        }))
    }
    n(41);
    var W = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.state = {
                    visible: n.visible
                }, o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentWillReceiveProps = function(t) {
                var e = this;
                if (this.props.visible !== t.visible) {
                    var n = t.visible,
                        o = this.props.delay,
                        r = void 0 === o ? 3e3 : o;
                    this.setState({
                        visible: n
                    }, function() {
                        setTimeout(function() {
                            return e.setState({
                                visible: !1
                            })
                        }, r)
                    })
                }
            }, e.prototype.render = function(t, e) {
                var n = t.level,
                    r = void 0 === n ? "info" : n,
                    i = e.visible;
                return Object(o.h)("div", {
                    className: "toast toast--" + r + " toast--" + (i ? "visible" : "hidden")
                }, Object(o.h)("p", null, this.props.message))
            }, e
        }(o.Component),
        X = function(t) {
            if (!t) return {};
            var e = f.find(function(e) {
                    return e.id === t
                }),
                n = f.filter(function(t) {
                    return t.id !== e.id
                }).sort(function() {
                    return Math.random() - .5
                }).filter(function(t, e) {
                    return e < 4
                });
            return {
                product: e,
                recommendations: n
            }
        };
    n(42);
    var q = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.state = {
                    product: {},
                    recommendations: [],
                    showToast: !1
                }, o.handleAddToCart = o.handleAddToCart.bind(o), o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.getDerivedStateFromProps = function(t, e) {
                return t.selectedProduct !== e.product.id ? X(t.selectedProduct) : null
            }, e.prototype.handleAddToCart = function() {
                this.setState({
                    showToast: !0
                }), this.props.addProduct(this.state.product)
            }, e.prototype.render = function(t, e, r) {
                var i = t.settings,
                    a = e.product,
                    s = e.recommendations,
                    c = e.showToast,
                    u = r.Localisation;
                return Object(o.h)("div", null, Object(o.h)("section", {
                    className: "product-detail"
                }, Object(o.h)(W, {
                    message: "Product added to your cart",
                    visible: c
                }), Object(o.h)(P, {
                    src: n(5)("./" + a.id + ".png"),
                    alt: a.name,
                    className: "product-detail__product"
                }), Object(o.h)("div", {
                    className: "product-detail__container"
                }, Object(o.h)("h1", {
                    className: "product-detail__title"
                }, a.name), Object(o.h)(Z, {
                    rating: a.rating
                }), Object(o.h)("p", {
                    className: "product-detail__price"
                }, u.amount(a.price, i.currency)), Object(o.h)("p", {
                    className: "product-detail__description"
                }, a.description), Object(o.h)("button", {
                    type: "button",
                    className: "button product-detail__button",
                    onClick: this.handleAddToCart
                }, "Add to cart"))), Object(o.h)(z, {
                    products: s
                }))
            }, e
        }(o.Component),
        $ = Object(r.connect)("settings", p)(q),
        tt = n(20),
        et = n.n(tt),
        nt = (n(43), Object(r.connect)(["products", "settings"], p)(function(t, e) {
            var r = t.products,
                i = void 0 === r ? [] : r,
                a = t.removeProduct,
                s = t.settings,
                c = t.showRemoveButton,
                u = e.Localisation;
            return Object(o.h)("div", {
                className: "order-summary"
            }, Object(o.h)("ul", {
                className: "order-summary__list"
            }, i.map(function(t) {
                return Object(o.h)("li", {
                    className: "order-summary__list__list-item"
                }, Object(o.h)(P, {
                    className: "order-summary__list__list-item__image",
                    src: n(5)("./" + t.id + ".png"),
                    alt: t.name
                }), Object(o.h)("p", {
                    className: "order-summary__list__list-item__title"
                }, t.name), c && Object(o.h)("button", {
                    type: "button",
                    "aria-label": "Remove product",
                    className: "order-summary__list__list-item__remove-product",
                    onClick: function() {
                        return a(t)
                    }
                }, Object(o.h)("img", {
                    src: et.a,
                    alt: "Trash bin"
                })), Object(o.h)("p", {
                    className: "order-summary__list__list-item__price"
                }, u.amount(t.price, s.currency)))
            })))
        })),
        ot = (n(44), Object(r.connect)(["products", "settings"], p)(function(t, e) {
            var n = t.products,
                r = void 0 === n ? [] : n,
                i = t.settings,
                a = void 0 === i ? {} : i,
                c = e.Localisation;
            return r.length ? Object(o.h)("section", {
                className: "cart"
            }, Object(o.h)("h2", {
                className: "cart__title"
            }, "Cart"), Object(o.h)(nt, {
                showRemoveButton: !0
            }), Object(o.h)("div", {
                className: "cart__footer"
            }, Object(o.h)("span", {
                className: "cart__footer__label"
            }, "Total:"), Object(o.h)("span", {
                className: "cart__footer__amount"
            }, c.amount(s(r), a.currency)), Object(o.h)(E, {
                to: "#/checkout",
                className: "button"
            }, "Continue to checkout"))) : Object(o.h)("section", {
                className: "cart cart--empty"
            }, Object(o.h)("p", null, "Your cart is empty."), Object(o.h)(E, {
                to: "#/",
                className: "button"
            }, "Return Home"))
        })),
        rt = {
            IDR: 1,
            JPY: 1,
            KRW: 1,
            VND: 1,
            BYR: 1,
            CVE: 1,
            DJF: 1,
            GHC: 1,
            GNF: 1,
            KMF: 1,
            PYG: 1,
            RWF: 1,
            UGX: 1,
            VUV: 1,
            XAF: 1,
            XOF: 1,
            XPF: 1,
            MRO: 10,
            BHD: 1e3,
            JOD: 1e3,
            KWD: 1e3,
            OMR: 1e3,
            LYD: 1e3,
            TND: 1e3
        },
        it = {
            AED: 4,
            AFN: 88,
            ALL: 122,
            ANG: 1,
            AOA: 511,
            ARS: 66,
            AUD: 1.62,
            AWG: 2,
            AZN: 1,
            BAM: 1,
            BBD: 1,
            BDT: 1,
            BGN: 1.95,
            BHD: 1,
            BIF: 1,
            BMD: 1,
            BND: 1,
            BOB: 1,
            BRL: 4.5,
            BSD: 1,
            BTC: 1,
            BTN: 1,
            BWP: 1,
            BYR: 1,
            BYN: 1,
            BZD: 1,
            CAD: 1.5,
            CDF: 1,
            CHF: 1.1,
            CLP: 1,
            CNY: 7.8,
            COP: 1,
            CRC: 1,
            CUC: 1,
            CUP: 1,
            CVE: 1,
            CZK: 25.5,
            DJF: 1,
            DKK: 7.5,
            DOP: 1,
            DZD: 1,
            EEK: 1,
            EGP: 18,
            ERN: 1,
            ETB: 1,
            EUR: 1,
            FJD: 1,
            FKP: 1,
            GBP: 1,
            GEL: 1,
            GGP: 1,
            GHC: 1,
            GHS: 1,
            GIP: 1,
            GMD: 1,
            GNF: 1,
            GTQ: 1,
            GYD: 1,
            HKD: 9,
            HNL: 1,
            HRK: 7.5,
            HTG: 1,
            HUF: 330,
            HUN: 330,
            IDR: 15615,
            ILS: 4,
            IMP: 1,
            INR: 79,
            IQD: 1,
            IRR: 47,
            ISK: 137,
            JEP: 1,
            JMD: 1,
            JPY: 122,
            KES: 113,
            KGS: 1,
            KHR: 1,
            KMF: 1,
            KPW: 1,
            KRW: 1299,
            KYD: 1,
            KZT: 1,
            LAK: 1,
            LBP: 1,
            LKR: 1,
            LRD: 1,
            LSL: 1,
            LTL: 1,
            LVL: 1,
            MAD: 10,
            MDL: 1,
            MGA: 4,
            MKD: 1,
            MMK: 1,
            MNT: 1,
            MOP: 1,
            MUR: 1,
            MVR: 1,
            MWK: 1,
            MXN: 21,
            MYR: 4.6,
            MZN: 1,
            NAD: 1,
            NGN: 1,
            NIO: 1,
            NOK: 10,
            NPR: 1,
            NZD: 1.7,
            OMR: 1,
            PAB: 1,
            PEN: 1,
            PGK: 1,
            PHP: 56,
            PKR: 1,
            PLN: 4.25,
            PYG: 1,
            QAR: 4,
            RMB: 1,
            RON: 5,
            RSD: 1,
            RUB: 70,
            RWF: 1,
            SAR: 1,
            SBD: 1,
            SCR: 1,
            SDG: 1,
            SEK: 10,
            SGD: 1.5,
            SHP: 1,
            SLL: 1,
            SOS: 1,
            SRD: 1,
            SSP: 1,
            STD: 1,
            SVC: 1,
            SYP: 1,
            SZL: 1,
            THB: 34,
            TJS: 1,
            TMT: 1,
            TND: 1,
            TOP: 1,
            TRL: 1,
            TRY: 7,
            TTD: 1,
            TVD: 1,
            TWD: 34,
            TZS: 1,
            UAH: 1,
            UGX: 1,
            USD: 1,
            UYU: 1,
            UZS: 1,
            VEF: 1,
            VND: 26,
            VUV: 1,
            WST: 1,
            XAF: 1,
            XBT: 1,
            XCD: 1,
            XOF: 1,
            XPF: 1,
            YER: 1,
            ZAR: 16,
            ZWD: 1
        },
        at = function(t) {
            return rt[t] || 100
        },
        st = function(t, e) {
            var n = at(e);
            return t * (it[e] * n / 100)
        },
        ct = function(t, e, n) {
            var o = t.toString();
            if (n && o) {
                var r = {
                    currency: n,
                    style: "currency",
                    currencyDisplay: "symbol"
                };
                return function(t, e) {
                    var n = at(e);
                    return parseInt(t, 10) / n
                }(st(t, n), n).toLocaleString(e, r)
            }
            return t
        },
        ut = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        };
    var lt = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.originKey = "", o.adyenCheckout = {}, o.initPaymentForm = o.initPaymentForm.bind(o), o.initAdyenCheckout = o.initAdyenCheckout.bind(o), o.initDropinComponent = o.initDropinComponent.bind(o), o.handleFinalState = o.handleFinalState.bind(o), o.handleResponse = o.handleResponse.bind(o), o.handleError = o.handleError.bind(o), o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentDidMount = function() {
                this.initPaymentForm()
            }, e.prototype.componentDidUpdate = function(t) {
                this.props.settings.countryCode !== t.settings.countryCode && this.initPaymentForm()
            }, e.prototype.componentWillUnmount = function() {
                this.dropin && this.dropin.unmount()
            }, e.prototype.shouldComponentUpdate = function(t) {
                return this.props.settings.countryCode !== t.settings.countryCode
            }, e.prototype.initPaymentForm = function() {
                var t = this,
                    e = this.props.settings,
                    n = this.props.settings.currency,
                    o = s(this.props.products),
                    r = {
                        currency: n,
                        value: st(o, n)
                    };
                this.setState({
                    amount: r
                });
                var i, a = ut({}, e, {
                    amount: r
                });
                (i = document.location.origin, w("originKeys", {
                    originDomains: [i]
                }).then(function(t) {
                    return t.originKeys[i]
                })).then(function(e) {
                    t.originKey = e
                }).then(function() {
                    return w("paymentMethods", a).then(function(t) {
                        if (t.error) throw new Error("No paymentMethods available");
                        return t
                    }).catch(console.error)
                }).then(this.initAdyenCheckout).then(this.initDropinComponent)
            }, e.prototype.initAdyenCheckout = function(t) {
                this.adyenCheckout = new AdyenCheckout({
                    paymentMethodsResponse: t,
                    originKey: this.originKey,
                    locale: "en-US",
                    environment: "test"
                })
            }, e.prototype.initDropinComponent = function() {
                var t = this,
                    e = this.state.amount,
                    n = this.props.settings,
                    o = (void 0 === n ? {} : n).countryCode;
                this.dropin && this.dropin.unmount(), this.dropin = this.adyenCheckout.create("dropin", {
                    amount: e,
                    countryCode: o,
                    removePaymentMethods: ["wechatpayWeb"],
                    openFirstPaymentMethod: !0,
                    paymentMethodsConfiguration: {
                        card: {
                            hasHolderName: !0,
                            holderNameRequired: !0,
                            enableStoreDetails: !1,
                            onError: function() {}
                        },
                        paywithgoogle: {
                            configuration: {
                                gatewayMerchantId: "TestMerchant",
                                merchantName: "Adyen Test merchant"
                            }
                        }
                    },
                    onSubmit: function(n, r) {
                        if (!n.isValid) return console.warn("adyenCheckout - Active payment method (" + n.data.type + ") is not valid", n), !1;
                        var i = {
                            amount: e,
                            countryCode: o
                        };
                        return r.setStatus("loading"),
                            function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = v({}, m, e, t);
                                return w("payments", n).then(function(t) {
                                    if (t.error) throw new Error("Payment initiation failed");
                                    return t
                                }).catch(console.error)
                            }(n.data, i).then(t.handleResponse).catch(t.handleError), !0
                    },
                    onCancel: function(t, e) {
                        e.setStatus("ready")
                    },
                    onAdditionalDetails: function(e) {
                        return _(e.data).then(t.handleResponse).catch(t.handleError)
                    },
                    onError: this.handleError
                }).mount(this.ref)
            }, e.prototype.handleResponse = function(t) {
                var e = t.action,
                    n = t.paymentData,
                    o = t.resultCode;
                n && localStorage.setItem("mystore-paymentData", n), e ? this.dropin.handleAction(e) : this.handleFinalState(o)
            }, e.prototype.handleFinalState = function(t) {
                var e = this.props,
                    n = e.removeAllProducts,
                    o = e.setActiveSection;
                "Authorised" === t || "Received" === t ? (localStorage.removeItem("mystore-paymentData"), n(), o("/confirmation")) : this.handleError(t)
            }, e.prototype.handleError = function(t) {
                t.fieldType || ((0, this.props.setActiveSection)("/error"), console.error(t))
            }, e.prototype.render = function() {
                var t = this;
                return Object(o.h)("div", {
                    ref: function(e) {
                        t.ref = e
                    },
                    className: "checkout__payment-form__container"
                })
            }, e
        }(o.Component),
        pt = Object(r.connect)(["products", "settings"], p)(lt),
        ft = (n(45), Object(r.connect)(["products", "settings"], p)(function(t, e) {
            var n = t.products,
                r = void 0 === n ? [] : n,
                i = t.settings,
                a = void 0 === i ? {} : i,
                c = t.setActiveSection,
                u = e.Localisation;
            if (!r.length) return c("/"), null;
            var l = s(r),
                p = u.amount(l, a.currency);
            return Object(o.h)("section", {
                className: "checkout"
            }, Object(o.h)("h2", {
                className: "checkout__title"
            }, "Checkout"), Object(o.h)("div", {
                className: "checkout__payment-form"
            }, Object(o.h)("h3", {
                className: "checkout__payment-form__title"
            }, "Select your payment method"), Object(o.h)("div", {
                id: "payment-form",
                className: "checkout__payment-form__container"
            }), Object(o.h)(pt, null)), Object(o.h)("div", {
                className: "checkout__order-summary"
            }, Object(o.h)("h3", {
                className: "checkout__order-summary__title"
            }, "Order summary"), Object(o.h)(nt, {
                products: r
            }), Object(o.h)("div", {
                className: "checkout__order-summary__footer"
            }, Object(o.h)("span", {
                className: "checkout__order-summary__footer__label"
            }, "Total:"), Object(o.h)("span", {
                className: "checkout__order-summary__footer__amount"
            }, p))))
        })),
        dt = n(3),
        ht = n.n(dt),
        mt = n(4),
        yt = n.n(mt),
        bt = (n(46), function() {
            return Object(o.h)("section", {
                className: "status"
            }, Object(o.h)(P, {
                src: ht.a,
                className: "status__image",
                alt: "Success icon"
            }), Object(o.h)(P, {
                src: yt.a,
                className: "status__image status__image--thank-you",
                alt: "Thank you"
            }), Object(o.h)("p", {
                className: "status__message"
            }, "Your order has been successfully placed."), Object(o.h)(E, {
                to: "#/",
                className: "button"
            }, "Return Home"))
        }),
        At = n(21),
        vt = n.n(At),
        gt = function() {
            return Object(o.h)("section", {
                className: "status"
            }, Object(o.h)(P, {
                src: vt.a,
                className: "status__image",
                alt: "Error icon"
            }), Object(o.h)("p", {
                className: "status__message"
            }, "Oops! Something went wrong. Please try again."), Object(o.h)(E, {
                to: "#/",
                className: "button"
            }, "Return Home"))
        },
        Ot = n(22),
        wt = n.n(Ot),
        _t = (n(47), function(t) {
            var e = t.buttons,
                n = t.name,
                r = t.onChange;
            return Object(o.h)("div", {
                className: "button-group"
            }, e.map(function(t, e) {
                var i = t.label,
                    a = t.selected,
                    s = t.showError,
                    c = t.value;
                return Object(o.h)("label", {
                    className: wt()(["button", {
                        "button--error": s,
                        "button--selected": a
                    }])
                }, Object(o.h)("input", {
                    type: "radio",
                    id: n + e,
                    value: c,
                    checked: a,
                    onChange: r
                }), i)
            }))
        }),
        jt = (n(48), function(t) {
            var e = t.inline,
                n = void 0 !== e && e,
                r = t.size,
                i = void 0 === r ? "large" : r;
            return Object(o.h)("div", {
                className: "spinner__wrapper " + (n ? "spinner__wrapper--inline" : "")
            }, Object(o.h)("div", {
                className: "spinner spinner--" + i
            }))
        }),
        Nt = n(23),
        St = n.n(Nt);
    n(49);
    var Ct = [300, 500, 1e3],
        Pt = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.getAmount = o.getAmount.bind(o), o.handleAmountSelected = o.handleAmountSelected.bind(o), o.handleDonate = o.handleDonate.bind(o), o.showValidation = o.showValidation.bind(o), o.setStatus = o.setStatus.bind(o), o.state = {
                    amount: null,
                    showValidation: !1,
                    status: "loading"
                }, o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentDidMount = function() {
                this.setStatus("ready")
            }, e.prototype.getAmount = function(t, e) {
                return this.context.Localisation.amount(t, e).split(".")[0].split(",")[0]
            }, e.prototype.handleAmountSelected = function(t) {
                var e = t.target;
                this.setState({
                    amount: parseInt(e.value, 10)
                })
            }, e.prototype.handleDonate = function() {
                var t = this,
                    e = this.props.setActiveSection;
                if (!this.state.amount) return this.showValidation();
                this.setStatus("loading"),
                    function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = v({}, A, e, t);
                        return w("donations", n).then(function(t) {
                            if (t.error) throw new Error("Payment initiation failed");
                            return t
                        }).catch(console.error)
                    }({
                        amount: {
                            currency: "EUR",
                            value: this.state.amount
                        }
                    }).then(function(n) {
                        c(n.resultCode) ? t.setStatus("done") : e("/error")
                    }).catch(function(t) {
                        throw e("/error"), Error(t)
                    })
            }, e.prototype.showValidation = function() {
                this.setState({
                    showValidation: !0
                })
            }, e.prototype.setStatus = function(t) {
                this.setState({
                    status: t
                })
            }, e.prototype.render = function(t, e) {
                var n = this,
                    r = e.amount,
                    i = e.showValidation,
                    a = e.status;
                return function(t) {
                    if (null == t) throw new TypeError("Cannot destructure undefined")
                }(t), "loading" === a ? Object(o.h)(jt, null) : Object(o.h)("div", {
                    className: "donate-component"
                }, Object(o.h)("div", {
                    className: "donate-component__image__container"
                }, Object(o.h)("a", {
                    href: "https://rainforestfoundation.org/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, Object(o.h)(P, {
                    src: St.a,
                    alt: "Donation campaign",
                    className: "donate-component__image"
                }))), "ready" === a && Object(o.h)("div", {
                    className: "donate-component__content"
                }, Object(o.h)("p", {
                    className: "donate-component__text"
                }, "Would you like to donate to the", Object(o.h)("br", null), Object(o.h)("a", {
                    href: "https://rainforestfoundation.org/",
                    className: "link link--charity-name",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Save the Rainforest Foundation"), "?"), Object(o.h)("div", {
                    className: "donate-component__options"
                }, Object(o.h)(_t, {
                    buttons: Ct.map(function(t) {
                        return {
                            value: t,
                            label: n.getAmount(t, "EUR"),
                            selected: t === r,
                            showError: !r && i
                        }
                    }),
                    name: "amount",
                    onChange: this.handleAmountSelected
                })), !r && i && Object(o.h)("p", {
                    class: "error-text"
                }, "Please select an amount to donate"), Object(o.h)("button", {
                    type: "button",
                    className: "button donate-component__button",
                    onClick: this.handleDonate
                }, "Donate"), Object(o.h)(E, {
                    to: "#/",
                    className: "link link--decline"
                }, "No, thanks")), "done" === a && Object(o.h)("div", {
                    className: "donate-component__content"
                }, Object(o.h)("p", {
                    className: "donate-component__text"
                }, "Thanks for your kind donation!"), Object(o.h)(E, {
                    to: "#/",
                    className: "button donate-component__button"
                }, "Continue")))
            }, e
        }(o.Component),
        Dt = Object(r.connect)([], p)(Pt),
        Tt = (n(50), function() {
            return Object(o.h)("section", {
                className: "status"
            }, Object(o.h)(P, {
                src: ht.a,
                className: "status__image",
                alt: "Success icon"
            }), Object(o.h)(P, {
                src: yt.a,
                className: "status__image status__image--thank-you",
                alt: "Thank you"
            }), Object(o.h)("p", {
                className: "status__message"
            }, "Your order has been successfully placed."), Object(o.h)("div", {
                className: "donate-component__container"
            }, Object(o.h)(Dt, null)))
        }),
        Et = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        },
        xt = {
            locale: "en-US",
            get: function(t) {
                return this.translations[t] || this.translations[t.toLowerCase()] || t
            },
            amount: function(t, e) {
                return ct(t, this.locale, e)
            },
            date: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Et({
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    }, e);
                return new Date(t).toLocaleDateString(this.locale, n)
            },
            setTranslations: function(t) {
                return this.translations = t, this.isInitialized = !0, t
            },
            loadLocale: function() {}
        };
    var Kt = function(t) {
            function e(n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, t.call(this, n));
                return o.state = {
                    usingMouse: !0
                }, o.handleInteraction = o.handleInteraction.bind(o), o
            }
            return function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.componentDidMount = function() {
                var t = this.props.setActiveSection,
                    e = u(window.location.hash.replace(/#/, "")),
                    n = e[0],
                    o = e[1];
                t(n + (o ? "/" + o : "")),
                    function(t) {
                        var e = t.removeAllProducts,
                            n = t.setActiveSection,
                            o = window.location,
                            r = o.hash,
                            a = o.pathname,
                            s = o.search,
                            u = i(s),
                            l = u.redirectResult,
                            p = u.payload,
                            f = u.pspEchoData,
                            d = u.MD,
                            h = u.PaRes,
                            m = localStorage.getItem("mystore-paymentData");
                        (l || p || f || d && h) && m && (window.history.pushState(null, null, a + r), _({
                            paymentData: m,
                            details: j({}, f && {
                                returnUrlQueryString: s.replace(/\?/, "")
                            }, l && {
                                redirectResult: l
                            }, p && {
                                payload: p
                            }, d && {
                                MD: d
                            }, h && {
                                PaRes: h
                            })
                        }).then(function(t) {
                            var o = t.resultCode;
                            c(o) ? (e(), localStorage.removeItem("mystore-paymentData"), n("/confirmation")) : n("/error")
                        }).catch(function(t) {
                            throw n("/error"), Error(t)
                        }))
                    }(this.props)
            }, e.prototype.getChildContext = function() {
                return {
                    Localisation: xt
                }
            }, e.prototype.handleInteraction = function(t) {
                var e = t.type;
                this.setState({
                    showFocus: "mousedown" !== e
                })
            }, e.prototype.render = function() {
                return Object(o.h)("div", {
                    className: "mystore " + (this.state.showFocus ? "show-focus" : ""),
                    onMouseDown: this.handleInteraction,
                    onKeyUp: this.handleInteraction
                }, Object(o.h)(R, null), Object(o.h)("main", {
                    className: "main container"
                }, Object(o.h)(S, null, Object(o.h)(V, {
                    products: f,
                    path: "/"
                }), Object(o.h)($, {
                    path: "/product/:id"
                }), Object(o.h)(ot, {
                    path: "/cart"
                }), Object(o.h)(ft, {
                    path: "/checkout"
                }), Object(o.h)(bt, {
                    path: "/confirmation"
                }), Object(o.h)(gt, {
                    default: !0,
                    path: "/error"
                }), Object(o.h)(Tt, {
                    path: "/collaborate"
                })), Object(o.h)(Q, null)))
            }, e
        }(o.Component),
        Bt = Object(r.connect)("settings", p)(Kt);

    function It(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }
    var kt = void 0,
        Rt = function(t) {
            var e = [];

            function n(t) {
                for (var n = [], o = 0; o < e.length; o++) e[o] === t ? t = null : n.push(e[o]);
                e = n
            }

            function o(n, o, r) {
                t = o ? n : It(It({}, t), n);
                for (var i = e, a = 0; a < i.length; a++) i[a](t, r)
            }
            return t = t || {}, {
                action: function(e) {
                    function n(t) {
                        o(t, !1, e)
                    }
                    return function() {
                        for (var o = arguments, r = [t], i = 0; i < arguments.length; i++) r.push(o[i]);
                        var a = e.apply(this, r);
                        if (null != a) return a.then ? a.then(n) : n(a)
                    }
                },
                setState: o,
                subscribe: function(t) {
                    return e.push(t),
                        function() {
                            n(t)
                        }
                },
                unsubscribe: n,
                getState: function() {
                    return t
                }
            }
        }((Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        })({}, {
            activeSection: "/",
            products: [],
            settings: {
                countryCode: "NL",
                currency: "EUR",
                locale: "en-US"
            }
        }, function() {
            try {
                return JSON.parse(localStorage.getItem("mystore-state"))
            } catch (t) {
                return {}
            }
        }())),
        Mt = function() {
            kt = null;
            var t = Rt.getState(),
                e = t.products,
                n = t.settings;
            localStorage.setItem("mystore-state", JSON.stringify({
                products: e,
                settings: n
            }))
        };
    Rt.subscribe(function() {
        kt || (kt = setTimeout(Mt, 100))
    });
    var Ut = Rt;
    n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(73);
    window.mystore = Object(o.render)(Object(o.h)(function() {
        return Object(o.h)(r.Provider, {
            store: Ut
        }, Object(o.h)(Bt, null))
    }, null), document.querySelector("body"))
}]);
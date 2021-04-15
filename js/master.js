/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */

/**
 * Set the copyright message in the .footer__copyright dom element
 */

/* highlight.js v9.7.0 | BSD3 License | git.io/hljslicense */

/*!***************************************************
 * mark.js v6.1.0
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _instanceof(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
}

function _classCallCheck(e, t) {
    if (!_instanceof(e, t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function composedTreeWalk(e, t, n) {
    if (e.nodeType == Node.ELEMENT_NODE) {
        var r = e;
        t && t(r);
        var i = r.shadowRoot || r.webkitShadowRoot;
        if (i) return void composedTreeWalk(i, t, i);
        if ("content" == r.localName) {
            for (var o = r, a = o.getDistributedNodes ? o.getDistributedNodes() : [], s = 0; s < a.length; s++) composedTreeWalk(a[s], t, n);
            return
        }
        if ("slot" == r.localName) {
            for (var c = r, l = c.assignedNodes ? c.assignedNodes({
                    flatten: !0
                }) : [], u = 0; u < l.length; u++) composedTreeWalk(l[u], t, n);
            return
        }
    }
    for (var d = e.firstChild; null != d;) composedTreeWalk(d, t, n), d = d.nextSibling
}

function addInertStyle(e) {
    if (!e.querySelector("style#inert-style")) {
        var t = document.createElement("style");
        t.setAttribute("id", "inert-style"), t.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n", e.appendChild(t)
    }
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ne.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Se) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }

    function c(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ie, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Me.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, r) {
        if (je(e)) {
            var i, o, a = pe.expando,
                s = e.nodeType,
                c = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && c[l] && (r || c[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), c[l] || (c[l] = s ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (r ? c[l] = pe.extend(c[l], t) : c[l].data = pe.extend(c[l].data, t)), o = c[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i
        }
    }

    function d(e, t, n) {
        if (je(e)) {
            var r, i, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !pe.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function f(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            c = s(),
            l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            u = (pe.cssNumber[t] || "px" !== l && +c) && De.exec(pe.css(e, t));
        if (u && u[3] !== l) {
            l = l || u[3], n = n || [], u = +c || 1;
            do {
                o = o || ".5", u /= o, pe.style(e, t, u + l)
            } while (o !== (o = s() / c) && 1 !== o && --a)
        }
        return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
    }

    function p(e) {
        var t = Ue.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, i = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }

    function g(e) {
        He.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, r, i) {
        for (var o, a, s, c, l, u, d, f = e.length, v = p(t), y = [], b = 0; f > b; b++)
            if ((a = e[b]) || 0 === a)
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (We.test(a)) {
            for (c = c || v.appendChild(t.createElement("div")), l = (Pe.exec(a) || ["", ""])[1].toLowerCase(), d = $e[l] || $e._default, c.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) c = c.lastChild;
            if (!de.leadingWhitespace && ze.test(a) && y.push(t.createTextNode(ze.exec(a)[0])), !de.tbody)
                for (a = "table" !== l || Xe.test(a) ? "<table>" !== d[1] || Xe.test(a) ? 0 : c : c.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
            for (pe.merge(y, c.childNodes), c.textContent = ""; c.firstChild;) c.removeChild(c.firstChild);
            c = v.lastChild
        } else y.push(t.createTextNode(a));
        for (c && v.removeChild(c), de.appendChecked || pe.grep(h(y, "input"), g), b = 0; a = y[b++];)
            if (r && pe.inArray(a, r) > -1) i && i.push(a);
            else if (s = pe.contains(a.ownerDocument, a), c = h(v.appendChild(a), "script"), s && m(c), n)
            for (o = 0; a = c[o++];) Fe.test(a.type || "") && n.push(a);
        return c = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return re.activeElement
        } catch (e) {}
    }

    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = b;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, i, r, n)
        })
    }

    function E(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function N(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function C(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events) pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (N(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && He.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function T(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, c, l, u = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p)) return e.each(function(i) {
            var o = e.eq(i);
            m && (t[0] = p.call(this, i, o.html())), T(o, t, n, r)
        });
        if (d && (l = v(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = pe.map(h(l, "script"), N), a = s.length; d > u; u++) o = l, u !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[u], o, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, pe.map(s, C), u = 0; a > u; u++) o = s[u], Fe.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(c, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
            l = i = null
        }
        return e
    }

    function S(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r
    }

    function L(e) {
        var t = re,
            n = ct[e];
        return n || (n = A(e, t), "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = A(e, t), st.detach()), ct[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in Nt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;)
            if ((e = Et[n] + t) in Nt) return e
    }

    function I(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Be(r) && (o[a] = pe._data(r, "olddisplay", L(r.nodeName)))) : (i = Be(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function R(e, t, n) {
        var r = bt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += pe.css(e, n + qe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + qe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + qe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + qe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + qe[o] + "Width", !0, i)));
        return a
    }

    function q(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = pt(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = ht(e, t, o), (0 > i || null == i) && (i = e.style[t]), ut.test(i)) return i;
            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }

    function O() {
        return e.setTimeout(function() {
            Ct = void 0
        }), Ct = pe.now()
    }

    function H(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = qe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function P(e, t, n) {
        for (var r, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, c, l, u = this,
            d = {},
            f = e.style,
            p = e.nodeType && Be(e),
            h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
            s.unqueued || c()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = pe.css(e, "display"), "inline" === ("none" === l ? pe._data(e, "olddisplay") || L(e.nodeName) : l) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], kt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    p = !0
                }
                d[r] = h && h[r] || pe.style(e, r)
            } else l = void 0;
        if (pe.isEmptyObject(d)) "inline" === ("none" === l ? L(e.nodeName) : l) && (f.display = l);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}), o && (h.hidden = !p), p ? pe(e).show() : u.done(function() {
                pe(e).hide()
            }), u.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d) pe.style(e, t, d[t])
            });
            for (r in d) a = P(p ? h[r] : 0, r, u), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function z(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function U(e, t, n) {
        var r, i, o = 0,
            a = U.prefilters.length,
            s = pe.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (i) return !1;
                for (var t = Ct || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && c ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ct || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (z(u, l.opts.specialEasing); a > o; o++)
            if (r = U.prefilters[o].call(l, e, u, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(u, P, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(c, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function $(e) {
        return pe.attr(e, "class") || ""
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Se) || [];
            if (pe.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function X(e, t, n, r) {
        function i(s) {
            var c;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), c
        }
        var o = {},
            a = e === Gt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function Q(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    c.unshift(a);
                    break
                } if (c[0] in n) o = c[0];
        else {
            for (a in n) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
    }

    function V(e, t, n, r) {
        var i, o, a, s, c, l = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
            if (!(a = l[c + " " + o] || l["* " + o]))
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], u.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + c + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Z(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function G(e) {
        if (!pe.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Z(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function J(e, t, n, r) {
        var i;
        if (pe.isArray(t)) pe.each(t, function(t, i) {
            n || nn.test(e) ? r(e, i) : J(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== pe.type(t)) r(e, t);
        else
            for (i in t) J(e + "[" + i + "]", t[i], n, r)
    }

    function Y() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ce = {},
        le = ce.toString,
        ue = ce.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ue.call(e, t);
            for (t in e);
            return void 0 === t || ue.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ce[le.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o, a = 0,
                s = [];
            if (n(e))
                for (i = e.length; i > a; a++) null != (o = t(e[a], a, r)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ce["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, d, f, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t : O) !== L && A(t), t = t || L, M)) {
                if (11 !== m && (d = me.exec(e)))
                    if (i = d[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && q(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (d[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = d[3]) && b.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n
                    } if (b.qsa && !U[e + " "] && (!I || !I.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = B), f = N(e), o = f.length, l = ue.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = l + " " + u(f[o]);
                        p = f.join(","), h = ge.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return Z.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === B && t.removeAttribute("id")
                    }
                }
            }
            return _(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {}

        function u(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = P++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, c, l, u = [H, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[B] || (t[B] = {}), c = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = c[r]) && s[0] === H && s[1] === o) return u[2] = s[2];
                            if (c[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[B] && (i = m(i)), o && !o[B] && (o = m(o, a)), r(function(r, a, s, c) {
                var l, u, d, f = [],
                    m = [],
                    g = a.length,
                    v = r || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : h(v, f, e, s, c),
                    b = n ? o || (r ? e : g || i) ? [] : a : y;
                if (n && n(y, b, s, c), i)
                    for (l = h(b, m), i(l, [], s, c), u = l.length; u--;)(d = l[u]) && (b[m[u]] = !(y[m[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], u = b.length; u--;)(d = b[u]) && l.push(y[u] = d);
                            o(null, b = [], l, c)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (l = o ? J(r, d) : f[u]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = h(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, c) : Z.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = d(function(e) {
                    return e === t
                }, a, !0), l = d(function(e) {
                    return J(t, e) > -1
                }, a, !0), p = [function(e, n, r) {
                    var i = !o && (r || n !== k) || ((t = n).nodeType ? c(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = x.relative[e[s].type]) p = [d(f(p), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !x.relative[e[r].type]; r++);
                        return m(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, r > s && g(e.slice(s, r)), i > r && g(e = e.slice(r)), i > r && u(e))
                    }
                    p.push(n)
                } return f(p)
        }

        function v(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, c, l) {
                    var u, d, f, p = 0,
                        m = "0",
                        g = r && [],
                        v = [],
                        y = k,
                        b = r || o && x.find.TAG("*", l),
                        w = H += null == y ? 1 : Math.random() || .1,
                        E = b.length;
                    for (l && (k = a === L || a || l); m !== E && null != (u = b[m]); m++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === L || (A(u), s = !M); f = e[d++];)
                                if (f(u, a || L, s)) {
                                    c.push(u);
                                    break
                                } l && (H = w)
                        }
                        i && ((u = !f && u) && p--, r && g.push(u))
                    }
                    if (p += m, i && m !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; m--;) g[m] || v[m] || (v[m] = K.call(c));
                            v = h(v)
                        }
                        Z.apply(c, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && (H = w, k = y), g
                };
            return i ? r(a) : a
        }
        var y, b, x, w, E, N, C, _, k, T, S, A, L, j, M, I, R, D, q, B = "sizzle" + 1 * new Date,
            O = e.document,
            H = 0,
            P = 0,
            F = n(),
            z = n(),
            U = n(),
            $ = function(e, t) {
                return e === t && (S = !0), 0
            },
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            V = Q.push,
            Z = Q.push,
            G = Q.slice,
            J = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Y + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = function() {
                A()
            };
        try {
            Z.apply(Q = G.call(O.childNodes), O.childNodes), Q[O.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Q.length ? function(e, t) {
                    V.apply(e, G.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : O;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, j = L.documentElement, M = !E(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(L.getElementsByClassName), b.getById = i(function(e) {
                return j.appendChild(e).id = B, !L.getElementsByName || !L.getElementsByName(B).length
            }), b.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
            }, R = [], I = [], (b.qsa = he.test(L.querySelectorAll)) && (i(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]")
            }), i(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (b.matchesSelector = he.test(D = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = D.call(e, "div"), D.call(e, "[s!='']:x"), R.push("!=", re)
            }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), t = he.test(j.compareDocumentPosition), q = t || he.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, $ = t ? function(e, t) {
                if (e === t) return S = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === O && q(O, e) ? -1 : t === L || t.ownerDocument === O && q(O, t) ? 1 : T ? J(T, e) - J(T, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return S = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    c = [t];
                if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : T ? J(T, e) - J(T, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; s[r] === c[r];) r++;
                return r ? a(s[r], c[r]) : s[r] === O ? -1 : c[r] === O ? 1 : 0
            }, L) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && A(e), n = n.replace(ce, "='$1']"), b.matchesSelector && M && !U[n + " "] && (!R || !R.test(n)) && (!I || !I.test(n))) try {
                var r = D.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && A(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && A(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== r ? r : b.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (S = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort($), S) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return T = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += w(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, c) {
                        var l, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !c && !s,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (f = g, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], b = p && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        u[e] = [H, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], b = p), !1 === b)
                                for (;
                                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [H, b]), f !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = J(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = C(e.replace(oe, "$1"));
                    return i[B] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, be),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = x.filters = x.pseudos, x.setFilters = new l, N = t.tokenize = function(e, n) {
            var r, i, o, a, s, c, l, u = z[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, c = [], l = x.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), c.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in x.filter) !(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : z(e, c).slice(0)
        }, C = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = N(e)), n = t.length; n--;) o = g(t[n]), o[B] ? r.push(o) : i.push(o);
                o = U(e, v(i, r)), o.selector = e
            }
            return o
        }, _ = t.select = function(e, t, n, r) {
            var i, o, a, s, l, d = "function" == typeof e && e,
                f = !r && N(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && M && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ye, be), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(ye, be), ge.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && u(o))) return Z.apply(n, r), n;
                        break
                    }
            }
            return (d || C(e, f))(r, t, !M, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = B.split("").sort($).join("") === B, b.detectDuplicates = !!S, A(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Y, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var be = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pe(e).is(n)) break;
                    r.push(e)
                } return r
        },
        xe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Ee = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ne = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _e.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Ee.test(r[1]) && pe.isPlainObject(t))
                    for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return Ce.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn, Ce = pe(re);
    var ke = /^(?:parents|prev(?:Until|All))/,
        Te = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Te[e] || (i = pe.uniqueSort(i)), ke.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Se = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, r, i, a = [],
            s = [],
            c = -1,
            l = function() {
                for (i = e.once, r = t = !0; s.length; c = -1)
                    for (n = s.shift(); ++c < a.length;) !1 === a[c].apply(n[0], n[1]) && e.stopOnFalse && (c = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !t && (c = a.length - 1, s.push(n)), function t(n) {
                        pe.each(n, function(n, r) {
                            pe.isFunction(r) ? e.unique && u.has(r) || a.push(r) : r && r.length && "string" !== pe.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), c >= n && c--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = !0, n || u.disable(), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, pe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = ie.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                c = 1 === s ? e : pe.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(c.reject) : --s;
            return s || c.resolveWith(r, o), c.promise()
        }
    });
    var Ae;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Ae.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!Ae)
            if (Ae = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return Ae.promise(t)
    }, pe.ready.promise();
    var Le;
    for (Le in pe(de)) break;
    de.ownFirst = "0" === Le, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, r;
            (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var je = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ie = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e)
            },
            data: function(e, t, n) {
                return u(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), c(o, r, i[r])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pe.data(this, e, t)
                }) : o ? c(o, e, pe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Oe = function(e, t, n, r, i, o, a) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === pe.type(n)) {
                i = !0;
                for (s in n) Oe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(pe(e), n)
                })), t))
                for (; c > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
        },
        He = /^(?:checkbox|radio)$/i,
        Pe = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        ze = /^\s+/,
        Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var $e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
    var We = /<|&#?\w+;/,
        Xe = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Qe = /^(?:input|select|textarea)$/i,
        Ke = /^key/,
        Ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^(?:focusinfocus|focusoutblur)$/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (c = n, n = c.handler, i = c.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                        return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(Se) || [""], s = t.length; s--;) o = Ge.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && pe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(Se) || [""], l = t.length; l--;)
                    if (s = Ge.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        c && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || pe.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(u) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, c, l, u, d, f = [r || re],
                p = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ze.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !pe.isWindow(r)) {
                    for (c = l.delegateType || p, Ze.test(c + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
                    u === (r.ownerDocument || re) && f.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? c : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && je(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), n)) && je(r) && a && r[p] && !pe.isWindow(r)) {
                    u = r[a], u && (r[a] = null), pe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0, u && (r[a] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, i, o, a = [],
                s = ie.call(arguments),
                c = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, c), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                c = e.target;
            if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(c) > -1 : pe.find(i, this, null, [c]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ve.test(i) ? this.mouseHooks : Ke.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Qe.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t);
                i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = b), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Je = / jQuery\d+="(?:null|\d+)"/g,
        Ye = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ot = p(re),
        at = ot.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, c = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) _(i, r[a]);
                else _(e, o);
            return r = h(o, "script"), r.length > 0 && m(r, !c && h(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, c = pe.cache, l = de.attributes, u = pe.event.special; null != (n = e[a]); a++)
                if ((t || je(n)) && (i = n[s], o = i && c[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    c[i] && (delete c[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
                }
        }
    }), pe.fn.extend({
        domManip: T,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Je, "") : void 0;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ye.test(e)) && (de.leadingWhitespace || !ze.test(e)) && !$e[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st, ct = {
            HTML: "block",
            BODY: "block"
        },
        lt = /^margin/,
        ut = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        ft = re.documentElement;
    ! function() {
        function t() {
            var t, u, d = re.documentElement;
            d.appendChild(c), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (u = e.getComputedStyle(l), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, i = "4px" === (u || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(c)
        }
        var n, r, i, o, a, s, c = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === l.style.opacity, de.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === l.style.backgroundClip, c = re.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", c.appendChild(l), de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), i
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var pt, ht, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && ut.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }, ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ut.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var gt = /alpha\([^)]*\)/i,
        vt = /opacity\s*=\s*([^)]*)/i,
        yt = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + Re + ")(.*)$", "i"),
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Et = ["Webkit", "O", "Moz", "ms"],
        Nt = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t),
                    c = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = M(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                if (o = typeof n, "string" === o && (i = De.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    c[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = M(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ht(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function() {
                    return q(e, t, r)
                }) : q(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && pt(e);
                return R(e, n, r ? D(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = gt.test(o) ? o.replace(gt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
        return t ? dt(e, {
            display: "inline-block"
        }, ht, [e, "marginRight"]) : void 0
    }), pe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + qe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, lt.test(e) || (pe.cssHooks[e + t].set = R)
    }), pe.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (r = pt(e), i = t.length; i > a; a++) o[t[a]] = pe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = B.prototype.init, pe.fx.step = {};
    var Ct, _t, kt = /^(?:toggle|show|hide)$/,
        Tt = /queueHooks$/;
    pe.Animation = pe.extend(U, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, De.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [F],
            prefilter: function(e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
            }, r
        }, pe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Be).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = pe.isEmptyObject(e),
                    o = pe.speed(t, n, r),
                    a = function() {
                        var t = U(this, pe.extend({}, e), o);
                        (i || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = pe._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Tt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = pe._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = pe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
            }
        }), pe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                n = 0;
            for (Ct = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), Ct = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            _t || (_t = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.clearInterval(_t), _t = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                i = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var St = /\r/g,
        At = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = pe.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)) : void 0
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(At, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, c = 0 > i ? s : o ? i : 0; s > c; c++)
                        if (n = r[c], (n.selected || c === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
                        if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Lt, jt, Mt = pe.expr.attrHandle,
        It = /^(?:checked|selected)$/i,
        Rt = de.getSetAttribute,
        Dt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Oe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? jt : Lt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(Se);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Dt && Rt || !It.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Rt ? n : r)
        }
    }), jt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Dt && Rt || !It.test(n) ? e.setAttribute(!Rt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Mt[t] || pe.find.attr;
        Dt && Rt || !It.test(t) ? Mt[t] = function(e, t, r) {
            var i, o;
            return r || (o = Mt[t], Mt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Mt[t] = o), i
        } : Mt[t] = function(e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Dt && Rt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : Lt && Lt.set(e, t, n)
        }
    }), Rt || (Lt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Mt.id = Mt.name = Mt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Lt.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var qt = /^(?:input|select|textarea|button|object)$/i,
        Bt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Oe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : qt.test(e.nodeName) || Bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var Ot = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, $(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[c++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[c++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = pe(this), o = e.match(Se) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = $(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + $(n) + " ").replace(Ot, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ht = e.location,
        Pt = pe.now(),
        Ft = /\?/,
        zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = pe.trim(t + "");
        return i && !pe.trim(i.replace(zt, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Ut = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qt = /^(?:GET|HEAD)$/,
        Kt = /^\/\//,
        Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Zt = {},
        Gt = {},
        Jt = "*/".concat("*"),
        Yt = Ht.href,
        en = Vt.exec(Yt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Yt,
            type: "GET",
            isLocal: Xt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e)
        },
        ajaxPrefilter: W(Zt),
        ajaxTransport: W(Gt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, d, y, b, w, N = n;
                2 !== x && (x = 2, c && e.clearTimeout(c), u = void 0, s = i || "", E.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (b = K(f, E, r)), b = V(f, b, E, o), o ? (f.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), (w = E.getResponseHeader("etag")) && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? N = "nocontent" : 304 === t ? N = "notmodified" : (N = b.state, d = b.data, y = b.error, o = !y)) : (y = N, !t && N || (N = "error", 0 > t && (t = 0))), E.status = t, E.statusText = (n || N) + "", o ? m.resolveWith(p, [d, N, E]) : m.rejectWith(p, [E, N, y]), E.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [E, f, o ? d : y]), g.fireWith(p, [E, N]), l && (h.trigger("ajaxComplete", [E, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, c, l, u, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                g = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = Wt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), r(0, t), this
                    }
                };
            if (m.promise(E).complete = g.add, E.success = E.done, E.error = E.fail, f.url = ((t || f.url || Yt) + "").replace(Ut, "").replace(Kt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Se) || [""], null == f.crossDomain && (i = Vt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), X(Zt, f, n, E), 2 === x) return E;
            l = pe.event && f.global, l && 0 == pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Qt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ft.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = $t.test(a) ? a.replace($t, "$1_=" + Pt++) : a + (Ft.test(a) ? "&" : "?") + "_=" + Pt++)), f.ifModified && (pe.lastModified[a] && E.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && E.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) E.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, E, f) || 2 === x)) return E.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[o](f[o]);
            if (u = X(Gt, f, n, E)) {
                if (E.readyState = 1, l && h.trigger("ajaxSend", [E, f]), 2 === x) return E;
                f.async && f.timeout > 0 && (c = e.setTimeout(function() {
                    E.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, u.send(y, r)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, r, i) {
            return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) J(n, e[n], t, i);
        return r.join("&").replace(tn, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !He.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Y() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || ee()
    } : Y;
    var sn = 0,
        cn = {},
        ln = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in cn) cn[e](void 0, !0)
    }), de.cors = !!ln && "withCredentials" in ln, (ln = de.ajax = !!ln) && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(),
                        s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, c, l;
                        if (n && (r || 4 === a.readyState))
                            if (delete cn[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    c = a.statusText
                                } catch (e) {
                                    c = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            } l && i(o, c, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = cn[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var un = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = un.pop() || pe.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : !1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || pe.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, un.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = Ee.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var fn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, l, u = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), c = pe.css(e, "left"), l = ("absolute" === u || "fixed" === u) && pe.inArray("auto", [o, c]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, pe.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || ft
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) {
            return Oe(this, function(e, r, i) {
                var o = te(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = j(de.pixelPosition, function(e, n) {
            return n ? (n = ht(e, t), ut.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Oe(this, function(t, n, r) {
                    var i;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pn = e.jQuery,
        hn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = hn), t && e.jQuery === pe && (e.jQuery = pn), pe
    }, t || (e.jQuery = e.$ = pe), pe
});
var config = {
        testQueryParam: "tracktest",
        ga: {
            script: "",
            id: {
                prod: {
                    stock: "",
                    exp: ""
                },
                dev: {
                    stock: "",
                    exp: ""
                }
            }
        },
        fpti: {
            script: {
                prod: "",
                dev: ""
            },
            id: "Analytics",
            pageSlugs: ["developer"]
        }
    },
    cachedCookie;
define("dxa", ["jquery"], function(e) {
        function t() {
            var e, t, n;
            if (cachedCookie) return cachedCookie;
            for (e = decodeURIComponent(document.cookie).split("; "), n = 0; n < e.length; n++)
                if (t = e[n], 0 === t.indexOf(l)) try {
                    return cachedCookie = JSON.parse(t.substring(l.length + 1))
                } catch (e) {}
            return null
        }

        function n(e, t, n) {
            var r;
            e && t && n ? (cachedCookie = {
                expId: e,
                userId: t
            }, r = JSON.stringify(cachedCookie), document.cookie = l + "=" + r + "; expires=" + n + "; path=/", window.ga && window.ga("set", "userId", e + "|" + t)) : document.cookie = l + "=; expires=" + new Date(0).toUTCString() + "; path=/"
        }

        function r() {
            var e = t(),
                n = config.ga.id[a.env][e ? "exp" : "stock"];
            ! function(e, t, n, r, i, o, a) {
                e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
                    (e[i].q = e[i].q || []).push(arguments)
                }, e[i].l = 1 * new Date, o = t.createElement(n), a = t.getElementsByTagName(n)[0], o.async = 1, o.src = r, a.parentNode.insertBefore(o, a)
            }(window, document, "script", config.ga.script, "ga"), window.ga("create", n, "auto"), e && window.ga("set", "userId", e.expId + "|" + e.userId), window.ga("send", "pageview")
        }

        function i() {
            var e = document.createElement("script");
            e.src = config.fpti.script[a.env], document.body.appendChild(e), e.addEventListener("load", function() {
                var e = window.sigesa || {};
                e.analytics && (config.fpti.pageSlugs[1] = a.name, config.fpti.pageSlugs[2] = window.location.pathname.replace(/(^\/|\/$)/g, ""), e.analytics.setup({
                    data: {
                        pgrp: config.fpti.pageSlugs.slice(0, 3).join(":"),
                        page: config.fpti.pageSlugs.join(":"),
                        ccpg: "usa",
                        pgtf: "Nodejs"
                    }
                }))
            })
        }
        var o = window.location.hostname,
            a = {
                env: "developer.sigesa.com" === o ? "prod" : "dev",
                name: "developer" === window.location.pathname.split("/")[1] ? "dashboard" : "docs"
            },
            s = e(window),
            c = e("body"),
            l = "_dxexp_";
        return {
            trackEvent: function(e) {
                var t = window.sigesa || {};
                e && (window.ga && window.ga("send", "event", {
                    eventCategory: e.cat,
                    eventAction: e.act,
                    eventLabel: e.lbl,
                    eventValue: e.val
                }), t.analytics && t.analytics.instance && t.analytics.instance.recordClick && t.analytics.instance.recordClick({
                    data: {
                        event_category: e.cat,
                        event_action: e.act,
                        event_label: e.lbl,
                        event_value: e.val
                    }
                }))
            },
            loadAnalytics: function() {
                function t(e) {
                    return !(!e || -1 === document.cookie.indexOf(e + "=true")) && (window[e] = !0, !0)
                }

                function n(e, t, n) {
                    var r, i = void 0 === t || t,
                        o = n || e + "-disable";
                    r = !1 === i ? "=; expires=Thu, 01-Jan-70 00:00:01 GMT;" : "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/", document.cookie = o + r, window[o] = !0
                }

                function l(e) {
                    var t = location.search.toLowerCase(); - 1 !== t.indexOf("disablega") ? n("ga", !0, e) : -1 !== t.indexOf("enablega") ? n("ga", !1, e) : -1 !== t.indexOf("disablefpti") ? n("fpti", !0, e) : -1 !== t.indexOf("enablefpti") && n("fpti", !1, e)
                }
                var u = this,
                    d = "ga-disable-" + config.ga.id[a.env],
                    f = "fpti-disable-" + config.fpti.id;
                l(d), l(f), t(d) || r(), t(f) || i(),
                    function() {
                        function t(e) {
                            var t = e.currentTarget,
                                n = t && t.getAttribute("data-dxa");
                            n = n && n.split(","), 3 === n.length && u.trackEvent({
                                cat: n[0].trim(),
                                act: n[1].trim(),
                                lbl: n[2].trim()
                            })
                        }
                        c.on("click", "[data-dxa]", t), c.on("mouseover", ".tippy[data-dxa]", t), s.on("hashchange", function(e) {
                            var t = e.target.location && e.target.location.hash;
                            t && t.length > 1 && u.trackEvent({
                                cat: "inPageAnchor",
                                act: "click",
                                lbl: t
                            })
                        }), c.on("click", 'a[href^="http"]', function(e) {
                            var t = e.target && e.target.href || e.currentTarget && e.currentTarget.href,
                                n = e.target.target,
                                r = e.target.classList.contains("no-follow");
                            return t && -1 === t.indexOf(o) && (e.preventDefault(), u.trackEvent({
                                cat: "externalLink",
                                act: "click",
                                lbl: t
                            }), !r) ? n ? window.open(t, n) : window.location.assign(t) : t
                        }), c.on("submit", ".dx-form-search", function(t) {
                            var n = e(t.target).find(".dx-search-input").val();
                            u.trackEvent({
                                cat: "siteSearch",
                                act: "submit",
                                lbl: n
                            })
                        }), c.on("blur", "#siteQ", function() {
                            var t = e(this).val();
                            t.length > 0 && u.trackEvent({
                                cat: "siteSearch",
                                act: "search",
                                lbl: t
                            })
                        })
                    }()
            },
            readExpCookie: t,
            setExpCookie: n
        }
    }), define("dxc", [], function() {
        function e(e, t, n) {
            var r, i;
            n ? (i = new Date, i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + i.toUTCString()) : r = "", document.cookie = e + "= " + t + r + "; path=/"
        }

        function t(e) {
            var t = document.cookie.match("(?:^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
            return t ? t[1] : null
        }

        function n() {
            var e = t("dnw_ct");
            return e && (e = decodeURIComponent(e)), e
        }

        function r(e) {
            return !!t(e)
        }
        return {
            createCustomCookie: e,
            getCookie: t,
            getCsrfCookie: n,
            doesCookieExist: r
        }
    }), define("dxr", ["jquery"], function(e) {
        var t = e(window),
            n = e("body"),
            r = n.find(".dx-main"),
            i = r.find(".dx-main-nav"),
            o = "matchMedia" in window;
        return {
            mediaBreakpoint: "59rem",
            isMediaMinWidth: function(e) {
                var t = e || this.mediaBreakpoint;
                return o && window.matchMedia("screen and (min-width:" + t + ")").matches
            },
            mobilize: function(e, n) {
                var r;
                this.mobilize.fnArray = this.mobilize.fnArray || [], -1 === this.mobilize.fnArray.indexOf(e) && (this.mobilize.fnArray.push(e), r = this.mobilize.fnArray, this.isMediaMinWidth(n) || e(), t.on("resize.mobilize", function() {
                    var e = 0;
                    for (e; e < r.length; e++) r[e]()
                }))
            },
            mobilizeNavTitles: function() {
                var e, t = i.find(".tip-nav-active-parent > a");
                t.length || (t = i.find(".tip-nav-active > a")), (e = t.eq(0).text()) && (this.createMobileNavTitle(e), this.createProductSectionLabel(e))
            },
            toggleMobileNavs: function() {
                var e = /dx-nav-open-[\S]+/g;
                n.on("click", function(t) {
                    var r = e.test(document.body.className),
                        i = t.target.getAttribute("data-trigger-nav"),
                        o = document.body.classList.contains(i);
                    setTimeout(function() {
                        (i || r && "siteQ" !== t.target.id) && (n[0].className = n[0].className.replace(e, "").trim(), !o && i && n.addClass(i))
                    }, 0)
                })
            },
            createProductSectionLabel: function(e) {
                var t;
                this.createProductSectionLabel.done || (t = e, t && n.find('[data-js="product-section-label"]').text(t), this.createProductSectionLabel.done = !0)
            },
            createMobileNavTitle: function(e) {
                var t;
                this.createMobileNavTitle.done || (t = e, n.find(".dx-trigger-nav-2").text(t), this.createMobileNavTitle.done = !0)
            },
            hideHeaderOnScroll: function() {
                var r, i, o = 0,
                    a = e("#header").outerHeight();
                this.isMediaMinWidth(this.mediaBreakpoint) || (t.scroll(function() {
                    r = !0
                }), setInterval(function() {
                    r && (i = e(this).scrollTop(), i > o && i > a && o - i <= 5 ? n.addClass("header-up") : i + e(window).height() < e(document).height() && n.removeClass("header-up"), o = i, r = !1)
                }, 250))
            }
        }
    }), define("dxm", [], function() {
        return function(e) {
            var t = document.createElement("div"),
                n = document.createElement("p"),
                r = document.createElement("h1"),
                i = document.createElement("button"),
                o = document.createElement("a"),
                a = document.createElement("div"),
                s = e.btnCancelClbk || e.btnClbk,
                c = {
                    constructor: function() {
                        n.innerHTML = e.bodyTxt, i.innerHTML = e.btnTxt, o.innerHTML = e.btnCancelTxt, r.innerHTML = e.headerTxt, a.classList.add("dx-modal"), t.classList.add("dx-modal__content"), i.classList.add("dx-btn", "dx-btn-primary"), a.appendChild(t), t.appendChild(r), t.appendChild(n), t.appendChild(i), e.btnCancelTxt && t.appendChild(o), i.addEventListener("click", c.onClick), o.addEventListener("click", c.onCancelClick), document.addEventListener("keydown", c.onKeyDown)
                    },
                    onClick: function() {
                        e.btnClbk(), c.close()
                    },
                    onCancelClick: function() {
                        s(), c.close()
                    },
                    onKeyDown: function(e) {
                        var t = e.which || e.keyCode;
                        c.focus = document.activeElement, 27 === t && (c.close(), s())
                    },
                    render: function() {
                        var e, t = document.querySelectorAll(".dx-modal");
                        for (c.previousFocus = document.activeElement, e = 0; e < t.length; e++) t[e].parentNode.removeChild(t[e]);
                        return document.body.appendChild(a), a.focus(), c
                    },
                    close: function() {
                        document.removeEventListener("keydown", c.onKeyDown), a.parentNode.removeChild(a), c.previousFocus.focus()
                    }
                };
            return c.constructor(), c
        }
    }), requirejs.config({
        paths: {
            dxa: "../components/dx/js/dx-analytics",
            dxc: "../components/dx/js/dx-cookies",
            dxm: "../components/dx/js/dx-modal",
            dxr: "../components/dx/js/dx-responsive",
            jquery: "../components/jquery/dist/jquery.min"
        },
        shim: {
            jquery: {
                exports: "jQuery"
            }
        }
    }), define("dx", ["jquery", "dxa", "dxc", "dxr", "dxm"], function(e, t, n, r, i) {
        var o, a, s, c, l = e(window),
            u = e("body"),
            d = u.find(".dx-main"),
            f = {
                showLoader: function() {
                    var e = ["vx_has-spinner", "vx_has-spinner-large"],
                        t = function(t) {
                            "add" !== t && "remove" !== t || e.map(function(e) {
                                return document.body.classList[t](e)
                            })
                        };
                    window.addEventListener("beforeunload", function() {
                        t("add"), setTimeout(function() {
                            t("remove")
                        }, 15e3)
                    }), window.onpageshow = function(e) {
                        e.persisted && t("remove")
                    }
                },
                showProfileDropdownLinks: function() {
                    u.on("mouseenter", ".profile__wrap", function() {
                        e(this).addClass("profile__wrap--active")
                    }).on("mouseleave", ".profile__wrap", function() {
                        e(this).removeClass("profile__wrap--active")
                    }), u.on("focus", ".profile__dropdown__link, .profile__wrap", function() {
                        e(".profile__wrap").addClass("profile__wrap--active")
                    }).on("blur", ".profile__dropdown__link", function() {
                        e(".profile__wrap").removeClass("profile__wrap--active")
                    })
                },
                addAnchorLinks: function(t) {
                    (t ? e(t) : u.filter(".dx-docs, .dx-apiref")).find("h1[id], h2[id], h3[id]").not(".chart--heading").addClass("dx-anchor").prepend(function() {
                        return '<a class="dx-anchor__icon" href="#' + this.id + '" aria-hidden=true></a>'
                    })
                },
                emphasizeExternalLinks: function(t) {
                    var n = /^https:\/\/developer.sigesa.com/;
                    e(t ? t : ".content").find("a[href^=http]:not(.dx-no-eel):not([href$='.pdf'])").filter(function() {
                        return !n.test(this.href)
                    }).attr("title", "external link").attr("target", "_blank").attr("rel", "noopener noreferrer").filter(":not(.dx-btn):not([href$='.pdf']):not(.dx-no-eel-icon)").addClass("dx-external-link")
                },
                handleGDPR: function() {
                    var e = document.getElementById("gdprCookieBanner--custom"),
                        t = document.getElementById("gdprAcceptAllButton--custom");
                    e && (n.doesCookieExist("complianceCookie") || (e.className = e.className.replace("u-hide", ""), t.addEventListener("click", function() {
                        n.createCustomCookie("complianceCookie", "on", 60), e.className += " u-hide"
                    })))
                },
                notifyEventForHashRedirect: function() {
                    var e, n = window.sessionStorage && window.sessionStorage.getItem && window.sessionStorage.getItem("hashRedirectFrom");
                    n && (e = {
                        cat: "hashRedirect",
                        act: n,
                        lbl: window.location.href
                    }, window.sessionStorage.removeItem("hashRedirectFrom"), t.trackEvent(e))
                },
                scrollToHash: function(e) {
                    var t = location.hash.replace("#", ""),
                        n = document.getElementById(t);
                    t && !n && (n = document.querySelector('a[name="' + t + '"]')), e || window.addEventListener("hashchange", this.scrollToHash)
                },
                scrollToTop: function() {
                    function e() {
                        return n.scrollTop || r.scrollTop
                    }

                    function t() {
                        u.find(".dx-scrolltop").addClass("dx-unhide"), u.on("click", ".dx-scrolltop a", function(e) {
                            e.preventDefault(), window.scrollTo(0, 0)
                        })
                    }
                    var n = document.documentElement,
                        r = document.body,
                        i = Math.max(n.scrollHeight, r.scrollHeight),
                        o = window.outerHeight;
                    i > o && (e() > o ? t() : l.on("scroll", function() {
                        e() > o && (l.off("scroll"), t())
                    }))
                },
                createLoginModal: function(e, t) {
                    window.localStorage.setItem("dxLoginSessionTimestamp", ""), a = i({
                        headerTxt: "Session expired",
                        bodyTxt: "To keep your information safe, we logged you out.",
                        btnTxt: "Login",
                        btnCancelTxt: "Cancel",
                        btnClbk: function() {
                            window.location.href = e
                        },
                        btnCancelClbk: function() {
                            window.location.href = t
                        }
                    }), a.render()
                },
                storageListener: function(e, t) {
                    var n = this.createLoginModal;
                    window.addEventListener("storage", function(r) {
                        "dxLoginSessionTimestamp" === r.key && (r.oldValue && !r.newValue && n(e, t), !r.oldValue && r.newValue && a && (a.close(), a = null, c = null, s = new Date))
                    })
                },
                checkSessionLogin: function(e, t, n, r) {
                    var l = window.localStorage.getItem("dxLoginSessionTimestamp"),
                        u = this.createLoginModal,
                        d = 9e5,
                        f = 3e5;
                    s = new Date, -1 !== window.location.search.indexOf("testSessionLogout") && (d = 15e3, f = 1e4), l && !e && window.localStorage.setItem("dxLoginSessionTimestamp", ""), e && (window.localStorage.setItem("dxLoginSessionTimestamp", s), o && clearInterval(o), o = setInterval(function() {
                        var e = d - (new Date).getTime() + new Date(s).getTime();
                        if (e < 0 && !a) return void u(t, n);
                        e < f && !c && !a && (c = i({
                            headerTxt: "Alert!",
                            bodyTxt: "Your session is about to expire.",
                            btnTxt: "Refresh",
                            btnClbk: function() {
                                r(function(e) {
                                    if ("error" === e) return void u(t, n);
                                    s = new Date, window.localStorage.setItem("storage", s), c = null
                                })
                            }
                        }).render())
                    }, 1e3))
                },
                setCopyright: function() {
                    var e = (new Date).getFullYear(),
                        t = document.body.querySelector(".footer__copyright");
                    t && (t.innerText = "© " + e + " sigesa.")
                }
            };
        return e.extend(f, r, t, i)
    }), requirejs.config({
        paths: {},
        shim: {}
    }), define("ensighten", [], function() {
        var e = {
                development: "",
                production: ""
            },
            t = {
                init: function() {
                    var t = "developer.sigesa.com" === window.location.hostname ? "production" : "development";
                    window.dataLayer = {
                            contentCountry: "us"
                        },
                        function(e, t, n, r, i, o, a) {
                            e.tagManagerObject = i, e[i] = e[i] || function() {
                                (e[i].q = e[i].q || []).push(arguments)
                            }, e[i].l = 1 * new Date, o = t.createElement(n), a = t.getElementsByTagName(n)[0], o.async = 1, o.src = r, a.parentNode.insertBefore(o, a)
                        }(window, document, "script", e[t], "tagManager")
                }
            };
        return {
            initialize: function() {
                t.init()
            }
        }
    }),
    function(e) {
        var t = "object" == typeof window && window || "object" == typeof self && self;
        "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define("highlight", [], function() {
            return t.hljs
        }))
    }(function(e) {
        function t(e) {
            return e.replace(/[&<>]/gm, function(e) {
                return L[e]
            })
        }

        function n(e) {
            return e.nodeName.toLowerCase()
        }

        function r(e, t) {
            var n = e && e.exec(t);
            return n && 0 === n.index
        }

        function i(e) {
            return _.test(e)
        }

        function o(e) {
            var t, n, r, o, a = e.className + " ";
            if (a += e.parentNode ? e.parentNode.className : "", n = k.exec(a)) return x(n[1]) ? n[1] : "no-highlight";
            for (a = a.split(/\s+/), t = 0, r = a.length; r > t; t++)
                if (o = a[t], i(o) || x(o)) return o
        }

        function a(e, t) {
            var n, r = {};
            for (n in e) r[n] = e[n];
            if (t)
                for (n in t) r[n] = t[n];
            return r
        }

        function s(e) {
            var t = [];
            return function e(r, i) {
                for (var o = r.firstChild; o; o = o.nextSibling) 3 === o.nodeType ? i += o.nodeValue.length : 1 === o.nodeType && (t.push({
                    event: "start",
                    offset: i,
                    node: o
                }), i = e(o, i), n(o).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: i,
                    node: o
                }));
                return i
            }(e, 0), t
        }

        function c(e, r, i) {
            function o() {
                return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
            }

            function a(e) {
                function r(e) {
                    return " " + e.nodeName + '="' + t(e.value) + '"'
                }
                u += "<" + n(e) + w.map.call(e.attributes, r).join("") + ">"
            }

            function s(e) {
                u += "</" + n(e) + ">"
            }

            function c(e) {
                ("start" === e.event ? a : s)(e.node)
            }
            for (var l = 0, u = "", d = []; e.length || r.length;) {
                var f = o();
                if (u += t(i.substr(l, f[0].offset - l)), l = f[0].offset, f === e) {
                    d.reverse().forEach(s);
                    do {
                        c(f.splice(0, 1)[0]), f = o()
                    } while (f === e && f.length && f[0].offset === l);
                    d.reverse().forEach(a)
                } else "start" === f[0].event ? d.push(f[0].node) : d.pop(), c(f.splice(0, 1)[0])
            }
            return u + t(i.substr(l))
        }

        function l(e) {
            function t(e) {
                return e && e.source || e
            }

            function n(n, r) {
                return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
            }

            function r(i, o) {
                if (!i.compiled) {
                    if (i.compiled = !0, i.k = i.k || i.bK, i.k) {
                        var s = {},
                            c = function(t, n) {
                                e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function(e) {
                                    var n = e.split("|");
                                    s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                                })
                            };
                        "string" == typeof i.k ? c("keyword", i.k) : E(i.k).forEach(function(e) {
                            c(e, i.k[e])
                        }), i.k = s
                    }
                    i.lR = n(i.l || /\w+/, !0), o && (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"), i.b || (i.b = /\B|\b/), i.bR = n(i.b), i.e || i.eW || (i.e = /\B|\b/), i.e && (i.eR = n(i.e)), i.tE = t(i.e) || "", i.eW && o.tE && (i.tE += (i.e ? "|" : "") + o.tE)), i.i && (i.iR = n(i.i)), null == i.r && (i.r = 1), i.c || (i.c = []);
                    var l = [];
                    i.c.forEach(function(e) {
                        e.v ? e.v.forEach(function(t) {
                            l.push(a(e, t))
                        }) : l.push("self" === e ? i : e)
                    }), i.c = l, i.c.forEach(function(e) {
                        r(e, i)
                    }), i.starts && r(i.starts, o);
                    var u = i.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([i.tE, i.i]).map(t).filter(Boolean);
                    i.t = u.length ? n(u.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }
            r(e)
        }

        function u(e, n, i, o) {
            function a(e, t) {
                var n, i;
                for (n = 0, i = t.c.length; i > n; n++)
                    if (r(t.c[n].bR, e)) return t.c[n]
            }

            function s(e, t) {
                if (r(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                return e.eW ? s(e.parent, t) : void 0
            }

            function c(e, t) {
                return !i && r(t.iR, e)
            }

            function f(e, t) {
                var n = b.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(n) && e.k[n]
            }

            function p(e, t, n, r) {
                var i = r ? "" : A.classPrefix,
                    o = '<span class="' + i,
                    a = n ? "" : S;
                return (o += e + '">') + t + a
            }

            function h() {
                var e, n, r, i;
                if (!E.k) return t(k);
                for (i = "", n = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r;) i += t(k.substr(n, r.index - n)), e = f(E, r), e ? (T += e[1], i += p(e[0], t(r[0]))) : i += t(r[0]), n = E.lR.lastIndex, r = E.lR.exec(k);
                return i + t(k.substr(n))
            }

            function m() {
                var e = "string" == typeof E.sL;
                if (e && !N[E.sL]) return t(k);
                var n = e ? u(E.sL, k, !0, C[E.sL]) : d(k, E.sL.length ? E.sL : void 0);
                return E.r > 0 && (T += n.r), e && (C[E.sL] = n.top), p(n.language, n.value, !1, !0)
            }

            function g() {
                _ += null != E.sL ? m() : h(), k = ""
            }

            function v(e) {
                _ += e.cN ? p(e.cN, "", !0) : "", E = Object.create(e, {
                    parent: {
                        value: E
                    }
                })
            }

            function y(e, t) {
                if (k += e, null == t) return g(), 0;
                var n = a(t, E);
                if (n) return n.skip ? k += t : (n.eB && (k += t), g(), n.rB || n.eB || (k = t)), v(n, t), n.rB ? 0 : t.length;
                var r = s(E, t);
                if (r) {
                    var i = E;
                    i.skip ? k += t : (i.rE || i.eE || (k += t), g(), i.eE && (k = t));
                    do {
                        E.cN && (_ += S), E.skip || (T += E.r), E = E.parent
                    } while (E !== r.parent);
                    return r.starts && v(r.starts, ""), i.rE ? 0 : t.length
                }
                if (c(t, E)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (E.cN || "<unnamed>") + '"');
                return k += t, t.length || 1
            }
            var b = x(e);
            if (!b) throw new Error('Unknown language: "' + e + '"');
            l(b);
            var w, E = o || b,
                C = {},
                _ = "";
            for (w = E; w !== b; w = w.parent) w.cN && (_ = p(w.cN, "", !0) + _);
            var k = "",
                T = 0;
            try {
                for (var L, j, M = 0; E.t.lastIndex = M, L = E.t.exec(n);) j = y(n.substr(M, L.index - M), L[0]), M = L.index + j;
                for (y(n.substr(M)), w = E; w.parent; w = w.parent) w.cN && (_ += S);
                return {
                    r: T,
                    value: _,
                    language: e,
                    top: E
                }
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                    r: 0,
                    value: t(n)
                };
                throw e
            }
        }

        function d(e, n) {
            n = n || A.languages || E(N);
            var r = {
                    r: 0,
                    value: t(e)
                },
                i = r;
            return n.filter(x).forEach(function(t) {
                var n = u(t, e, !1);
                n.language = t, n.r > i.r && (i = n), n.r > r.r && (i = r, r = n)
            }), i.language && (r.second_best = i), r
        }

        function f(e) {
            return A.tabReplace || A.useBR ? e.replace(T, function(e, t) {
                return A.useBR && "\n" === e ? "<br>" : A.tabReplace ? t.replace(/\t/g, A.tabReplace) : void 0
            }) : e
        }

        function p(e, t, n) {
            var r = t ? C[t] : n,
                i = [e.trim()];
            return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(r) && i.push(r), i.join(" ").trim()
        }

        function h(e) {
            var t, n, r, a, l, h = o(e);
            i(h) || (A.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, l = t.textContent, r = h ? u(h, l, !0) : d(l), n = s(t), n.length && (a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), a.innerHTML = r.value, r.value = c(n, s(a), l)), r.value = f(r.value), e.innerHTML = r.value, e.className = p(e.className, h, r.language), e.result = {
                language: r.language,
                re: r.r
            }, r.second_best && (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.r
            }))
        }

        function m(e) {
            A = a(A, e)
        }

        function g() {
            if (!g.called) {
                g.called = !0;
                var e = document.querySelectorAll("pre code");
                w.forEach.call(e, h)
            }
        }

        function v() {
            addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1)
        }

        function y(t, n) {
            var r = N[t] = n(e);
            r.aliases && r.aliases.forEach(function(e) {
                C[e] = t
            })
        }

        function b() {
            return E(N)
        }

        function x(e) {
            return e = (e || "").toLowerCase(), N[e] || N[C[e]]
        }
        var w = [],
            E = Object.keys,
            N = {},
            C = {},
            _ = /^(no-?highlight|plain|text)$/i,
            k = /\blang(?:uage)?-([\w-]+)\b/i,
            T = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            S = "</span>",
            A = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            },
            L = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            };
        return e.highlight = u, e.highlightAuto = d, e.fixMarkup = f, e.highlightBlock = h, e.configure = m, e.initHighlighting = g, e.initHighlightingOnLoad = v, e.registerLanguage = y, e.listLanguages = b, e.getLanguage = x, e.inherit = a, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        }, e.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
        }, e.C = function(t, n, r) {
            var i = e.inherit({
                cN: "comment",
                b: t,
                e: n,
                c: []
            }, r || {});
            return i.c.push(e.PWM), i.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                r: 0
            }), i
        }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
            cN: "number",
            b: e.NR,
            r: 0
        }, e.CNM = {
            cN: "number",
            b: e.CNR,
            r: 0
        }, e.BNM = {
            cN: "number",
            b: e.BNR,
            r: 0
        }, e.CSSNM = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            r: 0
        }, e.RM = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE, {
                b: /\[/,
                e: /\]/,
                r: 0,
                c: [e.BE]
            }]
        }, e.TM = {
            cN: "title",
            b: e.IR,
            r: 0
        }, e.UTM = {
            cN: "title",
            b: e.UIR,
            r: 0
        }, e.METHOD_GUARD = {
            b: "\\.\\s*" + e.UIR,
            r: 0
        }, e
    }), hljs.registerLanguage("java", function(e) {
        var t = e.UIR + "(<" + e.UIR + "(\\s*,\\s*" + e.UIR + ")*>)?",
            n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
            r = {
                cN: "number",
                b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
                r: 0
            };
        return {
            aliases: ["jsp"],
            k: n,
            i: /<\/|#/,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    b: /\w+@/,
                    r: 0
                }, {
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: n,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: n,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, r, {
                cN: "meta",
                b: "@[A-Za-z]+"
            }]
        }
    }), hljs.registerLanguage("bash", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            n = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            },
            r = {
                cN: "string",
                b: /'/,
                e: /'/
            };
        return {
            aliases: ["sh", "zsh"],
            l: /-?[a-z\._]+/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "meta",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, n, r, t]
        }
    }), hljs.registerLanguage("objectivec", function(e) {
        var t = {
                cN: "built_in",
                b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
            },
            n = {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            r = /[a-zA-Z@][a-zA-Z0-9_]*/,
            i = "@interface @class @protocol @implementation";
        return {
            aliases: ["mm", "objc", "obj-c"],
            k: n,
            l: r,
            i: "</",
            c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "meta",
                b: "#",
                e: "$",
                c: [{
                    cN: "meta-string",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + i.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: i,
                l: r,
                c: [e.UTM]
            }, {
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), hljs.registerLanguage("cs", function(e) {
        var t = {
                keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
                literal: "null false true"
            },
            n = {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            },
            r = e.inherit(n, {
                i: /\n/
            }),
            i = {
                cN: "subst",
                b: "{",
                e: "}",
                k: t
            },
            o = e.inherit(i, {
                i: /\n/
            }),
            a = {
                cN: "string",
                b: /\$"/,
                e: '"',
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, e.BE, o]
            },
            s = {
                cN: "string",
                b: /\$@"/,
                e: '"',
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, i]
            },
            c = e.inherit(s, {
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, o]
            });
        i.c = [s, a, n, e.ASM, e.QSM, e.CNM, e.CBCM], o.c = [c, a, r, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
            i: /\n/
        })];
        var l = {
                v: [s, a, n, e.ASM, e.QSM]
            },
            u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
        return {
            aliases: ["csharp"],
            k: t,
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "doctag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "\x3c!--|--\x3e"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "meta",
                b: "#",
                e: "$",
                k: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, l, e.CNM, {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.inherit(e.TM, {
                    b: "[a-zA-Z](\\.?\\w)*"
                }), e.CLCM, e.CBCM]
            }, {
                bK: "new return throw await",
                r: 0
            }, {
                cN: "function",
                b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    r: 0,
                    c: [l, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), hljs.registerLanguage("css", function(e) {
        var t = {
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    eW: !0,
                    eE: !0,
                    c: [{
                        b: /[\w-]+\(/,
                        rB: !0,
                        c: [{
                            cN: "built_in",
                            b: /[\w-]+/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            c: [e.ASM, e.QSM]
                        }]
                    }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                        cN: "number",
                        b: "#[0-9A-Fa-f]+"
                    }, {
                        cN: "meta",
                        b: "!important"
                    }]
                }
            }]
        };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "selector-id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "selector-class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "selector-attr",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                b: "@",
                e: "[{;]",
                i: /:/,
                c: [{
                    cN: "keyword",
                    b: /\w+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "selector-tag",
                b: "[a-zA-Z-][a-zA-Z0-9_-]*",
                r: 0
            }, {
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, t]
            }]
        }
    }), hljs.registerLanguage("xml", function(e) {
        var t = {
            eW: !0,
            i: /</,
            r: 0,
            c: [{
                cN: "attr",
                b: "[A-Za-z0-9\\._:-]+",
                r: 0
            }, {
                b: /=\s*/,
                r: 0,
                c: [{
                    cN: "string",
                    endsParent: !0,
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s"'=<>`]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "meta",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("\x3c!--", "--\x3e", {
                r: 10
            }), {
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: "php",
                c: [{
                    b: "/\\*",
                    e: "\\*/",
                    skip: !0
                }]
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "style"
                },
                c: [t],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: ["css", "xml"]
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "script"
                },
                c: [t],
                starts: {
                    e: "<\/script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                cN: "meta",
                v: [{
                    b: /<\?xml/,
                    e: /\?>/,
                    r: 10
                }, {
                    b: /<\?\w+/,
                    e: /\?>/
                }]
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "name",
                    b: /[^\/><\s]+/,
                    r: 0
                }, t]
            }]
        }
    }), hljs.registerLanguage("php", function(e) {
        var t = {
                b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
            },
            n = {
                cN: "meta",
                b: /<\?(php)?|\?>/
            },
            r = {
                cN: "string",
                c: [e.BE, n],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            i = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.HCM, e.C("//", "$", {
                c: [n]
            }), e.C("/\\*", "\\*/", {
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: /<<<['"]?\w+['"]?$/,
                e: /^\w+;?$/,
                c: [e.BE, {
                    cN: "subst",
                    v: [{
                        b: /\$\w+/
                    }, {
                        b: /\{\$/,
                        e: /\}/
                    }]
                }]
            }, n, {
                cN: "keyword",
                b: /\$this\b/
            }, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, r, i]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, r, i]
        }
    }), hljs.registerLanguage("python", function(e) {
        var t = {
                cN: "meta",
                b: /^(>>>|\.\.\.) /
            },
            n = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, e.ASM, e.QSM]
            },
            r = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            },
            i = {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", t, r, n]
            };
        return {
            aliases: ["py", "gyp"],
            k: {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i: /(<\/|->|\?)/,
            c: [t, r, n, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def",
                    r: 10
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, i, {
                    b: /->/,
                    eW: !0,
                    k: "None"
                }]
            }, {
                cN: "meta",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }), hljs.registerLanguage("javascript", function(e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*",
            n = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            r = {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            },
            i = {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}",
                k: n,
                c: []
            },
            o = {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, i]
            };
        i.c = [e.ASM, e.QSM, o, r, e.RM];
        var a = i.c.concat([e.CBCM, e.CLCM]);
        return {
            aliases: ["js", "jsx"],
            k: n,
            c: [{
                cN: "meta",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, {
                cN: "meta",
                b: /^#!/,
                e: /$/
            }, e.ASM, e.QSM, o, e.CLCM, e.CBCM, r, {
                b: /[{,]\s*/,
                r: 0,
                c: [{
                    b: t + "\\s*:",
                    rB: !0,
                    r: 0,
                    c: [{
                        cN: "attr",
                        b: t,
                        r: 0
                    }]
                }]
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    cN: "function",
                    b: "(\\(.*?\\)|" + t + ")\\s*=>",
                    rB: !0,
                    e: "\\s*=>",
                    c: [{
                        cN: "params",
                        v: [{
                            b: t
                        }, {
                            b: /\(\s*\)/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: n,
                            c: a
                        }]
                    }]
                }, {
                    b: /</,
                    e: /(\/\w+|\w+\/)>/,
                    sL: "xml",
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        b: /<\w+/,
                        e: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        c: [{
                            b: /<\w+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: t
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: a
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, e.METHOD_GUARD, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }, {
                bK: "constructor",
                e: /\{/,
                eE: !0
            }],
            i: /#(?!!)/
        }
    }), hljs.registerLanguage("json", function(e) {
        var t = {
                literal: "true false null"
            },
            n = [e.QSM, e.CNM],
            r = {
                e: ",",
                eW: !0,
                eE: !0,
                c: n,
                k: t
            },
            i = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attr",
                    b: /"/,
                    e: /"/,
                    c: [e.BE],
                    i: "\\n"
                }, e.inherit(r, {
                    b: /:/
                })],
                i: "\\S"
            },
            o = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(r)],
                i: "\\S"
            };
        return n.splice(n.length, 0, i, o), {
            c: n,
            k: t,
            i: "\\S"
        }
    }), hljs.registerLanguage("swift", function(e) {
        var t = {
                keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
                literal: "true false nil",
                built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
            },
            n = {
                cN: "type",
                b: "\\b[A-Z][\\w']*",
                r: 0
            },
            r = e.C("/\\*", "\\*/", {
                c: ["self"]
            }),
            i = {
                cN: "subst",
                b: /\\\(/,
                e: "\\)",
                k: t,
                c: []
            },
            o = {
                cN: "number",
                b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
                r: 0
            },
            a = e.inherit(e.QSM, {
                c: [i, e.BE]
            });
        return i.c = [o], {
            k: t,
            c: [a, e.CLCM, r, n, o, {
                cN: "function",
                bK: "func",
                e: "{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    b: /</,
                    e: />/
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    endsParent: !0,
                    k: t,
                    c: ["self", o, a, e.CBCM, {
                        b: ":"
                    }],
                    i: /["']/
                }],
                i: /\[|%/
            }, {
                cN: "class",
                bK: "struct protocol class extension enum",
                k: t,
                e: "\\{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                })]
            }, {
                cN: "meta",
                b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
            }, {
                bK: "import",
                e: /$/,
                c: [e.CLCM, r]
            }]
        }
    }), hljs.registerLanguage("ruby", function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            n = {
                keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
                literal: "true false nil"
            },
            r = {
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
            i = {
                b: "#<",
                e: ">"
            },
            o = [e.C("#", "$", {
                c: [r]
            }), e.C("^\\=begin", "^\\=end", {
                c: [r],
                r: 10
            }), e.C("^__END__", "\\n$")],
            a = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: n
            },
            s = {
                cN: "string",
                c: [e.BE, a],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }, {
                    b: /<<(-?)\w+$/,
                    e: /^\s*\w+$/
                }]
            },
            c = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                endsParent: !0,
                k: n
            },
            l = [s, i, {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }), {
                    b: "<\\s*",
                    c: [{
                        b: "(" + e.IR + "::)?" + e.IR
                    }]
                }].concat(o)
            }, {
                cN: "function",
                bK: "def",
                e: "$|;",
                c: [e.inherit(e.TM, {
                    b: t
                }), c].concat(o)
            }, {
                b: e.IR + "::"
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":(?!\\s)",
                c: [s, {
                    b: t
                }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                cN: "params",
                b: /\|/,
                e: /\|/,
                k: n
            }, {
                b: "(" + e.RSR + ")\\s*",
                c: [i, {
                    cN: "regexp",
                    c: [e.BE, a],
                    i: /\n/,
                    v: [{
                        b: "/",
                        e: "/[a-z]*"
                    }, {
                        b: "%r{",
                        e: "}[a-z]*"
                    }, {
                        b: "%r\\(",
                        e: "\\)[a-z]*"
                    }, {
                        b: "%r!",
                        e: "![a-z]*"
                    }, {
                        b: "%r\\[",
                        e: "\\][a-z]*"
                    }]
                }].concat(o),
                r: 0
            }].concat(o);
        a.c = l, c.c = l;
        var u = [{
            b: /^\s*=>/,
            starts: {
                e: "$",
                c: l
            }
        }, {
            cN: "meta",
            b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
            starts: {
                e: "$",
                c: l
            }
        }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: n,
            i: /\/\*/,
            c: o.concat(u).concat(l)
        }
    });
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    };
! function(e, t, n) {
    "function" == typeof define && define.amd ? define("jquery-mark", ["jquery"], function(r) {
        return e(t, n, r)
    }) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? e(t, n, require("jquery")) : e(t, n, jQuery)
}(function(e, t, n) {
    var r = function() {
        function n(e) {
            _classCallCheck(this, n), this.ctx = e
        }
        return _createClass(n, [{
            key: "log",
            value: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? "debug" : arguments[1],
                    n = this.opt.log;
                this.opt.debug && "object" === (void 0 === n ? "undefined" : _typeof(n)) && "function" == typeof n[t] && n[t]("mark.js: " + e)
            }
        }, {
            key: "escapeStr",
            value: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        }, {
            key: "createRegExp",
            value: function(e) {
                return e = this.escapeStr(e), Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)), this.opt.diacritics && (e = this.createDiacriticsRegExp(e)), e = this.createAccuracyRegExp(e)
            }
        }, {
            key: "createSynonymsRegExp",
            value: function(e) {
                var t = this.opt.synonyms;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = t[n],
                            i = this.escapeStr(n),
                            o = this.escapeStr(r);
                        e = e.replace(new RegExp("(" + i + "|" + o + ")", "gmi"), "(" + i + "|" + o + ")")
                    } return e
            }
        }, {
            key: "createDiacriticsRegExp",
            value: function(e) {
                var t = ["aÀÁÂÃÄÅàáâãäåĀāąĄ", "cÇçćĆčČ", "dđĐďĎ", "eÈÉÊËèéêëěĚĒēęĘ", "iÌÍÎÏìíîïĪī", "lłŁ", "nÑñňŇńŃ", "oÒÓÔÕÕÖØòóôõöøŌō", "rřŘ", "sŠšśŚ", "tťŤ", "uÙÚÛÜùúûüůŮŪū", "yŸÿýÝ", "zŽžżŻźŹ"],
                    n = [];
                return e.split("").forEach(function(r) {
                    t.every(function(t) {
                        if (-1 !== t.indexOf(r)) {
                            if (n.indexOf(t) > -1) return !1;
                            e = e.replace(new RegExp("[" + t + "]", "gmi"), "[" + t + "]"), n.push(t)
                        }
                        return !0
                    })
                }), e
            }
        }, {
            key: "createAccuracyRegExp",
            value: function(e) {
                switch (this.opt.accuracy) {
                    case "partially":
                        return "()(" + e + ")";
                    case "complementary":
                        return "()(\\S*" + e + "\\S*)";
                    case "exactly":
                        return "(^|\\s)(" + e + ")(?=\\s|$)"
                }
            }
        }, {
            key: "getSeparatedKeywords",
            value: function(e) {
                var t = this,
                    n = [];
                return e.forEach(function(e) {
                    t.opt.separateWordSearch ? e.split(" ").forEach(function(e) {
                        e.trim() && n.push(e)
                    }) : e.trim() && n.push(e)
                }), {
                    keywords: n,
                    length: n.length
                }
            }
        }, {
            key: "getElements",
            value: function() {
                var e = void 0,
                    t = [];
                return e = void 0 === this.ctx ? [] : this.ctx instanceof HTMLElement ? [this.ctx] : Array.isArray(this.ctx) ? this.ctx : Array.prototype.slice.call(this.ctx), e.forEach(function(e) {
                    t.push(e);
                    var n = e.querySelectorAll("*");
                    n.length && (t = t.concat(Array.prototype.slice.call(n)))
                }), e.length || this.log("Empty context", "warn"), {
                    elements: t,
                    length: t.length
                }
            }
        }, {
            key: "matches",
            value: function(e, t) {
                return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
            }
        }, {
            key: "matchesFilter",
            value: function(e, t) {
                var n = this,
                    r = !0,
                    i = this.opt.filter.concat(["script", "style", "title"]);
                return this.opt.iframes || (i = i.concat(["iframe"])), t && (i = i.concat(["*[data-markjs='true']"])), i.every(function(t) {
                    return !n.matches(e, t) || (r = !1)
                }), !r
            }
        }, {
            key: "onIframeReady",
            value: function(e, t, n) {
                try {
                    ! function() {
                        var r = e.contentWindow,
                            i = "about:blank",
                            o = function() {
                                try {
                                    if (null === r.document) throw new Error("iframe inaccessible");
                                    t(r.document)
                                } catch (e) {
                                    n()
                                }
                            },
                            a = function() {
                                var t = e.getAttribute("src").trim();
                                return r.location.href === i && t !== i && t
                            },
                            s = function() {
                                var t = function t() {
                                    try {
                                        a() || (e.removeEventListener("load", t), o())
                                    } catch (e) {
                                        n()
                                    }
                                };
                                e.addEventListener("load", t)
                            };
                        "complete" === r.document.readyState ? a() ? s() : o() : s()
                    }()
                } catch (e) {
                    n()
                }
            }
        }, {
            key: "forEachElementInIframe",
            value: function(e, t) {
                var n = this,
                    r = arguments.length <= 2 || void 0 === arguments[2] ? function() {} : arguments[2],
                    i = 0,
                    o = function() {
                        --i < 1 && r()
                    };
                this.onIframeReady(e, function(e) {
                    var r = Array.prototype.slice.call(e.querySelectorAll("*"));
                    0 === (i = r.length) && o(), r.forEach(function(e) {
                        "iframe" === e.tagName.toLowerCase() ? function() {
                            var r = 0;
                            n.forEachElementInIframe(e, function(e, n) {
                                t(e, n), n - 1 === r && o(), r++
                            }, o)
                        }() : (t(e, r.length), o())
                    })
                }, function() {
                    var t = e.getAttribute("src");
                    n.log("iframe '" + t + "' could not be accessed", "warn"), o()
                })
            }
        }, {
            key: "forEachElement",
            value: function(e) {
                var t = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] || arguments[2],
                    i = this.getElements(),
                    o = i.elements,
                    a = i.length,
                    s = function() {
                        0 == --a && n()
                    };
                s(++a), o.forEach(function(n) {
                    if (!t.matchesFilter(n, r)) {
                        if ("iframe" === n.tagName.toLowerCase()) return void t.forEachElementInIframe(n, function(n) {
                            t.matchesFilter(n, r) || e(n)
                        }, s);
                        e(n)
                    }
                    s()
                })
            }
        }, {
            key: "forEachNode",
            value: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                this.forEachElement(function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) 3 === t.nodeType && t.textContent.trim() && e(t)
                }, t)
            }
        }, {
            key: "wrapMatches",
            value: function(e, n, r, i) {
                for (var o = this.opt.element ? this.opt.element : "mark", a = r ? 0 : 2, s = void 0; null !== (s = n.exec(e.textContent));) {
                    var c = s.index;
                    r || (c += s[a - 1].length);
                    var l = e.splitText(c);
                    if (e = l.splitText(s[a].length), null !== l.parentNode) {
                        var u = t.createElement(o);
                        u.setAttribute("data-markjs", "true"), this.opt.className && u.setAttribute("class", this.opt.className), u.textContent = s[a], l.parentNode.replaceChild(u, l), i(u)
                    }
                    n.lastIndex = 0
                }
            }
        }, {
            key: "unwrapMatches",
            value: function(e) {
                for (var n = e.parentNode, r = t.createDocumentFragment(); e.firstChild;) r.appendChild(e.removeChild(e.firstChild));
                n.replaceChild(r, e), n.normalize()
            }
        }, {
            key: "markRegExp",
            value: function(e, t) {
                var n = this;
                this.opt = t, this.log('Searching with expression "' + e + '"');
                var r = !1,
                    i = function(e) {
                        r = !0, n.opt.each(e)
                    };
                this.forEachNode(function(t) {
                    n.wrapMatches(t, e, !0, i)
                }, function() {
                    r || n.opt.noMatch(e), n.opt.complete(), n.opt.done()
                })
            }
        }, {
            key: "mark",
            value: function(e, t) {
                var n = this;
                this.opt = t, e = "string" == typeof e ? [e] : e;
                var r = this.getSeparatedKeywords(e),
                    i = r.keywords,
                    o = r.length;
                0 === o && (this.opt.complete(), this.opt.done()), i.forEach(function(e) {
                    var t = new RegExp(n.createRegExp(e), "gmi"),
                        r = !1,
                        a = function(e) {
                            r = !0, n.opt.each(e)
                        };
                    n.log('Searching with expression "' + t + '"'), n.forEachNode(function(e) {
                        n.wrapMatches(e, t, !1, a)
                    }, function() {
                        r || n.opt.noMatch(e), i[o - 1] === e && (n.opt.complete(), n.opt.done())
                    })
                })
            }
        }, {
            key: "unmark",
            value: function(e) {
                var t = this;
                this.opt = e;
                var n = this.opt.element ? this.opt.element : "*";
                n += "[data-markjs]", this.opt.className && (n += "." + this.opt.className), this.log('Removal selector "' + n + '"'), this.forEachElement(function(e) {
                    t.matches(e, n) && t.unwrapMatches(e)
                }, function() {
                    t.opt.complete(), t.opt.done()
                }, !1)
            }
        }, {
            key: "opt",
            set: function(t) {
                this._opt = _extends({}, {
                    element: "",
                    className: "",
                    filter: [],
                    iframes: !1,
                    separateWordSearch: !0,
                    diacritics: !0,
                    synonyms: {},
                    accuracy: "partially",
                    each: function() {},
                    noMatch: function() {},
                    done: function() {},
                    complete: function() {},
                    debug: !1,
                    log: e.console
                }, t)
            },
            get: function() {
                return this._opt
            }
        }]), n
    }();
    n.fn.mark = function(e, t) {
        return new r(this).mark(e, t), this
    }, n.fn.markRegExp = function(e, t) {
        return new r(this).markRegExp(e, t), this
    }, n.fn.unmark = function(e) {
        return new r(this).unmark(e), this
    }
}, window, document), requirejs.config({
    paths: {
        jquery: "../components/jquery/dist/jquery.min",
        highlight: "../components/dx/vendor/highlightjs/highlight",
        "jquery-mark": "../components/mark.js/dist/jquery.mark.min"
    },
    shim: {
        jquery: {
            exports: "jQuery"
        }
    }
}), define("dxh", ["jquery", "highlight", "jquery-mark"], function(e) {
    var t = window.hljs,
        n = /lang-(\S+)/,
        r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        i = function(e) {
            var t, r = e.className.match(n);
            if (r && r[0] && (t = e.classList)) switch (t.remove(r[0]), r[1]) {
                case "ios:swift":
                    t.add("swift");
                    break;
                case "ios:objectivec":
                case "ios:3":
                case "ios:4":
                    t.add("objectivec");
                    break;
                case "android":
                    t.add("java");
                    break;
                case "xml":
                    t.add("xml")
            }
        };
    return {
        highlightCodeBlocks: function() {
            var n, r = {
                    languages: ["bash", "cs", "html", "java", "javascript", "json", "objectivec", "php", "python", "ruby", "swift"]
                },
                o = e(".dx-content").find("pre"),
                a = "MutationObserver" in window,
                s = {};
            a && (n = new MutationObserver(function(e) {
                e.forEach(function(e) {
                    var t = e.target || {},
                        n = "#" + t.id + "." + t.className.replace(/\s/g, ".");
                    s[n] ? delete s[n] : (s[n] = !0, window.hljs.highlightBlock(t))
                })
            })), t.configure(r), o.addClass("dx-pre-hljs").not(":has(> code)").wrapInner("<code/>"), o.find("> code").each(function(e, r) {
                i(r), t.highlightBlock(r), a && n.observe(r, {
                    childList: !0,
                    subtree: !0
                })
            })
        },
        highlightBlockquotes: function() {
            e(".dx-content").find("blockquote").filter(':contains("Note:")').addClass("dx-blockquote-note").end().filter(':contains("Notes:")').addClass("dx-blockquote-note").end().filter(':contains("Important:")').addClass("dx-blockquote-important").end().filter(':contains("Tip:")').addClass("dx-blockquote-tip").end().filter(':contains("Tips:")').addClass("dx-blockquote-tip").end().filter(':contains("Availability:")').addClass("dx-blockquote-availability")
        },
        applyTableNumberStyles: function() {
            var t = e(".dx-content").find("td").filter(function() {
                return this.innerHTML.match(/\d+/)
            });
            e.each(t, function(e, t) {
                t.innerText = t.innerText.replace(/\./g, "")
            }), t.wrapInner('<div class="table__number"></div>')
        },
        markSearchKeywords: function(t) {
            var n, r, i = t || location.search;
            i && (i = decodeURI(i).replace(/["]/g, ""), (n = i.match(/[?&](?:q|mark)=([^&]+)/)) && (r = decodeURIComponent(n[1]).split(/[- _+]/g), e(".dx-content").mark(r, {
                each: function(e) {
                    delete e.dataset.markjs
                }
            }), e("body").filter(".dx-apiref").find(".dax-def-item:has(.dax-def-list mark)").addClass("dax-open-child")))
        },
        ifIOSCopyToClipboard: function(e) {
            var t, n = e.contentEditable,
                i = e.readOnly,
                o = document.createRange();
            r && (e.contenteditable = !0, e.readonly = !1, o.selectNodeContents(e), t = window.getSelection(), t.removeAllRanges(), t.addRange(o), e.setSelectionRange(0, 999999), e.contentEditable = n, e.readOnly = i, document.execCommand("copy"))
        },
        copyToClipboard: function(e) {
            var t, n, r, i = !1;
            if (!e && !e.target) return i;
            if (!(t = document.getElementById(e.target.getAttribute("data-c2cb-target")))) return i;
            "PRE" === t.nodeName && (t = t.querySelector("code") || t), n = "CODE" === t.nodeName || "PRE" === t.nodeName ? t.textContent : t.innerHTML, r = document.createElement("textarea"), r.className = "hidden-copy", r.value = n.trim(), document.body.appendChild(r), r.select();
            try {
                this.ifIOSCopyToClipboard(r), document.execCommand("copy"), i = !0, e.target.classList.add("dx-btn-copy-success")
            } catch (t) {
                e.target.classList.add("dx-btn-copy-failure")
            }
            return document.body.removeChild(r), i
        },
        addCopyButtonToElements: function(e, t) {
            var n, r, i, o, a, s, c, l, u = !1,
                d = 0;
            if ("string" != typeof e) return u;
            if (n = document.querySelectorAll(e), !n.length) return u;
            for (d; d < n.length; d++) r = n[d], i = r.id || "c2cb-target-" + d, o = document.createElement("button"), r.id = i, o.textContent = t || "copy", o.className = "dx-btn dx-btn-copy", o.setAttribute("data-c2cb-target", i), o.setAttribute("data-dxa", "sampleCode,copyToClipboard," + window.location.pathname + "|" + i), "PRE" === r.nodeName && r.classList.contains("dx-pre-hljs") ? (a = document.createElement("div"), s = r.querySelector(".hljs"), s && (c = s.className.match(/language-(\w+)/)) && (l = document.createElement("span"), l.classList.add("dx-pre-lang"), l.textContent = c[1], a.appendChild(l)), a.className = "dx-pre-meta", a.appendChild(o), r.appendChild(a)) : r.insertAdjacentElement("afterend", o);
            return u = !0, document.body.addEventListener("click", function(e) {
                e.target.getAttribute("data-c2cb-target") && this.copyToClipboard(e)
            }.bind(this)), u
        }
    }
}), requirejs.config({
    paths: {
        dxa: "../components/dx/js/dx-analytics"
    }
}), define("dxl", ["jquery", "dxa"], function(e, t) {
    function n(n, r, i) {
        var s, c = {
                ".net": "cs",
                "c#": "cs",
                curl: "bash",
                node: "javascript",
                nodejs: "javascript"
            },
            l = e.map(a, function(t) {
                return e(t).attr("data-" + r)
            }),
            u = l.indexOf(n) > -1 ? n : l[0],
            d = o.find("pre[data-" + r + "]");
        s = a.filter("[data-" + r + '="' + u + '"]'), s.addClass("picker__btn--active dx-btn-active").siblings().removeClass("picker__btn--active dx-btn-active"), d = d.filter(function(e) {
            return d[e].getAttribute("data-switcher") === r
        }), e.each(d, function(t, n) {
            e(n).not(":has(> code)").wrapInner("<code/>").end().removeClass("dx-switcher-active").filter("[data-" + r + '="' + u + '"]').addClass("dx-switcher-active"), e(n).removeClass("dx-switcher-active").filter("[data-" + r + '="' + u + '"]').addClass("dx-switcher-active")
        }), d.find("code").each(function() {
            var t = e(this),
                n = t.closest("pre").data("lang").toLowerCase();
            n && t.addClass("language-" + (c[n] || n))
        }), t.trackEvent({
            cat: r + "Switch",
            act: i ? "preset" : "click",
            lbl: u
        })
    }

    function r(e) {
        var t, r;
        e.currentTarget && (e.preventDefault(), t = e.currentTarget.getAttribute("data-lang"), r = e.currentTarget.getAttribute("data-version"), t && r ? (n(r, "version"), window.localStorage && window.localStorage.setItem(c, r)) : (n(t, "lang"), window.localStorage && window.localStorage.setItem(s, t)))
    }
    var i, o, a, s = "preferred-lang",
        c = "preferred-version";
    return {
        initialize: function() {
            var t, l;
            i = e("body"), o = i.find(".dx-main"), o.find(".dx-lang-list").addClass("dx-switcher-list").removeClass("dx-lang-list"), o.find("pre[data-lang]").not("[data-switcher]").attr("data-switcher", "lang"), o.find(".dx-lang-active").addClass("dx-switcher-active").removeClass("dx-lang-active"), a = o.find("button[data-lang]"), a.length && (window.localStorage && (t = window.localStorage.getItem(c), l = window.localStorage.getItem(s)), l && n(window.localStorage.getItem(s), "lang"), t && n(window.localStorage.getItem(c), "version"), t && l || e.each(o.find(".dx-switcher-list"), function(t, n) {
                var r = e(n).children();
                r.hasClass("picker__btn--active dx-btn-active") || r.first().addClass("picker__btn--active dx-btn-active")
            }), i.on("click", ".dx-switcher-list button", r))
        }
    }
});
var algolia = {
    key: "00f22f4d718bcbe86c8575be8e5e080f",
    id: "GBB2ADSCIQ",
    indexName: "sigesaSearch"
};
algolia.url = "https://" + algolia.id + "-dsn.algolia.net/1/indexes/", requirejs.config({
    paths: {},
    shim: {}
}), define("dx-algolia", [], function() {
    var e = {
        searchDataInIndex: function(e, t, n, r) {
            var i = algolia.url + e + "/query",
                o = {
                    params: "query=" + t + "&hitsPerPage=" + n + "&getRankingInfo=1&attributesToSnippet=content:40"
                };
            this.postData(i, o).then(function(e) {
                r(e)
            }).catch(function(e) {
                r(null, e)
            })
        },
        searchDataInAllIndices: function(e, t, n) {
            var r, i = algolia.url + "*/queries",
                o = [],
                a = 0;
            for (a = 0; a < e.length; a++) o.push({
                indexName: e[a],
                params: "query=" + t
            });
            r = {
                requests: o,
                strategy: "none"
            }, this.postData(i, r).then(function(e) {
                n(e)
            }).catch(function(e) {
                n(null, e)
            })
        },
        postData: function(e, t) {
            return fetch(e, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "X-Algolia-API-Key": algolia.key,
                    "X-Algolia-Application-Id": algolia.id
                },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(t)
            }).then(function(e) {
                return e.json()
            })
        }
    };
    return {
        searchDocsSite: function(t, n, r) {
            e.searchDataInIndex(algolia.indexName, t, n, r)
        }
    }
}), requirejs.config({
    paths: {
        "dx-algolia": "../components/dx/js/dx-algolia"
    },
    shim: {}
}), define("dxsp", ["dx-algolia"], function(e) {
    return {
        showSearchPanel: function(e, t) {
            var n, r, i;
            e && e.classList && t && t.classList && (n = document.body, r = n.querySelector("header"), i = n.querySelector(".dx-main"), e.classList.remove("u-hide"), t.classList.remove("u-hide"), i.setAttribute("inert", !0), i.setAttribute("aria-hidden", !0), r.setAttribute("inert", !0), r.setAttribute("aria-hidden", !0))
        },
        hideSearchPanel: function(e, t) {
            var n, r, i;
            e && e.classList && t && t.classList && (n = document.body, r = n.querySelector("header"), i = n.querySelector(".dx-main"), e.classList.add("u-hide"), t.classList.add("u-hide"), i.removeAttribute("inert"), i.removeAttribute("aria-hidden"), r.removeAttribute("inert"), r.removeAttribute("aria-hidden"))
        },
        truncateHtml: function(e, t) {
            var n, r, i = 200;
            return "number" == typeof t && Math.floor(t) === t && (i = t), "string" != typeof e || e.length < i ? e : (n = e.replace(/<\/?a(\s[^>]+)?>/g, "").substring(0, i).replace(/\s\S+$/, ""), r = document.createElement("div"), r.innerHTML = n, r.innerHTML)
        },
        appendDefaultQueries: function(e, t) {
            e && (e.value = t)
        },
        formatUrl: function(e, t) {
            var n, r, i = /^[^#]+/;
            return e && t ? (n = e.match(i)[0], r = e.replace(n, ""), n + "?mark=" + encodeURIComponent(t) + r) : ""
        },
        handleQueryParams: function(e) {
            var t = e,
                n = function() {
                    t.length > 0 ? window.history.pushState("", "", t) : window.history.pushState("", "", document.location.pathname)
                };
            t = t && t.length > 0 ? "?q=" + encodeURIComponent(t) : "", self.historyChangeTimer && clearTimeout(self.historyChangeTimer), self.historyChangeTimer = setTimeout(n, 750)
        },
        buildSearchItem: function(e) {
            return e.topic.length > 0 && e.url.length > 0 && e.title.length > 0 && e.desc.length ? '<div class="dx-search-item"><div class="dx-search-item-topic">' + e.topic + '</div><a class="dx-search-item-link" href="' + e.url + '">' + e.title + '</a><div class="dx-search-item-anchor">' + e.anchor + '</div><p class="dx-search-item-desc">' + e.desc + "&hellip;</p></div>" : ""
        },
        updateSearchResultsView: function(t, n, r, i) {
            var o = this;
            r && i && e.searchDocsSite(t, n, function(e) {
                var n, a = i.getElementsByClassName("no-results")[0],
                    s = r.getElementsByClassName("dx-search-items")[0],
                    c = "";
                e && (n = e.hits, n && n.length > 0 ? (n.forEach(function(e) {
                    var n = "",
                        r = "",
                        i = "",
                        l = {},
                        u = !1,
                        d = !1,
                        f = !1,
                        p = {
                            topic: "",
                            title: "",
                            url: "",
                            anchor: "",
                            desc: ""
                        };
                    r = e._highlightResult && e._highlightResult.content ? e._highlightResult.content.value : t, p.desc = o.truncateHtml(r, 300), p.url = o.formatUrl(e.url, t), a.innerHTML = "", s.innerHTML = "", Object.keys(e._highlightResult.hierarchy).sort().forEach(function(t) {
                        l[t] = e._highlightResult.hierarchy[t]
                    }), Object.keys(l).forEach(function(e) {
                        (n = l[e].value) && "lvl0" !== e && (f || d ? f && !d ? (p.title = n, d = !0) : f && d && !u && (p.anchor = n, u = !0) : (p.topic = n, f = !0))
                    }), d || (p.title = p.topic), p.title = o.truncateHtml(p.title, 65), p.anchor && p.anchor.length > 0 && (p.anchor = "« " + p.anchor), p.desc === t && (p.desc = "<mark>" + t + "</mark>"), i = o.buildSearchItem(p), c += i
                }), s.innerHTML = c, i.classList.add("u-hide"), r.classList.remove("u-hide")) : (c = "<p> Sorry. No results found for search term: <mark>" + t + "</mark></p>", a.innerHTML = c, i.classList.remove("u-hide"), r.classList.add("u-hide")))
            })
        },
        initialize: function() {
            var e = this,
                t = document.querySelector("#siteSearch"),
                n = document.querySelector(".dx-search-panel"),
                r = document.querySelector(".dx-search-panel-overlay"),
                i = document.getElementById("siteQ"),
                m = 5,
                g = function() {
                    i.value.length > 0 ? (d.style.opacity = "1", f.classList.remove("u-hide"), e.updateSearchResultsView(i.value, m, s, c), o.classList.add("u-hide"), a.classList.remove("u-hide")) : (m = 5, d.style.opacity = "0.5", f.classList.add("u-hide"), a.classList.add("u-hide"), o.classList.remove("u-hide"), p.classList.add("u-hide"), i.focus()), e.handleQueryParams(i.value)
                };
            return function() {
                }(),
                function() {
                    var e, t = document.getElementsByClassName("trigger-clear"),
                        n = function(e) {
                            e.preventDefault(), m = 5, i.value = "", g(), i.focus()
                        },
                        r = function(e) {
                            13 === e.keyCode && (e.preventDefault(), m = 5, i.value = "", g(), i.focus())
                        };
                    for (e = 0; e < t.length; e++) t[e].addEventListener("click", n), t[e].addEventListener("keyup", r)
                }(),
                function() {
                    var t, n, r = function(n) {
                            n.preventDefault(), t = this.dataset.search || "", e.appendDefaultQueries(i, t), g()
                        },
                        o = function(n) {
                            13 === n.keyCode && (n.preventDefault(), t = this.dataset.search || "", e.appendDefaultQueries(i, t), g())
                        };
                }(),
                function() {

                }(),
                function() {
                    var t = window.location.href,
                        o = /^([\w\s\/\-?.+!*'(),%:@=&]*)$/,
                        a = "";
                    t.includes("?q=") && (a = decodeURIComponent(t.split("?q=")[1]), o.test(a) && (i.value = a, e.showSearchPanel(n, r), g(), i.focus()))
                }(), e
        }
    }
}), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
    var n, r = t || window;
    for (n = 0; n < this.length; n++) e.call(r, this[n], n, this)
}), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    if (!document.documentElement.contains(t)) return null;
    do {
        if (t.matches(e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
}), requirejs.config({
    paths: {
        jquery: "../components/jquery/dist/jquery.min"
    },
    shim: {
        jquery: {
            exports: "jQuery"
        }
    }
}), define("nav", ["jquery"], function(e) {
    var t = !1,
        n = e(".dx-main-nav"),
        r = "tip-nav2",
        i = r + "-active",
        o = i + "-hash",
        a = i + "-parent";
    return {
        scrollActiveNavIntoView: function() {
            var e = document.querySelector("." + r),
                t = document.querySelector("." + i);
            t && (t.scrollIntoView(), setTimeout(function() {
                e.scrollBy(0, -25)
            }, 500))
        },
        showActiveNav: function() {
            var t, o, s = /\/$/,
                c = /(_request|_response|_parameters)$/,
                l = n.find("." + r + " a");
            l.closest("li").first().hasClass(i) || (t = window.location.href.replace(s, "").replace(c, ""), l = l.filter(function(e, n) {
                return (n.href || "").replace(s, "") === t
            }).last(), l.length && (o = l.closest("li").addClass(i), o.parents("li").addClass(a).each(function(t, n) {
                var r = e(n);
                r.children('a[href*="#"]')[0] && r.addClass(i)
            }), o.closest("ul").filter(function(e, t) {
                return /dx-nav-[345]/.test(t.className) ? t : ""
            })))
        },
        showActiveLeftNavHash: function(t) {
            var r, s, c, l, u = window.location.hash;
            t ? u = t.target.location.hash : (e("body").hasClass("dx-apiref") && (u = void 0), e(window).on("hashchange", this.showActiveLeftNavHash)), u && (s = window.location.pathname + u, c = n.find("li").has('a[href$="' + s + '"]').last(), l = n.find("li").has('a[href$="' + u + '"]').last(), r = 0 === c.length ? l : c, r.length && (n.find("." + a).removeClass(a).end().find("." + i).removeClass(i).end().find("." + o).removeClass(o), r.addClass(o + " " + i).parents("li").addClass(a + " " + i)))
        },
        showActiveLeftNav: function() {
            var e = document.querySelector("." + r);
            e && (function() {
                e.querySelectorAll("." + i).forEach(function(e) {
                    e.classList.remove(i, o)
                })
            }(), function() {
                function n(e) {
                    e && (e.classList.add(a), n(e.parentElement.closest("li")))
                }
                var s = window.location.hash;
                e.querySelectorAll("a").forEach(function(e) {
                    var a = e.parentElement,
                        c = a.parentElement.closest("li");
                    e.hash && (t = !0, e.classList.add(r + "-sub-hash"), a.classList.add(r + "-hash"), c.classList.add(r + "-hash-parent")), s && e.hash === s && a.classList.add(o), e.pathname.replace(/([^\/])$/, "$1/") === window.location.pathname && (a.classList.add(i), n(a.parentElement.closest("li")))
                })
            }())
        },
        watchLeftNav: function() {
            var e = this.showActiveLeftNav;
            e(), window.addEventListener("hashchange", e)
        },
        watchAnchorPosition: function() {
            function e(e) {
                for (var t = e, n = 0; null !== t;) n += t.offsetTop, t = t.parentElement;
                return n
            }

            function n(e, t) {
                var n = document.querySelector('a[href="' + i + "#" + e + '"]');
                n && n.parentElement.classList.remove(t)
            }

            function r() {
                var t, r, c, l, u = a.scrollTop,
                    d = document.querySelectorAll("h2.dx-anchor"),
                    f = e(d[0]) - 100,
                    p = 0,
                    h = 0;
                for (h; h < d.length; h++)
                    if (t = d[h], r = t.id, c = e(t) - 100, p = d[h + 1] ? e(d[h + 1]) - 100 : h > 0 ? e(document.querySelector(".footer")) - 100 : 0, u > c && u <= p) {
                        if (s === r) return;
                        if (s && n(s, o), l = document.querySelector('a[href="' + i + "#" + r + '"]')) {
                            if ("true" === l.getAttribute("aria-hidden")) return s = null, void history.replaceState(null, null, "#");
                            l.parentElement.classList.add(o)
                        }
                        s = r, history.replaceState(null, null, "#" + r)
                    } else if (u < f) {
                    if (null === s) return;
                    n(s, o), s = null, history.replaceState(null, null, "#")
                }
            }
            var i = window.location.pathname,
                a = document.querySelector(".dx-main"),
                s = null;
            t && (a.addEventListener("touchmove", r, function() {
                var e, t = !1;
                try {
                    e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = {
                                passive: !0
                            }
                        }
                    }), window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                } catch (e) {}
                return t
            }()), a.addEventListener("scroll", r, !1))
        }
    }
}), define("api", [], function() {
    return {
        changeVersion: function() {
            var e = function(e) {
                    var t = /v(\d+)/,
                        n = window.location && window.location.pathname,
                        r = e.target && e.target.value;
                    n.match(t) && window.location.replace(window.location.origin + n.replace(t, r))
                },
                t = document.querySelector(".version-select");
            t && (t.onchange = e)
        }
    }
});
var slice = Array.prototype.slice,
    _focusableElementsString = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "object", "embed", "[contenteditable]"].join(","),
    InertRoot = function() {
        function e(t, n) {
            _classCallCheck(this, e), this._inertManager = n, this._rootElement = t, this._managedNodes = new Set([]), this._rootElement.hasAttribute("aria-hidden") && (this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden")), this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, {
                attributes: !0,
                childList: !0,
                subtree: !0
            })
        }
        return _createClass(e, [{
            key: "destructor",
            value: function() {
                this._observer.disconnect(), this._observer = null, this._rootElement && (this.hasSavedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this.savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._rootElement = null, this._managedNodes.forEach(function(e) {
                    this._unmanageNode(e.node)
                }, this), this._managedNodes = null, this._inertManager = null
            }
        }, {
            key: "_makeSubtreeUnfocusable",
            value: function(e) {
                var t = this;
                composedTreeWalk(e, function(e) {
                    return t._visitNode(e)
                });
                var n = document.activeElement;
                if (!document.body.contains(e)) {
                    for (var r = e, i = void 0; r;) {
                        if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            i = r;
                            break
                        }
                        r = r.parentNode
                    }
                    i && (n = i.activeElement)
                }
                e.contains(n) && (n.blur(), n === document.activeElement && document.body.focus())
            }
        }, {
            key: "_visitNode",
            value: function(e) {
                e.nodeType === Node.ELEMENT_NODE && (e !== this._rootElement && e.hasAttribute("inert") && this._adoptInertRoot(e), (e.matches(_focusableElementsString) || e.hasAttribute("tabindex")) && this._manageNode(e))
            }
        }, {
            key: "_manageNode",
            value: function(e) {
                var t = this._inertManager.register(e, this);
                this._managedNodes.add(t)
            }
        }, {
            key: "_unmanageNode",
            value: function(e) {
                var t = this._inertManager.deregister(e, this);
                t && this._managedNodes.delete(t)
            }
        }, {
            key: "_unmanageSubtree",
            value: function(e) {
                var t = this;
                composedTreeWalk(e, function(e) {
                    return t._unmanageNode(e)
                })
            }
        }, {
            key: "_adoptInertRoot",
            value: function(e) {
                var t = this._inertManager.getInertRoot(e);
                t || (this._inertManager.setInert(e, !0), t = this._inertManager.getInertRoot(e)), t.managedNodes.forEach(function(e) {
                    this._manageNode(e.node)
                }, this)
            }
        }, {
            key: "_onMutation",
            value: function(e, t) {
                e.forEach(function(e) {
                    var t = e.target;
                    if ("childList" === e.type) slice.call(e.addedNodes).forEach(function(e) {
                        this._makeSubtreeUnfocusable(e)
                    }, this), slice.call(e.removedNodes).forEach(function(e) {
                        this._unmanageSubtree(e)
                    }, this);
                    else if ("attributes" === e.type)
                        if ("tabindex" === e.attributeName) this._manageNode(t);
                        else if (t !== this._rootElement && "inert" === e.attributeName && t.hasAttribute("inert")) {
                        this._adoptInertRoot(t);
                        var n = this._inertManager.getInertRoot(t);
                        this._managedNodes.forEach(function(e) {
                            t.contains(e.node) && n._manageNode(e.node)
                        })
                    }
                }, this)
            }
        }, {
            key: "managedNodes",
            get: function() {
                return new Set(this._managedNodes)
            }
        }, {
            key: "hasSavedAriaHidden",
            get: function() {
                return "_savedAriaHidden" in this
            }
        }, {
            key: "savedAriaHidden",
            set: function(e) {
                this._savedAriaHidden = e
            },
            get: function() {
                return this._savedAriaHidden
            }
        }]), e
    }(),
    InertNode = function() {
        function e(t, n) {
            _classCallCheck(this, e), this._node = t, this._overrodeFocusMethod = !1, this._inertRoots = new Set([n]), this._destroyed = !1, this.ensureUntabbable()
        }
        return _createClass(e, [{
            key: "destructor",
            value: function() {
                this._throwIfDestroyed(), this._node && (this.hasSavedTabIndex ? this._node.setAttribute("tabindex", this.savedTabIndex) : this._node.removeAttribute("tabindex"), this._overrodeFocusMethod && delete this._node.focus), this._node = null, this._inertRoots = null, this._destroyed = !0
            }
        }, {
            key: "_throwIfDestroyed",
            value: function() {
                if (this.destroyed) throw new Error("Trying to access destroyed InertNode")
            }
        }, {
            key: "ensureUntabbable",
            value: function() {
                var e = this.node;
                if (e.matches(_focusableElementsString)) {
                    if (-1 === e.tabIndex && this.hasSavedTabIndex) return;
                    e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex), e.setAttribute("tabindex", "-1"), e.nodeType === Node.ELEMENT_NODE && (e.focus = function() {}, this._overrodeFocusMethod = !0)
                } else e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex, e.removeAttribute("tabindex"))
            }
        }, {
            key: "addInertRoot",
            value: function(e) {
                this._throwIfDestroyed(), this._inertRoots.add(e)
            }
        }, {
            key: "removeInertRoot",
            value: function(e) {
                this._throwIfDestroyed(), this._inertRoots.delete(e), 0 === this._inertRoots.size && this.destructor()
            }
        }, {
            key: "destroyed",
            get: function() {
                return this._destroyed
            }
        }, {
            key: "hasSavedTabIndex",
            get: function() {
                return "_savedTabIndex" in this
            }
        }, {
            key: "node",
            get: function() {
                return this._throwIfDestroyed(), this._node
            }
        }, {
            key: "savedTabIndex",
            set: function(e) {
                this._throwIfDestroyed(), this._savedTabIndex = e
            },
            get: function() {
                return this._throwIfDestroyed(), this._savedTabIndex
            }
        }]), e
    }(),
    InertManager = function() {
        function e(t) {
            if (_classCallCheck(this, e), !t) throw new Error("Missing required argument; InertManager needs to wrap a document.");
            this._document = t, this._managedNodes = new Map, this._inertRoots = new Map, this._observer = new MutationObserver(this._watchForInert.bind(this)), addInertStyle(t.head || t.body || t.documentElement), "loading" === t.readyState ? t.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded()
        }
        return _createClass(e, [{
            key: "setInert",
            value: function(e, t) {
                if (t) {
                    if (this._inertRoots.has(e)) return;
                    var n = new InertRoot(e, this);
                    if (e.setAttribute("inert", ""), this._inertRoots.set(e, n), !this._document.body.contains(e))
                        for (var r = e.parentNode; r;) 11 === r.nodeType && addInertStyle(r), r = r.parentNode
                } else {
                    if (!this._inertRoots.has(e)) return;
                    this._inertRoots.get(e).destructor(), this._inertRoots.delete(e), e.removeAttribute("inert")
                }
            }
        }, {
            key: "getInertRoot",
            value: function(e) {
                return this._inertRoots.get(e)
            }
        }, {
            key: "register",
            value: function(e, t) {
                var n = this._managedNodes.get(e);
                return void 0 !== n ? n.addInertRoot(t) : n = new InertNode(e, t), this._managedNodes.set(e, n), n
            }
        }, {
            key: "deregister",
            value: function(e, t) {
                var n = this._managedNodes.get(e);
                return n ? (n.removeInertRoot(t), n.destroyed && this._managedNodes.delete(e), n) : null
            }
        }, {
            key: "_onDocumentLoaded",
            value: function() {
                slice.call(this._document.querySelectorAll("[inert]")).forEach(function(e) {
                    this.setInert(e, !0)
                }, this), this._observer.observe(this._document.body, {
                    attributes: !0,
                    subtree: !0,
                    childList: !0
                })
            }
        }, {
            key: "_watchForInert",
            value: function(e, t) {
                e.forEach(function(e) {
                    switch (e.type) {
                        case "childList":
                            slice.call(e.addedNodes).forEach(function(e) {
                                if (e.nodeType === Node.ELEMENT_NODE) {
                                    var t = slice.call(e.querySelectorAll("[inert]"));
                                    e.matches("[inert]") && t.unshift(e), t.forEach(function(e) {
                                        this.setInert(e, !0)
                                    }, this)
                                }
                            }, this);
                            break;
                        case "attributes":
                            if ("inert" !== e.attributeName) return;
                            var t = e.target,
                                n = t.hasAttribute("inert");
                            this.setInert(t, n)
                    }
                }, this)
            }
        }]), e
    }(),
    inertManager = new InertManager(document);
Object.defineProperty(Element.prototype, "inert", {
        enumerable: !0,
        get: function() {
            return this.hasAttribute("inert")
        },
        set: function(e) {
            inertManager.setInert(this, e)
        }
    }), define("inert", function() {}),
    function() {
        "use strict";

        function e(e) {
            if ("string" != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function t(e) {
            return "string" != typeof e && (e = e.toString()), e
        }

        function n(e) {
            this.map = {};
            var t = this;
            e instanceof n ? e.forEach(function(e, n) {
                n.forEach(function(n) {
                    t.append(e, n)
                })
            }) : e && Object.getOwnPropertyNames(e).forEach(function(n) {
                t.append(n, e[n])
            })
        }

        function r(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function i(e) {
            return new fetch.Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function o(e) {
            var t = new FileReader;
            return t.readAsArrayBuffer(e), i(t)
        }

        function a(e) {
            var t = new FileReader;
            return t.readAsText(e), i(t)
        }

        function s() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, "string" == typeof e) this._bodyText = e;
                else if (h.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (h.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else {
                    if (e) throw new Error("unsupported BodyInit type");
                    this._bodyText = ""
                }
            }, h.blob ? (this.blob = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return fetch.Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this.blob().then(o)
            }, this.text = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return a(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return fetch.Promise.resolve(this._bodyText)
            }) : this.text = function() {
                var e = r(this);
                return e || fetch.Promise.resolve(this._bodyText)
            }, h.formData && (this.formData = function() {
                return this.text().then(u)
            }), this.json = function() {
                return this.text().then(function(e) {
                    return JSON.parse(e)
                })
            }, this
        }

        function c(e) {
            var t = e.toUpperCase();
            return m.indexOf(t) > -1 ? t : e
        }

        function l(e, t) {
            if (t = t || {}, this.url = e, this.credentials = t.credentials || "omit", this.headers = new n(t.headers), this.method = c(t.method || "GET"), this.mode = t.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && t.body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(t.body)
        }

        function u(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            }), t
        }

        function d(e) {
            var t = new n;
            return e.getAllResponseHeaders().trim().split("\n").forEach(function(e) {
                var n = e.trim().split(":"),
                    r = n.shift().trim(),
                    i = n.join(":").trim();
                t.append(r, i)
            }), t
        }

        function f() {
            return g && !/^(get|post|head|put|delete|options)$/i.test(this.method) ? (this.usingActiveXhr = !0, new ActiveXObject("Microsoft.XMLHTTP")) : new XMLHttpRequest
        }

        function p(e, t) {
            t || (t = {}), this._initBody(e), this.type = "default", this.url = null, this.status = t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText, this.headers = t.headers instanceof n ? t.headers : new n(t.headers), this.url = t.url || ""
        }
        if (!self.fetch) {
            n.prototype.append = function(n, r) {
                n = e(n), r = t(r);
                var i = this.map[n];
                i || (i = [], this.map[n] = i), i.push(r)
            }, n.prototype.delete = function(t) {
                delete this.map[e(t)]
            }, n.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }, n.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }, n.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, n.prototype.set = function(n, r) {
                this.map[e(n)] = [t(r)]
            }, n.prototype.forEach = function(e) {
                var t = this;
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    e(n, t.map[n])
                })
            };
            var h = {
                    blob: "FileReader" in self && "Blob" in self && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in self
                },
                m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"],
                g = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
            s.call(l.prototype), s.call(p.prototype), self.Headers = n, self.Request = l, self.Response = p, self.fetch = function(e, t) {
                var n;
                return n = l.prototype.isPrototypeOf(e) && !t ? e : new l(e, t), new fetch.Promise(function(e, t) {
                    function r() {
                        return "responseURL" in o ? o.responseURL : /^X-Request-URL:/m.test(o.getAllResponseHeaders()) ? o.getResponseHeader("X-Request-URL") : void 0
                    }

                    function i() {
                        if (4 === o.readyState) {
                            var n = 1223 === o.status ? 204 : o.status;
                            if (n < 100 || n > 599) return void t(new TypeError("Network request failed"));
                            var i = {
                                    status: n,
                                    statusText: o.statusText,
                                    headers: d(o),
                                    url: r()
                                },
                                a = "response" in o ? o.response : o.responseText;
                            e(new p(a, i))
                        }
                    }
                    var o = f();
                    "cors" === n.credentials && (o.withCredentials = !0), o.onreadystatechange = i, self.usingActiveXhr || (o.onload = i, o.onerror = function() {
                        t(new TypeError("Network request failed"))
                    }), o.open(n.method, n.url, !0), "responseType" in o && h.blob && (o.responseType = "blob"), n.headers.forEach(function(e, t) {
                        t.forEach(function(t) {
                            o.setRequestHeader(e, t)
                        })
                    }), o.send(void 0 === n._bodyInit ? null : n._bodyInit)
                })
            }, fetch.Promise = self.Promise, self.fetch.polyfill = !0
        }
    }(), define("fetch", function() {}),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define("promise", t) : t()
    }(0, function() {
        "use strict";

        function e(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n
                })
            }, function(n) {
                return t.resolve(e()).then(function() {
                    return t.reject(n)
                })
            })
        }

        function t() {}

        function n(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        }

        function r(e) {
            if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
        }

        function i(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0, r._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null === n) return void(1 === e._state ? o : a)(t.promise, e._value);
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void a(t.promise, e)
                }
                o(t.promise, r)
            })
        }

        function o(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var i = t.then;
                    if (t instanceof r) return e._state = 3, e._value = t, void s(e);
                    if ("function" == typeof i) return void l(n(i, t), e)
                }
                e._state = 1, e._value = t, s(e)
            } catch (t) {
                a(e, t)
            }
        }

        function a(e, t) {
            e._state = 2, e._value = t, s(e)
        }

        function s(e) {
            2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
                e._handled || r._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
            e._deferreds = null
        }

        function c(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function l(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, o(t, e))
                }, function(e) {
                    n || (n = !0, a(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, a(t, e)
            }
        }
        var u = setTimeout;
        r.prototype.catch = function(e) {
            return this.then(null, e)
        }, r.prototype.then = function(e, n) {
            var r = new this.constructor(t);
            return i(this, new c(e, n, r)), r
        }, r.prototype.finally = e, r.all = function(e) {
            return new r(function(t, n) {
                function r(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s) return void s.call(a, function(t) {
                                r(e, t)
                            }, n)
                        }
                        i[e] = a, 0 == --o && t(i)
                    } catch (e) {
                        n(e)
                    }
                }
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return t([]);
                for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a])
            })
        }, r.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                t(e)
            })
        }, r.reject = function(e) {
            return new r(function(t, n) {
                n(e)
            })
        }, r.race = function(e) {
            return new r(function(t, n) {
                for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
            })
        }, r._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(e) {
            u(e, 0)
        }, r._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        var d = function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("unable to locate global object")
        }();
        "Promise" in d ? d.Promise.prototype.finally || (d.Promise.prototype.finally = e) : d.Promise = r
    }), requirejs.config({
        paths: {
            api: "api",
            dx: "../components/dx/js/dx",
            dxh: "../components/dx/js/dx-highlight",
            dxl: "../components/dx/js/dx-lang-switcher",
            dxsp: "../components/dx/js/dx-search-panel",
            "dx-algolia": "../components/dx/js/dx-algolia",
            jquery: "../components/jquery/dist/jquery.min",
            inert: "../components/dx/vendor/wicg-inert/inert",
            fetch: "../components/fetch-polyfill/fetch",
            promise: "../components/promise-polyfill/dist/polyfill",
            ensighten: "ensighten",
            nav: "nav",
            session: "session",
            tippy: "tippy"
        },
        shim: {
            jquery: {
                exports: "jQuery"
            }
        }
    }), require(["jquery", "dx", "ensighten", "dxh", "dxl", "dxsp", "nav", "api", "inert", "fetch", "promise"], function(e, t, n, r, i, o, a, s) {
        var c = e('[data-js*="auth-btn"]');
        ({
            updateLoginButtons: function() {
                var t = document.location.href;
                t.match(/\.qa\.sigesa\.com/) && t.match(/^https:\/\/www\./) && (t = "https://" + t.substring(12)), t = encodeURIComponent(t), c.attr("href", function(n, r) {
                    e(this).attr("href", r.replace(/PAGEURL/g, t))
                })
            },
            initialize: function() {
                var c = document.body.classList.contains("dx-apiref");
                this.updateLoginButtons(), t.showLoader(), c ? (s.changeVersion(), a.showActiveLeftNav(), a.showActiveLeftNavHash()) : a.watchLeftNav(), t.emphasizeExternalLinks(), t.mobilizeNavTitles(), t.toggleMobileNavs(), t.hideHeaderOnScroll(), t.showProfileDropdownLinks(), t.addAnchorLinks(), t.setCopyright(), e(function() {
                    o.initialize(), i.initialize(), r.highlightCodeBlocks(), r.addCopyButtonToElements(".content pre"), t.scrollToHash(), c || a.watchAnchorPosition(), r.highlightBlockquotes(), r.markSearchKeywords(), a.scrollActiveNavIntoView(), n.initialize()
                }), t.loadAnalytics(), t.notifyEventForHashRedirect(), t.handleGDPR()
            }
        }).initialize()
    }), define("master", function() {});
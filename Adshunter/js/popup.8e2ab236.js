(function(e) {
    function t(t) {
        for (var o, i, c = t[0], l = t[1], s = t[2], d = 0, f = []; d < c.length; d++) i = c[d], Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]), r[i] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        u && u(t);
        while (f.length) f.shift()();
        return a.push.apply(a, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, c = 1; c < n.length; c++) {
                var l = n[c];
                0 !== r[l] && (o = !1)
            }
            o && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            popup: 0
        },
        a = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var s = 0; s < c.length; s++) t(c[s]);
    var u = l;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("0a3d")
    },
    "0a3d": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o = n("2b0e"),
            r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("Wrapper", [n("div", [n("div", {
                    staticStyle: {
                        "text-align": "center",
                        margin: "0"
                    }
                }, [n("img", {
                    attrs: {
                        src: "/icons/MinerADS.png"
                    }
                })]), n("div", {
                    staticClass: "con-ad"
                }, [n("div", {
                    staticClass: "ad-div"
                }, [n("div", [n("div", {
                    staticClass: "title-ad"
                }, [e._v("encontrar an??ncios")]), n("div", {
                    staticClass: "btnUrlFb",
                    on: {
                        click: e.urlFb
                    }
                }, [e._v("Ir para Facebook")])]), n("div", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("div", {
                    staticClass: "title-ad"
                }, [e._v("rolagem altom??tica")]), n("el-switch", {
                    staticClass: "switch-ad",
                    attrs: {
                        "active-color": "#b469db",
                        "inactive-color": "#ddd"
                    },
                    model: {
                        value: e.value,
                        callback: function(t) {
                            e.value = t
                        },
                        expression: "value"
                    }
                })], 1)]), n("div", {
                    staticClass: "num-div"
                }, [n("div", {
                    staticStyle: {
                        "border-bottom": "1px solid #efefef"
                    }
                }, [n("div", {
                    staticClass: "mes-ad"
                }, [e._v(" Total de an??ncios encontrados: ")]), n("div", {
                    staticClass: "num-ad allAds"
                }, [e._v(" 0 ")])]), n("div", {
                    staticStyle: {
                        "border-bottom": "1px solid #efefef",
                        "margin-top": "20px"
                    }
                }, [n("div", {
                    staticClass: "mes-ad"
                }, [e._v(" an??ncios di??rios: ")]), n("div", {
                    staticClass: "num-ad todayAds"
                }, [e._v(" 0 ")])]), n("div", {
                    staticClass: "btnCl"
                }, [n("button", [e._v(" Ver an??ncios coletados ")])])])])])])], 1)
            },
            a = [],
            i = (n("4de4"), n("d3b7"), n("0d03"), {
                data: function() {
                    return {
                        value: !1
                    }
                },
                methods: {
                    urlFb: function() {
                        window.open("https://www.facebook.com", "_blank")
                    }
                },
                mounted: function() {
                    var e = this;
                    chrome.storage.local.get("open", (function(t) {
                        t.open ? e.value = t.open : e.value = !1, chrome.tabs.query({
                            active: !0,
                            currentWindow: !0
                        }, (function(t) {
                            chrome.tabs.sendMessage(t[0].id, {
                                cmd: "open",
                                value: e.value
                            })
                        }))
                    })), chrome.storage.local.get(null, (function(e) {
                        console.log(e);
                        var t = document.querySelector(".todayAds"),
                            n = document.querySelector(".allAds"),
                            o = e.fbSponsoredAds.filter((function(e, t) {
                                if ((Date.parse(new Date) - e.time) / 36e5 < 24) return e
                            }));
                        t.innerText = o.length, n.innerText = e.fbSponsoredAds.length
                    }));
                    var t = document.querySelector(".btnCl button");
                    t.addEventListener("click", (function() {
                        chrome.tabs.create({
                            url: chrome.runtime.getURL("adIndex.html")
                        })
                    })), chrome.runtime.onMessage.addListener((function(e) {
                        "setLo" == e.cmd && chrome.storage.local.get(null, (function(e) {
                            console.log(e);
                            var t = document.querySelector(".todayAds"),
                                n = document.querySelector(".allAds"),
                                o = e.fbSponsoredAds.filter((function(e, t) {
                                    if ((Date.parse(new Date) - e.time) / 36e5 < 24) return e
                                }));
                            t.innerText = o.length, n.innerText = e.fbSponsoredAds.length
                        }))
                    }))
                },
                watch: {
                    value: function() {
                        var e = this;
                        chrome.tabs.query({
                            active: !0,
                            currentWindow: !0
                        }, (function(t) {
                            chrome.tabs.sendMessage(t[0].id, {
                                cmd: "open",
                                value: e.value
                            })
                        }))
                    }
                }
            }),
            c = i,
            l = (n("5df5"), n("2877")),
            s = Object(l["a"])(c, r, a, !1, null, null, null),
            u = s.exports,
            d = n("5c96"),
            f = n.n(d);
        n("0fae");
        o["default"].use(f.a), new o["default"]({
            el: "#app",
            render: function(e) {
                return e(u)
            }
        })
    },
    "5df5": function(e, t, n) {
        "use strict";
        n("7c00")
    },
    "7c00": function(e, t, n) {}
});
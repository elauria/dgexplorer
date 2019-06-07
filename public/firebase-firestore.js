!function(exports, firebase) {
    // "use strict";
    try {
        var LogLevel;
        firebase = firebase && firebase.hasOwnProperty("default") ? firebase.default : firebase, function(e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(LogLevel || (LogLevel = {}));
            var defaultLogLevel = LogLevel.INFO, defaultLogHandler = function(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                if (!(t < e.logLevel)) {
                    var i = (new Date).toISOString();
                    switch (t) {
                    case LogLevel.DEBUG:
                    case LogLevel.VERBOSE:
                        console.log.apply(console, ["[" + i + "]  " + e.name + ":"].concat(n));
                        break;
                    case LogLevel.INFO:
                        console.info.apply(console, ["[" + i + "]  " + e.name + ":"].concat(n));
                        break;
                    case LogLevel.WARN:
                        console.warn.apply(console, ["[" + i + "]  " + e.name + ":"].concat(n));
                        break;
                    case LogLevel.ERROR:
                        console.error.apply(console, ["[" + i + "]  " + e.name + ":"].concat(n));
                        break;
                    default:
                        throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                    }
                }
            }, Logger = function() {
                function e(e) {
                    this.name = e, this._logLevel = defaultLogLevel, this._logHandler = defaultLogHandler
                }
                return Object.defineProperty(e.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(e) {
                        if (!(e in LogLevel))
                            throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(e) {
                        if ("function" != typeof e)
                            throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(e))
                }, e.prototype.log = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(e))
                }, e.prototype.info = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    this._logHandler.apply(this, [this, LogLevel.INFO].concat(e))
                }, e.prototype.warn = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    this._logHandler.apply(this, [this, LogLevel.WARN].concat(e))
                }, e.prototype.error = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    this._logHandler.apply(this, [this, LogLevel.ERROR].concat(e))
                }, e
            }(), extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            };
            function __extends(e, t) {
                function n() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            function __awaiter(e, t, n, r) {
                return new (n || (n = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function u(e) {
                        e.done ? i(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(a, s)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }
            function __generator(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw : s(1),
                    return : s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;
                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a;)
                                try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return": o[0] ? "throw": "next"])&&!(i = i.call(r, o[1])).done)
                                        return i;
                                        switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                        }
                                        o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1]: void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var commonjsGlobal = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
            function createCommonjsModule(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var dist = createCommonjsModule(function(module) {
                (function() {
                    var g, goog = goog || {}, k = this;
                    function l(e) {
                        return "string" == typeof e
                    }
                    function n(e, t) {
                        e = e.split("."), t = t || k;
                        for (var n = 0; n < e.length; n++)
                            if (null == (t = t[e[n]]))
                                return null;
                        return t
                    }
                    function aa() {}
                    function ba(e) {
                        var t = typeof e;
                        if ("object" == t) {
                            if (!e)
                                return "null";
                            if (e instanceof Array)
                                return "array";
                            if (e instanceof Object)
                                return t;
                            var n = Object.prototype.toString.call(e);
                            if ("[object Window]" == n)
                                return "object";
                            if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice")
                                )return "array";
                            if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable&&!e.propertyIsEnumerable("call")
                                )return "function"
                        } else if ("function" == t && void 0 === e.call)
                            return "object";
                        return t
                    }
                    function p(e) {
                        return "array" == ba(e)
                    }
                    function ca(e) {
                        var t = ba(e);
                        return "array" == t || "object" == t && "number" == typeof e.length
                    }
                    function da(e) {
                        return "function" == ba(e)
                    }
                    function ea(e) {
                        var t = typeof e;
                        return "object" == t && null != e || "function" == t
                    }
                    var q = "closure_uid_" + (1e9 * Math.random()>>>0), fa = 0;
                    function ha(e, t, n) {
                        return e.call.apply(e.bind, arguments)
                    }
                    function ia(e, t, n) {
                        if (!e)
                            throw Error();
                        if (2 < arguments.length) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                            }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                    function r(e, t, n) {
                        return (r = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia).apply(null, arguments)
                    }
                    function ja(e, t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var t = n.slice();
                            return t.push.apply(t, arguments), e.apply(this, t)
                        }
                    }
                    var t = Date.now || function() {
                        return + new Date
                    };
                    function u(e, t) {
                        function n() {}
                        n.prototype = t.prototype, e.H = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.Ib = function(e, n, r) {
                            for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++)
                                i[o - 2] = arguments[o];
                            return t.prototype[n].apply(e, i)
                        }
                    }
                    function ka(e) {
                        if (Error.captureStackTrace)
                            Error.captureStackTrace(this, ka);
                        else {
                            var t = Error().stack;
                            t && (this.stack = t)
                        }
                        e && (this.message = String(e))
                    }
                    function la(e, t) {
                        for (var n = "", r = (e = e.split("%s")).length - 1, i = 0; i < r; i++)
                            n += e[i] + (i < t.length ? t[i] : "%s");
                        ka.call(this, n + e[r])
                    }
                    function ma(e, t) {
                        throw new la("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1))
                    }
                    function w() {
                        0 != na && (pa[this[q] || (this[q]=++fa)] = this), this.i = this.i, this.m = this.m
                    }
                    u(ka, Error), ka.prototype.name = "CustomError", u(la, ka), la.prototype.name = "AssertionError";
                    var na = 0, pa = {};
                    w.prototype.i=!1, w.prototype.$ = function() {
                        if (!this.i && (this.i=!0, this.w(), 0 != na)) {
                            var e = this[q] || (this[q]=++fa);
                            if (0 != na && this.m && 0 < this.m.length)
                                throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                            delete pa[e]
                        }
                    }, w.prototype.w = function() {
                        if (this.m)
                            for (; this.m.length;)
                                this.m.shift()()
                    };
                    var qa = Array.prototype.indexOf ? function(e, t) {
                        return Array.prototype.indexOf.call(e, t, void 0)
                    }
                    : function(e, t) {
                        if (l(e))
                            return l(t) && 1 == t.length ? e.indexOf(t, 0) : - 1;
                        for (var n = 0; n < e.length; n++)
                            if (n in e && e[n] === t)
                                return n;
                        return - 1
                    }, ra = Array.prototype.forEach ? function(e, t, n) {
                        Array.prototype.forEach.call(e, t, n)
                    }
                    : function(e, t, n) {
                        for (var r = e.length, i = l(e) ? e.split("") : e, o = 0; o < r; o++)
                            o in i && t.call(n, i[o], o, e)
                    };
                    function sa(e) {
                        e: {
                            for (var t = ta, n = e.length, r = l(e) ? e.split("") : e, i = 0; i < n; i++)
                                if (i in r && t.call(void 0, r[i], i, e)) {
                                    t = i;
                                    break e
                                }
                            t =- 1
                        }
                        return 0 > t ? null : l(e) ? e.charAt(t) : e[t]
                    }
                    function ua(e) {
                        if (!p(e))
                            for (var t = e.length - 1; 0 <= t; t--)
                                delete e[t];
                        e.length = 0
                    }
                    function va(e) {
                        return Array.prototype.concat.apply([], arguments)
                    }
                    function wa(e) {
                        var t = e.length;
                        if (0 < t) {
                            for (var n = Array(t), r = 0; r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        return []
                    }
                    function xa(e) {
                        return /^[\s\xa0]*$/.test(e)
                    }
                    var ya = String.prototype.trim ? function(e) {
                        return e.trim()
                    }
                    : function(e) {
                        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
                    }, x;
                    function za(e, t) {
                        return e < t?-1 : e > t ? 1 : 0
                    }
                    e: {
                        var Aa = k.navigator;
                        if (Aa) {
                            var Ba = Aa.userAgent;
                            if (Ba) {
                                x = Ba;
                                break e
                            }
                        }
                        x = ""
                    }
                    function y(e) {
                        return - 1 != x.indexOf(e)
                    }
                    function Ca(e, t, n) {
                        for (var r in e)
                            t.call(n, e[r], r, e)
                    }
                    function Da(e) {
                        var t, n = [], r = 0;
                        for (t in e)
                            n[r++] = e[t];
                        return n
                    }
                    function Ea(e) {
                        var t, n = [], r = 0;
                        for (t in e)
                            n[r++] = t;
                        return n
                    }
                    function Fa(e) {
                        var t, n = {};
                        for (t in e)
                            n[t] = e[t];
                        return n
                    }
                    var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                    function Ha(e, t) {
                        for (var n, r, i = 1; i < arguments.length; i++) {
                            for (n in r = arguments[i])
                                e[n] = r[n];
                            for (var o = 0; o < Ga.length; o++)
                                n = Ga[o], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                    }
                    function Ia(e) {
                        return Ia[" "](e), e
                    }
                    function Ja(e, t) {
                        var n = Ka;
                        return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e)
                    }
                    Ia[" "] = aa;
                    var La = y("Opera"), z = y("Trident") || y("MSIE"), Ma = y("Edge"), Na = Ma || z, Oa = y("Gecko")&&!( - 1 != x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident") || y("MSIE"))&&!y("Edge"), Pa =- 1 != x.toLowerCase().indexOf("webkit")&&!y("Edge"), Ra, a;
                    function Qa() {
                        var e = k.document;
                        return e ? e.documentMode : void 0
                    }
                    e: {
                        var Sa = "", Ta = (a = x, Oa ? /rv:([^\);]+)(\)|;)/.exec(a) : Ma ? /Edge\/([\d\.]+)/.exec(a) : z ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a) : Pa ? /WebKit\/(\S+)/.exec(a) : La ? /(?:Version)[ \/]?(\S+)/.exec(a) : void 0);
                        if (Ta && (Sa = Ta ? Ta[1] : ""), z) {
                            var Ua = Qa();
                            if (null != Ua && Ua > parseFloat(Sa)) {
                                Ra = String(Ua);
                                break e
                            }
                        }
                        Ra = Sa
                    }
                    var Ka = {}, Wa;
                    function Va(e) {
                        return Ja(e, function() {
                            for (var t = 0, n = ya(String(Ra)).split("."), r = ya(String(e)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == t && o < i; o++) {
                                var a = n[o] || "", s = r[o] || "";
                                do {
                                    if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length)
                                        break;
                                    t = za(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || za(0 == a[2].length, 0 == s[2].length) || za(a[2], s[2]), a = a[3], s = s[3]
                                }
                                while (0 == t)
                                }
                            return 0 <= t
                        })
                    }
                    var Xa = k.document; Wa = Xa && z ? Qa() || ("CSS1Compat" == Xa.compatMode ? parseInt(Ra, 10) : 5) : void 0;
                    var Ya = Object.freeze || function(e) {
                        return e
                    }, Za=!z || 9 <= Number(Wa), $a = z&&!Va("9"), ab = function() {
                        if (!k.addEventListener ||!Object.defineProperty)
                            return !1;
                        var e=!1, t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e=!0
                            }
                        });
                        return k.addEventListener("test", aa, t), k.removeEventListener("test", aa, t), e
                    }();
                    function A(e, t) {
                        this.type = e, this.a = this.target = t, this.Ra=!0
                    }
                    function bb(e, t) {
                        if (A.call(this, e ? e.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1, this.pointerId = 0, this.pointerType = "", this.c = null, e) {
                            var n = this.type = e.type, r = e.changedTouches ? e.changedTouches[0]: null;
                            if (this.target = e.target || e.srcElement, this.a = t, t = e.relatedTarget) {
                                if (Oa) {
                                    e:
                                    {
                                        try {
                                            Ia(t.nodeName);
                                            var i=!0;
                                            break e
                                        } catch (e) {}
                                        i=!1
                                    }
                                    i || (t = null)
                                }
                            } else 
                                "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
                            this.relatedTarget = t, null === r ? (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = l(e.pointerType) ? e.pointerType : cb[e.pointerType] || "", this.c = e, e.defaultPrevented && this.b()
                        }
                    }
                    A.prototype.b = function() {
                        this.Ra=!1
                    }, u(bb, A);
                    var cb = Ya({
                        2: "touch",
                        3: "pen",
                        4: "mouse"
                    });
                    bb.prototype.b = function() {
                        bb.H.b.call(this);
                        var e = this.c;
                        if (e.preventDefault)
                            e.preventDefault();
                        else if (e.returnValue=!1, $a)
                            try {
                                (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) && (e.keyCode =- 1)
                        } catch (e) {}
                    };
                    var db = "closure_listenable_" + (1e6 * Math.random() | 0), eb = 0;
                    function fb(e, t, n, r, i) {
                        this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture=!!r, this.ga = i, this.key=++eb, this.Z = this.ba=!1
                    }
                    function gb(e) {
                        e.Z=!0, e.listener = null, e.proxy = null, e.src = null, e.ga = null
                    }
                    function hb(e) {
                        this.src = e, this.a = {}, this.b = 0
                    }
                    function jb(e, t) {
                        var n = t.type;
                        if (n in e.a) {
                            var r, i = e.a[n], o = qa(i, t);
                            (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (gb(t), 0 == e.a[n].length && (delete e.a[n], e.b--))
                        }
                    }
                    function ib(e, t, n, r) {
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i];
                            if (!o.Z && o.listener == t && o.capture==!!n && o.ga == r)
                                return i
                        }
                        return - 1
                    }
                    hb.prototype.add = function(e, t, n, r, i) {
                        var o = e.toString();
                        (e = this.a[o]) || (e = this.a[o] = [], this.b++);
                        var a = ib(e, t, r, i);
                        return - 1 < a ? (t = e[a], n || (t.ba=!1)) : ((t = new fb(t, this.src, o, !!r, i)).ba = n, e.push(t)), t
                    };
                    var kb = "closure_lm_" + (1e6 * Math.random() | 0), lb = {};
                    function nb(e, t, n, r, i) {
                        if (r && r.once)
                            return ob(e, t, n, r, i);
                        if (p(t)) {
                            for (var o = 0; o < t.length; o++)
                                nb(e, t[o], n, r, i);
                            return null
                        }
                        return n = pb(n), e && e[db] ? e.Ia(t, n, ea(r)?!!r.capture : !!r, i) : qb(e, t, n, !1, r, i)
                    }
                    function qb(e, t, n, r, i, o) {
                        if (!t)
                            throw Error("Invalid event type");
                        var a = ea(i)?!!i.capture : !!i, s = rb(e);
                        if (s || (e[kb] = s = new hb(e)), (n = s.add(t, n, r, a, o)).proxy)
                            return n;
                        if (r = sb(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener)
                            ab || (i = a), void 0 === i && (i=!1), e.addEventListener(t.toString(), r, i);
                        else if (e.attachEvent)
                            e.attachEvent(tb(t.toString()), r);
                        else {
                            if (!e.addListener ||!e.removeListener)
                                throw Error("addEventListener and attachEvent are unavailable.");
                                e.addListener(r)
                        }
                        return n
                    }
                    function sb() {
                        var e = ub, t = Za ? function(n) {
                            return e.call(t.src, t.listener, n)
                        }
                        : function(n) {
                            if (!(n = e.call(t.src, t.listener, n)))
                                return n
                        };
                        return t
                    }
                    function ob(e, t, n, r, i) {
                        if (p(t)) {
                            for (var o = 0; o < t.length; o++)
                                ob(e, t[o], n, r, i);
                            return null
                        }
                        return n = pb(n), e && e[db] ? e.Ja(t, n, ea(r)?!!r.capture : !!r, i) : qb(e, t, n, !0, r, i)
                    }
                    function vb(e, t, n, r, i) {
                        if (p(t))
                            for (var o = 0; o < t.length; o++)
                                vb(e, t[o], n, r, i);
                        else 
                            r = ea(r)?!!r.capture : !!r, n = pb(n), e && e[db] ? (e = e.f, (t = String(t).toString())in e.a && ( - 1 < (n = ib(o = e.a[t], n, r, i)) && (gb(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete e.a[t], e.b--)))) : e && (e = rb(e)) && (t = e.a[t.toString()], e =- 1, t && (e = ib(t, n, r, i)), (n =- 1 < e ? t[e] : null) && wb(n))
                    }
                    function wb(e) {
                        if ("number" != typeof e && e&&!e.Z) {
                            var t = e.src;
                            if (t && t[db])
                                jb(t.f, e);
                            else {
                                var n = e.type, r = e.proxy;
                                t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(tb(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = rb(t)) ? (jb(n, e), 0 == n.b && (n.src = null, t[kb] = null)) : gb(e)
                            }
                        }
                    }
                    function tb(e) {
                        return e in lb ? lb[e] : lb[e] = "on" + e
                    }
                    function xb(e, t, n, r) {
                        var i=!0;
                        if ((e = rb(e)) && (t = e.a[t.toString()]))
                            for (t = t.concat(), e = 0; e < t.length; e++) {
                                var o = t[e];
                                o && o.capture == n&&!o.Z && (o = yb(o, r), i = i&&!1 !== o)
                            }
                        return i
                    }
                    function yb(e, t) {
                        var n = e.listener, r = e.ga || e.src;
                        return e.ba && wb(e), n.call(r, t)
                    }
                    function ub(e, t) {
                        if (e.Z)
                            return !0;
                        if (!Za) {
                            var r = t || n("window.event");
                            t = new bb(r, this);
                            var i=!0;
                            if (!(0 > r.keyCode || void 0 != r.returnValue)) {
                                e:
                                {
                                    var o=!1;
                                    if (0 == r.keyCode)
                                        try {
                                            r.keyCode =- 1;
                                            break e
                                    } catch (e) {
                                        o=!0
                                    }(o || void 0 == r.returnValue) && (r.returnValue=!0)
                                }
                                for (r = [], o = t.a; o; o = o.parentNode)
                                    r.push(o);
                                for (e = e.type, o = r.length - 1; 0 <= o; o--) {
                                    t.a = r[o];
                                    var a = xb(r[o], e, !0, t);
                                    i = i && a
                                }
                                for (o = 0; o < r.length; o++)
                                    t.a = r[o], a = xb(r[o], e, !1, t), i = i && a
                            }
                            return i
                        }
                        return yb(e, new bb(t, this))
                    }
                    function rb(e) {
                        return (e = e[kb])instanceof hb ? e : null
                    }
                    var zb = "__closure_events_fn_" + (1e9 * Math.random()>>>0);
                    function pb(e) {
                        return da(e) ? e : (e[zb] || (e[zb] = function(t) {
                            return e.handleEvent(t)
                        }), e[zb])
                    }
                    function B() {
                        w.call(this), this.f = new hb(this), this.N = this, this.J = null
                    }
                    function Ab(e, t, n, r) {
                        if (!(t = e.f.a[String(t)]))
                            return !0;
                        t = t.concat();
                        for (var i=!0, o = 0; o < t.length; ++o) {
                            var a = t[o];
                            if (a&&!a.Z && a.capture == n) {
                                var s = a.listener, u = a.ga || a.src;
                                a.ba && jb(e.f, a), i=!1 !== s.call(u, r) && i
                            }
                        }
                        return i && 0 != r.Ra
                    }
                    function Bb(e) {
                        return !/^\s*$/.test(e) && /^[\],:{}\s\u2028\u2029]*$/.test(e.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
                    }
                    function Cb(a) {
                        if (a = String(a), Bb(a))
                            try {
                                return eval("(" + a + ")")
                        } catch (e) {}
                        throw Error("Invalid JSON string: " + a)
                    }
                    function Db(e) {
                        var t = [];
                        return Eb(new Fb, e, t), t.join("")
                    }
                    function Fb() {}
                    function Eb(e, t, n) {
                        if (null == t)
                            n.push("null");
                        else {
                            if ("object" == typeof t) {
                                if (p(t)) {
                                    var r = t;
                                    t = r.length, n.push("[");
                                    for (var i = "", o = 0; o < t; o++)
                                        n.push(i), Eb(e, r[o], n), i = ",";
                                    return void n.push("]")
                                }
                                if (!(t instanceof String || t instanceof Number || t instanceof Boolean)) {
                                    for (r in n.push("{"), i = "", t)
                                        Object.prototype.hasOwnProperty.call(t, r) && ("function" != typeof(o = t[r]) && (n.push(i), Gb(r, n), n.push(":"), Eb(e, o, n), i = ","));
                                    return void n.push("}")
                                }
                                t = t.valueOf()
                            }
                            switch (typeof t) {
                            case"string":
                                Gb(t, n);
                                break;
                            case"number":
                                n.push(isFinite(t)&&!isNaN(t) ? String(t) : "null");
                                break;
                            case"boolean":
                                n.push(String(t));
                                break;
                            case"function":
                                n.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof t)
                            }
                        }
                    }
                    u(B, w), B.prototype[db]=!0, g = B.prototype, g.addEventListener = function(e, t, n, r) {
                        nb(this, e, t, n, r)
                    }, g.removeEventListener = function(e, t, n, r) {
                        vb(this, e, t, n, r)
                    }, g.dispatchEvent = function(e) {
                        var t, n = this.J;
                        if (n)
                            for (t = []; n; n = n.J)
                                t.push(n);
                        n = this.N;
                        var r = e.type || e;
                        if (l(e))
                            e = new A(e, n);
                        else if (e instanceof A)
                            e.target = e.target || n;
                        else {
                            var i = e;
                            Ha(e = new A(r, n), i)
                        }
                        if (i=!0, t)
                            for (var o = t.length - 1; 0 <= o; o--) {
                                var a = e.a = t[o];
                                i = Ab(a, r, !0, e) && i
                            }
                        if (i = Ab(a = e.a = n, r, !0, e) && i, i = Ab(a, r, !1, e) && i, t)
                            for (o = 0; o < t.length; o++)
                                i = Ab(a = e.a = t[o], r, !1, e) && i;
                        return i
                    }, g.w = function() {
                        if (B.H.w.call(this), this.f) {
                            var e, t = this.f;
                            for (e in t.a) {
                                for (var n = t.a[e], r = 0; r < n.length; r++)
                                    gb(n[r]);
                                delete t.a[e], t.b--
                            }
                        }
                        this.J = null
                    }, g.Ia = function(e, t, n, r) {
                        return this.f.add(String(e), t, !1, n, r)
                    }, g.Ja = function(e, t, n, r) {
                        return this.f.add(String(e), t, !0, n, r)
                    };
                    var Hb = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "/": "\\/",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\v": "\\u000b"
                    }, Ib = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g: /[\\"\x00-\x1f\x7f-\xff]/g;
                    function Gb(e, t) {
                        t.push('"', e.replace(Ib, function(e) {
                            var t = Hb[e];
                            return t || (t = "\\u" + (65536 | e.charCodeAt(0)).toString(16).substr(1), Hb[e] = t), t
                        }), '"')
                    }
                    function Jb(e, t) {
                        this.c = e, this.f = t, this.b = 0, this.a = null
                    }
                    function Kb() {
                        this.b = this.a = null
                    }
                    Jb.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var e = this.a;
                            this.a = e.next, e.next = null
                        } else 
                            e = this.c();
                        return e
                    };
                    var Nb = new Jb(function() {
                        return new Lb
                    }, function(e) {
                        e.reset()
                    }), Rb, Tb;
                    function Ob() {
                        var e = Pb, t = null;
                        return e.a && (t = e.a, e.a = e.a.next, e.a || (e.b = null), t.next = null), t
                    }
                    function Lb() {
                        this.next = this.b = this.a = null
                    }
                    function Qb(e) {
                        k.setTimeout(function() {
                            throw e
                        }, 0)
                    }
                    function Sb() {
                        var e = k.MessageChannel;
                        if (void 0 === e && "undefined" != typeof window && window.postMessage && window.addEventListener&&!y("Presto") && (e = function() {
                            var e = document.createElement("IFRAME");
                            e.style.display = "none", e.src = "", document.documentElement.appendChild(e);
                            var t = e.contentWindow;
                            (e = t.document).open(), e.write(""), e.close();
                            var n = "callImmediate" + Math.random(), i = "file:" == t.location.protocol ? "*": t.location.protocol + "//" + t.location.host;
                            e = r(function(e) {
                                "*" != i && e.origin != i || e.data != n || this.port1.onmessage()
                            }, this), t.addEventListener("message", e, !1), this.port1 = {}, this.port2 = {
                                postMessage: function() {
                                    t.postMessage(n, i)
                                }
                            }
                        }), void 0 !== e&&!y("Trident")
                            &&!y("MSIE")) {
                            var t = new e, n = {}, i = n;
                            return t.port1.onmessage = function() {
                                if (void 0 !== n.next) {
                                    var e = (n = n.next).za;
                                    n.za = null, e()
                                }
                            }, function(e) {
                                i.next = {
                                    za: e
                                }, i = i.next, t.port2.postMessage(0)
                            }
                        }
                        return "undefined" != typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(e) {
                            var t = document.createElement("SCRIPT");
                            t.onreadystatechange = function() {
                                t.onreadystatechange = null, t.parentNode.removeChild(t), t = null, e(), e = null
                            }, document.documentElement.appendChild(t)
                        } : function(e) {
                            k.setTimeout(e, 0)
                        }
                    }
                    function Ub() {
                        if ( - 1 != String(k.Promise).indexOf("[native code]")) {
                            var e = k.Promise.resolve(void 0);
                            Tb = function() {
                                e.then(Vb)
                            }
                        } else 
                            Tb = function() {
                                var e = Vb;
                                !da(k.setImmediate) || k.Window && k.Window.prototype&&!y("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Rb || (Rb = Sb()), Rb(e)) : k.setImmediate(e)
                            }
                    }
                    Kb.prototype.add = function(e, t) {
                        var n = Nb.get();
                        n.set(e, t), this.b ? this.b.next = n : this.a = n, this.b = n
                    }, Lb.prototype.set = function(e, t) {
                        this.a = e, this.b = t, this.next = null
                    }, Lb.prototype.reset = function() {
                        this.next = this.b = this.a = null
                    };
                    var Wb=!1, Pb = new Kb;
                    function Vb() {
                        for (var e; e = Ob();) {
                            try {
                                e.a.call(e.b)
                            } catch (e) {
                                Qb(e)
                            }
                            var t = Nb;
                            t.f(e), 100 > t.b && (t.b++, e.next = t.a, t.a = e)
                        }
                        Wb=!1
                    }
                    function Xb(e, n) {
                        B.call(this), this.b = e || 1, this.a = n || k, this.c = r(this.qb, this), this.g = t()
                    }
                    function Yb(e) {
                        e.ea=!1, e.O && (e.a.clearTimeout(e.O), e.O = null)
                    }
                    function Zb(e, t, n) {
                        if (da(e))
                            n && (e = r(e, n));
                        else {
                            if (!e || "function" != typeof e.handleEvent)
                                throw Error("Invalid listener argument");
                            e = r(e.handleEvent, e)
                        }
                        return 2147483647 < Number(t)?-1 : k.setTimeout(e, t || 0)
                    }
                    function $b(e, t, n) {
                        w.call(this), this.f = null != n ? r(e, n) : e, this.c = t, this.b = r(this.kb, this), this.a = []
                    }
                    function ac(e) {
                        e.Y = Zb(e.b, e.c), e.f.apply(null, e.a)
                    }
                    function bc(e) {
                        w.call(this), this.b = e, this.a = {}
                    }
                    u(Xb, B), g = Xb.prototype, g.ea=!1, g.O = null, g.qb = function() {
                        if (this.ea) {
                            var e = t() - this.g;
                            0 < e && e < .8 * this.b ? this.O = this.a.setTimeout(this.c, this.b - e) : (this.O && (this.a.clearTimeout(this.O), this.O = null), this.dispatchEvent("tick"), this.ea && (this.O = this.a.setTimeout(this.c, this.b), this.g = t()))
                        }
                    }, g.start = function() {
                        this.ea=!0, this.O || (this.O = this.a.setTimeout(this.c, this.b), this.g = t())
                    }, g.w = function() {
                        Xb.H.w.call(this), Yb(this), delete this.a
                    }, u($b, w), g = $b.prototype, g.ha=!1, g.Y = null, g.cb = function(e) {
                        this.a = arguments, this.Y ? this.ha=!0 : ac(this)
                    }, g.w = function() {
                        $b.H.w.call(this), this.Y && (k.clearTimeout(this.Y), this.Y = null, this.ha=!1, this.a = [])
                    }, g.kb = function() {
                        this.Y = null, this.ha && (this.ha=!1, ac(this))
                    }, u(bc, w);
                    var cc = [];
                    function dc(e, t, n, r) {
                        p(n) || (n && (cc[0] = n.toString()), n = cc);
                        for (var i = 0; i < n.length; i++) {
                            var o = nb(t, n[i], r || e.handleEvent, !1, e.b || e);
                            if (!o)
                                break;
                            e.a[o.key] = o
                        }
                    }
                    function ec(e) {
                        Ca(e.a, function(e, t) {
                            this.a.hasOwnProperty(t) && wb(e)
                        }, e), e.a = {}
                    }
                    function fc(e, t, n) {
                        this.reset(e, t, n, void 0, void 0)
                    }
                    function hc(e) {
                        this.f = e, this.b = this.c = this.a = null
                    }
                    function C(e, t) {
                        this.name = e, this.value = t
                    }
                    bc.prototype.w = function() {
                        bc.H.w.call(this), ec(this)
                    }, bc.prototype.handleEvent = function() {
                        throw Error("EventHandler.handleEvent not implemented")
                    }, fc.prototype.a = null, fc.prototype.reset = function(e, t, n, r, i) {
                        delete this.a
                    }, C.prototype.toString = function() {
                        return this.name
                    };
                    var ic = new C("SEVERE", 1e3), jc = new C("WARNING", 900), kc = new C("INFO", 800), lc = new C("CONFIG", 700), mc = new C("FINE", 500);
                    function nc(e) {
                        return e.c ? e.c : e.a ? nc(e.a) : (ma("Root logger has no level set."), null)
                    }
                    hc.prototype.log = function(e, t, n) {
                        if (e.value >= nc(this).value)
                            for (da(t) 
                                && (t = t()), e = new fc(e, String(t), this.f), n && (e.a = n), n = this;
                        n;
                        )n = n.a
                    };
                    var oc = {}, pc = null;
                    function qc(e) {
                        var t;
                        if (pc || (pc = new hc(""), oc[""] = pc, pc.c = lc), !(t = oc[e])) {
                            t = new hc(e);
                            var n = e.lastIndexOf("."), r = e.substr(n + 1);
                            (n = qc(e.substr(0, n))).b || (n.b = {}), n.b[r] = t, t.a = n, oc[e] = t
                        }
                        return t
                    }
                    function D(e, t) {
                        e && e.log(jc, t, void 0)
                    }
                    function rc(e, t) {
                        e && e.log(kc, t, void 0)
                    }
                    function E(e, t) {
                        e && e.log(mc, t, void 0)
                    }
                    function sc() {
                        this.a = qc("goog.labs.net.webChannel.WebChannelDebug"), this.b=!0
                    }
                    function tc(e, t, n, r, i, o) {
                        F(e, function() {
                            if (e.b)
                                if (o)
                                    for (var a = "", s = o.split("&"), u = 0; u < s.length; u++) {
                                        var c = s[u].split("=");
                                        if (1 < c.length) {
                                            var h = c[0];
                                            c = c[1];
                                            var l = h.split("_");
                                            a = 2 <= l.length && "type" == l[1] ? a + (h + "=") + c + "&" : a + (h + "=redacted&")
                                        }
                                    } else 
                                        a = null;
                                else 
                                    a = o;
                            return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + "\n" + n + "\n" + a
                        })
                    }
                    function uc(e, t, n, r, i, o, a) {
                        F(e, function() {
                            return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + "\n" + n + "\n" + o + " " + a
                        })
                    }
                    function G(e, t, n, r) {
                        F(e, function() {
                            return "XMLHTTP TEXT (" + t + "): " + vc(e, n) + (r ? " " + r : "")
                        })
                    }
                    function wc(e, t) {
                        F(e, function() {
                            return "TIMEOUT: " + t
                        })
                    }
                    function H(e, t) {
                        E(e.a, t)
                    }
                    function xc(e, t, n) {
                        (e = e.a) && e.log(ic, n || "Exception", t)
                    }
                    function F(e, t) {
                        rc(e.a, t)
                    }
                    function J(e, t) {
                        (e = e.a) && e.log(ic, t, void 0)
                    }
                    function vc(e, t) {
                        if (!e.b)
                            return t;
                        if (!t)
                            return null;
                        try {
                            var n = JSON.parse(t);
                            if (n)
                                for (var r = 0; r < n.length; r++)
                                    if (p(n[r])) {
                                        var i = n[r];
                                        if (!(2 > i.length)) {
                                            var o = i[1];
                                            if (p(o)&&!(1 > o.length)) {
                                                var a = o[0];
                                                if ("noop" != a && "stop" != a && "close" != a)
                                                    for (var s = 1; s < o.length; s++)
                                                        o[s] = ""
                                            }
                                        }
                                    }
                            return Db(n)
                        } catch (n) {
                            return H(e, "Exception parsing expected JS array - probably was not JS"), t
                        }
                    }
                    sc.prototype.Fa = function() {
                        this.b=!1
                    };
                    var yc = new B;
                    function zc(e) {
                        A.call(this, "serverreachability", e)
                    }
                    function Ac(e) {
                        yc.dispatchEvent(new zc(yc, e))
                    }
                    function Bc(e) {
                        A.call(this, "statevent", e)
                    }
                    function K(e) {
                        yc.dispatchEvent(new Bc(yc, e))
                    }
                    function Cc(e) {
                        A.call(this, "timingevent", e)
                    }
                    function Dc(e, t, n) {
                        yc.dispatchEvent(new Cc(yc, e, t, n))
                    }
                    function Ec(e, t) {
                        if (!da(e))
                            throw Error("Fn must not be null and must be a function");
                        return k.setTimeout(function() {
                            e()
                        }, t)
                    }
                    u(zc, A), u(Bc, A), u(Cc, A);
                    var Fc = {
                        NO_ERROR: 0,
                        rb: 1,
                        yb: 2,
                        xb: 3,
                        ub: 4,
                        wb: 5,
                        zb: 6,
                        Ua: 7,
                        TIMEOUT: 8,
                        Cb: 9
                    }, Gc = {
                        tb: "complete",
                        Gb: "success",
                        Va: "error",
                        Ua: "abort",
                        Eb: "ready",
                        Fb: "readystatechange",
                        TIMEOUT: "timeout",
                        Ab: "incrementaldata",
                        Db: "progress",
                        vb: "downloadprogress",
                        Hb: "uploadprogress"
                    };
                    function Hc() {}
                    function Ic(e) {
                        var t;
                        return (t = e.a) || (t = {}, Jc(e) && (t[0]=!0, t[1]=!0), t = e.a = t), t
                    }
                    function Kc() {}
                    Hc.prototype.a = null;
                    var Lc = {
                        OPEN: "a",
                        sb: "b",
                        Va: "c",
                        Bb: "d"
                    }, Oc;
                    function Mc() {
                        A.call(this, "d")
                    }
                    function Nc() {
                        A.call(this, "c")
                    }
                    function Pc() {}
                    function Qc(e) {
                        return (e = Jc(e)) ? new ActiveXObject(e) : new XMLHttpRequest
                    }
                    function Jc(e) {
                        if (!e.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                            for (var t = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < t.length; n++) {
                                var r = t[n];
                                try {
                                    return new ActiveXObject(r), e.b = r
                                } catch (e) {}
                            }
                            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                        }
                        return e.b
                    }
                    function L(e, t, n, r) {
                        this.i = e, this.b = t, this.c = n, this.T = r || 1, this.L = new bc(this), this.R = Rc, e = Na ? 125 : void 0, this.S = new Xb(e), this.j = null, this.f=!1, this.l = this.g = this.h = this.J = this.D = this.U = this.s = null, this.u = [], this.a = null, this.G = 0, this.m = this.o = null, this.C =- 1, this.B=!1, this.N = 0, this.I = null, this.v = this.X = this.K=!1
                    }
                    u(Mc, A), u(Nc, A), u(Pc, Hc), Oc = new Pc;
                    var Rc = 45e3;
                    function Sc(e, t) {
                        switch (e) {
                        case 0:
                            return "Non-200 return code (" + t + ")";
                        case 1:
                            return "XMLHTTP failure (no data)";
                        case 2:
                            return "HttpConnection timeout";
                        default:
                            return "Unknown error"
                        }
                    }
                    var Tc = {}, Uc = {};
                    function Vc(e, t, n) {
                        e.J = 1, e.h = Wc(M(t)), e.l = n, e.K=!0, Xc(e, null)
                    }
                    function Yc(e, t, n, r) {
                        e.J = 1, e.h = Wc(M(t)), e.l = null, e.K = n, Xc(e, r)
                    }
                    function Xc(e, n) {
                        e.D = t(), Zc(e), e.g = M(e.h), $c(e.g, "t", e.T), e.G = 0, e.a = e.i.ca(e.i.ia() ? n : null), 0 < e.N && (e.I = new $b(r(e.Sa, e, e.a), e.N)), dc(e.L, e.a, "readystatechange", e.nb), n = e.j ? Fa(e.j) : {}, e.l ? (e.o || (e.o = "POST"), n["Content-Type"] = "application/x-www-form-urlencoded", e.a.fa(e.g, e.o, e.l, n)) : (e.o = "GET", e.a.fa(e.g, e.o, null, n)), Ac(1), tc(e.b, e.o, e.g, e.c, e.T, e.l)
                    }
                    function ad(e) {
                        var t = N(e.a), n = e.a.Ga(), r = e.a.W();
                        if (!(3 > t || 3 == t&&!Na&&!e.a.V())) {
                            e.B || 4 != t || 7 == n || Ac(8 == n || 0 >= r ? 3 : 2), bd(e);
                            var i = e.a.W();
                            e.C = i, (n = e.a.V()) || H(e.b, function() {
                                return "No response text for uri " + e.g + " status " + i
                            }), e.f = 200 == i, uc(e.b, e.o, e.g, e.c, e.T, t, i), e.f ? ((r = cd(e)) && (G(e.b, e.c, r, "Initial handshake response via X-HTTP-Initial-Response"), e.v=!0, dd(e, r)), e.K ? (ed(e, t, n), Na && e.f && 3 == t && fd(e)) : (G(e.b, e.c, n, null), dd(e, n)), 4 == t && gd(e), e.f&&!e.B && (4 == t ? e.i.ta(e) : (e.f=!1, Zc(e)))) : (400 == i && 0 < n.indexOf("Unknown SID") ? (e.m = 3, K(12), D(e.b.a, "XMLHTTP Unknown SID (" + e.c + ")")) : (e.m = 0, K(13), D(e.b.a, "XMLHTTP Bad status " + i + " (" + e.c + ")")), gd(e), hd(e))
                        }
                    }
                    function cd(e) {
                        return !e.X || e.v ? null : e.a && (e = id(e.a, "X-HTTP-Initial-Response"))&&!xa(e) ? e : null
                    }
                    function ed(e, t, n) {
                        for (var r=!0; !e.B && e.G < n.length;) {
                            var i = jd(e, n);
                            if (i == Uc) {
                                4 == t && (e.m = 4, K(14), r=!1), G(e.b, e.c, null, "[Incomplete Response]");
                                break
                            }
                            if (i == Tc) {
                                e.m = 4, K(15), G(e.b, e.c, n, "[Invalid Chunk]"), r=!1;
                                break
                            }
                            G(e.b, e.c, i, null), dd(e, i)
                        }
                        4 == t && 0 == n.length && (e.m = 1, K(16), r=!1), e.f = e.f && r, r || (G(e.b, e.c, n, "[Invalid Chunked Response]"), gd(e), hd(e))
                    }
                    function fd(e) {
                        dc(e.L, e.S, "tick", e.mb), e.S.start()
                    }
                    function jd(e, t) {
                        var n = e.G, r = t.indexOf("\n", n);
                        return - 1 == r ? Uc : (n = Number(t.substring(n, r)), isNaN(n) ? Tc : (r += 1) + n > t.length ? Uc : (t = t.substr(r, n), e.G = r + n, t))
                    }
                    function Zc(e) {
                        e.U = t() + e.R, kd(e, e.R)
                    }
                    function kd(e, t) {
                        if (null != e.s)
                            throw Error("WatchDog timer not null");
                        e.s = Ec(r(e.lb, e), t)
                    }
                    function bd(e) {
                        e.s && (k.clearTimeout(e.s), e.s = null)
                    }
                    function hd(e) {
                        e.i.La() || e.B || e.i.ta(e)
                    }
                    function gd(e) {
                        bd(e);
                        var t = e.I;
                        t && "function" == typeof t.$ && t.$(), e.I = null, Yb(e.S), ec(e.L), e.a && (t = e.a, e.a = null, t.abort(), t.$())
                    }
                    function dd(e, t) {
                        try {
                            e.i.Oa(e, t), Ac(4)
                        } catch (t) {
                            xc(e.b, t, "Error in httprequest callback")
                        }
                    }
                    function ld(e) {
                        if (e.A && "function" == typeof e.A)
                            return e.A();
                        if (l(e))
                            return e.split("");
                        if (ca(e)) {
                            for (var t = [], n = e.length, r = 0; r < n; r++)
                                t.push(e[r]);
                            return t
                        }
                        return Da(e)
                    }
                    function md(e, t) {
                        if (e.forEach && "function" == typeof e.forEach)
                            e.forEach(t, void 0);
                        else if (ca(e) || l(e))
                            ra(e, t, void 0);
                        else {
                            if (e.M && "function" == typeof e.M)
                                var n = e.M();
                            else if (e.A && "function" == typeof e.A)
                                n = void 0;
                            else if (ca(e) || l(e)) {
                                n = [];
                                for (var r = e.length, i = 0; i < r; i++)
                                    n.push(i)
                            } else 
                                n = Ea(e);
                            i = (r = ld(e)).length;
                            for (var o = 0; o < i; o++)
                                t.call(void 0, r[o], n && n[o], e)
                        }
                    }
                    function O(e, t) {
                        this.b = {}, this.a = [], this.c = 0;
                        var n = arguments.length;
                        if (1 < n) {
                            if (n%2)
                                throw Error("Uneven number of arguments");
                            for (var r = 0; r < n; r += 2)
                                this.set(arguments[r], arguments[r + 1])
                        } else if (e)
                            if (e instanceof O)
                                for (n = e.M(), r = 0; r < n.length; r++)
                                    this.set(n[r], e.get(n[r]));
                            else 
                                for (r in e)
                                    this.set(r, e[r])
                    }
                    function od(e) {
                        e.b = {}, e.a.length = 0, e.c = 0
                    }
                    function pd(e, t) {
                        return !!P(e.b, t) && (delete e.b[t], e.c--, e.a.length > 2 * e.c && nd(e), !0)
                    }
                    function nd(e) {
                        if (e.c != e.a.length) {
                            for (var t = 0, n = 0; t < e.a.length;) {
                                var r = e.a[t];
                                P(e.b, r) && (e.a[n++] = r), t++
                            }
                            e.a.length = n
                        }
                        if (e.c != e.a.length) {
                            var i = {};
                            for (n = t = 0; t < e.a.length;)
                                P(i, r = e.a[t]) || (e.a[n++] = r, i[r] = 1), t++;
                            e.a.length = n
                        }
                    }
                    function P(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    g = L.prototype, g.setTimeout = function(e) {
                        this.R = e
                    }, g.nb = function(e) {
                        e = e.target;
                        var t = this.I;
                        t && 3 == N(e) ? (H(this.b, "Throttling readystatechange."), t.cb()) : this.Sa(e)
                    }, g.Sa = function(e) {
                        try {
                            e == this.a ? ad(this) : D(this.b.a, "Called back with an unexpected xmlhttp")
                        } catch (e) {
                            if (H(this.b, "Failed call to OnXmlHttpReadyStateChanged_"), this.a && this.a.V()) {
                                var t = this;
                                xc(this.b, e, function() {
                                    return "ResponseText: " + t.a.V()
                                })
                            } else 
                                xc(this.b, e, "No response text")
                        }
                    }, g.mb = function() {
                        if (this.a) {
                            var e = N(this.a), t = this.a.V();
                            this.G < t.length && (bd(this), ed(this, e, t), this.f && 4 != e && Zc(this))
                        }
                    }, g.cancel = function() {
                        this.B=!0, gd(this)
                    }, g.lb = function() {
                        this.s = null;
                        var e = t();
                        0 <= e - this.U ? (this.f && J(this.b, "Received watchdog timeout even though request loaded successfully"), wc(this.b, this.g), 2 != this.J && (Ac(3), K(17)), gd(this), this.m = 2, hd(this)) : (D(this.b.a, "WatchDog timer called too early"), kd(this, this.U - e))
                    }, g = O.prototype, g.A = function() {
                        nd(this);
                        for (var e = [], t = 0; t < this.a.length; t++)
                            e.push(this.b[this.a[t]]);
                        return e
                    }, g.M = function() {
                        return nd(this), this.a.concat()
                    }, g.get = function(e, t) {
                        return P(this.b, e) ? this.b[e] : t
                    }, g.set = function(e, t) {
                        P(this.b, e) || (this.c++, this.a.push(e)), this.b[e] = t
                    }, g.forEach = function(e, t) {
                        for (var n = this.M(), r = 0; r < n.length; r++) {
                            var i = n[r], o = this.get(i);
                            e.call(t, o, i, this)
                        }
                    };
                    var qd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                    function rd(e, t) {
                        if (e) {
                            e = e.split("&");
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n].indexOf("="), i = null;
                                if (0 <= r) {
                                    var o = e[n].substring(0, r);
                                    i = e[n].substring(r + 1)
                                } else 
                                    o = e[n];
                                t(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                            }
                        }
                    }
                    function Q(e, t) {
                        var n;
                        this.b = this.j = this.f = "", this.i = null, this.g = this.a = "", this.h=!1, e instanceof Q ? (this.h = void 0 !== t ? t : e.h, sd(this, e.f), this.j = e.j, td(this, e.b), ud(this, e.i), this.a = e.a, vd(this, wd(e.c)), this.g = e.g) : e && (n = String(e).match(qd)) ? (this.h=!!t, sd(this, n[1] || "", !0), this.j = xd(n[2] || ""), td(this, n[3] || "", !0), ud(this, n[4]), this.a = xd(n[5] || "", !0), vd(this, n[6] || "", !0), this.g = xd(n[7] || "")) : (this.h=!!t, this.c = new yd(null, this.h))
                    }
                    function M(e) {
                        return new Q(e)
                    }
                    function sd(e, t, n) {
                        e.f = n ? xd(t, !0) : t, e.f && (e.f = e.f.replace(/:$/, ""))
                    }
                    function td(e, t, n) {
                        e.b = n ? xd(t, !0) : t
                    }
                    function ud(e, t) {
                        if (t) {
                            if (t = Number(t), isNaN(t) || 0 > t)
                                throw Error("Bad port number " + t);
                            e.i = t
                        } else 
                            e.i = null
                    }
                    function vd(e, t, n) {
                        t instanceof yd ? (e.c = t, Ed(e.c, e.h)) : (n || (t = zd(t, Fd)), e.c = new yd(t, e.h))
                    }
                    function R(e, t, n) {
                        e.c.set(t, n)
                    }
                    function $c(e, t, n) {
                        p(n) || (n = [String(n)]), Gd(e.c, t, n)
                    }
                    function Wc(e) {
                        return R(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^t()).toString(36)), e
                    }
                    function Hd(e) {
                        return e instanceof Q ? M(e) : new Q(e, void 0)
                    }
                    function Id(e, t, n, r) {
                        var i = new Q(null, void 0);
                        return e && sd(i, e), t && td(i, t), n && ud(i, n), r && (i.a = r), i
                    }
                    function xd(e, t) {
                        return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
                    }
                    function zd(e, t, n) {
                        return l(e) ? (e = encodeURI(e).replace(t, Jd), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null
                    }
                    function Jd(e) {
                        return "%" + ((e = e.charCodeAt(0))>>4 & 15).toString(16) + (15 & e).toString(16)
                    }
                    Q.prototype.toString = function() {
                        var e = [], t = this.f;
                        t && e.push(zd(t, Ad, !0), ":");
                        var n = this.b;
                        return (n || "file" == t) && (e.push("//"), (t = this.j) && e.push(zd(t, Ad, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && e.push(":", String(n))), (n = this.a) && (this.b && "/" != n.charAt(0) && e.push("/"), e.push(zd(n, "/" == n.charAt(0) ? Bd : Cd, !0))), (n = this.c.toString()) && e.push("?", n), (n = this.g) && e.push("#", zd(n, Dd)), e.join("")
                    }, Q.prototype.resolve = function(e) {
                        var t = M(this), n=!!e.f;
                        n ? sd(t, e.f) : n=!!e.j, n ? t.j = e.j : n=!!e.b, n ? td(t, e.b) : n = null != e.i;
                        var r = e.a;
                        if (n)
                            ud(t, e.i);
                        else if (n=!!e.a) {
                            if ("/" != r.charAt(0))
                                if (this.b&&!this.a)
                                    r = "/" + r;
                                else {
                                    var i = t.a.lastIndexOf("/");
                                    - 1 != i && (r = t.a.substr(0, i + 1) + r)
                                }
                            if (".." == (i = r) || "." == i)
                                r = "";
                            else if ( - 1 != i.indexOf("./")||-1 != i.indexOf("/.")) {
                                r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                                for (var o = [], a = 0; a < i.length;) {
                                    var s = i[a++];
                                    "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r=!0)
                                }
                                r = o.join("/")
                            } else 
                                r = i
                        }
                        return n ? t.a = r : n = "" !== e.c.toString(), n ? vd(t, wd(e.c)) : n=!!e.g, n && (t.g = e.g), t
                    };
                    var Ad = /[#\/\?@]/g, Cd = /[#\?:]/g, Bd = /[#\?]/g, Fd = /[#\?@]/g, Dd = /#/g;
                    function yd(e, t) {
                        this.b = this.a = null, this.c = e || null, this.f=!!t
                    }
                    function S(e) {
                        e.a || (e.a = new O, e.b = 0, e.c && rd(e.c, function(t, n) {
                            e.add(decodeURIComponent(t.replace(/\+/g, " ")), n)
                        }))
                    }
                    function Ld(e, t) {
                        S(e), t = Kd(e, t), P(e.a.b, t) && (e.c = null, e.b -= e.a.get(t).length, pd(e.a, t))
                    }
                    function Md(e, t) {
                        return S(e), t = Kd(e, t), P(e.a.b, t)
                    }
                    function Gd(e, t, n) {
                        Ld(e, t), 0 < n.length && (e.c = null, e.a.set(Kd(e, t), wa(n)), e.b += n.length)
                    }
                    function wd(e) {
                        var t = new yd;
                        return t.c = e.c, e.a && (t.a = new O(e.a), t.b = e.b), t
                    }
                    function Kd(e, t) {
                        return t = String(t), e.f && (t = t.toLowerCase()), t
                    }
                    function Ed(e, t) {
                        t&&!e.f && (S(e), e.c = null, e.a.forEach(function(e, t) {
                            var n = t.toLowerCase();
                            t != n && (Ld(this, t), Gd(this, n, e))
                        }, e)), e.f = t
                    }
                    function Pd() {}
                    function Qd() {}
                    function Rd(e, t) {
                        this.a = e, this.b = t, this.c = this.i = null, this.h=!1, this.m = null, this.f =- 1, this.l = this.g = null
                    }
                    function Sd(e) {
                        H(e.b, "TestConnection: starting stage 2");
                        var t = e.a.I.a;
                        if (null != t)
                            H(e.b, function() {
                                return "Buffered"
                            }), K(4), t ? (K(10), Td(e.a, e, !1)) : (K(11), Td(e.a, e, !0));
                        else {
                            e.c = new L(e, e.b, void 0, void 0), e.c.j = e.i;
                            var n = Ud(e.a, e.g, e.m);
                            K(4), $c(n, "TYPE", "xmlhttp");
                            var r = e.a.j, i = e.a.K;
                            r && i && R(n, r, i), Yc(e.c, n, !1, e.g)
                        }
                    }
                    function Wd() {
                        this.a = this.b = null
                    }
                    function Xd() {
                        this.a = new O
                    }
                    function Yd(e) {
                        var t = typeof e;
                        return "object" == t && e || "function" == t ? "o" + (e[q] || (e[q]=++fa)) : t.charAt(0) + e
                    }
                    function Zd(e, t) {
                        this.a = e, this.b = t
                    }
                    function $d(e) {
                        this.g = e || ae, k.PerformanceNavigationTiming ? e = 0 < (e = k.performance.getEntriesByType("navigation")).length && ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol) : e=!!(k.oa && k.oa.Ma && k.oa.Ma() && k.oa.Ma().Jb), this.f = e ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Xd), this.b = null, this.c = []
                    }
                    g = yd.prototype, g.add = function(e, t) {
                        S(this), this.c = null, e = Kd(this, e);
                        var n = this.a.get(e);
                        return n || this.a.set(e, n = []), n.push(t), this.b += 1, this
                    }, g.forEach = function(e, t) {
                        S(this), this.a.forEach(function(n, r) {
                            ra(n, function(n) {
                                e.call(t, n, r, this)
                            }, this)
                        }, this)
                    }, g.M = function() {
                        S(this);
                        for (var e = this.a.A(), t = this.a.M(), n = [], r = 0; r < t.length; r++)
                            for (var i = e[r], o = 0; o < i.length; o++)
                                n.push(t[r]);
                        return n
                    }, g.A = function(e) {
                        S(this);
                        var t = [];
                        if (l(e))
                            Md(this, e) && (t = va(t, this.a.get(Kd(this, e))));
                        else {
                            e = this.a.A();
                            for (var n = 0; n < e.length; n++)
                                t = va(t, e[n])
                        }
                        return t
                    }, g.set = function(e, t) {
                        return S(this), this.c = null, Md(this, e = Kd(this, e)) && (this.b -= this.a.get(e).length), this.a.set(e, [t]), this.b += 1, this
                    }, g.get = function(e, t) {
                        return 0 < (e = e ? this.A(e) : []).length ? String(e[0]) : t
                    }, g.toString = function() {
                        if (this.c)
                            return this.c;
                        if (!this.a)
                            return "";
                        for (var e = [], t = this.a.M(), n = 0; n < t.length; n++) {
                            var r = t[n], i = encodeURIComponent(String(r));
                            r = this.A(r);
                            for (var o = 0; o < r.length; o++) {
                                var a = i;
                                "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), e.push(a)
                            }
                        }
                        return this.c = e.join("&")
                    }, u(Qd, Pd), g = Rd.prototype, g.P = null, g.ca = function(e) {
                        return this.a.ca(e)
                    }, g.abort = function() {
                        this.c && (this.c.cancel(), this.c = null), this.f =- 1
                    }, g.La = function() {
                        return !1
                    }, g.Oa = function(e, t) {
                        if (this.f = e.C, 0 == this.P) {
                            if (H(this.b, "TestConnection: Got data for stage 1"), !this.a.o && (e = e.a)) {
                                var n = id(e, "X-Client-Wire-Protocol");
                                this.l = n || null, this.a.j && ((e = id(e, "X-HTTP-Session-Id")) ? this.a.K = e : D(this.b.a, "Missing X_HTTP_SESSION_ID in the handshake response"))
                            }
                            if (t) {
                                try {
                                    var r = this.a.la.a.parse(t)
                                } catch (e) {
                                    return xc(this.b, e), void Vd(this.a, this)
                                }
                                this.g = r[0]
                            } else 
                                H(this.b, "TestConnection: Null responseText"), Vd(this.a, this)
                        } else 
                            1 == this.P && (this.h ? K(6) : "11111" == t ? (K(5), this.h=!0, (!z || 10 <= Number(Wa)) && (this.f = 200, this.c.cancel(), H(this.b, "Test connection succeeded; using streaming connection"), K(11), Td(this.a, this, !0))) : (K(7), this.h=!1))
                    }, g.ta = function() {
                        this.f = this.c.C, this.c.f ? 0 == this.P ? (this.P = 1, H(this.b, "TestConnection: request complete for initial check"), Sd(this)) : 1 == this.P && (H(this.b, "TestConnection: request complete for stage 2"), this.h ? (H(this.b, "Test connection succeeded; using streaming connection"), K(11), Td(this.a, this, !0)) : (H(this.b, "Test connection failed; not using streaming"), K(10), Td(this.a, this, !1))) : (H(this.b, "TestConnection: request failed, in state " + this.P), 0 == this.P ? K(8) : 1 == this.P && K(9), Vd(this.a, this))
                    }, g.ia = function() {
                        return this.a.ia()
                    }, g.qa = function() {
                        return this.a.qa()
                    }, Xd.prototype.add = function(e) {
                        this.a.set(Yd(e), e)
                    }, Xd.prototype.A = function() {
                        return this.a.A()
                    };
                    var ae = 10;
                    function be(e, t) {
                        e.a||-1 == t.indexOf("spdy")&&-1 == t.indexOf("quic")&&-1 == t.indexOf("h2") || (e.f = e.g, e.a = new Xd, e.b && (ce(e, e.b), e.b = null))
                    }
                    function de(e) {
                        return !!e.b||!!e.a && e.a.a.c >= e.f
                    }
                    function ee(e, t) {
                        return e.b ? e = e.b == t : e.a ? (t = Yd(t), e = P(e.a.a.b, t)) : e=!1, e
                    }
                    function ce(e, t) {
                        e.a ? e.a.add(t) : e.b = t
                    }
                    function fe(e, t) {
                        var n;
                        e.b && e.b == t ? e.b = null : ((n = e.a) && (n = Yd(t), n = P(e.a.a.b, n)), n && pd(e.a.a, Yd(t)))
                    }
                    function ge(e) {
                        if (null != e.b)
                            return e.c.concat(e.b.u);
                        if (null != e.a && 0 != e.a.a.c) {
                            var t = e.c;
                            return ra(e.a.A(), function(e) {
                                t = t.concat(e.u)
                            }), t
                        }
                        return wa(e.c)
                    }
                    function he(e, t) {
                        e.c = e.c.concat(t)
                    }
                    function ie() {}
                    function je() {
                        this.a = new ie
                    }
                    function ke(e, t, n) {
                        var r = n || "";
                        try {
                            md(e, function(e, n) {
                                var i = e;
                                ea(e) && (i = Db(e)), t.push(r + n + "=" + encodeURIComponent(i))
                            })
                        } catch (e) {
                            throw t.push(r + "type=" + encodeURIComponent("_badmap")), e
                        }
                    }
                    function le(e, t) {
                        var n = new sc;
                        H(n, "TestLoadImage: loading " + e);
                        var r = new Image;
                        r.onload = ja(me, n, r, "TestLoadImage: loaded", !0, t), r.onerror = ja(me, n, r, "TestLoadImage: error", !1, t), r.onabort = ja(me, n, r, "TestLoadImage: abort", !1, t), r.ontimeout = ja(me, n, r, "TestLoadImage: timeout", !1, t), k.setTimeout(function() {
                            r.ontimeout && r.ontimeout()
                        }, 1e4), r.src = e
                    }
                    function me(e, t, n, r, i) {
                        try {
                            H(e, n), t.onload = null, t.onerror = null, t.onabort = null, t.ontimeout = null, i(r)
                        } catch (t) {
                            xc(e, t)
                        }
                    }
                    function T(e) {
                        B.call(this), this.headers = new O, this.s = e || null, this.c=!1, this.D = this.a = null, this.K = this.B = "", this.j = 0, this.g = "", this.h = this.I = this.u = this.G=!1, this.l = 0, this.C = null, this.L = ne, this.v = this.o=!1
                    }
                    $d.prototype.cancel = function() {
                        this.c = ge(this), this.b ? (this.b.cancel(), this.b = null) : this.a && 0 != this.a.a.c && (ra(this.a.A(), function(e) {
                            e.cancel()
                        }), od(this.a.a))
                    }, ie.prototype.stringify = function(e) {
                        return k.JSON.stringify(e, void 0)
                    }, ie.prototype.parse = function(e) {
                        return k.JSON.parse(e, void 0)
                    }, u(T, B);
                    var ne = "";
                    T.prototype.b = qc("goog.net.XhrIo");
                    var oe = /^https?$/i, pe = ["POST", "PUT"];
                    function se(e) {
                        return z && Va(9) && "number" == typeof e.timeout && void 0 !== e.ontimeout
                    }
                    function ta(e) {
                        return "content-type" == e.toLowerCase()
                    }
                    function qe(e, t) {
                        e.c=!1, e.a && (e.h=!0, e.a.abort(), e.h=!1), e.g = t, e.j = 5, te(e), ue(e)
                    }
                    function te(e) {
                        e.G || (e.G=!0, e.dispatchEvent("complete"), e.dispatchEvent("error"))
                    }
                    function ve(e) {
                        if (e.c && void 0 !== goog)
                            if (e.D[1] && 4 == N(e) && 2 == e.W())
                                E(e.b, U(e, "Local request error detected and ignored"));
                            else if (e.u && 4 == N(e))
                                Zb(e.Na, 0, e);
                            else if (e.dispatchEvent("readystatechange"), 4 == N(e)) {
                                E(e.b, U(e, "Request complete")), e.c=!1;
                                try {
                                    var t, n = e.W();
                                    e:
                                    switch (n) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var r=!0;
                                        break e;
                                    default:
                                        r=!1
                                    }
                                    if (!(t = r)) {
                                        var i;
                                        if (i = 0 === n) {
                                            var o = String(e.B).match(qd)[1] || null;
                                            if (!o && k.self && k.self.location) {
                                                var a = k.self.location.protocol;
                                                o = a.substr(0, a.length - 1)
                                            }
                                            i=!oe.test(o ? o.toLowerCase() : "")
                                        }
                                        t = i
                                    }
                                    t ? (e.dispatchEvent("complete"), e.dispatchEvent("success")) : (e.j = 6, e.g = e.Ha() + " [" + e.W() + "]", te(e))
                                } finally {
                                    ue(e)
                                }
                        }
                    }
                    function ue(e, t) {
                        if (e.a) {
                            re(e);
                            var n = e.a, r = e.D[0] ? aa: null;
                            e.a = null, e.D = null, t || e.dispatchEvent("ready");
                            try {
                                n.onreadystatechange = r
                            } catch (t) {
                                (e = e.b) && e.log(ic, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                            }
                        }
                    }
                    function re(e) {
                        e.a && e.v && (e.a.ontimeout = null), e.C && (k.clearTimeout(e.C), e.C = null)
                    }
                    function N(e) {
                        return e.a ? e.a.readyState : 0
                    }
                    function id(e, t) {
                        return e.a ? e.a.getResponseHeader(t) : null
                    }
                    function U(e, t) {
                        return t + " [" + e.K + " " + e.B + " " + e.W() + "]"
                    }
                    function we(e) {
                        var t = "";
                        return Ca(e, function(e, n) {
                            t += n, t += ":", t += e, t += "\r\n"
                        }), t
                    }
                    function xe(e, t, n) {
                        e: {
                            for (r in n) {
                                var r=!1;
                                break e
                            }
                            r=!0
                        }
                        if (r)
                            return e;
                        if (n = we(n), l(e)) {
                            if (t = encodeURIComponent(String(t)), t += n = null != n ? "=" + encodeURIComponent(String(n)) : "") {
                                if (0 > (n = e.indexOf("#")) && (n = e.length), 0 > (r = e.indexOf("?")) || r > n) {
                                    r = n;
                                    var i = ""
                                } else 
                                    i = e.substring(r + 1, n);
                                n = (e = [e.substr(0, r), i, e.substr(n)])[1], e[1] = t ? n ? n + "&" + t : t : n, e = e[0] + (e[1] ? "?" + e[1] : "") + e[2]
                            }
                            return e
                        }
                        return R(e, t, n), e
                    }
                    function ye(e) {
                        this.ya = 0, this.g = [], this.a = new sc, this.I = new Wd, this.X = this.ua = this.D = this.ja = this.b = this.K = this.j = this.U = this.h = this.L = this.i = null, this.Za = this.R = 0, this.Xa=!!n("internalChannelParams.failFast", e), this.ka = this.C = this.s = this.l = this.m = this.f = null, this.u = this.xa = this.N =- 1, this.T = this.B = this.v = 0, this.Wa = n("internalChannelParams.baseRetryDelayMs", e) || 5e3, this.$a = n("internalChannelParams.retryDelaySeedMs", e) || 1e4, this.Ya = n("internalChannelParams.forwardChannelMaxRetries", e) || 2, this.wa = n("internalChannelParams.forwardChannelRequestTimeoutMs", e) || 2e4, this.Ta = e && e.Kb || void 0, this.G = void 0, this.S = e && e.supportsCrossDomainXhr ||!1, this.J = "", this.c = new $d(e && e.concurrentRequestLimit), this.la = new je, this.o=!e || void 0 === e.backgroundChannelTest || e.backgroundChannelTest, (this.va = e && e.fastHandshake ||!1)&&!this.o && (D(this.a.a, "Force backgroundChannelTest when fastHandshake is enabled."), this.o=!0), e && e.Fa && this.a.Fa()
                    }
                    function ze(e) {
                        if (H(e.a, "disconnect()"), Ae(e), 3 == e.F) {
                            var n = e.R++, r = M(e.D);
                            R(r, "SID", e.J), R(r, "RID", n), R(r, "TYPE", "terminate"), Be(e, r), (n = new L(e, e.a, n, void 0)).J = 2, n.h = Wc(M(r)), r=!1, k.navigator && k.navigator.sendBeacon && (r = k.navigator.sendBeacon(n.h.toString(), "")), !r && k.Image && ((new Image).src = n.h, r=!0), r || (n.a = n.i.ca(null), n.a.fa(n.h)), n.D = t(), Zc(n)
                        }
                        Ce(e)
                    }
                    function Ae(e) {
                        e.C && (e.C.abort(), e.C = null), e.b && (e.b.cancel(), e.b = null), e.l && (k.clearTimeout(e.l), e.l = null), De(e), e.c.cancel(), e.m && (k.clearTimeout(e.m), e.m = null)
                    }
                    function Ee(e, t) {
                        1e3 == e.g.length && J(e.a, function() {
                            return "Already have 1000 queued maps upon queueing " + Db(t)
                        }), e.g.push(new Zd(e.Za++, t)), 3 == e.F && Fe(e)
                    }
                    function Fe(e) {
                        de(e.c) || e.m || (e.m = Ec(r(e.Qa, e), 0), e.v = 0)
                    }
                    function Ge(e, t) {
                        var n = e.c;
                        return (n.b ? 1 : n.a ? n.a.a.c : 0) >= e.c.f - (e.m ? 1 : 0) ? (J(e.a, "Unexpected retry request is scheduled."), !1) : e.m ? (H(e.a, "Use the retry request that is already scheduled."), e.g = t.u.concat(e.g), !0) : !(1 == e.F || 2 == e.F || e.v >= (e.Xa ? 0 : e.Ya)) && (H(e.a, "Going to retry POST"), e.m = Ec(r(e.Qa, e, t), He(e, e.v)), e.v++, !0)
                    }
                    function Je(e, t) {
                        var n;
                        n = t ? t.c : e.R++;
                        var r = M(e.D);
                        R(r, "SID", e.J), R(r, "RID", n), R(r, "AID", e.N), Be(e, r), e.h && e.i && xe(r, e.h, e.i), n = new L(e, e.a, n, e.v + 1), null === e.h && (n.j = e.i), t && (e.g = t.u.concat(e.g)), t = Ie(e, n), n.setTimeout(Math.round(.5 * e.wa) + Math.round(.5 * e.wa * Math.random())), ce(e.c, n), Vc(n, r, t)
                    }
                    function Be(e, t) {
                        e.f && md({}, function(e, n) {
                            R(t, n, e)
                        })
                    }
                    function Ie(e, t) {
                        var n = Math.min(e.g.length, 1e3), i = e.f ? r(e.f.ab, e.f, e): null;
                        e: for (var o = e.g, a =- 1; ;) {
                            var s = ["count=" + n];
                            - 1 == a ? 0 < n ? (a = o[0].a, s.push("ofs=" + a)) : a = 0 : s.push("ofs=" + a);
                            for (var u=!0, c = 0; c < n; c++) {
                                var h = o[c].a, l = o[c].b;
                                if (0 > (h -= a))
                                    a = Math.max(0, o[c].a - 100), u=!1;
                                else 
                                    try {
                                        ke(l, s, "req" + h + "_")
                                    } catch (e) {
                                    i && i(l)
                                }
                            }
                            if (u) {
                                i = s.join("&");
                                break e
                            }
                        }
                        return e = e.g.splice(0, n), t.u = e, i
                    }
                    function Ke(e) {
                        if (!e.b&&!e.l) {
                            e.T = 1;
                            var t = e.Pa;
                            Tb || Ub(), Wb || (Tb(), Wb=!0), Pb.add(t, e), e.B = 0
                        }
                    }
                    function Le(e) {
                        return e.b || e.l ? (J(e.a, "Request already in progress"), !1) : !(3 <= e.B) && (H(e.a, "Going to retry GET"), e.T++, e.l = Ec(r(e.Pa, e), He(e, e.B)), e.B++, !0)
                    }
                    function Td(e, t, n) {
                        H(e.a, "Test Connection Finished");
                        var r = t.l;
                        r && be(e.c, r), e.ka = n, e.u = t.f, H(e.a, "connectChannel_()"), e.D = Me(e, e.ja), Fe(e)
                    }
                    function Vd(e, t) {
                        H(e.a, "Test Connection Failed"), e.u = t.f, V(e, 2)
                    }
                    function De(e) {
                        null != e.s && (k.clearTimeout(e.s), e.s = null)
                    }
                    function He(e, t) {
                        var n = e.Wa + Math.floor(Math.random() * e.$a);
                        return e.qa() || (H(e.a, "Inactive channel"), n*=2), n * t
                    }
                    function V(e, t) {
                        if (F(e.a, "Error code " + t), 2 == t) {
                            var n = null;
                            e.f && (n = null);
                            var i = r(e.pb, e);
                            n || (n = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || sd(n, "https"), Wc(n)), le(n.toString(), i)
                        } else 
                            K(2);
                        H(e.a, "HttpChannel: error - " + t), e.F = 0, e.f && e.f.Ba(t), Ce(e), Ae(e)
                    }
                    function Ce(e) {
                        if (e.F = 0, e.u =- 1, e.f) {
                            var t = ge(e.c);
                            0 == t.length && 0 == e.g.length || (H(e.a, function() {
                                return "Number of undelivered maps, pending: " + t.length + ", outgoing: " + e.g.length
                            }), e.c.c.length = 0, wa(e.g), e.g.length = 0), e.f.Aa()
                        }
                    }
                    function Me(e, t) {
                        return t = Ne(e, null, t), H(e.a, "GetForwardChannelUri: " + t), t
                    }
                    function Ud(e, t, n) {
                        return t = Ne(e, e.ia() ? t : null, n), H(e.a, "GetBackChannelUri: " + t), t
                    }
                    function Ne(e, t, n) {
                        var r = Hd(n);
                        if ("" != r.b)
                            t && td(r, t + "." + r.b), ud(r, r.i);
                        else {
                            var i, o = k.location;
                            i = t ? t + "." + o.hostname : o.hostname, r = Id(o.protocol, i, o.port, n)
                        }
                        return e.U && Ca(e.U, function(e, t) {
                            R(r, t, e)
                        }), t = e.j, n = e.K, t && n && R(r, t, n), R(r, "VER", e.na), Be(e, r), r
                    }
                    function Oe() {}
                    function Pe(e) {
                        for (var t = arguments[0], n = 1; n < arguments.length; n++) {
                            var r, i = arguments[n];
                            if (0 == i.lastIndexOf("/", 0))
                                t = i;
                            else (r = "" == t) 
                                || (r = 0 <= (r = t.length - 1) && t.indexOf("/", r) == r), t += r ? i : "/" + i
                        }
                        return t
                    }
                    function Qe() {
                        if (z&&!(10 <= Number(Wa)))
                            throw Error("Environmental error: no available transport.")
                    }
                    function W(e, t) {
                        B.call(this), this.a = new ye(t), this.b = e, this.o = t && t.testUrl ? t.testUrl : Pe(this.b, "test"), this.c = qc("goog.labs.net.webChannel.WebChannelBaseTransport"), this.g = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = {
                            "X-Client-Protocol": "webchannel"
                        }), this.a.i = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = {
                            "X-WebChannel-Content-Type": t.messageContentType
                        }), t && t.Ea && (e ? e["X-WebChannel-Client-Profile"] = t.Ea : e = {
                            "X-WebChannel-Client-Profile": t.Ea
                        }), this.a.L = e, (e = t && t.httpHeadersOverwriteParam)&&!xa(e) && (this.a.h = e), this.l = t && t.supportsCrossDomainXhr ||!1, this.j = t && t.sendRawJson ||!1, (t = t && t.httpSessionIdParam)&&!xa(t) && (this.a.j = t, null !== (e = this.g) && t in e && (t in (e = this.g) && delete e[t], D(this.c, "Ignore httpSessionIdParam also specified with messageUrlParams: " + t))), this.h = new Re(this)
                    }
                    function Se(e) {
                        Mc.call(this);
                        var t = e.__sm__;
                        if (t) {
                            e:
                            {
                                for (var n in t) {
                                    e = n;
                                    break e
                                }
                                e = void 0
                            }(this.c = e) ? (e = this.c, this.data = null !== t && e in t ? t[e] : void 0) : this.data = t
                        } else 
                            this.data = e
                    }
                    function Te() {
                        Nc.call(this), this.status = 1
                    }
                    function Re(e) {
                        this.a = e
                    }
                    g = T.prototype, g.fa = function(e, t, n, i) {
                        if (this.a)
                            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + e);
                        t = t ? t.toUpperCase() : "GET", this.B = e, this.g = "", this.j = 0, this.K = t, this.G=!1, this.c=!0, this.a = this.s ? Qc(this.s) : Qc(Oc), this.D = this.s ? Ic(this.s) : Ic(Oc), this.a.onreadystatechange = r(this.Na, this);
                        try {
                            E(this.b, U(this, "Opening Xhr")), this.I=!0, this.a.open(t, String(e), !0), this.I=!1
                        } catch (e) {
                            return E(this.b, U(this, "Error opening Xhr: " + e.message)), void qe(this, e)
                        }
                        e = n || "";
                        var o = new O(this.headers);
                        i && md(i, function(e, t) {
                            o.set(t, e)
                        }), i = sa(o.M()), n = k.FormData && e instanceof k.FormData, !(0 <= qa(pe, t)) || i || n || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(e, t) {
                            this.a.setRequestHeader(t, e)
                        }, this), this.L && (this.a.responseType = this.L), "withCredentials"in this.a && this.a.withCredentials !== this.o && (this.a.withCredentials = this.o);
                        try {
                            re(this), 0 < this.l && (this.v = se(this.a), E(this.b, U(this, "Will abort after " + this.l + "ms if incomplete, xhr2 " + this.v)), this.v ? (this.a.timeout = this.l, this.a.ontimeout = r(this.Ka, this)) : this.C = Zb(this.Ka, this.l, this)), E(this.b, U(this, "Sending request")), this.u=!0, this.a.send(e), this.u=!1
                        } catch (e) {
                            E(this.b, U(this, "Send error: " + e.message)), qe(this, e)
                        }
                    }, g.Ka = function() {
                        void 0 !== goog && this.a && (this.g = "Timed out after " + this.l + "ms, aborting", this.j = 8, E(this.b, U(this, this.g)), this.dispatchEvent("timeout"), this.abort(8))
                    }, g.abort = function(e) {
                        this.a && this.c && (E(this.b, U(this, "Aborting")), this.c=!1, this.h=!0, this.a.abort(), this.h=!1, this.j = e || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ue(this))
                    }, g.w = function() {
                        this.a && (this.c && (this.c=!1, this.h=!0, this.a.abort(), this.h=!1), ue(this, !0)), T.H.w.call(this)
                    }, g.Na = function() {
                        this.i || (this.I || this.u || this.h ? ve(this) : this.jb())
                    }, g.jb = function() {
                        ve(this)
                    }, g.W = function() {
                        try {
                            return 2 < N(this) ? this.a.status : - 1
                        } catch (e) {
                            return - 1
                        }
                    }, g.Ha = function() {
                        try {
                            return 2 < N(this) ? this.a.statusText : ""
                        } catch (e) {
                            return E(this.b, "Can not get status: " + e.message), ""
                        }
                    }, g.V = function() {
                        try {
                            return this.a ? this.a.responseText : ""
                        } catch (e) {
                            return E(this.b, "Can not get responseText: " + e.message), ""
                        }
                    }, g.eb = function(e) {
                        if (this.a) {
                            var t = this.a.responseText;
                            e && 0 == t.indexOf(e) && (t = t.substring(e.length));
                            e:
                            {
                                if (e = t, k.JSON)
                                    try {
                                        var n = k.JSON.parse(e);
                                        break e
                                } catch (e) {}
                                n = Cb(e)
                            }
                            return n
                        }
                    }, g.Ga = function() {
                        return this.j
                    }, g.hb = function() {
                        return l(this.g) ? this.g : String(this.g)
                    }, g = ye.prototype, g.na = 8, g.F = 1, g.La = function() {
                        return 0 == this.F
                    }, g.Qa = function(e) {
                        if (this.m = null, H(this.a, "startForwardChannel_"), 1 == this.F)
                            if (e)
                                J(this.a, "Not supposed to retry the open");
                            else {
                                H(this.a, "open_()"), this.R = Math.floor(1e5 * Math.random()), e = this.R++;
                                var t = new L(this, this.a, e, void 0), n = this.i;
                                this.L && (n ? Ha(n = Fa(n), this.L) : n = this.L), null === this.h && (t.j = n);
                                var r = Ie(this, t), i = M(this.D);
                                R(i, "RID", e), R(i, "CVER", 22), this.o && this.j && R(i, "X-HTTP-Session-Id", this.j), Be(this, i), this.h && n && xe(i, this.h, n), ce(this.c, t), this.va ? (R(i, "$req", r), R(i, "SID", "null"), t.X=!0, Vc(t, i, null)) : Vc(t, i, r), this.F = 2
                            } else 
                                3 == this.F && (e ? Je(this, e) : 0 == this.g.length ? H(this.a, "startForwardChannel_ returned: nothing to send") : de(this.c) ? J(this.a, "startForwardChannel_ returned: connection already in progress") : (Je(this), H(this.a, "startForwardChannel_ finished, sent request")))
                    }, g.Pa = function() {
                        this.l = null, H(this.a, "Creating new HttpRequest"), this.b = new L(this, this.a, "rpc", this.T), null === this.h && (this.b.j = this.i), this.b.N = 0;
                        var e = M(this.ua);
                        R(e, "RID", "rpc"), R(e, "SID", this.J), R(e, "CI", this.ka ? "0" : "1"), R(e, "AID", this.N), Be(this, e), R(e, "TYPE", "xmlhttp"), this.h && this.i && xe(e, this.h, this.i), this.G && this.b.setTimeout(this.G), Yc(this.b, e, !0, this.X), H(this.a, "New Request created")
                    }, g.Oa = function(e, t) {
                        if (0 != this.F && (this.b == e || ee(this.c, e)))
                            if (this.u = e.C, !e.v && ee(this.c, e) && 3 == this.F) {
                                try {
                                    var n = this.la.a.parse(t)
                                } catch (e) {
                                    n = null
                                }
                                if (p(n) && 3 == n.length)
                                    if (0 == (t = n)[0])
                                        e: if (H(this.a, "Server claims our backchannel is missing."), this.l)
                                            H(this.a, "But we are currently starting the request.");
                                        else {
                                            if (this.b) {
                                                if (!(this.b.D + 3e3 < e.D))
                                                    break e;
                                                    De(this), this.b.cancel(), this.b = null
                                            } else 
                                                D(this.a.a, "We do not have a BackChannel established");
                                                Le(this), K(18)
                                        } else 
                                            this.xa = t[1], 0 < (e = this.xa - this.N) && (t = t[2], H(this.a, t + " bytes (in " + e + " arrays) are outstanding on the BackChannel"), 37500 > t && this.ka && 0 == this.B&&!this.s && (this.s = Ec(r(this.ib, this), 6e3)));
                                        else 
                                            H(this.a, "Bad POST response data returned"), V(this, 11)
                        } else if ((e.v || this.b == e) && De(this), !xa(t))
                            for (t = n = this.la.a.parse(t), n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (this.N = i[0], i = i[1], 2 == this.F)
                                    if ("c" == i[0]) {
                                        this.J = i[1], this.X = i[2];
                                        var o = i[3];
                                        null != o && (this.na = o, F(this.a, "VER=" + this.na)), null != (o = i[4]) && (this.ya = o, F(this.a, "SVER=" + this.ya)), null != (i = i[5]) && "number" == typeof i && 0 < i && (this.G = i*=1.5, F(this.a, "backChannelRequestTimeoutMs_=" + i)), this.o && (i = e.a) && ((o = id(i, "X-Client-Wire-Protocol")) && be(this.c, o), this.j && ((i = id(i, "X-HTTP-Session-Id")) ? (this.K = i, R(this.D, this.j, i)) : D(this.a.a, "Missing X_HTTP_SESSION_ID in the handshake response"))), this.F = 3, this.f && this.f.Da(), i = e, this.ua = Ud(this, this.X, this.ja), i.v ? (H(this.a, "Upgrade the handshake request to a backchannel."), fe(this.c, i), (o = this.G) && i.setTimeout(o), i.s && (bd(i), Zc(i)), this.b = i) : Ke(this)
                                    } else 
                                        "stop" != i[0] && "close" != i[0] || V(this, 7);
                                else 
                                    3 == this.F && ("stop" == i[0] || "close" == i[0] ? "stop" == i[0] ? V(this, 7) : ze(this) : "noop" != i[0] && this.f && this.f.Ca(i), this.B = 0)
                            }
                        }, g.ib = function() {
                        null != this.s && (this.s = null, this.b.cancel(), this.b = null, Le(this), K(19))
                    }, g.ta = function(e) {
                        H(this.a, "Request complete");
                        var n = null;
                        if (this.b == e) {
                            De(this), this.b = null;
                            var r = 2
                        } else {
                            if (!ee(this.c, e))
                                return;
                            n = e.u, fe(this.c, e), r = 1
                        }
                        if (this.u = e.C, 0 != this.F)
                            if (e.f)
                                1 == r ? (Dc(e.l ? e.l.length : 0, t() - e.D, this.v), Fe(this)) : Ke(this);
                            else {
                                var i = e.m;
                                if (3 == i || 0 == i && 0 < this.u)
                                    H(this.a, "Not retrying due to error type");
                                else {
                                    var o = this;
                                    if (H(this.a, function() {
                                        return "Maybe retrying, last error: " + Sc(i, o.u)
                                    }), 1 == r && Ge(this, e) || 2 == r && Le(this))
                                        return;
                                        H(this.a, "Exceeded max number of retries")
                                    }
                                    switch (n && 0 < n.length && he(this.c, n), H(this.a, "Error: HTTP request failed"), i) {
                                    case 1:
                                        V(this, 5);
                                        break;
                                    case 4:
                                        V(this, 10);
                                        break;
                                    case 3:
                                        V(this, 6);
                                        break;
                                    default:
                                        V(this, 2)
                                    }
                                }
                        }, g.pb = function(e) {
                        e ? (F(this.a, "Successfully pinged google.com"), K(2)) : (F(this.a, "Failed to ping google.com"), K(1))
                    }, g.ca = function(e) {
                        if (e&&!this.S)
                            throw Error("Can't create secondary domain capable XhrIo object.");
                        return (e = new T(this.Ta)).o = this.S, e
                    }, g.qa = function() {
                        return !!this.f&&!0
                    }, g.ia = function() {
                        return this.S
                    }, g = Oe.prototype, g.Da = function() {}, g.Ca = function() {}, g.Ba = function() {}, g.Aa = function() {}, g.ab = function() {}, Qe.prototype.a = function(e, t) {
                        return new W(e, t)
                    }, u(W, B), g = W.prototype, g.addEventListener = function(e, t, n, r) {
                        W.H.addEventListener.call(this, e, t, n, r)
                    }, g.removeEventListener = function(e, t, n, r) {
                        W.H.removeEventListener.call(this, e, t, n, r)
                    }, g.fb = function() {
                        this.a.f = this.h, this.l && (this.a.S=!0);
                        var e = this.a, t = this.o, n = this.b, r = this.g || void 0;
                        H(e.a, "connect()"), K(0), e.ja = n, e.U = r || {}, e.o && (H(e.a, "connect() bypassed channel-test."), e.I.b = [], e.I.a=!1), H(e.a, "connectTest_()"), e.C = new Rd(e, e.a), null === e.h && (e.C.i = e.i), n = t, e.h && e.i && (n = xe(t, e.h, e.i)), (e = e.C).m = n, t = Me(e.a, e.m), K(3), null != (n = e.a.I.b) ? (e.g = n[0], e.P = 1, Sd(e)) : ($c(t, "MODE", "init"), !e.a.o && e.a.j && $c(t, "X-HTTP-Session-Id", e.a.j), e.c = new L(e, e.b, void 0, void 0), e.c.j = e.i, Yc(e.c, t, !1, null), e.P = 0)
                    }, g.close = function() {
                        ze(this.a)
                    }, g.gb = function(e) {
                        if (l(e)) {
                            var t = {};
                            t.__data__ = e, Ee(this.a, t)
                        } else 
                            this.j ? ((t = {}).__data__ = Db(e), Ee(this.a, t)) : Ee(this.a, e)
                    }, g.w = function() {
                        this.a.f = null, delete this.h, ze(this.a), delete this.a, W.H.w.call(this)
                    }, u(Se, Mc), u(Te, Nc), u(Re, Oe), Re.prototype.Da = function() {
                        rc(this.a.c, "WebChannel opened on " + this.a.b), this.a.dispatchEvent("a")
                    }, Re.prototype.Ca = function(e) {
                        this.a.dispatchEvent(new Se(e))
                    }, Re.prototype.Ba = function(e) {
                        rc(this.a.c, "WebChannel aborted on " + this.a.b + " due to channel error: " + e), this.a.dispatchEvent(new Te(e))
                    }, Re.prototype.Aa = function() {
                        rc(this.a.c, "WebChannel closed on " + this.a.b), this.a.dispatchEvent("b")
                    };
                    var Ue = ja(function(e, t) {
                        function n() {}
                        n.prototype = e.prototype;
                        var r = new n;
                        return e.apply(r, Array.prototype.slice.call(arguments, 1)), r
                    }, Qe);
                    function Ve() {
                        this.b = [], this.a = []
                    }
                    function We(e) {
                        return 0 == e.b.length && (e.b = e.a, e.b.reverse(), e.a = []), e.b.pop()
                    }
                    function Xe(e) {
                        return e.b.length + e.a.length
                    }
                    function Ye(e, t) {
                        if (w.call(this), this.h = e || 0, this.c = t || 10, this.h > this.c)
                            throw Error(Ze);
                        this.a = new Ve, this.b = new Xd, this.g = null, this.aa()
                    }
                    Ve.prototype.A = function() {
                        for (var e = [], t = this.b.length - 1; 0 <= t; --t)
                            e.push(this.b[t]);
                        var n = this.a.length;
                        for (t = 0; t < n; ++t)
                            e.push(this.a[t]);
                        return e
                    }, u(Ye, w);
                    var Ze = "[goog.structs.Pool] Min can not be greater than max";
                    function af(e) {
                        if ("function" == typeof e.$)
                            e.$();
                        else 
                            for (var t in e)
                                e[t] = null
                        }
                    function $e(e) {
                        return Xe(e.a) + e.b.a.c
                    }
                    function bf(e, t) {
                        this.a = e, this.b = t
                    }
                    function cf(e) {
                        if (this.a = [], e)
                            e: {
                            if (e instanceof cf) {
                                var t = e.M();
                                if (e = e.A(), 0 >= this.a.length) {
                                    for (var n = this.a, r = 0; r < t.length; r++)
                                        n.push(new bf(t[r], e[r]));
                                        break e
                                }
                            } else 
                                t = Ea(e), e = Da(e);
                                for (r = 0; r < t.length; r++)
                                    df(this, t[r], e[r])
                        }
                    }
                    function df(e, t, n) {
                        var r = e.a;
                        for (r.push(new bf(t, n)), t = r.length - 1, n = (e = e.a)[t]; 0 < t && e[r = t - 1>>1].a > n.a;)
                            e[t] = e[r], t = r;
                        e[t] = n
                    }
                    function ef() {
                        cf.call(this)
                    }
                    function Y(e, t) {
                        this.f = new ef, Ye.call(this, e, t)
                    }
                    function Z(e, t, n, r) {
                        this.l = e, this.j=!!r, Y.call(this, t, n)
                    }
                    g = Ye.prototype, g.da = function() {
                        var e = t();
                        if (!(null != this.g && 0 > e - this.g)) {
                            for (var n; 0 < Xe(this.a) && (n = We(this.a), !this.sa(n));)
                                this.aa();
                            return !n && $e(this) < this.c && (n = this.pa()), n && (this.g = e, this.b.add(n)), n
                        }
                    }, g.ob = function(e) {
                        return !!pd(this.b.a, Yd(e)) && (this.ma(e), !0)
                    }, g.ma = function(e) {
                        pd(this.b.a, Yd(e)), this.sa(e) && $e(this) < this.c ? this.a.a.push(e) : af(e)
                    }, g.aa = function() {
                        for (var e = this.a; $e(this) < this.h;) {
                            var t = this.pa();
                            e.a.push(t)
                        }
                        for (; $e(this) > this.c && 0 < Xe(this.a);)
                            af(We(e))
                    }, g.pa = function() {
                        return {}
                    }, g.sa = function(e) {
                        return "function" != typeof e.bb || e.bb()
                    }, g.w = function() {
                        if (Ye.H.w.call(this), 0 < this.b.a.c)
                            throw Error("[goog.structs.Pool] Objects not released");
                        delete this.b;
                        for (var e = this.a; 0 != e.b.length || 0 != e.a.length;)
                            af(We(e));
                        delete this.a
                    }, cf.prototype.A = function() {
                        for (var e = this.a, t = [], n = e.length, r = 0; r < n; r++)
                            t.push(e[r].b);
                        return t
                    }, cf.prototype.M = function() {
                        for (var e = this.a, t = [], n = e.length, r = 0; r < n; r++)
                            t.push(e[r].a);
                        return t
                    }, u(ef, cf), u(Y, Ye), g = Y.prototype, g.da = function(e, t) {
                        if (!e)
                            return Y.H.da.call(this);
                        df(this.f, void 0 !== t ? t : 100, e), this.ra()
                    }, g.ra = function() {
                        for (var e = this.f; 0 < e.a.length;) {
                            var t = this.da();
                            if (!t)
                                break;
                            var n = e, r = n.a, i = r.length, o = r[0];
                            if (0 >= i)
                                o = void 0;
                            else {
                                if (1 == i)
                                    ua(r);
                                else {
                                    r[0] = r.pop(), r = 0, i = (n = n.a).length;
                                    for (var a = n[r]; r < i>>1;) {
                                        var s = 2 * r + 1, u = 2 * r + 2;
                                        if (n[s = u < i && n[u].a < n[s].a ? u: s].a > a.a)
                                            break;
                                        n[r] = n[s], r = s
                                    }
                                    n[r] = a
                                }
                                o = o.b
                            }
                            o.apply(this, [t])
                        }
                    }, g.ma = function(e) {
                        Y.H.ma.call(this, e), this.ra()
                    }, g.aa = function() {
                        Y.H.aa.call(this), this.ra()
                    }, g.w = function() {
                        Y.H.w.call(this), k.clearTimeout(void 0), ua(this.f.a), this.f = null
                    }, u(Z, Y), Z.prototype.pa = function() {
                        var e = new T, t = this.l;
                        return t && t.forEach(function(t, n) {
                            e.headers.set(n, t)
                        }), this.j && (e.o=!0), e
                    }, Z.prototype.sa = function(e) {
                        return !e.i&&!e.a
                    }, Qe.prototype.createWebChannel = Qe.prototype.a, W.prototype.send = W.prototype.gb, W.prototype.open = W.prototype.fb, W.prototype.close = W.prototype.close, Fc.NO_ERROR = 0, Fc.TIMEOUT = 8, Fc.HTTP_ERROR = 6, Gc.COMPLETE = "complete", Kc.EventType = Lc, Lc.OPEN = "a", Lc.CLOSE = "b", Lc.ERROR = "c", Lc.MESSAGE = "d", B.prototype.listen = B.prototype.Ia, Z.prototype.getObject = Z.prototype.da, Z.prototype.releaseObject = Z.prototype.ob, T.prototype.listenOnce = T.prototype.Ja, T.prototype.getLastError = T.prototype.hb, T.prototype.getLastErrorCode = T.prototype.Ga, T.prototype.getStatus = T.prototype.W, T.prototype.getStatusText = T.prototype.Ha, T.prototype.getResponseJson = T.prototype.eb, T.prototype.getResponseText = T.prototype.V, T.prototype.getResponseText = T.prototype.V, T.prototype.send = T.prototype.fa, module.exports = {
                        createWebChannelTransport: Ue,
                        ErrorCode: Fc,
                        EventType: Gc,
                        WebChannel: Kc,
                        XhrIoPool: Z
                    }
                }).call(void 0 !== commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }), dist_1 = dist.createWebChannelTransport, dist_2 = dist.ErrorCode, dist_3 = dist.EventType, dist_4 = dist.WebChannel, dist_5 = dist.XhrIoPool, SDK_VERSION = firebase.SDK_VERSION, logClient = new Logger("@firebase/firestore"), LogLevel$1;
            function getLogLevel() {
                return logClient.logLevel === LogLevel.DEBUG ? LogLevel$1.DEBUG : logClient.logLevel === LogLevel.SILENT ? LogLevel$1.SILENT : LogLevel$1.ERROR
            }
            function setLogLevel$1(e) {
                switch (e) {
                case LogLevel$1.DEBUG:
                    logClient.logLevel = LogLevel.DEBUG;
                    break;
                case LogLevel$1.ERROR:
                    logClient.logLevel = LogLevel.ERROR;
                    break;
                case LogLevel$1.SILENT:
                    logClient.logLevel = LogLevel.SILENT;
                    break;
                default:
                    logClient.error("Firestore (" + SDK_VERSION + "): Invalid value passed to `setLogLevel`")
                }
            }
            function debug(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                if (logClient.logLevel <= LogLevel.DEBUG) {
                    var i = n.map(argToString);
                    logClient.debug.apply(logClient, ["Firestore (" + SDK_VERSION + ") [" + e + "]: " + t].concat(i))
                }
            }
            function error(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                if (logClient.logLevel <= LogLevel.ERROR) {
                    var r = t.map(argToString);
                    logClient.error.apply(logClient, ["Firestore (" + SDK_VERSION + "): " + e].concat(r))
                }
            }
            function argToString(e) {
                if ("string" == typeof e)
                    return e;
                var t = PlatformSupport.getPlatform();
                try {
                    return t.formatJSON(e)
                } catch (t) {
                    return e
                }
            }
            function fail(e) {
                var t = "FIRESTORE (" + SDK_VERSION + ") INTERNAL ASSERTION FAILED: " + e;
                throw error(t), new Error(t)
            }
            function assert(e, t) {
                e || fail(t)
            }
            LogLevel$$1 = LogLevel$1 || (LogLevel$1 = {}), LogLevel$$1[LogLevel$$1.DEBUG = 0] = "DEBUG", LogLevel$$1[LogLevel$$1.ERROR = 1] = "ERROR", LogLevel$$1[LogLevel$$1.SILENT = 2] = "SILENT";
            var PlatformSupport = function() {
                function e() {}
                return e.setPlatform = function(t) {
                    e.platform && fail("Platform already defined"), e.platform = t
                }, e.getPlatform = function() {
                    return e.platform || fail("Platform not set"), e.platform
                }, e
            }();
            function emptyByteString() {
                return PlatformSupport.getPlatform().emptyByteString
            }
            var Code = {
                OK: "ok",
                CANCELLED: "cancelled",
                UNKNOWN: "unknown",
                INVALID_ARGUMENT: "invalid-argument",
                DEADLINE_EXCEEDED: "deadline-exceeded",
                NOT_FOUND: "not-found",
                ALREADY_EXISTS: "already-exists",
                PERMISSION_DENIED: "permission-denied",
                UNAUTHENTICATED: "unauthenticated",
                RESOURCE_EXHAUSTED: "resource-exhausted",
                FAILED_PRECONDITION: "failed-precondition",
                ABORTED: "aborted",
                OUT_OF_RANGE: "out-of-range",
                UNIMPLEMENTED: "unimplemented",
                INTERNAL: "internal",
                UNAVAILABLE: "unavailable",
                DATA_LOSS: "data-loss"
            }, FirestoreError = function(e) {
                function t(t, n) {
                    var r = e.call(this, n) || this;
                    return r.code = t, r.message = n, r.name = "FirebaseError", r.toString = function() {
                        return r.name + ": [code=" + r.code + "]: " + r.message
                    }, r
                }
                return __extends(t, e), t
            }(Error);
            function makeConstructorPrivate(e, t) {
                function n() {
                    var e = "This constructor is private.";
                    throw t && (e += " ", e += t), new FirestoreError(Code.INVALID_ARGUMENT, e)
                }
                for (var r in n.prototype = e.prototype, e)
                    e.hasOwnProperty(r) && (n[r] = e[r]);
                return n
            }
            function contains(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function indices(e) {
                return Object.keys(e).map(function(e) {
                    return Number(e)
                })
            }
            function defaulted(e, t) {
                return void 0 !== e ? e : t
            }
            function forEachNumber(e, t) {
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Number(n);
                        isNaN(r) || t(r, e[n])
                    }
            }
            function forEach(e, t) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
            }
            function isEmpty(e) {
                for (var t in assert(null != e && "object" == typeof e, "isEmpty() expects object parameter."), e)
                    if (Object.prototype.hasOwnProperty.call(e, t))
                        return !1;
                return !0
            }
            function shallowCopy(e) {
                assert(e && "object" == typeof e, "shallowCopy() expects object parameter.");
                var t = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
            function validateExactNumberOfArgs(e, t, n) {
                if (t.length !== n)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires " + formatPlural(n, "argument") + ", but was called with " + formatPlural(t.length, "argument") + ".")
            }
            function validateAtLeastNumberOfArgs(e, t, n) {
                if (t.length < n)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires at least " + formatPlural(n, "argument") + ", but was called with " + formatPlural(t.length, "argument") + ".")
            }
            function validateBetweenNumberOfArgs(e, t, n, r) {
                if (t.length < n || t.length > r)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires between " + n + " and " + r + " arguments, but was called with " + formatPlural(t.length, "argument") + ".")
            }
            function validateNamedArrayAtLeastNumberOfElements(e, t, n, r) {
                if (!(t instanceof Array) || t.length < r)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires its " + n + " argument to be an array with at least " + formatPlural(r, "element") + ".")
            }
            function validateArgType(e, t, n, r) {
                validateType(e, t, ordinal(n) + " argument", r)
            }
            function validateOptionalArgType(e, t, n, r) {
                void 0 !== r && validateArgType(e, t, n, r)
            }
            function validateNamedType(e, t, n, r) {
                validateType(e, t, n + " option", r)
            }
            function validateNamedOptionalType(e, t, n, r) {
                void 0 !== r && validateNamedType(e, t, n, r)
            }
            function validateArrayElements(e, t, n, r, i) {
                if (!(r instanceof Array))
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires its " + t + " option to be an array, but it was: " + valueDescription(r));
                for (var o = 0; o < r.length; ++o)
                    if (!i(r[o]))
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires all " + t + " elements to be " + n + ", but the value at index " + o + " was: " + valueDescription(r[o]))
            }
            function validateOptionalArrayElements(e, t, n, r, i) {
                void 0 !== r && validateArrayElements(e, t, n, r, i)
            }
            function validateNamedPropertyEquals(e, t, n, r, i) {
                for (var o = [], a = 0, s = i; a < s.length; a++) {
                    var u = s[a];
                    if (u === r)
                        return;
                    o.push(valueDescription(u))
                }
                var c = valueDescription(r);
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + e + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
            }
            function validateNamedOptionalPropertyEquals(e, t, n, r, i) {
                void 0 !== r && validateNamedPropertyEquals(e, t, n, r, i)
            }
            function validateType(e, t, n, r) {
                if (typeof r !== t || "object" === t&&!isPlainObject(r)) {
                    var i = valueDescription(r);
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires its " + n + " to be of type " + t + ", but it was: " + i)
                }
            }
            function isPlainObject(e) {
                return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e))
            }
            function valueDescription(e) {
                if (void 0 === e)
                    return "undefined";
                if (null === e)
                    return "null";
                if ("string" == typeof e)
                    return e.length > 20 && (e = e.substring(0, 20) + "..."), JSON.stringify(e);
                if ("number" == typeof e || "boolean" == typeof e)
                    return "" + e;
                if ("object" == typeof e) {
                    if (e instanceof Array)
                        return "an array";
                    var t = tryGetCustomObjectType(e);
                    return t ? "a custom " + t + " object" : "an object"
                }
                return "function" == typeof e ? "a function" : fail("Unknown wrong type: " + typeof e)
            }
            function tryGetCustomObjectType(e) {
                if (e.constructor) {
                    var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
                    if (t && t.length > 1)
                        return t[1]
                }
                return null
            }
            function validateDefined(e, t, n) {
                if (void 0 === n)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires a valid " + ordinal(t) + " argument, but it was undefined.")
            }
            function validateOptionNames(e, t, n) {
                forEach(t, function(t, r) {
                    if (n.indexOf(t) < 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + e + "(). Available options: " + n.join(", "))
                })
            }
            function invalidClassError(e, t, n, r) {
                var i = valueDescription(r);
                return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() requires its " + ordinal(n) + " argument to be a " + t + ", but it was: " + i)
            }
            function ordinal(e) {
                switch (e) {
                case 1:
                    return "first";
                case 2:
                    return "second";
                case 3:
                    return "third";
                default:
                    return e + "th"
                }
            }
            function formatPlural(e, t) {
                return e + " " + t + (1 === e ? "" : "s")
            }
            var AutoId = function() {
                function e() {}
                return e.newId = function() {
                    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", n = 0; n < 20; n++)
                        t += e.charAt(Math.floor(Math.random() * e.length));
                    return assert(20 === t.length, "Invalid auto ID: " + t), t
                }, e
            }();
            function primitiveComparator(e, t) {
                return e < t?-1 : e > t ? 1 : 0
            }
            function equals(e, t) {
                return null !== e && void 0 !== e?!(!t ||!e.isEqual(t)) : e === t
            }
            function arrayEquals(e, t) {
                if (e.length !== t.length)
                    return !1;
                for (var n = 0; n < e.length; n++)
                    if (!e[n].isEqual(t[n]))
                        return !1;
                return !0
            }
            function immediateSuccessor(e) {
                return e + "\0"
            }
            function assertUint8ArrayAvailable() {
                if ("undefined" == typeof Uint8Array)
                    throw new FirestoreError(Code.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }
            function assertBase64Available() {
                if (!PlatformSupport.getPlatform().base64Available)
                    throw new FirestoreError(Code.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Blob = function() {
                function e(e) {
                    assertBase64Available(), this._binaryString = e
                }
                return e.fromBase64String = function(t) {
                    validateExactNumberOfArgs("Blob.fromBase64String", arguments, 1), validateArgType("Blob.fromBase64String", "string", 1, t), assertBase64Available();
                    try {
                        return new e(PlatformSupport.getPlatform().atob(t))
                    } catch (e) {
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e)
                    }
                }, e.fromUint8Array = function(t) {
                    if (validateExactNumberOfArgs("Blob.fromUint8Array", arguments, 1), assertUint8ArrayAvailable(), !(t instanceof Uint8Array))
                        throw invalidClassError("Blob.fromUint8Array", "Uint8Array", 1, t);
                    return new e(Array.prototype.map.call(t, function(e) {
                        return String.fromCharCode(e)
                    }).join(""))
                }, e.prototype.toBase64 = function() {
                    return validateExactNumberOfArgs("Blob.toBase64", arguments, 0), assertBase64Available(), PlatformSupport.getPlatform().btoa(this._binaryString)
                }, e.prototype.toUint8Array = function() {
                    validateExactNumberOfArgs("Blob.toUint8Array", arguments, 0), assertUint8ArrayAvailable();
                    for (var e = new Uint8Array(this._binaryString.length), t = 0; t < this._binaryString.length; t++)
                        e[t] = this._binaryString.charCodeAt(t);
                    return e
                }, e.prototype.toString = function() {
                    return "Blob(base64: " + this.toBase64() + ")"
                }, e.prototype.isEqual = function(e) {
                    return this._binaryString === e._binaryString
                }, e.prototype._compareTo = function(e) {
                    return primitiveComparator(this._binaryString, e._binaryString)
                }, e
            }(), PublicBlob = makeConstructorPrivate(Blob, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), GeoPoint = function() {
                function e(e, t) {
                    if (validateExactNumberOfArgs("GeoPoint", arguments, 2), validateArgType("GeoPoint", "number", 1, e), validateArgType("GeoPoint", "number", 2, t), !isFinite(e) || e<-90 || e > 90)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
                    if (!isFinite(t) || t<-180 || t > 180)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
                    this._lat = e, this._long = t
                }
                return Object.defineProperty(e.prototype, "latitude", {
                    get: function() {
                        return this._lat
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "longitude", {
                    get: function() {
                        return this._long
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(e) {
                    return this._lat === e._lat && this._long === e._long
                }, e.prototype._compareTo = function(e) {
                    return primitiveComparator(this._lat, e._lat) || primitiveComparator(this._long, e._long)
                }, e
            }(), Timestamp = function() {
                function e(e, t) {
                    if (this.seconds = e, this.nanoseconds = t, t < 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
                    if (t >= 1e9)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
                    if (e<-62135596800)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
                    if (e >= 253402300800)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
                }
                return e.now = function() {
                    return e.fromMillis(Date.now())
                }, e.fromDate = function(t) {
                    return e.fromMillis(t.getTime())
                }, e.fromMillis = function(t) {
                    var n = Math.floor(t / 1e3);
                    return new e(n, 1e6 * (t - 1e3 * n))
                }, e.prototype.toDate = function() {
                    return new Date(this.toMillis())
                }, e.prototype.toMillis = function() {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }, e.prototype._compareTo = function(e) {
                    return this.seconds === e.seconds ? primitiveComparator(this.nanoseconds, e.nanoseconds) : primitiveComparator(this.seconds, e.seconds)
                }, e.prototype.isEqual = function(e) {
                    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
                }, e.prototype.toString = function() {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }, e
            }(), DatabaseInfo = function() {
                return function(e, t, n, r) {
                    this.databaseId = e, this.persistenceKey = t, this.host = n, this.ssl = r
                }
            }(), DEFAULT_DATABASE_NAME = "(default)", DatabaseId = function() {
                function e(e, t) {
                    this.projectId = e, this.database = t || DEFAULT_DATABASE_NAME
                }
                return Object.defineProperty(e.prototype, "isDefaultDatabase", {
                    get: function() {
                        return this.database === DEFAULT_DATABASE_NAME
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(t) {
                    return t instanceof e && t.projectId === this.projectId && t.database === this.database
                }, e.prototype.compareTo = function(e) {
                    return primitiveComparator(this.projectId, e.projectId) || primitiveComparator(this.database, e.database)
                }, e
            }(), DOCUMENT_KEY_NAME = "__name__", Path = function() {
                function e(e, t, n) {
                    this.init(e, t, n)
                }
                return e.prototype.init = function(e, t, n) {
                    void 0 === t ? t = 0 : t > e.length && fail("offset " + t + " out of range " + e.length), void 0 === n ? n = e.length - t : n > e.length - t && fail("length " + n + " out of range " + (e.length - t)), this.segments = e, this.offset = t, this.len = n
                }, e.prototype.construct = function(e, t, n) {
                    var r = Object.create(Object.getPrototypeOf(this));
                    return r.init(e, t, n), r
                }, Object.defineProperty(e.prototype, "length", {
                    get: function() {
                        return this.len
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(t) {
                    return 0 === e.comparator(this, t)
                }, e.prototype.child = function(t) {
                    var n = this.segments.slice(this.offset, this.limit());
                    return t instanceof e ? t.forEach(function(e) {
                        n.push(e)
                    }) : "string" == typeof t ? n.push(t) : fail("Unknown parameter type for Path.child(): " + t), this.construct(n)
                }, e.prototype.limit = function() {
                    return this.offset + this.length
                }, e.prototype.popFirst = function(e) {
                    return e = void 0 === e ? 1 : e, assert(this.length >= e, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + e, this.length - e)
                }, e.prototype.popLast = function() {
                    return assert(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1)
                }, e.prototype.firstSegment = function() {
                    return assert(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset]
                }, e.prototype.lastSegment = function() {
                    return assert(!this.isEmpty(), "Can't call lastSegment() on empty path"), this.segments[this.limit() - 1]
                }, e.prototype.get = function(e) {
                    return assert(e < this.length, "Index out of range"), this.segments[this.offset + e]
                }, e.prototype.isEmpty = function() {
                    return 0 === this.length
                }, e.prototype.isPrefixOf = function(e) {
                    if (e.length < this.length)
                        return !1;
                    for (var t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t))
                            return !1;
                    return !0
                }, e.prototype.isImmediateParentOf = function(e) {
                    if (this.length + 1 !== e.length)
                        return !1;
                    for (var t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t))
                            return !1;
                    return !0
                }, e.prototype.forEach = function(e) {
                    for (var t = this.offset, n = this.limit(); t < n; t++)
                        e(this.segments[t])
                }, e.prototype.toArray = function() {
                    return this.segments.slice(this.offset, this.limit())
                }, e.comparator = function(e, t) {
                    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                        var i = e.get(r), o = t.get(r);
                        if (i < o)
                            return - 1;
                        if (i > o)
                            return 1
                    }
                    return e.length < t.length?-1 : e.length > t.length ? 1 : 0
                }, e
            }(), ResourcePath = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.canonicalString = function() {
                    return this.toArray().join("/")
                }, t.prototype.toString = function() {
                    return this.canonicalString()
                }, t.fromString = function(e) {
                    if (e.indexOf("//") >= 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid path (" + e + "). Paths must not contain // in them.");
                    return new t(e.split("/").filter(function(e) {
                        return e.length > 0
                    }))
                }, t.EMPTY_PATH = new t([]), t
            }(Path), identifierRegExp = /^[_a-zA-Z][_a-zA-Z0-9]*$/, FieldPath = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.isValidIdentifier = function(e) {
                    return identifierRegExp.test(e)
                }, t.prototype.canonicalString = function() {
                    return this.toArray().map(function(e) {
                        return e = e.replace("\\", "\\\\").replace("`", "\\`"), t.isValidIdentifier(e) || (e = "`" + e + "`"), e
                    }).join(".")
                }, t.prototype.toString = function() {
                    return this.canonicalString()
                }, t.prototype.isKeyField = function() {
                    return 1 === this.length && this.get(0) === DOCUMENT_KEY_NAME
                }, t.keyField = function() {
                    return new t([DOCUMENT_KEY_NAME])
                }, t.fromServerFormat = function(e) {
                    for (var n = [], r = "", i = 0, o = function() {
                        if (0 === r.length)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                        n.push(r), r = ""
                    }, a=!1; i < e.length;) {
                        var s = e[i];
                        if ("\\" === s) {
                            if (i + 1 === e.length)
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
                            var u = e[i + 1];
                            if ("\\" !== u && "." !== u && "`" !== u)
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
                            r += u, i += 2
                        } else 
                            "`" === s ? (a=!a, i++) : "." !== s || a ? (r += s, i++) : (o(), i++)
                    }
                    if (o(), a)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
                    return new t(n)
                }, t.EMPTY_PATH = new t([]), t
            }(Path), DocumentKey = function() {
                function e(t) {
                    this.path = t, assert(e.isDocumentKey(t), "Invalid DocumentKey with an odd number of segments: " + t.toArray().join("/"))
                }
                return e.prototype.isEqual = function(e) {
                    return null !== e && 0 === ResourcePath.comparator(this.path, e.path)
                }, e.prototype.toString = function() {
                    return this.path.toString()
                }, e.comparator = function(e, t) {
                    return ResourcePath.comparator(e.path, t.path)
                }, e.isDocumentKey = function(e) {
                    return e.length%2 == 0
                }, e.fromSegments = function(t) {
                    return new e(new ResourcePath(t.slice()))
                }, e.fromPathString = function(t) {
                    return new e(ResourcePath.fromString(t))
                }, e.EMPTY = new e(new ResourcePath([])), e
            }(), MaybeDocument = function() {
                function e(e, t) {
                    this.key = e, this.version = t
                }
                return e.compareByKey = function(e, t) {
                    return DocumentKey.comparator(e.key, t.key)
                }, e
            }(), Document = function(e) {
                function t(t, n, r, i) {
                    var o = e.call(this, t, n) || this;
                    return o.data = r, o.hasLocalMutations = i.hasLocalMutations, o
                }
                return __extends(t, e), t.prototype.field = function(e) {
                    return this.data.field(e)
                }, t.prototype.fieldValue = function(e) {
                    var t = this.field(e);
                    return t ? t.value() : void 0
                }, t.prototype.value = function() {
                    return this.data.value()
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.data.isEqual(e.data) && this.hasLocalMutations === e.hasLocalMutations
                }, t.prototype.toString = function() {
                    return "Document(" + this.key + ", " + this.version + ", " + this.data.toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "})"
                }, t.compareByField = function(e, t, n) {
                    var r = t.field(e), i = n.field(e);
                    return void 0 !== r && void 0 !== i ? r.compareTo(i) : fail("Trying to compare documents on fields that don't exist")
                }, t
            }(MaybeDocument), NoDocument = function(e) {
                function t(t, n) {
                    return e.call(this, t, n) || this
                }
                return __extends(t, e), t.prototype.toString = function() {
                    return "NoDocument(" + this.key + ", " + this.version + ")"
                }, t.prototype.isEqual = function(e) {
                    return e && e.version.isEqual(this.version) && e.key.isEqual(this.key)
                }, t
            }(MaybeDocument), SortedMap = function() {
                function e(e, t) {
                    this.comparator = e, this.root = t || LLRBNode.EMPTY
                }
                return e.prototype.insert = function(t, n) {
                    return new e(this.comparator, this.root.insert(t, n, this.comparator).copy(null, null, LLRBNode.BLACK, null, null))
                }, e.prototype.remove = function(t) {
                    return new e(this.comparator, this.root.remove(t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null))
                }, e.prototype.get = function(e) {
                    for (var t = this.root; !t.isEmpty();) {
                        var n = this.comparator(e, t.key);
                        if (0 === n)
                            return t.value;
                        n < 0 ? t = t.left : n > 0 && (t = t.right)
                    }
                    return null
                }, e.prototype.indexOf = function(e) {
                    for (var t = 0, n = this.root; !n.isEmpty();) {
                        var r = this.comparator(e, n.key);
                        if (0 === r)
                            return t + n.left.size;
                        r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right)
                    }
                    return - 1
                }, e.prototype.isEmpty = function() {
                    return this.root.isEmpty()
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.root.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.minKey = function() {
                    return this.root.minKey()
                }, e.prototype.maxKey = function() {
                    return this.root.maxKey()
                }, e.prototype.inorderTraversal = function(e) {
                    return this.root.inorderTraversal(e)
                }, e.prototype.forEach = function(e) {
                    this.inorderTraversal(function(t, n) {
                        return e(t, n), !1
                    })
                }, e.prototype.reverseTraversal = function(e) {
                    return this.root.reverseTraversal(e)
                }, e.prototype.getIterator = function() {
                    return new SortedMapIterator(this.root, null, this.comparator, !1)
                }, e.prototype.getIteratorFrom = function(e) {
                    return new SortedMapIterator(this.root, e, this.comparator, !1)
                }, e.prototype.getReverseIterator = function() {
                    return new SortedMapIterator(this.root, null, this.comparator, !0)
                }, e.prototype.getReverseIteratorFrom = function(e) {
                    return new SortedMapIterator(this.root, e, this.comparator, !0)
                }, e
            }(), SortedMapIterator = function() {
                function e(e, t, n, r) {
                    this.isReverse = r, this.nodeStack = [];
                    for (var i = 1; !e.isEmpty();)
                        if (i = t ? n(e.key, t) : 1, r && (i*=-1), i < 0)
                            e = this.isReverse ? e.left : e.right;
                        else {
                            if (0 === i) {
                                this.nodeStack.push(e);
                                break
                            }
                            this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
                        }
                }
                return e.prototype.getNext = function() {
                    assert(this.nodeStack.length > 0, "getNext() called on iterator when hasNext() is false.");
                    var e = this.nodeStack.pop(), t = {
                        key: e.key,
                        value: e.value
                    };
                    if (this.isReverse)
                        for (e = e.left; !e.isEmpty();)
                            this.nodeStack.push(e), e = e.right;
                    else 
                        for (e = e.right; !e.isEmpty();)
                            this.nodeStack.push(e), e = e.left;
                    return t
                }, e.prototype.hasNext = function() {
                    return this.nodeStack.length > 0
                }, e.prototype.peek = function() {
                    if (0 === this.nodeStack.length)
                        return null;
                    var e = this.nodeStack[this.nodeStack.length - 1];
                    return {
                        key: e.key,
                        value: e.value
                    }
                }, e
            }(), LLRBNode = function() {
                function e(t, n, r, i, o) {
                    this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : e.EMPTY, this.right = null != o ? o : e.EMPTY, this.size = this.left.size + 1 + this.right.size
                }
                return e.prototype.copy = function(t, n, r, i, o) {
                    return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
                }, e.prototype.isEmpty = function() {
                    return !1
                }, e.prototype.inorderTraversal = function(e) {
                    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
                }, e.prototype.reverseTraversal = function(e) {
                    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                }, e.prototype.min = function() {
                    return this.left.isEmpty() ? this : this.left.min()
                }, e.prototype.minKey = function() {
                    return this.min().key
                }, e.prototype.maxKey = function() {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }, e.prototype.insert = function(e, t, n) {
                    var r = this, i = n(e, r.key);
                    return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp()
                }, e.prototype.removeMin = function() {
                    if (this.left.isEmpty())
                        return e.EMPTY;
                    var t = this;
                    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
                }, e.prototype.remove = function(t, n) {
                    var r, i = this;
                    if (n(t, i.key) < 0)
                        i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, n), null);
                    else {
                        if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 0 === n(t, i.key)) {
                            if (i.right.isEmpty())
                                return e.EMPTY;
                            r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin())
                        }
                        i = i.copy(null, null, null, null, i.right.remove(t, n))
                    }
                    return i.fixUp()
                }, e.prototype.isRed = function() {
                    return this.color
                }, e.prototype.fixUp = function() {
                    var e = this;
                    return e.right.isRed()&&!e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
                }, e.prototype.moveRedLeft = function() {
                    var e = this.colorFlip();
                    return e.right.left.isRed() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight())).rotateLeft()).colorFlip()), e
                }, e.prototype.moveRedRight = function() {
                    var e = this.colorFlip();
                    return e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
                }, e.prototype.rotateLeft = function() {
                    var t = this.copy(null, null, e.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, t, null)
                }, e.prototype.rotateRight = function() {
                    var t = this.copy(null, null, e.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, t)
                }, e.prototype.colorFlip = function() {
                    var e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, e, t)
                }, e.prototype.checkMaxDepth = function() {
                    var e = this.check();
                    return Math.pow(2, e) <= this.size + 1
                }, e.prototype.check = function() {
                    if (this.isRed() && this.left.isRed())
                        throw fail("Red node has red child(" + this.key + "," + this.value + ")");
                    if (this.right.isRed())
                        throw fail("Right child of (" + this.key + "," + this.value + ") is red");
                    var e = this.left.check();
                    if (e !== this.right.check())
                        throw fail("Black depths differ");
                    return e + (this.isRed() ? 0 : 1)
                }, e.EMPTY = null, e.RED=!0, e.BLACK=!1, e
            }(), LLRBEmptyNode = function() {
                function e() {
                    this.size = 0
                }
                return e.prototype.copy = function(e, t, n, r, i) {
                    return this
                }, e.prototype.insert = function(e, t, n) {
                    return new LLRBNode(e, t)
                }, e.prototype.remove = function(e, t) {
                    return this
                }, e.prototype.isEmpty = function() {
                    return !0
                }, e.prototype.inorderTraversal = function(e) {
                    return !1
                }, e.prototype.reverseTraversal = function(e) {
                    return !1
                }, e.prototype.minKey = function() {
                    return null
                }, e.prototype.maxKey = function() {
                    return null
                }, e.prototype.isRed = function() {
                    return !1
                }, e.prototype.checkMaxDepth = function() {
                    return !0
                }, e.prototype.check = function() {
                    return 0
                }, e
            }(), TypeOrder, ServerTimestampBehavior;
            LLRBNode.EMPTY = new LLRBEmptyNode, function(e) {
                e[e.NullValue = 0] = "NullValue", e[e.BooleanValue = 1] = "BooleanValue", e[e.NumberValue = 2] = "NumberValue", e[e.TimestampValue = 3] = "TimestampValue", e[e.StringValue = 4] = "StringValue", e[e.BlobValue = 5] = "BlobValue", e[e.RefValue = 6] = "RefValue", e[e.GeoPointValue = 7] = "GeoPointValue", e[e.ArrayValue = 8] = "ArrayValue", e[e.ObjectValue = 9] = "ObjectValue"
            }(TypeOrder || (TypeOrder = {})), function(e) {
                e[e.Default = 0] = "Default", e[e.Estimate = 1] = "Estimate", e[e.Previous = 2] = "Previous"
            }(ServerTimestampBehavior || (ServerTimestampBehavior = {}));
            var FieldValueOptions = function() {
                function e(e, t) {
                    this.serverTimestampBehavior = e, this.timestampsInSnapshots = t
                }
                return e.fromSnapshotOptions = function(t, n) {
                    switch (t.serverTimestamps) {
                    case"estimate":
                        return new e(ServerTimestampBehavior.Estimate, n);
                    case"previous":
                        return new e(ServerTimestampBehavior.Previous, n);
                    case"none":
                    case void 0:
                        return new e(ServerTimestampBehavior.Default, n);
                    default:
                        return fail("fromSnapshotOptions() called with invalid options.")
                    }
                }, e
            }(), FieldValue = function() {
                function e() {}
                return e.prototype.toString = function() {
                    var e = this.value();
                    return null === e ? "null" : e.toString()
                }, e.prototype.defaultCompareTo = function(e) {
                    return assert(this.typeOrder !== e.typeOrder, "Default compareTo should not be used for values of same type."), primitiveComparator(this.typeOrder, e.typeOrder)
                }, e
            }(), NullValue = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.typeOrder = TypeOrder.NullValue, t.internalValue = null, t
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return null
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? 0 : this.defaultCompareTo(e)
                }, t.INSTANCE = new t, t
            }(FieldValue), BooleanValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.BooleanValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.internalValue === e.internalValue
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? primitiveComparator(this, e) : this.defaultCompareTo(e)
                }, t.of = function(e) {
                    return e ? t.TRUE : t.FALSE
                }, t.TRUE = new t(!0), t.FALSE = new t(!1), t
            }(FieldValue), NumberValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.NumberValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? numericComparator(this.internalValue, e.internalValue) : this.defaultCompareTo(e)
                }, t
            }(FieldValue);
            function numericComparator(e, t) {
                return e < t?-1 : e > t ? 1 : e === t ? 0 : isNaN(e) ? isNaN(t) ? 0 : - 1 : 1
            }
            function numericEquals(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
            var IntegerValue = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return __extends(t, e), t.prototype.isEqual = function(e) {
                    return e instanceof t && numericEquals(this.internalValue, e.internalValue)
                }, t
            }(NumberValue), DoubleValue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.internalValue = t, n
                }
                return __extends(t, e), t.prototype.isEqual = function(e) {
                    return e instanceof t && numericEquals(this.internalValue, e.internalValue)
                }, t.NAN = new t(NaN), t.POSITIVE_INFINITY = new t(1 / 0), t.NEGATIVE_INFINITY = new t( - 1 / 0), t
            }(NumberValue), StringValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.StringValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.internalValue === e.internalValue
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? primitiveComparator(this.internalValue, e.internalValue) : this.defaultCompareTo(e)
                }, t
            }(FieldValue), TimestampValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.TimestampValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return e && e.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate()
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.internalValue.isEqual(e.internalValue)
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? this.internalValue._compareTo(e.internalValue) : e instanceof ServerTimestampValue?-1 : this.defaultCompareTo(e)
                }, t
            }(FieldValue), ServerTimestampValue = function(e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r.localWriteTime = t, r.previousValue = n, r.typeOrder = TypeOrder.TimestampValue, r
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return e && e.serverTimestampBehavior === ServerTimestampBehavior.Estimate ? new TimestampValue(this.localWriteTime).value(e) : e && e.serverTimestampBehavior === ServerTimestampBehavior.Previous && this.previousValue ? this.previousValue.value(e) : null
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.localWriteTime.isEqual(e.localWriteTime)
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? this.localWriteTime._compareTo(e.localWriteTime) : e instanceof TimestampValue ? 1 : this.defaultCompareTo(e)
                }, t.prototype.toString = function() {
                    return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">"
                }, t
            }(FieldValue), BlobValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.BlobValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.internalValue.isEqual(e.internalValue)
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? this.internalValue._compareTo(e.internalValue) : this.defaultCompareTo(e)
                }, t
            }(FieldValue), RefValue = function(e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r.databaseId = t, r.key = n, r.typeOrder = TypeOrder.RefValue, r
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.key
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && (this.key.isEqual(e.key) && this.databaseId.isEqual(e.databaseId))
                }, t.prototype.compareTo = function(e) {
                    if (e instanceof t) {
                        var n = this.databaseId.compareTo(e.databaseId);
                        return 0 !== n ? n : DocumentKey.comparator(this.key, e.key)
                    }
                    return this.defaultCompareTo(e)
                }, t
            }(FieldValue), GeoPointValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.GeoPointValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.internalValue.isEqual(e.internalValue)
                }, t.prototype.compareTo = function(e) {
                    return e instanceof t ? this.internalValue._compareTo(e.internalValue) : this.defaultCompareTo(e)
                }, t
            }(FieldValue), ObjectValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.ObjectValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    var t = {};
                    return this.internalValue.inorderTraversal(function(n, r) {
                        t[n] = r.value(e)
                    }), t
                }, t.prototype.forEach = function(e) {
                    this.internalValue.inorderTraversal(e)
                }, t.prototype.isEqual = function(e) {
                    if (e instanceof t) {
                        for (var n = this.internalValue.getIterator(), r = e.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                            var i = n.getNext(), o = r.getNext();
                            if (i.key !== o.key ||!i.value.isEqual(o.value))
                                return !1
                        }
                        return !n.hasNext()&&!r.hasNext()
                    }
                    return !1
                }, t.prototype.compareTo = function(e) {
                    if (e instanceof t) {
                        for (var n = this.internalValue.getIterator(), r = e.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                            var i = n.getNext(), o = r.getNext(), a = primitiveComparator(i.key, o.key) || i.value.compareTo(o.value);
                            if (a)
                                return a
                        }
                        return primitiveComparator(n.hasNext(), r.hasNext())
                    }
                    return this.defaultCompareTo(e)
                }, t.prototype.set = function(e, n) {
                    if (assert(!e.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === e.length)
                        return this.setChild(e.firstSegment(), n);
                    var r = this.child(e.firstSegment());
                    r instanceof t || (r = t.EMPTY);
                    var i = r.set(e.popFirst(), n);
                    return this.setChild(e.firstSegment(), i)
                }, t.prototype.delete = function(e) {
                    if (assert(!e.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === e.length)
                        return new t(this.internalValue.remove(e.firstSegment()));
                    var n = this.child(e.firstSegment());
                    if (n instanceof t) {
                        var r = n.delete(e.popFirst());
                        return new t(this.internalValue.insert(e.firstSegment(), r))
                    }
                    return this
                }, t.prototype.contains = function(e) {
                    return void 0 !== this.field(e)
                }, t.prototype.field = function(e) {
                    assert(!e.isEmpty(), "Can't get field of empty path");
                    var n = this;
                    return e.forEach(function(e) {
                        n = n instanceof t && n.internalValue.get(e) || void 0
                    }), n
                }, t.prototype.toString = function() {
                    return JSON.stringify(this.value())
                }, t.prototype.child = function(e) {
                    return this.internalValue.get(e) || void 0
                }, t.prototype.setChild = function(e, n) {
                    return new t(this.internalValue.insert(e, n))
                }, t.EMPTY = new t(new SortedMap(primitiveComparator)), t
            }(FieldValue), ArrayValue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.internalValue = t, n.typeOrder = TypeOrder.ArrayValue, n
                }
                return __extends(t, e), t.prototype.value = function(e) {
                    return this.internalValue.map(function(t) {
                        return t.value(e)
                    })
                }, t.prototype.forEach = function(e) {
                    this.internalValue.forEach(e)
                }, t.prototype.isEqual = function(e) {
                    if (e instanceof t) {
                        if (this.internalValue.length !== e.internalValue.length)
                            return !1;
                        for (var n = 0; n < this.internalValue.length; n++)
                            if (!this.internalValue[n].isEqual(e.internalValue[n]))
                                return !1;
                        return !0
                    }
                    return !1
                }, t.prototype.compareTo = function(e) {
                    if (e instanceof t) {
                        for (var n = Math.min(this.internalValue.length, e.internalValue.length), r = 0; r < n; r++) {
                            var i = this.internalValue[r].compareTo(e.internalValue[r]);
                            if (i)
                                return i
                        }
                        return primitiveComparator(this.internalValue.length, e.internalValue.length)
                    }
                    return this.defaultCompareTo(e)
                }, t.prototype.toString = function() {
                    return JSON.stringify(this.value())
                }, t
            }(FieldValue), NumberAsAny = Number, MIN_SAFE_INTEGER = NumberAsAny.MIN_SAFE_INTEGER||-(Math.pow(2, 53) - 1), MAX_SAFE_INTEGER = NumberAsAny.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, isInteger = NumberAsAny.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            };
            function isNullOrUndefined(e) {
                return null === e || void 0 === e
            }
            function isSafeInteger(e) {
                return isInteger(e) && e <= MAX_SAFE_INTEGER && e >= MIN_SAFE_INTEGER
            }
            var Query = function() {
                function e(e, t, n, r, i, o) {
                    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), this.path = e, this.explicitOrderBy = t, this.filters = n, this.limit = r, this.startAt = i, this.endAt = o, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt)
                }
                return e.atPath = function(t) {
                    return new e(t)
                }, Object.defineProperty(e.prototype, "orderBy", {
                    get: function() {
                        if (null === this.memoizedOrderBy) {
                            var e = this.getInequalityFilterField(), t = this.getFirstOrderByField();
                            if (null !== e && null === t)
                                e.isKeyField() ? this.memoizedOrderBy = [KEY_ORDERING_ASC] : this.memoizedOrderBy = [new OrderBy(e), KEY_ORDERING_ASC];
                            else {
                                assert(null === e || null !== t && e.isEqual(t), "First orderBy should match inequality field."), this.memoizedOrderBy = [];
                                for (var n=!1, r = 0, i = this.explicitOrderBy; r < i.length; r++) {
                                    var o = i[r];
                                    this.memoizedOrderBy.push(o), o.field.isKeyField() && (n=!0)
                                }
                                if (!n) {
                                    var a = this.explicitOrderBy.length > 0 ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir: Direction.ASCENDING;
                                    this.memoizedOrderBy.push(a === Direction.ASCENDING ? KEY_ORDERING_ASC : KEY_ORDERING_DESC)
                                }
                            }
                        }
                        return this.memoizedOrderBy
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.addFilter = function(t) {
                    assert(null == this.getInequalityFilterField() ||!(t instanceof RelationFilter) ||!t.isInequality() || t.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), assert(!DocumentKey.isDocumentKey(this.path), "No filtering allowed for document query");
                    var n = this.filters.concat([t]);
                    return new e(this.path, this.explicitOrderBy.slice(), n, this.limit, this.startAt, this.endAt)
                }, e.prototype.addOrderBy = function(t) {
                    assert(!DocumentKey.isDocumentKey(this.path), "No ordering allowed for document query"), assert(!this.startAt&&!this.endAt, "Bounds must be set after orderBy");
                    var n = this.explicitOrderBy.concat([t]);
                    return new e(this.path, n, this.filters.slice(), this.limit, this.startAt, this.endAt)
                }, e.prototype.withLimit = function(t) {
                    return new e(this.path, this.explicitOrderBy.slice(), this.filters.slice(), t, this.startAt, this.endAt)
                }, e.prototype.withStartAt = function(t) {
                    return new e(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, t, this.endAt)
                }, e.prototype.withEndAt = function(t) {
                    return new e(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, t)
                }, e.prototype.canonicalId = function() {
                    if (null === this.memoizedCanonicalId) {
                        var e = this.path.canonicalString();
                        e += "|f:";
                        for (var t = 0, n = this.filters; t < n.length; t++) {
                            e += n[t].canonicalId(), e += ","
                        }
                        e += "|ob:";
                        for (var r = 0, i = this.orderBy; r < i.length; r++) {
                            e += i[r].canonicalId(), e += ","
                        }
                        isNullOrUndefined(this.limit) || (e += "|l:", e += this.limit), this.startAt && (e += "|lb:", e += this.startAt.canonicalId()), this.endAt && (e += "|ub:", e += this.endAt.canonicalId()), this.memoizedCanonicalId = e
                    }
                    return this.memoizedCanonicalId
                }, e.prototype.toString = function() {
                    var e = "Query(" + this.path.canonicalString();
                    return this.filters.length > 0 && (e += ", filters: [" + this.filters.join(", ") + "]"), isNullOrUndefined(this.limit) || (e += ", limit: " + this.limit), this.explicitOrderBy.length > 0 && (e += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (e += ", startAt: " + this.startAt.canonicalId()), this.endAt && (e += ", endAt: " + this.endAt.canonicalId()), e + ")"
                }, e.prototype.isEqual = function(e) {
                    if (this.limit !== e.limit)
                        return !1;
                    if (this.orderBy.length !== e.orderBy.length)
                        return !1;
                    for (var t = 0; t < this.orderBy.length; t++)
                        if (!this.orderBy[t].isEqual(e.orderBy[t]))
                            return !1;
                    if (this.filters.length !== e.filters.length)
                        return !1;
                    for (t = 0; t < this.filters.length; t++)
                        if (!this.filters[t].isEqual(e.filters[t]))
                            return !1;
                    return !!this.path.isEqual(e.path) && (!(null !== this.startAt?!this.startAt.isEqual(e.startAt) : null !== e.startAt) && (null !== this.endAt ? this.endAt.isEqual(e.endAt) : null === e.endAt))
                }, e.prototype.docComparator = function(e, t) {
                    for (var n=!1, r = 0, i = this.orderBy; r < i.length; r++) {
                        var o = i[r], a = o.compare(e, t);
                        if (0 !== a)
                            return a;
                        n = n || o.field.isKeyField()
                    }
                    return assert(n, "orderBy used that doesn't compare on key field"), 0
                }, e.prototype.matches = function(e) {
                    return this.matchesAncestor(e) && this.matchesOrderBy(e) && this.matchesFilters(e) && this.matchesBounds(e)
                }, e.prototype.hasLimit = function() {
                    return !isNullOrUndefined(this.limit)
                }, e.prototype.getFirstOrderByField = function() {
                    return this.explicitOrderBy.length > 0 ? this.explicitOrderBy[0].field : null
                }, e.prototype.getInequalityFilterField = function() {
                    for (var e = 0, t = this.filters; e < t.length; e++) {
                        var n = t[e];
                        if (n instanceof RelationFilter && n.isInequality())
                            return n.field
                    }
                    return null
                }, e.prototype.hasArrayContainsFilter = function() {
                    return void 0 !== this.filters.find(function(e) {
                        return e instanceof RelationFilter && e.op === RelationOp.ARRAY_CONTAINS
                    })
                }, e.prototype.isDocumentQuery = function() {
                    return DocumentKey.isDocumentKey(this.path) && 0 === this.filters.length
                }, e.prototype.matchesAncestor = function(e) {
                    var t = e.key.path;
                    return DocumentKey.isDocumentKey(this.path) ? this.path.isEqual(t) : this.path.isPrefixOf(t) && this.path.length === t.length - 1
                }, e.prototype.matchesOrderBy = function(e) {
                    for (var t = 0, n = this.explicitOrderBy; t < n.length; t++) {
                        var r = n[t];
                        if (!r.field.isKeyField() && void 0 === e.field(r.field)
                            )return !1
                    }
                    return !0
                }, e.prototype.matchesFilters = function(e) {
                    for (var t = 0, n = this.filters; t < n.length; t++) {
                        if (!n[t].matches(e))
                            return !1
                    }
                    return !0
                }, e.prototype.matchesBounds = function(e) {
                    return !(this.startAt&&!this.startAt.sortsBeforeDocument(this.orderBy, e)) && (!this.endAt ||!this.endAt.sortsBeforeDocument(this.orderBy, e))
                }, e.prototype.assertValidBound = function(e) {
                    assert(e.position.length <= this.orderBy.length, "Bound is longer than orderBy")
                }, e
            }(), Filter = function() {
                function e() {}
                return e.create = function(e, t, n) {
                    if (n.isEqual(NullValue.INSTANCE)) {
                        if (t !== RelationOp.EQUAL)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on null.");
                        return new NullFilter(e)
                    }
                    if (n.isEqual(DoubleValue.NAN)) {
                        if (t !== RelationOp.EQUAL)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on NaN.");
                        return new NanFilter(e)
                    }
                    return new RelationFilter(e, t, n)
                }, e
            }(), RelationOp = function() {
                function e(e) {
                    this.name = e
                }
                return e.fromString = function(t) {
                    switch (t) {
                    case"<":
                        return e.LESS_THAN;
                    case"<=":
                        return e.LESS_THAN_OR_EQUAL;
                    case"==":
                        return e.EQUAL;
                    case">=":
                        return e.GREATER_THAN_OR_EQUAL;
                    case">":
                        return e.GREATER_THAN;
                    case"array-contains":
                        return e.ARRAY_CONTAINS;
                    default:
                        return fail("Unknown relation: " + t)
                    }
                }, e.prototype.toString = function() {
                    return this.name
                }, e.prototype.isEqual = function(e) {
                    return this.name === e.name
                }, e.LESS_THAN = new e("<"), e.LESS_THAN_OR_EQUAL = new e("<="), e.EQUAL = new e("=="), e.GREATER_THAN = new e(">"), e.GREATER_THAN_OR_EQUAL = new e(">="), e.ARRAY_CONTAINS = new e("array-contains"), e
            }(), RelationFilter = function(e) {
                function t(t, n, r) {
                    var i = e.call(this) || this;
                    return i.field = t, i.op = n, i.value = r, i
                }
                return __extends(t, e), t.prototype.matches = function(e) {
                    if (this.field.isKeyField()) {
                        assert(this.value instanceof RefValue, "Comparing on key, but filter value not a RefValue"), assert(this.op !== RelationOp.ARRAY_CONTAINS, "array-contains queries don't make sense on document keys.");
                        var t = this.value, n = DocumentKey.comparator(e.key, t.key);
                        return this.matchesComparison(n)
                    }
                    var r = e.field(this.field);
                    return void 0 !== r && this.matchesValue(r)
                }, t.prototype.matchesValue = function(e) {
                    var t = this;
                    return this.op === RelationOp.ARRAY_CONTAINS ? e instanceof ArrayValue && void 0 !== e.internalValue.find(function(e) {
                        return e.isEqual(t.value)
                    }) : this.value.typeOrder === e.typeOrder && this.matchesComparison(e.compareTo(this.value))
                }, t.prototype.matchesComparison = function(e) {
                    switch (this.op) {
                    case RelationOp.LESS_THAN:
                        return e < 0;
                    case RelationOp.LESS_THAN_OR_EQUAL:
                        return e <= 0;
                    case RelationOp.EQUAL:
                        return 0 === e;
                    case RelationOp.GREATER_THAN:
                        return e > 0;
                    case RelationOp.GREATER_THAN_OR_EQUAL:
                        return e >= 0;
                    default:
                        return fail("Unknown relation op" + this.op)
                    }
                }, t.prototype.isInequality = function() {
                    return this.op !== RelationOp.EQUAL && this.op !== RelationOp.ARRAY_CONTAINS
                }, t.prototype.canonicalId = function() {
                    return this.field.canonicalString() + this.op.toString() + this.value.toString()
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && (this.op.isEqual(e.op) && this.field.isEqual(e.field) && this.value.isEqual(e.value))
                }, t.prototype.toString = function() {
                    return this.field.canonicalString() + " " + this.op + " " + this.value.value()
                }, t
            }(Filter), NullFilter = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.field = t, n
                }
                return __extends(t, e), t.prototype.matches = function(e) {
                    var t = e.field(this.field);
                    return void 0 !== t && null === t.value()
                }, t.prototype.canonicalId = function() {
                    return this.field.canonicalString() + " IS null"
                }, t.prototype.toString = function() {
                    return this.field.canonicalString() + " IS null"
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.field.isEqual(e.field)
                }, t
            }(Filter), NanFilter = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.field = t, n
                }
                return __extends(t, e), t.prototype.matches = function(e) {
                    var t = e.field(this.field).value();
                    return "number" == typeof t && isNaN(t)
                }, t.prototype.canonicalId = function() {
                    return this.field.canonicalString() + " IS NaN"
                }, t.prototype.toString = function() {
                    return this.field.canonicalString() + " IS NaN"
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.field.isEqual(e.field)
                }, t
            }(Filter), Direction = function() {
                function e(e) {
                    this.name = e
                }
                return e.prototype.toString = function() {
                    return this.name
                }, e.ASCENDING = new e("asc"), e.DESCENDING = new e("desc"), e
            }(), Bound = function() {
                function e(e, t) {
                    this.position = e, this.before = t
                }
                return e.prototype.canonicalId = function() {
                    for (var e = this.before ? "b:" : "a:", t = 0, n = this.position; t < n.length; t++) {
                        e += n[t].toString()
                    }
                    return e
                }, e.prototype.sortsBeforeDocument = function(e, t) {
                    assert(this.position.length <= e.length, "Bound has more components than query's orderBy");
                    for (var n = 0, r = 0; r < this.position.length; r++) {
                        var i = e[r], o = this.position[r];
                        if (i.field.isKeyField())
                            assert(o instanceof RefValue, "Bound has a non-key value where the key path is being used."), n = DocumentKey.comparator(o.key, t.key);
                        else {
                            var a = t.field(i.field);
                            assert(void 0 !== a, "Field should exist since document matched the orderBy already."), n = o.compareTo(a)
                        }
                        if (i.dir === Direction.DESCENDING && (n*=-1), 0 !== n)
                            break
                    }
                    return this.before ? n <= 0 : n < 0
                }, e.prototype.isEqual = function(e) {
                    if (null === e)
                        return !1;
                    if (this.before !== e.before || this.position.length !== e.position.length)
                        return !1;
                    for (var t = 0; t < this.position.length; t++) {
                        var n = this.position[t], r = e.position[t];
                        return n.isEqual(r)
                    }
                    return !0
                }, e
            }(), OrderBy = function() {
                function e(e, t) {
                    this.field = e, void 0 === t && (t = Direction.ASCENDING), this.dir = t, this.isKeyOrderBy = e.isKeyField()
                }
                return e.prototype.compare = function(e, t) {
                    var n = this.isKeyOrderBy ? Document.compareByKey(e, t): Document.compareByField(this.field, e, t);
                    switch (this.dir) {
                    case Direction.ASCENDING:
                        return n;
                    case Direction.DESCENDING:
                        return - 1 * n;
                    default:
                        return fail("Unknown direction: " + this.dir)
                    }
                }, e.prototype.canonicalId = function() {
                    return this.field.canonicalString() + this.dir.toString()
                }, e.prototype.toString = function() {
                    return this.field.canonicalString() + " (" + this.dir + ")"
                }, e.prototype.isEqual = function(e) {
                    return this.dir === e.dir && this.field.isEqual(e.field)
                }, e
            }(), KEY_ORDERING_ASC = new OrderBy(FieldPath.keyField(), Direction.ASCENDING), KEY_ORDERING_DESC = new OrderBy(FieldPath.keyField(), Direction.DESCENDING), SnapshotVersion = function() {
                function e(e) {
                    this.timestamp = e
                }
                return e.fromMicroseconds = function(t) {
                    var n = Math.floor(t / 1e6);
                    return new e(new Timestamp(n, t%1e6 * 1e3))
                }, e.fromTimestamp = function(t) {
                    return new e(t)
                }, e.forDeletedDoc = function() {
                    return e.MIN
                }, e.prototype.compareTo = function(e) {
                    return this.timestamp._compareTo(e.timestamp)
                }, e.prototype.isEqual = function(e) {
                    return this.timestamp.isEqual(e.timestamp)
                }, e.prototype.toMicroseconds = function() {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }, e.prototype.toString = function() {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }, e.prototype.toTimestamp = function() {
                    return this.timestamp
                }, e.MIN = new e(new Timestamp(0, 0)), e
            }(), QueryPurpose;
            !function(e) {
                e[e.Listen = 0] = "Listen", e[e.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", e[e.LimboResolution = 2] = "LimboResolution"
            }(QueryPurpose || (QueryPurpose = {}));
            var QueryData = function() {
                function e(e, t, n, r, i) {
                    void 0 === r && (r = SnapshotVersion.MIN), void 0 === i && (i = emptyByteString()), this.query = e, this.targetId = t, this.purpose = n, this.snapshotVersion = r, this.resumeToken = i
                }
                return e.prototype.copy = function(t) {
                    return new e(this.query, this.targetId, this.purpose, void 0 === t.snapshotVersion ? this.snapshotVersion : t.snapshotVersion, void 0 === t.resumeToken ? this.resumeToken : t.resumeToken)
                }, e.prototype.isEqual = function(e) {
                    return this.targetId === e.targetId && this.purpose === e.purpose && this.snapshotVersion.isEqual(e.snapshotVersion) && this.resumeToken === e.resumeToken && this.query.isEqual(e.query)
                }, e
            }(), FieldMask = function() {
                function e(e) {
                    this.fields = e
                }
                return e.prototype.covers = function(e) {
                    for (var t = 0, n = this.fields; t < n.length; t++) {
                        if (n[t].isPrefixOf(e))
                            return !0
                    }
                    return !1
                }, e.prototype.isEqual = function(e) {
                    return arrayEquals(this.fields, e.fields)
                }, e
            }(), FieldTransform = function() {
                function e(e, t) {
                    this.field = e, this.transform = t
                }
                return e.prototype.isEqual = function(e) {
                    return this.field.isEqual(e.field) && this.transform.isEqual(e.transform)
                }, e
            }(), MutationResult = function() {
                return function(e, t) {
                    this.version = e, this.transformResults = t
                }
            }(), MutationType;
            !function(e) {
                e[e.Set = 0] = "Set", e[e.Patch = 1] = "Patch", e[e.Transform = 2] = "Transform", e[e.Delete = 3] = "Delete"
            }(MutationType || (MutationType = {}));
            var Precondition = function() {
                function e(e, t) {
                    this.updateTime = e, this.exists = t, assert(void 0 === e || void 0 === t, 'Precondition can specify "exists" or "updateTime" but not both')
                }
                return e.exists = function(t) {
                    return new e(void 0, t)
                }, e.updateTime = function(t) {
                    return new e(t)
                }, Object.defineProperty(e.prototype, "isNone", {
                    get: function() {
                        return void 0 === this.updateTime && void 0 === this.exists
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isValidFor = function(e) {
                    return void 0 !== this.updateTime ? e instanceof Document && e.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists ? e instanceof Document : null === e || e instanceof NoDocument : (assert(this.isNone, "Precondition should be empty"), !0)
                }, e.prototype.isEqual = function(e) {
                    return equals(this.updateTime, e.updateTime) && this.exists === e.exists
                }, e.NONE = new e, e
            }(), Mutation = function() {
                function e() {}
                return e.prototype.verifyKeyMatches = function(e) {
                    null != e && assert(e.key.isEqual(this.key), "Can only apply a mutation to a document with the same key")
                }, e.getPostMutationVersion = function(e) {
                    return e instanceof Document ? e.version : SnapshotVersion.MIN
                }, e
            }(), SetMutation = function(e) {
                function t(t, n, r) {
                    var i = e.call(this) || this;
                    return i.key = t, i.value = n, i.precondition = r, i.type = MutationType.Set, i
                }
                return __extends(t, e), t.prototype.applyToRemoteDocument = function(e, t) {
                    this.verifyKeyMatches(e), assert(null == t.transformResults, "Transform results received by SetMutation.");
                    var n = Mutation.getPostMutationVersion(e);
                    return new Document(this.key, n, this.value, {
                        hasLocalMutations: !1
                    })
                }, t.prototype.applyToLocalView = function(e, t, n) {
                    if (this.verifyKeyMatches(e), !this.precondition.isValidFor(e))
                        return e;
                    var r = Mutation.getPostMutationVersion(e);
                    return new Document(this.key, r, this.value, {
                        hasLocalMutations: !0
                    })
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.key.isEqual(e.key) && this.value.isEqual(e.value) && this.precondition.isEqual(e.precondition)
                }, t
            }(Mutation), PatchMutation = function(e) {
                function t(t, n, r, i) {
                    var o = e.call(this) || this;
                    return o.key = t, o.data = n, o.fieldMask = r, o.precondition = i, o.type = MutationType.Patch, o
                }
                return __extends(t, e), t.prototype.applyToRemoteDocument = function(e, t) {
                    if (this.verifyKeyMatches(e), assert(null == t.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(e))
                        return e;
                    var n = Mutation.getPostMutationVersion(e), r = this.patchDocument(e);
                    return new Document(this.key, n, r, {
                        hasLocalMutations: !1
                    })
                }, t.prototype.applyToLocalView = function(e, t, n) {
                    if (this.verifyKeyMatches(e), !this.precondition.isValidFor(e))
                        return e;
                    var r = Mutation.getPostMutationVersion(e), i = this.patchDocument(e);
                    return new Document(this.key, r, i, {
                        hasLocalMutations: !0
                    })
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.key.isEqual(e.key) && this.fieldMask.isEqual(e.fieldMask) && this.precondition.isEqual(e.precondition)
                }, t.prototype.patchDocument = function(e) {
                    var t;
                    return t = e instanceof Document ? e.data : ObjectValue.EMPTY, this.patchObject(t)
                }, t.prototype.patchObject = function(e) {
                    for (var t = 0, n = this.fieldMask.fields; t < n.length; t++) {
                        var r = n[t], i = this.data.field(r);
                        e = void 0 !== i ? e.set(r, i) : e.delete(r)
                    }
                    return e
                }, t
            }(Mutation), TransformMutation = function(e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r.key = t, r.fieldTransforms = n, r.type = MutationType.Transform, r.precondition = Precondition.exists(!0), r
                }
                return __extends(t, e), t.prototype.applyToRemoteDocument = function(e, t) {
                    if (this.verifyKeyMatches(e), assert(null != t.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(e))
                        return e;
                    var n = this.requireDocument(e), r = this.serverTransformResults(e, t.transformResults), i = this.transformObject(n.data, r);
                    return new Document(this.key, n.version, i, {
                        hasLocalMutations: !1
                    })
                }, t.prototype.applyToLocalView = function(e, t, n) {
                    if (this.verifyKeyMatches(e), !this.precondition.isValidFor(e))
                        return e;
                    var r = this.requireDocument(e), i = this.localTransformResults(n, t), o = this.transformObject(r.data, i);
                    return new Document(this.key, r.version, o, {
                        hasLocalMutations: !0
                    })
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.key.isEqual(e.key) && arrayEquals(this.fieldTransforms, e.fieldTransforms) && this.precondition.isEqual(e.precondition)
                }, t.prototype.requireDocument = function(e) {
                    assert(e instanceof Document, "Unknown MaybeDocument type " + e);
                    var t = e;
                    return assert(t.key.isEqual(this.key), "Can only transform a document with the same key"), t
                }, t.prototype.serverTransformResults = function(e, t) {
                    var n = [];
                    assert(this.fieldTransforms.length === t.length, "server transform result count (" + t.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
                    for (var r = 0; r < t.length; r++) {
                        var i = this.fieldTransforms[r], o = i.transform, a = null;
                        e instanceof Document && (a = e.field(i.field) || null), n.push(o.applyToRemoteDocument(a, t[r]))
                    }
                    return n
                }, t.prototype.localTransformResults = function(e, t) {
                    for (var n = [], r = 0, i = this.fieldTransforms; r < i.length; r++) {
                        var o = i[r], a = o.transform, s = null;
                        t instanceof Document && (s = t.field(o.field) || null), n.push(a.applyToLocalView(s, e))
                    }
                    return n
                }, t.prototype.transformObject = function(e, t) {
                    assert(t.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                    for (var n = 0; n < this.fieldTransforms.length; n++) {
                        var r = this.fieldTransforms[n].field;
                        e = e.set(r, t[n])
                    }
                    return e
                }, t
            }(Mutation), DeleteMutation = function(e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r.key = t, r.precondition = n, r.type = MutationType.Delete, r
                }
                return __extends(t, e), t.prototype.applyToRemoteDocument = function(e, t) {
                    return this.verifyKeyMatches(e), assert(null == t.transformResults, "Transform results received by DeleteMutation."), new NoDocument(this.key, SnapshotVersion.MIN)
                }, t.prototype.applyToLocalView = function(e, t, n) {
                    return this.verifyKeyMatches(e), this.precondition.isValidFor(e) ? (e && assert(e.key.isEqual(this.key), "Can only apply mutation to document with same key"), new NoDocument(this.key, SnapshotVersion.forDeletedDoc())) : e
                }, t.prototype.isEqual = function(e) {
                    return e instanceof t && this.key.isEqual(e.key) && this.precondition.isEqual(e.precondition)
                }, t
            }(Mutation), ExistenceFilter = function() {
                function e(e) {
                    this.count = e
                }
                return e.prototype.isEqual = function(e) {
                    return e && e.count === this.count
                }, e
            }(), RpcCode;
            function isPermanentError(e) {
                switch (e) {
                case Code.OK:
                    return fail("Treated status OK as error");
                case Code.CANCELLED:
                case Code.UNKNOWN:
                case Code.DEADLINE_EXCEEDED:
                case Code.RESOURCE_EXHAUSTED:
                case Code.INTERNAL:
                case Code.UNAVAILABLE:
                case Code.UNAUTHENTICATED:
                    return !1;
                case Code.INVALID_ARGUMENT:
                case Code.NOT_FOUND:
                case Code.ALREADY_EXISTS:
                case Code.PERMISSION_DENIED:
                case Code.FAILED_PRECONDITION:
                case Code.ABORTED:
                case Code.OUT_OF_RANGE:
                case Code.UNIMPLEMENTED:
                case Code.DATA_LOSS:
                    return !0;
                default:
                    return fail("Unknown status code: " + e)
                }
            }
            function mapCodeFromRpcStatus(e) {
                var t = RpcCode[e];
                if (void 0 !== t)
                    return mapCodeFromRpcCode(t)
            }
            function mapCodeFromRpcCode(e) {
                if (void 0 === e)
                    return error("GRPC error has no .code"), Code.UNKNOWN;
                switch (e) {
                case RpcCode.OK:
                    return Code.OK;
                case RpcCode.CANCELLED:
                    return Code.CANCELLED;
                case RpcCode.UNKNOWN:
                    return Code.UNKNOWN;
                case RpcCode.DEADLINE_EXCEEDED:
                    return Code.DEADLINE_EXCEEDED;
                case RpcCode.RESOURCE_EXHAUSTED:
                    return Code.RESOURCE_EXHAUSTED;
                case RpcCode.INTERNAL:
                    return Code.INTERNAL;
                case RpcCode.UNAVAILABLE:
                    return Code.UNAVAILABLE;
                case RpcCode.UNAUTHENTICATED:
                    return Code.UNAUTHENTICATED;
                case RpcCode.INVALID_ARGUMENT:
                    return Code.INVALID_ARGUMENT;
                case RpcCode.NOT_FOUND:
                    return Code.NOT_FOUND;
                case RpcCode.ALREADY_EXISTS:
                    return Code.ALREADY_EXISTS;
                case RpcCode.PERMISSION_DENIED:
                    return Code.PERMISSION_DENIED;
                case RpcCode.FAILED_PRECONDITION:
                    return Code.FAILED_PRECONDITION;
                case RpcCode.ABORTED:
                    return Code.ABORTED;
                case RpcCode.OUT_OF_RANGE:
                    return Code.OUT_OF_RANGE;
                case RpcCode.UNIMPLEMENTED:
                    return Code.UNIMPLEMENTED;
                case RpcCode.DATA_LOSS:
                    return Code.DATA_LOSS;
                default:
                    return fail("Unknown status code: " + e)
                }
            }
            function mapRpcCodeFromCode(e) {
                if (void 0 === e)
                    return RpcCode.OK;
                switch (e) {
                case Code.OK:
                    return RpcCode.OK;
                case Code.CANCELLED:
                    return RpcCode.CANCELLED;
                case Code.UNKNOWN:
                    return RpcCode.UNKNOWN;
                case Code.DEADLINE_EXCEEDED:
                    return RpcCode.DEADLINE_EXCEEDED;
                case Code.RESOURCE_EXHAUSTED:
                    return RpcCode.RESOURCE_EXHAUSTED;
                case Code.INTERNAL:
                    return RpcCode.INTERNAL;
                case Code.UNAVAILABLE:
                    return RpcCode.UNAVAILABLE;
                case Code.UNAUTHENTICATED:
                    return RpcCode.UNAUTHENTICATED;
                case Code.INVALID_ARGUMENT:
                    return RpcCode.INVALID_ARGUMENT;
                case Code.NOT_FOUND:
                    return RpcCode.NOT_FOUND;
                case Code.ALREADY_EXISTS:
                    return RpcCode.ALREADY_EXISTS;
                case Code.PERMISSION_DENIED:
                    return RpcCode.PERMISSION_DENIED;
                case Code.FAILED_PRECONDITION:
                    return RpcCode.FAILED_PRECONDITION;
                case Code.ABORTED:
                    return RpcCode.ABORTED;
                case Code.OUT_OF_RANGE:
                    return RpcCode.OUT_OF_RANGE;
                case Code.UNIMPLEMENTED:
                    return RpcCode.UNIMPLEMENTED;
                case Code.DATA_LOSS:
                    return RpcCode.DATA_LOSS;
                default:
                    return fail("Unknown status code: " + e)
                }
            }
            function mapCodeFromHttpStatus(e) {
                switch (e) {
                case 200:
                    return Code.OK;
                case 400:
                    return Code.INVALID_ARGUMENT;
                case 401:
                    return Code.UNAUTHENTICATED;
                case 403:
                    return Code.PERMISSION_DENIED;
                case 404:
                    return Code.NOT_FOUND;
                case 409:
                    return Code.ABORTED;
                case 416:
                    return Code.OUT_OF_RANGE;
                case 429:
                    return Code.RESOURCE_EXHAUSTED;
                case 499:
                    return Code.CANCELLED;
                case 500:
                    return Code.UNKNOWN;
                case 501:
                    return Code.UNIMPLEMENTED;
                case 503:
                    return Code.UNAVAILABLE;
                case 504:
                    return Code.DEADLINE_EXCEEDED;
                default:
                    return e >= 200 && e < 300 ? Code.OK : e >= 400 && e < 500 ? Code.FAILED_PRECONDITION : e >= 500 && e < 600 ? Code.INTERNAL : Code.UNKNOWN
                }
            }
            !function(e) {
                e[e.OK = 0] = "OK", e[e.CANCELLED = 1] = "CANCELLED", e[e.UNKNOWN = 2] = "UNKNOWN", e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", e[e.NOT_FOUND = 5] = "NOT_FOUND", e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", e[e.ABORTED = 10] = "ABORTED", e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", e[e.INTERNAL = 13] = "INTERNAL", e[e.UNAVAILABLE = 14] = "UNAVAILABLE", e[e.DATA_LOSS = 15] = "DATA_LOSS"
            }(RpcCode || (RpcCode = {}));
            var SortedSet = function() {
                function e(e) {
                    this.comparator = e, this.data = new SortedMap(this.comparator)
                }
                return e.fromMapKeys = function(t) {
                    var n = new e(t.comparator);
                    return t.forEach(function(e) {
                        n = n.add(e)
                    }), n
                }, e.prototype.has = function(e) {
                    return null !== this.data.get(e)
                }, e.prototype.first = function() {
                    return this.data.minKey()
                }, e.prototype.last = function() {
                    return this.data.maxKey()
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.indexOf = function(e) {
                    return this.data.indexOf(e)
                }, e.prototype.forEach = function(e) {
                    this.data.inorderTraversal(function(t, n) {
                        return e(t), !1
                    })
                }, e.prototype.forEachInRange = function(e, t) {
                    for (var n = this.data.getIteratorFrom(e[0]); n.hasNext();) {
                        var r = n.getNext();
                        if (this.comparator(r.key, e[1]) >= 0)
                            return;
                        t(r.key)
                    }
                }, e.prototype.forEachWhile = function(e, t) {
                    var n;
                    for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();
                    ) {
                        if (!e(n.getNext().key))
                            return 
                    }
                }, e.prototype.firstAfterOrEqual = function(e) {
                    var t = this.data.getIteratorFrom(e);
                    return t.hasNext() ? t.getNext().key : null
                }, e.prototype.add = function(e) {
                    return this.copy(this.data.remove(e).insert(e, !0))
                }, e.prototype.delete = function(e) {
                    return this.has(e) ? this.copy(this.data.remove(e)) : this
                }, e.prototype.isEmpty = function() {
                    return this.data.isEmpty()
                }, e.prototype.unionWith = function(e) {
                    var t = this;
                    return e.forEach(function(e) {
                        t = t.add(e)
                    }), t
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        return !1;
                    if (this.size !== t.size)
                        return !1;
                    for (var n = this.data.getIterator(), r = t.data.getIterator(); n.hasNext();) {
                        var i = n.getNext().key, o = r.getNext().key;
                        if (0 !== this.comparator(i, o))
                            return !1
                    }
                    return !0
                }, e.prototype.toArray = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), e
                }, e.prototype.toString = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        return e.push(t)
                    }), "SortedSet(" + e.toString() + ")"
                }, e.prototype.copy = function(t) {
                    var n = new e(this.comparator);
                    return n.data = t, n
                }, e
            }(), EMPTY_MAYBE_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
            function maybeDocumentMap() {
                return EMPTY_MAYBE_DOCUMENT_MAP
            }
            var EMPTY_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
            function documentMap() {
                return EMPTY_DOCUMENT_MAP
            }
            var EMPTY_DOCUMENT_VERSION_MAP = new SortedMap(DocumentKey.comparator);
            function documentVersionMap() {
                return EMPTY_DOCUMENT_VERSION_MAP
            }
            var EMPTY_DOCUMENT_KEY_SET = new SortedSet(DocumentKey.comparator);
            function documentKeySet() {
                return EMPTY_DOCUMENT_KEY_SET
            }
            var EMPTY_TARGET_ID_SET = new SortedSet(primitiveComparator);
            function targetIdSet() {
                return EMPTY_TARGET_ID_SET
            }
            var RemoteEvent = function() {
                function e(e, t, n, r, i) {
                    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
                }
                return e.createSynthesizedRemoteEventForCurrentChange = function(t, n) {
                    var r, i = ((r = {})[t] = TargetChange.createSynthesizedTargetChangeForCurrentChange(t, n), r);
                    return new e(SnapshotVersion.MIN, i, targetIdSet(), maybeDocumentMap(), documentKeySet())
                }, e
            }(), TargetChange = function() {
                function e(e, t, n, r, i) {
                    this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
                }
                return e.createSynthesizedTargetChangeForCurrentChange = function(t, n) {
                    return new e(emptyByteString(), n, documentKeySet(), documentKeySet(), documentKeySet())
                }, e
            }(), DocumentSet = function() {
                function e(e) {
                    this.comparator = e ? function(t, n) {
                        return e(t, n) || DocumentKey.comparator(t.key, n.key)
                    } : function(e, t) {
                        return DocumentKey.comparator(e.key, t.key)
                    }, this.keyedMap = documentMap(), this.sortedSet = new SortedMap(this.comparator)
                }
                return e.emptySet = function(t) {
                    return new e(t.comparator)
                }, e.prototype.has = function(e) {
                    return null != this.keyedMap.get(e)
                }, e.prototype.get = function(e) {
                    return this.keyedMap.get(e)
                }, e.prototype.first = function() {
                    return this.sortedSet.minKey()
                }, e.prototype.last = function() {
                    return this.sortedSet.maxKey()
                }, e.prototype.isEmpty = function() {
                    return this.sortedSet.isEmpty()
                }, e.prototype.indexOf = function(e) {
                    var t = this.keyedMap.get(e);
                    return t ? this.sortedSet.indexOf(t) : - 1
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.sortedSet.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.forEach = function(e) {
                    this.sortedSet.inorderTraversal(function(t, n) {
                        return e(t), !1
                    })
                }, e.prototype.add = function(e) {
                    var t = this.delete(e.key);
                    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null))
                }, e.prototype.delete = function(e) {
                    var t = this.get(e);
                    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        return !1;
                    if (this.size !== t.size)
                        return !1;
                    for (var n = this.sortedSet.getIterator(), r = t.sortedSet.getIterator(); n.hasNext();) {
                        var i = n.getNext().key, o = r.getNext().key;
                        if (!i.isEqual(o))
                            return !1
                    }
                    return !0
                }, e.prototype.toString = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t.toString())
                    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                }, e.prototype.copy = function(t, n) {
                    var r = new e;
                    return r.comparator = this.comparator, r.keyedMap = t, r.sortedSet = n, r
                }, e
            }(), ChangeType, SyncState;
            !function(e) {
                e[e.Added = 0] = "Added", e[e.Removed = 1] = "Removed", e[e.Modified = 2] = "Modified", e[e.Metadata = 3] = "Metadata"
            }(ChangeType || (ChangeType = {})), function(e) {
                e[e.Local = 0] = "Local", e[e.Synced = 1] = "Synced"
            }(SyncState || (SyncState = {}));
            var DocumentChangeSet = function() {
                function e() {
                    this.changeMap = new SortedMap(DocumentKey.comparator)
                }
                return e.prototype.track = function(e) {
                    var t = e.doc.key, n = this.changeMap.get(t);
                    n ? e.type !== ChangeType.Added && n.type === ChangeType.Metadata ? this.changeMap = this.changeMap.insert(t, e) : e.type === ChangeType.Metadata && n.type !== ChangeType.Removed ? this.changeMap = this.changeMap.insert(t, {
                        type: n.type,
                        doc: e.doc
                    }) : e.type === ChangeType.Modified && n.type === ChangeType.Modified ? this.changeMap = this.changeMap.insert(t, {
                        type: ChangeType.Modified,
                        doc: e.doc
                    }) : e.type === ChangeType.Modified && n.type === ChangeType.Added ? this.changeMap = this.changeMap.insert(t, {
                        type: ChangeType.Added,
                        doc: e.doc
                    }) : e.type === ChangeType.Removed && n.type === ChangeType.Added ? this.changeMap = this.changeMap.remove(t) : e.type === ChangeType.Removed && n.type === ChangeType.Modified ? this.changeMap = this.changeMap.insert(t, {
                        type: ChangeType.Removed,
                        doc: n.doc
                    }) : e.type === ChangeType.Added && n.type === ChangeType.Removed ? this.changeMap = this.changeMap.insert(t, {
                        type: ChangeType.Modified,
                        doc: e.doc
                    }) : fail("unsupported combination of changes: " + JSON.stringify(e) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(t, e)
                }, e.prototype.getChanges = function() {
                    var e = [];
                    return this.changeMap.inorderTraversal(function(t, n) {
                        e.push(n)
                    }), e
                }, e
            }(), ViewSnapshot = function() {
                function e(e, t, n, r, i, o, a, s) {
                    this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.fromCache = i, this.hasPendingWrites = o, this.syncStateChanged = a, this.excludesMetadataChanges = s
                }
                return e.fromInitialDocuments = function(t, n, r, i) {
                    var o = [];
                    return n.forEach(function(e) {
                        o.push({
                            type: ChangeType.Added,
                            doc: e
                        })
                    }), new e(t, n, DocumentSet.emptySet(n), o, r, i, !0, !1)
                }, e.prototype.isEqual = function(e) {
                    if (this.fromCache !== e.fromCache || this.hasPendingWrites !== e.hasPendingWrites || this.syncStateChanged !== e.syncStateChanged ||!this.query.isEqual(e.query) ||!this.docs.isEqual(e.docs) ||!this.oldDocs.isEqual(e.oldDocs))
                        return !1;
                    var t = this.docChanges, n = e.docChanges;
                    if (t.length !== n.length)
                        return !1;
                    for (var r = 0; r < t.length; r++)
                        if (t[r].type !== n[r].type ||!t[r].doc.isEqual(n[r].doc))
                            return !1;
                    return !0
                }, e
            }(), DocumentWatchChange = function() {
                return function(e, t, n, r) {
                    this.updatedTargetIds = e, this.removedTargetIds = t, this.key = n, this.newDoc = r
                }
            }(), ExistenceFilterChange = function() {
                return function(e, t) {
                    this.targetId = e, this.existenceFilter = t
                }
            }(), WatchTargetChangeState;
            !function(e) {
                e[e.NoChange = 0] = "NoChange", e[e.Added = 1] = "Added", e[e.Removed = 2] = "Removed", e[e.Current = 3] = "Current", e[e.Reset = 4] = "Reset"
            }(WatchTargetChangeState || (WatchTargetChangeState = {}));
            var WatchTargetChange = function() {
                return function(e, t, n, r) {
                    void 0 === n && (n = emptyByteString()), void 0 === r && (r = null), this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r
                }
            }(), TargetState = function() {
                function e() {
                    this.pendingResponses = 0, this.documentChanges = snapshotChangesMap(), this._resumeToken = emptyByteString(), this._current=!1, this._hasPendingChanges=!0
                }
                return Object.defineProperty(e.prototype, "current", {
                    get: function() {
                        return this._current
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "resumeToken", {
                    get: function() {
                        return this._resumeToken
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isPending", {
                    get: function() {
                        return 0 !== this.pendingResponses
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "hasPendingChanges", {
                    get: function() {
                        return this._hasPendingChanges
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.updateResumeToken = function(e) {
                    e.length > 0 && (this._hasPendingChanges=!0, this._resumeToken = e)
                }, e.prototype.toTargetChange = function() {
                    var e = documentKeySet(), t = documentKeySet(), n = documentKeySet();
                    return this.documentChanges.forEach(function(r, i) {
                        switch (i) {
                        case ChangeType.Added:
                            e = e.add(r);
                            break;
                        case ChangeType.Modified:
                            t = t.add(r);
                            break;
                        case ChangeType.Removed:
                            n = n.add(r);
                            break;
                        default:
                            fail("Encountered invalid change type: " + i)
                        }
                    }), new TargetChange(this._resumeToken, this._current, e, t, n)
                }, e.prototype.clearPendingChanges = function() {
                    this._hasPendingChanges=!1, this.documentChanges = snapshotChangesMap()
                }, e.prototype.addDocumentChange = function(e, t) {
                    this._hasPendingChanges=!0, this.documentChanges = this.documentChanges.insert(e, t)
                }, e.prototype.removeDocumentChange = function(e) {
                    this._hasPendingChanges=!0, this.documentChanges = this.documentChanges.remove(e)
                }, e.prototype.recordPendingTargetRequest = function() {
                    this.pendingResponses += 1
                }, e.prototype.recordTargetResponse = function() {
                    this.pendingResponses -= 1
                }, e.prototype.markCurrent = function() {
                    this._hasPendingChanges=!0, this._current=!0
                }, e
            }(), WatchChangeAggregator = function() {
                function e(e) {
                    this.metadataProvider = e, this.targetStates = {}, this.pendingDocumentUpdates = maybeDocumentMap(), this.pendingDocumentTargetMapping = documentTargetMap(), this.pendingTargetResets = new SortedSet(primitiveComparator)
                }
                return e.prototype.handleDocumentChange = function(e) {
                    for (var t = 0, n = e.updatedTargetIds; t < n.length; t++) {
                        var r = n[t];
                        e.newDoc instanceof Document ? this.addDocumentToTarget(r, e.newDoc) : e.newDoc instanceof NoDocument && this.removeDocumentFromTarget(r, e.key, e.newDoc)
                    }
                    for (var i = 0, o = e.removedTargetIds; i < o.length; i++) {
                        r = o[i];
                        this.removeDocumentFromTarget(r, e.key, e.newDoc)
                    }
                }, e.prototype.handleTargetChange = function(e) {
                    var t = this;
                    this.forEachTarget(e, function(n) {
                        var r = t.ensureTargetState(n);
                        switch (e.state) {
                        case WatchTargetChangeState.NoChange:
                            t.isActiveTarget(n) && r.updateResumeToken(e.resumeToken);
                            break;
                        case WatchTargetChangeState.Added:
                            r.recordTargetResponse(), r.isPending || r.clearPendingChanges(), r.updateResumeToken(e.resumeToken);
                            break;
                        case WatchTargetChangeState.Removed:
                            r.recordTargetResponse(), r.isPending || t.removeTarget(n), assert(!e.cause, "WatchChangeAggregator does not handle errored targets");
                            break;
                        case WatchTargetChangeState.Current:
                            t.isActiveTarget(n) && (r.markCurrent(), r.updateResumeToken(e.resumeToken));
                            break;
                        case WatchTargetChangeState.Reset:
                            t.isActiveTarget(n) && (t.resetTarget(n), r.updateResumeToken(e.resumeToken));
                            break;
                        default:
                            fail("Unknown target watch change state: " + e.state)
                        }
                    })
                }, e.prototype.forEachTarget = function(e, t) {
                    e.targetIds.length > 0 ? e.targetIds.forEach(t) : forEachNumber(this.targetStates, t)
                }, e.prototype.handleExistenceFilter = function(e) {
                    var t = e.targetId, n = e.existenceFilter.count, r = this.queryDataForActiveTarget(t);
                    if (r) {
                        var i = r.query;
                        if (i.isDocumentQuery())
                            if (0 === n) {
                                var o = new DocumentKey(i.path);
                                this.removeDocumentFromTarget(t, o, new NoDocument(o, SnapshotVersion.forDeletedDoc()))
                            } else 
                                assert(1 === n, "Single document existence filter with count: " + n);
                        else 
                            this.getCurrentDocumentCountForTarget(t) !== n && (this.resetTarget(t), this.pendingTargetResets = this.pendingTargetResets.add(t))
                    }
                }, e.prototype.createRemoteEvent = function(e) {
                    var t = this, n = {};
                    forEachNumber(this.targetStates, function(r, i) {
                        var o = t.queryDataForActiveTarget(r);
                        if (o) {
                            if (i.current && o.query.isDocumentQuery()) {
                                var a = new DocumentKey(o.query.path);
                                null !== t.pendingDocumentUpdates.get(a) || t.targetContainsDocument(r, a) || t.removeDocumentFromTarget(r, a, new NoDocument(a, e))
                            }
                            i.hasPendingChanges && (n[r] = i.toTargetChange(), i.clearPendingChanges())
                        }
                    });
                    var r = documentKeySet();
                    this.pendingDocumentTargetMapping.forEach(function(e, n) {
                        var i=!0;
                        n.forEachWhile(function(e) {
                            var n = t.queryDataForActiveTarget(e);
                            return !n || n.purpose === QueryPurpose.LimboResolution || (i=!1, !1)
                        }), i && (r = r.add(e))
                    });
                    var i = new RemoteEvent(e, n, this.pendingTargetResets, this.pendingDocumentUpdates, r);
                    return this.pendingDocumentUpdates = maybeDocumentMap(), this.pendingDocumentTargetMapping = documentTargetMap(), this.pendingTargetResets = new SortedSet(primitiveComparator), i
                }, e.prototype.addDocumentToTarget = function(e, t) {
                    if (this.isActiveTarget(e)) {
                        var n = this.targetContainsDocument(e, t.key) ? ChangeType.Modified: ChangeType.Added;
                        this.ensureTargetState(e).addDocumentChange(t.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(t.key, t), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t.key, this.ensureDocumentTargetMapping(t.key).add(e))
                    }
                }, e.prototype.removeDocumentFromTarget = function(e, t, n) {
                    if (this.isActiveTarget(e)) {
                        var r = this.ensureTargetState(e);
                        this.targetContainsDocument(e, t) ? r.addDocumentChange(t, ChangeType.Removed) : r.removeDocumentChange(t), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, this.ensureDocumentTargetMapping(t).delete(e)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(t, n))
                    }
                }, e.prototype.removeTarget = function(e) {
                    delete this.targetStates[e]
                }, e.prototype.getCurrentDocumentCountForTarget = function(e) {
                    var t = this.ensureTargetState(e).toTargetChange();
                    return this.metadataProvider.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
                }, e.prototype.recordPendingTargetRequest = function(e) {
                    this.ensureTargetState(e).recordPendingTargetRequest()
                }, e.prototype.ensureTargetState = function(e) {
                    return this.targetStates[e] || (this.targetStates[e] = new TargetState), this.targetStates[e]
                }, e.prototype.ensureDocumentTargetMapping = function(e) {
                    var t = this.pendingDocumentTargetMapping.get(e);
                    return t || (t = new SortedSet(primitiveComparator), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, t)), t
                }, e.prototype.isActiveTarget = function(e) {
                    return null !== this.queryDataForActiveTarget(e)
                }, e.prototype.queryDataForActiveTarget = function(e) {
                    var t = this.targetStates[e];
                    return t && t.isPending ? null : this.metadataProvider.getQueryDataForTarget(e)
                }, e.prototype.resetTarget = function(e) {
                    var t = this;
                    assert(!this.targetStates[e].isPending, "Should only reset active targets"), this.targetStates[e] = new TargetState, this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(n) {
                        t.removeDocumentFromTarget(e, n)
                    })
                }, e.prototype.targetContainsDocument = function(e, t) {
                    return this.metadataProvider.getRemoteKeysForTarget(e).has(t)
                }, e
            }();
            function documentTargetMap() {
                return new SortedMap(DocumentKey.comparator)
            }
            function snapshotChangesMap() {
                return new SortedMap(DocumentKey.comparator)
            }
            var ServerTimestampTransform = function() {
                function e() {}
                return e.prototype.applyToLocalView = function(e, t) {
                    return new ServerTimestampValue(t, e)
                }, e.prototype.applyToRemoteDocument = function(e, t) {
                    return t
                }, e.prototype.isEqual = function(t) {
                    return t instanceof e
                }, e.instance = new e, e
            }(), ArrayUnionTransformOperation = function() {
                function e(e) {
                    this.elements = e
                }
                return e.prototype.applyToLocalView = function(e, t) {
                    return this.apply(e)
                }, e.prototype.applyToRemoteDocument = function(e, t) {
                    return this.apply(e)
                }, e.prototype.apply = function(e) {
                    for (var t = coercedFieldValuesArray(e), n = function(e) {
                        t.find(function(t) {
                            return t.isEqual(e)
                        }) || t.push(e)
                    }, r = 0, i = this.elements; r < i.length; r++) {
                        n(i[r])
                    }
                    return new ArrayValue(t)
                }, e.prototype.isEqual = function(t) {
                    return t instanceof e && arrayEquals(t.elements, this.elements)
                }, e
            }(), ArrayRemoveTransformOperation = function() {
                function e(e) {
                    this.elements = e
                }
                return e.prototype.applyToLocalView = function(e, t) {
                    return this.apply(e)
                }, e.prototype.applyToRemoteDocument = function(e, t) {
                    return this.apply(e)
                }, e.prototype.apply = function(e) {
                    for (var t = coercedFieldValuesArray(e), n = function(e) {
                        t = t.filter(function(t) {
                            return !t.isEqual(e)
                        })
                    }, r = 0, i = this.elements; r < i.length; r++) {
                        n(i[r])
                    }
                    return new ArrayValue(t)
                }, e.prototype.isEqual = function(t) {
                    return t instanceof e && arrayEquals(t.elements, this.elements)
                }, e
            }();
            function coercedFieldValuesArray(e) {
                return e instanceof ArrayValue ? e.internalValue.slice() : []
            }
            var DIRECTIONS = (dirs = {}, dirs[Direction.ASCENDING.name] = "ASCENDING", dirs[Direction.DESCENDING.name] = "DESCENDING", dirs), OPERATORS = (ops = {}, ops[RelationOp.LESS_THAN.name] = "LESS_THAN", ops[RelationOp.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", ops[RelationOp.GREATER_THAN.name] = "GREATER_THAN", ops[RelationOp.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", ops[RelationOp.EQUAL.name] = "EQUAL", ops[RelationOp.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", ops), ISO_REG_EXP = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
            function assertPresent(e, t) {
                assert(!isNullOrUndefined(e), t + " is missing")
            }
            function parseInt64(e) {
                return "number" == typeof e ? e : "string" == typeof e ? Number(e) : fail("can't parse " + e)
            }
            var JsonProtoSerializer = function() {
                function e(e, t) {
                    this.databaseId = e, this.options = t
                }
                return e.prototype.emptyByteString = function() {
                    return this.options.useProto3Json ? "" : new Uint8Array(0)
                }, e.prototype.unsafeCastProtoByteString = function(e) {
                    return e
                }, e.prototype.fromRpcStatus = function(e) {
                    var t = void 0 === e.code ? Code.UNKNOWN : mapCodeFromRpcCode(e.code);
                    return new FirestoreError(t, e.message || "")
                }, e.prototype.toInt32Value = function(e) {
                    return isNullOrUndefined(e) ? void 0 : {
                        value: e
                    }
                }, e.prototype.fromInt32Value = function(e) {
                    var t;
                    return isNullOrUndefined(t = "object" == typeof e ? e.value : e) ? null : t
                }, e.prototype.toTimestamp = function(e) {
                    return {
                        seconds: e.seconds,
                        nanos: e.nanoseconds
                    }
                }, e.prototype.fromTimestamp = function(e) {
                    if ("string" == typeof e)
                        return this.fromIso8601String(e);
                    assert(!!e, "Cannot deserialize null or undefined timestamp.");
                    var t = parseInt64(e.seconds || "0"), n = e.nanos || 0;
                    return new Timestamp(t, n)
                }, e.prototype.fromIso8601String = function(e) {
                    var t = 0, n = ISO_REG_EXP.exec(e);
                    if (assert(!!n, "invalid timestamp: " + e), n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9), t = Number(r)
                    }
                    var i = new Date(e), o = Math.floor(i.getTime() / 1e3);
                    return new Timestamp(o, t)
                }, e.prototype.toBytes = function(e) {
                    return this.options.useProto3Json ? e.toBase64() : this.unsafeCastProtoByteString(e.toUint8Array())
                }, e.prototype.fromBlob = function(e) {
                    return "string" == typeof e ? (assert(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Blob.fromBase64String(e)) : (assert(!this.options.useProto3Json, "Expected bytes to be passed in as string, but got something else instead."), Blob.fromUint8Array(e))
                }, e.prototype.toVersion = function(e) {
                    return this.toTimestamp(e.toTimestamp())
                }, e.prototype.fromVersion = function(e) {
                    return assert(!!e, "Trying to deserialize version that isn't set"), SnapshotVersion.fromTimestamp(this.fromTimestamp(e))
                }, e.prototype.toResourceName = function(e, t) {
                    return this.fullyQualifiedPrefixPath(e).child("documents").child(t).canonicalString()
                }, e.prototype.fromResourceName = function(e) {
                    var t = ResourcePath.fromString(e);
                    return assert(this.isValidResourceName(t), "Tried to deserialize invalid key " + t.toString()), t
                }, e.prototype.toName = function(e) {
                    return this.toResourceName(this.databaseId, e.path)
                }, e.prototype.fromName = function(e) {
                    var t = this.fromResourceName(e);
                    return assert(t.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + t.get(1) + " vs " + this.databaseId.projectId), assert(!t.get(3)&&!this.databaseId.database || t.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + t.get(3) + " vs " + this.databaseId.database), new DocumentKey(this.extractLocalPathFromResourceName(t))
                }, e.prototype.toQueryPath = function(e) {
                    return 0 === e.length ? this.encodedDatabaseId : this.toResourceName(this.databaseId, e)
                }, e.prototype.fromQueryPath = function(e) {
                    var t = this.fromResourceName(e);
                    return 4 === t.length ? ResourcePath.EMPTY_PATH : this.extractLocalPathFromResourceName(t)
                }, Object.defineProperty(e.prototype, "encodedDatabaseId", {
                    get: function() {
                        return new ResourcePath(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.fullyQualifiedPrefixPath = function(e) {
                    return new ResourcePath(["projects", e.projectId, "databases", e.database])
                }, e.prototype.extractLocalPathFromResourceName = function(e) {
                    return assert(e.length > 4 && "documents" === e.get(4), "tried to deserialize invalid key " + e.toString()), e.popFirst(5)
                }, e.prototype.isValidResourceName = function(e) {
                    return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
                }, e.prototype.toValue = function(e) {
                    if (e instanceof NullValue)
                        return {
                            nullValue: "NULL_VALUE"
                        };
                    if (e instanceof BooleanValue)
                        return {
                            booleanValue: e.value()
                        };
                    if (e instanceof IntegerValue)
                        return {
                            integerValue: "" + e.value()
                        };
                    if (e instanceof DoubleValue) {
                        var t = e.value();
                        if (this.options.useProto3Json) {
                            if (isNaN(t))
                                return {
                                    doubleValue: "NaN"
                                };
                            if (t === 1 / 0)
                                return {
                                    doubleValue: "Infinity"
                                };
                            if (t===-1 / 0)
                                return {
                                    doubleValue: "-Infinity"
                                }
                        }
                        return {
                            doubleValue: e.value()
                        }
                    }
                    return e instanceof StringValue ? {
                        stringValue: e.value()
                    } : e instanceof ObjectValue ? {
                        mapValue: this.toMapValue(e)
                    } : e instanceof ArrayValue ? {
                        arrayValue: this.toArrayValue(e)
                    } : e instanceof TimestampValue ? {
                        timestampValue: this.toTimestamp(e.internalValue)
                    } : e instanceof GeoPointValue ? {
                        geoPointValue: {
                            latitude: e.value().latitude,
                            longitude: e.value().longitude
                        }
                    } : e instanceof BlobValue ? {
                        bytesValue: this.toBytes(e.value())
                    } : e instanceof RefValue ? {
                        referenceValue: this.toResourceName(e.databaseId, e.key.path)
                    } : fail("Unknown FieldValue " + JSON.stringify(e))
                }, e.prototype.fromValue = function(e) {
                    var t = this, n = e.value_type;
                    if (hasTag(e, n, "nullValue"))
                        return NullValue.INSTANCE;
                    if (hasTag(e, n, "booleanValue"))
                        return BooleanValue.of(e.booleanValue);
                    if (hasTag(e, n, "integerValue"))
                        return new IntegerValue(parseInt64(e.integerValue));
                    if (hasTag(e, n, "doubleValue")) {
                        if (this.options.useProto3Json) {
                            if ("NaN" === e.doubleValue)
                                return DoubleValue.NAN;
                            if ("Infinity" === e.doubleValue)
                                return DoubleValue.POSITIVE_INFINITY;
                            if ("-Infinity" === e.doubleValue)
                                return DoubleValue.NEGATIVE_INFINITY
                        }
                        return new DoubleValue(e.doubleValue)
                    }
                    if (hasTag(e, n, "stringValue"))
                        return new StringValue(e.stringValue);
                    if (hasTag(e, n, "mapValue"))
                        return this.fromFields(e.mapValue.fields || {});
                    if (hasTag(e, n, "arrayValue")) {
                        assertPresent(e.arrayValue, "arrayValue");
                        var r = e.arrayValue.values || [];
                        return new ArrayValue(r.map(function(e) {
                            return t.fromValue(e)
                        }))
                    }
                    if (hasTag(e, n, "timestampValue"))
                        return assertPresent(e.timestampValue, "timestampValue"), new TimestampValue(this.fromTimestamp(e.timestampValue));
                    if (hasTag(e, n, "geoPointValue")) {
                        assertPresent(e.geoPointValue, "geoPointValue");
                        var i = e.geoPointValue.latitude || 0, o = e.geoPointValue.longitude || 0;
                        return new GeoPointValue(new GeoPoint(i, o))
                    }
                    if (hasTag(e, n, "bytesValue")) {
                        assertPresent(e.bytesValue, "bytesValue");
                        var a = this.fromBlob(e.bytesValue);
                        return new BlobValue(a)
                    }
                    if (hasTag(e, n, "referenceValue")) {
                        assertPresent(e.referenceValue, "referenceValue");
                        var s = this.fromResourceName(e.referenceValue), u = new DatabaseId(s.get(1), s.get(3)), c = new DocumentKey(this.extractLocalPathFromResourceName(s));
                        return new RefValue(u, c)
                    }
                    return fail("Unknown Value proto " + JSON.stringify(e))
                }, e.prototype.toMutationDocument = function(e, t) {
                    return {
                        name: this.toName(e),
                        fields: this.toFields(t)
                    }
                }, e.prototype.toDocument = function(e) {
                    return assert(!e.hasLocalMutations, "Can't serialize documents with mutations."), {
                        name: this.toName(e.key),
                        fields: this.toFields(e.data),
                        updateTime: this.toTimestamp(e.version.toTimestamp())
                    }
                }, e.prototype.fromDocument = function(e) {
                    return new Document(this.fromName(e.name), this.fromVersion(e.updateTime), this.fromFields(e.fields || {}), {
                        hasLocalMutations: !1
                    })
                }, e.prototype.toFields = function(e) {
                    var t = this, n = {};
                    return e.forEach(function(e, r) {
                        n[e] = t.toValue(r)
                    }), n
                }, e.prototype.fromFields = function(e) {
                    var t = this, n = e, r = ObjectValue.EMPTY;
                    return forEach(n, function(e, n) {
                        r = r.set(new FieldPath([e]), t.fromValue(n))
                    }), r
                }, e.prototype.toMapValue = function(e) {
                    return {
                        fields: this.toFields(e)
                    }
                }, e.prototype.toArrayValue = function(e) {
                    var t = this, n = [];
                    return e.forEach(function(e) {
                        n.push(t.toValue(e))
                    }), {
                        values: n
                    }
                }, e.prototype.fromFound = function(e) {
                    assert(!!e.found, "Tried to deserialize a found document from a missing document."), assertPresent(e.found.name, "doc.found.name"), assertPresent(e.found.updateTime, "doc.found.updateTime");
                    var t = this.fromName(e.found.name), n = this.fromVersion(e.found.updateTime), r = this.fromFields(e.found.fields || {});
                    return new Document(t, n, r, {
                        hasLocalMutations: !1
                    })
                }, e.prototype.fromMissing = function(e) {
                    assert(!!e.missing, "Tried to deserialize a missing document from a found document."), assert(!!e.readTime, "Tried to deserialize a missing document without a read time.");
                    var t = this.fromName(e.missing), n = this.fromVersion(e.readTime);
                    return new NoDocument(t, n)
                }, e.prototype.fromMaybeDocument = function(e) {
                    var t = e.result;
                    return hasTag(e, t, "found") ? this.fromFound(e) : hasTag(e, t, "missing") ? this.fromMissing(e) : fail("invalid batch get response: " + JSON.stringify(e))
                }, e.prototype.toWatchTargetChangeState = function(e) {
                    switch (e) {
                    case WatchTargetChangeState.Added:
                        return "ADD";
                    case WatchTargetChangeState.Current:
                        return "CURRENT";
                    case WatchTargetChangeState.NoChange:
                        return "NO_CHANGE";
                    case WatchTargetChangeState.Removed:
                        return "REMOVE";
                    case WatchTargetChangeState.Reset:
                        return "RESET";
                    default:
                        return fail("Unknown WatchTargetChangeState: " + e)
                    }
                }, e.prototype.toTestWatchChange = function(e) {
                    if (e instanceof ExistenceFilterChange)
                        return {
                            filter: {
                                count: e.existenceFilter.count,
                                targetId: e.targetId
                            }
                        };
                    if (e instanceof DocumentWatchChange) {
                        if (e.newDoc instanceof Document) {
                            var t = e.newDoc;
                            return {
                                documentChange: {
                                    document: {
                                        name: this.toName(t.key),
                                        fields: this.toFields(t.data),
                                        updateTime: this.toVersion(t.version)
                                    },
                                    targetIds: e.updatedTargetIds,
                                    removedTargetIds: e.removedTargetIds
                                }
                            }
                        }
                        if (e.newDoc instanceof NoDocument) {
                            t = e.newDoc;
                            return {
                                documentDelete: {
                                    document: this.toName(t.key),
                                    readTime: this.toVersion(t.version),
                                    removedTargetIds: e.removedTargetIds
                                }
                            }
                        }
                        if (null === e.newDoc)
                            return {
                                documentRemove: {
                                    document: this.toName(e.key),
                                    removedTargetIds: e.removedTargetIds
                                }
                            }
                    }
                    if (e instanceof WatchTargetChange) {
                        var n = void 0;
                        return e.cause && (n = {
                            code: mapRpcCodeFromCode(e.cause.code),
                            message: e.cause.message
                        }), {
                            targetChange: {
                                targetChangeType: this.toWatchTargetChangeState(e.state),
                                targetIds: e.targetIds,
                                resumeToken: this.unsafeCastProtoByteString(e.resumeToken),
                                cause: n
                            }
                        }
                    }
                    return fail("Unrecognized watch change: " + JSON.stringify(e))
                }, e.prototype.fromWatchChange = function(e) {
                    var t, n = e.response_type;
                    if (hasTag(e, n, "targetChange")) {
                        assertPresent(e.targetChange, "targetChange");
                        var r = this.fromWatchTargetChangeState(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = e.targetChange.resumeToken || this.emptyByteString(), a = e.targetChange.cause, s = a && this.fromRpcStatus(a);
                        t = new WatchTargetChange(r, i, o, s || null)
                    } else if (hasTag(e, n, "documentChange")) {
                        assertPresent(e.documentChange, "documentChange"), assertPresent(e.documentChange.document, "documentChange.name"), assertPresent(e.documentChange.document.name, "documentChange.document.name"), assertPresent(e.documentChange.document.updateTime, "documentChange.document.updateTime");
                        var u = e.documentChange, c = this.fromName(u.document.name), h = this.fromVersion(u.document.updateTime), l = this.fromFields(u.document.fields || {}), d = new Document(c, h, l, {
                            hasLocalMutations: !1
                        }), f = u.targetIds || [], p = u.removedTargetIds || [];
                        t = new DocumentWatchChange(f, p, d.key, d)
                    } else if (hasTag(e, n, "documentDelete")) {
                        assertPresent(e.documentDelete, "documentDelete"), assertPresent(e.documentDelete.document, "documentDelete.document");
                        var m = e.documentDelete;
                        c = this.fromName(m.document), h = m.readTime ? this.fromVersion(m.readTime) : SnapshotVersion.forDeletedDoc(), d = new NoDocument(c, h), p = m.removedTargetIds || [];
                        t = new DocumentWatchChange([], p, d.key, d)
                    } else if (hasTag(e, n, "documentRemove")) {
                        assertPresent(e.documentRemove, "documentRemove"), assertPresent(e.documentRemove.document, "documentRemove");
                        var y = e.documentRemove;
                        c = this.fromName(y.document), p = y.removedTargetIds || [];
                        t = new DocumentWatchChange([], p, c, null)
                    } else {
                        if (!hasTag(e, n, "filter"))
                            return fail("Unknown change type " + JSON.stringify(e));
                        assertPresent(e.filter, "filter"), assertPresent(e.filter.targetId, "filter.targetId");
                        var g = e.filter, v = g.count || 0, b = new ExistenceFilter(v), S = g.targetId;
                        t = new ExistenceFilterChange(S, b)
                    }
                    return t
                }, e.prototype.fromWatchTargetChangeState = function(e) {
                    return "NO_CHANGE" === e ? WatchTargetChangeState.NoChange : "ADD" === e ? WatchTargetChangeState.Added : "REMOVE" === e ? WatchTargetChangeState.Removed : "CURRENT" === e ? WatchTargetChangeState.Current : "RESET" === e ? WatchTargetChangeState.Reset : fail("Got unexpected TargetChange.state: " + e)
                }, e.prototype.versionFromListenResponse = function(e) {
                    if (!hasTag(e, e.response_type, "targetChange"))
                        return SnapshotVersion.MIN;
                    var t = e.targetChange;
                    return t.targetIds && t.targetIds.length ? SnapshotVersion.MIN : t.readTime ? this.fromVersion(t.readTime) : SnapshotVersion.MIN
                }, e.prototype.toMutation = function(e) {
                    var t, n = this;
                    if (e instanceof SetMutation)
                        t = {
                            update: this.toMutationDocument(e.key, e.value)
                        };
                    else if (e instanceof DeleteMutation)
                        t = {
                            delete: this.toName(e.key)
                        };
                    else if (e instanceof PatchMutation)
                        t = {
                            update: this.toMutationDocument(e.key, e.data),
                            updateMask: this.toDocumentMask(e.fieldMask)
                        };
                    else {
                        if (!(e instanceof TransformMutation))
                            return fail("Unknown mutation type " + e.type);
                        t = {
                            transform: {
                                document: this.toName(e.key),
                                fieldTransforms: e.fieldTransforms.map(function(e) {
                                    return n.toFieldTransform(e)
                                })
                            }
                        }
                    }
                    return e.precondition.isNone || (t.currentDocument = this.toPrecondition(e.precondition)), t
                }, e.prototype.fromMutation = function(e) {
                    var t = this, n = e.currentDocument ? this.fromPrecondition(e.currentDocument): Precondition.NONE;
                    if (e.update) {
                        assertPresent(e.update.name, "name");
                        var r = this.fromName(e.update.name), i = this.fromFields(e.update.fields || {});
                        if (e.updateMask) {
                            var o = this.fromDocumentMask(e.updateMask);
                            return new PatchMutation(r, i, o, n)
                        }
                        return new SetMutation(r, i, n)
                    }
                    if (e.delete) {
                        r = this.fromName(e.delete);
                        return new DeleteMutation(r, n)
                    }
                    if (e.transform) {
                        r = this.fromName(e.transform.document);
                        var a = e.transform.fieldTransforms.map(function(e) {
                            return t.fromFieldTransform(e)
                        });
                        return assert(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new TransformMutation(r, a)
                    }
                    return fail("unknown mutation proto: " + JSON.stringify(e))
                }, e.prototype.toPrecondition = function(e) {
                    return assert(!e.isNone, "Can't serialize an empty precondition"), void 0 !== e.updateTime ? {
                        updateTime: this.toVersion(e.updateTime)
                    } : void 0 !== e.exists ? {
                        exists: e.exists
                    } : fail("Unknown precondition")
                }, e.prototype.fromPrecondition = function(e) {
                    return void 0 !== e.updateTime ? Precondition.updateTime(this.fromVersion(e.updateTime)) : void 0 !== e.exists ? Precondition.exists(e.exists) : Precondition.NONE
                }, e.prototype.fromWriteResult = function(e) {
                    var t = this, n = e.updateTime ? this.fromVersion(e.updateTime): null, r = null;
                    return e.transformResults && e.transformResults.length > 0 && (r = e.transformResults.map(function(e) {
                        return t.fromValue(e)
                    })), new MutationResult(n, r)
                }, e.prototype.fromWriteResults = function(e) {
                    var t = this;
                    return (e || []).map(function(e) {
                        return t.fromWriteResult(e)
                    })
                }, e.prototype.toFieldTransform = function(e) {
                    var t = this, n = e.transform;
                    return n instanceof ServerTimestampTransform ? {
                        fieldPath: e.field.canonicalString(),
                        setToServerValue: "REQUEST_TIME"
                    } : n instanceof ArrayUnionTransformOperation ? {
                        fieldPath: e.field.canonicalString(),
                        appendMissingElements: {
                            values: n.elements.map(function(e) {
                                return t.toValue(e)
                            })
                        }
                    } : n instanceof ArrayRemoveTransformOperation ? {
                        fieldPath: e.field.canonicalString(),
                        removeAllFromArray: {
                            values: n.elements.map(function(e) {
                                return t.toValue(e)
                            })
                        }
                    } : void fail("Unknown transform: " + e.transform)
                }, e.prototype.fromFieldTransform = function(e) {
                    var t = this, n = e.transform_type, r = null;
                    if (hasTag(e, n, "setToServerValue"))
                        assert("REQUEST_TIME" === e.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(e)), r = ServerTimestampTransform.instance;
                    else if (hasTag(e, n, "appendMissingElements")) {
                        var i = e.appendMissingElements.values || [];
                        r = new ArrayUnionTransformOperation(i.map(function(e) {
                            return t.fromValue(e)
                        }))
                    } else if (hasTag(e, n, "removeAllFromArray")) {
                        i = e.removeAllFromArray.values || [];
                        r = new ArrayRemoveTransformOperation(i.map(function(e) {
                            return t.fromValue(e)
                        }))
                    } else 
                        fail("Unknown transform proto: " + JSON.stringify(e));
                    var o = FieldPath.fromServerFormat(e.fieldPath);
                    return new FieldTransform(o, r)
                }, e.prototype.toDocumentsTarget = function(e) {
                    return {
                        documents: [this.toQueryPath(e.path)]
                    }
                }, e.prototype.fromDocumentsTarget = function(e) {
                    var t = e.documents.length;
                    assert(1 === t, "DocumentsTarget contained other than 1 document: " + t);
                    var n = e.documents[0];
                    return Query.atPath(this.fromQueryPath(n))
                }, e.prototype.toQueryTarget = function(e) {
                    var t = {
                        structuredQuery: {}
                    };
                    if (e.path.isEmpty())
                        t.parent = this.toQueryPath(ResourcePath.EMPTY_PATH);
                    else {
                        var n = e.path;
                        assert(n.length%2 != 0, "Document queries with filters are not supported."), t.parent = this.toQueryPath(n.popLast()), t.structuredQuery.from = [{
                            collectionId: n.lastSegment()
                        }
                        ]
                    }
                    var r = this.toFilter(e.filters);
                    r && (t.structuredQuery.where = r);
                    var i = this.toOrder(e.orderBy);
                    i && (t.structuredQuery.orderBy = i);
                    var o = this.toInt32Value(e.limit);
                    return void 0 !== o && (t.structuredQuery.limit = o), e.startAt && (t.structuredQuery.startAt = this.toCursor(e.startAt)), e.endAt && (t.structuredQuery.endAt = this.toCursor(e.endAt)), t
                }, e.prototype.fromQueryTarget = function(e) {
                    var t = this.fromQueryPath(e.parent), n = e.structuredQuery, r = n.from ? n.from.length: 0;
                    if (r > 0) {
                        assert(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                        var i = n.from[0];
                        t = t.child(i.collectionId)
                    }
                    var o = [];
                    n.where && (o = this.fromFilter(n.where));
                    var a = [];
                    n.orderBy && (a = this.fromOrder(n.orderBy));
                    var s = null;
                    n.limit && (s = this.fromInt32Value(n.limit));
                    var u = null;
                    n.startAt && (u = this.fromCursor(n.startAt));
                    var c = null;
                    return n.endAt && (c = this.fromCursor(n.endAt)), new Query(t, a, o, s, u, c)
                }, e.prototype.toListenRequestLabels = function(e) {
                    var t = this.toLabel(e.purpose);
                    return null == t ? null : {
                        "goog-listen-tags": t
                    }
                }, e.prototype.toLabel = function(e) {
                    switch (e) {
                    case QueryPurpose.Listen:
                        return null;
                    case QueryPurpose.ExistenceFilterMismatch:
                        return "existence-filter-mismatch";
                    case QueryPurpose.LimboResolution:
                        return "limbo-document";
                    default:
                        return fail("Unrecognized query purpose: " + e)
                    }
                }, e.prototype.toTarget = function(e) {
                    var t, n = e.query;
                    return (t = n.isDocumentQuery() ? {
                        documents: this.toDocumentsTarget(n)
                    } : {
                        query: this.toQueryTarget(n)
                    }).targetId = e.targetId, e.resumeToken.length > 0 && (t.resumeToken = this.unsafeCastProtoByteString(e.resumeToken)), t
                }, e.prototype.toFilter = function(e) {
                    var t = this;
                    if (0 !== e.length) {
                        var n = e.map(function(e) {
                            return e instanceof RelationFilter ? t.toRelationFilter(e) : t.toUnaryFilter(e)
                        });
                        return 1 === n.length ? n[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: n
                            }
                        }
                    }
                }, e.prototype.fromFilter = function(e) {
                    var t = this;
                    return e ? void 0 !== e.unaryFilter ? [this.fromUnaryFilter(e)] : void 0 !== e.fieldFilter ? [this.fromRelationFilter(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map(function(e) {
                        return t.fromFilter(e)
                    }).reduce(function(e, t) {
                        return e.concat(t)
                    }) : fail("Unknown filter: " + JSON.stringify(e)) : []
                }, e.prototype.toOrder = function(e) {
                    var t = this;
                    if (0 !== e.length)
                        return e.map(function(e) {
                            return t.toPropertyOrder(e)
                        })
                }, e.prototype.fromOrder = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.fromPropertyOrder(e)
                    })
                }, e.prototype.toCursor = function(e) {
                    var t = this;
                    return {
                        before: e.before,
                        values: e.position.map(function(e) {
                            return t.toValue(e)
                        })
                    }
                }, e.prototype.fromCursor = function(e) {
                    var t = this, n=!!e.before, r = e.values.map(function(e) {
                        return t.fromValue(e)
                    });
                    return new Bound(r, n)
                }, e.prototype.toDirection = function(e) {
                    return DIRECTIONS[e.name]
                }, e.prototype.fromDirection = function(e) {
                    switch (e) {
                    case"ASCENDING":
                        return Direction.ASCENDING;
                    case"DESCENDING":
                        return Direction.DESCENDING;
                    default:
                        return 
                    }
                }, e.prototype.toOperatorName = function(e) {
                    return OPERATORS[e.name]
                }, e.prototype.fromOperatorName = function(e) {
                    switch (e) {
                    case"EQUAL":
                        return RelationOp.EQUAL;
                    case"GREATER_THAN":
                        return RelationOp.GREATER_THAN;
                    case"GREATER_THAN_OR_EQUAL":
                        return RelationOp.GREATER_THAN_OR_EQUAL;
                    case"LESS_THAN":
                        return RelationOp.LESS_THAN;
                    case"LESS_THAN_OR_EQUAL":
                        return RelationOp.LESS_THAN_OR_EQUAL;
                    case"ARRAY_CONTAINS":
                        return RelationOp.ARRAY_CONTAINS;
                    case"OPERATOR_UNSPECIFIED":
                        return fail("Unspecified relation");
                    default:
                        return fail("Unknown relation")
                    }
                }, e.prototype.toFieldPathReference = function(e) {
                    return {
                        fieldPath: e.canonicalString()
                    }
                }, e.prototype.fromFieldPathReference = function(e) {
                    return FieldPath.fromServerFormat(e.fieldPath)
                }, e.prototype.toPropertyOrder = function(e) {
                    return {
                        field: this.toFieldPathReference(e.field),
                        direction: this.toDirection(e.dir)
                    }
                }, e.prototype.fromPropertyOrder = function(e) {
                    return new OrderBy(this.fromFieldPathReference(e.field), this.fromDirection(e.direction))
                }, e.prototype.toRelationFilter = function(e) {
                    return e instanceof RelationFilter ? {
                        fieldFilter: {
                            field: this.toFieldPathReference(e.field),
                            op: this.toOperatorName(e.op),
                            value: this.toValue(e.value)
                        }
                    } : fail("Unrecognized filter: " + JSON.stringify(e))
                }, e.prototype.fromRelationFilter = function(e) {
                    return new RelationFilter(this.fromFieldPathReference(e.fieldFilter.field), this.fromOperatorName(e.fieldFilter.op), this.fromValue(e.fieldFilter.value))
                }, e.prototype.toUnaryFilter = function(e) {
                    return e instanceof NanFilter ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(e.field),
                            op: "IS_NAN"
                        }
                    } : e instanceof NullFilter ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(e.field),
                            op: "IS_NULL"
                        }
                    } : fail("Unrecognized filter: " + JSON.stringify(e))
                }, e.prototype.fromUnaryFilter = function(e) {
                    switch (e.unaryFilter.op) {
                    case"IS_NAN":
                        var t = this.fromFieldPathReference(e.unaryFilter.field);
                        return new NanFilter(t);
                    case"IS_NULL":
                        var n = this.fromFieldPathReference(e.unaryFilter.field);
                        return new NullFilter(n);
                    case"OPERATOR_UNSPECIFIED":
                        return fail("Unspecified filter");
                    default:
                        return fail("Unknown filter")
                    }
                }, e.prototype.toDocumentMask = function(e) {
                    return {
                        fieldPaths: e.fields.map(function(e) {
                            return e.canonicalString()
                        })
                    }
                }, e.prototype.fromDocumentMask = function(e) {
                    var t = (e.fieldPaths || []).map(function(e) {
                        return FieldPath.fromServerFormat(e)
                    });
                    return new FieldMask(t)
                }, e
            }();
            function hasTag(e, t, n) {
                return t === n ||!t && n in e
            }
            var isReactNative = function() {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }, ERROR_NAME = "FirebaseError", captureStackTrace = Error.captureStackTrace, FirebaseError = function() {
                return function(e, t) {
                    if (this.code = e, this.message = t, captureStackTrace)
                        captureStackTrace(this, ErrorFactory.prototype.create);
                    else 
                        try {
                            throw Error.apply(this, arguments)
                    } catch (e) {
                        this.name = ERROR_NAME, Object.defineProperty(this, "stack", {
                            get: function() {
                                return e.stack
                            }
                        })
                    }
                }
            }();
            FirebaseError.prototype = Object.create(Error.prototype), FirebaseError.prototype.constructor = FirebaseError, FirebaseError.prototype.name = ERROR_NAME;
            var ErrorFactory = function() {
                function e(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n, this.pattern = /\{\$([^}]+)}/g
                }
                return e.prototype.create = function(e, t) {
                    void 0 === t && (t = {});
                    var n, r = this.errors[e], i = this.service + "/" + e;
                    n = void 0 === r ? "Error" : r.replace(this.pattern, function(e, n) {
                        var r = t[n];
                        return void 0 !== r ? r.toString() : "<" + n + "?>"
                    }), n = this.serviceName + ": " + n + " (" + i + ").";
                    var o = new FirebaseError(i, n);
                    for (var a in t)
                        t.hasOwnProperty(a) && "_" !== a.slice( - 1) && (o[a] = t[a]);
                    return o
                }, e
            }(), Hash = function() {
                return function() {
                    this.blockSize =- 1
                }
            }(), Sha1 = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ = 0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128;
                    for (var n = 1; n < t.blockSize; ++n)
                        t.pad_[n] = 0;
                    return t.reset(), t
                }
                return __extends(t, e), t.prototype.reset = function() {
                    this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                }, t.prototype.compress_ = function(e, t) {
                    t || (t = 0);
                    var n = this.W_;
                    if ("string" == typeof e)
                        for (var r = 0; r < 16; r++)
                            n[r] = e.charCodeAt(t)<<24 | e.charCodeAt(t + 1)<<16 | e.charCodeAt(t + 2)<<8 | e.charCodeAt(t + 3), t += 4;
                    else 
                        for (r = 0; r < 16; r++)
                            n[r] = e[t]<<24 | e[t + 1]<<16 | e[t + 2]<<8 | e[t + 3], t += 4;
                    for (r = 16; r < 80; r++) {
                        var i = n[r - 3]^n[r - 8]^n[r - 14]^n[r - 16];
                        n[r] = 4294967295 & (i<<1 | i>>>31)
                    }
                    var o, a, s = this.chain_[0], u = this.chain_[1], c = this.chain_[2], h = this.chain_[3], l = this.chain_[4];
                    for (r = 0; r < 80; r++) {
                        r < 40 ? r < 20 ? (o = h^u & (c^h), a = 1518500249) : (o = u^c^h, a = 1859775393) : r < 60 ? (o = u & c | h & (u | c), a = 2400959708) : (o = u^c^h, a = 3395469782);
                        i = (s<<5 | s>>>27) + o + l + a + n[r] & 4294967295;
                        l = h, h = c, c = 4294967295 & (u<<30 | u>>>2), u = s, s = i
                    }
                    this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
                }, t.prototype.update = function(e, t) {
                    if (null != e) {
                        void 0 === t && (t = e.length);
                        for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                            if (0 == o)
                                for (; r <= n;)
                                    this.compress_(e, r), r += this.blockSize;
                            if ("string" == typeof e) {
                                for (; r < t;)
                                    if (i[o] = e.charCodeAt(r), ++r, ++o == this.blockSize) {
                                        this.compress_(i), o = 0;
                                        break
                                    }
                            } else 
                                for (; r < t;)
                                    if (i[o] = e[r], ++r, ++o == this.blockSize) {
                                        this.compress_(i), o = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = o, this.total_ += t
                    }
                }, t.prototype.digest = function() {
                    var e = [], t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (var n = this.blockSize - 1; n >= 56; n--)
                        this.buf_[n] = 255 & t, t/=256;
                    this.compress_(this.buf_);
                    var r = 0;
                    for (n = 0; n < 5; n++)
                        for (var i = 24; i >= 0; i -= 8)
                            e[r] = this.chain_[n]>>i & 255, ++r;
                    return e
                }, t
            }(Hash), StreamBridge = function() {
                function e(e) {
                    this.sendFn = e.sendFn, this.closeFn = e.closeFn
                }
                return e.prototype.onOpen = function(e) {
                    assert(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = e
                }, e.prototype.onClose = function(e) {
                    assert(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = e
                }, e.prototype.onMessage = function(e) {
                    assert(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = e
                }, e.prototype.close = function() {
                    this.closeFn()
                }, e.prototype.send = function(e) {
                    this.sendFn(e)
                }, e.prototype.callOnOpen = function() {
                    assert(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen()
                }, e.prototype.callOnClose = function(e) {
                    assert(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(e)
                }, e.prototype.callOnMessage = function(e) {
                    assert(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(e)
                }, e
            }(), LOG_TAG = "Connection", RPC_STREAM_SERVICE = "google.firestore.v1beta1.Firestore", RPC_URL_VERSION = "v1beta1", RPC_NAME_REST_MAPPING = {
                BatchGetDocuments: "batchGet",
                Commit: "commit"
            }, X_GOOG_API_CLIENT_VALUE = "gl-js/ fire/" + SDK_VERSION, XHR_TIMEOUT_SECS = 15, WebChannelConnection = function() {
                function e(e) {
                    this.databaseId = e.databaseId, this.pool = new dist_5;
                    var t = e.ssl ? "https": "http";
                    this.baseUrl = t + "://" + e.host
                }
                return e.prototype.modifyHeadersForRequest = function(e, t) {
                    if (t)
                        for (var n in t.authHeaders)
                            t.authHeaders.hasOwnProperty(n) && (e[n] = t.authHeaders[n]);
                    e["X-Goog-Api-Client"] = X_GOOG_API_CLIENT_VALUE
                }, e.prototype.invokeRPC = function(e, t, n) {
                    var r = this, i = this.makeUrl(e);
                    return new Promise(function(o, a) {
                        r.pool.getObject(function(s) {
                            s.listenOnce(dist_3.COMPLETE, function() {
                                try {
                                    switch (s.getLastErrorCode()) {
                                    case dist_2.NO_ERROR:
                                        var t = s.getResponseJson();
                                        debug(LOG_TAG, "XHR received:", JSON.stringify(t)), o(t);
                                        break;
                                    case dist_2.TIMEOUT:
                                        debug(LOG_TAG, 'RPC "' + e + '" timed out'), a(new FirestoreError(Code.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case dist_2.HTTP_ERROR:
                                        var n = s.getStatus();
                                        debug(LOG_TAG, 'RPC "' + e + '" failed with status:', n, "response text:", s.getResponseText()), n > 0 ? a(new FirestoreError(mapCodeFromHttpStatus(n), "Server responded with status " + s.getStatusText())) : (debug(LOG_TAG, 'RPC "' + e + '" failed'), a(new FirestoreError(Code.UNAVAILABLE, "Connection failed.")));
                                        break;
                                    default:
                                        fail('RPC "' + e + '" failed with unanticipated webchannel error ' + s.getLastErrorCode() + ": " + s.getLastError() + ", giving up.")
                                    }
                                } finally {
                                    debug(LOG_TAG, 'RPC "' + e + '" completed.'), r.pool.releaseObject(s)
                                }
                            });
                            var u = JSON.stringify(t);
                            debug(LOG_TAG, "XHR sending: ", i + " " + u);
                            var c = {
                                "Content-Type": "text/plain"
                            };
                            r.modifyHeadersForRequest(c, n), s.send(i, "POST", u, c, XHR_TIMEOUT_SECS)
                        })
                    })
                }, e.prototype.invokeStreamingRPC = function(e, t, n) {
                    return this.invokeRPC(e, t, n)
                }, e.prototype.openStream = function(e, t) {
                    var n = [this.baseUrl, "/", RPC_STREAM_SERVICE, "/", e, "/channel"], r = dist_1(), i = {
                        backgroundChannelTest: !0,
                        httpSessionIdParam: "gsessionid",
                        initMessageHeaders: {},
                        messageUrlParams: {
                            database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                        },
                        sendRawJson: !0,
                        supportsCrossDomainXhr: !0
                    };
                    this.modifyHeadersForRequest(i.initMessageHeaders, t), isReactNative() || (i.httpHeadersOverwriteParam = "$httpHeaders");
                    var o = n.join("");
                    debug(LOG_TAG, "Creating WebChannel: " + o + " " + i);
                    var a = r.createWebChannel(o, i), s=!1, u=!1, c = new StreamBridge({
                        sendFn: function(e) {
                            u ? debug(LOG_TAG, "Not sending because WebChannel is closed:", e) : (s || (debug(LOG_TAG, "Opening WebChannel transport."), a.open(), s=!0), debug(LOG_TAG, "WebChannel sending:", e), a.send(e))
                        },
                        closeFn: function() {
                            return a.close()
                        }
                    }), h = function(e, t) {
                        a.listen(e, function(e) {
                            try {
                                t(e)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 0)
                            }
                        })
                    };
                    return h(dist_4.EventType.OPEN, function() {
                        u || debug(LOG_TAG, "WebChannel transport opened.")
                    }), h(dist_4.EventType.CLOSE, function() {
                        u || (u=!0, debug(LOG_TAG, "WebChannel transport closed"), c.callOnClose())
                    }), h(dist_4.EventType.ERROR, function(e) {
                        u || (u=!0, debug(LOG_TAG, "WebChannel transport errored:", e), c.callOnClose(new FirestoreError(Code.UNAVAILABLE, "The operation could not be completed")))
                    }), h(dist_4.EventType.MESSAGE, function(e) {
                        if (!u) {
                            var t = e.data[0];
                            assert(!!t, "Got a webchannel message without data.");
                            var n = t.error || t[0] && t[0].error;
                            if (n) {
                                debug(LOG_TAG, "WebChannel received error:", n);
                                var r = n.status, i = mapCodeFromRpcStatus(r), o = n.message;
                                void 0 === i && (i = Code.INTERNAL, o = "Unknown error status: " + r + " with message " + n.message), u=!0, c.callOnClose(new FirestoreError(i, o)), a.close()
                            } else 
                                debug(LOG_TAG, "WebChannel received:", t), c.callOnMessage(t)
                        }
                    }), setTimeout(function() {
                        c.callOnOpen()
                    }, 0), c
                }, e.prototype.makeUrl = function(e) {
                    var t = RPC_NAME_REST_MAPPING[e];
                    assert(void 0 !== t, "Unknown REST mapping for: " + e);
                    var n = [this.baseUrl, "/", RPC_URL_VERSION];
                    return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(t), n.join("")
                }, e
            }(), BrowserPlatform = function() {
                function e() {
                    this.emptyByteString = "", this.base64Available = "undefined" != typeof atob
                }
                return Object.defineProperty(e.prototype, "document", {
                    get: function() {
                        return "undefined" != typeof document ? document : null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "window", {
                    get: function() {
                        return "undefined" != typeof window ? window : null
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.loadConnection = function(e) {
                    return Promise.resolve(new WebChannelConnection(e))
                }, e.prototype.newSerializer = function(e) {
                    return new JsonProtoSerializer(e, {
                        useProto3Json: !0
                    })
                }, e.prototype.formatJSON = function(e) {
                    return JSON.stringify(e)
                }, e.prototype.atob = function(e) {
                    return atob(e)
                }, e.prototype.btoa = function(e) {
                    return btoa(e)
                }, e
            }();
            PlatformSupport.setPlatform(new BrowserPlatform);
            var FieldPath$1 = function() {
                function e() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    validateNamedArrayAtLeastNumberOfElements("FieldPath", e, "fieldNames", 1);
                    for (var n = 0; n < e.length; ++n)
                        if (validateArgType("FieldPath", "string", n, e[n]), 0 === e[n].length)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                    this._internalPath = new FieldPath(e)
                }
                return e.documentId = function() {
                    return e._DOCUMENT_ID
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        throw invalidClassError("isEqual", "FieldPath", 1, t);
                    return this._internalPath.isEqual(t._internalPath)
                }, e._DOCUMENT_ID = new e(FieldPath.keyField().canonicalString()), e
            }(), RESERVED = new RegExp("[~\\*/\\[\\]]"), OnlineState, OnlineStateSource;
            function fromDotSeparatedString(e) {
                if (e.search(RESERVED) >= 0)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
                try {
                    return new (FieldPath$1.bind.apply(FieldPath$1, [void 0].concat(e.split("."))))
                } catch (t) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                }
            }
            !function(e) {
                e[e.Unknown = 0] = "Unknown", e[e.Online = 1] = "Online", e[e.Offline = 2] = "Offline"
            }(OnlineState || (OnlineState = {})), function(e) {
                e[e.RemoteStore = 0] = "RemoteStore", e[e.SharedClientState = 1] = "SharedClientState"
            }(OnlineStateSource || (OnlineStateSource = {}));
            var ObjectMap = function() {
                function e(e) {
                    this.mapKeyFn = e, this.inner = {}
                }
                return e.prototype.get = function(e) {
                    var t = this.mapKeyFn(e), n = this.inner[t];
                    if (void 0 !== n)
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r], a = o[0], s = o[1];
                            if (a.isEqual(e))
                                return s
                        }
                }, e.prototype.has = function(e) {
                    return void 0 !== this.get(e)
                }, e.prototype.set = function(e, t) {
                    var n = this.mapKeyFn(e), r = this.inner[n];
                    if (void 0 !== r) {
                        for (var i = 0; i < r.length; i++)
                            if (r[i][0].isEqual(e))
                                return void(r[i] = [e, t]);
                        r.push([e, t])
                    } else 
                        this.inner[n] = [[e, t]]
                }, e.prototype.delete = function(e) {
                    var t = this.mapKeyFn(e), n = this.inner[t];
                    if (void 0 === n)
                        return !1;
                    for (var r = 0; r < n.length; r++)
                        if (n[r][0].isEqual(e))
                            return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), !0;
                    return !1
                }, e.prototype.forEach = function(e) {
                    forEach(this.inner, function(t, n) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r], a = o[0], s = o[1];
                            e(a, s)
                        }
                    })
                }, e.prototype.isEmpty = function() {
                    return isEmpty(this.inner)
                }, e
            }(), QueryListenersInfo = function() {
                return function() {
                    this.listeners = []
                }
            }(), EventManager = function() {
                function e(e) {
                    this.syncEngine = e, this.queries = new ObjectMap(function(e) {
                        return e.canonicalId()
                    }), this.onlineState = OnlineState.Unknown, this.syncEngine.subscribe(this)
                }
                return e.prototype.listen = function(e) {
                    var t = e.query, n=!1, r = this.queries.get(t);
                    return r || (n=!0, r = new QueryListenersInfo, this.queries.set(t, r)), r.listeners.push(e), e.applyOnlineStateChange(this.onlineState), r.viewSnap && e.onViewSnapshot(r.viewSnap), n ? this.syncEngine.listen(t).then(function(e) {
                        return r.targetId = e, e
                    }) : Promise.resolve(r.targetId)
                }, e.prototype.unlisten = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return __generator(this, function(o) {
                            return t = e.query, n=!1, (r = this.queries.get(t)) && (i = r.listeners.indexOf(e)) >= 0 && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(t), [2, this.syncEngine.unlisten(t)]) : [2]
                        })
                    })
                }, e.prototype.onWatchChange = function(e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t], i = r.query, o = this.queries.get(i);
                        if (o) {
                            for (var a = 0, s = o.listeners; a < s.length; a++) {
                                s[a].onViewSnapshot(r)
                            }
                            o.viewSnap = r
                        }
                    }
                }, e.prototype.onWatchError = function(e, t) {
                    var n = this.queries.get(e);
                    if (n)
                        for (var r = 0, i = n.listeners; r < i.length; r++) {
                            i[r].onError(t)
                        }
                    this.queries.delete(e)
                }, e.prototype.onOnlineStateChange = function(e) {
                    this.onlineState = e, this.queries.forEach(function(t, n) {
                        for (var r = 0, i = n.listeners; r < i.length; r++) {
                            i[r].applyOnlineStateChange(e)
                        }
                    })
                }, e
            }(), QueryListener = function() {
                function e(e, t, n) {
                    this.query = e, this.queryObserver = t, this.raisedInitialEvent=!1, this.onlineState = OnlineState.Unknown, this.options = n || {}
                }
                return e.prototype.onViewSnapshot = function(e) {
                    if (assert(e.docChanges.length > 0 || e.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) {
                        for (var t = [], n = 0, r = e.docChanges; n < r.length; n++) {
                            var i = r[n];
                            i.type !== ChangeType.Metadata && t.push(i)
                        }
                        e = new ViewSnapshot(e.query, e.docs, e.oldDocs, t, e.fromCache, e.hasPendingWrites, e.syncStateChanged, !0)
                    }
                    this.raisedInitialEvent ? this.shouldRaiseEvent(e) && this.queryObserver.next(e) : this.shouldRaiseInitialEvent(e, this.onlineState) && this.raiseInitialEvent(e), this.snap = e
                }, e.prototype.onError = function(e) {
                    this.queryObserver.error(e)
                }, e.prototype.applyOnlineStateChange = function(e) {
                    this.onlineState = e, this.snap&&!this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, e) && this.raiseInitialEvent(this.snap)
                }, e.prototype.shouldRaiseInitialEvent = function(e, t) {
                    if (assert(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !e.fromCache)
                        return !0;
                    var n = t !== OnlineState.Offline;
                    return this.options.waitForSyncWhenOnline && n ? (assert(e.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !e.docs.isEmpty() || t === OnlineState.Offline
                }, e.prototype.shouldRaiseEvent = function(e) {
                    if (e.docChanges.length > 0)
                        return !0;
                    var t = this.snap && this.snap.hasPendingWrites !== e.hasPendingWrites;
                    return !(!e.syncStateChanged&&!t)&&!0 === this.options.includeMetadataChanges
                }, e.prototype.raiseInitialEvent = function(e) {
                    assert(!this.raisedInitialEvent, "Trying to raise initial events for second time"), e = ViewSnapshot.fromInitialDocuments(e.query, e.docs, e.fromCache, e.hasPendingWrites), this.raisedInitialEvent=!0, this.queryObserver.next(e)
                }, e
            }(), LocalViewChanges = function() {
                function e(e, t, n) {
                    this.targetId = e, this.addedKeys = t, this.removedKeys = n
                }
                return e.fromSnapshot = function(t, n) {
                    for (var r = documentKeySet(), i = documentKeySet(), o = 0, a = n.docChanges; o < a.length; o++) {
                        var s = a[o];
                        switch (s.type) {
                        case ChangeType.Added:
                            r = r.add(s.doc.key);
                            break;
                        case ChangeType.Removed:
                            i = i.add(s.doc.key)
                        }
                    }
                    return new e(t, r, i)
                }, e
            }(), PersistencePromise = function() {
                function e(e) {
                    var t = this;
                    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone=!1, this.callbackAttached=!1, e(function(e) {
                        t.isDone=!0, t.result = e, t.nextCallback && t.nextCallback(e)
                    }, function(e) {
                        t.isDone=!0, t.error = e, t.catchCallback && t.catchCallback(e)
                    })
                }
                return e.prototype.catch = function(e) {
                    return this.next(void 0, e)
                }, e.prototype.next = function(t, n) {
                    var r = this;
                    return this.callbackAttached && fail("Called next() or catch() twice for PersistencePromise"), this.callbackAttached=!0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(t, this.result) : new e(function(e, i) {
                        r.nextCallback = function(n) {
                            r.wrapSuccess(t, n).next(e, i)
                        }, r.catchCallback = function(t) {
                            r.wrapFailure(n, t).next(e, i)
                        }
                    })
                }, e.prototype.toPromise = function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e.next(t, n)
                    })
                }, e.prototype.wrapUserFunction = function(t) {
                    try {
                        var n = t();
                        return n instanceof e ? n : e.resolve(n)
                    } catch (t) {
                        return e.reject(t)
                    }
                }, e.prototype.wrapSuccess = function(t, n) {
                    return t ? this.wrapUserFunction(function() {
                        return t(n)
                    }) : e.resolve(n)
                }, e.prototype.wrapFailure = function(t, n) {
                    return t ? this.wrapUserFunction(function() {
                        return t(n)
                    }) : e.reject(n)
                }, e.resolve = function(t) {
                    return new e(function(e, n) {
                        e(t)
                    })
                }, e.reject = function(t) {
                    return new e(function(e, n) {
                        n(t)
                    })
                }, e.waitFor = function(t) {
                    var n = t.length;
                    if (0 === n)
                        return e.resolve();
                    var r = 0;
                    return new e(function(e, i) {
                        for (var o = 0, a = t; o < a.length; o++) {
                            a[o].next(function() {
                                ++r === n && e()
                            }, function(e) {
                                return i(e)
                            })
                        }
                    })
                }, e.map = function(t) {
                    for (var n = [], r = [], i = function(e) {
                        r[e] = t[e].next(function(t) {
                            n[e] = t
                        })
                    }, o = 0; o < t.length; ++o)
                        i(o);
                    return e.waitFor(r).next(function() {
                        return n
                    })
                }, e.forEach = function(t, n) {
                    for (var r = e.resolve(), i = function(e) {
                        r = r.next(function() {
                            return n(e)
                        })
                    }, o = 0, a = t; o < a.length; o++) {
                        i(a[o])
                    }
                    return r
                }, e
            }(), ReferenceSet = function() {
                function e() {
                    this.refsByKey = new SortedSet(DocReference.compareByKey), this.refsByTarget = new SortedSet(DocReference.compareByTargetId), this.garbageCollector = null
                }
                return e.prototype.isEmpty = function() {
                    return this.refsByKey.isEmpty()
                }, e.prototype.addReference = function(e, t) {
                    var n = new DocReference(e, t);
                    this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
                }, e.prototype.addReferences = function(e, t) {
                    var n = this;
                    e.forEach(function(e) {
                        return n.addReference(e, t)
                    })
                }, e.prototype.removeReference = function(e, t) {
                    this.removeRef(new DocReference(e, t))
                }, e.prototype.removeReferences = function(e, t) {
                    var n = this;
                    e.forEach(function(e) {
                        return n.removeReference(e, t)
                    })
                }, e.prototype.removeReferencesForId = function(e) {
                    var t = this, n = DocumentKey.EMPTY, r = new DocReference(n, e), i = new DocReference(n, e + 1);
                    this.refsByTarget.forEachInRange([r, i], function(e) {
                        t.removeRef(e)
                    })
                }, e.prototype.removeAllReferences = function() {
                    var e = this;
                    this.refsByKey.forEach(function(t) {
                        return e.removeRef(t)
                    })
                }, e.prototype.removeRef = function(e) {
                    this.refsByKey = this.refsByKey.delete(e), this.refsByTarget = this.refsByTarget.delete(e), null !== this.garbageCollector && this.garbageCollector.addPotentialGarbageKey(e.key)
                }, e.prototype.referencesForId = function(e) {
                    var t = DocumentKey.EMPTY, n = new DocReference(t, e), r = new DocReference(t, e + 1), i = documentKeySet();
                    return this.refsByTarget.forEachInRange([n, r], function(e) {
                        i = i.add(e.key)
                    }), i
                }, e.prototype.setGarbageCollector = function(e) {
                    this.garbageCollector = e
                }, e.prototype.containsKey = function(e, t) {
                    var n = new DocReference(t, 0), r = this.refsByKey.firstAfterOrEqual(n);
                    return PersistencePromise.resolve(null !== r && t.isEqual(r.key))
                }, e
            }(), DocReference = function() {
                function e(e, t) {
                    this.key = e, this.targetOrBatchId = t
                }
                return e.compareByKey = function(e, t) {
                    return DocumentKey.comparator(e.key, t.key) || primitiveComparator(e.targetOrBatchId, t.targetOrBatchId)
                }, e.compareByTargetId = function(e, t) {
                    return primitiveComparator(e.targetOrBatchId, t.targetOrBatchId) || DocumentKey.comparator(e.key, t.key)
                }, e
            }(), RESERVED_BITS = 1, GeneratorIds;
            !function(e) {
                e[e.QueryCache = 0] = "QueryCache", e[e.SyncEngine = 1] = "SyncEngine"
            }(GeneratorIds || (GeneratorIds = {}));
            var TargetIdGenerator = function() {
                function e(e, t) {
                    this.generatorId = e, assert((e & RESERVED_BITS) === e, "Generator ID " + e + " contains more than " + RESERVED_BITS + " reserved bits"), this.seek(void 0 !== t ? t : this.generatorId)
                }
                return e.prototype.next = function() {
                    var e = this.nextId;
                    return this.nextId += 1<<RESERVED_BITS, e
                }, e.prototype.after = function(e) {
                    return this.seek(e + (1<<RESERVED_BITS)), this.next()
                }, e.prototype.seek = function(e) {
                    assert((e & RESERVED_BITS) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = e
                }, e.forQueryCache = function() {
                    return new e(GeneratorIds.QueryCache, 2)
                }, e.forSyncEngine = function() {
                    return new e(GeneratorIds.SyncEngine)
                }, e
            }(), AddedLimboDocument = function() {
                return function(e) {
                    this.key = e
                }
            }(), RemovedLimboDocument = function() {
                return function(e) {
                    this.key = e
                }
            }(), View = function() {
                function e(e, t) {
                    this.query = e, this._syncedDocuments = t, this.syncState = null, this.current=!1, this.limboDocuments = documentKeySet(), this.mutatedKeys = documentKeySet(), this.documentSet = new DocumentSet(e.docComparator.bind(e))
                }
                return Object.defineProperty(e.prototype, "syncedDocuments", {
                    get: function() {
                        return this._syncedDocuments
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.computeDocChanges = function(e, t) {
                    var n = this, r = t ? t.changeSet: new DocumentChangeSet, i = t ? t.documentSet: this.documentSet, o = t ? t.mutatedKeys: this.mutatedKeys, a = i, s=!1, u = this.query.hasLimit() && i.size === this.query.limit ? i.last() : null;
                    if (e.inorderTraversal(function(e, t) {
                        var c = i.get(e), h = t instanceof Document ? t: null;
                        if (h && (assert(e.isEqual(h.key), "Mismatching keys found in document changes: " + e + " != " + h.key), h = n.query.matches(h) ? h : null), h ? (a = a.add(h), o = h.hasLocalMutations ? o.add(e) : o.delete(e)) : (a = a.delete(e), o = o.delete(e)), c && h) {
                            var l = c.data.isEqual(h.data);
                            l && c.hasLocalMutations === h.hasLocalMutations || (l ? r.track({
                                type: ChangeType.Metadata,
                                doc: h
                            }) : r.track({
                                type: ChangeType.Modified,
                                doc: h
                            }), u && n.query.docComparator(h, u) > 0 && (s=!0))
                        } else 
                            !c && h ? r.track({
                                type: ChangeType.Added,
                                doc: h
                            }) : c&&!h && (r.track({
                                type: ChangeType.Removed,
                                doc: c
                            }), u && (s=!0))
                    }), this.query.hasLimit())
                        for (; a.size > this.query.limit;) {
                            var c = a.last();
                            a = a.delete(c.key), r.track({
                                type: ChangeType.Removed,
                                doc: c
                            })
                        }
                    return assert(!s ||!t, "View was refilled using docs that themselves needed refilling."), {
                        documentSet: a,
                        changeSet: r,
                        needsRefill: s,
                        mutatedKeys: o
                    }
                }, e.prototype.applyChanges = function(e, t, n) {
                    var r = this;
                    assert(!e.needsRefill, "Cannot apply changes that need a refill");
                    var i = this.documentSet;
                    this.documentSet = e.documentSet, this.mutatedKeys = e.mutatedKeys;
                    var o = e.changeSet.getChanges();
                    o.sort(function(e, t) {
                        return compareChangeType(e.type, t.type) || r.query.docComparator(e.doc, t.doc)
                    }), this.applyTargetChange(n);
                    var a = t ? this.updateLimboDocuments(): [], s = 0 === this.limboDocuments.size && this.current ? SyncState.Synced: SyncState.Local, u = s !== this.syncState;
                    return this.syncState = s, 0 !== o.length || u ? {
                        snapshot: new ViewSnapshot(this.query, e.documentSet, i, o, s === SyncState.Local, !e.mutatedKeys.isEmpty(), u, !1),
                        limboChanges: a
                    } : {
                        limboChanges: a
                    }
                }, e.prototype.applyOnlineStateChange = function(e) {
                    return this.current && e === OnlineState.Offline ? (this.current=!1, this.applyChanges({
                        documentSet: this.documentSet,
                        changeSet: new DocumentChangeSet,
                        mutatedKeys: this.mutatedKeys,
                        needsRefill: !1
                    }, !1)) : {
                        limboChanges: []
                    }
                }, e.prototype.shouldBeInLimbo = function(e) {
                    return !this._syncedDocuments.has(e) && (!!this.documentSet.has(e)&&!this.documentSet.get(e).hasLocalMutations)
                }, e.prototype.applyTargetChange = function(e) {
                    var t = this;
                    e && (e.addedDocuments.forEach(function(e) {
                        return t._syncedDocuments = t._syncedDocuments.add(e)
                    }), e.modifiedDocuments.forEach(function(e) {
                        return assert(t._syncedDocuments.has(e), "Modified document " + e + " not found in view.")
                    }), e.removedDocuments.forEach(function(e) {
                        return t._syncedDocuments = t._syncedDocuments.delete(e)
                    }), this.current = e.current)
                }, e.prototype.updateLimboDocuments = function() {
                    var e = this;
                    if (!this.current)
                        return [];
                    var t = this.limboDocuments;
                    this.limboDocuments = documentKeySet(), this.documentSet.forEach(function(t) {
                        e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key))
                    });
                    var n = [];
                    return t.forEach(function(t) {
                        e.limboDocuments.has(t) || n.push(new RemovedLimboDocument(t))
                    }), this.limboDocuments.forEach(function(e) {
                        t.has(e) || n.push(new AddedLimboDocument(e))
                    }), n
                }, e.prototype.synchronizeWithPersistedState = function(e, t) {
                    this._syncedDocuments = t, this.limboDocuments = documentKeySet();
                    var n = this.computeDocChanges(e);
                    return this.applyChanges(n, !0)
                }, e.prototype.computeInitialSnapshot = function() {
                    return ViewSnapshot.fromInitialDocuments(this.query, this.documentSet, this.syncState === SyncState.Local, !this.mutatedKeys.isEmpty())
                }, e
            }();
            function compareChangeType(e, t) {
                var n = function(e) {
                    switch (e) {
                    case ChangeType.Added:
                        return 1;
                    case ChangeType.Modified:
                    case ChangeType.Metadata:
                        return 2;
                    case ChangeType.Removed:
                        return 0;
                    default:
                        return fail("Unknown ChangeType: " + e)
                    }
                };
                return n(e) - n(t)
            }
            var BATCHID_UNKNOWN =- 1, MutationBatch = function() {
                function e(e, t, n) {
                    this.batchId = e, this.localWriteTime = t, this.mutations = n
                }
                return e.prototype.applyToRemoteDocument = function(e, t, n) {
                    t && assert(t.key.isEqual(e), "applyToRemoteDocument: key " + e + " should match maybeDoc key\n        " + t.key);
                    var r = n.mutationResults;
                    assert(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                    for (var i = 0; i < this.mutations.length; i++) {
                        var o = this.mutations[i];
                        if (o.key.isEqual(e)) {
                            var a = r[i];
                            t = o.applyToRemoteDocument(t, a)
                        }
                    }
                    return t
                }, e.prototype.applyToLocalView = function(e, t) {
                    t && assert(t.key.isEqual(e), "applyToLocalDocument: key " + e + " should match maybeDoc key\n        " + t.key);
                    for (var n = t, r = 0; r < this.mutations.length; r++) {
                        var i = this.mutations[r];
                        i.key.isEqual(e) && (t = i.applyToLocalView(t, n, this.localWriteTime))
                    }
                    return t
                }, e.prototype.keys = function() {
                    for (var e = documentKeySet(), t = 0, n = this.mutations; t < n.length; t++) {
                        var r = n[t];
                        e = e.add(r.key)
                    }
                    return e
                }, e.prototype.isEqual = function(e) {
                    return this.batchId === e.batchId && arrayEquals(this.mutations, e.mutations)
                }, e.prototype.isTombstone = function() {
                    return 0 === this.mutations.length
                }, e.prototype.toTombstone = function() {
                    return new e(this.batchId, this.localWriteTime, [])
                }, e
            }(), MutationBatchResult = function() {
                function e(e, t, n, r, i) {
                    this.batch = e, this.commitVersion = t, this.mutationResults = n, this.streamToken = r, this.docVersions = i
                }
                return e.from = function(t, n, r, i) {
                    assert(t.mutations.length === r.length, "Mutations sent " + t.mutations.length + " must equal results received " + r.length);
                    for (var o = documentVersionMap(), a = t.mutations, s = 0; s < a.length; s++) {
                        var u = r[s].version;
                        null === u && (u = n), o = o.insert(a[s].key, u)
                    }
                    return new e(t, n, r, i, o)
                }, e
            }(), escapeChar = "", encodedSeparatorChar = "", encodedNul = "", encodedEscape = "";
            function encode(e) {
                for (var t = "", n = 0; n < e.length; n++)
                    t.length > 0 && (t = encodeSeparator(t)), t = encodeSegment(e.get(n), t);
                return encodeSeparator(t)
            }
            function encodeSegment(e, t) {
                for (var n = t, r = e.length, i = 0; i < r; i++) {
                    var o = e.charAt(i);
                    switch (o) {
                    case"\0":
                        n += escapeChar + encodedNul;
                        break;
                    case escapeChar:
                        n += escapeChar + encodedEscape;
                        break;
                    default:
                        n += o
                    }
                }
                return n
            }
            function encodeSeparator(e) {
                return e + escapeChar + encodedSeparatorChar
            }
            function decode$1(e) {
                var t = e.length;
                if (assert(t >= 2, "Invalid path " + e), 2 === t)
                    return assert(e.charAt(0) === escapeChar && e.charAt(1) === encodedSeparatorChar, "Non-empty path " + e + " had length 2"), ResourcePath.EMPTY_PATH;
                for (var n = t - 2, r = [], i = "", o = 0; o < t;) {
                    var a = e.indexOf(escapeChar, o);
                    switch ((a < 0 || a > n) && fail('Invalid encoded resource path: "' + e + '"'), e.charAt(a + 1)) {
                    case encodedSeparatorChar:
                        var s = e.substring(o, a), u = void 0;
                        0 === i.length ? u = s : (u = i += s, i = ""), r.push(u);
                        break;
                    case encodedNul:
                        i += e.substring(o, a), i += "\0";
                        break;
                    case encodedEscape:
                        i += e.substring(o, a + 1);
                        break;
                    default:
                        fail('Invalid encoded resource path: "' + e + '"')
                    }
                    o = a + 2
                }
                return new ResourcePath(r)
            }
            var SCHEMA_VERSION = 4, SchemaConverter = function() {
                function e(e) {
                    this.serializer = e
                }
                return e.prototype.createOrUpgrade = function(e, t, n, r) {
                    var i = this;
                    n < 1 && r >= 1 && (createPrimaryClientStore(e), createMutationQueue(e), createQueryCache(e), createRemoteDocumentCache(e));
                    var o = PersistencePromise.resolve();
                    return n < 3 && r >= 3 && (0 !== n && (dropQueryCache(e), createQueryCache(e)), o = o.next(function() {
                        return writeEmptyTargetGlobalEntry(t)
                    })), n < 4 && r >= 4 && (0 !== n && (o = o.next(function() {
                        return upgradeMutationBatchSchemaAndMigrateData(e, t)
                    })), o = o.next(function() {
                        createClientMetadataStore(e), createRemoteDocumentChangesStore(e)
                    })), n < 5 && r >= 5 && (o = o.next(function() {
                        return i.removeAcknowledgedMutations(t)
                    })), o
                }, e.prototype.removeAcknowledgedMutations = function(e) {
                    var t = this, n = e.store(DbMutationQueue.store), r = e.store(DbMutationBatch.store), i = new IndexedDbTransaction(e);
                    return n.loadAll().next(function(e) {
                        return PersistencePromise.forEach(e, function(e) {
                            var n = new IndexedDbMutationQueue(e.userId, t.serializer), o = IDBKeyRange.bound([e.userId, BATCHID_UNKNOWN], [e.userId, e.lastAcknowledgedBatchId]);
                            return r.loadAll(DbMutationBatch.userMutationsIndex, o).next(function(r) {
                                return PersistencePromise.forEach(r, function(r) {
                                    assert(r.userId === e.userId, "Cannot process batch " + r.batchId + " from unexpected user");
                                    var o = t.serializer.fromDbMutationBatch(r);
                                    return n.removeMutationBatch(i, o)
                                })
                            }).next(function() {
                                return n.performConsistencyCheck(i)
                            })
                        })
                    })
                }, e
            }(), DbTimestamp = function() {
                return function(e, t) {
                    this.seconds = e, this.nanoseconds = t
                }
            }(), DbPrimaryClient = function() {
                function e(e, t, n) {
                    this.ownerId = e, this.allowTabSynchronization = t, this.leaseTimestampMs = n
                }
                return e.store = "owner", e.key = "owner", e
            }();
            function createPrimaryClientStore(e) {
                e.createObjectStore(DbPrimaryClient.store)
            }
            var DbMutationQueue = function() {
                function e(e, t, n) {
                    this.userId = e, this.lastAcknowledgedBatchId = t, this.lastStreamToken = n
                }
                return e.store = "mutationQueues", e.keyPath = "userId", e
            }(), DbMutationBatch = function() {
                function e(e, t, n, r) {
                    this.userId = e, this.batchId = t, this.localWriteTimeMs = n, this.mutations = r
                }
                return e.store = "mutations", e.keyPath = "batchId", e.userMutationsIndex = "userMutationsIndex", e.userMutationsKeyPath = ["userId", "batchId"], e
            }();
            function createMutationQueue(e) {
                e.createObjectStore(DbMutationQueue.store, {
                    keyPath: DbMutationQueue.keyPath
                }), e.createObjectStore(DbMutationBatch.store, {
                    keyPath: DbMutationBatch.keyPath,
                    autoIncrement: !0
                }).createIndex(DbMutationBatch.userMutationsIndex, DbMutationBatch.userMutationsKeyPath, {
                    unique: !0
                }), e.createObjectStore(DbDocumentMutation.store)
            }
            function upgradeMutationBatchSchemaAndMigrateData(e, t) {
                return t.store(DbMutationBatch.store).loadAll().next(function(n) {
                    e.deleteObjectStore(DbMutationBatch.store), e.createObjectStore(DbMutationBatch.store, {
                        keyPath: DbMutationBatch.keyPath,
                        autoIncrement: !0
                    }).createIndex(DbMutationBatch.userMutationsIndex, DbMutationBatch.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = t.store(DbMutationBatch.store), i = n.map(function(e) {
                        return r.put(e)
                    });
                    return PersistencePromise.waitFor(i)
                })
            }
            var DbDocumentMutation = function() {
                function e() {}
                return e.prefixForUser = function(e) {
                    return [e]
                }, e.prefixForPath = function(e, t) {
                    return [e, encode(t)]
                }, e.key = function(e, t, n) {
                    return [e, encode(t), n]
                }, e.store = "documentMutations", e.PLACEHOLDER = new e, e
            }();
            function createRemoteDocumentCache(e) {
                e.createObjectStore(DbRemoteDocument.store)
            }
            var DbNoDocument = function() {
                return function(e, t) {
                    this.path = e, this.readTime = t
                }
            }(), DbRemoteDocument = function() {
                function e(e, t) {
                    this.noDocument = e, this.document = t
                }
                return e.store = "remoteDocuments", e
            }(), DbTarget = function() {
                function e(e, t, n, r, i, o) {
                    this.targetId = e, this.canonicalId = t, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.query = o
                }
                return e.store = "targets", e.keyPath = "targetId", e.queryTargetsIndexName = "queryTargetsIndex", e.queryTargetsKeyPath = ["canonicalId", "targetId"], e
            }(), DbTargetDocument = function() {
                function e(e, t) {
                    this.targetId = e, this.path = t
                }
                return e.store = "targetDocuments", e.keyPath = ["targetId", "path"], e.documentTargetsIndex = "documentTargetsIndex", e.documentTargetsKeyPath = ["path", "targetId"], e
            }(), DbTargetGlobal = function() {
                function e(e, t, n, r) {
                    this.highestTargetId = e, this.highestListenSequenceNumber = t, this.lastRemoteSnapshotVersion = n, this.targetCount = r
                }
                return e.key = "targetGlobalKey", e.store = "targetGlobal", e
            }();
            function createQueryCache(e) {
                e.createObjectStore(DbTargetDocument.store, {
                    keyPath: DbTargetDocument.keyPath
                }).createIndex(DbTargetDocument.documentTargetsIndex, DbTargetDocument.documentTargetsKeyPath, {
                    unique: !0
                }), e.createObjectStore(DbTarget.store, {
                    keyPath: DbTarget.keyPath
                }).createIndex(DbTarget.queryTargetsIndexName, DbTarget.queryTargetsKeyPath, {
                    unique: !0
                }), e.createObjectStore(DbTargetGlobal.store)
            }
            function dropQueryCache(e) {
                e.deleteObjectStore(DbTargetDocument.store), e.deleteObjectStore(DbTarget.store), e.deleteObjectStore(DbTargetGlobal.store)
            }
            function writeEmptyTargetGlobalEntry(e) {
                var t = e.store(DbTargetGlobal.store), n = new DbTargetGlobal(0, 0, SnapshotVersion.MIN.toTimestamp(), 0);
                return t.put(DbTargetGlobal.key, n)
            }
            var DbRemoteDocumentChanges = function() {
                function e(e) {
                    this.changes = e
                }
                return e.store = "remoteDocumentChanges", e.keyPath = "id", e
            }();
            function createRemoteDocumentChangesStore(e) {
                e.createObjectStore(DbRemoteDocumentChanges.store, {
                    keyPath: "id",
                    autoIncrement: !0
                })
            }
            var DbClientMetadata = function() {
                function e(e, t, n, r, i) {
                    this.clientId = e, this.updateTimeMs = t, this.networkEnabled = n, this.inForeground = r, this.lastProcessedDocumentChangeId = i
                }
                return e.store = "clientMetadata", e.keyPath = "clientId", e
            }();
            function createClientMetadataStore(e) {
                e.createObjectStore(DbClientMetadata.store, {
                    keyPath: DbClientMetadata.keyPath
                })
            }
            var V1_STORES = [DbMutationQueue.store, DbMutationBatch.store, DbDocumentMutation.store, DbRemoteDocument.store, DbTarget.store, DbPrimaryClient.store, DbTargetGlobal.store, DbTargetDocument.store], V3_STORES = V1_STORES, V4_STORES = V3_STORES.concat([DbClientMetadata.store, DbRemoteDocumentChanges.store]), ALL_STORES = V4_STORES, IndexedDbMutationQueue = function() {
                function e(e, t) {
                    this.userId = e, this.serializer = t, this.documentKeysByBatchId = {}, this.garbageCollector = null
                }
                return e.forUser = function(t, n) {
                    return assert("" !== t.uid, "UserID must not be an empty string."), new e(t.isAuthenticated() ? t.uid : "", n)
                }, e.prototype.start = function(e) {
                    return PersistencePromise.resolve()
                }, e.prototype.checkEmpty = function(e) {
                    var t=!0, n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                    return mutationsStore(e).iterate({
                        index: DbMutationBatch.userMutationsIndex,
                        range: n
                    }, function(e, n, r) {
                        t=!1, r.done()
                    }).next(function() {
                        return t
                    })
                }, e.prototype.getHighestAcknowledgedBatchId = function(e) {
                    return this.getMutationQueueMetadata(e).next(function(e) {
                        return e.lastAcknowledgedBatchId
                    })
                }, e.prototype.acknowledgeBatch = function(e, t, n) {
                    return this.getMutationQueueMetadata(e).next(function(r) {
                        var i = t.batchId;
                        return assert(i > r.lastAcknowledgedBatchId, "Mutation batchIDs must be acknowledged in order"), r.lastAcknowledgedBatchId = i, r.lastStreamToken = convertStreamToken(n), mutationQueuesStore(e).put(r)
                    })
                }, e.prototype.getLastStreamToken = function(e) {
                    return this.getMutationQueueMetadata(e).next(function(e) {
                        return e.lastStreamToken
                    })
                }, e.prototype.setLastStreamToken = function(e, t) {
                    return this.getMutationQueueMetadata(e).next(function(n) {
                        return n.lastStreamToken = convertStreamToken(t), mutationQueuesStore(e).put(n)
                    })
                }, e.prototype.addMutationBatch = function(e, t, n) {
                    var r = this, i = documentMutationsStore(e), o = mutationsStore(e);
                    return o.add({}).next(function(e) {
                        assert("number" == typeof e, "Auto-generated key is not a number");
                        var a = new MutationBatch(e, t, n), s = r.serializer.toDbMutationBatch(r.userId, a);
                        r.documentKeysByBatchId[e] = a.keys();
                        for (var u = [], c = 0, h = n; c < h.length; c++) {
                            var l = h[c], d = DbDocumentMutation.key(r.userId, l.key.path, e);
                            u.push(o.put(s)), u.push(i.put(d, DbDocumentMutation.PLACEHOLDER))
                        }
                        return PersistencePromise.waitFor(u).next(function() {
                            return a
                        })
                    })
                }, e.prototype.lookupMutationBatch = function(e, t) {
                    var n = this;
                    return mutationsStore(e).get(t).next(function(e) {
                        return e ? (assert(e.userId === n.userId, "Unexpected user '" + e.userId + "' for mutation batch " + t), n.serializer.fromDbMutationBatch(e)) : null
                    })
                }, e.prototype.lookupMutationKeys = function(e, t) {
                    var n = this;
                    return this.documentKeysByBatchId[t] ? PersistencePromise.resolve(this.documentKeysByBatchId[t]) : this.lookupMutationBatch(e, t).next(function(e) {
                        if (e) {
                            var r = e.keys();
                            return n.documentKeysByBatchId[t] = r, r
                        }
                        return null
                    })
                }, e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
                    var n = this;
                    return this.getMutationQueueMetadata(e).next(function(r) {
                        var i = Math.max(t, r.lastAcknowledgedBatchId) + 1, o = IDBKeyRange.lowerBound([n.userId, i]), a = null;
                        return mutationsStore(e).iterate({
                            index: DbMutationBatch.userMutationsIndex,
                            range: o
                        }, function(e, t, r) {
                            t.userId === n.userId && (assert(t.batchId >= i, "Should have found mutation after " + i), a = n.serializer.fromDbMutationBatch(t)), r.done()
                        }).next(function() {
                            return a
                        })
                    })
                }, e.prototype.getAllMutationBatches = function(e) {
                    return this.getAllMutationBatchesThroughBatchId(e, Number.POSITIVE_INFINITY)
                }, e.prototype.getAllMutationBatchesThroughBatchId = function(e, t) {
                    var n = this, r = IDBKeyRange.bound([this.userId, BATCHID_UNKNOWN], [this.userId, t]);
                    return mutationsStore(e).loadAll(DbMutationBatch.userMutationsIndex, r).next(function(e) {
                        return e.map(function(e) {
                            return n.serializer.fromDbMutationBatch(e)
                        })
                    })
                }, e.prototype.getAllMutationBatchesAffectingDocumentKey = function(e, t) {
                    var n = this, r = DbDocumentMutation.prefixForPath(this.userId, t.path), i = IDBKeyRange.lowerBound(r), o = [];
                    return documentMutationsStore(e).iterate({
                        range: i
                    }, function(r, i, a) {
                        var s = r[0], u = r[1], c = r[2], h = decode$1(u);
                        if (s === n.userId && t.path.isEqual(h))
                            return mutationsStore(e).get(c).next(function(e) {
                                e || fail("Dangling document-mutation reference found: " + r + " which points to " + c), assert(e.userId === n.userId, "Unexpected user '" + e.userId + "' for mutation batch " + c), o.push(n.serializer.fromDbMutationBatch(e))
                            });
                        a.done()
                    }).next(function() {
                        return o
                    })
                }, e.prototype.getAllMutationBatchesAffectingDocumentKeys = function(e, t) {
                    var n = this, r = new SortedSet(primitiveComparator), i = [];
                    return t.forEach(function(t) {
                        var o = DbDocumentMutation.prefixForPath(n.userId, t.path), a = IDBKeyRange.lowerBound(o), s = documentMutationsStore(e).iterate({
                            range: a
                        }, function(e, i, o) {
                            var a = e[0], s = e[1], u = e[2], c = decode$1(s);
                            a === n.userId && t.path.isEqual(c) ? r = r.add(u) : o.done()
                        });
                        i.push(s)
                    }), PersistencePromise.waitFor(i).next(function() {
                        return n.lookupMutationBatches(e, r)
                    })
                }, e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
                    var n = this;
                    assert(!t.isDocumentQuery(), "Document queries shouldn't go down this path");
                    var r = t.path, i = r.length + 1, o = DbDocumentMutation.prefixForPath(this.userId, r), a = IDBKeyRange.lowerBound(o), s = new SortedSet(primitiveComparator);
                    return documentMutationsStore(e).iterate({
                        range: a
                    }, function(e, t, o) {
                        var a = e[0], u = e[1], c = e[2], h = decode$1(u);
                        a === n.userId && r.isPrefixOf(h) ? h.length === i && (s = s.add(c)) : o.done()
                    }).next(function() {
                        return n.lookupMutationBatches(e, s)
                    })
                }, e.prototype.lookupMutationBatches = function(e, t) {
                    var n = this, r = [], i = [];
                    return t.forEach(function(t) {
                        i.push(mutationsStore(e).get(t).next(function(e) {
                            null === e && fail("Dangling document-mutation reference found, which points to " + t), assert(e.userId === n.userId, "Unexpected user '" + e.userId + "' for mutation batch " + t), r.push(n.serializer.fromDbMutationBatch(e))
                        }))
                    }), PersistencePromise.waitFor(i).next(function() {
                        return r
                    })
                }, e.prototype.removeMutationBatch = function(e, t) {
                    var n = mutationsStore(e), r = documentMutationsStore(e), i = [], o = IDBKeyRange.only(t.batchId), a = 0, s = n.iterate({
                        range: o
                    }, function(e, t, n) {
                        return a++, n.delete()
                    });
                    i.push(s.next(function() {
                        assert(1 === a, "Dangling document-mutation reference found: Missing batch " + t.batchId)
                    }));
                    for (var u = 0, c = t.mutations; u < c.length; u++) {
                        var h = c[u], l = DbDocumentMutation.key(this.userId, h.key.path, t.batchId);
                        i.push(r.delete(l)), null !== this.garbageCollector && this.garbageCollector.addPotentialGarbageKey(h.key)
                    }
                    return this.removeCachedMutationKeys(t.batchId), PersistencePromise.waitFor(i)
                }, e.prototype.removeCachedMutationKeys = function(e) {
                    delete this.documentKeysByBatchId[e]
                }, e.prototype.performConsistencyCheck = function(e) {
                    var t = this;
                    return this.checkEmpty(e).next(function(n) {
                        if (!n)
                            return PersistencePromise.resolve();
                        var r = IDBKeyRange.lowerBound(DbDocumentMutation.prefixForUser(t.userId)), i = [];
                        return documentMutationsStore(e).iterate({
                            range: r
                        }, function(e, n, r) {
                            if (e[0] === t.userId) {
                                var o = decode$1(e[1]);
                                i.push(o)
                            } else 
                                r.done()
                        }).next(function() {
                            assert(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(e) {
                                return e.canonicalString()
                            }))
                        })
                    })
                }, e.prototype.setGarbageCollector = function(e) {
                    this.garbageCollector = e
                }, e.prototype.containsKey = function(e, t) {
                    var n = this, r = DbDocumentMutation.prefixForPath(this.userId, t.path), i = r[1], o = IDBKeyRange.lowerBound(r), a=!1;
                    return documentMutationsStore(e).iterate({
                        range: o,
                        keysOnly: !0
                    }, function(e, t, r) {
                        var o = e[0], s = e[1];
                        e[2];
                        o === n.userId && s === i && (a=!0), r.done()
                    }).next(function() {
                        return a
                    })
                }, e.prototype.getMutationQueueMetadata = function(e) {
                    var t = this;
                    return mutationQueuesStore(e).get(this.userId).next(function(e) {
                        return e || new DbMutationQueue(t.userId, BATCHID_UNKNOWN, "")
                    })
                }, e
            }();
            function convertStreamToken(e) {
                return e instanceof Uint8Array ? (assert("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence."), e.toString()) : e
            }
            function mutationsStore(e) {
                return IndexedDbPersistence.getStore(e, DbMutationBatch.store)
            }
            function documentMutationsStore(e) {
                return IndexedDbPersistence.getStore(e, DbDocumentMutation.store)
            }
            function mutationQueuesStore(e) {
                return IndexedDbPersistence.getStore(e, DbMutationQueue.store)
            }
            var IndexedDbQueryCache = function() {
                function e(e) {
                    this.serializer = e, this.garbageCollector = null, this.targetIdGenerator = TargetIdGenerator.forQueryCache()
                }
                return e.prototype.allocateTargetId = function(e) {
                    var t = this;
                    return this.retrieveMetadata(e).next(function(n) {
                        return n.highestTargetId = t.targetIdGenerator.after(n.highestTargetId), t.saveMetadata(e, n).next(function() {
                            return n.highestTargetId
                        })
                    })
                }, e.prototype.getLastRemoteSnapshotVersion = function(e) {
                    return this.retrieveMetadata(e).next(function(e) {
                        return SnapshotVersion.fromTimestamp(new Timestamp(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds))
                    })
                }, e.prototype.setTargetsMetadata = function(e, t, n) {
                    var r = this;
                    return this.retrieveMetadata(e).next(function(i) {
                        return i.highestListenSequenceNumber = t, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), r.saveMetadata(e, i)
                    })
                }, e.prototype.addQueryData = function(e, t) {
                    var n = this;
                    return this.saveQueryData(e, t).next(function() {
                        return n.retrieveMetadata(e).next(function(r) {
                            return r.targetCount += 1, n.updateMetadataFromQueryData(t, r), n.saveMetadata(e, r)
                        })
                    })
                }, e.prototype.updateQueryData = function(e, t) {
                    return this.saveQueryData(e, t)
                }, e.prototype.removeQueryData = function(e, t) {
                    var n = this;
                    return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() {
                        return targetsStore(e).delete(t.targetId)
                    }).next(function() {
                        return n.retrieveMetadata(e)
                    }).next(function(t) {
                        return assert(t.targetCount > 0, "Removing from an empty query cache"), t.targetCount -= 1, n.saveMetadata(e, t)
                    })
                }, e.prototype.retrieveMetadata = function(e) {
                    return globalTargetStore(e).get(DbTargetGlobal.key).next(function(e) {
                        return assert(null !== e, "Missing metadata row."), e
                    })
                }, e.prototype.saveMetadata = function(e, t) {
                    return globalTargetStore(e).put(DbTargetGlobal.key, t)
                }, e.prototype.saveQueryData = function(e, t) {
                    return targetsStore(e).put(this.serializer.toDbTarget(t))
                }, e.prototype.updateMetadataFromQueryData = function(e, t) {
                    return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId, !0)
                }, e.prototype.getQueryCount = function(e) {
                    return this.retrieveMetadata(e).next(function(e) {
                        return e.targetCount
                    })
                }, e.prototype.getQueryData = function(e, t) {
                    var n = this, r = t.canonicalId(), i = IDBKeyRange.bound([r, Number.NEGATIVE_INFINITY], [r, Number.POSITIVE_INFINITY]), o = null;
                    return targetsStore(e).iterate({
                        range: i,
                        index: DbTarget.queryTargetsIndexName
                    }, function(e, r, i) {
                        var a = n.serializer.fromDbTarget(r);
                        t.isEqual(a.query) && (o = a, i.done())
                    }).next(function() {
                        return o
                    })
                }, e.prototype.addMatchingKeys = function(e, t, n) {
                    var r = [], i = documentTargetStore(e);
                    return t.forEach(function(e) {
                        var t = encode(e.path);
                        r.push(i.put(new DbTargetDocument(n, t)))
                    }), PersistencePromise.waitFor(r)
                }, e.prototype.removeMatchingKeys = function(e, t, n) {
                    var r = this, i = [], o = documentTargetStore(e);
                    return t.forEach(function(e) {
                        var t = encode(e.path);
                        i.push(o.delete([n, t])), null !== r.garbageCollector && r.garbageCollector.addPotentialGarbageKey(e)
                    }), PersistencePromise.waitFor(i)
                }, e.prototype.removeMatchingKeysForTargetId = function(e, t) {
                    var n = documentTargetStore(e), r = IDBKeyRange.bound([t], [t + 1], !1, !0);
                    return this.notifyGCForRemovedKeys(e, r).next(function() {
                        return n.delete(r)
                    })
                }, e.prototype.notifyGCForRemovedKeys = function(e, t) {
                    var n = this, r = documentTargetStore(e);
                    return null !== this.garbageCollector && this.garbageCollector.isEager ? r.iterate({
                        range: t,
                        keysOnly: !0
                    }, function(e, t, r) {
                        var i = decode$1(e[1]), o = new DocumentKey(i);
                        assert(null !== n.garbageCollector, "GarbageCollector for query cache set to null during key removal."), n.garbageCollector.addPotentialGarbageKey(o)
                    }) : PersistencePromise.resolve()
                }, e.prototype.getMatchingKeysForTargetId = function(e, t) {
                    var n = IDBKeyRange.bound([t], [t + 1], !1, !0), r = documentTargetStore(e), i = documentKeySet();
                    return r.iterate({
                        range: n,
                        keysOnly: !0
                    }, function(e, t, n) {
                        var r = decode$1(e[1]), o = new DocumentKey(r);
                        i = i.add(o)
                    }).next(function() {
                        return i
                    })
                }, e.prototype.setGarbageCollector = function(e) {
                    this.garbageCollector = e
                }, e.prototype.containsKey = function(e, t) {
                    assert(null !== e, "Persistence Transaction cannot be null for query cache containsKey");
                    var n = encode(t.path), r = IDBKeyRange.bound([n], [immediateSuccessor(n)], !1, !0), i = 0;
                    return documentTargetStore(e).iterate({
                        index: DbTargetDocument.documentTargetsIndex,
                        keysOnly: !0,
                        range: r
                    }, function(e, t, n) {
                        i++, n.done()
                    }).next(function() {
                        return i > 0
                    })
                }, e.prototype.getQueryDataForTarget = function(e, t) {
                    var n = this;
                    return targetsStore(e).get(t).next(function(e) {
                        return e ? n.serializer.fromDbTarget(e) : null
                    })
                }, e
            }();
            function targetsStore(e) {
                return IndexedDbPersistence.getStore(e, DbTarget.store)
            }
            function globalTargetStore(e) {
                return IndexedDbPersistence.getStore(e, DbTargetGlobal.store)
            }
            function documentTargetStore(e) {
                return IndexedDbPersistence.getStore(e, DbTargetDocument.store)
            }
            var Deferred$1 = function() {
                return function() {
                    var e = this;
                    this.promise = new Promise(function(t, n) {
                        e.resolve = t, e.reject = n
                    })
                }
            }(), LOG_TAG$1 = "SimpleDb", SimpleDb = function() {
                function e(e) {
                    this.db = e
                }
                return e.openOrCreate = function(t, n, r) {
                    return assert(e.isAvailable(), "IndexedDB not supported in current environment."), debug(LOG_TAG$1, "Opening database:", t), new PersistencePromise(function(i, o) {
                        var a = window.indexedDB.open(t, n);
                        a.onsuccess = function(t) {
                            var n = t.target.result;
                            i(new e(n))
                        }, a.onblocked = function() {
                            o(new FirestoreError(Code.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                        }, a.onerror = function(e) {
                            o(e.target.error)
                        }, a.onupgradeneeded = function(e) {
                            debug(LOG_TAG$1, 'Database "' + t + '" requires upgrade from version:', e.oldVersion);
                            var n = e.target.result, i = new SimpleDbTransaction(a.transaction);
                            r.createOrUpgrade(n, i, e.oldVersion, SCHEMA_VERSION).next(function() {
                                debug(LOG_TAG$1, "Database upgrade to version " + SCHEMA_VERSION + " complete")
                            })
                        }
                    }).toPromise()
                }, e.delete = function(e) {
                    return debug(LOG_TAG$1, "Removing database:", e), wrapRequest(window.indexedDB.deleteDatabase(e)).toPromise()
                }, e.isAvailable = function() {
                    if ("undefined" == typeof window || null == window.indexedDB)
                        return !1;
                    if (void 0 === window.navigator)
                        return "YES" === process.env.USE_MOCK_PERSISTENCE;
                    var e = window.navigator.userAgent;
                    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0)
                }, e.getStore = function(e, t) {
                    return e.store(t)
                }, e.prototype.runTransaction = function(e, t, n) {
                    var r = SimpleDbTransaction.open(this.db, e, t), i = n(r).catch(function(e) {
                        r.abort(e)
                    }).toPromise();
                    return r.completionPromise.then(function() {
                        return i
                    })
                }, e.prototype.close = function() {
                    this.db.close()
                }, e
            }(), IterationController = function() {
                function e(e) {
                    this.dbCursor = e, this.shouldStop=!1, this.nextKey = null
                }
                return Object.defineProperty(e.prototype, "isDone", {
                    get: function() {
                        return this.shouldStop
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "skipToKey", {
                    get: function() {
                        return this.nextKey
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "cursor", {
                    set: function(e) {
                        this.dbCursor = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.done = function() {
                    this.shouldStop=!0
                }, e.prototype.skip = function(e) {
                    this.nextKey = e
                }, e.prototype.delete = function() {
                    return wrapRequest(this.dbCursor.delete())
                }, e
            }(), SimpleDbTransaction = function() {
                function e(e) {
                    var t = this;
                    this.transaction = e, this.aborted=!1, this.completionDeferred = new Deferred$1, this.transaction.oncomplete = function() {
                        t.completionDeferred.resolve()
                    }, this.transaction.onabort = function() {
                        e.error ? t.completionDeferred.reject(e.error) : t.completionDeferred.resolve()
                    }, this.transaction.onerror = function(e) {
                        t.completionDeferred.reject(e.target.error)
                    }
                }
                return e.open = function(t, n, r) {
                    return new e(t.transaction(r, n))
                }, Object.defineProperty(e.prototype, "completionPromise", {
                    get: function() {
                        return this.completionDeferred.promise
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.abort = function(e) {
                    e && this.completionDeferred.reject(e), this.aborted || (debug(LOG_TAG$1, "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted=!0, this.transaction.abort())
                }, e.prototype.store = function(e) {
                    var t = this.transaction.objectStore(e);
                    return assert(!!t, "Object store not part of transaction: " + e), new SimpleDbStore(t)
                }, e
            }(), SimpleDbStore = function() {
                function e(e) {
                    this.store = e
                }
                return e.prototype.put = function(e, t) {
                    var n;
                    return void 0 !== t ? (debug(LOG_TAG$1, "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (debug(LOG_TAG$1, "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), wrapRequest(n)
                }, e.prototype.add = function(e) {
                    return debug(LOG_TAG$1, "ADD", this.store.name, e, e), wrapRequest(this.store.add(e))
                }, e.prototype.get = function(e) {
                    var t = this;
                    return wrapRequest(this.store.get(e)).next(function(n) {
                        return void 0 === n && (n = null), debug(LOG_TAG$1, "GET", t.store.name, e, n), n
                    })
                }, e.prototype.delete = function(e) {
                    return debug(LOG_TAG$1, "DELETE", this.store.name, e), wrapRequest(this.store.delete(e))
                }, e.prototype.count = function() {
                    return debug(LOG_TAG$1, "COUNT", this.store.name), wrapRequest(this.store.count())
                }, e.prototype.loadAll = function(e, t) {
                    var n = this.cursor(this.options(e, t)), r = [];
                    return this.iterateCursor(n, function(e, t) {
                        r.push(t)
                    }).next(function() {
                        return r
                    })
                }, e.prototype.deleteAll = function(e, t) {
                    debug(LOG_TAG$1, "DELETE ALL", this.store.name);
                    var n = this.options(e, t);
                    n.keysOnly=!1;
                    var r = this.cursor(n);
                    return this.iterateCursor(r, function(e, t, n) {
                        return n.delete()
                    })
                }, e.prototype.iterate = function(e, t) {
                    var n;
                    t ? n = e : (n = {}, t = e);
                    var r = this.cursor(n);
                    return this.iterateCursor(r, t)
                }, e.prototype.iterateCursor = function(e, t) {
                    var n = [];
                    return new PersistencePromise(function(r, i) {
                        e.onerror = function(e) {
                            i(e.target.error)
                        }, e.onsuccess = function(e) {
                            var i = e.target.result;
                            if (i) {
                                var o = new IterationController(i), a = t(i.primaryKey, i.value, o);
                                a instanceof PersistencePromise && n.push(a), o.isDone ? r() : null === o.skipToKey ? i.continue() : i.continue(o.skipToKey)
                            } else 
                                r()
                        }
                    }).next(function() {
                        return PersistencePromise.waitFor(n)
                    })
                }, e.prototype.options = function(e, t) {
                    var n = void 0;
                    return void 0 !== e && ("string" == typeof e ? n = e : (assert(void 0 === t, "3rd argument must not be defined if 2nd is a range."), t = e)), {
                        index: n,
                        range: t
                    }
                }, e.prototype.cursor = function(e) {
                    var t = "next";
                    if (e.reverse && (t = "prev"), e.index) {
                        var n = this.store.index(e.index);
                        return e.keysOnly ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t)
                    }
                    return this.store.openCursor(e.range, t)
                }, e
            }();
            function wrapRequest(e) {
                return new PersistencePromise(function(t, n) {
                    e.onsuccess = function(e) {
                        var n = e.target.result;
                        t(n)
                    }, e.onerror = function(e) {
                        n(e.target.error)
                    }
                })
            }
            var IndexedDbRemoteDocumentCache = function() {
                function e(e, t) {
                    this.serializer = e, this.keepDocumentChangeLog = t, this._lastProcessedDocumentChangeId = 0
                }
                return Object.defineProperty(e.prototype, "lastProcessedDocumentChangeId", {
                    get: function() {
                        return this._lastProcessedDocumentChangeId
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.start = function(e) {
                    var t = this;
                    return this._lastProcessedDocumentChangeId = 0, SimpleDb.getStore(e, DbRemoteDocumentChanges.store).iterate({
                        keysOnly: !0,
                        reverse: !0
                    }, function(e, n, r) {
                        t._lastProcessedDocumentChangeId = e, r.done()
                    })
                }, e.prototype.addEntries = function(e, t) {
                    var n = [];
                    if (t.length > 0) {
                        for (var r = remoteDocumentsStore(e), i = documentKeySet(), o = 0, a = t; o < a.length; o++) {
                            var s = a[o];
                            n.push(r.put(dbKey(s.key), this.serializer.toDbRemoteDocument(s))), i = i.add(s.key)
                        }
                        this.keepDocumentChangeLog && n.push(documentChangesStore(e).put({
                            changes: this.serializer.toDbResourcePaths(i)
                        }))
                    }
                    return PersistencePromise.waitFor(n)
                }, e.prototype.removeEntry = function(e, t) {
                    return remoteDocumentsStore(e).delete(dbKey(t))
                }, e.prototype.getEntry = function(e, t) {
                    var n = this;
                    return remoteDocumentsStore(e).get(dbKey(t)).next(function(e) {
                        return e ? n.serializer.fromDbRemoteDocument(e) : null
                    })
                }, e.prototype.getDocumentsMatchingQuery = function(e, t) {
                    var n = this, r = documentMap(), i = t.path.toArray(), o = IDBKeyRange.lowerBound(i);
                    return remoteDocumentsStore(e).iterate({
                        range: o
                    }, function(e, i, o) {
                        var a = n.serializer.fromDbRemoteDocument(i);
                        t.path.isPrefixOf(a.key.path) ? a instanceof Document && t.matches(a) && (r = r.insert(a.key, a)) : o.done()
                    }).next(function() {
                        return r
                    })
                }, e.prototype.getNewDocumentChanges = function(e) {
                    var t = this;
                    assert(this.keepDocumentChangeLog, "Can only call getNewDocumentChanges() when document change log is enabled");
                    var n = documentKeySet(), r = maybeDocumentMap(), i = IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId, !0);
                    return documentChangesStore(e).iterate({
                        range: i
                    }, function(e, r) {
                        n = n.unionWith(t.serializer.fromDbResourcePaths(r.changes)), t._lastProcessedDocumentChangeId = r.id
                    }).next(function() {
                        var i = [];
                        return n.forEach(function(n) {
                            i.push(t.getEntry(e, n).next(function(e) {
                                r = r.insert(n, e || new NoDocument(n, SnapshotVersion.forDeletedDoc()))
                            }))
                        }), PersistencePromise.waitFor(i)
                    }).next(function() {
                        return r
                    })
                }, e.prototype.removeDocumentChangesThroughChangeId = function(e, t) {
                    var n = IDBKeyRange.upperBound(t);
                    return documentChangesStore(e).delete(n)
                }, e
            }();
            function remoteDocumentsStore(e) {
                return IndexedDbPersistence.getStore(e, DbRemoteDocument.store)
            }
            function documentChangesStore(e) {
                return IndexedDbPersistence.getStore(e, DbRemoteDocumentChanges.store)
            }
            function dbKey(e) {
                return e.path.toArray()
            }
            var LocalSerializer = function() {
                function e(e) {
                    this.remoteSerializer = e
                }
                return e.prototype.fromDbRemoteDocument = function(e) {
                    if (e.document)
                        return this.remoteSerializer.fromDocument(e.document);
                    if (e.noDocument) {
                        var t = DocumentKey.fromSegments(e.noDocument.path), n = e.noDocument.readTime, r = new Timestamp(n.seconds, n.nanoseconds);
                        return new NoDocument(t, SnapshotVersion.fromTimestamp(r))
                    }
                    return fail("Unexpected DbRemoteDocument")
                }, e.prototype.toDbRemoteDocument = function(e) {
                    if (e instanceof Document) {
                        var t = this.remoteSerializer.toDocument(e);
                        return new DbRemoteDocument(null, t)
                    }
                    var n = e.key.path.toArray(), r = e.version.toTimestamp(), i = new DbTimestamp(r.seconds, r.nanoseconds);
                    return new DbRemoteDocument(new DbNoDocument(n, i), null)
                }, e.prototype.toDbMutationBatch = function(e, t) {
                    var n = this, r = t.mutations.map(function(e) {
                        return n.remoteSerializer.toMutation(e)
                    });
                    return new DbMutationBatch(e, t.batchId, t.localWriteTime.toMillis(), r)
                }, e.prototype.fromDbMutationBatch = function(e) {
                    var t = this, n = e.mutations.map(function(e) {
                        return t.remoteSerializer.fromMutation(e)
                    }), r = Timestamp.fromMillis(e.localWriteTimeMs);
                    return new MutationBatch(e.batchId, r, n)
                }, e.prototype.toDbResourcePaths = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        t.push(encode(e.path))
                    }), t
                }, e.prototype.fromDbResourcePaths = function(e) {
                    for (var t = documentKeySet(), n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t = t.add(new DocumentKey(decode$1(i)))
                    }
                    return t
                }, e.prototype.fromDbTarget = function(e) {
                    var t, n = new Timestamp(e.readTime.seconds, e.readTime.nanoseconds), r = SnapshotVersion.fromTimestamp(n);
                    return t = isDocumentQuery(e.query) ? this.remoteSerializer.fromDocumentsTarget(e.query) : this.remoteSerializer.fromQueryTarget(e.query), new QueryData(t, e.targetId, QueryPurpose.Listen, r, e.resumeToken)
                }, e.prototype.toDbTarget = function(e) {
                    assert(QueryPurpose.Listen === e.purpose, "Only queries with purpose " + QueryPurpose.Listen + " may be stored, got " + e.purpose);
                    var t, n, r = e.snapshotVersion.toTimestamp(), i = new DbTimestamp(r.seconds, r.nanoseconds);
                    return t = e.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(e.query) : this.remoteSerializer.toQueryTarget(e.query), e.resumeToken instanceof Uint8Array ? (assert("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence ."), n = e.resumeToken.toString()) : n = e.resumeToken, new DbTarget(e.targetId, e.query.canonicalId(), i, n, 0, t)
                }, e
            }();
            function isDocumentQuery(e) {
                return void 0 !== e.documents
            }
            var PersistenceTransaction = function() {
                return function() {}
            }(), TimerId;
            !function(e) {
                e.All = "all", e.ListenStreamIdle = "listen_stream_idle", e.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", e.WriteStreamIdle = "write_stream_idle", e.WriteStreamConnectionBackoff = "write_stream_connection_backoff", e.OnlineStateTimeout = "online_state_timeout", e.ClientMetadataRefresh = "client_metadata_refresh"
            }(TimerId || (TimerId = {}));
            var DelayedOperation = function() {
                function e(e, t, n, r, i) {
                    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Deferred$1, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function(e) {})
                }
                return e.createAndSchedule = function(t, n, r, i, o) {
                    var a = new e(t, n, Date.now() + r, i, o);
                    return a.start(r), a
                }, e.prototype.start = function(e) {
                    var t = this;
                    this.timerHandle = setTimeout(function() {
                        return t.handleDelayElapsed()
                    }, e)
                }, e.prototype.skipDelay = function() {
                    return this.handleDelayElapsed()
                }, e.prototype.cancel = function(e) {
                    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(Code.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
                }, e.prototype.handleDelayElapsed = function() {
                    var e = this;
                    this.asyncQueue.enqueueAndForget(function() {
                        return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) {
                            return e.deferred.resolve(t)
                        })) : Promise.resolve()
                    })
                }, e.prototype.clearTimeout = function() {
                    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
                }, e
            }(), AsyncQueue = function() {
                function e() {
                    this.tail = Promise.resolve(), this.delayedOperations = [], this.operationInProgress=!1
                }
                return e.prototype.enqueueAndForget = function(e) {
                    this.enqueue(e)
                }, e.prototype.enqueue = function(e) {
                    var t = this;
                    this.verifyNotFailed();
                    var n = this.tail.then(function() {
                        return t.operationInProgress=!0, e().catch(function(e) {
                            t.failure = e, t.operationInProgress=!1;
                            var n = e.stack || e.message || "";
                            throw error("INTERNAL UNHANDLED ERROR: ", n), n.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() {
                                throw e
                            }, 0), e
                        }).then(function(e) {
                            return t.operationInProgress=!1, e
                        })
                    });
                    return this.tail = n, n
                }, e.prototype.enqueueAfterDelay = function(e, t, n) {
                    var r = this;
                    this.verifyNotFailed(), assert(t >= 0, "Attempted to schedule an operation with a negative delay of " + t), assert(!this.containsDelayedOperation(e), "Attempted to schedule multiple operations with timer id " + e + ".");
                    var i = DelayedOperation.createAndSchedule(this, e, t, n, function(e) {
                        return r.removeDelayedOperation(e)
                    });
                    return this.delayedOperations.push(i), i
                }, e.prototype.verifyNotFailed = function() {
                    this.failure && fail("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message))
                }, e.prototype.verifyOperationInProgress = function() {
                    assert(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.")
                }, e.prototype.drain = function() {
                    return this.enqueue(function() {
                        return Promise.resolve()
                    })
                }, e.prototype.containsDelayedOperation = function(e) {
                    return this.delayedOperations.findIndex(function(t) {
                        return t.timerId === e
                    }) >= 0
                }, e.prototype.runDelayedOperationsEarly = function(e) {
                    var t = this;
                    return this.drain().then(function() {
                        assert(e === TimerId.All || t.containsDelayedOperation(e), "Attempted to drain to missing operation " + e), t.delayedOperations.sort(function(e, t) {
                            return e.targetTimeMs - t.targetTimeMs
                        });
                        for (var n = 0, r = t.delayedOperations; n < r.length; n++) {
                            var i = r[n];
                            if (i.skipDelay(), e !== TimerId.All && i.timerId === e)
                                break
                        }
                        return t.drain()
                    })
                }, e.prototype.removeDelayedOperation = function(e) {
                    var t = this.delayedOperations.indexOf(e);
                    assert(t >= 0, "Delayed operation not found."), this.delayedOperations.splice(t, 1)
                }, e
            }(), LOG_TAG$2 = "IndexedDbPersistence", CLIENT_METADATA_MAX_AGE_MS = 5e3, CLIENT_STATE_GARBAGE_COLLECTION_THRESHOLD_MS = 18e5, CLIENT_METADATA_REFRESH_INTERVAL_MS = 4e3, PRIMARY_LEASE_LOST_ERROR_MSG = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", PRIMARY_LEASE_EXCLUSIVE_ERROR_MSG = "There is another tab open with offline persistence enabled. Only one such tab is allowed at a time. The other tab must be closed or persistence must be disabled.", UNSUPPORTED_PLATFORM_ERROR_MSG = "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.", ZOMBIED_CLIENTS_KEY_PREFIX = "firestore_zombie", IndexedDbTransaction = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.simpleDbTransaction = t, n
                }
                return __extends(t, e), t
            }(PersistenceTransaction), IndexedDbPersistence = function() {
                function e(t, n, r, i, o, a) {
                    this.persistenceKey = t, this.clientId = n, this.queue = i, this._started=!1, this.isPrimary=!1, this.networkEnabled=!0, this.inForeground=!1, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function(e) {
                        return Promise.resolve()
                    }, this.dbName = t + e.MAIN_DATABASE, this.serializer = new LocalSerializer(o), this.document = r.document, this.window = r.window, this.allowTabSynchronization = a, this.queryCache = new IndexedDbQueryCache(this.serializer), this.remoteDocumentCache = new IndexedDbRemoteDocumentCache(this.serializer, this.allowTabSynchronization)
                }
                return e.getStore = function(e, t) {
                    if (e instanceof IndexedDbTransaction)
                        return SimpleDb.getStore(e.simpleDbTransaction, t);
                    fail("IndexedDbPersistence must use instances of IndexedDbTransaction")
                }, e.prototype.start = function() {
                    var t = this;
                    return e.isAvailable() ? (assert(!this.started, "IndexedDbPersistence double-started!"), assert(null !== this.window, "Expected 'window' to be defined"), SimpleDb.openOrCreate(this.dbName, SCHEMA_VERSION, new SchemaConverter(this.serializer)).then(function(e) {
                        t.simpleDb = e
                    }).then(function() {
                        return t.startRemoteDocumentCache()
                    }).then(function() {
                        return t.attachVisibilityHandler(), t.attachWindowUnloadHook(), t.updateClientMetadataAndTryBecomePrimary().then(function() {
                            return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                        })
                    }).then(function() {
                        t._started=!0
                    })) : (this.persistenceError = new FirestoreError(Code.UNIMPLEMENTED, UNSUPPORTED_PLATFORM_ERROR_MSG), Promise.reject(this.persistenceError))
                }, e.prototype.startRemoteDocumentCache = function() {
                    var e = this;
                    return this.simpleDb.runTransaction("readonly", ALL_STORES, function(t) {
                        return e.remoteDocumentCache.start(t)
                    })
                }, e.prototype.setPrimaryStateListener = function(e) {
                    return this.primaryStateListener = e, e(this.isPrimary)
                }, e.prototype.setNetworkEnabled = function(e) {
                    var t = this;
                    this.networkEnabled !== e && (this.networkEnabled = e, this.queue.enqueueAndForget(function() {
                        return __awaiter(t, void 0, void 0, function() {
                            return __generator(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2]
                                }
                            })
                        })
                    }))
                }, e.prototype.updateClientMetadataAndTryBecomePrimary = function() {
                    var e = this;
                    return this.simpleDb.runTransaction("readwrite", ALL_STORES, function(t) {
                        return clientMetadataStore(t).put(new DbClientMetadata(e.clientId, Date.now(), e.networkEnabled, e.inForeground, e.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function() {
                            return e.canActAsPrimary(t)
                        }).next(function(n) {
                            var r = e.isPrimary;
                            return e.isPrimary = n, r !== e.isPrimary && e.queue.enqueueAndForget(function() {
                                return __awaiter(e, void 0, void 0, function() {
                                    return __generator(this, function(e) {
                                        return this.started ? [2, this.primaryStateListener(this.isPrimary)] : [2]
                                    })
                                })
                            }), r&&!e.isPrimary ? e.releasePrimaryLeaseIfHeld(t) : e.isPrimary ? e.acquireOrExtendPrimaryLease(t) : void 0
                        })
                    })
                }, e.prototype.removeClientMetadata = function(e) {
                    return clientMetadataStore(e).delete(this.clientId)
                }, e.prototype.maybeGarbageCollectMultiClientState = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return __generator(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, CLIENT_STATE_GARBAGE_COLLECTION_THRESHOLD_MS) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), [4, this.runTransaction("readwrite", !0, function(i) {
                                    var o = e.getStore(i, DbClientMetadata.store);
                                    return o.loadAll().next(function(e) {
                                        t = r.filterActiveClients(e, CLIENT_STATE_GARBAGE_COLLECTION_THRESHOLD_MS), n = e.filter(function(e) {
                                            return - 1 === t.indexOf(e)
                                        })
                                    }).next(function() {
                                        return PersistencePromise.forEach(n, function(e) {
                                            return o.delete(e.clientId)
                                        })
                                    }).next(function() {
                                        if ((t = t.filter(function(e) {
                                            return e.clientId !== r.clientId
                                        })).length > 0) {
                                            var e = t.map(function(e) {
                                                return e.lastProcessedDocumentChangeId || 0
                                            }), n = Math.min.apply(Math, e);
                                            return r.remoteDocumentCache.removeDocumentChangesThroughChangeId(i, n)
                                        }
                                    })
                                })]);
                            case 1:
                                i.sent(), n.forEach(function(e) {
                                    r.window.localStorage.removeItem(r.zombiedClientLocalStorageKey(e.clientId))
                                }), i.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function() {
                    var e = this;
                    this.clientMetadataRefresher = this.queue.enqueueAfterDelay(TimerId.ClientMetadataRefresh, CLIENT_METADATA_REFRESH_INTERVAL_MS, function() {
                        return e.updateClientMetadataAndTryBecomePrimary().then(function() {
                            return e.maybeGarbageCollectMultiClientState()
                        }).then(function() {
                            return e.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                        })
                    })
                }, e.prototype.isLocalClient = function(e) {
                    return !!e && e.ownerId === this.clientId
                }, e.prototype.canActAsPrimary = function(e) {
                    var t = this;
                    return primaryClientStore(e).get(DbPrimaryClient.key).next(function(n) {
                        if (null !== n && t.isWithinAge(n.leaseTimestampMs, CLIENT_METADATA_MAX_AGE_MS)&&!t.isClientZombied(n.ownerId)) {
                            if (t.isLocalClient(n) && t.networkEnabled)
                                return !0;
                            if (!t.isLocalClient(n)) {
                                if (!n.allowTabSynchronization)
                                    throw new FirestoreError(Code.FAILED_PRECONDITION, PRIMARY_LEASE_EXCLUSIVE_ERROR_MSG);
                                return !1
                            }
                        }
                        return !(!t.networkEnabled ||!t.inForeground) || clientMetadataStore(e).loadAll().next(function(e) {
                            return void 0 === t.filterActiveClients(e, CLIENT_METADATA_MAX_AGE_MS).find(function(e) {
                                if (t.clientId !== e.clientId) {
                                    var n=!t.networkEnabled && e.networkEnabled, r=!t.inForeground && e.inForeground, i = t.networkEnabled === e.networkEnabled;
                                    if (n || r && i)
                                        return !0
                                }
                                return !1
                            })
                        })
                    }).next(function(e) {
                        return t.isPrimary !== e && debug(LOG_TAG$2, "Client " + (e ? "is" : "is not") + " eligible for a primary lease."), e
                    })
                }, e.prototype.shutdown = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t = this;
                        return __generator(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return this._started=!1, this.markClientZombied(), this.clientMetadataRefresher && this.clientMetadataRefresher.cancel(), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite", [DbPrimaryClient.store, DbClientMetadata.store], function(e) {
                                    return t.releasePrimaryLeaseIfHeld(e).next(function() {
                                        return t.removeClientMetadata(e)
                                    })
                                })];
                            case 1:
                                return n.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), e ? [4, SimpleDb.delete(this.dbName)] : [3, 3];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.filterActiveClients = function(e, t) {
                    var n = this;
                    return e.filter(function(e) {
                        return n.isWithinAge(e.updateTimeMs, t)&&!n.isClientZombied(e.clientId)
                    })
                }, e.prototype.getActiveClients = function() {
                    var e = this;
                    return this.simpleDb.runTransaction("readonly", [DbClientMetadata.store], function(t) {
                        return clientMetadataStore(t).loadAll().next(function(t) {
                            return e.filterActiveClients(t, CLIENT_METADATA_MAX_AGE_MS).map(function(e) {
                                return e.clientId
                            })
                        })
                    })
                }, Object.defineProperty(e.prototype, "started", {
                    get: function() {
                        return this._started
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getMutationQueue = function(e) {
                    return assert(this.started, "Cannot initialize MutationQueue before persistence is started."), IndexedDbMutationQueue.forUser(e, this.serializer)
                }, e.prototype.getQueryCache = function() {
                    return assert(this.started, "Cannot initialize QueryCache before persistence is started."), this.queryCache
                }, e.prototype.getRemoteDocumentCache = function() {
                    return assert(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache
                }, e.prototype.runTransaction = function(e, t, n) {
                    var r = this;
                    return this.persistenceError ? Promise.reject(this.persistenceError) : (debug(LOG_TAG$2, "Starting transaction:", e), this.simpleDb.runTransaction("readwrite", ALL_STORES, function(i) {
                        return t ? r.canActAsPrimary(i).next(function(t) {
                            if (!t)
                                throw error("Failed to obtain primary lease for action '" + e + "'."), r.isPrimary=!1, r.queue.enqueueAndForget(function() {
                                    return r.primaryStateListener(!1)
                                }), new FirestoreError(Code.FAILED_PRECONDITION, PRIMARY_LEASE_LOST_ERROR_MSG);
                            return n(new IndexedDbTransaction(i))
                        }).next(function(e) {
                            return r.acquireOrExtendPrimaryLease(i).next(function() {
                                return e
                            })
                        }) : r.verifyAllowTabSynchronization(i).next(function() {
                            return n(new IndexedDbTransaction(i))
                        })
                    }))
                }, e.prototype.verifyAllowTabSynchronization = function(e) {
                    var t = this;
                    return primaryClientStore(e).get(DbPrimaryClient.key).next(function(e) {
                        if (null !== e && t.isWithinAge(e.leaseTimestampMs, CLIENT_METADATA_MAX_AGE_MS)&&!t.isClientZombied(e.ownerId)&&!t.isLocalClient(e)&&!e.allowTabSynchronization)
                            throw new FirestoreError(Code.FAILED_PRECONDITION, PRIMARY_LEASE_EXCLUSIVE_ERROR_MSG)
                    })
                }, e.prototype.acquireOrExtendPrimaryLease = function(e) {
                    var t = new DbPrimaryClient(this.clientId, this.allowTabSynchronization, Date.now());
                    return primaryClientStore(e).put(DbPrimaryClient.key, t)
                }, e.isAvailable = function() {
                    return SimpleDb.isAvailable()
                }, e.buildStoragePrefix = function(e) {
                    var t = e.databaseId.projectId;
                    return e.databaseId.isDefaultDatabase || (t += "." + e.databaseId.database), "firestore/" + e.persistenceKey + "/" + t + "/"
                }, e.prototype.releasePrimaryLeaseIfHeld = function(e) {
                    var t = this;
                    this.isPrimary=!1;
                    var n = primaryClientStore(e);
                    return n.get(DbPrimaryClient.key).next(function(e) {
                        return t.isLocalClient(e) ? (debug(LOG_TAG$2, "Releasing primary lease."), n.delete(DbPrimaryClient.key)) : PersistencePromise.resolve()
                    })
                }, e.prototype.isWithinAge = function(e, t) {
                    var n = Date.now();
                    return !(e < n - t) && (!(e > n) || (error("Detected an update time that is in the future: " + e + " > " + n), !1))
                }, e.prototype.attachVisibilityHandler = function() {
                    var e = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function() {
                        e.queue.enqueueAndForget(function() {
                            return e.inForeground = "visible" === e.document.visibilityState, e.updateClientMetadataAndTryBecomePrimary()
                        })
                    }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState)
                }, e.prototype.detachVisibilityHandler = function() {
                    this.documentVisibilityHandler && (assert(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null)
                }, e.prototype.attachWindowUnloadHook = function() {
                    var e = this;
                    "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function() {
                        e.markClientZombied(), e.queue.enqueueAndForget(function() {
                            return e.shutdown()
                        })
                    }, this.window.addEventListener("unload", this.windowUnloadHandler))
                }, e.prototype.detachWindowUnloadHook = function() {
                    this.windowUnloadHandler && (assert("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null)
                }, e.prototype.isClientZombied = function(e) {
                    if (void 0 === this.window.localStorage)
                        return assert("YES" === process.env.USE_MOCK_PERSISTENCE, "Operating without LocalStorage is only supported with IndexedDbShim."), null;
                    try {
                        var t = null !== this.window.localStorage.getItem(this.zombiedClientLocalStorageKey(e));
                        return debug(LOG_TAG$2, "Client '" + e + "' " + (t ? "is" : "is not") + " zombied in LocalStorage"), t
                    } catch (e) {
                        return error(LOG_TAG$2, "Failed to get zombied client id.", e), null
                    }
                }, e.prototype.markClientZombied = function() {
                    try {
                        this.window.localStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now()))
                    } catch (e) {
                        error("Failed to set zombie client id.", e)
                    }
                }, e.prototype.removeClientZombiedEntry = function() {
                    try {
                        this.window.localStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))
                    } catch (e) {}
                }, e.prototype.zombiedClientLocalStorageKey = function(e) {
                    return ZOMBIED_CLIENTS_KEY_PREFIX + "_" + this.persistenceKey + "_" + e
                }, e.MAIN_DATABASE = "main", e
            }();
            function isPrimaryLeaseLostError(e) {
                return e.code === Code.FAILED_PRECONDITION && e.message === PRIMARY_LEASE_LOST_ERROR_MSG
            }
            function primaryClientStore(e) {
                return e.store(DbPrimaryClient.store)
            }
            function clientMetadataStore(e) {
                return e.store(DbClientMetadata.store)
            }
            var LOG_TAG$3 = "SyncEngine", QueryView = function() {
                return function(e, t, n) {
                    this.query = e, this.targetId = t, this.view = n
                }
            }(), LimboResolution = function() {
                return function(e) {
                    this.key = e
                }
            }(), SyncEngine = function() {
                function e(e, t, n, r) {
                    this.localStore = e, this.remoteStore = t, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new ObjectMap(function(e) {
                        return e.canonicalId()
                    }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new SortedMap(DocumentKey.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new ReferenceSet, this.mutationUserCallbacks = {}, this.limboTargetIdGenerator = TargetIdGenerator.forSyncEngine(), this.isPrimary = void 0, this.onlineState = OnlineState.Unknown
                }
                return Object.defineProperty(e.prototype, "isPrimaryClient", {
                    get: function() {
                        return !0 === this.isPrimary
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.subscribe = function(e) {
                    assert(null !== e, "SyncEngine listener cannot be null"), assert(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = e
                }, e.prototype.listen = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n, r, i, o;
                        return __generator(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(e)) ? (t = r.targetId, this.sharedClientState.addLocalQueryTarget(t), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                            case 1:
                                return [4, this.localStore.allocateQuery(e)];
                            case 2:
                                return i = a.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), t = i.targetId, [4, this.initializeViewAndComputeSnapshot(i, "current" === o)];
                            case 3:
                                n = a.sent(), this.isPrimary && this.remoteStore.listen(i), a.label = 4;
                            case 4:
                                return this.syncEngineListener.onWatchChange([n]), [2, t]
                            }
                        })
                    })
                }, e.prototype.initializeViewAndComputeSnapshot = function(e, t) {
                    var n = this, r = e.query;
                    return this.localStore.executeQuery(r).then(function(i) {
                        return n.localStore.remoteDocumentKeys(e.targetId).then(function(o) {
                            var a = new View(r, o), s = a.computeDocChanges(i), u = TargetChange.createSynthesizedTargetChangeForCurrentChange(e.targetId, t && n.onlineState !== OnlineState.Offline), c = a.applyChanges(s, n.isPrimary, u);
                            assert(0 === c.limboChanges.length, "View returned limbo docs before target ack from the server."), assert(!!c.snapshot, "applyChanges for new view should always return a snapshot");
                            var h = new QueryView(r, e.targetId, a);
                            return n.queryViewsByQuery.set(r, h), n.queryViewsByTarget[e.targetId] = h, c.snapshot
                        })
                    })
                }, e.prototype.synchronizeViewAndComputeSnapshot = function(e) {
                    var t = this;
                    return this.localStore.executeQuery(e.query).then(function(n) {
                        return t.localStore.remoteDocumentKeys(e.targetId).then(function(r) {
                            return __awaiter(t, void 0, void 0, function() {
                                var t;
                                return __generator(this, function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return t = e.view.synchronizeWithPersistedState(n, r), this.isPrimary ? [4, this.updateTrackedLimbos(e.targetId, t.limboChanges)] : [3, 2];
                                    case 1:
                                        i.sent(), i.label = 2;
                                    case 2:
                                        return [2, t]
                                    }
                                })
                            })
                        })
                    })
                }, e.prototype.unlisten = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return __generator(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return this.assertSubscribed("unlisten()"), assert(!!(t = this.queryViewsByQuery.get(e)), "Trying to unlisten on query not found:" + e), this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(t.targetId), this.sharedClientState.isActiveQueryTarget(t.targetId) ? [3, 2] : (this.sharedClientState.clearQueryState(t.targetId), this.remoteStore.unlisten(t.targetId), [4, this.localStore.releaseQuery(e, !1).then(function() {
                                    return n.removeAndCleanupQuery(t)
                                }).then(function() {
                                    return n.localStore.collectGarbage()
                                }).catch(function(e) {
                                    return n.ignoreIfPrimaryLeaseLoss(e)
                                })])) : [3, 3];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return [3, 6];
                            case 3:
                                return [4, this.removeAndCleanupQuery(t)];
                            case 4:
                                return r.sent(), [4, this.localStore.releaseQuery(e, !0)];
                            case 5:
                                r.sent(), r.label = 6;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.write = function(e, t) {
                    var n = this;
                    return this.assertSubscribed("write()"), this.localStore.localWrite(e).then(function(e) {
                        return n.sharedClientState.addPendingMutation(e.batchId), n.addMutationCallback(e.batchId, t), n.emitNewSnapsAndNotifyLocalStore(e.changes)
                    }).then(function() {
                        return n.remoteStore.fillWritePipeline()
                    })
                }, e.prototype.wrapUpdateFunctionError = function(e) {
                    return e
                }, e.prototype.runTransaction = function(e, t) {
                    var n = this;
                    void 0 === t && (t = 5), assert(t >= 0, "Got negative number of retries for transaction.");
                    var r = this.remoteStore.createTransaction();
                    return function() {
                        try {
                            var t = e(r);
                            return !isNullOrUndefined(t) && t.catch && t.then ? t.catch(function(e) {
                                return Promise.reject(n.wrapUpdateFunctionError(e))
                            }) : Promise.reject(Error("Transaction callback must return a Promise"))
                        } catch (e) {
                            return Promise.reject(n.wrapUpdateFunctionError(e))
                        }
                    }().then(function(i) {
                        return r.commit().then(function() {
                            return i
                        }).catch(function(r) {
                            return 0 === t ? Promise.reject(r) : n.runTransaction(e, t - 1)
                        })
                    })
                }, e.prototype.applyRemoteEvent = function(e) {
                    var t = this;
                    return this.assertSubscribed("applyRemoteEvent()"), this.localStore.applyRemoteEvent(e).then(function(n) {
                        return forEach(e.targetChanges, function(e, n) {
                            var r = t.limboResolutionsByTarget[e];
                            r && (assert(n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), n.addedDocuments.size > 0 ? r.receivedDocument=!0 : n.modifiedDocuments.size > 0 ? assert(r.receivedDocument, "Received change for limbo target document without add.") : n.removedDocuments.size > 0 && (assert(r.receivedDocument, "Received remove for limbo target document without add."), r.receivedDocument=!1))
                        }), t.emitNewSnapsAndNotifyLocalStore(n, e)
                    }).catch(function(e) {
                        return t.ignoreIfPrimaryLeaseLoss(e)
                    })
                }, e.prototype.applyOnlineStateChange = function(e, t) {
                    if (this.isPrimary && t === OnlineStateSource.RemoteStore ||!this.isPrimary && t === OnlineStateSource.SharedClientState) {
                        var n = [];
                        this.queryViewsByQuery.forEach(function(t, r) {
                            var i = r.view.applyOnlineStateChange(e);
                            assert(0 === i.limboChanges.length, "OnlineState should not affect limbo documents."), i.snapshot && n.push(i.snapshot)
                        }), this.syncEngineListener.onOnlineStateChange(e), this.syncEngineListener.onWatchChange(n), this.onlineState = e, this.isPrimary && this.sharedClientState.setOnlineState(e)
                    }
                }, e.prototype.rejectListen = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var n, r, i, o, a, s, u = this;
                        return __generator(this, function(c) {
                            switch (c.label) {
                            case 0:
                                return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(e, "rejected", t), n = this.limboResolutionsByTarget[e], (r = n && n.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(r), delete this.limboResolutionsByTarget[e], i = (i = new SortedMap(DocumentKey.comparator)).insert(r, new NoDocument(r, SnapshotVersion.forDeletedDoc())), o = documentKeySet().add(r), a = new RemoteEvent(SnapshotVersion.MIN, {}, new SortedSet(primitiveComparator), i, o), [2, this.applyRemoteEvent(a)]) : [3, 1];
                            case 1:
                                return assert(!!(s = this.queryViewsByTarget[e]), "Unknown targetId: " + e), [4, this.localStore.releaseQuery(s.query, !1).then(function() {
                                    return u.removeAndCleanupQuery(s)
                                }).catch(function(e) {
                                    return u.ignoreIfPrimaryLeaseLoss(e)
                                })];
                            case 2:
                                c.sent(), this.syncEngineListener.onWatchError(s.query, t), c.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.applyBatchState = function(e, t, n) {
                    return __awaiter(this, void 0, void 0, function() {
                        var r;
                        return __generator(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(e)];
                            case 1:
                                return null === (r = i.sent()) ? (debug(LOG_TAG$3, "Cannot apply mutation batch with id: " + e), [2]) : "pending" !== t ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                            case 2:
                                return i.sent(), [3, 4];
                            case 3:
                                "acknowledged" === t || "rejected" === t ? (this.processUserCallback(e, n || null), this.localStore.removeCachedMutationBatchMetadata(e)) : fail("Unknown batchState: " + t), i.label = 4;
                            case 4:
                                return [4, this.emitNewSnapsAndNotifyLocalStore(r)];
                            case 5:
                                return i.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.applySuccessfulWrite = function(e) {
                    var t = this;
                    this.assertSubscribed("applySuccessfulWrite()");
                    var n = e.batch.batchId;
                    return this.processUserCallback(n, null), this.localStore.acknowledgeBatch(e).then(function(e) {
                        return t.emitNewSnapsAndNotifyLocalStore(e)
                    }).catch(function(e) {
                        return t.ignoreIfPrimaryLeaseLoss(e)
                    })
                }, e.prototype.rejectFailedWrite = function(e, t) {
                    var n = this;
                    return this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(e, t), this.localStore.rejectBatch(e).then(function(r) {
                        return n.sharedClientState.updateMutationState(e, "rejected", t), n.emitNewSnapsAndNotifyLocalStore(r)
                    }).catch(function(e) {
                        return n.ignoreIfPrimaryLeaseLoss(e)
                    })
                }, e.prototype.addMutationCallback = function(e, t) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    n || (n = new SortedMap(primitiveComparator)), n = n.insert(e, t), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                }, e.prototype.processUserCallback = function(e, t) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    if (n) {
                        var r = n.get(e);
                        r && (assert(e === n.minKey(), "Mutation callbacks processed out-of-order?"), t ? r.reject(t) : r.resolve(), n = n.remove(e)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }
                }, e.prototype.removeAndCleanupQuery = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return __generator(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return this.sharedClientState.removeLocalQueryTarget(e.targetId), this.queryViewsByQuery.delete(e.query), delete this.queryViewsByTarget[e.targetId], this.isPrimary ? (t = this.limboDocumentRefs.referencesForId(e.targetId), this.limboDocumentRefs.removeReferencesForId(e.targetId), [4, PersistencePromise.forEach(t.toArray(), function(e) {
                                    return n.limboDocumentRefs.containsKey(null, e).next(function(t) {
                                        t || n.removeLimboTarget(e)
                                    })
                                }).toPromise()]) : [3, 2];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.removeLimboTarget = function(e) {
                    var t = this.limboTargetsByKey.get(e);
                    null !== t && (this.remoteStore.unlisten(t), this.limboTargetsByKey = this.limboTargetsByKey.remove(e), delete this.limboResolutionsByTarget[t])
                }, e.prototype.updateTrackedLimbos = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var n, r, i, o, a, s = this;
                        return __generator(this, function(u) {
                            switch (u.label) {
                            case 0:
                                n = function(t) {
                                    return __generator(this, function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return t instanceof AddedLimboDocument ? (r.limboDocumentRefs.addReference(t.key, e), r.trackLimboChange(t), [3, 4]) : [3, 1];
                                        case 1:
                                            return t instanceof RemovedLimboDocument ? (debug(LOG_TAG$3, "Document no longer in limbo: " + t.key), r.limboDocumentRefs.removeReference(t.key, e), [4, r.limboDocumentRefs.containsKey(null, t.key).next(function(e) {
                                                e || s.removeLimboTarget(t.key)
                                            }).toPromise()]) : [3, 3];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            fail("Unknown limbo change: " + JSON.stringify(t)), n.label = 4;
                                        case 4:
                                            return [2]
                                        }
                                    })
                                }, r = this, i = 0, o = t, u.label = 1;
                            case 1:
                                return i < o.length ? (a = o[i], [5, n(a)]) : [3, 4];
                            case 2:
                                u.sent(), u.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.trackLimboChange = function(e) {
                    var t = e.key;
                    if (!this.limboTargetsByKey.get(t)) {
                        debug(LOG_TAG$3, "New document in limbo: " + t);
                        var n = this.limboTargetIdGenerator.next(), r = Query.atPath(t.path);
                        this.limboResolutionsByTarget[n] = new LimboResolution(t), this.remoteStore.listen(new QueryData(r, n, QueryPurpose.LimboResolution)), this.limboTargetsByKey = this.limboTargetsByKey.insert(t, n)
                    }
                }, e.prototype.currentLimboDocs = function() {
                    return this.limboTargetsByKey
                }, e.prototype.emitNewSnapsAndNotifyLocalStore = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var n, r, i, o = this;
                        return __generator(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return n = [], r = [], i = [], this.queryViewsByQuery.forEach(function(a, s) {
                                    i.push(Promise.resolve().then(function() {
                                        var t = s.view.computeDocChanges(e);
                                        return t.needsRefill ? o.localStore.executeQuery(s.query).then(function(e) {
                                            return s.view.computeDocChanges(e, t)
                                        }) : t
                                    }).then(function(e) {
                                        var i = t && t.targetChanges[s.targetId], a = s.view.applyChanges(e, o.isPrimary, i);
                                        return o.updateTrackedLimbos(s.targetId, a.limboChanges).then(function() {
                                            if (a.snapshot) {
                                                o.isPrimary && o.sharedClientState.updateQueryState(s.targetId, a.snapshot.fromCache ? "not-current" : "current"), n.push(a.snapshot);
                                                var e = LocalViewChanges.fromSnapshot(s.targetId, a.snapshot);
                                                r.push(e)
                                            }
                                        })
                                    }))
                                }), [4, Promise.all(i)];
                            case 1:
                                return a.sent(), this.syncEngineListener.onWatchChange(n), this.localStore.notifyLocalViewChanges(r), this.isPrimary ? [4, this.localStore.collectGarbage().catch(function(e) {
                                    return o.ignoreIfPrimaryLeaseLoss(e)
                                })] : [3, 3];
                            case 2:
                                a.sent(), a.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.ignoreIfPrimaryLeaseLoss = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(t) {
                            if (!isPrimaryLeaseLostError(e))
                                throw e;
                            return debug(LOG_TAG$3, "Unexpectedly lost primary lease"), [2]
                        })
                    })
                }, e.prototype.assertSubscribed = function(e) {
                    assert(null !== this.syncEngineListener, "Trying to call " + e + " before calling subscribe().")
                }, e.prototype.handleCredentialChange = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return __generator(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return t=!this.currentUser.isEqual(e), this.currentUser = e, t ? [4, this.localStore.handleUserChange(e)] : [3, 3];
                            case 1:
                                return n = r.sent(), this.sharedClientState.handleUserChange(e, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return [4, this.remoteStore.handleCredentialChange()];
                            case 4:
                                return r.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.applyPrimaryState = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n, r, i, o, a, s;
                        return __generator(this, function(u) {
                            switch (u.label) {
                            case 0:
                                return !0 !== e ||!0 === this.isPrimary ? [3, 3] : (this.isPrimary=!0, [4, this.remoteStore.applyPrimaryState(!0)]);
                            case 1:
                                return u.sent(), t = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(t.toArray())];
                            case 2:
                                for (i = u.sent(), n = 0, r = i; n < r.length; n++)
                                    s = r[n], this.remoteStore.listen(s);
                                return [3, 6];
                            case 3:
                                return !1 !== e ||!1 === this.isPrimary ? [3, 6] : (this.isPrimary=!1, [4, this.synchronizeQueryViewsAndRaiseSnapshots(indices(this.queryViewsByTarget))]);
                            case 4:
                                for (i = u.sent(), this.resetLimboDocuments(), o = 0, a = i; o < a.length; o++)
                                    s = a[o], this.remoteStore.unlisten(s.targetId);
                                return [4, this.remoteStore.applyPrimaryState(!1)];
                            case 5:
                                u.sent(), u.label = 6;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.resetLimboDocuments = function() {
                    var e = this;
                    forEachNumber(this.limboResolutionsByTarget, function(t) {
                        e.remoteStore.unlisten(t)
                    }), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new SortedMap(DocumentKey.comparator)
                }, e.prototype.synchronizeQueryViewsAndRaiseSnapshots = function(e) {
                    for (var t = this, n = Promise.resolve(), r = [], i = [], o = function(e) {
                        n = n.then(function() {
                            return __awaiter(t, void 0, void 0, function() {
                                var t, n, o, a;
                                return __generator(this, function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return (n = this.queryViewsByTarget[e]) ? [4, this.localStore.releaseQuery(n.query, !0)] : [3, 4];
                                    case 1:
                                        return s.sent(), [4, this.localStore.allocateQuery(n.query)];
                                    case 2:
                                        return t = s.sent(), [4, this.synchronizeViewAndComputeSnapshot(n)];
                                    case 3:
                                        return (o = s.sent()).snapshot && i.push(o.snapshot), [3, 8];
                                    case 4:
                                        return assert(this.isPrimary, "A secondary tab should never have an active query without an active view."), [4, this.localStore.getQueryForTarget(e)];
                                    case 5:
                                        return a = s.sent(), [4, this.localStore.allocateQuery(a)];
                                    case 6:
                                        return t = s.sent(), [4, this.initializeViewAndComputeSnapshot(t, !1)];
                                    case 7:
                                        s.sent(), s.label = 8;
                                    case 8:
                                        return r.push(t), [2]
                                    }
                                })
                            })
                        })
                    }, a = 0, s = e; a < s.length; a++) {
                        o(s[a])
                    }
                    return n.then(function() {
                        return t.syncEngineListener.onWatchChange(i), r
                    })
                }, e.prototype.getActiveClients = function() {
                    return this.localStore.getActiveClients()
                }, e.prototype.applyTargetState = function(e, t, n) {
                    return __awaiter(this, void 0, void 0, function() {
                        var r, i, o;
                        return __generator(this, function(a) {
                            switch (a.label) {
                            case 0:
                                if (this.isPrimary)
                                    return debug(LOG_TAG$3, "Ignoring unexpected query state notification."), [2];
                                if (!this.queryViewsByTarget[e])
                                    return [3, 7];
                                switch (t) {
                                case"current":
                                case"not-current":
                                    return [3, 1];
                                case"rejected":
                                    return [3, 3]
                                }
                                return [3, 6];
                            case 1:
                                return [4, this.localStore.getNewDocumentChanges()];
                            case 2:
                                return r = a.sent(), i = RemoteEvent.createSynthesizedRemoteEventForCurrentChange(e, "current" === t), [2, this.emitNewSnapsAndNotifyLocalStore(r, i)];
                            case 3:
                                return o = this.queryViewsByTarget[e], [4, this.removeAndCleanupQuery(o)];
                            case 4:
                                return a.sent(), [4, this.localStore.releaseQuery(o.query, !0)];
                            case 5:
                                return a.sent(), this.syncEngineListener.onWatchError(o.query, n), [3, 7];
                            case 6:
                                fail("Unexpected target state: " + t), a.label = 7;
                            case 7:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.applyActiveTargetsChange = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var n, r, i, o, a, s, u, c, h, l = this;
                        return __generator(this, function(d) {
                            switch (d.label) {
                            case 0:
                                if (!this.isPrimary)
                                    return [2];
                                n = 0, r = e, d.label = 1;
                            case 1:
                                return n < r.length ? (h = r[n], assert(!this.queryViewsByTarget[h], "Trying to add an already active target"), [4, this.localStore.getQueryForTarget(h)]) : [3, 6];
                            case 2:
                                return assert(!!(i = d.sent()), "Query data for active target " + h + " not found"), [4, this.localStore.allocateQuery(i)];
                            case 3:
                                return o = d.sent(), [4, this.initializeViewAndComputeSnapshot(o, !1)];
                            case 4:
                                d.sent(), this.remoteStore.listen(o), d.label = 5;
                            case 5:
                                return n++, [3, 1];
                            case 6:
                                a = function(e) {
                                    var t;
                                    return __generator(this, function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return (t = s.queryViewsByTarget[e]) ? (s.remoteStore.unlisten(e), [4, s.localStore.releaseQuery(t.query, !1).then(function() {
                                                return l.removeAndCleanupQuery(t)
                                            }).catch(function(e) {
                                                return l.ignoreIfPrimaryLeaseLoss(e)
                                            })]) : [3, 2];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            return [2]
                                        }
                                    })
                                }, s = this, u = 0, c = t, d.label = 7;
                            case 7:
                                return u < c.length ? (h = c[u], [5, a(h)]) : [3, 10];
                            case 8:
                                d.sent(), d.label = 9;
                            case 9:
                                return u++, [3, 7];
                            case 10:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.enableNetwork = function() {
                    return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork()
                }, e.prototype.disableNetwork = function() {
                    return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork()
                }, e.prototype.getRemoteKeysForTarget = function(e) {
                    var t = this.limboResolutionsByTarget[e];
                    return t && t.receivedDocument ? documentKeySet().add(t.key) : this.queryViewsByTarget[e] ? this.queryViewsByTarget[e].view.syncedDocuments : documentKeySet()
                }, e
            }(), EagerGarbageCollector = function() {
                function e() {
                    this.isEager=!0, this.sources = [], this.potentialGarbage = documentKeySet()
                }
                return e.prototype.addGarbageSource = function(e) {
                    this.sources.push(e), e.setGarbageCollector(this)
                }, e.prototype.removeGarbageSource = function(e) {
                    this.sources.splice(this.sources.indexOf(e), 1), e.setGarbageCollector(null)
                }, e.prototype.addPotentialGarbageKey = function(e) {
                    this.potentialGarbage = this.potentialGarbage.add(e)
                }, e.prototype.collectGarbage = function(e) {
                    var t = this, n = [], r = documentKeySet();
                    return this.potentialGarbage.forEach(function(i) {
                        var o = t.documentHasAnyReferences(e, i);
                        n.push(o.next(function(e) {
                            return e || (r = r.add(i)), PersistencePromise.resolve()
                        }))
                    }), this.potentialGarbage = documentKeySet(), PersistencePromise.waitFor(n).next(function() {
                        return r
                    })
                }, e.prototype.documentHasAnyReferences = function(e, t) {
                    var n = PersistencePromise.resolve(!1);
                    return this.sources.map(function(n) {
                        return function() {
                            return n.containsKey(e, t)
                        }
                    }).reduce(function(e, t) {
                        return e.next(function(e) {
                            return e ? PersistencePromise.resolve(!0) : t()
                        })
                    }, n)
                }, e
            }(), LocalDocumentsView = function() {
                function e(e, t) {
                    this.remoteDocumentCache = e, this.mutationQueue = t
                }
                return e.prototype.getDocument = function(e, t) {
                    var n = this;
                    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e, t).next(function(r) {
                        return n.getDocumentInternal(e, t, r)
                    })
                }, e.prototype.getDocumentInternal = function(e, t, n) {
                    return this.remoteDocumentCache.getEntry(e, t).next(function(e) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            e = i[r].applyToLocalView(t, e)
                        }
                        return e
                    })
                }, e.prototype.getDocuments = function(e, t) {
                    var n = this;
                    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next(function(r) {
                        var i = [], o = maybeDocumentMap();
                        return t.forEach(function(t) {
                            i.push(n.getDocumentInternal(e, t, r).next(function(e) {
                                e || (e = new NoDocument(t, SnapshotVersion.forDeletedDoc())), o = o.insert(t, e)
                            }))
                        }), PersistencePromise.waitFor(i).next(function() {
                            return o
                        })
                    })
                }, e.prototype.getDocumentsMatchingQuery = function(e, t) {
                    return DocumentKey.isDocumentKey(t.path) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : this.getDocumentsMatchingCollectionQuery(e, t)
                }, e.prototype.getDocumentsMatchingDocumentQuery = function(e, t) {
                    return this.getDocument(e, new DocumentKey(t)).next(function(e) {
                        var t = documentMap();
                        return e instanceof Document && (t = t.insert(e.key, e)), t
                    })
                }, e.prototype.getDocumentsMatchingCollectionQuery = function(e, t) {
                    var n, r = this;
                    return this.remoteDocumentCache.getDocumentsMatchingQuery(e, t).next(function(i) {
                        return n = i, r.mutationQueue.getAllMutationBatchesAffectingQuery(e, t)
                    }).next(function(e) {
                        for (var r = 0, i = e; r < i.length; r++)
                            for (var o = i[r], a = 0, s = o.mutations; a < s.length; a++) {
                                var u = s[a], c = u.key;
                                if (t.path.isImmediateParentOf(c.path)) {
                                    var h = n.get(c), l = u.applyToLocalView(h, h, o.localWriteTime);
                                    !l || l instanceof NoDocument ? n = n.remove(c) : l instanceof Document ? n = n.insert(c, l) : fail("Unknown MaybeDocument: " + l)
                                }
                            }
                        }).next(function() {
                        return n.forEach(function(e, r) {
                            t.matches(r) || (n = n.remove(e))
                        }), n
                    })
                }, e
            }(), RemoteDocumentChangeBuffer = function() {
                function e(e) {
                    this.remoteDocumentCache = e, this.changes = maybeDocumentMap()
                }
                return e.prototype.addEntry = function(e) {
                    var t = this.assertChanges();
                    this.changes = t.insert(e.key, e)
                }, e.prototype.getEntry = function(e, t) {
                    var n = this.assertChanges().get(t);
                    return n ? PersistencePromise.resolve(n) : this.remoteDocumentCache.getEntry(e, t)
                }, e.prototype.apply = function(e) {
                    var t = [];
                    return this.assertChanges().forEach(function(e, n) {
                        t.push(n)
                    }), this.changes = null, this.remoteDocumentCache.addEntries(e, t)
                }, e.prototype.assertChanges = function() {
                    return assert(null !== this.changes, "Changes have already been applied."), this.changes
                }, e
            }(), LOG_TAG$4 = "LocalStore", LocalStore = function() {
                function e(e, t, n, r) {
                    this.persistence = e, this.garbageCollector = n, this.sharedClientState = r, this.localViewReferences = new ReferenceSet, this.queryDataByTarget = {}, this.heldBatchResults = [], assert(e.started, "LocalStore was passed an unstarted persistence implementation"), this.mutationQueue = e.getMutationQueue(t), this.remoteDocuments = e.getRemoteDocumentCache(), this.queryCache = e.getQueryCache(), this.localDocuments = new LocalDocumentsView(this.remoteDocuments, this.mutationQueue), this.garbageCollector.addGarbageSource(this.localViewReferences), this.garbageCollector.addGarbageSource(this.queryCache), this.garbageCollector.addGarbageSource(this.mutationQueue)
                }
                return e.prototype.start = function() {
                    var e = this;
                    return this.persistence.runTransaction("Start LocalStore", !1, function(t) {
                        return e.startMutationQueue(t)
                    })
                }, e.prototype.handleUserChange = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Handle user change", !1, function(n) {
                        var r;
                        return t.mutationQueue.getAllMutationBatches(n).next(function(i) {
                            return r = i, t.garbageCollector.removeGarbageSource(t.mutationQueue), t.mutationQueue = t.persistence.getMutationQueue(e), t.garbageCollector.addGarbageSource(t.mutationQueue), t.startMutationQueue(n)
                        }).next(function() {
                            return t.localDocuments = new LocalDocumentsView(t.remoteDocuments, t.mutationQueue), t.mutationQueue.getAllMutationBatches(n)
                        }).next(function(e) {
                            for (var i = [], o = [], a = documentKeySet(), s = 0, u = r; s < u.length; s++) {
                                var c = u[s];
                                i.push(c.batchId);
                                for (var h = 0, l = c.mutations; h < l.length; h++) {
                                    var d = l[h];
                                    a = a.add(d.key)
                                }
                            }
                            for (var f = 0, p = e; f < p.length; f++) {
                                c = p[f];
                                o.push(c.batchId);
                                for (var m = 0, y = c.mutations; m < y.length; m++) {
                                    d = y[m];
                                    a = a.add(d.key)
                                }
                            }
                            return t.localDocuments.getDocuments(n, a).next(function(e) {
                                return {
                                    affectedDocuments: e,
                                    removedBatchIds: i,
                                    addedBatchIds: o
                                }
                            })
                        })
                    })
                }, e.prototype.startMutationQueue = function(e) {
                    var t = this;
                    return this.mutationQueue.start(e).next(function() {
                        return t.heldBatchResults = [], t.mutationQueue.getHighestAcknowledgedBatchId(e)
                    }).next(function(n) {
                        return n !== BATCHID_UNKNOWN ? t.mutationQueue.getAllMutationBatchesThroughBatchId(e, n) : PersistencePromise.resolve([])
                    }).next(function(n) {
                        return PersistencePromise.forEach(n, function(n) {
                            return t.mutationQueue.removeMutationBatch(e, n)
                        })
                    })
                }, e.prototype.localWrite = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Locally write mutations", !1, function(n) {
                        var r, i = Timestamp.now();
                        return t.mutationQueue.addMutationBatch(n, i, e).next(function(e) {
                            var i = (r = e).keys();
                            return t.localDocuments.getDocuments(n, i)
                        }).next(function(e) {
                            return {
                                batchId: r.batchId,
                                changes: e
                            }
                        })
                    })
                }, e.prototype.lookupMutationDocuments = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Lookup mutation documents", !1, function(n) {
                        return t.mutationQueue.lookupMutationKeys(n, e).next(function(e) {
                            return e ? t.localDocuments.getDocuments(n, e) : PersistencePromise.resolve(null)
                        })
                    })
                }, e.prototype.acknowledgeBatch = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Acknowledge batch", !0, function(n) {
                        var r;
                        return t.mutationQueue.acknowledgeBatch(n, e.batch, e.streamToken).next(function() {
                            return t.shouldHoldBatchResult(n, e.commitVersion)
                        }).next(function(i) {
                            if (i)
                                return t.heldBatchResults.push(e), r = documentKeySet(), PersistencePromise.resolve();
                            var o = new RemoteDocumentChangeBuffer(t.remoteDocuments);
                            return t.releaseBatchResults(n, [e], o).next(function(e) {
                                return r = e, o.apply(n)
                            })
                        }).next(function() {
                            return t.mutationQueue.performConsistencyCheck(n)
                        }).next(function() {
                            return t.localDocuments.getDocuments(n, r)
                        })
                    })
                }, e.prototype.rejectBatch = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Reject batch", !0, function(n) {
                        var r, i;
                        return t.mutationQueue.lookupMutationBatch(n, e).next(function(i) {
                            return assert(null != i, "Attempt to reject nonexistent batch!"), r = i, t.mutationQueue.getHighestAcknowledgedBatchId(n).next(function(t) {
                                return assert(e > t, "Acknowledged batches can't be rejected."), r
                            })
                        }).next(function() {
                            return t.removeMutationBatch(n, r)
                        }).next(function(e) {
                            return i = e, t.mutationQueue.performConsistencyCheck(n)
                        }).next(function() {
                            return t.localDocuments.getDocuments(n, i)
                        })
                    })
                }, e.prototype.getLastStreamToken = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get last stream token", !1, function(t) {
                        return e.mutationQueue.getLastStreamToken(t)
                    })
                }, e.prototype.setLastStreamToken = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Set last stream token", !0, function(n) {
                        return t.mutationQueue.setLastStreamToken(n, e)
                    })
                }, e.prototype.getLastRemoteSnapshotVersion = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get last remote snapshot version", !1, function(t) {
                        return e.queryCache.getLastRemoteSnapshotVersion(t)
                    })
                }, e.prototype.applyRemoteEvent = function(t) {
                    var n = this, r = new RemoteDocumentChangeBuffer(this.remoteDocuments);
                    return this.persistence.runTransaction("Apply remote event", !0, function(i) {
                        var o = [], a = documentKeySet();
                        forEachNumber(t.targetChanges, function(r, s) {
                            var u = n.queryDataByTarget[r];
                            if (u) {
                                s.addedDocuments.forEach(function(e) {
                                    a = a.add(e)
                                }), s.modifiedDocuments.forEach(function(e) {
                                    a = a.add(e)
                                }), o.push(n.queryCache.removeMatchingKeys(i, s.removedDocuments, r).next(function() {
                                    return n.queryCache.addMatchingKeys(i, s.addedDocuments, r)
                                }));
                                var c = s.resumeToken;
                                if (c.length > 0) {
                                    var h = u;
                                    u = u.copy({
                                        resumeToken: c,
                                        snapshotVersion: t.snapshotVersion
                                    }), n.queryDataByTarget[r] = u, e.shouldPersistQueryData(h, u, s) && o.push(n.queryCache.updateQueryData(i, u))
                                }
                            }
                        });
                        var s = documentKeySet();
                        t.documentUpdates.forEach(function(e, t) {
                            s = s.add(e), o.push(r.getEntry(i, e).next(function(i) {
                                null == i || t.version.isEqual(SnapshotVersion.MIN) || a.has(t.key) || t.version.compareTo(i.version) >= 0 ? r.addEntry(t) : debug(LOG_TAG$4, "Ignoring outdated watch update for ", e, ". Current version:", i.version, " Watch version:", t.version), n.garbageCollector.addPotentialGarbageKey(e)
                            }))
                        });
                        var u, c = t.snapshotVersion;
                        if (!c.isEqual(SnapshotVersion.MIN)) {
                            var h = n.queryCache.getLastRemoteSnapshotVersion(i).next(function(e) {
                                return assert(c.compareTo(e) >= 0, "Watch stream reverted to previous snapshot?? " + c + " < " + e), n.queryCache.setTargetsMetadata(i, 0, c)
                            });
                            o.push(h)
                        }
                        return PersistencePromise.waitFor(o).next(function() {
                            return n.releaseHeldBatchResults(i, r)
                        }).next(function(e) {
                            return u = e, r.apply(i)
                        }).next(function() {
                            return n.localDocuments.getDocuments(i, s.unionWith(u))
                        })
                    })
                }, e.shouldPersistQueryData = function(e, t, n) {
                    return 0 !== t.resumeToken.length && (0 === e.resumeToken.length || (t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0))
                }, e.prototype.notifyLocalViewChanges = function(e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t];
                        this.localViewReferences.addReferences(r.addedKeys, r.targetId), this.localViewReferences.removeReferences(r.removedKeys, r.targetId)
                    }
                }, e.prototype.nextMutationBatch = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Get next mutation batch", !1, function(n) {
                        return void 0 === e && (e = BATCHID_UNKNOWN), t.mutationQueue.getNextMutationBatchAfterBatchId(n, e)
                    })
                }, e.prototype.readDocument = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("read document", !1, function(n) {
                        return t.localDocuments.getDocument(n, e)
                    })
                }, e.prototype.allocateQuery = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Allocate query", !1, function(n) {
                        var r;
                        return t.queryCache.getQueryData(n, e).next(function(i) {
                            return i ? (r = i, PersistencePromise.resolve()) : t.queryCache.allocateTargetId(n).next(function(i) {
                                return r = new QueryData(e, i, QueryPurpose.Listen), t.queryCache.addQueryData(n, r)
                            })
                        }).next(function() {
                            return assert(!t.queryDataByTarget[r.targetId], "Tried to allocate an already allocated query: " + e), t.queryDataByTarget[r.targetId] = r, r
                        })
                    })
                }, e.prototype.releaseQuery = function(e, t) {
                    var n = this, r=!1 === t;
                    return this.persistence.runTransaction("Release query", r, function(r) {
                        return n.queryCache.getQueryData(r, e).next(function(i) {
                            assert(null != i, "Tried to release nonexistent query: " + e);
                            var o = i.targetId, a = n.queryDataByTarget[o];
                            return n.localViewReferences.removeReferencesForId(o), delete n.queryDataByTarget[o], !t && n.garbageCollector.isEager ? n.queryCache.removeQueryData(r, i) : a.snapshotVersion > i.snapshotVersion ? n.queryCache.updateQueryData(r, a) : PersistencePromise.resolve()
                        }).next(function() {
                            if (isEmpty(n.queryDataByTarget)) {
                                var e = new RemoteDocumentChangeBuffer(n.remoteDocuments);
                                return n.releaseHeldBatchResults(r, e).next(function() {
                                    return e.apply(r)
                                })
                            }
                        })
                    })
                }, e.prototype.executeQuery = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Execute query", !1, function(n) {
                        return t.localDocuments.getDocumentsMatchingQuery(n, e)
                    })
                }, e.prototype.remoteDocumentKeys = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Remote document keys", !1, function(n) {
                        return t.queryCache.getMatchingKeysForTargetId(n, e)
                    })
                }, e.prototype.collectGarbage = function() {
                    var e = this;
                    return this.persistence.runTransaction("Garbage collection", !0, function(t) {
                        return e.garbageCollector.collectGarbage(t).next(function(n) {
                            var r = [];
                            return n.forEach(function(n) {
                                r.push(e.remoteDocuments.removeEntry(t, n))
                            }), PersistencePromise.waitFor(r)
                        })
                    })
                }, e.prototype.getActiveClients = function() {
                    return this.persistence.getActiveClients()
                }, e.prototype.removeCachedMutationBatchMetadata = function(e) {
                    this.mutationQueue.removeCachedMutationKeys(e)
                }, e.prototype.setNetworkEnabled = function(e) {
                    this.persistence.setNetworkEnabled(e)
                }, e.prototype.releaseHeldBatchResults = function(e, t) {
                    var n = this;
                    return (isEmpty(this.queryDataByTarget) ? PersistencePromise.resolve(this.heldBatchResults.slice()) : this.queryCache.getLastRemoteSnapshotVersion(e).next(function(e) {
                        for (var t = [], r = 0, i = n.heldBatchResults; r < i.length; r++) {
                            var o = i[r];
                            if (o.commitVersion.compareTo(e) > 0)
                                break;
                            t.push(o)
                        }
                        return t
                    })).next(function(r) {
                        return 0 === r.length ? PersistencePromise.resolve(documentKeySet()) : (n.heldBatchResults.splice(0, r.length), n.releaseBatchResults(e, r, t))
                    })
                }, e.prototype.isRemoteUpToVersion = function(e, t) {
                    var n = this;
                    return this.queryCache.getLastRemoteSnapshotVersion(e).next(function(e) {
                        return t.compareTo(e) <= 0 || isEmpty(n.queryDataByTarget)
                    })
                }, e.prototype.shouldHoldBatchResult = function(e, t) {
                    return this.heldBatchResults.length > 0 ? PersistencePromise.resolve(!0) : this.isRemoteUpToVersion(e, t).next(function(e) {
                        return !e
                    })
                }, e.prototype.releaseBatchResults = function(e, t, n) {
                    for (var r = this, i = PersistencePromise.resolve(), o = function(t) {
                        i = i.next(function() {
                            return r.applyWriteToRemoteDocuments(e, t, n)
                        }).next(function() {
                            r.sharedClientState.updateMutationState(t.batch.batchId, "acknowledged")
                        })
                    }, a = 0, s = t; a < s.length; a++) {
                        o(s[a])
                    }
                    return i.next(function() {
                        return r.removeMutationBatches(e, t.map(function(e) {
                            return e.batch
                        }))
                    })
                }, e.prototype.removeMutationBatch = function(e, t) {
                    return this.removeMutationBatches(e, [t])
                }, e.prototype.removeMutationBatches = function(e, t) {
                    for (var n = this, r = documentKeySet(), i = 0, o = t; i < o.length; i++)
                        for (var a = 0, s = o[i].mutations; a < s.length; a++) {
                            var u = s[a].key;
                            r = r.add(u)
                        }
                    return PersistencePromise.forEach(t, function(t) {
                        return n.mutationQueue.removeMutationBatch(e, t)
                    }).next(function() {
                        return r
                    })
                }, e.prototype.applyWriteToRemoteDocuments = function(e, t, n) {
                    var r = t.batch, i = r.keys(), o = PersistencePromise.resolve();
                    return i.forEach(function(i) {
                        o = o.next(function() {
                            return n.getEntry(e, i)
                        }).next(function(e) {
                            var o = e, a = t.docVersions.get(i);
                            assert(null !== a, "ackVersions should contain every doc in the write."), (!o || o.version.compareTo(a) < 0) && ((o = r.applyToRemoteDocument(i, o, t)) ? n.addEntry(o) : assert(!e, "Mutation batch " + r + " applied to document " + e + " resulted in null"))
                        })
                    }), o
                }, e.prototype.getQueryForTarget = function(e) {
                    var t = this;
                    return this.queryDataByTarget[e] ? Promise.resolve(this.queryDataByTarget[e].query) : this.persistence.runTransaction("Get query data", !1, function(n) {
                        return t.queryCache.getQueryDataForTarget(n, e).next(function(e) {
                            return e.query
                        })
                    })
                }, e.prototype.getNewDocumentChanges = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get new document changes", !1, function(t) {
                        return e.remoteDocuments.getNewDocumentChanges(t)
                    })
                }, e.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, e
            }(), MemoryMutationQueue = function() {
                function e() {
                    this.mutationQueue = [], this.nextBatchId = 1, this.highestAcknowledgedBatchId = BATCHID_UNKNOWN, this.lastStreamToken = emptyByteString(), this.garbageCollector = null, this.batchesByDocumentKey = new SortedSet(DocReference.compareByKey)
                }
                return e.prototype.start = function(e) {
                    return assert(this.highestAcknowledgedBatchId < this.nextBatchId, "highestAcknowledgedBatchId must be less than the nextBatchId"), PersistencePromise.resolve()
                }, e.prototype.checkEmpty = function(e) {
                    return PersistencePromise.resolve(0 === this.mutationQueue.length)
                }, e.prototype.getHighestAcknowledgedBatchId = function(e) {
                    return PersistencePromise.resolve(this.highestAcknowledgedBatchId)
                }, e.prototype.acknowledgeBatch = function(e, t, n) {
                    var r = t.batchId;
                    assert(r > this.highestAcknowledgedBatchId, "Mutation batchIDs must be acknowledged in order");
                    var i = this.indexOfExistingBatchId(r, "acknowledged"), o = this.mutationQueue[i];
                    return assert(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), assert(!o.isTombstone(), "Can't acknowledge a previously removed batch"), this.highestAcknowledgedBatchId = r, this.lastStreamToken = n, PersistencePromise.resolve()
                }, e.prototype.getLastStreamToken = function(e) {
                    return PersistencePromise.resolve(this.lastStreamToken)
                }, e.prototype.setLastStreamToken = function(e, t) {
                    return this.lastStreamToken = t, PersistencePromise.resolve()
                }, e.prototype.addMutationBatch = function(e, t, n) {
                    assert(0 !== n.length, "Mutation batches should not be empty");
                    var r = this.nextBatchId;
                    (this.nextBatchId++, this.mutationQueue.length > 0) && assert(this.mutationQueue[this.mutationQueue.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order");
                    var i = new MutationBatch(r, t, n);
                    this.mutationQueue.push(i);
                    for (var o = 0, a = n; o < a.length; o++) {
                        var s = a[o];
                        this.batchesByDocumentKey = this.batchesByDocumentKey.add(new DocReference(s.key, r))
                    }
                    return PersistencePromise.resolve(i)
                }, e.prototype.lookupMutationBatch = function(e, t) {
                    return PersistencePromise.resolve(this.findMutationBatch(t))
                }, e.prototype.lookupMutationKeys = function(e, t) {
                    var n = this.findMutationBatch(t);
                    return assert(null != n, "Failed to find local mutation batch."), PersistencePromise.resolve(n.isTombstone() ? null : n.keys())
                }, e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
                    for (var n = this.mutationQueue.length, r = Math.max(t, this.highestAcknowledgedBatchId) + 1, i = this.indexOfBatchId(r), o = i < 0 ? 0 : i; o < n; o++) {
                        var a = this.mutationQueue[o];
                        if (!a.isTombstone())
                            return PersistencePromise.resolve(a)
                    }
                    return PersistencePromise.resolve(null)
                }, e.prototype.getAllMutationBatches = function(e) {
                    return PersistencePromise.resolve(this.getAllLiveMutationBatchesBeforeIndex(this.mutationQueue.length))
                }, e.prototype.getAllMutationBatchesThroughBatchId = function(e, t) {
                    var n = this.mutationQueue.length, r = this.indexOfBatchId(t);
                    return r < 0 ? r = 0 : r >= n ? r = n : r++, PersistencePromise.resolve(this.getAllLiveMutationBatchesBeforeIndex(r))
                }, e.prototype.getAllMutationBatchesAffectingDocumentKey = function(e, t) {
                    var n = this, r = new DocReference(t, 0), i = new DocReference(t, Number.POSITIVE_INFINITY), o = [];
                    return this.batchesByDocumentKey.forEachInRange([r, i], function(e) {
                        assert(t.isEqual(e.key), "Should only iterate over a single key's batches");
                        var r = n.findMutationBatch(e.targetOrBatchId);
                        assert(null !== r, "Batches in the index must exist in the main table"), o.push(r)
                    }), PersistencePromise.resolve(o)
                }, e.prototype.getAllMutationBatchesAffectingDocumentKeys = function(e, t) {
                    var n = this, r = new SortedSet(primitiveComparator);
                    return t.forEach(function(e) {
                        var t = new DocReference(e, 0), i = new DocReference(e, Number.POSITIVE_INFINITY);
                        n.batchesByDocumentKey.forEachInRange([t, i], function(t) {
                            assert(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), r = r.add(t.targetOrBatchId)
                        })
                    }), PersistencePromise.resolve(this.findMutationBatches(r))
                }, e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
                    var n = t.path, r = n.length + 1, i = n;
                    DocumentKey.isDocumentKey(i) || (i = i.child(""));
                    var o = new DocReference(new DocumentKey(i), 0), a = new SortedSet(primitiveComparator);
                    return this.batchesByDocumentKey.forEachWhile(function(e) {
                        var t = e.key.path;
                        return !!n.isPrefixOf(t) && (t.length === r && (a = a.add(e.targetOrBatchId)), !0)
                    }, o), PersistencePromise.resolve(this.findMutationBatches(a))
                }, e.prototype.findMutationBatches = function(e) {
                    var t = this, n = [];
                    return e.forEach(function(e) {
                        var r = t.findMutationBatch(e);
                        null !== r && n.push(r)
                    }), n
                }, e.prototype.removeMutationBatch = function(e, t) {
                    var n = this.indexOfExistingBatchId(t.batchId, "removed");
                    if (assert(this.mutationQueue[n].batchId === t.batchId, "Removed batches must exist in the queue"), 0 === n) {
                        for (var r = 1; r < this.mutationQueue.length; r++) {
                            if (!this.mutationQueue[r].isTombstone())
                                break
                        }
                        this.mutationQueue.splice(0, r)
                    } else 
                        this.mutationQueue[n] = this.mutationQueue[n].toTombstone();
                    for (var i = this.batchesByDocumentKey, o = 0, a = t.mutations; o < a.length; o++) {
                        var s = a[o].key;
                        null !== this.garbageCollector && this.garbageCollector.addPotentialGarbageKey(s);
                        var u = new DocReference(s, t.batchId);
                        i = i.delete(u)
                    }
                    return this.batchesByDocumentKey = i, PersistencePromise.resolve()
                }, e.prototype.removeCachedMutationKeys = function(e) {}, e.prototype.setGarbageCollector = function(e) {
                    this.garbageCollector = e
                }, e.prototype.containsKey = function(e, t) {
                    var n = new DocReference(t, 0), r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                    return PersistencePromise.resolve(t.isEqual(r && r.key))
                }, e.prototype.performConsistencyCheck = function(e) {
                    return 0 === this.mutationQueue.length && assert(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), PersistencePromise.resolve()
                }, e.prototype.getAllLiveMutationBatchesBeforeIndex = function(e) {
                    for (var t = [], n = 0; n < e; n++) {
                        var r = this.mutationQueue[n];
                        r.isTombstone() || t.push(r)
                    }
                    return t
                }, e.prototype.indexOfExistingBatchId = function(e, t) {
                    var n = this.indexOfBatchId(e);
                    return assert(n >= 0 && n < this.mutationQueue.length, "Batches must exist to be " + t), n
                }, e.prototype.indexOfBatchId = function(e) {
                    return 0 === this.mutationQueue.length ? 0 : e - this.mutationQueue[0].batchId
                }, e.prototype.findMutationBatch = function(e) {
                    var t = this.indexOfBatchId(e);
                    if (t < 0 || t >= this.mutationQueue.length)
                        return null;
                    var n = this.mutationQueue[t];
                    return assert(n.batchId === e, "If found batch must match"), n.isTombstone() ? null : n
                }, e
            }(), MemoryQueryCache = function() {
                function e() {
                    this.queries = new ObjectMap(function(e) {
                        return e.canonicalId()
                    }), this.lastRemoteSnapshotVersion = SnapshotVersion.MIN, this.highestTargetId = 0, this.references = new ReferenceSet, this.targetCount = 0, this.targetIdGenerator = TargetIdGenerator.forQueryCache()
                }
                return e.prototype.getLastRemoteSnapshotVersion = function(e) {
                    return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)
                }, e.prototype.allocateTargetId = function(e) {
                    var t = this.targetIdGenerator.after(this.highestTargetId);
                    return this.highestTargetId = t, PersistencePromise.resolve(t)
                }, e.prototype.setTargetsMetadata = function(e, t, n) {
                    return n && (this.lastRemoteSnapshotVersion = n), PersistencePromise.resolve()
                }, e.prototype.saveQueryData = function(e) {
                    this.queries.set(e.query, e);
                    var t = e.targetId;
                    t > this.highestTargetId && (this.highestTargetId = t)
                }, e.prototype.addQueryData = function(e, t) {
                    return assert(!this.queries.has(t.query), "Adding a query that already exists"), this.saveQueryData(t), this.targetCount += 1, PersistencePromise.resolve()
                }, e.prototype.updateQueryData = function(e, t) {
                    return assert(this.queries.has(t.query), "Updating a non-existent query"), this.saveQueryData(t), PersistencePromise.resolve()
                }, e.prototype.removeQueryData = function(e, t) {
                    return assert(this.targetCount > 0, "Removing a target from an empty cache"), assert(this.queries.has(t.query), "Removing a non-existent target from the cache"), this.queries.delete(t.query), this.references.removeReferencesForId(t.targetId), this.targetCount -= 1, PersistencePromise.resolve()
                }, e.prototype.getQueryCount = function(e) {
                    return PersistencePromise.resolve(this.targetCount)
                }, e.prototype.getQueryData = function(e, t) {
                    var n = this.queries.get(t) || null;
                    return PersistencePromise.resolve(n)
                }, e.prototype.getQueryDataForTarget = function(e, t) {
                    return fail("Not yet implemented.")
                }, e.prototype.addMatchingKeys = function(e, t, n) {
                    return this.references.addReferences(t, n), PersistencePromise.resolve()
                }, e.prototype.removeMatchingKeys = function(e, t, n) {
                    return this.references.removeReferences(t, n), PersistencePromise.resolve()
                }, e.prototype.removeMatchingKeysForTargetId = function(e, t) {
                    return this.references.removeReferencesForId(t), PersistencePromise.resolve()
                }, e.prototype.getMatchingKeysForTargetId = function(e, t) {
                    var n = this.references.referencesForId(t);
                    return PersistencePromise.resolve(n)
                }, e.prototype.setGarbageCollector = function(e) {
                    this.references.setGarbageCollector(e)
                }, e.prototype.containsKey = function(e, t) {
                    return this.references.containsKey(e, t)
                }, e
            }(), MemoryRemoteDocumentCache = function() {
                function e() {
                    this.docs = maybeDocumentMap(), this.newDocumentChanges = documentKeySet()
                }
                return e.prototype.addEntries = function(e, t) {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        this.docs = this.docs.insert(i.key, i), this.newDocumentChanges = this.newDocumentChanges.add(i.key)
                    }
                    return PersistencePromise.resolve()
                }, e.prototype.removeEntry = function(e, t) {
                    return this.docs = this.docs.remove(t), PersistencePromise.resolve()
                }, e.prototype.getEntry = function(e, t) {
                    return PersistencePromise.resolve(this.docs.get(t))
                }, e.prototype.getDocumentsMatchingQuery = function(e, t) {
                    for (var n = documentMap(), r = new DocumentKey(t.path.child("")), i = this.docs.getIteratorFrom(r); i.hasNext();) {
                        var o = i.getNext(), a = o.key, s = o.value;
                        if (!t.path.isPrefixOf(a.path))
                            break;
                        s instanceof Document && t.matches(s) && (n = n.insert(s.key, s))
                    }
                    return PersistencePromise.resolve(n)
                }, e.prototype.getNewDocumentChanges = function(e) {
                    var t = this, n = maybeDocumentMap();
                    return this.newDocumentChanges.forEach(function(e) {
                        n = n.insert(e, t.docs.get(e) || new NoDocument(e, SnapshotVersion.forDeletedDoc()))
                    }), this.newDocumentChanges = documentKeySet(), PersistencePromise.resolve(n)
                }, e
            }(), LOG_TAG$5 = "MemoryPersistence", MemoryPersistence = function() {
                function e(e) {
                    this.clientId = e, this.mutationQueues = {}, this.remoteDocumentCache = new MemoryRemoteDocumentCache, this.queryCache = new MemoryQueryCache, this._started=!1
                }
                return e.prototype.start = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return assert(!this._started, "MemoryPersistence double-started!"), this._started=!0, [2]
                        })
                    })
                }, e.prototype.shutdown = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this._started=!1, [2]
                        })
                    })
                }, Object.defineProperty(e.prototype, "started", {
                    get: function() {
                        return this._started
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getActiveClients = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return [2, [this.clientId]]
                        })
                    })
                }, e.prototype.setPrimaryStateListener = function(e) {
                    return e(!0)
                }, e.prototype.setNetworkEnabled = function(e) {}, e.prototype.getMutationQueue = function(e) {
                    var t = this.mutationQueues[e.toKey()];
                    return t || (t = new MemoryMutationQueue, this.mutationQueues[e.toKey()] = t), t
                }, e.prototype.getQueryCache = function() {
                    return this.queryCache
                }, e.prototype.getRemoteDocumentCache = function() {
                    return this.remoteDocumentCache
                }, e.prototype.runTransaction = function(e, t, n) {
                    return debug(LOG_TAG$5, "Starting transaction:", e), n(new MemoryTransaction).toPromise()
                }, e
            }(), MemoryTransaction = function() {
                return function() {}
            }(), NoOpGarbageCollector = function() {
                function e() {
                    this.isEager=!1
                }
                return e.prototype.addGarbageSource = function(e) {}, e.prototype.removeGarbageSource = function(e) {}, e.prototype.addPotentialGarbageKey = function(e) {}, e.prototype.collectGarbage = function(e) {
                    return PersistencePromise.resolve(documentKeySet())
                }, e
            }(), LOG_TAG$6 = "ExponentialBackoff", ExponentialBackoff = function() {
                function e(e, t, n, r, i) {
                    this.queue = e, this.timerId = t, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset()
                }
                return e.prototype.reset = function() {
                    this.currentBaseMs = 0
                }, e.prototype.resetToMax = function() {
                    this.currentBaseMs = this.maxDelayMs
                }, e.prototype.backoffAndRun = function(e) {
                    var t = this;
                    this.cancel();
                    var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()), r = Math.max(0, Date.now() - this.lastAttemptTime), i = Math.max(0, n - r);
                    this.currentBaseMs > 0 && debug(LOG_TAG$6, "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function() {
                        return t.lastAttemptTime = Date.now(), e()
                    }), this.currentBaseMs*=this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs)
                }, e.prototype.cancel = function() {
                    null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null)
                }, e.prototype.jitterDelayMs = function() {
                    return (Math.random() - .5) * this.currentBaseMs
                }, e
            }(), LOG_TAG$7 = "PersistentStream", PersistentStreamState;
            !function(e) {
                e[e.Initial = 0] = "Initial", e[e.Starting = 1] = "Starting", e[e.Open = 2] = "Open", e[e.Error = 3] = "Error", e[e.Backoff = 4] = "Backoff"
            }(PersistentStreamState || (PersistentStreamState = {}));
            var BACKOFF_INITIAL_DELAY_MS = 1e3, BACKOFF_MAX_DELAY_MS = 6e4, BACKOFF_FACTOR = 1.5, IDLE_TIMEOUT_MS = 6e4, PersistentStream = function() {
                function e(e, t, n, r, i, o) {
                    this.queue = e, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = PersistentStreamState.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new ExponentialBackoff(e, t, BACKOFF_INITIAL_DELAY_MS, BACKOFF_FACTOR, BACKOFF_MAX_DELAY_MS)
                }
                return e.prototype.isStarted = function() {
                    return this.state === PersistentStreamState.Starting || this.state === PersistentStreamState.Open || this.state === PersistentStreamState.Backoff
                }, e.prototype.isOpen = function() {
                    return this.state === PersistentStreamState.Open
                }, e.prototype.start = function() {
                    this.state !== PersistentStreamState.Error ? (assert(this.state === PersistentStreamState.Initial, "Already started"), this.auth()) : this.performBackoff()
                }, e.prototype.stop = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.isStarted() ? [4, this.close(PersistentStreamState.Initial)] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.inhibitBackoff = function() {
                    assert(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = PersistentStreamState.Initial, this.backoff.reset()
                }, e.prototype.markIdle = function() {
                    var e = this;
                    this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, IDLE_TIMEOUT_MS, function() {
                        return e.handleIdleCloseTimer()
                    }))
                }, e.prototype.sendRequest = function(e) {
                    this.cancelIdleCheck(), this.stream.send(e)
                }, e.prototype.handleIdleCloseTimer = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this.isOpen() ? [2, this.close(PersistentStreamState.Initial)] : [2]
                        })
                    })
                }, e.prototype.cancelIdleCheck = function() {
                    this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null)
                }, e.prototype.close = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return assert(this.isStarted(), "Only started streams should be closed."), assert(e === PersistentStreamState.Error || isNullOrUndefined(t), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, e !== PersistentStreamState.Error ? this.backoff.reset() : t && t.code === Code.RESOURCE_EXHAUSTED ? (error(t.toString()), error("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : t && t.code === Code.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.onClose(t)];
                            case 1:
                                return n.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.tearDown = function() {}, e.prototype.auth = function() {
                    var e = this;
                    assert(this.state === PersistentStreamState.Initial, "Must be in initial state to auth"), this.state = PersistentStreamState.Starting;
                    var t = this.getCloseGuardedDispatcher(this.closeCount), n = this.closeCount;
                    this.credentialsProvider.getToken().then(function(t) {
                        e.closeCount === n && e.startStream(t)
                    }, function(n) {
                        t(function() {
                            var t = new FirestoreError(Code.UNKNOWN, "Fetching auth token failed: " + n.message);
                            return e.handleStreamClose(t)
                        })
                    })
                }, e.prototype.startStream = function(e) {
                    var t = this;
                    assert(this.state === PersistentStreamState.Starting, "Trying to start stream in a non-starting state");
                    var n = this.getCloseGuardedDispatcher(this.closeCount);
                    this.stream = this.startRpc(e), this.stream.onOpen(function() {
                        n(function() {
                            return assert(t.state === PersistentStreamState.Starting, "Expected stream to be in state Starting, but was " + t.state), t.state = PersistentStreamState.Open, t.listener.onOpen()
                        })
                    }), this.stream.onClose(function(e) {
                        n(function() {
                            return t.handleStreamClose(e)
                        })
                    }), this.stream.onMessage(function(e) {
                        n(function() {
                            return t.onMessage(e)
                        })
                    })
                }, e.prototype.performBackoff = function() {
                    var e = this;
                    assert(this.state === PersistentStreamState.Error, "Should only perform backoff when in Error state"), this.state = PersistentStreamState.Backoff, this.backoff.backoffAndRun(function() {
                        return __awaiter(e, void 0, void 0, function() {
                            return __generator(this, function(e) {
                                return assert(this.state === PersistentStreamState.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = PersistentStreamState.Initial, this.start(), assert(this.isStarted(), "PersistentStream should have started"), [2]
                            })
                        })
                    })
                }, e.prototype.handleStreamClose = function(e) {
                    return assert(this.isStarted(), "Can't handle server close on non-started stream"), debug(LOG_TAG$7, "close with error: " + e), this.stream = null, this.close(PersistentStreamState.Error, e)
                }, e.prototype.getCloseGuardedDispatcher = function(e) {
                    var t = this;
                    return function(n) {
                        t.queue.enqueueAndForget(function() {
                            return t.closeCount === e ? n() : (debug(LOG_TAG$7, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                        })
                    }
                }, e
            }(), PersistentListenStream = function(e) {
                function t(t, n, r, i, o) {
                    var a = e.call(this, t, TimerId.ListenStreamConnectionBackoff, TimerId.ListenStreamIdle, n, r, o) || this;
                    return a.serializer = i, a
                }
                return __extends(t, e), t.prototype.startRpc = function(e) {
                    return this.connection.openStream("Listen", e)
                }, t.prototype.onMessage = function(e) {
                    this.backoff.reset();
                    var t = this.serializer.fromWatchChange(e), n = this.serializer.versionFromListenResponse(e);
                    return this.listener.onWatchChange(t, n)
                }, t.prototype.watch = function(e) {
                    var t = {};
                    t.database = this.serializer.encodedDatabaseId, t.addTarget = this.serializer.toTarget(e);
                    var n = this.serializer.toListenRequestLabels(e);
                    n && (t.labels = n), this.sendRequest(t)
                }, t.prototype.unwatch = function(e) {
                    var t = {};
                    t.database = this.serializer.encodedDatabaseId, t.removeTarget = e, this.sendRequest(t)
                }, t
            }(PersistentStream), PersistentWriteStream = function(e) {
                function t(t, n, r, i, o) {
                    var a = e.call(this, t, TimerId.WriteStreamConnectionBackoff, TimerId.WriteStreamIdle, n, r, o) || this;
                    return a.serializer = i, a.handshakeComplete_=!1, a
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "handshakeComplete", {
                    get: function() {
                        return this.handshakeComplete_
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.start = function() {
                    this.handshakeComplete_=!1, e.prototype.start.call(this)
                }, t.prototype.tearDown = function() {
                    this.handshakeComplete_ && this.writeMutations([])
                }, t.prototype.startRpc = function(e) {
                    return this.connection.openStream("Write", e)
                }, t.prototype.onMessage = function(e) {
                    if (assert(!!e.streamToken, "Got a write response without a stream token"), this.lastStreamToken = e.streamToken, this.handshakeComplete_) {
                        this.backoff.reset();
                        var t = this.serializer.fromWriteResults(e.writeResults), n = this.serializer.fromVersion(e.commitTime);
                        return this.listener.onMutationResult(n, t)
                    }
                    return assert(!e.writeResults || 0 === e.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_=!0, this.listener.onHandshakeComplete()
                }, t.prototype.writeHandshake = function() {
                    assert(this.isOpen(), "Writing handshake requires an opened stream"), assert(!this.handshakeComplete_, "Handshake already completed");
                    var e = {};
                    e.database = this.serializer.encodedDatabaseId, this.sendRequest(e)
                }, t.prototype.writeMutations = function(e) {
                    var t = this;
                    assert(this.isOpen(), "Writing mutations requires an opened stream"), assert(this.handshakeComplete_, "Handshake must be complete before writing mutations"), assert(this.lastStreamToken.length > 0, "Trying to write mutation without a token");
                    var n = {
                        streamToken: this.lastStreamToken,
                        writes: e.map(function(e) {
                            return t.serializer.toMutation(e)
                        })
                    };
                    this.sendRequest(n)
                }, t
            }(PersistentStream), Datastore = function() {
                function e(e, t, n, r) {
                    this.queue = e, this.connection = t, this.credentials = n, this.serializer = r
                }
                return e.prototype.newPersistentWriteStream = function(e) {
                    return new PersistentWriteStream(this.queue, this.connection, this.credentials, this.serializer, e)
                }, e.prototype.newPersistentWatchStream = function(e) {
                    return new PersistentListenStream(this.queue, this.connection, this.credentials, this.serializer, e)
                }, e.prototype.commit = function(e) {
                    var t = this, n = {
                        database: this.serializer.encodedDatabaseId,
                        writes: e.map(function(e) {
                            return t.serializer.toMutation(e)
                        })
                    };
                    return this.invokeRPC("Commit", n).then(function(e) {
                        return t.serializer.fromWriteResults(e.writeResults)
                    })
                }, e.prototype.lookup = function(e) {
                    var t = this, n = {
                        database: this.serializer.encodedDatabaseId,
                        documents: e.map(function(e) {
                            return t.serializer.toName(e)
                        })
                    };
                    return this.invokeStreamingRPC("BatchGetDocuments", n).then(function(n) {
                        var r = maybeDocumentMap();
                        n.forEach(function(e) {
                            var n = t.serializer.fromMaybeDocument(e);
                            r = r.insert(n.key, n)
                        });
                        var i = [];
                        return e.forEach(function(e) {
                            var t = r.get(e);
                            assert(!!t, "Missing entity in write response for " + e), i.push(t)
                        }), i
                    })
                }, e.prototype.invokeRPC = function(e, t) {
                    var n = this;
                    return this.credentials.getToken().then(function(r) {
                        return n.connection.invokeRPC(e, t, r)
                    }).catch(function(e) {
                        throw e.code === Code.UNAUTHENTICATED && n.credentials.invalidateToken(), e
                    })
                }, e.prototype.invokeStreamingRPC = function(e, t) {
                    var n = this;
                    return this.credentials.getToken().then(function(r) {
                        return n.connection.invokeStreamingRPC(e, t, r)
                    }).catch(function(e) {
                        throw e.code === Code.UNAUTHENTICATED && n.credentials.invalidateToken(), e
                    })
                }, e
            }(), Transaction = function() {
                function e(e) {
                    this.datastore = e, this.readVersions = documentVersionMap(), this.mutations = [], this.committed=!1
                }
                return e.prototype.recordVersion = function(e) {
                    var t = e.version;
                    e instanceof NoDocument && (t = SnapshotVersion.forDeletedDoc());
                    var n = this.readVersions.get(e.key);
                    if (null !== n) {
                        if (!t.isEqual(n))
                            throw new FirestoreError(Code.ABORTED, "Document version changed between two reads.")
                    } else 
                        this.readVersions = this.readVersions.insert(e.key, t)
                }, e.prototype.lookup = function(e) {
                    var t = this;
                    return this.committed ? Promise.reject("Transaction has already completed.") : this.mutations.length > 0 ? Promise.reject("Transactions lookups are invalid after writes.") : this.datastore.lookup(e).then(function(e) {
                        return e.forEach(function(e) {
                            return t.recordVersion(e)
                        }), e
                    })
                }, e.prototype.write = function(e) {
                    if (this.committed)
                        throw new FirestoreError(Code.FAILED_PRECONDITION, "Transaction has already completed.");
                    this.mutations = this.mutations.concat(e)
                }, e.prototype.precondition = function(e) {
                    var t = this.readVersions.get(e);
                    return t ? Precondition.updateTime(t) : Precondition.NONE
                }, e.prototype.preconditionForUpdate = function(e) {
                    var t = this.readVersions.get(e);
                    if (t && t.isEqual(SnapshotVersion.forDeletedDoc()))
                        throw new FirestoreError(Code.FAILED_PRECONDITION, "Can't update a document that doesn't exist.");
                    return t ? Precondition.updateTime(t) : Precondition.exists(!0)
                }, e.prototype.set = function(e, t) {
                    this.write(t.toMutations(e, this.precondition(e)))
                }, e.prototype.update = function(e, t) {
                    this.write(t.toMutations(e, this.preconditionForUpdate(e)))
                }, e.prototype.delete = function(e) {
                    this.write([new DeleteMutation(e, this.precondition(e))]), this.readVersions = this.readVersions.insert(e, SnapshotVersion.forDeletedDoc())
                }, e.prototype.commit = function() {
                    var e = this, t = this.readVersions;
                    return this.mutations.forEach(function(e) {
                        t = t.remove(e.key)
                    }), t.isEmpty() ? this.datastore.commit(this.mutations).then(function() {
                        e.committed=!0
                    }) : Promise.reject(Error("Every document read in a transaction must also be written."))
                }, e
            }(), LOG_TAG$8 = "OnlineStateTracker", MAX_WATCH_STREAM_FAILURES = 2, ONLINE_STATE_TIMEOUT_MS = 1e4, OnlineStateTracker = function() {
                function e(e, t) {
                    this.asyncQueue = e, this.onlineStateHandler = t, this.state = OnlineState.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline=!0
                }
                return e.prototype.handleWatchStreamStart = function() {
                    var e = this;
                    0 === this.watchStreamFailures && (this.setAndBroadcast(OnlineState.Unknown), assert(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(TimerId.OnlineStateTimeout, ONLINE_STATE_TIMEOUT_MS, function() {
                        return e.onlineStateTimer = null, assert(e.state === OnlineState.Unknown, "Timer should be canceled if we transitioned to a different state."), e.logClientOfflineWarningIfNecessary("Backend didn't respond within " + ONLINE_STATE_TIMEOUT_MS / 1e3 + " seconds."), e.setAndBroadcast(OnlineState.Offline), Promise.resolve()
                    }))
                }, e.prototype.handleWatchStreamFailure = function(e) {
                    this.state === OnlineState.Online ? (this.setAndBroadcast(OnlineState.Unknown), assert(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), assert(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, this.watchStreamFailures >= MAX_WATCH_STREAM_FAILURES && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed " + MAX_WATCH_STREAM_FAILURES + " times. Most recent error: " + e.toString()), this.setAndBroadcast(OnlineState.Offline)))
                }, e.prototype.set = function(e) {
                    this.clearOnlineStateTimer(), this.watchStreamFailures = 0, e === OnlineState.Online && (this.shouldWarnClientIsOffline=!1), this.setAndBroadcast(e)
                }, e.prototype.setAndBroadcast = function(e) {
                    e !== this.state && (this.state = e, this.onlineStateHandler(e))
                }, e.prototype.logClientOfflineWarningIfNecessary = function(e) {
                    var t = "Could not reach Cloud Firestore backend. " + e + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                    this.shouldWarnClientIsOffline ? (error(t), this.shouldWarnClientIsOffline=!1) : debug(LOG_TAG$8, t)
                }, e.prototype.clearOnlineStateTimer = function() {
                    null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null)
                }, e
            }(), LOG_TAG$9 = "RemoteStore", MAX_PENDING_WRITES = 10, RemoteStore = function() {
                function e(e, t, n, r) {
                    this.localStore = e, this.datastore = t, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled=!1, this.isPrimary=!1, this.onlineStateTracker = new OnlineStateTracker(n, r), this.watchStream = this.datastore.newPersistentWatchStream({
                        onOpen: this.onWatchStreamOpen.bind(this),
                        onClose: this.onWatchStreamClose.bind(this),
                        onWatchChange: this.onWatchStreamChange.bind(this)
                    }), this.writeStream = this.datastore.newPersistentWriteStream({
                        onOpen: this.onWriteStreamOpen.bind(this),
                        onClose: this.onWriteStreamClose.bind(this),
                        onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                        onMutationResult: this.onMutationResult.bind(this)
                    })
                }
                return e.prototype.start = function() {
                    return this.enableNetwork()
                }, e.prototype.enableNetwork = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e;
                        return __generator(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return this.networkEnabled=!0, this.canUseNetwork() ? (e = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                            case 1:
                                return e.lastStreamToken = t.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(OnlineState.Unknown), [4, this.fillWritePipeline()];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.disableNetwork = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.networkEnabled=!1, [4, this.disableNetworkInternal()];
                            case 1:
                                return e.sent(), this.onlineStateTracker.set(OnlineState.Offline), [2]
                            }
                        })
                    })
                }, e.prototype.disableNetworkInternal = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.writeStream.stop()];
                            case 1:
                                return e.sent(), [4, this.watchStream.stop()];
                            case 2:
                                return e.sent(), this.writePipeline.length > 0 && (debug(LOG_TAG$9, "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2]
                            }
                        })
                    })
                }, e.prototype.shutdown = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return debug(LOG_TAG$9, "RemoteStore shutting down."), this.networkEnabled=!1, [4, this.disableNetworkInternal()];
                            case 1:
                                return e.sent(), this.onlineStateTracker.set(OnlineState.Unknown), [2]
                            }
                        })
                    })
                }, e.prototype.listen = function(e) {
                    assert(!contains(this.listenTargets, e.targetId), "listen called with duplicate targetId!"), this.listenTargets[e.targetId] = e, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(e)
                }, e.prototype.unlisten = function(e) {
                    assert(contains(this.listenTargets, e), "unlisten called without assigned target ID!"), delete this.listenTargets[e], this.watchStream.isOpen() && (this.sendUnwatchRequest(e), isEmpty(this.listenTargets) && this.watchStream.markIdle())
                }, e.prototype.getQueryDataForTarget = function(e) {
                    return this.listenTargets[e] || null
                }, e.prototype.getRemoteKeysForTarget = function(e) {
                    return this.syncEngine.getRemoteKeysForTarget(e)
                }, e.prototype.sendWatchRequest = function(e) {
                    this.watchChangeAggregator.recordPendingTargetRequest(e.targetId), this.watchStream.watch(e)
                }, e.prototype.sendUnwatchRequest = function(e) {
                    this.watchChangeAggregator.recordPendingTargetRequest(e), this.watchStream.unwatch(e)
                }, e.prototype.startWatchStream = function() {
                    assert(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new WatchChangeAggregator(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart()
                }, e.prototype.shouldStartWatchStream = function() {
                    return this.canUseNetwork()&&!this.watchStream.isStarted()&&!isEmpty(this.listenTargets)
                }, e.prototype.canUseNetwork = function() {
                    return this.isPrimary && this.networkEnabled
                }, e.prototype.cleanUpWatchStreamState = function() {
                    this.watchChangeAggregator = null
                }, e.prototype.onWatchStreamOpen = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e = this;
                        return __generator(this, function(t) {
                            return forEachNumber(this.listenTargets, function(t, n) {
                                e.sendWatchRequest(n)
                            }), [2]
                        })
                    })
                }, e.prototype.onWatchStreamClose = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(t) {
                            return void 0 === e && assert(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(e), this.startWatchStream()) : this.onlineStateTracker.set(OnlineState.Unknown), [2]
                        })
                    })
                }, e.prototype.onWatchStreamChange = function(e, t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var n;
                        return __generator(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return this.onlineStateTracker.set(OnlineState.Online), e instanceof WatchTargetChange && e.state === WatchTargetChangeState.Removed && e.cause ? [2, this.handleTargetError(e)] : (e instanceof DocumentWatchChange ? this.watchChangeAggregator.handleDocumentChange(e) : e instanceof ExistenceFilterChange ? this.watchChangeAggregator.handleExistenceFilter(e) : (assert(e instanceof WatchTargetChange, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(e)), t.isEqual(SnapshotVersion.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                            case 1:
                                return n = r.sent(), t.compareTo(n) >= 0 ? [4, this.raiseWatchSnapshot(t)] : [3, 3];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.raiseWatchSnapshot = function(e) {
                    var t = this;
                    assert(!e.isEqual(SnapshotVersion.MIN), "Can't raise event for unknown SnapshotVersion");
                    var n = this.watchChangeAggregator.createRemoteEvent(e);
                    return forEachNumber(n.targetChanges, function(n, r) {
                        if (r.resumeToken.length > 0) {
                            var i = t.listenTargets[n];
                            i && (t.listenTargets[n] = i.copy({
                                resumeToken: r.resumeToken,
                                snapshotVersion: e
                            }))
                        }
                    }), n.targetMismatches.forEach(function(e) {
                        var n = t.listenTargets[e];
                        if (n) {
                            t.listenTargets[e] = n.copy({
                                resumeToken: emptyByteString()
                            }), t.sendUnwatchRequest(e);
                            var r = new QueryData(n.query, e, QueryPurpose.ExistenceFilterMismatch);
                            t.sendWatchRequest(r)
                        }
                    }), this.syncEngine.applyRemoteEvent(n)
                }, e.prototype.handleTargetError = function(e) {
                    var t = this;
                    assert(!!e.cause, "Handling target error without a cause");
                    var n = e.cause, r = Promise.resolve();
                    return e.targetIds.forEach(function(e) {
                        r = r.then(function() {
                            return __awaiter(t, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    return contains(this.listenTargets, e) ? (delete this.listenTargets[e], this.watchChangeAggregator.removeTarget(e), [2, this.syncEngine.rejectListen(e, n)]) : [2]
                                })
                            })
                        })
                    }), r
                }, e.prototype.fillWritePipeline = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return __generator(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return this.canAddToWritePipeline() ? (e = this.writePipeline.length > 0 ? this.writePipeline[this.writePipeline.length - 1].batchId : BATCHID_UNKNOWN, [4, this.localStore.nextMutationBatch(e)]) : [3, 4];
                            case 1:
                                return null !== (t = n.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                            case 2:
                                return this.addToWritePipeline(t), [4, this.fillWritePipeline()];
                            case 3:
                                n.sent(), n.label = 4;
                            case 4:
                                return this.shouldStartWriteStream() && this.startWriteStream(), [2]
                            }
                        })
                    })
                }, e.prototype.canAddToWritePipeline = function() {
                    return this.canUseNetwork() && this.writePipeline.length < MAX_PENDING_WRITES
                }, e.prototype.outstandingWrites = function() {
                    return this.writePipeline.length
                }, e.prototype.addToWritePipeline = function(e) {
                    assert(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(e), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(e.mutations)
                }, e.prototype.shouldStartWriteStream = function() {
                    return this.canUseNetwork()&&!this.writeStream.isStarted() && this.writePipeline.length > 0
                }, e.prototype.startWriteStream = function() {
                    assert(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start()
                }, e.prototype.onWriteStreamOpen = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this.writeStream.writeHandshake(), [2]
                        })
                    })
                }, e.prototype.onWriteHandshakeComplete = function() {
                    var e = this;
                    return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() {
                        for (var t = 0, n = e.writePipeline; t < n.length; t++) {
                            var r = n[t];
                            e.writeStream.writeMutations(r.mutations)
                        }
                    }).catch(function(t) {
                        return e.ignoreIfPrimaryLeaseLoss(t)
                    })
                }, e.prototype.ignoreIfPrimaryLeaseLoss = function(e) {
                    if (!isPrimaryLeaseLostError(e))
                        throw e;
                    debug(LOG_TAG$9, "Unexpectedly lost primary lease")
                }, e.prototype.onMutationResult = function(e, t) {
                    var n = this;
                    assert(this.writePipeline.length > 0, "Got result for empty write pipeline");
                    var r = this.writePipeline.shift(), i = MutationBatchResult.from(r, e, t, this.writeStream.lastStreamToken);
                    return this.syncEngine.applySuccessfulWrite(i).then(function() {
                        return n.fillWritePipeline()
                    })
                }, e.prototype.onWriteStreamClose = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t = this;
                        return __generator(this, function(n) {
                            return void 0 === e && assert(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), e && this.writePipeline.length > 0 ? (void 0, [2, (this.writeStream.handshakeComplete ? this.handleWriteError(e) : this.handleHandshakeError(e)).then(function() {
                                t.shouldStartWriteStream() && t.startWriteStream()
                            })]) : [2]
                        })
                    })
                }, e.prototype.handleHandshakeError = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t = this;
                        return __generator(this, function(n) {
                            return isPermanentError(e.code) || e.code === Code.ABORTED ? (debug(LOG_TAG$9, "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = emptyByteString(), [2, this.localStore.setLastStreamToken(emptyByteString()).catch(function(e) {
                                return t.ignoreIfPrimaryLeaseLoss(e)
                            })]) : [2]
                        })
                    })
                }, e.prototype.handleWriteError = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return __generator(this, function(r) {
                            return isPermanentError(e.code) ? (t = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(t.batchId, e).then(function() {
                                return n.fillWritePipeline()
                            })]) : [2]
                        })
                    })
                }, e.prototype.createTransaction = function() {
                    return new Transaction(this.datastore)
                }, e.prototype.handleCredentialChange = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.canUseNetwork() ? (debug(LOG_TAG$9, "RemoteStore restarting streams for new credential"), this.networkEnabled=!1, [4, this.disableNetworkInternal()]) : [3, 3];
                            case 1:
                                return e.sent(), this.onlineStateTracker.set(OnlineState.Unknown), [4, this.enableNetwork()];
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                }, e.prototype.applyPrimaryState = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return this.isPrimary = e, e && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                            case 1:
                                return t.sent(), [3, 4];
                            case 2:
                                return e ? [3, 4] : [4, this.disableNetworkInternal()];
                            case 3:
                                t.sent(), this.onlineStateTracker.set(OnlineState.Unknown), t.label = 4;
                            case 4:
                                return [2]
                            }
                        })
                    })
                }, e
            }(), User = function() {
                function e(e) {
                    this.uid = e
                }
                return e.prototype.isAuthenticated = function() {
                    return null != this.uid
                }, e.prototype.toKey = function() {
                    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                }, e.prototype.isEqual = function(e) {
                    return e.uid === this.uid
                }, e.UNAUTHENTICATED = new e(null), e.GOOGLE_CREDENTIALS = new e("google-credentials-uid"), e.FIRST_PARTY = new e("first-party-uid"), e
            }(), LOG_TAG$10 = "SharedClientState", CLIENT_STATE_KEY_PREFIX = "firestore_clients", MUTATION_BATCH_KEY_PREFIX = "firestore_mutations", QUERY_TARGET_KEY_PREFIX = "firestore_targets", ONLINE_STATE_KEY = "firestore_online_state", MutationMetadata = function() {
                function e(e, t, n, r) {
                    this.user = e, this.batchId = t, this.state = n, this.error = r, assert(void 0 !== r == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'")
                }
                return e.fromLocalStorageEntry = function(t, n, r) {
                    var i = JSON.parse(r), o = "object" == typeof i&&-1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), a = void 0;
                    return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (a = new FirestoreError(i.error.code, i.error.message)), o ? new e(t, n, i.state, a) : (error(LOG_TAG$10, "Failed to parse mutation state for ID '" + n + "': " + r), null)
                }, e.prototype.toLocalStorageJSON = function() {
                    var e = {
                        state: this.state
                    };
                    return this.error && (e.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(e)
                }, e
            }(), QueryTargetMetadata = function() {
                function e(e, t, n) {
                    this.targetId = e, this.state = t, this.error = n, assert(void 0 !== n == ("rejected" === t), "QueryTargetMetadata must contain an error iff state is 'rejected'")
                }
                return e.fromLocalStorageEntry = function(t, n) {
                    var r = JSON.parse(n), i = "object" == typeof r&&-1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new FirestoreError(r.error.code, r.error.message)), i ? new e(t, r.state, o) : (error(LOG_TAG$10, "Failed to parse target state for ID '" + t + "': " + n), null)
                }, e.prototype.toLocalStorageJSON = function() {
                    var e = {
                        state: this.state
                    };
                    return this.error && (e.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(e)
                }, e
            }(), RemoteClientState = function() {
                function e(e, t) {
                    this.clientId = e, this.activeTargetIds = t
                }
                return e.fromLocalStorageEntry = function(t, n) {
                    for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = targetIdSet(), a = 0; i && a < r.activeTargetIds.length; ++a)
                        i = isSafeInteger(r.activeTargetIds[a]), o = o.add(r.activeTargetIds[a]);
                    return i ? new e(t, o) : (error(LOG_TAG$10, "Failed to parse client data for instance '" + t + "': " + n), null)
                }, e
            }(), SharedOnlineState = function() {
                function e(e, t) {
                    this.clientId = e, this.onlineState = t
                }
                return e.fromLocalStorageEntry = function(t) {
                    var n = JSON.parse(t);
                    return "object" == typeof n && void 0 !== OnlineState[n.onlineState] && "string" == typeof n.clientId ? new e(n.clientId, OnlineState[n.onlineState]) : (error(LOG_TAG$10, "Failed to parse online state: " + t), null)
                }, e
            }(), LocalClientState = function() {
                function e() {
                    this.activeTargetIds = targetIdSet()
                }
                return e.prototype.addQueryTarget = function(e) {
                    assert(!this.activeTargetIds.has(e), "Target with ID '" + e + "' already active."), this.activeTargetIds = this.activeTargetIds.add(e)
                }, e.prototype.removeQueryTarget = function(e) {
                    this.activeTargetIds = this.activeTargetIds.delete(e)
                }, e.prototype.toLocalStorageJSON = function() {
                    var e = {
                        activeTargetIds: this.activeTargetIds.toArray()
                    };
                    return JSON.stringify(e)
                }, e
            }(), WebStorageSharedClientState = function() {
                function e(t, n, r, i, o) {
                    if (this.queue = t, this.platform = n, this.persistenceKey = r, this.localClientId = i, this.syncEngine = null, this.onlineStateHandler = null, this.activeClients = {}, this.storageListener = this.handleLocalStorageEvent.bind(this), this.started=!1, this.earlyEvents = [], !e.isAvailable(this.platform))
                        throw new FirestoreError(Code.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                    this.storage = this.platform.window.localStorage, this.currentUser = o, this.localClientStorageKey = this.toLocalStorageClientStateKey(this.localClientId), this.activeClients[this.localClientId] = new LocalClientState;
                    var a = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    this.clientStateKeyRe = new RegExp("^" + CLIENT_STATE_KEY_PREFIX + "_" + a + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + MUTATION_BATCH_KEY_PREFIX + "_" + a + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + QUERY_TARGET_KEY_PREFIX + "_" + a + "_(\\d+)$"), this.platform.window.addEventListener("storage", this.storageListener)
                }
                return e.isAvailable = function(e) {
                    return e.window && null != e.window.localStorage
                }, e.prototype.start = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, i, o, a, s, u, c, h, l = this;
                        return __generator(this, function(d) {
                            switch (d.label) {
                            case 0:
                                return assert(!this.started, "WebStorageSharedClientState already started"), assert(null !== this.syncEngine, "syncEngine property must be set before calling start()"), assert(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                            case 1:
                                for (e = d.sent(), t = 0, n = e; t < n.length; t++)(r = n[t]) 
                                    !== this.localClientId && (i = this.getItem(this.toLocalStorageClientStateKey(r))) && (o = RemoteClientState.fromLocalStorageEntry(r, i)) && (this.activeClients[o.clientId] = o);
                                for (this.persistClientState(), (a = this.storage.getItem(ONLINE_STATE_KEY)) && (s = this.fromLocalStorageOnlineState(a)) && this.handleOnlineStateEvent(s), u = 0, c = this.earlyEvents; u < c.length; u++)
                                    h = c[u], this.handleLocalStorageEvent(h);
                                return this.earlyEvents = [], this.platform.window.addEventListener("unload", function() {
                                    return l.shutdown()
                                }), this.started=!0, [2]
                            }
                        })
                    })
                }, e.prototype.getAllActiveQueryTargets = function() {
                    var e = targetIdSet();
                    return forEach(this.activeClients, function(t, n) {
                        e = e.unionWith(n.activeTargetIds)
                    }), e
                }, e.prototype.isActiveQueryTarget = function(e) {
                    for (var t in this.activeClients)
                        if (this.activeClients.hasOwnProperty(t) && this.activeClients[t].activeTargetIds.has(e))
                            return !0;
                    return !1
                }, e.prototype.addPendingMutation = function(e) {
                    this.persistMutationState(e, "pending")
                }, e.prototype.updateMutationState = function(e, t, n) {
                    this.persistMutationState(e, t, n), this.removeMutationState(e)
                }, e.prototype.addLocalQueryTarget = function(e) {
                    var t = "not-current";
                    if (this.isActiveQueryTarget(e)) {
                        var n = this.storage.getItem(this.toLocalStorageQueryTargetMetadataKey(e));
                        if (n) {
                            var r = QueryTargetMetadata.fromLocalStorageEntry(e, n);
                            r && (t = r.state)
                        }
                    }
                    return this.localClientState.addQueryTarget(e), this.persistClientState(), t
                }, e.prototype.removeLocalQueryTarget = function(e) {
                    this.localClientState.removeQueryTarget(e), this.persistClientState()
                }, e.prototype.clearQueryState = function(e) {
                    this.removeItem(this.toLocalStorageQueryTargetMetadataKey(e))
                }, e.prototype.updateQueryState = function(e, t, n) {
                    this.persistQueryTargetState(e, t, n)
                }, e.prototype.handleUserChange = function(e, t, n) {
                    var r = this;
                    t.forEach(function(e) {
                        r.removeMutationState(e)
                    }), this.currentUser = e, n.forEach(function(e) {
                        r.addPendingMutation(e)
                    })
                }, e.prototype.setOnlineState = function(e) {
                    this.persistOnlineState(e)
                }, e.prototype.shutdown = function() {
                    this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started=!1)
                }, e.prototype.getItem = function(e) {
                    var t = this.storage.getItem(e);
                    return debug(LOG_TAG$10, "READ", e, t), t
                }, e.prototype.setItem = function(e, t) {
                    debug(LOG_TAG$10, "SET", e, t), this.storage.setItem(e, t)
                }, e.prototype.removeItem = function(e) {
                    debug(LOG_TAG$10, "REMOVE", e), this.storage.removeItem(e)
                }, e.prototype.handleLocalStorageEvent = function(e) {
                    var t = this;
                    e.storageArea === this.storage && (assert(e.key !== this.localClientStorageKey, "Received LocalStorage notification for local change."), debug(LOG_TAG$10, "EVENT", e.key, e.newValue), this.queue.enqueueAndForget(function() {
                        return __awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return __generator(this, function(a) {
                                if (!this.started)
                                    return this.earlyEvents.push(e), [2];
                                if (this.clientStateKeyRe.test(e.key)) {
                                    if (null == e.newValue)
                                        return n = this.fromLocalStorageClientStateKey(e.key), [2, this.handleClientStateEvent(n, null)];
                                    if (t = this.fromLocalStorageClientState(e.key, e.newValue))
                                        return [2, this.handleClientStateEvent(t.clientId, t)]
                                } else if (this.mutationBatchKeyRe.test(e.key)) {
                                    if (null !== e.newValue && (r = this.fromLocalStorageMutationMetadata(e.key, e.newValue)))
                                        return [2, this.handleMutationBatchEvent(r)]
                                } else if (this.queryTargetKeyRe.test(e.key)) {
                                    if (null !== e.newValue && (i = this.fromLocalStorageQueryTargetMetadata(e.key, e.newValue)))
                                        return [2, this.handleQueryTargetEvent(i)]
                                } else if (e.key === ONLINE_STATE_KEY && null !== e.newValue && (o = this.fromLocalStorageOnlineState(e.newValue)))
                                    return [2, this.handleOnlineStateEvent(o)];
                                return [2]
                            })
                        })
                    }))
                }, Object.defineProperty(e.prototype, "localClientState", {
                    get: function() {
                        return this.activeClients[this.localClientId]
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.persistClientState = function() {
                    this.setItem(this.localClientStorageKey, this.localClientState.toLocalStorageJSON())
                }, e.prototype.persistMutationState = function(e, t, n) {
                    var r = new MutationMetadata(this.currentUser, e, t, n), i = this.toLocalStorageMutationBatchKey(e);
                    this.setItem(i, r.toLocalStorageJSON())
                }, e.prototype.removeMutationState = function(e) {
                    var t = this.toLocalStorageMutationBatchKey(e);
                    this.removeItem(t)
                }, e.prototype.persistOnlineState = function(e) {
                    var t = {
                        clientId: this.localClientId,
                        onlineState: OnlineState[e]
                    };
                    this.storage.setItem(ONLINE_STATE_KEY, JSON.stringify(t))
                }, e.prototype.persistQueryTargetState = function(e, t, n) {
                    var r = this.toLocalStorageQueryTargetMetadataKey(e), i = new QueryTargetMetadata(e, t, n);
                    this.setItem(r, i.toLocalStorageJSON())
                }, e.prototype.toLocalStorageClientStateKey = function(e) {
                    return assert( - 1 === e.indexOf("_"), "Client key cannot contain '_', but was '" + e + "'"), CLIENT_STATE_KEY_PREFIX + "_" + this.persistenceKey + "_" + e
                }, e.prototype.toLocalStorageQueryTargetMetadataKey = function(e) {
                    return QUERY_TARGET_KEY_PREFIX + "_" + this.persistenceKey + "_" + e
                }, e.prototype.toLocalStorageMutationBatchKey = function(e) {
                    var t = MUTATION_BATCH_KEY_PREFIX + "_" + this.persistenceKey + "_" + e;
                    return this.currentUser.isAuthenticated() && (t += "_" + this.currentUser.uid), t
                }, e.prototype.fromLocalStorageClientStateKey = function(e) {
                    var t = this.clientStateKeyRe.exec(e);
                    return t ? t[1] : null
                }, e.prototype.fromLocalStorageClientState = function(e, t) {
                    var n = this.fromLocalStorageClientStateKey(e);
                    return assert(null !== n, "Cannot parse client state key '" + e + "'"), RemoteClientState.fromLocalStorageEntry(n, t)
                }, e.prototype.fromLocalStorageMutationMetadata = function(e, t) {
                    var n = this.mutationBatchKeyRe.exec(e);
                    assert(null !== n, "Cannot parse mutation batch key '" + e + "'");
                    var r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
                    return MutationMetadata.fromLocalStorageEntry(new User(i), r, t)
                }, e.prototype.fromLocalStorageQueryTargetMetadata = function(e, t) {
                    var n = this.queryTargetKeyRe.exec(e);
                    assert(null !== n, "Cannot parse query target key '" + e + "'");
                    var r = Number(n[1]);
                    return QueryTargetMetadata.fromLocalStorageEntry(r, t)
                }, e.prototype.fromLocalStorageOnlineState = function(e) {
                    return SharedOnlineState.fromLocalStorageEntry(e)
                }, e.prototype.handleMutationBatchEvent = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(t) {
                            return e.user.uid !== this.currentUser.uid ? (debug(LOG_TAG$10, "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.syncEngine.applyBatchState(e.batchId, e.state, e.error)]
                        })
                    })
                }, e.prototype.handleQueryTargetEvent = function(e) {
                    return this.syncEngine.applyTargetState(e.targetId, e.state, e.error)
                }, e.prototype.handleClientStateEvent = function(e, t) {
                    var n = this, r = this.getAllActiveQueryTargets();
                    t ? this.activeClients[e] = t : delete this.activeClients[e];
                    var i = this.getAllActiveQueryTargets(), o = [], a = [];
                    return i.forEach(function(e) {
                        return __awaiter(n, void 0, void 0, function() {
                            return __generator(this, function(t) {
                                return r.has(e) || o.push(e), [2]
                            })
                        })
                    }), r.forEach(function(e) {
                        return __awaiter(n, void 0, void 0, function() {
                            return __generator(this, function(t) {
                                return i.has(e) || a.push(e), [2]
                            })
                        })
                    }), this.syncEngine.applyActiveTargetsChange(o, a)
                }, e.prototype.handleOnlineStateEvent = function(e) {
                    this.activeClients[e.clientId] && this.onlineStateHandler(e.onlineState)
                }, e
            }(), MemorySharedClientState = function() {
                function e() {
                    this.localState = new LocalClientState, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null
                }
                return e.prototype.addPendingMutation = function(e) {}, e.prototype.updateMutationState = function(e, t, n) {}, e.prototype.addLocalQueryTarget = function(e) {
                    return this.localState.addQueryTarget(e), this.queryState[e] || "not-current"
                }, e.prototype.updateQueryState = function(e, t, n) {
                    this.queryState[e] = t
                }, e.prototype.removeLocalQueryTarget = function(e) {
                    this.localState.removeQueryTarget(e)
                }, e.prototype.clearQueryState = function(e) {
                    delete this.queryState[e]
                }, e.prototype.getAllActiveQueryTargets = function() {
                    return this.localState.activeTargetIds
                }, e.prototype.isActiveQueryTarget = function(e) {
                    return this.localState.activeTargetIds.has(e)
                }, e.prototype.start = function() {
                    return this.localState = new LocalClientState, Promise.resolve()
                }, e.prototype.handleUserChange = function(e, t, n) {}, e.prototype.setOnlineState = function(e) {}, e.prototype.shutdown = function() {}, e
            }(), LOG_TAG$11 = "FirestoreClient", DOM_EXCEPTION_ABORTED = 20, DOM_EXCEPTION_QUOTA_EXCEEDED = 22, FirestoreClient = function() {
                function e(e, t, n, r) {
                    this.platform = e, this.databaseInfo = t, this.credentials = n, this.asyncQueue = r, this.clientId = AutoId.newId()
                }
                return e.prototype.start = function(e) {
                    var t = this, n = new Deferred$1, r = new Deferred$1, i=!1;
                    return this.credentials.setChangeListener(function(o) {
                        i ? t.asyncQueue.enqueueAndForget(function() {
                            return t.handleCredentialChange(o)
                        }) : (i=!0, t.initializePersistence(e, r, o).then(function() {
                            return t.initializeRest(o)
                        }).then(n.resolve, n.reject))
                    }), this.asyncQueue.enqueueAndForget(function() {
                        return n.promise
                    }), r.promise
                }, e.prototype.enableNetwork = function() {
                    var e = this;
                    return this.asyncQueue.enqueue(function() {
                        return e.syncEngine.enableNetwork()
                    })
                }, e.prototype.initializePersistence = function(e, t, n) {
                    var r = this;
                    return e.enabled ? this.startIndexedDbPersistence(n, e).then(t.resolve).catch(function(e) {
                        return t.reject(e), r.canFallback(e) ? (console.warn("Error enabling offline storage. Falling back to storage disabled: " + e), r.startMemoryPersistence()) : Promise.reject(e)
                    }) : (t.resolve(), this.startMemoryPersistence())
                }, e.prototype.canFallback = function(e) {
                    return e instanceof FirestoreError ? e.code === Code.FAILED_PRECONDITION || e.code === Code.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || (e.code === DOM_EXCEPTION_QUOTA_EXCEEDED || e.code === DOM_EXCEPTION_ABORTED)
                }, e.prototype.startIndexedDbPersistence = function(e, t) {
                    var n = this;
                    assert(t.enabled, "Should only start IndexedDb persitence with offline persistence enabled."), this.garbageCollector = new NoOpGarbageCollector;
                    var r = IndexedDbPersistence.buildStoragePrefix(this.databaseInfo), i = new JsonProtoSerializer(this.databaseInfo.databaseId, {
                        useProto3Json: !0
                    });
                    return Promise.resolve().then(function() {
                        var o = new IndexedDbPersistence(r, n.clientId, n.platform, n.asyncQueue, i, t.experimentalTabSynchronization);
                        if (n.persistence = o, t.experimentalTabSynchronization&&!WebStorageSharedClientState.isAvailable(n.platform))
                            throw new FirestoreError(Code.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                        return n.sharedClientState = t.experimentalTabSynchronization ? new WebStorageSharedClientState(n.asyncQueue, n.platform, r, n.clientId, e) : new MemorySharedClientState, o.start()
                    })
                }, e.prototype.startMemoryPersistence = function() {
                    return this.garbageCollector = new EagerGarbageCollector, this.persistence = new MemoryPersistence(this.clientId), this.sharedClientState = new MemorySharedClientState, this.persistence.start()
                }, e.prototype.initializeRest = function(e) {
                    var t = this;
                    return debug(LOG_TAG$11, "Initializing. user=", e.uid), this.platform.loadConnection(this.databaseInfo).then(function(n) {
                        return __awaiter(t, void 0, void 0, function() {
                            var t, r, i, o, a = this;
                            return __generator(this, function(s) {
                                switch (s.label) {
                                case 0:
                                    return this.localStore = new LocalStore(this.persistence, e, this.garbageCollector, this.sharedClientState), t = this.platform.newSerializer(this.databaseInfo.databaseId), r = new Datastore(this.asyncQueue, n, this.credentials, t), i = function(e) {
                                        return a.syncEngine.applyOnlineStateChange(e, OnlineStateSource.RemoteStore)
                                    }, o = function(e) {
                                        return a.syncEngine.applyOnlineStateChange(e, OnlineStateSource.SharedClientState)
                                    }, this.remoteStore = new RemoteStore(this.localStore, r, this.asyncQueue, i), this.syncEngine = new SyncEngine(this.localStore, this.remoteStore, this.sharedClientState, e), this.sharedClientState.onlineStateHandler = o, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new EventManager(this.syncEngine), [4, this.localStore.start()];
                                case 1:
                                    return s.sent(), [4, this.sharedClientState.start()];
                                case 2:
                                    return s.sent(), [4, this.remoteStore.start()];
                                case 3:
                                    return s.sent(), [4, this.persistence.setPrimaryStateListener(function(e) {
                                        return a.syncEngine.applyPrimaryState(e)
                                    })];
                                case 4:
                                    return s.sent(), [2]
                                }
                            })
                        })
                    })
                }, e.prototype.handleCredentialChange = function(e) {
                    return this.asyncQueue.verifyOperationInProgress(), debug(LOG_TAG$11, "Credential Changed. Current user: " + e.uid), this.syncEngine.handleCredentialChange(e)
                }, e.prototype.disableNetwork = function() {
                    var e = this;
                    return this.asyncQueue.enqueue(function() {
                        return e.syncEngine.disableNetwork()
                    })
                }, e.prototype.shutdown = function(e) {
                    var t = this;
                    return this.asyncQueue.enqueue(function() {
                        return __awaiter(t, void 0, void 0, function() {
                            return __generator(this, function(t) {
                                switch (t.label) {
                                case 0:
                                    return [4, this.remoteStore.shutdown()];
                                case 1:
                                    return t.sent(), [4, this.sharedClientState.shutdown()];
                                case 2:
                                    return t.sent(), [4, this.persistence.shutdown(e && e.purgePersistenceWithDataLoss)];
                                case 3:
                                    return t.sent(), this.credentials.removeChangeListener(), [2]
                                }
                            })
                        })
                    })
                }, e.prototype.listen = function(e, t, n) {
                    var r = this, i = new QueryListener(e, t, n);
                    return this.asyncQueue.enqueueAndForget(function() {
                        return r.eventMgr.listen(i)
                    }), i
                }, e.prototype.unlisten = function(e) {
                    var t = this;
                    this.asyncQueue.enqueueAndForget(function() {
                        return t.eventMgr.unlisten(e)
                    })
                }, e.prototype.getDocumentFromLocalCache = function(e) {
                    var t = this;
                    return this.asyncQueue.enqueue(function() {
                        return t.localStore.readDocument(e)
                    }).then(function(e) {
                        if (e instanceof Document)
                            return e;
                        if (e instanceof NoDocument)
                            return null;
                        throw new FirestoreError(Code.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")
                    })
                }, e.prototype.getDocumentsFromLocalCache = function(e) {
                    var t = this;
                    return this.asyncQueue.enqueue(function() {
                        return t.localStore.executeQuery(e)
                    }).then(function(t) {
                        var n = documentKeySet(), r = new View(e, n), i = r.computeDocChanges(t);
                        return r.applyChanges(i, !1).snapshot
                    })
                }, e.prototype.write = function(e) {
                    var t = this, n = new Deferred$1;
                    return this.asyncQueue.enqueueAndForget(function() {
                        return t.syncEngine.write(e, n)
                    }), n.promise
                }, e.prototype.databaseId = function() {
                    return this.databaseInfo.databaseId
                }, e.prototype.transaction = function(e) {
                    var t = this;
                    return this.asyncQueue.enqueue(function() {
                        return __awaiter(t, void 0, void 0, function() {
                            return __generator(this, function(e) {
                                return [2]
                            })
                        })
                    }).then(function() {
                        return t.syncEngine.runTransaction(e)
                    })
                }, e
            }(), AsyncObserver = function() {
                function e(e) {
                    this.observer = e, this.muted=!1
                }
                return e.prototype.next = function(e) {
                    this.scheduleEvent(this.observer.next, e)
                }, e.prototype.error = function(e) {
                    this.scheduleEvent(this.observer.error, e)
                }, e.prototype.mute = function() {
                    this.muted=!0
                }, e.prototype.scheduleEvent = function(e, t) {
                    var n = this;
                    this.muted || setTimeout(function() {
                        n.muted || e(t)
                    }, 0)
                }, e
            }(), OAuthToken = function() {
                return function(e, t) {
                    this.user = t, this.type = "OAuth", this.authHeaders = {
                        Authorization: "Bearer " + e
                    }
                }
            }(), EmptyCredentialsProvider = function() {
                function e() {
                    this.changeListener = null
                }
                return e.prototype.getToken = function() {
                    return Promise.resolve(null)
                }, e.prototype.invalidateToken = function() {}, e.prototype.setChangeListener = function(e) {
                    assert(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = e, e(User.UNAUTHENTICATED)
                }, e.prototype.removeChangeListener = function() {
                    assert(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null
                }, e
            }(), FirebaseCredentialsProvider = function() {
                function e(e) {
                    var t = this;
                    this.app = e, this.tokenListener = null, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh=!1, this.tokenListener = function() {
                        t.tokenCounter++, t.currentUser = t.getUser(), t.changeListener && t.changeListener(t.currentUser)
                    }, this.tokenCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
                }
                return e.prototype.getToken = function() {
                    var e = this;
                    assert(null != this.tokenListener, "getToken cannot be called after listener removed.");
                    var t = this.tokenCounter, n = this.forceRefresh;
                    return this.forceRefresh=!1, this.app.INTERNAL.getToken(n).then(function(n) {
                        if (e.tokenCounter !== t)
                            throw new FirestoreError(Code.ABORTED, "getToken aborted due to token change.");
                        return n ? (assert("string" == typeof n.accessToken, "Invalid tokenData returned from getToken():" + n), new OAuthToken(n.accessToken, e.currentUser)) : null
                    })
                }, e.prototype.invalidateToken = function() {
                    this.forceRefresh=!0
                }, e.prototype.setChangeListener = function(e) {
                    assert(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = e, this.currentUser && e(this.currentUser)
                }, e.prototype.removeChangeListener = function() {
                    assert(null != this.tokenListener, "removeChangeListener() called twice"), assert(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null
                }, e.prototype.getUser = function() {
                    var e = this.app.INTERNAL.getUid();
                    return assert(null === e || "string" == typeof e, "Received invalid UID: " + e), new User(e)
                }, e
            }(), FirstPartyToken = function() {
                function e(e, t) {
                    this.gapi = e, this.sessionIndex = t, this.type = "FirstParty", this.user = User.FIRST_PARTY, assert(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                }
                return Object.defineProperty(e.prototype, "authHeaders", {
                    get: function() {
                        return {
                            Authorization: this.gapi.auth.getAuthHeaderValueForFirstParty([]),
                            "X-Goog-AuthUser": this.sessionIndex
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(), FirstPartyCredentialsProvider = function() {
                function e(e, t) {
                    this.gapi = e, this.sessionIndex = t, assert(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                }
                return e.prototype.getToken = function() {
                    return Promise.resolve(new FirstPartyToken(this.gapi, this.sessionIndex))
                }, e.prototype.setChangeListener = function(e) {
                    e(User.FIRST_PARTY)
                }, e.prototype.removeChangeListener = function() {}, e.prototype.invalidateToken = function() {}, e
            }();
            function makeCredentialsProvider(e) {
                if (!e)
                    return new EmptyCredentialsProvider;
                switch (e.type) {
                case"gapi":
                    return new FirstPartyCredentialsProvider(e.client, e.sessionIndex || "0");
                case"provider":
                    return e.client;
                default:
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                }
            }
            function isPartialObserver(e) {
                return implementsAnyMethods$1(e, ["next", "error", "complete"])
            }
            function implementsAnyMethods$1(e, t) {
                if ("object" != typeof e || null === e)
                    return !1;
                for (var n = e, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    if (o in n && "function" == typeof n[o])
                        return !0
                }
                return !1
            }
            var FieldValueImpl = function() {
                function e(e) {
                    this.methodName = e
                }
                return e.delete = function() {
                    return DeleteFieldValueImpl.instance
                }, e.serverTimestamp = function() {
                    return ServerTimestampFieldValueImpl.instance
                }, e.arrayUnion = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return validateAtLeastNumberOfArgs("FieldValue.arrayUnion", arguments, 1), new ArrayUnionFieldValueImpl(e)
                }, e.arrayRemove = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return validateAtLeastNumberOfArgs("FieldValue.arrayRemove", arguments, 1), new ArrayRemoveFieldValueImpl(e)
                }, e.prototype.isEqual = function(e) {
                    return this === e
                }, e
            }(), DeleteFieldValueImpl = function(e) {
                function t() {
                    return e.call(this, "FieldValue.delete") || this
                }
                return __extends(t, e), t.instance = new t, t
            }(FieldValueImpl), ServerTimestampFieldValueImpl = function(e) {
                function t() {
                    return e.call(this, "FieldValue.serverTimestamp") || this
                }
                return __extends(t, e), t.instance = new t, t
            }(FieldValueImpl), ArrayUnionFieldValueImpl = function(e) {
                function t(t) {
                    var n = e.call(this, "FieldValue.arrayUnion") || this;
                    return n._elements = t, n
                }
                return __extends(t, e), t
            }(FieldValueImpl), ArrayRemoveFieldValueImpl = function(e) {
                function t(t) {
                    var n = e.call(this, "FieldValue.arrayRemove") || this;
                    return n._elements = t, n
                }
                return __extends(t, e), t
            }(FieldValueImpl), PublicFieldValue = makeConstructorPrivate(FieldValueImpl, "Use FieldValue.<field>() instead."), RESERVED_FIELD_REGEX = /^__.*__$/, ParsedSetData = function() {
                function e(e, t, n) {
                    this.data = e, this.fieldMask = t, this.fieldTransforms = n
                }
                return e.prototype.toMutations = function(e, t) {
                    var n = [];
                    return null !== this.fieldMask ? n.push(new PatchMutation(e, this.data, this.fieldMask, t)) : n.push(new SetMutation(e, this.data, t)), this.fieldTransforms.length > 0 && n.push(new TransformMutation(e, this.fieldTransforms)), n
                }, e
            }(), ParsedUpdateData = function() {
                function e(e, t, n) {
                    this.data = e, this.fieldMask = t, this.fieldTransforms = n
                }
                return e.prototype.toMutations = function(e, t) {
                    var n = [new PatchMutation(e, this.data, this.fieldMask, t)];
                    return this.fieldTransforms.length > 0 && n.push(new TransformMutation(e, this.fieldTransforms)), n
                }, e
            }(), UserDataSource;
            function isWrite(e) {
                switch (e) {
                case UserDataSource.Set:
                case UserDataSource.MergeSet:
                case UserDataSource.Update:
                    return !0;
                case UserDataSource.Argument:
                    return !1;
                default:
                    throw fail("Unexpected case for UserDataSource: " + e)
                }
            }
            !function(e) {
                e[e.Set = 0] = "Set", e[e.Update = 1] = "Update", e[e.MergeSet = 2] = "MergeSet", e[e.Argument = 3] = "Argument"
            }(UserDataSource || (UserDataSource = {}));
            var ParseContext = function() {
                function e(e, t, n, r, i, o) {
                    this.dataSource = e, this.methodName = t, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || []
                }
                return e.prototype.childContextForField = function(t) {
                    var n = null == this.path ? null: this.path.child(t), r = new e(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                    return r.validatePathSegment(t), r
                }, e.prototype.childContextForFieldPath = function(t) {
                    var n = null == this.path ? null: this.path.child(t), r = new e(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                    return r.validatePath(), r
                }, e.prototype.childContextForArray = function(t) {
                    return new e(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask)
                }, e.prototype.createError = function(e) {
                    var t = null === this.path || this.path.isEmpty() ? "": " (found in field " + this.path.toString() + ")";
                    return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + e + t)
                }, e.prototype.contains = function(e) {
                    return void 0 !== this.fieldMask.find(function(t) {
                        return e.isPrefixOf(t)
                    }) || void 0 !== this.fieldTransforms.find(function(t) {
                        return e.isPrefixOf(t.field)
                    })
                }, e.prototype.validatePath = function() {
                    if (null !== this.path)
                        for (var e = 0; e < this.path.length; e++)
                            this.validatePathSegment(this.path.get(e))
                }, e.prototype.validatePathSegment = function(e) {
                    if (isWrite(this.dataSource) && RESERVED_FIELD_REGEX.test(e))
                        throw this.createError("Document fields cannot begin and end with __")
                }, e
            }(), DocumentKeyReference = function() {
                return function(e, t) {
                    this.databaseId = e, this.key = t
                }
            }(), UserDataConverter = function() {
                function e(e) {
                    this.preConverter = e
                }
                return e.prototype.parseSetData = function(e, t) {
                    var n = new ParseContext(UserDataSource.Set, e, FieldPath.EMPTY_PATH);
                    validatePlainObject("Data must be an object, but it was:", n, t);
                    var r = this.parseData(t, n);
                    return new ParsedSetData(r, null, n.fieldTransforms)
                }, e.prototype.parseMergeData = function(e, t, n) {
                    var r = new ParseContext(UserDataSource.MergeSet, e, FieldPath.EMPTY_PATH);
                    validatePlainObject("Data must be an object, but it was:", r, t);
                    var i, o, a = this.parseData(t, r);
                    if (n) {
                        for (var s = [], u = 0, c = n; u < c.length; u++) {
                            var h = c[u], l = void 0;
                            if (h instanceof FieldPath$1 ? l = h : "string" == typeof h ? l = fieldPathFromDotSeparatedString(e, h) : fail("Expected stringOrFieldPath to be a string or a FieldPath"), !r.contains(l))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                            s.push(l)
                        }
                        i = new FieldMask(s), o = r.fieldTransforms.filter(function(e) {
                            return i.covers(e.field)
                        })
                    } else 
                        i = new FieldMask(r.fieldMask), o = r.fieldTransforms;
                    return new ParsedSetData(a, i, o)
                }, e.prototype.parseUpdateData = function(e, t) {
                    var n = this, r = new ParseContext(UserDataSource.Update, e, FieldPath.EMPTY_PATH);
                    validatePlainObject("Data must be an object, but it was:", r, t);
                    var i = [], o = ObjectValue.EMPTY;
                    forEach(t, function(t, a) {
                        var s = fieldPathFromDotSeparatedString(e, t), u = r.childContextForFieldPath(s);
                        if ((a = n.runPreConverter(a, u))instanceof DeleteFieldValueImpl)
                            i.push(s);
                        else {
                            var c = n.parseData(a, u);
                            null != c && (i.push(s), o = o.set(s, c))
                        }
                    });
                    var a = new FieldMask(i);
                    return new ParsedUpdateData(o, a, r.fieldTransforms)
                }, e.prototype.parseUpdateVarargs = function(e, t, n, r) {
                    var i = new ParseContext(UserDataSource.Update, e, FieldPath.EMPTY_PATH), o = [fieldPathFromArgument(e, t)], a = [n];
                    if (r.length%2 != 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
                    for (var s = 0; s < r.length; s += 2)
                        o.push(fieldPathFromArgument(e, r[s])), a.push(r[s + 1]);
                    var u = [], c = ObjectValue.EMPTY;
                    for (s = 0; s < o.length; ++s) {
                        var h = o[s], l = i.childContextForFieldPath(h), d = this.runPreConverter(a[s], l);
                        if (d instanceof DeleteFieldValueImpl)
                            u.push(h);
                        else {
                            var f = this.parseData(d, l);
                            null != f && (u.push(h), c = c.set(h, f))
                        }
                    }
                    var p = new FieldMask(u);
                    return new ParsedUpdateData(c, p, i.fieldTransforms)
                }, e.prototype.parseQueryValue = function(e, t) {
                    var n = new ParseContext(UserDataSource.Argument, e, FieldPath.EMPTY_PATH), r = this.parseData(t, n);
                    return assert(null != r, "Parsed data should not be null."), assert(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r
                }, e.prototype.runPreConverter = function(e, t) {
                    try {
                        return this.preConverter(e)
                    } catch (e) {
                        var n = errorMessage(e);
                        throw t.createError(n)
                    }
                }, e.prototype.parseData = function(e, t) {
                    if (looksLikeJsonObject(e = this.runPreConverter(e, t)))
                        return validatePlainObject("Unsupported field value:", t, e), this.parseObject(e, t);
                    if (e instanceof FieldValueImpl)
                        return this.parseSentinelFieldValue(e, t), null;
                    if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
                        if (t.arrayElement)
                            throw t.createError("Nested arrays are not supported");
                        return this.parseArray(e, t)
                    }
                    return this.parseScalarValue(e, t)
                }, e.prototype.parseObject = function(e, t) {
                    var n = this, r = new SortedMap(primitiveComparator);
                    return forEach(e, function(e, i) {
                        var o = n.parseData(i, t.childContextForField(e));
                        null != o && (r = r.insert(e, o))
                    }), new ObjectValue(r)
                }, e.prototype.parseArray = function(e, t) {
                    for (var n = [], r = 0, i = 0, o = e; i < o.length; i++) {
                        var a = o[i], s = this.parseData(a, t.childContextForArray(r));
                        null == s && (s = NullValue.INSTANCE), n.push(s), r++
                    }
                    return new ArrayValue(n)
                }, e.prototype.parseSentinelFieldValue = function(e, t) {
                    if (!isWrite(t.dataSource))
                        throw t.createError(e.methodName + "() can only be used with update() and set()");
                    if (null === t.path)
                        throw t.createError(e.methodName + "() is not currently supported inside arrays");
                    if (e instanceof DeleteFieldValueImpl) {
                        if (t.dataSource !== UserDataSource.MergeSet)
                            throw t.dataSource === UserDataSource.Update ? (assert(t.path.length > 0, "FieldValue.delete() at the top level should have already been handled."), t.createError("FieldValue.delete() can only appear at the top level of your update data")) : t.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                        t.fieldMask.push(t.path)
                    } else if (e instanceof ServerTimestampFieldValueImpl)
                        t.fieldTransforms.push(new FieldTransform(t.path, ServerTimestampTransform.instance));
                    else if (e instanceof ArrayUnionFieldValueImpl) {
                        var n = this.parseArrayTransformElements(e.methodName, e._elements), r = new ArrayUnionTransformOperation(n);
                        t.fieldTransforms.push(new FieldTransform(t.path, r))
                    } else if (e instanceof ArrayRemoveFieldValueImpl) {
                        n = this.parseArrayTransformElements(e.methodName, e._elements);
                        var i = new ArrayRemoveTransformOperation(n);
                        t.fieldTransforms.push(new FieldTransform(t.path, i))
                    } else 
                        fail("Unknown FieldValue type: " + e)
                }, e.prototype.parseScalarValue = function(e, t) {
                    if (null === e)
                        return NullValue.INSTANCE;
                    if ("number" == typeof e)
                        return isSafeInteger(e) ? new IntegerValue(e) : new DoubleValue(e);
                    if ("boolean" == typeof e)
                        return BooleanValue.of(e);
                    if ("string" == typeof e)
                        return new StringValue(e);
                    if (e instanceof Date)
                        return new TimestampValue(Timestamp.fromDate(e));
                    if (e instanceof Timestamp)
                        return new TimestampValue(new Timestamp(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3)));
                    if (e instanceof GeoPoint)
                        return new GeoPointValue(e);
                    if (e instanceof Blob)
                        return new BlobValue(e);
                    if (e instanceof DocumentKeyReference)
                        return new RefValue(e.databaseId, e.key);
                    throw t.createError("Unsupported field value: " + valueDescription(e))
                }, e.prototype.parseArrayTransformElements = function(e, t) {
                    var n = this;
                    return t.map(function(t, r) {
                        var i = new ParseContext(UserDataSource.Argument, e, FieldPath.EMPTY_PATH);
                        return n.parseData(t, i.childContextForArray(r))
                    })
                }, e
            }();
            function looksLikeJsonObject(e) {
                return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Blob || e instanceof DocumentKeyReference || e instanceof FieldValueImpl)
            }
            function validatePlainObject(e, t, n) {
                if (!looksLikeJsonObject(n) ||!isPlainObject(n)) {
                    var r = valueDescription(n);
                    throw "an object" === r ? t.createError(e + " a custom object") : t.createError(e + " " + r)
                }
            }
            function fieldPathFromArgument(e, t) {
                if (t instanceof FieldPath$1)
                    return t._internalPath;
                if ("string" == typeof t)
                    return fieldPathFromDotSeparatedString(e, t);
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }
            function fieldPathFromDotSeparatedString(e, t) {
                try {
                    return fromDotSeparatedString(t)._internalPath
                } catch (t) {
                    var n = errorMessage(t);
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. " + n)
                }
            }
            function errorMessage(e) {
                return e instanceof Error ? e.message : e.toString()
            }
            var DEFAULT_HOST = "firestore.googleapis.com", DEFAULT_SSL=!0, DEFAULT_TIMESTAMPS_IN_SNAPSHOTS=!1, DEFAULT_SYNCHRONIZE_TABS=!1, FirestoreSettings = function() {
                function e(e) {
                    if (void 0 === e.host) {
                        if (void 0 !== e.ssl)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                        this.host = DEFAULT_HOST, this.ssl = DEFAULT_SSL
                    } else 
                        validateNamedType("settings", "string", "host", e.host), this.host = e.host, validateNamedOptionalType("settings", "boolean", "ssl", e.ssl), this.ssl = defaulted(e.ssl, DEFAULT_SSL);
                    validateOptionNames("settings", e, ["host", "ssl", "credentials", "timestampsInSnapshots"]), validateNamedOptionalType("settings", "object", "credentials", e.credentials), this.credentials = e.credentials, validateNamedOptionalType("settings", "boolean", "timestampsInSnapshots", e.timestampsInSnapshots), this.timestampsInSnapshots = defaulted(e.timestampsInSnapshots, DEFAULT_TIMESTAMPS_IN_SNAPSHOTS)
                }
                return e.prototype.isEqual = function(e) {
                    return this.host === e.host && this.ssl === e.ssl && this.timestampsInSnapshots === e.timestampsInSnapshots && this.credentials === e.credentials
                }, e
            }(), FirestoreConfig = function() {
                return function() {}
            }(), PersistenceSettings = function() {
                function e(e, t) {
                    this.enabled = e, assert(e ||!t, "Can only provide PersistenceSettings with persistence enabled"), t = t || {}, this.experimentalTabSynchronization = defaulted(t.experimentalTabSynchronization, DEFAULT_SYNCHRONIZE_TABS)
                }
                return e.prototype.isEqual = function(e) {
                    return this.enabled === e.enabled && this.experimentalTabSynchronization === e.experimentalTabSynchronization
                }, e
            }(), Firestore = function() {
                function e(t) {
                    var n = this;
                    this._queue = new AsyncQueue, this.INTERNAL = {
                        delete: function(e) {
                            return __awaiter(n,
                            void 0,
                            void 0,
                            function() {
                                return __generator(this,
                                function(t) {
                                    return this._firestoreClient ? [2,
                                    this._firestoreClient.shutdown(e)]: [2]
                                })
                            })
                        }
                    }; var r = new FirestoreConfig; if ("object" == typeof t.options) {
                        var i = t;
                        r.firebaseApp = i, r.databaseId = e.databaseIdFromApp(i), r.persistenceKey = r.firebaseApp.name, r.credentials = new FirebaseCredentialsProvider(i)
                    } else {
                        var o = t;
                        if (!o.projectId)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Must provide projectId");
                        r.databaseId = new DatabaseId(o.projectId, o.database), r.persistenceKey = "[DEFAULT]", r.credentials = new EmptyCredentialsProvider
                    }
                    r.settings = new FirestoreSettings({}), this._config = r, this._databaseId = r.databaseId
                }
                return e.prototype.settings = function(e) {
                    if (validateExactNumberOfArgs("Firestore.settings", arguments, 1), validateArgType("Firestore.settings", "object", 1, e), contains(e, "persistence"))
                        throw new FirestoreError(Code.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                    var t = new FirestoreSettings(e);
                    if (this._firestoreClient&&!this._config.settings.isEqual(t))
                        throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                    this._config.settings = t, void 0 !== t.credentials && (this._config.credentials = makeCredentialsProvider(t.credentials))
                }, e.prototype.enableNetwork = function() {
                    return this.ensureClientConfigured(), this._firestoreClient.enableNetwork()
                }, e.prototype.disableNetwork = function() {
                    return this.ensureClientConfigured(), this._firestoreClient.disableNetwork()
                }, e.prototype.enablePersistence = function(e) {
                    if (this._firestoreClient)
                        throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                    return this.configureClient(new PersistenceSettings(!0, e))
                }, e.prototype.ensureClientConfigured = function() {
                    return this._firestoreClient || this.configureClient(new PersistenceSettings(!1)), this._firestoreClient
                }, e.prototype.configureClient = function(e) {
                    var t = this;
                    assert(!!this._config.settings.host, "FirestoreSettings.host cannot be falsey"), this._config.settings.timestampsInSnapshots || error("\nThe behavior for Date objects stored in Firestore is going to change\nAND YOUR APP MAY BREAK.\nTo hide this warning and ensure your app does not break, you need to add the\nfollowing code to your app before calling any other Cloud Firestore methods:\n\n  const firestore = firebase.firestore();\n  const settings = {/* your settings... */ timestampsInSnapshots: true};\n  firestore.settings(settings);\n\nWith this change, timestamps stored in Cloud Firestore will be read back as\nFirebase Timestamp objects instead of as system Date objects. So you will also\nneed to update code expecting a Date to instead expect a Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at');\n  const date = timestamp.toDate();\n\nPlease audit all existing usages of Date when you enable the new behavior. In a\nfuture release, the behavior will change to the new behavior, so if you do not\nfollow these steps, YOUR APP MAY BREAK."), assert(!this._firestoreClient, "configureClient() called multiple times");
                    var n = new DatabaseInfo(this._config.databaseId, this._config.persistenceKey, this._config.settings.host, this._config.settings.ssl);
                    return this._dataConverter = new UserDataConverter(function(e) {
                        if (e instanceof DocumentReference) {
                            var n = t._config.databaseId, r = e.firestore._config.databaseId;
                            if (!r.isEqual(n))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                            return new DocumentKeyReference(t._config.databaseId, e._key)
                        }
                        return e
                    }), this._firestoreClient = new FirestoreClient(PlatformSupport.getPlatform(), n, this._config.credentials, this._queue), this._firestoreClient.start(e)
                }, e.databaseIdFromApp = function(e) {
                    var t = e.options;
                    if (!contains(t, "projectId")) {
                        if (contains(t, "firestoreId"))
                            throw new FirestoreError(Code.INVALID_ARGUMENT, '"firestoreId" is now specified as "projectId" in firebase.initializeApp.');
                        throw new FirestoreError(Code.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.')
                    }
                    if (contains(t, "firestoreOptions"))
                        throw new FirestoreError(Code.INVALID_ARGUMENT, '"firestoreOptions" values are now specified with Firestore.settings()');
                    var n = t.projectId;
                    if (!n || "string" != typeof n)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                    return new DatabaseId(n)
                }, Object.defineProperty(e.prototype, "app", {
                    get: function() {
                        if (!this._config.firebaseApp)
                            throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                        return this._config.firebaseApp
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.collection = function(e) {
                    if (validateExactNumberOfArgs("Firestore.collection", arguments, 1), validateArgType("Firestore.collection", "string", 1, e), !e)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Must provide a non-empty collection path to collection()");
                    return this.ensureClientConfigured(), new CollectionReference(ResourcePath.fromString(e), this)
                }, e.prototype.doc = function(e) {
                    if (validateExactNumberOfArgs("Firestore.doc", arguments, 1), validateArgType("Firestore.doc", "string", 1, e), !e)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Must provide a non-empty document path to doc()");
                    return this.ensureClientConfigured(), DocumentReference.forPath(ResourcePath.fromString(e), this)
                }, e.prototype.runTransaction = function(e) {
                    var t = this;
                    return validateExactNumberOfArgs("Firestore.runTransaction", arguments, 1), validateArgType("Firestore.runTransaction", "function", 1, e), this.ensureClientConfigured().transaction(function(n) {
                        return e(new Transaction$1(t, n))
                    })
                }, e.prototype.batch = function() {
                    return this.ensureClientConfigured(), new WriteBatch(this)
                }, Object.defineProperty(e, "logLevel", {
                    get: function() {
                        switch (getLogLevel()) {
                        case LogLevel$1.DEBUG:
                            return "debug";
                        case LogLevel$1.ERROR:
                            return "error";
                        case LogLevel$1.SILENT:
                            return "silent";
                        default:
                            return fail("Unknown log level: " + getLogLevel())
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.setLogLevel = function(e) {
                    switch (validateExactNumberOfArgs("Firestore.setLogLevel", arguments, 1), validateArgType("Firestore.setLogLevel", "string", 1, e), e) {
                    case"debug":
                        setLogLevel$1(LogLevel$1.DEBUG);
                        break;
                    case"error":
                        setLogLevel$1(LogLevel$1.ERROR);
                        break;
                    case"silent":
                        setLogLevel$1(LogLevel$1.SILENT);
                        break;
                    default:
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid log level: " + e)
                    }
                }, e.prototype._areTimestampsInSnapshotsEnabled = function() {
                    return this._config.settings.timestampsInSnapshots
                }, e
            }(), Transaction$1 = function() {
                function e(e, t) {
                    this._firestore = e, this._transaction = t
                }
                return e.prototype.get = function(e) {
                    var t = this;
                    validateExactNumberOfArgs("Transaction.get", arguments, 1);
                    var n = validateReference("Transaction.get", e, this._firestore);
                    return this._transaction.lookup([n._key]).then(function(e) {
                        if (!e || 1 !== e.length)
                            return fail("Mismatch in docs returned from document lookup.");
                        var r = e[0];
                        return r instanceof NoDocument ? new DocumentSnapshot(t._firestore, n._key, null, !1) : r instanceof Document ? new DocumentSnapshot(t._firestore, n._key, r, !1) : void fail("MaybeDocument is neither Document nor NoDocument")
                    })
                }, e.prototype.set = function(e, t, n) {
                    validateBetweenNumberOfArgs("Transaction.set", arguments, 2, 3);
                    var r = validateReference("Transaction.set", e, this._firestore), i = (n = validateSetOptions("Transaction.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("Transaction.set", t, n.mergeFields): this._firestore._dataConverter.parseSetData("Transaction.set", t);
                    return this._transaction.set(r._key, i), this
                }, e.prototype.update = function(e, t, n) {
                    for (var r, i, o = [], a = 3; a < arguments.length; a++)
                        o[a - 3] = arguments[a];
                    return "string" == typeof t || t instanceof FieldPath$1 ? (validateAtLeastNumberOfArgs("Transaction.update", arguments, 3), r = validateReference("Transaction.update", e, this._firestore), i = this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", t, n, o)) : (validateExactNumberOfArgs("Transaction.update", arguments, 2), r = validateReference("Transaction.update", e, this._firestore), i = this._firestore._dataConverter.parseUpdateData("Transaction.update", t)), this._transaction.update(r._key, i), this
                }, e.prototype.delete = function(e) {
                    validateExactNumberOfArgs("Transaction.delete", arguments, 1);
                    var t = validateReference("Transaction.delete", e, this._firestore);
                    return this._transaction.delete(t._key), this
                }, e
            }(), WriteBatch = function() {
                function e(e) {
                    this._firestore = e, this._mutations = [], this._committed=!1
                }
                return e.prototype.set = function(e, t, n) {
                    validateBetweenNumberOfArgs("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                    var r = validateReference("WriteBatch.set", e, this._firestore), i = (n = validateSetOptions("WriteBatch.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("WriteBatch.set", t, n.mergeFields): this._firestore._dataConverter.parseSetData("WriteBatch.set", t);
                    return this._mutations = this._mutations.concat(i.toMutations(r._key, Precondition.NONE)), this
                }, e.prototype.update = function(e, t, n) {
                    for (var r, i, o = [], a = 3; a < arguments.length; a++)
                        o[a - 3] = arguments[a];
                    return this.verifyNotCommitted(), "string" == typeof t || t instanceof FieldPath$1 ? (validateAtLeastNumberOfArgs("WriteBatch.update", arguments, 3), r = validateReference("WriteBatch.update", e, this._firestore), i = this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", t, n, o)) : (validateExactNumberOfArgs("WriteBatch.update", arguments, 2), r = validateReference("WriteBatch.update", e, this._firestore), i = this._firestore._dataConverter.parseUpdateData("WriteBatch.update", t)), this._mutations = this._mutations.concat(i.toMutations(r._key, Precondition.exists(!0))), this
                }, e.prototype.delete = function(e) {
                    validateExactNumberOfArgs("WriteBatch.delete", arguments, 1), this.verifyNotCommitted();
                    var t = validateReference("WriteBatch.delete", e, this._firestore);
                    return this._mutations = this._mutations.concat(new DeleteMutation(t._key, Precondition.NONE)), this
                }, e.prototype.commit = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this.verifyNotCommitted(), this._committed=!0, this._mutations.length > 0 ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2]
                        })
                    })
                }, e.prototype.verifyNotCommitted = function() {
                    if (this._committed)
                        throw new FirestoreError(Code.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                }, e
            }(), DocumentReference = function() {
                function e(e, t) {
                    this._key = e, this.firestore = t, this._firestoreClient = this.firestore.ensureClientConfigured()
                }
                return e.forPath = function(t, n) {
                    if (t.length%2 != 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length);
                    return new e(new DocumentKey(t), n)
                }, Object.defineProperty(e.prototype, "id", {
                    get: function() {
                        return this._key.path.lastSegment()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "parent", {
                    get: function() {
                        return new CollectionReference(this._key.path.popLast(), this.firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "path", {
                    get: function() {
                        return this._key.path.canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.collection = function(e) {
                    if (validateExactNumberOfArgs("DocumentReference.collection", arguments, 1), validateArgType("DocumentReference.collection", "string", 1, e), !e)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                    var t = ResourcePath.fromString(e);
                    return new CollectionReference(this._key.path.child(t), this.firestore)
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        throw invalidClassError("isEqual", "DocumentReference", 1, t);
                    return this.firestore === t.firestore && this._key.isEqual(t._key)
                }, e.prototype.set = function(e, t) {
                    validateBetweenNumberOfArgs("DocumentReference.set", arguments, 1, 2);
                    var n = (t = validateSetOptions("DocumentReference.set", t)).merge || t.mergeFields ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", e, t.mergeFields): this.firestore._dataConverter.parseSetData("DocumentReference.set", e);
                    return this._firestoreClient.write(n.toMutations(this._key, Precondition.NONE))
                }, e.prototype.update = function(e, t) {
                    for (var n, r = [], i = 2; i < arguments.length; i++)
                        r[i - 2] = arguments[i];
                    return "string" == typeof e || e instanceof FieldPath$1 ? (validateAtLeastNumberOfArgs("DocumentReference.update", arguments, 2), n = this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", e, t, r)) : (validateExactNumberOfArgs("DocumentReference.update", arguments, 1), n = this.firestore._dataConverter.parseUpdateData("DocumentReference.update", e)), this._firestoreClient.write(n.toMutations(this._key, Precondition.exists(!0)))
                }, e.prototype.delete = function() {
                    return validateExactNumberOfArgs("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new DeleteMutation(this._key, Precondition.NONE)])
                }, e.prototype.onSnapshot = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    validateBetweenNumberOfArgs("DocumentReference.onSnapshot", arguments, 1, 4);
                    var n, r = {
                        includeMetadataChanges: !1
                    }, i = 0;
                    "object" != typeof e[i] || isPartialObserver(e[i]) || (validateOptionNames("DocumentReference.onSnapshot", r = e[i], ["includeMetadataChanges"]), validateNamedOptionalType("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                    var o = {
                        includeMetadataChanges: r.includeMetadataChanges
                    };
                    return isPartialObserver(e[i]) ? n = e[i] : (validateArgType("DocumentReference.onSnapshot", "function", i, e[i]), validateOptionalArgType("DocumentReference.onSnapshot", "function", i + 1, e[i + 1]), validateOptionalArgType("DocumentReference.onSnapshot", "function", i + 2, e[i + 2]), n = {
                        next: e[i],
                        error: e[i + 1],
                        complete: e[i + 2]
                    }), this.onSnapshotInternal(o, n)
                }, e.prototype.onSnapshotInternal = function(e, t) {
                    var n = this, r = function(e) {
                        console.error("Uncaught Error in onSnapshot:", e)
                    };
                    t.error && (r = t.error.bind(t));
                    var i = new AsyncObserver({
                        next: function(e) {
                            if (t.next) {
                                assert(e.docs.size <= 1, "Too many documents returned on a document query");
                                var r = e.docs.get(n._key);
                                t.next(new DocumentSnapshot(n.firestore, n._key, r, e.fromCache))
                            }
                        },
                        error: r
                    }), o = this._firestoreClient.listen(Query.atPath(this._key.path), i, e);
                    return function() {
                        i.mute(), n._firestoreClient.unlisten(o)
                    }
                }, e.prototype.get = function(e) {
                    var t = this;
                    return validateOptionNames("DocumentReference.get", e, ["source"]), e && validateNamedOptionalPropertyEquals("DocumentReference.get", "options", "source", e.source, ["default", "server", "cache"]), new Promise(function(n, r) {
                        e && "cache" === e.source ? t.firestore.ensureClientConfigured().getDocumentFromLocalCache(t._key).then(function(e) {
                            n(new DocumentSnapshot(t.firestore, t._key, e, !0))
                        }, r) : t.getViaSnapshotListener(n, r, e)
                    })
                }, e.prototype.getViaSnapshotListener = function(e, t, n) {
                    var r = this.onSnapshotInternal({
                        includeMetadataChanges: !0,
                        waitForSyncWhenOnline: !0
                    }, {
                        next: function(i) {
                            r(), !i.exists && i.metadata.fromCache ? t(new FirestoreError(Code.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? t(new FirestoreError(Code.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(i)
                        },
                        error: t
                    })
                }, e
            }(), SnapshotMetadata = function() {
                function e(e, t) {
                    this.hasPendingWrites = e, this.fromCache = t
                }
                return e.prototype.isEqual = function(e) {
                    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
                }, e
            }(), DocumentSnapshot = function() {
                function e(e, t, n, r) {
                    this._firestore = e, this._key = t, this._document = n, this._fromCache = r
                }
                return e.prototype.data = function(e) {
                    return validateBetweenNumberOfArgs("DocumentSnapshot.data", arguments, 0, 1), e = validateSnapshotOptions("DocumentSnapshot.data", e), this._document ? this.convertObject(this._document.data, FieldValueOptions.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled())) : void 0
                }, e.prototype.get = function(e, t) {
                    if (validateBetweenNumberOfArgs("DocumentSnapshot.get", arguments, 1, 2), t = validateSnapshotOptions("DocumentSnapshot.get", t), this._document) {
                        var n = this._document.data.field(fieldPathFromArgument("DocumentSnapshot.get", e));
                        if (void 0 !== n)
                            return this.convertValue(n, FieldValueOptions.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled()))
                    }
                }, Object.defineProperty(e.prototype, "id", {
                    get: function() {
                        return this._key.path.lastSegment()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "ref", {
                    get: function() {
                        return new DocumentReference(this._key, this._firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "exists", {
                    get: function() {
                        return null !== this._document
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "metadata", {
                    get: function() {
                        return new SnapshotMetadata(null !== this._document && this._document.hasLocalMutations, this._fromCache)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        throw invalidClassError("isEqual", "DocumentSnapshot", 1, t);
                    return this._firestore === t._firestore && this._fromCache === t._fromCache && this._key.isEqual(t._key) && (null === this._document ? null === t._document : this._document.isEqual(t._document))
                }, e.prototype.convertObject = function(e, t) {
                    var n = this, r = {};
                    return e.forEach(function(e, i) {
                        r[e] = n.convertValue(i, t)
                    }), r
                }, e.prototype.convertValue = function(e, t) {
                    if (e instanceof ObjectValue)
                        return this.convertObject(e, t);
                    if (e instanceof ArrayValue)
                        return this.convertArray(e, t);
                    if (e instanceof RefValue) {
                        var n = e.value(t), r = this._firestore.ensureClientConfigured().databaseId();
                        return e.databaseId.isEqual(r) || error("Document " + this._key.path + " contains a document reference within a different database (" + e.databaseId.projectId + "/" + e.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new DocumentReference(n, this._firestore)
                    }
                    return e.value(t)
                }, e.prototype.convertArray = function(e, t) {
                    var n = this;
                    return e.internalValue.map(function(e) {
                        return n.convertValue(e, t)
                    })
                }, e
            }(), QueryDocumentSnapshot = function(e) {
                function t(t, n, r, i) {
                    return e.call(this, t, n, r, i) || this
                }
                return __extends(t, e), t.prototype.data = function(t) {
                    var n = e.prototype.data.call(this, t);
                    return assert("object" == typeof n, "Document in a QueryDocumentSnapshot should exist"), n
                }, t
            }(DocumentSnapshot), Query$1 = function() {
                function e(e, t) {
                    this._query = e, this.firestore = t
                }
                return e.prototype.where = function(t, n, r) {
                    var i;
                    validateExactNumberOfArgs("Query.where", arguments, 3), validateArgType("Query.where", "string", 2, n), validateDefined("Query.where", 3, r);
                    var o = fieldPathFromArgument("Query.where", t), a = RelationOp.fromString(n);
                    if (o.isKeyField()) {
                        if (a === RelationOp.ARRAY_CONTAINS)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. You can't perform array-contains queries on FieldPath.documentId() since document IDs are not arrays.");
                        if ("string" == typeof r) {
                            if ( - 1 !== r.indexOf("/"))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it contains a slash.");
                            if ("" === r)
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string.");
                            var s = this._query.path.child(new ResourcePath([r]));
                            assert(s.length%2 == 0, "Path should be a document key"), i = new RefValue(this.firestore._databaseId, new DocumentKey(s))
                        } else {
                            if (!(r instanceof DocumentReference))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: " + valueDescription(r) + ".");
                            var u = r;
                            i = new RefValue(this.firestore._databaseId, u._key)
                        }
                    } else 
                        i = this.firestore._dataConverter.parseQueryValue("Query.where", r);
                    var c = Filter.create(o, a, i);
                    return this.validateNewFilter(c), new e(this._query.addFilter(c), this.firestore)
                }, e.prototype.orderBy = function(t, n) {
                    var r;
                    if (validateBetweenNumberOfArgs("Query.orderBy", arguments, 1, 2), validateOptionalArgType("Query.orderBy", "string", 2, n), void 0 === n || "asc" === n)
                        r = Direction.ASCENDING;
                    else {
                        if ("desc" !== n)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
                        r = Direction.DESCENDING
                    }
                    if (null !== this._query.startAt)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                    if (null !== this._query.endAt)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                    var i = fieldPathFromArgument("Query.orderBy", t), o = new OrderBy(i, r);
                    return this.validateNewOrderBy(o), new e(this._query.addOrderBy(o), this.firestore)
                }, e.prototype.limit = function(t) {
                    if (validateExactNumberOfArgs("Query.limit", arguments, 1), validateArgType("Query.limit", "number", 1, t), t <= 0)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. Query limit (" + t + ") is invalid. Limit must be positive.");
                    return new e(this._query.withLimit(t), this.firestore)
                }, e.prototype.startAt = function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    validateAtLeastNumberOfArgs("Query.startAt", arguments, 1);
                    var i = this.boundFromDocOrFields("Query.startAt", t, n, !0);
                    return new e(this._query.withStartAt(i), this.firestore)
                }, e.prototype.startAfter = function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    validateAtLeastNumberOfArgs("Query.startAfter", arguments, 1);
                    var i = this.boundFromDocOrFields("Query.startAfter", t, n, !1);
                    return new e(this._query.withStartAt(i), this.firestore)
                }, e.prototype.endBefore = function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    validateAtLeastNumberOfArgs("Query.endBefore", arguments, 1);
                    var i = this.boundFromDocOrFields("Query.endBefore", t, n, !0);
                    return new e(this._query.withEndAt(i), this.firestore)
                }, e.prototype.endAt = function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    validateAtLeastNumberOfArgs("Query.endAt", arguments, 1);
                    var i = this.boundFromDocOrFields("Query.endAt", t, n, !1);
                    return new e(this._query.withEndAt(i), this.firestore)
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        throw invalidClassError("isEqual", "Query", 1, t);
                    return this.firestore === t.firestore && this._query.isEqual(t._query)
                }, e.prototype.boundFromDocOrFields = function(e, t, n, r) {
                    if (validateDefined(e, 1, t), t instanceof DocumentSnapshot) {
                        if (n.length > 0)
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + e + "().");
                        var i = t;
                        if (!i.exists)
                            throw new FirestoreError(Code.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + e + "().");
                        return this.boundFromDocument(e, i._document, r)
                    }
                    var o = [t].concat(n);
                    return this.boundFromFields(e, o, r)
                }, e.prototype.boundFromDocument = function(e, t, n) {
                    for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) {
                        var a = o[i];
                        if (a.field.isKeyField())
                            r.push(new RefValue(this.firestore._databaseId, t.key));
                        else {
                            var s = t.field(a.field);
                            if (void 0 === s) {
                                var u = a.field.canonicalString();
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                            }
                            r.push(s)
                        }
                    }
                    return new Bound(r, n)
                }, e.prototype.boundFromFields = function(e, t, n) {
                    var r = this._query.explicitOrderBy;
                    if (t.length > r.length)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + e + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                    for (var i = [], o = 0; o < t.length; o++) {
                        var a = t[o];
                        if (r[o].field.isKeyField()) {
                            if ("string" != typeof a)
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + e + "(), but got a " + typeof a);
                            if ( - 1 !== a.indexOf("/"))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Document ID '" + a + "' contains a slash in " + e + "()");
                            var s = new DocumentKey(this._query.path.child(a));
                            i.push(new RefValue(this.firestore._databaseId, s))
                        } else {
                            var u = this.firestore._dataConverter.parseQueryValue(e, a);
                            i.push(u)
                        }
                    }
                    return new Bound(i, n)
                }, e.prototype.onSnapshot = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    validateBetweenNumberOfArgs("Query.onSnapshot", arguments, 1, 4);
                    var n, r = {}, i = 0;
                    return "object" != typeof e[i] || isPartialObserver(e[i]) || (validateOptionNames("Query.onSnapshot", r = e[i], ["includeMetadataChanges"]), validateNamedOptionalType("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), isPartialObserver(e[i]) ? n = e[i] : (validateArgType("Query.onSnapshot", "function", i, e[i]), validateOptionalArgType("Query.onSnapshot", "function", i + 1, e[i + 1]), validateOptionalArgType("Query.onSnapshot", "function", i + 2, e[i + 2]), n = {
                        next: e[i],
                        error: e[i + 1],
                        complete: e[i + 2]
                    }), this.onSnapshotInternal(r, n)
                }, e.prototype.onSnapshotInternal = function(e, t) {
                    var n = this, r = function(e) {
                        console.error("Uncaught Error in onSnapshot:", e)
                    };
                    t.error && (r = t.error.bind(t));
                    var i = new AsyncObserver({
                        next: function(e) {
                            t.next && t.next(new QuerySnapshot(n.firestore, n._query, e))
                        },
                        error: r
                    }), o = this.firestore.ensureClientConfigured(), a = o.listen(this._query, i, e);
                    return function() {
                        i.mute(), o.unlisten(a)
                    }
                }, e.prototype.get = function(e) {
                    var t = this;
                    return validateBetweenNumberOfArgs("Query.get", arguments, 0, 1), new Promise(function(n, r) {
                        e && "cache" === e.source ? t.firestore.ensureClientConfigured().getDocumentsFromLocalCache(t._query).then(function(e) {
                            n(new QuerySnapshot(t.firestore, t._query, e))
                        }, r) : t.getViaSnapshotListener(n, r, e)
                    })
                }, e.prototype.getViaSnapshotListener = function(e, t, n) {
                    var r = this.onSnapshotInternal({
                        includeMetadataChanges: !0,
                        waitForSyncWhenOnline: !0
                    }, {
                        next: function(i) {
                            r(), i.metadata.fromCache && n && "server" === n.source ? t(new FirestoreError(Code.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(i)
                        },
                        error: t
                    })
                }, e.prototype.validateNewFilter = function(e) {
                    if (e instanceof RelationFilter)
                        if (e.isInequality()) {
                            var t = this._query.getInequalityFilterField();
                            if (null !== t&&!t.isEqual(e.field))
                                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + t.toString() + "' and '" + e.field.toString() + "'");
                                var n = this._query.getFirstOrderByField();
                                null !== n && this.validateOrderByAndInequalityMatch(e.field, n)
                        } else if (e.op === RelationOp.ARRAY_CONTAINS && this._query.hasArrayContainsFilter())
                            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Queries only support a single array-contains filter.")
                }, e.prototype.validateNewOrderBy = function(e) {
                    if (null === this._query.getFirstOrderByField()) {
                        var t = this._query.getInequalityFilterField();
                        null !== t && this.validateOrderByAndInequalityMatch(t, e.field)
                    }
                }, e.prototype.validateOrderByAndInequalityMatch = function(e, t) {
                    if (!t.isEqual(e))
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + t.toString() + "' instead.")
                }, e
            }(), QuerySnapshot = function() {
                function e(e, t, n) {
                    this._firestore = e, this._originalQuery = t, this._snapshot = n, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new SnapshotMetadata(n.hasPendingWrites, n.fromCache)
                }
                return Object.defineProperty(e.prototype, "docs", {
                    get: function() {
                        var e = [];
                        return this.forEach(function(t) {
                            return e.push(t)
                        }), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "empty", {
                    get: function() {
                        return this._snapshot.docs.isEmpty()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._snapshot.docs.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.forEach = function(e, t) {
                    var n = this;
                    validateBetweenNumberOfArgs("QuerySnapshot.forEach", arguments, 1, 2), validateArgType("QuerySnapshot.forEach", "function", 1, e), this._snapshot.docs.forEach(function(r) {
                        e.call(t, n.convertToDocumentImpl(r))
                    })
                }, Object.defineProperty(e.prototype, "query", {
                    get: function() {
                        return new Query$1(this._originalQuery, this._firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.docChanges = function(e) {
                    validateOptionNames("QuerySnapshot.docChanges", e, ["includeMetadataChanges"]), e && validateNamedOptionalType("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", e.includeMetadataChanges);
                    var t = e && e.includeMetadataChanges;
                    if (t && this._snapshot.excludesMetadataChanges)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = changesFromSnapshot(this._firestore, t, this._snapshot), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges
                }, e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        throw invalidClassError("isEqual", "QuerySnapshot", 1, t);
                    return this._firestore === t._firestore && this._originalQuery.isEqual(t._originalQuery) && this._snapshot.isEqual(t._snapshot)
                }, e.prototype.convertToDocumentImpl = function(e) {
                    return new QueryDocumentSnapshot(this._firestore, e.key, e, this.metadata.fromCache)
                }, e
            }();
            function throwDocChangesMethodError() {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')
            }
            var docChangesPropertiesToOverride = ["length", "forEach", "map"].concat("undefined" != typeof Symbol ? [Symbol.iterator] : []);
            docChangesPropertiesToOverride.forEach(function(e) {
                try {
                    Object.defineProperty(QuerySnapshot.prototype.docChanges, e, {
                        get: function() {
                            return throwDocChangesMethodError()
                        }
                    })
                } catch (e) {}
            });
            var CollectionReference = function(e) {
                function t(t, n) {
                    var r = e.call(this, Query.atPath(t), n) || this;
                    if (t.length%2 != 1)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.canonicalString() + " has " + t.length);
                    return r
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this._query.path.lastSegment()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        var e = this._query.path.popLast();
                        return e.isEmpty() ? null : new DocumentReference(new DocumentKey(e), this.firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "path", {
                    get: function() {
                        return this._query.path.canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.doc = function(e) {
                    if (validateBetweenNumberOfArgs("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (e = AutoId.newId()), validateArgType("CollectionReference.doc", "string", 1, e), "" === e)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Document path must be a non-empty string");
                    var t = ResourcePath.fromString(e);
                    return DocumentReference.forPath(this._query.path.child(t), this.firestore)
                }, t.prototype.add = function(e) {
                    validateExactNumberOfArgs("CollectionReference.add", arguments, 1), validateArgType("CollectionReference.add", "object", 1, e);
                    var t = this.doc();
                    return t.set(e).then(function() {
                        return t
                    })
                }, t
            }(Query$1);
            function validateSetOptions(e, t) {
                if (void 0 === t)
                    return {
                        merge: !1
                    };
                if (validateOptionNames(e, t, ["merge", "mergeFields"]), validateNamedOptionalType(e, "boolean", "merge", t.merge), validateOptionalArrayElements(e, "mergeFields", "a string or a FieldPath", t.mergeFields, function(e) {
                    return "string" == typeof e || e instanceof FieldPath$1
                }), void 0 !== t.mergeFields && void 0 !== t.merge)
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid options passed to function " + e + '(): You cannot specify both "merge" and "mergeFields".');
                return t
            }
            function validateSnapshotOptions(e, t) {
                return void 0 === t ? {} : (validateOptionNames(e, t, ["serverTimestamps"]), validateNamedOptionalPropertyEquals(e, "options", "serverTimestamps", t.serverTimestamps, ["estimate", "previous", "none"]), t)
            }
            function validateReference(e, t, n) {
                if (t instanceof DocumentReference) {
                    if (t.firestore !== n)
                        throw new FirestoreError(Code.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return t
                }
                throw invalidClassError(e, "DocumentReference", 1, t)
            }
            function changesFromSnapshot(e, t, n) {
                if (n.oldDocs.isEmpty()) {
                    var r, i = 0;
                    return n.docChanges.map(function(t) {
                        var o = new QueryDocumentSnapshot(e, t.doc.key, t.doc, n.fromCache);
                        return assert(t.type === ChangeType.Added, "Invalid event type for first snapshot"), assert(!r || n.query.docComparator(r, t.doc) < 0, "Got added events in wrong order"), r = t.doc, {
                            type: "added",
                            doc: o,
                            oldIndex: - 1,
                            newIndex: i++
                        }
                    })
                }
                var o = n.oldDocs;
                return n.docChanges.filter(function(e) {
                    return t || e.type !== ChangeType.Metadata
                }).map(function(t) {
                    var r = new QueryDocumentSnapshot(e, t.doc.key, t.doc, n.fromCache), i =- 1, a =- 1;
                    return t.type !== ChangeType.Added && (assert((i = o.indexOf(t.doc.key)) >= 0, "Index for document not found"), o = o.delete(t.doc.key)), t.type !== ChangeType.Removed && (a = (o = o.add(t.doc)).indexOf(t.doc.key)), {
                        type: resultChangeType(t.type),
                        doc: r,
                        oldIndex: i,
                        newIndex: a
                    }
                })
            }
            function resultChangeType(e) {
                switch (e) {
                case ChangeType.Added:
                    return "added";
                case ChangeType.Modified:
                case ChangeType.Metadata:
                    return "modified";
                case ChangeType.Removed:
                    return "removed";
                default:
                    return fail("Unknown change type: " + e)
                }
            }
            var PublicFirestore = makeConstructorPrivate(Firestore, "Use firebase.firestore() instead."), PublicTransaction = makeConstructorPrivate(Transaction$1, "Use firebase.firestore().runTransaction() instead."), PublicWriteBatch = makeConstructorPrivate(WriteBatch, "Use firebase.firestore().batch() instead."), PublicDocumentReference = makeConstructorPrivate(DocumentReference, "Use firebase.firestore().doc() instead."), PublicDocumentSnapshot = makeConstructorPrivate(DocumentSnapshot), PublicQueryDocumentSnapshot = makeConstructorPrivate(QueryDocumentSnapshot), PublicQuery = makeConstructorPrivate(Query$1), PublicQuerySnapshot = makeConstructorPrivate(QuerySnapshot), PublicCollectionReference = makeConstructorPrivate(CollectionReference, "Use firebase.firestore().collection() instead."), firestoreNamespace = {
                Firestore: PublicFirestore,
                GeoPoint: GeoPoint,
                Timestamp: Timestamp,
                Blob: PublicBlob,
                Transaction: PublicTransaction,
                WriteBatch: PublicWriteBatch,
                DocumentReference: PublicDocumentReference,
                DocumentSnapshot: PublicDocumentSnapshot,
                Query: PublicQuery,
                QueryDocumentSnapshot: PublicQueryDocumentSnapshot,
                QuerySnapshot: PublicQuerySnapshot,
                CollectionReference: PublicCollectionReference,
                FieldPath: FieldPath$1,
                FieldValue: PublicFieldValue,
                setLogLevel: Firestore.setLogLevel
            };
            function configureForFirebase(e) {
                e.INTERNAL.registerService("firestore", function(e) {
                    return new Firestore(e)
                }, shallowCopy(firestoreNamespace))
            }
            function registerFirestore(e) {
                configureForFirebase(e)
            }
            registerFirestore(firebase)
        } catch (e) {
            throw console.error(e), new Error("Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.")
        }
        var ops, dirs, LogLevel$$1
    }(this.firebase = this.firebase || {}, firebase);
    //# sourceMappingURL=firebase-firestore.js.map



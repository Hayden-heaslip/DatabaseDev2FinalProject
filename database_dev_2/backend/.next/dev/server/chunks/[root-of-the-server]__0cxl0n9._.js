module.exports = [
"[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Client",
    ()=>_n,
    "ClientBase",
    ()=>export_ClientBase,
    "Connection",
    ()=>export_Connection,
    "DatabaseError",
    ()=>export_DatabaseError,
    "NeonDbError",
    ()=>pe,
    "Pool",
    ()=>eo,
    "Query",
    ()=>export_Query,
    "defaults",
    ()=>export_defaults,
    "neon",
    ()=>Xs,
    "neonConfig",
    ()=>_e,
    "types",
    ()=>export_types
]);
var io = Object.create;
var Ce = Object.defineProperty;
var so = Object.getOwnPropertyDescriptor;
var oo = Object.getOwnPropertyNames;
var ao = Object.getPrototypeOf, uo = Object.prototype.hasOwnProperty;
var co = (r, e, t)=>e in r ? Ce(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t;
var a = (r, e)=>Ce(r, "name", {
        value: e,
        configurable: !0
    });
var z = (r, e)=>()=>(r && (e = r(r = 0)), e);
var I = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), se = (r, e)=>{
    for(var t in e)Ce(r, t, {
        get: e[t],
        enumerable: !0
    });
}, Tn = (r, e, t, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let i of oo(e))!uo.call(r, i) && i !== t && Ce(r, i, {
        get: ()=>e[i],
        enumerable: !(n = so(e, i)) || n.enumerable
    });
    return r;
};
var Te = (r, e, t)=>(t = r != null ? io(ao(r)) : {}, Tn(e || !r || !r.__esModule ? Ce(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r)), O = (r)=>Tn(Ce({}, "__esModule", {
        value: !0
    }), r);
var _ = (r, e, t)=>co(r, typeof e != "symbol" ? e + "" : e, t);
var Bn = I((st)=>{
    "use strict";
    p();
    st.byteLength = lo;
    st.toByteArray = po;
    st.fromByteArray = go;
    var ae = [], re = [], ho = typeof Uint8Array < "u" ? Uint8Array : Array, Rt = "ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(Ee = 0, In = Rt.length; Ee < In; ++Ee)ae[Ee] = Rt[Ee], re[Rt.charCodeAt(Ee)] = Ee;
    var Ee, In;
    re[45] = 62;
    re[95] = 63;
    function Pn(r) {
        var e = r.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multip\
le of 4");
        var t = r.indexOf("=");
        t === -1 && (t = e);
        var n = t === e ? 0 : 4 - t % 4;
        return [
            t,
            n
        ];
    }
    a(Pn, "getLens");
    function lo(r) {
        var e = Pn(r), t = e[0], n = e[1];
        return (t + n) * 3 / 4 - n;
    }
    a(lo, "byte\
Length");
    function fo(r, e, t) {
        return (e + t) * 3 / 4 - t;
    }
    a(fo, "_byteLength");
    function po(r) {
        var e, t = Pn(r), n = t[0], i = t[1], s = new ho(fo(r, n, i)), o = 0, u = i > 0 ? n - 4 : n, c;
        for(c = 0; c < u; c += 4)e = re[r.charCodeAt(c)] << 18 | re[r.charCodeAt(c + 1)] << 12 | re[r.charCodeAt(c + 2)] << 6 | re[r.charCodeAt(c + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
        return i === 2 && (e = re[r.charCodeAt(c)] << 2 | re[r.charCodeAt(c + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = re[r.charCodeAt(c)] << 10 | re[r.charCodeAt(c + 1)] << 4 | re[r.charCodeAt(c + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s;
    }
    a(po, "toByteArray");
    function yo(r) {
        return ae[r >> 18 & 63] + ae[r >> 12 & 63] + ae[r >> 6 & 63] + ae[r & 63];
    }
    a(yo, "tripletToBase64");
    function mo(r, e, t) {
        for(var n, i = [], s = e; s < t; s += 3)n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(yo(n));
        return i.join("");
    }
    a(mo, "encodeChunk");
    function go(r) {
        for(var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n; o < u; o += s)i.push(mo(r, o, o + s > u ? u : o + s));
        return n === 1 ? (e = r[t - 1], i.push(ae[e >> 2] + ae[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(ae[e >> 10] + ae[e >> 4 & 63] + ae[e << 2 & 63] + "=")), i.join("");
    }
    a(go, "fromByteArray");
});
var Ln = I((Ft)=>{
    p();
    Ft.read = function(r, e, t, n, i) {
        var s, o, u = i * 8 - n - 1, c = (1 << u) - 1, h = c >> 1, l = -7, d = t ? i - 1 : 0, b = t ? -1 : 1, C = r[e + d];
        for(d += b, s = C & (1 << -l) - 1, C >>= -l, l += u; l > 0; s = s * 256 + r[e + d], d += b, l -= 8);
        for(o = s & (1 << -l) - 1, s >>= -l, l += n; l > 0; o = o * 256 + r[e + d], d += b, l -= 8);
        if (s === 0) s = 1 - h;
        else {
            if (s === c) return o ? NaN : (C ? -1 : 1) * (1 / 0);
            o = o + Math.pow(2, n), s = s - h;
        }
        return (C ? -1 : 1) * o * Math.pow(2, s - n);
    };
    Ft.write = function(r, e, t, n, i, s) {
        var o, u, c, h = s * 8 - i - 1, l = (1 << h) - 1, d = l >> 1, b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = n ? 0 : s - 1, B = n ? 1 : -1, Q = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for(e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + d >= 1 ? e += b / c : e += b * Math.pow(2, 1 - d), e * c >= 2 && (o++, c /= 2), o + d >= l ? (u = 0, o = l) : o + d >= 1 ? (u = (e * c - 1) * Math.pow(2, i), o = o + d) : (u = e * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + C] = u & 255, C += B, u /= 256, i -= 8);
        for(o = o << i | u, h += i; h > 0; r[t + C] = o & 255, C += B, o /= 256, h -= 8);
        r[t + C - B] |= Q * 128;
    };
});
var Kn = I((Le)=>{
    "use strict";
    p();
    var Mt = Bn(), Pe = Ln(), Rn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Le.Buffer = f;
    Le.SlowBuffer = vo;
    Le.INSPECT_MAX_BYTES = 50;
    var ot = 2147483647;
    Le.kMaxLength = ot;
    f.TYPED_ARRAY_SUPPORT = wo();
    !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");
    function wo() {
        try {
            let r = new Uint8Array(1), e = {
                foo: a(function() {
                    return 42;
                }, "foo")
            };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
        } catch  {
            return !1;
        }
    }
    a(wo, "typedArraySupport");
    Object.defineProperty(f.prototype, "parent", {
        enumerable: !0,
        get: a(function() {
            if (f.isBuffer(this)) return this.buffer;
        }, "get")
    });
    Object.defineProperty(f.prototype, "offset", {
        enumerable: !0,
        get: a(function() {
            if (f.isBuffer(this)) return this.byteOffset;
        }, "get")
    });
    function le(r) {
        if (r > ot) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let e = new Uint8Array(r);
        return Object.setPrototypeOf(e, f.prototype), e;
    }
    a(le, "createBuffer");
    function f(r, e, t) {
        if (typeof r == "number") {
            if (typeof e == "string") throw new TypeError('The "string" a\
rgument must be of type string. Received type number');
            return Ot(r);
        }
        return kn(r, e, t);
    }
    a(f, "Buffer");
    f.poolSize = 8192;
    function kn(r, e, t) {
        if (typeof r == "string") return So(r, e);
        if (ArrayBuffer.isView(r)) return xo(r);
        if (r == null) throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type " + typeof r);
        if (ue(r, ArrayBuffer) || r && ue(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ue(r, SharedArrayBuffer) || r && ue(r.buffer, SharedArrayBuffer))) return kt(r, e, t);
        if (typeof r == "number") throw new TypeError('The "value" argument\
 must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return f.from(n, e, t);
        let i = Eo(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return f.from(r[Symbol.toPrimitive]("string"), e, t);
        throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type " + typeof r);
    }
    a(kn, "from");
    f.from = function(r, e, t) {
        return kn(r, e, t);
    };
    Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(f, Uint8Array);
    function Un(r) {
        if (typeof r != "number") throw new TypeError('"size" arg\
ument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is\
 invalid for option "size"');
    }
    a(Un, "assertSize");
    function bo(r, e, t) {
        return Un(r), r <= 0 ? le(r) : e !== void 0 ? typeof t == "string" ? le(r).fill(e, t) : le(r).fill(e) : le(r);
    }
    a(bo, "alloc");
    f.alloc = function(r, e, t) {
        return bo(r, e, t);
    };
    function Ot(r) {
        return Un(r), le(r < 0 ? 0 : Nt(r) | 0);
    }
    a(Ot, "allocUnsafe");
    f.allocUnsafe = function(r) {
        return Ot(r);
    };
    f.allocUnsafeSlow = function(r) {
        return Ot(r);
    };
    function So(r, e) {
        if ((typeof e != "string" || e === "") && (e = "\
utf8"), !f.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
        let t = On(r, e) | 0, n = le(t), i = n.write(r, e);
        return i !== t && (n = n.slice(0, i)), n;
    }
    a(So, "fromString");
    function Dt(r) {
        let e = r.length < 0 ? 0 : Nt(r.length) | 0, t = le(e);
        for(let n = 0; n < e; n += 1)t[n] = r[n] & 255;
        return t;
    }
    a(Dt, "fromArrayLike");
    function xo(r) {
        if (ue(r, Uint8Array)) {
            let e = new Uint8Array(r);
            return kt(e.buffer, e.byteOffset, e.byteLength);
        }
        return Dt(r);
    }
    a(xo, "fromArrayView");
    function kt(r, e, t) {
        if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outs\
ide of buffer bounds');
        if (r.byteLength < e + (t || 0)) throw new RangeError('"length" i\
s outside of buffer bounds');
        let n;
        return e === void 0 && t === void 0 ? n = new Uint8Array(r) : t === void 0 ? n = new Uint8Array(r, e) : n = new Uint8Array(r, e, t), Object.setPrototypeOf(n, f.prototype), n;
    }
    a(kt, "fromArrayBuffer");
    function Eo(r) {
        if (f.isBuffer(r)) {
            let e = Nt(r.length) | 0, t = le(e);
            return t.length === 0 || r.copy(t, 0, 0, e), t;
        }
        if (r.length !== void 0) return typeof r.length != "number" || Qt(r.length) ? le(0) : Dt(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return Dt(r.data);
    }
    a(Eo, "fromObject");
    function Nt(r) {
        if (r >= ot) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ot.toString(16) + " bytes");
        return r | 0;
    }
    a(Nt, "checked");
    function vo(r) {
        return +r != r && (r = 0), f.alloc(+r);
    }
    a(vo, "SlowBuffer");
    f.isBuffer = a(function(e) {
        return e != null && e._isBuffer === !0 && e !== f.prototype;
    }, "isBuffer");
    f.compare = a(function(e, t) {
        if (ue(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), ue(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let n = e.length, i = t.length;
        for(let s = 0, o = Math.min(n, i); s < o; ++s)if (e[s] !== t[s]) {
            n = e[s], i = t[s];
            break;
        }
        return n < i ? -1 : i < n ? 1 : 0;
    }, "compare");
    f.isEncoding = a(function(e) {
        switch(String(e).toLowerCase()){
            case "\
hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "\
ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, "isEn\
coding");
    f.concat = a(function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"lis\
t" argument must be an Array of Buffers');
        if (e.length === 0) return f.alloc(0);
        let n;
        if (t === void 0) for(t = 0, n = 0; n < e.length; ++n)t += e[n].length;
        let i = f.allocUnsafe(t), s = 0;
        for(n = 0; n < e.length; ++n){
            let o = e[n];
            if (ue(o, Uint8Array)) s + o.length > i.length ? (f.isBuffer(o) || (o = f.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
            else if (f.isBuffer(o)) o.copy(i, s);
            else throw new TypeError('"list" argument must be an Array of Buf\
fers');
            s += o.length;
        }
        return i;
    }, "concat");
    function On(r, e) {
        if (f.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || ue(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type ' + typeof r);
        let t = r.length, n = arguments.length > 2 && arguments[2] === !0;
        if (!n && t === 0) return 0;
        let i = !1;
        for(;;)switch(e){
            case "ascii":
            case "\
latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
                return Ut(r).length;
            case "uc\
s2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return t * 2;
            case "hex":
                return t >>> 1;
            case "\
base64":
                return Vn(r).length;
            default:
                if (i) return n ? -1 : Ut(r).length;
                e = ("" + e).toLowerCase(), i = !0;
        }
    }
    a(On, "byteLength");
    f.byteLength = On;
    function _o(r, e, t) {
        let n = !1;
        if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
        for(r || (r = "utf8");;)switch(r){
            case "hex":
                return Mo(this, e, t);
            case "utf8":
            case "utf-8":
                return qn(this, e, t);
            case "ascii":
                return Ro(this, e, t);
            case "latin1":
            case "binary":
                return Fo(this, e, t);
            case "base64":
                return Bo(this, e, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Do(this, e, t);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0;
        }
    }
    a(_o, "slowToString");
    f.prototype._isBuffer = !0;
    function ve(r, e, t) {
        let n = r[e];
        r[e] = r[t], r[t] = n;
    }
    a(ve, "swap");
    f.prototype.swap16 = a(function() {
        let e = this.length;
        if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(let t = 0; t < e; t += 2)ve(this, t, t + 1);
        return this;
    }, "swap16");
    f.prototype.swap32 = a(function() {
        let e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bit\
s");
        for(let t = 0; t < e; t += 4)ve(this, t, t + 3), ve(this, t + 1, t + 2);
        return this;
    }, "swap32");
    f.prototype.swap64 = a(function() {
        let e = this.length;
        if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(let t = 0; t < e; t += 8)ve(this, t, t + 7), ve(this, t + 1, t + 6), ve(this, t + 2, t + 5), ve(this, t + 3, t + 4);
        return this;
    }, "swap64");
    f.prototype.toString = a(function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? qn(this, 0, e) : _o.apply(this, arguments);
    }, "toString");
    f.prototype.toLocaleString = f.prototype.toString;
    f.prototype.equals = a(function(e) {
        if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? !0 : f.compare(this, e) === 0;
    }, "equals");
    f.prototype.inspect = a(function() {
        let e = "", t = Le.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
    }, "inspect");
    Rn && (f.prototype[Rn] = f.prototype.inspect);
    f.prototype.compare = a(function(e, t, n, i, s) {
        if (ue(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), s === void 0 && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length) throw new RangeError("out of range index");
        if (i >= s && t >= n) return 0;
        if (i >= s) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e) return 0;
        let o = s - i, u = n - t, c = Math.min(o, u), h = this.slice(i, s), l = e.slice(t, n);
        for(let d = 0; d < c; ++d)if (h[d] !== l[d]) {
            o = h[d], u = l[d];
            break;
        }
        return o < u ? -1 : u < o ? 1 : 0;
    }, "compare");
    function Nn(r, e, t, n, i) {
        if (r.length === 0) return -1;
        if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Qt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
            if (i) return -1;
            t = r.length - 1;
        } else if (t < 0) if (i) t = 0;
        else return -1;
        if (typeof e == "string" && (e = f.from(e, n)), f.isBuffer(e)) return e.length === 0 ? -1 : Fn(r, e, t, n, i);
        if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Fn(r, [
            e
        ], t, n, i);
        throw new TypeError("val must be string, number or Buffer");
    }
    a(Nn, "bid\
irectionalIndexOf");
    function Fn(r, e, t, n, i) {
        let s = 1, o = r.length, u = e.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "\
utf-16le")) {
            if (r.length < 2 || e.length < 2) return -1;
            s = 2, o /= 2, u /= 2, t /= 2;
        }
        function c(l, d) {
            return s === 1 ? l[d] : l.readUInt16BE(d * s);
        }
        a(c, "read");
        let h;
        if (i) {
            let l = -1;
            for(h = t; h < o; h++)if (c(r, h) === c(e, l === -1 ? 0 : h - l)) {
                if (l === -1 && (l = h), h - l + 1 === u) return l * s;
            } else l !== -1 && (h -= h - l), l = -1;
        } else for(t + u > o && (t = o - u), h = t; h >= 0; h--){
            let l = !0;
            for(let d = 0; d < u; d++)if (c(r, h + d) !== c(e, d)) {
                l = !1;
                break;
            }
            if (l) return h;
        }
        return -1;
    }
    a(Fn, "arrayIndexOf");
    f.prototype.includes = a(function(e, t, n) {
        return this.indexOf(e, t, n) !== -1;
    }, "includes");
    f.prototype.indexOf = a(function(e, t, n) {
        return Nn(this, e, t, n, !0);
    }, "indexOf");
    f.prototype.lastIndexOf = a(function(e, t, n) {
        return Nn(this, e, t, n, !1);
    }, "lastIndexOf");
    function Ao(r, e, t, n) {
        t = Number(t) || 0;
        let i = r.length - t;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let s = e.length;
        n > s / 2 && (n = s / 2);
        let o;
        for(o = 0; o < n; ++o){
            let u = parseInt(e.substr(o * 2, 2), 16);
            if (Qt(u)) return o;
            r[t + o] = u;
        }
        return o;
    }
    a(Ao, "hexWrite");
    function Co(r, e, t, n) {
        return at(Ut(e, r.length - t), r, t, n);
    }
    a(Co, "utf8Write");
    function To(r, e, t, n) {
        return at(No(e), r, t, n);
    }
    a(To, "asciiWrite");
    function Io(r, e, t, n) {
        return at(Vn(e), r, t, n);
    }
    a(Io, "base64Write");
    function Po(r, e, t, n) {
        return at(qo(e, r.length - t), r, t, n);
    }
    a(Po, "ucs2Write");
    f.prototype.write = a(function(e, t, n, i) {
        if (t === void 0) i = "utf8", n = this.length, t = 0;
        else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");
        let s = this.length - t;
        if ((n === void 0 || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let o = !1;
        for(;;)switch(i){
            case "\
hex":
                return Ao(this, e, t, n);
            case "utf8":
            case "utf-8":
                return Co(this, e, t, n);
            case "asc\
ii":
            case "latin1":
            case "binary":
                return To(this, e, t, n);
            case "base64":
                return Io(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Po(this, e, t, n);
            default:
                if (o) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), o = !0;
        }
    }, "\
write");
    f.prototype.toJSON = a(function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    }, "toJSON");
    function Bo(r, e, t) {
        return e === 0 && t === r.length ? Mt.fromByteArray(r) : Mt.fromByteArray(r.slice(e, t));
    }
    a(Bo, "base64Slice");
    function qn(r, e, t) {
        t = Math.min(r.length, t);
        let n = [], i = e;
        for(; i < t;){
            let s = r[i], o = null, u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
            if (i + u <= t) {
                let c, h, l, d;
                switch(u){
                    case 1:
                        s < 128 && (o = s);
                        break;
                    case 2:
                        c = r[i + 1], (c & 192) === 128 && (d = (s & 31) << 6 | c & 63, d > 127 && (o = d));
                        break;
                    case 3:
                        c = r[i + 1], h = r[i + 2], (c & 192) === 128 && (h & 192) === 128 && (d = (s & 15) << 12 | (c & 63) << 6 | h & 63, d > 2047 && (d < 55296 || d > 57343) && (o = d));
                        break;
                    case 4:
                        c = r[i + 1], h = r[i + 2], l = r[i + 3], (c & 192) === 128 && (h & 192) === 128 && (l & 192) === 128 && (d = (s & 15) << 18 | (c & 63) << 12 | (h & 63) << 6 | l & 63, d > 65535 && d < 1114112 && (o = d));
                }
            }
            o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u;
        }
        return Lo(n);
    }
    a(qn, "utf8Slice");
    var Mn = 4096;
    function Lo(r) {
        let e = r.length;
        if (e <= Mn) return String.fromCharCode.apply(String, r);
        let t = "", n = 0;
        for(; n < e;)t += String.fromCharCode.apply(String, r.slice(n, n += Mn));
        return t;
    }
    a(Lo, "d\
ecodeCodePointsArray");
    function Ro(r, e, t) {
        let n = "";
        t = Math.min(r.length, t);
        for(let i = e; i < t; ++i)n += String.fromCharCode(r[i] & 127);
        return n;
    }
    a(Ro, "asciiSlice");
    function Fo(r, e, t) {
        let n = "";
        t = Math.min(r.length, t);
        for(let i = e; i < t; ++i)n += String.fromCharCode(r[i]);
        return n;
    }
    a(Fo, "latin1Slice");
    function Mo(r, e, t) {
        let n = r.length;
        (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
        let i = "";
        for(let s = e; s < t; ++s)i += Qo[r[s]];
        return i;
    }
    a(Mo, "he\
xSlice");
    function Do(r, e, t) {
        let n = r.slice(e, t), i = "";
        for(let s = 0; s < n.length - 1; s += 2)i += String.fromCharCode(n[s] + n[s + 1] * 256);
        return i;
    }
    a(Do, "utf16leSlice");
    f.prototype.slice = a(function(e, t) {
        let n = this.length;
        e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
        let i = this.subarray(e, t);
        return Object.setPrototypeOf(i, f.prototype), i;
    }, "slice");
    function N(r, e, t) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + e > t) throw new RangeError("Trying to access beyond buffer length");
    }
    a(N, "checkOffset");
    f.prototype.readUintLE = f.prototype.readUIntLE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || N(e, t, this.length);
        let i = this[e], s = 1, o = 0;
        for(; ++o < t && (s *= 256);)i += this[e + o] * s;
        return i;
    }, "readUIntLE");
    f.prototype.readUintBE = f.prototype.readUIntBE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || N(e, t, this.length);
        let i = this[e + --t], s = 1;
        for(; t > 0 && (s *= 256);)i += this[e + --t] * s;
        return i;
    }, "re\
adUIntBE");
    f.prototype.readUint8 = f.prototype.readUInt8 = a(function(e, t) {
        return e = e >>> 0, t || N(e, 1, this.length), this[e];
    }, "readUInt8");
    f.prototype.readUint16LE = f.prototype.readUInt16LE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, "readUInt16LE");
    f.prototype.readUint16BE = f.prototype.readUInt16BE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, "readUInt16BE");
    f.prototype.readUint32LE = f.prototype.readUInt32LE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    }, "readUInt32LE");
    f.prototype.readUint32BE = f.prototype.readUInt32BE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, "\
readUInt32BE");
    f.prototype.readBigUInt64LE = me(a(function(e) {
        e = e >>> 0, Be(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(s) << BigInt(32));
    }, "readBigUInt64LE"));
    f.prototype.readBigUInt64BE = me(a(function(e) {
        e = e >>> 0, Be(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(s);
    }, "readBigUInt64BE"));
    f.prototype.readIntLE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || N(e, t, this.length);
        let i = this[e], s = 1, o = 0;
        for(; ++o < t && (s *= 256);)i += this[e + o] * s;
        return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i;
    }, "readIntLE");
    f.prototype.readIntBE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || N(e, t, this.length);
        let i = t, s = 1, o = this[e + --i];
        for(; i > 0 && (s *= 256);)o += this[e + --i] * s;
        return s *= 128, o >= s && (o -= Math.pow(2, 8 * t)), o;
    }, "readIntBE");
    f.prototype.readInt8 = a(function(e, t) {
        return e = e >>> 0, t || N(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    }, "readInt8");
    f.prototype.readInt16LE = a(function(e, t) {
        e = e >>> 0, t || N(e, 2, this.length);
        let n = this[e] | this[e + 1] << 8;
        return n & 32768 ? n | 4294901760 : n;
    }, "readInt16LE");
    f.prototype.readInt16BE = a(function(e, t) {
        e = e >>> 0, t || N(e, 2, this.length);
        let n = this[e + 1] | this[e] << 8;
        return n & 32768 ? n | 4294901760 : n;
    }, "readInt16BE");
    f.prototype.readInt32LE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, "readInt32LE");
    f.prototype.readInt32BE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, "readInt32BE");
    f.prototype.readBigInt64LE = me(a(function(e) {
        e = e >>> 0, Be(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    }, "readB\
igInt64LE"));
    f.prototype.readBigInt64BE = me(a(function(e) {
        e = e >>> 0, Be(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
    }, "readBigInt64BE"));
    f.prototype.readFloatLE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), Pe.read(this, e, !0, 23, 4);
    }, "readFloatLE");
    f.prototype.readFloatBE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 4, this.length), Pe.read(this, e, !1, 23, 4);
    }, "readFloatBE");
    f.prototype.readDoubleLE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 8, this.length), Pe.read(this, e, !0, 52, 8);
    }, "r\
eadDoubleLE");
    f.prototype.readDoubleBE = a(function(e, t) {
        return e = e >>> 0, t || N(e, 8, this.length), Pe.read(this, e, !1, 52, 8);
    }, "readDoubleBE");
    function Y(r, e, t, n, i, s) {
        if (!f.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
        if (t + n > r.length) throw new RangeError("Index out of range");
    }
    a(Y, "checkInt");
    f.prototype.writeUintLE = f.prototype.writeUIntLE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
            let u = Math.pow(2, 8 * n) - 1;
            Y(this, e, t, n, u, 0);
        }
        let s = 1, o = 0;
        for(this[t] = e & 255; ++o < n && (s *= 256);)this[t + o] = e / s & 255;
        return t + n;
    }, "writeUIntLE");
    f.prototype.writeUintBE = f.prototype.writeUIntBE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
            let u = Math.pow(2, 8 * n) - 1;
            Y(this, e, t, n, u, 0);
        }
        let s = n - 1, o = 1;
        for(this[t + s] = e & 255; --s >= 0 && (o *= 256);)this[t + s] = e / o & 255;
        return t + n;
    }, "writeUI\
ntBE");
    f.prototype.writeUint8 = f.prototype.writeUInt8 = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
    }, "writeUInt8");
    f.prototype.writeUint16LE = f.prototype.writeUInt16LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    }, "writeUInt16LE");
    f.prototype.writeUint16BE = f.prototype.writeUInt16BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    }, "writeUInt16BE");
    f.prototype.writeUint32LE = f.prototype.writeUInt32LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
    }, "writeUInt32LE");
    f.prototype.writeUint32BE = f.prototype.writeUInt32BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    }, "writeUInt32BE");
    function Qn(r, e, t, n, i) {
        $n(e, n, i, r, t, 7);
        let s = Number(e & BigInt(4294967295));
        r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s;
        let o = Number(e >> BigInt(32) & BigInt(4294967295));
        return r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, t;
    }
    a(Qn, "wrtBigUInt64LE");
    function jn(r, e, t, n, i) {
        $n(e, n, i, r, t, 7);
        let s = Number(e & BigInt(4294967295));
        r[t + 7] = s, s = s >> 8, r[t + 6] = s, s = s >> 8, r[t + 5] = s, s = s >> 8, r[t + 4] = s;
        let o = Number(e >> BigInt(32) & BigInt(4294967295));
        return r[t + 3] = o, o = o >> 8, r[t + 2] = o, o = o >> 8, r[t + 1] = o, o = o >> 8, r[t] = o, t + 8;
    }
    a(jn, "wrtBigUInt64BE");
    f.prototype.writeBigUInt64LE = me(a(function(e, t = 0) {
        return Qn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"));
    f.prototype.writeBigUInt64BE = me(a(function(e, t = 0) {
        return jn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"));
    f.prototype.writeIntLE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            Y(this, e, t, n, c - 1, -c);
        }
        let s = 0, o = 1, u = 0;
        for(this[t] = e & 255; ++s < n && (o *= 256);)e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
        return t + n;
    }, "writeIntL\
E");
    f.prototype.writeIntBE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            Y(this, e, t, n, c - 1, -c);
        }
        let s = n - 1, o = 1, u = 0;
        for(this[t + s] = e & 255; --s >= 0 && (o *= 256);)e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
        return t + n;
    }, "w\
riteIntBE");
    f.prototype.writeInt8 = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
    }, "writeInt8");
    f.prototype.writeInt16LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    }, "writeInt16LE");
    f.prototype.writeInt16BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    }, "writeInt16BE");
    f.prototype.writeInt32LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
    }, "writeInt32LE");
    f.prototype.writeInt32BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    }, "writeIn\
t32BE");
    f.prototype.writeBigInt64LE = me(a(function(e, t = 0) {
        return Qn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64LE"));
    f.prototype.writeBigInt64BE = me(a(function(e, t = 0) {
        return jn(this, e, t, -BigInt("0x8000000000000\
000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE"));
    function Wn(r, e, t, n, i, s) {
        if (t + n > r.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range");
    }
    a(Wn, "checkIEEE754");
    function Hn(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Wn(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), Pe.write(r, e, t, n, 23, 4), t + 4;
    }
    a(Hn, "writeFloat");
    f.prototype.writeFloatLE = a(function(e, t, n) {
        return Hn(this, e, t, !0, n);
    }, "writeFloatLE");
    f.prototype.writeFloatBE = a(function(e, t, n) {
        return Hn(this, e, t, !1, n);
    }, "writeFloatBE");
    function Gn(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Wn(r, e, t, 8, 17976931348623157e292, -17976931348623157e292), Pe.write(r, e, t, n, 52, 8), t + 8;
    }
    a(Gn, "writeDouble");
    f.prototype.writeDoubleLE = a(function(e, t, n) {
        return Gn(this, e, t, !0, n);
    }, "writeDoubleLE");
    f.prototype.writeDoubleBE = a(function(e, t, n) {
        return Gn(this, e, t, !1, n);
    }, "writeDoubleBE");
    f.prototype.copy = a(function(e, t, n, i) {
        if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of boun\
ds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        let s = i - n;
        return this === e && typeof Uint8Array.prototype.copyWithin == "functio\
n" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), s;
    }, "copy");
    f.prototype.fill = a(function(e, t, n, i) {
        if (typeof e == "string") {
            if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !f.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (e.length === 1) {
                let o = e.charCodeAt(0);
                (i === "utf8" && o < 128 || i === "latin1") && (e = o);
            }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
        let s;
        if (typeof e == "number") for(s = t; s < n; ++s)this[s] = e;
        else {
            let o = f.isBuffer(e) ? e : f.from(e, i), u = o.length;
            if (u === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for(s = 0; s < n - t; ++s)this[s + t] = o[s % u];
        }
        return this;
    }, "fill");
    var Ie = {};
    function qt(r, e, t) {
        var n;
        Ie[r] = (n = class extends t {
            constructor(){
                super(), Object.defineProperty(this, "message", {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
            }
            get code() {
                return r;
            }
            set code(s) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: s,
                    writable: !0
                });
            }
            toString() {
                return `${this.name} [${r}]: ${this.message}`;
            }
        }, a(n, "NodeError"), n);
    }
    a(qt, "E");
    qt("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer boun\
ds";
    }, RangeError);
    qt("ERR_INVALID_ARG_TYPE", function(r, e) {
        return `The "${r}" argum\
ent must be of type number. Received type ${typeof e}`;
    }, TypeError);
    qt("ERR_OUT_O\
F_RANGE", function(r, e, t) {
        let n = `The value of "${r}" is out of range.`, i = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = Dn(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = Dn(i)), i += "n"), n += ` It\
 must be ${e}. Received ${i}`, n;
    }, RangeError);
    function Dn(r) {
        let e = "", t = r.length, n = r[0] === "-" ? 1 : 0;
        for(; t >= n + 4; t -= 3)e = `_${r.slice(t - 3, t)}${e}`;
        return `${r.slice(0, t)}${e}`;
    }
    a(Dn, "addNumericalSeparator");
    function ko(r, e, t) {
        Be(e, "offset"), (r[e] === void 0 || r[e + t] === void 0) && We(e, r.length - (t + 1));
    }
    a(ko, "checkBounds");
    function $n(r, e, t, n, i, s) {
        if (r > t || r < e) {
            let o = typeof e == "bigint" ? "n" : "", u;
            throw s > 3 ? e === 0 || e === BigInt(0) ? u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}` : u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and \
< 2 ** ${(s + 1) * 8 - 1}${o}` : u = `>= ${e}${o} and <= ${t}${o}`, new Ie.ERR_OUT_OF_RANGE("value", u, r);
        }
        ko(n, i, s);
    }
    a($n, "checkIntBI");
    function Be(r, e) {
        if (typeof r != "number") throw new Ie.ERR_INVALID_ARG_TYPE(e, "number", r);
    }
    a(Be, "validateNumber");
    function We(r, e, t) {
        throw Math.floor(r) !== r ? (Be(r, t), new Ie.ERR_OUT_OF_RANGE(t || "offset", "an integer", r)) : e < 0 ? new Ie.ERR_BUFFER_OUT_OF_BOUNDS : new Ie.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${e}`, r);
    }
    a(We, "boundsError");
    var Uo = /[^+/0-9A-Za-z-_]/g;
    function Oo(r) {
        if (r = r.split("=")[0], r = r.trim().replace(Uo, ""), r.length < 2) return "";
        for(; r.length % 4 !== 0;)r = r + "=";
        return r;
    }
    a(Oo, "base64clean");
    function Ut(r, e) {
        e = e || 1 / 0;
        let t, n = r.length, i = null, s = [];
        for(let o = 0; o < n; ++o){
            if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
                if (!i) {
                    if (t > 56319) {
                        (e -= 3) > -1 && s.push(239, 191, 189);
                        continue;
                    } else if (o + 1 === n) {
                        (e -= 3) > -1 && s.push(239, 191, 189);
                        continue;
                    }
                    i = t;
                    continue;
                }
                if (t < 56320) {
                    (e -= 3) > -1 && s.push(239, 191, 189), i = t;
                    continue;
                }
                t = (i - 55296 << 10 | t - 56320) + 65536;
            } else i && (e -= 3) > -1 && s.push(239, 191, 189);
            if (i = null, t < 128) {
                if ((e -= 1) < 0) break;
                s.push(t);
            } else if (t < 2048) {
                if ((e -= 2) < 0) break;
                s.push(t >> 6 | 192, t & 63 | 128);
            } else if (t < 65536) {
                if ((e -= 3) < 0) break;
                s.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
            } else if (t < 1114112) {
                if ((e -= 4) < 0) break;
                s.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
            } else throw new Error("Invalid code point");
        }
        return s;
    }
    a(Ut, "utf8ToBytes");
    function No(r) {
        let e = [];
        for(let t = 0; t < r.length; ++t)e.push(r.charCodeAt(t) & 255);
        return e;
    }
    a(No, "asciiToBytes");
    function qo(r, e) {
        let t, n, i, s = [];
        for(let o = 0; o < r.length && !((e -= 2) < 0); ++o)t = r.charCodeAt(o), n = t >> 8, i = t % 256, s.push(i), s.push(n);
        return s;
    }
    a(qo, "utf16leToBytes");
    function Vn(r) {
        return Mt.toByteArray(Oo(r));
    }
    a(Vn, "base64T\
oBytes");
    function at(r, e, t, n) {
        let i;
        for(i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)e[i + t] = r[i];
        return i;
    }
    a(at, "blitBuffer");
    function ue(r, e) {
        return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name;
    }
    a(ue, "isInstance");
    function Qt(r) {
        return r !== r;
    }
    a(Qt, "numberIsNaN");
    var Qo = function() {
        let r = "0123456789abcdef", e = new Array(256);
        for(let t = 0; t < 16; ++t){
            let n = t * 16;
            for(let i = 0; i < 16; ++i)e[n + i] = r[t] + r[i];
        }
        return e;
    }();
    function me(r) {
        return typeof BigInt > "u" ? jo : r;
    }
    a(me, "defineBigIntMethod");
    function jo() {
        throw new Error("BigInt not supported");
    }
    a(jo, "BufferBigIntNotDefined");
});
var S, x, E, w, y, m, p = z(()=>{
    "use strict";
    S = globalThis, x = globalThis.setImmediate ?? ((r)=>setTimeout(r, 0)), E = globalThis.clearImmediate ?? ((r)=>clearTimeout(r)), w = globalThis.crypto ?? {};
    w.subtle ?? (w.subtle = {});
    y = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : Kn().Buffer, m = globalThis.process ?? {};
    m.env ?? (m.env = {});
    try {
        m.nextTick(()=>{});
    } catch  {
        let e = Promise.resolve();
        m.nextTick = e.then.bind(e);
    }
});
var ge = I((nh, jt)=>{
    "use strict";
    p();
    var Re = typeof Reflect == "object" ? Reflect : null, zn = Re && typeof Re.apply == "function" ? Re.apply : a(function(e, t, n) {
        return Function.prototype.apply.call(e, t, n);
    }, "ReflectApply"), ut;
    Re && typeof Re.ownKeys == "function" ? ut = Re.ownKeys : Object.getOwnPropertySymbols ? ut = a(function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    }, "ReflectOwnKeys") : ut = a(function(e) {
        return Object.getOwnPropertyNames(e);
    }, "ReflectOwnKeys");
    function Wo(r) {
        console && console.warn && console.warn(r);
    }
    a(Wo, "ProcessEmitWarning");
    var Zn = Number.isNaN || a(function(e) {
        return e !== e;
    }, "NumberIsNaN");
    function L() {
        L.init.call(this);
    }
    a(L, "EventEmitter");
    jt.exports = L;
    jt.exports.once = Vo;
    L.EventEmitter = L;
    L.prototype._events = void 0;
    L.prototype._eventsCount = 0;
    L.prototype._maxListeners = void 0;
    var Yn = 10;
    function ct(r) {
        if (typeof r != "functi\
on") throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type ' + typeof r);
    }
    a(ct, "checkListener");
    Object.defineProperty(L, "defaultMaxLi\
steners", {
        enumerable: !0,
        get: a(function() {
            return Yn;
        }, "get"),
        set: a(function(r) {
            if (typeof r != "number" || r < 0 || Zn(r)) throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received ' + r + ".");
            Yn = r;
        }, "set")
    });
    L.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    L.prototype.setMaxListeners = a(function(e) {
        if (typeof e != "number" || e < 0 || Zn(e)) throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this;
    }, "setMaxListeners");
    function Jn(r) {
        return r._maxListeners === void 0 ? L.defaultMaxListeners : r._maxListeners;
    }
    a(Jn, "_getMaxListeners");
    L.prototype.getMaxListeners = a(function() {
        return Jn(this);
    }, "getMaxListeners");
    L.prototype.emit = a(function(e) {
        for(var t = [], n = 1; n < arguments.length; n++)t.push(arguments[n]);
        var i = e === "error", s = this._events;
        if (s !== void 0) i = i && s.error === void 0;
        else if (!i) return !1;
        if (i) {
            var o;
            if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
            var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw u.context = o, u;
        }
        var c = s[e];
        if (c === void 0) return !1;
        if (typeof c == "function") zn(c, this, t);
        else for(var h = c.length, l = ni(c, h), n = 0; n < h; ++n)zn(l[n], this, t);
        return !0;
    }, "emit");
    function Xn(r, e, t, n) {
        var i, s, o;
        if (ct(t), s = r._events, s === void 0 ? (s = r._events = Object.create(null), r._eventsCount = 0) : (s.newListener !== void 0 && (r.emit("newListener", e, t.listener ? t.listener : t), s = r._events), o = s[e]), o === void 0) o = s[e] = t, ++r._eventsCount;
        else if (typeof o == "function" ? o = s[e] = n ? [
            t,
            o
        ] : [
            o,
            t
        ] : n ? o.unshift(t) : o.push(t), i = Jn(r), i > 0 && o.length > i && !o.warned) {
            o.warned = !0;
            var u = new Error("Po\
ssible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners a\
dded. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExce\
ededWarning", u.emitter = r, u.type = e, u.count = o.length, Wo(u);
        }
        return r;
    }
    a(Xn, "_addList\
ener");
    L.prototype.addListener = a(function(e, t) {
        return Xn(this, e, t, !1);
    }, "addListe\
ner");
    L.prototype.on = L.prototype.addListener;
    L.prototype.prependListener = a(function(e, t) {
        return Xn(this, e, t, !0);
    }, "prependListener");
    function Ho() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    a(Ho, "onceWrapper");
    function ei(r, e, t) {
        var n = {
            fired: !1,
            wrapFn: void 0,
            target: r,
            type: e,
            listener: t
        }, i = Ho.bind(n);
        return i.listener = t, n.wrapFn = i, i;
    }
    a(ei, "_onceWrap");
    L.prototype.once = a(function(e, t) {
        return ct(t), this.on(e, ei(this, e, t)), this;
    }, "once");
    L.prototype.prependOnceListener = a(function(e, t) {
        return ct(t), this.prependListener(e, ei(this, e, t)), this;
    }, "prependOnceListener");
    L.prototype.removeListener = a(function(e, t) {
        var n, i, s, o, u;
        if (ct(t), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === t || n.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
        else if (typeof n != "function") {
            for(s = -1, o = n.length - 1; o >= 0; o--)if (n[o] === t || n[o].listener === t) {
                u = n[o].listener, s = o;
                break;
            }
            if (s < 0) return this;
            s === 0 ? n.shift() : Go(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, u || t);
        }
        return this;
    }, "removeListener");
    L.prototype.off = L.prototype.removeListener;
    L.prototype.removeAllListeners = a(function(e) {
        var t, n, i;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
        if (arguments.length === 0) {
            var s = Object.keys(n), o;
            for(i = 0; i < s.length; ++i)o = s[i], o !== "removeListener" && this.removeAllListeners(o);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if (t = n[e], typeof t == "function") this.removeListener(e, t);
        else if (t !== void 0) for(i = t.length - 1; i >= 0; i--)this.removeListener(e, t[i]);
        return this;
    }, "removeAllListeners");
    function ti(r, e, t) {
        var n = r._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? t ? [
            i.listener || i
        ] : [
            i
        ] : t ? $o(i) : ni(i, i.length);
    }
    a(ti, "_listeners");
    L.prototype.listeners = a(function(e) {
        return ti(this, e, !0);
    }, "listeners");
    L.prototype.rawListeners = a(function(e) {
        return ti(this, e, !1);
    }, "rawListeners");
    L.listenerCount = function(r, e) {
        return typeof r.listenerCount == "function" ? r.listenerCount(e) : ri.call(r, e);
    };
    L.prototype.listenerCount = ri;
    function ri(r) {
        var e = this._events;
        if (e !== void 0) {
            var t = e[r];
            if (typeof t == "function") return 1;
            if (t !== void 0) return t.length;
        }
        return 0;
    }
    a(ri, "listenerCount");
    L.prototype.eventNames = a(function() {
        return this._eventsCount > 0 ? ut(this._events) : [];
    }, "eventNames");
    function ni(r, e) {
        for(var t = new Array(e), n = 0; n < e; ++n)t[n] = r[n];
        return t;
    }
    a(ni, "arrayClone");
    function Go(r, e) {
        for(; e + 1 < r.length; e++)r[e] = r[e + 1];
        r.pop();
    }
    a(Go, "spliceOne");
    function $o(r) {
        for(var e = new Array(r.length), t = 0; t < e.length; ++t)e[t] = r[t].listener || r[t];
        return e;
    }
    a($o, "unwrapListeners");
    function Vo(r, e) {
        return new Promise(function(t, n) {
            function i(o) {
                r.removeListener(e, s), n(o);
            }
            a(i, "errorListener");
            function s() {
                typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(arguments));
            }
            a(s, "resolver"), ii(r, e, s, {
                once: !0
            }), e !== "error" && Ko(r, i, {
                once: !0
            });
        });
    }
    a(Vo, "once");
    function Ko(r, e, t) {
        typeof r.on == "function" && ii(r, "error", e, t);
    }
    a(Ko, "addErrorHandlerIfEventEmitter");
    function ii(r, e, t, n) {
        if (typeof r.on == "function") n.once ? r.once(e, t) : r.on(e, t);
        else if (typeof r.addEventListener == "function") r.addEventListener(e, a(function i(s) {
            n.once && r.removeEventListener(e, i), t(s);
        }, "wrapListener"));
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type ' + typeof r);
    }
    a(ii, "eventTargetAgnosticAddListener");
});
var He = {};
se(He, {
    default: ()=>zo
});
var zo, Ge = z(()=>{
    "use strict";
    p();
    zo = {};
});
function $e(r) {
    let e = 1779033703, t = 3144134277, n = 1013904242, i = 2773480762, s = 1359893119, o = 2600822924, u = 528734635, c = 1541459225, h = 0, l = 0, d = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ], b = a((A, g)=>A >>> g | A << 32 - g, "rrot"), C = new Uint32Array(64), B = new Uint8Array(64), Q = a(()=>{
        for(let R = 0, $ = 0; R < 16; R++, $ += 4)C[R] = B[$] << 24 | B[$ + 1] << 16 | B[$ + 2] << 8 | B[$ + 3];
        for(let R = 16; R < 64; R++){
            let $ = b(C[R - 15], 7) ^ b(C[R - 15], 18) ^ C[R - 15] >>> 3, ce = b(C[R - 2], 17) ^ b(C[R - 2], 19) ^ C[R - 2] >>> 10;
            C[R] = C[R - 16] + $ + C[R - 7] + ce | 0;
        }
        let A = e, g = t, P = n, K = i, k = s, j = o, ee = u, oe = c;
        for(let R = 0; R < 64; R++){
            let $ = b(k, 6) ^ b(k, 11) ^ b(k, 25), ce = k & j ^ ~k & ee, ye = oe + $ + ce + d[R] + C[R] | 0, Se = b(A, 2) ^ b(A, 13) ^ b(A, 22), je = A & g ^ A & P ^ g & P, he = Se + je | 0;
            oe = ee, ee = j, j = k, k = K + ye | 0, K = P, P = g, g = A, A = ye + he | 0;
        }
        e = e + A | 0, t = t + g | 0, n = n + P | 0, i = i + K | 0, s = s + k | 0, o = o + j | 0, u = u + ee | 0, c = c + oe | 0, l = 0;
    }, "process"), X = a((A)=>{
        typeof A == "string" && (A = new TextEncoder().encode(A));
        for(let g = 0; g < A.length; g++)B[l++] = A[g], l === 64 && Q();
        h += A.length;
    }, "add"), de = a(()=>{
        if (B[l++] = 128, l == 64 && Q(), l + 8 > 64) {
            for(; l < 64;)B[l++] = 0;
            Q();
        }
        for(; l < 58;)B[l++] = 0;
        let A = h * 8;
        B[l++] = A / 1099511627776 & 255, B[l++] = A / 4294967296 & 255, B[l++] = A >>> 24, B[l++] = A >>> 16 & 255, B[l++] = A >>> 8 & 255, B[l++] = A & 255, Q();
        let g = new Uint8Array(32);
        return g[0] = e >>> 24, g[1] = e >>> 16 & 255, g[2] = e >>> 8 & 255, g[3] = e & 255, g[4] = t >>> 24, g[5] = t >>> 16 & 255, g[6] = t >>> 8 & 255, g[7] = t & 255, g[8] = n >>> 24, g[9] = n >>> 16 & 255, g[10] = n >>> 8 & 255, g[11] = n & 255, g[12] = i >>> 24, g[13] = i >>> 16 & 255, g[14] = i >>> 8 & 255, g[15] = i & 255, g[16] = s >>> 24, g[17] = s >>> 16 & 255, g[18] = s >>> 8 & 255, g[19] = s & 255, g[20] = o >>> 24, g[21] = o >>> 16 & 255, g[22] = o >>> 8 & 255, g[23] = o & 255, g[24] = u >>> 24, g[25] = u >>> 16 & 255, g[26] = u >>> 8 & 255, g[27] = u & 255, g[28] = c >>> 24, g[29] = c >>> 16 & 255, g[30] = c >>> 8 & 255, g[31] = c & 255, g;
    }, "digest");
    return r === void 0 ? {
        add: X,
        digest: de
    } : (X(r), de());
}
var si = z(()=>{
    "use strict";
    p();
    a($e, "sha256");
});
var U, Ve, oi = z(()=>{
    "use strict";
    p();
    U = class U {
        constructor(){
            _(this, "_dataLength", 0);
            _(this, "_bufferLength", 0);
            _(this, "_state", new Int32Array(4));
            _(this, "_buffer", new ArrayBuffer(68));
            _(this, "_buffer8");
            _(this, "_buffer32");
            this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
        }
        static hashByteArray(e, t = !1) {
            return this.onePassHasher.start().appendByteArray(e).end(t);
        }
        static hashStr(e, t = !1) {
            return this.onePassHasher.start().appendStr(e).end(t);
        }
        static hashAsciiStr(e, t = !1) {
            return this.onePassHasher.start().appendAsciiStr(e).end(t);
        }
        static _hex(e) {
            let t = U.hexChars, n = U.hexOut, i, s, o, u;
            for(u = 0; u < 4; u += 1)for(s = u * 8, i = e[u], o = 0; o < 8; o += 2)n[s + 1 + o] = t.charAt(i & 15), i >>>= 4, n[s + 0 + o] = t.charAt(i & 15), i >>>= 4;
            return n.join("");
        }
        static _md5cycle(e, t) {
            let n = e[0], i = e[1], s = e[2], o = e[3];
            n += (i & s | ~i & o) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & o | s & ~o) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i ^ s ^ o) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (s ^ (i | ~o)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + s | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = s + e[2] | 0, e[3] = o + e[3] | 0;
        }
        start() {
            return this._dataLength = 0, this._bufferLength = 0, this._state.set(U.stateIdentity), this;
        }
        appendStr(e) {
            let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o;
            for(o = 0; o < e.length; o += 1){
                if (s = e.charCodeAt(o), s < 128) t[i++] = s;
                else if (s < 2048) t[i++] = (s >>> 6) + 192, t[i++] = s & 63 | 128;
                else if (s < 55296 || s > 56319) t[i++] = (s >>> 12) + 224, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
                else {
                    if (s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, s > 1114111) throw new Error("Unicode standard\
 supports code points up to U+10FFFF");
                    t[i++] = (s >>> 18) + 240, t[i++] = s >>> 12 & 63 | 128, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
                }
                i >= 64 && (this._dataLength += 64, U._md5cycle(this._state, n), i -= 64, n[0] = n[16]);
            }
            return this._bufferLength = i, this;
        }
        appendAsciiStr(e) {
            let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
            for(;;){
                for(s = Math.min(e.length - o, 64 - i); s--;)t[i++] = e.charCodeAt(o++);
                if (i < 64) break;
                this._dataLength += 64, U._md5cycle(this._state, n), i = 0;
            }
            return this._bufferLength = i, this;
        }
        appendByteArray(e) {
            let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
            for(;;){
                for(s = Math.min(e.length - o, 64 - i); s--;)t[i++] = e[o++];
                if (i < 64) break;
                this._dataLength += 64, U._md5cycle(this._state, n), i = 0;
            }
            return this._bufferLength = i, this;
        }
        getState() {
            let e = this._state;
            return {
                buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
                buflen: this._bufferLength,
                length: this._dataLength,
                state: [
                    e[0],
                    e[1],
                    e[2],
                    e[3]
                ]
            };
        }
        setState(e) {
            let t = e.buffer, n = e.state, i = this._state, s;
            for(this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], s = 0; s < t.length; s += 1)this._buffer8[s] = t.charCodeAt(s);
        }
        end(e = !1) {
            let t = this._bufferLength, n = this._buffer8, i = this._buffer32, s = (t >> 2) + 1;
            this._dataLength += t;
            let o = this._dataLength * 8;
            if (n[t] = 128, n[t + 1] = n[t + 2] = n[t + 3] = 0, i.set(U.buffer32Identity.subarray(s), s), t > 55 && (U._md5cycle(this._state, i), i.set(U.buffer32Identity)), o <= 4294967295) i[14] = o;
            else {
                let u = o.toString(16).match(/(.*?)(.{0,8})$/);
                if (u === null) return;
                let c = parseInt(u[2], 16), h = parseInt(u[1], 16) || 0;
                i[14] = c, i[15] = h;
            }
            return U._md5cycle(this._state, i), e ? this._state : U._hex(this._state);
        }
    };
    a(U, "Md5"), _(U, "stateIdentity", new Int32Array([
        1732584193,
        -271733879,
        -1732584194,
        271733878
    ])), _(U, "buffer32Identity", new Int32Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ])), _(U, "hexChars", "0123456789abcdef"), _(U, "hexO\
ut", []), _(U, "onePassHasher", new U);
    Ve = U;
});
var Wt = {};
se(Wt, {
    createHash: ()=>Zo,
    createHmac: ()=>Jo,
    randomBytes: ()=>Yo
});
function Yo(r) {
    return w.getRandomValues(y.alloc(r));
}
function Zo(r) {
    if (r === "sha256") return {
        update: a(function(e) {
            return {
                digest: a(function() {
                    return y.from($e(e));
                }, "digest")
            };
        }, "update")
    };
    if (r === "md5") return {
        update: a(function(e) {
            return {
                digest: a(function() {
                    return typeof e == "string" ? Ve.hashStr(e) : Ve.hashByteArray(e);
                }, "digest")
            };
        }, "update")
    };
    throw new Error(`Hash type '${r}' not supported`);
}
function Jo(r, e) {
    if (r !== "sha256") throw new Error(`Only sha256 is supported (requested: '${r}')`);
    return {
        update: a(function(t) {
            return {
                digest: a(function() {
                    typeof e == "string" && (e = new TextEncoder().encode(e)), typeof t == "string" && (t = new TextEncoder().encode(t));
                    let n = e.length;
                    if (n > 64) e = $e(e);
                    else if (n < 64) {
                        let c = new Uint8Array(64);
                        c.set(e), e = c;
                    }
                    let i = new Uint8Array(64), s = new Uint8Array(64);
                    for(let c = 0; c < 64; c++)i[c] = 54 ^ e[c], s[c] = 92 ^ e[c];
                    let o = new Uint8Array(t.length + 64);
                    o.set(i, 0), o.set(t, 64);
                    let u = new Uint8Array(96);
                    return u.set(s, 0), u.set($e(o), 64), y.from($e(u));
                }, "digest")
            };
        }, "update")
    };
}
var Ht = z(()=>{
    "use strict";
    p();
    si();
    oi();
    a(Yo, "randomBytes");
    a(Zo, "createHash");
    a(Jo, "createHmac");
});
var $t = I((ai)=>{
    "use strict";
    p();
    ai.parse = function(r, e) {
        return new Gt(r, e).parse();
    };
    var ht = class ht {
        constructor(e, t){
            this.source = e, this.transform = t || Xo, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
        }
        isEof() {
            return this.position >= this.source.length;
        }
        nextCharacter() {
            var e = this.source[this.position++];
            return e === "\\" ? {
                value: this.source[this.position++],
                escaped: !0
            } : {
                value: e,
                escaped: !1
            };
        }
        record(e) {
            this.recorded.push(e);
        }
        newEntry(e) {
            var t;
            (this.recorded.length > 0 || e) && (t = this.recorded.join(""), t === "NULL" && !e && (t = null), t !== null && (t = this.transform(t)), this.entries.push(t), this.recorded = []);
        }
        consumeDimensions() {
            if (this.source[0] === "[") for(; !this.isEof();){
                var e = this.nextCharacter();
                if (e.value === "=") break;
            }
        }
        parse(e) {
            var t, n, i;
            for(this.consumeDimensions(); !this.isEof();)if (t = this.nextCharacter(), t.value === "{" && !i) this.dimension++, this.dimension > 1 && (n = new ht(this.source.substr(this.position - 1), this.transform), this.entries.push(n.parse(!0)), this.position += n.position - 2);
            else if (t.value === "}" && !i) {
                if (this.dimension--, !this.dimension && (this.newEntry(), e)) return this.entries;
            } else t.value === '"' && !t.escaped ? (i && this.newEntry(!0), i = !i) : t.value === "," && !i ? this.newEntry() : this.record(t.value);
            if (this.dimension !== 0) throw new Error("array dimension not balanced");
            return this.entries;
        }
    };
    a(ht, "ArrayParser");
    var Gt = ht;
    function Xo(r) {
        return r;
    }
    a(Xo, "identity");
});
var Vt = I((Sh, ui)=>{
    p();
    var ea = $t();
    ui.exports = {
        create: a(function(r, e) {
            return {
                parse: a(function() {
                    return ea.parse(r, e);
                }, "parse")
            };
        }, "create")
    };
});
var li = I((vh, hi)=>{
    "use strict";
    p();
    var ta = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, ra = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, na = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, ia = /^-?infinity$/;
    hi.exports = a(function(e) {
        if (ia.test(e)) return Number(e.replace("i", "I"));
        var t = ta.exec(e);
        if (!t) return sa(e) || null;
        var n = !!t[8], i = parseInt(t[1], 10);
        n && (i = ci(i));
        var s = parseInt(t[2], 10) - 1, o = t[3], u = parseInt(t[4], 10), c = parseInt(t[5], 10), h = parseInt(t[6], 10), l = t[7];
        l = l ? 1e3 * parseFloat(l) : 0;
        var d, b = oa(e);
        return b != null ? (d = new Date(Date.UTC(i, s, o, u, c, h, l)), Kt(i) && d.setUTCFullYear(i), b !== 0 && d.setTime(d.getTime() - b)) : (d = new Date(i, s, o, u, c, h, l), Kt(i) && d.setFullYear(i)), d;
    }, "parseDate");
    function sa(r) {
        var e = ra.exec(r);
        if (e) {
            var t = parseInt(e[1], 10), n = !!e[4];
            n && (t = ci(t));
            var i = parseInt(e[2], 10) - 1, s = e[3], o = new Date(t, i, s);
            return Kt(t) && o.setFullYear(t), o;
        }
    }
    a(sa, "getDate");
    function oa(r) {
        if (r.endsWith("+00")) return 0;
        var e = na.exec(r.split(" ")[1]);
        if (e) {
            var t = e[1];
            if (t === "Z") return 0;
            var n = t === "-" ? -1 : 1, i = parseInt(e[2], 10) * 3600 + parseInt(e[3] || 0, 10) * 60 + parseInt(e[4] || 0, 10);
            return i * n * 1e3;
        }
    }
    a(oa, "timeZoneOffset");
    function ci(r) {
        return -(r - 1);
    }
    a(ci, "bcYearToNegativeYear");
    function Kt(r) {
        return r >= 0 && r < 100;
    }
    a(Kt, "is0To99");
});
var pi = I((Ch, fi)=>{
    p();
    fi.exports = ua;
    var aa = Object.prototype.hasOwnProperty;
    function ua(r) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var n in t)aa.call(t, n) && (r[n] = t[n]);
        }
        return r;
    }
    a(ua, "extend");
});
var mi = I((Ph, yi)=>{
    "use strict";
    p();
    var ca = pi();
    yi.exports = Fe;
    function Fe(r) {
        if (!(this instanceof Fe)) return new Fe(r);
        ca(this, xa(r));
    }
    a(Fe, "PostgresInterval");
    var ha = [
        "seconds",
        "\
minutes",
        "hours",
        "days",
        "months",
        "years"
    ];
    Fe.prototype.toPostgres = function() {
        var r = ha.filter(this.hasOwnProperty, this);
        return this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"), r.length === 0 ? "0" : r.map(function(e) {
            var t = this[e] || 0;
            return e === "seconds" && this.milliseconds && (t = (t + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "")), t + " " + e;
        }, this).join(" ");
    };
    var la = {
        years: "Y",
        months: "M",
        days: "D",
        hours: "H",
        minutes: "\
M",
        seconds: "S"
    }, fa = [
        "years",
        "months",
        "days"
    ], pa = [
        "hours",
        "minutes",
        "seconds"
    ];
    Fe.prototype.toISOString = Fe.prototype.toISO = function() {
        var r = fa.map(t, this).join(""), e = pa.map(t, this).join("");
        return "P" + r + "T" + e;
        //TURBOPACK unreachable
        ;
        function t(n) {
            var i = this[n] || 0;
            return n === "seconds" && this.milliseconds && (i = (i + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")), i + la[n];
        }
    };
    var zt = "([+-]?\\d+)", da = zt + "\\s+years?", ya = zt + "\\s+mons?", ma = zt + "\
\\s+days?", ga = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", wa = new RegExp([
        da,
        ya,
        ma,
        ga
    ].map(function(r) {
        return "(" + r + ")?";
    }).join("\\s*")), di = {
        years: 2,
        months: 4,
        days: 6,
        hours: 9,
        minutes: 10,
        seconds: 11,
        milliseconds: 12
    }, ba = [
        "hours",
        "minutes",
        "sec\
onds",
        "milliseconds"
    ];
    function Sa(r) {
        var e = r + "000000".slice(r.length);
        return parseInt(e, 10) / 1e3;
    }
    a(Sa, "parseMilliseconds");
    function xa(r) {
        if (!r) return {};
        var e = wa.exec(r), t = e[8] === "-";
        return Object.keys(di).reduce(function(n, i) {
            var s = di[i], o = e[s];
            return !o || (o = i === "milliseconds" ? Sa(o) : parseInt(o, 10), !o) || (t && ~ba.indexOf(i) && (o *= -1), n[i] = o), n;
        }, {});
    }
    a(xa, "parse");
});
var wi = I((Rh, gi)=>{
    "use strict";
    p();
    gi.exports = a(function(e) {
        if (/^\\x/.test(e)) return new y(e.substr(2), "hex");
        for(var t = "", n = 0; n < e.length;)if (e[n] !== "\\") t += e[n], ++n;
        else if (/[0-7]{3}/.test(e.substr(n + 1, 3))) t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8)), n += 4;
        else {
            for(var i = 1; n + i < e.length && e[n + i] === "\\";)i++;
            for(var s = 0; s < Math.floor(i / 2); ++s)t += "\\";
            n += Math.floor(i / 2) * 2;
        }
        return new y(t, "binary");
    }, "parseBytea");
});
var Ai = I((Dh, _i)=>{
    p();
    var Ke = $t(), ze = Vt(), lt = li(), Si = mi(), xi = wi();
    function ft(r) {
        return a(function(t) {
            return t === null ? t : r(t);
        }, "nullAllowed");
    }
    a(ft, "allowNull");
    function Ei(r) {
        return r === null ? r : r === "TRUE" || r === "t" || r === "true" || r === "y" || r === "yes" || r === "on" || r === "1";
    }
    a(Ei, "parseBool");
    function Ea(r) {
        return r ? Ke.parse(r, Ei) : null;
    }
    a(Ea, "pars\
eBoolArray");
    function va(r) {
        return parseInt(r, 10);
    }
    a(va, "parseBaseTenInt");
    function Yt(r) {
        return r ? Ke.parse(r, ft(va)) : null;
    }
    a(Yt, "parseIntegerArray");
    function _a(r) {
        return r ? Ke.parse(r, ft(function(e) {
            return vi(e).trim();
        })) : null;
    }
    a(_a, "parseBigIntegerArray");
    var Aa = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
            return t !== null && (t = er(t)), t;
        });
        return e.parse();
    }, "parsePointArray"), Zt = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
            return t !== null && (t = parseFloat(t)), t;
        });
        return e.parse();
    }, "parseFloatArray"), ne = a(function(r) {
        if (!r) return null;
        var e = ze.create(r);
        return e.parse();
    }, "parseStringArray"), Jt = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
            return t !== null && (t = lt(t)), t;
        });
        return e.parse();
    }, "\
parseDateArray"), Ca = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
            return t !== null && (t = Si(t)), t;
        });
        return e.parse();
    }, "parseIntervalArray"), Ta = a(function(r) {
        return r ? Ke.parse(r, ft(xi)) : null;
    }, "parseByteAArray"), Xt = a(function(r) {
        return parseInt(r, 10);
    }, "parseInteger"), vi = a(function(r) {
        var e = String(r);
        return /^\d+$/.test(e) ? e : r;
    }, "parseBigInteger"), bi = a(function(r) {
        return r ? Ke.parse(r, ft(JSON.parse)) : null;
    }, "parseJsonArray"), er = a(function(r) {
        return r[0] !== "(" ? null : (r = r.substring(1, r.length - 1).split(","), {
            x: parseFloat(r[0]),
            y: parseFloat(r[1])
        });
    }, "parsePoint"), Ia = a(function(r) {
        if (r[0] !== "<" && r[1] !== "(") return null;
        for(var e = "(", t = "", n = !1, i = 2; i < r.length - 1; i++){
            if (n || (e += r[i]), r[i] === ")") {
                n = !0;
                continue;
            } else if (!n) continue;
            r[i] !== "," && (t += r[i]);
        }
        var s = er(e);
        return s.radius = parseFloat(t), s;
    }, "parseCircle"), Pa = a(function(r) {
        r(20, vi), r(21, Xt), r(23, Xt), r(26, Xt), r(700, parseFloat), r(701, parseFloat), r(16, Ei), r(1082, lt), r(1114, lt), r(1184, lt), r(600, er), r(651, ne), r(718, Ia), r(1e3, Ea), r(1001, Ta), r(1005, Yt), r(1007, Yt), r(1028, Yt), r(1016, _a), r(1017, Aa), r(1021, Zt), r(1022, Zt), r(1231, Zt), r(1014, ne), r(1015, ne), r(1008, ne), r(1009, ne), r(1040, ne), r(1041, ne), r(1115, Jt), r(1182, Jt), r(1185, Jt), r(1186, Si), r(1187, Ca), r(17, xi), r(114, JSON.parse.bind(JSON)), r(3802, JSON.parse.bind(JSON)), r(199, bi), r(3807, bi), r(3907, ne), r(2951, ne), r(791, ne), r(1183, ne), r(1270, ne);
    }, "init");
    _i.exports = {
        init: Pa
    };
});
var Ti = I((Oh, Ci)=>{
    "use strict";
    p();
    var Z = 1e6;
    function Ba(r) {
        var e = r.readInt32BE(0), t = r.readUInt32BE(4), n = "";
        e < 0 && (e = ~e + (t === 0), t = ~t + 1 >>> 0, n = "-");
        var i = "", s, o, u, c, h, l;
        {
            if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
            for(c = "", h = 6 - u.length, l = 0; l < h; l++)c += "0";
            i = c + u + i;
        }
        {
            if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
            for(c = "", h = 6 - u.length, l = 0; l < h; l++)c += "0";
            i = c + u + i;
        }
        {
            if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
            for(c = "", h = 6 - u.length, l = 0; l < h; l++)c += "0";
            i = c + u + i;
        }
        return s = e % Z, o = 4294967296 * s + t, u = "" + o % Z, n + u + i;
    }
    a(Ba, "readInt8");
    Ci.exports = Ba;
});
var Ri = I((Qh, Li)=>{
    p();
    var La = Ti(), F = a(function(r, e, t, n, i) {
        t = t || 0, n = n || !1, i = i || function(C, B, Q) {
            return C * Math.pow(2, Q) + B;
        };
        var s = t >> 3, o = a(function(C) {
            return n ? ~C & 255 : C;
        }, "inv"), u = 255, c = 8 - t % 8;
        e < c && (u = 255 << 8 - e & 255, c = e), t && (u = u >> t % 8);
        var h = 0;
        t % 8 + e >= 8 && (h = i(0, o(r[s]) & u, c));
        for(var l = e + t >> 3, d = s + 1; d < l; d++)h = i(h, o(r[d]), 8);
        var b = (e + t) % 8;
        return b > 0 && (h = i(h, o(r[l]) >> 8 - b, b)), h;
    }, "parseBits"), Bi = a(function(r, e, t) {
        var n = Math.pow(2, t - 1) - 1, i = F(r, 1), s = F(r, t, 1);
        if (s === 0) return 0;
        var o = 1, u = a(function(h, l, d) {
            h === 0 && (h = 1);
            for(var b = 1; b <= d; b++)o /= 2, (l & 1 << d - b) > 0 && (h += o);
            return h;
        }, "parsePrecisionBits"), c = F(r, e, t + 1, !1, u);
        return s == Math.pow(2, t + 1) - 1 ? c === 0 ? i === 0 ? 1 / 0 : -1 / 0 : NaN : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
    }, "parseFloatFromBits"), Ra = a(function(r) {
        return F(r, 1) == 1 ? -1 * (F(r, 15, 1, !0) + 1) : F(r, 15, 1);
    }, "parseInt16"), Ii = a(function(r) {
        return F(r, 1) == 1 ? -1 * (F(r, 31, 1, !0) + 1) : F(r, 31, 1);
    }, "parseInt32"), Fa = a(function(r) {
        return Bi(r, 23, 8);
    }, "pars\
eFloat32"), Ma = a(function(r) {
        return Bi(r, 52, 11);
    }, "parseFloat64"), Da = a(function(r) {
        var e = F(r, 16, 32);
        if (e == 49152) return NaN;
        for(var t = Math.pow(1e4, F(r, 16, 16)), n = 0, i = [], s = F(r, 16), o = 0; o < s; o++)n += F(r, 16, 64 + 16 * o) * t, t /= 1e4;
        var u = Math.pow(10, F(r, 16, 48));
        return (e === 0 ? 1 : -1) * Math.round(n * u) / u;
    }, "parseNumeric"), Pi = a(function(r, e) {
        var t = F(e, 1), n = F(e, 63, 1), i = new Date((t === 0 ? 1 : -1) * n / 1e3 + 9466848e5);
        return r || i.setTime(i.getTime() + i.getTimezoneOffset() * 6e4), i.usec = n % 1e3, i.getMicroSeconds = function() {
            return this.usec;
        }, i.setMicroSeconds = function(s) {
            this.usec = s;
        }, i.getUTCMicroSeconds = function() {
            return this.usec;
        }, i;
    }, "parseDate"), Ye = a(function(r) {
        for(var e = F(r, 32), t = F(r, 32, 32), n = F(r, 32, 64), i = 96, s = [], o = 0; o < e; o++)s[o] = F(r, 32, i), i += 32, i += 32;
        var u = a(function(h) {
            var l = F(r, 32, i);
            if (i += 32, l == 4294967295) return null;
            var d;
            if (h == 23 || h == 20) return d = F(r, l * 8, i), i += l * 8, d;
            if (h == 25) return d = r.toString(this.encoding, i >> 3, (i += l << 3) >> 3), d;
            console.log("ERROR: ElementType not implemented: " + h);
        }, "parseElement"), c = a(function(h, l) {
            var d = [], b;
            if (h.length > 1) {
                var C = h.shift();
                for(b = 0; b < C; b++)d[b] = c(h, l);
                h.unshift(C);
            } else for(b = 0; b < h[0]; b++)d[b] = u(l);
            return d;
        }, "parse");
        return c(s, n);
    }, "parseArr\
ay"), ka = a(function(r) {
        return r.toString("utf8");
    }, "parseText"), Ua = a(function(r) {
        return r === null ? null : F(r, 8) > 0;
    }, "parseBool"), Oa = a(function(r) {
        r(20, La), r(21, Ra), r(23, Ii), r(26, Ii), r(1700, Da), r(700, Fa), r(701, Ma), r(16, Ua), r(1114, Pi.bind(null, !1)), r(1184, Pi.bind(null, !0)), r(1e3, Ye), r(1007, Ye), r(1016, Ye), r(1008, Ye), r(1009, Ye), r(25, ka);
    }, "init");
    Li.exports = {
        init: Oa
    };
});
var Mi = I((Hh, Fi)=>{
    p();
    Fi.exports = {
        BOOL: 16,
        BYTEA: 17,
        CHAR: 18,
        INT8: 20,
        INT2: 21,
        INT4: 23,
        REGPROC: 24,
        TEXT: 25,
        OID: 26,
        TID: 27,
        XID: 28,
        CID: 29,
        JSON: 114,
        XML: 142,
        PG_NODE_TREE: 194,
        SMGR: 210,
        PATH: 602,
        POLYGON: 604,
        CIDR: 650,
        FLOAT4: 700,
        FLOAT8: 701,
        ABSTIME: 702,
        RELTIME: 703,
        TINTERVAL: 704,
        CIRCLE: 718,
        MACADDR8: 774,
        MONEY: 790,
        MACADDR: 829,
        INET: 869,
        ACLITEM: 1033,
        BPCHAR: 1042,
        VARCHAR: 1043,
        DATE: 1082,
        TIME: 1083,
        TIMESTAMP: 1114,
        TIMESTAMPTZ: 1184,
        INTERVAL: 1186,
        TIMETZ: 1266,
        BIT: 1560,
        VARBIT: 1562,
        NUMERIC: 1700,
        REFCURSOR: 1790,
        REGPROCEDURE: 2202,
        REGOPER: 2203,
        REGOPERATOR: 2204,
        REGCLASS: 2205,
        REGTYPE: 2206,
        UUID: 2950,
        TXID_SNAPSHOT: 2970,
        PG_LSN: 3220,
        PG_NDISTINCT: 3361,
        PG_DEPENDENCIES: 3402,
        TSVECTOR: 3614,
        TSQUERY: 3615,
        GTSVECTOR: 3642,
        REGCONFIG: 3734,
        REGDICTIONARY: 3769,
        JSONB: 3802,
        REGNAMESPACE: 4089,
        REGROLE: 4096
    };
});
var Xe = I((Je)=>{
    p();
    var Na = Ai(), qa = Ri(), Qa = Vt(), ja = Mi();
    Je.getTypeParser = Wa;
    Je.setTypeParser = Ha;
    Je.arrayParser = Qa;
    Je.builtins = ja;
    var Ze = {
        text: {},
        binary: {}
    };
    function Di(r) {
        return String(r);
    }
    a(Di, "noParse");
    function Wa(r, e) {
        return e = e || "text", Ze[e] && Ze[e][r] || Di;
    }
    a(Wa, "getTypeParser");
    function Ha(r, e, t) {
        typeof e == "function" && (t = e, e = "text"), Ze[e][r] = t;
    }
    a(Ha, "setTypeParser");
    Na.init(function(r, e) {
        Ze.text[r] = e;
    });
    qa.init(function(r, e) {
        Ze.binary[r] = e;
    });
});
var et = I((zh, tr)=>{
    "use strict";
    p();
    tr.exports = {
        host: "localhost",
        user: m.platform === "win32" ? m.env.USERNAME : m.env.USER,
        database: void 0,
        password: null,
        connectionString: void 0,
        port: 5432,
        rows: 0,
        binary: !1,
        max: 10,
        idleTimeoutMillis: 3e4,
        client_encoding: "",
        ssl: !1,
        application_name: void 0,
        fallback_application_name: void 0,
        options: void 0,
        parseInputDatesAsUTC: !1,
        statement_timeout: !1,
        lock_timeout: !1,
        idle_in_transaction_session_timeout: !1,
        query_timeout: !1,
        connect_timeout: 0,
        keepalives: 1,
        keepalives_idle: 0
    };
    var Me = Xe(), Ga = Me.getTypeParser(20, "text"), $a = Me.getTypeParser(1016, "text");
    tr.exports.__defineSetter__("parseIn\
t8", function(r) {
        Me.setTypeParser(20, "text", r ? Me.getTypeParser(23, "text") : Ga), Me.setTypeParser(1016, "text", r ? Me.getTypeParser(1007, "text") : $a);
    });
});
var tt = I((Zh, Ui)=>{
    "use strict";
    p();
    var Va = (Ht(), O(Wt)), Ka = et();
    function za(r) {
        var e = r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        return '"' + e + '"';
    }
    a(za, "escapeElement");
    function ki(r) {
        for(var e = "{", t = 0; t < r.length; t++)t > 0 && (e = e + ","), r[t] === null || typeof r[t] > "u" ? e = e + "NULL" : Array.isArray(r[t]) ? e = e + ki(r[t]) : r[t] instanceof y ? e += "\\\\x" + r[t].toString("hex") : e += za(pt(r[t]));
        return e = e + "}", e;
    }
    a(ki, "arrayString");
    var pt = a(function(r, e) {
        if (r == null) return null;
        if (r instanceof y) return r;
        if (ArrayBuffer.isView(r)) {
            var t = y.from(r.buffer, r.byteOffset, r.byteLength);
            return t.length === r.byteLength ? t : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
        }
        return r instanceof Date ? Ka.parseInputDatesAsUTC ? Ja(r) : Za(r) : Array.isArray(r) ? ki(r) : typeof r == "object" ? Ya(r, e) : r.toString();
    }, "pre\
pareValue");
    function Ya(r, e) {
        if (r && typeof r.toPostgres == "function") {
            if (e = e || [], e.indexOf(r) !== -1) throw new Error('circular reference detected while preparing "' + r + '" for query');
            return e.push(r), pt(r.toPostgres(pt), e);
        }
        return JSON.stringify(r);
    }
    a(Ya, "prepareObject");
    function G(r, e) {
        for(r = "" + r; r.length < e;)r = "0" + r;
        return r;
    }
    a(G, "pad");
    function Za(r) {
        var e = -r.getTimezoneOffset(), t = r.getFullYear(), n = t < 1;
        n && (t = Math.abs(t) + 1);
        var i = G(t, 4) + "-" + G(r.getMonth() + 1, 2) + "-" + G(r.getDate(), 2) + "T" + G(r.getHours(), 2) + ":" + G(r.getMinutes(), 2) + ":" + G(r.getSeconds(), 2) + "." + G(r.getMilliseconds(), 3);
        return e < 0 ? (i += "-", e *= -1) : i += "+", i += G(Math.floor(e / 60), 2) + ":" + G(e % 60, 2), n && (i += " BC"), i;
    }
    a(Za, "dateToString");
    function Ja(r) {
        var e = r.getUTCFullYear(), t = e < 1;
        t && (e = Math.abs(e) + 1);
        var n = G(e, 4) + "-" + G(r.getUTCMonth() + 1, 2) + "-" + G(r.getUTCDate(), 2) + "\
T" + G(r.getUTCHours(), 2) + ":" + G(r.getUTCMinutes(), 2) + ":" + G(r.getUTCSeconds(), 2) + "." + G(r.getUTCMilliseconds(), 3);
        return n += "+00:00", t && (n += " BC"), n;
    }
    a(Ja, "dateToStrin\
gUTC");
    function Xa(r, e, t) {
        return r = typeof r == "string" ? {
            text: r
        } : r, e && (typeof e == "\
function" ? r.callback = e : r.values = e), t && (r.callback = t), r;
    }
    a(Xa, "normalizeQueryConfi\
g");
    var rr = a(function(r) {
        return Va.createHash("md5").update(r, "utf-8").digest("h\
ex");
    }, "md5"), eu = a(function(r, e, t) {
        var n = rr(e + r), i = rr(y.concat([
            y.from(n),
            t
        ]));
        return "\
md5" + i;
    }, "postgresMd5PasswordHash");
    Ui.exports = {
        prepareValue: a(function(e) {
            return pt(e);
        }, "prepareValueWrapper"),
        normalizeQueryConfig: Xa,
        postgresMd5PasswordHash: eu,
        md5: rr
    };
});
var ji = I((el, Qi)=>{
    "use strict";
    p();
    var nr = (Ht(), O(Wt));
    function tu(r) {
        if (r.indexOf("SCRAM-SHA-256") === -1) throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");
        let e = nr.randomBytes(18).toString("base64");
        return {
            mechanism: "\
SCRAM-SHA-256",
            clientNonce: e,
            response: "n,,n=*,r=" + e,
            message: "SASLInitialResponse"
        };
    }
    a(tu, "startSession");
    function ru(r, e, t) {
        if (r.message !== "SASLInitialResponse") throw new Error("SASL: Last message was not SASLInitialResponse");
        if (typeof e != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
        if (typeof t != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");
        let n = su(t);
        if (n.nonce.startsWith(r.clientNonce)) {
            if (n.nonce.length === r.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short");
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");
        var i = y.from(n.salt, "base64"), s = uu(e, i, n.iteration), o = De(s, "Client Key"), u = au(o), c = "n=*,r=" + r.clientNonce, h = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration, l = "c=biws,r=" + n.nonce, d = c + "," + h + "," + l, b = De(u, d), C = qi(o, b), B = C.toString("base64"), Q = De(s, "Server Key"), X = De(Q, d);
        r.message = "SASLRespon\
se", r.serverSignature = X.toString("base64"), r.response = l + ",p=" + B;
    }
    a(ru, "continueSe\
ssion");
    function nu(r, e) {
        if (r.message !== "SASLResponse") throw new Error("SASL: La\
st message was not SASLResponse");
        if (typeof e != "string") throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
        let { serverSignature: t } = ou(e);
        if (t !== r.serverSignature) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match");
    }
    a(nu, "finalizeSession");
    function iu(r) {
        if (typeof r != "string") throw new TypeError("SASL: text must be a string");
        return r.split("").map((e, t)=>r.charCodeAt(t)).every((e)=>e >= 33 && e <= 43 || e >= 45 && e <= 126);
    }
    a(iu, "isPrintableC\
hars");
    function Oi(r) {
        return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
    }
    a(Oi, "isBase64");
    function Ni(r) {
        if (typeof r != "string") throw new TypeError("SASL: attribute pairs text must be a string");
        return new Map(r.split(",").map((e)=>{
            if (!/^.=/.test(e)) throw new Error("SASL: Invalid attribute pair entry");
            let t = e[0], n = e.substring(2);
            return [
                t,
                n
            ];
        }));
    }
    a(Ni, "parseAttributePairs");
    function su(r) {
        let e = Ni(r), t = e.get("r");
        if (t) {
            if (!iu(t)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters");
        } else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");
        let n = e.get("s");
        if (n) {
            if (!Oi(n)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
        } else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
        let i = e.get("i");
        if (i) {
            if (!/^[1-9][0-9]*$/.test(i)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt");
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
        let s = parseInt(i, 10);
        return {
            nonce: t,
            salt: n,
            iteration: s
        };
    }
    a(su, "parseServerFirstMe\
ssage");
    function ou(r) {
        let t = Ni(r).get("v");
        if (t) {
            if (!Oi(t)) throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
        } else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
        return {
            serverSignature: t
        };
    }
    a(ou, "parseServerFinalMessage");
    function qi(r, e) {
        if (!y.isBuffer(r)) throw new TypeError("first argument must be a Buffer");
        if (!y.isBuffer(e)) throw new TypeError("second\
 argument must be a Buffer");
        if (r.length !== e.length) throw new Error("Buffer leng\
ths must match");
        if (r.length === 0) throw new Error("Buffers cannot be empty");
        return y.from(r.map((t, n)=>r[n] ^ e[n]));
    }
    a(qi, "xorBuffers");
    function au(r) {
        return nr.createHash("sha256").update(r).digest();
    }
    a(au, "sha256");
    function De(r, e) {
        return nr.createHmac("sha256", r).update(e).digest();
    }
    a(De, "hmacSha256");
    function uu(r, e, t) {
        for(var n = De(r, y.concat([
            e,
            y.from([
                0,
                0,
                0,
                1
            ])
        ])), i = n, s = 0; s < t - 1; s++)n = De(r, n), i = qi(i, n);
        return i;
    }
    a(uu, "Hi");
    Qi.exports = {
        startSession: tu,
        continueSession: ru,
        finalizeSession: nu
    };
});
var ir = {};
se(ir, {
    join: ()=>cu
});
function cu(...r) {
    return r.join("/");
}
var sr = z(()=>{
    "use strict";
    p();
    a(cu, "join");
});
var or = {};
se(or, {
    stat: ()=>hu
});
function hu(r, e) {
    e(new Error("No filesystem"));
}
var ar = z(()=>{
    "use strict";
    p();
    a(hu, "stat");
});
var ur = {};
se(ur, {
    default: ()=>lu
});
var lu, cr = z(()=>{
    "use strict";
    p();
    lu = {};
});
var Wi = {};
se(Wi, {
    StringDecoder: ()=>hr
});
var lr, hr, Hi = z(()=>{
    "use strict";
    p();
    lr = class lr {
        constructor(e){
            _(this, "td");
            this.td = new TextDecoder(e);
        }
        write(e) {
            return this.td.decode(e, {
                stream: !0
            });
        }
        end(e) {
            return this.td.decode(e);
        }
    };
    a(lr, "StringDecoder");
    hr = lr;
});
var Ki = I((hl, Vi)=>{
    "use strict";
    p();
    var { Transform: fu } = (cr(), O(ur)), { StringDecoder: pu } = (Hi(), O(Wi)), we = Symbol("last"), dt = Symbol("decoder");
    function du(r, e, t) {
        let n;
        if (this.overflow) {
            if (n = this[dt].write(r).split(this.matcher), n.length === 1) return t();
            n.shift(), this.overflow = !1;
        } else this[we] += this[dt].write(r), n = this[we].split(this.matcher);
        this[we] = n.pop();
        for(let i = 0; i < n.length; i++)try {
            $i(this, this.mapper(n[i]));
        } catch (s) {
            return t(s);
        }
        if (this.overflow = this[we].length > this.maxLength, this.overflow && !this.skipOverflow) {
            t(new Error("maximum buffer reached"));
            return;
        }
        t();
    }
    a(du, "transform");
    function yu(r) {
        if (this[we] += this[dt].end(), this[we]) try {
            $i(this, this.mapper(this[we]));
        } catch (e) {
            return r(e);
        }
        r();
    }
    a(yu, "flush");
    function $i(r, e) {
        e !== void 0 && r.push(e);
    }
    a($i, "push");
    function Gi(r) {
        return r;
    }
    a(Gi, "noop");
    function mu(r, e, t) {
        switch(r = r || /\r?\n/, e = e || Gi, t = t || {}, arguments.length){
            case 1:
                typeof r == "function" ? (e = r, r = /\r?\n/) : typeof r == "object" && !(r instanceof RegExp) && !r[Symbol.split] && (t = r, r = /\r?\n/);
                break;
            case 2:
                typeof r == "function" ? (t = e, e = r, r = /\r?\n/) : typeof e == "object" && (t = e, e = Gi);
        }
        t = Object.assign({}, t), t.autoDestroy = !0, t.transform = du, t.flush = yu, t.readableObjectMode = !0;
        let n = new fu(t);
        return n[we] = "", n[dt] = new pu("utf8"), n.matcher = r, n.mapper = e, n.maxLength = t.maxLength, n.skipOverflow = t.skipOverflow || !1, n.overflow = !1, n._destroy = function(i, s) {
            this._writableState.errorEmitted = !1, s(i);
        }, n;
    }
    a(mu, "split");
    Vi.exports = mu;
});
var Zi = I((pl, fe)=>{
    "use strict";
    p();
    var zi = (sr(), O(ir)), gu = (cr(), O(ur)).Stream, wu = Ki(), Yi = (Ge(), O(He)), bu = 5432, yt = m.platform === "win32", rt = m.stderr, Su = 56, xu = 7, Eu = 61440, vu = 32768;
    function _u(r) {
        return (r & Eu) == vu;
    }
    a(_u, "isRegFile");
    var ke = [
        "host",
        "port",
        "database",
        "user",
        "password"
    ], fr = ke.length, Au = ke[fr - 1];
    function pr() {
        var r = rt instanceof gu && rt.writable === !0;
        if (r) {
            var e = Array.prototype.slice.call(arguments).concat(`
`);
            rt.write(Yi.format.apply(Yi, e));
        }
    }
    a(pr, "warn");
    Object.defineProperty(fe.exports, "isWin", {
        get: a(function() {
            return yt;
        }, "get"),
        set: a(function(r) {
            yt = r;
        }, "set")
    });
    fe.exports.warnTo = function(r) {
        var e = rt;
        return rt = r, e;
    };
    fe.exports.getFileName = function(r) {
        var e = r || m.env, t = e.PGPASSFILE || (yt ? zi.join(e.APPDATA || "./", "postgresql", "pgpass.\
conf") : zi.join(e.HOME || "./", ".pgpass"));
        return t;
    };
    fe.exports.usePgPass = function(r, e) {
        return Object.prototype.hasOwnProperty.call(m.env, "PGPASSWORD") ? !1 : yt ? !0 : (e = e || "\
<unkn>", _u(r.mode) ? r.mode & (Su | xu) ? (pr('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less', e), !1) : !0 : (pr('WARNING:\
 password file "%s" is not a plain file', e), !1));
    };
    var Cu = fe.exports.match = function(r, e) {
        return ke.slice(0, -1).reduce(function(t, n, i) {
            return i == 1 && Number(r[n] || bu) === Number(e[n]) ? t && !0 : t && (e[n] === "*" || e[n] === r[n]);
        }, !0);
    };
    fe.exports.getPassword = function(r, e, t) {
        var n, i = e.pipe(wu());
        function s(c) {
            var h = Tu(c);
            h && Iu(h) && Cu(r, h) && (n = h[Au], i.end());
        }
        a(s, "onLine");
        var o = a(function() {
            e.destroy(), t(n);
        }, "onEnd"), u = a(function(c) {
            e.destroy(), pr("WARNING: error on reading file: %s", c), t(void 0);
        }, "onErr");
        e.on("error", u), i.on("data", s).on("end", o).on("error", u);
    };
    var Tu = fe.exports.parseLine = function(r) {
        if (r.length < 11 || r.match(/^\s+#/)) return null;
        for(var e = "", t = "", n = 0, i = 0, s = 0, o = {}, u = !1, c = a(function(l, d, b) {
            var C = r.substring(d, b);
            Object.hasOwnProperty.call(m.env, "PGPASS_NO_DEESCAPE") || (C = C.replace(/\\([:\\])/g, "$1")), o[ke[l]] = C;
        }, "addToObj"), h = 0; h < r.length - 1; h += 1){
            if (e = r.charAt(h + 1), t = r.charAt(h), u = n == fr - 1, u) {
                c(n, i);
                break;
            }
            h >= 0 && e == ":" && t !== "\\" && (c(n, i, h + 1), i = h + 2, n += 1);
        }
        return o = Object.keys(o).length === fr ? o : null, o;
    }, Iu = fe.exports.isValidEntry = function(r) {
        for(var e = {
            0: function(o) {
                return o.length > 0;
            },
            1: function(o) {
                return o === "*" ? !0 : (o = Number(o), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
            },
            2: function(o) {
                return o.length > 0;
            },
            3: function(o) {
                return o.length > 0;
            },
            4: function(o) {
                return o.length > 0;
            }
        }, t = 0; t < ke.length; t += 1){
            var n = e[t], i = r[ke[t]] || "", s = n(i);
            if (!s) return !1;
        }
        return !0;
    };
});
var Xi = I((gl, dr)=>{
    "use strict";
    p();
    var ml = (sr(), O(ir)), Ji = (ar(), O(or)), mt = Zi();
    dr.exports = function(r, e) {
        var t = mt.getFileName();
        Ji.stat(t, function(n, i) {
            if (n || !mt.usePgPass(i, t)) return e(void 0);
            var s = Ji.createReadStream(t);
            mt.getPassword(r, s, e);
        });
    };
    dr.exports.warnTo = mt.warnTo;
});
var wt = I((bl, es)=>{
    "use strict";
    p();
    var Pu = Xe();
    function gt(r) {
        this._types = r || Pu, this.text = {}, this.binary = {};
    }
    a(gt, "TypeOverrides");
    gt.prototype.getOverrides = function(r) {
        switch(r){
            case "text":
                return this.text;
            case "binary":
                return this.binary;
            default:
                return {};
        }
    };
    gt.prototype.setTypeParser = function(r, e, t) {
        typeof e == "function" && (t = e, e = "text"), this.getOverrides(e)[r] = t;
    };
    gt.prototype.getTypeParser = function(r, e) {
        return e = e || "text", this.getOverrides(e)[r] || this._types.getTypeParser(r, e);
    };
    es.exports = gt;
});
var ts = {};
se(ts, {
    default: ()=>Bu
});
var Bu, rs = z(()=>{
    "use strict";
    p();
    Bu = {};
});
var ns = {};
se(ns, {
    parse: ()=>yr
});
function yr(r, e = !1) {
    let { protocol: t } = new URL(r), n = "\
http:" + r.substring(t.length), { username: i, password: s, host: o, hostname: u, port: c, pathname: h, search: l, searchParams: d, hash: b } = new URL(n);
    s = decodeURIComponent(s), i = decodeURIComponent(i), h = decodeURIComponent(h);
    let C = i + ":" + s, B = e ? Object.fromEntries(d.entries()) : l;
    return {
        href: r,
        protocol: t,
        auth: C,
        username: i,
        password: s,
        host: o,
        hostname: u,
        port: c,
        pathname: h,
        search: l,
        query: B,
        hash: b
    };
}
var mr = z(()=>{
    "use strict";
    p();
    a(yr, "parse");
});
var ss = I((Al, is)=>{
    "use strict";
    p();
    var Lu = (mr(), O(ns)), gr = (ar(), O(or));
    function wr(r) {
        if (r.charAt(0) === "/") {
            var t = r.split(" ");
            return {
                host: t[0],
                database: t[1]
            };
        }
        var e = Lu.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1") : r, !0), t = e.query;
        for(var n in t)Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
        var i = (e.auth || ":").split(":");
        if (t.user = i[0], t.password = i.splice(1).join(":"), t.port = e.port, e.protocol == "socket:") return t.host = decodeURI(e.pathname), t.database = e.query.db, t.client_encoding = e.query.encoding, t;
        t.host || (t.host = e.hostname);
        var s = e.pathname;
        if (!t.host && s && /^%2f/i.test(s)) {
            var o = s.split("/");
            t.host = decodeURIComponent(o[0]), s = o.splice(1).join("/");
        }
        switch(s && s.charAt(0) === "/" && (s = s.slice(1) || null), t.database = s && decodeURI(s), (t.ssl === "true" || t.ssl === "1") && (t.ssl = !0), t.ssl === "0" && (t.ssl = !1), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = gr.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = gr.readFileSync(t.sslkey).toString()), t.sslrootcert && (t.ssl.ca = gr.readFileSync(t.sslrootcert).toString()), t.sslmode){
            case "disable":
                {
                    t.ssl = !1;
                    break;
                }
            case "prefer":
            case "require":
            case "verify-\
ca":
            case "verify-full":
                break;
            case "no-verify":
                {
                    t.ssl.rejectUnauthorized = !1;
                    break;
                }
        }
        return t;
    }
    a(wr, "parse");
    is.exports = wr;
    wr.parse = wr;
});
var bt = I((Il, us)=>{
    "use strict";
    p();
    var Ru = (rs(), O(ts)), as = et(), os = ss().parse, V = a(function(r, e, t) {
        return t === void 0 ? t = m.env["PG" + r.toUpperCase()] : t === !1 || (t = m.env[t]), e[r] || t || as[r];
    }, "val"), Fu = a(function() {
        switch(m.env.PGSSLMODE){
            case "disable":
                return !1;
            case "\
prefer":
            case "require":
            case "verify-ca":
            case "verify-full":
                return !0;
            case "no-verify":
                return {
                    rejectUnauthorized: !1
                };
        }
        return as.ssl;
    }, "readSSLConfigFromEnvironment"), Ue = a(function(r) {
        return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quo\
teParamValue"), ie = a(function(r, e, t) {
        var n = e[t];
        n != null && r.push(t + "=" + Ue(n));
    }, "ad\
d"), Sr = class Sr {
        constructor(e){
            e = typeof e == "string" ? os(e) : e || {}, e.connectionString && (e = Object.assign({}, e, os(e.connectionString))), this.user = V("user", e), this.database = V("database", e), this.database === void 0 && (this.database = this.user), this.port = parseInt(V("port", e), 10), this.host = V("host", e), Object.defineProperty(this, "password", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: V("password", e)
            }), this.binary = V("binary", e), this.options = V("options", e), this.ssl = typeof e.ssl > "u" ? Fu() : e.ssl, typeof this.ssl == "st\
ring" && this.ssl === "true" && (this.ssl = !0), this.ssl === "no-verify" && (this.ssl = {
                rejectUnauthorized: !1
            }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", {
                enumerable: !1
            }), this.client_encoding = V("client_encoding", e), this.replication = V("replication", e), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = V("applicatio\
n_name", e, "PGAPPNAME"), this.fallback_application_name = V("fallback_application_na\
me", e, !1), this.statement_timeout = V("statement_timeout", e, !1), this.lock_timeout = V("lock_timeout", e, !1), this.idle_in_transaction_session_timeout = V("idle_in_transac\
tion_session_timeout", e, !1), this.query_timeout = V("query_timeout", e, !1), e.connectionTimeoutMillis === void 0 ? this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(e.connectionTimeoutMillis / 1e3), e.keepAlive === !1 ? this.keepalives = 0 : e.keepAlive === !0 && (this.keepalives = 1), typeof e.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(e.keepAliveInitialDelayMillis / 1e3));
        }
        getLibpqConnectionString(e) {
            var t = [];
            ie(t, this, "user"), ie(t, this, "password"), ie(t, this, "port"), ie(t, this, "application\
_name"), ie(t, this, "fallback_application_name"), ie(t, this, "connect_timeout"), ie(t, this, "options");
            var n = typeof this.ssl == "object" ? this.ssl : this.ssl ? {
                sslmode: this.ssl
            } : {};
            if (ie(t, n, "sslmode"), ie(t, n, "sslca"), ie(t, n, "sslkey"), ie(t, n, "sslcert"), ie(t, n, "sslrootcert"), this.database && t.push("dbname=" + Ue(this.database)), this.replication && t.push("replication=" + Ue(this.replication)), this.host && t.push("host=" + Ue(this.host)), this.isDomainSocket) return e(null, t.join(" "));
            this.client_encoding && t.push("cli\
ent_encoding=" + Ue(this.client_encoding)), Ru.lookup(this.host, function(i, s) {
                return i ? e(i, null) : (t.push("hostaddr=" + Ue(s)), e(null, t.join(" ")));
            });
        }
    };
    a(Sr, "ConnectionPa\
rameters");
    var br = Sr;
    us.exports = br;
});
var ls = I((Ll, hs)=>{
    "use strict";
    p();
    var Mu = Xe(), cs = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, Er = class Er {
        constructor(e, t){
            this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = t, this.RowCtor = null, this.rowAsArray = e === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
        }
        addCommandComplete(e) {
            var t;
            e.text ? t = cs.exec(e.text) : t = cs.exec(e.command), t && (this.command = t[1], t[3] ? (this.oid = parseInt(t[2], 10), this.rowCount = parseInt(t[3], 10)) : t[2] && (this.rowCount = parseInt(t[2], 10)));
        }
        _parseRowAsArray(e) {
            for(var t = new Array(e.length), n = 0, i = e.length; n < i; n++){
                var s = e[n];
                s !== null ? t[n] = this._parsers[n](s) : t[n] = null;
            }
            return t;
        }
        parseRow(e) {
            for(var t = {}, n = 0, i = e.length; n < i; n++){
                var s = e[n], o = this.fields[n].name;
                s !== null ? t[o] = this._parsers[n](s) : t[o] = null;
            }
            return t;
        }
        addRow(e) {
            this.rows.push(e);
        }
        addFields(e) {
            this.fields = e, this.fields.length && (this._parsers = new Array(e.length));
            for(var t = 0; t < e.length; t++){
                var n = e[t];
                this._types ? this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || "t\
ext") : this._parsers[t] = Mu.getTypeParser(n.dataTypeID, n.format || "text");
            }
        }
    };
    a(Er, "\
Result");
    var xr = Er;
    hs.exports = xr;
});
var ys = I((Ml, ds)=>{
    "use strict";
    p();
    var { EventEmitter: Du } = ge(), fs = ls(), ps = tt(), _r = class _r extends Du {
        constructor(e, t, n){
            super(), e = ps.normalizeQueryConfig(e, t, n), this.text = e.text, this.values = e.values, this.rows = e.rows, this.types = e.types, this.name = e.name, this.binary = e.binary, this.portal = e.portal || "", this.callback = e.callback, this._rowMode = e.rowMode, m.domain && e.callback && (this.callback = m.domain.bind(e.callback)), this._result = new fs(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = !1, this._canceledDueToError = !1, this._promise = null;
        }
        requiresPreparation() {
            return this.name || this.rows ? !0 : !this.text || !this.values ? !1 : this.values.length > 0;
        }
        _checkForMultirow() {
            this._result.command && (Array.isArray(this._results) || (this._results = [
                this._result
            ]), this._result = new fs(this._rowMode, this.types), this._results.push(this._result));
        }
        handleRowDescription(e) {
            this._checkForMultirow(), this._result.addFields(e.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
        }
        handleDataRow(e) {
            let t;
            if (!this._canceledDueToError) {
                try {
                    t = this._result.parseRow(e.fields);
                } catch (n) {
                    this._canceledDueToError = n;
                    return;
                }
                this.emit("row", t, this._result), this._accumulateRows && this._result.addRow(t);
            }
        }
        handleCommandComplete(e, t) {
            this._checkForMultirow(), this._result.addCommandComplete(e), this.rows && t.sync();
        }
        handleEmptyQuery(e) {
            this.rows && e.sync();
        }
        handleError(e, t) {
            if (this._canceledDueToError && (e = this._canceledDueToError, this._canceledDueToError = !1), this.callback) return this.callback(e);
            this.emit("er\
ror", e);
        }
        handleReadyForQuery(e) {
            if (this._canceledDueToError) return this.handleError(this._canceledDueToError, e);
            if (this.callback) try {
                this.callback(null, this._results);
            } catch (t) {
                m.nextTick(()=>{
                    throw t;
                });
            }
            this.emit("end", this._results);
        }
        submit(e) {
            if (typeof this.text != "string" && typeof this.name != "string") return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");
            let t = e.parsedStatements[this.name];
            return this.text && t && this.text !== t ? new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(e) : e.query(this.text), null);
        }
        hasBeenParsed(e) {
            return this.name && e.parsedStatements[this.name];
        }
        handlePortalSuspended(e) {
            this._getRows(e, this.rows);
        }
        _getRows(e, t) {
            e.execute({
                portal: this.portal,
                rows: t
            }), t ? e.flush() : e.sync();
        }
        prepare(e) {
            this.isPreparedStatement = !0, this.hasBeenParsed(e) || e.parse({
                text: this.text,
                name: this.name,
                types: this.types
            });
            try {
                e.bind({
                    portal: this.portal,
                    statement: this.name,
                    values: this.values,
                    binary: this.binary,
                    valueMapper: ps.prepareValue
                });
            } catch (t) {
                this.handleError(t, e);
                return;
            }
            e.describe({
                type: "P",
                name: this.portal || ""
            }), this._getRows(e, this.rows);
        }
        handleCopyInResponse(e) {
            e.sendCopyFail("No source stream defined");
        }
        handleCopyData(e, t) {}
    };
    a(_r, "Query");
    var vr = _r;
    ds.exports = vr;
});
var ws = {};
se(ws, {
    Socket: ()=>_e,
    isIP: ()=>ku
});
function ku(r) {
    return 0;
}
var gs, ms, v, _e, St = z(()=>{
    "use strict";
    p();
    gs = Te(ge(), 1);
    a(ku, "isIP");
    ms = /^[^.]+\./, v = class v extends gs.EventEmitter {
        constructor(){
            super(...arguments);
            _(this, "opts", {});
            _(this, "connecting", !1);
            _(this, "pending", !0);
            _(this, "writable", !0);
            _(this, "encrypted", !1);
            _(this, "authorized", !1);
            _(this, "des\
troyed", !1);
            _(this, "ws", null);
            _(this, "writeBuffer");
            _(this, "tlsState", 0);
            _(this, "tlsRead");
            _(this, "tlsWrite");
        }
        static get poolQueryViaFetch() {
            return v.opts.poolQueryViaFetch ?? v.defaults.poolQueryViaFetch;
        }
        static set poolQueryViaFetch(t) {
            v.opts.poolQueryViaFetch = t;
        }
        static get fetchEndpoint() {
            return v.opts.fetchEndpoint ?? v.defaults.fetchEndpoint;
        }
        static set fetchEndpoint(t) {
            v.opts.fetchEndpoint = t;
        }
        static get fetchConnectionCache() {
            return !0;
        }
        static set fetchConnectionCache(t) {
            console.warn("The `fetchConnectionCache` option is deprecated (now always `true`\
)");
        }
        static get fetchFunction() {
            return v.opts.fetchFunction ?? v.defaults.fetchFunction;
        }
        static set fetchFunction(t) {
            v.opts.fetchFunction = t;
        }
        static get webSocketConstructor() {
            return v.opts.webSocketConstructor ?? v.defaults.webSocketConstructor;
        }
        static set webSocketConstructor(t) {
            v.opts.webSocketConstructor = t;
        }
        get webSocketConstructor() {
            return this.opts.webSocketConstructor ?? v.webSocketConstructor;
        }
        set webSocketConstructor(t) {
            this.opts.webSocketConstructor = t;
        }
        static get wsProxy() {
            return v.opts.wsProxy ?? v.defaults.wsProxy;
        }
        static set wsProxy(t) {
            v.opts.wsProxy = t;
        }
        get wsProxy() {
            return this.opts.wsProxy ?? v.wsProxy;
        }
        set wsProxy(t) {
            this.opts.wsProxy = t;
        }
        static get coalesceWrites() {
            return v.opts.coalesceWrites ?? v.defaults.coalesceWrites;
        }
        static set coalesceWrites(t) {
            v.opts.coalesceWrites = t;
        }
        get coalesceWrites() {
            return this.opts.coalesceWrites ?? v.coalesceWrites;
        }
        set coalesceWrites(t) {
            this.opts.coalesceWrites = t;
        }
        static get useSecureWebSocket() {
            return v.opts.useSecureWebSocket ?? v.defaults.useSecureWebSocket;
        }
        static set useSecureWebSocket(t) {
            v.opts.useSecureWebSocket = t;
        }
        get useSecureWebSocket() {
            return this.opts.useSecureWebSocket ?? v.useSecureWebSocket;
        }
        set useSecureWebSocket(t) {
            this.opts.useSecureWebSocket = t;
        }
        static get forceDisablePgSSL() {
            return v.opts.forceDisablePgSSL ?? v.defaults.forceDisablePgSSL;
        }
        static set forceDisablePgSSL(t) {
            v.opts.forceDisablePgSSL = t;
        }
        get forceDisablePgSSL() {
            return this.opts.forceDisablePgSSL ?? v.forceDisablePgSSL;
        }
        set forceDisablePgSSL(t) {
            this.opts.forceDisablePgSSL = t;
        }
        static get disableSNI() {
            return v.opts.disableSNI ?? v.defaults.disableSNI;
        }
        static set disableSNI(t) {
            v.opts.disableSNI = t;
        }
        get disableSNI() {
            return this.opts.disableSNI ?? v.disableSNI;
        }
        set disableSNI(t) {
            this.opts.disableSNI = t;
        }
        static get pipelineConnect() {
            return v.opts.pipelineConnect ?? v.defaults.pipelineConnect;
        }
        static set pipelineConnect(t) {
            v.opts.pipelineConnect = t;
        }
        get pipelineConnect() {
            return this.opts.pipelineConnect ?? v.pipelineConnect;
        }
        set pipelineConnect(t) {
            this.opts.pipelineConnect = t;
        }
        static get subtls() {
            return v.opts.subtls ?? v.defaults.subtls;
        }
        static set subtls(t) {
            v.opts.subtls = t;
        }
        get subtls() {
            return this.opts.subtls ?? v.subtls;
        }
        set subtls(t) {
            this.opts.subtls = t;
        }
        static get pipelineTLS() {
            return v.opts.pipelineTLS ?? v.defaults.pipelineTLS;
        }
        static set pipelineTLS(t) {
            v.opts.pipelineTLS = t;
        }
        get pipelineTLS() {
            return this.opts.pipelineTLS ?? v.pipelineTLS;
        }
        set pipelineTLS(t) {
            this.opts.pipelineTLS = t;
        }
        static get rootCerts() {
            return v.opts.rootCerts ?? v.defaults.rootCerts;
        }
        static set rootCerts(t) {
            v.opts.rootCerts = t;
        }
        get rootCerts() {
            return this.opts.rootCerts ?? v.rootCerts;
        }
        set rootCerts(t) {
            this.opts.rootCerts = t;
        }
        wsProxyAddrForHost(t, n) {
            let i = this.wsProxy;
            if (i === void 0) throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");
            return typeof i == "functi\
on" ? i(t, n) : `${i}?address=${t}:${n}`;
        }
        setNoDelay() {
            return this;
        }
        setKeepAlive() {
            return this;
        }
        ref() {
            return this;
        }
        unref() {
            return this;
        }
        connect(t, n, i) {
            this.connecting = !0, i && this.once("\
connect", i);
            let s = a(()=>{
                this.connecting = !1, this.pending = !1, this.emit("connect"), this.emit("ready");
            }, "handleWebSocketOpen"), o = a((c, h = !1)=>{
                c.binaryType = "arraybuf\
fer", c.addEventListener("error", (l)=>{
                    this.emit("error", l), this.emit("close");
                }), c.addEventListener("message", (l)=>{
                    if (this.tlsState === 0) {
                        let d = y.from(l.data);
                        this.emit("data", d);
                    }
                }), c.addEventListener("close", ()=>{
                    this.emit("close");
                }), h ? s() : c.addEventListener("open", s);
            }, "configureWebSocket"), u;
            try {
                u = this.wsProxyAddrForHost(n, typeof t == "st\
ring" ? parseInt(t, 10) : t);
            } catch (c) {
                this.emit("error", c), this.emit("close");
                return;
            }
            try {
                let h = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
                if (this.webSocketConstructor !== void 0) this.ws = new this.webSocketConstructor(h), o(this.ws);
                else try {
                    this.ws = new WebSocket(h), o(this.ws);
                } catch  {
                    this.ws = new __unstable_WebSocket(h), o(this.ws);
                }
            } catch (c) {
                let l = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
                fetch(l, {
                    headers: {
                        Upgrade: "websocket"
                    }
                }).then((d)=>{
                    if (this.ws = d.webSocket, this.ws == null) throw c;
                    this.ws.accept(), o(this.ws, !0);
                }).catch((d)=>{
                    this.emit("error", new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${d.message}`)), this.emit("close");
                });
            }
        }
        async startTls(t) {
            if (this.subtls === void 0) throw new Error("For Postgres SSL connections, you must set `neonConfig.s\
ubtls` to the subtls library. See https://github.com/neondatabase/serverless/blo\
b/main/CONFIG.md for more information.");
            this.tlsState = 1;
            let n = this.subtls.TrustedCert.fromPEM(this.rootCerts), i = new this.subtls.WebSocketReadQueue(this.ws), s = i.read.bind(i), o = this.rawWrite.bind(this), [u, c] = await this.subtls.startTls(t, n, s, o, {
                useSNI: !this.disableSNI,
                expectPreData: this.pipelineTLS ? new Uint8Array([
                    83
                ]) : void 0
            });
            this.tlsRead = u, this.tlsWrite = c, this.tlsState = 2, this.encrypted = !0, this.authorized = !0, this.emit("secureConnection", this), this.tlsReadLoop();
        }
        async tlsReadLoop() {
            for(;;){
                let t = await this.tlsRead();
                if (t === void 0) break;
                {
                    let n = y.from(t);
                    this.emit("data", n);
                }
            }
        }
        rawWrite(t) {
            if (!this.coalesceWrites) {
                this.ws.send(t);
                return;
            }
            if (this.writeBuffer === void 0) this.writeBuffer = t, setTimeout(()=>{
                this.ws.send(this.writeBuffer), this.writeBuffer = void 0;
            }, 0);
            else {
                let n = new Uint8Array(this.writeBuffer.length + t.length);
                n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), this.writeBuffer = n;
            }
        }
        write(t, n = "utf8", i = (s)=>{}) {
            return t.length === 0 ? (i(), !0) : (typeof t == "string" && (t = y.from(t, n)), this.tlsState === 0 ? (this.rawWrite(t), i()) : this.tlsState === 1 ? this.once("secureConnection", ()=>{
                this.write(t, n, i);
            }) : (this.tlsWrite(t), i()), !0);
        }
        end(t = y.alloc(0), n = "utf8", i = ()=>{}) {
            return this.write(t, n, ()=>{
                this.ws.close(), i();
            }), this;
        }
        destroy() {
            return this.destroyed = !0, this.end();
        }
    };
    a(v, "Socket"), _(v, "defaults", {
        poolQueryViaFetch: !1,
        fetchEndpoint: a((t, n, i)=>{
            let s;
            return i?.jwtAuth ? s = t.replace(ms, "apiauth.") : s = t.replace(ms, "api."), "https\
://" + s + "/sql";
        }, "fetchEndpoint"),
        fetchConnectionCache: !0,
        fetchFunction: void 0,
        webSocketConstructor: void 0,
        wsProxy: a((t)=>t + "/v2", "wsProxy"),
        useSecureWebSocket: !0,
        forceDisablePgSSL: !0,
        coalesceWrites: !0,
        pipelineConnect: "password",
        subtls: void 0,
        rootCerts: "",
        pipelineTLS: !1,
        disableSNI: !1
    }), _(v, "opts", {});
    _e = v;
});
var Xr = I((T)=>{
    "use strict";
    p();
    Object.defineProperty(T, "__esModule", {
        value: !0
    });
    T.NoticeMessage = T.DataRowMessage = T.CommandCompleteMessage = T.ReadyForQueryMessage = T.NotificationResponseMessage = T.BackendKeyDataMessage = T.AuthenticationMD5Password = T.ParameterStatusMessage = T.ParameterDescriptionMessage = T.RowDescriptionMessage = T.Field = T.CopyResponse = T.CopyDataMessage = T.DatabaseError = T.copyDone = T.emptyQuery = T.replicationStart = T.portalSuspended = T.noData = T.closeComplete = T.bindComplete = T.parseComplete = void 0;
    T.parseComplete = {
        name: "parseComplete",
        length: 5
    };
    T.bindComplete = {
        name: "bin\
dComplete",
        length: 5
    };
    T.closeComplete = {
        name: "closeComplete",
        length: 5
    };
    T.noData = {
        name: "\
noData",
        length: 5
    };
    T.portalSuspended = {
        name: "portalSuspended",
        length: 5
    };
    T.replicationStart = {
        name: "replicationStart",
        length: 4
    };
    T.emptyQuery = {
        name: "emptyQuery",
        length: 4
    };
    T.copyDone = {
        name: "copyDone",
        length: 4
    };
    var Nr = class Nr extends Error {
        constructor(e, t, n){
            super(e), this.length = t, this.name = n;
        }
    };
    a(Nr, "DatabaseError");
    var Ar = Nr;
    T.DatabaseError = Ar;
    var qr = class qr {
        constructor(e, t){
            this.length = e, this.chunk = t, this.name = "copyData";
        }
    };
    a(qr, "CopyDataMessage");
    var Cr = qr;
    T.CopyDataMessage = Cr;
    var Qr = class Qr {
        constructor(e, t, n, i){
            this.length = e, this.name = t, this.binary = n, this.columnTypes = new Array(i);
        }
    };
    a(Qr, "Co\
pyResponse");
    var Tr = Qr;
    T.CopyResponse = Tr;
    var jr = class jr {
        constructor(e, t, n, i, s, o, u){
            this.name = e, this.tableID = t, this.columnID = n, this.dataTypeID = i, this.dataTypeSize = s, this.dataTypeModifier = o, this.format = u;
        }
    };
    a(jr, "Field");
    var Ir = jr;
    T.Field = Ir;
    var Wr = class Wr {
        constructor(e, t){
            this.length = e, this.fieldCount = t, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
        }
    };
    a(Wr, "RowDescriptionMessage");
    var Pr = Wr;
    T.RowDescriptionMessage = Pr;
    var Hr = class Hr {
        constructor(e, t){
            this.length = e, this.parameterCount = t, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
        }
    };
    a(Hr, "P\
arameterDescriptionMessage");
    var Br = Hr;
    T.ParameterDescriptionMessage = Br;
    var Gr = class Gr {
        constructor(e, t, n){
            this.length = e, this.parameterName = t, this.parameterValue = n, this.name = "parameterSta\
tus";
        }
    };
    a(Gr, "ParameterStatusMessage");
    var Lr = Gr;
    T.ParameterStatusMessage = Lr;
    var $r = class $r {
        constructor(e, t){
            this.length = e, this.salt = t, this.name = "authenticationMD5Password";
        }
    };
    a($r, "Authenti\
cationMD5Password");
    var Rr = $r;
    T.AuthenticationMD5Password = Rr;
    var Vr = class Vr {
        constructor(e, t, n){
            this.length = e, this.processID = t, this.secretKey = n, this.name = "backendKeyData";
        }
    };
    a(Vr, "BackendKeyDataMessage");
    var Fr = Vr;
    T.BackendKeyDataMessage = Fr;
    var Kr = class Kr {
        constructor(e, t, n, i){
            this.length = e, this.processId = t, this.channel = n, this.payload = i, this.name = "notifica\
tion";
        }
    };
    a(Kr, "NotificationResponseMessage");
    var Mr = Kr;
    T.NotificationResponseMessage = Mr;
    var zr = class zr {
        constructor(e, t){
            this.length = e, this.status = t, this.name = "ready\
ForQuery";
        }
    };
    a(zr, "ReadyForQueryMessage");
    var Dr = zr;
    T.ReadyForQueryMessage = Dr;
    var Yr = class Yr {
        constructor(e, t){
            this.length = e, this.text = t, this.name = "commandComplete";
        }
    };
    a(Yr, "CommandCompleteMes\
sage");
    var kr = Yr;
    T.CommandCompleteMessage = kr;
    var Zr = class Zr {
        constructor(e, t){
            this.length = e, this.fields = t, this.name = "dataRow", this.fieldCount = t.length;
        }
    };
    a(Zr, "Data\
RowMessage");
    var Ur = Zr;
    T.DataRowMessage = Ur;
    var Jr = class Jr {
        constructor(e, t){
            this.length = e, this.message = t, this.name = "notice";
        }
    };
    a(Jr, "NoticeMessage");
    var Or = Jr;
    T.NoticeMessage = Or;
});
var bs = I((xt)=>{
    "use strict";
    p();
    Object.defineProperty(xt, "__esModule", {
        value: !0
    });
    xt.Writer = void 0;
    var tn = class tn {
        constructor(e = 256){
            this.size = e, this.offset = 5, this.headerPosition = 0, this.buffer = y.allocUnsafe(e);
        }
        ensure(e) {
            var t = this.buffer.length - this.offset;
            if (t < e) {
                var n = this.buffer, i = n.length + (n.length >> 1) + e;
                this.buffer = y.allocUnsafe(i), n.copy(this.buffer);
            }
        }
        addInt32(e) {
            return this.ensure(4), this.buffer[this.offset++] = e >>> 24 & 255, this.buffer[this.offset++] = e >>> 16 & 255, this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
        }
        addInt16(e) {
            return this.ensure(2), this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
        }
        addCString(e) {
            if (!e) this.ensure(1);
            else {
                var t = y.byteLength(e);
                this.ensure(t + 1), this.buffer.write(e, this.offset, "utf-8"), this.offset += t;
            }
            return this.buffer[this.offset++] = 0, this;
        }
        addString(e = "") {
            var t = y.byteLength(e);
            return this.ensure(t), this.buffer.write(e, this.offset), this.offset += t, this;
        }
        add(e) {
            return this.ensure(e.length), e.copy(this.buffer, this.offset), this.offset += e.length, this;
        }
        join(e) {
            if (e) {
                this.buffer[this.headerPosition] = e;
                let t = this.offset - (this.headerPosition + 1);
                this.buffer.writeInt32BE(t, this.headerPosition + 1);
            }
            return this.buffer.slice(e ? 0 : 5, this.offset);
        }
        flush(e) {
            var t = this.join(e);
            return this.offset = 5, this.headerPosition = 0, this.buffer = y.allocUnsafe(this.size), t;
        }
    };
    a(tn, "Wr\
iter");
    var en = tn;
    xt.Writer = en;
});
var xs = I((vt)=>{
    "use strict";
    p();
    Object.defineProperty(vt, "__esModule", {
        value: !0
    });
    vt.serialize = void 0;
    var rn = bs(), M = new rn.Writer, Uu = a((r)=>{
        M.addInt16(3).addInt16(0);
        for (let n of Object.keys(r))M.addCString(n).addCString(r[n]);
        M.addCString("cl\
ient_encoding").addCString("UTF8");
        var e = M.addCString("").flush(), t = e.length + 4;
        return new rn.Writer().addInt32(t).add(e).flush();
    }, "startup"), Ou = a(()=>{
        let r = y.allocUnsafe(8);
        return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
    }, "requestSsl"), Nu = a((r)=>M.addCString(r).flush(112), "password"), qu = a(function(r, e) {
        return M.addCString(r).addInt32(y.byteLength(e)).addString(e), M.flush(112);
    }, "sendSASLInitialResponseMessage"), Qu = a(function(r) {
        return M.addString(r).flush(112);
    }, "sendSCRAMClientFinalMessage"), ju = a((r)=>M.addCString(r).flush(81), "query"), Ss = [], Wu = a((r)=>{
        let e = r.name || "";
        e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause c\
onflicts and silent errors executing queries"));
        let t = r.types || Ss;
        for(var n = t.length, i = M.addCString(e).addCString(r.text).addInt16(n), s = 0; s < n; s++)i.addInt32(t[s]);
        return M.flush(80);
    }, "parse"), Oe = new rn.Writer, Hu = a(function(r, e) {
        for(let t = 0; t < r.length; t++){
            let n = e ? e(r[t], t) : r[t];
            n == null ? (M.addInt16(0), Oe.addInt32(-1)) : n instanceof y ? (M.addInt16(1), Oe.addInt32(n.length), Oe.add(n)) : (M.addInt16(0), Oe.addInt32(y.byteLength(n)), Oe.addString(n));
        }
    }, "writeValues"), Gu = a((r = {})=>{
        let e = r.portal || "", t = r.statement || "", n = r.binary || !1, i = r.values || Ss, s = i.length;
        return M.addCString(e).addCString(t), M.addInt16(s), Hu(i, r.valueMapper), M.addInt16(s), M.add(Oe.flush()), M.addInt16(n ? 1 : 0), M.flush(66);
    }, "bind"), $u = y.from([
        69,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        0,
        0
    ]), Vu = a((r)=>{
        if (!r || !r.portal && !r.rows) return $u;
        let e = r.portal || "", t = r.rows || 0, n = y.byteLength(e), i = 4 + n + 1 + 4, s = y.allocUnsafe(1 + i);
        return s[0] = 69, s.writeInt32BE(i, 1), s.write(e, 5, "utf-8"), s[n + 5] = 0, s.writeUInt32BE(t, s.length - 4), s;
    }, "execute"), Ku = a((r, e)=>{
        let t = y.allocUnsafe(16);
        return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(5678, 6), t.writeInt32BE(r, 8), t.writeInt32BE(e, 12), t;
    }, "cancel"), nn = a((r, e)=>{
        let n = 4 + y.byteLength(e) + 1, i = y.allocUnsafe(1 + n);
        return i[0] = r, i.writeInt32BE(n, 1), i.write(e, 5, "utf-8"), i[n] = 0, i;
    }, "cstringMessage"), zu = M.addCString("P").flush(68), Yu = M.addCString("S").flush(68), Zu = a((r)=>r.name ? nn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? zu : Yu, "describe"), Ju = a((r)=>{
        let e = `${r.type}${r.name || ""}`;
        return nn(67, e);
    }, "close"), Xu = a((r)=>M.add(r).flush(100), "copyData"), ec = a((r)=>nn(102, r), "copyFail"), Et = a((r)=>y.from([
            r,
            0,
            0,
            0,
            4
        ]), "code\
OnlyBuffer"), tc = Et(72), rc = Et(83), nc = Et(88), ic = Et(99), sc = {
        startup: Uu,
        password: Nu,
        requestSsl: Ou,
        sendSASLInitialResponseMessage: qu,
        sendSCRAMClientFinalMessage: Qu,
        query: ju,
        parse: Wu,
        bind: Gu,
        execute: Vu,
        describe: Zu,
        close: Ju,
        flush: a(()=>tc, "flush"),
        sync: a(()=>rc, "sync"),
        end: a(()=>nc, "end"),
        copyData: Xu,
        copyDone: a(()=>ic, "copyDone"),
        copyFail: ec,
        cancel: Ku
    };
    vt.serialize = sc;
});
var Es = I((_t)=>{
    "use strict";
    p();
    Object.defineProperty(_t, "__esModule", {
        value: !0
    });
    _t.BufferReader = void 0;
    var oc = y.allocUnsafe(0), on = class on {
        constructor(e = 0){
            this.offset = e, this.buffer = oc, this.encoding = "utf-8";
        }
        setBuffer(e, t) {
            this.offset = e, this.buffer = t;
        }
        int16() {
            let e = this.buffer.readInt16BE(this.offset);
            return this.offset += 2, e;
        }
        byte() {
            let e = this.buffer[this.offset];
            return this.offset++, e;
        }
        int32() {
            let e = this.buffer.readInt32BE(this.offset);
            return this.offset += 4, e;
        }
        string(e) {
            let t = this.buffer.toString(this.encoding, this.offset, this.offset + e);
            return this.offset += e, t;
        }
        cstring() {
            let e = this.offset, t = e;
            for(; this.buffer[t++] !== 0;);
            return this.offset = t, this.buffer.toString(this.encoding, e, t - 1);
        }
        bytes(e) {
            let t = this.buffer.slice(this.offset, this.offset + e);
            return this.offset += e, t;
        }
    };
    a(on, "BufferReader");
    var sn = on;
    _t.BufferReader = sn;
});
var As = I((At)=>{
    "use strict";
    p();
    Object.defineProperty(At, "__esModule", {
        value: !0
    });
    At.Parser = void 0;
    var D = Xr(), ac = Es(), an = 1, uc = 4, vs = an + uc, _s = y.allocUnsafe(0), cn = class cn {
        constructor(e){
            if (this.buffer = _s, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new ac.BufferReader, e?.mode === "binary") throw new Error("Binary mode not supported yet");
            this.mode = e?.mode || "text";
        }
        parse(e, t) {
            this.mergeBuffer(e);
            let n = this.bufferOffset + this.bufferLength, i = this.bufferOffset;
            for(; i + vs <= n;){
                let s = this.buffer[i], o = this.buffer.readUInt32BE(i + an), u = an + o;
                if (u + i <= n) {
                    let c = this.handlePacket(i + vs, s, o, this.buffer);
                    t(c), i += u;
                } else break;
            }
            i === n ? (this.buffer = _s, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = n - i, this.bufferOffset = i);
        }
        mergeBuffer(e) {
            if (this.bufferLength > 0) {
                let t = this.bufferLength + e.byteLength;
                if (t + this.bufferOffset > this.buffer.byteLength) {
                    let i;
                    if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) i = this.buffer;
                    else {
                        let s = this.buffer.byteLength * 2;
                        for(; t >= s;)s *= 2;
                        i = y.allocUnsafe(s);
                    }
                    this.buffer.copy(i, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = i, this.bufferOffset = 0;
                }
                e.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = t;
            } else this.buffer = e, this.bufferOffset = 0, this.bufferLength = e.byteLength;
        }
        handlePacket(e, t, n, i) {
            switch(t){
                case 50:
                    return D.bindComplete;
                case 49:
                    return D.parseComplete;
                case 51:
                    return D.closeComplete;
                case 110:
                    return D.noData;
                case 115:
                    return D.portalSuspended;
                case 99:
                    return D.copyDone;
                case 87:
                    return D.replicationStart;
                case 73:
                    return D.emptyQuery;
                case 68:
                    return this.parseDataRowMessage(e, n, i);
                case 67:
                    return this.parseCommandCompleteMessage(e, n, i);
                case 90:
                    return this.parseReadyForQueryMessage(e, n, i);
                case 65:
                    return this.parseNotificationMessage(e, n, i);
                case 82:
                    return this.parseAuthenticationResponse(e, n, i);
                case 83:
                    return this.parseParameterStatusMessage(e, n, i);
                case 75:
                    return this.parseBackendKeyData(e, n, i);
                case 69:
                    return this.parseErrorMessage(e, n, i, "error");
                case 78:
                    return this.parseErrorMessage(e, n, i, "notice");
                case 84:
                    return this.parseRowDescriptionMessage(e, n, i);
                case 116:
                    return this.parseParameterDescriptionMessage(e, n, i);
                case 71:
                    return this.parseCopyInMessage(e, n, i);
                case 72:
                    return this.parseCopyOutMessage(e, n, i);
                case 100:
                    return this.parseCopyData(e, n, i);
                default:
                    return new D.DatabaseError("received invalid response: " + t.toString(16), n, "error");
            }
        }
        parseReadyForQueryMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.string(1);
            return new D.ReadyForQueryMessage(t, i);
        }
        parseCommandCompleteMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.cstring();
            return new D.CommandCompleteMessage(t, i);
        }
        parseCopyData(e, t, n) {
            let i = n.slice(e, e + (t - 4));
            return new D.CopyDataMessage(t, i);
        }
        parseCopyInMessage(e, t, n) {
            return this.parseCopyMessage(e, t, n, "copyInRespons\
e");
        }
        parseCopyOutMessage(e, t, n) {
            return this.parseCopyMessage(e, t, n, "copyOutRespon\
se");
        }
        parseCopyMessage(e, t, n, i) {
            this.reader.setBuffer(e, n);
            let s = this.reader.byte() !== 0, o = this.reader.int16(), u = new D.CopyResponse(t, i, s, o);
            for(let c = 0; c < o; c++)u.columnTypes[c] = this.reader.int16();
            return u;
        }
        parseNotificationMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int32(), s = this.reader.cstring(), o = this.reader.cstring();
            return new D.NotificationResponseMessage(t, i, s, o);
        }
        parseRowDescriptionMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int16(), s = new D.RowDescriptionMessage(t, i);
            for(let o = 0; o < i; o++)s.fields[o] = this.parseField();
            return s;
        }
        parseField() {
            let e = this.reader.cstring(), t = this.reader.int32(), n = this.reader.int16(), i = this.reader.int32(), s = this.reader.int16(), o = this.reader.int32(), u = this.reader.int16() === 0 ? "text" : "binary";
            return new D.Field(e, t, n, i, s, o, u);
        }
        parseParameterDescriptionMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int16(), s = new D.ParameterDescriptionMessage(t, i);
            for(let o = 0; o < i; o++)s.dataTypeIDs[o] = this.reader.int32();
            return s;
        }
        parseDataRowMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int16(), s = new Array(i);
            for(let o = 0; o < i; o++){
                let u = this.reader.int32();
                s[o] = u === -1 ? null : this.reader.string(u);
            }
            return new D.DataRowMessage(t, s);
        }
        parseParameterStatusMessage(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.cstring(), s = this.reader.cstring();
            return new D.ParameterStatusMessage(t, i, s);
        }
        parseBackendKeyData(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int32(), s = this.reader.int32();
            return new D.BackendKeyDataMessage(t, i, s);
        }
        parseAuthenticationResponse(e, t, n) {
            this.reader.setBuffer(e, n);
            let i = this.reader.int32(), s = {
                name: "authenticationOk",
                length: t
            };
            switch(i){
                case 0:
                    break;
                case 3:
                    s.length === 8 && (s.name = "authenticationCleartextPassword");
                    break;
                case 5:
                    if (s.length === 12) {
                        s.name = "authenticationMD5Password";
                        let u = this.reader.bytes(4);
                        return new D.AuthenticationMD5Password(t, u);
                    }
                    break;
                case 10:
                    s.name = "authentication\
SASL", s.mechanisms = [];
                    let o;
                    do o = this.reader.cstring(), o && s.mechanisms.push(o);
                    while (o)
                    break;
                case 11:
                    s.name = "authenticationSASLContinue", s.data = this.reader.string(t - 8);
                    break;
                case 12:
                    s.name = "authenticationSASLFinal", s.data = this.reader.string(t - 8);
                    break;
                default:
                    throw new Error("Unknown authenticationOk message type " + i);
            }
            return s;
        }
        parseErrorMessage(e, t, n, i) {
            this.reader.setBuffer(e, n);
            let s = {}, o = this.reader.string(1);
            for(; o !== "\0";)s[o] = this.reader.cstring(), o = this.reader.string(1);
            let u = s.M, c = i === "notice" ? new D.NoticeMessage(t, u) : new D.DatabaseError(u, t, i);
            return c.severity = s.S, c.code = s.C, c.detail = s.D, c.hint = s.H, c.position = s.P, c.internalPosition = s.p, c.internalQuery = s.q, c.where = s.W, c.schema = s.s, c.table = s.t, c.column = s.c, c.dataType = s.d, c.constraint = s.n, c.file = s.F, c.line = s.L, c.routine = s.R, c;
        }
    };
    a(cn, "Parser");
    var un = cn;
    At.Parser = un;
});
var hn = I((be)=>{
    "use strict";
    p();
    Object.defineProperty(be, "__esModule", {
        value: !0
    });
    be.DatabaseError = be.serialize = be.parse = void 0;
    var cc = Xr();
    Object.defineProperty(be, "DatabaseError", {
        enumerable: !0,
        get: a(function() {
            return cc.DatabaseError;
        }, "get")
    });
    var hc = xs();
    Object.defineProperty(be, "serialize", {
        enumerable: !0,
        get: a(function() {
            return hc.serialize;
        }, "get")
    });
    var lc = As();
    function fc(r, e) {
        let t = new lc.Parser;
        return r.on("data", (n)=>t.parse(n, e)), new Promise((n)=>r.on("end", ()=>n()));
    }
    a(fc, "parse");
    be.parse = fc;
});
var Cs = {};
se(Cs, {
    connect: ()=>pc
});
function pc({ socket: r, servername: e }) {
    return r.startTls(e), r;
}
var Ts = z(()=>{
    "use strict";
    p();
    a(pc, "connect");
});
var pn = I((of, Bs)=>{
    "use strict";
    p();
    var Is = (St(), O(ws)), dc = ge().EventEmitter, { parse: yc, serialize: q } = hn(), Ps = q.flush(), mc = q.sync(), gc = q.end(), fn = class fn extends dc {
        constructor(e){
            super(), e = e || {}, this.stream = e.stream || new Is.Socket, this._keepAlive = e.keepAlive, this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis, this.lastBuffer = !1, this.parsedStatements = {}, this.ssl = e.ssl || !1, this._ending = !1, this._emitMessage = !1;
            var t = this;
            this.on("newListener", function(n) {
                n === "message" && (t._emitMessage = !0);
            });
        }
        connect(e, t) {
            var n = this;
            this._connecting = !0, this.stream.setNoDelay(!0), this.stream.connect(e, t), this.stream.once("connect", function() {
                n._keepAlive && n.stream.setKeepAlive(!0, n._keepAliveInitialDelayMillis), n.emit("connect");
            });
            let i = a(function(s) {
                n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE") || n.emit("error", s);
            }, "reportStreamError");
            if (this.stream.on("error", i), this.stream.on("close", function() {
                n.emit("end");
            }), !this.ssl) return this.attachListeners(this.stream);
            this.stream.once("data", function(s) {
                var o = s.toString("utf8");
                switch(o){
                    case "S":
                        break;
                    case "N":
                        return n.stream.end(), n.emit("error", new Error("The server does not support SSL connections"));
                    default:
                        return n.stream.end(), n.emit("error", new Error("There was an error establishing an SSL co\
nnection"));
                }
                var u = (Ts(), O(Cs));
                let c = {
                    socket: n.stream
                };
                n.ssl !== !0 && (Object.assign(c, n.ssl), "key" in n.ssl && (c.key = n.ssl.key)), Is.isIP(t) === 0 && (c.servername = t);
                try {
                    n.stream = u.connect(c);
                } catch (h) {
                    return n.emit("error", h);
                }
                n.attachListeners(n.stream), n.stream.on("error", i), n.emit("sslconnect");
            });
        }
        attachListeners(e) {
            e.on("end", ()=>{
                this.emit("end");
            }), yc(e, (t)=>{
                var n = t.name === "error" ? "errorMessage" : t.name;
                this._emitMessage && this.emit("message", t), this.emit(n, t);
            });
        }
        requestSsl() {
            this.stream.write(q.requestSsl());
        }
        startup(e) {
            this.stream.write(q.startup(e));
        }
        cancel(e, t) {
            this._send(q.cancel(e, t));
        }
        password(e) {
            this._send(q.password(e));
        }
        sendSASLInitialResponseMessage(e, t) {
            this._send(q.sendSASLInitialResponseMessage(e, t));
        }
        sendSCRAMClientFinalMessage(e) {
            this._send(q.sendSCRAMClientFinalMessage(e));
        }
        _send(e) {
            return this.stream.writable ? this.stream.write(e) : !1;
        }
        query(e) {
            this._send(q.query(e));
        }
        parse(e) {
            this._send(q.parse(e));
        }
        bind(e) {
            this._send(q.bind(e));
        }
        execute(e) {
            this._send(q.execute(e));
        }
        flush() {
            this.stream.writable && this.stream.write(Ps);
        }
        sync() {
            this._ending = !0, this._send(Ps), this._send(mc);
        }
        ref() {
            this.stream.ref();
        }
        unref() {
            this.stream.unref();
        }
        end() {
            if (this._ending = !0, !this._connecting || !this.stream.writable) {
                this.stream.end();
                return;
            }
            return this.stream.write(gc, ()=>{
                this.stream.end();
            });
        }
        close(e) {
            this._send(q.close(e));
        }
        describe(e) {
            this._send(q.describe(e));
        }
        sendCopyFromChunk(e) {
            this._send(q.copyData(e));
        }
        endCopyFrom() {
            this._send(q.copyDone());
        }
        sendCopyFail(e) {
            this._send(q.copyFail(e));
        }
    };
    a(fn, "Connection");
    var ln = fn;
    Bs.exports = ln;
});
var Fs = I((hf, Rs)=>{
    "use strict";
    p();
    var wc = ge().EventEmitter, cf = (Ge(), O(He)), bc = tt(), dn = ji(), Sc = Xi(), xc = wt(), Ec = bt(), Ls = ys(), vc = et(), _c = pn(), yn = class yn extends wc {
        constructor(e){
            super(), this.connectionParameters = new Ec(e), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "passwo\
rd", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: this.connectionParameters.password
            }), this.replication = this.connectionParameters.replication;
            var t = e || {};
            this._Promise = t.Promise || S.Promise, this._types = new xc(t.types), this._ending = !1, this._connecting = !1, this._connected = !1, this._connectionError = !1, this._queryable = !0, this.connection = t.connection || new _c({
                stream: t.stream,
                ssl: this.connectionParameters.ssl,
                keepAlive: t.keepAlive || !1,
                keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0,
                encoding: this.connectionParameters.client_encoding || "utf8"
            }), this.queryQueue = [], this.binary = t.binary || vc.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || !1, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", {
                enumerable: !1
            }), this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0;
        }
        _errorAllQueries(e) {
            let t = a((n)=>{
                m.nextTick(()=>{
                    n.handleError(e, this.connection);
                });
            }, "enqueueError");
            this.activeQuery && (t(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(t), this.queryQueue.length = 0;
        }
        _connect(e) {
            var t = this, n = this.connection;
            if (this._connectionCallback = e, this._connecting || this._connected) {
                let i = new Error("Client has already been conn\
ected. You cannot reuse a client.");
                m.nextTick(()=>{
                    e(i);
                });
                return;
            }
            this._connecting = !0, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(()=>{
                n._ending = !0, n.stream.destroy(new Error("timeout expired"));
            }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
                t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
            }), n.on("sslconnect", function() {
                n.startup(t.getStartupConf());
            }), this._attachListeners(n), n.once("end", ()=>{
                let i = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unex\
pectedly");
                clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(i), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i) : this._connectionError || this._handleErrorEvent(i)), m.nextTick(()=>{
                    this.emit("end");
                });
            });
        }
        connect(e) {
            if (e) {
                this._connect(e);
                return;
            }
            return new this._Promise((t, n)=>{
                this._connect((i)=>{
                    i ? n(i) : t();
                });
            });
        }
        _attachListeners(e) {
            e.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), e.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), e.on("a\
uthenticationSASL", this._handleAuthSASL.bind(this)), e.on("authenticationSASLCont\
inue", this._handleAuthSASLContinue.bind(this)), e.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), e.on("backendKeyData", this._handleBackendKeyData.bind(this)), e.on("error", this._handleErrorEvent.bind(this)), e.on("errorMessage", this._handleErrorMessage.bind(this)), e.on("readyForQuery", this._handleReadyForQuery.bind(this)), e.on("notice", this._handleNotice.bind(this)), e.on("rowDescription", this._handleRowDescription.bind(this)), e.on("dataRow", this._handleDataRow.bind(this)), e.on("portalSuspended", this._handlePortalSuspended.bind(this)), e.on("emptyQuery", this._handleEmptyQuery.bind(this)), e.on("commandComplete", this._handleCommandComplete.bind(this)), e.on("parseComplete", this._handleParseComplete.bind(this)), e.on("cop\
yInResponse", this._handleCopyInResponse.bind(this)), e.on("copyData", this._handleCopyData.bind(this)), e.on("notification", this._handleNotification.bind(this));
        }
        _checkPgPass(e) {
            let t = this.connection;
            typeof this.password == "function" ? this._Promise.resolve().then(()=>this.password()).then((n)=>{
                if (n !== void 0) {
                    if (typeof n != "string") {
                        t.emit("erro\
r", new TypeError("Password must be a string"));
                        return;
                    }
                    this.connectionParameters.password = this.password = n;
                } else this.connectionParameters.password = this.password = null;
                e();
            }).catch((n)=>{
                t.emit("error", n);
            }) : this.password !== null ? e() : Sc(this.connectionParameters, (n)=>{
                n !== void 0 && (this.connectionParameters.password = this.password = n), e();
            });
        }
        _handleAuthCleartextPassword(e) {
            this._checkPgPass(()=>{
                this.connection.password(this.password);
            });
        }
        _handleAuthMD5Password(e) {
            this._checkPgPass(()=>{
                let t = bc.postgresMd5PasswordHash(this.user, this.password, e.salt);
                this.connection.password(t);
            });
        }
        _handleAuthSASL(e) {
            this._checkPgPass(()=>{
                this.saslSession = dn.startSession(e.mechanisms), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
            });
        }
        _handleAuthSASLContinue(e) {
            dn.continueSession(this.saslSession, this.password, e.data), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        }
        _handleAuthSASLFinal(e) {
            dn.finalizeSession(this.saslSession, e.data), this.saslSession = null;
        }
        _handleBackendKeyData(e) {
            this.processID = e.processID, this.secretKey = e.secretKey;
        }
        _handleReadyForQuery(e) {
            this._connecting && (this._connecting = !1, this._connected = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("c\
onnect"));
            let { activeQuery: t } = this;
            this.activeQuery = null, this.readyForQuery = !0, t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
        }
        _handleErrorWhileConnecting(e) {
            if (!this._connectionError) {
                if (this._connectionError = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback) return this._connectionCallback(e);
                this.emit("error", e);
            }
        }
        _handleErrorEvent(e) {
            if (this._connecting) return this._handleErrorWhileConnecting(e);
            this._queryable = !1, this._errorAllQueries(e), this.emit("error", e);
        }
        _handleErrorMessage(e) {
            if (this._connecting) return this._handleErrorWhileConnecting(e);
            let t = this.activeQuery;
            if (!t) {
                this._handleErrorEvent(e);
                return;
            }
            this.activeQuery = null, t.handleError(e, this.connection);
        }
        _handleRowDescription(e) {
            this.activeQuery.handleRowDescription(e);
        }
        _handleDataRow(e) {
            this.activeQuery.handleDataRow(e);
        }
        _handlePortalSuspended(e) {
            this.activeQuery.handlePortalSuspended(this.connection);
        }
        _handleEmptyQuery(e) {
            this.activeQuery.handleEmptyQuery(this.connection);
        }
        _handleCommandComplete(e) {
            this.activeQuery.handleCommandComplete(e, this.connection);
        }
        _handleParseComplete(e) {
            this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
        }
        _handleCopyInResponse(e) {
            this.activeQuery.handleCopyInResponse(this.connection);
        }
        _handleCopyData(e) {
            this.activeQuery.handleCopyData(e, this.connection);
        }
        _handleNotification(e) {
            this.emit("notification", e);
        }
        _handleNotice(e) {
            this.emit("notice", e);
        }
        getStartupConf() {
            var e = this.connectionParameters, t = {
                user: e.user,
                database: e.database
            }, n = e.application_name || e.fallback_application_name;
            return n && (t.application_name = n), e.replication && (t.replication = "" + e.replication), e.statement_timeout && (t.statement_timeout = String(parseInt(e.statement_timeout, 10))), e.lock_timeout && (t.lock_timeout = String(parseInt(e.lock_timeout, 10))), e.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(e.idle_in_transaction_session_timeout, 10))), e.options && (t.options = e.options), t;
        }
        cancel(e, t) {
            if (e.activeQuery === t) {
                var n = this.connection;
                this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
                    n.cancel(e.processID, e.secretKey);
                });
            } else e.queryQueue.indexOf(t) !== -1 && e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
        }
        setTypeParser(e, t, n) {
            return this._types.setTypeParser(e, t, n);
        }
        getTypeParser(e, t) {
            return this._types.getTypeParser(e, t);
        }
        escapeIdentifier(e) {
            return '"' + e.replace(/"/g, '""') + '"';
        }
        escapeLiteral(e) {
            for(var t = !1, n = "'", i = 0; i < e.length; i++){
                var s = e[i];
                s === "'" ? n += s + s : s === "\\" ? (n += s + s, t = !0) : n += s;
            }
            return n += "'", t === !0 && (n = " E" + n), n;
        }
        _pulseQueryQueue() {
            if (this.readyForQuery === !0) if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
                this.readyForQuery = !1, this.hasExecuted = !0;
                let e = this.activeQuery.submit(this.connection);
                e && m.nextTick(()=>{
                    this.activeQuery.handleError(e, this.connection), this.readyForQuery = !0, this._pulseQueryQueue();
                });
            } else this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
        }
        query(e, t, n) {
            var i, s, o, u, c;
            if (e == null) throw new TypeError("Client\
 was passed a null or undefined query");
            return typeof e.submit == "function" ? (o = e.query_timeout || this.connectionParameters.query_timeout, s = i = e, typeof t == "function" && (i.callback = i.callback || t)) : (o = this.connectionParameters.query_timeout, i = new Ls(e, t, n), i.callback || (s = new this._Promise((h, l)=>{
                i.callback = (d, b)=>d ? l(d) : h(b);
            }))), o && (c = i.callback, u = setTimeout(()=>{
                var h = new Error("Query read timeout");
                m.nextTick(()=>{
                    i.handleError(h, this.connection);
                }), c(h), i.callback = ()=>{};
                var l = this.queryQueue.indexOf(i);
                l > -1 && this.queryQueue.splice(l, 1), this._pulseQueryQueue();
            }, o), i.callback = (h, l)=>{
                clearTimeout(u), c(h, l);
            }), this.binary && !i.binary && (i.binary = !0), i._result && !i._result._types && (i._result._types = this._types), this._queryable ? this._ending ? (m.nextTick(()=>{
                i.handleError(new Error("Client was closed and is not queryable"), this.connection);
            }), s) : (this.queryQueue.push(i), this._pulseQueryQueue(), s) : (m.nextTick(()=>{
                i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"), this.connection);
            }), s);
        }
        ref() {
            this.connection.ref();
        }
        unref() {
            this.connection.unref();
        }
        end(e) {
            if (this._ending = !0, !this.connection._connecting) if (e) e();
            else return this._Promise.resolve();
            if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e) this.connection.once("end", e);
            else return new this._Promise((t)=>{
                this.connection.once("end", t);
            });
        }
    };
    a(yn, "Client");
    var Ct = yn;
    Ct.Query = Ls;
    Rs.exports = Ct;
});
var Us = I((pf, ks)=>{
    "use strict";
    p();
    var Ac = ge().EventEmitter, Ms = a(function() {}, "\
NOOP"), Ds = a((r, e)=>{
        let t = r.findIndex(e);
        return t === -1 ? void 0 : r.splice(t, 1)[0];
    }, "removeWhere"), wn = class wn {
        constructor(e, t, n){
            this.client = e, this.idleListener = t, this.timeoutId = n;
        }
    };
    a(wn, "IdleItem");
    var mn = wn, bn = class bn {
        constructor(e){
            this.callback = e;
        }
    };
    a(bn, "PendingItem");
    var Ne = bn;
    function Cc() {
        throw new Error("Release called \
on client which has already been released to the pool.");
    }
    a(Cc, "throwOnDoubleRele\
ase");
    function Tt(r, e) {
        if (e) return {
            callback: e,
            result: void 0
        };
        let t, n, i = a(function(o, u) {
            o ? t(o) : n(u);
        }, "cb"), s = new r(function(o, u) {
            n = o, t = u;
        }).catch((o)=>{
            throw Error.captureStackTrace(o), o;
        });
        return {
            callback: i,
            result: s
        };
    }
    a(Tt, "promisify");
    function Tc(r, e) {
        return a(function t(n) {
            n.client = e, e.removeListener("error", t), e.on("error", ()=>{
                r.log("additional clien\
t error after disconnection due to error", n);
            }), r._remove(e), r.emit("error", n, e);
        }, "idleListener");
    }
    a(Tc, "makeIdleListener");
    var Sn = class Sn extends Ac {
        constructor(e, t){
            super(), this.options = Object.assign({}, e), e != null && "password" in e && Object.defineProperty(this.options, "password", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: e.password
            }), e != null && e.ssl && e.ssl.key && Object.defineProperty(this.options.ssl, "key", {
                enumerable: !1
            }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || !1, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {}, this.Client = this.options.Client || t || It().Client, this.Promise = this.options.Promise || S.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = new WeakSet, this._pendingQueue = [], this._endCallback = void 0, this.ending = !1, this.ended = !1;
        }
        _isFull() {
            return this._clients.length >= this.options.max;
        }
        _pulseQueue() {
            if (this.log("pulse q\
ueue"), this.ended) {
                this.log("pulse queue ended");
                return;
            }
            if (this.ending) {
                this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((t)=>{
                    this._remove(t.client);
                }), this._clients.length || (this.ended = !0, this._endCallback());
                return;
            }
            if (!this._pendingQueue.length) {
                this.log("no queued requests");
                return;
            }
            if (!this._idle.length && this._isFull()) return;
            let e = this._pendingQueue.shift();
            if (this._idle.length) {
                let t = this._idle.pop();
                clearTimeout(t.timeoutId);
                let n = t.client;
                n.ref && n.ref();
                let i = t.idleListener;
                return this._acquireClient(n, e, i, !1);
            }
            if (!this._isFull()) return this.newClient(e);
            throw new Error("unexpected condition");
        }
        _remove(e) {
            let t = Ds(this._idle, (n)=>n.client === e);
            t !== void 0 && clearTimeout(t.timeoutId), this._clients = this._clients.filter((n)=>n !== e), e.end(), this.emit("remove", e);
        }
        connect(e) {
            if (this.ending) {
                let i = new Error("Can\
not use a pool after calling end on the pool");
                return e ? e(i) : this.Promise.reject(i);
            }
            let t = Tt(this.Promise, e), n = t.result;
            if (this._isFull() || this._idle.length) {
                if (this._idle.length && m.nextTick(()=>this._pulseQueue()), !this.options.connectionTimeoutMillis) return this._pendingQueue.push(new Ne(t.callback)), n;
                let i = a((u, c, h)=>{
                    clearTimeout(o), t.callback(u, c, h);
                }, "queueCallback"), s = new Ne(i), o = setTimeout(()=>{
                    Ds(this._pendingQueue, (u)=>u.callback === i), s.timedOut = !0, t.callback(new Error("timeout exceeded when try\
ing to connect"));
                }, this.options.connectionTimeoutMillis);
                return this._pendingQueue.push(s), n;
            }
            return this.newClient(new Ne(t.callback)), n;
        }
        newClient(e) {
            let t = new this.Client(this.options);
            this._clients.push(t);
            let n = Tc(this, t);
            this.log("checking c\
lient timeout");
            let i, s = !1;
            this.options.connectionTimeoutMillis && (i = setTimeout(()=>{
                this.log("ending client due to timeout"), s = !0, t.connection ? t.connection.stream.destroy() : t.end();
            }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), t.connect((o)=>{
                if (i && clearTimeout(i), t.on("error", n), o) this.log("client failed to\
 connect", o), this._clients = this._clients.filter((u)=>u !== t), s && (o.message = "Connect\
ion terminated due to connection timeout"), this._pulseQueue(), e.timedOut || e.callback(o, void 0, Ms);
                else {
                    if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
                        let u = setTimeout(()=>{
                            this.log("ending client due to expired lifetime"), this._expired.add(t), this._idle.findIndex((h)=>h.client === t) !== -1 && this._acquireClient(t, new Ne((h, l, d)=>d()), n, !1);
                        }, this.options.maxLifetimeSeconds * 1e3);
                        u.unref(), t.once("end", ()=>clearTimeout(u));
                    }
                    return this._acquireClient(t, e, n, !0);
                }
            });
        }
        _acquireClient(e, t, n, i) {
            i && this.emit("connect", e), this.emit("acquire", e), e.release = this._releaseOnce(e, n), e.removeListener("error", n), t.timedOut ? i && this.options.verify ? this.options.verify(e, e.release) : e.release() : i && this.options.verify ? this.options.verify(e, (s)=>{
                if (s) return e.release(s), t.callback(s, void 0, Ms);
                t.callback(void 0, e, e.release);
            }) : t.callback(void 0, e, e.release);
        }
        _releaseOnce(e, t) {
            let n = !1;
            return (i)=>{
                n && Cc(), n = !0, this._release(e, t, i);
            };
        }
        _release(e, t, n) {
            if (e.on("error", t), e._poolUseCount = (e._poolUseCount || 0) + 1, this.emit("release", n, e), n || this.ending || !e._queryable || e._ending || e._poolUseCount >= this.options.maxUses) {
                e._poolUseCount >= this.options.maxUses && this.log("remove ex\
pended client"), this._remove(e), this._pulseQueue();
                return;
            }
            if (this._expired.has(e)) {
                this.log("remove expired client"), this._expired.delete(e), this._remove(e), this._pulseQueue();
                return;
            }
            let s;
            this.options.idleTimeoutMillis && (s = setTimeout(()=>{
                this.log("remove\
 idle client"), this._remove(e);
            }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && s.unref()), this.options.allowExitOnIdle && e.unref(), this._idle.push(new mn(e, t, s)), this._pulseQueue();
        }
        query(e, t, n) {
            if (typeof e == "function") {
                let s = Tt(this.Promise, e);
                return x(function() {
                    return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"));
                }), s.result;
            }
            typeof t == "function" && (n = t, t = void 0);
            let i = Tt(this.Promise, n);
            return n = i.callback, this.connect((s, o)=>{
                if (s) return n(s);
                let u = !1, c = a((h)=>{
                    u || (u = !0, o.release(h), n(h));
                }, "onError");
                o.once("err\
or", c), this.log("dispatching query");
                try {
                    o.query(e, t, (h, l)=>{
                        if (this.log("query \
dispatched"), o.removeListener("error", c), !u) return u = !0, o.release(h), h ? n(h) : n(void 0, l);
                    });
                } catch (h) {
                    return o.release(h), n(h);
                }
            }), i.result;
        }
        end(e) {
            if (this.log("ending"), this.ending) {
                let n = new Error("Called end on pool more than once");
                return e ? e(n) : this.Promise.reject(n);
            }
            this.ending = !0;
            let t = Tt(this.Promise, e);
            return this._endCallback = t.callback, this._pulseQueue(), t.result;
        }
        get waitingCount() {
            return this._pendingQueue.length;
        }
        get idleCount() {
            return this._idle.length;
        }
        get expiredCount() {
            return this._clients.reduce((e, t)=>e + (this._expired.has(t) ? 1 : 0), 0);
        }
        get totalCount() {
            return this._clients.length;
        }
    };
    a(Sn, "Pool");
    var gn = Sn;
    ks.exports = gn;
});
var Os = {};
se(Os, {
    default: ()=>Ic
});
var Ic, Ns = z(()=>{
    "use strict";
    p();
    Ic = {};
});
var qs = I((gf, Pc)=>{
    Pc.exports = {
        name: "pg",
        version: "8.8.0",
        description: "PostgreSQL\
 client - pure javascript & libpq with the same API",
        keywords: [
            "database",
            "libpq",
            "pg",
            "postgre",
            "postgres",
            "postgresql",
            "rdbms"
        ],
        homepage: "https://github.com/bri\
anc/node-postgres",
        repository: {
            type: "git",
            url: "git://github.com/brianc/node-post\
gres.git",
            directory: "packages/pg"
        },
        author: "Brian Carlson <brian.m.carlson@gmail.\
com>",
        main: "./lib",
        dependencies: {
            "buffer-writer": "2.0.0",
            "packet-reader": "1.0.0",
            "pg-connection-string": "^2.5.0",
            "pg-pool": "^3.5.2",
            "pg-protocol": "^1.5.0",
            "pg-ty\
pes": "^2.1.0",
            pgpass: "1.x"
        },
        devDependencies: {
            async: "2.6.4",
            bluebird: "3.5.2",
            co: "\
4.6.0",
            "pg-copy-streams": "0.3.0"
        },
        peerDependencies: {
            "pg-native": ">=3.0.1"
        },
        peerDependenciesMeta: {
            "pg-native": {
                optional: !0
            }
        },
        scripts: {
            test: "make test-all"
        },
        files: [
            "lib",
            "SPONSORS\
.md"
        ],
        license: "MIT",
        engines: {
            node: ">= 8.0.0"
        },
        gitHead: "c99fb2c127ddf8d712500db2c\
7b9a5491a178655"
    };
});
var Ws = I((wf, js)=>{
    "use strict";
    p();
    var Qs = ge().EventEmitter, Bc = (Ge(), O(He)), xn = tt(), qe = js.exports = function(r, e, t) {
        Qs.call(this), r = xn.normalizeQueryConfig(r, e, t), this.text = r.text, this.values = r.values, this.name = r.name, this.callback = r.callback, this.state = "new", this._arrayMode = r.rowMode === "array", this._emitRowEvents = !1, this.on("\
newListener", (function(n) {
            n === "row" && (this._emitRowEvents = !0);
        }).bind(this));
    };
    Bc.inherits(qe, Qs);
    var Lc = {
        sqlState: "code",
        statementPosition: "position",
        messagePrimary: "mess\
age",
        context: "where",
        schemaName: "schema",
        tableName: "table",
        columnName: "column",
        dataTypeName: "\
dataType",
        constraintName: "constraint",
        sourceFile: "file",
        sourceLine: "line",
        sourceFunction: "\
routine"
    };
    qe.prototype.handleError = function(r) {
        var e = this.native.pq.resultErrorFields();
        if (e) for(var t in e){
            var n = Lc[t] || t;
            r[n] = e[t];
        }
        this.callback ? this.callback(r) : this.emit("error", r), this.state = "error";
    };
    qe.prototype.then = function(r, e) {
        return this._getPromise().then(r, e);
    };
    qe.prototype.catch = function(r) {
        return this._getPromise().catch(r);
    };
    qe.prototype._getPromise = function() {
        return this._promise ? this._promise : (this._promise = new Promise((function(r, e) {
            this._once("end", r), this._once("error", e);
        }).bind(this)), this._promise);
    };
    qe.prototype.submit = function(r) {
        this.state = "runn\
ing";
        var e = this;
        this.native = r.native, r.native.arrayMode = this._arrayMode;
        var t = a(function(s, o, u) {
            if (r.native.arrayMode = !1, x(function() {
                e.emit("_done");
            }), s) return e.handleError(s);
            e._emitRowEvents && (u.length > 1 ? o.forEach((c, h)=>{
                c.forEach((l)=>{
                    e.emit("row", l, u[h]);
                });
            }) : o.forEach(function(c) {
                e.emit("row", c, u);
            })), e.state = "end", e.emit("end", u), e.callback && e.callback(null, u);
        }, "after");
        if (m.domain && (t = m.domain.bind(t)), this.name) {
            this.name.length > 63 && (console.error("Warning! Postgres only suppo\
rts 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors exec\
uting queries"));
            var n = (this.values || []).map(xn.prepareValue);
            if (r.namedQueries[this.name]) {
                if (this.text && r.namedQueries[this.name] !== this.text) {
                    let s = new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);
                    return t(s);
                }
                return r.native.execute(this.name, n, t);
            }
            return r.native.prepare(this.name, this.text, n.length, function(s) {
                return s ? t(s) : (r.namedQueries[e.name] = e.text, e.native.execute(e.name, n, t));
            });
        } else if (this.values) {
            if (!Array.isArray(this.values)) {
                let s = new Error("Query values must be an array");
                return t(s);
            }
            var i = this.values.map(xn.prepareValue);
            r.native.query(this.text, i, t);
        } else r.native.query(this.text, t);
    };
});
var Vs = I((Ef, $s)=>{
    "use strict";
    p();
    var Rc = (Ns(), O(Os)), Fc = wt(), xf = qs(), Hs = ge().EventEmitter, Mc = (Ge(), O(He)), Dc = bt(), Gs = Ws(), J = $s.exports = function(r) {
        Hs.call(this), r = r || {}, this._Promise = r.Promise || S.Promise, this._types = new Fc(r.types), this.native = new Rc({
            types: this._types
        }), this._queryQueue = [], this._ending = !1, this._connecting = !1, this._connected = !1, this._queryable = !0;
        var e = this.connectionParameters = new Dc(r);
        this.user = e.user, Object.defineProperty(this, "password", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: e.password
        }), this.database = e.database, this.host = e.host, this.port = e.port, this.namedQueries = {};
    };
    J.Query = Gs;
    Mc.inherits(J, Hs);
    J.prototype._errorAllQueries = function(r) {
        let e = a((t)=>{
            m.nextTick(()=>{
                t.native = this.native, t.handleError(r);
            });
        }, "enqueueError");
        this._hasActiveQuery() && (e(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(e), this._queryQueue.length = 0;
    };
    J.prototype._connect = function(r) {
        var e = this;
        if (this._connecting) {
            m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));
            return;
        }
        this._connecting = !0, this.connectionParameters.getLibpqConnectionString(function(t, n) {
            if (t) return r(t);
            e.native.connect(n, function(i) {
                if (i) return e.native.end(), r(i);
                e._connected = !0, e.native.on("error", function(s) {
                    e._queryable = !1, e._errorAllQueries(s), e.emit("er\
ror", s);
                }), e.native.on("notification", function(s) {
                    e.emit("notification", {
                        channel: s.relname,
                        payload: s.extra
                    });
                }), e.emit("connect"), e._pulseQueryQueue(!0), r();
            });
        });
    };
    J.prototype.connect = function(r) {
        if (r) {
            this._connect(r);
            return;
        }
        return new this._Promise((e, t)=>{
            this._connect((n)=>{
                n ? t(n) : e();
            });
        });
    };
    J.prototype.query = function(r, e, t) {
        var n, i, s, o, u;
        if (r == null) throw new TypeError("Client was passed a null or undefined qu\
ery");
        if (typeof r.submit == "function") s = r.query_timeout || this.connectionParameters.query_timeout, i = n = r, typeof e == "function" && (r.callback = e);
        else if (s = this.connectionParameters.query_timeout, n = new Gs(r, e, t), !n.callback) {
            let c, h;
            i = new this._Promise((l, d)=>{
                c = l, h = d;
            }), n.callback = (l, d)=>l ? h(l) : c(d);
        }
        return s && (u = n.callback, o = setTimeout(()=>{
            var c = new Error("Query read timeout");
            m.nextTick(()=>{
                n.handleError(c, this.connection);
            }), u(c), n.callback = ()=>{};
            var h = this._queryQueue.indexOf(n);
            h > -1 && this._queryQueue.splice(h, 1), this._pulseQueryQueue();
        }, s), n.callback = (c, h)=>{
            clearTimeout(o), u(c, h);
        }), this._queryable ? this._ending ? (n.native = this.native, m.nextTick(()=>{
            n.handleError(new Error("Client was closed and is not queryable"));
        }), i) : (this._queryQueue.push(n), this._pulseQueryQueue(), i) : (n.native = this.native, m.nextTick(()=>{
            n.handleError(new Error("Client has encountered a connection error and is not queryable"));
        }), i);
    };
    J.prototype.end = function(r) {
        var e = this;
        this._ending = !0, this._connected || this.once("connect", this.end.bind(this, r));
        var t;
        return r || (t = new this._Promise(function(n, i) {
            r = a((s)=>s ? i(s) : n(), "cb");
        })), this.native.end(function() {
            e._errorAllQueries(new Error("Connection terminated")), m.nextTick(()=>{
                e.emit("end"), r && r();
            });
        }), t;
    };
    J.prototype._hasActiveQuery = function() {
        return this._activeQuery && this._activeQuery.state !== "\
error" && this._activeQuery.state !== "end";
    };
    J.prototype._pulseQueryQueue = function(r) {
        if (this._connected && !this._hasActiveQuery()) {
            var e = this._queryQueue.shift();
            if (!e) {
                r || this.emit("drain");
                return;
            }
            this._activeQuery = e, e.submit(this);
            var t = this;
            e.once("_done", function() {
                t._pulseQueryQueue();
            });
        }
    };
    J.prototype.cancel = function(r) {
        this._activeQuery === r ? this.native.cancel(function() {}) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
    };
    J.prototype.ref = function() {};
    J.prototype.unref = function() {};
    J.prototype.setTypeParser = function(r, e, t) {
        return this._types.setTypeParser(r, e, t);
    };
    J.prototype.getTypeParser = function(r, e) {
        return this._types.getTypeParser(r, e);
    };
});
var En = I((Af, Ks)=>{
    "use strict";
    p();
    Ks.exports = Vs();
});
var It = I((Tf, nt)=>{
    "use strict";
    p();
    var kc = Fs(), Uc = et(), Oc = pn(), Nc = Us(), { DatabaseError: qc } = hn(), Qc = a((r)=>{
        var e;
        return e = class extends Nc {
            constructor(n){
                super(n, r);
            }
        }, a(e, "BoundP\
ool"), e;
    }, "poolFactory"), vn = a(function(r) {
        this.defaults = Uc, this.Client = r, this.Query = this.Client.Query, this.Pool = Qc(this.Client), this._pools = [], this.Connection = Oc, this.types = Xe(), this.DatabaseError = qc;
    }, "PG");
    typeof m.env.NODE_PG_FORCE_NATIVE < "u" ? nt.exports = new vn(En()) : (nt.exports = new vn(kc), Object.defineProperty(nt.exports, "na\
tive", {
        configurable: !0,
        enumerable: !1,
        get () {
            var r = null;
            try {
                r = new vn(En());
            } catch (e) {
                if (e.code !== "MODULE_NOT_FOUND") throw e;
            }
            return Object.defineProperty(nt.exports, "\
native", {
                value: r
            }), r;
        }
    }));
});
p();
var Bt = Te(It());
St();
p();
St();
mr();
var Zs = Te(tt()), Js = Te(wt());
function jc(r) {
    return r instanceof y ? "\\x" + r.toString("hex") : r;
}
a(jc, "encodeBuffe\
rsAsBytea");
var Pt = class Pt extends Error {
    constructor(t){
        super(t);
        _(this, "name", "NeonDbError");
        _(this, "severity");
        _(this, "code");
        _(this, "detail");
        _(this, "hint");
        _(this, "position");
        _(this, "internalPosition");
        _(this, "internalQuery");
        _(this, "wh\
ere");
        _(this, "schema");
        _(this, "table");
        _(this, "column");
        _(this, "dataType");
        _(this, "constraint");
        _(this, "file");
        _(this, "line");
        _(this, "routine");
        _(this, "sourceErro\
r");
        "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, Pt);
    }
};
a(Pt, "NeonDbError");
var pe = Pt, zs = "transaction() exp\
ects an array of queries, or a function returning an array of queries", Wc = [
    "seve\
rity",
    "code",
    "detail",
    "hint",
    "position",
    "internalPosition",
    "internalQuery",
    "wher\
e",
    "schema",
    "table",
    "column",
    "dataType",
    "constraint",
    "file",
    "line",
    "routine"
];
function Xs(r, { arrayMode: e, fullResults: t, fetchOptions: n, isolationLevel: i, readOnly: s, deferrable: o, queryCallback: u, resultCallback: c, authToken: h } = {}) {
    if (!r) throw new Error("No data\
base connection string was provided to `neon()`. Perhaps an environment variable\
 has not been set?");
    let l;
    try {
        l = yr(r);
    } catch  {
        throw new Error("Database connectio\
n string provided to `neon()` is not a valid URL. Connection string: " + String(r));
    }
    let { protocol: d, username: b, hostname: C, port: B, pathname: Q } = l;
    if (d !== "postgres:" && d !== "postgresql:" || !b || !C || !Q) throw new Error("Database connection string format for\
 `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
    function X(A, ...g) {
        let P, K;
        if (typeof A == "string") P = A, K = g[1], g = g[0] ?? [];
        else {
            P = "";
            for(let j = 0; j < A.length; j++)P += A[j], j < g.length && (P += "$" + (j + 1));
        }
        g = g.map((j)=>jc((0, Zs.prepareValue)(j)));
        let k = {
            query: P,
            params: g
        };
        return u && u(k), Hc(de, k, K);
    }
    a(X, "resolve"), X.transaction = async (A, g)=>{
        if (typeof A == "function" && (A = A(X)), !Array.isArray(A)) throw new Error(zs);
        A.forEach((k)=>{
            if (k[Symbol.toStringTag] !== "NeonQueryPromise") throw new Error(zs);
        });
        let P = A.map((k)=>k.parameterizedQuery), K = A.map((k)=>k.opts ?? {});
        return de(P, K, g);
    };
    async function de(A, g, P) {
        let { fetchEndpoint: K, fetchFunction: k } = _e, j = Array.isArray(A) ? {
            queries: A
        } : A, ee = n ?? {}, oe = e ?? !1, R = t ?? !1, $ = i, ce = s, ye = o;
        P !== void 0 && (P.fetchOptions !== void 0 && (ee = {
            ...ee,
            ...P.fetchOptions
        }), P.arrayMode !== void 0 && (oe = P.arrayMode), P.fullResults !== void 0 && (R = P.fullResults), P.isolationLevel !== void 0 && ($ = P.isolationLevel), P.readOnly !== void 0 && (ce = P.readOnly), P.deferrable !== void 0 && (ye = P.deferrable)), g !== void 0 && !Array.isArray(g) && g.fetchOptions !== void 0 && (ee = {
            ...ee,
            ...g.fetchOptions
        });
        let Se = h;
        !Array.isArray(g) && g?.authToken !== void 0 && (Se = g.authToken);
        let je = typeof K == "function" ? K(C, B, {
            jwtAuth: Se !== void 0
        }) : K, he = {
            "Neon-Connection-String": r,
            "Neon-Raw-Text-Output": "true",
            "Neon-Ar\
ray-Mode": "true"
        }, it = await Gc(Se);
        it && (he.Authorization = `Bearer ${it}`), Array.isArray(A) && ($ !== void 0 && (he["Neon-Batch-Isolation-Level"] = $), ce !== void 0 && (he["Neon-Bat\
ch-Read-Only"] = String(ce)), ye !== void 0 && (he["Neon-Batch-Deferrable"] = String(ye)));
        let te;
        try {
            te = await (k ?? fetch)(je, {
                method: "POST",
                body: JSON.stringify(j),
                headers: he,
                ...ee
            });
        } catch (W) {
            let H = new pe(`Error connecting to database: ${W.message}`);
            throw H.sourceError = W, H;
        }
        if (te.ok) {
            let W = await te.json();
            if (Array.isArray(A)) {
                let H = W.results;
                if (!Array.isArray(H)) throw new pe("Neon internal error: unexpected result format");
                return H.map((Ae, xe)=>{
                    let Lt = g[xe] ?? {}, ro = Lt.arrayMode ?? oe, no = Lt.fullResults ?? R;
                    return Ys(Ae, {
                        arrayMode: ro,
                        fullResults: no,
                        parameterizedQuery: A[xe],
                        resultCallback: c,
                        types: Lt.types
                    });
                });
            } else {
                let H = g ?? {}, Ae = H.arrayMode ?? oe, xe = H.fullResults ?? R;
                return Ys(W, {
                    arrayMode: Ae,
                    fullResults: xe,
                    parameterizedQuery: A,
                    resultCallback: c,
                    types: H.types
                });
            }
        } else {
            let { status: W } = te;
            if (W === 400) {
                let H = await te.json(), Ae = new pe(H.message);
                for (let xe of Wc)Ae[xe] = H[xe] ?? void 0;
                throw Ae;
            } else {
                let H = await te.text();
                throw new pe(`Server er\
ror (HTTP status ${W}): ${H}`);
            }
        }
    }
    return a(de, "execute"), X;
}
a(Xs, "neon");
function Hc(r, e, t) {
    return {
        [Symbol.toStringTag]: "NeonQueryPromise",
        parameterizedQuery: e,
        opts: t,
        then: a((n, i)=>r(e, t).then(n, i), "then"),
        catch: a((n)=>r(e, t).catch(n), "catch"),
        finally: a((n)=>r(e, t).finally(n), "finally")
    };
}
a(Hc, "createNeonQueryPromise");
function Ys(r, { arrayMode: e, fullResults: t, parameterizedQuery: n, resultCallback: i, types: s }) {
    let o = new Js.default(s), u = r.fields.map((l)=>l.name), c = r.fields.map((l)=>o.getTypeParser(l.dataTypeID)), h = e === !0 ? r.rows.map((l)=>l.map((d, b)=>d === null ? null : c[b](d))) : r.rows.map((l)=>Object.fromEntries(l.map((d, b)=>[
                u[b],
                d === null ? null : c[b](d)
            ])));
    return i && i(n, r, h, {
        arrayMode: e,
        fullResults: t
    }), t ? (r.viaNeonFetch = !0, r.rowAsArray = e, r.rows = h, r._parsers = c, r._types = o, r) : h;
}
a(Ys, "\
processQueryResult");
async function Gc(r) {
    if (typeof r == "string") return r;
    if (typeof r == "function") try {
        return await Promise.resolve(r());
    } catch (e) {
        let t = new pe("Error ge\
tting auth token.");
        throw e instanceof Error && (t = new pe(`Error getting auth toke\
n: ${e.message}`)), t;
    }
}
a(Gc, "getAuthToken");
var to = Te(bt()), Qe = Te(It());
var An = class An extends Bt.Client {
    constructor(t){
        super(t);
        this.config = t;
    }
    get neonConfig() {
        return this.connection.stream;
    }
    connect(t) {
        let { neonConfig: n } = this;
        n.forceDisablePgSSL && (this.ssl = this.connection.ssl = !1), this.ssl && n.useSecureWebSocket && console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");
        let i = this.config?.host !== void 0 || this.config?.connectionString !== void 0 || m.env.PGHOST !== void 0, s = m.env.USER ?? m.env.USERNAME;
        if (!i && this.host === "localhost" && this.user === s && this.database === s && this.password === null) throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${s}, db: ${s}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);
        let o = super.connect(t), u = n.pipelineTLS && this.ssl, c = n.pipelineConnect === "password";
        if (!u && !n.pipelineConnect) return o;
        let h = this.connection;
        if (u && h.on("connect", ()=>h.stream.emit("data", "S")), c) {
            h.removeAllListeners("authenticationCleartextPassword"), h.removeAllListeners("readyForQuery"), h.once("readyForQuery", ()=>h.on("readyForQuery", this._handleReadyForQuery.bind(this)));
            let l = this.ssl ? "sslconnect" : "connect";
            h.on(l, ()=>{
                this._handleAuthCleartextPassword(), this._handleReadyForQuery();
            });
        }
        return o;
    }
    async _handleAuthSASLContinue(t) {
        let n = this.saslSession, i = this.password, s = t.data;
        if (n.message !== "SASLInitialResponse" || typeof i != "string" || typeof s != "string") throw new Error("SASL: protocol error");
        let o = Object.fromEntries(s.split(",").map((te)=>{
            if (!/^.=/.test(te)) throw new Error("SASL: Inva\
lid attribute pair entry");
            let W = te[0], H = te.substring(2);
            return [
                W,
                H
            ];
        })), u = o.r, c = o.s, h = o.i;
        if (!u || !/^[!-+--~]+$/.test(u)) throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");
        if (!c || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(c)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");
        if (!h || !/^[1-9][0-9]*$/.test(h)) throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");
        if (!u.startsWith(n.clientNonce)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
        if (u.length === n.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");
        let l = parseInt(h, 10), d = y.from(c, "base64"), b = new TextEncoder, C = b.encode(i), B = await w.subtle.importKey("raw", C, {
            name: "HMAC",
            hash: {
                name: "SHA-25\
6"
            }
        }, !1, [
            "sign"
        ]), Q = new Uint8Array(await w.subtle.sign("HMAC", B, y.concat([
            d,
            y.from([
                0,
                0,
                0,
                1
            ])
        ]))), X = Q;
        for(var de = 0; de < l - 1; de++)Q = new Uint8Array(await w.subtle.sign("HMAC", B, Q)), X = y.from(X.map((te, W)=>X[W] ^ Q[W]));
        let A = X, g = await w.subtle.importKey("raw", A, {
            name: "HMAC",
            hash: {
                name: "SHA-256"
            }
        }, !1, [
            "sign"
        ]), P = new Uint8Array(await w.subtle.sign("HMAC", g, b.encode("Client Key"))), K = await w.subtle.digest("SHA-256", P), k = "n=*,r=" + n.clientNonce, j = "r=" + u + ",s=" + c + ",i=" + l, ee = "c=biws,r=" + u, oe = k + "," + j + "," + ee, R = await w.subtle.importKey("raw", K, {
            name: "HMAC",
            hash: {
                name: "SHA-256"
            }
        }, !1, [
            "sign"
        ]);
        var $ = new Uint8Array(await w.subtle.sign("HMAC", R, b.encode(oe))), ce = y.from(P.map((te, W)=>P[W] ^ $[W])), ye = ce.toString("base64");
        let Se = await w.subtle.importKey("raw", A, {
            name: "HMAC",
            hash: {
                name: "SHA-256"
            }
        }, !1, [
            "sign"
        ]), je = await w.subtle.sign("HMAC", Se, b.encode("Server Key")), he = await w.subtle.importKey("raw", je, {
            name: "HM\
AC",
            hash: {
                name: "SHA-256"
            }
        }, !1, [
            "sign"
        ]);
        var it = y.from(await w.subtle.sign("HMAC", he, b.encode(oe)));
        n.message = "SASLResponse", n.serverSignature = it.toString("base64"), n.response = ee + ",p=" + ye, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
    }
};
a(An, "NeonClient");
var _n = An;
function $c(r, e) {
    if (e) return {
        callback: e,
        result: void 0
    };
    let t, n, i = a(function(o, u) {
        o ? t(o) : n(u);
    }, "cb"), s = new r(function(o, u) {
        n = o, t = u;
    });
    return {
        callback: i,
        result: s
    };
}
a($c, "promisify");
var Cn = class Cn extends Bt.Pool {
    constructor(){
        super(...arguments);
        _(this, "Client", _n);
        _(this, "hasFetchUnsupportedListeners", !1);
    }
    on(t, n) {
        return t !== "error" && (this.hasFetchUnsupportedListeners = !0), super.on(t, n);
    }
    query(t, n, i) {
        if (!_e.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t == "function") return super.query(t, n, i);
        typeof n == "function" && (i = n, n = void 0);
        let s = $c(this.Promise, i);
        i = s.callback;
        try {
            let o = new to.default(this.options), u = encodeURIComponent, c = encodeURI, h = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`, l = typeof t == "string" ? t : t.text, d = n ?? t.values ?? [];
            Xs(h, {
                fullResults: !0,
                arrayMode: t.rowMode === "\
array"
            })(l, d, {
                types: t.types ?? this.options?.types
            }).then((C)=>i(void 0, C)).catch((C)=>i(C));
        } catch (o) {
            i(o);
        }
        return s.result;
    }
};
a(Cn, "NeonPool");
var eo = Cn;
var export_ClientBase = Qe.ClientBase;
var export_Connection = Qe.Connection;
var export_DatabaseError = Qe.DatabaseError;
var export_Query = Qe.Query;
var export_defaults = Qe.defaults;
var export_types = Qe.types;
;
 /*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ }),
"[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    const boundTransaction = {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
    if (transaction.createSavepoint) {
        boundTransaction.createSavepoint = wrapAsync(errorRegistry, transaction.createSavepoint.bind(transaction));
    }
    if (transaction.rollbackToSavepoint) {
        boundTransaction.rollbackToSavepoint = wrapAsync(errorRegistry, transaction.rollbackToSavepoint.bind(transaction));
    }
    if (transaction.releaseSavepoint) {
        boundTransaction.releaseSavepoint = wrapAsync(errorRegistry, transaction.releaseSavepoint.bind(transaction));
    }
    return boundTransaction;
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
"[project]/node_modules/@prisma/adapter-neon/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismaNeon",
    ()=>PrismaNeonAdapterFactory,
    "PrismaNeonHttp",
    ()=>PrismaNeonHttpAdapterFactory
]);
// src/neon.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)");
;
;
// package.json
var name = "@prisma/adapter-neon";
;
;
;
var { builtins: ScalarColumnType, getTypeParser } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"];
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= 1e4) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
function convertDriverError(error) {
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "UniqueConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            return {
                kind: "ColumnNotFound",
                column: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
// src/neon.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:neon");
var NeonQueryable = class {
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
};
var NeonWsQueryable = class extends NeonQueryable {
    constructor(client){
        super();
        this.client = client;
    }
    async performIO(query) {
        const { sql, args } = query;
        try {
            const result = await this.client.query({
                text: sql,
                rowMode: "array",
                types: {
                    // This is the error expected:
                    // No overload matches this call.
                    // The last overload gave the following error.
                    //   Type '(oid: number, format?: any) => (json: string) => unknown' is not assignable to type '{ <T>(oid: number): TypeParser<string, string | T>; <T>(oid: number, format: "text"): TypeParser<string, string | T>; <T>(oid: number, format: "binary"): TypeParser<...>; }'.
                    //     Type '(json: string) => unknown' is not assignable to type 'TypeParser<Buffer, any>'.
                    //       Types of parameters 'json' and 'value' are incompatible.
                    //         Type 'Buffer' is not assignable to type 'string'.ts(2769)
                    //
                    // Because pg-types types expect us to handle both binary and text protocol versions,
                    // where as far we can see, pg will ever pass only text version.
                    //
                    // @ts-expect-error
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"].getTypeParser(oid, format);
                    }
                }
            }, args.map((arg, i)=>mapArg(arg, query.argTypes[i])));
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        debug("Error in onError: %O", e);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(e));
    }
};
var NeonTransaction = class extends NeonWsQueryable {
    constructor(client, options, cleanup){
        super(client);
        this.options = options;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
    async createSavepoint(name2) {
        await this.executeRaw({
            sql: `SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async rollbackToSavepoint(name2) {
        await this.executeRaw({
            sql: `ROLLBACK TO SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async releaseSavepoint(name2) {
        await this.executeRaw({
            sql: `RELEASE SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
};
var PrismaNeonAdapter = class extends NeonWsQueryable {
    constructor(pool, options){
        super(pool);
        this.options = options;
    }
    isRunning = true;
    executeScript(_script) {
        throw new Error("Not implemented yet");
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.options?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new NeonTransaction(conn, options, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.options?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        if (this.isRunning) {
            await this.client.end();
            this.isRunning = false;
        }
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaNeonAdapterFactory = class {
    constructor(config, options){
        this.config = config;
        this.options = options;
    }
    provider = "postgres";
    adapterName = name;
    async connect() {
        const pool = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pool"](this.config);
        pool.on("error", (err)=>{
            debug(`Error from pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        });
        return new PrismaNeonAdapter(pool, this.options);
    }
};
var PrismaNeonHttpAdapter = class extends NeonQueryable {
    client;
    constructor(client){
        super();
        this.client = client.query ?? client;
    }
    executeScript(_script) {
        throw new Error("Not implemented yet");
    }
    async startTransaction() {
        return Promise.reject(new Error("Transactions are not supported in HTTP mode"));
    }
    async performIO(query) {
        const { sql, args: values } = query;
        return await this.client(sql, values, {
            arrayMode: true,
            fullResults: true,
            // pass type parsers to neon() HTTP client, same as in WS client above
            //
            // requires @neondatabase/serverless >= 0.9.5
            // - types option added in https://github.com/neondatabase/serverless/pull/92
            types: {
                getTypeParser: (oid, format)=>{
                    if (format === "text" && customParsers[oid]) {
                        return customParsers[oid];
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"].getTypeParser(oid, format);
                }
            }
        });
    }
    async dispose() {}
};
var PrismaNeonHttpAdapterFactory = class {
    constructor(connectionString, options){
        this.connectionString = connectionString;
        this.options = options;
    }
    provider = "postgres";
    adapterName = name;
    async connect() {
        return new PrismaNeonHttpAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"](this.connectionString, this.options));
    }
};
;
}),
"[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6/runtime/client", () => require("@prisma/client-2c3a283f134fdcb6/runtime/client"));

module.exports = mod;
}),
"[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BINARY_TYPES = [
    'nodebuffer',
    'arraybuffer',
    'fragments'
];
const hasBlob = typeof Blob !== 'undefined';
if (hasBlob) BINARY_TYPES.push('blob');
module.exports = {
    BINARY_TYPES,
    CLOSE_TIMEOUT: 30000,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    hasBlob,
    kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
    kListener: Symbol('kListener'),
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    NOOP: ()=>{}
};
}),
"[project]/node_modules/ws/lib/buffer-util.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { EMPTY_BUFFER } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */ function concat(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for(let i = 0; i < list.length; i++){
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
}
/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ function _mask(source, mask, output, offset, length) {
    for(let i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ function _unmask(buffer, mask) {
    for(let i = 0; i < buffer.length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */ function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
}
/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */ function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
    }
    return buf;
}
module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask
};
/* istanbul ignore else  */ if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
        const bufferUtil = (()=>{
            const e = new Error("Cannot find module 'bufferutil'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        module.exports.mask = function(source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bufferUtil.unmask(buffer, mask);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}),
"[project]/node_modules/ws/lib/limiter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const kDone = Symbol('kDone');
const kRun = Symbol('kRun');
/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */ class Limiter {
    /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */ constructor(concurrency){
        this[kDone] = ()=>{
            this.pending--;
            this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */ add(job) {
        this.jobs.push(job);
        this[kRun]();
    }
    /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */ [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
            const job = this.jobs.shift();
            this.pending++;
            job(this[kDone]);
        }
    }
}
module.exports = Limiter;
}),
"[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const bufferUtil = __turbopack_context__.r("[project]/node_modules/ws/lib/buffer-util.js [app-route] (ecmascript)");
const Limiter = __turbopack_context__.r("[project]/node_modules/ws/lib/limiter.js [app-route] (ecmascript)");
const { kStatusCode } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const TRAILER = Buffer.from([
    0x00,
    0x00,
    0xff,
    0xff
]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');
//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;
/**
 * permessage-deflate implementation.
 */ class PerMessageDeflate {
    /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {Boolean} [options.isServer=false] Create the instance in either
   *     server or client mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   */ constructor(options){
        this._options = options || {};
        this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
            const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
            zlibLimiter = new Limiter(concurrency);
        }
    }
    /**
   * @type {String}
   */ static get extensionName() {
        return 'permessage-deflate';
    }
    /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */ offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
            params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
            params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
            params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
            params.client_max_window_bits = true;
        }
        return params;
    }
    /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */ accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
    }
    /**
   * Releases all resources used by the extension.
   *
   * @public
   */ cleanup() {
        if (this._inflate) {
            this._inflate.close();
            this._inflate = null;
        }
        if (this._deflate) {
            const callback = this._deflate[kCallback];
            this._deflate.close();
            this._deflate = null;
            if (callback) {
                callback(new Error('The deflate stream was closed while data was being processed'));
            }
        }
    }
    /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params)=>{
            if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
                return false;
            }
            return true;
        });
        if (!accepted) {
            throw new Error('None of the extension offers can be accepted');
        }
        if (opts.serverNoContextTakeover) {
            accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
            accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === 'number') {
            accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === 'number') {
            accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
            delete accepted.client_max_window_bits;
        }
        return accepted;
    }
    /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
            throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
            if (typeof this._options.clientMaxWindowBits === 'number') {
                params.client_max_window_bits = this._options.clientMaxWindowBits;
            }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
            throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
    }
    /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */ normalizeParams(configurations) {
        configurations.forEach((params)=>{
            Object.keys(params).forEach((key)=>{
                let value = params[key];
                if (value.length > 1) {
                    throw new Error(`Parameter "${key}" must have only a single value`);
                }
                value = value[0];
                if (key === 'client_max_window_bits') {
                    if (value !== true) {
                        const num = +value;
                        if (!Number.isInteger(num) || num < 8 || num > 15) {
                            throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                        }
                        value = num;
                    } else if (!this._isServer) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else if (key === 'server_max_window_bits') {
                    const num = +value;
                    if (!Number.isInteger(num) || num < 8 || num > 15) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                    value = num;
                } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
                    if (value !== true) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else {
                    throw new Error(`Unknown parameter "${key}"`);
                }
                params[key] = value;
            });
        });
        return configurations;
    }
    /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ decompress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._decompress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ compress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._compress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _decompress(data, fin, callback) {
        const endpoint = this._isServer ? 'client' : 'server';
        if (!this._inflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._inflate = zlib.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits
            });
            this._inflate[kPerMessageDeflate] = this;
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            this._inflate.on('error', inflateOnError);
            this._inflate.on('data', inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(()=>{
            const err = this._inflate[kError];
            if (err) {
                this._inflate.close();
                this._inflate = null;
                callback(err);
                return;
            }
            const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
            if (this._inflate._readableState.endEmitted) {
                this._inflate.close();
                this._inflate = null;
            } else {
                this._inflate[kTotalLength] = 0;
                this._inflate[kBuffers] = [];
                if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                    this._inflate.reset();
                }
            }
            callback(null, data);
        });
    }
    /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _compress(data, fin, callback) {
        const endpoint = this._isServer ? 'server' : 'client';
        if (!this._deflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._deflate = zlib.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits
            });
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            this._deflate.on('data', deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) {
                //
                // The deflate stream was closed while data was being processed.
                //
                return;
            }
            let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
            if (fin) {
                data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
            }
            //
            // Ensure that the callback will not be called again in
            // `PerMessageDeflate#cleanup()`.
            //
            this._deflate[kCallback] = null;
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                this._deflate.reset();
            }
            callback(null, data);
        });
    }
}
module.exports = PerMessageDeflate;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
    }
    this[kError] = new RangeError('Max payload size exceeded');
    this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError][kStatusCode] = 1009;
    this.removeListener('data', inflateOnData);
    //
    // The choice to employ `zlib.reset()` over `zlib.close()` is dictated by the
    // fact that in Node.js versions prior to 13.10.0, the callback for
    // `zlib.flush()` is not called if `zlib.close()` is used. Utilizing
    // `zlib.reset()` ensures that either the callback is invoked or an error is
    // emitted.
    //
    this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */ function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    if (this[kError]) {
        this[kCallback](this[kError]);
        return;
    }
    err[kStatusCode] = 1007;
    this[kCallback](err);
}
}),
"[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isUtf8 } = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const { hasBlob } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0 // 112 - 127
];
/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */ function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
}
/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0) {
            // 0xxxxxxx
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            // 110xxxxx 10xxxxxx
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // Overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            // 1110xxxx 10xxxxxx 10xxxxxx
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // Surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
/**
 * Determines whether a value is a `Blob`.
 *
 * @param {*} value The value to be tested
 * @return {Boolean} `true` if `value` is a `Blob`, else `false`
 * @private
 */ function isBlob(value) {
    return hasBlob && typeof value === 'object' && typeof value.arrayBuffer === 'function' && typeof value.type === 'string' && typeof value.stream === 'function' && (value[Symbol.toStringTag] === 'Blob' || value[Symbol.toStringTag] === 'File');
}
module.exports = {
    isBlob,
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars
};
if (isUtf8) {
    module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
} else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
        const isValidUTF8 = (()=>{
            const e = new Error("Cannot find module 'utf-8-validate'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        module.exports.isValidUTF8 = function(buf) {
            return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}),
"[project]/node_modules/ws/lib/receiver.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const { concat, toArrayBuffer, unmask } = __turbopack_context__.r("[project]/node_modules/ws/lib/buffer-util.js [app-route] (ecmascript)");
const { isValidStatusCode, isValidUTF8 } = __turbopack_context__.r("[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;
const DEFER_EVENT = 6;
/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */ class Receiver extends Writable {
    /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */ constructor(options = {}){
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== undefined ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = undefined;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = undefined;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
    }
    /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */ _write(chunk, encoding, cb) {
        if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
    }
    /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */ consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
            const buf = this._buffers[0];
            this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
            const buf = this._buffers[0];
            const offset = dst.length - n;
            if (n >= buf.length) {
                dst.set(this._buffers.shift(), offset);
            } else {
                dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
                this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            }
            n -= buf.length;
        }while (n > 0)
        return dst;
    }
    /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */ startLoop(cb) {
        this._loop = true;
        do {
            switch(this._state){
                case GET_INFO:
                    this.getInfo(cb);
                    break;
                case GET_PAYLOAD_LENGTH_16:
                    this.getPayloadLength16(cb);
                    break;
                case GET_PAYLOAD_LENGTH_64:
                    this.getPayloadLength64(cb);
                    break;
                case GET_MASK:
                    this.getMask();
                    break;
                case GET_DATA:
                    this.getData(cb);
                    break;
                case INFLATING:
                case DEFER_EVENT:
                    this._loop = false;
                    return;
            }
        }while (this._loop)
        if (!this._errored) cb();
    }
    /**
   * Reads the first two bytes of a frame.
   *
   * @param {Function} cb Callback
   * @private
   */ getInfo(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 0x30) !== 0x00) {
            const error = this.createError(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
            cb(error);
            return;
        }
        const compressed = (buf[0] & 0x40) === 0x40;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
            const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
            cb(error);
            return;
        }
        this._fin = (buf[0] & 0x80) === 0x80;
        this._opcode = buf[0] & 0x0f;
        this._payloadLength = buf[1] & 0x7f;
        if (this._opcode === 0x00) {
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (!this._fragmented) {
                const error = this.createError(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._opcode = this._fragmented;
        } else if (this._opcode === 0x01 || this._opcode === 0x02) {
            if (this._fragmented) {
                const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._compressed = compressed;
        } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
            if (!this._fin) {
                const error = this.createError(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
                cb(error);
                return;
            }
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (this._payloadLength > 0x7d || this._opcode === 0x08 && this._payloadLength === 1) {
                const error = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
                cb(error);
                return;
            }
        } else {
            const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
            cb(error);
            return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 0x80) === 0x80;
        if (this._isServer) {
            if (!this._masked) {
                const error = this.createError(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
                cb(error);
                return;
            }
        } else if (this._masked) {
            const error = this.createError(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
            cb(error);
            return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+16).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+64).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        //
        // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
        // if payload length is greater than this number.
        //
        if (num > Math.pow(2, 53 - 32) - 1) {
            const error = this.createError(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
            cb(error);
            return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
    }
    /**
   * Payload length has been read.
   *
   * @param {Function} cb Callback
   * @private
   */ haveLength(cb) {
        if (this._payloadLength && this._opcode < 0x08) {
            this._totalPayloadLength += this._payloadLength;
            if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                cb(error);
                return;
            }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
    }
    /**
   * Reads mask bytes.
   *
   * @private
   */ getMask() {
        if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
    }
    /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @private
   */ getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
            }
            data = this.consume(this._payloadLength);
            if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
                unmask(data, this._mask);
            }
        }
        if (this._opcode > 0x07) {
            this.controlMessage(data, cb);
            return;
        }
        if (this._compressed) {
            this._state = INFLATING;
            this.decompress(data, cb);
            return;
        }
        if (data.length) {
            //
            // This message is not compressed so its length is the sum of the payload
            // length of all fragments.
            //
            this._messageLength = this._totalPayloadLength;
            this._fragments.push(data);
        }
        this.dataMessage(cb);
    }
    /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */ decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf)=>{
            if (err) return cb(err);
            if (buf.length) {
                this._messageLength += buf.length;
                if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                    cb(error);
                    return;
                }
                this._fragments.push(buf);
            }
            this.dataMessage(cb);
            if (this._state === GET_INFO) this.startLoop(cb);
        });
    }
    /**
   * Handles a data message.
   *
   * @param {Function} cb Callback
   * @private
   */ dataMessage(cb) {
        if (!this._fin) {
            this._state = GET_INFO;
            return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
            let data;
            if (this._binaryType === 'nodebuffer') {
                data = concat(fragments, messageLength);
            } else if (this._binaryType === 'arraybuffer') {
                data = toArrayBuffer(concat(fragments, messageLength));
            } else if (this._binaryType === 'blob') {
                data = new Blob(fragments);
            } else {
                data = fragments;
            }
            if (this._allowSynchronousEvents) {
                this.emit('message', data, true);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', data, true);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                cb(error);
                return;
            }
            if (this._state === INFLATING || this._allowSynchronousEvents) {
                this.emit('message', buf, false);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', buf, false);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        }
    }
    /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ controlMessage(data, cb) {
        if (this._opcode === 0x08) {
            if (data.length === 0) {
                this._loop = false;
                this.emit('conclude', 1005, EMPTY_BUFFER);
                this.end();
            } else {
                const code = data.readUInt16BE(0);
                if (!isValidStatusCode(code)) {
                    const error = this.createError(RangeError, `invalid status code ${code}`, true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
                    cb(error);
                    return;
                }
                const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
                if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                    const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                    cb(error);
                    return;
                }
                this._loop = false;
                this.emit('conclude', code, buf);
                this.end();
            }
            this._state = GET_INFO;
            return;
        }
        if (this._allowSynchronousEvents) {
            this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
            this._state = GET_INFO;
        } else {
            this._state = DEFER_EVENT;
            setImmediate(()=>{
                this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
                this._state = GET_INFO;
                this.startLoop(cb);
            });
        }
    }
    /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */ createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
    }
}
module.exports = Receiver;
}),
"[project]/node_modules/ws/lib/sender.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */ const { Duplex } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { randomFillSync } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)");
const { EMPTY_BUFFER, kWebSocket, NOOP } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const { isBlob, isValidStatusCode } = __turbopack_context__.r("[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)");
const { mask: applyMask, toBuffer } = __turbopack_context__.r("[project]/node_modules/ws/lib/buffer-util.js [app-route] (ecmascript)");
const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);
const RANDOM_POOL_SIZE = 8 * 1024;
let randomPool;
let randomPoolPointer = RANDOM_POOL_SIZE;
const DEFAULT = 0;
const DEFLATING = 1;
const GET_BLOB_DATA = 2;
/**
 * HyBi Sender implementation.
 */ class Sender {
    /**
   * Creates a Sender instance.
   *
   * @param {Duplex} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */ constructor(socket, extensions, generateMask){
        this._extensions = extensions || {};
        if (generateMask) {
            this._generateMask = generateMask;
            this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = undefined;
    }
    /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */ static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
            mask = options.maskBuffer || maskBuffer;
            if (options.generateMask) {
                options.generateMask(mask);
            } else {
                if (randomPoolPointer === RANDOM_POOL_SIZE) {
                    /* istanbul ignore else  */ if (randomPool === undefined) {
                        //
                        // This is lazily initialized because server-sent frames must not
                        // be masked so it may never be used.
                        //
                        randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
                    }
                    randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
                    randomPoolPointer = 0;
                }
                mask[0] = randomPool[randomPoolPointer++];
                mask[1] = randomPool[randomPoolPointer++];
                mask[2] = randomPool[randomPoolPointer++];
                mask[3] = randomPool[randomPoolPointer++];
            }
            skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
            offset = 6;
        }
        let dataLength;
        if (typeof data === 'string') {
            if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
                dataLength = options[kByteLength];
            } else {
                data = Buffer.from(data);
                dataLength = data.length;
            }
        } else {
            dataLength = data.length;
            merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
            offset += 8;
            payloadLength = 127;
        } else if (dataLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
        if (options.rsv1) target[0] |= 0x40;
        target[1] = payloadLength;
        if (payloadLength === 126) {
            target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
            target[2] = target[3] = 0;
            target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [
            target,
            data
        ];
        target[1] |= 0x80;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [
            target,
            data
        ];
        if (merge) {
            applyMask(data, mask, target, offset, dataLength);
            return [
                target
            ];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [
            target,
            data
        ];
    }
    /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */ close(code, data, mask, cb) {
        let buf;
        if (code === undefined) {
            buf = EMPTY_BUFFER;
        } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
            throw new TypeError('First argument must be a valid error code number');
        } else if (data === undefined || !data.length) {
            buf = Buffer.allocUnsafe(2);
            buf.writeUInt16BE(code, 0);
        } else {
            const length = Buffer.byteLength(data);
            if (length > 123) {
                throw new RangeError('The message must not be greater than 123 bytes');
            }
            buf = Buffer.allocUnsafe(2 + length);
            buf.writeUInt16BE(code, 0);
            if (typeof data === 'string') {
                buf.write(data, 2);
            } else {
                buf.set(data, 2);
            }
        }
        const options = {
            [kByteLength]: buf.length,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x08,
            readOnly: false,
            rsv1: false
        };
        if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                buf,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(buf, options), cb);
        }
    }
    /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength = data.size;
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x09,
            readOnly,
            rsv1: false
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    false,
                    options,
                    cb
                ]);
            } else {
                this.getBlobData(data, false, options, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength = data.size;
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x0a,
            readOnly,
            rsv1: false
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    false,
                    options,
                    cb
                ]);
            } else {
                this.getBlobData(data, false, options, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */ send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength = data.size;
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
            this._firstFragment = false;
            if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover']) {
                rsv1 = byteLength >= perMessageDeflate._threshold;
            }
            this._compress = rsv1;
        } else {
            rsv1 = false;
            opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
            [kByteLength]: byteLength,
            fin: options.fin,
            generateMask: this._generateMask,
            mask: options.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    this._compress,
                    opts,
                    cb
                ]);
            } else {
                this.getBlobData(data, this._compress, opts, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                this._compress,
                opts,
                cb
            ]);
        } else {
            this.dispatch(data, this._compress, opts, cb);
        }
    }
    /**
   * Gets the contents of a blob as binary data.
   *
   * @param {Blob} blob The blob
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     the data
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer)=>{
            if (this._socket.destroyed) {
                const err = new Error('The socket was closed while the blob was being read');
                //
                // `callCallbacks` is called in the next tick to ensure that errors
                // that might be thrown in the callbacks behave like errors thrown
                // outside the promise chain.
                //
                process.nextTick(callCallbacks, this, err, cb);
                return;
            }
            this._bufferedBytes -= options[kByteLength];
            const data = toBuffer(arrayBuffer);
            if (!compress) {
                this._state = DEFAULT;
                this.sendFrame(Sender.frame(data, options), cb);
                this.dequeue();
            } else {
                this.dispatch(data, compress, options, cb);
            }
        }).catch((err)=>{
            //
            // `onError` is called in the next tick for the same reason that
            // `callCallbacks` above is.
            //
            process.nextTick(onError, this, err, cb);
        });
    }
    /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ dispatch(data, compress, options, cb) {
        if (!compress) {
            this.sendFrame(Sender.frame(data, options), cb);
            return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf)=>{
            if (this._socket.destroyed) {
                const err = new Error('The socket was closed while data was being compressed');
                callCallbacks(this, err, cb);
                return;
            }
            this._bufferedBytes -= options[kByteLength];
            this._state = DEFAULT;
            options.readOnly = false;
            this.sendFrame(Sender.frame(buf, options), cb);
            this.dequeue();
        });
    }
    /**
   * Executes queued send operations.
   *
   * @private
   */ dequeue() {
        while(this._state === DEFAULT && this._queue.length){
            const params = this._queue.shift();
            this._bufferedBytes -= params[3][kByteLength];
            Reflect.apply(params[0], this, params.slice(1));
        }
    }
    /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */ enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
    }
    /**
   * Sends a frame.
   *
   * @param {(Buffer | String)[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */ sendFrame(list, cb) {
        if (list.length === 2) {
            this._socket.cork();
            this._socket.write(list[0]);
            this._socket.write(list[1], cb);
            this._socket.uncork();
        } else {
            this._socket.write(list[0], cb);
        }
    }
}
module.exports = Sender;
/**
 * Calls queued callbacks with an error.
 *
 * @param {Sender} sender The `Sender` instance
 * @param {Error} err The error to call the callbacks with
 * @param {Function} [cb] The first callback
 * @private
 */ function callCallbacks(sender, err, cb) {
    if (typeof cb === 'function') cb(err);
    for(let i = 0; i < sender._queue.length; i++){
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === 'function') callback(err);
    }
}
/**
 * Handles a `Sender` error.
 *
 * @param {Sender} sender The `Sender` instance
 * @param {Error} err The error
 * @param {Function} [cb] The first pending callback
 * @private
 */ function onError(sender, err, cb) {
    callCallbacks(sender, err, cb);
    sender.onerror(err);
}
}),
"[project]/node_modules/ws/lib/event-target.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kForOnEventAttribute, kListener } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');
/**
 * Class representing an event.
 */ class Event {
    /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */ constructor(type){
        this[kTarget] = null;
        this[kType] = type;
    }
    /**
   * @type {*}
   */ get target() {
        return this[kTarget];
    }
    /**
   * @type {String}
   */ get type() {
        return this[kType];
    }
}
Object.defineProperty(Event.prototype, 'target', {
    enumerable: true
});
Object.defineProperty(Event.prototype, 'type', {
    enumerable: true
});
/**
 * Class representing a close event.
 *
 * @extends Event
 */ class CloseEvent extends Event {
    /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */ constructor(type, options = {}){
        super(type);
        this[kCode] = options.code === undefined ? 0 : options.code;
        this[kReason] = options.reason === undefined ? '' : options.reason;
        this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }
    /**
   * @type {Number}
   */ get code() {
        return this[kCode];
    }
    /**
   * @type {String}
   */ get reason() {
        return this[kReason];
    }
    /**
   * @type {Boolean}
   */ get wasClean() {
        return this[kWasClean];
    }
}
Object.defineProperty(CloseEvent.prototype, 'code', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'reason', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'wasClean', {
    enumerable: true
});
/**
 * Class representing an error event.
 *
 * @extends Event
 */ class ErrorEvent extends Event {
    /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */ constructor(type, options = {}){
        super(type);
        this[kError] = options.error === undefined ? null : options.error;
        this[kMessage] = options.message === undefined ? '' : options.message;
    }
    /**
   * @type {*}
   */ get error() {
        return this[kError];
    }
    /**
   * @type {String}
   */ get message() {
        return this[kMessage];
    }
}
Object.defineProperty(ErrorEvent.prototype, 'error', {
    enumerable: true
});
Object.defineProperty(ErrorEvent.prototype, 'message', {
    enumerable: true
});
/**
 * Class representing a message event.
 *
 * @extends Event
 */ class MessageEvent extends Event {
    /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */ constructor(type, options = {}){
        super(type);
        this[kData] = options.data === undefined ? null : options.data;
    }
    /**
   * @type {*}
   */ get data() {
        return this[kData];
    }
}
Object.defineProperty(MessageEvent.prototype, 'data', {
    enumerable: true
});
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */ const EventTarget = {
    /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */ addEventListener (type, handler, options = {}) {
        for (const listener of this.listeners(type)){
            if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                return;
            }
        }
        let wrapper;
        if (type === 'message') {
            wrapper = function onMessage(data, isBinary) {
                const event = new MessageEvent('message', {
                    data: isBinary ? data : data.toString()
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'close') {
            wrapper = function onClose(code, message) {
                const event = new CloseEvent('close', {
                    code,
                    reason: message.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'error') {
            wrapper = function onError(error) {
                const event = new ErrorEvent('error', {
                    error,
                    message: error.message
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'open') {
            wrapper = function onOpen() {
                const event = new Event('open');
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else {
            return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
            this.once(type, wrapper);
        } else {
            this.on(type, wrapper);
        }
    },
    /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */ removeEventListener (type, handler) {
        for (const listener of this.listeners(type)){
            if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                this.removeListener(type, listener);
                break;
            }
        }
    }
};
module.exports = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
};
/**
 * Call an event listener
 *
 * @param {(Function|Object)} listener The listener to call
 * @param {*} thisArg The value to use as `this`` when calling the listener
 * @param {Event} event The event to pass to the listener
 * @private
 */ function callListener(listener, thisArg, event) {
    if (typeof listener === 'object' && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
    } else {
        listener.call(thisArg, event);
    }
}
}),
"[project]/node_modules/ws/lib/extension.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { tokenChars } = __turbopack_context__.r("[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)");
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */ function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [
        elem
    ];
    else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */ function parse(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for(; i < header.length; i++){
        code = header.charCodeAt(i);
        if (extensionName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (i !== 0 && (code === 0x20 /* ' ' */  || code === 0x09)) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b /* ';' */  || code === 0x2c /* ',' */ ) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                const name = header.slice(start, end);
                if (code === 0x2c) {
                    push(offers, name, params);
                    params = Object.create(null);
                } else {
                    extensionName = name;
                }
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else if (paramName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 0x20 || code === 0x09) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                start = end = -1;
            } else if (code === 0x3d /* '=' */  && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else {
            //
            // The value of a quoted-string after unescaping must conform to the
            // token ABNF, so only token characters are valid.
            // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
            //
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 0x22 /* '"' */  && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 0x5c /* '\' */ ) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
            } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
                if (end === -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                let value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, '');
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                paramName = undefined;
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        }
    }
    if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
        throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
        push(offers, token, params);
    } else {
        if (paramName === undefined) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ''));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */ function format(extensions) {
    return Object.keys(extensions).map((extension)=>{
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map((params)=>{
            return [
                extension
            ].concat(Object.keys(params).map((k)=>{
                let values = params[k];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map((v)=>v === true ? k : `${k}=${v}`).join('; ');
            })).join('; ');
        }).join(', ');
    }).join(', ');
}
module.exports = {
    format,
    parse
};
}),
"[project]/node_modules/ws/lib/websocket.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */ const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const { randomBytes, createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const { Duplex, Readable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { URL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)");
const Receiver = __turbopack_context__.r("[project]/node_modules/ws/lib/receiver.js [app-route] (ecmascript)");
const Sender = __turbopack_context__.r("[project]/node_modules/ws/lib/sender.js [app-route] (ecmascript)");
const { isBlob } = __turbopack_context__.r("[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)");
const { BINARY_TYPES, CLOSE_TIMEOUT, EMPTY_BUFFER, GUID, kForOnEventAttribute, kListener, kStatusCode, kWebSocket, NOOP } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const { EventTarget: { addEventListener, removeEventListener } } = __turbopack_context__.r("[project]/node_modules/ws/lib/event-target.js [app-route] (ecmascript)");
const { format, parse } = __turbopack_context__.r("[project]/node_modules/ws/lib/extension.js [app-route] (ecmascript)");
const { toBuffer } = __turbopack_context__.r("[project]/node_modules/ws/lib/buffer-util.js [app-route] (ecmascript)");
const kAborted = Symbol('kAborted');
const protocolVersions = [
    8,
    13
];
const readyStates = [
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED'
];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */ class WebSocket extends EventEmitter {
    /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */ constructor(address, protocols, options){
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = '';
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
            this._bufferedAmount = 0;
            this._isServer = false;
            this._redirects = 0;
            if (protocols === undefined) {
                protocols = [];
            } else if (!Array.isArray(protocols)) {
                if (typeof protocols === 'object' && protocols !== null) {
                    options = protocols;
                    protocols = [];
                } else {
                    protocols = [
                        protocols
                    ];
                }
            }
            initAsClient(this, address, protocols, options);
        } else {
            this._autoPong = options.autoPong;
            this._closeTimeout = options.closeTimeout;
            this._isServer = true;
        }
    }
    /**
   * For historical reasons, the custom "nodebuffer" type is used by the default
   * instead of "blob".
   *
   * @type {String}
   */ get binaryType() {
        return this._binaryType;
    }
    set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        //
        // Allow to change `binaryType` on the fly.
        //
        if (this._receiver) this._receiver._binaryType = type;
    }
    /**
   * @type {Number}
   */ get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
   * @type {String}
   */ get extensions() {
        return Object.keys(this._extensions).join();
    }
    /**
   * @type {Boolean}
   */ get isPaused() {
        return this._paused;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onclose() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onerror() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onopen() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onmessage() {
        return null;
    }
    /**
   * @type {String}
   */ get protocol() {
        return this._protocol;
    }
    /**
   * @type {Number}
   */ get readyState() {
        return this._readyState;
    }
    /**
   * @type {String}
   */ get url() {
        return this._url;
    }
    /**
   * Set up the socket and the internal resources.
   *
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */ setSocket(socket, head, options) {
        const receiver = new Receiver({
            allowSynchronousEvents: options.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxPayload: options.maxPayload,
            skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on('conclude', receiverOnConclude);
        receiver.on('drain', receiverOnDrain);
        receiver.on('error', receiverOnError);
        receiver.on('message', receiverOnMessage);
        receiver.on('ping', receiverOnPing);
        receiver.on('pong', receiverOnPong);
        sender.onerror = senderOnError;
        //
        // These methods may not be available if `socket` is just a `Duplex`.
        //
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on('close', socketOnClose);
        socket.on('data', socketOnData);
        socket.on('end', socketOnEnd);
        socket.on('error', socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit('open');
    }
    /**
   * Emit the `'close'` event.
   *
   * @private
   */ emitClose() {
        if (!this._socket) {
            this._readyState = WebSocket.CLOSED;
            this.emit('close', this._closeCode, this._closeMessage);
            return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
            this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
    }
    /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */ close(code, data) {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this.readyState === WebSocket.CLOSING) {
            if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                this._socket.end();
            }
            return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err)=>{
            //
            // This error is handled by the `'error'` listener on the socket. We only
            // want to know if the close frame has been sent here.
            //
            if (err) return;
            this._closeFrameSent = true;
            if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
                this._socket.end();
            }
        });
        setCloseTimer(this);
    }
    /**
   * Pause the socket.
   *
   * @public
   */ pause() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = true;
        this._socket.pause();
    }
    /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */ ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */ pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Resume the socket.
   *
   * @public
   */ resume() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */ send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        const opts = {
            binary: typeof data !== 'string',
            mask: !this._isServer,
            compress: true,
            fin: true,
            ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
            opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
   * Forcibly close the connection.
   *
   * @public
   */ terminate() {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this._socket) {
            this._readyState = WebSocket.CLOSING;
            this._socket.destroy();
        }
    }
}
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
[
    'binaryType',
    'bufferedAmount',
    'extensions',
    'isPaused',
    'protocol',
    'readyState',
    'url'
].forEach((property)=>{
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
[
    'open',
    'error',
    'close',
    'message'
].forEach((method)=>{
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get () {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) return listener[kListener];
            }
            return null;
        },
        set (handler) {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) {
                    this.removeListener(method, listener);
                    break;
                }
            }
            if (typeof handler !== 'function') return;
            this.addEventListener(method, handler, {
                [kForOnEventAttribute]: true
            });
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module.exports = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
 *     times in the same tick
 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
 *     automatically send a pong in response to a ping
 * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to wait
 *     for the closing handshake to finish after `websocket.close()` is called
 * @param {Function} [options.finishRequest] A function which can be used to
 *     customize the headers of each http request before it is sent
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */ function initAsClient(websocket, address, protocols, options) {
    const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: 'GET',
        host: undefined,
        path: undefined,
        port: undefined
    };
    websocket._autoPong = opts.autoPong;
    websocket._closeTimeout = opts.closeTimeout;
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(', ')})`);
    }
    let parsedUrl;
    if (address instanceof URL) {
        parsedUrl = address;
    } else {
        try {
            parsedUrl = new URL(address);
        } catch  {
            throw new SyntaxError(`Invalid URL: ${address}`);
        }
    }
    if (parsedUrl.protocol === 'http:') {
        parsedUrl.protocol = 'ws:';
    } else if (parsedUrl.protocol === 'https:') {
        parsedUrl.protocol = 'wss:';
    }
    websocket._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === 'wss:';
    const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
    let invalidUrlMessage;
    if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
        invalidUrlMessage = 'The URL\'s protocol must be one of "ws:", "wss:", ' + '"http:", "https:", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
        invalidUrlMessage = 'The URL contains a fragment identifier';
    }
    if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
            throw err;
        } else {
            emitErrorAndClose(websocket, err);
            return;
        }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString('base64');
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set();
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
        ...opts.headers,
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket'
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate({
            ...opts.perMessageDeflate,
            isServer: false,
            maxPayload: opts.maxPayload
        });
        opts.headers['Sec-WebSocket-Extensions'] = format({
            [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
    }
    if (protocols.length) {
        for (const protocol of protocols){
            if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
                throw new SyntaxError('An invalid or duplicated subprotocol was specified');
            }
            protocolSet.add(protocol);
        }
        opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
        const parts = opts.path.split(':');
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
        if (websocket._redirects === 0) {
            websocket._originalIpc = isIpcUrl;
            websocket._originalSecure = isSecure;
            websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
            const headers = options && options.headers;
            //
            // Shallow copy the user provided options so that headers can be changed
            // without mutating the original object.
            //
            options = {
                ...options,
                headers: {}
            };
            if (headers) {
                for (const [key, value] of Object.entries(headers)){
                    options.headers[key.toLowerCase()] = value;
                }
            }
        } else if (websocket.listenerCount('redirect') === 0) {
            const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
            if (!isSameHost || websocket._originalSecure && !isSecure) {
                //
                // Match curl 7.77.0 behavior and drop the following headers. These
                // headers are also dropped when following a redirect to a subdomain.
                //
                delete opts.headers.authorization;
                delete opts.headers.cookie;
                if (!isSameHost) delete opts.headers.host;
                opts.auth = undefined;
            }
        }
        //
        // Match curl 7.77.0 behavior and make the first `Authorization` header win.
        // If the `Authorization` header is set, then there is nothing to do as it
        // will take precedence.
        //
        if (opts.auth && !options.headers.authorization) {
            options.headers.authorization = 'Basic ' + Buffer.from(opts.auth).toString('base64');
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
            //
            // Unlike what is done for the `'upgrade'` event, no early exit is
            // triggered here if the user calls `websocket.close()` or
            // `websocket.terminate()` from a listener of the `'redirect'` event. This
            // is because the user can also call `request.destroy()` with an error
            // before calling `websocket.close()` or `websocket.terminate()` and this
            // would result in an error being emitted on the `request` object with no
            // `'error'` event listeners attached.
            //
            websocket.emit('redirect', websocket.url, req);
        }
    } else {
        req = websocket._req = request(opts);
    }
    if (opts.timeout) {
        req.on('timeout', ()=>{
            abortHandshake(websocket, req, 'Opening handshake has timed out');
        });
    }
    req.on('error', (err)=>{
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
    });
    req.on('response', (res)=>{
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, 'Maximum redirects exceeded');
                return;
            }
            req.abort();
            let addr;
            try {
                addr = new URL(location, address);
            } catch (e) {
                const err = new SyntaxError(`Invalid URL: ${location}`);
                emitErrorAndClose(websocket, err);
                return;
            }
            initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
            abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
    });
    req.on('upgrade', (res, socket, head)=>{
        websocket.emit('upgrade', res);
        //
        // The user may have closed the connection from a listener of the
        // `'upgrade'` event.
        //
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
            abortHandshake(websocket, socket, 'Invalid Upgrade header');
            return;
        }
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        if (res.headers['sec-websocket-accept'] !== digest) {
            abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
            return;
        }
        const serverProt = res.headers['sec-websocket-protocol'];
        let protError;
        if (serverProt !== undefined) {
            if (!protocolSet.size) {
                protError = 'Server sent a subprotocol but none was requested';
            } else if (!protocolSet.has(serverProt)) {
                protError = 'Server sent an invalid subprotocol';
            }
        } else if (protocolSet.size) {
            protError = 'Server sent no subprotocol';
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers['sec-websocket-extensions'];
        if (secWebSocketExtensions !== undefined) {
            if (!perMessageDeflate) {
                const message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            let extensions;
            try {
                extensions = parse(secWebSocketExtensions);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            const extensionNames = Object.keys(extensions);
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                const message = 'Server indicated an extension that was not requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            try {
                perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
            allowSynchronousEvents: opts.allowSynchronousEvents,
            generateMask: opts.generateMask,
            maxPayload: opts.maxPayload,
            skipUTF8Validation: opts.skipUTF8Validation
        });
    });
    if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
    } else {
        req.end();
    }
}
/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */ function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    //
    // The following assignment is practically useless and is done only for
    // consistency.
    //
    websocket._errorEmitted = true;
    websocket.emit('error', err);
    websocket.emitClose();
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */ function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */ function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */ function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
            //
            // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
            // called after the request completed. See
            // https://github.com/websockets/ws/issues/1869.
            //
            stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
    } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
    }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */ function sendAfterClose(websocket, data, cb) {
    if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
        process.nextTick(cb, err);
    }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */ function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined) return;
    websocket._socket.removeListener('data', socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */ function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */ function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
        websocket._socket.removeListener('data', socketOnData);
        //
        // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
        // https://github.com/websockets/ws/issues/1940.
        //
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
    }
    if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit('error', err);
    }
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */ function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */ function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit('message', data, isBinary);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */ function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
    websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */ function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
}
/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */ function resume(stream) {
    stream.resume();
}
/**
 * The `Sender` error event handler.
 *
 * @param {Error} The error
 * @private
 */ function senderOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket.readyState === WebSocket.CLOSED) return;
    if (websocket.readyState === WebSocket.OPEN) {
        websocket._readyState = WebSocket.CLOSING;
        setCloseTimer(websocket);
    }
    //
    // `socket.end()` is used instead of `socket.destroy()` to allow the other
    // peer to finish sending queued data. There is no need to set a timer here
    // because `CLOSING` means that it is already set or not needed.
    //
    this._socket.end();
    if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit('error', err);
    }
}
/**
 * Set a timer to destroy the underlying raw socket of a WebSocket.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @private
 */ function setCloseTimer(websocket) {
    websocket._closeTimer = setTimeout(websocket._socket.destroy.bind(websocket._socket), websocket._closeTimeout);
}
/**
 * The listener of the socket `'close'` event.
 *
 * @private
 */ function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('data', socketOnData);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written. If instead, the
    // socket is paused, any possible buffered data will be read as a single
    // chunk.
    //
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
    }
}
/**
 * The listener of the socket `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
/**
 * The listener of the socket `'end'` event.
 *
 * @private
 */ function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
/**
 * The listener of the socket `'error'` event.
 *
 * @private
 */ function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}
}),
"[project]/node_modules/ws/lib/stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^WebSocket$" }] */ const WebSocket = __turbopack_context__.r("[project]/node_modules/ws/lib/websocket.js [app-route] (ecmascript)");
const { Duplex } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */ function emitClose(stream) {
    stream.emit('close');
}
/**
 * The listener of the `'end'` event.
 *
 * @private
 */ function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
        this.destroy();
    }
}
/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */ function duplexOnError(err) {
    this.removeListener('error', duplexOnError);
    this.destroy();
    if (this.listenerCount('error') === 0) {
        // Do not suppress the throwing behavior.
        this.emit('error', err);
    }
}
/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */ function createWebSocketStream(ws, options) {
    let terminateOnDestroy = true;
    const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
    });
    ws.on('message', function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
    });
    ws.once('error', function error(err) {
        if (duplex.destroyed) return;
        // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
        //
        // - If the `'error'` event is emitted before the `'open'` event, then
        //   `ws.terminate()` is a noop as no socket is assigned.
        // - Otherwise, the error is re-emitted by the listener of the `'error'`
        //   event of the `Receiver` object. The listener already closes the
        //   connection by calling `ws.close()`. This allows a close frame to be
        //   sent to the other peer. If `ws.terminate()` is called right after this,
        //   then the close frame might not be sent.
        terminateOnDestroy = false;
        duplex.destroy(err);
    });
    ws.once('close', function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
    });
    duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
            callback(err);
            process.nextTick(emitClose, duplex);
            return;
        }
        let called = false;
        ws.once('error', function error(err) {
            called = true;
            callback(err);
        });
        ws.once('close', function close() {
            if (!called) callback(err);
            process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
    };
    duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
            ws.once('open', function open() {
                duplex._final(callback);
            });
            return;
        }
        // If the value of the `_socket` property is `null` it means that `ws` is a
        // client websocket and the handshake failed. In fact, when this happens, a
        // socket is never assigned to the websocket. Wait for the `'error'` event
        // that will be emitted by the websocket.
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
            callback();
            if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
            ws._socket.once('finish', function finish() {
                // `duplex` is not destroyed here because the `'end'` event will be
                // emitted on `duplex` after this `'finish'` event. The EOF signaling
                // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
                callback();
            });
            ws.close();
        }
    };
    duplex._read = function() {
        if (ws.isPaused) ws.resume();
    };
    duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
            ws.once('open', function open() {
                duplex._write(chunk, encoding, callback);
            });
            return;
        }
        ws.send(chunk, callback);
    };
    duplex.on('end', duplexOnEnd);
    duplex.on('error', duplexOnError);
    return duplex;
}
module.exports = createWebSocketStream;
}),
"[project]/node_modules/ws/lib/subprotocol.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { tokenChars } = __turbopack_context__.r("[project]/node_modules/ws/lib/validation.js [app-route] (ecmascript)");
/**
 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
 *
 * @param {String} header The field value of the header
 * @return {Set} The subprotocol names
 * @public
 */ function parse(header) {
    const protocols = new Set();
    let start = -1;
    let end = -1;
    let i = 0;
    for(i; i < header.length; i++){
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
        } else if (i !== 0 && (code === 0x20 /* ' ' */  || code === 0x09)) {
            if (end === -1 && start !== -1) end = i;
        } else if (code === 0x2c /* ',' */ ) {
            if (start === -1) {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const protocol = header.slice(start, end);
            if (protocols.has(protocol)) {
                throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
            }
            protocols.add(protocol);
            start = end = -1;
        } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
        }
    }
    if (start === -1 || end !== -1) {
        throw new SyntaxError('Unexpected end of input');
    }
    const protocol = header.slice(start, i);
    if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
    }
    protocols.add(protocol);
    return protocols;
}
module.exports = {
    parse
};
}),
"[project]/node_modules/ws/lib/websocket-server.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex$", "caughtErrors": "none" }] */ const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const { Duplex } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const extension = __turbopack_context__.r("[project]/node_modules/ws/lib/extension.js [app-route] (ecmascript)");
const PerMessageDeflate = __turbopack_context__.r("[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)");
const subprotocol = __turbopack_context__.r("[project]/node_modules/ws/lib/subprotocol.js [app-route] (ecmascript)");
const WebSocket = __turbopack_context__.r("[project]/node_modules/ws/lib/websocket.js [app-route] (ecmascript)");
const { CLOSE_TIMEOUT, GUID, kWebSocket } = __turbopack_context__.r("[project]/node_modules/ws/lib/constants.js [app-route] (ecmascript)");
const keyRegex = /^[+/0-9A-Za-z]{22}==$/;
const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;
/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */ class WebSocketServer extends EventEmitter {
    /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Boolean} [options.autoPong=true] Specifies whether or not to
   *     automatically send a pong in response to a ping
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
   *     wait for the closing handshake to finish after `websocket.close()` is
   *     called
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */ constructor(options, callback){
        super();
        options = {
            allowSynchronousEvents: true,
            autoPong: true,
            maxPayload: 100 * 1024 * 1024,
            skipUTF8Validation: false,
            perMessageDeflate: false,
            handleProtocols: null,
            clientTracking: true,
            closeTimeout: CLOSE_TIMEOUT,
            verifyClient: null,
            noServer: false,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket,
            ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
            throw new TypeError('One and only one of the "port", "server", or "noServer" options ' + 'must be specified');
        }
        if (options.port != null) {
            this._server = http.createServer((req, res)=>{
                const body = http.STATUS_CODES[426];
                res.writeHead(426, {
                    'Content-Length': body.length,
                    'Content-Type': 'text/plain'
                });
                res.end(body);
            });
            this._server.listen(options.port, options.host, options.backlog, callback);
        } else if (options.server) {
            this._server = options.server;
        }
        if (this._server) {
            const emitConnection = this.emit.bind(this, 'connection');
            this._removeListeners = addListeners(this._server, {
                listening: this.emit.bind(this, 'listening'),
                error: this.emit.bind(this, 'error'),
                upgrade: (req, socket, head)=>{
                    this.handleUpgrade(req, socket, head, emitConnection);
                }
            });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
            this.clients = new Set();
            this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
    }
    /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */ address() {
        if (this.options.noServer) {
            throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
    }
    /**
   * Stop the server from accepting new connections and emit the `'close'` event
   * when all existing connections are closed.
   *
   * @param {Function} [cb] A one-time listener for the `'close'` event
   * @public
   */ close(cb) {
        if (this._state === CLOSED) {
            if (cb) {
                this.once('close', ()=>{
                    cb(new Error('The server is not running'));
                });
            }
            process.nextTick(emitClose, this);
            return;
        }
        if (cb) this.once('close', cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
            if (this._server) {
                this._removeListeners();
                this._removeListeners = this._server = null;
            }
            if (this.clients) {
                if (!this.clients.size) {
                    process.nextTick(emitClose, this);
                } else {
                    this._shouldEmitClose = true;
                }
            } else {
                process.nextTick(emitClose, this);
            }
        } else {
            const server = this._server;
            this._removeListeners();
            this._removeListeners = this._server = null;
            //
            // The HTTP/S server was created internally. Close it, and rely on its
            // `'close'` event.
            //
            server.close(()=>{
                emitClose(this);
            });
        }
    }
    /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */ shouldHandle(req) {
        if (this.options.path) {
            const index = req.url.indexOf('?');
            const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
            if (pathname !== this.options.path) return false;
        }
        return true;
    }
    /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */ handleUpgrade(req, socket, head, cb) {
        socket.on('error', socketOnError);
        const key = req.headers['sec-websocket-key'];
        const upgrade = req.headers.upgrade;
        const version = +req.headers['sec-websocket-version'];
        if (req.method !== 'GET') {
            const message = 'Invalid HTTP method';
            abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
            return;
        }
        if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
            const message = 'Invalid Upgrade header';
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
        }
        if (key === undefined || !keyRegex.test(key)) {
            const message = 'Missing or invalid Sec-WebSocket-Key header';
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
        }
        if (version !== 13 && version !== 8) {
            const message = 'Missing or invalid Sec-WebSocket-Version header';
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
                'Sec-WebSocket-Version': '13, 8'
            });
            return;
        }
        if (!this.shouldHandle(req)) {
            abortHandshake(socket, 400);
            return;
        }
        const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
        let protocols = new Set();
        if (secWebSocketProtocol !== undefined) {
            try {
                protocols = subprotocol.parse(secWebSocketProtocol);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Protocol header';
                abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
                return;
            }
        }
        const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== undefined) {
            const perMessageDeflate = new PerMessageDeflate({
                ...this.options.perMessageDeflate,
                isServer: true,
                maxPayload: this.options.maxPayload
            });
            try {
                const offers = extension.parse(secWebSocketExtensions);
                if (offers[PerMessageDeflate.extensionName]) {
                    perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
                    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
                }
            } catch (err) {
                const message = 'Invalid or unacceptable Sec-WebSocket-Extensions header';
                abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
                return;
            }
        }
        //
        // Optionally call external client verification handler.
        //
        if (this.options.verifyClient) {
            const info = {
                origin: req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
                secure: !!(req.socket.authorized || req.socket.encrypted),
                req
            };
            if (this.options.verifyClient.length === 2) {
                this.options.verifyClient(info, (verified, code, message, headers)=>{
                    if (!verified) {
                        return abortHandshake(socket, code || 401, message, headers);
                    }
                    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
                });
                return;
            }
            if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    /**
   * Upgrade the connection to WebSocket.
   *
   * @param {Object} extensions The accepted extensions
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Set} protocols The subprotocols
   * @param {http.IncomingMessage} req The request object
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */ completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        //
        // Destroy the socket if the client has already sent a FIN packet.
        //
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
            throw new Error('server.handleUpgrade() was called more than once with the same ' + 'socket, possibly due to a misconfiguration');
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        const headers = [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, undefined, this.options);
        if (protocols.size) {
            //
            // Optionally call external protocol selection handler.
            //
            const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
            if (protocol) {
                headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
                ws._protocol = protocol;
            }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
            const params = extensions[PerMessageDeflate.extensionName].params;
            const value = extension.format({
                [PerMessageDeflate.extensionName]: [
                    params
                ]
            });
            headers.push(`Sec-WebSocket-Extensions: ${value}`);
            ws._extensions = extensions;
        }
        //
        // Allow external modification/inspection of handshake headers.
        //
        this.emit('headers', headers, req);
        socket.write(headers.concat('\r\n').join('\r\n'));
        socket.removeListener('error', socketOnError);
        ws.setSocket(socket, head, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
            this.clients.add(ws);
            ws.on('close', ()=>{
                this.clients.delete(ws);
                if (this._shouldEmitClose && !this.clients.size) {
                    process.nextTick(emitClose, this);
                }
            });
        }
        cb(ws, req);
    }
}
module.exports = WebSocketServer;
/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */ function addListeners(server, map) {
    for (const event of Object.keys(map))server.on(event, map[event]);
    return function removeListeners() {
        for (const event of Object.keys(map)){
            server.removeListener(event, map[event]);
        }
    };
}
/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */ function emitClose(server) {
    server._state = CLOSED;
    server.emit('close');
}
/**
 * Handle socket errors.
 *
 * @private
 */ function socketOnError() {
    this.destroy();
}
/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {Duplex} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */ function abortHandshake(socket, code, message, headers) {
    //
    // The socket is writable unless the user destroyed or ended it before calling
    // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
    // error. Handling this does not make much sense as the worst that can happen
    // is that some of the data written by the user might be discarded due to the
    // call to `socket.end()` below, which triggers an `'error'` event that in
    // turn causes the socket to be destroyed.
    //
    message = message || http.STATUS_CODES[code];
    headers = {
        Connection: 'close',
        'Content-Type': 'text/html',
        'Content-Length': Buffer.byteLength(message),
        ...headers
    };
    socket.once('finish', socket.destroy);
    socket.end(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` + Object.keys(headers).map((h)=>`${h}: ${headers[h]}`).join('\r\n') + '\r\n\r\n' + message);
}
/**
 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
 * one listener for it, otherwise call `abortHandshake()`.
 *
 * @param {WebSocketServer} server The WebSocket server
 * @param {http.IncomingMessage} req The request object
 * @param {Duplex} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} message The HTTP response body
 * @param {Object} [headers] The HTTP response headers
 * @private
 */ function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
    if (server.listenerCount('wsClientError')) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit('wsClientError', err, socket, req);
    } else {
        abortHandshake(socket, code, message, headers);
    }
}
}),
"[project]/node_modules/ws/wrapper.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$extension$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/extension.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$permessage$2d$deflate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/permessage-deflate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$receiver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/receiver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$sender$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/sender.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$subprotocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/subprotocol.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/websocket.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$websocket$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/websocket-server.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cxl0n9._.js.map
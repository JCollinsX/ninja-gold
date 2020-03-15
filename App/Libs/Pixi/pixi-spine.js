var pixi_spine, __extends = this && this.__extends || function () {
    var n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
        t.__proto__ = e
    } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
    };
    return function (t, e) {
        function r() {
            this.constructor = t
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }
}();
!function (t) {
    !function (P) {
        var M, t, v, e, n, r, A = function () {
            function t(t, e, r) {
                if (null == t) throw new Error("name cannot be null.");
                if (null == e) throw new Error("timelines cannot be null.");
                this.name = t, this.timelines = e, this.duration = r
            }

            return t.prototype.apply = function (t, e, r, n, i, o, s, a) {
                if (null == t) throw new Error("skeleton cannot be null.");
                n && 0 != this.duration && (r %= this.duration, 0 < e && (e %= this.duration));
                for (var u = this.timelines, l = 0, h = u.length; l < h; l++) u[l].apply(t, e, r, i, o, s, a)
            }, t.binarySearch = function (t, e, r) {
                void 0 === r && (r = 1);
                var n = 0, i = t.length / r - 2;
                if (0 == i) return r;
                for (var o = i >>> 1; ;) {
                    if (t[(o + 1) * r] <= e ? n = o + 1 : i = o, n == i) return (n + 1) * r;
                    o = n + i >>> 1
                }
            }, t.linearSearch = function (t, e, r) {
                for (var n = 0, i = t.length - r; n <= i; n += r) if (t[n] > e) return n;
                return -1
            }, t
        }();
        P.Animation = A, (t = M = P.MixPose || (P.MixPose = {}))[t.setup = 0] = "setup", t[t.current = 1] = "current", t[t.currentLayered = 2] = "currentLayered", (e = v = P.MixDirection || (P.MixDirection = {}))[e.in = 0] = "in", e[e.out = 1] = "out", (r = n = P.TimelineType || (P.TimelineType = {}))[r.rotate = 0] = "rotate", r[r.translate = 1] = "translate", r[r.scale = 2] = "scale", r[r.shear = 3] = "shear", r[r.attachment = 4] = "attachment", r[r.color = 5] = "color", r[r.deform = 6] = "deform", r[r.event = 7] = "event", r[r.drawOrder = 8] = "drawOrder", r[r.ikConstraint = 9] = "ikConstraint", r[r.transformConstraint = 10] = "transformConstraint", r[r.pathConstraintPosition = 11] = "pathConstraintPosition", r[r.pathConstraintSpacing = 12] = "pathConstraintSpacing", r[r.pathConstraintMix = 13] = "pathConstraintMix", r[r.twoColor = 14] = "twoColor";
        var i = function () {
            function y(t) {
                if (t <= 0) throw new Error("frameCount must be > 0: " + t);
                this.curves = P.Utils.newFloatArray((t - 1) * y.BEZIER_SIZE)
            }

            return y.prototype.getFrameCount = function () {
                return this.curves.length / y.BEZIER_SIZE + 1
            }, y.prototype.setLinear = function (t) {
                this.curves[t * y.BEZIER_SIZE] = y.LINEAR
            }, y.prototype.setStepped = function (t) {
                this.curves[t * y.BEZIER_SIZE] = y.STEPPED
            }, y.prototype.getCurveType = function (t) {
                var e = t * y.BEZIER_SIZE;
                if (e == this.curves.length) return y.LINEAR;
                var r = this.curves[e];
                return r == y.LINEAR ? y.LINEAR : r == y.STEPPED ? y.STEPPED : y.BEZIER
            }, y.prototype.setCurve = function (t, e, r, n, i) {
                var o = .03 * (2 * -e + n), s = .03 * (2 * -r + i), a = .006 * (3 * (e - n) + 1),
                    u = .006 * (3 * (r - i) + 1), l = 2 * o + a, h = 2 * s + u, c = .3 * e + o + .16666667 * a,
                    p = .3 * r + s + .16666667 * u, d = t * y.BEZIER_SIZE, f = this.curves;
                f[d++] = y.BEZIER;
                for (var m = c, g = p, v = d + y.BEZIER_SIZE - 1; d < v; d += 2) f[d] = m, f[d + 1] = g, c += l, p += h, l += a, h += u, m += c, g += p
            }, y.prototype.getCurvePercent = function (t, e) {
                e = P.MathUtils.clamp(e, 0, 1);
                var r = this.curves, n = t * y.BEZIER_SIZE, i = r[n];
                if (i == y.LINEAR) return e;
                if (i == y.STEPPED) return 0;
                for (var o = 0, s = ++n, a = n + y.BEZIER_SIZE - 1; n < a; n += 2) if (e <= (o = r[n])) {
                    var u = void 0, l = void 0;
                    return (l = n == s ? u = 0 : (u = r[n - 2], r[n - 1])) + (r[n + 1] - l) * (e - u) / (o - u)
                }
                var h = r[n - 1];
                return h + (1 - h) * (e - o) / (1 - o)
            }, y.LINEAR = 0, y.STEPPED = 1, y.BEZIER = 2, y.BEZIER_SIZE = 19, y
        }(), o = function (r) {
            function g(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t << 1), e
            }

            return __extends(g, r), g.prototype.getPropertyId = function () {
                return (n.rotate << 24) + this.boneIndex
            }, g.prototype.setFrame = function (t, e, r) {
                t <<= 1, this.frames[t] = e, this.frames[t + g.ROTATION] = r
            }, g.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.bones[this.boneIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return void (u.rotation = u.data.rotation);
                    case M.current:
                        var l = u.data.rotation - u.rotation;
                        l -= 360 * (16384 - (16384.499999999996 - l / 360 | 0)), u.rotation += l * i
                } else if (r >= a[a.length - g.ENTRIES]) if (o == M.setup) u.rotation = u.data.rotation + a[a.length + g.PREV_ROTATION] * i; else {
                    var h = u.data.rotation + a[a.length + g.PREV_ROTATION] - u.rotation;
                    h -= 360 * (16384 - (16384.499999999996 - h / 360 | 0)), u.rotation += h * i
                } else {
                    var c = A.binarySearch(a, r, g.ENTRIES), p = a[c + g.PREV_ROTATION], d = a[c],
                        f = this.getCurvePercent((c >> 1) - 1, 1 - (r - d) / (a[c + g.PREV_TIME] - d)),
                        m = a[c + g.ROTATION] - p;
                    m = p + (m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0))) * f, o == M.setup ? (m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0)), u.rotation = u.data.rotation + m * i) : (m = u.data.rotation + m - u.rotation, m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0)), u.rotation += m * i)
                }
            }, g.ENTRIES = 2, g.PREV_TIME = -2, g.PREV_ROTATION = -1, g.ROTATION = 1, g
        }(P.CurveTimeline = i);
        P.RotateTimeline = o;
        var s = function (r) {
            function f(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * f.ENTRIES), e
            }

            return __extends(f, r), f.prototype.getPropertyId = function () {
                return (n.translate << 24) + this.boneIndex
            }, f.prototype.setFrame = function (t, e, r, n) {
                t *= f.ENTRIES, this.frames[t] = e, this.frames[t + f.X] = r, this.frames[t + f.Y] = n
            }, f.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.bones[this.boneIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return u.x = u.data.x, void (u.y = u.data.y);
                    case M.current:
                        u.x += (u.data.x - u.x) * i, u.y += (u.data.y - u.y) * i
                } else {
                    var l = 0, h = 0;
                    if (r >= a[a.length - f.ENTRIES]) l = a[a.length + f.PREV_X], h = a[a.length + f.PREV_Y]; else {
                        var c = A.binarySearch(a, r, f.ENTRIES);
                        l = a[c + f.PREV_X], h = a[c + f.PREV_Y];
                        var p = a[c],
                            d = this.getCurvePercent(c / f.ENTRIES - 1, 1 - (r - p) / (a[c + f.PREV_TIME] - p));
                        l += (a[c + f.X] - l) * d, h += (a[c + f.Y] - h) * d
                    }
                    o == M.setup ? (u.x = u.data.x + l * i, u.y = u.data.y + h * i) : (u.x += (u.data.x + l - u.x) * i, u.y += (u.data.y + h - u.y) * i)
                }
            }, f.ENTRIES = 3, f.PREV_TIME = -3, f.PREV_X = -2, f.PREV_Y = -1, f.X = 1, f.Y = 2, f
        }(i), a = function (e) {
            function g(t) {
                return e.call(this, t) || this
            }

            return __extends(g, e), g.prototype.getPropertyId = function () {
                return (n.scale << 24) + this.boneIndex
            }, g.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.bones[this.boneIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return u.scaleX = u.data.scaleX, void (u.scaleY = u.data.scaleY);
                    case M.current:
                        u.scaleX += (u.data.scaleX - u.scaleX) * i, u.scaleY += (u.data.scaleY - u.scaleY) * i
                } else {
                    var l = 0, h = 0;
                    if (r >= a[a.length - g.ENTRIES]) l = a[a.length + g.PREV_X] * u.data.scaleX, h = a[a.length + g.PREV_Y] * u.data.scaleY; else {
                        var c = A.binarySearch(a, r, g.ENTRIES);
                        l = a[c + g.PREV_X], h = a[c + g.PREV_Y];
                        var p = a[c],
                            d = this.getCurvePercent(c / g.ENTRIES - 1, 1 - (r - p) / (a[c + g.PREV_TIME] - p));
                        l = (l + (a[c + g.X] - l) * d) * u.data.scaleX, h = (h + (a[c + g.Y] - h) * d) * u.data.scaleY
                    }
                    if (1 == i) u.scaleX = l, u.scaleY = h; else {
                        var f = 0, m = 0;
                        m = o == M.setup ? (f = u.data.scaleX, u.data.scaleY) : (f = u.scaleX, u.scaleY), s == v.out ? (l = Math.abs(l) * P.MathUtils.signum(f), h = Math.abs(h) * P.MathUtils.signum(m)) : (f = Math.abs(f) * P.MathUtils.signum(l), m = Math.abs(m) * P.MathUtils.signum(h)), u.scaleX = f + (l - f) * i, u.scaleY = m + (h - m) * i
                    }
                }
            }, g
        }(P.TranslateTimeline = s);
        P.ScaleTimeline = a;
        var u = function (e) {
            function f(t) {
                return e.call(this, t) || this
            }

            return __extends(f, e), f.prototype.getPropertyId = function () {
                return (n.shear << 24) + this.boneIndex
            }, f.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.bones[this.boneIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return u.shearX = u.data.shearX, void (u.shearY = u.data.shearY);
                    case M.current:
                        u.shearX += (u.data.shearX - u.shearX) * i, u.shearY += (u.data.shearY - u.shearY) * i
                } else {
                    var l = 0, h = 0;
                    if (r >= a[a.length - f.ENTRIES]) l = a[a.length + f.PREV_X], h = a[a.length + f.PREV_Y]; else {
                        var c = A.binarySearch(a, r, f.ENTRIES);
                        l = a[c + f.PREV_X], h = a[c + f.PREV_Y];
                        var p = a[c],
                            d = this.getCurvePercent(c / f.ENTRIES - 1, 1 - (r - p) / (a[c + f.PREV_TIME] - p));
                        l += (a[c + f.X] - l) * d, h += (a[c + f.Y] - h) * d
                    }
                    o == M.setup ? (u.shearX = u.data.shearX + l * i, u.shearY = u.data.shearY + h * i) : (u.shearX += (u.data.shearX + l - u.shearX) * i, u.shearY += (u.data.shearY + h - u.shearY) * i)
                }
            }, f
        }(s);
        P.ShearTimeline = u;
        var l = function (r) {
            function _(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * _.ENTRIES), e
            }

            return __extends(_, r), _.prototype.getPropertyId = function () {
                return (n.color << 24) + this.slotIndex
            }, _.prototype.setFrame = function (t, e, r, n, i, o) {
                t *= _.ENTRIES, this.frames[t] = e, this.frames[t + _.R] = r, this.frames[t + _.G] = n, this.frames[t + _.B] = i, this.frames[t + _.A] = o
            }, _.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = t.slots[this.slotIndex], u = this.frames;
                if (r < u[0]) switch (o) {
                    case M.setup:
                        return void a.color.setFromColor(a.data.color);
                    case M.current:
                        var l = a.color, h = a.data.color;
                        l.add((h.r - l.r) * i, (h.g - l.g) * i, (h.b - l.b) * i, (h.a - l.a) * i)
                } else {
                    var c = 0, p = 0, d = 0, f = 0;
                    if (r >= u[u.length - _.ENTRIES]) {
                        var m = u.length;
                        c = u[m + _.PREV_R], p = u[m + _.PREV_G], d = u[m + _.PREV_B], f = u[m + _.PREV_A]
                    } else {
                        var g = A.binarySearch(u, r, _.ENTRIES);
                        c = u[g + _.PREV_R], p = u[g + _.PREV_G], d = u[g + _.PREV_B], f = u[g + _.PREV_A];
                        var v = u[g],
                            y = this.getCurvePercent(g / _.ENTRIES - 1, 1 - (r - v) / (u[g + _.PREV_TIME] - v));
                        c += (u[g + _.R] - c) * y, p += (u[g + _.G] - p) * y, d += (u[g + _.B] - d) * y, f += (u[g + _.A] - f) * y
                    }
                    if (1 == i) a.color.set(c, p, d, f); else {
                        l = a.color;
                        o == M.setup && l.setFromColor(a.data.color), l.add((c - l.r) * i, (p - l.g) * i, (d - l.b) * i, (f - l.a) * i)
                    }
                }
            }, _.ENTRIES = 5, _.PREV_TIME = -5, _.PREV_R = -4, _.PREV_G = -3, _.PREV_B = -2, _.PREV_A = -1, _.R = 1, _.G = 2, _.B = 3, _.A = 4, _
        }(i);
        P.ColorTimeline = l;
        var h = function (r) {
            function E(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * E.ENTRIES), e
            }

            return __extends(E, r), E.prototype.getPropertyId = function () {
                return (n.twoColor << 24) + this.slotIndex
            }, E.prototype.setFrame = function (t, e, r, n, i, o, s, a, u) {
                t *= E.ENTRIES, this.frames[t] = e, this.frames[t + E.R] = r, this.frames[t + E.G] = n, this.frames[t + E.B] = i, this.frames[t + E.A] = o, this.frames[t + E.R2] = s, this.frames[t + E.G2] = a, this.frames[t + E.B2] = u
            }, E.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = t.slots[this.slotIndex], u = this.frames;
                if (r < u[0]) switch (o) {
                    case M.setup:
                        return a.color.setFromColor(a.data.color), void a.darkColor.setFromColor(a.data.darkColor);
                    case M.current:
                        var l = a.color, h = a.darkColor, c = a.data.color, p = a.data.darkColor;
                        l.add((c.r - l.r) * i, (c.g - l.g) * i, (c.b - l.b) * i, (c.a - l.a) * i), h.add((p.r - h.r) * i, (p.g - h.g) * i, (p.b - h.b) * i, 0)
                } else {
                    var d = 0, f = 0, m = 0, g = 0, v = 0, y = 0, _ = 0;
                    if (r >= u[u.length - E.ENTRIES]) {
                        var x = u.length;
                        d = u[x + E.PREV_R], f = u[x + E.PREV_G], m = u[x + E.PREV_B], g = u[x + E.PREV_A], v = u[x + E.PREV_R2], y = u[x + E.PREV_G2], _ = u[x + E.PREV_B2]
                    } else {
                        var b = A.binarySearch(u, r, E.ENTRIES);
                        d = u[b + E.PREV_R], f = u[b + E.PREV_G], m = u[b + E.PREV_B], g = u[b + E.PREV_A], v = u[b + E.PREV_R2], y = u[b + E.PREV_G2], _ = u[b + E.PREV_B2];
                        var w = u[b],
                            T = this.getCurvePercent(b / E.ENTRIES - 1, 1 - (r - w) / (u[b + E.PREV_TIME] - w));
                        d += (u[b + E.R] - d) * T, f += (u[b + E.G] - f) * T, m += (u[b + E.B] - m) * T, g += (u[b + E.A] - g) * T, v += (u[b + E.R2] - v) * T, y += (u[b + E.G2] - y) * T, _ += (u[b + E.B2] - _) * T
                    }
                    if (1 == i) a.color.set(d, f, m, g), a.darkColor.set(v, y, _, 1); else {
                        l = a.color, h = a.darkColor;
                        o == M.setup && (l.setFromColor(a.data.color), h.setFromColor(a.data.darkColor)), l.add((d - l.r) * i, (f - l.g) * i, (m - l.b) * i, (g - l.a) * i), h.add((v - h.r) * i, (y - h.g) * i, (_ - h.b) * i, 0)
                    }
                }
            }, E.ENTRIES = 8, E.PREV_TIME = -8, E.PREV_R = -7, E.PREV_G = -6, E.PREV_B = -5, E.PREV_A = -4, E.PREV_R2 = -3, E.PREV_G2 = -2, E.PREV_B2 = -1, E.R = 1, E.G = 2, E.B = 3, E.A = 4, E.R2 = 5, E.G2 = 6, E.B2 = 7, E
        }(i);
        P.TwoColorTimeline = h;
        var c = function () {
            function t(t) {
                this.frames = P.Utils.newFloatArray(t), this.attachmentNames = new Array(t)
            }

            return t.prototype.getPropertyId = function () {
                return (n.attachment << 24) + this.slotIndex
            }, t.prototype.getFrameCount = function () {
                return this.frames.length
            }, t.prototype.setFrame = function (t, e, r) {
                this.frames[t] = e, this.attachmentNames[t] = r
            }, t.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = t.slots[this.slotIndex];
                if (s != v.out || o != M.setup) {
                    var u = this.frames;
                    if (r < u[0]) {
                        if (o == M.setup) {
                            var l = a.data.attachmentName;
                            a.setAttachment(null == l ? null : t.getAttachment(this.slotIndex, l))
                        }
                    } else {
                        var h = 0;
                        h = r >= u[u.length - 1] ? u.length - 1 : A.binarySearch(u, r, 1) - 1;
                        var c = this.attachmentNames[h];
                        t.slots[this.slotIndex].setAttachment(null == c ? null : t.getAttachment(this.slotIndex, c))
                    }
                } else {
                    var p = a.data.attachmentName;
                    a.setAttachment(null == p ? null : t.getAttachment(this.slotIndex, p))
                }
            }, t
        }();
        P.AttachmentTimeline = c;
        var p = null, d = function (r) {
            function t(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t), e.frameVertices = new Array(t), null == p && (p = P.Utils.newFloatArray(64)), e
            }

            return __extends(t, r), t.prototype.getPropertyId = function () {
                return (n.deform << 27) + +this.attachment.id + this.slotIndex
            }, t.prototype.setFrame = function (t, e, r) {
                this.frames[t] = e, this.frameVertices[t] = r
            }, t.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = t.slots[this.slotIndex], u = a.getAttachment();
                if (u instanceof P.VertexAttachment && u.applyDeform(this.attachment)) {
                    var l = a.attachmentVertices;
                    0 == l.length && (i = 1);
                    var h = this.frameVertices, c = h[0].length, p = this.frames;
                    if (r < p[0]) {
                        var d = u;
                        switch (o) {
                            case M.setup:
                                return void (l.length = 0);
                            case M.current:
                                if (1 == i) {
                                    l.length = 0;
                                    break
                                }
                                var f = P.Utils.setArraySize(l, c);
                                if (null == d.bones) for (var m = d.vertices, g = 0; g < c; g++) f[g] += (m[g] - f[g]) * i; else {
                                    i = 1 - i;
                                    for (g = 0; g < c; g++) f[g] *= i
                                }
                        }
                    } else {
                        var v = P.Utils.setArraySize(l, c);
                        if (r >= p[p.length - 1]) {
                            var y = h[p.length - 1];
                            if (1 == i) P.Utils.arrayCopy(y, 0, v, 0, c); else if (o == M.setup) {
                                if (null == (d = u).bones) for (m = d.vertices, g = 0; g < c; g++) {
                                    var _ = m[g];
                                    v[g] = _ + (y[g] - _) * i
                                } else for (g = 0; g < c; g++) v[g] = y[g] * i
                            } else for (g = 0; g < c; g++) v[g] += (y[g] - v[g]) * i
                        } else {
                            var x = A.binarySearch(p, r), b = h[x - 1], w = h[x], T = p[x],
                                E = this.getCurvePercent(x - 1, 1 - (r - T) / (p[x - 1] - T));
                            if (1 == i) for (g = 0; g < c; g++) {
                                var S = b[g];
                                v[g] = S + (w[g] - S) * E
                            } else if (o == M.setup) {
                                if (null == (d = u).bones) for (m = d.vertices, g = 0; g < c; g++) {
                                    S = b[g], _ = m[g];
                                    v[g] = _ + (S + (w[g] - S) * E - _) * i
                                } else for (g = 0; g < c; g++) {
                                    S = b[g];
                                    v[g] = (S + (w[g] - S) * E) * i
                                }
                            } else for (g = 0; g < c; g++) {
                                S = b[g];
                                v[g] += (S + (w[g] - S) * E - v[g]) * i
                            }
                        }
                    }
                }
            }, t
        }(i);
        P.DeformTimeline = d;
        var f = function () {
            function t(t) {
                this.frames = P.Utils.newFloatArray(t), this.events = new Array(t)
            }

            return t.prototype.getPropertyId = function () {
                return n.event << 24
            }, t.prototype.getFrameCount = function () {
                return this.frames.length
            }, t.prototype.setFrame = function (t, e) {
                this.frames[t] = e.time, this.events[t] = e
            }, t.prototype.apply = function (t, e, r, n, i, o, s) {
                if (null != n) {
                    var a = this.frames, u = this.frames.length;
                    if (r < e) this.apply(t, e, Number.MAX_VALUE, n, i, o, s), e = -1; else if (e >= a[u - 1]) return;
                    if (!(r < a[0])) {
                        var l = 0;
                        if (e < a[0]) l = 0; else for (var h = a[l = A.binarySearch(a, e)]; 0 < l && a[l - 1] == h;) l--;
                        for (; l < u && r >= a[l]; l++) n.push(this.events[l])
                    }
                }
            }, t
        }();
        P.EventTimeline = f;
        var m = function () {
            function t(t) {
                this.frames = P.Utils.newFloatArray(t), this.drawOrders = new Array(t)
            }

            return t.prototype.getPropertyId = function () {
                return n.drawOrder << 24
            }, t.prototype.getFrameCount = function () {
                return this.frames.length
            }, t.prototype.setFrame = function (t, e, r) {
                this.frames[t] = e, this.drawOrders[t] = r
            }, t.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = t.drawOrder, u = t.slots;
                if (s != v.out || o != M.setup) {
                    var l = this.frames;
                    if (r < l[0]) o == M.setup && P.Utils.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length); else {
                        var h = 0;
                        h = r >= l[l.length - 1] ? l.length - 1 : A.binarySearch(l, r) - 1;
                        var c = this.drawOrders[h];
                        if (null == c) P.Utils.arrayCopy(u, 0, a, 0, u.length); else for (var p = 0, d = c.length; p < d; p++) a[p] = u[c[p]]
                    }
                } else P.Utils.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length)
            }, t
        }();
        P.DrawOrderTimeline = m;
        var g = function (r) {
            function d(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * d.ENTRIES), e
            }

            return __extends(d, r), d.prototype.getPropertyId = function () {
                return (n.ikConstraint << 24) + this.ikConstraintIndex
            }, d.prototype.setFrame = function (t, e, r, n) {
                t *= d.ENTRIES, this.frames[t] = e, this.frames[t + d.MIX] = r, this.frames[t + d.BEND_DIRECTION] = n
            }, d.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.ikConstraints[this.ikConstraintIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return u.mix = u.data.mix, void (u.bendDirection = u.data.bendDirection);
                    case M.current:
                        u.mix += (u.data.mix - u.mix) * i, u.bendDirection = u.data.bendDirection
                } else if (r >= a[a.length - d.ENTRIES]) o == M.setup ? (u.mix = u.data.mix + (a[a.length + d.PREV_MIX] - u.data.mix) * i, u.bendDirection = s == v.out ? u.data.bendDirection : a[a.length + d.PREV_BEND_DIRECTION]) : (u.mix += (a[a.length + d.PREV_MIX] - u.mix) * i, s == v.in && (u.bendDirection = a[a.length + d.PREV_BEND_DIRECTION])); else {
                    var l = A.binarySearch(a, r, d.ENTRIES), h = a[l + d.PREV_MIX], c = a[l],
                        p = this.getCurvePercent(l / d.ENTRIES - 1, 1 - (r - c) / (a[l + d.PREV_TIME] - c));
                    o == M.setup ? (u.mix = u.data.mix + (h + (a[l + d.MIX] - h) * p - u.data.mix) * i, u.bendDirection = s == v.out ? u.data.bendDirection : a[l + d.PREV_BEND_DIRECTION]) : (u.mix += (h + (a[l + d.MIX] - h) * p - u.mix) * i, s == v.in && (u.bendDirection = a[l + d.PREV_BEND_DIRECTION]))
                }
            }, d.ENTRIES = 3, d.PREV_TIME = -3, d.PREV_MIX = -2, d.PREV_BEND_DIRECTION = -1, d.MIX = 1, d.BEND_DIRECTION = 2, d
        }(i);
        P.IkConstraintTimeline = g;
        var y = function (r) {
            function y(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * y.ENTRIES), e
            }

            return __extends(y, r), y.prototype.getPropertyId = function () {
                return (n.transformConstraint << 24) + this.transformConstraintIndex
            }, y.prototype.setFrame = function (t, e, r, n, i, o) {
                t *= y.ENTRIES, this.frames[t] = e, this.frames[t + y.ROTATE] = r, this.frames[t + y.TRANSLATE] = n, this.frames[t + y.SCALE] = i, this.frames[t + y.SHEAR] = o
            }, y.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.transformConstraints[this.transformConstraintIndex];
                if (r < a[0]) {
                    var l = u.data;
                    switch (o) {
                        case M.setup:
                            return u.rotateMix = l.rotateMix, u.translateMix = l.translateMix, u.scaleMix = l.scaleMix, void (u.shearMix = l.shearMix);
                        case M.current:
                            u.rotateMix += (l.rotateMix - u.rotateMix) * i, u.translateMix += (l.translateMix - u.translateMix) * i, u.scaleMix += (l.scaleMix - u.scaleMix) * i, u.shearMix += (l.shearMix - u.shearMix) * i
                    }
                } else {
                    var h = 0, c = 0, p = 0, d = 0;
                    if (r >= a[a.length - y.ENTRIES]) {
                        var f = a.length;
                        h = a[f + y.PREV_ROTATE], c = a[f + y.PREV_TRANSLATE], p = a[f + y.PREV_SCALE], d = a[f + y.PREV_SHEAR]
                    } else {
                        var m = A.binarySearch(a, r, y.ENTRIES);
                        h = a[m + y.PREV_ROTATE], c = a[m + y.PREV_TRANSLATE], p = a[m + y.PREV_SCALE], d = a[m + y.PREV_SHEAR];
                        var g = a[m],
                            v = this.getCurvePercent(m / y.ENTRIES - 1, 1 - (r - g) / (a[m + y.PREV_TIME] - g));
                        h += (a[m + y.ROTATE] - h) * v, c += (a[m + y.TRANSLATE] - c) * v, p += (a[m + y.SCALE] - p) * v, d += (a[m + y.SHEAR] - d) * v
                    }
                    if (o == M.setup) {
                        l = u.data;
                        u.rotateMix = l.rotateMix + (h - l.rotateMix) * i, u.translateMix = l.translateMix + (c - l.translateMix) * i, u.scaleMix = l.scaleMix + (p - l.scaleMix) * i, u.shearMix = l.shearMix + (d - l.shearMix) * i
                    } else u.rotateMix += (h - u.rotateMix) * i, u.translateMix += (c - u.translateMix) * i, u.scaleMix += (p - u.scaleMix) * i, u.shearMix += (d - u.shearMix) * i
                }
            }, y.ENTRIES = 5, y.PREV_TIME = -5, y.PREV_ROTATE = -4, y.PREV_TRANSLATE = -3, y.PREV_SCALE = -2, y.PREV_SHEAR = -1, y.ROTATE = 1, y.TRANSLATE = 2, y.SCALE = 3, y.SHEAR = 4, y
        }(i);
        P.TransformConstraintTimeline = y;
        var _ = function (r) {
            function d(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * d.ENTRIES), e
            }

            return __extends(d, r), d.prototype.getPropertyId = function () {
                return (n.pathConstraintPosition << 24) + this.pathConstraintIndex
            }, d.prototype.setFrame = function (t, e, r) {
                t *= d.ENTRIES, this.frames[t] = e, this.frames[t + d.VALUE] = r
            }, d.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.pathConstraints[this.pathConstraintIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return void (u.position = u.data.position);
                    case M.current:
                        u.position += (u.data.position - u.position) * i
                } else {
                    var l = 0;
                    if (r >= a[a.length - d.ENTRIES]) l = a[a.length + d.PREV_VALUE]; else {
                        var h = A.binarySearch(a, r, d.ENTRIES);
                        l = a[h + d.PREV_VALUE];
                        var c = a[h],
                            p = this.getCurvePercent(h / d.ENTRIES - 1, 1 - (r - c) / (a[h + d.PREV_TIME] - c));
                        l += (a[h + d.VALUE] - l) * p
                    }
                    o == M.setup ? u.position = u.data.position + (l - u.data.position) * i : u.position += (l - u.position) * i
                }
            }, d.ENTRIES = 2, d.PREV_TIME = -2, d.PREV_VALUE = -1, d.VALUE = 1, d
        }(i), x = function (e) {
            function d(t) {
                return e.call(this, t) || this
            }

            return __extends(d, e), d.prototype.getPropertyId = function () {
                return (n.pathConstraintSpacing << 24) + this.pathConstraintIndex
            }, d.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.pathConstraints[this.pathConstraintIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return void (u.spacing = u.data.spacing);
                    case M.current:
                        u.spacing += (u.data.spacing - u.spacing) * i
                } else {
                    var l = 0;
                    if (r >= a[a.length - d.ENTRIES]) l = a[a.length + d.PREV_VALUE]; else {
                        var h = A.binarySearch(a, r, d.ENTRIES);
                        l = a[h + d.PREV_VALUE];
                        var c = a[h],
                            p = this.getCurvePercent(h / d.ENTRIES - 1, 1 - (r - c) / (a[h + d.PREV_TIME] - c));
                        l += (a[h + d.VALUE] - l) * p
                    }
                    o == M.setup ? u.spacing = u.data.spacing + (l - u.data.spacing) * i : u.spacing += (l - u.spacing) * i
                }
            }, d
        }(P.PathConstraintPositionTimeline = _);
        P.PathConstraintSpacingTimeline = x;
        var b = function (r) {
            function f(t) {
                var e = r.call(this, t) || this;
                return e.frames = P.Utils.newFloatArray(t * f.ENTRIES), e
            }

            return __extends(f, r), f.prototype.getPropertyId = function () {
                return (n.pathConstraintMix << 24) + this.pathConstraintIndex
            }, f.prototype.setFrame = function (t, e, r, n) {
                t *= f.ENTRIES, this.frames[t] = e, this.frames[t + f.ROTATE] = r, this.frames[t + f.TRANSLATE] = n
            }, f.prototype.apply = function (t, e, r, n, i, o, s) {
                var a = this.frames, u = t.pathConstraints[this.pathConstraintIndex];
                if (r < a[0]) switch (o) {
                    case M.setup:
                        return u.rotateMix = u.data.rotateMix, void (u.translateMix = u.data.translateMix);
                    case M.current:
                        u.rotateMix += (u.data.rotateMix - u.rotateMix) * i, u.translateMix += (u.data.translateMix - u.translateMix) * i
                } else {
                    var l = 0, h = 0;
                    if (r >= a[a.length - f.ENTRIES]) l = a[a.length + f.PREV_ROTATE], h = a[a.length + f.PREV_TRANSLATE]; else {
                        var c = A.binarySearch(a, r, f.ENTRIES);
                        l = a[c + f.PREV_ROTATE], h = a[c + f.PREV_TRANSLATE];
                        var p = a[c],
                            d = this.getCurvePercent(c / f.ENTRIES - 1, 1 - (r - p) / (a[c + f.PREV_TIME] - p));
                        l += (a[c + f.ROTATE] - l) * d, h += (a[c + f.TRANSLATE] - h) * d
                    }
                    o == M.setup ? (u.rotateMix = u.data.rotateMix + (l - u.data.rotateMix) * i, u.translateMix = u.data.translateMix + (h - u.data.translateMix) * i) : (u.rotateMix += (l - u.rotateMix) * i, u.translateMix += (h - u.translateMix) * i)
                }
            }, f.ENTRIES = 3, f.PREV_TIME = -3, f.PREV_ROTATE = -2, f.PREV_TRANSLATE = -1, f.ROTATE = 1, f.TRANSLATE = 2, f
        }(i);
        P.PathConstraintMixTimeline = b
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    !function (E) {
        var f = function () {
            function T(t) {
                this.tracks = new Array, this.events = new Array, this.listeners = new Array, this.queue = new r(this), this.propertyIDs = new E.IntSet, this.mixingTo = new Array, this.animationsChanged = !1, this.timeScale = 1, this.trackEntryPool = new E.Pool(function () {
                    return new e
                }), this.data = t
            }

            return T.prototype.update = function (t) {
                t *= this.timeScale;
                for (var e = this.tracks, r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    if (null != i) {
                        i.animationLast = i.nextAnimationLast, i.trackLast = i.nextTrackLast;
                        var o = t * i.timeScale;
                        if (0 < i.delay) {
                            if (i.delay -= o, 0 < i.delay) continue;
                            o = -i.delay, i.delay = 0
                        }
                        var s = i.next;
                        if (null != s) {
                            var a = i.trackLast - s.delay;
                            if (0 <= a) {
                                for (s.delay = 0, s.trackTime = a + t * s.timeScale, i.trackTime += o, this.setCurrent(r, s, !0); null != s.mixingFrom;) s.mixTime += o, s = s.mixingFrom;
                                continue
                            }
                        } else if (i.trackLast >= i.trackEnd && null == i.mixingFrom) {
                            e[r] = null, this.queue.end(i), this.disposeNext(i);
                            continue
                        }
                        if (null != i.mixingFrom && this.updateMixingFrom(i, t)) {
                            var u = i.mixingFrom;
                            for (i.mixingFrom = null; null != u;) this.queue.end(u), u = u.mixingFrom
                        }
                        i.trackTime += o
                    }
                }
                this.queue.drain()
            }, T.prototype.updateMixingFrom = function (t, e) {
                var r = t.mixingFrom;
                if (null == r) return !0;
                var n = this.updateMixingFrom(r, e);
                return 0 < t.mixTime && (t.mixTime >= t.mixDuration || 0 == t.timeScale) ? (0 == r.totalAlpha && (t.mixingFrom = r.mixingFrom, t.interruptAlpha = r.interruptAlpha, this.queue.end(r)), n) : (r.animationLast = r.nextAnimationLast, r.trackLast = r.nextTrackLast, r.trackTime += e * r.timeScale, t.mixTime += e * t.timeScale, !1)
            }, T.prototype.apply = function (t) {
                if (null == t) throw new Error("skeleton cannot be null.");
                this.animationsChanged && this._animationsChanged();
                for (var e = this.events, r = this.tracks, n = !1, i = 0, o = r.length; i < o; i++) {
                    var s = r[i];
                    if (!(null == s || 0 < s.delay)) {
                        n = !0;
                        var a = 0 == i ? E.MixPose.current : E.MixPose.currentLayered, u = s.alpha;
                        null != s.mixingFrom ? u *= this.applyMixingFrom(s, t, a) : s.trackTime >= s.trackEnd && null == s.next && (u = 0);
                        var l = s.animationLast, h = s.getAnimationTime(), c = s.animation.timelines.length,
                            p = s.animation.timelines;
                        if (1 == u) for (var d = 0; d < c; d++) p[d].apply(t, l, h, e, 1, E.MixPose.setup, E.MixDirection.in); else {
                            var f = s.timelineData, m = 0 == s.timelinesRotation.length;
                            m && E.Utils.setArraySize(s.timelinesRotation, c << 1, null);
                            var g = s.timelinesRotation;
                            for (d = 0; d < c; d++) {
                                var v = p[d], y = f[d] >= T.FIRST ? E.MixPose.setup : a;
                                v instanceof E.RotateTimeline ? this.applyRotateTimeline(v, t, h, u, y, g, d << 1, m) : (E.Utils.webkit602BugfixHelper(u, y), v.apply(t, l, h, e, u, y, E.MixDirection.in))
                            }
                        }
                        this.queueEvents(s, h), e.length = 0, s.nextAnimationLast = h, s.nextTrackLast = s.trackTime
                    }
                }
                return this.queue.drain(), n
            }, T.prototype.applyMixingFrom = function (t, e, r) {
                var n = t.mixingFrom;
                null != n.mixingFrom && this.applyMixingFrom(n, e, r);
                var i = 0;
                0 == t.mixDuration ? (i = 1, r = E.MixPose.setup) : 1 < (i = t.mixTime / t.mixDuration) && (i = 1);
                var o = i < n.eventThreshold ? this.events : null, s = i < n.attachmentThreshold,
                    a = i < n.drawOrderThreshold, u = n.animationLast, l = n.getAnimationTime(),
                    h = n.animation.timelines.length, c = n.animation.timelines, p = n.timelineData,
                    d = n.timelineDipMix, f = 0 == n.timelinesRotation.length;
                f && E.Utils.setArraySize(n.timelinesRotation, h << 1, null);
                for (var m, g = n.timelinesRotation, v = n.alpha * t.interruptAlpha, y = v * (1 - i), _ = 0, x = n.totalAlpha = 0; x < h; x++) {
                    var b = c[x];
                    switch (p[x]) {
                        case T.SUBSEQUENT:
                            if (!s && b instanceof E.AttachmentTimeline) continue;
                            if (!a && b instanceof E.DrawOrderTimeline) continue;
                            m = r, _ = y;
                            break;
                        case T.FIRST:
                            m = E.MixPose.setup, _ = y;
                            break;
                        case T.DIP:
                            m = E.MixPose.setup, _ = v;
                            break;
                        default:
                            m = E.MixPose.setup, _ = v;
                            var w = d[x];
                            _ *= Math.max(0, 1 - w.mixTime / w.mixDuration)
                    }
                    n.totalAlpha += _, b instanceof E.RotateTimeline ? this.applyRotateTimeline(b, e, l, _, m, g, x << 1, f) : b.apply(e, u, l, o, _, m, E.MixDirection.out)
                }
                return 0 < t.mixDuration && this.queueEvents(n, l), this.events.length = 0, n.nextAnimationLast = l, n.nextTrackLast = n.trackTime, i
            }, T.prototype.applyRotateTimeline = function (t, e, r, n, i, o, s, a) {
                if (a && (o[s] = 0), 1 != n) {
                    var u = t, l = u.frames, h = e.bones[u.boneIndex];
                    if (r < l[0]) i == E.MixPose.setup && (h.rotation = h.data.rotation); else {
                        var c = 0;
                        if (r >= l[l.length - E.RotateTimeline.ENTRIES]) c = h.data.rotation + l[l.length + E.RotateTimeline.PREV_ROTATION]; else {
                            var p = E.Animation.binarySearch(l, r, E.RotateTimeline.ENTRIES),
                                d = l[p + E.RotateTimeline.PREV_ROTATION], f = l[p],
                                m = u.getCurvePercent((p >> 1) - 1, 1 - (r - f) / (l[p + E.RotateTimeline.PREV_TIME] - f));
                            c = l[p + E.RotateTimeline.ROTATION] - d, c = d + (c -= 360 * (16384 - (16384.499999999996 - c / 360 | 0))) * m + h.data.rotation, c -= 360 * (16384 - (16384.499999999996 - c / 360 | 0))
                        }
                        var g = i == E.MixPose.setup ? h.data.rotation : h.rotation, v = 0, y = c - g;
                        if (0 == y) v = o[s]; else {
                            y -= 360 * (16384 - (16384.499999999996 - y / 360 | 0));
                            var _ = 0, x = 0;
                            x = a ? (_ = 0, y) : (_ = o[s], o[s + 1]);
                            var b = 0 < y, w = 0 <= _;
                            E.MathUtils.signum(x) != E.MathUtils.signum(y) && Math.abs(x) <= 90 && (180 < Math.abs(_) && (_ += 360 * E.MathUtils.signum(_)), w = b), v = y + _ - _ % 360, w != b && (v += 360 * E.MathUtils.signum(_)), o[s] = v
                        }
                        o[s + 1] = y, g += v * n, h.rotation = g - 360 * (16384 - (16384.499999999996 - g / 360 | 0))
                    }
                } else t.apply(e, 0, r, null, 1, i, E.MixDirection.in)
            }, T.prototype.queueEvents = function (t, e) {
                for (var r = t.animationStart, n = t.animationEnd, i = n - r, o = t.trackLast % i, s = this.events, a = 0, u = s.length; a < u; a++) {
                    var l = s[a];
                    if (l.time < o) break;
                    l.time > n || this.queue.event(t, l)
                }
                for ((t.loop ? o > t.trackTime % i : n <= e && t.animationLast < n) && this.queue.complete(t); a < u; a++) {
                    s[a].time < r || this.queue.event(t, s[a])
                }
            }, T.prototype.clearTracks = function () {
                var t = this.queue.drainDisabled;
                this.queue.drainDisabled = !0;
                for (var e = 0, r = this.tracks.length; e < r; e++) this.clearTrack(e);
                this.tracks.length = 0, this.queue.drainDisabled = t, this.queue.drain()
            }, T.prototype.clearTrack = function (t) {
                if (!(t >= this.tracks.length)) {
                    var e = this.tracks[t];
                    if (null != e) {
                        this.queue.end(e), this.disposeNext(e);
                        for (var r = e; ;) {
                            var n = r.mixingFrom;
                            if (null == n) break;
                            this.queue.end(n), r.mixingFrom = null, r = n
                        }
                        this.tracks[e.trackIndex] = null, this.queue.drain()
                    }
                }
            }, T.prototype.setCurrent = function (t, e, r) {
                var n = this.expandToIndex(t);
                this.tracks[t] = e, null != n && (r && this.queue.interrupt(n), e.mixingFrom = n, e.mixTime = 0, null != n.mixingFrom && 0 < n.mixDuration && (e.interruptAlpha *= Math.min(1, n.mixTime / n.mixDuration)), n.timelinesRotation.length = 0), this.queue.start(e)
            }, T.prototype.setAnimation = function (t, e, r) {
                var n = this.data.skeletonData.findAnimation(e);
                if (null == n) throw new Error("Animation not found: " + e);
                return this.setAnimationWith(t, n, r)
            }, T.prototype.setAnimationWith = function (t, e, r) {
                if (null == e) throw new Error("animation cannot be null.");
                var n = !0, i = this.expandToIndex(t);
                null != i && (-1 == i.nextTrackLast ? (this.tracks[t] = i.mixingFrom, this.queue.interrupt(i), this.queue.end(i), this.disposeNext(i), i = i.mixingFrom, n = !1) : this.disposeNext(i));
                var o = this.trackEntry(t, e, r, i);
                return this.setCurrent(t, o, n), this.queue.drain(), o
            }, T.prototype.addAnimation = function (t, e, r, n) {
                var i = this.data.skeletonData.findAnimation(e);
                if (null == i) throw new Error("Animation not found: " + e);
                return this.addAnimationWith(t, i, r, n)
            }, T.prototype.addAnimationWith = function (t, e, r, n) {
                if (null == e) throw new Error("animation cannot be null.");
                var i = this.expandToIndex(t);
                if (null != i) for (; null != i.next;) i = i.next;
                var o = this.trackEntry(t, e, r, i);
                if (null == i) this.setCurrent(t, o, !0), this.queue.drain(); else if (i.next = o, n <= 0) {
                    var s = i.animationEnd - i.animationStart;
                    0 != s ? (i.loop ? n += s * (1 + (i.trackTime / s | 0)) : n += s, n -= this.data.getMix(i.animation, e)) : n = 0
                }
                return o.delay = n, o
            }, T.prototype.setEmptyAnimation = function (t, e) {
                var r = this.setAnimationWith(t, T.emptyAnimation, !1);
                return r.mixDuration = e, r.trackEnd = e, r
            }, T.prototype.addEmptyAnimation = function (t, e, r) {
                r <= 0 && (r -= e);
                var n = this.addAnimationWith(t, T.emptyAnimation, !1, r);
                return n.mixDuration = e, n.trackEnd = e, n
            }, T.prototype.setEmptyAnimations = function (t) {
                var e = this.queue.drainDisabled;
                this.queue.drainDisabled = !0;
                for (var r = 0, n = this.tracks.length; r < n; r++) {
                    var i = this.tracks[r];
                    null != i && this.setEmptyAnimation(i.trackIndex, t)
                }
                this.queue.drainDisabled = e, this.queue.drain()
            }, T.prototype.expandToIndex = function (t) {
                return t < this.tracks.length ? this.tracks[t] : (E.Utils.ensureArrayCapacity(this.tracks, t - this.tracks.length + 1, null), this.tracks.length = t + 1, null)
            }, T.prototype.trackEntry = function (t, e, r, n) {
                var i = this.trackEntryPool.obtain();
                return i.trackIndex = t, i.animation = e, i.loop = r, i.eventThreshold = 0, i.attachmentThreshold = 0, i.drawOrderThreshold = 0, i.animationStart = 0, i.animationEnd = e.duration, i.animationLast = -1, i.nextAnimationLast = -1, i.delay = 0, i.trackTime = 0, i.trackLast = -1, i.nextTrackLast = -1, i.trackEnd = Number.MAX_VALUE, i.timeScale = 1, i.alpha = 1, i.interruptAlpha = 1, i.mixTime = 0, i.mixDuration = null == n ? 0 : this.data.getMix(n.animation, e), i
            }, T.prototype.disposeNext = function (t) {
                for (var e = t.next; null != e;) this.queue.dispose(e), e = e.next;
                t.next = null
            }, T.prototype._animationsChanged = function () {
                this.animationsChanged = !1;
                var t = this.propertyIDs;
                t.clear();
                for (var e = this.mixingTo, r = 0, n = this.tracks.length; r < n; r++) {
                    var i = this.tracks[r];
                    null != i && i.setTimelineData(null, e, t)
                }
            }, T.prototype.getCurrent = function (t) {
                return t >= this.tracks.length ? null : this.tracks[t]
            }, T.prototype.addListener = function (t) {
                if (null == t) throw new Error("listener cannot be null.");
                this.listeners.push(t)
            }, T.prototype.removeListener = function (t) {
                var e = this.listeners.indexOf(t);
                0 <= e && this.listeners.splice(e, 1)
            }, T.prototype.clearListeners = function () {
                this.listeners.length = 0
            }, T.prototype.clearListenerNotifications = function () {
                this.queue.clear()
            }, T.prototype.setAnimationByName = function (t, e, r) {
                T.deprecatedWarning1 || (T.deprecatedWarning1 = !0, console.warn("Deprecation Warning: AnimationState.setAnimationByName is deprecated, please use setAnimation from now on.")), this.setAnimation(t, e, r)
            }, T.prototype.addAnimationByName = function (t, e, r, n) {
                T.deprecatedWarning2 || (T.deprecatedWarning2 = !0, console.warn("Deprecation Warning: AnimationState.addAnimationByName is deprecated, please use addAnimation from now on.")), this.addAnimation(t, e, r, n)
            }, T.prototype.hasAnimation = function (t) {
                return null !== this.data.skeletonData.findAnimation(t)
            }, T.prototype.hasAnimationByName = function (t) {
                return T.deprecatedWarning3 || (T.deprecatedWarning3 = !0, console.warn("Deprecation Warning: AnimationState.hasAnimationByName is deprecated, please use hasAnimation from now on.")), this.hasAnimation(t)
            }, T.emptyAnimation = new E.Animation("<empty>", [], 0), T.SUBSEQUENT = 0, T.FIRST = 1, T.DIP = 2, T.DIP_MIX = 3, T.deprecatedWarning1 = !1, T.deprecatedWarning2 = !1, T.deprecatedWarning3 = !1, T
        }();
        E.AnimationState = f;
        var e = function () {
            function e() {
                this.timelineData = new Array, this.timelineDipMix = new Array, this.timelinesRotation = new Array
            }

            return e.prototype.reset = function () {
                this.next = null, this.mixingFrom = null, this.animation = null, this.listener = null, this.timelineData.length = 0, this.timelineDipMix.length = 0, this.timelinesRotation.length = 0
            }, e.prototype.setTimelineData = function (t, e, r) {
                null != t && e.push(t);
                var n = null != this.mixingFrom ? this.mixingFrom.setTimelineData(this, e, r) : this;
                null != t && e.pop();
                var i = e, o = e.length - 1, s = this.animation.timelines, a = this.animation.timelines.length,
                    u = E.Utils.setArraySize(this.timelineData, a);
                this.timelineDipMix.length = 0;
                var l = E.Utils.setArraySize(this.timelineDipMix, a);
                t:for (var h = 0; h < a; h++) {
                    var c = s[h].getPropertyId();
                    if (r.add(c)) if (null != t && t.hasTimeline(c)) {
                        for (var p = o; 0 <= p; p--) {
                            var d = i[p];
                            if (!d.hasTimeline(c) && 0 < d.mixDuration) {
                                u[h] = f.DIP_MIX, l[h] = d;
                                continue t
                            }
                        }
                        u[h] = f.DIP
                    } else u[h] = f.FIRST; else u[h] = f.SUBSEQUENT
                }
                return n
            }, e.prototype.hasTimeline = function (t) {
                for (var e = this.animation.timelines, r = 0, n = e.length; r < n; r++) if (e[r].getPropertyId() == t) return !0;
                return !1
            }, e.prototype.getAnimationTime = function () {
                if (this.loop) {
                    var t = this.animationEnd - this.animationStart;
                    return 0 == t ? this.animationStart : this.trackTime % t + this.animationStart
                }
                return Math.min(this.trackTime + this.animationStart, this.animationEnd)
            }, e.prototype.setAnimationLast = function (t) {
                this.animationLast = t, this.nextAnimationLast = t
            }, e.prototype.isComplete = function () {
                return this.trackTime >= this.animationEnd - this.animationStart
            }, e.prototype.resetRotationDirections = function () {
                this.timelinesRotation.length = 0
            }, Object.defineProperty(e.prototype, "time", {
                get: function () {
                    return e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.")), this.trackTime
                }, set: function (t) {
                    e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.")), this.trackTime = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "endTime", {
                get: function () {
                    return e.deprecatedWarning2 || (e.deprecatedWarning2 = !0, console.warn("Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.")), this.trackTime
                }, set: function (t) {
                    e.deprecatedWarning2 || (e.deprecatedWarning2 = !0, console.warn("Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.")), this.trackTime = t
                }, enumerable: !0, configurable: !0
            }), e.prototype.loopsCount = function () {
                return Math.floor(this.trackTime / this.trackEnd)
            }, e.deprecatedWarning1 = !1, e.deprecatedWarning2 = !1, e
        }();
        E.TrackEntry = e;
        var u, t, r = function () {
            function t(t) {
                this.objects = [], this.drainDisabled = !1, this.animState = t
            }

            return t.prototype.start = function (t) {
                this.objects.push(u.start), this.objects.push(t), this.animState.animationsChanged = !0
            }, t.prototype.interrupt = function (t) {
                this.objects.push(u.interrupt), this.objects.push(t)
            }, t.prototype.end = function (t) {
                this.objects.push(u.end), this.objects.push(t), this.animState.animationsChanged = !0
            }, t.prototype.dispose = function (t) {
                this.objects.push(u.dispose), this.objects.push(t)
            }, t.prototype.complete = function (t) {
                this.objects.push(u.complete), this.objects.push(t)
            }, t.prototype.event = function (t, e) {
                this.objects.push(u.event), this.objects.push(t), this.objects.push(e)
            }, t.prototype.deprecateStuff = function () {
                return t.deprecatedWarning1 || (t.deprecatedWarning1 = !0, console.warn("Deprecation Warning: onComplete, onStart, onEnd, onEvent art deprecated, please use listeners from now on. 'state.addListener({ complete: function(track, event) { } })'")), !0
            }, t.prototype.drain = function () {
                if (!this.drainDisabled) {
                    this.drainDisabled = !0;
                    for (var t = this.objects, e = this.animState.listeners, r = 0; r < t.length; r += 2) {
                        var n = t[r], i = t[r + 1];
                        switch (n) {
                            case u.start:
                                null != i.listener && i.listener.start && i.listener.start(i);
                                for (var o = 0; o < e.length; o++) e[o].start && e[o].start(i);
                                i.onStart && this.deprecateStuff() && i.onStart(i.trackIndex), this.animState.onStart && this.deprecateStuff() && this.deprecateStuff && this.animState.onStart(i.trackIndex);
                                break;
                            case u.interrupt:
                                null != i.listener && i.listener.interrupt && i.listener.interrupt(i);
                                for (o = 0; o < e.length; o++) e[o].interrupt && e[o].interrupt(i);
                                break;
                            case u.end:
                                null != i.listener && i.listener.end && i.listener.end(i);
                                for (o = 0; o < e.length; o++) e[o].end && e[o].end(i);
                                i.onEnd && this.deprecateStuff() && i.onEnd(i.trackIndex), this.animState.onEnd && this.deprecateStuff() && this.animState.onEnd(i.trackIndex);
                            case u.dispose:
                                null != i.listener && i.listener.dispose && i.listener.dispose(i);
                                for (o = 0; o < e.length; o++) e[o].dispose && e[o].dispose(i);
                                this.animState.trackEntryPool.free(i);
                                break;
                            case u.complete:
                                null != i.listener && i.listener.complete && i.listener.complete(i);
                                for (o = 0; o < e.length; o++) e[o].complete && e[o].complete(i);
                                var s = E.MathUtils.toInt(i.loopsCount());
                                i.onComplete && this.deprecateStuff() && i.onComplete(i.trackIndex, s), this.animState.onComplete && this.deprecateStuff() && this.animState.onComplete(i.trackIndex, s);
                                break;
                            case u.event:
                                var a = t[2 + r++];
                                null != i.listener && i.listener.event && i.listener.event(i, a);
                                for (o = 0; o < e.length; o++) e[o].event && e[o].event(i, a);
                                i.onEvent && this.deprecateStuff() && i.onEvent(i.trackIndex, a), this.animState.onEvent && this.deprecateStuff() && this.animState.onEvent(i.trackIndex, a)
                        }
                    }
                    this.clear(), this.drainDisabled = !1
                }
            }, t.prototype.clear = function () {
                this.objects.length = 0
            }, t.deprecatedWarning1 = !1, t
        }();
        E.EventQueue = r, (t = u = E.EventType || (E.EventType = {}))[t.start = 0] = "start", t[t.interrupt = 1] = "interrupt", t[t.end = 2] = "end", t[t.dispose = 3] = "dispose", t[t.complete = 4] = "complete", t[t.event = 5] = "event";
        var n = function () {
            function t() {
            }

            return t.prototype.start = function (t) {
            }, t.prototype.interrupt = function (t) {
            }, t.prototype.end = function (t) {
            }, t.prototype.dispose = function (t) {
            }, t.prototype.complete = function (t) {
            }, t.prototype.event = function (t, e) {
            }, t
        }();
        E.AnimationStateAdapter2 = n
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), r = function () {
        function n(t) {
            if (this.animationToMixTime = {}, this.defaultMix = 0, null == t) throw new Error("skeletonData cannot be null.");
            this.skeletonData = t
        }

        return n.prototype.setMix = function (t, e, r) {
            var n = this.skeletonData.findAnimation(t);
            if (null == n) throw new Error("Animation not found: " + t);
            var i = this.skeletonData.findAnimation(e);
            if (null == i) throw new Error("Animation not found: " + e);
            this.setMixWith(n, i, r)
        }, n.prototype.setMixByName = function (t, e, r) {
            n.deprecatedWarning1 || (n.deprecatedWarning1 = !0, console.warn("Deprecation Warning: AnimationStateData.setMixByName is deprecated, please use setMix from now on.")), this.setMix(t, e, r)
        }, n.prototype.setMixWith = function (t, e, r) {
            if (null == t) throw new Error("from cannot be null.");
            if (null == e) throw new Error("to cannot be null.");
            var n = t.name + "." + e.name;
            this.animationToMixTime[n] = r
        }, n.prototype.getMix = function (t, e) {
            var r = t.name + "." + e.name, n = this.animationToMixTime[r];
            return void 0 === n ? this.defaultMix : n
        }, n.deprecatedWarning1 = !1, n
    }(), e.AnimationStateData = r
}(pixi_spine || (pixi_spine = {})), function (t) {
    var o, e;
    o = t.core || (t.core = {}), e = function () {
        function t(t) {
            this.atlas = t
        }

        return t.prototype.newRegionAttachment = function (t, e, r) {
            var n = this.atlas.findRegion(r);
            if (null == n) throw new Error("Region not found in atlas: " + r + " (region attachment: " + e + ")");
            var i = new o.RegionAttachment(e);
            return i.region = n, i
        }, t.prototype.newMeshAttachment = function (t, e, r) {
            var n = this.atlas.findRegion(r);
            if (null == n) throw new Error("Region not found in atlas: " + r + " (mesh attachment: " + e + ")");
            var i = new o.MeshAttachment(e);
            return i.region = n, i
        }, t.prototype.newBoundingBoxAttachment = function (t, e) {
            return new o.BoundingBoxAttachment(e)
        }, t.prototype.newPathAttachment = function (t, e) {
            return new o.PathAttachment(e)
        }, t.prototype.newPointAttachment = function (t, e) {
            return new o.PointAttachment(e)
        }, t.prototype.newClippingAttachment = function (t, e) {
            return new o.ClippingAttachment(e)
        }, t
    }(), o.AtlasAttachmentLoader = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), (r = e.BlendMode || (e.BlendMode = {}))[r.Normal = 0] = "Normal", r[r.Additive = 1] = "Additive", r[r.Multiply = 2] = "Multiply", r[r.Screen = 3] = "Screen"
}(pixi_spine || (pixi_spine = {})), function (t) {
    var O, e;
    O = t.core || (t.core = {}), e = function () {
        function I(t, e, r) {
            if (this.matrix = new PIXI.Matrix, this.children = new Array, this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay = 0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.appliedValid = !1, this.sorted = !1, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.skeleton = e, this.parent = r, this.setToSetupPose()
        }

        return Object.defineProperty(I.prototype, "worldX", {
            get: function () {
                return this.matrix.tx
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(I.prototype, "worldY", {
            get: function () {
                return this.matrix.ty
            }, enumerable: !0, configurable: !0
        }), I.prototype.update = function () {
            this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
        }, I.prototype.updateWorldTransform = function () {
            this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
        }, I.prototype.updateWorldTransformWith = function (t, e, r, n, i, o, s) {
            this.ax = t, this.ay = e, this.arotation = r, this.ascaleX = n, this.ascaleY = i, this.ashearX = o, this.ashearY = s, this.appliedValid = !0;
            var a = this.parent, u = this.matrix;
            if (null == a) {
                var l = r + 90 + s, h = O.MathUtils.cosDeg(r + o) * n, c = O.MathUtils.cosDeg(l) * i,
                    p = O.MathUtils.sinDeg(r + o) * n, d = O.MathUtils.sinDeg(l) * i, f = this.skeleton;
                return f.flipX && (t = -t, h = -h, c = -c), f.flipY !== I.yDown && (e = -e, p = -p, d = -d), u.a = h, u.c = c, u.b = p, u.d = d, u.tx = t + f.x, void (u.ty = e + f.y)
            }
            var m = a.matrix.a, g = a.matrix.c, v = a.matrix.b, y = a.matrix.d;
            switch (u.tx = m * t + g * e + a.matrix.tx, u.ty = v * t + y * e + a.matrix.ty, this.data.transformMode) {
                case O.TransformMode.Normal:
                    l = r + 90 + s, h = O.MathUtils.cosDeg(r + o) * n, c = O.MathUtils.cosDeg(l) * i, p = O.MathUtils.sinDeg(r + o) * n, d = O.MathUtils.sinDeg(l) * i;
                    return u.a = m * h + g * p, u.c = m * c + g * d, u.b = v * h + y * p, void (u.d = v * c + y * d);
                case O.TransformMode.OnlyTranslation:
                    l = r + 90 + s;
                    u.a = O.MathUtils.cosDeg(r + o) * n, u.c = O.MathUtils.cosDeg(l) * i, u.b = O.MathUtils.sinDeg(r + o) * n, u.d = O.MathUtils.sinDeg(l) * i;
                    break;
                case O.TransformMode.NoRotationOrReflection:
                    var _ = 0,
                        x = r + o - (_ = 1e-4 < (w = m * m + v * v) ? (g = v * (w = Math.abs(m * y - g * v) / w), y = m * w, Math.atan2(v, m) * O.MathUtils.radDeg) : (v = m = 0, 90 - Math.atan2(y, g) * O.MathUtils.radDeg)),
                        b = r + s - _ + 90;
                    h = O.MathUtils.cosDeg(x) * n, c = O.MathUtils.cosDeg(b) * i, p = O.MathUtils.sinDeg(x) * n, d = O.MathUtils.sinDeg(b) * i;
                    u.a = m * h - g * p, u.c = m * c - g * d, u.b = v * h + y * p, u.d = v * c + y * d;
                    break;
                case O.TransformMode.NoScale:
                case O.TransformMode.NoScaleOrReflection:
                    var w, T = O.MathUtils.cosDeg(r), E = O.MathUtils.sinDeg(r), S = m * T + g * E, P = v * T + y * E;
                    1e-5 < (w = Math.sqrt(S * S + P * P)) && (w = 1 / w), S *= w, P *= w, w = Math.sqrt(S * S + P * P);
                    var M = Math.PI / 2 + Math.atan2(P, S), A = Math.cos(M) * w, C = Math.sin(M) * w;
                    h = O.MathUtils.cosDeg(o) * n, c = O.MathUtils.cosDeg(90 + s) * i, p = O.MathUtils.sinDeg(o) * n, d = O.MathUtils.sinDeg(90 + s) * i;
                    return u.a = S * h + A * p, u.c = S * c + A * d, u.b = P * h + C * p, u.d = P * c + C * d, void ((this.data.transformMode != O.TransformMode.NoScaleOrReflection ? m * y - g * v < 0 : this.skeleton.flipX != this.skeleton.flipY != I.yDown) && (u.c = -u.c, u.d = -u.d))
            }
            this.skeleton.flipX && (u.a = -u.a, u.c = -u.c), this.skeleton.flipY != I.yDown && (u.b = -u.b, u.d = -u.d)
        }, I.prototype.setToSetupPose = function () {
            var t = this.data;
            this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.shearX = t.shearX, this.shearY = t.shearY
        }, I.prototype.getWorldRotationX = function () {
            return Math.atan2(this.matrix.b, this.matrix.a) * O.MathUtils.radDeg
        }, I.prototype.getWorldRotationY = function () {
            return Math.atan2(this.matrix.d, this.matrix.c) * O.MathUtils.radDeg
        }, I.prototype.getWorldScaleX = function () {
            var t = this.matrix;
            return Math.sqrt(t.a * t.a + t.c * t.c)
        }, I.prototype.getWorldScaleY = function () {
            var t = this.matrix;
            return Math.sqrt(t.b * t.b + t.d * t.d)
        }, I.prototype.updateAppliedTransform = function () {
            this.appliedValid = !0;
            var t = this.parent, e = this.matrix;
            if (null == t) return this.ax = e.tx, this.ay = e.ty, this.arotation = Math.atan2(e.b, e.a) * O.MathUtils.radDeg, this.ascaleX = Math.sqrt(e.a * e.a + e.b * e.b), this.ascaleY = Math.sqrt(e.c * e.c + e.d * e.d), this.ashearX = 0, void (this.ashearY = Math.atan2(e.a * e.c + e.b * e.d, e.a * e.d - e.b * e.c) * O.MathUtils.radDeg);
            var r = t.matrix, n = 1 / (r.a * r.d - r.b * r.c), i = e.tx - r.tx, o = e.ty - r.ty;
            this.ax = i * r.d * n - o * r.c * n, this.ay = o * r.a * n - i * r.b * n;
            var s = n * r.d, a = n * r.a, u = n * r.c, l = n * r.b, h = s * e.a - u * e.b, c = s * e.c - u * e.d,
                p = a * e.b - l * e.a, d = a * e.d - l * e.c;
            if (this.ashearX = 0, this.ascaleX = Math.sqrt(h * h + p * p), 1e-4 < this.ascaleX) {
                var f = h * d - c * p;
                this.ascaleY = f / this.ascaleX, this.ashearY = Math.atan2(h * c + p * d, f) * O.MathUtils.radDeg, this.arotation = Math.atan2(p, h) * O.MathUtils.radDeg
            } else this.ascaleX = 0, this.ascaleY = Math.sqrt(c * c + d * d), this.ashearY = 0, this.arotation = 90 - Math.atan2(d, c) * O.MathUtils.radDeg
        }, I.prototype.worldToLocal = function (t) {
            var e = this.matrix, r = e.a, n = e.c, i = e.b, o = e.d, s = 1 / (r * o - n * i), a = t.x - e.tx,
                u = t.y - e.ty;
            return t.x = a * o * s - u * n * s, t.y = u * r * s - a * i * s, t
        }, I.prototype.localToWorld = function (t) {
            var e = this.matrix, r = t.x, n = t.y;
            return t.x = r * e.a + n * e.c + e.tx, t.y = r * e.b + n * e.d + e.ty, t
        }, I.prototype.worldToLocalRotation = function (t) {
            var e = O.MathUtils.sinDeg(t), r = O.MathUtils.cosDeg(t), n = this.matrix;
            return Math.atan2(n.a * e - n.b * r, n.d * r - n.c * e) * O.MathUtils.radDeg
        }, I.prototype.localToWorldRotation = function (t) {
            var e = O.MathUtils.sinDeg(t), r = O.MathUtils.cosDeg(t), n = this.matrix;
            return Math.atan2(r * n.b + e * n.d, r * n.a + e * n.c) * O.MathUtils.radDeg
        }, I.prototype.rotateWorld = function (t) {
            var e = this.matrix, r = e.a, n = e.c, i = e.b, o = e.d, s = O.MathUtils.cosDeg(t),
                a = O.MathUtils.sinDeg(t);
            e.a = s * r - a * i, e.c = s * n - a * o, e.b = a * r + s * i, e.d = a * n + s * o, this.appliedValid = !1
        }, I.yDown = !1, I
    }(), O.Bone = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, n, r, i;
    e = t.core || (t.core = {}), i = function (t, e, r) {
        if (this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = n.Normal, t < 0) throw new Error("index must be >= 0.");
        if (null == e) throw new Error("name cannot be null.");
        this.index = t, this.name = e, this.parent = r
    }, e.BoneData = i, (r = n = e.TransformMode || (e.TransformMode = {}))[r.Normal = 0] = "Normal", r[r.OnlyTranslation = 1] = "OnlyTranslation", r[r.NoRotationOrReflection = 2] = "NoRotationOrReflection", r[r.NoScale = 3] = "NoScale", r[r.NoScaleOrReflection = 4] = "NoScaleOrReflection"
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e;
    e = function (t, e) {
        if (null == e) throw new Error("data cannot be null.");
        this.time = t, this.data = e
    }, (t.core || (t.core = {})).Event = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e;
    e = function (t) {
        this.name = t
    }, (t.core || (t.core = {})).EventData = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var nt, e;
    nt = t.core || (t.core = {}), e = function () {
        function t(t, e) {
            if (this.mix = 1, this.bendDirection = 0, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.mix = t.mix, this.bendDirection = t.bendDirection, this.bones = new Array;
            for (var r = 0; r < t.bones.length; r++) this.bones.push(e.findBone(t.bones[r].name));
            this.target = e.findBone(t.target.name)
        }

        return t.prototype.getOrder = function () {
            return this.data.order
        }, t.prototype.apply = function () {
            this.update()
        }, t.prototype.update = function () {
            var t = this.target, e = this.bones;
            switch (e.length) {
                case 1:
                    this.apply1(e[0], t.worldX, t.worldY, this.mix);
                    break;
                case 2:
                    this.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.mix)
            }
        }, t.prototype.apply1 = function (t, e, r, n) {
            t.appliedValid || t.updateAppliedTransform();
            var i = t.parent.matrix, o = 1 / (i.a * i.d - i.b * i.c), s = e - i.tx, a = r - i.ty,
                u = (s * i.d - a * i.c) * o - t.ax, l = (a * i.a - s * i.b) * o - t.ay,
                h = Math.atan2(l, u) * nt.MathUtils.radDeg - t.ashearX - t.arotation;
            t.ascaleX < 0 && (h += 180), 180 < h ? h -= 360 : h < -180 && (h += 360), t.updateWorldTransformWith(t.ax, t.ay, t.arotation + h * n, t.ascaleX, t.ascaleY, t.ashearX, t.ashearY)
        }, t.prototype.apply2 = function (t, e, r, n, i, o) {
            if (0 != o) {
                t.appliedValid || t.updateAppliedTransform(), e.appliedValid || e.updateAppliedTransform();
                var s = t.ax, a = t.ay, u = t.ascaleX, l = t.ascaleY, h = e.ascaleX, c = t.matrix, p = 0, d = 0, f = 0;
                f = u < 0 ? (u = -u, p = 180, -1) : (p = 0, 1), l < 0 && (l = -l, f = -f), d = h < 0 ? (h = -h, 180) : 0;
                var m = e.ax, g = 0, v = 0, y = 0, _ = c.a, x = c.c, b = c.b, w = c.d, T = Math.abs(u - l) <= 1e-4;
                y = T ? (v = _ * m + x * (g = e.ay) + c.tx, b * m + w * g + c.ty) : (g = 0, v = _ * m + c.tx, b * m + c.ty);
                var E = t.parent.matrix;
                _ = E.a, x = E.c, b = E.b;
                var S = 1 / (_ * (w = E.d) - x * b), P = r - E.tx, M = n - E.ty, A = (P * w - M * x) * S - s,
                    C = (M * _ - P * b) * S - a, I = ((P = v - E.tx) * w - (M = y - E.ty) * x) * S - s,
                    O = (M * _ - P * b) * S - a, R = Math.sqrt(I * I + O * O), D = e.data.length * h, k = 0, L = 0;
                t:if (T) {
                    var N = (A * A + C * C - R * R - (D *= u) * D) / (2 * R * D);
                    N < -1 ? N = -1 : 1 < N && (N = 1), L = Math.acos(N) * i, _ = R + D * N, x = D * Math.sin(L), k = Math.atan2(C * _ - A * x, A * _ + C * x)
                } else {
                    var F = (_ = u * D) * _, B = (x = l * D) * x, j = A * A + C * C, U = Math.atan2(C, A),
                        X = -2 * B * R, V = B - F;
                    if (0 <= (w = X * X - 4 * V * (b = B * R * R + F * j - F * B))) {
                        var W = Math.sqrt(w);
                        X < 0 && (W = -W);
                        var G = (W = -(X + W) / 2) / V, Y = b / W, H = Math.abs(G) < Math.abs(Y) ? G : Y;
                        if (H * H <= j) {
                            M = Math.sqrt(j - H * H) * i, k = U - Math.atan2(M, H), L = Math.atan2(M / l, (H - R) / u);
                            break t
                        }
                    }
                    var z = nt.MathUtils.PI, q = R - _, K = q * q, Z = 0, Q = 0, J = R + _, $ = J * J, tt = 0;
                    -1 <= (b = -_ * R / (F - B)) && b <= 1 && (b = Math.acos(b), (w = (P = _ * Math.cos(b) + R) * P + (M = x * Math.sin(b)) * M) < K && (z = b, K = w, q = P, Z = M), $ < w && (Q = b, $ = w, J = P, tt = M)), L = j <= (K + $) / 2 ? (k = U - Math.atan2(Z * i, q), z * i) : (k = U - Math.atan2(tt * i, J), Q * i)
                }
                var et = Math.atan2(g, m) * f, rt = t.arotation;
                180 < (k = (k - et) * nt.MathUtils.radDeg + p - rt) ? k -= 360 : k < -180 && (k += 360), t.updateWorldTransformWith(s, a, rt + k * o, t.ascaleX, t.ascaleY, 0, 0), rt = e.arotation, 180 < (L = ((L + et) * nt.MathUtils.radDeg - e.ashearX) * f + d - rt) ? L -= 360 : L < -180 && (L += 360), e.updateWorldTransformWith(m, g, rt + L * o, e.ascaleX, e.ascaleY, e.ashearX, e.ashearY)
            } else e.updateWorldTransform()
        }, t
    }(), nt.IkConstraint = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e;
    e = function (t) {
        this.order = 0, this.bones = new Array, this.bendDirection = 1, this.mix = 1, this.name = t
    }, (t.core || (t.core = {})).IkConstraintData = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var K, e;
    K = t.core || (t.core = {}), e = function () {
        function q(t, e) {
            if (this.position = 0, this.spacing = 0, this.rotateMix = 0, this.translateMix = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array, this.curves = new Array, this.lengths = new Array, this.segments = new Array, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.bones = new Array;
            for (var r = 0, n = t.bones.length; r < n; r++) this.bones.push(e.findBone(t.bones[r].name));
            this.target = e.findSlot(t.target.name), this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix
        }

        return q.prototype.apply = function () {
            this.update()
        }, q.prototype.update = function () {
            var t = this.target.getAttachment();
            if (t instanceof K.PathAttachment) {
                var e = this.rotateMix, r = this.translateMix, n = 0 < e;
                if (0 < r || n) {
                    var i = this.data, o = i.spacingMode, s = o == K.SpacingMode.Length, a = i.rotateMode,
                        u = a == K.RotateMode.Tangent, l = a == K.RotateMode.ChainScale, h = this.bones.length,
                        c = u ? h : h + 1, p = this.bones, d = K.Utils.setArraySize(this.spaces, c), f = null,
                        m = this.spacing;
                    if (l || s) {
                        l && (f = K.Utils.setArraySize(this.lengths, h));
                        for (var g = 0, v = c - 1; g < v;) {
                            var y = (A = p[g]).data.length;
                            if (y < q.epsilon) l && (f[g] = 0), d[++g] = 0; else {
                                var _ = y * A.matrix.a, x = y * A.matrix.b, b = Math.sqrt(_ * _ + x * x);
                                l && (f[g] = b), d[++g] = (s ? y + m : m) * b / y
                            }
                        }
                    } else for (g = 1; g < c; g++) d[g] = m;
                    var w = this.computeWorldPositions(t, c, u, i.positionMode == K.PositionMode.Percent, o == K.SpacingMode.Percent),
                        T = w[0], E = w[1], S = i.offsetRotation, P = !1;
                    if (0 == S) P = a == K.RotateMode.Chain; else P = !1, S *= 0 < (M = this.target.bone.matrix).a * M.d - M.b * M.c ? K.MathUtils.degRad : -K.MathUtils.degRad;
                    g = 0;
                    for (var M = 3; g < h; g++, M += 3) {
                        var A, C = (A = p[g]).matrix;
                        C.tx += (T - C.tx) * r, C.ty += (E - C.ty) * r;
                        var I = (_ = w[M]) - T, O = (x = w[M + 1]) - E;
                        if (l) {
                            var R = f[g];
                            if (0 != R) {
                                var D = (Math.sqrt(I * I + O * O) / R - 1) * e + 1;
                                C.a *= D, C.b *= D
                            }
                        }
                        if (T = _, E = x, n) {
                            var k = C.a, L = C.c, N = C.b, F = C.d, B = 0, j = 0, U = 0;
                            if (B = u ? w[M - 1] : 0 == d[g + 1] ? w[M + 2] : Math.atan2(O, I), B -= Math.atan2(N, k), P) {
                                j = Math.cos(B), U = Math.sin(B);
                                var X = A.data.length;
                                T += (X * (j * k - U * N) - I) * e, E += (X * (U * k + j * N) - O) * e
                            } else B += S;
                            B > K.MathUtils.PI ? B -= K.MathUtils.PI2 : B < -K.MathUtils.PI && (B += K.MathUtils.PI2), B *= e, j = Math.cos(B), U = Math.sin(B), C.a = j * k - U * N, C.c = j * L - U * F, C.b = U * k + j * N, C.d = U * L + j * F
                        }
                        A.appliedValid = !1
                    }
                }
            }
        }, q.prototype.computeWorldPositions = function (t, e, r, n, i) {
            var o = this.target, s = this.position, a = this.spaces,
                u = K.Utils.setArraySize(this.positions, 3 * e + 2), l = null, h = t.closed, c = t.worldVerticesLength,
                p = c / 6, d = q.NONE;
            if (!t.constantSpeed) {
                var f = t.lengths, m = f[p -= h ? 1 : 2];
                if (n && (s *= m), i) for (var g = 0; g < e; g++) a[g] *= m;
                l = K.Utils.setArraySize(this.world, 8);
                g = 0;
                for (var v = 0, y = 0; g < e; g++, v += 3) {
                    var _ = s += W = a[g];
                    if (h) (_ %= m) < 0 && (_ += m), y = 0; else {
                        if (_ < 0) {
                            d != q.BEFORE && (d = q.BEFORE, t.computeWorldVertices(o, 2, 4, l, 0, 2)), this.addBeforePosition(_, l, 0, u, v);
                            continue
                        }
                        if (m < _) {
                            d != q.AFTER && (d = q.AFTER, t.computeWorldVertices(o, c - 6, 4, l, 0, 2)), this.addAfterPosition(_ - m, l, 0, u, v);
                            continue
                        }
                    }
                    for (; ; y++) {
                        var x = f[y];
                        if (!(x < _)) {
                            if (0 == y) _ /= x; else _ = (_ - (z = f[y - 1])) / (x - z);
                            break
                        }
                    }
                    y != d && (d = y, h && y == p ? (t.computeWorldVertices(o, c - 4, 4, l, 0, 2), t.computeWorldVertices(o, 0, 4, l, 4, 2)) : t.computeWorldVertices(o, 6 * y + 2, 8, l, 0, 2)), this.addCurvePosition(_, l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], u, v, r || 0 < g && 0 == W)
                }
                return u
            }
            h ? (c += 2, l = K.Utils.setArraySize(this.world, c), t.computeWorldVertices(o, 2, c - 4, l, 0, 2), t.computeWorldVertices(o, 0, 2, l, c - 4, 2), l[c - 2] = l[0], l[c - 1] = l[1]) : (p--, c -= 4, l = K.Utils.setArraySize(this.world, c), t.computeWorldVertices(o, 2, c, l, 0, 2));
            for (var b = K.Utils.setArraySize(this.curves, p), w = 0, T = l[0], E = l[1], S = 0, P = 0, M = 0, A = 0, C = 0, I = 0, O = 0, R = 0, D = 0, k = 0, L = 0, N = 0, F = 0, B = 0, j = (g = 0, 2); g < p; g++, j += 6) S = l[j], P = l[j + 1], M = l[j + 2], A = l[j + 3], L = 2 * (O = .1875 * (T - 2 * S + M)) + (D = .09375 * (3 * (S - M) - T + (C = l[j + 4]))), N = 2 * (R = .1875 * (E - 2 * P + A)) + (k = .09375 * (3 * (P - A) - E + (I = l[j + 5]))), F = .75 * (S - T) + O + .16666667 * D, B = .75 * (P - E) + R + .16666667 * k, w += Math.sqrt(F * F + B * B), F += L, B += N, L += D, N += k, w += Math.sqrt(F * F + B * B), F += L, B += N, w += Math.sqrt(F * F + B * B), F += L + D, B += N + k, w += Math.sqrt(F * F + B * B), b[g] = w, T = C, E = I;
            if (n && (s *= w), i) for (g = 0; g < e; g++) a[g] *= w;
            for (var U = this.segments, X = 0, V = (g = 0, v = 0, y = 0, 0); g < e; g++, v += 3) {
                var W;
                _ = s += W = a[g];
                if (h) (_ %= w) < 0 && (_ += w), y = 0; else {
                    if (_ < 0) {
                        this.addBeforePosition(_, l, 0, u, v);
                        continue
                    }
                    if (w < _) {
                        this.addAfterPosition(_ - w, l, c - 4, u, v);
                        continue
                    }
                }
                for (; ; y++) {
                    var G = b[y];
                    if (!(G < _)) {
                        if (0 == y) _ /= G; else _ = (_ - (z = b[y - 1])) / (G - z);
                        break
                    }
                }
                if (y != d) {
                    var Y = 6 * (d = y);
                    for (T = l[Y], E = l[Y + 1], S = l[Y + 2], P = l[Y + 3], M = l[Y + 4], A = l[Y + 5], L = 2 * (O = .03 * (T - 2 * S + M)) + (D = .006 * (3 * (S - M) - T + (C = l[Y + 6]))), N = 2 * (R = .03 * (E - 2 * P + A)) + (k = .006 * (3 * (P - A) - E + (I = l[Y + 7]))), F = .3 * (S - T) + O + .16666667 * D, B = .3 * (P - E) + R + .16666667 * k, X = Math.sqrt(F * F + B * B), U[0] = X, Y = 1; Y < 8; Y++) F += L, B += N, L += D, N += k, X += Math.sqrt(F * F + B * B), U[Y] = X;
                    F += L, B += N, X += Math.sqrt(F * F + B * B), U[8] = X, F += L + D, B += N + k, X += Math.sqrt(F * F + B * B), U[9] = X, V = 0
                }
                for (_ *= X; ; V++) {
                    var H = U[V];
                    if (!(H < _)) {
                        var z;
                        if (0 == V) _ /= H; else _ = V + (_ - (z = U[V - 1])) / (H - z);
                        break
                    }
                }
                this.addCurvePosition(.1 * _, T, E, S, P, M, A, C, I, u, v, r || 0 < g && 0 == W)
            }
            return u
        }, q.prototype.addBeforePosition = function (t, e, r, n, i) {
            var o = e[r], s = e[r + 1], a = e[r + 2] - o, u = e[r + 3] - s, l = Math.atan2(u, a);
            n[i] = o + t * Math.cos(l), n[i + 1] = s + t * Math.sin(l), n[i + 2] = l
        }, q.prototype.addAfterPosition = function (t, e, r, n, i) {
            var o = e[r + 2], s = e[r + 3], a = o - e[r], u = s - e[r + 1], l = Math.atan2(u, a);
            n[i] = o + t * Math.cos(l), n[i + 1] = s + t * Math.sin(l), n[i + 2] = l
        }, q.prototype.addCurvePosition = function (t, e, r, n, i, o, s, a, u, l, h, c) {
            (0 == t || isNaN(t)) && (t = 1e-4);
            var p = t * t, d = p * t, f = 1 - t, m = f * f, g = m * f, v = f * t, y = 3 * v, _ = f * y, x = y * t,
                b = e * g + n * _ + o * x + a * d, w = r * g + i * _ + s * x + u * d;
            l[h] = b, l[h + 1] = w, c && (l[h + 2] = Math.atan2(w - (r * m + i * v * 2 + s * p), b - (e * m + n * v * 2 + o * p)))
        }, q.prototype.getOrder = function () {
            return this.data.order
        }, q.NONE = -1, q.BEFORE = -2, q.AFTER = -3, q.epsilon = 1e-5, q
    }(), K.PathConstraint = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r, n, i, o;
    e = t.core || (t.core = {}), o = function (t) {
        this.order = 0, this.bones = new Array, this.name = t
    }, e.PathConstraintData = o, (r = e.PositionMode || (e.PositionMode = {}))[r.Fixed = 0] = "Fixed", r[r.Percent = 1] = "Percent", (n = e.SpacingMode || (e.SpacingMode = {}))[n.Length = 0] = "Length", n[n.Fixed = 1] = "Fixed", n[n.Percent = 2] = "Percent", (i = e.RotateMode || (e.RotateMode = {}))[i.Tangent = 0] = "Tangent", i[i.Chain = 1] = "Chain", i[i.ChainScale = 2] = "ChainScale"
}(pixi_spine || (pixi_spine = {})), function (t) {
    var _, e;
    _ = t.core || (t.core = {}), e = function () {
        function t(t) {
            if (this._updateCache = new Array, this.updateCacheReset = new Array, this.time = 0, this.flipX = !1, this.flipY = !1, this.x = 0, this.y = 0, null == t) throw new Error("data cannot be null.");
            this.data = t, this.bones = new Array;
            for (var e = 0; e < t.bones.length; e++) {
                var r = t.bones[e], n = void 0;
                if (null == r.parent) n = new _.Bone(r, this, null); else {
                    var i = this.bones[r.parent.index];
                    n = new _.Bone(r, this, i), i.children.push(n)
                }
                this.bones.push(n)
            }
            this.slots = new Array, this.drawOrder = new Array;
            for (e = 0; e < t.slots.length; e++) {
                var o = t.slots[e], s = (n = this.bones[o.boneData.index], new _.Slot(o, n));
                this.slots.push(s), this.drawOrder.push(s)
            }
            this.ikConstraints = new Array;
            for (e = 0; e < t.ikConstraints.length; e++) {
                var a = t.ikConstraints[e];
                this.ikConstraints.push(new _.IkConstraint(a, this))
            }
            this.transformConstraints = new Array;
            for (e = 0; e < t.transformConstraints.length; e++) {
                var u = t.transformConstraints[e];
                this.transformConstraints.push(new _.TransformConstraint(u, this))
            }
            this.pathConstraints = new Array;
            for (e = 0; e < t.pathConstraints.length; e++) {
                var l = t.pathConstraints[e];
                this.pathConstraints.push(new _.PathConstraint(l, this))
            }
            this.color = new _.Color(1, 1, 1, 1), this.updateCache()
        }

        return t.prototype.updateCache = function () {
            this._updateCache.length = 0, this.updateCacheReset.length = 0;
            for (var t = this.bones, e = 0, r = t.length; e < r; e++) t[e].sorted = !1;
            var n = this.ikConstraints, i = this.transformConstraints, o = this.pathConstraints, s = n.length,
                a = i.length, u = o.length, l = s + a + u;
            t:for (e = 0; e < l; e++) {
                for (var h = 0; h < s; h++) {
                    if ((c = n[h]).data.order == e) {
                        this.sortIkConstraint(c);
                        continue t
                    }
                }
                for (h = 0; h < a; h++) {
                    if ((c = i[h]).data.order == e) {
                        this.sortTransformConstraint(c);
                        continue t
                    }
                }
                for (h = 0; h < u; h++) {
                    var c;
                    if ((c = o[h]).data.order == e) {
                        this.sortPathConstraint(c);
                        continue t
                    }
                }
            }
            for (e = 0, r = t.length; e < r; e++) this.sortBone(t[e])
        }, t.prototype.sortIkConstraint = function (t) {
            var e = t.target;
            this.sortBone(e);
            var r = t.bones, n = r[0];
            if (this.sortBone(n), 1 < r.length) {
                var i = r[r.length - 1];
                -1 < this._updateCache.indexOf(i) || this.updateCacheReset.push(i)
            }
            this._updateCache.push(t), this.sortReset(n.children), r[r.length - 1].sorted = !0
        }, t.prototype.sortPathConstraint = function (t) {
            var e = t.target, r = e.data.index, n = e.bone;
            null != this.skin && this.sortPathConstraintAttachment(this.skin, r, n), null != this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, r, n);
            for (var i = 0, o = this.data.skins.length; i < o; i++) this.sortPathConstraintAttachment(this.data.skins[i], r, n);
            var s = e.getAttachment();
            s instanceof _.PathAttachment && this.sortPathConstraintAttachmentWith(s, n);
            var a = t.bones, u = a.length;
            for (i = 0; i < u; i++) this.sortBone(a[i]);
            this._updateCache.push(t);
            for (i = 0; i < u; i++) this.sortReset(a[i].children);
            for (i = 0; i < u; i++) a[i].sorted = !0
        }, t.prototype.sortTransformConstraint = function (t) {
            this.sortBone(t.target);
            var e = t.bones, r = e.length;
            if (t.data.local) for (var n = 0; n < r; n++) {
                var i = e[n];
                this.sortBone(i.parent), -1 < this._updateCache.indexOf(i) || this.updateCacheReset.push(i)
            } else for (n = 0; n < r; n++) this.sortBone(e[n]);
            this._updateCache.push(t);
            for (var o = 0; o < r; o++) this.sortReset(e[o].children);
            for (o = 0; o < r; o++) e[o].sorted = !0
        }, t.prototype.sortPathConstraintAttachment = function (t, e, r) {
            var n = t.attachments[e];
            if (n) for (var i in n) this.sortPathConstraintAttachmentWith(n[i], r)
        }, t.prototype.sortPathConstraintAttachmentWith = function (t, e) {
            if (t instanceof _.PathAttachment) {
                var r = t.bones;
                if (null == r) this.sortBone(e); else for (var n = this.bones, i = 0; i < r.length;) for (var o = r[i++], s = i + o; i < s; i++) {
                    var a = r[i];
                    this.sortBone(n[a])
                }
            }
        }, t.prototype.sortBone = function (t) {
            if (!t.sorted) {
                var e = t.parent;
                null != e && this.sortBone(e), t.sorted = !0, this._updateCache.push(t)
            }
        }, t.prototype.sortReset = function (t) {
            for (var e = 0, r = t.length; e < r; e++) {
                var n = t[e];
                n.sorted && this.sortReset(n.children), n.sorted = !1
            }
        }, t.prototype.updateWorldTransform = function () {
            for (var t = this.updateCacheReset, e = 0, r = t.length; e < r; e++) {
                var n = t[e];
                n.ax = n.x, n.ay = n.y, n.arotation = n.rotation, n.ascaleX = n.scaleX, n.ascaleY = n.scaleY, n.ashearX = n.shearX, n.ashearY = n.shearY, n.appliedValid = !0
            }
            var i = this._updateCache;
            for (e = 0, r = i.length; e < r; e++) i[e].update()
        }, t.prototype.setToSetupPose = function () {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose()
        }, t.prototype.setBonesToSetupPose = function () {
            for (var t = this.bones, e = 0, r = t.length; e < r; e++) t[e].setToSetupPose();
            var n = this.ikConstraints;
            for (e = 0, r = n.length; e < r; e++) {
                (a = n[e]).bendDirection = a.data.bendDirection, a.mix = a.data.mix
            }
            var i = this.transformConstraints;
            for (e = 0, r = i.length; e < r; e++) {
                var o = (a = i[e]).data;
                a.rotateMix = o.rotateMix, a.translateMix = o.translateMix, a.scaleMix = o.scaleMix, a.shearMix = o.shearMix
            }
            var s = this.pathConstraints;
            for (e = 0, r = s.length; e < r; e++) {
                var a;
                o = (a = s[e]).data;
                a.position = o.position, a.spacing = o.spacing, a.rotateMix = o.rotateMix, a.translateMix = o.translateMix
            }
        }, t.prototype.setSlotsToSetupPose = function () {
            var t = this.slots;
            _.Utils.arrayCopy(t, 0, this.drawOrder, 0, t.length);
            for (var e = 0, r = t.length; e < r; e++) t[e].setToSetupPose()
        }, t.prototype.getRootBone = function () {
            return 0 == this.bones.length ? null : this.bones[0]
        }, t.prototype.findBone = function (t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.data.name == t) return i
            }
            return null
        }, t.prototype.findBoneIndex = function (t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, r = 0, n = e.length; r < n; r++) if (e[r].data.name == t) return r;
            return -1
        }, t.prototype.findSlot = function (t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.data.name == t) return i
            }
            return null
        }, t.prototype.findSlotIndex = function (t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, r = 0, n = e.length; r < n; r++) if (e[r].data.name == t) return r;
            return -1
        }, t.prototype.setSkinByName = function (t) {
            var e = this.data.findSkin(t);
            if (null == e) throw new Error("Skin not found: " + t);
            this.setSkin(e)
        }, t.prototype.setSkin = function (t) {
            if (null != t) if (null != this.skin) t.attachAll(this, this.skin); else for (var e = this.slots, r = 0, n = e.length; r < n; r++) {
                var i = e[r], o = i.data.attachmentName;
                if (null != o) {
                    var s = t.getAttachment(r, o);
                    null != s && i.setAttachment(s)
                }
            }
            this.skin = t
        }, t.prototype.getAttachmentByName = function (t, e) {
            return this.getAttachment(this.data.findSlotIndex(t), e)
        }, t.prototype.getAttachment = function (t, e) {
            if (null == e) throw new Error("attachmentName cannot be null.");
            if (null != this.skin) {
                var r = this.skin.getAttachment(t, e);
                if (null != r) return r
            }
            return null != this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
        }, t.prototype.setAttachment = function (t, e) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var r = this.slots, n = 0, i = r.length; n < i; n++) {
                var o = r[n];
                if (o.data.name == t) {
                    var s = null;
                    if (null != e && null == (s = this.getAttachment(n, e))) throw new Error("Attachment not found: " + e + ", for slot: " + t);
                    return void o.setAttachment(s)
                }
            }
            throw new Error("Slot not found: " + t)
        }, t.prototype.findIkConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.ikConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.data.name == t) return i
            }
            return null
        }, t.prototype.findTransformConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.transformConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.data.name == t) return i
            }
            return null
        }, t.prototype.findPathConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.pathConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.data.name == t) return i
            }
            return null
        }, t.prototype.getBounds = function (t, e, r) {
            if (null == t) throw new Error("offset cannot be null.");
            if (null == e) throw new Error("size cannot be null.");
            for (var n = this.drawOrder, i = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY, u = 0, l = n.length; u < l; u++) {
                var h = n[u], c = 0, p = null, d = h.getAttachment();
                if (d instanceof _.RegionAttachment) c = 8, p = _.Utils.setArraySize(r, c, 0), d.computeWorldVertices(h.bone, p, 0, 2); else if (d instanceof _.MeshAttachment) {
                    var f = d;
                    c = f.worldVerticesLength, p = _.Utils.setArraySize(r, c, 0), f.computeWorldVertices(h, 0, c, p, 0, 2)
                }
                if (null != p) for (var m = 0, g = p.length; m < g; m += 2) {
                    var v = p[m], y = p[m + 1];
                    i = Math.min(i, v), o = Math.min(o, y), s = Math.max(s, v), a = Math.max(a, y)
                }
            }
            t.set(i, o), e.set(s - i, a - o)
        }, t.prototype.update = function (t) {
            this.time += t
        }, t
    }(), _.Skeleton = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var p, e;
    p = t.core || (t.core = {}), e = function () {
        function t() {
            this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons = new Array, this.polygonPool = new p.Pool(function () {
                return p.Utils.newFloatArray(16)
            })
        }

        return t.prototype.update = function (t, e) {
            if (null == t) throw new Error("skeleton cannot be null.");
            var r = this.boundingBoxes, n = this.polygons, i = this.polygonPool, o = t.slots, s = o.length;
            r.length = 0, i.freeAll(n);
            for (var a = n.length = 0; a < s; a++) {
                var u = o[a], l = u.getAttachment();
                if (l instanceof p.BoundingBoxAttachment) {
                    var h = l;
                    r.push(h);
                    var c = i.obtain();
                    c.length != h.worldVerticesLength && (c = p.Utils.newFloatArray(h.worldVerticesLength)), n.push(c), h.computeWorldVertices(u, 0, h.worldVerticesLength, c, 0, 2)
                }
            }
            e ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
        }, t.prototype.aabbCompute = function () {
            for (var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, n = Number.NEGATIVE_INFINITY, i = this.polygons, o = 0, s = i.length; o < s; o++) for (var a = i[o], u = a, l = 0, h = a.length; l < h; l += 2) {
                var c = u[l], p = u[l + 1];
                t = Math.min(t, c), e = Math.min(e, p), r = Math.max(r, c), n = Math.max(n, p)
            }
            this.minX = t, this.minY = e, this.maxX = r, this.maxY = n
        }, t.prototype.aabbContainsPoint = function (t, e) {
            return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
        }, t.prototype.aabbIntersectsSegment = function (t, e, r, n) {
            var i = this.minX, o = this.minY, s = this.maxX, a = this.maxY;
            if (t <= i && r <= i || e <= o && n <= o || s <= t && s <= r || a <= e && a <= n) return !1;
            var u = (n - e) / (r - t), l = u * (i - t) + e;
            if (o < l && l < a) return !0;
            if (o < (l = u * (s - t) + e) && l < a) return !0;
            var h = (o - e) / u + t;
            return i < h && h < s || i < (h = (a - e) / u + t) && h < s
        }, t.prototype.aabbIntersectsSkeleton = function (t) {
            return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
        }, t.prototype.containsPoint = function (t, e) {
            for (var r = this.polygons, n = 0, i = r.length; n < i; n++) if (this.containsPointPolygon(r[n], t, e)) return this.boundingBoxes[n];
            return null
        }, t.prototype.containsPointPolygon = function (t, e, r) {
            for (var n = t, i = t.length, o = i - 2, s = !1, a = 0; a < i; a += 2) {
                var u = n[a + 1], l = n[o + 1];
                if (u < r && r <= l || l < r && r <= u) {
                    var h = n[a];
                    h + (r - u) / (l - u) * (n[o] - h) < e && (s = !s)
                }
                o = a
            }
            return s
        }, t.prototype.intersectsSegment = function (t, e, r, n) {
            for (var i = this.polygons, o = 0, s = i.length; o < s; o++) if (this.intersectsSegmentPolygon(i[o], t, e, r, n)) return this.boundingBoxes[o];
            return null
        }, t.prototype.intersectsSegmentPolygon = function (t, e, r, n, i) {
            for (var o = t, s = t.length, a = e - n, u = r - i, l = e * i - r * n, h = o[s - 2], c = o[s - 1], p = 0; p < s; p += 2) {
                var d = o[p], f = o[p + 1], m = h * f - c * d, g = h - d, v = c - f, y = a * v - u * g,
                    _ = (l * g - a * m) / y;
                if ((h <= _ && _ <= d || d <= _ && _ <= h) && (e <= _ && _ <= n || n <= _ && _ <= e)) {
                    var x = (l * v - u * m) / y;
                    if ((c <= x && x <= f || f <= x && x <= c) && (r <= x && x <= i || i <= x && x <= r)) return !0
                }
                h = d, c = f
            }
            return !1
        }, t.prototype.getPolygon = function (t) {
            if (null == t) throw new Error("boundingBox cannot be null.");
            var e = this.boundingBoxes.indexOf(t);
            return -1 == e ? null : this.polygons[e]
        }, t.prototype.getWidth = function () {
            return this.maxX - this.minX
        }, t.prototype.getHeight = function () {
            return this.maxY - this.minY
        }, t
    }(), p.SkeletonBounds = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var K, e;
    K = t.core || (t.core = {}), e = function () {
        function l() {
            this.triangulator = new K.Triangulator, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices = new Array, this.clippedTriangles = new Array, this.scratch = new Array
        }

        return l.prototype.clipStart = function (t, e) {
            if (null != this.clipAttachment) return 0;
            var r = (this.clipAttachment = e).worldVerticesLength, n = K.Utils.setArraySize(this.clippingPolygon, r);
            e.computeWorldVertices(t, 0, r, n, 0, 2);
            var i = this.clippingPolygon;
            l.makeClockwise(i);
            for (var o = this.clippingPolygons = this.triangulator.decompose(i, this.triangulator.triangulate(i)), s = 0, a = o.length; s < a; s++) {
                var u = o[s];
                l.makeClockwise(u), u.push(u[0]), u.push(u[1])
            }
            return o.length
        }, l.prototype.clipEndWithSlot = function (t) {
            null != this.clipAttachment && this.clipAttachment.endSlot == t.data && this.clipEnd()
        }, l.prototype.clipEnd = function () {
            null != this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
        }, l.prototype.isClipping = function () {
            return null != this.clipAttachment
        }, l.prototype.clipTriangles = function (t, e, r, n, i, o, s, a) {
            var u = this.clipOutput, l = this.clippedVertices, h = this.clippedTriangles, c = this.clippingPolygons,
                p = this.clippingPolygons.length, d = a ? 12 : 8, f = 0;
            l.length = 0;
            t:for (var m = h.length = 0; m < n; m += 3) for (var g = r[m] << 1, v = t[g], y = t[g + 1], _ = i[g], x = i[g + 1], b = t[g = r[m + 1] << 1], w = t[g + 1], T = i[g], E = i[g + 1], S = t[g = r[m + 2] << 1], P = t[g + 1], M = i[g], A = i[g + 1], C = 0; C < p; C++) {
                var I = l.length;
                if (!this.clip(v, y, b, w, S, P, c[C], u)) {
                    (j = K.Utils.setArraySize(l, I + 3 * d))[I] = v, j[I + 1] = y, j[I + 2] = o.r, j[I + 3] = o.g, j[I + 4] = o.b, j[I + 5] = o.a, a ? (j[I + 6] = _, j[I + 7] = x, j[I + 8] = s.r, j[I + 9] = s.g, j[I + 10] = s.b, j[I + 11] = s.a, j[I + 12] = b, j[I + 13] = w, j[I + 14] = o.r, j[I + 15] = o.g, j[I + 16] = o.b, j[I + 17] = o.a, j[I + 18] = T, j[I + 19] = E, j[I + 20] = s.r, j[I + 21] = s.g, j[I + 22] = s.b, j[I + 23] = s.a, j[I + 24] = S, j[I + 25] = P, j[I + 26] = o.r, j[I + 27] = o.g, j[I + 28] = o.b, j[I + 29] = o.a, j[I + 30] = M, j[I + 31] = A, j[I + 32] = s.r, j[I + 33] = s.g, j[I + 34] = s.b, j[I + 35] = s.a) : (j[I + 6] = _, j[I + 7] = x, j[I + 8] = b, j[I + 9] = w, j[I + 10] = o.r, j[I + 11] = o.g, j[I + 12] = o.b, j[I + 13] = o.a, j[I + 14] = T, j[I + 15] = E, j[I + 16] = S, j[I + 17] = P, j[I + 18] = o.r, j[I + 19] = o.g, j[I + 20] = o.b, j[I + 21] = o.a, j[I + 22] = M, j[I + 23] = A), I = h.length, (q = K.Utils.setArraySize(h, I + 3))[I] = f, q[I + 1] = f + 1, q[I + 2] = f + 2, f += 3;
                    continue t
                }
                var O = u.length;
                if (0 != O) {
                    for (var R = w - P, D = S - b, k = v - S, L = P - y, N = 1 / (R * k + D * (y - P)), F = O >> 1, B = this.clipOutput, j = K.Utils.setArraySize(l, I + F * d), U = 0; U < O; U += 2) {
                        var X = B[U], V = B[U + 1];
                        j[I] = X, j[I + 1] = V, j[I + 2] = o.r, j[I + 3] = o.g, j[I + 4] = o.b, j[I + 5] = o.a;
                        var W = X - S, G = V - P, Y = (R * W + D * G) * N, H = (L * W + k * G) * N, z = 1 - Y - H;
                        j[I + 6] = _ * Y + T * H + M * z, j[I + 7] = x * Y + E * H + A * z, a && (j[I + 8] = s.r, j[I + 9] = s.g, j[I + 10] = s.b, j[I + 11] = s.a), I += d
                    }
                    I = h.length;
                    var q = K.Utils.setArraySize(h, I + 3 * (F - 2));
                    F--;
                    for (U = 1; U < F; U++) q[I] = f, q[I + 1] = f + U, q[I + 2] = f + U + 1, I += 3;
                    f += F + 1
                }
            }
        }, l.prototype.clip = function (t, e, r, n, i, o, s, a) {
            var u = a, l = !1, h = null;
            2 <= s.length % 4 ? (h = a, a = this.scratch) : h = this.scratch, h.length = 0, h.push(t), h.push(e), h.push(r), h.push(n), h.push(i), h.push(o), h.push(t), h.push(e), a.length = 0;
            for (var c = s, p = s.length - 4, d = 0; ; d += 2) {
                for (var f = c[d], m = c[d + 1], g = c[d + 2], v = c[d + 3], y = f - g, _ = m - v, x = h, b = h.length - 2, w = a.length, T = 0; T < b; T += 2) {
                    var E = x[T], S = x[T + 1], P = x[T + 2], M = x[T + 3], A = 0 < y * (M - v) - _ * (P - g);
                    if (0 < y * (S - v) - _ * (E - g)) {
                        if (A) {
                            a.push(P), a.push(M);
                            continue
                        }
                        var C = ((O = P - E) * (m - S) - (I = M - S) * (f - E)) / (I * (g - f) - O * (v - m));
                        a.push(f + (g - f) * C), a.push(m + (v - m) * C)
                    } else if (A) {
                        var I, O;
                        C = ((O = P - E) * (m - S) - (I = M - S) * (f - E)) / (I * (g - f) - O * (v - m));
                        a.push(f + (g - f) * C), a.push(m + (v - m) * C), a.push(P), a.push(M)
                    }
                    l = !0
                }
                if (w == a.length) return !(u.length = 0);
                if (a.push(a[0]), a.push(a[1]), d == p) break;
                var R = a;
                (a = h).length = 0, h = R
            }
            if (u != a) {
                d = u.length = 0;
                for (var D = a.length - 2; d < D; d++) u[d] = a[d]
            } else u.length = u.length - 2;
            return l
        }, l.makeClockwise = function (t) {
            for (var e = t, r = t.length, n = e[r - 2] * e[1] - e[0] * e[r - 1], i = 0, o = 0, s = 0, a = 0, u = r - 3; a < u; a += 2) i = e[a], o = e[a + 1], s = e[a + 2], n += i * e[a + 3] - s * o;
            if (!(n < 0)) {
                a = 0;
                var l = r - 2;
                for (u = r >> 1; a < u; a += 2) {
                    var h = e[a], c = e[a + 1], p = l - a;
                    e[a] = e[p], e[a + 1] = e[p + 1], e[p] = h, e[p + 1] = c
                }
            }
        }, l
    }(), K.SkeletonClipping = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), r = function () {
        function t() {
            this.bones = new Array, this.slots = new Array, this.skins = new Array, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints = new Array, this.pathConstraints = new Array, this.fps = 0
        }

        return t.prototype.findBone = function (t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findBoneIndex = function (t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, r = 0, n = e.length; r < n; r++) if (e[r].name == t) return r;
            return -1
        }, t.prototype.findSlot = function (t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findSlotIndex = function (t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, r = 0, n = e.length; r < n; r++) if (e[r].name == t) return r;
            return -1
        }, t.prototype.findSkin = function (t) {
            if (null == t) throw new Error("skinName cannot be null.");
            for (var e = this.skins, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findEvent = function (t) {
            if (null == t) throw new Error("eventDataName cannot be null.");
            for (var e = this.events, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findAnimation = function (t) {
            if (null == t) throw new Error("animationName cannot be null.");
            for (var e = this.animations, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findIkConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.ikConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findTransformConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.transformConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findPathConstraint = function (t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.pathConstraints, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.name == t) return i
            }
            return null
        }, t.prototype.findPathConstraintIndex = function (t) {
            if (null == t) throw new Error("pathConstraintName cannot be null.");
            for (var e = this.pathConstraints, r = 0, n = e.length; r < n; r++) if (e[r].name == t) return r;
            return -1
        }, t
    }(), e.SkeletonData = r
}(pixi_spine || (pixi_spine = {})), function (t) {
    !function ($) {
        var t = function () {
            function D(t) {
                this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
            }

            return D.prototype.readSkeletonData = function (t) {
                var e = this.scale, r = new $.SkeletonData, n = "string" == typeof t ? JSON.parse(t) : t,
                    i = n.skeleton;
                if (null != i && (r.hash = i.hash, r.version = i.spine, r.width = i.width, r.height = i.height, r.fps = i.fps, r.imagesPath = i.images), n.bones) for (var o = 0; o < n.bones.length; o++) {
                    var s = n.bones[o], a = null, u = this.getValue(s, "parent", null);
                    if (null != u && null == (a = r.findBone(u))) throw new Error("Parent bone not found: " + u);
                    (p = new $.BoneData(r.bones.length, s.name, a)).length = this.getValue(s, "length", 0) * e, p.x = this.getValue(s, "x", 0) * e, p.y = this.getValue(s, "y", 0) * e, p.rotation = this.getValue(s, "rotation", 0), p.scaleX = this.getValue(s, "scaleX", 1), p.scaleY = this.getValue(s, "scaleY", 1), p.shearX = this.getValue(s, "shearX", 0), p.shearY = this.getValue(s, "shearY", 0), p.transformMode = D.transformModeFromString(this.getValue(s, "transform", "normal")), r.bones.push(p)
                }
                if (n.slots) for (o = 0; o < n.slots.length; o++) {
                    var l = (T = n.slots[o]).name, h = T.bone, c = r.findBone(h);
                    if (null == c) throw new Error("Slot bone not found: " + h);
                    var p = new $.SlotData(r.slots.length, l, c), d = this.getValue(T, "color", null);
                    null != d && p.color.setFromString(d);
                    var f = this.getValue(T, "dark", null);
                    null != f && (p.darkColor = new $.Color(1, 1, 1, 1), p.darkColor.setFromString(f)), p.attachmentName = this.getValue(T, "attachment", null), p.blendMode = D.blendModeFromString(this.getValue(T, "blend", "normal")), r.slots.push(p)
                }
                if (n.ik) for (o = 0; o < n.ik.length; o++) {
                    var m = n.ik[o];
                    (p = new $.IkConstraintData(m.name)).order = this.getValue(m, "order", 0);
                    for (var g = 0; g < m.bones.length; g++) {
                        h = m.bones[g];
                        if (null == (y = r.findBone(h))) throw new Error("IK bone not found: " + h);
                        p.bones.push(y)
                    }
                    var v = m.target;
                    if (p.target = r.findBone(v), null == p.target) throw new Error("IK target bone not found: " + v);
                    p.bendDirection = this.getValue(m, "bendPositive", !0) ? 1 : -1, p.mix = this.getValue(m, "mix", 1), r.ikConstraints.push(p)
                }
                if (n.transform) for (o = 0; o < n.transform.length; o++) {
                    m = n.transform[o];
                    (p = new $.TransformConstraintData(m.name)).order = this.getValue(m, "order", 0);
                    for (g = 0; g < m.bones.length; g++) {
                        h = m.bones[g];
                        if (null == (y = r.findBone(h))) throw new Error("Transform constraint bone not found: " + h);
                        p.bones.push(y)
                    }
                    v = m.target;
                    if (p.target = r.findBone(v), null == p.target) throw new Error("Transform constraint target bone not found: " + v);
                    p.local = this.getValue(m, "local", !1), p.relative = this.getValue(m, "relative", !1), p.offsetRotation = this.getValue(m, "rotation", 0), p.offsetX = this.getValue(m, "x", 0) * e, p.offsetY = this.getValue(m, "y", 0) * e, p.offsetScaleX = this.getValue(m, "scaleX", 0), p.offsetScaleY = this.getValue(m, "scaleY", 0), p.offsetShearY = this.getValue(m, "shearY", 0), p.rotateMix = this.getValue(m, "rotateMix", 1), p.translateMix = this.getValue(m, "translateMix", 1), p.scaleMix = this.getValue(m, "scaleMix", 1), p.shearMix = this.getValue(m, "shearMix", 1), r.transformConstraints.push(p)
                }
                if (n.path) for (o = 0; o < n.path.length; o++) {
                    m = n.path[o];
                    (p = new $.PathConstraintData(m.name)).order = this.getValue(m, "order", 0);
                    for (g = 0; g < m.bones.length; g++) {
                        var y;
                        h = m.bones[g];
                        if (null == (y = r.findBone(h))) throw new Error("Transform constraint bone not found: " + h);
                        p.bones.push(y)
                    }
                    v = m.target;
                    if (p.target = r.findSlot(v), null == p.target) throw new Error("Path target slot not found: " + v);
                    p.positionMode = D.positionModeFromString(this.getValue(m, "positionMode", "percent")), p.spacingMode = D.spacingModeFromString(this.getValue(m, "spacingMode", "length")), p.rotateMode = D.rotateModeFromString(this.getValue(m, "rotateMode", "tangent")), p.offsetRotation = this.getValue(m, "rotation", 0), p.position = this.getValue(m, "position", 0), p.positionMode == $.PositionMode.Fixed && (p.position *= e), p.spacing = this.getValue(m, "spacing", 0), p.spacingMode != $.SpacingMode.Length && p.spacingMode != $.SpacingMode.Fixed || (p.spacing *= e), p.rotateMix = this.getValue(m, "rotateMix", 1), p.translateMix = this.getValue(m, "translateMix", 1), r.pathConstraints.push(p)
                }
                if (n.skins) for (var _ in n.skins) {
                    var x = n.skins[_], b = new $.Skin(_);
                    for (var l in x) {
                        var w = r.findSlotIndex(l);
                        if (-1 == w) throw new Error("Slot not found: " + l);
                        var T = x[l];
                        for (var E in T) {
                            var S = this.readAttachment(T[E], b, w, E, r);
                            null != S && b.addAttachment(w, E, S)
                        }
                    }
                    r.skins.push(b), "default" == b.name && (r.defaultSkin = b)
                }
                o = 0;
                for (var P = this.linkedMeshes.length; o < P; o++) {
                    var M = this.linkedMeshes[o];
                    if (null == (b = null == M.skin ? r.defaultSkin : r.findSkin(M.skin))) throw new Error("Skin not found: " + M.skin);
                    var A = b.getAttachment(M.slotIndex, M.parent);
                    if (null == A) throw new Error("Parent mesh not found: " + M.parent);
                    M.mesh.setParentMesh(A)
                }
                if (this.linkedMeshes.length = 0, n.events) for (var C in n.events) {
                    var I = n.events[C];
                    (p = new $.EventData(C)).intValue = this.getValue(I, "int", 0), p.floatValue = this.getValue(I, "float", 0), p.stringValue = this.getValue(I, "string", ""), p.audio = this.getValue(I, "audio", null), r.events.push(p)
                }
                if (n.animations) for (var O in n.animations) {
                    var R = n.animations[O];
                    this.readAnimation(R, O, r)
                }
                return r
            }, D.prototype.readAttachment = function (t, e, r, n, i) {
                var o = this.scale;
                switch (n = this.getValue(t, "name", n), this.getValue(t, "type", "region")) {
                    case"region":
                        var s = this.getValue(t, "path", n), a = this.attachmentLoader.newRegionAttachment(e, n, s);
                        return null == a ? null : (a.path = s, a.x = this.getValue(t, "x", 0) * o, a.y = this.getValue(t, "y", 0) * o, a.scaleX = this.getValue(t, "scaleX", 1), a.scaleY = this.getValue(t, "scaleY", 1), a.rotation = this.getValue(t, "rotation", 0), a.width = t.width * o, a.height = t.height * o, null != (_ = this.getValue(t, "color", null)) && a.color.setFromString(_), a);
                    case"boundingbox":
                        var u = this.attachmentLoader.newBoundingBoxAttachment(e, n);
                        return null == u ? null : (this.readVertices(t, u, t.vertexCount << 1), null != (_ = this.getValue(t, "color", null)) && u.color.setFromString(_), u);
                    case"mesh":
                    case"linkedmesh":
                        s = this.getValue(t, "path", n);
                        var l = this.attachmentLoader.newMeshAttachment(e, n, s);
                        if (null == l) return null;
                        l.path = s, null != (_ = this.getValue(t, "color", null)) && l.color.setFromString(_);
                        var h = this.getValue(t, "parent", null);
                        if (null != h) return l.inheritDeform = this.getValue(t, "deform", !0), this.linkedMeshes.push(new x(l, this.getValue(t, "skin", null), r, h)), l;
                        var c = t.uvs;
                        return this.readVertices(t, l, c.length), l.triangles = t.triangles, l.regionUVs = c, l.hullLength = 2 * this.getValue(t, "hull", 0), l;
                    case"path":
                        if (null == (s = this.attachmentLoader.newPathAttachment(e, n))) return null;
                        s.closed = this.getValue(t, "closed", !1), s.constantSpeed = this.getValue(t, "constantSpeed", !0);
                        var p = t.vertexCount;
                        this.readVertices(t, s, p << 1);
                        for (var d = $.Utils.newArray(p / 3, 0), f = 0; f < t.lengths.length; f++) d[f] = t.lengths[f] * o;
                        return s.lengths = d, null != (_ = this.getValue(t, "color", null)) && s.color.setFromString(_), s;
                    case"point":
                        var m = this.attachmentLoader.newPointAttachment(e, n);
                        return null == m ? null : (m.x = this.getValue(t, "x", 0) * o, m.y = this.getValue(t, "y", 0) * o, m.rotation = this.getValue(t, "rotation", 0), null != (_ = this.getValue(t, "color", null)) && m.color.setFromString(_), m);
                    case"clipping":
                        var g = this.attachmentLoader.newClippingAttachment(e, n);
                        if (null == g) return null;
                        var v = this.getValue(t, "end", null);
                        if (null != v) {
                            var y = i.findSlot(v);
                            if (null == y) throw new Error("Clipping end slot not found: " + v);
                            g.endSlot = y
                        }
                        var _;
                        p = t.vertexCount;
                        return this.readVertices(t, g, p << 1), null != (_ = this.getValue(t, "color", null)) && g.color.setFromString(_), g
                }
                return null
            }, D.prototype.readVertices = function (t, e, r) {
                var n = this.scale;
                e.worldVerticesLength = r;
                var i = t.vertices;
                if (r != i.length) {
                    var o = new Array, s = new Array;
                    for (h = 0, c = i.length; h < c;) {
                        var a = i[h++];
                        s.push(a);
                        for (var u = h + 4 * a; h < u; h += 4) s.push(i[h]), o.push(i[h + 1] * n), o.push(i[h + 2] * n), o.push(i[h + 3])
                    }
                    e.bones = s, e.vertices = $.Utils.toFloatArray(o)
                } else {
                    var l = $.Utils.toFloatArray(i);
                    if (1 != n) for (var h = 0, c = i.length; h < c; h++) l[h] *= n;
                    e.vertices = l
                }
            }, D.prototype.readAnimation = function (t, e, r) {
                var n = this.scale, i = new Array, o = 0;
                if (t.slots) for (var s in t.slots) {
                    var a = t.slots[s];
                    if (-1 == (q = r.findSlotIndex(s))) throw new Error("Slot not found: " + s);
                    for (var u in a) {
                        var l = a[u];
                        if ("attachment" == u) {
                            (_ = new $.AttachmentTimeline(l.length)).slotIndex = q;
                            for (var h = 0, c = 0; c < l.length; c++) {
                                var p = l[c];
                                _.setFrame(h++, p.time, p.name)
                            }
                            i.push(_), o = Math.max(o, _.frames[_.getFrameCount() - 1])
                        } else if ("color" == u) {
                            (_ = new $.ColorTimeline(l.length)).slotIndex = q;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                var d = new $.Color;
                                d.setFromString(p.color || "ffffffff"), _.setFrame(h, p.time, d.r, d.g, d.b, d.a), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.ColorTimeline.ENTRIES])
                        } else {
                            if ("twoColor" != u) throw new Error("Invalid timeline type for a slot: " + u + " (" + s + ")");
                            (_ = new $.TwoColorTimeline(l.length)).slotIndex = q;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                var f = new $.Color, m = new $.Color;
                                f.setFromString(p.light), m.setFromString(p.dark), _.setFrame(h, p.time, f.r, f.g, f.b, f.a, m.r, m.g, m.b), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.TwoColorTimeline.ENTRIES])
                        }
                    }
                }
                if (t.bones) for (var g in t.bones) {
                    var v = t.bones[g], y = r.findBoneIndex(g);
                    if (-1 == y) throw new Error("Bone not found: " + g);
                    for (var u in v) {
                        l = v[u];
                        if ("rotate" === u) {
                            (_ = new $.RotateTimeline(l.length)).boneIndex = y;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                _.setFrame(h, p.time, p.angle), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.RotateTimeline.ENTRIES])
                        } else {
                            if ("translate" !== u && "scale" !== u && "shear" !== u) throw new Error("Invalid timeline type for a bone: " + u + " (" + g + ")");
                            var _ = null, x = 1;
                            "scale" === u ? _ = new $.ScaleTimeline(l.length) : "shear" === u ? _ = new $.ShearTimeline(l.length) : (_ = new $.TranslateTimeline(l.length), x = n), _.boneIndex = y;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                var b = this.getValue(p, "x", 0), w = this.getValue(p, "y", 0);
                                _.setFrame(h, p.time, b * x, w * x), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.TranslateTimeline.ENTRIES])
                        }
                    }
                }
                if (t.ik) for (var T in t.ik) {
                    var E = t.ik[T], S = r.findIkConstraint(T);
                    (_ = new $.IkConstraintTimeline(E.length)).ikConstraintIndex = r.ikConstraints.indexOf(S);
                    for (h = 0, c = 0; c < E.length; c++) {
                        p = E[c];
                        _.setFrame(h, p.time, this.getValue(p, "mix", 1), this.getValue(p, "bendPositive", !0) ? 1 : -1), this.readCurve(p, _, h), h++
                    }
                    i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.IkConstraintTimeline.ENTRIES])
                }
                if (t.transform) for (var T in t.transform) {
                    E = t.transform[T], S = r.findTransformConstraint(T);
                    (_ = new $.TransformConstraintTimeline(E.length)).transformConstraintIndex = r.transformConstraints.indexOf(S);
                    for (h = 0, c = 0; c < E.length; c++) {
                        p = E[c];
                        _.setFrame(h, p.time, this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1), this.getValue(p, "scaleMix", 1), this.getValue(p, "shearMix", 1)), this.readCurve(p, _, h), h++
                    }
                    i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.TransformConstraintTimeline.ENTRIES])
                }
                if (t.paths) for (var T in t.paths) {
                    E = t.paths[T];
                    var P = r.findPathConstraintIndex(T);
                    if (-1 == P) throw new Error("Path constraint not found: " + T);
                    var M = r.pathConstraints[P];
                    for (var u in E) {
                        l = E[u];
                        if ("position" === u || "spacing" === u) {
                            _ = null, x = 1;
                            "spacing" === u ? (_ = new $.PathConstraintSpacingTimeline(l.length), M.spacingMode != $.SpacingMode.Length && M.spacingMode != $.SpacingMode.Fixed || (x = n)) : (_ = new $.PathConstraintPositionTimeline(l.length), M.positionMode == $.PositionMode.Fixed && (x = n)), _.pathConstraintIndex = P;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                _.setFrame(h, p.time, this.getValue(p, u, 0) * x), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.PathConstraintPositionTimeline.ENTRIES])
                        } else if ("mix" === u) {
                            (_ = new $.PathConstraintMixTimeline(l.length)).pathConstraintIndex = P;
                            for (h = 0, c = 0; c < l.length; c++) {
                                p = l[c];
                                _.setFrame(h, p.time, this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1)), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[(_.getFrameCount() - 1) * $.PathConstraintMixTimeline.ENTRIES])
                        }
                    }
                }
                if (t.deform) for (var A in t.deform) {
                    var C = t.deform[A], I = r.findSkin(A);
                    if (null == I) throw new Error("Skin not found: " + A);
                    for (var s in C) {
                        a = C[s];
                        if (-1 == (q = r.findSlotIndex(s))) throw new Error("Slot not found: " + a.name);
                        for (var u in a) {
                            l = a[u];
                            var O = I.getAttachment(q, u);
                            if (null == O) throw new Error("Deform attachment not found: " + l.name);
                            var R = null != O.bones, D = O.vertices, k = R ? D.length / 3 * 2 : D.length;
                            (_ = new $.DeformTimeline(l.length)).slotIndex = q, _.attachment = O;
                            h = 0;
                            for (var L = 0; L < l.length; L++) {
                                p = l[L];
                                var N = void 0, F = this.getValue(p, "vertices", null);
                                if (null == F) N = R ? $.Utils.newFloatArray(k) : D; else {
                                    N = $.Utils.newFloatArray(k);
                                    var B = this.getValue(p, "offset", 0);
                                    if ($.Utils.arrayCopy(F, 0, N, B, F.length), 1 != n) for (var j = (c = B) + F.length; c < j; c++) N[c] *= n;
                                    if (!R) for (c = 0; c < k; c++) N[c] += D[c]
                                }
                                _.setFrame(h, p.time, N), this.readCurve(p, _, h), h++
                            }
                            i.push(_), o = Math.max(o, _.frames[_.getFrameCount() - 1])
                        }
                    }
                }
                var U = t.drawOrder;
                if (null == U && (U = t.draworder), null != U) {
                    _ = new $.DrawOrderTimeline(U.length);
                    var X = r.slots.length;
                    for (h = 0, L = 0; L < U.length; L++) {
                        var V = U[L], W = null, G = this.getValue(V, "offsets", null);
                        if (null != G) {
                            W = $.Utils.newArray(X, -1);
                            var Y = $.Utils.newArray(X - G.length, 0), H = 0, z = 0;
                            for (c = 0; c < G.length; c++) {
                                var q, K = G[c];
                                if (-1 == (q = r.findSlotIndex(K.slot))) throw new Error("Slot not found: " + K.slot);
                                for (; H != q;) Y[z++] = H++;
                                W[H + K.offset] = H++
                            }
                            for (; H < X;) Y[z++] = H++;
                            for (c = X - 1; 0 <= c; c--) -1 == W[c] && (W[c] = Y[--z])
                        }
                        _.setFrame(h++, V.time, W)
                    }
                    i.push(_), o = Math.max(o, _.frames[_.getFrameCount() - 1])
                }
                if (t.events) {
                    for (_ = new $.EventTimeline(t.events.length), h = 0, c = 0; c < t.events.length; c++) {
                        var Z = t.events[c], Q = r.findEvent(Z.name);
                        if (null == Q) throw new Error("Event not found: " + Z.name);
                        var J = new $.Event($.Utils.toSinglePrecision(Z.time), Q);
                        J.intValue = this.getValue(Z, "int", Q.intValue), J.floatValue = this.getValue(Z, "float", Q.floatValue), J.stringValue = this.getValue(Z, "string", Q.stringValue), _.setFrame(h++, J)
                    }
                    i.push(_), o = Math.max(o, _.frames[_.getFrameCount() - 1])
                }
                if (isNaN(o)) throw new Error("Error while parsing animation, duration is NaN");
                r.animations.push(new $.Animation(e, i, o))
            }, D.prototype.readCurve = function (t, e, r) {
                if (t.curve) if ("stepped" === t.curve) e.setStepped(r); else if ("[object Array]" === Object.prototype.toString.call(t.curve)) {
                    var n = t.curve;
                    e.setCurve(r, n[0], n[1], n[2], n[3])
                }
            }, D.prototype.getValue = function (t, e, r) {
                return void 0 !== t[e] ? t[e] : r
            }, D.blendModeFromString = function (t) {
                if ("normal" == (t = t.toLowerCase())) return $.BlendMode.Normal;
                if ("additive" == t) return $.BlendMode.Additive;
                if ("multiply" == t) return $.BlendMode.Multiply;
                if ("screen" == t) return $.BlendMode.Screen;
                throw new Error("Unknown blend mode: " + t)
            }, D.positionModeFromString = function (t) {
                if ("fixed" == (t = t.toLowerCase())) return $.PositionMode.Fixed;
                if ("percent" == t) return $.PositionMode.Percent;
                throw new Error("Unknown position mode: " + t)
            }, D.spacingModeFromString = function (t) {
                if ("length" == (t = t.toLowerCase())) return $.SpacingMode.Length;
                if ("fixed" == t) return $.SpacingMode.Fixed;
                if ("percent" == t) return $.SpacingMode.Percent;
                throw new Error("Unknown position mode: " + t)
            }, D.rotateModeFromString = function (t) {
                if ("tangent" == (t = t.toLowerCase())) return $.RotateMode.Tangent;
                if ("chain" == t) return $.RotateMode.Chain;
                if ("chainscale" == t) return $.RotateMode.ChainScale;
                throw new Error("Unknown rotate mode: " + t)
            }, D.transformModeFromString = function (t) {
                if ("normal" == (t = t.toLowerCase())) return $.TransformMode.Normal;
                if ("onlytranslation" == t) return $.TransformMode.OnlyTranslation;
                if ("norotationorreflection" == t) return $.TransformMode.NoRotationOrReflection;
                if ("noscale" == t) return $.TransformMode.NoScale;
                if ("noscaleorreflection" == t) return $.TransformMode.NoScaleOrReflection;
                throw new Error("Unknown transform mode: " + t)
            }, D
        }();
        $.SkeletonJson = t;
        var x = function (t, e, r, n) {
            this.mesh = t, this.skin = e, this.slotIndex = r, this.parent = n
        }
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), r = function () {
        function t(t) {
            if (this.attachments = new Array, null == t) throw new Error("name cannot be null.");
            this.name = t
        }

        return t.prototype.addAttachment = function (t, e, r) {
            if (null == r) throw new Error("attachment cannot be null.");
            var n = this.attachments;
            t >= n.length && (n.length = t + 1), n[t] || (n[t] = {}), n[t][e] = r
        }, t.prototype.getAttachment = function (t, e) {
            var r = this.attachments[t];
            return r ? r[e] : null
        }, t.prototype.attachAll = function (t, e) {
            for (var r = 0, n = 0; n < t.slots.length; n++) {
                var i = t.slots[n], o = i.getAttachment();
                if (o && r < e.attachments.length) {
                    var s = e.attachments[r];
                    for (var a in s) {
                        if (o == s[a]) {
                            var u = this.getAttachment(r, a);
                            null != u && i.setAttachment(u);
                            break
                        }
                    }
                }
                r++
            }
        }, t
    }(), e.Skin = r
}(pixi_spine || (pixi_spine = {})), function (t) {
    var r, e;
    r = t.core || (t.core = {}), e = function () {
        function t(t, e) {
            if (this.attachmentVertices = new Array, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("bone cannot be null.");
            this.data = t, this.bone = e, this.color = new r.Color, this.darkColor = null == t.darkColor ? null : new r.Color, this.setToSetupPose(), this.blendMode = this.data.blendMode
        }

        return t.prototype.getAttachment = function () {
            return this.attachment
        }, t.prototype.setAttachment = function (t) {
            this.attachment != t && (this.attachment = t, this.attachmentTime = this.bone.skeleton.time, this.attachmentVertices.length = 0)
        }, t.prototype.setAttachmentTime = function (t) {
            this.attachmentTime = this.bone.skeleton.time - t
        }, t.prototype.getAttachmentTime = function () {
            return this.bone.skeleton.time - this.attachmentTime
        }, t.prototype.setToSetupPose = function () {
            this.color.setFromColor(this.data.color), null != this.darkColor && this.darkColor.setFromColor(this.data.darkColor), null == this.data.attachmentName ? this.attachment = null : (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName)))
        }, t
    }(), r.Slot = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var n, e;
    n = t.core || (t.core = {}), e = function (t, e, r) {
        if (this.color = new n.Color(1, 1, 1, 1), t < 0) throw new Error("index must be >= 0.");
        if (null == e) throw new Error("name cannot be null.");
        if (null == r) throw new Error("boneData cannot be null.");
        this.index = t, this.name = e, this.boneData = r
    }, n.SlotData = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    !function (t) {
        var e, r, n, i, o = function () {
            function t(t) {
                this._image = t
            }

            return t.prototype.getImage = function () {
                return this._image
            }, t.filterFromString = function (t) {
                switch (t.toLowerCase()) {
                    case"nearest":
                        return e.Nearest;
                    case"linear":
                        return e.Linear;
                    case"mipmap":
                        return e.MipMap;
                    case"mipmapnearestnearest":
                        return e.MipMapNearestNearest;
                    case"mipmaplinearnearest":
                        return e.MipMapLinearNearest;
                    case"mipmapnearestlinear":
                        return e.MipMapNearestLinear;
                    case"mipmaplinearlinear":
                        return e.MipMapLinearLinear;
                    default:
                        throw new Error("Unknown texture filter " + t)
                }
            }, t.wrapFromString = function (t) {
                switch (t.toLowerCase()) {
                    case"mirroredtepeat":
                        return n.MirroredRepeat;
                    case"clamptoedge":
                        return n.ClampToEdge;
                    case"repeat":
                        return n.Repeat;
                    default:
                        throw new Error("Unknown texture wrap " + t)
                }
            }, t
        }();
        t.Texture = o, (r = e = t.TextureFilter || (t.TextureFilter = {}))[r.Nearest = 9728] = "Nearest", r[r.Linear = 9729] = "Linear", r[r.MipMap = 9987] = "MipMap", r[r.MipMapNearestNearest = 9984] = "MipMapNearestNearest", r[r.MipMapLinearNearest = 9985] = "MipMapLinearNearest", r[r.MipMapNearestLinear = 9986] = "MipMapNearestLinear", r[r.MipMapLinearLinear = 9987] = "MipMapLinearLinear", (i = n = t.TextureWrap || (t.TextureWrap = {}))[i.MirroredRepeat = 33648] = "MirroredRepeat", i[i.ClampToEdge = 33071] = "ClampToEdge", i[i.Repeat = 10497] = "Repeat";
        var s = function () {
            function t() {
                this.size = null
            }

            return Object.defineProperty(t.prototype, "width", {
                get: function () {
                    var t = this.texture;
                    return "3" == PIXI.VERSION[0] ? t.crop.width : t.trim ? t.trim.width : t.orig.width
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "height", {
                get: function () {
                    var t = this.texture;
                    return "3" == PIXI.VERSION[0] ? t.crop.height : t.trim ? t.trim.height : t.orig.height
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "u", {
                get: function () {
                    return this.texture._uvs.x0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "v", {
                get: function () {
                    return this.texture._uvs.y0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "u2", {
                get: function () {
                    return this.texture._uvs.x2
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "v2", {
                get: function () {
                    return this.texture._uvs.y2
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "offsetX", {
                get: function () {
                    var t = this.texture;
                    return t.trim ? t.trim.x : 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "offsetY", {
                get: function () {
                    return console.warn("Deprecation Warning: @Hackerham: I guess, if you are using PIXI-SPINE ATLAS region.offsetY, you want a texture, right? Use region.texture from now on."), this.spineOffsetY
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pixiOffsetY", {
                get: function () {
                    var t = this.texture;
                    return t.trim ? t.trim.y : 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "spineOffsetY", {
                get: function () {
                    var t = this.texture;
                    return this.originalHeight - this.height - (t.trim ? t.trim.y : 0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "originalWidth", {
                get: function () {
                    var t = this.texture;
                    return "3" == PIXI.VERSION[0] ? t.trim ? t.trim.width : t.crop.width : t.orig.width
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "originalHeight", {
                get: function () {
                    var t = this.texture;
                    return "3" == PIXI.VERSION[0] ? t.trim ? t.trim.height : t.crop.height : t.orig.height
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "x", {
                get: function () {
                    return this.texture.frame.x
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "y", {
                get: function () {
                    return this.texture.frame.y
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "rotate", {
                get: function () {
                    return 0 !== this.texture.rotate
                }, enumerable: !0, configurable: !0
            }), t
        }();
        t.TextureRegion = s
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    !function (S) {
        var t = function () {
            function t(t, e, r) {
                this.pages = new Array, this.regions = new Array, t && this.addSpineAtlas(t, e, r)
            }

            return t.prototype.addTexture = function (t, e) {
                for (var r = this.pages, n = null, i = 0; i < r.length; i++) if (r[i].baseTexture === e.baseTexture) {
                    n = r[i];
                    break
                }
                if (null === n) {
                    (n = new P).name = "texturePage";
                    var o = e.baseTexture;
                    n.width = o.realWidth, n.height = o.realHeight, n.baseTexture = o, n.minFilter = n.magFilter = S.TextureFilter.Nearest, n.uWrap = S.TextureWrap.ClampToEdge, n.vWrap = S.TextureWrap.ClampToEdge, r.push(n)
                }
                var s = new M;
                return s.name = t, s.page = n, s.texture = e, s.index = -1, this.regions.push(s), s
            }, t.prototype.addTextureHash = function (t, e) {
                for (var r in t) t.hasOwnProperty(r) && this.addTexture(e && -1 !== r.indexOf(".") ? r.substr(0, r.lastIndexOf(".")) : r, t[r])
            }, t.prototype.addSpineAtlas = function (t, e, r) {
                return this.load(t, e, r)
            }, t.prototype.load = function (t, _, x) {
                var b = this;
                if (null == _) throw new Error("textureLoader cannot be null.");
                var w = new e(t), T = new Array(4), E = null;
                !function e() {
                    for (; ;) {
                        var t = w.readLine();
                        if (null == t) return x && x(b);
                        if (0 == (t = t.trim()).length) E = null; else {
                            if (!E) {
                                (E = new P).name = t, 2 == w.readTuple(T) && (E.width = parseInt(T[0]), E.height = parseInt(T[1]), w.readTuple(T)), w.readTuple(T), E.minFilter = S.Texture.filterFromString(T[0]), E.magFilter = S.Texture.filterFromString(T[1]);
                                var r = w.readValue();
                                E.uWrap = S.TextureWrap.ClampToEdge, E.vWrap = S.TextureWrap.ClampToEdge, "x" == r ? E.uWrap = S.TextureWrap.Repeat : "y" == r ? E.vWrap = S.TextureWrap.Repeat : "xy" == r && (E.uWrap = E.vWrap = S.TextureWrap.Repeat), _(t, function (t) {
                                    (E.baseTexture = t).hasLoaded || (t.width = E.width, t.height = E.height), b.pages.push(E), E.setFilters(), E.width && E.height || (E.width = t.realWidth, E.height = t.realHeight, E.width && E.height || console.log("ERROR spine atlas page " + E.name + ": meshes wont work if you dont specify size in atlas (http://www.html5gamedevs.com/topic/18888-pixi-spines-and-meshes/?p=107121)")), e()
                                }), b.pages.push(E);
                                break
                            }
                            var n = new M;
                            n.name = t, n.page = E;
                            var i = "true" == w.readValue() ? 6 : 0;
                            w.readTuple(T);
                            var o = parseInt(T[0]), s = parseInt(T[1]);
                            w.readTuple(T);
                            var a = parseInt(T[0]), u = parseInt(T[1]), l = E.baseTexture.resolution;
                            o /= l, s /= l, a /= l, u /= l;
                            var h = new PIXI.Rectangle(o, s, i ? u : a, i ? a : u);
                            4 == w.readTuple(T) && 4 == w.readTuple(T) && w.readTuple(T);
                            var c = parseInt(T[0]) / l, p = parseInt(T[1]) / l;
                            w.readTuple(T);
                            var d = parseInt(T[0]) / l, f = parseInt(T[1]) / l, m = new PIXI.Rectangle(0, 0, c, p),
                                g = new PIXI.Rectangle(d, p - u - f, a, u);
                            if ("3" != PIXI.VERSION[0]) n.texture = new PIXI.Texture(n.page.baseTexture, h, m, g, i); else {
                                var v = new PIXI.Rectangle(o, s, a, u), y = v.clone();
                                g.width = c, g.height = p, n.texture = new PIXI.Texture(n.page.baseTexture, v, y, g, i)
                            }
                            n.index = parseInt(w.readValue()), n.texture._updateUvs(), b.regions.push(n)
                        }
                    }
                }()
            }, t.prototype.findRegion = function (t) {
                for (var e = 0; e < this.regions.length; e++) if (this.regions[e].name == t) return this.regions[e];
                return null
            }, t.prototype.dispose = function () {
                for (var t = 0; t < this.pages.length; t++) this.pages[t].baseTexture.dispose()
            }, t
        }();
        S.TextureAtlas = t;
        var e = function () {
            function t(t) {
                this.index = 0, this.lines = t.split(/\r\n|\r|\n/)
            }

            return t.prototype.readLine = function () {
                return this.index >= this.lines.length ? null : this.lines[this.index++]
            }, t.prototype.readValue = function () {
                var t = this.readLine(), e = t.indexOf(":");
                if (-1 == e) throw new Error("Invalid line: " + t);
                return t.substring(e + 1).trim()
            }, t.prototype.readTuple = function (t) {
                var e = this.readLine(), r = e.indexOf(":");
                if (-1 == r) throw new Error("Invalid line: " + e);
                for (var n = 0, i = r + 1; n < 3; n++) {
                    var o = e.indexOf(",", i);
                    if (-1 == o) break;
                    t[n] = e.substr(i, o - i).trim(), i = o + 1
                }
                return t[n] = e.substring(i).trim(), n + 1
            }, t
        }(), P = function () {
            function t() {
            }

            return t.prototype.setFilters = function () {
                var t = this.baseTexture, e = this.minFilter;
                e == S.TextureFilter.Linear ? t.scaleMode = PIXI.SCALE_MODES.LINEAR : this.minFilter == S.TextureFilter.Nearest ? t.scaleMode = PIXI.SCALE_MODES.NEAREST : (t.mipmap = !0, e == S.TextureFilter.MipMapNearestNearest ? t.scaleMode = PIXI.SCALE_MODES.NEAREST : t.scaleMode = PIXI.SCALE_MODES.LINEAR)
            }, t
        }();
        S.TextureAtlasPage = P;
        var M = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return __extends(e, t), e
        }(S.TextureRegion);
        S.TextureAtlasRegion = M
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    var I, e;
    I = t.core || (t.core = {}), e = function () {
        function t(t, e) {
            if (this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.temp = new I.Vector2, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, this.shearMix = t.shearMix, this.bones = new Array;
            for (var r = 0; r < t.bones.length; r++) this.bones.push(e.findBone(t.bones[r].name));
            this.target = e.findBone(t.target.name)
        }

        return t.prototype.apply = function () {
            this.update()
        }, t.prototype.update = function () {
            this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld()
        }, t.prototype.applyAbsoluteWorld = function () {
            for (var t = this.rotateMix, e = this.translateMix, r = this.scaleMix, n = this.shearMix, i = this.target, o = i.matrix, s = o.a, a = o.c, u = o.b, l = o.d, h = 0 < s * l - a * u ? I.MathUtils.degRad : -I.MathUtils.degRad, c = this.data.offsetRotation * h, p = this.data.offsetShearY * h, d = this.bones, f = 0, m = d.length; f < m; f++) {
                var g = d[f], v = !1, y = g.matrix;
                if (0 != t) {
                    var _ = y.a, x = y.c, b = y.b, w = y.d;
                    (A = Math.atan2(u, s) - Math.atan2(b, _) + c) > I.MathUtils.PI ? A -= I.MathUtils.PI2 : A < -I.MathUtils.PI && (A += I.MathUtils.PI2), A *= t;
                    var T = Math.cos(A), E = Math.sin(A);
                    y.a = T * _ - E * b, y.c = T * x - E * w, y.b = E * _ + T * b, y.d = E * x + T * w, v = !0
                }
                if (0 != e) {
                    var S = this.temp;
                    i.localToWorld(S.set(this.data.offsetX, this.data.offsetY)), y.tx += (S.x - y.tx) * e, y.ty += (S.y - y.ty) * e, v = !0
                }
                if (0 < r) {
                    var P = Math.sqrt(y.a * y.a + y.b * y.b), M = Math.sqrt(s * s + u * u);
                    1e-5 < P && (P = (P + (M - P + this.data.offsetScaleX) * r) / P), y.a *= P, y.b *= P, P = Math.sqrt(y.c * y.c + y.d * y.d), M = Math.sqrt(a * a + l * l), 1e-5 < P && (P = (P + (M - P + this.data.offsetScaleY) * r) / P), y.c *= P, y.d *= P, v = !0
                }
                if (0 < n) {
                    x = y.c, w = y.d;
                    var A, C = Math.atan2(w, x);
                    (A = Math.atan2(l, a) - Math.atan2(u, s) - (C - Math.atan2(y.b, y.a))) > I.MathUtils.PI ? A -= I.MathUtils.PI2 : A < -I.MathUtils.PI && (A += I.MathUtils.PI2), A = C + (A + p) * n;
                    P = Math.sqrt(x * x + w * w);
                    y.c = Math.cos(A) * P, y.d = Math.sin(A) * P, v = !0
                }
                v && (g.appliedValid = !1)
            }
        }, t.prototype.applyRelativeWorld = function () {
            for (var t = this.rotateMix, e = this.translateMix, r = this.scaleMix, n = this.shearMix, i = this.target, o = i.matrix, s = o.a, a = o.c, u = o.b, l = o.d, h = 0 < s * l - a * u ? I.MathUtils.degRad : -I.MathUtils.degRad, c = this.data.offsetRotation * h, p = this.data.offsetShearY * h, d = this.bones, f = 0, m = d.length; f < m; f++) {
                var g = d[f], v = !1, y = g.matrix;
                if (0 != t) {
                    var _ = y.a, x = y.c, b = y.b, w = y.d;
                    (M = Math.atan2(u, s) + c) > I.MathUtils.PI ? M -= I.MathUtils.PI2 : M < -I.MathUtils.PI && (M += I.MathUtils.PI2), M *= t;
                    var T = Math.cos(M), E = Math.sin(M);
                    y.a = T * _ - E * b, y.c = T * x - E * w, y.b = E * _ + T * b, y.d = E * x + T * w, v = !0
                }
                if (0 != e) {
                    var S = this.temp;
                    i.localToWorld(S.set(this.data.offsetX, this.data.offsetY)), y.tx += S.x * e, y.ty += S.y * e, v = !0
                }
                if (0 < r) {
                    var P = (Math.sqrt(s * s + u * u) - 1 + this.data.offsetScaleX) * r + 1;
                    y.a *= P, y.b *= P, P = (Math.sqrt(a * a + l * l) - 1 + this.data.offsetScaleY) * r + 1, y.c *= P, y.d *= P, v = !0
                }
                if (0 < n) {
                    var M;
                    (M = Math.atan2(l, a) - Math.atan2(u, s)) > I.MathUtils.PI ? M -= I.MathUtils.PI2 : M < -I.MathUtils.PI && (M += I.MathUtils.PI2);
                    x = y.c, w = y.d;
                    M = Math.atan2(w, x) + (M - I.MathUtils.PI / 2 + p) * n;
                    P = Math.sqrt(x * x + w * w);
                    y.c = Math.cos(M) * P, y.d = Math.sin(M) * P, v = !0
                }
                v && (g.appliedValid = !1)
            }
        }, t.prototype.applyAbsoluteLocal = function () {
            var t = this.rotateMix, e = this.translateMix, r = this.scaleMix, n = this.shearMix, i = this.target;
            i.appliedValid || i.updateAppliedTransform();
            for (var o = this.bones, s = 0, a = o.length; s < a; s++) {
                var u = o[s];
                u.appliedValid || u.updateAppliedTransform();
                var l = u.arotation;
                if (0 != t) {
                    var h = i.arotation - l + this.data.offsetRotation;
                    l += (h -= 360 * (16384 - (16384.499999999996 - h / 360 | 0))) * t
                }
                var c = u.ax, p = u.ay;
                0 != e && (c += (i.ax - c + this.data.offsetX) * e, p += (i.ay - p + this.data.offsetY) * e);
                var d = u.ascaleX, f = u.ascaleY;
                0 < r && (1e-5 < d && (d = (d + (i.ascaleX - d + this.data.offsetScaleX) * r) / d), 1e-5 < f && (f = (f + (i.ascaleY - f + this.data.offsetScaleY) * r) / f));
                var m = u.ashearY;
                if (0 < n) {
                    h = i.ashearY - m + this.data.offsetShearY;
                    h -= 360 * (16384 - (16384.499999999996 - h / 360 | 0)), u.shearY += h * n
                }
                u.updateWorldTransformWith(c, p, l, d, f, u.ashearX, m)
            }
        }, t.prototype.applyRelativeLocal = function () {
            var t = this.rotateMix, e = this.translateMix, r = this.scaleMix, n = this.shearMix, i = this.target;
            i.appliedValid || i.updateAppliedTransform();
            for (var o = this.bones, s = 0, a = o.length; s < a; s++) {
                var u = o[s];
                u.appliedValid || u.updateAppliedTransform();
                var l = u.arotation;
                0 != t && (l += (i.arotation + this.data.offsetRotation) * t);
                var h = u.ax, c = u.ay;
                0 != e && (h += (i.ax + this.data.offsetX) * e, c += (i.ay + this.data.offsetY) * e);
                var p = u.ascaleX, d = u.ascaleY;
                0 < r && (1e-5 < p && (p *= (i.ascaleX - 1 + this.data.offsetScaleX) * r + 1), 1e-5 < d && (d *= (i.ascaleY - 1 + this.data.offsetScaleY) * r + 1));
                var f = u.ashearY;
                0 < n && (f += (i.ashearY + this.data.offsetShearY) * n), u.updateWorldTransformWith(h, c, l, p, d, u.ashearX, f)
            }
        }, t.prototype.getOrder = function () {
            return this.data.order
        }, t
    }(), I.TransformConstraint = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e;
    e = function (t) {
        if (this.order = 0, this.bones = new Array, this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.offsetRotation = 0, this.offsetX = 0, this.offsetY = 0, this.offsetScaleX = 0, this.offsetScaleY = 0, this.offsetShearY = 0, this.relative = !1, this.local = !1, null == t) throw new Error("name cannot be null.");
        this.name = t
    }, (t.core || (t.core = {})).TransformConstraintData = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), r = function () {
        function X() {
            this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray = new Array, this.triangles = new Array, this.polygonPool = new e.Pool(function () {
                return new Array
            }), this.polygonIndicesPool = new e.Pool(function () {
                return new Array
            })
        }

        return X.prototype.triangulate = function (t) {
            for (var e = t, r = t.length >> 1, n = this.indicesArray, i = n.length = 0; i < r; i++) n[i] = i;
            for (var o = this.isConcaveArray, s = (i = o.length = 0, r); i < s; ++i) o[i] = X.isConcave(i, r, e, n);
            var a = this.triangles;
            for (a.length = 0; 3 < r;) {
                for (var u = r - 1, l = (i = 0, 1); ;) {
                    t:if (!o[i]) {
                        for (var h = n[u] << 1, c = n[i] << 1, p = n[l] << 1, d = e[h], f = e[h + 1], m = e[c], g = e[c + 1], v = e[p], y = e[p + 1], _ = (l + 1) % r; _ != u; _ = (_ + 1) % r) if (o[_]) {
                            var x = n[_] << 1, b = e[x], w = e[x + 1];
                            if (X.positiveArea(v, y, d, f, b, w) && X.positiveArea(d, f, m, g, b, w) && X.positiveArea(m, g, v, y, b, w)) break t
                        }
                        break
                    }
                    if (0 == l) {
                        do {
                            if (!o[i]) break;
                            i--
                        } while (0 < i);
                        break
                    }
                    u = i, l = ((i = l) + 1) % r
                }
                a.push(n[(r + i - 1) % r]), a.push(n[i]), a.push(n[(i + 1) % r]), n.splice(i, 1), o.splice(i, 1);
                var T = (--r + i - 1) % r, E = i == r ? 0 : i;
                o[T] = X.isConcave(T, r, e, n), o[E] = X.isConcave(E, r, e, n)
            }
            return 3 == r && (a.push(n[2]), a.push(n[0]), a.push(n[1])), a
        }, X.prototype.decompose = function (t, e) {
            var r = t, n = this.convexPolygons;
            this.polygonPool.freeAll(n), n.length = 0;
            var i = this.convexPolygonsIndices;
            this.polygonIndicesPool.freeAll(i), i.length = 0;
            var o = this.polygonIndicesPool.obtain();
            o.length = 0;
            for (var s = this.polygonPool.obtain(), a = -1, u = s.length = 0, l = 0, h = e.length; l < h; l += 3) {
                var c = e[l] << 1, p = e[l + 1] << 1, d = e[l + 2] << 1, f = r[c], m = r[c + 1], g = r[p], v = r[p + 1],
                    y = r[d], _ = r[d + 1], x = !1;
                if (a == c) {
                    var b = s.length - 4, w = X.winding(s[b], s[b + 1], s[b + 2], s[b + 3], y, _),
                        T = X.winding(y, _, s[0], s[1], s[2], s[3]);
                    w == u && T == u && (s.push(y), s.push(_), o.push(d), x = !0)
                }
                x || (0 < s.length ? (n.push(s), i.push(o)) : (this.polygonPool.free(s), this.polygonIndicesPool.free(o)), (s = this.polygonPool.obtain()).length = 0, s.push(f), s.push(m), s.push(g), s.push(v), s.push(y), s.push(_), (o = this.polygonIndicesPool.obtain()).length = 0, o.push(c), o.push(p), o.push(d), u = X.winding(f, m, g, v, y, _), a = c)
            }
            0 < s.length && (n.push(s), i.push(o));
            for (l = 0, h = n.length; l < h; l++) if (0 != (o = i[l]).length) for (var E = o[0], S = o[o.length - 1], P = (s = n[l])[b = s.length - 4], M = s[b + 1], A = s[b + 2], C = s[b + 3], I = s[0], O = s[1], R = s[2], D = s[3], k = X.winding(P, M, A, C, I, O), L = 0; L < h; L++) if (L != l) {
                var N = i[L];
                if (3 == N.length) {
                    var F = N[0], B = N[1], j = N[2], U = n[L];
                    y = U[U.length - 2], _ = U[U.length - 1];
                    if (F == E && B == S) {
                        w = X.winding(P, M, A, C, y, _), T = X.winding(y, _, I, O, R, D);
                        w == k && T == k && (U.length = 0, N.length = 0, s.push(y), s.push(_), o.push(j), P = A, M = C, A = y, C = _, L = 0)
                    }
                }
            }
            for (l = n.length - 1; 0 <= l; l--) 0 == (s = n[l]).length && (n.splice(l, 1), this.polygonPool.free(s), o = i[l], i.splice(l, 1), this.polygonIndicesPool.free(o));
            return n
        }, X.isConcave = function (t, e, r, n) {
            var i = n[(e + t - 1) % e] << 1, o = n[t] << 1, s = n[(t + 1) % e] << 1;
            return !this.positiveArea(r[i], r[i + 1], r[o], r[o + 1], r[s], r[s + 1])
        }, X.positiveArea = function (t, e, r, n, i, o) {
            return 0 <= t * (o - n) + r * (e - o) + i * (n - e)
        }, X.winding = function (t, e, r, n, i, o) {
            var s = r - t, a = n - e;
            return 0 <= i * a - o * s + s * e - t * a ? 1 : -1
        }, X
    }(), e.Triangulator = r
}(pixi_spine || (pixi_spine = {})), function (t) {
    !function (t) {
        var e = function () {
            function t() {
                this.array = new Array
            }

            return t.prototype.add = function (t) {
                var e = this.contains(t);
                return this.array[0 | t] = 0 | t, !e
            }, t.prototype.contains = function (t) {
                return null != this.array[0 | t]
            }, t.prototype.remove = function (t) {
                this.array[0 | t] = void 0
            }, t.prototype.clear = function () {
                this.array.length = 0
            }, t
        }();
        t.IntSet = e;
        var r = function () {
            function t(t, e, r, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.r = t, this.g = e, this.b = r, this.a = n
            }

            return t.prototype.set = function (t, e, r, n) {
                return this.r = t, this.g = e, this.b = r, this.a = n, this.clamp(), this
            }, t.prototype.setFromColor = function (t) {
                return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
            }, t.prototype.setFromString = function (t) {
                return t = "#" == t.charAt(0) ? t.substr(1) : t, this.r = parseInt(t.substr(0, 2), 16) / 255, this.g = parseInt(t.substr(2, 2), 16) / 255, this.b = parseInt(t.substr(4, 2), 16) / 255, this.a = (8 != t.length ? 255 : parseInt(t.substr(6, 2), 16)) / 255, this
            }, t.prototype.add = function (t, e, r, n) {
                return this.r += t, this.g += e, this.b += r, this.a += n, this.clamp(), this
            }, t.prototype.clamp = function () {
                return this.r < 0 ? this.r = 0 : 1 < this.r && (this.r = 1), this.g < 0 ? this.g = 0 : 1 < this.g && (this.g = 1), this.b < 0 ? this.b = 0 : 1 < this.b && (this.b = 1), this.a < 0 ? this.a = 0 : 1 < this.a && (this.a = 1), this
            }, t.WHITE = new t(1, 1, 1, 1), t.RED = new t(1, 0, 0, 1), t.GREEN = new t(0, 1, 0, 1), t.BLUE = new t(0, 0, 1, 1), t.MAGENTA = new t(1, 0, 1, 1), t
        }();
        t.Color = r;
        var n = function () {
            function r() {
            }

            return r.clamp = function (t, e, r) {
                return t < e ? e : r < t ? r : t
            }, r.cosDeg = function (t) {
                return Math.cos(t * r.degRad)
            }, r.sinDeg = function (t) {
                return Math.sin(t * r.degRad)
            }, r.signum = function (t) {
                return 0 < t ? 1 : t < 0 ? -1 : 0
            }, r.toInt = function (t) {
                return 0 < t ? Math.floor(t) : Math.ceil(t)
            }, r.cbrt = function (t) {
                var e = Math.pow(Math.abs(t), 1 / 3);
                return t < 0 ? -e : e
            }, r.randomTriangular = function (t, e) {
                return r.randomTriangularWith(t, e, .5 * (t + e))
            }, r.randomTriangularWith = function (t, e, r) {
                var n = Math.random(), i = e - t;
                return n <= (r - t) / i ? t + Math.sqrt(n * i * (r - t)) : e - Math.sqrt((1 - n) * i * (e - r))
            }, r.PI2 = 2 * (r.PI = 3.1415927), r.radDeg = r.radiansToDegrees = 180 / r.PI, r.degRad = r.degreesToRadians = r.PI / 180, r
        }();
        t.MathUtils = n;
        var i = function () {
            function t() {
            }

            return t.prototype.apply = function (t, e, r) {
                return t + (e - t) * this.applyInternal(r)
            }, t
        }(), o = function (r) {
            function t(t) {
                var e = r.call(this) || this;
                return e.power = 2, e.power = t, e
            }

            return __extends(t, r), t.prototype.applyInternal = function (t) {
                return t <= .5 ? Math.pow(2 * t, this.power) / 2 : Math.pow(2 * (t - 1), this.power) / (this.power % 2 == 0 ? -2 : 2) + 1
            }, t
        }(t.Interpolation = i), s = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }

            return __extends(t, e), t.prototype.applyInternal = function (t) {
                return Math.pow(t - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
            }, t
        }(t.Pow = o);
        t.PowOut = s;
        var a = function () {
            function n() {
            }

            return n.arrayCopy = function (t, e, r, n, i) {
                for (var o = e, s = n; o < e + i; o++, s++) r[s] = t[o]
            }, n.setArraySize = function (t, e, r) {
                void 0 === r && (r = 0);
                var n = t.length;
                if (n == e) return t;
                if (n < (t.length = e)) for (var i = n; i < e; i++) t[i] = r;
                return t
            }, n.ensureArrayCapacity = function (t, e, r) {
                return void 0 === r && (r = 0), t.length >= e ? t : n.setArraySize(t, e, r)
            }, n.newArray = function (t, e) {
                for (var r = new Array(t), n = 0; n < t; n++) r[n] = e;
                return r
            }, n.newFloatArray = function (t) {
                if (n.SUPPORTS_TYPED_ARRAYS) return new Float32Array(t);
                for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = 0;
                return e
            }, n.newShortArray = function (t) {
                if (n.SUPPORTS_TYPED_ARRAYS) return new Int16Array(t);
                for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = 0;
                return e
            }, n.toFloatArray = function (t) {
                return n.SUPPORTS_TYPED_ARRAYS ? new Float32Array(t) : t
            }, n.toSinglePrecision = function (t) {
                return n.SUPPORTS_TYPED_ARRAYS ? Math.fround(t) : t
            }, n.webkit602BugfixHelper = function (t, e) {
            }, n.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array, n
        }();
        t.Utils = a;
        var u = function () {
            function t() {
            }

            return t.logBones = function (t) {
                for (var e = 0; e < t.bones.length; e++) {
                    var r = t.bones[e], n = r.matrix;
                    console.log(r.data.name + ", " + n.a + ", " + n.b + ", " + n.c + ", " + n.d + ", " + n.tx + ", " + n.ty)
                }
            }, t
        }();
        t.DebugUtils = u;
        var l = function () {
            function t(t) {
                this.items = new Array, this.instantiator = t
            }

            return t.prototype.obtain = function () {
                return 0 < this.items.length ? this.items.pop() : this.instantiator()
            }, t.prototype.free = function (t) {
                t.reset && t.reset(), this.items.push(t)
            }, t.prototype.freeAll = function (t) {
                for (var e = 0; e < t.length; e++) t[e].reset && t[e].reset(), this.items[e] = t[e]
            }, t.prototype.clear = function () {
                this.items.length = 0
            }, t
        }();
        t.Pool = l;
        var h = function () {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
            }

            return t.prototype.set = function (t, e) {
                return this.x = t, this.y = e, this
            }, t.prototype.length = function () {
                var t = this.x, e = this.y;
                return Math.sqrt(t * t + e * e)
            }, t.prototype.normalize = function () {
                var t = this.length();
                return 0 != t && (this.x /= t, this.y /= t), this
            }, t
        }();
        t.Vector2 = h;
        var c = function () {
            function t() {
                this.maxDelta = .064, this.framesPerSecond = 0, this.delta = 0, this.totalTime = 0, this.lastTime = Date.now() / 1e3, this.frameCount = 0, this.frameTime = 0
            }

            return t.prototype.update = function () {
                var t = Date.now() / 1e3;
                this.delta = t - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = t, this.frameCount++, 1 < this.frameTime && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0)
            }, t
        }();
        t.TimeKeeper = c;
        var p = function () {
            function t(t) {
                void 0 === t && (t = 32), this.addedValues = 0, this.lastValue = 0, this.mean = 0, this.dirty = !0, this.values = new Array(t)
            }

            return t.prototype.hasEnoughData = function () {
                return this.addedValues >= this.values.length
            }, t.prototype.addValue = function (t) {
                this.addedValues < this.values.length && this.addedValues++, this.values[this.lastValue++] = t, this.lastValue > this.values.length - 1 && (this.lastValue = 0), this.dirty = !0
            }, t.prototype.getMean = function () {
                if (this.hasEnoughData()) {
                    if (this.dirty) {
                        for (var t = 0, e = 0; e < this.values.length; e++) t += this.values[e];
                        this.mean = t / this.values.length, this.dirty = !1
                    }
                    return this.mean
                }
                return 0
            }, t
        }();
        t.WindowedMean = p
    }(t.core || (t.core = {}))
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r, n;
    e = t.core || (t.core = {}), r = function (t) {
        if (null == t) throw new Error("name cannot be null.");
        this.name = t
    }, n = function (r) {
        function n(t) {
            var e = r.call(this, t) || this;
            return e.id = (65535 & n.nextID++) << 11, e.worldVerticesLength = 0, e
        }

        return __extends(n, r), n.prototype.computeWorldVerticesOld = function (t, e) {
            this.computeWorldVertices(t, 0, this.worldVerticesLength, e, 0, 2)
        }, n.prototype.computeWorldVertices = function (t, e, r, n, i, o) {
            r = i + (r >> 1) * o;
            var s = t.bone.skeleton, a = t.attachmentVertices, u = this.vertices, l = this.bones;
            if (null != l) {
                for (var h = 0, c = 0, p = 0; p < e; p += 2) {
                    h += (g = l[h]) + 1, c += g
                }
                var d = s.bones;
                if (0 == a.length) for (A = i, E = 3 * c; A < r; A += o) {
                    var f = 0, m = 0, g = l[h++];
                    for (g += h; h < g; h++, E += 3) {
                        x = d[l[h]].matrix, C = u[E], I = u[E + 1];
                        var v = u[E + 2];
                        f += (C * x.a + I * x.c + x.tx) * v, m += (C * x.b + I * x.d + x.ty) * v
                    }
                    n[A] = f, n[A + 1] = m
                } else for (var y = a, _ = (A = i, E = 3 * c, c << 1); A < r; A += o) {
                    f = 0, m = 0, g = l[h++];
                    for (g += h; h < g; h++, E += 3, _ += 2) {
                        x = d[l[h]].matrix, C = u[E] + y[_], I = u[E + 1] + y[_ + 1], v = u[E + 2];
                        f += (C * x.a + I * x.c + x.tx) * v, m += (C * x.b + I * x.d + x.ty) * v
                    }
                    n[A] = f, n[A + 1] = m
                }
            } else {
                0 < a.length && (u = a);
                for (var x, b = (x = t.bone.matrix).tx, w = x.ty, T = x.a, E = x.c, S = x.b, P = x.d, M = e, A = i; A < r; M += 2, A += o) {
                    var C = u[M], I = u[M + 1];
                    n[A] = C * T + I * E + b, n[A + 1] = C * S + I * P + w
                }
            }
        }, n.prototype.applyDeform = function (t) {
            return this == t
        }, n.nextID = 0, n
    }(e.Attachment = r), e.VertexAttachment = n
}(pixi_spine || (pixi_spine = {})), function (t) {
    var e, r;
    e = t.core || (t.core = {}), (r = e.AttachmentType || (e.AttachmentType = {}))[r.Region = 0] = "Region", r[r.BoundingBox = 1] = "BoundingBox", r[r.Mesh = 2] = "Mesh", r[r.LinkedMesh = 3] = "LinkedMesh", r[r.Path = 4] = "Path", r[r.Point = 5] = "Point"
}(pixi_spine || (pixi_spine = {})), function (t) {
    var n, e;
    n = t.core || (t.core = {}), e = function (r) {
        function t(t) {
            var e = r.call(this, t) || this;
            return e.color = new n.Color(1, 1, 1, 1), e
        }

        return __extends(t, r), t
    }(n.VertexAttachment), n.BoundingBoxAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var n, e;
    n = t.core || (t.core = {}), e = function (r) {
        function t(t) {
            var e = r.call(this, t) || this;
            return e.color = new n.Color(.2275, .2275, .8078, 1), e
        }

        return __extends(t, r), t
    }(n.VertexAttachment), n.ClippingAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var d, e;
    d = t.core || (t.core = {}), e = function (r) {
        function t(t) {
            var e = r.call(this, t) || this;
            return e.color = new d.Color(1, 1, 1, 1), e.inheritDeform = !1, e.tempColor = new d.Color(0, 0, 0, 0), e
        }

        return __extends(t, r), t.prototype.updateUVs = function (t, e) {
            var r = this.regionUVs.length;
            if (e && e.length == r || (e = d.Utils.newFloatArray(r)), null != t) {
                for (var n = t.texture._uvs, i = t.width, o = t.height, s = t.originalWidth, a = t.originalHeight, u = t.offsetX, l = t.pixiOffsetY, h = 0; h < r; h += 2) {
                    var c = this.regionUVs[h], p = this.regionUVs[h + 1];
                    c = (c * s - u) / i, p = (p * a - l) / o, e[h] = (n.x0 * (1 - c) + n.x1 * c) * (1 - p) + (n.x3 * (1 - c) + n.x2 * c) * p, e[h + 1] = (n.y0 * (1 - c) + n.y1 * c) * (1 - p) + (n.y3 * (1 - c) + n.y2 * c) * p
                }
                return e
            }
        }, t.prototype.applyDeform = function (t) {
            return this == t || this.inheritDeform && this.parentMesh == t
        }, t.prototype.getParentMesh = function () {
            return this.parentMesh
        }, t.prototype.setParentMesh = function (t) {
            null != (this.parentMesh = t) && (this.bones = t.bones, this.vertices = t.vertices, this.worldVerticesLength = t.worldVerticesLength, this.regionUVs = t.regionUVs, this.triangles = t.triangles, this.hullLength = t.hullLength, this.worldVerticesLength = t.worldVerticesLength)
        }, t
    }(d.VertexAttachment), d.MeshAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var n, e;
    n = t.core || (t.core = {}), e = function (r) {
        function t(t) {
            var e = r.call(this, t) || this;
            return e.closed = !1, e.constantSpeed = !1, e.color = new n.Color(1, 1, 1, 1), e
        }

        return __extends(t, r), t
    }(n.VertexAttachment), n.PathAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var s, e;
    s = t.core || (t.core = {}), e = function (r) {
        function t(t) {
            var e = r.call(this, t) || this;
            return e.color = new s.Color(.38, .94, 0, 1), e
        }

        return __extends(t, r), t.prototype.computeWorldPosition = function (t, e) {
            var r = t.matrix;
            return e.x = this.x * r.a + this.y * r.c + t.worldX, e.y = this.x * r.b + this.y * r.d + t.worldY, e
        }, t.prototype.computeWorldRotation = function (t) {
            var e = t.matrix, r = s.MathUtils.cosDeg(this.rotation), n = s.MathUtils.sinDeg(this.rotation),
                i = r * e.a + n * e.c, o = r * e.b + n * e.d;
            return Math.atan2(o, i) * s.MathUtils.radDeg
        }, t
    }(s.VertexAttachment), s.PointAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var n, e;
    n = t.core || (t.core = {}), e = function (r) {
        function y(t) {
            var e = r.call(this, t) || this;
            return e.x = 0, e.y = 0, e.scaleX = 1, e.scaleY = 1, e.rotation = 0, e.width = 0, e.height = 0, e.color = new n.Color(1, 1, 1, 1), e.offset = n.Utils.newFloatArray(8), e.uvs = n.Utils.newFloatArray(8), e.tempColor = new n.Color(1, 1, 1, 1), e
        }

        return __extends(y, r), y.prototype.updateOffset = function () {
            var t = this.width / this.region.originalWidth * this.scaleX,
                e = this.height / this.region.originalHeight * this.scaleY,
                r = -this.width / 2 * this.scaleX + this.region.offsetX * t,
                n = -this.height / 2 * this.scaleY + this.region.offsetY * e, i = r + this.region.width * t,
                o = n + this.region.height * e, s = this.rotation * Math.PI / 180, a = Math.cos(s), u = Math.sin(s),
                l = r * a + this.x, h = r * u, c = n * a + this.y, p = n * u, d = i * a + this.x, f = i * u,
                m = o * a + this.y, g = o * u, v = this.offset;
            v[y.OX1] = l - p, v[y.OY1] = c + h, v[y.OX2] = l - g, v[y.OY2] = m + h, v[y.OX3] = d - g, v[y.OY3] = m + f, v[y.OX4] = d - p, v[y.OY4] = c + f
        }, y.prototype.setRegion = function (t) {
            this.region = t;
            var e = this.uvs;
            t.rotate ? (e[2] = t.u, e[3] = t.v2, e[4] = t.u, e[5] = t.v, e[6] = t.u2, e[7] = t.v, e[0] = t.u2, e[1] = t.v2) : (e[0] = t.u, e[1] = t.v2, e[2] = t.u, e[3] = t.v, e[4] = t.u2, e[5] = t.v, e[6] = t.u2, e[7] = t.v2)
        }, y.prototype.computeWorldVertices = function (t, e, r, n) {
            var i = this.offset, o = t.matrix, s = o.tx, a = o.ty, u = o.a, l = o.c, h = o.b, c = o.d, p = 0, d = 0;
            p = i[y.OX1], d = i[y.OY1], e[r] = p * u + d * l + s, e[r + 1] = p * h + d * c + a, r += n, p = i[y.OX2], d = i[y.OY2], e[r] = p * u + d * l + s, e[r + 1] = p * h + d * c + a, r += n, p = i[y.OX3], d = i[y.OY3], e[r] = p * u + d * l + s, e[r + 1] = p * h + d * c + a, r += n, p = i[y.OX4], d = i[y.OY4], e[r] = p * u + d * l + s, e[r + 1] = p * h + d * c + a
        }, y.OX1 = 0, y.OY1 = 1, y.OX2 = 2, y.OY2 = 3, y.OX3 = 4, y.OY3 = 5, y.OX4 = 6, y.OY4 = 7, y.X1 = 0, y.Y1 = 1, y.C1R = 2, y.C1G = 3, y.C1B = 4, y.C1A = 5, y.U1 = 6, y.V1 = 7, y.X2 = 8, y.Y2 = 9, y.C2R = 10, y.C2G = 11, y.C2B = 12, y.C2A = 13, y.U2 = 14, y.V2 = 15, y.X3 = 16, y.Y3 = 17, y.C3R = 18, y.C3G = 19, y.C3B = 20, y.C3A = 21, y.U3 = 22, y.V3 = 23, y.X4 = 24, y.Y4 = 25, y.C4R = 26, y.C4G = 27, y.C4B = 28, y.C4A = 29, y.U4 = 30, y.V4 = 31, y
    }(n.Attachment), n.RegionAttachment = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var i, e;
    i = t.core || (t.core = {}), e = function () {
        function t(t, e) {
            this.jitterX = 0, this.jitterY = 0, this.jitterX = t, this.jitterY = e
        }

        return t.prototype.begin = function (t) {
        }, t.prototype.transform = function (t, e, r, n) {
            t.x += i.MathUtils.randomTriangular(-this.jitterX, this.jitterY), t.y += i.MathUtils.randomTriangular(-this.jitterX, this.jitterY)
        }, t.prototype.end = function () {
        }, t
    }(), i.JitterEffect = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    var p, e;
    p = t.core || (t.core = {}), e = function () {
        function c(t) {
            this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius = t
        }

        return c.prototype.begin = function (t) {
            this.worldX = t.x + this.centerX, this.worldY = t.y + this.centerY
        }, c.prototype.transform = function (t, e, r, n) {
            var i = this.angle * p.MathUtils.degreesToRadians, o = t.x - this.worldX, s = t.y - this.worldY,
                a = Math.sqrt(o * o + s * s);
            if (a < this.radius) {
                var u = c.interpolation.apply(0, i, (this.radius - a) / this.radius), l = Math.cos(u), h = Math.sin(u);
                t.x = l * o - h * s + this.worldX, t.y = h * o + l * s + this.worldY
            }
        }, c.prototype.end = function () {
        }, c.interpolation = new p.PowOut(2), c
    }(), p.SwirlEffect = e
}(pixi_spine || (pixi_spine = {})), function (t) {
    PIXI.spine = t;
    var e = PIXI.Texture.prototype;
    e._updateUvs || (e._updateUvs = e.updateUvs)
}(pixi_spine || (pixi_spine = {})), function (f) {
    function t() {
        return function (r, n) {
            if (!r.data || r.type !== PIXI.loaders.Resource.TYPE.JSON || !r.data.bones) return n();
            var t = r.metadata || {}, i = t ? r.metadata.spineSkeletonScale : null,
                e = t ? r.metadata.spineAtlas : null;
            if (!1 === e) return n();
            if (e && e.pages) {
                var o = new f.core.SkeletonJson(new f.core.AtlasAttachmentLoader(e)).readSkeletonData(r.data);
                return r.spineData = o, r.spineAtlas = e, n()
            }
            var s = t.spineAtlasSuffix || ".atlas", a = r.url.substr(0, r.url.lastIndexOf(".")) + s;
            r.metadata && r.metadata.spineAtlasFile && (a = r.metadata.spineAtlasFile), a = a.replace(this.baseUrl, "");
            var u = {
                    crossOrigin: r.crossOrigin,
                    xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.TEXT,
                    metadata: t.spineMetadata || null,
                    parentResource: r
                }, l = {crossOrigin: r.crossOrigin, metadata: t.imageMetadata || null, parentResource: r},
                h = r.url.substr(0, r.url.lastIndexOf("/") + 1);
            h = h.replace(this.baseUrl, "");
            var c = t.imageNamePrefix || r.name + "_atlas_page_",
                p = t.images ? g(t.images) : t.image ? g({default: t.image}) : t.imageLoader ? t.imageLoader(this, c, h, l) : m(this, c, h, l),
                d = function (t) {
                    new f.core.TextureAtlas(t, p, function (t) {
                        var e = new f.core.SkeletonJson(new f.core.AtlasAttachmentLoader(t));
                        i && (e.scale = i), r.spineData = e.readSkeletonData(r.data), r.spineAtlas = t, n()
                    })
                };
            r.metadata && r.metadata.atlasRawData ? d(r.metadata.atlasRawData) : this.add(r.name + "_atlas", a, u, function (t) {
                d(t.xhr.responseText)
            })
        }
    }

    function m(s, a, u, l) {
        return u && u.lastIndexOf("/") !== u.length - 1 && (u += "/"), function (t, e) {
            var r = a + t, n = u + t, i = s.resources[r];
            if (i) {
                var o = function () {
                    e(i.texture.baseTexture)
                };
                i.texture ? o() : i.onAfterMiddleware.add(o)
            } else s.add(r, n, l, function (t) {
                e(t.texture.baseTexture)
            })
        }
    }

    function g(n) {
        return function (t, e) {
            var r = n[t] || n.default;
            r && r.baseTexture ? e(r.baseTexture) : e(r)
        }
    }

    f.atlasParser = t, f.imageLoaderAdapter = m, f.syncImageLoaderAdapter = function (t, r) {
        return t && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), function (t, e) {
            e(PIXI.BaseTexture.fromImage(t, r))
        }
    }, f.staticImageLoader = g, PIXI.loaders.Loader.addPixiMiddleware(t), PIXI.loader.use(t())
}(pixi_spine || (pixi_spine = {})), function () {
    var e;
    Math.fround || (Math.fround = Math.fround = (e = new Float32Array(1), function (t) {
        return e[0] = t, e[0]
    }))
}(), function (I) {
    I.core.Bone.yDown = !0;
    var O = [0, 0, 0], r = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.region = null, t
        }

        return __extends(t, e), t
    }(PIXI.Sprite);
    I.SpineSprite = r;
    var o = function (o) {
        function t(t, e, r, n, i) {
            return o.call(this, t, e, r, n, i) || this
        }

        return __extends(t, o), t
    }(PIXI.mesh.Mesh);
    I.SpineMesh = o;
    var t = function (h) {
        function e(t) {
            var e = h.call(this) || this;
            if (!t) throw new Error("The spineData param is required.");
            if ("string" == typeof t) throw new Error('spineData param cant be string. Please use spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now on.');
            e.spineData = t, e.skeleton = new I.core.Skeleton(t), e.skeleton.updateWorldTransform(), e.stateData = new I.core.AnimationStateData(t), e.state = new I.core.AnimationState(e.stateData), e.slotContainers = [], e.tempClipContainers = [];
            for (var r = 0, n = e.skeleton.slots.length; r < n; r++) {
                var i = e.skeleton.slots[r], o = i.attachment, s = e.newContainer();
                if (e.slotContainers.push(s), e.addChild(s), e.tempClipContainers.push(null), o instanceof I.core.RegionAttachment) {
                    var a = o.region.name, u = e.createSprite(i, o, a);
                    i.currentSprite = u, i.currentSpriteName = a, s.addChild(u)
                } else if (o instanceof I.core.MeshAttachment) {
                    var l = e.createMesh(i, o);
                    i.currentMesh = l, i.currentMeshName = o.name, s.addChild(l)
                } else {
                    if (!(o instanceof I.core.ClippingAttachment)) continue;
                    e.createGraphics(i, o), s.addChild(i.clippingContainer), s.addChild(i.currentGraphics)
                }
            }
            return e.autoUpdate = !0, e.tintRgb = new Float32Array([1, 1, 1]), e
        }

        return __extends(e, h), Object.defineProperty(e.prototype, "autoUpdate", {
            get: function () {
                return this.updateTransform === e.prototype.autoUpdateTransform
            }, set: function (t) {
                this.updateTransform = t ? e.prototype.autoUpdateTransform : PIXI.Container.prototype.updateTransform
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "tint", {
            get: function () {
                return PIXI.utils.rgb2hex(this.tintRgb)
            }, set: function (t) {
                this.tintRgb = PIXI.utils.hex2rgb(t, this.tintRgb)
            }, enumerable: !0, configurable: !0
        }), e.prototype.update = function (t) {
            this.state.update(t), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
            var e = this.skeleton.slots, r = this.color, n = null, i = null;
            r ? (n = r.light, i = r.dark) : n = this.tintRgb;
            for (var o = PIXI.TransformBase && 1 == this.transformHack(), s = 0, a = e.length; s < a; s++) {
                var u = (A = e[s]).attachment, l = this.slotContainers[s];
                if (u) {
                    var h = null, c = u.color;
                    if (u instanceof I.core.RegionAttachment) {
                        var p = u.region;
                        if (p) {
                            A.currentMesh && (A.currentMesh.visible = !1, A.currentMesh = null, A.currentMeshName = void 0);
                            var d = p;
                            if (!A.currentSpriteName || A.currentSpriteName !== d.name) {
                                var f = d.name;
                                if (A.currentSprite && (A.currentSprite.visible = !1), A.sprites = A.sprites || {}, void 0 !== A.sprites[f]) A.sprites[f].visible = !0; else {
                                    var m = this.createSprite(A, u, f);
                                    l.addChild(m)
                                }
                                A.currentSprite = A.sprites[f], A.currentSpriteName = f
                            }
                        }
                        if (l.transform) {
                            var g = y = l.transform, v = null;
                            g.matrix2d ? (v = g.matrix2d, g._dirtyVersion++, g.version = g._dirtyVersion, g.isStatic = !0, g.operMode = 0) : o ? (g.position && ((y = new PIXI.TransformBase)._parentID = -1, y._worldID = l.transform._worldID, l.transform = y), v = y.localTransform) : g.setFromMatrix(A.bone.matrix), v && A.bone.matrix.copy(v)
                        } else {
                            v = l.localTransform || new PIXI.Matrix;
                            A.bone.matrix.copy(v), l.localTransform = v, l.displayObjectUpdateTransform = R
                        }
                        A.currentSprite.color ? h = A.currentSprite.color : (O[0] = n[0] * A.color.r * c.r, O[1] = n[1] * A.color.g * c.g, O[2] = n[2] * A.color.b * c.b, A.currentSprite.tint = PIXI.utils.rgb2hex(O)), A.currentSprite.blendMode = A.blendMode
                    } else if (u instanceof I.core.MeshAttachment) {
                        var y;
                        if (A.currentSprite) if (A.currentSprite.visible = !1, A.currentSprite = null, A.currentSpriteName = void 0, l.transform) (y = new PIXI.TransformStatic)._parentID = -1, y._worldID = l.transform._worldID, l.transform = y; else l.localTransform = new PIXI.Matrix, l.displayObjectUpdateTransform = PIXI.DisplayObject.prototype.updateTransform;
                        if (!A.currentMeshName || A.currentMeshName !== u.name) {
                            var _ = u.name;
                            if (A.currentMesh && (A.currentMesh.visible = !1), A.meshes = A.meshes || {}, void 0 !== A.meshes[_]) A.meshes[_].visible = !0; else {
                                var x = this.createMesh(A, u);
                                l.addChild(x)
                            }
                            A.currentMesh = A.meshes[_], A.currentMeshName = _
                        }
                        if (u.computeWorldVerticesOld(A, A.currentMesh.vertices), A.currentMesh.color) h = A.currentMesh.color; else if ("3" !== PIXI.VERSION[0]) {
                            var b = A.currentMesh.tintRgb;
                            b[0] = n[0] * A.color.r * c.r, b[1] = n[1] * A.color.g * c.g, b[2] = n[2] * A.color.b * c.b
                        }
                        A.currentMesh.blendMode = A.blendMode
                    } else {
                        if (!(u instanceof I.core.ClippingAttachment)) {
                            l.visible = !1;
                            continue
                        }
                        A.currentGraphics || (this.createGraphics(A, u), l.addChild(A.clippingContainer), l.addChild(A.currentGraphics)), this.updateGraphics(A, u)
                    }
                    if (l.visible = !0, h) {
                        var w = A.color.r * c.r, T = A.color.g * c.g, E = A.color.b * c.b;
                        h.setLight(n[0] * w + i[0] * (1 - w), n[1] * T + i[1] * (1 - T), n[2] * E + i[2] * (1 - E)), E = A.darkColor ? (w = A.darkColor.r, T = A.darkColor.g, A.darkColor.b) : T = w = 0, h.setDark(n[0] * w + i[0] * (1 - w), n[1] * T + i[1] * (1 - T), n[2] * E + i[2] * (1 - E))
                    }
                    l.alpha = A.color.a
                } else l.visible = !1
            }
            var S = this.skeleton.drawOrder, P = null, M = null;
            for (s = 0, a = S.length; s < a; s++) {
                var A = e[S[s].data.index];
                l = this.slotContainers[S[s].data.index];
                if (M || l.parent !== this && (l.parent.removeChild(l), l.parent = this), A.currentGraphics && A.attachment) M = A.clippingContainer, P = A.attachment, M.children.length = 0, this.children[s] = l, P.endSlot == A.data && (P.endSlot = null); else if (M) {
                    var C = this.tempClipContainers[s];
                    C || ((C = this.tempClipContainers[s] = this.newContainer()).visible = !1), this.children[s] = C, l.parent = null, M.addChild(l), P.endSlot == A.data && (M.renderable = !0, P = M = null)
                } else this.children[s] = l
            }
        }, e.prototype.setSpriteRegion = function (t, e, r) {
            e.region = r, e.texture = r.texture, r.size ? (e.scale.x = r.size.width / r.originalWidth, e.scale.y = -r.size.height / r.originalHeight) : (e.scale.x = t.scaleX * t.width / r.originalWidth, e.scale.y = -t.scaleY * t.height / r.originalHeight)
        }, e.prototype.setMeshRegion = function (t, e, r) {
            e.region = r, e.texture = r.texture, r.texture._updateUvs(), t.updateUVs(r, e.uvs), e.dirty++
        }, e.prototype.autoUpdateTransform = function () {
            if (e.globalAutoUpdate) {
                this.lastTime = this.lastTime || Date.now();
                var t = .001 * (Date.now() - this.lastTime);
                this.lastTime = Date.now(), this.update(t)
            } else this.lastTime = 0;
            PIXI.Container.prototype.updateTransform.call(this)
        }, e.prototype.createSprite = function (t, e, r) {
            var n = e.region;
            t.tempAttachment === e && (n = t.tempRegion, t.tempAttachment = null, t.tempRegion = null);
            var i = n.texture, o = this.newSprite(i);
            return o.rotation = e.rotation * I.core.MathUtils.degRad, o.anchor.x = .5, o.anchor.y = .5, o.position.x = e.x, o.position.y = e.y, o.alpha = e.color.a, o.region = e.region, this.setSpriteRegion(e, o, e.region), t.sprites = t.sprites || {}, t.sprites[r] = o
        }, e.prototype.createMesh = function (t, e) {
            var r = e.region;
            t.tempAttachment === e && (r = t.tempRegion, t.tempAttachment = null, t.tempRegion = null);
            var n = this.newMesh(r.texture, new Float32Array(e.regionUVs.length), new Float32Array(e.regionUVs.length), new Uint16Array(e.triangles), PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
            return n.canvasPadding = 1.5, n.alpha = e.color.a, n.region = e.region, this.setMeshRegion(e, n, r), t.meshes = t.meshes || {}, t.meshes[e.name] = n
        }, e.prototype.createGraphics = function (t, e) {
            var r = this.newGraphics(), n = new PIXI.Polygon([]);
            return r.clear(), r.beginFill(16777215, 1), r.drawPolygon(n), r.renderable = !1, t.currentGraphics = r, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, r
        }, e.prototype.updateGraphics = function (t, e) {
            var r = t.currentGraphics.graphicsData[0].shape.points, n = e.worldVerticesLength;
            r.length = n, e.computeWorldVertices(t, 0, n, r, 0, 2), t.currentGraphics.dirty++, t.currentGraphics.clearDirty++
        }, e.prototype.hackTextureBySlotIndex = function (t, e, r) {
            void 0 === e && (e = null), void 0 === r && (r = null);
            var n = this.skeleton.slots[t];
            if (!n) return !1;
            var i = n.attachment, o = i.region;
            return e && ((o = new I.core.TextureRegion).texture = e, o.size = r), n.currentSprite && n.currentSprite.region != o ? (this.setSpriteRegion(i, n.currentSprite, o), n.currentSprite.region = o) : n.currentMesh && n.currentMesh.region != o ? this.setMeshRegion(i, n.currentMesh, o) : (n.tempRegion = o, n.tempAttachment = i), !0
        }, e.prototype.hackTextureBySlotName = function (t, e, r) {
            void 0 === e && (e = null), void 0 === r && (r = null);
            var n = this.skeleton.findSlotIndex(t);
            return -1 != n && this.hackTextureBySlotIndex(n, e, r)
        }, e.prototype.newContainer = function () {
            return new PIXI.Container
        }, e.prototype.newSprite = function (t) {
            return new r(t)
        }, e.prototype.newGraphics = function () {
            return new PIXI.Graphics
        }, e.prototype.newMesh = function (t, e, r, n, i) {
            return new o(t, e, r, n, i)
        }, e.prototype.transformHack = function () {
            return 1
        }, e.prototype.destroy = function (t) {
            for (var e = 0, r = this.skeleton.slots.length; e < r; e++) {
                var n = this.skeleton.slots[e];
                for (var i in n.meshes) n.meshes[i].destroy(t);
                for (var o in n.meshes = null, n.sprites) n.sprites[o].destroy(t);
                n.sprites = null
            }
            for (e = 0, r = this.slotContainers.length; e < r; e++) this.slotContainers[e].destroy(t);
            this.spineData = null, this.skeleton = null, this.slotContainers = null, this.stateData = null, this.state = null, this.tempClipContainers = null, h.prototype.destroy.call(this, t)
        }, e.globalAutoUpdate = !0, e.clippingPolygon = [], e
    }(PIXI.Container);

    function R() {
        var t = this.parent.worldTransform, e = this.worldTransform, r = this.localTransform;
        e.a = r.a * t.a + r.b * t.c, e.b = r.a * t.b + r.b * t.d, e.c = r.c * t.a + r.d * t.c, e.d = r.c * t.b + r.d * t.d, e.tx = r.tx * t.a + r.ty * t.c + t.tx, e.ty = r.tx * t.b + r.ty * t.d + t.ty, this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null
    }

    I.Spine = t
}(pixi_spine || (pixi_spine = {}));

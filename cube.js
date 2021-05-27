(
    function () {
        "use strinct";
        function e(e, t, o) {
            function a() {
                for (
                    var e = Math.cos,
                    a = [
                        new THREE.Vector3(1, 1, 1),
                        new THREE.Vector3(1, 1, -1),
                        new THREE.Vector3(-1, 1, -1),
                        new THREE.Vector3(-1, 1, 1),
                        new THREE.Vector3(1, -1, 1),
                        new THREE.Vector3(1, -1, -1),
                        new THREE.Vector3(-1, -1, -1),
                        new THREE.Vector3(-1, -1, 1),

                    ],
                    s = 0;
                    8 > s;
                    s = s + 1
                )
                    C.push([]),
                        L.push([]);
                for (var r = i / 2, l = new THREE.Vector3(b, f, z), c = 0; c <= 0; c++) {
                    var m = c / o,
                        d = m * r,
                        g = e(d),
                        p = n(d);
                    if (c == 0) {
                        M.set(0, 1, 0)
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);
                        continue;


                    }

                    for (var S = 0; S <= 0; S++) {
                        var w = S / o,
                            u = w * r;
                        (M.x = g * e(u)),
                            (M.y = p),
                            (M.z = g * n(u));
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);



                    }

                }

                for (var T = 1; 8 > T; T++)
                    for (var h, s = 0; s < C[0].length; s++) {
                        (h = C[0][s].clone().multiply(a[T])),
                            C[T].push(h),
                            A.push(h);
                        var v = L[0][s].clone().multiply(a[T])
                        L[T].push(v), E.push(v);


                    }
            }

            function s() {
                for (var e, t = [!0, !1, !0, !1, !1, !0, !1, !0], s = x * (o - 1), r = 0; 8 > r; r++) {

                    e = _ * r;
                    for (var n = 0; n < o - 1; n++)
                        for (var l = n * x, m = (n + 1) * x, g = 0; g < o; g++) {
                            var p = g + 1,
                                h = e + l + g,
                                y = e + l + p,
                                f = e + m + g,
                                z = e + m + p;
                            t[r] ? (P.push(h), P.push(f), P.push(y), P.push(y), P.push(f), P.push(z)) :
                                (P.push(h), P.push(y), P.push(f), P.push(y), P.push(z), P.push(f))

                        }

                    for (var g = 0; g < o; g++) {

                        var h = e + s + g,
                            y = e + s + g + 1,
                            f = e + D;
                        t[r] ? (P.push(h), P.push(f), P.push(y)) :
                            (P.push(h), P.push(y), P.push(f))

                    }
                }

            }
            function r() {
                var e = D,
                    t = D + _,
                    s = D + 2 * _,
                    r = D + 3 * _;
                P.push(e),
                    P.push(t),
                    P.push(s),
                    P.push(e),
                    P.push(s),
                    P.push(r),
                    (e = D + 4 * _),
                    (t = D + 5 * _),
                    (s = D + 6 * _),
                    (r = D + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(e),
                    P.push(r),
                    P.push(s),
                    (e = 0), (t = _), (s = 4 * _), (r = 5 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 2 * _),
                    (t = 3 * _),
                    (s = 6 * _),
                    (r = 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 3 * _), (s = o + 4 * _), (r = o + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 2 * _), (s = o + 5 * _), (r = o + 6 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r);
            }

            function m() {
                for (var e = 0; 4 > e; e++)
                    for (var t = e * _, s = 4 * _ + t, r = !0 & e, n = 0; n < o; n++) {
                        var l = n + 1,
                            m = t + n,
                            a = t + l,
                            g = s + n,
                            c = s + l;
                        r ? (P.push(m), P.push(g), P.push(a), P.push(a), P.push(g), P.push(c)) :
                            (P.push(m), P.push(a), P.push(g), P.push(a), P.push(c), P.push(g))
                    }

            }

            function u() {
                for (var e = [0, 2, 4, 6], t = [1, 3, 5, 7], s = 0; 4 > s; s++)
                    for (var r = _ * e[s], n = _ * t[s], l = 1 >= s, m = 0; m < o; m++) {
                        var g = m * x,
                            t = (m + 1) * x,
                            h = r + g,
                            a = r + p,
                            y = n + g,
                            c = n + p;
                        l ? (P.push(h), P.push(y), P.push(a), P.push(a), P.push(y), P.push(c)) :
                            (P.push(h), P.push(a), P.push(y), P.push(a), P.push(c), P.push(y))



                    }

            }
            function g() {
                for (e = o - 1, t = [0, 1, 4, 5], s = [3, 2, 7, 6], r = [0, 1, 1, 0], n = 0; 4 > n; n++)
                    for (var l = t[n] * _, m = s[n] * _, g = 0; g <= e; g++) {

                        var p = l + o + g * x,
                            a = l + (g == e ? _ - 1 : o + (g + 1) * x),
                            h = m + o + g * x,
                            c = m + (g == e ? _ - 1 : o + (g + 1) * x);
                        r[n] ? (P.push(p), P.push(h), P.push(a), P.push(a), P.push(h), P.push(c)) :
                            (P.push(p), P.push(a), P.push(h), P.push(a), P.push(c), P.push(h))
                    }

            }

        }

    }


)
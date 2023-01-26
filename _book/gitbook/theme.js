!(function r(o, i, a) {
  function s(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var n = 'function' == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            'MODULE_NOT_FOUND'),
          e)
        );
      }
      (n = i[t] = { exports: {} }),
        o[t][0].call(
          n.exports,
          function (e) {
            return s(o[t][1][e] || e);
          },
          n,
          n.exports,
          r,
          o,
          i,
          a
        );
    }
    return i[t].exports;
  }
  for (
    var u = 'function' == typeof require && require, e = 0;
    e < a.length;
    e++
  )
    s(a[e]);
  return s;
})(
  {
    1: [
      function (e, A, N) {
        !function (S) {
          !function () {
            var e = this,
              t = 'object' == typeof N && N && !N.nodeType && N,
              n = 'object' == typeof A && A && !A.nodeType && A,
              r = 'object' == typeof S && S;
            (r.global !== r && r.window !== r && r.self !== r) || (e = r);
            var o,
              i,
              m = 2147483647,
              y = 36,
              v = 26,
              a = 38,
              s = 700,
              u = /^xn--/,
              l = /[^\x20-\x7E]/,
              c = /[\x2E\u3002\uFF0E\uFF61]/g,
              f = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
              },
              p = y - 1,
              b = Math.floor,
              x = String.fromCharCode;
            function w(e) {
              throw new RangeError(f[e]);
            }
            function h(e, t) {
              for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
              return r;
            }
            function d(e, t) {
              var n = e.split('@'),
                r = '',
                n =
                  (1 < n.length && ((r = n[0] + '@'), (e = n[1])),
                  (e = e.replace(c, '.')).split('.'));
              return r + h(n, t).join('.');
            }
            function C(e) {
              for (var t, n, r = [], o = 0, i = e.length; o < i; )
                55296 <= (t = e.charCodeAt(o++)) && t <= 56319 && o < i
                  ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), o--)
                  : r.push(t);
              return r;
            }
            function g(e) {
              return h(e, function (e) {
                var t = '';
                return (
                  65535 < e &&
                    ((t += x((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += x(e))
                );
              }).join('');
            }
            function T(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function k(e, t, n) {
              var r = 0;
              for (
                e = n ? b(e / s) : e >> 1, e += b(e / t);
                (p * v) >> 1 < e;
                r += y
              )
                e = b(e / p);
              return b(r + ((p + 1) * e) / (e + a));
            }
            function j(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s,
                u = [],
                l = e.length,
                c = 0,
                f = 128,
                p = 72,
                h = e.lastIndexOf('-');
              for (h < 0 && (h = 0), n = 0; n < h; ++n)
                128 <= e.charCodeAt(n) && w('not-basic'),
                  u.push(e.charCodeAt(n));
              for (r = 0 < h ? h + 1 : 0; r < l; ) {
                for (
                  o = c, i = 1, a = y;
                  l <= r && w('invalid-input'),
                    (s = e.charCodeAt(r++)),
                    (y <=
                      (s =
                        s - 48 < 10
                          ? s - 22
                          : s - 65 < 26
                          ? s - 65
                          : s - 97 < 26
                          ? s - 97
                          : y) ||
                      s > b((m - c) / i)) &&
                      w('overflow'),
                    (c += s * i),
                    !(s < (s = a <= p ? 1 : p + v <= a ? v : a - p));
                  a += y
                )
                  i > b(m / (s = y - s)) && w('overflow'), (i *= s);
                (p = k(c - o, (t = u.length + 1), 0 == o)),
                  b(c / t) > m - f && w('overflow'),
                  (f += b(c / t)),
                  (c %= t),
                  u.splice(c++, 0, f);
              }
              return g(u);
            }
            function E(e) {
              for (
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = [],
                  p = (e = C(e)).length,
                  h = 128,
                  d = 72,
                  g = (t = 0);
                g < p;
                ++g
              )
                (s = e[g]) < 128 && f.push(x(s));
              for (n = r = f.length, r && f.push('-'); n < p; ) {
                for (o = m, g = 0; g < p; ++g)
                  h <= (s = e[g]) && s < o && (o = s);
                for (
                  o - h > b((m - t) / (u = n + 1)) && w('overflow'),
                    t += (o - h) * u,
                    h = o,
                    g = 0;
                  g < p;
                  ++g
                )
                  if (((s = e[g]) < h && ++t > m && w('overflow'), s == h)) {
                    for (
                      i = t, a = y;
                      !(i < (l = a <= d ? 1 : d + v <= a ? v : a - d));
                      a += y
                    )
                      f.push(x(T(l + ((c = i - l) % (l = y - l)), 0))),
                        (i = b(c / l));
                    f.push(x(T(i, 0))), (d = k(t, u, n == r)), (t = 0), ++n;
                  }
                ++t, ++h;
              }
              return f.join('');
            }
            if (
              ((o = {
                version: '1.4.1',
                ucs2: { decode: C, encode: g },
                decode: j,
                encode: E,
                toASCII: function (e) {
                  return d(e, function (e) {
                    return l.test(e) ? 'xn--' + E(e) : e;
                  });
                },
                toUnicode: function (e) {
                  return d(e, function (e) {
                    return u.test(e) ? j(e.slice(4).toLowerCase()) : e;
                  });
                }
              }),
              'function' == typeof define &&
                'object' == typeof define.amd &&
                define.amd)
            )
              define('punycode', function () {
                return o;
              });
            else if (t && n)
              if (A.exports == t) n.exports = o;
              else for (i in o) o.hasOwnProperty(i) && (t[i] = o[i]);
            else e.punycode = o;
          }.call(this);
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        );
      },
      {}
    ],
    2: [
      function (e, n, t) {
        !(function (e, t) {
          'use strict';
          'object' == typeof n && 'object' == typeof n.exports
            ? (n.exports = e.document
                ? t(e, !0)
                : function (e) {
                    if (e.document) return t(e);
                    throw new Error('jQuery requires a window with a document');
                  })
            : t(e);
        })('undefined' != typeof window ? window : this, function (w, R) {
          'use strict';
          function v(e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType;
          }
          function g(e) {
            return null != e && e === e.window;
          }
          var t = [],
            I = Object.getPrototypeOf,
            s = t.slice,
            M = t.flat
              ? function (e) {
                  return t.flat.call(e);
                }
              : function (e) {
                  return t.concat.apply([], e);
                },
            _ = t.push,
            $ = t.indexOf,
            F = {},
            B = F.toString,
            W = F.hasOwnProperty,
            U = W.toString,
            z = U.call(Object),
            m = {},
            C = w.document,
            X = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function K(e, t, n) {
            var r,
              o,
              i = (n = n || C).createElement('script');
            if (((i.text = e), t))
              for (r in X)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function d(e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? F[B.call(e)] || 'object'
              : typeof e;
          }
          var T = function (e, t) {
            return new T.fn.init(e, t);
          };
          function V(e) {
            var t = !!e && 'length' in e && e.length,
              n = d(e);
            return (
              !v(e) &&
              !g(e) &&
              ('array' === n ||
                0 === t ||
                ('number' == typeof t && 0 < t && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: '3.5.1',
              constructor: T,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                e = T.merge(this.constructor(), e);
                return (e.prevObject = this), e;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (n) {
                return this.pushStack(
                  T.map(this, function (e, t) {
                    return n.call(e, t, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: _,
              sort: t.sort,
              splice: t.splice
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i = arguments[0] || {},
                  a = 1,
                  s = arguments.length,
                  u = !1;
                for (
                  'boolean' == typeof i &&
                    ((u = i), (i = arguments[a] || {}), a++),
                    'object' == typeof i || v(i) || (i = {}),
                    a === s && ((i = this), a--);
                  a < s;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (n = e[t]),
                        '__proto__' !== t &&
                          i !== n &&
                          (u &&
                          n &&
                          (T.isPlainObject(n) || (r = Array.isArray(n)))
                            ? ((o = i[t]),
                              (o =
                                r && !Array.isArray(o)
                                  ? []
                                  : r || T.isPlainObject(o)
                                  ? o
                                  : {}),
                              (r = !1),
                              (i[t] = T.extend(u, o, n)))
                            : void 0 !== n && (i[t] = n));
                return i;
              }),
            T.extend({
              expando: 'jQuery' + ('3.5.1' + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                return (
                  !(!e || '[object Object]' !== B.call(e)) &&
                  (!(e = I(e)) ||
                    ('function' ==
                      typeof (e = W.call(e, 'constructor') && e.constructor) &&
                      U.call(e) === z))
                );
              },
              isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                K(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (V(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                t = t || [];
                return (
                  null != e &&
                    (V(Object(e))
                      ? T.merge(t, 'string' == typeof e ? [e] : e)
                      : _.call(t, e)),
                  t
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : $.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) != a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (V(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return M(a);
              },
              guid: 1,
              support: m
            }),
            'function' == typeof Symbol &&
              (T.fn[Symbol.iterator] = t[Symbol.iterator]),
            T.each(
              'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
              ),
              function (e, t) {
                F['[object ' + t + ']'] = t.toLowerCase();
              }
            );
          function r(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && T(e).is(n)) break;
                r.push(e);
              }
            return r;
          }
          function G(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          }
          var e = (function (R) {
              function f(e, t) {
                return (
                  (e = '0x' + e.slice(1) - 65536),
                  t ||
                    (e < 0
                      ? String.fromCharCode(65536 + e)
                      : String.fromCharCode(
                          (e >> 10) | 55296,
                          (1023 & e) | 56320
                        ))
                );
              }
              function I(e, t) {
                return t
                  ? '\0' === e
                    ? '�'
                    : e.slice(0, -1) +
                      '\\' +
                      e.charCodeAt(e.length - 1).toString(16) +
                      ' '
                  : '\\' + e;
              }
              function M() {
                C();
              }
              var e,
                p,
                x,
                i,
                _,
                h,
                $,
                F,
                w,
                u,
                l,
                C,
                T,
                n,
                k,
                d,
                r,
                o,
                g,
                j = 'sizzle' + +new Date(),
                c = R.document,
                E = 0,
                B = 0,
                W = D(),
                U = D(),
                z = D(),
                m = D(),
                X = function (e, t) {
                  return e === t && (l = !0), 0;
                },
                K = {}.hasOwnProperty,
                t = [],
                V = t.pop,
                G = t.push,
                S = t.push,
                Y = t.slice,
                v = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                Q =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                a = '[\\x20\\t\\r\\n\\f]',
                s =
                  '(?:\\\\[\\da-fA-F]{1,6}' +
                  a +
                  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                J =
                  '\\[' +
                  a +
                  '*(' +
                  s +
                  ')(?:' +
                  a +
                  '*([*^$|!~]?=)' +
                  a +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  s +
                  '))|)' +
                  a +
                  '*\\]',
                Z =
                  ':(' +
                  s +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  J +
                  ')*)|.*)\\)|)',
                ee = new RegExp(a + '+', 'g'),
                y = new RegExp(
                  '^' + a + '+|((?:^|[^\\\\])(?:\\\\.)*)' + a + '+$',
                  'g'
                ),
                te = new RegExp('^' + a + '*,' + a + '*'),
                ne = new RegExp('^' + a + '*([>+~]|' + a + ')' + a + '*'),
                re = new RegExp(a + '|>'),
                oe = new RegExp(Z),
                ie = new RegExp('^' + s + '$'),
                b = {
                  ID: new RegExp('^#(' + s + ')'),
                  CLASS: new RegExp('^\\.(' + s + ')'),
                  TAG: new RegExp('^(' + s + '|[*])'),
                  ATTR: new RegExp('^' + J),
                  PSEUDO: new RegExp('^' + Z),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      a +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      a +
                      '*(?:([+-]|)' +
                      a +
                      '*(\\d+)|))' +
                      a +
                      '*\\)|)',
                    'i'
                  ),
                  bool: new RegExp('^(?:' + Q + ')$', 'i'),
                  needsContext: new RegExp(
                    '^' +
                      a +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      a +
                      '*((?:-\\d)?\\d*)' +
                      a +
                      '*\\)|)(?=[^-]|$)',
                    'i'
                  )
                },
                ae = /HTML$/i,
                se = /^(?:input|select|textarea|button)$/i,
                ue = /^h\d$/i,
                A = /^[^{]+\{\s*\[native \w/,
                le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ce = /[+~]/,
                N = new RegExp(
                  '\\\\[\\da-fA-F]{1,6}' + a + '?|\\\\([^\\r\\n\\f])',
                  'g'
                ),
                fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                pe = ve(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      'fieldset' === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: 'parentNode', next: 'legend' }
                );
              try {
                S.apply((t = Y.call(c.childNodes)), c.childNodes),
                  t[c.childNodes.length].nodeType;
              } catch (e) {
                S = {
                  apply: t.length
                    ? function (e, t) {
                        G.apply(e, Y.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      }
                };
              }
              function q(t, e, n, r) {
                var o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c = e && e.ownerDocument,
                  f = e ? e.nodeType : 9;
                if (
                  ((n = n || []),
                  'string' != typeof t ||
                    !t ||
                    (1 !== f && 9 !== f && 11 !== f))
                )
                  return n;
                if (!r && (C(e), (e = e || T), k)) {
                  if (11 !== f && (s = le.exec(t)))
                    if ((o = s[1])) {
                      if (9 === f) {
                        if (!(l = e.getElementById(o))) return n;
                        if (l.id === o) return n.push(l), n;
                      } else if (
                        c &&
                        (l = c.getElementById(o)) &&
                        g(e, l) &&
                        l.id === o
                      )
                        return n.push(l), n;
                    } else {
                      if (s[2]) return S.apply(n, e.getElementsByTagName(t)), n;
                      if (
                        (o = s[3]) &&
                        p.getElementsByClassName &&
                        e.getElementsByClassName
                      )
                        return S.apply(n, e.getElementsByClassName(o)), n;
                    }
                  if (
                    p.qsa &&
                    !m[t + ' '] &&
                    (!d || !d.test(t)) &&
                    (1 !== f || 'object' !== e.nodeName.toLowerCase())
                  ) {
                    if (
                      ((l = t), (c = e), 1 === f && (re.test(t) || ne.test(t)))
                    ) {
                      for (
                        ((c = (ce.test(t) && me(e.parentNode)) || e) === e &&
                          p.scope) ||
                          ((a = e.getAttribute('id'))
                            ? (a = a.replace(fe, I))
                            : e.setAttribute('id', (a = j))),
                          i = (u = h(t)).length;
                        i--;

                      )
                        u[i] = (a ? '#' + a : ':scope') + ' ' + P(u[i]);
                      l = u.join(',');
                    }
                    try {
                      return S.apply(n, c.querySelectorAll(l)), n;
                    } catch (e) {
                      m(t, !0);
                    } finally {
                      a === j && e.removeAttribute('id');
                    }
                  }
                }
                return F(t.replace(y, '$1'), e, n, r);
              }
              function D() {
                var n = [];
                function r(e, t) {
                  return (
                    n.push(e + ' ') > x.cacheLength && delete r[n.shift()],
                    (r[e + ' '] = t)
                  );
                }
                return r;
              }
              function O(e) {
                return (e[j] = !0), e;
              }
              function L(e) {
                var t = T.createElement('fieldset');
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t);
                }
              }
              function he(e, t) {
                for (var n = e.split('|'), r = n.length; r--; )
                  x.attrHandle[n[r]] = t;
              }
              function de(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function ge(t) {
                return function (e) {
                  return 'form' in e
                    ? e.parentNode && !1 === e.disabled
                      ? 'label' in e
                        ? 'label' in e.parentNode
                          ? e.parentNode.disabled === t
                          : e.disabled === t
                        : e.isDisabled === t ||
                          (e.isDisabled !== !t && pe(e) === t)
                      : e.disabled === t
                    : 'label' in e && e.disabled === t;
                };
              }
              function H(a) {
                return O(function (i) {
                  return (
                    (i = +i),
                    O(function (e, t) {
                      for (var n, r = a([], e.length, i), o = r.length; o--; )
                        e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
                    })
                  );
                });
              }
              function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (e in ((p = q.support = {}),
              (_ = q.isXML =
                function (e) {
                  var t = e.namespaceURI,
                    e = (e.ownerDocument || e).documentElement;
                  return !ae.test(t || (e && e.nodeName) || 'HTML');
                }),
              (C = q.setDocument =
                function (e) {
                  var e = e ? e.ownerDocument || e : c;
                  return (
                    e != T &&
                      9 === e.nodeType &&
                      e.documentElement &&
                      ((n = (T = e).documentElement),
                      (k = !_(T)),
                      c != T &&
                        (e = T.defaultView) &&
                        e.top !== e &&
                        (e.addEventListener
                          ? e.addEventListener('unload', M, !1)
                          : e.attachEvent && e.attachEvent('onunload', M)),
                      (p.scope = L(function (e) {
                        return (
                          n.appendChild(e).appendChild(T.createElement('div')),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(':scope fieldset div').length
                        );
                      })),
                      (p.attributes = L(function (e) {
                        return (
                          (e.className = 'i'), !e.getAttribute('className')
                        );
                      })),
                      (p.getElementsByTagName = L(function (e) {
                        return (
                          e.appendChild(T.createComment('')),
                          !e.getElementsByTagName('*').length
                        );
                      })),
                      (p.getElementsByClassName = A.test(
                        T.getElementsByClassName
                      )),
                      (p.getById = L(function (e) {
                        return (
                          (n.appendChild(e).id = j),
                          !T.getElementsByName || !T.getElementsByName(j).length
                        );
                      })),
                      p.getById
                        ? ((x.filter.ID = function (e) {
                            var t = e.replace(N, f);
                            return function (e) {
                              return e.getAttribute('id') === t;
                            };
                          }),
                          (x.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && k)
                              return (t = t.getElementById(e)) ? [t] : [];
                          }))
                        : ((x.filter.ID = function (e) {
                            var t = e.replace(N, f);
                            return function (e) {
                              e =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode('id');
                              return e && e.value === t;
                            };
                          }),
                          (x.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && k) {
                              var n,
                                r,
                                o,
                                i = t.getElementById(e);
                              if (i) {
                                if (
                                  (n = i.getAttributeNode('id')) &&
                                  n.value === e
                                )
                                  return [i];
                                for (
                                  o = t.getElementsByName(e), r = 0;
                                  (i = o[r++]);

                                )
                                  if (
                                    (n = i.getAttributeNode('id')) &&
                                    n.value === e
                                  )
                                    return [i];
                              }
                              return [];
                            }
                          })),
                      (x.find.TAG = p.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : p.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              o = 0,
                              i = t.getElementsByTagName(e);
                            if ('*' !== e) return i;
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }),
                      (x.find.CLASS =
                        p.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && k)
                            return t.getElementsByClassName(e);
                        }),
                      (r = []),
                      (d = []),
                      (p.qsa = A.test(T.querySelectorAll)) &&
                        (L(function (e) {
                          var t;
                          (n.appendChild(e).innerHTML =
                            "<a id='" +
                            j +
                            "'></a><select id='" +
                            j +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              d.push('[*^$]=' + a + '*(?:\'\'|"")'),
                            e.querySelectorAll('[selected]').length ||
                              d.push('\\[' + a + '*(?:value|' + Q + ')'),
                            e.querySelectorAll('[id~=' + j + '-]').length ||
                              d.push('~='),
                            (t = T.createElement('input')).setAttribute(
                              'name',
                              ''
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              d.push(
                                '\\[' +
                                  a +
                                  '*name' +
                                  a +
                                  '*=' +
                                  a +
                                  '*(?:\'\'|"")'
                              ),
                            e.querySelectorAll(':checked').length ||
                              d.push(':checked'),
                            e.querySelectorAll('a#' + j + '+*').length ||
                              d.push('.#.+[+~]'),
                            e.querySelectorAll('\\\f'),
                            d.push('[\\r\\n\\f]');
                        }),
                        L(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = T.createElement('input');
                          t.setAttribute('type', 'hidden'),
                            e.appendChild(t).setAttribute('name', 'D'),
                            e.querySelectorAll('[name=d]').length &&
                              d.push('name' + a + '*[*^$|!~]?='),
                            2 !== e.querySelectorAll(':enabled').length &&
                              d.push(':enabled', ':disabled'),
                            (n.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(':disabled').length &&
                              d.push(':enabled', ':disabled'),
                            e.querySelectorAll('*,:x'),
                            d.push(',.*:');
                        })),
                      (p.matchesSelector = A.test(
                        (o =
                          n.matches ||
                          n.webkitMatchesSelector ||
                          n.mozMatchesSelector ||
                          n.oMatchesSelector ||
                          n.msMatchesSelector)
                      )) &&
                        L(function (e) {
                          (p.disconnectedMatch = o.call(e, '*')),
                            o.call(e, "[s!='']:x"),
                            r.push('!=', Z);
                        }),
                      (d = d.length && new RegExp(d.join('|'))),
                      (r = r.length && new RegExp(r.join('|'))),
                      (e = A.test(n.compareDocumentPosition)),
                      (g =
                        e || A.test(n.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                t = t && t.parentNode;
                              return (
                                e === t ||
                                !(
                                  !t ||
                                  1 !== t.nodeType ||
                                  !(n.contains
                                    ? n.contains(t)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(t))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (X = e
                        ? function (e, t) {
                            var n;
                            return e === t
                              ? ((l = !0), 0)
                              : (n =
                                  !e.compareDocumentPosition -
                                  !t.compareDocumentPosition) ||
                                  (1 &
                                    (n =
                                      (e.ownerDocument || e) ==
                                      (t.ownerDocument || t)
                                        ? e.compareDocumentPosition(t)
                                        : 1) ||
                                  (!p.sortDetached &&
                                    t.compareDocumentPosition(e) === n)
                                    ? e == T ||
                                      (e.ownerDocument == c && g(c, e))
                                      ? -1
                                      : t == T ||
                                        (t.ownerDocument == c && g(c, t))
                                      ? 1
                                      : u
                                      ? v(u, e) - v(u, t)
                                      : 0
                                    : 4 & n
                                    ? -1
                                    : 1);
                          }
                        : function (e, t) {
                            if (e === t) return (l = !0), 0;
                            var n,
                              r = 0,
                              o = e.parentNode,
                              i = t.parentNode,
                              a = [e],
                              s = [t];
                            if (!o || !i)
                              return e == T
                                ? -1
                                : t == T
                                ? 1
                                : o
                                ? -1
                                : i
                                ? 1
                                : u
                                ? v(u, e) - v(u, t)
                                : 0;
                            if (o === i) return de(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                            for (; a[r] === s[r]; ) r++;
                            return r
                              ? de(a[r], s[r])
                              : a[r] == c
                              ? -1
                              : s[r] == c
                              ? 1
                              : 0;
                          })),
                    T
                  );
                }),
              (q.matches = function (e, t) {
                return q(e, null, null, t);
              }),
              (q.matchesSelector = function (e, t) {
                if (
                  (C(e),
                  p.matchesSelector &&
                    k &&
                    !m[t + ' '] &&
                    (!r || !r.test(t)) &&
                    (!d || !d.test(t)))
                )
                  try {
                    var n = o.call(e, t);
                    if (
                      n ||
                      p.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return n;
                  } catch (e) {
                    m(t, !0);
                  }
                return 0 < q(t, T, null, [e]).length;
              }),
              (q.contains = function (e, t) {
                return (e.ownerDocument || e) != T && C(e), g(e, t);
              }),
              (q.attr = function (e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                  n =
                    n && K.call(x.attrHandle, t.toLowerCase())
                      ? n(e, t, !k)
                      : void 0;
                return void 0 !== n
                  ? n
                  : p.attributes || !k
                  ? e.getAttribute(t)
                  : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
              }),
              (q.escape = function (e) {
                return (e + '').replace(fe, I);
              }),
              (q.error = function (e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
              }),
              (q.uniqueSort = function (e) {
                var t,
                  n = [],
                  r = 0,
                  o = 0;
                if (
                  ((l = !p.detectDuplicates),
                  (u = !p.sortStable && e.slice(0)),
                  e.sort(X),
                  l)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                  for (; r--; ) e.splice(n[r], 1);
                }
                return (u = null), e;
              }),
              (i = q.getText =
                function (e) {
                  var t,
                    n = '',
                    r = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ('string' == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += i(t);
                  return n;
                }),
              ((x = q.selectors =
                {
                  cacheLength: 50,
                  createPseudo: O,
                  match: b,
                  attrHandle: {},
                  find: {},
                  relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' }
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(N, f)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(N, f)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                          ? (e[3] || q.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ('even' === e[3] || 'odd' === e[3]))),
                            (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                          : e[3] && q.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return b.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || '')
                            : n &&
                              oe.test(n) &&
                              (t = h(n, !0)) &&
                              (t = n.indexOf(')', n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(N, f).toLowerCase();
                      return '*' === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = W[e + ' '];
                      return (
                        t ||
                        ((t = new RegExp(
                          '(^|' + a + ')' + e + '(' + a + '|$)'
                        )) &&
                          W(e, function (e) {
                            return t.test(
                              ('string' == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute('class')) ||
                                ''
                            );
                          }))
                      );
                    },
                    ATTR: function (t, n, r) {
                      return function (e) {
                        e = q.attr(e, t);
                        return null == e
                          ? '!=' === n
                          : !n ||
                              ((e += ''),
                              '=' === n
                                ? e === r
                                : '!=' === n
                                ? e !== r
                                : '^=' === n
                                ? r && 0 === e.indexOf(r)
                                : '*=' === n
                                ? r && -1 < e.indexOf(r)
                                : '$=' === n
                                ? r && e.slice(-r.length) === r
                                : '~=' === n
                                ? -1 <
                                  (' ' + e.replace(ee, ' ') + ' ').indexOf(r)
                                : '|=' === n &&
                                  (e === r ||
                                    e.slice(0, r.length + 1) === r + '-'));
                      };
                    },
                    CHILD: function (d, e, t, g, m) {
                      var y = 'nth' !== d.slice(0, 3),
                        v = 'last' !== d.slice(-4),
                        b = 'of-type' === e;
                      return 1 === g && 0 === m
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (e, t, n) {
                            var r,
                              o,
                              i,
                              a,
                              s,
                              u,
                              l = y != v ? 'nextSibling' : 'previousSibling',
                              c = e.parentNode,
                              f = b && e.nodeName.toLowerCase(),
                              p = !n && !b,
                              h = !1;
                            if (c) {
                              if (y) {
                                for (; l; ) {
                                  for (a = e; (a = a[l]); )
                                    if (
                                      b
                                        ? a.nodeName.toLowerCase() === f
                                        : 1 === a.nodeType
                                    )
                                      return !1;
                                  u = l = 'only' === d && !u && 'nextSibling';
                                }
                                return !0;
                              }
                              if (
                                ((u = [v ? c.firstChild : c.lastChild]), v && p)
                              ) {
                                for (
                                  h =
                                    (s =
                                      (r =
                                        (o =
                                          (i = (a = c)[j] || (a[j] = {}))[
                                            a.uniqueID
                                          ] || (i[a.uniqueID] = {}))[d] ||
                                        [])[0] === E && r[1]) && r[2],
                                    a = s && c.childNodes[s];
                                  (a =
                                    (++s && a && a[l]) ||
                                    (h = s = 0) ||
                                    u.pop());

                                )
                                  if (1 === a.nodeType && ++h && a === e) {
                                    o[d] = [E, s, h];
                                    break;
                                  }
                              } else if (
                                !1 ===
                                (h = p
                                  ? (s =
                                      (r =
                                        (o =
                                          (i = (a = e)[j] || (a[j] = {}))[
                                            a.uniqueID
                                          ] || (i[a.uniqueID] = {}))[d] ||
                                        [])[0] === E && r[1])
                                  : h)
                              )
                                for (
                                  ;
                                  (a =
                                    (++s && a && a[l]) ||
                                    (h = s = 0) ||
                                    u.pop()) &&
                                  ((b
                                    ? a.nodeName.toLowerCase() !== f
                                    : 1 !== a.nodeType) ||
                                    !++h ||
                                    (p &&
                                      ((o =
                                        (i = a[j] || (a[j] = {}))[a.uniqueID] ||
                                        (i[a.uniqueID] = {}))[d] = [E, h]),
                                    a !== e));

                                );
                              return (
                                (h -= m) === g || (h % g == 0 && 0 <= h / g)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, i) {
                      var t,
                        a =
                          x.pseudos[e] ||
                          x.setFilters[e.toLowerCase()] ||
                          q.error('unsupported pseudo: ' + e);
                      return a[j]
                        ? a(i)
                        : 1 < a.length
                        ? ((t = [e, e, '', i]),
                          x.setFilters.hasOwnProperty(e.toLowerCase())
                            ? O(function (e, t) {
                                for (var n, r = a(e, i), o = r.length; o--; )
                                  e[(n = v(e, r[o]))] = !(t[n] = r[o]);
                              })
                            : function (e) {
                                return a(e, 0, t);
                              })
                        : a;
                    }
                  },
                  pseudos: {
                    not: O(function (e) {
                      var r = [],
                        o = [],
                        s = $(e.replace(y, '$1'));
                      return s[j]
                        ? O(function (e, t, n, r) {
                            for (
                              var o, i = s(e, null, r, []), a = e.length;
                              a--;

                            )
                              (o = i[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, t, n) {
                            return (
                              (r[0] = e),
                              s(r, null, n, o),
                              (r[0] = null),
                              !o.pop()
                            );
                          };
                    }),
                    has: O(function (t) {
                      return function (e) {
                        return 0 < q(t, e).length;
                      };
                    }),
                    contains: O(function (t) {
                      return (
                        (t = t.replace(N, f)),
                        function (e) {
                          return -1 < (e.textContent || i(e)).indexOf(t);
                        }
                      );
                    }),
                    lang: O(function (n) {
                      return (
                        ie.test(n || '') || q.error('unsupported lang: ' + n),
                        (n = n.replace(N, f).toLowerCase()),
                        function (e) {
                          var t;
                          do {
                            if (
                              (t = k
                                ? e.lang
                                : e.getAttribute('xml:lang') ||
                                  e.getAttribute('lang'))
                            )
                              return (
                                (t = t.toLowerCase()) === n ||
                                0 === t.indexOf(n + '-')
                              );
                          } while ((e = e.parentNode) && 1 === e.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (e) {
                      var t = R.location && R.location.hash;
                      return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                      return e === n;
                    },
                    focus: function (e) {
                      return (
                        e === T.activeElement &&
                        (!T.hasFocus || T.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ('input' === t && !!e.checked) ||
                        ('option' === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !x.pseudos.empty(e);
                    },
                    header: function (e) {
                      return ue.test(e.nodeName);
                    },
                    input: function (e) {
                      return se.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ('input' === t && 'button' === e.type) || 'button' === t
                      );
                    },
                    text: function (e) {
                      return (
                        'input' === e.nodeName.toLowerCase() &&
                        'text' === e.type &&
                        (null == (e = e.getAttribute('type')) ||
                          'text' === e.toLowerCase())
                      );
                    },
                    first: H(function () {
                      return [0];
                    }),
                    last: H(function (e, t) {
                      return [t - 1];
                    }),
                    eq: H(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: H(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: H(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: H(function (e, t, n) {
                      for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                      return e;
                    }),
                    gt: H(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    })
                  }
                }).pseudos.nth = x.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                x.pseudos[e] = (function (t) {
                  return function (e) {
                    return 'input' === e.nodeName.toLowerCase() && e.type === t;
                  };
                })(e);
              for (e in { submit: !0, reset: !0 })
                x.pseudos[e] = (function (n) {
                  return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ('input' === t || 'button' === t) && e.type === n;
                  };
                })(e);
              function ye() {}
              function P(e) {
                for (var t = 0, n = e.length, r = ''; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function ve(a, e, t) {
                var s = e.dir,
                  u = e.next,
                  l = u || s,
                  c = t && 'parentNode' === l,
                  f = B++;
                return e.first
                  ? function (e, t, n) {
                      for (; (e = e[s]); )
                        if (1 === e.nodeType || c) return a(e, t, n);
                      return !1;
                    }
                  : function (e, t, n) {
                      var r,
                        o,
                        i = [E, f];
                      if (n) {
                        for (; (e = e[s]); )
                          if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                      } else
                        for (; (e = e[s]); )
                          if (1 === e.nodeType || c)
                            if (
                              ((o =
                                (o = e[j] || (e[j] = {}))[e.uniqueID] ||
                                (o[e.uniqueID] = {})),
                              u && u === e.nodeName.toLowerCase())
                            )
                              e = e[s] || e;
                            else {
                              if ((r = o[l]) && r[0] === E && r[1] === f)
                                return (i[2] = r[2]);
                              if (((o[l] = i)[2] = a(e, t, n))) return !0;
                            }
                      return !1;
                    };
              }
              function be(o) {
                return 1 < o.length
                  ? function (e, t, n) {
                      for (var r = o.length; r--; )
                        if (!o[r](e, t, n)) return !1;
                      return !0;
                    }
                  : o[0];
              }
              function xe(e, t, n, r, o) {
                for (
                  var i, a = [], s = 0, u = e.length, l = null != t;
                  s < u;
                  s++
                )
                  !(i = e[s]) ||
                    (n && !n(i, r, o)) ||
                    (a.push(i), l && t.push(s));
                return a;
              }
              function we(h, d, g, m, y, e) {
                return (
                  m && !m[j] && (m = we(m)),
                  y && !y[j] && (y = we(y, e)),
                  O(function (e, t, n, r) {
                    var o,
                      i,
                      a,
                      s = [],
                      u = [],
                      l = t.length,
                      c =
                        e ||
                        (function (e, t, n) {
                          for (var r = 0, o = t.length; r < o; r++)
                            q(e, t[r], n);
                          return n;
                        })(d || '*', n.nodeType ? [n] : n, []),
                      f = !h || (!e && d) ? c : xe(c, s, h, n, r),
                      p = g ? (y || (e ? h : l || m) ? [] : t) : f;
                    if ((g && g(f, p, n, r), m))
                      for (o = xe(p, u), m(o, [], n, r), i = o.length; i--; )
                        (a = o[i]) && (p[u[i]] = !(f[u[i]] = a));
                    if (e) {
                      if (y || h) {
                        if (y) {
                          for (o = [], i = p.length; i--; )
                            (a = p[i]) && o.push((f[i] = a));
                          y(null, (p = []), o, r);
                        }
                        for (i = p.length; i--; )
                          (a = p[i]) &&
                            -1 < (o = y ? v(e, a) : s[i]) &&
                            (e[o] = !(t[o] = a));
                      }
                    } else (p = xe(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : S.apply(t, p);
                  })
                );
              }
              function Ce(m, y) {
                function e(e, t, n, r, o) {
                  var i,
                    a,
                    s,
                    u = 0,
                    l = '0',
                    c = e && [],
                    f = [],
                    p = w,
                    h = e || (b && x.find.TAG('*', o)),
                    d = (E += null == p ? 1 : Math.random() || 0.1),
                    g = h.length;
                  for (
                    o && (w = t == T || t || o);
                    l !== g && null != (i = h[l]);
                    l++
                  ) {
                    if (b && i) {
                      for (
                        a = 0, t || i.ownerDocument == T || (C(i), (n = !k));
                        (s = m[a++]);

                      )
                        if (s(i, t || T, n)) {
                          r.push(i);
                          break;
                        }
                      o && (E = d);
                    }
                    v && ((i = !s && i) && u--, e && c.push(i));
                  }
                  if (((u += l), v && l !== u)) {
                    for (a = 0; (s = y[a++]); ) s(c, f, t, n);
                    if (e) {
                      if (0 < u)
                        for (; l--; ) c[l] || f[l] || (f[l] = V.call(r));
                      f = xe(f);
                    }
                    S.apply(r, f),
                      o &&
                        !e &&
                        0 < f.length &&
                        1 < u + y.length &&
                        q.uniqueSort(r);
                  }
                  return o && ((E = d), (w = p)), c;
                }
                var v = 0 < y.length,
                  b = 0 < m.length;
                return v ? O(e) : e;
              }
              return (
                (ye.prototype = x.filters = x.pseudos),
                (x.setFilters = new ye()),
                (h = q.tokenize =
                  function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      l = U[e + ' '];
                    if (l) return t ? 0 : l.slice(0);
                    for (a = e, s = [], u = x.preFilter; a; ) {
                      for (i in ((n && !(r = te.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a),
                        s.push((o = []))),
                      (n = !1),
                      (r = ne.exec(a)) &&
                        ((n = r.shift()),
                        o.push({ value: n, type: r[0].replace(y, ' ') }),
                        (a = a.slice(n.length))),
                      x.filter))
                        !(r = b[i].exec(a)) ||
                          (u[i] && !(r = u[i](r))) ||
                          ((n = r.shift()),
                          o.push({ value: n, type: i, matches: r }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? q.error(e) : U(e, s).slice(0);
                  }),
                ($ = q.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      o = [],
                      i = z[e + ' '];
                    if (!i) {
                      for (n = (t = t || h(e)).length; n--; )
                        ((i = (function e(t) {
                          for (
                            var r,
                              n,
                              o,
                              i = t.length,
                              a = x.relative[t[0].type],
                              s = a || x.relative[' '],
                              u = a ? 1 : 0,
                              l = ve(
                                function (e) {
                                  return e === r;
                                },
                                s,
                                !0
                              ),
                              c = ve(
                                function (e) {
                                  return -1 < v(r, e);
                                },
                                s,
                                !0
                              ),
                              f = [
                                function (e, t, n) {
                                  return (
                                    (e =
                                      (!a && (n || t !== w)) ||
                                      ((r = t).nodeType ? l : c)(e, t, n)),
                                    (r = null),
                                    e
                                  );
                                }
                              ];
                            u < i;
                            u++
                          )
                            if ((n = x.relative[t[u].type])) f = [ve(be(f), n)];
                            else {
                              if (
                                (n = x.filter[t[u].type].apply(
                                  null,
                                  t[u].matches
                                ))[j]
                              ) {
                                for (
                                  o = ++u;
                                  o < i && !x.relative[t[o].type];
                                  o++
                                );
                                return we(
                                  1 < u && be(f),
                                  1 < u &&
                                    P(
                                      t
                                        .slice(0, u - 1)
                                        .concat({
                                          value:
                                            ' ' === t[u - 2].type ? '*' : ''
                                        })
                                    ).replace(y, '$1'),
                                  n,
                                  u < o && e(t.slice(u, o)),
                                  o < i && e((t = t.slice(o))),
                                  o < i && P(t)
                                );
                              }
                              f.push(n);
                            }
                          return be(f);
                        })(t[n]))[j]
                          ? r
                          : o
                        ).push(i);
                      (i = z(e, Ce(o, r))).selector = e;
                    }
                    return i;
                  }),
                (F = q.select =
                  function (e, t, n, r) {
                    var o,
                      i,
                      a,
                      s,
                      u,
                      l = 'function' == typeof e && e,
                      c = !r && h((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                      if (
                        2 < (i = c[0] = c[0].slice(0)).length &&
                        'ID' === (a = i[0]).type &&
                        9 === t.nodeType &&
                        k &&
                        x.relative[i[1].type]
                      ) {
                        if (
                          !(t = (x.find.ID(a.matches[0].replace(N, f), t) ||
                            [])[0])
                        )
                          return n;
                        l && (t = t.parentNode),
                          (e = e.slice(i.shift().value.length));
                      }
                      for (
                        o = b.needsContext.test(e) ? 0 : i.length;
                        o-- && ((a = i[o]), !x.relative[(s = a.type)]);

                      )
                        if (
                          (u = x.find[s]) &&
                          (r = u(
                            a.matches[0].replace(N, f),
                            (ce.test(i[0].type) && me(t.parentNode)) || t
                          ))
                        ) {
                          if ((i.splice(o, 1), (e = r.length && P(i)))) break;
                          return S.apply(n, r), n;
                        }
                    }
                    return (
                      (l || $(e, c))(
                        r,
                        t,
                        !k,
                        n,
                        !t || (ce.test(e) && me(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (p.sortStable = j.split('').sort(X).join('') === j),
                (p.detectDuplicates = !!l),
                C(),
                (p.sortDetached = L(function (e) {
                  return (
                    1 & e.compareDocumentPosition(T.createElement('fieldset'))
                  );
                })),
                L(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    '#' === e.firstChild.getAttribute('href')
                  );
                }) ||
                  he('type|href|height|width', function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        'type' === t.toLowerCase() ? 1 : 2
                      );
                  }),
                (p.attributes &&
                  L(function (e) {
                    return (
                      (e.innerHTML = '<input/>'),
                      e.firstChild.setAttribute('value', ''),
                      '' === e.firstChild.getAttribute('value')
                    );
                  })) ||
                  he('value', function (e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                L(function (e) {
                  return null == e.getAttribute('disabled');
                }) ||
                  he(Q, function (e, t, n) {
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (n = e.getAttributeNode(t)) && n.specified
                        ? n.value
                        : null;
                  }),
                q
              );
            })(w),
            Y =
              ((T.find = e),
              (T.expr = e.selectors),
              (T.expr[':'] = T.expr.pseudos),
              (T.uniqueSort = T.unique = e.uniqueSort),
              (T.text = e.getText),
              (T.isXMLDoc = e.isXML),
              (T.contains = e.contains),
              (T.escapeSelector = e.escape),
              T.expr.match.needsContext);
          function u(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var Q =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function J(e, n, r) {
            return v(n)
              ? T.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
                })
              : n.nodeType
              ? T.grep(e, function (e) {
                  return (e === n) !== r;
                })
              : 'string' != typeof n
              ? T.grep(e, function (e) {
                  return -1 < $.call(n, e) !== r;
                })
              : T.filter(n, e, r);
          }
          (T.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length && 1 === r.nodeType
                ? T.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ('string' != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (T.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  T.find(e, o[t], n);
                return 1 < r ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(J(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(J(this, e || [], !0));
              },
              is: function (e) {
                return !!J(
                  this,
                  'string' == typeof e && Y.test(e) ? T(e) : e || [],
                  !1
                ).length;
              }
            });
          var Z,
            ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            te =
              (((T.fn.init = function (e, t, n) {
                if (e) {
                  if (((n = n || Z), 'string' != typeof e))
                    return e.nodeType
                      ? ((this[0] = e), (this.length = 1), this)
                      : v(e)
                      ? void 0 !== n.ready
                        ? n.ready(e)
                        : e(T)
                      : T.makeArray(e, this);
                  if (
                    !(r =
                      '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : ee.exec(e)) ||
                    (!r[1] && t)
                  )
                    return (!t || t.jquery ? t || n : this.constructor(t)).find(
                      e
                    );
                  if (r[1]) {
                    if (
                      ((t = t instanceof T ? t[0] : t),
                      T.merge(
                        this,
                        T.parseHTML(
                          r[1],
                          t && t.nodeType ? t.ownerDocument || t : C,
                          !0
                        )
                      ),
                      Q.test(r[1]) && T.isPlainObject(t))
                    )
                      for (var r in t)
                        v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                  } else
                    (n = C.getElementById(r[2])) &&
                      ((this[0] = n), (this.length = 1));
                }
                return this;
              }).prototype = T.fn),
              (Z = T(C)),
              /^(?:parents|prev(?:Until|All))/),
            ne = { children: !0, contents: !0, next: !0, prev: !0 };
          function re(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = 'string' != typeof e && T(e);
              if (!Y.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? -1 < a.index(n)
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(1 < i.length ? T.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? 'string' == typeof e
                  ? $.call(T(e), this[0])
                  : $.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            }
          }),
            T.each(
              {
                parent: function (e) {
                  e = e.parentNode;
                  return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                  return r(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                  return r(e, 'parentNode', n);
                },
                next: function (e) {
                  return re(e, 'nextSibling');
                },
                prev: function (e) {
                  return re(e, 'previousSibling');
                },
                nextAll: function (e) {
                  return r(e, 'nextSibling');
                },
                prevAll: function (e) {
                  return r(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                  return r(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                  return r(e, 'previousSibling', n);
                },
                siblings: function (e) {
                  return G((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return G(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && I(e.contentDocument)
                    ? e.contentDocument
                    : (u(e, 'template') && (e = e.content || e),
                      T.merge([], e.childNodes));
                }
              },
              function (r, o) {
                T.fn[r] = function (e, t) {
                  var n = T.map(this, o, e);
                  return (
                    (t = 'Until' !== r.slice(-5) ? e : t) &&
                      'string' == typeof t &&
                      (n = T.filter(t, n)),
                    1 < this.length &&
                      (ne[r] || T.uniqueSort(n), te.test(r) && n.reverse()),
                    this.pushStack(n)
                  );
                };
              }
            );
          var k = /[^\x20\t\r\n\f]+/g;
          function c(e) {
            return e;
          }
          function oe(e) {
            throw e;
          }
          function ie(e, t, n, r) {
            var o;
            try {
              e && v((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && v((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (r) {
            var e, n;
            r =
              'string' == typeof r
                ? ((e = r),
                  (n = {}),
                  T.each(e.match(k) || [], function (e, t) {
                    n[t] = !0;
                  }),
                  n)
                : T.extend({}, r);
            function o() {
              for (s = s || r.once, a = i = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length; )
                  !1 === u[c].apply(t[0], t[1]) &&
                    r.stopOnFalse &&
                    ((c = u.length), (t = !1));
              r.memory || (t = !1), (i = !1), s && (u = t ? [] : '');
            }
            var i,
              t,
              a,
              s,
              u = [],
              l = [],
              c = -1,
              f = {
                add: function () {
                  return (
                    u &&
                      (t && !i && ((c = u.length - 1), l.push(t)),
                      (function n(e) {
                        T.each(e, function (e, t) {
                          v(t)
                            ? (r.unique && f.has(t)) || u.push(t)
                            : t && t.length && 'string' !== d(t) && n(t);
                        });
                      })(arguments),
                      t && !i && o()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; -1 < (n = T.inArray(t, u, n)); )
                        u.splice(n, 1), n <= c && c--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? -1 < T.inArray(e, u) : 0 < u.length;
                },
                empty: function () {
                  return (u = u && []), this;
                },
                disable: function () {
                  return (s = l = []), (u = t = ''), this;
                },
                disabled: function () {
                  return !u;
                },
                lock: function () {
                  return (s = l = []), t || i || (u = t = ''), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, t) {
                  return (
                    s ||
                      ((t = [e, (t = t || []).slice ? t.slice() : t]),
                      l.push(t),
                      i || o()),
                    this
                  );
                },
                fire: function () {
                  return f.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!a;
                }
              };
            return f;
          }),
            T.extend({
              Deferred: function (e) {
                var i = [
                    [
                      'notify',
                      'progress',
                      T.Callbacks('memory'),
                      T.Callbacks('memory'),
                      2
                    ],
                    [
                      'resolve',
                      'done',
                      T.Callbacks('once memory'),
                      T.Callbacks('once memory'),
                      0,
                      'resolved'
                    ],
                    [
                      'reject',
                      'fail',
                      T.Callbacks('once memory'),
                      T.Callbacks('once memory'),
                      1,
                      'rejected'
                    ]
                  ],
                  o = 'pending',
                  a = {
                    state: function () {
                      return o;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return a.then(null, e);
                    },
                    pipe: function () {
                      var o = arguments;
                      return T.Deferred(function (r) {
                        T.each(i, function (e, t) {
                          var n = v(o[t[4]]) && o[t[4]];
                          s[t[1]](function () {
                            var e = n && n.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(r.notify)
                                  .done(r.resolve)
                                  .fail(r.reject)
                              : r[t[0] + 'With'](this, n ? [e] : arguments);
                          });
                        }),
                          (o = null);
                      }).promise();
                    },
                    then: function (t, n, r) {
                      var u = 0;
                      function l(o, i, a, s) {
                        return function () {
                          function e() {
                            var e, t;
                            if (!(o < u)) {
                              if ((e = a.apply(n, r)) === i.promise())
                                throw new TypeError('Thenable self-resolution');
                              (t =
                                e &&
                                ('object' == typeof e ||
                                  'function' == typeof e) &&
                                e.then),
                                v(t)
                                  ? s
                                    ? t.call(e, l(u, i, c, s), l(u, i, oe, s))
                                    : (u++,
                                      t.call(
                                        e,
                                        l(u, i, c, s),
                                        l(u, i, oe, s),
                                        l(u, i, c, i.notifyWith)
                                      ))
                                  : (a !== c && ((n = void 0), (r = [e])),
                                    (s || i.resolveWith)(n, r));
                            }
                          }
                          var n = this,
                            r = arguments,
                            t = s
                              ? e
                              : function () {
                                  try {
                                    e();
                                  } catch (e) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(e, t.stackTrace),
                                      u <= o + 1 &&
                                        (a !== oe && ((n = void 0), (r = [e])),
                                        i.rejectWith(n, r));
                                  }
                                };
                          o
                            ? t()
                            : (T.Deferred.getStackHook &&
                                (t.stackTrace = T.Deferred.getStackHook()),
                              w.setTimeout(t));
                        };
                      }
                      return T.Deferred(function (e) {
                        i[0][3].add(l(0, e, v(r) ? r : c, e.notifyWith)),
                          i[1][3].add(l(0, e, v(t) ? t : c)),
                          i[2][3].add(l(0, e, v(n) ? n : oe));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, a) : a;
                    }
                  },
                  s = {};
                return (
                  T.each(i, function (e, t) {
                    var n = t[2],
                      r = t[5];
                    (a[t[1]] = n.add),
                      r &&
                        n.add(
                          function () {
                            o = r;
                          },
                          i[3 - e][2].disable,
                          i[3 - e][3].disable,
                          i[0][2].lock,
                          i[0][3].lock
                        ),
                      n.add(t[3].fire),
                      (s[t[0]] = function () {
                        return (
                          s[t[0] + 'With'](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[t[0] + 'With'] = n.fireWith);
                  }),
                  a.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                function t(t) {
                  return function (e) {
                    (o[t] = this),
                      (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                      --n || a.resolveWith(o, i);
                  };
                }
                var n = arguments.length,
                  r = n,
                  o = Array(r),
                  i = s.call(arguments),
                  a = T.Deferred();
                if (
                  n <= 1 &&
                  (ie(e, a.done(t(r)).resolve, a.reject, !n),
                  'pending' === a.state() || v(i[r] && i[r].then))
                )
                  return a.then();
                for (; r--; ) ie(i[r], t(r), a.reject);
                return a.promise();
              }
            });
          var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
            se =
              ((T.Deferred.exceptionHook = function (e, t) {
                w.console &&
                  w.console.warn &&
                  e &&
                  ae.test(e.name) &&
                  w.console.warn(
                    'jQuery.Deferred exception: ' + e.message,
                    e.stack,
                    t
                  );
              }),
              (T.readyException = function (e) {
                w.setTimeout(function () {
                  throw e;
                });
              }),
              T.Deferred());
          function ue() {
            C.removeEventListener('DOMContentLoaded', ue),
              w.removeEventListener('load', ue),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              se.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
                  se.resolveWith(C, [T]);
              }
            }),
            (T.ready.then = se.then),
            'complete' === C.readyState ||
            ('loading' !== C.readyState && !C.documentElement.doScroll)
              ? w.setTimeout(T.ready)
              : (C.addEventListener('DOMContentLoaded', ue),
                w.addEventListener('load', ue));
          function f(e, t, n, r, o, i, a) {
            var s = 0,
              u = e.length,
              l = null == n;
            if ('object' === d(n))
              for (s in ((o = !0), n)) f(e, t, s, n[s], !0, i, a);
            else if (
              void 0 !== r &&
              ((o = !0),
              v(r) || (a = !0),
              (t = l
                ? a
                  ? (t.call(e, r), null)
                  : ((l = t),
                    function (e, t, n) {
                      return l.call(T(e), n);
                    })
                : t))
            )
              for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
          }
          var le = /^-ms-/,
            ce = /-([a-z])/g;
          function fe(e, t) {
            return t.toUpperCase();
          }
          function b(e) {
            return e.replace(le, 'ms-').replace(ce, fe);
          }
          function y(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          }
          function pe() {
            this.expando = T.expando + pe.uid++;
          }
          (pe.uid = 1),
            (pe.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    y(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ('string' == typeof t) o[b(t)] = n;
                else for (r in t) o[b(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][b(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && 'string' == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(b)
                      : (t = b(t)) in r
                      ? [t]
                      : t.match(k) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 !== t && !T.isEmptyObject(r)) ||
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !T.isEmptyObject(e);
              }
            });
          var x = new pe(),
            l = new pe(),
            he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            de = /[A-Z]/g;
          function ge(e, t, n) {
            var r, o;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = 'data-' + t.replace(de, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n =
                    'true' === (o = n) ||
                    ('false' !== o &&
                      ('null' === o
                        ? null
                        : o === +o + ''
                        ? +o
                        : he.test(o)
                        ? JSON.parse(o)
                        : o));
                } catch (e) {}
                l.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return l.hasData(e) || x.hasData(e);
            },
            data: function (e, t, n) {
              return l.access(e, t, n);
            },
            removeData: function (e, t) {
              l.remove(e, t);
            },
            _data: function (e, t, n) {
              return x.access(e, t, n);
            },
            _removeData: function (e, t) {
              x.remove(e, t);
            }
          }),
            T.fn.extend({
              data: function (n, e) {
                var t,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 !== n)
                  return 'object' == typeof n
                    ? this.each(function () {
                        l.set(this, n);
                      })
                    : f(
                        this,
                        function (e) {
                          var t;
                          if (i && void 0 === e)
                            return void 0 !== (t = l.get(i, n)) ||
                              void 0 !== (t = ge(i, n))
                              ? t
                              : void 0;
                          this.each(function () {
                            l.set(this, n, e);
                          });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null,
                        !0
                      );
                if (
                  this.length &&
                  ((o = l.get(i)),
                  1 === i.nodeType && !x.get(i, 'hasDataAttrs'))
                ) {
                  for (t = a.length; t--; )
                    a[t] &&
                      0 === (r = a[t].name).indexOf('data-') &&
                      ((r = b(r.slice(5))), ge(i, r, o[r]));
                  x.set(i, 'hasDataAttrs', !0);
                }
                return o;
              },
              removeData: function (e) {
                return this.each(function () {
                  l.remove(this, e);
                });
              }
            }),
            T.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (r = x.get(e, (t = (t || 'fx') + 'queue'))),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = x.access(e, t, T.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || 'fx';
                var n = T.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = T._queueHooks(e, t);
                'inprogress' === o && ((o = n.shift()), r--),
                  o &&
                    ('fx' === t && n.unshift('inprogress'),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                  x.get(e, n) ||
                  x.access(e, n, {
                    empty: T.Callbacks('once memory').add(function () {
                      x.remove(e, [t + 'queue', n]);
                    })
                  })
                );
              }
            }),
            T.fn.extend({
              queue: function (t, n) {
                var e = 2;
                return (
                  'string' != typeof t && ((n = t), (t = 'fx'), e--),
                  arguments.length < e
                    ? T.queue(this[0], t)
                    : void 0 === n
                    ? this
                    : this.each(function () {
                        var e = T.queue(this, t, n);
                        T._queueHooks(this, t),
                          'fx' === t &&
                            'inprogress' !== e[0] &&
                            T.dequeue(this, t);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || 'fx', []);
              },
              promise: function (e, t) {
                function n() {
                  --o || i.resolveWith(a, [a]);
                }
                var r,
                  o = 1,
                  i = T.Deferred(),
                  a = this,
                  s = this.length;
                for (
                  'string' != typeof e && ((t = e), (e = void 0)),
                    e = e || 'fx';
                  s--;

                )
                  (r = x.get(a[s], e + 'queueHooks')) &&
                    r.empty &&
                    (o++, r.empty.add(n));
                return n(), i.promise(t);
              }
            });
          function me(e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display && E(e) && 'none' === T.css(e, 'display'))
            );
          }
          var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ye = new RegExp('^(?:([+-])=|)(' + e + ')([a-z%]*)$', 'i'),
            p = ['Top', 'Right', 'Bottom', 'Left'],
            j = C.documentElement,
            E = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          j.getRootNode &&
            (E = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(ve) === e.ownerDocument
              );
            });
          function be(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return T.css(e, t, '');
                  },
              u = s(),
              l = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
              c =
                e.nodeType &&
                (T.cssNumber[t] || ('px' !== l && +u)) &&
                ye.exec(T.css(e, t));
            if (c && c[3] !== l) {
              for (l = l || c[3], c = +(u /= 2) || 1; a--; )
                T.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              T.style(e, t, (c *= 2) + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var xe = {};
          function S(e, t) {
            for (var n, r, o, i, a, s = [], u = 0, l = e.length; u < l; u++)
              (r = e[u]).style &&
                ((n = r.style.display),
                t
                  ? ('none' === n &&
                      ((s[u] = x.get(r, 'display') || null),
                      s[u] || (r.style.display = '')),
                    '' === r.style.display &&
                      me(r) &&
                      (s[u] =
                        ((a = i = void 0),
                        (i = (o = r).ownerDocument),
                        (o = o.nodeName),
                        (a = xe[o]) ||
                          ((i = i.body.appendChild(i.createElement(o))),
                          (a = T.css(i, 'display')),
                          i.parentNode.removeChild(i),
                          (xe[o] = a = 'none' === a ? 'block' : a)),
                        a)))
                  : 'none' !== n && ((s[u] = 'none'), x.set(r, 'display', n)));
            for (u = 0; u < l; u++) null != s[u] && (e[u].style.display = s[u]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return S(this, !0);
            },
            hide: function () {
              return S(this);
            },
            toggle: function (e) {
              return 'boolean' == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    me(this) ? T(this).show() : T(this).hide();
                  });
            }
          });
          var we = /^(?:checkbox|radio)$/i,
            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Te = /^$|^module$|\/(?:java|ecma)script/i,
            A =
              ((O = C.createDocumentFragment().appendChild(
                C.createElement('div')
              )),
              (a = C.createElement('input')).setAttribute('type', 'radio'),
              a.setAttribute('checked', 'checked'),
              a.setAttribute('name', 't'),
              O.appendChild(a),
              (m.checkClone = O.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (O.innerHTML = '<textarea>x</textarea>'),
              (m.noCloneChecked = !!O.cloneNode(!0).lastChild.defaultValue),
              (O.innerHTML = '<option></option>'),
              (m.option = !!O.lastChild),
              {
                thead: [1, '<table>', '</table>'],
                col: [2, '<table><colgroup>', '</colgroup></table>'],
                tr: [2, '<table><tbody>', '</tbody></table>'],
                td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                _default: [0, '', '']
              });
          function N(e, t) {
            var n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : [];
            return void 0 === t || (t && u(e, t)) ? T.merge([e], n) : n;
          }
          function ke(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              x.set(e[n], 'globalEval', !t || x.get(t[n], 'globalEval'));
          }
          (A.tbody = A.tfoot = A.colgroup = A.caption = A.thead),
            (A.th = A.td),
            m.option ||
              (A.optgroup = A.option =
                [1, "<select multiple='multiple'>", '</select>']);
          var je = /<|&#?\w+;/;
          function Ee(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c = t.createDocumentFragment(),
                f = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((i = e[p]) || 0 === i)
                if ('object' === d(i)) T.merge(f, i.nodeType ? [i] : i);
                else if (je.test(i)) {
                  for (
                    a = a || c.appendChild(t.createElement('div')),
                      s = (Ce.exec(i) || ['', ''])[1].toLowerCase(),
                      s = A[s] || A._default,
                      a.innerHTML = s[1] + T.htmlPrefilter(i) + s[2],
                      l = s[0];
                    l--;

                  )
                    a = a.lastChild;
                  T.merge(f, a.childNodes),
                    ((a = c.firstChild).textContent = '');
                } else f.push(t.createTextNode(i));
            for (c.textContent = '', p = 0; (i = f[p++]); )
              if (r && -1 < T.inArray(i, r)) o && o.push(i);
              else if (
                ((u = E(i)), (a = N(c.appendChild(i), 'script')), u && ke(a), n)
              )
                for (l = 0; (i = a[l++]); ) Te.test(i.type || '') && n.push(i);
            return c;
          }
          var Se = /^key/,
            Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ne = /^([^.]*)(?:\.(.+)|)/;
          function n() {
            return !0;
          }
          function h() {
            return !1;
          }
          function qe(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return C.activeElement;
                  } catch (e) {}
                })()) ==
              ('focus' === t)
            );
          }
          function De(e, t, n, r, o, i) {
            var a, s;
            if ('object' == typeof t) {
              for (s in ('string' != typeof n && ((r = r || n), (n = void 0)),
              t))
                De(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ('string' == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = h;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                ((o = function (e) {
                  return T().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, o, r, n);
              })
            );
          }
          function Oe(e, o, i) {
            i
              ? (x.set(e, o, !1),
                T.event.add(e, o, {
                  namespace: !1,
                  handler: function (e) {
                    var t,
                      n,
                      r = x.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                      if (r.length)
                        (T.event.special[o] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = s.call(arguments)),
                        x.set(this, o, r),
                        (t = i(this, o)),
                        this[o](),
                        r !== (n = x.get(this, o)) || t
                          ? x.set(this, o, !1)
                          : (n = {}),
                        r !== n)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          n.value
                        );
                    } else
                      r.length &&
                        (x.set(this, o, {
                          value: T.event.trigger(
                            T.extend(r[0], T.Event.prototype),
                            r.slice(1),
                            this
                          )
                        }),
                        e.stopImmediatePropagation());
                  }
                }))
              : void 0 === x.get(e, o) && T.event.add(e, o, n);
          }
          (T.event = {
            global: {},
            add: function (t, e, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                h,
                d = x.get(t);
              if (y(t))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && T.find.matchesSelector(j, o),
                    n.guid || (n.guid = T.guid++),
                    (s = d.events) || (s = d.events = Object.create(null)),
                    (a = d.handle) ||
                      (a = d.handle =
                        function (e) {
                          return void 0 !== T && T.event.triggered !== e.type
                            ? T.event.dispatch.apply(t, arguments)
                            : void 0;
                        }),
                    u = (e = (e || '').match(k) || ['']).length;
                  u--;

                )
                  (f = h = (p = Ne.exec(e[u]) || [])[1]),
                    (p = (p[2] || '').split('.').sort()),
                    f &&
                      ((l = T.event.special[f] || {}),
                      (f = (o ? l.delegateType : l.bindType) || f),
                      (l = T.event.special[f] || {}),
                      (h = T.extend(
                        {
                          type: f,
                          origType: h,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && T.expr.match.needsContext.test(o),
                          namespace: p.join('.')
                        },
                        i
                      )),
                      (c = s[f]) ||
                        (((c = s[f] = []).delegateCount = 0),
                        (l.setup && !1 !== l.setup.call(t, r, p, a)) ||
                          (t.addEventListener && t.addEventListener(f, a))),
                      l.add &&
                        (l.add.call(t, h),
                        h.handler.guid || (h.handler.guid = n.guid)),
                      o ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                      (T.event.global[f] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                h,
                d,
                g,
                m = x.hasData(e) && x.get(e);
              if (m && (u = m.events)) {
                for (l = (t = (t || '').match(k) || ['']).length; l--; )
                  if (
                    ((h = g = (s = Ne.exec(t[l]) || [])[1]),
                    (d = (s[2] || '').split('.').sort()),
                    h)
                  ) {
                    for (
                      f = T.event.special[h] || {},
                        p =
                          u[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (c = p[i]),
                        (!o && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ('**' !== r || !c.selector)) ||
                          (p.splice(i, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, d, m.handle)) ||
                        T.removeEvent(e, h, m.handle),
                      delete u[h]);
                  } else for (h in u) T.event.remove(e, h + t[l], n, r, !0);
                T.isEmptyObject(u) && x.remove(e, 'handle events');
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a = new Array(arguments.length),
                s = T.event.fix(e),
                e =
                  (x.get(this, 'events') || Object.create(null))[s.type] || [],
                u = T.event.special[s.type] || {};
              for (a[0] = s, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((s.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, s))
              ) {
                for (
                  i = T.event.handlers.call(this, s, e), t = 0;
                  (r = i[t++]) && !s.isPropagationStopped();

                )
                  for (
                    s.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

                  )
                    (s.rnamespace &&
                      !1 !== o.namespace &&
                      !s.rnamespace.test(o.namespace)) ||
                      ((s.handleObj = o),
                      (s.data = o.data),
                      void 0 !==
                        (o = (
                          (T.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (s.result = o) &&
                        (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ('click' !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + ' ')] &&
                        (a[o] = r.needsContext
                          ? -1 < T(o, this).index(l)
                          : T.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: l, handlers: i });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (t, e) {
              Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                  });
                }
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  e = this || e;
                  return (
                    we.test(e.type) &&
                      e.click &&
                      u(e, 'input') &&
                      Oe(e, 'click', n),
                    !1
                  );
                },
                trigger: function (e) {
                  e = this || e;
                  return (
                    we.test(e.type) &&
                      e.click &&
                      u(e, 'input') &&
                      Oe(e, 'click'),
                    !0
                  );
                },
                _default: function (e) {
                  e = e.target;
                  return (
                    (we.test(e.type) &&
                      e.click &&
                      u(e, 'input') &&
                      x.get(e, 'click')) ||
                    u(e, 'a')
                  );
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? n
                      : h),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: h,
              isPropagationStopped: h,
              isImmediatePropagationStopped: h,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = n),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = n),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = n),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              }
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Se.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Ae.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                }
              },
              T.event.addProp
            ),
            T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Oe(this, e, qe), !1;
                },
                trigger: function () {
                  return Oe(this, e), !0;
                },
                delegateType: t
              };
            }),
            T.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout'
              },
              function (e, o) {
                T.event.special[e] = {
                  delegateType: o,
                  bindType: o,
                  handle: function (e) {
                    var t,
                      n = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (n && (n === this || T.contains(this, n))) ||
                        ((e.type = r.origType),
                        (t = r.handler.apply(this, arguments)),
                        (e.type = o)),
                      t
                    );
                  }
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, r) {
                return De(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  (r = e.handleObj),
                    T(e.delegateTarget).off(
                      r.namespace ? r.origType + '.' + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    );
                else {
                  if ('object' != typeof e)
                    return (
                      (!1 !== t && 'function' != typeof t) ||
                        ((n = t), (t = void 0)),
                      !1 === n && (n = h),
                      this.each(function () {
                        T.event.remove(this, e, n, t);
                      })
                    );
                  for (o in e) this.off(o, t, e[o]);
                }
                return this;
              }
            });
          var Le = /<script|<style|<link/i,
            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Re(e, t) {
            return (
              (u(e, 'table') &&
                u(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                T(e).children('tbody')[0]) ||
              e
            );
          }
          function Ie(e) {
            return (
              (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
            );
          }
          function Me(e) {
            return (
              'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
              e
            );
          }
          function _e(e, t) {
            var n, r, o, i;
            if (1 === t.nodeType) {
              if (x.hasData(e) && (i = x.get(e).events))
                for (o in (x.remove(t, 'handle events'), i))
                  for (n = 0, r = i[o].length; n < r; n++)
                    T.event.add(t, o, i[o][n]);
              l.hasData(e) &&
                ((e = l.access(e)), (e = T.extend({}, e)), l.set(t, e));
            }
          }
          function q(n, r, o, i) {
            r = M(r);
            var e,
              t,
              a,
              s,
              u,
              l,
              c = 0,
              f = n.length,
              p = f - 1,
              h = r[0],
              d = v(h);
            if (
              d ||
              (1 < f && 'string' == typeof h && !m.checkClone && He.test(h))
            )
              return n.each(function (e) {
                var t = n.eq(e);
                d && (r[0] = h.call(this, e, t.html())), q(t, r, o, i);
              });
            if (
              f &&
              ((t = (e = Ee(r, n[0].ownerDocument, !1, n, i)).firstChild),
              1 === e.childNodes.length && (e = t),
              t || i)
            ) {
              for (s = (a = T.map(N(e, 'script'), Ie)).length; c < f; c++)
                (u = e),
                  c !== p &&
                    ((u = T.clone(u, !0, !0)), s && T.merge(a, N(u, 'script'))),
                  o.call(n[c], u, c);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, T.map(a, Me), c = 0;
                  c < s;
                  c++
                )
                  (u = a[c]),
                    Te.test(u.type || '') &&
                      !x.access(u, 'globalEval') &&
                      T.contains(l, u) &&
                      (u.src && 'module' !== (u.type || '').toLowerCase()
                        ? T._evalUrl &&
                          !u.noModule &&
                          T._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute('nonce') },
                            l
                          )
                        : K(u.textContent.replace(Pe, ''), u, l));
            }
            return n;
          }
          function $e(e, t, n) {
            for (
              var r, o = t ? T.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || T.cleanData(N(r)),
                r.parentNode &&
                  (n && E(r) && ke(N(r, 'script')),
                  r.parentNode.removeChild(r));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = E(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (a = N(c), r = 0, o = (i = N(e)).length; r < o; r++)
                  (s = i[r]),
                    (u = a[r]),
                    (l = void 0),
                    'input' === (l = u.nodeName.toLowerCase()) &&
                    we.test(s.type)
                      ? (u.checked = s.checked)
                      : ('input' !== l && 'textarea' !== l) ||
                        (u.defaultValue = s.defaultValue);
              if (t)
                if (n)
                  for (
                    i = i || N(e), a = a || N(c), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    _e(i[r], a[r]);
                else _e(e, c);
              return (
                0 < (a = N(c, 'script')).length && ke(a, !f && N(e, 'script')),
                c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = T.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (y(n)) {
                  if ((t = n[x.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? T.event.remove(n, r)
                          : T.removeEvent(n, r, t.handle);
                    n[x.expando] = void 0;
                  }
                  n[l.expando] && (n[l.expando] = void 0);
                }
            }
          }),
            T.fn.extend({
              detach: function (e) {
                return $e(this, e, !0);
              },
              remove: function (e) {
                return $e(this, e);
              },
              text: function (e) {
                return f(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return q(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Re(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return q(this, arguments, function (e) {
                  var t;
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (t = Re(this, e)).insertBefore(e, t.firstChild);
                });
              },
              before: function () {
                return q(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return q(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(N(e, !1)), (e.textContent = ''));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return f(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      'string' == typeof e &&
                      !Le.test(e) &&
                      !A[(Ce.exec(e) || ['', ''])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(N(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var n = [];
                return q(
                  this,
                  arguments,
                  function (e) {
                    var t = this.parentNode;
                    T.inArray(this, n) < 0 &&
                      (T.cleanData(N(this)), t && t.replaceChild(e, this));
                  },
                  n
                );
              }
            }),
            T.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith'
              },
              function (e, a) {
                T.fn[e] = function (e) {
                  for (
                    var t, n = [], r = T(e), o = r.length - 1, i = 0;
                    i <= o;
                    i++
                  )
                    (t = i === o ? this : this.clone(!0)),
                      T(r[i])[a](t),
                      _.apply(n, t.get());
                  return this.pushStack(n);
                };
              }
            );
          function Fe(e) {
            var t = e.ownerDocument.defaultView;
            return (t = t && t.opener ? t : w).getComputedStyle(e);
          }
          function Be(e, t, n) {
            var r,
              o = {};
            for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((n = n.call(e)), t)) e.style[r] = o[r];
            return n;
          }
          var We,
            Ue,
            ze,
            Xe,
            Ke,
            Ve,
            Ge,
            o,
            Ye = new RegExp('^(' + e + ')(?!px)[a-z%]+$', 'i'),
            Qe = new RegExp(p.join('|'), 'i');
          function Je() {
            var e;
            o &&
              ((Ge.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (o.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              j.appendChild(Ge).appendChild(o),
              (e = w.getComputedStyle(o)),
              (We = '1%' !== e.top),
              (Ve = 12 === Ze(e.marginLeft)),
              (o.style.right = '60%'),
              (Xe = 36 === Ze(e.right)),
              (Ue = 36 === Ze(e.width)),
              (o.style.position = 'absolute'),
              (ze = 12 === Ze(o.offsetWidth / 3)),
              j.removeChild(Ge),
              (o = null));
          }
          function Ze(e) {
            return Math.round(parseFloat(e));
          }
          function et(e, t, n) {
            var r,
              o,
              i = e.style;
            return (
              (n = n || Fe(e)) &&
                ('' !== (o = n.getPropertyValue(t) || n[t]) ||
                  E(e) ||
                  (o = T.style(e, t)),
                !m.pixelBoxStyles() &&
                  Ye.test(o) &&
                  Qe.test(t) &&
                  ((e = i.width),
                  (t = i.minWidth),
                  (r = i.maxWidth),
                  (i.minWidth = i.maxWidth = i.width = o),
                  (o = n.width),
                  (i.width = e),
                  (i.minWidth = t),
                  (i.maxWidth = r))),
              void 0 !== o ? o + '' : o
            );
          }
          function tt(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }
          (Ge = C.createElement('div')),
            (o = C.createElement('div')).style &&
              ((o.style.backgroundClip = 'content-box'),
              (o.cloneNode(!0).style.backgroundClip = ''),
              (m.clearCloneStyle = 'content-box' === o.style.backgroundClip),
              T.extend(m, {
                boxSizingReliable: function () {
                  return Je(), Ue;
                },
                pixelBoxStyles: function () {
                  return Je(), Xe;
                },
                pixelPosition: function () {
                  return Je(), We;
                },
                reliableMarginLeft: function () {
                  return Je(), Ve;
                },
                scrollboxSize: function () {
                  return Je(), ze;
                },
                reliableTrDimensions: function () {
                  var e, t, n;
                  return (
                    null == Ke &&
                      ((e = C.createElement('table')),
                      (t = C.createElement('tr')),
                      (n = C.createElement('div')),
                      (e.style.cssText = 'position:absolute;left:-11111px'),
                      (t.style.height = '1px'),
                      (n.style.height = '9px'),
                      j.appendChild(e).appendChild(t).appendChild(n),
                      (n = w.getComputedStyle(t)),
                      (Ke = 3 < parseInt(n.height)),
                      j.removeChild(e)),
                    Ke
                  );
                }
              }));
          var nt = ['Webkit', 'Moz', 'ms'],
            rt = C.createElement('div').style,
            ot = {};
          function it(e) {
            var t = T.cssProps[e] || ot[e];
            return (
              t ||
              (e in rt
                ? e
                : (ot[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = nt.length;
                        n--;

                      )
                        if ((e = nt[n] + t) in rt) return e;
                    })(e) || e))
            );
          }
          var at = /^(none|table(?!-c[ea]).+)/,
            st = /^--/,
            ut = {
              position: 'absolute',
              visibility: 'hidden',
              display: 'block'
            },
            lt = { letterSpacing: '0', fontWeight: '400' };
          function ct(e, t, n) {
            var r = ye.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
          }
          function ft(e, t, n, r, o, i) {
            var a = 'width' === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? 'border' : 'content')) return 0;
            for (; a < 4; a += 2)
              'margin' === n && (u += T.css(e, n + p[a], !0, o)),
                r
                  ? ('content' === n &&
                      (u -= T.css(e, 'padding' + p[a], !0, o)),
                    'margin' !== n &&
                      (u -= T.css(e, 'border' + p[a] + 'Width', !0, o)))
                  : ((u += T.css(e, 'padding' + p[a], !0, o)),
                    'padding' !== n
                      ? (u += T.css(e, 'border' + p[a] + 'Width', !0, o))
                      : (s += T.css(e, 'border' + p[a] + 'Width', !0, o)));
            return (
              !r &&
                0 <= i &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function pt(e, t, n) {
            var r = Fe(e),
              o =
                (!m.boxSizingReliable() || n) &&
                'border-box' === T.css(e, 'boxSizing', !1, r),
              i = o,
              a = et(e, t, r),
              s = 'offset' + t[0].toUpperCase() + t.slice(1);
            if (Ye.test(a)) {
              if (!n) return a;
              a = 'auto';
            }
            return (
              ((!m.boxSizingReliable() && o) ||
                (!m.reliableTrDimensions() && u(e, 'tr')) ||
                'auto' === a ||
                (!parseFloat(a) && 'inline' === T.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((o = 'border-box' === T.css(e, 'boxSizing', !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                ft(e, t, n || (o ? 'border' : 'content'), i, r, a) +
                'px'
            );
          }
          function i(e, t, n, r, o) {
            return new i.prototype.init(e, t, n, r, o);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) return '' === (t = et(e, 'opacity')) ? '1' : t;
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
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = b(t),
                  u = st.test(t),
                  l = e.style;
                if (
                  (u || (t = it(s)),
                  (a = T.cssHooks[t] || T.cssHooks[s]),
                  void 0 === n)
                )
                  return a && 'get' in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                'string' === (i = typeof n) &&
                  (o = ye.exec(n)) &&
                  o[1] &&
                  ((n = be(e, t, o)), (i = 'number')),
                  null != n &&
                    n == n &&
                    ('number' !== i ||
                      u ||
                      (n += (o && o[3]) || (T.cssNumber[s] ? '' : 'px')),
                    m.clearCloneStyle ||
                      '' !== n ||
                      0 !== t.indexOf('background') ||
                      (l[t] = 'inherit'),
                    (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i = b(t);
              return (
                st.test(t) || (t = it(i)),
                'normal' ===
                  (o =
                    void 0 ===
                    (o =
                      (i = T.cssHooks[t] || T.cssHooks[i]) && 'get' in i
                        ? i.get(e, !0, n)
                        : o)
                      ? et(e, t, r)
                      : o) &&
                  t in lt &&
                  (o = lt[t]),
                ('' === n || n) &&
                ((i = parseFloat(o)), !0 === n || isFinite(i))
                  ? i || 0
                  : o
              );
            }
          }),
            T.each(['height', 'width'], function (e, a) {
              T.cssHooks[a] = {
                get: function (e, t, n) {
                  if (t)
                    return !at.test(T.css(e, 'display')) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? pt(e, a, n)
                      : Be(e, ut, function () {
                          return pt(e, a, n);
                        });
                },
                set: function (e, t, n) {
                  var r = Fe(e),
                    o = !m.scrollboxSize() && 'absolute' === r.position,
                    i =
                      (o || n) && 'border-box' === T.css(e, 'boxSizing', !1, r),
                    n = n ? ft(e, a, n, i, r) : 0;
                  return (
                    i &&
                      o &&
                      (n -= Math.ceil(
                        e['offset' + a[0].toUpperCase() + a.slice(1)] -
                          parseFloat(r[a]) -
                          ft(e, a, 'border', !1, r) -
                          0.5
                      )),
                    n &&
                      (i = ye.exec(t)) &&
                      'px' !== (i[3] || 'px') &&
                      ((e.style[a] = t), (t = T.css(e, a))),
                    ct(0, t, n)
                  );
                }
              };
            }),
            (T.cssHooks.marginLeft = tt(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(et(e, 'marginLeft')) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + 'px'
                );
            })),
            T.each(
              { margin: '', padding: '', border: 'Width' },
              function (o, i) {
                (T.cssHooks[o + i] = {
                  expand: function (e) {
                    for (
                      var t = 0,
                        n = {},
                        r = 'string' == typeof e ? e.split(' ') : [e];
                      t < 4;
                      t++
                    )
                      n[o + p[t] + i] = r[t] || r[t - 2] || r[0];
                    return n;
                  }
                }),
                  'margin' !== o && (T.cssHooks[o + i].set = ct);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return f(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Fe(e), o = t.length; a < o; a++)
                        i[t[a]] = T.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  1 < arguments.length
                );
              }
            }),
            (((T.Tween = i).prototype = {
              constructor: i,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (T.cssNumber[n] ? '' : 'px'));
              },
              cur: function () {
                var e = i.propHooks[this.prop];
                return (e && e.get ? e : i.propHooks._default).get(this);
              },
              run: function (e) {
                var t,
                  n = i.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  (n && n.set ? n : i.propHooks._default).set(this),
                  this
                );
              }
            }).init.prototype = i.prototype),
            ((i.propHooks = {
              _default: {
                get: function (e) {
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (e = T.css(e.elem, e.prop, '')) && 'auto' !== e
                    ? e
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                }
              }
            }).scrollTop = i.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                }
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: 'swing'
            }),
            (T.fx = i.prototype.init),
            (T.fx.step = {});
          var D,
            ht,
            a,
            O,
            dt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function mt() {
            ht &&
              (!1 === C.hidden && w.requestAnimationFrame
                ? w.requestAnimationFrame(mt)
                : w.setTimeout(mt, T.fx.interval),
              T.fx.tick());
          }
          function yt() {
            return (
              w.setTimeout(function () {
                D = void 0;
              }),
              (D = Date.now())
            );
          }
          function vt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o['margin' + (n = p[r])] = o['padding' + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function bt(e, t, n) {
            for (
              var r,
                o = (L.tweeners[t] || []).concat(L.tweeners['*']),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function L(o, e, t) {
            var n,
              i,
              r,
              a,
              s,
              u,
              l,
              c = 0,
              f = L.prefilters.length,
              p = T.Deferred().always(function () {
                delete h.elem;
              }),
              h = function () {
                if (!i) {
                  for (
                    var e = D || yt(),
                      e = Math.max(0, d.startTime + d.duration - e),
                      t = 1 - (e / d.duration || 0),
                      n = 0,
                      r = d.tweens.length;
                    n < r;
                    n++
                  )
                    d.tweens[n].run(t);
                  if ((p.notifyWith(o, [d, t, e]), t < 1 && r)) return e;
                  r || p.notifyWith(o, [d, 1, 0]), p.resolveWith(o, [d]);
                }
                return !1;
              },
              d = p.promise({
                elem: o,
                props: T.extend({}, e),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: D || yt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                  t = T.Tween(
                    o,
                    d.opts,
                    e,
                    t,
                    d.opts.specialEasing[e] || d.opts.easing
                  );
                  return d.tweens.push(t), t;
                },
                stop: function (e) {
                  var t = 0,
                    n = e ? d.tweens.length : 0;
                  if (!i) {
                    for (i = !0; t < n; t++) d.tweens[t].run(1);
                    e
                      ? (p.notifyWith(o, [d, 1, 0]), p.resolveWith(o, [d, e]))
                      : p.rejectWith(o, [d, e]);
                  }
                  return this;
                }
              }),
              g = d.props,
              m = g,
              y = d.opts.specialEasing;
            for (r in m)
              if (
                ((s = y[(a = b(r))]),
                (u = m[r]),
                Array.isArray(u) && ((s = u[1]), (u = m[r] = u[0])),
                r !== a && ((m[a] = u), delete m[r]),
                (l = T.cssHooks[a]) && 'expand' in l)
              )
                for (r in ((u = l.expand(u)), delete m[a], u))
                  r in m || ((m[r] = u[r]), (y[r] = s));
              else y[a] = s;
            for (; c < f; c++)
              if ((n = L.prefilters[c].call(d, o, g, d.opts)))
                return (
                  v(n.stop) &&
                    (T._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)),
                  n
                );
            return (
              T.map(g, bt, d),
              v(d.opts.start) && d.opts.start.call(o, d),
              d
                .progress(d.opts.progress)
                .done(d.opts.done, d.opts.complete)
                .fail(d.opts.fail)
                .always(d.opts.always),
              T.fx.timer(
                T.extend(h, { elem: o, anim: d, queue: d.opts.queue })
              ),
              d
            );
          }
          (T.Animation = T.extend(L, {
            tweeners: {
              '*': [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return be(n.elem, e, ye.exec(t), n), n;
                }
              ]
            },
            tweener: function (e, t) {
              for (
                var n,
                  r = 0,
                  o = (e = v(e) ? ((t = e), ['*']) : e.match(k)).length;
                r < o;
                r++
              )
                (n = e[r]),
                  (L.tweeners[n] = L.tweeners[n] || []),
                  L.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c = 'width' in t || 'height' in t,
                  f = this,
                  p = {},
                  h = e.style,
                  d = e.nodeType && me(e),
                  g = x.get(e, 'fxshow');
                for (r in (n.queue ||
                  (null == (a = T._queueHooks(e, 'fx')).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, T.queue(e, 'fx').length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), dt.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || 'toggle' === o),
                      o === (d ? 'hide' : 'show'))
                    ) {
                      if ('show' !== o || !g || void 0 === g[r]) continue;
                      d = !0;
                    }
                    p[r] = (g && g[r]) || T.style(e, r);
                  }
                if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                  for (r in (c &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = g && g.display) && (l = x.get(e, 'display')),
                    'none' === (c = T.css(e, 'display')) &&
                      (l
                        ? (c = l)
                        : (S([e], !0),
                          (l = e.style.display || l),
                          (c = T.css(e, 'display')),
                          S([e]))),
                    ('inline' === c || ('inline-block' === c && null != l)) &&
                      'none' === T.css(e, 'float') &&
                      (u ||
                        (f.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = 'none' === c ? '' : c))),
                      (h.display = 'inline-block'))),
                  n.overflow &&
                    ((h.overflow = 'hidden'),
                    f.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (g
                        ? 'hidden' in g && (d = g.hidden)
                        : (g = x.access(e, 'fxshow', { display: l })),
                      i && (g.hidden = !d),
                      d && S([e], !0),
                      f.done(function () {
                        for (r in (d || S([e]), x.remove(e, 'fxshow'), p))
                          T.style(e, r, p[r]);
                      })),
                      (u = bt(d ? g[r] : 0, r, f)),
                      r in g ||
                        ((g[r] = u.start),
                        d && ((u.end = u.start), (u.start = 0)));
              }
            ],
            prefilter: function (e, t) {
              t ? L.prefilters.unshift(e) : L.prefilters.push(e);
            }
          })),
            (T.speed = function (e, t, n) {
              var r =
                e && 'object' == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t)
                    };
              return (
                T.fx.off
                  ? (r.duration = 0)
                  : 'number' != typeof r.duration &&
                    (r.duration in T.fx.speeds
                      ? (r.duration = T.fx.speeds[r.duration])
                      : (r.duration = T.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && T.dequeue(this, r.queue);
                }),
                r
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(me)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (t, e, n, r) {
                function o() {
                  var e = L(this, T.extend({}, t), a);
                  (i || x.get(this, 'finish')) && e.stop(!0);
                }
                var i = T.isEmptyObject(t),
                  a = T.speed(e, n, r);
                return (
                  (o.finish = o),
                  i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                );
              },
              stop: function (o, e, i) {
                function a(e) {
                  var t = e.stop;
                  delete e.stop, t(i);
                }
                return (
                  'string' != typeof o && ((i = e), (e = o), (o = void 0)),
                  e && this.queue(o || 'fx', []),
                  this.each(function () {
                    var e = !0,
                      t = null != o && o + 'queueHooks',
                      n = T.timers,
                      r = x.get(this);
                    if (t) r[t] && r[t].stop && a(r[t]);
                    else
                      for (t in r) r[t] && r[t].stop && gt.test(t) && a(r[t]);
                    for (t = n.length; t--; )
                      n[t].elem !== this ||
                        (null != o && n[t].queue !== o) ||
                        (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
                    (!e && i) || T.dequeue(this, o);
                  })
                );
              },
              finish: function (a) {
                return (
                  !1 !== a && (a = a || 'fx'),
                  this.each(function () {
                    var e,
                      t = x.get(this),
                      n = t[a + 'queue'],
                      r = t[a + 'queueHooks'],
                      o = T.timers,
                      i = n ? n.length : 0;
                    for (
                      t.finish = !0,
                        T.queue(this, a, []),
                        r && r.stop && r.stop.call(this, !0),
                        e = o.length;
                      e--;

                    )
                      o[e].elem === this &&
                        o[e].queue === a &&
                        (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < i; e++)
                      n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish;
                  })
                );
              }
            }),
            T.each(['toggle', 'show', 'hide'], function (e, r) {
              var o = T.fn[r];
              T.fn[r] = function (e, t, n) {
                return null == e || 'boolean' == typeof e
                  ? o.apply(this, arguments)
                  : this.animate(vt(r, !0), e, t, n);
              };
            }),
            T.each(
              {
                slideDown: vt('show'),
                slideUp: vt('hide'),
                slideToggle: vt('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' }
              },
              function (e, r) {
                T.fn[e] = function (e, t, n) {
                  return this.animate(r, e, t, n);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (D = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (D = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ht || ((ht = !0), mt());
            }),
            (T.fx.stop = function () {
              ht = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (r, e) {
              return (
                (r = (T.fx && T.fx.speeds[r]) || r),
                this.queue((e = e || 'fx'), function (e, t) {
                  var n = w.setTimeout(e, r);
                  t.stop = function () {
                    w.clearTimeout(n);
                  };
                })
              );
            }),
            (a = C.createElement('input')),
            (O = C.createElement('select').appendChild(
              C.createElement('option')
            )),
            (a.type = 'checkbox'),
            (m.checkOn = '' !== a.value),
            (m.optSelected = O.selected),
            ((a = C.createElement('input')).value = 't'),
            (a.type = 'radio'),
            (m.radioValue = 't' === a.value);
          var xt,
            wt = T.expr.attrHandle,
            Ct =
              (T.fn.extend({
                attr: function (e, t) {
                  return f(this, T.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                  return this.each(function () {
                    T.removeAttr(this, e);
                  });
                }
              }),
              T.extend({
                attr: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute
                      ? T.prop(e, t, n)
                      : ((1 === i && T.isXMLDoc(e)) ||
                          (o =
                            T.attrHooks[t.toLowerCase()] ||
                            (T.expr.match.bool.test(t) ? xt : void 0)),
                        void 0 !== n
                          ? null === n
                            ? void T.removeAttr(e, t)
                            : o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                            ? r
                            : (e.setAttribute(t, n + ''), n)
                          : !(o && 'get' in o && null !== (r = o.get(e, t))) &&
                            null == (r = T.find.attr(e, t))
                          ? void 0
                          : r);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      var n;
                      if (!m.radioValue && 'radio' === t && u(e, 'input'))
                        return (
                          (n = e.value),
                          e.setAttribute('type', t),
                          n && (e.value = n),
                          t
                        );
                    }
                  }
                },
                removeAttr: function (e, t) {
                  var n,
                    r = 0,
                    o = t && t.match(k);
                  if (o && 1 === e.nodeType)
                    for (; (n = o[r++]); ) e.removeAttribute(n);
                }
              }),
              (xt = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                }
              }),
              T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = wt[t] || T.find.attr;
                wt[t] = function (e, t, n) {
                  var r,
                    o,
                    i = t.toLowerCase();
                  return (
                    n ||
                      ((o = wt[i]),
                      (wt[i] = r),
                      (r = null != a(e, t, n) ? i : null),
                      (wt[i] = o)),
                    r
                  );
                };
              }),
              /^(?:input|select|textarea|button)$/i),
            Tt = /^(?:a|area)$/i;
          function H(e) {
            return (e.match(k) || []).join(' ');
          }
          function P(e) {
            return (e.getAttribute && e.getAttribute('class')) || '';
          }
          function kt(e) {
            return Array.isArray(e)
              ? e
              : ('string' == typeof e && e.match(k)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return f(this, T.prop, e, t, 1 < arguments.length);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            }
          }),
            T.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                    void 0 !== n
                      ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && 'get' in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, 'tabindex');
                    return t
                      ? parseInt(t, 10)
                      : Ct.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  }
                }
              },
              propFix: { for: 'htmlFor', class: 'className' }
            }),
            m.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  e = e.parentNode;
                  return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  e = e.parentNode;
                  e &&
                    (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex);
                }
              }),
            T.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable'
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = 0;
                if (v(t))
                  return this.each(function (e) {
                    T(this).addClass(t.call(this, e, P(this)));
                  });
                if ((e = kt(t)).length)
                  for (; (n = this[s++]); )
                    if (
                      ((a = P(n)), (r = 1 === n.nodeType && ' ' + H(a) + ' '))
                    ) {
                      for (i = 0; (o = e[i++]); )
                        r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                      a !== (a = H(r)) && n.setAttribute('class', a);
                    }
                return this;
              },
              removeClass: function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = 0;
                if (v(t))
                  return this.each(function (e) {
                    T(this).removeClass(t.call(this, e, P(this)));
                  });
                if (!arguments.length) return this.attr('class', '');
                if ((e = kt(t)).length)
                  for (; (n = this[s++]); )
                    if (
                      ((a = P(n)), (r = 1 === n.nodeType && ' ' + H(a) + ' '))
                    ) {
                      for (i = 0; (o = e[i++]); )
                        for (; -1 < r.indexOf(' ' + o + ' '); )
                          r = r.replace(' ' + o + ' ', ' ');
                      a !== (a = H(r)) && n.setAttribute('class', a);
                    }
                return this;
              },
              toggleClass: function (o, t) {
                var i = typeof o,
                  a = 'string' == i || Array.isArray(o);
                return 'boolean' == typeof t && a
                  ? t
                    ? this.addClass(o)
                    : this.removeClass(o)
                  : v(o)
                  ? this.each(function (e) {
                      T(this).toggleClass(o.call(this, e, P(this), t), t);
                    })
                  : this.each(function () {
                      var e, t, n, r;
                      if (a)
                        for (t = 0, n = T(this), r = kt(o); (e = r[t++]); )
                          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                      else
                        (void 0 !== o && 'boolean' != i) ||
                          ((e = P(this)) && x.set(this, '__className__', e),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              (!e &&
                                !1 !== o &&
                                x.get(this, '__className__')) ||
                                ''
                            ));
                    });
              },
              hasClass: function (e) {
                for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); )
                  if (1 === t.nodeType && -1 < (' ' + H(P(t)) + ' ').indexOf(r))
                    return !0;
                return !1;
              }
            });
          function jt(e) {
            e.stopPropagation();
          }
          var Et = /\r/g,
            St =
              (T.fn.extend({
                val: function (t) {
                  var n,
                    e,
                    r,
                    o = this[0];
                  return arguments.length
                    ? ((r = v(t)),
                      this.each(function (e) {
                        1 === this.nodeType &&
                          (null == (e = r ? t.call(this, e, T(this).val()) : t)
                            ? (e = '')
                            : 'number' == typeof e
                            ? (e += '')
                            : Array.isArray(e) &&
                              (e = T.map(e, function (e) {
                                return null == e ? '' : e + '';
                              })),
                          ((n =
                            T.valHooks[this.type] ||
                            T.valHooks[this.nodeName.toLowerCase()]) &&
                            'set' in n &&
                            void 0 !== n.set(this, e, 'value')) ||
                            (this.value = e));
                      }))
                    : o
                    ? (n =
                        T.valHooks[o.type] ||
                        T.valHooks[o.nodeName.toLowerCase()]) &&
                      'get' in n &&
                      void 0 !== (e = n.get(o, 'value'))
                      ? e
                      : 'string' == typeof (e = o.value)
                      ? e.replace(Et, '')
                      : null == e
                      ? ''
                      : e
                    : void 0;
                }
              }),
              T.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = T.find.attr(e, 'value');
                      return null != t ? t : H(T.text(e));
                    }
                  },
                  select: {
                    get: function (e) {
                      for (
                        var t,
                          n = e.options,
                          r = e.selectedIndex,
                          o = 'select-one' === e.type,
                          i = o ? null : [],
                          a = o ? r + 1 : n.length,
                          s = r < 0 ? a : o ? r : 0;
                        s < a;
                        s++
                      )
                        if (
                          ((t = n[s]).selected || s === r) &&
                          !t.disabled &&
                          (!t.parentNode.disabled ||
                            !u(t.parentNode, 'optgroup'))
                        ) {
                          if (((t = T(t).val()), o)) return t;
                          i.push(t);
                        }
                      return i;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          o = e.options,
                          i = T.makeArray(t),
                          a = o.length;
                        a--;

                      )
                        ((r = o[a]).selected =
                          -1 < T.inArray(T.valHooks.option.get(r), i)) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), i;
                    }
                  }
                }
              }),
              T.each(['radio', 'checkbox'], function () {
                (T.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t))
                      return (e.checked = -1 < T.inArray(T(e).val(), t));
                  }
                }),
                  m.checkOn ||
                    (T.valHooks[this].get = function (e) {
                      return null === e.getAttribute('value') ? 'on' : e.value;
                    });
              }),
              (m.focusin = 'onfocusin' in w),
              /^(?:focusinfocus|focusoutblur)$/),
            At =
              (T.extend(T.event, {
                trigger: function (e, t, n, r) {
                  var o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = [n || C],
                    p = W.call(e, 'type') ? e.type : e,
                    h = W.call(e, 'namespace') ? e.namespace.split('.') : [],
                    d = (c = i = n = n || C);
                  if (
                    3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !St.test(p + T.event.triggered) &&
                    (-1 < p.indexOf('.') &&
                      ((p = (h = p.split('.')).shift()), h.sort()),
                    (s = p.indexOf(':') < 0 && 'on' + p),
                    ((e = e[T.expando]
                      ? e
                      : new T.Event(p, 'object' == typeof e && e)).isTrigger = r
                      ? 2
                      : 3),
                    (e.namespace = h.join('.')),
                    (e.rnamespace = e.namespace
                      ? new RegExp(
                          '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : T.makeArray(t, [e])),
                    (l = T.event.special[p] || {}),
                    r || !l.trigger || !1 !== l.trigger.apply(n, t))
                  ) {
                    if (!r && !l.noBubble && !g(n)) {
                      for (
                        a = l.delegateType || p,
                          St.test(a + p) || (d = d.parentNode);
                        d;
                        d = d.parentNode
                      )
                        f.push(d), (i = d);
                      i === (n.ownerDocument || C) &&
                        f.push(i.defaultView || i.parentWindow || w);
                    }
                    for (o = 0; (d = f[o++]) && !e.isPropagationStopped(); )
                      (c = d),
                        (e.type = 1 < o ? a : l.bindType || p),
                        (u =
                          (x.get(d, 'events') || Object.create(null))[e.type] &&
                          x.get(d, 'handle')) && u.apply(d, t),
                        (u = s && d[s]) &&
                          u.apply &&
                          y(d) &&
                          ((e.result = u.apply(d, t)),
                          !1 === e.result && e.preventDefault());
                    return (
                      (e.type = p),
                      r ||
                        e.isDefaultPrevented() ||
                        (l._default && !1 !== l._default.apply(f.pop(), t)) ||
                        !y(n) ||
                        (s &&
                          v(n[p]) &&
                          !g(n) &&
                          ((i = n[s]) && (n[s] = null),
                          (T.event.triggered = p),
                          e.isPropagationStopped() && c.addEventListener(p, jt),
                          n[p](),
                          e.isPropagationStopped() &&
                            c.removeEventListener(p, jt),
                          (T.event.triggered = void 0),
                          i && (n[s] = i))),
                      e.result
                    );
                  }
                },
                simulate: function (e, t, n) {
                  n = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
                  T.event.trigger(n, null, t);
                }
              }),
              T.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    T.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return T.event.trigger(e, t, n, !0);
                }
              }),
              m.focusin ||
                T.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
                  function o(e) {
                    T.event.simulate(r, e.target, T.event.fix(e));
                  }
                  T.event.special[r] = {
                    setup: function () {
                      var e = this.ownerDocument || this.document || this,
                        t = x.access(e, r);
                      t || e.addEventListener(n, o, !0),
                        x.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                      var e = this.ownerDocument || this.document || this,
                        t = x.access(e, r) - 1;
                      t
                        ? x.access(e, r, t)
                        : (e.removeEventListener(n, o, !0), x.remove(e, r));
                    }
                  };
                }),
              w.location),
            Nt = { guid: Date.now() },
            qt = /\?/,
            Dt =
              ((T.parseXML = function (e) {
                var t;
                if (!e || 'string' != typeof e) return null;
                try {
                  t = new w.DOMParser().parseFromString(e, 'text/xml');
                } catch (e) {
                  t = void 0;
                }
                return (
                  (t && !t.getElementsByTagName('parsererror').length) ||
                    T.error('Invalid XML: ' + e),
                  t
                );
              }),
              /\[\]$/),
            Ot = /\r?\n/g,
            Lt = /^(?:submit|button|image|reset|file)$/i,
            Ht = /^(?:input|select|textarea|keygen)/i;
          (T.param = function (e, t) {
            function n(e, t) {
              (t = v(t) ? t() : t),
                (o[o.length] =
                  encodeURIComponent(e) +
                  '=' +
                  encodeURIComponent(null == t ? '' : t));
            }
            var r,
              o = [];
            if (null == e) return '';
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                n(this.name, this.value);
              });
            else
              for (r in e)
                !(function n(r, e, o, i) {
                  if (Array.isArray(e))
                    T.each(e, function (e, t) {
                      o || Dt.test(r)
                        ? i(r, t)
                        : n(
                            r +
                              '[' +
                              ('object' == typeof t && null != t ? e : '') +
                              ']',
                            t,
                            o,
                            i
                          );
                    });
                  else if (o || 'object' !== d(e)) i(r, e);
                  else for (var t in e) n(r + '[' + t + ']', e[t], o, i);
                })(r, e[r], t, n);
            return o.join('&');
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, 'elements');
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(':disabled') &&
                      Ht.test(this.nodeName) &&
                      !Lt.test(e) &&
                      (this.checked || !we.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ot, '\r\n') };
                        })
                      : { name: t.name, value: n.replace(Ot, '\r\n') };
                  })
                  .get();
              }
            });
          var Pt = /%20/g,
            Rt = /#.*$/,
            It = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _t = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            Ft = {},
            Bt = {},
            Wt = '*/'.concat('*'),
            Ut = C.createElement('a');
          function zt(i) {
            return function (e, t) {
              'string' != typeof e && ((t = e), (e = '*'));
              var n,
                r = 0,
                o = e.toLowerCase().match(k) || [];
              if (v(t))
                for (; (n = o[r++]); )
                  '+' === n[0]
                    ? ((n = n.slice(1) || '*'), (i[n] = i[n] || []).unshift(t))
                    : (i[n] = i[n] || []).push(t);
            };
          }
          function Xt(t, r, o, i) {
            var a = {},
              s = t === Bt;
            function u(e) {
              var n;
              return (
                (a[e] = !0),
                T.each(t[e] || [], function (e, t) {
                  t = t(r, o, i);
                  return 'string' != typeof t || s || a[t]
                    ? s
                      ? !(n = t)
                      : void 0
                    : (r.dataTypes.unshift(t), u(t), !1);
                }),
                n
              );
            }
            return u(r.dataTypes[0]) || (!a['*'] && u('*'));
          }
          function Kt(e, t) {
            var n,
              r,
              o = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : (r = r || {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e;
          }
          (Ut.href = At.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: At.href,
                type: 'GET',
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    At.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': Wt,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript'
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: 'responseXML',
                  text: 'responseText',
                  json: 'responseJSON'
                },
                converters: {
                  '* text': String,
                  'text html': !0,
                  'text json': JSON.parse,
                  'text xml': T.parseXML
                },
                flatOptions: { url: !0, context: !0 }
              },
              ajaxSetup: function (e, t) {
                return t ? Kt(Kt(e, T.ajaxSettings), t) : Kt(T.ajaxSettings, e);
              },
              ajaxPrefilter: zt(Ft),
              ajaxTransport: zt(Bt),
              ajax: function (e, t) {
                'object' == typeof e && ((t = e), (e = void 0));
                var u,
                  l,
                  c,
                  n,
                  f,
                  p,
                  h,
                  r,
                  d = T.ajaxSetup({}, (t = t || {})),
                  g = d.context || d,
                  m = d.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                  y = T.Deferred(),
                  v = T.Callbacks('once memory'),
                  b = d.statusCode || {},
                  o = {},
                  i = {},
                  a = 'canceled',
                  x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (p) {
                        if (!n)
                          for (n = {}; (t = Mt.exec(c)); )
                            n[t[1].toLowerCase() + ' '] = (
                              n[t[1].toLowerCase() + ' '] || []
                            ).concat(t[2]);
                        t = n[e.toLowerCase() + ' '];
                      }
                      return null == t ? null : t.join(', ');
                    },
                    getAllResponseHeaders: function () {
                      return p ? c : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == p &&
                          ((e = i[e.toLowerCase()] = i[e.toLowerCase()] || e),
                          (o[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == p && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      if (e)
                        if (p) x.always(e[x.status]);
                        else for (var t in e) b[t] = [b[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      e = e || a;
                      return u && u.abort(e), s(0, e), this;
                    }
                  };
                if (
                  (y.promise(x),
                  (d.url = ((e || d.url || At.href) + '').replace(
                    $t,
                    At.protocol + '//'
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || '*').toLowerCase().match(k) || [
                    ''
                  ]),
                  null == d.crossDomain)
                ) {
                  e = C.createElement('a');
                  try {
                    (e.href = d.url),
                      (e.href = e.href),
                      (d.crossDomain =
                        Ut.protocol + '//' + Ut.host !=
                        e.protocol + '//' + e.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    'string' != typeof d.data &&
                    (d.data = T.param(d.data, d.traditional)),
                  Xt(Ft, d, t, x),
                  !p)
                ) {
                  for (r in ((h = T.event && d.global) &&
                    0 == T.active++ &&
                    T.event.trigger('ajaxStart'),
                  (d.type = d.type.toUpperCase()),
                  (d.hasContent = !_t.test(d.type)),
                  (l = d.url.replace(Rt, '')),
                  d.hasContent
                    ? d.data &&
                      d.processData &&
                      0 ===
                        (d.contentType || '').indexOf(
                          'application/x-www-form-urlencoded'
                        ) &&
                      (d.data = d.data.replace(Pt, '+'))
                    : ((e = d.url.slice(l.length)),
                      d.data &&
                        (d.processData || 'string' == typeof d.data) &&
                        ((l += (qt.test(l) ? '&' : '?') + d.data),
                        delete d.data),
                      !1 === d.cache &&
                        ((l = l.replace(It, '$1')),
                        (e = (qt.test(l) ? '&' : '?') + '_=' + Nt.guid++ + e)),
                      (d.url = l + e)),
                  d.ifModified &&
                    (T.lastModified[l] &&
                      x.setRequestHeader(
                        'If-Modified-Since',
                        T.lastModified[l]
                      ),
                    T.etag[l] &&
                      x.setRequestHeader('If-None-Match', T.etag[l])),
                  ((d.data && d.hasContent && !1 !== d.contentType) ||
                    t.contentType) &&
                    x.setRequestHeader('Content-Type', d.contentType),
                  x.setRequestHeader(
                    'Accept',
                    d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                      ? d.accepts[d.dataTypes[0]] +
                          ('*' !== d.dataTypes[0] ? ', ' + Wt + '; q=0.01' : '')
                      : d.accepts['*']
                  ),
                  d.headers))
                    x.setRequestHeader(r, d.headers[r]);
                  if (d.beforeSend && (!1 === d.beforeSend.call(g, x, d) || p))
                    return x.abort();
                  if (
                    ((a = 'abort'),
                    v.add(d.complete),
                    x.done(d.success),
                    x.fail(d.error),
                    (u = Xt(Bt, d, t, x)))
                  ) {
                    if (
                      ((x.readyState = 1),
                      h && m.trigger('ajaxSend', [x, d]),
                      p)
                    )
                      return x;
                    d.async &&
                      0 < d.timeout &&
                      (f = w.setTimeout(function () {
                        x.abort('timeout');
                      }, d.timeout));
                    try {
                      (p = !1), u.send(o, s);
                    } catch (e) {
                      if (p) throw e;
                      s(-1, e);
                    }
                  } else s(-1, 'No Transport');
                }
                return x;
                function s(e, t, n, r) {
                  var o,
                    i,
                    a,
                    s = t;
                  p ||
                    ((p = !0),
                    f && w.clearTimeout(f),
                    (u = void 0),
                    (c = r || ''),
                    (x.readyState = 0 < e ? 4 : 0),
                    (r = (200 <= e && e < 300) || 304 === e),
                    n &&
                      (a = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          '*' === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader('Content-Type'));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + ' ' + u[0]]) {
                              i = o;
                              break;
                            }
                            a = a || o;
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, x, n)),
                    !r &&
                      -1 < T.inArray('script', d.dataTypes) &&
                      (d.converters['text script'] = function () {}),
                    (a = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ('*' === i) i = u;
                          else if ('*' !== u && u !== i) {
                            if (!(a = l[u + ' ' + i] || l['* ' + i]))
                              for (o in l)
                                if (
                                  (s = o.split(' '))[1] === i &&
                                  (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: 'parsererror',
                                    error: a
                                      ? e
                                      : 'No conversion from ' + u + ' to ' + i
                                  };
                                }
                          }
                      return { state: 'success', data: t };
                    })(d, a, x, r)),
                    r
                      ? (d.ifModified &&
                          ((n = x.getResponseHeader('Last-Modified')) &&
                            (T.lastModified[l] = n),
                          (n = x.getResponseHeader('etag')) && (T.etag[l] = n)),
                        204 === e || 'HEAD' === d.type
                          ? (s = 'nocontent')
                          : 304 === e
                          ? (s = 'notmodified')
                          : ((s = a.state), (o = a.data), (r = !(i = a.error))))
                      : ((i = s),
                        (!e && s) || ((s = 'error'), e < 0 && (e = 0))),
                    (x.status = e),
                    (x.statusText = (t || s) + ''),
                    r
                      ? y.resolveWith(g, [o, s, x])
                      : y.rejectWith(g, [x, s, i]),
                    x.statusCode(b),
                    (b = void 0),
                    h &&
                      m.trigger(r ? 'ajaxSuccess' : 'ajaxError', [
                        x,
                        d,
                        r ? o : i
                      ]),
                    v.fireWith(g, [x, s]),
                    h &&
                      (m.trigger('ajaxComplete', [x, d]),
                      --T.active || T.event.trigger('ajaxStop')));
                }
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, 'json');
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, 'script');
              }
            }),
            T.each(['get', 'post'], function (e, o) {
              T[o] = function (e, t, n, r) {
                return (
                  v(t) && ((r = r || n), (n = t), (t = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: o, dataType: r, data: t, success: n },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              for (var t in e.headers)
                'content-type' === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || '');
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                }
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (n) {
                return v(n)
                  ? this.each(function (e) {
                      T(this).wrapInner(n.call(this, e));
                    })
                  : this.each(function () {
                      var e = T(this),
                        t = e.contents();
                      t.length ? t.wrapAll(n) : e.append(n);
                    });
              },
              wrap: function (t) {
                var n = v(t);
                return this.each(function (e) {
                  T(this).wrapAll(n ? t.call(this, e) : t);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not('body')
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              }
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new w.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Gt = T.ajaxSettings.xhr(),
            Yt =
              ((m.cors = !!Gt && 'withCredentials' in Gt),
              (m.ajax = Gt = !!Gt),
              T.ajaxTransport(function (o) {
                var i, a;
                if (m.cors || (Gt && !o.crossDomain))
                  return {
                    send: function (e, t) {
                      var n,
                        r = o.xhr();
                      if (
                        (r.open(o.type, o.url, o.async, o.username, o.password),
                        o.xhrFields)
                      )
                        for (n in o.xhrFields) r[n] = o.xhrFields[n];
                      for (n in (o.mimeType &&
                        r.overrideMimeType &&
                        r.overrideMimeType(o.mimeType),
                      o.crossDomain ||
                        e['X-Requested-With'] ||
                        (e['X-Requested-With'] = 'XMLHttpRequest'),
                      e))
                        r.setRequestHeader(n, e[n]);
                      (i = function (e) {
                        return function () {
                          i &&
                            ((i =
                              a =
                              r.onload =
                              r.onerror =
                              r.onabort =
                              r.ontimeout =
                              r.onreadystatechange =
                                null),
                            'abort' === e
                              ? r.abort()
                              : 'error' === e
                              ? 'number' != typeof r.status
                                ? t(0, 'error')
                                : t(r.status, r.statusText)
                              : t(
                                  Vt[r.status] || r.status,
                                  r.statusText,
                                  'text' !== (r.responseType || 'text') ||
                                    'string' != typeof r.responseText
                                    ? { binary: r.response }
                                    : { text: r.responseText },
                                  r.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (r.onload = i()),
                        (a = r.onerror = r.ontimeout = i('error')),
                        void 0 !== r.onabort
                          ? (r.onabort = a)
                          : (r.onreadystatechange = function () {
                              4 === r.readyState &&
                                w.setTimeout(function () {
                                  i && a();
                                });
                            }),
                        (i = i('abort'));
                      try {
                        r.send((o.hasContent && o.data) || null);
                      } catch (e) {
                        if (i) throw e;
                      }
                    },
                    abort: function () {
                      i && i();
                    }
                  };
              }),
              T.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              T.ajaxSetup({
                accepts: {
                  script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  'text script': function (e) {
                    return T.globalEval(e), e;
                  }
                }
              }),
              T.ajaxPrefilter('script', function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = 'GET');
              }),
              T.ajaxTransport('script', function (n) {
                var r, o;
                if (n.crossDomain || n.scriptAttrs)
                  return {
                    send: function (e, t) {
                      (r = T('<script>')
                        .attr(n.scriptAttrs || {})
                        .prop({ charset: n.scriptCharset, src: n.url })
                        .on(
                          'load error',
                          (o = function (e) {
                            r.remove(),
                              (o = null),
                              e && t('error' === e.type ? 404 : 200, e.type);
                          })
                        )),
                        C.head.appendChild(r[0]);
                    },
                    abort: function () {
                      o && o();
                    }
                  };
              }),
              []),
            Qt = /(=)\?(?=&|$)|\?\?/,
            Jt =
              (T.ajaxSetup({
                jsonp: 'callback',
                jsonpCallback: function () {
                  var e = Yt.pop() || T.expando + '_' + Nt.guid++;
                  return (this[e] = !0), e;
                }
              }),
              T.ajaxPrefilter('json jsonp', function (e, t, n) {
                var r,
                  o,
                  i,
                  a =
                    !1 !== e.jsonp &&
                    (Qt.test(e.url)
                      ? 'url'
                      : 'string' == typeof e.data &&
                        0 ===
                          (e.contentType || '').indexOf(
                            'application/x-www-form-urlencoded'
                          ) &&
                        Qt.test(e.data) &&
                        'data');
                if (a || 'jsonp' === e.dataTypes[0])
                  return (
                    (r = e.jsonpCallback =
                      v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(Qt, '$1' + r))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (qt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                    (e.converters['script json'] = function () {
                      return i || T.error(r + ' was not called'), i[0];
                    }),
                    (e.dataTypes[0] = 'json'),
                    (o = w[r]),
                    (w[r] = function () {
                      i = arguments;
                    }),
                    n.always(function () {
                      void 0 === o ? T(w).removeProp(r) : (w[r] = o),
                        e[r] &&
                          ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)),
                        i && v(o) && o(i[0]),
                        (i = o = void 0);
                    }),
                    'script'
                  );
              }),
              (m.createHTMLDocument =
                (((e = C.implementation.createHTMLDocument('').body).innerHTML =
                  '<form></form><form></form>'),
                2 === e.childNodes.length)),
              (T.parseHTML = function (e, t, n) {
                var r;
                return 'string' != typeof e
                  ? []
                  : ('boolean' == typeof t && ((n = t), (t = !1)),
                    t ||
                      (m.createHTMLDocument
                        ? (((r = (t =
                            C.implementation.createHTMLDocument(
                              ''
                            )).createElement('base')).href = C.location.href),
                          t.head.appendChild(r))
                        : (t = C)),
                    (r = !n && []),
                    (n = Q.exec(e))
                      ? [t.createElement(n[1])]
                      : ((n = Ee([e], t, r)),
                        r && r.length && T(r).remove(),
                        T.merge([], n.childNodes)));
              }),
              (T.fn.load = function (e, t, n) {
                var r,
                  o,
                  i,
                  a = this,
                  s = e.indexOf(' ');
                return (
                  -1 < s && ((r = H(e.slice(s))), (e = e.slice(0, s))),
                  v(t)
                    ? ((n = t), (t = void 0))
                    : t && 'object' == typeof t && (o = 'POST'),
                  0 < a.length &&
                    T.ajax({
                      url: e,
                      type: o || 'GET',
                      dataType: 'html',
                      data: t
                    })
                      .done(function (e) {
                        (i = arguments),
                          a.html(
                            r ? T('<div>').append(T.parseHTML(e)).find(r) : e
                          );
                      })
                      .always(
                        n &&
                          function (e, t) {
                            a.each(function () {
                              n.apply(this, i || [e.responseText, t, e]);
                            });
                          }
                      ),
                  this
                );
              }),
              (T.expr.pseudos.animated = function (t) {
                return T.grep(T.timers, function (e) {
                  return t === e.elem;
                }).length;
              }),
              (T.offset = {
                setOffset: function (e, t, n) {
                  var r,
                    o,
                    i,
                    a,
                    s = T.css(e, 'position'),
                    u = T(e),
                    l = {};
                  'static' === s && (e.style.position = 'relative'),
                    (i = u.offset()),
                    (r = T.css(e, 'top')),
                    (a = T.css(e, 'left')),
                    (s =
                      ('absolute' === s || 'fixed' === s) &&
                      -1 < (r + a).indexOf('auto')
                        ? ((o = (s = u.position()).top), s.left)
                        : ((o = parseFloat(r) || 0), parseFloat(a) || 0)),
                    null !=
                      (t = v(t) ? t.call(e, n, T.extend({}, i)) : t).top &&
                      (l.top = t.top - i.top + o),
                    null != t.left && (l.left = t.left - i.left + s),
                    'using' in t
                      ? t.using.call(e, l)
                      : ('number' == typeof l.top && (l.top += 'px'),
                        'number' == typeof l.left && (l.left += 'px'),
                        u.css(l));
                }
              }),
              T.fn.extend({
                offset: function (t) {
                  var e, n;
                  return arguments.length
                    ? void 0 === t
                      ? this
                      : this.each(function (e) {
                          T.offset.setOffset(this, t, e);
                        })
                    : (n = this[0])
                    ? n.getClientRects().length
                      ? ((e = n.getBoundingClientRect()),
                        (n = n.ownerDocument.defaultView),
                        {
                          top: e.top + n.pageYOffset,
                          left: e.left + n.pageXOffset
                        })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n,
                      r = this[0],
                      o = { top: 0, left: 0 };
                    if ('fixed' === T.css(r, 'position'))
                      t = r.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(),
                          n = r.ownerDocument,
                          e = r.offsetParent || n.documentElement;
                        e &&
                        (e === n.body || e === n.documentElement) &&
                        'static' === T.css(e, 'position');

                      )
                        e = e.parentNode;
                      e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((o = T(e).offset()).top += T.css(
                          e,
                          'borderTopWidth',
                          !0
                        )),
                        (o.left += T.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                      top: t.top - o.top - T.css(r, 'marginTop', !0),
                      left: t.left - o.left - T.css(r, 'marginLeft', !0)
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent;
                      e && 'static' === T.css(e, 'position');

                    )
                      e = e.offsetParent;
                    return e || j;
                  });
                }
              }),
              T.each(
                { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                function (t, o) {
                  var i = 'pageYOffset' === o;
                  T.fn[t] = function (e) {
                    return f(
                      this,
                      function (e, t, n) {
                        var r;
                        if (
                          (g(e)
                            ? (r = e)
                            : 9 === e.nodeType && (r = e.defaultView),
                          void 0 === n)
                        )
                          return r ? r[o] : e[t];
                        r
                          ? r.scrollTo(
                              i ? r.pageXOffset : n,
                              i ? n : r.pageYOffset
                            )
                          : (e[t] = n);
                      },
                      t,
                      e,
                      arguments.length
                    );
                  };
                }
              ),
              T.each(['top', 'left'], function (e, n) {
                T.cssHooks[n] = tt(m.pixelPosition, function (e, t) {
                  if (t)
                    return (
                      (t = et(e, n)), Ye.test(t) ? T(e).position()[n] + 'px' : t
                    );
                });
              }),
              T.each({ Height: 'height', Width: 'width' }, function (a, s) {
                T.each(
                  { padding: 'inner' + a, content: s, '': 'outer' + a },
                  function (r, i) {
                    T.fn[i] = function (e, t) {
                      var n = arguments.length && (r || 'boolean' != typeof e),
                        o = r || (!0 === e || !0 === t ? 'margin' : 'border');
                      return f(
                        this,
                        function (e, t, n) {
                          var r;
                          return g(e)
                            ? 0 === i.indexOf('outer')
                              ? e['inner' + a]
                              : e.document.documentElement['client' + a]
                            : 9 === e.nodeType
                            ? ((r = e.documentElement),
                              Math.max(
                                e.body['scroll' + a],
                                r['scroll' + a],
                                e.body['offset' + a],
                                r['offset' + a],
                                r['client' + a]
                              ))
                            : void 0 === n
                            ? T.css(e, t, o)
                            : T.style(e, t, n, o);
                        },
                        s,
                        n ? e : void 0,
                        n
                      );
                    };
                  }
                );
              }),
              T.each(
                [
                  'ajaxStart',
                  'ajaxStop',
                  'ajaxComplete',
                  'ajaxError',
                  'ajaxSuccess',
                  'ajaxSend'
                ],
                function (e, t) {
                  T.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              T.fn.extend({
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                  return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, '**')
                    : this.off(t, e || '**', n);
                },
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                }
              }),
              T.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                  ' '
                ),
                function (e, n) {
                  T.fn[n] = function (e, t) {
                    return 0 < arguments.length
                      ? this.on(n, null, e, t)
                      : this.trigger(n);
                  };
                }
              ),
              /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
            Zt =
              ((T.proxy = function (e, t) {
                var n, r;
                if (
                  ('string' == typeof t && ((r = e[t]), (t = e), (e = r)), v(e))
                )
                  return (
                    (n = s.call(arguments, 2)),
                    ((r = function () {
                      return e.apply(t || this, n.concat(s.call(arguments)));
                    }).guid = e.guid =
                      e.guid || T.guid++),
                    r
                  );
              }),
              (T.holdReady = function (e) {
                e ? T.readyWait++ : T.ready(!0);
              }),
              (T.isArray = Array.isArray),
              (T.parseJSON = JSON.parse),
              (T.nodeName = u),
              (T.isFunction = v),
              (T.isWindow = g),
              (T.camelCase = b),
              (T.type = d),
              (T.now = Date.now),
              (T.isNumeric = function (e) {
                var t = T.type(e);
                return (
                  ('number' === t || 'string' === t) &&
                  !isNaN(e - parseFloat(e))
                );
              }),
              (T.trim = function (e) {
                return null == e ? '' : (e + '').replace(Jt, '');
              }),
              'function' == typeof define &&
                define.amd &&
                define('jquery', [], function () {
                  return T;
                }),
              w.jQuery),
            en = w.$;
          return (
            (T.noConflict = function (e) {
              return (
                w.$ === T && (w.$ = en),
                e && w.jQuery === T && (w.jQuery = Zt),
                T
              );
            }),
            void 0 === R && (w.jQuery = w.$ = T),
            T
          );
        });
      },
      {}
    ],
    3: [
      function (e, t, n) {
        var r = 'undefined' != typeof window ? window : null,
          o = 'undefined' != typeof window ? document : null;
        if (r) {
          for (
            var i,
              a = {
                8: 'backspace',
                9: 'tab',
                13: 'enter',
                16: 'shift',
                17: 'ctrl',
                18: 'alt',
                20: 'capslock',
                27: 'esc',
                32: 'space',
                33: 'pageup',
                34: 'pagedown',
                35: 'end',
                36: 'home',
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
                45: 'ins',
                46: 'del',
                91: 'meta',
                93: 'meta',
                224: 'meta'
              },
              s = {
                106: '*',
                107: '+',
                109: '-',
                110: '.',
                111: '/',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'"
              },
              u = {
                '~': '`',
                '!': '1',
                '@': '2',
                '#': '3',
                $: '4',
                '%': '5',
                '^': '6',
                '&': '7',
                '*': '8',
                '(': '9',
                ')': '0',
                _: '-',
                '+': '=',
                ':': ';',
                '"': "'",
                '<': ',',
                '>': '.',
                '?': '/',
                '|': '\\'
              },
              l = {
                option: 'alt',
                command: 'meta',
                return: 'enter',
                escape: 'esc',
                plus: '+',
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform)
                  ? 'meta'
                  : 'ctrl'
              },
              c = 1;
            c < 20;
            ++c
          )
            a[111 + c] = 'f' + c;
          for (c = 0; c <= 9; ++c) a[c + 96] = c;
          (C.prototype.bind = function (e, t, n) {
            return (
              (e = e instanceof Array ? e : [e]),
              this._bindMultiple.call(this, e, t, n),
              this
            );
          }),
            (C.prototype.unbind = function (e, t) {
              return this.bind.call(this, e, function () {}, t);
            }),
            (C.prototype.trigger = function (e, t) {
              return (
                this._directMap[e + ':' + t] &&
                  this._directMap[e + ':' + t]({}, e),
                this
              );
            }),
            (C.prototype.reset = function () {
              return (this._callbacks = {}), (this._directMap = {}), this;
            }),
            (C.prototype.stopCallback = function (e, t) {
              return (
                !(-1 < (' ' + t.className + ' ').indexOf(' mousetrap ')) &&
                !(function e(t, n) {
                  return (
                    null !== t && t !== o && (t === n || e(t.parentNode, n))
                  );
                })(t, this.target) &&
                ('INPUT' == t.tagName ||
                  'SELECT' == t.tagName ||
                  'TEXTAREA' == t.tagName ||
                  t.isContentEditable)
              );
            }),
            (C.prototype.handleKey = function () {
              return this._handleKey.apply(this, arguments);
            }),
            (C.addKeycodes = function (e) {
              for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t]);
              i = null;
            }),
            (C.init = function () {
              var e,
                t = C(o);
              for (e in t)
                '_' !== e.charAt(0) &&
                  (C[e] = (function (e) {
                    return function () {
                      return t[e].apply(t, arguments);
                    };
                  })(e));
            })(),
            (r.Mousetrap = C),
            void 0 !== t && t.exports && (t.exports = C),
            'function' == typeof define &&
              define.amd &&
              define(function () {
                return C;
              });
        }
        function v(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent('on' + t, n);
        }
        function b(e) {
          var t;
          return 'keypress' == e.type
            ? ((t = String.fromCharCode(e.which)),
              e.shiftKey ? t : t.toLowerCase())
            : a[e.which] ||
                s[e.which] ||
                String.fromCharCode(e.which).toLowerCase();
        }
        function x(e) {
          return 'shift' == e || 'ctrl' == e || 'alt' == e || 'meta' == e;
        }
        function f(e, t, n) {
          return (n =
            'keypress' ==
              (n =
                n ||
                ((function () {
                  if (!i)
                    for (var e in ((i = {}), a))
                      (95 < e && e < 112) ||
                        (a.hasOwnProperty(e) && (i[a[e]] = e));
                  return i;
                })()[e]
                  ? 'keydown'
                  : 'keypress')) && t.length
              ? 'keydown'
              : n);
        }
        function w(e, t) {
          for (
            var n,
              r = [],
              o =
                '+' === (e = e)
                  ? ['+']
                  : (e = e.replace(/\+{2}/g, '+plus')).split('+'),
              i = 0;
            i < o.length;
            ++i
          )
            (n = o[i]),
              l[n] && (n = l[n]),
              t && 'keypress' != t && u[n] && ((n = u[n]), r.push('shift')),
              x(n) && r.push(n);
          return { key: n, modifiers: r, action: (t = f(n, r, t)) };
        }
        function C(e) {
          var p = this;
          if (((e = e || o), !(p instanceof C))) return new C(e);
          (p.target = e), (p._callbacks = {}), (p._directMap = {});
          var u,
            h = {},
            l = !1,
            c = !1,
            f = !1;
          function d(e) {
            e = e || {};
            var t,
              n = !1;
            for (t in h) e[t] ? (n = !0) : (h[t] = 0);
            n || (f = !1);
          }
          function g(e, t, n, r, o, i) {
            var a,
              s = [],
              u = n.type;
            if (!p._callbacks[e]) return [];
            for (
              'keyup' == u && x(e) && (t = [e]), a = 0;
              a < p._callbacks[e].length;
              ++a
            ) {
              var l,
                c,
                f = p._callbacks[e][a];
              (!r && f.seq && h[f.seq] != f.level) ||
                u != f.action ||
                (('keypress' != u || n.metaKey || n.ctrlKey) &&
                  ((l = t),
                  (c = f.modifiers),
                  l.sort().join(',') !== c.sort().join(','))) ||
                ((l = !r && f.combo == o),
                (c = r && f.seq == r && f.level == i),
                (l || c) && p._callbacks[e].splice(a, 1),
                s.push(f));
            }
            return s;
          }
          function m(e, t, n, r) {
            p.stopCallback(t, t.target || t.srcElement, n, r) ||
              (!1 === e(t, n) &&
                ((r = t).preventDefault
                  ? r.preventDefault()
                  : (r.returnValue = !1),
                (e = t).stopPropagation
                  ? e.stopPropagation()
                  : (e.cancelBubble = !0)));
          }
          function t(e) {
            'number' != typeof e.which && (e.which = e.keyCode);
            var t,
              n = b(e);
            n &&
              ('keyup' == e.type && l === n
                ? (l = !1)
                : p.handleKey(
                    n,
                    ((n = []),
                    (t = e).shiftKey && n.push('shift'),
                    t.altKey && n.push('alt'),
                    t.ctrlKey && n.push('ctrl'),
                    t.metaKey && n.push('meta'),
                    n),
                    e
                  ));
          }
          function a(t, e, n, r) {
            function o(e) {
              return function () {
                (f = e), ++h[t], clearTimeout(u), (u = setTimeout(d, 1e3));
              };
            }
            function i(e) {
              m(n, e, t), 'keyup' !== r && (l = b(e)), setTimeout(d, 10);
            }
            for (var a = (h[t] = 0); a < e.length; ++a) {
              var s = a + 1 === e.length ? i : o(r || w(e[a + 1]).action);
              y(e[a], s, r, t, a);
            }
          }
          function y(e, t, n, r, o) {
            p._directMap[e + ':' + n] = t;
            var i = (e = e.replace(/\s+/g, ' ')).split(' ');
            1 < i.length
              ? a(e, i, t, n)
              : ((i = w(e, n)),
                (p._callbacks[i.key] = p._callbacks[i.key] || []),
                g(i.key, i.modifiers, { type: i.action }, r, e, o),
                p._callbacks[i.key][r ? 'unshift' : 'push']({
                  callback: t,
                  modifiers: i.modifiers,
                  action: i.action,
                  seq: r,
                  level: o,
                  combo: e
                }));
          }
          (p._handleKey = function (e, t, n) {
            for (
              var r = g(e, t, n), o = {}, i = 0, a = !1, s = 0;
              s < r.length;
              ++s
            )
              r[s].seq && (i = Math.max(i, r[s].level));
            for (s = 0; s < r.length; ++s)
              r[s].seq
                ? r[s].level == i &&
                  ((a = !0),
                  (o[r[s].seq] = 1),
                  m(r[s].callback, n, r[s].combo, r[s].seq))
                : a || m(r[s].callback, n, r[s].combo);
            t = 'keypress' == n.type && c;
            n.type != f || x(e) || t || d(o), (c = a && 'keydown' == n.type);
          }),
            (p._bindMultiple = function (e, t, n) {
              for (var r = 0; r < e.length; ++r) y(e[r], t, n);
            }),
            v(e, 'keypress', t),
            v(e, 'keydown', t),
            v(e, 'keyup', t);
        }
      },
      {}
    ],
    4: [
      function (e, t, n) {
        'use strict';
        t.exports = function (e, t, n, r) {
          (t = t || '&'), (n = n || '=');
          var o = {};
          if ('string' == typeof e && 0 !== e.length) {
            var i = /\+/g,
              t = ((e = e.split(t)), 1e3),
              a =
                (r && 'number' == typeof r.maxKeys && (t = r.maxKeys),
                e.length);
            0 < t && t < a && (a = t);
            for (var s = 0; s < a; ++s) {
              var u,
                l = e[s].replace(i, '%20'),
                c = l.indexOf(n),
                c =
                  0 <= c
                    ? ((u = l.substr(0, c)), l.substr(c + 1))
                    : ((u = l), ''),
                l = decodeURIComponent(u),
                c = decodeURIComponent(c);
              Object.prototype.hasOwnProperty.call(o, l)
                ? f(o[l])
                  ? o[l].push(c)
                  : (o[l] = [o[l], c])
                : (o[l] = c);
            }
          }
          return o;
        };
        var f =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
      },
      {}
    ],
    5: [
      function (e, t, n) {
        'use strict';
        function i(e) {
          switch (typeof e) {
            case 'string':
              return e;
            case 'boolean':
              return e ? 'true' : 'false';
            case 'number':
              return isFinite(e) ? e : '';
            default:
              return '';
          }
        }
        t.exports = function (n, r, o, e) {
          return (
            (r = r || '&'),
            (o = o || '='),
            'object' == typeof (n = null === n ? void 0 : n)
              ? s(u(n), function (e) {
                  var t = encodeURIComponent(i(e)) + o;
                  return a(n[e])
                    ? s(n[e], function (e) {
                        return t + encodeURIComponent(i(e));
                      }).join(r)
                    : t + encodeURIComponent(i(n[e]));
                }).join(r)
              : e
              ? encodeURIComponent(i(e)) + o + encodeURIComponent(i(n))
              : ''
          );
        };
        var a =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
        function s(e, t) {
          if (e.map) return e.map(t);
          for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var u =
          Object.keys ||
          function (e) {
            var t,
              n = [];
            for (t in e)
              Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            return n;
          };
      },
      {}
    ],
    6: [
      function (e, t, n) {
        'use strict';
        (n.decode = n.parse = e('./decode')),
          (n.encode = n.stringify = e('./encode'));
      },
      { './decode': 4, './encode': 5 }
    ],
    7: [
      function (e, t, n) {
        'use strict';
        var T = e('punycode'),
          k = e('./util');
        function w() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        (n.parse = o),
          (n.resolve = function (e, t) {
            return o(e, !1, !0).resolve(t);
          }),
          (n.resolveObject = function (e, t) {
            return e ? o(e, !1, !0).resolveObject(t) : t;
          }),
          (n.format = function (e) {
            k.isString(e) && (e = o(e));
            return e instanceof w ? e.format() : w.prototype.format.call(e);
          }),
          (n.Url = w);
        var j = /^([a-z0-9.+-]+:)/i,
          r = /:[0-9]*$/,
          E = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          n = ['{', '}', '|', '\\', '^', '`'].concat([
            '<',
            '>',
            '"',
            '`',
            ' ',
            '\r',
            '\n',
            '\t'
          ]),
          S = ["'"].concat(n),
          A = ['%', '/', '?', ';', '#'].concat(S),
          N = ['/', '?', '#'],
          q = /^[+a-z0-9A-Z_-]{0,63}$/,
          D = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          O = { javascript: !0, 'javascript:': !0 },
          L = { javascript: !0, 'javascript:': !0 },
          H = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            'http:': !0,
            'https:': !0,
            'ftp:': !0,
            'gopher:': !0,
            'file:': !0
          },
          P = e('querystring');
        function o(e, t, n) {
          var r;
          return e && k.isObject(e) && e instanceof w
            ? e
            : ((r = new w()).parse(e, t, n), r);
        }
        (w.prototype.parse = function (e, t, n) {
          if (!k.isString(e))
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof e
            );
          var r = e.indexOf('?'),
            r = -1 !== r && r < e.indexOf('#') ? '?' : '#',
            o = e.split(r);
          o[0] = o[0].replace(/\\/g, '/');
          var i = (i = e = o.join(r)).trim();
          if (!n && 1 === e.split('#').length) {
            o = E.exec(i);
            if (o)
              return (
                (this.path = i),
                (this.href = i),
                (this.pathname = o[1]),
                o[2]
                  ? ((this.search = o[2]),
                    (this.query = t
                      ? P.parse(this.search.substr(1))
                      : this.search.substr(1)))
                  : t && ((this.search = ''), (this.query = {})),
                this
              );
          }
          var a,
            r = j.exec(i);
          if (
            (r &&
              ((a = (r = r[0]).toLowerCase()),
              (this.protocol = a),
              (i = i.substr(r.length))),
            !(n || r || i.match(/^\/\/[^@\/]+@[^@\/]+/)) ||
              !(x = '//' === i.substr(0, 2)) ||
              (r && L[r]) ||
              ((i = i.substr(2)), (this.slashes = !0)),
            !L[r] && (x || (r && !H[r])))
          ) {
            for (var s = -1, u = 0; u < N.length; u++)
              -1 !== (l = i.indexOf(N[u])) && (-1 === s || l < s) && (s = l);
            -1 !==
              (e = -1 === s ? i.lastIndexOf('@') : i.lastIndexOf('@', s)) &&
              ((o = i.slice(0, e)),
              (i = i.slice(e + 1)),
              (this.auth = decodeURIComponent(o)));
            for (var l, s = -1, u = 0; u < A.length; u++)
              -1 !== (l = i.indexOf(A[u])) && (-1 === s || l < s) && (s = l);
            -1 === s && (s = i.length),
              (this.host = i.slice(0, s)),
              (i = i.slice(s)),
              this.parseHost(),
              (this.hostname = this.hostname || '');
            n =
              '[' === this.hostname[0] &&
              ']' === this.hostname[this.hostname.length - 1];
            if (!n)
              for (
                var c = this.hostname.split(/\./), u = 0, f = c.length;
                u < f;
                u++
              ) {
                var p = c[u];
                if (p && !p.match(q)) {
                  for (var h = '', d = 0, g = p.length; d < g; d++)
                    127 < p.charCodeAt(d) ? (h += 'x') : (h += p[d]);
                  if (!h.match(q)) {
                    var m = c.slice(0, u),
                      y = c.slice(u + 1),
                      v = p.match(D);
                    v && (m.push(v[1]), y.unshift(v[2])),
                      y.length && (i = '/' + y.join('.') + i),
                      (this.hostname = m.join('.'));
                    break;
                  }
                }
              }
            255 < this.hostname.length
              ? (this.hostname = '')
              : (this.hostname = this.hostname.toLowerCase()),
              n || (this.hostname = T.toASCII(this.hostname));
            var b = this.port ? ':' + this.port : '',
              x = this.hostname || '';
            (this.host = x + b),
              (this.href += this.host),
              n &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                '/' !== i[0] && (i = '/' + i));
          }
          if (!O[a])
            for (u = 0, f = S.length; u < f; u++) {
              var w,
                C = S[u];
              -1 !== i.indexOf(C) &&
                ((w = encodeURIComponent(C)) === C && (w = escape(C)),
                (i = i.split(C).join(w)));
            }
          (r = i.indexOf('#')),
            -1 !== r && ((this.hash = i.substr(r)), (i = i.slice(0, r))),
            (e = i.indexOf('?'));
          return (
            -1 !== e
              ? ((this.search = i.substr(e)),
                (this.query = i.substr(e + 1)),
                t && (this.query = P.parse(this.query)),
                (i = i.slice(0, e)))
              : t && ((this.search = ''), (this.query = {})),
            i && (this.pathname = i),
            H[a] && this.hostname && !this.pathname && (this.pathname = '/'),
            (this.pathname || this.search) &&
              ((b = this.pathname || ''),
              (o = this.search || ''),
              (this.path = b + o)),
            (this.href = this.format()),
            this
          );
        }),
          (w.prototype.format = function () {
            var e = this.auth || '',
              t =
                (e &&
                  ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')),
                  (e += '@')),
                this.protocol || ''),
              n = this.pathname || '',
              r = this.hash || '',
              o = !1,
              i = '',
              e =
                (this.host
                  ? (o = e + this.host)
                  : this.hostname &&
                    ((o =
                      e +
                      (-1 === this.hostname.indexOf(':')
                        ? this.hostname
                        : '[' + this.hostname + ']')),
                    this.port && (o += ':' + this.port)),
                this.query &&
                  k.isObject(this.query) &&
                  Object.keys(this.query).length &&
                  (i = P.stringify(this.query)),
                this.search || (i && '?' + i) || '');
            return (
              t && ':' !== t.substr(-1) && (t += ':'),
              this.slashes || ((!t || H[t]) && !1 !== o)
                ? ((o = '//' + (o || '')),
                  n && '/' !== n.charAt(0) && (n = '/' + n))
                : (o = o || ''),
              r && '#' !== r.charAt(0) && (r = '#' + r),
              e && '?' !== e.charAt(0) && (e = '?' + e),
              t +
                o +
                (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (e = e.replace('#', '%23')) +
                r
            );
          }),
          (w.prototype.resolve = function (e) {
            return this.resolveObject(o(e, !1, !0)).format();
          }),
          (w.prototype.resolveObject = function (e) {
            k.isString(e) && ((p = new w()).parse(e, !1, !0), (e = p));
            for (
              var t = new w(), n = Object.keys(this), r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r];
              t[o] = this[o];
            }
            if (((t.hash = e.hash), '' !== e.href))
              if (e.slashes && !e.protocol) {
                for (var i = Object.keys(e), a = 0; a < i.length; a++) {
                  var s = i[a];
                  'protocol' !== s && (t[s] = e[s]);
                }
                H[t.protocol] &&
                  t.hostname &&
                  !t.pathname &&
                  (t.path = t.pathname = '/');
              } else if (e.protocol && e.protocol !== t.protocol)
                if (H[e.protocol]) {
                  if (((t.protocol = e.protocol), e.host || L[e.protocol]))
                    t.pathname = e.pathname;
                  else {
                    for (
                      var u = (e.pathname || '').split('/');
                      u.length && !(e.host = u.shift());

                    );
                    e.host || (e.host = ''),
                      e.hostname || (e.hostname = ''),
                      '' !== u[0] && u.unshift(''),
                      u.length < 2 && u.unshift(''),
                      (t.pathname = u.join('/'));
                  }
                  (t.search = e.search),
                    (t.query = e.query),
                    (t.host = e.host || ''),
                    (t.auth = e.auth),
                    (t.hostname = e.hostname || e.host),
                    (t.port = e.port),
                    (t.pathname || t.search) &&
                      ((p = t.pathname || ''),
                      (h = t.search || ''),
                      (t.path = p + h)),
                    (t.slashes = t.slashes || e.slashes);
                } else
                  for (var l = Object.keys(e), c = 0; c < l.length; c++) {
                    var f = l[c];
                    t[f] = e[f];
                  }
              else {
                var p = t.pathname && '/' === t.pathname.charAt(0),
                  h = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
                  p = h || p || (t.host && e.pathname),
                  d = p,
                  g = (t.pathname && t.pathname.split('/')) || [],
                  u = (e.pathname && e.pathname.split('/')) || [],
                  m = t.protocol && !H[t.protocol];
                if (
                  (m &&
                    ((t.hostname = ''),
                    (t.port = null),
                    t.host &&
                      ('' === g[0] ? (g[0] = t.host) : g.unshift(t.host)),
                    (t.host = ''),
                    e.protocol &&
                      ((e.hostname = null),
                      (e.port = null),
                      e.host &&
                        ('' === u[0] ? (u[0] = e.host) : u.unshift(e.host)),
                      (e.host = null)),
                    (p = p && ('' === u[0] || '' === g[0]))),
                  h)
                )
                  (t.host = (e.host || '' === e.host ? e : t).host),
                    (t.hostname = (
                      e.hostname || '' === e.hostname ? e : t
                    ).hostname),
                    (t.search = e.search),
                    (t.query = e.query),
                    (g = u);
                else if (u.length)
                  (g = g || []).pop(),
                    (g = g.concat(u)),
                    (t.search = e.search),
                    (t.query = e.query);
                else if (!k.isNullOrUndefined(e.search))
                  return (
                    m &&
                      ((t.hostname = t.host = g.shift()),
                      (x =
                        !!(t.host && 0 < t.host.indexOf('@')) &&
                        t.host.split('@')) &&
                        ((t.auth = x.shift()),
                        (t.host = t.hostname = x.shift()))),
                    (t.search = e.search),
                    (t.query = e.query),
                    (k.isNull(t.pathname) && k.isNull(t.search)) ||
                      (t.path = (t.pathname || '') + (t.search || '')),
                    (t.href = t.format()),
                    t
                  );
                if (g.length) {
                  for (
                    var y = g.slice(-1)[0],
                      h =
                        ((t.host || e.host || 1 < g.length) &&
                          ('.' === y || '..' === y)) ||
                        '' === y,
                      v = 0,
                      b = g.length;
                    0 <= b;
                    b--
                  )
                    '.' === (y = g[b])
                      ? g.splice(b, 1)
                      : '..' === y
                      ? (g.splice(b, 1), v++)
                      : v && (g.splice(b, 1), v--);
                  if (!p && !d) for (; v--; ) g.unshift('..');
                  !p ||
                    '' === g[0] ||
                    (g[0] && '/' === g[0].charAt(0)) ||
                    g.unshift(''),
                    h && '/' !== g.join('/').substr(-1) && g.push('');
                  var x,
                    d = '' === g[0] || (g[0] && '/' === g[0].charAt(0));
                  m &&
                    ((t.hostname = t.host = !d && g.length ? g.shift() : ''),
                    (x =
                      !!(t.host && 0 < t.host.indexOf('@')) &&
                      t.host.split('@')) &&
                      ((t.auth = x.shift()),
                      (t.host = t.hostname = x.shift()))),
                    (p = p || (t.host && g.length)) && !d && g.unshift(''),
                    g.length
                      ? (t.pathname = g.join('/'))
                      : ((t.pathname = null), (t.path = null)),
                    (k.isNull(t.pathname) && k.isNull(t.search)) ||
                      (t.path = (t.pathname || '') + (t.search || '')),
                    (t.auth = e.auth || t.auth),
                    (t.slashes = t.slashes || e.slashes);
                } else
                  (t.pathname = null),
                    t.search ? (t.path = '/' + t.search) : (t.path = null);
              }
            return (t.href = t.format()), t;
          }),
          (w.prototype.parseHost = function () {
            var e = this.host,
              t = r.exec(e);
            t &&
              (':' !== (t = t[0]) && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          });
      },
      { './util': 8, punycode: 1, querystring: 6 }
    ],
    8: [
      function (e, t, n) {
        'use strict';
        t.exports = {
          isString: function (e) {
            return 'string' == typeof e;
          },
          isObject: function (e) {
            return 'object' == typeof e && null !== e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNullOrUndefined: function (e) {
            return null == e;
          }
        };
      },
      {}
    ],
    9: [
      function (e, t, n) {
        var r = e('jquery');
        function o(e) {
          r(e.currentTarget)
            .parent()
            .find('.dropdown-menu')
            .toggleClass('open'),
            e.stopPropagation(),
            e.preventDefault();
        }
        function i(e) {
          r('.dropdown-menu').removeClass('open');
        }
        t.exports = {
          init: function () {
            r(document).on('click', '.toggle-dropdown', o),
              r(document).on('click', '.dropdown-menu', function (e) {
                e.stopPropagation();
              }),
              r(document).on('click', i);
          }
        };
      },
      { jquery: 2 }
    ],
    10: [
      function (e, t, n) {
        var r = e('./dropdown'),
          o = e('./keyboard'),
          i = e('./navigation'),
          a = e('./sidebar'),
          s = e('./toolbar'),
          e = window.gitbook;
        e.events.on('start', function () {
          a.init(),
            o.init(),
            r.init(),
            i.init(),
            s.createButton({
              index: 0,
              icon: 'fa fa-align-justify',
              onClick: function (e) {
                e.preventDefault(), a.toggle();
              }
            });
        }),
          (e.keyboard = o),
          (e.navigation = i),
          (e.sidebar = a),
          (e.toolbar = s);
      },
      {
        './dropdown': 9,
        './keyboard': 11,
        './navigation': 13,
        './sidebar': 15,
        './toolbar': 16
      }
    ],
    11: [
      function (e, t, n) {
        var r = e('mousetrap'),
          o = e('./navigation'),
          i = e('./sidebar');
        function a(e, t) {
          r.bind(e, function (e) {
            return t(), !1;
          });
        }
        t.exports = {
          init: function () {
            a(['right'], function (e) {
              o.goNext();
            }),
              a(['left'], function (e) {
                o.goPrev();
              }),
              a(['s'], function (e) {
                i.toggle();
              });
          },
          bind: a
        };
      },
      { './navigation': 13, './sidebar': 15, mousetrap: 3 }
    ],
    12: [
      function (e, t, n) {
        var r = window.gitbook;
        t.exports = {
          show: function (e) {
            return (
              r.state.$book.addClass('is-loading'),
              e.always(function () {
                r.state.$book.removeClass('is-loading');
              }),
              e
            );
          }
        };
      },
      {}
    ],
    13: [
      function (e, t, n) {
        var i,
          r,
          c = e('jquery'),
          o = e('url'),
          a = e('./loading'),
          s = e('./platform'),
          f = window.gitbook,
          p = void 0 !== history.pushState;
        function u() {
          return s.isSmallScreen() ? c('.book-body') : c('.body-inner');
        }
        function h(e) {
          var t,
            n = u(),
            r = 0;
          (t = e),
            u().find(t).length &&
              (e && (r = d(e)),
              n.unbind('scroll'),
              n.animate({ scrollTop: r }, 800, 'swing', function () {
                n.scroll(y);
              }),
              g(null, e));
        }
        function l(e) {
          return 0 === e.length;
        }
        function d(e) {
          var t = u(),
            n = t.find('.page-inner'),
            r = t.find(e),
            o = r.offsetParent(),
            i = 0;
          if (
            ((e = l), 0 < (t = [t, n, r, o]).length && 0 < t.filter(e).length)
          )
            return 0;
          for (
            var i = r.position().top, a = 0;
            a < 10 && !o.is(n) && !o.is(o.offsetParent());
            a++
          )
            (i += (r = o).position().top), (o = r.offsetParent());
          return Math.floor(i);
        }
        function g(e, t) {
          var n;
          e || t || (e = i.first()),
            (e = t
              ? (1 < i.length
                  ? i.filter(function () {
                      return m(c(this)) == t;
                    })
                  : i
                ).first()
              : e).is(r) ||
              ((r = e),
              i.removeClass('active'),
              e.addClass('active'),
              (t = m(e)),
              (e = window.location.pathname + window.location.hash),
              (n = window.location.pathname + t) != e &&
                history.replaceState({ path: n }, null, n));
        }
        function m(e) {
          e = e.children('a').attr('href').split('#')[1];
          return (e = e && '#' + e) || '';
        }
        function y() {
          var e = u(),
            n = e.scrollTop(),
            t = e.prop('scrollHeight'),
            e = e.prop('clientHeight'),
            r = i.length,
            o = null;
          c(i.get().reverse()).each(function (e) {
            var t = m(c(this));
            t && !o && d(t) <= n && (o = c(this)),
              e != r - 1 || o || (o = c(this));
          }),
            o || n || (o = i.first()),
            g((o = n && t - n == e ? i.last() : o));
        }
        var v = location.href;
        function b(e, s) {
          var t = o.parse(v),
            u = o.resolve(window.location.pathname, e),
            n = o.parse(u),
            l = n.hash,
            t = n.pathname !== t.pathname,
            n = Boolean(n.hostname);
          if (p && !n) {
            if (!t) return s && history.pushState({ path: u }, null, u), h(l);
            v = u;
            n = c
              .Deferred(function (a) {
                c.ajax({
                  type: 'GET',
                  url: u,
                  cache: !0,
                  headers: {
                    'Access-Control-Expose-Headers': 'X-Current-Location'
                  },
                  success: function (e, t, n) {
                    var r,
                      n = n.getResponseHeader('X-Current-Location') || u,
                      o =
                        ((e = e
                          .replace(
                            /<(\/?)(html)([^>]*)>/i,
                            function (e, t, n, r) {
                              return (
                                '<' +
                                t +
                                'div' +
                                (t ? '' : ' data-element="' + n + '"') +
                                r +
                                '>'
                              );
                            }
                          )
                          .replace(
                            /<(\/?)(head)([^>]*)>/i,
                            function (e, t, n, r) {
                              return (
                                '<' +
                                t +
                                'div' +
                                (t ? '' : ' data-element="' + n + '"') +
                                r +
                                '>'
                              );
                            }
                          )
                          .replace(
                            /<(\/?)(body)([^>]*)>/i,
                            function (e, t, n, r) {
                              return (
                                '<' +
                                t +
                                'div' +
                                (t ? '' : ' data-element="' + n + '"') +
                                r +
                                '>'
                              );
                            }
                          )),
                        c(e)),
                      i = o.find('.book');
                    if (0 === i.length)
                      return (
                        (r = new Error('Invalid gitbook page, redirecting...')),
                        a.reject(r)
                      );
                    s && history.pushState({ path: n }, null, n),
                      (r = (o = c(e)).find('[data-element=head]')),
                      (i = o.find('.book')),
                      (document.title = r.find('title').text());
                    (n = c('head')),
                      n.find('link[rel=prev]').remove(),
                      n.find('link[rel=next]').remove(),
                      n.append(r.find('link[rel=prev]')),
                      n.append(r.find('link[rel=next]')),
                      (e = c('.book').attr('class')),
                      (o = c('.book-summary').scrollTop());
                    i.toggleClass(
                      'with-summary',
                      c('.book').hasClass('with-summary')
                    ),
                      c('.book').replaceWith(i),
                      c('.book').attr('class', e),
                      c('.book-summary').scrollTop(o),
                      (f.state.$book = c('.book')),
                      w(!l),
                      l && h(l),
                      a.resolve();
                  }
                });
              })
              .promise();
            return a.show(
              n.fail(function (e) {
                console.log(e);
              })
            );
          }
          location.href = e;
        }
        function x() {
          var e = parseInt(c('.body-inner').css('width'), 10),
            t = parseInt(c('.page-wrapper').css('width'), 10),
            e = (c('.navigation-next').css('margin-right', e - t + 'px'), u());
          e.unbind('scroll'), e.scroll(y);
        }
        function w(e) {
          var t = c('.book-body').find('.body-inner').find('.page-wrapper'),
            t = (x(), t && t[0] && t[0].focus({ preventScroll: !0 }), u());
          e && t.scrollTop(0),
            1 <
            (i = c('.book-summary .summary .chapter').filter(function () {
              var e = c(this).children('a'),
                t = null;
              return (
                !!e.length &&
                ((t = e.attr('href').split('#')[0]),
                (e = o.resolve(window.location.pathname, t)),
                window.location.pathname == e)
              );
            })).length
              ? t.scroll(y)
              : (r = i.first());
        }
        function C(e) {
          var t,
            n = c(this),
            r = n.attr('target');
          (t = e).metaKey ||
            t.altKey ||
            t.ctrlKey ||
            t.shiftKey ||
            0 !== e.button ||
            r ||
            (e.stopPropagation(),
            e.preventDefault(),
            (t = n.attr('href')) && b(t, !0));
        }
        t.exports = {
          init: function () {
            c.ajaxSetup({ cache: !1 }),
              history.replaceState({ path: window.location.href }, ''),
              (window.onpopstate = function (e) {
                if (null !== e.state) return b(e.state.path, !1);
              }),
              c(document).on('click', '.navigation-prev', C),
              c(document).on('click', '.navigation-next', C),
              c(document).on('click', '.summary [data-path] a', C),
              c(document).on('click', '.page-inner a', C),
              c(window).resize(x),
              w(!1);
          },
          goNext: function () {
            var e = c('.navigation-next').attr('href');
            e && b(e, !0);
          },
          goPrev: function () {
            var e = c('.navigation-prev').attr('href');
            e && b(e, !0);
          }
        };
      },
      { './loading': 12, './platform': 14, jquery: 2, url: 7 }
    ],
    14: [
      function (e, t, n) {
        var r = e('jquery');
        t.exports = {
          isMobile: function () {
            return r(document).width() <= 600;
          },
          isSmallScreen: function () {
            return r(document).width() <= 1240;
          }
        };
      },
      { jquery: 2 }
    ],
    15: [
      function (e, t, n) {
        var r = e('jquery'),
          o = e('./platform'),
          i = window.gitbook;
        function a(e, t) {
          (null != i.state && s() == e) ||
            (i.state.$book.toggleClass(
              'without-animation',
              !(t = null == t ? !0 : t)
            ),
            i.state.$book.toggleClass('with-summary', e),
            i.storage.set('sidebar', s()));
        }
        function s() {
          return i.state.$book.hasClass('with-summary');
        }
        t.exports = {
          init: function () {
            r(document).on('click', '.book-summary li.chapter a', function (e) {
              o.isMobile() && a(!1, !1);
            });
          },
          isOpen: s,
          toggle: a,
          filter: function (t) {
            r('.book-summary')
              .find('li')
              .each(function () {
                var e = r(this).data('path'),
                  e = null == t || -1 !== t.indexOf(e);
                r(this).toggle(e), e && r(this).parents('li').show();
              });
          }
        };
      },
      { './platform': 14, jquery: 2 }
    ],
    16: [
      function (e, t, n) {
        var u = e('jquery'),
          e = window.gitbook,
          r = [],
          o = 0;
        function l(e) {
          e.preventDefault();
        }
        function i(e) {
          var t,
            o,
            n,
            r = u('.book-header'),
            i = r.find('h1'),
            a = 'pull-' + e.position,
            s = u('<a>', {
              class: 'btn',
              text: e.text ? ' ' + e.text : '',
              'aria-label': e.label,
              href: '#'
            });
          s.click(e.onClick),
            e.icon && u('<i>', { class: e.icon }).prependTo(s),
            (t = e.dropdown
              ? ((n = u('<div>', {
                  class: 'dropdown ' + a + ' ' + e.className
                })),
                s.addClass('toggle-dropdown'),
                n.append(s),
                (t = e.dropdown),
                (o = u('<div>', {
                  class: 'dropdown-menu',
                  html: '<div class="dropdown-caret"><span class="caret-outer"></span><span class="caret-inner"></span></div>'
                })),
                'string' == typeof t
                  ? o.append(t)
                  : t
                      .map(function (e) {
                        return u.isArray(e) ? e : [e];
                      })
                      .forEach(function (e) {
                        var n = u('<div>', { class: 'buttons' }),
                          r = 'size-' + e.length;
                        e.forEach(function (e) {
                          e = u.extend(
                            { text: '', className: '', onClick: l },
                            e || {}
                          );
                          var t = u('<button>', {
                            class: 'button ' + r + ' ' + e.className,
                            text: e.text
                          });
                          t.click(e.onClick), n.append(t);
                        }),
                          o.append(n);
                      }),
                (t = o).addClass(
                  'dropdown-' + ('right' == e.position ? 'left' : 'right')
                ),
                n.append(t),
                n)
              : (s.addClass(a), s.addClass(e.className), s)).addClass(
              'js-toolbar-action'
            ),
            u.isNumeric(e.index) && 0 <= e.index
              ? ((n = r),
                (a = '.btn, .dropdown, h1'),
                (s = e.index),
                (r = t),
                (e = n.children(a).length),
                s < 0 && (s = Math.max(0, e + 1 + s)),
                n.append(r),
                s < e && n.children(a).eq(s).before(n.children(a).last()))
              : t.insertBefore(i);
        }
        function a() {
          u('.js-toolbar-action').remove(), r.forEach(i);
        }
        e.events.on('page.change', function () {
          a();
        }),
          (t.exports = {
            createButton: function (e) {
              return (
                (e = u.extend(
                  {
                    label: '',
                    icon: '',
                    text: '',
                    position: 'left',
                    className: '',
                    onClick: l,
                    dropdown: null,
                    index: null,
                    id: 'btn-' + o++
                  },
                  e || {}
                )),
                r.push(e),
                i(e),
                e.id
              );
            },
            removeButton: function (t) {
              (r = u.grep(r, function (e) {
                return e.id != t;
              })),
                a();
            },
            removeButtons: function (t) {
              (r = u.grep(r, function (e) {
                return -1 == t.indexOf(e.id);
              })),
                a();
            }
          });
      },
      { jquery: 2 }
    ]
  },
  {},
  [10]
);

!(function () {
  function t(t, e) {
    e("div.basicInfos h1, .mwProductBox .mwProductSku").length && e("div.basicInfos h1, .mwProductBox .mwProductSku").first().after(t.elem)
  }

  function e(t, e) {
    e("div.tabsContainer").length &&
      e("#tabReviews").length &&
      (e("#tabReviews").empty(),
      e("div.tabsContainer").append(t.elem()),
      n.css.inject(
        ".tabsItem { border-bottom:3px solid #443266; margin-bottom:2em; padding-bottom:1em }#tabReviews{border-bottom:none;margin-bottom:0;padding-bottom:0}",
      ))
  }

  function r(t, e) {
    e(".testfreaks-reviews").length && e(".testfreaks-reviews").after(t.elem())
  }

  function o(t, e) {
    e("ul.productList > li:not(:has(.testfreaks-items))").each(function () {
      var r = i.exec(e(this).find(".nameListView > a, div.name > a").attr("href"))
      r &&
        e(this)
          .find(".nameListView, div.name")
          .after(
            t.create({
              url_key: r[1],
            }),
          )
    }),
      !l &&
        e("#dealsTabs li a").length &&
        ((l = !0),
        e("#dealsTabs li a").click(function () {
          setTimeout(function () {
            a.load("items")
          }, 2e3)
        })),
      e("#footer").length || t.recur()
  }
  var n = n || {}
  !(function (t, e, r) {
    function o(t, e) {
      "object" == typeof e && e.constructor != Array ? ("object" == typeof M[t] ? L(M[t], e) : (M[t] = e)) : ((M[t] = {}), (M.defaults[t] = e))
    }

    function n(t, e) {
      return e == undefined || M[t] == undefined || M[t][e] == undefined ? M.defaults[t] : M[t][e]
    }

    function a(t) {
      L(D, t)
    }

    function i() {
      for (var t = 0; t < arguments.length; ++t) {
        l(arguments[t])
      }
    }

    function s(t) {
      t = t || ""
      var e = H[t]
      return (
        e ||
          (e = H[t] =
            {
              id: t,
              on: {},
            }),
        e
      )
    }

    function l(t) {
      var e = t[0] || "",
        r = "",
        o = e.indexOf(".")
      o > -1 && ((r = e.slice(0, o)), (e = e.slice(o + 1)))
      var n = D[e]
      if (n) {
        var a = s(r)
        n.apply(a, t.slice(1))
      }
    }

    function p() {
      F && F.length && V.push.apply(t, F)
    }

    function c(e) {
      var r = P++
      return (
        (Z[r] = !0),
        function () {
          Z[r] && (delete Z[r], e.apply(t, arguments))
        }
      )
    }

    function f(t, e, o) {
      if (e) {
        var n = o ? "cb_" + B(o) : "cb"
        ;(V[n] = c(e)), (t += "&callback=testFreaks." + n)
      }
      var a = r.createElement("script")
      ;(a.charset = "utf-8"), (a.src = t)
      var i = r.getElementsByTagName("script")[0]
      i.parentNode.insertBefore(a, i)
    }

    function m(t, e) {
      O[t] = e
    }

    function d(t) {
      var e = r.createElement("style")
      e.type = "text/css"
      var o = u(t)
      e.styleSheet ? (e.styleSheet.cssText = o) : e.appendChild(r.createTextNode(o)), r.getElementsByTagName("head")[0].appendChild(e)
    }

    function u(e) {
      var r = /attr\(([-\w]+), (.*?)(?=,|\)).*?\)/g
      return (
        t.oldie() &&
          (e = e.replace(/(badge|stars|scores|pros|cons|quote|question|about|thumbs-up|thumbs-down|report)(-rtl)?(@2x)?\.png/g, "$1$2.gif")),
        (e = e.replace(r, function (t, e, r) {
          var o = O[e]
          return o != undefined ? o : r
        })),
        g(e)
      )
    }

    function g(t) {
      return t.replace(/(\s*<svg.*?<\/svg>\s*)(?=[^\s<])/g, function (t, r) {
        return e.btoa ? "base64," + e.btoa(r) : ""
      })
    }

    function k() {
      v(arguments, function (t, e) {
        -1 == b(t, e) && t.push(e)
      })
    }

    function h() {
      v(arguments, function (t, e) {
        var r = b(t, e)
        ;-1 != r && t.splice(r, 1)
      })
    }

    function v(t, e) {
      for (var r = t[0], o = r.className ? r.className.split(" ") : [], n = 1; n < t.length; n++) {
        e(o, t[n])
      }
      r.className = o.join(" ")
    }

    function b(t, e) {
      if (t.indexOf) {
        return t.indexOf(e)
      }
      for (var r = 0; r < t.length; ++r) {
        if (t[r] == e) {
          return r
        }
      }
      return -1
    }

    function w(t, e, o) {
      var n,
        a = Q,
        i = function () {
          if (a != Q) {
            return !0
          }
          try {
            n = n || t()
          } catch (t) {
            throw ((n = !0), t)
          }
          return n
        }
      r.addEventListener && r.addEventListener("DOMContentLoaded", i, !1), T(i, e || 100, o || 3e4)
    }

    function x(t) {
      return (t %= 100) > 10 && t < 20 ? 2 : ((t %= 10), 0 == t || t > 4 ? 2 : 1 == t ? 0 : 1)
    }

    function A(t, e, r) {
      for (var o = t.split("."), n = U, a = 0; a < o.length; ++a) {
        if (!(o[a] in n)) {
          n = e
          break
        }
        n = n[o[a]]
      }
      return (
        n &&
          void 0 !== r &&
          ("number" == typeof r
            ? ("object" == typeof n && (n = 3 === n.length ? n[x(r)] : n[1 == r ? 0 : 1]), (n = n.replace("%d", r)))
            : (n = n.replace("%s", r))),
        n
      )
    }

    function y(t) {
      z(t, function (t, e) {
        U[t] = e
      })
    }

    function _() {
      var t,
        e,
        o = arguments[0]
      "string" == typeof arguments[1] ? ((t = arguments[1]), (e = arguments[2] || {})) : (e = arguments[1] || {})
      var n = "string" == typeof o ? r.createElement(o) : o
      z(e.attrs, function (t, e) {
        n.setAttribute(t, e)
      }),
        e.id && n.setAttribute("id", e.id),
        (e.name || t) && (n.className = e.name || t),
        e.html && (n.innerHTML = e.html),
        e.text && n.appendChild(r.createTextNode(e.text)),
        e.bind &&
          z(e.bind, function (t, e) {
            I(n, t, e)
          }),
        e.child && n.appendChild(e.child),
        e.parent && e.parent.appendChild(n)
      for (var a = t ? 3 : 2; a < arguments.length; a++) {
        C(n, arguments[a])
      }
      return n
    }

    function C(t, e) {
      e &&
        (e.constructor == Array
          ? z(e, function (e, r) {
              C(t, r)
            })
          : t.appendChild(e))
    }

    function T(t, e, r) {
      t() ||
        (r > 0 &&
          setTimeout(function () {
            T(t, e + 100, r - e)
          }, e))
    }

    function B(t) {
      if ("object" == typeof t) {
        var e = []
        z(t, function (t, r) {
          e.push(r)
        }),
          (t = e.sort().join("_"))
      }
      return String(t).replace(/\W/g, "")
    }

    function R() {
      return navigator.appVersion.match(/MSIE [1-9]\./)
    }

    function q() {
      return navigator.appVersion.match(/MSIE|Trident/)
    }

    function z(t, e) {
      for (var r in t || {}) {
        if (t.hasOwnProperty(r)) {
          var o = e(r, t[r])
          if (o !== undefined) {
            return o
          }
        }
      }
    }

    function S(t, e) {
      var r = []
      return (
        z(t, function (t, o) {
          r.push(e(o))
        }),
        r
      )
    }

    function L(t, e) {
      return (
        z(e, function (e, r) {
          t[e] = r
        }),
        t
      )
    }

    function N(t) {
      var e = j("dateFormat")
      return "function" == typeof e ? e(t) : t
    }

    function E(t) {
      var e = new Date().getTime(),
        r = Date.parse((t || "").replace(/-/g, "/"))
      if (!e || !r) {
        return t
      }
      var o = Math.floor((e - r) / 864e5)
      return o < -1
        ? A("date_future", "")
        : o < 1
          ? A("date_today", "Today")
          : o < 2
            ? A("date_yesterday", "Yesterday")
            : o < 11
              ? A("date_days_ago", ["1 day ago", "%d days ago"], o)
              : o < 25
                ? A("date_weeks_ago", ["1 week ago", "%d weeks ago"], Math.round(o / 7))
                : o < 355
                  ? A("date_months_ago", ["1 month ago", "%d months ago"], Math.round(o / 31))
                  : A("date_years_ago", ["1 year ago", "%d years ago"], Math.round(o / 365))
    }

    function I(t, e, r) {
      t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent("on" + e, r)
    }
    var V = e.testFreaks,
      F = V
    ;(V && V.constructor !== Array) ||
      (V = e.testFreaks =
        {
          push: i,
        }),
      t === F && (t = V),
      L(t, {
        api: {
          reg: a,
          run: p,
          ctx: s,
        },
        css: {
          attr: m,
          inject: d,
        },
        options: {
          set: o,
          get: n,
        },
        translate: A,
        addTranslations: y,
        formatDate: N,
        ajax: f,
        wait: w,
        oldie: R,
        nosvg: q(),
        rtl: !1,
        element: _,
        forEach: z,
        extend: L,
        bind: I,
        word: B,
        map: S,
        indexOf: b,
        addClass: k,
        removeClass: h,
      })
    var M = {
        defaults: {},
      },
      j = t.options.get
    ;(0, t.options.set)("dateFormat", E)
    var D = {},
      H = {},
      P = 0,
      Z = {}
    f.reset = function () {
      Z = {}
    }
    var O = {},
      Q = 0
    w.reset = function () {
      Q += 1
    }
    var U = {}
    _.curry = function (e) {
      return function () {
        return [].splice.call(arguments, 0, 0, e), _.apply(t, arguments)
      }
    }
  })(n, window, document),
    (function (t) {
      function e(t, e, r) {
        var o = i(t, "badge", ["1 review", "%d reviews"], {
          seo: e,
          rating: N("showBadgeRating"),
          tooltip: N("showBadgeTooltip"),
          size: "md",
          onData: r && r.onData,
          onBadgeClick: r && r.onBadgeClick,
          onDistClick: function (t) {
            r.onDistClick && r.onDistClick(t), r.onBadgeClick && r.onBadgeClick()
          },
          onTooltip: r.onTooltip,
        })
        if (o) {
          return S("testfreaks-badge", {}, o)
        }
      }

      function r(t) {
        return S("testfreaks-badge", {}, a("md", q("badge_empty", "Write a review"), t))
      }

      function o(t, e, r) {
        return i(t, "items", "%d", {
          rating: e,
          size: "sm",
          onData: r && r.onData,
        })
      }

      function n() {
        return a("sm", q("items_empty", ""))
      }

      function a(e, r, o) {
        return S(
          "testfreaks" + (t.nosvg ? " testfreaks-nosvg" : ""),
          {},
          S(
            "tf-row",
            {},
            S(
              "tf-score",
              {},
              c(0, e, {
                bind: {
                  click: o && o.onBadgeClick,
                },
              }),
            ),
            r &&
              S(o && o.onBadgeClick ? "tf-link" : "tf-count", {
                html: r,
                bind: {
                  click: o && o.onBadgeClick,
                },
              }),
          ),
        )
      }

      function i(e, r, o, n) {
        var a = {
          score: m(e),
          count: d(e),
          seo: n.seo,
        }
        "function" == typeof n.rating && (a.score = n.rating(e)), "function" == typeof n.onData && n.onData(a, e)
        var i = a.score,
          l = a.count,
          f = a.seo
        if (i && l) {
          var u,
            k = {},
            h = {},
            v = {},
            b = {},
            x = N("seoSchema")
          if (f) {
            if (
              ("object" != typeof f &&
                (f =
                  "string" == typeof f
                    ? {
                        text: f,
                      }
                    : {}),
              "json-ld" == x)
            ) {
              var A = {
                "@id": f.text || "#product",
                "@context": "https://schema.org",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: g(i),
                  ratingCount: l,
                },
              }
              f.product && ((A["@type"] = "Product"), t.extend(A, f.product)),
                (u = z("script", {
                  attrs: {
                    type: "application/ld+json",
                  },
                  html: JSON.stringify(A),
                }))
            } else if ("microdata" == x) {
              var y = f.product ? f.product.name : f.text
              y &&
                ((k = {
                  itemscope: "",
                  itemtype: "https://schema.org/Product",
                }),
                (u = L("tf-product-name", {
                  html: y,
                  attrs: {
                    itemprop: "name",
                  },
                }))),
                (h = {
                  itemprop: "aggregateRating",
                  itemscope: "",
                  itemtype: "https://schema.org/AggregateRating",
                }),
                (v = {
                  itemprop: "reviewCount",
                  content: l,
                }),
                (b = {
                  itemprop: "ratingValue",
                  content: g(i),
                })
            }
          }
          n.rating || n.tooltip || (k.title = g(i) + " / 5")
          var _, C
          return (
            n.tooltip
              ? ((_ = c(i, n.size)),
                (C = S(
                  "tf-tooltip",
                  {},
                  S("tf-row", {}, S("tf-score", {}, c(i, n.size)), p(i)),
                  S("tf-tooltip-row", {
                    html: q("basedon", ["Based on 1 rating", "Based on %d ratings"], l),
                  }),
                  S(
                    "tf-tooltip-row",
                    {},
                    w(e, {
                      onClick: n.onDistClick,
                      tooltip: !0,
                    }),
                  ),
                  S("tf-tooltip-footer tf-link", {
                    text: q("see_reviews", "See reviews"),
                    bind: {
                      click: n.onBadgeClick,
                    },
                  }),
                )),
                s(_, C, n.onTooltip))
              : (_ = c(i, n.size, {
                  bind: {
                    click: n.onBadgeClick,
                  },
                })),
            S(
              "testfreaks" + (t.nosvg ? " testfreaks-nosvg" : ""),
              {
                attrs: k,
              },
              S(
                "tf-row",
                {
                  attrs: h,
                },
                S(
                  "tf-score" + (n.tooltip ? " iconmore with-tooltip" : ""),
                  {
                    attrs: b,
                  },
                  _,
                  C,
                ),
                n.rating && p(i),
                S("tf-count" + (n.onBadgeClick ? " tf-link" : ""), {
                  attrs: v,
                  html: q(r, o, l),
                  bind: {
                    click: n.onBadgeClick,
                  },
                }),
              ),
              u,
            )
          )
        }
      }

      function s(t, e, r) {
        r &&
          (t.onmouseover = function () {
            r && r(), (r = null)
          }),
          t &&
            e &&
            ((t.ontouchstart = function () {
              e.className = "tf-tooltip"
            }),
            (e.ontouchstart = function () {
              (e.className = "tf-tooltip tf-tooltip-close"), event.stopPropagation()
            }))
      }

      function l(t) {
        var e = m(t),
          r = u(t) || d(t)
        if (e && r) {
          var o, n
          if (
            N("showAboutTooltip") ||
            u(t, {
              onlyExternal: !0,
            }) > 0
          ) {
            var a = q(
              "about",
              "This score is based on all expert and user reviews that <a target='_blank' href='https://www.testfreaks.com'>TestFreaks</a> has collected for this product. Reviews and scores are collected from more than 30 countries but only reviews in selected languages are shown below.",
            )
            a &&
              (o = S("tf-tooltip", {
                html: a,
              }))
          }
          return (
            (n = S(
              "tf-based" + (o ? " iconmore with-tooltip" : ""),
              {},
              L("not-xs", {
                html: q("basedon", ["Based on 1 rating", "Based on %d ratings"], r),
              }),
              L("only-xs-inline", {
                html: q("basedonxs", ["1 rating", "%d ratings"], r),
              }),
              o,
            )),
            s(n, o),
            S("tf-score", {}, p(e), c(e, "lg"), n)
          )
        }
      }

      function p(t) {
        return S("tf-rating", {
          html: g(t),
        })
      }

      function c(e, r, o) {
        if (t.nosvg || t.oldie()) {
          return S("tf-stars tf-stars-" + r + " tf-stars-" + r + "-" + 5 * Math.round(e), o || {})
        }
        var n = N("svgStarFillFactor"),
          a = (n * e) / 10,
          i = Math.ceil(e / 2) - 1,
          s = ((1 - n) * i) / 4,
          l = 100 * (a + s)
        return S(
          "tf-stars tf-stars-svg",
          o || {},
          l < 100 && S("tf-stars-svg tf-stars-bg", f(l, 0)),
          l > 0 && S("tf-stars-svg tf-stars-fg", f(0, 100 - l)),
        )
      }

      function f(e, r) {
        if (0 == e && 0 == r) {
          return {}
        }
        var o = t.rtl ? e : r,
          n = t.rtl ? r : e,
          a = "clip-path:inset(0 " + o.toFixed(3) + "% 0 " + n.toFixed(3) + "%);"
        return {
          attrs: {
            style: a + "-webkit-" + a,
          },
        }
      }

      function m(t) {
        if (t.score || t.your_avg_score) {
          return t.score || 2 * t.your_avg_score
        }
      }

      function d(t) {
        return (t.pro_review_count || 0) + (t.user_review_count || 0) + (t.your_review_count || 0)
      }

      function u(t, e) {
        var r = (t.pro_score_dist_all || []).concat(t.user_score_dist_all || [])
        ;(e && e.onlyExternal) || (r = r.concat(t.your_score_dist || []))
        for (var o = 0, n = 0, a = r.length; n < a; ++n) {
          o += r[n]
        }
        return o
      }

      function g(t) {
        return (Math.round(5 * t) / 10).toFixed(1)
      }

      function k(t) {
        var e = d(t),
          r = m(t)
        if (r && e) {
          return L(
            {
              attrs: {
                itemprop: "aggregateRating",
                itemscope: "",
                itemtype: "http://schema.org/AggregateRating",
              },
            },
            z("meta", {
              attrs: {
                itemprop: "ratingValue",
                content: g(r),
              },
            }),
            z("meta", {
              attrs: {
                itemprop: "reviewCount",
                content: e,
              },
            }),
          )
        }
      }

      function h(e, r) {
        return S("tf-header", {}, t.createScore(e), w(e, r), v(e))
      }

      function v(t) {
        var e = b(t.product_pros, t.product_cons),
          r = []
        if (
          (I(t.your_review_answers, function (t, e) {
            var o = _(e)
            o && r.push(o)
          }),
          e || r.length)
        ) {
          return S("aggregations" + (r.length ? "" : " not-xs"), {}, r.length && S("answers", {}, r), e)
        }
      }

      function b(t, e) {
        var r = t && t.length,
          o = e && e.length
        if (r) {
          return S(
            "tf-proscons not-xs",
            {},
            r &&
              S(
                "pros",
                {},
                z("span", "prefix", {
                  text: q("pros", "Pros:"),
                }),
                z("span", {
                  html: t.join(", "),
                }),
              ),
            o &&
              S(
                "cons",
                {},
                z("span", "prefix", {
                  text: q("cons", "Cons:"),
                }),
                z("span", {
                  html: e.join(", "),
                }),
              ),
          )
        }
      }

      function w(e, r) {
        var o = e.pro_score_dist_all,
          n = R(e.user_score_dist_all, e.your_score_dist),
          a = R(n, o),
          i = r && r.tooltip,
          s = i ? null : e.your_review_answers,
          l = r && r.onClick
        ;(N("singleDistribution") || i) && ((n = R(n, o)), (o = []))
        var p = B(o || []),
          c = B(n || []),
          f = c + p,
          m = p && c
        if (f || s) {
          return S(
            "tf-distributions",
            {},
            f &&
              A("all" + (m ? " only-sm" : ""), a, f, {
                unscaled: !0,
                onClick: l,
                tab: "current",
              }),
            m &&
              A("pro", o, p, {
                name: q("experts", "(Experts)"),
                onClick: l,
                tab: "pro",
              }),
            m &&
              A("user", n, c, {
                name: q("users", "(Users)"),
                onClick: l,
                tab: "user",
              }),
            s &&
              t.map(s, function (t) {
                return y(t)
              }),
          )
        }
      }

      function x(t, e, r, o, n, a) {
        var i = r || 0,
          s = Math.round((100 * i) / n),
          l = Math.round((100 * i) / o),
          p = i + "/" + o + " (" + l + "%)",
          c = "width:" + Math.max(s, a || 0) + "% !important"
        return (
          a && 0 == s && (c += ";opacity:0.5 !important"),
          z(
            t,
            "bar",
            {
              attrs: {
                title: p,
              },
            },
            S(
              "fill",
              {},
              S(e, {
                attrs: {
                  style: c,
                },
              }),
            ),
          )
        )
      }

      function A(t, e, r, o) {
        var n = z("table"),
          a = o.unscaled ? r : Math.max.apply(null, e),
          i = o.onClick && N("distributionFilter")
        if (a && r) {
          for (var s = 0; s < 5; ++s) {
            var l = n.insertRow(0)
            z(l.insertCell(0), "range", {
              html: q("distrange", "%d", s + 1),
            }),
              z(l.insertCell(1), "sym", {
                html: q("distsym", "&star;"),
              }),
              x(l.insertCell(2), "bin bin" + (4 - s), e[s], r, a),
              i &&
                e[s] &&
                ((l.className = "clickable"),
                (l.onclick = (function (t) {
                  return function () {
                    o.onClick(t, o.tab)
                  }
                })(s + 1)))
          }
          return S(
            "tf-distribution tf-dist-" + t,
            {},
            n,
            o.name &&
              S("name", {
                html: o.name,
              }),
          )
        }
      }

      function y(t) {
        var e = T(t)
        if (e) {
          var r = z("table")
          return (
            I(t.options, function (o, n) {
              var a = e.optionTitle(n)
              if (a) {
                var i = r.insertRow(0)
                z(i.insertCell(0), "option", {
                  text: a,
                }),
                  x(i.insertCell(1), "bin", n.count, t.count, e.best.count, 8)
              }
            }),
            S(
              "tf-distribution tf-dist-answer",
              {},
              S("title", {
                text: e.title,
              }),
              r,
            )
          )
        }
      }

      function _(t) {
        var e = T(t)
        if (e) {
          var r = S(
              "answer only-sm",
              {},
              z("span", "question", {
                text: e["short"],
              }),
              z("span", "option", {
                text: e.bestTitle,
              }),
              (link = z("span", "percent tf-link", {
                text: "(" + Math.round((100 * e.best.count) / t.count) + "%)",
              })),
            ),
            o = y(t)
          return (
            (link.onclick = function () {
              (r.className = r.className + " hidden"), (o.className = o.className + " only-sm")
            }),
            [r, o]
          )
        }
      }

      function C(t) {
        var e,
          r = 0
        if (
          (I(t.options, function (t, o) {
            o.count && o.count > r && ((r = o.count), (e = o))
          }),
          e && e.count && t.count >= N("minAnswerCount"))
        ) {
          return e
        }
      }

      function T(t) {
        function e(e) {
          return q("review_questions." + t.name + "." + e)
        }

        function r(t) {
          return e("options." + t.value + ".summary") || e("options." + t.value + ".review")
        }
        var o = C(t)
        if (o) {
          var n = {
            title: e("summary"),
            short: e("short"),
            best: o,
            bestTitle: r(o),
            optionTitle: r,
          }
          return n.title && n["short"] && n.bestTitle ? n : void 0
        }
      }

      function B(t) {
        for (var e = 0, r = 0, o = t.length; r < o; ++r) {
          e += t[r]
        }
        return e
      }

      function R(t, e) {
        if (t && e) {
          for (var r = [], o = 0; o < 5; ++o) {
            r[o] = t[o] + e[o]
          }
          return r
        }
        return t || e
      }
      var q = t.translate,
        z = t.element,
        S = z.curry("div"),
        L = z.curry("span"),
        N = t.options.get,
        E = t.options.set,
        I = t.forEach
      E("seoSchema", "microdata"),
        E("minAnswerCount", 2),
        E("singleDistribution", !1),
        E("distributionFilter", !1),
        E("showBadgeRating", !0),
        E("showBadgeTooltip", !1),
        E("showAboutTooltip", !1),
        E("svgStarFillFactor", 91 / 96),
        t.extend(t, {
          createBadge: e,
          createEmptyBadge: r,
          createItem: o,
          createEmptyItem: n,
          createScore: l,
          createStars: c,
          createHeader: h,
          seoSnippet: k,
        })
    })(n),
    (function (t, e) {
      function r() {
        l || ((l = !0), n(), a())
      }

      function o(t, e) {
        try {
          testFreaksImages.show(t, e)
        } catch (t) {}
      }

      function n() {
        var t = e.createElement("script")
        ;(t.charset = "utf-8"), (t.src = s("imageHost") + s("imageAsset", "js"))
        var r = e.getElementsByTagName("script")[0]
        r.parentNode.insertBefore(t, r)
      }

      function a() {
        var t = e.createElement("link")
        ;(t.rel = "stylesheet"),
          (t.type = "text/css"),
          (t.href = s("imageHost") + s("imageAsset", "css")),
          e.getElementsByTagName("head")[0].appendChild(t)
      }
      var i = t.options.set,
        s = t.options.get,
        l = !1
      i("imageHost", "https://r.testfreaks.com"),
        i("imageAsset", {
          js: "/assets/images.js",
          css: "/assets/images.css",
        }),
        (t.image = {
          init: r,
          show: o,
        })
    })(n, document),
    (function (t) {
      function e(t, e, r) {
        (l[t] = l[t] || {}), (l[t][e] = l[t][e] || []), l[t][e].push(r)
      }

      function r(t, r, o) {
        var n = !1,
          a = function (t, e) {
            n || ((n = !0), o(t, e))
          }
        ;(a.reset = function () {
          n = !1
        }),
          e(t, r, a)
      }

      function o(t, e, r) {
        var o = s(t, e)
        p(o, function (t, e) {
          r === e && (o[t] = null)
        })
      }

      function n() {
        p(l, function (t, e) {
          p(e, function (t, e) {
            p(e, function (t, e) {
              e.reset && e.reset()
            })
          })
        })
      }

      function a(t) {
        return function (e, r, o) {
          i(t, e, r, o)
        }
      }

      function i(t, e, r, o) {
        p(s(t, e), function (t, e) {
          e && e(r, o)
        })
      }

      function s(t, e) {
        return (l[t] || {})[e]
      }
      var l = {},
        p = t.forEach
      t.events = {
        on: e,
        one: r,
        off: o,
        reset: n,
        tracker: a,
      }
    })(n),
    (function (t) {
      function e(t) {
        var e = t.lang,
          n = o("from_" + e) || r[e] || e.toUpperCase()
        return o("translated_from", "Translated from %s", n)
      }
      var r,
        o = t.translate
      ;(t.intl = {
        translatedFrom: e,
      }),
        (r = {
          ar: "Arabic",
          bg: "Bulgarian",
          da: "Danish",
          de: "German",
          en: "English",
          el: "Greek",
          es: "Spanish",
          et: "Estonian",
          fi: "Finnish",
          fr: "French",
          he: "Hebrew",
          hr: "Croatian",
          hu: "Hungarian",
          id: "Indonesian",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          lt: "Lithuanian",
          lv: "Latvian",
          nl: "Dutch",
          no: "Norwegian",
          pl: "Polish",
          pt: "Portuguese",
          ro: "Romanian",
          ru: "Russian",
          sl: "Slovenian",
          sv: "Swedish",
          th: "Thai",
          tr: "Turkish",
          vi: "Vietnamese",
          zh: "Chinese",
        })
    })(n),
    (function (t) {
      function e(e) {
        var r = _(e),
          o = e.author,
          c = e.author,
          f = "user" == e.type || "pro" == e.type,
          k = e.extract || e.pros || e.cons,
          h = e.original,
          v = k && h && h.lang && (h.extract || h.pros || h.cons),
          b = q(e)
        D("showSourceNames", e.type) || (r = null), D("showAuthorNames", e.type) || (f && (c = null), (o = null))
        var w, x, A
        return (
          e.verified_buyer &&
            ((A = z()),
            (w = V(
              "verified iconverified",
              A
                ? {}
                : {
                    attrs: {
                      title: E("verified_buyer", "Verified buyer"),
                    },
                  },
            )),
            D("showVerifiedBuyer") &&
              (x = V("vbuyer hcol not-xs" + (A ? " with-tooltip iconmore" : ""), {
                text: E("verified_buyer", "Verified buyer"),
              })),
            A && (A.bind(w), A.bind(x))),
          V(
            "article review" + (b ? " translate-section" : "") + (f ? "" : " customer-review"),
            {
              attrs: {
                lang: e.lang,
              },
            },
            V(
              "header notranslate",
              {},
              i(e, c),
              V(
                "hrow" + (e.score ? "" : " hrow-single" + (o && r ? " hrow-cols" : "")),
                {},
                o &&
                  V("author hcol", {
                    text: o,
                  }),
                o &&
                  m({
                    xs: !!r,
                  }),
                r && s(e, r),
                r && m(),
                d(e.date),
                x && m(),
                x,
                w,
              ),
              e.score && V("hrow", {}, V("score hcol", {}, j(C(e), "sm"))),
            ),
            A && A.elem,
            V(
              "content",
              {},
              e.extract && n(e),
              e.pros &&
                V(
                  "pros",
                  {},
                  F("prefix notranslate", {
                    text: E("pros", "Pros:"),
                  }),
                  F({
                    text: e.pros,
                  }),
                ),
              e.cons &&
                V(
                  "cons",
                  {},
                  F("prefix notranslate", {
                    text: E("cons", "Cons:"),
                  }),
                  F({
                    text: e.cons,
                  }),
                ),
              (e.question_answers || e.properties) && a(e),
              !e.extract && n(e),
              e.images && e.images.length > 0 && p(e.images),
              l(e.responses),
            ),
            V(
              "footer notranslate",
              {},
              v &&
                V(
                  "translate-control-section pull-left",
                  {},
                  V(
                    "translate-control",
                    {},
                    F({
                      html: t.intl.translatedFrom(e.original),
                    }),
                    F("sep", {
                      html: D("separator"),
                    }),
                    I("a", {
                      html: E("show_original", "Show original"),
                      attrs: {
                        href: "javascript:void(0)",
                      },
                      bind: {
                        click: function (t) {
                          L(N(t.target, "article"), e), Z("click", "original")
                        },
                      },
                    }),
                  ),
                ),
              !v &&
                k &&
                b &&
                V(
                  "translate-control-section pull-left",
                  {},
                  V("translate-control", {
                    bind: {
                      click: function (t) {
                        t.preventDefault()
                      },
                    },
                  }),
                  V("translation-by", {
                    html: E("translation_by", "Powered by Google Translate"),
                  }),
                ),
              u(e.date),
              k && g(e),
              V("bottom", {}),
            ),
          )
        )
      }

      function r(e) {
        var r = e.original,
          o = r && r.lang,
          a = q(e)
        return V(
          "article question" + (a ? " translate-section" : ""),
          {
            attrs: {
              lang: e.lang,
            },
          },
          V(
            "header notranslate",
            {},
            i(e, e.author, {
              type: "question",
            }),
            V(
              "hrow hrow-single",
              {},
              V("author hcol", {
                text: e.author,
              }),
              m(),
              d(e.date),
            ),
          ),
          V(
            "content",
            {},
            e.title &&
              V("title", {
                text: e.title,
              }),
            n(e),
            e.images && e.images.length > 0 && p(e.images),
            l(e.responses),
          ),
          V(
            "footer notranslate",
            {},
            o &&
              V(
                "translate-control-section pull-left",
                {},
                V(
                  "translate-control",
                  {},
                  F({
                    html: t.intl.translatedFrom(e.original),
                  }),
                  F("sep", {
                    html: D("separator"),
                  }),
                  I("a", {
                    html: E("show_original", "Show original"),
                    attrs: {
                      href: "javascript:void(0)",
                    },
                    bind: {
                      click: function (t) {
                        L(N(t.target, "article"), e)
                      },
                    },
                  }),
                ),
              ),
            !o &&
              a &&
              V(
                "translate-control-section pull-left",
                {},
                V("translate-control", {
                  bind: {
                    click: function (t) {
                      t.preventDefault()
                    },
                  },
                }),
                V("translation-by", {
                  html: E("translation_by", "Powered by Google Translate"),
                }),
              ),
            u(e.date),
            g(e),
            V("bottom", {}),
          ),
        )
      }

      function o(t) {
        return V(
          "article review",
          {},
          V(
            "header",
            {},
            i(t, t.author),
            V(
              "hrow" + (t.score ? "" : " hrow-single"),
              {},
              V("author hcol", {
                text: t.author,
              }),
              m(),
              d(t.date),
              t.verified_buyer &&
                V("verified iconverified", {
                  attrs: {
                    title: E("verified_buyer", "Verified buyer"),
                  },
                }),
            ),
            t.score && V("hrow", {}, V("score hcol", {}, j(2 * t.score, "md"))),
          ),
          V(
            "content",
            {},
            y("extract", {
              text: t.extract,
              transform: D("textTransform", "seller"),
            }),
            l(t.responses),
          ),
          V("footer", {}, u(t.date)),
        )
      }

      function n(t) {
        var e = t.extract || "",
          r = D("textTransform", "extract")
        if (t.link && D("showTextLinks", t.type)) {
          var o = I("a", "notranslate", {
            html: E("read_more", "Read more"),
            attrs: {
              href: t.link,
              target: "_blank",
            },
          })
          return (
            P(o, "click", function () {
              Z("click", "link", t.link)
            }),
            y("extract", {
              text: e + " ",
              elem: o,
              transform: r,
            })
          )
        }
        return e
          ? y("extract", {
              text: e,
              transform: r,
            })
          : V("no-extract")
      }

      function a(e) {
        function r(t) {
          return E("review_questions." + t + ".review")
        }

        function o(t, e) {
          return r(t + ".options." + e)
        }
        var n = []
        return (
          O(e.question_answers, function (t, e) {
            if ("select" == e.type) {
              var a = r(e.name)
              if (a) {
                var i = []
                O(e.options, function (t, r) {
                  if (r.selected) {
                    var n = o(e.name, r.value)
                    n && i.push(n)
                  }
                }),
                  i.length && n.push([a, i.join(D("answerSeparator"))])
              }
            }
          }),
          O(e.properties, function (t, e) {
            var a = r(t)
            a && n.push([a, o(t, e) || e])
          }),
          t.map(n, function (t) {
            return V(
              "answer notranslate",
              {},
              F("question", {
                text: t[0],
              }),
              F("option", {
                text: t[1],
              }),
            )
          })
        )
      }

      function i(t, e) {
        var r,
          o = _(t)
        if (t.icon && D("showLogos", t.type)) {
          r = V("logo image-logo pull-left", {
            html: '<img src="' + t.icon + '">',
          })
        } else {
          var n = e || o || "?",
            a = o || e || "",
            i = n.charAt(0)
          if (n != o) {
            var s = n.split(" ")
            2 == s.length ? (i += s[1].charAt(0)) : 1 == s.length && 2 == s[0].length && (i = s[0])
          }
          (r = V("logo text-logo pull-left", {
            text: i.toUpperCase(),
          })),
            (color = D("logoColor", t.type)),
            "function" == typeof color && (color = color(a, t.type)),
            (r.style.cssText = "background-color: " + color + " !important;")
        }
        if (t.link && D("showLogoLinks", t.type)) {
          var l = I(
            "a",
            "logo-link",
            {
              attrs: {
                href: t.link,
                target: "_blank",
              },
            },
            r,
          )
          return (
            P(l, "click", function () {
              Z("click", "link", t.link)
            }),
            l
          )
        }
        return r
      }

      function s(t, e) {
        return t.link && D("showSourceNameLinks", t.type)
          ? I("a", "source source-link hcol", {
              attrs: {
                href: t.link,
                target: "_blank",
              },
              text: e,
              bind: {
                click: function () {
                  Z("click", "link", t.link)
                },
              },
            })
          : V("source hcol", {
              text: e,
            })
      }

      function l(t) {
        var e = t && t[0]
        if (e) {
          return V(
            "response",
            {},
            V(
              "header notranslate",
              {},
              e.icon &&
                V("logo image-logo pull-left", {
                  html: '<img src="' + e.icon + '">',
                }),
              !e.icon &&
                V("logo text-logo pull-left", {
                  html: "&#x2713;",
                }),
              V(
                "hrow hrow-single",
                {},
                V("author hcol", {
                  text: e.name,
                }),
              ),
            ),
            y("content response-content", {
              text: e.response,
              transform: D("textTransform", "response"),
            }),
            e.images && e.images.length > 0 && V("content", {}, p(e.images)),
          )
        }
      }

      function p(e) {
        t.image.init()
        for (var r = V("images"), o = 0; o < e.length; ++o) {
          var n = V(
            "image icon-image",
            {
              parent: r,
            },
            I("img", {
              attrs: {
                src: e[o].icon,
              },
            }),
          )
          P(n, "click", f(e, o, "photo"))
        }
        return r
      }

      function c(e) {
        t.image.init()
        for (var r = V("videos"), o = 0; o < e.length; ++o) {
          var n = V(
            "video icon-video",
            {
              parent: r,
            },
            I("img", {
              attrs: {
                src: e[o].icon,
              },
            }),
            I("div", "iconplay", {}),
          )
          P(n, "click", f(e, o, "video"))
        }
        return r
      }

      function f(e, r, o) {
        return function () {
          Z("click", o), t.image.show(e, r)
        }
      }

      function m(t) {
        return F("sep" + (t && t.xs ? "" : " not-xs"), {
          html: D("separator"),
        })
      }

      function d(t) {
        return I("time", "date hcol not-xs", {
          attrs: {
            datetime: t,
          },
          html: M(t),
        })
      }

      function u(t) {
        return I("time", "date only-xs pull-left", {
          attrs: {
            datetime: t,
          },
          html: M(t),
        })
      }

      function g(t) {
        if (D("showVoting", t.type) && t.feedback_url) {
          return V(
            "votes notranslate",
            {},
            V(
              "icons pull-right",
              {},
              k(t, "up", t.votes_up, E("vote_up_tooltip", "")),
              k(t, "down", t.votes_down, E("vote_down_tooltip", "")),
              D("showVoteReport", t.type) && k(t, "bad", !1, E("report_tooltip", "Report incorrect or offensive content")),
            ),
          )
        }
      }

      function k(t, e, r, o) {
        var n = V("icon pull-left votes-" + e + " iconvote" + e, {
          html: r && r,
          attrs: {
            title: o,
            "data-count": r,
          },
        })
        return (
          (n.onclick =
            "bad" == e
              ? function () {
                  v(this), Z("click", "vote", "bad"), h(this, A(t, e))
                }
              : function () {
                  var r = -1 != Q(this.className, "alreadyvoted"),
                    o = r ? "reset" : e
                  v(this), Z("click", "vote", o), x(this, A(t, o)), r || b(this)
                }),
          n
        )
      }

      function h(t, e) {
        var r,
          o,
          n,
          a = t.parentNode.parentNode,
          i = a.childNodes[1]
        if (i) {
          return void a.removeChild(i)
        }
        (i = V(
          "reason",
          {
            parent: a,
          },
          (r = I("textarea", {
            attrs: {
              rows: 3,
              placeholder: E("report_reason", "Please tell us the reason for reporting this."),
            },
          })),
          V(
            "buttons",
            {},
            (o = I("input", {
              name: "submit",
              attrs: {
                type: "submit",
                disabled: "disabled",
                value: E("submit", "Submit"),
              },
            })),
            (n = I("input", {
              name: "cancel",
              attrs: {
                type: "reset",
                value: E("cancel", "Cancel"),
              },
            })),
          ),
        )),
          (r.onkeyup = function () {
            o.disabled = !r.value
          }),
          (o.onclick = function () {
            x(t, e + "&comment=" + encodeURIComponent(r.value)), w(t)
          }),
          (n.onclick = function () {
            a.removeChild(i)
          })
      }

      function v(t) {
        O(t.parentNode.childNodes, function (t, e) {
          J(e, "alreadyvoted")
          var r = parseInt(e.getAttribute("data-count"))
          e.innerHTML = r || ""
        })
      }

      function b(t) {
        U(t, "alreadyvoted")
        var e = parseInt(t.getAttribute("data-count"))
        isNaN(e) || (t.innerHTML = e + 1)
      }

      function w(t) {
        var e = t.parentNode.parentNode
        ;(e.innerHTML = ""),
          e.appendChild(
            V("thanks icons", {
              html: E("thank", "Thank you!"),
            }),
          )
      }

      function x(t, e) {
        try {
          var r = new XMLHttpRequest()
          r.open("GET", e, !0), r.send()
        } catch (t) {}
      }

      function A(t, e) {
        var r = t.feedback_url
        return (r = r + (r.indexOf("?") >= 0 ? "&" : "?") + "type=" + e)
      }

      function y(t, e) {
        for (var r, o = e.text.split(/(?:\r?\n){2,}/), n = V(t), a = 0; a < o.length; ++a) {
          (r = I("p", "formatted", {
            text: o[a],
            parent: n,
          })),
            "function" == typeof e.transform && (r.innerHTML = e.transform(r.innerHTML))
        }
        return e.elem && r.appendChild(e.elem), n
      }

      function _(t) {
        return D("showDomainNames", t.type) ? t.domain : t.source
      }

      function C(t) {
        return t.score && t.score_max ? (t.score / t.score_max) * 10 : t.score
      }

      function T(t) {
        try {
          var e = /<a /
          if (t.match(e)) {
            return t
          }
          var r = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
          return t.replace(r, '<a href="$1" target="_blank">$1</a>')
        } catch (e) {
          return t
        }
      }

      function B(t, e) {
        for (var r = 0, o = 0; r < t.length; ++r) {
          o += t.charCodeAt(r)
        }
        var n = D("logoColorCount", e)
        return R((o % n) / n, D("logoColorSaturation", e), D("logoColorValue", e))
      }

      function R(t, e, r) {
        function o(t, e, r) {
          function o(t) {
            return Math.floor(256 * t).toString(16)
          }
          return "#" + o(t) + o(e) + o(r)
        }
        var n = Math.floor(6 * t),
          a = 6 * t - n,
          i = r * (1 - e),
          s = r * (1 - a * e),
          l = r * (1 - (1 - a) * e)
        return 0 == n
          ? o(r, l, i)
          : 1 == n
            ? o(s, r, i)
            : 2 == n
              ? o(i, r, l)
              : 3 == n
                ? o(i, s, r)
                : 4 == n
                  ? o(l, i, r)
                  : n >= 5
                    ? o(r, i, s)
                    : void 0
      }

      function q(t) {
        var e = D("showTranslateUnlessLang", t.type)
        return e && e.length && e.indexOf && -1 == e.indexOf(t.lang)
      }

      function z() {
        var t = E("verified_buyer_tooltip", "")
        if (t && D("showVerifiedBuyerTooltip")) {
          return S(t)
        }
      }

      function S(t) {
        function e() {
          U(a, i)
        }

        function r() {
          J(a, i)
        }

        function o() {
          -1 == Q(a.className, i) ? e() : r()
        }

        function n(t) {
          t && (U(t, "tf-tooltip-control"), (t.onmouseover = e), (t.onmouseout = r), (t.onclick = o))
        }
        var a = V("tf-tooltip", {
            html: t,
          }),
          i = "tf-tooltip-open"
        return (
          (a.onclick = r),
          {
            elem: a,
            bind: n,
          }
        )
      }

      function L(t, e) {
        function r(e) {
          return t.getElementsByClassName(e)[0]
        }

        function o(e, r) {
          var o = []
          O(t.getElementsByClassName(e), function (t, e) {
            o.push(e)
          }),
            O(o, function (t, e) {
              r(e)
            })
        }

        function n(t, e) {
          t && (U(t, "hidden"), U(t, "translation"), t.parentNode.insertBefore(e, t))
        }

        function a() {
          o("translation", function (t) {
            J(t, "hidden"), J(t, "translation")
          }),
            o("original", function (t) {
              t.parentNode.removeChild(t)
            }),
            Z("click", "translate")
        }
        var i = e.original,
          s = e.responses && e.responses[0] && e.responses[0].original,
          l = r("translate-control"),
          p = r("title"),
          c = r("extract"),
          f = r("pros"),
          m = r("cons"),
          d = r("response-content"),
          u = f ? f.childNodes[1] : null,
          g = m ? m.childNodes[1] : null
        i.title &&
          n(
            p,
            V("title original", {
              text: i.title,
            }),
          ),
          i.extract &&
            n(
              c,
              y("extract original", {
                text: i.extract,
              }),
            ),
          i.pros &&
            n(
              u,
              F("original", {
                text: i.pros,
              }),
            ),
          i.cons &&
            n(
              g,
              F("original", {
                text: i.cons,
              }),
            ),
          d &&
            s &&
            n(
              d,
              y("content response-content original", {
                text: s.response,
              }),
            ),
          n(
            l,
            V(
              "translate-control original",
              {},
              I("a", {
                html: E("translate", "Translate"),
                attrs: {
                  href: "javascript:void(0)",
                },
                bind: {
                  click: a,
                },
              }),
            ),
          )
      }

      function N(t, e) {
        if (t) {
          return t.className && -1 !== Q(t.className, e) ? t : N(t.parentNode, e)
        }
      }
      var E = t.translate,
        I = t.element,
        V = I.curry("div"),
        F = I.curry("span"),
        M = t.formatDate,
        j = t.createStars,
        D = t.options.get,
        H = t.options.set,
        P = t.bind,
        Z = t.events.tracker("reviews"),
        O = t.forEach,
        Q = t.indexOf,
        U = t.addClass,
        J = t.removeClass
      H("showVoting", !1),
        H("showVoteReport", !0),
        H("showTextLinks", !1),
        H("showAuthorNames", !1),
        H("showAuthorNames", {
          customer: !0,
        }),
        H("showDomainNames", !1),
        H("showSourceNames", !0),
        H("showSourceNames", {
          customer: !1,
        }),
        H("showSourceNameLinks", !1),
        H("showLogos", !0),
        H("showLogoLinks", !0),
        H("showTranslateUnlessLang", []),
        H("showVerifiedBuyer", !1),
        H("showVerifiedBuyerTooltip", !1),
        H("logoColorCount", 100),
        H("logoColorSaturation", 0.16),
        H("logoColorValue", 0.76),
        H("logoColor", B),
        H("textTransform", {
          response: T,
        }),
        H("separator", " &bull; "),
        H("answerSeparator", ", "),
        (t.render = {
          review: e,
          question: r,
          sellerReview: o,
          videos: c,
        })
    })(n),
    (function (t) {
      function e(e, r) {
        (R = r), (T = 0), (B = 0), R.noSvg && (t.nosvg = !0), R.translations && t.addTranslations(R.translations), t.ajax(e, i)
      }

      function r(t, e) {
        "qa" == t || "ask" == t || "qa.current" == t
          ? (B && e && B.setFilter(e), B && B.selectTab("qa.current" == t ? "current" : t))
          : (T && e && T.setFilter(e), T && T.selectTab(t))
      }

      function o(t) {
        return n(t) || V("onBadgeData")
      }

      function n(t) {
        return t.your_review_url || t.user_review_url || t.pro_review_url || (t.write_review_url && V("showWriteReview"))
      }

      function a(t) {
        return t.your_question_url || (t.ask_question_url && V("showAskQuestion"))
      }

      function i(e) {
        (o(e) || a(e)) &&
          t.wait(function () {
            if (!R.waitFor || R.waitFor(e)) {
              return s(e), !0
            }
          }),
          R.onNoReviews && !n(e) && R.onNoReviews(e),
          R.onNoQA && !a(e) && R.onNoQA(e)
      }

      function s(e) {
        (e.review_count = (e.pro_review_count || 0) + (e.user_review_count || 0) + (e.your_review_count || 0)),
          e.feedback_enabled && F("showVoting", !0),
          R.css && t.css.inject(R.css),
          R.onData && R.onData(e),
          o(e) && l(e),
          n(e) && p(e),
          a(e) && c(e),
          R.onVideos && e.videos && e.videos.length > 0 && R.onVideos(e)
      }

      function l(e) {
        if (R.onBadge) {
          var r = R.seoBadge
          "function" == typeof r && (r = r())
          var o = t.createBadge(e, r, {
            onData: V("onBadgeData"),
            onBadgeClick: R.onBadgeClick,
            onDistClick: R.onDistClick,
            onTooltip: R.onBadgeTooltip,
          })
          if (!o && V("emptyBadge")) {
            o = t.createEmptyBadge({
              onBadgeClick: R.onBadgeClick,
            })
            try {
              o.setAttribute("selectTab", "write")
            } catch (t) {}
          }
          o && R.onBadge(o, e)
        }
      }

      function p(e) {
        if (R.onTabs) {
          var r = f(e)
          r && R.onTabs(r, e)
        }
        if (R.onSEO) {
          var o = t.seoSnippet(e)
          o && R.onSEO(o)
        }
      }

      function c(t) {
        if (R.onQA) {
          var e = m(t)
          e && R.onQA(e, t)
        }
      }

      function f(e) {
        var r = S(
          "testfreaks" + (t.nosvg ? " testfreaks-nosvg" : ""),
          {},
          e.review_count &&
            t.createHeader(e, {
              onClick: R.onDistClick,
            }),
        )
        T = C(r, w, M)
        var o = q("pro_tab", "Expert Reviews"),
          n = q("user_tab", "User Reviews"),
          a = V("showSortThreshold", "review")
        if (
          (a > -1 &&
            a <= e.review_count &&
            T.addSelect("rsort", "sort", [
              {
                value: "",
                text: q("sort_top", "Top reviews"),
                selected: !0,
              },
              {
                value: "date",
                text: q("sort_date", "Most recent"),
              },
            ]),
          V("distributionFilter"))
        ) {
          var i = "filter_score",
            s = ["1 star only", "%d star only"]
          T.addSelect("rscore", "score_dist", [
            {
              value: "",
              text: q("filter_score_all", "All stars"),
              selected: !0,
              hidden: !0,
            },
            {
              value: "5",
              text: q(i, s, 5),
            },
            {
              value: "4",
              text: q(i, s, 4),
            },
            {
              value: "3",
              text: q(i, s, 3),
            },
            {
              value: "2",
              text: q(i, s, 2),
            },
            {
              value: "1",
              text: q(i, s, 1),
            },
          ])
        }
        e.pro_review_url || (n = q("review_tab", "Reviews")),
          e.write_review_url && V("showWriteReview") && T.addFrameTab("write", q("write_tab", "Write Review"), e.write_review_url + "&noheader=1"),
          e.pro_review_url && !V("userTabFirst") && T.addTab("pro", o, e.pro_review_count, e.pro_review_url)
        var l
        if (e.your_review_url) {
          var p
          e.user_review_url &&
            (p = function (t) {
              V("autoLoadExternalReviews") || t.reloaded
                ? w(t, e.user_review_url, undefined, "user")
                : _(t, q("show_external", "Show reviews from external sources"), e.user_review_url, undefined, w, "user")
            }),
            (l = T.addTab("user", n, e.your_review_count + (e.user_review_count || 0), e.your_review_url, p))
        } else {
          e.user_review_url && T.addTab("user", n, e.user_review_count, e.user_review_url)
        }
        return (
          e.pro_review_url && V("userTabFirst") && T.addTab("pro", o, e.pro_review_count, e.pro_review_url),
          e.write_review_url &&
            V("showWriteReview") &&
            T.addLinkTab(q("first_tab", "Reviews"), q("first_write", "Be the first to write a review"), "write"),
          d(e.your_review_url) && h(l, e.your_review_url),
          S("testfreaks-reviews", {}, r)
        )
      }

      function m(e) {
        var r = S("testfreaks" + (t.nosvg ? " testfreaks-nosvg" : "")),
          o = q("qa_tab", "Questions and Answers")
        B = C(r, x, j)
        var n = V("showSortThreshold", "qa")
        n > -1 &&
          n <= e.your_question_count &&
          B.addSelect("qasort", "sort", [
            {
              value: "",
              text: q("sort_relevance", "Relevance"),
              selected: !0,
            },
            {
              value: "date",
              text: q("sort_date", "Most recent"),
            },
          ]),
          e.ask_question_url &&
            V("showAskQuestion") &&
            B.addFrameTab("ask", q("ask_tab", "Ask Question"), e.ask_question_url + "&noheader=1", R.width || "100%", 500)
        var a
        return (
          e.your_question_url && (a = B.addTab("qa", o, e.your_question_count, e.your_question_url)),
          e.ask_question_url && V("showAskQuestion") && B.addLinkTab(o, q("first_ask", "Be the first to ask a question"), "ask"),
          d(e.your_question_url) && v(a, e.your_question_url),
          S("testfreaks-qa", {}, r)
        )
      }

      function d(t) {
        return t && /mapping_ids\[0?\]/.test(decodeURI(t))
      }

      function u(t) {
        var e = t || []
        if (e.length) {
          for (var r = e[0], o = 0; o < e.length; o++) {
            var n = e[o]
            if (n.lang != r.lang || n.original) {
              return e.slice(0, o)
            }
          }
        }
        return e
      }

      function g(t, e) {
        var r = R.collect
        return "function" == typeof r && (r = r()), (r && r.url) || ((r = r || {}), (r.url = document.location.href)), e && (r.messageid = e), k(t, r)
      }

      function k(t, e) {
        var r = t
        return (
          L(e, function (t, e) {
            e && (r = r + "&" + t + "=" + encodeURIComponent(e))
          }),
          r
        )
      }

      function h(t, e) {
        V("preloadItems") ? b("reviews", t, k(e, T.urlParams), R.doReviews, I.review) : T.selectTab("user")
      }

      function v(t, e) {
        V("preloadItems") ? b("questions", t, k(e, B.urlParams), R.doQuestions, I.question) : B.selectTab("qa")
      }

      function b(e, r, o, n, a) {
        function i(t) {
          r.onDataPreload(t), (r.onDataPreload = null)
        }
        (r.onDataPreload = function (t) {
          var o = t[e],
            i = u(o)
          i.length &&
            (n
              ? ((t[e] = i), n(t, r.panel))
              : ((rs = S({
                  parent: r.panel,
                })),
                L(i, function (t, e) {
                  rs.appendChild(a(e))
                })),
            (t[e] = o.slice(i.length)),
            (r.remainingData = t))
        }),
          t.ajax(o, i, r.id)
      }

      function w(t, e, r, o) {
        function n(e) {
          y(t, e, q("show_more", "Show more reviews"), R.doReviews, R.onReviews, w, r, o)
        }
        A(t, k(e, T.urlParams), n, o)
      }

      function x(t, e) {
        function r(e) {
          y(t, e, q("show_more_qa", "Show more questions"), R.doQuestions, R.onQuestions, x)
        }
        A(t, k(e, B.urlParams), r, "qa")
      }

      function A(e, r, o, n) {
        e.onDataPreload ? (e.onDataPreload = o) : e.remainingData ? (o(e.remainingData), (e.remainingData = null)) : t.ajax(r, o, n)
      }

      function y(t, e, r, o, n, a, i, s) {
        var l = t.panel
        if (o) {
          o(e, l)
        } else if (e.html) {
          S({
            html: e.html,
            parent: l,
          })
        } else if (e.reviews) {
          var p = S({
            parent: l,
          })
          L(e.reviews, function (t, e) {
            p.appendChild(I.review(e))
          }),
            0 != e.reviews.length ||
              t.remainingData ||
              i ||
              p.appendChild(
                S("article-empty", {
                  text: q("no_reviews", "No reviews match your current selections"),
                }),
              )
        } else if (e.questions) {
          var c = S({
            parent: l,
          })
          L(e.questions, function (t, e) {
            c.appendChild(I.question(e))
          })
        }
        e.next_page_url ? _(t, r, e.next_page_url, i, a, s) : i ? i(t) : t.lastFn(), n && n(e), E(l, "loading")
      }

      function _(t, e, r, o, n, a) {
        S("read-more iconmore tf-link", {
          html: e,
          parent: t.panel,
        }).onclick = function () {
          N(t.panel, "loading"), M("click", "more"), this.parentNode.removeChild(this), n(t, r, o, a)
        }
      }

      function C(e, r, o) {
        function n(t, e, o, n, a) {
          function i() {
            N(l.panel, "loading"), r(l, n, a, t)
          }

          function s(t) {
            l.clear(t.score_dist ? null : o), l.id == u.currentId ? i() : (l.load = i), (l.reloaded = !0)
          }
          var l = c(t, e, {
            count: o,
          })
          return (l.load = i), (l.reload = s), l
        }

        function a(t, e, r) {
          if (0 == d.length || (1 == d.length && u[d[0]].frame)) {
            var n = c("link", t)
            ;(S("tf-tabs-link tf-link", {
              html: e,
              parent: n.panel,
            }).onclick = function () {
              o("click", "tab", r), l(r)
            }),
              l("link")
          }
        }

        function i(t, e, r) {
          var n = c(t, e, {
            frame: !0,
          })
          n.load = function () {
            function e(e) {
              try {
                if (r.startsWith(e.origin)) {
                  var a = JSON.parse(e.data).testFreaks
                  a &&
                    a.messageId == t &&
                    (R.onMessage && R.onMessage(a),
                    a.height && (n.frame.style.cssText = "height: " + a.height + "px !important;"),
                    "submit" == a.event && o("submit"))
                }
              } catch (t) {}
            }
            try {
              window.addEventListener("message", e, !1)
            } catch (t) {}
            n.frame.setAttribute("src", g(r, t))
          }
        }

        function s(t, e, r) {
          function n(t) {
            var e = l[t]
            ;(i.options[e].selected = "selected"), (s.options[e].selected = "selected"), E(i, "hidden"), E(s, "hidden")
          }

          function a(t) {
            var r = t.target.options[t.target.selectedIndex].value,
              n = {}
            ;(i.options[t.target.selectedIndex].selected = "selected"),
              (s.options[t.target.selectedIndex].selected = "selected"),
              (n[e] = r),
              p(n),
              o(e, r)
          }
          var i,
            s,
            l = {}
          S(
            "pull-left",
            {
              parent: v.btns,
            },
            (i = z("select", "tab pull-left tab-btn tab-sel", {
              id: "tf-tab-" + t,
            })),
          ),
            S(
              "accordion pull-left only-xs accordion-btn accordion-sel",
              {
                parent: v.body,
              },
              (s = z("select", "tab pull-left tab-btn tab-sel", {
                id: "tf-acc-" + t,
              })),
            ),
            L(r, function (t, e) {
              var r = {
                value: e.value,
              }
              e.selected && ((r.selected = "selected"), e.hidden && (N(i, "hidden"), N(s, "hidden"))),
                z("option", {
                  parent: i,
                  attrs: r,
                  text: e.text,
                }),
                z("option", {
                  parent: s,
                  attrs: r,
                  text: e.text,
                }),
                (l[e.value] = t)
            }),
            (i.onchange = a),
            (s.onchange = a),
            (k[e] = {
              select: n,
            })
        }

        function l(t, e) {
          "current" == t && (t = u.currentId)
          var r = "number" == typeof t ? d[t] : t || u.currentId || u.defaultId || d[0]
          ;(!u[r] || (u[r].frame && void 0 === t)) && (r = u.defaultId || d[0]),
            L(u, function (t, o) {
              t != r && o.close && o.close(e)
            }),
            u[r].select(e),
            r != u.currentId && ((u.currentId = r), f(r))
        }

        function p(e) {
          L(e, function (t, e) {
            k[t] && k[t].select(e)
          }),
            t.extend(h, e),
            L(u, function (t, e) {
              e.reload && e.reload(h)
            })
        }

        function c(t, e, r) {
          function n(r) {
            var o = e
            return r && V("showTabCounts", t) && (o = o + " (" + r + ")"), o
          }
          var a,
            i,
            s = r && r.count,
            p = r && r.frame
          d.push(t)
          var c = q("poweredby", "Powered by TestFreaks"),
            f = z("span", "not-xs", {
              html: c,
            }),
            m = S(
              "pull-left",
              {
                parent: p ? v.btns : v.tabs,
              },
              (a = S("tab pull-left " + (p ? "tab-btn" : "tab-txt"), {
                id: "tf-tab-" + t,
                html: n(s),
              })),
            )
          m.onclick = function () {
            o("click", "tab", t), l(t)
          }
          var g = S(
            "accordion pull-left only-xs " + (p ? "accordion-btn" : "accordion-txt iconexpand"),
            {
              parent: v.body,
            },
            (i = S("tab pull-left " + (p ? "tab-btn" : "tab-txt"), {
              id: "tf-acc-" + t,
              html: n(s),
            })),
          )
          g.onclick = function () {
            o("click", "tab", t),
              l(t, {
                accordion: !0,
              })
          }
          var k = S(
              "tf-tabs-panel hidden",
              {
                id: "tf-panel-" + t,
                parent: v.body,
              },
              V("showPoweredBy", t) &&
                z(
                  "a",
                  "poweredby icontf",
                  {
                    attrs: {
                      href: q("poweredbylink", "https://www.testfreaks.com"),
                      title: c,
                      rel: "nofollow",
                      target: "_blank",
                    },
                  },
                  f,
                ),
            ),
            h = {
              id: t,
              panel: k,
            }
          return (
            p && ((k.innerHTML = "<iframe frameborder='0' scrolling='auto'></iframe>"), (h.frame = k.firstChild)),
            (u[t] = h),
            p || (u.defaultId = u.defaultId || t),
            (h.lastFn = function () {
              E(f, "not-xs")
            }),
            (h.select = function (t) {
              t && t.accordion && h.active
                ? ((h.active = !1), h.close(t))
                : ((h.active = !0), N(m, "selected"), N(g, "selected"), E(k, "hidden"), p || (N(g, "iconcollapse"), E(g, "iconexpand")))
            }),
            (h.close = function (t) {
              N(k, "hidden"), E(m, "selected")
              var e = t && t.accordion && h.active
              e ? (N(k, "only-xs"), N(g, "selected")) : ((h.active = !1), E(k, "only-xs"), E(g, "selected")),
                p || (E(g, "iconexpand", "iconcollapse"), N(g, e ? "iconcollapse" : "iconexpand"))
            }),
            (h.clear = function (t) {
              L(Array.prototype.slice.call(k.children), function (t, e) {
                "DIV" == e.tagName && k.removeChild(e)
              }),
                (a.innerHTML = i.innerHTML = n(t)),
                N(f, "not-xs")
            }),
            h
          )
        }

        function f(t) {
          var e = u[t].load
          e && (e(), (u[t].load = null))
        }
        var m = S("tabs not-xs", {
            parent: e,
          }),
          d = [],
          u = {},
          k = {},
          h = {},
          v = {
            btns: S("pull-right", {
              parent: m,
            }),
            tabs: S("pull-left", {
              parent: m,
            }),
            body: S("tf-tabs-panels", {
              parent: e,
            }),
            last: S("tf-tabs-bottom", {
              parent: e,
            }),
          }
        return {
          addTab: n,
          addFrameTab: i,
          addLinkTab: a,
          addSelect: s,
          selectTab: l,
          setFilter: p,
          urlParams: h,
        }
      }
      var T,
        B,
        R,
        q = t.translate,
        z = t.element,
        S = z.curry("div"),
        L = t.forEach,
        N = t.addClass,
        E = t.removeClass,
        I = t.render,
        V = t.options.get,
        F = t.options.set,
        M = t.events.tracker("reviews"),
        j = t.events.tracker("qa")
      F("emptyBadge", !1),
        F("showWriteReview", !0),
        F("showAskQuestion", !0),
        F("userTabFirst", !1),
        F("autoLoadExternalReviews", !1),
        F("preloadItems", !1),
        F("showPoweredBy", !0),
        F("showTabCounts", !0),
        F("showSortThreshold", -1),
        t.extend(t, {
          init: e,
          selectTab: r,
        })
    })(n),
    (function (t) {
      function e(e, i, s) {
        if (!s) {
          return o(e, i)
        }
        var l = t.word(s)
        n[l]
          ? i.apply(null, n[l])
          : a[l]
            ? a[l].push(i)
            : ((a[l] = [i]),
              o(
                e,
                function () {
                  r(l, arguments)
                },
                s,
              ))
      }

      function r(t, e) {
        n[t] = e
        for (var r = 0, o = a[t].length; r < o; ++r) {
          a[t][r].apply(null, e)
        }
      }
      var o = t.ajax,
        n = {},
        a = {}
      t.cachedAjax = e
    })(n),
    (function (t, e) {
      function r(t, e, r, o, n) {
        m = !0
        var d = 0,
          u = function () {
            if (a(t, r || p)) {
              return n && n > d ? ((d += l), void (o || u.prio || ((u.prio = !0), c++))) : (e(t), !0)
            }
            n && ((d = 0), !o && u.prio && ((u.prio = !1), c--))
          }
        o && ((u.prio = o), c++), s.push(u), f || (f = setInterval(i, l))
      }

      function o(e, o, n, a, i) {
        n &&
          r(
            e,
            function (e) {
              t.cachedAjax(
                o,
                function (t) {
                  a(e, t)
                },
                n,
              )
            },
            i,
          )
      }

      function n() {
        m = !0
      }

      function a(t, r) {
        var o = t.getBoundingClientRect(),
          n = e.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        return o.bottom > 0 && o.top < n + r
      }

      function i() {
        if (m || c) {
          var t = !m
          m = !1
          for (var e = s.length; e > 0; --e) {
            var r = s.shift()
            ;(t && !r.prio) || !r() ? s.push(r) : r.prio && c--
          }
          0 == s.length && (clearInterval(f), (f = 0))
        }
      }
      var s = [],
        l = 250,
        p = 250,
        c = 0,
        f = 0,
        m = !1
      t.extend(t, {
        whenVisible: r,
        ajaxWhenVisible: o,
        scanVisible: n,
      }),
        t.bind(e, "scroll", function () {
          m = !0
        }),
        t.bind(e, "resize", function () {
          m = !0
        })
    })(n, window),
    (function (t, e) {
      function r(t) {
        if (i()) {
          if (s) {
            try {
              google.translate.SectionalElement().update()
            } catch (t) {}
          } else {
            (s = !0), a(t)
          }
        }
      }

      function o() {
        e.cookie.match(/googAllChecked/) || (e.cookie = "googAllChecked=true")
      }

      function n() {
        new google.translate.SectionalElement(
          {
            sectionalNodeClassName: "translate-section",
            controlNodeClassName: "translate-control",
            background: "#eeeeee",
          },
          "translation-by-google",
        )
      }

      function a(r) {
        (_gtse = n),
          t.element("div", "pull-right", {
            id: "translation-by-google",
            parent: e.getElementsByClassName("tf-tabs-bottom")[0],
          }),
          t.ajax("//translate.google.com/translate_a/element.js?cb=_gtse&ug=section&hl=" + r)
      }

      function i() {
        return e.getElementsByClassName
      }
      var s = !1
      t.extend(t, {
        googleTranslate: r,
        enableTranslations: o,
      })
    })(n, document),
    (function (t, e) {
      function r(t, e, r) {
        w(t, "request", n(e)),
          w(t, "display", a(e)),
          w(t, "click", i(e, "Click")),
          w(t, "hover", i(e, "Hover")),
          w(t, "view", s(e)),
          w(t, "submit", l(e, r)),
          w(t, "sort", p(e)),
          w(t, "score_dist", c(e))
      }

      function o(t, e) {
        x(t, "request", n(e)), x(t, "display", a(e))
      }

      function n(t) {
        return function () {
          A("analyticsTrackRequests") && f("Load " + t, "Request" + t)
        }
      }

      function a(t) {
        return function () {
          f("Load " + t, "Display" + t)
        }
      }

      function i(t, e) {
        return function (r, o) {
          var n = _[r]
          "object" == typeof n && (n = n[o]), n && f(t, e + n, undefined, !0)
        }
      }

      function s(t) {
        return function () {
          f(t, "View" + t)
        }
      }

      function l(t, e) {
        return function () {
          f(t, "Submit" + e)
        }
      }

      function p(t) {
        var e = {
          "": "Relevance",
          date: "MostRecent",
        }
        return function (r) {
          f(t, "Sort" + e[r])
        }
      }

      function c(t) {
        return function (e) {
          f(t, "FilterStars" + (e || "All"))
        }
      }

      function f(t, e, r, o) {
        m("TestFreaks " + t, e, r, o)
      }

      function m(t, e, r, o) {
        g(t, e, r, o), u(t, e, r, o)
      }

      function d(t, e) {
        u("TestFreaks Goals", t, e, !0)
      }

      function u(t, e, r, o) {
        var n = b()
        n && k(n, t, e, r, o)
      }

      function g(t, e, r, o) {
        var n = A("googleAnalyticsTrackLocal")
        n && k(n, t, e, r, o)
      }

      function k(t, e, r, o, n) {
        h(t)(
          t,
          "event",
          e,
          [e, r].join(" "),
          o,
          undefined,
          n
            ? undefined
            : {
                nonInteraction: !0,
              },
        )
      }

      function h(t) {
        return "dataLayer" == t
          ? v
          : (e.ga ||
              ((e.ga = function () {
                (e.ga.q = e.ga.q || []).push(arguments)
              }),
              (e.ga.l = 1 * new Date())),
            e.ga)
      }

      function v(t, r, o, n, a, i, s) {
        e.dataLayer &&
          e.dataLayer.push({
            event: "TestFreaks",
            eventCategory: o,
            eventAction: n,
            eventLabel: a,
            eventValue: i,
            nonInteraction: s && s.nonInteraction ? "True" : "False",
          })
      }

      function b() {
        if (!C) {
          var t = A("googleAnalyticsTrackingID")
          if (t) {
            var e = h()
            e("create", t, "auto", "testFreaksTracker"), (C = "testFreaksTracker.send"), e(C, "pageview")
          }
        }
        return C
      }
      var w = t.events.on,
        x = t.events.one,
        A = (t.forEach, t.options.get),
        y = t.options.set
      y("analyticsTrackRequests", !1),
        y("googleAnalyticsTrackingID", ""),
        y("googleAnalyticsTrackLocal", ""),
        (t.ga = {
          track: m,
          goal: d,
        }),
        r("qa", "QA", "QA"),
        r("reviews", "Reviews", "Review"),
        o("items", "Items")
      var _ = {
          badge: "Badge",
          seller: "SellerBadge",
          link: "ReviewLink",
          more: "PaginateNext",
          photo: "UserSubmittedPhoto",
          original: "ShowOriginal",
          translate: "Translate",
          tab: {
            pro: "ExpertReviewsTab",
            user: "UserReviewsTab",
            write: "WriteReview",
            qa: "QuestionsTab",
            ask: "AskQuestion",
          },
          vote: {
            up: "YesHelpfulVote",
            down: "NoHelpfulVote",
            bad: "ReportLink",
          },
          video: "Video",
        },
        C = !1
    })(n, window),
    (function (t, e, r) {
      function o(t, e) {
        function r() {
          (c.display = "block"), i()
        }

        function o() {
          (c.display = "none"), l(c)
        }

        function i() {
          var t = n(),
            e = a(),
            r = 1 - (2 * f.marginPercent) / 100,
            o = Math.min(Math.max(Math.min(r * t, f.maxWidth), f.minWidth), t),
            i = Math.min(Math.max(Math.min(r * e, f.maxHeight), f.minHeight), e)
          ;(c.width = Math.round(o) + "px"),
            (c.height = Math.round(i) + "px"),
            (c.top = Math.round(Math.max(0, (e - i) / 2)) + "px"),
            (c.left = Math.round(Math.max(0, (t - o) / 2)) + "px"),
            l(c),
            p && p(c)
        }

        function l(e) {
          var r = ""
          s(e, function (t, e) {
            r += t + ": " + e + " !important; "
          }),
            (t.style.cssText = r)
        }
        var p,
          c = {},
          f = {
            minWidth: 0,
            maxWidth: 1e3,
            minHeight: 0,
            maxHeight: 1e3,
            marginPercent: 10,
          }
        return (
          s(e, function (t, e) {
            f[t] = e
          }),
          {
            open: r,
            close: o,
            onResize: function (t) {
              p = t
            },
          }
        )
      }

      function n() {
        var t = e.innerWidth,
          o = i.clientWidth,
          n = r.body.clientWidth
        return Math.min(t, o, n) || t || o || n
      }

      function a() {
        var t = e.innerHeight,
          r = i.clientHeight
        return Math.min(t, r) || t || r
      }
      var i = r.documentElement,
        s = t.forEach
      t.popup = {
        init: o,
      }
    })(n, window, document),
    (function (t) {
      function e(e, r, o) {
        var n = "seller"
        o && (n += "_" + o), t.ajax(e, r, n)
      }

      function r(t, e) {
        var r = e || {},
          o = r.mode
        return o && "badge" != o ? ("content" == o || "sidebar" == o ? ((r.wide = "content" == o), a(t, r)) : void 0) : n(t, r)
      }

      function o(t, e) {
        return !e && t > 100 ? String(100 * Math.floor(t / 100)) + "+" : String(t)
      }

      function n(e, r) {
        var n,
          a,
          s,
          m,
          k = "testfreaks" + (t.nosvg ? " testfreaks-nosvg" : ""),
          h = d(
            "testfreaks-seller-badge",
            {},
            d(
              k + " tf-row",
              {},
              d("tf-score", {}, u(2 * e.avg_score, "md")),
              d("tf-count tf-link", {
                html: f("seller_badge", "%s customer reviews", o(e.review_count, r.exactCount)),
              }),
            ),
          ),
          v = d(
            "testfreaks-seller-reviews",
            {},
            d(
              k,
              {},
              (n = d(
                "tf-popup",
                {},
                (s = d(
                  "tf-popup-title",
                  {},
                  (a = d("tf-popup-close", {
                    html: "&times;",
                  })),
                  l(e, r),
                )),
                (m = p(e, r)),
                c(),
              )),
            ),
          ),
          b = i(n, s, m)
        return (
          g(h, "click", function (t) {
            b.open(t), r.onBadgeClick && r.onBadgeClick()
          }),
          g(a, "click", b.close),
          g(document, "click", function (t) {
            var e = t.target || t.srcElement
            h.contains(e) || n.contains(e) || b.close()
          }),
          d("testfreaks-seller", {}, h, v)
        )
      }

      function a(e, r) {
        return d(
          "testfreaks-seller-reviews",
          {},
          d("testfreaks" + (t.nosvg ? " testfreaks-nosvg" : "") + (r.wide ? "" : " testfreaks-xs"), {}, d("tf-sidebar", {}, l(e, r), p(e, r), c())),
        )
      }

      function i(e, r, o) {
        var n = t.popup.init(e, {
            minWidth: 500,
            maxWidth: 800,
            minHeight: 400,
            maxHeight: 1500,
          }),
          a = e.parentNode,
          i = a.className
        return (
          n.onResize(function (t) {
            var n = 100,
              s = e.offsetWidth < 550,
              l = s ? 20 : 1
            a.className = i + " testfreaks-" + (s ? "xs" : "sm")
            var p = r.getBoundingClientRect()
            p.top && p.bottom && (n = p.bottom - p.top)
            var c = Math.round(parseInt(t.height) - n) - l
            o.style.cssText = "height: " + c + "px !important;"
          }),
          n
        )
      }

      function s(t) {
        return t < 3 ? "" : t < 3.5 ? f("seller_good", "Good") : t < 4.5 ? f("seller_very_good", "Very good") : f("seller_excellent", "Excellent")
      }

      function l(t, e) {
        return d(
          "tf-header",
          {},
          d(
            "tf-score",
            {},
            u(2 * t.avg_score, "lg"),
            d("heading", {
              html: s(t.avg_score),
            }),
          ),
          d(
            "tf-based",
            {},
            d("tf-count", {
              html: f("customer_reviews", "%s customer reviews", "<span>" + o(t.review_count, e.exactCount) + "</span>"),
            }),
          ),
          d(
            "tf-powered",
            {},
            d("logo"),
            d("tf-rating", {
              html: parseFloat(t.avg_score).toFixed(1) + " / 5",
            }),
          ),
        )
      }

      function p(e, r) {
        var o = d("tf-reviews", {}),
          n = e.seller_reviews || []
        return (
          r.reviewLimit && (n = n.slice(0, r.reviewLimit)),
          t.forEach(n, function (e, r) {
            o.appendChild(t.render.sellerReview(r))
          }),
          o
        )
      }

      function c() {
        return d("tf-footer", {
          html: f("powered_by", "Powered by TestFreaks"),
        })
      }
      var f = t.translate,
        m = t.element,
        d = m.curry("div"),
        u = t.createStars,
        g = t.bind
      t.seller = {
        init: e,
        createBadge: r,
      }
    })(n),
    (function (t) {
      function e(e) {
        return r("testfreaks-videos", {}, r("testfreaks", {}, t.render.videos(e.videos)))
      }
      var r = t.element.curry("div")
      t.videos = {
        createBadge: e,
      }
    })(n),
    (function (t, e, r) {
      function o(e) {
        var r = t.api.ctx(e)
        return j(r, ot)
      }

      function n(e, r) {
        var o,
          n,
          a,
          d,
          k,
          h = S(e, r)
        if (
          (h.items && (F("request"), f(r)),
          h.seller &&
            (d = function (t) {
              p(t, r)
            }),
          h.badge &&
            (o = function (t, e) {
              l(t, e, r)
            }),
          h.reviews &&
            (n = function (t, e) {
              i(t, e, r)
            }),
          h.qa &&
            (a = function (t, e) {
              s(t, e, r)
            }),
          h.videos &&
            (k = function (t) {
              c(t, r)
            }),
          (o || n || a || k) && !r.loaded)
        ) {
          (r.loaded = !0), n && P("request"), a && Z("request")
          var v = {
            onBadge: o,
            onTabs: n,
            onQA: a,
            onVideos: k,
            onReviews: J,
            onQuestions: J,
            onBadgeClick: m,
            onDistClick: u,
            onBadgeTooltip: g,
          }
          j(v, et),
            r.findPid
              ? I(r.findPid, {}, function (e) {
                  t.init(y(e, tt), v)
                })
              : (r.pid || r.fid) && t.init(y(b(r.pid, r.fid), tt), v)
        }
        d && t.seller.init(_(rt), d, r.id)
      }

      function a(e, r) {
        "string" == typeof r &&
          (r = {
            reviews: r,
            qa: r,
          }),
          M(r, function (r, o) {
            t.css.attr(r + "-max-width-" + e, o)
          })
      }

      function i(e, r, o) {
        function n() {
          return (
            (nt = e),
            t.whenVisible(
              e,
              function () {
                t.selectTab("current")
              },
              250,
              !0,
            ),
            r.review_count &&
              t.whenVisible(
                e,
                function () {
                  P("view")
                },
                1,
                H("repeatedVisibilityChecks", "trackReviewsView"),
                2e3,
              ),
            e
          )
        }
        P("display"),
          C(o, "reviews", {
            elem: n,
            count: r.review_count,
          })
      }

      function s(e, r, o) {
        function n() {
          return (
            t.whenVisible(
              e,
              function () {
                t.selectTab("qa.current")
              },
              250,
              !0,
            ),
            r.your_question_count &&
              t.whenVisible(
                e,
                function () {
                  Z("view")
                },
                1,
                H("repeatedVisibilityChecks", "trackQAView"),
                2e3,
              ),
            e
          )
        }
        Z("display"),
          C(o, "qa", {
            elem: n,
            count: r.your_question_count,
          })
      }

      function l(e, r, o) {
        function n() {
          return t.createBadge(r, !1, {
            onBadgeClick: m,
            onDistClick: u,
          })
        }

        function a() {
          return e
        }
        C(o, "badge", {
          elem: a,
          create: n,
        })
      }

      function p(e, r) {
        function o(r) {
          var o = r || {
            mode: "badge",
          }
          return (o.onBadgeClick = d), t.seller.createBadge(e, o)
        }

        function n(t) {
          return {
            mode: t.getAttribute("data-mode"),
            reviewLimit: t.getAttribute("data-review-limit"),
            exactCount: t.getAttribute("data-exact-count") || H("exactSellerCount"),
          }
        }
        !e.review_count ||
          e.review_count < H("sellerThreshold") ||
          C(r, "seller", {
            elem: o,
            parse: n,
          })
      }

      function c(e, r) {
        function o(r) {
          return t.videos.createBadge(e, r)
        }
        C(r, "videos", {
          elem: o,
        })
      }

      function f(t) {
        A()
        var e = t.on.items
        if (e) {
          I(e, {
            create: w,
          })
        } else {
          h(T("item", t))
        }
      }

      function m() {
        if ((P("click", "badge"), nt)) {
          try {
            t.selectTab(this.getAttribute("selectTab"))
          } catch (e) {
            t.selectTab()
          }
          "function" == typeof G ? G(at) : k(nt, Y)
        }
      }

      function d() {
        P("click", "seller")
      }

      function u(e, r) {
        P("score_dist", e),
          t.selectTab(r, {
            score_dist: e,
          })
      }

      function g() {
        P("hover", "badge")
      }

      function k(t, o) {
        o ? ((o = (r.pageYOffset || e.documentElement.scrollTop) - o), r.scrollTo(0, t.getBoundingClientRect().top + o)) : t.scrollIntoView()
      }

      function h(t) {
        if (e.getElementsByClassName) {
          for (var r = e.getElementsByClassName(t), o = 0; o < r.length; ++o) {
            var n = r[o]
            if (!(n.className.indexOf("tf-item-tracked") > -1)) {
              n.className = n.className + " tf-item-tracked"
              var a = v(n.getAttribute("data-family-id")),
                i = v(n.getAttribute("data-product-id")),
                s = n.getAttribute("data-show-rating")
              ;(i || a) &&
                n.appendChild(
                  w(b(i, a), {
                    rating: s,
                  }),
                )
            }
          }
        }
      }

      function v(t) {
        try {
          if ("string" == typeof t && /^[\["{]/.test(t)) {
            return JSON.parse(t)
          }
        } catch (t) {}
        return t
      }

      function b(t, e) {
        return "demo" == t
          ? {
              demo_product: "",
              url_key: e,
            }
          : t && "object" == typeof t && t.constructor !== Array
            ? t
            : {
                key: t,
                url_key: e,
              }
      }

      function w(e, r) {
        var o = t.element(
            "div",
            {
              name: "testfreaks-items",
            },
            H("emptyItems") && t.createEmptyItem(),
          ),
          n = function (t, e) {
            x(t, e, r)
          }
        return (
          t.ajaxWhenVisible(
            o,
            y(
              e,
              {},
              {
                action: "score",
              },
            ),
            e,
            n,
          ),
          o
        )
      }

      function x(e, r, o) {
        var n = K
        o && null !== o.rating && (n = o.rating)
        var a = t.createItem(r, n, o)
        a && (F("display"), N(e, a), R(e.parentNode))
      }

      function A() {
        it || (t.css.inject(X), (it = !0))
      }

      function y(t, e, r) {
        var o = (r && r.action) || "reviews",
          n = H("apiHost", "js") + "/onpage/" + H("clientId", "reviews") + "/" + o + ".json?",
          a = t
        return (
          $
            ? (a = $(a))
            : "object" != typeof a &&
              (a = {
                key: a,
              }),
          a.key && a.key.constructor === Array && ((a.keys = a.key), (a.key = a.key[0])),
          a.url_key && a.url_key.constructor === Array && ((a.url_keys = a.url_key), (a.url_key = a.url_key[0])),
          j(a, e),
          n + L(a)
        )
      }

      function _(t) {
        var e = H("apiHost", "cr") + "/seller_reviews.json?",
          r = {
            client_id: H("clientId", "seller"),
          }
        return j(r, t), e + L(r)
      }

      function C(t, e, r) {
        A()
        var o = t.on[e]
        if (o) {
          I(o, r)
        } else {
          B(T(e, t), r)
        }
      }

      function T(t, e) {
        var r = "testfreaks-" + t,
          o = e.id
        return o && (r = r + "-" + o), r
      }

      function B(r, o) {
        t.wait(function () {
          var t = e.getElementById(r)
          if (t) {
            var n = o.parse && o.parse(t)
            return N(t, o.elem(n)), R(t), !0
          }
        })
      }

      function R(t) {
        if (t) {
          U(t, "testfreaks-loaded")
          var e = q(t, "testfreaks-section")
          e && U(e, "testfreaks-section-loaded")
        }
      }

      function q(t, e) {
        for (var r = t.parentNode, o = H("maxSectionLoadedDepth"); r && o > 0; ) {
          if (r.className && -1 != Q(r.className.split(" "), e)) {
            return r
          }
          (r = r.parentNode), --o
        }
      }

      function z() {
        t.ajax.reset(), t.wait.reset(), t.events.reset(), (this.loaded = !1), (this.pid = null), (this.fid = null), (nt = null), (G = null)
      }

      function S(t, e) {
        var r = {}
        return (
          t
            ? "string" == typeof t
              ? (r[t] = !0)
              : M(t, function (t, e) {
                  r[e] = !0
                })
            : M(e.on, function (t) {
                r[t] = !0
              }),
          r
        )
      }

      function L(t) {
        var e = []
        return (
          M(t, function (t, r) {
            null != r &&
              (r.constructor === Array
                ? M(r, function (r, o) {
                    e.push(t + "%5B%5D=" + encodeURIComponent(o))
                  })
                : e.push(t + "=" + encodeURIComponent(r)))
          }),
          e.sort().join("&")
        )
      }

      function N(t, e) {
        for (; t.firstChild; ) {
          t.removeChild(t.firstChild)
        }
        t.appendChild(e)
      }

      function E(t, e) {
        if (t.length > e.length) {
          if (!(at = at || H("findResource")())) {
            return
          }
          e.push(at)
        }
        return t.apply(null, e)
      }

      function I(e, r, o) {
        var n = V(r)
        t.wait(function () {
          var t = E(e, n.params())
          if (t !== undefined || !n.recur()) {
            return o && o(t), !0
          }
        })
      }

      function V(t) {
        var e = !0,
          r = 0,
          o = {
            recur: function () {
              e = !0
            },
          }
        return (
          M(t, function (t, n) {
            (r += 1),
              (o[t] = function () {
                return (e = !1), "function" == typeof n ? n.apply(null, arguments) : n
              })
          }),
          {
            recur: function () {
              return e
            },
            params: function () {
              return r > 0 ? [o] : []
            },
          }
        )
      }

      function F(t) {
        H("trackItems") && O(t)
      }
      var M = t.forEach,
        j = t.extend,
        D = t.options.set,
        H = t.options.get,
        P = t.events.tracker("reviews"),
        Z = t.events.tracker("qa"),
        O = t.events.tracker("items"),
        Q = t.indexOf,
        U = t.addClass
      D("apiHost", {
        js: "https://js.testfreaks.com",
        cr: "https://cr.testfreaks.com",
      }),
        D("clientId", "mwave.com.au"),
        D("emptyItems", !1),
        D("trackItems", !1),
        D("sellerThreshold", 50),
        D("findResource", function () {
          return r.jQuery
        }),
        D("maxSectionLoadedDepth", 7),
        D("repeatedVisibilityChecks", !1)
      var J,
        G,
        W = {
          setApiHost: function (t) {
            D("apiHost", t)
          },
          setFamilyId: function (t) {
            this.fid = t
          },
          setProductId: function (t) {
            this.pid = t
          },
          setMaxWidthSmall: function (t) {
            a("xs", t)
          },
          setMaxWidthMedium: function (t) {
            a("sm", t)
          },
          setTranslationLang: function (e, r) {
            var o = [e]
            r && r.except && (o = o.concat(r.except)),
              D("showTranslateUnlessLang", o),
              (J = function () {
                t.googleTranslate(e)
              })
          },
          setAggregateRatingSchema: function (t, e) {
            D("seoSchema", t), (et.seoBadge = e || !0)
          },
          setAnalytics: function (t) {
            D("googleAnalyticsTrackLocal", t)
          },
          onBadgeClick: function (t) {
            G = t
          },
          reset: z,
          load: function (t) {
            n(t, this)
          },
        }
      t.api.reg(W)
      var X,
        Y,
        K,
        $,
        tt = {},
        et = {},
        rt = {
          limit: 30,
        },
        ot = {
          run: t.api.run,
          setCss: function (t) {
            X = t
          },
          setCssAttr: t.css.attr,
          setCssLink: function (e, r, o, n) {
            var a = t.css.attr
            a("link-color", e), a("link-decor", r), a("link-hcolor", o || e), a("link-hdecor", n || r)
          },
          setOptions: function (t) {
            M(t, function (t, e) {
              et[t] = e
            })
          },
          setTranslations: function (e) {
            t.addTranslations(e)
          },
          setApiClientName: function (t) {
            D("clientId", t)
          },
          setPerPageLimit: function (t) {
            tt.limit = t
          },
          setItemLang: function (t) {
            tt.lang = t
          },
          setItemOrder: function (t) {
            tt.sort = t
          },
          setVideoLang: function (t) {
            tt.vlang = t
          },
          setVideoType: function (t) {
            tt.vtype = t
          },
          setSellerLimit: function (t) {
            rt.limit = t
          },
          setSellerThreshold: function (t) {
            D("sellerThreshold", t)
          },
          setEnableExactSellerCount: function (t) {
            D("exactSellerCount", t)
          },
          setScrollOffset: function (t) {
            Y = t
          },
          setSortThreshold: function (t) {
            D("showSortThreshold", t)
          },
          setEnableItemRatings: function (t) {
            K = t
          },
          setEnableBadgeRating: function (t) {
            D("showBadgeRating", t)
          },
          setEnableBadgeTooltip: function (t) {
            D("showBadgeTooltip", t)
          },
          setEnableWriteReview: function (t) {
            D("showWriteReview", t)
          },
          setEnableAskQuestion: function (t) {
            D("showAskQuestion", t)
          },
          setEnableVoteReport: function (t) {
            D("showVoteReport", t)
          },
          setEnableLogos: function (t) {
            D("showLogos", t)
          },
          setEnableLogoLinks: function (t) {
            D("showLogoLinks", t)
          },
          setEnableTextLinks: function (t) {
            D("showTextLinks", t)
          },
          setEnableAuthorNames: function (t) {
            D("showAuthorNames", t)
          },
          setEnableDomainNames: function (t) {
            D("showDomainNames", t)
          },
          setEnableSourceNames: function (t) {
            D("showSourceNames", t)
          },
          setEnableSourceNameLinks: function (t) {
            D("showSourceNameLinks", t)
          },
          setEnablePoweredBy: function (t) {
            D("showPoweredBy", t)
          },
          setEnableAutoLoadExternalReviews: function (t) {
            D("autoLoadExternalReviews", t)
          },
          setEnableEmptyItems: function (t) {
            D("emptyItems", t)
          },
          setEnableEmptyBadge: function (t) {
            D("emptyBadge", t)
          },
          setEnableRepeatedVisibilityChecks: function (t) {
            D("repeatedVisibilityChecks", t)
          },
          setEnableVerifiedBuyer: function (t) {
            D("showVerifiedBuyer", t)
          },
          setEnableVerifiedBuyerTooltip: function (t) {
            D("showVerifiedBuyerTooltip", t)
          },
          setEnableSingleDistribution: function (t) {
            D("singleDistribution", t)
          },
          setEnableDistributionFilter: function (t) {
            D("distributionFilter", t)
          },
          setEnableItemPreload: function (t) {
            D("preloadItems", t)
          },
          setLogoColorCount: function (t) {
            D("logoColorCount", t)
          },
          setLogoColorSaturation: function (t) {
            D("logoColorSaturation", t)
          },
          setLogoColorValue: function (t) {
            D("logoColorValue", t)
          },
          setUserTabFirst: function (t) {
            D("userTabFirst", t)
          },
          onBadge: function (t) {
            this.on.badge = t
          },
          onBadgeData: function (t) {
            D("onBadgeData", t)
          },
          onReviews: function (t) {
            this.on.reviews = t
          },
          onNoReviews: function (t) {
            et.onNoReviews = t
          },
          onQA: function (t) {
            this.on.qa = t
          },
          onNoQA: function (t) {
            et.onNoQA = t
          },
          onItems: function (t) {
            this.on.items = t
          },
          onSeller: function (t) {
            this.on.seller = t
          },
          onVideos: function (t) {
            this.on.videos = t
          },
          findProductId: function (t) {
            this.findPid = t
          },
          findResource: function (t) {
            D("findResource", t)
          },
          makeProductId: function (t) {
            $ = t
          },
          setDateFormat: function (t) {
            D("dateFormat", t)
          },
          setTextTransform: function (t) {
            D("textTransform", t)
          },
          setLogoColor: function (t) {
            D("logoColor", t)
          },
          newContext: function (t) {
            return o(t)
          },
        }
      j(ot, W), (t.widget = o())
      var nt,
        at,
        it = !1
    })(n, document, window)
  var a = n.widget

  var i = new RegExp(/-(\w\w\d+)($|[#?&\/])/),
    s = i.exec(document.location.href)
  s &&
    (a.setProductId({
      url_key: s[1],
    }),
    a.setEnableSourceNames(!1),
    a.setEnableAuthorNames(!0),
    a.onBadge(t),
    a.onReviews(e),
    a.onQA(r)),
    a.onItems(o),
    a.load()
  var l = !1
})()

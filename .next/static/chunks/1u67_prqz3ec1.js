(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  67660,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(43476),
      n = Object.defineProperty,
      i = (e, t) => n(e, "name", { value: t, configurable: !0 });
    function o(e, n = []) {
      let a = [];
      function l(n, o) {
        let s = t.createContext(o);
        s.displayName = n + "Context";
        let l = a.length;
        a = [...a, o];
        let c = i((n) => {
          let { scope: i, children: o, ...a } = n,
            c = i?.[e]?.[l] || s,
            u = t.useMemo(() => a, Object.values(a));
          return (0, r.jsx)(c.Provider, { value: u, children: o });
        }, "Provider");
        function u(r, i, a = {}) {
          let { optional: c = !1 } = a,
            d = i?.[e]?.[l] || s,
            f = t.useContext(d);
          if (f) return f;
          if (void 0 !== o) return o;
          if (!c) throw Error(`\`${r}\` must be used within \`${n}\``);
        }
        return ((c.displayName = n + "Provider"), i(u, "useContext"), [c, u]);
      }
      i(l, "createContext");
      let c = i(() => {
        let r = a.map((e) => t.createContext(e));
        return i(function (n) {
          let i = n?.[e] || r;
          return t.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: i } }), [n, i]);
        }, "useScope");
      }, "createScope");
      return ((c.scopeName = e), [l, s(c, ...n)]);
    }
    function s(...e) {
      let r = e[0];
      if (1 === e.length) return r;
      let n = i(() => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return i(function (e) {
          let i = n.reduce((t, { useScope: r, scopeName: n }) => {
            let i = r(e)[`__scope${n}`];
            return { ...t, ...i };
          }, {});
          return t.useMemo(() => ({ [`__scope${r.scopeName}`]: i }), [i]);
        }, "useComposedScopes");
      }, "createScope");
      return ((n.scopeName = r.scopeName), n);
    }
    (i(function (e, n) {
      let o = t.createContext(n);
      o.displayName = e + "Context";
      let s = i((e) => {
        let { children: n, ...i } = e,
          s = t.useMemo(() => i, Object.values(i));
        return (0, r.jsx)(o.Provider, { value: s, children: n });
      }, "Provider");
      function a(r, i = {}) {
        let { optional: s = !1 } = i,
          l = t.useContext(o);
        if (l) return l;
        if (void 0 !== n) return n;
        if (!s) throw Error(`\`${r}\` must be used within \`${e}\``);
      }
      return ((s.displayName = e + "Provider"), i(a, "useContext"), [s, a]);
    }, "createContext"),
      i(o, "createContextScope"),
      i(s, "composeContextScopes"));
    var a = Object.defineProperty,
      l = (e, t) => a(e, "name", { value: t, configurable: !0 });
    function c(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function u(...e) {
      return (t) => {
        let r = !1,
          n = e.map((e) => {
            let n = c(e, t);
            return (r || "function" != typeof n || (r = !0), n);
          });
        if (r)
          return () => {
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              "function" == typeof r ? r() : c(e[t], null);
            }
          };
      };
    }
    function d(...e) {
      return t.useCallback(u(...e), e);
    }
    (l(c, "setRef"), l(u, "composeRefs"), l(d, "useComposedRefs"));
    var f = Object.defineProperty,
      h = (e, t) => f(e, "name", { value: t, configurable: !0 });
    function p(e) {
      let r = t.forwardRef((r, n) => {
        let { children: i, ...o } = r,
          s = null,
          a = !1,
          l = [];
        (_(i) && "function" == typeof E && (i = E(i._payload)),
          t.Children.forEach(i, (e) => {
            if (b(e)) {
              a = !0;
              let t = "child" in e.props ? e.props.child : e.props.children;
              (_(t) && "function" == typeof E && (t = E(t._payload)),
                (s = g(e, t)),
                l.push(s?.props?.children));
            } else l.push(e);
          }),
          s
            ? (s = t.cloneElement(s, void 0, l))
            : !a && 1 === t.Children.count(i) && t.isValidElement(i) && (s = i));
        let c = s ? x(s) : void 0,
          u = d(n, c);
        if (!s) {
          if (i || 0 === i) throw Error(a ? k(e) : A(e));
          return i;
        }
        let f = v(o, s.props ?? {});
        return (s.type !== t.Fragment && (f.ref = n ? u : c), t.cloneElement(s, f));
      });
      return ((r.displayName = `${e}.Slot`), r);
    }
    h(p, "createSlot");
    var m = Symbol.for("radix.slottable");
    h(function (e) {
      let t = h((e) => ("child" in e ? e.children(e.child) : e.children), "Slottable");
      return ((t.displayName = `${e}.Slottable`), (t.__radixId = m), t);
    }, "createSlottable");
    var g = h((e, r) => {
      if ("child" in e.props) {
        let r = e.props.child;
        return t.isValidElement(r)
          ? t.cloneElement(r, void 0, e.props.children(r.props.children))
          : null;
      }
      return t.isValidElement(r) ? r : null;
    }, "getSlottableElementFromSlottable");
    function v(e, t) {
      let r = { ...t };
      for (let n in t) {
        let i = e[n],
          o = t[n];
        /^on[A-Z]/.test(n)
          ? i && o
            ? (r[n] = (...e) => {
                let t = o(...e);
                return (i(...e), t);
              })
            : i && (r[n] = i)
          : "style" === n
            ? (r[n] = { ...i, ...o })
            : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "));
      }
      return { ...e, ...r };
    }
    function x(e) {
      let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        r = t && "isReactWarning" in t && t.isReactWarning;
      return r
        ? e.ref
        : (r =
              (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning)
          ? e.props.ref
          : e.props.ref || e.ref;
    }
    function b(e) {
      return (
        t.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === m
      );
    }
    (h(v, "mergeProps"), h(x, "getElementRef"), h(b, "isSlottable"));
    var y = Symbol.for("react.lazy");
    function _(e) {
      return (
        null != e &&
        "object" == typeof e &&
        "$$typeof" in e &&
        e.$$typeof === y &&
        "_payload" in e &&
        w(e._payload)
      );
    }
    function w(e) {
      return "object" == typeof e && null !== e && "then" in e;
    }
    (h(_, "isLazyComponent"), h(w, "isPromiseLike"));
    var A = h(
        (e) =>
          `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        "createSlotError",
      ),
      k = h(
        (e) =>
          `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        "createSlottableError",
      ),
      E = t[" use ".trim().toString()],
      O = Object.defineProperty,
      C = (e, t) => O(e, "name", { value: t, configurable: !0 });
    function T(e) {
      let n = e + "CollectionProvider",
        [i, s] = o(n),
        [a, l] = i(n, { collectionRef: { current: null }, itemMap: new Map() }),
        c = C((e) => {
          let { scope: n, children: i } = e,
            o = t.useRef(null),
            s = t.useRef(new Map()).current;
          return (0, r.jsx)(a, { scope: n, itemMap: s, collectionRef: o, children: i });
        }, "CollectionProvider");
      c.displayName = n;
      let u = e + "CollectionSlot",
        f = p(u),
        h = t.forwardRef((e, t) => {
          let { scope: n, children: i } = e,
            o = d(t, l(u, n).collectionRef);
          return (0, r.jsx)(f, { ref: o, children: i });
        });
      h.displayName = u;
      let m = e + "CollectionItemSlot",
        g = "data-radix-collection-item",
        v = p(m),
        x = t.forwardRef((e, n) => {
          let { scope: i, children: o, ...s } = e,
            a = t.useRef(null),
            c = d(n, a),
            u = l(m, i);
          return (
            t.useEffect(() => (u.itemMap.set(a, { ref: a, ...s }), () => void u.itemMap.delete(a))),
            (0, r.jsx)(v, { ...{ [g]: "" }, ref: c, children: o })
          );
        });
      function b(r) {
        let n = l(e + "CollectionConsumer", r);
        return t.useCallback(() => {
          let e = n.collectionRef.current;
          if (!e) return [];
          let t = Array.from(e.querySelectorAll(`[${g}]`));
          return Array.from(n.itemMap.values()).sort(
            (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
          );
        }, [n.collectionRef, n.itemMap]);
      }
      return (
        (x.displayName = m),
        C(b, "useCollection"),
        [{ Provider: c, Slot: h, ItemSlot: x }, b, s]
      );
    }
    C(T, "createCollection");
    var R = new WeakMap(),
      z = class e extends Map {
        static {
          C(this, "OrderedDict");
        }
        #e;
        constructor(e) {
          (super(e), (this.#e = [...super.keys()]), R.set(this, !0));
        }
        set(e, t) {
          return (
            R.get(this) && (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
            super.set(e, t),
            this
          );
        }
        insert(e, t, r) {
          let n,
            i = this.has(t),
            o = this.#e.length,
            s = N(e),
            a = s >= 0 ? s : o + s,
            l = a < 0 || a >= o ? -1 : a;
          if (l === this.size || (i && l === this.size - 1) || -1 === l)
            return (this.set(t, r), this);
          let c = this.size + +!i;
          s < 0 && a++;
          let u = [...this.#e],
            d = !1;
          for (let e = a; e < c; e++)
            if (a === e) {
              let o = u[e];
              (u[e] === t && (o = u[e + 1]),
                i && this.delete(t),
                (n = this.get(o)),
                this.set(t, r));
            } else {
              d || u[e - 1] !== t || (d = !0);
              let r = u[d ? e : e - 1],
                i = n;
              ((n = this.get(r)), this.delete(r), this.set(r, i));
            }
          return this;
        }
        with(t, r, n) {
          let i = new e(this);
          return (i.insert(t, r, n), i);
        }
        before(e) {
          let t = this.#e.indexOf(e) - 1;
          if (!(t < 0)) return this.entryAt(t);
        }
        setBefore(e, t, r) {
          let n = this.#e.indexOf(e);
          return -1 === n ? this : this.insert(n, t, r);
        }
        after(e) {
          let t = this.#e.indexOf(e);
          if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t);
        }
        setAfter(e, t, r) {
          let n = this.#e.indexOf(e);
          return -1 === n ? this : this.insert(n + 1, t, r);
        }
        first() {
          return this.entryAt(0);
        }
        last() {
          return this.entryAt(-1);
        }
        clear() {
          return ((this.#e = []), super.clear());
        }
        delete(e) {
          let t = super.delete(e);
          return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
        }
        deleteAt(e) {
          let t = this.keyAt(e);
          return void 0 !== t && this.delete(t);
        }
        at(e) {
          let t = M(this.#e, e);
          if (void 0 !== t) return this.get(t);
        }
        entryAt(e) {
          let t = M(this.#e, e);
          if (void 0 !== t) return [t, this.get(t)];
        }
        indexOf(e) {
          return this.#e.indexOf(e);
        }
        keyAt(e) {
          return M(this.#e, e);
        }
        from(e, t) {
          let r = this.indexOf(e);
          if (-1 === r) return;
          let n = r + t;
          return (n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n));
        }
        keyFrom(e, t) {
          let r = this.indexOf(e);
          if (-1 === r) return;
          let n = r + t;
          return (n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n));
        }
        find(e, t) {
          let r = 0;
          for (let n of this) {
            if (Reflect.apply(e, t, [n, r, this])) return n;
            r++;
          }
        }
        findIndex(e, t) {
          let r = 0;
          for (let n of this) {
            if (Reflect.apply(e, t, [n, r, this])) return r;
            r++;
          }
          return -1;
        }
        filter(t, r) {
          let n = [],
            i = 0;
          for (let e of this) (Reflect.apply(t, r, [e, i, this]) && n.push(e), i++);
          return new e(n);
        }
        map(t, r) {
          let n = [],
            i = 0;
          for (let e of this) (n.push([e[0], Reflect.apply(t, r, [e, i, this])]), i++);
          return new e(n);
        }
        reduce(...e) {
          let [t, r] = e,
            n = 0,
            i = r ?? this.at(0);
          for (let r of this)
            ((i = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [i, r, n, this])), n++);
          return i;
        }
        reduceRight(...e) {
          let [t, r] = e,
            n = r ?? this.at(-1);
          for (let r = this.size - 1; r >= 0; r--) {
            let i = this.at(r);
            n = r === this.size - 1 && 1 === e.length ? i : Reflect.apply(t, this, [n, i, r, this]);
          }
          return n;
        }
        toSorted(t) {
          return new e([...this.entries()].sort(t));
        }
        toReversed() {
          let t = new e();
          for (let e = this.size - 1; e >= 0; e--) {
            let r = this.keyAt(e),
              n = this.get(r);
            t.set(r, n);
          }
          return t;
        }
        toSpliced(...t) {
          let r = [...this.entries()];
          return (r.splice(...t), new e(r));
        }
        slice(t, r) {
          let n = new e(),
            i = this.size - 1;
          if (void 0 === t) return n;
          (t < 0 && (t += this.size), void 0 !== r && r > 0 && (i = r - 1));
          for (let e = t; e <= i; e++) {
            let t = this.keyAt(e),
              r = this.get(t);
            n.set(t, r);
          }
          return n;
        }
        every(e, t) {
          let r = 0;
          for (let n of this) {
            if (!Reflect.apply(e, t, [n, r, this])) return !1;
            r++;
          }
          return !0;
        }
        some(e, t) {
          let r = 0;
          for (let n of this) {
            if (Reflect.apply(e, t, [n, r, this])) return !0;
            r++;
          }
          return !1;
        }
      };
    function M(e, t) {
      if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
      let r = j(e, t);
      return -1 === r ? void 0 : e[r];
    }
    function j(e, t) {
      let r = e.length,
        n = N(t),
        i = n >= 0 ? n : r + n;
      return i < 0 || i >= r ? -1 : i;
    }
    function N(e) {
      return e != e || 0 === e ? 0 : Math.trunc(e);
    }
    function S(e, t) {
      if (e === t) return !0;
      if ("object" != typeof e || "object" != typeof t || null == e || null == t) return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let n of r) if (!Object.prototype.hasOwnProperty.call(t, n) || e[n] !== t[n]) return !1;
      return !0;
    }
    function P(e, t) {
      return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
    }
    function D(e, t) {
      return e[1].element && t[1].element ? (P(e[1].element, t[1].element) ? -1 : 1) : 0;
    }
    function B(e) {
      return new MutationObserver((t) => {
        for (let r of t) if ("childList" === r.type) return void e();
      });
    }
    (C(M, "at"),
      C(j, "toSafeIndex"),
      C(N, "toSafeInteger"),
      C(function (e) {
        let n = e + "CollectionProvider",
          [i, s] = o(n),
          [a, l] = i(n, {
            collectionElement: null,
            collectionRef: { current: null },
            collectionRefObject: { current: null },
            itemMap: new z(),
            setItemMap: C(() => void 0, "setItemMap"),
          }),
          c = C(
            ({ state: e, ...t }) =>
              e ? (0, r.jsx)(f, { ...t, state: e }) : (0, r.jsx)(u, { ...t }),
            "CollectionProvider",
          );
        c.displayName = n;
        let u = C((e) => {
          let t = y();
          return (0, r.jsx)(f, { ...e, state: t });
        }, "CollectionInit");
        u.displayName = n + "Init";
        let f = C((e) => {
          let { scope: n, children: i, state: o } = e,
            s = t.useRef(null),
            [l, c] = t.useState(null),
            u = d(s, c),
            [f, h] = o;
          return (
            t.useEffect(() => {
              if (!l) return;
              let e = B(() => {});
              return (
                e.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  e.disconnect();
                }
              );
            }, [l]),
            (0, r.jsx)(a, {
              scope: n,
              itemMap: f,
              setItemMap: h,
              collectionRef: u,
              collectionRefObject: s,
              collectionElement: l,
              children: i,
            })
          );
        }, "CollectionProviderImpl");
        f.displayName = n + "Impl";
        let h = e + "CollectionSlot",
          m = p(h),
          g = t.forwardRef((e, t) => {
            let { scope: n, children: i } = e,
              o = d(t, l(h, n).collectionRef);
            return (0, r.jsx)(m, { ref: o, children: i });
          });
        g.displayName = h;
        let v = e + "CollectionItemSlot",
          x = p(v),
          b = t.forwardRef((e, n) => {
            let { scope: i, children: o, ...s } = e,
              a = t.useRef(null),
              [c, u] = t.useState(null),
              f = d(n, a, u),
              { setItemMap: h } = l(v, i),
              p = t.useRef(s);
            S(p.current, s) || (p.current = s);
            let m = p.current;
            return (
              t.useEffect(
                () => (
                  h((e) =>
                    c
                      ? e.has(c)
                        ? e.set(c, { ...m, element: c }).toSorted(D)
                        : (e.set(c, { ...m, element: c }), e.toSorted(D))
                      : e,
                  ),
                  () => {
                    h((e) => (c && e.has(c) ? (e.delete(c), new z(e)) : e));
                  }
                ),
                [c, m, h],
              ),
              (0, r.jsx)(x, { "data-radix-collection-item": "", ref: f, children: o })
            );
          });
        function y() {
          return t.useState(new z());
        }
        function _(t) {
          let { itemMap: r } = l(e + "CollectionConsumer", t);
          return r;
        }
        return (
          (b.displayName = v),
          C(y, "useInitCollection"),
          C(_, "useCollection"),
          [
            { Provider: c, Slot: g, ItemSlot: b },
            { createCollectionScope: s, useCollection: _, useInitCollection: y },
          ]
        );
      }, "createCollection"),
      C(S, "shallowEqual"),
      C(P, "isElementPreceding"),
      C(D, "sortByDocumentPosition"),
      C(B, "getChildListObserver"));
    var I = Object.defineProperty,
      Q = (e, t) => I(e, "name", { value: t, configurable: !0 }),
      F = !!("u" > typeof window && window.document && window.document.createElement);
    function L(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
      return Q(function (n) {
        if ((e?.(n), !1 === r || !n || !n.defaultPrevented)) return t?.(n);
      }, "handleEvent");
    }
    function Y(e) {
      if (!F) throw Error("Cannot access document outside of the DOM");
      return e?.ownerDocument ?? document;
    }
    function U(e) {
      return "IFRAME" === e.tagName;
    }
    (Q(L, "composeEventHandlers"),
      Q(function (e) {
        if (!F) throw Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window;
      }, "getOwnerWindow"),
      Q(Y, "getOwnerDocument"),
      Q(function e(t, r = !1) {
        let { activeElement: n } = Y(t);
        if (!n?.nodeName) return null;
        if (U(n) && n.contentDocument) return e(n.contentDocument.body, r);
        if (r) {
          let e = n.getAttribute("aria-activedescendant");
          if (e) {
            let t = Y(n).getElementById(e);
            if (t) return t;
          }
        }
        return n;
      }, "getActiveElement"),
      Q(U, "isFrame"));
    var W = globalThis?.document ? t.useLayoutEffect : () => {},
      K = Object.defineProperty,
      H = t[" useEffectEvent ".trim().toString()],
      q = t[" useInsertionEffect ".trim().toString()];
    function V(e) {
      if ("function" == typeof H) return H(e);
      let r = t.useRef(() => {
        throw Error("Cannot call an event handler while rendering.");
      });
      return (
        "function" == typeof q
          ? q(() => {
              r.current = e;
            })
          : W(() => {
              r.current = e;
            }),
        t.useMemo(
          () =>
            (...e) =>
              r.current?.(...e),
          [],
        )
      );
    }
    K(V, "name", { value: "useEffectEvent", configurable: !0 });
    var X = Object.defineProperty,
      G = (e, t) => X(e, "name", { value: t, configurable: !0 }),
      J = t[" useInsertionEffect ".trim().toString()] || W;
    function Z({ prop: e, defaultProp: r, onChange: n = G(() => {}, "onChange"), caller: i }) {
      let [o, s, a] = $({ defaultProp: r, onChange: n }),
        l = void 0 !== e,
        c = l ? e : o;
      return [
        c,
        t.useCallback(
          (t) => {
            if (l) {
              let r = ee(t) ? t(e) : t;
              r !== e && a.current?.(r);
            } else s(t);
          },
          [l, e, s, a],
        ),
      ];
    }
    function $({ defaultProp: e, onChange: r }) {
      let [n, i] = t.useState(e),
        o = t.useRef(n),
        s = t.useRef(r);
      return (
        J(() => {
          s.current = r;
        }, [r]),
        t.useEffect(() => {
          o.current !== n && (s.current?.(n), (o.current = n));
        }, [n, o]),
        [n, i, s]
      );
    }
    function ee(e) {
      return "function" == typeof e;
    }
    (G(Z, "useControllableState"), G($, "useUncontrolledState"), G(ee, "isFunction"));
    var et = Symbol("RADIX:SYNC_STATE");
    G(function (e, r, n, i) {
      let { prop: o, defaultProp: s, onChange: a, caller: l } = r,
        c = void 0 !== o,
        u = V(a),
        d = [{ ...n, state: s }];
      i && d.push(i);
      let [f, h] = t.useReducer(
          (t, r) => {
            if (r.type === et) return { ...t, state: r.state };
            let n = e(t, r);
            return (c && !Object.is(n.state, t.state) && u(n.state), n);
          },
          ...d,
        ),
        p = f.state,
        m = t.useRef(p);
      t.useEffect(() => {
        m.current !== p && ((m.current = p), c || u(p));
      }, [p, m, c]);
      let g = t.useMemo(() => (void 0 !== o ? { ...f, state: o } : f), [f, o]);
      return (
        t.useEffect(() => {
          c && !Object.is(o, f.state) && h({ type: et, state: o });
        }, [o, f.state, c]),
        [g, h]
      );
    }, "useControllableStateReducer");
    var er = e.i(74080),
      en = Object.defineProperty,
      ei = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, n) => {
        let i = p(`Primitive.${n}`),
          o = t.forwardRef((e, t) => {
            let { asChild: o, ...s } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, r.jsx)(o ? i : n, { ...s, ref: t })
            );
          });
        return ((o.displayName = `Primitive.${n}`), { ...e, [n]: o });
      }, {});
    en(
      function (e, t) {
        e && er.flushSync(() => e.dispatchEvent(t));
      },
      "name",
      { value: "dispatchDiscreteCustomEvent", configurable: !0 },
    );
    var eo = Object.defineProperty,
      es = (e, t) => eo(e, "name", { value: t, configurable: !0 });
    function ea(e, r) {
      return t.useReducer((e, t) => r[e][t] ?? e, e);
    }
    es(ea, "useStateMachine");
    var el = es((e) => {
      let { present: r, children: n } = e,
        i = ec(r),
        o = "function" == typeof n ? n({ present: i.isPresent }) : t.Children.only(n),
        s = ed(i.ref, eh(o));
      return "function" == typeof n || i.isPresent ? t.cloneElement(o, { ref: s }) : null;
    }, "Presence");
    function ec(e) {
      let [r, n] = t.useState(),
        i = t.useRef(null),
        o = t.useRef(e),
        s = t.useRef("none"),
        a = t.useRef(void 0),
        [l, c] = ea(e ? "mounted" : "unmounted", {
          mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
          unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
          unmounted: { MOUNT: "mounted" },
        });
      return (
        t.useEffect(() => {
          "mounted" === l
            ? ((s.current = a.current ?? ef(i.current)), (a.current = void 0))
            : (s.current = "none");
        }, [l]),
        W(() => {
          let t = i.current,
            r = o.current;
          if (r !== e) {
            let n = s.current,
              i = ef(t);
            (e
              ? ((a.current = i), c("MOUNT"))
              : "none" === i || t?.display === "none"
                ? c("UNMOUNT")
                : r && n !== i
                  ? c("ANIMATION_OUT")
                  : c("UNMOUNT"),
              (o.current = e));
          }
        }, [e, c]),
        W(() => {
          if (r) {
            let e,
              t = r.ownerDocument.defaultView ?? window,
              n = es((n) => {
                let s = ef(i.current).includes(CSS.escape(n.animationName));
                if (n.target === r && s && (c("ANIMATION_END"), !o.current)) {
                  let n = r.style.animationFillMode;
                  ((r.style.animationFillMode = "forwards"),
                    (e = t.setTimeout(() => {
                      "forwards" === r.style.animationFillMode && (r.style.animationFillMode = n);
                    })));
                }
              }, "handleAnimationEnd"),
              a = es((e) => {
                e.target === r && (s.current = ef(i.current));
              }, "handleAnimationStart");
            return (
              r.addEventListener("animationstart", a),
              r.addEventListener("animationcancel", n),
              r.addEventListener("animationend", n),
              () => {
                (t.clearTimeout(e),
                  r.removeEventListener("animationstart", a),
                  r.removeEventListener("animationcancel", n),
                  r.removeEventListener("animationend", n));
              }
            );
          }
          c("ANIMATION_END");
        }, [r, c]),
        {
          isPresent: ["mounted", "unmountSuspended"].includes(l),
          ref: t.useCallback((e) => {
            if (e) {
              let t = getComputedStyle(e);
              ((i.current = t), (a.current = ef(t)));
            } else i.current = null;
            n(e);
          }, []),
        }
      );
    }
    function eu(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function ed(...e) {
      let r = t.useRef(e);
      return (
        (r.current = e),
        t.useCallback((e) => {
          let t = r.current,
            n = !1,
            i = t.map((t) => {
              let r = eu(t, e);
              return (n || "function" != typeof r || (n = !0), r);
            });
          if (n)
            return () => {
              for (let e = 0; e < i.length; e++) {
                let r = i[e];
                "function" == typeof r ? r() : eu(t[e], null);
              }
            };
        }, [])
      );
    }
    function ef(e) {
      return e?.animationName || "none";
    }
    function eh(e) {
      let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        r = t && "isReactWarning" in t && t.isReactWarning;
      return r
        ? e.ref
        : (r =
              (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning)
          ? e.props.ref
          : e.props.ref || e.ref;
    }
    (es(ec, "usePresence"),
      es(eu, "setRef"),
      es(ed, "useStableComposedRefs"),
      es(ef, "getAnimationName"),
      es(eh, "getElementRef"));
    var ep = Object.defineProperty,
      em = t[" useId ".trim().toString()] || (() => void 0),
      eg = 0;
    function ev(e) {
      let [r, n] = t.useState(em());
      return (
        W(() => {
          e || n((e) => e ?? String(eg++));
        }, [e]),
        e || (r ? `radix-${r}` : "")
      );
    }
    ep(ev, "name", { value: "useId", configurable: !0 });
    var ex = Object.defineProperty,
      eb = (e, t) => ex(e, "name", { value: t, configurable: !0 }),
      ey = "Collapsible",
      [e_, ew] = o(ey),
      [eA, ek] = e_(ey),
      eE = t.forwardRef(
        eb(function (e, n) {
          let {
              __scopeCollapsible: i,
              open: o,
              defaultOpen: s,
              disabled: a,
              onOpenChange: l,
              ...c
            } = e,
            [u, d] = Z({ prop: o, defaultProp: s ?? !1, onChange: l, caller: ey });
          return (0, r.jsx)(eA, {
            scope: i,
            disabled: a,
            contentId: ev(),
            open: u,
            onOpenToggle: t.useCallback(() => d((e) => !e), [d]),
            children: (0, r.jsx)(ei.div, {
              "data-state": ez(u),
              "data-disabled": a ? "" : void 0,
              ...c,
              ref: n,
            }),
          });
        }, "Collapsible"),
      ),
      eO = t.forwardRef(
        eb(function (e, t) {
          let { __scopeCollapsible: n, ...i } = e,
            o = ek("CollapsibleTrigger", n);
          return (0, r.jsx)(ei.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": ez(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...i,
            ref: t,
            onClick: L(e.onClick, o.onOpenToggle),
          });
        }, "CollapsibleTrigger"),
      ),
      eC = "CollapsibleContent",
      eT = t.forwardRef(
        eb(function (e, t) {
          let { forceMount: n, ...i } = e,
            o = ek(eC, e.__scopeCollapsible);
          return (0, r.jsx)(el, {
            present: n || o.open,
            children: ({ present: e }) => (0, r.jsx)(eR, { ...i, ref: t, present: e }),
          });
        }, "CollapsibleContent"),
      ),
      eR = t.forwardRef(
        eb(function (e, n) {
          let { __scopeCollapsible: i, present: o, children: s, ...a } = e,
            l = ek(eC, i),
            [c, u] = t.useState(o),
            f = t.useRef(null),
            h = d(n, f),
            p = t.useRef(0),
            m = p.current,
            g = t.useRef(0),
            v = g.current,
            x = l.open || c,
            b = t.useRef(x),
            y = t.useRef(void 0);
          return (
            t.useEffect(() => {
              let e = requestAnimationFrame(() => (b.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            W(() => {
              let e = f.current;
              if (e) {
                ((y.current = y.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none"));
                let t = e.getBoundingClientRect();
                ((p.current = t.height),
                  (g.current = t.width),
                  b.current ||
                    ((e.style.transitionDuration = y.current.transitionDuration),
                    (e.style.animationName = y.current.animationName)),
                  u(o));
              }
            }, [l.open, o]),
            (0, r.jsx)(ei.div, {
              "data-state": ez(l.open),
              "data-disabled": l.disabled ? "" : void 0,
              id: l.contentId,
              hidden: !x,
              ...a,
              ref: h,
              style: {
                "--radix-collapsible-content-height": m ? `${m}px` : void 0,
                "--radix-collapsible-content-width": v ? `${v}px` : void 0,
                ...e.style,
              },
              children: x && s,
            })
          );
        }, "CollapsibleContentImpl"),
      );
    function ez(e) {
      return e ? "open" : "closed";
    }
    eb(ez, "getState");
    var eM = Object.defineProperty,
      ej = t.createContext(void 0);
    function eN(e) {
      let r = t.useContext(ej);
      return e || r || "ltr";
    }
    eM(eN, "name", { value: "useDirection", configurable: !0 });
    var eS = Object.defineProperty,
      eP = (e, t) => eS(e, "name", { value: t, configurable: !0 }),
      eD = "Accordion",
      eB = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
      [eI, eQ, eF] = T(eD),
      [eL, eY] = o(eD, [eF, ew]),
      eU = ew(),
      eW = t.forwardRef(
        eP(function (e, t) {
          let { type: n, ...i } = e;
          return (0, r.jsx)(eI.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, r.jsx)(eG, { ...i, ref: t })
                : (0, r.jsx)(eX, { ...i, ref: t }),
          });
        }, "Accordion"),
      ),
      [eK, eH] = eL(eD),
      [eq, eV] = eL(eD, { collapsible: !1 }),
      eX = t.forwardRef(
        eP(function (e, n) {
          let {
              value: i,
              defaultValue: o,
              onValueChange: s = eP(() => {}, "onValueChange"),
              collapsible: a = !1,
              ...l
            } = e,
            [c, u] = Z({ prop: i, defaultProp: o ?? "", onChange: s, caller: eD });
          return (0, r.jsx)(eK, {
            scope: e.__scopeAccordion,
            value: t.useMemo(() => (c ? [c] : []), [c]),
            onItemOpen: u,
            onItemClose: t.useCallback(() => a && u(""), [a, u]),
            children: (0, r.jsx)(eq, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, r.jsx)(e$, { ...l, ref: n }),
            }),
          });
        }, "AccordionImplSingle"),
      ),
      eG = t.forwardRef(
        eP(function (e, n) {
          let {
              value: i,
              defaultValue: o,
              onValueChange: s = eP(() => {}, "onValueChange"),
              ...a
            } = e,
            [l, c] = Z({ prop: i, defaultProp: o ?? [], onChange: s, caller: eD }),
            u = t.useCallback((e) => c((t = []) => [...t, e]), [c]),
            d = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
          return (0, r.jsx)(eK, {
            scope: e.__scopeAccordion,
            value: l,
            onItemOpen: u,
            onItemClose: d,
            children: (0, r.jsx)(eq, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, r.jsx)(e$, { ...a, ref: n }),
            }),
          });
        }, "AccordionImplMultiple"),
      ),
      [eJ, eZ] = eL(eD),
      e$ = t.forwardRef(
        eP(function (e, n) {
          let { __scopeAccordion: i, disabled: o, dir: s, orientation: a = "vertical", ...l } = e,
            c = d(t.useRef(null), n),
            u = eQ(i),
            f = "ltr" === eN(s),
            h = L(e.onKeyDown, (e) => {
              if (!eB.includes(e.key)) return;
              let t = e.target,
                r = u().filter((e) => !e.ref.current?.disabled),
                n = r.findIndex((e) => e.ref.current === t),
                i = r.length;
              if (-1 === n) return;
              e.preventDefault();
              let o = n,
                s = i - 1,
                l = eP(() => {
                  (o = n + 1) > s && (o = 0);
                }, "moveNext"),
                c = eP(() => {
                  (o = n - 1) < 0 && (o = s);
                }, "movePrev");
              switch (e.key) {
                case "Home":
                  o = 0;
                  break;
                case "End":
                  o = s;
                  break;
                case "ArrowRight":
                  "horizontal" === a && (f ? l() : c());
                  break;
                case "ArrowDown":
                  "vertical" === a && l();
                  break;
                case "ArrowLeft":
                  "horizontal" === a && (f ? c() : l());
                  break;
                case "ArrowUp":
                  "vertical" === a && c();
              }
              let d = o % i;
              r[d].ref.current?.focus();
            });
          return (0, r.jsx)(eJ, {
            scope: i,
            disabled: o,
            direction: s,
            orientation: a,
            children: (0, r.jsx)(eI.Slot, {
              scope: i,
              children: (0, r.jsx)(ei.div, {
                ...l,
                "data-orientation": a,
                ref: c,
                onKeyDown: o ? void 0 : h,
              }),
            }),
          });
        }, "AccordionImpl"),
      ),
      e0 = "AccordionItem",
      [e1, e2] = eL(e0),
      e5 = t.forwardRef(
        eP(function (e, t) {
          let { __scopeAccordion: n, value: i, ...o } = e,
            s = eZ(e0, n),
            a = eH(e0, n),
            l = eU(n),
            c = ev(),
            u = (i && a.value.includes(i)) || !1,
            d = s.disabled || e.disabled;
          return (0, r.jsx)(e1, {
            scope: n,
            open: u,
            disabled: d,
            triggerId: c,
            children: (0, r.jsx)(eE, {
              "data-orientation": s.orientation,
              "data-state": e8(u),
              ...l,
              ...o,
              ref: t,
              disabled: d,
              open: u,
              onOpenChange: (e) => {
                e ? a.onItemOpen(i) : a.onItemClose(i);
              },
            }),
          });
        }, "AccordionItem"),
      ),
      e4 = t.forwardRef(
        eP(function (e, t) {
          let { __scopeAccordion: n, ...i } = e,
            o = eZ(eD, n),
            s = e2("AccordionHeader", n);
          return (0, r.jsx)(ei.h3, {
            "data-orientation": o.orientation,
            "data-state": e8(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...i,
            ref: t,
          });
        }, "AccordionHeader"),
      ),
      e3 = "AccordionTrigger",
      e7 = t.forwardRef(
        eP(function (e, t) {
          let { __scopeAccordion: n, ...i } = e,
            o = eZ(eD, n),
            s = e2(e3, n),
            a = eV(e3, n),
            l = eU(n);
          return (0, r.jsx)(eI.ItemSlot, {
            scope: n,
            children: (0, r.jsx)(eO, {
              "aria-disabled": (s.open && !a.collapsible) || void 0,
              "data-orientation": o.orientation,
              id: s.triggerId,
              ...l,
              ...i,
              ref: t,
            }),
          });
        }, "AccordionTrigger"),
      ),
      e6 = t.forwardRef(
        eP(function (e, t) {
          let { __scopeAccordion: n, ...i } = e,
            o = eZ(eD, n),
            s = e2("AccordionContent", n),
            a = eU(n);
          return (0, r.jsx)(eT, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": o.orientation,
            ...a,
            ...i,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        }, "AccordionContent"),
      );
    function e8(e) {
      return e ? "open" : "closed";
    }
    (eP(e8, "getState"),
      e.s(
        [
          "Accordion",
          0,
          eW,
          "AccordionContent",
          0,
          e6,
          "AccordionHeader",
          0,
          e4,
          "AccordionItem",
          0,
          e5,
          "AccordionTrigger",
          0,
          e7,
          "Content",
          0,
          e6,
          "Header",
          0,
          e4,
          "Item",
          0,
          e5,
          "Root",
          0,
          eW,
          "Trigger",
          0,
          e7,
          "createAccordionScope",
          0,
          eY,
        ],
        67660,
      ));
  },
  89970,
  83495,
  (e) => {
    "use strict";
    function t(e) {
      if (void 0 === e)
        throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function r(e, t) {
      ((e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t));
    }
    var n,
      i,
      o,
      s,
      a,
      l,
      c,
      u,
      d,
      f,
      h,
      p,
      m,
      g,
      v,
      x,
      b,
      y,
      _,
      w,
      A,
      k,
      E,
      O,
      C,
      T,
      R = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
      z = { duration: 0.5, overwrite: !1, delay: 0 },
      M = 2 * Math.PI,
      j = M / 4,
      N = 0,
      S = Math.sqrt,
      P = Math.cos,
      D = Math.sin,
      B = function (e) {
        return "string" == typeof e;
      },
      I = function (e) {
        return "function" == typeof e;
      },
      Q = function (e) {
        return "number" == typeof e;
      },
      F = function (e) {
        return void 0 === e;
      },
      L = function (e) {
        return "object" == typeof e;
      },
      Y = function (e) {
        return !1 !== e;
      },
      U = function () {
        return "u" > typeof window;
      },
      W = function (e) {
        return I(e) || B(e);
      },
      K = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
      H = Array.isArray,
      q = /random\([^)]+\)/g,
      V = /,\s*/g,
      X = /(?:-?\.?\d|\.)+/gi,
      G = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      $ = /[+-]=-?[.\d]+/,
      ee = /[^,'"\[\]\s]+/gi,
      et = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      er = {},
      en = {},
      ei = function (e) {
        return (en = eS(e, er)) && rE;
      },
      eo = function (e, t) {
        return console.warn(
          "Invalid property",
          e,
          "set to",
          t,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      es = function (e, t) {
        return !t && console.warn(e);
      },
      ea = function (e, t) {
        return (e && (er[e] = t) && en && (en[e] = t)) || er;
      },
      el = function () {
        return 0;
      },
      ec = { suppressEvents: !0, isStart: !0, kill: !1 },
      eu = { suppressEvents: !0, kill: !1 },
      ed = { suppressEvents: !0 },
      ef = {},
      eh = [],
      ep = {},
      em = {},
      eg = {},
      ev = 30,
      ex = [],
      eb = "",
      ey = function (e) {
        var t,
          r,
          n = e[0];
        if ((L(n) || I(n) || (e = [e]), !(t = (n._gsap || {}).harness))) {
          for (r = ex.length; r-- && !ex[r].targetTest(n););
          t = ex[r];
        }
        for (r = e.length; r--;)
          (e[r] && (e[r]._gsap || (e[r]._gsap = new tL(e[r], t)))) || e.splice(r, 1);
        return e;
      },
      e_ = function (e) {
        return e._gsap || ey(ti(e))[0]._gsap;
      },
      ew = function (e, t, r) {
        return (r = e[t]) && I(r) ? e[t]() : (F(r) && e.getAttribute && e.getAttribute(t)) || r;
      },
      eA = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
      },
      ek = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      eE = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      },
      eO = function (e, t) {
        var r = t.charAt(0),
          n = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
        );
      },
      eC = function (e, t) {
        for (var r = t.length, n = 0; 0 > e.indexOf(t[n]) && ++n < r;);
        return n < r;
      },
      eT = function () {
        var e,
          t,
          r = eh.length,
          n = eh.slice(0);
        for (ep = {}, eh.length = 0, e = 0; e < r; e++)
          (t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      eR = function (e) {
        return !!(e._initted || e._startAt || e.add);
      },
      ez = function (e, t, r, n) {
        (eh.length && !b && eT(),
          e.render(t, r, n || !!(b && t < 0 && eR(e))),
          eh.length && !b && eT());
      },
      eM = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(ee).length < 2 ? t : B(e) ? e.trim() : e;
      },
      ej = function (e) {
        return e;
      },
      eN = function (e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e;
      },
      eS = function (e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      },
      eP = function e(t, r) {
        for (var n in r)
          "__proto__" !== n &&
            "constructor" !== n &&
            "prototype" !== n &&
            (t[n] = L(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
        return t;
      },
      eD = function (e, t) {
        var r,
          n = {};
        for (r in e) r in t || (n[r] = e[r]);
        return n;
      },
      eB = function (e) {
        var t,
          r = e.parent || _,
          n = e.keyframes
            ? ((t = H(e.keyframes)),
              function (e, r) {
                for (var n in r) n in e || ("duration" === n && t) || "ease" === n || (e[n] = r[n]);
              })
            : eN;
        if (Y(e.inherit)) for (; r;) (n(e, r.vars.defaults), (r = r.parent || r._dp));
        return e;
      },
      eI = function (e, t) {
        for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
        return r < 0;
      },
      eQ = function (e, t, r, n, i) {
        (void 0 === r && (r = "_first"), void 0 === n && (n = "_last"));
        var o,
          s = e[n];
        if (i) for (o = t[i]; s && s[i] > o;) s = s._prev;
        return (
          s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[r]), (e[r] = t)),
          t._next ? (t._next._prev = t) : (e[n] = t),
          (t._prev = s),
          (t.parent = t._dp = e),
          t
        );
      },
      eF = function (e, t, r, n) {
        (void 0 === r && (r = "_first"), void 0 === n && (n = "_last"));
        var i = t._prev,
          o = t._next;
        (i ? (i._next = o) : e[r] === t && (e[r] = o),
          o ? (o._prev = i) : e[n] === t && (e[n] = i),
          (t._next = t._prev = t.parent = null));
      },
      eL = function (e, t) {
        (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
          (e._act = 0));
      },
      eY = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var r = e; r;) ((r._dirty = 1), (r = r.parent));
        return e;
      },
      eU = function (e) {
        for (var t = e.parent; t && t.parent;) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
        return e;
      },
      eW = function (e, t, r, n) {
        return (
          e._startAt &&
          (b
            ? e._startAt.revert(eu)
            : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, n))
        );
      },
      eK = function (e) {
        return e._repeat ? eH(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      eH = function (e, t) {
        var r = Math.floor((e = eE(e / t)));
        return e && r === e ? r - 1 : r;
      },
      eq = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
      },
      eV = function (e) {
        return (e._end = eE(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)));
      },
      eX = function (e, t) {
        var r = e._dp;
        return (
          r &&
            r.smoothChildTiming &&
            e._ts &&
            ((e._start = eE(
              r._time -
                (e._ts > 0 ? t / e._ts : -(((e._dirty ? e.totalDuration() : e._tDur) - t) / e._ts)),
            )),
            eV(e),
            r._dirty || eY(r, e)),
          e
        );
      },
      eG = function (e, t) {
        var r;
        if (
          ((t._time || (!t._dur && t._initted) || (t._start < e._time && (t._dur || !t.add))) &&
            ((r = eq(e.rawTime(), t)),
            (!t._dur || te(0, t.totalDuration(), r) - t._tTime > 1e-8) && t.render(r, !0)),
          eY(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (r = e; r._dp;) (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
          e._zTime = -1e-8;
        }
      },
      eJ = function (e, t, r, n) {
        return (
          t.parent && eL(t),
          (t._start = eE((Q(r) ? r : r || e !== _ ? e6(e, r, t) : e._time) + t._delay)),
          (t._end = eE(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
          eQ(e, t, "_first", "_last", e._sort ? "_start" : 0),
          e1(t) || (e._recent = t),
          n || eG(e, t),
          e._ts < 0 && eX(e, e._tTime),
          e
        );
      },
      eZ = function (e, t) {
        return (er.ScrollTrigger || eo("scrollTrigger", t)) && er.ScrollTrigger.create(t, e);
      },
      e$ = function (e, t, r, n, i) {
        return (t0(e, t, i), e._initted)
          ? !r &&
            e._pt &&
            !b &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            O !== tC.frame
            ? (eh.push(e), (e._lazy = [i, n]), 1)
            : void 0
          : 1;
      },
      e0 = function e(t) {
        var r = t.parent;
        return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || e(r));
      },
      e1 = function (e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t;
      },
      e2 = function (e, t, r, n) {
        var i,
          o,
          s,
          a = e.ratio,
          l =
            t < 0 ||
            (!t &&
              ((!e._start && e0(e) && !(!e._initted && e1(e))) ||
                ((e._ts < 0 || e._dp._ts < 0) && !e1(e))))
              ? 0
              : 1,
          c = e._rDelay,
          u = 0;
        if (
          (c &&
            e._repeat &&
            ((o = eH((u = te(0, e._tDur, t)), c)),
            e._yoyo && 1 & o && (l = 1 - l),
            o !== eH(e._tTime, c) &&
              ((a = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
          l !== a || b || n || 1e-8 === e._zTime || (!t && e._zTime))
        ) {
          if (!e._initted && e$(e, t, n, r, u)) return;
          for (
            s = e._zTime,
              e._zTime = t || 1e-8 * !!r,
              r || (r = t && !s),
              e.ratio = l,
              e._from && (l = 1 - l),
              e._time = 0,
              e._tTime = u,
              i = e._pt;
            i;
          )
            (i.r(l, i.d), (i = i._next));
          (t < 0 && eW(e, t, r, !0),
            e._onUpdate && !r && tm(e, "onUpdate"),
            u && e._repeat && !r && e.parent && tm(e, "onRepeat"),
            (t >= e._tDur || t < 0) &&
              e.ratio === l &&
              (l && eL(e, 1),
              r || b || (tm(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom())));
        } else e._zTime || (e._zTime = t);
      },
      e5 = function (e, t, r) {
        var n;
        if (r > t)
          for (n = e._first; n && n._start <= r;) {
            if ("isPause" === n.data && n._start > t) return n;
            n = n._next;
          }
        else
          for (n = e._last; n && n._start >= r;) {
            if ("isPause" === n.data && n._start < t) return n;
            n = n._prev;
          }
      },
      e4 = function (e, t, r, n) {
        var i = e._repeat,
          o = eE(t) || 0,
          s = e._tTime / e._tDur;
        return (
          s && !n && (e._time *= o / e._dur),
          (e._dur = o),
          (e._tDur = i ? (i < 0 ? 1e10 : eE(o * (i + 1) + e._rDelay * i)) : o),
          s > 0 && !n && eX(e, (e._tTime = e._tDur * s)),
          e.parent && eV(e),
          r || eY(e.parent, e),
          e
        );
      },
      e3 = function (e) {
        return e instanceof tU ? eY(e) : e4(e, e._dur);
      },
      e7 = { _start: 0, endTime: el, totalDuration: el },
      e6 = function e(t, r, n) {
        var i,
          o,
          s,
          a = t.labels,
          l = t._recent || e7,
          c = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
        return B(r) && (isNaN(r) || r in a)
          ? ((o = r.charAt(0)),
            (s = "%" === r.substr(-1)),
            (i = r.indexOf("=")),
            "<" === o || ">" === o)
            ? (i >= 0 && (r = r.replace(/=/, "")),
              ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? l : n).totalDuration() / 100 : 1))
            : i < 0
              ? (r in a || (a[r] = c), a[r])
              : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                s && n && (o = (o / 100) * (H(n) ? n[0] : n).totalDuration()),
                i > 1 ? e(t, r.substr(0, i - 1), n) + o : c + o)
          : null == r
            ? c
            : +r;
      },
      e8 = function (e, t, r) {
        var n,
          i,
          o = Q(t[1]),
          s = (o ? 2 : 1) + (e < 2 ? 0 : 1),
          a = t[s];
        if ((o && (a.duration = t[1]), (a.parent = r), e)) {
          for (n = a, i = r; i && !("immediateRender" in n);)
            ((n = i.vars.defaults || {}), (i = Y(i.vars.inherit) && i.parent));
          ((a.immediateRender = Y(n.immediateRender)),
            e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]));
        }
        return new t6(t[0], a, t[s + 1]);
      },
      e9 = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      te = function (e, t, r) {
        return r < e ? e : r > t ? t : r;
      },
      tt = function (e, t) {
        return B(e) && (t = et.exec(e)) ? t[1] : "";
      },
      tr = [].slice,
      tn = function (e, t) {
        return (
          e &&
          L(e) &&
          "length" in e &&
          ((!t && !e.length) || (e.length - 1 in e && L(e[0]))) &&
          !e.nodeType &&
          e !== w
        );
      },
      ti = function (e, t, r) {
        var n;
        return y && !t && y.selector
          ? y.selector(e)
          : B(e) && !r && (A || !tT())
            ? tr.call((t || k).querySelectorAll(e), 0)
            : H(e)
              ? (void 0 === n && (n = []),
                e.forEach(function (e) {
                  var t;
                  return (B(e) && !r) || tn(e, 1) ? (t = n).push.apply(t, ti(e)) : n.push(e);
                }) || n)
              : tn(e)
                ? tr.call(e, 0)
                : e
                  ? [e]
                  : [];
      },
      to = function (e) {
        return (
          (e = ti(e)[0] || es("Invalid scope") || {}),
          function (t) {
            var r = e.current || e.nativeElement || e;
            return ti(
              t,
              r.querySelectorAll ? r : r === e ? es("Invalid scope") || k.createElement("div") : e,
            );
          }
        );
      },
      ts = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ta = function (e) {
        if (I(e)) return e;
        var t = L(e) ? e : { each: e },
          r = tD(t.ease),
          n = t.from || 0,
          i = parseFloat(t.base) || 0,
          o = {},
          s = n > 0 && n < 1,
          a = isNaN(n) || s,
          l = t.axis,
          c = n,
          u = n;
        return (
          B(n)
            ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !s && a && ((c = n[0]), (u = n[1])),
          function (e, s, d) {
            var f,
              h,
              p,
              m,
              g,
              v,
              x,
              b,
              y,
              _ = (d || t).length,
              w = o[_];
            if (!w) {
              if (!(y = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                for (x = -1e8; x < (x = d[y++].getBoundingClientRect().left) && y < _;);
                y < _ && y--;
              }
              for (
                w = o[_] = [],
                  f = a ? Math.min(y, _) * c - 0.5 : n % y,
                  h = 1e8 === y ? 0 : a ? (_ * u) / y - 0.5 : (n / y) | 0,
                  x = 0,
                  b = 1e8,
                  v = 0;
                v < _;
                v++
              )
                ((p = (v % y) - f),
                  (m = h - ((v / y) | 0)),
                  (w[v] = g = l ? Math.abs("y" === l ? m : p) : S(p * p + m * m)),
                  g > x && (x = g),
                  g < b && (b = g));
              ("random" === n && ts(w),
                (w.max = x - b),
                (w.min = b),
                (w.v = _ =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (y > _ ? _ - 1 : l ? ("y" === l ? _ / y : y) : Math.max(y, _ / y)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (w.b = _ < 0 ? i - _ : i),
                (w.u = tt(t.amount || t.each) || 0),
                (r = r && _ < 0 ? tP(r) : r));
            }
            return ((_ = (w[e] - w.min) / w.max || 0), eE(w.b + (r ? r(_) : _) * w.v) + w.u);
          }
        );
      },
      tl = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (r) {
          var n = eE(Math.round(parseFloat(r) / e) * e * t);
          return (n - (n % 1)) / t + (Q(r) ? 0 : tt(r));
        };
      },
      tc = function (e, t) {
        var r,
          n,
          i = H(e);
        return (
          !i &&
            L(e) &&
            ((r = i = e.radius || 1e8),
            e.values ? (n = !Q((e = ti(e.values))[0])) && (r *= r) : (e = tl(e.increment))),
          e9(
            t,
            i
              ? I(e)
                ? function (t) {
                    return Math.abs((n = e(t)) - t) <= r ? n : t;
                  }
                : function (t) {
                    for (
                      var i,
                        o,
                        s = parseFloat(n ? t.x : t),
                        a = parseFloat(n ? t.y : 0),
                        l = 1e8,
                        c = 0,
                        u = e.length;
                      u--;
                    )
                      (i = n ? (i = e[u].x - s) * i + (o = e[u].y - a) * o : Math.abs(e[u] - s)) <
                        l && ((l = i), (c = u));
                    return ((c = !r || l <= r ? e[c] : t), n || c === t || Q(t) ? c : c + tt(t));
                  }
              : tl(e),
          )
        );
      },
      tu = function (e, t, r, n) {
        return e9(H(e) ? !t : !0 === r ? ((r = 0), !1) : !n, function () {
          return H(e)
            ? e[~~(Math.random() * e.length)]
            : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round((e - r / 2 + Math.random() * (t - e + 0.99 * r)) / r) * r * n,
                ) / n;
        });
      },
      td = function (e, t, r) {
        return e9(r, function (r) {
          return e[~~t(r)];
        });
      },
      tf = function (e) {
        return e.replace(q, function (e) {
          var t = e.indexOf("[") + 1,
            r = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(V);
          return tu(t ? r : +r[0], t ? 0 : +r[1], +r[2] || 1e-5);
        });
      },
      th = function (e, t, r, n, i) {
        var o = t - e,
          s = n - r;
        return e9(i, function (t) {
          return r + (((t - e) / o) * s || 0);
        });
      },
      tp = function (e, t, r) {
        var n,
          i,
          o,
          s = e.labels,
          a = 1e8;
        for (n in s) (i = s[n] - t) < 0 == !!r && i && a > (i = Math.abs(i)) && ((o = n), (a = i));
        return o;
      },
      tm = function (e, t, r) {
        var n,
          i,
          o,
          s = e.vars,
          a = s[t],
          l = y,
          c = e._ctx;
        if (a)
          return (
            (n = s[t + "Params"]),
            (i = s.callbackScope || e),
            r && eh.length && eT(),
            c && (y = c),
            (o = n ? a.apply(i, n) : a.call(i)),
            (y = l),
            o
          );
      },
      tg = function (e) {
        return (
          eL(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!b),
          1 > e.progress() && tm(e, "onInterrupt"),
          e
        );
      },
      tv = [],
      tx = function (e) {
        if (e)
          if (((e = (!e.name && e.default) || e), U() || e.headless)) {
            var t = e.name,
              r = I(e),
              n =
                t && !r && e.init
                  ? function () {
                      this._props = [];
                    }
                  : e,
              i = { init: el, render: rs, add: tJ, kill: rl, modifier: ra, rawVars: 0 },
              o = { targetTest: 0, get: 0, getSetter: rr, aliases: {}, register: 0 };
            if ((tT(), e !== n)) {
              if (em[t]) return;
              (eN(n, eN(eD(e, i), o)),
                eS(n.prototype, eS(i, eD(e, o))),
                (em[(n.prop = t)] = n),
                e.targetTest && (ex.push(n), (ef[t] = 1)),
                (t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"));
            }
            (ea(t, n), e.register && e.register(rE, n, rd));
          } else tv.push(e);
      },
      tb = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      ty = function (e, t, r) {
        return (
          ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
            ? t + (r - t) * e * 6
            : e < 0.5
              ? r
              : 3 * e < 2
                ? t + (r - t) * (2 / 3 - e) * 6
                : t) *
            255 +
            0.5) |
          0
        );
      },
      t_ = function (e, t, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h = e ? (Q(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : tb.black;
        if (!h) {
          if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), tb[e])) h = tb[e];
          else if ("#" === e.charAt(0)) {
            if (
              (e.length < 6 &&
                ((n = e.charAt(1)),
                (e =
                  "#" +
                  n +
                  n +
                  (i = e.charAt(2)) +
                  i +
                  (o = e.charAt(3)) +
                  o +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
              9 === e.length)
            )
              return [
                (h = parseInt(e.substr(1, 6), 16)) >> 16,
                (h >> 8) & 255,
                255 & h,
                parseInt(e.substr(7), 16) / 255,
              ];
            h = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & 255, 255 & e];
          } else if ("hsl" === e.substr(0, 3))
            if (((h = f = e.match(X)), t)) {
              if (~e.indexOf("=")) return ((h = e.match(G)), r && h.length < 4 && (h[3] = 1), h);
            } else
              ((s = (h[0] % 360) / 360),
                (a = h[1] / 100),
                (i = (l = h[2] / 100) <= 0.5 ? l * (a + 1) : l + a - l * a),
                (n = 2 * l - i),
                h.length > 3 && (h[3] *= 1),
                (h[0] = ty(s + 1 / 3, n, i)),
                (h[1] = ty(s, n, i)),
                (h[2] = ty(s - 1 / 3, n, i)));
          else h = e.match(X) || tb.transparent;
          h = h.map(Number);
        }
        return (
          t &&
            !f &&
            ((n = h[0] / 255),
            (l =
              ((c = Math.max(n, (i = h[1] / 255), (o = h[2] / 255))) + (u = Math.min(n, i, o))) /
              2),
            c === u
              ? (s = a = 0)
              : ((d = c - u),
                (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                (s =
                  (c === n
                    ? (i - o) / d + 6 * (i < o)
                    : c === i
                      ? (o - n) / d + 2
                      : (n - i) / d + 4) * 60)),
            (h[0] = ~~(s + 0.5)),
            (h[1] = ~~(100 * a + 0.5)),
            (h[2] = ~~(100 * l + 0.5))),
          r && h.length < 4 && (h[3] = 1),
          h
        );
      },
      tw = function (e) {
        var t = [],
          r = [],
          n = -1;
        return (
          e.split(tk).forEach(function (e) {
            var i = e.match(J) || [];
            (t.push.apply(t, i), r.push((n += i.length + 1)));
          }),
          (t.c = r),
          t
        );
      },
      tA = function (e, t, r) {
        var n,
          i,
          o,
          s,
          a = "",
          l = (e + a).match(tk),
          c = t ? "hsla(" : "rgba(",
          u = 0;
        if (!l) return e;
        if (
          ((l = l.map(function (e) {
            return (
              (e = t_(e, t, 1)) &&
              c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            );
          })),
          r && ((o = tw(e)), (n = r.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = e.replace(tk, "1").split(J)).length - 1; u < s; u++)
            a +=
              i[u] +
              (~n.indexOf(u)
                ? l.shift() || c + "0,0,0,0)"
                : (o.length ? o : l.length ? l : r).shift());
        if (!i) for (s = (i = e.split(tk)).length - 1; u < s; u++) a += i[u] + l[u];
        return a + i[s];
      },
      tk = (function () {
        var e,
          t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in tb) t += "|" + e + "\\b";
        return RegExp(t + ")", "gi");
      })(),
      tE = /hsl[a]?\(/,
      tO = function (e) {
        var t,
          r = e.join(" ");
        if (((tk.lastIndex = 0), tk.test(r)))
          return ((t = tE.test(r)), (e[1] = tA(e[1], t)), (e[0] = tA(e[0], t, tw(e[1]))), !0);
      },
      tC =
        ((c = Date.now),
        (u = 500),
        (d = 33),
        (h = f = c()),
        (p = 1e3 / 240),
        (m = 1e3 / 240),
        (g = []),
        (v = function e(t) {
          var r,
            o,
            v,
            x,
            b = c() - h,
            y = !0 === t;
          if (
            ((b > u || b < 0) && (f += b - d),
            (h += b),
            ((r = (v = h - f) - m) > 0 || y) &&
              ((x = ++s.frame),
              (a = v - 1e3 * s.time),
              (s.time = v /= 1e3),
              (m += r + (r >= p ? 4 : p - r)),
              (o = 1)),
            y || (n = i(e)),
            o)
          )
            for (l = 0; l < g.length; l++) g[l](v, a, x, t);
        }),
        (s = {
          time: 0,
          frame: 0,
          tick: function () {
            v(!0);
          },
          deltaRatio: function (e) {
            return a / (1e3 / (e || 60));
          },
          wake: function () {
            E &&
              (!A &&
                U() &&
                ((k = (w = A = window).document || {}),
                (er.gsap = rE),
                (w.gsapVersions || (w.gsapVersions = [])).push(rE.version),
                ei(en || w.GreenSockGlobals || (!w.gsap && w) || {}),
                tv.forEach(tx)),
              (o = "u" > typeof requestAnimationFrame && requestAnimationFrame),
              n && s.sleep(),
              (i =
                o ||
                function (e) {
                  return setTimeout(e, (m - 1e3 * s.time + 1) | 0);
                }),
              (T = 1),
              v(2));
          },
          sleep: function () {
            ((o ? cancelAnimationFrame : clearTimeout)(n), (T = 0), (i = el));
          },
          lagSmoothing: function (e, t) {
            d = Math.min(t || 33, (u = e || 1 / 0));
          },
          fps: function (e) {
            ((p = 1e3 / (e || 240)), (m = 1e3 * s.time + p));
          },
          add: function (e, t, r) {
            var n = t
              ? function (t, r, i, o) {
                  (e(t, r, i, o), s.remove(n));
                }
              : e;
            return (s.remove(e), g[r ? "unshift" : "push"](n), tT(), n);
          },
          remove: function (e, t) {
            ~(t = g.indexOf(e)) && g.splice(t, 1) && l >= t && l--;
          },
          _listeners: g,
        })),
      tT = function () {
        return !T && tC.wake();
      },
      tR = {},
      tz = /^[\d.\-M][\d.\-,\s]/,
      tM = /["']/g,
      tj = function (e) {
        for (
          var t,
            r,
            n,
            i = {},
            o = e.substr(1, e.length - 3).split(":"),
            s = o[0],
            a = 1,
            l = o.length;
          a < l;
          a++
        )
          ((r = o[a]),
            (t = a !== l - 1 ? r.lastIndexOf(",") : r.length),
            (n = r.substr(0, t)),
            (i[s] = isNaN(n) ? n.replace(tM, "").trim() : +n),
            (s = r.substr(t + 1).trim()));
        return i;
      },
      tN = function (e) {
        var t = e.indexOf("(") + 1,
          r = e.indexOf(")"),
          n = e.indexOf("(", t);
        return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
      },
      tS = function (e) {
        var t = (e + "").split("("),
          r = tR[t[0]];
        return r && t.length > 1 && r.config
          ? r.config.apply(null, ~e.indexOf("{") ? [tj(t[1])] : tN(e).split(",").map(eM))
          : tR._CE && tz.test(e)
            ? tR._CE("", e)
            : r;
      },
      tP = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      tD = function (e, t) {
        return (e && (I(e) ? e : tR[e] || tS(e))) || t;
      },
      tB = function (e, t, r, n) {
        (void 0 === r &&
          (r = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === n &&
            (n = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2;
            }));
        var i,
          o = { easeIn: t, easeOut: r, easeInOut: n };
        return (
          eA(e, function (e) {
            for (var t in ((tR[e] = er[e] = o), (tR[(i = e.toLowerCase())] = r), o))
              tR[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tR[
                e + "." + t
              ] = o[t];
          }),
          o
        );
      },
      tI = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
        };
      },
      tQ = function e(t, r, n) {
        var i = r >= 1 ? r : 1,
          o = (n || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          s = (o / M) * (Math.asin(1 / i) || 0),
          a = function (e) {
            return 1 === e ? 1 : i * Math.pow(2, -10 * e) * D((e - s) * o) + 1;
          },
          l =
            "out" === t
              ? a
              : "in" === t
                ? function (e) {
                    return 1 - a(1 - e);
                  }
                : tI(a);
        return (
          (o = M / o),
          (l.config = function (r, n) {
            return e(t, r, n);
          }),
          l
        );
      },
      tF = function e(t, r) {
        void 0 === r && (r = 1.70158);
        var n = function (e) {
            return e ? --e * e * ((r + 1) * e + r) + 1 : 0;
          },
          i =
            "out" === t
              ? n
              : "in" === t
                ? function (e) {
                    return 1 - n(1 - e);
                  }
                : tI(n);
        return (
          (i.config = function (r) {
            return e(t, r);
          }),
          i
        );
      };
    (eA("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var r = t < 5 ? t + 1 : t;
      tB(
        e + ",Power" + (r - 1),
        t
          ? function (e) {
              return Math.pow(e, r);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, r);
        },
        function (e) {
          return e < 0.5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2;
        },
      );
    }),
      (tR.Linear.easeNone = tR.none = tR.Linear.easeIn),
      tB("Elastic", tQ("in"), tQ("out"), tQ()),
      (tK = 2 * (tW = 1 / 2.75)),
      (tH = 2.5 * tW),
      tB(
        "Bounce",
        function (e) {
          return 1 - tq(1 - e);
        },
        (tq = function (e) {
          return e < tW
            ? 7.5625 * e * e
            : e < tK
              ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + 0.75
              : e < tH
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
        }),
      ),
      tB("Expo", function (e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
      }),
      tB("Circ", function (e) {
        return -(S(1 - e * e) - 1);
      }),
      tB("Sine", function (e) {
        return 1 === e ? 1 : -P(e * j) + 1;
      }),
      tB("Back", tF("in"), tF("out"), tF()),
      (tR.SteppedEase =
        tR.steps =
        er.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var r = 1 / e,
                n = e + +!t,
                i = +!!t,
                o = 0.99999999;
              return function (e) {
                return (((n * te(0, o, e)) | 0) + i) * r;
              };
            },
          }),
      (z.ease = tR["quad.out"]),
      eA("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
        return (eb += e + "," + e + "Params,");
      }));
    var tL = function (e, t) {
        ((this.id = N++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : ew),
          (this.set = t ? t.getSetter : rr));
      },
      tY = (function () {
        function e(e) {
          ((this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            e4(this, +e.duration, 1, 1),
            (this.data = e.data),
            y && ((this._ctx = y), y.data.push(this)),
            T || tC.wake());
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                e4(
                  this,
                  this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((tT(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (eX(this, e), !r._dp || r.parent || eG(r, this); r && r.parent;)
                (r.parent._time !==
                  r._start +
                    (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                eJ(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!this._initted && this._dur && e) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), ez(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + eK(this)) % (this._dur + this._rDelay) ||
                    (e ? this._dur : 0),
                  t,
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                  ? 1
                  : 0;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) + eK(this),
                  t,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : +(this.rawTime() > 0);
          }),
          (t.iteration = function (e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * r, t)
              : this._repeat
                ? eH(this._tTime, r) + 1
                : 1;
          }),
          (t.timeScale = function (e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var r = this.parent && this._ts ? eq(this.parent._time, this) : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
              this.totalTime(te(-Math.abs(this._delay), this.totalDuration(), r), !1 !== t),
              eV(this),
              eU(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (tT(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8),
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = eE(e);
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && eJ(t, this, this._start - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (Y(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e && (!this._ts || (this._repeat && this._time && 1 > this.totalProgress()))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? eq(t.rawTime(e), this)
                  : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            void 0 === e && (e = ed);
            var t = b;
            return (
              (b = e),
              eR(this) &&
                (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
              "nested" !== this.data && !1 !== e.kill && this.kill(),
              (b = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t;)
              ((r = t._start + r / (Math.abs(t._ts) || 1)), (t = t._dp));
            return !this.parent && this._sat ? this._sat.globalTime(e) : r;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), e3(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return ((this._rDelay = e), e3(this), t ? this.time(t) : this);
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(e6(this, e), Y(t));
          }),
          (t.restart = function (e, t) {
            return (
              this.play().totalTime(e ? -this._delay : 0, Y(t)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (t.play = function (e, t) {
            return (null != e && this.seek(e, t), this.reversed(!1).paused(!1));
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return (null != e && this.seek(e, t), this.paused(!0));
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return ((this._initted = this._act = 0), (this._zTime = -1e-8), this);
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              r = this._start;
            return !!(
              !t ||
              (this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= r &&
                e < this.endTime(!0) - 1e-8)
            );
          }),
          (t.eventCallback = function (e, t, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((n[e] = t),
                    r && (n[e + "Params"] = r),
                    "onUpdate" === e && (this._onUpdate = t))
                  : delete n[e],
                this)
              : n[e];
          }),
          (t.then = function (e) {
            var t = this,
              r = t._prom;
            return new Promise(function (n) {
              var i = I(e) ? e : ej,
                o = function () {
                  var e = t.then;
                  ((t.then = null),
                    r && r(),
                    I(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                    n(i),
                    (t.then = e));
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) || (!t._tTime && t._ts < 0)
                ? o()
                : (t._prom = o);
            });
          }),
          (t.kill = function () {
            tg(this);
          }),
          e
        );
      })();
    eN(tY.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var tU = (function (e) {
      function n(r, n) {
        var i;
        return (
          void 0 === r && (r = {}),
          ((i = e.call(this, r) || this).labels = {}),
          (i.smoothChildTiming = !!r.smoothChildTiming),
          (i.autoRemoveChildren = !!r.autoRemoveChildren),
          (i._sort = Y(r.sortChildren)),
          _ && eJ(r.parent || _, t(i), n),
          r.reversed && i.reverse(),
          r.paused && i.paused(!0),
          r.scrollTrigger && eZ(t(i), r.scrollTrigger),
          i
        );
      }
      r(n, e);
      var i = n.prototype;
      return (
        (i.to = function (e, t, r) {
          return (e8(0, arguments, this), this);
        }),
        (i.from = function (e, t, r) {
          return (e8(1, arguments, this), this);
        }),
        (i.fromTo = function (e, t, r, n) {
          return (e8(2, arguments, this), this);
        }),
        (i.set = function (e, t, r) {
          return (
            (t.duration = 0),
            (t.parent = this),
            eB(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new t6(e, t, e6(this, r), 1),
            this
          );
        }),
        (i.call = function (e, t, r) {
          return eJ(this, t6.delayedCall(0, e, t), r);
        }),
        (i.staggerTo = function (e, t, r, n, i, o, s) {
          return (
            (r.duration = t),
            (r.stagger = r.stagger || n),
            (r.onComplete = o),
            (r.onCompleteParams = s),
            (r.parent = this),
            new t6(e, r, e6(this, i)),
            this
          );
        }),
        (i.staggerFrom = function (e, t, r, n, i, o, s) {
          return (
            (r.runBackwards = 1),
            (eB(r).immediateRender = Y(r.immediateRender)),
            this.staggerTo(e, t, r, n, i, o, s)
          );
        }),
        (i.staggerFromTo = function (e, t, r, n, i, o, s, a) {
          return (
            (n.startAt = r),
            (eB(n).immediateRender = Y(n.immediateRender)),
            this.staggerTo(e, t, n, i, o, s, a)
          );
        }),
        (i.render = function (e, t, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            h,
            p,
            m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            x = e <= 0 ? 0 : eE(e),
            y = this._zTime < 0 != e < 0 && (this._initted || !v);
          if ((this !== _ && x > g && e >= 0 && (x = g), x !== this._tTime || r || y)) {
            if (
              (m !== this._time && v && ((x += this._time - m), (e += this._time - m)),
              (n = x),
              (d = this._start),
              (l = !(u = this._ts)),
              y && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (((h = this._yoyo), (a = v + this._rDelay), this._repeat < -1 && e < 0))
                return this.totalTime(100 * a + e, t, r);
              if (
                ((n = eE(x % a)),
                x === g
                  ? ((s = this._repeat), (n = v))
                  : ((s = ~~(f = eE(x / a))) && s === f && ((n = v), s--), n > v && (n = v)),
                (f = eH(this._tTime, a)),
                !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s),
                h && 1 & s && ((n = v - n), (p = 1)),
                s !== f && !this._lock)
              ) {
                var w = h && 1 & f,
                  A = w === (h && 1 & s);
                if (
                  (s < f && (w = !w),
                  (m = w ? 0 : x % v ? v : x),
                  (this._lock = 1),
                  (this.render(m || (p ? 0 : eE(s * a)), t, !v)._lock = 0),
                  (this._tTime = x),
                  !t && this.parent && tm(this, "onRepeat"),
                  this.vars.repeatRefresh && !p && ((this.invalidate()._lock = 1), (f = s)),
                  (m && m !== this._time) ||
                    !this._ts !== l ||
                    (this.vars.onRepeat && !this.parent && !this._act) ||
                    ((v = this._dur),
                    (g = this._tDur),
                    A &&
                      ((this._lock = 2),
                      (m = w ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !p && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l))
                )
                  return this;
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (c = e5(this, eE(m), eE(n))) &&
                (x -= n - (n = c._start)),
              (this._tTime = x),
              (this._time = n),
              (this._act = !!u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (m = 0)),
              !m && x && v && !t && !f && (tm(this, "onStart"), this._tTime !== x))
            )
              return this;
            if (n >= m && e >= 0)
              for (i = this._first; i;) {
                if (((o = i._next), (i._act || n >= i._start) && i._ts && c !== i)) {
                  if (i.parent !== this) return this.render(e, t, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts,
                      t,
                      r,
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    ((c = 0), o && (x += this._zTime = -1e-8));
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var k = e < 0 ? e : n; i;) {
                if (((o = i._prev), (i._act || k <= i._end) && i._ts && c !== i)) {
                  if (i.parent !== this) return this.render(e, t, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (k - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) + (k - i._start) * i._ts,
                      t,
                      r || (b && eR(i)),
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    ((c = 0), o && (x += this._zTime = k ? -1e-8 : 1e-8));
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              c &&
              !t &&
              (this.pause(), (c.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1), this._ts)
            )
              return ((this._start = d), eV(this), this.render(e, t, r));
            (this._onUpdate && !t && tm(this, "onUpdate", !0),
              ((x === g && this._tTime >= this.totalDuration()) || (!x && m)) &&
                (d === this._start || Math.abs(u) !== Math.abs(this._ts)) &&
                !this._lock &&
                ((e || !v) && ((x === g && this._ts > 0) || (!x && this._ts < 0)) && eL(this, 1),
                t ||
                  (e < 0 && !m) ||
                  (!x && !m && g) ||
                  (tm(this, x === g && e >= 0 ? "onComplete" : "onReverseComplete", !0),
                  this._prom && !(x < g && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }),
        (i.add = function (e, t) {
          var r = this;
          if ((Q(t) || (t = e6(this, t, e)), !(e instanceof tY))) {
            if (H(e))
              return (
                e.forEach(function (e) {
                  return r.add(e, t);
                }),
                this
              );
            if (B(e)) return this.addLabel(e, t);
            if (!I(e)) return this;
            e = t6.delayedCall(0, e);
          }
          return this !== e ? eJ(this, e, t) : this;
        }),
        (i.getChildren = function (e, t, r, n) {
          (void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -1e8));
          for (var i = [], o = this._first; o;)
            (o._start >= n &&
              (o instanceof t6
                ? t && i.push(o)
                : (r && i.push(o), e && i.push.apply(i, o.getChildren(!0, t, r)))),
              (o = o._next));
          return i;
        }),
        (i.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
            if (t[r].vars.id === e) return t[r];
        }),
        (i.remove = function (e) {
          return B(e)
            ? this.removeLabel(e)
            : I(e)
              ? this.killTweensOf(e)
              : (e.parent === this && eF(this, e),
                e === this._recent && (this._recent = this._last),
                eY(this));
        }),
        (i.totalTime = function (t, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = eE(
                  tC.time -
                    (this._ts > 0 ? t / this._ts : -((this.totalDuration() - t) / this._ts)),
                )),
              e.prototype.totalTime.call(this, t, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (i.addLabel = function (e, t) {
          return ((this.labels[e] = e6(this, t)), this);
        }),
        (i.removeLabel = function (e) {
          return (delete this.labels[e], this);
        }),
        (i.addPause = function (e, t, r) {
          var n = t6.delayedCall(0, t || el, r);
          return ((n.data = "isPause"), (this._hasPause = 1), eJ(this, n, e6(this, e)));
        }),
        (i.removePause = function (e) {
          var t = this._first;
          for (e = e6(this, e); t;)
            (t._start === e && "isPause" === t.data && eL(t), (t = t._next));
        }),
        (i.killTweensOf = function (e, t, r) {
          for (var n = this.getTweensOf(e, r), i = n.length; i--;) tV !== n[i] && n[i].kill(e, t);
          return this;
        }),
        (i.getTweensOf = function (e, t) {
          for (var r, n = [], i = ti(e), o = this._first, s = Q(t); o;)
            (o instanceof t6
              ? eC(o._targets, i) &&
                (s
                  ? (!tV || (o._initted && o._ts)) &&
                    o.globalTime(0) <= t &&
                    o.globalTime(o.totalDuration()) > t
                  : !t || o.isActive()) &&
                n.push(o)
              : (r = o.getTweensOf(i, t)).length && n.push.apply(n, r),
              (o = o._next));
          return n;
        }),
        (i.tweenTo = function (e, t) {
          t = t || {};
          var r,
            n = this,
            i = e6(n, e),
            o = t,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            c = o.immediateRender,
            u = t6.to(
              n,
              eN(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) ||
                    1e-8,
                  onStart: function () {
                    if ((n.pause(), !r)) {
                      var e =
                        t.duration ||
                        Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                      (u._dur !== e && e4(u, e, 0, 1).render(u._time, !0, !0), (r = 1));
                    }
                    a && a.apply(u, l || []);
                  },
                },
                t,
              ),
            );
          return c ? u.render(0) : u;
        }),
        (i.tweenFromTo = function (e, t, r) {
          return this.tweenTo(t, eN({ startAt: { time: e6(this, e) } }, r));
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (e) {
          return (void 0 === e && (e = this._time), tp(this, e6(this, e)));
        }),
        (i.previousLabel = function (e) {
          return (void 0 === e && (e = this._time), tp(this, e6(this, e), 1));
        }),
        (i.currentLabel = function (e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8);
        }),
        (i.shiftChildren = function (e, t, r) {
          void 0 === r && (r = 0);
          var n,
            i = this._first,
            o = this.labels;
          for (e = eE(e); i;) (i._start >= r && ((i._start += e), (i._end += e)), (i = i._next));
          if (t) for (n in o) o[n] >= r && (o[n] += e);
          return eY(this);
        }),
        (i.invalidate = function (t) {
          var r = this._first;
          for (this._lock = 0; r;) (r.invalidate(t), (r = r._next));
          return e.prototype.invalidate.call(this, t);
        }),
        (i.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, r = this._first; r;) ((t = r._next), this.remove(r), (r = t));
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            eY(this)
          );
        }),
        (i.totalDuration = function (e) {
          var t,
            r,
            n,
            i = 0,
            o = this._last,
            s = 1e8;
          if (arguments.length)
            return this.timeScale(
              (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                (this.reversed() ? -e : e),
            );
          if (this._dirty) {
            for (n = this.parent; o;)
              ((t = o._prev),
                o._dirty && o.totalDuration(),
                (r = o._start) > s && this._sort && o._ts && !this._lock
                  ? ((this._lock = 1), (eJ(this, o, r - o._delay, 1)._lock = 0))
                  : (s = r),
                r < 0 &&
                  o._ts &&
                  ((i -= r),
                  ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                    ((this._start += eE(r / this._ts)), (this._time -= r), (this._tTime -= r)),
                  this.shiftChildren(-r, !1, -Infinity),
                  (s = 0)),
                o._end > i && o._ts && (i = o._end),
                (o = t));
            (e4(this, this === _ && this._time > i ? this._time : i, 1, 1), (this._dirty = 0));
          }
          return this._tDur;
        }),
        (n.updateRoot = function (e) {
          if ((_._ts && (ez(_, eq(e, _)), (O = tC.frame)), tC.frame >= ev)) {
            ev += R.autoSleep || 120;
            var t = _._first;
            if ((!t || !t._ts) && R.autoSleep && tC._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || tC.sleep();
            }
          }
        }),
        n
      );
    })(tY);
    eN(tU.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var tW,
      tK,
      tH,
      tq,
      tV,
      tX,
      tG = function (e, t, r, n, i, o, s) {
        var a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m = new rd(this._pt, e, t, 0, 1, ro, null, i),
          g = 0,
          v = 0;
        for (
          m.b = r,
            m.e = n,
            r += "",
            n += "",
            (h = ~n.indexOf("random(")) && (n = tf(n)),
            o && (o((p = [r, n]), e, t), (r = p[0]), (n = p[1])),
            l = r.match(Z) || [];
          (a = Z.exec(n));
        )
          ((u = a[0]),
            (d = n.substring(g, a.index)),
            c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
            u !== l[v++] &&
              ((f = parseFloat(l[v - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: d || 1 === v ? d : ",",
                s: f,
                c: "=" === u.charAt(1) ? eO(f, u) - f : parseFloat(u) - f,
                m: c && c < 4 ? Math.round : 0,
              }),
              (g = Z.lastIndex)));
        return (
          (m.c = g < n.length ? n.substring(g, n.length) : ""),
          (m.fp = s),
          ($.test(n) || h) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      tJ = function (e, t, r, n, i, o, s, a, l, c) {
        I(n) && (n = n(i || 0, e, o));
        var u,
          d = e[t],
          f =
            "get" !== r
              ? r
              : I(d)
                ? l
                  ? e[t.indexOf("set") || !I(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l)
                  : e[t]()
                : d,
          h = I(d) ? (l ? re : t9) : t8;
        if (
          (B(n) &&
            (~n.indexOf("random(") && (n = tf(n)),
            "=" === n.charAt(1) && ((u = eO(f, n) + (tt(f) || 0)) || 0 === u) && (n = u)),
          !c || f !== n || tX)
        )
          return isNaN(f * n) || "" === n
            ? (d || t in e || eo(t, n), tG.call(this, e, t, f, n, h, a || R.stringFilter, l))
            : ((u = new rd(
                this._pt,
                e,
                t,
                +f || 0,
                n - (f || 0),
                "boolean" == typeof d ? ri : rn,
                0,
                h,
              )),
              l && (u.fp = l),
              s && u.modifier(s, this, e),
              (this._pt = u));
      },
      tZ = function (e, t, r, n, i) {
        if ((I(e) && (e = t4(e, i, t, r, n)), !L(e) || (e.style && e.nodeType) || H(e) || K(e)))
          return B(e) ? t4(e, i, t, r, n) : e;
        var o,
          s = {};
        for (o in e) s[o] = t4(e[o], i, t, r, n);
        return s;
      },
      t$ = function (e, t, r, n, i, o) {
        var s, a, l, c;
        if (
          em[e] &&
          !1 !== (s = new em[e]()).init(i, s.rawVars ? t[e] : tZ(t[e], n, i, o, r), r, n, o) &&
          ((r._pt = a = new rd(r._pt, i, e, 0, 1, s.render, s, 0, s.priority)), r !== C)
        )
          for (l = r._ptLookup[r._targets.indexOf(i)], c = s._props.length; c--;)
            l[s._props[c]] = a;
        return s;
      },
      t0 = function e(t, r, n) {
        var i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g,
          v = t.vars,
          y = v.ease,
          w = v.startAt,
          A = v.immediateRender,
          k = v.lazy,
          E = v.onUpdate,
          O = v.runBackwards,
          C = v.yoyoEase,
          T = v.keyframes,
          R = v.autoRevert,
          M = t._dur,
          j = t._startAt,
          N = t._targets,
          S = t.parent,
          P = S && "nested" === S.data ? S.vars.targets : N,
          D = "auto" === t._overwrite && !x,
          B = t.timeline,
          I = v.easeReverse || C;
        if (
          (!B || (T && y) || (y = "none"),
          (t._ease = tD(y, z.ease)),
          (t._rEase = I && (tD(I) || t._ease)),
          (t._from = !B && !!v.runBackwards),
          t._from && (t.ratio = 1),
          !B || (T && !v.stagger))
        ) {
          if (
            ((m = (d = N[0] ? e_(N[0]).harness : 0) && v[d.prop]),
            (i = eD(v, ef)),
            j &&
              (j._zTime < 0 && j.progress(1),
              r < 0 && O && A && !R ? j.render(-1, !0) : j.revert(O && M ? eu : ec),
              (j._lazy = 0)),
            w)
          ) {
            if (
              (eL(
                (t._startAt = t6.set(
                  N,
                  eN(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: S,
                      immediateRender: !0,
                      lazy: !j && Y(k),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        E &&
                        function () {
                          return tm(t, "onUpdate");
                        },
                      stagger: 0,
                    },
                    w,
                  ),
                )),
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              r < 0 && (b || (!A && !R)) && t._startAt.revert(eu),
              A && M && r <= 0 && n <= 0)
            ) {
              r && (t._zTime = r);
              return;
            }
          } else if (O && M && !j)
            if (
              (r && (A = !1),
              (s = eN(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: A && !j && Y(k),
                  immediateRender: A,
                  stagger: 0,
                  parent: S,
                },
                i,
              )),
              m && (s[d.prop] = m),
              eL((t._startAt = t6.set(N, s))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              r < 0 && (b ? t._startAt.revert(eu) : t._startAt.render(-1, !0)),
              (t._zTime = r),
              A)
            ) {
              if (!r) return;
            } else e(t._startAt, 1e-8, 1e-8);
          for (t._pt = t._ptCache = 0, k = (M && Y(k)) || (k && !M), o = 0; o < N.length; o++) {
            if (
              ((u = (l = N[o])._gsap || ey(N)[o]._gsap),
              (t._ptLookup[o] = h = {}),
              ep[u.id] && eh.length && eT(),
              (p = P === N ? o : P.indexOf(l)),
              d &&
                !1 !== (f = new d()).init(l, m || i, t, p, P) &&
                ((t._pt = a = new rd(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (e) {
                  h[e] = a;
                }),
                f.priority && (c = 1)),
              !d || m)
            )
              for (s in i)
                em[s] && (f = t$(s, i, t, p, l, P))
                  ? f.priority && (c = 1)
                  : (h[s] = a = tJ.call(t, l, s, "get", i[s], p, P, 0, v.stringFilter));
            (t._op && t._op[o] && t.kill(l, t._op[o]),
              D &&
                t._pt &&
                ((tV = t), _.killTweensOf(l, h, t.globalTime(r)), (g = !t.parent), (tV = 0)),
              t._pt && k && (ep[u.id] = 1));
          }
          (c && ru(t), t._onInit && t._onInit(t));
        }
        ((t._onUpdate = E),
          (t._initted = (!t._op || t._pt) && !g),
          T && r <= 0 && B.render(1e8, !0, !0));
      },
      t1 = function (e, t, r, n, i, o, s, a) {
        var l,
          c,
          u,
          d,
          f = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
        if (!f)
          for (f = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length; d--;) {
            if ((l = u[d][t]) && l.d && l.d._pt)
              for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
            if (!l)
              return (
                (tX = 1),
                (e.vars[t] = "+=0"),
                t0(e, s),
                (tX = 0),
                a ? es(t + " not eligible for reset. Try splitting into individual properties") : 1
              );
            f.push(l);
          }
        for (d = f.length; d--;)
          (((l = (c = f[d])._pt || c).s = (n || 0 === n) && !i ? n : l.s + (n || 0) + o * l.c),
            (l.c = r - l.s),
            c.e && (c.e = ek(r) + tt(c.e)),
            c.b && (c.b = l.s + tt(c.b)));
      },
      t2 = function (e, t) {
        var r,
          n,
          i,
          o,
          s = e[0] ? e_(e[0]).harness : 0,
          a = s && s.aliases;
        if (!a) return t;
        for (n in ((r = eS({}, t)), a))
          if (n in r) for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
        return r;
      },
      t5 = function (e, t, r, n) {
        var i,
          o,
          s = t.ease || n || "power1.inOut";
        if (H(t))
          ((o = r[e] || (r[e] = [])),
            t.forEach(function (e, r) {
              return o.push({ t: (r / (t.length - 1)) * 100, v: e, e: s });
            }));
        else
          for (i in t)
            ((o = r[i] || (r[i] = [])),
              "ease" === i || o.push({ t: parseFloat(e), v: t[i], e: s }));
      },
      t4 = function (e, t, r, n, i) {
        return I(e) ? e.call(t, r, n, i) : B(e) && ~e.indexOf("random(") ? tf(e) : e;
      },
      t3 = eb + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
      t7 = {};
    eA(t3 + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
      return (t7[e] = 1);
    });
    var t6 = (function (e) {
      function n(r, n, i, o) {
        "number" == typeof n && ((i.duration = n), (n = i), (i = null));
        var s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p = e.call(this, o ? n : eB(n)) || this,
          m = p.vars,
          g = m.duration,
          v = m.delay,
          b = m.immediateRender,
          y = m.stagger,
          w = m.overwrite,
          A = m.keyframes,
          k = m.defaults,
          E = m.scrollTrigger,
          O = n.parent || _,
          C = (H(r) || K(r) ? Q(r[0]) : "length" in n) ? [r] : ti(r);
        if (
          ((p._targets = C.length
            ? ey(C)
            : es("GSAP target " + r + " not found. https://gsap.com", !R.nullTargetWarn) || []),
          (p._ptLookup = []),
          (p._overwrite = w),
          A || y || W(g) || W(v))
        ) {
          var T = (n = p.vars).easeReverse || n.yoyoEase;
          if (
            ((s = p.timeline =
              new tU({
                data: "nested",
                defaults: k || {},
                targets: O && "nested" === O.data ? O.vars.targets : C,
              })).kill(),
            (s.parent = s._dp = t(p)),
            (s._start = 0),
            y || W(g) || W(v))
          ) {
            if (((c = C.length), (f = y && ta(y)), L(y)))
              for (u in y) ~t3.indexOf(u) && (h || (h = {}), (h[u] = y[u]));
            for (a = 0; a < c; a++)
              (((l = eD(n, t7)).stagger = 0),
                T && (l.easeReverse = T),
                h && eS(l, h),
                (d = C[a]),
                (l.duration = +t4(g, t(p), a, d, C)),
                (l.delay = (+t4(v, t(p), a, d, C) || 0) - p._delay),
                !y &&
                  1 === c &&
                  l.delay &&
                  ((p._delay = v = l.delay), (p._start += v), (l.delay = 0)),
                s.to(d, l, f ? f(a, d, C) : 0),
                (s._ease = tR.none));
            s.duration() ? (g = v = 0) : (p.timeline = 0);
          } else if (A) {
            (eB(eN(s.vars.defaults, { ease: "none" })), (s._ease = tD(A.ease || n.ease || "none")));
            var z,
              M,
              j,
              N = 0;
            if (H(A))
              (A.forEach(function (e) {
                return s.to(C, e, ">");
              }),
                s.duration());
            else {
              for (u in ((l = {}), A))
                "ease" === u || "easeEach" === u || t5(u, A[u], l, A.easeEach);
              for (u in l)
                for (
                  z = l[u].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    N = 0,
                    a = 0;
                  a < z.length;
                  a++
                )
                  (((j = {
                    ease: (M = z[a]).e,
                    duration: ((M.t - (a ? z[a - 1].t : 0)) / 100) * g,
                  })[u] = M.v),
                    s.to(C, j, N),
                    (N += j.duration));
              s.duration() < g && s.to({}, { duration: g - s.duration() });
            }
          }
          g || p.duration((g = s.duration()));
        } else p.timeline = 0;
        return (
          !0 !== w || x || ((tV = t(p)), _.killTweensOf(C), (tV = 0)),
          eJ(O, t(p), i),
          n.reversed && p.reverse(),
          n.paused && p.paused(!0),
          (b ||
            (!g &&
              !A &&
              p._start === eE(O._time) &&
              Y(b) &&
              (function e(t) {
                return !t || (t._ts && e(t.parent));
              })(t(p)) &&
              "nested" !== O.data)) &&
            ((p._tTime = -1e-8), p.render(Math.max(0, -v) || 0)),
          E && eZ(t(p), E),
          p
        );
      }
      r(n, e);
      var i = n.prototype;
      return (
        (i.render = function (e, t, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d = this._time,
            f = this._tDur,
            h = this._dur,
            p = e < 0,
            m = e > f - 1e-8 && !p ? f : e < 1e-8 ? 0 : e;
          if (h) {
            if (
              m !== this._tTime ||
              !e ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== p) ||
              this._lazy
            ) {
              if (((n = m), (u = this.timeline), this._repeat)) {
                if (((s = h + this._rDelay), this._repeat < -1 && p))
                  return this.totalTime(100 * s + e, t, r);
                if (
                  ((n = eE(m % s)),
                  m === f
                    ? ((o = this._repeat), (n = h))
                    : (o = ~~(a = eE(m / s))) && o === a
                      ? ((n = h), o--)
                      : n > h && (n = h),
                  (l = this._yoyo && 1 & o) && (n = h - n),
                  (a = eH(this._tTime, s)),
                  n === d && !r && this._initted && o === a)
                )
                  return ((this._tTime = m), this);
                o !== a &&
                  this.vars.repeatRefresh &&
                  !l &&
                  !this._lock &&
                  n !== s &&
                  this._initted &&
                  ((this._lock = r = 1), (this.render(eE(s * o), !0).invalidate()._lock = 0));
              }
              if (!this._initted) {
                if (e$(this, p ? e : n, r, t, m)) return ((this._tTime = 0), this);
                if (d !== this._time && !(r && this.vars.repeatRefresh && o !== a)) return this;
                if (h !== this._dur) return this.render(e, t, r);
              }
              if (this._rEase) {
                var g = n < d;
                if (g !== this._inv) {
                  var v = g ? d : h - d;
                  ((this._inv = g),
                    this._from && (this.ratio = 1 - this.ratio),
                    (this._invRatio = this.ratio),
                    (this._invTime = d),
                    (this._invRecip = v ? (g ? -1 : 1) / v : 0),
                    (this._invScale = g ? -this.ratio : 1 - this.ratio),
                    (this._invEase = g ? this._rEase : this._ease));
                }
                this.ratio = c =
                  this._invRatio +
                  this._invScale * this._invEase((n - this._invTime) * this._invRecip);
              } else this.ratio = c = this._ease(n / h);
              if (
                (this._from && (this.ratio = c = 1 - c),
                (this._tTime = m),
                (this._time = n),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                !d && m && !t && !a && (tm(this, "onStart"), this._tTime !== m))
              )
                return this;
              for (i = this._pt; i;) (i.r(c, i.d), (i = i._next));
              ((u && u.render(e < 0 ? e : u._dur * u._ease(n / this._dur), t, r)) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate && !t && (p && eW(this, e, t, r), tm(this, "onUpdate")),
                this._repeat &&
                  o !== a &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  tm(this, "onRepeat"),
                (m === this._tDur || !m) &&
                  this._tTime === m &&
                  (p && !this._onUpdate && eW(this, e, !0, !0),
                  (e || !h) &&
                    ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) &&
                    eL(this, 1),
                  !t &&
                    !(p && !d) &&
                    (m || d || l) &&
                    (tm(this, m === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(m < f && this.timeScale() > 0) && this._prom())));
            }
          } else e2(this, e, t, r);
          return this;
        }),
        (i.targets = function () {
          return this._targets;
        }),
        (i.invalidate = function (t) {
          return (
            (t && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(t),
            e.prototype.invalidate.call(this, t)
          );
        }),
        (i.resetTo = function (e, t, r, n, i) {
          (T || tC.wake(), this._ts || this.play());
          var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return (this._initted || t0(this, o),
          t1(this, e, t, r, n, this._ease(o / this._dur), o, i))
            ? this.resetTo(e, t, r, n, 1)
            : (eX(this, 0),
              this.parent || eQ(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
              this.render(0));
        }),
        (i.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !e && (!t || "all" === t)))
            return (
              (this._lazy = this._pt = 0),
              this.parent ? tg(this) : this.scrollTrigger && this.scrollTrigger.kill(!!b),
              this
            );
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, tV && !0 !== tV.vars.overwrite)._first || tg(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                e4(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u = this._targets,
            d = e ? ti(e) : u,
            f = this._ptLookup,
            h = this._pt;
          if ((!t || "all" === t) && eI(u, d)) return ("all" === t && (this._pt = 0), tg(this));
          for (
            n = this._op = this._op || [],
              "all" !== t &&
                (B(t) &&
                  ((a = {}),
                  eA(t, function (e) {
                    return (a[e] = 1);
                  }),
                  (t = a)),
                (t = t2(u, t))),
              c = u.length;
            c--;
          )
            if (~d.indexOf(u[c]))
              for (a in ((i = f[c]),
              "all" === t ? ((n[c] = t), (s = i), (o = {})) : ((o = n[c] = n[c] || {}), (s = t)),
              s))
                ((l = i && i[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || eF(this, l, "_pt"), delete i[a]),
                  "all" !== o && (o[a] = 1));
          return (this._initted && !this._pt && h && tg(this), this);
        }),
        (n.to = function (e, t) {
          return new n(e, t, arguments[2]);
        }),
        (n.from = function (e, t) {
          return e8(1, arguments);
        }),
        (n.delayedCall = function (e, t, r, i) {
          return new n(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (n.fromTo = function (e, t, r) {
          return e8(2, arguments);
        }),
        (n.set = function (e, t) {
          return ((t.duration = 0), t.repeatDelay || (t.repeat = 0), new n(e, t));
        }),
        (n.killTweensOf = function (e, t, r) {
          return _.killTweensOf(e, t, r);
        }),
        n
      );
    })(tY);
    (eN(t6.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      eA("staggerTo,staggerFrom,staggerFromTo", function (e) {
        t6[e] = function () {
          var t = new tU(),
            r = tr.call(arguments, 0);
          return (r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r));
        };
      }));
    var t8 = function (e, t, r) {
        return (e[t] = r);
      },
      t9 = function (e, t, r) {
        return e[t](r);
      },
      re = function (e, t, r, n) {
        return e[t](n.fp, r);
      },
      rt = function (e, t, r) {
        return e.setAttribute(t, r);
      },
      rr = function (e, t) {
        return I(e[t]) ? t9 : F(e[t]) && e.setAttribute ? rt : t8;
      },
      rn = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
      },
      ri = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      ro = function (e, t) {
        var r = t._pt,
          n = "";
        if (!e && t.b) n = t.b;
        else if (1 === e && t.e) n = t.e;
        else {
          for (; r;)
            ((n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n),
              (r = r._next));
          n += t.c;
        }
        t.set(t.t, t.p, n, t);
      },
      rs = function (e, t) {
        for (var r = t._pt; r;) (r.r(e, r.d), (r = r._next));
      },
      ra = function (e, t, r, n) {
        for (var i, o = this._pt; o;) ((i = o._next), o.p === n && o.modifier(e, t, r), (o = i));
      },
      rl = function (e) {
        for (var t, r, n = this._pt; n;)
          ((r = n._next),
            (n.p !== e || n.op) && n.op !== e ? n.dep || (t = 1) : eF(this, n, "_pt"),
            (n = r));
        return !t;
      },
      rc = function (e, t, r, n) {
        n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
      },
      ru = function (e) {
        for (var t, r, n, i, o = e._pt; o;) {
          for (t = o._next, r = n; r && r.pr > o.pr;) r = r._next;
          ((o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
            (o._next = r) ? (r._prev = o) : (i = o),
            (o = t));
        }
        e._pt = n;
      },
      rd = (function () {
        function e(e, t, r, n, i, o, s, a, l) {
          ((this.t = t),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = o || rn),
            (this.d = s || this),
            (this.set = a || t8),
            (this.pr = l || 0),
            (this._next = e),
            e && (e._prev = this));
        }
        return (
          (e.prototype.modifier = function (e, t, r) {
            ((this.mSet = this.mSet || this.set),
              (this.set = rc),
              (this.m = e),
              (this.mt = r),
              (this.tween = t));
          }),
          e
        );
      })();
    (eA(
      eb +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
      function (e) {
        return (ef[e] = 1);
      },
    ),
      (er.TweenMax = er.TweenLite = t6),
      (er.TimelineLite = er.TimelineMax = tU),
      (_ = new tU({
        sortChildren: !1,
        defaults: z,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (R.stringFilter = tO));
    var rf = [],
      rh = {},
      rp = [],
      rm = 0,
      rg = 0,
      rv = function (e) {
        return (rh[e] || rp).map(function (e) {
          return e();
        });
      },
      rx = function () {
        var e = Date.now(),
          t = [];
        e - rm > 2 &&
          (rv("matchMediaInit"),
          rf.forEach(function (e) {
            var r,
              n,
              i,
              o,
              s = e.queries,
              a = e.conditions;
            for (n in s)
              ((r = w.matchMedia(s[n]).matches) && (i = 1), r !== a[n] && ((a[n] = r), (o = 1)));
            o && (e.revert(), i && t.push(e));
          }),
          rv("matchMediaRevert"),
          t.forEach(function (e) {
            return e.onMatch(e, function (t) {
              return e.add(null, t);
            });
          }),
          (rm = e),
          rv("matchMedia"));
      },
      rb = (function () {
        function e(e, t) {
          ((this.selector = t && to(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = rg++),
            e && this.add(e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, r) {
            I(e) && ((r = t), (t = e), (e = I));
            var n = this,
              i = function () {
                var e,
                  i = y,
                  o = n.selector;
                return (
                  i && i !== n && i.data.push(n),
                  r && (n.selector = to(r)),
                  (y = n),
                  (e = t.apply(n, arguments)),
                  I(e) && n._r.push(e),
                  (y = i),
                  (n.selector = o),
                  (n.isReverted = !1),
                  e
                );
              };
            return (
              (n.last = i),
              e === I
                ? i(n, function (e) {
                    return n.add(null, e);
                  })
                : e
                  ? (n[e] = i)
                  : i
            );
          }),
          (t.ignore = function (e) {
            var t = y;
            ((y = null), e(this), (y = t));
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof e
                  ? t.push.apply(t, r.getTweens())
                  : r instanceof t6 && !(r.parent && "nested" === r.parent.data) && t.push(r);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var r = this;
            if (e) {
              for (var n, i = r.getTweens(), o = r.data.length; o--;)
                "isFlip" === (n = r.data[o]).data &&
                  (n.revert(),
                  n.getChildren(!0, !0, !1).forEach(function (e) {
                    return i.splice(i.indexOf(e), 1);
                  }));
              for (
                i
                  .map(function (e) {
                    return {
                      g:
                        e._dur || e._delay || (e._sat && !e._sat.vars.immediateRender)
                          ? e.globalTime(0)
                          : -1 / 0,
                      t: e,
                    };
                  })
                  .sort(function (e, t) {
                    return t.g - e.g || -1 / 0;
                  })
                  .forEach(function (t) {
                    return t.t.revert(e);
                  }),
                  o = r.data.length;
                o--;
              )
                (n = r.data[o]) instanceof tU
                  ? "nested" !== n.data && (n.scrollTrigger && n.scrollTrigger.revert(), n.kill())
                  : n instanceof t6 || !n.revert || n.revert(e);
              (r._r.forEach(function (t) {
                return t(e, r);
              }),
                (r.isReverted = !0));
            } else
              this.data.forEach(function (e) {
                return e.kill && e.kill();
              });
            if ((this.clear(), t))
              for (var s = rf.length; s--;) rf[s].id === this.id && rf.splice(s, 1);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })(),
      ry = (function () {
        function e(e) {
          ((this.contexts = []), (this.scope = e), y && y.data.push(this));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, r) {
            L(e) || (e = { matches: e });
            var n,
              i,
              o,
              s = new rb(0, r || this.scope),
              a = (s.conditions = {});
            for (i in (y && !s.selector && (s.selector = y.selector),
            this.contexts.push(s),
            (t = s.add("onMatch", t)),
            (s.queries = e),
            e))
              "all" === i
                ? (o = 1)
                : (n = w.matchMedia(e[i])) &&
                  (0 > rf.indexOf(s) && rf.push(s),
                  (a[i] = n.matches) && (o = 1),
                  n.addListener ? n.addListener(rx) : n.addEventListener("change", rx));
            return (
              o &&
                t(s, function (e) {
                  return s.add(null, e);
                }),
              this
            );
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })(),
      r_ = {
        registerPlugin: function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          t.forEach(function (e) {
            return tx(e);
          });
        },
        timeline: function (e) {
          return new tU(e);
        },
        getTweensOf: function (e, t) {
          return _.getTweensOf(e, t);
        },
        getProperty: function (e, t, r, n) {
          B(e) && (e = ti(e)[0]);
          var i = e_(e || {}).get,
            o = r ? ej : eM;
          return (
            "native" === r && (r = ""),
            e
              ? t
                ? o(((em[t] && em[t].get) || i)(e, t, r, n))
                : function (t, r, n) {
                    return o(((em[t] && em[t].get) || i)(e, t, r, n));
                  }
              : e
          );
        },
        quickSetter: function (e, t, r) {
          if ((e = ti(e)).length > 1) {
            var n = e.map(function (e) {
                return rE.quickSetter(e, t, r);
              }),
              i = n.length;
            return function (e) {
              for (var t = i; t--;) n[t](e);
            };
          }
          e = e[0] || {};
          var o = em[t],
            s = e_(e),
            a = (s.harness && (s.harness.aliases || {})[t]) || t,
            l = o
              ? function (t) {
                  var n = new o();
                  ((C._pt = 0),
                    n.init(e, r ? t + r : t, C, 0, [e]),
                    n.render(1, n),
                    C._pt && rs(1, C));
                }
              : s.set(e, a);
          return o
            ? l
            : function (t) {
                return l(e, a, r ? t + r : t, s, 1);
              };
        },
        quickTo: function (e, t, r) {
          var n,
            i = rE.to(
              e,
              eN((((n = {})[t] = "+=0.1"), (n.paused = !0), (n.stagger = 0), n), r || {}),
            ),
            o = function (e, r, n) {
              return i.resetTo(t, e, r, n);
            };
          return ((o.tween = i), o);
        },
        isTweening: function (e) {
          return _.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return (e && e.ease && (e.ease = tD(e.ease, z.ease)), eP(z, e || {}));
        },
        config: function (e) {
          return eP(R, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            r = e.effect,
            n = e.plugins,
            i = e.defaults,
            o = e.extendTimeline;
          ((n || "").split(",").forEach(function (e) {
            return e && !em[e] && !er[e] && es(t + " effect requires " + e + " plugin.");
          }),
            (eg[t] = function (e, t, n) {
              return r(ti(e), eN(t || {}, i), n);
            }),
            o &&
              (tU.prototype[t] = function (e, r, n) {
                return this.add(eg[t](e, L(r) ? r : (n = r) && {}, this), n);
              }));
        },
        registerEase: function (e, t) {
          tR[e] = tD(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? tD(e, t) : tR;
        },
        getById: function (e) {
          return _.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var r,
            n,
            i = new tU(e);
          for (
            i.smoothChildTiming = Y(e.smoothChildTiming),
              _.remove(i),
              i._dp = 0,
              i._time = i._tTime = _._time,
              r = _._first;
            r;
          )
            ((n = r._next),
              (t || !(!r._dur && r instanceof t6 && r.vars.onComplete === r._targets[0])) &&
                eJ(i, r, r._start - r._delay),
              (r = n));
          return (eJ(_, i, 0), i);
        },
        context: function (e, t) {
          return e ? new rb(e, t) : y;
        },
        matchMedia: function (e) {
          return new ry(e);
        },
        matchMediaRefresh: function () {
          return (
            rf.forEach(function (e) {
              var t,
                r,
                n = e.conditions;
              for (r in n) n[r] && ((n[r] = !1), (t = 1));
              t && e.revert();
            }) || rx()
          );
        },
        addEventListener: function (e, t) {
          var r = rh[e] || (rh[e] = []);
          ~r.indexOf(t) || r.push(t);
        },
        removeEventListener: function (e, t) {
          var r = rh[e],
            n = r && r.indexOf(t);
          n >= 0 && r.splice(n, 1);
        },
        utils: {
          wrap: function e(t, r, n) {
            var i = r - t;
            return H(t)
              ? td(t, e(0, t.length), r)
              : e9(n, function (e) {
                  return ((i + ((e - t) % i)) % i) + t;
                });
          },
          wrapYoyo: function e(t, r, n) {
            var i = r - t,
              o = 2 * i;
            return H(t)
              ? td(t, e(0, t.length - 1), r)
              : e9(n, function (e) {
                  return ((e = (o + ((e - t) % o)) % o || 0), t + (e > i ? o - e : e));
                });
          },
          distribute: ta,
          random: tu,
          snap: tc,
          normalize: function (e, t, r) {
            return th(e, t, 0, 1, r);
          },
          getUnit: tt,
          clamp: function (e, t, r) {
            return e9(r, function (r) {
              return te(e, t, r);
            });
          },
          splitColor: t_,
          toArray: ti,
          selector: to,
          mapRange: th,
          pipe: function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (r) {
              return e(parseFloat(r)) + (t || tt(r));
            };
          },
          interpolate: function e(t, r, n, i) {
            var o = isNaN(t + r)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * r;
                };
            if (!o) {
              var s,
                a,
                l,
                c,
                u,
                d = B(t),
                f = {};
              if ((!0 === n && (i = 1) && (n = null), d)) ((t = { p: t }), (r = { p: r }));
              else if (H(t) && !H(r)) {
                for (l = [], u = (c = t.length) - 2, a = 1; a < c; a++) l.push(e(t[a - 1], t[a]));
                (c--,
                  (o = function (e) {
                    var t = Math.min(u, ~~(e *= c));
                    return l[t](e - t);
                  }),
                  (n = r));
              } else i || (t = eS(H(t) ? [] : {}, t));
              if (!l) {
                for (s in r) tJ.call(f, t, s, "get", r[s]);
                o = function (e) {
                  return rs(e, f) || (d ? t.p : t);
                };
              }
            }
            return e9(n, o);
          },
          shuffle: ts,
        },
        install: ei,
        effects: eg,
        ticker: tC,
        updateRoot: tU.updateRoot,
        plugins: em,
        globalTimeline: _,
        core: {
          PropTween: rd,
          globals: ea,
          Tween: t6,
          Timeline: tU,
          Animation: tY,
          getCache: e_,
          _removeLinkedListItem: eF,
          reverting: function () {
            return b;
          },
          context: function (e) {
            return (e && y && (y.data.push(e), (e._ctx = y)), y);
          },
          suppressOverwrites: function (e) {
            return (x = e);
          },
        },
      };
    (eA("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (r_[e] = t6[e]);
    }),
      tC.add(tU.updateRoot),
      (C = r_.to({}, { duration: 0 })));
    var rw = function (e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
        return r;
      },
      rA = function (e, t) {
        var r,
          n,
          i,
          o = e._targets;
        for (r in t)
          for (n = o.length; n--;)
            (i = e._ptLookup[n][r]) &&
              (i = i.d) &&
              (i._pt && (i = rw(i, r)), i && i.modifier && i.modifier(t[r], e, o[n], r));
      },
      rk = function (e, t) {
        return {
          name: e,
          headless: 1,
          rawVars: 1,
          init: function (e, r, n) {
            n._onInit = function (e) {
              var n, i;
              if (
                (B(r) &&
                  ((n = {}),
                  eA(r, function (e) {
                    return (n[e] = 1);
                  }),
                  (r = n)),
                t)
              ) {
                for (i in ((n = {}), r)) n[i] = t(r[i]);
                r = n;
              }
              rA(e, r);
            };
          },
        };
      },
      rE =
        r_.registerPlugin(
          {
            name: "attr",
            init: function (e, t, r, n, i) {
              var o, s, a;
              for (o in ((this.tween = r), t))
                ((a = e.getAttribute(o) || ""),
                  ((s = this.add(e, "setAttribute", (a || 0) + "", t[o], n, i, 0, 0, o)).op = o),
                  (s.b = a),
                  this._props.push(o));
            },
            render: function (e, t) {
              for (var r = t._pt; r;) (b ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next));
            },
          },
          {
            name: "endArray",
            headless: 1,
            init: function (e, t) {
              for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
            },
          },
          rk("roundProps", tl),
          rk("modifiers"),
          rk("snap", tc),
        ) || r_;
    ((t6.version = tU.version = rE.version = "3.15.0"),
      (E = 1),
      U() && tT(),
      tR.Power0,
      tR.Power1,
      tR.Power2,
      tR.Power3,
      tR.Power4,
      tR.Linear,
      tR.Quad,
      tR.Cubic,
      tR.Quart,
      tR.Quint,
      tR.Strong,
      tR.Elastic,
      tR.Back,
      tR.SteppedEase,
      tR.Bounce,
      tR.Sine,
      tR.Expo,
      tR.Circ);
    var rO,
      rC,
      rT,
      rR,
      rz,
      rM,
      rj,
      rN = {},
      rS = 180 / Math.PI,
      rP = Math.PI / 180,
      rD = Math.atan2,
      rB = /([A-Z])/g,
      rI = /(left|right|width|margin|padding|x)/i,
      rQ = /[\s,\(]\S/,
      rF = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
      rL = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
      },
      rY = function (e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
      },
      rU = function (e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
      },
      rW = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
          t,
        );
      },
      rK = function (e, t) {
        var r = t.s + t.c * e;
        t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      rH = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      rq = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      rV = function (e, t, r) {
        return (e.style[t] = r);
      },
      rX = function (e, t, r) {
        return e.style.setProperty(t, r);
      },
      rG = function (e, t, r) {
        return (e._gsap[t] = r);
      },
      rJ = function (e, t, r) {
        return (e._gsap.scaleX = e._gsap.scaleY = r);
      },
      rZ = function (e, t, r, n, i) {
        var o = e._gsap;
        ((o.scaleX = o.scaleY = r), o.renderTransform(i, o));
      },
      r$ = function (e, t, r, n, i) {
        var o = e._gsap;
        ((o[t] = r), o.renderTransform(i, o));
      },
      r0 = "transform",
      r1 = r0 + "Origin",
      r2 = function e(t, r) {
        var n = this,
          i = this.target,
          o = i.style,
          s = i._gsap;
        if (t in rN && o) {
          if (((this.tfm = this.tfm || {}), "transform" === t))
            return rF.transform.split(",").forEach(function (t) {
              return e.call(n, t, r);
            });
          if (
            (~(t = rF[t] || t).indexOf(",")
              ? t.split(",").forEach(function (e) {
                  return (n.tfm[e] = nu(i, e));
                })
              : (this.tfm[t] = s.x ? s[t] : nu(i, t)),
            t === r1 && (this.tfm.zOrigin = s.zOrigin),
            this.props.indexOf(r0) >= 0)
          )
            return;
          (s.svg && ((this.svgo = i.getAttribute("data-svg-origin")), this.props.push(r1, r, "")),
            (t = r0));
        }
        (o || r) && this.props.push(t, r, o[t]);
      },
      r5 = function (e) {
        e.translate &&
          (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
      },
      r4 = function () {
        var e,
          t,
          r = this.props,
          n = this.target,
          i = n.style,
          o = n._gsap;
        for (e = 0; e < r.length; e += 3)
          r[e + 1]
            ? 2 === r[e + 1]
              ? n[r[e]](r[e + 2])
              : (n[r[e]] = r[e + 2])
            : r[e + 2]
              ? (i[r[e]] = r[e + 2])
              : i.removeProperty(
                  "--" === r[e].substr(0, 2) ? r[e] : r[e].replace(rB, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (t in this.tfm) o[t] = this.tfm[t];
          (o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")),
            ((e = rM()) && e.isStart) ||
              i[r0] ||
              (r5(i),
              o.zOrigin &&
                i[r1] &&
                ((i[r1] += " " + o.zOrigin + "px"), (o.zOrigin = 0), o.renderTransform()),
              (o.uncache = 1)));
        }
      },
      r3 = function (e, t) {
        var r = { target: e, props: [], revert: r4, save: r2 };
        return (
          e._gsap || rE.core.getCache(e),
          t &&
            e.style &&
            e.nodeType &&
            t.split(",").forEach(function (e) {
              return r.save(e);
            }),
          r
        );
      },
      r7 = function (e, t) {
        var r = rO.createElementNS
          ? rO.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e)
          : rO.createElement(e);
        return r && r.style ? r : rO.createElement(e);
      },
      r6 = function e(t, r, n) {
        var i = getComputedStyle(t);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(rB, "-$1").toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && e(t, r9(r) || r, 1)) ||
          ""
        );
      },
      r8 = "O,Moz,ms,Ms,Webkit".split(","),
      r9 = function (e, t, r) {
        var n = (t || rR).style,
          i = 5;
        if (e in n && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(r8[i] + e in n););
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? r8[i] : "") + e;
      },
      ne = function () {
        "u" > typeof window &&
          window.document &&
          ((rC = (rO = window.document).documentElement),
          (rR = r7("div") || { style: {} }),
          r7("div"),
          (r1 = (r0 = r9(r0)) + "Origin"),
          (rR.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
          (rj = !!r9("perspective")),
          (rM = rE.core.reverting),
          (rT = 1));
      },
      nt = function (e) {
        var t,
          r = e.ownerSVGElement,
          n = r7("svg", (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
          i = e.cloneNode(!0);
        ((i.style.display = "block"), n.appendChild(i), rC.appendChild(n));
        try {
          t = i.getBBox();
        } catch (e) {}
        return (n.removeChild(i), rC.removeChild(n), t);
      },
      nr = function (e, t) {
        for (var r = t.length; r--;) if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
      },
      nn = function (e) {
        var t, r;
        try {
          t = e.getBBox();
        } catch (n) {
          ((t = nt(e)), (r = 1));
        }
        return (
          (t && (t.width || t.height)) || r || (t = nt(e)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +nr(e, ["x", "cx", "x1"]) || 0,
                y: +nr(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      ni = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && nn(e));
      },
      no = function (e, t) {
        if (t) {
          var r,
            n = e.style;
          (t in rN && t !== r1 && (t = r0),
            n.removeProperty
              ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t),
                n.removeProperty("--" === r ? t : t.replace(rB, "-$1").toLowerCase()))
              : n.removeAttribute(t));
        }
      },
      ns = function (e, t, r, n, i, o) {
        var s = new rd(e._pt, t, r, 0, 1, o ? rq : rH);
        return ((e._pt = s), (s.b = n), (s.e = i), e._props.push(r), s);
      },
      na = { deg: 1, rad: 1, turn: 1 },
      nl = { grid: 1, flex: 1 },
      nc = function e(t, r, n, i) {
        var o,
          s,
          a,
          l,
          c = parseFloat(n) || 0,
          u = (n + "").trim().substr((c + "").length) || "px",
          d = rR.style,
          f = rI.test(r),
          h = "svg" === t.tagName.toLowerCase(),
          p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
          m = "px" === i,
          g = "%" === i;
        if (i === u || !c || na[i] || na[u]) return c;
        if (
          ("px" === u || m || (c = e(t, r, n, "px")),
          (l = t.getCTM && ni(t)),
          (g || "%" === u) && (rN[r] || ~r.indexOf("adius")))
        )
          return (
            (o = l ? t.getBBox()[f ? "width" : "height"] : t[p]),
            ek(g ? (c / o) * 100 : (c / 100) * o)
          );
        if (
          ((d[f ? "width" : "height"] = 100 + (m ? u : i)),
          (s =
            ("rem" !== i && ~r.indexOf("adius")) || ("em" === i && t.appendChild && !h)
              ? t
              : t.parentNode),
          l && (s = (t.ownerSVGElement || {}).parentNode),
          (s && s !== rO && s.appendChild) || (s = rO.body),
          (a = s._gsap) && g && a.width && f && a.time === tC.time && !a.uncache)
        )
          return ek((c / a.width) * 100);
        if (g && ("height" === r || "width" === r)) {
          var v = t.style[r];
          ((t.style[r] = 100 + i), (o = t[p]), v ? (t.style[r] = v) : no(t, r));
        } else
          ((g || "%" === u) && !nl[r6(s, "display")] && (d.position = r6(t, "position")),
            s === t && (d.position = "static"),
            s.appendChild(rR),
            (o = rR[p]),
            s.removeChild(rR),
            (d.position = "absolute"));
        return (
          f && g && (((a = e_(s)).time = tC.time), (a.width = s[p])),
          ek(m ? (o * c) / 100 : o && c ? (100 / o) * c : 0)
        );
      },
      nu = function (e, t, r, n) {
        var i;
        return (
          rT || ne(),
          t in rF && "transform" !== t && ~(t = rF[t]).indexOf(",") && (t = t.split(",")[0]),
          rN[t] && "transform" !== t
            ? ((i = nw(e, n)),
              (i =
                "transformOrigin" !== t
                  ? i[t]
                  : i.svg
                    ? i.origin
                    : nA(r6(e, r1)) + " " + i.zOrigin + "px"))
            : (!(i = e.style[t]) || "auto" === i || n || ~(i + "").indexOf("calc(")) &&
              (i = (nm[t] && nm[t](e, t, r)) || r6(e, t) || ew(e, t) || +("opacity" === t)),
          r && !~(i + "").trim().indexOf(" ") ? nc(e, t, i, r) + r : i
        );
      },
      nd = function (e, t, r, n) {
        if (!r || "none" === r) {
          var i = r9(t, e, 1),
            o = i && r6(e, i, 1);
          o && o !== r ? ((t = i), (r = o)) : "borderColor" === t && (r = r6(e, "borderTopColor"));
        }
        var s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g,
          v = new rd(this._pt, e.style, t, 0, 1, ro),
          x = 0,
          b = 0;
        if (
          ((v.b = r),
          (v.e = n),
          (r += ""),
          "var(--" === (n += "").substring(0, 6) && (n = r6(e, n.substring(4, n.indexOf(")")))),
          "auto" === n &&
            ((d = e.style[t]),
            (e.style[t] = n),
            (n = r6(e, t) || n),
            d ? (e.style[t] = d) : no(e, t)),
          tO((s = [r, n])),
          (r = s[0]),
          (n = s[1]),
          (l = r.match(J) || []),
          (n.match(J) || []).length)
        ) {
          for (; (a = J.exec(n));)
            ((f = a[0]),
              (p = n.substring(x, a.index)),
              u
                ? (u = (u + 1) % 5)
                : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (u = 1),
              f !== (d = l[b++] || "") &&
                ((c = parseFloat(d) || 0),
                (g = d.substr((c + "").length)),
                "=" === f.charAt(1) && (f = eO(c, f) + g),
                (h = parseFloat(f)),
                (m = f.substr((h + "").length)),
                (x = J.lastIndex - m.length),
                m || ((m = m || R.units[t] || g), x === n.length && ((n += m), (v.e += m))),
                g !== m && (c = nc(e, t, d, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: p || 1 === b ? p : ",",
                  s: c,
                  c: h - c,
                  m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                })));
          v.c = x < n.length ? n.substring(x, n.length) : "";
        } else v.r = "display" === t && "none" === n ? rq : rH;
        return ($.test(n) && (v.e = 0), (this._pt = v), v);
      },
      nf = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
      nh = function (e) {
        var t = e.split(" "),
          r = t[0],
          n = t[1] || "50%";
        return (
          ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
            ((e = r), (r = n), (n = e)),
          (t[0] = nf[r] || r),
          (t[1] = nf[n] || n),
          t.join(" ")
        );
      },
      np = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var r,
            n,
            i,
            o = t.t,
            s = o.style,
            a = t.u,
            l = o._gsap;
          if ("all" === a || !0 === a) ((s.cssText = ""), (n = 1));
          else
            for (i = (a = a.split(",")).length; --i > -1;)
              (rN[(r = a[i])] && ((n = 1), (r = "transformOrigin" === r ? r1 : r0)), no(o, r));
          n &&
            (no(o, r0),
            l &&
              (l.svg && o.removeAttribute("transform"),
              (s.scale = s.rotate = s.translate = "none"),
              nw(o, 1),
              (l.uncache = 1),
              r5(s)));
        }
      },
      nm = {
        clearProps: function (e, t, r, n, i) {
          if ("isFromStart" !== i.data) {
            var o = (e._pt = new rd(e._pt, t, r, 0, 0, np));
            return ((o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1);
          }
        },
      },
      ng = [1, 0, 0, 1, 0, 0],
      nv = {},
      nx = function (e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
      },
      nb = function (e) {
        var t = r6(e, r0);
        return nx(t) ? ng : t.substr(7).match(G).map(ek);
      },
      ny = function (e, t) {
        var r,
          n,
          i,
          o,
          s = e._gsap || e_(e),
          a = e.style,
          l = nb(e);
        return s.svg && e.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(
              ",",
            )
            ? ng
            : l
          : (l !== ng ||
              e.offsetParent ||
              e === rC ||
              s.svg ||
              ((i = a.display),
              (a.display = "block"),
              ((r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width)) ||
                ((o = 1), (n = e.nextElementSibling), rC.appendChild(e)),
              (l = nb(e)),
              i ? (a.display = i) : no(e, "display"),
              o && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : rC.removeChild(e))),
            t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      n_ = function (e, t, r, n, i, o) {
        var s,
          a,
          l,
          c,
          u = e._gsap,
          d = i || ny(e, !0),
          f = u.xOrigin || 0,
          h = u.yOrigin || 0,
          p = u.xOffset || 0,
          m = u.yOffset || 0,
          g = d[0],
          v = d[1],
          x = d[2],
          b = d[3],
          y = d[4],
          _ = d[5],
          w = t.split(" "),
          A = parseFloat(w[0]) || 0,
          k = parseFloat(w[1]) || 0;
        (r
          ? d !== ng &&
            (a = g * b - v * x) &&
            ((l = (b / a) * A + (-x / a) * k + (x * _ - b * y) / a),
            (c = (-v / a) * A + (g / a) * k - (g * _ - v * y) / a),
            (A = l),
            (k = c))
          : ((A = (s = nn(e)).x + (~w[0].indexOf("%") ? (A / 100) * s.width : A)),
            (k = s.y + (~(w[1] || w[0]).indexOf("%") ? (k / 100) * s.height : k))),
          n || (!1 !== n && u.smooth)
            ? ((u.xOffset = p + ((y = A - f) * g + (_ = k - h) * x) - y),
              (u.yOffset = m + (y * v + _ * b) - _))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = A),
          (u.yOrigin = k),
          (u.smooth = !!n),
          (u.origin = t),
          (u.originIsAbsolute = !!r),
          (e.style[r1] = "0px 0px"),
          o &&
            (ns(o, u, "xOrigin", f, A),
            ns(o, u, "yOrigin", h, k),
            ns(o, u, "xOffset", p, u.xOffset),
            ns(o, u, "yOffset", m, u.yOffset)),
          e.setAttribute("data-svg-origin", A + " " + k));
      },
      nw = function (e, t) {
        var r = e._gsap || new tL(e);
        if ("x" in r && !t && !r.uncache) return r;
        var n,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g,
          v,
          x,
          b,
          y,
          _,
          w,
          A,
          k,
          E,
          O,
          C,
          T,
          z,
          M,
          j,
          N,
          S,
          P,
          D = e.style,
          B = r.scaleX < 0,
          I = getComputedStyle(e),
          Q = r6(e, r1) || "0";
        return (
          (n = i = o = l = c = u = d = f = h = 0),
          (s = a = 1),
          (r.svg = !!(e.getCTM && ni(e))),
          I.translate &&
            (("none" !== I.translate || "none" !== I.scale || "none" !== I.rotate) &&
              (D[r0] =
                ("none" !== I.translate
                  ? "translate3d(" + (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
                  : "") +
                ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
                ("none" !== I.scale ? "scale(" + I.scale.split(" ").join(",") + ") " : "") +
                ("none" !== I[r0] ? I[r0] : "")),
            (D.scale = D.rotate = D.translate = "none")),
          (g = ny(e, r.svg)),
          r.svg &&
            (r.uncache
              ? ((C = e.getBBox()),
                (Q = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
                (O = ""))
              : (O = !t && e.getAttribute("data-svg-origin")),
            n_(e, O || Q, !!O || r.originIsAbsolute, !1 !== r.smooth, g)),
          (p = r.xOrigin || 0),
          (m = r.yOrigin || 0),
          g !== ng &&
            ((y = g[0]),
            (_ = g[1]),
            (w = g[2]),
            (A = g[3]),
            (n = k = g[4]),
            (i = E = g[5]),
            6 === g.length
              ? ((s = Math.sqrt(y * y + _ * _)),
                (a = Math.sqrt(A * A + w * w)),
                (l = y || _ ? rD(_, y) * rS : 0),
                (d = w || A ? rD(w, A) * rS + l : 0) && (a *= Math.abs(Math.cos(d * rP))),
                r.svg && ((n -= p - (p * y + m * w)), (i -= m - (p * _ + m * A))))
              : ((P = g[6]),
                (N = g[7]),
                (z = g[8]),
                (M = g[9]),
                (j = g[10]),
                (S = g[11]),
                (n = g[12]),
                (i = g[13]),
                (o = g[14]),
                (c = (v = rD(P, j)) * rS),
                v &&
                  ((O = k * (x = Math.cos(-v)) + z * (b = Math.sin(-v))),
                  (C = E * x + M * b),
                  (T = P * x + j * b),
                  (z = -(k * b) + z * x),
                  (M = -(E * b) + M * x),
                  (j = -(P * b) + j * x),
                  (S = -(N * b) + S * x),
                  (k = O),
                  (E = C),
                  (P = T)),
                (u = (v = rD(-w, j)) * rS),
                v &&
                  ((O = y * (x = Math.cos(-v)) - z * (b = Math.sin(-v))),
                  (C = _ * x - M * b),
                  (T = w * x - j * b),
                  (S = A * b + S * x),
                  (y = O),
                  (_ = C),
                  (w = T)),
                (l = (v = rD(_, y)) * rS),
                v &&
                  ((O = y * (x = Math.cos(v)) + _ * (b = Math.sin(v))),
                  (C = k * x + E * b),
                  (_ = _ * x - y * b),
                  (E = E * x - k * b),
                  (y = O),
                  (k = C)),
                c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
                (s = ek(Math.sqrt(y * y + _ * _ + w * w))),
                (a = ek(Math.sqrt(E * E + P * P))),
                (d = Math.abs((v = rD(k, E))) > 2e-4 ? v * rS : 0),
                (h = S ? 1 / (S < 0 ? -S : S) : 0)),
            r.svg &&
              ((O = e.getAttribute("transform")),
              (r.forceCSS = e.setAttribute("transform", "") || !nx(r6(e, r0))),
              O && e.setAttribute("transform", O))),
          Math.abs(d) > 90 &&
            270 > Math.abs(d) &&
            (B
              ? ((s *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (d += d <= 0 ? 180 : -180))),
          (t = t || r.uncache),
          (r.x =
            n -
            ((r.xPercent =
              n &&
              ((!t && r.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (e.offsetWidth * r.xPercent) / 100
              : 0) +
            "px"),
          (r.y =
            i -
            ((r.yPercent =
              i &&
              ((!t && r.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetHeight * r.yPercent) / 100
              : 0) +
            "px"),
          (r.z = o + "px"),
          (r.scaleX = ek(s)),
          (r.scaleY = ek(a)),
          (r.rotation = ek(l) + "deg"),
          (r.rotationX = ek(c) + "deg"),
          (r.rotationY = ek(u) + "deg"),
          (r.skewX = d + "deg"),
          (r.skewY = f + "deg"),
          (r.transformPerspective = h + "px"),
          (r.zOrigin = parseFloat(Q.split(" ")[2]) || (!t && r.zOrigin) || 0) && (D[r1] = nA(Q)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = R.force3D),
          (r.renderTransform = r.svg ? nT : rj ? nC : nE),
          (r.uncache = 0),
          r
        );
      },
      nA = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      nk = function (e, t, r) {
        var n = tt(t);
        return ek(parseFloat(t) + parseFloat(nc(e, "x", r + "px", n))) + n;
      },
      nE = function (e, t) {
        ((t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), nC(e, t));
      },
      nO = "0deg",
      nC = function (e, t) {
        var r = t || this,
          n = r.xPercent,
          i = r.yPercent,
          o = r.x,
          s = r.y,
          a = r.z,
          l = r.rotation,
          c = r.rotationY,
          u = r.rotationX,
          d = r.skewX,
          f = r.skewY,
          h = r.scaleX,
          p = r.scaleY,
          m = r.transformPerspective,
          g = r.force3D,
          v = r.target,
          x = r.zOrigin,
          b = "",
          y = ("auto" === g && e && 1 !== e) || !0 === g;
        if (x && (u !== nO || c !== nO)) {
          var _,
            w = parseFloat(c) * rP,
            A = Math.sin(w),
            k = Math.cos(w);
          ((o = nk(v, o, -(A * (_ = Math.cos((w = parseFloat(u) * rP))) * x))),
            (s = nk(v, s, -(-Math.sin(w) * x))),
            (a = nk(v, a, -(k * _ * x) + x)));
        }
        ("0px" !== m && (b += "perspective(" + m + ") "),
          (n || i) && (b += "translate(" + n + "%, " + i + "%) "),
          (y || "0px" !== o || "0px" !== s || "0px" !== a) &&
            (b +=
              "0px" !== a || y
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + ") "),
          l !== nO && (b += "rotate(" + l + ") "),
          c !== nO && (b += "rotateY(" + c + ") "),
          u !== nO && (b += "rotateX(" + u + ") "),
          (d !== nO || f !== nO) && (b += "skew(" + d + ", " + f + ") "),
          (1 !== h || 1 !== p) && (b += "scale(" + h + ", " + p + ") "),
          (v.style[r0] = b || "translate(0, 0)"));
      },
      nT = function (e, t) {
        var r,
          n,
          i,
          o,
          s,
          a = t || this,
          l = a.xPercent,
          c = a.yPercent,
          u = a.x,
          d = a.y,
          f = a.rotation,
          h = a.skewX,
          p = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          x = a.xOrigin,
          b = a.yOrigin,
          y = a.xOffset,
          _ = a.yOffset,
          w = a.forceCSS,
          A = parseFloat(u),
          k = parseFloat(d);
        ((f = parseFloat(f)),
          (h = parseFloat(h)),
          (p = parseFloat(p)) && ((h += p = parseFloat(p)), (f += p)),
          f || h
            ? ((f *= rP),
              (h *= rP),
              (r = Math.cos(f) * m),
              (n = Math.sin(f) * m),
              (i = -(Math.sin(f - h) * g)),
              (o = Math.cos(f - h) * g),
              h &&
                ((p *= rP),
                (i *= s = Math.sqrt(1 + (s = Math.tan(h - p)) * s)),
                (o *= s),
                p && ((r *= s = Math.sqrt(1 + (s = Math.tan(p)) * s)), (n *= s))),
              (r = ek(r)),
              (n = ek(n)),
              (i = ek(i)),
              (o = ek(o)))
            : ((r = m), (o = g), (n = i = 0)),
          ((A && !~(u + "").indexOf("px")) || (k && !~(d + "").indexOf("px"))) &&
            ((A = nc(v, "x", u, "px")), (k = nc(v, "y", d, "px"))),
          (x || b || y || _) &&
            ((A = ek(A + x - (x * r + b * i) + y)), (k = ek(k + b - (x * n + b * o) + _))),
          (l || c) &&
            ((A = ek(A + (l / 100) * (s = v.getBBox()).width)), (k = ek(k + (c / 100) * s.height))),
          (s = "matrix(" + r + "," + n + "," + i + "," + o + "," + A + "," + k + ")"),
          v.setAttribute("transform", s),
          w && (v.style[r0] = s));
      },
      nR = function (e, t, r, n, i) {
        var o,
          s,
          a = B(i),
          l = parseFloat(i) * (a && ~i.indexOf("rad") ? rS : 1) - n,
          c = n + l + "deg";
        return (
          a &&
            ("short" === (o = i.split("_")[1]) &&
              (l %= 360) != l % 180 &&
              (l += l < 0 ? 360 : -360),
            "cw" === o && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : "ccw" === o && l > 0 && (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (e._pt = s = new rd(e._pt, t, r, n, l, rY)),
          (s.e = c),
          (s.u = "deg"),
          e._props.push(r),
          s
        );
      },
      nz = function (e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      },
      nM = function (e, t, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          c,
          u = nz({}, r._gsap),
          d = r.style;
        for (i in (u.svg
          ? ((o = r.getAttribute("transform")),
            r.setAttribute("transform", ""),
            (d[r0] = t),
            (n = nw(r, 1)),
            no(r, r0),
            r.setAttribute("transform", o))
          : ((o = getComputedStyle(r)[r0]), (d[r0] = t), (n = nw(r, 1)), (d[r0] = o)),
        rN))
          (o = u[i]) !== (s = n[i]) &&
            0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
            ((a = tt(o) !== (c = tt(s)) ? nc(r, i, o, c) : parseFloat(o)),
            (l = parseFloat(s)),
            (e._pt = new rd(e._pt, n, i, a, l - a, rL)),
            (e._pt.u = c || 0),
            e._props.push(i));
        nz(n, u);
      };
    eA("padding,margin,Width,Radius", function (e, t) {
      var r = "Right",
        n = "Bottom",
        i = "Left",
        o = (t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function (r) {
          return t < 2 ? e + r : "border" + r + e;
        });
      nm[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
        var s, a;
        if (arguments.length < 4)
          return 5 ===
            (a = (s = o.map(function (t) {
              return nu(e, t, r);
            })).join(" ")).split(s[0]).length
            ? s[0]
            : a;
        ((s = (n + "").split(" ")),
          (a = {}),
          o.forEach(function (e, t) {
            return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
          }),
          e.init(t, a, i));
      };
    });
    var nj = {
      name: "css",
      register: ne,
      targetTest: function (e) {
        return e.style && e.nodeType;
      },
      init: function (e, t, r, n, i) {
        var o,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g,
          v,
          x,
          b,
          y,
          _,
          w = this._props,
          A = e.style,
          k = r.vars.startAt;
        for (d in (rT || ne(),
        (this.styles = this.styles || r3(e)),
        (y = this.styles.props),
        (this.tween = r),
        t))
          if ("autoRound" !== d && ((s = t[d]), !(em[d] && t$(d, t, r, n, e, i)))) {
            if (
              ((c = typeof s),
              (u = nm[d]),
              "function" === c && (c = typeof (s = s.call(r, n, e, i))),
              "string" === c && ~s.indexOf("random(") && (s = tf(s)),
              u)
            )
              u(this, e, d, s, r) && (b = 1);
            else if ("--" === d.substr(0, 2))
              ((o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                (s += ""),
                (tk.lastIndex = 0),
                !tk.test(o) &&
                  ((f = tt(o)), (h = tt(s)) ? f !== h && (o = nc(e, d, o, h) + h) : f && (s += f)),
                this.add(A, "setProperty", o, s, n, i, 0, 0, d),
                w.push(d),
                y.push(d, 0, A[d]));
            else if ("undefined" !== c) {
              if (
                (k && d in k
                  ? (B((o = "function" == typeof k[d] ? k[d].call(r, n, e, i) : k[d])) &&
                      ~o.indexOf("random(") &&
                      (o = tf(o)),
                    tt(o + "") || "auto" === o || (o += R.units[d] || tt(nu(e, d)) || ""),
                    "=" === (o + "").charAt(1) && (o = nu(e, d)))
                  : (o = nu(e, d)),
                (l = parseFloat(o)),
                (p = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                (a = parseFloat(s)),
                d in rF &&
                  ("autoAlpha" === d &&
                    (1 === l && "hidden" === nu(e, "visibility") && a && (l = 0),
                    y.push("visibility", 0, A.visibility),
                    ns(
                      this,
                      A,
                      "visibility",
                      l ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a,
                    )),
                  "scale" !== d &&
                    "transform" !== d &&
                    ~(d = rF[d]).indexOf(",") &&
                    (d = d.split(",")[0])),
                (m = d in rN))
              ) {
                if (
                  (this.styles.save(d), (_ = s), "string" === c && "var(--" === s.substring(0, 6))
                ) {
                  if ("calc(" === (s = r6(e, s.substring(4, s.indexOf(")")))).substring(0, 5)) {
                    var E = e.style.perspective;
                    ((e.style.perspective = s),
                      (s = r6(e, "perspective")),
                      E ? (e.style.perspective = E) : no(e, "perspective"));
                  }
                  a = parseFloat(s);
                }
                if (
                  (g ||
                    (((v = e._gsap).renderTransform && !t.parseTransform) ||
                      nw(e, t.parseTransform),
                    (x = !1 !== t.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new rd(this._pt, A, r0, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                  "scale" === d)
                )
                  ((this._pt = new rd(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (p ? eO(v.scaleY, p + a) : a) - v.scaleY || 0,
                    rL,
                  )),
                    (this._pt.u = 0),
                    w.push("scaleY", d),
                    (d += "X"));
                else if ("transformOrigin" === d) {
                  (y.push(r1, 0, A[r1]),
                    (s = nh(s)),
                    v.svg
                      ? n_(e, s, 0, x, 0, this)
                      : ((h = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin &&
                          ns(this, v, "zOrigin", v.zOrigin, h),
                        ns(this, A, d, nA(o), nA(s))));
                  continue;
                } else if ("svgOrigin" === d) {
                  n_(e, s, 1, x, 0, this);
                  continue;
                } else if (d in nv) {
                  nR(this, v, d, l, p ? eO(l, p + s) : s);
                  continue;
                } else if ("smoothOrigin" === d) {
                  ns(this, v, "smooth", v.smooth, s);
                  continue;
                } else if ("force3D" === d) {
                  v[d] = s;
                  continue;
                } else if ("transform" === d) {
                  nM(this, s, e);
                  continue;
                }
              } else d in A || (d = r9(d) || d);
              if (m || ((a || 0 === a) && (l || 0 === l) && !rQ.test(s) && d in A))
                ((f = (o + "").substr((l + "").length)),
                  a || (a = 0),
                  (h = tt(s) || (d in R.units ? R.units[d] : f)),
                  f !== h && (l = nc(e, d, o, h)),
                  (this._pt = new rd(
                    this._pt,
                    m ? v : A,
                    d,
                    l,
                    (p ? eO(l, p + a) : a) - l,
                    !m && ("px" === h || "zIndex" === d) && !1 !== t.autoRound ? rK : rL,
                  )),
                  (this._pt.u = h || 0),
                  m && _ !== s
                    ? ((this._pt.b = o), (this._pt.e = _), (this._pt.r = rW))
                    : f !== h && "%" !== h && ((this._pt.b = o), (this._pt.r = rU)));
              else if (d in A) nd.call(this, e, d, o, p ? p + s : s);
              else if (d in e) this.add(e, d, o || e[d], p ? p + s : s, n, i);
              else if ("parseTransform" !== d) {
                eo(d, s);
                continue;
              }
              (m ||
                (d in A
                  ? y.push(d, 0, A[d])
                  : "function" == typeof e[d]
                    ? y.push(d, 2, e[d]())
                    : y.push(d, 1, o || e[d])),
                w.push(d));
            }
          }
        b && ru(this);
      },
      render: function (e, t) {
        if (t.tween._time || !rM()) for (var r = t._pt; r;) (r.r(e, r.d), (r = r._next));
        else t.styles.revert();
      },
      get: nu,
      aliases: rF,
      getSetter: function (e, t, r) {
        var n = rF[t];
        return (
          n && 0 > n.indexOf(",") && (t = n),
          t in rN && t !== r1 && (e._gsap.x || nu(e, "x"))
            ? r && rz === r
              ? "scale" === t
                ? rJ
                : rG
              : ((rz = r || {}), "scale" === t ? rZ : r$)
            : e.style && !F(e.style[t])
              ? rV
              : ~t.indexOf("-")
                ? rX
                : rr(e, t)
        );
      },
      core: { _removeProperty: no, _getMatrix: ny },
    };
    ((rE.utils.checkPrefix = r9),
      (rE.core.getStyleSaver = r3),
      (nP = eA(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (nS = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          rN[e] = 1;
        },
      )),
      eA(nS, function (e) {
        ((R.units[e] = "deg"), (nv[e] = 1));
      }),
      (rF[nP[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + nS),
      eA(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          rF[t[1]] = nP[t[0]];
        },
      ),
      eA(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          R.units[e] = "px";
        },
      ),
      rE.registerPlugin(nj));
    var nN = rE.registerPlugin(nj) || rE;
    (nN.core.Tween, e.s(["default", 0, nN], 89970));
    var nS,
      nP,
      nD,
      nB,
      nI,
      nQ,
      nF,
      nL,
      nY,
      nU,
      nW,
      nK,
      nH,
      nq,
      nV,
      nX = function () {
        return nD || ("u" > typeof window && (nD = window.gsap) && nD.registerPlugin && nD);
      },
      nG = 1,
      nJ = [],
      nZ = [],
      n$ = [],
      n0 = Date.now,
      n1 = function (e, t) {
        return t;
      },
      n2 = function () {
        var e = nW.core,
          t = e.bridge || {},
          r = e._scrollers,
          n = e._proxies;
        (r.push.apply(r, nZ),
          n.push.apply(n, n$),
          (nZ = r),
          (n$ = n),
          (n1 = function (e, r) {
            return t[e](r);
          }));
      },
      n5 = function (e, t) {
        return ~n$.indexOf(e) && n$[n$.indexOf(e) + 1][t];
      },
      n4 = function (e) {
        return !!~nK.indexOf(e);
      },
      n3 = function (e, t, r, n, i) {
        return e.addEventListener(t, r, { passive: !1 !== n, capture: !!i });
      },
      n7 = function (e, t, r, n) {
        return e.removeEventListener(t, r, !!n);
      },
      n6 = "scrollLeft",
      n8 = "scrollTop",
      n9 = function () {
        return (nH && nH.isPressed) || nZ.cache++;
      },
      ie = function (e, t) {
        var r = function r(n) {
          if (n || 0 === n) {
            nG && (nI.history.scrollRestoration = "manual");
            var i = nH && nH.isPressed;
            (e((n = r.v = Math.round(n) || (nH && nH.iOS ? 1 : 0))),
              (r.cacheID = nZ.cache),
              i && n1("ss", n));
          } else
            (t || nZ.cache !== r.cacheID || n1("ref")) && ((r.cacheID = nZ.cache), (r.v = e()));
          return r.v + r.offset;
        };
        return ((r.offset = 0), e && r);
      },
      it = {
        s: n6,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ie(function (e) {
          return arguments.length
            ? nI.scrollTo(e, ir.sc())
            : nI.pageXOffset || nQ[n6] || nF[n6] || nL[n6] || 0;
        }),
      },
      ir = {
        s: n8,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: it,
        sc: ie(function (e) {
          return arguments.length
            ? nI.scrollTo(it.sc(), e)
            : nI.pageYOffset || nQ[n8] || nF[n8] || nL[n8] || 0;
        }),
      },
      ii = function (e, t) {
        return (
          ((t && t._ctx && t._ctx.selector) || nD.utils.toArray)(e)[0] ||
          ("string" == typeof e && !1 !== nD.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      io = function (e, t) {
        for (var r = t.length; r--;) if (t[r] === e || t[r].contains(e)) return !0;
        return !1;
      },
      is = function (e, t) {
        var r = t.s,
          n = t.sc;
        n4(e) && (e = nQ.scrollingElement || nF);
        var i = nZ.indexOf(e),
          o = n === ir.sc ? 1 : 2;
        (~i || (i = nZ.push(e) - 1), nZ[i + o] || n3(e, "scroll", n9));
        var s = nZ[i + o],
          a =
            s ||
            (nZ[i + o] =
              ie(n5(e, r), !0) ||
              (n4(e)
                ? n
                : ie(function (t) {
                    return arguments.length ? (e[r] = t) : e[r];
                  })));
        return (
          (a.target = e),
          s || (a.smooth = "smooth" === nD.getProperty(e, "scrollBehavior")),
          a
        );
      },
      ia = function (e, t, r) {
        var n = e,
          i = e,
          o = n0(),
          s = o,
          a = t || 50,
          l = Math.max(500, 3 * a),
          c = function (e, t) {
            var l = n0();
            t || l - o > a
              ? ((i = n), (n = e), (s = o), (o = l))
              : r
                ? (n += e)
                : (n = i + ((e - i) / (l - s)) * (o - s));
          };
        return {
          update: c,
          reset: function () {
            ((i = n = r ? 0 : n), (s = o = 0));
          },
          getVelocity: function (e) {
            var t = s,
              a = i,
              u = n0();
            return (
              (e || 0 === e) && e !== n && c(e),
              o === s || u - s > l ? 0 : ((n + (r ? a : -a)) / ((r ? u : o) - t)) * 1e3
            );
          },
        };
      },
      il = function (e, t) {
        return (
          t && !e._gsapAllow && !1 !== e.cancelable && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      ic = function (e) {
        var t = Math.max.apply(Math, e),
          r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r;
      },
      iu = function () {
        (nW = nD.core.globals().ScrollTrigger) && nW.core && n2();
      },
      id = function (e) {
        return (
          (nD = e || nX()),
          !nB &&
            nD &&
            "u" > typeof document &&
            document.body &&
            ((nI = window),
            (nF = (nQ = document).documentElement),
            (nL = nQ.body),
            (nK = [nI, nQ, nF, nL]),
            nD.utils.clamp,
            (nV = nD.core.context || function () {}),
            (nU = "onpointerenter" in nL ? "pointer" : "mouse"),
            (nY = ih.isTouch =
              nI.matchMedia && nI.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : 2 *
                  ("ontouchstart" in nI ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0)),
            (nq = ih.eventTypes =
              (
                "ontouchstart" in nF
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : !("onpointerdown" in nF)
                    ? "mousedown,mousemove,mouseup,mouseup"
                    : "pointerdown,pointermove,pointercancel,pointerup"
              ).split(",")),
            setTimeout(function () {
              return (nG = 0);
            }, 500),
            (nB = 1)),
          nW || iu(),
          nB
        );
      };
    ((it.op = ir), (nZ.cache = 0));
    var ih = (function () {
      var e;
      function t(e) {
        this.init(e);
      }
      return (
        (t.prototype.init = function (e) {
          (nB || id(nD) || console.warn("Please gsap.registerPlugin(Observer)"), nW || iu());
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            i = e.target,
            o = e.lineHeight,
            s = e.debounce,
            a = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            d = e.wheelSpeed,
            f = e.event,
            h = e.onDragStart,
            p = e.onDragEnd,
            m = e.onDrag,
            g = e.onPress,
            v = e.onRelease,
            x = e.onRight,
            b = e.onLeft,
            y = e.onUp,
            _ = e.onDown,
            w = e.onChangeX,
            A = e.onChangeY,
            k = e.onChange,
            E = e.onToggleX,
            O = e.onToggleY,
            C = e.onHover,
            T = e.onHoverEnd,
            R = e.onMove,
            z = e.ignoreCheck,
            M = e.isNormalizer,
            j = e.onGestureStart,
            N = e.onGestureEnd,
            S = e.onWheel,
            P = e.onEnable,
            D = e.onDisable,
            B = e.onClick,
            I = e.scrollSpeed,
            Q = e.capture,
            F = e.allowClicks,
            L = e.lockAxis,
            Y = e.onLockAxis;
          ((this.target = i = ii(i) || nF),
            (this.vars = e),
            u && (u = nD.utils.toArray(u)),
            (t = t || 1e-9),
            (r = r || 0),
            (d = d || 1),
            (I = I || 1),
            (n = n || "wheel,touch,pointer"),
            (s = !1 !== s),
            o || (o = parseFloat(nI.getComputedStyle(nL).lineHeight) || 22));
          var U,
            W,
            K,
            H,
            q,
            V,
            X,
            G = this,
            J = 0,
            Z = 0,
            $ = e.passive || (!a && !1 !== e.passive),
            ee = is(i, it),
            et = is(i, ir),
            er = ee(),
            en = et(),
            ei = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === nq[0],
            eo = n4(i),
            es = i.ownerDocument || nQ,
            ea = [0, 0, 0],
            el = [0, 0, 0],
            ec = 0,
            eu = function () {
              return (ec = n0());
            },
            ed = function (e, t) {
              return (
                ((G.event = e) && u && io(e.target, u)) ||
                (t && ei && "touch" !== e.pointerType) ||
                (z && z(e, t))
              );
            },
            ef = function () {
              var e = (G.deltaX = ic(ea)),
                r = (G.deltaY = ic(el)),
                n = Math.abs(e) >= t,
                i = Math.abs(r) >= t;
              (k && (n || i) && k(G, e, r, ea, el),
                n &&
                  (x && G.deltaX > 0 && x(G),
                  b && G.deltaX < 0 && b(G),
                  w && w(G),
                  E && G.deltaX < 0 != J < 0 && E(G),
                  (J = G.deltaX),
                  (ea[0] = ea[1] = ea[2] = 0)),
                i &&
                  (_ && G.deltaY > 0 && _(G),
                  y && G.deltaY < 0 && y(G),
                  A && A(G),
                  O && G.deltaY < 0 != Z < 0 && O(G),
                  (Z = G.deltaY),
                  (el[0] = el[1] = el[2] = 0)),
                (H || K) && (R && R(G), K && (h && 1 === K && h(G), m && m(G), (K = 0)), (H = !1)),
                V && ((V = !1), 1) && Y && Y(G),
                q && (S(G), (q = !1)),
                (U = 0));
            },
            eh = function (e, t, r) {
              ((ea[r] += e),
                (el[r] += t),
                G._vx.update(e),
                G._vy.update(t),
                s ? U || (U = requestAnimationFrame(ef)) : ef());
            },
            ep = function (e, t) {
              (L && !X && ((G.axis = X = Math.abs(e) > Math.abs(t) ? "x" : "y"), (V = !0)),
                "y" !== X && ((ea[2] += e), G._vx.update(e, !0)),
                "x" !== X && ((el[2] += t), G._vy.update(t, !0)),
                s ? U || (U = requestAnimationFrame(ef)) : ef());
            },
            em = function (e) {
              if (!ed(e, 1)) {
                var t = (e = il(e, a)).clientX,
                  n = e.clientY,
                  i = t - G.x,
                  o = n - G.y,
                  s = G.isDragging;
                ((G.x = t),
                  (G.y = n),
                  (s ||
                    ((i || o) && (Math.abs(G.startX - t) >= r || Math.abs(G.startY - n) >= r))) &&
                    (K || (K = s ? 2 : 1), s || (G.isDragging = !0), ep(i, o)));
              }
            },
            eg = (G.onPress = function (e) {
              ed(e, 1) ||
                (e && e.button) ||
                ((G.axis = X = null),
                W.pause(),
                (G.isPressed = !0),
                (e = il(e)),
                (J = Z = 0),
                (G.startX = G.x = e.clientX),
                (G.startY = G.y = e.clientY),
                G._vx.reset(),
                G._vy.reset(),
                n3(M ? i : es, nq[1], em, $, !0),
                (G.deltaX = G.deltaY = 0),
                g && g(G));
            }),
            ev = (G.onRelease = function (e) {
              if (!ed(e, 1)) {
                n7(M ? i : es, nq[1], em, !0);
                var t = !isNaN(G.y - G.startY),
                  r = G.isDragging,
                  n = r && (Math.abs(G.x - G.startX) > 3 || Math.abs(G.y - G.startY) > 3),
                  o = il(e);
                (!n &&
                  t &&
                  (G._vx.reset(),
                  G._vy.reset(),
                  a &&
                    F &&
                    nD.delayedCall(0.08, function () {
                      if (n0() - ec > 300 && !e.defaultPrevented) {
                        if (e.target.click) e.target.click();
                        else if (es.createEvent) {
                          var t = es.createEvent("MouseEvents");
                          (t.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            nI,
                            1,
                            o.screenX,
                            o.screenY,
                            o.clientX,
                            o.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            e.target.dispatchEvent(t));
                        }
                      }
                    })),
                  (G.isDragging = G.isGesturing = G.isPressed = !1),
                  l && r && !M && W.restart(!0),
                  K && ef(),
                  p && r && p(G),
                  v && v(G, n));
              }
            }),
            ex = function (e) {
              return (
                e.touches && e.touches.length > 1 && (G.isGesturing = !0) && j(e, G.isDragging)
              );
            },
            eb = function () {
              return ((G.isGesturing = !1), N(G));
            },
            ey = function (e) {
              if (!ed(e)) {
                var t = ee(),
                  r = et();
                (eh((t - er) * I, (r - en) * I, 1), (er = t), (en = r), l && W.restart(!0));
              }
            },
            e_ = function (e) {
              if (!ed(e)) {
                ((e = il(e, a)), S && (q = !0));
                var t = (1 === e.deltaMode ? o : 2 === e.deltaMode ? nI.innerHeight : 1) * d;
                (eh(e.deltaX * t, e.deltaY * t, 0), l && !M && W.restart(!0));
              }
            },
            ew = function (e) {
              if (!ed(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - G.x,
                  i = r - G.y;
                ((G.x = t), (G.y = r), (H = !0), l && W.restart(!0), (n || i) && ep(n, i));
              }
            },
            eA = function (e) {
              ((G.event = e), C(G));
            },
            ek = function (e) {
              ((G.event = e), T(G));
            },
            eE = function (e) {
              return ed(e) || (il(e, a) && B(G));
            };
          ((W = G._dc =
            nD
              .delayedCall(c || 0.25, function () {
                (G._vx.reset(), G._vy.reset(), W.pause(), l && l(G));
              })
              .pause()),
            (G.deltaX = G.deltaY = 0),
            (G._vx = ia(0, 50, !0)),
            (G._vy = ia(0, 50, !0)),
            (G.scrollX = ee),
            (G.scrollY = et),
            (G.isDragging = G.isGesturing = G.isPressed = !1),
            nV(this),
            (G.enable = function (e) {
              return (
                !G.isEnabled &&
                  (n3(eo ? es : i, "scroll", n9),
                  n.indexOf("scroll") >= 0 && n3(eo ? es : i, "scroll", ey, $, Q),
                  n.indexOf("wheel") >= 0 && n3(i, "wheel", e_, $, Q),
                  ((n.indexOf("touch") >= 0 && nY) || n.indexOf("pointer") >= 0) &&
                    (n3(i, nq[0], eg, $, Q),
                    n3(es, nq[2], ev),
                    n3(es, nq[3], ev),
                    F && n3(i, "click", eu, !0, !0),
                    B && n3(i, "click", eE),
                    j && n3(es, "gesturestart", ex),
                    N && n3(es, "gestureend", eb),
                    C && n3(i, nU + "enter", eA),
                    T && n3(i, nU + "leave", ek),
                    R && n3(i, nU + "move", ew)),
                  (G.isEnabled = !0),
                  (G.isDragging = G.isGesturing = G.isPressed = H = K = !1),
                  G._vx.reset(),
                  G._vy.reset(),
                  (er = ee()),
                  (en = et()),
                  e && e.type && eg(e),
                  P && P(G)),
                G
              );
            }),
            (G.disable = function () {
              G.isEnabled &&
                (nJ.filter(function (e) {
                  return e !== G && n4(e.target);
                }).length || n7(eo ? es : i, "scroll", n9),
                G.isPressed && (G._vx.reset(), G._vy.reset(), n7(M ? i : es, nq[1], em, !0)),
                n7(eo ? es : i, "scroll", ey, Q),
                n7(i, "wheel", e_, Q),
                n7(i, nq[0], eg, Q),
                n7(es, nq[2], ev),
                n7(es, nq[3], ev),
                n7(i, "click", eu, !0),
                n7(i, "click", eE),
                n7(es, "gesturestart", ex),
                n7(es, "gestureend", eb),
                n7(i, nU + "enter", eA),
                n7(i, nU + "leave", ek),
                n7(i, nU + "move", ew),
                (G.isEnabled = G.isPressed = G.isDragging = !1),
                D && D(G));
            }),
            (G.kill = G.revert =
              function () {
                G.disable();
                var e = nJ.indexOf(G);
                (e >= 0 && nJ.splice(e, 1), nH === G && (nH = 0));
              }),
            nJ.push(G),
            M && n4(i) && (nH = G),
            G.enable(f));
        }),
        (e = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n));
          }
        })(t.prototype, e),
        t
      );
    })();
    ((ih.version = "3.15.0"),
      (ih.create = function (e) {
        return new ih(e);
      }),
      (ih.register = id),
      (ih.getAll = function () {
        return nJ.slice();
      }),
      (ih.getById = function (e) {
        return nJ.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      nX() && nD.registerPlugin(ih));
    var ip,
      im,
      ig,
      iv,
      ix,
      ib,
      iy,
      i_,
      iw,
      iA,
      ik,
      iE,
      iO,
      iC,
      iT,
      iR,
      iz,
      iM,
      ij,
      iN,
      iS,
      iP,
      iD,
      iB,
      iI,
      iQ,
      iF,
      iL,
      iY,
      iU,
      iW,
      iK,
      iH,
      iq,
      iV,
      iX,
      iG,
      iJ,
      iZ = 1,
      i$ = Date.now,
      i0 = i$(),
      i1 = 0,
      i2 = 0,
      i5 = function (e, t, r) {
        var n = oa(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return ((r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e);
      },
      i4 = function (e, t) {
        return t && (!oa(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e;
      },
      i3 = function () {
        return (iC = 1);
      },
      i7 = function () {
        return (iC = 0);
      },
      i6 = function (e) {
        return e;
      },
      i8 = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      i9 = function () {
        return "u" > typeof window;
      },
      oe = function () {
        return ip || (i9() && (ip = window.gsap) && ip.registerPlugin && ip);
      },
      ot = function (e) {
        return !!~iy.indexOf(e);
      },
      or = function (e) {
        return ("Height" === e ? iW : ig["inner" + e]) || ix["client" + e] || ib["client" + e];
      },
      on = function (e) {
        return (
          n5(e, "getBoundingClientRect") ||
          (ot(e)
            ? function () {
                return ((su.width = ig.innerWidth), (su.height = iW), su);
              }
            : function () {
                return oR(e);
              })
        );
      },
      oi = function (e, t, r) {
        var n = r.d,
          i = r.d2,
          o = r.a;
        return (o = n5(e, "getBoundingClientRect"))
          ? function () {
              return o()[n];
            }
          : function () {
              return (t ? or(i) : e["client" + i]) || 0;
            };
      },
      oo = function (e, t) {
        var r = t.s,
          n = t.d2,
          i = t.d,
          o = t.a;
        return Math.max(
          0,
          (o = n5(e, (r = "scroll" + n)))
            ? o() - on(e)()[i]
            : ot(e)
              ? (ix[r] || ib[r]) - or(n)
              : e[r] - e["offset" + n],
        );
      },
      os = function (e, t) {
        for (var r = 0; r < ij.length; r += 3)
          (!t || ~t.indexOf(ij[r + 1])) && e(ij[r], ij[r + 1], ij[r + 2]);
      },
      oa = function (e) {
        return "string" == typeof e;
      },
      ol = function (e) {
        return "function" == typeof e;
      },
      oc = function (e) {
        return "number" == typeof e;
      },
      ou = function (e) {
        return "object" == typeof e;
      },
      od = function (e, t, r) {
        return e && e.progress(+!t) && r && e.pause();
      },
      of = function (e, t, r) {
        if (e.enabled) {
          var n = e._ctx
            ? e._ctx.add(function () {
                return t(e, r);
              })
            : t(e, r);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      },
      oh = Math.abs,
      op = "left",
      om = "right",
      og = "bottom",
      ov = "width",
      ox = "height",
      ob = "Right",
      oy = "Left",
      o_ = "Bottom",
      ow = "padding",
      oA = "margin",
      ok = "Width",
      oE = "Height",
      oO = function (e) {
        return ig.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
      },
      oC = function (e) {
        var t = oO(e).position;
        e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
      },
      oT = function (e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e;
      },
      oR = function (e, t) {
        var r =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== oO(e)[iT] &&
            ip
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          n = e.getBoundingClientRect
            ? e.getBoundingClientRect()
            : e.scrollingElement.getBoundingClientRect();
        return (r && r.progress(0).kill(), n);
      },
      oz = function (e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
      },
      oM = function (e) {
        var t,
          r = [],
          n = e.labels,
          i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r;
      },
      oj = function (e) {
        var t = ip.utils.snap(e),
          r =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return r
          ? function (e, n, i) {
              var o;
              if ((void 0 === i && (i = 0.001), !n)) return t(e);
              if (n > 0) {
                for (e -= i, o = 0; o < r.length; o++) if (r[o] >= e) return r[o];
                return r[o - 1];
              }
              for (o = r.length, e += i; o--;) if (r[o] <= e) return r[o];
              return r[0];
            }
          : function (r, n, i) {
              void 0 === i && (i = 0.001);
              var o = t(r);
              return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : t(n < 0 ? r - e : r + e);
            };
      },
      oN = function (e, t, r, n) {
        return r.split(",").forEach(function (r) {
          return e(t, r, n);
        });
      },
      oS = function (e, t, r, n, i) {
        return e.addEventListener(t, r, { passive: !n, capture: !!i });
      },
      oP = function (e, t, r, n) {
        return e.removeEventListener(t, r, !!n);
      },
      oD = function (e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
      },
      oB = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      oI = { toggleActions: "play", anticipatePin: 0 },
      oQ = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      oF = function (e, t) {
        if (oa(e)) {
          var r = e.indexOf("="),
            n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
          (~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
            (e =
              n +
              (e in oQ
                ? oQ[e] * t
                : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0)));
        }
        return e;
      },
      oL = function (e, t, r, n, i, o, s, a) {
        var l = i.startColor,
          c = i.endColor,
          u = i.fontSize,
          d = i.indent,
          f = i.fontWeight,
          h = iv.createElement("div"),
          p = ot(r) || "fixed" === n5(r, "pinType"),
          m = -1 !== e.indexOf("scroller"),
          g = p ? ib : "IFRAME" === r.tagName ? r.contentDocument.body : r,
          v = -1 !== e.indexOf("start"),
          x = v ? l : c,
          b =
            "border-color:" +
            x +
            ";font-size:" +
            u +
            ";color:" +
            x +
            ";font-weight:" +
            f +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (b += "position:" + ((m || a) && p ? "fixed;" : "absolute;")),
          (m || a || !p) && (b += (n === ir ? om : og) + ":" + (o + parseFloat(d)) + "px;"),
          s && (b += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
          (h._isStart = v),
          h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
          (h.style.cssText = b),
          (h.innerText = t || 0 === t ? e + "-" + t : e),
          g.children[0] ? g.insertBefore(h, g.children[0]) : g.appendChild(h),
          (h._offset = h["offset" + n.op.d2]),
          oY(h, 0, n, v),
          h
        );
      },
      oY = function (e, t, r, n) {
        var i = { display: "block" },
          o = r[n ? "os2" : "p2"],
          s = r[n ? "p2" : "os2"];
        ((e._isFlipped = n),
          (i[r.a + "Percent"] = n ? -100 : 0),
          (i[r.a] = n ? "1px" : 0),
          (i["border" + o + ok] = 1),
          (i["border" + s + ok] = 0),
          (i[r.p] = t + "px"),
          ip.set(e, i));
      },
      oU = [],
      oW = {},
      oK = function () {
        return i$() - i1 > 34 && (iV || (iV = requestAnimationFrame(st)));
      },
      oH = function () {
        (iD && iD.isPressed && !(iD.startX > ib.clientWidth)) ||
          (nZ.cache++,
          iD ? iV || (iV = requestAnimationFrame(st)) : st(),
          i1 || oZ("scrollStart"),
          (i1 = i$()));
      },
      oq = function () {
        ((iQ = ig.innerWidth), (iI = ig.innerHeight));
      },
      oV = function (e) {
        (nZ.cache++,
          (!0 === e ||
            (!iO &&
              !iP &&
              !iv.fullscreenElement &&
              !iv.webkitFullscreenElement &&
              (!iB ||
                iQ !== ig.innerWidth ||
                Math.abs(ig.innerHeight - iI) > 0.25 * ig.innerHeight))) &&
            i_.restart(!0));
      },
      oX = {},
      oG = [],
      oJ = function e() {
        return oP(sv, "scrollEnd", e) || o8(!0);
      },
      oZ = function (e) {
        return (
          (oX[e] &&
            oX[e].map(function (e) {
              return e();
            })) ||
          oG
        );
      },
      o$ = [],
      o0 = function (e) {
        for (var t = 0; t < o$.length; t += 5)
          (!e || (o$[t + 4] && o$[t + 4].query === e)) &&
            ((o$[t].style.cssText = o$[t + 1]),
            o$[t].getBBox && o$[t].setAttribute("transform", o$[t + 2] || ""),
            (o$[t + 3].uncache = 1));
      },
      o1 = function () {
        return nZ.forEach(function (e) {
          return ol(e) && ++e.cacheID && (e.rec = e());
        });
      },
      o2 = function (e, t) {
        var r;
        for (iR = 0; iR < oU.length; iR++)
          (r = oU[iR]) && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
        ((iK = !0), t && o0(t), t || oZ("revert"));
      },
      o5 = function (e, t) {
        (nZ.cache++,
          (t || !iX) &&
            nZ.forEach(function (e) {
              return ol(e) && e.cacheID++ && (e.rec = 0);
            }),
          oa(e) && (ig.history.scrollRestoration = iY = e));
      },
      o4 = 0,
      o3 = function () {
        if (iG !== o4) {
          var e = (iG = o4);
          requestAnimationFrame(function () {
            return e === o4 && o8(!0);
          });
        }
      },
      o7 = function () {
        (ib.appendChild(iU), (iW = (!iD && iU.offsetHeight) || ig.innerHeight), ib.removeChild(iU));
      },
      o6 = function (e) {
        return iw(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (t) {
          return (t.style.display = e ? "none" : "block");
        });
      },
      o8 = function (e, t) {
        if (((ix = iv.documentElement), (ib = iv.body), (iy = [ig, iv, ix, ib]), i1 && !e && !iK))
          return void oS(sv, "scrollEnd", oJ);
        (o7(), (iX = sv.isRefreshing = !0), iK || o1());
        var r = oZ("refreshInit");
        (iN && sv.sort(),
          t || o2(),
          nZ.forEach(function (e) {
            ol(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          oU.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (iK = !1),
          oU.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh());
            }
          }),
          (iH = 1),
          o6(!0),
          oU.forEach(function (e) {
            var t = oo(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              n = e._startClamp && e.start >= t;
            (r || n) &&
              e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0);
          }),
          o6(!1),
          (iH = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          nZ.forEach(function (e) {
            ol(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          o5(iY, 1),
          i_.pause(),
          o4++,
          (iX = 2),
          st(2),
          oU.forEach(function (e) {
            return ol(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (iX = sv.isRefreshing = !1),
          oZ("refresh"));
      },
      o9 = 0,
      se = 1,
      st = function (e) {
        if (2 === e || (!iX && !iK)) {
          ((sv.isUpdating = !0), iJ && iJ.update(0));
          var t = oU.length,
            r = i$(),
            n = r - i0 >= 50,
            i = t && oU[0].scroll();
          if (
            ((se = o9 > i ? -1 : 1),
            iX || (o9 = i),
            n && (i1 && !iC && r - i1 > 200 && ((i1 = 0), oZ("scrollEnd")), (ik = i0), (i0 = r)),
            se < 0)
          ) {
            for (iR = t; iR-- > 0;) oU[iR] && oU[iR].update(0, n);
            se = 1;
          } else for (iR = 0; iR < t; iR++) oU[iR] && oU[iR].update(0, n);
          sv.isUpdating = !1;
        }
        iV = 0;
      },
      sr = [
        op,
        "top",
        og,
        om,
        oA + o_,
        oA + ob,
        oA + "Top",
        oA + oy,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      sn = sr.concat([
        ov,
        ox,
        "boxSizing",
        "max" + ok,
        "max" + oE,
        "position",
        oA,
        ow,
        ow + "Top",
        ow + ob,
        ow + o_,
        ow + oy,
      ]),
      si = function (e, t, r) {
        sa(r);
        var n = e._gsap;
        if (n.spacerIsNative) sa(n.spacerState);
        else if (e._gsap.swappedIn) {
          var i = t.parentNode;
          i && (i.insertBefore(e, t), i.removeChild(t));
        }
        e._gsap.swappedIn = !1;
      },
      so = function (e, t, r, n) {
        if (!e._gsap.swappedIn) {
          for (var i, o = sr.length, s = t.style, a = e.style; o--;) s[(i = sr[o])] = r[i];
          ((s.position = "absolute" === r.position ? "absolute" : "relative"),
            "inline" === r.display && (s.display = "inline-block"),
            (a[og] = a[om] = "auto"),
            (s.flexBasis = r.flexBasis || "auto"),
            (s.overflow = "visible"),
            (s.boxSizing = "border-box"),
            (s[ov] = oz(e, it) + "px"),
            (s[ox] = oz(e, ir) + "px"),
            (s[ow] = a[oA] = a.top = a[op] = "0"),
            sa(n),
            (a[ov] = a["max" + ok] = r[ov]),
            (a[ox] = a["max" + oE] = r[ox]),
            (a[ow] = r[ow]),
            e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0));
        }
      },
      ss = /([A-Z])/g,
      sa = function (e) {
        if (e) {
          var t,
            r,
            n = e.t.style,
            i = e.length,
            o = 0;
          for ((e.t._gsap || ip.core.getCache(e.t)).uncache = 1; o < i; o += 2)
            ((r = e[o + 1]),
              (t = e[o]),
              r ? (n[t] = r) : n[t] && n.removeProperty(t.replace(ss, "-$1").toLowerCase()));
        }
      },
      sl = function (e) {
        for (var t = sn.length, r = e.style, n = [], i = 0; i < t; i++) n.push(sn[i], r[sn[i]]);
        return ((n.t = e), n);
      },
      sc = function (e, t, r) {
        for (var n, i = [], o = e.length, s = 8 * !!r; s < o; s += 2)
          ((n = e[s]), i.push(n, n in t ? t[n] : e[s + 1]));
        return ((i.t = e.t), i);
      },
      su = { left: 0, top: 0 },
      sd = function (e, t, r, n, i, o, s, a, l, c, u, d, f, h) {
        (ol(e) && (e = e(a)),
          oa(e) &&
            "max" === e.substr(0, 3) &&
            (e = d + ("=" === e.charAt(4) ? oF("0" + e.substr(3), r) : 0)));
        var p,
          m,
          g,
          v = f ? f.time() : 0;
        if ((f && f.seek(0), isNaN(e) || (e *= 1), oc(e)))
          (f && (e = ip.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)),
            s && oY(s, r, n, !0));
        else {
          ol(t) && (t = t(a));
          var x,
            b,
            y,
            _,
            w = (e || "0").split(" ");
          ((x = oR((g = ii(t, a) || ib)) || {}).left ||
            x.top ||
            "none" !== oO(g).display ||
            ((_ = g.style.display),
            (g.style.display = "block"),
            (x = oR(g)),
            _ ? (g.style.display = _) : g.style.removeProperty("display")),
            (b = oF(w[0], x[n.d])),
            (y = oF(w[1] || "0", r)),
            (e = x[n.p] - l[n.p] - c + b + i - y),
            s && oY(s, y, n, r - y < 20 || (s._isStart && y > 20)),
            (r -= r - y));
        }
        if ((h && ((a[h] = e || -0.001), e < 0 && (e = 0)), o)) {
          var A = e + r,
            k = o._isStart;
          ((p = "scroll" + n.d2),
            oY(
              o,
              A,
              n,
              (k && A > 20) || (!k && (u ? Math.max(ib[p], ix[p]) : o.parentNode[p]) <= A + 1),
            ),
            u && ((l = oR(s)), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px")));
        }
        return (
          f &&
            g &&
            ((p = oR(g)),
            f.seek(d),
            (m = oR(g)),
            (f._caScrollDist = p[n.p] - m[n.p]),
            (e = (e / f._caScrollDist) * d)),
          f && f.seek(v),
          f ? e : Math.round(e)
        );
      },
      sf = /(webkit|moz|length|cssText|inset)/i,
      sh = function (e, t, r, n) {
        if (e.parentNode !== t) {
          var i,
            o,
            s = e.style;
          if (t === ib) {
            for (i in ((e._stOrig = s.cssText), (o = oO(e))))
              +i || sf.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
            ((s.top = r), (s.left = n));
          } else s.cssText = e._stOrig;
          ((ip.core.getCache(e).uncache = 1), t.appendChild(e));
        }
      },
      sp = function (e, t, r) {
        var n = t,
          i = n;
        return function (t) {
          var o = Math.round(e());
          return (
            o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && ((t = o), r && r()),
            (i = n),
            (n = Math.round(t))
          );
        };
      },
      sm = function (e, t, r) {
        var n = {};
        ((n[t.p] = "+=" + r), ip.set(e, n));
      },
      sg = function (e, t) {
        var r = is(e, t),
          n = "_scroll" + t.p2,
          i = function t(i, o, s, a, l) {
            var c = t.tween,
              u = o.onComplete,
              d = {};
            s = s || r();
            var f = sp(r, s, function () {
              (c.kill(), (t.tween = 0));
            });
            return (
              (l = (a && l) || 0),
              (a = a || i - s),
              c && c.kill(),
              (o[n] = i),
              (o.inherit = !1),
              (o.modifiers = d),
              (d[n] = function () {
                return f(s + a * c.ratio + l * c.ratio * c.ratio);
              }),
              (o.onUpdate = function () {
                (nZ.cache++, t.tween && st());
              }),
              (o.onComplete = function () {
                ((t.tween = 0), u && u.call(c));
              }),
              (c = t.tween = ip.to(e, o))
            );
          };
        return (
          (e[n] = r),
          (r.wheelHandler = function () {
            return i.tween && i.tween.kill() && (i.tween = 0);
          }),
          oS(e, "wheel", r.wheelHandler),
          sv.isTouch && oS(e, "touchmove", r.wheelHandler),
          i
        );
      },
      sv = (function () {
        function e(t, r) {
          (im || e.register(ip) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            iL(this),
            this.init(t, r));
        }
        return (
          (e.prototype.init = function (t, r) {
            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !i2)) {
              this.update = this.refresh = this.kill = i6;
              return;
            }
            var n,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              h,
              p,
              m,
              g,
              v,
              x,
              b,
              y,
              _,
              w,
              A,
              k,
              E,
              O,
              C,
              T,
              R,
              z,
              M,
              j,
              N,
              S,
              P,
              D,
              B,
              I,
              Q,
              F,
              L,
              Y,
              U,
              W = (t = oT(oa(t) || oc(t) || t.nodeType ? { trigger: t } : t, oI)),
              K = W.onUpdate,
              H = W.toggleClass,
              q = W.id,
              V = W.onToggle,
              X = W.onRefresh,
              G = W.scrub,
              J = W.trigger,
              Z = W.pin,
              $ = W.pinSpacing,
              ee = W.invalidateOnRefresh,
              et = W.anticipatePin,
              er = W.onScrubComplete,
              en = W.onSnapComplete,
              ei = W.once,
              eo = W.snap,
              es = W.pinReparent,
              ea = W.pinSpacer,
              el = W.containerAnimation,
              ec = W.fastScrollEnd,
              eu = W.preventOverlaps,
              ed = t.horizontal || (t.containerAnimation && !1 !== t.horizontal) ? it : ir,
              ef = !G && 0 !== G,
              eh = ii(t.scroller || ig),
              ep = ip.core.getCache(eh),
              em = ot(eh),
              eg = ("pinType" in t ? t.pinType : n5(eh, "pinType") || (em && "fixed")) === "fixed",
              ev = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              ex = ef && t.toggleActions.split(" "),
              eb = "markers" in t ? t.markers : oI.markers,
              ey = em ? 0 : parseFloat(oO(eh)["border" + ed.p2 + ok]) || 0,
              e_ = this,
              ew =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(e_);
                },
              eA = oi(eh, em, ed),
              ek =
                !em || ~n$.indexOf(eh)
                  ? on(eh)
                  : function () {
                      return su;
                    },
              eE = 0,
              eO = 0,
              eC = 0,
              eT = is(eh, ed);
            if (
              ((e_._startClamp = e_._endClamp = !1),
              (e_._dir = ed),
              (et *= 45),
              (e_.scroller = eh),
              (e_.scroll = el ? el.time.bind(el) : eT),
              (l = eT()),
              (e_.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t && ((iN = 1), -9999 === t.refreshPriority && (iJ = e_)),
              (ep.tweenScroll = ep.tweenScroll || { top: sg(eh, ir), left: sg(eh, it) }),
              (e_.tweenTo = o = ep.tweenScroll[ed.p]),
              (e_.scrubDuration = function (e) {
                (B = oc(e) && e)
                  ? D
                    ? D.duration(e)
                    : (D = ip.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: B,
                        paused: !0,
                        onComplete: function () {
                          return er && er(e_);
                        },
                      }))
                  : (D && D.progress(1).kill(), (D = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !e_.isReverted) ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== t.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (e_.animation = r.pause()),
                (r.scrollTrigger = e_),
                e_.scrubDuration(G),
                (S = 0),
                q || (q = r.vars.id)),
              eo &&
                ((!ou(eo) || eo.push) && (eo = { snapTo: eo }),
                "scrollBehavior" in ib.style &&
                  ip.set(em ? [ib, ix] : eh, { scrollBehavior: "auto" }),
                nZ.forEach(function (e) {
                  return (
                    ol(e) && e.target === (em ? iv.scrollingElement || ix : eh) && (e.smooth = !1)
                  );
                }),
                (a = ol(eo.snapTo)
                  ? eo.snapTo
                  : "labels" === eo.snapTo
                    ? ((n = r),
                      function (e) {
                        return ip.utils.snap(oM(n), e);
                      })
                    : "labelsDirectional" === eo.snapTo
                      ? ((i = r),
                        function (e, t) {
                          return oj(oM(i))(e, t.direction);
                        })
                      : !1 !== eo.directional
                        ? function (e, t) {
                            return oj(eo.snapTo)(e, i$() - eO < 500 ? 0 : t.direction);
                          }
                        : ip.utils.snap(eo.snapTo)),
                (I = ou((I = eo.duration || { min: 0.1, max: 2 })) ? iA(I.min, I.max) : iA(I, I)),
                (Q = ip
                  .delayedCall(eo.delay || B / 2 || 0.1, function () {
                    var e = eT(),
                      t = i$() - eO < 500,
                      n = o.tween;
                    if ((t || 10 > Math.abs(e_.getVelocity())) && !n && !iC && eE !== e) {
                      var i,
                        s,
                        l = (e - u) / x,
                        c = r && !ef ? r.totalProgress() : l,
                        f = t ? 0 : ((c - P) / (i$() - ik)) * 1e3 || 0,
                        h = ip.utils.clamp(-l, 1 - l, (oh(f / 2) * f) / 0.185),
                        p = l + (!1 === eo.inertia ? 0 : h),
                        m = eo,
                        g = m.onStart,
                        v = m.onInterrupt,
                        b = m.onComplete;
                      if (
                        (oc((i = a(p, e_))) || (i = p),
                        (s = Math.max(0, Math.round(u + i * x))),
                        e <= d && e >= u && s !== e)
                      ) {
                        if (n && !n._initted && n.data <= oh(s - e)) return;
                        (!1 === eo.inertia && (h = i - l),
                          o(
                            s,
                            {
                              duration: I(
                                oh((0.185 * Math.max(oh(p - c), oh(i - c))) / f / 0.05 || 0),
                              ),
                              ease: eo.ease || "power3",
                              data: oh(s - e),
                              onInterrupt: function () {
                                return Q.restart(!0) && v && of(e_, v);
                              },
                              onComplete: function () {
                                (e_.update(),
                                  (eE = eT()),
                                  r &&
                                    !ef &&
                                    (D
                                      ? D.resetTo("totalProgress", i, r._tTime / r._tDur)
                                      : r.progress(i)),
                                  (S = P = r && !ef ? r.totalProgress() : e_.progress),
                                  en && en(e_),
                                  b && of(e_, b));
                              },
                            },
                            e,
                            h * x,
                            s - e - h * x,
                          ),
                          g && of(e_, g, o.tween));
                      }
                    } else e_.isActive && eE !== e && Q.restart(!0);
                  })
                  .pause())),
              q && (oW[q] = e_),
              (U = (J = e_.trigger = ii(J || (!0 !== Z && Z))) && J._gsap && J._gsap.stRevert) &&
                (U = U(e_)),
              (Z = !0 === Z ? J : ii(Z)),
              oa(H) && (H = { targets: J, className: H }),
              Z &&
                (!1 === $ ||
                  $ === oA ||
                  ($ =
                    (!!$ ||
                      !Z.parentNode ||
                      !Z.parentNode.style ||
                      "flex" !== oO(Z.parentNode).display) &&
                    ow),
                (e_.pin = Z),
                (s = ip.core.getCache(Z)).spacer
                  ? (b = s.pinState)
                  : (ea &&
                      ((ea = ii(ea)) && !ea.nodeType && (ea = ea.current || ea.nativeElement),
                      (s.spacerIsNative = !!ea),
                      ea && (s.spacerState = sl(ea))),
                    (s.spacer = w = ea || iv.createElement("div")),
                    w.classList.add("pin-spacer"),
                    q && w.classList.add("pin-spacer-" + q),
                    (s.pinState = b = sl(Z))),
                !1 !== t.force3D && ip.set(Z, { force3D: !0 }),
                (e_.spacer = w = s.spacer),
                (T = (N = oO(Z))[$ + ed.os2]),
                (k = ip.getProperty(Z)),
                (E = ip.quickSetter(Z, ed.a, "px")),
                so(Z, w, N),
                (_ = sl(Z))),
              eb)
            ) {
              ((g = ou(eb) ? oT(eb, oB) : oB),
                (p = oL("scroller-start", q, eh, ed, g, 0)),
                (m = oL("scroller-end", q, eh, ed, g, 0, p)),
                (A = p["offset" + ed.op.d2]));
              var eR = ii(n5(eh, "content") || eh);
              ((f = this.markerStart = oL("start", q, eR, ed, g, A, 0, el)),
                (h = this.markerEnd = oL("end", q, eR, ed, g, A, 0, el)),
                el && (Y = ip.quickSetter([f, h], ed.a, "px")),
                eg ||
                  (n$.length && !0 === n5(eh, "fixedMarkers")) ||
                  (oC(em ? ib : eh),
                  ip.set([p, m], { force3D: !0 }),
                  (z = ip.quickSetter(p, ed.a, "px")),
                  (j = ip.quickSetter(m, ed.a, "px"))));
            }
            if (el) {
              var ez = el.vars.onUpdate,
                eM = el.vars.onUpdateParams;
              el.eventCallback("onUpdate", function () {
                (e_.update(0, 0, 1), ez && ez.apply(el, eM || []));
              });
            }
            if (
              ((e_.previous = function () {
                return oU[oU.indexOf(e_) - 1];
              }),
              (e_.next = function () {
                return oU[oU.indexOf(e_) + 1];
              }),
              (e_.revert = function (e, t) {
                if (!t) return e_.kill(!0);
                var n = !1 !== e || !e_.enabled,
                  i = iO;
                n !== e_.isReverted &&
                  (n &&
                    ((F = Math.max(eT(), e_.scroll.rec || 0)),
                    (eC = e_.progress),
                    (L = r && r.progress())),
                  f &&
                    [f, h, p, m].forEach(function (e) {
                      return (e.style.display = n ? "none" : "block");
                    }),
                  n && ((iO = e_), e_.update(n)),
                  !Z || (es && e_.isActive) || (n ? si(Z, w, b) : so(Z, w, oO(Z), R)),
                  n || e_.update(n),
                  (iO = i),
                  (e_.isReverted = n));
              }),
              (e_.refresh = function (n, i, s, a) {
                if ((!iO && e_.enabled) || i) {
                  if (Z && n && i1) return void oS(e, "scrollEnd", oJ);
                  (!iX && ew && ew(e_),
                    (iO = e_),
                    o.tween && !s && (o.tween.kill(), (o.tween = 0)),
                    D && D.pause(),
                    ee &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren
                        ? r.getChildren(!0, !0, !1).forEach(function (e) {
                            return e.vars.immediateRender && e.render(0, !0, !0);
                          })
                        : r.vars.immediateRender && r.render(0, !0, !0)),
                    e_.isReverted || e_.revert(!0, !0),
                    (e_._subPinOffset = !1));
                  var g,
                    A,
                    E,
                    T,
                    z,
                    j,
                    N,
                    S,
                    P,
                    B,
                    I,
                    Y,
                    U,
                    W = eA(),
                    K = ek(),
                    H = el ? el.duration() : oo(eh, ed),
                    q = x <= 0.01 || !x,
                    V = 0,
                    G = a || 0,
                    et = ou(s) ? s.end : t.end,
                    er = t.endTrigger || J,
                    en = ou(s)
                      ? s.start
                      : t.start || (0 !== t.start && J ? (Z ? "0 0" : "0 100%") : 0),
                    ei = (e_.pinnedContainer = t.pinnedContainer && ii(t.pinnedContainer, e_)),
                    eo = (J && Math.max(0, oU.indexOf(e_))) || 0,
                    ea = eo;
                  for (
                    eb && ou(s) && ((Y = ip.getProperty(p, ed.p)), (U = ip.getProperty(m, ed.p)));
                    ea-- > 0;
                  )
                    ((j = oU[ea]).end || j.refresh(0, 1) || (iO = e_),
                      (N = j.pin) &&
                        (N === J || N === Z || N === ei) &&
                        !j.isReverted &&
                        (B || (B = []), B.unshift(j), j.revert(!0, !0)),
                      j !== oU[ea] && (eo--, ea--));
                  for (
                    ol(en) && (en = en(e_)),
                      u =
                        sd(
                          (en = i5(en, "start", e_)),
                          J,
                          W,
                          ed,
                          eT(),
                          f,
                          p,
                          e_,
                          K,
                          ey,
                          eg,
                          H,
                          el,
                          e_._startClamp && "_startClamp",
                        ) || (Z ? -0.001 : 0),
                      ol(et) && (et = et(e_)),
                      oa(et) &&
                        !et.indexOf("+=") &&
                        (~et.indexOf(" ")
                          ? (et = (oa(en) ? en.split(" ")[0] : "") + et)
                          : ((V = oF(et.substr(2), W)),
                            (et = oa(en)
                              ? en
                              : (el
                                  ? ip.utils.mapRange(
                                      0,
                                      el.duration(),
                                      el.scrollTrigger.start,
                                      el.scrollTrigger.end,
                                      u,
                                    )
                                  : u) + V),
                            (er = J))),
                      et = i5(et, "end", e_),
                      d =
                        Math.max(
                          u,
                          sd(
                            et || (er ? "100% 0" : H),
                            er,
                            W,
                            ed,
                            eT() + V,
                            h,
                            m,
                            e_,
                            K,
                            ey,
                            eg,
                            H,
                            el,
                            e_._endClamp && "_endClamp",
                          ),
                        ) || -0.001,
                      V = 0,
                      ea = eo;
                    ea--;
                  )
                    (N = (j = oU[ea] || {}).pin) &&
                      j.start - j._pinPush <= u &&
                      !el &&
                      j.end > 0 &&
                      ((g = j.end - (e_._startClamp ? Math.max(0, j.start) : j.start)),
                      ((N === J && j.start - j._pinPush < u) || N === ei) &&
                        isNaN(en) &&
                        (V += g * (1 - j.progress)),
                      N === Z && (G += g));
                  if (
                    ((u += V),
                    (d += V),
                    e_._startClamp && (e_._startClamp += V),
                    e_._endClamp &&
                      !iX &&
                      ((e_._endClamp = d || -0.001), (d = Math.min(d, oo(eh, ed)))),
                    (x = d - u || ((u -= 0.01) && 0.001)),
                    q && (eC = ip.utils.clamp(0, 1, ip.utils.normalize(u, d, F))),
                    (e_._pinPush = G),
                    f &&
                      V &&
                      (((g = {})[ed.a] = "+=" + V),
                      ei && (g[ed.p] = "-=" + eT()),
                      ip.set([f, h], g)),
                    Z && !(iH && e_.end >= oo(eh, ed)))
                  )
                    ((g = oO(Z)),
                      (T = ed === ir),
                      (E = eT()),
                      (O = parseFloat(k(ed.a)) + G),
                      !H &&
                        d > 1 &&
                        ((I = {
                          style: (I = (em ? iv.scrollingElement || ix : eh).style),
                          value: I["overflow" + ed.a.toUpperCase()],
                        }),
                        em &&
                          "scroll" !== oO(ib)["overflow" + ed.a.toUpperCase()] &&
                          (I.style["overflow" + ed.a.toUpperCase()] = "scroll")),
                      so(Z, w, g),
                      (_ = sl(Z)),
                      (A = oR(Z, !0)),
                      (S = eg && is(eh, T ? it : ir)()),
                      $
                        ? (((R = [$ + ed.os2, x + G + "px"]).t = w),
                          (ea = $ === ow ? oz(Z, ed) + x + G : 0) &&
                            (R.push(ed.d, ea + "px"),
                            "auto" !== w.style.flexBasis && (w.style.flexBasis = ea + "px")),
                          sa(R),
                          ei &&
                            oU.forEach(function (e) {
                              e.pin === ei && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                            }),
                          eg && eT(F))
                        : (ea = oz(Z, ed)) &&
                          "auto" !== w.style.flexBasis &&
                          (w.style.flexBasis = ea + "px"),
                      eg &&
                        (((z = {
                          top: A.top + (T ? E - u : S) + "px",
                          left: A.left + (T ? S : E - u) + "px",
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ov] = z["max" + ok] =
                          Math.ceil(A.width) + "px"),
                        (z[ox] = z["max" + oE] = Math.ceil(A.height) + "px"),
                        (z[oA] = z[oA + "Top"] = z[oA + ob] = z[oA + o_] = z[oA + oy] = "0"),
                        (z[ow] = g[ow]),
                        (z[ow + "Top"] = g[ow + "Top"]),
                        (z[ow + ob] = g[ow + ob]),
                        (z[ow + o_] = g[ow + o_]),
                        (z[ow + oy] = g[ow + oy]),
                        (y = sc(b, z, es)),
                        iX && eT(0)),
                      r
                        ? ((P = r._initted),
                          iS(1),
                          r.render(r.duration(), !0, !0),
                          (C = k(ed.a) - O + x + G),
                          (M = Math.abs(x - C) > 1),
                          eg && M && y.splice(y.length - 2, 2),
                          r.render(0, !0, !0),
                          P || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          iS(0))
                        : (C = x),
                      I &&
                        (I.value
                          ? (I.style["overflow" + ed.a.toUpperCase()] = I.value)
                          : I.style.removeProperty("overflow-" + ed.a)));
                  else if (J && eT() && !el)
                    for (A = J.parentNode; A && A !== ib;)
                      (A._pinOffset && ((u -= A._pinOffset), (d -= A._pinOffset)),
                        (A = A.parentNode));
                  (B &&
                    B.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (e_.start = u),
                    (e_.end = d),
                    (l = c = iX ? F : eT()),
                    el || iX || (l < F && eT(F), (e_.scroll.rec = 0)),
                    e_.revert(!1, !0),
                    (eO = i$()),
                    Q && ((eE = -1), Q.restart(!0)),
                    (iO = 0),
                    r &&
                      ef &&
                      (r._initted || L) &&
                      r.progress() !== L &&
                      r.progress(L || 0, !0).render(r.time(), !0, !0),
                    (q || eC !== e_.progress || el || ee || (r && !r._initted)) &&
                      (r &&
                        !ef &&
                        (r._initted || eC || !1 !== r.vars.immediateRender) &&
                        r.totalProgress(
                          el && u < -0.001 && !eC ? ip.utils.normalize(u, d, 0) : eC,
                          !0,
                        ),
                      (e_.progress = q || (l - u) / x === eC ? 0 : eC)),
                    Z && $ && (w._pinOffset = Math.round(e_.progress * C)),
                    D && D.invalidate(),
                    isNaN(Y) ||
                      ((Y -= ip.getProperty(p, ed.p)),
                      (U -= ip.getProperty(m, ed.p)),
                      sm(p, ed, Y),
                      sm(f, ed, Y - (a || 0)),
                      sm(m, ed, U),
                      sm(h, ed, U - (a || 0))),
                    q && !iX && e_.update(),
                    !X || iX || v || ((v = !0), X(e_), (v = !1)));
                }
              }),
              (e_.getVelocity = function () {
                return ((eT() - c) / (i$() - ik)) * 1e3 || 0;
              }),
              (e_.endAnimation = function () {
                (od(e_.callbackAnimation),
                  r &&
                    (D
                      ? D.progress(1)
                      : r.paused()
                        ? ef || od(r, e_.direction < 0, 1)
                        : od(r, r.reversed())));
              }),
              (e_.labelToScroll = function (e) {
                return (
                  (r && r.labels && (u || e_.refresh() || u) + (r.labels[e] / r.duration()) * x) ||
                  0
                );
              }),
              (e_.getTrailing = function (e) {
                var t = oU.indexOf(e_),
                  r = e_.direction > 0 ? oU.slice(0, t).reverse() : oU.slice(t + 1);
                return (
                  oa(e)
                    ? r.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : r
                ).filter(function (e) {
                  return e_.direction > 0 ? e.end <= u : e.start >= d;
                });
              }),
              (e_.update = function (e, t, n) {
                if (!el || n || e) {
                  var i,
                    s,
                    a,
                    f,
                    h,
                    m,
                    g,
                    v = !0 === iX ? F : e_.scroll(),
                    b = e ? 0 : (v - u) / x,
                    A = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                    k = e_.progress;
                  if (
                    (t &&
                      ((c = l),
                      (l = el ? eT() : v),
                      eo && ((P = S), (S = r && !ef ? r.totalProgress() : A))),
                    et &&
                      Z &&
                      !iO &&
                      !iZ &&
                      i1 &&
                      (!A && u < v + ((v - c) / (i$() - ik)) * et
                        ? (A = 1e-4)
                        : 1 === A && d > v + ((v - c) / (i$() - ik)) * et && (A = 0.9999)),
                    A !== k && e_.enabled)
                  ) {
                    if (
                      ((f = (h = (i = e_.isActive = !!A && A < 1) != (!!k && k < 1)) || !!A != !!k),
                      (e_.direction = A > k ? 1 : -1),
                      (e_.progress = A),
                      f &&
                        !iO &&
                        ((s = A && !k ? 0 : 1 === A ? 1 : 1 === k ? 2 : 3),
                        ef &&
                          ((a = (!h && "none" !== ex[s + 1] && ex[s + 1]) || ex[s]),
                          (g = r && ("complete" === a || "reset" === a || a in r)))),
                      eu &&
                        (h || g) &&
                        (g || G || !r) &&
                        (ol(eu)
                          ? eu(e_)
                          : e_.getTrailing(eu).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      !ef &&
                        (!D || iO || iZ
                          ? r && r.totalProgress(A, !!(iO && (eO || e)))
                          : (D._dp._time - D._start !== D._time && D.render(D._dp._time - D._start),
                            D.resetTo
                              ? D.resetTo("totalProgress", A, r._tTime / r._tDur)
                              : ((D.vars.totalProgress = A), D.invalidate().restart()))),
                      Z)
                    )
                      if ((e && $ && (w.style[$ + ed.os2] = T), eg)) {
                        if (f) {
                          if (((m = !e && A > k && d + 1 > v && v + 1 >= oo(eh, ed)), es))
                            if (!e && (i || m)) {
                              var R = oR(Z, !0),
                                N = v - u;
                              sh(
                                Z,
                                ib,
                                R.top + (ed === ir ? N : 0) + "px",
                                R.left + (ed === ir ? 0 : N) + "px",
                              );
                            } else sh(Z, w);
                          (sa(i || m ? y : _), (M && A < 1 && i) || E(O + (1 !== A || m ? 0 : C)));
                        }
                      } else E(i8(O + C * A));
                    (!eo || o.tween || iO || iZ || Q.restart(!0),
                      H &&
                        (h || (ei && A && (A < 1 || !iq))) &&
                        iw(H.targets).forEach(function (e) {
                          return e.classList[i || ei ? "add" : "remove"](H.className);
                        }),
                      !K || ef || e || K(e_),
                      f && !iO
                        ? (ef &&
                            (g &&
                              ("complete" === a
                                ? r.pause().totalProgress(1)
                                : "reset" === a
                                  ? r.restart(!0).pause()
                                  : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                            K && K(e_)),
                          (h || !iq) &&
                            (V && h && of(e_, V),
                            ev[s] && of(e_, ev[s]),
                            ei && (1 === A ? e_.kill(!1, 1) : (ev[s] = 0)),
                            !h && ev[(s = 1 === A ? 1 : 3)] && of(e_, ev[s])),
                          ec &&
                            !i &&
                            Math.abs(e_.getVelocity()) > (oc(ec) ? ec : 2500) &&
                            (od(e_.callbackAnimation),
                            D ? D.progress(1) : od(r, "reverse" === a ? 1 : !A, 1)))
                        : ef && K && !iO && K(e_));
                  }
                  if (j) {
                    var B = el ? (v / el.duration()) * (el._caScrollDist || 0) : v;
                    (z(B + +!!p._isFlipped), j(B));
                  }
                  Y && Y((-v / el.duration()) * (el._caScrollDist || 0));
                }
              }),
              (e_.enable = function (t, r) {
                e_.enabled ||
                  ((e_.enabled = !0),
                  oS(eh, "resize", oV),
                  em || oS(eh, "scroll", oH),
                  ew && oS(e, "refreshInit", ew),
                  !1 !== t && ((e_.progress = eC = 0), (l = c = eE = eT())),
                  !1 !== r && e_.refresh());
              }),
              (e_.getTween = function (e) {
                return e && o ? o.tween : D;
              }),
              (e_.setPositions = function (e, t, r, n) {
                if (el) {
                  var i = el.scrollTrigger,
                    o = el.duration(),
                    s = i.end - i.start;
                  ((e = i.start + (s * e) / o), (t = i.start + (s * t) / o));
                }
                (e_.refresh(
                  !1,
                  !1,
                  { start: i4(e, r && !!e_._startClamp), end: i4(t, r && !!e_._endClamp) },
                  n,
                ),
                  e_.update());
              }),
              (e_.adjustPinSpacing = function (e) {
                if (R && e) {
                  var t = R.indexOf(ed.d) + 1;
                  ((R[t] = parseFloat(R[t]) + e + "px"),
                    (R[1] = parseFloat(R[1]) + e + "px"),
                    sa(R));
                }
              }),
              (e_.disable = function (t, r) {
                if (
                  (!1 !== t && e_.revert(!0, !0),
                  e_.enabled &&
                    ((e_.enabled = e_.isActive = !1),
                    r || (D && D.pause()),
                    (F = 0),
                    s && (s.uncache = 1),
                    ew && oP(e, "refreshInit", ew),
                    Q && (Q.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                    !em))
                ) {
                  for (var n = oU.length; n--;) if (oU[n].scroller === eh && oU[n] !== e_) return;
                  (oP(eh, "resize", oV), em || oP(eh, "scroll", oH));
                }
              }),
              (e_.kill = function (e, n) {
                (e_.disable(e, n), D && !n && D.kill(), q && delete oW[q]);
                var i = oU.indexOf(e_);
                (i >= 0 && oU.splice(i, 1),
                  i === iR && se > 0 && iR--,
                  (i = 0),
                  oU.forEach(function (e) {
                    return e.scroller === e_.scroller && (i = 1);
                  }),
                  i || iX || (e_.scroll.rec = 0),
                  r && ((r.scrollTrigger = null), e && r.revert({ kill: !1 }), n || r.kill()),
                  f &&
                    [f, h, p, m].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  iJ === e_ && (iJ = 0),
                  Z &&
                    (s && (s.uncache = 1),
                    (i = 0),
                    oU.forEach(function (e) {
                      return e.pin === Z && i++;
                    }),
                    i || (s.spacer = 0)),
                  t.onKill && t.onKill(e_));
              }),
              oU.push(e_),
              e_.enable(!1, !1),
              U && U(e_),
              r && r.add && !x)
            ) {
              var ej = e_.update;
              ((e_.update = function () {
                ((e_.update = ej), nZ.cache++, u || d || e_.refresh());
              }),
                ip.delayedCall(0.01, e_.update),
                (x = 0.01),
                (u = d = 0));
            } else e_.refresh();
            Z && o3();
          }),
          (e.register = function (t) {
            return (im || ((ip = t || oe()), i9() && window.document && e.enable(), (im = i2)), im);
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) oI[t] = e[t];
            return oI;
          }),
          (e.disable = function (e, t) {
            ((i2 = 0),
              oU.forEach(function (r) {
                return r[t ? "kill" : "disable"](e);
              }),
              oP(ig, "wheel", oH),
              oP(iv, "scroll", oH),
              clearInterval(iE),
              oP(iv, "touchcancel", i6),
              oP(ib, "touchstart", i6),
              oN(oP, iv, "pointerdown,touchstart,mousedown", i3),
              oN(oP, iv, "pointerup,touchend,mouseup", i7),
              i_.kill(),
              os(oP));
            for (var r = 0; r < nZ.length; r += 3)
              (oD(oP, nZ[r], nZ[r + 1]), oD(oP, nZ[r], nZ[r + 2]));
          }),
          (e.enable = function () {
            if (((ig = window), (ix = (iv = document).documentElement), (ib = iv.body), ip))
              if (
                ((iw = ip.utils.toArray),
                (iA = ip.utils.clamp),
                (iL = ip.core.context || i6),
                (iS = ip.core.suppressOverwrites || i6),
                (iY = ig.history.scrollRestoration || "auto"),
                (o9 = ig.pageYOffset || 0),
                ip.core.globals("ScrollTrigger", e),
                ib)
              ) {
                ((i2 = 1),
                  ((iU = document.createElement("div")).style.height = "100vh"),
                  (iU.style.position = "absolute"),
                  o7(),
                  (function e() {
                    return i2 && requestAnimationFrame(e);
                  })(),
                  ih.register(ip),
                  (e.isTouch = ih.isTouch),
                  (iF = ih.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (iB = 1 === ih.isTouch),
                  oS(ig, "wheel", oH),
                  (iy = [ig, iv, ix, ib]),
                  ip.matchMedia
                    ? ((e.matchMedia = function (e) {
                        var t,
                          r = ip.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r;
                      }),
                      ip.addEventListener("matchMediaInit", function () {
                        (o1(), o2());
                      }),
                      ip.addEventListener("matchMediaRevert", function () {
                        return o0();
                      }),
                      ip.addEventListener("matchMedia", function () {
                        (o8(0, 1), oZ("matchMedia"));
                      }),
                      ip.matchMedia().add("(orientation: portrait)", function () {
                        return (oq(), oq);
                      }))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  oq(),
                  oS(iv, "scroll", oH));
                var t,
                  r,
                  n = ib.hasAttribute("style"),
                  i = ib.style,
                  o = i.borderTopStyle,
                  s = ip.core.Animation.prototype;
                for (
                  s.revert ||
                    Object.defineProperty(s, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    i.borderTopStyle = "solid",
                    ir.m = Math.round((t = oR(ib)).top + ir.sc()) || 0,
                    it.m = Math.round(t.left + it.sc()) || 0,
                    o ? (i.borderTopStyle = o) : i.removeProperty("border-top-style"),
                    n || (ib.setAttribute("style", ""), ib.removeAttribute("style")),
                    iE = setInterval(oK, 250),
                    ip.delayedCall(0.5, function () {
                      return (iZ = 0);
                    }),
                    oS(iv, "touchcancel", i6),
                    oS(ib, "touchstart", i6),
                    oN(oS, iv, "pointerdown,touchstart,mousedown", i3),
                    oN(oS, iv, "pointerup,touchend,mouseup", i7),
                    iT = ip.utils.checkPrefix("transform"),
                    sn.push(iT),
                    im = i$(),
                    i_ = ip.delayedCall(0.2, o8).pause(),
                    ij = [
                      iv,
                      "visibilitychange",
                      function () {
                        var e = ig.innerWidth,
                          t = ig.innerHeight;
                        iv.hidden ? ((iz = e), (iM = t)) : (iz !== e || iM !== t) && oV();
                      },
                      iv,
                      "DOMContentLoaded",
                      o8,
                      ig,
                      "load",
                      o8,
                      ig,
                      "resize",
                      oV,
                    ],
                    os(oS),
                    oU.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    r = 0;
                  r < nZ.length;
                  r += 3
                )
                  (oD(oP, nZ[r], nZ[r + 1]), oD(oP, nZ[r], nZ[r + 2]));
              } else
                iv &&
                  iv.addEventListener("DOMContentLoaded", function t() {
                    (e.enable(), iv.removeEventListener("DOMContentLoaded", t));
                  });
          }),
          (e.config = function (t) {
            "limitCallbacks" in t && (iq = !!t.limitCallbacks);
            var r = t.syncInterval;
            ((r && clearInterval(iE)) || ((iE = r) && setInterval(oK, r)),
              "ignoreMobileResize" in t && (iB = 1 === e.isTouch && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (os(oP) || os(oS, t.autoRefreshEvents || "none"),
                (iP = -1 === (t.autoRefreshEvents + "").indexOf("resize"))));
          }),
          (e.scrollerProxy = function (e, t) {
            var r = ii(e),
              n = nZ.indexOf(r),
              i = ot(r);
            (~n && nZ.splice(n, i ? 6 : 2),
              t && (i ? n$.unshift(ig, t, ib, t, ix, t) : n$.unshift(r, t)));
          }),
          (e.clearMatchMedia = function (e) {
            oU.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, r) {
            var n = (oa(e) ? ii(e) : e).getBoundingClientRect(),
              i = n[r ? ov : ox] * t || 0;
            return r
              ? n.right - i > 0 && n.left + i < ig.innerWidth
              : n.bottom - i > 0 && n.top + i < ig.innerHeight;
          }),
          (e.positionInViewport = function (e, t, r) {
            oa(e) && (e = ii(e));
            var n = e.getBoundingClientRect(),
              i = n[r ? ov : ox],
              o =
                null == t
                  ? i / 2
                  : t in oQ
                    ? oQ[t] * i
                    : ~t.indexOf("%")
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
            return r ? (n.left + o) / ig.innerWidth : (n.top + o) / ig.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (oU.slice(0).forEach(function (e) {
                return "ScrollSmoother" !== e.vars.id && e.kill();
              }),
              !0 !== e)
            ) {
              var t = oX.killAll || [];
              ((oX = {}),
                t.forEach(function (e) {
                  return e();
                }));
            }
          }),
          e
        );
      })();
    ((sv.version = "3.15.0"),
      (sv.saveStyles = function (e) {
        return e
          ? iw(e).forEach(function (e) {
              if (e && e.style) {
                var t = o$.indexOf(e);
                (t >= 0 && o$.splice(t, 5),
                  o$.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    ip.core.getCache(e),
                    iL(),
                  ));
              }
            })
          : o$;
      }),
      (sv.revert = function (e, t) {
        return o2(!e, t);
      }),
      (sv.create = function (e, t) {
        return new sv(e, t);
      }),
      (sv.refresh = function (e) {
        return e ? oV(!0) : (im || sv.register()) && o8(!0);
      }),
      (sv.update = function (e) {
        return ++nZ.cache && st(2 * (!0 === e));
      }),
      (sv.clearScrollMemory = o5),
      (sv.maxScroll = function (e, t) {
        return oo(e, t ? it : ir);
      }),
      (sv.getScrollFunc = function (e, t) {
        return is(ii(e), t ? it : ir);
      }),
      (sv.getById = function (e) {
        return oW[e];
      }),
      (sv.getAll = function () {
        return oU.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (sv.isScrolling = function () {
        return !!i1;
      }),
      (sv.snapDirectional = oj),
      (sv.addEventListener = function (e, t) {
        var r = oX[e] || (oX[e] = []);
        ~r.indexOf(t) || r.push(t);
      }),
      (sv.removeEventListener = function (e, t) {
        var r = oX[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1);
      }),
      (sv.batch = function (e, t) {
        var r,
          n = [],
          i = {},
          o = t.interval || 0.016,
          s = t.batchMax || 1e9,
          a = function (e, t) {
            var r = [],
              n = [],
              i = ip
                .delayedCall(o, function () {
                  (t(r, n), (r = []), (n = []));
                })
                .pause();
            return function (e) {
              (r.length || i.restart(!0),
                r.push(e.trigger),
                n.push(e),
                s <= r.length && i.progress(1));
            };
          };
        for (r in t)
          i[r] = "on" === r.substr(0, 2) && ol(t[r]) && "onRefreshInit" !== r ? a(r, t[r]) : t[r];
        return (
          ol(s) &&
            ((s = s()),
            oS(sv, "refresh", function () {
              return (s = t.batchMax());
            })),
          iw(e).forEach(function (e) {
            var t = {};
            for (r in i) t[r] = i[r];
            ((t.trigger = e), n.push(sv.create(t)));
          }),
          n
        );
      }));
    var sx,
      sb = function (e, t, r, n) {
        return (t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1);
      },
      sy = function e(t, r) {
        (!0 === r
          ? t.style.removeProperty("touch-action")
          : (t.style.touchAction =
              !0 === r ? "auto" : r ? "pan-" + r + (ih.isTouch ? " pinch-zoom" : "") : "none"),
          t === ix && e(ib, r));
      },
      s_ = { auto: 1, scroll: 1 },
      sw = function (e) {
        var t,
          r = e.event,
          n = e.target,
          i = e.axis,
          o = (r.changedTouches ? r.changedTouches[0] : r).target,
          s = o._gsap || ip.core.getCache(o),
          a = i$();
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
          for (
            ;
            o &&
            o !== ib &&
            ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
              !(s_[(t = oO(o)).overflowY] || s_[t.overflowX]));
          )
            o = o.parentNode;
          ((s._isScroll = o && o !== n && !ot(o) && (s_[(t = oO(o)).overflowY] || s_[t.overflowX])),
            (s._isScrollT = a));
        }
        (s._isScroll || "x" === i) && (r.stopPropagation(), (r._gsapAllow = !0));
      },
      sA = function (e, t, r, n) {
        return ih.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (n = n && sw),
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: function () {
            return r && oS(iv, ih.eventTypes[0], sE, !1, !0);
          },
          onDisable: function () {
            return oP(iv, ih.eventTypes[0], sE, !0);
          },
        });
      },
      sk = /(input|label|select|textarea)/i,
      sE = function (e) {
        var t = sk.test(e.target.tagName);
        (t || sx) && ((e._gsapAllow = !0), (sx = t));
      },
      sO = function (e) {
        (ou(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer"));
        var t,
          r,
          n,
          i,
          o,
          s,
          a,
          l,
          c = e,
          u = c.normalizeScrollX,
          d = c.momentum,
          f = c.allowNestedScroll,
          h = c.onRelease,
          p = ii(e.target) || ix,
          m = ip.core.globals().ScrollSmoother,
          g = m && m.get(),
          v =
            iF &&
            ((e.content && ii(e.content)) || (g && !1 !== e.content && !g.smooth() && g.content())),
          x = is(p, ir),
          b = is(p, it),
          y = 1,
          _ =
            (ih.isTouch && ig.visualViewport
              ? ig.visualViewport.scale * ig.visualViewport.width
              : ig.outerWidth) / ig.innerWidth,
          w = 0,
          A = ol(d)
            ? function () {
                return d(t);
              }
            : function () {
                return d || 2.8;
              },
          k = sA(p, e.type, !0, f),
          E = function () {
            return (i = !1);
          },
          O = i6,
          C = i6,
          T = function () {
            ((r = oo(p, ir)), (C = iA(+!!iF, r)), u && (O = iA(0, oo(p, it))), (n = o4));
          },
          R = function () {
            ((v._gsap.y = i8(parseFloat(v._gsap.y) + x.offset) + "px"),
              (v.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(v._gsap.y) +
                ", 0, 1)"),
              (x.offset = x.cacheID = 0));
          },
          z = function () {
            if (i) {
              requestAnimationFrame(E);
              var e = i8(t.deltaY / 2),
                r = C(x.v - e);
              if (v && r !== x.v + x.offset) {
                x.offset = r - x.v;
                var n = i8((parseFloat(v && v._gsap.y) || 0) - x.offset);
                ((v.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)"),
                  (v._gsap.y = n + "px"),
                  (x.cacheID = nZ.cache),
                  st());
              }
              return !0;
            }
            (x.offset && R(), (i = !0));
          },
          M = function () {
            (T(),
              o.isActive() &&
                o.vars.scrollY > r &&
                (x() > r ? o.progress(1) && x(r) : o.resetTo("scrollY", r)));
          };
        return (
          v && ip.set(v, { y: "+=0" }),
          (e.ignoreCheck = function (e) {
            return (
              (iF && "touchmove" === e.type && z()) ||
              (y > 1.05 && "touchstart" !== e.type) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            i = !1;
            var e = y;
            ((y = i8(((ig.visualViewport && ig.visualViewport.scale) || 1) / _)),
              o.pause(),
              e !== y && sy(p, y > 1.01 || (!u && "x")),
              (s = b()),
              (a = x()),
              T(),
              (n = o4));
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if ((x.offset && R(), t)) {
                nZ.cache++;
                var n,
                  i,
                  s = A();
                (u &&
                  ((i = (n = b()) + -(0.05 * s * e.velocityX) / 0.227),
                  (s *= sb(b, n, i, oo(p, it))),
                  (o.vars.scrollX = O(i))),
                  (i = (n = x()) + -(0.05 * s * e.velocityY) / 0.227),
                  (s *= sb(x, n, i, oo(p, ir))),
                  (o.vars.scrollY = C(i)),
                  o.invalidate().duration(s).play(0.01),
                  ((iF && o.vars.scrollY >= r) || n >= r - 1) &&
                    ip.to({}, { onUpdate: M, duration: s }));
              } else l.restart(!0);
              h && h(e);
            }),
          (e.onWheel = function () {
            (o._ts && o.pause(), i$() - w > 1e3 && ((n = 0), (w = i$())));
          }),
          (e.onChange = function (e, t, r, i, o) {
            if (
              (o4 !== n && T(),
              t && u && b(O(i[2] === t ? s + (e.startX - e.x) : b() + t - i[1])),
              r)
            ) {
              x.offset && R();
              var l = o[2] === r,
                c = l ? a + e.startY - e.y : x() + r - o[1],
                d = C(c);
              (l && c !== d && (a += d - c), x(d));
            }
            (r || t) && st();
          }),
          (e.onEnable = function () {
            (sy(p, !u && "x"),
              sv.addEventListener("refresh", M),
              oS(ig, "resize", M),
              x.smooth && ((x.target.style.scrollBehavior = "auto"), (x.smooth = b.smooth = !1)),
              k.enable());
          }),
          (e.onDisable = function () {
            (sy(p, !0), oP(ig, "resize", M), sv.removeEventListener("refresh", M), k.kill());
          }),
          (e.lockAxis = !1 !== e.lockAxis),
          ((t = new ih(e)).iOS = iF),
          iF && !x() && x(1),
          iF && ip.ticker.add(i6),
          (l = t._dc),
          (o = ip.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: sp(x, x(), function () {
                return o.pause();
              }),
            },
            onUpdate: st,
            onComplete: l.vars.onComplete,
          })),
          t
        );
      };
    ((sv.sort = function (e) {
      if (ol(e)) return oU.sort(e);
      var t = ig.pageYOffset || 0;
      return (
        sv.getAll().forEach(function (e) {
          return (e._sortY = e.trigger
            ? t + e.trigger.getBoundingClientRect().top
            : e.start + ig.innerHeight);
        }),
        oU.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                (e.vars.containerAnimation ? 1e6 : e._sortY) -
                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                  -1e6 * (t.vars.refreshPriority || 0))
              );
            },
        )
      );
    }),
      (sv.observe = function (e) {
        return new ih(e);
      }),
      (sv.normalizeScroll = function (e) {
        if (void 0 === e) return iD;
        if (!0 === e && iD) return iD.enable();
        if (!1 === e) {
          (iD && iD.kill(), (iD = e));
          return;
        }
        var t = e instanceof ih ? e : sO(e);
        return (iD && iD.target === t.target && iD.kill(), ot(t.target) && (iD = t), t);
      }),
      (sv.core = {
        _getVelocityProp: ia,
        _inputObserver: sA,
        _scrollers: nZ,
        _proxies: n$,
        bridge: {
          ss: function () {
            (i1 || oZ("scrollStart"), (i1 = i$()));
          },
          ref: function () {
            return iO;
          },
        },
      }),
      oe() && ip.registerPlugin(sv),
      e.s(["ScrollTrigger", 0, sv], 83495));
  },
  75254,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      n = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
          r ? r.toUpperCase() : t.toLowerCase(),
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var i = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let o = (0, t.forwardRef)(
      (
        {
          color: e = "currentColor",
          size: n = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          className: a = "",
          children: l,
          iconNode: c,
          ...u
        },
        d,
      ) =>
        (0, t.createElement)(
          "svg",
          {
            ref: d,
            ...i,
            width: n,
            height: n,
            stroke: e,
            strokeWidth: s ? (24 * Number(o)) / Number(n) : o,
            className: r("lucide", a),
            ...(!l &&
              !((e) => {
                for (let t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                return !1;
              })(u) && { "aria-hidden": "true" }),
            ...u,
          },
          [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(l) ? l : [l])],
        ),
    );
    e.s(
      [
        "default",
        0,
        (e, i) => {
          let s = (0, t.forwardRef)(({ className: s, ...a }, l) =>
            (0, t.createElement)(o, {
              ref: l,
              iconNode: i,
              className: r(
                `lucide-${n(e)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${e}`,
                s,
              ),
              ...a,
            }),
          );
          return ((s.displayName = n(e)), s);
        },
      ],
      75254,
    );
  },
  58211,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(75254);
    let n = (0, r.default)("instagram", [
        ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
        ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
        ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
      ]),
      i = (0, r.default)("linkedin", [
        [
          "path",
          {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
          },
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
        ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
      ]),
      o = (0, r.default)("mail", [
        ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
        ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
      ]),
      s = (0, r.default)("map-pin", [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ]),
      a = (0, r.default)("phone", [
        [
          "path",
          {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v",
          },
        ],
      ]),
      l = (0, r.default)("youtube", [
        [
          "path",
          {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
            key: "1q2vi4",
          },
        ],
        ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
      ]),
      c = [
        { title: "Company", links: ["About", "Careers", "Our Process", "Blog"] },
        { title: "Quick Links", links: ["Home", "Projects", "Testimonials", "Contact"] },
        {
          title: "Solutions",
          links: ["Smart Home", "Security & CCTV", "Lighting", "Home Theatre", "Commercial"],
        },
      ];
    e.s(
      [
        "Footer",
        0,
        function () {
          return (0, t.jsx)("footer", {
            className: "border-t border-border bg-secondary/60",
            children: (0, t.jsxs)("div", {
              className: "mx-auto w-full max-w-[1280px] px-6 py-20",
              children: [
                (0, t.jsxs)("div", {
                  className: "grid gap-14 lg:grid-cols-[1.3fr_repeat(3,0.7fr)_1.1fr]",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("span", {
                          className: "font-display text-xl font-extrabold tracking-tight",
                          children: [
                            "FusionTech",
                            (0, t.jsx)("span", { className: "text-primary", children: " Expert" }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "mt-4 max-w-xs text-base text-muted-foreground",
                          children:
                            "Intelligent home and commercial automation — designed, installed and supported for life.",
                        }),
                        (0, t.jsx)("div", {
                          className: "mt-6 flex gap-3",
                          children: [n, i, l].map((e, r) =>
                            (0, t.jsx)(
                              "a",
                              {
                                href: "#",
                                "aria-label": "Social profile",
                                className:
                                  "grid size-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary",
                                children: (0, t.jsx)(e, { className: "size-4", strokeWidth: 1.5 }),
                              },
                              r,
                            ),
                          ),
                        }),
                      ],
                    }),
                    c.map((e) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          children: [
                            (0, t.jsx)("h3", {
                              className: "text-base font-semibold",
                              children: e.title,
                            }),
                            (0, t.jsx)("ul", {
                              className: "mt-5 space-y-3",
                              children: e.links.map((e) =>
                                (0, t.jsx)(
                                  "li",
                                  {
                                    children: (0, t.jsx)("a", {
                                      href: "#",
                                      className:
                                        "text-base text-muted-foreground transition-colors hover:text-primary",
                                      children: e,
                                    }),
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h3", {
                          className: "text-base font-semibold",
                          children: "Contact",
                        }),
                        (0, t.jsxs)("ul", {
                          className: "mt-5 space-y-3 text-base text-muted-foreground",
                          children: [
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(s, {
                                  className: "mt-1 size-4 shrink-0 text-primary",
                                  strokeWidth: 1.5,
                                }),
                                "Level 4, Tech Boulevard, Bengaluru 560103",
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, t.jsx)(a, {
                                  className: "size-4 shrink-0 text-primary",
                                  strokeWidth: 1.5,
                                }),
                                (0, t.jsx)("a", {
                                  href: "tel:+919000000000",
                                  className: "hover:text-primary",
                                  children: "+91 90000 00000",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, t.jsx)(o, {
                                  className: "size-4 shrink-0 text-primary",
                                  strokeWidth: 1.5,
                                }),
                                (0, t.jsx)("a", {
                                  href: "mailto:hello@fusiontechexpert.com",
                                  className: "hover:text-primary",
                                  children: "hello@fusiontechexpert.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("form", {
                          className: "mt-7",
                          onSubmit: (e) => {
                            (e.preventDefault(), e.currentTarget.reset());
                          },
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "newsletter",
                              className: "text-sm text-muted-foreground",
                              children: "Newsletter",
                            }),
                            (0, t.jsxs)("div", {
                              className: "mt-2 flex gap-2",
                              children: [
                                (0, t.jsx)("input", {
                                  id: "newsletter",
                                  type: "email",
                                  required: !0,
                                  placeholder: "you@email.com",
                                  className:
                                    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary",
                                }),
                                (0, t.jsx)("button", {
                                  type: "submit",
                                  className:
                                    "rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-deep",
                                  children: "Join",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "mt-16 overflow-hidden rounded-[24px] border border-border",
                  children: (0, t.jsx)("iframe", {
                    title: "FusionTech Expert office location",
                    src: "https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.88%2C77.78%2C13.06&layer=mapnik",
                    loading: "lazy",
                    className: "h-[300px] w-full grayscale-[0.35]",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "mt-10 flex flex-col justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row",
                  children: [
                    (0, t.jsxs)("p", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " FusionTech Expert. All rights reserved.",
                      ],
                    }),
                    (0, t.jsx)("p", { children: "Privacy Policy · Terms of Service" }),
                  ],
                }),
              ],
            }),
          });
        },
      ],
      58211,
    );
  },
  80941,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(89970),
      i = e.i(83495);
    let o = (0, e.i(75254).default)("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    n.default.registerPlugin(i.ScrollTrigger);
    let s = (e) =>
      e
        .split("")
        .map((e, r) =>
          (0, t.jsx)(
            "span",
            { className: "inline-block will-change-transform", children: " " === e ? " " : e },
            r,
          ),
        );
    e.s(
      [
        "Hero",
        0,
        function () {
          let e = (0, r.useRef)(null),
            a = (0, r.useRef)(null),
            l = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            u = (0, r.useRef)(null),
            d = (0, r.useRef)(null),
            f = (0, r.useRef)(null),
            h = (0, r.useRef)(null),
            p = (0, r.useRef)([]);
          return (
            (0, r.useEffect)(() => {
              let t = n.default.context(() => {
                  let t = n.default.timeline(),
                    r = c.current?.children || [],
                    o = u.current?.children || [],
                    s = d.current?.children || [];
                  (n.default.set(l.current, { opacity: 0, y: 15 }),
                    n.default.set([r, o, s], {
                      opacity: 0,
                      y: 50,
                      rotateX: -90,
                      transformOrigin: "50% 50% -20px",
                    }),
                    n.default.set(f.current, { opacity: 0, y: 20 }),
                    n.default.set(h.current, { opacity: 0 }),
                    t.to(l.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.2),
                    t.to(
                      r,
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        stagger: 0.03,
                        duration: 0.8,
                        ease: "power3.out",
                      },
                      0.35,
                    ),
                    t.to(
                      o,
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        stagger: 0.03,
                        duration: 0.8,
                        ease: "power3.out",
                      },
                      0.6,
                    ),
                    t.to(
                      s,
                      {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        stagger: 0.03,
                        duration: 0.8,
                        ease: "power3.out",
                      },
                      0.85,
                    ),
                    t.to(f.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.4),
                    t.to(h.current, { opacity: 1, duration: 0.6, ease: "power3.out" }, 1.9),
                    i.ScrollTrigger.create({
                      trigger: e.current,
                      start: "top top",
                      end: "bottom top",
                      scrub: !0,
                      animation: n.default
                        .timeline()
                        .to(a.current, { scale: 1.03, ease: "none" }, 0)
                        .to(
                          [l.current, c.current, u.current, d.current, f.current, h.current],
                          { y: -30, opacity: 0, stagger: 0.05, ease: "none" },
                          0,
                        ),
                    }));
                }, e),
                r = (e) => {
                  n.default.to(p.current, {
                    x: e.clientX,
                    y: e.clientY,
                    stagger: 0.02,
                    ease: "power3.out",
                    overwrite: "auto",
                    duration: 0.5,
                  });
                };
              return (
                window.addEventListener("mousemove", r),
                () => {
                  (t.revert(), window.removeEventListener("mousemove", r));
                }
              );
            }, []),
            (0, t.jsxs)("section", {
              ref: e,
              className:
                "relative w-full h-[100svh] min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center",
              children: [
                (0, t.jsx)("div", {
                  className: "hidden md:block pointer-events-none",
                  children: [...Array(8)].map((e, r) => {
                    let n = Math.max(4, 12 - 1.5 * r);
                    return (0, t.jsx)(
                      "div",
                      {
                        ref: (e) => {
                          p.current[r] = e;
                        },
                        className:
                          "fixed top-0 left-0 rounded-full bg-white mix-blend-difference z-[100]",
                        style: {
                          width: n,
                          height: n,
                          marginLeft: -n / 2,
                          marginTop: -n / 2,
                          opacity: 1 - 0.1 * r,
                        },
                      },
                      r,
                    );
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "absolute inset-0 z-0 overflow-hidden bg-white",
                  children: [
                    (0, t.jsx)("video", {
                      ref: a,
                      src: "/hero-2-video.mp4",
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      className: "w-full h-full object-cover object-center md:object-right",
                      preload: "metadata",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-y-0 left-0 w-full md:w-[50%] bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 to-transparent md:to-transparent pointer-events-none",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-16",
                  children: (0, t.jsxs)("div", {
                    className: "w-full md:w-[42%] flex flex-col justify-center",
                    children: [
                      (0, t.jsx)("div", {
                        ref: l,
                        className:
                          "text-xs md:text-sm font-medium tracking-widest text-zinc-800 mb-6 md:mb-8",
                        children: "FUSION TECH",
                      }),
                      (0, t.jsxs)("h1", {
                        className:
                          "font-instrument text-3xl md:text-4xl lg:text-5xl xl:text-[3.75rem] text-[#111111] leading-[0.9] tracking-[-0.04em] mb-8",
                        style: { perspective: "1000px" },
                        children: [
                          (0, t.jsx)("span", {
                            className: "block overflow-hidden pb-2 font-medium",
                            children: (0, t.jsx)("div", { ref: c, children: s("INTELLIGENCE.") }),
                          }),
                          (0, t.jsx)("span", {
                            className: "block overflow-hidden pb-2 font-normal",
                            children: (0, t.jsx)("div", { ref: u, children: s("BUILT INTO") }),
                          }),
                          (0, t.jsx)("span", {
                            className: "block overflow-hidden pb-2 font-medium",
                            children: (0, t.jsx)("div", { ref: d, children: s("YOUR SPACE.") }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        ref: f,
                        className:
                          "text-zinc-600 text-sm md:text-base max-w-[380px] mb-10 leading-relaxed",
                        children:
                          "Lighting, climate, security and entertainment — quietly connected around the way you live.",
                      }),
                      (0, t.jsxs)("a", {
                        ref: h,
                        href: "#explore",
                        className:
                          "inline-flex items-center text-xs md:text-sm font-medium text-zinc-900 group tracking-wide",
                        children: [
                          (0, t.jsxs)("span", {
                            className: "relative overflow-hidden pb-1",
                            children: [
                              "EXPLORE THE EXPERIENCE",
                              (0, t.jsx)("span", {
                                className:
                                  "absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 transform origin-left transition-transform duration-300 group-hover:scale-x-0",
                              }),
                            ],
                          }),
                          (0, t.jsx)(o, {
                            className:
                              "ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-500",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
      ],
      80941,
    );
  },
  7641,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(75254);
    let i = (0, n.default)("sunrise", [
        ["path", { d: "M12 2v8", key: "1q4o3n" }],
        ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
        ["path", { d: "M2 18h2", key: "j10viu" }],
        ["path", { d: "M20 18h2", key: "wocana" }],
        ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
        ["path", { d: "M22 22H2", key: "19qnx5" }],
        ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
        ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
      ]),
      o = (0, n.default)("film", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
        ["path", { d: "M7 3v18", key: "bbkbws" }],
        ["path", { d: "M3 7.5h4", key: "zfgn84" }],
        ["path", { d: "M3 12h18", key: "1i2n21" }],
        ["path", { d: "M3 16.5h4", key: "1230mu" }],
        ["path", { d: "M17 3v18", key: "in4fa5" }],
        ["path", { d: "M17 7.5h4", key: "myr1c1" }],
        ["path", { d: "M17 16.5h4", key: "go4c1d" }],
      ]),
      s = (0, n.default)("lock-keyhole", [
        ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
        ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
        ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
      ]),
      a = (0, n.default)("moon", [
        [
          "path",
          {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm",
          },
        ],
      ]);
    var l = e.i(75157),
      c = e.i(2239);
    let u = [
      {
        icon: i,
        title: "Morning",
        time: "06:45",
        steps: ["Lights gradually turn on", "Curtains open", "Coffee machine starts"],
      },
      {
        icon: o,
        title: "Movie Night",
        time: "20:30",
        steps: ["Lights dim to 15%", "Curtains close", "TV & sound power on"],
      },
      {
        icon: s,
        title: "Away Mode",
        time: "09:15",
        steps: ["Doors lock", "CCTV activates", "Notifications enabled"],
      },
      {
        icon: a,
        title: "Good Night",
        time: "23:00",
        steps: ["All lights off", "Security armed", "AC adjusts to 24°C"],
      },
    ];
    e.s(
      [
        "Lifestyle",
        0,
        function () {
          let [e, n] = (0, r.useState)(null);
          return (0, t.jsx)("section", {
            className: "py-24 lg:py-[120px]",
            children: (0, t.jsxs)("div", {
              className: "mx-auto w-full max-w-[1280px] px-6",
              children: [
                (0, t.jsxs)(c.Reveal, {
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-sm tracking-[0.24em] text-muted-foreground uppercase",
                      children: "Experience smart living",
                    }),
                    (0, t.jsx)("h2", {
                      className:
                        "mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]",
                      children: "Automation that fits your lifestyle",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-5 max-w-xl text-lg text-muted-foreground",
                      children:
                        "Not a list of devices — a set of moments. One touch, one word, or no input at all.",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                  children: u.map((r, i) =>
                    (0, t.jsx)(
                      c.Reveal,
                      {
                        delay: 90 * i,
                        children: (0, t.jsxs)("div", {
                          onMouseEnter: () => n(i),
                          onMouseLeave: () => n(null),
                          className:
                            "group h-full rounded-[20px] border border-border bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "grid size-11 place-items-center rounded-full bg-accent text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground",
                                  children: (0, t.jsx)(r.icon, {
                                    className: "size-5",
                                    strokeWidth: 1.4,
                                  }),
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "font-display text-sm text-muted-foreground tabular-nums",
                                  children: r.time,
                                }),
                              ],
                            }),
                            (0, t.jsx)("h3", {
                              className: "mt-6 text-xl font-bold tracking-tight",
                              children: r.title,
                            }),
                            (0, t.jsx)("ul", {
                              className: "mt-5 space-y-3",
                              children: r.steps.map((r, n) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-start gap-3 text-[15px] text-muted-foreground",
                                    children: [
                                      (0, t.jsx)("span", {
                                        style: { transitionDelay: `${140 * n}ms` },
                                        className: (0, l.cn)(
                                          "mt-2 size-1.5 shrink-0 rounded-full transition-all duration-500",
                                          e === i ? "scale-125 bg-primary" : "bg-border",
                                        ),
                                      }),
                                      r,
                                    ],
                                  },
                                  r,
                                ),
                              ),
                            }),
                          ],
                        }),
                      },
                      r.title,
                    ),
                  ),
                }),
              ],
            }),
          });
        },
      ],
      7641,
    );
  },
  49409,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(75254);
    let i = (0, n.default)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]),
      o = (0, n.default)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      s = (0, n.default)("sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]),
      a = (0, n.default)("moon-star", [
        ["path", { d: "M18 5h4", key: "1lhgn2" }],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        [
          "path",
          {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm",
          },
        ],
      ]);
    var l = e.i(33071),
      c = e.i(75157);
    let u = [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ];
    e.s(
      [
        "Nav",
        0,
        function () {
          let [e, n] = (0, r.useState)(!1),
            [d, f] = (0, r.useState)(!1),
            { mode: h, setMode: p, isTransitioning: m } = (0, l.useEnvironment)(),
            g = "night" === h;
          return (
            (0, r.useEffect)(() => {
              let e = () => n(window.scrollY > 40);
              return (
                e(),
                window.addEventListener("scroll", e, { passive: !0 }),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, t.jsxs)("header", {
              className: (0, c.cn)(
                "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                e
                  ? "border-b border-border/60 bg-background/70 py-3 backdrop-blur-xl"
                  : "border-b border-transparent py-6",
              ),
              children: [
                (0, t.jsxs)("nav", {
                  className: "mx-auto flex w-full max-w-[1280px] items-center justify-between px-6",
                  children: [
                    (0, t.jsx)("a", {
                      href: "#home",
                      className: "flex items-center gap-2.5",
                      children: (0, t.jsxs)("span", {
                        className: (0, c.cn)(
                          "font-display font-extrabold tracking-tight transition-all",
                          e ? "text-base" : "text-lg",
                        ),
                        children: [
                          "FusionTech",
                          (0, t.jsx)("span", { className: "text-primary", children: " Expert" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("ul", {
                      className: "hidden items-center gap-10 md:flex",
                      children: u.map((e) =>
                        (0, t.jsx)(
                          "li",
                          {
                            children: (0, t.jsx)("a", {
                              href: e.href,
                              className:
                                "story-link text-[15px] text-muted-foreground transition-colors hover:text-foreground",
                              children: e.label,
                            }),
                          },
                          e.label,
                        ),
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, t.jsx)("button", {
                          type: "button",
                          disabled: m,
                          onClick: () => p(g ? "day" : "night"),
                          "aria-label": g ? "Switch to light mode" : "Switch to dark mode",
                          className: (0, c.cn)(
                            "hidden md:grid size-10 place-items-center rounded-full bg-secondary/80 text-foreground transition-all duration-300 hover:bg-secondary",
                            m && "opacity-70 pointer-events-none",
                          ),
                          children: g
                            ? (0, t.jsx)(a, { className: "size-5", strokeWidth: 1.5 })
                            : (0, t.jsx)(s, { className: "size-5", strokeWidth: 1.5 }),
                        }),
                        (0, t.jsx)("a", {
                          href: "#contact",
                          className:
                            "hidden rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift md:inline-flex",
                          children: "Get Quote",
                        }),
                        (0, t.jsx)("button", {
                          "aria-label": d ? "Close menu" : "Open menu",
                          onClick: () => f((e) => !e),
                          className:
                            "grid size-10 place-items-center rounded-full border border-border md:hidden",
                          children: d
                            ? (0, t.jsx)(o, { className: "size-5", strokeWidth: 1.5 })
                            : (0, t.jsx)(i, { className: "size-5", strokeWidth: 1.5 }),
                        }),
                      ],
                    }),
                  ],
                }),
                d &&
                  (0, t.jsx)("div", {
                    className:
                      "mx-6 mt-3 rounded-[20px] border border-border bg-background/95 p-6 backdrop-blur-xl md:hidden",
                    children: (0, t.jsxs)("ul", {
                      className: "flex flex-col gap-5",
                      children: [
                        u.map((e) =>
                          (0, t.jsx)(
                            "li",
                            {
                              children: (0, t.jsx)("a", {
                                href: e.href,
                                onClick: () => f(!1),
                                className: "text-base text-foreground",
                                children: e.label,
                              }),
                            },
                            e.label,
                          ),
                        ),
                        (0, t.jsx)("li", {
                          children: (0, t.jsx)("a", {
                            href: "#contact",
                            onClick: () => f(!1),
                            className:
                              "inline-flex rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-primary-foreground",
                            children: "Get Quote",
                          }),
                        }),
                        (0, t.jsx)("li", {
                          children: (0, t.jsx)("button", {
                            type: "button",
                            disabled: m,
                            onClick: () => {
                              (p(g ? "day" : "night"), f(!1));
                            },
                            "aria-label": g ? "Switch to light mode" : "Switch to dark mode",
                            className: (0, c.cn)(
                              "flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-[15px] font-medium text-foreground transition-all duration-300 hover:bg-secondary",
                              m && "opacity-70 pointer-events-none",
                            ),
                            children: g
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(a, { className: "size-5", strokeWidth: 1.5 }),
                                    " Light Mode",
                                  ],
                                })
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(s, { className: "size-5", strokeWidth: 1.5 }),
                                    " Dark Mode",
                                  ],
                                }),
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
      ],
      49409,
    );
  },
  2239,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(75157);
    function i(e = 0.2) {
      let t = (0, r.useRef)(null),
        [n, o] = (0, r.useState)(!1);
      return (
        (0, r.useEffect)(() => {
          let r = t.current;
          if (!r) return;
          let n = new IntersectionObserver(
            (e) => {
              e[0]?.isIntersecting && (o(!0), n.disconnect());
            },
            { threshold: e, rootMargin: "0px 0px -8% 0px" },
          );
          return (n.observe(r), () => n.disconnect());
        }, [e]),
        { ref: t, inView: n }
      );
    }
    e.s([
      "Reveal",
      0,
      function ({ children: e, delay: r = 0, className: o, as: s = "div" }) {
        let { ref: a, inView: l } = i(0.15);
        return (0, t.jsx)(s, {
          ref: a,
          style: { transitionDelay: `${r}ms` },
          className: (0, n.cn)(
            "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
            l ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[2px]",
            o,
          ),
          children: e,
        });
      },
      "useInView",
      0,
      i,
    ]);
  },
  48667,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(75157),
      i = e.i(2239);
    let o = {
        src: e.i(86932).default,
        width: 1408,
        height: 1008,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0CW31azukka9VzJKoIBIHJ/wqbMG9D//Z",
      },
      s = [
        {
          key: "living",
          name: "Living Room",
          x: "26%",
          y: "66%",
          items: [
            "Voice-controlled lighting",
            "Motorized curtains",
            "Entertainment control",
            "Climate automation",
          ],
        },
        {
          key: "bedroom",
          name: "Bedroom",
          x: "24%",
          y: "28%",
          items: [
            "Bedside scene panels",
            "Blackout blinds",
            "Silent AC control",
            "Do-not-disturb mode",
          ],
        },
        {
          key: "kitchen",
          name: "Kitchen",
          x: "45%",
          y: "52%",
          items: ["Task & under-cabinet lighting", "Smoke & gas sensors", "Appliance scheduling"],
        },
        {
          key: "garden",
          name: "Garden",
          x: "82%",
          y: "78%",
          items: ["Landscape lighting scenes", "Irrigation automation", "Perimeter cameras"],
        },
        {
          key: "garage",
          name: "Garage",
          x: "12%",
          y: "82%",
          items: ["Automated shutter", "EV charging control", "Number plate recognition"],
        },
        {
          key: "office",
          name: "Office",
          x: "70%",
          y: "34%",
          items: ["Video-call lighting presets", "Acoustic shading", "Occupancy-based climate"],
        },
      ];
    e.s(
      [
        "SmartHomeMap",
        0,
        function () {
          let [e, a] = (0, r.useState)(0),
            l = s[e];
          return (0, t.jsx)("section", {
            className: "py-24 lg:py-[120px]",
            children: (0, t.jsxs)("div", {
              className: "mx-auto w-full max-w-[1280px] px-6",
              children: [
                (0, t.jsxs)(i.Reveal, {
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-sm tracking-[0.24em] text-muted-foreground uppercase",
                      children: "Explore a smart home",
                    }),
                    (0, t.jsx)("h2", {
                      className:
                        "mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]",
                      children: "Every room, working quietly in your favour",
                    }),
                  ],
                }),
                (0, t.jsx)(i.Reveal, {
                  className: "mt-14",
                  children: (0, t.jsxs)("div", {
                    className: "grid gap-8 lg:grid-cols-[1.55fr_1fr]",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "relative overflow-hidden rounded-[24px] border border-border bg-accent/40",
                        children: [
                          (0, t.jsx)("img", {
                            src: o.src,
                            alt: "Isometric cutaway illustration of a smart home",
                            loading: "lazy",
                            width: 1408,
                            height: 1008,
                            className: "w-full object-cover",
                          }),
                          s.map((r, i) =>
                            (0, t.jsx)(
                              "button",
                              {
                                onMouseEnter: () => a(i),
                                onFocus: () => a(i),
                                onClick: () => a(i),
                                "aria-label": r.name,
                                style: { left: r.x, top: r.y },
                                className:
                                  "absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none",
                                children: (0, t.jsxs)("span", {
                                  className: (0, n.cn)(
                                    "flex items-center gap-2 rounded-full border py-1.5 pr-3.5 pl-1.5 text-[13px] font-medium whitespace-nowrap backdrop-blur-md transition-all duration-500",
                                    e === i
                                      ? "border-primary bg-primary text-primary-foreground shadow-lift"
                                      : "border-border bg-background/80 text-foreground hover:border-primary/40",
                                  ),
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: (0, n.cn)(
                                        "size-2.5 rounded-full transition-colors",
                                        e === i ? "bg-primary-foreground" : "bg-primary",
                                      ),
                                    }),
                                    r.name,
                                  ],
                                }),
                              },
                              r.key,
                            ),
                          ),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col justify-between rounded-[24px] border border-border bg-card p-8",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("span", {
                                className: "text-sm tracking-[0.2em] text-primary uppercase",
                                children: "Selected space",
                              }),
                              (0, t.jsx)("h3", {
                                className: "mt-3 text-3xl font-bold tracking-[-0.02em]",
                                children: l.name,
                              }),
                              (0, t.jsx)("ul", {
                                className: "mt-8 space-y-4",
                                children: l.items.map((e) =>
                                  (0, t.jsxs)(
                                    "li",
                                    {
                                      className:
                                        "flex items-start gap-3 text-[17px] text-muted-foreground",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className: "mt-2.5 h-px w-6 shrink-0 bg-primary",
                                        }),
                                        e,
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-10 text-sm text-muted-foreground",
                            children:
                              "Hover or tap a room to see what automation looks like there.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
      ],
      48667,
    );
  },
  87177,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645);
    let n = (0, e.i(75254).default)("arrow-up-right", [
      ["path", { d: "M7 7h10v10", key: "1tivn9" }],
      ["path", { d: "M7 17 17 7", key: "1vkiza" }],
    ]);
    var i = e.i(89970),
      o = e.i(83495),
      s = e.i(75157),
      a = e.i(2239);
    let l = {
        src: e.i(83913).default,
        width: 1200,
        height: 900,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDHsr9b61S7jV45jn592SPx9K9HCUHyKSlY5sRiIyk04n//2Q==",
      },
      c = {
        src: e.i(8616).default,
        width: 1200,
        height: 900,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC5ql7JceLtQgUsFSCcON3BIQjgfgawS9416H//2Q==",
      },
      u = {
        src: e.i(27240).default,
        width: 1200,
        height: 900,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmv7Suv+EXWD5cG4znPOcdfyrLm05jr5Pesf/Z",
      },
      d = {
        src: e.i(25751).default,
        width: 1200,
        height: 900,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDB0wpqGpzW32aOIpEZVYMSCPTFc7jod0Z3kf/Z",
      },
      f = {
        src: e.i(96563).default,
        width: 1200,
        height: 900,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDT1Od38OfaD67dnqvXOfXtjpSm7MqEbo//2Q==",
      };
    i.default.registerPlugin(o.ScrollTrigger);
    let h = [
      {
        n: "01",
        title: "Smart Home Automation",
        copy: "One intelligent layer across lighting, climate, curtains, audio and access — controlled by app, panel or voice.",
        features: ["Scene control", "Voice & app control", "Energy insights"],
        image: l,
        alt: "Modern luxury villa exterior at dusk with automated exterior lighting",
      },
      {
        n: "02",
        title: "Security & Surveillance",
        copy: "Discreet, always-on protection with intelligent alerts that tell you what matters and ignore what doesn't.",
        features: ["CCTV & NVR", "Access control", "Video door phone"],
        image: c,
        alt: "Modern home entrance with access control keypad and discreet camera",
      },
      {
        n: "03",
        title: "Lighting Automation",
        copy: "Architectural lighting that shifts with the hour — warm evenings, focused mornings, effortless energy savings.",
        features: ["Ambient scenes", "Tunable white", "Energy saving"],
        image: u,
        alt: "Luxury hallway with architectural linear lighting",
      },
      {
        n: "04",
        title: "Home Theatre",
        copy: "Acoustically tuned cinema rooms where a single button dims the lights, closes the curtains and starts the film.",
        features: ["Immersive sound", "Calibrated projection", "One-touch control"],
        image: d,
        alt: "Private home cinema room with tiered seating and acoustic panels",
      },
      {
        n: "05",
        title: "Commercial Automation",
        copy: "Buildings that run themselves — meeting spaces, hospitality and retail environments managed from one dashboard.",
        features: ["Conference rooms", "Hotels & restaurants", "Central monitoring"],
        image: f,
        alt: "Modern glass-walled conference room with integrated AV display",
      },
    ];
    e.s(
      [
        "Solutions",
        0,
        function () {
          let e = (0, r.useRef)(null),
            l = (0, r.useRef)([]);
          return (
            (0, r.useLayoutEffect)(() => {
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              let t = i.default.context(() => {
                let t = l.current.length,
                  r = l.current[0];
                if (!r) return;
                i.default.set(r, { y: "0%", scale: 1, rotation: 0, opacity: 1 });
                for (let e = 1; e < t; e++) {
                  let t = l.current[e];
                  t && i.default.set(t, { y: "150%", scale: 1, rotation: 0, opacity: 1 });
                }
                let n = i.default.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top 12%",
                    end: `+=${window.innerHeight * t}`,
                    pin: !0,
                    scrub: 0.5,
                    pinSpacing: !0,
                  },
                });
                for (let e = 0; e < t - 1; e++) {
                  let t = l.current[e],
                    r = l.current[e + 1],
                    i = e;
                  t &&
                    r &&
                    (n.to(
                      t,
                      {
                        scale: 0.85,
                        rotation: e % 2 == 0 ? -4 : 4,
                        opacity: 0.4,
                        y: "-5%",
                        duration: 1,
                        ease: "none",
                      },
                      i,
                    ),
                    n.to(r, { y: "0%", duration: 1, ease: "power2.inOut" }, i));
                }
                let s = new ResizeObserver(() => {
                  o.ScrollTrigger.refresh();
                });
                return (
                  e.current && s.observe(e.current),
                  () => {
                    s.disconnect();
                  }
                );
              }, e);
              return () => t.revert();
            }, []),
            (0, t.jsx)("section", {
              id: "solutions",
              className: "bg-secondary/50 py-24 lg:py-[120px]",
              children: (0, t.jsxs)("div", {
                className: "mx-auto w-full max-w-[1280px] px-6",
                children: [
                  (0, t.jsxs)(a.Reveal, {
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-sm tracking-[0.24em] text-muted-foreground uppercase",
                        children: "Our solutions",
                      }),
                      (0, t.jsx)("h2", {
                        className:
                          "mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]",
                        children: "The technology behind the experience",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "mt-16 relative h-[80vh] min-h-[600px] w-full",
                    style: { perspective: "1200px" },
                    ref: e,
                    children: h.map((e, r) =>
                      (0, t.jsxs)(
                        "article",
                        {
                          ref: (e) => {
                            l.current[r] = e;
                          },
                          className: (0, s.cn)(
                            "absolute top-0 left-0 w-full h-full",
                            "group grid items-center gap-8 overflow-hidden rounded-[24px] border border-border bg-card p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] lg:grid-cols-2 lg:gap-16 lg:p-8 will-change-transform",
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, s.cn)(
                                "h-[40vh] min-h-[260px] lg:h-full w-full overflow-hidden rounded-[20px]",
                                r % 2 == 1 && "lg:order-2",
                              ),
                              children: (0, t.jsx)("img", {
                                src: e.image.src,
                                alt: e.alt,
                                loading: "lazy",
                                width: 1200,
                                height: 900,
                                className:
                                  "sol-image h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, s.cn)(
                                "flex flex-col justify-center",
                                r % 2 == 1 && "lg:order-1 lg:pl-6",
                              ),
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "anim-text block font-display text-sm tracking-widest text-primary",
                                  children: e.n,
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "anim-text mt-4 text-[clamp(1.6rem,2.4vw,2.25rem)] font-bold tracking-[-0.02em]",
                                  children: e.title,
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "anim-text mt-4 max-w-md text-lg leading-relaxed text-muted-foreground",
                                  children: e.copy,
                                }),
                                (0, t.jsx)("ul", {
                                  className: "anim-text mt-7 flex flex-wrap gap-2.5",
                                  children: e.features.map((e) =>
                                    (0, t.jsx)(
                                      "li",
                                      {
                                        className:
                                          "rounded-full border border-border bg-accent/60 px-4 py-1.5 text-sm text-accent-foreground",
                                        children: e,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, t.jsxs)("a", {
                                  href: "#contact",
                                  className:
                                    "anim-text mt-8 inline-flex items-center gap-2 text-base font-medium text-primary transition-all duration-300 hover:gap-3",
                                  children: [
                                    "Discuss this solution",
                                    (0, t.jsx)(n, { className: "size-4", strokeWidth: 1.6 }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  }),
                ],
              }),
            })
          );
        },
      ],
      87177,
    );
  },
  15228,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(2239);
    let i = [
      { value: 500, suffix: "+", label: "Projects" },
      { value: 12, suffix: "+", label: "Years" },
      { value: 35, suffix: "+", label: "Engineers" },
      { value: 24, suffix: "/7", label: "Support" },
    ];
    function o({ value: e, suffix: i }) {
      let { ref: s, inView: a } = (0, n.useInView)(0.4),
        [l, c] = (0, r.useState)(0);
      return (
        (0, r.useEffect)(() => {
          if (!a) return;
          let t = 0,
            r = performance.now(),
            n = (i) => {
              let o = Math.min((i - r) / 1600, 1);
              (c(Math.round(e * (1 - Math.pow(1 - o, 3)))),
                o < 1 && (t = requestAnimationFrame(n)));
            };
          return ((t = requestAnimationFrame(n)), () => cancelAnimationFrame(t));
        }, [a, e]),
        (0, t.jsxs)("span", {
          ref: s,
          className: "font-display text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight",
          children: [l, (0, t.jsx)("span", { className: "text-primary", children: i })],
        })
      );
    }
    e.s([
      "Trust",
      0,
      function () {
        return (0, t.jsx)("section", {
          id: "about",
          className: "border-y border-border bg-secondary/60 py-20 lg:py-24",
          children: (0, t.jsxs)("div", {
            className: "mx-auto w-full max-w-[1280px] px-6",
            children: [
              (0, t.jsx)("p", {
                className: "text-center text-sm tracking-[0.24em] text-muted-foreground uppercase",
                children: "Trusted Automation Partner",
              }),
              (0, t.jsx)("div", {
                className: "mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4",
                children: i.map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "text-center",
                      children: [
                        (0, t.jsx)(o, { value: e.value, suffix: e.suffix }),
                        (0, t.jsx)("p", {
                          className: "mt-2 text-base text-muted-foreground",
                          children: e.label,
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
        });
      },
    ]);
  },
  75157,
  (e) => {
    "use strict";
    var t;
    let r,
      n,
      i,
      o,
      s,
      a = (e = new Map(), t = null, r) => ({ nextPart: e, validators: t, classGroupId: r }),
      l = [],
      c = (e, t, r) => {
        if (0 == e.length - t) return r.classGroupId;
        let n = e[t],
          i = r.nextPart.get(n);
        if (i) {
          let r = c(e, t + 1, i);
          if (r) return r;
        }
        let o = r.validators;
        if (null === o) return;
        let s = 0 === t ? e.join("-") : e.slice(t).join("-"),
          a = o.length;
        for (let e = 0; e < a; e++) {
          let t = o[e];
          if (t.validator(s)) return t.classGroupId;
        }
      },
      u = (e, t) => {
        let r = a();
        for (let n in e) d(e[n], r, n, t);
        return r;
      },
      d = (e, t, r, n) => {
        let i = e.length;
        for (let o = 0; o < i; o++) f(e[o], t, r, n);
      },
      f = (e, t, r, n) => {
        "string" == typeof e ? h(e, t, r) : "function" == typeof e ? p(e, t, r, n) : m(e, t, r, n);
      },
      h = (e, t, r) => {
        ("" === e ? t : g(t, e)).classGroupId = r;
      },
      p = (e, t, r, n) => {
        v(e)
          ? d(e(n), t, r, n)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: r, validator: e }));
      },
      m = (e, t, r, n) => {
        let i = Object.entries(e),
          o = i.length;
        for (let e = 0; e < o; e++) {
          let [o, s] = i[e];
          d(s, g(t, o), r, n);
        }
      },
      g = (e, t) => {
        let r = e,
          n = t.split("-"),
          i = n.length;
        for (let e = 0; e < i; e++) {
          let t = n[e],
            i = r.nextPart.get(t);
          (i || ((i = a()), r.nextPart.set(t, i)), (r = i));
        }
        return r;
      },
      v = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      x = [],
      b = (e, t, r, n, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: r,
        maybePostfixModifierPosition: n,
        isExternal: i,
      }),
      y = /\s+/,
      _ = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let r = "";
        for (let n = 0; n < e.length; n++) e[n] && (t = _(e[n])) && (r && (r += " "), (r += t));
        return r;
      },
      w = [],
      A = (e) => {
        let t = (t) => t[e] || w;
        return ((t.isThemeGetter = !0), t);
      },
      k = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      E = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      O = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      T =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      R = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      z = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      M =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      j = (e) => O.test(e),
      N = (e) => !!e && !Number.isNaN(Number(e)),
      S = (e) => !!e && Number.isInteger(Number(e)),
      P = (e) => e.endsWith("%") && N(e.slice(0, -1)),
      D = (e) => C.test(e),
      B = () => !0,
      I = (e) => T.test(e) && !R.test(e),
      Q = () => !1,
      F = (e) => z.test(e),
      L = (e) => M.test(e),
      Y = (e) => !K(e) && !$(e),
      U = (e) =>
        e.startsWith("@container") &&
        (("/" === e[10] && void 0 !== e[11]) ||
          ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
          ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
      W = (e) => ea(e, ed, Q),
      K = (e) => k.test(e),
      H = (e) => ea(e, ef, I),
      q = (e) => ea(e, eh, N),
      V = (e) => ea(e, em, B),
      X = (e) => ea(e, ep, Q),
      G = (e) => ea(e, ec, Q),
      J = (e) => ea(e, eu, L),
      Z = (e) => ea(e, eg, F),
      $ = (e) => E.test(e),
      ee = (e) => el(e, ef),
      et = (e) => el(e, ep),
      er = (e) => el(e, ec),
      en = (e) => el(e, ed),
      ei = (e) => el(e, eu),
      eo = (e) => el(e, eg, !0),
      es = (e) => el(e, em, !0),
      ea = (e, t, r) => {
        let n = k.exec(e);
        return !!n && (n[1] ? t(n[1]) : r(n[2]));
      },
      el = (e, t, r = !1) => {
        let n = E.exec(e);
        return !!n && (n[1] ? t(n[1]) : r);
      },
      ec = (e) => "position" === e || "percentage" === e,
      eu = (e) => "image" === e || "url" === e,
      ed = (e) => "length" === e || "size" === e || "bg-size" === e,
      ef = (e) => "length" === e,
      eh = (e) => "number" === e,
      ep = (e) => "family-name" === e,
      em = (e) => "number" === e || "weight" === e,
      eg = (e) => "shadow" === e,
      ev =
        ((t = () => {
          let e = A("color"),
            t = A("font"),
            r = A("text"),
            n = A("font-weight"),
            i = A("tracking"),
            o = A("leading"),
            s = A("breakpoint"),
            a = A("container"),
            l = A("spacing"),
            c = A("radius"),
            u = A("shadow"),
            d = A("inset-shadow"),
            f = A("text-shadow"),
            h = A("drop-shadow"),
            p = A("blur"),
            m = A("perspective"),
            g = A("aspect"),
            v = A("ease"),
            x = A("animate"),
            b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            y = () => [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
            _ = () => [...y(), $, K],
            w = () => ["auto", "hidden", "clip", "visible", "scroll"],
            k = () => ["auto", "contain", "none"],
            E = () => [$, K, l],
            O = () => [j, "full", "auto", ...E()],
            C = () => [S, "none", "subgrid", $, K],
            T = () => ["auto", { span: ["full", S, $, K] }, S, $, K],
            R = () => [S, "auto", $, K],
            z = () => ["auto", "min", "max", "fr", $, K],
            M = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
            I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            Q = () => ["auto", ...E()],
            F = () => [
              j,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...E(),
            ],
            L = () => [j, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()],
            ea = () => [
              j,
              "screen",
              "full",
              "lh",
              "dvh",
              "lvh",
              "svh",
              "min",
              "max",
              "fit",
              ...E(),
            ],
            el = () => [e, $, K],
            ec = () => [...y(), er, G, { position: [$, K] }],
            eu = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
            ed = () => ["auto", "cover", "contain", en, W, { size: [$, K] }],
            ef = () => [P, ee, H],
            eh = () => ["", "none", "full", c, $, K],
            ep = () => ["", N, ee, H],
            em = () => ["solid", "dashed", "dotted", "double"],
            eg = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            ev = () => [N, P, er, G],
            ex = () => ["", "none", p, $, K],
            eb = () => ["none", N, $, K],
            ey = () => ["none", N, $, K],
            e_ = () => [N, $, K],
            ew = () => [j, "full", ...E()];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [D],
              breakpoint: [D],
              color: [B],
              container: [D],
              "drop-shadow": [D],
              ease: ["in", "out", "in-out"],
              font: [Y],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [D],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
              radius: [D],
              shadow: [D],
              spacing: ["px", N],
              text: [D],
              "text-shadow": [D],
              tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", j, K, $, g] }],
              container: ["container"],
              "container-type": [{ "@container": ["", "normal", "size", $, K] }],
              "container-named": [U],
              columns: [{ columns: [N, K, $, a] }],
              "break-after": [{ "break-after": b() }],
              "break-before": [{ "break-before": b() }],
              "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
              "object-position": [{ object: _() }],
              overflow: [{ overflow: w() }],
              "overflow-x": [{ "overflow-x": w() }],
              "overflow-y": [{ "overflow-y": w() }],
              overscroll: [{ overscroll: k() }],
              "overscroll-x": [{ "overscroll-x": k() }],
              "overscroll-y": [{ "overscroll-y": k() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: O() }],
              "inset-x": [{ "inset-x": O() }],
              "inset-y": [{ "inset-y": O() }],
              start: [{ "inset-s": O(), start: O() }],
              end: [{ "inset-e": O(), end: O() }],
              "inset-bs": [{ "inset-bs": O() }],
              "inset-be": [{ "inset-be": O() }],
              top: [{ top: O() }],
              right: [{ right: O() }],
              bottom: [{ bottom: O() }],
              left: [{ left: O() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [S, "auto", $, K] }],
              basis: [{ basis: [j, "full", "auto", a, ...E()] }],
              "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [N, j, "auto", "initial", "none", K] }],
              grow: [{ grow: ["", N, $, K] }],
              shrink: [{ shrink: ["", N, $, K] }],
              order: [{ order: [S, "first", "last", "none", $, K] }],
              "grid-cols": [{ "grid-cols": C() }],
              "col-start-end": [{ col: T() }],
              "col-start": [{ "col-start": R() }],
              "col-end": [{ "col-end": R() }],
              "grid-rows": [{ "grid-rows": C() }],
              "row-start-end": [{ row: T() }],
              "row-start": [{ "row-start": R() }],
              "row-end": [{ "row-end": R() }],
              "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
              "auto-cols": [{ "auto-cols": z() }],
              "auto-rows": [{ "auto-rows": z() }],
              gap: [{ gap: E() }],
              "gap-x": [{ "gap-x": E() }],
              "gap-y": [{ "gap-y": E() }],
              "justify-content": [{ justify: [...M(), "normal"] }],
              "justify-items": [{ "justify-items": [...I(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...I()] }],
              "align-content": [{ content: ["normal", ...M()] }],
              "align-items": [{ items: [...I(), { baseline: ["", "last"] }] }],
              "align-self": [{ self: ["auto", ...I(), { baseline: ["", "last"] }] }],
              "place-content": [{ "place-content": M() }],
              "place-items": [{ "place-items": [...I(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...I()] }],
              p: [{ p: E() }],
              px: [{ px: E() }],
              py: [{ py: E() }],
              ps: [{ ps: E() }],
              pe: [{ pe: E() }],
              pbs: [{ pbs: E() }],
              pbe: [{ pbe: E() }],
              pt: [{ pt: E() }],
              pr: [{ pr: E() }],
              pb: [{ pb: E() }],
              pl: [{ pl: E() }],
              m: [{ m: Q() }],
              mx: [{ mx: Q() }],
              my: [{ my: Q() }],
              ms: [{ ms: Q() }],
              me: [{ me: Q() }],
              mbs: [{ mbs: Q() }],
              mbe: [{ mbe: Q() }],
              mt: [{ mt: Q() }],
              mr: [{ mr: Q() }],
              mb: [{ mb: Q() }],
              ml: [{ ml: Q() }],
              "space-x": [{ "space-x": E() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": E() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: F() }],
              "inline-size": [{ inline: ["auto", ...L()] }],
              "min-inline-size": [{ "min-inline": ["auto", ...L()] }],
              "max-inline-size": [{ "max-inline": ["none", ...L()] }],
              "block-size": [{ block: ["auto", ...ea()] }],
              "min-block-size": [{ "min-block": ["auto", ...ea()] }],
              "max-block-size": [{ "max-block": ["none", ...ea()] }],
              w: [{ w: [a, "screen", ...F()] }],
              "min-w": [{ "min-w": [a, "screen", "none", ...F()] }],
              "max-w": [{ "max-w": [a, "screen", "none", "prose", { screen: [s] }, ...F()] }],
              h: [{ h: ["screen", "lh", ...F()] }],
              "min-h": [{ "min-h": ["screen", "lh", "none", ...F()] }],
              "max-h": [{ "max-h": ["screen", "lh", ...F()] }],
              "font-size": [{ text: ["base", r, ee, H] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [n, es, V] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    P,
                    K,
                  ],
                },
              ],
              "font-family": [{ font: [et, X, t] }],
              "font-features": [{ "font-features": [K] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [i, $, K] }],
              "line-clamp": [{ "line-clamp": [N, "none", $, q] }],
              leading: [{ leading: [o, ...E()] }],
              "list-image": [{ "list-image": ["none", $, K] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [{ list: ["disc", "decimal", "none", $, K] }],
              "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
              "placeholder-color": [{ placeholder: el() }],
              "text-color": [{ text: el() }],
              "text-decoration": ["underline", "overline", "line-through", "no-underline"],
              "text-decoration-style": [{ decoration: [...em(), "wavy"] }],
              "text-decoration-thickness": [{ decoration: [N, "from-font", "auto", $, H] }],
              "text-decoration-color": [{ decoration: el() }],
              "underline-offset": [{ "underline-offset": [N, "auto", $, K] }],
              "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: E() }],
              "tab-size": [{ tab: [S, $, K] }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    $,
                    K,
                  ],
                },
              ],
              whitespace: [
                { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", $, K] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: ec() }],
              "bg-repeat": [{ bg: eu() }],
              "bg-size": [{ bg: ed() }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, S, $, K],
                      radial: ["", $, K],
                      conic: [S, $, K],
                    },
                    ei,
                    J,
                  ],
                },
              ],
              "bg-color": [{ bg: el() }],
              "gradient-from-pos": [{ from: ef() }],
              "gradient-via-pos": [{ via: ef() }],
              "gradient-to-pos": [{ to: ef() }],
              "gradient-from": [{ from: el() }],
              "gradient-via": [{ via: el() }],
              "gradient-to": [{ to: el() }],
              rounded: [{ rounded: eh() }],
              "rounded-s": [{ "rounded-s": eh() }],
              "rounded-e": [{ "rounded-e": eh() }],
              "rounded-t": [{ "rounded-t": eh() }],
              "rounded-r": [{ "rounded-r": eh() }],
              "rounded-b": [{ "rounded-b": eh() }],
              "rounded-l": [{ "rounded-l": eh() }],
              "rounded-ss": [{ "rounded-ss": eh() }],
              "rounded-se": [{ "rounded-se": eh() }],
              "rounded-ee": [{ "rounded-ee": eh() }],
              "rounded-es": [{ "rounded-es": eh() }],
              "rounded-tl": [{ "rounded-tl": eh() }],
              "rounded-tr": [{ "rounded-tr": eh() }],
              "rounded-br": [{ "rounded-br": eh() }],
              "rounded-bl": [{ "rounded-bl": eh() }],
              "border-w": [{ border: ep() }],
              "border-w-x": [{ "border-x": ep() }],
              "border-w-y": [{ "border-y": ep() }],
              "border-w-s": [{ "border-s": ep() }],
              "border-w-e": [{ "border-e": ep() }],
              "border-w-bs": [{ "border-bs": ep() }],
              "border-w-be": [{ "border-be": ep() }],
              "border-w-t": [{ "border-t": ep() }],
              "border-w-r": [{ "border-r": ep() }],
              "border-w-b": [{ "border-b": ep() }],
              "border-w-l": [{ "border-l": ep() }],
              "divide-x": [{ "divide-x": ep() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": ep() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...em(), "hidden", "none"] }],
              "divide-style": [{ divide: [...em(), "hidden", "none"] }],
              "border-color": [{ border: el() }],
              "border-color-x": [{ "border-x": el() }],
              "border-color-y": [{ "border-y": el() }],
              "border-color-s": [{ "border-s": el() }],
              "border-color-e": [{ "border-e": el() }],
              "border-color-bs": [{ "border-bs": el() }],
              "border-color-be": [{ "border-be": el() }],
              "border-color-t": [{ "border-t": el() }],
              "border-color-r": [{ "border-r": el() }],
              "border-color-b": [{ "border-b": el() }],
              "border-color-l": [{ "border-l": el() }],
              "divide-color": [{ divide: el() }],
              "outline-style": [{ outline: [...em(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [N, $, K] }],
              "outline-w": [{ outline: ["", N, ee, H] }],
              "outline-color": [{ outline: el() }],
              shadow: [{ shadow: ["", "none", u, eo, Z] }],
              "shadow-color": [{ shadow: el() }],
              "inset-shadow": [{ "inset-shadow": ["none", d, eo, Z] }],
              "inset-shadow-color": [{ "inset-shadow": el() }],
              "ring-w": [{ ring: ep() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: el() }],
              "ring-offset-w": [{ "ring-offset": [N, H] }],
              "ring-offset-color": [{ "ring-offset": el() }],
              "inset-ring-w": [{ "inset-ring": ep() }],
              "inset-ring-color": [{ "inset-ring": el() }],
              "text-shadow": [{ "text-shadow": ["none", f, eo, Z] }],
              "text-shadow-color": [{ "text-shadow": el() }],
              opacity: [{ opacity: [N, $, K] }],
              "mix-blend": [{ "mix-blend": [...eg(), "plus-darker", "plus-lighter"] }],
              "bg-blend": [{ "bg-blend": eg() }],
              "mask-clip": [
                { "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
                "mask-no-clip",
              ],
              "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
              "mask-image-linear-pos": [{ "mask-linear": [N] }],
              "mask-image-linear-from-pos": [{ "mask-linear-from": ev() }],
              "mask-image-linear-to-pos": [{ "mask-linear-to": ev() }],
              "mask-image-linear-from-color": [{ "mask-linear-from": el() }],
              "mask-image-linear-to-color": [{ "mask-linear-to": el() }],
              "mask-image-t-from-pos": [{ "mask-t-from": ev() }],
              "mask-image-t-to-pos": [{ "mask-t-to": ev() }],
              "mask-image-t-from-color": [{ "mask-t-from": el() }],
              "mask-image-t-to-color": [{ "mask-t-to": el() }],
              "mask-image-r-from-pos": [{ "mask-r-from": ev() }],
              "mask-image-r-to-pos": [{ "mask-r-to": ev() }],
              "mask-image-r-from-color": [{ "mask-r-from": el() }],
              "mask-image-r-to-color": [{ "mask-r-to": el() }],
              "mask-image-b-from-pos": [{ "mask-b-from": ev() }],
              "mask-image-b-to-pos": [{ "mask-b-to": ev() }],
              "mask-image-b-from-color": [{ "mask-b-from": el() }],
              "mask-image-b-to-color": [{ "mask-b-to": el() }],
              "mask-image-l-from-pos": [{ "mask-l-from": ev() }],
              "mask-image-l-to-pos": [{ "mask-l-to": ev() }],
              "mask-image-l-from-color": [{ "mask-l-from": el() }],
              "mask-image-l-to-color": [{ "mask-l-to": el() }],
              "mask-image-x-from-pos": [{ "mask-x-from": ev() }],
              "mask-image-x-to-pos": [{ "mask-x-to": ev() }],
              "mask-image-x-from-color": [{ "mask-x-from": el() }],
              "mask-image-x-to-color": [{ "mask-x-to": el() }],
              "mask-image-y-from-pos": [{ "mask-y-from": ev() }],
              "mask-image-y-to-pos": [{ "mask-y-to": ev() }],
              "mask-image-y-from-color": [{ "mask-y-from": el() }],
              "mask-image-y-to-color": [{ "mask-y-to": el() }],
              "mask-image-radial": [{ "mask-radial": [$, K] }],
              "mask-image-radial-from-pos": [{ "mask-radial-from": ev() }],
              "mask-image-radial-to-pos": [{ "mask-radial-to": ev() }],
              "mask-image-radial-from-color": [{ "mask-radial-from": el() }],
              "mask-image-radial-to-color": [{ "mask-radial-to": el() }],
              "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
              "mask-image-radial-size": [
                { "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] },
              ],
              "mask-image-radial-pos": [{ "mask-radial-at": y() }],
              "mask-image-conic-pos": [{ "mask-conic": [N] }],
              "mask-image-conic-from-pos": [{ "mask-conic-from": ev() }],
              "mask-image-conic-to-pos": [{ "mask-conic-to": ev() }],
              "mask-image-conic-from-color": [{ "mask-conic-from": el() }],
              "mask-image-conic-to-color": [{ "mask-conic-to": el() }],
              "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
              "mask-origin": [
                { "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] },
              ],
              "mask-position": [{ mask: ec() }],
              "mask-repeat": [{ mask: eu() }],
              "mask-size": [{ mask: ed() }],
              "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
              "mask-image": [{ mask: ["none", $, K] }],
              filter: [{ filter: ["", "none", $, K] }],
              blur: [{ blur: ex() }],
              brightness: [{ brightness: [N, $, K] }],
              contrast: [{ contrast: [N, $, K] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", h, eo, Z] }],
              "drop-shadow-color": [{ "drop-shadow": el() }],
              grayscale: [{ grayscale: ["", N, $, K] }],
              "hue-rotate": [{ "hue-rotate": [N, $, K] }],
              invert: [{ invert: ["", N, $, K] }],
              saturate: [{ saturate: [N, $, K] }],
              sepia: [{ sepia: ["", N, $, K] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", $, K] }],
              "backdrop-blur": [{ "backdrop-blur": ex() }],
              "backdrop-brightness": [{ "backdrop-brightness": [N, $, K] }],
              "backdrop-contrast": [{ "backdrop-contrast": [N, $, K] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": ["", N, $, K] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [N, $, K] }],
              "backdrop-invert": [{ "backdrop-invert": ["", N, $, K] }],
              "backdrop-opacity": [{ "backdrop-opacity": [N, $, K] }],
              "backdrop-saturate": [{ "backdrop-saturate": [N, $, K] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", N, $, K] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": E() }],
              "border-spacing-x": [{ "border-spacing-x": E() }],
              "border-spacing-y": [{ "border-spacing-y": E() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", $, K],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [N, "initial", $, K] }],
              ease: [{ ease: ["linear", "initial", v, $, K] }],
              delay: [{ delay: [N, $, K] }],
              animate: [{ animate: ["none", x, $, K] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [m, $, K] }],
              "perspective-origin": [{ "perspective-origin": _() }],
              rotate: [{ rotate: eb() }],
              "rotate-x": [{ "rotate-x": eb() }],
              "rotate-y": [{ "rotate-y": eb() }],
              "rotate-z": [{ "rotate-z": eb() }],
              scale: [{ scale: ey() }],
              "scale-x": [{ "scale-x": ey() }],
              "scale-y": [{ "scale-y": ey() }],
              "scale-z": [{ "scale-z": ey() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: e_() }],
              "skew-x": [{ "skew-x": e_() }],
              "skew-y": [{ "skew-y": e_() }],
              transform: [{ transform: [$, K, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: _() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: ew() }],
              "translate-x": [{ "translate-x": ew() }],
              "translate-y": [{ "translate-y": ew() }],
              "translate-z": [{ "translate-z": ew() }],
              "translate-none": ["translate-none"],
              zoom: [{ zoom: [S, $, K] }],
              accent: [{ accent: el() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: el() }],
              "color-scheme": [
                { scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    $,
                    K,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scrollbar-thumb-color": [{ "scrollbar-thumb": el() }],
              "scrollbar-track-color": [{ "scrollbar-track": el() }],
              "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }],
              "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
              "scroll-m": [{ "scroll-m": E() }],
              "scroll-mx": [{ "scroll-mx": E() }],
              "scroll-my": [{ "scroll-my": E() }],
              "scroll-ms": [{ "scroll-ms": E() }],
              "scroll-me": [{ "scroll-me": E() }],
              "scroll-mbs": [{ "scroll-mbs": E() }],
              "scroll-mbe": [{ "scroll-mbe": E() }],
              "scroll-mt": [{ "scroll-mt": E() }],
              "scroll-mr": [{ "scroll-mr": E() }],
              "scroll-mb": [{ "scroll-mb": E() }],
              "scroll-ml": [{ "scroll-ml": E() }],
              "scroll-p": [{ "scroll-p": E() }],
              "scroll-px": [{ "scroll-px": E() }],
              "scroll-py": [{ "scroll-py": E() }],
              "scroll-ps": [{ "scroll-ps": E() }],
              "scroll-pe": [{ "scroll-pe": E() }],
              "scroll-pbs": [{ "scroll-pbs": E() }],
              "scroll-pbe": [{ "scroll-pbe": E() }],
              "scroll-pt": [{ "scroll-pt": E() }],
              "scroll-pr": [{ "scroll-pr": E() }],
              "scroll-pb": [{ "scroll-pb": E() }],
              "scroll-pl": [{ "scroll-pl": E() }],
              "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", $, K] }],
              fill: [{ fill: ["none", ...el()] }],
              "stroke-w": [{ stroke: [N, ee, H, q] }],
              stroke: [{ stroke: ["none", ...el()] }],
              "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
              "container-named": ["container-type"],
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "inset-bs",
                "inset-be",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-bs",
                "border-w-be",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-bs",
                "border-color-be",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mbs",
                "scroll-mbe",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pbs",
                "scroll-pbe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            postfixLookupClassGroups: ["container-type"],
            orderSensitiveModifiers: [
              "*",
              "**",
              "after",
              "backdrop",
              "before",
              "details-content",
              "file",
              "first-letter",
              "first-line",
              "marker",
              "placeholder",
              "selection",
            ],
          };
        }),
        (s = (e) => {
          let t = n(e);
          if (t) return t;
          let o = ((e, t) => {
            let {
                parseClassName: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: i,
                sortModifiers: o,
                postfixLookupClassGroupIds: s,
              } = t,
              a = [],
              l = e.trim().split(y),
              c = "";
            for (let e = l.length - 1; e >= 0; e -= 1) {
              let t,
                u = l[e],
                {
                  isExternal: d,
                  modifiers: f,
                  hasImportantModifier: h,
                  baseClassName: p,
                  maybePostfixModifierPosition: m,
                } = r(u);
              if (d) {
                c = u + (c.length > 0 ? " " + c : c);
                continue;
              }
              let g = !!m;
              if (g) {
                let e = (t = n(p.substring(0, m))) && s[t] ? n(p) : void 0;
                e && e !== t && ((t = e), (g = !1));
              } else t = n(p);
              if (!t) {
                if (!g || !(t = n(p))) {
                  c = u + (c.length > 0 ? " " + c : c);
                  continue;
                }
                g = !1;
              }
              let v = 0 === f.length ? "" : 1 === f.length ? f[0] : o(f).join(":"),
                x = h ? v + "!" : v,
                b = x + t;
              if (a.indexOf(b) > -1) continue;
              a.push(b);
              let y = i(t, g);
              for (let e = 0; e < y.length; ++e) {
                let t = y[e];
                a.push(x + t);
              }
              c = u + (c.length > 0 ? " " + c : c);
            }
            return c;
          })(e, r);
          return (i(e, o), o);
        }),
        (o = (e) => {
          var a;
          let d;
          return (
            (n = (r = {
              cache: ((e) => {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = Object.create(null),
                  n = Object.create(null),
                  i = (i, o) => {
                    ((r[i] = o), ++t > e && ((t = 0), (n = r), (r = Object.create(null))));
                  };
                return {
                  get(e) {
                    let t = r[e];
                    return void 0 !== t ? t : void 0 !== (t = n[e]) ? (i(e, t), t) : void 0;
                  },
                  set(e, t) {
                    e in r ? (r[e] = t) : i(e, t);
                  },
                };
              })((a = [].reduce((e, t) => t(e), t())).cacheSize),
              parseClassName: ((e) => {
                let { prefix: t, experimentalParseClassName: r } = e,
                  n = (e) => {
                    let t,
                      r = [],
                      n = 0,
                      i = 0,
                      o = 0,
                      s = e.length;
                    for (let a = 0; a < s; a++) {
                      let s = e[a];
                      if (0 === n && 0 === i) {
                        if (":" === s) {
                          (r.push(e.slice(o, a)), (o = a + 1));
                          continue;
                        }
                        if ("/" === s) {
                          t = a;
                          continue;
                        }
                      }
                      "[" === s ? n++ : "]" === s ? n-- : "(" === s ? i++ : ")" === s && i--;
                    }
                    let a = 0 === r.length ? e : e.slice(o),
                      l = a,
                      c = !1;
                    return (
                      a.endsWith("!")
                        ? ((l = a.slice(0, -1)), (c = !0))
                        : a.startsWith("!") && ((l = a.slice(1)), (c = !0)),
                      b(r, c, l, t && t > o ? t - o : void 0)
                    );
                  };
                if (t) {
                  let e = t + ":",
                    r = n;
                  n = (t) => (t.startsWith(e) ? r(t.slice(e.length)) : b(x, !1, t, void 0, !0));
                }
                if (r) {
                  let e = n;
                  n = (t) => r({ className: t, parseClassName: e });
                }
                return n;
              })(a),
              sortModifiers:
                ((d = new Map()),
                a.orderSensitiveModifiers.forEach((e, t) => {
                  d.set(e, 1e6 + t);
                }),
                (e) => {
                  let t = [],
                    r = [];
                  for (let n = 0; n < e.length; n++) {
                    let i = e[n],
                      o = "[" === i[0],
                      s = d.has(i);
                    o || s
                      ? (r.length > 0 && (r.sort(), t.push(...r), (r = [])), t.push(i))
                      : r.push(i);
                  }
                  return (r.length > 0 && (r.sort(), t.push(...r)), t);
                }),
              postfixLookupClassGroupIds: ((e) => {
                let t = Object.create(null),
                  r = e.postfixLookupClassGroups;
                if (r) for (let e = 0; e < r.length; e++) t[r[e]] = !0;
                return t;
              })(a),
              ...((e) => {
                let t = ((e) => {
                    let { theme: t, classGroups: r } = e;
                    return u(r, t);
                  })(e),
                  { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
                return {
                  getClassGroupId: (e) => {
                    if (e.startsWith("[") && e.endsWith("]")) {
                      var r;
                      let t, n, i;
                      return -1 === (r = e).slice(1, -1).indexOf(":")
                        ? void 0
                        : ((n = (t = r.slice(1, -1)).indexOf(":")),
                          (i = t.slice(0, n)) ? "arbitrary.." + i : void 0);
                    }
                    let n = e.split("-"),
                      i = +("" === n[0] && n.length > 1);
                    return c(n, i, t);
                  },
                  getConflictingClassGroupIds: (e, t) => {
                    if (t) {
                      let t = n[e],
                        i = r[e];
                      if (t) {
                        if (i) {
                          let e = Array(i.length + t.length);
                          for (let t = 0; t < i.length; t++) e[t] = i[t];
                          for (let r = 0; r < t.length; r++) e[i.length + r] = t[r];
                          return e;
                        }
                        return t;
                      }
                      return i || l;
                    }
                    return r[e] || l;
                  },
                };
              })(a),
            }).cache.get),
            (i = r.cache.set),
            (o = s),
            s(e)
          );
        }),
        (...e) =>
          o(
            ((...e) => {
              let t,
                r,
                n = 0,
                i = "";
              for (; n < e.length;) (t = e[n++]) && (r = _(t)) && (i && (i += " "), (i += r));
              return i;
            })(...e),
          ));
    e.s(
      [
        "cn",
        0,
        function (...e) {
          return ev(
            (function () {
              for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
                (e = arguments[r]) &&
                  (t = (function e(t) {
                    var r,
                      n,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t)
                      if (Array.isArray(t)) {
                        var o = t.length;
                        for (r = 0; r < o; r++)
                          t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                      } else for (n in t) t[n] && (i && (i += " "), (i += n));
                    return i;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            })(e),
          );
        },
      ],
      75157,
    );
  },
]);

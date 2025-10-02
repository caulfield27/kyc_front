(() => {
  var t = {
      881: function () {
        var t = ['data'];
        function e(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            (e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function n(t) {
          for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(i), !0).forEach(function (e) {
                  r(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : e(Object(i)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(i, e)
                    );
                  });
          }
          return t;
        }
        function r(t, e, n) {
          return (
            (e = (function (t) {
              var e = (function (t) {
                if ('object' != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var n = e.call(t, 'string');
                  if ('object' != typeof n) return n;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return String(t);
              })(t);
              return 'symbol' == typeof e ? e : e + '';
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var i = 'custom',
          o = null,
          a = null;
        ((Ye = self.console),
          ((s = {}).print = (t) => Ye.log(t)),
          (s.printErr = (t) => Ye.log(t)),
          (s.onRuntimeInitialized = () => {
            ((o = s.cwrap('processWeb', 'number', [
              'number',
              'number',
              'string',
              'number',
              'number',
            ])),
              (a = s.cwrap('processgl', 'number', [
                'number',
                'number',
                'string',
                'number',
                'number',
              ])),
              postMessage({
                target: i,
                data: { method: 12e3, response: null, code: 0 },
              }));
          }),
          (s.locateFile = (t, e) =>
            'https://wasm.regulaforensics.com/document/release/7.7/173f7ed7-278542421/' +
            t),
          (s.onCustomMessage = (e) => {
            var r = e.data,
              u = r.method,
              c = r.request,
              l = r.data;
            try {
              !(function (e, r, u) {
                var c = 12104 !== e || u ? o : a,
                  l = 0,
                  f = 0,
                  h = null,
                  d = r ? JSON.stringify(r) : '';
                if (u) {
                  if (12101 === e || 12104 === e) {
                    var p = (function (e) {
                        var r = e.reduce((t, e) => t + e.data.byteLength, 0),
                          i = new Uint8ClampedArray(r),
                          o = 0,
                          a = e.map((e) => {
                            var r = e.data,
                              a = (function (t, e) {
                                if (null == t) return {};
                                var n,
                                  r,
                                  i = (function (t, e) {
                                    if (null == t) return {};
                                    var n = {};
                                    for (var r in t)
                                      if ({}.hasOwnProperty.call(t, r)) {
                                        if (e.includes(r)) continue;
                                        n[r] = t[r];
                                      }
                                    return n;
                                  })(t, e);
                                if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(t);
                                  for (r = 0; r < o.length; r++)
                                    ((n = o[r]),
                                      e.includes(n) ||
                                        ({}.propertyIsEnumerable.call(t, n) &&
                                          (i[n] = t[n])));
                                }
                                return i;
                              })(e, t);
                            return (
                              i.set(new Uint8ClampedArray(r), o),
                              (o += r.byteLength),
                              n(n({}, a), {}, { byteLength: r.byteLength })
                            );
                          });
                        return {
                          frameSize: r,
                          imgParams: a,
                          allImagesUintArray: i,
                        };
                      })(u),
                      _ = p.frameSize,
                      m = p.imgParams;
                    ((f = _),
                      (h = p.allImagesUintArray),
                      (d = JSON.stringify(n(n({}, r), {}, { imgParams: m }))));
                  } else
                    ((f = u[0].data.byteLength),
                      (h = new Uint8ClampedArray(u[0].data)));
                  ((l = s._malloc(f)), s.HEAPU8.set(h, l));
                }
                var g = s._malloc(4),
                  v = c(e, l, d, 0, g),
                  E = s.UTF8ToString(s.getValue(g, 'i32')),
                  y = JSON.parse(E);
                (s._free(g),
                  l && s._free(l),
                  postMessage({
                    target: i,
                    data: { method: e, response: y, code: v },
                  }));
              })(u, c, l);
            } catch (t) {
              postMessage({ target: 'stderr', content: t });
            }
          }));
        var s = void 0 !== s ? s : {};
        (s.expectedDataFileDownloads || (s.expectedDataFileDownloads = 0),
          s.expectedDataFileDownloads++,
          (function (t) {
            if ('object' == typeof tn)
              tn.encodeURIComponent(
                tn.location.pathname
                  .toString()
                  .substring(
                    0,
                    tn.location.pathname.toString().lastIndexOf('/')
                  ) + '/'
              );
            else {
              if ('undefined' == typeof location)
                throw 'using preloaded data can only be done on a web page or in a web worker';
              encodeURIComponent(
                location.pathname
                  .toString()
                  .substring(0, location.pathname.toString().lastIndexOf('/')) +
                  '/'
              );
            }
            var e = 'ProcMgr.data';
            'function' != typeof s.locateFilePackage ||
              s.locateFile ||
              ((s.locateFile = s.locateFilePackage),
              v(
                'warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)'
              ));
            var n,
              r,
              i,
              o,
              a = s.locateFile ? s.locateFile(e, '') : e,
              u = t.remote_package_size,
              c = null,
              l = s.getPreloadedPackage ? s.getPreloadedPackage(a, u) : null;
            function f() {
              function e(t, e) {
                if (!t) throw e + new Error().stack;
              }
              function n(t, e, n) {
                ((this.start = t), (this.end = e), (this.audio = n));
              }
              n.prototype = {
                requests: {},
                open: function (t, e) {
                  ((this.name = e),
                    (this.requests[e] = this),
                    s.addRunDependency('fp ' + this.name));
                },
                send: function () {},
                onload: function () {
                  var t = this.byteArray.subarray(this.start, this.end);
                  this.finish(t);
                },
                finish: function (t) {
                  (s.FS_createDataFile(this.name, null, t, !0, !0, !0),
                    s.removeRunDependency('fp ' + this.name),
                    (this.requests[this.name] = null));
                },
              };
              for (var r = t.files, i = 0; i < r.length; ++i)
                new n(r[i].start, r[i].end, r[i].audio).open(
                  'GET',
                  r[i].filename
                );
              function o(r) {
                (e(r, 'Loading data file failed.'),
                  e(
                    r instanceof ArrayBuffer,
                    'bad input to processPackageData'
                  ));
                var i = new Uint8Array(r);
                n.prototype.byteArray = i;
                for (var o = t.files, a = 0; a < o.length; ++a)
                  n.prototype.requests[o[a].filename].onload();
                s.removeRunDependency('datafile_../../out/ProcMgr.data');
              }
              (s.addRunDependency('datafile_../../out/ProcMgr.data'),
                s.preloadResults || (s.preloadResults = {}),
                (s.preloadResults['../../out/ProcMgr.data'] = {
                  fromCache: !1,
                }),
                l ? (o(l), (l = null)) : (c = o));
            }
            (l ||
              ((n = a),
              (r = u),
              (i = function (t) {
                c ? (c(t), (c = null)) : (l = t);
              }),
              (o = new XMLHttpRequest()).open('GET', n, !0),
              (o.responseType = 'arraybuffer'),
              (o.onprogress = function (t) {
                var e = n,
                  i = r;
                if ((t.total && (i = t.total), t.loaded)) {
                  o.addedTotal
                    ? (s.dataFileDownloads[e].loaded = t.loaded)
                    : ((o.addedTotal = !0),
                      s.dataFileDownloads || (s.dataFileDownloads = {}),
                      (s.dataFileDownloads[e] = {
                        loaded: t.loaded,
                        total: i,
                      }));
                  var a = 0,
                    u = 0,
                    c = 0;
                  for (var l in s.dataFileDownloads) {
                    var f = s.dataFileDownloads[l];
                    ((a += f.total), (u += f.loaded), c++);
                  }
                  ((a = Math.ceil((a * s.expectedDataFileDownloads) / c)),
                    s.setStatus &&
                      s.setStatus('Downloading data... (' + u + '/' + a + ')'));
                } else
                  s.dataFileDownloads ||
                    (s.setStatus && s.setStatus('Downloading data...'));
              }),
              (o.onerror = function (t) {
                throw new Error('NetworkError for: ' + n);
              }),
              (o.onload = function (t) {
                if (
                  !(
                    200 == o.status ||
                    304 == o.status ||
                    206 == o.status ||
                    (0 == o.status && o.response)
                  )
                )
                  throw new Error(o.statusText + ' : ' + o.responseURL);
                var e = o.response;
                i(e);
              }),
              o.send(null)),
              s.calledRun
                ? f()
                : (s.preRun || (s.preRun = []), s.preRun.push(f)));
          })({
            files: [
              { filename: '/resource.dat', start: 0, end: 3442332, audio: 0 },
            ],
            remote_package_size: 3442332,
            package_uuid: '6f56d73a-dcf0-4554-934c-3afc9912f6a6',
          }));
        var u,
          c = {};
        for (u in s) s.hasOwnProperty(u) && (c[u] = s[u]);
        var l,
          f,
          h,
          d = [],
          p = './this.program',
          _ = function (t, e) {
            throw e;
          },
          m = '';
        ((m =
          0 !== (m = self.location.href).indexOf('blob:')
            ? m.substr(0, m.lastIndexOf('/') + 1)
            : ''),
          (l = function (t) {
            var e = new XMLHttpRequest();
            return (e.open('GET', t, !1), e.send(null), e.responseText);
          }),
          (h = function (t) {
            var e = new XMLHttpRequest();
            return (
              e.open('GET', t, !1),
              (e.responseType = 'arraybuffer'),
              e.send(null),
              new Uint8Array(e.response)
            );
          }),
          (f = function (t, e, n) {
            var r = new XMLHttpRequest();
            (r.open('GET', t, !0),
              (r.responseType = 'arraybuffer'),
              (r.onload = function () {
                200 == r.status || (0 == r.status && r.response)
                  ? e(r.response)
                  : n();
              }),
              (r.onerror = n),
              r.send(null));
          }));
        var g = s.print || Ye.log.bind(Ye),
          v = s.printErr || Ye.warn.bind(Ye);
        for (u in c) c.hasOwnProperty(u) && (s[u] = c[u]);
        function E(t) {
          (E.shown || (E.shown = {}), E.shown[t] || ((E.shown[t] = 1), v(t)));
        }
        ((c = null),
          s.arguments && (d = s.arguments),
          s.thisProgram && (p = s.thisProgram),
          s.quit && (_ = s.quit));
        var y,
          w,
          T,
          R = 0,
          A = function (t) {
            R = t;
          };
        (s.wasmBinary && (y = s.wasmBinary),
          s.noExitRuntime && (w = s.noExitRuntime),
          'object' != typeof WebAssembly &&
            ct('no native wasm support detected'));
        var b = new WebAssembly.Table({
            initial: 22054,
            maximum: 22054,
            element: 'anyfunc',
          }),
          k = !1;
        function S(t, e) {
          t || ct('Assertion failed: ' + e);
        }
        function F(t) {
          var e = s['_' + t];
          return (
            S(
              e,
              'Cannot call unknown function ' + t + ', make sure it is exported'
            ),
            e
          );
        }
        function L(t, e, n, r, i) {
          var o = {
              string: function (t) {
                var e = 0;
                if (null != t && 0 !== t) {
                  var n = 1 + (t.length << 2);
                  X(t, (e = _e(n)), n);
                }
                return e;
              },
              array: function (t) {
                var e = _e(t.length);
                return (V(t, e), e);
              },
            },
            a = F(t),
            s = [],
            u = 0;
          if (r)
            for (var c = 0; c < r.length; c++) {
              var l = o[n[c]];
              l ? (0 === u && (u = de()), (s[c] = l(r[c]))) : (s[c] = r[c]);
            }
          var f = a.apply(null, s);
          return (
            (f = (function (t) {
              return 'string' === e ? G(t) : 'boolean' === e ? Boolean(t) : t;
            })(f)),
            0 !== u && pe(u),
            f
          );
        }
        var C,
          D,
          j,
          O,
          M,
          N,
          I,
          P,
          B,
          U =
            'undefined' != typeof TextDecoder
              ? new TextDecoder('utf8')
              : void 0;
        function x(t, e, n) {
          for (var r = e + n, i = e; t[i] && !(i >= r); ) ++i;
          if (i - e > 16 && t.subarray && U) return U.decode(t.subarray(e, i));
          for (var o = ''; e < i; ) {
            var a = t[e++];
            if (128 & a) {
              var s = 63 & t[e++];
              if (192 != (224 & a)) {
                var u = 63 & t[e++];
                if (
                  (a =
                    224 == (240 & a)
                      ? ((15 & a) << 12) | (s << 6) | u
                      : ((7 & a) << 18) |
                        (s << 12) |
                        (u << 6) |
                        (63 & t[e++])) < 65536
                )
                  o += String.fromCharCode(a);
                else {
                  var c = a - 65536;
                  o += String.fromCharCode(
                    55296 | (c >> 10),
                    56320 | (1023 & c)
                  );
                }
              } else o += String.fromCharCode(((31 & a) << 6) | s);
            } else o += String.fromCharCode(a);
          }
          return o;
        }
        function G(t, e) {
          return t ? x(j, t, e) : '';
        }
        function H(t, e, n, r) {
          if (!(r > 0)) return 0;
          for (var i = n, o = n + r - 1, a = 0; a < t.length; ++a) {
            var s = t.charCodeAt(a);
            if (
              (s >= 55296 &&
                s <= 57343 &&
                (s = (65536 + ((1023 & s) << 10)) | (1023 & t.charCodeAt(++a))),
              s <= 127)
            ) {
              if (n >= o) break;
              e[n++] = s;
            } else if (s <= 2047) {
              if (n + 1 >= o) break;
              ((e[n++] = 192 | (s >> 6)), (e[n++] = 128 | (63 & s)));
            } else if (s <= 65535) {
              if (n + 2 >= o) break;
              ((e[n++] = 224 | (s >> 12)),
                (e[n++] = 128 | ((s >> 6) & 63)),
                (e[n++] = 128 | (63 & s)));
            } else {
              if (n + 3 >= o) break;
              ((e[n++] = 240 | (s >> 18)),
                (e[n++] = 128 | ((s >> 12) & 63)),
                (e[n++] = 128 | ((s >> 6) & 63)),
                (e[n++] = 128 | (63 & s)));
            }
          }
          return ((e[n] = 0), n - i);
        }
        function X(t, e, n) {
          return H(t, j, e, n);
        }
        function W(t) {
          for (var e = 0, n = 0; n < t.length; ++n) {
            var r = t.charCodeAt(n);
            (r >= 55296 &&
              r <= 57343 &&
              (r = (65536 + ((1023 & r) << 10)) | (1023 & t.charCodeAt(++n))),
              r <= 127 ? ++e : (e += r <= 2047 ? 2 : r <= 65535 ? 3 : 4));
          }
          return e;
        }
        function z(t) {
          var e = W(t) + 1,
            n = ue(e);
          return (n && H(t, D, n, e), n);
        }
        function V(t, e) {
          D.set(t, e);
        }
        function Y(t, e, n) {
          for (var r = 0; r < t.length; ++r) D[0 | e++] = t.charCodeAt(r);
          n || (D[0 | e] = 0);
        }
        'undefined' != typeof TextDecoder && new TextDecoder('utf-16le');
        var q,
          K = s.INITIAL_MEMORY || 524288e3;
        ((T = s.wasmMemory
          ? s.wasmMemory
          : new WebAssembly.Memory({
              initial: K / 65536,
              maximum: K / 65536,
            })) && (C = T.buffer),
          (K = C.byteLength),
          (C = q = C),
          (s.HEAP8 = D = new Int8Array(q)),
          (s.HEAP16 = O = new Int16Array(q)),
          (s.HEAP32 = N = new Int32Array(q)),
          (s.HEAPU8 = j = new Uint8Array(q)),
          (s.HEAPU16 = M = new Uint16Array(q)),
          (s.HEAPU32 = I = new Uint32Array(q)),
          (s.HEAPF32 = P = new Float32Array(q)),
          (s.HEAPF64 = B = new Float64Array(q)));
        var Z = [],
          J = [],
          Q = [],
          $ = [],
          tt = Math.abs,
          et = Math.ceil,
          nt = Math.floor,
          rt = Math.min,
          it = 0,
          ot = null,
          at = null;
        function st(t) {
          (it++, s.monitorRunDependencies && s.monitorRunDependencies(it));
        }
        function ut(t) {
          if (
            (it--,
            s.monitorRunDependencies && s.monitorRunDependencies(it),
            0 == it && (null !== ot && (clearInterval(ot), (ot = null)), at))
          ) {
            var e = at;
            ((at = null), e());
          }
        }
        function ct(t) {
          throw (
            s.onAbort && s.onAbort(t),
            v((t += '')),
            (k = !0),
            (t = 'abort(' + t + '). Build with -s ASSERTIONS=1 for more info.'),
            new WebAssembly.RuntimeError(t)
          );
        }
        ((s.preloadedImages = {}), (s.preloadedAudios = {}));
        function lt(t) {
          return (
            (e = t),
            (n = 'data:application/octet-stream;base64,'),
            String.prototype.startsWith ? e.startsWith(n) : 0 === e.indexOf(n)
          );
          var e, n;
        }
        var ft,
          ht,
          dt,
          pt,
          _t = 'ProcMgr.wasm';
        function mt() {
          try {
            if (y) return new Uint8Array(y);
            if (h) return h(_t);
            throw 'both async and sync fetching of the wasm failed';
          } catch (t) {
            ct(t);
          }
        }
        function gt(t, e) {
          if (
            ((vt.mainLoop.timingMode = t),
            (vt.mainLoop.timingValue = e),
            !vt.mainLoop.func)
          )
            return 1;
          if (0 == t)
            ((vt.mainLoop.scheduler = function () {
              var t = 0 | Math.max(0, vt.mainLoop.tickStartTime + e - pt());
              setTimeout(vt.mainLoop.runner, t);
            }),
              (vt.mainLoop.method = 'timeout'));
          else if (1 == t)
            ((vt.mainLoop.scheduler = function () {
              vt.requestAnimationFrame(vt.mainLoop.runner);
            }),
              (vt.mainLoop.method = 'rAF'));
          else if (2 == t) {
            if ('undefined' == typeof setImmediate) {
              var n = [],
                r = 'setimmediate';
              (addEventListener(
                'message',
                function (t) {
                  (t.data !== r && t.data.target !== r) ||
                    (t.stopPropagation(), n.shift()());
                },
                !0
              ),
                (setImmediate = function (t) {
                  (n.push(t),
                    void 0 === s.setImmediates && (s.setImmediates = []),
                    s.setImmediates.push(t),
                    postMessage({ target: r }));
                }));
            }
            ((vt.mainLoop.scheduler = function () {
              setImmediate(vt.mainLoop.runner);
            }),
              (vt.mainLoop.method = 'immediate'));
          }
          return 0;
        }
        (lt(_t) ||
          ((ft = _t), (_t = s.locateFile ? s.locateFile(ft, m) : m + ft)),
          J.push({
            func: function () {
              ie();
            },
          }),
          (pt = function () {
            return performance.now();
          }));
        var vt = {
          mainLoop: {
            scheduler: null,
            method: '',
            currentlyRunningMainloop: 0,
            func: null,
            arg: 0,
            timingMode: 0,
            timingValue: 0,
            currentFrameNumber: 0,
            queue: [],
            pause: function () {
              ((vt.mainLoop.scheduler = null),
                vt.mainLoop.currentlyRunningMainloop++);
            },
            resume: function () {
              vt.mainLoop.currentlyRunningMainloop++;
              var t = vt.mainLoop.timingMode,
                e = vt.mainLoop.timingValue,
                n = vt.mainLoop.func;
              ((vt.mainLoop.func = null),
                (function (t, e, n, r) {
                  ((w = !0),
                    S(
                      !vt.mainLoop.func,
                      'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.'
                    ),
                    (vt.mainLoop.func = t),
                    (vt.mainLoop.arg = r));
                  var i = vt.mainLoop.currentlyRunningMainloop;
                  vt.mainLoop.runner = function () {
                    if (!k)
                      if (vt.mainLoop.queue.length > 0) {
                        var e = Date.now(),
                          n = vt.mainLoop.queue.shift();
                        if ((n.func(n.arg), vt.mainLoop.remainingBlockers)) {
                          var r = vt.mainLoop.remainingBlockers,
                            o = r % 1 == 0 ? r - 1 : Math.floor(r);
                          n.counted
                            ? (vt.mainLoop.remainingBlockers = o)
                            : ((o += 0.5),
                              (vt.mainLoop.remainingBlockers =
                                (8 * r + o) / 9));
                        }
                        if (
                          (Ye.log(
                            'main loop blocker "' +
                              n.name +
                              '" took ' +
                              (Date.now() - e) +
                              ' ms'
                          ),
                          vt.mainLoop.updateStatus(),
                          i < vt.mainLoop.currentlyRunningMainloop)
                        )
                          return;
                        setTimeout(vt.mainLoop.runner, 0);
                      } else
                        i < vt.mainLoop.currentlyRunningMainloop ||
                          ((vt.mainLoop.currentFrameNumber =
                            (vt.mainLoop.currentFrameNumber + 1) | 0),
                          1 == vt.mainLoop.timingMode &&
                          vt.mainLoop.timingValue > 1 &&
                          vt.mainLoop.currentFrameNumber %
                            vt.mainLoop.timingValue !=
                            0
                            ? vt.mainLoop.scheduler()
                            : (0 == vt.mainLoop.timingMode &&
                                (vt.mainLoop.tickStartTime = pt()),
                              vt.mainLoop.runIter(t),
                              i < vt.mainLoop.currentlyRunningMainloop ||
                                ('object' == typeof SDL &&
                                  SDL.audio &&
                                  SDL.audio.queueNewAudioData &&
                                  SDL.audio.queueNewAudioData(),
                                vt.mainLoop.scheduler())));
                  };
                })(n, 0, 0, vt.mainLoop.arg),
                gt(t, e),
                vt.mainLoop.scheduler());
            },
            updateStatus: function () {
              if (s.setStatus) {
                var t = s.statusMessage || 'Please wait...',
                  e = vt.mainLoop.remainingBlockers,
                  n = vt.mainLoop.expectedBlockers;
                e
                  ? e < n
                    ? s.setStatus(t + ' (' + (n - e) + '/' + n + ')')
                    : s.setStatus(t)
                  : s.setStatus('');
              }
            },
            runIter: function (t) {
              if (!k) {
                if (s.preMainLoop && !1 === s.preMainLoop()) return;
                try {
                  t();
                } catch (t) {
                  if (t instanceof pn) return;
                  if ('unwind' == t) return;
                  throw (
                    t &&
                      'object' == typeof t &&
                      t.stack &&
                      v('exception thrown: ' + [t, t.stack]),
                    t
                  );
                }
                s.postMainLoop && s.postMainLoop();
              }
            },
          },
          isFullscreen: !1,
          pointerLock: !1,
          moduleContextCreatedCallbacks: [],
          workers: [],
          init: function () {
            if ((s.preloadPlugins || (s.preloadPlugins = []), !vt.initted)) {
              vt.initted = !0;
              try {
                (new Blob(), (vt.hasBlobConstructor = !0));
              } catch (t) {
                ((vt.hasBlobConstructor = !1),
                  Ye.log(
                    'warning: no blob constructor, cannot create blobs with mimetypes'
                  ));
              }
              ((vt.BlobBuilder =
                'undefined' != typeof MozBlobBuilder
                  ? MozBlobBuilder
                  : 'undefined' != typeof WebKitBlobBuilder
                    ? WebKitBlobBuilder
                    : vt.hasBlobConstructor
                      ? null
                      : Ye.log('warning: no BlobBuilder')),
                (vt.URLObject =
                  void 0 !== tn ? (tn.URL ? tn.URL : tn.webkitURL) : void 0),
                s.noImageDecoding ||
                  void 0 !== vt.URLObject ||
                  (Ye.log(
                    'warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.'
                  ),
                  (s.noImageDecoding = !0)));
              var t = {
                canHandle: function (t) {
                  return !s.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
                },
                handle: function (t, e, n, r) {
                  var i = null;
                  if (vt.hasBlobConstructor)
                    try {
                      (i = new Blob([t], { type: vt.getMimetype(e) })).size !==
                        t.length &&
                        (i = new Blob([new Uint8Array(t).buffer], {
                          type: vt.getMimetype(e),
                        }));
                    } catch (t) {
                      E(
                        'Blob constructor present but fails: ' +
                          t +
                          '; falling back to blob builder'
                      );
                    }
                  if (!i) {
                    var o = new vt.BlobBuilder();
                    (o.append(new Uint8Array(t).buffer), (i = o.getBlob()));
                  }
                  var a = vt.URLObject.createObjectURL(i),
                    u = new $e();
                  ((u.onload = function () {
                    S(u.complete, 'Image ' + e + ' could not be decoded');
                    var r = on.createElement('canvas');
                    ((r.width = u.width),
                      (r.height = u.height),
                      r.getContext('2d').drawImage(u, 0, 0),
                      (s.preloadedImages[e] = r),
                      vt.URLObject.revokeObjectURL(a),
                      n && n(t));
                  }),
                    (u.onerror = function (t) {
                      (Ye.log('Image ' + a + ' could not be decoded'),
                        r && r());
                    }),
                    (u.src = a));
                },
              };
              s.preloadPlugins.push(t);
              var e = {
                canHandle: function (t) {
                  return (
                    !s.noAudioDecoding &&
                    t.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 }
                  );
                },
                handle: function (t, e, n, r) {
                  var i = !1;
                  function o(r) {
                    i || ((i = !0), (s.preloadedAudios[e] = r), n && n(t));
                  }
                  function a() {
                    i ||
                      ((i = !0), (s.preloadedAudios[e] = new an()), r && r());
                  }
                  if (!vt.hasBlobConstructor) return a();
                  try {
                    var u = new Blob([t], { type: vt.getMimetype(e) });
                  } catch (t) {
                    return a();
                  }
                  var c = vt.URLObject.createObjectURL(u),
                    l = new an();
                  (l.addEventListener(
                    'canplaythrough',
                    function () {
                      o(l);
                    },
                    !1
                  ),
                    (l.onerror = function (n) {
                      i ||
                        (Ye.log(
                          'warning: browser could not fully decode audio ' +
                            e +
                            ', trying slower base64 approach'
                        ),
                        (l.src =
                          'data:audio/x-' +
                          e.substr(-3) +
                          ';base64,' +
                          (function (t) {
                            for (
                              var e =
                                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                                n = '',
                                r = 0,
                                i = 0,
                                o = 0;
                              o < t.length;
                              o++
                            )
                              for (r = (r << 8) | t[o], i += 8; i >= 6; ) {
                                var a = (r >> (i - 6)) & 63;
                                ((i -= 6), (n += e[a]));
                              }
                            return (
                              2 == i
                                ? ((n += e[(3 & r) << 4]), (n += '=='))
                                : 4 == i &&
                                  ((n += e[(15 & r) << 2]), (n += '=')),
                              n
                            );
                          })(t)),
                        o(l));
                    }),
                    (l.src = c),
                    vt.safeSetTimeout(function () {
                      o(l);
                    }, 1e4));
                },
              };
              s.preloadPlugins.push(e);
              var n = s.canvas;
              n &&
                ((n.requestPointerLock =
                  n.requestPointerLock ||
                  n.mozRequestPointerLock ||
                  n.webkitRequestPointerLock ||
                  n.msRequestPointerLock ||
                  function () {}),
                (n.exitPointerLock =
                  on.exitPointerLock ||
                  on.mozExitPointerLock ||
                  on.webkitExitPointerLock ||
                  on.msExitPointerLock ||
                  function () {}),
                (n.exitPointerLock = n.exitPointerLock.bind(on)),
                on.addEventListener('pointerlockchange', r, !1),
                on.addEventListener('mozpointerlockchange', r, !1),
                on.addEventListener('webkitpointerlockchange', r, !1),
                on.addEventListener('mspointerlockchange', r, !1),
                s.elementPointerLock &&
                  n.addEventListener(
                    'click',
                    function (t) {
                      !vt.pointerLock &&
                        s.canvas.requestPointerLock &&
                        (s.canvas.requestPointerLock(), t.preventDefault());
                    },
                    !1
                  ));
            }
            function r() {
              vt.pointerLock =
                on.pointerLockElement === s.canvas ||
                on.mozPointerLockElement === s.canvas ||
                on.webkitPointerLockElement === s.canvas ||
                on.msPointerLockElement === s.canvas;
            }
          },
          createContext: function (t, e, n, r) {
            if (e && s.ctx && t == s.canvas) return s.ctx;
            var i, o;
            if (e) {
              var a = { antialias: !1, alpha: !1, majorVersion: 1 };
              if (r) for (var u in r) a[u] = r[u];
              'undefined' != typeof GL &&
                (o = GL.createContext(t, a)) &&
                (i = GL.getContext(o).GLctx);
            } else i = t.getContext('2d');
            return i
              ? (n &&
                  (e ||
                    S(
                      'undefined' == typeof GLctx,
                      'cannot set in module if GLctx is used, but we are a non-GL context that would replace it'
                    ),
                  (s.ctx = i),
                  e && GL.makeContextCurrent(o),
                  (s.useWebGL = e),
                  vt.moduleContextCreatedCallbacks.forEach(function (t) {
                    t();
                  }),
                  vt.init()),
                i)
              : null;
          },
          destroyContext: function (t, e, n) {},
          fullscreenHandlersInstalled: !1,
          lockPointer: void 0,
          resizeCanvas: void 0,
          requestFullscreen: function (t, e) {
            ((vt.lockPointer = t),
              (vt.resizeCanvas = e),
              void 0 === vt.lockPointer && (vt.lockPointer = !0),
              void 0 === vt.resizeCanvas && (vt.resizeCanvas = !1));
            var n = s.canvas;
            function r() {
              vt.isFullscreen = !1;
              var t = n.parentNode;
              ((on.fullscreenElement ||
                on.mozFullScreenElement ||
                on.msFullscreenElement ||
                on.webkitFullscreenElement ||
                on.webkitCurrentFullScreenElement) === t
                ? ((n.exitFullscreen = vt.exitFullscreen),
                  vt.lockPointer && n.requestPointerLock(),
                  (vt.isFullscreen = !0),
                  vt.resizeCanvas
                    ? vt.setFullscreenCanvasSize()
                    : vt.updateCanvasDimensions(n))
                : (t.parentNode.insertBefore(n, t),
                  t.parentNode.removeChild(t),
                  vt.resizeCanvas
                    ? vt.setWindowedCanvasSize()
                    : vt.updateCanvasDimensions(n)),
                s.onFullScreen && s.onFullScreen(vt.isFullscreen),
                s.onFullscreen && s.onFullscreen(vt.isFullscreen));
            }
            vt.fullscreenHandlersInstalled ||
              ((vt.fullscreenHandlersInstalled = !0),
              on.addEventListener('fullscreenchange', r, !1),
              on.addEventListener('mozfullscreenchange', r, !1),
              on.addEventListener('webkitfullscreenchange', r, !1),
              on.addEventListener('MSFullscreenChange', r, !1));
            var i = on.createElement('div');
            (n.parentNode.insertBefore(i, n),
              i.appendChild(n),
              (i.requestFullscreen =
                i.requestFullscreen ||
                i.mozRequestFullScreen ||
                i.msRequestFullscreen ||
                (i.webkitRequestFullscreen
                  ? function () {
                      i.webkitRequestFullscreen(Ke.ALLOW_KEYBOARD_INPUT);
                    }
                  : null) ||
                (i.webkitRequestFullScreen
                  ? function () {
                      i.webkitRequestFullScreen(Ke.ALLOW_KEYBOARD_INPUT);
                    }
                  : null)),
              i.requestFullscreen());
          },
          exitFullscreen: function () {
            return (
              !!vt.isFullscreen &&
              ((
                on.exitFullscreen ||
                on.cancelFullScreen ||
                on.mozCancelFullScreen ||
                on.msExitFullscreen ||
                on.webkitCancelFullScreen ||
                function () {}
              ).apply(on, []),
              !0)
            );
          },
          nextRAF: 0,
          fakeRequestAnimationFrame: function (t) {
            var e = Date.now();
            if (0 === vt.nextRAF) vt.nextRAF = e + 1e3 / 60;
            else for (; e + 2 >= vt.nextRAF; ) vt.nextRAF += 1e3 / 60;
            var n = Math.max(vt.nextRAF - e, 0);
            setTimeout(t, n);
          },
          requestAnimationFrame: (function (t) {
            function e(e) {
              return t.apply(this, arguments);
            }
            return (
              (e.toString = function () {
                return t.toString();
              }),
              e
            );
          })(function (t) {
            'function' != typeof requestAnimationFrame
              ? (0, vt.fakeRequestAnimationFrame)(t)
              : requestAnimationFrame(t);
          }),
          safeCallback: function (t) {
            return function () {
              if (!k) return t.apply(null, arguments);
            };
          },
          allowAsyncCallbacks: !0,
          queuedAsyncCallbacks: [],
          pauseAsyncCallbacks: function () {
            vt.allowAsyncCallbacks = !1;
          },
          resumeAsyncCallbacks: function () {
            if (
              ((vt.allowAsyncCallbacks = !0),
              vt.queuedAsyncCallbacks.length > 0)
            ) {
              var t = vt.queuedAsyncCallbacks;
              ((vt.queuedAsyncCallbacks = []),
                t.forEach(function (t) {
                  t();
                }));
            }
          },
          safeRequestAnimationFrame: function (t) {
            return vt.requestAnimationFrame(function () {
              k ||
                (vt.allowAsyncCallbacks
                  ? t()
                  : vt.queuedAsyncCallbacks.push(t));
            });
          },
          safeSetTimeout: function (t, e) {
            return (
              (w = !0),
              setTimeout(function () {
                k ||
                  (vt.allowAsyncCallbacks
                    ? t()
                    : vt.queuedAsyncCallbacks.push(t));
              }, e)
            );
          },
          safeSetInterval: function (t, e) {
            return (
              (w = !0),
              setInterval(function () {
                k || (vt.allowAsyncCallbacks && t());
              }, e)
            );
          },
          getMimetype: function (t) {
            return {
              jpg: 'image/jpeg',
              jpeg: 'image/jpeg',
              png: 'image/png',
              bmp: 'image/bmp',
              ogg: 'audio/ogg',
              wav: 'audio/wav',
              mp3: 'audio/mpeg',
            }[t.substr(t.lastIndexOf('.') + 1)];
          },
          getUserMedia: function (t) {
            (tn.getUserMedia ||
              (tn.getUserMedia =
                navigator.getUserMedia || navigator.mozGetUserMedia),
              tn.getUserMedia(t));
          },
          getMovementX: function (t) {
            return t.movementX || t.mozMovementX || t.webkitMovementX || 0;
          },
          getMovementY: function (t) {
            return t.movementY || t.mozMovementY || t.webkitMovementY || 0;
          },
          getMouseWheelDelta: function (t) {
            var e = 0;
            switch (t.type) {
              case 'DOMMouseScroll':
                e = t.detail / 3;
                break;
              case 'mousewheel':
                e = t.wheelDelta / 120;
                break;
              case 'wheel':
                switch (((e = t.deltaY), t.deltaMode)) {
                  case 0:
                    e /= 100;
                    break;
                  case 1:
                    e /= 3;
                    break;
                  case 2:
                    e *= 80;
                    break;
                  default:
                    throw 'unrecognized mouse wheel delta mode: ' + t.deltaMode;
                }
                break;
              default:
                throw 'unrecognized mouse wheel event: ' + t.type;
            }
            return e;
          },
          mouseX: 0,
          mouseY: 0,
          mouseMovementX: 0,
          mouseMovementY: 0,
          touches: {},
          lastTouches: {},
          calculateMouseEvent: function (t) {
            if (vt.pointerLock)
              ('mousemove' != t.type && 'mozMovementX' in t
                ? (vt.mouseMovementX = vt.mouseMovementY = 0)
                : ((vt.mouseMovementX = vt.getMovementX(t)),
                  (vt.mouseMovementY = vt.getMovementY(t))),
                'undefined' != typeof SDL
                  ? ((vt.mouseX = SDL.mouseX + vt.mouseMovementX),
                    (vt.mouseY = SDL.mouseY + vt.mouseMovementY))
                  : ((vt.mouseX += vt.mouseMovementX),
                    (vt.mouseY += vt.mouseMovementY)));
            else {
              var e = s.canvas.getBoundingClientRect(),
                n = s.canvas.width,
                r = s.canvas.height,
                i = void 0 !== tn.scrollX ? tn.scrollX : tn.pageXOffset,
                o = void 0 !== tn.scrollY ? tn.scrollY : tn.pageYOffset;
              if (
                'touchstart' === t.type ||
                'touchend' === t.type ||
                'touchmove' === t.type
              ) {
                var a = t.touch;
                if (void 0 === a) return;
                var u = a.pageX - (i + e.left),
                  c = a.pageY - (o + e.top),
                  l = { x: (u *= n / e.width), y: (c *= r / e.height) };
                if ('touchstart' === t.type)
                  ((vt.lastTouches[a.identifier] = l),
                    (vt.touches[a.identifier] = l));
                else if ('touchend' === t.type || 'touchmove' === t.type) {
                  var f = vt.touches[a.identifier];
                  (f || (f = l),
                    (vt.lastTouches[a.identifier] = f),
                    (vt.touches[a.identifier] = l));
                }
                return;
              }
              var h = t.pageX - (i + e.left),
                d = t.pageY - (o + e.top);
              ((h *= n / e.width),
                (d *= r / e.height),
                (vt.mouseMovementX = h - vt.mouseX),
                (vt.mouseMovementY = d - vt.mouseY),
                (vt.mouseX = h),
                (vt.mouseY = d));
            }
          },
          asyncLoad: function (t, e, n, r) {
            var i = r ? '' : 'al ' + t;
            (f(
              t,
              function (n) {
                (S(n, 'Loading data file "' + t + '" failed (no arrayBuffer).'),
                  e(new Uint8Array(n)),
                  i && ut());
              },
              function (e) {
                if (!n) throw 'Loading data file "' + t + '" failed.';
                n();
              }
            ),
              i && st());
          },
          resizeListeners: [],
          updateResizeListeners: function () {
            var t = s.canvas;
            vt.resizeListeners.forEach(function (e) {
              e(t.width, t.height);
            });
          },
          setCanvasSize: function (t, e, n) {
            var r = s.canvas;
            (vt.updateCanvasDimensions(r, t, e),
              n || vt.updateResizeListeners());
          },
          windowedWidth: 0,
          windowedHeight: 0,
          setFullscreenCanvasSize: function () {
            if ('undefined' != typeof SDL) {
              var t = I[SDL.screen >> 2];
              ((t |= 8388608), (N[SDL.screen >> 2] = t));
            }
            (vt.updateCanvasDimensions(s.canvas), vt.updateResizeListeners());
          },
          setWindowedCanvasSize: function () {
            if ('undefined' != typeof SDL) {
              var t = I[SDL.screen >> 2];
              ((t &= -8388609), (N[SDL.screen >> 2] = t));
            }
            (vt.updateCanvasDimensions(s.canvas), vt.updateResizeListeners());
          },
          updateCanvasDimensions: function (t, e, n) {
            e && n
              ? ((t.widthNative = e), (t.heightNative = n))
              : ((e = t.widthNative), (n = t.heightNative));
            var r = e,
              i = n;
            if (
              (s.forcedAspectRatio &&
                s.forcedAspectRatio > 0 &&
                (r / i < s.forcedAspectRatio
                  ? (r = Math.round(i * s.forcedAspectRatio))
                  : (i = Math.round(r / s.forcedAspectRatio))),
              (on.fullscreenElement ||
                on.mozFullScreenElement ||
                on.msFullscreenElement ||
                on.webkitFullscreenElement ||
                on.webkitCurrentFullScreenElement) === t.parentNode &&
                void 0 !== sn)
            ) {
              var o = Math.min(sn.width / r, sn.height / i);
              ((r = Math.round(r * o)), (i = Math.round(i * o)));
            }
            vt.resizeCanvas
              ? (t.width != r && (t.width = r),
                t.height != i && (t.height = i),
                void 0 !== t.style &&
                  (t.style.removeProperty('width'),
                  t.style.removeProperty('height')))
              : (t.width != e && (t.width = e),
                t.height != n && (t.height = n),
                void 0 !== t.style &&
                  (r != e || i != n
                    ? (t.style.setProperty('width', r + 'px', 'important'),
                      t.style.setProperty('height', i + 'px', 'important'))
                    : (t.style.removeProperty('width'),
                      t.style.removeProperty('height'))));
          },
          wgetRequests: {},
          nextWgetRequestHandle: 0,
          getNextWgetRequestHandle: function () {
            var t = vt.nextWgetRequestHandle;
            return (vt.nextWgetRequestHandle++, t);
          },
        };
        function Et(t) {
          for (; t.length > 0; ) {
            var e = t.shift();
            if ('function' != typeof e) {
              var n = e.func;
              'number' == typeof n
                ? void 0 === e.arg
                  ? b.get(n)()
                  : b.get(n)(e.arg)
                : n(void 0 === e.arg ? null : e.arg);
            } else e(s);
          }
        }
        function yt(t) {
          return ((N[se() >> 2] = t), t);
        }
        function wt(t, e) {
          var n;
          if (0 === t) n = Date.now();
          else {
            if (1 !== t && 4 !== t) return (yt(28), -1);
            n = pt();
          }
          return (
            (N[e >> 2] = (n / 1e3) | 0),
            (N[(e + 4) >> 2] = ((n % 1e3) * 1e3 * 1e3) | 0),
            0
          );
        }
        var Tt = {
          DESTRUCTOR_OFFSET: 0,
          REFCOUNT_OFFSET: 4,
          TYPE_OFFSET: 8,
          CAUGHT_OFFSET: 12,
          RETHROWN_OFFSET: 13,
          SIZE: 16,
        };
        function Rt(t) {
          ((this.excPtr = t),
            (this.ptr = t - Tt.SIZE),
            (this.set_type = function (t) {
              N[(this.ptr + Tt.TYPE_OFFSET) >> 2] = t;
            }),
            (this.get_type = function () {
              return N[(this.ptr + Tt.TYPE_OFFSET) >> 2];
            }),
            (this.set_destructor = function (t) {
              N[(this.ptr + Tt.DESTRUCTOR_OFFSET) >> 2] = t;
            }),
            (this.get_destructor = function () {
              return N[(this.ptr + Tt.DESTRUCTOR_OFFSET) >> 2];
            }),
            (this.set_refcount = function (t) {
              N[(this.ptr + Tt.REFCOUNT_OFFSET) >> 2] = t;
            }),
            (this.set_caught = function (t) {
              ((t = t ? 1 : 0), (D[(this.ptr + Tt.CAUGHT_OFFSET) | 0] = t));
            }),
            (this.get_caught = function () {
              return 0 != D[(this.ptr + Tt.CAUGHT_OFFSET) | 0];
            }),
            (this.set_rethrown = function (t) {
              ((t = t ? 1 : 0), (D[(this.ptr + Tt.RETHROWN_OFFSET) | 0] = t));
            }),
            (this.get_rethrown = function () {
              return 0 != D[(this.ptr + Tt.RETHROWN_OFFSET) | 0];
            }),
            (this.init = function (t, e) {
              (this.set_type(t),
                this.set_destructor(e),
                this.set_refcount(0),
                this.set_caught(!1),
                this.set_rethrown(!1));
            }),
            (this.add_ref = function () {
              var t = N[(this.ptr + Tt.REFCOUNT_OFFSET) >> 2];
              N[(this.ptr + Tt.REFCOUNT_OFFSET) >> 2] = t + 1;
            }),
            (this.release_ref = function () {
              var t = N[(this.ptr + Tt.REFCOUNT_OFFSET) >> 2];
              return (
                (N[(this.ptr + Tt.REFCOUNT_OFFSET) >> 2] = t - 1),
                1 === t
              );
            }));
        }
        function At(t) {
          ((this.free = function () {
            (oe(this.ptr), (this.ptr = 0));
          }),
            (this.set_base_ptr = function (t) {
              N[this.ptr >> 2] = t;
            }),
            (this.get_base_ptr = function () {
              return N[this.ptr >> 2];
            }),
            (this.set_adjusted_ptr = function (t) {
              N[(this.ptr + 4) >> 2] = t;
            }),
            (this.get_adjusted_ptr = function () {
              return N[(this.ptr + 4) >> 2];
            }),
            (this.get_exception_ptr = function () {
              if (ve(this.get_exception_info().get_type()))
                return N[this.get_base_ptr() >> 2];
              var t = this.get_adjusted_ptr();
              return 0 !== t ? t : this.get_base_ptr();
            }),
            (this.get_exception_info = function () {
              return new Rt(this.get_base_ptr());
            }),
            void 0 === t
              ? ((this.ptr = ue(8)), this.set_adjusted_ptr(0))
              : (this.ptr = t));
        }
        var bt = [];
        function kt(t) {
          t.add_ref();
        }
        function St(t) {
          try {
            return oe(new Rt(t).ptr);
          } catch (t) {}
        }
        function Ft(t) {
          if (t.release_ref() && !t.get_rethrown()) {
            var e = t.get_destructor();
            (e && b.get(e)(t.excPtr), St(t.excPtr));
          }
        }
        var Lt = 0,
          Ct = 0;
        function Dt() {
          var t = bt.pop(),
            e = t.get_exception_info(),
            n = t.get_base_ptr();
          throw (
            e.get_rethrown() ? t.free() : (bt.push(t), e.set_rethrown(!0)),
            (Lt = n),
            n
          );
        }
        function jt(t, e) {
          var n = new Date(1e3 * N[t >> 2]);
          ((N[e >> 2] = n.getUTCSeconds()),
            (N[(e + 4) >> 2] = n.getUTCMinutes()),
            (N[(e + 8) >> 2] = n.getUTCHours()),
            (N[(e + 12) >> 2] = n.getUTCDate()),
            (N[(e + 16) >> 2] = n.getUTCMonth()),
            (N[(e + 20) >> 2] = n.getUTCFullYear() - 1900),
            (N[(e + 24) >> 2] = n.getUTCDay()),
            (N[(e + 36) >> 2] = 0),
            (N[(e + 32) >> 2] = 0));
          var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
            i = ((n.getTime() - r) / 864e5) | 0;
          return (
            (N[(e + 28) >> 2] = i),
            jt.GMTString || (jt.GMTString = z('GMT')),
            (N[(e + 40) >> 2] = jt.GMTString),
            e
          );
        }
        function Ot() {
          if (!Ot.called) {
            ((Ot.called = !0),
              (N[fe() >> 2] = 60 * new Date().getTimezoneOffset()));
            var t = new Date().getFullYear(),
              e = new Date(t, 0, 1),
              n = new Date(t, 6, 1);
            N[le() >> 2] = Number(
              e.getTimezoneOffset() != n.getTimezoneOffset()
            );
            var r = s(e),
              i = s(n),
              o = z(r),
              a = z(i);
            n.getTimezoneOffset() < e.getTimezoneOffset()
              ? ((N[ce() >> 2] = o), (N[(ce() + 4) >> 2] = a))
              : ((N[ce() >> 2] = a), (N[(ce() + 4) >> 2] = o));
          }
          function s(t) {
            var e = t.toTimeString().match(/\(([A-Za-z ]+)\)$/);
            return e ? e[1] : 'GMT';
          }
        }
        function Mt(t, e) {
          Ot();
          var n = new Date(1e3 * N[t >> 2]);
          ((N[e >> 2] = n.getSeconds()),
            (N[(e + 4) >> 2] = n.getMinutes()),
            (N[(e + 8) >> 2] = n.getHours()),
            (N[(e + 12) >> 2] = n.getDate()),
            (N[(e + 16) >> 2] = n.getMonth()),
            (N[(e + 20) >> 2] = n.getFullYear() - 1900),
            (N[(e + 24) >> 2] = n.getDay()));
          var r = new Date(n.getFullYear(), 0, 1),
            i = ((n.getTime() - r.getTime()) / 864e5) | 0;
          ((N[(e + 28) >> 2] = i),
            (N[(e + 36) >> 2] = -60 * n.getTimezoneOffset()));
          var o = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
            a = r.getTimezoneOffset(),
            s = 0 | (o != a && n.getTimezoneOffset() == Math.min(a, o));
          N[(e + 32) >> 2] = s;
          var u = N[(ce() + (s ? 4 : 0)) >> 2];
          return ((N[(e + 40) >> 2] = u), e);
        }
        var Nt = {
            splitPath: function (t) {
              return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                .exec(t)
                .slice(1);
            },
            normalizeArray: function (t, e) {
              for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var i = t[r];
                '.' === i
                  ? t.splice(r, 1)
                  : '..' === i
                    ? (t.splice(r, 1), n++)
                    : n && (t.splice(r, 1), n--);
              }
              if (e) for (; n; n--) t.unshift('..');
              return t;
            },
            normalize: function (t) {
              var e = '/' === t.charAt(0),
                n = '/' === t.substr(-1);
              return (
                (t = Nt.normalizeArray(
                  t.split('/').filter(function (t) {
                    return !!t;
                  }),
                  !e
                ).join('/')) ||
                  e ||
                  (t = '.'),
                t && n && (t += '/'),
                (e ? '/' : '') + t
              );
            },
            dirname: function (t) {
              var e = Nt.splitPath(t),
                n = e[0],
                r = e[1];
              return n || r
                ? (r && (r = r.substr(0, r.length - 1)), n + r)
                : '.';
            },
            basename: function (t) {
              if ('/' === t) return '/';
              var e = (t = (t = Nt.normalize(t)).replace(
                /\/$/,
                ''
              )).lastIndexOf('/');
              return -1 === e ? t : t.substr(e + 1);
            },
            extname: function (t) {
              return Nt.splitPath(t)[3];
            },
            join: function () {
              var t = Array.prototype.slice.call(arguments, 0);
              return Nt.normalize(t.join('/'));
            },
            join2: function (t, e) {
              return Nt.normalize(t + '/' + e);
            },
          },
          It = {
            resolve: function () {
              for (
                var t = '', e = !1, n = arguments.length - 1;
                n >= -1 && !e;
                n--
              ) {
                var r = n >= 0 ? arguments[n] : Ut.cwd();
                if ('string' != typeof r)
                  throw new TypeError(
                    'Arguments to path.resolve must be strings'
                  );
                if (!r) return '';
                ((t = r + '/' + t), (e = '/' === r.charAt(0)));
              }
              return (
                (e ? '/' : '') +
                  (t = Nt.normalizeArray(
                    t.split('/').filter(function (t) {
                      return !!t;
                    }),
                    !e
                  ).join('/')) || '.'
              );
            },
            relative: function (t, e) {
              function n(t) {
                for (var e = 0; e < t.length && '' === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && '' === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1);
              }
              ((t = It.resolve(t).substr(1)), (e = It.resolve(e).substr(1)));
              for (
                var r = n(t.split('/')),
                  i = n(e.split('/')),
                  o = Math.min(r.length, i.length),
                  a = o,
                  s = 0;
                s < o;
                s++
              )
                if (r[s] !== i[s]) {
                  a = s;
                  break;
                }
              var u = [];
              for (s = a; s < r.length; s++) u.push('..');
              return (u = u.concat(i.slice(a))).join('/');
            },
          },
          Pt = {
            ttys: [],
            init: function () {},
            shutdown: function () {},
            register: function (t, e) {
              ((Pt.ttys[t] = { input: [], output: [], ops: e }),
                Ut.registerDevice(t, Pt.stream_ops));
            },
            stream_ops: {
              open: function (t) {
                var e = Pt.ttys[t.node.rdev];
                if (!e) throw new Ut.ErrnoError(43);
                ((t.tty = e), (t.seekable = !1));
              },
              close: function (t) {
                t.tty.ops.flush(t.tty);
              },
              flush: function (t) {
                t.tty.ops.flush(t.tty);
              },
              read: function (t, e, n, r, i) {
                if (!t.tty || !t.tty.ops.get_char) throw new Ut.ErrnoError(60);
                for (var o = 0, a = 0; a < r; a++) {
                  var s;
                  try {
                    s = t.tty.ops.get_char(t.tty);
                  } catch (t) {
                    throw new Ut.ErrnoError(29);
                  }
                  if (void 0 === s && 0 === o) throw new Ut.ErrnoError(6);
                  if (null == s) break;
                  (o++, (e[n + a] = s));
                }
                return (o && (t.node.timestamp = Date.now()), o);
              },
              write: function (t, e, n, r, i) {
                if (!t.tty || !t.tty.ops.put_char) throw new Ut.ErrnoError(60);
                try {
                  for (var o = 0; o < r; o++)
                    t.tty.ops.put_char(t.tty, e[n + o]);
                } catch (t) {
                  throw new Ut.ErrnoError(29);
                }
                return (r && (t.node.timestamp = Date.now()), o);
              },
            },
            default_tty_ops: {
              get_char: function (t) {
                if (!t.input.length) {
                  var e = null;
                  if (
                    (void 0 !== tn && 'function' == typeof tn.prompt
                      ? null !== (e = tn.prompt('Input: ')) && (e += '\n')
                      : 'function' == typeof readline &&
                        null !== (e = readline()) &&
                        (e += '\n'),
                    !e)
                  )
                    return null;
                  t.input = te(e, !0);
                }
                return t.input.shift();
              },
              put_char: function (t, e) {
                null === e || 10 === e
                  ? (g(x(t.output, 0)), (t.output = []))
                  : 0 != e && t.output.push(e);
              },
              flush: function (t) {
                t.output &&
                  t.output.length > 0 &&
                  (g(x(t.output, 0)), (t.output = []));
              },
            },
            default_tty1_ops: {
              put_char: function (t, e) {
                null === e || 10 === e
                  ? (v(x(t.output, 0)), (t.output = []))
                  : 0 != e && t.output.push(e);
              },
              flush: function (t) {
                t.output &&
                  t.output.length > 0 &&
                  (v(x(t.output, 0)), (t.output = []));
              },
            },
          },
          Bt = {
            ops_table: null,
            mount: function (t) {
              return Bt.createNode(null, '/', 16895, 0);
            },
            createNode: function (t, e, n, r) {
              if (Ut.isBlkdev(n) || Ut.isFIFO(n)) throw new Ut.ErrnoError(63);
              Bt.ops_table ||
                (Bt.ops_table = {
                  dir: {
                    node: {
                      getattr: Bt.node_ops.getattr,
                      setattr: Bt.node_ops.setattr,
                      lookup: Bt.node_ops.lookup,
                      mknod: Bt.node_ops.mknod,
                      rename: Bt.node_ops.rename,
                      unlink: Bt.node_ops.unlink,
                      rmdir: Bt.node_ops.rmdir,
                      readdir: Bt.node_ops.readdir,
                      symlink: Bt.node_ops.symlink,
                    },
                    stream: { llseek: Bt.stream_ops.llseek },
                  },
                  file: {
                    node: {
                      getattr: Bt.node_ops.getattr,
                      setattr: Bt.node_ops.setattr,
                    },
                    stream: {
                      llseek: Bt.stream_ops.llseek,
                      read: Bt.stream_ops.read,
                      write: Bt.stream_ops.write,
                      allocate: Bt.stream_ops.allocate,
                      mmap: Bt.stream_ops.mmap,
                      msync: Bt.stream_ops.msync,
                    },
                  },
                  link: {
                    node: {
                      getattr: Bt.node_ops.getattr,
                      setattr: Bt.node_ops.setattr,
                      readlink: Bt.node_ops.readlink,
                    },
                    stream: {},
                  },
                  chrdev: {
                    node: {
                      getattr: Bt.node_ops.getattr,
                      setattr: Bt.node_ops.setattr,
                    },
                    stream: Ut.chrdev_stream_ops,
                  },
                });
              var i = Ut.createNode(t, e, n, r);
              return (
                Ut.isDir(i.mode)
                  ? ((i.node_ops = Bt.ops_table.dir.node),
                    (i.stream_ops = Bt.ops_table.dir.stream),
                    (i.contents = {}))
                  : Ut.isFile(i.mode)
                    ? ((i.node_ops = Bt.ops_table.file.node),
                      (i.stream_ops = Bt.ops_table.file.stream),
                      (i.usedBytes = 0),
                      (i.contents = null))
                    : Ut.isLink(i.mode)
                      ? ((i.node_ops = Bt.ops_table.link.node),
                        (i.stream_ops = Bt.ops_table.link.stream))
                      : Ut.isChrdev(i.mode) &&
                        ((i.node_ops = Bt.ops_table.chrdev.node),
                        (i.stream_ops = Bt.ops_table.chrdev.stream)),
                (i.timestamp = Date.now()),
                t && (t.contents[e] = i),
                i
              );
            },
            getFileDataAsRegularArray: function (t) {
              if (t.contents && t.contents.subarray) {
                for (var e = [], n = 0; n < t.usedBytes; ++n)
                  e.push(t.contents[n]);
                return e;
              }
              return t.contents;
            },
            getFileDataAsTypedArray: function (t) {
              return t.contents
                ? t.contents.subarray
                  ? t.contents.subarray(0, t.usedBytes)
                  : new Uint8Array(t.contents)
                : new Uint8Array(0);
            },
            expandFileStorage: function (t, e) {
              var n = t.contents ? t.contents.length : 0;
              if (!(n >= e)) {
                ((e = Math.max(e, (n * (n < 1048576 ? 2 : 1.125)) >>> 0)),
                  0 != n && (e = Math.max(e, 256)));
                var r = t.contents;
                ((t.contents = new Uint8Array(e)),
                  t.usedBytes > 0 &&
                    t.contents.set(r.subarray(0, t.usedBytes), 0));
              }
            },
            resizeFileStorage: function (t, e) {
              if (t.usedBytes != e) {
                if (0 == e)
                  return ((t.contents = null), void (t.usedBytes = 0));
                if (!t.contents || t.contents.subarray) {
                  var n = t.contents;
                  return (
                    (t.contents = new Uint8Array(e)),
                    n &&
                      t.contents.set(n.subarray(0, Math.min(e, t.usedBytes))),
                    void (t.usedBytes = e)
                  );
                }
                if ((t.contents || (t.contents = []), t.contents.length > e))
                  t.contents.length = e;
                else for (; t.contents.length < e; ) t.contents.push(0);
                t.usedBytes = e;
              }
            },
            node_ops: {
              getattr: function (t) {
                var e = {};
                return (
                  (e.dev = Ut.isChrdev(t.mode) ? t.id : 1),
                  (e.ino = t.id),
                  (e.mode = t.mode),
                  (e.nlink = 1),
                  (e.uid = 0),
                  (e.gid = 0),
                  (e.rdev = t.rdev),
                  Ut.isDir(t.mode)
                    ? (e.size = 4096)
                    : Ut.isFile(t.mode)
                      ? (e.size = t.usedBytes)
                      : Ut.isLink(t.mode)
                        ? (e.size = t.link.length)
                        : (e.size = 0),
                  (e.atime = new Date(t.timestamp)),
                  (e.mtime = new Date(t.timestamp)),
                  (e.ctime = new Date(t.timestamp)),
                  (e.blksize = 4096),
                  (e.blocks = Math.ceil(e.size / e.blksize)),
                  e
                );
              },
              setattr: function (t, e) {
                (void 0 !== e.mode && (t.mode = e.mode),
                  void 0 !== e.timestamp && (t.timestamp = e.timestamp),
                  void 0 !== e.size && Bt.resizeFileStorage(t, e.size));
              },
              lookup: function (t, e) {
                throw Ut.genericErrors[44];
              },
              mknod: function (t, e, n, r) {
                return Bt.createNode(t, e, n, r);
              },
              rename: function (t, e, n) {
                if (Ut.isDir(t.mode)) {
                  var r;
                  try {
                    r = Ut.lookupNode(e, n);
                  } catch (t) {}
                  if (r) for (var i in r.contents) throw new Ut.ErrnoError(55);
                }
                (delete t.parent.contents[t.name],
                  (t.name = n),
                  (e.contents[n] = t),
                  (t.parent = e));
              },
              unlink: function (t, e) {
                delete t.contents[e];
              },
              rmdir: function (t, e) {
                var n = Ut.lookupNode(t, e);
                for (var r in n.contents) throw new Ut.ErrnoError(55);
                delete t.contents[e];
              },
              readdir: function (t) {
                var e = ['.', '..'];
                for (var n in t.contents)
                  t.contents.hasOwnProperty(n) && e.push(n);
                return e;
              },
              symlink: function (t, e, n) {
                var r = Bt.createNode(t, e, 41471, 0);
                return ((r.link = n), r);
              },
              readlink: function (t) {
                if (!Ut.isLink(t.mode)) throw new Ut.ErrnoError(28);
                return t.link;
              },
            },
            stream_ops: {
              read: function (t, e, n, r, i) {
                var o = t.node.contents;
                if (i >= t.node.usedBytes) return 0;
                var a = Math.min(t.node.usedBytes - i, r);
                if (a > 8 && o.subarray) e.set(o.subarray(i, i + a), n);
                else for (var s = 0; s < a; s++) e[n + s] = o[i + s];
                return a;
              },
              write: function (t, e, n, r, i, o) {
                if (!r) return 0;
                var a = t.node;
                if (
                  ((a.timestamp = Date.now()),
                  e.subarray && (!a.contents || a.contents.subarray))
                ) {
                  if (o)
                    return (
                      (a.contents = e.subarray(n, n + r)),
                      (a.usedBytes = r),
                      r
                    );
                  if (0 === a.usedBytes && 0 === i)
                    return (
                      (a.contents = e.slice(n, n + r)),
                      (a.usedBytes = r),
                      r
                    );
                  if (i + r <= a.usedBytes)
                    return (a.contents.set(e.subarray(n, n + r), i), r);
                }
                if (
                  (Bt.expandFileStorage(a, i + r),
                  a.contents.subarray && e.subarray)
                )
                  a.contents.set(e.subarray(n, n + r), i);
                else for (var s = 0; s < r; s++) a.contents[i + s] = e[n + s];
                return ((a.usedBytes = Math.max(a.usedBytes, i + r)), r);
              },
              llseek: function (t, e, n) {
                var r = e;
                if (
                  (1 === n
                    ? (r += t.position)
                    : 2 === n &&
                      Ut.isFile(t.node.mode) &&
                      (r += t.node.usedBytes),
                  r < 0)
                )
                  throw new Ut.ErrnoError(28);
                return r;
              },
              allocate: function (t, e, n) {
                (Bt.expandFileStorage(t.node, e + n),
                  (t.node.usedBytes = Math.max(t.node.usedBytes, e + n)));
              },
              mmap: function (t, e, n, r, i, o) {
                if ((S(0 === e), !Ut.isFile(t.node.mode)))
                  throw new Ut.ErrnoError(43);
                var a,
                  s,
                  u = t.node.contents;
                if (2 & o || u.buffer !== C) {
                  if (
                    ((r > 0 || r + n < u.length) &&
                      (u = u.subarray
                        ? u.subarray(r, r + n)
                        : Array.prototype.slice.call(u, r, r + n)),
                    (s = !0),
                    !(a = Ut.mmapAlloc(n)))
                  )
                    throw new Ut.ErrnoError(48);
                  D.set(u, a);
                } else ((s = !1), (a = u.byteOffset));
                return { ptr: a, allocated: s };
              },
              msync: function (t, e, n, r, i) {
                if (!Ut.isFile(t.node.mode)) throw new Ut.ErrnoError(43);
                return (2 & i || Bt.stream_ops.write(t, e, 0, r, n, !1), 0);
              },
            },
          },
          Ut = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: '/',
            initialized: !1,
            ignorePermissions: !0,
            trackingDelegate: {},
            tracking: { openFlags: { READ: 1, WRITE: 2 } },
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            handleFSError: function (t) {
              if (!(t instanceof Ut.ErrnoError))
                throw (
                  t +
                  ' : ' +
                  ((e = (function () {
                    var t = new Error();
                    if (!t.stack) {
                      try {
                        throw new Error();
                      } catch (e) {
                        t = e;
                      }
                      if (!t.stack) return '(no stack trace available)';
                    }
                    return t.stack.toString();
                  })()),
                  s.extraStackTrace && (e += '\n' + s.extraStackTrace()),
                  e.replace(/\b_Z[\w\d_]+/g, function (t) {
                    return t == t ? t : t + ' [' + t + ']';
                  }))
                );
              var e;
              return yt(t.errno);
            },
            lookupPath: function (t, e) {
              if (((e = e || {}), !(t = It.resolve(Ut.cwd(), t))))
                return { path: '', node: null };
              var n = { follow_mount: !0, recurse_count: 0 };
              for (var r in n) void 0 === e[r] && (e[r] = n[r]);
              if (e.recurse_count > 8) throw new Ut.ErrnoError(32);
              for (
                var i = Nt.normalizeArray(
                    t.split('/').filter(function (t) {
                      return !!t;
                    }),
                    !1
                  ),
                  o = Ut.root,
                  a = '/',
                  s = 0;
                s < i.length;
                s++
              ) {
                var u = s === i.length - 1;
                if (u && e.parent) break;
                if (
                  ((o = Ut.lookupNode(o, i[s])),
                  (a = Nt.join2(a, i[s])),
                  Ut.isMountpoint(o) &&
                    (!u || (u && e.follow_mount)) &&
                    (o = o.mounted.root),
                  !u || e.follow)
                )
                  for (var c = 0; Ut.isLink(o.mode); ) {
                    var l = Ut.readlink(a);
                    if (
                      ((a = It.resolve(Nt.dirname(a), l)),
                      (o = Ut.lookupPath(a, {
                        recurse_count: e.recurse_count,
                      }).node),
                      c++ > 40)
                    )
                      throw new Ut.ErrnoError(32);
                  }
              }
              return { path: a, node: o };
            },
            getPath: function (t) {
              for (var e; ; ) {
                if (Ut.isRoot(t)) {
                  var n = t.mount.mountpoint;
                  return e
                    ? '/' !== n[n.length - 1]
                      ? n + '/' + e
                      : n + e
                    : n;
                }
                ((e = e ? t.name + '/' + e : t.name), (t = t.parent));
              }
            },
            hashName: function (t, e) {
              for (var n = 0, r = 0; r < e.length; r++)
                n = ((n << 5) - n + e.charCodeAt(r)) | 0;
              return ((t + n) >>> 0) % Ut.nameTable.length;
            },
            hashAddNode: function (t) {
              var e = Ut.hashName(t.parent.id, t.name);
              ((t.name_next = Ut.nameTable[e]), (Ut.nameTable[e] = t));
            },
            hashRemoveNode: function (t) {
              var e = Ut.hashName(t.parent.id, t.name);
              if (Ut.nameTable[e] === t) Ut.nameTable[e] = t.name_next;
              else
                for (var n = Ut.nameTable[e]; n; ) {
                  if (n.name_next === t) {
                    n.name_next = t.name_next;
                    break;
                  }
                  n = n.name_next;
                }
            },
            lookupNode: function (t, e) {
              var n = Ut.mayLookup(t);
              if (n) throw new Ut.ErrnoError(n, t);
              for (
                var r = Ut.hashName(t.id, e), i = Ut.nameTable[r];
                i;
                i = i.name_next
              ) {
                var o = i.name;
                if (i.parent.id === t.id && o === e) return i;
              }
              return Ut.lookup(t, e);
            },
            createNode: function (t, e, n, r) {
              var i = new Ut.FSNode(t, e, n, r);
              return (Ut.hashAddNode(i), i);
            },
            destroyNode: function (t) {
              Ut.hashRemoveNode(t);
            },
            isRoot: function (t) {
              return t === t.parent;
            },
            isMountpoint: function (t) {
              return !!t.mounted;
            },
            isFile: function (t) {
              return 32768 == (61440 & t);
            },
            isDir: function (t) {
              return 16384 == (61440 & t);
            },
            isLink: function (t) {
              return 40960 == (61440 & t);
            },
            isChrdev: function (t) {
              return 8192 == (61440 & t);
            },
            isBlkdev: function (t) {
              return 24576 == (61440 & t);
            },
            isFIFO: function (t) {
              return 4096 == (61440 & t);
            },
            isSocket: function (t) {
              return !(49152 & ~t);
            },
            flagModes: {
              r: 0,
              rs: 1052672,
              'r+': 2,
              w: 577,
              wx: 705,
              xw: 705,
              'w+': 578,
              'wx+': 706,
              'xw+': 706,
              a: 1089,
              ax: 1217,
              xa: 1217,
              'a+': 1090,
              'ax+': 1218,
              'xa+': 1218,
            },
            modeStringToFlags: function (t) {
              var e = Ut.flagModes[t];
              if (void 0 === e) throw new Error('Unknown file open mode: ' + t);
              return e;
            },
            flagsToPermissionString: function (t) {
              var e = ['r', 'w', 'rw'][3 & t];
              return (512 & t && (e += 'w'), e);
            },
            nodePermissions: function (t, e) {
              return Ut.ignorePermissions ||
                ((-1 === e.indexOf('r') || 292 & t.mode) &&
                  (-1 === e.indexOf('w') || 146 & t.mode) &&
                  (-1 === e.indexOf('x') || 73 & t.mode))
                ? 0
                : 2;
            },
            mayLookup: function (t) {
              return Ut.nodePermissions(t, 'x') || (t.node_ops.lookup ? 0 : 2);
            },
            mayCreate: function (t, e) {
              try {
                return (Ut.lookupNode(t, e), 20);
              } catch (t) {}
              return Ut.nodePermissions(t, 'wx');
            },
            mayDelete: function (t, e, n) {
              var r;
              try {
                r = Ut.lookupNode(t, e);
              } catch (t) {
                return t.errno;
              }
              var i = Ut.nodePermissions(t, 'wx');
              if (i) return i;
              if (n) {
                if (!Ut.isDir(r.mode)) return 54;
                if (Ut.isRoot(r) || Ut.getPath(r) === Ut.cwd()) return 10;
              } else if (Ut.isDir(r.mode)) return 31;
              return 0;
            },
            mayOpen: function (t, e) {
              return t
                ? Ut.isLink(t.mode)
                  ? 32
                  : Ut.isDir(t.mode) &&
                      ('r' !== Ut.flagsToPermissionString(e) || 512 & e)
                    ? 31
                    : Ut.nodePermissions(t, Ut.flagsToPermissionString(e))
                : 44;
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function (t, e) {
              ((t = t || 0), (e = e || Ut.MAX_OPEN_FDS));
              for (var n = t; n <= e; n++) if (!Ut.streams[n]) return n;
              throw new Ut.ErrnoError(33);
            },
            getStream: function (t) {
              return Ut.streams[t];
            },
            createStream: function (t, e, n) {
              Ut.FSStream ||
                ((Ut.FSStream = function () {}),
                (Ut.FSStream.prototype = {
                  object: {
                    get: function () {
                      return this.node;
                    },
                    set: function (t) {
                      this.node = t;
                    },
                  },
                  isRead: {
                    get: function () {
                      return 1 != (2097155 & this.flags);
                    },
                  },
                  isWrite: {
                    get: function () {
                      return !!(2097155 & this.flags);
                    },
                  },
                  isAppend: {
                    get: function () {
                      return 1024 & this.flags;
                    },
                  },
                }));
              var r = new Ut.FSStream();
              for (var i in t) r[i] = t[i];
              t = r;
              var o = Ut.nextfd(e, n);
              return ((t.fd = o), (Ut.streams[o] = t), t);
            },
            closeStream: function (t) {
              Ut.streams[t] = null;
            },
            chrdev_stream_ops: {
              open: function (t) {
                var e = Ut.getDevice(t.node.rdev);
                ((t.stream_ops = e.stream_ops),
                  t.stream_ops.open && t.stream_ops.open(t));
              },
              llseek: function () {
                throw new Ut.ErrnoError(70);
              },
            },
            major: function (t) {
              return t >> 8;
            },
            minor: function (t) {
              return 255 & t;
            },
            makedev: function (t, e) {
              return (t << 8) | e;
            },
            registerDevice: function (t, e) {
              Ut.devices[t] = { stream_ops: e };
            },
            getDevice: function (t) {
              return Ut.devices[t];
            },
            getMounts: function (t) {
              for (var e = [], n = [t]; n.length; ) {
                var r = n.pop();
                (e.push(r), n.push.apply(n, r.mounts));
              }
              return e;
            },
            syncfs: function (t, e) {
              ('function' == typeof t && ((e = t), (t = !1)),
                Ut.syncFSRequests++,
                Ut.syncFSRequests > 1 &&
                  v(
                    'warning: ' +
                      Ut.syncFSRequests +
                      ' FS.syncfs operations in flight at once, probably just doing extra work'
                  ));
              var n = Ut.getMounts(Ut.root.mount),
                r = 0;
              function i(t) {
                return (Ut.syncFSRequests--, e(t));
              }
              function o(t) {
                if (t) return o.errored ? void 0 : ((o.errored = !0), i(t));
                ++r >= n.length && i(null);
              }
              n.forEach(function (e) {
                if (!e.type.syncfs) return o(null);
                e.type.syncfs(e, t, o);
              });
            },
            mount: function (t, e, n) {
              var r,
                i = '/' === n,
                o = !n;
              if (i && Ut.root) throw new Ut.ErrnoError(10);
              if (!i && !o) {
                var a = Ut.lookupPath(n, { follow_mount: !1 });
                if (((n = a.path), (r = a.node), Ut.isMountpoint(r)))
                  throw new Ut.ErrnoError(10);
                if (!Ut.isDir(r.mode)) throw new Ut.ErrnoError(54);
              }
              var s = { type: t, opts: e, mountpoint: n, mounts: [] },
                u = t.mount(s);
              return (
                (u.mount = s),
                (s.root = u),
                i
                  ? (Ut.root = u)
                  : r && ((r.mounted = s), r.mount && r.mount.mounts.push(s)),
                u
              );
            },
            unmount: function (t) {
              var e = Ut.lookupPath(t, { follow_mount: !1 });
              if (!Ut.isMountpoint(e.node)) throw new Ut.ErrnoError(28);
              var n = e.node,
                r = n.mounted,
                i = Ut.getMounts(r);
              (Object.keys(Ut.nameTable).forEach(function (t) {
                for (var e = Ut.nameTable[t]; e; ) {
                  var n = e.name_next;
                  (-1 !== i.indexOf(e.mount) && Ut.destroyNode(e), (e = n));
                }
              }),
                (n.mounted = null));
              var o = n.mount.mounts.indexOf(r);
              n.mount.mounts.splice(o, 1);
            },
            lookup: function (t, e) {
              return t.node_ops.lookup(t, e);
            },
            mknod: function (t, e, n) {
              var r = Ut.lookupPath(t, { parent: !0 }).node,
                i = Nt.basename(t);
              if (!i || '.' === i || '..' === i) throw new Ut.ErrnoError(28);
              var o = Ut.mayCreate(r, i);
              if (o) throw new Ut.ErrnoError(o);
              if (!r.node_ops.mknod) throw new Ut.ErrnoError(63);
              return r.node_ops.mknod(r, i, e, n);
            },
            create: function (t, e) {
              return (
                (e = void 0 !== e ? e : 438),
                (e &= 4095),
                (e |= 32768),
                Ut.mknod(t, e, 0)
              );
            },
            mkdir: function (t, e) {
              return (
                (e = void 0 !== e ? e : 511),
                (e &= 1023),
                (e |= 16384),
                Ut.mknod(t, e, 0)
              );
            },
            mkdirTree: function (t, e) {
              for (var n = t.split('/'), r = '', i = 0; i < n.length; ++i)
                if (n[i]) {
                  r += '/' + n[i];
                  try {
                    Ut.mkdir(r, e);
                  } catch (t) {
                    if (20 != t.errno) throw t;
                  }
                }
            },
            mkdev: function (t, e, n) {
              return (
                void 0 === n && ((n = e), (e = 438)),
                (e |= 8192),
                Ut.mknod(t, e, n)
              );
            },
            symlink: function (t, e) {
              if (!It.resolve(t)) throw new Ut.ErrnoError(44);
              var n = Ut.lookupPath(e, { parent: !0 }).node;
              if (!n) throw new Ut.ErrnoError(44);
              var r = Nt.basename(e),
                i = Ut.mayCreate(n, r);
              if (i) throw new Ut.ErrnoError(i);
              if (!n.node_ops.symlink) throw new Ut.ErrnoError(63);
              return n.node_ops.symlink(n, r, t);
            },
            rename: function (t, e) {
              var n,
                r,
                i = Nt.dirname(t),
                o = Nt.dirname(e),
                a = Nt.basename(t),
                s = Nt.basename(e);
              if (
                ((n = Ut.lookupPath(t, { parent: !0 }).node),
                (r = Ut.lookupPath(e, { parent: !0 }).node),
                !n || !r)
              )
                throw new Ut.ErrnoError(44);
              if (n.mount !== r.mount) throw new Ut.ErrnoError(75);
              var u,
                c = Ut.lookupNode(n, a),
                l = It.relative(t, o);
              if ('.' !== l.charAt(0)) throw new Ut.ErrnoError(28);
              if ('.' !== (l = It.relative(e, i)).charAt(0))
                throw new Ut.ErrnoError(55);
              try {
                u = Ut.lookupNode(r, s);
              } catch (t) {}
              if (c !== u) {
                var f = Ut.isDir(c.mode),
                  h = Ut.mayDelete(n, a, f);
                if (h) throw new Ut.ErrnoError(h);
                if ((h = u ? Ut.mayDelete(r, s, f) : Ut.mayCreate(r, s)))
                  throw new Ut.ErrnoError(h);
                if (!n.node_ops.rename) throw new Ut.ErrnoError(63);
                if (Ut.isMountpoint(c) || (u && Ut.isMountpoint(u)))
                  throw new Ut.ErrnoError(10);
                if (r !== n && (h = Ut.nodePermissions(n, 'w')))
                  throw new Ut.ErrnoError(h);
                try {
                  Ut.trackingDelegate.willMovePath &&
                    Ut.trackingDelegate.willMovePath(t, e);
                } catch (n) {
                  v(
                    "FS.trackingDelegate['willMovePath']('" +
                      t +
                      "', '" +
                      e +
                      "') threw an exception: " +
                      n.message
                  );
                }
                Ut.hashRemoveNode(c);
                try {
                  n.node_ops.rename(c, r, s);
                } catch (t) {
                  throw t;
                } finally {
                  Ut.hashAddNode(c);
                }
                try {
                  Ut.trackingDelegate.onMovePath &&
                    Ut.trackingDelegate.onMovePath(t, e);
                } catch (n) {
                  v(
                    "FS.trackingDelegate['onMovePath']('" +
                      t +
                      "', '" +
                      e +
                      "') threw an exception: " +
                      n.message
                  );
                }
              }
            },
            rmdir: function (t) {
              var e = Ut.lookupPath(t, { parent: !0 }).node,
                n = Nt.basename(t),
                r = Ut.lookupNode(e, n),
                i = Ut.mayDelete(e, n, !0);
              if (i) throw new Ut.ErrnoError(i);
              if (!e.node_ops.rmdir) throw new Ut.ErrnoError(63);
              if (Ut.isMountpoint(r)) throw new Ut.ErrnoError(10);
              try {
                Ut.trackingDelegate.willDeletePath &&
                  Ut.trackingDelegate.willDeletePath(t);
              } catch (e) {
                v(
                  "FS.trackingDelegate['willDeletePath']('" +
                    t +
                    "') threw an exception: " +
                    e.message
                );
              }
              (e.node_ops.rmdir(e, n), Ut.destroyNode(r));
              try {
                Ut.trackingDelegate.onDeletePath &&
                  Ut.trackingDelegate.onDeletePath(t);
              } catch (e) {
                v(
                  "FS.trackingDelegate['onDeletePath']('" +
                    t +
                    "') threw an exception: " +
                    e.message
                );
              }
            },
            readdir: function (t) {
              var e = Ut.lookupPath(t, { follow: !0 }).node;
              if (!e.node_ops.readdir) throw new Ut.ErrnoError(54);
              return e.node_ops.readdir(e);
            },
            unlink: function (t) {
              var e = Ut.lookupPath(t, { parent: !0 }).node,
                n = Nt.basename(t),
                r = Ut.lookupNode(e, n),
                i = Ut.mayDelete(e, n, !1);
              if (i) throw new Ut.ErrnoError(i);
              if (!e.node_ops.unlink) throw new Ut.ErrnoError(63);
              if (Ut.isMountpoint(r)) throw new Ut.ErrnoError(10);
              try {
                Ut.trackingDelegate.willDeletePath &&
                  Ut.trackingDelegate.willDeletePath(t);
              } catch (e) {
                v(
                  "FS.trackingDelegate['willDeletePath']('" +
                    t +
                    "') threw an exception: " +
                    e.message
                );
              }
              (e.node_ops.unlink(e, n), Ut.destroyNode(r));
              try {
                Ut.trackingDelegate.onDeletePath &&
                  Ut.trackingDelegate.onDeletePath(t);
              } catch (e) {
                v(
                  "FS.trackingDelegate['onDeletePath']('" +
                    t +
                    "') threw an exception: " +
                    e.message
                );
              }
            },
            readlink: function (t) {
              var e = Ut.lookupPath(t).node;
              if (!e) throw new Ut.ErrnoError(44);
              if (!e.node_ops.readlink) throw new Ut.ErrnoError(28);
              return It.resolve(Ut.getPath(e.parent), e.node_ops.readlink(e));
            },
            stat: function (t, e) {
              var n = Ut.lookupPath(t, { follow: !e }).node;
              if (!n) throw new Ut.ErrnoError(44);
              if (!n.node_ops.getattr) throw new Ut.ErrnoError(63);
              return n.node_ops.getattr(n);
            },
            lstat: function (t) {
              return Ut.stat(t, !0);
            },
            chmod: function (t, e, n) {
              var r;
              if (
                !(r =
                  'string' == typeof t
                    ? Ut.lookupPath(t, { follow: !n }).node
                    : t).node_ops.setattr
              )
                throw new Ut.ErrnoError(63);
              r.node_ops.setattr(r, {
                mode: (4095 & e) | (-4096 & r.mode),
                timestamp: Date.now(),
              });
            },
            lchmod: function (t, e) {
              Ut.chmod(t, e, !0);
            },
            fchmod: function (t, e) {
              var n = Ut.getStream(t);
              if (!n) throw new Ut.ErrnoError(8);
              Ut.chmod(n.node, e);
            },
            chown: function (t, e, n, r) {
              var i;
              if (
                !(i =
                  'string' == typeof t
                    ? Ut.lookupPath(t, { follow: !r }).node
                    : t).node_ops.setattr
              )
                throw new Ut.ErrnoError(63);
              i.node_ops.setattr(i, { timestamp: Date.now() });
            },
            lchown: function (t, e, n) {
              Ut.chown(t, e, n, !0);
            },
            fchown: function (t, e, n) {
              var r = Ut.getStream(t);
              if (!r) throw new Ut.ErrnoError(8);
              Ut.chown(r.node, e, n);
            },
            truncate: function (t, e) {
              if (e < 0) throw new Ut.ErrnoError(28);
              var n;
              if (
                !(n =
                  'string' == typeof t
                    ? Ut.lookupPath(t, { follow: !0 }).node
                    : t).node_ops.setattr
              )
                throw new Ut.ErrnoError(63);
              if (Ut.isDir(n.mode)) throw new Ut.ErrnoError(31);
              if (!Ut.isFile(n.mode)) throw new Ut.ErrnoError(28);
              var r = Ut.nodePermissions(n, 'w');
              if (r) throw new Ut.ErrnoError(r);
              n.node_ops.setattr(n, { size: e, timestamp: Date.now() });
            },
            ftruncate: function (t, e) {
              var n = Ut.getStream(t);
              if (!n) throw new Ut.ErrnoError(8);
              if (!(2097155 & n.flags)) throw new Ut.ErrnoError(28);
              Ut.truncate(n.node, e);
            },
            utime: function (t, e, n) {
              var r = Ut.lookupPath(t, { follow: !0 }).node;
              r.node_ops.setattr(r, { timestamp: Math.max(e, n) });
            },
            open: function (t, e, n, r, i) {
              if ('' === t) throw new Ut.ErrnoError(44);
              var o;
              if (
                ((n = void 0 === n ? 438 : n),
                (n =
                  64 & (e = 'string' == typeof e ? Ut.modeStringToFlags(e) : e)
                    ? (4095 & n) | 32768
                    : 0),
                'object' == typeof t)
              )
                o = t;
              else {
                t = Nt.normalize(t);
                try {
                  o = Ut.lookupPath(t, { follow: !(131072 & e) }).node;
                } catch (t) {}
              }
              var a = !1;
              if (64 & e)
                if (o) {
                  if (128 & e) throw new Ut.ErrnoError(20);
                } else ((o = Ut.mknod(t, n, 0)), (a = !0));
              if (!o) throw new Ut.ErrnoError(44);
              if (
                (Ut.isChrdev(o.mode) && (e &= -513),
                65536 & e && !Ut.isDir(o.mode))
              )
                throw new Ut.ErrnoError(54);
              if (!a) {
                var u = Ut.mayOpen(o, e);
                if (u) throw new Ut.ErrnoError(u);
              }
              (512 & e && Ut.truncate(o, 0), (e &= -131713));
              var c = Ut.createStream(
                {
                  node: o,
                  path: Ut.getPath(o),
                  flags: e,
                  seekable: !0,
                  position: 0,
                  stream_ops: o.stream_ops,
                  ungotten: [],
                  error: !1,
                },
                r,
                i
              );
              (c.stream_ops.open && c.stream_ops.open(c),
                !s.logReadFiles ||
                  1 & e ||
                  (Ut.readFiles || (Ut.readFiles = {}),
                  t in Ut.readFiles ||
                    ((Ut.readFiles[t] = 1),
                    v('FS.trackingDelegate error on read file: ' + t))));
              try {
                if (Ut.trackingDelegate.onOpenFile) {
                  var l = 0;
                  (1 != (2097155 & e) && (l |= Ut.tracking.openFlags.READ),
                    2097155 & e && (l |= Ut.tracking.openFlags.WRITE),
                    Ut.trackingDelegate.onOpenFile(t, l));
                }
              } catch (e) {
                v(
                  "FS.trackingDelegate['onOpenFile']('" +
                    t +
                    "', flags) threw an exception: " +
                    e.message
                );
              }
              return c;
            },
            close: function (t) {
              if (Ut.isClosed(t)) throw new Ut.ErrnoError(8);
              t.getdents && (t.getdents = null);
              try {
                t.stream_ops.close && t.stream_ops.close(t);
              } catch (t) {
                throw t;
              } finally {
                Ut.closeStream(t.fd);
              }
              t.fd = null;
            },
            isClosed: function (t) {
              return null === t.fd;
            },
            llseek: function (t, e, n) {
              if (Ut.isClosed(t)) throw new Ut.ErrnoError(8);
              if (!t.seekable || !t.stream_ops.llseek)
                throw new Ut.ErrnoError(70);
              if (0 != n && 1 != n && 2 != n) throw new Ut.ErrnoError(28);
              return (
                (t.position = t.stream_ops.llseek(t, e, n)),
                (t.ungotten = []),
                t.position
              );
            },
            read: function (t, e, n, r, i) {
              if (r < 0 || i < 0) throw new Ut.ErrnoError(28);
              if (Ut.isClosed(t)) throw new Ut.ErrnoError(8);
              if (1 == (2097155 & t.flags)) throw new Ut.ErrnoError(8);
              if (Ut.isDir(t.node.mode)) throw new Ut.ErrnoError(31);
              if (!t.stream_ops.read) throw new Ut.ErrnoError(28);
              var o = void 0 !== i;
              if (o) {
                if (!t.seekable) throw new Ut.ErrnoError(70);
              } else i = t.position;
              var a = t.stream_ops.read(t, e, n, r, i);
              return (o || (t.position += a), a);
            },
            write: function (t, e, n, r, i, o) {
              if (r < 0 || i < 0) throw new Ut.ErrnoError(28);
              if (Ut.isClosed(t)) throw new Ut.ErrnoError(8);
              if (!(2097155 & t.flags)) throw new Ut.ErrnoError(8);
              if (Ut.isDir(t.node.mode)) throw new Ut.ErrnoError(31);
              if (!t.stream_ops.write) throw new Ut.ErrnoError(28);
              t.seekable && 1024 & t.flags && Ut.llseek(t, 0, 2);
              var a = void 0 !== i;
              if (a) {
                if (!t.seekable) throw new Ut.ErrnoError(70);
              } else i = t.position;
              var s = t.stream_ops.write(t, e, n, r, i, o);
              a || (t.position += s);
              try {
                t.path &&
                  Ut.trackingDelegate.onWriteToFile &&
                  Ut.trackingDelegate.onWriteToFile(t.path);
              } catch (e) {
                v(
                  "FS.trackingDelegate['onWriteToFile']('" +
                    t.path +
                    "') threw an exception: " +
                    e.message
                );
              }
              return s;
            },
            allocate: function (t, e, n) {
              if (Ut.isClosed(t)) throw new Ut.ErrnoError(8);
              if (e < 0 || n <= 0) throw new Ut.ErrnoError(28);
              if (!(2097155 & t.flags)) throw new Ut.ErrnoError(8);
              if (!Ut.isFile(t.node.mode) && !Ut.isDir(t.node.mode))
                throw new Ut.ErrnoError(43);
              if (!t.stream_ops.allocate) throw new Ut.ErrnoError(138);
              t.stream_ops.allocate(t, e, n);
            },
            mmap: function (t, e, n, r, i, o) {
              if (2 & i && !(2 & o) && 2 != (2097155 & t.flags))
                throw new Ut.ErrnoError(2);
              if (1 == (2097155 & t.flags)) throw new Ut.ErrnoError(2);
              if (!t.stream_ops.mmap) throw new Ut.ErrnoError(43);
              return t.stream_ops.mmap(t, e, n, r, i, o);
            },
            msync: function (t, e, n, r, i) {
              return t && t.stream_ops.msync
                ? t.stream_ops.msync(t, e, n, r, i)
                : 0;
            },
            munmap: function (t) {
              return 0;
            },
            ioctl: function (t, e, n) {
              if (!t.stream_ops.ioctl) throw new Ut.ErrnoError(59);
              return t.stream_ops.ioctl(t, e, n);
            },
            readFile: function (t, e) {
              if (
                (((e = e || {}).flags = e.flags || 'r'),
                (e.encoding = e.encoding || 'binary'),
                'utf8' !== e.encoding && 'binary' !== e.encoding)
              )
                throw new Error('Invalid encoding type "' + e.encoding + '"');
              var n,
                r = Ut.open(t, e.flags),
                i = Ut.stat(t).size,
                o = new Uint8Array(i);
              return (
                Ut.read(r, o, 0, i, 0),
                'utf8' === e.encoding
                  ? (n = x(o, 0))
                  : 'binary' === e.encoding && (n = o),
                Ut.close(r),
                n
              );
            },
            writeFile: function (t, e, n) {
              (n = n || {}).flags = n.flags || 'w';
              var r = Ut.open(t, n.flags, n.mode);
              if ('string' == typeof e) {
                var i = new Uint8Array(W(e) + 1),
                  o = H(e, i, 0, i.length);
                Ut.write(r, i, 0, o, void 0, n.canOwn);
              } else {
                if (!ArrayBuffer.isView(e))
                  throw new Error('Unsupported data type');
                Ut.write(r, e, 0, e.byteLength, void 0, n.canOwn);
              }
              Ut.close(r);
            },
            cwd: function () {
              return Ut.currentPath;
            },
            chdir: function (t) {
              var e = Ut.lookupPath(t, { follow: !0 });
              if (null === e.node) throw new Ut.ErrnoError(44);
              if (!Ut.isDir(e.node.mode)) throw new Ut.ErrnoError(54);
              var n = Ut.nodePermissions(e.node, 'x');
              if (n) throw new Ut.ErrnoError(n);
              Ut.currentPath = e.path;
            },
            createDefaultDirectories: function () {
              (Ut.mkdir('/tmp'), Ut.mkdir('/home'), Ut.mkdir('/home/web_user'));
            },
            createDefaultDevices: function () {
              var t;
              if (
                (Ut.mkdir('/dev'),
                Ut.registerDevice(Ut.makedev(1, 3), {
                  read: function () {
                    return 0;
                  },
                  write: function (t, e, n, r, i) {
                    return r;
                  },
                }),
                Ut.mkdev('/dev/null', Ut.makedev(1, 3)),
                Pt.register(Ut.makedev(5, 0), Pt.default_tty_ops),
                Pt.register(Ut.makedev(6, 0), Pt.default_tty1_ops),
                Ut.mkdev('/dev/tty', Ut.makedev(5, 0)),
                Ut.mkdev('/dev/tty1', Ut.makedev(6, 0)),
                'object' == typeof crypto &&
                  'function' == typeof crypto.getRandomValues)
              ) {
                var e = new Uint8Array(1);
                t = function () {
                  return (crypto.getRandomValues(e), e[0]);
                };
              }
              (t ||
                (t = function () {
                  ct('random_device');
                }),
                Ut.createDevice('/dev', 'random', t),
                Ut.createDevice('/dev', 'urandom', t),
                Ut.mkdir('/dev/shm'),
                Ut.mkdir('/dev/shm/tmp'));
            },
            createSpecialDirectories: function () {
              (Ut.mkdir('/proc'),
                Ut.mkdir('/proc/self'),
                Ut.mkdir('/proc/self/fd'),
                Ut.mount(
                  {
                    mount: function () {
                      var t = Ut.createNode('/proc/self', 'fd', 16895, 73);
                      return (
                        (t.node_ops = {
                          lookup: function (t, e) {
                            var n = +e,
                              r = Ut.getStream(n);
                            if (!r) throw new Ut.ErrnoError(8);
                            var i = {
                              parent: null,
                              mount: { mountpoint: 'fake' },
                              node_ops: {
                                readlink: function () {
                                  return r.path;
                                },
                              },
                            };
                            return ((i.parent = i), i);
                          },
                        }),
                        t
                      );
                    },
                  },
                  {},
                  '/proc/self/fd'
                ));
            },
            createStandardStreams: function () {
              (s.stdin
                ? Ut.createDevice('/dev', 'stdin', s.stdin)
                : Ut.symlink('/dev/tty', '/dev/stdin'),
                s.stdout
                  ? Ut.createDevice('/dev', 'stdout', null, s.stdout)
                  : Ut.symlink('/dev/tty', '/dev/stdout'),
                s.stderr
                  ? Ut.createDevice('/dev', 'stderr', null, s.stderr)
                  : Ut.symlink('/dev/tty1', '/dev/stderr'),
                Ut.open('/dev/stdin', 'r'),
                Ut.open('/dev/stdout', 'w'),
                Ut.open('/dev/stderr', 'w'));
            },
            ensureErrnoError: function () {
              Ut.ErrnoError ||
                ((Ut.ErrnoError = function (t, e) {
                  ((this.node = e),
                    (this.setErrno = function (t) {
                      this.errno = t;
                    }),
                    this.setErrno(t),
                    (this.message = 'FS error'));
                }),
                (Ut.ErrnoError.prototype = new Error()),
                (Ut.ErrnoError.prototype.constructor = Ut.ErrnoError),
                [44].forEach(function (t) {
                  ((Ut.genericErrors[t] = new Ut.ErrnoError(t)),
                    (Ut.genericErrors[t].stack = '<generic error, no stack>'));
                }));
            },
            staticInit: function () {
              (Ut.ensureErrnoError(),
                (Ut.nameTable = new Array(4096)),
                Ut.mount(Bt, {}, '/'),
                Ut.createDefaultDirectories(),
                Ut.createDefaultDevices(),
                Ut.createSpecialDirectories(),
                (Ut.filesystems = { MEMFS: Bt }));
            },
            init: function (t, e, n) {
              ((Ut.init.initialized = !0),
                Ut.ensureErrnoError(),
                (s.stdin = t || s.stdin),
                (s.stdout = e || s.stdout),
                (s.stderr = n || s.stderr),
                Ut.createStandardStreams());
            },
            quit: function () {
              Ut.init.initialized = !1;
              var t = s._fflush;
              t && t(0);
              for (var e = 0; e < Ut.streams.length; e++) {
                var n = Ut.streams[e];
                n && Ut.close(n);
              }
            },
            getMode: function (t, e) {
              var n = 0;
              return (t && (n |= 365), e && (n |= 146), n);
            },
            joinPath: function (t, e) {
              var n = Nt.join.apply(null, t);
              return (e && '/' == n[0] && (n = n.substr(1)), n);
            },
            absolutePath: function (t, e) {
              return It.resolve(e, t);
            },
            standardizePath: function (t) {
              return Nt.normalize(t);
            },
            findObject: function (t, e) {
              var n = Ut.analyzePath(t, e);
              return n.exists ? n.object : (yt(n.error), null);
            },
            analyzePath: function (t, e) {
              try {
                t = (r = Ut.lookupPath(t, { follow: !e })).path;
              } catch (t) {}
              var n = {
                isRoot: !1,
                exists: !1,
                error: 0,
                name: null,
                path: null,
                object: null,
                parentExists: !1,
                parentPath: null,
                parentObject: null,
              };
              try {
                var r = Ut.lookupPath(t, { parent: !0 });
                ((n.parentExists = !0),
                  (n.parentPath = r.path),
                  (n.parentObject = r.node),
                  (n.name = Nt.basename(t)),
                  (r = Ut.lookupPath(t, { follow: !e })),
                  (n.exists = !0),
                  (n.path = r.path),
                  (n.object = r.node),
                  (n.name = r.node.name),
                  (n.isRoot = '/' === r.path));
              } catch (t) {
                n.error = t.errno;
              }
              return n;
            },
            createFolder: function (t, e, n, r) {
              var i = Nt.join2('string' == typeof t ? t : Ut.getPath(t), e),
                o = Ut.getMode(n, r);
              return Ut.mkdir(i, o);
            },
            createPath: function (t, e, n, r) {
              t = 'string' == typeof t ? t : Ut.getPath(t);
              for (var i = e.split('/').reverse(); i.length; ) {
                var o = i.pop();
                if (o) {
                  var a = Nt.join2(t, o);
                  try {
                    Ut.mkdir(a);
                  } catch (t) {}
                  t = a;
                }
              }
              return a;
            },
            createFile: function (t, e, n, r, i) {
              var o = Nt.join2('string' == typeof t ? t : Ut.getPath(t), e),
                a = Ut.getMode(r, i);
              return Ut.create(o, a);
            },
            createDataFile: function (t, e, n, r, i, o) {
              var a = e
                  ? Nt.join2('string' == typeof t ? t : Ut.getPath(t), e)
                  : t,
                s = Ut.getMode(r, i),
                u = Ut.create(a, s);
              if (n) {
                if ('string' == typeof n) {
                  for (
                    var c = new Array(n.length), l = 0, f = n.length;
                    l < f;
                    ++l
                  )
                    c[l] = n.charCodeAt(l);
                  n = c;
                }
                Ut.chmod(u, 146 | s);
                var h = Ut.open(u, 'w');
                (Ut.write(h, n, 0, n.length, 0, o),
                  Ut.close(h),
                  Ut.chmod(u, s));
              }
              return u;
            },
            createDevice: function (t, e, n, r) {
              var i = Nt.join2('string' == typeof t ? t : Ut.getPath(t), e),
                o = Ut.getMode(!!n, !!r);
              Ut.createDevice.major || (Ut.createDevice.major = 64);
              var a = Ut.makedev(Ut.createDevice.major++, 0);
              return (
                Ut.registerDevice(a, {
                  open: function (t) {
                    t.seekable = !1;
                  },
                  close: function (t) {
                    r && r.buffer && r.buffer.length && r(10);
                  },
                  read: function (t, e, r, i, o) {
                    for (var a = 0, s = 0; s < i; s++) {
                      var u;
                      try {
                        u = n();
                      } catch (t) {
                        throw new Ut.ErrnoError(29);
                      }
                      if (void 0 === u && 0 === a) throw new Ut.ErrnoError(6);
                      if (null == u) break;
                      (a++, (e[r + s] = u));
                    }
                    return (a && (t.node.timestamp = Date.now()), a);
                  },
                  write: function (t, e, n, i, o) {
                    for (var a = 0; a < i; a++)
                      try {
                        r(e[n + a]);
                      } catch (t) {
                        throw new Ut.ErrnoError(29);
                      }
                    return (i && (t.node.timestamp = Date.now()), a);
                  },
                }),
                Ut.mkdev(i, o, a)
              );
            },
            createLink: function (t, e, n, r, i) {
              var o = Nt.join2('string' == typeof t ? t : Ut.getPath(t), e);
              return Ut.symlink(n, o);
            },
            forceLoadFile: function (t) {
              if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
              var e = !0;
              if ('undefined' != typeof XMLHttpRequest)
                throw new Error(
                  'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
                );
              if (!l)
                throw new Error(
                  'Cannot load without read() or XMLHttpRequest.'
                );
              try {
                ((t.contents = te(l(t.url), !0)),
                  (t.usedBytes = t.contents.length));
              } catch (t) {
                e = !1;
              }
              return (e || yt(29), e);
            },
            createLazyFile: function (t, e, n, r, i) {
              function o() {
                ((this.lengthKnown = !1), (this.chunks = []));
              }
              if (
                ((o.prototype.get = function (t) {
                  if (!(t > this.length - 1 || t < 0)) {
                    var e = t % this.chunkSize,
                      n = (t / this.chunkSize) | 0;
                    return this.getter(n)[e];
                  }
                }),
                (o.prototype.setDataGetter = function (t) {
                  this.getter = t;
                }),
                (o.prototype.cacheLength = function () {
                  var t = new XMLHttpRequest();
                  if (
                    (t.open('HEAD', n, !1),
                    t.send(null),
                    !((t.status >= 200 && t.status < 300) || 304 === t.status))
                  )
                    throw new Error(
                      "Couldn't load " + n + '. Status: ' + t.status
                    );
                  var e,
                    r = Number(t.getResponseHeader('Content-length')),
                    i =
                      (e = t.getResponseHeader('Accept-Ranges')) &&
                      'bytes' === e,
                    o =
                      (e = t.getResponseHeader('Content-Encoding')) &&
                      'gzip' === e,
                    a = 1048576;
                  i || (a = r);
                  var s = this;
                  (s.setDataGetter(function (t) {
                    var e = t * a,
                      i = (t + 1) * a - 1;
                    if (
                      ((i = Math.min(i, r - 1)),
                      void 0 === s.chunks[t] &&
                        (s.chunks[t] = (function (t, e) {
                          if (t > e)
                            throw new Error(
                              'invalid range (' +
                                t +
                                ', ' +
                                e +
                                ') or no bytes requested!'
                            );
                          if (e > r - 1)
                            throw new Error(
                              'only ' +
                                r +
                                ' bytes available! programmer error!'
                            );
                          var i = new XMLHttpRequest();
                          if (
                            (i.open('GET', n, !1),
                            r !== a &&
                              i.setRequestHeader(
                                'Range',
                                'bytes=' + t + '-' + e
                              ),
                            'undefined' != typeof Uint8Array &&
                              (i.responseType = 'arraybuffer'),
                            i.overrideMimeType &&
                              i.overrideMimeType(
                                'text/plain; charset=x-user-defined'
                              ),
                            i.send(null),
                            !(
                              (i.status >= 200 && i.status < 300) ||
                              304 === i.status
                            ))
                          )
                            throw new Error(
                              "Couldn't load " + n + '. Status: ' + i.status
                            );
                          return void 0 !== i.response
                            ? new Uint8Array(i.response || [])
                            : te(i.responseText || '', !0);
                        })(e, i)),
                      void 0 === s.chunks[t])
                    )
                      throw new Error('doXHR failed!');
                    return s.chunks[t];
                  }),
                    (!o && r) ||
                      ((a = r = 1),
                      (r = this.getter(0).length),
                      (a = r),
                      g(
                        'LazyFiles on gzip forces download of the whole file when length is accessed'
                      )),
                    (this._length = r),
                    (this._chunkSize = a),
                    (this.lengthKnown = !0));
                }),
                'undefined' != typeof XMLHttpRequest)
              ) {
                0;
                var a = new o();
                Object.defineProperties(a, {
                  length: {
                    get: function () {
                      return (
                        this.lengthKnown || this.cacheLength(),
                        this._length
                      );
                    },
                  },
                  chunkSize: {
                    get: function () {
                      return (
                        this.lengthKnown || this.cacheLength(),
                        this._chunkSize
                      );
                    },
                  },
                });
                var s = { isDevice: !1, contents: a };
              } else s = { isDevice: !1, url: n };
              var u = Ut.createFile(t, e, s, r, i);
              (s.contents
                ? (u.contents = s.contents)
                : s.url && ((u.contents = null), (u.url = s.url)),
                Object.defineProperties(u, {
                  usedBytes: {
                    get: function () {
                      return this.contents.length;
                    },
                  },
                }));
              var c = {};
              return (
                Object.keys(u.stream_ops).forEach(function (t) {
                  var e = u.stream_ops[t];
                  c[t] = function () {
                    if (!Ut.forceLoadFile(u)) throw new Ut.ErrnoError(29);
                    return e.apply(null, arguments);
                  };
                }),
                (c.read = function (t, e, n, r, i) {
                  if (!Ut.forceLoadFile(u)) throw new Ut.ErrnoError(29);
                  var o = t.node.contents;
                  if (i >= o.length) return 0;
                  var a = Math.min(o.length - i, r);
                  if (o.slice) for (var s = 0; s < a; s++) e[n + s] = o[i + s];
                  else for (s = 0; s < a; s++) e[n + s] = o.get(i + s);
                  return a;
                }),
                (u.stream_ops = c),
                u
              );
            },
            createPreloadedFile: function (t, e, n, r, i, o, a, u, c, l) {
              vt.init();
              var f = e ? It.resolve(Nt.join2(t, e)) : t;
              function h(n) {
                function h(n) {
                  (l && l(),
                    u || Ut.createDataFile(t, e, n, r, i, c),
                    o && o(),
                    ut());
                }
                var d = !1;
                (s.preloadPlugins.forEach(function (t) {
                  d ||
                    (t.canHandle(f) &&
                      (t.handle(n, f, h, function () {
                        (a && a(), ut());
                      }),
                      (d = !0)));
                }),
                  d || h(n));
              }
              (st(),
                'string' == typeof n
                  ? vt.asyncLoad(
                      n,
                      function (t) {
                        h(t);
                      },
                      a
                    )
                  : h(n));
            },
            indexedDB: function () {
              return (
                tn.indexedDB ||
                tn.mozIndexedDB ||
                tn.webkitIndexedDB ||
                tn.msIndexedDB
              );
            },
            DB_NAME: function () {
              return 'EM_FS_' + tn.location.pathname;
            },
            DB_VERSION: 20,
            DB_STORE_NAME: 'FILE_DATA',
            saveFilesToDB: function (t, e, n) {
              ((e = e || function () {}), (n = n || function () {}));
              var r = Ut.indexedDB();
              try {
                var i = r.open(Ut.DB_NAME(), Ut.DB_VERSION);
              } catch (t) {
                return n(t);
              }
              ((i.onupgradeneeded = function () {
                (g('creating db'),
                  i.result.createObjectStore(Ut.DB_STORE_NAME));
              }),
                (i.onsuccess = function () {
                  var r = i.result.transaction([Ut.DB_STORE_NAME], 'readwrite'),
                    o = r.objectStore(Ut.DB_STORE_NAME),
                    a = 0,
                    s = 0,
                    u = t.length;
                  function c() {
                    0 == s ? e() : n();
                  }
                  (t.forEach(function (t) {
                    var e = o.put(Ut.analyzePath(t).object.contents, t);
                    ((e.onsuccess = function () {
                      ++a + s == u && c();
                    }),
                      (e.onerror = function () {
                        (s++, a + s == u && c());
                      }));
                  }),
                    (r.onerror = n));
                }),
                (i.onerror = n));
            },
            loadFilesFromDB: function (t, e, n) {
              ((e = e || function () {}), (n = n || function () {}));
              var r = Ut.indexedDB();
              try {
                var i = r.open(Ut.DB_NAME(), Ut.DB_VERSION);
              } catch (t) {
                return n(t);
              }
              ((i.onupgradeneeded = n),
                (i.onsuccess = function () {
                  var r = i.result;
                  try {
                    var o = r.transaction([Ut.DB_STORE_NAME], 'readonly');
                  } catch (t) {
                    return void n(t);
                  }
                  var a = o.objectStore(Ut.DB_STORE_NAME),
                    s = 0,
                    u = 0,
                    c = t.length;
                  function l() {
                    0 == u ? e() : n();
                  }
                  (t.forEach(function (t) {
                    var e = a.get(t);
                    ((e.onsuccess = function () {
                      (Ut.analyzePath(t).exists && Ut.unlink(t),
                        Ut.createDataFile(
                          Nt.dirname(t),
                          Nt.basename(t),
                          e.result,
                          !0,
                          !0,
                          !0
                        ),
                        ++s + u == c && l());
                    }),
                      (e.onerror = function () {
                        (u++, s + u == c && l());
                      }));
                  }),
                    (o.onerror = n));
                }),
                (i.onerror = n));
            },
            mmapAlloc: function (t) {
              for (
                var e = (function (t, e) {
                    return (e || (e = 16), Math.ceil(t / e) * e);
                  })(t, 16384),
                  n = ue(e);
                t < e;

              )
                D[n + t++] = 0;
              return n;
            },
          },
          xt = {
            mappings: {},
            DEFAULT_POLLMASK: 5,
            umask: 511,
            calculateAt: function (t, e) {
              if ('/' !== e[0]) {
                var n;
                if (-100 === t) n = Ut.cwd();
                else {
                  var r = Ut.getStream(t);
                  if (!r) throw new Ut.ErrnoError(8);
                  n = r.path;
                }
                e = Nt.join2(n, e);
              }
              return e;
            },
            doStat: function (t, e, n) {
              try {
                var r = t(e);
              } catch (t) {
                if (
                  t &&
                  t.node &&
                  Nt.normalize(e) !== Nt.normalize(Ut.getPath(t.node))
                )
                  return -54;
                throw t;
              }
              return (
                (N[n >> 2] = r.dev),
                (N[(n + 4) >> 2] = 0),
                (N[(n + 8) >> 2] = r.ino),
                (N[(n + 12) >> 2] = r.mode),
                (N[(n + 16) >> 2] = r.nlink),
                (N[(n + 20) >> 2] = r.uid),
                (N[(n + 24) >> 2] = r.gid),
                (N[(n + 28) >> 2] = r.rdev),
                (N[(n + 32) >> 2] = 0),
                (dt = [
                  r.size >>> 0,
                  ((ht = r.size),
                  +tt(ht) >= 1
                    ? ht > 0
                      ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                      : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (N[(n + 40) >> 2] = dt[0]),
                (N[(n + 44) >> 2] = dt[1]),
                (N[(n + 48) >> 2] = 4096),
                (N[(n + 52) >> 2] = r.blocks),
                (N[(n + 56) >> 2] = (r.atime.getTime() / 1e3) | 0),
                (N[(n + 60) >> 2] = 0),
                (N[(n + 64) >> 2] = (r.mtime.getTime() / 1e3) | 0),
                (N[(n + 68) >> 2] = 0),
                (N[(n + 72) >> 2] = (r.ctime.getTime() / 1e3) | 0),
                (N[(n + 76) >> 2] = 0),
                (dt = [
                  r.ino >>> 0,
                  ((ht = r.ino),
                  +tt(ht) >= 1
                    ? ht > 0
                      ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                      : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (N[(n + 80) >> 2] = dt[0]),
                (N[(n + 84) >> 2] = dt[1]),
                0
              );
            },
            doMsync: function (t, e, n, r, i) {
              var o = j.slice(t, t + n);
              Ut.msync(e, o, i, n, r);
            },
            doMkdir: function (t, e) {
              return (
                '/' === (t = Nt.normalize(t))[t.length - 1] &&
                  (t = t.substr(0, t.length - 1)),
                Ut.mkdir(t, e, 0),
                0
              );
            },
            doMknod: function (t, e, n) {
              switch (61440 & e) {
                case 32768:
                case 8192:
                case 24576:
                case 4096:
                case 49152:
                  break;
                default:
                  return -28;
              }
              return (Ut.mknod(t, e, n), 0);
            },
            doReadlink: function (t, e, n) {
              if (n <= 0) return -28;
              var r = Ut.readlink(t),
                i = Math.min(n, W(r)),
                o = D[e + i];
              return (X(r, e, n + 1), (D[e + i] = o), i);
            },
            doAccess: function (t, e) {
              if (-8 & e) return -28;
              var n;
              if (!(n = Ut.lookupPath(t, { follow: !0 }).node)) return -44;
              var r = '';
              return (
                4 & e && (r += 'r'),
                2 & e && (r += 'w'),
                1 & e && (r += 'x'),
                r && Ut.nodePermissions(n, r) ? -2 : 0
              );
            },
            doDup: function (t, e, n) {
              var r = Ut.getStream(n);
              return (r && Ut.close(r), Ut.open(t, e, 0, n, n).fd);
            },
            doReadv: function (t, e, n, r) {
              for (var i = 0, o = 0; o < n; o++) {
                var a = N[(e + 8 * o) >> 2],
                  s = N[(e + (8 * o + 4)) >> 2],
                  u = Ut.read(t, D, a, s, r);
                if (u < 0) return -1;
                if (((i += u), u < s)) break;
              }
              return i;
            },
            doWritev: function (t, e, n, r) {
              for (var i = 0, o = 0; o < n; o++) {
                var a = N[(e + 8 * o) >> 2],
                  s = N[(e + (8 * o + 4)) >> 2],
                  u = Ut.write(t, D, a, s, r);
                if (u < 0) return -1;
                i += u;
              }
              return i;
            },
            varargs: void 0,
            get: function () {
              return ((xt.varargs += 4), N[(xt.varargs - 4) >> 2]);
            },
            getStr: function (t) {
              return G(t);
            },
            getStreamFromFD: function (t) {
              var e = Ut.getStream(t);
              if (!e) throw new Ut.ErrnoError(8);
              return e;
            },
            get64: function (t, e) {
              return t;
            },
          };
        var Gt = {
            BUCKET_BUFFER_SIZE: 8192,
            mount: function (t) {
              return Ut.createNode(null, '/', 16895, 0);
            },
            createPipe: function () {
              var t = { buckets: [] };
              t.buckets.push({
                buffer: new Uint8Array(Gt.BUCKET_BUFFER_SIZE),
                offset: 0,
                roffset: 0,
              });
              var e = Gt.nextname(),
                n = Gt.nextname(),
                r = Ut.createNode(Gt.root, e, 4096, 0),
                i = Ut.createNode(Gt.root, n, 4096, 0);
              ((r.pipe = t), (i.pipe = t));
              var o = Ut.createStream({
                path: e,
                node: r,
                flags: Ut.modeStringToFlags('r'),
                seekable: !1,
                stream_ops: Gt.stream_ops,
              });
              r.stream = o;
              var a = Ut.createStream({
                path: n,
                node: i,
                flags: Ut.modeStringToFlags('w'),
                seekable: !1,
                stream_ops: Gt.stream_ops,
              });
              return ((i.stream = a), { readable_fd: o.fd, writable_fd: a.fd });
            },
            stream_ops: {
              poll: function (t) {
                var e = t.node.pipe;
                if (1 == (2097155 & t.flags)) return 260;
                if (e.buckets.length > 0)
                  for (var n = 0; n < e.buckets.length; n++) {
                    var r = e.buckets[n];
                    if (r.offset - r.roffset > 0) return 65;
                  }
                return 0;
              },
              ioctl: function (t, e, n) {
                return 28;
              },
              fsync: function (t) {
                return 28;
              },
              read: function (t, e, n, r, i) {
                for (
                  var o = t.node.pipe, a = 0, s = 0;
                  s < o.buckets.length;
                  s++
                ) {
                  var u = o.buckets[s];
                  a += u.offset - u.roffset;
                }
                S(e instanceof ArrayBuffer || ArrayBuffer.isView(e));
                var c = e.subarray(n, n + r);
                if (r <= 0) return 0;
                if (0 == a) throw new Ut.ErrnoError(6);
                var l = Math.min(a, r),
                  f = l,
                  h = 0;
                for (s = 0; s < o.buckets.length; s++) {
                  var d = o.buckets[s],
                    p = d.offset - d.roffset;
                  if (l <= p) {
                    var _ = d.buffer.subarray(d.roffset, d.offset);
                    (l < p ? ((_ = _.subarray(0, l)), (d.roffset += l)) : h++,
                      c.set(_));
                    break;
                  }
                  ((_ = d.buffer.subarray(d.roffset, d.offset)),
                    c.set(_),
                    (c = c.subarray(_.byteLength)),
                    (l -= _.byteLength),
                    h++);
                }
                return (
                  h &&
                    h == o.buckets.length &&
                    (h--,
                    (o.buckets[h].offset = 0),
                    (o.buckets[h].roffset = 0)),
                  o.buckets.splice(0, h),
                  f
                );
              },
              write: function (t, e, n, r, i) {
                var o = t.node.pipe;
                S(e instanceof ArrayBuffer || ArrayBuffer.isView(e));
                var a = e.subarray(n, n + r),
                  s = a.byteLength;
                if (s <= 0) return 0;
                var u = null;
                (0 == o.buckets.length
                  ? ((u = {
                      buffer: new Uint8Array(Gt.BUCKET_BUFFER_SIZE),
                      offset: 0,
                      roffset: 0,
                    }),
                    o.buckets.push(u))
                  : (u = o.buckets[o.buckets.length - 1]),
                  S(u.offset <= Gt.BUCKET_BUFFER_SIZE));
                var c = Gt.BUCKET_BUFFER_SIZE - u.offset;
                if (c >= s)
                  return (u.buffer.set(a, u.offset), (u.offset += s), s);
                c > 0 &&
                  (u.buffer.set(a.subarray(0, c), u.offset),
                  (u.offset += c),
                  (a = a.subarray(c, a.byteLength)));
                for (
                  var l = (a.byteLength / Gt.BUCKET_BUFFER_SIZE) | 0,
                    f = a.byteLength % Gt.BUCKET_BUFFER_SIZE,
                    h = 0;
                  h < l;
                  h++
                ) {
                  var d = {
                    buffer: new Uint8Array(Gt.BUCKET_BUFFER_SIZE),
                    offset: Gt.BUCKET_BUFFER_SIZE,
                    roffset: 0,
                  };
                  (o.buckets.push(d),
                    d.buffer.set(a.subarray(0, Gt.BUCKET_BUFFER_SIZE)),
                    (a = a.subarray(Gt.BUCKET_BUFFER_SIZE, a.byteLength)));
                }
                return (
                  f > 0 &&
                    ((d = {
                      buffer: new Uint8Array(Gt.BUCKET_BUFFER_SIZE),
                      offset: a.byteLength,
                      roffset: 0,
                    }),
                    o.buckets.push(d),
                    d.buffer.set(a)),
                  s
                );
              },
              close: function (t) {
                t.node.pipe.buckets = null;
              },
            },
            nextname: function () {
              return (
                Gt.nextname.current || (Gt.nextname.current = 0),
                'pipe[' + Gt.nextname.current++ + ']'
              );
            },
          },
          Ht = {
            xhrs: [],
            setu64: function (t, e) {
              ((I[t >> 2] = e), (I[(t + 4) >> 2] = (e / 4294967296) | 0));
            },
            openDatabase: function (t, e, n, r) {
              try {
                var i = indexedDB.open(t, e);
              } catch (t) {
                return r(t);
              }
              ((i.onupgradeneeded = function (t) {
                var e = t.target.result;
                (e.objectStoreNames.contains('FILES') &&
                  e.deleteObjectStore('FILES'),
                  e.createObjectStore('FILES'));
              }),
                (i.onsuccess = function (t) {
                  n(t.target.result);
                }),
                (i.onerror = function (t) {
                  r(t);
                }));
            },
            staticInit: function () {
              (Ht.openDatabase(
                'emscripten_filesystem',
                1,
                function (t) {
                  ((Ht.dbInstance = t), ut());
                },
                function () {
                  ((Ht.dbInstance = !1), ut());
                }
              ),
                ('undefined' != typeof ENVIRONMENT_IS_FETCH_WORKER &&
                  ENVIRONMENT_IS_FETCH_WORKER) ||
                  st());
            },
          };
        function Xt(t, e, n, r, i) {
          var o = I[(t + 8) >> 2];
          if (o) {
            var a = G(o),
              s = t + 112,
              u = G(s);
            (u || (u = 'GET'), I[(t + 4) >> 2]);
            var c = I[(s + 52) >> 2],
              l = I[(s + 56) >> 2],
              f = !!I[(s + 60) >> 2],
              h = (I[(s + 64) >> 2], I[(s + 68) >> 2]),
              d = I[(s + 72) >> 2],
              p = I[(s + 76) >> 2],
              _ = I[(s + 80) >> 2],
              m = I[(s + 84) >> 2],
              g = I[(s + 88) >> 2],
              v = !!(1 & c),
              E = !!(2 & c),
              y = !!(64 & c),
              w = h ? G(h) : void 0,
              T = d ? G(d) : void 0,
              R = _ ? G(_) : void 0,
              A = new XMLHttpRequest();
            if (
              ((A.withCredentials = f),
              A.open(u, a, !y, w, T),
              y || (A.timeout = l),
              (A.url_ = a),
              (A.responseType = 'arraybuffer'),
              _ && A.overrideMimeType(R),
              p)
            )
              for (;;) {
                var b = I[p >> 2];
                if (!b) break;
                var k = I[(p + 4) >> 2];
                if (!k) break;
                p += 8;
                var S = G(b),
                  F = G(k);
                A.setRequestHeader(S, F);
              }
            Ht.xhrs.push(A);
            var L = Ht.xhrs.length;
            I[(t + 0) >> 2] = L;
            var C = m && g ? j.slice(m, m + g) : null;
            ((A.onload = function (r) {
              D(v && !E);
              var i = A.response ? A.response.byteLength : 0;
              (Ht.setu64(t + 24, 0),
                i && Ht.setu64(t + 32, i),
                (M[(t + 40) >> 1] = A.readyState),
                (M[(t + 42) >> 1] = A.status),
                A.statusText && X(A.statusText, t + 44, 64),
                A.status >= 200 && A.status < 300
                  ? e && e(t, A, r)
                  : n && n(t, A, r));
            }),
              (A.onerror = function (e) {
                D(v);
                var r = A.status;
                (Ht.setu64(t + 24, 0),
                  Ht.setu64(t + 32, A.response ? A.response.byteLength : 0),
                  (M[(t + 40) >> 1] = A.readyState),
                  (M[(t + 42) >> 1] = r),
                  n && n(t, A, e));
              }),
              (A.ontimeout = function (e) {
                n && n(t, A, e);
              }),
              (A.onprogress = function (e) {
                var n = v && E && A.response ? A.response.byteLength : 0,
                  i = 0;
                (v && E && ((i = ue(n)), j.set(new Uint8Array(A.response), i)),
                  (I[(t + 12) >> 2] = i),
                  Ht.setu64(t + 16, n),
                  Ht.setu64(t + 24, e.loaded - n),
                  Ht.setu64(t + 32, e.total),
                  (M[(t + 40) >> 1] = A.readyState),
                  A.readyState >= 3 &&
                    0 === A.status &&
                    e.loaded > 0 &&
                    (A.status = 200),
                  (M[(t + 42) >> 1] = A.status),
                  A.statusText && X(A.statusText, t + 44, 64),
                  r && r(t, A, e),
                  i && oe(i));
              }),
              (A.onreadystatechange = function (e) {
                ((M[(t + 40) >> 1] = A.readyState),
                  A.readyState >= 2 && (M[(t + 42) >> 1] = A.status),
                  i && i(t, A, e));
              }));
            try {
              A.send(C);
            } catch (e) {
              n && n(t, A, e);
            }
          } else n(t, 0, 'no url specified!');
          function D(e) {
            var n = 0,
              r = 0;
            (e &&
              ((r = A.response ? A.response.byteLength : 0),
              (n = ue(r)),
              j.set(new Uint8Array(A.response), n)),
              (I[(t + 12) >> 2] = n),
              Ht.setu64(t + 16, r));
          }
        }
        function Wt(t, e, n, r, i) {
          if (t) {
            var o = I[(e + 112 + 64) >> 2];
            o || (o = I[(e + 8) >> 2]);
            var a = G(o);
            try {
              var s = t
                .transaction(['FILES'], 'readwrite')
                .objectStore('FILES')
                .put(n, a);
              ((s.onsuccess = function (t) {
                ((M[(e + 40) >> 1] = 4),
                  (M[(e + 42) >> 1] = 200),
                  X('OK', e + 44, 64),
                  r(e, 0, a));
              }),
                (s.onerror = function (t) {
                  ((M[(e + 40) >> 1] = 4),
                    (M[(e + 42) >> 1] = 413),
                    X('Payload Too Large', e + 44, 64),
                    i(e, 0, t));
                }));
            } catch (t) {
              i(e, 0, t);
            }
          } else i(e, 0, 'IndexedDB not available!');
        }
        var zt = {};
        function Vt() {
          if (!Vt.strings) {
            var t = {
              USER: 'web_user',
              LOGNAME: 'web_user',
              PATH: '/',
              PWD: '/',
              HOME: '/home/web_user',
              LANG:
                (
                  ('object' == typeof navigator &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  'C'
                ).replace('-', '_') + '.UTF-8',
              _: p || './this.program',
            };
            for (var e in zt) t[e] = zt[e];
            var n = [];
            for (var e in t) n.push(e + '=' + t[e]);
            Vt.strings = n;
          }
          return Vt.strings;
        }
        function Yt(t) {
          return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
        }
        function qt(t, e) {
          for (var n = 0, r = 0; r <= e; n += t[r++]);
          return n;
        }
        var Kt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Zt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Jt(t, e) {
          for (var n = new Date(t.getTime()); e > 0; ) {
            var r = Yt(n.getFullYear()),
              i = n.getMonth(),
              o = (r ? Kt : Zt)[i];
            if (!(e > o - n.getDate())) return (n.setDate(n.getDate() + e), n);
            ((e -= o - n.getDate() + 1),
              n.setDate(1),
              i < 11
                ? n.setMonth(i + 1)
                : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1)));
          }
          return n;
        }
        function Qt(t, e, n, r) {
          var i = N[(r + 40) >> 2],
            o = {
              tm_sec: N[r >> 2],
              tm_min: N[(r + 4) >> 2],
              tm_hour: N[(r + 8) >> 2],
              tm_mday: N[(r + 12) >> 2],
              tm_mon: N[(r + 16) >> 2],
              tm_year: N[(r + 20) >> 2],
              tm_wday: N[(r + 24) >> 2],
              tm_yday: N[(r + 28) >> 2],
              tm_isdst: N[(r + 32) >> 2],
              tm_gmtoff: N[(r + 36) >> 2],
              tm_zone: i ? G(i) : '',
            },
            a = G(n),
            s = {
              '%c': '%a %b %d %H:%M:%S %Y',
              '%D': '%m/%d/%y',
              '%F': '%Y-%m-%d',
              '%h': '%b',
              '%r': '%I:%M:%S %p',
              '%R': '%H:%M',
              '%T': '%H:%M:%S',
              '%x': '%m/%d/%y',
              '%X': '%H:%M:%S',
              '%Ec': '%c',
              '%EC': '%C',
              '%Ex': '%m/%d/%y',
              '%EX': '%H:%M:%S',
              '%Ey': '%y',
              '%EY': '%Y',
              '%Od': '%d',
              '%Oe': '%e',
              '%OH': '%H',
              '%OI': '%I',
              '%Om': '%m',
              '%OM': '%M',
              '%OS': '%S',
              '%Ou': '%u',
              '%OU': '%U',
              '%OV': '%V',
              '%Ow': '%w',
              '%OW': '%W',
              '%Oy': '%y',
            };
          for (var u in s) a = a.replace(new RegExp(u, 'g'), s[u]);
          var c = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            l = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ];
          function f(t, e, n) {
            for (
              var r = 'number' == typeof t ? t.toString() : t || '';
              r.length < e;

            )
              r = n[0] + r;
            return r;
          }
          function h(t, e) {
            return f(t, e, '0');
          }
          function d(t, e) {
            function n(t) {
              return t < 0 ? -1 : t > 0 ? 1 : 0;
            }
            var r;
            return (
              0 === (r = n(t.getFullYear() - e.getFullYear())) &&
                0 === (r = n(t.getMonth() - e.getMonth())) &&
                (r = n(t.getDate() - e.getDate())),
              r
            );
          }
          function p(t) {
            switch (t.getDay()) {
              case 0:
                return new Date(t.getFullYear() - 1, 11, 29);
              case 1:
                return t;
              case 2:
                return new Date(t.getFullYear(), 0, 3);
              case 3:
                return new Date(t.getFullYear(), 0, 2);
              case 4:
                return new Date(t.getFullYear(), 0, 1);
              case 5:
                return new Date(t.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(t.getFullYear() - 1, 11, 30);
            }
          }
          function _(t) {
            var e = Jt(new Date(t.tm_year + 1900, 0, 1), t.tm_yday),
              n = new Date(e.getFullYear(), 0, 4),
              r = new Date(e.getFullYear() + 1, 0, 4),
              i = p(n),
              o = p(r);
            return d(i, e) <= 0
              ? d(o, e) <= 0
                ? e.getFullYear() + 1
                : e.getFullYear()
              : e.getFullYear() - 1;
          }
          var m = {
            '%a': function (t) {
              return c[t.tm_wday].substring(0, 3);
            },
            '%A': function (t) {
              return c[t.tm_wday];
            },
            '%b': function (t) {
              return l[t.tm_mon].substring(0, 3);
            },
            '%B': function (t) {
              return l[t.tm_mon];
            },
            '%C': function (t) {
              return h(((t.tm_year + 1900) / 100) | 0, 2);
            },
            '%d': function (t) {
              return h(t.tm_mday, 2);
            },
            '%e': function (t) {
              return f(t.tm_mday, 2, ' ');
            },
            '%g': function (t) {
              return _(t).toString().substring(2);
            },
            '%G': function (t) {
              return _(t);
            },
            '%H': function (t) {
              return h(t.tm_hour, 2);
            },
            '%I': function (t) {
              var e = t.tm_hour;
              return (0 == e ? (e = 12) : e > 12 && (e -= 12), h(e, 2));
            },
            '%j': function (t) {
              return h(
                t.tm_mday + qt(Yt(t.tm_year + 1900) ? Kt : Zt, t.tm_mon - 1),
                3
              );
            },
            '%m': function (t) {
              return h(t.tm_mon + 1, 2);
            },
            '%M': function (t) {
              return h(t.tm_min, 2);
            },
            '%n': function () {
              return '\n';
            },
            '%p': function (t) {
              return t.tm_hour >= 0 && t.tm_hour < 12 ? 'AM' : 'PM';
            },
            '%S': function (t) {
              return h(t.tm_sec, 2);
            },
            '%t': function () {
              return '\t';
            },
            '%u': function (t) {
              return t.tm_wday || 7;
            },
            '%U': function (t) {
              var e = new Date(t.tm_year + 1900, 0, 1),
                n = 0 === e.getDay() ? e : Jt(e, 7 - e.getDay()),
                r = new Date(t.tm_year + 1900, t.tm_mon, t.tm_mday);
              if (d(n, r) < 0) {
                var i =
                    qt(Yt(r.getFullYear()) ? Kt : Zt, r.getMonth() - 1) - 31,
                  o = 31 - n.getDate() + i + r.getDate();
                return h(Math.ceil(o / 7), 2);
              }
              return 0 === d(n, e) ? '01' : '00';
            },
            '%V': function (t) {
              var e,
                n = new Date(t.tm_year + 1900, 0, 4),
                r = new Date(t.tm_year + 1901, 0, 4),
                i = p(n),
                o = p(r),
                a = Jt(new Date(t.tm_year + 1900, 0, 1), t.tm_yday);
              return d(a, i) < 0
                ? '53'
                : d(o, a) <= 0
                  ? '01'
                  : ((e =
                      i.getFullYear() < t.tm_year + 1900
                        ? t.tm_yday + 32 - i.getDate()
                        : t.tm_yday + 1 - i.getDate()),
                    h(Math.ceil(e / 7), 2));
            },
            '%w': function (t) {
              return t.tm_wday;
            },
            '%W': function (t) {
              var e = new Date(t.tm_year, 0, 1),
                n =
                  1 === e.getDay()
                    ? e
                    : Jt(e, 0 === e.getDay() ? 1 : 7 - e.getDay() + 1),
                r = new Date(t.tm_year + 1900, t.tm_mon, t.tm_mday);
              if (d(n, r) < 0) {
                var i =
                    qt(Yt(r.getFullYear()) ? Kt : Zt, r.getMonth() - 1) - 31,
                  o = 31 - n.getDate() + i + r.getDate();
                return h(Math.ceil(o / 7), 2);
              }
              return 0 === d(n, e) ? '01' : '00';
            },
            '%y': function (t) {
              return (t.tm_year + 1900).toString().substring(2);
            },
            '%Y': function (t) {
              return t.tm_year + 1900;
            },
            '%z': function (t) {
              var e = t.tm_gmtoff,
                n = e >= 0;
              return (
                (e = ((e = Math.abs(e) / 60) / 60) * 100 + (e % 60)),
                (n ? '+' : '-') + String('0000' + e).slice(-4)
              );
            },
            '%Z': function (t) {
              return t.tm_zone;
            },
            '%%': function () {
              return '%';
            },
          };
          for (var u in m)
            a.indexOf(u) >= 0 && (a = a.replace(new RegExp(u, 'g'), m[u](o)));
          var g = te(a, !1);
          return g.length > e ? 0 : (V(g, t), g.length - 1);
        }
        ((s.requestFullscreen = function (t, e) {
          vt.requestFullscreen(t, e);
        }),
          (s.requestAnimationFrame = function (t) {
            vt.requestAnimationFrame(t);
          }),
          (s.setCanvasSize = function (t, e, n) {
            vt.setCanvasSize(t, e, n);
          }),
          (s.pauseMainLoop = function () {
            vt.mainLoop.pause();
          }),
          (s.resumeMainLoop = function () {
            vt.mainLoop.resume();
          }),
          (s.getUserMedia = function () {
            vt.getUserMedia();
          }),
          (s.createContext = function (t, e, n, r) {
            return vt.createContext(t, e, n, r);
          }));
        var $t = function (t, e, n, r) {
          (t || (t = this),
            (this.parent = t),
            (this.mount = t.mount),
            (this.mounted = null),
            (this.id = Ut.nextInode++),
            (this.name = e),
            (this.mode = n),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = r));
        };
        function te(t, e, n) {
          var r = n > 0 ? n : W(t) + 1,
            i = new Array(r),
            o = H(t, i, 0, i.length);
          return (e && (i.length = o), i);
        }
        (Object.defineProperties($t.prototype, {
          read: {
            get: function () {
              return !(365 & ~this.mode);
            },
            set: function (t) {
              t ? (this.mode |= 365) : (this.mode &= -366);
            },
          },
          write: {
            get: function () {
              return !(146 & ~this.mode);
            },
            set: function (t) {
              t ? (this.mode |= 146) : (this.mode &= -147);
            },
          },
          isFolder: {
            get: function () {
              return Ut.isDir(this.mode);
            },
          },
          isDevice: {
            get: function () {
              return Ut.isChrdev(this.mode);
            },
          },
        }),
          (Ut.FSNode = $t),
          Ut.staticInit(),
          (s.FS_createFolder = Ut.createFolder),
          (s.FS_createPath = Ut.createPath),
          (s.FS_createDataFile = Ut.createDataFile),
          (s.FS_createPreloadedFile = Ut.createPreloadedFile),
          (s.FS_createLazyFile = Ut.createLazyFile),
          (s.FS_createLink = Ut.createLink),
          (s.FS_createDevice = Ut.createDevice),
          (s.FS_unlink = Ut.unlink),
          Ht.staticInit());
        var ee,
          ne,
          re = {
            __assert_fail: function (t, e, n, r) {
              ct(
                'Assertion failed: ' +
                  G(t) +
                  ', at: ' +
                  [
                    e ? G(e) : 'unknown filename',
                    n,
                    r ? G(r) : 'unknown function',
                  ]
              );
            },
            __clock_gettime: function (t, e) {
              return wt(t, e);
            },
            __cxa_allocate_exception: function (t) {
              return ue(t + Tt.SIZE) + Tt.SIZE;
            },
            __cxa_atexit: function (t, e) {},
            __cxa_begin_catch: function (t) {
              var e = new At(t),
                n = e.get_exception_info();
              return (
                n.get_caught() || (n.set_caught(!0), me.uncaught_exceptions--),
                n.set_rethrown(!1),
                bt.push(e),
                kt(n),
                e.get_exception_ptr()
              );
            },
            __cxa_current_primary_exception: function () {
              if (!bt.length) return 0;
              var t = bt[bt.length - 1];
              return (kt(t.get_exception_info()), t.get_base_ptr());
            },
            __cxa_decrement_exception_refcount: function (t) {
              t && Ft(new Rt(t));
            },
            __cxa_end_catch: function () {
              he(0);
              var t = bt.pop();
              (Ft(t.get_exception_info()), t.free(), (Lt = 0));
            },
            __cxa_find_matching_catch_2: function () {
              var t = Lt;
              if (!t) return 0 | (A(0), 0);
              var e = new Rt(t).get_type(),
                n = new At();
              if ((n.set_base_ptr(t), !e)) return 0 | (A(0), n.ptr);
              var r = Array.prototype.slice.call(arguments);
              (Ct || (Ct = ue(4)), (N[Ct >> 2] = t));
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (0 === o || o === e) break;
                if (ge(o, e, Ct)) {
                  var a = N[Ct >> 2];
                  return (t !== a && n.set_adjusted_ptr(a), 0 | (A(o), n.ptr));
                }
              }
              return 0 | (A(e), n.ptr);
            },
            __cxa_find_matching_catch_3: function () {
              var t = Lt;
              if (!t) return 0 | (A(0), 0);
              var e = new Rt(t).get_type(),
                n = new At();
              if ((n.set_base_ptr(t), !e)) return 0 | (A(0), n.ptr);
              var r = Array.prototype.slice.call(arguments);
              (Ct || (Ct = ue(4)), (N[Ct >> 2] = t));
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (0 === o || o === e) break;
                if (ge(o, e, Ct)) {
                  var a = N[Ct >> 2];
                  return (t !== a && n.set_adjusted_ptr(a), 0 | (A(o), n.ptr));
                }
              }
              return 0 | (A(e), n.ptr);
            },
            __cxa_find_matching_catch_4: function () {
              var t = Lt;
              if (!t) return 0 | (A(0), 0);
              var e = new Rt(t).get_type(),
                n = new At();
              if ((n.set_base_ptr(t), !e)) return 0 | (A(0), n.ptr);
              var r = Array.prototype.slice.call(arguments);
              (Ct || (Ct = ue(4)), (N[Ct >> 2] = t));
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (0 === o || o === e) break;
                if (ge(o, e, Ct)) {
                  var a = N[Ct >> 2];
                  return (t !== a && n.set_adjusted_ptr(a), 0 | (A(o), n.ptr));
                }
              }
              return 0 | (A(e), n.ptr);
            },
            __cxa_find_matching_catch_5: function () {
              var t = Lt;
              if (!t) return 0 | (A(0), 0);
              var e = new Rt(t).get_type(),
                n = new At();
              if ((n.set_base_ptr(t), !e)) return 0 | (A(0), n.ptr);
              var r = Array.prototype.slice.call(arguments);
              (Ct || (Ct = ue(4)), (N[Ct >> 2] = t));
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (0 === o || o === e) break;
                if (ge(o, e, Ct)) {
                  var a = N[Ct >> 2];
                  return (t !== a && n.set_adjusted_ptr(a), 0 | (A(o), n.ptr));
                }
              }
              return 0 | (A(e), n.ptr);
            },
            __cxa_free_exception: St,
            __cxa_increment_exception_refcount: function (t) {
              t && kt(new Rt(t));
            },
            __cxa_rethrow: Dt,
            __cxa_rethrow_primary_exception: function (t) {
              if (t) {
                var e = new At();
                e.set_base_ptr(t);
                var n = e.get_exception_info();
                (bt.push(e), n.set_rethrown(!0), Dt());
              }
            },
            __cxa_thread_atexit: function (t, e) {},
            __cxa_throw: function (t, e, n) {
              throw (
                new Rt(t).init(e, n),
                (Lt = t),
                'uncaught_exception' in me
                  ? me.uncaught_exceptions++
                  : (me.uncaught_exceptions = 1),
                t
              );
            },
            __cxa_uncaught_exceptions: function () {
              return me.uncaught_exceptions;
            },
            __gmtime_r: function (t, e) {
              return jt(t, e);
            },
            __indirect_function_table: b,
            __localtime_r: function (t, e) {
              return Mt(t, e);
            },
            __map_file: function (t, e) {
              return (yt(63), -1);
            },
            __resumeException: function (t) {
              var e = new At(t),
                n = e.get_base_ptr();
              throw (Lt || (Lt = n), e.free(), n);
            },
            __sys__newselect: function (t, e, n, r, i) {
              try {
                for (
                  var o = 0,
                    a = e ? N[e >> 2] : 0,
                    s = e ? N[(e + 4) >> 2] : 0,
                    u = n ? N[n >> 2] : 0,
                    c = n ? N[(n + 4) >> 2] : 0,
                    l = r ? N[r >> 2] : 0,
                    f = r ? N[(r + 4) >> 2] : 0,
                    h = 0,
                    d = 0,
                    p = 0,
                    _ = 0,
                    m = 0,
                    g = 0,
                    v =
                      (e ? N[e >> 2] : 0) |
                      (n ? N[n >> 2] : 0) |
                      (r ? N[r >> 2] : 0),
                    E =
                      (e ? N[(e + 4) >> 2] : 0) |
                      (n ? N[(n + 4) >> 2] : 0) |
                      (r ? N[(r + 4) >> 2] : 0),
                    y = function (t, e, n, r) {
                      return t < 32 ? e & r : n & r;
                    },
                    w = 0;
                  w < t;
                  w++
                ) {
                  var T = 1 << w % 32;
                  if (y(w, v, E, T)) {
                    var R = Ut.getStream(w);
                    if (!R) throw new Ut.ErrnoError(8);
                    var A = xt.DEFAULT_POLLMASK;
                    (R.stream_ops.poll && (A = R.stream_ops.poll(R)),
                      1 & A &&
                        y(w, a, s, T) &&
                        (w < 32 ? (h |= T) : (d |= T), o++),
                      4 & A &&
                        y(w, u, c, T) &&
                        (w < 32 ? (p |= T) : (_ |= T), o++),
                      2 & A &&
                        y(w, l, f, T) &&
                        (w < 32 ? (m |= T) : (g |= T), o++));
                  }
                }
                return (
                  e && ((N[e >> 2] = h), (N[(e + 4) >> 2] = d)),
                  n && ((N[n >> 2] = p), (N[(n + 4) >> 2] = _)),
                  r && ((N[r >> 2] = m), (N[(r + 4) >> 2] = g)),
                  o
                );
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_access: function (t, e) {
              try {
                return ((t = xt.getStr(t)), xt.doAccess(t, e));
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_fcntl64: function (t, e, n) {
              xt.varargs = n;
              try {
                var r = xt.getStreamFromFD(t);
                switch (e) {
                  case 0:
                    return (i = xt.get()) < 0
                      ? -28
                      : Ut.open(r.path, r.flags, 0, i).fd;
                  case 1:
                  case 2:
                  case 13:
                  case 14:
                    return 0;
                  case 3:
                    return r.flags;
                  case 4:
                    var i = xt.get();
                    return ((r.flags |= i), 0);
                  case 12:
                    return ((i = xt.get()), (O[(i + 0) >> 1] = 2), 0);
                  case 16:
                  case 8:
                  default:
                    return -28;
                  case 9:
                    return (yt(28), -1);
                }
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_fstat64: function (t, e) {
              try {
                var n = xt.getStreamFromFD(t);
                return xt.doStat(Ut.stat, n.path, e);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_getdents64: function (t, e, n) {
              try {
                var r = xt.getStreamFromFD(t);
                r.getdents || (r.getdents = Ut.readdir(r.path));
                for (
                  var i = 280,
                    o = 0,
                    a = Ut.llseek(r, 0, 1),
                    s = Math.floor(a / i);
                  s < r.getdents.length && o + i <= n;

                ) {
                  var u,
                    c,
                    l = r.getdents[s];
                  if ('.' === l[0]) ((u = 1), (c = 4));
                  else {
                    var f = Ut.lookupNode(r.node, l);
                    ((u = f.id),
                      (c = Ut.isChrdev(f.mode)
                        ? 2
                        : Ut.isDir(f.mode)
                          ? 4
                          : Ut.isLink(f.mode)
                            ? 10
                            : 8));
                  }
                  ((dt = [
                    u >>> 0,
                    ((ht = u),
                    +tt(ht) >= 1
                      ? ht > 0
                        ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                        : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                    (N[(e + o) >> 2] = dt[0]),
                    (N[(e + o + 4) >> 2] = dt[1]),
                    (dt = [
                      ((s + 1) * i) >>> 0,
                      ((ht = (s + 1) * i),
                      +tt(ht) >= 1
                        ? ht > 0
                          ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                          : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                        : 0),
                    ]),
                    (N[(e + o + 8) >> 2] = dt[0]),
                    (N[(e + o + 12) >> 2] = dt[1]),
                    (O[(e + o + 16) >> 1] = 280),
                    (D[(e + o + 18) | 0] = c),
                    X(l, e + o + 19, 256),
                    (o += i),
                    (s += 1));
                }
                return (Ut.llseek(r, s * i, 0), o);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_getegid32: function () {
              return 0;
            },
            __sys_geteuid32: function () {
              return 0;
            },
            __sys_getgid32: function () {
              return 0;
            },
            __sys_getpid: function () {
              return 42;
            },
            __sys_getuid32: function () {
              return 0;
            },
            __sys_ioctl: function (t, e, n) {
              xt.varargs = n;
              try {
                var r = xt.getStreamFromFD(t);
                switch (e) {
                  case 21509:
                  case 21505:
                  case 21510:
                  case 21511:
                  case 21512:
                  case 21506:
                  case 21507:
                  case 21508:
                  case 21523:
                  case 21524:
                    return r.tty ? 0 : -59;
                  case 21519:
                    if (!r.tty) return -59;
                    var i = xt.get();
                    return ((N[i >> 2] = 0), 0);
                  case 21520:
                    return r.tty ? -28 : -59;
                  case 21531:
                    return ((i = xt.get()), Ut.ioctl(r, e, i));
                  default:
                    ct('bad ioctl syscall ' + e);
                }
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_lstat64: function (t, e) {
              try {
                return ((t = xt.getStr(t)), xt.doStat(Ut.lstat, t, e));
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_mkdir: function (t, e) {
              try {
                return ((t = xt.getStr(t)), xt.doMkdir(t, e));
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_mmap2: function (t, e, n, r, i, o) {
              try {
                return (function (t, e, n, r, i, o) {
                  var a;
                  o <<= 12;
                  var s = !1;
                  if (16 & r && t % 16384 != 0) return -28;
                  if (32 & r) {
                    if (!(a = Ee(16384, e))) return -48;
                    (ae(a, 0, e), (s = !0));
                  } else {
                    var u = Ut.getStream(i);
                    if (!u) return -8;
                    var c = Ut.mmap(u, t, e, o, n, r);
                    ((a = c.ptr), (s = c.allocated));
                  }
                  return (
                    (xt.mappings[a] = {
                      malloc: a,
                      len: e,
                      allocated: s,
                      fd: i,
                      prot: n,
                      flags: r,
                      offset: o,
                    }),
                    a
                  );
                })(t, e, n, r, i, o);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_munmap: function (t, e) {
              try {
                return (function (t, e) {
                  if (-1 == (0 | t) || 0 === e) return -28;
                  var n = xt.mappings[t];
                  if (!n) return 0;
                  if (e === n.len) {
                    var r = Ut.getStream(n.fd);
                    (2 & n.prot && xt.doMsync(t, r, e, n.flags, n.offset),
                      Ut.munmap(r),
                      (xt.mappings[t] = null),
                      n.allocated && oe(n.malloc));
                  }
                  return 0;
                })(t, e);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_open: function (t, e, n) {
              xt.varargs = n;
              try {
                var r = xt.getStr(t),
                  i = xt.get();
                return Ut.open(r, e, i).fd;
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_pause: function () {
              return -27;
            },
            __sys_pipe: function (t) {
              try {
                if (0 == t) throw new Ut.ErrnoError(21);
                var e = Gt.createPipe();
                return (
                  (N[t >> 2] = e.readable_fd),
                  (N[(t + 4) >> 2] = e.writable_fd),
                  0
                );
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_read: function (t, e, n) {
              try {
                var r = xt.getStreamFromFD(t);
                return Ut.read(r, D, e, n);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_readlink: function (t, e, n) {
              try {
                return ((t = xt.getStr(t)), xt.doReadlink(t, e, n));
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_rmdir: function (t) {
              try {
                return ((t = xt.getStr(t)), Ut.rmdir(t), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_stat64: function (t, e) {
              try {
                return ((t = xt.getStr(t)), xt.doStat(Ut.stat, t, e));
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_uname: function (t) {
              try {
                if (!t) return -21;
                var e = {
                    __size__: 390,
                    sysname: 0,
                    nodename: 65,
                    release: 130,
                    version: 195,
                    machine: 260,
                    domainname: 325,
                  },
                  n = function (n, r) {
                    Y(r, t + e[n]);
                  };
                return (
                  n('sysname', 'Emscripten'),
                  n('nodename', 'emscripten'),
                  n('release', '1.0'),
                  n('version', '#1'),
                  n('machine', 'x86-JS'),
                  0
                );
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            __sys_unlink: function (t) {
              try {
                return ((t = xt.getStr(t)), Ut.unlink(t), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  -t.errno
                );
              }
            },
            _emscripten_fetch_free: function (t) {
              delete Ht.xhrs[t - 1];
            },
            abort: function () {
              ct();
            },
            atexit: function (t, e) {},
            clock_gettime: wt,
            difftime: function (t, e) {
              return t - e;
            },
            dlclose: function (t) {
              ct(
                "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
              );
            },
            dlerror: function () {
              ct(
                "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
              );
            },
            dlopen: function (t, e) {
              ct(
                "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
              );
            },
            dlsym: function (t, e) {
              ct(
                "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
              );
            },
            emscripten_is_main_browser_thread: function () {
              return !1;
            },
            emscripten_longjmp: function (t, e) {
              !(function (t, e) {
                throw (he(t, e || 1), 'longjmp');
              })(t, e);
            },
            emscripten_memcpy_big: function (t, e, n) {
              j.copyWithin(t, e, e + n);
            },
            emscripten_resize_heap: function (t) {
              ct('OOM');
            },
            emscripten_start_fetch: function (t, e, n, r, i) {
              void 0 !== w && (w = !0);
              var o = t + 112,
                a = G(o),
                s = I[(o + 36) >> 2],
                u = I[(o + 40) >> 2],
                c = I[(o + 44) >> 2],
                l = I[(o + 48) >> 2],
                f = I[(o + 52) >> 2],
                h = !!(4 & f),
                d = !!(32 & f),
                p = !!(16 & f),
                _ = function (t, n, r) {
                  s ? b.get(s)(t) : e && e(t);
                },
                m = function (t, e, n) {
                  c ? b.get(c)(t) : r && r(t);
                },
                g = function (t, e, r) {
                  u ? b.get(u)(t) : n && n(t);
                },
                v = function (t, e, n) {
                  l ? b.get(l)(t) : i && i(t);
                },
                E = function (t, n, r) {
                  Wt(
                    Ht.dbInstance,
                    t,
                    n.response,
                    function (t, n, r) {
                      s ? b.get(s)(t) : e && e(t);
                    },
                    function (t, n, r) {
                      s ? b.get(s)(t) : e && e(t);
                    }
                  );
                };
              if ('EM_IDB_STORE' === a) {
                var y = I[(o + 84) >> 2];
                Wt(Ht.dbInstance, t, j.slice(y, y + I[(o + 88) >> 2]), _, g);
              } else if ('EM_IDB_DELETE' === a)
                !(function (t, e, n, r) {
                  if (t) {
                    var i = I[(e + 112 + 64) >> 2];
                    i || (i = I[(e + 8) >> 2]);
                    var o = G(i);
                    try {
                      var a = t
                        .transaction(['FILES'], 'readwrite')
                        .objectStore('FILES')
                        .delete(o);
                      ((a.onsuccess = function (t) {
                        var r = t.target.result;
                        ((I[(e + 12) >> 2] = 0),
                          Ht.setu64(e + 16, 0),
                          Ht.setu64(e + 24, 0),
                          Ht.setu64(e + 32, 0),
                          (M[(e + 40) >> 1] = 4),
                          (M[(e + 42) >> 1] = 200),
                          X('OK', e + 44, 64),
                          n(e, 0, r));
                      }),
                        (a.onerror = function (t) {
                          ((M[(e + 40) >> 1] = 4),
                            (M[(e + 42) >> 1] = 404),
                            X('Not Found', e + 44, 64),
                            r(e, 0, t));
                        }));
                    } catch (t) {
                      r(e, 0, t);
                    }
                  } else r(e, 0, 'IndexedDB not available!');
                })(Ht.dbInstance, t, _, g);
              else if (p) {
                if (d) return 0;
                Xt(t, h ? E : _, g, m, v);
              } else
                !(function (t, e, n, r) {
                  if (t) {
                    var i = I[(e + 112 + 64) >> 2];
                    i || (i = I[(e + 8) >> 2]);
                    var o = G(i);
                    try {
                      var a = t
                        .transaction(['FILES'], 'readonly')
                        .objectStore('FILES')
                        .get(o);
                      ((a.onsuccess = function (t) {
                        if (t.target.result) {
                          var i = t.target.result,
                            o = i.byteLength || i.length,
                            a = ue(o);
                          (j.set(new Uint8Array(i), a),
                            (I[(e + 12) >> 2] = a),
                            Ht.setu64(e + 16, o),
                            Ht.setu64(e + 24, 0),
                            Ht.setu64(e + 32, o),
                            (M[(e + 40) >> 1] = 4),
                            (M[(e + 42) >> 1] = 200),
                            X('OK', e + 44, 64),
                            n(e, 0, i));
                        } else
                          ((M[(e + 40) >> 1] = 4),
                            (M[(e + 42) >> 1] = 404),
                            X('Not Found', e + 44, 64),
                            r(e, 0, 'no data'));
                      }),
                        (a.onerror = function (t) {
                          ((M[(e + 40) >> 1] = 4),
                            (M[(e + 42) >> 1] = 404),
                            X('Not Found', e + 44, 64),
                            r(e, 0, t));
                        }));
                    } catch (t) {
                      r(e, 0, t);
                    }
                  } else r(e, 0, 'IndexedDB not available!');
                })(
                  Ht.dbInstance,
                  t,
                  _,
                  d
                    ? g
                    : h
                      ? function (t, e, n) {
                          Xt(t, E, g, m, v);
                        }
                      : function (t, e, n) {
                          Xt(t, _, g, m, v);
                        }
                );
              return t;
            },
            environ_get: function (t, e) {
              var n = 0;
              return (
                Vt().forEach(function (r, i) {
                  var o = e + n;
                  ((N[(t + 4 * i) >> 2] = o), Y(r, o), (n += r.length + 1));
                }),
                0
              );
            },
            environ_sizes_get: function (t, e) {
              var n = Vt();
              N[t >> 2] = n.length;
              var r = 0;
              return (
                n.forEach(function (t) {
                  r += t.length + 1;
                }),
                (N[e >> 2] = r),
                0
              );
            },
            exit: function (t) {
              !(function (t) {
                (w || (s.onExit && s.onExit(t), (k = !0)), _(t, new pn(t)));
              })(t);
            },
            fd_close: function (t) {
              try {
                var e = xt.getStreamFromFD(t);
                return (Ut.close(e), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  t.errno
                );
              }
            },
            fd_fdstat_get: function (t, e) {
              try {
                var n = xt.getStreamFromFD(t),
                  r = n.tty
                    ? 2
                    : Ut.isDir(n.mode)
                      ? 3
                      : Ut.isLink(n.mode)
                        ? 7
                        : 4;
                return ((D[0 | e] = r), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  t.errno
                );
              }
            },
            fd_read: function (t, e, n, r) {
              try {
                var i = xt.getStreamFromFD(t),
                  o = xt.doReadv(i, e, n);
                return ((N[r >> 2] = o), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  t.errno
                );
              }
            },
            fd_seek: function (t, e, n, r, i) {
              try {
                var o = xt.getStreamFromFD(t),
                  a = 4294967296 * n + (e >>> 0),
                  s = 9007199254740992;
                return a <= -s || a >= s
                  ? -61
                  : (Ut.llseek(o, a, r),
                    (dt = [
                      o.position >>> 0,
                      ((ht = o.position),
                      +tt(ht) >= 1
                        ? ht > 0
                          ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                          : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                        : 0),
                    ]),
                    (N[i >> 2] = dt[0]),
                    (N[(i + 4) >> 2] = dt[1]),
                    o.getdents && 0 === a && 0 === r && (o.getdents = null),
                    0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  t.errno
                );
              }
            },
            fd_write: function (t, e, n, r) {
              try {
                var i = xt.getStreamFromFD(t),
                  o = xt.doWritev(i, e, n);
                return ((N[r >> 2] = o), 0);
              } catch (t) {
                return (
                  (void 0 !== Ut && t instanceof Ut.ErrnoError) || ct(t),
                  t.errno
                );
              }
            },
            getTempRet0: function () {
              return 0 | R;
            },
            gettimeofday: function (t) {
              var e = Date.now();
              return (
                (N[t >> 2] = (e / 1e3) | 0),
                (N[(t + 4) >> 2] = ((e % 1e3) * 1e3) | 0),
                0
              );
            },
            gmtime_r: jt,
            invoke_di: function (t, e) {
              var n = de();
              try {
                return b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_dii: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_diiddi: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_diii: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_ff: function (t, e) {
              var n = de();
              try {
                return b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fi: function (t, e) {
              var n = de();
              try {
                return b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fif: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fii: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fiii: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fiiii: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_fiiiiiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_i: function (t) {
              var e = de();
              try {
                return b.get(t)();
              } catch (t) {
                if ((pe(e), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_id: function (t, e) {
              var n = de();
              try {
                return b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_idiii: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_ii: function (t, e) {
              var n = de();
              try {
                return b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iid: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiddi: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iidi: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iidii: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iidiiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iif: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiff: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iifffiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiffi: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiffii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiffiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iifi: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iifii: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iifiii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iii: function (t, e, n) {
              var r = de();
              try {
                return b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiid: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiidd: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiddd: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiidi: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiif: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiff: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiifff: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiffi: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiifi: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiifii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiifiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiii: function (t, e, n, r) {
              var i = de();
              try {
                return b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiif: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiffi: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiifi: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiifii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiifiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiii: function (t, e, n, r, i) {
              var o = de();
              try {
                return b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiid: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiif: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiffifiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h
            ) {
              var d = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h);
              } catch (t) {
                if ((pe(d), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiifi: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiifif: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiifiiidi: function (t, e, n, r, i, o, a, s, u, c, l) {
              var f = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l);
              } catch (t) {
                if ((pe(f), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiifiiiii: function (t, e, n, r, i, o, a, s, u, c, l) {
              var f = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l);
              } catch (t) {
                if ((pe(f), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiifi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiifiiiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiifiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiii: function (t, e, n, r, i, o, a, s, u) {
              var c = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u);
              } catch (t) {
                if ((pe(c), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l) {
              var f = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l);
              } catch (t) {
                if ((pe(f), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h
            ) {
              var d = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h);
              } catch (t) {
                if ((pe(d), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiiiif: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p,
              _
            ) {
              var m = de();
              try {
                return b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h, d, p, _);
              } catch (t) {
                if ((pe(m), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiiij: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return Ae(t, e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiiji: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return be(t, e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iij: function (t, e, n, r) {
              var i = de();
              try {
                return ke(t, e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iiji: function (t, e, n, r, i) {
              var o = de();
              try {
                return Se(t, e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iijiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return Fe(t, e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iijiiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return Le(t, e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iijjiii: function (t, e, n, r, i, o, a, s, u) {
              var c = de();
              try {
                return Ce(t, e, n, r, i, o, a, s, u);
              } catch (t) {
                if ((pe(c), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_iji: function (t, e, n, r) {
              var i = de();
              try {
                return De(t, e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_ijj: function (t, e, n, r, i) {
              var o = de();
              try {
                return je(t, e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_ijjiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                return Oe(t, e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_ji: function (t, e) {
              var n = de();
              try {
                return Me(t, e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jii: function (t, e, n) {
              var r = de();
              try {
                return Ne(t, e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jiii: function (t, e, n, r) {
              var i = de();
              try {
                return Ie(t, e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jiiii: function (t, e, n, r, i) {
              var o = de();
              try {
                return Pe(t, e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jiiij: function (t, e, n, r, i, o) {
              var a = de();
              try {
                return Be(t, e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jiij: function (t, e, n, r, i) {
              var o = de();
              try {
                return Ue(t, e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_jijij: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                return xe(t, e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_v: function (t) {
              var e = de();
              try {
                b.get(t)();
              } catch (t) {
                if ((pe(e), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vffi: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vi: function (t, e) {
              var n = de();
              try {
                b.get(t)(e);
              } catch (t) {
                if ((pe(n), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viddi: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidi: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vididdii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiii: function (t, e, n, r, i, o, a, s, u) {
              var c = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u);
              } catch (t) {
                if ((pe(c), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiiii: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l) {
              var f = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l);
              } catch (t) {
                if ((pe(f), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p,
              _
            ) {
              var m = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h, d, p, _);
              } catch (t) {
                if ((pe(m), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vidiiiiiiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p,
              _,
              m,
              g,
              v,
              E
            ) {
              var y = de();
              try {
                b.get(t)(
                  e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  h,
                  d,
                  p,
                  _,
                  m,
                  g,
                  v,
                  E
                );
              } catch (t) {
                if ((pe(y), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vif: function (t, e, n) {
              var r = de();
              try {
                b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viff: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vifii: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vii: function (t, e, n) {
              var r = de();
              try {
                b.get(t)(e, n);
              } catch (t) {
                if ((pe(r), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viid: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viidd: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiddf: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiddii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viidfiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viidi: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viif: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiff: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiffif: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiffifi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiffiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viifi: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viifii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viii: function (t, e, n, r) {
              var i = de();
              try {
                b.get(t)(e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiid: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiidd: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiddi: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiidi: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiif: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiffii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiifii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiifiiffi: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiifiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiii: function (t, e, n, r, i) {
              var o = de();
              try {
                b.get(t)(e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiid: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiddi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiidiid: function (t, e, n, r, i, o, a, s, u) {
              var c = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u);
              } catch (t) {
                if ((pe(c), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiidiiii: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiffi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiffiiiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiii: function (t, e, n, r, i, o) {
              var a = de();
              try {
                b.get(t)(e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiid: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiidi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiifi: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiii: function (t, e, n, r, i, o, a) {
              var s = de();
              try {
                b.get(t)(e, n, r, i, o, a);
              } catch (t) {
                if ((pe(s), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiddi: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiii: function (t, e, n, r, i, o, a, s) {
              var u = de();
              try {
                b.get(t)(e, n, r, i, o, a, s);
              } catch (t) {
                if ((pe(u), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiii: function (t, e, n, r, i, o, a, s, u) {
              var c = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u);
              } catch (t) {
                if ((pe(c), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiii: function (t, e, n, r, i, o, a, s, u, c) {
              var l = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c);
              } catch (t) {
                if ((pe(l), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l) {
              var f = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l);
              } catch (t) {
                if ((pe(f), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiiii: function (t, e, n, r, i, o, a, s, u, c, l, f) {
              var h = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f);
              } catch (t) {
                if ((pe(h), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h
            ) {
              var d = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h);
              } catch (t) {
                if ((pe(d), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p
            ) {
              var _ = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h, d, p);
              } catch (t) {
                if ((pe(_), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p,
              _
            ) {
              var m = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h, d, p, _);
              } catch (t) {
                if ((pe(m), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiiiiiiiiiiiiiiiii: function (
              t,
              e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              d,
              p,
              _,
              m,
              g,
              v
            ) {
              var E = de();
              try {
                b.get(t)(e, n, r, i, o, a, s, u, c, l, f, h, d, p, _, m, g, v);
              } catch (t) {
                if ((pe(E), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viij: function (t, e, n, r, i) {
              var o = de();
              try {
                ye(t, e, n, r, i);
              } catch (t) {
                if ((pe(o), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_viiji: function (t, e, n, r, i, o) {
              var a = de();
              try {
                we(t, e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vij: function (t, e, n, r) {
              var i = de();
              try {
                Te(t, e, n, r);
              } catch (t) {
                if ((pe(i), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            invoke_vijj: function (t, e, n, r, i, o) {
              var a = de();
              try {
                Re(t, e, n, r, i, o);
              } catch (t) {
                if ((pe(a), t !== t + 0 && 'longjmp' !== t)) throw t;
                he(1, 0);
              }
            },
            llvm_eh_typeid_for: function (t) {
              return t;
            },
            localtime_r: Mt,
            memory: T,
            mktime: function (t) {
              Ot();
              var e = new Date(
                  N[(t + 20) >> 2] + 1900,
                  N[(t + 16) >> 2],
                  N[(t + 12) >> 2],
                  N[(t + 8) >> 2],
                  N[(t + 4) >> 2],
                  N[t >> 2],
                  0
                ),
                n = N[(t + 32) >> 2],
                r = e.getTimezoneOffset(),
                i = new Date(e.getFullYear(), 0, 1),
                o = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(),
                a = i.getTimezoneOffset(),
                s = Math.min(a, o);
              if (n < 0) N[(t + 32) >> 2] = Number(o != a && s == r);
              else if (n > 0 != (s == r)) {
                var u = Math.max(a, o),
                  c = n > 0 ? s : u;
                e.setTime(e.getTime() + 6e4 * (c - r));
              }
              N[(t + 24) >> 2] = e.getDay();
              var l = ((e.getTime() - i.getTime()) / 864e5) | 0;
              return ((N[(t + 28) >> 2] = l), (e.getTime() / 1e3) | 0);
            },
            nanosleep: function (t, e) {
              if (0 === t) return (yt(28), -1);
              var n = N[t >> 2],
                r = N[(t + 4) >> 2];
              return r < 0 || r > 999999999 || n < 0
                ? (yt(28), -1)
                : (0 !== e && ((N[e >> 2] = 0), (N[(e + 4) >> 2] = 0)),
                  (function (t) {
                    for (var e = pt(); pt() - e < t / 1e3; );
                  })(1e6 * n + r / 1e3));
            },
            pthread_attr_init: function (t) {
              return 0;
            },
            pthread_attr_setstacksize: function () {},
            pthread_condattr_destroy: function () {
              return 0;
            },
            pthread_condattr_init: function () {
              return 0;
            },
            pthread_condattr_setclock: function () {
              return 0;
            },
            pthread_create: function () {
              return 6;
            },
            pthread_detach: function () {},
            pthread_join: function () {},
            pthread_mutexattr_destroy: function () {},
            pthread_mutexattr_init: function () {},
            pthread_mutexattr_settype: function () {},
            pthread_setcancelstate: function () {
              return 0;
            },
            pthread_sigmask: function (t, e, n) {
              return (
                v('pthread_sigmask() is not supported: this is a no-op.'),
                0
              );
            },
            setTempRet0: function (t) {
              A(0 | t);
            },
            sigaction: function (t, e, n) {
              return 0;
            },
            sigfillset: function (t) {
              return ((N[t >> 2] = -1 >>> 0), 0);
            },
            signal: function (t, e) {
              return 0;
            },
            strftime: Qt,
            strftime_l: function (t, e, n, r) {
              return Qt(t, e, n, r);
            },
            sysconf: function (t) {
              switch (t) {
                case 30:
                case 75:
                  return 16384;
                case 85:
                  return j.length / 16384;
                case 132:
                case 133:
                case 12:
                case 137:
                case 138:
                case 15:
                case 235:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 149:
                case 13:
                case 10:
                case 236:
                case 153:
                case 9:
                case 21:
                case 22:
                case 159:
                case 154:
                case 14:
                case 77:
                case 78:
                case 139:
                case 80:
                case 81:
                case 82:
                case 68:
                case 67:
                case 164:
                case 11:
                case 29:
                case 47:
                case 48:
                case 95:
                case 52:
                case 51:
                case 46:
                case 79:
                  return 200809;
                case 27:
                case 246:
                case 127:
                case 128:
                case 23:
                case 24:
                case 160:
                case 161:
                case 181:
                case 182:
                case 242:
                case 183:
                case 184:
                case 243:
                case 244:
                case 245:
                case 165:
                case 178:
                case 179:
                case 49:
                case 50:
                case 168:
                case 169:
                case 175:
                case 170:
                case 171:
                case 172:
                case 97:
                case 76:
                case 32:
                case 173:
                case 35:
                  return -1;
                case 176:
                case 177:
                case 7:
                case 155:
                case 8:
                case 157:
                case 125:
                case 126:
                case 92:
                case 93:
                case 129:
                case 130:
                case 131:
                case 94:
                case 91:
                  return 1;
                case 74:
                case 60:
                case 69:
                case 70:
                case 4:
                  return 1024;
                case 31:
                case 42:
                case 72:
                  return 32;
                case 87:
                case 26:
                case 33:
                  return 2147483647;
                case 34:
                case 1:
                  return 47839;
                case 38:
                case 36:
                  return 99;
                case 43:
                case 37:
                  return 2048;
                case 0:
                  return 2097152;
                case 3:
                  return 65536;
                case 28:
                  return 32768;
                case 44:
                  return 32767;
                case 39:
                  return 1e3;
                case 89:
                  return 700;
                case 71:
                  return 256;
                case 40:
                  return 255;
                case 2:
                  return 100;
                case 180:
                  return 64;
                case 25:
                  return 20;
                case 5:
                  return 16;
                case 6:
                  return 6;
                case 73:
                  return 4;
                case 84:
                  return (
                    ('object' == typeof navigator &&
                      navigator.hardwareConcurrency) ||
                    1
                  );
              }
              return (yt(28), -1);
            },
            time: function (t) {
              var e = (Date.now() / 1e3) | 0;
              return (t && (N[t >> 2] = e), e);
            },
            timegm: function (t) {
              Ot();
              var e = Date.UTC(
                  N[(t + 20) >> 2] + 1900,
                  N[(t + 16) >> 2],
                  N[(t + 12) >> 2],
                  N[(t + 8) >> 2],
                  N[(t + 4) >> 2],
                  N[t >> 2],
                  0
                ),
                n = new Date(e);
              N[(t + 24) >> 2] = n.getUTCDay();
              var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                i = ((n.getTime() - r) / 864e5) | 0;
              return ((N[(t + 28) >> 2] = i), (n.getTime() / 1e3) | 0);
            },
            utime: function (t, e) {
              var n;
              (e ? ((n = N[(e + 4) >> 2]), (n *= 1e3)) : (n = Date.now()),
                (t = G(t)));
              try {
                return (Ut.utime(t, n, n), 0);
              } catch (t) {
                return (Ut.handleFSError(t), -1);
              }
            },
            uuid_generate: function (t) {
              var e = null;
              if (!e) {
                e = new Array(16);
                for (var n = new Date().getTime(), r = 0; r < 16; r++) {
                  var i = (n + 256 * Math.random()) % 256 | 0;
                  ((n = (n / 256) | 0), (e[r] = i));
                }
              }
              ((e[6] = (15 & e[6]) | 64), (e[8] = (127 & e[8]) | 128), V(e, t));
            },
          },
          ie =
            ((function () {
              var t = { env: re, wasi_snapshot_preview1: re };
              function e(t, e) {
                var n = t.exports;
                ((s.asm = n), ut());
              }
              function n(t) {
                e(t.instance);
              }
              function r(e) {
                return (
                  y || 'function' != typeof fetch
                    ? Promise.resolve().then(mt)
                    : fetch(_t, { credentials: 'same-origin' })
                        .then(function (t) {
                          if (!t.ok)
                            throw (
                              "failed to load wasm binary file at '" + _t + "'"
                            );
                          return t.arrayBuffer();
                        })
                        .catch(function () {
                          return mt();
                        })
                )
                  .then(function (e) {
                    return WebAssembly.instantiate(e, t);
                  })
                  .then(e, function (t) {
                    (v('failed to asynchronously prepare wasm: ' + t), ct(t));
                  });
              }
              if ((st(), s.instantiateWasm))
                try {
                  return s.instantiateWasm(t, e);
                } catch (t) {
                  return (
                    v(
                      'Module.instantiateWasm callback failed with error: ' + t
                    ),
                    !1
                  );
                }
              !(function () {
                if (
                  y ||
                  'function' != typeof WebAssembly.instantiateStreaming ||
                  lt(_t) ||
                  'function' != typeof fetch
                )
                  return r(n);
                fetch(_t, { credentials: 'same-origin' }).then(function (e) {
                  return WebAssembly.instantiateStreaming(e, t).then(
                    n,
                    function (t) {
                      return (
                        v('wasm streaming compile failed: ' + t),
                        v('falling back to ArrayBuffer instantiation'),
                        r(n)
                      );
                    }
                  );
                });
              })();
            })(),
            (s.___wasm_call_ctors = function () {
              return (ie = s.___wasm_call_ctors =
                s.asm.__wasm_call_ctors).apply(null, arguments);
            })),
          oe =
            ((s._memcpy = function () {
              return (s._memcpy = s.asm.memcpy).apply(null, arguments);
            }),
            (s._free = function () {
              return (oe = s._free = s.asm.free).apply(null, arguments);
            })),
          ae = (s._memset = function () {
            return (ae = s._memset = s.asm.memset).apply(null, arguments);
          }),
          se =
            ((s._processWeb = function () {
              return (s._processWeb = s.asm.processWeb).apply(null, arguments);
            }),
            (s.___errno_location = function () {
              return (se = s.___errno_location = s.asm.__errno_location).apply(
                null,
                arguments
              );
            })),
          ue =
            ((s._processgl = function () {
              return (s._processgl = s.asm.processgl).apply(null, arguments);
            }),
            (s._malloc = function () {
              return (ue = s._malloc = s.asm.malloc).apply(null, arguments);
            })),
          ce =
            ((s._testSetjmp = function () {
              return (s._testSetjmp = s.asm.testSetjmp).apply(null, arguments);
            }),
            (s._saveSetjmp = function () {
              return (s._saveSetjmp = s.asm.saveSetjmp).apply(null, arguments);
            }),
            (s._realloc = function () {
              return (s._realloc = s.asm.realloc).apply(null, arguments);
            }),
            (s._ntohs = function () {
              return (s._ntohs = s.asm.ntohs).apply(null, arguments);
            }),
            (s._htonl = function () {
              return (s._htonl = s.asm.htonl).apply(null, arguments);
            }),
            (s._htons = function () {
              return (s._htons = s.asm.htons).apply(null, arguments);
            }),
            (s.__get_tzname = function () {
              return (ce = s.__get_tzname = s.asm._get_tzname).apply(
                null,
                arguments
              );
            })),
          le = (s.__get_daylight = function () {
            return (le = s.__get_daylight = s.asm._get_daylight).apply(
              null,
              arguments
            );
          }),
          fe = (s.__get_timezone = function () {
            return (fe = s.__get_timezone = s.asm._get_timezone).apply(
              null,
              arguments
            );
          }),
          he = (s._setThrew = function () {
            return (he = s._setThrew = s.asm.setThrew).apply(null, arguments);
          }),
          de = (s.stackSave = function () {
            return (de = s.stackSave = s.asm.stackSave).apply(null, arguments);
          }),
          pe = (s.stackRestore = function () {
            return (pe = s.stackRestore = s.asm.stackRestore).apply(
              null,
              arguments
            );
          }),
          _e = (s.stackAlloc = function () {
            return (_e = s.stackAlloc = s.asm.stackAlloc).apply(
              null,
              arguments
            );
          }),
          me = (s.__ZSt18uncaught_exceptionv = function () {
            return (me = s.__ZSt18uncaught_exceptionv =
              s.asm._ZSt18uncaught_exceptionv).apply(null, arguments);
          }),
          ge = (s.___cxa_can_catch = function () {
            return (ge = s.___cxa_can_catch = s.asm.__cxa_can_catch).apply(
              null,
              arguments
            );
          }),
          ve = (s.___cxa_is_pointer_type = function () {
            return (ve = s.___cxa_is_pointer_type =
              s.asm.__cxa_is_pointer_type).apply(null, arguments);
          }),
          Ee = (s._memalign = function () {
            return (Ee = s._memalign = s.asm.memalign).apply(null, arguments);
          }),
          ye =
            ((s._emscripten_main_thread_process_queued_calls = function () {
              return (s._emscripten_main_thread_process_queued_calls =
                s.asm.emscripten_main_thread_process_queued_calls).apply(
                null,
                arguments
              );
            }),
            (s.dynCall_viij = function () {
              return (ye = s.dynCall_viij = s.asm.dynCall_viij).apply(
                null,
                arguments
              );
            })),
          we = (s.dynCall_viiji = function () {
            return (we = s.dynCall_viiji = s.asm.dynCall_viiji).apply(
              null,
              arguments
            );
          }),
          Te = (s.dynCall_vij = function () {
            return (Te = s.dynCall_vij = s.asm.dynCall_vij).apply(
              null,
              arguments
            );
          }),
          Re = (s.dynCall_vijj = function () {
            return (Re = s.dynCall_vijj = s.asm.dynCall_vijj).apply(
              null,
              arguments
            );
          }),
          Ae = (s.dynCall_iiiiij = function () {
            return (Ae = s.dynCall_iiiiij = s.asm.dynCall_iiiiij).apply(
              null,
              arguments
            );
          }),
          be = (s.dynCall_iiiji = function () {
            return (be = s.dynCall_iiiji = s.asm.dynCall_iiiji).apply(
              null,
              arguments
            );
          }),
          ke = (s.dynCall_iij = function () {
            return (ke = s.dynCall_iij = s.asm.dynCall_iij).apply(
              null,
              arguments
            );
          }),
          Se = (s.dynCall_iiji = function () {
            return (Se = s.dynCall_iiji = s.asm.dynCall_iiji).apply(
              null,
              arguments
            );
          }),
          Fe = (s.dynCall_iijiii = function () {
            return (Fe = s.dynCall_iijiii = s.asm.dynCall_iijiii).apply(
              null,
              arguments
            );
          }),
          Le = (s.dynCall_iijiiii = function () {
            return (Le = s.dynCall_iijiiii = s.asm.dynCall_iijiiii).apply(
              null,
              arguments
            );
          }),
          Ce = (s.dynCall_iijjiii = function () {
            return (Ce = s.dynCall_iijjiii = s.asm.dynCall_iijjiii).apply(
              null,
              arguments
            );
          }),
          De = (s.dynCall_iji = function () {
            return (De = s.dynCall_iji = s.asm.dynCall_iji).apply(
              null,
              arguments
            );
          }),
          je = (s.dynCall_ijj = function () {
            return (je = s.dynCall_ijj = s.asm.dynCall_ijj).apply(
              null,
              arguments
            );
          }),
          Oe = (s.dynCall_ijjiii = function () {
            return (Oe = s.dynCall_ijjiii = s.asm.dynCall_ijjiii).apply(
              null,
              arguments
            );
          }),
          Me = (s.dynCall_ji = function () {
            return (Me = s.dynCall_ji = s.asm.dynCall_ji).apply(
              null,
              arguments
            );
          }),
          Ne = (s.dynCall_jii = function () {
            return (Ne = s.dynCall_jii = s.asm.dynCall_jii).apply(
              null,
              arguments
            );
          }),
          Ie = (s.dynCall_jiii = function () {
            return (Ie = s.dynCall_jiii = s.asm.dynCall_jiii).apply(
              null,
              arguments
            );
          }),
          Pe = (s.dynCall_jiiii = function () {
            return (Pe = s.dynCall_jiiii = s.asm.dynCall_jiiii).apply(
              null,
              arguments
            );
          }),
          Be = (s.dynCall_jiiij = function () {
            return (Be = s.dynCall_jiiij = s.asm.dynCall_jiiij).apply(
              null,
              arguments
            );
          }),
          Ue = (s.dynCall_jiij = function () {
            return (Ue = s.dynCall_jiij = s.asm.dynCall_jiij).apply(
              null,
              arguments
            );
          }),
          xe = (s.dynCall_jijij = function () {
            return (xe = s.dynCall_jijij = s.asm.dynCall_jijij).apply(
              null,
              arguments
            );
          });
        ((s.dynCall_viijii = function () {
          return (s.dynCall_viijii = s.asm.dynCall_viijii).apply(
            null,
            arguments
          );
        }),
          (s.dynCall_iijiiiiii = function () {
            return (s.dynCall_iijiiiiii = s.asm.dynCall_iijiiiiii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iijiiiiiiii = function () {
            return (s.dynCall_iijiiiiiiii = s.asm.dynCall_iijiiiiiiii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iiiijiiiiii = function () {
            return (s.dynCall_iiiijiiiiii = s.asm.dynCall_iiiijiiiiii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iiiijiiiiiiii = function () {
            return (s.dynCall_iiiijiiiiiiii =
              s.asm.dynCall_iiiijiiiiiiii).apply(null, arguments);
          }),
          (s.dynCall_iiiijiii = function () {
            return (s.dynCall_iiiijiii = s.asm.dynCall_iiiijiii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iijii = function () {
            return (s.dynCall_iijii = s.asm.dynCall_iijii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iiijii = function () {
            return (s.dynCall_iiijii = s.asm.dynCall_iiijii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_viijj = function () {
            return (s.dynCall_viijj = s.asm.dynCall_viijj).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_jiji = function () {
            return (s.dynCall_jiji = s.asm.dynCall_jiji).apply(null, arguments);
          }),
          (s.dynCall_viiijii = function () {
            return (s.dynCall_viiijii = s.asm.dynCall_viiijii).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_viijiiiiiiiii = function () {
            return (s.dynCall_viijiiiiiiiii =
              s.asm.dynCall_viijiiiiiiiii).apply(null, arguments);
          }),
          (s.dynCall_viiij = function () {
            return (s.dynCall_viiij = s.asm.dynCall_viiij).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_jfi = function () {
            return (s.dynCall_jfi = s.asm.dynCall_jfi).apply(null, arguments);
          }),
          (s.dynCall_iiij = function () {
            return (s.dynCall_iiij = s.asm.dynCall_iiij).apply(null, arguments);
          }),
          (s.dynCall_iiiiiijj = function () {
            return (s.dynCall_iiiiiijj = s.asm.dynCall_iiiiiijj).apply(
              null,
              arguments
            );
          }),
          (s.dynCall_iiiiijj = function () {
            return (s.dynCall_iiiiijj = s.asm.dynCall_iiiiijj).apply(
              null,
              arguments
            );
          }),
          (s.__growWasmMemory = function () {
            return (s.__growWasmMemory = s.asm.__growWasmMemory).apply(
              null,
              arguments
            );
          }));
        {
          function Ge(t) {
            ((this.what = 'buffer'), (this.id = t));
          }
          function He(t) {
            ((this.what = 'program'),
              (this.id = t),
              (this.shaders = []),
              (this.attributes = {}),
              (this.attributeVec = []),
              (this.nextAttributes = {}),
              (this.nextAttributeVec = []));
          }
          function Xe(t) {
            ((this.what = 'frameBuffer'), (this.id = t));
          }
          function We(t) {
            ((this.what = 'renderBuffer'), (this.id = t));
          }
          function ze(t) {
            ((this.what = 'texture'), (this.id = t), (this.binding = 0));
          }
          function Ve() {
            ((this.DEPTH_BUFFER_BIT = 256),
              (this.STENCIL_BUFFER_BIT = 1024),
              (this.COLOR_BUFFER_BIT = 16384),
              (this.POINTS = 0),
              (this.LINES = 1),
              (this.LINE_LOOP = 2),
              (this.LINE_STRIP = 3),
              (this.TRIANGLES = 4),
              (this.TRIANGLE_STRIP = 5),
              (this.TRIANGLE_FAN = 6),
              (this.ZERO = 0),
              (this.ONE = 1),
              (this.SRC_COLOR = 768),
              (this.ONE_MINUS_SRC_COLOR = 769),
              (this.SRC_ALPHA = 770),
              (this.ONE_MINUS_SRC_ALPHA = 771),
              (this.DST_ALPHA = 772),
              (this.ONE_MINUS_DST_ALPHA = 773),
              (this.DST_COLOR = 774),
              (this.ONE_MINUS_DST_COLOR = 775),
              (this.SRC_ALPHA_SATURATE = 776),
              (this.FUNC_ADD = 32774),
              (this.BLEND_EQUATION = 32777),
              (this.BLEND_EQUATION_RGB = 32777),
              (this.BLEND_EQUATION_ALPHA = 34877),
              (this.FUNC_SUBTRACT = 32778),
              (this.FUNC_REVERSE_SUBTRACT = 32779),
              (this.BLEND_DST_RGB = 32968),
              (this.BLEND_SRC_RGB = 32969),
              (this.BLEND_DST_ALPHA = 32970),
              (this.BLEND_SRC_ALPHA = 32971),
              (this.CONSTANT_COLOR = 32769),
              (this.ONE_MINUS_CONSTANT_COLOR = 32770),
              (this.CONSTANT_ALPHA = 32771),
              (this.ONE_MINUS_CONSTANT_ALPHA = 32772),
              (this.BLEND_COLOR = 32773),
              (this.ARRAY_BUFFER = 34962),
              (this.ELEMENT_ARRAY_BUFFER = 34963),
              (this.ARRAY_BUFFER_BINDING = 34964),
              (this.ELEMENT_ARRAY_BUFFER_BINDING = 34965),
              (this.STREAM_DRAW = 35040),
              (this.STATIC_DRAW = 35044),
              (this.DYNAMIC_DRAW = 35048),
              (this.BUFFER_SIZE = 34660),
              (this.BUFFER_USAGE = 34661),
              (this.CURRENT_VERTEX_ATTRIB = 34342),
              (this.FRONT = 1028),
              (this.BACK = 1029),
              (this.FRONT_AND_BACK = 1032),
              (this.CULL_FACE = 2884),
              (this.BLEND = 3042),
              (this.DITHER = 3024),
              (this.STENCIL_TEST = 2960),
              (this.DEPTH_TEST = 2929),
              (this.SCISSOR_TEST = 3089),
              (this.POLYGON_OFFSET_FILL = 32823),
              (this.SAMPLE_ALPHA_TO_COVERAGE = 32926),
              (this.SAMPLE_COVERAGE = 32928),
              (this.NO_ERROR = 0),
              (this.INVALID_ENUM = 1280),
              (this.INVALID_VALUE = 1281),
              (this.INVALID_OPERATION = 1282),
              (this.OUT_OF_MEMORY = 1285),
              (this.CW = 2304),
              (this.CCW = 2305),
              (this.LINE_WIDTH = 2849),
              (this.ALIASED_POINT_SIZE_RANGE = 33901),
              (this.ALIASED_LINE_WIDTH_RANGE = 33902),
              (this.CULL_FACE_MODE = 2885),
              (this.FRONT_FACE = 2886),
              (this.DEPTH_RANGE = 2928),
              (this.DEPTH_WRITEMASK = 2930),
              (this.DEPTH_CLEAR_VALUE = 2931),
              (this.DEPTH_FUNC = 2932),
              (this.STENCIL_CLEAR_VALUE = 2961),
              (this.STENCIL_FUNC = 2962),
              (this.STENCIL_FAIL = 2964),
              (this.STENCIL_PASS_DEPTH_FAIL = 2965),
              (this.STENCIL_PASS_DEPTH_PASS = 2966),
              (this.STENCIL_REF = 2967),
              (this.STENCIL_VALUE_MASK = 2963),
              (this.STENCIL_WRITEMASK = 2968),
              (this.STENCIL_BACK_FUNC = 34816),
              (this.STENCIL_BACK_FAIL = 34817),
              (this.STENCIL_BACK_PASS_DEPTH_FAIL = 34818),
              (this.STENCIL_BACK_PASS_DEPTH_PASS = 34819),
              (this.STENCIL_BACK_REF = 36003),
              (this.STENCIL_BACK_VALUE_MASK = 36004),
              (this.STENCIL_BACK_WRITEMASK = 36005),
              (this.VIEWPORT = 2978),
              (this.SCISSOR_BOX = 3088),
              (this.COLOR_CLEAR_VALUE = 3106),
              (this.COLOR_WRITEMASK = 3107),
              (this.UNPACK_ALIGNMENT = 3317),
              (this.PACK_ALIGNMENT = 3333),
              (this.MAX_TEXTURE_SIZE = 3379),
              (this.MAX_VIEWPORT_DIMS = 3386),
              (this.SUBPIXEL_BITS = 3408),
              (this.RED_BITS = 3410),
              (this.GREEN_BITS = 3411),
              (this.BLUE_BITS = 3412),
              (this.ALPHA_BITS = 3413),
              (this.DEPTH_BITS = 3414),
              (this.STENCIL_BITS = 3415),
              (this.POLYGON_OFFSET_UNITS = 10752),
              (this.POLYGON_OFFSET_FACTOR = 32824),
              (this.TEXTURE_BINDING_2D = 32873),
              (this.SAMPLE_BUFFERS = 32936),
              (this.SAMPLES = 32937),
              (this.SAMPLE_COVERAGE_VALUE = 32938),
              (this.SAMPLE_COVERAGE_INVERT = 32939),
              (this.COMPRESSED_TEXTURE_FORMATS = 34467),
              (this.DONT_CARE = 4352),
              (this.FASTEST = 4353),
              (this.NICEST = 4354),
              (this.GENERATE_MIPMAP_HINT = 33170),
              (this.BYTE = 5120),
              (this.UNSIGNED_BYTE = 5121),
              (this.SHORT = 5122),
              (this.UNSIGNED_SHORT = 5123),
              (this.INT = 5124),
              (this.UNSIGNED_INT = 5125),
              (this.FLOAT = 5126),
              (this.DEPTH_COMPONENT = 6402),
              (this.ALPHA = 6406),
              (this.RGB = 6407),
              (this.RGBA = 6408),
              (this.LUMINANCE = 6409),
              (this.LUMINANCE_ALPHA = 6410),
              (this.UNSIGNED_SHORT_4_4_4_4 = 32819),
              (this.UNSIGNED_SHORT_5_5_5_1 = 32820),
              (this.UNSIGNED_SHORT_5_6_5 = 33635),
              (this.FRAGMENT_SHADER = 35632),
              (this.VERTEX_SHADER = 35633),
              (this.MAX_VERTEX_ATTRIBS = 34921),
              (this.MAX_VERTEX_UNIFORM_VECTORS = 36347),
              (this.MAX_VARYING_VECTORS = 36348),
              (this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661),
              (this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660),
              (this.MAX_TEXTURE_IMAGE_UNITS = 34930),
              (this.MAX_FRAGMENT_UNIFORM_VECTORS = 36349),
              (this.SHADER_TYPE = 35663),
              (this.DELETE_STATUS = 35712),
              (this.LINK_STATUS = 35714),
              (this.VALIDATE_STATUS = 35715),
              (this.ATTACHED_SHADERS = 35717),
              (this.ACTIVE_UNIFORMS = 35718),
              (this.ACTIVE_ATTRIBUTES = 35721),
              (this.SHADING_LANGUAGE_VERSION = 35724),
              (this.CURRENT_PROGRAM = 35725),
              (this.NEVER = 512),
              (this.LESS = 513),
              (this.EQUAL = 514),
              (this.LEQUAL = 515),
              (this.GREATER = 516),
              (this.NOTEQUAL = 517),
              (this.GEQUAL = 518),
              (this.ALWAYS = 519),
              (this.KEEP = 7680),
              (this.REPLACE = 7681),
              (this.INCR = 7682),
              (this.DECR = 7683),
              (this.INVERT = 5386),
              (this.INCR_WRAP = 34055),
              (this.DECR_WRAP = 34056),
              (this.VENDOR = 7936),
              (this.RENDERER = 7937),
              (this.VERSION = 7938),
              (this.NEAREST = 9728),
              (this.LINEAR = 9729),
              (this.NEAREST_MIPMAP_NEAREST = 9984),
              (this.LINEAR_MIPMAP_NEAREST = 9985),
              (this.NEAREST_MIPMAP_LINEAR = 9986),
              (this.LINEAR_MIPMAP_LINEAR = 9987),
              (this.TEXTURE_MAG_FILTER = 10240),
              (this.TEXTURE_MIN_FILTER = 10241),
              (this.TEXTURE_WRAP_S = 10242),
              (this.TEXTURE_WRAP_T = 10243),
              (this.TEXTURE_2D = 3553),
              (this.TEXTURE = 5890),
              (this.TEXTURE_CUBE_MAP = 34067),
              (this.TEXTURE_BINDING_CUBE_MAP = 34068),
              (this.TEXTURE_CUBE_MAP_POSITIVE_X = 34069),
              (this.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070),
              (this.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071),
              (this.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072),
              (this.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073),
              (this.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074),
              (this.MAX_CUBE_MAP_TEXTURE_SIZE = 34076),
              (this.TEXTURE0 = 33984),
              (this.TEXTURE1 = 33985),
              (this.TEXTURE2 = 33986),
              (this.TEXTURE3 = 33987),
              (this.TEXTURE4 = 33988),
              (this.TEXTURE5 = 33989),
              (this.TEXTURE6 = 33990),
              (this.TEXTURE7 = 33991),
              (this.TEXTURE8 = 33992),
              (this.TEXTURE9 = 33993),
              (this.TEXTURE10 = 33994),
              (this.TEXTURE11 = 33995),
              (this.TEXTURE12 = 33996),
              (this.TEXTURE13 = 33997),
              (this.TEXTURE14 = 33998),
              (this.TEXTURE15 = 33999),
              (this.TEXTURE16 = 34e3),
              (this.TEXTURE17 = 34001),
              (this.TEXTURE18 = 34002),
              (this.TEXTURE19 = 34003),
              (this.TEXTURE20 = 34004),
              (this.TEXTURE21 = 34005),
              (this.TEXTURE22 = 34006),
              (this.TEXTURE23 = 34007),
              (this.TEXTURE24 = 34008),
              (this.TEXTURE25 = 34009),
              (this.TEXTURE26 = 34010),
              (this.TEXTURE27 = 34011),
              (this.TEXTURE28 = 34012),
              (this.TEXTURE29 = 34013),
              (this.TEXTURE30 = 34014),
              (this.TEXTURE31 = 34015),
              (this.ACTIVE_TEXTURE = 34016),
              (this.REPEAT = 10497),
              (this.CLAMP_TO_EDGE = 33071),
              (this.MIRRORED_REPEAT = 33648),
              (this.FLOAT_VEC2 = 35664),
              (this.FLOAT_VEC3 = 35665),
              (this.FLOAT_VEC4 = 35666),
              (this.INT_VEC2 = 35667),
              (this.INT_VEC3 = 35668),
              (this.INT_VEC4 = 35669),
              (this.BOOL = 35670),
              (this.BOOL_VEC2 = 35671),
              (this.BOOL_VEC3 = 35672),
              (this.BOOL_VEC4 = 35673),
              (this.FLOAT_MAT2 = 35674),
              (this.FLOAT_MAT3 = 35675),
              (this.FLOAT_MAT4 = 35676),
              (this.SAMPLER_2D = 35678),
              (this.SAMPLER_3D = 35679),
              (this.SAMPLER_CUBE = 35680),
              (this.VERTEX_ATTRIB_ARRAY_ENABLED = 34338),
              (this.VERTEX_ATTRIB_ARRAY_SIZE = 34339),
              (this.VERTEX_ATTRIB_ARRAY_STRIDE = 34340),
              (this.VERTEX_ATTRIB_ARRAY_TYPE = 34341),
              (this.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922),
              (this.VERTEX_ATTRIB_ARRAY_POINTER = 34373),
              (this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975),
              (this.IMPLEMENTATION_COLOR_READ_TYPE = 35738),
              (this.IMPLEMENTATION_COLOR_READ_FORMAT = 35739),
              (this.COMPILE_STATUS = 35713),
              (this.LOW_FLOAT = 36336),
              (this.MEDIUM_FLOAT = 36337),
              (this.HIGH_FLOAT = 36338),
              (this.LOW_INT = 36339),
              (this.MEDIUM_INT = 36340),
              (this.HIGH_INT = 36341),
              (this.FRAMEBUFFER = 36160),
              (this.RENDERBUFFER = 36161),
              (this.RGBA4 = 32854),
              (this.RGB5_A1 = 32855),
              (this.RGB565 = 36194),
              (this.DEPTH_COMPONENT16 = 33189),
              (this.STENCIL_INDEX = 6401),
              (this.STENCIL_INDEX8 = 36168),
              (this.DEPTH_STENCIL = 34041),
              (this.RENDERBUFFER_WIDTH = 36162),
              (this.RENDERBUFFER_HEIGHT = 36163),
              (this.RENDERBUFFER_INTERNAL_FORMAT = 36164),
              (this.RENDERBUFFER_RED_SIZE = 36176),
              (this.RENDERBUFFER_GREEN_SIZE = 36177),
              (this.RENDERBUFFER_BLUE_SIZE = 36178),
              (this.RENDERBUFFER_ALPHA_SIZE = 36179),
              (this.RENDERBUFFER_DEPTH_SIZE = 36180),
              (this.RENDERBUFFER_STENCIL_SIZE = 36181),
              (this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048),
              (this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049),
              (this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050),
              (this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051),
              (this.COLOR_ATTACHMENT0 = 36064),
              (this.DEPTH_ATTACHMENT = 36096),
              (this.STENCIL_ATTACHMENT = 36128),
              (this.DEPTH_STENCIL_ATTACHMENT = 33306),
              (this.NONE = 0),
              (this.FRAMEBUFFER_COMPLETE = 36053),
              (this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054),
              (this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055),
              (this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057),
              (this.FRAMEBUFFER_UNSUPPORTED = 36061),
              (this.ACTIVE_TEXTURE = 34016),
              (this.FRAMEBUFFER_BINDING = 36006),
              (this.RENDERBUFFER_BINDING = 36007),
              (this.MAX_RENDERBUFFER_SIZE = 34024),
              (this.INVALID_FRAMEBUFFER_OPERATION = 1286),
              (this.UNPACK_FLIP_Y_WEBGL = 37440),
              (this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441),
              (this.CONTEXT_LOST_WEBGL = 37442),
              (this.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443),
              (this.BROWSER_DEFAULT_WEBGL = 37444));
            var t = [],
              e = 1,
              n = {
                texture2D: null,
                arrayBuffer: null,
                elementArrayBuffer: null,
                program: null,
                framebuffer: null,
                activeTexture: this.TEXTURE0,
                generateMipmapHint: this.DONT_CARE,
                blendSrcRGB: this.ONE,
                blendSrcAlpha: this.ONE,
                blendDstRGB: this.ZERO,
                blendDstAlpha: this.ZERO,
                blendEquationRGB: this.FUNC_ADD,
                blendEquationAlpha: this.FUNC_ADD,
                enabledState: {},
              },
              r = [
                this.BLEND,
                this.CULL_FACE,
                this.DEPTH_TEST,
                this.DITHER,
                this.POLYGON_OFFSET_FILL,
                this.SAMPLE_ALPHA_TO_COVERAGE,
                this.SAMPLE_COVERAGE,
                this.SCISSOR_TEST,
                this.STENCIL_TEST,
              ];
            for (var i in r) n.enabledState[r[i]] = !1;
            var o = this;
            function a(t) {
              for (var e in o) if (o[e] === t) return e;
              return null;
            }
            function s(t) {
              return t && 'number' != typeof t
                ? t.slice
                  ? t.slice(0)
                  : new t.constructor(t)
                : t;
            }
            ((this.onmessage = function (t) {
              if ('setPrefetched' !== t.op)
                throw 'weird gl onmessage ' + JSON.stringify(t);
              ((Ve.prototype.prefetchedParameters = t.parameters),
                (Ve.prototype.prefetchedExtensions = t.extensions),
                (Ve.prototype.prefetchedPrecisions = t.precisions),
                ut());
            }),
              (this.getParameter = function (t) {
                if ((S(t), t in this.prefetchedParameters))
                  return this.prefetchedParameters[t];
                switch (t) {
                  case this.TEXTURE_BINDING_2D:
                    return n.texture2D;
                  case this.ARRAY_BUFFER_BINDING:
                    return n.arrayBuffer;
                  case this.ELEMENT_ARRAY_BUFFER_BINDING:
                    return n.elementArrayBuffer;
                  case this.CURRENT_PROGRAM:
                    return n.program;
                  case this.FRAMEBUFFER_BINDING:
                    return n.framebuffer;
                  case this.ACTIVE_TEXTURE:
                    return n.activeTexture;
                  case this.GENERATE_MIPMAP_HINT:
                    return n.generateMipmapHint;
                  case this.BLEND_SRC_RGB:
                    return n.blendSrcRGB;
                  case this.BLEND_SRC_ALPHA:
                    return n.blendSrcAlpha;
                  case this.BLEND_DST_RGB:
                    return n.blendDstRGB;
                  case this.BLEND_DST_ALPHA:
                    return n.blendDstAlpha;
                  case this.BLEND_EQUATION_RGB:
                    return n.blendEquationRGB;
                  case this.BLEND_EQUATION_ALPHA:
                    return n.blendEquationAlpha;
                  default:
                    if (void 0 !== n.enabledState[t]) return n.enabledState[t];
                    throw 'TODO: get parameter ' + t + ' : ' + a(t);
                }
              }),
              (this.getExtension = function (e) {
                if (this.prefetchedExtensions.indexOf(e) < 0) return null;
                switch ((t.push(1, e), e)) {
                  case 'EXT_texture_filter_anisotropic':
                    return {
                      TEXTURE_MAX_ANISOTROPY_EXT: 34046,
                      MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047,
                    };
                  case 'WEBGL_draw_buffers':
                    return {
                      COLOR_ATTACHMENT0_WEBGL: 36064,
                      COLOR_ATTACHMENT1_WEBGL: 36065,
                      COLOR_ATTACHMENT2_WEBGL: 36066,
                      COLOR_ATTACHMENT3_WEBGL: 36067,
                      COLOR_ATTACHMENT4_WEBGL: 36068,
                      COLOR_ATTACHMENT5_WEBGL: 36069,
                      COLOR_ATTACHMENT6_WEBGL: 36070,
                      COLOR_ATTACHMENT7_WEBGL: 36071,
                      COLOR_ATTACHMENT8_WEBGL: 36072,
                      COLOR_ATTACHMENT9_WEBGL: 36073,
                      COLOR_ATTACHMENT10_WEBGL: 36074,
                      COLOR_ATTACHMENT11_WEBGL: 36075,
                      COLOR_ATTACHMENT12_WEBGL: 36076,
                      COLOR_ATTACHMENT13_WEBGL: 36077,
                      COLOR_ATTACHMENT14_WEBGL: 36078,
                      COLOR_ATTACHMENT15_WEBGL: 36079,
                      DRAW_BUFFER0_WEBGL: 34853,
                      DRAW_BUFFER1_WEBGL: 34854,
                      DRAW_BUFFER2_WEBGL: 34855,
                      DRAW_BUFFER3_WEBGL: 34856,
                      DRAW_BUFFER4_WEBGL: 34857,
                      DRAW_BUFFER5_WEBGL: 34858,
                      DRAW_BUFFER6_WEBGL: 34859,
                      DRAW_BUFFER7_WEBGL: 34860,
                      DRAW_BUFFER8_WEBGL: 34861,
                      DRAW_BUFFER9_WEBGL: 34862,
                      DRAW_BUFFER10_WEBGL: 34863,
                      DRAW_BUFFER11_WEBGL: 34864,
                      DRAW_BUFFER12_WEBGL: 34865,
                      DRAW_BUFFER13_WEBGL: 34866,
                      DRAW_BUFFER14_WEBGL: 34867,
                      DRAW_BUFFER15_WEBGL: 34868,
                      MAX_COLOR_ATTACHMENTS_WEBGL: 36063,
                      MAX_DRAW_BUFFERS_WEBGL: 34852,
                      drawBuffersWEBGL: function (t) {
                        o.drawBuffersWEBGL(t);
                      },
                    };
                  case 'OES_standard_derivatives':
                    return { FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 35723 };
                }
                return !0;
              }),
              (this.getSupportedExtensions = function () {
                return this.prefetchedExtensions;
              }),
              (this.getShaderPrecisionFormat = function (t, e) {
                return this.prefetchedPrecisions[t][e];
              }),
              (this.enable = function (e) {
                (t.push(2, e), (n.enabledState[e] = !0));
              }),
              (this.isEnabled = function (t) {
                return n.enabledState[t];
              }),
              (this.disable = function (e) {
                (t.push(3, e), (n.enabledState[e] = !1));
              }),
              (this.clear = function (e) {
                t.push(4, e);
              }),
              (this.clearColor = function (e, n, r, i) {
                t.push(5, e, n, r, i);
              }),
              (this.createShader = function (n) {
                var r = e++;
                return (t.push(6, n, r), { id: r, what: 'shader', type: n });
              }),
              (this.deleteShader = function (e) {
                e && t.push(7, e.id);
              }),
              (this.shaderSource = function (e, n) {
                ((e.source = n), t.push(8, e.id, n));
              }),
              (this.compileShader = function (e) {
                t.push(9, e.id);
              }),
              (this.getShaderInfoLog = function (t) {
                return '';
              }),
              (this.createProgram = function () {
                var n = e++;
                return (t.push(10, n), new He(n));
              }),
              (this.deleteProgram = function (e) {
                e && t.push(11, e.id);
              }),
              (this.attachShader = function (e, n) {
                (e.shaders.push(n), t.push(12, e.id, n.id));
              }),
              (this.bindAttribLocation = function (e, n, r) {
                ((e.nextAttributes[r] = {
                  what: 'attribute',
                  name: r,
                  size: -1,
                  location: n,
                  type: '?',
                }),
                  (e.nextAttributeVec[n] = r),
                  t.push(13, e.id, n, r));
              }),
              (this.getAttribLocation = function (t, e) {
                return e in t.attributes ? t.attributes[e].location : -1;
              }),
              (this.linkProgram = function (e) {
                function n(t) {
                  switch (t) {
                    case 'bool':
                      return o.BOOL;
                    case 'int':
                      return o.INT;
                    case 'uint':
                      return o.UNSIGNED_INT;
                    case 'float':
                      return o.FLOAT;
                    case 'vec2':
                      return o.FLOAT_VEC2;
                    case 'vec3':
                      return o.FLOAT_VEC3;
                    case 'vec4':
                      return o.FLOAT_VEC4;
                    case 'ivec2':
                      return o.INT_VEC2;
                    case 'ivec3':
                      return o.INT_VEC3;
                    case 'ivec4':
                      return o.INT_VEC4;
                    case 'bvec2':
                      return o.BOOL_VEC2;
                    case 'bvec3':
                      return o.BOOL_VEC3;
                    case 'bvec4':
                      return o.BOOL_VEC4;
                    case 'mat2':
                      return o.FLOAT_MAT2;
                    case 'mat3':
                      return o.FLOAT_MAT3;
                    case 'mat4':
                      return o.FLOAT_MAT4;
                    case 'sampler2D':
                      return o.SAMPLER_2D;
                    case 'sampler3D':
                      return o.SAMPLER_3D;
                    case 'samplerCube':
                      return o.SAMPLER_CUBE;
                    default:
                      throw 'not yet recognized type text: ' + t;
                  }
                }
                function r(t, e, r, i) {
                  var o = t.source,
                    a = (o = o.replace(/\n/g, '|\n')).match(
                      new RegExp(e + '\\s+\\w+\\s+[\\w,\\s[\\]]+;', 'g')
                    );
                  a &&
                    a.forEach(function (t) {
                      var o = new RegExp(
                        e + '\\s+(\\w+)\\s+([\\w,\\s[\\]]+);'
                      ).exec(t);
                      (S(o),
                        o[2]
                          .split(',')
                          .map(function (t) {
                            return (t = t.trim()).search(/\s/) >= 0 ? '' : t;
                          })
                          .filter(function (t) {
                            return !!t;
                          })
                          .forEach(function (t) {
                            var a = 1,
                              s = t.indexOf('['),
                              u = t;
                            if (s >= 0) {
                              var c = t.indexOf(']');
                              ((a = parseInt(t.substring(s + 1, c))),
                                (u = (t = t.substr(0, s)) + '[0]'));
                            }
                            r[t] ||
                              ((r[t] = {
                                what: e,
                                name: u,
                                size: a,
                                location: -1,
                                type: n(o[1]),
                              }),
                              i && i.push(t));
                          }));
                    });
                }
                ((e.uniforms = {}),
                  (e.uniformVec = []),
                  (e.attributes = e.nextAttributes),
                  (e.attributeVec = e.nextAttributeVec),
                  (e.nextAttributes = {}),
                  (e.nextAttributeVec = []));
                var i = {};
                for (var a in (e.shaders.forEach(function (t) {
                  (r(t, 'uniform', e.uniforms, e.uniformVec),
                    r(t, 'attribute', i, null));
                }),
                i)) {
                  if (!(a in e.attributes)) {
                    var s = e.attributeVec.length;
                    ((e.attributes[a] = {
                      what: 'attribute',
                      name: a,
                      size: -1,
                      location: s,
                      type: '?',
                    }),
                      (e.attributeVec[s] = a),
                      t.push(13, e.id, s, a));
                  }
                  ((e.attributes[a].size = i[a].size),
                    (e.attributes[a].type = i[a].type));
                }
                t.push(14, e.id);
              }),
              (this.getProgramParameter = function (e, n) {
                switch (n) {
                  case this.ACTIVE_UNIFORMS:
                    return e.uniformVec.length;
                  case this.ACTIVE_ATTRIBUTES:
                    return e.attributeVec.length;
                  case this.LINK_STATUS:
                    return (t.push(15, e.id, n), !0);
                  default:
                    throw 'bad getProgramParameter ' + a(n);
                }
              }),
              (this.getActiveAttrib = function (t, e) {
                var n = t.attributeVec[e];
                return n ? t.attributes[n] : null;
              }),
              (this.getActiveUniform = function (t, e) {
                var n = t.uniformVec[e];
                return n ? t.uniforms[n] : null;
              }),
              (this.getUniformLocation = function (n, r) {
                var i = r,
                  o = -1,
                  a = r.indexOf('[');
                if (a >= 0) {
                  var s = r.indexOf(']');
                  ((o = parseInt(r.substring(a + 1, s))), (r = r.substr(0, a)));
                }
                if (!(r in n.uniforms)) return null;
                var u = e++;
                return (
                  t.push(16, n.id, i, u),
                  { what: 'location', uniform: n.uniforms[r], id: u, index: o }
                );
              }),
              (this.getProgramInfoLog = function (t) {
                return '';
              }),
              (this.useProgram = function (e) {
                (t.push(17, e ? e.id : 0), (n.program = e));
              }),
              (this.uniform1i = function (e, n) {
                e && t.push(18, e.id, n);
              }),
              (this.uniform1f = function (e, n) {
                e && t.push(19, e.id, n);
              }),
              (this.uniform3fv = function (e, n) {
                e && t.push(20, e.id, new Float32Array(n));
              }),
              (this.uniform4f = function (e, n, r, i, o) {
                e && t.push(21, e.id, new Float32Array([n, r, i, o]));
              }),
              (this.uniform4fv = function (e, n) {
                e && t.push(21, e.id, new Float32Array(n));
              }),
              (this.uniformMatrix4fv = function (e, n, r) {
                e && t.push(22, e.id, n, new Float32Array(r));
              }),
              (this.vertexAttrib4fv = function (e, n) {
                t.push(23, e, new Float32Array(n));
              }),
              (this.createBuffer = function () {
                var n = e++;
                return (t.push(24, n), new Ge(n));
              }),
              (this.deleteBuffer = function (e) {
                e && t.push(25, e.id);
              }),
              (this.bindBuffer = function (e, r) {
                switch ((t.push(26, e, r ? r.id : 0), e)) {
                  case this.ARRAY_BUFFER_BINDING:
                    n.arrayBuffer = r;
                    break;
                  case this.ELEMENT_ARRAY_BUFFER_BINDING:
                    n.elementArrayBuffer = r;
                }
              }),
              (this.bufferData = function (e, n, r) {
                t.push(27, e, s(n), r);
              }),
              (this.bufferSubData = function (e, n, r) {
                t.push(28, e, n, s(r));
              }),
              (this.viewport = function (e, n, r, i) {
                t.push(29, e, n, r, i);
              }),
              (this.vertexAttribPointer = function (e, n, r, i, o, a) {
                t.push(30, e, n, r, i, o, a);
              }),
              (this.enableVertexAttribArray = function (e) {
                t.push(31, e);
              }),
              (this.disableVertexAttribArray = function (e) {
                t.push(32, e);
              }),
              (this.drawArrays = function (e, n, r) {
                t.push(33, e, n, r);
              }),
              (this.drawElements = function (e, n, r, i) {
                t.push(34, e, n, r, i);
              }),
              (this.getError = function () {
                return (t.push(35), this.NO_ERROR);
              }),
              (this.createTexture = function () {
                var n = e++;
                return (t.push(36, n), new ze(n));
              }),
              (this.deleteTexture = function (e) {
                e && (t.push(37, e.id), (e.id = 0));
              }),
              (this.isTexture = function (t) {
                return t && 'texture' === t.what && t.id > 0 && t.binding;
              }),
              (this.bindTexture = function (e, r) {
                (e === o.TEXTURE_2D && (n.texture2D = r),
                  r && (r.binding = e),
                  t.push(38, e, r ? r.id : 0));
              }),
              (this.texParameteri = function (e, n, r) {
                t.push(39, e, n, r);
              }),
              (this.texImage2D = function (e, n, r, i, o, a, u, c, l) {
                if (void 0 === l) {
                  ((u = i),
                    (c = o),
                    S((l = a) instanceof $e),
                    S(r === u && u === this.RGBA),
                    S(c === this.UNSIGNED_BYTE));
                  var f = l.data;
                  ((i = f.width),
                    (o = f.height),
                    (a = 0),
                    (l = new Uint8Array(f.data)));
                }
                t.push(40, e, n, r, i, o, a, u, c, s(l));
              }),
              (this.compressedTexImage2D = function (e, n, r, i, o, a, u) {
                t.push(41, e, n, r, i, o, a, s(u));
              }),
              (this.activeTexture = function (e) {
                (t.push(42, e), (n.activeTexture = e));
              }),
              (this.getShaderParameter = function (e, n) {
                switch (n) {
                  case this.SHADER_TYPE:
                    return e.type;
                  case this.COMPILE_STATUS:
                    return (t.push(43, e.id, n), !0);
                  default:
                    throw 'unsupported getShaderParameter ' + n;
                }
              }),
              (this.clearDepth = function (e) {
                t.push(44, e);
              }),
              (this.depthFunc = function (e) {
                t.push(45, e);
              }),
              (this.frontFace = function (e) {
                t.push(46, e);
              }),
              (this.cullFace = function (e) {
                t.push(47, e);
              }),
              (this.readPixels = function (t) {
                ct('readPixels is impossible, we are async GL');
              }),
              (this.pixelStorei = function (e, n) {
                t.push(48, e, n);
              }),
              (this.depthMask = function (e) {
                t.push(49, e);
              }),
              (this.depthRange = function (e, n) {
                t.push(50, e, n);
              }),
              (this.blendFunc = function (e, r) {
                (t.push(51, e, r),
                  (n.blendSrcRGB = n.blendSrcAlpha = e),
                  (n.blendDstRGB = n.blendDstAlpha = r));
              }),
              (this.scissor = function (e, n, r, i) {
                t.push(52, e, n, r, i);
              }),
              (this.colorMask = function (e, n, r, i) {
                t.push(53, e, n, r, i);
              }),
              (this.lineWidth = function (e) {
                t.push(54, e);
              }),
              (this.createFramebuffer = function () {
                var n = e++;
                return (t.push(55, n), new Xe(n));
              }),
              (this.deleteFramebuffer = function (e) {
                e && t.push(56, e.id);
              }),
              (this.bindFramebuffer = function (e, r) {
                (t.push(57, e, r ? r.id : 0), (n.framebuffer = r));
              }),
              (this.framebufferTexture2D = function (e, n, r, i, o) {
                t.push(58, e, n, r, i ? i.id : 0, o);
              }),
              (this.checkFramebufferStatus = function (t) {
                return this.FRAMEBUFFER_COMPLETE;
              }),
              (this.createRenderbuffer = function () {
                var n = e++;
                return (t.push(59, n), new We(n));
              }),
              (this.deleteRenderbuffer = function (e) {
                e && t.push(60, e.id);
              }),
              (this.bindRenderbuffer = function (e, n) {
                t.push(61, e, n ? n.id : 0);
              }),
              (this.renderbufferStorage = function (e, n, r, i) {
                t.push(62, e, n, r, i);
              }),
              (this.framebufferRenderbuffer = function (e, n, r, i) {
                t.push(63, e, n, r, i ? i.id : 0);
              }),
              (this.debugPrint = function (e) {
                t.push(64, e);
              }),
              (this.hint = function (e, r) {
                (t.push(65, e, r),
                  e == this.GENERATE_MIPMAP_HINT && (n.generateMipmapHint = r));
              }),
              (this.blendEquation = function (e) {
                (t.push(66, e),
                  (n.blendEquationRGB = n.blendEquationAlpha = e));
              }),
              (this.generateMipmap = function (e) {
                t.push(67, e);
              }),
              (this.uniformMatrix3fv = function (e, n, r) {
                e && t.push(68, e.id, n, new Float32Array(r));
              }),
              (this.stencilMask = function (e) {
                t.push(69, e);
              }),
              (this.clearStencil = function (e) {
                t.push(70, e);
              }),
              (this.texSubImage2D = function (e, n, r, i, o, a, u, c, l) {
                if (void 0 === l) {
                  var f = u;
                  ((u = o),
                    (c = a),
                    S((l = f) instanceof $e),
                    S(u === this.RGBA),
                    S(c === this.UNSIGNED_BYTE));
                  var h = l.data;
                  ((o = h.width), (a = h.height), (l = new Uint8Array(h.data)));
                }
                t.push(71, e, n, r, i, o, a, u, c, s(l));
              }),
              (this.uniform3f = function (e, n, r, i) {
                e && t.push(72, e.id, n, r, i);
              }),
              (this.blendFuncSeparate = function (e, r, i, o) {
                (t.push(73, e, r, i, o),
                  (n.blendSrcRGB = e),
                  (n.blendSrcAlpha = i),
                  (n.blendDstRGB = r),
                  (n.blendDstAlpha = o));
              }),
              (this.uniform2fv = function (e, n) {
                e && t.push(74, e.id, new Float32Array(n));
              }),
              (this.texParameterf = function (e, n, r) {
                t.push(75, e, n, r);
              }),
              (this.isContextLost = function () {
                return (t.push(76), !1);
              }),
              (this.isProgram = function (t) {
                return t && 'program' === t.what;
              }),
              (this.blendEquationSeparate = function (e, r) {
                (t.push(77, e, r),
                  (n.blendEquationRGB = e),
                  (n.blendEquationAlpha = r));
              }),
              (this.stencilFuncSeparate = function (e, n, r, i) {
                t.push(78, e, n, r, i);
              }),
              (this.stencilOpSeparate = function (e, n, r, i) {
                t.push(79, e, n, r, i);
              }),
              (this.drawBuffersWEBGL = function (e) {
                t.push(80, e);
              }),
              (this.uniform1iv = function (e, n) {
                e && t.push(81, e.id, new Int32Array(n));
              }),
              (this.uniform1fv = function (e, n) {
                e && t.push(82, e.id, new Float32Array(n));
              }),
              new qe('server (theoretical)'),
              new qe('server (client-throttled)'));
            var u = !1;
            function c() {
              (t.length > 0 &&
                (postMessage({ target: 'gl', op: 'render', commandBuffer: t }),
                (t = [])),
                (u = !0));
            }
            (S(!vt.doSwapBuffers), (vt.doSwapBuffers = c));
            var l = tn.requestAnimationFrame;
            tn.requestAnimationFrame = function (t) {
              l(function () {
                !1 !==
                (function () {
                  if (Math.abs(un - cn) >= 4) return !1;
                })()
                  ? ((u = !1), t(), u || c())
                  : tn.requestAnimationFrame(t);
              });
            };
          }
          if (
            ((Ve.prototype.prefetchedParameters = {}),
            (Ve.prototype.prefetchedExtensions = {}),
            (Ve.prototype.prefetchedPrecisions = {}),
            void 0 === Ye)
          )
            var Ye = {
              log: function (t) {
                'function' == typeof dump && dump('log: ' + t + '\n');
              },
              debug: function (t) {
                'function' == typeof dump && dump('debug: ' + t + '\n');
              },
              info: function (t) {
                'function' == typeof dump && dump('info: ' + t + '\n');
              },
              warn: function (t) {
                'function' == typeof dump && dump('warn: ' + t + '\n');
              },
              error: function (t) {
                'function' == typeof dump && dump('error: ' + t + '\n');
              },
            };
          function qe(t) {
            var e = 0,
              n = 0,
              r = 0;
            this.tick = function () {
              var i = Date.now();
              (e > 0 &&
                ((n = 0.99 * n + 0.01 * (i - e)),
                60 == r++ &&
                  ((r = 0), dump(t + ' fps: ' + (1e3 / n).toFixed(2) + '\n'))),
                (e = i));
            };
          }
          function Ke() {
            throw 'TODO: Element';
          }
          function Ze() {
            ((this.addProperty = function () {}),
              (this.removeProperty = function () {}),
              (this.setProperty = function () {}));
          }
          var Je = {
            nextId: 1,
            cache: {},
            add: function (t) {
              ((t.id = this.nextId++), (this.cache[t.id] = t));
            },
          };
          function Qe() {
            ((this.listeners = {}),
              (this.addEventListener = function (t, e) {
                (this.listeners[t] || (this.listeners[t] = []),
                  this.listeners[t].push(e));
              }),
              (this.removeEventListener = function (t, e) {
                var n = this.listeners[t];
                if (n) {
                  var r = n.indexOf(e);
                  r < 0 || n.splice(r, 1);
                }
              }),
              (this.fireEvent = function (t) {
                ((t.preventDefault = function () {}),
                  t.type in this.listeners &&
                    this.listeners[t.type].forEach(function (e) {
                      e(t);
                    }));
              }));
          }
          function $e() {
            (Je.add(this), Qe.call(this));
            var t = '';
            Object.defineProperty(this, 'src', {
              set: function (e) {
                ((t = e),
                  S(this.id),
                  postMessage({
                    target: 'Image',
                    method: 'src',
                    src: t,
                    id: this.id,
                  }));
              },
              get: function () {
                return t;
              },
            });
          }
          (($e.prototype.onload = function () {}),
            ($e.prototype.onerror = function () {}));
          var tn = this,
            en = new Qe();
          for (var nn in en) tn[nn] = en[nn];
          ((tn.close = function () {
            postMessage({ target: 'window', method: 'close' });
          }),
            (tn.alert = function (t) {
              for (v('alert forever: ' + t); ; );
            }),
            (tn.scrollX = tn.scrollY = 0),
            (tn.WebGLRenderingContext = Ve),
            (tn.requestAnimationFrame =
              ((ee = 0),
              function (t) {
                var e = Date.now();
                if (0 === ee) ee = e + 1e3 / 60;
                else for (; e + 2 >= ee; ) ee += 1e3 / 60;
                var n = Math.max(ee - e, 0);
                setTimeout(t, n);
              })));
          var rn = new Ve(),
            on = new Qe();
          function an() {
            E('faking Audio elements, no actual sound will play');
          }
          ((on.createElement = function (t) {
            if ('canvas' === t) {
              var e = new Qe();
              ((e.ensureData = function () {
                (e.data &&
                  e.data.width === e.width &&
                  e.data.height === e.height) ||
                  ((e.data = {
                    width: e.width,
                    height: e.height,
                    data: new Uint8Array(e.width * e.height * 4),
                  }),
                  e === s.canvas &&
                    postMessage({
                      target: 'canvas',
                      op: 'resize',
                      width: e.width,
                      height: e.height,
                    }));
              }),
                (e.getContext = function (t, n) {
                  return (
                    e === s.canvas &&
                      postMessage({
                        target: 'canvas',
                        op: 'getContext',
                        type: t,
                        attributes: n,
                      }),
                    '2d' === t
                      ? {
                          getImageData: function (t, n, r, i) {
                            return (
                              S(
                                0 == t &&
                                  0 == n &&
                                  r == e.width &&
                                  i == e.height
                              ),
                              e.ensureData(),
                              {
                                width: e.data.width,
                                height: e.data.height,
                                data: new Uint8Array(e.data.data),
                              }
                            );
                          },
                          putImageData: function (t, n, r) {
                            (e.ensureData(),
                              S(
                                0 == n &&
                                  0 == r &&
                                  t.width == e.width &&
                                  t.height == e.height
                              ),
                              e.data.data.set(t.data),
                              e === s.canvas &&
                                postMessage({
                                  target: 'canvas',
                                  op: 'render',
                                  image: e.data,
                                }));
                          },
                          drawImage: function (t, n, r, i, o, a, u, c, l) {
                            (S(!(n || r || a || u)),
                              S(i === c && o === l),
                              S(e.width === i || void 0 === i),
                              S(e.height === o || void 0 === o),
                              S(t.width === e.width && t.height === e.height),
                              e.ensureData(),
                              e.data.data.set(t.data.data),
                              e === s.canvas &&
                                postMessage({
                                  target: 'canvas',
                                  op: 'render',
                                  image: e.data,
                                }));
                          },
                        }
                      : rn
                  );
                }),
                (e.boundingClientRect = {}),
                (e.getBoundingClientRect = function () {
                  return {
                    width: e.boundingClientRect.width,
                    height: e.boundingClientRect.height,
                    top: e.boundingClientRect.top,
                    left: e.boundingClientRect.left,
                    bottom: e.boundingClientRect.bottom,
                    right: e.boundingClientRect.right,
                  };
                }),
                (e.style = new Ze()),
                (e.exitPointerLock = function () {}),
                (e.width_ = e.width_ || 0),
                (e.height_ = e.height_ || 0),
                Object.defineProperty(e, 'width', {
                  set: function (t) {
                    ((e.width_ = t),
                      e === s.canvas &&
                        postMessage({
                          target: 'canvas',
                          op: 'resize',
                          width: e.width_,
                          height: e.height_,
                        }));
                  },
                  get: function () {
                    return e.width_;
                  },
                }),
                Object.defineProperty(e, 'height', {
                  set: function (t) {
                    ((e.height_ = t),
                      e === s.canvas &&
                        postMessage({
                          target: 'canvas',
                          op: 'resize',
                          width: e.width_,
                          height: e.height_,
                        }));
                  },
                  get: function () {
                    return e.height_;
                  },
                }));
              var n = {
                parentCanvas: e,
                removeProperty: function () {},
                setProperty: function () {},
              };
              return (
                Object.defineProperty(n, 'cursor', {
                  set: function (t) {
                    (n.cursor_ && n.cursor_ === t) ||
                      ((n.cursor_ = t),
                      n.parentCanvas === s.canvas &&
                        postMessage({
                          target: 'canvas',
                          op: 'setObjectProperty',
                          object: 'style',
                          property: 'cursor',
                          value: n.cursor_,
                        }));
                  },
                  get: function () {
                    return n.cursor_;
                  },
                }),
                (e.style = n),
                e
              );
            }
            throw 'document.createElement ' + t;
          }),
            (on.getElementById = function (t) {
              if ('canvas' === t || 'application-canvas' === t) return s.canvas;
              throw 'document.getElementById failed on ' + t;
            }),
            (on.querySelector = function (t) {
              if (
                '#canvas' === t ||
                '#application-canvas' === t ||
                'canvas' === t ||
                'application-canvas' === t
              )
                return s.canvas;
              throw 'document.querySelector failed on ' + t;
            }),
            (on.documentElement = {}),
            (on.styleSheets = [
              {
                cssRules: [],
                insertRule: function (t, e) {
                  this.cssRules.splice(e, 0, t);
                },
              },
            ]),
            (on.URL =
              'http://worker.not.yet.ready.wait.for.window.onload?fake'),
            (an.prototype = new Qe()),
            Object.defineProperty(an.prototype, 'src', {
              set: function (t) {
                'd' !== t[0] && this.onerror();
              },
            }),
            (an.prototype.play = function () {}),
            (an.prototype.pause = function () {}),
            (an.prototype.cloneNode = function () {
              return new an();
            }));
          var sn = { width: 0, height: 0 };
          ((s.canvas = on.createElement('canvas')),
            (s.setStatus = function () {}),
            (g = function (t) {
              postMessage({ target: 'stdout', content: t });
            }),
            (v = function (t) {
              postMessage({ target: 'stderr', content: t });
            }));
          var un = 0,
            cn = 0,
            ln = s.postMainLoop;
          ((s.postMainLoop = function () {
            (ln && ln(),
              postMessage({ target: 'tick', id: un++ }),
              (commandBuffer = []));
          }),
            st(),
            st());
          var fn = null,
            hn = null;
          function dn() {
            _n
              ? (S(fn && fn.length > 0),
                (hn = null),
                fn.forEach(function (t) {
                  onmessage(t);
                }),
                (fn = null))
              : (hn = setTimeout(dn, 100));
          }
          ((onmessage = function (t) {
            if (!_n && !t.data.preMain)
              return (
                fn || ((fn = []), (hn = setTimeout(dn, 100))),
                void fn.push(t)
              );
            switch ((_n && hn && (clearTimeout(hn), dn()), t.data.target)) {
              case 'document':
                on.fireEvent(t.data.event);
                break;
              case 'window':
                tn.fireEvent(t.data.event);
                break;
              case 'canvas':
                if (t.data.event) s.canvas.fireEvent(t.data.event);
                else {
                  if (!t.data.boundingClientRect) throw 'ey?';
                  s.canvas.boundingClientRect = t.data.boundingClientRect;
                }
                break;
              case 'gl':
                rn.onmessage(t.data);
                break;
              case 'tock':
                cn = t.data.id;
                break;
              case 'Image':
                var e = Je.cache[t.data.id];
                switch (t.data.method) {
                  case 'onload':
                    ((e.width = t.data.width),
                      (e.height = t.data.height),
                      (e.data = {
                        width: e.width,
                        height: e.height,
                        data: t.data.data,
                      }),
                      (e.complete = !0),
                      e.onload());
                    break;
                  case 'onerror':
                    e.onerror({ srcElement: e });
                }
                break;
              case 'IDBStore':
                (S('response' === t.data.method),
                  S(IDBStore.pending),
                  IDBStore.pending(t.data));
                break;
              case 'worker-init':
                ((s.canvas = on.createElement('canvas')),
                  (sn.width = s.canvas.width_ = t.data.width),
                  (sn.height = s.canvas.height_ = t.data.height),
                  (s.canvas.boundingClientRect = t.data.boundingClientRect),
                  (on.URL = t.data.URL),
                  tn.fireEvent({ type: 'load' }),
                  ut());
                break;
              case 'custom':
                if (!s.onCustomMessage)
                  throw 'Custom message received but worker Module.onCustomMessage not implemented.';
                s.onCustomMessage(t);
                break;
              case 'setimmediate':
                s.setImmediates && s.setImmediates.shift()();
                break;
              default:
                throw 'wha? ' + t.data.target;
            }
          }),
            'undefined' != typeof specialHTMLTargets &&
              (specialHTMLTargets = [0, on, tn]));
        }
        function pn(t) {
          ((this.name = 'ExitStatus'),
            (this.message = 'Program terminated with exit(' + t + ')'),
            (this.status = t));
        }
        ((s.ccall = L),
          (s.cwrap = function (t, e, n, r) {
            var i = (n = n || []).every(function (t) {
              return 'number' === t;
            });
            return 'string' !== e && i && !r
              ? F(t)
              : function () {
                  return L(t, e, n, arguments);
                };
          }),
          (s.setValue = function (t, e, n, r) {
            switch (
              ('*' === (n = n || 'i8').charAt(n.length - 1) && (n = 'i32'), n)
            ) {
              case 'i1':
              case 'i8':
                D[0 | t] = e;
                break;
              case 'i16':
                O[t >> 1] = e;
                break;
              case 'i32':
                N[t >> 2] = e;
                break;
              case 'i64':
                ((dt = [
                  e >>> 0,
                  ((ht = e),
                  +tt(ht) >= 1
                    ? ht > 0
                      ? (0 | rt(+nt(ht / 4294967296), 4294967295)) >>> 0
                      : ~~+et((ht - +(~~ht >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (N[t >> 2] = dt[0]),
                  (N[(t + 4) >> 2] = dt[1]));
                break;
              case 'float':
                P[t >> 2] = e;
                break;
              case 'double':
                B[t >> 3] = e;
                break;
              default:
                ct('invalid type for setValue: ' + n);
            }
          }),
          (s.getValue = function (t, e, n) {
            switch (
              ('*' === (e = e || 'i8').charAt(e.length - 1) && (e = 'i32'), e)
            ) {
              case 'i1':
              case 'i8':
                return D[0 | t];
              case 'i16':
                return O[t >> 1];
              case 'i32':
              case 'i64':
                return N[t >> 2];
              case 'float':
                return P[t >> 2];
              case 'double':
                return B[t >> 3];
              default:
                ct('invalid type for getValue: ' + e);
            }
            return null;
          }),
          (s.UTF8ToString = G),
          (s.addRunDependency = st),
          (s.removeRunDependency = ut),
          (s.FS_createFolder = Ut.createFolder),
          (s.FS_createPath = Ut.createPath),
          (s.FS_createDataFile = Ut.createDataFile),
          (s.FS_createPreloadedFile = Ut.createPreloadedFile),
          (s.FS_createLazyFile = Ut.createLazyFile),
          (s.FS_createLink = Ut.createLink),
          (s.FS_createDevice = Ut.createDevice),
          (s.FS_unlink = Ut.unlink),
          (s.AsciiToString = function (t) {
            for (var e = ''; ; ) {
              var n = j[0 | t++];
              if (!n) return e;
              e += String.fromCharCode(n);
            }
          }));
        var _n = !1;
        function mn(t) {
          function e() {
            ne ||
              ((ne = !0),
              (s.calledRun = !0),
              k ||
                (s.noFSInit || Ut.init.initialized || Ut.init(),
                Pt.init(),
                (Gt.root = Ut.mount(Gt, {}, null)),
                Et(J),
                (Ut.ignorePermissions = !1),
                Et(Q),
                s.onRuntimeInitialized && s.onRuntimeInitialized(),
                (function () {
                  if (s.postRun)
                    for (
                      'function' == typeof s.postRun &&
                      (s.postRun = [s.postRun]);
                      s.postRun.length;

                    )
                      ((t = s.postRun.shift()), $.unshift(t));
                  var t;
                  Et($);
                })()));
          }
          ((t = t || d),
            it > 0 ||
              ((function () {
                if (s.preRun)
                  for (
                    'function' == typeof s.preRun && (s.preRun = [s.preRun]);
                    s.preRun.length;

                  )
                    ((t = s.preRun.shift()), Z.unshift(t));
                var t;
                Et(Z);
              })(),
              it > 0 ||
                (s.setStatus
                  ? (s.setStatus('Running...'),
                    setTimeout(function () {
                      (setTimeout(function () {
                        s.setStatus('');
                      }, 1),
                        e());
                    }, 1))
                  : e())));
        }
        if (
          ((at = function t() {
            (ne || mn(), ne || (at = t));
          }),
          (s.run = mn),
          s.preInit)
        )
          for (
            'function' == typeof s.preInit && (s.preInit = [s.preInit]);
            s.preInit.length > 0;

          )
            s.preInit.pop()();
        ((w = !0), mn());
      },
      452: (t) => {
        var e = (function (t) {
          'use strict';
          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = 'function' == typeof Symbol ? Symbol : {},
            a = o.iterator || '@@iterator',
            s = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function l(t, e, n, r) {
            var o = e && e.prototype instanceof g ? e : g,
              a = Object.create(o.prototype),
              s = new C(r || []);
            return (i(a, '_invoke', { value: k(t, n, s) }), a);
          }
          function f(t, e, n) {
            try {
              return { type: 'normal', arg: t.call(e, n) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          t.wrap = l;
          var h = 'suspendedStart',
            d = 'suspendedYield',
            p = 'executing',
            _ = 'completed',
            m = {};
          function g() {}
          function v() {}
          function E() {}
          var y = {};
          c(y, a, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(D([])));
          T && T !== n && r.call(T, a) && (y = T);
          var R = (E.prototype = g.prototype = Object.create(y));
          function A(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function b(t, e) {
            function n(i, o, a, s) {
              var u = f(t[i], t, o);
              if ('throw' !== u.type) {
                var c = u.arg,
                  l = c.value;
                return l && 'object' == typeof l && r.call(l, '__await')
                  ? e.resolve(l.__await).then(
                      function (t) {
                        n('next', t, a, s);
                      },
                      function (t) {
                        n('throw', t, a, s);
                      }
                    )
                  : e.resolve(l).then(
                      function (t) {
                        ((c.value = t), a(c));
                      },
                      function (t) {
                        return n('throw', t, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var o;
            i(this, '_invoke', {
              value: function (t, r) {
                function i() {
                  return new e(function (e, i) {
                    n(t, r, e, i);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function k(t, n, r) {
            var i = h;
            return function (o, a) {
              if (i === p) throw new Error('Generator is already running');
              if (i === _) {
                if ('throw' === o) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = a; ; ) {
                var s = r.delegate;
                if (s) {
                  var u = S(s, r);
                  if (u) {
                    if (u === m) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (i === h) throw ((i = _), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                i = p;
                var c = f(t, n, r);
                if ('normal' === c.type) {
                  if (((i = r.done ? _ : d), c.arg === m)) continue;
                  return { value: c.arg, done: r.done };
                }
                'throw' === c.type &&
                  ((i = _), (r.method = 'throw'), (r.arg = c.arg));
              }
            };
          }
          function S(t, n) {
            var r = n.method,
              i = t.iterator[r];
            if (i === e)
              return (
                (n.delegate = null),
                ('throw' === r &&
                  t.iterator.return &&
                  ((n.method = 'return'),
                  (n.arg = e),
                  S(t, n),
                  'throw' === n.method)) ||
                  ('return' !== r &&
                    ((n.method = 'throw'),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                m
              );
            var o = f(i, t.iterator, n.arg);
            if ('throw' === o.type)
              return (
                (n.method = 'throw'),
                (n.arg = o.arg),
                (n.delegate = null),
                m
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                  (n.delegate = null),
                  m)
                : a
              : ((n.method = 'throw'),
                (n.arg = new TypeError('iterator result is not an object')),
                (n.delegate = null),
                m);
          }
          function F(t) {
            var e = { tryLoc: t[0] };
            (1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e));
          }
          function L(t) {
            var e = t.completion || {};
            ((e.type = 'normal'), delete e.arg, (t.completion = e));
          }
          function C(t) {
            ((this.tryEntries = [{ tryLoc: 'root' }]),
              t.forEach(F, this),
              this.reset(!0));
          }
          function D(t) {
            if (null != t) {
              var n = t[a];
              if (n) return n.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < t.length; )
                      if (r.call(t, i))
                        return ((n.value = t[i]), (n.done = !1), n);
                    return ((n.value = e), (n.done = !0), n);
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(typeof t + ' is not iterable');
          }
          return (
            (v.prototype = E),
            i(R, 'constructor', { value: E, configurable: !0 }),
            i(E, 'constructor', { value: v, configurable: !0 }),
            (v.displayName = c(E, u, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || 'GeneratorFunction' === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, E)
                  : ((t.__proto__ = E), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(R)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            A(b.prototype),
            c(b.prototype, s, function () {
              return this;
            }),
            (t.AsyncIterator = b),
            (t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new b(l(e, n, r, i), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            A(R),
            c(R, u, 'Generator'),
            c(R, a, function () {
              return this;
            }),
            c(R, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return ((t.value = r), (t.done = !1), t);
                  }
                  return ((t.done = !0), t);
                }
              );
            }),
            (t.values = D),
            (C.prototype = {
              constructor: C,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(L),
                  !t)
                )
                  for (var n in this)
                    't' === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function i(r, i) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = t),
                    (n.next = r),
                    i && ((n.method = 'next'), (n.arg = e)),
                    !!i
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ('root' === a.tryLoc) return i('end');
                  if (a.tryLoc <= this.prev) {
                    var u = r.call(a, 'catchLoc'),
                      c = r.call(a, 'finallyLoc');
                    if (u && c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, 'finallyLoc') &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  m
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return (this.complete(n.completion, n.afterLoc), L(n), m);
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var i = r.arg;
                      L(n);
                    }
                    return i;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: D(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = e),
                  m
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          'object' == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function('r', 'regeneratorRuntime = r')(e);
        }
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return (t[r].call(o.exports, o, o.exports, n), o.exports);
  }
  (n(452), n(881));
})();

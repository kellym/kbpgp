// Generated by IcedCoffeeScript 1.7.1-c
(function() {
  var BaseDepacketizer, C, PacketParser, PgpReadBufferer, SlicerBuffer, SmallDepacketizer, StreamingDepacketizer, akatch, bufcat, iced, make_esc, xbt, __iced_k, __iced_k_noop, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-runtime').iced;
  __iced_k = __iced_k_noop = function() {};

  xbt = require('../../xbt');

  _ref = require('../../util'), akatch = _ref.akatch, bufcat = _ref.bufcat;

  C = require('../../const').openpgp;

  make_esc = require('iced-error').make_esc;

  SlicerBuffer = require('../buffer').SlicerBuffer;

  PgpReadBufferer = (function(_super) {
    __extends(PgpReadBufferer, _super);

    function PgpReadBufferer() {
      return PgpReadBufferer.__super__.constructor.apply(this, arguments);
    }

    PgpReadBufferer.prototype._read_uint8 = function(cb) {
      var buf, err, out, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "PgpReadBufferer._read_uint8"
          });
          _this._read({
            exactly: 1
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return buf = arguments[1];
              };
            })(),
            lineno: 14
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          out = typeof err !== "undefined" && err !== null ? null : buf.readUInt8(0);
          return cb(err, out);
        };
      })(this));
    };

    PgpReadBufferer.prototype._read_uint16 = function(cb) {
      var buf, err, out, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "PgpReadBufferer._read_uint16"
          });
          _this._read({
            exactly: 2
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return buf = arguments[1];
              };
            })(),
            lineno: 21
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          out = typeof err !== "undefined" && err !== null ? null : buf.readUInt16BE(0);
          return cb(err, out);
        };
      })(this));
    };

    PgpReadBufferer.prototype._read_uint32 = function(cb) {
      var buf, err, out, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "PgpReadBufferer._read_uint32"
          });
          _this._read({
            exactly: 4
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return buf = arguments[1];
              };
            })(),
            lineno: 28
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          out = typeof err !== "undefined" && err !== null ? null : buf.readUInt32BE(0);
          return cb(err, out);
        };
      })(this));
    };

    PgpReadBufferer.prototype._read_string = function(cb) {
      var buf, esc, len, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "_read_string");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "PgpReadBufferer._read_string"
          });
          _this._read_uint8(esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return len = arguments[0];
              };
            })(),
            lineno: 36
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
              funcname: "PgpReadBufferer._read_string"
            });
            _this._read({
              exactly: len
            }, esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return buf = arguments[0];
                };
              })(),
              lineno: 37
            })));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(null, buf);
          });
        };
      })(this));
    };

    return PgpReadBufferer;

  })(xbt.ReadBufferer);

  BaseDepacketizer = (function(_super) {
    __extends(BaseDepacketizer, _super);

    function BaseDepacketizer(_arg) {
      this.packet_version = _arg.packet_version, this.demux_klass = _arg.demux_klass;
      BaseDepacketizer.__super__.constructor.call(this, {});
      this._total = 0;
    }

    BaseDepacketizer.prototype.xbt_type = function() {
      return "BaseDepacketizer";
    };

    BaseDepacketizer.prototype._next = function(cb) {
      var demux, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      err = null;
      (function(_this) {
        return (function(__iced_k) {
          if (!_this._is_eof() || _this._inq.n_bytes()) {
            demux = new _this.demux_klass({});
            demux.set_parent(_this);
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                funcname: "BaseDepacketizer._next"
              });
              _this._stream_to(demux, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return err = arguments[0];
                  };
                })(),
                lineno: 59
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            return __iced_k();
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    BaseDepacketizer.prototype.run = function(cb) {
      var data, esc, final, len, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      final = false;
      esc = make_esc(cb, "_depacketize_1");
      (function(_this) {
        return (function(__iced_k) {
          var _results, _while;
          _results = [];
          _while = function(__iced_k) {
            var _break, _continue, _next;
            _break = function() {
              return __iced_k(_results);
            };
            _continue = function() {
              return iced.trampoline(function() {
                return _while(__iced_k);
              });
            };
            _next = function(__iced_next_arg) {
              _results.push(__iced_next_arg);
              return _continue();
            };
            if (!!final) {
              return _break();
            } else {
              _this._debug_msg("|", "Depacketizer.run --> find_length");
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                  funcname: "BaseDepacketizer.run"
                });
                _this._find_length(esc(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      final = arguments[0];
                      return len = arguments[1];
                    };
                  })(),
                  lineno: 69
                })));
                __iced_deferrals._fulfill();
              })(function() {
                _this._debug_msg("|", "Depacketizer.run <-- " + final + " " + len);
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                    funcname: "BaseDepacketizer.run"
                  });
                  _this._read({
                    exactly: len
                  }, esc(__iced_deferrals.defer({
                    assign_fn: (function() {
                      return function() {
                        return data = arguments[0];
                      };
                    })(),
                    lineno: 71
                  })));
                  __iced_deferrals._fulfill();
                })(function() {
                  _this._debug_msg("|", "Depacketizer.run <-- read " + (_this._debug_buffer(data)));
                  _this._total += len;
                  (function(__iced_k) {
                    __iced_deferrals = new iced.Deferrals(__iced_k, {
                      parent: ___iced_passed_deferral,
                      filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                      funcname: "BaseDepacketizer.run"
                    });
                    _this._pkt_emit({
                      data: data,
                      eof: final
                    }, esc(__iced_deferrals.defer({
                      lineno: 74
                    })));
                    __iced_deferrals._fulfill();
                  })(_next);
                });
              });
            }
          };
          _while(__iced_k);
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
              funcname: "BaseDepacketizer.run"
            });
            _this._pkt_eof(esc(__iced_deferrals.defer({
              lineno: 76
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                funcname: "BaseDepacketizer.run"
              });
              _this._next(esc(__iced_deferrals.defer({
                lineno: 77
              })));
              __iced_deferrals._fulfill();
            })(function() {
              return cb(null);
            });
          });
        };
      })(this));
    };

    BaseDepacketizer.prototype._find_length = function(cb) {
      var err, esc, final, first, nxt, ret, second, tag, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "_find_length");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "BaseDepacketizer._find_length"
          });
          _this._read_uint8(esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return tag = arguments[0];
              };
            })(),
            lineno: 85
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          err = ret = null;
          final = true;
          (function(__iced_k) {
            if (_this.packet_version === C.packet_version.old) {
              nxt = (function() {
                switch (tag & 0x03) {
                  case 0:
                    return this._read_uint8.bind(this);
                  case 1:
                    return this._read_uint16.bind(this);
                  case 2:
                    return this._read_uint32.bind(this);
                  default:
                    err = new Error("Cannot handle old-style wildcard lengths");
                    return null;
                }
              }).call(_this);
              (function(__iced_k) {
                if (nxt != null) {
                  (function(__iced_k) {
                    __iced_deferrals = new iced.Deferrals(__iced_k, {
                      parent: ___iced_passed_deferral,
                      filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                      funcname: "BaseDepacketizer._find_length"
                    });
                    nxt(esc(__iced_deferrals.defer({
                      assign_fn: (function() {
                        return function() {
                          return ret = arguments[0];
                        };
                      })(),
                      lineno: 97
                    })));
                    __iced_deferrals._fulfill();
                  })(__iced_k);
                } else {
                  return __iced_k();
                }
              })(__iced_k);
            } else {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                  funcname: "BaseDepacketizer._find_length"
                });
                _this._read_uint8(esc(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return first = arguments[0];
                    };
                  })(),
                  lineno: 100
                })));
                __iced_deferrals._fulfill();
              })(function() {
                (function(__iced_k) {
                  if (first < 192) {
                    return __iced_k(ret = first);
                  } else {
                    (function(__iced_k) {
                      if (first === 255) {
                        (function(__iced_k) {
                          __iced_deferrals = new iced.Deferrals(__iced_k, {
                            parent: ___iced_passed_deferral,
                            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                            funcname: "BaseDepacketizer._find_length"
                          });
                          _this._read_uint32(esc(__iced_deferrals.defer({
                            assign_fn: (function() {
                              return function() {
                                return ret = arguments[0];
                              };
                            })(),
                            lineno: 103
                          })));
                          __iced_deferrals._fulfill();
                        })(__iced_k);
                      } else {
                        (function(__iced_k) {
                          if (first < 224) {
                            (function(__iced_k) {
                              __iced_deferrals = new iced.Deferrals(__iced_k, {
                                parent: ___iced_passed_deferral,
                                filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
                                funcname: "BaseDepacketizer._find_length"
                              });
                              _this._read_uint8(esc(__iced_deferrals.defer({
                                assign_fn: (function() {
                                  return function() {
                                    return second = arguments[0];
                                  };
                                })(),
                                lineno: 105
                              })));
                              __iced_deferrals._fulfill();
                            })(function() {
                              return __iced_k(ret = ((first - 192) << 8) + (second + 192));
                            });
                          } else {
                            ret = 1 << (first & 0x1f);
                            return __iced_k(final = false);
                          }
                        })(__iced_k);
                      }
                    })(__iced_k);
                  }
                })(__iced_k);
              });
            }
          })(function() {
            return cb(err, final, ret);
          });
        };
      })(this));
    };

    return BaseDepacketizer;

  })(PgpReadBufferer);

  exports.StreamingDepacketizer = StreamingDepacketizer = (function(_super) {
    __extends(StreamingDepacketizer, _super);

    function StreamingDepacketizer(_arg) {
      var demux_klass, packet_version;
      packet_version = _arg.packet_version, demux_klass = _arg.demux_klass, this.packet_xbt = _arg.packet_xbt;
      StreamingDepacketizer.__super__.constructor.call(this, {
        packet_version: packet_version,
        demux_klass: demux_klass
      });
      this.packet_xbt.set_parent(this);
      this._total = 0;
    }

    StreamingDepacketizer.prototype.xbt_type = function() {
      return "StreamingDepacketizer";
    };

    StreamingDepacketizer.prototype._pkt_emit = function(_arg, cb) {
      var data, eof, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      data = _arg.data, eof = _arg.eof;
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "StreamingDepacketizer._pkt_emit"
          });
          _this.packet_xbt.chunk({
            data: data,
            eof: eof
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return data = arguments[1];
              };
            })(),
            lineno: 128
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
              funcname: "StreamingDepacketizer._pkt_emit"
            });
            _this._emit({
              data: data,
              eof: eof
            }, __iced_deferrals.defer({
              lineno: 129
            }));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(err);
          });
        };
      })(this));
    };

    StreamingDepacketizer.prototype._pkt_eof = function(cb) {
      return cb(null);
    };

    return StreamingDepacketizer;

  })(BaseDepacketizer);

  exports.SmallDepacketizer = SmallDepacketizer = (function(_super) {
    __extends(SmallDepacketizer, _super);

    function SmallDepacketizer(_arg) {
      var demux_klass, packet_version;
      packet_version = _arg.packet_version, demux_klass = _arg.demux_klass, this.packet_klass = _arg.packet_klass;
      SmallDepacketizer.__super__.constructor.call(this, {
        packet_version: packet_version,
        demux_klass: demux_klass
      });
      this._total = 0;
      this._bufs = [];
    }

    SmallDepacketizer.prototype.xbt_type = function() {
      return "SmallDepacketizer";
    };

    SmallDepacketizer.prototype._pkt_emit = function(_arg, cb) {
      var data, eof;
      data = _arg.data, eof = _arg.eof;
      this._bufs.push(data);
      return cb(null);
    };

    SmallDepacketizer.prototype._pkt_eof = function(cb) {
      var buf, esc, packet, sb, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "SmallDepacketizer::_pkt_eof");
      buf = Buffer.concat(this._bufs);
      this._bufs = [];
      sb = new SlicerBuffer(buf);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "SmallDepacketizer._pkt_eof"
          });
          akatch((function() {
            return _this.packet_klass.parse(sb, {
              streaming: true
            });
          }), esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return packet = arguments[0];
              };
            })(),
            lineno: 162
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
              funcname: "SmallDepacketizer._pkt_eof"
            });
            packet.set_xbt_root_metadata(_this, esc(__iced_deferrals.defer({
              lineno: 163
            })));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(null);
          });
        };
      })(this));
    };

    return SmallDepacketizer;

  })(BaseDepacketizer);

  exports.PacketParser = PacketParser = (function(_super) {
    __extends(PacketParser, _super);

    function PacketParser(_arg) {
      this.demux_klass = _arg.demux_klass;
      PacketParser.__super__.constructor.call(this, {});
    }

    PacketParser.prototype.xbt_type = function() {
      return "PacketParser";
    };

    PacketParser.prototype._run_body = function(cb) {
      return cb(new Error("not implemented!"));
    };

    PacketParser.prototype.run = function(cb) {
      var esc, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "PacketParser::_process");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
            funcname: "PacketParser.run"
          });
          _this._parse_header(esc(__iced_deferrals.defer({
            lineno: 181
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/kbpgp/src/openpgp/packet/xbt_depacketizer.iced",
              funcname: "PacketParser.run"
            });
            _this._run_body(esc(__iced_deferrals.defer({
              lineno: 182
            })));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(null);
          });
        };
      })(this));
    };

    return PacketParser;

  })(PgpReadBufferer);

}).call(this);
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var ASP, Canceler, calc_checksum, encode_length, iced, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  Canceler = require('iced-error').Canceler;

  exports.make_time_packet = function(d) {
    var b;
    d || (d = Math.floor(Date.now() / 1000));
    b = new Buffer(4);
    b.writeUInt32BE(d, 0);
    return b;
  };

  exports.uint_to_buffer = function(nbits, i) {
    var ret;
    ret = null;
    switch (nbits) {
      case 16:
        ret = new Buffer(2);
        ret.writeUInt16BE(i, 0);
        break;
      case 32:
        ret = new Buffer(4);
        ret.writeUInt32BE(i, 0);
        break;
      case 8:
        ret = new Buffer(1);
        ret.writeUInt8(i, 0);
        break;
      default:
        throw new Error("Bit types not found: " + nbit);
    }
    return ret;
  };

  exports.ASP = ASP = (function() {
    function ASP(_arg) {
      var canceler, delay, progress_hook;
      progress_hook = _arg.progress_hook, delay = _arg.delay, canceler = _arg.canceler;
      this._delay = delay || 2;
      this._canceler = canceler || (new Canceler());
      this._progress_hook = progress_hook || (function(obj) {});
      this._section = null;
    }

    ASP.prototype.section = function(s) {
      this._section = s;
      return this;
    };

    ASP.prototype.progress = function(o, cb) {
      var err, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      if (this._section) {
        o.section = this._section;
      }
      this._progress_hook(o);
      if (cb != null) {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/util.iced",
            funcname: "ASP.progress"
          });
          _this.delay(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 55
          }));
          __iced_deferrals._fulfill();
        })(function() {
          return __iced_k(cb(err));
        });
      } else {
        return __iced_k();
      }
    };

    ASP.prototype.delay = function(cb) {
      var ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/util.iced",
          funcname: "ASP.delay"
        });
        setTimeout(__iced_deferrals.defer({
          lineno: 59
        }), _this.delay);
        __iced_deferrals._fulfill();
      })(function() {
        return cb(_this._canceler.err());
      });
    };

    ASP.prototype.canceler = function() {
      return this._canceler;
    };

    ASP.prototype.progress_hook = function() {
      return this._progress_hook;
    };

    return ASP;

  })();

  exports.calc_checksum = calc_checksum = function(text) {
    var i, ret, _i, _ref;
    ret = 0;
    for (i = _i = 0, _ref = text.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      ret = (ret + text.readUInt8(i)) % 65536;
    }
    return ret;
  };

  exports.encode_length = encode_length = function(l) {
    var ret;
    ret = null;
    if (l < 192) {
      ret = new Buffer(1);
      ret.writeUInt8(l, 0);
    } else if (l >= 192 && l < 8384) {
      ret = new Buffer(2);
      ret.writeUInt16BE((l - 192) + (192 << 8), 0);
    } else {
      ret = new Buffer(5);
      ret.writeUInt8(0xff, 0);
      ret.writeUInt32BE(l, 1);
    }
    return ret;
  };

  exports.bufeq_fast = function(x, y) {
    var i, _i, _ref;
    if (x.length !== y.length) {
      return false;
    }
    for (i = _i = 0, _ref = x.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      if (x.readUInt8(i) !== y.readUInt8(i)) {
        return false;
      }
    }
    return true;
  };

  exports.bufeq_secure = function(x, y) {
    var check, i, ret, _i, _ref;
    ret = true;
    if (x.length !== y.length) {
      ret = false;
    } else {
      check = 0;
      for (i = _i = 0, _ref = x.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        check += x.readUInt8(i) ^ y.readUInt8(i);
      }
      ret = check === 0;
    }
    return ret;
  };

  exports.unix_time = function() {
    return Math.floor(Date.now() / 1000);
  };

}).call(this);